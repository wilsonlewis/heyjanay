/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_query_string__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_query_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_query_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slideshow__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slideshow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__slideshow__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(5);
// Vendor requirements


// Package requirements




// Application entry
/* harmony default export */ __webpack_exports__["default"] = new Vue({
    el: '#container',

    components: {
        Modal: __WEBPACK_IMPORTED_MODULE_1__modal___default.a,
        Slideshow: __WEBPACK_IMPORTED_MODULE_2__slideshow___default.a
    },

    data: {
        loading: false,
        selection: null,
        slideshow: null
    },

    computed: {
        active: function active() {
            return this.loading || this.slideshow != null;
        }
    },

    mounted: function mounted() {
        var hash = __WEBPACK_IMPORTED_MODULE_0_query_string___default.a.parse(window.location.hash);

        if (hash.gid) {
            this.selection = hash.pid;
            this.fetch(window.location.origin + window.location.pathname + '?/albums/' + hash.gid + '/json:1');
        }
    },


    methods: {
        img: function img(e) {
            this.selection = e.target.getAttribute('slideshow-pid') || 0;
            this.fetch(e.target.getAttribute('slideshow-url') || window.location.href);

            e.preventDefault();
            e.stopPropagation();
        },
        show: function show(images, gid) {
            this.slideshow = {
                gid: gid,
                pid: this.selection,
                images: images
            };
        },
        close: function close() {
            this.slideshow = null;
        },
        fetch: function fetch(url) {
            this.loading = true;

            window.$.ajax({
                url: url,
                dataType: 'json',
                success: this.fetched,
                error: this.failed
            });
        },
        fetched: function fetched(_ref) {
            var images = _ref.images,
                slug = _ref.slug;

            this.loading = false;
            this.show(images, slug);
        },
        failed: function failed(error) {
            this.loading = false;
            console.log('error loading slideshow:', error);
        }
    }
});

autosize(document.querySelectorAll('textarea'));

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//

// Component definition
/* harmony default export */ __webpack_exports__["default"] = {
    name: 'Modal',

    props: {
        open: {
            type: Boolean,
            default: false
        }
    }
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// Vendor options
var $options = {
    loop: false,
    zoomEl: false,
    shareEl: false,
    bgOpacity: 0,
    counterEl: false,
    fullscreenEl: false,
    pinchToClose: false,
    closeOnScroll: false,
    maxSpreadZoom: 1,
    getDoubleTapZoom: function getDoubleTapZoom(click, item) {
        return item.initialZoomLevel;
    }
};

// Component definition
/* harmony default export */ __webpack_exports__["default"] = {
    name: 'Slideshow',

    props: {
        slideshow: {
            type: Object,
            required: true
        }
    },

    data: function data() {
        return {
            options: $options,
            photoswipe: null
        };
    },
    mounted: function mounted() {
        console.log('this.slideshow', this.slideshow);

        this.options.index = this.getIndex();
        this.options.galleryUID = this.slideshow.gid;

        this.photoswipe = new PhotoSwipe(this.$refs.photoswipe, PhotoSwipeUI_Default, this.slideshow.images, this.options);

        this.photoswipe.init();

        this.photoswipe.listen('destroy', this.close);

        if (this.photoswipe.likelyTouchDevice) {
            this.photoswipe.ui.hideControls();
        }
    },
    destroy: function destroy() {
        this.photoswipe.close();
    },


    methods: {
        close: function close() {
            this.$emit('close');
        },
        getIndex: function getIndex() {
            if (this.slideshow.pid != null) {
                for (var index in this.slideshow.images) {
                    if (this.slideshow.images[index].pid == this.slideshow.pid) {
                        return parseInt(index);
                    }
                }
            }

            return this.slideshow.index || 0;
        }
    }
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = {
    slideshow: {
        index: null,
        images: null
    }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strictUriEncode = __webpack_require__(8);
var objectAssign = __webpack_require__(6);

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [
					encode(key, opts),
					'[',
					index,
					']'
				].join('') : [
					encode(key, opts),
					'[',
					encode(index, opts),
					']=',
					encode(value, opts)
				].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'[]=',
					encode(value, opts)
				].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'=',
					encode(value, opts)
				].join('');
			};
	}
}

function parserForArrayFormat(opts) {
	var result;

	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);

				key = key.replace(/\[\]$/, '');

				if (!result || accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	} else if (typeof input === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

exports.extract = function (str) {
	return str.split('?')[1] || '';
};

exports.parse = function (str, opts) {
	opts = objectAssign({arrayFormat: 'none'}, opts);

	var formatter = parserForArrayFormat(opts);

	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^(\?|#|&)/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeURIComponent(val);

		formatter(decodeURIComponent(key), val, ret);
	});

	return Object.keys(ret).sort().reduce(function (result, key) {
		var val = ret[key];
		if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
			// Sort object keys, not values
			result[key] = keysSorter(val);
		} else {
			result[key] = val;
		}

		return result;
	}, Object.create(null));
};

exports.stringify = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = objectAssign(defaults, opts);

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort().map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(3),
  /* template */
  __webpack_require__(12),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/wilsonlewis/Code/janayeverett.koken/storage/themes/heyjanay/resources/assets/js/modal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] modal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e734220a", Component.options)
  } else {
    hotAPI.reload("data-v-e734220a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(4),
  /* template */
  __webpack_require__(11),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/wilsonlewis/Code/janayeverett.koken/storage/themes/heyjanay/resources/assets/js/slideshow.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] slideshow.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-42f318fc", Component.options)
  } else {
    hotAPI.reload("data-v-42f318fc", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "photoswipe",
    staticClass: "pswp",
    attrs: {
      "tabindex": "-1",
      "role": "dialog",
      "aria-hidden": "true"
    }
  }, [_c('div', {
    staticClass: "pswp__bg"
  }), _vm._v(" "), _vm._m(0)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pswp__scroll-wrap"
  }, [_c('div', {
    staticClass: "pswp__container"
  }, [_c('div', {
    staticClass: "pswp__item"
  }), _vm._v(" "), _c('div', {
    staticClass: "pswp__item"
  }), _vm._v(" "), _c('div', {
    staticClass: "pswp__item"
  })]), _vm._v(" "), _c('div', {
    staticClass: "pswp__ui pswp__ui--hidden"
  }, [_c('div', {
    staticClass: "pswp__top-bar"
  }, [_c('div', {
    staticClass: "pswp__counter"
  }), _vm._v(" "), _c('button', {
    staticClass: "pswp__button pswp__button--close",
    attrs: {
      "title": "Close (Esc)"
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "pswp__button pswp__button--share",
    attrs: {
      "title": "Share"
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "pswp__button pswp__button--fs",
    attrs: {
      "title": "Toggle fullscreen"
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "pswp__button pswp__button--zoom",
    attrs: {
      "title": "Zoom in/out"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "pswp__preloader"
  }, [_c('div', {
    staticClass: "pswp__preloader__icn"
  }, [_c('div', {
    staticClass: "pswp__preloader__cut"
  }, [_c('div', {
    staticClass: "pswp__preloader__donut"
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "pswp__share-modal pswp__share-modal--hidden pswp__single-tap"
  }, [_c('div', {
    staticClass: "pswp__share-tooltip"
  })]), _vm._v(" "), _c('button', {
    staticClass: "pswp__button pswp__button--arrow--left",
    attrs: {
      "title": "Previous (arrow left)"
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "pswp__button pswp__button--arrow--right",
    attrs: {
      "title": "Next (arrow right)"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "pswp__caption"
  }, [_c('div', {
    staticClass: "pswp__caption__center"
  })])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-42f318fc", module.exports)
  }
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.open) ? _c('div', {
    staticClass: "modal is-fullscreen"
  }, [_c('div', {
    staticClass: "background"
  }), _vm._v(" "), _vm._t("default")], 2) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e734220a", module.exports)
  }
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ })
/******/ ]);