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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/faq-layout.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/css/AppStyle.css":
/*!*********************************!*\
  !*** ./client/css/AppStyle.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/faq-layout.js":
/*!*****************************!*\
  !*** ./pages/faq-layout.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _client_css_AppStyle_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client/css/AppStyle.css */ "./client/css/AppStyle.css");
/* harmony import */ var _client_css_AppStyle_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_client_css_AppStyle_css__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function FaqLayout() {
  return __jsx("div", null, __jsx("div", {
    className: "navigationMain"
  }, __jsx("div", null, __jsx("p", null, __jsx("a", {
    href: "/index"
  }, "Front Page"))), __jsx("div", null, __jsx("p", null, __jsx("a", {
    href: "/annotated-layout"
  }, "Setting"))), __jsx("div", null, __jsx("p", null, __jsx("a", {
    href: "/design-layout"
  }, "Design"))), __jsx("div", null, __jsx("p", null, __jsx("a", {
    href: "/analytics-layout"
  }, "Analytics"))), __jsx("div", null, __jsx("p", null, __jsx("a", {
    style: {
      'color': '#5c6ac4'
    },
    href: "/faq-layout"
  }, "FAQ")))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Page"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextContainer"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Heading"], null, "Installation"), __jsx("p", null, "You can refer to our ", __jsx("a", {
    href: "http://smartecomtech.com/magic-upsell-faq/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "installation-video"), " or follow the instruction to make the Magic Upsell run in your store."), __jsx("ul", {
    className: "faq"
  }, __jsx("li", null, "Go to Shopify backend > Settings > Checkout > Additional scripts.", __jsx("br", null), __jsx("br", null), __jsx("img", {
    style: {
      'width': '100%',
      'border': '1px solid'
    },
    src: "https://cdn.shopify.com/s/files/1/0313/1447/7188/files/step1.jpg?v=1581026565"
  })), __jsx("br", null), __jsx("li", null, "Copy the ", __jsx("span", {
    style: {
      'color': '#f47777',
      'fontWeight': 'bold'
    }
  }, "following code"), ", paste it at the bottom and click save.", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Scrollable"], {
    className: "code-box",
    shadow: true
  }, __jsx("p", null, "{{ '//", "ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js", "' | script_tag }}", "{{ '", "api.jquery.js", "' | shopify_asset_url | script_tag }}", "{% for line_item in checkout.line_items %}", '<span id="product-id" name={{line_item.product.id}} title={{line_item.product.handle}}></span>', '{% endfor %}', '<div id="myModal"></div>')), __jsx("br", null), __jsx("img", {
    style: {
      'width': '100%',
      'border': '1px solid'
    },
    src: "https://cdn.shopify.com/s/files/1/0313/1447/7188/files/step2.jpg?v=1581026565"
  }), __jsx("br", null)), __jsx("br", null), __jsx("li", null, "Go to Magic Upsell Setting page and choose the upsell mode you want to activate. For more details, click ", __jsx("a", {
    href: "#mode"
  }, "here"), ".", __jsx("br", null), __jsx("br", null), __jsx("img", {
    style: {
      'width': '100%',
      'border': '1px solid'
    },
    src: "https://cdn.shopify.com/s/files/1/0313/1447/7188/files/step3.jpg?v=1581026565"
  })), __jsx("br", null), __jsx("li", null, "(Optional) Create your discount code , it will be applied automatically after customers clicking 'Add to cart' through the Magic Upsell."))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextContainer"], null, __jsx("br", {
    id: "mode"
  }), __jsx("hr", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Heading"], null, "What is the different between Dynamic and Manual Mode?"), __jsx("p", null, "Dynamic Mode:"), __jsx("p", null, "Upsell contains the first product in customer's cart and up to 4 ", __jsx("a", {
    href: "#recommend-product"
  }, "recommended products"), "."), __jsx("p", null, "Manual Mode:"), __jsx("p", {
    className: "faq"
  }, "Upsell contains selected products, which should be selected manually. Go to Magic Upsell Setting > Product picker to select up to 4 products."), __jsx("p", null, "If your order is imported or you are using test order, the first product will set to your store's first product.")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextContainer"], null, __jsx("br", {
    id: "recommend-product"
  }), __jsx("hr", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Heading"], null, "Can I select recommended products by myself?"), __jsx("p", null, "You cannot select by yourself. According to Shopify, the algorithm that identifies recommended products is based on data about products that were purchased together and products with similar descriptions. It uses this data to provide a mix of those related products as recommendations for a given product."), __jsx("p", null, "Instead, you can choose Manual Mode, which allow you to select up to 4 products by yourself."), __jsx("img", {
    style: {
      'width': '60%',
      'border': '1px solid'
    },
    src: "https://cdn.shopify.com/s/files/1/0313/1447/7188/files/step-products.jpg?v=1581026564"
  })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextContainer"], null, __jsx("br", {
    id: "discount"
  }), __jsx("hr", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Heading"], null, "Why is my discount code not working?"), __jsx("p", {
    className: "faq"
  }, "Make sure you created discount code through Magic Upsell, otherwise we cannot recognize your discount code."), __jsx("p", {
    className: "faq"
  }, "If you don't need any discount for upsell, put ", __jsx("em", null, "Discount value= 0, Coupon code = (add a space)"), " and click submit."), __jsx("img", {
    style: {
      'width': '60%',
      'border': '1px solid'
    },
    src: "https://cdn.shopify.com/s/files/1/0313/1447/7188/files/step-discount1.jpg?v=1581026564"
  }), __jsx("img", {
    style: {
      'width': '60%',
      'border': '1px solid'
    },
    src: "https://cdn.shopify.com/s/files/1/0313/1447/7188/files/step-discount2.jpg?v=1581026564"
  })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextContainer"], null, __jsx("br", null), __jsx("hr", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Heading"], null, "Do I have to select products if I'm using Manual Mode?"), __jsx("p", null, "It's not mandatory. If you didn't select any, the upsell will only display the first product in customer's cart.")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextContainer"], null, __jsx("br", null), __jsx("hr", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    style: {
      'fontSize': '2em',
      'padding': '10px 0'
    }
  }, "Why my upsell is not working?"), __jsx("p", null, "Add to cart might not working if your product's variant is not avaliable. Make sure you have every variant in stock.")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextContainer"], null, __jsx("br", null), __jsx("hr", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Heading"], null, "How to disable the upsell?"), __jsx("p", {
    className: "faq"
  }, "Just simply click Disable in Magic Upsell's Setting to pause all the functions. Your data will be saved so you can activate again at anytime.")), __jsx("br", null), __jsx("br", null)));
}

/* harmony default export */ __webpack_exports__["default"] = (FaqLayout);

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZmFxLWxheW91dC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJGYXFMYXlvdXQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQU9BOztBQUVBLFNBQVNBLFNBQVQsR0FBcUI7QUFDbkIsU0FDRSxtQkFDQTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0UsbUJBQUssaUJBQUc7QUFBRyxRQUFJLEVBQUM7QUFBUixrQkFBSCxDQUFMLENBREYsRUFFRSxtQkFBSyxpQkFBRztBQUFHLFFBQUksRUFB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RSxNQUFDLDhEQUFELFFBQ0EsaUJBREEsRUFFQSxpQkFGQSxFQUdFLE1BQUMsd0RBQUQsaUVBSEYsRUFJRSxvSUFKRixDQTVDRixFQWtERSxNQUFDLDhEQUFELFFBQ0EsaUJBREEsRUFFQSxpQkFGQSxFQUdFLE1BQUMsd0RBQUQ7QUFBUyxTQUFLLEVBQUU7QUFBQyxrQkFBVyxLQUFaO0FBQWtCLGlCQUFVO0FBQTVCO0FBQWhCLHFDQUhGLEVBSUUsd0lBSkYsQ0FsREYsRUF3REUsTUFBQyw4REFBRCxRQUNBLGlCQURBLEVBRUEsaUJBRkEsRUFHRSxNQUFDLHdEQUFELHFDQUhGLEVBSUU7QUFBRyxhQUFTLEVBQUM7QUFBYixxSkFKRixDQXhERixFQThERSxpQkE5REYsRUErREUsaUJBL0RGLENBUkEsQ0FERjtBQTRFRDs7QUFFY0Esd0VBQWYsRTs7Ozs7Ozs7Ozs7QUN4RkEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvZmFxLWxheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvZmFxLWxheW91dC5qc1wiKTtcbiIsImltcG9ydCB7XHJcbiAgTGF5b3V0LFxyXG4gIFBhZ2UsXHJcbiAgVGV4dENvbnRhaW5lcixcclxuICBIZWFkaW5nLFxyXG4gIFNjcm9sbGFibGVcclxufSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0ICcuLi9jbGllbnQvY3NzL0FwcFN0eWxlLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBGYXFMYXlvdXQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb25NYWluXCI+XHJcbiAgICAgIDxkaXY+PHA+PGEgaHJlZj1cIi9pbmRleFwiPkZyb250IFBhZ2U8L2E+PC9wPjwvZGl2PlxyXG4gICAgICA8ZGl2PjxwPjxhIGhyZWY9XCIvYW5ub3RhdGVkLWxheW91dFwiPlNldHRpbmc8L2E+PC9wPjwvZGl2PlxyXG4gICAgICA8ZGl2PjxwPjxhIGhyZWY9XCIvZGVzaWduLWxheW91dFwiPkRlc2lnbjwvYT48L3A+PC9kaXY+XHJcbiAgICAgIDxkaXY+PHA+PGEgaHJlZj1cIi9hbmFseXRpY3MtbGF5b3V0XCI+QW5hbHl0aWNzPC9hPjwvcD48L2Rpdj5cclxuICAgICAgPGRpdj48cD48YSBzdHlsZT17eydjb2xvcic6JyM1YzZhYzQnfX0gaHJlZj1cIi9mYXEtbGF5b3V0XCI+RkFRPC9hPjwvcD48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPFBhZ2U+XHJcbiAgICAgIDxUZXh0Q29udGFpbmVyPlxyXG4gICAgICAgIDxIZWFkaW5nPkluc3RhbGxhdGlvbjwvSGVhZGluZz5cclxuICAgICAgICA8cD5Zb3UgY2FuIHJlZmVyIHRvIG91ciA8YSBocmVmPVwiaHR0cDovL3NtYXJ0ZWNvbXRlY2guY29tL21hZ2ljLXVwc2VsbC1mYXEvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPmluc3RhbGxhdGlvbi12aWRlbzwvYT4gb3IgZm9sbG93IHRoZSBpbnN0cnVjdGlvbiB0byBtYWtlIHRoZSBNYWdpYyBVcHNlbGwgcnVuIGluIHlvdXIgc3RvcmUuPC9wPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJmYXFcIj5cclxuICAgICAgICAgIDxsaT5HbyB0byBTaG9waWZ5IGJhY2tlbmQgPiBTZXR0aW5ncyA+IENoZWNrb3V0ID4gQWRkaXRpb25hbCBzY3JpcHRzLjxici8+PGJyLz48aW1nIHN0eWxlPXt7J3dpZHRoJzonMTAwJScsJ2JvcmRlcic6JzFweCBzb2xpZCd9fSBzcmM9XCJodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDMxMy8xNDQ3LzcxODgvZmlsZXMvc3RlcDEuanBnP3Y9MTU4MTAyNjU2NVwiLz48L2xpPjxici8+XHJcbiAgICAgICAgICA8bGk+Q29weSB0aGUgPHNwYW4gc3R5bGU9e3snY29sb3InOicjZjQ3Nzc3JywnZm9udFdlaWdodCc6J2JvbGQnfX0+Zm9sbG93aW5nIGNvZGU8L3NwYW4+LCBwYXN0ZSBpdCBhdCB0aGUgYm90dG9tIGFuZCBjbGljayBzYXZlLlxyXG4gICAgICAgICAgPFNjcm9sbGFibGUgY2xhc3NOYW1lPVwiY29kZS1ib3hcIiBzaGFkb3c+XHJcbiAgICAgICAgICAgIDxwPntcInt7ICcvL1wifWFqYXguZ29vZ2xlYXBpcy5jb20vYWpheC9saWJzL2pxdWVyeS8xLjExLjAvanF1ZXJ5Lm1pbi5qc3tcIicgfCBzY3JpcHRfdGFnIH19XCJ9e1wie3sgJ1wifWFwaS5qcXVlcnkuanN7XCInIHwgc2hvcGlmeV9hc3NldF91cmwgfCBzY3JpcHRfdGFnIH19XCJ9e1wieyUgZm9yIGxpbmVfaXRlbSBpbiBjaGVja291dC5saW5lX2l0ZW1zICV9XCJ9eyc8c3BhbiBpZD1cInByb2R1Y3QtaWRcIiBuYW1lPXt7bGluZV9pdGVtLnByb2R1Y3QuaWR9fSB0aXRsZT17e2xpbmVfaXRlbS5wcm9kdWN0LmhhbmRsZX19Pjwvc3Bhbj4nfXsneyUgZW5kZm9yICV9J317JzxkaXYgaWQ9XCJteU1vZGFsXCI+PC9kaXY+J308L3A+XHJcbiAgICAgICAgICA8L1Njcm9sbGFibGU+XHJcbiAgICAgICAgICA8YnIvPjxpbWcgc3R5bGU9e3snd2lkdGgnOicxMDAlJywnYm9yZGVyJzonMXB4IHNvbGlkJ319IHNyYz1cImh0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8wMzEzLzE0NDcvNzE4OC9maWxlcy9zdGVwMi5qcGc/dj0xNTgxMDI2NTY1XCIvPjxici8+XHJcbiAgICAgICAgICA8L2xpPjxici8+XHJcbiAgICAgICAgICA8bGk+R28gdG8gTWFnaWMgVXBzZWxsIFNldHRpbmcgcGFnZSBhbmQgY2hvb3NlIHRoZSB1cHNlbGwgbW9kZSB5b3Ugd2FudCB0byBhY3RpdmF0ZS4gRm9yIG1vcmUgZGV0YWlscywgY2xpY2sgPGEgaHJlZj1cIiNtb2RlXCI+aGVyZTwvYT4uPGJyLz5cclxuICAgICAgICAgIDxici8+PGltZyBzdHlsZT17eyd3aWR0aCc6JzEwMCUnLCdib3JkZXInOicxcHggc29saWQnfX0gc3JjPVwiaHR0cHM6Ly9jZG4uc2hvcGlmeS5jb20vcy9maWxlcy8xLzAzMTMvMTQ0Ny83MTg4L2ZpbGVzL3N0ZXAzLmpwZz92PTE1ODEwMjY1NjVcIi8+PC9saT48YnIvPlxyXG4gICAgICAgICAgPGxpPihPcHRpb25hbCkgQ3JlYXRlIHlvdXIgZGlzY291bnQgY29kZSAsIGl0IHdpbGwgYmUgYXBwbGllZCBhdXRvbWF0aWNhbGx5IGFmdGVyIGN1c3RvbWVycyBjbGlja2luZyAnQWRkIHRvIGNhcnQnIHRocm91Z2ggdGhlIE1hZ2ljIFVwc2VsbC48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvVGV4dENvbnRhaW5lcj5cclxuICAgICAgPFRleHRDb250YWluZXI+XHJcbiAgICAgIDxiciBpZD1cIm1vZGVcIi8+XHJcbiAgICAgIDxoci8+XHJcbiAgICAgICAgPEhlYWRpbmc+V2hhdCBpcyB0aGUgZGlmZmVyZW50IGJldHdlZW4gRHluYW1pYyBhbmQgTWFudWFsIE1vZGU/PC9IZWFkaW5nPlxyXG4gICAgICAgIDxwPkR5bmFtaWMgTW9kZTo8L3A+XHJcbiAgICAgICAgPHA+VXBzZWxsIGNvbnRhaW5zIHRoZSBmaXJzdCBwcm9kdWN0IGluIGN1c3RvbWVyJ3MgY2FydCBhbmQgdXAgdG8gNCA8YSBocmVmPVwiI3JlY29tbWVuZC1wcm9kdWN0XCI+cmVjb21tZW5kZWQgcHJvZHVjdHM8L2E+LjwvcD5cclxuICAgICAgICA8cD5NYW51YWwgTW9kZTo8L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmFxXCI+VXBzZWxsIGNvbnRhaW5zIHNlbGVjdGVkIHByb2R1Y3RzLCB3aGljaCBzaG91bGQgYmUgc2VsZWN0ZWQgbWFudWFsbHkuIEdvIHRvIE1hZ2ljIFVwc2VsbCBTZXR0aW5nID4gUHJvZHVjdCBwaWNrZXIgdG8gc2VsZWN0IHVwIHRvIDQgcHJvZHVjdHMuPC9wPlxyXG5cdCAgICAgIDxwPklmIHlvdXIgb3JkZXIgaXMgaW1wb3J0ZWQgb3IgeW91IGFyZSB1c2luZyB0ZXN0IG9yZGVyLCB0aGUgZmlyc3QgcHJvZHVjdCB3aWxsIHNldCB0byB5b3VyIHN0b3JlJ3MgZmlyc3QgcHJvZHVjdC48L3A+XHJcbiAgICAgIDwvVGV4dENvbnRhaW5lcj5cclxuICAgICAgPFRleHRDb250YWluZXIgPlxyXG4gICAgICA8YnIgaWQ9XCJyZWNvbW1lbmQtcHJvZHVjdFwiLz5cclxuICAgICAgPGhyLz5cclxuICAgICAgICA8SGVhZGluZz5DYW4gSSBzZWxlY3QgcmVjb21tZW5kZWQgcHJvZHVjdHMgYnkgbXlzZWxmPzwvSGVhZGluZz5cclxuICAgICAgICA8cD5Zb3UgY2Fubm90IHNlbGVjdCBieSB5b3Vyc2VsZi4gQWNjb3JkaW5nIHRvIFNob3BpZnksIHRoZSBhbGdvcml0aG0gdGhhdCBpZGVudGlmaWVzIHJlY29tbWVuZGVkIHByb2R1Y3RzIGlzIGJhc2VkIG9uIGRhdGEgYWJvdXQgcHJvZHVjdHMgdGhhdCB3ZXJlIHB1cmNoYXNlZCB0b2dldGhlciBhbmQgcHJvZHVjdHMgd2l0aCBzaW1pbGFyIGRlc2NyaXB0aW9ucy4gSXQgdXNlcyB0aGlzIGRhdGEgdG8gcHJvdmlkZSBhIG1peCBvZiB0aG9zZSByZWxhdGVkIHByb2R1Y3RzIGFzIHJlY29tbWVuZGF0aW9ucyBmb3IgYSBnaXZlbiBwcm9kdWN0LjwvcD5cclxuICAgICAgICA8cD5JbnN0ZWFkLCB5b3UgY2FuIGNob29zZSBNYW51YWwgTW9kZSwgd2hpY2ggYWxsb3cgeW91IHRvIHNlbGVjdCB1cCB0byA0IHByb2R1Y3RzIGJ5IHlvdXJzZWxmLjwvcD5cclxuICAgICAgICA8aW1nIHN0eWxlPXt7J3dpZHRoJzonNjAlJywnYm9yZGVyJzonMXB4IHNvbGlkJ319IHNyYz1cImh0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8wMzEzLzE0NDcvNzE4OC9maWxlcy9zdGVwLXByb2R1Y3RzLmpwZz92PTE1ODEwMjY1NjRcIi8+XHJcbiAgICAgIDwvVGV4dENvbnRhaW5lcj5cclxuICAgICAgPFRleHRDb250YWluZXI+XHJcbiAgICAgIDxiciBpZD1cImRpc2NvdW50XCIvPlxyXG4gICAgICA8aHIvPlxyXG4gICAgICAgIDxIZWFkaW5nPldoeSBpcyBteSBkaXNjb3VudCBjb2RlIG5vdCB3b3JraW5nPzwvSGVhZGluZz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJmYXFcIj5NYWtlIHN1cmUgeW91IGNyZWF0ZWQgZGlzY291bnQgY29kZSB0aHJvdWdoIE1hZ2ljIFVwc2VsbCwgb3RoZXJ3aXNlIHdlIGNhbm5vdCByZWNvZ25pemUgeW91ciBkaXNjb3VudCBjb2RlLjwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJmYXFcIj5JZiB5b3UgZG9uJ3QgbmVlZCBhbnkgZGlzY291bnQgZm9yIHVwc2VsbCwgcHV0IDxlbT5EaXNjb3VudCB2YWx1ZT0gMCwgQ291cG9uIGNvZGUgPSAoYWRkIGEgc3BhY2UpPC9lbT4gYW5kIGNsaWNrIHN1Ym1pdC48L3A+XHJcbiAgICAgICAgPGltZyBzdHlsZT17eyd3aWR0aCc6JzYwJScsJ2JvcmRlcic6JzFweCBzb2xpZCd9fSBzcmM9XCJodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDMxMy8xNDQ3LzcxODgvZmlsZXMvc3RlcC1kaXNjb3VudDEuanBnP3Y9MTU4MTAyNjU2NFwiLz5cclxuICAgICAgICA8aW1nIHN0eWxlPXt7J3dpZHRoJzonNjAlJywnYm9yZGVyJzonMXB4IHNvbGlkJ319IHNyYz1cImh0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8wMzEzLzE0NDcvNzE4OC9maWxlcy9zdGVwLWRpc2NvdW50Mi5qcGc/dj0xNTgxMDI2NTY0XCIvPlxyXG4gICAgICA8L1RleHRDb250YWluZXI+XHJcbiAgICAgIDxUZXh0Q29udGFpbmVyPlxyXG4gICAgICA8YnIvPlxyXG4gICAgICA8aHIvPlxyXG4gICAgICAgIDxIZWFkaW5nPkRvIEkgaGF2ZSB0byBzZWxlY3QgcHJvZHVjdHMgaWYgSSdtIHVzaW5nIE1hbnVhbCBNb2RlPzwvSGVhZGluZz5cclxuICAgICAgICA8cD5JdCdzIG5vdCBtYW5kYXRvcnkuIElmIHlvdSBkaWRuJ3Qgc2VsZWN0IGFueSwgdGhlIHVwc2VsbCB3aWxsIG9ubHkgZGlzcGxheSB0aGUgZmlyc3QgcHJvZHVjdCBpbiBjdXN0b21lcidzIGNhcnQuPC9wPlxyXG4gICAgICA8L1RleHRDb250YWluZXI+XHJcbiAgICAgIDxUZXh0Q29udGFpbmVyPlxyXG4gICAgICA8YnIvPlxyXG4gICAgICA8aHIvPlxyXG4gICAgICAgIDxIZWFkaW5nIHN0eWxlPXt7J2ZvbnRTaXplJzonMmVtJywncGFkZGluZyc6JzEwcHggMCd9fT5XaHkgbXkgdXBzZWxsIGlzIG5vdCB3b3JraW5nPzwvSGVhZGluZz5cclxuICAgICAgICA8cD5BZGQgdG8gY2FydCBtaWdodCBub3Qgd29ya2luZyBpZiB5b3VyIHByb2R1Y3QncyB2YXJpYW50IGlzIG5vdCBhdmFsaWFibGUuIE1ha2Ugc3VyZSB5b3UgaGF2ZSBldmVyeSB2YXJpYW50IGluIHN0b2NrLjwvcD5cclxuICAgICAgPC9UZXh0Q29udGFpbmVyPlxyXG4gICAgICA8VGV4dENvbnRhaW5lcj5cclxuICAgICAgPGJyLz5cclxuICAgICAgPGhyLz5cclxuICAgICAgICA8SGVhZGluZz5Ib3cgdG8gZGlzYWJsZSB0aGUgdXBzZWxsPzwvSGVhZGluZz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJmYXFcIj5KdXN0IHNpbXBseSBjbGljayBEaXNhYmxlIGluIE1hZ2ljIFVwc2VsbCdzIFNldHRpbmcgdG8gcGF1c2UgYWxsIHRoZSBmdW5jdGlvbnMuIFlvdXIgZGF0YSB3aWxsIGJlIHNhdmVkIHNvIHlvdSBjYW4gYWN0aXZhdGUgYWdhaW4gYXQgYW55dGltZS48L3A+XHJcbiAgICAgIDwvVGV4dENvbnRhaW5lcj5cclxuICAgICAgPGJyLz5cclxuICAgICAgPGJyLz5cclxuICAgIDwvUGFnZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhcUxheW91dDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9