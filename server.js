require("isomorphic-fetch");
const dotenv = require("dotenv");
const Koa = require("koa");
const next = require("next");
const { default: createShopifyAuth } = require("@shopify/koa-shopify-auth");
const { verifyRequest } = require("@shopify/koa-shopify-auth");
const session = require("koa-session");
const getSubscriptionUrl = require("./server/install/getSubscriptionUrl");
const updateSubscription = require("./server/install/updateSubscription");
const deleteUserData = require("./server/install/deleteUserData");
const appUninstall = require("./server/install/appUninstall");
const getDataExist = require("./server/install/getDataExist");

dotenv.config();
const { default: graphQLProxy } = require("@shopify/koa-shopify-graphql-proxy");
const Router = require("koa-router");
const {
  receiveWebhook,
  registerWebhook,
} = require("@shopify/koa-shopify-webhooks");
const { ApiVersion } = require("@shopify/koa-shopify-graphql-proxy");

const port = parseInt(process.env.PORT, 10) || 1248;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const cors = require("@koa/cors");
const routerDB = require("./server/router/index");

const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY, HOST } = process.env;

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();
  server.use(session({ sameSite: "none", secure: true }, server));
  server.keys = [SHOPIFY_API_SECRET_KEY];

  server.use(cors());

  server.use(
    createShopifyAuth({
      apiKey: SHOPIFY_API_KEY,
      secret: SHOPIFY_API_SECRET_KEY,
      scopes: [
        "read_products",
        "read_script_tags",
        "write_script_tags",
        "read_orders",
        "write_discounts",
      ],
      async afterAuth(ctx) {
        const { shop, accessToken } = ctx.session;
        ctx.cookies.set("shopOrigin", shop, {
          httpOnly: false,
          secure: true,
          sameSite: "none",
        });
        ctx.cookies.set("accessToken", accessToken, {
          httpOnly: false,
          secure: true,
          sameSite: "none",
        });
        const dd = await getDataExist(ctx, accessToken, shop);
        const check = await getSubscriptionUrl(ctx, accessToken, shop);
        console.log("dd from Index File ", dd);
        console.log("checks from Index File ", check);
        // dd === 1
        //   ? ctx.redirect("/")
        //   : await getSubscriptionUrl(ctx, accessToken, shop);
      },
    })
  );

  const webhook = receiveWebhook({ secret: SHOPIFY_API_SECRET_KEY });

  router.get("/charge/:object", async (ctx) => {
    const results = await fetch(
      "https://" +
        ctx.cookies.get("shopOrigin") +
        "/admin/api/2023-04/recurring_application_charges/" +
        ctx.params.object +
        ".json",
      {
        headers: {
          "X-Shopify-Access-Token": ctx.cookies.get("accessToken"),
        },
      }
    )
      .then((response) => response.json())
      .then((res) => {
        return res;
      });
    ctx.body = {
      status: "success",
      data: results,
    };
  });

  router.post("/webhooks/subscription/update", webhook, (ctx) => {
    console.log(ctx.request.body);
    ctx.response.status = 200;
    ctx.response.body = "OK";
    updateSubscription(
      ctx.request.body.app_subscription.admin_graphql_api_shop_id,
      ctx.request.body.app_subscription.status,
      ctx.request.body.app_subscription.updated_at
    ); //ctx.request.body.app_subscription.status
  });

  router.post("/webhooks/app/uninstall", webhook, (ctx) => {
    ctx.response.status = 200;
    ctx.response.body = "OK";
    appUninstall(ctx.request.body.id, new Date());
  });
  //GDPR
  router.post("/webhooks/customers/redact", webhook, (ctx) => {
    console.log(ctx.request.body);
    console.log("Got a webhook for customers/redact");
    ctx.response.status = 200;
    ctx.response.body = "OK";
  });
  router.post("/webhooks/shop/redact", webhook, (ctx) => {
    console.log(ctx.request.body);
    console.log("Got a webhook for shop/redact");
    ctx.response.status = 200;
    ctx.response.body = "OK";
  });
  router.post("/webhooks/customers/data_request", webhook, (ctx) => {
    console.log(ctx.request.body);
    console.log("Got a webhook for customers/data_request");
    ctx.response.status = 200;
    ctx.response.body = "OK";
  });

  server.use(graphQLProxy({ version: ApiVersion.Unstable }));
  router.get("*", async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    ctx.res.statusCode = 200;
  });

  server.use(router.allowedMethods());
  server.use(router.routes());
  server.use(routerDB.routes());

  server.listen(port, () => {
    console.log(`> It's ready on http://localhost:${port}`);
  });
});
