import React, { useState,useEffect,useRef } from 'react';
import {
  Layout,
  Page,
  Card,
} from '@shopify/polaris';
import DisplayOrders from '../client/components/DisplayOrders';
import SearchOrdersSpecific from '../client/components/SearchOrdersSpecific';
import SearchOrdersCustomize from '../client/components/SearchOrdersCustomize';
import {GET_SHOP_ID} from '../server/config/appBasicQuery.js';
import { useQuery } from 'react-apollo';
import axios from 'axios';
const config = require('../server/config/httpConfig.js');
import '../client/css/AppStyle.css';

function AnalyticsLayout() {
  const isInitialMount = useRef(true);
  const [shopId, setShopId] = useState();
  const [coupon, setCoupon] = useState();
  const [date, setDate] = useState('today');
  const [refresh, setRefresh] = useState(false);
  const para = {coupon,date};

  const {error, data} = useQuery(GET_SHOP_ID);
  if(error) return <div>error</div>
  if(data && !shopId) setShopId(config.ExtractId(data.shop.id));

  useEffect(() => {
    async function getData() {
      const search_data = {search:shopId};
      await axios.post(config.HTTP_API + '/store/search/discount', search_data).then(result => {
          result.data[0].discount_code ? setCoupon(result.data[0].discount_code) : null;
        });
    }
    async function fetchData(){
      if(isInitialMount.current && shopId) {
        isInitialMount.current = false;
        await getData();
      }
    }
    fetchData();
  });


  return (
    <div>
    <div className="navigationMain">
      <div><p><a href="/index">Front Page</a></p></div>
      <div><p><a href="/annotated-layout">Setting</a></p></div>
      <div><p><a href="/design-layout">Design</a></p></div>
      <div><p><a style={{'color':'#5c6ac4'}} href="/analytics-layout">Analytics</a></p></div>
      <div><p><a href="/faq-layout">FAQ</a></p></div>
    </div>
    <Page>
      <Layout>
        <Layout.Section>
          <Card title="App Analytics" sectioned>
            <p>Create report to view a summary of your app's discount code performance</p>
            <DisplayOrders valueCODE={para}/>
          </Card>
          <SearchOrdersSpecific setDate={setDate}/>
          <SearchOrdersCustomize setDate={setDate}/>
        </Layout.Section>
      </Layout>
    </Page>
    </div>
  );
}

export default AnalyticsLayout;
