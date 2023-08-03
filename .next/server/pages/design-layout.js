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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvVGhlbWVTZXR0aW5nLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2Rlc2lnbi1sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2NvbmZpZy9hcHBCYXNpY1F1ZXJ5LmpzIiwid2VicGFjazovLy8uL3NlcnZlci9jb25maWcvaHR0cENvbmZpZy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYXBvbGxvXCIiXSwibmFtZXMiOlsiY29uZmlnIiwicmVxdWlyZSIsIlRoZW1lU2V0dGluZyIsInByb3BzIiwiaXNJbml0aWFsTW91bnQiLCJ1c2VSZWYiLCJ0aGVtZUNvbG9yIiwic2V0VGhlbWVDb2xvciIsInVzZVN0YXRlIiwiZm9udENvbG9yIiwic2V0Rm9udENvbG9yIiwiZWZvbnRDb2xvciIsInNldEVmb250Q29sb3IiLCJidXR0b25Db2xvciIsInNldEJ1dHRvbkNvbG9yIiwiaGVhZGVyQ29sb3IiLCJzZXRIZWFkZXJDb2xvciIsInNlY29uZCIsInNldFNlY29uZCIsIm1pbnV0ZSIsInNldE1pbnV0ZSIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwidmFyaWFudFR5cGUiLCJzZXRWYXJpYW50VHlwZSIsImNoZWNrZWRSYWRpbyIsInNldENoZWNrZWRSYWRpbyIsInRoZW1lX3RpdGxlIiwic2V0VGhlbWVUaXRsZSIsImZpcnN0QnRuIiwic2V0Rmlyc3RCdG4iLCJzZWNvbmRCdG4iLCJzZXRTZWNvbmRCdG4iLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInNob3dUb2FzdCIsInNldFRvYXN0IiwidG9nZ2xlVG9hc3QiLCJ0b2FzdE1hcmt1cCIsInVzZUVmZmVjdCIsImdldERhdGEiLCJzZWFyY2hfZGF0YSIsInNlYXJjaCIsInZhbHVlSUQiLCJheGlvcyIsInBvc3QiLCJIVFRQX0FQSSIsInRoZW4iLCJyZXMiLCJkYXRhIiwidGhlbWVfY29sb3IiLCJ0aGVtZV9mb250X2NvbG9yIiwidGhlbWVfZWZvbnRfY29sb3IiLCJ0aGVtZV9idXR0b25fY29sb3IiLCJ0aGVtZV9oZWFkZXJfY29sb3IiLCJ2YXJpYW50X3R5cGUiLCJmaXJzdF9idG5fdGV4dCIsInNlY29uZF9idG5fdGV4dCIsInRpbWVyIiwiZmV0Y2hEYXRhIiwiY3VycmVudCIsImRpc3BsYXkiLCJ3aWR0aCIsInZhbHVlIiwiZGJfZGF0YSIsInB1dCIsIkRlc2lnbkxheW91dCIsImlzSW5pdCIsImVycm9yIiwidXNlUXVlcnkiLCJHRVRfU0hPUF9JRCIsInJlZnJlc2giLCJzZXRSZWZyZXNoIiwicGVuZGluZyIsInNldFBlbmRpbmciLCJwYWRkaW5nIiwiRXh0cmFjdElkIiwic2hvcCIsImlkIiwiZ3FsIiwiQ1JFQVRFX0RJU0NPVU5UIiwiREVMRVRFX1NDUklQVCIsIkNSRUFURV9TQ1JJUFQiLCJTRUFSQ0hfT1JERVJTX1VQU0VMTCIsIlNFQVJDSF9PUkRFUlNfVE9UQUwiLCJDUkVBVEVfUkVDVVJSSU5HIiwiR0VUX1BST0RVQ1RTX0JZX0lEIiwibW9kdWxlIiwiZXhwb3J0cyIsInN0ciIsIm1hdGNoZXMiLCJtYXRjaCIsIkNvbWJpbmVJZCIsInN0cjEiLCJjb25jYXQiLCJDb21iaW5lUElEIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBV0E7QUFDQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsd0VBQUQsQ0FBdEI7O0FBRUEsU0FBU0MsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFDM0IsUUFBTUMsY0FBYyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBN0I7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJDLHNEQUFRLEVBQTVDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCRixzREFBUSxFQUExQztBQUNBLFFBQU07QUFBQSxPQUFDRyxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE4Qkosc0RBQVEsRUFBNUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0NOLHNEQUFRLEVBQTlDO0FBQ0EsUUFBTTtBQUFBLE9BQUNPLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDUixzREFBUSxFQUE5QztBQUNBLFFBQU07QUFBQSxPQUFDUyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQlYsc0RBQVEsRUFBcEM7QUFDQSxRQUFNO0FBQUEsT0FBQ1csTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JaLHNEQUFRLEVBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNhLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCZCxzREFBUSxDQUFDLEtBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ2UsV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0NoQixzREFBUSxDQUFDLE9BQUQsQ0FBOUM7QUFDQSxRQUFNO0FBQUEsT0FBQ2lCLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWtDbEIsc0RBQVEsQ0FBQyxVQUFELENBQWhEO0FBQ0EsUUFBTTtBQUFBLE9BQUNtQixXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUErQnBCLHNEQUFRLENBQUMsRUFBRCxDQUE3QztBQUNBLFFBQU07QUFBQSxPQUFDcUIsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJ0QixzREFBUSxFQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDdUIsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJ4QixzREFBUSxFQUExQztBQUNBLFFBQU07QUFBQSxPQUFDeUIsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0IxQixzREFBUSxFQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDMkIsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBd0I1QixzREFBUSxDQUFDLEtBQUQsQ0FBdEM7O0FBQ0EsUUFBTTZCLFdBQVcsR0FBRyxNQUFNRCxRQUFRLENBQUMsQ0FBQ0QsU0FBRixDQUFsQzs7QUFDQSxRQUFNRyxXQUFXLEdBQUdILFNBQVMsR0FDM0IsTUFBQyxzREFBRDtBQUFPLFdBQU8sRUFBRUYsT0FBaEI7QUFBeUIsYUFBUyxFQUFFSSxXQUFwQztBQUFpRCxjQUFVLEVBQUU7QUFBN0QsSUFEMkIsR0FFekIsSUFGSjtBQUlBRSx5REFBUyxDQUFDLE1BQU07QUFDZCxtQkFBZUMsT0FBZixHQUF5QjtBQUN2QixZQUFNQyxXQUFXLEdBQUc7QUFBRUMsY0FBTSxFQUFFdkMsS0FBSyxDQUFDd0M7QUFBaEIsT0FBcEI7QUFDQSxZQUFNQyw0Q0FBSyxDQUFDQyxJQUFOLENBQVc3QyxNQUFNLENBQUM4QyxRQUFQLEdBQWtCLHFCQUE3QixFQUFvREwsV0FBcEQsRUFBaUVNLElBQWpFLENBQXVFQyxHQUFELElBQVM7QUFDbkZ6QyxxQkFBYSxDQUFDeUMsR0FBRyxDQUFDQyxJQUFKLENBQVMsQ0FBVCxFQUFZQyxXQUFiLENBQWI7QUFDQXhDLG9CQUFZLENBQUNzQyxHQUFHLENBQUNDLElBQUosQ0FBUyxDQUFULEVBQVlFLGdCQUFiLENBQVo7QUFDQXZDLHFCQUFhLENBQUNvQyxHQUFHLENBQUNDLElBQUosQ0FBUyxDQUFULEVBQVlHLGlCQUFiLENBQWI7QUFDQXRDLHNCQUFjLENBQUNrQyxHQUFHLENBQUNDLElBQUosQ0FBUyxDQUFULEVBQVlJLGtCQUFiLENBQWQ7QUFDQXJDLHNCQUFjLENBQUNnQyxHQUFHLENBQUNDLElBQUosQ0FBUyxDQUFULEVBQVlLLGtCQUFiLENBQWQ7QUFDQU4sV0FBRyxDQUFDQyxJQUFKLENBQVMsQ0FBVCxFQUFZTSxZQUFaLElBQTRCLFVBQTVCLEdBQXlDN0IsZUFBZSxDQUFDLFVBQUQsQ0FBeEQsR0FBdUVBLGVBQWUsQ0FBQyxVQUFELENBQXRGOztBQUNBLFlBQUlzQixHQUFHLENBQUNDLElBQUosQ0FBUyxDQUFULEVBQVl0QixXQUFoQixFQUE2QjtBQUMzQkMsdUJBQWEsQ0FBQ29CLEdBQUcsQ0FBQ0MsSUFBSixDQUFTLENBQVQsRUFBWXRCLFdBQWIsQ0FBYjtBQUNELFNBRkQsTUFFTztBQUNMQyx1QkFBYSxDQUFDLDBCQUFELENBQWI7QUFDRDs7QUFDREUsbUJBQVcsQ0FBQ2tCLEdBQUcsQ0FBQ0MsSUFBSixDQUFTLENBQVQsRUFBWU8sY0FBYixDQUFYO0FBQ0F4QixvQkFBWSxDQUFDZ0IsR0FBRyxDQUFDQyxJQUFKLENBQVMsQ0FBVCxFQUFZUSxlQUFiLENBQVo7QUFDQXJDLGlCQUFTLENBQUM0QixHQUFHLENBQUNDLElBQUosQ0FBUyxDQUFULEVBQVk5QixNQUFiLENBQVQ7QUFDQUQsaUJBQVMsQ0FBQzhCLEdBQUcsQ0FBQ0MsSUFBSixDQUFTLENBQVQsRUFBWWhDLE1BQWIsQ0FBVDtBQUNBSyxrQkFBVSxDQUFDMEIsR0FBRyxDQUFDQyxJQUFKLENBQVMsQ0FBVCxFQUFZUyxLQUFiLENBQVY7QUFDRCxPQWpCSyxDQUFOO0FBa0JEOztBQUNELG1CQUFlQyxTQUFmLEdBQTJCO0FBQ3pCLFVBQUl2RCxjQUFjLENBQUN3RCxPQUFmLElBQTBCekQsS0FBOUIsRUFBcUM7QUFDbkNDLHNCQUFjLENBQUN3RCxPQUFmLEdBQXlCLEtBQXpCO0FBQ0EsY0FBTXBCLE9BQU8sRUFBYjtBQUNEO0FBQ0Y7O0FBQ0RtQixhQUFTO0FBRVYsR0E5QlEsQ0FBVDtBQWdDQSxTQUNFLG1CQUNHckIsV0FESCxFQUVFO0FBQUssU0FBSyxFQUFFO0FBQUV1QixhQUFPLEVBQUU7QUFBWDtBQUFaLEtBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRUMsV0FBSyxFQUFFO0FBQVQ7QUFBWixLQUNFLE1BQUMscURBQUQ7QUFBTSxTQUFLLEVBQUMscUJBQVo7QUFBa0MsYUFBUztBQUEzQyxLQUNFLE1BQUMscURBQUQsUUFDRSxNQUFDLDJEQUFELFFBQ0UsTUFBQywwREFBRDtBQUNFLFNBQUssRUFBRW5DLFdBRFQ7QUFFRSxZQUFRLEVBQUVvQyxLQUFLLElBQUluQyxhQUFhLENBQUNtQyxLQUFELENBRmxDO0FBR0UsU0FBSyxFQUFDLGNBSFI7QUFJRSxRQUFJLEVBQUM7QUFKUCxJQURGLEVBT0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFLG1CQUNFLE1BQUMsMERBQUQ7QUFDRSxNQUFFLEVBQUMsYUFETDtBQUVFLGVBQVcsRUFBQyxPQUZkO0FBR0UsU0FBSyxFQUFFekQsVUFIVDtBQUlFLFlBQVEsRUFBRXlELEtBQUssSUFBSXhELGFBQWEsQ0FBQ3dELEtBQUQsQ0FKbEM7QUFLRSxTQUFLLEVBQUM7QUFMUixJQURGLENBREYsRUFTRSxtQkFDRSxNQUFDLDBEQUFEO0FBQ0UsTUFBRSxFQUFDLGNBREw7QUFFRSxlQUFXLEVBQUMsT0FGZDtBQUdFLFNBQUssRUFBRWhELFdBSFQ7QUFJRSxZQUFRLEVBQUVnRCxLQUFLLElBQUkvQyxjQUFjLENBQUMrQyxLQUFELENBSm5DO0FBS0UsU0FBSyxFQUFDO0FBTFIsSUFERixDQVRGLENBUEYsRUF5QkU7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFLG1CQUNFLE1BQUMsMERBQUQ7QUFDRSxNQUFFLEVBQUMsWUFETDtBQUVFLGVBQVcsRUFBQyxPQUZkO0FBR0UsU0FBSyxFQUFFdEQsU0FIVDtBQUlFLFlBQVEsRUFBRXNELEtBQUssSUFBSXJELFlBQVksQ0FBQ3FELEtBQUQsQ0FKakM7QUFLRSxTQUFLLEVBQUM7QUFMUixJQURGLENBREYsRUFTRSxtQkFDRSxNQUFDLDBEQUFEO0FBQ0UsTUFBRSxFQUFDLGlCQURMO0FBRUUsZUFBVyxFQUFDLE9BRmQ7QUFHRSxTQUFLLEVBQUVwRCxVQUhUO0FBSUUsWUFBUSxFQUFFb0QsS0FBSyxJQUFJbkQsYUFBYSxDQUFDbUQsS0FBRCxDQUpsQztBQUtFLFNBQUssRUFBQztBQUxSLElBREYsQ0FURixDQXpCRixFQTJDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0UsbUJBQ0UsTUFBQywwREFBRDtBQUNFLE1BQUUsRUFBQyxjQURMO0FBRUUsZUFBVyxFQUFDLE9BRmQ7QUFHRSxTQUFLLEVBQUVsRCxXQUhUO0FBSUUsWUFBUSxFQUFFa0QsS0FBSyxJQUFJakQsY0FBYyxDQUFDaUQsS0FBRCxDQUpuQztBQUtFLFNBQUssRUFBQztBQUxSLElBREYsQ0FERixDQTNDRixFQXFERTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0UsbUJBQ0UsTUFBQywwREFBRDtBQUNFLE1BQUUsRUFBQyxnQkFETDtBQUVFLGVBQVcsRUFBRWxDLFFBRmY7QUFHRSxTQUFLLEVBQUVBLFFBSFQ7QUFJRSxZQUFRLEVBQUVrQyxLQUFLLElBQUlqQyxXQUFXLENBQUNpQyxLQUFELENBSmhDO0FBS0UsU0FBSyxFQUFDO0FBTFIsSUFERixDQURGLEVBU0UsbUJBQ0UsTUFBQywwREFBRDtBQUNFLE1BQUUsRUFBQyxpQkFETDtBQUVFLGVBQVcsRUFBRWhDLFNBRmY7QUFHRSxTQUFLLEVBQUVBLFNBSFQ7QUFJRSxZQUFRLEVBQUVnQyxLQUFLLElBQUkvQixZQUFZLENBQUMrQixLQUFELENBSmpDO0FBS0UsU0FBSyxFQUFDO0FBTFIsSUFERixDQVRGLENBckRGLEVBd0VFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRSxNQUFDLDREQUFEO0FBQ0UsU0FBSyxFQUFDLE9BRFI7QUFFRSxXQUFPLEVBQUV0QyxZQUFZLEtBQUssVUFGNUI7QUFHRSxNQUFFLEVBQUMsVUFITDtBQUlFLFFBQUksRUFBQyxVQUpQO0FBS0UsWUFBUSxFQUFHc0MsS0FBRCxJQUFXO0FBQUNyQyxxQkFBZSxDQUFDLFVBQUQsQ0FBZjtBQUE0QjtBQUxwRCxJQURGLEVBUUUsTUFBQyw0REFBRDtBQUNFLFNBQUssRUFBQyxXQURSO0FBRUUsTUFBRSxFQUFDLFVBRkw7QUFHRSxRQUFJLEVBQUMsVUFIUDtBQUlFLFdBQU8sRUFBRUQsWUFBWSxLQUFLLFVBSjVCO0FBS0UsWUFBUSxFQUFHc0MsS0FBRCxJQUFXO0FBQUNyQyxxQkFBZSxDQUFDLFVBQUQsQ0FBZjtBQUE0QjtBQUxwRCxJQVJGLENBeEVGLEVBd0ZFLE1BQUMseURBQUQ7QUFDRSxNQUFFLEVBQUMsV0FETDtBQUVFLFNBQUssRUFBQyxjQUZSO0FBR0UsV0FBTyxFQUFFTCxPQUhYO0FBSUUsWUFBUSxFQUFHMEMsS0FBRCxJQUFXekMsVUFBVSxDQUFDeUMsS0FBRDtBQUpqQyxJQXhGRixFQThGRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0UsbUJBQ0UsTUFBQywwREFBRDtBQUNFLE1BQUUsRUFBQyxRQURMO0FBRUUsWUFBUSxFQUFFLENBQUMxQyxPQUZiO0FBR0UsZUFBVyxFQUFDLEdBSGQ7QUFJRSxTQUFLLEVBQUVGLE1BSlQ7QUFLRSxZQUFRLEVBQUU0QyxLQUFLLElBQUkzQyxTQUFTLENBQUMyQyxLQUFELENBTDlCO0FBTUUsU0FBSyxFQUFDLFFBTlI7QUFPRSxRQUFJLEVBQUM7QUFQUCxJQURGLENBREYsRUFZRSxtQkFDRSxNQUFDLDBEQUFEO0FBQ0UsTUFBRSxFQUFDLFFBREw7QUFFRSxZQUFRLEVBQUUsQ0FBQzFDLE9BRmI7QUFHRSxlQUFXLEVBQUMsSUFIZDtBQUlFLFNBQUssRUFBRUosTUFKVDtBQUtFLFlBQVEsRUFBRThDLEtBQUssSUFBSTdDLFNBQVMsQ0FBQzZDLEtBQUQsQ0FMOUI7QUFNRSxTQUFLLEVBQUMsUUFOUjtBQU9FLFFBQUksRUFBQztBQVBQLElBREYsQ0FaRixDQTlGRixFQXNIRSxNQUFDLDREQUFELFFBQ0UsTUFBQyx1REFBRDtBQUNFLFdBQU8sRUFBRSxNQUFNO0FBQ2J4RCxtQkFBYSxDQUFDLFNBQUQsQ0FBYjtBQUNBUyxvQkFBYyxDQUFDLE9BQUQsQ0FBZDtBQUNBTixrQkFBWSxDQUFDLE9BQUQsQ0FBWjtBQUNBRSxtQkFBYSxDQUFDLFNBQUQsQ0FBYjtBQUNBRSxvQkFBYyxDQUFDLFNBQUQsQ0FBZDtBQUNBUSxnQkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNBRixlQUFTLENBQUMsQ0FBRCxDQUFUO0FBQ0FGLGVBQVMsQ0FBQyxFQUFELENBQVQ7QUFDQVEscUJBQWUsQ0FBQyxVQUFELENBQWY7QUFDQUUsbUJBQWEsQ0FBQyxFQUFELENBQWI7QUFDQUUsaUJBQVcsQ0FBQyxjQUFELENBQVg7QUFDQUUsa0JBQVksQ0FBQyxhQUFELENBQVo7QUFDRDtBQWRILHdCQURGLEVBZ0JFLE1BQUMsdURBQUQ7QUFDRSxXQUFPLE1BRFQ7QUFFRSxXQUFPLEVBQUUsWUFBWTtBQUNuQlAsa0JBQVksSUFBSSxVQUFoQixHQUE2QkQsY0FBYyxDQUFDLE9BQUQsQ0FBM0MsR0FBdURBLGNBQWMsQ0FBQyxVQUFELENBQXJFO0FBQ0EsWUFBTXdDLE9BQU8sR0FBRztBQUNkZCxtQkFBVyxFQUFFNUMsVUFEQztBQUVkNkMsd0JBQWdCLEVBQUUxQyxTQUZKO0FBR2QyQyx5QkFBaUIsRUFBRXpDLFVBSEw7QUFJZDJDLDBCQUFrQixFQUFFdkMsV0FKTjtBQUtkc0MsMEJBQWtCLEVBQUV4QyxXQUxOO0FBTWQyQyxzQkFBYyxFQUFFM0IsUUFORjtBQU9kNEIsdUJBQWUsRUFBRTFCLFNBUEg7QUFRZDJCLGFBQUssRUFBRXJDLE9BUk87QUFTZEYsY0FBTSxFQUFFQSxNQVRNO0FBVWRGLGNBQU0sRUFBRUEsTUFWTTtBQVdkc0Msb0JBQVksRUFBRWhDLFdBWEE7QUFZZEksbUJBQVcsRUFBRUE7QUFaQyxPQUFoQjtBQWNBLFlBQU1pQiw0Q0FBSyxDQUFDcUIsR0FBTixDQUFVakUsTUFBTSxDQUFDOEMsUUFBUCxHQUFrQixTQUFsQixHQUE4QjNDLEtBQUssQ0FBQ3dDLE9BQTlDLEVBQXVEcUIsT0FBdkQsRUFBZ0VqQixJQUFoRSxDQUFxRSxNQUFNO0FBQy9FYixrQkFBVSxDQUFDLDRCQUFELENBQVY7QUFDQUcsbUJBQVc7QUFDWixPQUhLLENBQU47QUFJRDtBQXRCSCxtQkFoQkYsQ0F0SEYsQ0FERixDQURGLENBREYsQ0FERixFQXNLRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQThCLFNBQUssRUFBRTtBQUFFeUIsV0FBSyxFQUFFO0FBQVQ7QUFBckMsS0FDRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQThCLFNBQUssRUFBRTtBQUFFLHlCQUFtQnhEO0FBQXJCO0FBQXJDLEtBQ0dlLE9BQU8sSUFBSSxDQUFYLEdBQ0M7QUFBRyxhQUFTLEVBQUMsT0FBYjtBQUFxQixTQUFLLEVBQUU7QUFBRSxlQUFTTjtBQUFYO0FBQTVCLEtBQXVESSxNQUF2RCxPQUFnRUYsTUFBaEUsQ0FERCxHQUdDLElBSkosRUFNR1UsV0FBVyxHQUNWO0FBQUksU0FBSyxFQUFFO0FBQUUsZUFBU1o7QUFBWDtBQUFYLEtBQXNDWSxXQUF0QyxDQURVLEdBR1Y7QUFBSSxTQUFLLEVBQUU7QUFBRSxlQUFTWjtBQUFYO0FBQVgsS0FBcUM7QUFBTSxhQUFTLEVBQUM7QUFBaEIsZUFBckMsc0JBVEosQ0FERixFQWFFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBNEIsT0FBRyxFQUFDO0FBQWhDLElBYkYsRUFjRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBRyxhQUFTLEVBQUMsY0FBYjtBQUE0QixTQUFLLEVBQUU7QUFBRSxlQUFTTjtBQUFYO0FBQW5DLHFCQURGLEVBRUU7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQUcsYUFBUyxFQUFDLGNBQWI7QUFBNEIsU0FBSyxFQUFFO0FBQUUsZUFBU0U7QUFBWDtBQUFuQyxhQURGLEVBRUU7QUFBRyxhQUFTLEVBQUMsU0FBYjtBQUF1QixTQUFLLEVBQUU7QUFBRSxlQUFTRjtBQUFYO0FBQTlCLGFBRkYsQ0FGRixFQU1HZ0IsWUFBWSxJQUFJLFVBQWhCLEdBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQUksYUFBUyxFQUFDO0FBQWQsS0FBOEI7QUFBUSxhQUFTLEVBQUMsdUJBQWxCO0FBQTBDLFNBQUssRUFBRTtBQUFFLGVBQVNkLFVBQVg7QUFBdUIscUJBQWVBO0FBQXRDO0FBQWpELFlBQTlCLENBREYsRUFFRTtBQUFJLGFBQVMsRUFBQztBQUFkLEtBQThCO0FBQVEsYUFBUyxFQUFDLGNBQWxCO0FBQWlDLFNBQUssRUFBRTtBQUFFLGVBQVNGO0FBQVg7QUFBeEMsWUFBOUIsQ0FGRixFQUdFO0FBQUksYUFBUyxFQUFDO0FBQWQsS0FBOEI7QUFBUSxhQUFTLEVBQUMsY0FBbEI7QUFBaUMsU0FBSyxFQUFFO0FBQUUsZUFBU0E7QUFBWDtBQUF4QyxjQUE5QixDQUhGLENBREQsR0FPQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBUSxhQUFTLEVBQUMsb0JBQWxCO0FBQXVDLFNBQUssRUFBRTtBQUFFLGVBQVNFO0FBQVg7QUFBOUMsS0FDRSw2QkFERixFQUN1Qiw2QkFEdkIsRUFDNEMsK0JBRDVDLENBREYsQ0FiSixFQW1CRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBUSxhQUFTLEVBQUMsYUFBbEI7QUFBZ0MsU0FBSyxFQUFFO0FBQUUsZUFBU0Y7QUFBWDtBQUF2QyxLQUFnRW9CLFFBQWhFLENBREYsRUFFRTtBQUFRLGFBQVMsRUFBQyxhQUFsQjtBQUFnQyxTQUFLLEVBQUU7QUFBRSx5QkFBbUJoQjtBQUFyQjtBQUF2QyxLQUE0RWtCLFNBQTVFLENBRkYsQ0FuQkYsQ0FkRixDQXRLRixDQUZGLENBREY7QUFvTkQ7O0FBRWM3QiwyRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdSQTtBQUNBO0FBTUE7QUFDQTtBQUNBOztBQUNBLE1BQU1GLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxxRUFBRCxDQUF0Qjs7QUFDQTs7QUFFQSxTQUFTaUUsWUFBVCxHQUF3QjtBQUN0QixRQUFNQyxNQUFNLEdBQUc5RCxvREFBTSxDQUFDLElBQUQsQ0FBckI7QUFDQSxRQUFNO0FBQUUrRCxTQUFGO0FBQVNuQjtBQUFULE1BQWtCb0IsNkRBQVEsQ0FBQ0MsMkVBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JoRSxzREFBUSxDQUFDLEtBQUQsQ0FBdEM7QUFDRixRQUFNO0FBQUEsT0FBQ2lFLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCbEUsc0RBQVEsQ0FBQyxJQUFELENBQXRDO0FBRUUrQix5REFBUyxDQUFDLE1BQU07QUFDZCxRQUFJNEIsTUFBTSxDQUFDUCxPQUFQLElBQWtCWCxJQUF0QixFQUE0QjtBQUMxQnlCLGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0FQLFlBQU0sQ0FBQ1AsT0FBUCxHQUFpQixLQUFqQjtBQUNEO0FBQ0YsR0FMUSxDQUFUO0FBUUEsU0FDRSxtQkFDRyxDQUFDYSxPQUFELEdBQ0MsbUJBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFLG1CQUFLLGlCQUFHO0FBQUcsUUFBSSxFQUFDO0FBQVIsa0JBQUgsQ0FBTCxDQURGLEVBRUUsbUJBQUssaUJBQUc7QUFBRyxRQUFJLEVBQUM7QUFBUixlQUFILENBQUwsQ0FGRixFQUdFLG1CQUFLLGlCQUFHO0FBQUcsU0FBSyxFQUFFO0FBQUUsZUFBUztBQUFYLEtBQVY7QUFBa0MsUUFBSSxFQUFDO0FBQXZDLGNBQUgsQ0FBTCxDQUhGLEVBSUUsbUJBQUssaUJBQUc7QUFBRyxRQUFJLEVBQUM7QUFBUixpQkFBSCxDQUFMLENBSkYsRUFLRSxtQkFBSyxpQkFBRztBQUFHLFFBQUksRUFBQztBQUFSLFdBQUgsQ0FBTCxDQUxGLENBREYsRUFRRTtBQUFLLFNBQUssRUFBRTtBQUFFRSxhQUFPLEVBQUU7QUFBWDtBQUFaLEtBQ0UsTUFBQyxzREFBRCxRQUNFLE1BQUMsdURBQUQsUUFDRSxNQUFDLHVEQUFELENBQVEsT0FBUixRQUNFLE1BQUMsMEVBQUQ7QUFBYyxXQUFPLEVBQUUzRSxNQUFNLENBQUM0RSxTQUFQLENBQWlCM0IsSUFBSSxDQUFDNEIsSUFBTCxDQUFVQyxFQUEzQjtBQUF2QixJQURGLENBREYsQ0FERixDQURGLENBUkYsQ0FERCxHQW9CQyxJQXJCSixDQURGO0FBMEJEOztBQUVjWiwyRUFBZixFOzs7Ozs7Ozs7Ozs7QUN2REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUksV0FBVyxHQUFHUyxrREFBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FOTztBQVFBLE1BQU1DLGVBQWUsR0FBR0Qsa0RBQUk7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FiTztBQWVBLE1BQU1FLGFBQWEsR0FBR0Ysa0RBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FWTztBQVlBLE1BQU1HLGFBQWEsR0FBR0gsa0RBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBWk87QUFjQSxNQUFNSSxvQkFBb0IsR0FBR0osa0RBQUk7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWRPO0FBZ0JBLE1BQU1LLG1CQUFtQixHQUFHTCxrREFBSTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBZE87QUFnQkEsTUFBTU0sZ0JBQWdCLEdBQUdOLGtEQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBYk87QUFlQSxNQUFNTyxrQkFBa0IsR0FBR1Asa0RBQUk7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBM0JPLEM7Ozs7Ozs7Ozs7O0FDbEdQUSxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDZjFDLFVBQVEsRUFBRSw2QkFESztBQUVmOEIsV0FBUyxFQUFFLFVBQVNhLEdBQVQsRUFBYTtBQUN0QixRQUFJQyxPQUFPLEdBQUdELEdBQUcsQ0FBQ0UsS0FBSixDQUFVLE9BQVYsQ0FBZDtBQUNBLFFBQUdELE9BQUgsRUFBWSxPQUFPQSxPQUFPLENBQUMsQ0FBRCxDQUFkO0FBQ2IsR0FMYztBQU1mRSxXQUFTLEVBQUUsVUFBU0gsR0FBVCxFQUFhO0FBQ3RCLFFBQUlJLElBQUksR0FBRywwQkFBWDtBQUNBSixPQUFHLEdBQUdJLElBQUksQ0FBQ0MsTUFBTCxDQUFZTCxHQUFaLENBQU47QUFDQSxXQUFPQSxHQUFQO0FBQ0QsR0FWYztBQVdmTSxZQUFVLEVBQUUsVUFBU04sR0FBVCxFQUFhO0FBQ3ZCLFFBQUlJLElBQUksR0FBRyx3QkFBWDtBQUNBSixPQUFHLEdBQUdJLElBQUksQ0FBQ0MsTUFBTCxDQUFZTCxHQUFaLENBQU47QUFDQSxXQUFPQSxHQUFQO0FBQ0Q7QUFmYyxDQUFqQixDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6InBhZ2VzL2Rlc2lnbi1sYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2Rlc2lnbi1sYXlvdXQuanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBGb3JtLFxyXG4gIEZvcm1MYXlvdXQsXHJcbiAgVGV4dEZpZWxkLFxyXG4gIFRvYXN0LFxyXG4gIEJ1dHRvbkdyb3VwLFxyXG4gIEJ1dHRvbixcclxuICBDaGVja2JveCxcclxuICBSYWRpb0J1dHRvbixcclxuICBDYXJkXHJcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCAnLi4vY3NzL0FwcFN0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBjb25maWcgPSByZXF1aXJlKCcuLi8uLi9zZXJ2ZXIvY29uZmlnL2h0dHBDb25maWcuanMnKTtcclxuXHJcbmZ1bmN0aW9uIFRoZW1lU2V0dGluZyhwcm9wcykge1xyXG4gIGNvbnN0IGlzSW5pdGlhbE1vdW50ID0gdXNlUmVmKHRydWUpO1xyXG4gIGNvbnN0IFt0aGVtZUNvbG9yLCBzZXRUaGVtZUNvbG9yXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2ZvbnRDb2xvciwgc2V0Rm9udENvbG9yXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2Vmb250Q29sb3IsIHNldEVmb250Q29sb3JdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbYnV0dG9uQ29sb3IsIHNldEJ1dHRvbkNvbG9yXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2hlYWRlckNvbG9yLCBzZXRIZWFkZXJDb2xvcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtzZWNvbmQsIHNldFNlY29uZF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFttaW51dGUsIHNldE1pbnV0ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdmFyaWFudFR5cGUsIHNldFZhcmlhbnRUeXBlXSA9IHVzZVN0YXRlKCdyYWRpbycpO1xyXG4gIGNvbnN0IFtjaGVja2VkUmFkaW8sIHNldENoZWNrZWRSYWRpb10gPSB1c2VTdGF0ZSgnZGlzYWJsZWQnKTtcclxuICBjb25zdCBbdGhlbWVfdGl0bGUsIHNldFRoZW1lVGl0bGVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtmaXJzdEJ0biwgc2V0Rmlyc3RCdG5dID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbc2Vjb25kQnRuLCBzZXRTZWNvbmRCdG5dID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtzaG93VG9hc3QsIHNldFRvYXN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB0b2dnbGVUb2FzdCA9ICgpID0+IHNldFRvYXN0KCFzaG93VG9hc3QpO1xyXG4gIGNvbnN0IHRvYXN0TWFya3VwID0gc2hvd1RvYXN0ID8gKFxyXG4gICAgPFRvYXN0IGNvbnRlbnQ9e21lc3NhZ2V9IG9uRGlzbWlzcz17dG9nZ2xlVG9hc3R9IERpZHVyYXRpb249ezI1MDB9IC8+XHJcbiAgKSA6IG51bGw7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXREYXRhKCkge1xyXG4gICAgICBjb25zdCBzZWFyY2hfZGF0YSA9IHsgc2VhcmNoOiBwcm9wcy52YWx1ZUlEIH07XHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoY29uZmlnLkhUVFBfQVBJICsgJy9zdG9yZS9zZWFyY2gvdGhlbWUnLCBzZWFyY2hfZGF0YSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgc2V0VGhlbWVDb2xvcihyZXMuZGF0YVswXS50aGVtZV9jb2xvcik7XHJcbiAgICAgICAgc2V0Rm9udENvbG9yKHJlcy5kYXRhWzBdLnRoZW1lX2ZvbnRfY29sb3IpO1xyXG4gICAgICAgIHNldEVmb250Q29sb3IocmVzLmRhdGFbMF0udGhlbWVfZWZvbnRfY29sb3IpO1xyXG4gICAgICAgIHNldEJ1dHRvbkNvbG9yKHJlcy5kYXRhWzBdLnRoZW1lX2J1dHRvbl9jb2xvcik7XHJcbiAgICAgICAgc2V0SGVhZGVyQ29sb3IocmVzLmRhdGFbMF0udGhlbWVfaGVhZGVyX2NvbG9yKTtcclxuICAgICAgICByZXMuZGF0YVswXS52YXJpYW50X3R5cGUgPT0gJ2Ryb3Bkb3duJyA/IHNldENoZWNrZWRSYWRpbygnb3B0aW9uYWwnKSA6IHNldENoZWNrZWRSYWRpbygnZGlzYWJsZWQnKTtcclxuICAgICAgICBpZiAocmVzLmRhdGFbMF0udGhlbWVfdGl0bGUpIHtcclxuICAgICAgICAgIHNldFRoZW1lVGl0bGUocmVzLmRhdGFbMF0udGhlbWVfdGl0bGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZXRUaGVtZVRpdGxlKCcyMCUgT0ZGIFlvdXIgTmV4dCBPcmRlciEnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Rmlyc3RCdG4ocmVzLmRhdGFbMF0uZmlyc3RfYnRuX3RleHQpO1xyXG4gICAgICAgIHNldFNlY29uZEJ0bihyZXMuZGF0YVswXS5zZWNvbmRfYnRuX3RleHQpO1xyXG4gICAgICAgIHNldE1pbnV0ZShyZXMuZGF0YVswXS5taW51dGUpO1xyXG4gICAgICAgIHNldFNlY29uZChyZXMuZGF0YVswXS5zZWNvbmQpO1xyXG4gICAgICAgIHNldENoZWNrZWQocmVzLmRhdGFbMF0udGltZXIpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcclxuICAgICAgaWYgKGlzSW5pdGlhbE1vdW50LmN1cnJlbnQgJiYgcHJvcHMpIHtcclxuICAgICAgICBpc0luaXRpYWxNb3VudC5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgICAgYXdhaXQgZ2V0RGF0YSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaERhdGEoKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7dG9hc3RNYXJrdXB9XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICc1MCUnIH19PlxyXG4gICAgICAgICAgPENhcmQgdGl0bGU9XCJVcHNlbGwgdGhlbWUgZGVzaWduXCIgc2VjdGlvbmVkPlxyXG4gICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICA8Rm9ybUxheW91dD5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoZW1lX3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gc2V0VGhlbWVUaXRsZSh2YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ3VzdG9tIFRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInRoZW1lX2NvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiY29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoZW1lQ29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gc2V0VGhlbWVDb2xvcih2YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRoZW1lIGNvbG9yXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJoZWFkZXJfY29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJjb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aGVhZGVyQ29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gc2V0SGVhZGVyQ29sb3IodmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJIZWFkZXIgY29sb3JcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZm9udF9jb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImNvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb250Q29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gc2V0Rm9udENvbG9yKHZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRm9udCBjb2xvclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaGlnaGxpZ2h0X2NvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiY29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Vmb250Q29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gc2V0RWZvbnRDb2xvcih2YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkhpZ2hsaWdodGVkIGNvbG9yXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cImJ1dHRvbl9jb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImNvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtidXR0b25Db2xvcn1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXRCdXR0b25Db2xvcih2YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkJ1dHRvbiBjb2xvclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaXJzdF9idG5fdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Zmlyc3RCdG59XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zmlyc3RCdG59XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gc2V0Rmlyc3RCdG4odmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJGaXJzdCBCdXR0b25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInNlY29uZF9idG5fdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17c2Vjb25kQnRufVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlY29uZEJ0bn1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXRTZWNvbmRCdG4odmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTZWNvbmQgQnV0dG9uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxSYWRpb0J1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWRSYWRpbyA9PT0gJ2Rpc2FibGVkJ31cclxuICAgICAgICAgICAgICAgICAgICBpZD1cImRpc2FibGVkXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWNjb3VudHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtzZXRDaGVja2VkUmFkaW8oJ2Rpc2FibGVkJyl9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8UmFkaW9CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRyb3AgRG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJvcHRpb25hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFjY291bnRzXCJcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVja2VkUmFkaW8gPT09ICdvcHRpb25hbCd9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge3NldENoZWNrZWRSYWRpbygnb3B0aW9uYWwnKX19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICBpZD1cImNoZWNrX2JveFwiXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW5hYmxlIHRpbWVyXCJcclxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0Q2hlY2tlZCh2YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwibWludXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshY2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bWludXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHNldE1pbnV0ZSh2YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk1pbnV0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInNlY29uZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWNoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjMwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWNvbmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gc2V0U2Vjb25kKHZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2Vjb25kXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRUaGVtZUNvbG9yKCcjZjQ3Nzc3Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRIZWFkZXJDb2xvcignd2hpdGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldEZvbnRDb2xvcignYmxhY2snKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldEVmb250Q29sb3IoJyNmNzQ0NDQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldEJ1dHRvbkNvbG9yKCcjZjc0NDQ0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRDaGVja2VkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0TWludXRlKDMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0U2Vjb25kKDMwKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldENoZWNrZWRSYWRpbygnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFRoZW1lVGl0bGUoJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0Rmlyc3RCdG4oJ05vIFRoYW5rcyA6KCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0U2Vjb25kQnRuKCdBZGQgVG8gQ2FydCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19PlJlc2V0IHRvIGRlZmF1bHQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnlcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkUmFkaW8gPT0gJ2Rpc2FibGVkJyA/IHNldFZhcmlhbnRUeXBlKCdyYWRpbycpIDogc2V0VmFyaWFudFR5cGUoJ2Ryb3Bkb3duJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYl9kYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVtZV9jb2xvcjogdGhlbWVDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWVfZm9udF9jb2xvcjogZm9udENvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVtZV9lZm9udF9jb2xvcjogZWZvbnRDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWVfaGVhZGVyX2NvbG9yOiBoZWFkZXJDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWVfYnV0dG9uX2NvbG9yOiBidXR0b25Db2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RfYnRuX3RleHQ6IGZpcnN0QnRuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRfYnRuX3RleHQ6IHNlY29uZEJ0bixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXI6IGNoZWNrZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZTogbWludXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmQ6IHNlY29uZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudF90eXBlOiB2YXJpYW50VHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWVfdGl0bGU6IHRoZW1lX3RpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgYXdhaXQgYXhpb3MucHV0KGNvbmZpZy5IVFRQX0FQSSArICcvc3RvcmUvJyArIHByb3BzLnZhbHVlSUQsIGRiX2RhdGEpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRNZXNzYWdlKCdUaGVtZSBhcHBsaWVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVUb2FzdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9fT5BcHBseSB0aGVtZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGVsQ29udGVudFwiIHN0eWxlPXt7IHdpZHRoOiAnNTAlJyB9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBzZWxsSGVhZGVyXCIgc3R5bGU9e3sgJ2JhY2tncm91bmRDb2xvcic6IHRoZW1lQ29sb3IgfX0+XHJcbiAgICAgICAgICAgIHtjaGVja2VkID09IDEgPyAoXHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGltZXJcIiBzdHlsZT17eyAnY29sb3InOiBoZWFkZXJDb2xvciB9fT57bWludXRlfTp7c2Vjb25kfTwvcD5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHt0aGVtZV90aXRsZSA/XHJcbiAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7ICdjb2xvcic6IGhlYWRlckNvbG9yIH19Pnt0aGVtZV90aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgJ2NvbG9yJzogaGVhZGVyQ29sb3IgfX0+PHNwYW4gY2xhc3NOYW1lPVwiZGlzY291bnRcIj4yMCUgT0ZGPC9zcGFuPiBZb3VyIE5leHQgT3JkZXIhPC9oMT5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInVwc2VsbC1pbWdcIiBzcmM9XCJodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDI3My8zMzMyLzg5MzAvZmlsZXMvZGVmYXVsdC5wbmc/dj0xNTc4NjAwMDQyXCIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBzZWxsSW5uZXJcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidXBzZWxsLXRpdGxlXCIgc3R5bGU9e3sgJ2NvbG9yJzogZm9udENvbG9yIH19PkNvbWZ5IFQtU2hpcnQ8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInVwc2VsbC1wcmljZVwiIHN0eWxlPXt7ICdjb2xvcic6IGVmb250Q29sb3IgfX0+MjUuOTk8L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29tcGFyZVwiIHN0eWxlPXt7ICdjb2xvcic6IGZvbnRDb2xvciB9fT41OS45OTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtjaGVja2VkUmFkaW8gPT0gJ2Rpc2FibGVkJyA/IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZhcmlhbnRzLWRpY1wiPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInZhcmlhbnRzLWxpc3RcIj48YnV0dG9uIGNsYXNzTmFtZT1cInZhcmlhbnRzLWJ0biBzZWxlY3RlZFwiIHN0eWxlPXt7ICdjb2xvcic6IGVmb250Q29sb3IsICdib3JkZXJDb2xvcic6IGVmb250Q29sb3IgfX0+UGluazwvYnV0dG9uPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidmFyaWFudHMtbGlzdFwiPjxidXR0b24gY2xhc3NOYW1lPVwidmFyaWFudHMtYnRuXCIgc3R5bGU9e3sgJ2NvbG9yJzogZm9udENvbG9yIH19PkJsdWU8L2J1dHRvbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInZhcmlhbnRzLWxpc3RcIj48YnV0dG9uIGNsYXNzTmFtZT1cInZhcmlhbnRzLWJ0blwiIHN0eWxlPXt7ICdjb2xvcic6IGZvbnRDb2xvciB9fT5ZZWxsb3c8L2J1dHRvbj48L2xpPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFyaWFudHMtZGljXCI+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInZhcmlhbnRzLWxpc3QtZHJvcFwiIHN0eWxlPXt7ICdjb2xvcic6IGVmb250Q29sb3IgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+UGluazwvb3B0aW9uPjxvcHRpb24+Qmx1ZTwvb3B0aW9uPjxvcHRpb24+WWVsbG93PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25GbGV4XCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjaGFuZ2UtbmV4dFwiIHN0eWxlPXt7ICdjb2xvcic6IGZvbnRDb2xvciB9fT57Zmlyc3RCdG59PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhZGQtdG8tY2FydFwiIHN0eWxlPXt7ICdiYWNrZ3JvdW5kQ29sb3InOiBidXR0b25Db2xvciB9fT57c2Vjb25kQnRufTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRoZW1lU2V0dGluZztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgQ2FyZCxcclxuICBMYXlvdXQsXHJcbiAgUGFnZSxcclxuICBGcmFtZSxcclxufSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IHsgR0VUX1NIT1BfSUQgfSBmcm9tICcuLi9zZXJ2ZXIvY29uZmlnL2FwcEJhc2ljUXVlcnkuanMnO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XHJcbmltcG9ydCBUaGVtZVNldHRpbmcgZnJvbSAnLi4vY2xpZW50L2NvbXBvbmVudHMvVGhlbWVTZXR0aW5nLmpzJztcclxuY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi4vc2VydmVyL2NvbmZpZy9odHRwQ29uZmlnLmpzJyk7XHJcbmltcG9ydCAnLi4vY2xpZW50L2Nzcy9BcHBTdHlsZS5jc3MnO1xyXG5cclxuZnVuY3Rpb24gRGVzaWduTGF5b3V0KCkge1xyXG4gIGNvbnN0IGlzSW5pdCA9IHVzZVJlZih0cnVlKTtcclxuICBjb25zdCB7IGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfU0hPUF9JRCk7XHJcbiAgY29uc3QgW3JlZnJlc2gsIHNldFJlZnJlc2hdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5jb25zdCBbcGVuZGluZywgc2V0UGVuZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGlzSW5pdC5jdXJyZW50ICYmIGRhdGEpIHtcclxuICAgICAgc2V0UGVuZGluZyhmYWxzZSk7XHJcbiAgICAgIGlzSW5pdC5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSlcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7IXBlbmRpbmcgP1xyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb25NYWluXCI+XHJcbiAgICAgICAgICAgIDxkaXY+PHA+PGEgaHJlZj1cIi9pbmRleFwiPkZyb250IFBhZ2U8L2E+PC9wPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PjxwPjxhIGhyZWY9XCIvYW5ub3RhdGVkLWxheW91dFwiPlNldHRpbmc8L2E+PC9wPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PjxwPjxhIHN0eWxlPXt7ICdjb2xvcic6ICcjNWM2YWM0JyB9fSBocmVmPVwiL2Rlc2lnbi1sYXlvdXRcIj5EZXNpZ248L2E+PC9wPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PjxwPjxhIGhyZWY9XCIvYW5hbHl0aWNzLWxheW91dFwiPkFuYWx5dGljczwvYT48L3A+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+PHA+PGEgaHJlZj1cIi9mYXEtbGF5b3V0XCI+RkFRPC9hPjwvcD48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMiUgMTAlJyB9fT5cclxuICAgICAgICAgICAgPEZyYW1lPlxyXG4gICAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxUaGVtZVNldHRpbmcgdmFsdWVJRD17Y29uZmlnLkV4dHJhY3RJZChkYXRhLnNob3AuaWQpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgPC9GcmFtZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDpcclxuICAgICAgICBudWxsXHJcbiAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlc2lnbkxheW91dDtcclxuIiwiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1NIT1BfSUQgPSBncWxgXHJcbnF1ZXJ5IHtcclxuICBzaG9wIHtcclxuICAgIGlkXHJcbiAgfVxyXG59XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ1JFQVRFX0RJU0NPVU5UID0gZ3FsYFxyXG5tdXRhdGlvbiBkaXNjb3VudENvZGVCYXNpY0NyZWF0ZSgkYmFzaWNDb2RlRGlzY291bnQ6IERpc2NvdW50Q29kZUJhc2ljSW5wdXQhKSB7XHJcbiAgZGlzY291bnRDb2RlQmFzaWNDcmVhdGUoYmFzaWNDb2RlRGlzY291bnQ6ICRiYXNpY0NvZGVEaXNjb3VudCkge1xyXG4gICAgY29kZURpc2NvdW50Tm9kZSB7XHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgICB1c2VyRXJyb3JzIHtcclxuICAgICAgY29kZVxyXG4gICAgICBmaWVsZFxyXG4gICAgICBtZXNzYWdlXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgREVMRVRFX1NDUklQVCA9IGdxbGBcclxubXV0YXRpb24gc2NyaXB0VGFnRGVsZXRlKCRpZDogSUQhKSB7XHJcbiAgc2NyaXB0VGFnRGVsZXRlKGlkOiAkaWQpIHtcclxuICAgIGRlbGV0ZWRTY3JpcHRUYWdJZFxyXG4gICAgdXNlckVycm9ycyB7XHJcbiAgICAgIGZpZWxkXHJcbiAgICAgIG1lc3NhZ2VcclxuICAgIH1cclxuICB9XHJcbn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDUkVBVEVfU0NSSVBUID0gZ3FsYFxyXG5tdXRhdGlvbiBzY3JpcHRUYWdDcmVhdGUoJGlucHV0OiBTY3JpcHRUYWdJbnB1dCEpIHtcclxuICBzY3JpcHRUYWdDcmVhdGUoaW5wdXQ6ICRpbnB1dCkge1xyXG4gICAgc2NyaXB0VGFnIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICAgIHVzZXJFcnJvcnMge1xyXG4gICAgICBmaWVsZFxyXG4gICAgICBtZXNzYWdlXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU0VBUkNIX09SREVSU19VUFNFTEwgPSBncWxgXHJcbnF1ZXJ5ICgkcXVlcnk6IFN0cmluZyl7XHJcbiAgb3JkZXJzKGZpcnN0OiAxMDAscXVlcnk6ICRxdWVyeSkge1xyXG4gICAgZWRnZXMge1xyXG4gICAgICBub2RlIHtcclxuICAgICAgICB0b3RhbFByaWNlU2V0IHtcclxuICAgICAgICAgIHByZXNlbnRtZW50TW9uZXkge1xyXG4gICAgICAgICAgICBhbW91bnRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfT1JERVJTX1RPVEFMID0gZ3FsYFxyXG5xdWVyeSAoJHF1ZXJ5OiBTdHJpbmcpe1xyXG4gIG9yZGVycyhmaXJzdDogMTAwLHF1ZXJ5OiAkcXVlcnkpIHtcclxuICAgIGVkZ2VzIHtcclxuICAgICAgbm9kZSB7XHJcbiAgICAgICAgdG90YWxQcmljZVNldCB7XHJcbiAgICAgICAgICBwcmVzZW50bWVudE1vbmV5IHtcclxuICAgICAgICAgICAgYW1vdW50XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ1JFQVRFX1JFQ1VSUklORyA9IGdxbGBcclxubXV0YXRpb24gYXBwU3Vic2NyaXB0aW9uQ3JlYXRlKCRuYW1lOiBTdHJpbmchLCAkbGluZUl0ZW1zOiBbQXBwU3Vic2NyaXB0aW9uTGluZUl0ZW1JbnB1dCFdISwgJHJldHVyblVybDogVVJMISwgJHRyaWFsRGF5czogSW50KSB7XHJcbiAgYXBwU3Vic2NyaXB0aW9uQ3JlYXRlKG5hbWU6ICRuYW1lLCBsaW5lSXRlbXM6ICRsaW5lSXRlbXMsIHJldHVyblVybDogJHJldHVyblVybCwgdHJpYWxEYXlzOiAkdHJpYWxEYXlzKSB7XHJcbmFwcFN1YnNjcmlwdGlvbiB7XHJcbiAgICAgIGlkXHJcbiAgICB9ICAgIFxyXG5jb25maXJtYXRpb25VcmxcclxuICAgIHVzZXJFcnJvcnMge1xyXG4gICAgICBmaWVsZFxyXG4gICAgICBtZXNzYWdlXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1BST0RVQ1RTX0JZX0lEID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldFByb2R1Y3RzKCRpZHM6IFtJRCFdISkge1xyXG4gICAgbm9kZXMoaWRzOiAkaWRzKSB7XHJcbiAgICAgIC4uLiBvbiBQcm9kdWN0IHtcclxuICAgICAgICB0aXRsZVxyXG4gICAgICAgIGhhbmRsZVxyXG4gICAgICAgIGRlc2NyaXB0aW9uSHRtbFxyXG4gICAgICAgIGlkXHJcbiAgICAgICAgaW1hZ2VzKGZpcnN0OiAxKSB7XHJcbiAgICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgIG9yaWdpbmFsU3JjXHJcbiAgICAgICAgICAgICAgYWx0VGV4dFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhcmlhbnRzKGZpcnN0OiAxKSB7XHJcbiAgICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgSFRUUF9BUEk6ICdodHRwczovL2FwcC5tYWdpY3Vwc2VsbC5jb20nLFxyXG4gIEV4dHJhY3RJZDogZnVuY3Rpb24oc3RyKXtcclxuICAgIHZhciBtYXRjaGVzID0gc3RyLm1hdGNoKC8oXFxkKykvKTtcclxuICAgIGlmKG1hdGNoZXMpIHJldHVybiBtYXRjaGVzWzBdO1xyXG4gIH0sXHJcbiAgQ29tYmluZUlkOiBmdW5jdGlvbihzdHIpe1xyXG4gICAgdmFyIHN0cjEgPSBcImdpZDovL3Nob3BpZnkvU2NyaXB0VGFnL1wiO1xyXG4gICAgc3RyID0gc3RyMS5jb25jYXQoc3RyKTtcclxuICAgIHJldHVybiBzdHI7XHJcbiAgfSxcclxuICBDb21iaW5lUElEOiBmdW5jdGlvbihzdHIpe1xyXG4gICAgdmFyIHN0cjEgPSBcImdpZDovL3Nob3BpZnkvUHJvZHVjdC9cIjtcclxuICAgIHN0ciA9IHN0cjEuY29uY2F0KHN0cik7XHJcbiAgICByZXR1cm4gc3RyO1xyXG4gIH0sXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzaG9waWZ5L3BvbGFyaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC10YWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYXBvbGxvXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=