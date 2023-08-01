import React, { useState,useEffect,useRef,useCallback} from 'react';
import { Card, Button,SettingToggle } from '@shopify/polaris';
import '../css/AppStyle.css';
import axios from 'axios';
const config = require('../../server/config/httpConfig.js');

function FirstAuto({valueID}) {
  const [active, setActive] = useState(false);
  const handleToggle = useCallback(() => setActive((active) => !active), []);
const contentStatus = active ? 'Disable' : 'Enable';
const isInitialMount = useRef(true);

useEffect(() => {
async function getData() {
      const db_data = {search:valueID};
      await axios.post(config.HTTP_API + '/store/search/firstauto', db_data).then(result => {
        result.data[0].first_auto ==1 ? setActive(true) : setActive(false);
      });
    }
function fetchData() {
      if (isInitialMount.current && valueID) {
        isInitialMount.current = false;
        getData();
      }
    }
    fetchData();
});
  return (
    <Card>
      <SettingToggle
	action={{
	  content: contentStatus,
	 onAction: async () => {
	  const db_data = {first_auto:!active};
	  await axios.put(config.HTTP_API + '/store/' + valueID, db_data);
	    setActive(!active);
	}
	}}
	enabled={active}
	>
	Let first product always be the first product from the cart
	</SettingToggle>
    </Card>
  );
}

export default FirstAuto;
