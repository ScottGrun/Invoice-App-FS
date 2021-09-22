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

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    console.log(invoices);

    if (filter === 'Draft') {
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
        setDrawerOpen: setDrawerOpen,
        invoice: null
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

_s(Home, "BdFtjIs/OXxmjz4jrE32TuCTBAE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWJhOWI5ZGRlYmMzODUwMDA3M2YuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsSUFBTWMsSUFBYyxHQUFHLFNBQWpCQSxJQUFpQixHQUFNO0FBQUE7O0FBQUE7O0FBQzVCLG9CQUFpQ2IsaURBQVUsQ0FBQ0ksb0VBQUQsQ0FBM0M7QUFBQSxNQUFRVSxRQUFSLGVBQVFBLFFBQVI7QUFBQSxNQUFrQkMsVUFBbEIsZUFBa0JBLFVBQWxCOztBQUNBLGtCQUE0QmIsK0NBQVEsQ0FBc0IsRUFBdEIsQ0FBcEM7QUFBQSxNQUFPYyxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxtQkFBZ0RmLCtDQUFRLENBQUNZLFFBQUQsQ0FBeEQ7QUFBQSxNQUFPSSxnQkFBUDtBQUFBLE1BQXlCQyxtQkFBekI7O0FBRUFsQixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZm1CLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUCxRQUFaOztBQUNBLFFBQUlFLE1BQU0sS0FBSyxPQUFmLEVBQXdCO0FBQ3ZCRyxNQUFBQSxtQkFBbUIsQ0FBQ0wsUUFBUSxDQUFDRSxNQUFULENBQWdCLFVBQUNNLE9BQUQ7QUFBQSxlQUFhQSxPQUFPLENBQUNDLE1BQVIsS0FBbUJQLE1BQWhDO0FBQUEsT0FBaEIsQ0FBRCxDQUFuQjtBQUNBLEtBRkQsTUFFTyxJQUFJQSxNQUFNLEtBQUssU0FBZixFQUEwQjtBQUNoQ0csTUFBQUEsbUJBQW1CLENBQUNMLFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQixVQUFDTSxPQUFEO0FBQUEsZUFBYUEsT0FBTyxDQUFDQyxNQUFSLEtBQW1CUCxNQUFoQztBQUFBLE9BQWhCLENBQUQsQ0FBbkI7QUFDQSxLQUZNLE1BRUEsSUFBSUEsTUFBTSxLQUFLLE1BQWYsRUFBdUI7QUFDN0JHLE1BQUFBLG1CQUFtQixDQUFDTCxRQUFRLENBQUNFLE1BQVQsQ0FBZ0IsVUFBQ00sT0FBRDtBQUFBLGVBQWFBLE9BQU8sQ0FBQ0MsTUFBUixLQUFtQlAsTUFBaEM7QUFBQSxPQUFoQixDQUFELENBQW5CO0FBQ0EsS0FGTSxNQUVBO0FBQ05HLE1BQUFBLG1CQUFtQixDQUFDTCxRQUFELENBQW5CO0FBQ0E7QUFDRCxHQVhRLEVBV04sQ0FBQ0UsTUFBRCxFQUFTRixRQUFULENBWE0sQ0FBVDtBQWFBLHNCQUNDO0FBQUEsNEJBQ0MsK0RBQUMsc0RBQUQ7QUFDQyxrQkFBWSxFQUFFVSxZQURmO0FBRUMsbUJBQWEsRUFBRUMsYUFGaEI7QUFHQyxlQUFTLEVBQUMsNEJBSFg7QUFBQSw2QkFLQywrREFBQyw2RUFBRDtBQUFpQixxQkFBYSxFQUFFQSxhQUFoQztBQUErQyxlQUFPLEVBQUU7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQVFDLCtEQUFDLHdEQUFEO0FBQUEsOEJBQ0MsK0RBQUMsb0RBQUQ7QUFBUSxvQkFBWSxzQkFBRVgsUUFBUSxDQUFDWSxNQUFYLCtEQUFxQixDQUF6QztBQUE0QyxpQkFBUyxFQUFFVCxTQUF2RDtBQUFrRSxjQUFNLEVBQUVEO0FBQTFFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQUVDLCtEQUFDLHVHQUFEO0FBQUEsa0JBQ0VFLGdCQUFnQixDQUFDUSxNQUFqQixHQUEwQixDQUExQixHQUNBUixnQkFBZ0IsQ0FBQ1MsR0FBakIsQ0FBcUIsVUFBQ0wsT0FBRDtBQUFBLDhCQUNwQiwrREFBQyxrREFBRDtBQUF1QixnQkFBSSxxQkFBY0EsT0FBTyxDQUFDTSxFQUF0QixDQUEzQjtBQUF1RCxvQkFBUSxNQUEvRDtBQUFBLG1DQUNDO0FBQUEscUNBQ0MsK0RBQUMsNEVBQUQ7QUFDQyxrQkFBRSxFQUFFTixPQUFPLENBQUNNLEVBRGI7QUFFQyx1QkFBTyxFQUFFTixPQUFPLENBQUNPLFlBRmxCO0FBR0MsMEJBQVUsRUFBRVAsT0FBTyxDQUFDUSxXQUhyQjtBQUlDLHNCQUFNLEVBQUVSLE9BQU8sQ0FBQ0MsTUFKakI7QUFLQyxxQkFBSyxFQUFFWCw2RUFBcUIsQ0FBQ1UsT0FBTyxDQUFDUyxhQUFUO0FBTDdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsYUFBV1QsT0FBTyxDQUFDTSxFQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURvQjtBQUFBLFNBQXJCLENBREEsZ0JBZUE7QUFBQSxpQ0FDQywrREFBQyxnQkFBRDtBQUNDLG1CQUFPLEVBQUMsdUJBRFQ7QUFFQyx3QkFBWSxFQUFDO0FBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJEO0FBQUEsa0JBREQ7QUF1Q0EsQ0F6REQ7O0dBQU1mOztLQUFBQTtBQTJETixJQUFNbUIsZ0JBQWdCLEdBQUc3QiwyREFBTSxDQUFDRyw4REFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLG9GQUdaLFVBQUMyQixDQUFEO0FBQUEsU0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLE9BQVIsQ0FBZ0JDLFdBQXZCO0FBQUEsQ0FIWSxFQU9aLFVBQUNILENBQUQ7QUFBQSxTQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUUMsT0FBUixDQUFnQkUsV0FBdkI7QUFBQSxDQVBZLENBQXRCO01BQU1MO0FBWU4sK0RBQWVuQixJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgSW52b2ljZXNDb250ZXh0IH0gZnJvbSAnY29udGV4dC9JbnZvaWNlc0NvbnRleHQnO1xyXG5cclxuaW1wb3J0IHsgUG9zc2libGVTdGF0dXMgfSBmcm9tICcuLi9jb25maWcvUG9zc2libGVTdGF0dXMnO1xyXG5pbXBvcnQgeyBkZW1vSW52b2ljZXNEYXRhIH0gZnJvbSAnLi4vZGF0YS9kZW1vJztcclxuaW1wb3J0IHsgSW52b2ljZSB9IGZyb20gJy4uL3R5cGVzJztcclxuXHJcbmltcG9ydCB7IERyYXdlciB9IGZyb20gJ0AvY29tcG9uZW50cy9EcmF3ZXInO1xyXG5pbXBvcnQgeyBFbXB0eVN0YXRlIH0gZnJvbSAnQC9jb21wb25lbnRzL0VtcHR5U3RhdGUnO1xyXG5pbXBvcnQgeyBFZGl0SW52b2ljZUZvcm0gfSBmcm9tICdAL2NvbXBvbmVudHMvRm9ybS9FZGl0SW52b2ljZUZvcm0nO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvSG9tZSc7XHJcbmltcG9ydCB7IEludm9pY2VDYXJkIH0gZnJvbSAnQC9jb21wb25lbnRzL0ludm9pY2VDYXJkL0ludm9pY2VDYXJkJztcclxuaW1wb3J0IHsgSW52b2ljZUxpc3RDb250YWluZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvSW52b2ljZUxpc3RDb250YWluZXIvSW52b2ljZUxpc3RDb250YWluZXInO1xyXG5pbXBvcnQgUGFnZUxheW91dCBmcm9tICdAL2xheW91dHMvUGFnZUxheW91dCc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZUludm9pY2VUb3RhbCB9IGZyb20gJ0AvdXRpbHMvY2FsY3VsYXRlVG90YWwnO1xyXG5cclxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcblx0Y29uc3QgeyBpbnZvaWNlcywgYWRkSW52b2ljZSB9ID0gdXNlQ29udGV4dChJbnZvaWNlc0NvbnRleHQpO1xyXG5cdGNvbnN0IFtmaWx0ZXIsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZTxQb3NzaWJsZVN0YXR1cyB8ICcnPignJyk7XHJcblx0Y29uc3QgW2ZpbHRlcmVkSW52b2ljZXMsIHNldEZpbHRlcmVkSW52b2ljZXNdID0gdXNlU3RhdGUoaW52b2ljZXMpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coaW52b2ljZXMpO1xyXG5cdFx0aWYgKGZpbHRlciA9PT0gJ0RyYWZ0Jykge1xyXG5cdFx0XHRzZXRGaWx0ZXJlZEludm9pY2VzKGludm9pY2VzLmZpbHRlcigoaW52b2ljZSkgPT4gaW52b2ljZS5zdGF0dXMgPT09IGZpbHRlcikpO1xyXG5cdFx0fSBlbHNlIGlmIChmaWx0ZXIgPT09ICdQZW5kaW5nJykge1xyXG5cdFx0XHRzZXRGaWx0ZXJlZEludm9pY2VzKGludm9pY2VzLmZpbHRlcigoaW52b2ljZSkgPT4gaW52b2ljZS5zdGF0dXMgPT09IGZpbHRlcikpO1xyXG5cdFx0fSBlbHNlIGlmIChmaWx0ZXIgPT09ICdQYWlkJykge1xyXG5cdFx0XHRzZXRGaWx0ZXJlZEludm9pY2VzKGludm9pY2VzLmZpbHRlcigoaW52b2ljZSkgPT4gaW52b2ljZS5zdGF0dXMgPT09IGZpbHRlcikpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c2V0RmlsdGVyZWRJbnZvaWNlcyhpbnZvaWNlcyk7XHJcblx0XHR9XHJcblx0fSwgW2ZpbHRlciwgaW52b2ljZXNdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxEcmF3ZXJcclxuXHRcdFx0XHRpc0RyYXdlck9wZW49e2lzRHJhd2VyT3Blbn1cclxuXHRcdFx0XHRzZXREcmF3ZXJPcGVuPXtzZXREcmF3ZXJPcGVufVxyXG5cdFx0XHRcdGFyaWFMYWJlbD1cIkludm9pY2UgRWRpdGluZyBGb3JtIE1vZGFsXCJcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxFZGl0SW52b2ljZUZvcm0gc2V0RHJhd2VyT3Blbj17c2V0RHJhd2VyT3Blbn0gaW52b2ljZT17bnVsbH0gLz5cclxuXHRcdFx0PC9EcmF3ZXI+XHJcblx0XHRcdDxQYWdlTGF5b3V0PlxyXG5cdFx0XHRcdDxIZWFkZXIgaW52b2ljZUNvdW50PXtpbnZvaWNlcy5sZW5ndGggPz8gMH0gc2V0RmlsdGVyPXtzZXRGaWx0ZXJ9IGZpbHRlcj17ZmlsdGVyfSAvPlxyXG5cdFx0XHRcdDxJbnZvaWNlTGlzdENvbnRhaW5lcj5cclxuXHRcdFx0XHRcdHtmaWx0ZXJlZEludm9pY2VzLmxlbmd0aCA+IDAgPyAoXHJcblx0XHRcdFx0XHRcdGZpbHRlcmVkSW52b2ljZXMubWFwKChpbnZvaWNlOiBJbnZvaWNlKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PExpbmsga2V5PXtpbnZvaWNlLmlkfSBocmVmPXtgL2ludm9pY2UvJHtpbnZvaWNlLmlkfWB9IHBhc3NIcmVmPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGE+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxJbnZvaWNlQ2FyZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlkPXtpbnZvaWNlLmlkfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGR1ZURhdGU9e2ludm9pY2UuaW52b2ljZV9kYXRlIGFzIHN0cmluZ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGllbnROYW1lPXtpbnZvaWNlLmNsaWVudF9uYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0YXR1cz17aW52b2ljZS5zdGF0dXN9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dG90YWw9e2NhbGN1bGF0ZUludm9pY2VUb3RhbChpbnZvaWNlLmludm9pY2VfaXRlbXMpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0KSlcclxuXHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0XHQ8U3R5bGVkRW1wdHlTdGF0ZVxyXG5cdFx0XHRcdFx0XHRcdFx0aGVhZGluZz1cIlRoZXJlIGlzIG5vdGhpbmcgaGVyZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRlcnJvck1lc3NhZ2U9XCJDcmVhdGUgYSBuZXcgaW52b2ljZSBieSBjbGlja2luZyB0aGVcclxuXHRcdFx0XHRcdE5ldyBJbnZvaWNlIGJ1dHRvbiBhbmQgZ2V0IHN0YXJ0ZWRcIlxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdDwvSW52b2ljZUxpc3RDb250YWluZXI+XHJcblx0XHRcdDwvUGFnZUxheW91dD5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5jb25zdCBTdHlsZWRFbXB0eVN0YXRlID0gc3R5bGVkKEVtcHR5U3RhdGUpYFxyXG5cdG1hcmdpbi10b3A6IDcxcHg7XHJcblxyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdG1hcmdpbi10b3A6IDE1NHB4O1xyXG5cdH1cclxuXHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy5sYXB0b3BBbmRVcH0ge1xyXG5cdFx0bWFyZ2luLXRvcDogNzZweDtcclxuXHR9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlZCIsIkludm9pY2VzQ29udGV4dCIsIkRyYXdlciIsIkVtcHR5U3RhdGUiLCJFZGl0SW52b2ljZUZvcm0iLCJIZWFkZXIiLCJJbnZvaWNlQ2FyZCIsIkludm9pY2VMaXN0Q29udGFpbmVyIiwiUGFnZUxheW91dCIsImNhbGN1bGF0ZUludm9pY2VUb3RhbCIsIkhvbWUiLCJpbnZvaWNlcyIsImFkZEludm9pY2UiLCJmaWx0ZXIiLCJzZXRGaWx0ZXIiLCJmaWx0ZXJlZEludm9pY2VzIiwic2V0RmlsdGVyZWRJbnZvaWNlcyIsImNvbnNvbGUiLCJsb2ciLCJpbnZvaWNlIiwic3RhdHVzIiwiaXNEcmF3ZXJPcGVuIiwic2V0RHJhd2VyT3BlbiIsImxlbmd0aCIsIm1hcCIsImlkIiwiaW52b2ljZV9kYXRlIiwiY2xpZW50X25hbWUiLCJpbnZvaWNlX2l0ZW1zIiwiU3R5bGVkRW1wdHlTdGF0ZSIsInAiLCJ0aGVtZSIsIlFVRVJJRVMiLCJ0YWJsZXRBbmRVcCIsImxhcHRvcEFuZFVwIl0sInNvdXJjZVJvb3QiOiIifQ==