import React, { useState, useEffect, useRef } from "react";
import {
  EmptyState,
  Layout,
  Page,
  Banner,
  Card,
  Heading,
  Frame,
  SkeletonBodyText,
  SkeletonDisplayText,
  SkeletonPage,
  TextContainer,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";
const config = require("../server/config/httpConfig.js");
import axios from "axios";
import {
  GET_SHOP_ID,
  CREATE_RECURRING,
} from "../server/config/appBasicQuery.js";
import { useQuery, useMutation } from "react-apollo";
import "../client/css/AppStyle.css";
import Recommend from "../client/components/Recommend.js";

function Index() {
  const isInitialMount = useRef(true);
  const [recurr] = useMutation(CREATE_RECURRING);
  const { error: errorID, data: dataID } = useQuery(GET_SHOP_ID);
  const [empty, setEmpty] = useState(true);
  const approve = useRef("block");
  const [pending, setPending] = useState(true);
  const [freeTrial, setFreeTrial] = useState(14);
  const deadline = useRef(0);

  useEffect(() => {
    async function redirectUser(day_install, day_un) {
      setPending(true);
      approve.current = "none";
      const result = await recurr({
        variables: {
          name: "Unlimited",
          test: true,
          lineItems: [
            {
              plan: {
                appRecurringPricingDetails: {
                  price: { amount: 9.95, currencyCode: "USD" },
                },
              },
            },
          ],
          returnUrl: "https://c904-118-185-6-185.ngrok-free.app",
          trialDays: 30,
        },
      });
      axios
        .put(config.HTTP_API + "/store/" + config.ExtractId(dataID.shop.id), {
          confirm: result.data.appSubscriptionCreate.appSubscription.id,
        })
        .then((cc) => {
          window.top.location =
            result.data.appSubscriptionCreate.confirmationUrl;
        });
    }

    async function checkStatus() {
      axios
        .post(config.HTTP_API + "/store/search/status", {
          search: config.ExtractId(dataID.shop.id),
        })
        .then((result) => {
          if (result.data[0].confirm != null) {
            //new user
            axios
              .get(
                config.HTTP_API +
                  "/charge/" +
                  config.ExtractId(result.data[0].confirm)
              )
              .then((dd) => {
                if (
                  dd.data.data.recurring_application_charge.status === "active"
                ) {
                  setPending(false);
                } else redirectUser();
              });
          } else {
            //old user
            if (result.data[0].status === "ACTIVE") setPending(false);
            else redirectUser();
          }
        });
    }

    async function getData() {
      const db_data = { search: config.ExtractId(dataID.shop.id) };
      await axios
        .post(config.HTTP_API + "/store/search/mode", db_data)
        .then((result) => {
          result.data[0].upsell_mode ? setEmpty(false) : setEmpty(true);
        });
    }

    async function fetchData() {
      if (isInitialMount.current && dataID) {
        await checkStatus();
        isInitialMount.current = false;
        await getData();
      }
    }

    fetchData();
  });
  return (
    <div>
      <Page>
        {!pending ? (
          empty ? (
            <EmptyState
              heading="Boost your sales"
              action={{ content: "Start", url: "/faq-layout" }}
              image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg">
              <p>
                Read our <a href="/faq-layout">instruction</a> to set up your
                first upsell
              </p>
            </EmptyState>
          ) : (
            <div>
              <header style={{ textAlign: "center", padding: "50px" }}>
                <h1 style={{ fontSize: "2.5em", marginBottom: "20px" }}>
                  Magic AI Post-Purchase Upsell
                </h1>
                <p style={{ fontSize: "1.5em" }}>
                  Increase your sales with our magic pop up...
                </p>
              </header>
              <Banner
                className="index-banner"
                title="We Got An update For Upsell Design!"
                status="info">
                <p>
                  You can now edit your button text in design page. Use your
                  creative text in your language to get familiar with your
                  customers! Please RE-ENABLE your the pop-up in order to use
                  this new feature.
                </p>
              </Banner>
              <Banner
                className="index-banner"
                title="Conguatulation! Your upsell is now activated."
                status="success"
                action={{ content: "App setting", url: "/annotated-layout" }}>
                <p>
                  You can start with design your upsell theme or create an
                  attractive discount.
                  <br /> We value feedback! It helps us make our product better
                  and keeps us energized. Let us know how we're doing.{" "}
                  <a
                    href="https://apps.shopify.com/magic-ai-post-purchase-upsell"
                    target="_blank">
                    Review
                  </a>
                </p>
              </Banner>
              <br />
              <Layout>
                <Layout.Section oneThird>
                  <Card
                    title="Design theme"
                    secondaryFooterActions={[
                      { content: "Start", url: "/design-layout" },
                    ]}>
                    <Card.Section>
                      <p>
                        Create your own theme by using different colors to fit
                        your store. Or set up a timer to attract your customers.
                      </p>
                      <br />
                      <p>
                        Your theme settings will be applied to both upsell mode.
                      </p>
                      <br />
                      <br />
                    </Card.Section>
                  </Card>
                </Layout.Section>
                <Layout.Section oneThird>
                  <Card
                    title="Report"
                    secondaryFooterActions={[
                      { content: "Analytics", url: "/analytics-layout" },
                    ]}>
                    <Card.Section>
                      <p>
                        Create a report to find out how your upsell performed.
                      </p>
                      <br />
                      <p>
                        Daily, weekly or you can customize the date to create
                        the report.
                      </p>
                      <br />
                      <br />
                      <br />
                    </Card.Section>
                  </Card>
                </Layout.Section>
                <Layout.Section oneThird>
                  <Card title="Need help?">
                    <Card.Section>
                      <p>
                        Follow our <a href="/faq-layout">FAQ guide</a> to get
                        started, additional help can be found here.
                      </p>
                    </Card.Section>
                    <Card.Section>
                      <p>
                        Our team is always here to help with App installation
                        and other issues. Feel free to reach us by email:
                        support@smartecomtech.com
                      </p>
                      <br />
                      <p>(Monday - Friday, 9am to 5pm)</p>
                    </Card.Section>
                  </Card>
                </Layout.Section>
              </Layout>
              <br />
              <br />
              <Recommend />
            </div>
          )
        ) : (
          <Frame>
            <SkeletonPage title="Preparing...">
              <Layout>
                <Layout.Section>
                  <Card subdued>
                    <Card.Section>
                      <TextContainer>
                        <SkeletonDisplayText size="small" />
                        <SkeletonBodyText lines={2} />
                      </TextContainer>
                    </Card.Section>
                    <Card.Section>
                      <SkeletonBodyText lines={2} />
                    </Card.Section>
                  </Card>
                </Layout.Section>
              </Layout>
            </SkeletonPage>
          </Frame>
        )}
      </Page>
    </div>
  );
}

export default Index;
