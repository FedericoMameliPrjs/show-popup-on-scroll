/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/test.style.css":
/*!********************************!*\
  !*** ./src/css/test.style.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/test.style.css?");

/***/ }),

/***/ "./src/js/ShowPopupOnScroll.js":
/*!*************************************!*\
  !*** ./src/js/ShowPopupOnScroll.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//require('bootstrap/js/dist/util.js');\n//require('bootstrap/js/dist/modal.js');\n/* harmony default export */ __webpack_exports__[\"default\"] = (class {\n  constructor(config = {}) {\n    this.popupElement = document.querySelector(this.constructor._getClasses().popupBox);\n    this.breakpoint = this._validateConfig(config, this.constructor._getAllowedConfigProperties()[0], null);\n    this.showTimes = this._validateConfig(config, this.constructor._getAllowedConfigProperties()[1], null);\n    this.backdrop = this._validateConfig(config, this.constructor._getAllowedConfigProperties()[2], false);\n    this.show = this._validateConfig(config, this.constructor._getAllowedConfigProperties()[3], false);\n    this.shownTimes = 0;\n    this.nScrolls = document.body.offsetHeight / innerHeight;\n    this.lastScrollAmount = innerHeight * (this.nScrolls - Math.floor(this.nScrolls));\n    this.threshold = document.body.offsetHeight - this.lastScrollAmount;\n    this.userPosition = scrollY + innerHeight;\n\n    this._isBootstrapModal();\n\n    this.init();\n  }\n  /*PRIVATE STUFF*/\n\n\n  static _getClasses() {\n    return {\n      popupBox: '.popup',\n      popupShowUp: '.showUp',\n      popupHideDown: '.hideDown',\n      popupCloseBtn: '.popup-close',\n      popupBackdrop: '.popup-backdrop'\n    };\n  }\n\n  static _getAllowedConfigProperties() {\n    return ['breakpoint', 'showTimes', 'backdrop', 'show'];\n  }\n\n  init() {\n    /*verifico breakpoint*/\n    if (this.breakpoint !== null && this.breakpoint > 0) {\n      if (innerWidth < this.breakpoint) {\n        this._showOnStart();\n\n        window.addEventListener('scroll', this._scrollEvent.bind(this));\n      } //setto evento per la chiusura\n\n\n      document.querySelector(this.constructor._getClasses().popupCloseBtn).addEventListener('click', this._onCloseEvent.bind(this));\n      window.addEventListener('keyup', key => {\n        if (key.key.toUpperCase() === 'ESCAPE') this._onCloseEvent();\n      });\n    } else throw \"Breakpoint option must be greater then 0.\";\n  }\n\n  _validateConfig(config, property, defaultValue = null) {\n    if (typeof config === 'object') {\n      if (this.constructor._getAllowedConfigProperties().includes(property)) return config.hasOwnProperty(property) ? config[property] : defaultValue;else return undefined;\n    } else throw \"Config is not an object\";\n  }\n\n  _showOnStart() {\n    if (this.show) {\n      this._showBackdrop();\n\n      this.popup('show');\n    } else {\n      this.shownTimes = -1;\n      this.popup('hide');\n    }\n  }\n\n  _isBootstrapModal() {\n    if (this.popupElement.classList.contains('modal')) {\n      //remove close event on button\n      const modalCloseBnt = document.querySelector('.modal.popup button.close');\n      modalCloseBnt.attributes[\"data-dismiss\"].value = \"\";\n      modalCloseBnt.classList.remove('close');\n      modalCloseBnt.classList.add(this.constructor._getClasses().popupCloseBtn.replace('.', ''));\n      $(this.popupElement).modal({\n        backdrop: false,\n        keyboard: false,\n        show: true\n      });\n      document.querySelector('body').classList.remove('modal-open');\n    }\n  }\n\n  _createBackdrop() {\n    const backdropElement = document.createElement('div');\n    backdropElement.classList.add(this.constructor._getClasses().popupBackdrop.replace('.', ''));\n    document.body.insertAdjacentElement('beforeend', backdropElement);\n    document.body.style.overflowY = 'hidden';\n    return backdropElement;\n  }\n\n  _removeBackdrop() {\n    document.body.removeChild(document.querySelector(this.constructor._getClasses().popupBackdrop));\n    document.body.style.overflowY = 'initial';\n  }\n\n  _scrollEvent() {\n    //posso mostrare il popup?\n    if (this.shownTimes < this.showTimes) {\n      //se il popup e' stato mostrato meno volte di quanto dovrei si\n      //ho superato il threshold e sto e sto risalendo su?\n      if (scrollY + innerHeight > this.threshold && scrollY + innerHeight < this.userPosition) {\n        //1. si, se non trovo 'backdrop' nel dom e devo crearlo => lo creo\n        this._showBackdrop(); //2. mostro il popup\n\n\n        this.popup('show');\n      } //salvo posizione dell'utente\n\n\n      this.userPosition = scrollY + innerHeight;\n    } else window.removeEventListener('scroll', this._scrollEvent);\n  }\n\n  _onCloseEvent() {\n    if (document.querySelector(this.constructor._getClasses().popupBackdrop)) this._removeBackdrop();\n    this.popup('hide');\n  }\n\n  _showBackdrop() {\n    if (!document.querySelector(this.constructor._getClasses().popupBackdrop) && this.backdrop) {\n      let backdropElement = this._createBackdrop(); //Al click sul backdrop devo chiudere il popup?\n\n\n      if (this.backdrop === true) backdropElement.addEventListener('click', this._onCloseEvent.bind(this));\n    }\n  }\n\n  popup(v) {\n    switch (v) {\n      case 'show':\n        document.querySelector(this.constructor._getClasses().popupBox).classList.remove('hideDown');\n        document.querySelector(this.constructor._getClasses().popupBox).classList.add('showUp');\n        break;\n\n      case 'hide':\n        document.querySelector(this.constructor._getClasses().popupBox).classList.remove('showUp');\n        document.querySelector(this.constructor._getClasses().popupBox).classList.add('hideDown');\n        this.shownTimes++;\n        break;\n    }\n  }\n\n});\n/*\r\n*\r\n* breakpoint => definisce fino a quale dispositivo visualizzare il popup => default nessuno\r\n* showTimes => inidica quante volte deve mostrarsi il popup. default => sempre\r\n* autoStart => se true\r\n* backdrop => (true | 'sticky' | false)\r\n* */\n\n//# sourceURL=webpack:///./src/js/ShowPopupOnScroll.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//import ShowPopupOnScroll from './ShowPopupOnScroll';\nwindow.ShowPopupOnScroll = __webpack_require__(/*! ./ShowPopupOnScroll */ \"./src/js/ShowPopupOnScroll.js\"); //$('.modal').modal('show');\n\n/*const a = new ShowPopupOnScroll({\r\n    breakpoint: 768,\r\n    backdrop: true,\r\n    show: true,\r\n    showTimes: 5\r\n\r\n});\r\nconsole.log(a);*/\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ 0:
/*!********************************************************!*\
  !*** multi ./src/js/index.js ./src/css/test.style.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/js/index.js */\"./src/js/index.js\");\nmodule.exports = __webpack_require__(/*! ./src/css/test.style.css */\"./src/css/test.style.css\");\n\n\n//# sourceURL=webpack:///multi_./src/js/index.js_./src/css/test.style.css?");

/***/ })

/******/ });