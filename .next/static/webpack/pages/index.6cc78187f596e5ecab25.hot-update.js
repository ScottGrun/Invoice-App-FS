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
    setFilteredInvoices(invoices);

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
        lineNumber: 48,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_layouts_PageLayout__WEBPACK_IMPORTED_MODULE_9__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_Home__WEBPACK_IMPORTED_MODULE_6__.Header, {
        invoiceCount: (_invoices$length = invoices.length) !== null && _invoices$length !== void 0 ? _invoices$length : 0,
        setFilter: setFilter,
        filter: filter
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
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
                lineNumber: 57,
                columnNumber: 10
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 9
            }, _this)
          }, invoice.id, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 8
          }, _this);
        }) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(StyledEmptyState, {
            heading: "There is nothing here",
            errorMessage: "Create a new invoice by clicking the\r New Invoice button and get started"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 8
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 7
        }, _this)
      }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmNjNzgxODdmNTk2ZTVlY2FiMjUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsSUFBTWMsSUFBYyxHQUFHLFNBQWpCQSxJQUFpQixHQUFNO0FBQUE7O0FBQUE7O0FBQzVCLG9CQUFpQ2IsaURBQVUsQ0FBQ0ksb0VBQUQsQ0FBM0M7QUFBQSxNQUFRVSxRQUFSLGVBQVFBLFFBQVI7QUFBQSxNQUFrQkMsVUFBbEIsZUFBa0JBLFVBQWxCOztBQUNBLGtCQUE0QmIsK0NBQVEsQ0FBc0IsRUFBdEIsQ0FBcEM7QUFBQSxNQUFPYyxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxtQkFBZ0RmLCtDQUFRLENBQUNZLFFBQUQsQ0FBeEQ7QUFBQSxNQUFPSSxnQkFBUDtBQUFBLE1BQXlCQyxtQkFBekI7O0FBQ0EsbUJBQXNDakIsK0NBQVEsQ0FBQyxJQUFELENBQTlDO0FBQUEsTUFBT2tCLFlBQVA7QUFBQSxNQUFxQkMsYUFBckI7O0FBRUFwQixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZmtCLElBQUFBLG1CQUFtQixDQUFDTCxRQUFELENBQW5COztBQUNBLFFBQUlFLE1BQU0sS0FBSyxPQUFYLElBQXNCRixRQUFRLENBQUNRLE1BQVQsR0FBa0IsQ0FBNUMsRUFBK0M7QUFDOUNILE1BQUFBLG1CQUFtQixDQUFDTCxRQUFRLENBQUNFLE1BQVQsQ0FBZ0IsVUFBQ08sT0FBRDtBQUFBLGVBQWFBLE9BQU8sQ0FBQ0MsTUFBUixLQUFtQlIsTUFBaEM7QUFBQSxPQUFoQixDQUFELENBQW5CO0FBQ0EsS0FGRCxNQUVPLElBQUlBLE1BQU0sS0FBSyxTQUFmLEVBQTBCO0FBQ2hDRyxNQUFBQSxtQkFBbUIsQ0FBQ0wsUUFBUSxDQUFDRSxNQUFULENBQWdCLFVBQUNPLE9BQUQ7QUFBQSxlQUFhQSxPQUFPLENBQUNDLE1BQVIsS0FBbUJSLE1BQWhDO0FBQUEsT0FBaEIsQ0FBRCxDQUFuQjtBQUNBLEtBRk0sTUFFQSxJQUFJQSxNQUFNLEtBQUssTUFBZixFQUF1QjtBQUM3QkcsTUFBQUEsbUJBQW1CLENBQUNMLFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQixVQUFDTyxPQUFEO0FBQUEsZUFBYUEsT0FBTyxDQUFDQyxNQUFSLEtBQW1CUixNQUFoQztBQUFBLE9BQWhCLENBQUQsQ0FBbkI7QUFDQSxLQUZNLE1BRUE7QUFDTkcsTUFBQUEsbUJBQW1CLENBQUNMLFFBQUQsQ0FBbkI7QUFDQTtBQUNELEdBWFEsRUFXTixDQUFDRSxNQUFELEVBQVNGLFFBQVQsQ0FYTSxDQUFUO0FBYUEsc0JBQ0M7QUFBQSw0QkFDQywrREFBQyxzREFBRDtBQUNDLGtCQUFZLEVBQUVNLFlBRGY7QUFFQyxtQkFBYSxFQUFFQyxhQUZoQjtBQUdDLGVBQVMsRUFBQyw0QkFIWDtBQUFBLDZCQUtDLCtEQUFDLDZFQUFEO0FBQWlCLHFCQUFhLEVBQUVBO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFRQywrREFBQyx3REFBRDtBQUFBLDhCQUNDLCtEQUFDLG9EQUFEO0FBQVEsb0JBQVksc0JBQUVQLFFBQVEsQ0FBQ1EsTUFBWCwrREFBcUIsQ0FBekM7QUFBNEMsaUJBQVMsRUFBRUwsU0FBdkQ7QUFBa0UsY0FBTSxFQUFFRDtBQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFFQywrREFBQyx1R0FBRDtBQUFBLGtCQUNFRSxnQkFBZ0IsQ0FBQ0ksTUFBakIsR0FBMEIsQ0FBMUIsR0FDQUosZ0JBQWdCLENBQUNPLEdBQWpCLENBQXFCLFVBQUNGLE9BQUQ7QUFBQSw4QkFDcEIsK0RBQUMsa0RBQUQ7QUFBdUIsZ0JBQUkscUJBQWNBLE9BQU8sQ0FBQ0csRUFBdEIsQ0FBM0I7QUFBdUQsb0JBQVEsTUFBL0Q7QUFBQSxtQ0FDQztBQUFBLHFDQUNDLCtEQUFDLDRFQUFEO0FBQ0Msa0JBQUUsRUFBRUgsT0FBTyxDQUFDRyxFQURiO0FBRUMsdUJBQU8sRUFBRUgsT0FBTyxDQUFDSSxZQUZsQjtBQUdDLDBCQUFVLEVBQUVKLE9BQU8sQ0FBQ0ssV0FIckI7QUFJQyxzQkFBTSxFQUFFTCxPQUFPLENBQUNDLE1BSmpCO0FBS0MscUJBQUssRUFBRVosNkVBQXFCLENBQUNXLE9BQU8sQ0FBQ00sYUFBVDtBQUw3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELGFBQVdOLE9BQU8sQ0FBQ0csRUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEb0I7QUFBQSxTQUFyQixDQURBLGdCQWVBO0FBQUEsaUNBQ0MsK0RBQUMsZ0JBQUQ7QUFDQyxtQkFBTyxFQUFDLHVCQURUO0FBRUMsd0JBQVksRUFBQztBQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRDtBQUFBLGtCQUREO0FBdUNBLENBMUREOztHQUFNYjs7S0FBQUE7QUE0RE4sSUFBTWlCLGdCQUFnQixHQUFHM0IsMkRBQU0sQ0FBQ0csOERBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxvRkFHWixVQUFDeUIsQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxPQUFSLENBQWdCQyxXQUF2QjtBQUFBLENBSFksRUFPWixVQUFDSCxDQUFEO0FBQUEsU0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLE9BQVIsQ0FBZ0JFLFdBQXZCO0FBQUEsQ0FQWSxDQUF0QjtNQUFNTDtBQVlOLCtEQUFlakIsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCB7IEludm9pY2VzQ29udGV4dCB9IGZyb20gJ2NvbnRleHQvSW52b2ljZXNDb250ZXh0JztcclxuXHJcbmltcG9ydCB7IFBvc3NpYmxlU3RhdHVzIH0gZnJvbSAnLi4vY29uZmlnL1Bvc3NpYmxlU3RhdHVzJztcclxuaW1wb3J0IHsgZGVtb0ludm9pY2VzRGF0YSB9IGZyb20gJy4uL2RhdGEvZGVtbyc7XHJcbmltcG9ydCB7IEludm9pY2UgfSBmcm9tICcuLi90eXBlcyc7XHJcblxyXG5pbXBvcnQgeyBEcmF3ZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvRHJhd2VyJztcclxuaW1wb3J0IHsgRW1wdHlTdGF0ZSB9IGZyb20gJ0AvY29tcG9uZW50cy9FbXB0eVN0YXRlJztcclxuaW1wb3J0IHsgRWRpdEludm9pY2VGb3JtIH0gZnJvbSAnQC9jb21wb25lbnRzL0Zvcm0vRWRpdEludm9pY2VGb3JtJztcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnQC9jb21wb25lbnRzL0hvbWUnO1xyXG5pbXBvcnQgeyBJbnZvaWNlQ2FyZCB9IGZyb20gJ0AvY29tcG9uZW50cy9JbnZvaWNlQ2FyZC9JbnZvaWNlQ2FyZCc7XHJcbmltcG9ydCB7IEludm9pY2VMaXN0Q29udGFpbmVyIH0gZnJvbSAnQC9jb21wb25lbnRzL0ludm9pY2VMaXN0Q29udGFpbmVyL0ludm9pY2VMaXN0Q29udGFpbmVyJztcclxuaW1wb3J0IFBhZ2VMYXlvdXQgZnJvbSAnQC9sYXlvdXRzL1BhZ2VMYXlvdXQnO1xyXG5pbXBvcnQgeyBjYWxjdWxhdGVJbnZvaWNlVG90YWwgfSBmcm9tICdAL3V0aWxzL2NhbGN1bGF0ZVRvdGFsJztcclxuXHJcbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xyXG5cdGNvbnN0IHsgaW52b2ljZXMsIGFkZEludm9pY2UgfSA9IHVzZUNvbnRleHQoSW52b2ljZXNDb250ZXh0KTtcclxuXHRjb25zdCBbZmlsdGVyLCBzZXRGaWx0ZXJdID0gdXNlU3RhdGU8UG9zc2libGVTdGF0dXMgfCAnJz4oJycpO1xyXG5cdGNvbnN0IFtmaWx0ZXJlZEludm9pY2VzLCBzZXRGaWx0ZXJlZEludm9pY2VzXSA9IHVzZVN0YXRlKGludm9pY2VzKTtcclxuXHRjb25zdCBbaXNEcmF3ZXJPcGVuLCBzZXREcmF3ZXJPcGVuXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0c2V0RmlsdGVyZWRJbnZvaWNlcyhpbnZvaWNlcyk7XHJcblx0XHRpZiAoZmlsdGVyID09PSAnRHJhZnQnICYmIGludm9pY2VzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0c2V0RmlsdGVyZWRJbnZvaWNlcyhpbnZvaWNlcy5maWx0ZXIoKGludm9pY2UpID0+IGludm9pY2Uuc3RhdHVzID09PSBmaWx0ZXIpKTtcclxuXHRcdH0gZWxzZSBpZiAoZmlsdGVyID09PSAnUGVuZGluZycpIHtcclxuXHRcdFx0c2V0RmlsdGVyZWRJbnZvaWNlcyhpbnZvaWNlcy5maWx0ZXIoKGludm9pY2UpID0+IGludm9pY2Uuc3RhdHVzID09PSBmaWx0ZXIpKTtcclxuXHRcdH0gZWxzZSBpZiAoZmlsdGVyID09PSAnUGFpZCcpIHtcclxuXHRcdFx0c2V0RmlsdGVyZWRJbnZvaWNlcyhpbnZvaWNlcy5maWx0ZXIoKGludm9pY2UpID0+IGludm9pY2Uuc3RhdHVzID09PSBmaWx0ZXIpKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNldEZpbHRlcmVkSW52b2ljZXMoaW52b2ljZXMpO1xyXG5cdFx0fVxyXG5cdH0sIFtmaWx0ZXIsIGludm9pY2VzXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8RHJhd2VyXHJcblx0XHRcdFx0aXNEcmF3ZXJPcGVuPXtpc0RyYXdlck9wZW59XHJcblx0XHRcdFx0c2V0RHJhd2VyT3Blbj17c2V0RHJhd2VyT3Blbn1cclxuXHRcdFx0XHRhcmlhTGFiZWw9XCJJbnZvaWNlIEVkaXRpbmcgRm9ybSBNb2RhbFwiXHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8RWRpdEludm9pY2VGb3JtIHNldERyYXdlck9wZW49e3NldERyYXdlck9wZW59IC8+XHJcblx0XHRcdDwvRHJhd2VyPlxyXG5cdFx0XHQ8UGFnZUxheW91dD5cclxuXHRcdFx0XHQ8SGVhZGVyIGludm9pY2VDb3VudD17aW52b2ljZXMubGVuZ3RoID8/IDB9IHNldEZpbHRlcj17c2V0RmlsdGVyfSBmaWx0ZXI9e2ZpbHRlcn0gLz5cclxuXHRcdFx0XHQ8SW52b2ljZUxpc3RDb250YWluZXI+XHJcblx0XHRcdFx0XHR7ZmlsdGVyZWRJbnZvaWNlcy5sZW5ndGggPiAwID8gKFxyXG5cdFx0XHRcdFx0XHRmaWx0ZXJlZEludm9pY2VzLm1hcCgoaW52b2ljZTogSW52b2ljZSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIGtleT17aW52b2ljZS5pZH0gaHJlZj17YC9pbnZvaWNlLyR7aW52b2ljZS5pZH1gfSBwYXNzSHJlZj5cclxuXHRcdFx0XHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8SW52b2ljZUNhcmRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZD17aW52b2ljZS5pZH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkdWVEYXRlPXtpbnZvaWNlLmludm9pY2VfZGF0ZSBhcyBzdHJpbmd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xpZW50TmFtZT17aW52b2ljZS5jbGllbnRfbmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdGF0dXM9e2ludm9pY2Uuc3RhdHVzfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRvdGFsPXtjYWxjdWxhdGVJbnZvaWNlVG90YWwoaW52b2ljZS5pbnZvaWNlX2l0ZW1zKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdCkpXHJcblx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdFx0PFN0eWxlZEVtcHR5U3RhdGVcclxuXHRcdFx0XHRcdFx0XHRcdGhlYWRpbmc9XCJUaGVyZSBpcyBub3RoaW5nIGhlcmVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3JNZXNzYWdlPVwiQ3JlYXRlIGEgbmV3IGludm9pY2UgYnkgY2xpY2tpbmcgdGhlXHJcblx0XHRcdFx0XHROZXcgSW52b2ljZSBidXR0b24gYW5kIGdldCBzdGFydGVkXCJcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHQ8L0ludm9pY2VMaXN0Q29udGFpbmVyPlxyXG5cdFx0XHQ8L1BhZ2VMYXlvdXQ+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuY29uc3QgU3R5bGVkRW1wdHlTdGF0ZSA9IHN0eWxlZChFbXB0eVN0YXRlKWBcclxuXHRtYXJnaW4tdG9wOiA3MXB4O1xyXG5cclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLnRhYmxldEFuZFVwfSB7XHJcblx0XHRtYXJnaW4tdG9wOiAxNTRweDtcclxuXHR9XHJcblxyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMubGFwdG9wQW5kVXB9IHtcclxuXHRcdG1hcmdpbi10b3A6IDc2cHg7XHJcblx0fVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZWQiLCJJbnZvaWNlc0NvbnRleHQiLCJEcmF3ZXIiLCJFbXB0eVN0YXRlIiwiRWRpdEludm9pY2VGb3JtIiwiSGVhZGVyIiwiSW52b2ljZUNhcmQiLCJJbnZvaWNlTGlzdENvbnRhaW5lciIsIlBhZ2VMYXlvdXQiLCJjYWxjdWxhdGVJbnZvaWNlVG90YWwiLCJIb21lIiwiaW52b2ljZXMiLCJhZGRJbnZvaWNlIiwiZmlsdGVyIiwic2V0RmlsdGVyIiwiZmlsdGVyZWRJbnZvaWNlcyIsInNldEZpbHRlcmVkSW52b2ljZXMiLCJpc0RyYXdlck9wZW4iLCJzZXREcmF3ZXJPcGVuIiwibGVuZ3RoIiwiaW52b2ljZSIsInN0YXR1cyIsIm1hcCIsImlkIiwiaW52b2ljZV9kYXRlIiwiY2xpZW50X25hbWUiLCJpbnZvaWNlX2l0ZW1zIiwiU3R5bGVkRW1wdHlTdGF0ZSIsInAiLCJ0aGVtZSIsIlFVRVJJRVMiLCJ0YWJsZXRBbmRVcCIsImxhcHRvcEFuZFVwIl0sInNvdXJjZVJvb3QiOiIifQ==