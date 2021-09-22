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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var context_InvoicesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! context/InvoicesContext */ "./context/InvoicesContext.tsx");
/* harmony import */ var _components_EmptyState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/EmptyState */ "./components/EmptyState/index.ts");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Home */ "./components/Home/index.ts");
/* harmony import */ var _components_InvoiceCard_InvoiceCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/InvoiceCard/InvoiceCard */ "./components/InvoiceCard/InvoiceCard.tsx");
/* harmony import */ var _components_InvoiceListContainer_InvoiceListContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/InvoiceListContainer/InvoiceListContainer */ "./components/InvoiceListContainer/InvoiceListContainer.tsx");
/* harmony import */ var _layouts_PageLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/layouts/PageLayout */ "./layouts/PageLayout.tsx");
/* harmony import */ var _utils_calculateTotal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/calculateTotal */ "./utils/calculateTotal.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(Drawer, {
      isDrawerOpen: isDrawerOpen,
      setDrawerOpen: setDrawerOpen,
      ariaLabel: "Invoice Editing Form Modal",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(EditInvoiceForm, {
        setDrawerOpen: setDrawerOpen,
        invoice: selectedInvoice
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_layouts_PageLayout__WEBPACK_IMPORTED_MODULE_7__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_Home__WEBPACK_IMPORTED_MODULE_4__.Header, {
        invoiceCount: (_invoices$length = invoices.length) !== null && _invoices$length !== void 0 ? _invoices$length : 0,
        setFilter: setFilter,
        filter: filter
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_InvoiceListContainer_InvoiceListContainer__WEBPACK_IMPORTED_MODULE_6__.InvoiceListContainer, {
        children: filteredInvoices.length > 0 ? filteredInvoices.map(function (invoice) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
            href: "/invoice/".concat(invoice.id),
            passHref: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_InvoiceCard_InvoiceCard__WEBPACK_IMPORTED_MODULE_5__.InvoiceCard, {
                id: invoice.id,
                dueDate: invoice.invoice_date,
                clientName: invoice.client_name,
                status: invoice.status,
                total: (0,_utils_calculateTotal__WEBPACK_IMPORTED_MODULE_8__.calculateInvoiceTotal)(invoice.invoice_items)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 10
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 9
            }, _this)
          }, invoice.id, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 8
          }, _this);
        }) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(StyledEmptyState, {
            heading: "There is nothing here",
            errorMessage: "Create a new invoice by clicking the\r New Invoice button and get started"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 8
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 7
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 4
    }, _this)]
  }, void 0, true);
};

_s(Home, "BdFtjIs/OXxmjz4jrE32TuCTBAE=");

_c = Home;
var StyledEmptyState = (0,styled_components__WEBPACK_IMPORTED_MODULE_10__.default)(_components_EmptyState__WEBPACK_IMPORTED_MODULE_3__.EmptyState).withConfig({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzEwNWJiNTA5NzA5MmY0N2Y5Y2IuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsSUFBTVksSUFBYyxHQUFHLFNBQWpCQSxJQUFpQixHQUFNO0FBQUE7O0FBQUE7O0FBQzVCLG9CQUFpQ1gsaURBQVUsQ0FBQ0ksb0VBQUQsQ0FBM0M7QUFBQSxNQUFRUSxRQUFSLGVBQVFBLFFBQVI7QUFBQSxNQUFrQkMsVUFBbEIsZUFBa0JBLFVBQWxCOztBQUNBLGtCQUE0QlgsK0NBQVEsQ0FBc0IsRUFBdEIsQ0FBcEM7QUFBQSxNQUFPWSxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxtQkFBZ0RiLCtDQUFRLENBQUNVLFFBQUQsQ0FBeEQ7QUFBQSxNQUFPSSxnQkFBUDtBQUFBLE1BQXlCQyxtQkFBekI7O0FBRUFoQixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZmlCLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUCxRQUFaOztBQUNBLFFBQUlFLE1BQU0sS0FBSyxPQUFmLEVBQXdCO0FBQ3ZCRyxNQUFBQSxtQkFBbUIsQ0FBQ0wsUUFBUSxDQUFDRSxNQUFULENBQWdCLFVBQUNNLE9BQUQ7QUFBQSxlQUFhQSxPQUFPLENBQUNDLE1BQVIsS0FBbUJQLE1BQWhDO0FBQUEsT0FBaEIsQ0FBRCxDQUFuQjtBQUNBLEtBRkQsTUFFTyxJQUFJQSxNQUFNLEtBQUssU0FBZixFQUEwQjtBQUNoQ0csTUFBQUEsbUJBQW1CLENBQUNMLFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQixVQUFDTSxPQUFEO0FBQUEsZUFBYUEsT0FBTyxDQUFDQyxNQUFSLEtBQW1CUCxNQUFoQztBQUFBLE9BQWhCLENBQUQsQ0FBbkI7QUFDQSxLQUZNLE1BRUEsSUFBSUEsTUFBTSxLQUFLLE1BQWYsRUFBdUI7QUFDN0JHLE1BQUFBLG1CQUFtQixDQUFDTCxRQUFRLENBQUNFLE1BQVQsQ0FBZ0IsVUFBQ00sT0FBRDtBQUFBLGVBQWFBLE9BQU8sQ0FBQ0MsTUFBUixLQUFtQlAsTUFBaEM7QUFBQSxPQUFoQixDQUFELENBQW5CO0FBQ0EsS0FGTSxNQUVBO0FBQ05HLE1BQUFBLG1CQUFtQixDQUFDTCxRQUFELENBQW5CO0FBQ0E7QUFDRCxHQVhRLEVBV04sQ0FBQ0UsTUFBRCxFQUFTRixRQUFULENBWE0sQ0FBVDtBQWFBLHNCQUNDO0FBQUEsNEJBQ0MsOERBQUMsTUFBRDtBQUNDLGtCQUFZLEVBQUVVLFlBRGY7QUFFQyxtQkFBYSxFQUFFQyxhQUZoQjtBQUdDLGVBQVMsRUFBQyw0QkFIWDtBQUFBLDZCQUtDLDhEQUFDLGVBQUQ7QUFBaUIscUJBQWEsRUFBRUEsYUFBaEM7QUFBK0MsZUFBTyxFQUFFQztBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBUUMsOERBQUMsd0RBQUQ7QUFBQSw4QkFDQyw4REFBQyxvREFBRDtBQUFRLG9CQUFZLHNCQUFFWixRQUFRLENBQUNhLE1BQVgsK0RBQXFCLENBQXpDO0FBQTRDLGlCQUFTLEVBQUVWLFNBQXZEO0FBQWtFLGNBQU0sRUFBRUQ7QUFBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBRUMsOERBQUMsdUdBQUQ7QUFBQSxrQkFDRUUsZ0JBQWdCLENBQUNTLE1BQWpCLEdBQTBCLENBQTFCLEdBQ0FULGdCQUFnQixDQUFDVSxHQUFqQixDQUFxQixVQUFDTixPQUFEO0FBQUEsOEJBQ3BCLDhEQUFDLGtEQUFEO0FBQXVCLGdCQUFJLHFCQUFjQSxPQUFPLENBQUNPLEVBQXRCLENBQTNCO0FBQXVELG9CQUFRLE1BQS9EO0FBQUEsbUNBQ0M7QUFBQSxxQ0FDQyw4REFBQyw0RUFBRDtBQUNDLGtCQUFFLEVBQUVQLE9BQU8sQ0FBQ08sRUFEYjtBQUVDLHVCQUFPLEVBQUVQLE9BQU8sQ0FBQ1EsWUFGbEI7QUFHQywwQkFBVSxFQUFFUixPQUFPLENBQUNTLFdBSHJCO0FBSUMsc0JBQU0sRUFBRVQsT0FBTyxDQUFDQyxNQUpqQjtBQUtDLHFCQUFLLEVBQUVYLDRFQUFxQixDQUFDVSxPQUFPLENBQUNVLGFBQVQ7QUFMN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxhQUFXVixPQUFPLENBQUNPLEVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRG9CO0FBQUEsU0FBckIsQ0FEQSxnQkFlQTtBQUFBLGlDQUNDLDhEQUFDLGdCQUFEO0FBQ0MsbUJBQU8sRUFBQyx1QkFEVDtBQUVDLHdCQUFZLEVBQUM7QUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkQ7QUFBQSxrQkFERDtBQXVDQSxDQXpERDs7R0FBTWhCOztLQUFBQTtBQTJETixJQUFNb0IsZ0JBQWdCLEdBQUc1QiwyREFBTSxDQUFDRSw4REFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLG9GQUdaLFVBQUMyQixDQUFEO0FBQUEsU0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLE9BQVIsQ0FBZ0JDLFdBQXZCO0FBQUEsQ0FIWSxFQU9aLFVBQUNILENBQUQ7QUFBQSxTQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUUMsT0FBUixDQUFnQkUsV0FBdkI7QUFBQSxDQVBZLENBQXRCO01BQU1MO0FBWU4sK0RBQWVwQixJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgSW52b2ljZXNDb250ZXh0IH0gZnJvbSAnY29udGV4dC9JbnZvaWNlc0NvbnRleHQnO1xyXG5cclxuaW1wb3J0IHsgUG9zc2libGVTdGF0dXMgfSBmcm9tICcuLi9jb25maWcvUG9zc2libGVTdGF0dXMnO1xyXG5pbXBvcnQgeyBkZW1vSW52b2ljZXNEYXRhIH0gZnJvbSAnLi4vZGF0YS9kZW1vJztcclxuaW1wb3J0IHsgSW52b2ljZSB9IGZyb20gJy4uL3R5cGVzJztcclxuXHJcbmltcG9ydCB7IEVtcHR5U3RhdGUgfSBmcm9tICdAL2NvbXBvbmVudHMvRW1wdHlTdGF0ZSc7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJ0AvY29tcG9uZW50cy9Ib21lJztcclxuaW1wb3J0IHsgSW52b2ljZUNhcmQgfSBmcm9tICdAL2NvbXBvbmVudHMvSW52b2ljZUNhcmQvSW52b2ljZUNhcmQnO1xyXG5pbXBvcnQgeyBJbnZvaWNlTGlzdENvbnRhaW5lciB9IGZyb20gJ0AvY29tcG9uZW50cy9JbnZvaWNlTGlzdENvbnRhaW5lci9JbnZvaWNlTGlzdENvbnRhaW5lcic7XHJcbmltcG9ydCBQYWdlTGF5b3V0IGZyb20gJ0AvbGF5b3V0cy9QYWdlTGF5b3V0JztcclxuaW1wb3J0IHsgY2FsY3VsYXRlSW52b2ljZVRvdGFsIH0gZnJvbSAnQC91dGlscy9jYWxjdWxhdGVUb3RhbCc7XHJcblxyXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcclxuXHRjb25zdCB7IGludm9pY2VzLCBhZGRJbnZvaWNlIH0gPSB1c2VDb250ZXh0KEludm9pY2VzQ29udGV4dCk7XHJcblx0Y29uc3QgW2ZpbHRlciwgc2V0RmlsdGVyXSA9IHVzZVN0YXRlPFBvc3NpYmxlU3RhdHVzIHwgJyc+KCcnKTtcclxuXHRjb25zdCBbZmlsdGVyZWRJbnZvaWNlcywgc2V0RmlsdGVyZWRJbnZvaWNlc10gPSB1c2VTdGF0ZShpbnZvaWNlcyk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhpbnZvaWNlcyk7XHJcblx0XHRpZiAoZmlsdGVyID09PSAnRHJhZnQnKSB7XHJcblx0XHRcdHNldEZpbHRlcmVkSW52b2ljZXMoaW52b2ljZXMuZmlsdGVyKChpbnZvaWNlKSA9PiBpbnZvaWNlLnN0YXR1cyA9PT0gZmlsdGVyKSk7XHJcblx0XHR9IGVsc2UgaWYgKGZpbHRlciA9PT0gJ1BlbmRpbmcnKSB7XHJcblx0XHRcdHNldEZpbHRlcmVkSW52b2ljZXMoaW52b2ljZXMuZmlsdGVyKChpbnZvaWNlKSA9PiBpbnZvaWNlLnN0YXR1cyA9PT0gZmlsdGVyKSk7XHJcblx0XHR9IGVsc2UgaWYgKGZpbHRlciA9PT0gJ1BhaWQnKSB7XHJcblx0XHRcdHNldEZpbHRlcmVkSW52b2ljZXMoaW52b2ljZXMuZmlsdGVyKChpbnZvaWNlKSA9PiBpbnZvaWNlLnN0YXR1cyA9PT0gZmlsdGVyKSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzZXRGaWx0ZXJlZEludm9pY2VzKGludm9pY2VzKTtcclxuXHRcdH1cclxuXHR9LCBbZmlsdGVyLCBpbnZvaWNlc10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PERyYXdlclxyXG5cdFx0XHRcdGlzRHJhd2VyT3Blbj17aXNEcmF3ZXJPcGVufVxyXG5cdFx0XHRcdHNldERyYXdlck9wZW49e3NldERyYXdlck9wZW59XHJcblx0XHRcdFx0YXJpYUxhYmVsPVwiSW52b2ljZSBFZGl0aW5nIEZvcm0gTW9kYWxcIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PEVkaXRJbnZvaWNlRm9ybSBzZXREcmF3ZXJPcGVuPXtzZXREcmF3ZXJPcGVufSBpbnZvaWNlPXtzZWxlY3RlZEludm9pY2V9IC8+XHJcblx0XHRcdDwvRHJhd2VyPlxyXG5cdFx0XHQ8UGFnZUxheW91dD5cclxuXHRcdFx0XHQ8SGVhZGVyIGludm9pY2VDb3VudD17aW52b2ljZXMubGVuZ3RoID8/IDB9IHNldEZpbHRlcj17c2V0RmlsdGVyfSBmaWx0ZXI9e2ZpbHRlcn0gLz5cclxuXHRcdFx0XHQ8SW52b2ljZUxpc3RDb250YWluZXI+XHJcblx0XHRcdFx0XHR7ZmlsdGVyZWRJbnZvaWNlcy5sZW5ndGggPiAwID8gKFxyXG5cdFx0XHRcdFx0XHRmaWx0ZXJlZEludm9pY2VzLm1hcCgoaW52b2ljZTogSW52b2ljZSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIGtleT17aW52b2ljZS5pZH0gaHJlZj17YC9pbnZvaWNlLyR7aW52b2ljZS5pZH1gfSBwYXNzSHJlZj5cclxuXHRcdFx0XHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8SW52b2ljZUNhcmRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZD17aW52b2ljZS5pZH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkdWVEYXRlPXtpbnZvaWNlLmludm9pY2VfZGF0ZSBhcyBzdHJpbmd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xpZW50TmFtZT17aW52b2ljZS5jbGllbnRfbmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdGF0dXM9e2ludm9pY2Uuc3RhdHVzfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRvdGFsPXtjYWxjdWxhdGVJbnZvaWNlVG90YWwoaW52b2ljZS5pbnZvaWNlX2l0ZW1zKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdCkpXHJcblx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdFx0PFN0eWxlZEVtcHR5U3RhdGVcclxuXHRcdFx0XHRcdFx0XHRcdGhlYWRpbmc9XCJUaGVyZSBpcyBub3RoaW5nIGhlcmVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3JNZXNzYWdlPVwiQ3JlYXRlIGEgbmV3IGludm9pY2UgYnkgY2xpY2tpbmcgdGhlXHJcblx0XHRcdFx0XHROZXcgSW52b2ljZSBidXR0b24gYW5kIGdldCBzdGFydGVkXCJcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHQ8L0ludm9pY2VMaXN0Q29udGFpbmVyPlxyXG5cdFx0XHQ8L1BhZ2VMYXlvdXQ+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuY29uc3QgU3R5bGVkRW1wdHlTdGF0ZSA9IHN0eWxlZChFbXB0eVN0YXRlKWBcclxuXHRtYXJnaW4tdG9wOiA3MXB4O1xyXG5cclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLnRhYmxldEFuZFVwfSB7XHJcblx0XHRtYXJnaW4tdG9wOiAxNTRweDtcclxuXHR9XHJcblxyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMubGFwdG9wQW5kVXB9IHtcclxuXHRcdG1hcmdpbi10b3A6IDc2cHg7XHJcblx0fVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZWQiLCJJbnZvaWNlc0NvbnRleHQiLCJFbXB0eVN0YXRlIiwiSGVhZGVyIiwiSW52b2ljZUNhcmQiLCJJbnZvaWNlTGlzdENvbnRhaW5lciIsIlBhZ2VMYXlvdXQiLCJjYWxjdWxhdGVJbnZvaWNlVG90YWwiLCJIb21lIiwiaW52b2ljZXMiLCJhZGRJbnZvaWNlIiwiZmlsdGVyIiwic2V0RmlsdGVyIiwiZmlsdGVyZWRJbnZvaWNlcyIsInNldEZpbHRlcmVkSW52b2ljZXMiLCJjb25zb2xlIiwibG9nIiwiaW52b2ljZSIsInN0YXR1cyIsImlzRHJhd2VyT3BlbiIsInNldERyYXdlck9wZW4iLCJzZWxlY3RlZEludm9pY2UiLCJsZW5ndGgiLCJtYXAiLCJpZCIsImludm9pY2VfZGF0ZSIsImNsaWVudF9uYW1lIiwiaW52b2ljZV9pdGVtcyIsIlN0eWxlZEVtcHR5U3RhdGUiLCJwIiwidGhlbWUiLCJRVUVSSUVTIiwidGFibGV0QW5kVXAiLCJsYXB0b3BBbmRVcCJdLCJzb3VyY2VSb290IjoiIn0=