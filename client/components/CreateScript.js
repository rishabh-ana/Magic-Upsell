import React, { useState, useRef, useEffect } from "react";
import { Toast, Button } from "@shopify/polaris";
import { useMutation } from "react-apollo";
import axios from "axios";
import { CREATE_SCRIPT } from "../../server/config/appBasicQuery.js";
const config = require("../../server/config/httpConfig.js");

function getUrl(s) {
  switch (s) {
    case "dynamic":
      return "https://cdn.shopify.com/s/files/1/0313/1447/7188/files/MagicD-v7.js?v=1600115933";
    case "manual":
      return "https://cdn.shopify.com/s/files/1/0313/1447/7188/files/MagicM-v7.js?v=1600115933";
    default:
      null;
  }
}

function CreateScript(props) {
  const isInitialMount = useRef(true);
  const [showToast, setToast] = useState(false);
  const [message, setMessage] = useState();
  const [handleSubmit, { error: discountError, data: discountData }] =
    useMutation(CREATE_SCRIPT);
  const [refresh, setRefresh] = useState(false);
  const toggleToast = () => setToast(!showToast);
  const toastMarkup = showToast ? (
    <Toast content={message} onDismiss={toggleToast} Diduration={1500} />
  ) : null;
  const [pending, setPending] = useState(true);

  useEffect(() => {
    if (isInitialMount.current && props) {
      setPending(false);
      isInitialMount.current = false;
      console.log("sss", props);
    }
  });

  return (
    <>
      {!pending ? (
        <div>
          {toastMarkup}
          <Button
            disabled={!props.manual[2]}
            primary
            onClick={() => {
              handleSubmit({
                variables: {
                  input: {
                    displayScope: "ORDER_STATUS",
                    src: getUrl(props.manual[1]),
                  },
                },
              }).then(async ({ data }) => {
                console.log(data);
                setMessage("Successfully Installed!");
                toggleToast();
                const db_data = {
                  script_id: config.ExtractId(
                    data.scriptTagCreate.scriptTag.id
                  ),
                  upsell_mode: props.manual[1],
                };
                await axios.put(
                  config.HTTP_API + "/store/" + props.valueID,
                  db_data
                );
                props.handleRefresh();
              });
            }}>
            Activate
          </Button>
        </div>
      ) : null}
    </>
  );
}
export default CreateScript;
