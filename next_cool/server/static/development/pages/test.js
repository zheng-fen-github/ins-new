module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static\\development\\pages\\test.js": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/home/chat/buddy/buddy.js":
/*!********************************************!*\
  !*** ./component/home/chat/buddy/buddy.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_userPhoto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/userPhoto */ "./component/public/userPhoto.js");
var _jsxFileName = "C:\\test\\component\\home\\chat\\buddy\\buddy.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Buddy({
  status
}) {
  return __jsx("div", {
    className: "jsx-3504971292" + " " + 'buddy',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3504971292" + " " + "message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3504971292" + " " + "photo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(_public_userPhoto__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("img", {
    src: "userphoto.jpg",
    alt: "buddyphoto",
    className: "jsx-3504971292",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-3504971292" + " " + "buddy-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-3504971292",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, " name"))), __jsx("div", {
    className: "jsx-3504971292" + " " + ("buddy-status " + status || false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, status ? __jsx("div", {
    className: "jsx-3504971292" + " " + "deng",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }) : __jsx("div", {
    className: "jsx-3504971292",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3504971292",
    __self: this
  }, ".buddy.jsx-3504971292{width:100%;margin-bottom:1vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:2vh 0;border-bottom:1px solid rgba(0,0,0,0.3);}.message.jsx-3504971292{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.buddy-name.jsx-3504971292{margin-left:2vh;}.photo.jsx-3504971292,img.jsx-3504971292,.buddy-name.jsx-3504971292{width:60px;height:60px;}.buddy-status.jsx-3504971292{width:15px;height:15px;background:#2ad32d;border-radius:50%;}.dow.jsx-3504971292{background:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx0ZXN0XFxjb21wb25lbnRcXGhvbWVcXGNoYXRcXGJ1ZGR5XFxidWRkeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQnlCLEFBR21DLEFBU0csQUFHRSxBQUdMLEFBSUEsQUFNSSxXQXhCRyxBQWVOLEFBSUEsSUFNZixDQWJBLE9BSUEsQUFJc0IsTUFuQk4sYUFvQkssa0JBQ3JCLGNBYkEsNkJBUGlDLG1IQUNYLDZGQUNMLGNBQzBCLHdDQUMzQyIsImZpbGUiOiJDOlxcdGVzdFxcY29tcG9uZW50XFxob21lXFxjaGF0XFxidWRkeVxcYnVkZHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQaG90byBmcm9tICcuLi8uLi8uLi9wdWJsaWMvdXNlclBob3RvJ1xyXG5cclxuZnVuY3Rpb24gQnVkZHkoe3N0YXR1c30pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1ZGR5Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBob3RvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBob3RvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cInVzZXJwaG90by5qcGdcIiBhbHQ9XCJidWRkeXBob3RvXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUGhvdG8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVkZHktbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoND4gbmFtZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImJ1ZGR5LXN0YXR1cyBcIitzdGF0dXN9PlxyXG4gICAgICAgICAgICAgICB7c3RhdHVzID88ZGl2IGNsYXNzTmFtZT1cImRlbmdcIj4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+OiAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+IHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLmJ1ZGR5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoydmggMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLm1lc3NhZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuYnVkZHktbmFtZSB7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjJ2aDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnBob3RvLGltZywuYnVkZHktbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDo2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuYnVkZHktc3RhdHVzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IzJhZDMyZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5kb3cge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOnJlZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1ZGR5XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\test\\\\component\\\\home\\\\chat\\\\buddy\\\\buddy.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Buddy);

/***/ }),

/***/ "./component/home/chat/buddy/buddyList.js":
/*!************************************************!*\
  !*** ./component/home/chat/buddy/buddyList.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _buddy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buddy */ "./component/home/chat/buddy/buddy.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context */ "./component/home/chat/context.js");
var _jsxFileName = "C:\\test\\component\\home\\chat\\buddy\\buddyList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function BuddyList() {
  let {
    change
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_3__["ThemeContext"]);
  let classname = change ? 'scale' : '';
  return __jsx("div", {
    className: "jsx-2189020873" + " " + `buddyList ${classname}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(_buddy__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx(_buddy__WEBPACK_IMPORTED_MODULE_2__["default"], {
    status: "dow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx(_buddy__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx(_buddy__WEBPACK_IMPORTED_MODULE_2__["default"], {
    status: "dow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2189020873",
    __self: this
  }, ".buddyList.jsx-2189020873{height:30%;width:100%;margin-top:2vh;padding:20px;border-radius:24px;overflow:auto;background:#eeeef4;right:0;top:0;-webkit-transition:0.4s;transition:0.4s;}.scale.jsx-2189020873{height:100%;width:35%;border-radius:14px;margin-top:0;box-shadow:-2px 0 6px rgba(0,0,0,0.3);padding:36px;position:absolute;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx0ZXN0XFxjb21wb25lbnRcXGhvbWVcXGNoYXRcXGJ1ZGR5XFxidWRkeUxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYXlCLEFBR29DLEFBYVIsV0FaUSxDQWFWLFVBWmMsQUFhTCxlQVpHLElBYVQsU0FaZSxJQWFXLGVBWmhCLGNBQ0ssU0FZZixVQVhJLEdBWUMsS0FYSCxNQUNXLE9BVzNCLGlDQVRNIiwiZmlsZSI6IkM6XFx0ZXN0XFxjb21wb25lbnRcXGhvbWVcXGNoYXRcXGJ1ZGR5XFxidWRkeUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQnVkZHkgZnJvbSAnLi9idWRkeSdcclxuaW1wb3J0IHtUaGVtZUNvbnRleHR9IGZyb20gJy4uL2NvbnRleHQnXHJcblxyXG5mdW5jdGlvbiBCdWRkeUxpc3QoKSB7XHJcbiAgICBsZXQge2NoYW5nZX0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XHJcbiAgICBsZXQgY2xhc3NuYW1lID0gY2hhbmdlPydzY2FsZSc6Jyc7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYnVkZHlMaXN0ICR7Y2xhc3NuYW1lfWB9PlxyXG4gICAgICAgICAgICA8QnVkZHkvPlxyXG4gICAgICAgICAgICA8QnVkZHkgc3RhdHVzPSdkb3cnLz5cclxuICAgICAgICAgICAgPEJ1ZGR5Lz5cclxuICAgICAgICAgICAgPEJ1ZGR5IHN0YXR1cz0nZG93Jy8+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+IHtgXHJcbiAgICAgICAgICAgIC5idWRkeUxpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjMwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjJ2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MjRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OmF1dG87ICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojZWVlZWY0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDowO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuc2NhbGV7IFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDozNSU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjE0cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjA7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAtMnB4IDAgNnB4IHJnYmEoMCwwLDAsMC4zKTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6MzZweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgIH0gICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnVkZHlMaXN0XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\test\\\\component\\\\home\\\\chat\\\\buddy\\\\buddyList.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (BuddyList);

/***/ }),

/***/ "./component/home/chat/chatnow/chatstatus/buddyname.js":
/*!*************************************************************!*\
  !*** ./component/home/chat/chatnow/chatstatus/buddyname.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\test\\component\\home\\chat\\chatnow\\chatstatus\\buddyname.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function BuddyChat(props) {
  return __jsx("div", {
    className: "jsx-2804325736" + " " + ('buddy-chat ' + props.select || false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2804325736" + " " + "message-number",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-2804325736",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.number)), __jsx("div", {
    className: "jsx-2804325736" + " " + "buddy-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-2804325736",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, props.name)), __jsx("div", {
    className: "jsx-2804325736" + " " + "closeBu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("svg", {
    t: "1577522468145",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "2589",
    className: "jsx-2804325736" + " " + "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("path", {
    d: "M633.749333 390.250667a21.333333 21.333333 0 0 0-30.165333 0L512 481.834667l-91.584-91.584a21.333333 21.333333 0 0 0-30.165333 30.165333L481.834667 512l-91.584 91.584a21.333333 21.333333 0 1 0 30.165333 30.165333L512 542.165333l91.584 91.584a21.333333 21.333333 0 0 0 30.165333-30.165333L542.165333 512l91.584-91.584a21.333333 21.333333 0 0 0 0-30.165333z",
    fill: "#2c2c2c",
    "p-id": "2591",
    className: "jsx-2804325736",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2804325736",
    __self: this
  }, ".buddy-chat.jsx-2804325736{width:auto;background:#f4f5f7;margin-right:1vh;padding:12px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:24px;position:relative;}.buddy-chat.jsx-2804325736:hover>.closeBu.jsx-2804325736{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}.closeBu.jsx-2804325736{position:absolute;right:2%;top:0%;background:red;color:white;height:2vh;width:2vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:50%;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);-webkit-transition:.4s;transition:.4s;cursor:pointer;}.closeBu.jsx-2804325736>svg.jsx-2804325736{width:280%;height:280%;}.select.jsx-2804325736{background:white;}.message-number.jsx-2804325736{color:white;height:2.4vh;width:2.4vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#238cff;border-radius:50%;margin:0 1vh;}.buddy-name.jsx-2804325736{font-size:1vh;white-space:nowrap;wdith:auto;padding-right:1vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx0ZXN0XFxjb21wb25lbnRcXGhvbWVcXGNoYXRcXGNoYXRub3dcXGNoYXRzdGF0dXNcXGJ1ZGR5bmFtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQndCLEFBRzhCLEFBVUUsQUFJSyxBQWdCUCxBQUlNLEFBR1AsQUFXSSxXQS9DSyxBQThCUCxDQU9ELEVBV1MsR0FkdkIsQ0FwQlksS0FpQlosRUFPYSxFQXZCSCxHQWRVLEdBZ0ROLENBakNJLEdBdUJKLE9BV08sR0FoREwsRUFlRCxXQWRDLENBZUYsQ0FpQ2QsVUFoQ2EsRUFUUyxRQVVOLDZCQW9CUSx1QkFwQ0YsU0FPdEIsYUFVMEIsc0RBb0JOLGlCQXBDRSxtQkFDRCxTQWdCQyxTQWZ0Qix1Q0FtQ29CLG1CQUNELGtCQUNMLFFBckJPLEtBc0JyQixhQXJCc0IscUVBQ0osc0NBQ0EsZUFDbEIiLCJmaWxlIjoiQzpcXHRlc3RcXGNvbXBvbmVudFxcaG9tZVxcY2hhdFxcY2hhdG5vd1xcY2hhdHN0YXR1c1xcYnVkZHluYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuXHJcbmZ1bmN0aW9uIEJ1ZGR5Q2hhdChwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2J1ZGR5LWNoYXQgJytwcm9wcy5zZWxlY3R9PlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1udW1iZXJcIj5cclxuICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICB7cHJvcHMubnVtYmVyfVxyXG4gICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWRkeS1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAge3Byb3BzLm5hbWV9XHJcbiAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbG9zZUJ1XCI+XHJcbiAgICAgICAgICAgICAgPHN2ZyB0PVwiMTU3NzUyMjQ2ODE0NVwiIGNsYXNzTmFtZT1cImljb25cIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgcC1pZD1cIjI1ODlcIj48cGF0aCBkPVwiTTYzMy43NDkzMzMgMzkwLjI1MDY2N2EyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMCAwLTMwLjE2NTMzMyAwTDUxMiA0ODEuODM0NjY3bC05MS41ODQtOTEuNTg0YTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDAtMzAuMTY1MzMzIDMwLjE2NTMzM0w0ODEuODM0NjY3IDUxMmwtOTEuNTg0IDkxLjU4NGEyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMSAwIDMwLjE2NTMzMyAzMC4xNjUzMzNMNTEyIDU0Mi4xNjUzMzNsOTEuNTg0IDkxLjU4NGEyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMCAwIDMwLjE2NTMzMy0zMC4xNjUzMzNMNTQyLjE2NTMzMyA1MTJsOTEuNTg0LTkxLjU4NGEyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMCAwIDAtMzAuMTY1MzMzelwiIGZpbGw9XCIjMmMyYzJjXCIgcC1pZD1cIjI1OTFcIj48L3BhdGg+PC9zdmc+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPHN0eWxlIGpzeD4ge2BcclxuICAgICAgICAgICAgICAgLmJ1ZGR5LWNoYXQgeyBcclxuICAgICAgICAgICAgICAgICAgIHdpZHRoOmF1dG87XHJcbiAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNmNGY1Zjc7XHJcbiAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6MXZoO1xyXG4gICAgICAgICAgICAgICAgICAgcGFkZGluZzoxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgLmJ1ZGR5LWNoYXQ6aG92ZXI+LmNsb3NlQnUge1xyXG4gICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIC5jbG9zZUJ1IHtcclxuICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgcmlnaHQ6MiU7XHJcbiAgICAgICAgICAgICAgICAgICB0b3A6MCU7XHJcbiAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOnJlZDtcclxuICAgICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgaGVpZ2h0OjJ2aDtcclxuICAgICAgICAgICAgICAgICAgIHdpZHRoOjJ2aDtcclxuICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpzY2FsZSgwKTtcclxuICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246LjRzO1xyXG4gICAgICAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgLmNsb3NlQnU+c3ZnIHtcclxuICAgICAgICAgICAgICAgICAgIHdpZHRoOjI4MCU7XHJcbiAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MjgwJTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAuc2VsZWN0IHtcclxuICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6d2hpdGU7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgLm1lc3NhZ2UtbnVtYmVyIHtcclxuICAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICAgICAgICAgICBoZWlnaHQ6Mi40dmg7XHJcbiAgICAgICAgICAgICAgICAgd2lkdGg6Mi40dmg7XHJcbiAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IzIzOGNmZjtcclxuICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICAgICAgICAgICAgICAgICBtYXJnaW46MCAxdmg7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgLmJ1ZGR5LW5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjF2aDtcclxuICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICB3ZGl0aDphdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDoxdmg7XHJcbiAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1ZGR5Q2hhdFxyXG4iXX0= */\n/*@ sourceURL=C:\\\\test\\\\component\\\\home\\\\chat\\\\chatnow\\\\chatstatus\\\\buddyname.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (BuddyChat);

/***/ }),

/***/ "./component/home/chat/chatnow/chatstatus/chatbuddyList.js":
/*!*****************************************************************!*\
  !*** ./component/home/chat/chatnow/chatstatus/chatbuddyList.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _buddyname_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buddyname.js */ "./component/home/chat/chatnow/chatstatus/buddyname.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context */ "./component/home/chat/context.js");
var _jsxFileName = "C:\\test\\component\\home\\chat\\chatnow\\chatstatus\\chatbuddyList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function ChatList() {
  let {
    change
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_3__["ThemeContext"]);
  let classname = change ? 'scale' : '';
  return __jsx("div", {
    className: "jsx-1990732591" + " " + `buddy-chat-list ${classname}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(_buddyname_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "jeanette Thornton",
    number: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx(_buddyname_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "Sallie walton",
    number: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx(_buddyname_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "Sallie",
    number: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1990732591",
    __self: this
  }, ".buddy-chat-list.jsx-1990732591{width:100%;height:8%;border-bottom:solid 2px black;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:no-wrap;-ms-flex-wrap:no-wrap;flex-wrap:no-wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:auto;padding-bottom:2vh;margin:2vh 0;}.scale.jsx-1990732591{width:63%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx0ZXN0XFxjb21wb25lbnRcXGhvbWVcXGNoYXRcXGNoYXRub3dcXGNoYXRzdGF0dXNcXGNoYXRidWRkeUxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWXdCLEFBR3VDLEFBV0QsVUFDYixDQVhhLFVBQ29CLDhCQUNqQiwwRUFDSyxrRUFDQyw2RkFDTCxjQUNLLG1CQUNOLGFBQ2hCIiwiZmlsZSI6IkM6XFx0ZXN0XFxjb21wb25lbnRcXGhvbWVcXGNoYXRcXGNoYXRub3dcXGNoYXRzdGF0dXNcXGNoYXRidWRkeUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQnVkZHkgZnJvbSAnLi9idWRkeW5hbWUuanMnXHJcbmltcG9ydCB7VGhlbWVDb250ZXh0fSBmcm9tICcuLi8uLi9jb250ZXh0J1xyXG5cclxuZnVuY3Rpb24gQ2hhdExpc3QoKSB7XHJcbiAgICBsZXQge2NoYW5nZX0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XHJcbiAgICBsZXQgY2xhc3NuYW1lID0gY2hhbmdlPydzY2FsZSc6Jyc7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYnVkZHktY2hhdC1saXN0ICR7Y2xhc3NuYW1lfWB9PlxyXG4gICAgICAgICAgIDxCdWRkeSBuYW1lPSdqZWFuZXR0ZSBUaG9ybnRvbicgbnVtYmVyID0gezJ9IC8+XHJcbiAgICAgICAgICAgPEJ1ZGR5IG5hbWU9J1NhbGxpZSB3YWx0b24nIG51bWJlciA9IHszfS8+XHJcbiAgICAgICAgICAgPEJ1ZGR5IG5hbWU9J1NhbGxpZScgbnVtYmVyID0gezN9Lz4gICAgICAgICAgIFxyXG4gICAgICAgICAgIDxzdHlsZSBqc3g+IHtgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5idWRkeS1jaGF0LWxpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDo4JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206c29saWQgMnB4IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOm5vLXdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzphdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206MnZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjJ2aCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zY2FsZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjYzJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0TGlzdFxyXG4iXX0= */\n/*@ sourceURL=C:\\\\test\\\\component\\\\home\\\\chat\\\\chatnow\\\\chatstatus\\\\chatbuddyList.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (ChatList);

/***/ }),

/***/ "./component/home/chat/chatnow/chatwindow/postmessage.js":
/*!***************************************************************!*\
  !*** ./component/home/chat/chatnow/chatwindow/postmessage.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\test\\component\\home\\chat\\chatnow\\chatwindow\\postmessage.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function PostMessage() {
  const submitEv = e => {
    e.preventDefault();
  };

  return __jsx("div", {
    className: "jsx-3069875192" + " " + 'postMessage',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("form", {
    onSubmit: submitEv,
    className: "jsx-3069875192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    name: "postMessage",
    id: "postMessage",
    placeholder: "Type something",
    className: "jsx-3069875192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3069875192",
    __self: this
  }, ".postMessage.jsx-3069875192{width:90%;height:5vh;background:#f4f4f7;box-shadow:0 0 4px black;border-radius:12px;overflow:hidden;}form.jsx-3069875192,input.jsx-3069875192{width:100%;height:100%;}input.jsx-3069875192{background:none;border:none;outline:none;font-size:2vh;padding:0 12px;}input.jsx-3069875192:focus{background:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx0ZXN0XFxjb21wb25lbnRcXGhvbWVcXGNoYXRcXGNoYXRub3dcXGNoYXR3aW5kb3dcXHBvc3RtZXNzYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWV5QixBQUlzQyxBQVFDLEFBSUssQUFRQyxVQW5CTixDQVFDLEtBS0EsQ0FPZixJQW5Cc0IsRUFRdEIsS0FLZ0IsWUFaWSxDQWFYLGNBQ0MsVUFiSSxLQWN0QixjQWJtQixnQkFDbkIiLCJmaWxlIjoiQzpcXHRlc3RcXGNvbXBvbmVudFxcaG9tZVxcY2hhdFxcY2hhdG5vd1xcY2hhdHdpbmRvd1xccG9zdG1lc3NhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBQb3N0TWVzc2FnZSgpIHtcclxuICAgIGNvbnN0IHN1Ym1pdEV2ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwb3N0TWVzc2FnZSc+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRFdn0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicG9zdE1lc3NhZ2VcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBvc3RNZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nVHlwZSBzb21ldGhpbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PiB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnBvc3RNZXNzYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjkwJTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NXZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojZjRmNGY3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzowIDAgNHB4IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0saW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6bm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MnZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzowIDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6Zm9jdXN7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RNZXNzYWdlXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\test\\\\component\\\\home\\\\chat\\\\chatnow\\\\chatwindow\\\\postmessage.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (PostMessage);

/***/ }),

/***/ "./component/home/chat/chatnow/chatwindow/user.js":
/*!********************************************************!*\
  !*** ./component/home/chat/chatnow/chatwindow/user.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_userPhoto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../public/userPhoto */ "./component/public/userPhoto.js");
var _jsxFileName = "C:\\test\\component\\home\\chat\\chatnow\\chatwindow\\user.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function User(props) {
  return __jsx("div", {
    className: "jsx-3468094464" + " " + `user ${props.select}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3468094464" + " " + "photo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(_public_userPhoto__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("img", {
    src: "userphoto.jpg",
    alt: "\u5934\u50CF",
    className: "jsx-3468094464",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-3468094464" + " " + "message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "hello xiaoyiling  Do you work ?"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3468094464",
    __self: this
  }, ".user.jsx-3468094464{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;margin-bottom:3vh;}.right.jsx-3468094464{-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;}.right.jsx-3468094464 .message.jsx-3468094464{margin-left:0;margin-right:2vw;}.message.jsx-3468094464{max-width:70%;height:auto;min-height:2vh;margin-left:2vw;padding:20px;font-size:2vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:24px;background:white;box-shadow:0 0 4px black;}.photo.jsx-3468094464{width:4vw;height:4vw;margin-left:2vh;}.right.jsx-3468094464 .photo.jsx-3468094464{margin-left:0;margin-right:2vh;}img.jsx-3468094464{height:4vw;width:4vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx0ZXN0XFxjb21wb25lbnRcXGhvbWVcXGNoYXRcXGNoYXRub3dcXGNoYXR3aW5kb3dcXHVzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYzZCLEFBR3lDLEFBS2MsQUFHYixBQUlBLEFBYUosQUFLSSxBQUlILFVBUkEsQ0FTRCxHQTFCTyxBQUlMLEFBa0JLLE9BSkQsQUFTbkIsS0F0QmtCLEtBSmxCLEFBc0JBLE1BSkEsSUFibUIsZ0JBQ0gsYUFDQyxJQWhCSCxVQWlCRSxDQWhCSyxRQUlyQixVQUhBLHVEQWdCc0IsNkZBQ0EsbUJBQ0YsaUJBQ1MseUJBQzdCIiwiZmlsZSI6IkM6XFx0ZXN0XFxjb21wb25lbnRcXGhvbWVcXGNoYXRcXGNoYXRub3dcXGNoYXR3aW5kb3dcXHVzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQaG90byBmcm9tICcuLi8uLi8uLi8uLi9wdWJsaWMvdXNlclBob3RvJ1xyXG5cclxuZnVuY3Rpb24gVXNlcihwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHVzZXIgJHtwcm9wcy5zZWxlY3R9YH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBob3RvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBob3RvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cInVzZXJwaG90by5qcGdcIiBhbHQ9XCLlpLTlg49cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QaG90bz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICBoZWxsbyB4aWFveWlsaW5nICBEbyB5b3Ugd29yayA/ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD4ge2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnVzZXIgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjN2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246cm93LXJldmVyc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJpZ2h0IC5tZXNzYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6MnZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZXNzYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDo3MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6YXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6MnZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MnZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjJ2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MjRweDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDRweCBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucGhvdG8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6NHZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjR2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjJ2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmlnaHQgLnBob3RvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6MnZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NHZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6NHZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlclxyXG4iXX0= */\n/*@ sourceURL=C:\\\\test\\\\component\\\\home\\\\chat\\\\chatnow\\\\chatwindow\\\\user.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./component/home/chat/chatnow/chatwindow/window.js":
/*!**********************************************************!*\
  !*** ./component/home/chat/chatnow/chatwindow/window.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./component/home/chat/chatnow/chatwindow/user.js");
/* harmony import */ var _postmessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./postmessage */ "./component/home/chat/chatnow/chatwindow/postmessage.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context */ "./component/home/chat/context.js");
var _jsxFileName = "C:\\test\\component\\home\\chat\\chatnow\\chatwindow\\window.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function ChatWindow() {
  let {
    change
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_4__["ThemeContext"]);
  let classname = change ? 'scale' : '';
  return __jsx("div", {
    className: "jsx-184171157" + " " + `chat-window ${classname}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-184171157" + " " + "messageList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(_user__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx(_user__WEBPACK_IMPORTED_MODULE_2__["default"], {
    select: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx(_user__WEBPACK_IMPORTED_MODULE_2__["default"], {
    select: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-184171157" + " " + "sendmessage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(_postmessage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "184171157",
    __self: this
  }, ".chat-window.jsx-184171157{height:50%;width:100%;background:#fafafb;border-radius:12px;padding-top:1vh;overflow:auto;position:relative;-webkit-transition:0.4s;transition:0.4s;}.scale.jsx-184171157{height:78%;width:63%;}.messageList.jsx-184171157{padding-top:1vh;height:80%;width:100%;overflow:auto;}.sendmessage.jsx-184171157{height:20%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-shadow:0 -1px 2px #adadad;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx0ZXN0XFxjb21wb25lbnRcXGhvbWVcXGNoYXRcXGNoYXRub3dcXGNoYXR3aW5kb3dcXHdpbmRvdy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQnlCLEFBR3VDLEFBVUEsQUFJSyxBQU1MLFdBbkJBLEFBVUQsQUFVQyxLQU5BLEtBSGQsQ0FWc0IsQUFvQk4sS0FORixXQUNHLEdBZEssV0FldEIsUUFkbUIsZ0JBQ0YsY0FDSSxNQWlCSyxZQWhCTix3Q0FDcEIsK0NBZ0JzQiw2RkFDVyw4QkFDakMiLCJmaWxlIjoiQzpcXHRlc3RcXGNvbXBvbmVudFxcaG9tZVxcY2hhdFxcY2hhdG5vd1xcY2hhdHdpbmRvd1xcd2luZG93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi91c2VyJ1xyXG5pbXBvcnQgUG9zdE1zIGZyb20gJy4vcG9zdG1lc3NhZ2UnXHJcbmltcG9ydCB7VGhlbWVDb250ZXh0fSBmcm9tICcuLi8uLi9jb250ZXh0J1xyXG5cclxuXHJcbmZ1bmN0aW9uIENoYXRXaW5kb3coKSB7XHJcbiAgICBsZXQge2NoYW5nZX0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XHJcbiAgICBsZXQgY2xhc3NuYW1lID0gY2hhbmdlPydzY2FsZSc6Jyc7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY2hhdC13aW5kb3cgJHtjbGFzc25hbWV9YH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZUxpc3RcIj5cclxuICAgICAgICAgICAgICAgIDxVc2VyLz5cclxuICAgICAgICAgICAgICAgIDxVc2VyIHNlbGVjdD0ncmlnaHQnLz4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPFVzZXIgc2VsZWN0PSdyaWdodCcvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZW5kbWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgICAgPFBvc3RNcy8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PiB7YCAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2hhdC13aW5kb3cge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNmYWZhZmI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDoxdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzphdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zY2FsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NzglO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6NjMlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tZXNzYWdlTGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDoxdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ODAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OmF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNlbmRtZXNzYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoyMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6MCAtMXB4IDJweCAjYWRhZGFkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRXaW5kb3dcclxuIl19 */\n/*@ sourceURL=C:\\\\test\\\\component\\\\home\\\\chat\\\\chatnow\\\\chatwindow\\\\window.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (ChatWindow);

/***/ }),

/***/ "./component/home/chat/chattop/button.js":
/*!***********************************************!*\
  !*** ./component/home/chat/chattop/button.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context */ "./component/home/chat/context.js");
var _jsxFileName = "C:\\test\\component\\home\\chat\\chattop\\button.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Button(props) {
  let {
    change,
    event
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_2__["ThemeContext"]); //上下文引用

  const Ev = () => {
    event();
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, !change && __jsx("div", {
    onClick: Ev,
    className: "jsx-2295869013" + " " + 'chat-button',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("button", {
    className: "jsx-2295869013",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("svg", {
    t: "1578640454742",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "2550",
    width: "30",
    height: "30",
    className: "jsx-2295869013" + " " + "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("path", {
    d: "M193.349046 210.094207v130.995519c0.084979 23.530755-6.042025 43.024996-29.555785 43.105726h-0.195452c-23.649726-0.025494-33.940714-19.53673-34.004448-43.207701v-169.916017a41.580349 41.580349 0 0 1 41.784299-41.809792h170.328166c23.641228 0.029743 42.795552 10.707386 42.825294 34.36561 0.029743 23.535004-19.009859 29.445311-42.523618 29.475054H210.344896a16.995851 16.995851 0 0 0-16.99585 16.99585z m620.306058-16.99585H681.992498c-23.513759-0.025494-42.549112-5.935801-42.523618-29.470805 0.029743-23.662473 19.184066-34.335867 42.825294-34.369859H852.78805a41.580349 41.580349 0 0 1 41.618589 41.809792v169.920266c-0.063734 23.666722-10.354722 43.182207-34.000199 43.21195h-0.199701c-23.513759-0.084979-29.636515-19.57922-29.555785-43.109975v-130.995519a16.995851 16.995851 0 0 0-16.99585-16.99585zM210.344896 830.09434H342.007502c23.513759 0.025494 42.553361 5.94005 42.523618 29.470805-0.029743 23.662473-19.184066 34.335867-42.825294 34.369859H171.21195a41.580349 41.580349 0 0 1-41.618589-41.809792v-169.916017c0.063734-23.670971 10.354722-43.186456 34.004448-43.21195h0.195452c23.513759 0.084979 29.636515 19.574971 29.555785 43.105726v130.995519a16.995851 16.995851 0 0 0 16.99585 16.99585z m620.306058-16.859884v-130.991269c-0.084979-23.535004 6.042025-43.024996 29.555785-43.109975h0.199701c23.645477 0.029743 33.936465 19.545228 34.000199 43.21195v169.916016a41.580349 41.580349 0 0 1-41.784299 41.809793h-170.328166c-23.641228-0.029743-42.795552-10.707386-42.825294-34.36561-0.025494-23.535004 19.009859-29.445311 42.523618-29.475054H813.655104a16.995851 16.995851 0 0 0 16.99585-16.995851z",
    "p-id": "2551",
    className: "jsx-2295869013",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2295869013",
    __self: this
  }, ".chat-button.jsx-2295869013{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:2vh;border-radius:6px;-webkit-transition:.2s;transition:.2s;height:40px;width:40px;}.chat-button.jsx-2295869013:hover{-webkit-transform:scale(1.2,1.2);-ms-transform:scale(1.2,1.2);transform:scale(1.2,1.2);background:white;box-shadow:0 0 2px #888;}.chat-button.jsx-2295869013:active{box-shadow:none;-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);}button.jsx-2295869013{background:none;border:none;outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx0ZXN0XFxjb21wb25lbnRcXGhvbWVcXGNoYXRcXGNoYXR0b3BcXGJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQnlCLEFBRzZDLEFBVVksQUFLVCxBQUlBLGdCQUZwQixBQUdnQixZQUNDLGFBQ2hCLGlDQXJCMEIsYUFVTixJQU1wQixhQUw0Qix3QkFDNUIsNkNBWHNCLDZGQUNGLGlCQUNDLGtCQUNILHNDQUNILFlBQ0QsV0FDZCIsImZpbGUiOiJDOlxcdGVzdFxcY29tcG9uZW50XFxob21lXFxjaGF0XFxjaGF0dG9wXFxidXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1RoZW1lQ29udGV4dH0gZnJvbSAnLi4vY29udGV4dCdcclxuXHJcblxyXG5mdW5jdGlvbiBCdXR0b24ocHJvcHMpIHtcclxuICAgIGxldCB7Y2hhbmdlLGV2ZW50fSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTsgLy/kuIrkuIvmloflvJXnlKhcclxuICAgICBcclxuICAgIGNvbnN0IEV2ID0gKCkgPT57ICAgICAgICAgXHJcbiAgICAgICAgZXZlbnQoKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgeyAhY2hhbmdlICYmXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGF0LWJ1dHRvbicgb25DbGljaz17RXZ9PlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxidXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB0PVwiMTU3ODY0MDQ1NDc0MlwiIGNsYXNzTmFtZT1cImljb25cIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgcC1pZD1cIjI1NTBcIiB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIj48cGF0aCBkPVwiTTE5My4zNDkwNDYgMjEwLjA5NDIwN3YxMzAuOTk1NTE5YzAuMDg0OTc5IDIzLjUzMDc1NS02LjA0MjAyNSA0My4wMjQ5OTYtMjkuNTU1Nzg1IDQzLjEwNTcyNmgtMC4xOTU0NTJjLTIzLjY0OTcyNi0wLjAyNTQ5NC0zMy45NDA3MTQtMTkuNTM2NzMtMzQuMDA0NDQ4LTQzLjIwNzcwMXYtMTY5LjkxNjAxN2E0MS41ODAzNDkgNDEuNTgwMzQ5IDAgMCAxIDQxLjc4NDI5OS00MS44MDk3OTJoMTcwLjMyODE2NmMyMy42NDEyMjggMC4wMjk3NDMgNDIuNzk1NTUyIDEwLjcwNzM4NiA0Mi44MjUyOTQgMzQuMzY1NjEgMC4wMjk3NDMgMjMuNTM1MDA0LTE5LjAwOTg1OSAyOS40NDUzMTEtNDIuNTIzNjE4IDI5LjQ3NTA1NEgyMTAuMzQ0ODk2YTE2Ljk5NTg1MSAxNi45OTU4NTEgMCAwIDAtMTYuOTk1ODUgMTYuOTk1ODV6IG02MjAuMzA2MDU4LTE2Ljk5NTg1SDY4MS45OTI0OThjLTIzLjUxMzc1OS0wLjAyNTQ5NC00Mi41NDkxMTItNS45MzU4MDEtNDIuNTIzNjE4LTI5LjQ3MDgwNSAwLjAyOTc0My0yMy42NjI0NzMgMTkuMTg0MDY2LTM0LjMzNTg2NyA0Mi44MjUyOTQtMzQuMzY5ODU5SDg1Mi43ODgwNWE0MS41ODAzNDkgNDEuNTgwMzQ5IDAgMCAxIDQxLjYxODU4OSA0MS44MDk3OTJ2MTY5LjkyMDI2NmMtMC4wNjM3MzQgMjMuNjY2NzIyLTEwLjM1NDcyMiA0My4xODIyMDctMzQuMDAwMTk5IDQzLjIxMTk1aC0wLjE5OTcwMWMtMjMuNTEzNzU5LTAuMDg0OTc5LTI5LjYzNjUxNS0xOS41NzkyMi0yOS41NTU3ODUtNDMuMTA5OTc1di0xMzAuOTk1NTE5YTE2Ljk5NTg1MSAxNi45OTU4NTEgMCAwIDAtMTYuOTk1ODUtMTYuOTk1ODV6TTIxMC4zNDQ4OTYgODMwLjA5NDM0SDM0Mi4wMDc1MDJjMjMuNTEzNzU5IDAuMDI1NDk0IDQyLjU1MzM2MSA1Ljk0MDA1IDQyLjUyMzYxOCAyOS40NzA4MDUtMC4wMjk3NDMgMjMuNjYyNDczLTE5LjE4NDA2NiAzNC4zMzU4NjctNDIuODI1Mjk0IDM0LjM2OTg1OUgxNzEuMjExOTVhNDEuNTgwMzQ5IDQxLjU4MDM0OSAwIDAgMS00MS42MTg1ODktNDEuODA5Nzkydi0xNjkuOTE2MDE3YzAuMDYzNzM0LTIzLjY3MDk3MSAxMC4zNTQ3MjItNDMuMTg2NDU2IDM0LjAwNDQ0OC00My4yMTE5NWgwLjE5NTQ1MmMyMy41MTM3NTkgMC4wODQ5NzkgMjkuNjM2NTE1IDE5LjU3NDk3MSAyOS41NTU3ODUgNDMuMTA1NzI2djEzMC45OTU1MTlhMTYuOTk1ODUxIDE2Ljk5NTg1MSAwIDAgMCAxNi45OTU4NSAxNi45OTU4NXogbTYyMC4zMDYwNTgtMTYuODU5ODg0di0xMzAuOTkxMjY5Yy0wLjA4NDk3OS0yMy41MzUwMDQgNi4wNDIwMjUtNDMuMDI0OTk2IDI5LjU1NTc4NS00My4xMDk5NzVoMC4xOTk3MDFjMjMuNjQ1NDc3IDAuMDI5NzQzIDMzLjkzNjQ2NSAxOS41NDUyMjggMzQuMDAwMTk5IDQzLjIxMTk1djE2OS45MTYwMTZhNDEuNTgwMzQ5IDQxLjU4MDM0OSAwIDAgMS00MS43ODQyOTkgNDEuODA5NzkzaC0xNzAuMzI4MTY2Yy0yMy42NDEyMjgtMC4wMjk3NDMtNDIuNzk1NTUyLTEwLjcwNzM4Ni00Mi44MjUyOTQtMzQuMzY1NjEtMC4wMjU0OTQtMjMuNTM1MDA0IDE5LjAwOTg1OS0yOS40NDUzMTEgNDIuNTIzNjE4LTI5LjQ3NTA1NEg4MTMuNjU1MTA0YTE2Ljk5NTg1MSAxNi45OTU4NTEgMCAwIDAgMTYuOTk1ODUtMTYuOTk1ODUxelwiIHAtaWQ9XCIyNTUxXCI+PC9wYXRoPjwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8c3R5bGUganN4PiB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNoYXQtYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjJ2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOi4ycztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDo0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNoYXQtYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMS4yLDEuMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDp3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMnB4ICM4ODg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2hhdC1idXR0b246YWN0aXZle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6bm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMSwxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTpub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbiJdfQ== */\n/*@ sourceURL=C:\\\\test\\\\component\\\\home\\\\chat\\\\chattop\\\\button.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./component/home/chat/chattop/chatTop.js":
/*!************************************************!*\
  !*** ./component/home/chat/chattop/chatTop.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _title_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./title.js */ "./component/home/chat/chattop/title.js");
/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button.js */ "./component/home/chat/chattop/button.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context */ "./component/home/chat/context.js");
var _jsxFileName = "C:\\test\\component\\home\\chat\\chattop\\chatTop.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function ChatTop() {
  let {
    change
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_4__["ThemeContext"]);
  let classname = change ? 'scale' : '';
  return __jsx("div", {
    className: "jsx-1585957635" + " " + `chat-top ${classname}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(_title_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx(_button_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1585957635",
    __self: this
  }, ".chat-top.jsx-1585957635{width:100%;height:8%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:0.4s;transition:0.4s;}.scale.jsx-1585957635{width:65%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx0ZXN0XFxjb21wb25lbnRcXGhvbWVcXGNoYXRcXGNoYXR0b3BcXGNoYXRUb3AuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWXlCLEFBR29DLEFBUUYsVUFDYixDQVJjLFVBQ0csMEVBQ2lCLG1IQUNYLDZGQUNGLHdDQUNyQiIsImZpbGUiOiJDOlxcdGVzdFxcY29tcG9uZW50XFxob21lXFxjaGF0XFxjaGF0dG9wXFxjaGF0VG9wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFRpdGxlIGZyb20gJy4vdGl0bGUuanMnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9idXR0b24uanMnXHJcbmltcG9ydCB7VGhlbWVDb250ZXh0fSBmcm9tICcuLi9jb250ZXh0J1xyXG5cclxuZnVuY3Rpb24gQ2hhdFRvcCgpIHtcclxuICAgIGxldCB7Y2hhbmdlfSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcclxuICAgIGxldCBjbGFzc25hbWUgPSBjaGFuZ2U/J3NjYWxlJzonJztcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BjaGF0LXRvcCAke2NsYXNzbmFtZX1gfT5cclxuICAgICAgICAgICAgPFRpdGxlLz5cclxuICAgICAgICAgICAgPEJ1dHRvbi8+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+IHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLmNoYXQtdG9wIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6OCU7ICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAuc2NhbGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDo2NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPiAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdFRvcFxyXG4iXX0= */\n/*@ sourceURL=C:\\\\test\\\\component\\\\home\\\\chat\\\\chattop\\\\chatTop.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (ChatTop);

/***/ }),

/***/ "./component/home/chat/chattop/title.js":
/*!**********************************************!*\
  !*** ./component/home/chat/chattop/title.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\test\\component\\home\\chat\\chattop\\title.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Title() {
  return __jsx("div", {
    className: "jsx-157310433" + " " + 'title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-157310433",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Quick Chat"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "157310433",
    __self: this
  }, ".title.jsx-157310433{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:2vh;color:#595e7c;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx0ZXN0XFxjb21wb25lbnRcXGhvbWVcXGNoYXRcXGNoYXR0b3BcXHRpdGxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU13QixBQUdtQywwRUFDTSw2RkFDRixpQkFDSCxjQUNqQiIsImZpbGUiOiJDOlxcdGVzdFxcY29tcG9uZW50XFxob21lXFxjaGF0XFxjaGF0dG9wXFx0aXRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIFRpdGxlKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUnPlxyXG4gICAgICAgICAgIDxoMj5RdWljayBDaGF0PC9oMj5cclxuICAgICAgICAgICA8c3R5bGUganN4PiB7YFxyXG4gICAgICAgICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjJ2aDtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiM1OTVlN2M7XHJcbiAgICAgICAgICAgICAgICAgIH0gICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGl0bGVcclxuIl19 */\n/*@ sourceURL=C:\\\\test\\\\component\\\\home\\\\chat\\\\chattop\\\\title.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./component/home/chat/context.js":
/*!****************************************!*\
  !*** ./component/home/chat/context.js ***!
  \****************************************/
/*! exports provided: ThemeContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

let change = {
  status: false
};
const ThemeContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  change,
  toggleTheme: () => {}
});

/***/ }),

/***/ "./component/home/chat/index-error.js":
/*!********************************************!*\
  !*** ./component/home/chat/index-error.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CoolError; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./component/home/chat/index.js");
var _jsxFileName = "C:\\test\\component\\home\\chat\\index-error.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class CoolError extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(err) {
    return {
      hasError: true
    };
  }

  render() {
    if (this.hasError) {
      return __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "something is wronng");
    } else {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx(_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }));
    }
  }

}

/***/ }),

/***/ "./component/home/chat/index.js":
/*!**************************************!*\
  !*** ./component/home/chat/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chattop_chatTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chattop/chatTop */ "./component/home/chat/chattop/chatTop.js");
/* harmony import */ var _chatnow_chatstatus_chatbuddyList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chatnow/chatstatus/chatbuddyList */ "./component/home/chat/chatnow/chatstatus/chatbuddyList.js");
/* harmony import */ var _chatnow_chatwindow_window__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chatnow/chatwindow/window */ "./component/home/chat/chatnow/chatwindow/window.js");
/* harmony import */ var _buddy_buddyList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buddy/buddyList */ "./component/home/chat/buddy/buddyList.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./context */ "./component/home/chat/context.js");
var _jsxFileName = "C:\\test\\component\\home\\chat\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




 //上下文对象引用



function ChatIndex() {
  const {
    0: change,
    1: setChange
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);

  const closeEv = () => {
    setChange(prevState => !prevState);
  };

  let classname = change ? 'scale' : '';
  return __jsx("div", {
    className: "jsx-3486699884" + " " + `Chat ${classname}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(_context__WEBPACK_IMPORTED_MODULE_6__["ThemeContext"].Provider, {
    value: {
      change,
      event: () => {
        setChange(prevState => !prevState);
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3486699884" + " " + "chat-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(_chattop_chatTop__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx(_chatnow_chatstatus_chatbuddyList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx(_chatnow_chatwindow_window__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx(_buddy_buddyList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), change && __jsx("div", {
    onClick: closeEv,
    className: "jsx-3486699884" + " " + "back",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("svg", {
    t: "1578835015370",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "1284",
    id: "mx_n_1578835015372",
    width: "40",
    height: "40",
    className: "jsx-3486699884" + " " + "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("path", {
    d: "M666.624 171.690667a25.6 25.6 0 0 0-36.181333-36.181334l-358.4 358.4a25.6 25.6 0 0 0 0 36.181334l358.4 358.4a25.6 25.6 0 0 0 36.181333-36.181334L326.314667 512l340.309333-340.309333z",
    fill: "#13227a",
    "p-id": "1285",
    className: "jsx-3486699884",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3486699884",
    __self: this
  }, ".Chat.jsx-3486699884{height:100%;width:30%;padding:2vw;background:white;position:absolute;z-index:30;right:0;-webkit-transition:0.4s;transition:0.4s;}.chat-container.jsx-3486699884{height:100%;width:100%;border-radius:3vh;overflow:hidden;}.scale.jsx-3486699884{width:80%;}.back.jsx-3486699884{height:100%;position:absolute;left:0;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}.back.jsx-3486699884 svg.jsx-3486699884{-webkit-transition:.2s;transition:.2s;}.back.jsx-3486699884:hover{background:#238cff;}.back.jsx-3486699884:hover>svg.jsx-3486699884{-webkit-transform:scale(1.2,1.2);-ms-transform:scale(1.2,1.2);transform:scale(1.2,1.2);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx0ZXN0XFxjb21wb25lbnRcXGhvbWVcXGNoYXRcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDeUIsQUFHNEMsQUFVQSxBQU1ELEFBR0MsQUFTRyxBQUdJLEFBR08sVUFqQjdCLEVBaEJhLEFBVUMsQUFTTyxPQVlyQixHQTlCZSxDQVVNLE9BU1gsSUFsQlUsR0FtQlgsQ0FPVCxHQWhCbUIsRUFVSCxRQW5CSyxNQVVyQixZQVRjLFdBQ0gsT0E2QlgsQ0E1Qm9CLDZCQWlCRSxXQWhCdEIsa0ZBaUI2Qix1RkFDN0IiLCJmaWxlIjoiQzpcXHRlc3RcXGNvbXBvbmVudFxcaG9tZVxcY2hhdFxcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBUb3AgZnJvbSAnLi9jaGF0dG9wL2NoYXRUb3AnXHJcbmltcG9ydCBDaGF0QnVkZHkgZnJvbSAnLi9jaGF0bm93L2NoYXRzdGF0dXMvY2hhdGJ1ZGR5TGlzdCdcclxuaW1wb3J0IFdpbmRvdyBmcm9tICcuL2NoYXRub3cvY2hhdHdpbmRvdy93aW5kb3cnXHJcbmltcG9ydCBCdWRkeSBmcm9tICcuL2J1ZGR5L2J1ZGR5TGlzdCdcclxuXHJcbi8v5LiK5LiL5paH5a+56LGh5byV55SoXHJcbmltcG9ydCB7VGhlbWVDb250ZXh0fSBmcm9tICcuL2NvbnRleHQnXHJcblxyXG5mdW5jdGlvbiBDaGF0SW5kZXgoKSB7XHJcbiAgICBcclxuICAgIGNvbnN0IFtjaGFuZ2UsIHNldENoYW5nZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IGNsb3NlRXYgPSAoKSA9PiB7ICAgICAgICBcclxuICAgICAgICBzZXRDaGFuZ2UocHJldlN0YXRlID0+ICFwcmV2U3RhdGUpXHJcbiAgICB9XHJcbiAgICBsZXQgY2xhc3NuYW1lID0gY2hhbmdlPydzY2FsZSc6Jyc7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BDaGF0ICR7Y2xhc3NuYW1lfWB9ID5cclxuICAgICAgICAgICAgPFRoZW1lQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgIGNoYW5nZSxcclxuICAgICAgICAgICAgICBldmVudDooKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRDaGFuZ2UocHJldlN0YXRlID0+IXByZXZTdGF0ZSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWNvbnRhaW5lclwiPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxUb3AvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGF0QnVkZHkvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxXaW5kb3cvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdWRkeS8+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2UgJiYgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja1wiIG9uQ2xpY2s9e2Nsb3NlRXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB0PVwiMTU3ODgzNTAxNTM3MFwiIGNsYXNzTmFtZT1cImljb25cIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgcC1pZD1cIjEyODRcIiBpZD1cIm14X25fMTU3ODgzNTAxNTM3MlwiIHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCI0MFwiPjxwYXRoIGQ9XCJNNjY2LjYyNCAxNzEuNjkwNjY3YTI1LjYgMjUuNiAwIDAgMC0zNi4xODEzMzMtMzYuMTgxMzM0bC0zNTguNCAzNTguNGEyNS42IDI1LjYgMCAwIDAgMCAzNi4xODEzMzRsMzU4LjQgMzU4LjRhMjUuNiAyNS42IDAgMCAwIDM2LjE4MTMzMy0zNi4xODEzMzRMMzI2LjMxNDY2NyA1MTJsMzQwLjMwOTMzMy0zNDAuMzA5MzMzelwiIGZpbGw9XCIjMTMyMjdhXCIgcC1pZD1cIjEyODVcIj48L3BhdGg+PC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1RoZW1lQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD4ge2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5DaGF0IHsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDozMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoydnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDp3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OjMwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jaGF0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjN2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2NhbGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDo4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDowO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDowOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5iYWNrIHN2ZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjouMnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYmFjazpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojMjM4Y2ZmOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYmFjazpob3Zlcj5zdmcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yLDEuMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcblxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0SW5kZXhcclxuIl19 */\n/*@ sourceURL=C:\\\\test\\\\component\\\\home\\\\chat\\\\index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (ChatIndex);

/***/ }),

/***/ "./component/public/userPhoto.js":
/*!***************************************!*\
  !*** ./component/public/userPhoto.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\test\\component\\public\\userPhoto.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function UserPhoto(props) {
  return __jsx("div", {
    className: "jsx-2292441325" + " " + 'user-photo',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2292441325",
    __self: this
  }, ".user-photo.jsx-2292441325{width:100%;height:100%;border-radius:12px;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx0ZXN0XFxjb21wb25lbnRcXHB1YmxpY1xcdXNlclBob3RvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU15QixBQUd1QyxXQUNDLFlBQ08sbUJBQ0gsZ0JBQ25CIiwiZmlsZSI6IkM6XFx0ZXN0XFxjb21wb25lbnRcXHB1YmxpY1xcdXNlclBob3RvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gVXNlclBob3RvKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd1c2VyLXBob3RvJz5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8c3R5bGUganN4PiB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudXNlci1waG90byB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlclBob3RvXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\test\\\\component\\\\public\\\\userPhoto.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (UserPhoto);

/***/ }),

/***/ "./pages/test.js":
/*!***********************!*\
  !*** ./pages/test.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_home_chat_index_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/home/chat/index-error */ "./component/home/chat/index-error.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\test\\pages\\test.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Comment = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../component/test-component/dymain */ "./component/test-component/dymain.js")), {
  loading: () => __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "... hehehehehehehehehe"),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../component/test-component/dymain */ "./component/test-component/dymain.js")],
    modules: ['../component/test-component/dymain']
  }
});

function Test() {
  const {
    0: STATUS,
    1: setSTATUS
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  return __jsx("div", {
    className: "jsx-1740848790",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-1740848790",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "My test"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    key: "viewport",
    className: "jsx-1740848790",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "//at.alicdn.com/t/font_1492911_fp5zlq6dxvp.css",
    className: "jsx-1740848790",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })), __jsx("i", {
    onClick: () => setSTATUS(true),
    className: "jsx-1740848790" + " " + "iconfont icon-aixin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), STATUS && __jsx(Comment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1740848790",
    __self: this
  }, "i.jsx-1740848790{color:red;font-size:2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx0ZXN0XFxwYWdlc1xcdGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQm1CLEFBSWlDLFVBQ0ssZUFDbkIiLCJmaWxlIjoiQzpcXHRlc3RcXHBhZ2VzXFx0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBFcnJvciBmcm9tICcuLi9jb21wb25lbnQvaG9tZS9jaGF0L2luZGV4LWVycm9yJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcclxuXHJcbmNvbnN0IENvbW1lbnQgPSBkeW5hbWljKGltcG9ydCgnLi4vY29tcG9uZW50L3Rlc3QtY29tcG9uZW50L2R5bWFpbicpLHtcclxuICAgIGxvYWRpbmc6ICgpID0+IDxwPi4uLiBoZWhlaGVoZWhlaGVoZWhlaGU8L3A+XHJcbiAgfSk7XHJcblxyXG5mdW5jdGlvbiBUZXN0KCkge1xyXG4gICAgY29uc3QgW1NUQVRVUywgc2V0U1RBVFVTXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT5NeSB0ZXN0PC90aXRsZT5cclxuICAgICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcclxuICAgICAgICAgICAgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIlxyXG4gICAgICAgICAgICBrZXk9XCJ2aWV3cG9ydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzE0OTI5MTFfZnA1emxxNmR4dnAuY3NzXCIvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb25mb250IGljb24tYWl4aW5cIiBvbkNsaWNrPXsoKSA9PiBzZXRTVEFUVVModHJ1ZSl9PjwvaT5cclxuICAgICAgICAgICAgey8qIDxFcnJvci8+ICovfVxyXG4gICAgICAgICAgICB7U1RBVFVTICYmIDxDb21tZW50Lz59XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6cmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToycmVtO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlc3RcclxuIl19 */\n/*@ sourceURL=C:\\\\test\\\\pages\\\\test.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Test);

/***/ }),

/***/ 3:
/*!*****************************!*\
  !*** multi ./pages/test.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\test\pages\test.js */"./pages/test.js");


/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=test.js.map