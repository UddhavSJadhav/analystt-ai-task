/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _analysst_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @analysst/ui */ \"../ui/index.js\");\n/* harmony import */ var _analysst_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_analysst_ui__WEBPACK_IMPORTED_MODULE_0__);\n\nvar app = (0,_analysst_ui__WEBPACK_IMPORTED_MODULE_0__.createUiTemplate)();\napp(document.getElementById(\"app\"));\n\n//# sourceURL=webpack://web-app/./src/index.js?");

/***/ }),

/***/ "../ui/index.js":
/*!**********************!*\
  !*** ../ui/index.js ***!
  \**********************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ../../node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\packages\\\\ui\\\\index.js: Support for the experimental syntax 'jsx' isn't currently enabled (25:17):\\n\\n\\u001b[0m \\u001b[90m 23 |\\u001b[39m \\u001b[36mexport\\u001b[39m \\u001b[36mfunction\\u001b[39m createUiTemplate() {\\u001b[0m\\n\\u001b[0m \\u001b[90m 24 |\\u001b[39m   \\u001b[90m// const vnode = h(\\\"div\\\", \\\"Hello\\\");\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 25 |\\u001b[39m   \\u001b[36mconst\\u001b[39m vnode \\u001b[33m=\\u001b[39m \\u001b[33m<\\u001b[39m\\u001b[33mh1\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33mHello\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mh1\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    |\\u001b[39m                 \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 26 |\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 27 |\\u001b[39m   \\u001b[36mreturn\\u001b[39m (target) \\u001b[33m=>\\u001b[39m patch(target\\u001b[33m,\\u001b[39m vnode)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 28 |\\u001b[39m }\\u001b[0m\\n\\nAdd @babel/preset-react (https://github.com/babel/babel/tree/main/packages/babel-preset-react) to the 'presets' section of your Babel config to enable transformation.\\nIf you want to leave it as-is, add @babel/plugin-syntax-jsx (https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-jsx) to the 'plugins' section to enable parsing.\\n    at constructor (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:356:19)\\n    at Parser.raise (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3223:19)\\n    at Parser.expectOnePlugin (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3269:18)\\n    at Parser.parseExprAtom (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11223:18)\\n    at Parser.parseExprSubscripts (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10862:23)\\n    at Parser.parseUpdate (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10845:21)\\n    at Parser.parseMaybeUnary (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10821:23)\\n    at Parser.parseMaybeUnaryOrPrivate (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10659:61)\\n    at Parser.parseExprOps (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10664:23)\\n    at Parser.parseMaybeConditional (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10641:23)\\n    at Parser.parseMaybeAssign (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10602:21)\\n    at C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10572:39\\n    at Parser.allowInAnd (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12284:16)\\n    at Parser.parseMaybeAssignAllowIn (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10572:17)\\n    at Parser.parseVar (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13264:91)\\n    at Parser.parseVarStatement (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13105:10)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12688:23)\\n    at Parser.parseStatementLike (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12593:17)\\n    at Parser.parseStatementListItem (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12573:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13194:61)\\n    at Parser.parseBlockBody (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13187:10)\\n    at Parser.parseBlock (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13175:10)\\n    at Parser.parseFunctionBody (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11940:24)\\n    at Parser.parseFunctionBodyAndFinish (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11926:10)\\n    at C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13323:12\\n    at Parser.withSmartMixTopicForbiddingContext (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12266:14)\\n    at Parser.parseFunction (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13322:10)\\n    at Parser.parseFunctionStatement (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12989:17)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12619:21)\\n    at Parser.parseStatementLike (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12593:17)\\n    at Parser.parseStatementListItem (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12573:17)\\n    at Parser.parseExportDeclaration (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13840:17)\\n    at Parser.maybeParseExportDeclaration (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13795:31)\\n    at Parser.parseExport (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13718:29)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12720:27)\\n    at Parser.parseStatementLike (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12593:17)\\n    at Parser.parseModuleItem (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12570:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13194:36)\\n    at Parser.parseBlockBody (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13187:10)\\n    at Parser.parseProgram (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12469:10)\\n    at Parser.parseTopLevel (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12459:25)\\n    at Parser.parse (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:14381:10)\\n    at parse (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:14422:38)\\n    at parser (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\parser\\\\index.js:41:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\normalize-file.js:64:37)\\n    at normalizeFile.next (<anonymous>)\\n    at run (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\index.js:21:50)\\n    at run.next (<anonymous>)\\n    at transform (C:\\\\Users\\\\jadha\\\\Desktop\\\\Tasks\\\\Analystt.ai\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transform.js:22:33)\");\n\n//# sourceURL=webpack://web-app/../ui/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;