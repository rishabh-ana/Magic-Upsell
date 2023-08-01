import React, { useState,useEffect,useRef,useCallback } from 'react';
import {
  Card,
  Badge,
  Stack,
Layout
} from '@shopify/polaris';
import CreateScript from './CreateScript.js';
import '../css/AppStyle.css';
import axios from 'axios';
const config = require('../../server/config/httpConfig.js');
import DeleteScript from './DeleteScript';

function ScriptComponent({valueID}) {
  const isInitialMount = useRef(true);
  const [refresh, setRefresh] = useState(false);
  const [displayMode, setDisplayMode] = useState();
  const [avaliable, setAvaliable] = useState(true);
  const dynamic = [valueID,'dynamic',avaliable];
  const manual = [valueID,'manual',avaliable];
  const [pending, setPending] = useState(true);

const handleRefresh = useCallback(() => setRefresh(true));

  useEffect(() => {
    async function getData() {
      const db_data = {search:valueID};
      await axios.post(config.HTTP_API + '/store/search/mode', db_data).then(result => {
        result.data[0].upsell_mode ? setAvaliable(false) : setAvaliable(true);
        result.data[0].upsell_mode ? setDisplayMode(result.data[0].upsell_mode) : setDisplayMode('none');
	setPending(false);
      });
    }
    async function fetchData(){
      if (isInitialMount.current && valueID) {
        isInitialMount.current = false;
        await getData();
      }
      if(refresh) {
        await getData();
        setRefresh(false);
      }
    }
    fetchData();
  });

  return (
<>
{!pending ?
    <div>
<Layout.AnnotatedSection
            title="Activate Upsell"
            description="Click to activate the upsell. Only one mode can be activated each time, you can change the mode after disable the current mode.">

      <div className="flex-container">
        <div style={{"marginRight":"10px"}}>
          <Card sectioned title="Dynamic Mode">
            <CreateScript manual={dynamic} valueID={valueID} handleRefresh={handleRefresh}/>
            <br/>
            <p>Upsell will contain the first product in customer's cart and <a href="/faq-layout#recommend-product">recommended products</a>.</p>
            <br/>
          </Card>
        </div>
        <div style={{"marginLeft":"10px"}}>
          <Card sectioned title="Manual Mode">
            <CreateScript manual={manual} valueID={valueID} handleRefresh={handleRefresh}/>
            <br/>
            <p>Upsell will contain selected products, which should be selected manually. <a href="/faq-layout#mode">Read more</a></p>
            <br/>
          </Card>
        </div>
      </div>
      <Card sectioned>
        <Stack>
          <Stack.Item fill>
            <h2>Current activated upsell mode</h2>
          </Stack.Item>
          <Stack.Item>
          {displayMode != 'none' ? (
            <Badge status='success'>{displayMode}</Badge>
          ) : (
            <Badge>{displayMode}</Badge>
          )}
          </Stack.Item>
        </Stack>
      </Card>
</Layout.AnnotatedSection>
<Layout.AnnotatedSection
            title="Disable Upsell"
            description="Temporarily disable all functions.">
<DeleteScript valueID={valueID} handleRefresh={handleRefresh}/>
</Layout.AnnotatedSection>
<hr/>
    </div>
:
null
}
</>
  )
}

export default ScriptComponent;
