"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/profile/[tag]";
exports.ids = ["pages/api/profile/[tag]"];
exports.modules = {

/***/ "(api)/./src/pages/api/profile/[tag].js":
/*!****************************************!*\
  !*** ./src/pages/api/profile/[tag].js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res) {\n    const tag = req.query.tag;\n    const apiRes = await fetch(`${process.env.API_URL}/players/${encodeURIComponent(tag)}`, {\n        headers: {\n            \"Authorization\": `Bearer ${process.env.TOKEN}`\n        }\n    });\n    console.log(apiRes);\n    const data = await apiRes.json();\n    res.json({\n        tag,\n        data\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3Byb2ZpbGUvW3RhZ10uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLGVBQWVBLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsTUFBTUMsR0FBRyxHQUFHRixHQUFHLENBQUNHLEtBQUssQ0FBQ0QsR0FBRztJQUN6QixNQUFNRSxNQUFNLEdBQUcsTUFBTUMsS0FBSyxDQUFDLENBQUMsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLE9BQU8sQ0FBQyxTQUFTLEVBQUVDLGtCQUFrQixDQUFDUCxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFBQ1EsT0FBTyxFQUFDO1lBQy9GLGVBQWUsRUFBRSxDQUFDLE9BQU8sRUFBRUosT0FBTyxDQUFDQyxHQUFHLENBQUNJLEtBQUssQ0FBQyxDQUFDO1NBQy9DO0tBQUMsQ0FBQztJQUNIQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1QsTUFBTSxDQUFDO0lBQ25CLE1BQU1VLElBQUksR0FBRyxNQUFNVixNQUFNLENBQUNXLElBQUksRUFBRTtJQUNoQ2QsR0FBRyxDQUFDYyxJQUFJLENBQUM7UUFDUGIsR0FBRztRQUNIWSxJQUFJO0tBQ0wsQ0FBQyxDQUFDO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb3lhbGVhcHAvLi9zcmMvcGFnZXMvYXBpL3Byb2ZpbGUvW3RhZ10uanM/NmZjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHRhZyA9IHJlcS5xdWVyeS50YWdcbiAgY29uc3QgYXBpUmVzID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuQVBJX1VSTH0vcGxheWVycy8ke2VuY29kZVVSSUNvbXBvbmVudCh0YWcpfWAsIHtoZWFkZXJzOntcbiAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5UT0tFTn1gXG4gIH19KVxuICBjb25zb2xlLmxvZyhhcGlSZXMpXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGlSZXMuanNvbigpXG4gIHJlcy5qc29uKHtcbiAgICB0YWcsXG4gICAgZGF0YVxuICB9KTtcbn0iXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsInRhZyIsInF1ZXJ5IiwiYXBpUmVzIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiQVBJX1VSTCIsImVuY29kZVVSSUNvbXBvbmVudCIsImhlYWRlcnMiLCJUT0tFTiIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/profile/[tag].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/profile/[tag].js"));
module.exports = __webpack_exports__;

})();