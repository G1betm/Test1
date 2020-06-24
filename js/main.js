/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/archive/info_wrap_1/info_block1.js":
/*!***************************************************************!*\
  !*** ./src/blocks/modules/archive/info_wrap_1/info_block1.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

var wrap1 = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#wrapper1'),
    btn1 = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.open-modal-btn1'),
    modal1 = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.cover1, .modal1, .content1');
btn1.on('click', function () {
  modal1.fadeIn();
}); // close modal

jquery__WEBPACK_IMPORTED_MODULE_0___default()('.modal1').click(function () {
  wrap1.on('click', function (event) {
    var select1 = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.content1');
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).closest(select1).length) return;
    modal1.fadeOut();
    wrap1.unbind('click');
  });
});
var wrap = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#wrapper'),
    btn = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.open-modal-btn'),
    modal = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.cover, .modal, .content');
btn.on('click', function () {
  modal.fadeIn();
}); // close modal

jquery__WEBPACK_IMPORTED_MODULE_0___default()('.modal').click(function () {
  wrap.on('click', function (event) {
    var select = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.content');
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).closest(select).length) return;
    modal.fadeOut();
    wrap.unbind('click');
  });
});
var wrap_vacan = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#wrapper_vacan'),
    btn_vacan = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.open-modal-btn_vacan'),
    modal_vacan = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.cover_vacan, .modal_vacan, .content_vacan');
btn_vacan.on('click', function () {
  modal_vacan.fadeIn();
}); // close modal

jquery__WEBPACK_IMPORTED_MODULE_0___default()('.modal_vacan').click(function () {
  wrap_vacan.on('click', function (event) {
    var select_vacan = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.content_vacan');
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).closest(select_vacan).length) return;
    modal_vacan.fadeOut();
    wrap_vacan.unbind('click');
  });
}); // close modal

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).click(function (e) {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest('.my-form-status_contacts').length) {
    // клик внутри элемента 
    return;
  } // клик снаружи элемента 


  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.my-form-status_contacts').fadeOut();
});

/***/ }),

/***/ "./src/blocks/modules/bank/info_wrap_1/info_block1.js":
/*!************************************************************!*\
  !*** ./src/blocks/modules/bank/info_wrap_1/info_block1.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  Hidden();
});

function Hidden() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#popup1").hide();
}

;
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.right_btn_info').click(function PopUpShow() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#popup1").show();
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.close_btn').click(function PopUpHide() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#popup1").hide();
});

/***/ }),

/***/ "./src/blocks/modules/contacts/info_wrap_1/info_block1.js":
/*!****************************************************************!*\
  !*** ./src/blocks/modules/contacts/info_wrap_1/info_block1.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/**window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.querySelector(".my-form_contacts");
    var button = document.querySelector(".my-form-button_contacts");
    var status = document.querySelector(".my-form-status_contacts");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      button.style = "display: none ";
      status.style = "display: block";
       setTimeout(function(){ 
         status.style = "display: none"; 
    }, 10000);
    }


    function error() {
      status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
  */

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  Hidden();
});

function Hidden() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#popup1").hide();
}

;
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.right_btn_info').click(function PopUpShow() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#popup1").show();
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.close_btn').click(function PopUpHide() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#popup1").hide();
});

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/gov/info_wrap_1/info_block1.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/gov/info_wrap_1/info_block1.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  Hidden();
});

function Hidden() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#popup1").hide();
}

;
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.right_btn_info').click(function PopUpShow() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#popup1").show();
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.close_btn').click(function PopUpHide() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#popup1").hide();
});

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

var wrap_tel = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#wrapper_tel'),
    btn_tel = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.open-modal-btn_tel'),
    modal_tel = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.cover_tel, .modal_tel, .content_tel');
btn_tel.on('click', function () {
  modal_tel.fadeIn();
}); // close modal

jquery__WEBPACK_IMPORTED_MODULE_0___default()('.modal_tel').click(function () {
  wrap_tel.on('click', function (event) {
    var select_tel = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.content_tel');
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).closest(select_tel).length) return;
    modal_tel.fadeOut();
    wrap_tel.unbind('click');
  });
});
var wrap_tend = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#wrapper_tend'),
    btn_tend = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.open-modal-btn_tend'),
    modal_tend = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.cover_tend, .modal_tend, .content_tend');
btn_tend.on('click', function () {
  modal_tend.fadeIn();
}); // close modal

jquery__WEBPACK_IMPORTED_MODULE_0___default()('.modal_tend').click(function () {
  wrap_tend.on('click', function (event) {
    var select_tend = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.content_tend');
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).closest(select_tend).length) return;
    modal_tend.fadeOut();
    wrap_tend.unbind('click');
  });
});

/***/ }),

/***/ "./src/blocks/modules/main/tabs_block2/tabs_block2.js":
/*!************************************************************!*\
  !*** ./src/blocks/modules/main/tabs_block2/tabs_block2.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tabs__block--title').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent('.tabs__block--item').find('.tabs__block--body').toggleClass('opened');
  });
});

/***/ }),

/***/ "./src/blocks/modules/med/info_wrap_1/info_block1.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/med/info_wrap_1/info_block1.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  Hidden();
});

function Hidden() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#popup1").hide();
}

;
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.right_btn_info').click(function PopUpShow() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#popup1").show();
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.close_btn').click(function PopUpHide() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#popup1").hide();
});

/***/ }),

/***/ "./src/blocks/modules/med/info_wrap_5/info_block5.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/med/info_wrap_5/info_block5.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  Hidden();
});

function Hidden() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#popup2").hide();
}

;
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.cost_info_btn').click(function PopUpShow() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#popup2").show();
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.close_btn').click(function PopUpHide() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#popup2").hide();
});

/***/ }),

/***/ "./src/blocks/modules/office/info_wrap_1/info_block1.js":
/*!**************************************************************!*\
  !*** ./src/blocks/modules/office/info_wrap_1/info_block1.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  Hidden();
});

function Hidden() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#popup1").hide();
}

;
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.right_btn_info').click(function PopUpShow() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#popup1").show();
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.close_btn').click(function PopUpHide() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#popup1").hide();
});

/***/ }),

/***/ "./src/blocks/modules/office/info_wrap_2/info_block2.js":
/*!**************************************************************!*\
  !*** ./src/blocks/modules/office/info_wrap_2/info_block2.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
var menuElem = document.getElementById('sweeties');
var titleElem = menuElem.querySelector('.title');
var menuElem2 = document.getElementById('sweeties2');
var titleElem2 = menuElem2.querySelector('.title2');
var menuElem3 = document.getElementById('sweeties3');
var titleElem3 = menuElem3.querySelector('.title3');
var menuElem4 = document.getElementById('sweeties4');
var titleElem4 = menuElem4.querySelector('.title4');
var menuElem5 = document.getElementById('sweeties5');
var titleElem5 = menuElem5.querySelector('.title5');
var menuElem6 = document.getElementById('sweeties6');
var titleElem6 = menuElem6.querySelector('.title6');
var menuElem7 = document.getElementById('sweeties7');
var titleElem7 = menuElem7.querySelector('.title7');
var menuElem8 = document.getElementById('sweeties8');
var titleElem8 = menuElem8.querySelector('.title8');

titleElem.onclick = function () {
  menuElem.classList.toggle('open');
};

titleElem2.onclick = function () {
  menuElem2.classList.toggle('open');
};

titleElem3.onclick = function () {
  menuElem3.classList.toggle('open');
};

titleElem4.onclick = function () {
  menuElem4.classList.toggle('open');
};

titleElem5.onclick = function () {
  menuElem5.classList.toggle('open');
};

titleElem6.onclick = function () {
  menuElem6.classList.toggle('open');
};

titleElem7.onclick = function () {
  menuElem7.classList.toggle('open');
};

titleElem8.onclick = function () {
  menuElem8.classList.toggle('open');
};


jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.collapse_item').click(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.arrow_img').toggleClass('arrow_img_down');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.collapse_item').click(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass('active2');
  });
});

/***/ }),

/***/ "./src/blocks/modules/partners/info_wrap_3/info_block3.js":
/*!****************************************************************!*\
  !*** ./src/blocks/modules/partners/info_wrap_3/info_block3.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var menuElem = document.getElementById('sweeties');
var titleElem = menuElem.querySelector('.title');
var menuElem2 = document.getElementById('sweeties2');
var titleElem2 = menuElem2.querySelector('.title2');
var menuElem3 = document.getElementById('sweeties3');
var titleElem3 = menuElem3.querySelector('.title3');
var menuElem4 = document.getElementById('sweeties4');
var titleElem4 = menuElem4.querySelector('.title4');
var menuElem5 = document.getElementById('sweeties5');
var titleElem5 = menuElem5.querySelector('.title5');

titleElem.onclick = function () {
  menuElem.classList.toggle('open');
};

titleElem2.onclick = function () {
  menuElem2.classList.toggle('open');
};

titleElem3.onclick = function () {
  menuElem3.classList.toggle('open');
};

titleElem4.onclick = function () {
  menuElem4.classList.toggle('open');
};

titleElem5.onclick = function () {
  menuElem5.classList.toggle('open');
};

/***/ }),

/***/ "./src/blocks/modules/present/info_wrap_1/info_block1.js":
/*!***************************************************************!*\
  !*** ./src/blocks/modules/present/info_wrap_1/info_block1.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  Hidden();
});

function Hidden() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#popup1").hide();
}

;
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.right_btn_info').click(function PopUpShow() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#popup1").show();
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.close_btn').click(function PopUpHide() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#popup1").hide();
});

/***/ }),

/***/ "./src/blocks/modules/present/info_wrap_6/info_block6.js":
/*!***************************************************************!*\
  !*** ./src/blocks/modules/present/info_wrap_6/info_block6.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  Hidden();
});

function Hidden() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#popup2").hide();
}

;
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.cost_info_btn').click(function PopUpShow() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#popup2").show();
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.close_btn').click(function PopUpHide() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#popup2").hide();
});

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_main_tabs_block2_tabs_block2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/main/tabs_block2/tabs_block2 */ "./src/blocks/modules/main/tabs_block2/tabs_block2.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_med_info_wrap_1_info_block1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/med/info_wrap_1/info_block1 */ "./src/blocks/modules/med/info_wrap_1/info_block1.js");
/* harmony import */ var _modules_med_info_wrap_5_info_block5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/med/info_wrap_5/info_block5 */ "./src/blocks/modules/med/info_wrap_5/info_block5.js");
/* harmony import */ var _modules_bank_info_wrap_1_info_block1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/bank/info_wrap_1/info_block1 */ "./src/blocks/modules/bank/info_wrap_1/info_block1.js");
/* harmony import */ var _modules_archive_info_wrap_1_info_block1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/archive/info_wrap_1/info_block1 */ "./src/blocks/modules/archive/info_wrap_1/info_block1.js");
/* harmony import */ var _modules_office_info_wrap_1_info_block1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/office/info_wrap_1/info_block1 */ "./src/blocks/modules/office/info_wrap_1/info_block1.js");
/* harmony import */ var _modules_present_info_wrap_1_info_block1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/present/info_wrap_1/info_block1 */ "./src/blocks/modules/present/info_wrap_1/info_block1.js");
/* harmony import */ var _modules_contacts_info_wrap_1_info_block1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/contacts/info_wrap_1/info_block1 */ "./src/blocks/modules/contacts/info_wrap_1/info_block1.js");
/* harmony import */ var _modules_gov_info_wrap_1_info_block1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/gov/info_wrap_1/info_block1 */ "./src/blocks/modules/gov/info_wrap_1/info_block1.js");
/* harmony import */ var _modules_present_info_wrap_6_info_block6__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! %modules%/present/info_wrap_6/info_block6 */ "./src/blocks/modules/present/info_wrap_6/info_block6.js");
/* harmony import */ var _modules_office_info_wrap_2_info_block2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! %modules%/office/info_wrap_2/info_block2 */ "./src/blocks/modules/office/info_wrap_2/info_block2.js");
/* harmony import */ var _modules_partners_info_wrap_3_info_block3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! %modules%/partners/info_wrap_3/info_block3 */ "./src/blocks/modules/partners/info_wrap_3/info_block3.js");
/* harmony import */ var _modules_partners_info_wrap_3_info_block3__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_modules_partners_info_wrap_3_info_block3__WEBPACK_IMPORTED_MODULE_13__);
















/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map