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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/public";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nfunction isNumber(a) {\r\n    if (typeof a !== \"number\") {\r\n        throw new Error(a + \" must be a number!\");\r\n    }\r\n}\r\nexports.isNumber = isNumber;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvb3BlcmF0aW9ucy92YWxpZGF0aW9uLnRzP2NmMTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrQkFBeUIsQ0FBUztJQUM5QixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLE1BQU0sSUFBSSxLQUFLLENBQUksQ0FBQyx1QkFBb0IsQ0FBQyxDQUFDO0lBQzlDLENBQUM7QUFDTCxDQUFDO0FBSkQsNEJBSUMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBpc051bWJlcihhOiBudW1iZXIpIHtcbiAgICBpZiAodHlwZW9mIGEgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2F9IG11c3QgYmUgYSBudW1iZXIhYCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL29wZXJhdGlvbnMvdmFsaWRhdGlvbi50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar calculator_1 = __webpack_require__(2);\r\n__webpack_require__(5);\r\nvar calculator = new calculator_1.Calculator();\r\nvar addResult = calculator.calculate(\"add\", 2, 3);\r\nvar powResult = calculator.calculate(\"pow\", 2, 3);\r\nvar $main = document.querySelector(\"#main\");\r\nif ($main) {\r\n    $main.innerHTML = \"\\n        <p>2 + 3 = \" + addResult + \"<p>\\n        <p>2 + 3 = \" + powResult + \"<p>\\n    \";\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbl9icm93c2VyLnRzPzExYWYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQ0FBMEM7QUFDMUMsdUJBQXFCO0FBRXJCLElBQU0sVUFBVSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0FBRXBDLElBQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNwRCxJQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFFcEQsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUU5QyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ1IsS0FBSyxDQUFDLFNBQVMsR0FBRywwQkFDRCxTQUFTLGdDQUNULFNBQVMsY0FDekIsQ0FBQztBQUNOLENBQUMiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbGN1bGF0b3IgfSBmcm9tIFwiLi9jYWxjdWxhdG9yXCI7XG5pbXBvcnQgXCIuL21haW4uc2Nzc1wiO1xuXG5jb25zdCBjYWxjdWxhdG9yID0gbmV3IENhbGN1bGF0b3IoKTtcblxuY29uc3QgYWRkUmVzdWx0ID0gY2FsY3VsYXRvci5jYWxjdWxhdGUoXCJhZGRcIiwgMiwgMyk7XG5jb25zdCBwb3dSZXN1bHQgPSBjYWxjdWxhdG9yLmNhbGN1bGF0ZShcInBvd1wiLCAyLCAzKTtcblxuY29uc3QgJG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIik7XG5cbmlmICgkbWFpbikge1xuICAgICRtYWluLmlubmVySFRNTCA9IGBcbiAgICAgICAgPHA+MiArIDMgPSAke2FkZFJlc3VsdH08cD5cbiAgICAgICAgPHA+MiArIDMgPSAke3Bvd1Jlc3VsdH08cD5cbiAgICBgO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW5fYnJvd3Nlci50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar add_1 = __webpack_require__(3);\r\nvar pow_1 = __webpack_require__(4);\r\nvar Calculator = /** @class */ (function () {\r\n    function Calculator() {\r\n        this._operations = [\r\n            { name: \"add\", operation: add_1.add },\r\n            { name: \"pow\", operation: pow_1.pow }\r\n        ];\r\n    }\r\n    Calculator.prototype.calculate = function (operation, a, b) {\r\n        var opt = this._operations.filter(function (o) { return o.name === operation; })[0];\r\n        if (opt === undefined) {\r\n            throw new Error(\"The operation \" + operation + \" is not available!\");\r\n        }\r\n        else {\r\n            return opt.operation(a, b);\r\n        }\r\n    };\r\n    return Calculator;\r\n}());\r\nexports.Calculator = Calculator;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2FsY3VsYXRvci50cz9kMjk0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQXVDO0FBQ3ZDLG1DQUF1QztBQU92QztJQUVJO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRztZQUNmLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBRyxFQUFFO1lBQy9CLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBRyxFQUFFO1NBQ2xDLENBQUM7SUFDTixDQUFDO0lBQ00sOEJBQVMsR0FBaEIsVUFBaUIsU0FBaUIsRUFBRSxDQUFTLEVBQUUsQ0FBUztRQUNwRCxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUMsSUFBSyxRQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sSUFBSSxLQUFLLENBQUMsbUJBQWlCLFNBQVMsdUJBQW9CLENBQUMsQ0FBQztRQUNwRSxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0IsQ0FBQztJQUNMLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUM7QUFoQlksZ0NBQVUiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFkZCB9IGZyb20gXCIuL29wZXJhdGlvbnMvYWRkXCI7XG5pbXBvcnQgeyBwb3cgfSBmcm9tIFwiLi9vcGVyYXRpb25zL3Bvd1wiO1xuXG5pbnRlcmZhY2UgT3BlcmF0aW9uIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgb3BlcmF0aW9uKGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgQ2FsY3VsYXRvciB7XG4gICAgcHJpdmF0ZSBfb3BlcmF0aW9uczogT3BlcmF0aW9uW107XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9vcGVyYXRpb25zID0gW1xuICAgICAgICAgICAgeyBuYW1lOiBcImFkZFwiLCBvcGVyYXRpb246IGFkZCB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcInBvd1wiLCBvcGVyYXRpb246IHBvdyB9XG4gICAgICAgIF07XG4gICAgfVxuICAgIHB1YmxpYyBjYWxjdWxhdGUob3BlcmF0aW9uOiBzdHJpbmcsIGE6IG51bWJlciwgYjogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IG9wdCA9IHRoaXMuX29wZXJhdGlvbnMuZmlsdGVyKChvKSA9PiBvLm5hbWUgPT09IG9wZXJhdGlvbilbMF07XG4gICAgICAgIGlmIChvcHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgb3BlcmF0aW9uICR7b3BlcmF0aW9ufSBpcyBub3QgYXZhaWxhYmxlIWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG9wdC5vcGVyYXRpb24oYSwgYik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2FsY3VsYXRvci50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar validation_1 = __webpack_require__(0);\r\nfunction add(a, b) {\r\n    validation_1.isNumber(a);\r\n    validation_1.isNumber(b);\r\n    return a + b;\r\n}\r\nexports.add = add;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvb3BlcmF0aW9ucy9hZGQudHM/M2U0YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBDQUF3QztBQUV4QyxhQUFvQixDQUFTLEVBQUUsQ0FBUztJQUNwQyxxQkFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1oscUJBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNaLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2pCLENBQUM7QUFKRCxrQkFJQyIsImZpbGUiOiIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNOdW1iZXIgfSBmcm9tIFwiLi92YWxpZGF0aW9uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQoYTogbnVtYmVyLCBiOiBudW1iZXIpIHtcbiAgICBpc051bWJlcihhKTtcbiAgICBpc051bWJlcihiKTtcbiAgICByZXR1cm4gYSArIGI7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvb3BlcmF0aW9ucy9hZGQudHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar validation_1 = __webpack_require__(0);\r\nfunction pow(base, exponent) {\r\n    validation_1.isNumber(base);\r\n    validation_1.isNumber(exponent);\r\n    var result = base;\r\n    for (var i = 1; i < exponent; i++) {\r\n        result = result * base;\r\n    }\r\n    return result;\r\n}\r\nexports.pow = pow;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvb3BlcmF0aW9ucy9wb3cudHM/YjhlZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBDQUF3QztBQUV4QyxhQUFvQixJQUFZLEVBQUUsUUFBZ0I7SUFDOUMscUJBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNmLHFCQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ2xCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDaEMsTUFBTSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQVJELGtCQVFDIiwiZmlsZSI6IjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc051bWJlciB9IGZyb20gXCIuL3ZhbGlkYXRpb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHBvdyhiYXNlOiBudW1iZXIsIGV4cG9uZW50OiBudW1iZXIpIHtcbiAgICBpc051bWJlcihiYXNlKTtcbiAgICBpc051bWJlcihleHBvbmVudCk7XG4gICAgbGV0IHJlc3VsdCA9IGJhc2U7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBleHBvbmVudDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdCAqIGJhc2U7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvb3BlcmF0aW9ucy9wb3cudHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5zY3NzP2RiZGMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi5zY3NzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ })
/******/ ]);