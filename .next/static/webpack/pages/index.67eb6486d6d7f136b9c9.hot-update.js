"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var context_InvoicesContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! context/InvoicesContext */ "./context/InvoicesContext.tsx");
/* harmony import */ var _components_Drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Drawer */ "./components/Drawer/index.ts");
/* harmony import */ var _components_EmptyState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/EmptyState */ "./components/EmptyState/index.ts");
/* harmony import */ var _components_Form_EditInvoiceForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Form/EditInvoiceForm */ "./components/Form/EditInvoiceForm.tsx");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Home */ "./components/Home/index.ts");
/* harmony import */ var _components_InvoiceListContainer_InvoiceListContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/InvoiceListContainer/InvoiceListContainer */ "./components/InvoiceListContainer/InvoiceListContainer.tsx");
/* harmony import */ var _layouts_PageLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/layouts/PageLayout */ "./layouts/PageLayout.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\scott\\Documents\\GitHub\\Invoice-App-FS\\pages\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();













var Home = function Home() {
  _s();

  var _invoices$length;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(context_InvoicesContext__WEBPACK_IMPORTED_MODULE_1__.InvoicesContext),
      invoices = _useContext.invoices,
      addInvoice = _useContext.addInvoice;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      filter = _useState[0],
      setFilter = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(invoices),
      filteredInvoices = _useState2[0],
      setFilteredInvoices = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      isDrawerOpen = _useState3[0],
      setDrawerOpen = _useState3[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    console.log(invoices);

    if (filter === 'Draft' && invoices.length > 0) {
      setFilteredInvoices(invoices.filter(function (invoice) {
        return invoice.status === filter;
      }));
    } else if (filter === 'Pending') {
      setFilteredInvoices(invoices.filter(function (invoice) {
        return invoice.status === filter;
      }));
    } else if (filter === 'Paid') {
      setFilteredInvoices(invoices.filter(function (invoice) {
        return invoice.status === filter;
      }));
    } else {
      setFilteredInvoices(invoices);
    }
  }, [filter, invoices]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Drawer__WEBPACK_IMPORTED_MODULE_2__.Drawer, {
      isDrawerOpen: isDrawerOpen,
      setDrawerOpen: setDrawerOpen,
      ariaLabel: "Invoice Editing Form Modal",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Form_EditInvoiceForm__WEBPACK_IMPORTED_MODULE_4__.EditInvoiceForm, {
        setDrawerOpen: setDrawerOpen
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_layouts_PageLayout__WEBPACK_IMPORTED_MODULE_7__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Home__WEBPACK_IMPORTED_MODULE_5__.Header, {
        invoiceCount: (_invoices$length = invoices.length) !== null && _invoices$length !== void 0 ? _invoices$length : 0,
        setFilter: setFilter,
        filter: filter
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_InvoiceListContainer_InvoiceListContainer__WEBPACK_IMPORTED_MODULE_6__.InvoiceListContainer, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 4
    }, _this)]
  }, void 0, true);
};

_s(Home, "kDaLZMgv+Ao5fI4U6ztWjF/13IU=");

_c = Home;
var StyledEmptyState = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__.default)(_components_EmptyState__WEBPACK_IMPORTED_MODULE_3__.EmptyState).withConfig({
  displayName: "pages__StyledEmptyState",
  componentId: "sc-1d3y2lj-0"
})(["margin-top:71px;@media ", "{margin-top:154px;}@media ", "{margin-top:76px;}"], function (p) {
  return p.theme.QUERIES.tabletAndUp;
}, function (p) {
  return p.theme.QUERIES.laptopAndUp;
});
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjdlYjY0ODZkNmQ3ZjEzNmI5YzkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUVBO0FBRUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFHQSxJQUFNVyxJQUFjLEdBQUcsU0FBakJBLElBQWlCLEdBQU07QUFBQTs7QUFBQTs7QUFDNUIsb0JBQWlDWCxpREFBVSxDQUFDSSxvRUFBRCxDQUEzQztBQUFBLE1BQVFRLFFBQVIsZUFBUUEsUUFBUjtBQUFBLE1BQWtCQyxVQUFsQixlQUFrQkEsVUFBbEI7O0FBQ0Esa0JBQTRCWCwrQ0FBUSxDQUFzQixFQUF0QixDQUFwQztBQUFBLE1BQU9ZLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBLG1CQUFnRGIsK0NBQVEsQ0FBQ1UsUUFBRCxDQUF4RDtBQUFBLE1BQU9JLGdCQUFQO0FBQUEsTUFBeUJDLG1CQUF6Qjs7QUFDQSxtQkFBc0NmLCtDQUFRLENBQUMsSUFBRCxDQUE5QztBQUFBLE1BQU9nQixZQUFQO0FBQUEsTUFBcUJDLGFBQXJCOztBQUVBbEIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2ZtQixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVQsUUFBWjs7QUFDQSxRQUFJRSxNQUFNLEtBQUssT0FBWCxJQUFzQkYsUUFBUSxDQUFDVSxNQUFULEdBQWtCLENBQTVDLEVBQStDO0FBQzlDTCxNQUFBQSxtQkFBbUIsQ0FBQ0wsUUFBUSxDQUFDRSxNQUFULENBQWdCLFVBQUNTLE9BQUQ7QUFBQSxlQUFhQSxPQUFPLENBQUNDLE1BQVIsS0FBbUJWLE1BQWhDO0FBQUEsT0FBaEIsQ0FBRCxDQUFuQjtBQUNBLEtBRkQsTUFFTyxJQUFJQSxNQUFNLEtBQUssU0FBZixFQUEwQjtBQUNoQ0csTUFBQUEsbUJBQW1CLENBQUNMLFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQixVQUFDUyxPQUFEO0FBQUEsZUFBYUEsT0FBTyxDQUFDQyxNQUFSLEtBQW1CVixNQUFoQztBQUFBLE9BQWhCLENBQUQsQ0FBbkI7QUFDQSxLQUZNLE1BRUEsSUFBSUEsTUFBTSxLQUFLLE1BQWYsRUFBdUI7QUFDN0JHLE1BQUFBLG1CQUFtQixDQUFDTCxRQUFRLENBQUNFLE1BQVQsQ0FBZ0IsVUFBQ1MsT0FBRDtBQUFBLGVBQWFBLE9BQU8sQ0FBQ0MsTUFBUixLQUFtQlYsTUFBaEM7QUFBQSxPQUFoQixDQUFELENBQW5CO0FBQ0EsS0FGTSxNQUVBO0FBQ05HLE1BQUFBLG1CQUFtQixDQUFDTCxRQUFELENBQW5CO0FBQ0E7QUFDRCxHQVhRLEVBV04sQ0FBQ0UsTUFBRCxFQUFTRixRQUFULENBWE0sQ0FBVDtBQWFBLHNCQUNDO0FBQUEsNEJBQ0MsOERBQUMsc0RBQUQ7QUFDQyxrQkFBWSxFQUFFTSxZQURmO0FBRUMsbUJBQWEsRUFBRUMsYUFGaEI7QUFHQyxlQUFTLEVBQUMsNEJBSFg7QUFBQSw2QkFLQyw4REFBQyw2RUFBRDtBQUFpQixxQkFBYSxFQUFFQTtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBUUMsOERBQUMsd0RBQUQ7QUFBQSw4QkFDQyw4REFBQyxvREFBRDtBQUFRLG9CQUFZLHNCQUFFUCxRQUFRLENBQUNVLE1BQVgsK0RBQXFCLENBQXpDO0FBQTRDLGlCQUFTLEVBQUVQLFNBQXZEO0FBQWtFLGNBQU0sRUFBRUQ7QUFBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBRUMsOERBQUMsdUdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJEO0FBQUEsa0JBREQ7QUF1Q0EsQ0ExREQ7O0dBQU1IOztLQUFBQTtBQTRETixJQUFNYyxnQkFBZ0IsR0FBR3RCLDBEQUFNLENBQUNHLDhEQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsb0ZBR1osVUFBQ29CLENBQUQ7QUFBQSxTQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUUMsT0FBUixDQUFnQkMsV0FBdkI7QUFBQSxDQUhZLEVBT1osVUFBQ0gsQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxPQUFSLENBQWdCRSxXQUF2QjtBQUFBLENBUFksQ0FBdEI7QUFZQSwrREFBZW5CLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBJbnZvaWNlc0NvbnRleHQgfSBmcm9tICdjb250ZXh0L0ludm9pY2VzQ29udGV4dCc7XHJcblxyXG5pbXBvcnQgeyBQb3NzaWJsZVN0YXR1cyB9IGZyb20gJy4uL2NvbmZpZy9Qb3NzaWJsZVN0YXR1cyc7XHJcbmltcG9ydCB7IGRlbW9JbnZvaWNlc0RhdGEgfSBmcm9tICcuLi9kYXRhL2RlbW8nO1xyXG5pbXBvcnQgeyBJbnZvaWNlIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5cclxuaW1wb3J0IHsgRHJhd2VyIH0gZnJvbSAnQC9jb21wb25lbnRzL0RyYXdlcic7XHJcbmltcG9ydCB7IEVtcHR5U3RhdGUgfSBmcm9tICdAL2NvbXBvbmVudHMvRW1wdHlTdGF0ZSc7XHJcbmltcG9ydCB7IEVkaXRJbnZvaWNlRm9ybSB9IGZyb20gJ0AvY29tcG9uZW50cy9Gb3JtL0VkaXRJbnZvaWNlRm9ybSc7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJ0AvY29tcG9uZW50cy9Ib21lJztcclxuaW1wb3J0IHsgSW52b2ljZUNhcmQgfSBmcm9tICdAL2NvbXBvbmVudHMvSW52b2ljZUNhcmQvSW52b2ljZUNhcmQnO1xyXG5pbXBvcnQgeyBJbnZvaWNlTGlzdENvbnRhaW5lciB9IGZyb20gJ0AvY29tcG9uZW50cy9JbnZvaWNlTGlzdENvbnRhaW5lci9JbnZvaWNlTGlzdENvbnRhaW5lcic7XHJcbmltcG9ydCBQYWdlTGF5b3V0IGZyb20gJ0AvbGF5b3V0cy9QYWdlTGF5b3V0JztcclxuaW1wb3J0IHsgY2FsY3VsYXRlSW52b2ljZVRvdGFsIH0gZnJvbSAnQC91dGlscy9jYWxjdWxhdGVUb3RhbCc7XHJcblxyXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcclxuXHRjb25zdCB7IGludm9pY2VzLCBhZGRJbnZvaWNlIH0gPSB1c2VDb250ZXh0KEludm9pY2VzQ29udGV4dCk7XHJcblx0Y29uc3QgW2ZpbHRlciwgc2V0RmlsdGVyXSA9IHVzZVN0YXRlPFBvc3NpYmxlU3RhdHVzIHwgJyc+KCcnKTtcclxuXHRjb25zdCBbZmlsdGVyZWRJbnZvaWNlcywgc2V0RmlsdGVyZWRJbnZvaWNlc10gPSB1c2VTdGF0ZShpbnZvaWNlcyk7XHJcblx0Y29uc3QgW2lzRHJhd2VyT3Blbiwgc2V0RHJhd2VyT3Blbl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKGludm9pY2VzKTtcclxuXHRcdGlmIChmaWx0ZXIgPT09ICdEcmFmdCcgJiYgaW52b2ljZXMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRzZXRGaWx0ZXJlZEludm9pY2VzKGludm9pY2VzLmZpbHRlcigoaW52b2ljZSkgPT4gaW52b2ljZS5zdGF0dXMgPT09IGZpbHRlcikpO1xyXG5cdFx0fSBlbHNlIGlmIChmaWx0ZXIgPT09ICdQZW5kaW5nJykge1xyXG5cdFx0XHRzZXRGaWx0ZXJlZEludm9pY2VzKGludm9pY2VzLmZpbHRlcigoaW52b2ljZSkgPT4gaW52b2ljZS5zdGF0dXMgPT09IGZpbHRlcikpO1xyXG5cdFx0fSBlbHNlIGlmIChmaWx0ZXIgPT09ICdQYWlkJykge1xyXG5cdFx0XHRzZXRGaWx0ZXJlZEludm9pY2VzKGludm9pY2VzLmZpbHRlcigoaW52b2ljZSkgPT4gaW52b2ljZS5zdGF0dXMgPT09IGZpbHRlcikpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c2V0RmlsdGVyZWRJbnZvaWNlcyhpbnZvaWNlcyk7XHJcblx0XHR9XHJcblx0fSwgW2ZpbHRlciwgaW52b2ljZXNdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxEcmF3ZXJcclxuXHRcdFx0XHRpc0RyYXdlck9wZW49e2lzRHJhd2VyT3Blbn1cclxuXHRcdFx0XHRzZXREcmF3ZXJPcGVuPXtzZXREcmF3ZXJPcGVufVxyXG5cdFx0XHRcdGFyaWFMYWJlbD1cIkludm9pY2UgRWRpdGluZyBGb3JtIE1vZGFsXCJcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxFZGl0SW52b2ljZUZvcm0gc2V0RHJhd2VyT3Blbj17c2V0RHJhd2VyT3Blbn0gLz5cclxuXHRcdFx0PC9EcmF3ZXI+XHJcblx0XHRcdDxQYWdlTGF5b3V0PlxyXG5cdFx0XHRcdDxIZWFkZXIgaW52b2ljZUNvdW50PXtpbnZvaWNlcy5sZW5ndGggPz8gMH0gc2V0RmlsdGVyPXtzZXRGaWx0ZXJ9IGZpbHRlcj17ZmlsdGVyfSAvPlxyXG5cdFx0XHRcdDxJbnZvaWNlTGlzdENvbnRhaW5lcj5cclxuXHRcdFx0XHRcdHsvKiB7ZmlsdGVyZWRJbnZvaWNlcy5sZW5ndGggPiAwID8gKFxyXG5cdFx0XHRcdFx0XHRmaWx0ZXJlZEludm9pY2VzLm1hcCgoaW52b2ljZTogSW52b2ljZSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIGtleT17aW52b2ljZS5pZH0gaHJlZj17YC9pbnZvaWNlLyR7aW52b2ljZS5pZH1gfSBwYXNzSHJlZj5cclxuXHRcdFx0XHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8SW52b2ljZUNhcmRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZD17aW52b2ljZS5pZH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkdWVEYXRlPXtpbnZvaWNlLmludm9pY2VfZGF0ZSBhcyBzdHJpbmd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xpZW50TmFtZT17aW52b2ljZS5jbGllbnRfbmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdGF0dXM9e2ludm9pY2Uuc3RhdHVzfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRvdGFsPXtjYWxjdWxhdGVJbnZvaWNlVG90YWwoaW52b2ljZS5pbnZvaWNlX2l0ZW1zKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdCkpXHJcblx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdFx0PFN0eWxlZEVtcHR5U3RhdGVcclxuXHRcdFx0XHRcdFx0XHRcdGhlYWRpbmc9XCJUaGVyZSBpcyBub3RoaW5nIGhlcmVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3JNZXNzYWdlPVwiQ3JlYXRlIGEgbmV3IGludm9pY2UgYnkgY2xpY2tpbmcgdGhlXHJcblx0XHRcdFx0XHROZXcgSW52b2ljZSBidXR0b24gYW5kIGdldCBzdGFydGVkXCJcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0KX0gKi99XHJcblx0XHRcdFx0PC9JbnZvaWNlTGlzdENvbnRhaW5lcj5cclxuXHRcdFx0PC9QYWdlTGF5b3V0PlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmNvbnN0IFN0eWxlZEVtcHR5U3RhdGUgPSBzdHlsZWQoRW1wdHlTdGF0ZSlgXHJcblx0bWFyZ2luLXRvcDogNzFweDtcclxuXHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0bWFyZ2luLXRvcDogMTU0cHg7XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLmxhcHRvcEFuZFVwfSB7XHJcblx0XHRtYXJnaW4tdG9wOiA3NnB4O1xyXG5cdH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZWQiLCJJbnZvaWNlc0NvbnRleHQiLCJEcmF3ZXIiLCJFbXB0eVN0YXRlIiwiRWRpdEludm9pY2VGb3JtIiwiSGVhZGVyIiwiSW52b2ljZUxpc3RDb250YWluZXIiLCJQYWdlTGF5b3V0IiwiSG9tZSIsImludm9pY2VzIiwiYWRkSW52b2ljZSIsImZpbHRlciIsInNldEZpbHRlciIsImZpbHRlcmVkSW52b2ljZXMiLCJzZXRGaWx0ZXJlZEludm9pY2VzIiwiaXNEcmF3ZXJPcGVuIiwic2V0RHJhd2VyT3BlbiIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJpbnZvaWNlIiwic3RhdHVzIiwiU3R5bGVkRW1wdHlTdGF0ZSIsInAiLCJ0aGVtZSIsIlFVRVJJRVMiLCJ0YWJsZXRBbmRVcCIsImxhcHRvcEFuZFVwIl0sInNvdXJjZVJvb3QiOiIifQ==