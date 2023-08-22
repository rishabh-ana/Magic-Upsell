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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvRGlzcGxheU9yZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9TZWFyY2hPcmRlcnNDdXN0b21pemUuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvU2VhcmNoT3JkZXJzU3BlY2lmaWMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYW5hbHl0aWNzLWxheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvY29uZmlnL2FwcEJhc2ljUXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2NvbmZpZy9odHRwQ29uZmlnLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzaG9waWZ5L3BvbGFyaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtdGFnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hcG9sbG9cIiJdLCJuYW1lcyI6WyJmZXRjaERhdGUiLCJkIiwidG9kYXkiLCJEYXRlIiwieWVzdGVyZGF5Iiwic2V0RGF0ZSIsImdldERhdGUiLCJsYXN0V2VlayIsImRhdGVBcnJheSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJ0ZCIsImkiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiU2VhcmNoT3JkZXJzVXBzZWxsIiwiZGMiLCJsb2FkaW5nIiwidXBzZWxsTG9hZGluZyIsImVycm9yIiwidXBzZWxsRXJyb3IiLCJkYXRhIiwidXBzZWxsRGF0YSIsInVzZVF1ZXJ5IiwiU0VBUkNIX09SREVSU19VUFNFTEwiLCJ2YXJpYWJsZXMiLCJxdWVyeSIsIm1lc3NhZ2UiLCJvcmRlcnMiLCJlZGdlcyIsImZpbmFsIiwicGFyc2VGbG9hdCIsIm5vZGUiLCJ0b3RhbFByaWNlU2V0IiwicHJlc2VudG1lbnRNb25leSIsImFtb3VudCIsInRvRml4ZWQiLCJTZWFyY2hPcmRlcnNUb3RhbCIsInRvdGFsTG9hZGluZyIsInRvdGFsRXJyb3IiLCJ0b3RhbERhdGEiLCJTRUFSQ0hfT1JERVJTX1RPVEFMIiwiUGVyY2VudGFnZSIsIngiLCJ5IiwicGVyY2VudGFnZSIsIkRpc3BsYXlPcmRlcnMiLCJ2YWx1ZUNPREUiLCJkYXRlIiwidXBzZWxsUGlyY2UiLCJjb3Vwb24iLCJ0b3RhbFByaWNlIiwicm93cyIsIlNlYXJjaE9yZGVyc0N1c3RvbWl6ZSIsInBhcmFtcyIsInN0YXJ0RGF0ZSIsInNldFN0YXJ0RGF0ZSIsInVzZVN0YXRlIiwiZW5kRGF0ZSIsInNldEVuZERhdGUiLCJlcnJvck1zZyIsInNldEVycm9yTXNnIiwiaGFuZGxlU3RhcnRDaGFuZ2UiLCJ2YWx1ZSIsImhhbmRsZUVuZENoYW5nZSIsIlNlYXJjaE9yZGVyc1NwZWNpZmljIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsIm9wdGlvbnMiLCJsYWJlbCIsImhhbmRsZVNlbGVjdENoYW5nZSIsInVzZUNhbGxiYWNrIiwiY29uZmlnIiwicmVxdWlyZSIsIkFuYWx5dGljc0xheW91dCIsImlzSW5pdGlhbE1vdW50IiwidXNlUmVmIiwic2hvcElkIiwic2V0U2hvcElkIiwic2V0Q291cG9uIiwicmVmcmVzaCIsInNldFJlZnJlc2giLCJwYXJhIiwiR0VUX1NIT1BfSUQiLCJFeHRyYWN0SWQiLCJzaG9wIiwiaWQiLCJ1c2VFZmZlY3QiLCJnZXREYXRhIiwic2VhcmNoX2RhdGEiLCJzZWFyY2giLCJheGlvcyIsInBvc3QiLCJIVFRQX0FQSSIsInRoZW4iLCJyZXN1bHQiLCJkaXNjb3VudF9jb2RlIiwiZmV0Y2hEYXRhIiwiY3VycmVudCIsImdxbCIsIkNSRUFURV9ESVNDT1VOVCIsIkRFTEVURV9TQ1JJUFQiLCJDUkVBVEVfU0NSSVBUIiwiQ1JFQVRFX1JFQ1VSUklORyIsIkdFVF9QUk9EVUNUU19CWV9JRCIsIm1vZHVsZSIsImV4cG9ydHMiLCJzdHIiLCJtYXRjaGVzIiwibWF0Y2giLCJDb21iaW5lSWQiLCJzdHIxIiwiY29uY2F0IiwiQ29tYmluZVBJRCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFLQTs7QUFFQSxTQUFTQSxTQUFULENBQW1CQyxDQUFuQixFQUFzQjtBQUNwQixRQUFNQyxLQUFLLEdBQUcsSUFBSUMsSUFBSixFQUFkO0FBQ0EsUUFBTUMsU0FBUyxHQUFHLElBQUlELElBQUosQ0FBU0QsS0FBVCxDQUFsQjtBQUNBRSxXQUFTLENBQUNDLE9BQVYsQ0FBa0JELFNBQVMsQ0FBQ0UsT0FBVixLQUFzQixDQUF4QztBQUNBLFFBQU1DLFFBQVEsR0FBRyxJQUFJSixJQUFKLENBQVNELEtBQVQsQ0FBakI7QUFDQUssVUFBUSxDQUFDRixPQUFULENBQWlC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QUNBLFFBQUlELE9BQUosRUFBYSxPQUFPQSxPQUFPLENBQUMsQ0FBRCxDQUFkO0FBQ2QsR0FMYztBQU1mRSxXQUFTLEVBQUUsVUFBVUgsR0FBVixFQUFlO0FBQ3hCLFFBQUlJLElBQUksR0FBRywwQkFBWDtBQUNBSixPQUFHLEdBQUdJLElBQUksQ0FBQ0MsTUFBTCxDQUFZTCxHQUFaLENBQU47QUFDQSxXQUFPQSxHQUFQO0FBQ0QsR0FWYztBQVdmTSxZQUFVLEVBQUUsVUFBVU4sR0FBVixFQUFlO0FBQ3pCLFFBQUlJLElBQUksR0FBRyx3QkFBWDtBQUNBSixPQUFHLEdBQUdJLElBQUksQ0FBQ0MsTUFBTCxDQUFZTCxHQUFaLENBQU47QUFDQSxXQUFPQSxHQUFQO0FBQ0Q7QUFmYyxDQUFqQixDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6InBhZ2VzL2FuYWx5dGljcy1sYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FuYWx5dGljcy1sYXlvdXQuanNcIik7XG4iLCJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VFZmZlY3QsdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIExheW91dCxcclxuICBDYXJkLFxyXG4gIERhdGFUYWJsZSxcclxufSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IHtTRUFSQ0hfT1JERVJTX1VQU0VMTCxTRUFSQ0hfT1JERVJTX1RPVEFMfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY29uZmlnL2FwcEJhc2ljUXVlcnkuanMnO1xyXG5cclxuZnVuY3Rpb24gZmV0Y2hEYXRlKGQpIHtcclxuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3QgeWVzdGVyZGF5ID0gbmV3IERhdGUodG9kYXkpO1xyXG4gIHllc3RlcmRheS5zZXREYXRlKHllc3RlcmRheS5nZXREYXRlKCkgLSAxKTtcclxuICBjb25zdCBsYXN0V2VlayA9IG5ldyBEYXRlKHRvZGF5KTtcclxuICBsYXN0V2Vlay5zZXREYXRlKGxhc3RXZWVrLmdldERhdGUoKSAtIDgpO1xyXG4gIHZhciBkYXRlQXJyYXkgPSB7fTtcclxuICBzd2l0Y2goZCkge1xyXG4gICAgY2FzZSAndG9kYXknOlxyXG4gICAgICBkYXRlQXJyYXlbMF0gPSAnY3JlYXRlZF9hdDonK3RvZGF5LmdldEZ1bGxZZWFyKCkrJy0nKyh0b2RheS5nZXRNb250aCgpKzEpKyctJyt0b2RheS5nZXREYXRlKCk7XHJcbiAgICAgIGRhdGVBcnJheVsxXSA9IHRvZGF5LmdldEZ1bGxZZWFyKCkrJy0nKyh0b2RheS5nZXRNb250aCgpKzEpKyctJyt0b2RheS5nZXREYXRlKCk7XHJcbiAgICAgIHJldHVybiBkYXRlQXJyYXk7XHJcbiAgICBjYXNlICd5ZXN0ZXJkYXknOlxyXG4gICAgICBkYXRlQXJyYXlbMF0gPSAnY3JlYXRlZF9hdDonK3llc3RlcmRheS5nZXRGdWxsWWVhcigpKyctJysoeWVzdGVyZGF5LmdldE1vbnRoKCkrMSkrJy0nK3llc3RlcmRheS5nZXREYXRlKCk7XHJcbiAgICAgIGRhdGVBcnJheVsxXSA9IHllc3RlcmRheS5nZXRGdWxsWWVhcigpKyctJysoeWVzdGVyZGF5LmdldE1vbnRoKCkrMSkrJy0nK3llc3RlcmRheS5nZXREYXRlKCk7XHJcbiAgICAgIHJldHVybiBkYXRlQXJyYXk7XHJcbiAgICBjYXNlICdsYXN0V2Vlayc6XHJcbiAgICAgIGRhdGVBcnJheVswXSA9ICdjcmVhdGVkX2F0Oj49JytsYXN0V2Vlay5nZXRGdWxsWWVhcigpKyctJysobGFzdFdlZWsuZ2V0TW9udGgoKSsxKSsnLScrbGFzdFdlZWsuZ2V0RGF0ZSgpKycgY3JlYXRlZF9hdDo8PScreWVzdGVyZGF5LmdldEZ1bGxZZWFyKCkrJy0nKyh5ZXN0ZXJkYXkuZ2V0TW9udGgoKSsxKSsnLScreWVzdGVyZGF5LmdldERhdGUoKTtcclxuICAgICAgZGF0ZUFycmF5WzFdID0gbGFzdFdlZWsuZ2V0RnVsbFllYXIoKSsnLScrKGxhc3RXZWVrLmdldE1vbnRoKCkrMSkrJy0nK2xhc3RXZWVrLmdldERhdGUoKSsnIHRvICcreWVzdGVyZGF5LmdldEZ1bGxZZWFyKCkrJy0nKyh5ZXN0ZXJkYXkuZ2V0TW9udGgoKSsxKSsnLScreWVzdGVyZGF5LmdldERhdGUoKTtcclxuICAgICAgcmV0dXJuIGRhdGVBcnJheTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGRhdGVBcnJheVswXSA9IGQ7XHJcbiAgICAgIHZhciB0ZCA9IFtdO1xyXG4gICAgICBmb3IodmFyIGkgPSAxMzsgaSA8IGQubGVuZ3RoOykge1xyXG4gICAgICAgIGlmKGRbaV09PT0nYycpIHtcclxuICAgICAgICAgIHRkW2ktMTNdID0gJyB0byAnO1xyXG4gICAgICAgICAgaSA9IGkrMTM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7dGRbaS0xM10gPSBkW2ldO2krKzt9XHJcbiAgICAgIH1cclxuICAgICAgZGF0ZUFycmF5WzFdID0gdGQ7XHJcbmNvbnNvbGUubG9nKGRhdGVBcnJheSk7XHJcbiAgICAgIHJldHVybiBkYXRlQXJyYXk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBTZWFyY2hPcmRlcnNVcHNlbGwgKGRjLGQpIHtcclxuICBjb25zdCB7IGxvYWRpbmc6dXBzZWxsTG9hZGluZywgZXJyb3I6dXBzZWxsRXJyb3IsIGRhdGE6dXBzZWxsRGF0YSB9ID0gdXNlUXVlcnkoU0VBUkNIX09SREVSU19VUFNFTEwse1xyXG4gICAgdmFyaWFibGVzOntxdWVyeTpkKycgJytkY31cclxuICB9KTtcclxuICBpZiAodXBzZWxsTG9hZGluZykgcmV0dXJuICdMb2FkaW5nLi4uJztcclxuICBpZiAodXBzZWxsRXJyb3IpIHJldHVybiBgRXJyb3IhICR7dXBzZWxsRXJyb3IubWVzc2FnZX1gO1xyXG4gIGlmICh1cHNlbGxEYXRhICYmIHVwc2VsbERhdGEub3JkZXJzLmVkZ2VzLmxlbmd0aCE9MCAmJiBkYyE9JyAnKSB7XHJcbmxldCBmaW5hbCA9IDA7XHJcbmZvcihsZXQgaSA9MDtpPHVwc2VsbERhdGEub3JkZXJzLmVkZ2VzLmxlbmd0aDtpKyspe2ZpbmFsKz1wYXJzZUZsb2F0KHVwc2VsbERhdGEub3JkZXJzLmVkZ2VzW2ldLm5vZGUudG90YWxQcmljZVNldC5wcmVzZW50bWVudE1vbmV5LmFtb3VudCk7fVxyXG5yZXR1cm4gZmluYWwudG9GaXhlZCgxKTtcclxufVxyXG4gIGVsc2UgcmV0dXJuICcwJztcclxufVxyXG5cclxuZnVuY3Rpb24gU2VhcmNoT3JkZXJzVG90YWwoZCkge1xyXG4gIGNvbnN0IHsgbG9hZGluZzp0b3RhbExvYWRpbmcsIGVycm9yOnRvdGFsRXJyb3IsIGRhdGE6dG90YWxEYXRhIH0gPSB1c2VRdWVyeShTRUFSQ0hfT1JERVJTX1RPVEFMLHtcclxuICAgIHZhcmlhYmxlczp7cXVlcnk6ZH1cclxuICB9KTtcclxuICBpZiAodG90YWxMb2FkaW5nKSByZXR1cm4gJ0xvYWRpbmcuLi4nO1xyXG4gIGlmICh0b3RhbEVycm9yKSByZXR1cm4gYEVycm9yISAke3RvdGFsRXJyb3IubWVzc2FnZX1gO1xyXG4gIGlmICh0b3RhbERhdGEgJiYgdG90YWxEYXRhLm9yZGVycy5lZGdlcy5sZW5ndGghPTApIHtcclxubGV0IGZpbmFsID0gMDtcclxuZm9yKGxldCBpID0wO2k8dG90YWxEYXRhLm9yZGVycy5lZGdlcy5sZW5ndGg7aSsrKXtmaW5hbCs9cGFyc2VGbG9hdCh0b3RhbERhdGEub3JkZXJzLmVkZ2VzW2ldLm5vZGUudG90YWxQcmljZVNldC5wcmVzZW50bWVudE1vbmV5LmFtb3VudCk7fVxyXG5yZXR1cm4gZmluYWwudG9GaXhlZCgxKTtcclxufVxyXG4gIGVsc2UgcmV0dXJuICcwJztcclxufVxyXG5cclxuZnVuY3Rpb24gUGVyY2VudGFnZSh4LHkpIHtcclxuICBjb25zdCBwZXJjZW50YWdlID0geC95KjEwMCsnJSc7XHJcbiAgaWYocGVyY2VudGFnZSAhPSAnTmFOJScpIHJldHVybiBwZXJjZW50YWdlO1xyXG4gIGVsc2UgcmV0dXJuICcwJztcclxufVxyXG5cclxuZnVuY3Rpb24gRGlzcGxheU9yZGVycyh7dmFsdWVDT0RFfSkge1xyXG4gIGNvbnN0IGRhdGUgPSBmZXRjaERhdGUodmFsdWVDT0RFLmRhdGUpWzBdO1xyXG4gIGNvbnN0IHVwc2VsbFBpcmNlID0gU2VhcmNoT3JkZXJzVXBzZWxsKHZhbHVlQ09ERS5jb3Vwb24sZGF0ZSk7XHJcbiAgY29uc3QgdG90YWxQcmljZSA9IFNlYXJjaE9yZGVyc1RvdGFsKGRhdGUpO1xyXG4gIGNvbnN0IHJvd3MgPSBbW2ZldGNoRGF0ZSh2YWx1ZUNPREUuZGF0ZSlbMV0sIHVwc2VsbFBpcmNlLCB0b3RhbFByaWNlLCBQZXJjZW50YWdlKHVwc2VsbFBpcmNlLHRvdGFsUHJpY2UpXV07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RGF0YVRhYmxlXHJcbiAgICAgICAgICBjb2x1bW5Db250ZW50VHlwZXM9e1tcclxuICAgICAgICAgICAgJ3RleHQnLFxyXG4gICAgICAgICAgICAnbnVtZXJpYycsXHJcbiAgICAgICAgICAgICdudW1lcmljJyxcclxuICAgICAgICAgICAgJ3RleHQnLFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICAgIGhlYWRpbmdzPXtbXHJcbiAgICAgICAgICAgICdEYXRlJyxcclxuICAgICAgICAgICAgJ1Vwc2VsbCh3aXRoIGRpc2NvdW50KSBTYWxlJyxcclxuICAgICAgICAgICAgJ1RvdGFsIFNhbGUnLFxyXG4gICAgICAgICAgICAnUGVyY2VudGFnZScsXHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgICAgcm93cz17cm93c31cclxuICAgICAgICAvPlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaXNwbGF5T3JkZXJzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIFNlbGVjdCxcclxuICBCdXR0b24sXHJcbiAgQ2FyZCxcclxuICBUZXh0RmllbGRcclxufSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0ICcuLi9jc3MvQXBwU3R5bGUuY3NzJztcclxuaW1wb3J0IHtSZWZyZXNofSBmcm9tICcuLi8uLi9wYWdlcy9hbmFseXRpY3MtbGF5b3V0LmpzJztcclxuXHJcbmZ1bmN0aW9uIFNlYXJjaE9yZGVyc0N1c3RvbWl6ZShwYXJhbXMpIHtcclxuICBjb25zdCBbc3RhcnREYXRlLCBzZXRTdGFydERhdGVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbZW5kRGF0ZSwgc2V0RW5kRGF0ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtlcnJvck1zZywgc2V0RXJyb3JNc2ddID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IGhhbmRsZVN0YXJ0Q2hhbmdlID0gKHZhbHVlKSA9PiBzZXRTdGFydERhdGUodmFsdWUpO1xyXG4gIGNvbnN0IGhhbmRsZUVuZENoYW5nZSA9ICh2YWx1ZSkgPT4gc2V0RW5kRGF0ZSh2YWx1ZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkIHNlY3Rpb25lZD5cclxuICAgICAgPHA+Q3VzdG9taXplIHNlYXJjaGluZzwvcD5cclxuICAgICAgPGJyLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIGlkPVwic3RhcnRfZGF0ZVwiXHJcbiAgICAgICAgICBsYWJlbD1cIlN0YXJ0IGRhdGVcIlxyXG4gICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgdmFsdWU9e3N0YXJ0RGF0ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTdGFydENoYW5nZX1cclxuICAgICAgICAgIGVycm9yPXtlcnJvck1zZ31cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIGlkPVwiZW5kX2RhdGVcIlxyXG4gICAgICAgICAgbGFiZWw9XCJFbmQgZGF0ZVwiXHJcbiAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICB2YWx1ZT17ZW5kRGF0ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVFbmRDaGFuZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VibWl0LWJ0blwiPlxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHByaW1hcnlcclxuICAgICAgICAgIG9uQ2xpY2sgPSB7KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRFcnJvck1zZygnJyk7XHJcbiAgICAgICAgICAgIHN0YXJ0RGF0ZSA/XHJcbiAgICAgICAgICAgIGVuZERhdGUgPyBwYXJhbXMuc2V0RGF0ZSgnY3JlYXRlZF9hdDo+PScrc3RhcnREYXRlKycgY3JlYXRlZF9hdDo8PScrZW5kRGF0ZSkgOiBwYXJhbXMuc2V0RGF0ZSgnY3JlYXRlZF9hdDo+PScrc3RhcnREYXRlKycgY3JlYXRlZF9hdDo8PScrc3RhcnREYXRlKVxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIHNldEVycm9yTXNnKFwiU3RhcnQgZGF0ZSBjYW5ub3QgYmUgZW1wdHlcIik7XHJcblxyXG4gICAgICAgICAgfX0+U2VhcmNoPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaE9yZGVyc0N1c3RvbWl6ZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBTZWxlY3QsXHJcbiAgQnV0dG9uLFxyXG4gIENhcmQsXHJcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCAnLi4vY3NzL0FwcFN0eWxlLmNzcyc7XHJcbmltcG9ydCB7UmVmcmVzaH0gZnJvbSAnLi4vLi4vcGFnZXMvYW5hbHl0aWNzLWxheW91dC5qcyc7XHJcblxyXG5mdW5jdGlvbiBTZWFyY2hPcmRlcnNTcGVjaWZpYyhwYXJhbXMpIHtcclxuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKCd0b2RheScpO1xyXG4gIGNvbnN0IG9wdGlvbnMgPSBbXHJcbiAgICB7bGFiZWw6ICdUb2RheScsIHZhbHVlOiAndG9kYXknfSxcclxuICAgIHtsYWJlbDogJ1llc3RlcmRheScsIHZhbHVlOiAneWVzdGVyZGF5J30sXHJcbiAgICB7bGFiZWw6ICdMYXN0IDcgZGF5cycsIHZhbHVlOiAnbGFzdFdlZWsnfSxcclxuICBdO1xyXG4gIGNvbnN0IGhhbmRsZVNlbGVjdENoYW5nZSA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4gc2V0U2VsZWN0ZWQodmFsdWUpLCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZCBzZWN0aW9uZWQ+XHJcbiAgICAgIDxwPlNlYXJjaCBzcGVjaWZpYyBkYXRlPC9wPjxici8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VsZWN0Q2hhbmdlfVxyXG4gICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VibWl0LWJ0blwiPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgcHJpbWFyeVxyXG4gICAgICAgICAgb25DbGljayA9IHsoKSA9PiB7XHJcbiAgICAgICAgICAgIHBhcmFtcy5zZXREYXRlKHNlbGVjdGVkKTtcclxuICAgICAgICAgIH19PlNlYXJjaDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hPcmRlcnNTcGVjaWZpYztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLHVzZUVmZmVjdCx1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgTGF5b3V0LFxyXG4gIFBhZ2UsXHJcbiAgQ2FyZCxcclxufSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IERpc3BsYXlPcmRlcnMgZnJvbSAnLi4vY2xpZW50L2NvbXBvbmVudHMvRGlzcGxheU9yZGVycyc7XHJcbmltcG9ydCBTZWFyY2hPcmRlcnNTcGVjaWZpYyBmcm9tICcuLi9jbGllbnQvY29tcG9uZW50cy9TZWFyY2hPcmRlcnNTcGVjaWZpYyc7XHJcbmltcG9ydCBTZWFyY2hPcmRlcnNDdXN0b21pemUgZnJvbSAnLi4vY2xpZW50L2NvbXBvbmVudHMvU2VhcmNoT3JkZXJzQ3VzdG9taXplJztcclxuaW1wb3J0IHtHRVRfU0hPUF9JRH0gZnJvbSAnLi4vc2VydmVyL2NvbmZpZy9hcHBCYXNpY1F1ZXJ5LmpzJztcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5jb25zdCBjb25maWcgPSByZXF1aXJlKCcuLi9zZXJ2ZXIvY29uZmlnL2h0dHBDb25maWcuanMnKTtcclxuaW1wb3J0ICcuLi9jbGllbnQvY3NzL0FwcFN0eWxlLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBBbmFseXRpY3NMYXlvdXQoKSB7XHJcbiAgY29uc3QgaXNJbml0aWFsTW91bnQgPSB1c2VSZWYodHJ1ZSk7XHJcbiAgY29uc3QgW3Nob3BJZCwgc2V0U2hvcElkXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2NvdXBvbiwgc2V0Q291cG9uXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2RhdGUsIHNldERhdGVdID0gdXNlU3RhdGUoJ3RvZGF5Jyk7XHJcbiAgY29uc3QgW3JlZnJlc2gsIHNldFJlZnJlc2hdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHBhcmEgPSB7Y291cG9uLGRhdGV9O1xyXG5cclxuICBjb25zdCB7ZXJyb3IsIGRhdGF9ID0gdXNlUXVlcnkoR0VUX1NIT1BfSUQpO1xyXG4gIGlmKGVycm9yKSByZXR1cm4gPGRpdj5lcnJvcjwvZGl2PlxyXG4gIGlmKGRhdGEgJiYgIXNob3BJZCkgc2V0U2hvcElkKGNvbmZpZy5FeHRyYWN0SWQoZGF0YS5zaG9wLmlkKSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXREYXRhKCkge1xyXG4gICAgICBjb25zdCBzZWFyY2hfZGF0YSA9IHtzZWFyY2g6c2hvcElkfTtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdChjb25maWcuSFRUUF9BUEkgKyAnL3N0b3JlL3NlYXJjaC9kaXNjb3VudCcsIHNlYXJjaF9kYXRhKS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICByZXN1bHQuZGF0YVswXS5kaXNjb3VudF9jb2RlID8gc2V0Q291cG9uKHJlc3VsdC5kYXRhWzBdLmRpc2NvdW50X2NvZGUpIDogbnVsbDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpe1xyXG4gICAgICBpZihpc0luaXRpYWxNb3VudC5jdXJyZW50ICYmIHNob3BJZCkge1xyXG4gICAgICAgIGlzSW5pdGlhbE1vdW50LmN1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgICBhd2FpdCBnZXREYXRhKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0pO1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb25NYWluXCI+XHJcbiAgICAgIDxkaXY+PHA+PGEgaHJlZj1cIi9pbmRleFwiPkZyb250IFBhZ2U8L2E+PC9wPjwvZGl2PlxyXG4gICAgICA8ZGl2PjxwPjxhIGhyZWY9XCIvYW5ub3RhdGVkLWxheW91dFwiPlNldHRpbmc8L2E+PC9wPjwvZGl2PlxyXG4gICAgICA8ZGl2PjxwPjxhIGhyZWY9XCIvZGVzaWduLWxheW91dFwiPkRlc2lnbjwvYT48L3A+PC9kaXY+XHJcbiAgICAgIDxkaXY+PHA+PGEgc3R5bGU9e3snY29sb3InOicjNWM2YWM0J319IGhyZWY9XCIvYW5hbHl0aWNzLWxheW91dFwiPkFuYWx5dGljczwvYT48L3A+PC9kaXY+XHJcbiAgICAgIDxkaXY+PHA+PGEgaHJlZj1cIi9mYXEtbGF5b3V0XCI+RkFRPC9hPjwvcD48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPFBhZ2U+XHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPExheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgPENhcmQgdGl0bGU9XCJBcHAgQW5hbHl0aWNzXCIgc2VjdGlvbmVkPlxyXG4gICAgICAgICAgICA8cD5DcmVhdGUgcmVwb3J0IHRvIHZpZXcgYSBzdW1tYXJ5IG9mIHlvdXIgYXBwJ3MgZGlzY291bnQgY29kZSBwZXJmb3JtYW5jZTwvcD5cclxuICAgICAgICAgICAgPERpc3BsYXlPcmRlcnMgdmFsdWVDT0RFPXtwYXJhfS8+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8U2VhcmNoT3JkZXJzU3BlY2lmaWMgc2V0RGF0ZT17c2V0RGF0ZX0vPlxyXG4gICAgICAgICAgPFNlYXJjaE9yZGVyc0N1c3RvbWl6ZSBzZXREYXRlPXtzZXREYXRlfS8+XHJcbiAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8L1BhZ2U+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbmFseXRpY3NMYXlvdXQ7XHJcbiIsImltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1NIT1BfSUQgPSBncWxgXHJcbiAgcXVlcnkge1xyXG4gICAgc2hvcCB7XHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENSRUFURV9ESVNDT1VOVCA9IGdxbGBcclxuICBtdXRhdGlvbiBkaXNjb3VudENvZGVCYXNpY0NyZWF0ZShcclxuICAgICRiYXNpY0NvZGVEaXNjb3VudDogRGlzY291bnRDb2RlQmFzaWNJbnB1dCFcclxuICApIHtcclxuICAgIGRpc2NvdW50Q29kZUJhc2ljQ3JlYXRlKGJhc2ljQ29kZURpc2NvdW50OiAkYmFzaWNDb2RlRGlzY291bnQpIHtcclxuICAgICAgY29kZURpc2NvdW50Tm9kZSB7XHJcbiAgICAgICAgaWRcclxuICAgICAgfVxyXG4gICAgICB1c2VyRXJyb3JzIHtcclxuICAgICAgICBjb2RlXHJcbiAgICAgICAgZmllbGRcclxuICAgICAgICBtZXNzYWdlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgREVMRVRFX1NDUklQVCA9IGdxbGBcclxuICBtdXRhdGlvbiBzY3JpcHRUYWdEZWxldGUoJGlkOiBJRCEpIHtcclxuICAgIHNjcmlwdFRhZ0RlbGV0ZShpZDogJGlkKSB7XHJcbiAgICAgIGRlbGV0ZWRTY3JpcHRUYWdJZFxyXG4gICAgICB1c2VyRXJyb3JzIHtcclxuICAgICAgICBmaWVsZFxyXG4gICAgICAgIG1lc3NhZ2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDUkVBVEVfU0NSSVBUID0gZ3FsYFxyXG4gIG11dGF0aW9uIHNjcmlwdFRhZ0NyZWF0ZSgkaW5wdXQ6IFNjcmlwdFRhZ0lucHV0ISkge1xyXG4gICAgc2NyaXB0VGFnQ3JlYXRlKGlucHV0OiAkaW5wdXQpIHtcclxuICAgICAgc2NyaXB0VGFnIHtcclxuICAgICAgICBpZFxyXG4gICAgICB9XHJcbiAgICAgIHVzZXJFcnJvcnMge1xyXG4gICAgICAgIGZpZWxkXHJcbiAgICAgICAgbWVzc2FnZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9PUkRFUlNfVVBTRUxMID0gZ3FsYFxyXG4gIHF1ZXJ5ICgkcXVlcnk6IFN0cmluZykge1xyXG4gICAgb3JkZXJzKGZpcnN0OiAxMDAsIHF1ZXJ5OiAkcXVlcnkpIHtcclxuICAgICAgZWRnZXMge1xyXG4gICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgdG90YWxQcmljZVNldCB7XHJcbiAgICAgICAgICAgIHByZXNlbnRtZW50TW9uZXkge1xyXG4gICAgICAgICAgICAgIGFtb3VudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9PUkRFUlNfVE9UQUwgPSBncWxgXHJcbiAgcXVlcnkgKCRxdWVyeTogU3RyaW5nKSB7XHJcbiAgICBvcmRlcnMoZmlyc3Q6IDEwMCwgcXVlcnk6ICRxdWVyeSkge1xyXG4gICAgICBlZGdlcyB7XHJcbiAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICB0b3RhbFByaWNlU2V0IHtcclxuICAgICAgICAgICAgcHJlc2VudG1lbnRNb25leSB7XHJcbiAgICAgICAgICAgICAgYW1vdW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ1JFQVRFX1JFQ1VSUklORyA9IGdxbGBcclxuICBtdXRhdGlvbiBhcHBTdWJzY3JpcHRpb25DcmVhdGUoXHJcbiAgICAkbmFtZTogU3RyaW5nIVxyXG4gICAgJGxpbmVJdGVtczogW0FwcFN1YnNjcmlwdGlvbkxpbmVJdGVtSW5wdXQhXSFcclxuICAgICRyZXR1cm5Vcmw6IFVSTCFcclxuICAgICR0cmlhbERheXM6IEludFxyXG4gICkge1xyXG4gICAgYXBwU3Vic2NyaXB0aW9uQ3JlYXRlKFxyXG4gICAgICBuYW1lOiAkbmFtZVxyXG4gICAgICBsaW5lSXRlbXM6ICRsaW5lSXRlbXNcclxuICAgICAgcmV0dXJuVXJsOiAkcmV0dXJuVXJsXHJcbiAgICAgIHRyaWFsRGF5czogJHRyaWFsRGF5c1xyXG4gICAgICB0ZXN0OiB0cnVlXHJcbiAgICApIHtcclxuICAgICAgYXBwU3Vic2NyaXB0aW9uIHtcclxuICAgICAgICBpZFxyXG4gICAgICB9XHJcbiAgICAgIGNvbmZpcm1hdGlvblVybFxyXG4gICAgICB1c2VyRXJyb3JzIHtcclxuICAgICAgICBmaWVsZFxyXG4gICAgICAgIG1lc3NhZ2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfUFJPRFVDVFNfQllfSUQgPSBncWxgXHJcbiAgcXVlcnkgZ2V0UHJvZHVjdHMoJGlkczogW0lEIV0hKSB7XHJcbiAgICBub2RlcyhpZHM6ICRpZHMpIHtcclxuICAgICAgLi4uIG9uIFByb2R1Y3Qge1xyXG4gICAgICAgIHRpdGxlXHJcbiAgICAgICAgaGFuZGxlXHJcbiAgICAgICAgZGVzY3JpcHRpb25IdG1sXHJcbiAgICAgICAgaWRcclxuICAgICAgICBpbWFnZXMoZmlyc3Q6IDEpIHtcclxuICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgb3JpZ2luYWxTcmNcclxuICAgICAgICAgICAgICBhbHRUZXh0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyaWFudHMoZmlyc3Q6IDEpIHtcclxuICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICBIVFRQX0FQSTogXCJodHRwczovL2M5MDQtMTE4LTE4NS02LTE4NS5uZ3Jvay1mcmVlLmFwcFwiLFxyXG4gIEV4dHJhY3RJZDogZnVuY3Rpb24gKHN0cikge1xyXG4gICAgdmFyIG1hdGNoZXMgPSBzdHIubWF0Y2goLyhcXGQrKS8pO1xyXG4gICAgaWYgKG1hdGNoZXMpIHJldHVybiBtYXRjaGVzWzBdO1xyXG4gIH0sXHJcbiAgQ29tYmluZUlkOiBmdW5jdGlvbiAoc3RyKSB7XHJcbiAgICB2YXIgc3RyMSA9IFwiZ2lkOi8vc2hvcGlmeS9TY3JpcHRUYWcvXCI7XHJcbiAgICBzdHIgPSBzdHIxLmNvbmNhdChzdHIpO1xyXG4gICAgcmV0dXJuIHN0cjtcclxuICB9LFxyXG4gIENvbWJpbmVQSUQ6IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgIHZhciBzdHIxID0gXCJnaWQ6Ly9zaG9waWZ5L1Byb2R1Y3QvXCI7XHJcbiAgICBzdHIgPSBzdHIxLmNvbmNhdChzdHIpO1xyXG4gICAgcmV0dXJuIHN0cjtcclxuICB9LFxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2hvcGlmeS9wb2xhcmlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtdGFnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFwb2xsb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9