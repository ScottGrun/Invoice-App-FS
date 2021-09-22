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

  var demo = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useWatch)({
    control: control,
    name: ["invoice_items[".concat(idx, "].quantity"), "invoice_items[".concat(idx, "].price")]
  });
  var invoiceItem = getValues('invoice_items')[idx];

  var calculateTotal = function calculateTotal() {
    var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    console.log("HEY :".concat(isNaN(price)));

    if (isNaN(price) || undefined) {
      return '0';
    }

    return (quantity * price / 100).toFixed(2).toString();
  };

  console.log(calculateTotal(invoiceItem === null || invoiceItem === void 0 ? void 0 : invoiceItem.quantity, invoiceItem === null || invoiceItem === void 0 ? void 0 : invoiceItem.price));
  var itemTotal = (0,react_currency_input_field__WEBPACK_IMPORTED_MODULE_1__.formatValue)({
    value: calculateTotal(invoiceItem === null || invoiceItem === void 0 ? void 0 : invoiceItem.quantity, invoiceItem === null || invoiceItem === void 0 ? void 0 : invoiceItem.price),
    groupSeparator: ',',
    decimalScale: 2,
    decimalSeparator: '.',
    prefix: '$'
  });
  console.log(invoiceItem === null || invoiceItem === void 0 ? void 0 : invoiceItem.price);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Wrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(ItemName, {
      label: "Item Name",
      name: "invoice_items[".concat(idx, "].name"),
      type: "text"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Quantity, {
      label: "Qty",
      name: "invoice_items[".concat(idx, "].quantity"),
      type: "number",
      min: 0
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_PriceField__WEBPACK_IMPORTED_MODULE_4__.PriceField, {
      formPriceValue: (_invoiceItem$price = invoiceItem === null || invoiceItem === void 0 ? void 0 : invoiceItem.price) !== null && _invoiceItem$price !== void 0 ? _invoiceItem$price : 0,
      name: "invoice_items[".concat(idx, "].price")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(TotalWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
        children: "Total"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(TotalPrice, {
        children: itemTotal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
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
          lineNumber: 57,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 3
  }, _this);
};

_s(ItemField, "kHJK7LgLg2gBDp0ltL/GuPJYU/U=", false, function () {
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
})(["", ";display:flex;flex-flow:column;color:", ";max-width:60px;span{margin-bottom:10px;}@media ", "{max-width:45px;}"], _styles_typography__WEBPACK_IMPORTED_MODULE_5__.bodyTextStyle, function (p) {
  return p.theme.COLORS.primary[3];
}, function (p) {
  return p.theme.QUERIES.tabletAndUp;
});
_c5 = TotalWrapper;
var TotalPrice = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.p.withConfig({
  displayName: "ItemField__TotalPrice",
  componentId: "sc-twlod0-4"
})(["", ";display:flex;align-items:center;height:48px;"], _styles_typography__WEBPACK_IMPORTED_MODULE_5__.h4TextStyle); // Delete Item button

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW52b2ljZS9baWRdLjUxNWFjMTE0MzY4ZDk3NWRkYTg3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQU9PLElBQU1TLFNBQTZCLEdBQUcsU0FBaENBLFNBQWdDLE9BQXFCO0FBQUE7O0FBQUE7O0FBQUEsTUFBbEJDLEdBQWtCLFFBQWxCQSxHQUFrQjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFDakUsd0JBQStCVCwrREFBYyxFQUE3QztBQUFBLE1BQVFVLE9BQVIsbUJBQVFBLE9BQVI7QUFBQSxNQUFpQkMsU0FBakIsbUJBQWlCQSxTQUFqQjs7QUFDQSxNQUFNQyxJQUFJLEdBQUdYLHlEQUFRLENBQUM7QUFDckJTLElBQUFBLE9BQU8sRUFBUEEsT0FEcUI7QUFFckJHLElBQUFBLElBQUksRUFBRSx5QkFBa0JMLEdBQWxCLHlDQUFvREEsR0FBcEQ7QUFGZSxHQUFELENBQXJCO0FBSUEsTUFBTU0sV0FBVyxHQUFHSCxTQUFTLENBQUMsZUFBRCxDQUFULENBQTJCSCxHQUEzQixDQUFwQjs7QUFFQSxNQUFNTyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQTZCO0FBQUEsUUFBNUJDLEtBQTRCLHVFQUFwQixDQUFvQjtBQUFBLFFBQWpCQyxRQUFpQix1RUFBTixDQUFNO0FBQ25EQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsZ0JBQW9CQyxLQUFLLENBQUNKLEtBQUQsQ0FBekI7O0FBRUEsUUFBSUksS0FBSyxDQUFDSixLQUFELENBQUwsSUFBZ0JLLFNBQXBCLEVBQStCO0FBQzlCLGFBQU8sR0FBUDtBQUNBOztBQUVELFdBQU8sQ0FBRUosUUFBUSxHQUFHRCxLQUFaLEdBQXFCLEdBQXRCLEVBQTJCTSxPQUEzQixDQUFtQyxDQUFuQyxFQUFzQ0MsUUFBdEMsRUFBUDtBQUNBLEdBUkQ7O0FBVUFMLEVBQUFB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LDRMQVlKLFVBQUM2QixDQUFEO0FBQUEsU0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLE9BQVIsQ0FBZ0JDLFdBQXZCO0FBQUEsQ0FaSSxDQUFkLEVBMkJBOztNQTNCTUU7QUE0Qk4sSUFBTUMsWUFBWSxHQUFHcEMscUVBQUg7QUFBQTtBQUFBO0FBQUEsMkhBQ2ZHLDZEQURlLEVBSVIsVUFBQzJCLENBQUQ7QUFBQSxTQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUU8sTUFBUixDQUFlQyxPQUFmLENBQXVCLENBQXZCLENBQVA7QUFBQSxDQUpRLEVBVVIsVUFBQ1QsQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxPQUFSLENBQWdCQyxXQUF2QjtBQUFBLENBVlEsQ0FBbEI7TUFBTUc7QUFlTixJQUFNSSxVQUFVLEdBQUd4QyxtRUFBSDtBQUFBO0FBQUE7QUFBQSwwREFDYkksMkRBRGEsQ0FBaEIsRUFPQTs7TUFQTW9DO0FBUU4sSUFBTUMsWUFBWSxHQUFHekMsd0VBQUg7QUFBQTtBQUFBO0FBQUEsNklBTVIsVUFBQzhCLENBQUQ7QUFBQSxTQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUU8sTUFBUixDQUFlSyxJQUFmLENBQW9CLENBQXBCLENBQVA7QUFBQSxDQU5RLEVBYVAsVUFBQ2IsQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRTyxNQUFSLENBQWVNLE9BQWYsQ0FBdUIsQ0FBdkIsQ0FBUDtBQUFBLENBYk8sQ0FBbEI7TUFBTUgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtL0ZpZWxkcy9JdGVtRmllbGQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEN1cnJlbmN5SW5wdXQsIHsgZm9ybWF0VmFsdWUgfSBmcm9tICdyZWFjdC1jdXJyZW5jeS1pbnB1dC1maWVsZCc7XHJcbmltcG9ydCB7IENvbnRyb2xsZXIsIHVzZUZvcm1Db250ZXh0LCB1c2VXYXRjaCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgRm9ybUZpZWxkIH0gZnJvbSAnLi9Gb3JtRmllbGQnO1xyXG5pbXBvcnQgeyBQcmljZUZpZWxkIH0gZnJvbSAnLi9QcmljZUZpZWxkJztcclxuXHJcbmltcG9ydCB7IGJvZHlUZXh0U3R5bGUsIGg0VGV4dFN0eWxlIH0gZnJvbSAnQC9zdHlsZXMvdHlwb2dyYXBoeSc7XHJcblxyXG5pbnRlcmZhY2UgSXRlbUZpZWxkUHJvcHMge1xyXG5cdGlkeDogbnVtYmVyO1xyXG5cdHJlbW92ZTogKGluZGV4PzogbnVtYmVyIHwgbnVtYmVyW10gfCB1bmRlZmluZWQpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBJdGVtRmllbGQ6IEZDPEl0ZW1GaWVsZFByb3BzPiA9ICh7IGlkeCwgcmVtb3ZlIH0pID0+IHtcclxuXHRjb25zdCB7IGNvbnRyb2wsIGdldFZhbHVlcyB9ID0gdXNlRm9ybUNvbnRleHQoKTtcclxuXHRjb25zdCBkZW1vID0gdXNlV2F0Y2goe1xyXG5cdFx0Y29udHJvbCxcclxuXHRcdG5hbWU6IFtgaW52b2ljZV9pdGVtc1ske2lkeH1dLnF1YW50aXR5YCwgYGludm9pY2VfaXRlbXNbJHtpZHh9XS5wcmljZWBdLFxyXG5cdH0pO1xyXG5cdGNvbnN0IGludm9pY2VJdGVtID0gZ2V0VmFsdWVzKCdpbnZvaWNlX2l0ZW1zJylbaWR4XTtcclxuXHJcblx0Y29uc3QgY2FsY3VsYXRlVG90YWwgPSAocHJpY2UgPSAwLCBxdWFudGl0eSA9IDApID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKGBIRVkgOiR7aXNOYU4ocHJpY2UpfWApO1xyXG5cclxuXHRcdGlmIChpc05hTihwcmljZSkgfHwgdW5kZWZpbmVkKSB7XHJcblx0XHRcdHJldHVybiAnMCc7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuICgocXVhbnRpdHkgKiBwcmljZSkgLyAxMDApLnRvRml4ZWQoMikudG9TdHJpbmcoKTtcclxuXHR9O1xyXG5cclxuXHRjb25zb2xlLmxvZyhjYWxjdWxhdGVUb3RhbChpbnZvaWNlSXRlbT8ucXVhbnRpdHksIGludm9pY2VJdGVtPy5wcmljZSkpO1xyXG5cclxuXHRjb25zdCBpdGVtVG90YWwgPSBmb3JtYXRWYWx1ZSh7XHJcblx0XHR2YWx1ZTogY2FsY3VsYXRlVG90YWwoaW52b2ljZUl0ZW0/LnF1YW50aXR5LCBpbnZvaWNlSXRlbT8ucHJpY2UpLFxyXG5cdFx0Z3JvdXBTZXBhcmF0b3I6ICcsJyxcclxuXHRcdGRlY2ltYWxTY2FsZTogMixcclxuXHRcdGRlY2ltYWxTZXBhcmF0b3I6ICcuJyxcclxuXHRcdHByZWZpeDogJyQnLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zb2xlLmxvZyhpbnZvaWNlSXRlbT8ucHJpY2UpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PFdyYXBwZXI+XHJcblx0XHRcdDxJdGVtTmFtZSBsYWJlbD1cIkl0ZW0gTmFtZVwiIG5hbWU9e2BpbnZvaWNlX2l0ZW1zWyR7aWR4fV0ubmFtZWB9IHR5cGU9XCJ0ZXh0XCIgLz5cclxuXHRcdFx0PFF1YW50aXR5IGxhYmVsPVwiUXR5XCIgbmFtZT17YGludm9pY2VfaXRlbXNbJHtpZHh9XS5xdWFudGl0eWB9IHR5cGU9XCJudW1iZXJcIiBtaW49ezB9IC8+XHJcblx0XHRcdDxQcmljZUZpZWxkIGZvcm1QcmljZVZhbHVlPXtpbnZvaWNlSXRlbT8ucHJpY2UgPz8gMH0gbmFtZT17YGludm9pY2VfaXRlbXNbJHtpZHh9XS5wcmljZWB9IC8+XHJcblx0XHRcdDxUb3RhbFdyYXBwZXI+XHJcblx0XHRcdFx0PHNwYW4+VG90YWw8L3NwYW4+XHJcblx0XHRcdFx0PFRvdGFsUHJpY2U+e2l0ZW1Ub3RhbH08L1RvdGFsUHJpY2U+XHJcblx0XHRcdDwvVG90YWxXcmFwcGVyPlxyXG5cdFx0XHQ8RGVsZXRlQnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiByZW1vdmUoaWR4KX0+XHJcblx0XHRcdFx0PHN2ZyB3aWR0aD1cIjEzXCIgaGVpZ2h0PVwiMTZcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcblx0XHRcdFx0XHQ8cGF0aFxyXG5cdFx0XHRcdFx0XHRkPVwiTTExLjU4MyAzLjU1NnYxMC42NjZjMCAuOTgyLS43OTUgMS43NzgtMS43NzcgMS43NzhIMi42OTRhMS43NzcgMS43NzcgMCAwMS0xLjc3Ny0xLjc3OFYzLjU1NmgxMC42NjZ6TTguNDczIDBsLjg4OC44ODloMy4xMTF2MS43NzhILjAyOFYuODg5aDMuMTFMNC4wMjkgMGg0LjQ0NHpcIlxyXG5cdFx0XHRcdFx0XHRmaWxsUnVsZT1cIm5vbnplcm9cIlxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L3N2Zz5cclxuXHRcdFx0PC9EZWxldGVCdXR0b24+XHJcblx0XHQ8L1dyYXBwZXI+XHJcblx0KTtcclxufTtcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZmllbGRzZXRgXHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWZsb3c6IHJvdztcclxuXHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0Z2FwOiAxNnB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdGdhcDogcmV2ZXJ0O1xyXG5cdFx0ZmxleC13cmFwOiByZXZlcnQ7XHJcblx0fVxyXG5gO1xyXG5cclxuLy8gSXRlbSBOYW1lIEZpZWxkXHJcbmNvbnN0IEl0ZW1OYW1lID0gc3R5bGVkKEZvcm1GaWVsZClgXHJcblx0bWluLXdpZHRoOiAzMDlweDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLnRhYmxldEFuZFVwfSB7XHJcblx0XHRtaW4td2lkdGg6IHJldmVydDtcclxuXHRcdHdpZHRoOiAyMTRweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMTZweDtcclxuXHR9XHJcbmA7XHJcblxyXG4vLyBRdWFuaXR5IEZpZWxkXHJcbmNvbnN0IFF1YW50aXR5ID0gc3R5bGVkKEZvcm1GaWVsZClgXHJcblx0bWF4LXdpZHRoOiA2NHB4O1xyXG5cclxuXHRzcGFuIHtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdGlucHV0IHtcclxuXHRcdHBhZGRpbmc6IDA7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLnRhYmxldEFuZFVwfSB7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcblx0XHR3aWR0aDogNDZweDtcclxuXHJcblx0XHRkaXYge1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdH1cclxuXHJcblx0XHRpbnB1dCB7XHJcblx0XHRcdHBhZGRpbmc6IDA7XHJcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdH1cclxuXHR9XHJcbmA7XHJcblxyXG4vLyBUb3RhbCBEaXNwbGF5IChzdHlsZWQgdG8gbG9vayBsaWtlIGZpZWxkKVxyXG5jb25zdCBUb3RhbFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG5cdCR7Ym9keVRleHRTdHlsZX07XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWZsb3c6IGNvbHVtbjtcclxuXHRjb2xvcjogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMucHJpbWFyeVszXX07XHJcblx0bWF4LXdpZHRoOiA2MHB4O1xyXG5cdHNwYW4ge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHR9XHJcblxyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdG1heC13aWR0aDogNDVweDtcclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBUb3RhbFByaWNlID0gc3R5bGVkLnBgXHJcblx0JHtoNFRleHRTdHlsZX07XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGhlaWdodDogNDhweDtcclxuYDtcclxuXHJcbi8vIERlbGV0ZSBJdGVtIGJ1dHRvblxyXG5jb25zdCBEZWxldGVCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG5cdGhlaWdodDogNDhweDtcclxuXHRhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuXHRtYXJnaW4tbGVmdDogYXV0bztcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRzdmcge1xyXG5cdFx0ZmlsbDogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMuZ3JleVsxXX07XHJcblx0fVxyXG5cclxuXHQmOmhvdmVyIHtcclxuXHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHJcblx0XHRzdmcge1xyXG5cdFx0XHRmaWxsOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy53YXJuaW5nWzFdfTtcclxuXHRcdH1cclxuXHR9XHJcbmA7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImZvcm1hdFZhbHVlIiwidXNlRm9ybUNvbnRleHQiLCJ1c2VXYXRjaCIsInN0eWxlZCIsIkZvcm1GaWVsZCIsIlByaWNlRmllbGQiLCJib2R5VGV4dFN0eWxlIiwiaDRUZXh0U3R5bGUiLCJJdGVtRmllbGQiLCJpZHgiLCJyZW1vdmUiLCJjb250cm9sIiwiZ2V0VmFsdWVzIiwiZGVtbyIsIm5hbWUiLCJpbnZvaWNlSXRlbSIsImNhbGN1bGF0ZVRvdGFsIiwicHJpY2UiLCJxdWFudGl0eSIsImNvbnNvbGUiLCJsb2ciLCJpc05hTiIsInVuZGVmaW5lZCIsInRvRml4ZWQiLCJ0b1N0cmluZyIsIml0ZW1Ub3RhbCIsInZhbHVlIiwiZ3JvdXBTZXBhcmF0b3IiLCJkZWNpbWFsU2NhbGUiLCJkZWNpbWFsU2VwYXJhdG9yIiwicHJlZml4IiwiV3JhcHBlciIsImZpZWxkc2V0IiwicCIsInRoZW1lIiwiUVVFUklFUyIsInRhYmxldEFuZFVwIiwiSXRlbU5hbWUiLCJRdWFudGl0eSIsIlRvdGFsV3JhcHBlciIsImRpdiIsIkNPTE9SUyIsInByaW1hcnkiLCJUb3RhbFByaWNlIiwiRGVsZXRlQnV0dG9uIiwiYnV0dG9uIiwiZ3JleSIsIndhcm5pbmciXSwic291cmNlUm9vdCI6IiJ9