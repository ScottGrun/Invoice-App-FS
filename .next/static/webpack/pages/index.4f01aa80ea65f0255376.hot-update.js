self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Drawer/Drawer.tsx":
/*!**************************************!*\
  !*** ./components/Drawer/Drawer.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Drawer": function() { return /* binding */ Drawer; }
/* harmony export */ });
/* harmony import */ var _reach_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/dialog */ "./node_modules/@reach/dialog/dist/reach-dialog.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _reach_dialog_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reach/dialog/styles.css */ "./node_modules/@reach/dialog/styles.css");
/* harmony import */ var _reach_dialog_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reach_dialog_styles_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\scott\\Documents\\GitHub\\Invoice-App-FS\\components\\Drawer\\Drawer.tsx",
    _this = undefined;





var Drawer = function Drawer(_ref) {
  var children = _ref.children,
      isDrawerOpen = _ref.isDrawerOpen,
      setDrawerOpen = _ref.setDrawerOpen,
      ariaLabel = _ref.ariaLabel;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_reach_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogOverlay, {
    isOpen: isDrawerOpen,
    onDismiss: function onDismiss() {
      return setDrawerOpen(false);
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledDialogContent, {
      isOpen: isDrawerOpen,
      onDismiss: function onDismiss() {
        return setDrawerOpen(false);
      },
      "aria-label": ariaLabel,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 3
  }, _this);
};
_c = Drawer;
var StyledDialogContent = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.default)(_reach_dialog__WEBPACK_IMPORTED_MODULE_2__.default).withConfig({
  displayName: "Drawer__StyledDialogContent",
  componentId: "sc-13y4ts5-0"
})(["margin:0;padding:0;padding-left:24px;padding-top:80px;width:100%;height:100%;background-color:", ";@media ", "{width:616px;padding-left:56px;}@media ", "{width:719px;padding-left:159px;padding-top:0px;}"], function (p) {
  return p.theme.COLORS.white;
}, function (p) {
  return p.theme.QUERIES.tabletAndUp;
}, function (p) {
  return p.theme.QUERIES.laptopAndUp;
});
_c2 = StyledDialogContent;

var _c, _c2;

$RefreshReg$(_c, "Drawer");
$RefreshReg$(_c2, "StyledDialogContent");

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


/***/ }),

/***/ "./components/Drawer/index.ts":
/*!************************************!*\
  !*** ./components/Drawer/index.ts ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Drawer": function() { return /* reexport safe */ _Drawer__WEBPACK_IMPORTED_MODULE_0__.Drawer; }
/* harmony export */ });
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Drawer */ "./components/Drawer/Drawer.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


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


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var context_InvoicesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! context/InvoicesContext */ "./context/InvoicesContext.tsx");
/* harmony import */ var _components_Drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Drawer */ "./components/Drawer/index.ts");
/* harmony import */ var _components_EmptyState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/EmptyState */ "./components/EmptyState/index.ts");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Home */ "./components/Home/index.ts");
/* harmony import */ var _components_InvoiceCard_InvoiceCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/InvoiceCard/InvoiceCard */ "./components/InvoiceCard/InvoiceCard.tsx");
/* harmony import */ var _components_InvoiceListContainer_InvoiceListContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/InvoiceListContainer/InvoiceListContainer */ "./components/InvoiceListContainer/InvoiceListContainer.tsx");
/* harmony import */ var _layouts_PageLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/layouts/PageLayout */ "./layouts/PageLayout.tsx");
/* harmony import */ var _utils_calculateTotal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/calculateTotal */ "./utils/calculateTotal.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_Drawer__WEBPACK_IMPORTED_MODULE_3__.Drawer, {
      isDrawerOpen: isDrawerOpen,
      setDrawerOpen: setDrawerOpen,
      ariaLabel: "Invoice Editing Form Modal",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(EditInvoiceForm, {
        setDrawerOpen: setDrawerOpen,
        invoice: selectedInvoice
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_layouts_PageLayout__WEBPACK_IMPORTED_MODULE_8__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_Home__WEBPACK_IMPORTED_MODULE_5__.Header, {
        invoiceCount: (_invoices$length = invoices.length) !== null && _invoices$length !== void 0 ? _invoices$length : 0,
        setFilter: setFilter,
        filter: filter
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_InvoiceListContainer_InvoiceListContainer__WEBPACK_IMPORTED_MODULE_7__.InvoiceListContainer, {
        children: filteredInvoices.length > 0 ? filteredInvoices.map(function (invoice) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
            href: "/invoice/".concat(invoice.id),
            passHref: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_InvoiceCard_InvoiceCard__WEBPACK_IMPORTED_MODULE_6__.InvoiceCard, {
                id: invoice.id,
                dueDate: invoice.invoice_date,
                clientName: invoice.client_name,
                status: invoice.status,
                total: (0,_utils_calculateTotal__WEBPACK_IMPORTED_MODULE_9__.calculateInvoiceTotal)(invoice.invoice_items)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 10
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 9
            }, _this)
          }, invoice.id, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 8
          }, _this);
        }) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(StyledEmptyState, {
            heading: "There is nothing here",
            errorMessage: "Create a new invoice by clicking the\r New Invoice button and get started"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 8
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 7
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 4
    }, _this)]
  }, void 0, true);
};

_s(Home, "BdFtjIs/OXxmjz4jrE32TuCTBAE=");

_c = Home;
var StyledEmptyState = (0,styled_components__WEBPACK_IMPORTED_MODULE_11__.default)(_components_EmptyState__WEBPACK_IMPORTED_MODULE_4__.EmptyState).withConfig({
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


/***/ }),

/***/ "./node_modules/@reach/dialog/dist/reach-dialog.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@reach/dialog/dist/reach-dialog.esm.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dialog": function() { return /* binding */ Dialog; },
/* harmony export */   "DialogContent": function() { return /* binding */ DialogContent; },
/* harmony export */   "DialogOverlay": function() { return /* binding */ DialogOverlay; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @reach/portal */ "./node_modules/@reach/portal/dist/reach-portal.esm.js");
/* harmony import */ var _reach_utils_owner_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reach/utils/owner-document */ "./node_modules/@reach/utils/owner-document/dist/reach-utils-owner-document.esm.js");
/* harmony import */ var _reach_utils_type_check__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/utils/type-check */ "./node_modules/@reach/utils/type-check/dist/reach-utils-type-check.esm.js");
/* harmony import */ var _reach_utils_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reach/utils/noop */ "./node_modules/@reach/utils/noop/dist/reach-utils-noop.esm.js");
/* harmony import */ var _reach_utils_dev_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reach/utils/dev-utils */ "./node_modules/@reach/utils/dev-utils/dist/reach-utils-dev-utils.esm.js");
/* harmony import */ var _reach_utils_compose_refs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @reach/utils/compose-refs */ "./node_modules/@reach/utils/compose-refs/dist/reach-utils-compose-refs.esm.js");
/* harmony import */ var _reach_utils_compose_event_handlers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @reach/utils/compose-event-handlers */ "./node_modules/@reach/utils/compose-event-handlers/dist/reach-utils-compose-event-handlers.esm.js");
/* harmony import */ var react_focus_lock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-focus-lock */ "./node_modules/react-focus-lock/dist/es2015/index.js");
/* harmony import */ var react_remove_scroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-remove-scroll */ "./node_modules/react-remove-scroll/dist/es2015/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);












function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _excluded = ["as", "isOpen"],
    _excluded2 = ["allowPinchZoom", "as", "dangerouslyBypassFocusLock", "dangerouslyBypassScrollLock", "initialFocusRef", "onClick", "onDismiss", "onKeyDown", "onMouseDown", "unstable_lockFocusAcrossFrames"],
    _excluded3 = ["as", "onClick", "onKeyDown"],
    _excluded4 = ["allowPinchZoom", "initialFocusRef", "isOpen", "onDismiss"];
var overlayPropTypes = {
  allowPinchZoom: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  dangerouslyBypassFocusLock: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  dangerouslyBypassScrollLock: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  // TODO:
  initialFocusRef: function initialFocusRef() {
    return null;
  },
  onDismiss: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func)
}; ////////////////////////////////////////////////////////////////////////////////

/**
 * DialogOverlay
 *
 * Low-level component if you need more control over the styles or rendering of
 * the dialog overlay.
 *
 * Note: You must render a `DialogContent` inside.
 *
 * @see Docs https://reach.tech/dialog#dialogoverlay
 */

var DialogOverlay = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function DialogOverlay(_ref, forwardedRef) {
  var _ref$as = _ref.as,
      Comp = _ref$as === void 0 ? "div" : _ref$as,
      _ref$isOpen = _ref.isOpen,
      isOpen = _ref$isOpen === void 0 ? true : _ref$isOpen,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  (0,_reach_utils_dev_utils__WEBPACK_IMPORTED_MODULE_4__.useCheckStyles)("dialog"); // We want to ignore the immediate focus of a tooltip so it doesn't pop
  // up again when the menu closes, only pops up when focus returns again
  // to the tooltip (like native OS tooltips).

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isOpen) {
      // @ts-ignore
      window.__REACH_DISABLE_TOOLTIPS = true;
    } else {
      window.requestAnimationFrame(function () {
        // Wait a frame so that this doesn't fire before tooltip does
        // @ts-ignore
        window.__REACH_DISABLE_TOOLTIPS = false;
      });
    }
  }, [isOpen]);
  return isOpen ? /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reach_portal__WEBPACK_IMPORTED_MODULE_8__.Portal, {
    "data-reach-dialog-wrapper": ""
  }, /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DialogInner, _extends({
    ref: forwardedRef,
    as: Comp
  }, props))) : null;
});

if (true) {
  DialogOverlay.displayName = "DialogOverlay";
  DialogOverlay.propTypes = /*#__PURE__*/_extends({}, overlayPropTypes, {
    isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool)
  });
}

////////////////////////////////////////////////////////////////////////////////

/**
 * DialogInner
 */
var DialogInner = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function DialogInner(_ref2, forwardedRef) {
  var allowPinchZoom = _ref2.allowPinchZoom,
      _ref2$as = _ref2.as,
      Comp = _ref2$as === void 0 ? "div" : _ref2$as,
      _ref2$dangerouslyBypa = _ref2.dangerouslyBypassFocusLock,
      dangerouslyBypassFocusLock = _ref2$dangerouslyBypa === void 0 ? false : _ref2$dangerouslyBypa,
      _ref2$dangerouslyBypa2 = _ref2.dangerouslyBypassScrollLock,
      dangerouslyBypassScrollLock = _ref2$dangerouslyBypa2 === void 0 ? false : _ref2$dangerouslyBypa2,
      initialFocusRef = _ref2.initialFocusRef,
      onClick = _ref2.onClick,
      _ref2$onDismiss = _ref2.onDismiss,
      onDismiss = _ref2$onDismiss === void 0 ? _reach_utils_noop__WEBPACK_IMPORTED_MODULE_3__.noop : _ref2$onDismiss,
      onKeyDown = _ref2.onKeyDown,
      onMouseDown = _ref2.onMouseDown,
      unstable_lockFocusAcrossFrames = _ref2.unstable_lockFocusAcrossFrames,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  var lockFocusAcrossFramesIsDefined = unstable_lockFocusAcrossFrames !== undefined;

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
      if (lockFocusAcrossFramesIsDefined) {
        console.warn("The unstable_lockFocusAcrossFrames in @reach/dialog is deprecated. It will be removed in the next minor release.");
      }
    }, [lockFocusAcrossFramesIsDefined]);
  }

  var mouseDownTarget = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var overlayNode = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var ref = (0,_reach_utils_compose_refs__WEBPACK_IMPORTED_MODULE_5__.useComposedRefs)(overlayNode, forwardedRef);
  var activateFocusLock = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (initialFocusRef && initialFocusRef.current) {
      initialFocusRef.current.focus();
    }
  }, [initialFocusRef]);

  function handleClick(event) {
    if (mouseDownTarget.current === event.target) {
      event.stopPropagation();
      onDismiss(event);
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Escape") {
      event.stopPropagation();
      onDismiss(event);
    }
  }

  function handleMouseDown(event) {
    mouseDownTarget.current = event.target;
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return overlayNode.current ? createAriaHider(overlayNode.current) : void null;
  }, []);
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_focus_lock__WEBPACK_IMPORTED_MODULE_9__.default, {
    autoFocus: true,
    returnFocus: true,
    onActivation: activateFocusLock,
    disabled: dangerouslyBypassFocusLock,
    crossFrame: unstable_lockFocusAcrossFrames != null ? unstable_lockFocusAcrossFrames : true
  }, /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_remove_scroll__WEBPACK_IMPORTED_MODULE_10__.RemoveScroll, {
    allowPinchZoom: allowPinchZoom,
    enabled: !dangerouslyBypassScrollLock
  }, /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Comp, _extends({}, props, {
    ref: ref,
    "data-reach-dialog-overlay": ""
    /*
     * We can ignore the `no-static-element-interactions` warning here
     * because our overlay is only designed to capture any outside
     * clicks, not to serve as a clickable element itself.
     */
    ,
    onClick: (0,_reach_utils_compose_event_handlers__WEBPACK_IMPORTED_MODULE_6__.composeEventHandlers)(onClick, handleClick),
    onKeyDown: (0,_reach_utils_compose_event_handlers__WEBPACK_IMPORTED_MODULE_6__.composeEventHandlers)(onKeyDown, handleKeyDown),
    onMouseDown: (0,_reach_utils_compose_event_handlers__WEBPACK_IMPORTED_MODULE_6__.composeEventHandlers)(onMouseDown, handleMouseDown)
  }))));
});

if (true) {
  DialogOverlay.displayName = "DialogOverlay";
  DialogOverlay.propTypes = /*#__PURE__*/_extends({}, overlayPropTypes);
} ////////////////////////////////////////////////////////////////////////////////

/**
 * DialogContent
 *
 * Low-level component if you need more control over the styles or rendering of
 * the dialog content.
 *
 * Note: Must be a child of `DialogOverlay`.
 *
 * Note: You only need to use this when you are also styling `DialogOverlay`,
 * otherwise you can use the high-level `Dialog` component and pass the props
 * to it. Any props passed to `Dialog` component (besides `isOpen` and
 * `onDismiss`) will be spread onto `DialogContent`.
 *
 * @see Docs https://reach.tech/dialog#dialogcontent
 */


var DialogContent = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function DialogContent(_ref3, forwardedRef) {
  var _ref3$as = _ref3.as,
      Comp = _ref3$as === void 0 ? "div" : _ref3$as,
      onClick = _ref3.onClick;
      _ref3.onKeyDown;
      var props = _objectWithoutPropertiesLoose(_ref3, _excluded3);

  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Comp, _extends({
    "aria-modal": "true",
    role: "dialog",
    tabIndex: -1
  }, props, {
    ref: forwardedRef,
    "data-reach-dialog-content": "",
    onClick: (0,_reach_utils_compose_event_handlers__WEBPACK_IMPORTED_MODULE_6__.composeEventHandlers)(onClick, function (event) {
      event.stopPropagation();
    })
  }));
});
/**
 * @see Docs https://reach.tech/dialog#dialogcontent-props
 */

if (true) {
  DialogContent.displayName = "DialogContent";
  DialogContent.propTypes = {
    "aria-label": ariaLabelType,
    "aria-labelledby": ariaLabelType
  };
} ////////////////////////////////////////////////////////////////////////////////

/**
 * Dialog
 *
 * High-level component to render a modal dialog window over the top of the page
 * (or another dialog).
 *
 * @see Docs https://reach.tech/dialog#dialog
 */


var Dialog = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function Dialog(_ref4, forwardedRef) {
  var _ref4$allowPinchZoom = _ref4.allowPinchZoom,
      allowPinchZoom = _ref4$allowPinchZoom === void 0 ? false : _ref4$allowPinchZoom,
      initialFocusRef = _ref4.initialFocusRef,
      isOpen = _ref4.isOpen,
      _ref4$onDismiss = _ref4.onDismiss,
      onDismiss = _ref4$onDismiss === void 0 ? _reach_utils_noop__WEBPACK_IMPORTED_MODULE_3__.noop : _ref4$onDismiss,
      props = _objectWithoutPropertiesLoose(_ref4, _excluded4);

  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DialogOverlay, {
    allowPinchZoom: allowPinchZoom,
    initialFocusRef: initialFocusRef,
    isOpen: isOpen,
    onDismiss: onDismiss
  }, /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DialogContent, _extends({
    ref: forwardedRef
  }, props)));
});
/**
 * @see Docs https://reach.tech/dialog#dialog-props
 */

if (true) {
  Dialog.displayName = "Dialog";
  Dialog.propTypes = {
    isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
    onDismiss: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
    "aria-label": ariaLabelType,
    "aria-labelledby": ariaLabelType
  };
} ////////////////////////////////////////////////////////////////////////////////


function createAriaHider(dialogNode) {
  var originalValues = [];
  var rootNodes = [];
  var ownerDocument = (0,_reach_utils_owner_document__WEBPACK_IMPORTED_MODULE_1__.getOwnerDocument)(dialogNode);

  if (!dialogNode) {
    if (true) {
      console.warn("A ref has not yet been attached to a dialog node when attempting to call `createAriaHider`.");
    }

    return _reach_utils_noop__WEBPACK_IMPORTED_MODULE_3__.noop;
  }

  Array.prototype.forEach.call(ownerDocument.querySelectorAll("body > *"), function (node) {
    var _dialogNode$parentNod, _dialogNode$parentNod2;

    var portalNode = (_dialogNode$parentNod = dialogNode.parentNode) == null ? void 0 : (_dialogNode$parentNod2 = _dialogNode$parentNod.parentNode) == null ? void 0 : _dialogNode$parentNod2.parentNode;

    if (node === portalNode) {
      return;
    }

    var attr = node.getAttribute("aria-hidden");
    var alreadyHidden = attr !== null && attr !== "false";

    if (alreadyHidden) {
      return;
    }

    originalValues.push(attr);
    rootNodes.push(node);
    node.setAttribute("aria-hidden", "true");
  });
  return function () {
    rootNodes.forEach(function (node, index) {
      var originalValue = originalValues[index];

      if (originalValue === null) {
        node.removeAttribute("aria-hidden");
      } else {
        node.setAttribute("aria-hidden", originalValue);
      }
    });
  };
}

function ariaLabelType(props, propName, compName, location, propFullName) {
  var details = "\nSee https://www.w3.org/TR/wai-aria/#aria-label for details.";

  if (!props["aria-label"] && !props["aria-labelledby"]) {
    return new Error("A <" + compName + "> must have either an `aria-label` or `aria-labelledby` prop.\n      " + details);
  }

  if (props["aria-label"] && props["aria-labelledby"]) {
    return new Error("You provided both `aria-label` and `aria-labelledby` props to a <" + compName + ">. If the a label for this component is visible on the screen, that label's component should be given a unique ID prop, and that ID should be passed as the `aria-labelledby` prop into <" + compName + ">. If the label cannot be determined programmatically from the content of the element, an alternative label should be provided as the `aria-label` prop, which will be used as an `aria-label` on the HTML tag." + details);
  } else if (props[propName] != null && !(0,_reach_utils_type_check__WEBPACK_IMPORTED_MODULE_2__.isString)(props[propName])) {
    return new Error("Invalid prop `" + propName + "` supplied to `" + compName + "`. Expected `string`, received `" + (Array.isArray(propFullName) ? "array" : typeof propFullName) + "`.");
  }

  return null;
} ////////////////////////////////////////////////////////////////////////////////

/* harmony default export */ __webpack_exports__["default"] = (Dialog);



/***/ }),

/***/ "./node_modules/detect-node-es/esm/browser.js":
/*!****************************************************!*\
  !*** ./node_modules/detect-node-es/esm/browser.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNode": function() { return /* binding */ isNode; }
/* harmony export */ });
const isNode = false;



/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/constants.js":
/*!**********************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/constants.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FOCUS_GROUP": function() { return /* binding */ FOCUS_GROUP; },
/* harmony export */   "FOCUS_DISABLED": function() { return /* binding */ FOCUS_DISABLED; },
/* harmony export */   "FOCUS_ALLOW": function() { return /* binding */ FOCUS_ALLOW; },
/* harmony export */   "FOCUS_AUTO": function() { return /* binding */ FOCUS_AUTO; }
/* harmony export */ });
var FOCUS_GROUP = 'data-focus-lock';
var FOCUS_DISABLED = 'data-focus-lock-disabled';
var FOCUS_ALLOW = 'data-no-focus-lock';
var FOCUS_AUTO = 'data-autofocus-inside';


/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/focusInside.js":
/*!************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/focusInside.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "focusInside": function() { return /* binding */ focusInside; }
/* harmony export */ });
/* harmony import */ var _utils_all_affected__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/all-affected */ "./node_modules/focus-lock/dist/es2015/utils/all-affected.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/array */ "./node_modules/focus-lock/dist/es2015/utils/array.js");


var focusInFrame = function (frame) { return frame === document.activeElement; };
var focusInsideIframe = function (topNode) {
    return Boolean((0,_utils_array__WEBPACK_IMPORTED_MODULE_0__.toArray)(topNode.querySelectorAll('iframe')).some(function (node) { return focusInFrame(node); }));
};
var focusInside = function (topNode) {
    var activeElement = document && document.activeElement;
    if (!activeElement || (activeElement.dataset && activeElement.dataset.focusGuard)) {
        return false;
    }
    return (0,_utils_all_affected__WEBPACK_IMPORTED_MODULE_1__.getAllAffectedNodes)(topNode).reduce(function (result, node) { return result || node.contains(activeElement) || focusInsideIframe(node); }, false);
};


/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/focusIsHidden.js":
/*!**************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/focusIsHidden.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "focusIsHidden": function() { return /* binding */ focusIsHidden; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/focus-lock/dist/es2015/constants.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/array */ "./node_modules/focus-lock/dist/es2015/utils/array.js");


var focusIsHidden = function () {
    return document &&
        (0,_utils_array__WEBPACK_IMPORTED_MODULE_0__.toArray)(document.querySelectorAll("[" + _constants__WEBPACK_IMPORTED_MODULE_1__.FOCUS_ALLOW + "]")).some(function (node) { return node.contains(document.activeElement); });
};


/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/focusMerge.js":
/*!***********************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/focusMerge.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFocusMerge": function() { return /* binding */ getFocusMerge; }
/* harmony export */ });
/* harmony import */ var _solver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./solver */ "./node_modules/focus-lock/dist/es2015/solver.js");
/* harmony import */ var _utils_all_affected__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/all-affected */ "./node_modules/focus-lock/dist/es2015/utils/all-affected.js");
/* harmony import */ var _utils_DOMutils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/DOMutils */ "./node_modules/focus-lock/dist/es2015/utils/DOMutils.js");
/* harmony import */ var _utils_firstFocus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/firstFocus */ "./node_modules/focus-lock/dist/es2015/utils/firstFocus.js");
/* harmony import */ var _utils_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/is */ "./node_modules/focus-lock/dist/es2015/utils/is.js");
/* harmony import */ var _utils_parenting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/parenting */ "./node_modules/focus-lock/dist/es2015/utils/parenting.js");






var findAutoFocused = function (autoFocusables) { return function (node) {
    return node.autofocus || (node.dataset && !!node.dataset.autofocus) || autoFocusables.indexOf(node) >= 0;
}; };
var reorderNodes = function (srcNodes, dstNodes) {
    var remap = new Map();
    dstNodes.forEach(function (entity) { return remap.set(entity.node, entity); });
    return srcNodes.map(function (node) { return remap.get(node); }).filter(_utils_is__WEBPACK_IMPORTED_MODULE_0__.isDefined);
};
var getFocusMerge = function (topNode, lastNode) {
    var activeElement = (document && document.activeElement);
    var entries = (0,_utils_all_affected__WEBPACK_IMPORTED_MODULE_1__.getAllAffectedNodes)(topNode).filter(_utils_is__WEBPACK_IMPORTED_MODULE_0__.isNotAGuard);
    var commonParent = (0,_utils_parenting__WEBPACK_IMPORTED_MODULE_2__.getTopCommonParent)(activeElement || topNode, topNode, entries);
    var visibilityCache = new Map();
    var anyFocusable = (0,_utils_DOMutils__WEBPACK_IMPORTED_MODULE_3__.getAllTabbableNodes)(entries, visibilityCache);
    var innerElements = (0,_utils_DOMutils__WEBPACK_IMPORTED_MODULE_3__.getTabbableNodes)(entries, visibilityCache).filter(function (_a) {
        var node = _a.node;
        return (0,_utils_is__WEBPACK_IMPORTED_MODULE_0__.isNotAGuard)(node);
    });
    if (!innerElements[0]) {
        innerElements = anyFocusable;
        if (!innerElements[0]) {
            return undefined;
        }
    }
    var outerNodes = (0,_utils_DOMutils__WEBPACK_IMPORTED_MODULE_3__.getAllTabbableNodes)([commonParent], visibilityCache).map(function (_a) {
        var node = _a.node;
        return node;
    });
    var orderedInnerElements = reorderNodes(outerNodes, innerElements);
    var innerNodes = orderedInnerElements.map(function (_a) {
        var node = _a.node;
        return node;
    });
    var newId = (0,_solver__WEBPACK_IMPORTED_MODULE_4__.newFocus)(innerNodes, outerNodes, activeElement, lastNode);
    if (newId === _solver__WEBPACK_IMPORTED_MODULE_4__.NEW_FOCUS) {
        var autoFocusable = anyFocusable
            .map(function (_a) {
            var node = _a.node;
            return node;
        })
            .filter(findAutoFocused((0,_utils_parenting__WEBPACK_IMPORTED_MODULE_2__.allParentAutofocusables)(entries, visibilityCache)));
        return {
            node: autoFocusable && autoFocusable.length ? (0,_utils_firstFocus__WEBPACK_IMPORTED_MODULE_5__.pickFirstFocus)(autoFocusable) : (0,_utils_firstFocus__WEBPACK_IMPORTED_MODULE_5__.pickFirstFocus)(innerNodes),
        };
    }
    if (newId === undefined) {
        return newId;
    }
    return orderedInnerElements[newId];
};


/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/focusables.js":
/*!***********************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/focusables.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFocusabledIn": function() { return /* binding */ getFocusabledIn; }
/* harmony export */ });
/* harmony import */ var _utils_all_affected__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/all-affected */ "./node_modules/focus-lock/dist/es2015/utils/all-affected.js");
/* harmony import */ var _utils_DOMutils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/DOMutils */ "./node_modules/focus-lock/dist/es2015/utils/DOMutils.js");
/* harmony import */ var _utils_is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/is */ "./node_modules/focus-lock/dist/es2015/utils/is.js");
/* harmony import */ var _utils_parenting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/parenting */ "./node_modules/focus-lock/dist/es2015/utils/parenting.js");




var getFocusabledIn = function (topNode) {
    var entries = (0,_utils_all_affected__WEBPACK_IMPORTED_MODULE_0__.getAllAffectedNodes)(topNode).filter(_utils_is__WEBPACK_IMPORTED_MODULE_1__.isNotAGuard);
    var commonParent = (0,_utils_parenting__WEBPACK_IMPORTED_MODULE_2__.getTopCommonParent)(topNode, topNode, entries);
    var visibilityCache = new Map();
    var outerNodes = (0,_utils_DOMutils__WEBPACK_IMPORTED_MODULE_3__.getTabbableNodes)([commonParent], visibilityCache, true);
    var innerElements = (0,_utils_DOMutils__WEBPACK_IMPORTED_MODULE_3__.getTabbableNodes)(entries, visibilityCache)
        .filter(function (_a) {
        var node = _a.node;
        return (0,_utils_is__WEBPACK_IMPORTED_MODULE_1__.isNotAGuard)(node);
    })
        .map(function (_a) {
        var node = _a.node;
        return node;
    });
    return outerNodes.map(function (_a) {
        var node = _a.node, index = _a.index;
        return ({
            node: node,
            index: index,
            lockItem: innerElements.indexOf(node) >= 0,
            guard: (0,_utils_is__WEBPACK_IMPORTED_MODULE_1__.isGuard)(node),
        });
    });
};


/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/index.js":
/*!******************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tabHook": function() { return /* reexport safe */ _tabHook__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "focusInside": function() { return /* reexport safe */ _focusInside__WEBPACK_IMPORTED_MODULE_1__.focusInside; },
/* harmony export */   "focusIsHidden": function() { return /* reexport safe */ _focusIsHidden__WEBPACK_IMPORTED_MODULE_2__.focusIsHidden; },
/* harmony export */   "focusMerge": function() { return /* reexport safe */ _focusMerge__WEBPACK_IMPORTED_MODULE_3__.getFocusMerge; },
/* harmony export */   "getFocusabledIn": function() { return /* reexport safe */ _focusables__WEBPACK_IMPORTED_MODULE_4__.getFocusabledIn; },
/* harmony export */   "constants": function() { return /* reexport module object */ _constants__WEBPACK_IMPORTED_MODULE_5__; },
/* harmony export */   "getAllAffectedNodes": function() { return /* reexport safe */ _utils_all_affected__WEBPACK_IMPORTED_MODULE_6__.getAllAffectedNodes; },
/* harmony export */   "focusNextElement": function() { return /* reexport safe */ _sibling__WEBPACK_IMPORTED_MODULE_7__.focusNextElement; },
/* harmony export */   "focusPrevElement": function() { return /* reexport safe */ _sibling__WEBPACK_IMPORTED_MODULE_7__.focusPrevElement; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./node_modules/focus-lock/dist/es2015/constants.js");
/* harmony import */ var _focusables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./focusables */ "./node_modules/focus-lock/dist/es2015/focusables.js");
/* harmony import */ var _focusInside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./focusInside */ "./node_modules/focus-lock/dist/es2015/focusInside.js");
/* harmony import */ var _focusIsHidden__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./focusIsHidden */ "./node_modules/focus-lock/dist/es2015/focusIsHidden.js");
/* harmony import */ var _focusMerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./focusMerge */ "./node_modules/focus-lock/dist/es2015/focusMerge.js");
/* harmony import */ var _setFocus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./setFocus */ "./node_modules/focus-lock/dist/es2015/setFocus.js");
/* harmony import */ var _sibling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sibling */ "./node_modules/focus-lock/dist/es2015/sibling.js");
/* harmony import */ var _tabHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabHook */ "./node_modules/focus-lock/dist/es2015/tabHook.js");
/* harmony import */ var _utils_all_affected__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/all-affected */ "./node_modules/focus-lock/dist/es2015/utils/all-affected.js");










/* harmony default export */ __webpack_exports__["default"] = (_setFocus__WEBPACK_IMPORTED_MODULE_8__.setFocus);


/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/setFocus.js":
/*!*********************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/setFocus.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "focusOn": function() { return /* binding */ focusOn; },
/* harmony export */   "setFocus": function() { return /* binding */ setFocus; }
/* harmony export */ });
/* harmony import */ var _focusMerge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./focusMerge */ "./node_modules/focus-lock/dist/es2015/focusMerge.js");

var focusOn = function (target) {
    target.focus();
    if ('contentWindow' in target && target.contentWindow) {
        target.contentWindow.focus();
    }
};
var guardCount = 0;
var lockDisabled = false;
var setFocus = function (topNode, lastNode) {
    var focusable = (0,_focusMerge__WEBPACK_IMPORTED_MODULE_0__.getFocusMerge)(topNode, lastNode);
    if (lockDisabled) {
        return;
    }
    if (focusable) {
        if (guardCount > 2) {
            console.error('FocusLock: focus-fighting detected. Only one focus management system could be active. ' +
                'See https://github.com/theKashey/focus-lock/#focus-fighting');
            lockDisabled = true;
            setTimeout(function () {
                lockDisabled = false;
            }, 1);
            return;
        }
        guardCount++;
        focusOn(focusable.node);
        guardCount--;
    }
};


/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/sibling.js":
/*!********************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/sibling.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "focusNextElement": function() { return /* binding */ focusNextElement; },
/* harmony export */   "focusPrevElement": function() { return /* binding */ focusPrevElement; }
/* harmony export */ });
/* harmony import */ var _utils_DOMutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/DOMutils */ "./node_modules/focus-lock/dist/es2015/utils/DOMutils.js");

var getRelativeFocusable = function (element, scope) {
    if (!element || !scope || !scope.contains(element)) {
        return {};
    }
    var focusables = (0,_utils_DOMutils__WEBPACK_IMPORTED_MODULE_0__.getTabbableNodes)([scope], new Map());
    var current = focusables.findIndex(function (_a) {
        var node = _a.node;
        return node === element;
    });
    if (current === -1) {
        return {};
    }
    return {
        prev: focusables[current - 1],
        next: focusables[current + 1],
        first: focusables[0],
        last: focusables[focusables.length - 1],
    };
};
var defaultOptions = function (options) {
    return Object.assign({
        scope: document.body,
        cycle: true,
    }, options);
};
var focusNextElement = function (baseElement, options) {
    if (options === void 0) { options = {}; }
    var _a = defaultOptions(options), scope = _a.scope, cycle = _a.cycle;
    var _b = getRelativeFocusable(baseElement, scope), next = _b.next, first = _b.first;
    var newTarget = next || (cycle && first);
    if (newTarget) {
        newTarget.node.focus(options.focusOptions);
    }
};
var focusPrevElement = function (baseElement, options) {
    if (options === void 0) { options = {}; }
    var _a = defaultOptions(options), scope = _a.scope, cycle = _a.cycle;
    var _b = getRelativeFocusable(baseElement, scope), prev = _b.prev, last = _b.last;
    var newTarget = prev || (cycle && last);
    if (newTarget) {
        newTarget.node.focus(options.focusOptions);
    }
};


/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/solver.js":
/*!*******************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/solver.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NEW_FOCUS": function() { return /* binding */ NEW_FOCUS; },
/* harmony export */   "newFocus": function() { return /* binding */ newFocus; }
/* harmony export */ });
/* harmony import */ var _utils_correctFocus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/correctFocus */ "./node_modules/focus-lock/dist/es2015/utils/correctFocus.js");
/* harmony import */ var _utils_firstFocus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/firstFocus */ "./node_modules/focus-lock/dist/es2015/utils/firstFocus.js");
/* harmony import */ var _utils_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/is */ "./node_modules/focus-lock/dist/es2015/utils/is.js");



var NEW_FOCUS = 'NEW_FOCUS';
var newFocus = function (innerNodes, outerNodes, activeElement, lastNode) {
    var cnt = innerNodes.length;
    var firstFocus = innerNodes[0];
    var lastFocus = innerNodes[cnt - 1];
    var isOnGuard = (0,_utils_is__WEBPACK_IMPORTED_MODULE_0__.isGuard)(activeElement);
    if (innerNodes.indexOf(activeElement) >= 0) {
        return undefined;
    }
    var activeIndex = outerNodes.indexOf(activeElement);
    var lastIndex = lastNode ? outerNodes.indexOf(lastNode) : activeIndex;
    var lastNodeInside = lastNode ? innerNodes.indexOf(lastNode) : -1;
    var indexDiff = activeIndex - lastIndex;
    var firstNodeIndex = outerNodes.indexOf(firstFocus);
    var lastNodeIndex = outerNodes.indexOf(lastFocus);
    var correctedNodes = (0,_utils_correctFocus__WEBPACK_IMPORTED_MODULE_1__.correctNodes)(outerNodes);
    var correctedIndexDiff = correctedNodes.indexOf(activeElement) - (lastNode ? correctedNodes.indexOf(lastNode) : activeIndex);
    var returnFirstNode = (0,_utils_firstFocus__WEBPACK_IMPORTED_MODULE_2__.pickFocusable)(innerNodes, 0);
    var returnLastNode = (0,_utils_firstFocus__WEBPACK_IMPORTED_MODULE_2__.pickFocusable)(innerNodes, cnt - 1);
    if (activeIndex === -1 || lastNodeInside === -1) {
        return NEW_FOCUS;
    }
    if (!indexDiff && lastNodeInside >= 0) {
        return lastNodeInside;
    }
    if (activeIndex <= firstNodeIndex && isOnGuard && Math.abs(indexDiff) > 1) {
        return returnLastNode;
    }
    if (activeIndex >= lastNodeIndex && isOnGuard && Math.abs(indexDiff) > 1) {
        return returnFirstNode;
    }
    if (indexDiff && Math.abs(correctedIndexDiff) > 1) {
        return lastNodeInside;
    }
    if (activeIndex <= firstNodeIndex) {
        return returnLastNode;
    }
    if (activeIndex > lastNodeIndex) {
        return returnFirstNode;
    }
    if (indexDiff) {
        if (Math.abs(indexDiff) > 1) {
            return lastNodeInside;
        }
        return (cnt + lastNodeInside + indexDiff) % cnt;
    }
    return undefined;
};


/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/tabHook.js":
/*!********************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/tabHook.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    attach: function () { },
    detach: function () { },
});


/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/DOMutils.js":
/*!***************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/DOMutils.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterFocusable": function() { return /* binding */ filterFocusable; },
/* harmony export */   "getTabbableNodes": function() { return /* binding */ getTabbableNodes; },
/* harmony export */   "getAllTabbableNodes": function() { return /* binding */ getAllTabbableNodes; },
/* harmony export */   "parentAutofocusables": function() { return /* binding */ parentAutofocusables; }
/* harmony export */ });
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./node_modules/focus-lock/dist/es2015/utils/array.js");
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is */ "./node_modules/focus-lock/dist/es2015/utils/is.js");
/* harmony import */ var _tabOrder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabOrder */ "./node_modules/focus-lock/dist/es2015/utils/tabOrder.js");
/* harmony import */ var _tabUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabUtils */ "./node_modules/focus-lock/dist/es2015/utils/tabUtils.js");




var filterFocusable = function (nodes, visibilityCache) {
    return (0,_array__WEBPACK_IMPORTED_MODULE_0__.toArray)(nodes)
        .filter(function (node) { return (0,_is__WEBPACK_IMPORTED_MODULE_1__.isVisibleCached)(visibilityCache, node); })
        .filter(function (node) { return (0,_is__WEBPACK_IMPORTED_MODULE_1__.notHiddenInput)(node); });
};
var getTabbableNodes = function (topNodes, visibilityCache, withGuards) {
    return (0,_tabOrder__WEBPACK_IMPORTED_MODULE_2__.orderByTabIndex)(filterFocusable((0,_tabUtils__WEBPACK_IMPORTED_MODULE_3__.getFocusables)(topNodes, withGuards), visibilityCache), true, withGuards);
};
var getAllTabbableNodes = function (topNodes, visibilityCache) {
    return (0,_tabOrder__WEBPACK_IMPORTED_MODULE_2__.orderByTabIndex)(filterFocusable((0,_tabUtils__WEBPACK_IMPORTED_MODULE_3__.getFocusables)(topNodes), visibilityCache), false);
};
var parentAutofocusables = function (topNode, visibilityCache) {
    return filterFocusable((0,_tabUtils__WEBPACK_IMPORTED_MODULE_3__.getParentAutofocusables)(topNode), visibilityCache);
};


/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/all-affected.js":
/*!*******************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/all-affected.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllAffectedNodes": function() { return /* binding */ getAllAffectedNodes; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./node_modules/focus-lock/dist/es2015/constants.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./node_modules/focus-lock/dist/es2015/utils/array.js");


var filterNested = function (nodes) {
    var contained = new Set();
    var l = nodes.length;
    for (var i = 0; i < l; i += 1) {
        for (var j = i + 1; j < l; j += 1) {
            var position = nodes[i].compareDocumentPosition(nodes[j]);
            if ((position & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0) {
                contained.add(j);
            }
            if ((position & Node.DOCUMENT_POSITION_CONTAINS) > 0) {
                contained.add(i);
            }
        }
    }
    return nodes.filter(function (_, index) { return !contained.has(index); });
};
var getTopParent = function (node) {
    return node.parentNode ? getTopParent(node.parentNode) : node;
};
var getAllAffectedNodes = function (node) {
    var nodes = (0,_array__WEBPACK_IMPORTED_MODULE_0__.asArray)(node);
    return nodes.filter(Boolean).reduce(function (acc, currentNode) {
        var group = currentNode.getAttribute(_constants__WEBPACK_IMPORTED_MODULE_1__.FOCUS_GROUP);
        acc.push.apply(acc, (group
            ? filterNested((0,_array__WEBPACK_IMPORTED_MODULE_0__.toArray)(getTopParent(currentNode).querySelectorAll("[" + _constants__WEBPACK_IMPORTED_MODULE_1__.FOCUS_GROUP + "=\"" + group + "\"]:not([" + _constants__WEBPACK_IMPORTED_MODULE_1__.FOCUS_DISABLED + "=\"disabled\"])")))
            : [currentNode]));
        return acc;
    }, []);
};


/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/array.js":
/*!************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/array.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toArray": function() { return /* binding */ toArray; },
/* harmony export */   "asArray": function() { return /* binding */ asArray; }
/* harmony export */ });
var toArray = function (a) {
    var ret = Array(a.length);
    for (var i = 0; i < a.length; ++i) {
        ret[i] = a[i];
    }
    return ret;
};
var asArray = function (a) { return (Array.isArray(a) ? a : [a]); };


/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/correctFocus.js":
/*!*******************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/correctFocus.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "correctNode": function() { return /* binding */ correctNode; },
/* harmony export */   "correctNodes": function() { return /* binding */ correctNodes; }
/* harmony export */ });
var isRadio = function (node) { return node.tagName === 'INPUT' && node.type === 'radio'; };
var findSelectedRadio = function (node, nodes) {
    return nodes
        .filter(isRadio)
        .filter(function (el) { return el.name === node.name; })
        .filter(function (el) { return el.checked; })[0] || node;
};
var correctNode = function (node, nodes) {
    if (isRadio(node) && node.name) {
        return findSelectedRadio(node, nodes);
    }
    return node;
};
var correctNodes = function (nodes) {
    var resultSet = new Set();
    nodes.forEach(function (node) { return resultSet.add(correctNode(node, nodes)); });
    return nodes.filter(function (node) { return resultSet.has(node); });
};


/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/firstFocus.js":
/*!*****************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/firstFocus.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pickFirstFocus": function() { return /* binding */ pickFirstFocus; },
/* harmony export */   "pickFocusable": function() { return /* binding */ pickFocusable; }
/* harmony export */ });
/* harmony import */ var _correctFocus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./correctFocus */ "./node_modules/focus-lock/dist/es2015/utils/correctFocus.js");

var pickFirstFocus = function (nodes) {
    if (nodes[0] && nodes.length > 1) {
        return (0,_correctFocus__WEBPACK_IMPORTED_MODULE_0__.correctNode)(nodes[0], nodes);
    }
    return nodes[0];
};
var pickFocusable = function (nodes, index) {
    if (nodes.length > 1) {
        return nodes.indexOf((0,_correctFocus__WEBPACK_IMPORTED_MODULE_0__.correctNode)(nodes[index], nodes));
    }
    return index;
};


/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/is.js":
/*!*********************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/is.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isVisibleCached": function() { return /* binding */ isVisibleCached; },
/* harmony export */   "notHiddenInput": function() { return /* binding */ notHiddenInput; },
/* harmony export */   "isGuard": function() { return /* binding */ isGuard; },
/* harmony export */   "isNotAGuard": function() { return /* binding */ isNotAGuard; },
/* harmony export */   "isDefined": function() { return /* binding */ isDefined; }
/* harmony export */ });
var isElementHidden = function (node) {
    if (node.nodeType !== Node.ELEMENT_NODE) {
        return false;
    }
    var computedStyle = window.getComputedStyle(node, null);
    if (!computedStyle || !computedStyle.getPropertyValue) {
        return false;
    }
    return (computedStyle.getPropertyValue('display') === 'none' || computedStyle.getPropertyValue('visibility') === 'hidden');
};
var isVisibleUncached = function (node, checkParent) {
    return !node ||
        node === document ||
        (node && node.nodeType === Node.DOCUMENT_NODE) ||
        (!isElementHidden(node) &&
            checkParent(node.parentNode && node.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE
                ? node.parentNode.host
                : node.parentNode));
};
var isVisibleCached = function (visibilityCache, node) {
    var cached = visibilityCache.get(node);
    if (cached !== undefined) {
        return cached;
    }
    var result = isVisibleUncached(node, isVisibleCached.bind(undefined, visibilityCache));
    visibilityCache.set(node, result);
    return result;
};
var notHiddenInput = function (node) {
    return !((node.tagName === 'INPUT' || node.tagName === 'BUTTON') && (node.type === 'hidden' || node.disabled));
};
var isGuard = function (node) { return Boolean(node && node.dataset && node.dataset.focusGuard); };
var isNotAGuard = function (node) { return !isGuard(node); };
var isDefined = function (x) { return Boolean(x); };


/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/parenting.js":
/*!****************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/parenting.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCommonParent": function() { return /* binding */ getCommonParent; },
/* harmony export */   "getTopCommonParent": function() { return /* binding */ getTopCommonParent; },
/* harmony export */   "allParentAutofocusables": function() { return /* binding */ allParentAutofocusables; }
/* harmony export */ });
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./node_modules/focus-lock/dist/es2015/utils/array.js");
/* harmony import */ var _DOMutils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMutils */ "./node_modules/focus-lock/dist/es2015/utils/DOMutils.js");


var getParents = function (node, parents) {
    if (parents === void 0) { parents = []; }
    parents.push(node);
    if (node.parentNode) {
        getParents(node.parentNode, parents);
    }
    return parents;
};
var getCommonParent = function (nodeA, nodeB) {
    var parentsA = getParents(nodeA);
    var parentsB = getParents(nodeB);
    for (var i = 0; i < parentsA.length; i += 1) {
        var currentParent = parentsA[i];
        if (parentsB.indexOf(currentParent) >= 0) {
            return currentParent;
        }
    }
    return false;
};
var getTopCommonParent = function (baseActiveElement, leftEntry, rightEntries) {
    var activeElements = (0,_array__WEBPACK_IMPORTED_MODULE_0__.asArray)(baseActiveElement);
    var leftEntries = (0,_array__WEBPACK_IMPORTED_MODULE_0__.asArray)(leftEntry);
    var activeElement = activeElements[0];
    var topCommon = false;
    leftEntries.filter(Boolean).forEach(function (entry) {
        topCommon = getCommonParent(topCommon || entry, entry) || topCommon;
        rightEntries.filter(Boolean).forEach(function (subEntry) {
            var common = getCommonParent(activeElement, subEntry);
            if (common) {
                if (!topCommon || common.contains(topCommon)) {
                    topCommon = common;
                }
                else {
                    topCommon = getCommonParent(common, topCommon);
                }
            }
        });
    });
    return topCommon;
};
var allParentAutofocusables = function (entries, visibilityCache) {
    return entries.reduce(function (acc, node) { return acc.concat((0,_DOMutils__WEBPACK_IMPORTED_MODULE_1__.parentAutofocusables)(node, visibilityCache)); }, []);
};


/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/tabOrder.js":
/*!***************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/tabOrder.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tabSort": function() { return /* binding */ tabSort; },
/* harmony export */   "orderByTabIndex": function() { return /* binding */ orderByTabIndex; }
/* harmony export */ });
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./node_modules/focus-lock/dist/es2015/utils/array.js");

var tabSort = function (a, b) {
    var tabDiff = a.tabIndex - b.tabIndex;
    var indexDiff = a.index - b.index;
    if (tabDiff) {
        if (!a.tabIndex) {
            return 1;
        }
        if (!b.tabIndex) {
            return -1;
        }
    }
    return tabDiff || indexDiff;
};
var orderByTabIndex = function (nodes, filterNegative, keepGuards) {
    return (0,_array__WEBPACK_IMPORTED_MODULE_0__.toArray)(nodes)
        .map(function (node, index) { return ({
        node: node,
        index: index,
        tabIndex: keepGuards && node.tabIndex === -1 ? ((node.dataset || {}).focusGuard ? 0 : -1) : node.tabIndex,
    }); })
        .filter(function (data) { return !filterNegative || data.tabIndex >= 0; })
        .sort(tabSort);
};


/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/tabUtils.js":
/*!***************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/tabUtils.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFocusables": function() { return /* binding */ getFocusables; },
/* harmony export */   "getParentAutofocusables": function() { return /* binding */ getParentAutofocusables; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./node_modules/focus-lock/dist/es2015/constants.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/focus-lock/dist/es2015/utils/array.js");
/* harmony import */ var _tabbables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabbables */ "./node_modules/focus-lock/dist/es2015/utils/tabbables.js");



var queryTabbables = _tabbables__WEBPACK_IMPORTED_MODULE_0__.tabbables.join(',');
var queryGuardTabbables = queryTabbables + ", [data-focus-guard]";
var getFocusables = function (parents, withGuards) {
    return parents.reduce(function (acc, parent) {
        return acc.concat((0,_array__WEBPACK_IMPORTED_MODULE_1__.toArray)(parent.querySelectorAll(withGuards ? queryGuardTabbables : queryTabbables)), parent.parentNode
            ? (0,_array__WEBPACK_IMPORTED_MODULE_1__.toArray)(parent.parentNode.querySelectorAll(queryTabbables)).filter(function (node) { return node === parent; })
            : []);
    }, []);
};
var getParentAutofocusables = function (parent) {
    var parentFocus = parent.querySelectorAll("[" + _constants__WEBPACK_IMPORTED_MODULE_2__.FOCUS_AUTO + "]");
    return (0,_array__WEBPACK_IMPORTED_MODULE_1__.toArray)(parentFocus)
        .map(function (node) { return getFocusables([node]); })
        .reduce(function (acc, nodes) { return acc.concat(nodes); }, []);
};


/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/tabbables.js":
/*!****************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/tabbables.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tabbables": function() { return /* binding */ tabbables; }
/* harmony export */ });
var tabbables = [
    'button:enabled',
    'select:enabled',
    'textarea:enabled',
    'input:enabled',
    'a[href]',
    'area[href]',
    'summary',
    'iframe',
    'object',
    'embed',
    'audio[controls]',
    'video[controls]',
    '[tabindex]',
    '[contenteditable]',
    '[autofocus]',
];


/***/ }),

/***/ "./node_modules/get-nonce/dist/es2015/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/get-nonce/dist/es2015/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setNonce": function() { return /* binding */ setNonce; },
/* harmony export */   "getNonce": function() { return /* binding */ getNonce; }
/* harmony export */ });
var currentNonce;
var setNonce = function (nonce) {
    currentNonce = nonce;
};
var getNonce = function () {
    if (currentNonce) {
        return currentNonce;
    }
    if (true) {
        return __webpack_require__.nc;
    }
    return undefined;
};


/***/ }),

/***/ "./node_modules/@reach/dialog/styles.css":
/*!***********************************************!*\
  !*** ./node_modules/@reach/dialog/styles.css ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[1]!../../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[2]!./styles.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[2]!./node_modules/@reach/dialog/styles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element) {
                // These elements should always exist. If they do not,
                // this code should fail.
                var anchorElement = document.querySelector('#__next_css__DO_NOT_USE__');
                var parentNode = anchorElement.parentNode// Normally <head>
                ;
                // Each style tag should be placed right before our
                // anchor. By inserting before and not after, we do not
                // need to track the last inserted element.
                parentNode.insertBefore(element, anchorElement);
            };
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
    if (!a && b || a && !b) {
        return false;
    }
    let p;
    for(p in a){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (a[p] !== b[p]) {
            return false;
        }
    }
    for(p in b){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (!a[p]) {
            return false;
        }
    }
    return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[1]!../../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[2]!./styles.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[2]!./node_modules/@reach/dialog/styles.css",
      function () {
        content = __webpack_require__(/*! !!../../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[1]!../../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[2]!./styles.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[2]!./node_modules/@reach/dialog/styles.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[2]!./node_modules/@reach/dialog/styles.css":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[2]!./node_modules/@reach/dialog/styles.css ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* This code is subject to LICENSE in root of this repository */\n\n/* Used to detect in JavaScript if apps have loaded styles or not. */\n:root {\n  --reach-dialog: 1;\n}\n\n[data-reach-dialog-overlay] {\n  background: hsla(0, 0%, 0%, 0.33);\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: auto;\n}\n\n[data-reach-dialog-content] {\n  width: 50vw;\n  margin: 10vh auto;\n  background: white;\n  padding: 2rem;\n  outline: none;\n}\n", "",{"version":3,"sources":["webpack://node_modules/@reach/dialog/styles.css"],"names":[],"mappings":"AAAA,+DAA+D;;AAE/D,oEAAoE;AACpE;EACE,iBAAiB;AACnB;;AAEA;EACE,iCAAiC;EACjC,eAAe;EACf,MAAM;EACN,QAAQ;EACR,SAAS;EACT,OAAO;EACP,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,iBAAiB;EACjB,aAAa;EACb,aAAa;AACf","sourcesContent":["/* This code is subject to LICENSE in root of this repository */\n\n/* Used to detect in JavaScript if apps have loaded styles or not. */\n:root {\n  --reach-dialog: 1;\n}\n\n[data-reach-dialog-overlay] {\n  background: hsla(0, 0%, 0%, 0.33);\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: auto;\n}\n\n[data-reach-dialog-content] {\n  width: 50vw;\n  margin: 10vh auto;\n  background: white;\n  padding: 2rem;\n  outline: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/react-clientside-effect/lib/index.es.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-clientside-effect/lib/index.es.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




function withSideEffect(reducePropsToState, handleStateChangeOnClient) {
  if (true) {
    if (typeof reducePropsToState !== 'function') {
      throw new Error('Expected reducePropsToState to be a function.');
    }

    if (typeof handleStateChangeOnClient !== 'function') {
      throw new Error('Expected handleStateChangeOnClient to be a function.');
    }
  }

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function wrap(WrappedComponent) {
    if (true) {
      if (typeof WrappedComponent !== 'function') {
        throw new Error('Expected WrappedComponent to be a React component.');
      }
    }

    var mountedInstances = [];
    var state;

    function emitChange() {
      state = reducePropsToState(mountedInstances.map(function (instance) {
        return instance.props;
      }));
      handleStateChangeOnClient(state);
    }

    var SideEffect = /*#__PURE__*/function (_PureComponent) {
      (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(SideEffect, _PureComponent);

      function SideEffect() {
        return _PureComponent.apply(this, arguments) || this;
      }

      // Try to use displayName of wrapped component
      SideEffect.peek = function peek() {
        return state;
      };

      var _proto = SideEffect.prototype;

      _proto.componentDidMount = function componentDidMount() {
        mountedInstances.push(this);
        emitChange();
      };

      _proto.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };

      _proto.render = function render() {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(WrappedComponent, this.props);
      };

      return SideEffect;
    }(react__WEBPACK_IMPORTED_MODULE_2__.PureComponent);

    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")");

    return SideEffect;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (withSideEffect);


/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/AutoFocusInside.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/AutoFocusInside.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var focus_lock_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! focus-lock/constants */ "./node_modules/focus-lock/dist/es2015/constants.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./node_modules/react-focus-lock/dist/es2015/util.js");






var AutoFocusInside = function AutoFocusInside(_ref) {
  var disabled = _ref.disabled,
      children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, (0,_util__WEBPACK_IMPORTED_MODULE_3__.inlineProp)(focus_lock_constants__WEBPACK_IMPORTED_MODULE_4__.FOCUS_AUTO, !disabled), {
    className: className
  }), children);
};

AutoFocusInside.propTypes =  true ? {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
} : 0;
AutoFocusInside.defaultProps = {
  disabled: false,
  className: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (AutoFocusInside);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/Combination.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/Combination.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Lock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Lock */ "./node_modules/react-focus-lock/dist/es2015/Lock.js");
/* harmony import */ var _Trap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Trap */ "./node_modules/react-focus-lock/dist/es2015/Trap.js");





/* that would be a BREAKING CHANGE!
// delaying sidecar execution till the first usage
const RequireSideCar = (props) => {
  // eslint-disable-next-line global-require
  const SideCar = require('./Trap').default;
  return <SideCar {...props} />;
};
*/

var FocusLockCombination = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function FocusLockUICombination(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Lock__WEBPACK_IMPORTED_MODULE_3__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    sideCar: _Trap__WEBPACK_IMPORTED_MODULE_4__.default,
    ref: ref
  }, props));
});

var _ref = _Lock__WEBPACK_IMPORTED_MODULE_3__.default.propTypes || {},
    sideCar = _ref.sideCar,
    propTypes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, ["sideCar"]);

FocusLockCombination.propTypes =  true ? propTypes : 0;
/* harmony default export */ __webpack_exports__["default"] = (FocusLockCombination);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/FocusGuard.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/FocusGuard.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hiddenGuard": function() { return /* binding */ hiddenGuard; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


var hiddenGuard = {
  width: '1px',
  height: '0px',
  padding: 0,
  overflow: 'hidden',
  position: 'fixed',
  top: '1px',
  left: '1px'
};

var InFocusGuard = function InFocusGuard(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    key: "guard-first",
    "data-focus-guard": true,
    "data-focus-auto-guard": true,
    style: hiddenGuard
  }), children, children && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    key: "guard-last",
    "data-focus-guard": true,
    "data-focus-auto-guard": true,
    style: hiddenGuard
  }));
};

InFocusGuard.propTypes =  true ? {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)
} : 0;
InFocusGuard.defaultProps = {
  children: null
};
/* harmony default export */ __webpack_exports__["default"] = (InFocusGuard);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/FreeFocusInside.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/FreeFocusInside.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var focus_lock_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! focus-lock/constants */ "./node_modules/focus-lock/dist/es2015/constants.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./node_modules/react-focus-lock/dist/es2015/util.js");






var FreeFocusInside = function FreeFocusInside(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, (0,_util__WEBPACK_IMPORTED_MODULE_3__.inlineProp)(focus_lock_constants__WEBPACK_IMPORTED_MODULE_4__.FOCUS_ALLOW, true), {
    className: className
  }), children);
};

FreeFocusInside.propTypes =  true ? {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
} : 0;
FreeFocusInside.defaultProps = {
  className: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (FreeFocusInside);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/Lock.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/Lock.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var focus_lock_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! focus-lock/constants */ "./node_modules/focus-lock/dist/es2015/constants.js");
/* harmony import */ var use_callback_ref__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! use-callback-ref */ "./node_modules/use-callback-ref/dist/es2015/index.js");
/* harmony import */ var _FocusGuard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FocusGuard */ "./node_modules/react-focus-lock/dist/es2015/FocusGuard.js");
/* harmony import */ var _medium__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./medium */ "./node_modules/react-focus-lock/dist/es2015/medium.js");







var emptyArray = [];
var FocusLock = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function FocusLockUI(props, parentRef) {
  var _extends2;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(),
      realObserved = _React$useState[0],
      setObserved = _React$useState[1];

  var observed = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
  var isActive = react__WEBPACK_IMPORTED_MODULE_1__.useRef(false);
  var originalFocusedElement = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
  var children = props.children,
      disabled = props.disabled,
      noFocusGuards = props.noFocusGuards,
      persistentFocus = props.persistentFocus,
      crossFrame = props.crossFrame,
      autoFocus = props.autoFocus,
      allowTextSelection = props.allowTextSelection,
      group = props.group,
      className = props.className,
      whiteList = props.whiteList,
      _props$shards = props.shards,
      shards = _props$shards === void 0 ? emptyArray : _props$shards,
      _props$as = props.as,
      Container = _props$as === void 0 ? 'div' : _props$as,
      _props$lockProps = props.lockProps,
      containerProps = _props$lockProps === void 0 ? {} : _props$lockProps,
      SideCar = props.sideCar,
      shouldReturnFocus = props.returnFocus,
      onActivationCallback = props.onActivation,
      onDeactivationCallback = props.onDeactivation;

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_1__.useState({}),
      id = _React$useState2[0]; // SIDE EFFECT CALLBACKS


  var onActivation = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(function () {
    originalFocusedElement.current = originalFocusedElement.current || document && document.activeElement;

    if (observed.current && onActivationCallback) {
      onActivationCallback(observed.current);
    }

    isActive.current = true;
  }, [onActivationCallback]);
  var onDeactivation = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(function () {
    isActive.current = false;

    if (onDeactivationCallback) {
      onDeactivationCallback(observed.current);
    }
  }, [onDeactivationCallback]);
  var returnFocus = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(function (allowDefer) {
    var current = originalFocusedElement.current;

    if (Boolean(shouldReturnFocus) && current && current.focus) {
      var focusOptions = typeof shouldReturnFocus === 'object' ? shouldReturnFocus : undefined;
      originalFocusedElement.current = null;

      if (allowDefer) {
        // React might return focus after update
        // it's safer to defer the action
        Promise.resolve().then(function () {
          return current.focus(focusOptions);
        });
      } else {
        current.focus(focusOptions);
      }
    }
  }, [shouldReturnFocus]); // MEDIUM CALLBACKS

  var onFocus = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(function (event) {
    if (isActive.current) {
      _medium__WEBPACK_IMPORTED_MODULE_3__.mediumFocus.useMedium(event);
    }
  }, []);
  var onBlur = _medium__WEBPACK_IMPORTED_MODULE_3__.mediumBlur.useMedium; // REF PROPAGATION
  // not using real refs due to race conditions

  var setObserveNode = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(function (newObserved) {
    if (observed.current !== newObserved) {
      observed.current = newObserved;
      setObserved(newObserved);
    }
  }, []);

  if (true) {
    if (typeof allowTextSelection !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn('React-Focus-Lock: allowTextSelection is deprecated and enabled by default');
    }

    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {
      if (!observed.current) {
        // eslint-disable-next-line no-console
        console.error('FocusLock: could not obtain ref to internal node');
      }
    }, []);
  }

  var lockProps = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)((_extends2 = {}, _extends2[focus_lock_constants__WEBPACK_IMPORTED_MODULE_4__.FOCUS_DISABLED] = disabled && 'disabled', _extends2[focus_lock_constants__WEBPACK_IMPORTED_MODULE_4__.FOCUS_GROUP] = group, _extends2), containerProps);

  var hasLeadingGuards = noFocusGuards !== true;
  var hasTailingGuards = hasLeadingGuards && noFocusGuards !== 'tail';
  var mergedRef = (0,use_callback_ref__WEBPACK_IMPORTED_MODULE_5__.useMergeRefs)([parentRef, setObserveNode]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, hasLeadingGuards && [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    key: "guard-first",
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 0,
    style: _FocusGuard__WEBPACK_IMPORTED_MODULE_6__.hiddenGuard
  }),
  /*#__PURE__*/
  // nearest focus guard
  react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    key: "guard-nearest",
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 1,
    style: _FocusGuard__WEBPACK_IMPORTED_MODULE_6__.hiddenGuard
  }) // first tabbed element guard
  ], !disabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(SideCar, {
    id: id,
    sideCar: _medium__WEBPACK_IMPORTED_MODULE_3__.mediumSidecar,
    observed: realObserved,
    disabled: disabled,
    persistentFocus: persistentFocus,
    crossFrame: crossFrame,
    autoFocus: autoFocus,
    whiteList: whiteList,
    shards: shards,
    onActivation: onActivation,
    onDeactivation: onDeactivation,
    returnFocus: returnFocus
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Container, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    ref: mergedRef
  }, lockProps, {
    className: className,
    onBlur: onBlur,
    onFocus: onFocus
  }), children), hasTailingGuards && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 0,
    style: _FocusGuard__WEBPACK_IMPORTED_MODULE_6__.hiddenGuard
  }));
});
FocusLock.propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2__.node,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  returnFocus: (0,prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType)([prop_types__WEBPACK_IMPORTED_MODULE_2__.bool, prop_types__WEBPACK_IMPORTED_MODULE_2__.object]),
  noFocusGuards: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  allowTextSelection: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  persistentFocus: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  crossFrame: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  group: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  whiteList: prop_types__WEBPACK_IMPORTED_MODULE_2__.func,
  shards: (0,prop_types__WEBPACK_IMPORTED_MODULE_2__.arrayOf)(prop_types__WEBPACK_IMPORTED_MODULE_2__.any),
  as: (0,prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType)([prop_types__WEBPACK_IMPORTED_MODULE_2__.string, prop_types__WEBPACK_IMPORTED_MODULE_2__.func, prop_types__WEBPACK_IMPORTED_MODULE_2__.object]),
  lockProps: prop_types__WEBPACK_IMPORTED_MODULE_2__.object,
  onActivation: prop_types__WEBPACK_IMPORTED_MODULE_2__.func,
  onDeactivation: prop_types__WEBPACK_IMPORTED_MODULE_2__.func,
  sideCar: prop_types__WEBPACK_IMPORTED_MODULE_2__.any.isRequired
} : 0;
FocusLock.defaultProps = {
  children: undefined,
  disabled: false,
  returnFocus: false,
  noFocusGuards: false,
  autoFocus: true,
  persistentFocus: false,
  crossFrame: true,
  allowTextSelection: undefined,
  group: undefined,
  className: undefined,
  whiteList: undefined,
  shards: undefined,
  as: 'div',
  lockProps: {},
  onActivation: undefined,
  onDeactivation: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (FocusLock);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/MoveFocusInside.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/MoveFocusInside.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFocusInside": function() { return /* binding */ useFocusInside; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var focus_lock_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! focus-lock/constants */ "./node_modules/focus-lock/dist/es2015/constants.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./node_modules/react-focus-lock/dist/es2015/util.js");
/* harmony import */ var _medium__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./medium */ "./node_modules/react-focus-lock/dist/es2015/medium.js");






var useFocusInside = function useFocusInside(observedRef) {
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {
    var enabled = true;
    _medium__WEBPACK_IMPORTED_MODULE_3__.mediumEffect.useMedium(function (car) {
      var observed = observedRef && observedRef.current;

      if (enabled && observed) {
        if (!car.focusInside(observed)) {
          car.moveFocusInside(observed, null);
        }
      }
    });
    return function () {
      enabled = false;
    };
  }, [observedRef]);
};

function MoveFocusInside(_ref) {
  var isDisabled = _ref.disabled,
      className = _ref.className,
      children = _ref.children;
  var ref = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
  useFocusInside(isDisabled ? undefined : ref);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, (0,_util__WEBPACK_IMPORTED_MODULE_4__.inlineProp)(focus_lock_constants__WEBPACK_IMPORTED_MODULE_5__.FOCUS_AUTO, !isDisabled), {
    ref: ref,
    className: className
  }), children);
}

MoveFocusInside.propTypes =  true ? {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
} : 0;
MoveFocusInside.defaultProps = {
  disabled: false,
  className: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (MoveFocusInside);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/Trap.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/Trap.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_clientside_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-clientside-effect */ "./node_modules/react-clientside-effect/lib/index.es.js");
/* harmony import */ var focus_lock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! focus-lock */ "./node_modules/focus-lock/dist/es2015/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./node_modules/react-focus-lock/dist/es2015/util.js");
/* harmony import */ var _medium__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./medium */ "./node_modules/react-focus-lock/dist/es2015/medium.js");







var focusOnBody = function focusOnBody() {
  return document && document.activeElement === document.body;
};

var isFreeFocus = function isFreeFocus() {
  return focusOnBody() || (0,focus_lock__WEBPACK_IMPORTED_MODULE_3__.focusIsHidden)();
};

var lastActiveTrap = null;
var lastActiveFocus = null;
var lastPortaledElement = null;
var focusWasOutsideWindow = false;

var defaultWhitelist = function defaultWhitelist() {
  return true;
};

var focusWhitelisted = function focusWhitelisted(activeElement) {
  return (lastActiveTrap.whiteList || defaultWhitelist)(activeElement);
};

var recordPortal = function recordPortal(observerNode, portaledElement) {
  lastPortaledElement = {
    observerNode: observerNode,
    portaledElement: portaledElement
  };
};

var focusIsPortaledPair = function focusIsPortaledPair(element) {
  return lastPortaledElement && lastPortaledElement.portaledElement === element;
};

function autoGuard(startIndex, end, step, allNodes) {
  var lastGuard = null;
  var i = startIndex;

  do {
    var item = allNodes[i];

    if (item.guard) {
      if (item.node.dataset.focusAutoGuard) {
        lastGuard = item;
      }
    } else if (item.lockItem) {
      if (i !== startIndex) {
        // we will tab to the next element
        return;
      }

      lastGuard = null;
    } else {
      break;
    }
  } while ((i += step) !== end);

  if (lastGuard) {
    lastGuard.node.tabIndex = 0;
  }
}

var extractRef = function extractRef(ref) {
  return ref && 'current' in ref ? ref.current : ref;
};

var focusWasOutside = function focusWasOutside(crossFrameOption) {
  if (crossFrameOption) {
    // with cross frame return true for any value
    return Boolean(focusWasOutsideWindow);
  } // in other case return only of focus went a while aho


  return focusWasOutsideWindow === 'meanwhile';
};

var activateTrap = function activateTrap() {
  var result = false;

  if (lastActiveTrap) {
    var _lastActiveTrap = lastActiveTrap,
        observed = _lastActiveTrap.observed,
        persistentFocus = _lastActiveTrap.persistentFocus,
        autoFocus = _lastActiveTrap.autoFocus,
        shards = _lastActiveTrap.shards,
        crossFrame = _lastActiveTrap.crossFrame;
    var workingNode = observed || lastPortaledElement && lastPortaledElement.portaledElement;
    var activeElement = document && document.activeElement;

    if (workingNode) {
      var workingArea = [workingNode].concat(shards.map(extractRef).filter(Boolean));

      if (!activeElement || focusWhitelisted(activeElement)) {
        if (persistentFocus || focusWasOutside(crossFrame) || !isFreeFocus() || !lastActiveFocus && autoFocus) {
          if (workingNode && !((0,focus_lock__WEBPACK_IMPORTED_MODULE_3__.focusInside)(workingArea) || focusIsPortaledPair(activeElement, workingNode))) {
            if (document && !lastActiveFocus && activeElement && !autoFocus) {
              // Check if blur() exists, which is missing on certain elements on IE
              if (activeElement.blur) {
                activeElement.blur();
              }

              document.body.focus();
            } else {
              result = (0,focus_lock__WEBPACK_IMPORTED_MODULE_3__.default)(workingArea, lastActiveFocus);
              lastPortaledElement = {};
            }
          }

          focusWasOutsideWindow = false;
          lastActiveFocus = document && document.activeElement;
        }
      }

      if (document) {
        var newActiveElement = document && document.activeElement;
        var allNodes = (0,focus_lock__WEBPACK_IMPORTED_MODULE_3__.getFocusabledIn)(workingArea);
        var focusedIndex = allNodes.map(function (_ref) {
          var node = _ref.node;
          return node;
        }).indexOf(newActiveElement);

        if (focusedIndex > -1) {
          // remove old focus
          allNodes.filter(function (_ref2) {
            var guard = _ref2.guard,
                node = _ref2.node;
            return guard && node.dataset.focusAutoGuard;
          }).forEach(function (_ref3) {
            var node = _ref3.node;
            return node.removeAttribute('tabIndex');
          });
          autoGuard(focusedIndex, allNodes.length, +1, allNodes);
          autoGuard(focusedIndex, -1, -1, allNodes);
        }
      }
    }
  }

  return result;
};

var onTrap = function onTrap(event) {
  if (activateTrap() && event) {
    // prevent scroll jump
    event.stopPropagation();
    event.preventDefault();
  }
};

var onBlur = function onBlur() {
  return (0,_util__WEBPACK_IMPORTED_MODULE_4__.deferAction)(activateTrap);
};

var onFocus = function onFocus(event) {
  // detect portal
  var source = event.target;
  var currentNode = event.currentTarget;

  if (!currentNode.contains(source)) {
    recordPortal(currentNode, source);
  }
};

var FocusWatcher = function FocusWatcher() {
  return null;
};

var FocusTrap = function FocusTrap(_ref4) {
  var children = _ref4.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onBlur: onBlur,
    onFocus: onFocus
  }, children);
};

FocusTrap.propTypes =  true ? {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired)
} : 0;

var onWindowBlur = function onWindowBlur() {
  focusWasOutsideWindow = 'just'; // using setTimeout to set  this variable after React/sidecar reaction

  setTimeout(function () {
    focusWasOutsideWindow = 'meanwhile';
  }, 0);
};

var attachHandler = function attachHandler() {
  document.addEventListener('focusin', onTrap, true);
  document.addEventListener('focusout', onBlur);
  window.addEventListener('blur', onWindowBlur);
};

var detachHandler = function detachHandler() {
  document.removeEventListener('focusin', onTrap, true);
  document.removeEventListener('focusout', onBlur);
  window.removeEventListener('blur', onWindowBlur);
};

function reducePropsToState(propsList) {
  return propsList.filter(function (_ref5) {
    var disabled = _ref5.disabled;
    return !disabled;
  });
}

function handleStateChangeOnClient(traps) {
  var trap = traps.slice(-1)[0];

  if (trap && !lastActiveTrap) {
    attachHandler();
  }

  var lastTrap = lastActiveTrap;
  var sameTrap = lastTrap && trap && trap.id === lastTrap.id;
  lastActiveTrap = trap;

  if (lastTrap && !sameTrap) {
    lastTrap.onDeactivation(); // return focus only of last trap was removed

    if (!traps.filter(function (_ref6) {
      var id = _ref6.id;
      return id === lastTrap.id;
    }).length) {
      // allow defer is no other trap is awaiting restore
      lastTrap.returnFocus(!trap);
    }
  }

  if (trap) {
    lastActiveFocus = null;

    if (!sameTrap || lastTrap.observed !== trap.observed) {
      trap.onActivation();
    }

    activateTrap(true);
    (0,_util__WEBPACK_IMPORTED_MODULE_4__.deferAction)(activateTrap);
  } else {
    detachHandler();
    lastActiveFocus = null;
  }
} // bind medium


_medium__WEBPACK_IMPORTED_MODULE_5__.mediumFocus.assignSyncMedium(onFocus);
_medium__WEBPACK_IMPORTED_MODULE_5__.mediumBlur.assignMedium(onBlur);
_medium__WEBPACK_IMPORTED_MODULE_5__.mediumEffect.assignMedium(function (cb) {
  return cb({
    moveFocusInside: focus_lock__WEBPACK_IMPORTED_MODULE_3__.default,
    focusInside: focus_lock__WEBPACK_IMPORTED_MODULE_3__.focusInside
  });
});
/* harmony default export */ __webpack_exports__["default"] = ((0,react_clientside_effect__WEBPACK_IMPORTED_MODULE_2__.default)(reducePropsToState, handleStateChangeOnClient)(FocusWatcher));

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/UI.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/UI.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutoFocusInside": function() { return /* reexport safe */ _AutoFocusInside__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "MoveFocusInside": function() { return /* reexport safe */ _MoveFocusInside__WEBPACK_IMPORTED_MODULE_1__.default; },
/* harmony export */   "FreeFocusInside": function() { return /* reexport safe */ _FreeFocusInside__WEBPACK_IMPORTED_MODULE_2__.default; },
/* harmony export */   "InFocusGuard": function() { return /* reexport safe */ _FocusGuard__WEBPACK_IMPORTED_MODULE_3__.default; },
/* harmony export */   "FocusLockUI": function() { return /* reexport safe */ _Lock__WEBPACK_IMPORTED_MODULE_4__.default; },
/* harmony export */   "useFocusInside": function() { return /* reexport safe */ _MoveFocusInside__WEBPACK_IMPORTED_MODULE_1__.useFocusInside; }
/* harmony export */ });
/* harmony import */ var _Lock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Lock */ "./node_modules/react-focus-lock/dist/es2015/Lock.js");
/* harmony import */ var _AutoFocusInside__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AutoFocusInside */ "./node_modules/react-focus-lock/dist/es2015/AutoFocusInside.js");
/* harmony import */ var _MoveFocusInside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MoveFocusInside */ "./node_modules/react-focus-lock/dist/es2015/MoveFocusInside.js");
/* harmony import */ var _FreeFocusInside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FreeFocusInside */ "./node_modules/react-focus-lock/dist/es2015/FreeFocusInside.js");
/* harmony import */ var _FocusGuard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FocusGuard */ "./node_modules/react-focus-lock/dist/es2015/FocusGuard.js");






/* harmony default export */ __webpack_exports__["default"] = (_Lock__WEBPACK_IMPORTED_MODULE_4__.default);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/index.js":
/*!************************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/index.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Combination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Combination */ "./node_modules/react-focus-lock/dist/es2015/Combination.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./node_modules/react-focus-lock/dist/es2015/UI.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _UI__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _UI__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/* harmony default export */ __webpack_exports__["default"] = (_Combination__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/medium.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/medium.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mediumFocus": function() { return /* binding */ mediumFocus; },
/* harmony export */   "mediumBlur": function() { return /* binding */ mediumBlur; },
/* harmony export */   "mediumEffect": function() { return /* binding */ mediumEffect; },
/* harmony export */   "mediumSidecar": function() { return /* binding */ mediumSidecar; }
/* harmony export */ });
/* harmony import */ var use_sidecar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! use-sidecar */ "./node_modules/use-sidecar/dist/es2015/index.js");

var mediumFocus = (0,use_sidecar__WEBPACK_IMPORTED_MODULE_0__.createMedium)({}, function (_ref) {
  var target = _ref.target,
      currentTarget = _ref.currentTarget;
  return {
    target: target,
    currentTarget: currentTarget
  };
});
var mediumBlur = (0,use_sidecar__WEBPACK_IMPORTED_MODULE_0__.createMedium)();
var mediumEffect = (0,use_sidecar__WEBPACK_IMPORTED_MODULE_0__.createMedium)();
var mediumSidecar = (0,use_sidecar__WEBPACK_IMPORTED_MODULE_0__.createSidecarMedium)({
  async: true
});

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/util.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/util.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deferAction": function() { return /* binding */ deferAction; },
/* harmony export */   "inlineProp": function() { return /* binding */ inlineProp; }
/* harmony export */ });
function deferAction(action) {
  // Hidding setImmediate from Webpack to avoid inserting polyfill
  var _window = window,
      setImmediate = _window.setImmediate;

  if (typeof setImmediate !== 'undefined') {
    setImmediate(action);
  } else {
    setTimeout(action, 1);
  }
}
var inlineProp = function inlineProp(name, value) {
  var obj = {};
  obj[name] = value;
  return obj;
};

/***/ }),

/***/ "./node_modules/react-remove-scroll-bar/dist/es2015/component.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-remove-scroll-bar/dist/es2015/component.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemoveScrollBar": function() { return /* binding */ RemoveScrollBar; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_style_singleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-style-singleton */ "./node_modules/react-style-singleton/dist/es2015/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/react-remove-scroll-bar/dist/es2015/utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./node_modules/react-remove-scroll-bar/dist/es2015/constants.js");




var Style = (0,react_style_singleton__WEBPACK_IMPORTED_MODULE_1__.styleSingleton)();
var getStyles = function (_a, allowRelative, gapMode, important) {
    var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
    if (gapMode === void 0) { gapMode = 'margin'; }
    return "\n  ." + _constants__WEBPACK_IMPORTED_MODULE_3__.noScrollbarsClassName + " {\n   overflow: hidden " + important + ";\n   padding-right: " + gap + "px " + important + ";\n  }\n  body {\n    overflow: hidden " + important + ";\n    " + [
        allowRelative && "position: relative " + important + ";",
        gapMode === 'margin' && "\n    padding-left: " + left + "px;\n    padding-top: " + top + "px;\n    padding-right: " + right + "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: " + gap + "px " + important + ";\n    ",
        gapMode === 'padding' && "padding-right: " + gap + "px " + important + ";",
    ].filter(Boolean).join('') + "\n  }\n  \n  ." + _constants__WEBPACK_IMPORTED_MODULE_3__.zeroRightClassName + " {\n    right: " + gap + "px " + important + ";\n  }\n  \n  ." + _constants__WEBPACK_IMPORTED_MODULE_3__.fullWidthClassName + " {\n    margin-right: " + gap + "px " + important + ";\n  }\n  \n  ." + _constants__WEBPACK_IMPORTED_MODULE_3__.zeroRightClassName + " ." + _constants__WEBPACK_IMPORTED_MODULE_3__.zeroRightClassName + " {\n    right: 0 " + important + ";\n  }\n  \n  ." + _constants__WEBPACK_IMPORTED_MODULE_3__.fullWidthClassName + " ." + _constants__WEBPACK_IMPORTED_MODULE_3__.fullWidthClassName + " {\n    margin-right: 0 " + important + ";\n  }\n  \n  body {\n    " + _constants__WEBPACK_IMPORTED_MODULE_3__.removedBarSizeVariable + ": " + gap + "px;\n  }\n";
};
var RemoveScrollBar = function (props) {
    var _a = react__WEBPACK_IMPORTED_MODULE_0__.useState((0,_utils__WEBPACK_IMPORTED_MODULE_2__.getGapWidth)(props.gapMode)), gap = _a[0], setGap = _a[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        setGap((0,_utils__WEBPACK_IMPORTED_MODULE_2__.getGapWidth)(props.gapMode));
    }, [props.gapMode]);
    var noRelative = props.noRelative, noImportant = props.noImportant, _b = props.gapMode, gapMode = _b === void 0 ? 'margin' : _b;
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : '') });
};


/***/ }),

/***/ "./node_modules/react-remove-scroll-bar/dist/es2015/constants.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-remove-scroll-bar/dist/es2015/constants.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zeroRightClassName": function() { return /* binding */ zeroRightClassName; },
/* harmony export */   "fullWidthClassName": function() { return /* binding */ fullWidthClassName; },
/* harmony export */   "noScrollbarsClassName": function() { return /* binding */ noScrollbarsClassName; },
/* harmony export */   "removedBarSizeVariable": function() { return /* binding */ removedBarSizeVariable; }
/* harmony export */ });
var zeroRightClassName = 'right-scroll-bar-position';
var fullWidthClassName = 'width-before-scroll-bar';
var noScrollbarsClassName = 'with-scroll-bars-hidden';
var removedBarSizeVariable = '--removed-body-scroll-bar-size';


/***/ }),

/***/ "./node_modules/react-remove-scroll-bar/dist/es2015/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-remove-scroll-bar/dist/es2015/index.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemoveScrollBar": function() { return /* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_0__.RemoveScrollBar; },
/* harmony export */   "zeroRightClassName": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_2__.zeroRightClassName; },
/* harmony export */   "fullWidthClassName": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_2__.fullWidthClassName; },
/* harmony export */   "noScrollbarsClassName": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_2__.noScrollbarsClassName; },
/* harmony export */   "removedBarSizeVariable": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_2__.removedBarSizeVariable; },
/* harmony export */   "getGapWidth": function() { return /* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_1__.getGapWidth; }
/* harmony export */ });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/react-remove-scroll-bar/dist/es2015/component.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/react-remove-scroll-bar/dist/es2015/utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/react-remove-scroll-bar/dist/es2015/constants.js");






/***/ }),

/***/ "./node_modules/react-remove-scroll-bar/dist/es2015/utils.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-remove-scroll-bar/dist/es2015/utils.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zeroGap": function() { return /* binding */ zeroGap; },
/* harmony export */   "getGapWidth": function() { return /* binding */ getGapWidth; }
/* harmony export */ });
var zeroGap = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0,
};
var parse = function (x) { return parseInt(x || '', 10) || 0; };
var getOffset = function (gapMode) {
    var cs = window.getComputedStyle(document.body);
    var left = cs[gapMode === 'padding' ? 'paddingLeft' : 'marginLeft'];
    var top = cs[gapMode === 'padding' ? 'paddingTop' : 'marginTop'];
    var right = cs[gapMode === 'padding' ? 'paddingRight' : 'marginRight'];
    return [
        parse(left),
        parse(top),
        parse(right),
    ];
};
var getGapWidth = function (gapMode) {
    if (gapMode === void 0) { gapMode = 'margin'; }
    if (typeof window === 'undefined') {
        return zeroGap;
    }
    var offsets = getOffset(gapMode);
    var documentWidth = document.documentElement.clientWidth;
    var windowWidth = window.innerWidth;
    return {
        left: offsets[0],
        top: offsets[1],
        right: offsets[2],
        gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0]),
    };
};


/***/ }),

/***/ "./node_modules/react-remove-scroll/dist/es2015/Combination.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-remove-scroll/dist/es2015/Combination.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/react-remove-scroll/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI */ "./node_modules/react-remove-scroll/dist/es2015/UI.js");
/* harmony import */ var _sidecar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidecar */ "./node_modules/react-remove-scroll/dist/es2015/sidecar.js");




var ReactRemoveScroll = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_UI__WEBPACK_IMPORTED_MODULE_2__.RemoveScroll, tslib__WEBPACK_IMPORTED_MODULE_3__.__assign({}, props, { ref: ref, sideCar: _sidecar__WEBPACK_IMPORTED_MODULE_1__.default }))); });
ReactRemoveScroll.classNames = _UI__WEBPACK_IMPORTED_MODULE_2__.RemoveScroll.classNames;
/* harmony default export */ __webpack_exports__["default"] = (ReactRemoveScroll);


/***/ }),

/***/ "./node_modules/react-remove-scroll/dist/es2015/SideEffect.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-remove-scroll/dist/es2015/SideEffect.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTouchXY": function() { return /* binding */ getTouchXY; },
/* harmony export */   "getDeltaXY": function() { return /* binding */ getDeltaXY; },
/* harmony export */   "RemoveScrollSideCar": function() { return /* binding */ RemoveScrollSideCar; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_remove_scroll_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-remove-scroll-bar */ "./node_modules/react-remove-scroll-bar/dist/es2015/index.js");
/* harmony import */ var react_style_singleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-style-singleton */ "./node_modules/react-style-singleton/dist/es2015/index.js");
/* harmony import */ var _handleScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handleScroll */ "./node_modules/react-remove-scroll/dist/es2015/handleScroll.js");
/* harmony import */ var _aggresiveCapture__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aggresiveCapture */ "./node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js");





var getTouchXY = function (event) {
    return 'changedTouches' in event
        ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY]
        : [0, 0];
};
var getDeltaXY = function (event) { return [event.deltaX, event.deltaY]; };
var extractRef = function (ref) {
    return ref && 'current' in ref ? ref.current : ref;
};
var deltaCompare = function (x, y) {
    return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function (id) { return "\n  .block-interactivity-" + id + " {pointer-events: none;}\n  .allow-interactivity-" + id + " {pointer-events: all;}\n"; };
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
    var shouldPreventQueue = react__WEBPACK_IMPORTED_MODULE_0__.useRef([]);
    var touchStartRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef([0, 0]);
    var activeAxis = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    var id = react__WEBPACK_IMPORTED_MODULE_0__.useState(idCounter++)[0];
    var Style = react__WEBPACK_IMPORTED_MODULE_0__.useState(function () { return (0,react_style_singleton__WEBPACK_IMPORTED_MODULE_2__.styleSingleton)(); })[0];
    var lastProps = react__WEBPACK_IMPORTED_MODULE_0__.useRef(props);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        lastProps.current = props;
    }, [props]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (props.inert) {
            document.body.classList.add("block-interactivity-" + id);
            var allow_1 = [
                props.lockRef.current
            ].concat((props.shards || []).map(extractRef)).filter(Boolean);
            allow_1.forEach(function (el) { return el.classList.add("allow-interactivity-" + id); });
            return function () {
                document.body.classList.remove("block-interactivity-" + id);
                allow_1.forEach(function (el) {
                    return el.classList.remove("allow-interactivity-" + id);
                });
            };
        }
        return;
    }, [props.inert, props.lockRef.current, props.shards]);
    var shouldCancelEvent = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (event, parent) {
        if ('touches' in event && event.touches.length === 2) {
            return !lastProps.current.allowPinchZoom;
        }
        var touch = getTouchXY(event);
        var touchStart = touchStartRef.current;
        var deltaX = 'deltaX' in event ? event.deltaX : touchStart[0] - touch[0];
        var deltaY = 'deltaY' in event ? event.deltaY : touchStart[1] - touch[1];
        var currentAxis;
        var target = event.target;
        var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? 'h' : 'v';
        var canBeScrolledInMainDirection = (0,_handleScroll__WEBPACK_IMPORTED_MODULE_3__.locationCouldBeScrolled)(moveDirection, target);
        if (!canBeScrolledInMainDirection) {
            return true;
        }
        if (canBeScrolledInMainDirection) {
            currentAxis = moveDirection;
        }
        else {
            currentAxis = moveDirection === 'v' ? 'h' : 'v';
            canBeScrolledInMainDirection = (0,_handleScroll__WEBPACK_IMPORTED_MODULE_3__.locationCouldBeScrolled)(moveDirection, target);
            // other axis might be not scrollable
        }
        if (!canBeScrolledInMainDirection) {
            return false;
        }
        if (!activeAxis.current &&
            'changedTouches' in event &&
            (deltaX || deltaY)) {
            activeAxis.current = currentAxis;
        }
        if (!currentAxis) {
            return true;
        }
        var cancelingAxis = activeAxis.current || currentAxis;
        return (0,_handleScroll__WEBPACK_IMPORTED_MODULE_3__.handleScroll)(cancelingAxis, parent, event, cancelingAxis === 'h' ? deltaX : deltaY, true);
    }, []);
    var shouldPrevent = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (_event) {
        var event = _event;
        if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
            // not the last active
            return;
        }
        var delta = 'deltaY' in event ? getDeltaXY(event) : getTouchXY(event);
        var sourceEvent = shouldPreventQueue.current.filter(function (e) {
            return e.name === event.type &&
                e.target === event.target &&
                deltaCompare(e.delta, delta);
        })[0];
        // self event, and should be canceled
        if (sourceEvent && sourceEvent.should) {
            event.preventDefault();
            return;
        }
        // outside or shard event
        if (!sourceEvent) {
            var shardNodes = (lastProps.current.shards || [])
                .map(extractRef)
                .filter(Boolean)
                .filter(function (node) { return node.contains(event.target); });
            var shouldStop = shardNodes.length > 0
                ? shouldCancelEvent(event, shardNodes[0])
                : !lastProps.current.noIsolation;
            if (shouldStop) {
                event.preventDefault();
            }
        }
    }, []);
    var shouldCancel = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (name, delta, target, should) {
        var event = { name: name, delta: delta, target: target, should: should };
        shouldPreventQueue.current.push(event);
        setTimeout(function () {
            shouldPreventQueue.current = shouldPreventQueue.current.filter(function (e) { return e !== event; });
        }, 1);
    }, []);
    var scrollTouchStart = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (event) {
        touchStartRef.current = getTouchXY(event);
        activeAxis.current = undefined;
    }, []);
    var scrollWheel = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (event) {
        shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    var scrollTouchMove = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (event) {
        shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        lockStack.push(Style);
        props.setCallbacks({
            onScrollCapture: scrollWheel,
            onWheelCapture: scrollWheel,
            onTouchMoveCapture: scrollTouchMove
        });
        document.addEventListener('wheel', shouldPrevent, _aggresiveCapture__WEBPACK_IMPORTED_MODULE_4__.nonPassive);
        document.addEventListener('touchmove', shouldPrevent, _aggresiveCapture__WEBPACK_IMPORTED_MODULE_4__.nonPassive);
        document.addEventListener('touchstart', scrollTouchStart, _aggresiveCapture__WEBPACK_IMPORTED_MODULE_4__.nonPassive);
        return function () {
            lockStack = lockStack.filter(function (inst) { return inst !== Style; });
            document.removeEventListener('wheel', shouldPrevent, _aggresiveCapture__WEBPACK_IMPORTED_MODULE_4__.nonPassive);
            document.removeEventListener('touchmove', shouldPrevent, _aggresiveCapture__WEBPACK_IMPORTED_MODULE_4__.nonPassive);
            document.removeEventListener('touchstart', scrollTouchStart, _aggresiveCapture__WEBPACK_IMPORTED_MODULE_4__.nonPassive);
        };
    }, []);
    var removeScrollBar = props.removeScrollBar, inert = props.inert;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        inert ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(Style, { styles: generateStyle(id) }) : null,
        removeScrollBar ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_remove_scroll_bar__WEBPACK_IMPORTED_MODULE_1__.RemoveScrollBar, { gapMode: "margin" }) : null));
}


/***/ }),

/***/ "./node_modules/react-remove-scroll/dist/es2015/UI.js":
/*!************************************************************!*\
  !*** ./node_modules/react-remove-scroll/dist/es2015/UI.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemoveScroll": function() { return /* binding */ RemoveScroll; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/react-remove-scroll/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_remove_scroll_bar_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-remove-scroll-bar/constants */ "./node_modules/react-remove-scroll-bar/dist/es2015/constants.js");
/* harmony import */ var _medium__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./medium */ "./node_modules/react-remove-scroll/dist/es2015/medium.js");
/* harmony import */ var use_callback_ref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-callback-ref */ "./node_modules/use-callback-ref/dist/es2015/index.js");





var nothing = function () {
    return;
};
/**
 * Removes scrollbar from the page and contain the scroll within the Lock
 */
var RemoveScroll = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, parentRef) {
    var ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    var _a = react__WEBPACK_IMPORTED_MODULE_0__.useState({
        onScrollCapture: nothing,
        onWheelCapture: nothing,
        onTouchMoveCapture: nothing
    }), callbacks = _a[0], setCallbacks = _a[1];
    var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? 'div' : _b, rest = tslib__WEBPACK_IMPORTED_MODULE_2__.__rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]);
    var SideCar = sideCar;
    var containerRef = (0,use_callback_ref__WEBPACK_IMPORTED_MODULE_3__.useMergeRefs)([
        ref,
        parentRef
    ]);
    var containerProps = tslib__WEBPACK_IMPORTED_MODULE_2__.__assign({}, rest, callbacks);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        enabled && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(SideCar, { sideCar: _medium__WEBPACK_IMPORTED_MODULE_4__.effectCar, removeScrollBar: removeScrollBar, shards: shards, noIsolation: noIsolation, inert: inert, setCallbacks: setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref })),
        forwardProps ? (react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children), tslib__WEBPACK_IMPORTED_MODULE_2__.__assign({}, containerProps, { ref: containerRef }))) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Container, tslib__WEBPACK_IMPORTED_MODULE_2__.__assign({}, containerProps, { className: className, ref: containerRef }), children))));
});
RemoveScroll.defaultProps = {
    enabled: true,
    removeScrollBar: true,
    inert: false
};
RemoveScroll.classNames = {
    fullWidth: react_remove_scroll_bar_constants__WEBPACK_IMPORTED_MODULE_1__.fullWidthClassName,
    zeroRight: react_remove_scroll_bar_constants__WEBPACK_IMPORTED_MODULE_1__.zeroRightClassName
};



/***/ }),

/***/ "./node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nonPassive": function() { return /* binding */ nonPassive; }
/* harmony export */ });
var passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        var options = Object.defineProperty({}, 'passive', {
            get: function () {
                passiveSupported = true;
                return true;
            }
        });
        window.addEventListener('test', options, options);
        window.removeEventListener('test', options, options);
    }
    catch (err) {
        passiveSupported = false;
    }
}
var nonPassive = passiveSupported ? { passive: false } : false;


/***/ }),

/***/ "./node_modules/react-remove-scroll/dist/es2015/handleScroll.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-remove-scroll/dist/es2015/handleScroll.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locationCouldBeScrolled": function() { return /* binding */ locationCouldBeScrolled; },
/* harmony export */   "handleScroll": function() { return /* binding */ handleScroll; }
/* harmony export */ });
var elementCouldBeVScrolled = function (node) {
    var styles = window.getComputedStyle(node);
    return (styles.overflowY !== 'hidden' && // not-not-scrollable
        !(styles.overflowY === styles.overflowX && styles.overflowY === 'visible') // scrollable
    );
};
var elementCouldBeHScrolled = function (node) {
    var styles = window.getComputedStyle(node);
    // we allow horizontal scroll on range elements
    if (node.type === "range") {
        return true;
    }
    return (styles.overflowX !== 'hidden' && // not-not-scrollable
        !(styles.overflowY === styles.overflowX && styles.overflowX === 'visible') // scrollable
    );
};
var locationCouldBeScrolled = function (axis, node) {
    var current = node;
    do {
        // Skip over shadow root
        if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
            current = current.host;
        }
        var isScrollable = elementCouldBeScrolled(axis, current);
        if (isScrollable) {
            var _a = getScrollVariables(axis, current), s = _a[1], d = _a[2];
            if (s > d) {
                return true;
            }
        }
        current = current.parentNode;
    } while (current && current !== document.body);
    return false;
};
var getVScrollVariables = function (_a) {
    var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
    return [scrollTop, scrollHeight, clientHeight];
};
var getHScrollVariables = function (_a) {
    var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
    return [scrollLeft, scrollWidth, clientWidth];
};
var elementCouldBeScrolled = function (axis, node) {
    return axis === 'v' ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function (axis, node) {
    return axis === 'v' ? getVScrollVariables(node) : getHScrollVariables(node);
};
var handleScroll = function (axis, endTarget, event, sourceDelta, noOverscroll) {
    var delta = sourceDelta;
    // find scrollable target
    var target = event.target;
    var targetInLock = endTarget.contains(target);
    var shouldCancelScroll = false;
    var isDeltaPositive = delta > 0;
    var availableScroll = 0;
    var availableScrollTop = 0;
    do {
        var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
        var elementScroll = scroll_1 - capacity - position;
        if (position || elementScroll) {
            if (elementCouldBeScrolled(axis, target)) {
                availableScroll += elementScroll;
                availableScrollTop += position;
            }
        }
        target = target.parentNode;
    } while (
    // portaled content
    (!targetInLock && target !== document.body) ||
        // self content
        (targetInLock && (endTarget.contains(target) || endTarget === target)));
    if (isDeltaPositive &&
        ((noOverscroll && availableScroll === 0) ||
            (!noOverscroll && delta > availableScroll))) {
        shouldCancelScroll = true;
    }
    else if (!isDeltaPositive &&
        ((noOverscroll && availableScrollTop === 0) ||
            (!noOverscroll && -delta > availableScrollTop))) {
        shouldCancelScroll = true;
    }
    return shouldCancelScroll;
};


/***/ }),

/***/ "./node_modules/react-remove-scroll/dist/es2015/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-remove-scroll/dist/es2015/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemoveScroll": function() { return /* reexport safe */ _Combination__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _Combination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Combination */ "./node_modules/react-remove-scroll/dist/es2015/Combination.js");




/***/ }),

/***/ "./node_modules/react-remove-scroll/dist/es2015/medium.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-remove-scroll/dist/es2015/medium.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "effectCar": function() { return /* binding */ effectCar; }
/* harmony export */ });
/* harmony import */ var use_sidecar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! use-sidecar */ "./node_modules/use-sidecar/dist/es2015/index.js");

var effectCar = (0,use_sidecar__WEBPACK_IMPORTED_MODULE_0__.createSidecarMedium)();


/***/ }),

/***/ "./node_modules/react-remove-scroll/dist/es2015/sidecar.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-remove-scroll/dist/es2015/sidecar.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var use_sidecar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! use-sidecar */ "./node_modules/use-sidecar/dist/es2015/index.js");
/* harmony import */ var _SideEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideEffect */ "./node_modules/react-remove-scroll/dist/es2015/SideEffect.js");
/* harmony import */ var _medium__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./medium */ "./node_modules/react-remove-scroll/dist/es2015/medium.js");



/* harmony default export */ __webpack_exports__["default"] = ((0,use_sidecar__WEBPACK_IMPORTED_MODULE_0__.exportSidecar)(_medium__WEBPACK_IMPORTED_MODULE_1__.effectCar, _SideEffect__WEBPACK_IMPORTED_MODULE_2__.RemoveScrollSideCar));


/***/ }),

/***/ "./node_modules/react-remove-scroll/node_modules/tslib/tslib.es6.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-remove-scroll/node_modules/tslib/tslib.es6.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": function() { return /* binding */ __extends; },
/* harmony export */   "__assign": function() { return /* binding */ __assign; },
/* harmony export */   "__rest": function() { return /* binding */ __rest; },
/* harmony export */   "__decorate": function() { return /* binding */ __decorate; },
/* harmony export */   "__param": function() { return /* binding */ __param; },
/* harmony export */   "__metadata": function() { return /* binding */ __metadata; },
/* harmony export */   "__awaiter": function() { return /* binding */ __awaiter; },
/* harmony export */   "__generator": function() { return /* binding */ __generator; },
/* harmony export */   "__createBinding": function() { return /* binding */ __createBinding; },
/* harmony export */   "__exportStar": function() { return /* binding */ __exportStar; },
/* harmony export */   "__values": function() { return /* binding */ __values; },
/* harmony export */   "__read": function() { return /* binding */ __read; },
/* harmony export */   "__spread": function() { return /* binding */ __spread; },
/* harmony export */   "__spreadArrays": function() { return /* binding */ __spreadArrays; },
/* harmony export */   "__await": function() { return /* binding */ __await; },
/* harmony export */   "__asyncGenerator": function() { return /* binding */ __asyncGenerator; },
/* harmony export */   "__asyncDelegator": function() { return /* binding */ __asyncDelegator; },
/* harmony export */   "__asyncValues": function() { return /* binding */ __asyncValues; },
/* harmony export */   "__makeTemplateObject": function() { return /* binding */ __makeTemplateObject; },
/* harmony export */   "__importStar": function() { return /* binding */ __importStar; },
/* harmony export */   "__importDefault": function() { return /* binding */ __importDefault; },
/* harmony export */   "__classPrivateFieldGet": function() { return /* binding */ __classPrivateFieldGet; },
/* harmony export */   "__classPrivateFieldSet": function() { return /* binding */ __classPrivateFieldSet; }
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/react-style-singleton/dist/es2015/component.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-style-singleton/dist/es2015/component.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styleSingleton": function() { return /* binding */ styleSingleton; }
/* harmony export */ });
/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hook */ "./node_modules/react-style-singleton/dist/es2015/hook.js");

var styleSingleton = function () {
    var useStyle = (0,_hook__WEBPACK_IMPORTED_MODULE_0__.styleHookSingleton)();
    var Sheet = function (_a) {
        var styles = _a.styles;
        useStyle(styles);
        return null;
    };
    return Sheet;
};


/***/ }),

/***/ "./node_modules/react-style-singleton/dist/es2015/hook.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-style-singleton/dist/es2015/hook.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styleHookSingleton": function() { return /* binding */ styleHookSingleton; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _singleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./singleton */ "./node_modules/react-style-singleton/dist/es2015/singleton.js");


var styleHookSingleton = function () {
    var sheet = (0,_singleton__WEBPACK_IMPORTED_MODULE_1__.stylesheetSingleton)();
    return function (styles) {
        react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
            sheet.add(styles);
            return function () {
                sheet.remove();
            };
        }, []);
    };
};


/***/ }),

/***/ "./node_modules/react-style-singleton/dist/es2015/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-style-singleton/dist/es2015/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styleSingleton": function() { return /* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_0__.styleSingleton; },
/* harmony export */   "stylesheetSingleton": function() { return /* reexport safe */ _singleton__WEBPACK_IMPORTED_MODULE_1__.stylesheetSingleton; },
/* harmony export */   "styleHookSingleton": function() { return /* reexport safe */ _hook__WEBPACK_IMPORTED_MODULE_2__.styleHookSingleton; }
/* harmony export */ });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/react-style-singleton/dist/es2015/component.js");
/* harmony import */ var _singleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./singleton */ "./node_modules/react-style-singleton/dist/es2015/singleton.js");
/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hook */ "./node_modules/react-style-singleton/dist/es2015/hook.js");





/***/ }),

/***/ "./node_modules/react-style-singleton/dist/es2015/singleton.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-style-singleton/dist/es2015/singleton.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stylesheetSingleton": function() { return /* binding */ stylesheetSingleton; }
/* harmony export */ });
/* harmony import */ var get_nonce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! get-nonce */ "./node_modules/get-nonce/dist/es2015/index.js");

function makeStyleTag() {
    if (!document)
        return null;
    var tag = document.createElement('style');
    tag.type = 'text/css';
    var nonce = (0,get_nonce__WEBPACK_IMPORTED_MODULE_0__.getNonce)();
    if (nonce) {
        tag.setAttribute('nonce', nonce);
    }
    return tag;
}
function injectStyles(tag, css) {
    if (tag.styleSheet) {
        tag.styleSheet.cssText = css;
    }
    else {
        tag.appendChild(document.createTextNode(css));
    }
}
function insertStyleTag(tag) {
    var head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(tag);
}
var stylesheetSingleton = function () {
    var counter = 0;
    var stylesheet = null;
    return {
        add: function (style) {
            if (counter == 0) {
                if (stylesheet = makeStyleTag()) {
                    injectStyles(stylesheet, style);
                    insertStyleTag(stylesheet);
                }
            }
            counter++;
        },
        remove: function () {
            counter--;
            if (!counter && stylesheet) {
                stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
                stylesheet = null;
            }
        }
    };
};


/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/assignRef.js":
/*!****************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/assignRef.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assignRef": function() { return /* binding */ assignRef; }
/* harmony export */ });
/**
 * Assigns a value for a given ref, no matter of the ref format
 * @param {RefObject} ref - a callback function or ref object
 * @param value - a new value
 *
 * @see https://github.com/theKashey/use-callback-ref#assignref
 * @example
 * const refObject = useRef();
 * const refFn = (ref) => {....}
 *
 * assignRef(refObject, "refValue");
 * assignRef(refFn, "refValue");
 */
function assignRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    }
    else if (ref) {
        ref.current = value;
    }
    return ref;
}


/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/createRef.js":
/*!****************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/createRef.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCallbackRef": function() { return /* binding */ createCallbackRef; }
/* harmony export */ });
/**
 * creates a Ref object with on change callback
 * @param callback
 * @returns {RefObject}
 *
 * @see {@link useCallbackRef}
 * @see https://reactjs.org/docs/refs-and-the-dom.html#creating-refs
 */
function createCallbackRef(callback) {
    var current = null;
    return {
        get current() {
            return current;
        },
        set current(value) {
            var last = current;
            if (last !== value) {
                current = value;
                callback(value, last);
            }
        }
    };
}


/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/index.js":
/*!************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/index.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assignRef": function() { return /* reexport safe */ _assignRef__WEBPACK_IMPORTED_MODULE_0__.assignRef; },
/* harmony export */   "useCallbackRef": function() { return /* reexport safe */ _useRef__WEBPACK_IMPORTED_MODULE_1__.useCallbackRef; },
/* harmony export */   "createCallbackRef": function() { return /* reexport safe */ _createRef__WEBPACK_IMPORTED_MODULE_2__.createCallbackRef; },
/* harmony export */   "mergeRefs": function() { return /* reexport safe */ _mergeRef__WEBPACK_IMPORTED_MODULE_3__.mergeRefs; },
/* harmony export */   "useMergeRefs": function() { return /* reexport safe */ _useMergeRef__WEBPACK_IMPORTED_MODULE_4__.useMergeRefs; },
/* harmony export */   "useTransformRef": function() { return /* reexport safe */ _useTransformRef__WEBPACK_IMPORTED_MODULE_5__.useTransformRef; },
/* harmony export */   "transformRef": function() { return /* reexport safe */ _transformRef__WEBPACK_IMPORTED_MODULE_6__.transformRef; },
/* harmony export */   "refToCallback": function() { return /* reexport safe */ _refToCallback__WEBPACK_IMPORTED_MODULE_7__.refToCallback; },
/* harmony export */   "useRefToCallback": function() { return /* reexport safe */ _refToCallback__WEBPACK_IMPORTED_MODULE_7__.useRefToCallback; }
/* harmony export */ });
/* harmony import */ var _assignRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assignRef */ "./node_modules/use-callback-ref/dist/es2015/assignRef.js");
/* harmony import */ var _useRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useRef */ "./node_modules/use-callback-ref/dist/es2015/useRef.js");
/* harmony import */ var _createRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createRef */ "./node_modules/use-callback-ref/dist/es2015/createRef.js");
/* harmony import */ var _mergeRef__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mergeRef */ "./node_modules/use-callback-ref/dist/es2015/mergeRef.js");
/* harmony import */ var _useMergeRef__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useMergeRef */ "./node_modules/use-callback-ref/dist/es2015/useMergeRef.js");
/* harmony import */ var _useTransformRef__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useTransformRef */ "./node_modules/use-callback-ref/dist/es2015/useTransformRef.js");
/* harmony import */ var _transformRef__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transformRef */ "./node_modules/use-callback-ref/dist/es2015/transformRef.js");
/* harmony import */ var _refToCallback__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./refToCallback */ "./node_modules/use-callback-ref/dist/es2015/refToCallback.js");

// callback ref


// merge ref


// transform ref


// refToCallback



/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/mergeRef.js":
/*!***************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/mergeRef.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mergeRefs": function() { return /* binding */ mergeRefs; }
/* harmony export */ });
/* harmony import */ var _createRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createRef */ "./node_modules/use-callback-ref/dist/es2015/createRef.js");
/* harmony import */ var _assignRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assignRef */ "./node_modules/use-callback-ref/dist/es2015/assignRef.js");


/**
 * Merges two or more refs together providing a single interface to set their value
 * @param {RefObject|Ref} refs
 * @returns {MutableRefObject} - a new ref, which translates all changes to {refs}
 *
 * @see {@link useMergeRefs} to be used in ReactComponents
 * @example
 * const Component = React.forwardRef((props, ref) => {
 *   const ownRef = useRef();
 *   const domRef = mergeRefs([ref, ownRef]); // 👈 merge together
 *   return <div ref={domRef}>...</div>
 * }
 */
function mergeRefs(refs) {
    return (0,_createRef__WEBPACK_IMPORTED_MODULE_0__.createCallbackRef)(function (newValue) {
        return refs.forEach(function (ref) { return (0,_assignRef__WEBPACK_IMPORTED_MODULE_1__.assignRef)(ref, newValue); });
    });
}


/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/refToCallback.js":
/*!********************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/refToCallback.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "refToCallback": function() { return /* binding */ refToCallback; },
/* harmony export */   "useRefToCallback": function() { return /* binding */ useRefToCallback; }
/* harmony export */ });
/**
 * Unmemoized version of {@link useRefToCallback}
 * @see {@link useRefToCallback}
 * @param ref
 */
function refToCallback(ref) {
    return function (newValue) {
        if (typeof ref === 'function') {
            ref(newValue);
        }
        else if (ref) {
            ref.current = newValue;
        }
    };
}
var nullCallback = function () { return null; };
// lets maintain a weak ref to, well, ref :)
// not using `kashe` to keep this package small
var weakMem = new WeakMap();
var weakMemoize = function (ref) {
    var usedRef = ref || nullCallback;
    if (weakMem.has(usedRef)) {
        return weakMem.get(usedRef);
    }
    var cb = refToCallback(usedRef);
    weakMem.set(usedRef, cb);
    return cb;
};
/**
 * Transforms a given `ref` into `callback`.
 *
 * To transform `callback` into ref use {@link useCallbackRef|useCallbackRef(undefined, callback)}
 *
 * @param {ReactRef} ref
 * @returns {Function}
 *
 * @see https://github.com/theKashey/use-callback-ref#reftocallback
 *
 * @example
 * const ref = useRef(0);
 * const setRef = useRefToCallback(ref);
 * 👉 setRef(10);
 * ✅ ref.current === 10
 */
function useRefToCallback(ref) {
    return weakMemoize(ref);
}


/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/transformRef.js":
/*!*******************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/transformRef.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "transformRef": function() { return /* binding */ transformRef; }
/* harmony export */ });
/* harmony import */ var _assignRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assignRef */ "./node_modules/use-callback-ref/dist/es2015/assignRef.js");
/* harmony import */ var _createRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createRef */ "./node_modules/use-callback-ref/dist/es2015/createRef.js");


function transformRef(ref, transformer) {
    return (0,_createRef__WEBPACK_IMPORTED_MODULE_0__.createCallbackRef)(function (value) { return (0,_assignRef__WEBPACK_IMPORTED_MODULE_1__.assignRef)(ref, transformer(value)); });
}


/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/useMergeRef.js":
/*!******************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/useMergeRef.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useMergeRefs": function() { return /* binding */ useMergeRefs; }
/* harmony export */ });
/* harmony import */ var _useRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useRef */ "./node_modules/use-callback-ref/dist/es2015/useRef.js");
/* harmony import */ var _assignRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assignRef */ "./node_modules/use-callback-ref/dist/es2015/assignRef.js");


/**
 * Merges two or more refs together providing a single interface to set their value
 * @param {RefObject|Ref} refs
 * @returns {MutableRefObject} - a new ref, which translates all changes to {refs}
 *
 * @see {@link mergeRefs} a version without buit-in memoization
 * @see https://github.com/theKashey/use-callback-ref#usemergerefs
 * @example
 * const Component = React.forwardRef((props, ref) => {
 *   const ownRef = useRef();
 *   const domRef = useMergeRefs([ref, ownRef]); // 👈 merge together
 *   return <div ref={domRef}>...</div>
 * }
 */
function useMergeRefs(refs, defaultValue) {
    return (0,_useRef__WEBPACK_IMPORTED_MODULE_0__.useCallbackRef)(defaultValue, function (newValue) {
        return refs.forEach(function (ref) { return (0,_assignRef__WEBPACK_IMPORTED_MODULE_1__.assignRef)(ref, newValue); });
    });
}


/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/useRef.js":
/*!*************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/useRef.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCallbackRef": function() { return /* binding */ useCallbackRef; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * creates a MutableRef with ref change callback
 * @param initialValue - initial ref value
 * @param {Function} callback - a callback to run when value changes
 *
 * @example
 * const ref = useCallbackRef(0, (newValue, oldValue) => console.log(oldValue, '->', newValue);
 * ref.current = 1;
 * // prints 0 -> 1
 *
 * @see https://reactjs.org/docs/hooks-reference.html#useref
 * @see https://github.com/theKashey/use-callback-ref#usecallbackref---to-replace-reactuseref
 * @returns {MutableRefObject}
 */
function useCallbackRef(initialValue, callback) {
    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () { return ({
        // value
        value: initialValue,
        // last callback
        callback: callback,
        // "memoized" public interface
        facade: {
            get current() {
                return ref.value;
            },
            set current(value) {
                var last = ref.value;
                if (last !== value) {
                    ref.value = value;
                    ref.callback(value, last);
                }
            }
        }
    }); })[0];
    // update callback
    ref.callback = callback;
    return ref.facade;
}


/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/useTransformRef.js":
/*!**********************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/useTransformRef.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useTransformRef": function() { return /* binding */ useTransformRef; }
/* harmony export */ });
/* harmony import */ var _useRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useRef */ "./node_modules/use-callback-ref/dist/es2015/useRef.js");
/* harmony import */ var _assignRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assignRef */ "./node_modules/use-callback-ref/dist/es2015/assignRef.js");


/**
 * Create a _lense_ on Ref, making it possible to transform ref value
 * @param {ReactRef} ref
 * @param {Function} transformer. 👉 Ref would be __NOT updated__ on `transformer` update.
 * @returns {RefObject}
 *
 * @see https://github.com/theKashey/use-callback-ref#usetransformref-to-replace-reactuseimperativehandle
 * @example
 *
 * const ResizableWithRef = forwardRef((props, ref) =>
 *  <Resizable {...props} ref={useTransformRef(ref, i => i ? i.resizable : null)}/>
 * );
 */
function useTransformRef(ref, transformer) {
    return (0,_useRef__WEBPACK_IMPORTED_MODULE_0__.useCallbackRef)(undefined, function (value) {
        return (0,_assignRef__WEBPACK_IMPORTED_MODULE_1__.assignRef)(ref, transformer(value));
    });
}


/***/ }),

/***/ "./node_modules/use-sidecar/dist/es2015/config.js":
/*!********************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es2015/config.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": function() { return /* binding */ config; },
/* harmony export */   "setConfig": function() { return /* binding */ setConfig; }
/* harmony export */ });
var config = {
    onError: function (e) { return console.error(e); },
};
var setConfig = function (conf) {
    Object.assign(config, conf);
};


/***/ }),

/***/ "./node_modules/use-sidecar/dist/es2015/env.js":
/*!*****************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es2015/env.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "env": function() { return /* binding */ env; }
/* harmony export */ });
/* harmony import */ var detect_node_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! detect-node-es */ "./node_modules/detect-node-es/esm/browser.js");

var env = {
    isNode: detect_node_es__WEBPACK_IMPORTED_MODULE_0__.isNode,
    forceCache: false,
};


/***/ }),

/***/ "./node_modules/use-sidecar/dist/es2015/exports.js":
/*!*********************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es2015/exports.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "exportSidecar": function() { return /* binding */ exportSidecar; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/use-sidecar/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var SideCar = function (_a) {
    var sideCar = _a.sideCar, rest = tslib__WEBPACK_IMPORTED_MODULE_1__.__rest(_a, ["sideCar"]);
    if (!sideCar) {
        throw new Error('Sidecar: please provide `sideCar` property to import the right car');
    }
    var Target = sideCar.read();
    if (!Target) {
        throw new Error('Sidecar medium not found');
    }
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Target, tslib__WEBPACK_IMPORTED_MODULE_1__.__assign({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
    medium.useMedium(exported);
    return SideCar;
}


/***/ }),

/***/ "./node_modules/use-sidecar/dist/es2015/hoc.js":
/*!*****************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es2015/hoc.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sidecar": function() { return /* binding */ sidecar; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/use-sidecar/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hook */ "./node_modules/use-sidecar/dist/es2015/hook.js");



function sidecar(importer, errorComponent) {
    var ErrorCase = function () { return errorComponent; };
    return function Sidecar(props) {
        var _a = (0,_hook__WEBPACK_IMPORTED_MODULE_1__.useSidecar)(importer, props.sideCar), Car = _a[0], error = _a[1];
        if (error && errorComponent) {
            return ErrorCase;
        }
        return Car ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(Car, tslib__WEBPACK_IMPORTED_MODULE_2__.__assign({}, props)) : null;
    };
}


/***/ }),

/***/ "./node_modules/use-sidecar/dist/es2015/hook.js":
/*!******************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es2015/hook.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSidecar": function() { return /* binding */ useSidecar; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./env */ "./node_modules/use-sidecar/dist/es2015/env.js");


var cache = new WeakMap();
function useSidecar(importer, effect) {
    var options = effect && effect.options || {};
    if (_env__WEBPACK_IMPORTED_MODULE_1__.env.isNode && !options.ssr) {
        return [null, null];
    }
    var couldUseCache = _env__WEBPACK_IMPORTED_MODULE_1__.env.forceCache || (_env__WEBPACK_IMPORTED_MODULE_1__.env.isNode && !!options.ssr) || (!options.async);
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(couldUseCache ? function () { return cache.get(importer); } : undefined), Car = _a[0], setCar = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), error = _b[0], setError = _b[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (!Car) {
            importer()
                .then(function (car) {
                var resolved = effect ? effect.read() : (car.default || car);
                if (!resolved) {
                    console.error('Sidecar error: with importer', importer);
                    var error_1;
                    if (effect) {
                        console.error('Sidecar error: with medium', effect);
                        error_1 = new Error('Sidecar medium was not found');
                    }
                    else {
                        error_1 = new Error('Sidecar was not found in exports');
                    }
                    setError(function () { return error_1; });
                    throw error_1;
                }
                cache.set(importer, resolved);
                setCar(function () { return resolved; });
            }, function (e) { return setError(function () { return e; }); });
        }
    }, []);
    return [Car, error];
}
;


/***/ }),

/***/ "./node_modules/use-sidecar/dist/es2015/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es2015/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sidecar": function() { return /* reexport safe */ _hoc__WEBPACK_IMPORTED_MODULE_0__.sidecar; },
/* harmony export */   "useSidecar": function() { return /* reexport safe */ _hook__WEBPACK_IMPORTED_MODULE_1__.useSidecar; },
/* harmony export */   "setConfig": function() { return /* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_2__.setConfig; },
/* harmony export */   "createMedium": function() { return /* reexport safe */ _medium__WEBPACK_IMPORTED_MODULE_3__.createMedium; },
/* harmony export */   "createSidecarMedium": function() { return /* reexport safe */ _medium__WEBPACK_IMPORTED_MODULE_3__.createSidecarMedium; },
/* harmony export */   "renderCar": function() { return /* reexport safe */ _renderProp__WEBPACK_IMPORTED_MODULE_4__.renderCar; },
/* harmony export */   "exportSidecar": function() { return /* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_5__.exportSidecar; }
/* harmony export */ });
/* harmony import */ var _hoc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hoc */ "./node_modules/use-sidecar/dist/es2015/hoc.js");
/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hook */ "./node_modules/use-sidecar/dist/es2015/hook.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./node_modules/use-sidecar/dist/es2015/config.js");
/* harmony import */ var _medium__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./medium */ "./node_modules/use-sidecar/dist/es2015/medium.js");
/* harmony import */ var _renderProp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderProp */ "./node_modules/use-sidecar/dist/es2015/renderProp.js");
/* harmony import */ var _exports__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exports */ "./node_modules/use-sidecar/dist/es2015/exports.js");








/***/ }),

/***/ "./node_modules/use-sidecar/dist/es2015/medium.js":
/*!********************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es2015/medium.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMedium": function() { return /* binding */ createMedium; },
/* harmony export */   "createSidecarMedium": function() { return /* binding */ createSidecarMedium; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/use-sidecar/node_modules/tslib/tslib.es6.js");

function ItoI(a) {
    return a;
}
function innerCreateMedium(defaults, middleware) {
    if (middleware === void 0) { middleware = ItoI; }
    var buffer = [];
    var assigned = false;
    var medium = {
        read: function () {
            if (assigned) {
                throw new Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');
            }
            if (buffer.length) {
                return buffer[buffer.length - 1];
            }
            return defaults;
        },
        useMedium: function (data) {
            var item = middleware(data, assigned);
            buffer.push(item);
            return function () {
                buffer = buffer.filter(function (x) { return x !== item; });
            };
        },
        assignSyncMedium: function (cb) {
            assigned = true;
            while (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
            }
            buffer = {
                push: function (x) { return cb(x); },
                filter: function () { return buffer; },
            };
        },
        assignMedium: function (cb) {
            assigned = true;
            var pendingQueue = [];
            if (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
                pendingQueue = buffer;
            }
            var executeQueue = function () {
                var cbs = pendingQueue;
                pendingQueue = [];
                cbs.forEach(cb);
            };
            var cycle = function () { return Promise.resolve().then(executeQueue); };
            cycle();
            buffer = {
                push: function (x) {
                    pendingQueue.push(x);
                    cycle();
                },
                filter: function (filter) {
                    pendingQueue = pendingQueue.filter(filter);
                    return buffer;
                },
            };
        },
    };
    return medium;
}
function createMedium(defaults, middleware) {
    if (middleware === void 0) { middleware = ItoI; }
    return innerCreateMedium(defaults, middleware);
}
function createSidecarMedium(options) {
    if (options === void 0) { options = {}; }
    var medium = innerCreateMedium(null);
    medium.options = tslib__WEBPACK_IMPORTED_MODULE_0__.__assign({ async: true, ssr: false }, options);
    return medium;
}


/***/ }),

/***/ "./node_modules/use-sidecar/dist/es2015/renderProp.js":
/*!************************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es2015/renderProp.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderCar": function() { return /* binding */ renderCar; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/use-sidecar/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);



function renderCar(WrappedComponent, defaults, options) {
    if (options === void 0) { options = {}; }
    function State(_a) {
        var stateRef = _a.stateRef, props = _a.props;
        var renderTarget = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function SideTarget() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
                stateRef.current(args);
            });
            return null;
        }, []);
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(WrappedComponent, tslib__WEBPACK_IMPORTED_MODULE_1__.__assign({}, props, { children: renderTarget }));
    }
    var Children = react__WEBPACK_IMPORTED_MODULE_0__.memo(function (_a) {
        var stateRef = _a.stateRef, defaultState = _a.defaultState, children = _a.children;
        var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultState.current), state = _b[0], setState = _b[1];
        react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
            stateRef.current = setState;
        }, []);
        return children.apply(void 0, state);
    }, function () { return true; });
    return function Combiner(props) {
        var defaultState = react__WEBPACK_IMPORTED_MODULE_0__.useRef(defaults(props));
        var ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(function (state) { return defaultState.current = state; });
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(State, { stateRef: ref, props: props }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(Children, { stateRef: ref, defaultState: defaultState, children: props.children })));
    };
}


/***/ }),

/***/ "./node_modules/use-sidecar/node_modules/tslib/tslib.es6.js":
/*!******************************************************************!*\
  !*** ./node_modules/use-sidecar/node_modules/tslib/tslib.es6.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": function() { return /* binding */ __extends; },
/* harmony export */   "__assign": function() { return /* binding */ __assign; },
/* harmony export */   "__rest": function() { return /* binding */ __rest; },
/* harmony export */   "__decorate": function() { return /* binding */ __decorate; },
/* harmony export */   "__param": function() { return /* binding */ __param; },
/* harmony export */   "__metadata": function() { return /* binding */ __metadata; },
/* harmony export */   "__awaiter": function() { return /* binding */ __awaiter; },
/* harmony export */   "__generator": function() { return /* binding */ __generator; },
/* harmony export */   "__createBinding": function() { return /* binding */ __createBinding; },
/* harmony export */   "__exportStar": function() { return /* binding */ __exportStar; },
/* harmony export */   "__values": function() { return /* binding */ __values; },
/* harmony export */   "__read": function() { return /* binding */ __read; },
/* harmony export */   "__spread": function() { return /* binding */ __spread; },
/* harmony export */   "__spreadArrays": function() { return /* binding */ __spreadArrays; },
/* harmony export */   "__await": function() { return /* binding */ __await; },
/* harmony export */   "__asyncGenerator": function() { return /* binding */ __asyncGenerator; },
/* harmony export */   "__asyncDelegator": function() { return /* binding */ __asyncDelegator; },
/* harmony export */   "__asyncValues": function() { return /* binding */ __asyncValues; },
/* harmony export */   "__makeTemplateObject": function() { return /* binding */ __makeTemplateObject; },
/* harmony export */   "__importStar": function() { return /* binding */ __importStar; },
/* harmony export */   "__importDefault": function() { return /* binding */ __importDefault; },
/* harmony export */   "__classPrivateFieldGet": function() { return /* binding */ __classPrivateFieldGet; },
/* harmony export */   "__classPrivateFieldSet": function() { return /* binding */ __classPrivateFieldSet; }
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _inheritsLoose; }
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.default)(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectWithoutPropertiesLoose; }
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _setPrototypeOf; }
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGYwMWFhODBlYTY1ZjAyNTUzNzYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7QUFRTyxJQUFNRyxNQUF1QixHQUFHLFNBQTFCQSxNQUEwQixPQUEwRDtBQUFBLE1BQXZEQyxRQUF1RCxRQUF2REEsUUFBdUQ7QUFBQSxNQUE3Q0MsWUFBNkMsUUFBN0NBLFlBQTZDO0FBQUEsTUFBL0JDLGFBQStCLFFBQS9CQSxhQUErQjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDaEcsc0JBQ0MsOERBQUMsd0RBQUQ7QUFBZSxVQUFNLEVBQUVGLFlBQXZCO0FBQXFDLGFBQVMsRUFBRTtBQUFBLGFBQU1DLGFBQWEsQ0FBQyxLQUFELENBQW5CO0FBQUEsS0FBaEQ7QUFBQSwyQkFDQyw4REFBQyxtQkFBRDtBQUNDLFlBQU0sRUFBRUQsWUFEVDtBQUVDLGVBQVMsRUFBRTtBQUFBLGVBQU1DLGFBQWEsQ0FBQyxLQUFELENBQW5CO0FBQUEsT0FGWjtBQUdDLG9CQUFZQyxTQUhiO0FBQUEsZ0JBS0VIO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQVdBLENBWk07S0FBTUQ7QUFjYixJQUFNSyxtQkFBbUIsR0FBR04sMERBQU0sQ0FBQ0Ysa0RBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxtTkFRSixVQUFDUyxDQUFEO0FBQUEsU0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLE1BQVIsQ0FBZUMsS0FBdEI7QUFBQSxDQVJJLEVBU2YsVUFBQ0gsQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRRyxPQUFSLENBQWdCQyxXQUF2QjtBQUFBLENBVGUsRUFjZixVQUFDTCxDQUFEO0FBQUEsU0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFHLE9BQVIsQ0FBZ0JFLFdBQXZCO0FBQUEsQ0FkZSxD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aE4sdUJBQXVCLDhCQUE4QixnREFBZ0Qsd0RBQXdEO0FBQzdKLDZDQUE2QyxzQ0FBc0MsVUFBVSxtQkFBbUIsSUFBSTtBQUNwSDtBQUNBO0FBQ087QUFDUCxpQ0FBaUMsdUNBQXVDLFlBQVksS0FBSyxPQUFPO0FBQ2hHO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLDZDQUE2QztBQUM3QztBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pOZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNiZTtBQUNmO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJpRDtBQUNsQztBQUNmO0FBQ0E7QUFDQSxFQUFFLDJEQUFjO0FBQ2hCOzs7Ozs7Ozs7Ozs7Ozs7QUNMZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWMsdUJBQXVCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2JlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0RyYXdlci9EcmF3ZXIudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0RyYXdlci9pbmRleC50cyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHJlYWNoL2RpYWxvZy9kaXN0L3JlYWNoLWRpYWxvZy5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9kZXRlY3Qtbm9kZS1lcy9lc20vYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2ZvY3VzLWxvY2svZGlzdC9lczIwMTUvY29uc3RhbnRzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZm9jdXMtbG9jay9kaXN0L2VzMjAxNS9mb2N1c0luc2lkZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2ZvY3VzLWxvY2svZGlzdC9lczIwMTUvZm9jdXNJc0hpZGRlbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2ZvY3VzLWxvY2svZGlzdC9lczIwMTUvZm9jdXNNZXJnZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2ZvY3VzLWxvY2svZGlzdC9lczIwMTUvZm9jdXNhYmxlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2ZvY3VzLWxvY2svZGlzdC9lczIwMTUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9mb2N1cy1sb2NrL2Rpc3QvZXMyMDE1L3NldEZvY3VzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZm9jdXMtbG9jay9kaXN0L2VzMjAxNS9zaWJsaW5nLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZm9jdXMtbG9jay9kaXN0L2VzMjAxNS9zb2x2ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9mb2N1cy1sb2NrL2Rpc3QvZXMyMDE1L3RhYkhvb2suanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9mb2N1cy1sb2NrL2Rpc3QvZXMyMDE1L3V0aWxzL0RPTXV0aWxzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZm9jdXMtbG9jay9kaXN0L2VzMjAxNS91dGlscy9hbGwtYWZmZWN0ZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9mb2N1cy1sb2NrL2Rpc3QvZXMyMDE1L3V0aWxzL2FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZm9jdXMtbG9jay9kaXN0L2VzMjAxNS91dGlscy9jb3JyZWN0Rm9jdXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9mb2N1cy1sb2NrL2Rpc3QvZXMyMDE1L3V0aWxzL2ZpcnN0Rm9jdXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9mb2N1cy1sb2NrL2Rpc3QvZXMyMDE1L3V0aWxzL2lzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZm9jdXMtbG9jay9kaXN0L2VzMjAxNS91dGlscy9wYXJlbnRpbmcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9mb2N1cy1sb2NrL2Rpc3QvZXMyMDE1L3V0aWxzL3RhYk9yZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZm9jdXMtbG9jay9kaXN0L2VzMjAxNS91dGlscy90YWJVdGlscy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2ZvY3VzLWxvY2svZGlzdC9lczIwMTUvdXRpbHMvdGFiYmFibGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ2V0LW5vbmNlL2Rpc3QvZXMyMDE1L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHJlYWNoL2RpYWxvZy9zdHlsZXMuY3NzPzEyYzkiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AcmVhY2gvZGlhbG9nL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1jbGllbnRzaWRlLWVmZmVjdC9saWIvaW5kZXguZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1mb2N1cy1sb2NrL2Rpc3QvZXMyMDE1L0F1dG9Gb2N1c0luc2lkZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWZvY3VzLWxvY2svZGlzdC9lczIwMTUvQ29tYmluYXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1mb2N1cy1sb2NrL2Rpc3QvZXMyMDE1L0ZvY3VzR3VhcmQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1mb2N1cy1sb2NrL2Rpc3QvZXMyMDE1L0ZyZWVGb2N1c0luc2lkZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWZvY3VzLWxvY2svZGlzdC9lczIwMTUvTG9jay5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWZvY3VzLWxvY2svZGlzdC9lczIwMTUvTW92ZUZvY3VzSW5zaWRlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtZm9jdXMtbG9jay9kaXN0L2VzMjAxNS9UcmFwLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtZm9jdXMtbG9jay9kaXN0L2VzMjAxNS9VSS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWZvY3VzLWxvY2svZGlzdC9lczIwMTUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1mb2N1cy1sb2NrL2Rpc3QvZXMyMDE1L21lZGl1bS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWZvY3VzLWxvY2svZGlzdC9lczIwMTUvdXRpbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlbW92ZS1zY3JvbGwtYmFyL2Rpc3QvZXMyMDE1L2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlbW92ZS1zY3JvbGwtYmFyL2Rpc3QvZXMyMDE1L2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlbW92ZS1zY3JvbGwtYmFyL2Rpc3QvZXMyMDE1L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVtb3ZlLXNjcm9sbC1iYXIvZGlzdC9lczIwMTUvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZW1vdmUtc2Nyb2xsL2Rpc3QvZXMyMDE1L0NvbWJpbmF0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVtb3ZlLXNjcm9sbC9kaXN0L2VzMjAxNS9TaWRlRWZmZWN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVtb3ZlLXNjcm9sbC9kaXN0L2VzMjAxNS9VSS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlbW92ZS1zY3JvbGwvZGlzdC9lczIwMTUvYWdncmVzaXZlQ2FwdHVyZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlbW92ZS1zY3JvbGwvZGlzdC9lczIwMTUvaGFuZGxlU2Nyb2xsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVtb3ZlLXNjcm9sbC9kaXN0L2VzMjAxNS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlbW92ZS1zY3JvbGwvZGlzdC9lczIwMTUvbWVkaXVtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVtb3ZlLXNjcm9sbC9kaXN0L2VzMjAxNS9zaWRlY2FyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVtb3ZlLXNjcm9sbC9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3R5bGUtc2luZ2xldG9uL2Rpc3QvZXMyMDE1L2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN0eWxlLXNpbmdsZXRvbi9kaXN0L2VzMjAxNS9ob29rLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3R5bGUtc2luZ2xldG9uL2Rpc3QvZXMyMDE1L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3R5bGUtc2luZ2xldG9uL2Rpc3QvZXMyMDE1L3NpbmdsZXRvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3VzZS1jYWxsYmFjay1yZWYvZGlzdC9lczIwMTUvYXNzaWduUmVmLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzMjAxNS9jcmVhdGVSZWYuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy91c2UtY2FsbGJhY2stcmVmL2Rpc3QvZXMyMDE1L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzMjAxNS9tZXJnZVJlZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3VzZS1jYWxsYmFjay1yZWYvZGlzdC9lczIwMTUvcmVmVG9DYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3VzZS1jYWxsYmFjay1yZWYvZGlzdC9lczIwMTUvdHJhbnNmb3JtUmVmLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzMjAxNS91c2VNZXJnZVJlZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3VzZS1jYWxsYmFjay1yZWYvZGlzdC9lczIwMTUvdXNlUmVmLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzMjAxNS91c2VUcmFuc2Zvcm1SZWYuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy91c2Utc2lkZWNhci9kaXN0L2VzMjAxNS9jb25maWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy91c2Utc2lkZWNhci9kaXN0L2VzMjAxNS9lbnYuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy91c2Utc2lkZWNhci9kaXN0L2VzMjAxNS9leHBvcnRzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdXNlLXNpZGVjYXIvZGlzdC9lczIwMTUvaG9jLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdXNlLXNpZGVjYXIvZGlzdC9lczIwMTUvaG9vay5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3VzZS1zaWRlY2FyL2Rpc3QvZXMyMDE1L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdXNlLXNpZGVjYXIvZGlzdC9lczIwMTUvbWVkaXVtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdXNlLXNpZGVjYXIvZGlzdC9lczIwMTUvcmVuZGVyUHJvcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3VzZS1zaWRlY2FyL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NldFByb3RvdHlwZU9mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaWFsb2dDb250ZW50LCB7IERpYWxvZ092ZXJsYXkgfSBmcm9tICdAcmVhY2gvZGlhbG9nJztcclxuaW1wb3J0IHsgRGlzcGF0Y2gsIEZDLCBTZXRTdGF0ZUFjdGlvbiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCAnQHJlYWNoL2RpYWxvZy9zdHlsZXMuY3NzJztcclxuXHJcbmludGVyZmFjZSBEcmF3ZXJQcm9wcyB7XHJcblx0aXNEcmF3ZXJPcGVuOiBib29sZWFuO1xyXG5cdHNldERyYXdlck9wZW46IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPGJvb2xlYW4+PjtcclxuXHRhcmlhTGFiZWw6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERyYXdlcjogRkM8RHJhd2VyUHJvcHM+ID0gKHsgY2hpbGRyZW4sIGlzRHJhd2VyT3Blbiwgc2V0RHJhd2VyT3BlbiwgYXJpYUxhYmVsIH0pID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PERpYWxvZ092ZXJsYXkgaXNPcGVuPXtpc0RyYXdlck9wZW59IG9uRGlzbWlzcz17KCkgPT4gc2V0RHJhd2VyT3BlbihmYWxzZSl9PlxyXG5cdFx0XHQ8U3R5bGVkRGlhbG9nQ29udGVudFxyXG5cdFx0XHRcdGlzT3Blbj17aXNEcmF3ZXJPcGVufVxyXG5cdFx0XHRcdG9uRGlzbWlzcz17KCkgPT4gc2V0RHJhd2VyT3BlbihmYWxzZSl9XHJcblx0XHRcdFx0YXJpYS1sYWJlbD17YXJpYUxhYmVsfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0XHQ8L1N0eWxlZERpYWxvZ0NvbnRlbnQ+XHJcblx0XHQ8L0RpYWxvZ092ZXJsYXk+XHJcblx0KTtcclxufTtcclxuXHJcbmNvbnN0IFN0eWxlZERpYWxvZ0NvbnRlbnQgPSBzdHlsZWQoRGlhbG9nQ29udGVudClgXHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0cGFkZGluZy1sZWZ0OiAyNHB4O1xyXG5cdHBhZGRpbmctdG9wOiA4MHB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHJcblx0YmFja2dyb3VuZC1jb2xvcjogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMud2hpdGV9O1xyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdHdpZHRoOiA2MTZweDtcclxuXHRcdHBhZGRpbmctbGVmdDogNTZweDtcclxuXHR9XHJcblxyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMubGFwdG9wQW5kVXB9IHtcclxuXHRcdHdpZHRoOiA3MTlweDtcclxuXHRcdHBhZGRpbmctbGVmdDogMTU5cHg7XHJcblx0XHRwYWRkaW5nLXRvcDogMHB4O1xyXG5cdH1cclxuYDtcclxuIiwiZXhwb3J0IHsgRHJhd2VyIH0gZnJvbSAnLi9EcmF3ZXInO1xyXG4iLCJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgSW52b2ljZXNDb250ZXh0IH0gZnJvbSAnY29udGV4dC9JbnZvaWNlc0NvbnRleHQnO1xyXG5cclxuaW1wb3J0IHsgUG9zc2libGVTdGF0dXMgfSBmcm9tICcuLi9jb25maWcvUG9zc2libGVTdGF0dXMnO1xyXG5pbXBvcnQgeyBkZW1vSW52b2ljZXNEYXRhIH0gZnJvbSAnLi4vZGF0YS9kZW1vJztcclxuaW1wb3J0IHsgSW52b2ljZSB9IGZyb20gJy4uL3R5cGVzJztcclxuXHJcbmltcG9ydCB7IERyYXdlciB9IGZyb20gJ0AvY29tcG9uZW50cy9EcmF3ZXInO1xyXG5pbXBvcnQgeyBFbXB0eVN0YXRlIH0gZnJvbSAnQC9jb21wb25lbnRzL0VtcHR5U3RhdGUnO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvSG9tZSc7XHJcbmltcG9ydCB7IEludm9pY2VDYXJkIH0gZnJvbSAnQC9jb21wb25lbnRzL0ludm9pY2VDYXJkL0ludm9pY2VDYXJkJztcclxuaW1wb3J0IHsgSW52b2ljZUxpc3RDb250YWluZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvSW52b2ljZUxpc3RDb250YWluZXIvSW52b2ljZUxpc3RDb250YWluZXInO1xyXG5pbXBvcnQgUGFnZUxheW91dCBmcm9tICdAL2xheW91dHMvUGFnZUxheW91dCc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZUludm9pY2VUb3RhbCB9IGZyb20gJ0AvdXRpbHMvY2FsY3VsYXRlVG90YWwnO1xyXG5cclxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcblx0Y29uc3QgeyBpbnZvaWNlcywgYWRkSW52b2ljZSB9ID0gdXNlQ29udGV4dChJbnZvaWNlc0NvbnRleHQpO1xyXG5cdGNvbnN0IFtmaWx0ZXIsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZTxQb3NzaWJsZVN0YXR1cyB8ICcnPignJyk7XHJcblx0Y29uc3QgW2ZpbHRlcmVkSW52b2ljZXMsIHNldEZpbHRlcmVkSW52b2ljZXNdID0gdXNlU3RhdGUoaW52b2ljZXMpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coaW52b2ljZXMpO1xyXG5cdFx0aWYgKGZpbHRlciA9PT0gJ0RyYWZ0Jykge1xyXG5cdFx0XHRzZXRGaWx0ZXJlZEludm9pY2VzKGludm9pY2VzLmZpbHRlcigoaW52b2ljZSkgPT4gaW52b2ljZS5zdGF0dXMgPT09IGZpbHRlcikpO1xyXG5cdFx0fSBlbHNlIGlmIChmaWx0ZXIgPT09ICdQZW5kaW5nJykge1xyXG5cdFx0XHRzZXRGaWx0ZXJlZEludm9pY2VzKGludm9pY2VzLmZpbHRlcigoaW52b2ljZSkgPT4gaW52b2ljZS5zdGF0dXMgPT09IGZpbHRlcikpO1xyXG5cdFx0fSBlbHNlIGlmIChmaWx0ZXIgPT09ICdQYWlkJykge1xyXG5cdFx0XHRzZXRGaWx0ZXJlZEludm9pY2VzKGludm9pY2VzLmZpbHRlcigoaW52b2ljZSkgPT4gaW52b2ljZS5zdGF0dXMgPT09IGZpbHRlcikpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c2V0RmlsdGVyZWRJbnZvaWNlcyhpbnZvaWNlcyk7XHJcblx0XHR9XHJcblx0fSwgW2ZpbHRlciwgaW52b2ljZXNdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxEcmF3ZXJcclxuXHRcdFx0XHRpc0RyYXdlck9wZW49e2lzRHJhd2VyT3Blbn1cclxuXHRcdFx0XHRzZXREcmF3ZXJPcGVuPXtzZXREcmF3ZXJPcGVufVxyXG5cdFx0XHRcdGFyaWFMYWJlbD1cIkludm9pY2UgRWRpdGluZyBGb3JtIE1vZGFsXCJcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxFZGl0SW52b2ljZUZvcm0gc2V0RHJhd2VyT3Blbj17c2V0RHJhd2VyT3Blbn0gaW52b2ljZT17c2VsZWN0ZWRJbnZvaWNlfSAvPlxyXG5cdFx0XHQ8L0RyYXdlcj5cclxuXHRcdFx0PFBhZ2VMYXlvdXQ+XHJcblx0XHRcdFx0PEhlYWRlciBpbnZvaWNlQ291bnQ9e2ludm9pY2VzLmxlbmd0aCA/PyAwfSBzZXRGaWx0ZXI9e3NldEZpbHRlcn0gZmlsdGVyPXtmaWx0ZXJ9IC8+XHJcblx0XHRcdFx0PEludm9pY2VMaXN0Q29udGFpbmVyPlxyXG5cdFx0XHRcdFx0e2ZpbHRlcmVkSW52b2ljZXMubGVuZ3RoID4gMCA/IChcclxuXHRcdFx0XHRcdFx0ZmlsdGVyZWRJbnZvaWNlcy5tYXAoKGludm9pY2U6IEludm9pY2UpID0+IChcclxuXHRcdFx0XHRcdFx0XHQ8TGluayBrZXk9e2ludm9pY2UuaWR9IGhyZWY9e2AvaW52b2ljZS8ke2ludm9pY2UuaWR9YH0gcGFzc0hyZWY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEludm9pY2VDYXJkXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9e2ludm9pY2UuaWR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZHVlRGF0ZT17aW52b2ljZS5pbnZvaWNlX2RhdGUgYXMgc3RyaW5nfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsaWVudE5hbWU9e2ludm9pY2UuY2xpZW50X25hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3RhdHVzPXtpbnZvaWNlLnN0YXR1c31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0b3RhbD17Y2FsY3VsYXRlSW52b2ljZVRvdGFsKGludm9pY2UuaW52b2ljZV9pdGVtcyl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHQpKVxyXG5cdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdDxTdHlsZWRFbXB0eVN0YXRlXHJcblx0XHRcdFx0XHRcdFx0XHRoZWFkaW5nPVwiVGhlcmUgaXMgbm90aGluZyBoZXJlXCJcclxuXHRcdFx0XHRcdFx0XHRcdGVycm9yTWVzc2FnZT1cIkNyZWF0ZSBhIG5ldyBpbnZvaWNlIGJ5IGNsaWNraW5nIHRoZVxyXG5cdFx0XHRcdFx0TmV3IEludm9pY2UgYnV0dG9uIGFuZCBnZXQgc3RhcnRlZFwiXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0PC9JbnZvaWNlTGlzdENvbnRhaW5lcj5cclxuXHRcdFx0PC9QYWdlTGF5b3V0PlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmNvbnN0IFN0eWxlZEVtcHR5U3RhdGUgPSBzdHlsZWQoRW1wdHlTdGF0ZSlgXHJcblx0bWFyZ2luLXRvcDogNzFweDtcclxuXHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0bWFyZ2luLXRvcDogMTU0cHg7XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLmxhcHRvcEFuZFVwfSB7XHJcblx0XHRtYXJnaW4tdG9wOiA3NnB4O1xyXG5cdH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiIsImltcG9ydCB7IGZvcndhcmRSZWYsIHVzZUVmZmVjdCwgY3JlYXRlRWxlbWVudCwgdXNlUmVmLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFBvcnRhbCB9IGZyb20gJ0ByZWFjaC9wb3J0YWwnO1xuaW1wb3J0IHsgZ2V0T3duZXJEb2N1bWVudCB9IGZyb20gJ0ByZWFjaC91dGlscy9vd25lci1kb2N1bWVudCc7XG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJ0ByZWFjaC91dGlscy90eXBlLWNoZWNrJztcbmltcG9ydCB7IG5vb3AgfSBmcm9tICdAcmVhY2gvdXRpbHMvbm9vcCc7XG5pbXBvcnQgeyB1c2VDaGVja1N0eWxlcyB9IGZyb20gJ0ByZWFjaC91dGlscy9kZXYtdXRpbHMnO1xuaW1wb3J0IHsgdXNlQ29tcG9zZWRSZWZzIH0gZnJvbSAnQHJlYWNoL3V0aWxzL2NvbXBvc2UtcmVmcyc7XG5pbXBvcnQgeyBjb21wb3NlRXZlbnRIYW5kbGVycyB9IGZyb20gJ0ByZWFjaC91dGlscy9jb21wb3NlLWV2ZW50LWhhbmRsZXJzJztcbmltcG9ydCBGb2N1c0xvY2sgZnJvbSAncmVhY3QtZm9jdXMtbG9jayc7XG5pbXBvcnQgeyBSZW1vdmVTY3JvbGwgfSBmcm9tICdyZWFjdC1yZW1vdmUtc2Nyb2xsJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG52YXIgX2V4Y2x1ZGVkID0gW1wiYXNcIiwgXCJpc09wZW5cIl0sXG4gICAgX2V4Y2x1ZGVkMiA9IFtcImFsbG93UGluY2hab29tXCIsIFwiYXNcIiwgXCJkYW5nZXJvdXNseUJ5cGFzc0ZvY3VzTG9ja1wiLCBcImRhbmdlcm91c2x5QnlwYXNzU2Nyb2xsTG9ja1wiLCBcImluaXRpYWxGb2N1c1JlZlwiLCBcIm9uQ2xpY2tcIiwgXCJvbkRpc21pc3NcIiwgXCJvbktleURvd25cIiwgXCJvbk1vdXNlRG93blwiLCBcInVuc3RhYmxlX2xvY2tGb2N1c0Fjcm9zc0ZyYW1lc1wiXSxcbiAgICBfZXhjbHVkZWQzID0gW1wiYXNcIiwgXCJvbkNsaWNrXCIsIFwib25LZXlEb3duXCJdLFxuICAgIF9leGNsdWRlZDQgPSBbXCJhbGxvd1BpbmNoWm9vbVwiLCBcImluaXRpYWxGb2N1c1JlZlwiLCBcImlzT3BlblwiLCBcIm9uRGlzbWlzc1wiXTtcbnZhciBvdmVybGF5UHJvcFR5cGVzID0ge1xuICBhbGxvd1BpbmNoWm9vbTogUHJvcFR5cGVzLmJvb2wsXG4gIGRhbmdlcm91c2x5QnlwYXNzRm9jdXNMb2NrOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGFuZ2Vyb3VzbHlCeXBhc3NTY3JvbGxMb2NrOiBQcm9wVHlwZXMuYm9vbCxcbiAgLy8gVE9ETzpcbiAgaW5pdGlhbEZvY3VzUmVmOiBmdW5jdGlvbiBpbml0aWFsRm9jdXNSZWYoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG4gIG9uRGlzbWlzczogUHJvcFR5cGVzLmZ1bmNcbn07IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8qKlxuICogRGlhbG9nT3ZlcmxheVxuICpcbiAqIExvdy1sZXZlbCBjb21wb25lbnQgaWYgeW91IG5lZWQgbW9yZSBjb250cm9sIG92ZXIgdGhlIHN0eWxlcyBvciByZW5kZXJpbmcgb2ZcbiAqIHRoZSBkaWFsb2cgb3ZlcmxheS5cbiAqXG4gKiBOb3RlOiBZb3UgbXVzdCByZW5kZXIgYSBgRGlhbG9nQ29udGVudGAgaW5zaWRlLlxuICpcbiAqIEBzZWUgRG9jcyBodHRwczovL3JlYWNoLnRlY2gvZGlhbG9nI2RpYWxvZ292ZXJsYXlcbiAqL1xuXG52YXIgRGlhbG9nT3ZlcmxheSA9IC8qI19fUFVSRV9fKi9mb3J3YXJkUmVmKGZ1bmN0aW9uIERpYWxvZ092ZXJsYXkoX3JlZiwgZm9yd2FyZGVkUmVmKSB7XG4gIHZhciBfcmVmJGFzID0gX3JlZi5hcyxcbiAgICAgIENvbXAgPSBfcmVmJGFzID09PSB2b2lkIDAgPyBcImRpdlwiIDogX3JlZiRhcyxcbiAgICAgIF9yZWYkaXNPcGVuID0gX3JlZi5pc09wZW4sXG4gICAgICBpc09wZW4gPSBfcmVmJGlzT3BlbiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWYkaXNPcGVuLFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBfZXhjbHVkZWQpO1xuXG4gIHVzZUNoZWNrU3R5bGVzKFwiZGlhbG9nXCIpOyAvLyBXZSB3YW50IHRvIGlnbm9yZSB0aGUgaW1tZWRpYXRlIGZvY3VzIG9mIGEgdG9vbHRpcCBzbyBpdCBkb2Vzbid0IHBvcFxuICAvLyB1cCBhZ2FpbiB3aGVuIHRoZSBtZW51IGNsb3Nlcywgb25seSBwb3BzIHVwIHdoZW4gZm9jdXMgcmV0dXJucyBhZ2FpblxuICAvLyB0byB0aGUgdG9vbHRpcCAobGlrZSBuYXRpdmUgT1MgdG9vbHRpcHMpLlxuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGlzT3Blbikge1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgd2luZG93Ll9fUkVBQ0hfRElTQUJMRV9UT09MVElQUyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBXYWl0IGEgZnJhbWUgc28gdGhhdCB0aGlzIGRvZXNuJ3QgZmlyZSBiZWZvcmUgdG9vbHRpcCBkb2VzXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgd2luZG93Ll9fUkVBQ0hfRElTQUJMRV9UT09MVElQUyA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbaXNPcGVuXSk7XG4gIHJldHVybiBpc09wZW4gPyAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChQb3J0YWwsIHtcbiAgICBcImRhdGEtcmVhY2gtZGlhbG9nLXdyYXBwZXJcIjogXCJcIlxuICB9LCAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChEaWFsb2dJbm5lciwgX2V4dGVuZHMoe1xuICAgIHJlZjogZm9yd2FyZGVkUmVmLFxuICAgIGFzOiBDb21wXG4gIH0sIHByb3BzKSkpIDogbnVsbDtcbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIERpYWxvZ092ZXJsYXkuZGlzcGxheU5hbWUgPSBcIkRpYWxvZ092ZXJsYXlcIjtcbiAgRGlhbG9nT3ZlcmxheS5wcm9wVHlwZXMgPSAvKiNfX1BVUkVfXyovX2V4dGVuZHMoe30sIG92ZXJsYXlQcm9wVHlwZXMsIHtcbiAgICBpc09wZW46IFByb3BUeXBlcy5ib29sXG4gIH0pO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vKipcbiAqIERpYWxvZ0lubmVyXG4gKi9cbnZhciBEaWFsb2dJbm5lciA9IC8qI19fUFVSRV9fKi9mb3J3YXJkUmVmKGZ1bmN0aW9uIERpYWxvZ0lubmVyKF9yZWYyLCBmb3J3YXJkZWRSZWYpIHtcbiAgdmFyIGFsbG93UGluY2hab29tID0gX3JlZjIuYWxsb3dQaW5jaFpvb20sXG4gICAgICBfcmVmMiRhcyA9IF9yZWYyLmFzLFxuICAgICAgQ29tcCA9IF9yZWYyJGFzID09PSB2b2lkIDAgPyBcImRpdlwiIDogX3JlZjIkYXMsXG4gICAgICBfcmVmMiRkYW5nZXJvdXNseUJ5cGEgPSBfcmVmMi5kYW5nZXJvdXNseUJ5cGFzc0ZvY3VzTG9jayxcbiAgICAgIGRhbmdlcm91c2x5QnlwYXNzRm9jdXNMb2NrID0gX3JlZjIkZGFuZ2Vyb3VzbHlCeXBhID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYyJGRhbmdlcm91c2x5QnlwYSxcbiAgICAgIF9yZWYyJGRhbmdlcm91c2x5QnlwYTIgPSBfcmVmMi5kYW5nZXJvdXNseUJ5cGFzc1Njcm9sbExvY2ssXG4gICAgICBkYW5nZXJvdXNseUJ5cGFzc1Njcm9sbExvY2sgPSBfcmVmMiRkYW5nZXJvdXNseUJ5cGEyID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYyJGRhbmdlcm91c2x5QnlwYTIsXG4gICAgICBpbml0aWFsRm9jdXNSZWYgPSBfcmVmMi5pbml0aWFsRm9jdXNSZWYsXG4gICAgICBvbkNsaWNrID0gX3JlZjIub25DbGljayxcbiAgICAgIF9yZWYyJG9uRGlzbWlzcyA9IF9yZWYyLm9uRGlzbWlzcyxcbiAgICAgIG9uRGlzbWlzcyA9IF9yZWYyJG9uRGlzbWlzcyA9PT0gdm9pZCAwID8gbm9vcCA6IF9yZWYyJG9uRGlzbWlzcyxcbiAgICAgIG9uS2V5RG93biA9IF9yZWYyLm9uS2V5RG93bixcbiAgICAgIG9uTW91c2VEb3duID0gX3JlZjIub25Nb3VzZURvd24sXG4gICAgICB1bnN0YWJsZV9sb2NrRm9jdXNBY3Jvc3NGcmFtZXMgPSBfcmVmMi51bnN0YWJsZV9sb2NrRm9jdXNBY3Jvc3NGcmFtZXMsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYyLCBfZXhjbHVkZWQyKTtcblxuICB2YXIgbG9ja0ZvY3VzQWNyb3NzRnJhbWVzSXNEZWZpbmVkID0gdW5zdGFibGVfbG9ja0ZvY3VzQWNyb3NzRnJhbWVzICE9PSB1bmRlZmluZWQ7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAobG9ja0ZvY3VzQWNyb3NzRnJhbWVzSXNEZWZpbmVkKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIlRoZSB1bnN0YWJsZV9sb2NrRm9jdXNBY3Jvc3NGcmFtZXMgaW4gQHJlYWNoL2RpYWxvZyBpcyBkZXByZWNhdGVkLiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWlub3IgcmVsZWFzZS5cIik7XG4gICAgICB9XG4gICAgfSwgW2xvY2tGb2N1c0Fjcm9zc0ZyYW1lc0lzRGVmaW5lZF0pO1xuICB9XG5cbiAgdmFyIG1vdXNlRG93blRhcmdldCA9IHVzZVJlZihudWxsKTtcbiAgdmFyIG92ZXJsYXlOb2RlID0gdXNlUmVmKG51bGwpO1xuICB2YXIgcmVmID0gdXNlQ29tcG9zZWRSZWZzKG92ZXJsYXlOb2RlLCBmb3J3YXJkZWRSZWYpO1xuICB2YXIgYWN0aXZhdGVGb2N1c0xvY2sgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGluaXRpYWxGb2N1c1JlZiAmJiBpbml0aWFsRm9jdXNSZWYuY3VycmVudCkge1xuICAgICAgaW5pdGlhbEZvY3VzUmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICB9XG4gIH0sIFtpbml0aWFsRm9jdXNSZWZdKTtcblxuICBmdW5jdGlvbiBoYW5kbGVDbGljayhldmVudCkge1xuICAgIGlmIChtb3VzZURvd25UYXJnZXQuY3VycmVudCA9PT0gZXZlbnQudGFyZ2V0KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIG9uRGlzbWlzcyhldmVudCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlS2V5RG93bihldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgb25EaXNtaXNzKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVNb3VzZURvd24oZXZlbnQpIHtcbiAgICBtb3VzZURvd25UYXJnZXQuY3VycmVudCA9IGV2ZW50LnRhcmdldDtcbiAgfVxuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG92ZXJsYXlOb2RlLmN1cnJlbnQgPyBjcmVhdGVBcmlhSGlkZXIob3ZlcmxheU5vZGUuY3VycmVudCkgOiB2b2lkIG51bGw7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KEZvY3VzTG9jaywge1xuICAgIGF1dG9Gb2N1czogdHJ1ZSxcbiAgICByZXR1cm5Gb2N1czogdHJ1ZSxcbiAgICBvbkFjdGl2YXRpb246IGFjdGl2YXRlRm9jdXNMb2NrLFxuICAgIGRpc2FibGVkOiBkYW5nZXJvdXNseUJ5cGFzc0ZvY3VzTG9jayxcbiAgICBjcm9zc0ZyYW1lOiB1bnN0YWJsZV9sb2NrRm9jdXNBY3Jvc3NGcmFtZXMgIT0gbnVsbCA/IHVuc3RhYmxlX2xvY2tGb2N1c0Fjcm9zc0ZyYW1lcyA6IHRydWVcbiAgfSwgLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoUmVtb3ZlU2Nyb2xsLCB7XG4gICAgYWxsb3dQaW5jaFpvb206IGFsbG93UGluY2hab29tLFxuICAgIGVuYWJsZWQ6ICFkYW5nZXJvdXNseUJ5cGFzc1Njcm9sbExvY2tcbiAgfSwgLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoQ29tcCwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgcmVmOiByZWYsXG4gICAgXCJkYXRhLXJlYWNoLWRpYWxvZy1vdmVybGF5XCI6IFwiXCJcbiAgICAvKlxuICAgICAqIFdlIGNhbiBpZ25vcmUgdGhlIGBuby1zdGF0aWMtZWxlbWVudC1pbnRlcmFjdGlvbnNgIHdhcm5pbmcgaGVyZVxuICAgICAqIGJlY2F1c2Ugb3VyIG92ZXJsYXkgaXMgb25seSBkZXNpZ25lZCB0byBjYXB0dXJlIGFueSBvdXRzaWRlXG4gICAgICogY2xpY2tzLCBub3QgdG8gc2VydmUgYXMgYSBjbGlja2FibGUgZWxlbWVudCBpdHNlbGYuXG4gICAgICovXG4gICAgLFxuICAgIG9uQ2xpY2s6IGNvbXBvc2VFdmVudEhhbmRsZXJzKG9uQ2xpY2ssIGhhbmRsZUNsaWNrKSxcbiAgICBvbktleURvd246IGNvbXBvc2VFdmVudEhhbmRsZXJzKG9uS2V5RG93biwgaGFuZGxlS2V5RG93biksXG4gICAgb25Nb3VzZURvd246IGNvbXBvc2VFdmVudEhhbmRsZXJzKG9uTW91c2VEb3duLCBoYW5kbGVNb3VzZURvd24pXG4gIH0pKSkpO1xufSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgRGlhbG9nT3ZlcmxheS5kaXNwbGF5TmFtZSA9IFwiRGlhbG9nT3ZlcmxheVwiO1xuICBEaWFsb2dPdmVybGF5LnByb3BUeXBlcyA9IC8qI19fUFVSRV9fKi9fZXh0ZW5kcyh7fSwgb3ZlcmxheVByb3BUeXBlcyk7XG59IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8qKlxuICogRGlhbG9nQ29udGVudFxuICpcbiAqIExvdy1sZXZlbCBjb21wb25lbnQgaWYgeW91IG5lZWQgbW9yZSBjb250cm9sIG92ZXIgdGhlIHN0eWxlcyBvciByZW5kZXJpbmcgb2ZcbiAqIHRoZSBkaWFsb2cgY29udGVudC5cbiAqXG4gKiBOb3RlOiBNdXN0IGJlIGEgY2hpbGQgb2YgYERpYWxvZ092ZXJsYXlgLlxuICpcbiAqIE5vdGU6IFlvdSBvbmx5IG5lZWQgdG8gdXNlIHRoaXMgd2hlbiB5b3UgYXJlIGFsc28gc3R5bGluZyBgRGlhbG9nT3ZlcmxheWAsXG4gKiBvdGhlcndpc2UgeW91IGNhbiB1c2UgdGhlIGhpZ2gtbGV2ZWwgYERpYWxvZ2AgY29tcG9uZW50IGFuZCBwYXNzIHRoZSBwcm9wc1xuICogdG8gaXQuIEFueSBwcm9wcyBwYXNzZWQgdG8gYERpYWxvZ2AgY29tcG9uZW50IChiZXNpZGVzIGBpc09wZW5gIGFuZFxuICogYG9uRGlzbWlzc2ApIHdpbGwgYmUgc3ByZWFkIG9udG8gYERpYWxvZ0NvbnRlbnRgLlxuICpcbiAqIEBzZWUgRG9jcyBodHRwczovL3JlYWNoLnRlY2gvZGlhbG9nI2RpYWxvZ2NvbnRlbnRcbiAqL1xuXG5cbnZhciBEaWFsb2dDb250ZW50ID0gLyojX19QVVJFX18qL2ZvcndhcmRSZWYoZnVuY3Rpb24gRGlhbG9nQ29udGVudChfcmVmMywgZm9yd2FyZGVkUmVmKSB7XG4gIHZhciBfcmVmMyRhcyA9IF9yZWYzLmFzLFxuICAgICAgQ29tcCA9IF9yZWYzJGFzID09PSB2b2lkIDAgPyBcImRpdlwiIDogX3JlZjMkYXMsXG4gICAgICBvbkNsaWNrID0gX3JlZjMub25DbGljaztcbiAgICAgIF9yZWYzLm9uS2V5RG93bjtcbiAgICAgIHZhciBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYzLCBfZXhjbHVkZWQzKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoQ29tcCwgX2V4dGVuZHMoe1xuICAgIFwiYXJpYS1tb2RhbFwiOiBcInRydWVcIixcbiAgICByb2xlOiBcImRpYWxvZ1wiLFxuICAgIHRhYkluZGV4OiAtMVxuICB9LCBwcm9wcywge1xuICAgIHJlZjogZm9yd2FyZGVkUmVmLFxuICAgIFwiZGF0YS1yZWFjaC1kaWFsb2ctY29udGVudFwiOiBcIlwiLFxuICAgIG9uQ2xpY2s6IGNvbXBvc2VFdmVudEhhbmRsZXJzKG9uQ2xpY2ssIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSlcbiAgfSkpO1xufSk7XG4vKipcbiAqIEBzZWUgRG9jcyBodHRwczovL3JlYWNoLnRlY2gvZGlhbG9nI2RpYWxvZ2NvbnRlbnQtcHJvcHNcbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIERpYWxvZ0NvbnRlbnQuZGlzcGxheU5hbWUgPSBcIkRpYWxvZ0NvbnRlbnRcIjtcbiAgRGlhbG9nQ29udGVudC5wcm9wVHlwZXMgPSB7XG4gICAgXCJhcmlhLWxhYmVsXCI6IGFyaWFMYWJlbFR5cGUsXG4gICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogYXJpYUxhYmVsVHlwZVxuICB9O1xufSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vKipcbiAqIERpYWxvZ1xuICpcbiAqIEhpZ2gtbGV2ZWwgY29tcG9uZW50IHRvIHJlbmRlciBhIG1vZGFsIGRpYWxvZyB3aW5kb3cgb3ZlciB0aGUgdG9wIG9mIHRoZSBwYWdlXG4gKiAob3IgYW5vdGhlciBkaWFsb2cpLlxuICpcbiAqIEBzZWUgRG9jcyBodHRwczovL3JlYWNoLnRlY2gvZGlhbG9nI2RpYWxvZ1xuICovXG5cblxudmFyIERpYWxvZyA9IC8qI19fUFVSRV9fKi9mb3J3YXJkUmVmKGZ1bmN0aW9uIERpYWxvZyhfcmVmNCwgZm9yd2FyZGVkUmVmKSB7XG4gIHZhciBfcmVmNCRhbGxvd1BpbmNoWm9vbSA9IF9yZWY0LmFsbG93UGluY2hab29tLFxuICAgICAgYWxsb3dQaW5jaFpvb20gPSBfcmVmNCRhbGxvd1BpbmNoWm9vbSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmNCRhbGxvd1BpbmNoWm9vbSxcbiAgICAgIGluaXRpYWxGb2N1c1JlZiA9IF9yZWY0LmluaXRpYWxGb2N1c1JlZixcbiAgICAgIGlzT3BlbiA9IF9yZWY0LmlzT3BlbixcbiAgICAgIF9yZWY0JG9uRGlzbWlzcyA9IF9yZWY0Lm9uRGlzbWlzcyxcbiAgICAgIG9uRGlzbWlzcyA9IF9yZWY0JG9uRGlzbWlzcyA9PT0gdm9pZCAwID8gbm9vcCA6IF9yZWY0JG9uRGlzbWlzcyxcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjQsIF9leGNsdWRlZDQpO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChEaWFsb2dPdmVybGF5LCB7XG4gICAgYWxsb3dQaW5jaFpvb206IGFsbG93UGluY2hab29tLFxuICAgIGluaXRpYWxGb2N1c1JlZjogaW5pdGlhbEZvY3VzUmVmLFxuICAgIGlzT3BlbjogaXNPcGVuLFxuICAgIG9uRGlzbWlzczogb25EaXNtaXNzXG4gIH0sIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KERpYWxvZ0NvbnRlbnQsIF9leHRlbmRzKHtcbiAgICByZWY6IGZvcndhcmRlZFJlZlxuICB9LCBwcm9wcykpKTtcbn0pO1xuLyoqXG4gKiBAc2VlIERvY3MgaHR0cHM6Ly9yZWFjaC50ZWNoL2RpYWxvZyNkaWFsb2ctcHJvcHNcbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIERpYWxvZy5kaXNwbGF5TmFtZSA9IFwiRGlhbG9nXCI7XG4gIERpYWxvZy5wcm9wVHlwZXMgPSB7XG4gICAgaXNPcGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvbkRpc21pc3M6IFByb3BUeXBlcy5mdW5jLFxuICAgIFwiYXJpYS1sYWJlbFwiOiBhcmlhTGFiZWxUeXBlLFxuICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IGFyaWFMYWJlbFR5cGVcbiAgfTtcbn0gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG5mdW5jdGlvbiBjcmVhdGVBcmlhSGlkZXIoZGlhbG9nTm9kZSkge1xuICB2YXIgb3JpZ2luYWxWYWx1ZXMgPSBbXTtcbiAgdmFyIHJvb3ROb2RlcyA9IFtdO1xuICB2YXIgb3duZXJEb2N1bWVudCA9IGdldE93bmVyRG9jdW1lbnQoZGlhbG9nTm9kZSk7XG5cbiAgaWYgKCFkaWFsb2dOb2RlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgY29uc29sZS53YXJuKFwiQSByZWYgaGFzIG5vdCB5ZXQgYmVlbiBhdHRhY2hlZCB0byBhIGRpYWxvZyBub2RlIHdoZW4gYXR0ZW1wdGluZyB0byBjYWxsIGBjcmVhdGVBcmlhSGlkZXJgLlwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9vcDtcbiAgfVxuXG4gIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwob3duZXJEb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYm9keSA+ICpcIiksIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgdmFyIF9kaWFsb2dOb2RlJHBhcmVudE5vZCwgX2RpYWxvZ05vZGUkcGFyZW50Tm9kMjtcblxuICAgIHZhciBwb3J0YWxOb2RlID0gKF9kaWFsb2dOb2RlJHBhcmVudE5vZCA9IGRpYWxvZ05vZGUucGFyZW50Tm9kZSkgPT0gbnVsbCA/IHZvaWQgMCA6IChfZGlhbG9nTm9kZSRwYXJlbnROb2QyID0gX2RpYWxvZ05vZGUkcGFyZW50Tm9kLnBhcmVudE5vZGUpID09IG51bGwgPyB2b2lkIDAgOiBfZGlhbG9nTm9kZSRwYXJlbnROb2QyLnBhcmVudE5vZGU7XG5cbiAgICBpZiAobm9kZSA9PT0gcG9ydGFsTm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBhdHRyID0gbm9kZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiKTtcbiAgICB2YXIgYWxyZWFkeUhpZGRlbiA9IGF0dHIgIT09IG51bGwgJiYgYXR0ciAhPT0gXCJmYWxzZVwiO1xuXG4gICAgaWYgKGFscmVhZHlIaWRkZW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvcmlnaW5hbFZhbHVlcy5wdXNoKGF0dHIpO1xuICAgIHJvb3ROb2Rlcy5wdXNoKG5vZGUpO1xuICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJ0cnVlXCIpO1xuICB9KTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByb290Tm9kZXMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSwgaW5kZXgpIHtcbiAgICAgIHZhciBvcmlnaW5hbFZhbHVlID0gb3JpZ2luYWxWYWx1ZXNbaW5kZXhdO1xuXG4gICAgICBpZiAob3JpZ2luYWxWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCBvcmlnaW5hbFZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXJpYUxhYmVsVHlwZShwcm9wcywgcHJvcE5hbWUsIGNvbXBOYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gIHZhciBkZXRhaWxzID0gXCJcXG5TZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLyNhcmlhLWxhYmVsIGZvciBkZXRhaWxzLlwiO1xuXG4gIGlmICghcHJvcHNbXCJhcmlhLWxhYmVsXCJdICYmICFwcm9wc1tcImFyaWEtbGFiZWxsZWRieVwiXSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoXCJBIDxcIiArIGNvbXBOYW1lICsgXCI+IG11c3QgaGF2ZSBlaXRoZXIgYW4gYGFyaWEtbGFiZWxgIG9yIGBhcmlhLWxhYmVsbGVkYnlgIHByb3AuXFxuICAgICAgXCIgKyBkZXRhaWxzKTtcbiAgfVxuXG4gIGlmIChwcm9wc1tcImFyaWEtbGFiZWxcIl0gJiYgcHJvcHNbXCJhcmlhLWxhYmVsbGVkYnlcIl0pIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKFwiWW91IHByb3ZpZGVkIGJvdGggYGFyaWEtbGFiZWxgIGFuZCBgYXJpYS1sYWJlbGxlZGJ5YCBwcm9wcyB0byBhIDxcIiArIGNvbXBOYW1lICsgXCI+LiBJZiB0aGUgYSBsYWJlbCBmb3IgdGhpcyBjb21wb25lbnQgaXMgdmlzaWJsZSBvbiB0aGUgc2NyZWVuLCB0aGF0IGxhYmVsJ3MgY29tcG9uZW50IHNob3VsZCBiZSBnaXZlbiBhIHVuaXF1ZSBJRCBwcm9wLCBhbmQgdGhhdCBJRCBzaG91bGQgYmUgcGFzc2VkIGFzIHRoZSBgYXJpYS1sYWJlbGxlZGJ5YCBwcm9wIGludG8gPFwiICsgY29tcE5hbWUgKyBcIj4uIElmIHRoZSBsYWJlbCBjYW5ub3QgYmUgZGV0ZXJtaW5lZCBwcm9ncmFtbWF0aWNhbGx5IGZyb20gdGhlIGNvbnRlbnQgb2YgdGhlIGVsZW1lbnQsIGFuIGFsdGVybmF0aXZlIGxhYmVsIHNob3VsZCBiZSBwcm92aWRlZCBhcyB0aGUgYGFyaWEtbGFiZWxgIHByb3AsIHdoaWNoIHdpbGwgYmUgdXNlZCBhcyBhbiBgYXJpYS1sYWJlbGAgb24gdGhlIEhUTUwgdGFnLlwiICsgZGV0YWlscyk7XG4gIH0gZWxzZSBpZiAocHJvcHNbcHJvcE5hbWVdICE9IG51bGwgJiYgIWlzU3RyaW5nKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKFwiSW52YWxpZCBwcm9wIGBcIiArIHByb3BOYW1lICsgXCJgIHN1cHBsaWVkIHRvIGBcIiArIGNvbXBOYW1lICsgXCJgLiBFeHBlY3RlZCBgc3RyaW5nYCwgcmVjZWl2ZWQgYFwiICsgKEFycmF5LmlzQXJyYXkocHJvcEZ1bGxOYW1lKSA/IFwiYXJyYXlcIiA6IHR5cGVvZiBwcm9wRnVsbE5hbWUpICsgXCJgLlwiKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5leHBvcnQgZGVmYXVsdCBEaWFsb2c7XG5leHBvcnQgeyBEaWFsb2csIERpYWxvZ0NvbnRlbnQsIERpYWxvZ092ZXJsYXkgfTtcbiIsImV4cG9ydCBjb25zdCBpc05vZGUgPSBmYWxzZTtcblxuIiwiZXhwb3J0IHZhciBGT0NVU19HUk9VUCA9ICdkYXRhLWZvY3VzLWxvY2snO1xuZXhwb3J0IHZhciBGT0NVU19ESVNBQkxFRCA9ICdkYXRhLWZvY3VzLWxvY2stZGlzYWJsZWQnO1xuZXhwb3J0IHZhciBGT0NVU19BTExPVyA9ICdkYXRhLW5vLWZvY3VzLWxvY2snO1xuZXhwb3J0IHZhciBGT0NVU19BVVRPID0gJ2RhdGEtYXV0b2ZvY3VzLWluc2lkZSc7XG4iLCJpbXBvcnQgeyBnZXRBbGxBZmZlY3RlZE5vZGVzIH0gZnJvbSAnLi91dGlscy9hbGwtYWZmZWN0ZWQnO1xuaW1wb3J0IHsgdG9BcnJheSB9IGZyb20gJy4vdXRpbHMvYXJyYXknO1xudmFyIGZvY3VzSW5GcmFtZSA9IGZ1bmN0aW9uIChmcmFtZSkgeyByZXR1cm4gZnJhbWUgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7IH07XG52YXIgZm9jdXNJbnNpZGVJZnJhbWUgPSBmdW5jdGlvbiAodG9wTm9kZSkge1xuICAgIHJldHVybiBCb29sZWFuKHRvQXJyYXkodG9wTm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdpZnJhbWUnKSkuc29tZShmdW5jdGlvbiAobm9kZSkgeyByZXR1cm4gZm9jdXNJbkZyYW1lKG5vZGUpOyB9KSk7XG59O1xuZXhwb3J0IHZhciBmb2N1c0luc2lkZSA9IGZ1bmN0aW9uICh0b3BOb2RlKSB7XG4gICAgdmFyIGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIGlmICghYWN0aXZlRWxlbWVudCB8fCAoYWN0aXZlRWxlbWVudC5kYXRhc2V0ICYmIGFjdGl2ZUVsZW1lbnQuZGF0YXNldC5mb2N1c0d1YXJkKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBnZXRBbGxBZmZlY3RlZE5vZGVzKHRvcE5vZGUpLnJlZHVjZShmdW5jdGlvbiAocmVzdWx0LCBub2RlKSB7IHJldHVybiByZXN1bHQgfHwgbm9kZS5jb250YWlucyhhY3RpdmVFbGVtZW50KSB8fCBmb2N1c0luc2lkZUlmcmFtZShub2RlKTsgfSwgZmFsc2UpO1xufTtcbiIsImltcG9ydCB7IEZPQ1VTX0FMTE9XIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgdG9BcnJheSB9IGZyb20gJy4vdXRpbHMvYXJyYXknO1xuZXhwb3J0IHZhciBmb2N1c0lzSGlkZGVuID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBkb2N1bWVudCAmJlxuICAgICAgICB0b0FycmF5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbXCIgKyBGT0NVU19BTExPVyArIFwiXVwiKSkuc29tZShmdW5jdGlvbiAobm9kZSkgeyByZXR1cm4gbm9kZS5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KTsgfSk7XG59O1xuIiwiaW1wb3J0IHsgTkVXX0ZPQ1VTLCBuZXdGb2N1cyB9IGZyb20gJy4vc29sdmVyJztcbmltcG9ydCB7IGdldEFsbEFmZmVjdGVkTm9kZXMgfSBmcm9tICcuL3V0aWxzL2FsbC1hZmZlY3RlZCc7XG5pbXBvcnQgeyBnZXRBbGxUYWJiYWJsZU5vZGVzLCBnZXRUYWJiYWJsZU5vZGVzIH0gZnJvbSAnLi91dGlscy9ET011dGlscyc7XG5pbXBvcnQgeyBwaWNrRmlyc3RGb2N1cyB9IGZyb20gJy4vdXRpbHMvZmlyc3RGb2N1cyc7XG5pbXBvcnQgeyBpc0RlZmluZWQsIGlzTm90QUd1YXJkIH0gZnJvbSAnLi91dGlscy9pcyc7XG5pbXBvcnQgeyBhbGxQYXJlbnRBdXRvZm9jdXNhYmxlcywgZ2V0VG9wQ29tbW9uUGFyZW50IH0gZnJvbSAnLi91dGlscy9wYXJlbnRpbmcnO1xudmFyIGZpbmRBdXRvRm9jdXNlZCA9IGZ1bmN0aW9uIChhdXRvRm9jdXNhYmxlcykgeyByZXR1cm4gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5hdXRvZm9jdXMgfHwgKG5vZGUuZGF0YXNldCAmJiAhIW5vZGUuZGF0YXNldC5hdXRvZm9jdXMpIHx8IGF1dG9Gb2N1c2FibGVzLmluZGV4T2Yobm9kZSkgPj0gMDtcbn07IH07XG52YXIgcmVvcmRlck5vZGVzID0gZnVuY3Rpb24gKHNyY05vZGVzLCBkc3ROb2Rlcykge1xuICAgIHZhciByZW1hcCA9IG5ldyBNYXAoKTtcbiAgICBkc3ROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChlbnRpdHkpIHsgcmV0dXJuIHJlbWFwLnNldChlbnRpdHkubm9kZSwgZW50aXR5KTsgfSk7XG4gICAgcmV0dXJuIHNyY05vZGVzLm1hcChmdW5jdGlvbiAobm9kZSkgeyByZXR1cm4gcmVtYXAuZ2V0KG5vZGUpOyB9KS5maWx0ZXIoaXNEZWZpbmVkKTtcbn07XG5leHBvcnQgdmFyIGdldEZvY3VzTWVyZ2UgPSBmdW5jdGlvbiAodG9wTm9kZSwgbGFzdE5vZGUpIHtcbiAgICB2YXIgYWN0aXZlRWxlbWVudCA9IChkb2N1bWVudCAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbiAgICB2YXIgZW50cmllcyA9IGdldEFsbEFmZmVjdGVkTm9kZXModG9wTm9kZSkuZmlsdGVyKGlzTm90QUd1YXJkKTtcbiAgICB2YXIgY29tbW9uUGFyZW50ID0gZ2V0VG9wQ29tbW9uUGFyZW50KGFjdGl2ZUVsZW1lbnQgfHwgdG9wTm9kZSwgdG9wTm9kZSwgZW50cmllcyk7XG4gICAgdmFyIHZpc2liaWxpdHlDYWNoZSA9IG5ldyBNYXAoKTtcbiAgICB2YXIgYW55Rm9jdXNhYmxlID0gZ2V0QWxsVGFiYmFibGVOb2RlcyhlbnRyaWVzLCB2aXNpYmlsaXR5Q2FjaGUpO1xuICAgIHZhciBpbm5lckVsZW1lbnRzID0gZ2V0VGFiYmFibGVOb2RlcyhlbnRyaWVzLCB2aXNpYmlsaXR5Q2FjaGUpLmZpbHRlcihmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBfYS5ub2RlO1xuICAgICAgICByZXR1cm4gaXNOb3RBR3VhcmQobm9kZSk7XG4gICAgfSk7XG4gICAgaWYgKCFpbm5lckVsZW1lbnRzWzBdKSB7XG4gICAgICAgIGlubmVyRWxlbWVudHMgPSBhbnlGb2N1c2FibGU7XG4gICAgICAgIGlmICghaW5uZXJFbGVtZW50c1swXSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgb3V0ZXJOb2RlcyA9IGdldEFsbFRhYmJhYmxlTm9kZXMoW2NvbW1vblBhcmVudF0sIHZpc2liaWxpdHlDYWNoZSkubWFwKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgbm9kZSA9IF9hLm5vZGU7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH0pO1xuICAgIHZhciBvcmRlcmVkSW5uZXJFbGVtZW50cyA9IHJlb3JkZXJOb2RlcyhvdXRlck5vZGVzLCBpbm5lckVsZW1lbnRzKTtcbiAgICB2YXIgaW5uZXJOb2RlcyA9IG9yZGVyZWRJbm5lckVsZW1lbnRzLm1hcChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBfYS5ub2RlO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9KTtcbiAgICB2YXIgbmV3SWQgPSBuZXdGb2N1cyhpbm5lck5vZGVzLCBvdXRlck5vZGVzLCBhY3RpdmVFbGVtZW50LCBsYXN0Tm9kZSk7XG4gICAgaWYgKG5ld0lkID09PSBORVdfRk9DVVMpIHtcbiAgICAgICAgdmFyIGF1dG9Gb2N1c2FibGUgPSBhbnlGb2N1c2FibGVcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IF9hLm5vZGU7XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoZmluZEF1dG9Gb2N1c2VkKGFsbFBhcmVudEF1dG9mb2N1c2FibGVzKGVudHJpZXMsIHZpc2liaWxpdHlDYWNoZSkpKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5vZGU6IGF1dG9Gb2N1c2FibGUgJiYgYXV0b0ZvY3VzYWJsZS5sZW5ndGggPyBwaWNrRmlyc3RGb2N1cyhhdXRvRm9jdXNhYmxlKSA6IHBpY2tGaXJzdEZvY3VzKGlubmVyTm9kZXMpLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAobmV3SWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbmV3SWQ7XG4gICAgfVxuICAgIHJldHVybiBvcmRlcmVkSW5uZXJFbGVtZW50c1tuZXdJZF07XG59O1xuIiwiaW1wb3J0IHsgZ2V0QWxsQWZmZWN0ZWROb2RlcyB9IGZyb20gJy4vdXRpbHMvYWxsLWFmZmVjdGVkJztcbmltcG9ydCB7IGdldFRhYmJhYmxlTm9kZXMgfSBmcm9tICcuL3V0aWxzL0RPTXV0aWxzJztcbmltcG9ydCB7IGlzR3VhcmQsIGlzTm90QUd1YXJkIH0gZnJvbSAnLi91dGlscy9pcyc7XG5pbXBvcnQgeyBnZXRUb3BDb21tb25QYXJlbnQgfSBmcm9tICcuL3V0aWxzL3BhcmVudGluZyc7XG5leHBvcnQgdmFyIGdldEZvY3VzYWJsZWRJbiA9IGZ1bmN0aW9uICh0b3BOb2RlKSB7XG4gICAgdmFyIGVudHJpZXMgPSBnZXRBbGxBZmZlY3RlZE5vZGVzKHRvcE5vZGUpLmZpbHRlcihpc05vdEFHdWFyZCk7XG4gICAgdmFyIGNvbW1vblBhcmVudCA9IGdldFRvcENvbW1vblBhcmVudCh0b3BOb2RlLCB0b3BOb2RlLCBlbnRyaWVzKTtcbiAgICB2YXIgdmlzaWJpbGl0eUNhY2hlID0gbmV3IE1hcCgpO1xuICAgIHZhciBvdXRlck5vZGVzID0gZ2V0VGFiYmFibGVOb2RlcyhbY29tbW9uUGFyZW50XSwgdmlzaWJpbGl0eUNhY2hlLCB0cnVlKTtcbiAgICB2YXIgaW5uZXJFbGVtZW50cyA9IGdldFRhYmJhYmxlTm9kZXMoZW50cmllcywgdmlzaWJpbGl0eUNhY2hlKVxuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgbm9kZSA9IF9hLm5vZGU7XG4gICAgICAgIHJldHVybiBpc05vdEFHdWFyZChub2RlKTtcbiAgICB9KVxuICAgICAgICAubWFwKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgbm9kZSA9IF9hLm5vZGU7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH0pO1xuICAgIHJldHVybiBvdXRlck5vZGVzLm1hcChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBfYS5ub2RlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICByZXR1cm4gKHtcbiAgICAgICAgICAgIG5vZGU6IG5vZGUsXG4gICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICBsb2NrSXRlbTogaW5uZXJFbGVtZW50cy5pbmRleE9mKG5vZGUpID49IDAsXG4gICAgICAgICAgICBndWFyZDogaXNHdWFyZChub2RlKSxcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuIiwiaW1wb3J0ICogYXMgY29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IGdldEZvY3VzYWJsZWRJbiB9IGZyb20gJy4vZm9jdXNhYmxlcyc7XG5pbXBvcnQgeyBmb2N1c0luc2lkZSB9IGZyb20gJy4vZm9jdXNJbnNpZGUnO1xuaW1wb3J0IHsgZm9jdXNJc0hpZGRlbiB9IGZyb20gJy4vZm9jdXNJc0hpZGRlbic7XG5pbXBvcnQgeyBnZXRGb2N1c01lcmdlIGFzIGZvY3VzTWVyZ2UgfSBmcm9tICcuL2ZvY3VzTWVyZ2UnO1xuaW1wb3J0IHsgc2V0Rm9jdXMgfSBmcm9tICcuL3NldEZvY3VzJztcbmltcG9ydCB7IGZvY3VzTmV4dEVsZW1lbnQsIGZvY3VzUHJldkVsZW1lbnQgfSBmcm9tICcuL3NpYmxpbmcnO1xuaW1wb3J0IHRhYkhvb2sgZnJvbSAnLi90YWJIb29rJztcbmltcG9ydCB7IGdldEFsbEFmZmVjdGVkTm9kZXMgfSBmcm9tICcuL3V0aWxzL2FsbC1hZmZlY3RlZCc7XG5leHBvcnQgeyB0YWJIb29rLCBmb2N1c0luc2lkZSwgZm9jdXNJc0hpZGRlbiwgZm9jdXNNZXJnZSwgZ2V0Rm9jdXNhYmxlZEluLCBjb25zdGFudHMsIGdldEFsbEFmZmVjdGVkTm9kZXMsIGZvY3VzTmV4dEVsZW1lbnQsIGZvY3VzUHJldkVsZW1lbnQsIH07XG5leHBvcnQgZGVmYXVsdCBzZXRGb2N1cztcbiIsImltcG9ydCB7IGdldEZvY3VzTWVyZ2UgfSBmcm9tICcuL2ZvY3VzTWVyZ2UnO1xuZXhwb3J0IHZhciBmb2N1c09uID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIHRhcmdldC5mb2N1cygpO1xuICAgIGlmICgnY29udGVudFdpbmRvdycgaW4gdGFyZ2V0ICYmIHRhcmdldC5jb250ZW50V2luZG93KSB7XG4gICAgICAgIHRhcmdldC5jb250ZW50V2luZG93LmZvY3VzKCk7XG4gICAgfVxufTtcbnZhciBndWFyZENvdW50ID0gMDtcbnZhciBsb2NrRGlzYWJsZWQgPSBmYWxzZTtcbmV4cG9ydCB2YXIgc2V0Rm9jdXMgPSBmdW5jdGlvbiAodG9wTm9kZSwgbGFzdE5vZGUpIHtcbiAgICB2YXIgZm9jdXNhYmxlID0gZ2V0Rm9jdXNNZXJnZSh0b3BOb2RlLCBsYXN0Tm9kZSk7XG4gICAgaWYgKGxvY2tEaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChmb2N1c2FibGUpIHtcbiAgICAgICAgaWYgKGd1YXJkQ291bnQgPiAyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGb2N1c0xvY2s6IGZvY3VzLWZpZ2h0aW5nIGRldGVjdGVkLiBPbmx5IG9uZSBmb2N1cyBtYW5hZ2VtZW50IHN5c3RlbSBjb3VsZCBiZSBhY3RpdmUuICcgK1xuICAgICAgICAgICAgICAgICdTZWUgaHR0cHM6Ly9naXRodWIuY29tL3RoZUthc2hleS9mb2N1cy1sb2NrLyNmb2N1cy1maWdodGluZycpO1xuICAgICAgICAgICAgbG9ja0Rpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGxvY2tEaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfSwgMSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZ3VhcmRDb3VudCsrO1xuICAgICAgICBmb2N1c09uKGZvY3VzYWJsZS5ub2RlKTtcbiAgICAgICAgZ3VhcmRDb3VudC0tO1xuICAgIH1cbn07XG4iLCJpbXBvcnQgeyBnZXRUYWJiYWJsZU5vZGVzIH0gZnJvbSAnLi91dGlscy9ET011dGlscyc7XG52YXIgZ2V0UmVsYXRpdmVGb2N1c2FibGUgPSBmdW5jdGlvbiAoZWxlbWVudCwgc2NvcGUpIHtcbiAgICBpZiAoIWVsZW1lbnQgfHwgIXNjb3BlIHx8ICFzY29wZS5jb250YWlucyhlbGVtZW50KSkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIHZhciBmb2N1c2FibGVzID0gZ2V0VGFiYmFibGVOb2Rlcyhbc2NvcGVdLCBuZXcgTWFwKCkpO1xuICAgIHZhciBjdXJyZW50ID0gZm9jdXNhYmxlcy5maW5kSW5kZXgoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBub2RlID0gX2Eubm9kZTtcbiAgICAgICAgcmV0dXJuIG5vZGUgPT09IGVsZW1lbnQ7XG4gICAgfSk7XG4gICAgaWYgKGN1cnJlbnQgPT09IC0xKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJldjogZm9jdXNhYmxlc1tjdXJyZW50IC0gMV0sXG4gICAgICAgIG5leHQ6IGZvY3VzYWJsZXNbY3VycmVudCArIDFdLFxuICAgICAgICBmaXJzdDogZm9jdXNhYmxlc1swXSxcbiAgICAgICAgbGFzdDogZm9jdXNhYmxlc1tmb2N1c2FibGVzLmxlbmd0aCAtIDFdLFxuICAgIH07XG59O1xudmFyIGRlZmF1bHRPcHRpb25zID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIHNjb3BlOiBkb2N1bWVudC5ib2R5LFxuICAgICAgICBjeWNsZTogdHJ1ZSxcbiAgICB9LCBvcHRpb25zKTtcbn07XG5leHBvcnQgdmFyIGZvY3VzTmV4dEVsZW1lbnQgPSBmdW5jdGlvbiAoYmFzZUVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IGRlZmF1bHRPcHRpb25zKG9wdGlvbnMpLCBzY29wZSA9IF9hLnNjb3BlLCBjeWNsZSA9IF9hLmN5Y2xlO1xuICAgIHZhciBfYiA9IGdldFJlbGF0aXZlRm9jdXNhYmxlKGJhc2VFbGVtZW50LCBzY29wZSksIG5leHQgPSBfYi5uZXh0LCBmaXJzdCA9IF9iLmZpcnN0O1xuICAgIHZhciBuZXdUYXJnZXQgPSBuZXh0IHx8IChjeWNsZSAmJiBmaXJzdCk7XG4gICAgaWYgKG5ld1RhcmdldCkge1xuICAgICAgICBuZXdUYXJnZXQubm9kZS5mb2N1cyhvcHRpb25zLmZvY3VzT3B0aW9ucyk7XG4gICAgfVxufTtcbmV4cG9ydCB2YXIgZm9jdXNQcmV2RWxlbWVudCA9IGZ1bmN0aW9uIChiYXNlRWxlbWVudCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gZGVmYXVsdE9wdGlvbnMob3B0aW9ucyksIHNjb3BlID0gX2Euc2NvcGUsIGN5Y2xlID0gX2EuY3ljbGU7XG4gICAgdmFyIF9iID0gZ2V0UmVsYXRpdmVGb2N1c2FibGUoYmFzZUVsZW1lbnQsIHNjb3BlKSwgcHJldiA9IF9iLnByZXYsIGxhc3QgPSBfYi5sYXN0O1xuICAgIHZhciBuZXdUYXJnZXQgPSBwcmV2IHx8IChjeWNsZSAmJiBsYXN0KTtcbiAgICBpZiAobmV3VGFyZ2V0KSB7XG4gICAgICAgIG5ld1RhcmdldC5ub2RlLmZvY3VzKG9wdGlvbnMuZm9jdXNPcHRpb25zKTtcbiAgICB9XG59O1xuIiwiaW1wb3J0IHsgY29ycmVjdE5vZGVzIH0gZnJvbSAnLi91dGlscy9jb3JyZWN0Rm9jdXMnO1xuaW1wb3J0IHsgcGlja0ZvY3VzYWJsZSB9IGZyb20gJy4vdXRpbHMvZmlyc3RGb2N1cyc7XG5pbXBvcnQgeyBpc0d1YXJkIH0gZnJvbSAnLi91dGlscy9pcyc7XG5leHBvcnQgdmFyIE5FV19GT0NVUyA9ICdORVdfRk9DVVMnO1xuZXhwb3J0IHZhciBuZXdGb2N1cyA9IGZ1bmN0aW9uIChpbm5lck5vZGVzLCBvdXRlck5vZGVzLCBhY3RpdmVFbGVtZW50LCBsYXN0Tm9kZSkge1xuICAgIHZhciBjbnQgPSBpbm5lck5vZGVzLmxlbmd0aDtcbiAgICB2YXIgZmlyc3RGb2N1cyA9IGlubmVyTm9kZXNbMF07XG4gICAgdmFyIGxhc3RGb2N1cyA9IGlubmVyTm9kZXNbY250IC0gMV07XG4gICAgdmFyIGlzT25HdWFyZCA9IGlzR3VhcmQoYWN0aXZlRWxlbWVudCk7XG4gICAgaWYgKGlubmVyTm9kZXMuaW5kZXhPZihhY3RpdmVFbGVtZW50KSA+PSAwKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHZhciBhY3RpdmVJbmRleCA9IG91dGVyTm9kZXMuaW5kZXhPZihhY3RpdmVFbGVtZW50KTtcbiAgICB2YXIgbGFzdEluZGV4ID0gbGFzdE5vZGUgPyBvdXRlck5vZGVzLmluZGV4T2YobGFzdE5vZGUpIDogYWN0aXZlSW5kZXg7XG4gICAgdmFyIGxhc3ROb2RlSW5zaWRlID0gbGFzdE5vZGUgPyBpbm5lck5vZGVzLmluZGV4T2YobGFzdE5vZGUpIDogLTE7XG4gICAgdmFyIGluZGV4RGlmZiA9IGFjdGl2ZUluZGV4IC0gbGFzdEluZGV4O1xuICAgIHZhciBmaXJzdE5vZGVJbmRleCA9IG91dGVyTm9kZXMuaW5kZXhPZihmaXJzdEZvY3VzKTtcbiAgICB2YXIgbGFzdE5vZGVJbmRleCA9IG91dGVyTm9kZXMuaW5kZXhPZihsYXN0Rm9jdXMpO1xuICAgIHZhciBjb3JyZWN0ZWROb2RlcyA9IGNvcnJlY3ROb2RlcyhvdXRlck5vZGVzKTtcbiAgICB2YXIgY29ycmVjdGVkSW5kZXhEaWZmID0gY29ycmVjdGVkTm9kZXMuaW5kZXhPZihhY3RpdmVFbGVtZW50KSAtIChsYXN0Tm9kZSA/IGNvcnJlY3RlZE5vZGVzLmluZGV4T2YobGFzdE5vZGUpIDogYWN0aXZlSW5kZXgpO1xuICAgIHZhciByZXR1cm5GaXJzdE5vZGUgPSBwaWNrRm9jdXNhYmxlKGlubmVyTm9kZXMsIDApO1xuICAgIHZhciByZXR1cm5MYXN0Tm9kZSA9IHBpY2tGb2N1c2FibGUoaW5uZXJOb2RlcywgY250IC0gMSk7XG4gICAgaWYgKGFjdGl2ZUluZGV4ID09PSAtMSB8fCBsYXN0Tm9kZUluc2lkZSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIE5FV19GT0NVUztcbiAgICB9XG4gICAgaWYgKCFpbmRleERpZmYgJiYgbGFzdE5vZGVJbnNpZGUgPj0gMCkge1xuICAgICAgICByZXR1cm4gbGFzdE5vZGVJbnNpZGU7XG4gICAgfVxuICAgIGlmIChhY3RpdmVJbmRleCA8PSBmaXJzdE5vZGVJbmRleCAmJiBpc09uR3VhcmQgJiYgTWF0aC5hYnMoaW5kZXhEaWZmKSA+IDEpIHtcbiAgICAgICAgcmV0dXJuIHJldHVybkxhc3ROb2RlO1xuICAgIH1cbiAgICBpZiAoYWN0aXZlSW5kZXggPj0gbGFzdE5vZGVJbmRleCAmJiBpc09uR3VhcmQgJiYgTWF0aC5hYnMoaW5kZXhEaWZmKSA+IDEpIHtcbiAgICAgICAgcmV0dXJuIHJldHVybkZpcnN0Tm9kZTtcbiAgICB9XG4gICAgaWYgKGluZGV4RGlmZiAmJiBNYXRoLmFicyhjb3JyZWN0ZWRJbmRleERpZmYpID4gMSkge1xuICAgICAgICByZXR1cm4gbGFzdE5vZGVJbnNpZGU7XG4gICAgfVxuICAgIGlmIChhY3RpdmVJbmRleCA8PSBmaXJzdE5vZGVJbmRleCkge1xuICAgICAgICByZXR1cm4gcmV0dXJuTGFzdE5vZGU7XG4gICAgfVxuICAgIGlmIChhY3RpdmVJbmRleCA+IGxhc3ROb2RlSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHJldHVybkZpcnN0Tm9kZTtcbiAgICB9XG4gICAgaWYgKGluZGV4RGlmZikge1xuICAgICAgICBpZiAoTWF0aC5hYnMoaW5kZXhEaWZmKSA+IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBsYXN0Tm9kZUluc2lkZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGNudCArIGxhc3ROb2RlSW5zaWRlICsgaW5kZXhEaWZmKSAlIGNudDtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgYXR0YWNoOiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgZGV0YWNoOiBmdW5jdGlvbiAoKSB7IH0sXG59O1xuIiwiaW1wb3J0IHsgdG9BcnJheSB9IGZyb20gJy4vYXJyYXknO1xuaW1wb3J0IHsgaXNWaXNpYmxlQ2FjaGVkLCBub3RIaWRkZW5JbnB1dCB9IGZyb20gJy4vaXMnO1xuaW1wb3J0IHsgb3JkZXJCeVRhYkluZGV4IH0gZnJvbSAnLi90YWJPcmRlcic7XG5pbXBvcnQgeyBnZXRGb2N1c2FibGVzLCBnZXRQYXJlbnRBdXRvZm9jdXNhYmxlcyB9IGZyb20gJy4vdGFiVXRpbHMnO1xuZXhwb3J0IHZhciBmaWx0ZXJGb2N1c2FibGUgPSBmdW5jdGlvbiAobm9kZXMsIHZpc2liaWxpdHlDYWNoZSkge1xuICAgIHJldHVybiB0b0FycmF5KG5vZGVzKVxuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChub2RlKSB7IHJldHVybiBpc1Zpc2libGVDYWNoZWQodmlzaWJpbGl0eUNhY2hlLCBub2RlKTsgfSlcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAobm9kZSkgeyByZXR1cm4gbm90SGlkZGVuSW5wdXQobm9kZSk7IH0pO1xufTtcbmV4cG9ydCB2YXIgZ2V0VGFiYmFibGVOb2RlcyA9IGZ1bmN0aW9uICh0b3BOb2RlcywgdmlzaWJpbGl0eUNhY2hlLCB3aXRoR3VhcmRzKSB7XG4gICAgcmV0dXJuIG9yZGVyQnlUYWJJbmRleChmaWx0ZXJGb2N1c2FibGUoZ2V0Rm9jdXNhYmxlcyh0b3BOb2Rlcywgd2l0aEd1YXJkcyksIHZpc2liaWxpdHlDYWNoZSksIHRydWUsIHdpdGhHdWFyZHMpO1xufTtcbmV4cG9ydCB2YXIgZ2V0QWxsVGFiYmFibGVOb2RlcyA9IGZ1bmN0aW9uICh0b3BOb2RlcywgdmlzaWJpbGl0eUNhY2hlKSB7XG4gICAgcmV0dXJuIG9yZGVyQnlUYWJJbmRleChmaWx0ZXJGb2N1c2FibGUoZ2V0Rm9jdXNhYmxlcyh0b3BOb2RlcyksIHZpc2liaWxpdHlDYWNoZSksIGZhbHNlKTtcbn07XG5leHBvcnQgdmFyIHBhcmVudEF1dG9mb2N1c2FibGVzID0gZnVuY3Rpb24gKHRvcE5vZGUsIHZpc2liaWxpdHlDYWNoZSkge1xuICAgIHJldHVybiBmaWx0ZXJGb2N1c2FibGUoZ2V0UGFyZW50QXV0b2ZvY3VzYWJsZXModG9wTm9kZSksIHZpc2liaWxpdHlDYWNoZSk7XG59O1xuIiwiaW1wb3J0IHsgRk9DVVNfRElTQUJMRUQsIEZPQ1VTX0dST1VQIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGFzQXJyYXksIHRvQXJyYXkgfSBmcm9tICcuL2FycmF5JztcbnZhciBmaWx0ZXJOZXN0ZWQgPSBmdW5jdGlvbiAobm9kZXMpIHtcbiAgICB2YXIgY29udGFpbmVkID0gbmV3IFNldCgpO1xuICAgIHZhciBsID0gbm9kZXMubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSArPSAxKSB7XG4gICAgICAgIGZvciAodmFyIGogPSBpICsgMTsgaiA8IGw7IGogKz0gMSkge1xuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gbm9kZXNbaV0uY29tcGFyZURvY3VtZW50UG9zaXRpb24obm9kZXNbal0pO1xuICAgICAgICAgICAgaWYgKChwb3NpdGlvbiAmIE5vZGUuRE9DVU1FTlRfUE9TSVRJT05fQ09OVEFJTkVEX0JZKSA+IDApIHtcbiAgICAgICAgICAgICAgICBjb250YWluZWQuYWRkKGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChwb3NpdGlvbiAmIE5vZGUuRE9DVU1FTlRfUE9TSVRJT05fQ09OVEFJTlMpID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lZC5hZGQoaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5vZGVzLmZpbHRlcihmdW5jdGlvbiAoXywgaW5kZXgpIHsgcmV0dXJuICFjb250YWluZWQuaGFzKGluZGV4KTsgfSk7XG59O1xudmFyIGdldFRvcFBhcmVudCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUucGFyZW50Tm9kZSA/IGdldFRvcFBhcmVudChub2RlLnBhcmVudE5vZGUpIDogbm9kZTtcbn07XG5leHBvcnQgdmFyIGdldEFsbEFmZmVjdGVkTm9kZXMgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgIHZhciBub2RlcyA9IGFzQXJyYXkobm9kZSk7XG4gICAgcmV0dXJuIG5vZGVzLmZpbHRlcihCb29sZWFuKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY3VycmVudE5vZGUpIHtcbiAgICAgICAgdmFyIGdyb3VwID0gY3VycmVudE5vZGUuZ2V0QXR0cmlidXRlKEZPQ1VTX0dST1VQKTtcbiAgICAgICAgYWNjLnB1c2guYXBwbHkoYWNjLCAoZ3JvdXBcbiAgICAgICAgICAgID8gZmlsdGVyTmVzdGVkKHRvQXJyYXkoZ2V0VG9wUGFyZW50KGN1cnJlbnROb2RlKS5xdWVyeVNlbGVjdG9yQWxsKFwiW1wiICsgRk9DVVNfR1JPVVAgKyBcIj1cXFwiXCIgKyBncm91cCArIFwiXFxcIl06bm90KFtcIiArIEZPQ1VTX0RJU0FCTEVEICsgXCI9XFxcImRpc2FibGVkXFxcIl0pXCIpKSlcbiAgICAgICAgICAgIDogW2N1cnJlbnROb2RlXSkpO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIFtdKTtcbn07XG4iLCJleHBvcnQgdmFyIHRvQXJyYXkgPSBmdW5jdGlvbiAoYSkge1xuICAgIHZhciByZXQgPSBBcnJheShhLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHJldFtpXSA9IGFbaV07XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59O1xuZXhwb3J0IHZhciBhc0FycmF5ID0gZnVuY3Rpb24gKGEpIHsgcmV0dXJuIChBcnJheS5pc0FycmF5KGEpID8gYSA6IFthXSk7IH07XG4iLCJ2YXIgaXNSYWRpbyA9IGZ1bmN0aW9uIChub2RlKSB7IHJldHVybiBub2RlLnRhZ05hbWUgPT09ICdJTlBVVCcgJiYgbm9kZS50eXBlID09PSAncmFkaW8nOyB9O1xudmFyIGZpbmRTZWxlY3RlZFJhZGlvID0gZnVuY3Rpb24gKG5vZGUsIG5vZGVzKSB7XG4gICAgcmV0dXJuIG5vZGVzXG4gICAgICAgIC5maWx0ZXIoaXNSYWRpbylcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIGVsLm5hbWUgPT09IG5vZGUubmFtZTsgfSlcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIGVsLmNoZWNrZWQ7IH0pWzBdIHx8IG5vZGU7XG59O1xuZXhwb3J0IHZhciBjb3JyZWN0Tm9kZSA9IGZ1bmN0aW9uIChub2RlLCBub2Rlcykge1xuICAgIGlmIChpc1JhZGlvKG5vZGUpICYmIG5vZGUubmFtZSkge1xuICAgICAgICByZXR1cm4gZmluZFNlbGVjdGVkUmFkaW8obm9kZSwgbm9kZXMpO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbn07XG5leHBvcnQgdmFyIGNvcnJlY3ROb2RlcyA9IGZ1bmN0aW9uIChub2Rlcykge1xuICAgIHZhciByZXN1bHRTZXQgPSBuZXcgU2V0KCk7XG4gICAgbm9kZXMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkgeyByZXR1cm4gcmVzdWx0U2V0LmFkZChjb3JyZWN0Tm9kZShub2RlLCBub2RlcykpOyB9KTtcbiAgICByZXR1cm4gbm9kZXMuZmlsdGVyKGZ1bmN0aW9uIChub2RlKSB7IHJldHVybiByZXN1bHRTZXQuaGFzKG5vZGUpOyB9KTtcbn07XG4iLCJpbXBvcnQgeyBjb3JyZWN0Tm9kZSB9IGZyb20gJy4vY29ycmVjdEZvY3VzJztcbmV4cG9ydCB2YXIgcGlja0ZpcnN0Rm9jdXMgPSBmdW5jdGlvbiAobm9kZXMpIHtcbiAgICBpZiAobm9kZXNbMF0gJiYgbm9kZXMubGVuZ3RoID4gMSkge1xuICAgICAgICByZXR1cm4gY29ycmVjdE5vZGUobm9kZXNbMF0sIG5vZGVzKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGVzWzBdO1xufTtcbmV4cG9ydCB2YXIgcGlja0ZvY3VzYWJsZSA9IGZ1bmN0aW9uIChub2RlcywgaW5kZXgpIHtcbiAgICBpZiAobm9kZXMubGVuZ3RoID4gMSkge1xuICAgICAgICByZXR1cm4gbm9kZXMuaW5kZXhPZihjb3JyZWN0Tm9kZShub2Rlc1tpbmRleF0sIG5vZGVzKSk7XG4gICAgfVxuICAgIHJldHVybiBpbmRleDtcbn07XG4iLCJ2YXIgaXNFbGVtZW50SGlkZGVuID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgY29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpO1xuICAgIGlmICghY29tcHV0ZWRTdHlsZSB8fCAhY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIChjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2Rpc3BsYXknKSA9PT0gJ25vbmUnIHx8IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgndmlzaWJpbGl0eScpID09PSAnaGlkZGVuJyk7XG59O1xudmFyIGlzVmlzaWJsZVVuY2FjaGVkID0gZnVuY3Rpb24gKG5vZGUsIGNoZWNrUGFyZW50KSB7XG4gICAgcmV0dXJuICFub2RlIHx8XG4gICAgICAgIG5vZGUgPT09IGRvY3VtZW50IHx8XG4gICAgICAgIChub2RlICYmIG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfTk9ERSkgfHxcbiAgICAgICAgKCFpc0VsZW1lbnRIaWRkZW4obm9kZSkgJiZcbiAgICAgICAgICAgIGNoZWNrUGFyZW50KG5vZGUucGFyZW50Tm9kZSAmJiBub2RlLnBhcmVudE5vZGUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERVxuICAgICAgICAgICAgICAgID8gbm9kZS5wYXJlbnROb2RlLmhvc3RcbiAgICAgICAgICAgICAgICA6IG5vZGUucGFyZW50Tm9kZSkpO1xufTtcbmV4cG9ydCB2YXIgaXNWaXNpYmxlQ2FjaGVkID0gZnVuY3Rpb24gKHZpc2liaWxpdHlDYWNoZSwgbm9kZSkge1xuICAgIHZhciBjYWNoZWQgPSB2aXNpYmlsaXR5Q2FjaGUuZ2V0KG5vZGUpO1xuICAgIGlmIChjYWNoZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gY2FjaGVkO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gaXNWaXNpYmxlVW5jYWNoZWQobm9kZSwgaXNWaXNpYmxlQ2FjaGVkLmJpbmQodW5kZWZpbmVkLCB2aXNpYmlsaXR5Q2FjaGUpKTtcbiAgICB2aXNpYmlsaXR5Q2FjaGUuc2V0KG5vZGUsIHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5leHBvcnQgdmFyIG5vdEhpZGRlbklucHV0ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICByZXR1cm4gISgobm9kZS50YWdOYW1lID09PSAnSU5QVVQnIHx8IG5vZGUudGFnTmFtZSA9PT0gJ0JVVFRPTicpICYmIChub2RlLnR5cGUgPT09ICdoaWRkZW4nIHx8IG5vZGUuZGlzYWJsZWQpKTtcbn07XG5leHBvcnQgdmFyIGlzR3VhcmQgPSBmdW5jdGlvbiAobm9kZSkgeyByZXR1cm4gQm9vbGVhbihub2RlICYmIG5vZGUuZGF0YXNldCAmJiBub2RlLmRhdGFzZXQuZm9jdXNHdWFyZCk7IH07XG5leHBvcnQgdmFyIGlzTm90QUd1YXJkID0gZnVuY3Rpb24gKG5vZGUpIHsgcmV0dXJuICFpc0d1YXJkKG5vZGUpOyB9O1xuZXhwb3J0IHZhciBpc0RlZmluZWQgPSBmdW5jdGlvbiAoeCkgeyByZXR1cm4gQm9vbGVhbih4KTsgfTtcbiIsImltcG9ydCB7IGFzQXJyYXkgfSBmcm9tICcuL2FycmF5JztcbmltcG9ydCB7IHBhcmVudEF1dG9mb2N1c2FibGVzIH0gZnJvbSAnLi9ET011dGlscyc7XG52YXIgZ2V0UGFyZW50cyA9IGZ1bmN0aW9uIChub2RlLCBwYXJlbnRzKSB7XG4gICAgaWYgKHBhcmVudHMgPT09IHZvaWQgMCkgeyBwYXJlbnRzID0gW107IH1cbiAgICBwYXJlbnRzLnB1c2gobm9kZSk7XG4gICAgaWYgKG5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgICBnZXRQYXJlbnRzKG5vZGUucGFyZW50Tm9kZSwgcGFyZW50cyk7XG4gICAgfVxuICAgIHJldHVybiBwYXJlbnRzO1xufTtcbmV4cG9ydCB2YXIgZ2V0Q29tbW9uUGFyZW50ID0gZnVuY3Rpb24gKG5vZGVBLCBub2RlQikge1xuICAgIHZhciBwYXJlbnRzQSA9IGdldFBhcmVudHMobm9kZUEpO1xuICAgIHZhciBwYXJlbnRzQiA9IGdldFBhcmVudHMobm9kZUIpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyZW50c0EubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRQYXJlbnQgPSBwYXJlbnRzQVtpXTtcbiAgICAgICAgaWYgKHBhcmVudHNCLmluZGV4T2YoY3VycmVudFBhcmVudCkgPj0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRQYXJlbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcbmV4cG9ydCB2YXIgZ2V0VG9wQ29tbW9uUGFyZW50ID0gZnVuY3Rpb24gKGJhc2VBY3RpdmVFbGVtZW50LCBsZWZ0RW50cnksIHJpZ2h0RW50cmllcykge1xuICAgIHZhciBhY3RpdmVFbGVtZW50cyA9IGFzQXJyYXkoYmFzZUFjdGl2ZUVsZW1lbnQpO1xuICAgIHZhciBsZWZ0RW50cmllcyA9IGFzQXJyYXkobGVmdEVudHJ5KTtcbiAgICB2YXIgYWN0aXZlRWxlbWVudCA9IGFjdGl2ZUVsZW1lbnRzWzBdO1xuICAgIHZhciB0b3BDb21tb24gPSBmYWxzZTtcbiAgICBsZWZ0RW50cmllcy5maWx0ZXIoQm9vbGVhbikuZm9yRWFjaChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgdG9wQ29tbW9uID0gZ2V0Q29tbW9uUGFyZW50KHRvcENvbW1vbiB8fCBlbnRyeSwgZW50cnkpIHx8IHRvcENvbW1vbjtcbiAgICAgICAgcmlnaHRFbnRyaWVzLmZpbHRlcihCb29sZWFuKS5mb3JFYWNoKGZ1bmN0aW9uIChzdWJFbnRyeSkge1xuICAgICAgICAgICAgdmFyIGNvbW1vbiA9IGdldENvbW1vblBhcmVudChhY3RpdmVFbGVtZW50LCBzdWJFbnRyeSk7XG4gICAgICAgICAgICBpZiAoY29tbW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0b3BDb21tb24gfHwgY29tbW9uLmNvbnRhaW5zKHRvcENvbW1vbikpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wQ29tbW9uID0gY29tbW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wQ29tbW9uID0gZ2V0Q29tbW9uUGFyZW50KGNvbW1vbiwgdG9wQ29tbW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiB0b3BDb21tb247XG59O1xuZXhwb3J0IHZhciBhbGxQYXJlbnRBdXRvZm9jdXNhYmxlcyA9IGZ1bmN0aW9uIChlbnRyaWVzLCB2aXNpYmlsaXR5Q2FjaGUpIHtcbiAgICByZXR1cm4gZW50cmllcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgbm9kZSkgeyByZXR1cm4gYWNjLmNvbmNhdChwYXJlbnRBdXRvZm9jdXNhYmxlcyhub2RlLCB2aXNpYmlsaXR5Q2FjaGUpKTsgfSwgW10pO1xufTtcbiIsImltcG9ydCB7IHRvQXJyYXkgfSBmcm9tICcuL2FycmF5JztcbmV4cG9ydCB2YXIgdGFiU29ydCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgdmFyIHRhYkRpZmYgPSBhLnRhYkluZGV4IC0gYi50YWJJbmRleDtcbiAgICB2YXIgaW5kZXhEaWZmID0gYS5pbmRleCAtIGIuaW5kZXg7XG4gICAgaWYgKHRhYkRpZmYpIHtcbiAgICAgICAgaWYgKCFhLnRhYkluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWIudGFiSW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFiRGlmZiB8fCBpbmRleERpZmY7XG59O1xuZXhwb3J0IHZhciBvcmRlckJ5VGFiSW5kZXggPSBmdW5jdGlvbiAobm9kZXMsIGZpbHRlck5lZ2F0aXZlLCBrZWVwR3VhcmRzKSB7XG4gICAgcmV0dXJuIHRvQXJyYXkobm9kZXMpXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKG5vZGUsIGluZGV4KSB7IHJldHVybiAoe1xuICAgICAgICBub2RlOiBub2RlLFxuICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgIHRhYkluZGV4OiBrZWVwR3VhcmRzICYmIG5vZGUudGFiSW5kZXggPT09IC0xID8gKChub2RlLmRhdGFzZXQgfHwge30pLmZvY3VzR3VhcmQgPyAwIDogLTEpIDogbm9kZS50YWJJbmRleCxcbiAgICB9KTsgfSlcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gIWZpbHRlck5lZ2F0aXZlIHx8IGRhdGEudGFiSW5kZXggPj0gMDsgfSlcbiAgICAgICAgLnNvcnQodGFiU29ydCk7XG59O1xuIiwiaW1wb3J0IHsgRk9DVVNfQVVUTyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyB0b0FycmF5IH0gZnJvbSAnLi9hcnJheSc7XG5pbXBvcnQgeyB0YWJiYWJsZXMgfSBmcm9tICcuL3RhYmJhYmxlcyc7XG52YXIgcXVlcnlUYWJiYWJsZXMgPSB0YWJiYWJsZXMuam9pbignLCcpO1xudmFyIHF1ZXJ5R3VhcmRUYWJiYWJsZXMgPSBxdWVyeVRhYmJhYmxlcyArIFwiLCBbZGF0YS1mb2N1cy1ndWFyZF1cIjtcbmV4cG9ydCB2YXIgZ2V0Rm9jdXNhYmxlcyA9IGZ1bmN0aW9uIChwYXJlbnRzLCB3aXRoR3VhcmRzKSB7XG4gICAgcmV0dXJuIHBhcmVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBhcmVudCkge1xuICAgICAgICByZXR1cm4gYWNjLmNvbmNhdCh0b0FycmF5KHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHdpdGhHdWFyZHMgPyBxdWVyeUd1YXJkVGFiYmFibGVzIDogcXVlcnlUYWJiYWJsZXMpKSwgcGFyZW50LnBhcmVudE5vZGVcbiAgICAgICAgICAgID8gdG9BcnJheShwYXJlbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5VGFiYmFibGVzKSkuZmlsdGVyKGZ1bmN0aW9uIChub2RlKSB7IHJldHVybiBub2RlID09PSBwYXJlbnQ7IH0pXG4gICAgICAgICAgICA6IFtdKTtcbiAgICB9LCBbXSk7XG59O1xuZXhwb3J0IHZhciBnZXRQYXJlbnRBdXRvZm9jdXNhYmxlcyA9IGZ1bmN0aW9uIChwYXJlbnQpIHtcbiAgICB2YXIgcGFyZW50Rm9jdXMgPSBwYXJlbnQucXVlcnlTZWxlY3RvckFsbChcIltcIiArIEZPQ1VTX0FVVE8gKyBcIl1cIik7XG4gICAgcmV0dXJuIHRvQXJyYXkocGFyZW50Rm9jdXMpXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKG5vZGUpIHsgcmV0dXJuIGdldEZvY3VzYWJsZXMoW25vZGVdKTsgfSlcbiAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBub2RlcykgeyByZXR1cm4gYWNjLmNvbmNhdChub2Rlcyk7IH0sIFtdKTtcbn07XG4iLCJleHBvcnQgdmFyIHRhYmJhYmxlcyA9IFtcbiAgICAnYnV0dG9uOmVuYWJsZWQnLFxuICAgICdzZWxlY3Q6ZW5hYmxlZCcsXG4gICAgJ3RleHRhcmVhOmVuYWJsZWQnLFxuICAgICdpbnB1dDplbmFibGVkJyxcbiAgICAnYVtocmVmXScsXG4gICAgJ2FyZWFbaHJlZl0nLFxuICAgICdzdW1tYXJ5JyxcbiAgICAnaWZyYW1lJyxcbiAgICAnb2JqZWN0JyxcbiAgICAnZW1iZWQnLFxuICAgICdhdWRpb1tjb250cm9sc10nLFxuICAgICd2aWRlb1tjb250cm9sc10nLFxuICAgICdbdGFiaW5kZXhdJyxcbiAgICAnW2NvbnRlbnRlZGl0YWJsZV0nLFxuICAgICdbYXV0b2ZvY3VzXScsXG5dO1xuIiwidmFyIGN1cnJlbnROb25jZTtcbmV4cG9ydCB2YXIgc2V0Tm9uY2UgPSBmdW5jdGlvbiAobm9uY2UpIHtcbiAgICBjdXJyZW50Tm9uY2UgPSBub25jZTtcbn07XG5leHBvcnQgdmFyIGdldE5vbmNlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChjdXJyZW50Tm9uY2UpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnROb25jZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls1XS51c2VbMV0hLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls1XS51c2VbMl0hLi9zdHlsZXMuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIC8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuICAgICAgICAgICAgICAgIC8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbiAgICAgICAgICAgICAgICB2YXIgYW5jaG9yRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50Tm9kZSA9IGFuY2hvckVsZW1lbnQucGFyZW50Tm9kZS8vIE5vcm1hbGx5IDxoZWFkPlxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAvLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbiAgICAgICAgICAgICAgICAvLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4gICAgICAgICAgICAgICAgLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIGFuY2hvckVsZW1lbnQpO1xuICAgICAgICAgICAgfTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICAgIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsZXQgcDtcbiAgICBmb3IocCBpbiBhKXtcbiAgICAgICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvcihwIGluIGIpe1xuICAgICAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYVtwXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNV0udXNlWzFdIS4uLy4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNV0udXNlWzJdIS4vc3R5bGVzLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzVdLnVzZVsxXSEuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzVdLnVzZVsyXSEuL3N0eWxlcy5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBUaGlzIGNvZGUgaXMgc3ViamVjdCB0byBMSUNFTlNFIGluIHJvb3Qgb2YgdGhpcyByZXBvc2l0b3J5ICovXFxuXFxuLyogVXNlZCB0byBkZXRlY3QgaW4gSmF2YVNjcmlwdCBpZiBhcHBzIGhhdmUgbG9hZGVkIHN0eWxlcyBvciBub3QuICovXFxuOnJvb3Qge1xcbiAgLS1yZWFjaC1kaWFsb2c6IDE7XFxufVxcblxcbltkYXRhLXJlYWNoLWRpYWxvZy1vdmVybGF5XSB7XFxuICBiYWNrZ3JvdW5kOiBoc2xhKDAsIDAlLCAwJSwgMC4zMyk7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuW2RhdGEtcmVhY2gtZGlhbG9nLWNvbnRlbnRdIHtcXG4gIHdpZHRoOiA1MHZ3O1xcbiAgbWFyZ2luOiAxMHZoIGF1dG87XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vbm9kZV9tb2R1bGVzL0ByZWFjaC9kaWFsb2cvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwrREFBK0Q7O0FBRS9ELG9FQUFvRTtBQUNwRTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztFQUNQLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFRoaXMgY29kZSBpcyBzdWJqZWN0IHRvIExJQ0VOU0UgaW4gcm9vdCBvZiB0aGlzIHJlcG9zaXRvcnkgKi9cXG5cXG4vKiBVc2VkIHRvIGRldGVjdCBpbiBKYXZhU2NyaXB0IGlmIGFwcHMgaGF2ZSBsb2FkZWQgc3R5bGVzIG9yIG5vdC4gKi9cXG46cm9vdCB7XFxuICAtLXJlYWNoLWRpYWxvZzogMTtcXG59XFxuXFxuW2RhdGEtcmVhY2gtZGlhbG9nLW92ZXJsYXldIHtcXG4gIGJhY2tncm91bmQ6IGhzbGEoMCwgMCUsIDAlLCAwLjMzKTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG5bZGF0YS1yZWFjaC1kaWFsb2ctY29udGVudF0ge1xcbiAgd2lkdGg6IDUwdnc7XFxuICBtYXJnaW46IDEwdmggYXV0bztcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZSc7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiB3aXRoU2lkZUVmZmVjdChyZWR1Y2VQcm9wc1RvU3RhdGUsIGhhbmRsZVN0YXRlQ2hhbmdlT25DbGllbnQpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGlmICh0eXBlb2YgcmVkdWNlUHJvcHNUb1N0YXRlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHJlZHVjZVByb3BzVG9TdGF0ZSB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgaGFuZGxlU3RhdGVDaGFuZ2VPbkNsaWVudCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBoYW5kbGVTdGF0ZUNoYW5nZU9uQ2xpZW50IHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoV3JhcHBlZENvbXBvbmVudCkge1xuICAgIHJldHVybiBXcmFwcGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IFdyYXBwZWRDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKFdyYXBwZWRDb21wb25lbnQpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBpZiAodHlwZW9mIFdyYXBwZWRDb21wb25lbnQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBXcmFwcGVkQ29tcG9uZW50IHRvIGJlIGEgUmVhY3QgY29tcG9uZW50LicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBtb3VudGVkSW5zdGFuY2VzID0gW107XG4gICAgdmFyIHN0YXRlO1xuXG4gICAgZnVuY3Rpb24gZW1pdENoYW5nZSgpIHtcbiAgICAgIHN0YXRlID0gcmVkdWNlUHJvcHNUb1N0YXRlKG1vdW50ZWRJbnN0YW5jZXMubWFwKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gaW5zdGFuY2UucHJvcHM7XG4gICAgICB9KSk7XG4gICAgICBoYW5kbGVTdGF0ZUNoYW5nZU9uQ2xpZW50KHN0YXRlKTtcbiAgICB9XG5cbiAgICB2YXIgU2lkZUVmZmVjdCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1B1cmVDb21wb25lbnQpIHtcbiAgICAgIF9pbmhlcml0c0xvb3NlKFNpZGVFZmZlY3QsIF9QdXJlQ29tcG9uZW50KTtcblxuICAgICAgZnVuY3Rpb24gU2lkZUVmZmVjdCgpIHtcbiAgICAgICAgcmV0dXJuIF9QdXJlQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gVHJ5IHRvIHVzZSBkaXNwbGF5TmFtZSBvZiB3cmFwcGVkIGNvbXBvbmVudFxuICAgICAgU2lkZUVmZmVjdC5wZWVrID0gZnVuY3Rpb24gcGVlaygpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfTtcblxuICAgICAgdmFyIF9wcm90byA9IFNpZGVFZmZlY3QucHJvdG90eXBlO1xuXG4gICAgICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbW91bnRlZEluc3RhbmNlcy5wdXNoKHRoaXMpO1xuICAgICAgICBlbWl0Q2hhbmdlKCk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICBlbWl0Q2hhbmdlKCk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gbW91bnRlZEluc3RhbmNlcy5pbmRleE9mKHRoaXMpO1xuICAgICAgICBtb3VudGVkSW5zdGFuY2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGVtaXRDaGFuZ2UoKTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChXcmFwcGVkQ29tcG9uZW50LCB0aGlzLnByb3BzKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBTaWRlRWZmZWN0O1xuICAgIH0oUHVyZUNvbXBvbmVudCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoU2lkZUVmZmVjdCwgXCJkaXNwbGF5TmFtZVwiLCBcIlNpZGVFZmZlY3QoXCIgKyBnZXREaXNwbGF5TmFtZShXcmFwcGVkQ29tcG9uZW50KSArIFwiKVwiKTtcblxuICAgIHJldHVybiBTaWRlRWZmZWN0O1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU2lkZUVmZmVjdDtcbiIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tICdmb2N1cy1sb2NrL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBpbmxpbmVQcm9wIH0gZnJvbSAnLi91dGlsJztcblxudmFyIEF1dG9Gb2N1c0luc2lkZSA9IGZ1bmN0aW9uIEF1dG9Gb2N1c0luc2lkZShfcmVmKSB7XG4gIHZhciBkaXNhYmxlZCA9IF9yZWYuZGlzYWJsZWQsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBpbmxpbmVQcm9wKGNvbnN0YW50cy5GT0NVU19BVVRPLCAhZGlzYWJsZWQpLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgfSksIGNoaWxkcmVuKTtcbn07XG5cbkF1dG9Gb2N1c0luc2lkZS5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufSA6IHt9O1xuQXV0b0ZvY3VzSW5zaWRlLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZFxufTtcbmV4cG9ydCBkZWZhdWx0IEF1dG9Gb2N1c0luc2lkZTsiLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvY3VzTG9ja1VJIGZyb20gJy4vTG9jayc7XG5pbXBvcnQgRm9jdXNUcmFwIGZyb20gJy4vVHJhcCc7XG4vKiB0aGF0IHdvdWxkIGJlIGEgQlJFQUtJTkcgQ0hBTkdFIVxuLy8gZGVsYXlpbmcgc2lkZWNhciBleGVjdXRpb24gdGlsbCB0aGUgZmlyc3QgdXNhZ2VcbmNvbnN0IFJlcXVpcmVTaWRlQ2FyID0gKHByb3BzKSA9PiB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnbG9iYWwtcmVxdWlyZVxuICBjb25zdCBTaWRlQ2FyID0gcmVxdWlyZSgnLi9UcmFwJykuZGVmYXVsdDtcbiAgcmV0dXJuIDxTaWRlQ2FyIHsuLi5wcm9wc30gLz47XG59O1xuKi9cblxudmFyIEZvY3VzTG9ja0NvbWJpbmF0aW9uID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gRm9jdXNMb2NrVUlDb21iaW5hdGlvbihwcm9wcywgcmVmKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChGb2N1c0xvY2tVSSwgX2V4dGVuZHMoe1xuICAgIHNpZGVDYXI6IEZvY3VzVHJhcCxcbiAgICByZWY6IHJlZlxuICB9LCBwcm9wcykpO1xufSk7XG5cbnZhciBfcmVmID0gRm9jdXNMb2NrVUkucHJvcFR5cGVzIHx8IHt9LFxuICAgIHNpZGVDYXIgPSBfcmVmLnNpZGVDYXIsXG4gICAgcHJvcFR5cGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgW1wic2lkZUNhclwiXSk7XG5cbkZvY3VzTG9ja0NvbWJpbmF0aW9uLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHByb3BUeXBlcyA6IHt9O1xuZXhwb3J0IGRlZmF1bHQgRm9jdXNMb2NrQ29tYmluYXRpb247IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmV4cG9ydCB2YXIgaGlkZGVuR3VhcmQgPSB7XG4gIHdpZHRoOiAnMXB4JyxcbiAgaGVpZ2h0OiAnMHB4JyxcbiAgcGFkZGluZzogMCxcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgdG9wOiAnMXB4JyxcbiAgbGVmdDogJzFweCdcbn07XG5cbnZhciBJbkZvY3VzR3VhcmQgPSBmdW5jdGlvbiBJbkZvY3VzR3VhcmQoX3JlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBrZXk6IFwiZ3VhcmQtZmlyc3RcIixcbiAgICBcImRhdGEtZm9jdXMtZ3VhcmRcIjogdHJ1ZSxcbiAgICBcImRhdGEtZm9jdXMtYXV0by1ndWFyZFwiOiB0cnVlLFxuICAgIHN0eWxlOiBoaWRkZW5HdWFyZFxuICB9KSwgY2hpbGRyZW4sIGNoaWxkcmVuICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBrZXk6IFwiZ3VhcmQtbGFzdFwiLFxuICAgIFwiZGF0YS1mb2N1cy1ndWFyZFwiOiB0cnVlLFxuICAgIFwiZGF0YS1mb2N1cy1hdXRvLWd1YXJkXCI6IHRydWUsXG4gICAgc3R5bGU6IGhpZGRlbkd1YXJkXG4gIH0pKTtcbn07XG5cbkluRm9jdXNHdWFyZC5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxufSA6IHt9O1xuSW5Gb2N1c0d1YXJkLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IG51bGxcbn07XG5leHBvcnQgZGVmYXVsdCBJbkZvY3VzR3VhcmQ7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0ICogYXMgY29uc3RhbnRzIGZyb20gJ2ZvY3VzLWxvY2svY29uc3RhbnRzJztcbmltcG9ydCB7IGlubGluZVByb3AgfSBmcm9tICcuL3V0aWwnO1xuXG52YXIgRnJlZUZvY3VzSW5zaWRlID0gZnVuY3Rpb24gRnJlZUZvY3VzSW5zaWRlKF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe30sIGlubGluZVByb3AoY29uc3RhbnRzLkZPQ1VTX0FMTE9XLCB0cnVlKSwge1xuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXG4gIH0pLCBjaGlsZHJlbik7XG59O1xuXG5GcmVlRm9jdXNJbnNpZGUucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59IDoge307XG5GcmVlRm9jdXNJbnNpZGUuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6IHVuZGVmaW5lZFxufTtcbmV4cG9ydCBkZWZhdWx0IEZyZWVGb2N1c0luc2lkZTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG5vZGUsIGJvb2wsIHN0cmluZywgYW55LCBhcnJheU9mLCBvbmVPZlR5cGUsIG9iamVjdCwgZnVuYyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0ICogYXMgY29uc3RhbnRzIGZyb20gJ2ZvY3VzLWxvY2svY29uc3RhbnRzJztcbmltcG9ydCB7IHVzZU1lcmdlUmVmcyB9IGZyb20gJ3VzZS1jYWxsYmFjay1yZWYnO1xuaW1wb3J0IHsgaGlkZGVuR3VhcmQgfSBmcm9tICcuL0ZvY3VzR3VhcmQnO1xuaW1wb3J0IHsgbWVkaXVtRm9jdXMsIG1lZGl1bUJsdXIsIG1lZGl1bVNpZGVjYXIgfSBmcm9tICcuL21lZGl1bSc7XG52YXIgZW1wdHlBcnJheSA9IFtdO1xudmFyIEZvY3VzTG9jayA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIEZvY3VzTG9ja1VJKHByb3BzLCBwYXJlbnRSZWYpIHtcbiAgdmFyIF9leHRlbmRzMjtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoKSxcbiAgICAgIHJlYWxPYnNlcnZlZCA9IF9SZWFjdCR1c2VTdGF0ZVswXSxcbiAgICAgIHNldE9ic2VydmVkID0gX1JlYWN0JHVzZVN0YXRlWzFdO1xuXG4gIHZhciBvYnNlcnZlZCA9IFJlYWN0LnVzZVJlZigpO1xuICB2YXIgaXNBY3RpdmUgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuICB2YXIgb3JpZ2luYWxGb2N1c2VkRWxlbWVudCA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgbm9Gb2N1c0d1YXJkcyA9IHByb3BzLm5vRm9jdXNHdWFyZHMsXG4gICAgICBwZXJzaXN0ZW50Rm9jdXMgPSBwcm9wcy5wZXJzaXN0ZW50Rm9jdXMsXG4gICAgICBjcm9zc0ZyYW1lID0gcHJvcHMuY3Jvc3NGcmFtZSxcbiAgICAgIGF1dG9Gb2N1cyA9IHByb3BzLmF1dG9Gb2N1cyxcbiAgICAgIGFsbG93VGV4dFNlbGVjdGlvbiA9IHByb3BzLmFsbG93VGV4dFNlbGVjdGlvbixcbiAgICAgIGdyb3VwID0gcHJvcHMuZ3JvdXAsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICB3aGl0ZUxpc3QgPSBwcm9wcy53aGl0ZUxpc3QsXG4gICAgICBfcHJvcHMkc2hhcmRzID0gcHJvcHMuc2hhcmRzLFxuICAgICAgc2hhcmRzID0gX3Byb3BzJHNoYXJkcyA9PT0gdm9pZCAwID8gZW1wdHlBcnJheSA6IF9wcm9wcyRzaGFyZHMsXG4gICAgICBfcHJvcHMkYXMgPSBwcm9wcy5hcyxcbiAgICAgIENvbnRhaW5lciA9IF9wcm9wcyRhcyA9PT0gdm9pZCAwID8gJ2RpdicgOiBfcHJvcHMkYXMsXG4gICAgICBfcHJvcHMkbG9ja1Byb3BzID0gcHJvcHMubG9ja1Byb3BzLFxuICAgICAgY29udGFpbmVyUHJvcHMgPSBfcHJvcHMkbG9ja1Byb3BzID09PSB2b2lkIDAgPyB7fSA6IF9wcm9wcyRsb2NrUHJvcHMsXG4gICAgICBTaWRlQ2FyID0gcHJvcHMuc2lkZUNhcixcbiAgICAgIHNob3VsZFJldHVybkZvY3VzID0gcHJvcHMucmV0dXJuRm9jdXMsXG4gICAgICBvbkFjdGl2YXRpb25DYWxsYmFjayA9IHByb3BzLm9uQWN0aXZhdGlvbixcbiAgICAgIG9uRGVhY3RpdmF0aW9uQ2FsbGJhY2sgPSBwcm9wcy5vbkRlYWN0aXZhdGlvbjtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlMiA9IFJlYWN0LnVzZVN0YXRlKHt9KSxcbiAgICAgIGlkID0gX1JlYWN0JHVzZVN0YXRlMlswXTsgLy8gU0lERSBFRkZFQ1QgQ0FMTEJBQ0tTXG5cblxuICB2YXIgb25BY3RpdmF0aW9uID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIG9yaWdpbmFsRm9jdXNlZEVsZW1lbnQuY3VycmVudCA9IG9yaWdpbmFsRm9jdXNlZEVsZW1lbnQuY3VycmVudCB8fCBkb2N1bWVudCAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXG4gICAgaWYgKG9ic2VydmVkLmN1cnJlbnQgJiYgb25BY3RpdmF0aW9uQ2FsbGJhY2spIHtcbiAgICAgIG9uQWN0aXZhdGlvbkNhbGxiYWNrKG9ic2VydmVkLmN1cnJlbnQpO1xuICAgIH1cblxuICAgIGlzQWN0aXZlLmN1cnJlbnQgPSB0cnVlO1xuICB9LCBbb25BY3RpdmF0aW9uQ2FsbGJhY2tdKTtcbiAgdmFyIG9uRGVhY3RpdmF0aW9uID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIGlzQWN0aXZlLmN1cnJlbnQgPSBmYWxzZTtcblxuICAgIGlmIChvbkRlYWN0aXZhdGlvbkNhbGxiYWNrKSB7XG4gICAgICBvbkRlYWN0aXZhdGlvbkNhbGxiYWNrKG9ic2VydmVkLmN1cnJlbnQpO1xuICAgIH1cbiAgfSwgW29uRGVhY3RpdmF0aW9uQ2FsbGJhY2tdKTtcbiAgdmFyIHJldHVybkZvY3VzID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGFsbG93RGVmZXIpIHtcbiAgICB2YXIgY3VycmVudCA9IG9yaWdpbmFsRm9jdXNlZEVsZW1lbnQuY3VycmVudDtcblxuICAgIGlmIChCb29sZWFuKHNob3VsZFJldHVybkZvY3VzKSAmJiBjdXJyZW50ICYmIGN1cnJlbnQuZm9jdXMpIHtcbiAgICAgIHZhciBmb2N1c09wdGlvbnMgPSB0eXBlb2Ygc2hvdWxkUmV0dXJuRm9jdXMgPT09ICdvYmplY3QnID8gc2hvdWxkUmV0dXJuRm9jdXMgOiB1bmRlZmluZWQ7XG4gICAgICBvcmlnaW5hbEZvY3VzZWRFbGVtZW50LmN1cnJlbnQgPSBudWxsO1xuXG4gICAgICBpZiAoYWxsb3dEZWZlcikge1xuICAgICAgICAvLyBSZWFjdCBtaWdodCByZXR1cm4gZm9jdXMgYWZ0ZXIgdXBkYXRlXG4gICAgICAgIC8vIGl0J3Mgc2FmZXIgdG8gZGVmZXIgdGhlIGFjdGlvblxuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY3VycmVudC5mb2N1cyhmb2N1c09wdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnQuZm9jdXMoZm9jdXNPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtzaG91bGRSZXR1cm5Gb2N1c10pOyAvLyBNRURJVU0gQ0FMTEJBQ0tTXG5cbiAgdmFyIG9uRm9jdXMgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoaXNBY3RpdmUuY3VycmVudCkge1xuICAgICAgbWVkaXVtRm9jdXMudXNlTWVkaXVtKGV2ZW50KTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgdmFyIG9uQmx1ciA9IG1lZGl1bUJsdXIudXNlTWVkaXVtOyAvLyBSRUYgUFJPUEFHQVRJT05cbiAgLy8gbm90IHVzaW5nIHJlYWwgcmVmcyBkdWUgdG8gcmFjZSBjb25kaXRpb25zXG5cbiAgdmFyIHNldE9ic2VydmVOb2RlID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKG5ld09ic2VydmVkKSB7XG4gICAgaWYgKG9ic2VydmVkLmN1cnJlbnQgIT09IG5ld09ic2VydmVkKSB7XG4gICAgICBvYnNlcnZlZC5jdXJyZW50ID0gbmV3T2JzZXJ2ZWQ7XG4gICAgICBzZXRPYnNlcnZlZChuZXdPYnNlcnZlZCk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAodHlwZW9mIGFsbG93VGV4dFNlbGVjdGlvbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oJ1JlYWN0LUZvY3VzLUxvY2s6IGFsbG93VGV4dFNlbGVjdGlvbiBpcyBkZXByZWNhdGVkIGFuZCBlbmFibGVkIGJ5IGRlZmF1bHQnKTtcbiAgICB9XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFvYnNlcnZlZC5jdXJyZW50KSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZvY3VzTG9jazogY291bGQgbm90IG9idGFpbiByZWYgdG8gaW50ZXJuYWwgbm9kZScpO1xuICAgICAgfVxuICAgIH0sIFtdKTtcbiAgfVxuXG4gIHZhciBsb2NrUHJvcHMgPSBfZXh0ZW5kcygoX2V4dGVuZHMyID0ge30sIF9leHRlbmRzMltjb25zdGFudHMuRk9DVVNfRElTQUJMRURdID0gZGlzYWJsZWQgJiYgJ2Rpc2FibGVkJywgX2V4dGVuZHMyW2NvbnN0YW50cy5GT0NVU19HUk9VUF0gPSBncm91cCwgX2V4dGVuZHMyKSwgY29udGFpbmVyUHJvcHMpO1xuXG4gIHZhciBoYXNMZWFkaW5nR3VhcmRzID0gbm9Gb2N1c0d1YXJkcyAhPT0gdHJ1ZTtcbiAgdmFyIGhhc1RhaWxpbmdHdWFyZHMgPSBoYXNMZWFkaW5nR3VhcmRzICYmIG5vRm9jdXNHdWFyZHMgIT09ICd0YWlsJztcbiAgdmFyIG1lcmdlZFJlZiA9IHVzZU1lcmdlUmVmcyhbcGFyZW50UmVmLCBzZXRPYnNlcnZlTm9kZV0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIGhhc0xlYWRpbmdHdWFyZHMgJiYgWy8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBrZXk6IFwiZ3VhcmQtZmlyc3RcIixcbiAgICBcImRhdGEtZm9jdXMtZ3VhcmRcIjogdHJ1ZSxcbiAgICB0YWJJbmRleDogZGlzYWJsZWQgPyAtMSA6IDAsXG4gICAgc3R5bGU6IGhpZGRlbkd1YXJkXG4gIH0pLFxuICAvKiNfX1BVUkVfXyovXG4gIC8vIG5lYXJlc3QgZm9jdXMgZ3VhcmRcbiAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAga2V5OiBcImd1YXJkLW5lYXJlc3RcIixcbiAgICBcImRhdGEtZm9jdXMtZ3VhcmRcIjogdHJ1ZSxcbiAgICB0YWJJbmRleDogZGlzYWJsZWQgPyAtMSA6IDEsXG4gICAgc3R5bGU6IGhpZGRlbkd1YXJkXG4gIH0pIC8vIGZpcnN0IHRhYmJlZCBlbGVtZW50IGd1YXJkXG4gIF0sICFkaXNhYmxlZCAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTaWRlQ2FyLCB7XG4gICAgaWQ6IGlkLFxuICAgIHNpZGVDYXI6IG1lZGl1bVNpZGVjYXIsXG4gICAgb2JzZXJ2ZWQ6IHJlYWxPYnNlcnZlZCxcbiAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgcGVyc2lzdGVudEZvY3VzOiBwZXJzaXN0ZW50Rm9jdXMsXG4gICAgY3Jvc3NGcmFtZTogY3Jvc3NGcmFtZSxcbiAgICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcbiAgICB3aGl0ZUxpc3Q6IHdoaXRlTGlzdCxcbiAgICBzaGFyZHM6IHNoYXJkcyxcbiAgICBvbkFjdGl2YXRpb246IG9uQWN0aXZhdGlvbixcbiAgICBvbkRlYWN0aXZhdGlvbjogb25EZWFjdGl2YXRpb24sXG4gICAgcmV0dXJuRm9jdXM6IHJldHVybkZvY3VzXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb250YWluZXIsIF9leHRlbmRzKHtcbiAgICByZWY6IG1lcmdlZFJlZlxuICB9LCBsb2NrUHJvcHMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICBvbkJsdXI6IG9uQmx1cixcbiAgICBvbkZvY3VzOiBvbkZvY3VzXG4gIH0pLCBjaGlsZHJlbiksIGhhc1RhaWxpbmdHdWFyZHMgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIFwiZGF0YS1mb2N1cy1ndWFyZFwiOiB0cnVlLFxuICAgIHRhYkluZGV4OiBkaXNhYmxlZCA/IC0xIDogMCxcbiAgICBzdHlsZTogaGlkZGVuR3VhcmRcbiAgfSkpO1xufSk7XG5Gb2N1c0xvY2sucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICBjaGlsZHJlbjogbm9kZSxcbiAgZGlzYWJsZWQ6IGJvb2wsXG4gIHJldHVybkZvY3VzOiBvbmVPZlR5cGUoW2Jvb2wsIG9iamVjdF0pLFxuICBub0ZvY3VzR3VhcmRzOiBib29sLFxuICBhbGxvd1RleHRTZWxlY3Rpb246IGJvb2wsXG4gIGF1dG9Gb2N1czogYm9vbCxcbiAgcGVyc2lzdGVudEZvY3VzOiBib29sLFxuICBjcm9zc0ZyYW1lOiBib29sLFxuICBncm91cDogc3RyaW5nLFxuICBjbGFzc05hbWU6IHN0cmluZyxcbiAgd2hpdGVMaXN0OiBmdW5jLFxuICBzaGFyZHM6IGFycmF5T2YoYW55KSxcbiAgYXM6IG9uZU9mVHlwZShbc3RyaW5nLCBmdW5jLCBvYmplY3RdKSxcbiAgbG9ja1Byb3BzOiBvYmplY3QsXG4gIG9uQWN0aXZhdGlvbjogZnVuYyxcbiAgb25EZWFjdGl2YXRpb246IGZ1bmMsXG4gIHNpZGVDYXI6IGFueS5pc1JlcXVpcmVkXG59IDoge307XG5Gb2N1c0xvY2suZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogdW5kZWZpbmVkLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIHJldHVybkZvY3VzOiBmYWxzZSxcbiAgbm9Gb2N1c0d1YXJkczogZmFsc2UsXG4gIGF1dG9Gb2N1czogdHJ1ZSxcbiAgcGVyc2lzdGVudEZvY3VzOiBmYWxzZSxcbiAgY3Jvc3NGcmFtZTogdHJ1ZSxcbiAgYWxsb3dUZXh0U2VsZWN0aW9uOiB1bmRlZmluZWQsXG4gIGdyb3VwOiB1bmRlZmluZWQsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICB3aGl0ZUxpc3Q6IHVuZGVmaW5lZCxcbiAgc2hhcmRzOiB1bmRlZmluZWQsXG4gIGFzOiAnZGl2JyxcbiAgbG9ja1Byb3BzOiB7fSxcbiAgb25BY3RpdmF0aW9uOiB1bmRlZmluZWQsXG4gIG9uRGVhY3RpdmF0aW9uOiB1bmRlZmluZWRcbn07XG5leHBvcnQgZGVmYXVsdCBGb2N1c0xvY2s7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0ICogYXMgY29uc3RhbnRzIGZyb20gJ2ZvY3VzLWxvY2svY29uc3RhbnRzJztcbmltcG9ydCB7IGlubGluZVByb3AgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgbWVkaXVtRWZmZWN0IH0gZnJvbSAnLi9tZWRpdW0nO1xuZXhwb3J0IHZhciB1c2VGb2N1c0luc2lkZSA9IGZ1bmN0aW9uIHVzZUZvY3VzSW5zaWRlKG9ic2VydmVkUmVmKSB7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGVuYWJsZWQgPSB0cnVlO1xuICAgIG1lZGl1bUVmZmVjdC51c2VNZWRpdW0oZnVuY3Rpb24gKGNhcikge1xuICAgICAgdmFyIG9ic2VydmVkID0gb2JzZXJ2ZWRSZWYgJiYgb2JzZXJ2ZWRSZWYuY3VycmVudDtcblxuICAgICAgaWYgKGVuYWJsZWQgJiYgb2JzZXJ2ZWQpIHtcbiAgICAgICAgaWYgKCFjYXIuZm9jdXNJbnNpZGUob2JzZXJ2ZWQpKSB7XG4gICAgICAgICAgY2FyLm1vdmVGb2N1c0luc2lkZShvYnNlcnZlZCwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgZW5hYmxlZCA9IGZhbHNlO1xuICAgIH07XG4gIH0sIFtvYnNlcnZlZFJlZl0pO1xufTtcblxuZnVuY3Rpb24gTW92ZUZvY3VzSW5zaWRlKF9yZWYpIHtcbiAgdmFyIGlzRGlzYWJsZWQgPSBfcmVmLmRpc2FibGVkLFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW47XG4gIHZhciByZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIHVzZUZvY3VzSW5zaWRlKGlzRGlzYWJsZWQgPyB1bmRlZmluZWQgOiByZWYpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe30sIGlubGluZVByb3AoY29uc3RhbnRzLkZPQ1VTX0FVVE8sICFpc0Rpc2FibGVkKSwge1xuICAgIHJlZjogcmVmLFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXG4gIH0pLCBjaGlsZHJlbik7XG59XG5cbk1vdmVGb2N1c0luc2lkZS5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufSA6IHt9O1xuTW92ZUZvY3VzSW5zaWRlLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZFxufTtcbmV4cG9ydCBkZWZhdWx0IE1vdmVGb2N1c0luc2lkZTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHdpdGhTaWRlRWZmZWN0IGZyb20gJ3JlYWN0LWNsaWVudHNpZGUtZWZmZWN0JztcbmltcG9ydCBtb3ZlRm9jdXNJbnNpZGUsIHsgZm9jdXNJbnNpZGUsIGZvY3VzSXNIaWRkZW4sIGdldEZvY3VzYWJsZWRJbiB9IGZyb20gJ2ZvY3VzLWxvY2snO1xuaW1wb3J0IHsgZGVmZXJBY3Rpb24gfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgbWVkaXVtRm9jdXMsIG1lZGl1bUJsdXIsIG1lZGl1bUVmZmVjdCB9IGZyb20gJy4vbWVkaXVtJztcblxudmFyIGZvY3VzT25Cb2R5ID0gZnVuY3Rpb24gZm9jdXNPbkJvZHkoKSB7XG4gIHJldHVybiBkb2N1bWVudCAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBkb2N1bWVudC5ib2R5O1xufTtcblxudmFyIGlzRnJlZUZvY3VzID0gZnVuY3Rpb24gaXNGcmVlRm9jdXMoKSB7XG4gIHJldHVybiBmb2N1c09uQm9keSgpIHx8IGZvY3VzSXNIaWRkZW4oKTtcbn07XG5cbnZhciBsYXN0QWN0aXZlVHJhcCA9IG51bGw7XG52YXIgbGFzdEFjdGl2ZUZvY3VzID0gbnVsbDtcbnZhciBsYXN0UG9ydGFsZWRFbGVtZW50ID0gbnVsbDtcbnZhciBmb2N1c1dhc091dHNpZGVXaW5kb3cgPSBmYWxzZTtcblxudmFyIGRlZmF1bHRXaGl0ZWxpc3QgPSBmdW5jdGlvbiBkZWZhdWx0V2hpdGVsaXN0KCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbnZhciBmb2N1c1doaXRlbGlzdGVkID0gZnVuY3Rpb24gZm9jdXNXaGl0ZWxpc3RlZChhY3RpdmVFbGVtZW50KSB7XG4gIHJldHVybiAobGFzdEFjdGl2ZVRyYXAud2hpdGVMaXN0IHx8IGRlZmF1bHRXaGl0ZWxpc3QpKGFjdGl2ZUVsZW1lbnQpO1xufTtcblxudmFyIHJlY29yZFBvcnRhbCA9IGZ1bmN0aW9uIHJlY29yZFBvcnRhbChvYnNlcnZlck5vZGUsIHBvcnRhbGVkRWxlbWVudCkge1xuICBsYXN0UG9ydGFsZWRFbGVtZW50ID0ge1xuICAgIG9ic2VydmVyTm9kZTogb2JzZXJ2ZXJOb2RlLFxuICAgIHBvcnRhbGVkRWxlbWVudDogcG9ydGFsZWRFbGVtZW50XG4gIH07XG59O1xuXG52YXIgZm9jdXNJc1BvcnRhbGVkUGFpciA9IGZ1bmN0aW9uIGZvY3VzSXNQb3J0YWxlZFBhaXIoZWxlbWVudCkge1xuICByZXR1cm4gbGFzdFBvcnRhbGVkRWxlbWVudCAmJiBsYXN0UG9ydGFsZWRFbGVtZW50LnBvcnRhbGVkRWxlbWVudCA9PT0gZWxlbWVudDtcbn07XG5cbmZ1bmN0aW9uIGF1dG9HdWFyZChzdGFydEluZGV4LCBlbmQsIHN0ZXAsIGFsbE5vZGVzKSB7XG4gIHZhciBsYXN0R3VhcmQgPSBudWxsO1xuICB2YXIgaSA9IHN0YXJ0SW5kZXg7XG5cbiAgZG8ge1xuICAgIHZhciBpdGVtID0gYWxsTm9kZXNbaV07XG5cbiAgICBpZiAoaXRlbS5ndWFyZCkge1xuICAgICAgaWYgKGl0ZW0ubm9kZS5kYXRhc2V0LmZvY3VzQXV0b0d1YXJkKSB7XG4gICAgICAgIGxhc3RHdWFyZCA9IGl0ZW07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpdGVtLmxvY2tJdGVtKSB7XG4gICAgICBpZiAoaSAhPT0gc3RhcnRJbmRleCkge1xuICAgICAgICAvLyB3ZSB3aWxsIHRhYiB0byB0aGUgbmV4dCBlbGVtZW50XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGFzdEd1YXJkID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9IHdoaWxlICgoaSArPSBzdGVwKSAhPT0gZW5kKTtcblxuICBpZiAobGFzdEd1YXJkKSB7XG4gICAgbGFzdEd1YXJkLm5vZGUudGFiSW5kZXggPSAwO1xuICB9XG59XG5cbnZhciBleHRyYWN0UmVmID0gZnVuY3Rpb24gZXh0cmFjdFJlZihyZWYpIHtcbiAgcmV0dXJuIHJlZiAmJiAnY3VycmVudCcgaW4gcmVmID8gcmVmLmN1cnJlbnQgOiByZWY7XG59O1xuXG52YXIgZm9jdXNXYXNPdXRzaWRlID0gZnVuY3Rpb24gZm9jdXNXYXNPdXRzaWRlKGNyb3NzRnJhbWVPcHRpb24pIHtcbiAgaWYgKGNyb3NzRnJhbWVPcHRpb24pIHtcbiAgICAvLyB3aXRoIGNyb3NzIGZyYW1lIHJldHVybiB0cnVlIGZvciBhbnkgdmFsdWVcbiAgICByZXR1cm4gQm9vbGVhbihmb2N1c1dhc091dHNpZGVXaW5kb3cpO1xuICB9IC8vIGluIG90aGVyIGNhc2UgcmV0dXJuIG9ubHkgb2YgZm9jdXMgd2VudCBhIHdoaWxlIGFob1xuXG5cbiAgcmV0dXJuIGZvY3VzV2FzT3V0c2lkZVdpbmRvdyA9PT0gJ21lYW53aGlsZSc7XG59O1xuXG52YXIgYWN0aXZhdGVUcmFwID0gZnVuY3Rpb24gYWN0aXZhdGVUcmFwKCkge1xuICB2YXIgcmVzdWx0ID0gZmFsc2U7XG5cbiAgaWYgKGxhc3RBY3RpdmVUcmFwKSB7XG4gICAgdmFyIF9sYXN0QWN0aXZlVHJhcCA9IGxhc3RBY3RpdmVUcmFwLFxuICAgICAgICBvYnNlcnZlZCA9IF9sYXN0QWN0aXZlVHJhcC5vYnNlcnZlZCxcbiAgICAgICAgcGVyc2lzdGVudEZvY3VzID0gX2xhc3RBY3RpdmVUcmFwLnBlcnNpc3RlbnRGb2N1cyxcbiAgICAgICAgYXV0b0ZvY3VzID0gX2xhc3RBY3RpdmVUcmFwLmF1dG9Gb2N1cyxcbiAgICAgICAgc2hhcmRzID0gX2xhc3RBY3RpdmVUcmFwLnNoYXJkcyxcbiAgICAgICAgY3Jvc3NGcmFtZSA9IF9sYXN0QWN0aXZlVHJhcC5jcm9zc0ZyYW1lO1xuICAgIHZhciB3b3JraW5nTm9kZSA9IG9ic2VydmVkIHx8IGxhc3RQb3J0YWxlZEVsZW1lbnQgJiYgbGFzdFBvcnRhbGVkRWxlbWVudC5wb3J0YWxlZEVsZW1lbnQ7XG4gICAgdmFyIGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXG4gICAgaWYgKHdvcmtpbmdOb2RlKSB7XG4gICAgICB2YXIgd29ya2luZ0FyZWEgPSBbd29ya2luZ05vZGVdLmNvbmNhdChzaGFyZHMubWFwKGV4dHJhY3RSZWYpLmZpbHRlcihCb29sZWFuKSk7XG5cbiAgICAgIGlmICghYWN0aXZlRWxlbWVudCB8fCBmb2N1c1doaXRlbGlzdGVkKGFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgIGlmIChwZXJzaXN0ZW50Rm9jdXMgfHwgZm9jdXNXYXNPdXRzaWRlKGNyb3NzRnJhbWUpIHx8ICFpc0ZyZWVGb2N1cygpIHx8ICFsYXN0QWN0aXZlRm9jdXMgJiYgYXV0b0ZvY3VzKSB7XG4gICAgICAgICAgaWYgKHdvcmtpbmdOb2RlICYmICEoZm9jdXNJbnNpZGUod29ya2luZ0FyZWEpIHx8IGZvY3VzSXNQb3J0YWxlZFBhaXIoYWN0aXZlRWxlbWVudCwgd29ya2luZ05vZGUpKSkge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50ICYmICFsYXN0QWN0aXZlRm9jdXMgJiYgYWN0aXZlRWxlbWVudCAmJiAhYXV0b0ZvY3VzKSB7XG4gICAgICAgICAgICAgIC8vIENoZWNrIGlmIGJsdXIoKSBleGlzdHMsIHdoaWNoIGlzIG1pc3Npbmcgb24gY2VydGFpbiBlbGVtZW50cyBvbiBJRVxuICAgICAgICAgICAgICBpZiAoYWN0aXZlRWxlbWVudC5ibHVyKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXN1bHQgPSBtb3ZlRm9jdXNJbnNpZGUod29ya2luZ0FyZWEsIGxhc3RBY3RpdmVGb2N1cyk7XG4gICAgICAgICAgICAgIGxhc3RQb3J0YWxlZEVsZW1lbnQgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb2N1c1dhc091dHNpZGVXaW5kb3cgPSBmYWxzZTtcbiAgICAgICAgICBsYXN0QWN0aXZlRm9jdXMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkb2N1bWVudCkge1xuICAgICAgICB2YXIgbmV3QWN0aXZlRWxlbWVudCA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHZhciBhbGxOb2RlcyA9IGdldEZvY3VzYWJsZWRJbih3b3JraW5nQXJlYSk7XG4gICAgICAgIHZhciBmb2N1c2VkSW5kZXggPSBhbGxOb2Rlcy5tYXAoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgICB2YXIgbm9kZSA9IF9yZWYubm9kZTtcbiAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfSkuaW5kZXhPZihuZXdBY3RpdmVFbGVtZW50KTtcblxuICAgICAgICBpZiAoZm9jdXNlZEluZGV4ID4gLTEpIHtcbiAgICAgICAgICAvLyByZW1vdmUgb2xkIGZvY3VzXG4gICAgICAgICAgYWxsTm9kZXMuZmlsdGVyKGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgICAgICAgdmFyIGd1YXJkID0gX3JlZjIuZ3VhcmQsXG4gICAgICAgICAgICAgICAgbm9kZSA9IF9yZWYyLm5vZGU7XG4gICAgICAgICAgICByZXR1cm4gZ3VhcmQgJiYgbm9kZS5kYXRhc2V0LmZvY3VzQXV0b0d1YXJkO1xuICAgICAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKF9yZWYzKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IF9yZWYzLm5vZGU7XG4gICAgICAgICAgICByZXR1cm4gbm9kZS5yZW1vdmVBdHRyaWJ1dGUoJ3RhYkluZGV4Jyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYXV0b0d1YXJkKGZvY3VzZWRJbmRleCwgYWxsTm9kZXMubGVuZ3RoLCArMSwgYWxsTm9kZXMpO1xuICAgICAgICAgIGF1dG9HdWFyZChmb2N1c2VkSW5kZXgsIC0xLCAtMSwgYWxsTm9kZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnZhciBvblRyYXAgPSBmdW5jdGlvbiBvblRyYXAoZXZlbnQpIHtcbiAgaWYgKGFjdGl2YXRlVHJhcCgpICYmIGV2ZW50KSB7XG4gICAgLy8gcHJldmVudCBzY3JvbGwganVtcFxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn07XG5cbnZhciBvbkJsdXIgPSBmdW5jdGlvbiBvbkJsdXIoKSB7XG4gIHJldHVybiBkZWZlckFjdGlvbihhY3RpdmF0ZVRyYXApO1xufTtcblxudmFyIG9uRm9jdXMgPSBmdW5jdGlvbiBvbkZvY3VzKGV2ZW50KSB7XG4gIC8vIGRldGVjdCBwb3J0YWxcbiAgdmFyIHNvdXJjZSA9IGV2ZW50LnRhcmdldDtcbiAgdmFyIGN1cnJlbnROb2RlID0gZXZlbnQuY3VycmVudFRhcmdldDtcblxuICBpZiAoIWN1cnJlbnROb2RlLmNvbnRhaW5zKHNvdXJjZSkpIHtcbiAgICByZWNvcmRQb3J0YWwoY3VycmVudE5vZGUsIHNvdXJjZSk7XG4gIH1cbn07XG5cbnZhciBGb2N1c1dhdGNoZXIgPSBmdW5jdGlvbiBGb2N1c1dhdGNoZXIoKSB7XG4gIHJldHVybiBudWxsO1xufTtcblxudmFyIEZvY3VzVHJhcCA9IGZ1bmN0aW9uIEZvY3VzVHJhcChfcmVmNCkge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmNC5jaGlsZHJlbjtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBvbkJsdXI6IG9uQmx1cixcbiAgICBvbkZvY3VzOiBvbkZvY3VzXG4gIH0sIGNoaWxkcmVuKTtcbn07XG5cbkZvY3VzVHJhcC5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkXG59IDoge307XG5cbnZhciBvbldpbmRvd0JsdXIgPSBmdW5jdGlvbiBvbldpbmRvd0JsdXIoKSB7XG4gIGZvY3VzV2FzT3V0c2lkZVdpbmRvdyA9ICdqdXN0JzsgLy8gdXNpbmcgc2V0VGltZW91dCB0byBzZXQgIHRoaXMgdmFyaWFibGUgYWZ0ZXIgUmVhY3Qvc2lkZWNhciByZWFjdGlvblxuXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIGZvY3VzV2FzT3V0c2lkZVdpbmRvdyA9ICdtZWFud2hpbGUnO1xuICB9LCAwKTtcbn07XG5cbnZhciBhdHRhY2hIYW5kbGVyID0gZnVuY3Rpb24gYXR0YWNoSGFuZGxlcigpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIG9uVHJhcCwgdHJ1ZSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0Jywgb25CbHVyKTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbldpbmRvd0JsdXIpO1xufTtcblxudmFyIGRldGFjaEhhbmRsZXIgPSBmdW5jdGlvbiBkZXRhY2hIYW5kbGVyKCkge1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c2luJywgb25UcmFwLCB0cnVlKTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBvbkJsdXIpO1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIG9uV2luZG93Qmx1cik7XG59O1xuXG5mdW5jdGlvbiByZWR1Y2VQcm9wc1RvU3RhdGUocHJvcHNMaXN0KSB7XG4gIHJldHVybiBwcm9wc0xpc3QuZmlsdGVyKGZ1bmN0aW9uIChfcmVmNSkge1xuICAgIHZhciBkaXNhYmxlZCA9IF9yZWY1LmRpc2FibGVkO1xuICAgIHJldHVybiAhZGlzYWJsZWQ7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVTdGF0ZUNoYW5nZU9uQ2xpZW50KHRyYXBzKSB7XG4gIHZhciB0cmFwID0gdHJhcHMuc2xpY2UoLTEpWzBdO1xuXG4gIGlmICh0cmFwICYmICFsYXN0QWN0aXZlVHJhcCkge1xuICAgIGF0dGFjaEhhbmRsZXIoKTtcbiAgfVxuXG4gIHZhciBsYXN0VHJhcCA9IGxhc3RBY3RpdmVUcmFwO1xuICB2YXIgc2FtZVRyYXAgPSBsYXN0VHJhcCAmJiB0cmFwICYmIHRyYXAuaWQgPT09IGxhc3RUcmFwLmlkO1xuICBsYXN0QWN0aXZlVHJhcCA9IHRyYXA7XG5cbiAgaWYgKGxhc3RUcmFwICYmICFzYW1lVHJhcCkge1xuICAgIGxhc3RUcmFwLm9uRGVhY3RpdmF0aW9uKCk7IC8vIHJldHVybiBmb2N1cyBvbmx5IG9mIGxhc3QgdHJhcCB3YXMgcmVtb3ZlZFxuXG4gICAgaWYgKCF0cmFwcy5maWx0ZXIoZnVuY3Rpb24gKF9yZWY2KSB7XG4gICAgICB2YXIgaWQgPSBfcmVmNi5pZDtcbiAgICAgIHJldHVybiBpZCA9PT0gbGFzdFRyYXAuaWQ7XG4gICAgfSkubGVuZ3RoKSB7XG4gICAgICAvLyBhbGxvdyBkZWZlciBpcyBubyBvdGhlciB0cmFwIGlzIGF3YWl0aW5nIHJlc3RvcmVcbiAgICAgIGxhc3RUcmFwLnJldHVybkZvY3VzKCF0cmFwKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHJhcCkge1xuICAgIGxhc3RBY3RpdmVGb2N1cyA9IG51bGw7XG5cbiAgICBpZiAoIXNhbWVUcmFwIHx8IGxhc3RUcmFwLm9ic2VydmVkICE9PSB0cmFwLm9ic2VydmVkKSB7XG4gICAgICB0cmFwLm9uQWN0aXZhdGlvbigpO1xuICAgIH1cblxuICAgIGFjdGl2YXRlVHJhcCh0cnVlKTtcbiAgICBkZWZlckFjdGlvbihhY3RpdmF0ZVRyYXApO1xuICB9IGVsc2Uge1xuICAgIGRldGFjaEhhbmRsZXIoKTtcbiAgICBsYXN0QWN0aXZlRm9jdXMgPSBudWxsO1xuICB9XG59IC8vIGJpbmQgbWVkaXVtXG5cblxubWVkaXVtRm9jdXMuYXNzaWduU3luY01lZGl1bShvbkZvY3VzKTtcbm1lZGl1bUJsdXIuYXNzaWduTWVkaXVtKG9uQmx1cik7XG5tZWRpdW1FZmZlY3QuYXNzaWduTWVkaXVtKGZ1bmN0aW9uIChjYikge1xuICByZXR1cm4gY2Ioe1xuICAgIG1vdmVGb2N1c0luc2lkZTogbW92ZUZvY3VzSW5zaWRlLFxuICAgIGZvY3VzSW5zaWRlOiBmb2N1c0luc2lkZVxuICB9KTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFNpZGVFZmZlY3QocmVkdWNlUHJvcHNUb1N0YXRlLCBoYW5kbGVTdGF0ZUNoYW5nZU9uQ2xpZW50KShGb2N1c1dhdGNoZXIpOyIsImltcG9ydCBGb2N1c0xvY2tVSSBmcm9tICcuL0xvY2snO1xuaW1wb3J0IEF1dG9Gb2N1c0luc2lkZSBmcm9tICcuL0F1dG9Gb2N1c0luc2lkZSc7XG5pbXBvcnQgTW92ZUZvY3VzSW5zaWRlLCB7IHVzZUZvY3VzSW5zaWRlIH0gZnJvbSAnLi9Nb3ZlRm9jdXNJbnNpZGUnO1xuaW1wb3J0IEZyZWVGb2N1c0luc2lkZSBmcm9tICcuL0ZyZWVGb2N1c0luc2lkZSc7XG5pbXBvcnQgSW5Gb2N1c0d1YXJkIGZyb20gJy4vRm9jdXNHdWFyZCc7XG5leHBvcnQgeyBBdXRvRm9jdXNJbnNpZGUsIE1vdmVGb2N1c0luc2lkZSwgRnJlZUZvY3VzSW5zaWRlLCBJbkZvY3VzR3VhcmQsIEZvY3VzTG9ja1VJLCB1c2VGb2N1c0luc2lkZSB9O1xuZXhwb3J0IGRlZmF1bHQgRm9jdXNMb2NrVUk7IiwiaW1wb3J0IEZvY3VzTG9jayBmcm9tICcuL0NvbWJpbmF0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vVUknO1xuZXhwb3J0IGRlZmF1bHQgRm9jdXNMb2NrOyIsImltcG9ydCB7IGNyZWF0ZU1lZGl1bSwgY3JlYXRlU2lkZWNhck1lZGl1bSB9IGZyb20gJ3VzZS1zaWRlY2FyJztcbmV4cG9ydCB2YXIgbWVkaXVtRm9jdXMgPSBjcmVhdGVNZWRpdW0oe30sIGZ1bmN0aW9uIChfcmVmKSB7XG4gIHZhciB0YXJnZXQgPSBfcmVmLnRhcmdldCxcbiAgICAgIGN1cnJlbnRUYXJnZXQgPSBfcmVmLmN1cnJlbnRUYXJnZXQ7XG4gIHJldHVybiB7XG4gICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgY3VycmVudFRhcmdldDogY3VycmVudFRhcmdldFxuICB9O1xufSk7XG5leHBvcnQgdmFyIG1lZGl1bUJsdXIgPSBjcmVhdGVNZWRpdW0oKTtcbmV4cG9ydCB2YXIgbWVkaXVtRWZmZWN0ID0gY3JlYXRlTWVkaXVtKCk7XG5leHBvcnQgdmFyIG1lZGl1bVNpZGVjYXIgPSBjcmVhdGVTaWRlY2FyTWVkaXVtKHtcbiAgYXN5bmM6IHRydWVcbn0pOyIsImV4cG9ydCBmdW5jdGlvbiBkZWZlckFjdGlvbihhY3Rpb24pIHtcbiAgLy8gSGlkZGluZyBzZXRJbW1lZGlhdGUgZnJvbSBXZWJwYWNrIHRvIGF2b2lkIGluc2VydGluZyBwb2x5ZmlsbFxuICB2YXIgX3dpbmRvdyA9IHdpbmRvdyxcbiAgICAgIHNldEltbWVkaWF0ZSA9IF93aW5kb3cuc2V0SW1tZWRpYXRlO1xuXG4gIGlmICh0eXBlb2Ygc2V0SW1tZWRpYXRlICE9PSAndW5kZWZpbmVkJykge1xuICAgIHNldEltbWVkaWF0ZShhY3Rpb24pO1xuICB9IGVsc2Uge1xuICAgIHNldFRpbWVvdXQoYWN0aW9uLCAxKTtcbiAgfVxufVxuZXhwb3J0IHZhciBpbmxpbmVQcm9wID0gZnVuY3Rpb24gaW5saW5lUHJvcChuYW1lLCB2YWx1ZSkge1xuICB2YXIgb2JqID0ge307XG4gIG9ialtuYW1lXSA9IHZhbHVlO1xuICByZXR1cm4gb2JqO1xufTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzdHlsZVNpbmdsZXRvbiB9IGZyb20gJ3JlYWN0LXN0eWxlLXNpbmdsZXRvbic7XG5pbXBvcnQgeyBnZXRHYXBXaWR0aCB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgZnVsbFdpZHRoQ2xhc3NOYW1lLCB6ZXJvUmlnaHRDbGFzc05hbWUsIG5vU2Nyb2xsYmFyc0NsYXNzTmFtZSwgcmVtb3ZlZEJhclNpemVWYXJpYWJsZSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xudmFyIFN0eWxlID0gc3R5bGVTaW5nbGV0b24oKTtcbnZhciBnZXRTdHlsZXMgPSBmdW5jdGlvbiAoX2EsIGFsbG93UmVsYXRpdmUsIGdhcE1vZGUsIGltcG9ydGFudCkge1xuICAgIHZhciBsZWZ0ID0gX2EubGVmdCwgdG9wID0gX2EudG9wLCByaWdodCA9IF9hLnJpZ2h0LCBnYXAgPSBfYS5nYXA7XG4gICAgaWYgKGdhcE1vZGUgPT09IHZvaWQgMCkgeyBnYXBNb2RlID0gJ21hcmdpbic7IH1cbiAgICByZXR1cm4gXCJcXG4gIC5cIiArIG5vU2Nyb2xsYmFyc0NsYXNzTmFtZSArIFwiIHtcXG4gICBvdmVyZmxvdzogaGlkZGVuIFwiICsgaW1wb3J0YW50ICsgXCI7XFxuICAgcGFkZGluZy1yaWdodDogXCIgKyBnYXAgKyBcInB4IFwiICsgaW1wb3J0YW50ICsgXCI7XFxuICB9XFxuICBib2R5IHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiBcIiArIGltcG9ydGFudCArIFwiO1xcbiAgICBcIiArIFtcbiAgICAgICAgYWxsb3dSZWxhdGl2ZSAmJiBcInBvc2l0aW9uOiByZWxhdGl2ZSBcIiArIGltcG9ydGFudCArIFwiO1wiLFxuICAgICAgICBnYXBNb2RlID09PSAnbWFyZ2luJyAmJiBcIlxcbiAgICBwYWRkaW5nLWxlZnQ6IFwiICsgbGVmdCArIFwicHg7XFxuICAgIHBhZGRpbmctdG9wOiBcIiArIHRvcCArIFwicHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IFwiICsgcmlnaHQgKyBcInB4O1xcbiAgICBtYXJnaW4tbGVmdDowO1xcbiAgICBtYXJnaW4tdG9wOjA7XFxuICAgIG1hcmdpbi1yaWdodDogXCIgKyBnYXAgKyBcInB4IFwiICsgaW1wb3J0YW50ICsgXCI7XFxuICAgIFwiLFxuICAgICAgICBnYXBNb2RlID09PSAncGFkZGluZycgJiYgXCJwYWRkaW5nLXJpZ2h0OiBcIiArIGdhcCArIFwicHggXCIgKyBpbXBvcnRhbnQgKyBcIjtcIixcbiAgICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcnKSArIFwiXFxuICB9XFxuICBcXG4gIC5cIiArIHplcm9SaWdodENsYXNzTmFtZSArIFwiIHtcXG4gICAgcmlnaHQ6IFwiICsgZ2FwICsgXCJweCBcIiArIGltcG9ydGFudCArIFwiO1xcbiAgfVxcbiAgXFxuICAuXCIgKyBmdWxsV2lkdGhDbGFzc05hbWUgKyBcIiB7XFxuICAgIG1hcmdpbi1yaWdodDogXCIgKyBnYXAgKyBcInB4IFwiICsgaW1wb3J0YW50ICsgXCI7XFxuICB9XFxuICBcXG4gIC5cIiArIHplcm9SaWdodENsYXNzTmFtZSArIFwiIC5cIiArIHplcm9SaWdodENsYXNzTmFtZSArIFwiIHtcXG4gICAgcmlnaHQ6IDAgXCIgKyBpbXBvcnRhbnQgKyBcIjtcXG4gIH1cXG4gIFxcbiAgLlwiICsgZnVsbFdpZHRoQ2xhc3NOYW1lICsgXCIgLlwiICsgZnVsbFdpZHRoQ2xhc3NOYW1lICsgXCIge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAgXCIgKyBpbXBvcnRhbnQgKyBcIjtcXG4gIH1cXG4gIFxcbiAgYm9keSB7XFxuICAgIFwiICsgcmVtb3ZlZEJhclNpemVWYXJpYWJsZSArIFwiOiBcIiArIGdhcCArIFwicHg7XFxuICB9XFxuXCI7XG59O1xuZXhwb3J0IHZhciBSZW1vdmVTY3JvbGxCYXIgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgX2EgPSBSZWFjdC51c2VTdGF0ZShnZXRHYXBXaWR0aChwcm9wcy5nYXBNb2RlKSksIGdhcCA9IF9hWzBdLCBzZXRHYXAgPSBfYVsxXTtcbiAgICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRHYXAoZ2V0R2FwV2lkdGgocHJvcHMuZ2FwTW9kZSkpO1xuICAgIH0sIFtwcm9wcy5nYXBNb2RlXSk7XG4gICAgdmFyIG5vUmVsYXRpdmUgPSBwcm9wcy5ub1JlbGF0aXZlLCBub0ltcG9ydGFudCA9IHByb3BzLm5vSW1wb3J0YW50LCBfYiA9IHByb3BzLmdhcE1vZGUsIGdhcE1vZGUgPSBfYiA9PT0gdm9pZCAwID8gJ21hcmdpbicgOiBfYjtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZSwgeyBzdHlsZXM6IGdldFN0eWxlcyhnYXAsICFub1JlbGF0aXZlLCBnYXBNb2RlLCAhbm9JbXBvcnRhbnQgPyBcIiFpbXBvcnRhbnRcIiA6ICcnKSB9KTtcbn07XG4iLCJleHBvcnQgdmFyIHplcm9SaWdodENsYXNzTmFtZSA9ICdyaWdodC1zY3JvbGwtYmFyLXBvc2l0aW9uJztcbmV4cG9ydCB2YXIgZnVsbFdpZHRoQ2xhc3NOYW1lID0gJ3dpZHRoLWJlZm9yZS1zY3JvbGwtYmFyJztcbmV4cG9ydCB2YXIgbm9TY3JvbGxiYXJzQ2xhc3NOYW1lID0gJ3dpdGgtc2Nyb2xsLWJhcnMtaGlkZGVuJztcbmV4cG9ydCB2YXIgcmVtb3ZlZEJhclNpemVWYXJpYWJsZSA9ICctLXJlbW92ZWQtYm9keS1zY3JvbGwtYmFyLXNpemUnO1xuIiwiaW1wb3J0IHsgUmVtb3ZlU2Nyb2xsQmFyIH0gZnJvbSAnLi9jb21wb25lbnQnO1xuaW1wb3J0IHsgZ2V0R2FwV2lkdGggfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IHplcm9SaWdodENsYXNzTmFtZSwgZnVsbFdpZHRoQ2xhc3NOYW1lLCBub1Njcm9sbGJhcnNDbGFzc05hbWUsIHJlbW92ZWRCYXJTaXplVmFyaWFibGUgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5leHBvcnQgeyBSZW1vdmVTY3JvbGxCYXIsIHplcm9SaWdodENsYXNzTmFtZSwgZnVsbFdpZHRoQ2xhc3NOYW1lLCBub1Njcm9sbGJhcnNDbGFzc05hbWUsIHJlbW92ZWRCYXJTaXplVmFyaWFibGUsIGdldEdhcFdpZHRoIH07XG4iLCJleHBvcnQgdmFyIHplcm9HYXAgPSB7XG4gICAgbGVmdDogMCxcbiAgICB0b3A6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgZ2FwOiAwLFxufTtcbnZhciBwYXJzZSA9IGZ1bmN0aW9uICh4KSB7IHJldHVybiBwYXJzZUludCh4IHx8ICcnLCAxMCkgfHwgMDsgfTtcbnZhciBnZXRPZmZzZXQgPSBmdW5jdGlvbiAoZ2FwTW9kZSkge1xuICAgIHZhciBjcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpO1xuICAgIHZhciBsZWZ0ID0gY3NbZ2FwTW9kZSA9PT0gJ3BhZGRpbmcnID8gJ3BhZGRpbmdMZWZ0JyA6ICdtYXJnaW5MZWZ0J107XG4gICAgdmFyIHRvcCA9IGNzW2dhcE1vZGUgPT09ICdwYWRkaW5nJyA/ICdwYWRkaW5nVG9wJyA6ICdtYXJnaW5Ub3AnXTtcbiAgICB2YXIgcmlnaHQgPSBjc1tnYXBNb2RlID09PSAncGFkZGluZycgPyAncGFkZGluZ1JpZ2h0JyA6ICdtYXJnaW5SaWdodCddO1xuICAgIHJldHVybiBbXG4gICAgICAgIHBhcnNlKGxlZnQpLFxuICAgICAgICBwYXJzZSh0b3ApLFxuICAgICAgICBwYXJzZShyaWdodCksXG4gICAgXTtcbn07XG5leHBvcnQgdmFyIGdldEdhcFdpZHRoID0gZnVuY3Rpb24gKGdhcE1vZGUpIHtcbiAgICBpZiAoZ2FwTW9kZSA9PT0gdm9pZCAwKSB7IGdhcE1vZGUgPSAnbWFyZ2luJzsgfVxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gemVyb0dhcDtcbiAgICB9XG4gICAgdmFyIG9mZnNldHMgPSBnZXRPZmZzZXQoZ2FwTW9kZSk7XG4gICAgdmFyIGRvY3VtZW50V2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgdmFyIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGVmdDogb2Zmc2V0c1swXSxcbiAgICAgICAgdG9wOiBvZmZzZXRzWzFdLFxuICAgICAgICByaWdodDogb2Zmc2V0c1syXSxcbiAgICAgICAgZ2FwOiBNYXRoLm1heCgwLCB3aW5kb3dXaWR0aCAtIGRvY3VtZW50V2lkdGggKyBvZmZzZXRzWzJdIC0gb2Zmc2V0c1swXSksXG4gICAgfTtcbn07XG4iLCJpbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVtb3ZlU2Nyb2xsIH0gZnJvbSAnLi9VSSc7XG5pbXBvcnQgU2lkZUNhciBmcm9tICcuL3NpZGVjYXInO1xudmFyIFJlYWN0UmVtb3ZlU2Nyb2xsID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikgeyByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVtb3ZlU2Nyb2xsLCB0c2xpYl8xLl9fYXNzaWduKHt9LCBwcm9wcywgeyByZWY6IHJlZiwgc2lkZUNhcjogU2lkZUNhciB9KSkpOyB9KTtcblJlYWN0UmVtb3ZlU2Nyb2xsLmNsYXNzTmFtZXMgPSBSZW1vdmVTY3JvbGwuY2xhc3NOYW1lcztcbmV4cG9ydCBkZWZhdWx0IFJlYWN0UmVtb3ZlU2Nyb2xsO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVtb3ZlU2Nyb2xsQmFyIH0gZnJvbSAncmVhY3QtcmVtb3ZlLXNjcm9sbC1iYXInO1xuaW1wb3J0IHsgc3R5bGVTaW5nbGV0b24gfSBmcm9tICdyZWFjdC1zdHlsZS1zaW5nbGV0b24nO1xuaW1wb3J0IHsgaGFuZGxlU2Nyb2xsLCBsb2NhdGlvbkNvdWxkQmVTY3JvbGxlZCB9IGZyb20gJy4vaGFuZGxlU2Nyb2xsJztcbmltcG9ydCB7IG5vblBhc3NpdmUgfSBmcm9tICcuL2FnZ3Jlc2l2ZUNhcHR1cmUnO1xuZXhwb3J0IHZhciBnZXRUb3VjaFhZID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgcmV0dXJuICdjaGFuZ2VkVG91Y2hlcycgaW4gZXZlbnRcbiAgICAgICAgPyBbZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCwgZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WV1cbiAgICAgICAgOiBbMCwgMF07XG59O1xuZXhwb3J0IHZhciBnZXREZWx0YVhZID0gZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBbZXZlbnQuZGVsdGFYLCBldmVudC5kZWx0YVldOyB9O1xudmFyIGV4dHJhY3RSZWYgPSBmdW5jdGlvbiAocmVmKSB7XG4gICAgcmV0dXJuIHJlZiAmJiAnY3VycmVudCcgaW4gcmVmID8gcmVmLmN1cnJlbnQgOiByZWY7XG59O1xudmFyIGRlbHRhQ29tcGFyZSA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgcmV0dXJuIHhbMF0gPT09IHlbMF0gJiYgeFsxXSA9PT0geVsxXTtcbn07XG52YXIgZ2VuZXJhdGVTdHlsZSA9IGZ1bmN0aW9uIChpZCkgeyByZXR1cm4gXCJcXG4gIC5ibG9jay1pbnRlcmFjdGl2aXR5LVwiICsgaWQgKyBcIiB7cG9pbnRlci1ldmVudHM6IG5vbmU7fVxcbiAgLmFsbG93LWludGVyYWN0aXZpdHktXCIgKyBpZCArIFwiIHtwb2ludGVyLWV2ZW50czogYWxsO31cXG5cIjsgfTtcbnZhciBpZENvdW50ZXIgPSAwO1xudmFyIGxvY2tTdGFjayA9IFtdO1xuZXhwb3J0IGZ1bmN0aW9uIFJlbW92ZVNjcm9sbFNpZGVDYXIocHJvcHMpIHtcbiAgICB2YXIgc2hvdWxkUHJldmVudFF1ZXVlID0gUmVhY3QudXNlUmVmKFtdKTtcbiAgICB2YXIgdG91Y2hTdGFydFJlZiA9IFJlYWN0LnVzZVJlZihbMCwgMF0pO1xuICAgIHZhciBhY3RpdmVBeGlzID0gUmVhY3QudXNlUmVmKCk7XG4gICAgdmFyIGlkID0gUmVhY3QudXNlU3RhdGUoaWRDb3VudGVyKyspWzBdO1xuICAgIHZhciBTdHlsZSA9IFJlYWN0LnVzZVN0YXRlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN0eWxlU2luZ2xldG9uKCk7IH0pWzBdO1xuICAgIHZhciBsYXN0UHJvcHMgPSBSZWFjdC51c2VSZWYocHJvcHMpO1xuICAgIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxhc3RQcm9wcy5jdXJyZW50ID0gcHJvcHM7XG4gICAgfSwgW3Byb3BzXSk7XG4gICAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHByb3BzLmluZXJ0KSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJibG9jay1pbnRlcmFjdGl2aXR5LVwiICsgaWQpO1xuICAgICAgICAgICAgdmFyIGFsbG93XzEgPSBbXG4gICAgICAgICAgICAgICAgcHJvcHMubG9ja1JlZi5jdXJyZW50XG4gICAgICAgICAgICBdLmNvbmNhdCgocHJvcHMuc2hhcmRzIHx8IFtdKS5tYXAoZXh0cmFjdFJlZikpLmZpbHRlcihCb29sZWFuKTtcbiAgICAgICAgICAgIGFsbG93XzEuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIGVsLmNsYXNzTGlzdC5hZGQoXCJhbGxvdy1pbnRlcmFjdGl2aXR5LVwiICsgaWQpOyB9KTtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiYmxvY2staW50ZXJhY3Rpdml0eS1cIiArIGlkKTtcbiAgICAgICAgICAgICAgICBhbGxvd18xLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWxsb3ctaW50ZXJhY3Rpdml0eS1cIiArIGlkKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH0sIFtwcm9wcy5pbmVydCwgcHJvcHMubG9ja1JlZi5jdXJyZW50LCBwcm9wcy5zaGFyZHNdKTtcbiAgICB2YXIgc2hvdWxkQ2FuY2VsRXZlbnQgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoZXZlbnQsIHBhcmVudCkge1xuICAgICAgICBpZiAoJ3RvdWNoZXMnIGluIGV2ZW50ICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICByZXR1cm4gIWxhc3RQcm9wcy5jdXJyZW50LmFsbG93UGluY2hab29tO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0b3VjaCA9IGdldFRvdWNoWFkoZXZlbnQpO1xuICAgICAgICB2YXIgdG91Y2hTdGFydCA9IHRvdWNoU3RhcnRSZWYuY3VycmVudDtcbiAgICAgICAgdmFyIGRlbHRhWCA9ICdkZWx0YVgnIGluIGV2ZW50ID8gZXZlbnQuZGVsdGFYIDogdG91Y2hTdGFydFswXSAtIHRvdWNoWzBdO1xuICAgICAgICB2YXIgZGVsdGFZID0gJ2RlbHRhWScgaW4gZXZlbnQgPyBldmVudC5kZWx0YVkgOiB0b3VjaFN0YXJ0WzFdIC0gdG91Y2hbMV07XG4gICAgICAgIHZhciBjdXJyZW50QXhpcztcbiAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgdmFyIG1vdmVEaXJlY3Rpb24gPSBNYXRoLmFicyhkZWx0YVgpID4gTWF0aC5hYnMoZGVsdGFZKSA/ICdoJyA6ICd2JztcbiAgICAgICAgdmFyIGNhbkJlU2Nyb2xsZWRJbk1haW5EaXJlY3Rpb24gPSBsb2NhdGlvbkNvdWxkQmVTY3JvbGxlZChtb3ZlRGlyZWN0aW9uLCB0YXJnZXQpO1xuICAgICAgICBpZiAoIWNhbkJlU2Nyb2xsZWRJbk1haW5EaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5CZVNjcm9sbGVkSW5NYWluRGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjdXJyZW50QXhpcyA9IG1vdmVEaXJlY3Rpb247XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjdXJyZW50QXhpcyA9IG1vdmVEaXJlY3Rpb24gPT09ICd2JyA/ICdoJyA6ICd2JztcbiAgICAgICAgICAgIGNhbkJlU2Nyb2xsZWRJbk1haW5EaXJlY3Rpb24gPSBsb2NhdGlvbkNvdWxkQmVTY3JvbGxlZChtb3ZlRGlyZWN0aW9uLCB0YXJnZXQpO1xuICAgICAgICAgICAgLy8gb3RoZXIgYXhpcyBtaWdodCBiZSBub3Qgc2Nyb2xsYWJsZVxuICAgICAgICB9XG4gICAgICAgIGlmICghY2FuQmVTY3JvbGxlZEluTWFpbkRpcmVjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYWN0aXZlQXhpcy5jdXJyZW50ICYmXG4gICAgICAgICAgICAnY2hhbmdlZFRvdWNoZXMnIGluIGV2ZW50ICYmXG4gICAgICAgICAgICAoZGVsdGFYIHx8IGRlbHRhWSkpIHtcbiAgICAgICAgICAgIGFjdGl2ZUF4aXMuY3VycmVudCA9IGN1cnJlbnRBeGlzO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY3VycmVudEF4aXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjYW5jZWxpbmdBeGlzID0gYWN0aXZlQXhpcy5jdXJyZW50IHx8IGN1cnJlbnRBeGlzO1xuICAgICAgICByZXR1cm4gaGFuZGxlU2Nyb2xsKGNhbmNlbGluZ0F4aXMsIHBhcmVudCwgZXZlbnQsIGNhbmNlbGluZ0F4aXMgPT09ICdoJyA/IGRlbHRhWCA6IGRlbHRhWSwgdHJ1ZSk7XG4gICAgfSwgW10pO1xuICAgIHZhciBzaG91bGRQcmV2ZW50ID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKF9ldmVudCkge1xuICAgICAgICB2YXIgZXZlbnQgPSBfZXZlbnQ7XG4gICAgICAgIGlmICghbG9ja1N0YWNrLmxlbmd0aCB8fCBsb2NrU3RhY2tbbG9ja1N0YWNrLmxlbmd0aCAtIDFdICE9PSBTdHlsZSkge1xuICAgICAgICAgICAgLy8gbm90IHRoZSBsYXN0IGFjdGl2ZVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkZWx0YSA9ICdkZWx0YVknIGluIGV2ZW50ID8gZ2V0RGVsdGFYWShldmVudCkgOiBnZXRUb3VjaFhZKGV2ZW50KTtcbiAgICAgICAgdmFyIHNvdXJjZUV2ZW50ID0gc2hvdWxkUHJldmVudFF1ZXVlLmN1cnJlbnQuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZS5uYW1lID09PSBldmVudC50eXBlICYmXG4gICAgICAgICAgICAgICAgZS50YXJnZXQgPT09IGV2ZW50LnRhcmdldCAmJlxuICAgICAgICAgICAgICAgIGRlbHRhQ29tcGFyZShlLmRlbHRhLCBkZWx0YSk7XG4gICAgICAgIH0pWzBdO1xuICAgICAgICAvLyBzZWxmIGV2ZW50LCBhbmQgc2hvdWxkIGJlIGNhbmNlbGVkXG4gICAgICAgIGlmIChzb3VyY2VFdmVudCAmJiBzb3VyY2VFdmVudC5zaG91bGQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gb3V0c2lkZSBvciBzaGFyZCBldmVudFxuICAgICAgICBpZiAoIXNvdXJjZUV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgc2hhcmROb2RlcyA9IChsYXN0UHJvcHMuY3VycmVudC5zaGFyZHMgfHwgW10pXG4gICAgICAgICAgICAgICAgLm1hcChleHRyYWN0UmVmKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChub2RlKSB7IHJldHVybiBub2RlLmNvbnRhaW5zKGV2ZW50LnRhcmdldCk7IH0pO1xuICAgICAgICAgICAgdmFyIHNob3VsZFN0b3AgPSBzaGFyZE5vZGVzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICA/IHNob3VsZENhbmNlbEV2ZW50KGV2ZW50LCBzaGFyZE5vZGVzWzBdKVxuICAgICAgICAgICAgICAgIDogIWxhc3RQcm9wcy5jdXJyZW50Lm5vSXNvbGF0aW9uO1xuICAgICAgICAgICAgaWYgKHNob3VsZFN0b3ApIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIHZhciBzaG91bGRDYW5jZWwgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAobmFtZSwgZGVsdGEsIHRhcmdldCwgc2hvdWxkKSB7XG4gICAgICAgIHZhciBldmVudCA9IHsgbmFtZTogbmFtZSwgZGVsdGE6IGRlbHRhLCB0YXJnZXQ6IHRhcmdldCwgc2hvdWxkOiBzaG91bGQgfTtcbiAgICAgICAgc2hvdWxkUHJldmVudFF1ZXVlLmN1cnJlbnQucHVzaChldmVudCk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2hvdWxkUHJldmVudFF1ZXVlLmN1cnJlbnQgPSBzaG91bGRQcmV2ZW50UXVldWUuY3VycmVudC5maWx0ZXIoZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGUgIT09IGV2ZW50OyB9KTtcbiAgICAgICAgfSwgMSk7XG4gICAgfSwgW10pO1xuICAgIHZhciBzY3JvbGxUb3VjaFN0YXJ0ID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHRvdWNoU3RhcnRSZWYuY3VycmVudCA9IGdldFRvdWNoWFkoZXZlbnQpO1xuICAgICAgICBhY3RpdmVBeGlzLmN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gICAgfSwgW10pO1xuICAgIHZhciBzY3JvbGxXaGVlbCA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBzaG91bGRDYW5jZWwoZXZlbnQudHlwZSwgZ2V0RGVsdGFYWShldmVudCksIGV2ZW50LnRhcmdldCwgc2hvdWxkQ2FuY2VsRXZlbnQoZXZlbnQsIHByb3BzLmxvY2tSZWYuY3VycmVudCkpO1xuICAgIH0sIFtdKTtcbiAgICB2YXIgc2Nyb2xsVG91Y2hNb3ZlID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHNob3VsZENhbmNlbChldmVudC50eXBlLCBnZXRUb3VjaFhZKGV2ZW50KSwgZXZlbnQudGFyZ2V0LCBzaG91bGRDYW5jZWxFdmVudChldmVudCwgcHJvcHMubG9ja1JlZi5jdXJyZW50KSk7XG4gICAgfSwgW10pO1xuICAgIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxvY2tTdGFjay5wdXNoKFN0eWxlKTtcbiAgICAgICAgcHJvcHMuc2V0Q2FsbGJhY2tzKHtcbiAgICAgICAgICAgIG9uU2Nyb2xsQ2FwdHVyZTogc2Nyb2xsV2hlZWwsXG4gICAgICAgICAgICBvbldoZWVsQ2FwdHVyZTogc2Nyb2xsV2hlZWwsXG4gICAgICAgICAgICBvblRvdWNoTW92ZUNhcHR1cmU6IHNjcm9sbFRvdWNoTW92ZVxuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBzaG91bGRQcmV2ZW50LCBub25QYXNzaXZlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgc2hvdWxkUHJldmVudCwgbm9uUGFzc2l2ZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBzY3JvbGxUb3VjaFN0YXJ0LCBub25QYXNzaXZlKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxvY2tTdGFjayA9IGxvY2tTdGFjay5maWx0ZXIoZnVuY3Rpb24gKGluc3QpIHsgcmV0dXJuIGluc3QgIT09IFN0eWxlOyB9KTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgc2hvdWxkUHJldmVudCwgbm9uUGFzc2l2ZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBzaG91bGRQcmV2ZW50LCBub25QYXNzaXZlKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBzY3JvbGxUb3VjaFN0YXJ0LCBub25QYXNzaXZlKTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG4gICAgdmFyIHJlbW92ZVNjcm9sbEJhciA9IHByb3BzLnJlbW92ZVNjcm9sbEJhciwgaW5lcnQgPSBwcm9wcy5pbmVydDtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIGluZXJ0ID8gUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZSwgeyBzdHlsZXM6IGdlbmVyYXRlU3R5bGUoaWQpIH0pIDogbnVsbCxcbiAgICAgICAgcmVtb3ZlU2Nyb2xsQmFyID8gUmVhY3QuY3JlYXRlRWxlbWVudChSZW1vdmVTY3JvbGxCYXIsIHsgZ2FwTW9kZTogXCJtYXJnaW5cIiB9KSA6IG51bGwpKTtcbn1cbiIsImltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBmdWxsV2lkdGhDbGFzc05hbWUsIHplcm9SaWdodENsYXNzTmFtZSB9IGZyb20gJ3JlYWN0LXJlbW92ZS1zY3JvbGwtYmFyL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBlZmZlY3RDYXIgfSBmcm9tICcuL21lZGl1bSc7XG5pbXBvcnQgeyB1c2VNZXJnZVJlZnMgfSBmcm9tICd1c2UtY2FsbGJhY2stcmVmJztcbnZhciBub3RoaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybjtcbn07XG4vKipcbiAqIFJlbW92ZXMgc2Nyb2xsYmFyIGZyb20gdGhlIHBhZ2UgYW5kIGNvbnRhaW4gdGhlIHNjcm9sbCB3aXRoaW4gdGhlIExvY2tcbiAqL1xudmFyIFJlbW92ZVNjcm9sbCA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCBwYXJlbnRSZWYpIHtcbiAgICB2YXIgcmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICAgIHZhciBfYSA9IFJlYWN0LnVzZVN0YXRlKHtcbiAgICAgICAgb25TY3JvbGxDYXB0dXJlOiBub3RoaW5nLFxuICAgICAgICBvbldoZWVsQ2FwdHVyZTogbm90aGluZyxcbiAgICAgICAgb25Ub3VjaE1vdmVDYXB0dXJlOiBub3RoaW5nXG4gICAgfSksIGNhbGxiYWNrcyA9IF9hWzBdLCBzZXRDYWxsYmFja3MgPSBfYVsxXTtcbiAgICB2YXIgZm9yd2FyZFByb3BzID0gcHJvcHMuZm9yd2FyZFByb3BzLCBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLCBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsIHJlbW92ZVNjcm9sbEJhciA9IHByb3BzLnJlbW92ZVNjcm9sbEJhciwgZW5hYmxlZCA9IHByb3BzLmVuYWJsZWQsIHNoYXJkcyA9IHByb3BzLnNoYXJkcywgc2lkZUNhciA9IHByb3BzLnNpZGVDYXIsIG5vSXNvbGF0aW9uID0gcHJvcHMubm9Jc29sYXRpb24sIGluZXJ0ID0gcHJvcHMuaW5lcnQsIGFsbG93UGluY2hab29tID0gcHJvcHMuYWxsb3dQaW5jaFpvb20sIF9iID0gcHJvcHMuYXMsIENvbnRhaW5lciA9IF9iID09PSB2b2lkIDAgPyAnZGl2JyA6IF9iLCByZXN0ID0gdHNsaWJfMS5fX3Jlc3QocHJvcHMsIFtcImZvcndhcmRQcm9wc1wiLCBcImNoaWxkcmVuXCIsIFwiY2xhc3NOYW1lXCIsIFwicmVtb3ZlU2Nyb2xsQmFyXCIsIFwiZW5hYmxlZFwiLCBcInNoYXJkc1wiLCBcInNpZGVDYXJcIiwgXCJub0lzb2xhdGlvblwiLCBcImluZXJ0XCIsIFwiYWxsb3dQaW5jaFpvb21cIiwgXCJhc1wiXSk7XG4gICAgdmFyIFNpZGVDYXIgPSBzaWRlQ2FyO1xuICAgIHZhciBjb250YWluZXJSZWYgPSB1c2VNZXJnZVJlZnMoW1xuICAgICAgICByZWYsXG4gICAgICAgIHBhcmVudFJlZlxuICAgIF0pO1xuICAgIHZhciBjb250YWluZXJQcm9wcyA9IHRzbGliXzEuX19hc3NpZ24oe30sIHJlc3QsIGNhbGxiYWNrcyk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICBlbmFibGVkICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFNpZGVDYXIsIHsgc2lkZUNhcjogZWZmZWN0Q2FyLCByZW1vdmVTY3JvbGxCYXI6IHJlbW92ZVNjcm9sbEJhciwgc2hhcmRzOiBzaGFyZHMsIG5vSXNvbGF0aW9uOiBub0lzb2xhdGlvbiwgaW5lcnQ6IGluZXJ0LCBzZXRDYWxsYmFja3M6IHNldENhbGxiYWNrcywgYWxsb3dQaW5jaFpvb206ICEhYWxsb3dQaW5jaFpvb20sIGxvY2tSZWY6IHJlZiB9KSksXG4gICAgICAgIGZvcndhcmRQcm9wcyA/IChSZWFjdC5jbG9uZUVsZW1lbnQoUmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbiksIHRzbGliXzEuX19hc3NpZ24oe30sIGNvbnRhaW5lclByb3BzLCB7IHJlZjogY29udGFpbmVyUmVmIH0pKSkgOiAoUmVhY3QuY3JlYXRlRWxlbWVudChDb250YWluZXIsIHRzbGliXzEuX19hc3NpZ24oe30sIGNvbnRhaW5lclByb3BzLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lLCByZWY6IGNvbnRhaW5lclJlZiB9KSwgY2hpbGRyZW4pKSkpO1xufSk7XG5SZW1vdmVTY3JvbGwuZGVmYXVsdFByb3BzID0ge1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgcmVtb3ZlU2Nyb2xsQmFyOiB0cnVlLFxuICAgIGluZXJ0OiBmYWxzZVxufTtcblJlbW92ZVNjcm9sbC5jbGFzc05hbWVzID0ge1xuICAgIGZ1bGxXaWR0aDogZnVsbFdpZHRoQ2xhc3NOYW1lLFxuICAgIHplcm9SaWdodDogemVyb1JpZ2h0Q2xhc3NOYW1lXG59O1xuZXhwb3J0IHsgUmVtb3ZlU2Nyb2xsIH07XG4iLCJ2YXIgcGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlO1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcGFzc2l2ZVN1cHBvcnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHBhc3NpdmVTdXBwb3J0ZWQgPSBmYWxzZTtcbiAgICB9XG59XG5leHBvcnQgdmFyIG5vblBhc3NpdmUgPSBwYXNzaXZlU3VwcG9ydGVkID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2U7XG4iLCJ2YXIgZWxlbWVudENvdWxkQmVWU2Nyb2xsZWQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgIHZhciBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICByZXR1cm4gKHN0eWxlcy5vdmVyZmxvd1kgIT09ICdoaWRkZW4nICYmIC8vIG5vdC1ub3Qtc2Nyb2xsYWJsZVxuICAgICAgICAhKHN0eWxlcy5vdmVyZmxvd1kgPT09IHN0eWxlcy5vdmVyZmxvd1ggJiYgc3R5bGVzLm92ZXJmbG93WSA9PT0gJ3Zpc2libGUnKSAvLyBzY3JvbGxhYmxlXG4gICAgKTtcbn07XG52YXIgZWxlbWVudENvdWxkQmVIU2Nyb2xsZWQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgIHZhciBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICAvLyB3ZSBhbGxvdyBob3Jpem9udGFsIHNjcm9sbCBvbiByYW5nZSBlbGVtZW50c1xuICAgIGlmIChub2RlLnR5cGUgPT09IFwicmFuZ2VcIikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIChzdHlsZXMub3ZlcmZsb3dYICE9PSAnaGlkZGVuJyAmJiAvLyBub3Qtbm90LXNjcm9sbGFibGVcbiAgICAgICAgIShzdHlsZXMub3ZlcmZsb3dZID09PSBzdHlsZXMub3ZlcmZsb3dYICYmIHN0eWxlcy5vdmVyZmxvd1ggPT09ICd2aXNpYmxlJykgLy8gc2Nyb2xsYWJsZVxuICAgICk7XG59O1xuZXhwb3J0IHZhciBsb2NhdGlvbkNvdWxkQmVTY3JvbGxlZCA9IGZ1bmN0aW9uIChheGlzLCBub2RlKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBub2RlO1xuICAgIGRvIHtcbiAgICAgICAgLy8gU2tpcCBvdmVyIHNoYWRvdyByb290XG4gICAgICAgIGlmICh0eXBlb2YgU2hhZG93Um9vdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBjdXJyZW50IGluc3RhbmNlb2YgU2hhZG93Um9vdCkge1xuICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQuaG9zdDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaXNTY3JvbGxhYmxlID0gZWxlbWVudENvdWxkQmVTY3JvbGxlZChheGlzLCBjdXJyZW50KTtcbiAgICAgICAgaWYgKGlzU2Nyb2xsYWJsZSkge1xuICAgICAgICAgICAgdmFyIF9hID0gZ2V0U2Nyb2xsVmFyaWFibGVzKGF4aXMsIGN1cnJlbnQpLCBzID0gX2FbMV0sIGQgPSBfYVsyXTtcbiAgICAgICAgICAgIGlmIChzID4gZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudE5vZGU7XG4gICAgfSB3aGlsZSAoY3VycmVudCAmJiBjdXJyZW50ICE9PSBkb2N1bWVudC5ib2R5KTtcbiAgICByZXR1cm4gZmFsc2U7XG59O1xudmFyIGdldFZTY3JvbGxWYXJpYWJsZXMgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgc2Nyb2xsVG9wID0gX2Euc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQgPSBfYS5zY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCA9IF9hLmNsaWVudEhlaWdodDtcbiAgICByZXR1cm4gW3Njcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHRdO1xufTtcbnZhciBnZXRIU2Nyb2xsVmFyaWFibGVzID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIHNjcm9sbExlZnQgPSBfYS5zY3JvbGxMZWZ0LCBzY3JvbGxXaWR0aCA9IF9hLnNjcm9sbFdpZHRoLCBjbGllbnRXaWR0aCA9IF9hLmNsaWVudFdpZHRoO1xuICAgIHJldHVybiBbc2Nyb2xsTGVmdCwgc2Nyb2xsV2lkdGgsIGNsaWVudFdpZHRoXTtcbn07XG52YXIgZWxlbWVudENvdWxkQmVTY3JvbGxlZCA9IGZ1bmN0aW9uIChheGlzLCBub2RlKSB7XG4gICAgcmV0dXJuIGF4aXMgPT09ICd2JyA/IGVsZW1lbnRDb3VsZEJlVlNjcm9sbGVkKG5vZGUpIDogZWxlbWVudENvdWxkQmVIU2Nyb2xsZWQobm9kZSk7XG59O1xudmFyIGdldFNjcm9sbFZhcmlhYmxlcyA9IGZ1bmN0aW9uIChheGlzLCBub2RlKSB7XG4gICAgcmV0dXJuIGF4aXMgPT09ICd2JyA/IGdldFZTY3JvbGxWYXJpYWJsZXMobm9kZSkgOiBnZXRIU2Nyb2xsVmFyaWFibGVzKG5vZGUpO1xufTtcbmV4cG9ydCB2YXIgaGFuZGxlU2Nyb2xsID0gZnVuY3Rpb24gKGF4aXMsIGVuZFRhcmdldCwgZXZlbnQsIHNvdXJjZURlbHRhLCBub092ZXJzY3JvbGwpIHtcbiAgICB2YXIgZGVsdGEgPSBzb3VyY2VEZWx0YTtcbiAgICAvLyBmaW5kIHNjcm9sbGFibGUgdGFyZ2V0XG4gICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICB2YXIgdGFyZ2V0SW5Mb2NrID0gZW5kVGFyZ2V0LmNvbnRhaW5zKHRhcmdldCk7XG4gICAgdmFyIHNob3VsZENhbmNlbFNjcm9sbCA9IGZhbHNlO1xuICAgIHZhciBpc0RlbHRhUG9zaXRpdmUgPSBkZWx0YSA+IDA7XG4gICAgdmFyIGF2YWlsYWJsZVNjcm9sbCA9IDA7XG4gICAgdmFyIGF2YWlsYWJsZVNjcm9sbFRvcCA9IDA7XG4gICAgZG8ge1xuICAgICAgICB2YXIgX2EgPSBnZXRTY3JvbGxWYXJpYWJsZXMoYXhpcywgdGFyZ2V0KSwgcG9zaXRpb24gPSBfYVswXSwgc2Nyb2xsXzEgPSBfYVsxXSwgY2FwYWNpdHkgPSBfYVsyXTtcbiAgICAgICAgdmFyIGVsZW1lbnRTY3JvbGwgPSBzY3JvbGxfMSAtIGNhcGFjaXR5IC0gcG9zaXRpb247XG4gICAgICAgIGlmIChwb3NpdGlvbiB8fCBlbGVtZW50U2Nyb2xsKSB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudENvdWxkQmVTY3JvbGxlZChheGlzLCB0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgYXZhaWxhYmxlU2Nyb2xsICs9IGVsZW1lbnRTY3JvbGw7XG4gICAgICAgICAgICAgICAgYXZhaWxhYmxlU2Nyb2xsVG9wICs9IHBvc2l0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xuICAgIH0gd2hpbGUgKFxuICAgIC8vIHBvcnRhbGVkIGNvbnRlbnRcbiAgICAoIXRhcmdldEluTG9jayAmJiB0YXJnZXQgIT09IGRvY3VtZW50LmJvZHkpIHx8XG4gICAgICAgIC8vIHNlbGYgY29udGVudFxuICAgICAgICAodGFyZ2V0SW5Mb2NrICYmIChlbmRUYXJnZXQuY29udGFpbnModGFyZ2V0KSB8fCBlbmRUYXJnZXQgPT09IHRhcmdldCkpKTtcbiAgICBpZiAoaXNEZWx0YVBvc2l0aXZlICYmXG4gICAgICAgICgobm9PdmVyc2Nyb2xsICYmIGF2YWlsYWJsZVNjcm9sbCA9PT0gMCkgfHxcbiAgICAgICAgICAgICghbm9PdmVyc2Nyb2xsICYmIGRlbHRhID4gYXZhaWxhYmxlU2Nyb2xsKSkpIHtcbiAgICAgICAgc2hvdWxkQ2FuY2VsU2Nyb2xsID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoIWlzRGVsdGFQb3NpdGl2ZSAmJlxuICAgICAgICAoKG5vT3ZlcnNjcm9sbCAmJiBhdmFpbGFibGVTY3JvbGxUb3AgPT09IDApIHx8XG4gICAgICAgICAgICAoIW5vT3ZlcnNjcm9sbCAmJiAtZGVsdGEgPiBhdmFpbGFibGVTY3JvbGxUb3ApKSkge1xuICAgICAgICBzaG91bGRDYW5jZWxTY3JvbGwgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gc2hvdWxkQ2FuY2VsU2Nyb2xsO1xufTtcbiIsImltcG9ydCBSZW1vdmVTY3JvbGwgZnJvbSAnLi9Db21iaW5hdGlvbic7XG5leHBvcnQgeyBSZW1vdmVTY3JvbGwgfTtcbiIsImltcG9ydCB7IGNyZWF0ZVNpZGVjYXJNZWRpdW0gfSBmcm9tICd1c2Utc2lkZWNhcic7XG5leHBvcnQgdmFyIGVmZmVjdENhciA9IGNyZWF0ZVNpZGVjYXJNZWRpdW0oKTtcbiIsImltcG9ydCB7IGV4cG9ydFNpZGVjYXIgfSBmcm9tICd1c2Utc2lkZWNhcic7XG5pbXBvcnQgeyBSZW1vdmVTY3JvbGxTaWRlQ2FyIH0gZnJvbSAnLi9TaWRlRWZmZWN0JztcbmltcG9ydCB7IGVmZmVjdENhciB9IGZyb20gJy4vbWVkaXVtJztcbmV4cG9ydCBkZWZhdWx0IGV4cG9ydFNpZGVjYXIoZWZmZWN0Q2FyLCBSZW1vdmVTY3JvbGxTaWRlQ2FyKTtcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NyZWF0ZUJpbmRpbmcobywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlTWFwLnNldChyZWNlaXZlciwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcbiIsImltcG9ydCB7IHN0eWxlSG9va1NpbmdsZXRvbiB9IGZyb20gXCIuL2hvb2tcIjtcbmV4cG9ydCB2YXIgc3R5bGVTaW5nbGV0b24gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHVzZVN0eWxlID0gc3R5bGVIb29rU2luZ2xldG9uKCk7XG4gICAgdmFyIFNoZWV0ID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBzdHlsZXMgPSBfYS5zdHlsZXM7XG4gICAgICAgIHVzZVN0eWxlKHN0eWxlcyk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgcmV0dXJuIFNoZWV0O1xufTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHN0eWxlc2hlZXRTaW5nbGV0b24gfSBmcm9tIFwiLi9zaW5nbGV0b25cIjtcbmV4cG9ydCB2YXIgc3R5bGVIb29rU2luZ2xldG9uID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzaGVldCA9IHN0eWxlc2hlZXRTaW5nbGV0b24oKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0eWxlcykge1xuICAgICAgICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2hlZXQuYWRkKHN0eWxlcyk7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNoZWV0LnJlbW92ZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwgW10pO1xuICAgIH07XG59O1xuIiwiZXhwb3J0IHsgc3R5bGVTaW5nbGV0b24gfSBmcm9tICcuL2NvbXBvbmVudCc7XG5leHBvcnQgeyBzdHlsZXNoZWV0U2luZ2xldG9uIH0gZnJvbSAnLi9zaW5nbGV0b24nO1xuZXhwb3J0IHsgc3R5bGVIb29rU2luZ2xldG9uIH0gZnJvbSAnLi9ob29rJztcbiIsImltcG9ydCB7IGdldE5vbmNlIH0gZnJvbSBcImdldC1ub25jZVwiO1xuZnVuY3Rpb24gbWFrZVN0eWxlVGFnKCkge1xuICAgIGlmICghZG9jdW1lbnQpXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIHZhciB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHRhZy50eXBlID0gJ3RleHQvY3NzJztcbiAgICB2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuICAgIGlmIChub25jZSkge1xuICAgICAgICB0YWcuc2V0QXR0cmlidXRlKCdub25jZScsIG5vbmNlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhZztcbn1cbmZ1bmN0aW9uIGluamVjdFN0eWxlcyh0YWcsIGNzcykge1xuICAgIGlmICh0YWcuc3R5bGVTaGVldCkge1xuICAgICAgICB0YWcuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGFnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGluc2VydFN0eWxlVGFnKHRhZykge1xuICAgIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQodGFnKTtcbn1cbmV4cG9ydCB2YXIgc3R5bGVzaGVldFNpbmdsZXRvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY291bnRlciA9IDA7XG4gICAgdmFyIHN0eWxlc2hlZXQgPSBudWxsO1xuICAgIHJldHVybiB7XG4gICAgICAgIGFkZDogZnVuY3Rpb24gKHN0eWxlKSB7XG4gICAgICAgICAgICBpZiAoY291bnRlciA9PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0eWxlc2hlZXQgPSBtYWtlU3R5bGVUYWcoKSkge1xuICAgICAgICAgICAgICAgICAgICBpbmplY3RTdHlsZXMoc3R5bGVzaGVldCwgc3R5bGUpO1xuICAgICAgICAgICAgICAgICAgICBpbnNlcnRTdHlsZVRhZyhzdHlsZXNoZWV0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY291bnRlci0tO1xuICAgICAgICAgICAgaWYgKCFjb3VudGVyICYmIHN0eWxlc2hlZXQpIHtcbiAgICAgICAgICAgICAgICBzdHlsZXNoZWV0LnBhcmVudE5vZGUgJiYgc3R5bGVzaGVldC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlc2hlZXQpO1xuICAgICAgICAgICAgICAgIHN0eWxlc2hlZXQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn07XG4iLCIvKipcbiAqIEFzc2lnbnMgYSB2YWx1ZSBmb3IgYSBnaXZlbiByZWYsIG5vIG1hdHRlciBvZiB0aGUgcmVmIGZvcm1hdFxuICogQHBhcmFtIHtSZWZPYmplY3R9IHJlZiAtIGEgY2FsbGJhY2sgZnVuY3Rpb24gb3IgcmVmIG9iamVjdFxuICogQHBhcmFtIHZhbHVlIC0gYSBuZXcgdmFsdWVcbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90aGVLYXNoZXkvdXNlLWNhbGxiYWNrLXJlZiNhc3NpZ25yZWZcbiAqIEBleGFtcGxlXG4gKiBjb25zdCByZWZPYmplY3QgPSB1c2VSZWYoKTtcbiAqIGNvbnN0IHJlZkZuID0gKHJlZikgPT4gey4uLi59XG4gKlxuICogYXNzaWduUmVmKHJlZk9iamVjdCwgXCJyZWZWYWx1ZVwiKTtcbiAqIGFzc2lnblJlZihyZWZGbiwgXCJyZWZWYWx1ZVwiKTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnblJlZihyZWYsIHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiByZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmVmKHZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocmVmKSB7XG4gICAgICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiByZWY7XG59XG4iLCIvKipcbiAqIGNyZWF0ZXMgYSBSZWYgb2JqZWN0IHdpdGggb24gY2hhbmdlIGNhbGxiYWNrXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqIEByZXR1cm5zIHtSZWZPYmplY3R9XG4gKlxuICogQHNlZSB7QGxpbmsgdXNlQ2FsbGJhY2tSZWZ9XG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWZzLWFuZC10aGUtZG9tLmh0bWwjY3JlYXRpbmctcmVmc1xuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2FsbGJhY2tSZWYoY2FsbGJhY2spIHtcbiAgICB2YXIgY3VycmVudCA9IG51bGw7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0IGN1cnJlbnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IGN1cnJlbnQodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBsYXN0ID0gY3VycmVudDtcbiAgICAgICAgICAgIGlmIChsYXN0ICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh2YWx1ZSwgbGFzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufVxuIiwiZXhwb3J0IHsgYXNzaWduUmVmIH0gZnJvbSAnLi9hc3NpZ25SZWYnO1xuLy8gY2FsbGJhY2sgcmVmXG5leHBvcnQgeyB1c2VDYWxsYmFja1JlZiB9IGZyb20gJy4vdXNlUmVmJztcbmV4cG9ydCB7IGNyZWF0ZUNhbGxiYWNrUmVmIH0gZnJvbSAnLi9jcmVhdGVSZWYnO1xuLy8gbWVyZ2UgcmVmXG5leHBvcnQgeyBtZXJnZVJlZnMgfSBmcm9tICcuL21lcmdlUmVmJztcbmV4cG9ydCB7IHVzZU1lcmdlUmVmcyB9IGZyb20gJy4vdXNlTWVyZ2VSZWYnO1xuLy8gdHJhbnNmb3JtIHJlZlxuZXhwb3J0IHsgdXNlVHJhbnNmb3JtUmVmIH0gZnJvbSAnLi91c2VUcmFuc2Zvcm1SZWYnO1xuZXhwb3J0IHsgdHJhbnNmb3JtUmVmIH0gZnJvbSAnLi90cmFuc2Zvcm1SZWYnO1xuLy8gcmVmVG9DYWxsYmFja1xuZXhwb3J0IHsgcmVmVG9DYWxsYmFjaywgdXNlUmVmVG9DYWxsYmFjayB9IGZyb20gJy4vcmVmVG9DYWxsYmFjayc7XG4iLCJpbXBvcnQgeyBjcmVhdGVDYWxsYmFja1JlZiB9IGZyb20gJy4vY3JlYXRlUmVmJztcbmltcG9ydCB7IGFzc2lnblJlZiB9IGZyb20gJy4vYXNzaWduUmVmJztcbi8qKlxuICogTWVyZ2VzIHR3byBvciBtb3JlIHJlZnMgdG9nZXRoZXIgcHJvdmlkaW5nIGEgc2luZ2xlIGludGVyZmFjZSB0byBzZXQgdGhlaXIgdmFsdWVcbiAqIEBwYXJhbSB7UmVmT2JqZWN0fFJlZn0gcmVmc1xuICogQHJldHVybnMge011dGFibGVSZWZPYmplY3R9IC0gYSBuZXcgcmVmLCB3aGljaCB0cmFuc2xhdGVzIGFsbCBjaGFuZ2VzIHRvIHtyZWZzfVxuICpcbiAqIEBzZWUge0BsaW5rIHVzZU1lcmdlUmVmc30gdG8gYmUgdXNlZCBpbiBSZWFjdENvbXBvbmVudHNcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBDb21wb25lbnQgPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gKiAgIGNvbnN0IG93blJlZiA9IHVzZVJlZigpO1xuICogICBjb25zdCBkb21SZWYgPSBtZXJnZVJlZnMoW3JlZiwgb3duUmVmXSk7IC8vIPCfkYggbWVyZ2UgdG9nZXRoZXJcbiAqICAgcmV0dXJuIDxkaXYgcmVmPXtkb21SZWZ9Pi4uLjwvZGl2PlxuICogfVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VSZWZzKHJlZnMpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2FsbGJhY2tSZWYoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgIHJldHVybiByZWZzLmZvckVhY2goZnVuY3Rpb24gKHJlZikgeyByZXR1cm4gYXNzaWduUmVmKHJlZiwgbmV3VmFsdWUpOyB9KTtcbiAgICB9KTtcbn1cbiIsIi8qKlxuICogVW5tZW1vaXplZCB2ZXJzaW9uIG9mIHtAbGluayB1c2VSZWZUb0NhbGxiYWNrfVxuICogQHNlZSB7QGxpbmsgdXNlUmVmVG9DYWxsYmFja31cbiAqIEBwYXJhbSByZWZcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZlRvQ2FsbGJhY2socmVmKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmVmKG5ld1ZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyZWYpIHtcbiAgICAgICAgICAgIHJlZi5jdXJyZW50ID0gbmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICB9O1xufVxudmFyIG51bGxDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG51bGw7IH07XG4vLyBsZXRzIG1haW50YWluIGEgd2VhayByZWYgdG8sIHdlbGwsIHJlZiA6KVxuLy8gbm90IHVzaW5nIGBrYXNoZWAgdG8ga2VlcCB0aGlzIHBhY2thZ2Ugc21hbGxcbnZhciB3ZWFrTWVtID0gbmV3IFdlYWtNYXAoKTtcbnZhciB3ZWFrTWVtb2l6ZSA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgICB2YXIgdXNlZFJlZiA9IHJlZiB8fCBudWxsQ2FsbGJhY2s7XG4gICAgaWYgKHdlYWtNZW0uaGFzKHVzZWRSZWYpKSB7XG4gICAgICAgIHJldHVybiB3ZWFrTWVtLmdldCh1c2VkUmVmKTtcbiAgICB9XG4gICAgdmFyIGNiID0gcmVmVG9DYWxsYmFjayh1c2VkUmVmKTtcbiAgICB3ZWFrTWVtLnNldCh1c2VkUmVmLCBjYik7XG4gICAgcmV0dXJuIGNiO1xufTtcbi8qKlxuICogVHJhbnNmb3JtcyBhIGdpdmVuIGByZWZgIGludG8gYGNhbGxiYWNrYC5cbiAqXG4gKiBUbyB0cmFuc2Zvcm0gYGNhbGxiYWNrYCBpbnRvIHJlZiB1c2Uge0BsaW5rIHVzZUNhbGxiYWNrUmVmfHVzZUNhbGxiYWNrUmVmKHVuZGVmaW5lZCwgY2FsbGJhY2spfVxuICpcbiAqIEBwYXJhbSB7UmVhY3RSZWZ9IHJlZlxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICpcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3RoZUthc2hleS91c2UtY2FsbGJhY2stcmVmI3JlZnRvY2FsbGJhY2tcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgcmVmID0gdXNlUmVmKDApO1xuICogY29uc3Qgc2V0UmVmID0gdXNlUmVmVG9DYWxsYmFjayhyZWYpO1xuICog8J+RiSBzZXRSZWYoMTApO1xuICog4pyFIHJlZi5jdXJyZW50ID09PSAxMFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVmVG9DYWxsYmFjayhyZWYpIHtcbiAgICByZXR1cm4gd2Vha01lbW9pemUocmVmKTtcbn1cbiIsImltcG9ydCB7IGFzc2lnblJlZiB9IGZyb20gJy4vYXNzaWduUmVmJztcbmltcG9ydCB7IGNyZWF0ZUNhbGxiYWNrUmVmIH0gZnJvbSAnLi9jcmVhdGVSZWYnO1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybVJlZihyZWYsIHRyYW5zZm9ybWVyKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNhbGxiYWNrUmVmKGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gYXNzaWduUmVmKHJlZiwgdHJhbnNmb3JtZXIodmFsdWUpKTsgfSk7XG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFja1JlZiB9IGZyb20gJy4vdXNlUmVmJztcbmltcG9ydCB7IGFzc2lnblJlZiB9IGZyb20gJy4vYXNzaWduUmVmJztcbi8qKlxuICogTWVyZ2VzIHR3byBvciBtb3JlIHJlZnMgdG9nZXRoZXIgcHJvdmlkaW5nIGEgc2luZ2xlIGludGVyZmFjZSB0byBzZXQgdGhlaXIgdmFsdWVcbiAqIEBwYXJhbSB7UmVmT2JqZWN0fFJlZn0gcmVmc1xuICogQHJldHVybnMge011dGFibGVSZWZPYmplY3R9IC0gYSBuZXcgcmVmLCB3aGljaCB0cmFuc2xhdGVzIGFsbCBjaGFuZ2VzIHRvIHtyZWZzfVxuICpcbiAqIEBzZWUge0BsaW5rIG1lcmdlUmVmc30gYSB2ZXJzaW9uIHdpdGhvdXQgYnVpdC1pbiBtZW1vaXphdGlvblxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vdGhlS2FzaGV5L3VzZS1jYWxsYmFjay1yZWYjdXNlbWVyZ2VyZWZzXG4gKiBAZXhhbXBsZVxuICogY29uc3QgQ29tcG9uZW50ID0gUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICogICBjb25zdCBvd25SZWYgPSB1c2VSZWYoKTtcbiAqICAgY29uc3QgZG9tUmVmID0gdXNlTWVyZ2VSZWZzKFtyZWYsIG93blJlZl0pOyAvLyDwn5GIIG1lcmdlIHRvZ2V0aGVyXG4gKiAgIHJldHVybiA8ZGl2IHJlZj17ZG9tUmVmfT4uLi48L2Rpdj5cbiAqIH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlUmVmcyhyZWZzLCBkZWZhdWx0VmFsdWUpIHtcbiAgICByZXR1cm4gdXNlQ2FsbGJhY2tSZWYoZGVmYXVsdFZhbHVlLCBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHJlZnMuZm9yRWFjaChmdW5jdGlvbiAocmVmKSB7IHJldHVybiBhc3NpZ25SZWYocmVmLCBuZXdWYWx1ZSk7IH0pO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG4vKipcbiAqIGNyZWF0ZXMgYSBNdXRhYmxlUmVmIHdpdGggcmVmIGNoYW5nZSBjYWxsYmFja1xuICogQHBhcmFtIGluaXRpYWxWYWx1ZSAtIGluaXRpYWwgcmVmIHZhbHVlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAtIGEgY2FsbGJhY2sgdG8gcnVuIHdoZW4gdmFsdWUgY2hhbmdlc1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCByZWYgPSB1c2VDYWxsYmFja1JlZigwLCAobmV3VmFsdWUsIG9sZFZhbHVlKSA9PiBjb25zb2xlLmxvZyhvbGRWYWx1ZSwgJy0+JywgbmV3VmFsdWUpO1xuICogcmVmLmN1cnJlbnQgPSAxO1xuICogLy8gcHJpbnRzIDAgLT4gMVxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2hvb2tzLXJlZmVyZW5jZS5odG1sI3VzZXJlZlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vdGhlS2FzaGV5L3VzZS1jYWxsYmFjay1yZWYjdXNlY2FsbGJhY2tyZWYtLS10by1yZXBsYWNlLXJlYWN0dXNlcmVmXG4gKiBAcmV0dXJucyB7TXV0YWJsZVJlZk9iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNhbGxiYWNrUmVmKGluaXRpYWxWYWx1ZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVmID0gdXNlU3RhdGUoZnVuY3Rpb24gKCkgeyByZXR1cm4gKHtcbiAgICAgICAgLy8gdmFsdWVcbiAgICAgICAgdmFsdWU6IGluaXRpYWxWYWx1ZSxcbiAgICAgICAgLy8gbGFzdCBjYWxsYmFja1xuICAgICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICAgIC8vIFwibWVtb2l6ZWRcIiBwdWJsaWMgaW50ZXJmYWNlXG4gICAgICAgIGZhY2FkZToge1xuICAgICAgICAgICAgZ2V0IGN1cnJlbnQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlZi52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQgY3VycmVudCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBsYXN0ID0gcmVmLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChsYXN0ICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZWYudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmVmLmNhbGxiYWNrKHZhbHVlLCBsYXN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTsgfSlbMF07XG4gICAgLy8gdXBkYXRlIGNhbGxiYWNrXG4gICAgcmVmLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgcmV0dXJuIHJlZi5mYWNhZGU7XG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFja1JlZiB9IGZyb20gJy4vdXNlUmVmJztcbmltcG9ydCB7IGFzc2lnblJlZiB9IGZyb20gJy4vYXNzaWduUmVmJztcbi8qKlxuICogQ3JlYXRlIGEgX2xlbnNlXyBvbiBSZWYsIG1ha2luZyBpdCBwb3NzaWJsZSB0byB0cmFuc2Zvcm0gcmVmIHZhbHVlXG4gKiBAcGFyYW0ge1JlYWN0UmVmfSByZWZcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybWVyLiDwn5GJIFJlZiB3b3VsZCBiZSBfX05PVCB1cGRhdGVkX18gb24gYHRyYW5zZm9ybWVyYCB1cGRhdGUuXG4gKiBAcmV0dXJucyB7UmVmT2JqZWN0fVxuICpcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3RoZUthc2hleS91c2UtY2FsbGJhY2stcmVmI3VzZXRyYW5zZm9ybXJlZi10by1yZXBsYWNlLXJlYWN0dXNlaW1wZXJhdGl2ZWhhbmRsZVxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBSZXNpemFibGVXaXRoUmVmID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT5cbiAqICA8UmVzaXphYmxlIHsuLi5wcm9wc30gcmVmPXt1c2VUcmFuc2Zvcm1SZWYocmVmLCBpID0+IGkgPyBpLnJlc2l6YWJsZSA6IG51bGwpfS8+XG4gKiApO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlVHJhbnNmb3JtUmVmKHJlZiwgdHJhbnNmb3JtZXIpIHtcbiAgICByZXR1cm4gdXNlQ2FsbGJhY2tSZWYodW5kZWZpbmVkLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGFzc2lnblJlZihyZWYsIHRyYW5zZm9ybWVyKHZhbHVlKSk7XG4gICAgfSk7XG59XG4iLCJleHBvcnQgdmFyIGNvbmZpZyA9IHtcbiAgICBvbkVycm9yOiBmdW5jdGlvbiAoZSkgeyByZXR1cm4gY29uc29sZS5lcnJvcihlKTsgfSxcbn07XG5leHBvcnQgdmFyIHNldENvbmZpZyA9IGZ1bmN0aW9uIChjb25mKSB7XG4gICAgT2JqZWN0LmFzc2lnbihjb25maWcsIGNvbmYpO1xufTtcbiIsImltcG9ydCB7IGlzTm9kZSB9IGZyb20gJ2RldGVjdC1ub2RlLWVzJztcbmV4cG9ydCB2YXIgZW52ID0ge1xuICAgIGlzTm9kZTogaXNOb2RlLFxuICAgIGZvcmNlQ2FjaGU6IGZhbHNlLFxufTtcbiIsImltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG52YXIgU2lkZUNhciA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBzaWRlQ2FyID0gX2Euc2lkZUNhciwgcmVzdCA9IHRzbGliXzEuX19yZXN0KF9hLCBbXCJzaWRlQ2FyXCJdKTtcbiAgICBpZiAoIXNpZGVDYXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTaWRlY2FyOiBwbGVhc2UgcHJvdmlkZSBgc2lkZUNhcmAgcHJvcGVydHkgdG8gaW1wb3J0IHRoZSByaWdodCBjYXInKTtcbiAgICB9XG4gICAgdmFyIFRhcmdldCA9IHNpZGVDYXIucmVhZCgpO1xuICAgIGlmICghVGFyZ2V0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU2lkZWNhciBtZWRpdW0gbm90IGZvdW5kJyk7XG4gICAgfVxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFRhcmdldCwgdHNsaWJfMS5fX2Fzc2lnbih7fSwgcmVzdCkpO1xufTtcblNpZGVDYXIuaXNTaWRlQ2FyRXhwb3J0ID0gdHJ1ZTtcbmV4cG9ydCBmdW5jdGlvbiBleHBvcnRTaWRlY2FyKG1lZGl1bSwgZXhwb3J0ZWQpIHtcbiAgICBtZWRpdW0udXNlTWVkaXVtKGV4cG9ydGVkKTtcbiAgICByZXR1cm4gU2lkZUNhcjtcbn1cbiIsImltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTaWRlY2FyIH0gZnJvbSBcIi4vaG9va1wiO1xuZXhwb3J0IGZ1bmN0aW9uIHNpZGVjYXIoaW1wb3J0ZXIsIGVycm9yQ29tcG9uZW50KSB7XG4gICAgdmFyIEVycm9yQ2FzZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGVycm9yQ29tcG9uZW50OyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiBTaWRlY2FyKHByb3BzKSB7XG4gICAgICAgIHZhciBfYSA9IHVzZVNpZGVjYXIoaW1wb3J0ZXIsIHByb3BzLnNpZGVDYXIpLCBDYXIgPSBfYVswXSwgZXJyb3IgPSBfYVsxXTtcbiAgICAgICAgaWYgKGVycm9yICYmIGVycm9yQ29tcG9uZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gRXJyb3JDYXNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBDYXIgPyBSZWFjdC5jcmVhdGVFbGVtZW50KENhciwgdHNsaWJfMS5fX2Fzc2lnbih7fSwgcHJvcHMpKSA6IG51bGw7XG4gICAgfTtcbn1cbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBlbnYgfSBmcm9tICcuL2Vudic7XG52YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVNpZGVjYXIoaW1wb3J0ZXIsIGVmZmVjdCkge1xuICAgIHZhciBvcHRpb25zID0gZWZmZWN0ICYmIGVmZmVjdC5vcHRpb25zIHx8IHt9O1xuICAgIGlmIChlbnYuaXNOb2RlICYmICFvcHRpb25zLnNzcikge1xuICAgICAgICByZXR1cm4gW251bGwsIG51bGxdO1xuICAgIH1cbiAgICB2YXIgY291bGRVc2VDYWNoZSA9IGVudi5mb3JjZUNhY2hlIHx8IChlbnYuaXNOb2RlICYmICEhb3B0aW9ucy5zc3IpIHx8ICghb3B0aW9ucy5hc3luYyk7XG4gICAgdmFyIF9hID0gdXNlU3RhdGUoY291bGRVc2VDYWNoZSA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNhY2hlLmdldChpbXBvcnRlcik7IH0gOiB1bmRlZmluZWQpLCBDYXIgPSBfYVswXSwgc2V0Q2FyID0gX2FbMV07XG4gICAgdmFyIF9iID0gdXNlU3RhdGUobnVsbCksIGVycm9yID0gX2JbMF0sIHNldEVycm9yID0gX2JbMV07XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFDYXIpIHtcbiAgICAgICAgICAgIGltcG9ydGVyKClcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoY2FyKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc29sdmVkID0gZWZmZWN0ID8gZWZmZWN0LnJlYWQoKSA6IChjYXIuZGVmYXVsdCB8fCBjYXIpO1xuICAgICAgICAgICAgICAgIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignU2lkZWNhciBlcnJvcjogd2l0aCBpbXBvcnRlcicsIGltcG9ydGVyKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVycm9yXzE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlZmZlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1NpZGVjYXIgZXJyb3I6IHdpdGggbWVkaXVtJywgZWZmZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yXzEgPSBuZXcgRXJyb3IoJ1NpZGVjYXIgbWVkaXVtIHdhcyBub3QgZm91bmQnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yXzEgPSBuZXcgRXJyb3IoJ1NpZGVjYXIgd2FzIG5vdCBmb3VuZCBpbiBleHBvcnRzJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoZnVuY3Rpb24gKCkgeyByZXR1cm4gZXJyb3JfMTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yXzE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhY2hlLnNldChpbXBvcnRlciwgcmVzb2x2ZWQpO1xuICAgICAgICAgICAgICAgIHNldENhcihmdW5jdGlvbiAoKSB7IHJldHVybiByZXNvbHZlZDsgfSk7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gc2V0RXJyb3IoZnVuY3Rpb24gKCkgeyByZXR1cm4gZTsgfSk7IH0pO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIHJldHVybiBbQ2FyLCBlcnJvcl07XG59XG47XG4iLCJleHBvcnQgeyBzaWRlY2FyIH0gZnJvbSAnLi9ob2MnO1xuZXhwb3J0IHsgdXNlU2lkZWNhciB9IGZyb20gJy4vaG9vayc7XG5leHBvcnQgeyBzZXRDb25maWcgfSBmcm9tIFwiLi9jb25maWdcIjtcbmV4cG9ydCB7IGNyZWF0ZU1lZGl1bSwgY3JlYXRlU2lkZWNhck1lZGl1bSB9IGZyb20gXCIuL21lZGl1bVwiO1xuZXhwb3J0IHsgcmVuZGVyQ2FyIH0gZnJvbSAnLi9yZW5kZXJQcm9wJztcbmV4cG9ydCB7IGV4cG9ydFNpZGVjYXIgfSBmcm9tICcuL2V4cG9ydHMnO1xuIiwiaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmZ1bmN0aW9uIEl0b0koYSkge1xuICAgIHJldHVybiBhO1xufVxuZnVuY3Rpb24gaW5uZXJDcmVhdGVNZWRpdW0oZGVmYXVsdHMsIG1pZGRsZXdhcmUpIHtcbiAgICBpZiAobWlkZGxld2FyZSA9PT0gdm9pZCAwKSB7IG1pZGRsZXdhcmUgPSBJdG9JOyB9XG4gICAgdmFyIGJ1ZmZlciA9IFtdO1xuICAgIHZhciBhc3NpZ25lZCA9IGZhbHNlO1xuICAgIHZhciBtZWRpdW0gPSB7XG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChhc3NpZ25lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU2lkZWNhcjogY291bGQgbm90IGByZWFkYCBmcm9tIGFuIGBhc3NpZ25lZGAgbWVkaXVtLiBgcmVhZGAgY291bGQgYmUgdXNlZCBvbmx5IHdpdGggYHVzZU1lZGl1bWAuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYnVmZmVyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBidWZmZXJbYnVmZmVyLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgICAgICB9LFxuICAgICAgICB1c2VNZWRpdW06IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IG1pZGRsZXdhcmUoZGF0YSwgYXNzaWduZWQpO1xuICAgICAgICAgICAgYnVmZmVyLnB1c2goaXRlbSk7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGJ1ZmZlciA9IGJ1ZmZlci5maWx0ZXIoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHggIT09IGl0ZW07IH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgYXNzaWduU3luY01lZGl1bTogZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgICAgICBhc3NpZ25lZCA9IHRydWU7XG4gICAgICAgICAgICB3aGlsZSAoYnVmZmVyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjYnMgPSBidWZmZXI7XG4gICAgICAgICAgICAgICAgYnVmZmVyID0gW107XG4gICAgICAgICAgICAgICAgY2JzLmZvckVhY2goY2IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnVmZmVyID0ge1xuICAgICAgICAgICAgICAgIHB1c2g6IGZ1bmN0aW9uICh4KSB7IHJldHVybiBjYih4KTsgfSxcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGJ1ZmZlcjsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGFzc2lnbk1lZGl1bTogZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgICAgICBhc3NpZ25lZCA9IHRydWU7XG4gICAgICAgICAgICB2YXIgcGVuZGluZ1F1ZXVlID0gW107XG4gICAgICAgICAgICBpZiAoYnVmZmVyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjYnMgPSBidWZmZXI7XG4gICAgICAgICAgICAgICAgYnVmZmVyID0gW107XG4gICAgICAgICAgICAgICAgY2JzLmZvckVhY2goY2IpO1xuICAgICAgICAgICAgICAgIHBlbmRpbmdRdWV1ZSA9IGJ1ZmZlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBleGVjdXRlUXVldWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNicyA9IHBlbmRpbmdRdWV1ZTtcbiAgICAgICAgICAgICAgICBwZW5kaW5nUXVldWUgPSBbXTtcbiAgICAgICAgICAgICAgICBjYnMuZm9yRWFjaChjYik7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGN5Y2xlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihleGVjdXRlUXVldWUpOyB9O1xuICAgICAgICAgICAgY3ljbGUoKTtcbiAgICAgICAgICAgIGJ1ZmZlciA9IHtcbiAgICAgICAgICAgICAgICBwdXNoOiBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgICAgICBwZW5kaW5nUXVldWUucHVzaCh4KTtcbiAgICAgICAgICAgICAgICAgICAgY3ljbGUoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZpbHRlcjogZnVuY3Rpb24gKGZpbHRlcikge1xuICAgICAgICAgICAgICAgICAgICBwZW5kaW5nUXVldWUgPSBwZW5kaW5nUXVldWUuZmlsdGVyKGZpbHRlcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBidWZmZXI7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfTtcbiAgICByZXR1cm4gbWVkaXVtO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1lZGl1bShkZWZhdWx0cywgbWlkZGxld2FyZSkge1xuICAgIGlmIChtaWRkbGV3YXJlID09PSB2b2lkIDApIHsgbWlkZGxld2FyZSA9IEl0b0k7IH1cbiAgICByZXR1cm4gaW5uZXJDcmVhdGVNZWRpdW0oZGVmYXVsdHMsIG1pZGRsZXdhcmUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNpZGVjYXJNZWRpdW0ob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIG1lZGl1bSA9IGlubmVyQ3JlYXRlTWVkaXVtKG51bGwpO1xuICAgIG1lZGl1bS5vcHRpb25zID0gdHNsaWJfMS5fX2Fzc2lnbih7IGFzeW5jOiB0cnVlLCBzc3I6IGZhbHNlIH0sIG9wdGlvbnMpO1xuICAgIHJldHVybiBtZWRpdW07XG59XG4iLCJpbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJDYXIoV3JhcHBlZENvbXBvbmVudCwgZGVmYXVsdHMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIGZ1bmN0aW9uIFN0YXRlKF9hKSB7XG4gICAgICAgIHZhciBzdGF0ZVJlZiA9IF9hLnN0YXRlUmVmLCBwcm9wcyA9IF9hLnByb3BzO1xuICAgICAgICB2YXIgcmVuZGVyVGFyZ2V0ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gU2lkZVRhcmdldCgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVzZUxheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc3RhdGVSZWYuY3VycmVudChhcmdzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0sIFtdKTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV3JhcHBlZENvbXBvbmVudCwgdHNsaWJfMS5fX2Fzc2lnbih7fSwgcHJvcHMsIHsgY2hpbGRyZW46IHJlbmRlclRhcmdldCB9KSk7XG4gICAgfVxuICAgIHZhciBDaGlsZHJlbiA9IFJlYWN0Lm1lbW8oZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBzdGF0ZVJlZiA9IF9hLnN0YXRlUmVmLCBkZWZhdWx0U3RhdGUgPSBfYS5kZWZhdWx0U3RhdGUsIGNoaWxkcmVuID0gX2EuY2hpbGRyZW47XG4gICAgICAgIHZhciBfYiA9IHVzZVN0YXRlKGRlZmF1bHRTdGF0ZS5jdXJyZW50KSwgc3RhdGUgPSBfYlswXSwgc2V0U3RhdGUgPSBfYlsxXTtcbiAgICAgICAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHN0YXRlUmVmLmN1cnJlbnQgPSBzZXRTdGF0ZTtcbiAgICAgICAgfSwgW10pO1xuICAgICAgICByZXR1cm4gY2hpbGRyZW4uYXBwbHkodm9pZCAwLCBzdGF0ZSk7XG4gICAgfSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIENvbWJpbmVyKHByb3BzKSB7XG4gICAgICAgIHZhciBkZWZhdWx0U3RhdGUgPSBSZWFjdC51c2VSZWYoZGVmYXVsdHMocHJvcHMpKTtcbiAgICAgICAgdmFyIHJlZiA9IFJlYWN0LnVzZVJlZihmdW5jdGlvbiAoc3RhdGUpIHsgcmV0dXJuIGRlZmF1bHRTdGF0ZS5jdXJyZW50ID0gc3RhdGU7IH0pO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN0YXRlLCB7IHN0YXRlUmVmOiByZWYsIHByb3BzOiBwcm9wcyB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2hpbGRyZW4sIHsgc3RhdGVSZWY6IHJlZiwgZGVmYXVsdFN0YXRlOiBkZWZhdWx0U3RhdGUsIGNoaWxkcmVuOiBwcm9wcy5jaGlsZHJlbiB9KSkpO1xuICAgIH07XG59XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jcmVhdGVCaW5kaW5nKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZU1hcC5zZXQocmVjZWl2ZXIsIHZhbHVlKTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufSIsImltcG9ydCBzZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG4gIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuICBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59Il0sIm5hbWVzIjpbIkRpYWxvZ0NvbnRlbnQiLCJEaWFsb2dPdmVybGF5Iiwic3R5bGVkIiwiRHJhd2VyIiwiY2hpbGRyZW4iLCJpc0RyYXdlck9wZW4iLCJzZXREcmF3ZXJPcGVuIiwiYXJpYUxhYmVsIiwiU3R5bGVkRGlhbG9nQ29udGVudCIsInAiLCJ0aGVtZSIsIkNPTE9SUyIsIndoaXRlIiwiUVVFUklFUyIsInRhYmxldEFuZFVwIiwibGFwdG9wQW5kVXAiLCJMaW5rIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW52b2ljZXNDb250ZXh0IiwiRW1wdHlTdGF0ZSIsIkhlYWRlciIsIkludm9pY2VDYXJkIiwiSW52b2ljZUxpc3RDb250YWluZXIiLCJQYWdlTGF5b3V0IiwiY2FsY3VsYXRlSW52b2ljZVRvdGFsIiwiSG9tZSIsImludm9pY2VzIiwiYWRkSW52b2ljZSIsImZpbHRlciIsInNldEZpbHRlciIsImZpbHRlcmVkSW52b2ljZXMiLCJzZXRGaWx0ZXJlZEludm9pY2VzIiwiY29uc29sZSIsImxvZyIsImludm9pY2UiLCJzdGF0dXMiLCJzZWxlY3RlZEludm9pY2UiLCJsZW5ndGgiLCJtYXAiLCJpZCIsImludm9pY2VfZGF0ZSIsImNsaWVudF9uYW1lIiwiaW52b2ljZV9pdGVtcyIsIlN0eWxlZEVtcHR5U3RhdGUiXSwic291cmNlUm9vdCI6IiJ9