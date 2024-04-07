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
}

/**************** ABOUT *************************/
.uno {
	margin: 0;
	margin-top: 10vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.banner {
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 50vw;
}

.banner  > h3 {
  font-family: "Noto Serif JP";
  font-size: 2.5vw;
  margin: 0;
  transition: color 7s;
}

.banner > h3:hover {
  color: maroon;
}

.banner > div > p {
	margin: 0;
	font-size: 1.5vw;
}

.first-pic {
	width: 100vw;
	margin-bottom: 10vh;
}

.dos {
	display: flex;
	flex-direction: row;
	gap: 2.5vw;
	margin: 0 20vw;
	background-color:#fdf7ee;
	border-radius: 8px;
	width: 65vw;
	margin-bottom: 15vh;
}
.dos > img {
	width: 30vw;
	border-radius: 8px;
}

.dosdiv > h4 {
	font-family: "Nanum Gothic", sans-serif;
	font-size: 2vw;
}

.dosdiv > p {
	width: 30vw;
	font-size: 1vw;
	font-family: sans-serif;
}

.dosdiv > P:last-child {
	font-size: 0.75vw;
	font-family: 'Noto Sans JP', sans-serif;
}

.tres {
	margin: 5vh auto;
	margin-bottom: 10vh;
}

.tres > h2 {
	font-size: 2.5vw;
	font-family: 'Noto Serif JP';
	text-align: center;
}

.tresdiv {
	display: flex;
	gap: 2vw;
}

.card {
	height: 40vh;
	width: 20vw;
	padding: 1vw;
	background-color: white;
	border-radius: 8px;
	-webkit-box-shadow: 10px 10px 43px -29px rgba(0,0,0,0.61);
	-moz-box-shadow: 10px 10px 43px -29px rgba(0,0,0,0.61);
	box-shadow: 10px 10px 43px -29px rgba(0,0,0,0.61);
}

.card > div {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.card p {
	margin: 0;
}

.review-date {
	font-size: 0.9vw;
	color: gray;
}

.review-name{
	font-weight: bold;
	font-family: 'Noto Serif JP', serif;
	font-size: 1.5vw;
}

.review-rating{
	font-family: 'Imbue', serif;
	font-size: 1.8vw;

	color: white;
	border-radius: 50%;
	background-color: orange;
	padding: 0.45vw;
}

.card:last-child > div > .review-rating{
	background-color: brown;
	color: white;
}

.card > p {
	margin-top: 3vh;
	font-family: 'Noto Sans JP', serif;
	font-size: 0.9vw;
}`, "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Imbue:opsz,wght@10..100,100..900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Nanum+Gothic&family=Noto+Sans+JP:wght@100..900&family=Noto+Serif+JP&family=Teko:wght@300..700&display=swap');\r\n\r\nbody {\r\n\tmargin: 0;\r\n\tmargin-top: 10vh;\r\n\tpadding: 0;\r\n\tfont-family: \"Imbue\", sans-serif;\r\n\r\n\tbackground-position: top;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: cover;\r\n\tfont-family: \"Teko\", Arial, sans-serif;\r\n}\r\n\r\n#logo {\r\n\theight: 7vh;\r\n\ttransform: rotate(-45deg);\r\n}\r\n\r\nheader {\r\n\tdisplay: flex;\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\twidth: 100%;\r\n\tpadding: 1vh 0;\r\n\tjustify-content: space-evenly;\r\n\talign-items: center;\r\n\tbackground-color: rgba(0, 0, 0, 0.2);\r\n\r\n}\r\n\r\nheader:hover {\r\n\tdisplay: flex;\r\n}\r\n\r\nnav {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tgap: 1vh;\r\n}\r\nnav > p {\r\n\tmargin: 0;\r\n\tcolor: orange;\r\n\tfont-size: 1.35vw;\r\n\tfont-family: \"Noto Serif JP\";\r\n}\r\nnav > p:first-child {\r\n\tcolor: lightgray;\r\n\tfont-size: 3vh;\r\n\tfont-family: \"Teko\";\r\n}\r\n\r\n.rightie {\r\n\tdisplay: flex;\r\n\tgap: 2vw;\r\n}\r\n\r\n.content {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\t\r\n\tflex-direction: column;\r\n\tmargin-bottom: 10vh;\r\n}\r\n\r\n/* //////////////////////////////////// */\r\n.content > .menu {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: center;\r\n\tbackground-size: contain;\r\n\tbackground-position: calc(50% - 25vw) center;\r\n}\r\n\r\n.menu:nth-child(odd) {\r\n\tbackground-position: calc(50% + 25vw) center;\r\n}\r\n\r\n.menu:last-child {\r\n\tmargin-bottom: 30vh;\r\n}\r\n\r\nh3.category {\r\n\tmargin-bottom: 0;\r\n\tmargin-top: 5vh;\r\n}\r\n\r\n.item {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 30vw;\r\n}\r\n\r\n.item p {\r\n\tmargin: 0;\r\n\tfont-size: x-large;\r\n}\r\n\r\n.item:hover {\r\n\tcolor: orange;\r\n}\r\n\r\n.item span {\r\n    margin: 0;\r\n    overflow: hidden;\r\n    white-space: nowrap; /* Prevent text from wrapping */\r\n}\r\n\r\n.item p:first-child {\r\n\tmargin: 0;\r\n    white-space: nowrap; /* Prevent text from wrapping */\r\n}\r\n\r\n/* /////////////////////////// */\r\n.title {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tfont-size: 6.7vh;\r\n\tfont-family: Helvetica, Arial, sans-serif;\r\n}\r\n\r\n.title > h1 {\r\n\tmargin: 0;\r\n\tfont-family: \"Noto Sans JP\", sans-serif;\r\n}\r\n\r\n.title > h1:first-child {\r\n\tmargin-top: 16vh;\r\n\tfont-size: 15vh;\r\n\tfont-family: \"Libre Baskerville\", serif;\r\n}\r\n\r\n/* /////////////////////////// */\r\n.first, .second, .third {\r\n\tpadding: 2vh 2vw;\r\n\twidth: 60vw;\r\n\tmargin: 2vh auto;\r\n\tbackground-color: #ffffffb2;\r\n\tborder-radius: 8px;\r\n}\r\n\r\n.first > h1 {\r\n\tfont-size: 3vw;\r\n\tmargin: 0;\r\n\tcolor: brown;\r\n}\r\n\r\n.list_details {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.list_details > p {\r\n\tmargin: 0;\r\n\tfont-size: x-large;\r\n}\r\n\r\n.list_details > p > a {\r\n\ttext-decoration: none;\r\n\tcolor:slateblue;\r\n}\r\n\r\n/* ---------- */\r\n.second {\r\n\ttext-align: center;\r\n\tfont-family: 'Noto Sans JP';\r\n\tcolor: brown;\r\n\tfont-size: 7vw;\r\n\tpadding: 5vh 2vw;\r\n}\r\n\r\n/* ---------- */\r\n.third {\r\n\theight: 90vh;\r\n\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: left;\r\n\tbackground-size: contain;\r\n\r\n\tbackground-color: black;\r\n\r\n\ttext-align: right;\r\n\tcolor: orange;\r\n\tposition: relative;\r\n\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: end;\r\n\r\n}\r\n\r\n.third > input, .third > textarea {\r\n\twidth: 30vw;\r\n\tmargin-top: 1vh;\r\n\tbackground-color: rgba(255, 255, 255, 0.40);\r\n\tborder: none;\r\n\theight: 3vh;\r\n\tcolor: moccasin;\r\n}\r\n\r\n.third > input:focus, .third > textarea:focus {\r\n\tbackground-color: white;\r\n\tcolor: black;\r\n}\r\n\r\ninput::placeholder, textarea::placeholder {\r\n\tcolor: orange;\r\n\tfont-family: sans-serif;\r\n}\r\n\r\n.third > textarea  {\r\n\theight: 10vh;\r\n\tmargin: 6vh 0;\r\n}\r\n\r\n.third > button {\r\n\twidth: 10vw;\r\n\theight: 5vh;\r\n\tbackground-color:tomato;\r\n\tcolor: white;\r\n\tborder: none;\r\n\tborder-radius: 8px;\r\n\tmargin: 6vh 10vw;\r\n}\r\n\r\n.third > button:active {\r\n\tbackground-color: white;\r\n\tcolor: tomato;\r\n}\r\n\r\n.third > h1 {\r\n\tmargin: 1vh 10vw;\r\n}\r\n\r\n.third > label {\r\n\tmargin: 0 13vw;\r\n}\r\n\r\n/**************** ABOUT *************************/\r\n.uno {\r\n\tmargin: 0;\r\n\tmargin-top: 10vh;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n.banner {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\talign-items: center;\r\n\tgap: 50vw;\r\n}\r\n\r\n.banner  > h3 {\r\n  font-family: \"Noto Serif JP\";\r\n  font-size: 2.5vw;\r\n  margin: 0;\r\n  transition: color 7s;\r\n}\r\n\r\n.banner > h3:hover {\r\n  color: maroon;\r\n}\r\n\r\n.banner > div > p {\r\n\tmargin: 0;\r\n\tfont-size: 1.5vw;\r\n}\r\n\r\n.first-pic {\r\n\twidth: 100vw;\r\n\tmargin-bottom: 10vh;\r\n}\r\n\r\n.dos {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tgap: 2.5vw;\r\n\tmargin: 0 20vw;\r\n\tbackground-color:#fdf7ee;\r\n\tborder-radius: 8px;\r\n\twidth: 65vw;\r\n\tmargin-bottom: 15vh;\r\n}\r\n.dos > img {\r\n\twidth: 30vw;\r\n\tborder-radius: 8px;\r\n}\r\n\r\n.dosdiv > h4 {\r\n\tfont-family: \"Nanum Gothic\", sans-serif;\r\n\tfont-size: 2vw;\r\n}\r\n\r\n.dosdiv > p {\r\n\twidth: 30vw;\r\n\tfont-size: 1vw;\r\n\tfont-family: sans-serif;\r\n}\r\n\r\n.dosdiv > P:last-child {\r\n\tfont-size: 0.75vw;\r\n\tfont-family: 'Noto Sans JP', sans-serif;\r\n}\r\n\r\n.tres {\r\n\tmargin: 5vh auto;\r\n\tmargin-bottom: 10vh;\r\n}\r\n\r\n.tres > h2 {\r\n\tfont-size: 2.5vw;\r\n\tfont-family: 'Noto Serif JP';\r\n\ttext-align: center;\r\n}\r\n\r\n.tresdiv {\r\n\tdisplay: flex;\r\n\tgap: 2vw;\r\n}\r\n\r\n.card {\r\n\theight: 40vh;\r\n\twidth: 20vw;\r\n\tpadding: 1vw;\r\n\tbackground-color: white;\r\n\tborder-radius: 8px;\r\n\t-webkit-box-shadow: 10px 10px 43px -29px rgba(0,0,0,0.61);\r\n\t-moz-box-shadow: 10px 10px 43px -29px rgba(0,0,0,0.61);\r\n\tbox-shadow: 10px 10px 43px -29px rgba(0,0,0,0.61);\r\n}\r\n\r\n.card > div {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n}\r\n\r\n.card p {\r\n\tmargin: 0;\r\n}\r\n\r\n.review-date {\r\n\tfont-size: 0.9vw;\r\n\tcolor: gray;\r\n}\r\n\r\n.review-name{\r\n\tfont-weight: bold;\r\n\tfont-family: 'Noto Serif JP', serif;\r\n\tfont-size: 1.5vw;\r\n}\r\n\r\n.review-rating{\r\n\tfont-family: 'Imbue', serif;\r\n\tfont-size: 1.8vw;\r\n\r\n\tcolor: white;\r\n\tborder-radius: 50%;\r\n\tbackground-color: orange;\r\n\tpadding: 0.45vw;\r\n}\r\n\r\n.card:last-child > div > .review-rating{\r\n\tbackground-color: brown;\r\n\tcolor: white;\r\n}\r\n\r\n.card > p {\r\n\tmargin-top: 3vh;\r\n\tfont-family: 'Noto Sans JP', serif;\r\n\tfont-size: 0.9vw;\r\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _assets_business_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/business.jpg */ "./src/assets/business.jpg");
/* harmony import */ var _assets_food3_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/food3.jpg */ "./src/assets/food3.jpg");
/* harmony import */ var _reviews_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reviews.json */ "./src/reviews.json");




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
	let content = document.querySelector('.content')
	document.body.style.backgroundImage = ''
	document.body.style.backgroundColor = '#eeeeee'
	document.querySelector('header').style.color = 'BLACK'
	

	content.innerHTML = ''
	let uno = document.createElement('div')
	uno.classList.add('uno')

	let banner = document.createElement('div')
	banner.classList.add('banner')

	let h3 = document.createElement('h3')
	h3.innerHTML = 'RISING SUN'
	
	h3.addEventListener('mouseenter', function(){
		this.innerHTML = '殺された獲物';
	})
	h3.addEventListener('mouseleave', function(){
		this.innerHTML = 'RISING SUN';
	})
	banner.appendChild(h3)

	let rightie = document.createElement('div')
	rightie.innerHTML = '<p> Opening Hours: 08:00 - 21:00 </p>'
	rightie.innerHTML += '<p> Rising Sun, 1136-49, Nakagamicho, Akishima, Tokyo, Japan </p>'
	
	banner.appendChild(rightie)

	uno.appendChild(banner)

	let pic = document.createElement('img')
	pic.src = _assets_business_jpg__WEBPACK_IMPORTED_MODULE_0__
	pic.classList.add('first-pic')
	uno.appendChild(pic)
	content.appendChild(uno)

	///////////////////////////////////////////////////////////////////////
	let dos = document.createElement('div')
	dos.classList.add('dos')


	let foodPic = document.createElement('img')
	foodPic.src = _assets_food3_jpg__WEBPACK_IMPORTED_MODULE_1__
	dos.appendChild(foodPic)

	let dosDiv = document.createElement('div')
	dosDiv.classList.add('dosdiv')
	dosDiv.innerHTML = '<h4> What Makes Our Food Unique?</h4>'
	dosDiv.innerHTML += '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh praesent tristique magna sit. Fames ac turpis egestas maecenas pharetra. Tempor nec feugiat nisl pretium fusce id velit. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Ac felis donec et odio pellentesque diam volutpat commodo. Neque aliquam vestibulum morbi blandit cursus risus at ultrices mi. Nisl condimentum id venenatis a. Risus nec feugiat in fermentum posuere urna nec. Phasellus vestibulum lorem sed risus. Eu volutpat odio facilisis mauris sit amet massa. Cursus in hac habitasse platea. Nam at lectus urna duis convallis convallis tellus. Eget magna fermentum iaculis eu non diam. </p>'
	dosDiv.innerHTML += '<p> サピエンス・フォーシバスとモレスティーとフェーギアの塊がベッドを除くまで。 猫は喉のように純粋な矢で追いかけられる必要がある。 トラックやトラックの需要は非常に高いです。 食欲をそそる悲しい笑いや歓喜が起こるまで モーリスの震えもウルトリスのどちらも飾りません。 しかし、もしそれが湖ではなく、登山者だったとしたら、彼はこの通りに住んでいたでしょう。 ラオレートは、妊娠中の弓と拷問の威厳に世話をされることはありません。 彼は治療用の矢のために常に純粋なチョコレートを必要としています。 チョコレートは現在最も一般的な病気です。 湖の担い手は、いつものように自分に重荷を負わせることを嘆いている。 明日からの谷は、常に作者でも人生の時間でもありません。 飢餓と醜さには震えが必要だ。 フリンギラ・ファセッラス・フォーシバス・チョコレート・エレフェンドまでの必要性。 商品の価格が非常に安い、または価格が安い。 湖は過ごしやすい週末です。 ライオンや病院の門は時々枕や月桂冠を吊り下げませんでした。 Tincidunt のプロパガンダは、大衆に Euismod を求めることがあります。 第 2 層の資金調達が重要であるという事実を利用する必要はありません。 テルス整数フギアでのヴィヴェッラ・アディピシング。</p>'
	dos.appendChild(dosDiv)
	
	content.appendChild(dos)

	///////////////////////////////////////////////////////////////////////
	let tres = document.createElement('div')
	tres.classList.add('tres')
	tres.innerHTML = `<h2> Reviews </h2>`
	
	let tresDiv = document.createElement('div')
	tresDiv.classList.add('tresdiv')
	for(let i=0; i<_reviews_json__WEBPACK_IMPORTED_MODULE_2__.length; i++){
		console.log(_reviews_json__WEBPACK_IMPORTED_MODULE_2__[i])
		let card = document.createElement('div')
		card.classList.add('card')
		card.innerHTML = `<div><div><p class="review-name">${_reviews_json__WEBPACK_IMPORTED_MODULE_2__[i].Name}</p><p class="review-date">${_reviews_json__WEBPACK_IMPORTED_MODULE_2__[i].Date}</p></div><p class="review-rating">${_reviews_json__WEBPACK_IMPORTED_MODULE_2__[i].Rating}</p></div>`
		card.innerHTML += `<p>${_reviews_json__WEBPACK_IMPORTED_MODULE_2__[i].Review}</p>`
		tresDiv.appendChild(card)
	}
	tres.appendChild(tresDiv)
	content.appendChild(tres)

	///////////////////////////////////////////////////////////////////////
	let quatro = document.createElement('div')
	quatro.classList.add('quatro')

	
	content.appendChild(quatro)
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

/***/ "./src/assets/business.jpg":
/*!*********************************!*\
  !*** ./src/assets/business.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e709dcf2a2d9dd2fac46.jpg";

/***/ }),

/***/ "./src/assets/coffee_4.png":
/*!*********************************!*\
  !*** ./src/assets/coffee_4.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "69113097b6de7de7501e.png";

/***/ }),

/***/ "./src/assets/food3.jpg":
/*!******************************!*\
  !*** ./src/assets/food3.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "167b863e06dfb7430ad3.jpg";

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

/***/ }),

/***/ "./src/reviews.json":
/*!**************************!*\
  !*** ./src/reviews.json ***!
  \**************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('[{"Name":"Juan","Date":"26 Jan, 2024","Rating":"5/5","Review":"BEST. FOOD. EVER"},{"Name":"みさき","Date":"05 May, 2022","Rating":"5/5","Review":"食べ物は良かったです"},{"Name":"ノア","Date":"15 Nov, 2024","Rating":"5/5","Review":"口の中でとろけます。 食べ物は絶妙で魅力的でした。 前衛的な。 ジェ・ネ・サイス・クイ. Melts in my mouth. The Food was exquisite and charming. avant garde. je ne sais quoi"},{"Name":"Kevin","Date":"07 Apr, 2024","Rating":"1/5","Review":"no kfc! no one speaks english. no pubs."}]');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLGdJQUFnSSw0RkFBNEYsTUFBTSx5SEFBeUg7QUFDM1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsWUFBWSxXQUFXLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSx5QkFBeUIsT0FBTyxLQUFLLFVBQVUsd0JBQXdCLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sVUFBVSxLQUFLLFdBQVcsWUFBWSxhQUFhLGNBQWMsY0FBYyxhQUFhLFdBQVcsYUFBYSxXQUFXLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLFdBQVcs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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0Q2QjtBQUM5QjtBQUN3QztBQUNDO0FBQ087QUFDVjtBQUNRO0FBQ1Q7QUFDSztBQUMxQztBQUNBLDZCQUFlLHNDQUFVO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELEtBQUs7QUFDckQsa0RBQWtELFFBQVE7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0RBQUssRUFBRSxrREFBSSxFQUFFLDhDQUFLLEVBQUUsb0RBQU8sRUFBRSxzREFBTyxFQUFFLDhDQUFJLEVBQUUsaURBQU07QUFDdEU7QUFDQTtBQUNBLDZDQUE2Qyx1Q0FBSTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnQkFBZ0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGtCQUFrQixFQUFFLGtCQUFrQjtBQUM5RDtBQUNBO0FBQ0EscUNBQXFDLGVBQWU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUVCK0dhcmFtb25kOml0YWwsd2dodEAwLDQwMC4uODAwOzEsNDAwLi44MDAmZmFtaWx5PUltYnVlOm9wc3osd2dodEAxMC4uMTAwLDEwMC4uOTAwJmZhbWlseT1MaWJyZStCYXNrZXJ2aWxsZTppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSw0MDAmZmFtaWx5PU5hbnVtK0dvdGhpYyZmYW1pbHk9Tm90bytTYW5zK0pQOndnaHRAMTAwLi45MDAmZmFtaWx5PU5vdG8rU2VyaWYrSlAmZmFtaWx5PVRla286d2dodEAzMDAuLjcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xyXG5cdG1hcmdpbjogMDtcclxuXHRtYXJnaW4tdG9wOiAxMHZoO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0Zm9udC1mYW1pbHk6IFwiSW1idWVcIiwgc2Fucy1zZXJpZjtcclxuXHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRmb250LWZhbWlseTogXCJUZWtvXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4jbG9nbyB7XHJcblx0aGVpZ2h0OiA3dmg7XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR0b3A6IDA7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0cGFkZGluZzogMXZoIDA7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcblxyXG59XHJcblxyXG5oZWFkZXI6aG92ZXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbm5hdiB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0Z2FwOiAxdmg7XHJcbn1cclxubmF2ID4gcCB7XHJcblx0bWFyZ2luOiAwO1xyXG5cdGNvbG9yOiBvcmFuZ2U7XHJcblx0Zm9udC1zaXplOiAxLjM1dnc7XHJcblx0Zm9udC1mYW1pbHk6IFwiTm90byBTZXJpZiBKUFwiO1xyXG59XHJcbm5hdiA+IHA6Zmlyc3QtY2hpbGQge1xyXG5cdGNvbG9yOiBsaWdodGdyYXk7XHJcblx0Zm9udC1zaXplOiAzdmg7XHJcblx0Zm9udC1mYW1pbHk6IFwiVGVrb1wiO1xyXG59XHJcblxyXG4ucmlnaHRpZSB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRnYXA6IDJ2dztcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRtYXJnaW4tYm90dG9tOiAxMHZoO1xyXG59XHJcblxyXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cclxuLmNvbnRlbnQgPiAubWVudSB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG5cdGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjYWxjKDUwJSAtIDI1dncpIGNlbnRlcjtcclxufVxyXG5cclxuLm1lbnU6bnRoLWNoaWxkKG9kZCkge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IGNhbGMoNTAlICsgMjV2dykgY2VudGVyO1xyXG59XHJcblxyXG4ubWVudTpsYXN0LWNoaWxkIHtcclxuXHRtYXJnaW4tYm90dG9tOiAzMHZoO1xyXG59XHJcblxyXG5oMy5jYXRlZ29yeSB7XHJcblx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHRtYXJnaW4tdG9wOiA1dmg7XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDMwdnc7XHJcbn1cclxuXHJcbi5pdGVtIHAge1xyXG5cdG1hcmdpbjogMDtcclxuXHRmb250LXNpemU6IHgtbGFyZ2U7XHJcbn1cclxuXHJcbi5pdGVtOmhvdmVyIHtcclxuXHRjb2xvcjogb3JhbmdlO1xyXG59XHJcblxyXG4uaXRlbSBzcGFuIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyAvKiBQcmV2ZW50IHRleHQgZnJvbSB3cmFwcGluZyAqL1xyXG59XHJcblxyXG4uaXRlbSBwOmZpcnN0LWNoaWxkIHtcclxuXHRtYXJnaW46IDA7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyAvKiBQcmV2ZW50IHRleHQgZnJvbSB3cmFwcGluZyAqL1xyXG59XHJcblxyXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cclxuLnRpdGxlIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRmb250LXNpemU6IDYuN3ZoO1xyXG5cdGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4udGl0bGUgPiBoMSB7XHJcblx0bWFyZ2luOiAwO1xyXG5cdGZvbnQtZmFtaWx5OiBcIk5vdG8gU2FucyBKUFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4udGl0bGUgPiBoMTpmaXJzdC1jaGlsZCB7XHJcblx0bWFyZ2luLXRvcDogMTZ2aDtcclxuXHRmb250LXNpemU6IDE1dmg7XHJcblx0Zm9udC1mYW1pbHk6IFwiTGlicmUgQmFza2VydmlsbGVcIiwgc2VyaWY7XHJcbn1cclxuXHJcbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xyXG4uZmlyc3QsIC5zZWNvbmQsIC50aGlyZCB7XHJcblx0cGFkZGluZzogMnZoIDJ2dztcclxuXHR3aWR0aDogNjB2dztcclxuXHRtYXJnaW46IDJ2aCBhdXRvO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZiMjtcclxuXHRib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5maXJzdCA+IGgxIHtcclxuXHRmb250LXNpemU6IDN2dztcclxuXHRtYXJnaW46IDA7XHJcblx0Y29sb3I6IGJyb3duO1xyXG59XHJcblxyXG4ubGlzdF9kZXRhaWxzIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ubGlzdF9kZXRhaWxzID4gcCB7XHJcblx0bWFyZ2luOiAwO1xyXG5cdGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG5cclxuLmxpc3RfZGV0YWlscyA+IHAgPiBhIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0Y29sb3I6c2xhdGVibHVlO1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tICovXHJcbi5zZWNvbmQge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LWZhbWlseTogJ05vdG8gU2FucyBKUCc7XHJcblx0Y29sb3I6IGJyb3duO1xyXG5cdGZvbnQtc2l6ZTogN3Z3O1xyXG5cdHBhZGRpbmc6IDV2aCAydnc7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0gKi9cclxuLnRoaXJkIHtcclxuXHRoZWlnaHQ6IDkwdmg7XHJcblxyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcblxyXG5cdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG5cclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxuXHRjb2xvcjogb3JhbmdlO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBlbmQ7XHJcblxyXG59XHJcblxyXG4udGhpcmQgPiBpbnB1dCwgLnRoaXJkID4gdGV4dGFyZWEge1xyXG5cdHdpZHRoOiAzMHZ3O1xyXG5cdG1hcmdpbi10b3A6IDF2aDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDApO1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRoZWlnaHQ6IDN2aDtcclxuXHRjb2xvcjogbW9jY2FzaW47XHJcbn1cclxuXHJcbi50aGlyZCA+IGlucHV0OmZvY3VzLCAudGhpcmQgPiB0ZXh0YXJlYTpmb2N1cyB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0Y29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5pbnB1dDo6cGxhY2Vob2xkZXIsIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XHJcblx0Y29sb3I6IG9yYW5nZTtcclxuXHRmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnRoaXJkID4gdGV4dGFyZWEgIHtcclxuXHRoZWlnaHQ6IDEwdmg7XHJcblx0bWFyZ2luOiA2dmggMDtcclxufVxyXG5cclxuLnRoaXJkID4gYnV0dG9uIHtcclxuXHR3aWR0aDogMTB2dztcclxuXHRoZWlnaHQ6IDV2aDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOnRvbWF0bztcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHRtYXJnaW46IDZ2aCAxMHZ3O1xyXG59XHJcblxyXG4udGhpcmQgPiBidXR0b246YWN0aXZlIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHRjb2xvcjogdG9tYXRvO1xyXG59XHJcblxyXG4udGhpcmQgPiBoMSB7XHJcblx0bWFyZ2luOiAxdmggMTB2dztcclxufVxyXG5cclxuLnRoaXJkID4gbGFiZWwge1xyXG5cdG1hcmdpbjogMCAxM3Z3O1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKiBBQk9VVCAqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4udW5vIHtcclxuXHRtYXJnaW46IDA7XHJcblx0bWFyZ2luLXRvcDogMTB2aDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJhbm5lciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0Z2FwOiA1MHZ3O1xyXG59XHJcblxyXG4uYmFubmVyICA+IGgzIHtcclxuICBmb250LWZhbWlseTogXCJOb3RvIFNlcmlmIEpQXCI7XHJcbiAgZm9udC1zaXplOiAyLjV2dztcclxuICBtYXJnaW46IDA7XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgN3M7XHJcbn1cclxuXHJcbi5iYW5uZXIgPiBoMzpob3ZlciB7XHJcbiAgY29sb3I6IG1hcm9vbjtcclxufVxyXG5cclxuLmJhbm5lciA+IGRpdiA+IHAge1xyXG5cdG1hcmdpbjogMDtcclxuXHRmb250LXNpemU6IDEuNXZ3O1xyXG59XHJcblxyXG4uZmlyc3QtcGljIHtcclxuXHR3aWR0aDogMTAwdnc7XHJcblx0bWFyZ2luLWJvdHRvbTogMTB2aDtcclxufVxyXG5cclxuLmRvcyB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGdhcDogMi41dnc7XHJcblx0bWFyZ2luOiAwIDIwdnc7XHJcblx0YmFja2dyb3VuZC1jb2xvcjojZmRmN2VlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHR3aWR0aDogNjV2dztcclxuXHRtYXJnaW4tYm90dG9tOiAxNXZoO1xyXG59XHJcbi5kb3MgPiBpbWcge1xyXG5cdHdpZHRoOiAzMHZ3O1xyXG5cdGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLmRvc2RpdiA+IGg0IHtcclxuXHRmb250LWZhbWlseTogXCJOYW51bSBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcclxuXHRmb250LXNpemU6IDJ2dztcclxufVxyXG5cclxuLmRvc2RpdiA+IHAge1xyXG5cdHdpZHRoOiAzMHZ3O1xyXG5cdGZvbnQtc2l6ZTogMXZ3O1xyXG5cdGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZG9zZGl2ID4gUDpsYXN0LWNoaWxkIHtcclxuXHRmb250LXNpemU6IDAuNzV2dztcclxuXHRmb250LWZhbWlseTogJ05vdG8gU2FucyBKUCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi50cmVzIHtcclxuXHRtYXJnaW46IDV2aCBhdXRvO1xyXG5cdG1hcmdpbi1ib3R0b206IDEwdmg7XHJcbn1cclxuXHJcbi50cmVzID4gaDIge1xyXG5cdGZvbnQtc2l6ZTogMi41dnc7XHJcblx0Zm9udC1mYW1pbHk6ICdOb3RvIFNlcmlmIEpQJztcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50cmVzZGl2IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGdhcDogMnZ3O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcblx0aGVpZ2h0OiA0MHZoO1xyXG5cdHdpZHRoOiAyMHZ3O1xyXG5cdHBhZGRpbmc6IDF2dztcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHRib3JkZXItcmFkaXVzOiA4cHg7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDEwcHggNDNweCAtMjlweCByZ2JhKDAsMCwwLDAuNjEpO1xyXG5cdC1tb3otYm94LXNoYWRvdzogMTBweCAxMHB4IDQzcHggLTI5cHggcmdiYSgwLDAsMCwwLjYxKTtcclxuXHRib3gtc2hhZG93OiAxMHB4IDEwcHggNDNweCAtMjlweCByZ2JhKDAsMCwwLDAuNjEpO1xyXG59XHJcblxyXG4uY2FyZCA+IGRpdiB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmQgcCB7XHJcblx0bWFyZ2luOiAwO1xyXG59XHJcblxyXG4ucmV2aWV3LWRhdGUge1xyXG5cdGZvbnQtc2l6ZTogMC45dnc7XHJcblx0Y29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi5yZXZpZXctbmFtZXtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRmb250LWZhbWlseTogJ05vdG8gU2VyaWYgSlAnLCBzZXJpZjtcclxuXHRmb250LXNpemU6IDEuNXZ3O1xyXG59XHJcblxyXG4ucmV2aWV3LXJhdGluZ3tcclxuXHRmb250LWZhbWlseTogJ0ltYnVlJywgc2VyaWY7XHJcblx0Zm9udC1zaXplOiAxLjh2dztcclxuXHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcblx0cGFkZGluZzogMC40NXZ3O1xyXG59XHJcblxyXG4uY2FyZDpsYXN0LWNoaWxkID4gZGl2ID4gLnJldmlldy1yYXRpbmd7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogYnJvd247XHJcblx0Y29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2FyZCA+IHAge1xyXG5cdG1hcmdpbi10b3A6IDN2aDtcclxuXHRmb250LWZhbWlseTogJ05vdG8gU2FucyBKUCcsIHNlcmlmO1xyXG5cdGZvbnQtc2l6ZTogMC45dnc7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7Q0FDQyxTQUFTO0NBQ1QsZ0JBQWdCO0NBQ2hCLFVBQVU7Q0FDVixnQ0FBZ0M7O0NBRWhDLHdCQUF3QjtDQUN4Qiw0QkFBNEI7Q0FDNUIsc0JBQXNCO0NBQ3RCLHNDQUFzQztBQUN2Qzs7QUFFQTtDQUNDLFdBQVc7Q0FDWCx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsZUFBZTtDQUNmLE1BQU07Q0FDTixXQUFXO0NBQ1gsY0FBYztDQUNkLDZCQUE2QjtDQUM3QixtQkFBbUI7Q0FDbkIsb0NBQW9DOztBQUVyQzs7QUFFQTtDQUNDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLFFBQVE7QUFDVDtBQUNBO0NBQ0MsU0FBUztDQUNULGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIsNEJBQTRCO0FBQzdCO0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixRQUFRO0FBQ1Q7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsdUJBQXVCOztDQUV2QixzQkFBc0I7Q0FDdEIsbUJBQW1CO0FBQ3BCOztBQUVBLHlDQUF5QztBQUN6QztDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsbUJBQW1COztDQUVuQiw0QkFBNEI7Q0FDNUIsMkJBQTJCO0NBQzNCLHdCQUF3QjtDQUN4Qiw0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QWM7Q0FDZCx1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsdUNBQXVDO0FBQ3hDOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQiw0QkFBNEI7Q0FDNUIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsYUFBYTtDQUNiLFFBQVE7QUFDVDs7QUFFQTtDQUNDLFlBQVk7Q0FDWixXQUFXO0NBQ1gsWUFBWTtDQUNaLHVCQUF1QjtDQUN2QixrQkFBa0I7Q0FDbEIseURBQXlEO0NBQ3pELHNEQUFzRDtDQUN0RCxpREFBaUQ7QUFDbEQ7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLFNBQVM7QUFDVjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsbUNBQW1DO0NBQ25DLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLDJCQUEyQjtDQUMzQixnQkFBZ0I7O0NBRWhCLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsd0JBQXdCO0NBQ3hCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyx1QkFBdUI7Q0FDdkIsWUFBWTtBQUNiOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGtDQUFrQztDQUNsQyxnQkFBZ0I7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RUIrR2FyYW1vbmQ6aXRhbCx3Z2h0QDAsNDAwLi44MDA7MSw0MDAuLjgwMCZmYW1pbHk9SW1idWU6b3Bzeix3Z2h0QDEwLi4xMDAsMTAwLi45MDAmZmFtaWx5PUxpYnJlK0Jhc2tlcnZpbGxlOml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDQwMCZmYW1pbHk9TmFudW0rR290aGljJmZhbWlseT1Ob3RvK1NhbnMrSlA6d2dodEAxMDAuLjkwMCZmYW1pbHk9Tm90bytTZXJpZitKUCZmYW1pbHk9VGVrbzp3Z2h0QDMwMC4uNzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbmJvZHkge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxMHZoO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJJbWJ1ZVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuXFxyXFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xcclxcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG5cXHRmb250LWZhbWlseTogXFxcIlRla29cXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuI2xvZ28ge1xcclxcblxcdGhlaWdodDogN3ZoO1xcclxcblxcdHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0dG9wOiAwO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdHBhZGRpbmc6IDF2aCAwO1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXI6aG92ZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0Z2FwOiAxdmg7XFxyXFxufVxcclxcbm5hdiA+IHAge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRjb2xvcjogb3JhbmdlO1xcclxcblxcdGZvbnQtc2l6ZTogMS4zNXZ3O1xcclxcblxcdGZvbnQtZmFtaWx5OiBcXFwiTm90byBTZXJpZiBKUFxcXCI7XFxyXFxufVxcclxcbm5hdiA+IHA6Zmlyc3QtY2hpbGQge1xcclxcblxcdGNvbG9yOiBsaWdodGdyYXk7XFxyXFxuXFx0Zm9udC1zaXplOiAzdmg7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJUZWtvXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0aWUge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0Z2FwOiAydnc7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdFxcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXFxyXFxuLmNvbnRlbnQgPiAubWVudSB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcblxcdGJhY2tncm91bmQtcG9zaXRpb246IGNhbGMoNTAlIC0gMjV2dykgY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudTpudGgtY2hpbGQob2RkKSB7XFxyXFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYyg1MCUgKyAyNXZ3KSBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZW51Omxhc3QtY2hpbGQge1xcclxcblxcdG1hcmdpbi1ib3R0b206IDMwdmg7XFxyXFxufVxcclxcblxcclxcbmgzLmNhdGVnb3J5IHtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAwO1xcclxcblxcdG1hcmdpbi10b3A6IDV2aDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAzMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbSBwIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0Zm9udC1zaXplOiB4LWxhcmdlO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbTpob3ZlciB7XFxyXFxuXFx0Y29sb3I6IG9yYW5nZTtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0gc3BhbiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgLyogUHJldmVudCB0ZXh0IGZyb20gd3JhcHBpbmcgKi9cXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0gcDpmaXJzdC1jaGlsZCB7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyAvKiBQcmV2ZW50IHRleHQgZnJvbSB3cmFwcGluZyAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cXHJcXG4udGl0bGUge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGZvbnQtc2l6ZTogNi43dmg7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSA+IGgxIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJOb3RvIFNhbnMgSlBcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUgPiBoMTpmaXJzdC1jaGlsZCB7XFxyXFxuXFx0bWFyZ2luLXRvcDogMTZ2aDtcXHJcXG5cXHRmb250LXNpemU6IDE1dmg7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJMaWJyZSBCYXNrZXJ2aWxsZVxcXCIsIHNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cXHJcXG4uZmlyc3QsIC5zZWNvbmQsIC50aGlyZCB7XFxyXFxuXFx0cGFkZGluZzogMnZoIDJ2dztcXHJcXG5cXHR3aWR0aDogNjB2dztcXHJcXG5cXHRtYXJnaW46IDJ2aCBhdXRvO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZiMjtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5maXJzdCA+IGgxIHtcXHJcXG5cXHRmb250LXNpemU6IDN2dztcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0Y29sb3I6IGJyb3duO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdF9kZXRhaWxzIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdF9kZXRhaWxzID4gcCB7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3RfZGV0YWlscyA+IHAgPiBhIHtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFx0Y29sb3I6c2xhdGVibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tICovXFxyXFxuLnNlY29uZCB7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGZvbnQtZmFtaWx5OiAnTm90byBTYW5zIEpQJztcXHJcXG5cXHRjb2xvcjogYnJvd247XFxyXFxuXFx0Zm9udC1zaXplOiA3dnc7XFxyXFxuXFx0cGFkZGluZzogNXZoIDJ2dztcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLSAqL1xcclxcbi50aGlyZCB7XFxyXFxuXFx0aGVpZ2h0OiA5MHZoO1xcclxcblxcclxcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcXHJcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuXFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuXFxyXFxuXFx0dGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuXFx0Y29sb3I6IG9yYW5nZTtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBlbmQ7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi50aGlyZCA+IGlucHV0LCAudGhpcmQgPiB0ZXh0YXJlYSB7XFxyXFxuXFx0d2lkdGg6IDMwdnc7XFxyXFxuXFx0bWFyZ2luLXRvcDogMXZoO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MCk7XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdGhlaWdodDogM3ZoO1xcclxcblxcdGNvbG9yOiBtb2NjYXNpbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRoaXJkID4gaW5wdXQ6Zm9jdXMsIC50aGlyZCA+IHRleHRhcmVhOmZvY3VzIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbmlucHV0OjpwbGFjZWhvbGRlciwgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXHJcXG5cXHRjb2xvcjogb3JhbmdlO1xcclxcblxcdGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4udGhpcmQgPiB0ZXh0YXJlYSAge1xcclxcblxcdGhlaWdodDogMTB2aDtcXHJcXG5cXHRtYXJnaW46IDZ2aCAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGhpcmQgPiBidXR0b24ge1xcclxcblxcdHdpZHRoOiAxMHZ3O1xcclxcblxcdGhlaWdodDogNXZoO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6dG9tYXRvO1xcclxcblxcdGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogOHB4O1xcclxcblxcdG1hcmdpbjogNnZoIDEwdnc7XFxyXFxufVxcclxcblxcclxcbi50aGlyZCA+IGJ1dHRvbjphY3RpdmUge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcblxcdGNvbG9yOiB0b21hdG87XFxyXFxufVxcclxcblxcclxcbi50aGlyZCA+IGgxIHtcXHJcXG5cXHRtYXJnaW46IDF2aCAxMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4udGhpcmQgPiBsYWJlbCB7XFxyXFxuXFx0bWFyZ2luOiAwIDEzdnc7XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqKioqKioqIEFCT1VUICoqKioqKioqKioqKioqKioqKioqKioqKiovXFxyXFxuLnVubyB7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdG1hcmdpbi10b3A6IDEwdmg7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5iYW5uZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGdhcDogNTB2dztcXHJcXG59XFxyXFxuXFxyXFxuLmJhbm5lciAgPiBoMyB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk5vdG8gU2VyaWYgSlBcXFwiO1xcclxcbiAgZm9udC1zaXplOiAyLjV2dztcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHRyYW5zaXRpb246IGNvbG9yIDdzO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFubmVyID4gaDM6aG92ZXIge1xcclxcbiAgY29sb3I6IG1hcm9vbjtcXHJcXG59XFxyXFxuXFxyXFxuLmJhbm5lciA+IGRpdiA+IHAge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRmb250LXNpemU6IDEuNXZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uZmlyc3QtcGljIHtcXHJcXG5cXHR3aWR0aDogMTAwdnc7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmRvcyB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcblxcdGdhcDogMi41dnc7XFxyXFxuXFx0bWFyZ2luOiAwIDIwdnc7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjojZmRmN2VlO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG5cXHR3aWR0aDogNjV2dztcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxNXZoO1xcclxcbn1cXHJcXG4uZG9zID4gaW1nIHtcXHJcXG5cXHR3aWR0aDogMzB2dztcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5kb3NkaXYgPiBoNCB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJOYW51bSBHb3RoaWNcXFwiLCBzYW5zLXNlcmlmO1xcclxcblxcdGZvbnQtc2l6ZTogMnZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uZG9zZGl2ID4gcCB7XFxyXFxuXFx0d2lkdGg6IDMwdnc7XFxyXFxuXFx0Zm9udC1zaXplOiAxdnc7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5kb3NkaXYgPiBQOmxhc3QtY2hpbGQge1xcclxcblxcdGZvbnQtc2l6ZTogMC43NXZ3O1xcclxcblxcdGZvbnQtZmFtaWx5OiAnTm90byBTYW5zIEpQJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLnRyZXMge1xcclxcblxcdG1hcmdpbjogNXZoIGF1dG87XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnRyZXMgPiBoMiB7XFxyXFxuXFx0Zm9udC1zaXplOiAyLjV2dztcXHJcXG5cXHRmb250LWZhbWlseTogJ05vdG8gU2VyaWYgSlAnO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRyZXNkaXYge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0Z2FwOiAydnc7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHtcXHJcXG5cXHRoZWlnaHQ6IDQwdmg7XFxyXFxuXFx0d2lkdGg6IDIwdnc7XFxyXFxuXFx0cGFkZGluZzogMXZ3O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG5cXHQtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCA0M3B4IC0yOXB4IHJnYmEoMCwwLDAsMC42MSk7XFxyXFxuXFx0LW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggNDNweCAtMjlweCByZ2JhKDAsMCwwLDAuNjEpO1xcclxcblxcdGJveC1zaGFkb3c6IDEwcHggMTBweCA0M3B4IC0yOXB4IHJnYmEoMCwwLDAsMC42MSk7XFxyXFxufVxcclxcblxcclxcbi5jYXJkID4gZGl2IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCBwIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5yZXZpZXctZGF0ZSB7XFxyXFxuXFx0Zm9udC1zaXplOiAwLjl2dztcXHJcXG5cXHRjb2xvcjogZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLnJldmlldy1uYW1le1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcdGZvbnQtZmFtaWx5OiAnTm90byBTZXJpZiBKUCcsIHNlcmlmO1xcclxcblxcdGZvbnQtc2l6ZTogMS41dnc7XFxyXFxufVxcclxcblxcclxcbi5yZXZpZXctcmF0aW5ne1xcclxcblxcdGZvbnQtZmFtaWx5OiAnSW1idWUnLCBzZXJpZjtcXHJcXG5cXHRmb250LXNpemU6IDEuOHZ3O1xcclxcblxcclxcblxcdGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcclxcblxcdHBhZGRpbmc6IDAuNDV2dztcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQ6bGFzdC1jaGlsZCA+IGRpdiA+IC5yZXZpZXctcmF0aW5ne1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xcclxcblxcdGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgPiBwIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiAzdmg7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdOb3RvIFNhbnMgSlAnLCBzZXJpZjtcXHJcXG5cXHRmb250LXNpemU6IDAuOXZ3O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGJ1c2luZXNzIGZyb20gJy4vYXNzZXRzL2J1c2luZXNzLmpwZydcclxuaW1wb3J0IGZvb2QgZnJvbSAnLi9hc3NldHMvZm9vZDMuanBnJ1xyXG5pbXBvcnQgcmV2aWV3cyBmcm9tICcuL3Jldmlld3MuanNvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcblx0bGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXHJcblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnJ1xyXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNlZWVlZWUnXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykuc3R5bGUuY29sb3IgPSAnQkxBQ0snXHJcblx0XHJcblxyXG5cdGNvbnRlbnQuaW5uZXJIVE1MID0gJydcclxuXHRsZXQgdW5vID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHR1bm8uY2xhc3NMaXN0LmFkZCgndW5vJylcclxuXHJcblx0bGV0IGJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblx0YmFubmVyLmNsYXNzTGlzdC5hZGQoJ2Jhbm5lcicpXHJcblxyXG5cdGxldCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcclxuXHRoMy5pbm5lckhUTUwgPSAnUklTSU5HIFNVTidcclxuXHRcclxuXHRoMy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMuaW5uZXJIVE1MID0gJ+auuuOBleOCjOOBn+eNsueJqSc7XHJcblx0fSlcclxuXHRoMy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMuaW5uZXJIVE1MID0gJ1JJU0lORyBTVU4nO1xyXG5cdH0pXHJcblx0YmFubmVyLmFwcGVuZENoaWxkKGgzKVxyXG5cclxuXHRsZXQgcmlnaHRpZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblx0cmlnaHRpZS5pbm5lckhUTUwgPSAnPHA+IE9wZW5pbmcgSG91cnM6IDA4OjAwIC0gMjE6MDAgPC9wPidcclxuXHRyaWdodGllLmlubmVySFRNTCArPSAnPHA+IFJpc2luZyBTdW4sIDExMzYtNDksIE5ha2FnYW1pY2hvLCBBa2lzaGltYSwgVG9reW8sIEphcGFuIDwvcD4nXHJcblx0XHJcblx0YmFubmVyLmFwcGVuZENoaWxkKHJpZ2h0aWUpXHJcblxyXG5cdHVuby5hcHBlbmRDaGlsZChiYW5uZXIpXHJcblxyXG5cdGxldCBwaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG5cdHBpYy5zcmMgPSBidXNpbmVzc1xyXG5cdHBpYy5jbGFzc0xpc3QuYWRkKCdmaXJzdC1waWMnKVxyXG5cdHVuby5hcHBlbmRDaGlsZChwaWMpXHJcblx0Y29udGVudC5hcHBlbmRDaGlsZCh1bm8pXHJcblxyXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0bGV0IGRvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblx0ZG9zLmNsYXNzTGlzdC5hZGQoJ2RvcycpXHJcblxyXG5cclxuXHRsZXQgZm9vZFBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcblx0Zm9vZFBpYy5zcmMgPSBmb29kXHJcblx0ZG9zLmFwcGVuZENoaWxkKGZvb2RQaWMpXHJcblxyXG5cdGxldCBkb3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cdGRvc0Rpdi5jbGFzc0xpc3QuYWRkKCdkb3NkaXYnKVxyXG5cdGRvc0Rpdi5pbm5lckhUTUwgPSAnPGg0PiBXaGF0IE1ha2VzIE91ciBGb29kIFVuaXF1ZT88L2g0PidcclxuXHRkb3NEaXYuaW5uZXJIVE1MICs9ICc8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gRWdlc3RhcyBpbnRlZ2VyIGVnZXQgYWxpcXVldCBuaWJoIHByYWVzZW50IHRyaXN0aXF1ZSBtYWduYSBzaXQuIEZhbWVzIGFjIHR1cnBpcyBlZ2VzdGFzIG1hZWNlbmFzIHBoYXJldHJhLiBUZW1wb3IgbmVjIGZldWdpYXQgbmlzbCBwcmV0aXVtIGZ1c2NlIGlkIHZlbGl0LiBJbiBtZXR1cyB2dWxwdXRhdGUgZXUgc2NlbGVyaXNxdWUgZmVsaXMgaW1wZXJkaWV0IHByb2luIGZlcm1lbnR1bSBsZW8uIEFjIGZlbGlzIGRvbmVjIGV0IG9kaW8gcGVsbGVudGVzcXVlIGRpYW0gdm9sdXRwYXQgY29tbW9kby4gTmVxdWUgYWxpcXVhbSB2ZXN0aWJ1bHVtIG1vcmJpIGJsYW5kaXQgY3Vyc3VzIHJpc3VzIGF0IHVsdHJpY2VzIG1pLiBOaXNsIGNvbmRpbWVudHVtIGlkIHZlbmVuYXRpcyBhLiBSaXN1cyBuZWMgZmV1Z2lhdCBpbiBmZXJtZW50dW0gcG9zdWVyZSB1cm5hIG5lYy4gUGhhc2VsbHVzIHZlc3RpYnVsdW0gbG9yZW0gc2VkIHJpc3VzLiBFdSB2b2x1dHBhdCBvZGlvIGZhY2lsaXNpcyBtYXVyaXMgc2l0IGFtZXQgbWFzc2EuIEN1cnN1cyBpbiBoYWMgaGFiaXRhc3NlIHBsYXRlYS4gTmFtIGF0IGxlY3R1cyB1cm5hIGR1aXMgY29udmFsbGlzIGNvbnZhbGxpcyB0ZWxsdXMuIEVnZXQgbWFnbmEgZmVybWVudHVtIGlhY3VsaXMgZXUgbm9uIGRpYW0uIDwvcD4nXHJcblx0ZG9zRGl2LmlubmVySFRNTCArPSAnPHA+IOOCteODlOOCqOODs+OCueODu+ODleOCqeODvOOCt+ODkOOCueOBqOODouODrOOCueODhuOCo+ODvOOBqOODleOCp+ODvOOCruOCouOBruWhiuOBjOODmeODg+ODieOCkumZpOOBj+OBvuOBp+OAgiDnjKvjga/llonjga7jgojjgYbjgavntJTnsovjgarnn6Ljgafov73jgYTjgYvjgZHjgonjgozjgovlv4XopoHjgYzjgYLjgovjgIIg44OI44Op44OD44Kv44KE44OI44Op44OD44Kv44Gu6ZyA6KaB44Gv6Z2e5bi444Gr6auY44GE44Gn44GZ44CCIOmjn+assuOCkuOBneOBneOCi+aCsuOBl+OBhOeskeOBhOOChOatk+WWnOOBjOi1t+OBk+OCi+OBvuOBpyDjg6Ljg7zjg6rjgrnjga7pnIfjgYjjgoLjgqbjg6vjg4jjg6rjgrnjga7jganjgaHjgonjgoLpo77jgorjgb7jgZvjgpPjgIIg44GX44GL44GX44CB44KC44GX44Gd44KM44GM5rmW44Gn44Gv44Gq44GP44CB55m75bGx6ICF44Gg44Gj44Gf44Go44GX44Gf44KJ44CB5b2844Gv44GT44Gu6YCa44KK44Gr5L2P44KT44Gn44GE44Gf44Gn44GX44KH44GG44CCIOODqeOCquODrOODvOODiOOBr+OAgeWmiuWooOS4reOBruW8k+OBqOaLt+WVj+OBruWogeWOs+OBq+S4luipseOCkuOBleOCjOOCi+OBk+OBqOOBr+OBguOCiuOBvuOBm+OCk+OAgiDlvbzjga/msrvnmYLnlKjjga7nn6Ljga7jgZ/jgoHjgavluLjjgavntJTnsovjgarjg4Hjg6fjgrPjg6zjg7zjg4jjgpLlv4XopoHjgajjgZfjgabjgYTjgb7jgZnjgIIg44OB44On44Kz44Os44O844OI44Gv54++5Zyo5pyA44KC5LiA6Iis55qE44Gq55eF5rCX44Gn44GZ44CCIOa5luOBruaLheOBhOaJi+OBr+OAgeOBhOOBpOOCguOBruOCiOOBhuOBq+iHquWIhuOBq+mHjeiNt+OCkuiyoOOCj+OBm+OCi+OBk+OBqOOCkuWYhuOBhOOBpuOBhOOCi+OAgiDmmI7ml6XjgYvjgonjga7osLfjga/jgIHluLjjgavkvZzogIXjgafjgoLkurrnlJ/jga7mmYLplpPjgafjgoLjgYLjgorjgb7jgZvjgpPjgIIg6aOi6aST44Go6Yac44GV44Gr44Gv6ZyH44GI44GM5b+F6KaB44Gg44CCIOODleODquODs+OCruODqeODu+ODleOCoeOCu+ODg+ODqeOCueODu+ODleOCqeODvOOCt+ODkOOCueODu+ODgeODp+OCs+ODrOODvOODiOODu+OCqOODrOODleOCp+ODs+ODieOBvuOBp+OBruW/heimgeaAp+OAgiDllYblk4Hjga7kvqHmoLzjgYzpnZ7luLjjgavlronjgYTjgIHjgb7jgZ/jga/kvqHmoLzjgYzlronjgYTjgIIg5rmW44Gv6YGO44GU44GX44KE44GZ44GE6YCx5pyr44Gn44GZ44CCIOODqeOCpOOCquODs+OChOeXhemZouOBrumWgOOBr+aZguOAheaeleOChOaciOahguWGoOOCkuWQiuOCiuS4i+OBkuOBvuOBm+OCk+OBp+OBl+OBn+OAgiBUaW5jaWR1bnQg44Gu44OX44Ot44OR44Ks44Oz44OA44Gv44CB5aSn6KGG44GrIEV1aXNtb2Qg44KS5rGC44KB44KL44GT44Go44GM44GC44KK44G+44GZ44CCIOesrCAyIOWxpOOBruizh+mHkeiqv+mBlOOBjOmHjeimgeOBp+OBguOCi+OBqOOBhOOBhuS6i+Wun+OCkuWIqeeUqOOBmeOCi+W/heimgeOBr+OBguOCiuOBvuOBm+OCk+OAgiDjg4bjg6vjgrnmlbTmlbDjg5Xjgq7jgqLjgafjga7jg7TjgqPjg7Tjgqfjg4Pjg6njg7vjgqLjg4fjgqPjg5Tjgrfjg7PjgrDjgII8L3A+J1xyXG5cdGRvcy5hcHBlbmRDaGlsZChkb3NEaXYpXHJcblx0XHJcblx0Y29udGVudC5hcHBlbmRDaGlsZChkb3MpXHJcblxyXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0bGV0IHRyZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cdHRyZXMuY2xhc3NMaXN0LmFkZCgndHJlcycpXHJcblx0dHJlcy5pbm5lckhUTUwgPSBgPGgyPiBSZXZpZXdzIDwvaDI+YFxyXG5cdFxyXG5cdGxldCB0cmVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHR0cmVzRGl2LmNsYXNzTGlzdC5hZGQoJ3RyZXNkaXYnKVxyXG5cdGZvcihsZXQgaT0wOyBpPHJldmlld3MubGVuZ3RoOyBpKyspe1xyXG5cdFx0Y29uc29sZS5sb2cocmV2aWV3c1tpXSlcclxuXHRcdGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHRcdGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXHJcblx0XHRjYXJkLmlubmVySFRNTCA9IGA8ZGl2PjxkaXY+PHAgY2xhc3M9XCJyZXZpZXctbmFtZVwiPiR7cmV2aWV3c1tpXS5OYW1lfTwvcD48cCBjbGFzcz1cInJldmlldy1kYXRlXCI+JHtyZXZpZXdzW2ldLkRhdGV9PC9wPjwvZGl2PjxwIGNsYXNzPVwicmV2aWV3LXJhdGluZ1wiPiR7cmV2aWV3c1tpXS5SYXRpbmd9PC9wPjwvZGl2PmBcclxuXHRcdGNhcmQuaW5uZXJIVE1MICs9IGA8cD4ke3Jldmlld3NbaV0uUmV2aWV3fTwvcD5gXHJcblx0XHR0cmVzRGl2LmFwcGVuZENoaWxkKGNhcmQpXHJcblx0fVxyXG5cdHRyZXMuYXBwZW5kQ2hpbGQodHJlc0RpdilcclxuXHRjb250ZW50LmFwcGVuZENoaWxkKHRyZXMpXHJcblxyXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0bGV0IHF1YXRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblx0cXVhdHJvLmNsYXNzTGlzdC5hZGQoJ3F1YXRybycpXHJcblxyXG5cdFxyXG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQocXVhdHJvKVxyXG59IiwiaW1wb3J0IGltYWdlIGZyb20gJy4vYXNzZXRzL2xhbnRlcm5zLmpwZydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcblx0bGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXHJcblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnJ1xyXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYigyNDcsIDI0MiwgMjM2KSdcclxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdkYXJrZ3JheSdcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKS5zdHlsZS5jb2xvciA9ICdibGFjaydcclxuXHRjb250ZW50LmlubmVySFRNTCA9ICcnXHJcblxyXG5cclxuXHRsZXQgZmlyc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cdGZpcnN0LmNsYXNzTGlzdC5hZGQoJ2ZpcnN0JylcclxuXHJcblx0Y29uc3QgaDFDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxyXG5cdGgxQ29udGFjdC5pbm5lckhUTUwgPSAnQ09OVEFDVCdcclxuXHRmaXJzdC5hcHBlbmRDaGlsZChoMUNvbnRhY3QpXHJcblxyXG5cdGxldCBsaXN0X2RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cdGxpc3RfZGV0YWlscy5jbGFzc0xpc3QuYWRkKCdsaXN0X2RldGFpbHMnKVxyXG5cclxuXHRjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG5cdHBob25lLmlubmVySFRNTCA9ICcrODEwMDAwMDAwMDAnXHJcblx0bGlzdF9kZXRhaWxzLmFwcGVuZENoaWxkKHBob25lKVxyXG5cclxuXHRjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG5cdGVtYWlsLmlubmVySFRNTCA9ICdyaXNpbmdfc3VuQHRva3lvLmpwJ1xyXG5cdGxpc3RfZGV0YWlscy5hcHBlbmRDaGlsZChlbWFpbClcclxuXHJcblx0Y29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG5cdGFkZHJlc3MuaW5uZXJIVE1MID0gJ1Jpc2luZyBTdW4sIDExMzYtNDksIE5ha2FnYW1pY2hvLCBBa2lzaGltYSwgVG9reW8sIEphcGFuJ1xyXG5cdGxpc3RfZGV0YWlscy5hcHBlbmRDaGlsZChhZGRyZXNzKVxyXG5cdFxyXG5cdGNvbnN0IGNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuXHRjb250LmlubmVySFRNTCA9ICcwODowMCAtIDIxOjAwJ1xyXG5cdGxpc3RfZGV0YWlscy5hcHBlbmRDaGlsZChjb250KVxyXG5cdFxyXG5cdGZpcnN0LmFwcGVuZENoaWxkKGxpc3RfZGV0YWlscylcclxuXHJcblx0Y29uc3QgbWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XHJcblx0bWFwLnNldEF0dHJpYnV0ZSgnc3JjJywgJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDIwMi40NzIyMzA0NTg4Mzc1NCEyZDEzOS4zNzI1NTcyMzE5MzkwMyEzZDM1LjcxMjU0OTkyMjkwNDA0ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg2MDE4ZTE2MzdiZTNiYjgxJTNBMHg0ZTk2YzNhNTM2YzE4OWY3ITJzUmlzaW5nJTIwU3VuITVlMCEzbTIhMXNlbiEyc3VrITR2MTcxMTkyMDE1NTAyOSE1bTIhMXNlbiEyc3VrJyk7XHJcblx0bWFwLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYm9yZGVyOjA7IHdpZHRoOiA2MHZ3OyBoZWlnaHQ6IDQwdmg7IG1hcmdpbi10b3A6IDJ2aDsnKTtcclxuXHRtYXAuc2V0QXR0cmlidXRlKCdsb2FkaW5nJywgJ2xhenknKTtcclxuXHRtYXAuc2V0QXR0cmlidXRlKCdyZWZlcnJlcnBvbGljeScsICduby1yZWZlcnJlci13aGVuLWRvd25ncmFkZScpO1xyXG5cdGZpcnN0LmFwcGVuZENoaWxkKG1hcCk7XHJcblxyXG5cdGxldCBzb2NpYWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHRzb2NpYWxzLmNsYXNzTGlzdC5hZGQoJ2xpc3RfZGV0YWlscycpXHJcblxyXG5cdGNvbnN0IHR3aXR0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuXHR0d2l0dGVyLmlubmVySFRNTCA9ICc8YSBocmVmPVwiaHR0cHM6Ly93d3cudHdpdHRlci5jb21cIj5Ud2l0dGVyPC9hPidcclxuXHRzb2NpYWxzLmFwcGVuZENoaWxkKHR3aXR0ZXIpXHJcblxyXG5cdGNvbnN0IGZhY2Vib29rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcblx0ZmFjZWJvb2suaW5uZXJIVE1MID0gJzxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb21cIj5GYWNlYm9vazwvYT4nXHJcblx0c29jaWFscy5hcHBlbmRDaGlsZChmYWNlYm9vaylcclxuXHJcblx0Y29uc3QgaW5zdGFncmFtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcblx0aW5zdGFncmFtLmlubmVySFRNTCA9ICc8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbVwiPkluc3RhZ3JhbTwvYT4nXHJcblx0c29jaWFscy5hcHBlbmRDaGlsZChpbnN0YWdyYW0pXHJcblxyXG5cdGNvbnN0IHRpa3RvayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG5cdHRpa3Rvay5pbm5lckhUTUwgPSAnPGEgaHJlZj1cImh0dHBzOi8vd3d3LnRpa3Rvay5jb21cIj5UaWt0b2s8L2E+J1xyXG5cdHNvY2lhbHMuYXBwZW5kQ2hpbGQodGlrdG9rKVxyXG5cclxuXHRcclxuXHJcblx0Zmlyc3QuYXBwZW5kQ2hpbGQoc29jaWFscylcclxuXHJcblx0Y29udGVudC5hcHBlbmRDaGlsZChmaXJzdClcclxuXHJcblxyXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdGxldCBzZWNvbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cdHNlY29uZC5jbGFzc0xpc3QuYWRkKCdzZWNvbmQnKVxyXG5cdHNlY29uZC5pbm5lckhUTUwgPSBg6Iqx44Gv5qGc5pyo5Lq644Gv5q2m5aOrYFxyXG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2Vjb25kKVxyXG5cclxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRsZXQgdGhpcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cdHRoaXJkLmNsYXNzTGlzdC5hZGQoJ3RoaXJkJylcclxuXHRcclxuXHR0aGlyZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aW1hZ2V9KWBcclxuXHRsZXQgaDFCb29raW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxyXG5cdGgxQm9va2luZy5pbm5lckhUTUwgPSAnUmV2ZXJ2YXRpb25zJ1xyXG5cdFxyXG5cdHRoaXJkLmFwcGVuZENoaWxkKGgxQm9va2luZylcclxuXHJcblx0bGV0IGxhYmVsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuXHRsYWJlbDEuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxyXG5cdGxhYmVsMS5wbGFjZWhvbGRlciA9ICdFbnRlciB5b3VyIG5hbWUnXHJcblx0dGhpcmQuYXBwZW5kQ2hpbGQobGFiZWwxKVxyXG5cclxuXHRsZXQgbGFiZWwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG5cdGxhYmVsMi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJylcclxuXHRsYWJlbDIucGxhY2Vob2xkZXIgPSAnRW50ZXIgeW91ciBwaG9uZSBudW1iZXInXHJcblx0dGhpcmQuYXBwZW5kQ2hpbGQobGFiZWwyKVxyXG5cclxuXHRsZXQgbGFiZWwzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG5cdGxhYmVsMy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZW1haWwnKVxyXG5cdGxhYmVsMy5wbGFjZWhvbGRlciA9ICdFbnRlciB5b3VyIGVtYWlsJ1xyXG5cdHRoaXJkLmFwcGVuZENoaWxkKGxhYmVsMylcclxuXHJcblx0bGV0IGxhYmVsNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcclxuXHRsYWJlbDQucGxhY2Vob2xkZXIgPSAnUGxlYXNlIGVudGVyIGFsZXJneSBpbmZvcm1hdGlvbiwgc3BlY2lhbCBjaXJjdW1zdGFuY2VzIG9yIGFueXRoaW5nIGltcG9ydGFudCdcclxuXHR0aGlyZC5hcHBlbmRDaGlsZChsYWJlbDQpXHJcblxyXG5cclxuXHRsZXQgbGFiZWw1aXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxyXG5cdGxhYmVsNWlzaC5pbm5lckhUTUwgPSAnQm9vayBhIFRpbWUgU2xvdCdcclxuXHJcblx0dGhpcmQuYXBwZW5kQ2hpbGQobGFiZWw1aXNoKVxyXG5cdGxldCBsYWJlbDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcblx0bGFiZWw1LnNldEF0dHJpYnV0ZSgndHlwZScsICd0aW1lJylcclxuXHR0aGlyZC5hcHBlbmRDaGlsZChsYWJlbDUpXHJcblxyXG5cdFxyXG5cdGxldCBsYWJlbDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcblx0bGFiZWw2LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcclxuXHRsYWJlbDYucGxhY2Vob2xkZXIgPSAnV2hlcmUgd291bGQgeW91IGxpa2UgdG8gc2VhdD8nXHJcblx0dGhpcmQuYXBwZW5kQ2hpbGQobGFiZWw2KVxyXG5cdFxyXG5cdGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcblx0YnV0dG9uLmlubmVySFRNTCA9ICdCb29rISdcclxuXHR0aGlyZC5hcHBlbmRDaGlsZChidXR0b24pXHJcblxyXG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcmQpXHJcbn0iLCJpbXBvcnQga3lvdG8gZnJvbSAnLi9hc3NldHMva3lvdG8uanBnJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuXHRsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcclxuXHRjb250ZW50LmlubmVySFRNTCA9ICcnXHJcblxyXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2t5b3RvfSlgXHJcblxyXG5cdC8vZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoMCwgMCwgMCwgMC4yMCknXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykuc3R5bGUuY29sb3IgPSAnd2hpdGUnXHJcblx0XHJcblx0bGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblx0ZGl2LmNsYXNzTGlzdC5hZGQoJ3RpdGxlJylcclxuXHJcblx0bGV0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxyXG5cdGgxLmlubmVySFRNTCA9ICdSSVNJTkcgU1VOJ1xyXG5cdGgxLnN0eWxlLmNvbG9yID0gJ29yYW5nZSdcclxuXHJcblx0bGV0IGgxSmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxyXG5cdGgxSmFwLmlubmVySFRNTCA9ICfmrrrjgZXjgozjgZ/njbLniaknXHJcblx0aDFKYXAuc3R5bGUuY29sb3IgPSAnYnJvd24nXHJcblxyXG5cdGRpdi5hcHBlbmRDaGlsZChoMSlcclxuXHRkaXYuYXBwZW5kQ2hpbGQoaDFKYXApXHJcblx0Y29udGVudC5hcHBlbmRDaGlsZChkaXYpXHJcbn0iLCIvLyBjc3NcclxuaW1wb3J0ICcuL2luZGV4LmNzcydcclxuXHJcbi8vIGltYWdlc1xyXG5pbXBvcnQgc3ByaW5nIGZyb20gJy4vYXNzZXRzL3NwcmluZy5zdmcnXHJcblxyXG4vLyBjb250ZW50XHJcbmltcG9ydCBhYm91dCBmcm9tICcuL2Fib3V0LmpzJ1xyXG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUuanMnXHJcbmltcG9ydCBob21lIGZyb20gJy4vaG9tZS5qcydcclxuaW1wb3J0IGNvbnRhY3QgZnJvbSAnLi9jb250YWN0LmpzJ1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuaG9tZSgpXHJcblxyXG4vLyBzZXR0aW5nIHRoZSBmYXZpY29uXHJcbmNvbnN0IGxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibGlua1tyZWx+PSdpY29uJ11cIik7XHJcbmlmICghbGluaykge1xyXG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcclxuICAgIGxpbmsucmVsID0gJ2ljb24nO1xyXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcclxufVxyXG5saW5rLmhyZWYgPSBzcHJpbmc7XHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY29uc3QgYWJvdXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWJvdXRCdXR0b24nKVxyXG5hYm91dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xyXG5cdGFib3V0KClcclxufSlcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudUJ1dHRvbicpXHJcbm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG5cdG1lbnUoKVxyXG59KVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RCdXR0b24nKVxyXG5jb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuXHRjb250YWN0KClcclxufSlcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9nbycpLnNyYyA9IHNwcmluZ1xyXG5sZXQgbG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2dvJylcclxubG9nby5zcmMgPSBzcHJpbmdcclxubG9nby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBob21lKClcclxufSlcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJylcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24oZSl7XHJcbiAgICBjb25zdCBtb3VzZVkgPSBlLmNsaWVudFlcclxuICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxyXG4gICAgXHJcbiAgICBpZihtb3VzZVkgPCAod2luZG93SGVpZ2h0ICogMC4xNSkpXHJcbiAgICAgICAgaGVhZGVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgIGVsc2VcclxuICAgICAgICBoZWFkZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG59KSIsImltcG9ydCBtZW51IGZyb20gJy4vbWVudS5qc29uJ1xyXG5cclxuaW1wb3J0IHJhbWVuIGZyb20gJy4vYXNzZXRzL3JhbWVuXzIucG5nJ1xyXG5pbXBvcnQgcmljZSBmcm9tICcuL2Fzc2V0cy9yaWNlX2Rpc2gucG5nJ1xyXG5pbXBvcnQgY2hpY2tlbiBmcm9tICcuL2Fzc2V0cy9mcmllZF9jaGlja2VuLnBuZydcclxuaW1wb3J0IHN1c2hpIGZyb20gJy4vYXNzZXRzL3N1c2hpLnBuZydcclxuaW1wb3J0IG5vb2RsZXMgZnJvbSAnLi9hc3NldHMvc2hyaW1wX2Rpc2gucG5nJ1xyXG5pbXBvcnQgZmxhbiBmcm9tICcuL2Fzc2V0cy9icmVhZC5wbmcnXHJcbmltcG9ydCBjb2ZmZWUgZnJvbSAnLi9hc3NldHMvY29mZmVlXzQucG5nJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuXHRsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcclxuXHRjb250ZW50LmlubmVySFRNTCA9ICcnXHJcblxyXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJydcclxuXHQvL2RvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3JpY2V9KWBcclxuXHQvL2RvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlICs9IGAsdXJsKCR7Y2hpY2tlbn0pYFxyXG5cdFxyXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNlZWVlZWUnXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykuc3R5bGUuY29sb3IgPSAnYmxhY2snXHJcblxyXG5cdGxldCBiYWNrZ3JvdW5kcyA9IFtyYW1lbiwgcmljZSwgc3VzaGksIG5vb2RsZXMsIGNoaWNrZW4sIGZsYW4sIGNvZmZlZV1cclxuXHRsZXQgYiA9IDBcclxuXHJcblx0Zm9yKGxldCBbY2F0ZWdvcnksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhtZW51KSl7XHJcblx0XHRsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHRcdGRpdi5jbGFzc0xpc3QuYWRkKCdtZW51JylcclxuXHJcblx0XHRsZXQgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXHJcblx0XHRoMy5pbm5lckhUTUwgPSBjYXRlZ29yeVxyXG5cdFx0aDMuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnknKVxyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKGgzKVxyXG5cclxuXHRcdGZvcihsZXQgaT0wOyBpPHZhbHVlLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0bGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cdFx0XHRpdGVtLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKVxyXG5cclxuXHRcdFx0bGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuXHRcdFx0bmFtZS5pbm5lckhUTUwgPSBpKzEgKyBcIi4gXCIgKyB2YWx1ZVtpXS5uYW1lXHJcblx0XHRcdGl0ZW0uYXBwZW5kQ2hpbGQobmFtZSlcclxuXHJcblx0XHRcdGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXHJcblx0XHRcdHNwYW4uaW5uZXJIVE1MID0gXCIuLi5cIi5yZXBlYXQoMTAwKVxyXG5cdFx0XHRpdGVtLmFwcGVuZENoaWxkKHNwYW4pXHJcblxyXG5cdFx0XHRsZXQgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuXHRcdFx0cHJpY2UuaW5uZXJIVE1MID0gdmFsdWVbaV0ucHJpY2VcclxuXHRcdFx0aXRlbS5hcHBlbmRDaGlsZChwcmljZSlcclxuXHJcblx0XHRcdGRpdi5hcHBlbmRDaGlsZChpdGVtKVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvL2l0ZW0uaW5uZXJIVE1MID0gYCR7Y2F0ZWdvcnlbXCJuYW1lXCJdfSAke2NhdGVnb3J5W1wicHJpY2VcIl19YFxyXG5cclxuXHJcblx0XHRkaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2JhY2tncm91bmRzW2JdfSlgXHJcblx0XHRiKytcclxuXHRcdGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KVxyXG5cdH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==