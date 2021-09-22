"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var context_InvoicesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! context/InvoicesContext */ "./context/InvoicesContext.tsx");
/* harmony import */ var _components_Drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Drawer */ "./components/Drawer/index.ts");
/* harmony import */ var _components_EmptyState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/EmptyState */ "./components/EmptyState/index.ts");
/* harmony import */ var _components_Form_EditInvoiceForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Form/EditInvoiceForm */ "./components/Form/EditInvoiceForm.tsx");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Home */ "./components/Home/index.ts");
/* harmony import */ var _components_InvoiceCard_InvoiceCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/InvoiceCard/InvoiceCard */ "./components/InvoiceCard/InvoiceCard.tsx");
/* harmony import */ var _components_InvoiceListContainer_InvoiceListContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/InvoiceListContainer/InvoiceListContainer */ "./components/InvoiceListContainer/InvoiceListContainer.tsx");
/* harmony import */ var _layouts_PageLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/layouts/PageLayout */ "./layouts/PageLayout.tsx");
/* harmony import */ var _utils_calculateTotal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/calculateTotal */ "./utils/calculateTotal.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\scott\\Documents\\GitHub\\Invoice-App-FS\\pages\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();
















var Home = function Home() {
  _s();

  var _invoices$length;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(context_InvoicesContext__WEBPACK_IMPORTED_MODULE_2__.InvoicesContext),
      invoices = _useContext.invoices,
      addInvoice = _useContext.addInvoice;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      filter = _useState[0],
      setFilter = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(invoices),
      filteredInvoices = _useState2[0],
      setFilteredInvoices = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      isDrawerOpen = _useState3[0],
      setDrawerOpen = _useState3[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_Drawer__WEBPACK_IMPORTED_MODULE_3__.Drawer, {
      isDrawerOpen: isDrawerOpen,
      setDrawerOpen: setDrawerOpen,
      ariaLabel: "Invoice Editing Form Modal",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_Form_EditInvoiceForm__WEBPACK_IMPORTED_MODULE_5__.EditInvoiceForm, {
        setDrawerOpen: setDrawerOpen
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_layouts_PageLayout__WEBPACK_IMPORTED_MODULE_9__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_Home__WEBPACK_IMPORTED_MODULE_6__.Header, {
        invoiceCount: (_invoices$length = invoices.length) !== null && _invoices$length !== void 0 ? _invoices$length : 0,
        setFilter: setFilter,
        filter: filter
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_InvoiceListContainer_InvoiceListContainer__WEBPACK_IMPORTED_MODULE_8__.InvoiceListContainer, {
        children: filteredInvoices.length > 0 ? filteredInvoices.map(function (invoice) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
            href: "/invoice/".concat(invoice.id),
            passHref: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("a", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_InvoiceCard_InvoiceCard__WEBPACK_IMPORTED_MODULE_7__.InvoiceCard, {
                id: invoice.id,
                dueDate: invoice.invoice_date,
                clientName: invoice.client_name,
                status: invoice.status,
                total: (0,_utils_calculateTotal__WEBPACK_IMPORTED_MODULE_10__.calculateInvoiceTotal)(invoice.invoice_items)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 10
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 9
            }, _this)
          }, invoice.id, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 8
          }, _this);
        }) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(StyledEmptyState, {
            heading: "There is nothing here",
            errorMessage: "Create a new invoice by clicking the\r New Invoice button and get started"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 8
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 7
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 4
    }, _this)]
  }, void 0, true);
};

_s(Home, "kDaLZMgv+Ao5fI4U6ztWjF/13IU=");

_c = Home;
var StyledEmptyState = (0,styled_components__WEBPACK_IMPORTED_MODULE_12__.default)(_components_EmptyState__WEBPACK_IMPORTED_MODULE_4__.EmptyState).withConfig({
  displayName: "pages__StyledEmptyState",
  componentId: "sc-1d3y2lj-0"
})(["margin-top:71px;@media ", "{margin-top:154px;}@media ", "{margin-top:76px;}"], function (p) {
  return p.theme.QUERIES.tabletAndUp;
}, function (p) {
  return p.theme.QUERIES.laptopAndUp;
});
_c2 = StyledEmptyState;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c, _c2;

$RefreshReg$(_c, "Home");
$RefreshReg$(_c2, "StyledEmptyState");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGE1MDNjZTQ2ZmQyYzg2N2RhMTcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsSUFBTWMsSUFBYyxHQUFHLFNBQWpCQSxJQUFpQixHQUFNO0FBQUE7O0FBQUE7O0FBQzVCLG9CQUFpQ2IsaURBQVUsQ0FBQ0ksb0VBQUQsQ0FBM0M7QUFBQSxNQUFRVSxRQUFSLGVBQVFBLFFBQVI7QUFBQSxNQUFrQkMsVUFBbEIsZUFBa0JBLFVBQWxCOztBQUNBLGtCQUE0QmIsK0NBQVEsQ0FBc0IsRUFBdEIsQ0FBcEM7QUFBQSxNQUFPYyxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxtQkFBZ0RmLCtDQUFRLENBQUNZLFFBQUQsQ0FBeEQ7QUFBQSxNQUFPSSxnQkFBUDtBQUFBLE1BQXlCQyxtQkFBekI7O0FBQ0EsbUJBQXNDakIsK0NBQVEsQ0FBQyxJQUFELENBQTlDO0FBQUEsTUFBT2tCLFlBQVA7QUFBQSxNQUFxQkMsYUFBckI7O0FBRUFwQixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZixRQUFJZSxNQUFNLEtBQUssT0FBWCxJQUFzQkYsUUFBUSxDQUFDUSxNQUFULEdBQWtCLENBQTVDLEVBQStDO0FBQzlDSCxNQUFBQSxtQkFBbUIsQ0FBQ0wsUUFBUSxDQUFDRSxNQUFULENBQWdCLFVBQUNPLE9BQUQ7QUFBQSxlQUFhQSxPQUFPLENBQUNDLE1BQVIsS0FBbUJSLE1BQWhDO0FBQUEsT0FBaEIsQ0FBRCxDQUFuQjtBQUNBLEtBRkQsTUFFTyxJQUFJQSxNQUFNLEtBQUssU0FBZixFQUEwQjtBQUNoQ0csTUFBQUEsbUJBQW1CLENBQUNMLFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQixVQUFDTyxPQUFEO0FBQUEsZUFBYUEsT0FBTyxDQUFDQyxNQUFSLEtBQW1CUixNQUFoQztBQUFBLE9BQWhCLENBQUQsQ0FBbkI7QUFDQSxLQUZNLE1BRUEsSUFBSUEsTUFBTSxLQUFLLE1BQWYsRUFBdUI7QUFDN0JHLE1BQUFBLG1CQUFtQixDQUFDTCxRQUFRLENBQUNFLE1BQVQsQ0FBZ0IsVUFBQ08sT0FBRDtBQUFBLGVBQWFBLE9BQU8sQ0FBQ0MsTUFBUixLQUFtQlIsTUFBaEM7QUFBQSxPQUFoQixDQUFELENBQW5CO0FBQ0EsS0FGTSxNQUVBO0FBQ05HLE1BQUFBLG1CQUFtQixDQUFDTCxRQUFELENBQW5CO0FBQ0E7QUFDRCxHQVZRLEVBVU4sQ0FBQ0UsTUFBRCxFQUFTRixRQUFULENBVk0sQ0FBVDtBQVlBLHNCQUNDO0FBQUEsNEJBQ0MsK0RBQUMsc0RBQUQ7QUFDQyxrQkFBWSxFQUFFTSxZQURmO0FBRUMsbUJBQWEsRUFBRUMsYUFGaEI7QUFHQyxlQUFTLEVBQUMsNEJBSFg7QUFBQSw2QkFLQywrREFBQyw2RUFBRDtBQUFpQixxQkFBYSxFQUFFQTtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBUUMsK0RBQUMsd0RBQUQ7QUFBQSw4QkFDQywrREFBQyxvREFBRDtBQUFRLG9CQUFZLHNCQUFFUCxRQUFRLENBQUNRLE1BQVgsK0RBQXFCLENBQXpDO0FBQTRDLGlCQUFTLEVBQUVMLFNBQXZEO0FBQWtFLGNBQU0sRUFBRUQ7QUFBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBRUMsK0RBQUMsdUdBQUQ7QUFBQSxrQkFDRUUsZ0JBQWdCLENBQUNJLE1BQWpCLEdBQTBCLENBQTFCLEdBQ0FKLGdCQUFnQixDQUFDTyxHQUFqQixDQUFxQixVQUFDRixPQUFEO0FBQUEsOEJBQ3BCLCtEQUFDLGtEQUFEO0FBQXVCLGdCQUFJLHFCQUFjQSxPQUFPLENBQUNHLEVBQXRCLENBQTNCO0FBQXVELG9CQUFRLE1BQS9EO0FBQUEsbUNBQ0M7QUFBQSxxQ0FDQywrREFBQyw0RUFBRDtBQUNDLGtCQUFFLEVBQUVILE9BQU8sQ0FBQ0csRUFEYjtBQUVDLHVCQUFPLEVBQUVILE9BQU8sQ0FBQ0ksWUFGbEI7QUFHQywwQkFBVSxFQUFFSixPQUFPLENBQUNLLFdBSHJCO0FBSUMsc0JBQU0sRUFBRUwsT0FBTyxDQUFDQyxNQUpqQjtBQUtDLHFCQUFLLEVBQUVaLDZFQUFxQixDQUFDVyxPQUFPLENBQUNNLGFBQVQ7QUFMN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxhQUFXTixPQUFPLENBQUNHLEVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRG9CO0FBQUEsU0FBckIsQ0FEQSxnQkFlQTtBQUFBLGlDQUNDLCtEQUFDLGdCQUFEO0FBQ0MsbUJBQU8sRUFBQyx1QkFEVDtBQUVDLHdCQUFZLEVBQUM7QUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkQ7QUFBQSxrQkFERDtBQXVDQSxDQXpERDs7R0FBTWI7O0tBQUFBO0FBMkROLElBQU1pQixnQkFBZ0IsR0FBRzNCLDJEQUFNLENBQUNHLDhEQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsb0ZBR1osVUFBQ3lCLENBQUQ7QUFBQSxTQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUUMsT0FBUixDQUFnQkMsV0FBdkI7QUFBQSxDQUhZLEVBT1osVUFBQ0gsQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxPQUFSLENBQWdCRSxXQUF2QjtBQUFBLENBUFksQ0FBdEI7TUFBTUw7QUFZTiwrREFBZWpCLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBJbnZvaWNlc0NvbnRleHQgfSBmcm9tICdjb250ZXh0L0ludm9pY2VzQ29udGV4dCc7XHJcblxyXG5pbXBvcnQgeyBQb3NzaWJsZVN0YXR1cyB9IGZyb20gJy4uL2NvbmZpZy9Qb3NzaWJsZVN0YXR1cyc7XHJcbmltcG9ydCB7IGRlbW9JbnZvaWNlc0RhdGEgfSBmcm9tICcuLi9kYXRhL2RlbW8nO1xyXG5pbXBvcnQgeyBJbnZvaWNlIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5cclxuaW1wb3J0IHsgRHJhd2VyIH0gZnJvbSAnQC9jb21wb25lbnRzL0RyYXdlcic7XHJcbmltcG9ydCB7IEVtcHR5U3RhdGUgfSBmcm9tICdAL2NvbXBvbmVudHMvRW1wdHlTdGF0ZSc7XHJcbmltcG9ydCB7IEVkaXRJbnZvaWNlRm9ybSB9IGZyb20gJ0AvY29tcG9uZW50cy9Gb3JtL0VkaXRJbnZvaWNlRm9ybSc7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJ0AvY29tcG9uZW50cy9Ib21lJztcclxuaW1wb3J0IHsgSW52b2ljZUNhcmQgfSBmcm9tICdAL2NvbXBvbmVudHMvSW52b2ljZUNhcmQvSW52b2ljZUNhcmQnO1xyXG5pbXBvcnQgeyBJbnZvaWNlTGlzdENvbnRhaW5lciB9IGZyb20gJ0AvY29tcG9uZW50cy9JbnZvaWNlTGlzdENvbnRhaW5lci9JbnZvaWNlTGlzdENvbnRhaW5lcic7XHJcbmltcG9ydCBQYWdlTGF5b3V0IGZyb20gJ0AvbGF5b3V0cy9QYWdlTGF5b3V0JztcclxuaW1wb3J0IHsgY2FsY3VsYXRlSW52b2ljZVRvdGFsIH0gZnJvbSAnQC91dGlscy9jYWxjdWxhdGVUb3RhbCc7XHJcblxyXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcclxuXHRjb25zdCB7IGludm9pY2VzLCBhZGRJbnZvaWNlIH0gPSB1c2VDb250ZXh0KEludm9pY2VzQ29udGV4dCk7XHJcblx0Y29uc3QgW2ZpbHRlciwgc2V0RmlsdGVyXSA9IHVzZVN0YXRlPFBvc3NpYmxlU3RhdHVzIHwgJyc+KCcnKTtcclxuXHRjb25zdCBbZmlsdGVyZWRJbnZvaWNlcywgc2V0RmlsdGVyZWRJbnZvaWNlc10gPSB1c2VTdGF0ZShpbnZvaWNlcyk7XHJcblx0Y29uc3QgW2lzRHJhd2VyT3Blbiwgc2V0RHJhd2VyT3Blbl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmIChmaWx0ZXIgPT09ICdEcmFmdCcgJiYgaW52b2ljZXMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRzZXRGaWx0ZXJlZEludm9pY2VzKGludm9pY2VzLmZpbHRlcigoaW52b2ljZSkgPT4gaW52b2ljZS5zdGF0dXMgPT09IGZpbHRlcikpO1xyXG5cdFx0fSBlbHNlIGlmIChmaWx0ZXIgPT09ICdQZW5kaW5nJykge1xyXG5cdFx0XHRzZXRGaWx0ZXJlZEludm9pY2VzKGludm9pY2VzLmZpbHRlcigoaW52b2ljZSkgPT4gaW52b2ljZS5zdGF0dXMgPT09IGZpbHRlcikpO1xyXG5cdFx0fSBlbHNlIGlmIChmaWx0ZXIgPT09ICdQYWlkJykge1xyXG5cdFx0XHRzZXRGaWx0ZXJlZEludm9pY2VzKGludm9pY2VzLmZpbHRlcigoaW52b2ljZSkgPT4gaW52b2ljZS5zdGF0dXMgPT09IGZpbHRlcikpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c2V0RmlsdGVyZWRJbnZvaWNlcyhpbnZvaWNlcyk7XHJcblx0XHR9XHJcblx0fSwgW2ZpbHRlciwgaW52b2ljZXNdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxEcmF3ZXJcclxuXHRcdFx0XHRpc0RyYXdlck9wZW49e2lzRHJhd2VyT3Blbn1cclxuXHRcdFx0XHRzZXREcmF3ZXJPcGVuPXtzZXREcmF3ZXJPcGVufVxyXG5cdFx0XHRcdGFyaWFMYWJlbD1cIkludm9pY2UgRWRpdGluZyBGb3JtIE1vZGFsXCJcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxFZGl0SW52b2ljZUZvcm0gc2V0RHJhd2VyT3Blbj17c2V0RHJhd2VyT3Blbn0gLz5cclxuXHRcdFx0PC9EcmF3ZXI+XHJcblx0XHRcdDxQYWdlTGF5b3V0PlxyXG5cdFx0XHRcdDxIZWFkZXIgaW52b2ljZUNvdW50PXtpbnZvaWNlcy5sZW5ndGggPz8gMH0gc2V0RmlsdGVyPXtzZXRGaWx0ZXJ9IGZpbHRlcj17ZmlsdGVyfSAvPlxyXG5cdFx0XHRcdDxJbnZvaWNlTGlzdENvbnRhaW5lcj5cclxuXHRcdFx0XHRcdHtmaWx0ZXJlZEludm9pY2VzLmxlbmd0aCA+IDAgPyAoXHJcblx0XHRcdFx0XHRcdGZpbHRlcmVkSW52b2ljZXMubWFwKChpbnZvaWNlOiBJbnZvaWNlKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PExpbmsga2V5PXtpbnZvaWNlLmlkfSBocmVmPXtgL2ludm9pY2UvJHtpbnZvaWNlLmlkfWB9IHBhc3NIcmVmPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGE+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxJbnZvaWNlQ2FyZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlkPXtpbnZvaWNlLmlkfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGR1ZURhdGU9e2ludm9pY2UuaW52b2ljZV9kYXRlIGFzIHN0cmluZ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGllbnROYW1lPXtpbnZvaWNlLmNsaWVudF9uYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0YXR1cz17aW52b2ljZS5zdGF0dXN9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dG90YWw9e2NhbGN1bGF0ZUludm9pY2VUb3RhbChpbnZvaWNlLmludm9pY2VfaXRlbXMpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0KSlcclxuXHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0XHQ8U3R5bGVkRW1wdHlTdGF0ZVxyXG5cdFx0XHRcdFx0XHRcdFx0aGVhZGluZz1cIlRoZXJlIGlzIG5vdGhpbmcgaGVyZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRlcnJvck1lc3NhZ2U9XCJDcmVhdGUgYSBuZXcgaW52b2ljZSBieSBjbGlja2luZyB0aGVcclxuXHRcdFx0XHRcdE5ldyBJbnZvaWNlIGJ1dHRvbiBhbmQgZ2V0IHN0YXJ0ZWRcIlxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdDwvSW52b2ljZUxpc3RDb250YWluZXI+XHJcblx0XHRcdDwvUGFnZUxheW91dD5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5jb25zdCBTdHlsZWRFbXB0eVN0YXRlID0gc3R5bGVkKEVtcHR5U3RhdGUpYFxyXG5cdG1hcmdpbi10b3A6IDcxcHg7XHJcblxyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdG1hcmdpbi10b3A6IDE1NHB4O1xyXG5cdH1cclxuXHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy5sYXB0b3BBbmRVcH0ge1xyXG5cdFx0bWFyZ2luLXRvcDogNzZweDtcclxuXHR9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlZCIsIkludm9pY2VzQ29udGV4dCIsIkRyYXdlciIsIkVtcHR5U3RhdGUiLCJFZGl0SW52b2ljZUZvcm0iLCJIZWFkZXIiLCJJbnZvaWNlQ2FyZCIsIkludm9pY2VMaXN0Q29udGFpbmVyIiwiUGFnZUxheW91dCIsImNhbGN1bGF0ZUludm9pY2VUb3RhbCIsIkhvbWUiLCJpbnZvaWNlcyIsImFkZEludm9pY2UiLCJmaWx0ZXIiLCJzZXRGaWx0ZXIiLCJmaWx0ZXJlZEludm9pY2VzIiwic2V0RmlsdGVyZWRJbnZvaWNlcyIsImlzRHJhd2VyT3BlbiIsInNldERyYXdlck9wZW4iLCJsZW5ndGgiLCJpbnZvaWNlIiwic3RhdHVzIiwibWFwIiwiaWQiLCJpbnZvaWNlX2RhdGUiLCJjbGllbnRfbmFtZSIsImludm9pY2VfaXRlbXMiLCJTdHlsZWRFbXB0eVN0YXRlIiwicCIsInRoZW1lIiwiUVVFUklFUyIsInRhYmxldEFuZFVwIiwibGFwdG9wQW5kVXAiXSwic291cmNlUm9vdCI6IiJ9