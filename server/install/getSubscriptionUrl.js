const getSubscriptionUrl = async (ctx, accessToken, shop) => {
  const query = JSON.stringify({
    query: `mutation {
      appSubscriptionCreate(
          name: "Unlimited"
          returnUrl: "${process.env.HOST}"
          trialDays: 90
          test: true
          lineItems: [
          {
            plan: {
              appRecurringPricingDetails: {
                  price: { amount: 9.95, currencyCode: USD }
              }
            }
          }
          ]
        ) {
            userErrors {
              field
              message
            }
            confirmationUrl
            appSubscription {
              id
	            status
            }
        }
    }`,
  });

  const queryid = JSON.stringify({
    query: `{
        shop {
          id
        }
      }`,
  });

  const webhookSubscription = JSON.stringify({
    query: `mutation {
        webhookSubscriptionCreate(topic: APP_SUBSCRIPTIONS_UPDATE, webhookSubscription: {callbackUrl: "https://app.magicupsell.com/webhooks/subscription/update", format: JSON}) {
          userErrors {
            field
            message
          }
          webhookSubscription {
            id
            endpoint {
              ... on WebhookHttpEndpoint {
                __typename
                callbackUrl
              }
            }
          }
        }
      }
      `,
  });

  const uninstallSubscription = JSON.stringify({
    query: `mutation {
        webhookSubscriptionCreate(topic: APP_UNINSTALLED, webhookSubscription: {callbackUrl: "https://app.magicupsell.com/webhooks/app/uninstall", format: JSON}) {
          userErrors {
            field
            message
          }
          webhookSubscription {
            id
            endpoint {
              ... on WebhookHttpEndpoint {
                __typename
                callbackUrl
              }
            }
          }
        }
      }
      `,
  });

  const response = await fetch(
    `https://${shop}/admin/api/2022-10/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": accessToken,
      },
      body: query,
    }
  );

  const responseid = await fetch(
    `https://${shop}/admin/api/2022-10/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": accessToken,
      },
      body: queryid,
    }
  );

  const subscription = await fetch(
    `https://${shop}/admin/api/2022-10/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": accessToken,
      },
      body: webhookSubscription,
    }
  );

  const appUninstall = await fetch(
    `https://${shop}/admin/api/2022-10/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": accessToken,
      },
      body: uninstallSubscription,
    }
  );

  const responseJson = await response.json();
  const responseId = await responseid.json();
  const uninstallId = await appUninstall.json();
  const confirmationUrl =
    responseJson.data.appSubscriptionCreate.confirmationUrl;
  console.log("confirmation URL", confirmationUrl);
  const chargeID = responseJson.data.appSubscriptionCreate.appSubscription.id;
  const status = responseJson.data.appSubscriptionCreate.appSubscription.status;
  const subscriptionId = await subscription.json();
  if (
    subscriptionId.data.webhookSubscriptionCreate.webhookSubscription &&
    uninstallId.data.webhookSubscriptionCreate.webhookSubscription
  ) {
    console.log("Webhooks register success");
  }

  const config = require("../config/httpConfig.js");
  const id = config.ExtractId(responseId.data.shop.id);

  const db = require("../database.js");
  db.query("INSERT INTO scripts(id) VALUES(?)", id, function (result, fields) {
    db.query(
      "UPDATE scripts SET status=(?), create_date=(?), confirm=(?) WHERE id=(?)",
      [status, new Date(), chargeID, id],
      function (result, fields) {
        console.log("Insert success");
      }
    );
  });
  return ctx.redirect(confirmationUrl);
};

module.exports = getSubscriptionUrl;
