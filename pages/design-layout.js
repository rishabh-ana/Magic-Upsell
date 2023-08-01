import React, { useState, useCallback, useEffect, useRef } from 'react';
import {
  Card,
  Layout,
  Page,
  Frame,
} from '@shopify/polaris';
import { GET_SHOP_ID } from '../server/config/appBasicQuery.js';
import { useQuery } from 'react-apollo';
import ThemeSetting from '../client/components/ThemeSetting.js';
const config = require('../server/config/httpConfig.js');
import '../client/css/AppStyle.css';

function DesignLayout() {
  const isInit = useRef(true);
  const { error, data } = useQuery(GET_SHOP_ID);
  const [refresh, setRefresh] = useState(false);
const [pending, setPending] = useState(true)

  useEffect(() => {
    if (isInit.current && data) {
      setPending(false);
      isInit.current = false;
    }
  })


  return (
    <div>
      {!pending ?
        <div>
          <div className="navigationMain">
            <div><p><a href="/index">Front Page</a></p></div>
            <div><p><a href="/annotated-layout">Setting</a></p></div>
            <div><p><a style={{ 'color': '#5c6ac4' }} href="/design-layout">Design</a></p></div>
            <div><p><a href="/analytics-layout">Analytics</a></p></div>
            <div><p><a href="/faq-layout">FAQ</a></p></div>
          </div>
          <div style={{ padding: '2% 10%' }}>
            <Frame>
              <Layout>
                <Layout.Section>
                  <ThemeSetting valueID={config.ExtractId(data.shop.id)} />
                </Layout.Section>
              </Layout>
            </Frame>
          </div>
        </div>
        :
        null
      }
    </div>
  );
}

export default DesignLayout;
