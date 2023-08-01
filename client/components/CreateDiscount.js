import React, { useState,useEffect,useRef } from 'react';
import {
  Form,
  FormLayout,
  TextField,
  Toast,
  PageActions,
  Badge,
  Stack,
} from '@shopify/polaris';
import { useMutation } from 'react-apollo';
import axios from 'axios';
import {CREATE_DISCOUNT} from '../../server/config/appBasicQuery.js';
const config = require('../../server/config/httpConfig.js');

function CreateDiscount({valueID}) {
  const isInitialMount = useRef(true);
  const [refresh, setRefresh] = useState(false);
  const [discount, setDiscount] = useState();
  const [coupon, setCoupon] = useState();
  const [message, setMessage] = useState();
  const [displayCode, setDisplayCode] = useState();
  const [errorMsgD, setErrorMsgD] = useState();
  const [errorMsgC, setErrorMsgC] = useState();
  const [showToast, setToast] = useState(false);
  const [handleSubmit,{error:discountError, data:discountData}] = useMutation(CREATE_DISCOUNT);
  const handleDiscountChange = (value) => setDiscount(value);
  const handleCouponChange = (value) => setCoupon(value);
  const toggleToast = () => setToast(!showToast);
  const toastMarkup = showToast ? (
        <Toast content={message} onDismiss={toggleToast} Diduration={2500} />
    ) : null;

  useEffect(() => {
    async function getData() {
      const search_data = {search:valueID};
      await axios.post(config.HTTP_API + '/store/search/discount', search_data).then((res) => {
        setDisplayCode(res.data[0].discount_code);
      });
    }
    async function fetchData() {
      if (isInitialMount.current && valueID) {
        isInitialMount.current = false;
        await getData();
      }
      if(!isInitialMount.current && refresh) {
        await getData();
        setRefresh(false);
      }
    }
    fetchData();
  });

  return (
    <div>
    {toastMarkup}
      <Form>
        <FormLayout>
          <TextField
            id="discount_percentage"
            placeholder = "20"
            value={discount}
            onChange={handleDiscountChange}
            label="Discount percentage"
            type="number"
            error={errorMsgD}/>
          <TextField
            id="coupon"
            placeholder = "DEAL20"
            value={coupon}
            onChange={handleCouponChange}
            label="Coupon code"
            error={errorMsgC}/>
          <Stack>
            <Stack.Item fill>
              <h2>Current activated coupon code</h2>
            </Stack.Item>
            <Stack.Item>
	  	<Badge status="success">{displayCode}</Badge>
            </Stack.Item>
          </Stack>
          <PageActions
            primaryAction={[
              {
                content: 'Submit',
                onAction: () => {
                  setErrorMsgC('');
                  setErrorMsgD('');
                  discount&&coupon ?
                  handleSubmit({
                      variables:{
                        basicCodeDiscount:{
                          title:coupon,
                          code:coupon,
                          startsAt:"2019-01-01",
                          customerSelection:{all:true},
                          customerGets:{
                            value:{percentage:discount/100},
                            items:{all:true}
                          }
                        }
                      }
                    }).then(async({data})=>{
                    setMessage('Successfully Created');
                    toggleToast();
                    const db_data = {discount_code: coupon,discount_value:discount};
                    await axios.put(config.HTTP_API + '/store/' + valueID, db_data);
                    setDiscount('');
                    setCoupon('');
                    setRefresh(true);
                  })
                  :
                  discount ? setErrorMsgC('Discount code is required') : setErrorMsgD('Discount is required');
                }
              }
            ]}
            />
        </FormLayout>
      </Form>
    </div>
  );
}

export default CreateDiscount;
