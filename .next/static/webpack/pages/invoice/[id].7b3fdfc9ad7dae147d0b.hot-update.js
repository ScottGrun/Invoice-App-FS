"use strict";
self["webpackHotUpdate_N_E"]("pages/invoice/[id]",{

/***/ "./components/Form/Fields/ItemField.tsx":
/*!**********************************************!*\
  !*** ./components/Form/Fields/ItemField.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemField": function() { return /* binding */ ItemField; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_currency_input_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-currency-input-field */ "./node_modules/react-currency-input-field/dist/index.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _FormField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormField */ "./components/Form/Fields/FormField.tsx");
/* harmony import */ var _PriceField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PriceField */ "./components/Form/Fields/PriceField.tsx");
/* harmony import */ var _styles_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/typography */ "./styles/typography.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\scott\\Documents\\GitHub\\Invoice-App-FS\\components\\Form\\Fields\\ItemField.tsx",
    _this = undefined,
    _s = $RefreshSig$();









var ItemField = function ItemField(_ref) {
  _s();

  var _invoiceItem$price;

  var idx = _ref.idx,
      remove = _ref.remove;

  var _useFormContext = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)(),
      control = _useFormContext.control,
      getValues = _useFormContext.getValues;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('0'),
      total = _useState[0],
      setTotal = _useState[1];

  var watchedQuantityAndPrice = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useWatch)({
    control: control,
    name: ["invoice_items[".concat(idx, "].quantity"), "invoice_items[".concat(idx, "].price")]
  });
  var invoiceItem = getValues('invoice_items')[idx];
  var formattedTotal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isNaN(watchedQuantityAndPrice[0]) || isNaN(watchedQuantityAndPrice[1])) {
      return setTotal('0');
    }

    var formattedTotal = (0,react_currency_input_field__WEBPACK_IMPORTED_MODULE_1__.formatValue)({
      value: (watchedQuantityAndPrice[0] * watchedQuantityAndPrice[1] / 100).toFixed(2).toString(),
      groupSeparator: ',',
      decimalScale: 2,
      decimalSeparator: '.',
      prefix: '$'
    });
    setTotal(formattedTotal);
  }, [watchedQuantityAndPrice]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Wrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(ItemName, {
      label: "Item Name",
      name: "invoice_items[".concat(idx, "].name"),
      type: "text"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Quantity, {
      label: "Qty",
      name: "invoice_items[".concat(idx, "].quantity"),
      type: "number",
      min: 0
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_PriceField__WEBPACK_IMPORTED_MODULE_4__.PriceField, {
      formPriceValue: (_invoiceItem$price = invoiceItem === null || invoiceItem === void 0 ? void 0 : invoiceItem.price) !== null && _invoiceItem$price !== void 0 ? _invoiceItem$price : 0,
      name: "invoice_items[".concat(idx, "].price")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(TotalWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
        children: "Total"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(TotalPrice, {
        children: total
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(DeleteButton, {
      type: "button",
      onClick: function onClick() {
        return remove(idx);
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("svg", {
        width: "13",
        height: "16",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("path", {
          d: "M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z",
          fillRule: "nonzero"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 3
  }, _this);
};

_s(ItemField, "MYNjdAyBQJxSZF9PdasTN0yt6Ig=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext, react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useWatch];
});

_c = ItemField;
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.fieldset.withConfig({
  displayName: "ItemField__Wrapper",
  componentId: "sc-twlod0-0"
})(["display:flex;flex-flow:row;flex-wrap:wrap;gap:16px;width:100%;@media ", "{gap:revert;flex-wrap:revert;}"], function (p) {
  return p.theme.QUERIES.tabletAndUp;
}); // Item Name Field

_c2 = Wrapper;
var ItemName = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__.default)(_FormField__WEBPACK_IMPORTED_MODULE_3__.FormField).withConfig({
  displayName: "ItemField__ItemName",
  componentId: "sc-twlod0-1"
})(["min-width:309px;width:100%;@media ", "{min-width:revert;width:214px;margin-right:16px;}"], function (p) {
  return p.theme.QUERIES.tabletAndUp;
}); // Quanity Field

_c3 = ItemName;
var Quantity = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__.default)(_FormField__WEBPACK_IMPORTED_MODULE_3__.FormField).withConfig({
  displayName: "ItemField__Quantity",
  componentId: "sc-twlod0-2"
})(["max-width:64px;span{text-align:center;}input{padding:0;padding-left:20px;}@media ", "{margin-right:16px;width:46px;div{justify-content:center;}input{padding:0;text-align:center;}}"], function (p) {
  return p.theme.QUERIES.tabletAndUp;
}); // Total Display (styled to look like field)

_c4 = Quantity;
var TotalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div.withConfig({
  displayName: "ItemField__TotalWrapper",
  componentId: "sc-twlod0-3"
})(["", ";display:flex;flex-flow:column;color:", ";max-width:60px;span{margin-bottom:10px;}@media ", "{}"], _styles_typography__WEBPACK_IMPORTED_MODULE_5__.bodyTextStyle, function (p) {
  return p.theme.COLORS.primary[3];
}, function (p) {
  return p.theme.QUERIES.tabletAndUp;
});
_c5 = TotalWrapper;
var TotalPrice = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.p.withConfig({
  displayName: "ItemField__TotalPrice",
  componentId: "sc-twlod0-4"
})(["", ";display:flex;align-items:center;height:48px;width:90px;overflow:auto;"], _styles_typography__WEBPACK_IMPORTED_MODULE_5__.h4TextStyle); // Delete Item button

_c6 = TotalPrice;
var DeleteButton = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.button.withConfig({
  displayName: "ItemField__DeleteButton",
  componentId: "sc-twlod0-5"
})(["height:48px;align-self:flex-end;margin-left:auto;background-color:transparent;svg{fill:", ";}&:hover{cursor:pointer;svg{fill:", ";}}"], function (p) {
  return p.theme.COLORS.grey[1];
}, function (p) {
  return p.theme.COLORS.warning[1];
});
_c7 = DeleteButton;

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "ItemField");
$RefreshReg$(_c2, "Wrapper");
$RefreshReg$(_c3, "ItemName");
$RefreshReg$(_c4, "Quantity");
$RefreshReg$(_c5, "TotalWrapper");
$RefreshReg$(_c6, "TotalPrice");
$RefreshReg$(_c7, "DeleteButton");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW52b2ljZS9baWRdLjdiM2ZkZmM5YWQ3ZGFlMTQ3ZDBiLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQU9PLElBQU1XLFNBQTZCLEdBQUcsU0FBaENBLFNBQWdDLE9BQXFCO0FBQUE7O0FBQUE7O0FBQUEsTUFBbEJDLEdBQWtCLFFBQWxCQSxHQUFrQjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFDakUsd0JBQStCVCwrREFBYyxFQUE3QztBQUFBLE1BQVFVLE9BQVIsbUJBQVFBLE9BQVI7QUFBQSxNQUFpQkMsU0FBakIsbUJBQWlCQSxTQUFqQjs7QUFDQSxrQkFBMEJiLCtDQUFRLENBQUMsR0FBRCxDQUFsQztBQUFBLE1BQU9jLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUVBLE1BQU1DLHVCQUF1QixHQUFHYix5REFBUSxDQUFDO0FBQ3hDUyxJQUFBQSxPQUFPLEVBQVBBLE9BRHdDO0FBRXhDSyxJQUFBQSxJQUFJLEVBQUUseUJBQWtCUCxHQUFsQix5Q0FBb0RBLEdBQXBEO0FBRmtDLEdBQUQsQ0FBeEM7QUFLQSxNQUFNUSxXQUFXLEdBQUdMLFNBQVMsQ0FBQyxlQUFELENBQVQsQ0FBMkJILEdBQTNCLENBQXBCO0FBRUEsTUFBTVMsY0FBYyxHQUFHcEIsZ0RBQVMsQ0FBQyxZQUFNO0FBQ3RDLFFBQUlxQixLQUFLLENBQUNKLHVCQUF1QixDQUFDLENBQUQsQ0FBeEIsQ0FBTCxJQUFxQ0ksS0FBSyxDQUFDSix1QkFBdUIsQ0FBQyxDQUFELENBQXhCLENBQTlDLEVBQTRFO0FBQzNFLGFBQU9ELFFBQVEsQ0FBQyxHQUFELENBQWY7QUFDQTs7QUFFRCxRQUFNSSxjQUFjLEdBQUdsQix1RUFBVyxDQUFDO0FBQ2xDb0IsTUFBQUEsS0FBSyxFQUFFLENBQUVMLHVCQUF1QixDQUFDLENBQUQsQ0FBdkIsR0FB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LENBQWVDLE9BQWYsQ0FBdUIsQ0FBdkIsQ0FBUDtBQUFBLENBSlEsRUFXUixVQUFDVCxDQUFEO0FBQUEsU0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLE9BQVIsQ0FBZ0JDLFdBQXZCO0FBQUEsQ0FYUSxDQUFsQjtNQUFNRztBQWdCTixJQUFNSSxVQUFVLEdBQUdyQyxtRUFBSDtBQUFBO0FBQUE7QUFBQSxtRkFDYkksMkRBRGEsQ0FBaEIsRUFTQTs7TUFUTWlDO0FBVU4sSUFBTUMsWUFBWSxHQUFHdEMsd0VBQUg7QUFBQTtBQUFBO0FBQUEsNklBTVIsVUFBQzJCLENBQUQ7QUFBQSxTQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUU8sTUFBUixDQUFlSyxJQUFmLENBQW9CLENBQXBCLENBQVA7QUFBQSxDQU5RLEVBYVAsVUFBQ2IsQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRTyxNQUFSLENBQWVNLE9BQWYsQ0FBdUIsQ0FBdkIsQ0FBUDtBQUFBLENBYk8sQ0FBbEI7TUFBTUgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtL0ZpZWxkcy9JdGVtRmllbGQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZm9ybWF0VmFsdWUgfSBmcm9tICdyZWFjdC1jdXJyZW5jeS1pbnB1dC1maWVsZCc7XHJcbmltcG9ydCB7IHVzZUZvcm1Db250ZXh0LCB1c2VXYXRjaCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgRm9ybUZpZWxkIH0gZnJvbSAnLi9Gb3JtRmllbGQnO1xyXG5pbXBvcnQgeyBQcmljZUZpZWxkIH0gZnJvbSAnLi9QcmljZUZpZWxkJztcclxuXHJcbmltcG9ydCB7IGJvZHlUZXh0U3R5bGUsIGg0VGV4dFN0eWxlIH0gZnJvbSAnQC9zdHlsZXMvdHlwb2dyYXBoeSc7XHJcblxyXG5pbnRlcmZhY2UgSXRlbUZpZWxkUHJvcHMge1xyXG5cdGlkeDogbnVtYmVyO1xyXG5cdHJlbW92ZTogKGluZGV4PzogbnVtYmVyIHwgbnVtYmVyW10gfCB1bmRlZmluZWQpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBJdGVtRmllbGQ6IEZDPEl0ZW1GaWVsZFByb3BzPiA9ICh7IGlkeCwgcmVtb3ZlIH0pID0+IHtcclxuXHRjb25zdCB7IGNvbnRyb2wsIGdldFZhbHVlcyB9ID0gdXNlRm9ybUNvbnRleHQoKTtcclxuXHRjb25zdCBbdG90YWwsIHNldFRvdGFsXSA9IHVzZVN0YXRlKCcwJyk7XHJcblxyXG5cdGNvbnN0IHdhdGNoZWRRdWFudGl0eUFuZFByaWNlID0gdXNlV2F0Y2goe1xyXG5cdFx0Y29udHJvbCxcclxuXHRcdG5hbWU6IFtgaW52b2ljZV9pdGVtc1ske2lkeH1dLnF1YW50aXR5YCwgYGludm9pY2VfaXRlbXNbJHtpZHh9XS5wcmljZWBdLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBpbnZvaWNlSXRlbSA9IGdldFZhbHVlcygnaW52b2ljZV9pdGVtcycpW2lkeF07XHJcblxyXG5cdGNvbnN0IGZvcm1hdHRlZFRvdGFsID0gdXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmIChpc05hTih3YXRjaGVkUXVhbnRpdHlBbmRQcmljZVswXSkgfHwgaXNOYU4od2F0Y2hlZFF1YW50aXR5QW5kUHJpY2VbMV0pKSB7XHJcblx0XHRcdHJldHVybiBzZXRUb3RhbCgnMCcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGZvcm1hdHRlZFRvdGFsID0gZm9ybWF0VmFsdWUoe1xyXG5cdFx0XHR2YWx1ZTogKCh3YXRjaGVkUXVhbnRpdHlBbmRQcmljZVswXSAqIHdhdGNoZWRRdWFudGl0eUFuZFByaWNlWzFdKSAvIDEwMClcclxuXHRcdFx0XHQudG9GaXhlZCgyKVxyXG5cdFx0XHRcdC50b1N0cmluZygpLFxyXG5cdFx0XHRncm91cFNlcGFyYXRvcjogJywnLFxyXG5cdFx0XHRkZWNpbWFsU2NhbGU6IDIsXHJcblx0XHRcdGRlY2ltYWxTZXBhcmF0b3I6ICcuJyxcclxuXHRcdFx0cHJlZml4OiAnJCcsXHJcblx0XHR9KTtcclxuXHJcblx0XHRzZXRUb3RhbChmb3JtYXR0ZWRUb3RhbCk7XHJcblx0fSwgW3dhdGNoZWRRdWFudGl0eUFuZFByaWNlXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8V3JhcHBlcj5cclxuXHRcdFx0PEl0ZW1OYW1lIGxhYmVsPVwiSXRlbSBOYW1lXCIgbmFtZT17YGludm9pY2VfaXRlbXNbJHtpZHh9XS5uYW1lYH0gdHlwZT1cInRleHRcIiAvPlxyXG5cdFx0XHQ8UXVhbnRpdHkgbGFiZWw9XCJRdHlcIiBuYW1lPXtgaW52b2ljZV9pdGVtc1ske2lkeH1dLnF1YW50aXR5YH0gdHlwZT1cIm51bWJlclwiIG1pbj17MH0gLz5cclxuXHRcdFx0PFByaWNlRmllbGQgZm9ybVByaWNlVmFsdWU9e2ludm9pY2VJdGVtPy5wcmljZSA/PyAwfSBuYW1lPXtgaW52b2ljZV9pdGVtc1ske2lkeH1dLnByaWNlYH0gLz5cclxuXHRcdFx0PFRvdGFsV3JhcHBlcj5cclxuXHRcdFx0XHQ8c3Bhbj5Ub3RhbDwvc3Bhbj5cclxuXHRcdFx0XHQ8VG90YWxQcmljZT57dG90YWx9PC9Ub3RhbFByaWNlPlxyXG5cdFx0XHQ8L1RvdGFsV3JhcHBlcj5cclxuXHRcdFx0PERlbGV0ZUJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gcmVtb3ZlKGlkeCl9PlxyXG5cdFx0XHRcdDxzdmcgd2lkdGg9XCIxM1wiIGhlaWdodD1cIjE2XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG5cdFx0XHRcdFx0PHBhdGhcclxuXHRcdFx0XHRcdFx0ZD1cIk0xMS41ODMgMy41NTZ2MTAuNjY2YzAgLjk4Mi0uNzk1IDEuNzc4LTEuNzc3IDEuNzc4SDIuNjk0YTEuNzc3IDEuNzc3IDAgMDEtMS43NzctMS43NzhWMy41NTZoMTAuNjY2ek04LjQ3MyAwbC44ODguODg5aDMuMTExdjEuNzc4SC4wMjhWLjg4OWgzLjExTDQuMDI5IDBoNC40NDR6XCJcclxuXHRcdFx0XHRcdFx0ZmlsbFJ1bGU9XCJub256ZXJvXCJcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9zdmc+XHJcblx0XHRcdDwvRGVsZXRlQnV0dG9uPlxyXG5cdFx0PC9XcmFwcGVyPlxyXG5cdCk7XHJcbn07XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmZpZWxkc2V0YFxyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1mbG93OiByb3c7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdGdhcDogMTZweDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLnRhYmxldEFuZFVwfSB7XHJcblx0XHRnYXA6IHJldmVydDtcclxuXHRcdGZsZXgtd3JhcDogcmV2ZXJ0O1xyXG5cdH1cclxuYDtcclxuXHJcbi8vIEl0ZW0gTmFtZSBGaWVsZFxyXG5jb25zdCBJdGVtTmFtZSA9IHN0eWxlZChGb3JtRmllbGQpYFxyXG5cdG1pbi13aWR0aDogMzA5cHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0bWluLXdpZHRoOiByZXZlcnQ7XHJcblx0XHR3aWR0aDogMjE0cHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcblx0fVxyXG5gO1xyXG5cclxuLy8gUXVhbml0eSBGaWVsZFxyXG5jb25zdCBRdWFudGl0eSA9IHN0eWxlZChGb3JtRmllbGQpYFxyXG5cdG1heC13aWR0aDogNjRweDtcclxuXHRzcGFuIHtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdGlucHV0IHtcclxuXHRcdHBhZGRpbmc6IDA7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLnRhYmxldEFuZFVwfSB7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcblx0XHR3aWR0aDogNDZweDtcclxuXHJcblx0XHRkaXYge1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdH1cclxuXHJcblx0XHRpbnB1dCB7XHJcblx0XHRcdHBhZGRpbmc6IDA7XHJcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdH1cclxuXHR9XHJcbmA7XHJcblxyXG4vLyBUb3RhbCBEaXNwbGF5IChzdHlsZWQgdG8gbG9vayBsaWtlIGZpZWxkKVxyXG5jb25zdCBUb3RhbFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG5cdCR7Ym9keVRleHRTdHlsZX07XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWZsb3c6IGNvbHVtbjtcclxuXHRjb2xvcjogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMucHJpbWFyeVszXX07XHJcblx0bWF4LXdpZHRoOiA2MHB4O1xyXG5cclxuXHRzcGFuIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLnRhYmxldEFuZFVwfSB7XHJcblx0XHQvKiBtYXgtd2lkdGg6IDQ1cHg7ICovXHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgVG90YWxQcmljZSA9IHN0eWxlZC5wYFxyXG5cdCR7aDRUZXh0U3R5bGV9O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRoZWlnaHQ6IDQ4cHg7XHJcblx0d2lkdGg6IDkwcHg7XHJcblx0b3ZlcmZsb3c6IGF1dG87XHJcbmA7XHJcblxyXG4vLyBEZWxldGUgSXRlbSBidXR0b25cclxuY29uc3QgRGVsZXRlQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuXHRoZWlnaHQ6IDQ4cHg7XHJcblx0YWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcblx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0c3ZnIHtcclxuXHRcdGZpbGw6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLmdyZXlbMV19O1xyXG5cdH1cclxuXHJcblx0Jjpob3ZlciB7XHJcblx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG5cdFx0c3ZnIHtcclxuXHRcdFx0ZmlsbDogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMud2FybmluZ1sxXX07XHJcblx0XHR9XHJcblx0fVxyXG5gO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImZvcm1hdFZhbHVlIiwidXNlRm9ybUNvbnRleHQiLCJ1c2VXYXRjaCIsInN0eWxlZCIsIkZvcm1GaWVsZCIsIlByaWNlRmllbGQiLCJib2R5VGV4dFN0eWxlIiwiaDRUZXh0U3R5bGUiLCJJdGVtRmllbGQiLCJpZHgiLCJyZW1vdmUiLCJjb250cm9sIiwiZ2V0VmFsdWVzIiwidG90YWwiLCJzZXRUb3RhbCIsIndhdGNoZWRRdWFudGl0eUFuZFByaWNlIiwibmFtZSIsImludm9pY2VJdGVtIiwiZm9ybWF0dGVkVG90YWwiLCJpc05hTiIsInZhbHVlIiwidG9GaXhlZCIsInRvU3RyaW5nIiwiZ3JvdXBTZXBhcmF0b3IiLCJkZWNpbWFsU2NhbGUiLCJkZWNpbWFsU2VwYXJhdG9yIiwicHJlZml4IiwicHJpY2UiLCJXcmFwcGVyIiwiZmllbGRzZXQiLCJwIiwidGhlbWUiLCJRVUVSSUVTIiwidGFibGV0QW5kVXAiLCJJdGVtTmFtZSIsIlF1YW50aXR5IiwiVG90YWxXcmFwcGVyIiwiZGl2IiwiQ09MT1JTIiwicHJpbWFyeSIsIlRvdGFsUHJpY2UiLCJEZWxldGVCdXR0b24iLCJidXR0b24iLCJncmV5Iiwid2FybmluZyJdLCJzb3VyY2VSb290IjoiIn0=