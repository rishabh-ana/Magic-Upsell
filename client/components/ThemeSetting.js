import React, { useState, useRef, useCallback, useEffect } from 'react';
import {
  Form,
  FormLayout,
  TextField,
  Toast,
  ButtonGroup,
  Button,
  Checkbox,
  RadioButton,
  Card
} from '@shopify/polaris';
import axios from 'axios';
import '../css/AppStyle.css';

const config = require('../../server/config/httpConfig.js');

function ThemeSetting(props) {
  const isInitialMount = useRef(true);
  const [themeColor, setThemeColor] = useState();
  const [fontColor, setFontColor] = useState();
  const [efontColor, setEfontColor] = useState();
  const [buttonColor, setButtonColor] = useState();
  const [headerColor, setHeaderColor] = useState();
  const [second, setSecond] = useState();
  const [minute, setMinute] = useState();
  const [checked, setChecked] = useState(false);
  const [variantType, setVariantType] = useState('radio');
  const [checkedRadio, setCheckedRadio] = useState('disabled');
  const [theme_title, setThemeTitle] = useState('');
  const [firstBtn, setFirstBtn] = useState();
  const [secondBtn, setSecondBtn] = useState();
  const [message, setMessage] = useState();
  const [showToast, setToast] = useState(false);
  const toggleToast = () => setToast(!showToast);
  const toastMarkup = showToast ? (
    <Toast content={message} onDismiss={toggleToast} Diduration={2500} />
  ) : null;

  useEffect(() => {
    async function getData() {
      const search_data = { search: props.valueID };
      await axios.post(config.HTTP_API + '/store/search/theme', search_data).then((res) => {
        setThemeColor(res.data[0].theme_color);
        setFontColor(res.data[0].theme_font_color);
        setEfontColor(res.data[0].theme_efont_color);
        setButtonColor(res.data[0].theme_button_color);
        setHeaderColor(res.data[0].theme_header_color);
        res.data[0].variant_type == 'dropdown' ? setCheckedRadio('optional') : setCheckedRadio('disabled');
        if (res.data[0].theme_title) {
          setThemeTitle(res.data[0].theme_title);
        } else {
          setThemeTitle('20% OFF Your Next Order!');
        }
        setFirstBtn(res.data[0].first_btn_text);
        setSecondBtn(res.data[0].second_btn_text);
        setMinute(res.data[0].minute);
        setSecond(res.data[0].second);
        setChecked(res.data[0].timer);
      });
    }
    async function fetchData() {
      if (isInitialMount.current && props) {
        isInitialMount.current = false;
        await getData();
      }
    }
    fetchData();

  });

  return (
    <div>
      {toastMarkup}
      <div style={{ display: 'flex' }}>
        <div style={{ width: '50%' }}>
          <Card title="Upsell theme design" sectioned>
            <Form>
              <FormLayout>
                <TextField
                  value={theme_title}
                  onChange={value => setThemeTitle(value)}
                  label="Custom Title"
                  type="text"
                />
                <div className="flex-container">
                  <div>
                    <TextField
                      id="theme_color"
                      placeholder="color"
                      value={themeColor}
                      onChange={value => setThemeColor(value)}
                      label="Theme color" />
                  </div>
                  <div>
                    <TextField
                      id="header_color"
                      placeholder="color"
                      value={headerColor}
                      onChange={value => setHeaderColor(value)}
                      label="Header color" />
                  </div>
                </div>
                <div className="flex-container">
                  <div>
                    <TextField
                      id="font_color"
                      placeholder="color"
                      value={fontColor}
                      onChange={value => setFontColor(value)}
                      label="Font color" />
                  </div>
                  <div>
                    <TextField
                      id="highlight_color"
                      placeholder="color"
                      value={efontColor}
                      onChange={value => setEfontColor(value)}
                      label="Highlighted color" />
                  </div>
                </div>
                <div className="flex-container">
                  <div>
                    <TextField
                      id="button_color"
                      placeholder="color"
                      value={buttonColor}
                      onChange={value => setButtonColor(value)}
                      label="Button color" />
                  </div>
                </div>
                <div className="flex-container">
                  <div>
                    <TextField
                      id="first_btn_text"
                      placeholder={firstBtn}
                      value={firstBtn}
                      onChange={value => setFirstBtn(value)}
                      label="First Button" />
                  </div>
                  <div>
                    <TextField
                      id="second_btn_text"
                      placeholder={secondBtn}
                      value={secondBtn}
                      onChange={value => setSecondBtn(value)}
                      label="Second Button" />
                  </div>
                </div>

                <div className="flex-container">
                  <RadioButton
                    label="Radio"
                    checked={checkedRadio === 'disabled'}
                    id="disabled"
                    name="accounts"
                    onChange={(value) => {setCheckedRadio('disabled')}}
                  />
                  <RadioButton
                    label="Drop Down"
                    id="optional"
                    name="accounts"
                    checked={checkedRadio === 'optional'}
                    onChange={(value) => {setCheckedRadio('optional')}}
                  />
                </div>
                <Checkbox
                  id="check_box"
                  label="Enable timer"
                  checked={checked}
                  onChange={(value) => setChecked(value)}
                />
                <div className="flex-container">
                  <div>
                    <TextField
                      id="minute"
                      disabled={!checked}
                      placeholder="3"
                      value={minute}
                      onChange={value => setMinute(value)}
                      label="Minute"
                      type="number"
                    />
                  </div>
                  <div>
                    <TextField
                      id="second"
                      disabled={!checked}
                      placeholder="30"
                      value={second}
                      onChange={value => setSecond(value)}
                      label="Second"
                      type="number"
                    />
                  </div>
                </div>
                <ButtonGroup>
                  <Button
                    onClick={() => {
                      setThemeColor('#f47777');
                      setHeaderColor('white');
                      setFontColor('black');
                      setEfontColor('#f74444');
                      setButtonColor('#f74444');
                      setChecked(true);
                      setMinute(3);
                      setSecond(30);
                      setCheckedRadio('disabled');
                      setThemeTitle('');
                      setFirstBtn('No Thanks :(');
                      setSecondBtn('Add To Cart');
                    }}>Reset to default</Button>
                  <Button
                    primary
                    onClick={async () => {
                      checkedRadio == 'disabled' ? setVariantType('radio') : setVariantType('dropdown');
                      const db_data = {
                        theme_color: themeColor,
                        theme_font_color: fontColor,
                        theme_efont_color: efontColor,
                        theme_header_color: headerColor,
                        theme_button_color: buttonColor,
                        first_btn_text: firstBtn,
                        second_btn_text: secondBtn,
                        timer: checked,
                        minute: minute,
                        second: second,
                        variant_type: variantType,
                        theme_title: theme_title
                      };
                      await axios.put(config.HTTP_API + '/store/' + props.valueID, db_data).then(() => {
                        setMessage('Theme applied successfully');
                        toggleToast();
                      })
                    }}>Apply theme</Button>
                </ButtonGroup>
              </FormLayout>
            </Form>
          </Card>
        </div>
        <div className="modelContent" style={{ width: '50%' }}>
          <div className="upsellHeader" style={{ 'backgroundColor': themeColor }}>
            {checked == 1 ? (
              <p className="timer" style={{ 'color': headerColor }}>{minute}:{second}</p>
            ) : (
              null
            )}
            {theme_title ?
              <h1 style={{ 'color': headerColor }}>{theme_title}</h1>
              :
              <h1 style={{ 'color': headerColor }}><span className="discount">20% OFF</span> Your Next Order!</h1>
            }
          </div>
          <img className="upsell-img" src="https://cdn.shopify.com/s/files/1/0273/3332/8930/files/default.png?v=1578600042" />
          <div className="upsellInner">
            <p className="upsell-title" style={{ 'color': fontColor }}>Comfy T-Shirt</p>
            <div className="flex">
              <p className="upsell-price" style={{ 'color': efontColor }}>25.99</p>
              <p className="compare" style={{ 'color': fontColor }}>59.99</p>
            </div>
            {checkedRadio == 'disabled' ? (
              <div className="variants-dic">
                <li className="variants-list"><button className="variants-btn selected" style={{ 'color': efontColor, 'borderColor': efontColor }}>Pink</button></li>
                <li className="variants-list"><button className="variants-btn" style={{ 'color': fontColor }}>Blue</button></li>
                <li className="variants-list"><button className="variants-btn" style={{ 'color': fontColor }}>Yellow</button></li>
              </div>
            ) : (
              <div className="variants-dic">
                <select className="variants-list-drop" style={{ 'color': efontColor }}>
                  <option>Pink</option><option>Blue</option><option>Yellow</option>
                </select>
              </div>
            )}
            <div className="buttonFlex">
              <button className="change-next" style={{ 'color': fontColor }}>{firstBtn}</button>
              <button className="add-to-cart" style={{ 'backgroundColor': buttonColor }}>{secondBtn}</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ThemeSetting;
