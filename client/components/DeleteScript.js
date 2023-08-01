import React, { useState,useEffect,useRef,useContext,useCallback } from 'react';
import {
  Toast,
  Button,
  Modal,
  TextContainer
} from '@shopify/polaris';
import { useQuery,useMutation } from 'react-apollo';
import axios from 'axios';
import {DELETE_SCRIPT} from '../../server/config/appBasicQuery.js';
const config = require('../../server/config/httpConfig.js');

function DeleteScript(props) {
  const isInitialMount = useRef(true);
  const [showToast, setToast] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [active, setActive] = useState(false);
  const [message, setMessage] = useState();
  const [scriptID, setScriptID] = useState();
  const [status, setStatus] = useState(true);
  const toggleToast = () => setToast(!showToast);
  const toastMarkup = showToast ? (
        <Toast content={message} onDismiss={toggleToast} Diduration={1500} />
    ) : null;
  const [handleSubmit,{error:discountError, data:discountData}] = useMutation(DELETE_SCRIPT);
  const handleChange = useCallback(() => setActive(!active), [active]);

  useEffect(() => {
    async function getData() {
      const search_data = {search:props.valueID};
      await axios.post(config.HTTP_API + '/store/search/scriptID', search_data).then((res) => {
        setScriptID(res.data[0].script_id);
        res.data[0].script_id ? setStatus(false) : setStatus(true);
      });
    }
    async function fetchData(){
      if (isInitialMount.current && props) {
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
    <div>
      {toastMarkup}
      <Button
      destructive
      disabled={status}
      onClick={handleChange}>Disable</Button>

      <Modal
      open={active}
      onClose={handleChange}
      title="Pause all the functions"
      secondaryActions={{
        content:'Cancel',
        onAction: handleChange,
      }}
      primaryAction={{
        content:'Disable',
        onAction: () => {
          handleSubmit({
            variables:{
              id: config.CombineId(scriptID)
            }
          }).then(async ({data})=>{
            handleChange();
            setMessage('Successfully Disabled!');
            toggleToast();
            const delete_data = {script_id:'',upsell_mode:''};
            await axios.put(config.HTTP_API + '/store/' + props.valueID, delete_data).then(result=>{
              setStatus(true);
              setRefresh(true);
		props.handleRefresh();
            });
          });
        }
      }}
      >
      <Modal.Section>
        <TextContainer>
          <p>Your data will be stored, you can activate the upsell back at anytime or switch to another upsell mode.</p>
        </TextContainer>
      </Modal.Section>
      </Modal>
    </div>
  )
}
export default DeleteScript;
