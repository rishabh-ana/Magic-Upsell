import React, { useState } from 'react';
import {
  Card,
  Layout,
  Page,
  Frame,
} from '@shopify/polaris';
import CreateDiscount from '../client/components/CreateDiscount';
import ScriptComponent from '../client/components/ScriptComponent';
import ProductPicker from '../client/components/ProductPicker';
import FirstAuto from '../client/components/FirstAuto';
import {GET_SHOP_ID} from '../server/config/appBasicQuery.js';
import { useQuery } from 'react-apollo';
const config = require('../server/config/httpConfig.js');
import '../client/css/AppStyle.css';

function AnnotatedLayout() {
  const [shopId, setShopId] = useState();
  const [refresh, setRefresh] = useState(false);
  const {error, data} = useQuery(GET_SHOP_ID);
  if(data && !shopId) setShopId(config.ExtractId(data.shop.id));
  return (
    <div>
    <div className="navigationMain">
      <div><p><a href="/index">Front Page</a></p></div>
      <div><p><a style={{'color':'#5c6ac4'}} href="/annotated-layout">Setting</a></p></div>
      <div><p><a href="/design-layout">Design</a></p></div>
      <div><p><a href="/analytics-layout">Analytics</a></p></div>
      <div><p><a href="/faq-layout">FAQ</a></p></div>
    </div>
    <Page>
      <Frame>
        <Layout>
          <ScriptComponent valueID={shopId}/>
          <Layout.AnnotatedSection
            title="Upsell Discount"
            description="Create and change current upsell discount. Put Discount percentage = 0 , Coupon code = (add a space) to disable discount.">
            <Card sectioned>
            <CreateDiscount valueID={shopId}/>
            </Card>
          </Layout.AnnotatedSection>
          <Layout.AnnotatedSection
            title="Product Picker - Manual Mode"
            description="Only works if the mode is on Manual. Up to 4 products can be picked each time.">
            <ProductPicker valueID={shopId}/>
          </Layout.AnnotatedSection>
	<Layout.AnnotatedSection
            title="Auto First Product - Manual Mode"
            description="Only works if the mode is on Manual. The first product in upsell will be the first product from customer's cart.">
            <FirstAuto valueID={shopId}/>
          </Layout.AnnotatedSection>

        </Layout>
      </Frame>
    </Page>
    </div>
  );
}

export default AnnotatedLayout;
