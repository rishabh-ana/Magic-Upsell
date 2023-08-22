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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/design-layout.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/components/ThemeSetting.js":
/*!*******************************************!*\
  !*** ./client/components/ThemeSetting.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_AppStyle_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/AppStyle.css */ "./client/css/AppStyle.css");
/* harmony import */ var _css_AppStyle_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_AppStyle_css__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const config = __webpack_require__(/*! ../../server/config/httpConfig.js */ "./server/config/httpConfig.js");

function ThemeSetting(props) {
  const isInitialMount = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  const {
    0: themeColor,
    1: setThemeColor
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: fontColor,
    1: setFontColor
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: efontColor,
    1: setEfontColor
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: buttonColor,
    1: setButtonColor
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: headerColor,
    1: setHeaderColor
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: second,
    1: setSecond
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: minute,
    1: setMinute
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: checked,
    1: setChecked
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: variantType,
    1: setVariantType
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('radio');
  const {
    0: checkedRadio,
    1: setCheckedRadio
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('disabled');
  const {
    0: theme_title,
    1: setThemeTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: firstBtn,
    1: setFirstBtn
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: secondBtn,
    1: setSecondBtn
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: message,
    1: setMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: showToast,
    1: setToast
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const toggleToast = () => setToast(!showToast);

  const toastMarkup = showToast ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Toast"], {
    content: message,
    onDismiss: toggleToast,
    Diduration: 2500
  }) : null;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function getData() {
      const search_data = {
        search: props.valueID
      };
      await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(config.HTTP_API + '/store/search/theme', search_data).then(res => {
        setThemeColor(res.data[0].theme_color);
        setFontColor(res.data[0].theme_font_color);
        setEfontColor(res.data[0].theme_efont_color);
        setButtonColor(res.data[0].theme_button_color);
        setHeaderColor(res.data[0].theme_header_color);
        res.data[0].variant_type == 'dropdown' ? setCheckedRadio('optional') : setCheckedRadio('disabled');

        if (res.data[0].theme_title) {
          setThemeTitle(res.data[0].theme_title);
        } else {
          setThemeTitle('20% OFF Your Next Order!');
        }

        setFirstBtn(res.data[0].first_btn_text);
        setSecondBtn(res.data[0].second_btn_text);
        setMinute(res.data[0].minute);
        setSecond(res.data[0].second);
        setChecked(res.data[0].timer);
      });
    }

    async function fetchData() {
      if (isInitialMount.current && props) {
        isInitialMount.current = false;
        await getData();
      }
    }

    fetchData();
  });
  return __jsx("div", null, toastMarkup, __jsx("div", {
    style: {
      display: 'flex'
    }
  }, __jsx("div", {
    style: {
      width: '50%'
    }
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Upsell theme design",
    sectioned: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    value: theme_title,
    onChange: value => setThemeTitle(value),
    label: "Custom Title",
    type: "text"
  }), __jsx("div", {
    className: "flex-container"
  }, __jsx("div", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    id: "theme_color",
    placeholder: "color",
    value: themeColor,
    onChange: value => setThemeColor(value),
    label: "Theme color"
  })), __jsx("div", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    id: "header_color",
    placeholder: "color",
    value: headerColor,
    onChange: value => setHeaderColor(value),
    label: "Header color"
  }))), __jsx("div", {
    className: "flex-container"
  }, __jsx("div", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    id: "font_color",
    placeholder: "color",
    value: fontColor,
    onChange: value => setFontColor(value),
    label: "Font color"
  })), __jsx("div", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    id: "highlight_color",
    placeholder: "color",
    value: efontColor,
    onChange: value => setEfontColor(value),
    label: "Highlighted color"
  }))), __jsx("div", {
    className: "flex-container"
  }, __jsx("div", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    id: "button_color",
    placeholder: "color",
    value: buttonColor,
    onChange: value => setButtonColor(value),
    label: "Button color"
  }))), __jsx("div", {
    className: "flex-container"
  }, __jsx("div", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    id: "first_btn_text",
    placeholder: firstBtn,
    value: firstBtn,
    onChange: value => setFirstBtn(value),
    label: "First Button"
  })), __jsx("div", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    id: "second_btn_text",
    placeholder: secondBtn,
    value: secondBtn,
    onChange: value => setSecondBtn(value),
    label: "Second Button"
  }))), __jsx("div", {
    className: "flex-container"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["RadioButton"], {
    label: "Radio",
    checked: checkedRadio === 'disabled',
    id: "disabled",
    name: "accounts",
    onChange: value => {
      setCheckedRadio('disabled');
    }
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["RadioButton"], {
    label: "Drop Down",
    id: "optional",
    name: "accounts",
    checked: checkedRadio === 'optional',
    onChange: value => {
      setCheckedRadio('optional');
    }
  })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    id: "check_box",
    label: "Enable timer",
    checked: checked,
    onChange: value => setChecked(value)
  }), __jsx("div", {
    className: "flex-container"
  }, __jsx("div", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    id: "minute",
    disabled: !checked,
    placeholder: "3",
    value: minute,
    onChange: value => setMinute(value),
    label: "Minute",
    type: "number"
  })), __jsx("div", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    id: "second",
    disabled: !checked,
    placeholder: "30",
    value: second,
    onChange: value => setSecond(value),
    label: "Second",
    type: "number"
  }))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["ButtonGroup"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => {
      setThemeColor('#f47777');
      setHeaderColor('white');
      setFontColor('black');
      setEfontColor('#f74444');
      setButtonColor('#f74444');
      setChecked(true);
      setMinute(3);
      setSecond(30);
      setCheckedRadio('disabled');
      setThemeTitle('');
      setFirstBtn('No Thanks :(');
      setSecondBtn('Add To Cart');
    }
  }, "Reset to default"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    primary: true,
    onClick: async () => {
      checkedRadio == 'disabled' ? setVariantType('radio') : setVariantType('dropdown');
      const db_data = {
        theme_color: themeColor,
        theme_font_color: fontColor,
        theme_efont_color: efontColor,
        theme_header_color: headerColor,
        theme_button_color: buttonColor,
        first_btn_text: firstBtn,
        second_btn_text: secondBtn,
        timer: checked,
        minute: minute,
        second: second,
        variant_type: variantType,
        theme_title: theme_title
      };
      await axios__WEBPACK_IMPORTED_MODULE_2___default.a.put(config.HTTP_API + '/store/' + props.valueID, db_data).then(() => {
        setMessage('Theme applied successfully');
        toggleToast();
      });
    }
  }, "Apply theme")))))), __jsx("div", {
    className: "modelContent",
    style: {
      width: '50%'
    }
  }, __jsx("div", {
    className: "upsellHeader",
    style: {
      'backgroundColor': themeColor
    }
  }, checked == 1 ? __jsx("p", {
    className: "timer",
    style: {
      'color': headerColor
    }
  }, minute, ":", second) : null, theme_title ? __jsx("h1", {
    style: {
      'color': headerColor
    }
  }, theme_title) : __jsx("h1", {
    style: {
      'color': headerColor
    }
  }, __jsx("span", {
    className: "discount"
  }, "20% OFF"), " Your Next Order!")), __jsx("img", {
    className: "upsell-img",
    src: "https://cdn.shopify.com/s/files/1/0273/3332/8930/files/default.png?v=1578600042"
  }), __jsx("div", {
    className: "upsellInner"
  }, __jsx("p", {
    className: "upsell-title",
    style: {
      'color': fontColor
    }
  }, "Comfy T-Shirt"), __jsx("div", {
    className: "flex"
  }, __jsx("p", {
    className: "upsell-price",
    style: {
      'color': efontColor
    }
  }, "25.99"), __jsx("p", {
    className: "compare",
    style: {
      'color': fontColor
    }
  }, "59.99")), checkedRadio == 'disabled' ? __jsx("div", {
    className: "variants-dic"
  }, __jsx("li", {
    className: "variants-list"
  }, __jsx("button", {
    className: "variants-btn selected",
    style: {
      'color': efontColor,
      'borderColor': efontColor
    }
  }, "Pink")), __jsx("li", {
    className: "variants-list"
  }, __jsx("button", {
    className: "variants-btn",
    style: {
      'color': fontColor
    }
  }, "Blue")), __jsx("li", {
    className: "variants-list"
  }, __jsx("button", {
    className: "variants-btn",
    style: {
      'color': fontColor
    }
  }, "Yellow"))) : __jsx("div", {
    className: "variants-dic"
  }, __jsx("select", {
    className: "variants-list-drop",
    style: {
      'color': efontColor
    }
  }, __jsx("option", null, "Pink"), __jsx("option", null, "Blue"), __jsx("option", null, "Yellow"))), __jsx("div", {
    className: "buttonFlex"
  }, __jsx("button", {
    className: "change-next",
    style: {
      'color': fontColor
    }
  }, firstBtn), __jsx("button", {
    className: "add-to-cart",
    style: {
      'backgroundColor': buttonColor
    }
  }, secondBtn))))));
}

/* harmony default export */ __webpack_exports__["default"] = (ThemeSetting);

/***/ }),

/***/ "./client/css/AppStyle.css":
/*!*********************************!*\
  !*** ./client/css/AppStyle.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/design-layout.js":
/*!********************************!*\
  !*** ./pages/design-layout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _server_config_appBasicQuery_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../server/config/appBasicQuery.js */ "./server/config/appBasicQuery.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _client_components_ThemeSetting_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client/components/ThemeSetting.js */ "./client/components/ThemeSetting.js");
/* harmony import */ var _client_css_AppStyle_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../client/css/AppStyle.css */ "./client/css/AppStyle.css");
/* harmony import */ var _client_css_AppStyle_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_client_css_AppStyle_css__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const config = __webpack_require__(/*! ../server/config/httpConfig.js */ "./server/config/httpConfig.js");



function DesignLayout() {
  const isInit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  const {
    error,
    data
  } = Object(react_apollo__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(_server_config_appBasicQuery_js__WEBPACK_IMPORTED_MODULE_2__["GET_SHOP_ID"]);
  const {
    0: refresh,
    1: setRefresh
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: pending,
    1: setPending
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isInit.current && data) {
      setPending(false);
      isInit.current = false;
    }
  });
  return __jsx("div", null, !pending ? __jsx("div", null, __jsx("div", {
    className: "navigationMain"
  }, __jsx("div", null, __jsx("p", null, __jsx("a", {
    href: "/index"
  }, "Front Page"))), __jsx("div", null, __jsx("p", null, __jsx("a", {
    href: "/annotated-layout"
  }, "Setting"))), __jsx("div", null, __jsx("p", null, __jsx("a", {
    style: {
      'color': '#5c6ac4'
    },
    href: "/design-layout"
  }, "Design"))), __jsx("div", null, __jsx("p", null, __jsx("a", {
    href: "/analytics-layout"
  }, "Analytics"))), __jsx("div", null, __jsx("p", null, __jsx("a", {
    href: "/faq-layout"
  }, "FAQ")))), __jsx("div", {
    style: {
      padding: '2% 10%'
    }
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Frame"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, null, __jsx(_client_components_ThemeSetting_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    valueID: config.ExtractId(data.shop.id)
  })))))) : null);
}

/* harmony default export */ __webpack_exports__["default"] = (DesignLayout);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvVGhlbWVTZXR0aW5nLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2Rlc2lnbi1sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2NvbmZpZy9hcHBCYXNpY1F1ZXJ5LmpzIiwid2VicGFjazovLy8uL3NlcnZlci9jb25maWcvaHR0cENvbmZpZy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYXBvbGxvXCIiXSwibmFtZXMiOlsiY29uZmlnIiwicmVxdWlyZSIsIlRoZW1lU2V0dGluZyIsInByb3BzIiwiaXNJbml0aWFsTW91bnQiLCJ1c2VSZWYiLCJ0aGVtZUNvbG9yIiwic2V0VGhlbWVDb2xvciIsInVzZVN0YXRlIiwiZm9udENvbG9yIiwic2V0Rm9udENvbG9yIiwiZWZvbnRDb2xvciIsInNldEVmb250Q29sb3IiLCJidXR0b25Db2xvciIsInNldEJ1dHRvbkNvbG9yIiwiaGVhZGVyQ29sb3IiLCJzZXRIZWFkZXJDb2xvciIsInNlY29uZCIsInNldFNlY29uZCIsIm1pbnV0ZSIsInNldE1pbnV0ZSIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwidmFyaWFudFR5cGUiLCJzZXRWYXJpYW50VHlwZSIsImNoZWNrZWRSYWRpbyIsInNldENoZWNrZWRSYWRpbyIsInRoZW1lX3RpdGxlIiwic2V0VGhlbWVUaXRsZSIsImZpcnN0QnRuIiwic2V0Rmlyc3RCdG4iLCJzZWNvbmRCdG4iLCJzZXRTZWNvbmRCdG4iLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInNob3dUb2FzdCIsInNldFRvYXN0IiwidG9nZ2xlVG9hc3QiLCJ0b2FzdE1hcmt1cCIsInVzZUVmZmVjdCIsImdldERhdGEiLCJzZWFyY2hfZGF0YSIsInNlYXJjaCIsInZhbHVlSUQiLCJheGlvcyIsInBvc3QiLCJIVFRQX0FQSSIsInRoZW4iLCJyZXMiLCJkYXRhIiwidGhlbWVfY29sb3IiLCJ0aGVtZV9mb250X2NvbG9yIiwidGhlbWVfZWZvbnRfY29sb3IiLCJ0aGVtZV9idXR0b25fY29sb3IiLCJ0aGVtZV9oZWFkZXJfY29sb3IiLCJ2YXJpYW50X3R5cGUiLCJmaXJzdF9idG5fdGV4dCIsInNlY29uZF9idG5fdGV4dCIsInRpbWVyIiwiZmV0Y2hEYXRhIiwiY3VycmVudCIsImRpc3BsYXkiLCJ3aWR0aCIsInZhbHVlIiwiZGJfZGF0YSIsInB1dCIsIkRlc2lnbkxheW91dCIsImlzSW5pdCIsImVycm9yIiwidXNlUXVlcnkiLCJHRVRfU0hPUF9JRCIsInJlZnJlc2giLCJzZXRSZWZyZXNoIiwicGVuZGluZyIsInNldFBlbmRpbmciLCJwYWRkaW5nIiwiRXh0cmFjdElkIiwic2hvcCIsImlkIiwiZ3FsIiwiQ1JFQVRFX0RJU0NPVU5UIiwiREVMRVRFX1NDUklQVCIsIkNSRUFURV9TQ1JJUFQiLCJTRUFSQ0hfT1JERVJTX1VQU0VMTCIsIlNFQVJDSF9PUkRFUlNfVE9UQUwiLCJDUkVBVEVfUkVDVVJSSU5HIiwiR0VUX1BST0RVQ1RTX0JZX0lEIiwibW9kdWxlIiwiZXhwb3J0cyIsInN0ciIsIm1hdGNoZXMiLCJtYXRjaCIsIkNvbWJpbmVJZCIsInN0cjEiLCJjb25jYXQiLCJDb21iaW5lUElEIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7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Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEseUMiLCJmaWxlIjoicGFnZXMvZGVzaWduLWxheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvZGVzaWduLWxheW91dC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIEZvcm0sXHJcbiAgRm9ybUxheW91dCxcclxuICBUZXh0RmllbGQsXHJcbiAgVG9hc3QsXHJcbiAgQnV0dG9uR3JvdXAsXHJcbiAgQnV0dG9uLFxyXG4gIENoZWNrYm94LFxyXG4gIFJhZGlvQnV0dG9uLFxyXG4gIENhcmRcclxufSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0ICcuLi9jc3MvQXBwU3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoJy4uLy4uL3NlcnZlci9jb25maWcvaHR0cENvbmZpZy5qcycpO1xyXG5cclxuZnVuY3Rpb24gVGhlbWVTZXR0aW5nKHByb3BzKSB7XHJcbiAgY29uc3QgaXNJbml0aWFsTW91bnQgPSB1c2VSZWYodHJ1ZSk7XHJcbiAgY29uc3QgW3RoZW1lQ29sb3IsIHNldFRoZW1lQ29sb3JdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbZm9udENvbG9yLCBzZXRGb250Q29sb3JdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbZWZvbnRDb2xvciwgc2V0RWZvbnRDb2xvcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtidXR0b25Db2xvciwgc2V0QnV0dG9uQ29sb3JdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbaGVhZGVyQ29sb3IsIHNldEhlYWRlckNvbG9yXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3NlY29uZCwgc2V0U2Vjb25kXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW21pbnV0ZSwgc2V0TWludXRlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt2YXJpYW50VHlwZSwgc2V0VmFyaWFudFR5cGVdID0gdXNlU3RhdGUoJ3JhZGlvJyk7XHJcbiAgY29uc3QgW2NoZWNrZWRSYWRpbywgc2V0Q2hlY2tlZFJhZGlvXSA9IHVzZVN0YXRlKCdkaXNhYmxlZCcpO1xyXG4gIGNvbnN0IFt0aGVtZV90aXRsZSwgc2V0VGhlbWVUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2ZpcnN0QnRuLCBzZXRGaXJzdEJ0bl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtzZWNvbmRCdG4sIHNldFNlY29uZEJ0bl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3Nob3dUb2FzdCwgc2V0VG9hc3RdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHRvZ2dsZVRvYXN0ID0gKCkgPT4gc2V0VG9hc3QoIXNob3dUb2FzdCk7XHJcbiAgY29uc3QgdG9hc3RNYXJrdXAgPSBzaG93VG9hc3QgPyAoXHJcbiAgICA8VG9hc3QgY29udGVudD17bWVzc2FnZX0gb25EaXNtaXNzPXt0b2dnbGVUb2FzdH0gRGlkdXJhdGlvbj17MjUwMH0gLz5cclxuICApIDogbnVsbDtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XHJcbiAgICAgIGNvbnN0IHNlYXJjaF9kYXRhID0geyBzZWFyY2g6IHByb3BzLnZhbHVlSUQgfTtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdChjb25maWcuSFRUUF9BUEkgKyAnL3N0b3JlL3NlYXJjaC90aGVtZScsIHNlYXJjaF9kYXRhKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBzZXRUaGVtZUNvbG9yKHJlcy5kYXRhWzBdLnRoZW1lX2NvbG9yKTtcclxuICAgICAgICBzZXRGb250Q29sb3IocmVzLmRhdGFbMF0udGhlbWVfZm9udF9jb2xvcik7XHJcbiAgICAgICAgc2V0RWZvbnRDb2xvcihyZXMuZGF0YVswXS50aGVtZV9lZm9udF9jb2xvcik7XHJcbiAgICAgICAgc2V0QnV0dG9uQ29sb3IocmVzLmRhdGFbMF0udGhlbWVfYnV0dG9uX2NvbG9yKTtcclxuICAgICAgICBzZXRIZWFkZXJDb2xvcihyZXMuZGF0YVswXS50aGVtZV9oZWFkZXJfY29sb3IpO1xyXG4gICAgICAgIHJlcy5kYXRhWzBdLnZhcmlhbnRfdHlwZSA9PSAnZHJvcGRvd24nID8gc2V0Q2hlY2tlZFJhZGlvKCdvcHRpb25hbCcpIDogc2V0Q2hlY2tlZFJhZGlvKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgIGlmIChyZXMuZGF0YVswXS50aGVtZV90aXRsZSkge1xyXG4gICAgICAgICAgc2V0VGhlbWVUaXRsZShyZXMuZGF0YVswXS50aGVtZV90aXRsZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNldFRoZW1lVGl0bGUoJzIwJSBPRkYgWW91ciBOZXh0IE9yZGVyIScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRGaXJzdEJ0bihyZXMuZGF0YVswXS5maXJzdF9idG5fdGV4dCk7XHJcbiAgICAgICAgc2V0U2Vjb25kQnRuKHJlcy5kYXRhWzBdLnNlY29uZF9idG5fdGV4dCk7XHJcbiAgICAgICAgc2V0TWludXRlKHJlcy5kYXRhWzBdLm1pbnV0ZSk7XHJcbiAgICAgICAgc2V0U2Vjb25kKHJlcy5kYXRhWzBdLnNlY29uZCk7XHJcbiAgICAgICAgc2V0Q2hlY2tlZChyZXMuZGF0YVswXS50aW1lcik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xyXG4gICAgICBpZiAoaXNJbml0aWFsTW91bnQuY3VycmVudCAmJiBwcm9wcykge1xyXG4gICAgICAgIGlzSW5pdGlhbE1vdW50LmN1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgICBhd2FpdCBnZXREYXRhKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoRGF0YSgpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHt0b2FzdE1hcmt1cH1cclxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzUwJScgfX0+XHJcbiAgICAgICAgICA8Q2FyZCB0aXRsZT1cIlVwc2VsbCB0aGVtZSBkZXNpZ25cIiBzZWN0aW9uZWQ+XHJcbiAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhlbWVfdGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXRUaGVtZVRpdGxlKHZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDdXN0b20gVGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwidGhlbWVfY29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJjb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhlbWVDb2xvcn1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXRUaGVtZUNvbG9yKHZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVGhlbWUgY29sb3JcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cImhlYWRlcl9jb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImNvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtoZWFkZXJDb2xvcn1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXRIZWFkZXJDb2xvcih2YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkhlYWRlciBjb2xvclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmb250X2NvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiY29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZvbnRDb2xvcn1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXRGb250Q29sb3IodmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJGb250IGNvbG9yXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJoaWdobGlnaHRfY29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJjb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZWZvbnRDb2xvcn1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXRFZm9udENvbG9yKHZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiSGlnaGxpZ2h0ZWQgY29sb3JcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYnV0dG9uX2NvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiY29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2J1dHRvbkNvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHNldEJ1dHRvbkNvbG9yKHZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQnV0dG9uIGNvbG9yXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cImZpcnN0X2J0bl90ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtmaXJzdEJ0bn1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmaXJzdEJ0bn1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXRGaXJzdEJ0bih2YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkZpcnN0IEJ1dHRvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2Vjb25kX2J0bl90ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtzZWNvbmRCdG59XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2Vjb25kQnRufVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHNldFNlY29uZEJ0bih2YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNlY29uZCBCdXR0b25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPFJhZGlvQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZFJhZGlvID09PSAnZGlzYWJsZWQnfVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhY2NvdW50c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge3NldENoZWNrZWRSYWRpbygnZGlzYWJsZWQnKX19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxSYWRpb0J1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRHJvcCBEb3duXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cIm9wdGlvbmFsXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWNjb3VudHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWRSYWRpbyA9PT0gJ29wdGlvbmFsJ31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7c2V0Q2hlY2tlZFJhZGlvKCdvcHRpb25hbCcpfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiY2hlY2tfYm94XCJcclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbmFibGUgdGltZXJcIlxyXG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRDaGVja2VkKHZhbHVlKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJtaW51dGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFjaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXttaW51dGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gc2V0TWludXRlKHZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTWludXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2Vjb25kXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshY2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMzBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlY29uZH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXRTZWNvbmQodmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTZWNvbmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFRoZW1lQ29sb3IoJyNmNDc3NzcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldEhlYWRlckNvbG9yKCd3aGl0ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0Rm9udENvbG9yKCdibGFjaycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0RWZvbnRDb2xvcignI2Y3NDQ0NCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0QnV0dG9uQ29sb3IoJyNmNzQ0NDQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldENoZWNrZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRNaW51dGUoMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTZWNvbmQoMzApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0Q2hlY2tlZFJhZGlvKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0VGhlbWVUaXRsZSgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRGaXJzdEJ0bignTm8gVGhhbmtzIDooJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTZWNvbmRCdG4oJ0FkZCBUbyBDYXJ0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX0+UmVzZXQgdG8gZGVmYXVsdDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWRSYWRpbyA9PSAnZGlzYWJsZWQnID8gc2V0VmFyaWFudFR5cGUoJ3JhZGlvJykgOiBzZXRWYXJpYW50VHlwZSgnZHJvcGRvd24nKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRiX2RhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lX2NvbG9yOiB0aGVtZUNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVtZV9mb250X2NvbG9yOiBmb250Q29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lX2Vmb250X2NvbG9yOiBlZm9udENvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVtZV9oZWFkZXJfY29sb3I6IGhlYWRlckNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVtZV9idXR0b25fY29sb3I6IGJ1dHRvbkNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdF9idG5fdGV4dDogZmlyc3RCdG4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZF9idG5fdGV4dDogc2Vjb25kQnRuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lcjogY2hlY2tlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlOiBtaW51dGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZDogc2Vjb25kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50X3R5cGU6IHZhcmlhbnRUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVtZV90aXRsZTogdGhlbWVfdGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBheGlvcy5wdXQoY29uZmlnLkhUVFBfQVBJICsgJy9zdG9yZS8nICsgcHJvcHMudmFsdWVJRCwgZGJfZGF0YSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE1lc3NhZ2UoJ1RoZW1lIGFwcGxpZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVRvYXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH19PkFwcGx5IHRoZW1lPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUxheW91dD5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kZWxDb250ZW50XCIgc3R5bGU9e3sgd2lkdGg6ICc1MCUnIH19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cHNlbGxIZWFkZXJcIiBzdHlsZT17eyAnYmFja2dyb3VuZENvbG9yJzogdGhlbWVDb2xvciB9fT5cclxuICAgICAgICAgICAge2NoZWNrZWQgPT0gMSA/IChcclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aW1lclwiIHN0eWxlPXt7ICdjb2xvcic6IGhlYWRlckNvbG9yIH19PnttaW51dGV9OntzZWNvbmR9PC9wPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge3RoZW1lX3RpdGxlID9cclxuICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgJ2NvbG9yJzogaGVhZGVyQ29sb3IgfX0+e3RoZW1lX3RpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgIDxoMSBzdHlsZT17eyAnY29sb3InOiBoZWFkZXJDb2xvciB9fT48c3BhbiBjbGFzc05hbWU9XCJkaXNjb3VudFwiPjIwJSBPRkY8L3NwYW4+IFlvdXIgTmV4dCBPcmRlciE8L2gxPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidXBzZWxsLWltZ1wiIHNyYz1cImh0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8wMjczLzMzMzIvODkzMC9maWxlcy9kZWZhdWx0LnBuZz92PTE1Nzg2MDAwNDJcIiAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cHNlbGxJbm5lclwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ1cHNlbGwtdGl0bGVcIiBzdHlsZT17eyAnY29sb3InOiBmb250Q29sb3IgfX0+Q29tZnkgVC1TaGlydDwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidXBzZWxsLXByaWNlXCIgc3R5bGU9e3sgJ2NvbG9yJzogZWZvbnRDb2xvciB9fT4yNS45OTwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb21wYXJlXCIgc3R5bGU9e3sgJ2NvbG9yJzogZm9udENvbG9yIH19PjU5Ljk5PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2NoZWNrZWRSYWRpbyA9PSAnZGlzYWJsZWQnID8gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFyaWFudHMtZGljXCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidmFyaWFudHMtbGlzdFwiPjxidXR0b24gY2xhc3NOYW1lPVwidmFyaWFudHMtYnRuIHNlbGVjdGVkXCIgc3R5bGU9e3sgJ2NvbG9yJzogZWZvbnRDb2xvciwgJ2JvcmRlckNvbG9yJzogZWZvbnRDb2xvciB9fT5QaW5rPC9idXR0b24+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ2YXJpYW50cy1saXN0XCI+PGJ1dHRvbiBjbGFzc05hbWU9XCJ2YXJpYW50cy1idG5cIiBzdHlsZT17eyAnY29sb3InOiBmb250Q29sb3IgfX0+Qmx1ZTwvYnV0dG9uPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidmFyaWFudHMtbGlzdFwiPjxidXR0b24gY2xhc3NOYW1lPVwidmFyaWFudHMtYnRuXCIgc3R5bGU9e3sgJ2NvbG9yJzogZm9udENvbG9yIH19PlllbGxvdzwvYnV0dG9uPjwvbGk+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YXJpYW50cy1kaWNcIj5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwidmFyaWFudHMtbGlzdC1kcm9wXCIgc3R5bGU9e3sgJ2NvbG9yJzogZWZvbnRDb2xvciB9fT5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj5QaW5rPC9vcHRpb24+PG9wdGlvbj5CbHVlPC9vcHRpb24+PG9wdGlvbj5ZZWxsb3c8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbkZsZXhcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNoYW5nZS1uZXh0XCIgc3R5bGU9e3sgJ2NvbG9yJzogZm9udENvbG9yIH19PntmaXJzdEJ0bn08L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFkZC10by1jYXJ0XCIgc3R5bGU9e3sgJ2JhY2tncm91bmRDb2xvcic6IGJ1dHRvbkNvbG9yIH19PntzZWNvbmRCdG59PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGhlbWVTZXR0aW5nO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBDYXJkLFxyXG4gIExheW91dCxcclxuICBQYWdlLFxyXG4gIEZyYW1lLFxyXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgeyBHRVRfU0hPUF9JRCB9IGZyb20gJy4uL3NlcnZlci9jb25maWcvYXBwQmFzaWNRdWVyeS5qcyc7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtYXBvbGxvJztcclxuaW1wb3J0IFRoZW1lU2V0dGluZyBmcm9tICcuLi9jbGllbnQvY29tcG9uZW50cy9UaGVtZVNldHRpbmcuanMnO1xyXG5jb25zdCBjb25maWcgPSByZXF1aXJlKCcuLi9zZXJ2ZXIvY29uZmlnL2h0dHBDb25maWcuanMnKTtcclxuaW1wb3J0ICcuLi9jbGllbnQvY3NzL0FwcFN0eWxlLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBEZXNpZ25MYXlvdXQoKSB7XHJcbiAgY29uc3QgaXNJbml0ID0gdXNlUmVmKHRydWUpO1xyXG4gIGNvbnN0IHsgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9TSE9QX0lEKTtcclxuICBjb25zdCBbcmVmcmVzaCwgc2V0UmVmcmVzaF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbmNvbnN0IFtwZW5kaW5nLCBzZXRQZW5kaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaXNJbml0LmN1cnJlbnQgJiYgZGF0YSkge1xyXG4gICAgICBzZXRQZW5kaW5nKGZhbHNlKTtcclxuICAgICAgaXNJbml0LmN1cnJlbnQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9KVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHshcGVuZGluZyA/XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvbk1haW5cIj5cclxuICAgICAgICAgICAgPGRpdj48cD48YSBocmVmPVwiL2luZGV4XCI+RnJvbnQgUGFnZTwvYT48L3A+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+PHA+PGEgaHJlZj1cIi9hbm5vdGF0ZWQtbGF5b3V0XCI+U2V0dGluZzwvYT48L3A+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+PHA+PGEgc3R5bGU9e3sgJ2NvbG9yJzogJyM1YzZhYzQnIH19IGhyZWY9XCIvZGVzaWduLWxheW91dFwiPkRlc2lnbjwvYT48L3A+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+PHA+PGEgaHJlZj1cIi9hbmFseXRpY3MtbGF5b3V0XCI+QW5hbHl0aWNzPC9hPjwvcD48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj48cD48YSBocmVmPVwiL2ZhcS1sYXlvdXRcIj5GQVE8L2E+PC9wPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcyJSAxMCUnIH19PlxyXG4gICAgICAgICAgICA8RnJhbWU+XHJcbiAgICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPFRoZW1lU2V0dGluZyB2YWx1ZUlEPXtjb25maWcuRXh0cmFjdElkKGRhdGEuc2hvcC5pZCl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICA8L0ZyYW1lPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgOlxyXG4gICAgICAgIG51bGxcclxuICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVzaWduTGF5b3V0O1xyXG4iLCJpbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9TSE9QX0lEID0gZ3FsYFxyXG4gIHF1ZXJ5IHtcclxuICAgIHNob3Age1xyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDUkVBVEVfRElTQ09VTlQgPSBncWxgXHJcbiAgbXV0YXRpb24gZGlzY291bnRDb2RlQmFzaWNDcmVhdGUoXHJcbiAgICAkYmFzaWNDb2RlRGlzY291bnQ6IERpc2NvdW50Q29kZUJhc2ljSW5wdXQhXHJcbiAgKSB7XHJcbiAgICBkaXNjb3VudENvZGVCYXNpY0NyZWF0ZShiYXNpY0NvZGVEaXNjb3VudDogJGJhc2ljQ29kZURpc2NvdW50KSB7XHJcbiAgICAgIGNvZGVEaXNjb3VudE5vZGUge1xyXG4gICAgICAgIGlkXHJcbiAgICAgIH1cclxuICAgICAgdXNlckVycm9ycyB7XHJcbiAgICAgICAgY29kZVxyXG4gICAgICAgIGZpZWxkXHJcbiAgICAgICAgbWVzc2FnZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFTEVURV9TQ1JJUFQgPSBncWxgXHJcbiAgbXV0YXRpb24gc2NyaXB0VGFnRGVsZXRlKCRpZDogSUQhKSB7XHJcbiAgICBzY3JpcHRUYWdEZWxldGUoaWQ6ICRpZCkge1xyXG4gICAgICBkZWxldGVkU2NyaXB0VGFnSWRcclxuICAgICAgdXNlckVycm9ycyB7XHJcbiAgICAgICAgZmllbGRcclxuICAgICAgICBtZXNzYWdlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ1JFQVRFX1NDUklQVCA9IGdxbGBcclxuICBtdXRhdGlvbiBzY3JpcHRUYWdDcmVhdGUoJGlucHV0OiBTY3JpcHRUYWdJbnB1dCEpIHtcclxuICAgIHNjcmlwdFRhZ0NyZWF0ZShpbnB1dDogJGlucHV0KSB7XHJcbiAgICAgIHNjcmlwdFRhZyB7XHJcbiAgICAgICAgaWRcclxuICAgICAgfVxyXG4gICAgICB1c2VyRXJyb3JzIHtcclxuICAgICAgICBmaWVsZFxyXG4gICAgICAgIG1lc3NhZ2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfT1JERVJTX1VQU0VMTCA9IGdxbGBcclxuICBxdWVyeSAoJHF1ZXJ5OiBTdHJpbmcpIHtcclxuICAgIG9yZGVycyhmaXJzdDogMTAwLCBxdWVyeTogJHF1ZXJ5KSB7XHJcbiAgICAgIGVkZ2VzIHtcclxuICAgICAgICBub2RlIHtcclxuICAgICAgICAgIHRvdGFsUHJpY2VTZXQge1xyXG4gICAgICAgICAgICBwcmVzZW50bWVudE1vbmV5IHtcclxuICAgICAgICAgICAgICBhbW91bnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfT1JERVJTX1RPVEFMID0gZ3FsYFxyXG4gIHF1ZXJ5ICgkcXVlcnk6IFN0cmluZykge1xyXG4gICAgb3JkZXJzKGZpcnN0OiAxMDAsIHF1ZXJ5OiAkcXVlcnkpIHtcclxuICAgICAgZWRnZXMge1xyXG4gICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgdG90YWxQcmljZVNldCB7XHJcbiAgICAgICAgICAgIHByZXNlbnRtZW50TW9uZXkge1xyXG4gICAgICAgICAgICAgIGFtb3VudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENSRUFURV9SRUNVUlJJTkcgPSBncWxgXHJcbiAgbXV0YXRpb24gYXBwU3Vic2NyaXB0aW9uQ3JlYXRlKFxyXG4gICAgJG5hbWU6IFN0cmluZyFcclxuICAgICRsaW5lSXRlbXM6IFtBcHBTdWJzY3JpcHRpb25MaW5lSXRlbUlucHV0IV0hXHJcbiAgICAkcmV0dXJuVXJsOiBVUkwhXHJcbiAgICAkdHJpYWxEYXlzOiBJbnRcclxuICApIHtcclxuICAgIGFwcFN1YnNjcmlwdGlvbkNyZWF0ZShcclxuICAgICAgbmFtZTogJG5hbWVcclxuICAgICAgbGluZUl0ZW1zOiAkbGluZUl0ZW1zXHJcbiAgICAgIHJldHVyblVybDogJHJldHVyblVybFxyXG4gICAgICB0cmlhbERheXM6ICR0cmlhbERheXNcclxuICAgICAgdGVzdDogdHJ1ZVxyXG4gICAgKSB7XHJcbiAgICAgIGFwcFN1YnNjcmlwdGlvbiB7XHJcbiAgICAgICAgaWRcclxuICAgICAgfVxyXG4gICAgICBjb25maXJtYXRpb25VcmxcclxuICAgICAgdXNlckVycm9ycyB7XHJcbiAgICAgICAgZmllbGRcclxuICAgICAgICBtZXNzYWdlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1BST0RVQ1RTX0JZX0lEID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldFByb2R1Y3RzKCRpZHM6IFtJRCFdISkge1xyXG4gICAgbm9kZXMoaWRzOiAkaWRzKSB7XHJcbiAgICAgIC4uLiBvbiBQcm9kdWN0IHtcclxuICAgICAgICB0aXRsZVxyXG4gICAgICAgIGhhbmRsZVxyXG4gICAgICAgIGRlc2NyaXB0aW9uSHRtbFxyXG4gICAgICAgIGlkXHJcbiAgICAgICAgaW1hZ2VzKGZpcnN0OiAxKSB7XHJcbiAgICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgIG9yaWdpbmFsU3JjXHJcbiAgICAgICAgICAgICAgYWx0VGV4dFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhcmlhbnRzKGZpcnN0OiAxKSB7XHJcbiAgICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgSFRUUF9BUEk6IFwiaHR0cHM6Ly9jOTA0LTExOC0xODUtNi0xODUubmdyb2stZnJlZS5hcHBcIixcclxuICBFeHRyYWN0SWQ6IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgIHZhciBtYXRjaGVzID0gc3RyLm1hdGNoKC8oXFxkKykvKTtcclxuICAgIGlmIChtYXRjaGVzKSByZXR1cm4gbWF0Y2hlc1swXTtcclxuICB9LFxyXG4gIENvbWJpbmVJZDogZnVuY3Rpb24gKHN0cikge1xyXG4gICAgdmFyIHN0cjEgPSBcImdpZDovL3Nob3BpZnkvU2NyaXB0VGFnL1wiO1xyXG4gICAgc3RyID0gc3RyMS5jb25jYXQoc3RyKTtcclxuICAgIHJldHVybiBzdHI7XHJcbiAgfSxcclxuICBDb21iaW5lUElEOiBmdW5jdGlvbiAoc3RyKSB7XHJcbiAgICB2YXIgc3RyMSA9IFwiZ2lkOi8vc2hvcGlmeS9Qcm9kdWN0L1wiO1xyXG4gICAgc3RyID0gc3RyMS5jb25jYXQoc3RyKTtcclxuICAgIHJldHVybiBzdHI7XHJcbiAgfSxcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hcG9sbG9cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==