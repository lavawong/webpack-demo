"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["src_c_js"],{

/***/ "./src/c.js":
/*!******************!*\
  !*** ./src/c.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sub": () => (/* binding */ sub)
/* harmony export */ });
/* harmony import */ var Src_d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Src/d */ "./src/d.js");

Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./b.js */ "./src/b.js")).then(function (m) {
  return m.add(200, 100);
});
function sub(a, b) {
  return a - b + (0,Src_d__WEBPACK_IMPORTED_MODULE_0__.mul)(100, 50);
}

/***/ }),

/***/ "./src/d.js":
/*!******************!*\
  !*** ./src/d.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mul": () => (/* binding */ mul)
/* harmony export */ });
function mul(a, b) {
  var d = 10000;
  return a * b + d;
}

/***/ })

}]);
//# sourceMappingURL=src_c_js.593c4348.js.map