module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/blog/[slug].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/blog/[slug].js":
/*!******************************!*\
  !*** ./pages/blog/[slug].js ***!
  \******************************/
/*! exports provided: getStaticProps, getStaticPaths, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/giaconi/code/giaconi/blog-aerdevacanta/pages/blog/[slug].js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// file: pages/blog/[slug].js\n\n\nfunction BlogPostPage(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: props.blog.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      dangerouslySetInnerHTML: {\n        __html: props.blog.content\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n} // pass props to BlogPostPage component\n\n\nasync function getStaticProps(context) {\n  const fs = __webpack_require__(/*! fs */ \"fs\");\n\n  const html = __webpack_require__(/*! remark-html */ \"remark-html\");\n\n  const highlight = __webpack_require__(/*! remark-highlight.js */ \"remark-highlight.js\");\n\n  const unified = __webpack_require__(/*! unified */ \"unified\");\n\n  const markdown = __webpack_require__(/*! remark-parse */ \"remark-parse\");\n\n  const matter = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n\n  const slug = context.params.slug; // get slug from params\n\n  const path = `${process.cwd()}/contents/${slug}.md`; // read file content and store into rawContent variable\n\n  const rawContent = fs.readFileSync(path, {\n    encoding: \"utf-8\"\n  });\n  const {\n    data,\n    content\n  } = matter(rawContent); // pass rawContent to gray-matter to get data and content\n\n  const result = await unified().use(markdown).use(highlight) // highlight code block\n  .use(html).process(content); // pass content to process\n\n  return {\n    props: {\n      blog: _objectSpread(_objectSpread({}, data), {}, {\n        content: result.toString()\n      })\n    }\n  };\n} // generate HTML paths at build time\n\nasync function getStaticPaths(context) {\n  const fs = __webpack_require__(/*! fs */ \"fs\");\n\n  const path = `${process.cwd()}/contents`;\n  const files = fs.readdirSync(path, \"utf-8\");\n  const markdownFileNames = files.filter(fn => fn.endsWith(\".md\")).map(fn => fn.replace(\".md\", \"\"));\n  return {\n    paths: markdownFileNames.map(fileName => {\n      return {\n        params: {\n          slug: fileName\n        }\n      };\n    }),\n    fallback: false\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogPostPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nL1tzbHVnXS5qcz8yOTM0Il0sIm5hbWVzIjpbIkJsb2dQb3N0UGFnZSIsInByb3BzIiwiYmxvZyIsInRpdGxlIiwiX19odG1sIiwiY29udGVudCIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsImZzIiwicmVxdWlyZSIsImh0bWwiLCJoaWdobGlnaHQiLCJ1bmlmaWVkIiwibWFya2Rvd24iLCJtYXR0ZXIiLCJzbHVnIiwicGFyYW1zIiwicGF0aCIsInByb2Nlc3MiLCJjd2QiLCJyYXdDb250ZW50IiwicmVhZEZpbGVTeW5jIiwiZW5jb2RpbmciLCJkYXRhIiwicmVzdWx0IiwidXNlIiwidG9TdHJpbmciLCJnZXRTdGF0aWNQYXRocyIsImZpbGVzIiwicmVhZGRpclN5bmMiLCJtYXJrZG93bkZpbGVOYW1lcyIsImZpbHRlciIsImZuIiwiZW5kc1dpdGgiLCJtYXAiLCJyZXBsYWNlIiwicGF0aHMiLCJmaWxlTmFtZSIsImZhbGxiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxZQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUMzQixzQkFDRTtBQUFBLDRCQUNRO0FBQUEsZ0JBQUtBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRFIsZUFFRTtBQUFTLDZCQUF1QixFQUFFO0FBQUVDLGNBQU0sRUFBRUgsS0FBSyxDQUFDQyxJQUFOLENBQVdHO0FBQXJCO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU1ELEMsQ0FFRDs7O0FBQ08sZUFBZUMsY0FBZixDQUE4QkMsT0FBOUIsRUFBdUM7QUFDNUMsUUFBTUMsRUFBRSxHQUFHQyxtQkFBTyxDQUFDLGNBQUQsQ0FBbEI7O0FBQ0EsUUFBTUMsSUFBSSxHQUFHRCxtQkFBTyxDQUFDLGdDQUFELENBQXBCOztBQUNBLFFBQU1FLFNBQVMsR0FBR0YsbUJBQU8sQ0FBQyxnREFBRCxDQUF6Qjs7QUFDQSxRQUFNRyxPQUFPLEdBQUdILG1CQUFPLENBQUMsd0JBQUQsQ0FBdkI7O0FBQ0EsUUFBTUksUUFBUSxHQUFHSixtQkFBTyxDQUFDLGtDQUFELENBQXhCOztBQUNBLFFBQU1LLE1BQU0sR0FBR0wsbUJBQU8sQ0FBQyxnQ0FBRCxDQUF0Qjs7QUFFQSxRQUFNTSxJQUFJLEdBQUdSLE9BQU8sQ0FBQ1MsTUFBUixDQUFlRCxJQUE1QixDQVI0QyxDQVFWOztBQUNsQyxRQUFNRSxJQUFJLEdBQUksR0FBRUMsT0FBTyxDQUFDQyxHQUFSLEVBQWMsYUFBWUosSUFBSyxLQUEvQyxDQVQ0QyxDQVcxQzs7QUFDQSxRQUFNSyxVQUFVLEdBQUdaLEVBQUUsQ0FBQ2EsWUFBSCxDQUFnQkosSUFBaEIsRUFBc0I7QUFDekNLLFlBQVEsRUFBRTtBQUQrQixHQUF0QixDQUFuQjtBQUlGLFFBQU07QUFBRUMsUUFBRjtBQUFRbEI7QUFBUixNQUFvQlMsTUFBTSxDQUFDTSxVQUFELENBQWhDLENBaEI0QyxDQWdCRTs7QUFFOUMsUUFBTUksTUFBTSxHQUFHLE1BQU1aLE9BQU8sR0FDekJhLEdBRGtCLENBQ2RaLFFBRGMsRUFFbEJZLEdBRmtCLENBRWRkLFNBRmMsRUFFSDtBQUZHLEdBR2xCYyxHQUhrQixDQUdkZixJQUhjLEVBSWxCUSxPQUprQixDQUlWYixPQUpVLENBQXJCLENBbEI0QyxDQXNCdkI7O0FBRXJCLFNBQU87QUFDTEosU0FBSyxFQUFFO0FBQ0NDLFVBQUksa0NBQ0dxQixJQURIO0FBRU5sQixlQUFPLEVBQUVtQixNQUFNLENBQUNFLFFBQVA7QUFGSDtBQURMO0FBREYsR0FBUDtBQVFELEMsQ0FFRDs7QUFDTyxlQUFlQyxjQUFmLENBQThCcEIsT0FBOUIsRUFBdUM7QUFDNUMsUUFBTUMsRUFBRSxHQUFHQyxtQkFBTyxDQUFDLGNBQUQsQ0FBbEI7O0FBRUUsUUFBTVEsSUFBSSxHQUFJLEdBQUVDLE9BQU8sQ0FBQ0MsR0FBUixFQUFjLFdBQTlCO0FBQ0YsUUFBTVMsS0FBSyxHQUFHcEIsRUFBRSxDQUFDcUIsV0FBSCxDQUFlWixJQUFmLEVBQXFCLE9BQXJCLENBQWQ7QUFFRSxRQUFNYSxpQkFBaUIsR0FBR0YsS0FBSyxDQUM5QkcsTUFEeUIsQ0FDakJDLEVBQUQsSUFBUUEsRUFBRSxDQUFDQyxRQUFILENBQVksS0FBWixDQURVLEVBRXpCQyxHQUZ5QixDQUVwQkYsRUFBRCxJQUFRQSxFQUFFLENBQUNHLE9BQUgsQ0FBVyxLQUFYLEVBQWtCLEVBQWxCLENBRmEsQ0FBMUI7QUFJRixTQUFPO0FBQ0xDLFNBQUssRUFBRU4saUJBQWlCLENBQUNJLEdBQWxCLENBQXVCRyxRQUFELElBQWM7QUFDekMsYUFBTztBQUNMckIsY0FBTSxFQUFFO0FBQ05ELGNBQUksRUFBRXNCO0FBREE7QUFESCxPQUFQO0FBS0QsS0FOTSxDQURGO0FBUUxDLFlBQVEsRUFBRTtBQVJMLEdBQVA7QUFVRDtBQUVjdEMsMkVBQWYiLCJmaWxlIjoiLi9wYWdlcy9ibG9nL1tzbHVnXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGZpbGU6IHBhZ2VzL2Jsb2cvW3NsdWddLmpzXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIEJsb2dQb3N0UGFnZShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+e3Byb3BzLmJsb2cudGl0bGV9PC9oMT5cbiAgICAgIDxzZWN0aW9uIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcHJvcHMuYmxvZy5jb250ZW50IH19Pjwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuLy8gcGFzcyBwcm9wcyB0byBCbG9nUG9zdFBhZ2UgY29tcG9uZW50XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICBjb25zdCBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcbiAgY29uc3QgaHRtbCA9IHJlcXVpcmUoXCJyZW1hcmstaHRtbFwiKTtcbiAgY29uc3QgaGlnaGxpZ2h0ID0gcmVxdWlyZShcInJlbWFyay1oaWdobGlnaHQuanNcIik7XG4gIGNvbnN0IHVuaWZpZWQgPSByZXF1aXJlKFwidW5pZmllZFwiKTtcbiAgY29uc3QgbWFya2Rvd24gPSByZXF1aXJlKFwicmVtYXJrLXBhcnNlXCIpO1xuICBjb25zdCBtYXR0ZXIgPSByZXF1aXJlKFwiZ3JheS1tYXR0ZXJcIik7XG5cbiAgY29uc3Qgc2x1ZyA9IGNvbnRleHQucGFyYW1zLnNsdWc7IC8vIGdldCBzbHVnIGZyb20gcGFyYW1zXG4gIGNvbnN0IHBhdGggPSBgJHtwcm9jZXNzLmN3ZCgpfS9jb250ZW50cy8ke3NsdWd9Lm1kYDtcblxuICAgIC8vIHJlYWQgZmlsZSBjb250ZW50IGFuZCBzdG9yZSBpbnRvIHJhd0NvbnRlbnQgdmFyaWFibGVcbiAgICBjb25zdCByYXdDb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKHBhdGgsIHtcbiAgICBlbmNvZGluZzogXCJ1dGYtOFwiLFxuICB9KTtcblxuICBjb25zdCB7IGRhdGEsIGNvbnRlbnQgfSA9IG1hdHRlcihyYXdDb250ZW50KTsgLy8gcGFzcyByYXdDb250ZW50IHRvIGdyYXktbWF0dGVyIHRvIGdldCBkYXRhIGFuZCBjb250ZW50XG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdW5pZmllZCgpXG4gICAgLnVzZShtYXJrZG93bilcbiAgICAudXNlKGhpZ2hsaWdodCkgLy8gaGlnaGxpZ2h0IGNvZGUgYmxvY2tcbiAgICAudXNlKGh0bWwpXG4gICAgLnByb2Nlc3MoY29udGVudCk7IC8vIHBhc3MgY29udGVudCB0byBwcm9jZXNzXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgICAgICAgYmxvZzoge1xuICAgICAgICAgICAgICAgIC4uLmRhdGEsXG4gICAgICAgICAgY29udGVudDogcmVzdWx0LnRvU3RyaW5nKCksXG4gICAgICAgICAgICB9XG4gICAgfSxcbiAgfTtcbn1cblxuLy8gZ2VuZXJhdGUgSFRNTCBwYXRocyBhdCBidWlsZCB0aW1lXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoY29udGV4dCkge1xuICBjb25zdCBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcblxuICAgIGNvbnN0IHBhdGggPSBgJHtwcm9jZXNzLmN3ZCgpfS9jb250ZW50c2A7XG4gIGNvbnN0IGZpbGVzID0gZnMucmVhZGRpclN5bmMocGF0aCwgXCJ1dGYtOFwiKTtcblxuICAgIGNvbnN0IG1hcmtkb3duRmlsZU5hbWVzID0gZmlsZXNcbiAgICAuZmlsdGVyKChmbikgPT4gZm4uZW5kc1dpdGgoXCIubWRcIikpXG4gICAgLm1hcCgoZm4pID0+IGZuLnJlcGxhY2UoXCIubWRcIiwgXCJcIikpO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHM6IG1hcmtkb3duRmlsZU5hbWVzLm1hcCgoZmlsZU5hbWUpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHNsdWc6IGZpbGVOYW1lLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9KSxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dQb3N0UGFnZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog/[slug].js\n");

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