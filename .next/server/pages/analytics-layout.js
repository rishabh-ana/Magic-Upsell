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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/analytics-layout.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/components/DisplayOrders.js":
/*!********************************************!*\
  !*** ./client/components/DisplayOrders.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _server_config_appBasicQuery_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../server/config/appBasicQuery.js */ "./server/config/appBasicQuery.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function fetchDate(d) {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const lastWeek = new Date(today);
  lastWeek.setDate(lastWeek.getDate() - 8);
  var dateArray = {};

  switch (d) {
    case 'today':
      dateArray[0] = 'created_at:' + today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
      dateArray[1] = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
      return dateArray;

    case 'yesterday':
      dateArray[0] = 'created_at:' + yesterday.getFullYear() + '-' + (yesterday.getMonth() + 1) + '-' + yesterday.getDate();
      dateArray[1] = yesterday.getFullYear() + '-' + (yesterday.getMonth() + 1) + '-' + yesterday.getDate();
      return dateArray;

    case 'lastWeek':
      dateArray[0] = 'created_at:>=' + lastWeek.getFullYear() + '-' + (lastWeek.getMonth() + 1) + '-' + lastWeek.getDate() + ' created_at:<=' + yesterday.getFullYear() + '-' + (yesterday.getMonth() + 1) + '-' + yesterday.getDate();
      dateArray[1] = lastWeek.getFullYear() + '-' + (lastWeek.getMonth() + 1) + '-' + lastWeek.getDate() + ' to ' + yesterday.getFullYear() + '-' + (yesterday.getMonth() + 1) + '-' + yesterday.getDate();
      return dateArray;

    default:
      dateArray[0] = d;
      var td = [];

      for (var i = 13; i < d.length;) {
        if (d[i] === 'c') {
          td[i - 13] = ' to ';
          i = i + 13;
        } else {
          td[i - 13] = d[i];
          i++;
        }
      }

      dateArray[1] = td;
      console.log(dateArray);
      return dateArray;
  }
}

function SearchOrdersUpsell(dc, d) {
  const {
    loading: upsellLoading,
    error: upsellError,
    data: upsellData
  } = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["useQuery"])(_server_config_appBasicQuery_js__WEBPACK_IMPORTED_MODULE_3__["SEARCH_ORDERS_UPSELL"], {
    variables: {
      query: d + ' ' + dc
    }
  });
  if (upsellLoading) return 'Loading...';
  if (upsellError) return `Error! ${upsellError.message}`;

  if (upsellData && upsellData.orders.edges.length != 0 && dc != ' ') {
    let final = 0;

    for (let i = 0; i < upsellData.orders.edges.length; i++) {
      final += parseFloat(upsellData.orders.edges[i].node.totalPriceSet.presentmentMoney.amount);
    }

    return final.toFixed(1);
  } else return '0';
}

function SearchOrdersTotal(d) {
  const {
    loading: totalLoading,
    error: totalError,
    data: totalData
  } = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["useQuery"])(_server_config_appBasicQuery_js__WEBPACK_IMPORTED_MODULE_3__["SEARCH_ORDERS_TOTAL"], {
    variables: {
      query: d
    }
  });
  if (totalLoading) return 'Loading...';
  if (totalError) return `Error! ${totalError.message}`;

  if (totalData && totalData.orders.edges.length != 0) {
    let final = 0;

    for (let i = 0; i < totalData.orders.edges.length; i++) {
      final += parseFloat(totalData.orders.edges[i].node.totalPriceSet.presentmentMoney.amount);
    }

    return final.toFixed(1);
  } else return '0';
}

function Percentage(x, y) {
  const percentage = x / y * 100 + '%';
  if (percentage != 'NaN%') return percentage;else return '0';
}

function DisplayOrders({
  valueCODE
}) {
  const date = fetchDate(valueCODE.date)[0];
  const upsellPirce = SearchOrdersUpsell(valueCODE.coupon, date);
  const totalPrice = SearchOrdersTotal(date);
  const rows = [[fetchDate(valueCODE.date)[1], upsellPirce, totalPrice, Percentage(upsellPirce, totalPrice)]];
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["DataTable"], {
    columnContentTypes: ['text', 'numeric', 'numeric', 'text'],
    headings: ['Date', 'Upsell(with discount) Sale', 'Total Sale', 'Percentage'],
    rows: rows
  });
}

/* harmony default export */ __webpack_exports__["default"] = (DisplayOrders);

/***/ }),

/***/ "./client/components/SearchOrdersCustomize.js":
/*!****************************************************!*\
  !*** ./client/components/SearchOrdersCustomize.js ***!
  \****************************************************/
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
/* harmony import */ var _pages_analytics_layout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/analytics-layout.js */ "./pages/analytics-layout.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function SearchOrdersCustomize(params) {
  const {
    0: startDate,
    1: setStartDate
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: endDate,
    1: setEndDate
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: errorMsg,
    1: setErrorMsg
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const handleStartChange = value => setStartDate(value);

  const handleEndChange = value => setEndDate(value);

  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    sectioned: true
  }, __jsx("p", null, "Customize searching"), __jsx("br", null), __jsx("div", {
    className: "flex-container"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    id: "start_date",
    label: "Start date",
    type: "date",
    value: startDate,
    onChange: handleStartChange,
    error: errorMsg
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    id: "end_date",
    label: "End date",
    type: "date",
    value: endDate,
    onChange: handleEndChange
  })), __jsx("div", {
    className: "flex-container"
  }, __jsx("div", null), __jsx("div", {
    className: "submit-btn"
  }, __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    primary: true,
    onClick: () => {
      setErrorMsg('');
      startDate ? endDate ? params.setDate('created_at:>=' + startDate + ' created_at:<=' + endDate) : params.setDate('created_at:>=' + startDate + ' created_at:<=' + startDate) : setErrorMsg("Start date cannot be empty");
    }
  }, "Search"))));
}

/* harmony default export */ __webpack_exports__["default"] = (SearchOrdersCustomize);

/***/ }),

/***/ "./client/components/SearchOrdersSpecific.js":
/*!***************************************************!*\
  !*** ./client/components/SearchOrdersSpecific.js ***!
  \***************************************************/
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
/* harmony import */ var _pages_analytics_layout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/analytics-layout.js */ "./pages/analytics-layout.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function SearchOrdersSpecific(params) {
  const {
    0: selected,
    1: setSelected
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('today');
  const options = [{
    label: 'Today',
    value: 'today'
  }, {
    label: 'Yesterday',
    value: 'yesterday'
  }, {
    label: 'Last 7 days',
    value: 'lastWeek'
  }];
  const handleSelectChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(value => setSelected(value), []);
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    sectioned: true
  }, __jsx("p", null, "Search specific date"), __jsx("br", null), __jsx("div", {
    className: "flex-container"
  }, __jsx("div", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    options: options,
    onChange: handleSelectChange,
    value: selected
  })), __jsx("div", {
    className: "submit-btn"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    primary: true,
    onClick: () => {
      params.setDate(selected);
    }
  }, "Search"))));
}

/* harmony default export */ __webpack_exports__["default"] = (SearchOrdersSpecific);

/***/ }),

/***/ "./client/css/AppStyle.css":
/*!*********************************!*\
  !*** ./client/css/AppStyle.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/analytics-layout.js":
/*!***********************************!*\
  !*** ./pages/analytics-layout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _client_components_DisplayOrders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client/components/DisplayOrders */ "./client/components/DisplayOrders.js");
/* harmony import */ var _client_components_SearchOrdersSpecific__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client/components/SearchOrdersSpecific */ "./client/components/SearchOrdersSpecific.js");
/* harmony import */ var _client_components_SearchOrdersCustomize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client/components/SearchOrdersCustomize */ "./client/components/SearchOrdersCustomize.js");
/* harmony import */ var _server_config_appBasicQuery_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../server/config/appBasicQuery.js */ "./server/config/appBasicQuery.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _client_css_AppStyle_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../client/css/AppStyle.css */ "./client/css/AppStyle.css");
/* harmony import */ var _client_css_AppStyle_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_client_css_AppStyle_css__WEBPACK_IMPORTED_MODULE_8__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const config = __webpack_require__(/*! ../server/config/httpConfig.js */ "./server/config/httpConfig.js");



function AnalyticsLayout() {
  const isInitialMount = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  const {
    0: shopId,
    1: setShopId
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: coupon,
    1: setCoupon
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: date,
    1: setDate
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('today');
  const {
    0: refresh,
    1: setRefresh
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const para = {
    coupon,
    date
  };
  const {
    error,
    data
  } = Object(react_apollo__WEBPACK_IMPORTED_MODULE_6__["useQuery"])(_server_config_appBasicQuery_js__WEBPACK_IMPORTED_MODULE_5__["GET_SHOP_ID"]);
  if (error) return __jsx("div", null, "error");
  if (data && !shopId) setShopId(config.ExtractId(data.shop.id));
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function getData() {
      const search_data = {
        search: shopId
      };
      await axios__WEBPACK_IMPORTED_MODULE_7___default.a.post(config.HTTP_API + '/store/search/discount', search_data).then(result => {
        result.data[0].discount_code ? setCoupon(result.data[0].discount_code) : null;
      });
    }

    async function fetchData() {
      if (isInitialMount.current && shopId) {
        isInitialMount.current = false;
        await getData();
      }
    }

    fetchData();
  });
  return __jsx("div", null, __jsx("div", {
    className: "navigationMain"
  }, __jsx("div", null, __jsx("p", null, __jsx("a", {
    href: "/index"
  }, "Front Page"))), __jsx("div", null, __jsx("p", null, __jsx("a", {
    href: "/annotated-layout"
  }, "Setting"))), __jsx("div", null, __jsx("p", null, __jsx("a", {
    href: "/design-layout"
  }, "Design"))), __jsx("div", null, __jsx("p", null, __jsx("a", {
    style: {
      'color': '#5c6ac4'
    },
    href: "/analytics-layout"
  }, "Analytics"))), __jsx("div", null, __jsx("p", null, __jsx("a", {
    href: "/faq-layout"
  }, "FAQ")))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Page"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "App Analytics",
    sectioned: true
  }, __jsx("p", null, "Create report to view a summary of your app's discount code performance"), __jsx(_client_components_DisplayOrders__WEBPACK_IMPORTED_MODULE_2__["default"], {
    valueCODE: para
  })), __jsx(_client_components_SearchOrdersSpecific__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setDate: setDate
  }), __jsx(_client_components_SearchOrdersCustomize__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setDate: setDate
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (AnalyticsLayout);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvRGlzcGxheU9yZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9TZWFyY2hPcmRlcnNDdXN0b21pemUuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvU2VhcmNoT3JkZXJzU3BlY2lmaWMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYW5hbHl0aWNzLWxheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvY29uZmlnL2FwcEJhc2ljUXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2NvbmZpZy9odHRwQ29uZmlnLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzaG9waWZ5L3BvbGFyaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtdGFnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hcG9sbG9cIiJdLCJuYW1lcyI6WyJmZXRjaERhdGUiLCJkIiwidG9kYXkiLCJEYXRlIiwieWVzdGVyZGF5Iiwic2V0RGF0ZSIsImdldERhdGUiLCJsYXN0V2VlayIsImRhdGVBcnJheSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJ0ZCIsImkiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiU2VhcmNoT3JkZXJzVXBzZWxsIiwiZGMiLCJsb2FkaW5nIiwidXBzZWxsTG9hZGluZyIsImVycm9yIiwidXBzZWxsRXJyb3IiLCJkYXRhIiwidXBzZWxsRGF0YSIsInVzZVF1ZXJ5IiwiU0VBUkNIX09SREVSU19VUFNFTEwiLCJ2YXJpYWJsZXMiLCJxdWVyeSIsIm1lc3NhZ2UiLCJvcmRlcnMiLCJlZGdlcyIsImZpbmFsIiwicGFyc2VGbG9hdCIsIm5vZGUiLCJ0b3RhbFByaWNlU2V0IiwicHJlc2VudG1lbnRNb25leSIsImFtb3VudCIsInRvRml4ZWQiLCJTZWFyY2hPcmRlcnNUb3RhbCIsInRvdGFsTG9hZGluZyIsInRvdGFsRXJyb3IiLCJ0b3RhbERhdGEiLCJTRUFSQ0hfT1JERVJTX1RPVEFMIiwiUGVyY2VudGFnZSIsIngiLCJ5IiwicGVyY2VudGFnZSIsIkRpc3BsYXlPcmRlcnMiLCJ2YWx1ZUNPREUiLCJkYXRlIiwidXBzZWxsUGlyY2UiLCJjb3Vwb24iLCJ0b3RhbFByaWNlIiwicm93cyIsIlNlYXJjaE9yZGVyc0N1c3RvbWl6ZSIsInBhcmFtcyIsInN0YXJ0RGF0ZSIsInNldFN0YXJ0RGF0ZSIsInVzZVN0YXRlIiwiZW5kRGF0ZSIsInNldEVuZERhdGUiLCJlcnJvck1zZyIsInNldEVycm9yTXNnIiwiaGFuZGxlU3RhcnRDaGFuZ2UiLCJ2YWx1ZSIsImhhbmRsZUVuZENoYW5nZSIsIlNlYXJjaE9yZGVyc1NwZWNpZmljIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsIm9wdGlvbnMiLCJsYWJlbCIsImhhbmRsZVNlbGVjdENoYW5nZSIsInVzZUNhbGxiYWNrIiwiY29uZmlnIiwicmVxdWlyZSIsIkFuYWx5dGljc0xheW91dCIsImlzSW5pdGlhbE1vdW50IiwidXNlUmVmIiwic2hvcElkIiwic2V0U2hvcElkIiwic2V0Q291cG9uIiwicmVmcmVzaCIsInNldFJlZnJlc2giLCJwYXJhIiwiR0VUX1NIT1BfSUQiLCJFeHRyYWN0SWQiLCJzaG9wIiwiaWQiLCJ1c2VFZmZlY3QiLCJnZXREYXRhIiwic2VhcmNoX2RhdGEiLCJzZWFyY2giLCJheGlvcyIsInBvc3QiLCJIVFRQX0FQSSIsInRoZW4iLCJyZXN1bHQiLCJkaXNjb3VudF9jb2RlIiwiZmV0Y2hEYXRhIiwiY3VycmVudCIsImdxbCIsIkNSRUFURV9ESVNDT1VOVCIsIkRFTEVURV9TQ1JJUFQiLCJDUkVBVEVfU0NSSVBUIiwiQ1JFQVRFX1JFQ1VSUklORyIsIkdFVF9QUk9EVUNUU19CWV9JRCIsIm1vZHVsZSIsImV4cG9ydHMiLCJzdHIiLCJtYXRjaGVzIiwibWF0Y2giLCJDb21iaW5lSWQiLCJzdHIxIiwiY29uY2F0IiwiQ29tYmluZVBJRCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFLQTs7QUFFQSxTQUFTQSxTQUFULENBQW1CQyxDQUFuQixFQUFzQjtBQUNwQixRQUFNQyxLQUFLLEdBQUcsSUFBSUMsSUFBSixFQUFkO0FBQ0EsUUFBTUMsU0FBUyxHQUFHLElBQUlELElBQUosQ0FBU0QsS0FBVCxDQUFsQjtBQUNBRSxXQUFTLENBQUNDLE9BQVYsQ0FBa0JELFNBQVMsQ0FBQ0UsT0FBVixLQUFzQixDQUF4QztBQUNBLFFBQU1DLFFBQVEsR0FBRyxJQUFJSixJQUFKLENBQVNELEtBQVQsQ0FBakI7QUFDQUssVUFBUSxDQUFDRixPQUFULENBQWlC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QUFFLFVBQVNILEdBQVQsRUFBYTtBQUN0QixRQUFJSSxJQUFJLEdBQUcsMEJBQVg7QUFDQUosT0FBRyxHQUFHSSxJQUFJLENBQUNDLE1BQUwsQ0FBWUwsR0FBWixDQUFOO0FBQ0EsV0FBT0EsR0FBUDtBQUNELEdBVmM7QUFXZk0sWUFBVSxFQUFFLFVBQVNOLEdBQVQsRUFBYTtBQUN2QixRQUFJSSxJQUFJLEdBQUcsd0JBQVg7QUFDQUosT0FBRyxHQUFHSSxJQUFJLENBQUNDLE1BQUwsQ0FBWUwsR0FBWixDQUFOO0FBQ0EsV0FBT0EsR0FBUDtBQUNEO0FBZmMsQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiJwYWdlcy9hbmFseXRpY3MtbGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hbmFseXRpY3MtbGF5b3V0LmpzXCIpO1xuIiwiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsdXNlRWZmZWN0LHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBMYXlvdXQsXHJcbiAgQ2FyZCxcclxuICBEYXRhVGFibGUsXHJcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCB7U0VBUkNIX09SREVSU19VUFNFTEwsU0VBUkNIX09SREVSU19UT1RBTH0gZnJvbSAnLi4vLi4vc2VydmVyL2NvbmZpZy9hcHBCYXNpY1F1ZXJ5LmpzJztcclxuXHJcbmZ1bmN0aW9uIGZldGNoRGF0ZShkKSB7XHJcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IHllc3RlcmRheSA9IG5ldyBEYXRlKHRvZGF5KTtcclxuICB5ZXN0ZXJkYXkuc2V0RGF0ZSh5ZXN0ZXJkYXkuZ2V0RGF0ZSgpIC0gMSk7XHJcbiAgY29uc3QgbGFzdFdlZWsgPSBuZXcgRGF0ZSh0b2RheSk7XHJcbiAgbGFzdFdlZWsuc2V0RGF0ZShsYXN0V2Vlay5nZXREYXRlKCkgLSA4KTtcclxuICB2YXIgZGF0ZUFycmF5ID0ge307XHJcbiAgc3dpdGNoKGQpIHtcclxuICAgIGNhc2UgJ3RvZGF5JzpcclxuICAgICAgZGF0ZUFycmF5WzBdID0gJ2NyZWF0ZWRfYXQ6Jyt0b2RheS5nZXRGdWxsWWVhcigpKyctJysodG9kYXkuZ2V0TW9udGgoKSsxKSsnLScrdG9kYXkuZ2V0RGF0ZSgpO1xyXG4gICAgICBkYXRlQXJyYXlbMV0gPSB0b2RheS5nZXRGdWxsWWVhcigpKyctJysodG9kYXkuZ2V0TW9udGgoKSsxKSsnLScrdG9kYXkuZ2V0RGF0ZSgpO1xyXG4gICAgICByZXR1cm4gZGF0ZUFycmF5O1xyXG4gICAgY2FzZSAneWVzdGVyZGF5JzpcclxuICAgICAgZGF0ZUFycmF5WzBdID0gJ2NyZWF0ZWRfYXQ6Jyt5ZXN0ZXJkYXkuZ2V0RnVsbFllYXIoKSsnLScrKHllc3RlcmRheS5nZXRNb250aCgpKzEpKyctJyt5ZXN0ZXJkYXkuZ2V0RGF0ZSgpO1xyXG4gICAgICBkYXRlQXJyYXlbMV0gPSB5ZXN0ZXJkYXkuZ2V0RnVsbFllYXIoKSsnLScrKHllc3RlcmRheS5nZXRNb250aCgpKzEpKyctJyt5ZXN0ZXJkYXkuZ2V0RGF0ZSgpO1xyXG4gICAgICByZXR1cm4gZGF0ZUFycmF5O1xyXG4gICAgY2FzZSAnbGFzdFdlZWsnOlxyXG4gICAgICBkYXRlQXJyYXlbMF0gPSAnY3JlYXRlZF9hdDo+PScrbGFzdFdlZWsuZ2V0RnVsbFllYXIoKSsnLScrKGxhc3RXZWVrLmdldE1vbnRoKCkrMSkrJy0nK2xhc3RXZWVrLmdldERhdGUoKSsnIGNyZWF0ZWRfYXQ6PD0nK3llc3RlcmRheS5nZXRGdWxsWWVhcigpKyctJysoeWVzdGVyZGF5LmdldE1vbnRoKCkrMSkrJy0nK3llc3RlcmRheS5nZXREYXRlKCk7XHJcbiAgICAgIGRhdGVBcnJheVsxXSA9IGxhc3RXZWVrLmdldEZ1bGxZZWFyKCkrJy0nKyhsYXN0V2Vlay5nZXRNb250aCgpKzEpKyctJytsYXN0V2Vlay5nZXREYXRlKCkrJyB0byAnK3llc3RlcmRheS5nZXRGdWxsWWVhcigpKyctJysoeWVzdGVyZGF5LmdldE1vbnRoKCkrMSkrJy0nK3llc3RlcmRheS5nZXREYXRlKCk7XHJcbiAgICAgIHJldHVybiBkYXRlQXJyYXk7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBkYXRlQXJyYXlbMF0gPSBkO1xyXG4gICAgICB2YXIgdGQgPSBbXTtcclxuICAgICAgZm9yKHZhciBpID0gMTM7IGkgPCBkLmxlbmd0aDspIHtcclxuICAgICAgICBpZihkW2ldPT09J2MnKSB7XHJcbiAgICAgICAgICB0ZFtpLTEzXSA9ICcgdG8gJztcclxuICAgICAgICAgIGkgPSBpKzEzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle3RkW2ktMTNdID0gZFtpXTtpKys7fVxyXG4gICAgICB9XHJcbiAgICAgIGRhdGVBcnJheVsxXSA9IHRkO1xyXG5jb25zb2xlLmxvZyhkYXRlQXJyYXkpO1xyXG4gICAgICByZXR1cm4gZGF0ZUFycmF5O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gU2VhcmNoT3JkZXJzVXBzZWxsIChkYyxkKSB7XHJcbiAgY29uc3QgeyBsb2FkaW5nOnVwc2VsbExvYWRpbmcsIGVycm9yOnVwc2VsbEVycm9yLCBkYXRhOnVwc2VsbERhdGEgfSA9IHVzZVF1ZXJ5KFNFQVJDSF9PUkRFUlNfVVBTRUxMLHtcclxuICAgIHZhcmlhYmxlczp7cXVlcnk6ZCsnICcrZGN9XHJcbiAgfSk7XHJcbiAgaWYgKHVwc2VsbExvYWRpbmcpIHJldHVybiAnTG9hZGluZy4uLic7XHJcbiAgaWYgKHVwc2VsbEVycm9yKSByZXR1cm4gYEVycm9yISAke3Vwc2VsbEVycm9yLm1lc3NhZ2V9YDtcclxuICBpZiAodXBzZWxsRGF0YSAmJiB1cHNlbGxEYXRhLm9yZGVycy5lZGdlcy5sZW5ndGghPTAgJiYgZGMhPScgJykge1xyXG5sZXQgZmluYWwgPSAwO1xyXG5mb3IobGV0IGkgPTA7aTx1cHNlbGxEYXRhLm9yZGVycy5lZGdlcy5sZW5ndGg7aSsrKXtmaW5hbCs9cGFyc2VGbG9hdCh1cHNlbGxEYXRhLm9yZGVycy5lZGdlc1tpXS5ub2RlLnRvdGFsUHJpY2VTZXQucHJlc2VudG1lbnRNb25leS5hbW91bnQpO31cclxucmV0dXJuIGZpbmFsLnRvRml4ZWQoMSk7XHJcbn1cclxuICBlbHNlIHJldHVybiAnMCc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNlYXJjaE9yZGVyc1RvdGFsKGQpIHtcclxuICBjb25zdCB7IGxvYWRpbmc6dG90YWxMb2FkaW5nLCBlcnJvcjp0b3RhbEVycm9yLCBkYXRhOnRvdGFsRGF0YSB9ID0gdXNlUXVlcnkoU0VBUkNIX09SREVSU19UT1RBTCx7XHJcbiAgICB2YXJpYWJsZXM6e3F1ZXJ5OmR9XHJcbiAgfSk7XHJcbiAgaWYgKHRvdGFsTG9hZGluZykgcmV0dXJuICdMb2FkaW5nLi4uJztcclxuICBpZiAodG90YWxFcnJvcikgcmV0dXJuIGBFcnJvciEgJHt0b3RhbEVycm9yLm1lc3NhZ2V9YDtcclxuICBpZiAodG90YWxEYXRhICYmIHRvdGFsRGF0YS5vcmRlcnMuZWRnZXMubGVuZ3RoIT0wKSB7XHJcbmxldCBmaW5hbCA9IDA7XHJcbmZvcihsZXQgaSA9MDtpPHRvdGFsRGF0YS5vcmRlcnMuZWRnZXMubGVuZ3RoO2krKyl7ZmluYWwrPXBhcnNlRmxvYXQodG90YWxEYXRhLm9yZGVycy5lZGdlc1tpXS5ub2RlLnRvdGFsUHJpY2VTZXQucHJlc2VudG1lbnRNb25leS5hbW91bnQpO31cclxucmV0dXJuIGZpbmFsLnRvRml4ZWQoMSk7XHJcbn1cclxuICBlbHNlIHJldHVybiAnMCc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFBlcmNlbnRhZ2UoeCx5KSB7XHJcbiAgY29uc3QgcGVyY2VudGFnZSA9IHgveSoxMDArJyUnO1xyXG4gIGlmKHBlcmNlbnRhZ2UgIT0gJ05hTiUnKSByZXR1cm4gcGVyY2VudGFnZTtcclxuICBlbHNlIHJldHVybiAnMCc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERpc3BsYXlPcmRlcnMoe3ZhbHVlQ09ERX0pIHtcclxuICBjb25zdCBkYXRlID0gZmV0Y2hEYXRlKHZhbHVlQ09ERS5kYXRlKVswXTtcclxuICBjb25zdCB1cHNlbGxQaXJjZSA9IFNlYXJjaE9yZGVyc1Vwc2VsbCh2YWx1ZUNPREUuY291cG9uLGRhdGUpO1xyXG4gIGNvbnN0IHRvdGFsUHJpY2UgPSBTZWFyY2hPcmRlcnNUb3RhbChkYXRlKTtcclxuICBjb25zdCByb3dzID0gW1tmZXRjaERhdGUodmFsdWVDT0RFLmRhdGUpWzFdLCB1cHNlbGxQaXJjZSwgdG90YWxQcmljZSwgUGVyY2VudGFnZSh1cHNlbGxQaXJjZSx0b3RhbFByaWNlKV1dO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPERhdGFUYWJsZVxyXG4gICAgICAgICAgY29sdW1uQ29udGVudFR5cGVzPXtbXHJcbiAgICAgICAgICAgICd0ZXh0JyxcclxuICAgICAgICAgICAgJ251bWVyaWMnLFxyXG4gICAgICAgICAgICAnbnVtZXJpYycsXHJcbiAgICAgICAgICAgICd0ZXh0JyxcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgICBoZWFkaW5ncz17W1xyXG4gICAgICAgICAgICAnRGF0ZScsXHJcbiAgICAgICAgICAgICdVcHNlbGwod2l0aCBkaXNjb3VudCkgU2FsZScsXHJcbiAgICAgICAgICAgICdUb3RhbCBTYWxlJyxcclxuICAgICAgICAgICAgJ1BlcmNlbnRhZ2UnLFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICAgIHJvd3M9e3Jvd3N9XHJcbiAgICAgICAgLz5cclxuICApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGlzcGxheU9yZGVycztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBTZWxlY3QsXHJcbiAgQnV0dG9uLFxyXG4gIENhcmQsXHJcbiAgVGV4dEZpZWxkXHJcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCAnLi4vY3NzL0FwcFN0eWxlLmNzcyc7XHJcbmltcG9ydCB7UmVmcmVzaH0gZnJvbSAnLi4vLi4vcGFnZXMvYW5hbHl0aWNzLWxheW91dC5qcyc7XHJcblxyXG5mdW5jdGlvbiBTZWFyY2hPcmRlcnNDdXN0b21pemUocGFyYW1zKSB7XHJcbiAgY29uc3QgW3N0YXJ0RGF0ZSwgc2V0U3RhcnREYXRlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2VuZERhdGUsIHNldEVuZERhdGVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbZXJyb3JNc2csIHNldEVycm9yTXNnXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBoYW5kbGVTdGFydENoYW5nZSA9ICh2YWx1ZSkgPT4gc2V0U3RhcnREYXRlKHZhbHVlKTtcclxuICBjb25zdCBoYW5kbGVFbmRDaGFuZ2UgPSAodmFsdWUpID0+IHNldEVuZERhdGUodmFsdWUpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZCBzZWN0aW9uZWQ+XHJcbiAgICAgIDxwPkN1c3RvbWl6ZSBzZWFyY2hpbmc8L3A+XHJcbiAgICAgIDxici8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1jb250YWluZXJcIj5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICBpZD1cInN0YXJ0X2RhdGVcIlxyXG4gICAgICAgICAgbGFiZWw9XCJTdGFydCBkYXRlXCJcclxuICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgIHZhbHVlPXtzdGFydERhdGV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU3RhcnRDaGFuZ2V9XHJcbiAgICAgICAgICBlcnJvcj17ZXJyb3JNc2d9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICBpZD1cImVuZF9kYXRlXCJcclxuICAgICAgICAgIGxhYmVsPVwiRW5kIGRhdGVcIlxyXG4gICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgdmFsdWU9e2VuZERhdGV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRW5kQ2hhbmdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1pdC1idG5cIj5cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBwcmltYXJ5XHJcbiAgICAgICAgICBvbkNsaWNrID0geygpID0+IHtcclxuICAgICAgICAgICAgc2V0RXJyb3JNc2coJycpO1xyXG4gICAgICAgICAgICBzdGFydERhdGUgP1xyXG4gICAgICAgICAgICBlbmREYXRlID8gcGFyYW1zLnNldERhdGUoJ2NyZWF0ZWRfYXQ6Pj0nK3N0YXJ0RGF0ZSsnIGNyZWF0ZWRfYXQ6PD0nK2VuZERhdGUpIDogcGFyYW1zLnNldERhdGUoJ2NyZWF0ZWRfYXQ6Pj0nK3N0YXJ0RGF0ZSsnIGNyZWF0ZWRfYXQ6PD0nK3N0YXJ0RGF0ZSlcclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICBzZXRFcnJvck1zZyhcIlN0YXJ0IGRhdGUgY2Fubm90IGJlIGVtcHR5XCIpO1xyXG5cclxuICAgICAgICAgIH19PlNlYXJjaDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hPcmRlcnNDdXN0b21pemU7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgU2VsZWN0LFxyXG4gIEJ1dHRvbixcclxuICBDYXJkLFxyXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgJy4uL2Nzcy9BcHBTdHlsZS5jc3MnO1xyXG5pbXBvcnQge1JlZnJlc2h9IGZyb20gJy4uLy4uL3BhZ2VzL2FuYWx5dGljcy1sYXlvdXQuanMnO1xyXG5cclxuZnVuY3Rpb24gU2VhcmNoT3JkZXJzU3BlY2lmaWMocGFyYW1zKSB7XHJcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZSgndG9kYXknKTtcclxuICBjb25zdCBvcHRpb25zID0gW1xyXG4gICAge2xhYmVsOiAnVG9kYXknLCB2YWx1ZTogJ3RvZGF5J30sXHJcbiAgICB7bGFiZWw6ICdZZXN0ZXJkYXknLCB2YWx1ZTogJ3llc3RlcmRheSd9LFxyXG4gICAge2xhYmVsOiAnTGFzdCA3IGRheXMnLCB2YWx1ZTogJ2xhc3RXZWVrJ30sXHJcbiAgXTtcclxuICBjb25zdCBoYW5kbGVTZWxlY3RDaGFuZ2UgPSB1c2VDYWxsYmFjaygodmFsdWUpID0+IHNldFNlbGVjdGVkKHZhbHVlKSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQgc2VjdGlvbmVkPlxyXG4gICAgICA8cD5TZWFyY2ggc3BlY2lmaWMgZGF0ZTwvcD48YnIvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlbGVjdENoYW5nZX1cclxuICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1pdC1idG5cIj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHByaW1hcnlcclxuICAgICAgICAgIG9uQ2xpY2sgPSB7KCkgPT4ge1xyXG4gICAgICAgICAgICBwYXJhbXMuc2V0RGF0ZShzZWxlY3RlZCk7XHJcbiAgICAgICAgICB9fT5TZWFyY2g8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoT3JkZXJzU3BlY2lmaWM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VFZmZlY3QsdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIExheW91dCxcclxuICBQYWdlLFxyXG4gIENhcmQsXHJcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCBEaXNwbGF5T3JkZXJzIGZyb20gJy4uL2NsaWVudC9jb21wb25lbnRzL0Rpc3BsYXlPcmRlcnMnO1xyXG5pbXBvcnQgU2VhcmNoT3JkZXJzU3BlY2lmaWMgZnJvbSAnLi4vY2xpZW50L2NvbXBvbmVudHMvU2VhcmNoT3JkZXJzU3BlY2lmaWMnO1xyXG5pbXBvcnQgU2VhcmNoT3JkZXJzQ3VzdG9taXplIGZyb20gJy4uL2NsaWVudC9jb21wb25lbnRzL1NlYXJjaE9yZGVyc0N1c3RvbWl6ZSc7XHJcbmltcG9ydCB7R0VUX1NIT1BfSUR9IGZyb20gJy4uL3NlcnZlci9jb25maWcvYXBwQmFzaWNRdWVyeS5qcyc7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtYXBvbGxvJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi4vc2VydmVyL2NvbmZpZy9odHRwQ29uZmlnLmpzJyk7XHJcbmltcG9ydCAnLi4vY2xpZW50L2Nzcy9BcHBTdHlsZS5jc3MnO1xyXG5cclxuZnVuY3Rpb24gQW5hbHl0aWNzTGF5b3V0KCkge1xyXG4gIGNvbnN0IGlzSW5pdGlhbE1vdW50ID0gdXNlUmVmKHRydWUpO1xyXG4gIGNvbnN0IFtzaG9wSWQsIHNldFNob3BJZF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtjb3Vwb24sIHNldENvdXBvbl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlKCd0b2RheScpO1xyXG4gIGNvbnN0IFtyZWZyZXNoLCBzZXRSZWZyZXNoXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBwYXJhID0ge2NvdXBvbixkYXRlfTtcclxuXHJcbiAgY29uc3Qge2Vycm9yLCBkYXRhfSA9IHVzZVF1ZXJ5KEdFVF9TSE9QX0lEKTtcclxuICBpZihlcnJvcikgcmV0dXJuIDxkaXY+ZXJyb3I8L2Rpdj5cclxuICBpZihkYXRhICYmICFzaG9wSWQpIHNldFNob3BJZChjb25maWcuRXh0cmFjdElkKGRhdGEuc2hvcC5pZCkpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcclxuICAgICAgY29uc3Qgc2VhcmNoX2RhdGEgPSB7c2VhcmNoOnNob3BJZH07XHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoY29uZmlnLkhUVFBfQVBJICsgJy9zdG9yZS9zZWFyY2gvZGlzY291bnQnLCBzZWFyY2hfZGF0YSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgcmVzdWx0LmRhdGFbMF0uZGlzY291bnRfY29kZSA/IHNldENvdXBvbihyZXN1bHQuZGF0YVswXS5kaXNjb3VudF9jb2RlKSA6IG51bGw7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKXtcclxuICAgICAgaWYoaXNJbml0aWFsTW91bnQuY3VycmVudCAmJiBzaG9wSWQpIHtcclxuICAgICAgICBpc0luaXRpYWxNb3VudC5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgICAgYXdhaXQgZ2V0RGF0YSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9KTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uTWFpblwiPlxyXG4gICAgICA8ZGl2PjxwPjxhIGhyZWY9XCIvaW5kZXhcIj5Gcm9udCBQYWdlPC9hPjwvcD48L2Rpdj5cclxuICAgICAgPGRpdj48cD48YSBocmVmPVwiL2Fubm90YXRlZC1sYXlvdXRcIj5TZXR0aW5nPC9hPjwvcD48L2Rpdj5cclxuICAgICAgPGRpdj48cD48YSBocmVmPVwiL2Rlc2lnbi1sYXlvdXRcIj5EZXNpZ248L2E+PC9wPjwvZGl2PlxyXG4gICAgICA8ZGl2PjxwPjxhIHN0eWxlPXt7J2NvbG9yJzonIzVjNmFjNCd9fSBocmVmPVwiL2FuYWx5dGljcy1sYXlvdXRcIj5BbmFseXRpY3M8L2E+PC9wPjwvZGl2PlxyXG4gICAgICA8ZGl2PjxwPjxhIGhyZWY9XCIvZmFxLWxheW91dFwiPkZBUTwvYT48L3A+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxQYWdlPlxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgIDxDYXJkIHRpdGxlPVwiQXBwIEFuYWx5dGljc1wiIHNlY3Rpb25lZD5cclxuICAgICAgICAgICAgPHA+Q3JlYXRlIHJlcG9ydCB0byB2aWV3IGEgc3VtbWFyeSBvZiB5b3VyIGFwcCdzIGRpc2NvdW50IGNvZGUgcGVyZm9ybWFuY2U8L3A+XHJcbiAgICAgICAgICAgIDxEaXNwbGF5T3JkZXJzIHZhbHVlQ09ERT17cGFyYX0vPlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPFNlYXJjaE9yZGVyc1NwZWNpZmljIHNldERhdGU9e3NldERhdGV9Lz5cclxuICAgICAgICAgIDxTZWFyY2hPcmRlcnNDdXN0b21pemUgc2V0RGF0ZT17c2V0RGF0ZX0vPlxyXG4gICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC9QYWdlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5hbHl0aWNzTGF5b3V0O1xyXG4iLCJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfU0hPUF9JRCA9IGdxbGBcclxucXVlcnkge1xyXG4gIHNob3Age1xyXG4gICAgaWRcclxuICB9XHJcbn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDUkVBVEVfRElTQ09VTlQgPSBncWxgXHJcbm11dGF0aW9uIGRpc2NvdW50Q29kZUJhc2ljQ3JlYXRlKCRiYXNpY0NvZGVEaXNjb3VudDogRGlzY291bnRDb2RlQmFzaWNJbnB1dCEpIHtcclxuICBkaXNjb3VudENvZGVCYXNpY0NyZWF0ZShiYXNpY0NvZGVEaXNjb3VudDogJGJhc2ljQ29kZURpc2NvdW50KSB7XHJcbiAgICBjb2RlRGlzY291bnROb2RlIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICAgIHVzZXJFcnJvcnMge1xyXG4gICAgICBjb2RlXHJcbiAgICAgIGZpZWxkXHJcbiAgICAgIG1lc3NhZ2VcclxuICAgIH1cclxuICB9XHJcbn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBERUxFVEVfU0NSSVBUID0gZ3FsYFxyXG5tdXRhdGlvbiBzY3JpcHRUYWdEZWxldGUoJGlkOiBJRCEpIHtcclxuICBzY3JpcHRUYWdEZWxldGUoaWQ6ICRpZCkge1xyXG4gICAgZGVsZXRlZFNjcmlwdFRhZ0lkXHJcbiAgICB1c2VyRXJyb3JzIHtcclxuICAgICAgZmllbGRcclxuICAgICAgbWVzc2FnZVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENSRUFURV9TQ1JJUFQgPSBncWxgXHJcbm11dGF0aW9uIHNjcmlwdFRhZ0NyZWF0ZSgkaW5wdXQ6IFNjcmlwdFRhZ0lucHV0ISkge1xyXG4gIHNjcmlwdFRhZ0NyZWF0ZShpbnB1dDogJGlucHV0KSB7XHJcbiAgICBzY3JpcHRUYWcge1xyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gICAgdXNlckVycm9ycyB7XHJcbiAgICAgIGZpZWxkXHJcbiAgICAgIG1lc3NhZ2VcclxuICAgIH1cclxuICB9XHJcbn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfT1JERVJTX1VQU0VMTCA9IGdxbGBcclxucXVlcnkgKCRxdWVyeTogU3RyaW5nKXtcclxuICBvcmRlcnMoZmlyc3Q6IDEwMCxxdWVyeTogJHF1ZXJ5KSB7XHJcbiAgICBlZGdlcyB7XHJcbiAgICAgIG5vZGUge1xyXG4gICAgICAgIHRvdGFsUHJpY2VTZXQge1xyXG4gICAgICAgICAgcHJlc2VudG1lbnRNb25leSB7XHJcbiAgICAgICAgICAgIGFtb3VudFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9PUkRFUlNfVE9UQUwgPSBncWxgXHJcbnF1ZXJ5ICgkcXVlcnk6IFN0cmluZyl7XHJcbiAgb3JkZXJzKGZpcnN0OiAxMDAscXVlcnk6ICRxdWVyeSkge1xyXG4gICAgZWRnZXMge1xyXG4gICAgICBub2RlIHtcclxuICAgICAgICB0b3RhbFByaWNlU2V0IHtcclxuICAgICAgICAgIHByZXNlbnRtZW50TW9uZXkge1xyXG4gICAgICAgICAgICBhbW91bnRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDUkVBVEVfUkVDVVJSSU5HID0gZ3FsYFxyXG5tdXRhdGlvbiBhcHBTdWJzY3JpcHRpb25DcmVhdGUoJG5hbWU6IFN0cmluZyEsICRsaW5lSXRlbXM6IFtBcHBTdWJzY3JpcHRpb25MaW5lSXRlbUlucHV0IV0hLCAkcmV0dXJuVXJsOiBVUkwhLCAkdHJpYWxEYXlzOiBJbnQpIHtcclxuICBhcHBTdWJzY3JpcHRpb25DcmVhdGUobmFtZTogJG5hbWUsIGxpbmVJdGVtczogJGxpbmVJdGVtcywgcmV0dXJuVXJsOiAkcmV0dXJuVXJsLCB0cmlhbERheXM6ICR0cmlhbERheXMpIHtcclxuYXBwU3Vic2NyaXB0aW9uIHtcclxuICAgICAgaWRcclxuICAgIH0gICAgXHJcbmNvbmZpcm1hdGlvblVybFxyXG4gICAgdXNlckVycm9ycyB7XHJcbiAgICAgIGZpZWxkXHJcbiAgICAgIG1lc3NhZ2VcclxuICAgIH1cclxuICB9XHJcbn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfUFJPRFVDVFNfQllfSUQgPSBncWxgXHJcbiAgcXVlcnkgZ2V0UHJvZHVjdHMoJGlkczogW0lEIV0hKSB7XHJcbiAgICBub2RlcyhpZHM6ICRpZHMpIHtcclxuICAgICAgLi4uIG9uIFByb2R1Y3Qge1xyXG4gICAgICAgIHRpdGxlXHJcbiAgICAgICAgaGFuZGxlXHJcbiAgICAgICAgZGVzY3JpcHRpb25IdG1sXHJcbiAgICAgICAgaWRcclxuICAgICAgICBpbWFnZXMoZmlyc3Q6IDEpIHtcclxuICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgb3JpZ2luYWxTcmNcclxuICAgICAgICAgICAgICBhbHRUZXh0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyaWFudHMoZmlyc3Q6IDEpIHtcclxuICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICBIVFRQX0FQSTogJ2h0dHBzOi8vYXBwLm1hZ2ljdXBzZWxsLmNvbScsXHJcbiAgRXh0cmFjdElkOiBmdW5jdGlvbihzdHIpe1xyXG4gICAgdmFyIG1hdGNoZXMgPSBzdHIubWF0Y2goLyhcXGQrKS8pO1xyXG4gICAgaWYobWF0Y2hlcykgcmV0dXJuIG1hdGNoZXNbMF07XHJcbiAgfSxcclxuICBDb21iaW5lSWQ6IGZ1bmN0aW9uKHN0cil7XHJcbiAgICB2YXIgc3RyMSA9IFwiZ2lkOi8vc2hvcGlmeS9TY3JpcHRUYWcvXCI7XHJcbiAgICBzdHIgPSBzdHIxLmNvbmNhdChzdHIpO1xyXG4gICAgcmV0dXJuIHN0cjtcclxuICB9LFxyXG4gIENvbWJpbmVQSUQ6IGZ1bmN0aW9uKHN0cil7XHJcbiAgICB2YXIgc3RyMSA9IFwiZ2lkOi8vc2hvcGlmeS9Qcm9kdWN0L1wiO1xyXG4gICAgc3RyID0gc3RyMS5jb25jYXQoc3RyKTtcclxuICAgIHJldHVybiBzdHI7XHJcbiAgfSxcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hcG9sbG9cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==