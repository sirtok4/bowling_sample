"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/booking",{

/***/ "./src/components/header/LayoutHeader.jsx":
/*!************************************************!*\
  !*** ./src/components/header/LayoutHeader.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Header2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header2 */ \"./src/components/header/Header2.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n/*---------Using reducer mange the active or inactive menu----------*/ var initialState = {\n    activeMenu: \"\"\n};\nfunction reducer(state, action) {\n    switch(action.type){\n        case \"homeOne\":\n            return {\n                activeMenu: \"homeOne\"\n            };\n        case \"suits\":\n            return {\n                activeMenu: \"suits\"\n            };\n        case \"blog\":\n            return {\n                activeMenu: \"blog\"\n            };\n        case \"pages\":\n            return {\n                activeMenu: \"pages\"\n            };\n        case \"hotel-facilities\":\n            return {\n                activeMenu: \"hotel-facilities\"\n            };\n        default:\n            return {\n                activeMenu: \"\"\n            };\n    }\n}\nfunction LayoutHeader() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showMobileMenu = ref[0], setMobileMenu = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState), state = ref1[0], dispatch = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var currentRoute = router.pathname;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.addEventListener(\"scroll\", isSticky);\n        return function() {\n            window.removeEventListener(\"scroll\", isSticky);\n        };\n    });\n    var handleMobileMenu = function() {\n        if (showMobileMenu === false || showMobileMenu === 0) {\n            setMobileMenu(1);\n        } else {\n            setMobileMenu(false);\n        }\n    };\n    var isSticky = function(e) {\n        var header = document.querySelector(\"header\");\n        var scrollTop = window.scrollY;\n        scrollTop >= 100 ? header.classList.add(\"sticky\") : header.classList ? header.classList.remove(\"sticky\") : header.classList.add(\"sticky\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header2__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: \"D:\\\\Dev\\\\projects\\\\website\\\\bowling\\\\src\\\\components\\\\header\\\\LayoutHeader.jsx\",\n        lineNumber: 51,\n        columnNumber: 10\n    }, this);\n}\n_s(LayoutHeader, \"+9NQynQD8ficKMxteRMVGEsWaj4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = LayoutHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LayoutHeader);\nvar _c;\n$RefreshReg$(_c, \"LayoutHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvTGF5b3V0SGVhZGVyLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQStEO0FBQ2xDO0FBQ1c7QUFDUjtBQUNoQyxvRUFBb0UsR0FDcEUsSUFBTU8sWUFBWSxHQUFHO0lBQUVDLFVBQVUsRUFBRSxFQUFFO0NBQUU7QUFFdkMsU0FBU0MsT0FBTyxDQUFDQyxLQUFLLEVBQUVDLE1BQU0sRUFBRTtJQUM5QixPQUFRQSxNQUFNLENBQUNDLElBQUk7UUFDakIsS0FBSyxTQUFTO1lBQ1osT0FBTztnQkFBRUosVUFBVSxFQUFFLFNBQVM7YUFBRSxDQUFDO1FBQ25DLEtBQUssT0FBTztZQUNWLE9BQU87Z0JBQUVBLFVBQVUsRUFBRSxPQUFPO2FBQUUsQ0FBQztRQUNqQyxLQUFLLE1BQU07WUFDVCxPQUFPO2dCQUFFQSxVQUFVLEVBQUUsTUFBTTthQUFFLENBQUM7UUFDaEMsS0FBSyxPQUFPO1lBQ1YsT0FBTztnQkFBRUEsVUFBVSxFQUFFLE9BQU87YUFBRSxDQUFDO1FBQ2pDLEtBQUssa0JBQWtCO1lBQ3JCLE9BQU87Z0JBQUVBLFVBQVUsRUFBRSxrQkFBa0I7YUFBRSxDQUFDO1FBQzVDO1lBQ0UsT0FBTztnQkFBRUEsVUFBVSxFQUFFLEVBQUU7YUFBRSxDQUFDO0tBQzdCO0FBQ0gsQ0FBQztBQUNELFNBQVNLLFlBQVksR0FBRzs7SUFDdEIsSUFBd0NWLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBaERXLGNBQWMsR0FBbUJYLEdBQWUsR0FBbEMsRUFBRVksYUFBYSxHQUFJWixHQUFlLEdBQW5CO0lBQ3BDLElBQTBCRCxJQUFpQyxHQUFqQ0EsaURBQVUsQ0FBQ08sT0FBTyxFQUFFRixZQUFZLENBQUMsRUFBcERHLEtBQUssR0FBY1IsSUFBaUMsR0FBL0MsRUFBRWMsUUFBUSxHQUFJZCxJQUFpQyxHQUFyQztJQUN0QixJQUFNZSxNQUFNLEdBQUdaLHNEQUFTLEVBQUU7SUFDMUIsSUFBTWEsWUFBWSxHQUFHRCxNQUFNLENBQUNFLFFBQVE7SUFDcENsQixnREFBUyxDQUFDLFdBQU07UUFDZG1CLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsUUFBUSxFQUFFQyxRQUFRLENBQUMsQ0FBQztRQUM1QyxPQUFPLFdBQU07WUFDWEYsTUFBTSxDQUFDRyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUVELFFBQVEsQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0gsSUFBTUUsZ0JBQWdCLEdBQUcsV0FBTTtRQUM3QixJQUFJVixjQUFjLEtBQUssS0FBSyxJQUFJQSxjQUFjLEtBQUssQ0FBQyxFQUFFO1lBQ3BEQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkIsT0FBTztZQUNMQSxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsQ0FBQztJQUNILENBQUM7SUFDRCxJQUFNTyxRQUFRLEdBQUcsU0FBQ0csQ0FBQyxFQUFLO1FBQ3RCLElBQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQy9DLElBQU1DLFNBQVMsR0FBR1QsTUFBTSxDQUFDVSxPQUFPO1FBQ2hDRCxTQUFTLElBQUksR0FBRyxHQUNaSCxNQUFNLENBQUNLLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUM5Qk4sTUFBTSxDQUFDSyxTQUFTLEdBQ2hCTCxNQUFNLENBQUNLLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUNqQ1AsTUFBTSxDQUFDSyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0QscUJBQU8sOERBQUMxQixnREFBTzs7OztZQUFHO0FBQ3BCLENBQUM7R0E1QlFPLFlBQVk7O1FBR0pSLGtEQUFTOzs7QUFIakJRLEtBQUFBLFlBQVk7QUE4QnJCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL0xheW91dEhlYWRlci5qc3g/OWQ1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgSGVhZGVyMiBmcm9tIFwiLi9IZWFkZXIyXCI7XG4vKi0tLS0tLS0tLVVzaW5nIHJlZHVjZXIgbWFuZ2UgdGhlIGFjdGl2ZSBvciBpbmFjdGl2ZSBtZW51LS0tLS0tLS0tLSovXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7IGFjdGl2ZU1lbnU6IFwiXCIgfTtcblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiaG9tZU9uZVwiOlxuICAgICAgcmV0dXJuIHsgYWN0aXZlTWVudTogXCJob21lT25lXCIgfTtcbiAgICBjYXNlIFwic3VpdHNcIjpcbiAgICAgIHJldHVybiB7IGFjdGl2ZU1lbnU6IFwic3VpdHNcIiB9O1xuICAgIGNhc2UgXCJibG9nXCI6XG4gICAgICByZXR1cm4geyBhY3RpdmVNZW51OiBcImJsb2dcIiB9O1xuICAgIGNhc2UgXCJwYWdlc1wiOlxuICAgICAgcmV0dXJuIHsgYWN0aXZlTWVudTogXCJwYWdlc1wiIH07XG4gICAgY2FzZSBcImhvdGVsLWZhY2lsaXRpZXNcIjpcbiAgICAgIHJldHVybiB7IGFjdGl2ZU1lbnU6IFwiaG90ZWwtZmFjaWxpdGllc1wiIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7IGFjdGl2ZU1lbnU6IFwiXCIgfTtcbiAgfVxufVxuZnVuY3Rpb24gTGF5b3V0SGVhZGVyKCkge1xuICBjb25zdCBbc2hvd01vYmlsZU1lbnUsIHNldE1vYmlsZU1lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGN1cnJlbnRSb3V0ZSA9IHJvdXRlci5wYXRobmFtZTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBpc1N0aWNreSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGlzU3RpY2t5KTtcbiAgICB9O1xuICB9KTtcbiAgY29uc3QgaGFuZGxlTW9iaWxlTWVudSA9ICgpID0+IHtcbiAgICBpZiAoc2hvd01vYmlsZU1lbnUgPT09IGZhbHNlIHx8IHNob3dNb2JpbGVNZW51ID09PSAwKSB7XG4gICAgICBzZXRNb2JpbGVNZW51KDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRNb2JpbGVNZW51KGZhbHNlKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGlzU3RpY2t5ID0gKGUpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHdpbmRvdy5zY3JvbGxZO1xuICAgIHNjcm9sbFRvcCA+PSAxMDBcbiAgICAgID8gaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJzdGlja3lcIilcbiAgICAgIDogaGVhZGVyLmNsYXNzTGlzdFxuICAgICAgPyBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcInN0aWNreVwiKVxuICAgICAgOiBoZWFkZXIuY2xhc3NMaXN0LmFkZChcInN0aWNreVwiKTtcbiAgfTtcbiAgcmV0dXJuIDxIZWFkZXIyIC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dEhlYWRlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZHVjZXIiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJIZWFkZXIyIiwiaW5pdGlhbFN0YXRlIiwiYWN0aXZlTWVudSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJMYXlvdXRIZWFkZXIiLCJzaG93TW9iaWxlTWVudSIsInNldE1vYmlsZU1lbnUiLCJkaXNwYXRjaCIsInJvdXRlciIsImN1cnJlbnRSb3V0ZSIsInBhdGhuYW1lIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImlzU3RpY2t5IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZU1vYmlsZU1lbnUiLCJlIiwiaGVhZGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsVG9wIiwic2Nyb2xsWSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/header/LayoutHeader.jsx\n"));

/***/ })

});