import React, { useState,useEffect,useRef,useContext } from 'react';
import {
  Card,Stack,Badge
} from '@shopify/polaris';
import { useQuery } from 'react-apollo';
import {GET_PRODUCTS_BY_ID} from '../../server/config/appBasicQuery.js';
import '../css/AppStyle.css';
import axios from 'axios';
import {Refresh} from './ProductPicker.js';
const config = require('../../server/config/httpConfig.js');

function ProductList ({valueID}) {
  const isInitialMount = useRef(true);
  const [productArray, setProductArray] = useState();
  let {refresh, setRefresh} = useContext(Refresh);
  const [p1, setP1] = useState();
  const [p2, setP2] = useState();
  const [p3, setP3] = useState();
  const [p4, setP4] = useState();

  useEffect(() => {
    async function getData() {
      const db_data = {search:valueID};
      await axios.post(config.HTTP_API + '/store/search/products', db_data).then(result => {
        result.data[0].product_first ? setP1(result.data[0].product_first) : null;
        result.data[0].product_second ? setP2(result.data[0].product_second) : null;
        result.data[0].product_third ? setP3(result.data[0].product_third) : null;
        result.data[0].product_forth ? setP4(result.data[0].product_forth) : null;
      });
    }
    async function fetchData(){
      if (isInitialMount.current && valueID) {
       isInitialMount.current = false;
       await getData();
      }
      if(!isInitialMount.current && refresh) {
        setP1('');setP2('');setP3('');setP4('');
        await getData();
        setRefresh(false);
      }
    }
    fetchData();
  });

  return (
    <div className="product-list">
      <h2 style={{marginBottom:'10px'}}>Selected products</h2>
      <Stack>
        <Stack.Item><Badge status="success">{p1}</Badge></Stack.Item>
        <Stack.Item><Badge status="success">{p2}</Badge></Stack.Item>
        <Stack.Item><Badge status="success">{p3}</Badge></Stack.Item>
        <Stack.Item><Badge status="success">{p4}</Badge></Stack.Item>
      </Stack>
    </div>
  );
}

export default ProductList;
