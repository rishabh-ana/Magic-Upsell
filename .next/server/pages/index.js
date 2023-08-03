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



const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

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
  const approve = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])('block');
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
      approve.current = 'none';
      const result = await recurr({
        variables: {
          name: "Unlimited",
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
          returnUrl: "https://app.magicupsell.com/",
          trialDays: 1
        }
      });
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.put(config.HTTP_API + '/store/' + config.ExtractId(dataID.shop.id), {
        confirm: result.data.appSubscriptionCreate.appSubscription.id
      }).then(cc => {
        window.top.location = result.data.appSubscriptionCreate.confirmationUrl;
      });
    }

    async function checkStatus() {
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(config.HTTP_API + '/store/search/status', {
        search: config.ExtractId(dataID.shop.id)
      }).then(result => {
        if (result.data[0].confirm != null) {
          //new user
          axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(config.HTTP_API + '/charge/' + config.ExtractId(result.data[0].confirm)).then(dd => {
            if (dd.data.data.recurring_application_charge.status === 'active') {
              setPending(false);
            } else redirectUser();
          });
        } else {
          //old user
          if (result.data[0].status === 'ACTIVE') setPending(false);else redirectUser();
        }
      });
    }

    async function getData() {
      const db_data = {
        search: config.ExtractId(dataID.shop.id)
      };
      await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(config.HTTP_API + '/store/search/mode', db_data).then(result => {
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
      content: 'Start',
      url: '/faq-layout'
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
      content: 'App setting',
      url: '/annotated-layout'
    }
  }, __jsx("p", null, "You can start with design your upsell theme or create an attractive discount.", __jsx("br", null), " We value feedback! It helps us make our product better and keeps us energized. Let us know how we're doing. ", __jsx("a", {
    href: "https://apps.shopify.com/magic-ai-post-purchase-upsell",
    target: "_blank"
  }, "Review"))), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, {
    oneThird: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Design theme",
    secondaryFooterActions: [{
      content: 'Start',
      url: '/design-layout'
    }]
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"].Section, null, __jsx("p", null, "Create your own theme by using different colors to fit your store. Or set up a timer to attract your customers."), __jsx("br", null), __jsx("p", null, "Your theme settings will be applied to both upsell mode."), __jsx("br", null), __jsx("br", null)))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, {
    oneThird: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Report",
    secondaryFooterActions: [{
      content: 'Analytics',
      url: '/analytics-layout'
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
mutation discountCodeBasicCreate($basicCodeDiscount: DiscountCodeBasicInput!) {
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
query ($query: String){
  orders(first: 100,query: $query) {
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
query ($query: String){
  orders(first: 100,query: $query) {
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
mutation appSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!, $trialDays: Int) {
  appSubscriptionCreate(name: $name, lineItems: $lineItems, returnUrl: $returnUrl, trialDays: $trialDays) {
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
  HTTP_API: 'https://app.magicupsell.com',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvUmVjb21tZW5kLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NlcnZlci9jb25maWcvYXBwQmFzaWNRdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvY29uZmlnL2h0dHBDb25maWcuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzaG9waWZ5L3BvbGFyaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtdGFnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hcG9sbG9cIiJdLCJuYW1lcyI6WyJSZWNvbW1lbmQiLCJpbWciLCJjb25maWciLCJyZXF1aXJlIiwiSW5kZXgiLCJpc0luaXRpYWxNb3VudCIsInVzZVJlZiIsInJlY3VyciIsInVzZU11dGF0aW9uIiwiQ1JFQVRFX1JFQ1VSUklORyIsImVycm9yIiwiZXJyb3JJRCIsImRhdGEiLCJkYXRhSUQiLCJ1c2VRdWVyeSIsIkdFVF9TSE9QX0lEIiwiZW1wdHkiLCJzZXRFbXB0eSIsInVzZVN0YXRlIiwiYXBwcm92ZSIsInBlbmRpbmciLCJzZXRQZW5kaW5nIiwiZnJlZVRyaWFsIiwic2V0RnJlZVRyaWFsIiwiZGVhZGxpbmUiLCJ1c2VFZmZlY3QiLCJyZWRpcmVjdFVzZXIiLCJkYXlfaW5zdGFsbCIsImRheV91biIsImN1cnJlbnQiLCJyZXN1bHQiLCJ2YXJpYWJsZXMiLCJuYW1lIiwibGluZUl0ZW1zIiwicGxhbiIsImFwcFJlY3VycmluZ1ByaWNpbmdEZXRhaWxzIiwicHJpY2UiLCJhbW91bnQiLCJjdXJyZW5jeUNvZGUiLCJyZXR1cm5VcmwiLCJ0cmlhbERheXMiLCJheGlvcyIsInB1dCIsIkhUVFBfQVBJIiwiRXh0cmFjdElkIiwic2hvcCIsImlkIiwiY29uZmlybSIsImFwcFN1YnNjcmlwdGlvbkNyZWF0ZSIsImFwcFN1YnNjcmlwdGlvbiIsInRoZW4iLCJjYyIsIndpbmRvdyIsInRvcCIsImxvY2F0aW9uIiwiY29uZmlybWF0aW9uVXJsIiwiY2hlY2tTdGF0dXMiLCJwb3N0Iiwic2VhcmNoIiwiZ2V0IiwiZGQiLCJyZWN1cnJpbmdfYXBwbGljYXRpb25fY2hhcmdlIiwic3RhdHVzIiwiZ2V0RGF0YSIsImRiX2RhdGEiLCJ1cHNlbGxfbW9kZSIsImZldGNoRGF0YSIsImNvbnRlbnQiLCJ1cmwiLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nIiwiZm9udFNpemUiLCJtYXJnaW5Cb3R0b20iLCJncWwiLCJDUkVBVEVfRElTQ09VTlQiLCJERUxFVEVfU0NSSVBUIiwiQ1JFQVRFX1NDUklQVCIsIlNFQVJDSF9PUkRFUlNfVVBTRUxMIiwiU0VBUkNIX09SREVSU19UT1RBTCIsIkdFVF9QUk9EVUNUU19CWV9JRCIsIm1vZHVsZSIsImV4cG9ydHMiLCJzdHIiLCJtYXRjaGVzIiwibWF0Y2giLCJDb21iaW5lSWQiLCJzdHIxIiwiY29uY2F0IiwiQ29tYmluZVBJRCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUtBOztBQUVBLFNBQVNBLFNBQVQsR0FBcUI7QUFDbkIsU0FDRSxtQkFDRSxpQkFERixFQUVFLE1BQUMsd0RBQUQsbUNBRkYsRUFHRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBRyxRQUFJLEVBQUMsNkNBQVI7QUFBc0QsVUFBTSxFQUFDO0FBQTdELEtBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFLG1CQUFLO0FBQUssT0FBRyxFQUFDO0FBQVQsSUFBTCxDQURGLEVBRUUsbUJBQ0U7QUFBSSxhQUFTLEVBQUM7QUFBZCwwQkFERixFQUVFLGtEQUZGLEVBR0U7QUFBSyxPQUFHLEVBQUM7QUFBVCxJQUhGLENBRkYsQ0FERixDQURGLEVBV0U7QUFBRyxRQUFJLEVBQUMsZ0RBQVI7QUFBeUQsVUFBTSxFQUFDO0FBQWhFLEtBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFLG1CQUFLO0FBQUssT0FBRyxFQUFDO0FBQVQsSUFBTCxDQURGLEVBRUUsbUJBQ0U7QUFBSSxhQUFTLEVBQUM7QUFBZCw2QkFERixFQUVFLGtFQUZGLEVBR0U7QUFBSyxPQUFHLEVBQUM7QUFBVCxJQUhGLENBRkYsQ0FERixDQVhGLENBSEYsRUF5QkgsaUJBekJHLEVBMEJIO0FBQUcsU0FBSyxFQUFFO0FBQUMsZUFBUSxTQUFUO0FBQW1CLHdCQUFpQjtBQUFwQyxLQUFWO0FBQXVELFFBQUksRUFBQywyQkFBNUQ7QUFBd0YsVUFBTSxFQUFDO0FBQS9GLDZCQTFCRyxDQURGO0FBOEJEOztBQUVjQSx3RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFDQTtBQU1BO0FBQ0EsTUFBTUMsR0FBRyxHQUFHLG1FQUFaOztBQUNBLE1BQU1DLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxxRUFBRCxDQUF0Qjs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNDLEtBQVQsR0FBaUI7QUFDZixRQUFNQyxjQUFjLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUE3QjtBQUNBLFFBQU0sQ0FBQ0MsTUFBRCxJQUFXQyxnRUFBVyxDQUFDQyxnRkFBRCxDQUE1QjtBQUNBLFFBQU07QUFBQ0MsU0FBSyxFQUFDQyxPQUFQO0FBQWdCQyxRQUFJLEVBQUNDO0FBQXJCLE1BQStCQyw2REFBUSxDQUFDQywyRUFBRCxDQUE3QztBQUNBLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsc0RBQVEsQ0FBQyxJQUFELENBQWxDO0FBQ0EsUUFBTUMsT0FBTyxHQUFHYixvREFBTSxDQUFDLE9BQUQsQ0FBdEI7QUFDQSxRQUFNO0FBQUEsT0FBQ2MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JILHNEQUFRLENBQUMsSUFBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDSSxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0Qkwsc0RBQVEsQ0FBQyxFQUFELENBQTFDO0FBQ0EsUUFBTU0sUUFBUSxHQUFHbEIsb0RBQU0sQ0FBQyxDQUFELENBQXZCO0FBRUFtQix5REFBUyxDQUFDLE1BQU07QUFDZCxtQkFBZUMsWUFBZixDQUE0QkMsV0FBNUIsRUFBeUNDLE1BQXpDLEVBQWlEO0FBQy9DUCxnQkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNBRixhQUFPLENBQUNVLE9BQVIsR0FBa0IsTUFBbEI7QUFDQSxZQUFNQyxNQUFNLEdBQUcsTUFBTXZCLE1BQU0sQ0FBQztBQUMxQndCLGlCQUFTLEVBQUM7QUFDUkMsY0FBSSxFQUFFLFdBREU7QUFFUkMsbUJBQVMsRUFBRSxDQUFDO0FBQ1ZDLGdCQUFJLEVBQUU7QUFDSkMsd0NBQTBCLEVBQUU7QUFDeEJDLHFCQUFLLEVBQUU7QUFBRUMsd0JBQU0sRUFBRSxJQUFWO0FBQWdCQyw4QkFBWSxFQUFFO0FBQTlCO0FBRGlCO0FBRHhCO0FBREksV0FBRCxDQUZIO0FBU1JDLG1CQUFTLEVBQUUsOEJBVEg7QUFVUkMsbUJBQVMsRUFBRTtBQVZIO0FBRGdCLE9BQUQsQ0FBM0I7QUFjQUMsa0RBQUssQ0FBQ0MsR0FBTixDQUFVeEMsTUFBTSxDQUFDeUMsUUFBUCxHQUFrQixTQUFsQixHQUE4QnpDLE1BQU0sQ0FBQzBDLFNBQVAsQ0FBaUIvQixNQUFNLENBQUNnQyxJQUFQLENBQVlDLEVBQTdCLENBQXhDLEVBQTBFO0FBQUNDLGVBQU8sRUFBQ2pCLE1BQU0sQ0FBQ2xCLElBQVAsQ0FBWW9DLHFCQUFaLENBQWtDQyxlQUFsQyxDQUFrREg7QUFBM0QsT0FBMUUsRUFBMElJLElBQTFJLENBQWdKQyxFQUFELElBQU07QUFBQ0MsY0FBTSxDQUFDQyxHQUFQLENBQVdDLFFBQVgsR0FBb0J4QixNQUFNLENBQUNsQixJQUFQLENBQVlvQyxxQkFBWixDQUFrQ08sZUFBdEQ7QUFBdUUsT0FBN047QUFDRDs7QUFFRCxtQkFBZUMsV0FBZixHQUE2QjtBQUMzQmYsa0RBQUssQ0FBQ2dCLElBQU4sQ0FBV3ZELE1BQU0sQ0FBQ3lDLFFBQVAsR0FBa0Isc0JBQTdCLEVBQXFEO0FBQUNlLGNBQU0sRUFBQ3hELE1BQU0sQ0FBQzBDLFNBQVAsQ0FBaUIvQixNQUFNLENBQUNnQyxJQUFQLENBQVlDLEVBQTdCO0FBQVIsT0FBckQsRUFBZ0dJLElBQWhHLENBQXFHcEIsTUFBTSxJQUFJO0FBQzlHLFlBQUdBLE1BQU0sQ0FBQ2xCLElBQVAsQ0FBWSxDQUFaLEVBQWVtQyxPQUFmLElBQTBCLElBQTdCLEVBQWtDO0FBQ3hDO0FBQ1NOLHNEQUFLLENBQUNrQixHQUFOLENBQVV6RCxNQUFNLENBQUN5QyxRQUFQLEdBQWlCLFVBQWpCLEdBQTRCekMsTUFBTSxDQUFDMEMsU0FBUCxDQUFpQmQsTUFBTSxDQUFDbEIsSUFBUCxDQUFZLENBQVosRUFBZW1DLE9BQWhDLENBQXRDLEVBQWdGRyxJQUFoRixDQUFzRlUsRUFBRCxJQUFNO0FBQ2hHLGdCQUFHQSxFQUFFLENBQUNoRCxJQUFILENBQVFBLElBQVIsQ0FBYWlELDRCQUFiLENBQTBDQyxNQUExQyxLQUFxRCxRQUF4RCxFQUFrRTtBQUFDekMsd0JBQVUsQ0FBQyxLQUFELENBQVY7QUFBbUIsYUFBdEYsTUFDS0ssWUFBWTtBQUNYLFdBSEQ7QUFJUixTQU5LLE1BT0Q7QUFDTDtBQUNHLGNBQUdJLE1BQU0sQ0FBQ2xCLElBQVAsQ0FBWSxDQUFaLEVBQWVrRCxNQUFmLEtBQTBCLFFBQTdCLEVBQXVDekMsVUFBVSxDQUFDLEtBQUQsQ0FBVixDQUF2QyxLQUNLSyxZQUFZO0FBQ25CO0FBQ0ssT0FiRDtBQWNEOztBQUVELG1CQUFlcUMsT0FBZixHQUF5QjtBQUN2QixZQUFNQyxPQUFPLEdBQUc7QUFBQ04sY0FBTSxFQUFDeEQsTUFBTSxDQUFDMEMsU0FBUCxDQUFpQi9CLE1BQU0sQ0FBQ2dDLElBQVAsQ0FBWUMsRUFBN0I7QUFBUixPQUFoQjtBQUNBLFlBQU1MLDRDQUFLLENBQUNnQixJQUFOLENBQVd2RCxNQUFNLENBQUN5QyxRQUFQLEdBQWtCLG9CQUE3QixFQUFtRHFCLE9BQW5ELEVBQTREZCxJQUE1RCxDQUFpRXBCLE1BQU0sSUFBSTtBQUMvRUEsY0FBTSxDQUFDbEIsSUFBUCxDQUFZLENBQVosRUFBZXFELFdBQWYsR0FBNkJoRCxRQUFRLENBQUMsS0FBRCxDQUFyQyxHQUErQ0EsUUFBUSxDQUFDLElBQUQsQ0FBdkQ7QUFDRCxPQUZLLENBQU47QUFHRDs7QUFFRCxtQkFBZWlELFNBQWYsR0FBMkI7QUFDekIsVUFBSTdELGNBQWMsQ0FBQ3dCLE9BQWYsSUFBMEJoQixNQUE5QixFQUFzQztBQUNwQyxjQUFNMkMsV0FBVyxFQUFqQjtBQUNBbkQsc0JBQWMsQ0FBQ3dCLE9BQWYsR0FBeUIsS0FBekI7QUFDQSxjQUFNa0MsT0FBTyxFQUFiO0FBQ0Q7QUFDRjs7QUFFREcsYUFBUztBQUNWLEdBdERRLENBQVQ7QUF1REEsU0FDRSxtQkFDQSxNQUFDLHFEQUFELFFBQ0MsQ0FBQzlDLE9BQUQsR0FDQ0osS0FBSyxHQUNMLE1BQUMsMkRBQUQ7QUFDQSxXQUFPLEVBQUMsa0JBRFI7QUFFQSxVQUFNLEVBQUU7QUFBQ21ELGFBQU8sRUFBRSxPQUFWO0FBQW1CQyxTQUFHLEVBQUU7QUFBeEIsS0FGUjtBQUdBLFNBQUssRUFBQztBQUhOLEtBS0EsOEJBQVk7QUFBRyxRQUFJLEVBQUM7QUFBUixtQkFBWixpQ0FMQSxDQURLLEdBU0wsbUJBQ0w7QUFBUSxTQUFLLEVBQUU7QUFBQ0MsZUFBUyxFQUFDLFFBQVg7QUFBb0JDLGFBQU8sRUFBQztBQUE1QjtBQUFmLEtBQ1M7QUFBSSxTQUFLLEVBQUU7QUFBQ0MsY0FBUSxFQUFDLE9BQVY7QUFBa0JDLGtCQUFZLEVBQUM7QUFBL0I7QUFBWCxxQ0FEVCxFQUVTO0FBQUcsU0FBSyxFQUFFO0FBQUNELGNBQVEsRUFBQztBQUFWO0FBQVYsb0RBRlQsQ0FESyxFQUtMLE1BQUMsdURBQUQ7QUFDUyxhQUFTLEVBQUMsY0FEbkI7QUFFUyxTQUFLLEVBQUMscUNBRmY7QUFHUyxVQUFNLEVBQUM7QUFIaEIsS0FJUyxxTkFKVCxDQUxLLEVBV0UsTUFBQyx1REFBRDtBQUNFLGFBQVMsRUFBQyxjQURaO0FBRUUsU0FBSyxFQUFDLCtDQUZSO0FBR0UsVUFBTSxFQUFDLFNBSFQ7QUFJRSxVQUFNLEVBQUU7QUFBQ0osYUFBTyxFQUFFLGFBQVY7QUFBeUJDLFNBQUcsRUFBRTtBQUE5QjtBQUpWLEtBS0Usa0dBQWdGLGlCQUFoRixtSEFBa007QUFBRyxRQUFJLEVBQUMsd0RBQVI7QUFBaUUsVUFBTSxFQUFDO0FBQXhFLGNBQWxNLENBTEYsQ0FYRixFQWtCRSxpQkFsQkYsRUFtQkUsTUFBQyx1REFBRCxRQUNFLE1BQUMsdURBQUQsQ0FBUSxPQUFSO0FBQWdCLFlBQVE7QUFBeEIsS0FDRSxNQUFDLHFEQUFEO0FBQ0EsU0FBSyxFQUFDLGNBRE47QUFFQSwwQkFBc0IsRUFBRSxDQUFDO0FBQUNELGFBQU8sRUFBRSxPQUFWO0FBQW1CQyxTQUFHLEVBQUM7QUFBdkIsS0FBRDtBQUZ4QixLQUlFLE1BQUMscURBQUQsQ0FBTSxPQUFOLFFBQ0UsbUlBREYsRUFFRSxpQkFGRixFQUdFLDRFQUhGLEVBSUUsaUJBSkYsRUFJTyxpQkFKUCxDQUpGLENBREYsQ0FERixFQWNFLE1BQUMsdURBQUQsQ0FBUSxPQUFSO0FBQWdCLFlBQVE7QUFBeEIsS0FDRSxNQUFDLHFEQUFEO0FBQ0EsU0FBSyxFQUFDLFFBRE47QUFFQSwwQkFBc0IsRUFBRSxDQUFDO0FBQUNELGFBQU8sRUFBRSxXQUFWO0FBQXVCQyxTQUFHLEVBQUM7QUFBM0IsS0FBRDtBQUZ4QixLQUlFLE1BQUMscURBQUQsQ0FBTSxPQUFOLFFBQ0UsMEVBREYsRUFFRSxpQkFGRixFQUdFLHFGQUhGLEVBSUUsaUJBSkYsRUFJTyxpQkFKUCxFQUlZLGlCQUpaLENBSkYsQ0FERixDQWRGLEVBMkJFLE1BQUMsdURBQUQsQ0FBUSxPQUFSO0FBQWdCLFlBQVE7QUFBeEIsS0FDRSxNQUFDLHFEQUFEO0FBQ0EsU0FBSyxFQUFDO0FBRE4sS0FHQSxNQUFDLHFEQUFELENBQU0sT0FBTixRQUNFLGdDQUFjO0FBQUcsUUFBSSxFQUFDO0FBQVIsaUJBQWQsd0RBREYsQ0FIQSxFQU1BLE1BQUMscURBQUQsQ0FBTSxPQUFOLFFBQ0UscUpBREYsRUFFRSxpQkFGRixFQUVPLGlEQUZQLENBTkEsQ0FERixDQTNCRixDQW5CRixFQTRETCxpQkE1REssRUE2REwsaUJBN0RLLEVBOERMLE1BQUMsdUVBQUQsT0E5REssQ0FWRCxHQTJFQyxNQUFDLHNEQUFELFFBQ0UsTUFBQyw2REFBRDtBQUFjLFNBQUssRUFBQztBQUFwQixLQUNFLE1BQUMsdURBQUQsUUFDRSxNQUFDLHVEQUFELENBQVEsT0FBUixRQUNFLE1BQUMscURBQUQ7QUFBTSxXQUFPO0FBQWIsS0FDRSxNQUFDLHFEQUFELENBQU0sT0FBTixRQUNFLE1BQUMsOERBQUQsUUFDRSxNQUFDLG9FQUFEO0FBQXFCLFFBQUksRUFBQztBQUExQixJQURGLEVBRUUsTUFBQyxpRUFBRDtBQUFrQixTQUFLLEVBQUU7QUFBekIsSUFGRixDQURGLENBREYsRUFPRSxNQUFDLHFEQUFELENBQU0sT0FBTixRQUNFLE1BQUMsaUVBQUQ7QUFBa0IsU0FBSyxFQUFFO0FBQXpCLElBREYsQ0FQRixDQURGLENBREYsQ0FERixDQURGLENBNUVGLENBREEsQ0FERjtBQXFHRDs7QUFFY2hFLG9FQUFmLEU7Ozs7Ozs7Ozs7OztBQ3hMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNVyxXQUFXLEdBQUcwRCxrREFBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FOTztBQVFBLE1BQU1DLGVBQWUsR0FBR0Qsa0RBQUk7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FiTztBQWVBLE1BQU1FLGFBQWEsR0FBR0Ysa0RBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FWTztBQVlBLE1BQU1HLGFBQWEsR0FBR0gsa0RBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBWk87QUFjQSxNQUFNSSxvQkFBb0IsR0FBR0osa0RBQUk7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWRPO0FBZ0JBLE1BQU1LLG1CQUFtQixHQUFHTCxrREFBSTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBZE87QUFnQkEsTUFBTWhFLGdCQUFnQixHQUFHZ0Usa0RBQUk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FiTztBQWVBLE1BQU1NLGtCQUFrQixHQUFHTixrREFBSTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0EzQk8sQzs7Ozs7Ozs7Ozs7QUNsR1BPLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNmdEMsVUFBUSxFQUFFLDZCQURLO0FBRWZDLFdBQVMsRUFBRSxVQUFTc0MsR0FBVCxFQUFhO0FBQ3RCLFFBQUlDLE9BQU8sR0FBR0QsR0FBRyxDQUFDRSxLQUFKLENBQVUsT0FBVixDQUFkO0FBQ0EsUUFBR0QsT0FBSCxFQUFZLE9BQU9BLE9BQU8sQ0FBQyxDQUFELENBQWQ7QUFDYixHQUxjO0FBTWZFLFdBQVMsRUFBRSxVQUFTSCxHQUFULEVBQWE7QUFDdEIsUUFBSUksSUFBSSxHQUFHLDBCQUFYO0FBQ0FKLE9BQUcsR0FBR0ksSUFBSSxDQUFDQyxNQUFMLENBQVlMLEdBQVosQ0FBTjtBQUNBLFdBQU9BLEdBQVA7QUFDRCxHQVZjO0FBV2ZNLFlBQVUsRUFBRSxVQUFTTixHQUFULEVBQWE7QUFDdkIsUUFBSUksSUFBSSxHQUFHLHdCQUFYO0FBQ0FKLE9BQUcsR0FBR0ksSUFBSSxDQUFDQyxNQUFMLENBQVlMLEdBQVosQ0FBTjtBQUNBLFdBQU9BLEdBQVA7QUFDRDtBQWZjLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEseUMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHtcclxuICBQYWdlLFxyXG4gIFRleHRDb250YWluZXIsXHJcbiAgSGVhZGluZyxcclxufSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0ICcuLi9jc3MvQXBwU3R5bGUuY3NzJztcclxuXHJcbmZ1bmN0aW9uIFJlY29tbWVuZCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGhyLz5cclxuICAgICAgPEhlYWRpbmc+TW9yZSBTbWFydCBFY29tIFRlY2ggQXBwPC9IZWFkaW5nPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYXBwcy5zaG9waWZ5LmNvbS9tYWdpYy10aWt0b2stcGl4ZWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1jb250YWluZXItY2hpbGRcIj5cclxuICAgICAgICAgICAgPGRpdj48aW1nIHNyYz1cImh0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8wMzEzLzE0NDcvNzE4OC9maWxlcy90dS5wbmc/dj0xNTg0NDcyNTAzXCIvPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJhcHAtbmFtZVwiPk1hZ2ljIFRpa1RvayBQaXhlbDwvaDE+XHJcbiAgICAgICAgICAgICAgPHA+T25lLWNsaWNrIFRpa1RvayBQaXhlbCBJbnN0YWxsPC9wPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9jZG4uc2hvcGlmeS5jb20vcy9maWxlcy8xLzAzMTMvMTQ0Ny83MTg4L2ZpbGVzLzVzdGFyLnBuZz92PTE1ODM0MzM5NTZcIi8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2FwcHMuc2hvcGlmeS5jb20vbWFnaWMtcGludGVyZXN0LXBpeGVsXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY29udGFpbmVyLWNoaWxkXCI+XHJcbiAgICAgICAgICAgIDxkaXY+PGltZyBzcmM9XCJodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDMxMy8xNDQ3LzcxODgvZmlsZXMvcHUucG5nP3Y9MTU4MzQzMjA3OFwiLz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYXBwLW5hbWVcIj5NYWdpYyBQaW50ZXJlc3QgUGl4ZWw8L2gxPlxyXG4gICAgICAgICAgICAgIDxwPk9uZS1jbGljayBQaW50ZXJlc3QgY29udmVyc2lvbiBldmVudHMgdHJhY2tpbmc8L3A+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDMxMy8xNDQ3LzcxODgvZmlsZXMvNXN0YXIucG5nP3Y9MTU4MzQzMzk1NlwiLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG5cdDxici8+XHJcblx0PGEgc3R5bGU9e3snY29sb3InOicjZjQ3Nzc3JywndGV4dERlY29yYXRpb24nOidub25lJ319IGhyZWY9XCJodHRwOi8vc21hcnRlY29tdGVjaC5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+RGlzY292ZXIgTW9yZSBBcHBzLi4uPC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWNvbW1lbmQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VFZmZlY3QsdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gICAgRW1wdHlTdGF0ZSxcclxuICAgIExheW91dCwgUGFnZSwgQmFubmVyLCBDYXJkLCBIZWFkaW5nLCBGcmFtZSxcclxuICAgIFNrZWxldG9uQm9keVRleHQsIFNrZWxldG9uRGlzcGxheVRleHQsIFNrZWxldG9uUGFnZSxcclxuICAgIFRleHRDb250YWluZXJcclxufSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IHsgVGl0bGVCYXIgfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0JztcclxuY29uc3QgaW1nID0gJ2h0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8wNzU3Lzk5NTUvZmlsZXMvZW1wdHktc3RhdGUuc3ZnJztcclxuY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi4vc2VydmVyL2NvbmZpZy9odHRwQ29uZmlnLmpzJyk7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7R0VUX1NIT1BfSUQsQ1JFQVRFX1JFQ1VSUklOR30gZnJvbSAnLi4vc2VydmVyL2NvbmZpZy9hcHBCYXNpY1F1ZXJ5LmpzJztcclxuaW1wb3J0IHsgdXNlUXVlcnksdXNlTXV0YXRpb24gfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xyXG5pbXBvcnQgJy4uL2NsaWVudC9jc3MvQXBwU3R5bGUuY3NzJztcclxuaW1wb3J0IFJlY29tbWVuZCBmcm9tICcuLi9jbGllbnQvY29tcG9uZW50cy9SZWNvbW1lbmQuanMnXHJcblxyXG5mdW5jdGlvbiBJbmRleCgpIHtcclxuICBjb25zdCBpc0luaXRpYWxNb3VudCA9IHVzZVJlZih0cnVlKTtcclxuICBjb25zdCBbcmVjdXJyXSA9IHVzZU11dGF0aW9uKENSRUFURV9SRUNVUlJJTkcpO1xyXG4gIGNvbnN0IHtlcnJvcjplcnJvcklELCBkYXRhOmRhdGFJRH0gPSB1c2VRdWVyeShHRVRfU0hPUF9JRCk7XHJcbiAgY29uc3QgW2VtcHR5LCBzZXRFbXB0eV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBhcHByb3ZlID0gdXNlUmVmKCdibG9jaycpO1xyXG4gIGNvbnN0IFtwZW5kaW5nLCBzZXRQZW5kaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtmcmVlVHJpYWwsIHNldEZyZWVUcmlhbF0gPSB1c2VTdGF0ZSgxNCk7XHJcbiAgY29uc3QgZGVhZGxpbmUgPSB1c2VSZWYoMCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiByZWRpcmVjdFVzZXIoZGF5X2luc3RhbGwsIGRheV91bikge1xyXG4gICAgICBzZXRQZW5kaW5nKHRydWUpO1xyXG4gICAgICBhcHByb3ZlLmN1cnJlbnQgPSAnbm9uZSc7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlY3Vycih7XHJcbiAgICAgICAgdmFyaWFibGVzOntcclxuICAgICAgICAgIG5hbWU6IFwiVW5saW1pdGVkXCIsXHJcbiAgICAgICAgICBsaW5lSXRlbXM6IFt7XHJcbiAgICAgICAgICAgIHBsYW46IHtcclxuICAgICAgICAgICAgICBhcHBSZWN1cnJpbmdQcmljaW5nRGV0YWlsczoge1xyXG4gICAgICAgICAgICAgICAgICBwcmljZTogeyBhbW91bnQ6IDkuOTUsIGN1cnJlbmN5Q29kZTogXCJVU0RcIiB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XSxcclxuICAgICAgICAgIHJldHVyblVybDogXCJodHRwczovL2FwcC5tYWdpY3Vwc2VsbC5jb20vXCIsXHJcbiAgICAgICAgICB0cmlhbERheXM6IDFcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBheGlvcy5wdXQoY29uZmlnLkhUVFBfQVBJICsgJy9zdG9yZS8nICsgY29uZmlnLkV4dHJhY3RJZChkYXRhSUQuc2hvcC5pZCksIHtjb25maXJtOnJlc3VsdC5kYXRhLmFwcFN1YnNjcmlwdGlvbkNyZWF0ZS5hcHBTdWJzY3JpcHRpb24uaWR9KS50aGVuKChjYyk9Pnt3aW5kb3cudG9wLmxvY2F0aW9uPXJlc3VsdC5kYXRhLmFwcFN1YnNjcmlwdGlvbkNyZWF0ZS5jb25maXJtYXRpb25Vcmw7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gY2hlY2tTdGF0dXMoKSB7XHJcbiAgICAgIGF4aW9zLnBvc3QoY29uZmlnLkhUVFBfQVBJICsgJy9zdG9yZS9zZWFyY2gvc3RhdHVzJywge3NlYXJjaDpjb25maWcuRXh0cmFjdElkKGRhdGFJRC5zaG9wLmlkKX0pLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgIGlmKHJlc3VsdC5kYXRhWzBdLmNvbmZpcm0gIT0gbnVsbCl7XHJcblx0Ly9uZXcgdXNlclxyXG4gICAgICAgICAgYXhpb3MuZ2V0KGNvbmZpZy5IVFRQX0FQSSArJy9jaGFyZ2UvJytjb25maWcuRXh0cmFjdElkKHJlc3VsdC5kYXRhWzBdLmNvbmZpcm0pKS50aGVuKChkZCk9PntcclxuXHQgICAgaWYoZGQuZGF0YS5kYXRhLnJlY3VycmluZ19hcHBsaWNhdGlvbl9jaGFyZ2Uuc3RhdHVzID09PSAnYWN0aXZlJykge3NldFBlbmRpbmcoZmFsc2UpO31cclxuXHQgICAgZWxzZSByZWRpcmVjdFVzZXIoKTtcclxuICAgICAgICAgIH0pO1xyXG5cdH1cclxuXHRlbHNlIHtcclxuXHQvL29sZCB1c2VyXHJcblx0ICAgaWYocmVzdWx0LmRhdGFbMF0uc3RhdHVzID09PSAnQUNUSVZFJykgc2V0UGVuZGluZyhmYWxzZSk7XHJcblx0ICAgZWxzZSByZWRpcmVjdFVzZXIoKTtcclxuXHR9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XHJcbiAgICAgIGNvbnN0IGRiX2RhdGEgPSB7c2VhcmNoOmNvbmZpZy5FeHRyYWN0SWQoZGF0YUlELnNob3AuaWQpfTtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdChjb25maWcuSFRUUF9BUEkgKyAnL3N0b3JlL3NlYXJjaC9tb2RlJywgZGJfZGF0YSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgIHJlc3VsdC5kYXRhWzBdLnVwc2VsbF9tb2RlID8gc2V0RW1wdHkoZmFsc2UpIDogc2V0RW1wdHkodHJ1ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcclxuICAgICAgaWYgKGlzSW5pdGlhbE1vdW50LmN1cnJlbnQgJiYgZGF0YUlEKSB7XHJcbiAgICAgICAgYXdhaXQgY2hlY2tTdGF0dXMoKTtcclxuICAgICAgICBpc0luaXRpYWxNb3VudC5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgICAgYXdhaXQgZ2V0RGF0YSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdj5cclxuICAgIDxQYWdlPlxyXG4gICAgeyFwZW5kaW5nID9cclxuICAgICAgZW1wdHkgP1xyXG4gICAgICA8RW1wdHlTdGF0ZVxyXG4gICAgICBoZWFkaW5nPVwiQm9vc3QgeW91ciBzYWxlc1wiXHJcbiAgICAgIGFjdGlvbj17e2NvbnRlbnQ6ICdTdGFydCcsIHVybDogJy9mYXEtbGF5b3V0J319XHJcbiAgICAgIGltYWdlPVwiaHR0cHM6Ly9jZG4uc2hvcGlmeS5jb20vcy9maWxlcy8xLzA3NTcvOTk1NS9maWxlcy9lbXB0eS1zdGF0ZS5zdmdcIlxyXG4gICAgICA+XHJcbiAgICAgIDxwPlJlYWQgb3VyIDxhIGhyZWY9XCIvZmFxLWxheW91dFwiPmluc3RydWN0aW9uPC9hPiB0byBzZXQgdXAgeW91ciBmaXJzdCB1cHNlbGw8L3A+XHJcbiAgICAgIDwvRW1wdHlTdGF0ZT5cclxuICAgICAgOlxyXG4gICAgICA8ZGl2PlxyXG5cdDxoZWFkZXIgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIixwYWRkaW5nOlwiNTBweFwifX0+XHJcbiAgICAgICAgICA8aDEgc3R5bGU9e3tmb250U2l6ZTpcIjIuNWVtXCIsbWFyZ2luQm90dG9tOlwiMjBweFwifX0+TWFnaWMgQUkgUG9zdC1QdXJjaGFzZSBVcHNlbGw8L2gxPlxyXG4gICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTpcIjEuNWVtXCJ9fT5JbmNyZWFzZSB5b3VyIHNhbGVzIHdpdGggb3VyIG1hZ2ljIHBvcCB1cC4uLjwvcD5cclxuIFx0PC9oZWFkZXI+XHJcblx0PEJhbm5lclxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW5kZXgtYmFubmVyXCJcclxuICAgICAgICAgIHRpdGxlPVwiV2UgR290IEFuIHVwZGF0ZSBGb3IgVXBzZWxsIERlc2lnbiFcIlxyXG4gICAgICAgICAgc3RhdHVzPVwiaW5mb1wiPlxyXG4gICAgICAgICAgPHA+WW91IGNhbiBub3cgZWRpdCB5b3VyIGJ1dHRvbiB0ZXh0IGluIGRlc2lnbiBwYWdlLiBVc2UgeW91ciBjcmVhdGl2ZSB0ZXh0IGluIHlvdXIgbGFuZ3VhZ2UgdG8gZ2V0IGZhbWlsaWFyIHdpdGggeW91ciBjdXN0b21lcnMhIFBsZWFzZSBSRS1FTkFCTEUgeW91ciB0aGUgcG9wLXVwIGluIG9yZGVyIHRvIHVzZSB0aGlzIG5ldyBmZWF0dXJlLjwvcD5cclxuICAgICAgICA8L0Jhbm5lcj5cclxuICAgICAgICA8QmFubmVyXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpbmRleC1iYW5uZXJcIlxyXG4gICAgICAgICAgdGl0bGU9XCJDb25ndWF0dWxhdGlvbiEgWW91ciB1cHNlbGwgaXMgbm93IGFjdGl2YXRlZC5cIlxyXG4gICAgICAgICAgc3RhdHVzPVwic3VjY2Vzc1wiXHJcbiAgICAgICAgICBhY3Rpb249e3tjb250ZW50OiAnQXBwIHNldHRpbmcnLCB1cmw6ICcvYW5ub3RhdGVkLWxheW91dCd9fT5cclxuICAgICAgICAgIDxwPllvdSBjYW4gc3RhcnQgd2l0aCBkZXNpZ24geW91ciB1cHNlbGwgdGhlbWUgb3IgY3JlYXRlIGFuIGF0dHJhY3RpdmUgZGlzY291bnQuPGJyLz4gV2UgdmFsdWUgZmVlZGJhY2shIEl0IGhlbHBzIHVzIG1ha2Ugb3VyIHByb2R1Y3QgYmV0dGVyIGFuZCBrZWVwcyB1cyBlbmVyZ2l6ZWQuIExldCB1cyBrbm93IGhvdyB3ZSdyZSBkb2luZy4gPGEgaHJlZj1cImh0dHBzOi8vYXBwcy5zaG9waWZ5LmNvbS9tYWdpYy1haS1wb3N0LXB1cmNoYXNlLXVwc2VsbFwiIHRhcmdldD1cIl9ibGFua1wiPlJldmlldzwvYT48L3A+XHJcbiAgICAgICAgPC9CYW5uZXI+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgPExheW91dC5TZWN0aW9uIG9uZVRoaXJkPlxyXG4gICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICB0aXRsZT1cIkRlc2lnbiB0aGVtZVwiXHJcbiAgICAgICAgICAgIHNlY29uZGFyeUZvb3RlckFjdGlvbnM9e1t7Y29udGVudDogJ1N0YXJ0JywgdXJsOicvZGVzaWduLWxheW91dCd9XX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxDYXJkLlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8cD5DcmVhdGUgeW91ciBvd24gdGhlbWUgYnkgdXNpbmcgZGlmZmVyZW50IGNvbG9ycyB0byBmaXQgeW91ciBzdG9yZS4gT3Igc2V0IHVwIGEgdGltZXIgdG8gYXR0cmFjdCB5b3VyIGN1c3RvbWVycy48L3A+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgPHA+WW91ciB0aGVtZSBzZXR0aW5ncyB3aWxsIGJlIGFwcGxpZWQgdG8gYm90aCB1cHNlbGwgbW9kZS48L3A+XHJcbiAgICAgICAgICAgICAgICA8YnIvPjxici8+XHJcbiAgICAgICAgICAgICAgPC9DYXJkLlNlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICA8TGF5b3V0LlNlY3Rpb24gb25lVGhpcmQ+XHJcbiAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgIHRpdGxlPVwiUmVwb3J0XCJcclxuICAgICAgICAgICAgc2Vjb25kYXJ5Rm9vdGVyQWN0aW9ucz17W3tjb250ZW50OiAnQW5hbHl0aWNzJywgdXJsOicvYW5hbHl0aWNzLWxheW91dCd9XX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxDYXJkLlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8cD5DcmVhdGUgYSByZXBvcnQgdG8gZmluZCBvdXQgaG93IHlvdXIgdXBzZWxsIHBlcmZvcm1lZC48L3A+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgPHA+RGFpbHksIHdlZWtseSBvciB5b3UgY2FuIGN1c3RvbWl6ZSB0aGUgZGF0ZSB0byBjcmVhdGUgdGhlIHJlcG9ydC48L3A+XHJcbiAgICAgICAgICAgICAgICA8YnIvPjxici8+PGJyLz5cclxuICAgICAgICAgICAgICA8L0NhcmQuU2VjdGlvbj5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbiBvbmVUaGlyZD5cclxuICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgdGl0bGU9XCJOZWVkIGhlbHA/XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q2FyZC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgIDxwPkZvbGxvdyBvdXIgPGEgaHJlZj1cIi9mYXEtbGF5b3V0XCI+RkFRIGd1aWRlPC9hPiB0byBnZXQgc3RhcnRlZCwgYWRkaXRpb25hbCBoZWxwIGNhbiBiZSBmb3VuZCBoZXJlLjwvcD5cclxuICAgICAgICAgICAgPC9DYXJkLlNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxDYXJkLlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPHA+T3VyIHRlYW0gaXMgYWx3YXlzIGhlcmUgdG8gaGVscCB3aXRoIEFwcCBpbnN0YWxsYXRpb24gYW5kIG90aGVyIGlzc3Vlcy4gRmVlbCBmcmVlIHRvIHJlYWNoIHVzIGJ5IGVtYWlsOiBzdXBwb3J0QHNtYXJ0ZWNvbXRlY2guY29tPC9wPlxyXG4gICAgICAgICAgICAgIDxici8+PHA+KE1vbmRheSAtIEZyaWRheSwgOWFtIHRvIDVwbSk8L3A+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5TZWN0aW9uPlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICA8L0xheW91dD5cclxuXHQ8YnIvPlxyXG5cdDxici8+XHJcblx0PFJlY29tbWVuZC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA6XHJcbiAgICAgIDxGcmFtZT5cclxuICAgICAgICA8U2tlbGV0b25QYWdlIHRpdGxlPVwiUHJlcGFyaW5nLi4uXCI+XHJcbiAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8TGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPENhcmQgc3ViZHVlZD5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTa2VsZXRvbkRpc3BsYXlUZXh0IHNpemU9XCJzbWFsbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNrZWxldG9uQm9keVRleHQgbGluZXM9ezJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvVGV4dENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPFNrZWxldG9uQm9keVRleHQgbGluZXM9ezJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8L1NrZWxldG9uUGFnZT5cclxuICAgIDwvRnJhbWU+XHJcbiAgICB9XHJcbiAgICA8L1BhZ2U+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIiwiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1NIT1BfSUQgPSBncWxgXHJcbnF1ZXJ5IHtcclxuICBzaG9wIHtcclxuICAgIGlkXHJcbiAgfVxyXG59XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ1JFQVRFX0RJU0NPVU5UID0gZ3FsYFxyXG5tdXRhdGlvbiBkaXNjb3VudENvZGVCYXNpY0NyZWF0ZSgkYmFzaWNDb2RlRGlzY291bnQ6IERpc2NvdW50Q29kZUJhc2ljSW5wdXQhKSB7XHJcbiAgZGlzY291bnRDb2RlQmFzaWNDcmVhdGUoYmFzaWNDb2RlRGlzY291bnQ6ICRiYXNpY0NvZGVEaXNjb3VudCkge1xyXG4gICAgY29kZURpc2NvdW50Tm9kZSB7XHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgICB1c2VyRXJyb3JzIHtcclxuICAgICAgY29kZVxyXG4gICAgICBmaWVsZFxyXG4gICAgICBtZXNzYWdlXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgREVMRVRFX1NDUklQVCA9IGdxbGBcclxubXV0YXRpb24gc2NyaXB0VGFnRGVsZXRlKCRpZDogSUQhKSB7XHJcbiAgc2NyaXB0VGFnRGVsZXRlKGlkOiAkaWQpIHtcclxuICAgIGRlbGV0ZWRTY3JpcHRUYWdJZFxyXG4gICAgdXNlckVycm9ycyB7XHJcbiAgICAgIGZpZWxkXHJcbiAgICAgIG1lc3NhZ2VcclxuICAgIH1cclxuICB9XHJcbn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDUkVBVEVfU0NSSVBUID0gZ3FsYFxyXG5tdXRhdGlvbiBzY3JpcHRUYWdDcmVhdGUoJGlucHV0OiBTY3JpcHRUYWdJbnB1dCEpIHtcclxuICBzY3JpcHRUYWdDcmVhdGUoaW5wdXQ6ICRpbnB1dCkge1xyXG4gICAgc2NyaXB0VGFnIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICAgIHVzZXJFcnJvcnMge1xyXG4gICAgICBmaWVsZFxyXG4gICAgICBtZXNzYWdlXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU0VBUkNIX09SREVSU19VUFNFTEwgPSBncWxgXHJcbnF1ZXJ5ICgkcXVlcnk6IFN0cmluZyl7XHJcbiAgb3JkZXJzKGZpcnN0OiAxMDAscXVlcnk6ICRxdWVyeSkge1xyXG4gICAgZWRnZXMge1xyXG4gICAgICBub2RlIHtcclxuICAgICAgICB0b3RhbFByaWNlU2V0IHtcclxuICAgICAgICAgIHByZXNlbnRtZW50TW9uZXkge1xyXG4gICAgICAgICAgICBhbW91bnRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfT1JERVJTX1RPVEFMID0gZ3FsYFxyXG5xdWVyeSAoJHF1ZXJ5OiBTdHJpbmcpe1xyXG4gIG9yZGVycyhmaXJzdDogMTAwLHF1ZXJ5OiAkcXVlcnkpIHtcclxuICAgIGVkZ2VzIHtcclxuICAgICAgbm9kZSB7XHJcbiAgICAgICAgdG90YWxQcmljZVNldCB7XHJcbiAgICAgICAgICBwcmVzZW50bWVudE1vbmV5IHtcclxuICAgICAgICAgICAgYW1vdW50XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ1JFQVRFX1JFQ1VSUklORyA9IGdxbGBcclxubXV0YXRpb24gYXBwU3Vic2NyaXB0aW9uQ3JlYXRlKCRuYW1lOiBTdHJpbmchLCAkbGluZUl0ZW1zOiBbQXBwU3Vic2NyaXB0aW9uTGluZUl0ZW1JbnB1dCFdISwgJHJldHVyblVybDogVVJMISwgJHRyaWFsRGF5czogSW50KSB7XHJcbiAgYXBwU3Vic2NyaXB0aW9uQ3JlYXRlKG5hbWU6ICRuYW1lLCBsaW5lSXRlbXM6ICRsaW5lSXRlbXMsIHJldHVyblVybDogJHJldHVyblVybCwgdHJpYWxEYXlzOiAkdHJpYWxEYXlzKSB7XHJcbmFwcFN1YnNjcmlwdGlvbiB7XHJcbiAgICAgIGlkXHJcbiAgICB9ICAgIFxyXG5jb25maXJtYXRpb25VcmxcclxuICAgIHVzZXJFcnJvcnMge1xyXG4gICAgICBmaWVsZFxyXG4gICAgICBtZXNzYWdlXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1BST0RVQ1RTX0JZX0lEID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldFByb2R1Y3RzKCRpZHM6IFtJRCFdISkge1xyXG4gICAgbm9kZXMoaWRzOiAkaWRzKSB7XHJcbiAgICAgIC4uLiBvbiBQcm9kdWN0IHtcclxuICAgICAgICB0aXRsZVxyXG4gICAgICAgIGhhbmRsZVxyXG4gICAgICAgIGRlc2NyaXB0aW9uSHRtbFxyXG4gICAgICAgIGlkXHJcbiAgICAgICAgaW1hZ2VzKGZpcnN0OiAxKSB7XHJcbiAgICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgIG9yaWdpbmFsU3JjXHJcbiAgICAgICAgICAgICAgYWx0VGV4dFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhcmlhbnRzKGZpcnN0OiAxKSB7XHJcbiAgICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgSFRUUF9BUEk6ICdodHRwczovL2FwcC5tYWdpY3Vwc2VsbC5jb20nLFxyXG4gIEV4dHJhY3RJZDogZnVuY3Rpb24oc3RyKXtcclxuICAgIHZhciBtYXRjaGVzID0gc3RyLm1hdGNoKC8oXFxkKykvKTtcclxuICAgIGlmKG1hdGNoZXMpIHJldHVybiBtYXRjaGVzWzBdO1xyXG4gIH0sXHJcbiAgQ29tYmluZUlkOiBmdW5jdGlvbihzdHIpe1xyXG4gICAgdmFyIHN0cjEgPSBcImdpZDovL3Nob3BpZnkvU2NyaXB0VGFnL1wiO1xyXG4gICAgc3RyID0gc3RyMS5jb25jYXQoc3RyKTtcclxuICAgIHJldHVybiBzdHI7XHJcbiAgfSxcclxuICBDb21iaW5lUElEOiBmdW5jdGlvbihzdHIpe1xyXG4gICAgdmFyIHN0cjEgPSBcImdpZDovL3Nob3BpZnkvUHJvZHVjdC9cIjtcclxuICAgIHN0ciA9IHN0cjEuY29uY2F0KHN0cik7XHJcbiAgICByZXR1cm4gc3RyO1xyXG4gIH0sXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hcG9sbG9cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==