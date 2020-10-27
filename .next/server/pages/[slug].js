module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[slug].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/[slug].js":
/*!*************************!*\
  !*** ./pages/[slug].js ***!
  \*************************/
/*! exports provided: getStaticProps, getStaticPaths, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/giaconi/code/giaconi/blog-aerdevacanta/pages/[slug].js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// file: pages/blog/[slug].js\n\n\nfunction BlogPostPage(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: props.blog.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      dangerouslySetInnerHTML: {\n        __html: props.blog.content\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n} // pass props to BlogPostPage component\n\n\nasync function getStaticProps(context) {\n  const fs = __webpack_require__(/*! fs */ \"fs\");\n\n  const html = __webpack_require__(/*! remark-html */ \"remark-html\");\n\n  const highlight = __webpack_require__(/*! remark-highlight.js */ \"remark-highlight.js\");\n\n  const unified = __webpack_require__(/*! unified */ \"unified\");\n\n  const markdown = __webpack_require__(/*! remark-parse */ \"remark-parse\");\n\n  const matter = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n\n  const slug = context.params.slug; // get slug from params\n\n  const path = `${process.cwd()}/contents/${slug}.md`; // read file content and store into rawContent variable\n\n  const rawContent = fs.readFileSync(path, {\n    encoding: \"utf-8\"\n  });\n  const {\n    data,\n    content\n  } = matter(rawContent); // pass rawContent to gray-matter to get data and content\n\n  const result = await unified().use(markdown).use(highlight) // highlight code block\n  .use(html).process(content); // pass content to process\n\n  return {\n    props: {\n      blog: _objectSpread(_objectSpread({}, data), {}, {\n        content: result.toString()\n      })\n    }\n  };\n} // generate HTML paths at build time\n\nasync function getStaticPaths(context) {\n  const fs = __webpack_require__(/*! fs */ \"fs\");\n\n  const path = `${process.cwd()}/contents`;\n  const files = fs.readdirSync(path, \"utf-8\");\n  const markdownFileNames = files.filter(fn => fn.endsWith(\".md\")).map(fn => fn.replace(\".md\", \"\"));\n  return {\n    paths: markdownFileNames.map(fileName => {\n      return {\n        params: {\n          slug: fileName\n        }\n      };\n    }),\n    fallback: false\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogPostPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9bc2x1Z10uanM/NDYyYiJdLCJuYW1lcyI6WyJCbG9nUG9zdFBhZ2UiLCJwcm9wcyIsImJsb2ciLCJ0aXRsZSIsIl9faHRtbCIsImNvbnRlbnQiLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJmcyIsInJlcXVpcmUiLCJodG1sIiwiaGlnaGxpZ2h0IiwidW5pZmllZCIsIm1hcmtkb3duIiwibWF0dGVyIiwic2x1ZyIsInBhcmFtcyIsInBhdGgiLCJwcm9jZXNzIiwiY3dkIiwicmF3Q29udGVudCIsInJlYWRGaWxlU3luYyIsImVuY29kaW5nIiwiZGF0YSIsInJlc3VsdCIsInVzZSIsInRvU3RyaW5nIiwiZ2V0U3RhdGljUGF0aHMiLCJmaWxlcyIsInJlYWRkaXJTeW5jIiwibWFya2Rvd25GaWxlTmFtZXMiLCJmaWx0ZXIiLCJmbiIsImVuZHNXaXRoIiwibWFwIiwicmVwbGFjZSIsInBhdGhzIiwiZmlsZU5hbWUiLCJmYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFDM0Isc0JBQ0U7QUFBQSw0QkFDUTtBQUFBLGdCQUFLQSxLQUFLLENBQUNDLElBQU4sQ0FBV0M7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURSLGVBRUU7QUFBUyw2QkFBdUIsRUFBRTtBQUFFQyxjQUFNLEVBQUVILEtBQUssQ0FBQ0MsSUFBTixDQUFXRztBQUFyQjtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFNRCxDLENBRUQ7OztBQUNPLGVBQWVDLGNBQWYsQ0FBOEJDLE9BQTlCLEVBQXVDO0FBQzVDLFFBQU1DLEVBQUUsR0FBR0MsbUJBQU8sQ0FBQyxjQUFELENBQWxCOztBQUNBLFFBQU1DLElBQUksR0FBR0QsbUJBQU8sQ0FBQyxnQ0FBRCxDQUFwQjs7QUFDQSxRQUFNRSxTQUFTLEdBQUdGLG1CQUFPLENBQUMsZ0RBQUQsQ0FBekI7O0FBQ0EsUUFBTUcsT0FBTyxHQUFHSCxtQkFBTyxDQUFDLHdCQUFELENBQXZCOztBQUNBLFFBQU1JLFFBQVEsR0FBR0osbUJBQU8sQ0FBQyxrQ0FBRCxDQUF4Qjs7QUFDQSxRQUFNSyxNQUFNLEdBQUdMLG1CQUFPLENBQUMsZ0NBQUQsQ0FBdEI7O0FBRUEsUUFBTU0sSUFBSSxHQUFHUixPQUFPLENBQUNTLE1BQVIsQ0FBZUQsSUFBNUIsQ0FSNEMsQ0FRVjs7QUFDbEMsUUFBTUUsSUFBSSxHQUFJLEdBQUVDLE9BQU8sQ0FBQ0MsR0FBUixFQUFjLGFBQVlKLElBQUssS0FBL0MsQ0FUNEMsQ0FXMUM7O0FBQ0EsUUFBTUssVUFBVSxHQUFHWixFQUFFLENBQUNhLFlBQUgsQ0FBZ0JKLElBQWhCLEVBQXNCO0FBQ3pDSyxZQUFRLEVBQUU7QUFEK0IsR0FBdEIsQ0FBbkI7QUFJRixRQUFNO0FBQUVDLFFBQUY7QUFBUWxCO0FBQVIsTUFBb0JTLE1BQU0sQ0FBQ00sVUFBRCxDQUFoQyxDQWhCNEMsQ0FnQkU7O0FBRTlDLFFBQU1JLE1BQU0sR0FBRyxNQUFNWixPQUFPLEdBQ3pCYSxHQURrQixDQUNkWixRQURjLEVBRWxCWSxHQUZrQixDQUVkZCxTQUZjLEVBRUg7QUFGRyxHQUdsQmMsR0FIa0IsQ0FHZGYsSUFIYyxFQUlsQlEsT0FKa0IsQ0FJVmIsT0FKVSxDQUFyQixDQWxCNEMsQ0FzQnZCOztBQUVyQixTQUFPO0FBQ0xKLFNBQUssRUFBRTtBQUNDQyxVQUFJLGtDQUNHcUIsSUFESDtBQUVObEIsZUFBTyxFQUFFbUIsTUFBTSxDQUFDRSxRQUFQO0FBRkg7QUFETDtBQURGLEdBQVA7QUFRRCxDLENBRUQ7O0FBQ08sZUFBZUMsY0FBZixDQUE4QnBCLE9BQTlCLEVBQXVDO0FBQzVDLFFBQU1DLEVBQUUsR0FBR0MsbUJBQU8sQ0FBQyxjQUFELENBQWxCOztBQUVFLFFBQU1RLElBQUksR0FBSSxHQUFFQyxPQUFPLENBQUNDLEdBQVIsRUFBYyxXQUE5QjtBQUNGLFFBQU1TLEtBQUssR0FBR3BCLEVBQUUsQ0FBQ3FCLFdBQUgsQ0FBZVosSUFBZixFQUFxQixPQUFyQixDQUFkO0FBRUUsUUFBTWEsaUJBQWlCLEdBQUdGLEtBQUssQ0FDOUJHLE1BRHlCLENBQ2pCQyxFQUFELElBQVFBLEVBQUUsQ0FBQ0MsUUFBSCxDQUFZLEtBQVosQ0FEVSxFQUV6QkMsR0FGeUIsQ0FFcEJGLEVBQUQsSUFBUUEsRUFBRSxDQUFDRyxPQUFILENBQVcsS0FBWCxFQUFrQixFQUFsQixDQUZhLENBQTFCO0FBSUYsU0FBTztBQUNMQyxTQUFLLEVBQUVOLGlCQUFpQixDQUFDSSxHQUFsQixDQUF1QkcsUUFBRCxJQUFjO0FBQ3pDLGFBQU87QUFDTHJCLGNBQU0sRUFBRTtBQUNORCxjQUFJLEVBQUVzQjtBQURBO0FBREgsT0FBUDtBQUtELEtBTk0sQ0FERjtBQVFMQyxZQUFRLEVBQUU7QUFSTCxHQUFQO0FBVUQ7QUFFY3RDLDJFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvW3NsdWddLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZmlsZTogcGFnZXMvYmxvZy9bc2x1Z10uanNcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gQmxvZ1Bvc3RQYWdlKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT57cHJvcHMuYmxvZy50aXRsZX08L2gxPlxuICAgICAgPHNlY3Rpb24gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwcm9wcy5ibG9nLmNvbnRlbnQgfX0+PC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG4vLyBwYXNzIHByb3BzIHRvIEJsb2dQb3N0UGFnZSBjb21wb25lbnRcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IGZzID0gcmVxdWlyZShcImZzXCIpO1xuICBjb25zdCBodG1sID0gcmVxdWlyZShcInJlbWFyay1odG1sXCIpO1xuICBjb25zdCBoaWdobGlnaHQgPSByZXF1aXJlKFwicmVtYXJrLWhpZ2hsaWdodC5qc1wiKTtcbiAgY29uc3QgdW5pZmllZCA9IHJlcXVpcmUoXCJ1bmlmaWVkXCIpO1xuICBjb25zdCBtYXJrZG93biA9IHJlcXVpcmUoXCJyZW1hcmstcGFyc2VcIik7XG4gIGNvbnN0IG1hdHRlciA9IHJlcXVpcmUoXCJncmF5LW1hdHRlclwiKTtcblxuICBjb25zdCBzbHVnID0gY29udGV4dC5wYXJhbXMuc2x1ZzsgLy8gZ2V0IHNsdWcgZnJvbSBwYXJhbXNcbiAgY29uc3QgcGF0aCA9IGAke3Byb2Nlc3MuY3dkKCl9L2NvbnRlbnRzLyR7c2x1Z30ubWRgO1xuXG4gICAgLy8gcmVhZCBmaWxlIGNvbnRlbnQgYW5kIHN0b3JlIGludG8gcmF3Q29udGVudCB2YXJpYWJsZVxuICAgIGNvbnN0IHJhd0NvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMocGF0aCwge1xuICAgIGVuY29kaW5nOiBcInV0Zi04XCIsXG4gIH0pO1xuXG4gIGNvbnN0IHsgZGF0YSwgY29udGVudCB9ID0gbWF0dGVyKHJhd0NvbnRlbnQpOyAvLyBwYXNzIHJhd0NvbnRlbnQgdG8gZ3JheS1tYXR0ZXIgdG8gZ2V0IGRhdGEgYW5kIGNvbnRlbnRcblxuICBjb25zdCByZXN1bHQgPSBhd2FpdCB1bmlmaWVkKClcbiAgICAudXNlKG1hcmtkb3duKVxuICAgIC51c2UoaGlnaGxpZ2h0KSAvLyBoaWdobGlnaHQgY29kZSBibG9ja1xuICAgIC51c2UoaHRtbClcbiAgICAucHJvY2Vzcyhjb250ZW50KTsgLy8gcGFzcyBjb250ZW50IHRvIHByb2Nlc3NcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICAgICAgICBibG9nOiB7XG4gICAgICAgICAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgICBjb250ZW50OiByZXN1bHQudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIH1cbiAgICB9LFxuICB9O1xufVxuXG4vLyBnZW5lcmF0ZSBIVE1MIHBhdGhzIGF0IGJ1aWxkIHRpbWVcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocyhjb250ZXh0KSB7XG4gIGNvbnN0IGZzID0gcmVxdWlyZShcImZzXCIpO1xuXG4gICAgY29uc3QgcGF0aCA9IGAke3Byb2Nlc3MuY3dkKCl9L2NvbnRlbnRzYDtcbiAgY29uc3QgZmlsZXMgPSBmcy5yZWFkZGlyU3luYyhwYXRoLCBcInV0Zi04XCIpO1xuXG4gICAgY29uc3QgbWFya2Rvd25GaWxlTmFtZXMgPSBmaWxlc1xuICAgIC5maWx0ZXIoKGZuKSA9PiBmbi5lbmRzV2l0aChcIi5tZFwiKSlcbiAgICAubWFwKChmbikgPT4gZm4ucmVwbGFjZShcIi5tZFwiLCBcIlwiKSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczogbWFya2Rvd25GaWxlTmFtZXMubWFwKChmaWxlTmFtZSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgc2x1ZzogZmlsZU5hbWUsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0pLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvZ1Bvc3RQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[slug].js\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiP2E0MGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fs\n");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"gray-matter\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmF5LW1hdHRlclwiP2Y4YmMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JheS1tYXR0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmF5LW1hdHRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///gray-matter\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "remark-highlight.js":
/*!**************************************!*\
  !*** external "remark-highlight.js" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"remark-highlight.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZW1hcmstaGlnaGxpZ2h0LmpzXCI/M2E5MCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZW1hcmstaGlnaGxpZ2h0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVtYXJrLWhpZ2hsaWdodC5qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///remark-highlight.js\n");

/***/ }),

/***/ "remark-html":
/*!******************************!*\
  !*** external "remark-html" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"remark-html\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZW1hcmstaHRtbFwiPzdkZTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVtYXJrLWh0bWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZW1hcmstaHRtbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///remark-html\n");

/***/ }),

/***/ "remark-parse":
/*!*******************************!*\
  !*** external "remark-parse" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"remark-parse\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZW1hcmstcGFyc2VcIj8yOWIwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlbWFyay1wYXJzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlbWFyay1wYXJzZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///remark-parse\n");

/***/ }),

/***/ "unified":
/*!**************************!*\
  !*** external "unified" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"unified\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1bmlmaWVkXCI/OGViMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ1bmlmaWVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidW5pZmllZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///unified\n");

/***/ })

/******/ });