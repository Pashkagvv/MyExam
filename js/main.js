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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/google-maps/lib/Google.js":
/*!************************************************!*\
  !*** ./node_modules/google-maps/lib/Google.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {

	if (root === null) {
		throw new Error('Google-maps package can be used only in browser');
	}

	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

})(typeof window !== 'undefined' ? window : null, function() {


	'use strict';


	var googleVersion = '3.31';

	var script = null;

	var google = null;

	var loading = false;

	var callbacks = [];

	var onLoadEvents = [];

	var originalCreateLoaderMethod = null;


	var GoogleMapsLoader = {};


	GoogleMapsLoader.URL = 'https://maps.googleapis.com/maps/api/js';

	GoogleMapsLoader.KEY = null;

	GoogleMapsLoader.LIBRARIES = [];

	GoogleMapsLoader.CLIENT = null;

	GoogleMapsLoader.CHANNEL = null;

	GoogleMapsLoader.LANGUAGE = null;

	GoogleMapsLoader.REGION = null;

	GoogleMapsLoader.VERSION = googleVersion;

	GoogleMapsLoader.WINDOW_CALLBACK_NAME = '__google_maps_api_provider_initializator__';


	GoogleMapsLoader._googleMockApiObject = {};


	GoogleMapsLoader.load = function(fn) {
		if (google === null) {
			if (loading === true) {
				if (fn) {
					callbacks.push(fn);
				}
			} else {
				loading = true;

				window[GoogleMapsLoader.WINDOW_CALLBACK_NAME] = function() {
					ready(fn);
				};

				GoogleMapsLoader.createLoader();
			}
		} else if (fn) {
			fn(google);
		}
	};


	GoogleMapsLoader.createLoader = function() {
		script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = GoogleMapsLoader.createUrl();

		document.body.appendChild(script);
	};


	GoogleMapsLoader.isLoaded = function() {
		return google !== null;
	};


	GoogleMapsLoader.createUrl = function() {
		var url = GoogleMapsLoader.URL;

		url += '?callback=' + GoogleMapsLoader.WINDOW_CALLBACK_NAME;

		if (GoogleMapsLoader.KEY) {
			url += '&key=' + GoogleMapsLoader.KEY;
		}

		if (GoogleMapsLoader.LIBRARIES.length > 0) {
			url += '&libraries=' + GoogleMapsLoader.LIBRARIES.join(',');
		}

		if (GoogleMapsLoader.CLIENT) {
			url += '&client=' + GoogleMapsLoader.CLIENT;
		}

		if (GoogleMapsLoader.CHANNEL) {
			url += '&channel=' + GoogleMapsLoader.CHANNEL;
		}

		if (GoogleMapsLoader.LANGUAGE) {
			url += '&language=' + GoogleMapsLoader.LANGUAGE;
		}

		if (GoogleMapsLoader.REGION) {
			url += '&region=' + GoogleMapsLoader.REGION;
		}

		if (GoogleMapsLoader.VERSION) {
			url += '&v=' + GoogleMapsLoader.VERSION;
		}

		return url;
	};


	GoogleMapsLoader.release = function(fn) {
		var release = function() {
			GoogleMapsLoader.KEY = null;
			GoogleMapsLoader.LIBRARIES = [];
			GoogleMapsLoader.CLIENT = null;
			GoogleMapsLoader.CHANNEL = null;
			GoogleMapsLoader.LANGUAGE = null;
			GoogleMapsLoader.REGION = null;
			GoogleMapsLoader.VERSION = googleVersion;

			google = null;
			loading = false;
			callbacks = [];
			onLoadEvents = [];

			if (typeof window.google !== 'undefined') {
				delete window.google;
			}

			if (typeof window[GoogleMapsLoader.WINDOW_CALLBACK_NAME] !== 'undefined') {
				delete window[GoogleMapsLoader.WINDOW_CALLBACK_NAME];
			}

			if (originalCreateLoaderMethod !== null) {
				GoogleMapsLoader.createLoader = originalCreateLoaderMethod;
				originalCreateLoaderMethod = null;
			}

			if (script !== null) {
				script.parentElement.removeChild(script);
				script = null;
			}

			if (fn) {
				fn();
			}
		};

		if (loading) {
			GoogleMapsLoader.load(function() {
				release();
			});
		} else {
			release();
		}
	};


	GoogleMapsLoader.onLoad = function(fn) {
		onLoadEvents.push(fn);
	};


	GoogleMapsLoader.makeMock = function() {
		originalCreateLoaderMethod = GoogleMapsLoader.createLoader;

		GoogleMapsLoader.createLoader = function() {
			window.google = GoogleMapsLoader._googleMockApiObject;
			window[GoogleMapsLoader.WINDOW_CALLBACK_NAME]();
		};
	};


	var ready = function(fn) {
		var i;

		loading = false;

		if (google === null) {
			google = window.google;
		}

		for (i = 0; i < onLoadEvents.length; i++) {
			onLoadEvents[i](google);
		}

		if (fn) {
			fn(google);
		}

		for (i = 0; i < callbacks.length; i++) {
			callbacks[i](google);
		}

		callbacks = [];
	};


	return GoogleMapsLoader;

});


/***/ }),

/***/ "./src/blocks/common/page/page.js":
/*!****************************************!*\
  !*** ./src/blocks/common/page/page.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_works_works_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../blocks/works/works.js */ "./src/blocks/works/works.js");
/* harmony import */ var _ourteam_ourteam_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ourteam/ourteam.js */ "./src/blocks/ourteam/ourteam.js");
/* harmony import */ var _contact_contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contact/contact.js */ "./src/blocks/contact/contact.js");



/**
 * @file Implementation of the page block
 */
// TODO: imports other blocks
// -------------------------- BEGIN MODULE VARIABLES --------------------------

var RESIZE_INTERVAL = 200; // Resize event debouncing interval

var SCROLL_INTERVAL = 200; // Scroll event throttling interval

var resizeTimer = null;
var scrollTimer = null;
var wasScrolled = false; // --------------------------- END MODULE VARIABLES ---------------------------
// --------------------------- BEGIN EVENT HANDLERS ---------------------------

/**
 * Handle the window scroll event
 */

function handleWindowScroll() {} // TODO: add code

/**
 * Handle the window resize event
 */


function handleWindowResize() {} // TODO: add code

/**
 * Debounce the window resize event
 */


function debounceWindowResize() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(handleWindowResize, RESIZE_INTERVAL);
}
/**
 * Throttle the window scroll event
 */


function throttleWindowScroll() {
  if (scrollTimer) {
    // Ensure that we catch and execute that last invocation.
    wasScrolled = true;
    return;
  }

  handleWindowScroll();
  scrollTimer = this.setTimeout(function () {
    scrollTimer = null;

    if (wasScrolled) {
      handleWindowScroll();
      wasScrolled = false;
    }
  }, SCROLL_INTERVAL);
} // ---------------------------- END EVENT HANDLERS ----------------------------
// --------------------------- BEGIN PUBLIC METHODS ---------------------------

/**
 * Initialize the page block.
 * @return true
 */


function initBlock() {
  $(window).on({
    resize: debounceWindowResize,
    scroll: throttleWindowScroll
  }); // TODO: initialize other blocks

  _blocks_works_works_js__WEBPACK_IMPORTED_MODULE_0__["default"].initBlock();
  _ourteam_ourteam_js__WEBPACK_IMPORTED_MODULE_1__["default"].initBlock();
  _contact_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"].initBlock(); // Process the initial window size and scroll position

  handleWindowResize();
  handleWindowScroll();
  return true;
} // ---------------------------- END PUBLIC METHODS ----------------------------


/* harmony default export */ __webpack_exports__["default"] = ({
  initBlock: initBlock
});

/***/ }),

/***/ "./src/blocks/contact/contact.js":
/*!***************************************!*\
  !*** ./src/blocks/contact/contact.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @file Implementation of the contact block
 */
// -------------------------- BEGIN MODULE VARIABLES --------------------------
// TODO: add code here
// --------------------------- END MODULE VARIABLES ---------------------------
// -------------------------- BEGIN UTILITY FUNCTIONS -------------------------
// TODO: add code here
// --------------------------- END UTILITY FUNCTIONS --------------------------
// ----------------------------- BEGIN DOM METHODS ----------------------------
// TODO: add code here
// ------------------------------ END DOM METHODS -----------------------------
// --------------------------- BEGIN EVENT HANDLERS ---------------------------
// TODO: add code here
// ---------------------------- END EVENT HANDLERS ----------------------------
// --------------------------- BEGIN PUBLIC METHODS ---------------------------

/**
 * Initialize the contact block.
 * @return true if the block is present on the page, false otherwise
 */
var map, infoWindow, marker;
var lat = -7.930722;
var lng = 112.637741;

function initBlock() {
  var GoogleMapsLoader = __webpack_require__(/*! google-maps */ "./node_modules/google-maps/lib/Google.js"); // only for common js environments


  GoogleMapsLoader.KEY = 'AIzaSyBQDEK_bp8E3TJz1Sg1VMqF7jn8J3Z7Haw';
  GoogleMapsLoader.load(function (google) {
    new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: lat,
        lng: lng
      },
      zoom: 16,
      styles: [{
        "elementType": "geometry",
        "stylers": [{
          "color": "#f5f5f5"
        }]
      }, {
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#616161"
        }]
      }, {
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#f5f5f5"
        }]
      }, {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#bdbdbd"
        }]
      }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
          "color": "#eeeeee"
        }]
      }, {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#757575"
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
          "color": "#e5e5e5"
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#9e9e9e"
        }]
      }, {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{
          "color": "#ffffff"
        }]
      }, {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#757575"
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
          "color": "#dadada"
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#616161"
        }]
      }, {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#9e9e9e"
        }]
      }, {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [{
          "color": "#e5e5e5"
        }]
      }, {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [{
          "color": "#eeeeee"
        }]
      }, {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
          "color": "#c9c9c9"
        }]
      }, {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#9e9e9e"
        }]
      }]
    });
    marker = new google.maps.Marker({
      position: {
        lat: lat,
        lng: lng
      },
      map: map,
      title: 'Hello',
      icon: './img/Pin.png'
    });
  });
  $('.contact__buttonUp').on('click', 'a', function () {
    // полчаем смещение елемента с id якоря
    var offset = $($(this).attr('href')).offset().top;
    $('html').stop().animate({
      scrollTop: offset
    }, 1000, 'swing', function () {});
  }); // TODO: add code here

  return true;
} // ---------------------------- END PUBLIC METHODS ----------------------------


/* harmony default export */ __webpack_exports__["default"] = ({
  initBlock: initBlock
});

/***/ }),

/***/ "./src/blocks/ourteam/ourteam.js":
/*!***************************************!*\
  !*** ./src/blocks/ourteam/ourteam.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @file Implementation of the ourteam block
 */
// -------------------------- BEGIN MODULE VARIABLES --------------------------
// TODO: add code here
// --------------------------- END MODULE VARIABLES ---------------------------
// -------------------------- BEGIN UTILITY FUNCTIONS -------------------------
// TODO: add code here
// --------------------------- END UTILITY FUNCTIONS --------------------------
// ----------------------------- BEGIN DOM METHODS ----------------------------
// TODO: add code here
// ------------------------------ END DOM METHODS -----------------------------
// --------------------------- BEGIN EVENT HANDLERS ---------------------------
// TODO: add code here
// ---------------------------- END EVENT HANDLERS ----------------------------
// --------------------------- BEGIN PUBLIC METHODS ---------------------------

/**
 * Initialize the ourteam block.
 * @return true if the block is present on the page, false otherwise
 */
function initBlock() {
  // TODO: add code here
  $('.ourteam__slick').slick({
    infinite: true,
    // autoplay: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: $('.ourteam__nextArrov'),
    prevArrow: $('.ourteam__prevArrov'),
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: false
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false
      }
    }]
  });
  return true;
} // ---------------------------- END PUBLIC METHODS ----------------------------


/* harmony default export */ __webpack_exports__["default"] = ({
  initBlock: initBlock
});

/***/ }),

/***/ "./src/blocks/works/works.js":
/*!***********************************!*\
  !*** ./src/blocks/works/works.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @file Implementation of the works block
 */
// -------------------------- BEGIN MODULE VARIABLES --------------------------
// TODO: add code here
// --------------------------- END MODULE VARIABLES ---------------------------
// -------------------------- BEGIN UTILITY FUNCTIONS -------------------------
// TODO: add code here
// --------------------------- END UTILITY FUNCTIONS --------------------------
// ----------------------------- BEGIN DOM METHODS ----------------------------
// TODO: add code here
// ------------------------------ END DOM METHODS -----------------------------
// --------------------------- BEGIN EVENT HANDLERS ---------------------------
// TODO: add code here
// ---------------------------- END EVENT HANDLERS ----------------------------
// --------------------------- BEGIN PUBLIC METHODS ---------------------------

/**
 * Initialize the works block.
 * @return true if the block is present on the page, false otherwise
 */
function initBlock() {
  // TODO: add code here
  $('.works__slick').slick({
    infinite: true,
    // autoplay: true,
    arrows: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "my-dots",
    nextArrow: $('.next-arrow'),
    prevArrow: $('.prev-arrow'),
    responsive: [{
      breakpoint: 992,
      settings: {
        arrows: false,
        dots: false
      }
    }]
  });
  return true;
} // ---------------------------- END PUBLIC METHODS ----------------------------


/* harmony default export */ __webpack_exports__["default"] = ({
  initBlock: initBlock
});

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_common_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocks/common/page/page */ "./src/blocks/common/page/page.js");
 // The page block is responsible for initialization of all other blocks

_blocks_common_page_page__WEBPACK_IMPORTED_MODULE_0__["default"].initBlock();

/***/ }),

/***/ 1:
/*!******************************!*\
  !*** multi ./src/js/main.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! H:\Эказмен 3\src\js\main.js */"./src/js/main.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map