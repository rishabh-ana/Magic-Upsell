import React, { useState,useEffect,useRef } from 'react';
import {
  Card,
} from '@shopify/polaris';
import axios from 'axios';
import store from 'store-js';
const config = require('../../server/config/httpConfig.js');

function PreView(props) {
  const isInitialMount = useRef(true);
  const themeColor = useRef();
  const fontColor = useRef();
  const efontColor = useRef();
  const buttonColor = useRef();
  const headerColor = useRef();
  const checkedRadio = useRef();
  const themeTitle = useRef();
  const firstBtn = useRef();
  const secondBtn = useRef();
  const [second, setSecond] = useState();
  const [minute, setMinute] = useState();
  const [timer, setTimer] = useState();

  useEffect(() => {
    async function getData() {
      const search_data = {search:props.valueID};
      await axios.post(config.HTTP_API + '/store/search/theme', search_data).then((res) => {
        themeColor.current = res.data[0].theme_color;
        fontColor.current = res.data[0].theme_font_color;
        efontColor.current = res.data[0].theme_efont_color;
        buttonColor.current = res.data[0].theme_button_color;
        headerColor.current = res.data[0].theme_header_color;
	      res.data[0].variant_type == 'dropdown' ? checkedRadio.current = 'optional' : checkedRadio.current = 'disabled';
        if(res.data[0].theme_title) {
          themeTitle.current = res.data[0].theme_title;
        }
	else {themeTitle.current = '';}
	firstBtn.current = res.data[0].first_btn_text;
	secondBtn.current = res.data[0].second_btn_text;
        setMinute(res.data[0].minute);
        setSecond(res.data[0].second);
        res.data[0].timer != 0 ? setTimer(true) : setTimer(false);
      });
    }
    function getPreview() {
      themeColor.current = store.get('themeColor');
      fontColor.current = store.get('fontColor');
      efontColor.current = store.get('efontColor');
      buttonColor.current = store.get('buttonColor');
      headerColor.current = store.get('headerColor');
      checkedRadio.current = store.get('checkedRadio');
      themeTitle.current = store.get('themeTitle')
      setMinute(store.get('minute'));
      setSecond(store.get('second'));
      setTimer(store.get('timer'));
      firstBtn.current = store.get('firstBtn');
      secondBtn.current = store.get('secondBtn');
    }
    async function fetchData() {
      if (isInitialMount.current && props) {
        isInitialMount.current = false;
        await getData();
        store.set('themeColor',themeColor.current);
        store.set('fontColor',fontColor.current);
        store.set('efontColor',efontColor.current);
        store.set('buttonColor',buttonColor.current);
        store.set('headerColor',headerColor.current);
	store.set('checkedRadio',checkedRadio.current);
        store.set('themeTitle',themeTitle.current);
        store.set('minute',3);
        store.set('second',30);
        store.set('timer',timer);
	store.set('firstBtn',firstBtn.current);
	store.set('secondBtn',secondBtn.current);
      }
      if(!isInitialMount.current && props.refresh) {
        await getData();
        props.handleRefresh(false);
      }
      if(!isInitialMount.current && props.preview) {
        getPreview();
        props.handlePreview(false);
      }
    }
    fetchData();
  });

  return (
    <div className="modelContent">
      <div className="upsellHeader" style={{'backgroundColor':themeColor.current}}>
        {timer==1 ? (
          <p className="timer" style={{'color':headerColor.current}}>{minute}:{second}</p>
        ) : (
          null
        )}
        {themeTitle.current?
          <h1 style={{'color':headerColor.current}}>{themeTitle.current}</h1>
          :
          <h1 style={{'color':headerColor.current}}><span className="discount">20% OFF</span> Your Next Order!</h1>
        }
      </div>
      <img className="upsell-img" src="https://cdn.shopify.com/s/files/1/0273/3332/8930/files/default.png?v=1578600042"/>
      <div className="upsellInner">
        <p className="upsell-title" style={{'color':fontColor.current}}>Comfy T-Shirt</p>
        <div className="flex">
          <p className="upsell-price" style={{'color':efontColor.current}}>25.99</p>
          <p className="compare" style={{'color':fontColor.current}}>59.99</p>
        </div>
	{checkedRadio.current == 'disabled' ? (
	<div className="variants-dic">
          <li className="variants-list"><button className="variants-btn selected" style={{'color':efontColor.current,'borderColor':efontColor.current}}>Pink</button></li>
          <li className="variants-list"><button className="variants-btn" style={{'color':fontColor.current}}>Blue</button></li>
          <li className="variants-list"><button className="variants-btn" style={{'color':fontColor.current}}>Yellow</button></li>
        </div>
) : (
	<div className="variants-dic">
	  <select className="variants-list-drop" style={{'color':efontColor.current}}>
		<option>Pink</option><option>Blue</option><option>Yellow</option>
	  </select>
        </div>
)}
        <div className="buttonFlex">
          <button className="change-next" style={{'color':fontColor.current}}>{firstBtn.current}</button>
          <button className="add-to-cart" style={{'backgroundColor':buttonColor.current}}>{secondBtn.current}</button>
        </div>
      </div>
    </div>
  );
}

export default PreView;
