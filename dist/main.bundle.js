"use strict";
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Imbue:opsz,wght@10..100,100..900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Nanum+Gothic&family=Noto+Sans+JP:wght@100..900&family=Noto+Serif+JP&family=Teko:wght@300..700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
	margin: 0;
	margin-top: 10vh;
	padding: 0;
	font-family: "Imbue", sans-serif;

	background-position: top;
	background-repeat: no-repeat;
	background-size: cover;
	font-family: "Teko", Arial, sans-serif;
}

#logo {
	height: 7vh;
	transform: rotate(-45deg);
}

header {
	display: flex;
	position: fixed;
	top: 0;
	width: 100%;
	padding: 1vh 0;
	justify-content: space-evenly;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.2);

}

header:hover {
	display: flex;
}

nav {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1vh;
}
nav > p {
	margin: 0;
	color: orange;
	font-size: 1.35vw;
	font-family: "Noto Serif JP";
}
nav > p:first-child {
	color: lightgray;
	font-size: 3vh;
	font-family: "Teko";
}

.rightie {
	display: flex;
	gap: 2vw;
}

.content {
	display: flex;
	justify-content: center;
	
	flex-direction: column;
	margin-bottom: 10vh;
}

/* //////////////////////////////////// */
.content > .menu {
	display: flex;
	flex-direction: column;
	align-items: center;

	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
	background-position: calc(50% - 25vw) center;
}

.menu:nth-child(odd) {
	background-position: calc(50% + 25vw) center;
}

.menu:last-child {
	margin-bottom: 30vh;
}

h3.category {
	margin-bottom: 0;
	margin-top: 5vh;
}

.item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30vw;
}

.item p {
	margin: 0;
	font-size: x-large;
}

.item:hover {
	color: orange;
}

.item span {
    margin: 0;
    overflow: hidden;
    white-space: nowrap; /* Prevent text from wrapping */
}

.item p:first-child {
	margin: 0;
    white-space: nowrap; /* Prevent text from wrapping */
}

/* /////////////////////////// */
.title {
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 6.7vh;
	font-family: Helvetica, Arial, sans-serif;
}

.title > h1 {
	margin: 0;
	font-family: "Noto Sans JP", sans-serif;
}

.title > h1:first-child {
	margin-top: 16vh;
	font-size: 15vh;
	font-family: "Libre Baskerville", serif;
}

/* /////////////////////////// */
.first, .second, .third {
	padding: 2vh 2vw;
	width: 60vw;
	margin: 2vh auto;
	background-color: #ffffffb2;
	border-radius: 8px;
}

.first > h1 {
	font-size: 3vw;
	margin: 0;
	color: brown;
}

.list_details {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.list_details > p {
	margin: 0;
	font-size: x-large;
}

.list_details > p > a {
	text-decoration: none;
	color:slateblue;
}

/* ---------- */
.second {
	text-align: center;
	font-family: 'Noto Sans JP';
	color: brown;
	font-size: 7vw;
	padding: 5vh 2vw;
}

/* ---------- */
.third {
	height: 90vh;

	background-repeat: no-repeat;
	background-position: left;
	background-size: contain;

	background-color: black;

	text-align: right;
	color: orange;
	position: relative;

	display: flex;
	flex-direction: column;
	align-items: end;

}

.third > input, .third > textarea {
	width: 30vw;
	margin-top: 1vh;
	background-color: rgba(255, 255, 255, 0.40);
	border: none;
	height: 3vh;
	color: moccasin;
}

.third > input:focus, .third > textarea:focus {
	background-color: white;
	color: black;
}

input::placeholder, textarea::placeholder {
	color: orange;
	font-family: sans-serif;
}

.third > textarea  {
	height: 10vh;
	margin: 6vh 0;
}

.third > button {
	width: 10vw;
	height: 5vh;
	background-color:tomato;
	color: white;
	border: none;
	border-radius: 8px;
	margin: 6vh 10vw;
}

.third > button:active {
	background-color: white;
	color: tomato;
}

.third > h1 {
	margin: 1vh 10vw;
}

.third > label {
	margin: 0 13vw;
}`, "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AACA;CACC,SAAS;CACT,gBAAgB;CAChB,UAAU;CACV,gCAAgC;;CAEhC,wBAAwB;CACxB,4BAA4B;CAC5B,sBAAsB;CACtB,sCAAsC;AACvC;;AAEA;CACC,WAAW;CACX,yBAAyB;AAC1B;;AAEA;CACC,aAAa;CACb,eAAe;CACf,MAAM;CACN,WAAW;CACX,cAAc;CACd,6BAA6B;CAC7B,mBAAmB;CACnB,oCAAoC;;AAErC;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,QAAQ;AACT;AACA;CACC,SAAS;CACT,aAAa;CACb,iBAAiB;CACjB,4BAA4B;AAC7B;AACA;CACC,gBAAgB;CAChB,cAAc;CACd,mBAAmB;AACpB;;AAEA;CACC,aAAa;CACb,QAAQ;AACT;;AAEA;CACC,aAAa;CACb,uBAAuB;;CAEvB,sBAAsB;CACtB,mBAAmB;AACpB;;AAEA,yCAAyC;AACzC;CACC,aAAa;CACb,sBAAsB;CACtB,mBAAmB;;CAEnB,4BAA4B;CAC5B,2BAA2B;CAC3B,wBAAwB;CACxB,4CAA4C;AAC7C;;AAEA;CACC,4CAA4C;AAC7C;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,gBAAgB;CAChB,eAAe;AAChB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,WAAW;AACf;;AAEA;CACC,SAAS;CACT,kBAAkB;AACnB;;AAEA;CACC,aAAa;AACd;;AAEA;IACI,SAAS;IACT,gBAAgB;IAChB,mBAAmB,EAAE,+BAA+B;AACxD;;AAEA;CACC,SAAS;IACN,mBAAmB,EAAE,+BAA+B;AACxD;;AAEA,gCAAgC;AAChC;CACC,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,gBAAgB;CAChB,yCAAyC;AAC1C;;AAEA;CACC,SAAS;CACT,uCAAuC;AACxC;;AAEA;CACC,gBAAgB;CAChB,eAAe;CACf,uCAAuC;AACxC;;AAEA,gCAAgC;AAChC;CACC,gBAAgB;CAChB,WAAW;CACX,gBAAgB;CAChB,2BAA2B;CAC3B,kBAAkB;AACnB;;AAEA;CACC,cAAc;CACd,SAAS;CACT,YAAY;AACb;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,8BAA8B;AAC/B;;AAEA;CACC,SAAS;CACT,kBAAkB;AACnB;;AAEA;CACC,qBAAqB;CACrB,eAAe;AAChB;;AAEA,eAAe;AACf;CACC,kBAAkB;CAClB,2BAA2B;CAC3B,YAAY;CACZ,cAAc;CACd,gBAAgB;AACjB;;AAEA,eAAe;AACf;CACC,YAAY;;CAEZ,4BAA4B;CAC5B,yBAAyB;CACzB,wBAAwB;;CAExB,uBAAuB;;CAEvB,iBAAiB;CACjB,aAAa;CACb,kBAAkB;;CAElB,aAAa;CACb,sBAAsB;CACtB,gBAAgB;;AAEjB;;AAEA;CACC,WAAW;CACX,eAAe;CACf,2CAA2C;CAC3C,YAAY;CACZ,WAAW;CACX,eAAe;AAChB;;AAEA;CACC,uBAAuB;CACvB,YAAY;AACb;;AAEA;CACC,aAAa;CACb,uBAAuB;AACxB;;AAEA;CACC,YAAY;CACZ,aAAa;AACd;;AAEA;CACC,WAAW;CACX,WAAW;CACX,uBAAuB;CACvB,YAAY;CACZ,YAAY;CACZ,kBAAkB;CAClB,gBAAgB;AACjB;;AAEA;CACC,uBAAuB;CACvB,aAAa;AACd;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,cAAc;AACf","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Imbue:opsz,wght@10..100,100..900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Nanum+Gothic&family=Noto+Sans+JP:wght@100..900&family=Noto+Serif+JP&family=Teko:wght@300..700&display=swap');\r\nbody {\r\n\tmargin: 0;\r\n\tmargin-top: 10vh;\r\n\tpadding: 0;\r\n\tfont-family: \"Imbue\", sans-serif;\r\n\r\n\tbackground-position: top;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: cover;\r\n\tfont-family: \"Teko\", Arial, sans-serif;\r\n}\r\n\r\n#logo {\r\n\theight: 7vh;\r\n\ttransform: rotate(-45deg);\r\n}\r\n\r\nheader {\r\n\tdisplay: flex;\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\twidth: 100%;\r\n\tpadding: 1vh 0;\r\n\tjustify-content: space-evenly;\r\n\talign-items: center;\r\n\tbackground-color: rgba(0, 0, 0, 0.2);\r\n\r\n}\r\n\r\nheader:hover {\r\n\tdisplay: flex;\r\n}\r\n\r\nnav {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tgap: 1vh;\r\n}\r\nnav > p {\r\n\tmargin: 0;\r\n\tcolor: orange;\r\n\tfont-size: 1.35vw;\r\n\tfont-family: \"Noto Serif JP\";\r\n}\r\nnav > p:first-child {\r\n\tcolor: lightgray;\r\n\tfont-size: 3vh;\r\n\tfont-family: \"Teko\";\r\n}\r\n\r\n.rightie {\r\n\tdisplay: flex;\r\n\tgap: 2vw;\r\n}\r\n\r\n.content {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\t\r\n\tflex-direction: column;\r\n\tmargin-bottom: 10vh;\r\n}\r\n\r\n/* //////////////////////////////////// */\r\n.content > .menu {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: center;\r\n\tbackground-size: contain;\r\n\tbackground-position: calc(50% - 25vw) center;\r\n}\r\n\r\n.menu:nth-child(odd) {\r\n\tbackground-position: calc(50% + 25vw) center;\r\n}\r\n\r\n.menu:last-child {\r\n\tmargin-bottom: 30vh;\r\n}\r\n\r\nh3.category {\r\n\tmargin-bottom: 0;\r\n\tmargin-top: 5vh;\r\n}\r\n\r\n.item {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 30vw;\r\n}\r\n\r\n.item p {\r\n\tmargin: 0;\r\n\tfont-size: x-large;\r\n}\r\n\r\n.item:hover {\r\n\tcolor: orange;\r\n}\r\n\r\n.item span {\r\n    margin: 0;\r\n    overflow: hidden;\r\n    white-space: nowrap; /* Prevent text from wrapping */\r\n}\r\n\r\n.item p:first-child {\r\n\tmargin: 0;\r\n    white-space: nowrap; /* Prevent text from wrapping */\r\n}\r\n\r\n/* /////////////////////////// */\r\n.title {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tfont-size: 6.7vh;\r\n\tfont-family: Helvetica, Arial, sans-serif;\r\n}\r\n\r\n.title > h1 {\r\n\tmargin: 0;\r\n\tfont-family: \"Noto Sans JP\", sans-serif;\r\n}\r\n\r\n.title > h1:first-child {\r\n\tmargin-top: 16vh;\r\n\tfont-size: 15vh;\r\n\tfont-family: \"Libre Baskerville\", serif;\r\n}\r\n\r\n/* /////////////////////////// */\r\n.first, .second, .third {\r\n\tpadding: 2vh 2vw;\r\n\twidth: 60vw;\r\n\tmargin: 2vh auto;\r\n\tbackground-color: #ffffffb2;\r\n\tborder-radius: 8px;\r\n}\r\n\r\n.first > h1 {\r\n\tfont-size: 3vw;\r\n\tmargin: 0;\r\n\tcolor: brown;\r\n}\r\n\r\n.list_details {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.list_details > p {\r\n\tmargin: 0;\r\n\tfont-size: x-large;\r\n}\r\n\r\n.list_details > p > a {\r\n\ttext-decoration: none;\r\n\tcolor:slateblue;\r\n}\r\n\r\n/* ---------- */\r\n.second {\r\n\ttext-align: center;\r\n\tfont-family: 'Noto Sans JP';\r\n\tcolor: brown;\r\n\tfont-size: 7vw;\r\n\tpadding: 5vh 2vw;\r\n}\r\n\r\n/* ---------- */\r\n.third {\r\n\theight: 90vh;\r\n\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: left;\r\n\tbackground-size: contain;\r\n\r\n\tbackground-color: black;\r\n\r\n\ttext-align: right;\r\n\tcolor: orange;\r\n\tposition: relative;\r\n\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: end;\r\n\r\n}\r\n\r\n.third > input, .third > textarea {\r\n\twidth: 30vw;\r\n\tmargin-top: 1vh;\r\n\tbackground-color: rgba(255, 255, 255, 0.40);\r\n\tborder: none;\r\n\theight: 3vh;\r\n\tcolor: moccasin;\r\n}\r\n\r\n.third > input:focus, .third > textarea:focus {\r\n\tbackground-color: white;\r\n\tcolor: black;\r\n}\r\n\r\ninput::placeholder, textarea::placeholder {\r\n\tcolor: orange;\r\n\tfont-family: sans-serif;\r\n}\r\n\r\n.third > textarea  {\r\n\theight: 10vh;\r\n\tmargin: 6vh 0;\r\n}\r\n\r\n.third > button {\r\n\twidth: 10vw;\r\n\theight: 5vh;\r\n\tbackground-color:tomato;\r\n\tcolor: white;\r\n\tborder: none;\r\n\tborder-radius: 8px;\r\n\tmargin: 6vh 10vw;\r\n}\r\n\r\n.third > button:active {\r\n\tbackground-color: white;\r\n\tcolor: tomato;\r\n}\r\n\r\n.third > h1 {\r\n\tmargin: 1vh 10vw;\r\n}\r\n\r\n.third > label {\r\n\tmargin: 0 13vw;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
	
	let content = document.querySelector('.content')
	document.body.style.backgroundImage = ''
	document.querySelector('header').style.color = 'BLACK'
	

	content.innerHTML = ''
	let element = document.createElement('p')
	element.innerHTML = 'about me'
	content.appendChild(element)



}

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_lanterns_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/lanterns.jpg */ "./src/assets/lanterns.jpg");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
	let content = document.querySelector('.content')
	document.body.style.backgroundImage = ''
	document.body.style.backgroundColor = 'rgb(247, 242, 236)'
	document.body.style.backgroundColor = 'darkgray'
	document.querySelector('header').style.color = 'black'
	content.innerHTML = ''


	let first = document.createElement('div')
	first.classList.add('first')

	const h1Contact = document.createElement('h1')
	h1Contact.innerHTML = 'CONTACT'
	first.appendChild(h1Contact)

	let list_details = document.createElement('div')
	list_details.classList.add('list_details')

	const phone = document.createElement('p')
	phone.innerHTML = '+81000000000'
	list_details.appendChild(phone)

	const email = document.createElement('p')
	email.innerHTML = 'rising_sun@tokyo.jp'
	list_details.appendChild(email)

	const address = document.createElement('p')
	address.innerHTML = 'Rising Sun, 1136-49, Nakagamicho, Akishima, Tokyo, Japan'
	list_details.appendChild(address)
	
	const cont = document.createElement('p')
	cont.innerHTML = '08:00 - 21:00'
	list_details.appendChild(cont)
	
	first.appendChild(list_details)

	const map = document.createElement('iframe');
	map.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202.47223045883754!2d139.37255723193903!3d35.71254992290404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018e1637be3bb81%3A0x4e96c3a536c189f7!2sRising%20Sun!5e0!3m2!1sen!2suk!4v1711920155029!5m2!1sen!2suk');
	map.setAttribute('style', 'border:0; width: 60vw; height: 40vh; margin-top: 2vh;');
	map.setAttribute('loading', 'lazy');
	map.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
	first.appendChild(map);

	let socials = document.createElement('div')
	socials.classList.add('list_details')

	const twitter = document.createElement('p')
	twitter.innerHTML = '<a href="https://www.twitter.com">Twitter</a>'
	socials.appendChild(twitter)

	const facebook = document.createElement('p')
	facebook.innerHTML = '<a href="https://www.facebook.com">Facebook</a>'
	socials.appendChild(facebook)

	const instagram = document.createElement('p')
	instagram.innerHTML = '<a href="https://www.instagram.com">Instagram</a>'
	socials.appendChild(instagram)

	const tiktok = document.createElement('p')
	tiktok.innerHTML = '<a href="https://www.tiktok.com">Tiktok</a>'
	socials.appendChild(tiktok)

	

	first.appendChild(socials)

	content.appendChild(first)


	///////////////////////////////////////////////////////////////
	let second = document.createElement('div')
	second.classList.add('second')
	second.innerHTML = `花は桜木人は武士`
	content.appendChild(second)

	///////////////////////////////////////////////////////////////
	let third = document.createElement('div')
	third.classList.add('third')
	
	third.style.backgroundImage = `url(${_assets_lanterns_jpg__WEBPACK_IMPORTED_MODULE_0__})`
	let h1Booking = document.createElement('h1')
	h1Booking.innerHTML = 'Revervations'
	
	third.appendChild(h1Booking)

	let label1 = document.createElement('input')
	label1.setAttribute('type', 'text')
	label1.placeholder = 'Enter your name'
	third.appendChild(label1)

	let label2 = document.createElement('input')
	label2.setAttribute('type', 'number')
	label2.placeholder = 'Enter your phone number'
	third.appendChild(label2)

	let label3 = document.createElement('input')
	label3.setAttribute('type', 'email')
	label3.placeholder = 'Enter your email'
	third.appendChild(label3)

	let label4 = document.createElement('textarea')
	label4.placeholder = 'Please enter alergy information, special circumstances or anything important'
	third.appendChild(label4)


	let label5ish = document.createElement('label')
	label5ish.innerHTML = 'Book a Time Slot'

	third.appendChild(label5ish)
	let label5 = document.createElement('input')
	label5.setAttribute('type', 'time')
	third.appendChild(label5)

	
	let label6 = document.createElement('input')
	label6.setAttribute('type', 'text')
	label6.placeholder = 'Where would you like to seat?'
	third.appendChild(label6)
	
	const button = document.createElement('button')
	button.innerHTML = 'Book!'
	third.appendChild(button)

	content.appendChild(third)
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_kyoto_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/kyoto.jpg */ "./src/assets/kyoto.jpg");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
	let content = document.querySelector('.content')
	content.innerHTML = ''

	document.body.style.backgroundImage = `url(${_assets_kyoto_jpg__WEBPACK_IMPORTED_MODULE_0__})`

	//document.querySelector('header').style.backgroundColor = 'rgba(0, 0, 0, 0.20)'
	document.querySelector('header').style.color = 'white'
	
	let div = document.createElement('div')
	div.classList.add('title')

	let h1 = document.createElement('h1')
	h1.innerHTML = 'RISING SUN'
	h1.style.color = 'orange'

	let h1Jap = document.createElement('h1')
	h1Jap.innerHTML = '殺された獲物'
	h1Jap.style.color = 'brown'

	div.appendChild(h1)
	div.appendChild(h1Jap)
	content.appendChild(div)
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _assets_spring_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/spring.svg */ "./src/assets/spring.svg");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
// css


// images


// content





/////////////////////////////////////////
(0,_home_js__WEBPACK_IMPORTED_MODULE_4__["default"])()

// setting the favicon
const link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
}
link.href = _assets_spring_svg__WEBPACK_IMPORTED_MODULE_1__;


///////////////////////////////////////////////////////////
const aboutButton = document.querySelector('#aboutButton')
aboutButton.addEventListener('click', ()=> {
	;(0,_about_js__WEBPACK_IMPORTED_MODULE_2__["default"])()
})

/////////////////////////////////////////////////////
const menuButton = document.querySelector('#menuButton')
menuButton.addEventListener('click', ()=>{
	;(0,_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"])()
})

///////////////////////////////////////////////////////
const contactButton = document.querySelector('#contactButton')
contactButton.addEventListener('click', ()=>{
	;(0,_contact_js__WEBPACK_IMPORTED_MODULE_5__["default"])()
})

///////////////////////////////////////////////////////
//document.querySelector('#logo').src = spring
let logo = document.querySelector('#logo')
logo.src = _assets_spring_svg__WEBPACK_IMPORTED_MODULE_1__
logo.addEventListener('click', function(){
    ;(0,_home_js__WEBPACK_IMPORTED_MODULE_4__["default"])()
})

////////////////////////////////////////////////////
const header = document.querySelector('header')
document.addEventListener('mousemove', function(e){
    const mouseY = e.clientY
    const windowHeight = window.innerHeight
    
    if(mouseY < (windowHeight * 0.15))
        header.style.display = 'flex'
    else
        header.style.display = 'none'
})

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menu_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.json */ "./src/menu.json");
/* harmony import */ var _assets_ramen_2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/ramen_2.png */ "./src/assets/ramen_2.png");
/* harmony import */ var _assets_rice_dish_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/rice_dish.png */ "./src/assets/rice_dish.png");
/* harmony import */ var _assets_fried_chicken_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/fried_chicken.png */ "./src/assets/fried_chicken.png");
/* harmony import */ var _assets_sushi_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/sushi.png */ "./src/assets/sushi.png");
/* harmony import */ var _assets_shrimp_dish_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/shrimp_dish.png */ "./src/assets/shrimp_dish.png");
/* harmony import */ var _assets_bread_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/bread.png */ "./src/assets/bread.png");
/* harmony import */ var _assets_coffee_4_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/coffee_4.png */ "./src/assets/coffee_4.png");










/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
	let content = document.querySelector('.content')
	content.innerHTML = ''

	document.body.style.backgroundImage = ''
	//document.body.style.backgroundImage = `url(${rice})`
	//document.body.style.backgroundImage += `,url(${chicken})`
	
	document.body.style.backgroundColor = '#eeeeee'
	document.querySelector('header').style.color = 'black'

	let backgrounds = [_assets_ramen_2_png__WEBPACK_IMPORTED_MODULE_1__, _assets_rice_dish_png__WEBPACK_IMPORTED_MODULE_2__, _assets_sushi_png__WEBPACK_IMPORTED_MODULE_4__, _assets_shrimp_dish_png__WEBPACK_IMPORTED_MODULE_5__, _assets_fried_chicken_png__WEBPACK_IMPORTED_MODULE_3__, _assets_bread_png__WEBPACK_IMPORTED_MODULE_6__, _assets_coffee_4_png__WEBPACK_IMPORTED_MODULE_7__]
	let b = 0

	for(let [category, value] of Object.entries(_menu_json__WEBPACK_IMPORTED_MODULE_0__)){
		let div = document.createElement('div')
		div.classList.add('menu')

		let h3 = document.createElement('h3')
		h3.innerHTML = category
		h3.classList.add('category')
		div.appendChild(h3)

		for(let i=0; i<value.length; i++){
			let item = document.createElement('div')
			item.classList.add('item')

			let name = document.createElement('p')
			name.innerHTML = i+1 + ". " + value[i].name
			item.appendChild(name)

			let span = document.createElement('span')
			span.innerHTML = "...".repeat(100)
			item.appendChild(span)

			let price = document.createElement('p')
			price.innerHTML = value[i].price
			item.appendChild(price)

			div.appendChild(item)
		}
		
		//item.innerHTML = `${category["name"]} ${category["price"]}`


		div.style.backgroundImage = `url(${backgrounds[b]})`
		b++
		content.appendChild(div)
	}
}

/***/ }),

/***/ "./src/assets/bread.png":
/*!******************************!*\
  !*** ./src/assets/bread.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2eed4db2a1b9e8d5fc97.png";

/***/ }),

/***/ "./src/assets/coffee_4.png":
/*!*********************************!*\
  !*** ./src/assets/coffee_4.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "69113097b6de7de7501e.png";

/***/ }),

/***/ "./src/assets/fried_chicken.png":
/*!**************************************!*\
  !*** ./src/assets/fried_chicken.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "69e0e5dce19334006eb8.png";

/***/ }),

/***/ "./src/assets/kyoto.jpg":
/*!******************************!*\
  !*** ./src/assets/kyoto.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0410a86f8eae3b188d85.jpg";

/***/ }),

/***/ "./src/assets/lanterns.jpg":
/*!*********************************!*\
  !*** ./src/assets/lanterns.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "22b29ec0d5b7227e73e9.jpg";

/***/ }),

/***/ "./src/assets/ramen_2.png":
/*!********************************!*\
  !*** ./src/assets/ramen_2.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "afc44605e2a23e0dffa2.png";

/***/ }),

/***/ "./src/assets/rice_dish.png":
/*!**********************************!*\
  !*** ./src/assets/rice_dish.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8b512704cf78d6dd0a32.png";

/***/ }),

/***/ "./src/assets/shrimp_dish.png":
/*!************************************!*\
  !*** ./src/assets/shrimp_dish.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5e6c8beafdef7d12ea93.png";

/***/ }),

/***/ "./src/assets/spring.svg":
/*!*******************************!*\
  !*** ./src/assets/spring.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7dd275bb8639a14014d4.svg";

/***/ }),

/***/ "./src/assets/sushi.png":
/*!******************************!*\
  !*** ./src/assets/sushi.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ebad2118748e931da88b.png";

/***/ }),

/***/ "./src/menu.json":
/*!***********************!*\
  !*** ./src/menu.json ***!
  \***********************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"Ramen":[{"name":"Ramen","price":12.5},{"name":"Miso Ramen","price":14.5},{"name":"Spicy Ramen","price":13.5},{"name":"Vietnamese Ramen (Tasteless)","price":9.75},{"name":"Veggie Ramen","price":19.5}],"Rice Dishes":[{"name":"Katsu Curry","price":12.5},{"name":"Takana Chahan","price":14.5},{"name":"Yakimeshi","price":13.5},{"name":"Yakimeshi (Beef)","price":15},{"name":"Curry Rice","price":19.5}],"Sushi":[{"name":"Ikura","price":12.5},{"name":"Tako","price":14.5},{"name":"Tekkadon","price":13.5},{"name":"Unagi","price":9.75},{"name":"Hotate","price":19.5}],"Noodles":[{"name":"Tempura Udon","price":12.5},{"name":"Yaku Udon","price":14.5},{"name":"Ten Zaru Soba","price":13.5},{"name":"Nishin Soba","price":9.75},{"name":"Kitsune Soba","price":19.5}],"Foreign Dishes":[{"name":"Hamburger with Fries","price":22.5},{"name":"Fried Chicken","price":24.5},{"name":"Sausage and Mash","price":23.5},{"name":"Deepdish Pizza","price":29},{"name":"Avacado on Toast","price":19.5}],"Dessert":[{"name":"Mochi","price":12.5},{"name":"Bread","price":14.5},{"name":"Fluffy Cheesecake","price":13.5},{"name":"Matcha Ice Cream","price":9.75},{"name":"Dorayaki","price":19.5}],"Drinks":[{"name":"Tea","price":12.5},{"name":"Japanese Tea","price":14.5},{"name":"Coffee","price":13.5},{"name":"Japanese Coffee","price":9.75},{"name":"Soda","price":19.5}]}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLGdJQUFnSSw0RkFBNEYsTUFBTSx5SEFBeUg7QUFDM1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsWUFBWSxXQUFXLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFV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O0FBQ0E7QUFDQTtBQUNBLENBQUMscURBQUk7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHdEQUFPO0FBQ1IsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVywrQ0FBTTtBQUNqQjtBQUNBLElBQUkscURBQUk7QUFDUixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RDZCO0FBQzlCO0FBQ3dDO0FBQ0M7QUFDTztBQUNWO0FBQ1E7QUFDVDtBQUNLO0FBQzFDO0FBQ0EsNkJBQWUsc0NBQVU7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsS0FBSztBQUNyRCxrREFBa0QsUUFBUTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnREFBSyxFQUFFLGtEQUFJLEVBQUUsOENBQUssRUFBRSxvREFBTyxFQUFFLHNEQUFPLEVBQUUsOENBQUksRUFBRSxpREFBTTtBQUN0RTtBQUNBO0FBQ0EsNkNBQTZDLHVDQUFJO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdCQUFnQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0JBQWtCLEVBQUUsa0JBQWtCO0FBQzlEO0FBQ0E7QUFDQSxxQ0FBcUMsZUFBZTtBQUNwRDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RUIrR2FyYW1vbmQ6aXRhbCx3Z2h0QDAsNDAwLi44MDA7MSw0MDAuLjgwMCZmYW1pbHk9SW1idWU6b3Bzeix3Z2h0QDEwLi4xMDAsMTAwLi45MDAmZmFtaWx5PUxpYnJlK0Jhc2tlcnZpbGxlOml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDQwMCZmYW1pbHk9TmFudW0rR290aGljJmZhbWlseT1Ob3RvK1NhbnMrSlA6d2dodEAxMDAuLjkwMCZmYW1pbHk9Tm90bytTZXJpZitKUCZmYW1pbHk9VGVrbzp3Z2h0QDMwMC4uNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XHJcblx0bWFyZ2luOiAwO1xyXG5cdG1hcmdpbi10b3A6IDEwdmg7XHJcblx0cGFkZGluZzogMDtcclxuXHRmb250LWZhbWlseTogXCJJbWJ1ZVwiLCBzYW5zLXNlcmlmO1xyXG5cclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdGZvbnQtZmFtaWx5OiBcIlRla29cIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiNsb2dvIHtcclxuXHRoZWlnaHQ6IDd2aDtcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHRvcDogMDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nOiAxdmggMDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuXHJcbn1cclxuXHJcbmhlYWRlcjpob3ZlciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxufVxyXG5cclxubmF2IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRnYXA6IDF2aDtcclxufVxyXG5uYXYgPiBwIHtcclxuXHRtYXJnaW46IDA7XHJcblx0Y29sb3I6IG9yYW5nZTtcclxuXHRmb250LXNpemU6IDEuMzV2dztcclxuXHRmb250LWZhbWlseTogXCJOb3RvIFNlcmlmIEpQXCI7XHJcbn1cclxubmF2ID4gcDpmaXJzdC1jaGlsZCB7XHJcblx0Y29sb3I6IGxpZ2h0Z3JheTtcclxuXHRmb250LXNpemU6IDN2aDtcclxuXHRmb250LWZhbWlseTogXCJUZWtvXCI7XHJcbn1cclxuXHJcbi5yaWdodGllIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGdhcDogMnZ3O1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdG1hcmdpbi1ib3R0b206IDEwdmg7XHJcbn1cclxuXHJcbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xyXG4uY29udGVudCA+IC5tZW51IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IGNhbGMoNTAlIC0gMjV2dykgY2VudGVyO1xyXG59XHJcblxyXG4ubWVudTpudGgtY2hpbGQob2RkKSB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYyg1MCUgKyAyNXZ3KSBjZW50ZXI7XHJcbn1cclxuXHJcbi5tZW51Omxhc3QtY2hpbGQge1xyXG5cdG1hcmdpbi1ib3R0b206IDMwdmg7XHJcbn1cclxuXHJcbmgzLmNhdGVnb3J5IHtcclxuXHRtYXJnaW4tYm90dG9tOiAwO1xyXG5cdG1hcmdpbi10b3A6IDV2aDtcclxufVxyXG5cclxuLml0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMzB2dztcclxufVxyXG5cclxuLml0ZW0gcCB7XHJcblx0bWFyZ2luOiAwO1xyXG5cdGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG5cclxuLml0ZW06aG92ZXIge1xyXG5cdGNvbG9yOiBvcmFuZ2U7XHJcbn1cclxuXHJcbi5pdGVtIHNwYW4ge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IC8qIFByZXZlbnQgdGV4dCBmcm9tIHdyYXBwaW5nICovXHJcbn1cclxuXHJcbi5pdGVtIHA6Zmlyc3QtY2hpbGQge1xyXG5cdG1hcmdpbjogMDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IC8qIFByZXZlbnQgdGV4dCBmcm9tIHdyYXBwaW5nICovXHJcbn1cclxuXHJcbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xyXG4udGl0bGUge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGZvbnQtc2l6ZTogNi43dmg7XHJcblx0Zm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi50aXRsZSA+IGgxIHtcclxuXHRtYXJnaW46IDA7XHJcblx0Zm9udC1mYW1pbHk6IFwiTm90byBTYW5zIEpQXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi50aXRsZSA+IGgxOmZpcnN0LWNoaWxkIHtcclxuXHRtYXJnaW4tdG9wOiAxNnZoO1xyXG5cdGZvbnQtc2l6ZTogMTV2aDtcclxuXHRmb250LWZhbWlseTogXCJMaWJyZSBCYXNrZXJ2aWxsZVwiLCBzZXJpZjtcclxufVxyXG5cclxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXHJcbi5maXJzdCwgLnNlY29uZCwgLnRoaXJkIHtcclxuXHRwYWRkaW5nOiAydmggMnZ3O1xyXG5cdHdpZHRoOiA2MHZ3O1xyXG5cdG1hcmdpbjogMnZoIGF1dG87XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZmIyO1xyXG5cdGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLmZpcnN0ID4gaDEge1xyXG5cdGZvbnQtc2l6ZTogM3Z3O1xyXG5cdG1hcmdpbjogMDtcclxuXHRjb2xvcjogYnJvd247XHJcbn1cclxuXHJcbi5saXN0X2RldGFpbHMge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5saXN0X2RldGFpbHMgPiBwIHtcclxuXHRtYXJnaW46IDA7XHJcblx0Zm9udC1zaXplOiB4LWxhcmdlO1xyXG59XHJcblxyXG4ubGlzdF9kZXRhaWxzID4gcCA+IGEge1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRjb2xvcjpzbGF0ZWJsdWU7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0gKi9cclxuLnNlY29uZCB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGZvbnQtZmFtaWx5OiAnTm90byBTYW5zIEpQJztcclxuXHRjb2xvcjogYnJvd247XHJcblx0Zm9udC1zaXplOiA3dnc7XHJcblx0cGFkZGluZzogNXZoIDJ2dztcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLSAqL1xyXG4udGhpcmQge1xyXG5cdGhlaWdodDogOTB2aDtcclxuXHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xyXG5cdGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuXHJcblx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcblxyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cdGNvbG9yOiBvcmFuZ2U7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0YWxpZ24taXRlbXM6IGVuZDtcclxuXHJcbn1cclxuXHJcbi50aGlyZCA+IGlucHV0LCAudGhpcmQgPiB0ZXh0YXJlYSB7XHJcblx0d2lkdGg6IDMwdnc7XHJcblx0bWFyZ2luLXRvcDogMXZoO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MCk7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGhlaWdodDogM3ZoO1xyXG5cdGNvbG9yOiBtb2NjYXNpbjtcclxufVxyXG5cclxuLnRoaXJkID4gaW5wdXQ6Zm9jdXMsIC50aGlyZCA+IHRleHRhcmVhOmZvY3VzIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHRjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmlucHV0OjpwbGFjZWhvbGRlciwgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcclxuXHRjb2xvcjogb3JhbmdlO1xyXG5cdGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4udGhpcmQgPiB0ZXh0YXJlYSAge1xyXG5cdGhlaWdodDogMTB2aDtcclxuXHRtYXJnaW46IDZ2aCAwO1xyXG59XHJcblxyXG4udGhpcmQgPiBidXR0b24ge1xyXG5cdHdpZHRoOiAxMHZ3O1xyXG5cdGhlaWdodDogNXZoO1xyXG5cdGJhY2tncm91bmQtY29sb3I6dG9tYXRvO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xyXG5cdG1hcmdpbjogNnZoIDEwdnc7XHJcbn1cclxuXHJcbi50aGlyZCA+IGJ1dHRvbjphY3RpdmUge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdGNvbG9yOiB0b21hdG87XHJcbn1cclxuXHJcbi50aGlyZCA+IGgxIHtcclxuXHRtYXJnaW46IDF2aCAxMHZ3O1xyXG59XHJcblxyXG4udGhpcmQgPiBsYWJlbCB7XHJcblx0bWFyZ2luOiAwIDEzdnc7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7Q0FDQyxTQUFTO0NBQ1QsZ0JBQWdCO0NBQ2hCLFVBQVU7Q0FDVixnQ0FBZ0M7O0NBRWhDLHdCQUF3QjtDQUN4Qiw0QkFBNEI7Q0FDNUIsc0JBQXNCO0NBQ3RCLHNDQUFzQztBQUN2Qzs7QUFFQTtDQUNDLFdBQVc7Q0FDWCx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsZUFBZTtDQUNmLE1BQU07Q0FDTixXQUFXO0NBQ1gsY0FBYztDQUNkLDZCQUE2QjtDQUM3QixtQkFBbUI7Q0FDbkIsb0NBQW9DOztBQUVyQzs7QUFFQTtDQUNDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLFFBQVE7QUFDVDtBQUNBO0NBQ0MsU0FBUztDQUNULGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIsNEJBQTRCO0FBQzdCO0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixRQUFRO0FBQ1Q7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsdUJBQXVCOztDQUV2QixzQkFBc0I7Q0FDdEIsbUJBQW1CO0FBQ3BCOztBQUVBLHlDQUF5QztBQUN6QztDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsbUJBQW1COztDQUVuQiw0QkFBNEI7Q0FDNUIsMkJBQTJCO0NBQzNCLHdCQUF3QjtDQUN4Qiw0Q0FBNEM7QUFDN0M7O0FBRUE7Q0FDQyw0Q0FBNEM7QUFDN0M7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsZUFBZTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtDQUNDLFNBQVM7Q0FDVCxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLG1CQUFtQixFQUFFLCtCQUErQjtBQUN4RDs7QUFFQTtDQUNDLFNBQVM7SUFDTixtQkFBbUIsRUFBRSwrQkFBK0I7QUFDeEQ7O0FBRUEsZ0NBQWdDO0FBQ2hDO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBQ2hCLHlDQUF5QztBQUMxQzs7QUFFQTtDQUNDLFNBQVM7Q0FDVCx1Q0FBdUM7QUFDeEM7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLHVDQUF1QztBQUN4Qzs7QUFFQSxnQ0FBZ0M7QUFDaEM7Q0FDQyxnQkFBZ0I7Q0FDaEIsV0FBVztDQUNYLGdCQUFnQjtDQUNoQiwyQkFBMkI7Q0FDM0Isa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsY0FBYztDQUNkLFNBQVM7Q0FDVCxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLDhCQUE4QjtBQUMvQjs7QUFFQTtDQUNDLFNBQVM7Q0FDVCxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsZUFBZTtBQUNoQjs7QUFFQSxlQUFlO0FBQ2Y7Q0FDQyxrQkFBa0I7Q0FDbEIsMkJBQTJCO0NBQzNCLFlBQVk7Q0FDWixjQUFjO0NBQ2QsZ0JBQWdCO0FBQ2pCOztBQUVBLGVBQWU7QUFDZjtDQUNDLFlBQVk7O0NBRVosNEJBQTRCO0NBQzVCLHlCQUF5QjtDQUN6Qix3QkFBd0I7O0NBRXhCLHVCQUF1Qjs7Q0FFdkIsaUJBQWlCO0NBQ2pCLGFBQWE7Q0FDYixrQkFBa0I7O0NBRWxCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsZ0JBQWdCOztBQUVqQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxlQUFlO0NBQ2YsMkNBQTJDO0NBQzNDLFlBQVk7Q0FDWixXQUFXO0NBQ1gsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLHVCQUF1QjtDQUN2QixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGFBQWE7QUFDZDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsdUJBQXVCO0NBQ3ZCLFlBQVk7Q0FDWixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLHVCQUF1QjtDQUN2QixhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxjQUFjO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RUIrR2FyYW1vbmQ6aXRhbCx3Z2h0QDAsNDAwLi44MDA7MSw0MDAuLjgwMCZmYW1pbHk9SW1idWU6b3Bzeix3Z2h0QDEwLi4xMDAsMTAwLi45MDAmZmFtaWx5PUxpYnJlK0Jhc2tlcnZpbGxlOml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDQwMCZmYW1pbHk9TmFudW0rR290aGljJmZhbWlseT1Ob3RvK1NhbnMrSlA6d2dodEAxMDAuLjkwMCZmYW1pbHk9Tm90bytTZXJpZitKUCZmYW1pbHk9VGVrbzp3Z2h0QDMwMC4uNzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcbmJvZHkge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxMHZoO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJJbWJ1ZVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuXFxyXFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xcclxcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG5cXHRmb250LWZhbWlseTogXFxcIlRla29cXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuI2xvZ28ge1xcclxcblxcdGhlaWdodDogN3ZoO1xcclxcblxcdHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0dG9wOiAwO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdHBhZGRpbmc6IDF2aCAwO1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXI6aG92ZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0Z2FwOiAxdmg7XFxyXFxufVxcclxcbm5hdiA+IHAge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRjb2xvcjogb3JhbmdlO1xcclxcblxcdGZvbnQtc2l6ZTogMS4zNXZ3O1xcclxcblxcdGZvbnQtZmFtaWx5OiBcXFwiTm90byBTZXJpZiBKUFxcXCI7XFxyXFxufVxcclxcbm5hdiA+IHA6Zmlyc3QtY2hpbGQge1xcclxcblxcdGNvbG9yOiBsaWdodGdyYXk7XFxyXFxuXFx0Zm9udC1zaXplOiAzdmg7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJUZWtvXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0aWUge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0Z2FwOiAydnc7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdFxcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXFxyXFxuLmNvbnRlbnQgPiAubWVudSB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcblxcdGJhY2tncm91bmQtcG9zaXRpb246IGNhbGMoNTAlIC0gMjV2dykgY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudTpudGgtY2hpbGQob2RkKSB7XFxyXFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYyg1MCUgKyAyNXZ3KSBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZW51Omxhc3QtY2hpbGQge1xcclxcblxcdG1hcmdpbi1ib3R0b206IDMwdmg7XFxyXFxufVxcclxcblxcclxcbmgzLmNhdGVnb3J5IHtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAwO1xcclxcblxcdG1hcmdpbi10b3A6IDV2aDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAzMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbSBwIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0Zm9udC1zaXplOiB4LWxhcmdlO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbTpob3ZlciB7XFxyXFxuXFx0Y29sb3I6IG9yYW5nZTtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0gc3BhbiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgLyogUHJldmVudCB0ZXh0IGZyb20gd3JhcHBpbmcgKi9cXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0gcDpmaXJzdC1jaGlsZCB7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyAvKiBQcmV2ZW50IHRleHQgZnJvbSB3cmFwcGluZyAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cXHJcXG4udGl0bGUge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGZvbnQtc2l6ZTogNi43dmg7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSA+IGgxIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJOb3RvIFNhbnMgSlBcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUgPiBoMTpmaXJzdC1jaGlsZCB7XFxyXFxuXFx0bWFyZ2luLXRvcDogMTZ2aDtcXHJcXG5cXHRmb250LXNpemU6IDE1dmg7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJMaWJyZSBCYXNrZXJ2aWxsZVxcXCIsIHNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cXHJcXG4uZmlyc3QsIC5zZWNvbmQsIC50aGlyZCB7XFxyXFxuXFx0cGFkZGluZzogMnZoIDJ2dztcXHJcXG5cXHR3aWR0aDogNjB2dztcXHJcXG5cXHRtYXJnaW46IDJ2aCBhdXRvO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZiMjtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5maXJzdCA+IGgxIHtcXHJcXG5cXHRmb250LXNpemU6IDN2dztcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0Y29sb3I6IGJyb3duO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdF9kZXRhaWxzIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdF9kZXRhaWxzID4gcCB7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3RfZGV0YWlscyA+IHAgPiBhIHtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFx0Y29sb3I6c2xhdGVibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tICovXFxyXFxuLnNlY29uZCB7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGZvbnQtZmFtaWx5OiAnTm90byBTYW5zIEpQJztcXHJcXG5cXHRjb2xvcjogYnJvd247XFxyXFxuXFx0Zm9udC1zaXplOiA3dnc7XFxyXFxuXFx0cGFkZGluZzogNXZoIDJ2dztcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLSAqL1xcclxcbi50aGlyZCB7XFxyXFxuXFx0aGVpZ2h0OiA5MHZoO1xcclxcblxcclxcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcXHJcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuXFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuXFxyXFxuXFx0dGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuXFx0Y29sb3I6IG9yYW5nZTtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBlbmQ7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi50aGlyZCA+IGlucHV0LCAudGhpcmQgPiB0ZXh0YXJlYSB7XFxyXFxuXFx0d2lkdGg6IDMwdnc7XFxyXFxuXFx0bWFyZ2luLXRvcDogMXZoO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MCk7XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdGhlaWdodDogM3ZoO1xcclxcblxcdGNvbG9yOiBtb2NjYXNpbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRoaXJkID4gaW5wdXQ6Zm9jdXMsIC50aGlyZCA+IHRleHRhcmVhOmZvY3VzIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbmlucHV0OjpwbGFjZWhvbGRlciwgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXHJcXG5cXHRjb2xvcjogb3JhbmdlO1xcclxcblxcdGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4udGhpcmQgPiB0ZXh0YXJlYSAge1xcclxcblxcdGhlaWdodDogMTB2aDtcXHJcXG5cXHRtYXJnaW46IDZ2aCAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGhpcmQgPiBidXR0b24ge1xcclxcblxcdHdpZHRoOiAxMHZ3O1xcclxcblxcdGhlaWdodDogNXZoO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6dG9tYXRvO1xcclxcblxcdGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogOHB4O1xcclxcblxcdG1hcmdpbjogNnZoIDEwdnc7XFxyXFxufVxcclxcblxcclxcbi50aGlyZCA+IGJ1dHRvbjphY3RpdmUge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcblxcdGNvbG9yOiB0b21hdG87XFxyXFxufVxcclxcblxcclxcbi50aGlyZCA+IGgxIHtcXHJcXG5cXHRtYXJnaW46IDF2aCAxMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4udGhpcmQgPiBsYWJlbCB7XFxyXFxuXFx0bWFyZ2luOiAwIDEzdnc7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuXHRcclxuXHRsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcclxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICcnXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykuc3R5bGUuY29sb3IgPSAnQkxBQ0snXHJcblx0XHJcblxyXG5cdGNvbnRlbnQuaW5uZXJIVE1MID0gJydcclxuXHRsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG5cdGVsZW1lbnQuaW5uZXJIVE1MID0gJ2Fib3V0IG1lJ1xyXG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudClcclxuXHJcblxyXG5cclxufSIsImltcG9ydCBpbWFnZSBmcm9tICcuL2Fzc2V0cy9sYW50ZXJucy5qcGcnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xyXG5cdGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxyXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJydcclxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoMjQ3LCAyNDIsIDIzNiknXHJcblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZGFya2dyYXknXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykuc3R5bGUuY29sb3IgPSAnYmxhY2snXHJcblx0Y29udGVudC5pbm5lckhUTUwgPSAnJ1xyXG5cclxuXHJcblx0bGV0IGZpcnN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHRmaXJzdC5jbGFzc0xpc3QuYWRkKCdmaXJzdCcpXHJcblxyXG5cdGNvbnN0IGgxQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuXHRoMUNvbnRhY3QuaW5uZXJIVE1MID0gJ0NPTlRBQ1QnXHJcblx0Zmlyc3QuYXBwZW5kQ2hpbGQoaDFDb250YWN0KVxyXG5cclxuXHRsZXQgbGlzdF9kZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHRsaXN0X2RldGFpbHMuY2xhc3NMaXN0LmFkZCgnbGlzdF9kZXRhaWxzJylcclxuXHJcblx0Y29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuXHRwaG9uZS5pbm5lckhUTUwgPSAnKzgxMDAwMDAwMDAwJ1xyXG5cdGxpc3RfZGV0YWlscy5hcHBlbmRDaGlsZChwaG9uZSlcclxuXHJcblx0Y29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuXHRlbWFpbC5pbm5lckhUTUwgPSAncmlzaW5nX3N1bkB0b2t5by5qcCdcclxuXHRsaXN0X2RldGFpbHMuYXBwZW5kQ2hpbGQoZW1haWwpXHJcblxyXG5cdGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuXHRhZGRyZXNzLmlubmVySFRNTCA9ICdSaXNpbmcgU3VuLCAxMTM2LTQ5LCBOYWthZ2FtaWNobywgQWtpc2hpbWEsIFRva3lvLCBKYXBhbidcclxuXHRsaXN0X2RldGFpbHMuYXBwZW5kQ2hpbGQoYWRkcmVzcylcclxuXHRcclxuXHRjb25zdCBjb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcblx0Y29udC5pbm5lckhUTUwgPSAnMDg6MDAgLSAyMTowMCdcclxuXHRsaXN0X2RldGFpbHMuYXBwZW5kQ2hpbGQoY29udClcclxuXHRcclxuXHRmaXJzdC5hcHBlbmRDaGlsZChsaXN0X2RldGFpbHMpXHJcblxyXG5cdGNvbnN0IG1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xyXG5cdG1hcC5zZXRBdHRyaWJ1dGUoJ3NyYycsICdodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQyMDIuNDcyMjMwNDU4ODM3NTQhMmQxMzkuMzcyNTU3MjMxOTM5MDMhM2QzNS43MTI1NDk5MjI5MDQwNCEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4NjAxOGUxNjM3YmUzYmI4MSUzQTB4NGU5NmMzYTUzNmMxODlmNyEyc1Jpc2luZyUyMFN1biE1ZTAhM20yITFzZW4hMnN1ayE0djE3MTE5MjAxNTUwMjkhNW0yITFzZW4hMnN1aycpO1xyXG5cdG1hcC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JvcmRlcjowOyB3aWR0aDogNjB2dzsgaGVpZ2h0OiA0MHZoOyBtYXJnaW4tdG9wOiAydmg7Jyk7XHJcblx0bWFwLnNldEF0dHJpYnV0ZSgnbG9hZGluZycsICdsYXp5Jyk7XHJcblx0bWFwLnNldEF0dHJpYnV0ZSgncmVmZXJyZXJwb2xpY3knLCAnbm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGUnKTtcclxuXHRmaXJzdC5hcHBlbmRDaGlsZChtYXApO1xyXG5cclxuXHRsZXQgc29jaWFscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblx0c29jaWFscy5jbGFzc0xpc3QuYWRkKCdsaXN0X2RldGFpbHMnKVxyXG5cclxuXHRjb25zdCB0d2l0dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcblx0dHdpdHRlci5pbm5lckhUTUwgPSAnPGEgaHJlZj1cImh0dHBzOi8vd3d3LnR3aXR0ZXIuY29tXCI+VHdpdHRlcjwvYT4nXHJcblx0c29jaWFscy5hcHBlbmRDaGlsZCh0d2l0dGVyKVxyXG5cclxuXHRjb25zdCBmYWNlYm9vayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG5cdGZhY2Vib29rLmlubmVySFRNTCA9ICc8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tXCI+RmFjZWJvb2s8L2E+J1xyXG5cdHNvY2lhbHMuYXBwZW5kQ2hpbGQoZmFjZWJvb2spXHJcblxyXG5cdGNvbnN0IGluc3RhZ3JhbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG5cdGluc3RhZ3JhbS5pbm5lckhUTUwgPSAnPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb21cIj5JbnN0YWdyYW08L2E+J1xyXG5cdHNvY2lhbHMuYXBwZW5kQ2hpbGQoaW5zdGFncmFtKVxyXG5cclxuXHRjb25zdCB0aWt0b2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuXHR0aWt0b2suaW5uZXJIVE1MID0gJzxhIGhyZWY9XCJodHRwczovL3d3dy50aWt0b2suY29tXCI+VGlrdG9rPC9hPidcclxuXHRzb2NpYWxzLmFwcGVuZENoaWxkKHRpa3RvaylcclxuXHJcblx0XHJcblxyXG5cdGZpcnN0LmFwcGVuZENoaWxkKHNvY2lhbHMpXHJcblxyXG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQoZmlyc3QpXHJcblxyXG5cclxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRsZXQgc2Vjb25kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHRzZWNvbmQuY2xhc3NMaXN0LmFkZCgnc2Vjb25kJylcclxuXHRzZWNvbmQuaW5uZXJIVE1MID0gYOiKseOBr+ahnOacqOS6uuOBr+atpuWjq2BcclxuXHRjb250ZW50LmFwcGVuZENoaWxkKHNlY29uZClcclxuXHJcblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0bGV0IHRoaXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHR0aGlyZC5jbGFzc0xpc3QuYWRkKCd0aGlyZCcpXHJcblx0XHJcblx0dGhpcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2ltYWdlfSlgXHJcblx0bGV0IGgxQm9va2luZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuXHRoMUJvb2tpbmcuaW5uZXJIVE1MID0gJ1JldmVydmF0aW9ucydcclxuXHRcclxuXHR0aGlyZC5hcHBlbmRDaGlsZChoMUJvb2tpbmcpXHJcblxyXG5cdGxldCBsYWJlbDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcblx0bGFiZWwxLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcclxuXHRsYWJlbDEucGxhY2Vob2xkZXIgPSAnRW50ZXIgeW91ciBuYW1lJ1xyXG5cdHRoaXJkLmFwcGVuZENoaWxkKGxhYmVsMSlcclxuXHJcblx0bGV0IGxhYmVsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuXHRsYWJlbDIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpXHJcblx0bGFiZWwyLnBsYWNlaG9sZGVyID0gJ0VudGVyIHlvdXIgcGhvbmUgbnVtYmVyJ1xyXG5cdHRoaXJkLmFwcGVuZENoaWxkKGxhYmVsMilcclxuXHJcblx0bGV0IGxhYmVsMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuXHRsYWJlbDMuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2VtYWlsJylcclxuXHRsYWJlbDMucGxhY2Vob2xkZXIgPSAnRW50ZXIgeW91ciBlbWFpbCdcclxuXHR0aGlyZC5hcHBlbmRDaGlsZChsYWJlbDMpXHJcblxyXG5cdGxldCBsYWJlbDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXHJcblx0bGFiZWw0LnBsYWNlaG9sZGVyID0gJ1BsZWFzZSBlbnRlciBhbGVyZ3kgaW5mb3JtYXRpb24sIHNwZWNpYWwgY2lyY3Vtc3RhbmNlcyBvciBhbnl0aGluZyBpbXBvcnRhbnQnXHJcblx0dGhpcmQuYXBwZW5kQ2hpbGQobGFiZWw0KVxyXG5cclxuXHJcblx0bGV0IGxhYmVsNWlzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcclxuXHRsYWJlbDVpc2guaW5uZXJIVE1MID0gJ0Jvb2sgYSBUaW1lIFNsb3QnXHJcblxyXG5cdHRoaXJkLmFwcGVuZENoaWxkKGxhYmVsNWlzaClcclxuXHRsZXQgbGFiZWw1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG5cdGxhYmVsNS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGltZScpXHJcblx0dGhpcmQuYXBwZW5kQ2hpbGQobGFiZWw1KVxyXG5cclxuXHRcclxuXHRsZXQgbGFiZWw2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG5cdGxhYmVsNi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXHJcblx0bGFiZWw2LnBsYWNlaG9sZGVyID0gJ1doZXJlIHdvdWxkIHlvdSBsaWtlIHRvIHNlYXQ/J1xyXG5cdHRoaXJkLmFwcGVuZENoaWxkKGxhYmVsNilcclxuXHRcclxuXHRjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG5cdGJ1dHRvbi5pbm5lckhUTUwgPSAnQm9vayEnXHJcblx0dGhpcmQuYXBwZW5kQ2hpbGQoYnV0dG9uKVxyXG5cclxuXHRjb250ZW50LmFwcGVuZENoaWxkKHRoaXJkKVxyXG59IiwiaW1wb3J0IGt5b3RvIGZyb20gJy4vYXNzZXRzL2t5b3RvLmpwZydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcblx0bGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXHJcblx0Y29udGVudC5pbm5lckhUTUwgPSAnJ1xyXG5cclxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtreW90b30pYFxyXG5cclxuXHQvL2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDAsIDAsIDAsIDAuMjApJ1xyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLnN0eWxlLmNvbG9yID0gJ3doaXRlJ1xyXG5cdFxyXG5cdGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cdGRpdi5jbGFzc0xpc3QuYWRkKCd0aXRsZScpXHJcblxyXG5cdGxldCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuXHRoMS5pbm5lckhUTUwgPSAnUklTSU5HIFNVTidcclxuXHRoMS5zdHlsZS5jb2xvciA9ICdvcmFuZ2UnXHJcblxyXG5cdGxldCBoMUphcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuXHRoMUphcC5pbm5lckhUTUwgPSAn5q6644GV44KM44Gf542y54mpJ1xyXG5cdGgxSmFwLnN0eWxlLmNvbG9yID0gJ2Jyb3duJ1xyXG5cclxuXHRkaXYuYXBwZW5kQ2hpbGQoaDEpXHJcblx0ZGl2LmFwcGVuZENoaWxkKGgxSmFwKVxyXG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KVxyXG59IiwiLy8gY3NzXHJcbmltcG9ydCAnLi9pbmRleC5jc3MnXHJcblxyXG4vLyBpbWFnZXNcclxuaW1wb3J0IHNwcmluZyBmcm9tICcuL2Fzc2V0cy9zcHJpbmcuc3ZnJ1xyXG5cclxuLy8gY29udGVudFxyXG5pbXBvcnQgYWJvdXQgZnJvbSAnLi9hYm91dC5qcydcclxuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51LmpzJ1xyXG5pbXBvcnQgaG9tZSBmcm9tICcuL2hvbWUuanMnXHJcbmltcG9ydCBjb250YWN0IGZyb20gJy4vY29udGFjdC5qcydcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmhvbWUoKVxyXG5cclxuLy8gc2V0dGluZyB0aGUgZmF2aWNvblxyXG5jb25zdCBsaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImxpbmtbcmVsfj0naWNvbiddXCIpO1xyXG5pZiAoIWxpbmspIHtcclxuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XHJcbiAgICBsaW5rLnJlbCA9ICdpY29uJztcclxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XHJcbn1cclxubGluay5ocmVmID0gc3ByaW5nO1xyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNvbnN0IGFib3V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Fib3V0QnV0dG9uJylcclxuYWJvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcclxuXHRhYm91dCgpXHJcbn0pXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnVCdXR0b24nKVxyXG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuXHRtZW51KClcclxufSlcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0QnV0dG9uJylcclxuY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcblx0Y29udGFjdCgpXHJcbn0pXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZ28nKS5zcmMgPSBzcHJpbmdcclxubGV0IGxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9nbycpXHJcbmxvZ28uc3JjID0gc3ByaW5nXHJcbmxvZ28uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgaG9tZSgpXHJcbn0pXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uKGUpe1xyXG4gICAgY29uc3QgbW91c2VZID0gZS5jbGllbnRZXHJcbiAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcclxuICAgIFxyXG4gICAgaWYobW91c2VZIDwgKHdpbmRvd0hlaWdodCAqIDAuMTUpKVxyXG4gICAgICAgIGhlYWRlci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICBlbHNlXHJcbiAgICAgICAgaGVhZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxufSkiLCJpbXBvcnQgbWVudSBmcm9tICcuL21lbnUuanNvbidcclxuXHJcbmltcG9ydCByYW1lbiBmcm9tICcuL2Fzc2V0cy9yYW1lbl8yLnBuZydcclxuaW1wb3J0IHJpY2UgZnJvbSAnLi9hc3NldHMvcmljZV9kaXNoLnBuZydcclxuaW1wb3J0IGNoaWNrZW4gZnJvbSAnLi9hc3NldHMvZnJpZWRfY2hpY2tlbi5wbmcnXHJcbmltcG9ydCBzdXNoaSBmcm9tICcuL2Fzc2V0cy9zdXNoaS5wbmcnXHJcbmltcG9ydCBub29kbGVzIGZyb20gJy4vYXNzZXRzL3NocmltcF9kaXNoLnBuZydcclxuaW1wb3J0IGZsYW4gZnJvbSAnLi9hc3NldHMvYnJlYWQucG5nJ1xyXG5pbXBvcnQgY29mZmVlIGZyb20gJy4vYXNzZXRzL2NvZmZlZV80LnBuZydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcblx0bGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXHJcblx0Y29udGVudC5pbm5lckhUTUwgPSAnJ1xyXG5cclxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICcnXHJcblx0Ly9kb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtyaWNlfSlgXHJcblx0Ly9kb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSArPSBgLHVybCgke2NoaWNrZW59KWBcclxuXHRcclxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZWVlZWVlJ1xyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLnN0eWxlLmNvbG9yID0gJ2JsYWNrJ1xyXG5cclxuXHRsZXQgYmFja2dyb3VuZHMgPSBbcmFtZW4sIHJpY2UsIHN1c2hpLCBub29kbGVzLCBjaGlja2VuLCBmbGFuLCBjb2ZmZWVdXHJcblx0bGV0IGIgPSAwXHJcblxyXG5cdGZvcihsZXQgW2NhdGVnb3J5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMobWVudSkpe1xyXG5cdFx0bGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblx0XHRkaXYuY2xhc3NMaXN0LmFkZCgnbWVudScpXHJcblxyXG5cdFx0bGV0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxyXG5cdFx0aDMuaW5uZXJIVE1MID0gY2F0ZWdvcnlcclxuXHRcdGgzLmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5JylcclxuXHRcdGRpdi5hcHBlbmRDaGlsZChoMylcclxuXHJcblx0XHRmb3IobGV0IGk9MDsgaTx2YWx1ZS5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdGxldCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHRcdFx0aXRlbS5jbGFzc0xpc3QuYWRkKCdpdGVtJylcclxuXHJcblx0XHRcdGxldCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcblx0XHRcdG5hbWUuaW5uZXJIVE1MID0gaSsxICsgXCIuIFwiICsgdmFsdWVbaV0ubmFtZVxyXG5cdFx0XHRpdGVtLmFwcGVuZENoaWxkKG5hbWUpXHJcblxyXG5cdFx0XHRsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG5cdFx0XHRzcGFuLmlubmVySFRNTCA9IFwiLi4uXCIucmVwZWF0KDEwMClcclxuXHRcdFx0aXRlbS5hcHBlbmRDaGlsZChzcGFuKVxyXG5cclxuXHRcdFx0bGV0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcblx0XHRcdHByaWNlLmlubmVySFRNTCA9IHZhbHVlW2ldLnByaWNlXHJcblx0XHRcdGl0ZW0uYXBwZW5kQ2hpbGQocHJpY2UpXHJcblxyXG5cdFx0XHRkaXYuYXBwZW5kQ2hpbGQoaXRlbSlcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Ly9pdGVtLmlubmVySFRNTCA9IGAke2NhdGVnb3J5W1wibmFtZVwiXX0gJHtjYXRlZ29yeVtcInByaWNlXCJdfWBcclxuXHJcblxyXG5cdFx0ZGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtiYWNrZ3JvdW5kc1tiXX0pYFxyXG5cdFx0YisrXHJcblx0XHRjb250ZW50LmFwcGVuZENoaWxkKGRpdilcclxuXHR9XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=