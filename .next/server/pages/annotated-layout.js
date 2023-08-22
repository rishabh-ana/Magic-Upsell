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
    case "dynamic":
      return "https://cdn.shopify.com/s/files/1/0313/1447/7188/files/MagicD-v7.js?v=1600115933";

    case "manual":
      return "https://cdn.shopify.com/s/files/1/0313/1447/7188/files/MagicM-v7.js?v=1600115933";

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
      console.log("sss", props);
    }
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !pending ? __jsx("div", null, toastMarkup, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    disabled: !props.manual[2],
    primary: true,
    onClick: () => {
      handleSubmit({
        variables: {
          input: {
            displayScope: "ORDER_STATUS",
            src: getUrl(props.manual[1])
          }
        }
      }).then(async ({
        data
      }) => {
        console.log(data);
        setMessage("Successfully Installed!");
        toggleToast();
        const db_data = {
          script_id: config.ExtractId(data.scriptTagCreate.scriptTag.id),
          upsell_mode: props.manual[1]
        };
        await axios__WEBPACK_IMPORTED_MODULE_3___default.a.put(config.HTTP_API + "/store/" + props.valueID, db_data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvQ3JlYXRlRGlzY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvQ3JlYXRlU2NyaXB0LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0RlbGV0ZVNjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9GaXJzdEF1dG8uanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvUHJvZHVjdExpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvUHJvZHVjdFBpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9TY3JpcHRDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYW5ub3RhdGVkLWxheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvY29uZmlnL2FwcEJhc2ljUXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2NvbmZpZy9odHRwQ29uZmlnLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYXBvbGxvXCIiXSwibmFtZXMiOlsiY29uZmlnIiwicmVxdWlyZSIsIkNyZWF0ZURpc2NvdW50IiwidmFsdWVJRCIsImlzSW5pdGlhbE1vdW50IiwidXNlUmVmIiwicmVmcmVzaCIsInNldFJlZnJlc2giLCJ1c2VTdGF0ZSIsImRpc2NvdW50Iiwic2V0RGlzY291bnQiLCJjb3Vwb24iLCJzZXRDb3Vwb24iLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImRpc3BsYXlDb2RlIiwic2V0RGlzcGxheUNvZGUiLCJlcnJvck1zZ0QiLCJzZXRFcnJvck1zZ0QiLCJlcnJvck1zZ0MiLCJzZXRFcnJvck1zZ0MiLCJzaG93VG9hc3QiLCJzZXRUb2FzdCIsImhhbmRsZVN1Ym1pdCIsImVycm9yIiwiZGlzY291bnRFcnJvciIsImRhdGEiLCJkaXNjb3VudERhdGEiLCJ1c2VNdXRhdGlvbiIsIkNSRUFURV9ESVNDT1VOVCIsImhhbmRsZURpc2NvdW50Q2hhbmdlIiwidmFsdWUiLCJoYW5kbGVDb3Vwb25DaGFuZ2UiLCJ0b2dnbGVUb2FzdCIsInRvYXN0TWFya3VwIiwidXNlRWZmZWN0IiwiZ2V0RGF0YSIsInNlYXJjaF9kYXRhIiwic2VhcmNoIiwiYXhpb3MiLCJwb3N0IiwiSFRUUF9BUEkiLCJ0aGVuIiwicmVzIiwiZGlzY291bnRfY29kZSIsImZldGNoRGF0YSIsImN1cnJlbnQiLCJjb250ZW50Iiwib25BY3Rpb24iLCJ2YXJpYWJsZXMiLCJiYXNpY0NvZGVEaXNjb3VudCIsInRpdGxlIiwiY29kZSIsInN0YXJ0c0F0IiwiY3VzdG9tZXJTZWxlY3Rpb24iLCJhbGwiLCJjdXN0b21lckdldHMiLCJwZXJjZW50YWdlIiwiaXRlbXMiLCJkYl9kYXRhIiwiZGlzY291bnRfdmFsdWUiLCJwdXQiLCJnZXRVcmwiLCJzIiwiQ3JlYXRlU2NyaXB0IiwicHJvcHMiLCJDUkVBVEVfU0NSSVBUIiwicGVuZGluZyIsInNldFBlbmRpbmciLCJjb25zb2xlIiwibG9nIiwibWFudWFsIiwiaW5wdXQiLCJkaXNwbGF5U2NvcGUiLCJzcmMiLCJzY3JpcHRfaWQiLCJFeHRyYWN0SWQiLCJzY3JpcHRUYWdDcmVhdGUiLCJzY3JpcHRUYWciLCJpZCIsInVwc2VsbF9tb2RlIiwiaGFuZGxlUmVmcmVzaCIsIkRlbGV0ZVNjcmlwdCIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInNjcmlwdElEIiwic2V0U2NyaXB0SUQiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJERUxFVEVfU0NSSVBUIiwiaGFuZGxlQ2hhbmdlIiwidXNlQ2FsbGJhY2siLCJDb21iaW5lSWQiLCJkZWxldGVfZGF0YSIsInJlc3VsdCIsIkZpcnN0QXV0byIsImhhbmRsZVRvZ2dsZSIsImNvbnRlbnRTdGF0dXMiLCJmaXJzdF9hdXRvIiwiUHJvZHVjdExpc3QiLCJwcm9kdWN0QXJyYXkiLCJzZXRQcm9kdWN0QXJyYXkiLCJ1c2VDb250ZXh0IiwiUmVmcmVzaCIsInAxIiwic2V0UDEiLCJwMiIsInNldFAyIiwicDMiLCJzZXRQMyIsInA0Iiwic2V0UDQiLCJwcm9kdWN0X2ZpcnN0IiwicHJvZHVjdF9zZWNvbmQiLCJwcm9kdWN0X3RoaXJkIiwicHJvZHVjdF9mb3J0aCIsIm1hcmdpbkJvdHRvbSIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsIlByb2R1Y3RQaWNrZXIiLCJvcGVuIiwic2V0T3BlbiIsInJlc291cmNlcyIsInNlbGVjdGlvbiIsImxlbmd0aCIsImhhbmRsZSIsIlNjcmlwdENvbXBvbmVudCIsImRpc3BsYXlNb2RlIiwic2V0RGlzcGxheU1vZGUiLCJhdmFsaWFibGUiLCJzZXRBdmFsaWFibGUiLCJkeW5hbWljIiwiQW5ub3RhdGVkTGF5b3V0Iiwic2hvcElkIiwic2V0U2hvcElkIiwidXNlUXVlcnkiLCJHRVRfU0hPUF9JRCIsInNob3AiLCJncWwiLCJTRUFSQ0hfT1JERVJTX1VQU0VMTCIsIlNFQVJDSF9PUkRFUlNfVE9UQUwiLCJDUkVBVEVfUkVDVVJSSU5HIiwiR0VUX1BST0RVQ1RTX0JZX0lEIiwibW9kdWxlIiwiZXhwb3J0cyIsInN0ciIsIm1hdGNoZXMiLCJtYXRjaCIsInN0cjEiLCJjb25jYXQiLCJDb21iaW5lUElEIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QSxHQUFQO0FBQ0Q7QUFmYyxDQUFqQixDOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6InBhZ2VzL2Fubm90YXRlZC1sYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2Fubm90YXRlZC1sYXlvdXQuanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsdXNlRWZmZWN0LHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBGb3JtLFxyXG4gIEZvcm1MYXlvdXQsXHJcbiAgVGV4dEZpZWxkLFxyXG4gIFRvYXN0LFxyXG4gIFBhZ2VBY3Rpb25zLFxyXG4gIEJhZGdlLFxyXG4gIFN0YWNrLFxyXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7Q1JFQVRFX0RJU0NPVU5UfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY29uZmlnL2FwcEJhc2ljUXVlcnkuanMnO1xyXG5jb25zdCBjb25maWcgPSByZXF1aXJlKCcuLi8uLi9zZXJ2ZXIvY29uZmlnL2h0dHBDb25maWcuanMnKTtcclxuXHJcbmZ1bmN0aW9uIENyZWF0ZURpc2NvdW50KHt2YWx1ZUlEfSkge1xyXG4gIGNvbnN0IGlzSW5pdGlhbE1vdW50ID0gdXNlUmVmKHRydWUpO1xyXG4gIGNvbnN0IFtyZWZyZXNoLCBzZXRSZWZyZXNoXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZGlzY291bnQsIHNldERpc2NvdW50XSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2NvdXBvbiwgc2V0Q291cG9uXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbZGlzcGxheUNvZGUsIHNldERpc3BsYXlDb2RlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2Vycm9yTXNnRCwgc2V0RXJyb3JNc2dEXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2Vycm9yTXNnQywgc2V0RXJyb3JNc2dDXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3Nob3dUb2FzdCwgc2V0VG9hc3RdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtoYW5kbGVTdWJtaXQse2Vycm9yOmRpc2NvdW50RXJyb3IsIGRhdGE6ZGlzY291bnREYXRhfV0gPSB1c2VNdXRhdGlvbihDUkVBVEVfRElTQ09VTlQpO1xyXG4gIGNvbnN0IGhhbmRsZURpc2NvdW50Q2hhbmdlID0gKHZhbHVlKSA9PiBzZXREaXNjb3VudCh2YWx1ZSk7XHJcbiAgY29uc3QgaGFuZGxlQ291cG9uQ2hhbmdlID0gKHZhbHVlKSA9PiBzZXRDb3Vwb24odmFsdWUpO1xyXG4gIGNvbnN0IHRvZ2dsZVRvYXN0ID0gKCkgPT4gc2V0VG9hc3QoIXNob3dUb2FzdCk7XHJcbiAgY29uc3QgdG9hc3RNYXJrdXAgPSBzaG93VG9hc3QgPyAoXHJcbiAgICAgICAgPFRvYXN0IGNvbnRlbnQ9e21lc3NhZ2V9IG9uRGlzbWlzcz17dG9nZ2xlVG9hc3R9IERpZHVyYXRpb249ezI1MDB9IC8+XHJcbiAgICApIDogbnVsbDtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XHJcbiAgICAgIGNvbnN0IHNlYXJjaF9kYXRhID0ge3NlYXJjaDp2YWx1ZUlEfTtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdChjb25maWcuSFRUUF9BUEkgKyAnL3N0b3JlL3NlYXJjaC9kaXNjb3VudCcsIHNlYXJjaF9kYXRhKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBzZXREaXNwbGF5Q29kZShyZXMuZGF0YVswXS5kaXNjb3VudF9jb2RlKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XHJcbiAgICAgIGlmIChpc0luaXRpYWxNb3VudC5jdXJyZW50ICYmIHZhbHVlSUQpIHtcclxuICAgICAgICBpc0luaXRpYWxNb3VudC5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgICAgYXdhaXQgZ2V0RGF0YSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKCFpc0luaXRpYWxNb3VudC5jdXJyZW50ICYmIHJlZnJlc2gpIHtcclxuICAgICAgICBhd2FpdCBnZXREYXRhKCk7XHJcbiAgICAgICAgc2V0UmVmcmVzaChmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgIHt0b2FzdE1hcmt1cH1cclxuICAgICAgPEZvcm0+XHJcbiAgICAgICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGlkPVwiZGlzY291bnRfcGVyY2VudGFnZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gXCIyMFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtkaXNjb3VudH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZURpc2NvdW50Q2hhbmdlfVxyXG4gICAgICAgICAgICBsYWJlbD1cIkRpc2NvdW50IHBlcmNlbnRhZ2VcIlxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgZXJyb3I9e2Vycm9yTXNnRH0vPlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBpZD1cImNvdXBvblwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gXCJERUFMMjBcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Y291cG9ufVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ291cG9uQ2hhbmdlfVxyXG4gICAgICAgICAgICBsYWJlbD1cIkNvdXBvbiBjb2RlXCJcclxuICAgICAgICAgICAgZXJyb3I9e2Vycm9yTXNnQ30vPlxyXG4gICAgICAgICAgPFN0YWNrPlxyXG4gICAgICAgICAgICA8U3RhY2suSXRlbSBmaWxsPlxyXG4gICAgICAgICAgICAgIDxoMj5DdXJyZW50IGFjdGl2YXRlZCBjb3Vwb24gY29kZTwvaDI+XHJcbiAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgPFN0YWNrLkl0ZW0+XHJcblx0ICBcdDxCYWRnZSBzdGF0dXM9XCJzdWNjZXNzXCI+e2Rpc3BsYXlDb2RlfTwvQmFkZ2U+XHJcbiAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICA8UGFnZUFjdGlvbnNcclxuICAgICAgICAgICAgcHJpbWFyeUFjdGlvbj17W1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdTdWJtaXQnLFxyXG4gICAgICAgICAgICAgICAgb25BY3Rpb246ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0RXJyb3JNc2dDKCcnKTtcclxuICAgICAgICAgICAgICAgICAgc2V0RXJyb3JNc2dEKCcnKTtcclxuICAgICAgICAgICAgICAgICAgZGlzY291bnQmJmNvdXBvbiA/XHJcbiAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNpY0NvZGVEaXNjb3VudDp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6Y291cG9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6Y291cG9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0c0F0OlwiMjAxOS0wMS0wMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyU2VsZWN0aW9uOnthbGw6dHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJHZXRzOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOntwZXJjZW50YWdlOmRpc2NvdW50LzEwMH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczp7YWxsOnRydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihhc3luYyh7ZGF0YX0pPT57XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TWVzc2FnZSgnU3VjY2Vzc2Z1bGx5IENyZWF0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVUb2FzdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRiX2RhdGEgPSB7ZGlzY291bnRfY29kZTogY291cG9uLGRpc2NvdW50X3ZhbHVlOmRpc2NvdW50fTtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBheGlvcy5wdXQoY29uZmlnLkhUVFBfQVBJICsgJy9zdG9yZS8nICsgdmFsdWVJRCwgZGJfZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGlzY291bnQoJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENvdXBvbignJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UmVmcmVzaCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICBkaXNjb3VudCA/IHNldEVycm9yTXNnQygnRGlzY291bnQgY29kZSBpcyByZXF1aXJlZCcpIDogc2V0RXJyb3JNc2dEKCdEaXNjb3VudCBpcyByZXF1aXJlZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyZWF0ZURpc2NvdW50O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRvYXN0LCBCdXR0b24gfSBmcm9tIFwiQHNob3BpZnkvcG9sYXJpc1wiO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJyZWFjdC1hcG9sbG9cIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBDUkVBVEVfU0NSSVBUIH0gZnJvbSBcIi4uLy4uL3NlcnZlci9jb25maWcvYXBwQmFzaWNRdWVyeS5qc1wiO1xyXG5jb25zdCBjb25maWcgPSByZXF1aXJlKFwiLi4vLi4vc2VydmVyL2NvbmZpZy9odHRwQ29uZmlnLmpzXCIpO1xyXG5cclxuZnVuY3Rpb24gZ2V0VXJsKHMpIHtcclxuICBzd2l0Y2ggKHMpIHtcclxuICAgIGNhc2UgXCJkeW5hbWljXCI6XHJcbiAgICAgIHJldHVybiBcImh0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8wMzEzLzE0NDcvNzE4OC9maWxlcy9NYWdpY0QtdjcuanM/dj0xNjAwMTE1OTMzXCI7XHJcbiAgICBjYXNlIFwibWFudWFsXCI6XHJcbiAgICAgIHJldHVybiBcImh0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8wMzEzLzE0NDcvNzE4OC9maWxlcy9NYWdpY00tdjcuanM/dj0xNjAwMTE1OTMzXCI7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gQ3JlYXRlU2NyaXB0KHByb3BzKSB7XHJcbiAgY29uc3QgaXNJbml0aWFsTW91bnQgPSB1c2VSZWYodHJ1ZSk7XHJcbiAgY29uc3QgW3Nob3dUb2FzdCwgc2V0VG9hc3RdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2hhbmRsZVN1Ym1pdCwgeyBlcnJvcjogZGlzY291bnRFcnJvciwgZGF0YTogZGlzY291bnREYXRhIH1dID1cclxuICAgIHVzZU11dGF0aW9uKENSRUFURV9TQ1JJUFQpO1xyXG4gIGNvbnN0IFtyZWZyZXNoLCBzZXRSZWZyZXNoXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB0b2dnbGVUb2FzdCA9ICgpID0+IHNldFRvYXN0KCFzaG93VG9hc3QpO1xyXG4gIGNvbnN0IHRvYXN0TWFya3VwID0gc2hvd1RvYXN0ID8gKFxyXG4gICAgPFRvYXN0IGNvbnRlbnQ9e21lc3NhZ2V9IG9uRGlzbWlzcz17dG9nZ2xlVG9hc3R9IERpZHVyYXRpb249ezE1MDB9IC8+XHJcbiAgKSA6IG51bGw7XHJcbiAgY29uc3QgW3BlbmRpbmcsIHNldFBlbmRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaXNJbml0aWFsTW91bnQuY3VycmVudCAmJiBwcm9wcykge1xyXG4gICAgICBzZXRQZW5kaW5nKGZhbHNlKTtcclxuICAgICAgaXNJbml0aWFsTW91bnQuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInNzc1wiLCBwcm9wcyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7IXBlbmRpbmcgPyAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHt0b2FzdE1hcmt1cH1cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFwcm9wcy5tYW51YWxbMl19XHJcbiAgICAgICAgICAgIHByaW1hcnlcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCh7XHJcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgaW5wdXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5U2NvcGU6IFwiT1JERVJfU1RBVFVTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBnZXRVcmwocHJvcHMubWFudWFsWzFdKSxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSkudGhlbihhc3luYyAoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgc2V0TWVzc2FnZShcIlN1Y2Nlc3NmdWxseSBJbnN0YWxsZWQhXCIpO1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlVG9hc3QoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRiX2RhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgIHNjcmlwdF9pZDogY29uZmlnLkV4dHJhY3RJZChcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLnNjcmlwdFRhZ0NyZWF0ZS5zY3JpcHRUYWcuaWRcclxuICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgdXBzZWxsX21vZGU6IHByb3BzLm1hbnVhbFsxXSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBheGlvcy5wdXQoXHJcbiAgICAgICAgICAgICAgICAgIGNvbmZpZy5IVFRQX0FQSSArIFwiL3N0b3JlL1wiICsgcHJvcHMudmFsdWVJRCxcclxuICAgICAgICAgICAgICAgICAgZGJfZGF0YVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHByb3BzLmhhbmRsZVJlZnJlc2goKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIEFjdGl2YXRlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IG51bGx9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENyZWF0ZVNjcmlwdDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLHVzZUVmZmVjdCx1c2VSZWYsdXNlQ29udGV4dCx1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBUb2FzdCxcclxuICBCdXR0b24sXHJcbiAgTW9kYWwsXHJcbiAgVGV4dENvbnRhaW5lclxyXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSx1c2VNdXRhdGlvbiB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7REVMRVRFX1NDUklQVH0gZnJvbSAnLi4vLi4vc2VydmVyL2NvbmZpZy9hcHBCYXNpY1F1ZXJ5LmpzJztcclxuY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi4vLi4vc2VydmVyL2NvbmZpZy9odHRwQ29uZmlnLmpzJyk7XHJcblxyXG5mdW5jdGlvbiBEZWxldGVTY3JpcHQocHJvcHMpIHtcclxuICBjb25zdCBpc0luaXRpYWxNb3VudCA9IHVzZVJlZih0cnVlKTtcclxuICBjb25zdCBbc2hvd1RvYXN0LCBzZXRUb2FzdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3JlZnJlc2gsIHNldFJlZnJlc2hdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbc2NyaXB0SUQsIHNldFNjcmlwdElEXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IHRvZ2dsZVRvYXN0ID0gKCkgPT4gc2V0VG9hc3QoIXNob3dUb2FzdCk7XHJcbiAgY29uc3QgdG9hc3RNYXJrdXAgPSBzaG93VG9hc3QgPyAoXHJcbiAgICAgICAgPFRvYXN0IGNvbnRlbnQ9e21lc3NhZ2V9IG9uRGlzbWlzcz17dG9nZ2xlVG9hc3R9IERpZHVyYXRpb249ezE1MDB9IC8+XHJcbiAgICApIDogbnVsbDtcclxuICBjb25zdCBbaGFuZGxlU3VibWl0LHtlcnJvcjpkaXNjb3VudEVycm9yLCBkYXRhOmRpc2NvdW50RGF0YX1dID0gdXNlTXV0YXRpb24oREVMRVRFX1NDUklQVCk7XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soKCkgPT4gc2V0QWN0aXZlKCFhY3RpdmUpLCBbYWN0aXZlXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXREYXRhKCkge1xyXG4gICAgICBjb25zdCBzZWFyY2hfZGF0YSA9IHtzZWFyY2g6cHJvcHMudmFsdWVJRH07XHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoY29uZmlnLkhUVFBfQVBJICsgJy9zdG9yZS9zZWFyY2gvc2NyaXB0SUQnLCBzZWFyY2hfZGF0YSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgc2V0U2NyaXB0SUQocmVzLmRhdGFbMF0uc2NyaXB0X2lkKTtcclxuICAgICAgICByZXMuZGF0YVswXS5zY3JpcHRfaWQgPyBzZXRTdGF0dXMoZmFsc2UpIDogc2V0U3RhdHVzKHRydWUpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpe1xyXG4gICAgICBpZiAoaXNJbml0aWFsTW91bnQuY3VycmVudCAmJiBwcm9wcykge1xyXG4gICAgICAgIGlzSW5pdGlhbE1vdW50LmN1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgICBhd2FpdCBnZXREYXRhKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYocmVmcmVzaCkge1xyXG4gICAgICAgIGF3YWl0IGdldERhdGEoKTtcclxuICAgICAgICBzZXRSZWZyZXNoKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7dG9hc3RNYXJrdXB9XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgZGVzdHJ1Y3RpdmVcclxuICAgICAgZGlzYWJsZWQ9e3N0YXR1c31cclxuICAgICAgb25DbGljaz17aGFuZGxlQ2hhbmdlfT5EaXNhYmxlPC9CdXR0b24+XHJcblxyXG4gICAgICA8TW9kYWxcclxuICAgICAgb3Blbj17YWN0aXZlfVxyXG4gICAgICBvbkNsb3NlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgIHRpdGxlPVwiUGF1c2UgYWxsIHRoZSBmdW5jdGlvbnNcIlxyXG4gICAgICBzZWNvbmRhcnlBY3Rpb25zPXt7XHJcbiAgICAgICAgY29udGVudDonQ2FuY2VsJyxcclxuICAgICAgICBvbkFjdGlvbjogaGFuZGxlQ2hhbmdlLFxyXG4gICAgICB9fVxyXG4gICAgICBwcmltYXJ5QWN0aW9uPXt7XHJcbiAgICAgICAgY29udGVudDonRGlzYWJsZScsXHJcbiAgICAgICAgb25BY3Rpb246ICgpID0+IHtcclxuICAgICAgICAgIGhhbmRsZVN1Ym1pdCh7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlczp7XHJcbiAgICAgICAgICAgICAgaWQ6IGNvbmZpZy5Db21iaW5lSWQoc2NyaXB0SUQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pLnRoZW4oYXN5bmMgKHtkYXRhfSk9PntcclxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlKCk7XHJcbiAgICAgICAgICAgIHNldE1lc3NhZ2UoJ1N1Y2Nlc3NmdWxseSBEaXNhYmxlZCEnKTtcclxuICAgICAgICAgICAgdG9nZ2xlVG9hc3QoKTtcclxuICAgICAgICAgICAgY29uc3QgZGVsZXRlX2RhdGEgPSB7c2NyaXB0X2lkOicnLHVwc2VsbF9tb2RlOicnfTtcclxuICAgICAgICAgICAgYXdhaXQgYXhpb3MucHV0KGNvbmZpZy5IVFRQX0FQSSArICcvc3RvcmUvJyArIHByb3BzLnZhbHVlSUQsIGRlbGV0ZV9kYXRhKS50aGVuKHJlc3VsdD0+e1xyXG4gICAgICAgICAgICAgIHNldFN0YXR1cyh0cnVlKTtcclxuICAgICAgICAgICAgICBzZXRSZWZyZXNoKHRydWUpO1xyXG5cdFx0cHJvcHMuaGFuZGxlUmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICA8TW9kYWwuU2VjdGlvbj5cclxuICAgICAgICA8VGV4dENvbnRhaW5lcj5cclxuICAgICAgICAgIDxwPllvdXIgZGF0YSB3aWxsIGJlIHN0b3JlZCwgeW91IGNhbiBhY3RpdmF0ZSB0aGUgdXBzZWxsIGJhY2sgYXQgYW55dGltZSBvciBzd2l0Y2ggdG8gYW5vdGhlciB1cHNlbGwgbW9kZS48L3A+XHJcbiAgICAgICAgPC9UZXh0Q29udGFpbmVyPlxyXG4gICAgICA8L01vZGFsLlNlY3Rpb24+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRGVsZXRlU2NyaXB0O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsdXNlRWZmZWN0LHVzZVJlZix1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDYXJkLCBCdXR0b24sU2V0dGluZ1RvZ2dsZSB9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgJy4uL2Nzcy9BcHBTdHlsZS5jc3MnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5jb25zdCBjb25maWcgPSByZXF1aXJlKCcuLi8uLi9zZXJ2ZXIvY29uZmlnL2h0dHBDb25maWcuanMnKTtcclxuXHJcbmZ1bmN0aW9uIEZpcnN0QXV0byh7dmFsdWVJRH0pIHtcclxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZSA9IHVzZUNhbGxiYWNrKCgpID0+IHNldEFjdGl2ZSgoYWN0aXZlKSA9PiAhYWN0aXZlKSwgW10pO1xyXG5jb25zdCBjb250ZW50U3RhdHVzID0gYWN0aXZlID8gJ0Rpc2FibGUnIDogJ0VuYWJsZSc7XHJcbmNvbnN0IGlzSW5pdGlhbE1vdW50ID0gdXNlUmVmKHRydWUpO1xyXG5cclxudXNlRWZmZWN0KCgpID0+IHtcclxuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcclxuICAgICAgY29uc3QgZGJfZGF0YSA9IHtzZWFyY2g6dmFsdWVJRH07XHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoY29uZmlnLkhUVFBfQVBJICsgJy9zdG9yZS9zZWFyY2gvZmlyc3RhdXRvJywgZGJfZGF0YSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgIHJlc3VsdC5kYXRhWzBdLmZpcnN0X2F1dG8gPT0xID8gc2V0QWN0aXZlKHRydWUpIDogc2V0QWN0aXZlKGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbmZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcclxuICAgICAgaWYgKGlzSW5pdGlhbE1vdW50LmN1cnJlbnQgJiYgdmFsdWVJRCkge1xyXG4gICAgICAgIGlzSW5pdGlhbE1vdW50LmN1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgICBnZXREYXRhKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoRGF0YSgpO1xyXG59KTtcclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQ+XHJcbiAgICAgIDxTZXR0aW5nVG9nZ2xlXHJcblx0YWN0aW9uPXt7XHJcblx0ICBjb250ZW50OiBjb250ZW50U3RhdHVzLFxyXG5cdCBvbkFjdGlvbjogYXN5bmMgKCkgPT4ge1xyXG5cdCAgY29uc3QgZGJfZGF0YSA9IHtmaXJzdF9hdXRvOiFhY3RpdmV9O1xyXG5cdCAgYXdhaXQgYXhpb3MucHV0KGNvbmZpZy5IVFRQX0FQSSArICcvc3RvcmUvJyArIHZhbHVlSUQsIGRiX2RhdGEpO1xyXG5cdCAgICBzZXRBY3RpdmUoIWFjdGl2ZSk7XHJcblx0fVxyXG5cdH19XHJcblx0ZW5hYmxlZD17YWN0aXZlfVxyXG5cdD5cclxuXHRMZXQgZmlyc3QgcHJvZHVjdCBhbHdheXMgYmUgdGhlIGZpcnN0IHByb2R1Y3QgZnJvbSB0aGUgY2FydFxyXG5cdDwvU2V0dGluZ1RvZ2dsZT5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaXJzdEF1dG87XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VFZmZlY3QsdXNlUmVmLHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgQ2FyZCxTdGFjayxCYWRnZVxyXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XHJcbmltcG9ydCB7R0VUX1BST0RVQ1RTX0JZX0lEfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY29uZmlnL2FwcEJhc2ljUXVlcnkuanMnO1xyXG5pbXBvcnQgJy4uL2Nzcy9BcHBTdHlsZS5jc3MnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge1JlZnJlc2h9IGZyb20gJy4vUHJvZHVjdFBpY2tlci5qcyc7XHJcbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoJy4uLy4uL3NlcnZlci9jb25maWcvaHR0cENvbmZpZy5qcycpO1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdExpc3QgKHt2YWx1ZUlEfSkge1xyXG4gIGNvbnN0IGlzSW5pdGlhbE1vdW50ID0gdXNlUmVmKHRydWUpO1xyXG4gIGNvbnN0IFtwcm9kdWN0QXJyYXksIHNldFByb2R1Y3RBcnJheV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGxldCB7cmVmcmVzaCwgc2V0UmVmcmVzaH0gPSB1c2VDb250ZXh0KFJlZnJlc2gpO1xyXG4gIGNvbnN0IFtwMSwgc2V0UDFdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbcDIsIHNldFAyXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3AzLCBzZXRQM10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtwNCwgc2V0UDRdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XHJcbiAgICAgIGNvbnN0IGRiX2RhdGEgPSB7c2VhcmNoOnZhbHVlSUR9O1xyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KGNvbmZpZy5IVFRQX0FQSSArICcvc3RvcmUvc2VhcmNoL3Byb2R1Y3RzJywgZGJfZGF0YSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgIHJlc3VsdC5kYXRhWzBdLnByb2R1Y3RfZmlyc3QgPyBzZXRQMShyZXN1bHQuZGF0YVswXS5wcm9kdWN0X2ZpcnN0KSA6IG51bGw7XHJcbiAgICAgICAgcmVzdWx0LmRhdGFbMF0ucHJvZHVjdF9zZWNvbmQgPyBzZXRQMihyZXN1bHQuZGF0YVswXS5wcm9kdWN0X3NlY29uZCkgOiBudWxsO1xyXG4gICAgICAgIHJlc3VsdC5kYXRhWzBdLnByb2R1Y3RfdGhpcmQgPyBzZXRQMyhyZXN1bHQuZGF0YVswXS5wcm9kdWN0X3RoaXJkKSA6IG51bGw7XHJcbiAgICAgICAgcmVzdWx0LmRhdGFbMF0ucHJvZHVjdF9mb3J0aCA/IHNldFA0KHJlc3VsdC5kYXRhWzBdLnByb2R1Y3RfZm9ydGgpIDogbnVsbDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKXtcclxuICAgICAgaWYgKGlzSW5pdGlhbE1vdW50LmN1cnJlbnQgJiYgdmFsdWVJRCkge1xyXG4gICAgICAgaXNJbml0aWFsTW91bnQuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICAgYXdhaXQgZ2V0RGF0YSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKCFpc0luaXRpYWxNb3VudC5jdXJyZW50ICYmIHJlZnJlc2gpIHtcclxuICAgICAgICBzZXRQMSgnJyk7c2V0UDIoJycpO3NldFAzKCcnKTtzZXRQNCgnJyk7XHJcbiAgICAgICAgYXdhaXQgZ2V0RGF0YSgpO1xyXG4gICAgICAgIHNldFJlZnJlc2goZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1saXN0XCI+XHJcbiAgICAgIDxoMiBzdHlsZT17e21hcmdpbkJvdHRvbTonMTBweCd9fT5TZWxlY3RlZCBwcm9kdWN0czwvaDI+XHJcbiAgICAgIDxTdGFjaz5cclxuICAgICAgICA8U3RhY2suSXRlbT48QmFkZ2Ugc3RhdHVzPVwic3VjY2Vzc1wiPntwMX08L0JhZGdlPjwvU3RhY2suSXRlbT5cclxuICAgICAgICA8U3RhY2suSXRlbT48QmFkZ2Ugc3RhdHVzPVwic3VjY2Vzc1wiPntwMn08L0JhZGdlPjwvU3RhY2suSXRlbT5cclxuICAgICAgICA8U3RhY2suSXRlbT48QmFkZ2Ugc3RhdHVzPVwic3VjY2Vzc1wiPntwM308L0JhZGdlPjwvU3RhY2suSXRlbT5cclxuICAgICAgICA8U3RhY2suSXRlbT48QmFkZ2Ugc3RhdHVzPVwic3VjY2Vzc1wiPntwNH08L0JhZGdlPjwvU3RhY2suSXRlbT5cclxuICAgICAgPC9TdGFjaz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgUmVzb3VyY2VQaWNrZXIsIFRpdGxlQmFyXHJcbn0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdCc7XHJcbmltcG9ydCB7IENhcmQsIEJ1dHRvbiB9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgJy4uL2Nzcy9BcHBTdHlsZS5jc3MnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUHJvZHVjdExpc3QgZnJvbSAnLi9Qcm9kdWN0TGlzdC5qcydcclxuY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi4vLi4vc2VydmVyL2NvbmZpZy9odHRwQ29uZmlnLmpzJyk7XHJcbmltcG9ydCAnLi4vY3NzL0FwcFN0eWxlLmNzcyc7XHJcbmV4cG9ydCBjb25zdCBSZWZyZXNoID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdFBpY2tlcih7dmFsdWVJRH0pIHtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3JlZnJlc2gsIHNldFJlZnJlc2hdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHZhciBkYl9kYXRhID0ge307XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkIHNlY3Rpb25lZD5cclxuICAgICAgPFJlZnJlc2guUHJvdmlkZXIgdmFsdWU9e3tyZWZyZXNoLCBzZXRSZWZyZXNofX0+XHJcbiAgICAgICAgPFByb2R1Y3RMaXN0IHZhbHVlSUQ9e3ZhbHVlSUR9Lz5cclxuICAgICAgPC9SZWZyZXNoLlByb3ZpZGVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtYnRuXCI+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgIHByaW1hcnlcclxuICAgICAgICBvbkNsaWNrID0geygpID0+IHtcclxuICAgICAgICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgICAgICAgfX0+T3BlbiBQcm9kdWN0IFBpY2tlcjwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFJlc291cmNlUGlja2VyXHJcbiAgICAgICAgcmVzb3VyY2VUeXBlPVwiUHJvZHVjdFwiXHJcbiAgICAgICAgc2hvd1ZhcmlhbnRzPXtmYWxzZX1cclxuICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgIG9uU2VsZWN0aW9uPXthc3luYyAocmVzb3VyY2VzKSA9PiB7XHJcbiAgICAgICAgICByZXNvdXJjZXMuc2VsZWN0aW9uLmxlbmd0aCA9PT0gMSA/IGRiX2RhdGEgPSB7cHJvZHVjdF9maXJzdDpyZXNvdXJjZXMuc2VsZWN0aW9uWzBdLmhhbmRsZSwgcHJvZHVjdF9zZWNvbmQ6bnVsbCwgcHJvZHVjdF90aGlyZDpudWxsLCBwcm9kdWN0X2ZvcnRoOm51bGx9IDogbnVsbDtcclxuICAgICAgICAgIHJlc291cmNlcy5zZWxlY3Rpb24ubGVuZ3RoID09PSAyID8gZGJfZGF0YSA9IHtwcm9kdWN0X2ZpcnN0OnJlc291cmNlcy5zZWxlY3Rpb25bMF0uaGFuZGxlLCBwcm9kdWN0X3NlY29uZDpyZXNvdXJjZXMuc2VsZWN0aW9uWzFdLmhhbmRsZSwgcHJvZHVjdF90aGlyZDpudWxsLCBwcm9kdWN0X2ZvcnRoOm51bGx9IDogbnVsbDtcclxuICAgICAgICAgIHJlc291cmNlcy5zZWxlY3Rpb24ubGVuZ3RoID09PSAzID8gZGJfZGF0YSA9IHtwcm9kdWN0X2ZpcnN0OnJlc291cmNlcy5zZWxlY3Rpb25bMF0uaGFuZGxlLCBwcm9kdWN0X3NlY29uZDpyZXNvdXJjZXMuc2VsZWN0aW9uWzFdLmhhbmRsZSwgcHJvZHVjdF90aGlyZDpyZXNvdXJjZXMuc2VsZWN0aW9uWzJdLmhhbmRsZSwgcHJvZHVjdF9mb3J0aDpudWxsfSA6IG51bGw7XHJcbiAgICAgICAgICByZXNvdXJjZXMuc2VsZWN0aW9uLmxlbmd0aCA+PSA0ID8gZGJfZGF0YSA9IHtwcm9kdWN0X2ZpcnN0OnJlc291cmNlcy5zZWxlY3Rpb25bMF0uaGFuZGxlLCBwcm9kdWN0X3NlY29uZDpyZXNvdXJjZXMuc2VsZWN0aW9uWzFdLmhhbmRsZSwgcHJvZHVjdF90aGlyZDpyZXNvdXJjZXMuc2VsZWN0aW9uWzJdLmhhbmRsZSwgcHJvZHVjdF9mb3J0aDpyZXNvdXJjZXMuc2VsZWN0aW9uWzNdLmhhbmRsZX0gOiBudWxsO1xyXG4gICAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICAgICAgICBhd2FpdCBheGlvcy5wdXQoY29uZmlnLkhUVFBfQVBJICsgJy9zdG9yZS8nICsgdmFsdWVJRCwgZGJfZGF0YSk7XHJcbiAgICAgICAgICBzZXRSZWZyZXNoKHRydWUpO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgb25DYW5jZWw9eygpPT5zZXRPcGVuKGZhbHNlKX1cclxuICAgICAgICAvPlxyXG5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0UGlja2VyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsdXNlRWZmZWN0LHVzZVJlZix1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBDYXJkLFxyXG4gIEJhZGdlLFxyXG4gIFN0YWNrLFxyXG5MYXlvdXRcclxufSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IENyZWF0ZVNjcmlwdCBmcm9tICcuL0NyZWF0ZVNjcmlwdC5qcyc7XHJcbmltcG9ydCAnLi4vY3NzL0FwcFN0eWxlLmNzcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoJy4uLy4uL3NlcnZlci9jb25maWcvaHR0cENvbmZpZy5qcycpO1xyXG5pbXBvcnQgRGVsZXRlU2NyaXB0IGZyb20gJy4vRGVsZXRlU2NyaXB0JztcclxuXHJcbmZ1bmN0aW9uIFNjcmlwdENvbXBvbmVudCh7dmFsdWVJRH0pIHtcclxuICBjb25zdCBpc0luaXRpYWxNb3VudCA9IHVzZVJlZih0cnVlKTtcclxuICBjb25zdCBbcmVmcmVzaCwgc2V0UmVmcmVzaF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Rpc3BsYXlNb2RlLCBzZXREaXNwbGF5TW9kZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFthdmFsaWFibGUsIHNldEF2YWxpYWJsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBkeW5hbWljID0gW3ZhbHVlSUQsJ2R5bmFtaWMnLGF2YWxpYWJsZV07XHJcbiAgY29uc3QgbWFudWFsID0gW3ZhbHVlSUQsJ21hbnVhbCcsYXZhbGlhYmxlXTtcclxuICBjb25zdCBbcGVuZGluZywgc2V0UGVuZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbmNvbnN0IGhhbmRsZVJlZnJlc2ggPSB1c2VDYWxsYmFjaygoKSA9PiBzZXRSZWZyZXNoKHRydWUpKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XHJcbiAgICAgIGNvbnN0IGRiX2RhdGEgPSB7c2VhcmNoOnZhbHVlSUR9O1xyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KGNvbmZpZy5IVFRQX0FQSSArICcvc3RvcmUvc2VhcmNoL21vZGUnLCBkYl9kYXRhKS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgcmVzdWx0LmRhdGFbMF0udXBzZWxsX21vZGUgPyBzZXRBdmFsaWFibGUoZmFsc2UpIDogc2V0QXZhbGlhYmxlKHRydWUpO1xyXG4gICAgICAgIHJlc3VsdC5kYXRhWzBdLnVwc2VsbF9tb2RlID8gc2V0RGlzcGxheU1vZGUocmVzdWx0LmRhdGFbMF0udXBzZWxsX21vZGUpIDogc2V0RGlzcGxheU1vZGUoJ25vbmUnKTtcclxuXHRzZXRQZW5kaW5nKGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKXtcclxuICAgICAgaWYgKGlzSW5pdGlhbE1vdW50LmN1cnJlbnQgJiYgdmFsdWVJRCkge1xyXG4gICAgICAgIGlzSW5pdGlhbE1vdW50LmN1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgICBhd2FpdCBnZXREYXRhKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYocmVmcmVzaCkge1xyXG4gICAgICAgIGF3YWl0IGdldERhdGEoKTtcclxuICAgICAgICBzZXRSZWZyZXNoKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbjw+XHJcbnshcGVuZGluZyA/XHJcbiAgICA8ZGl2PlxyXG48TGF5b3V0LkFubm90YXRlZFNlY3Rpb25cclxuICAgICAgICAgICAgdGl0bGU9XCJBY3RpdmF0ZSBVcHNlbGxcIlxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkNsaWNrIHRvIGFjdGl2YXRlIHRoZSB1cHNlbGwuIE9ubHkgb25lIG1vZGUgY2FuIGJlIGFjdGl2YXRlZCBlYWNoIHRpbWUsIHlvdSBjYW4gY2hhbmdlIHRoZSBtb2RlIGFmdGVyIGRpc2FibGUgdGhlIGN1cnJlbnQgbW9kZS5cIj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7XCJtYXJnaW5SaWdodFwiOlwiMTBweFwifX0+XHJcbiAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQgdGl0bGU9XCJEeW5hbWljIE1vZGVcIj5cclxuICAgICAgICAgICAgPENyZWF0ZVNjcmlwdCBtYW51YWw9e2R5bmFtaWN9IHZhbHVlSUQ9e3ZhbHVlSUR9IGhhbmRsZVJlZnJlc2g9e2hhbmRsZVJlZnJlc2h9Lz5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgPHA+VXBzZWxsIHdpbGwgY29udGFpbiB0aGUgZmlyc3QgcHJvZHVjdCBpbiBjdXN0b21lcidzIGNhcnQgYW5kIDxhIGhyZWY9XCIvZmFxLWxheW91dCNyZWNvbW1lbmQtcHJvZHVjdFwiPnJlY29tbWVuZGVkIHByb2R1Y3RzPC9hPi48L3A+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e1wibWFyZ2luTGVmdFwiOlwiMTBweFwifX0+XHJcbiAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQgdGl0bGU9XCJNYW51YWwgTW9kZVwiPlxyXG4gICAgICAgICAgICA8Q3JlYXRlU2NyaXB0IG1hbnVhbD17bWFudWFsfSB2YWx1ZUlEPXt2YWx1ZUlEfSBoYW5kbGVSZWZyZXNoPXtoYW5kbGVSZWZyZXNofS8+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIDxwPlVwc2VsbCB3aWxsIGNvbnRhaW4gc2VsZWN0ZWQgcHJvZHVjdHMsIHdoaWNoIHNob3VsZCBiZSBzZWxlY3RlZCBtYW51YWxseS4gPGEgaHJlZj1cIi9mYXEtbGF5b3V0I21vZGVcIj5SZWFkIG1vcmU8L2E+PC9wPlxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPENhcmQgc2VjdGlvbmVkPlxyXG4gICAgICAgIDxTdGFjaz5cclxuICAgICAgICAgIDxTdGFjay5JdGVtIGZpbGw+XHJcbiAgICAgICAgICAgIDxoMj5DdXJyZW50IGFjdGl2YXRlZCB1cHNlbGwgbW9kZTwvaDI+XHJcbiAgICAgICAgICA8L1N0YWNrLkl0ZW0+XHJcbiAgICAgICAgICA8U3RhY2suSXRlbT5cclxuICAgICAgICAgIHtkaXNwbGF5TW9kZSAhPSAnbm9uZScgPyAoXHJcbiAgICAgICAgICAgIDxCYWRnZSBzdGF0dXM9J3N1Y2Nlc3MnPntkaXNwbGF5TW9kZX08L0JhZGdlPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPEJhZGdlPntkaXNwbGF5TW9kZX08L0JhZGdlPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICA8L1N0YWNrPlxyXG4gICAgICA8L0NhcmQ+XHJcbjwvTGF5b3V0LkFubm90YXRlZFNlY3Rpb24+XHJcbjxMYXlvdXQuQW5ub3RhdGVkU2VjdGlvblxyXG4gICAgICAgICAgICB0aXRsZT1cIkRpc2FibGUgVXBzZWxsXCJcclxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJUZW1wb3JhcmlseSBkaXNhYmxlIGFsbCBmdW5jdGlvbnMuXCI+XHJcbjxEZWxldGVTY3JpcHQgdmFsdWVJRD17dmFsdWVJRH0gaGFuZGxlUmVmcmVzaD17aGFuZGxlUmVmcmVzaH0vPlxyXG48L0xheW91dC5Bbm5vdGF0ZWRTZWN0aW9uPlxyXG48aHIvPlxyXG4gICAgPC9kaXY+XHJcbjpcclxubnVsbFxyXG59XHJcbjwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2NyaXB0Q29tcG9uZW50O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgQ2FyZCxcclxuICBMYXlvdXQsXHJcbiAgUGFnZSxcclxuICBGcmFtZSxcclxufSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IENyZWF0ZURpc2NvdW50IGZyb20gJy4uL2NsaWVudC9jb21wb25lbnRzL0NyZWF0ZURpc2NvdW50JztcclxuaW1wb3J0IFNjcmlwdENvbXBvbmVudCBmcm9tICcuLi9jbGllbnQvY29tcG9uZW50cy9TY3JpcHRDb21wb25lbnQnO1xyXG5pbXBvcnQgUHJvZHVjdFBpY2tlciBmcm9tICcuLi9jbGllbnQvY29tcG9uZW50cy9Qcm9kdWN0UGlja2VyJztcclxuaW1wb3J0IEZpcnN0QXV0byBmcm9tICcuLi9jbGllbnQvY29tcG9uZW50cy9GaXJzdEF1dG8nO1xyXG5pbXBvcnQge0dFVF9TSE9QX0lEfSBmcm9tICcuLi9zZXJ2ZXIvY29uZmlnL2FwcEJhc2ljUXVlcnkuanMnO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XHJcbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoJy4uL3NlcnZlci9jb25maWcvaHR0cENvbmZpZy5qcycpO1xyXG5pbXBvcnQgJy4uL2NsaWVudC9jc3MvQXBwU3R5bGUuY3NzJztcclxuXHJcbmZ1bmN0aW9uIEFubm90YXRlZExheW91dCgpIHtcclxuICBjb25zdCBbc2hvcElkLCBzZXRTaG9wSWRdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbcmVmcmVzaCwgc2V0UmVmcmVzaF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qge2Vycm9yLCBkYXRhfSA9IHVzZVF1ZXJ5KEdFVF9TSE9QX0lEKTtcclxuICBpZihkYXRhICYmICFzaG9wSWQpIHNldFNob3BJZChjb25maWcuRXh0cmFjdElkKGRhdGEuc2hvcC5pZCkpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uTWFpblwiPlxyXG4gICAgICA8ZGl2PjxwPjxhIGhyZWY9XCIvaW5kZXhcIj5Gcm9udCBQYWdlPC9hPjwvcD48L2Rpdj5cclxuICAgICAgPGRpdj48cD48YSBzdHlsZT17eydjb2xvcic6JyM1YzZhYzQnfX0gaHJlZj1cIi9hbm5vdGF0ZWQtbGF5b3V0XCI+U2V0dGluZzwvYT48L3A+PC9kaXY+XHJcbiAgICAgIDxkaXY+PHA+PGEgaHJlZj1cIi9kZXNpZ24tbGF5b3V0XCI+RGVzaWduPC9hPjwvcD48L2Rpdj5cclxuICAgICAgPGRpdj48cD48YSBocmVmPVwiL2FuYWx5dGljcy1sYXlvdXRcIj5BbmFseXRpY3M8L2E+PC9wPjwvZGl2PlxyXG4gICAgICA8ZGl2PjxwPjxhIGhyZWY9XCIvZmFxLWxheW91dFwiPkZBUTwvYT48L3A+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxQYWdlPlxyXG4gICAgICA8RnJhbWU+XHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgIDxTY3JpcHRDb21wb25lbnQgdmFsdWVJRD17c2hvcElkfS8+XHJcbiAgICAgICAgICA8TGF5b3V0LkFubm90YXRlZFNlY3Rpb25cclxuICAgICAgICAgICAgdGl0bGU9XCJVcHNlbGwgRGlzY291bnRcIlxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkNyZWF0ZSBhbmQgY2hhbmdlIGN1cnJlbnQgdXBzZWxsIGRpc2NvdW50LiBQdXQgRGlzY291bnQgcGVyY2VudGFnZSA9IDAgLCBDb3Vwb24gY29kZSA9IChhZGQgYSBzcGFjZSkgdG8gZGlzYWJsZSBkaXNjb3VudC5cIj5cclxuICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkPlxyXG4gICAgICAgICAgICA8Q3JlYXRlRGlzY291bnQgdmFsdWVJRD17c2hvcElkfS8+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvTGF5b3V0LkFubm90YXRlZFNlY3Rpb24+XHJcbiAgICAgICAgICA8TGF5b3V0LkFubm90YXRlZFNlY3Rpb25cclxuICAgICAgICAgICAgdGl0bGU9XCJQcm9kdWN0IFBpY2tlciAtIE1hbnVhbCBNb2RlXCJcclxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJPbmx5IHdvcmtzIGlmIHRoZSBtb2RlIGlzIG9uIE1hbnVhbC4gVXAgdG8gNCBwcm9kdWN0cyBjYW4gYmUgcGlja2VkIGVhY2ggdGltZS5cIj5cclxuICAgICAgICAgICAgPFByb2R1Y3RQaWNrZXIgdmFsdWVJRD17c2hvcElkfS8+XHJcbiAgICAgICAgICA8L0xheW91dC5Bbm5vdGF0ZWRTZWN0aW9uPlxyXG5cdDxMYXlvdXQuQW5ub3RhdGVkU2VjdGlvblxyXG4gICAgICAgICAgICB0aXRsZT1cIkF1dG8gRmlyc3QgUHJvZHVjdCAtIE1hbnVhbCBNb2RlXCJcclxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJPbmx5IHdvcmtzIGlmIHRoZSBtb2RlIGlzIG9uIE1hbnVhbC4gVGhlIGZpcnN0IHByb2R1Y3QgaW4gdXBzZWxsIHdpbGwgYmUgdGhlIGZpcnN0IHByb2R1Y3QgZnJvbSBjdXN0b21lcidzIGNhcnQuXCI+XHJcbiAgICAgICAgICAgIDxGaXJzdEF1dG8gdmFsdWVJRD17c2hvcElkfS8+XHJcbiAgICAgICAgICA8L0xheW91dC5Bbm5vdGF0ZWRTZWN0aW9uPlxyXG5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICAgPC9GcmFtZT5cclxuICAgIDwvUGFnZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFubm90YXRlZExheW91dDtcclxuIiwiaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfU0hPUF9JRCA9IGdxbGBcclxuICBxdWVyeSB7XHJcbiAgICBzaG9wIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ1JFQVRFX0RJU0NPVU5UID0gZ3FsYFxyXG4gIG11dGF0aW9uIGRpc2NvdW50Q29kZUJhc2ljQ3JlYXRlKFxyXG4gICAgJGJhc2ljQ29kZURpc2NvdW50OiBEaXNjb3VudENvZGVCYXNpY0lucHV0IVxyXG4gICkge1xyXG4gICAgZGlzY291bnRDb2RlQmFzaWNDcmVhdGUoYmFzaWNDb2RlRGlzY291bnQ6ICRiYXNpY0NvZGVEaXNjb3VudCkge1xyXG4gICAgICBjb2RlRGlzY291bnROb2RlIHtcclxuICAgICAgICBpZFxyXG4gICAgICB9XHJcbiAgICAgIHVzZXJFcnJvcnMge1xyXG4gICAgICAgIGNvZGVcclxuICAgICAgICBmaWVsZFxyXG4gICAgICAgIG1lc3NhZ2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBERUxFVEVfU0NSSVBUID0gZ3FsYFxyXG4gIG11dGF0aW9uIHNjcmlwdFRhZ0RlbGV0ZSgkaWQ6IElEISkge1xyXG4gICAgc2NyaXB0VGFnRGVsZXRlKGlkOiAkaWQpIHtcclxuICAgICAgZGVsZXRlZFNjcmlwdFRhZ0lkXHJcbiAgICAgIHVzZXJFcnJvcnMge1xyXG4gICAgICAgIGZpZWxkXHJcbiAgICAgICAgbWVzc2FnZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENSRUFURV9TQ1JJUFQgPSBncWxgXHJcbiAgbXV0YXRpb24gc2NyaXB0VGFnQ3JlYXRlKCRpbnB1dDogU2NyaXB0VGFnSW5wdXQhKSB7XHJcbiAgICBzY3JpcHRUYWdDcmVhdGUoaW5wdXQ6ICRpbnB1dCkge1xyXG4gICAgICBzY3JpcHRUYWcge1xyXG4gICAgICAgIGlkXHJcbiAgICAgIH1cclxuICAgICAgdXNlckVycm9ycyB7XHJcbiAgICAgICAgZmllbGRcclxuICAgICAgICBtZXNzYWdlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU0VBUkNIX09SREVSU19VUFNFTEwgPSBncWxgXHJcbiAgcXVlcnkgKCRxdWVyeTogU3RyaW5nKSB7XHJcbiAgICBvcmRlcnMoZmlyc3Q6IDEwMCwgcXVlcnk6ICRxdWVyeSkge1xyXG4gICAgICBlZGdlcyB7XHJcbiAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICB0b3RhbFByaWNlU2V0IHtcclxuICAgICAgICAgICAgcHJlc2VudG1lbnRNb25leSB7XHJcbiAgICAgICAgICAgICAgYW1vdW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU0VBUkNIX09SREVSU19UT1RBTCA9IGdxbGBcclxuICBxdWVyeSAoJHF1ZXJ5OiBTdHJpbmcpIHtcclxuICAgIG9yZGVycyhmaXJzdDogMTAwLCBxdWVyeTogJHF1ZXJ5KSB7XHJcbiAgICAgIGVkZ2VzIHtcclxuICAgICAgICBub2RlIHtcclxuICAgICAgICAgIHRvdGFsUHJpY2VTZXQge1xyXG4gICAgICAgICAgICBwcmVzZW50bWVudE1vbmV5IHtcclxuICAgICAgICAgICAgICBhbW91bnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDUkVBVEVfUkVDVVJSSU5HID0gZ3FsYFxyXG4gIG11dGF0aW9uIGFwcFN1YnNjcmlwdGlvbkNyZWF0ZShcclxuICAgICRuYW1lOiBTdHJpbmchXHJcbiAgICAkbGluZUl0ZW1zOiBbQXBwU3Vic2NyaXB0aW9uTGluZUl0ZW1JbnB1dCFdIVxyXG4gICAgJHJldHVyblVybDogVVJMIVxyXG4gICAgJHRyaWFsRGF5czogSW50XHJcbiAgKSB7XHJcbiAgICBhcHBTdWJzY3JpcHRpb25DcmVhdGUoXHJcbiAgICAgIG5hbWU6ICRuYW1lXHJcbiAgICAgIGxpbmVJdGVtczogJGxpbmVJdGVtc1xyXG4gICAgICByZXR1cm5Vcmw6ICRyZXR1cm5VcmxcclxuICAgICAgdHJpYWxEYXlzOiAkdHJpYWxEYXlzXHJcbiAgICAgIHRlc3Q6IHRydWVcclxuICAgICkge1xyXG4gICAgICBhcHBTdWJzY3JpcHRpb24ge1xyXG4gICAgICAgIGlkXHJcbiAgICAgIH1cclxuICAgICAgY29uZmlybWF0aW9uVXJsXHJcbiAgICAgIHVzZXJFcnJvcnMge1xyXG4gICAgICAgIGZpZWxkXHJcbiAgICAgICAgbWVzc2FnZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9QUk9EVUNUU19CWV9JRCA9IGdxbGBcclxuICBxdWVyeSBnZXRQcm9kdWN0cygkaWRzOiBbSUQhXSEpIHtcclxuICAgIG5vZGVzKGlkczogJGlkcykge1xyXG4gICAgICAuLi4gb24gUHJvZHVjdCB7XHJcbiAgICAgICAgdGl0bGVcclxuICAgICAgICBoYW5kbGVcclxuICAgICAgICBkZXNjcmlwdGlvbkh0bWxcclxuICAgICAgICBpZFxyXG4gICAgICAgIGltYWdlcyhmaXJzdDogMSkge1xyXG4gICAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICBvcmlnaW5hbFNyY1xyXG4gICAgICAgICAgICAgIGFsdFRleHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXJpYW50cyhmaXJzdDogMSkge1xyXG4gICAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIEhUVFBfQVBJOiBcImh0dHBzOi8vYzkwNC0xMTgtMTg1LTYtMTg1Lm5ncm9rLWZyZWUuYXBwXCIsXHJcbiAgRXh0cmFjdElkOiBmdW5jdGlvbiAoc3RyKSB7XHJcbiAgICB2YXIgbWF0Y2hlcyA9IHN0ci5tYXRjaCgvKFxcZCspLyk7XHJcbiAgICBpZiAobWF0Y2hlcykgcmV0dXJuIG1hdGNoZXNbMF07XHJcbiAgfSxcclxuICBDb21iaW5lSWQ6IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgIHZhciBzdHIxID0gXCJnaWQ6Ly9zaG9waWZ5L1NjcmlwdFRhZy9cIjtcclxuICAgIHN0ciA9IHN0cjEuY29uY2F0KHN0cik7XHJcbiAgICByZXR1cm4gc3RyO1xyXG4gIH0sXHJcbiAgQ29tYmluZVBJRDogZnVuY3Rpb24gKHN0cikge1xyXG4gICAgdmFyIHN0cjEgPSBcImdpZDovL3Nob3BpZnkvUHJvZHVjdC9cIjtcclxuICAgIHN0ciA9IHN0cjEuY29uY2F0KHN0cik7XHJcbiAgICByZXR1cm4gc3RyO1xyXG4gIH0sXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hcG9sbG9cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==