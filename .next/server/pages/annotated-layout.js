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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/annotated-layout.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/components/CreateDiscount.js":
/*!*********************************************!*\
  !*** ./client/components/CreateDiscount.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _server_config_appBasicQuery_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../server/config/appBasicQuery.js */ "./server/config/appBasicQuery.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const config = __webpack_require__(/*! ../../server/config/httpConfig.js */ "./server/config/httpConfig.js");

function CreateDiscount({
  valueID
}) {
  const isInitialMount = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  const {
    0: refresh,
    1: setRefresh
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: discount,
    1: setDiscount
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: coupon,
    1: setCoupon
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: message,
    1: setMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: displayCode,
    1: setDisplayCode
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: errorMsgD,
    1: setErrorMsgD
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: errorMsgC,
    1: setErrorMsgC
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: showToast,
    1: setToast
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [handleSubmit, {
    error: discountError,
    data: discountData
  }] = Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_server_config_appBasicQuery_js__WEBPACK_IMPORTED_MODULE_4__["CREATE_DISCOUNT"]);

  const handleDiscountChange = value => setDiscount(value);

  const handleCouponChange = value => setCoupon(value);

  const toggleToast = () => setToast(!showToast);

  const toastMarkup = showToast ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Toast"], {
    content: message,
    onDismiss: toggleToast,
    Diduration: 2500
  }) : null;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function getData() {
      const search_data = {
        search: valueID
      };
      await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(config.HTTP_API + '/store/search/discount', search_data).then(res => {
        setDisplayCode(res.data[0].discount_code);
      });
    }

    async function fetchData() {
      if (isInitialMount.current && valueID) {
        isInitialMount.current = false;
        await getData();
      }

      if (!isInitialMount.current && refresh) {
        await getData();
        setRefresh(false);
      }
    }

    fetchData();
  });
  return __jsx("div", null, toastMarkup, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    id: "discount_percentage",
    placeholder: "20",
    value: discount,
    onChange: handleDiscountChange,
    label: "Discount percentage",
    type: "number",
    error: errorMsgD
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    id: "coupon",
    placeholder: "DEAL20",
    value: coupon,
    onChange: handleCouponChange,
    label: "Coupon code",
    error: errorMsgC
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"].Item, {
    fill: true
  }, __jsx("h2", null, "Current activated coupon code")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"].Item, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    status: "success"
  }, displayCode))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["PageActions"], {
    primaryAction: [{
      content: 'Submit',
      onAction: () => {
        setErrorMsgC('');
        setErrorMsgD('');
        discount && coupon ? handleSubmit({
          variables: {
            basicCodeDiscount: {
              title: coupon,
              code: coupon,
              startsAt: "2019-01-01",
              customerSelection: {
                all: true
              },
              customerGets: {
                value: {
                  percentage: discount / 100
                },
                items: {
                  all: true
                }
              }
            }
          }
        }).then(async ({
          data
        }) => {
          setMessage('Successfully Created');
          toggleToast();
          const db_data = {
            discount_code: coupon,
            discount_value: discount
          };
          await axios__WEBPACK_IMPORTED_MODULE_3___default.a.put(config.HTTP_API + '/store/' + valueID, db_data);
          setDiscount('');
          setCoupon('');
          setRefresh(true);
        }) : discount ? setErrorMsgC('Discount code is required') : setErrorMsgD('Discount is required');
      }
    }]
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (CreateDiscount);

/***/ }),

/***/ "./client/components/CreateScript.js":
/*!*******************************************!*\
  !*** ./client/components/CreateScript.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _server_config_appBasicQuery_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../server/config/appBasicQuery.js */ "./server/config/appBasicQuery.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const config = __webpack_require__(/*! ../../server/config/httpConfig.js */ "./server/config/httpConfig.js");

function getUrl(s) {
  switch (s) {
    case 'dynamic':
      return 'https://cdn.shopify.com/s/files/1/0313/1447/7188/files/MagicD-v7.js?v=1600115933';

    case 'manual':
      return 'https://cdn.shopify.com/s/files/1/0313/1447/7188/files/MagicM-v7.js?v=1600115933';

    default:
      null;
  }
}

function CreateScript(props) {
  const isInitialMount = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  const {
    0: showToast,
    1: setToast
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: message,
    1: setMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [handleSubmit, {
    error: discountError,
    data: discountData
  }] = Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_server_config_appBasicQuery_js__WEBPACK_IMPORTED_MODULE_4__["CREATE_SCRIPT"]);
  const {
    0: refresh,
    1: setRefresh
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const toggleToast = () => setToast(!showToast);

  const toastMarkup = showToast ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Toast"], {
    content: message,
    onDismiss: toggleToast,
    Diduration: 1500
  }) : null;
  const {
    0: pending,
    1: setPending
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isInitialMount.current && props) {
      setPending(false);
      isInitialMount.current = false;
      console.log('sss', props);
    }
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !pending ? __jsx("div", null, toastMarkup, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    disabled: !props.manual[2],
    primary: true,
    onClick: () => {
      handleSubmit({
        variables: {
          input: {
            displayScope: 'ORDER_STATUS',
            src: getUrl(props.manual[1])
          }
        }
      }).then(async ({
        data
      }) => {
        setMessage('Successfully Installed!');
        toggleToast();
        const db_data = {
          script_id: config.ExtractId(data.scriptTagCreate.scriptTag.id),
          upsell_mode: props.manual[1]
        };
        await axios__WEBPACK_IMPORTED_MODULE_3___default.a.put(config.HTTP_API + '/store/' + props.valueID, db_data);
        props.handleRefresh();
      });
    }
  }, "Activate")) : null);
}

/* harmony default export */ __webpack_exports__["default"] = (CreateScript);

/***/ }),

/***/ "./client/components/DeleteScript.js":
/*!*******************************************!*\
  !*** ./client/components/DeleteScript.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _server_config_appBasicQuery_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../server/config/appBasicQuery.js */ "./server/config/appBasicQuery.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const config = __webpack_require__(/*! ../../server/config/httpConfig.js */ "./server/config/httpConfig.js");

function DeleteScript(props) {
  const isInitialMount = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  const {
    0: showToast,
    1: setToast
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: refresh,
    1: setRefresh
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: active,
    1: setActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: message,
    1: setMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: scriptID,
    1: setScriptID
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: status,
    1: setStatus
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  const toggleToast = () => setToast(!showToast);

  const toastMarkup = showToast ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Toast"], {
    content: message,
    onDismiss: toggleToast,
    Diduration: 1500
  }) : null;
  const [handleSubmit, {
    error: discountError,
    data: discountData
  }] = Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_server_config_appBasicQuery_js__WEBPACK_IMPORTED_MODULE_4__["DELETE_SCRIPT"]);
  const handleChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => setActive(!active), [active]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function getData() {
      const search_data = {
        search: props.valueID
      };
      await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(config.HTTP_API + '/store/search/scriptID', search_data).then(res => {
        setScriptID(res.data[0].script_id);
        res.data[0].script_id ? setStatus(false) : setStatus(true);
      });
    }

    async function fetchData() {
      if (isInitialMount.current && props) {
        isInitialMount.current = false;
        await getData();
      }

      if (refresh) {
        await getData();
        setRefresh(false);
      }
    }

    fetchData();
  });
  return __jsx("div", null, toastMarkup, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    destructive: true,
    disabled: status,
    onClick: handleChange
  }, "Disable"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    open: active,
    onClose: handleChange,
    title: "Pause all the functions",
    secondaryActions: {
      content: 'Cancel',
      onAction: handleChange
    },
    primaryAction: {
      content: 'Disable',
      onAction: () => {
        handleSubmit({
          variables: {
            id: config.CombineId(scriptID)
          }
        }).then(async ({
          data
        }) => {
          handleChange();
          setMessage('Successfully Disabled!');
          toggleToast();
          const delete_data = {
            script_id: '',
            upsell_mode: ''
          };
          await axios__WEBPACK_IMPORTED_MODULE_3___default.a.put(config.HTTP_API + '/store/' + props.valueID, delete_data).then(result => {
            setStatus(true);
            setRefresh(true);
            props.handleRefresh();
          });
        });
      }
    }
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Modal"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextContainer"], null, __jsx("p", null, "Your data will be stored, you can activate the upsell back at anytime or switch to another upsell mode.")))));
}

/* harmony default export */ __webpack_exports__["default"] = (DeleteScript);

/***/ }),

/***/ "./client/components/FirstAuto.js":
/*!****************************************!*\
  !*** ./client/components/FirstAuto.js ***!
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const config = __webpack_require__(/*! ../../server/config/httpConfig.js */ "./server/config/httpConfig.js");

function FirstAuto({
  valueID
}) {
  const {
    0: active,
    1: setActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const handleToggle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => setActive(active => !active), []);
  const contentStatus = active ? 'Disable' : 'Enable';
  const isInitialMount = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function getData() {
      const db_data = {
        search: valueID
      };
      await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(config.HTTP_API + '/store/search/firstauto', db_data).then(result => {
        result.data[0].first_auto == 1 ? setActive(true) : setActive(false);
      });
    }

    function fetchData() {
      if (isInitialMount.current && valueID) {
        isInitialMount.current = false;
        getData();
      }
    }

    fetchData();
  });
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["SettingToggle"], {
    action: {
      content: contentStatus,
      onAction: async () => {
        const db_data = {
          first_auto: !active
        };
        await axios__WEBPACK_IMPORTED_MODULE_3___default.a.put(config.HTTP_API + '/store/' + valueID, db_data);
        setActive(!active);
      }
    },
    enabled: active
  }, "Let first product always be the first product from the cart"));
}

/* harmony default export */ __webpack_exports__["default"] = (FirstAuto);

/***/ }),

/***/ "./client/components/ProductList.js":
/*!******************************************!*\
  !*** ./client/components/ProductList.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _server_config_appBasicQuery_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../server/config/appBasicQuery.js */ "./server/config/appBasicQuery.js");
/* harmony import */ var _css_AppStyle_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/AppStyle.css */ "./client/css/AppStyle.css");
/* harmony import */ var _css_AppStyle_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_AppStyle_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ProductPicker_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProductPicker.js */ "./client/components/ProductPicker.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const config = __webpack_require__(/*! ../../server/config/httpConfig.js */ "./server/config/httpConfig.js");

function ProductList({
  valueID
}) {
  const isInitialMount = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  const {
    0: productArray,
    1: setProductArray
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  let {
    refresh,
    setRefresh
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_ProductPicker_js__WEBPACK_IMPORTED_MODULE_6__["Refresh"]);
  const {
    0: p1,
    1: setP1
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: p2,
    1: setP2
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: p3,
    1: setP3
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: p4,
    1: setP4
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function getData() {
      const db_data = {
        search: valueID
      };
      await axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(config.HTTP_API + '/store/search/products', db_data).then(result => {
        result.data[0].product_first ? setP1(result.data[0].product_first) : null;
        result.data[0].product_second ? setP2(result.data[0].product_second) : null;
        result.data[0].product_third ? setP3(result.data[0].product_third) : null;
        result.data[0].product_forth ? setP4(result.data[0].product_forth) : null;
      });
    }

    async function fetchData() {
      if (isInitialMount.current && valueID) {
        isInitialMount.current = false;
        await getData();
      }

      if (!isInitialMount.current && refresh) {
        setP1('');
        setP2('');
        setP3('');
        setP4('');
        await getData();
        setRefresh(false);
      }
    }

    fetchData();
  });
  return __jsx("div", {
    className: "product-list"
  }, __jsx("h2", {
    style: {
      marginBottom: '10px'
    }
  }, "Selected products"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"].Item, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    status: "success"
  }, p1)), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"].Item, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    status: "success"
  }, p2)), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"].Item, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    status: "success"
  }, p3)), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"].Item, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    status: "success"
  }, p4))));
}

/* harmony default export */ __webpack_exports__["default"] = (ProductList);

/***/ }),

/***/ "./client/components/ProductPicker.js":
/*!********************************************!*\
  !*** ./client/components/ProductPicker.js ***!
  \********************************************/
/*! exports provided: Refresh, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Refresh", function() { return Refresh; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/app-bridge-react */ "@shopify/app-bridge-react");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_AppStyle_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/AppStyle.css */ "./client/css/AppStyle.css");
/* harmony import */ var _css_AppStyle_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_AppStyle_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ProductList_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProductList.js */ "./client/components/ProductList.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const config = __webpack_require__(/*! ../../server/config/httpConfig.js */ "./server/config/httpConfig.js");


const Refresh = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();

function ProductPicker({
  valueID
}) {
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: refresh,
    1: setRefresh
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  var db_data = {};
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    sectioned: true
  }, __jsx(Refresh.Provider, {
    value: {
      refresh,
      setRefresh
    }
  }, __jsx(_ProductList_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    valueID: valueID
  })), __jsx("div", {
    className: "product-btn"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    primary: true,
    onClick: () => {
      setOpen(true);
    }
  }, "Open Product Picker")), __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_1__["ResourcePicker"], {
    resourceType: "Product",
    showVariants: false,
    open: open,
    onSelection: async resources => {
      resources.selection.length === 1 ? db_data = {
        product_first: resources.selection[0].handle,
        product_second: null,
        product_third: null,
        product_forth: null
      } : null;
      resources.selection.length === 2 ? db_data = {
        product_first: resources.selection[0].handle,
        product_second: resources.selection[1].handle,
        product_third: null,
        product_forth: null
      } : null;
      resources.selection.length === 3 ? db_data = {
        product_first: resources.selection[0].handle,
        product_second: resources.selection[1].handle,
        product_third: resources.selection[2].handle,
        product_forth: null
      } : null;
      resources.selection.length >= 4 ? db_data = {
        product_first: resources.selection[0].handle,
        product_second: resources.selection[1].handle,
        product_third: resources.selection[2].handle,
        product_forth: resources.selection[3].handle
      } : null;
      setOpen(false);
      await axios__WEBPACK_IMPORTED_MODULE_4___default.a.put(config.HTTP_API + '/store/' + valueID, db_data);
      setRefresh(true);
    },
    onCancel: () => setOpen(false)
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ProductPicker);

/***/ }),

/***/ "./client/components/ScriptComponent.js":
/*!**********************************************!*\
  !*** ./client/components/ScriptComponent.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CreateScript_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreateScript.js */ "./client/components/CreateScript.js");
/* harmony import */ var _css_AppStyle_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/AppStyle.css */ "./client/css/AppStyle.css");
/* harmony import */ var _css_AppStyle_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_AppStyle_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _DeleteScript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DeleteScript */ "./client/components/DeleteScript.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const config = __webpack_require__(/*! ../../server/config/httpConfig.js */ "./server/config/httpConfig.js");



function ScriptComponent({
  valueID
}) {
  const isInitialMount = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  const {
    0: refresh,
    1: setRefresh
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: displayMode,
    1: setDisplayMode
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: avaliable,
    1: setAvaliable
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const dynamic = [valueID, 'dynamic', avaliable];
  const manual = [valueID, 'manual', avaliable];
  const {
    0: pending,
    1: setPending
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const handleRefresh = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => setRefresh(true));
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function getData() {
      const db_data = {
        search: valueID
      };
      await axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(config.HTTP_API + '/store/search/mode', db_data).then(result => {
        result.data[0].upsell_mode ? setAvaliable(false) : setAvaliable(true);
        result.data[0].upsell_mode ? setDisplayMode(result.data[0].upsell_mode) : setDisplayMode('none');
        setPending(false);
      });
    }

    async function fetchData() {
      if (isInitialMount.current && valueID) {
        isInitialMount.current = false;
        await getData();
      }

      if (refresh) {
        await getData();
        setRefresh(false);
      }
    }

    fetchData();
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !pending ? __jsx("div", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].AnnotatedSection, {
    title: "Activate Upsell",
    description: "Click to activate the upsell. Only one mode can be activated each time, you can change the mode after disable the current mode."
  }, __jsx("div", {
    className: "flex-container"
  }, __jsx("div", {
    style: {
      "marginRight": "10px"
    }
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    sectioned: true,
    title: "Dynamic Mode"
  }, __jsx(_CreateScript_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    manual: dynamic,
    valueID: valueID,
    handleRefresh: handleRefresh
  }), __jsx("br", null), __jsx("p", null, "Upsell will contain the first product in customer's cart and ", __jsx("a", {
    href: "/faq-layout#recommend-product"
  }, "recommended products"), "."), __jsx("br", null))), __jsx("div", {
    style: {
      "marginLeft": "10px"
    }
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    sectioned: true,
    title: "Manual Mode"
  }, __jsx(_CreateScript_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    manual: manual,
    valueID: valueID,
    handleRefresh: handleRefresh
  }), __jsx("br", null), __jsx("p", null, "Upsell will contain selected products, which should be selected manually. ", __jsx("a", {
    href: "/faq-layout#mode"
  }, "Read more")), __jsx("br", null)))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    sectioned: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"].Item, {
    fill: true
  }, __jsx("h2", null, "Current activated upsell mode")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"].Item, null, displayMode != 'none' ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    status: "success"
  }, displayMode) : __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Badge"], null, displayMode))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].AnnotatedSection, {
    title: "Disable Upsell",
    description: "Temporarily disable all functions."
  }, __jsx(_DeleteScript__WEBPACK_IMPORTED_MODULE_5__["default"], {
    valueID: valueID,
    handleRefresh: handleRefresh
  })), __jsx("hr", null)) : null);
}

/* harmony default export */ __webpack_exports__["default"] = (ScriptComponent);

/***/ }),

/***/ "./client/css/AppStyle.css":
/*!*********************************!*\
  !*** ./client/css/AppStyle.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/annotated-layout.js":
/*!***********************************!*\
  !*** ./pages/annotated-layout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _client_components_CreateDiscount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client/components/CreateDiscount */ "./client/components/CreateDiscount.js");
/* harmony import */ var _client_components_ScriptComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client/components/ScriptComponent */ "./client/components/ScriptComponent.js");
/* harmony import */ var _client_components_ProductPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client/components/ProductPicker */ "./client/components/ProductPicker.js");
/* harmony import */ var _client_components_FirstAuto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../client/components/FirstAuto */ "./client/components/FirstAuto.js");
/* harmony import */ var _server_config_appBasicQuery_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../server/config/appBasicQuery.js */ "./server/config/appBasicQuery.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _client_css_AppStyle_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../client/css/AppStyle.css */ "./client/css/AppStyle.css");
/* harmony import */ var _client_css_AppStyle_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_client_css_AppStyle_css__WEBPACK_IMPORTED_MODULE_8__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const config = __webpack_require__(/*! ../server/config/httpConfig.js */ "./server/config/httpConfig.js");



function AnnotatedLayout() {
  const {
    0: shopId,
    1: setShopId
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: refresh,
    1: setRefresh
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    error,
    data
  } = Object(react_apollo__WEBPACK_IMPORTED_MODULE_7__["useQuery"])(_server_config_appBasicQuery_js__WEBPACK_IMPORTED_MODULE_6__["GET_SHOP_ID"]);
  if (data && !shopId) setShopId(config.ExtractId(data.shop.id));
  return __jsx("div", null, __jsx("div", {
    className: "navigationMain"
  }, __jsx("div", null, __jsx("p", null, __jsx("a", {
    href: "/index"
  }, "Front Page"))), __jsx("div", null, __jsx("p", null, __jsx("a", {
    style: {
      'color': '#5c6ac4'
    },
    href: "/annotated-layout"
  }, "Setting"))), __jsx("div", null, __jsx("p", null, __jsx("a", {
    href: "/design-layout"
  }, "Design"))), __jsx("div", null, __jsx("p", null, __jsx("a", {
    href: "/analytics-layout"
  }, "Analytics"))), __jsx("div", null, __jsx("p", null, __jsx("a", {
    href: "/faq-layout"
  }, "FAQ")))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Page"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Frame"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_client_components_ScriptComponent__WEBPACK_IMPORTED_MODULE_3__["default"], {
    valueID: shopId
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].AnnotatedSection, {
    title: "Upsell Discount",
    description: "Create and change current upsell discount. Put Discount percentage = 0 , Coupon code = (add a space) to disable discount."
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    sectioned: true
  }, __jsx(_client_components_CreateDiscount__WEBPACK_IMPORTED_MODULE_2__["default"], {
    valueID: shopId
  }))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].AnnotatedSection, {
    title: "Product Picker - Manual Mode",
    description: "Only works if the mode is on Manual. Up to 4 products can be picked each time."
  }, __jsx(_client_components_ProductPicker__WEBPACK_IMPORTED_MODULE_4__["default"], {
    valueID: shopId
  })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].AnnotatedSection, {
    title: "Auto First Product - Manual Mode",
    description: "Only works if the mode is on Manual. The first product in upsell will be the first product from customer's cart."
  }, __jsx(_client_components_FirstAuto__WEBPACK_IMPORTED_MODULE_5__["default"], {
    valueID: shopId
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (AnnotatedLayout);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvQ3JlYXRlRGlzY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvQ3JlYXRlU2NyaXB0LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0RlbGV0ZVNjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9GaXJzdEF1dG8uanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvUHJvZHVjdExpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvUHJvZHVjdFBpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9TY3JpcHRDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYW5ub3RhdGVkLWxheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvY29uZmlnL2FwcEJhc2ljUXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2NvbmZpZy9odHRwQ29uZmlnLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYXBvbGxvXCIiXSwibmFtZXMiOlsiY29uZmlnIiwicmVxdWlyZSIsIkNyZWF0ZURpc2NvdW50IiwidmFsdWVJRCIsImlzSW5pdGlhbE1vdW50IiwidXNlUmVmIiwicmVmcmVzaCIsInNldFJlZnJlc2giLCJ1c2VTdGF0ZSIsImRpc2NvdW50Iiwic2V0RGlzY291bnQiLCJjb3Vwb24iLCJzZXRDb3Vwb24iLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImRpc3BsYXlDb2RlIiwic2V0RGlzcGxheUNvZGUiLCJlcnJvck1zZ0QiLCJzZXRFcnJvck1zZ0QiLCJlcnJvck1zZ0MiLCJzZXRFcnJvck1zZ0MiLCJzaG93VG9hc3QiLCJzZXRUb2FzdCIsImhhbmRsZVN1Ym1pdCIsImVycm9yIiwiZGlzY291bnRFcnJvciIsImRhdGEiLCJkaXNjb3VudERhdGEiLCJ1c2VNdXRhdGlvbiIsIkNSRUFURV9ESVNDT1VOVCIsImhhbmRsZURpc2NvdW50Q2hhbmdlIiwidmFsdWUiLCJoYW5kbGVDb3Vwb25DaGFuZ2UiLCJ0b2dnbGVUb2FzdCIsInRvYXN0TWFya3VwIiwidXNlRWZmZWN0IiwiZ2V0RGF0YSIsInNlYXJjaF9kYXRhIiwic2VhcmNoIiwiYXhpb3MiLCJwb3N0IiwiSFRUUF9BUEkiLCJ0aGVuIiwicmVzIiwiZGlzY291bnRfY29kZSIsImZldGNoRGF0YSIsImN1cnJlbnQiLCJjb250ZW50Iiwib25BY3Rpb24iLCJ2YXJpYWJsZXMiLCJiYXNpY0NvZGVEaXNjb3VudCIsInRpdGxlIiwiY29kZSIsInN0YXJ0c0F0IiwiY3VzdG9tZXJTZWxlY3Rpb24iLCJhbGwiLCJjdXN0b21lckdldHMiLCJwZXJjZW50YWdlIiwiaXRlbXMiLCJkYl9kYXRhIiwiZGlzY291bnRfdmFsdWUiLCJwdXQiLCJnZXRVcmwiLCJzIiwiQ3JlYXRlU2NyaXB0IiwicHJvcHMiLCJDUkVBVEVfU0NSSVBUIiwicGVuZGluZyIsInNldFBlbmRpbmciLCJjb25zb2xlIiwibG9nIiwibWFudWFsIiwiaW5wdXQiLCJkaXNwbGF5U2NvcGUiLCJzcmMiLCJzY3JpcHRfaWQiLCJFeHRyYWN0SWQiLCJzY3JpcHRUYWdDcmVhdGUiLCJzY3JpcHRUYWciLCJpZCIsInVwc2VsbF9tb2RlIiwiaGFuZGxlUmVmcmVzaCIsIkRlbGV0ZVNjcmlwdCIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInNjcmlwdElEIiwic2V0U2NyaXB0SUQiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJERUxFVEVfU0NSSVBUIiwiaGFuZGxlQ2hhbmdlIiwidXNlQ2FsbGJhY2siLCJDb21iaW5lSWQiLCJkZWxldGVfZGF0YSIsInJlc3VsdCIsIkZpcnN0QXV0byIsImhhbmRsZVRvZ2dsZSIsImNvbnRlbnRTdGF0dXMiLCJmaXJzdF9hdXRvIiwiUHJvZHVjdExpc3QiLCJwcm9kdWN0QXJyYXkiLCJzZXRQcm9kdWN0QXJyYXkiLCJ1c2VDb250ZXh0IiwiUmVmcmVzaCIsInAxIiwic2V0UDEiLCJwMiIsInNldFAyIiwicDMiLCJzZXRQMyIsInA0Iiwic2V0UDQiLCJwcm9kdWN0X2ZpcnN0IiwicHJvZHVjdF9zZWNvbmQiLCJwcm9kdWN0X3RoaXJkIiwicHJvZHVjdF9mb3J0aCIsIm1hcmdpbkJvdHRvbSIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsIlByb2R1Y3RQaWNrZXIiLCJvcGVuIiwic2V0T3BlbiIsInJlc291cmNlcyIsInNlbGVjdGlvbiIsImxlbmd0aCIsImhhbmRsZSIsIlNjcmlwdENvbXBvbmVudCIsImRpc3BsYXlNb2RlIiwic2V0RGlzcGxheU1vZGUiLCJhdmFsaWFibGUiLCJzZXRBdmFsaWFibGUiLCJkeW5hbWljIiwiQW5ub3RhdGVkTGF5b3V0Iiwic2hvcElkIiwic2V0U2hvcElkIiwidXNlUXVlcnkiLCJHRVRfU0hPUF9JRCIsInNob3AiLCJncWwiLCJTRUFSQ0hfT1JERVJTX1VQU0VMTCIsIlNFQVJDSF9PUkRFUlNfVE9UQUwiLCJDUkVBVEVfUkVDVVJSSU5HIiwiR0VUX1BST0RVQ1RTX0JZX0lEIiwibW9kdWxlIiwiZXhwb3J0cyIsInN0ciIsIm1hdGNoZXMiLCJtYXRjaCIsInN0cjEiLCJjb25jYXQiLCJDb21iaW5lUElEIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiJwYWdlcy9hbm5vdGF0ZWQtbGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hbm5vdGF0ZWQtbGF5b3V0LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLHVzZUVmZmVjdCx1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgRm9ybSxcclxuICBGb3JtTGF5b3V0LFxyXG4gIFRleHRGaWVsZCxcclxuICBUb2FzdCxcclxuICBQYWdlQWN0aW9ucyxcclxuICBCYWRnZSxcclxuICBTdGFjayxcclxufSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge0NSRUFURV9ESVNDT1VOVH0gZnJvbSAnLi4vLi4vc2VydmVyL2NvbmZpZy9hcHBCYXNpY1F1ZXJ5LmpzJztcclxuY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi4vLi4vc2VydmVyL2NvbmZpZy9odHRwQ29uZmlnLmpzJyk7XHJcblxyXG5mdW5jdGlvbiBDcmVhdGVEaXNjb3VudCh7dmFsdWVJRH0pIHtcclxuICBjb25zdCBpc0luaXRpYWxNb3VudCA9IHVzZVJlZih0cnVlKTtcclxuICBjb25zdCBbcmVmcmVzaCwgc2V0UmVmcmVzaF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Rpc2NvdW50LCBzZXREaXNjb3VudF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtjb3Vwb24sIHNldENvdXBvbl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2Rpc3BsYXlDb2RlLCBzZXREaXNwbGF5Q29kZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtlcnJvck1zZ0QsIHNldEVycm9yTXNnRF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtlcnJvck1zZ0MsIHNldEVycm9yTXNnQ10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtzaG93VG9hc3QsIHNldFRvYXN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaGFuZGxlU3VibWl0LHtlcnJvcjpkaXNjb3VudEVycm9yLCBkYXRhOmRpc2NvdW50RGF0YX1dID0gdXNlTXV0YXRpb24oQ1JFQVRFX0RJU0NPVU5UKTtcclxuICBjb25zdCBoYW5kbGVEaXNjb3VudENoYW5nZSA9ICh2YWx1ZSkgPT4gc2V0RGlzY291bnQodmFsdWUpO1xyXG4gIGNvbnN0IGhhbmRsZUNvdXBvbkNoYW5nZSA9ICh2YWx1ZSkgPT4gc2V0Q291cG9uKHZhbHVlKTtcclxuICBjb25zdCB0b2dnbGVUb2FzdCA9ICgpID0+IHNldFRvYXN0KCFzaG93VG9hc3QpO1xyXG4gIGNvbnN0IHRvYXN0TWFya3VwID0gc2hvd1RvYXN0ID8gKFxyXG4gICAgICAgIDxUb2FzdCBjb250ZW50PXttZXNzYWdlfSBvbkRpc21pc3M9e3RvZ2dsZVRvYXN0fSBEaWR1cmF0aW9uPXsyNTAwfSAvPlxyXG4gICAgKSA6IG51bGw7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXREYXRhKCkge1xyXG4gICAgICBjb25zdCBzZWFyY2hfZGF0YSA9IHtzZWFyY2g6dmFsdWVJRH07XHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoY29uZmlnLkhUVFBfQVBJICsgJy9zdG9yZS9zZWFyY2gvZGlzY291bnQnLCBzZWFyY2hfZGF0YSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgc2V0RGlzcGxheUNvZGUocmVzLmRhdGFbMF0uZGlzY291bnRfY29kZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xyXG4gICAgICBpZiAoaXNJbml0aWFsTW91bnQuY3VycmVudCAmJiB2YWx1ZUlEKSB7XHJcbiAgICAgICAgaXNJbml0aWFsTW91bnQuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICAgIGF3YWl0IGdldERhdGEoKTtcclxuICAgICAgfVxyXG4gICAgICBpZighaXNJbml0aWFsTW91bnQuY3VycmVudCAmJiByZWZyZXNoKSB7XHJcbiAgICAgICAgYXdhaXQgZ2V0RGF0YSgpO1xyXG4gICAgICAgIHNldFJlZnJlc2goZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICB7dG9hc3RNYXJrdXB9XHJcbiAgICAgIDxGb3JtPlxyXG4gICAgICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBpZD1cImRpc2NvdW50X3BlcmNlbnRhZ2VcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwiMjBcIlxyXG4gICAgICAgICAgICB2YWx1ZT17ZGlzY291bnR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVEaXNjb3VudENoYW5nZX1cclxuICAgICAgICAgICAgbGFiZWw9XCJEaXNjb3VudCBwZXJjZW50YWdlXCJcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIGVycm9yPXtlcnJvck1zZ0R9Lz5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgaWQ9XCJjb3Vwb25cIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwiREVBTDIwXCJcclxuICAgICAgICAgICAgdmFsdWU9e2NvdXBvbn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNvdXBvbkNoYW5nZX1cclxuICAgICAgICAgICAgbGFiZWw9XCJDb3Vwb24gY29kZVwiXHJcbiAgICAgICAgICAgIGVycm9yPXtlcnJvck1zZ0N9Lz5cclxuICAgICAgICAgIDxTdGFjaz5cclxuICAgICAgICAgICAgPFN0YWNrLkl0ZW0gZmlsbD5cclxuICAgICAgICAgICAgICA8aDI+Q3VycmVudCBhY3RpdmF0ZWQgY291cG9uIGNvZGU8L2gyPlxyXG4gICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgIDxTdGFjay5JdGVtPlxyXG5cdCAgXHQ8QmFkZ2Ugc3RhdHVzPVwic3VjY2Vzc1wiPntkaXNwbGF5Q29kZX08L0JhZGdlPlxyXG4gICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XHJcbiAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgPFBhZ2VBY3Rpb25zXHJcbiAgICAgICAgICAgIHByaW1hcnlBY3Rpb249e1tcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnU3VibWl0JyxcclxuICAgICAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldEVycm9yTXNnQygnJyk7XHJcbiAgICAgICAgICAgICAgICAgIHNldEVycm9yTXNnRCgnJyk7XHJcbiAgICAgICAgICAgICAgICAgIGRpc2NvdW50JiZjb3Vwb24gP1xyXG4gICAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzaWNDb2RlRGlzY291bnQ6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOmNvdXBvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlOmNvdXBvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydHNBdDpcIjIwMTktMDEtMDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lclNlbGVjdGlvbjp7YWxsOnRydWV9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyR2V0czp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTp7cGVyY2VudGFnZTpkaXNjb3VudC8xMDB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6e2FsbDp0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oYXN5bmMoe2RhdGF9KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE1lc3NhZ2UoJ1N1Y2Nlc3NmdWxseSBDcmVhdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlVG9hc3QoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYl9kYXRhID0ge2Rpc2NvdW50X2NvZGU6IGNvdXBvbixkaXNjb3VudF92YWx1ZTpkaXNjb3VudH07XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgYXhpb3MucHV0KGNvbmZpZy5IVFRQX0FQSSArICcvc3RvcmUvJyArIHZhbHVlSUQsIGRiX2RhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERpc2NvdW50KCcnKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDb3Vwb24oJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFJlZnJlc2godHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgZGlzY291bnQgPyBzZXRFcnJvck1zZ0MoJ0Rpc2NvdW50IGNvZGUgaXMgcmVxdWlyZWQnKSA6IHNldEVycm9yTXNnRCgnRGlzY291bnQgaXMgcmVxdWlyZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtTGF5b3V0PlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVEaXNjb3VudDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLHVzZVJlZix1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBUb2FzdCxcclxuICBCdXR0b24sXHJcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtDUkVBVEVfU0NSSVBUfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY29uZmlnL2FwcEJhc2ljUXVlcnkuanMnO1xyXG5jb25zdCBjb25maWcgPSByZXF1aXJlKCcuLi8uLi9zZXJ2ZXIvY29uZmlnL2h0dHBDb25maWcuanMnKTtcclxuXHJcbmZ1bmN0aW9uIGdldFVybChzKSB7XHJcbiAgc3dpdGNoIChzKSB7XHJcbiAgICBjYXNlICdkeW5hbWljJzogcmV0dXJuICdodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDMxMy8xNDQ3LzcxODgvZmlsZXMvTWFnaWNELXY3LmpzP3Y9MTYwMDExNTkzMyc7XHJcbiAgICBjYXNlICdtYW51YWwnOiByZXR1cm4gJ2h0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8wMzEzLzE0NDcvNzE4OC9maWxlcy9NYWdpY00tdjcuanM/dj0xNjAwMTE1OTMzJztcclxuICAgIGRlZmF1bHQ6IG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBDcmVhdGVTY3JpcHQocHJvcHMpIHtcclxuICBjb25zdCBpc0luaXRpYWxNb3VudCA9IHVzZVJlZih0cnVlKTtcclxuICBjb25zdCBbc2hvd1RvYXN0LCBzZXRUb2FzdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbaGFuZGxlU3VibWl0LHtlcnJvcjpkaXNjb3VudEVycm9yLCBkYXRhOmRpc2NvdW50RGF0YX1dID0gdXNlTXV0YXRpb24oQ1JFQVRFX1NDUklQVCk7XHJcbiAgY29uc3QgW3JlZnJlc2gsIHNldFJlZnJlc2hdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHRvZ2dsZVRvYXN0ID0gKCkgPT4gc2V0VG9hc3QoIXNob3dUb2FzdCk7XHJcbiAgY29uc3QgdG9hc3RNYXJrdXAgPSBzaG93VG9hc3QgPyAoXHJcbiAgICAgICAgPFRvYXN0IGNvbnRlbnQ9e21lc3NhZ2V9IG9uRGlzbWlzcz17dG9nZ2xlVG9hc3R9IERpZHVyYXRpb249ezE1MDB9IC8+XHJcbiAgICApIDogbnVsbDtcclxuICBjb25zdCBbcGVuZGluZywgc2V0UGVuZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbnVzZUVmZmVjdCgoKSA9PiB7XHJcbmlmIChpc0luaXRpYWxNb3VudC5jdXJyZW50ICYmIHByb3BzKSB7XHJcbiAgICAgICAgc2V0UGVuZGluZyhmYWxzZSk7XHJcbmlzSW5pdGlhbE1vdW50LmN1cnJlbnQgPSBmYWxzZTtcclxuY29uc29sZS5sb2coJ3NzcycscHJvcHMpXHJcbiAgICAgIH1cclxuXHJcbn0pO1xyXG5cclxuICByZXR1cm4gKFxyXG48PlxyXG57IXBlbmRpbmcgP1xyXG4gICAgPGRpdj5cclxuICAgICAge3RvYXN0TWFya3VwfVxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgIGRpc2FibGVkPXshcHJvcHMubWFudWFsWzJdfVxyXG4gICAgICBwcmltYXJ5XHJcbiAgICAgIG9uQ2xpY2sgPSB7KCkgPT4ge1xyXG4gICAgICAgIGhhbmRsZVN1Ym1pdCh7XHJcbiAgICAgICAgICB2YXJpYWJsZXM6e1xyXG4gICAgICAgICAgICBpbnB1dDp7XHJcbiAgICAgICAgICAgICAgZGlzcGxheVNjb3BlOiAnT1JERVJfU1RBVFVTJyxcclxuICAgICAgICAgICAgICBzcmM6Z2V0VXJsKHByb3BzLm1hbnVhbFsxXSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4oYXN5bmMgKHtkYXRhfSk9PntcclxuICAgICAgICAgIHNldE1lc3NhZ2UoJ1N1Y2Nlc3NmdWxseSBJbnN0YWxsZWQhJyk7XHJcbiAgICAgICAgICB0b2dnbGVUb2FzdCgpO1xyXG4gICAgICAgICAgY29uc3QgZGJfZGF0YSA9IHtzY3JpcHRfaWQ6IGNvbmZpZy5FeHRyYWN0SWQoZGF0YS5zY3JpcHRUYWdDcmVhdGUuc2NyaXB0VGFnLmlkKSx1cHNlbGxfbW9kZTpwcm9wcy5tYW51YWxbMV19O1xyXG4gICAgICAgICAgYXdhaXQgYXhpb3MucHV0KGNvbmZpZy5IVFRQX0FQSSArICcvc3RvcmUvJyArIHByb3BzLnZhbHVlSUQsIGRiX2RhdGEpO1xyXG4gICAgICAgICAgcHJvcHMuaGFuZGxlUmVmcmVzaCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9fT5BY3RpdmF0ZTwvQnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbjpcclxubnVsbFxyXG59XHJcbjwvPlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlU2NyaXB0O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsdXNlRWZmZWN0LHVzZVJlZix1c2VDb250ZXh0LHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIFRvYXN0LFxyXG4gIEJ1dHRvbixcclxuICBNb2RhbCxcclxuICBUZXh0Q29udGFpbmVyXHJcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5LHVzZU11dGF0aW9uIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtERUxFVEVfU0NSSVBUfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY29uZmlnL2FwcEJhc2ljUXVlcnkuanMnO1xyXG5jb25zdCBjb25maWcgPSByZXF1aXJlKCcuLi8uLi9zZXJ2ZXIvY29uZmlnL2h0dHBDb25maWcuanMnKTtcclxuXHJcbmZ1bmN0aW9uIERlbGV0ZVNjcmlwdChwcm9wcykge1xyXG4gIGNvbnN0IGlzSW5pdGlhbE1vdW50ID0gdXNlUmVmKHRydWUpO1xyXG4gIGNvbnN0IFtzaG93VG9hc3QsIHNldFRvYXN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcmVmcmVzaCwgc2V0UmVmcmVzaF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtzY3JpcHRJRCwgc2V0U2NyaXB0SURdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgdG9nZ2xlVG9hc3QgPSAoKSA9PiBzZXRUb2FzdCghc2hvd1RvYXN0KTtcclxuICBjb25zdCB0b2FzdE1hcmt1cCA9IHNob3dUb2FzdCA/IChcclxuICAgICAgICA8VG9hc3QgY29udGVudD17bWVzc2FnZX0gb25EaXNtaXNzPXt0b2dnbGVUb2FzdH0gRGlkdXJhdGlvbj17MTUwMH0gLz5cclxuICAgICkgOiBudWxsO1xyXG4gIGNvbnN0IFtoYW5kbGVTdWJtaXQse2Vycm9yOmRpc2NvdW50RXJyb3IsIGRhdGE6ZGlzY291bnREYXRhfV0gPSB1c2VNdXRhdGlvbihERUxFVEVfU0NSSVBUKTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSB1c2VDYWxsYmFjaygoKSA9PiBzZXRBY3RpdmUoIWFjdGl2ZSksIFthY3RpdmVdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XHJcbiAgICAgIGNvbnN0IHNlYXJjaF9kYXRhID0ge3NlYXJjaDpwcm9wcy52YWx1ZUlEfTtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdChjb25maWcuSFRUUF9BUEkgKyAnL3N0b3JlL3NlYXJjaC9zY3JpcHRJRCcsIHNlYXJjaF9kYXRhKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBzZXRTY3JpcHRJRChyZXMuZGF0YVswXS5zY3JpcHRfaWQpO1xyXG4gICAgICAgIHJlcy5kYXRhWzBdLnNjcmlwdF9pZCA/IHNldFN0YXR1cyhmYWxzZSkgOiBzZXRTdGF0dXModHJ1ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCl7XHJcbiAgICAgIGlmIChpc0luaXRpYWxNb3VudC5jdXJyZW50ICYmIHByb3BzKSB7XHJcbiAgICAgICAgaXNJbml0aWFsTW91bnQuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICAgIGF3YWl0IGdldERhdGEoKTtcclxuICAgICAgfVxyXG4gICAgICBpZihyZWZyZXNoKSB7XHJcbiAgICAgICAgYXdhaXQgZ2V0RGF0YSgpO1xyXG4gICAgICAgIHNldFJlZnJlc2goZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHt0b2FzdE1hcmt1cH1cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICBkZXN0cnVjdGl2ZVxyXG4gICAgICBkaXNhYmxlZD17c3RhdHVzfVxyXG4gICAgICBvbkNsaWNrPXtoYW5kbGVDaGFuZ2V9PkRpc2FibGU8L0J1dHRvbj5cclxuXHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICBvcGVuPXthY3RpdmV9XHJcbiAgICAgIG9uQ2xvc2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgdGl0bGU9XCJQYXVzZSBhbGwgdGhlIGZ1bmN0aW9uc1wiXHJcbiAgICAgIHNlY29uZGFyeUFjdGlvbnM9e3tcclxuICAgICAgICBjb250ZW50OidDYW5jZWwnLFxyXG4gICAgICAgIG9uQWN0aW9uOiBoYW5kbGVDaGFuZ2UsXHJcbiAgICAgIH19XHJcbiAgICAgIHByaW1hcnlBY3Rpb249e3tcclxuICAgICAgICBjb250ZW50OidEaXNhYmxlJyxcclxuICAgICAgICBvbkFjdGlvbjogKCkgPT4ge1xyXG4gICAgICAgICAgaGFuZGxlU3VibWl0KHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOntcclxuICAgICAgICAgICAgICBpZDogY29uZmlnLkNvbWJpbmVJZChzY3JpcHRJRClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSkudGhlbihhc3luYyAoe2RhdGF9KT0+e1xyXG4gICAgICAgICAgICBoYW5kbGVDaGFuZ2UoKTtcclxuICAgICAgICAgICAgc2V0TWVzc2FnZSgnU3VjY2Vzc2Z1bGx5IERpc2FibGVkIScpO1xyXG4gICAgICAgICAgICB0b2dnbGVUb2FzdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBkZWxldGVfZGF0YSA9IHtzY3JpcHRfaWQ6JycsdXBzZWxsX21vZGU6Jyd9O1xyXG4gICAgICAgICAgICBhd2FpdCBheGlvcy5wdXQoY29uZmlnLkhUVFBfQVBJICsgJy9zdG9yZS8nICsgcHJvcHMudmFsdWVJRCwgZGVsZXRlX2RhdGEpLnRoZW4ocmVzdWx0PT57XHJcbiAgICAgICAgICAgICAgc2V0U3RhdHVzKHRydWUpO1xyXG4gICAgICAgICAgICAgIHNldFJlZnJlc2godHJ1ZSk7XHJcblx0XHRwcm9wcy5oYW5kbGVSZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgIDxNb2RhbC5TZWN0aW9uPlxyXG4gICAgICAgIDxUZXh0Q29udGFpbmVyPlxyXG4gICAgICAgICAgPHA+WW91ciBkYXRhIHdpbGwgYmUgc3RvcmVkLCB5b3UgY2FuIGFjdGl2YXRlIHRoZSB1cHNlbGwgYmFjayBhdCBhbnl0aW1lIG9yIHN3aXRjaCB0byBhbm90aGVyIHVwc2VsbCBtb2RlLjwvcD5cclxuICAgICAgICA8L1RleHRDb250YWluZXI+XHJcbiAgICAgIDwvTW9kYWwuU2VjdGlvbj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBEZWxldGVTY3JpcHQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VFZmZlY3QsdXNlUmVmLHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENhcmQsIEJ1dHRvbixTZXR0aW5nVG9nZ2xlIH0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCAnLi4vY3NzL0FwcFN0eWxlLmNzcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoJy4uLy4uL3NlcnZlci9jb25maWcvaHR0cENvbmZpZy5qcycpO1xyXG5cclxuZnVuY3Rpb24gRmlyc3RBdXRvKHt2YWx1ZUlEfSkge1xyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlVG9nZ2xlID0gdXNlQ2FsbGJhY2soKCkgPT4gc2V0QWN0aXZlKChhY3RpdmUpID0+ICFhY3RpdmUpLCBbXSk7XHJcbmNvbnN0IGNvbnRlbnRTdGF0dXMgPSBhY3RpdmUgPyAnRGlzYWJsZScgOiAnRW5hYmxlJztcclxuY29uc3QgaXNJbml0aWFsTW91bnQgPSB1c2VSZWYodHJ1ZSk7XHJcblxyXG51c2VFZmZlY3QoKCkgPT4ge1xyXG5hc3luYyBmdW5jdGlvbiBnZXREYXRhKCkge1xyXG4gICAgICBjb25zdCBkYl9kYXRhID0ge3NlYXJjaDp2YWx1ZUlEfTtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdChjb25maWcuSFRUUF9BUEkgKyAnL3N0b3JlL3NlYXJjaC9maXJzdGF1dG8nLCBkYl9kYXRhKS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgcmVzdWx0LmRhdGFbMF0uZmlyc3RfYXV0byA9PTEgPyBzZXRBY3RpdmUodHJ1ZSkgOiBzZXRBY3RpdmUoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xyXG4gICAgICBpZiAoaXNJbml0aWFsTW91bnQuY3VycmVudCAmJiB2YWx1ZUlEKSB7XHJcbiAgICAgICAgaXNJbml0aWFsTW91bnQuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICAgIGdldERhdGEoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbn0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZD5cclxuICAgICAgPFNldHRpbmdUb2dnbGVcclxuXHRhY3Rpb249e3tcclxuXHQgIGNvbnRlbnQ6IGNvbnRlbnRTdGF0dXMsXHJcblx0IG9uQWN0aW9uOiBhc3luYyAoKSA9PiB7XHJcblx0ICBjb25zdCBkYl9kYXRhID0ge2ZpcnN0X2F1dG86IWFjdGl2ZX07XHJcblx0ICBhd2FpdCBheGlvcy5wdXQoY29uZmlnLkhUVFBfQVBJICsgJy9zdG9yZS8nICsgdmFsdWVJRCwgZGJfZGF0YSk7XHJcblx0ICAgIHNldEFjdGl2ZSghYWN0aXZlKTtcclxuXHR9XHJcblx0fX1cclxuXHRlbmFibGVkPXthY3RpdmV9XHJcblx0PlxyXG5cdExldCBmaXJzdCBwcm9kdWN0IGFsd2F5cyBiZSB0aGUgZmlyc3QgcHJvZHVjdCBmcm9tIHRoZSBjYXJ0XHJcblx0PC9TZXR0aW5nVG9nZ2xlPlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpcnN0QXV0bztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLHVzZUVmZmVjdCx1c2VSZWYsdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBDYXJkLFN0YWNrLEJhZGdlXHJcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtYXBvbGxvJztcclxuaW1wb3J0IHtHRVRfUFJPRFVDVFNfQllfSUR9IGZyb20gJy4uLy4uL3NlcnZlci9jb25maWcvYXBwQmFzaWNRdWVyeS5qcyc7XHJcbmltcG9ydCAnLi4vY3NzL0FwcFN0eWxlLmNzcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7UmVmcmVzaH0gZnJvbSAnLi9Qcm9kdWN0UGlja2VyLmpzJztcclxuY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi4vLi4vc2VydmVyL2NvbmZpZy9odHRwQ29uZmlnLmpzJyk7XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0TGlzdCAoe3ZhbHVlSUR9KSB7XHJcbiAgY29uc3QgaXNJbml0aWFsTW91bnQgPSB1c2VSZWYodHJ1ZSk7XHJcbiAgY29uc3QgW3Byb2R1Y3RBcnJheSwgc2V0UHJvZHVjdEFycmF5XSA9IHVzZVN0YXRlKCk7XHJcbiAgbGV0IHtyZWZyZXNoLCBzZXRSZWZyZXNofSA9IHVzZUNvbnRleHQoUmVmcmVzaCk7XHJcbiAgY29uc3QgW3AxLCBzZXRQMV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtwMiwgc2V0UDJdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbcDMsIHNldFAzXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3A0LCBzZXRQNF0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcclxuICAgICAgY29uc3QgZGJfZGF0YSA9IHtzZWFyY2g6dmFsdWVJRH07XHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoY29uZmlnLkhUVFBfQVBJICsgJy9zdG9yZS9zZWFyY2gvcHJvZHVjdHMnLCBkYl9kYXRhKS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgcmVzdWx0LmRhdGFbMF0ucHJvZHVjdF9maXJzdCA/IHNldFAxKHJlc3VsdC5kYXRhWzBdLnByb2R1Y3RfZmlyc3QpIDogbnVsbDtcclxuICAgICAgICByZXN1bHQuZGF0YVswXS5wcm9kdWN0X3NlY29uZCA/IHNldFAyKHJlc3VsdC5kYXRhWzBdLnByb2R1Y3Rfc2Vjb25kKSA6IG51bGw7XHJcbiAgICAgICAgcmVzdWx0LmRhdGFbMF0ucHJvZHVjdF90aGlyZCA/IHNldFAzKHJlc3VsdC5kYXRhWzBdLnByb2R1Y3RfdGhpcmQpIDogbnVsbDtcclxuICAgICAgICByZXN1bHQuZGF0YVswXS5wcm9kdWN0X2ZvcnRoID8gc2V0UDQocmVzdWx0LmRhdGFbMF0ucHJvZHVjdF9mb3J0aCkgOiBudWxsO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpe1xyXG4gICAgICBpZiAoaXNJbml0aWFsTW91bnQuY3VycmVudCAmJiB2YWx1ZUlEKSB7XHJcbiAgICAgICBpc0luaXRpYWxNb3VudC5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgICBhd2FpdCBnZXREYXRhKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYoIWlzSW5pdGlhbE1vdW50LmN1cnJlbnQgJiYgcmVmcmVzaCkge1xyXG4gICAgICAgIHNldFAxKCcnKTtzZXRQMignJyk7c2V0UDMoJycpO3NldFA0KCcnKTtcclxuICAgICAgICBhd2FpdCBnZXREYXRhKCk7XHJcbiAgICAgICAgc2V0UmVmcmVzaChmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWxpc3RcIj5cclxuICAgICAgPGgyIHN0eWxlPXt7bWFyZ2luQm90dG9tOicxMHB4J319PlNlbGVjdGVkIHByb2R1Y3RzPC9oMj5cclxuICAgICAgPFN0YWNrPlxyXG4gICAgICAgIDxTdGFjay5JdGVtPjxCYWRnZSBzdGF0dXM9XCJzdWNjZXNzXCI+e3AxfTwvQmFkZ2U+PC9TdGFjay5JdGVtPlxyXG4gICAgICAgIDxTdGFjay5JdGVtPjxCYWRnZSBzdGF0dXM9XCJzdWNjZXNzXCI+e3AyfTwvQmFkZ2U+PC9TdGFjay5JdGVtPlxyXG4gICAgICAgIDxTdGFjay5JdGVtPjxCYWRnZSBzdGF0dXM9XCJzdWNjZXNzXCI+e3AzfTwvQmFkZ2U+PC9TdGFjay5JdGVtPlxyXG4gICAgICAgIDxTdGFjay5JdGVtPjxCYWRnZSBzdGF0dXM9XCJzdWNjZXNzXCI+e3A0fTwvQmFkZ2U+PC9TdGFjay5JdGVtPlxyXG4gICAgICA8L1N0YWNrPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExpc3Q7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBSZXNvdXJjZVBpY2tlciwgVGl0bGVCYXJcclxufSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0JztcclxuaW1wb3J0IHsgQ2FyZCwgQnV0dG9uIH0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCAnLi4vY3NzL0FwcFN0eWxlLmNzcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBQcm9kdWN0TGlzdCBmcm9tICcuL1Byb2R1Y3RMaXN0LmpzJ1xyXG5jb25zdCBjb25maWcgPSByZXF1aXJlKCcuLi8uLi9zZXJ2ZXIvY29uZmlnL2h0dHBDb25maWcuanMnKTtcclxuaW1wb3J0ICcuLi9jc3MvQXBwU3R5bGUuY3NzJztcclxuZXhwb3J0IGNvbnN0IFJlZnJlc2ggPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0UGlja2VyKHt2YWx1ZUlEfSkge1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcmVmcmVzaCwgc2V0UmVmcmVzaF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgdmFyIGRiX2RhdGEgPSB7fTtcclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQgc2VjdGlvbmVkPlxyXG4gICAgICA8UmVmcmVzaC5Qcm92aWRlciB2YWx1ZT17e3JlZnJlc2gsIHNldFJlZnJlc2h9fT5cclxuICAgICAgICA8UHJvZHVjdExpc3QgdmFsdWVJRD17dmFsdWVJRH0vPlxyXG4gICAgICA8L1JlZnJlc2guUHJvdmlkZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1idG5cIj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgcHJpbWFyeVxyXG4gICAgICAgIG9uQ2xpY2sgPSB7KCkgPT4ge1xyXG4gICAgICAgICAgc2V0T3Blbih0cnVlKTtcclxuICAgICAgICB9fT5PcGVuIFByb2R1Y3QgUGlja2VyPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8UmVzb3VyY2VQaWNrZXJcclxuICAgICAgICByZXNvdXJjZVR5cGU9XCJQcm9kdWN0XCJcclxuICAgICAgICBzaG93VmFyaWFudHM9e2ZhbHNlfVxyXG4gICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgb25TZWxlY3Rpb249e2FzeW5jIChyZXNvdXJjZXMpID0+IHtcclxuICAgICAgICAgIHJlc291cmNlcy5zZWxlY3Rpb24ubGVuZ3RoID09PSAxID8gZGJfZGF0YSA9IHtwcm9kdWN0X2ZpcnN0OnJlc291cmNlcy5zZWxlY3Rpb25bMF0uaGFuZGxlLCBwcm9kdWN0X3NlY29uZDpudWxsLCBwcm9kdWN0X3RoaXJkOm51bGwsIHByb2R1Y3RfZm9ydGg6bnVsbH0gOiBudWxsO1xyXG4gICAgICAgICAgcmVzb3VyY2VzLnNlbGVjdGlvbi5sZW5ndGggPT09IDIgPyBkYl9kYXRhID0ge3Byb2R1Y3RfZmlyc3Q6cmVzb3VyY2VzLnNlbGVjdGlvblswXS5oYW5kbGUsIHByb2R1Y3Rfc2Vjb25kOnJlc291cmNlcy5zZWxlY3Rpb25bMV0uaGFuZGxlLCBwcm9kdWN0X3RoaXJkOm51bGwsIHByb2R1Y3RfZm9ydGg6bnVsbH0gOiBudWxsO1xyXG4gICAgICAgICAgcmVzb3VyY2VzLnNlbGVjdGlvbi5sZW5ndGggPT09IDMgPyBkYl9kYXRhID0ge3Byb2R1Y3RfZmlyc3Q6cmVzb3VyY2VzLnNlbGVjdGlvblswXS5oYW5kbGUsIHByb2R1Y3Rfc2Vjb25kOnJlc291cmNlcy5zZWxlY3Rpb25bMV0uaGFuZGxlLCBwcm9kdWN0X3RoaXJkOnJlc291cmNlcy5zZWxlY3Rpb25bMl0uaGFuZGxlLCBwcm9kdWN0X2ZvcnRoOm51bGx9IDogbnVsbDtcclxuICAgICAgICAgIHJlc291cmNlcy5zZWxlY3Rpb24ubGVuZ3RoID49IDQgPyBkYl9kYXRhID0ge3Byb2R1Y3RfZmlyc3Q6cmVzb3VyY2VzLnNlbGVjdGlvblswXS5oYW5kbGUsIHByb2R1Y3Rfc2Vjb25kOnJlc291cmNlcy5zZWxlY3Rpb25bMV0uaGFuZGxlLCBwcm9kdWN0X3RoaXJkOnJlc291cmNlcy5zZWxlY3Rpb25bMl0uaGFuZGxlLCBwcm9kdWN0X2ZvcnRoOnJlc291cmNlcy5zZWxlY3Rpb25bM10uaGFuZGxlfSA6IG51bGw7XHJcbiAgICAgICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgICAgICAgIGF3YWl0IGF4aW9zLnB1dChjb25maWcuSFRUUF9BUEkgKyAnL3N0b3JlLycgKyB2YWx1ZUlELCBkYl9kYXRhKTtcclxuICAgICAgICAgIHNldFJlZnJlc2godHJ1ZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBvbkNhbmNlbD17KCk9PnNldE9wZW4oZmFsc2UpfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RQaWNrZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VFZmZlY3QsdXNlUmVmLHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIENhcmQsXHJcbiAgQmFkZ2UsXHJcbiAgU3RhY2ssXHJcbkxheW91dFxyXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgQ3JlYXRlU2NyaXB0IGZyb20gJy4vQ3JlYXRlU2NyaXB0LmpzJztcclxuaW1wb3J0ICcuLi9jc3MvQXBwU3R5bGUuY3NzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi4vLi4vc2VydmVyL2NvbmZpZy9odHRwQ29uZmlnLmpzJyk7XHJcbmltcG9ydCBEZWxldGVTY3JpcHQgZnJvbSAnLi9EZWxldGVTY3JpcHQnO1xyXG5cclxuZnVuY3Rpb24gU2NyaXB0Q29tcG9uZW50KHt2YWx1ZUlEfSkge1xyXG4gIGNvbnN0IGlzSW5pdGlhbE1vdW50ID0gdXNlUmVmKHRydWUpO1xyXG4gIGNvbnN0IFtyZWZyZXNoLCBzZXRSZWZyZXNoXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZGlzcGxheU1vZGUsIHNldERpc3BsYXlNb2RlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2F2YWxpYWJsZSwgc2V0QXZhbGlhYmxlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IGR5bmFtaWMgPSBbdmFsdWVJRCwnZHluYW1pYycsYXZhbGlhYmxlXTtcclxuICBjb25zdCBtYW51YWwgPSBbdmFsdWVJRCwnbWFudWFsJyxhdmFsaWFibGVdO1xyXG4gIGNvbnN0IFtwZW5kaW5nLCBzZXRQZW5kaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuY29uc3QgaGFuZGxlUmVmcmVzaCA9IHVzZUNhbGxiYWNrKCgpID0+IHNldFJlZnJlc2godHJ1ZSkpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcclxuICAgICAgY29uc3QgZGJfZGF0YSA9IHtzZWFyY2g6dmFsdWVJRH07XHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoY29uZmlnLkhUVFBfQVBJICsgJy9zdG9yZS9zZWFyY2gvbW9kZScsIGRiX2RhdGEpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICByZXN1bHQuZGF0YVswXS51cHNlbGxfbW9kZSA/IHNldEF2YWxpYWJsZShmYWxzZSkgOiBzZXRBdmFsaWFibGUodHJ1ZSk7XHJcbiAgICAgICAgcmVzdWx0LmRhdGFbMF0udXBzZWxsX21vZGUgPyBzZXREaXNwbGF5TW9kZShyZXN1bHQuZGF0YVswXS51cHNlbGxfbW9kZSkgOiBzZXREaXNwbGF5TW9kZSgnbm9uZScpO1xyXG5cdHNldFBlbmRpbmcoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpe1xyXG4gICAgICBpZiAoaXNJbml0aWFsTW91bnQuY3VycmVudCAmJiB2YWx1ZUlEKSB7XHJcbiAgICAgICAgaXNJbml0aWFsTW91bnQuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICAgIGF3YWl0IGdldERhdGEoKTtcclxuICAgICAgfVxyXG4gICAgICBpZihyZWZyZXNoKSB7XHJcbiAgICAgICAgYXdhaXQgZ2V0RGF0YSgpO1xyXG4gICAgICAgIHNldFJlZnJlc2goZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuPD5cclxueyFwZW5kaW5nID9cclxuICAgIDxkaXY+XHJcbjxMYXlvdXQuQW5ub3RhdGVkU2VjdGlvblxyXG4gICAgICAgICAgICB0aXRsZT1cIkFjdGl2YXRlIFVwc2VsbFwiXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiQ2xpY2sgdG8gYWN0aXZhdGUgdGhlIHVwc2VsbC4gT25seSBvbmUgbW9kZSBjYW4gYmUgYWN0aXZhdGVkIGVhY2ggdGltZSwgeW91IGNhbiBjaGFuZ2UgdGhlIG1vZGUgYWZ0ZXIgZGlzYWJsZSB0aGUgY3VycmVudCBtb2RlLlwiPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tcIm1hcmdpblJpZ2h0XCI6XCIxMHB4XCJ9fT5cclxuICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZCB0aXRsZT1cIkR5bmFtaWMgTW9kZVwiPlxyXG4gICAgICAgICAgICA8Q3JlYXRlU2NyaXB0IG1hbnVhbD17ZHluYW1pY30gdmFsdWVJRD17dmFsdWVJRH0gaGFuZGxlUmVmcmVzaD17aGFuZGxlUmVmcmVzaH0vPlxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICA8cD5VcHNlbGwgd2lsbCBjb250YWluIHRoZSBmaXJzdCBwcm9kdWN0IGluIGN1c3RvbWVyJ3MgY2FydCBhbmQgPGEgaHJlZj1cIi9mYXEtbGF5b3V0I3JlY29tbWVuZC1wcm9kdWN0XCI+cmVjb21tZW5kZWQgcHJvZHVjdHM8L2E+LjwvcD5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7XCJtYXJnaW5MZWZ0XCI6XCIxMHB4XCJ9fT5cclxuICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZCB0aXRsZT1cIk1hbnVhbCBNb2RlXCI+XHJcbiAgICAgICAgICAgIDxDcmVhdGVTY3JpcHQgbWFudWFsPXttYW51YWx9IHZhbHVlSUQ9e3ZhbHVlSUR9IGhhbmRsZVJlZnJlc2g9e2hhbmRsZVJlZnJlc2h9Lz5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgPHA+VXBzZWxsIHdpbGwgY29udGFpbiBzZWxlY3RlZCBwcm9kdWN0cywgd2hpY2ggc2hvdWxkIGJlIHNlbGVjdGVkIG1hbnVhbGx5LiA8YSBocmVmPVwiL2ZhcS1sYXlvdXQjbW9kZVwiPlJlYWQgbW9yZTwvYT48L3A+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Q2FyZCBzZWN0aW9uZWQ+XHJcbiAgICAgICAgPFN0YWNrPlxyXG4gICAgICAgICAgPFN0YWNrLkl0ZW0gZmlsbD5cclxuICAgICAgICAgICAgPGgyPkN1cnJlbnQgYWN0aXZhdGVkIHVwc2VsbCBtb2RlPC9oMj5cclxuICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgIDxTdGFjay5JdGVtPlxyXG4gICAgICAgICAge2Rpc3BsYXlNb2RlICE9ICdub25lJyA/IChcclxuICAgICAgICAgICAgPEJhZGdlIHN0YXR1cz0nc3VjY2Vzcyc+e2Rpc3BsYXlNb2RlfTwvQmFkZ2U+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8QmFkZ2U+e2Rpc3BsYXlNb2RlfTwvQmFkZ2U+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9TdGFjay5JdGVtPlxyXG4gICAgICAgIDwvU3RhY2s+XHJcbiAgICAgIDwvQ2FyZD5cclxuPC9MYXlvdXQuQW5ub3RhdGVkU2VjdGlvbj5cclxuPExheW91dC5Bbm5vdGF0ZWRTZWN0aW9uXHJcbiAgICAgICAgICAgIHRpdGxlPVwiRGlzYWJsZSBVcHNlbGxcIlxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlRlbXBvcmFyaWx5IGRpc2FibGUgYWxsIGZ1bmN0aW9ucy5cIj5cclxuPERlbGV0ZVNjcmlwdCB2YWx1ZUlEPXt2YWx1ZUlEfSBoYW5kbGVSZWZyZXNoPXtoYW5kbGVSZWZyZXNofS8+XHJcbjwvTGF5b3V0LkFubm90YXRlZFNlY3Rpb24+XHJcbjxoci8+XHJcbiAgICA8L2Rpdj5cclxuOlxyXG5udWxsXHJcbn1cclxuPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY3JpcHRDb21wb25lbnQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBDYXJkLFxyXG4gIExheW91dCxcclxuICBQYWdlLFxyXG4gIEZyYW1lLFxyXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgQ3JlYXRlRGlzY291bnQgZnJvbSAnLi4vY2xpZW50L2NvbXBvbmVudHMvQ3JlYXRlRGlzY291bnQnO1xyXG5pbXBvcnQgU2NyaXB0Q29tcG9uZW50IGZyb20gJy4uL2NsaWVudC9jb21wb25lbnRzL1NjcmlwdENvbXBvbmVudCc7XHJcbmltcG9ydCBQcm9kdWN0UGlja2VyIGZyb20gJy4uL2NsaWVudC9jb21wb25lbnRzL1Byb2R1Y3RQaWNrZXInO1xyXG5pbXBvcnQgRmlyc3RBdXRvIGZyb20gJy4uL2NsaWVudC9jb21wb25lbnRzL0ZpcnN0QXV0byc7XHJcbmltcG9ydCB7R0VUX1NIT1BfSUR9IGZyb20gJy4uL3NlcnZlci9jb25maWcvYXBwQmFzaWNRdWVyeS5qcyc7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtYXBvbGxvJztcclxuY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi4vc2VydmVyL2NvbmZpZy9odHRwQ29uZmlnLmpzJyk7XHJcbmltcG9ydCAnLi4vY2xpZW50L2Nzcy9BcHBTdHlsZS5jc3MnO1xyXG5cclxuZnVuY3Rpb24gQW5ub3RhdGVkTGF5b3V0KCkge1xyXG4gIGNvbnN0IFtzaG9wSWQsIHNldFNob3BJZF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtyZWZyZXNoLCBzZXRSZWZyZXNoXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB7ZXJyb3IsIGRhdGF9ID0gdXNlUXVlcnkoR0VUX1NIT1BfSUQpO1xyXG4gIGlmKGRhdGEgJiYgIXNob3BJZCkgc2V0U2hvcElkKGNvbmZpZy5FeHRyYWN0SWQoZGF0YS5zaG9wLmlkKSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb25NYWluXCI+XHJcbiAgICAgIDxkaXY+PHA+PGEgaHJlZj1cIi9pbmRleFwiPkZyb250IFBhZ2U8L2E+PC9wPjwvZGl2PlxyXG4gICAgICA8ZGl2PjxwPjxhIHN0eWxlPXt7J2NvbG9yJzonIzVjNmFjNCd9fSBocmVmPVwiL2Fubm90YXRlZC1sYXlvdXRcIj5TZXR0aW5nPC9hPjwvcD48L2Rpdj5cclxuICAgICAgPGRpdj48cD48YSBocmVmPVwiL2Rlc2lnbi1sYXlvdXRcIj5EZXNpZ248L2E+PC9wPjwvZGl2PlxyXG4gICAgICA8ZGl2PjxwPjxhIGhyZWY9XCIvYW5hbHl0aWNzLWxheW91dFwiPkFuYWx5dGljczwvYT48L3A+PC9kaXY+XHJcbiAgICAgIDxkaXY+PHA+PGEgaHJlZj1cIi9mYXEtbGF5b3V0XCI+RkFRPC9hPjwvcD48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPFBhZ2U+XHJcbiAgICAgIDxGcmFtZT5cclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgPFNjcmlwdENvbXBvbmVudCB2YWx1ZUlEPXtzaG9wSWR9Lz5cclxuICAgICAgICAgIDxMYXlvdXQuQW5ub3RhdGVkU2VjdGlvblxyXG4gICAgICAgICAgICB0aXRsZT1cIlVwc2VsbCBEaXNjb3VudFwiXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiQ3JlYXRlIGFuZCBjaGFuZ2UgY3VycmVudCB1cHNlbGwgZGlzY291bnQuIFB1dCBEaXNjb3VudCBwZXJjZW50YWdlID0gMCAsIENvdXBvbiBjb2RlID0gKGFkZCBhIHNwYWNlKSB0byBkaXNhYmxlIGRpc2NvdW50LlwiPlxyXG4gICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XHJcbiAgICAgICAgICAgIDxDcmVhdGVEaXNjb3VudCB2YWx1ZUlEPXtzaG9wSWR9Lz5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9MYXlvdXQuQW5ub3RhdGVkU2VjdGlvbj5cclxuICAgICAgICAgIDxMYXlvdXQuQW5ub3RhdGVkU2VjdGlvblxyXG4gICAgICAgICAgICB0aXRsZT1cIlByb2R1Y3QgUGlja2VyIC0gTWFudWFsIE1vZGVcIlxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cIk9ubHkgd29ya3MgaWYgdGhlIG1vZGUgaXMgb24gTWFudWFsLiBVcCB0byA0IHByb2R1Y3RzIGNhbiBiZSBwaWNrZWQgZWFjaCB0aW1lLlwiPlxyXG4gICAgICAgICAgICA8UHJvZHVjdFBpY2tlciB2YWx1ZUlEPXtzaG9wSWR9Lz5cclxuICAgICAgICAgIDwvTGF5b3V0LkFubm90YXRlZFNlY3Rpb24+XHJcblx0PExheW91dC5Bbm5vdGF0ZWRTZWN0aW9uXHJcbiAgICAgICAgICAgIHRpdGxlPVwiQXV0byBGaXJzdCBQcm9kdWN0IC0gTWFudWFsIE1vZGVcIlxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cIk9ubHkgd29ya3MgaWYgdGhlIG1vZGUgaXMgb24gTWFudWFsLiBUaGUgZmlyc3QgcHJvZHVjdCBpbiB1cHNlbGwgd2lsbCBiZSB0aGUgZmlyc3QgcHJvZHVjdCBmcm9tIGN1c3RvbWVyJ3MgY2FydC5cIj5cclxuICAgICAgICAgICAgPEZpcnN0QXV0byB2YWx1ZUlEPXtzaG9wSWR9Lz5cclxuICAgICAgICAgIDwvTGF5b3V0LkFubm90YXRlZFNlY3Rpb24+XHJcblxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICA8L0ZyYW1lPlxyXG4gICAgPC9QYWdlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5ub3RhdGVkTGF5b3V0O1xyXG4iLCJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfU0hPUF9JRCA9IGdxbGBcclxucXVlcnkge1xyXG4gIHNob3Age1xyXG4gICAgaWRcclxuICB9XHJcbn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDUkVBVEVfRElTQ09VTlQgPSBncWxgXHJcbm11dGF0aW9uIGRpc2NvdW50Q29kZUJhc2ljQ3JlYXRlKCRiYXNpY0NvZGVEaXNjb3VudDogRGlzY291bnRDb2RlQmFzaWNJbnB1dCEpIHtcclxuICBkaXNjb3VudENvZGVCYXNpY0NyZWF0ZShiYXNpY0NvZGVEaXNjb3VudDogJGJhc2ljQ29kZURpc2NvdW50KSB7XHJcbiAgICBjb2RlRGlzY291bnROb2RlIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICAgIHVzZXJFcnJvcnMge1xyXG4gICAgICBjb2RlXHJcbiAgICAgIGZpZWxkXHJcbiAgICAgIG1lc3NhZ2VcclxuICAgIH1cclxuICB9XHJcbn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBERUxFVEVfU0NSSVBUID0gZ3FsYFxyXG5tdXRhdGlvbiBzY3JpcHRUYWdEZWxldGUoJGlkOiBJRCEpIHtcclxuICBzY3JpcHRUYWdEZWxldGUoaWQ6ICRpZCkge1xyXG4gICAgZGVsZXRlZFNjcmlwdFRhZ0lkXHJcbiAgICB1c2VyRXJyb3JzIHtcclxuICAgICAgZmllbGRcclxuICAgICAgbWVzc2FnZVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENSRUFURV9TQ1JJUFQgPSBncWxgXHJcbm11dGF0aW9uIHNjcmlwdFRhZ0NyZWF0ZSgkaW5wdXQ6IFNjcmlwdFRhZ0lucHV0ISkge1xyXG4gIHNjcmlwdFRhZ0NyZWF0ZShpbnB1dDogJGlucHV0KSB7XHJcbiAgICBzY3JpcHRUYWcge1xyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gICAgdXNlckVycm9ycyB7XHJcbiAgICAgIGZpZWxkXHJcbiAgICAgIG1lc3NhZ2VcclxuICAgIH1cclxuICB9XHJcbn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfT1JERVJTX1VQU0VMTCA9IGdxbGBcclxucXVlcnkgKCRxdWVyeTogU3RyaW5nKXtcclxuICBvcmRlcnMoZmlyc3Q6IDEwMCxxdWVyeTogJHF1ZXJ5KSB7XHJcbiAgICBlZGdlcyB7XHJcbiAgICAgIG5vZGUge1xyXG4gICAgICAgIHRvdGFsUHJpY2VTZXQge1xyXG4gICAgICAgICAgcHJlc2VudG1lbnRNb25leSB7XHJcbiAgICAgICAgICAgIGFtb3VudFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9PUkRFUlNfVE9UQUwgPSBncWxgXHJcbnF1ZXJ5ICgkcXVlcnk6IFN0cmluZyl7XHJcbiAgb3JkZXJzKGZpcnN0OiAxMDAscXVlcnk6ICRxdWVyeSkge1xyXG4gICAgZWRnZXMge1xyXG4gICAgICBub2RlIHtcclxuICAgICAgICB0b3RhbFByaWNlU2V0IHtcclxuICAgICAgICAgIHByZXNlbnRtZW50TW9uZXkge1xyXG4gICAgICAgICAgICBhbW91bnRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDUkVBVEVfUkVDVVJSSU5HID0gZ3FsYFxyXG5tdXRhdGlvbiBhcHBTdWJzY3JpcHRpb25DcmVhdGUoJG5hbWU6IFN0cmluZyEsICRsaW5lSXRlbXM6IFtBcHBTdWJzY3JpcHRpb25MaW5lSXRlbUlucHV0IV0hLCAkcmV0dXJuVXJsOiBVUkwhLCAkdHJpYWxEYXlzOiBJbnQpIHtcclxuICBhcHBTdWJzY3JpcHRpb25DcmVhdGUobmFtZTogJG5hbWUsIGxpbmVJdGVtczogJGxpbmVJdGVtcywgcmV0dXJuVXJsOiAkcmV0dXJuVXJsLCB0cmlhbERheXM6ICR0cmlhbERheXMpIHtcclxuYXBwU3Vic2NyaXB0aW9uIHtcclxuICAgICAgaWRcclxuICAgIH0gICAgXHJcbmNvbmZpcm1hdGlvblVybFxyXG4gICAgdXNlckVycm9ycyB7XHJcbiAgICAgIGZpZWxkXHJcbiAgICAgIG1lc3NhZ2VcclxuICAgIH1cclxuICB9XHJcbn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfUFJPRFVDVFNfQllfSUQgPSBncWxgXHJcbiAgcXVlcnkgZ2V0UHJvZHVjdHMoJGlkczogW0lEIV0hKSB7XHJcbiAgICBub2RlcyhpZHM6ICRpZHMpIHtcclxuICAgICAgLi4uIG9uIFByb2R1Y3Qge1xyXG4gICAgICAgIHRpdGxlXHJcbiAgICAgICAgaGFuZGxlXHJcbiAgICAgICAgZGVzY3JpcHRpb25IdG1sXHJcbiAgICAgICAgaWRcclxuICAgICAgICBpbWFnZXMoZmlyc3Q6IDEpIHtcclxuICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgb3JpZ2luYWxTcmNcclxuICAgICAgICAgICAgICBhbHRUZXh0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyaWFudHMoZmlyc3Q6IDEpIHtcclxuICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICBIVFRQX0FQSTogJ2h0dHBzOi8vYXBwLm1hZ2ljdXBzZWxsLmNvbScsXHJcbiAgRXh0cmFjdElkOiBmdW5jdGlvbihzdHIpe1xyXG4gICAgdmFyIG1hdGNoZXMgPSBzdHIubWF0Y2goLyhcXGQrKS8pO1xyXG4gICAgaWYobWF0Y2hlcykgcmV0dXJuIG1hdGNoZXNbMF07XHJcbiAgfSxcclxuICBDb21iaW5lSWQ6IGZ1bmN0aW9uKHN0cil7XHJcbiAgICB2YXIgc3RyMSA9IFwiZ2lkOi8vc2hvcGlmeS9TY3JpcHRUYWcvXCI7XHJcbiAgICBzdHIgPSBzdHIxLmNvbmNhdChzdHIpO1xyXG4gICAgcmV0dXJuIHN0cjtcclxuICB9LFxyXG4gIENvbWJpbmVQSUQ6IGZ1bmN0aW9uKHN0cil7XHJcbiAgICB2YXIgc3RyMSA9IFwiZ2lkOi8vc2hvcGlmeS9Qcm9kdWN0L1wiO1xyXG4gICAgc3RyID0gc3RyMS5jb25jYXQoc3RyKTtcclxuICAgIHJldHVybiBzdHI7XHJcbiAgfSxcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2hvcGlmeS9wb2xhcmlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtdGFnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFwb2xsb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9