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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWUzNDcyN2VkZDI0NmE1MzU0NWIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsSUFBTWMsSUFBYyxHQUFHLFNBQWpCQSxJQUFpQixHQUFNO0FBQUE7O0FBQUE7O0FBQzVCLG9CQUFpQ2IsaURBQVUsQ0FBQ0ksb0VBQUQsQ0FBM0M7QUFBQSxNQUFRVSxRQUFSLGVBQVFBLFFBQVI7QUFBQSxNQUFrQkMsVUFBbEIsZUFBa0JBLFVBQWxCOztBQUNBLGtCQUE0QmIsK0NBQVEsQ0FBc0IsRUFBdEIsQ0FBcEM7QUFBQSxNQUFPYyxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxtQkFBZ0RmLCtDQUFRLENBQUNZLFFBQUQsQ0FBeEQ7QUFBQSxNQUFPSSxnQkFBUDtBQUFBLE1BQXlCQyxtQkFBekI7O0FBQ0EsbUJBQXNDakIsK0NBQVEsQ0FBQyxJQUFELENBQTlDO0FBQUEsTUFBT2tCLFlBQVA7QUFBQSxNQUFxQkMsYUFBckI7O0FBRUFwQixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZnFCLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVCxRQUFaOztBQUNBLFFBQUlFLE1BQU0sS0FBSyxPQUFYLElBQXNCRixRQUFRLENBQUNVLE1BQVQsR0FBa0IsQ0FBNUMsRUFBK0M7QUFDOUNMLE1BQUFBLG1CQUFtQixDQUFDTCxRQUFRLENBQUNFLE1BQVQsQ0FBZ0IsVUFBQ1MsT0FBRDtBQUFBLGVBQWFBLE9BQU8sQ0FBQ0MsTUFBUixLQUFtQlYsTUFBaEM7QUFBQSxPQUFoQixDQUFELENBQW5CO0FBQ0EsS0FGRCxNQUVPLElBQUlBLE1BQU0sS0FBSyxTQUFmLEVBQTBCO0FBQ2hDRyxNQUFBQSxtQkFBbUIsQ0FBQ0wsUUFBUSxDQUFDRSxNQUFULENBQWdCLFVBQUNTLE9BQUQ7QUFBQSxlQUFhQSxPQUFPLENBQUNDLE1BQVIsS0FBbUJWLE1BQWhDO0FBQUEsT0FBaEIsQ0FBRCxDQUFuQjtBQUNBLEtBRk0sTUFFQSxJQUFJQSxNQUFNLEtBQUssTUFBZixFQUF1QjtBQUM3QkcsTUFBQUEsbUJBQW1CLENBQUNMLFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQixVQUFDUyxPQUFEO0FBQUEsZUFBYUEsT0FBTyxDQUFDQyxNQUFSLEtBQW1CVixNQUFoQztBQUFBLE9BQWhCLENBQUQsQ0FBbkI7QUFDQSxLQUZNLE1BRUE7QUFDTkcsTUFBQUEsbUJBQW1CLENBQUNMLFFBQUQsQ0FBbkI7QUFDQTtBQUNELEdBWFEsRUFXTixDQUFDRSxNQUFELEVBQVNGLFFBQVQsQ0FYTSxDQUFUO0FBYUEsc0JBQ0M7QUFBQSw0QkFDQywrREFBQyxzREFBRDtBQUNDLGtCQUFZLEVBQUVNLFlBRGY7QUFFQyxtQkFBYSxFQUFFQyxhQUZoQjtBQUdDLGVBQVMsRUFBQyw0QkFIWDtBQUFBLDZCQUtDLCtEQUFDLDZFQUFEO0FBQWlCLHFCQUFhLEVBQUVBO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFRQywrREFBQyx3REFBRDtBQUFBLDhCQUNDLCtEQUFDLG9EQUFEO0FBQVEsb0JBQVksc0JBQUVQLFFBQVEsQ0FBQ1UsTUFBWCwrREFBcUIsQ0FBekM7QUFBNEMsaUJBQVMsRUFBRVAsU0FBdkQ7QUFBa0UsY0FBTSxFQUFFRDtBQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFFQywrREFBQyx1R0FBRDtBQUFBLGtCQUNFRSxnQkFBZ0IsQ0FBQ00sTUFBakIsR0FBMEIsQ0FBMUIsR0FDQU4sZ0JBQWdCLENBQUNTLEdBQWpCLENBQXFCLFVBQUNGLE9BQUQ7QUFBQSw4QkFDcEIsK0RBQUMsa0RBQUQ7QUFBdUIsZ0JBQUkscUJBQWNBLE9BQU8sQ0FBQ0csRUFBdEIsQ0FBM0I7QUFBdUQsb0JBQVEsTUFBL0Q7QUFBQSxtQ0FDQztBQUFBLHFDQUNDLCtEQUFDLDRFQUFEO0FBQ0Msa0JBQUUsRUFBRUgsT0FBTyxDQUFDRyxFQURiO0FBRUMsdUJBQU8sRUFBRUgsT0FBTyxDQUFDSSxZQUZsQjtBQUdDLDBCQUFVLEVBQUVKLE9BQU8sQ0FBQ0ssV0FIckI7QUFJQyxzQkFBTSxFQUFFTCxPQUFPLENBQUNDLE1BSmpCO0FBS0MscUJBQUssRUFBRWQsNkVBQXFCLENBQUNhLE9BQU8sQ0FBQ00sYUFBVDtBQUw3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELGFBQVdOLE9BQU8sQ0FBQ0csRUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEb0I7QUFBQSxTQUFyQixDQURBLGdCQWVBO0FBQUEsaUNBQ0MsK0RBQUMsZ0JBQUQ7QUFDQyxtQkFBTyxFQUFDLHVCQURUO0FBRUMsd0JBQVksRUFBQztBQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRDtBQUFBLGtCQUREO0FBdUNBLENBMUREOztHQUFNZjs7S0FBQUE7QUE0RE4sSUFBTW1CLGdCQUFnQixHQUFHN0IsMkRBQU0sQ0FBQ0csOERBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxvRkFHWixVQUFDMkIsQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxPQUFSLENBQWdCQyxXQUF2QjtBQUFBLENBSFksRUFPWixVQUFDSCxDQUFEO0FBQUEsU0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLE9BQVIsQ0FBZ0JFLFdBQXZCO0FBQUEsQ0FQWSxDQUF0QjtNQUFNTDtBQVlOLCtEQUFlbkIsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCB7IEludm9pY2VzQ29udGV4dCB9IGZyb20gJ2NvbnRleHQvSW52b2ljZXNDb250ZXh0JztcclxuXHJcbmltcG9ydCB7IFBvc3NpYmxlU3RhdHVzIH0gZnJvbSAnLi4vY29uZmlnL1Bvc3NpYmxlU3RhdHVzJztcclxuaW1wb3J0IHsgZGVtb0ludm9pY2VzRGF0YSB9IGZyb20gJy4uL2RhdGEvZGVtbyc7XHJcbmltcG9ydCB7IEludm9pY2UgfSBmcm9tICcuLi90eXBlcyc7XHJcblxyXG5pbXBvcnQgeyBEcmF3ZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvRHJhd2VyJztcclxuaW1wb3J0IHsgRW1wdHlTdGF0ZSB9IGZyb20gJ0AvY29tcG9uZW50cy9FbXB0eVN0YXRlJztcclxuaW1wb3J0IHsgRWRpdEludm9pY2VGb3JtIH0gZnJvbSAnQC9jb21wb25lbnRzL0Zvcm0vRWRpdEludm9pY2VGb3JtJztcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnQC9jb21wb25lbnRzL0hvbWUnO1xyXG5pbXBvcnQgeyBJbnZvaWNlQ2FyZCB9IGZyb20gJ0AvY29tcG9uZW50cy9JbnZvaWNlQ2FyZC9JbnZvaWNlQ2FyZCc7XHJcbmltcG9ydCB7IEludm9pY2VMaXN0Q29udGFpbmVyIH0gZnJvbSAnQC9jb21wb25lbnRzL0ludm9pY2VMaXN0Q29udGFpbmVyL0ludm9pY2VMaXN0Q29udGFpbmVyJztcclxuaW1wb3J0IFBhZ2VMYXlvdXQgZnJvbSAnQC9sYXlvdXRzL1BhZ2VMYXlvdXQnO1xyXG5pbXBvcnQgeyBjYWxjdWxhdGVJbnZvaWNlVG90YWwgfSBmcm9tICdAL3V0aWxzL2NhbGN1bGF0ZVRvdGFsJztcclxuXHJcbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xyXG5cdGNvbnN0IHsgaW52b2ljZXMsIGFkZEludm9pY2UgfSA9IHVzZUNvbnRleHQoSW52b2ljZXNDb250ZXh0KTtcclxuXHRjb25zdCBbZmlsdGVyLCBzZXRGaWx0ZXJdID0gdXNlU3RhdGU8UG9zc2libGVTdGF0dXMgfCAnJz4oJycpO1xyXG5cdGNvbnN0IFtmaWx0ZXJlZEludm9pY2VzLCBzZXRGaWx0ZXJlZEludm9pY2VzXSA9IHVzZVN0YXRlKGludm9pY2VzKTtcclxuXHRjb25zdCBbaXNEcmF3ZXJPcGVuLCBzZXREcmF3ZXJPcGVuXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coaW52b2ljZXMpO1xyXG5cdFx0aWYgKGZpbHRlciA9PT0gJ0RyYWZ0JyAmJiBpbnZvaWNlcy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdHNldEZpbHRlcmVkSW52b2ljZXMoaW52b2ljZXMuZmlsdGVyKChpbnZvaWNlKSA9PiBpbnZvaWNlLnN0YXR1cyA9PT0gZmlsdGVyKSk7XHJcblx0XHR9IGVsc2UgaWYgKGZpbHRlciA9PT0gJ1BlbmRpbmcnKSB7XHJcblx0XHRcdHNldEZpbHRlcmVkSW52b2ljZXMoaW52b2ljZXMuZmlsdGVyKChpbnZvaWNlKSA9PiBpbnZvaWNlLnN0YXR1cyA9PT0gZmlsdGVyKSk7XHJcblx0XHR9IGVsc2UgaWYgKGZpbHRlciA9PT0gJ1BhaWQnKSB7XHJcblx0XHRcdHNldEZpbHRlcmVkSW52b2ljZXMoaW52b2ljZXMuZmlsdGVyKChpbnZvaWNlKSA9PiBpbnZvaWNlLnN0YXR1cyA9PT0gZmlsdGVyKSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzZXRGaWx0ZXJlZEludm9pY2VzKGludm9pY2VzKTtcclxuXHRcdH1cclxuXHR9LCBbZmlsdGVyLCBpbnZvaWNlc10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PERyYXdlclxyXG5cdFx0XHRcdGlzRHJhd2VyT3Blbj17aXNEcmF3ZXJPcGVufVxyXG5cdFx0XHRcdHNldERyYXdlck9wZW49e3NldERyYXdlck9wZW59XHJcblx0XHRcdFx0YXJpYUxhYmVsPVwiSW52b2ljZSBFZGl0aW5nIEZvcm0gTW9kYWxcIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PEVkaXRJbnZvaWNlRm9ybSBzZXREcmF3ZXJPcGVuPXtzZXREcmF3ZXJPcGVufSAvPlxyXG5cdFx0XHQ8L0RyYXdlcj5cclxuXHRcdFx0PFBhZ2VMYXlvdXQ+XHJcblx0XHRcdFx0PEhlYWRlciBpbnZvaWNlQ291bnQ9e2ludm9pY2VzLmxlbmd0aCA/PyAwfSBzZXRGaWx0ZXI9e3NldEZpbHRlcn0gZmlsdGVyPXtmaWx0ZXJ9IC8+XHJcblx0XHRcdFx0PEludm9pY2VMaXN0Q29udGFpbmVyPlxyXG5cdFx0XHRcdFx0e2ZpbHRlcmVkSW52b2ljZXMubGVuZ3RoID4gMCA/IChcclxuXHRcdFx0XHRcdFx0ZmlsdGVyZWRJbnZvaWNlcy5tYXAoKGludm9pY2U6IEludm9pY2UpID0+IChcclxuXHRcdFx0XHRcdFx0XHQ8TGluayBrZXk9e2ludm9pY2UuaWR9IGhyZWY9e2AvaW52b2ljZS8ke2ludm9pY2UuaWR9YH0gcGFzc0hyZWY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEludm9pY2VDYXJkXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9e2ludm9pY2UuaWR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZHVlRGF0ZT17aW52b2ljZS5pbnZvaWNlX2RhdGUgYXMgc3RyaW5nfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsaWVudE5hbWU9e2ludm9pY2UuY2xpZW50X25hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3RhdHVzPXtpbnZvaWNlLnN0YXR1c31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0b3RhbD17Y2FsY3VsYXRlSW52b2ljZVRvdGFsKGludm9pY2UuaW52b2ljZV9pdGVtcyl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHQpKVxyXG5cdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdDxTdHlsZWRFbXB0eVN0YXRlXHJcblx0XHRcdFx0XHRcdFx0XHRoZWFkaW5nPVwiVGhlcmUgaXMgbm90aGluZyBoZXJlXCJcclxuXHRcdFx0XHRcdFx0XHRcdGVycm9yTWVzc2FnZT1cIkNyZWF0ZSBhIG5ldyBpbnZvaWNlIGJ5IGNsaWNraW5nIHRoZVxyXG5cdFx0XHRcdFx0TmV3IEludm9pY2UgYnV0dG9uIGFuZCBnZXQgc3RhcnRlZFwiXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0PC9JbnZvaWNlTGlzdENvbnRhaW5lcj5cclxuXHRcdFx0PC9QYWdlTGF5b3V0PlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmNvbnN0IFN0eWxlZEVtcHR5U3RhdGUgPSBzdHlsZWQoRW1wdHlTdGF0ZSlgXHJcblx0bWFyZ2luLXRvcDogNzFweDtcclxuXHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0bWFyZ2luLXRvcDogMTU0cHg7XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLmxhcHRvcEFuZFVwfSB7XHJcblx0XHRtYXJnaW4tdG9wOiA3NnB4O1xyXG5cdH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVkIiwiSW52b2ljZXNDb250ZXh0IiwiRHJhd2VyIiwiRW1wdHlTdGF0ZSIsIkVkaXRJbnZvaWNlRm9ybSIsIkhlYWRlciIsIkludm9pY2VDYXJkIiwiSW52b2ljZUxpc3RDb250YWluZXIiLCJQYWdlTGF5b3V0IiwiY2FsY3VsYXRlSW52b2ljZVRvdGFsIiwiSG9tZSIsImludm9pY2VzIiwiYWRkSW52b2ljZSIsImZpbHRlciIsInNldEZpbHRlciIsImZpbHRlcmVkSW52b2ljZXMiLCJzZXRGaWx0ZXJlZEludm9pY2VzIiwiaXNEcmF3ZXJPcGVuIiwic2V0RHJhd2VyT3BlbiIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJpbnZvaWNlIiwic3RhdHVzIiwibWFwIiwiaWQiLCJpbnZvaWNlX2RhdGUiLCJjbGllbnRfbmFtZSIsImludm9pY2VfaXRlbXMiLCJTdHlsZWRFbXB0eVN0YXRlIiwicCIsInRoZW1lIiwiUVVFUklFUyIsInRhYmxldEFuZFVwIiwibGFwdG9wQW5kVXAiXSwic291cmNlUm9vdCI6IiJ9