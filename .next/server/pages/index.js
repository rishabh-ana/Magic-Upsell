module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/components/Recommend.js":
/*!****************************************!*\
  !*** ./client/components/Recommend.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_AppStyle_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/AppStyle.css */ "./client/css/AppStyle.css");
/* harmony import */ var _css_AppStyle_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_AppStyle_css__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Recommend() {
  return __jsx("div", null, __jsx("hr", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Heading"], null, "More Smart Ecom Tech App"), __jsx("div", {
    className: "flex-container"
  }, __jsx("a", {
    href: "https://apps.shopify.com/magic-tiktok-pixel",
    target: "_blank"
  }, __jsx("div", {
    className: "flex-container-child"
  }, __jsx("div", null, __jsx("img", {
    src: "https://cdn.shopify.com/s/files/1/0313/1447/7188/files/tu.png?v=1584472503"
  })), __jsx("div", null, __jsx("h1", {
    className: "app-name"
  }, "Magic TikTok Pixel"), __jsx("p", null, "One-click TikTok Pixel Install"), __jsx("img", {
    src: "https://cdn.shopify.com/s/files/1/0313/1447/7188/files/5star.png?v=1583433956"
  })))), __jsx("a", {
    href: "https://apps.shopify.com/magic-pinterest-pixel",
    target: "_blank"
  }, __jsx("div", {
    className: "flex-container-child"
  }, __jsx("div", null, __jsx("img", {
    src: "https://cdn.shopify.com/s/files/1/0313/1447/7188/files/pu.png?v=1583432078"
  })), __jsx("div", null, __jsx("h1", {
    className: "app-name"
  }, "Magic Pinterest Pixel"), __jsx("p", null, "One-click Pinterest conversion events tracking"), __jsx("img", {
    src: "https://cdn.shopify.com/s/files/1/0313/1447/7188/files/5star.png?v=1583433956"
  }))))), __jsx("br", null), __jsx("a", {
    style: {
      'color': '#f47777',
      'textDecoration': 'none'
    },
    href: "http://smartecomtech.com/",
    target: "_blank"
  }, "Discover More Apps..."));
}

/* harmony default export */ __webpack_exports__["default"] = (Recommend);

/***/ }),

/***/ "./client/css/AppStyle.css":
/*!*********************************!*\
  !*** ./client/css/AppStyle.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/app-bridge-react */ "@shopify/app-bridge-react");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _server_config_appBasicQuery_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../server/config/appBasicQuery.js */ "./server/config/appBasicQuery.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _client_css_AppStyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client/css/AppStyle.css */ "./client/css/AppStyle.css");
/* harmony import */ var _client_css_AppStyle_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_client_css_AppStyle_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _client_components_Recommend_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../client/components/Recommend.js */ "./client/components/Recommend.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";

const config = __webpack_require__(/*! ../server/config/httpConfig.js */ "./server/config/httpConfig.js");







function Index() {
  const isInitialMount = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  const [recurr] = Object(react_apollo__WEBPACK_IMPORTED_MODULE_5__["useMutation"])(_server_config_appBasicQuery_js__WEBPACK_IMPORTED_MODULE_4__["CREATE_RECURRING"]);
  const {
    error: errorID,
    data: dataID
  } = Object(react_apollo__WEBPACK_IMPORTED_MODULE_5__["useQuery"])(_server_config_appBasicQuery_js__WEBPACK_IMPORTED_MODULE_4__["GET_SHOP_ID"]);
  const {
    0: empty,
    1: setEmpty
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const approve = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])("block");
  const {
    0: pending,
    1: setPending
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: freeTrial,
    1: setFreeTrial
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(14);
  const deadline = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function redirectUser(day_install, day_un) {
      setPending(true);
      approve.current = "none";
      const result = await recurr({
        variables: {
          name: "Unlimited",
          test: true,
          lineItems: [{
            plan: {
              appRecurringPricingDetails: {
                price: {
                  amount: 9.95,
                  currencyCode: "USD"
                }
              }
            }
          }],
          returnUrl: "https://c904-118-185-6-185.ngrok-free.app",
          trialDays: 30
        }
      });
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.put(config.HTTP_API + "/store/" + config.ExtractId(dataID.shop.id), {
        confirm: result.data.appSubscriptionCreate.appSubscription.id
      }).then(cc => {
        window.top.location = result.data.appSubscriptionCreate.confirmationUrl;
      });
    }

    async function checkStatus() {
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(config.HTTP_API + "/store/search/status", {
        search: config.ExtractId(dataID.shop.id)
      }).then(result => {
        if (result.data[0].confirm != null) {
          //new user
          axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(config.HTTP_API + "/charge/" + config.ExtractId(result.data[0].confirm)).then(dd => {
            if (dd.data.data.recurring_application_charge.status === "active") {
              setPending(false);
            } else redirectUser();
          });
        } else {
          //old user
          if (result.data[0].status === "ACTIVE") setPending(false);else redirectUser();
        }
      });
    }

    async function getData() {
      const db_data = {
        search: config.ExtractId(dataID.shop.id)
      };
      await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(config.HTTP_API + "/store/search/mode", db_data).then(result => {
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
  return __jsx("div", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Page"], null, !pending ? empty ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["EmptyState"], {
    heading: "Boost your sales",
    action: {
      content: "Start",
      url: "/faq-layout"
    },
    image: "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
  }, __jsx("p", null, "Read our ", __jsx("a", {
    href: "/faq-layout"
  }, "instruction"), " to set up your first upsell")) : __jsx("div", null, __jsx("header", {
    style: {
      textAlign: "center",
      padding: "50px"
    }
  }, __jsx("h1", {
    style: {
      fontSize: "2.5em",
      marginBottom: "20px"
    }
  }, "Magic AI Post-Purchase Upsell"), __jsx("p", {
    style: {
      fontSize: "1.5em"
    }
  }, "Increase your sales with our magic pop up...")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Banner"], {
    className: "index-banner",
    title: "We Got An update For Upsell Design!",
    status: "info"
  }, __jsx("p", null, "You can now edit your button text in design page. Use your creative text in your language to get familiar with your customers! Please RE-ENABLE your the pop-up in order to use this new feature.")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Banner"], {
    className: "index-banner",
    title: "Conguatulation! Your upsell is now activated.",
    status: "success",
    action: {
      content: "App setting",
      url: "/annotated-layout"
    }
  }, __jsx("p", null, "You can start with design your upsell theme or create an attractive discount.", __jsx("br", null), " We value feedback! It helps us make our product better and keeps us energized. Let us know how we're doing.", " ", __jsx("a", {
    href: "https://apps.shopify.com/magic-ai-post-purchase-upsell",
    target: "_blank"
  }, "Review"))), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, {
    oneThird: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Design theme",
    secondaryFooterActions: [{
      content: "Start",
      url: "/design-layout"
    }]
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"].Section, null, __jsx("p", null, "Create your own theme by using different colors to fit your store. Or set up a timer to attract your customers."), __jsx("br", null), __jsx("p", null, "Your theme settings will be applied to both upsell mode."), __jsx("br", null), __jsx("br", null)))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, {
    oneThird: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Report",
    secondaryFooterActions: [{
      content: "Analytics",
      url: "/analytics-layout"
    }]
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"].Section, null, __jsx("p", null, "Create a report to find out how your upsell performed."), __jsx("br", null), __jsx("p", null, "Daily, weekly or you can customize the date to create the report."), __jsx("br", null), __jsx("br", null), __jsx("br", null)))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, {
    oneThird: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Need help?"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"].Section, null, __jsx("p", null, "Follow our ", __jsx("a", {
    href: "/faq-layout"
  }, "FAQ guide"), " to get started, additional help can be found here.")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"].Section, null, __jsx("p", null, "Our team is always here to help with App installation and other issues. Feel free to reach us by email: support@smartecomtech.com"), __jsx("br", null), __jsx("p", null, "(Monday - Friday, 9am to 5pm)"))))), __jsx("br", null), __jsx("br", null), __jsx(_client_components_Recommend_js__WEBPACK_IMPORTED_MODULE_7__["default"], null)) : __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Frame"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["SkeletonPage"], {
    title: "Preparing..."
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    subdued: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextContainer"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["SkeletonDisplayText"], {
    size: "small"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["SkeletonBodyText"], {
    lines: 2
  }))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["SkeletonBodyText"], {
    lines: 2
  })))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./server/config/appBasicQuery.js":
/*!****************************************!*\
  !*** ./server/config/appBasicQuery.js ***!
  \****************************************/
/*! exports provided: GET_SHOP_ID, CREATE_DISCOUNT, DELETE_SCRIPT, CREATE_SCRIPT, SEARCH_ORDERS_UPSELL, SEARCH_ORDERS_TOTAL, CREATE_RECURRING, GET_PRODUCTS_BY_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SHOP_ID", function() { return GET_SHOP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_DISCOUNT", function() { return CREATE_DISCOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_SCRIPT", function() { return DELETE_SCRIPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_SCRIPT", function() { return CREATE_SCRIPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_ORDERS_UPSELL", function() { return SEARCH_ORDERS_UPSELL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_ORDERS_TOTAL", function() { return SEARCH_ORDERS_TOTAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_RECURRING", function() { return CREATE_RECURRING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCTS_BY_ID", function() { return GET_PRODUCTS_BY_ID; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const GET_SHOP_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query {
    shop {
      id
    }
  }
`;
const CREATE_DISCOUNT = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation discountCodeBasicCreate(
    $basicCodeDiscount: DiscountCodeBasicInput!
  ) {
    discountCodeBasicCreate(basicCodeDiscount: $basicCodeDiscount) {
      codeDiscountNode {
        id
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`;
const DELETE_SCRIPT = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation scriptTagDelete($id: ID!) {
    scriptTagDelete(id: $id) {
      deletedScriptTagId
      userErrors {
        field
        message
      }
    }
  }
`;
const CREATE_SCRIPT = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation scriptTagCreate($input: ScriptTagInput!) {
    scriptTagCreate(input: $input) {
      scriptTag {
        id
      }
      userErrors {
        field
        message
      }
    }
  }
`;
const SEARCH_ORDERS_UPSELL = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query ($query: String) {
    orders(first: 100, query: $query) {
      edges {
        node {
          totalPriceSet {
            presentmentMoney {
              amount
            }
          }
        }
      }
    }
  }
`;
const SEARCH_ORDERS_TOTAL = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query ($query: String) {
    orders(first: 100, query: $query) {
      edges {
        node {
          totalPriceSet {
            presentmentMoney {
              amount
            }
          }
        }
      }
    }
  }
`;
const CREATE_RECURRING = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation appSubscriptionCreate(
    $name: String!
    $lineItems: [AppSubscriptionLineItemInput!]!
    $returnUrl: URL!
    $trialDays: Int
  ) {
    appSubscriptionCreate(
      name: $name
      lineItems: $lineItems
      returnUrl: $returnUrl
      trialDays: $trialDays
      test: true
    ) {
      appSubscription {
        id
      }
      confirmationUrl
      userErrors {
        field
        message
      }
    }
  }
`;
const GET_PRODUCTS_BY_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getProducts($ids: [ID!]!) {
    nodes(ids: $ids) {
      ... on Product {
        title
        handle
        descriptionHtml
        id
        images(first: 1) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
        variants(first: 1) {
          edges {
            node {
              price
              id
            }
          }
        }
      }
    }
  }
`;

/***/ }),

/***/ "./server/config/httpConfig.js":
/*!*************************************!*\
  !*** ./server/config/httpConfig.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  HTTP_API: "https://c904-118-185-6-185.ngrok-free.app",
  ExtractId: function (str) {
    var matches = str.match(/(\d+)/);
    if (matches) return matches[0];
  },
  CombineId: function (str) {
    var str1 = "gid://shopify/ScriptTag/";
    str = str1.concat(str);
    return str;
  },
  CombinePID: function (str) {
    var str1 = "gid://shopify/Product/";
    str = str1.concat(str);
    return str;
  }
};

/***/ }),

/***/ "@shopify/app-bridge-react":
/*!********************************************!*\
  !*** external "@shopify/app-bridge-react" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/app-bridge-react");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvUmVjb21tZW5kLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NlcnZlci9jb25maWcvYXBwQmFzaWNRdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvY29uZmlnL2h0dHBDb25maWcuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzaG9waWZ5L3BvbGFyaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtdGFnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hcG9sbG9cIiJdLCJuYW1lcyI6WyJSZWNvbW1lbmQiLCJpbWciLCJjb25maWciLCJyZXF1aXJlIiwiSW5kZXgiLCJpc0luaXRpYWxNb3VudCIsInVzZVJlZiIsInJlY3VyciIsInVzZU11dGF0aW9uIiwiQ1JFQVRFX1JFQ1VSUklORyIsImVycm9yIiwiZXJyb3JJRCIsImRhdGEiLCJkYXRhSUQiLCJ1c2VRdWVyeSIsIkdFVF9TSE9QX0lEIiwiZW1wdHkiLCJzZXRFbXB0eSIsInVzZVN0YXRlIiwiYXBwcm92ZSIsInBlbmRpbmciLCJzZXRQZW5kaW5nIiwiZnJlZVRyaWFsIiwic2V0RnJlZVRyaWFsIiwiZGVhZGxpbmUiLCJ1c2VFZmZlY3QiLCJyZWRpcmVjdFVzZXIiLCJkYXlfaW5zdGFsbCIsImRheV91biIsImN1cnJlbnQiLCJyZXN1bHQiLCJ2YXJpYWJsZXMiLCJuYW1lIiwidGVzdCIsImxpbmVJdGVtcyIsInBsYW4iLCJhcHBSZWN1cnJpbmdQcmljaW5nRGV0YWlscyIsInByaWNlIiwiYW1vdW50IiwiY3VycmVuY3lDb2RlIiwicmV0dXJuVXJsIiwidHJpYWxEYXlzIiwiYXhpb3MiLCJwdXQiLCJIVFRQX0FQSSIsIkV4dHJhY3RJZCIsInNob3AiLCJpZCIsImNvbmZpcm0iLCJhcHBTdWJzY3JpcHRpb25DcmVhdGUiLCJhcHBTdWJzY3JpcHRpb24iLCJ0aGVuIiwiY2MiLCJ3aW5kb3ciLCJ0b3AiLCJsb2NhdGlvbiIsImNvbmZpcm1hdGlvblVybCIsImNoZWNrU3RhdHVzIiwicG9zdCIsInNlYXJjaCIsImdldCIsImRkIiwicmVjdXJyaW5nX2FwcGxpY2F0aW9uX2NoYXJnZSIsInN0YXR1cyIsImdldERhdGEiLCJkYl9kYXRhIiwidXBzZWxsX21vZGUiLCJmZXRjaERhdGEiLCJjb250ZW50IiwidXJsIiwidGV4dEFsaWduIiwicGFkZGluZyIsImZvbnRTaXplIiwibWFyZ2luQm90dG9tIiwiZ3FsIiwiQ1JFQVRFX0RJU0NPVU5UIiwiREVMRVRFX1NDUklQVCIsIkNSRUFURV9TQ1JJUFQiLCJTRUFSQ0hfT1JERVJTX1VQU0VMTCIsIlNFQVJDSF9PUkRFUlNfVE9UQUwiLCJHRVRfUFJPRFVDVFNfQllfSUQiLCJtb2R1bGUiLCJleHBvcnRzIiwic3RyIiwibWF0Y2hlcyIsIm1hdGNoIiwiQ29tYmluZUlkIiwic3RyMSIsImNvbmNhdCIsIkNvbWJpbmVQSUQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFLQTs7QUFFQSxTQUFTQSxTQUFULEdBQXFCO0FBQ25CLFNBQ0UsbUJBQ0UsaUJBREYsRUFFRSxNQUFDLHdEQUFELG1DQUZGLEVBR0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQUcsUUFBSSxFQUFDLDZDQUFSO0FBQXNELFVBQU0sRUFBQztBQUE3RCxLQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRSxtQkFBSztBQUFLLE9BQUcsRUFBQztBQUFULElBQUwsQ0FERixFQUVFLG1CQUNFO0FBQUksYUFBUyxFQUFDO0FBQWQsMEJBREYsRUFFRSxrREFGRixFQUdFO0FBQUssT0FBRyxFQUFDO0FBQVQsSUFIRixDQUZGLENBREYsQ0FERixFQVdFO0FBQUcsUUFBSSxFQUFDLGdEQUFSO0FBQXlELFVBQU0sRUFBQztBQUFoRSxLQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRSxtQkFBSztBQUFLLE9BQUcsRUFBQztBQUFULElBQUwsQ0FERixFQUVFLG1CQUNFO0FBQUksYUFBUyxFQUFDO0FBQWQsNkJBREYsRUFFRSxrRUFGRixFQUdFO0FBQUssT0FBRyxFQUFDO0FBQVQsSUFIRixDQUZGLENBREYsQ0FYRixDQUhGLEVBeUJILGlCQXpCRyxFQTBCSDtBQUFHLFNBQUssRUFBRTtBQUFDLGVBQVEsU0FBVDtBQUFtQix3QkFBaUI7QUFBcEMsS0FBVjtBQUF1RCxRQUFJLEVBQUMsMkJBQTVEO0FBQXdGLFVBQU0sRUFBQztBQUEvRiw2QkExQkcsQ0FERjtBQThCRDs7QUFFY0Esd0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFhQTtBQUNBLE1BQU1DLEdBQUcsR0FBRyxtRUFBWjs7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLG1CQUFPLENBQUMscUVBQUQsQ0FBdEI7O0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQyxLQUFULEdBQWlCO0FBQ2YsUUFBTUMsY0FBYyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBN0I7QUFDQSxRQUFNLENBQUNDLE1BQUQsSUFBV0MsZ0VBQVcsQ0FBQ0MsZ0ZBQUQsQ0FBNUI7QUFDQSxRQUFNO0FBQUVDLFNBQUssRUFBRUMsT0FBVDtBQUFrQkMsUUFBSSxFQUFFQztBQUF4QixNQUFtQ0MsNkRBQVEsQ0FBQ0MsMkVBQUQsQ0FBakQ7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUMsSUFBRCxDQUFsQztBQUNBLFFBQU1DLE9BQU8sR0FBR2Isb0RBQU0sQ0FBQyxPQUFELENBQXRCO0FBQ0EsUUFBTTtBQUFBLE9BQUNjLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCSCxzREFBUSxDQUFDLElBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ksU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJMLHNEQUFRLENBQUMsRUFBRCxDQUExQztBQUNBLFFBQU1NLFFBQVEsR0FBR2xCLG9EQUFNLENBQUMsQ0FBRCxDQUF2QjtBQUVBbUIseURBQVMsQ0FBQyxNQUFNO0FBQ2QsbUJBQWVDLFlBQWYsQ0FBNEJDLFdBQTVCLEVBQXlDQyxNQUF6QyxFQUFpRDtBQUMvQ1AsZ0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDQUYsYUFBTyxDQUFDVSxPQUFSLEdBQWtCLE1BQWxCO0FBQ0EsWUFBTUMsTUFBTSxHQUFHLE1BQU12QixNQUFNLENBQUM7QUFDMUJ3QixpQkFBUyxFQUFFO0FBQ1RDLGNBQUksRUFBRSxXQURHO0FBRVRDLGNBQUksRUFBRSxJQUZHO0FBR1RDLG1CQUFTLEVBQUUsQ0FDVDtBQUNFQyxnQkFBSSxFQUFFO0FBQ0pDLHdDQUEwQixFQUFFO0FBQzFCQyxxQkFBSyxFQUFFO0FBQUVDLHdCQUFNLEVBQUUsSUFBVjtBQUFnQkMsOEJBQVksRUFBRTtBQUE5QjtBQURtQjtBQUR4QjtBQURSLFdBRFMsQ0FIRjtBQVlUQyxtQkFBUyxFQUFFLDJDQVpGO0FBYVRDLG1CQUFTLEVBQUU7QUFiRjtBQURlLE9BQUQsQ0FBM0I7QUFpQkFDLGtEQUFLLENBQ0ZDLEdBREgsQ0FDT3pDLE1BQU0sQ0FBQzBDLFFBQVAsR0FBa0IsU0FBbEIsR0FBOEIxQyxNQUFNLENBQUMyQyxTQUFQLENBQWlCaEMsTUFBTSxDQUFDaUMsSUFBUCxDQUFZQyxFQUE3QixDQURyQyxFQUN1RTtBQUNuRUMsZUFBTyxFQUFFbEIsTUFBTSxDQUFDbEIsSUFBUCxDQUFZcUMscUJBQVosQ0FBa0NDLGVBQWxDLENBQWtESDtBQURRLE9BRHZFLEVBSUdJLElBSkgsQ0FJU0MsRUFBRCxJQUFRO0FBQ1pDLGNBQU0sQ0FBQ0MsR0FBUCxDQUFXQyxRQUFYLEdBQ0V6QixNQUFNLENBQUNsQixJQUFQLENBQVlxQyxxQkFBWixDQUFrQ08sZUFEcEM7QUFFRCxPQVBIO0FBUUQ7O0FBRUQsbUJBQWVDLFdBQWYsR0FBNkI7QUFDM0JmLGtEQUFLLENBQ0ZnQixJQURILENBQ1F4RCxNQUFNLENBQUMwQyxRQUFQLEdBQWtCLHNCQUQxQixFQUNrRDtBQUM5Q2UsY0FBTSxFQUFFekQsTUFBTSxDQUFDMkMsU0FBUCxDQUFpQmhDLE1BQU0sQ0FBQ2lDLElBQVAsQ0FBWUMsRUFBN0I7QUFEc0MsT0FEbEQsRUFJR0ksSUFKSCxDQUlTckIsTUFBRCxJQUFZO0FBQ2hCLFlBQUlBLE1BQU0sQ0FBQ2xCLElBQVAsQ0FBWSxDQUFaLEVBQWVvQyxPQUFmLElBQTBCLElBQTlCLEVBQW9DO0FBQ2xDO0FBQ0FOLHNEQUFLLENBQ0ZrQixHQURILENBRUkxRCxNQUFNLENBQUMwQyxRQUFQLEdBQ0UsVUFERixHQUVFMUMsTUFBTSxDQUFDMkMsU0FBUCxDQUFpQmYsTUFBTSxDQUFDbEIsSUFBUCxDQUFZLENBQVosRUFBZW9DLE9BQWhDLENBSk4sRUFNR0csSUFOSCxDQU1TVSxFQUFELElBQVE7QUFDWixnQkFDRUEsRUFBRSxDQUFDakQsSUFBSCxDQUFRQSxJQUFSLENBQWFrRCw0QkFBYixDQUEwQ0MsTUFBMUMsS0FBcUQsUUFEdkQsRUFFRTtBQUNBMUMsd0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDRCxhQUpELE1BSU9LLFlBQVk7QUFDcEIsV0FaSDtBQWFELFNBZkQsTUFlTztBQUNMO0FBQ0EsY0FBSUksTUFBTSxDQUFDbEIsSUFBUCxDQUFZLENBQVosRUFBZW1ELE1BQWYsS0FBMEIsUUFBOUIsRUFBd0MxQyxVQUFVLENBQUMsS0FBRCxDQUFWLENBQXhDLEtBQ0tLLFlBQVk7QUFDbEI7QUFDRixPQXpCSDtBQTBCRDs7QUFFRCxtQkFBZXNDLE9BQWYsR0FBeUI7QUFDdkIsWUFBTUMsT0FBTyxHQUFHO0FBQUVOLGNBQU0sRUFBRXpELE1BQU0sQ0FBQzJDLFNBQVAsQ0FBaUJoQyxNQUFNLENBQUNpQyxJQUFQLENBQVlDLEVBQTdCO0FBQVYsT0FBaEI7QUFDQSxZQUFNTCw0Q0FBSyxDQUNSZ0IsSUFERyxDQUNFeEQsTUFBTSxDQUFDMEMsUUFBUCxHQUFrQixvQkFEcEIsRUFDMENxQixPQUQxQyxFQUVIZCxJQUZHLENBRUdyQixNQUFELElBQVk7QUFDaEJBLGNBQU0sQ0FBQ2xCLElBQVAsQ0FBWSxDQUFaLEVBQWVzRCxXQUFmLEdBQTZCakQsUUFBUSxDQUFDLEtBQUQsQ0FBckMsR0FBK0NBLFFBQVEsQ0FBQyxJQUFELENBQXZEO0FBQ0QsT0FKRyxDQUFOO0FBS0Q7O0FBRUQsbUJBQWVrRCxTQUFmLEdBQTJCO0FBQ3pCLFVBQUk5RCxjQUFjLENBQUN3QixPQUFmLElBQTBCaEIsTUFBOUIsRUFBc0M7QUFDcEMsY0FBTTRDLFdBQVcsRUFBakI7QUFDQXBELHNCQUFjLENBQUN3QixPQUFmLEdBQXlCLEtBQXpCO0FBQ0EsY0FBTW1DLE9BQU8sRUFBYjtBQUNEO0FBQ0Y7O0FBRURHLGFBQVM7QUFDVixHQTlFUSxDQUFUO0FBK0VBLFNBQ0UsbUJBQ0UsTUFBQyxxREFBRCxRQUNHLENBQUMvQyxPQUFELEdBQ0NKLEtBQUssR0FDSCxNQUFDLDJEQUFEO0FBQ0UsV0FBTyxFQUFDLGtCQURWO0FBRUUsVUFBTSxFQUFFO0FBQUVvRCxhQUFPLEVBQUUsT0FBWDtBQUFvQkMsU0FBRyxFQUFFO0FBQXpCLEtBRlY7QUFHRSxTQUFLLEVBQUM7QUFIUixLQUlFLDhCQUNXO0FBQUcsUUFBSSxFQUFDO0FBQVIsbUJBRFgsaUNBSkYsQ0FERyxHQVdILG1CQUNFO0FBQVEsU0FBSyxFQUFFO0FBQUVDLGVBQVMsRUFBRSxRQUFiO0FBQXVCQyxhQUFPLEVBQUU7QUFBaEM7QUFBZixLQUNFO0FBQUksU0FBSyxFQUFFO0FBQUVDLGNBQVEsRUFBRSxPQUFaO0FBQXFCQyxrQkFBWSxFQUFFO0FBQW5DO0FBQVgscUNBREYsRUFJRTtBQUFHLFNBQUssRUFBRTtBQUFFRCxjQUFRLEVBQUU7QUFBWjtBQUFWLG9EQUpGLENBREYsRUFTRSxNQUFDLHVEQUFEO0FBQ0UsYUFBUyxFQUFDLGNBRFo7QUFFRSxTQUFLLEVBQUMscUNBRlI7QUFHRSxVQUFNLEVBQUM7QUFIVCxLQUlFLHFOQUpGLENBVEYsRUFvQkUsTUFBQyx1REFBRDtBQUNFLGFBQVMsRUFBQyxjQURaO0FBRUUsU0FBSyxFQUFDLCtDQUZSO0FBR0UsVUFBTSxFQUFDLFNBSFQ7QUFJRSxVQUFNLEVBQUU7QUFBRUosYUFBTyxFQUFFLGFBQVg7QUFBMEJDLFNBQUcsRUFBRTtBQUEvQjtBQUpWLEtBS0Usa0dBR0UsaUJBSEYsa0hBSXVELEdBSnZELEVBS0U7QUFDRSxRQUFJLEVBQUMsd0RBRFA7QUFFRSxVQUFNLEVBQUM7QUFGVCxjQUxGLENBTEYsQ0FwQkYsRUFxQ0UsaUJBckNGLEVBc0NFLE1BQUMsdURBQUQsUUFDRSxNQUFDLHVEQUFELENBQVEsT0FBUjtBQUFnQixZQUFRO0FBQXhCLEtBQ0UsTUFBQyxxREFBRDtBQUNFLFNBQUssRUFBQyxjQURSO0FBRUUsMEJBQXNCLEVBQUUsQ0FDdEI7QUFBRUQsYUFBTyxFQUFFLE9BQVg7QUFBb0JDLFNBQUcsRUFBRTtBQUF6QixLQURzQjtBQUYxQixLQUtFLE1BQUMscURBQUQsQ0FBTSxPQUFOLFFBQ0UsbUlBREYsRUFLRSxpQkFMRixFQU1FLDRFQU5GLEVBU0UsaUJBVEYsRUFVRSxpQkFWRixDQUxGLENBREYsQ0FERixFQXFCRSxNQUFDLHVEQUFELENBQVEsT0FBUjtBQUFnQixZQUFRO0FBQXhCLEtBQ0UsTUFBQyxxREFBRDtBQUNFLFNBQUssRUFBQyxRQURSO0FBRUUsMEJBQXNCLEVBQUUsQ0FDdEI7QUFBRUQsYUFBTyxFQUFFLFdBQVg7QUFBd0JDLFNBQUcsRUFBRTtBQUE3QixLQURzQjtBQUYxQixLQUtFLE1BQUMscURBQUQsQ0FBTSxPQUFOLFFBQ0UsMEVBREYsRUFJRSxpQkFKRixFQUtFLHFGQUxGLEVBU0UsaUJBVEYsRUFVRSxpQkFWRixFQVdFLGlCQVhGLENBTEYsQ0FERixDQXJCRixFQTBDRSxNQUFDLHVEQUFELENBQVEsT0FBUjtBQUFnQixZQUFRO0FBQXhCLEtBQ0UsTUFBQyxxREFBRDtBQUFNLFNBQUssRUFBQztBQUFaLEtBQ0UsTUFBQyxxREFBRCxDQUFNLE9BQU4sUUFDRSxnQ0FDYTtBQUFHLFFBQUksRUFBQztBQUFSLGlCQURiLHdEQURGLENBREYsRUFPRSxNQUFDLHFEQUFELENBQU0sT0FBTixRQUNFLHFKQURGLEVBTUUsaUJBTkYsRUFPRSxpREFQRixDQVBGLENBREYsQ0ExQ0YsQ0F0Q0YsRUFvR0UsaUJBcEdGLEVBcUdFLGlCQXJHRixFQXNHRSxNQUFDLHVFQUFELE9BdEdGLENBWkgsR0FzSEMsTUFBQyxzREFBRCxRQUNFLE1BQUMsNkRBQUQ7QUFBYyxTQUFLLEVBQUM7QUFBcEIsS0FDRSxNQUFDLHVEQUFELFFBQ0UsTUFBQyx1REFBRCxDQUFRLE9BQVIsUUFDRSxNQUFDLHFEQUFEO0FBQU0sV0FBTztBQUFiLEtBQ0UsTUFBQyxxREFBRCxDQUFNLE9BQU4sUUFDRSxNQUFDLDhEQUFELFFBQ0UsTUFBQyxvRUFBRDtBQUFxQixRQUFJLEVBQUM7QUFBMUIsSUFERixFQUVFLE1BQUMsaUVBQUQ7QUFBa0IsU0FBSyxFQUFFO0FBQXpCLElBRkYsQ0FERixDQURGLEVBT0UsTUFBQyxxREFBRCxDQUFNLE9BQU4sUUFDRSxNQUFDLGlFQUFEO0FBQWtCLFNBQUssRUFBRTtBQUF6QixJQURGLENBUEYsQ0FERixDQURGLENBREYsQ0FERixDQXZISixDQURGLENBREY7QUFnSkQ7O0FBRWNqRSxvRUFBZixFOzs7Ozs7Ozs7Ozs7QUNyUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTVcsV0FBVyxHQUFHMkQsa0RBQUk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTk87QUFRQSxNQUFNQyxlQUFlLEdBQUdELGtEQUFJO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWZPO0FBaUJBLE1BQU1FLGFBQWEsR0FBR0Ysa0RBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FWTztBQVlBLE1BQU1HLGFBQWEsR0FBR0gsa0RBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBWk87QUFjQSxNQUFNSSxvQkFBb0IsR0FBR0osa0RBQUk7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWRPO0FBZ0JBLE1BQU1LLG1CQUFtQixHQUFHTCxrREFBSTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBZE87QUFnQkEsTUFBTWpFLGdCQUFnQixHQUFHaUUsa0RBQUk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBeEJPO0FBMEJBLE1BQU1NLGtCQUFrQixHQUFHTixrREFBSTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0EzQk8sQzs7Ozs7Ozs7Ozs7QUMvR1BPLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNmdEMsVUFBUSxFQUFFLDJDQURLO0FBRWZDLFdBQVMsRUFBRSxVQUFVc0MsR0FBVixFQUFlO0FBQ3hCLFFBQUlDLE9BQU8sR0FBR0QsR0FBRyxDQUFDRSxLQUFKLENBQVUsT0FBVixDQUFkO0FBQ0EsUUFBSUQsT0FBSixFQUFhLE9BQU9BLE9BQU8sQ0FBQyxDQUFELENBQWQ7QUFDZCxHQUxjO0FBTWZFLFdBQVMsRUFBRSxVQUFVSCxHQUFWLEVBQWU7QUFDeEIsUUFBSUksSUFBSSxHQUFHLDBCQUFYO0FBQ0FKLE9BQUcsR0FBR0ksSUFBSSxDQUFDQyxNQUFMLENBQVlMLEdBQVosQ0FBTjtBQUNBLFdBQU9BLEdBQVA7QUFDRCxHQVZjO0FBV2ZNLFlBQVUsRUFBRSxVQUFVTixHQUFWLEVBQWU7QUFDekIsUUFBSUksSUFBSSxHQUFHLHdCQUFYO0FBQ0FKLE9BQUcsR0FBR0ksSUFBSSxDQUFDQyxNQUFMLENBQVlMLEdBQVosQ0FBTjtBQUNBLFdBQU9BLEdBQVA7QUFDRDtBQWZjLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEseUMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHtcclxuICBQYWdlLFxyXG4gIFRleHRDb250YWluZXIsXHJcbiAgSGVhZGluZyxcclxufSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0ICcuLi9jc3MvQXBwU3R5bGUuY3NzJztcclxuXHJcbmZ1bmN0aW9uIFJlY29tbWVuZCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGhyLz5cclxuICAgICAgPEhlYWRpbmc+TW9yZSBTbWFydCBFY29tIFRlY2ggQXBwPC9IZWFkaW5nPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYXBwcy5zaG9waWZ5LmNvbS9tYWdpYy10aWt0b2stcGl4ZWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1jb250YWluZXItY2hpbGRcIj5cclxuICAgICAgICAgICAgPGRpdj48aW1nIHNyYz1cImh0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8wMzEzLzE0NDcvNzE4OC9maWxlcy90dS5wbmc/dj0xNTg0NDcyNTAzXCIvPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJhcHAtbmFtZVwiPk1hZ2ljIFRpa1RvayBQaXhlbDwvaDE+XHJcbiAgICAgICAgICAgICAgPHA+T25lLWNsaWNrIFRpa1RvayBQaXhlbCBJbnN0YWxsPC9wPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9jZG4uc2hvcGlmeS5jb20vcy9maWxlcy8xLzAzMTMvMTQ0Ny83MTg4L2ZpbGVzLzVzdGFyLnBuZz92PTE1ODM0MzM5NTZcIi8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2FwcHMuc2hvcGlmeS5jb20vbWFnaWMtcGludGVyZXN0LXBpeGVsXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY29udGFpbmVyLWNoaWxkXCI+XHJcbiAgICAgICAgICAgIDxkaXY+PGltZyBzcmM9XCJodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDMxMy8xNDQ3LzcxODgvZmlsZXMvcHUucG5nP3Y9MTU4MzQzMjA3OFwiLz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYXBwLW5hbWVcIj5NYWdpYyBQaW50ZXJlc3QgUGl4ZWw8L2gxPlxyXG4gICAgICAgICAgICAgIDxwPk9uZS1jbGljayBQaW50ZXJlc3QgY29udmVyc2lvbiBldmVudHMgdHJhY2tpbmc8L3A+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDMxMy8xNDQ3LzcxODgvZmlsZXMvNXN0YXIucG5nP3Y9MTU4MzQzMzk1NlwiLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG5cdDxici8+XHJcblx0PGEgc3R5bGU9e3snY29sb3InOicjZjQ3Nzc3JywndGV4dERlY29yYXRpb24nOidub25lJ319IGhyZWY9XCJodHRwOi8vc21hcnRlY29tdGVjaC5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+RGlzY292ZXIgTW9yZSBBcHBzLi4uPC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWNvbW1lbmQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBFbXB0eVN0YXRlLFxyXG4gIExheW91dCxcclxuICBQYWdlLFxyXG4gIEJhbm5lcixcclxuICBDYXJkLFxyXG4gIEhlYWRpbmcsXHJcbiAgRnJhbWUsXHJcbiAgU2tlbGV0b25Cb2R5VGV4dCxcclxuICBTa2VsZXRvbkRpc3BsYXlUZXh0LFxyXG4gIFNrZWxldG9uUGFnZSxcclxuICBUZXh0Q29udGFpbmVyLFxyXG59IGZyb20gXCJAc2hvcGlmeS9wb2xhcmlzXCI7XHJcbmltcG9ydCB7IFRpdGxlQmFyIH0gZnJvbSBcIkBzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3RcIjtcclxuY29uc3QgaW1nID0gXCJodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDc1Ny85OTU1L2ZpbGVzL2VtcHR5LXN0YXRlLnN2Z1wiO1xyXG5jb25zdCBjb25maWcgPSByZXF1aXJlKFwiLi4vc2VydmVyL2NvbmZpZy9odHRwQ29uZmlnLmpzXCIpO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7XHJcbiAgR0VUX1NIT1BfSUQsXHJcbiAgQ1JFQVRFX1JFQ1VSUklORyxcclxufSBmcm9tIFwiLi4vc2VydmVyL2NvbmZpZy9hcHBCYXNpY1F1ZXJ5LmpzXCI7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5LCB1c2VNdXRhdGlvbiB9IGZyb20gXCJyZWFjdC1hcG9sbG9cIjtcclxuaW1wb3J0IFwiLi4vY2xpZW50L2Nzcy9BcHBTdHlsZS5jc3NcIjtcclxuaW1wb3J0IFJlY29tbWVuZCBmcm9tIFwiLi4vY2xpZW50L2NvbXBvbmVudHMvUmVjb21tZW5kLmpzXCI7XHJcblxyXG5mdW5jdGlvbiBJbmRleCgpIHtcclxuICBjb25zdCBpc0luaXRpYWxNb3VudCA9IHVzZVJlZih0cnVlKTtcclxuICBjb25zdCBbcmVjdXJyXSA9IHVzZU11dGF0aW9uKENSRUFURV9SRUNVUlJJTkcpO1xyXG4gIGNvbnN0IHsgZXJyb3I6IGVycm9ySUQsIGRhdGE6IGRhdGFJRCB9ID0gdXNlUXVlcnkoR0VUX1NIT1BfSUQpO1xyXG4gIGNvbnN0IFtlbXB0eSwgc2V0RW1wdHldID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgYXBwcm92ZSA9IHVzZVJlZihcImJsb2NrXCIpO1xyXG4gIGNvbnN0IFtwZW5kaW5nLCBzZXRQZW5kaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtmcmVlVHJpYWwsIHNldEZyZWVUcmlhbF0gPSB1c2VTdGF0ZSgxNCk7XHJcbiAgY29uc3QgZGVhZGxpbmUgPSB1c2VSZWYoMCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiByZWRpcmVjdFVzZXIoZGF5X2luc3RhbGwsIGRheV91bikge1xyXG4gICAgICBzZXRQZW5kaW5nKHRydWUpO1xyXG4gICAgICBhcHByb3ZlLmN1cnJlbnQgPSBcIm5vbmVcIjtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVjdXJyKHtcclxuICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgIG5hbWU6IFwiVW5saW1pdGVkXCIsXHJcbiAgICAgICAgICB0ZXN0OiB0cnVlLFxyXG4gICAgICAgICAgbGluZUl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBwbGFuOiB7XHJcbiAgICAgICAgICAgICAgICBhcHBSZWN1cnJpbmdQcmljaW5nRGV0YWlsczoge1xyXG4gICAgICAgICAgICAgICAgICBwcmljZTogeyBhbW91bnQ6IDkuOTUsIGN1cnJlbmN5Q29kZTogXCJVU0RcIiB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIHJldHVyblVybDogXCJodHRwczovL2M5MDQtMTE4LTE4NS02LTE4NS5uZ3Jvay1mcmVlLmFwcFwiLFxyXG4gICAgICAgICAgdHJpYWxEYXlzOiAzMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgYXhpb3NcclxuICAgICAgICAucHV0KGNvbmZpZy5IVFRQX0FQSSArIFwiL3N0b3JlL1wiICsgY29uZmlnLkV4dHJhY3RJZChkYXRhSUQuc2hvcC5pZCksIHtcclxuICAgICAgICAgIGNvbmZpcm06IHJlc3VsdC5kYXRhLmFwcFN1YnNjcmlwdGlvbkNyZWF0ZS5hcHBTdWJzY3JpcHRpb24uaWQsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoY2MpID0+IHtcclxuICAgICAgICAgIHdpbmRvdy50b3AubG9jYXRpb24gPVxyXG4gICAgICAgICAgICByZXN1bHQuZGF0YS5hcHBTdWJzY3JpcHRpb25DcmVhdGUuY29uZmlybWF0aW9uVXJsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGNoZWNrU3RhdHVzKCkge1xyXG4gICAgICBheGlvc1xyXG4gICAgICAgIC5wb3N0KGNvbmZpZy5IVFRQX0FQSSArIFwiL3N0b3JlL3NlYXJjaC9zdGF0dXNcIiwge1xyXG4gICAgICAgICAgc2VhcmNoOiBjb25maWcuRXh0cmFjdElkKGRhdGFJRC5zaG9wLmlkKSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIGlmIChyZXN1bHQuZGF0YVswXS5jb25maXJtICE9IG51bGwpIHtcclxuICAgICAgICAgICAgLy9uZXcgdXNlclxyXG4gICAgICAgICAgICBheGlvc1xyXG4gICAgICAgICAgICAgIC5nZXQoXHJcbiAgICAgICAgICAgICAgICBjb25maWcuSFRUUF9BUEkgK1xyXG4gICAgICAgICAgICAgICAgICBcIi9jaGFyZ2UvXCIgK1xyXG4gICAgICAgICAgICAgICAgICBjb25maWcuRXh0cmFjdElkKHJlc3VsdC5kYXRhWzBdLmNvbmZpcm0pXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIC50aGVuKChkZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICBkZC5kYXRhLmRhdGEucmVjdXJyaW5nX2FwcGxpY2F0aW9uX2NoYXJnZS5zdGF0dXMgPT09IFwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICBzZXRQZW5kaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSByZWRpcmVjdFVzZXIoKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vb2xkIHVzZXJcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5kYXRhWzBdLnN0YXR1cyA9PT0gXCJBQ1RJVkVcIikgc2V0UGVuZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIGVsc2UgcmVkaXJlY3RVc2VyKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcclxuICAgICAgY29uc3QgZGJfZGF0YSA9IHsgc2VhcmNoOiBjb25maWcuRXh0cmFjdElkKGRhdGFJRC5zaG9wLmlkKSB9O1xyXG4gICAgICBhd2FpdCBheGlvc1xyXG4gICAgICAgIC5wb3N0KGNvbmZpZy5IVFRQX0FQSSArIFwiL3N0b3JlL3NlYXJjaC9tb2RlXCIsIGRiX2RhdGEpXHJcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgcmVzdWx0LmRhdGFbMF0udXBzZWxsX21vZGUgPyBzZXRFbXB0eShmYWxzZSkgOiBzZXRFbXB0eSh0cnVlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XHJcbiAgICAgIGlmIChpc0luaXRpYWxNb3VudC5jdXJyZW50ICYmIGRhdGFJRCkge1xyXG4gICAgICAgIGF3YWl0IGNoZWNrU3RhdHVzKCk7XHJcbiAgICAgICAgaXNJbml0aWFsTW91bnQuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICAgIGF3YWl0IGdldERhdGEoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8UGFnZT5cclxuICAgICAgICB7IXBlbmRpbmcgPyAoXHJcbiAgICAgICAgICBlbXB0eSA/IChcclxuICAgICAgICAgICAgPEVtcHR5U3RhdGVcclxuICAgICAgICAgICAgICBoZWFkaW5nPVwiQm9vc3QgeW91ciBzYWxlc1wiXHJcbiAgICAgICAgICAgICAgYWN0aW9uPXt7IGNvbnRlbnQ6IFwiU3RhcnRcIiwgdXJsOiBcIi9mYXEtbGF5b3V0XCIgfX1cclxuICAgICAgICAgICAgICBpbWFnZT1cImh0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8wNzU3Lzk5NTUvZmlsZXMvZW1wdHktc3RhdGUuc3ZnXCI+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBSZWFkIG91ciA8YSBocmVmPVwiL2ZhcS1sYXlvdXRcIj5pbnN0cnVjdGlvbjwvYT4gdG8gc2V0IHVwIHlvdXJcclxuICAgICAgICAgICAgICAgIGZpcnN0IHVwc2VsbFxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9FbXB0eVN0YXRlPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aGVhZGVyIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgcGFkZGluZzogXCI1MHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgZm9udFNpemU6IFwiMi41ZW1cIiwgbWFyZ2luQm90dG9tOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgTWFnaWMgQUkgUG9zdC1QdXJjaGFzZSBVcHNlbGxcclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVlbVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICBJbmNyZWFzZSB5b3VyIHNhbGVzIHdpdGggb3VyIG1hZ2ljIHBvcCB1cC4uLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgIDxCYW5uZXJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImluZGV4LWJhbm5lclwiXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIldlIEdvdCBBbiB1cGRhdGUgRm9yIFVwc2VsbCBEZXNpZ24hXCJcclxuICAgICAgICAgICAgICAgIHN0YXR1cz1cImluZm9cIj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICBZb3UgY2FuIG5vdyBlZGl0IHlvdXIgYnV0dG9uIHRleHQgaW4gZGVzaWduIHBhZ2UuIFVzZSB5b3VyXHJcbiAgICAgICAgICAgICAgICAgIGNyZWF0aXZlIHRleHQgaW4geW91ciBsYW5ndWFnZSB0byBnZXQgZmFtaWxpYXIgd2l0aCB5b3VyXHJcbiAgICAgICAgICAgICAgICAgIGN1c3RvbWVycyEgUGxlYXNlIFJFLUVOQUJMRSB5b3VyIHRoZSBwb3AtdXAgaW4gb3JkZXIgdG8gdXNlXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMgbmV3IGZlYXR1cmUuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9CYW5uZXI+XHJcbiAgICAgICAgICAgICAgPEJhbm5lclxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5kZXgtYmFubmVyXCJcclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiQ29uZ3VhdHVsYXRpb24hIFlvdXIgdXBzZWxsIGlzIG5vdyBhY3RpdmF0ZWQuXCJcclxuICAgICAgICAgICAgICAgIHN0YXR1cz1cInN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgYWN0aW9uPXt7IGNvbnRlbnQ6IFwiQXBwIHNldHRpbmdcIiwgdXJsOiBcIi9hbm5vdGF0ZWQtbGF5b3V0XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgWW91IGNhbiBzdGFydCB3aXRoIGRlc2lnbiB5b3VyIHVwc2VsbCB0aGVtZSBvciBjcmVhdGUgYW5cclxuICAgICAgICAgICAgICAgICAgYXR0cmFjdGl2ZSBkaXNjb3VudC5cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+IFdlIHZhbHVlIGZlZWRiYWNrISBJdCBoZWxwcyB1cyBtYWtlIG91ciBwcm9kdWN0IGJldHRlclxyXG4gICAgICAgICAgICAgICAgICBhbmQga2VlcHMgdXMgZW5lcmdpemVkLiBMZXQgdXMga25vdyBob3cgd2UncmUgZG9pbmcue1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2FwcHMuc2hvcGlmeS5jb20vbWFnaWMtYWktcG9zdC1wdXJjaGFzZS11cHNlbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIFJldmlld1xyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9CYW5uZXI+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbiBvbmVUaGlyZD5cclxuICAgICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkRlc2lnbiB0aGVtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5Rm9vdGVyQWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgeyBjb250ZW50OiBcIlN0YXJ0XCIsIHVybDogXCIvZGVzaWduLWxheW91dFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGUgeW91ciBvd24gdGhlbWUgYnkgdXNpbmcgZGlmZmVyZW50IGNvbG9ycyB0byBmaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgeW91ciBzdG9yZS4gT3Igc2V0IHVwIGEgdGltZXIgdG8gYXR0cmFjdCB5b3VyIGN1c3RvbWVycy5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFlvdXIgdGhlbWUgc2V0dGluZ3Mgd2lsbCBiZSBhcHBsaWVkIHRvIGJvdGggdXBzZWxsIG1vZGUuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uIG9uZVRoaXJkPlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUmVwb3J0XCJcclxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlGb290ZXJBY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICB7IGNvbnRlbnQ6IFwiQW5hbHl0aWNzXCIsIHVybDogXCIvYW5hbHl0aWNzLWxheW91dFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGUgYSByZXBvcnQgdG8gZmluZCBvdXQgaG93IHlvdXIgdXBzZWxsIHBlcmZvcm1lZC5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERhaWx5LCB3ZWVrbHkgb3IgeW91IGNhbiBjdXN0b21pemUgdGhlIGRhdGUgdG8gY3JlYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZSByZXBvcnQuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0LlNlY3Rpb24gb25lVGhpcmQ+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkIHRpdGxlPVwiTmVlZCBoZWxwP1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRm9sbG93IG91ciA8YSBocmVmPVwiL2ZhcS1sYXlvdXRcIj5GQVEgZ3VpZGU8L2E+IHRvIGdldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydGVkLCBhZGRpdGlvbmFsIGhlbHAgY2FuIGJlIGZvdW5kIGhlcmUuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBPdXIgdGVhbSBpcyBhbHdheXMgaGVyZSB0byBoZWxwIHdpdGggQXBwIGluc3RhbGxhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmQgb3RoZXIgaXNzdWVzLiBGZWVsIGZyZWUgdG8gcmVhY2ggdXMgYnkgZW1haWw6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnRAc21hcnRlY29tdGVjaC5jb21cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+KE1vbmRheSAtIEZyaWRheSwgOWFtIHRvIDVwbSk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPFJlY29tbWVuZCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIClcclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPEZyYW1lPlxyXG4gICAgICAgICAgICA8U2tlbGV0b25QYWdlIHRpdGxlPVwiUHJlcGFyaW5nLi4uXCI+XHJcbiAgICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPENhcmQgc3ViZHVlZD5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTa2VsZXRvbkRpc3BsYXlUZXh0IHNpemU9XCJzbWFsbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTa2VsZXRvbkJvZHlUZXh0IGxpbmVzPXsyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9UZXh0Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2tlbGV0b25Cb2R5VGV4dCBsaW5lcz17Mn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgPC9Ta2VsZXRvblBhZ2U+XHJcbiAgICAgICAgICA8L0ZyYW1lPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvUGFnZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iLCJpbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9TSE9QX0lEID0gZ3FsYFxyXG4gIHF1ZXJ5IHtcclxuICAgIHNob3Age1xyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDUkVBVEVfRElTQ09VTlQgPSBncWxgXHJcbiAgbXV0YXRpb24gZGlzY291bnRDb2RlQmFzaWNDcmVhdGUoXHJcbiAgICAkYmFzaWNDb2RlRGlzY291bnQ6IERpc2NvdW50Q29kZUJhc2ljSW5wdXQhXHJcbiAgKSB7XHJcbiAgICBkaXNjb3VudENvZGVCYXNpY0NyZWF0ZShiYXNpY0NvZGVEaXNjb3VudDogJGJhc2ljQ29kZURpc2NvdW50KSB7XHJcbiAgICAgIGNvZGVEaXNjb3VudE5vZGUge1xyXG4gICAgICAgIGlkXHJcbiAgICAgIH1cclxuICAgICAgdXNlckVycm9ycyB7XHJcbiAgICAgICAgY29kZVxyXG4gICAgICAgIGZpZWxkXHJcbiAgICAgICAgbWVzc2FnZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFTEVURV9TQ1JJUFQgPSBncWxgXHJcbiAgbXV0YXRpb24gc2NyaXB0VGFnRGVsZXRlKCRpZDogSUQhKSB7XHJcbiAgICBzY3JpcHRUYWdEZWxldGUoaWQ6ICRpZCkge1xyXG4gICAgICBkZWxldGVkU2NyaXB0VGFnSWRcclxuICAgICAgdXNlckVycm9ycyB7XHJcbiAgICAgICAgZmllbGRcclxuICAgICAgICBtZXNzYWdlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ1JFQVRFX1NDUklQVCA9IGdxbGBcclxuICBtdXRhdGlvbiBzY3JpcHRUYWdDcmVhdGUoJGlucHV0OiBTY3JpcHRUYWdJbnB1dCEpIHtcclxuICAgIHNjcmlwdFRhZ0NyZWF0ZShpbnB1dDogJGlucHV0KSB7XHJcbiAgICAgIHNjcmlwdFRhZyB7XHJcbiAgICAgICAgaWRcclxuICAgICAgfVxyXG4gICAgICB1c2VyRXJyb3JzIHtcclxuICAgICAgICBmaWVsZFxyXG4gICAgICAgIG1lc3NhZ2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfT1JERVJTX1VQU0VMTCA9IGdxbGBcclxuICBxdWVyeSAoJHF1ZXJ5OiBTdHJpbmcpIHtcclxuICAgIG9yZGVycyhmaXJzdDogMTAwLCBxdWVyeTogJHF1ZXJ5KSB7XHJcbiAgICAgIGVkZ2VzIHtcclxuICAgICAgICBub2RlIHtcclxuICAgICAgICAgIHRvdGFsUHJpY2VTZXQge1xyXG4gICAgICAgICAgICBwcmVzZW50bWVudE1vbmV5IHtcclxuICAgICAgICAgICAgICBhbW91bnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfT1JERVJTX1RPVEFMID0gZ3FsYFxyXG4gIHF1ZXJ5ICgkcXVlcnk6IFN0cmluZykge1xyXG4gICAgb3JkZXJzKGZpcnN0OiAxMDAsIHF1ZXJ5OiAkcXVlcnkpIHtcclxuICAgICAgZWRnZXMge1xyXG4gICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgdG90YWxQcmljZVNldCB7XHJcbiAgICAgICAgICAgIHByZXNlbnRtZW50TW9uZXkge1xyXG4gICAgICAgICAgICAgIGFtb3VudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENSRUFURV9SRUNVUlJJTkcgPSBncWxgXHJcbiAgbXV0YXRpb24gYXBwU3Vic2NyaXB0aW9uQ3JlYXRlKFxyXG4gICAgJG5hbWU6IFN0cmluZyFcclxuICAgICRsaW5lSXRlbXM6IFtBcHBTdWJzY3JpcHRpb25MaW5lSXRlbUlucHV0IV0hXHJcbiAgICAkcmV0dXJuVXJsOiBVUkwhXHJcbiAgICAkdHJpYWxEYXlzOiBJbnRcclxuICApIHtcclxuICAgIGFwcFN1YnNjcmlwdGlvbkNyZWF0ZShcclxuICAgICAgbmFtZTogJG5hbWVcclxuICAgICAgbGluZUl0ZW1zOiAkbGluZUl0ZW1zXHJcbiAgICAgIHJldHVyblVybDogJHJldHVyblVybFxyXG4gICAgICB0cmlhbERheXM6ICR0cmlhbERheXNcclxuICAgICAgdGVzdDogdHJ1ZVxyXG4gICAgKSB7XHJcbiAgICAgIGFwcFN1YnNjcmlwdGlvbiB7XHJcbiAgICAgICAgaWRcclxuICAgICAgfVxyXG4gICAgICBjb25maXJtYXRpb25VcmxcclxuICAgICAgdXNlckVycm9ycyB7XHJcbiAgICAgICAgZmllbGRcclxuICAgICAgICBtZXNzYWdlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1BST0RVQ1RTX0JZX0lEID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldFByb2R1Y3RzKCRpZHM6IFtJRCFdISkge1xyXG4gICAgbm9kZXMoaWRzOiAkaWRzKSB7XHJcbiAgICAgIC4uLiBvbiBQcm9kdWN0IHtcclxuICAgICAgICB0aXRsZVxyXG4gICAgICAgIGhhbmRsZVxyXG4gICAgICAgIGRlc2NyaXB0aW9uSHRtbFxyXG4gICAgICAgIGlkXHJcbiAgICAgICAgaW1hZ2VzKGZpcnN0OiAxKSB7XHJcbiAgICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgIG9yaWdpbmFsU3JjXHJcbiAgICAgICAgICAgICAgYWx0VGV4dFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhcmlhbnRzKGZpcnN0OiAxKSB7XHJcbiAgICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgSFRUUF9BUEk6IFwiaHR0cHM6Ly9jOTA0LTExOC0xODUtNi0xODUubmdyb2stZnJlZS5hcHBcIixcclxuICBFeHRyYWN0SWQ6IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgIHZhciBtYXRjaGVzID0gc3RyLm1hdGNoKC8oXFxkKykvKTtcclxuICAgIGlmIChtYXRjaGVzKSByZXR1cm4gbWF0Y2hlc1swXTtcclxuICB9LFxyXG4gIENvbWJpbmVJZDogZnVuY3Rpb24gKHN0cikge1xyXG4gICAgdmFyIHN0cjEgPSBcImdpZDovL3Nob3BpZnkvU2NyaXB0VGFnL1wiO1xyXG4gICAgc3RyID0gc3RyMS5jb25jYXQoc3RyKTtcclxuICAgIHJldHVybiBzdHI7XHJcbiAgfSxcclxuICBDb21iaW5lUElEOiBmdW5jdGlvbiAoc3RyKSB7XHJcbiAgICB2YXIgc3RyMSA9IFwiZ2lkOi8vc2hvcGlmeS9Qcm9kdWN0L1wiO1xyXG4gICAgc3RyID0gc3RyMS5jb25jYXQoc3RyKTtcclxuICAgIHJldHVybiBzdHI7XHJcbiAgfSxcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2hvcGlmeS9wb2xhcmlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtdGFnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFwb2xsb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9