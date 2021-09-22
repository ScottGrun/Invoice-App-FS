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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _FormField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormField */ "./components/Form/Fields/FormField.tsx");
/* harmony import */ var _styles_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/typography */ "./styles/typography.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\scott\\Documents\\GitHub\\Invoice-App-FS\\components\\Form\\Fields\\ItemField.tsx",
    _this = undefined,
    _s = $RefreshSig$();








var ItemField = function ItemField(_ref) {
  _s();

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
  var itemTotal = (0,react_currency_input_field__WEBPACK_IMPORTED_MODULE_1__.formatValue)({
    value: (invoiceItem === null || invoiceItem === void 0 ? void 0 : invoiceItem.quantity) * (invoiceItem === null || invoiceItem === void 0 ? void 0 : invoiceItem.price),
    groupSeparator: ',',
    decimalSeparator: '.',
    prefix: '$'
  });
  console.log(demo);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Wrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(ItemName, {
      label: "Item Name",
      name: "invoice_items[".concat(idx, "].name"),
      type: "text"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Quantity, {
      label: "Qty",
      name: "invoice_items[".concat(idx, "].quantity"),
      type: "number",
      min: 0
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(PriceWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
        children: "Price"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, {
        control: control,
        name: "invoice_items[".concat(idx, "].price"),
        render: function render(_ref2) {
          var field = _ref2.field;
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Price, {
            allowNegativeValue: false,
            decimalScale: 2,
            intlConfig: {
              locale: 'en-US',
              currency: 'GBP'
            },
            onValueChange: function onValueChange(e) {
              return field.onChange(e);
            },
            defaultValue: field.value / 100
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 7
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(TotalWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
        children: "Total"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(TotalPrice, {
        children: "itemTotal"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(DeleteButton, {
      type: "button",
      onClick: function onClick() {
        return remove(idx);
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("svg", {
        width: "13",
        height: "16",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("path", {
          d: "M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z",
          fillRule: "nonzero"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 3
  }, _this);
};

_s(ItemField, "kHJK7LgLg2gBDp0ltL/GuPJYU/U=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext, react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useWatch];
});

_c = ItemField;
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.fieldset.withConfig({
  displayName: "ItemField__Wrapper",
  componentId: "sc-twlod0-0"
})(["display:flex;flex-flow:row;flex-wrap:wrap;gap:16px;width:100%;@media ", "{gap:revert;flex-wrap:revert;}"], function (p) {
  return p.theme.QUERIES.tabletAndUp;
}); // Item Name Field

_c2 = Wrapper;
var ItemName = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__.default)(_FormField__WEBPACK_IMPORTED_MODULE_3__.FormField).withConfig({
  displayName: "ItemField__ItemName",
  componentId: "sc-twlod0-1"
})(["min-width:309px;width:100%;@media ", "{min-width:revert;width:214px;margin-right:16px;}"], function (p) {
  return p.theme.QUERIES.tabletAndUp;
}); // Quanity Field

_c3 = ItemName;
var Quantity = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__.default)(_FormField__WEBPACK_IMPORTED_MODULE_3__.FormField).withConfig({
  displayName: "ItemField__Quantity",
  componentId: "sc-twlod0-2"
})(["max-width:64px;span{text-align:center;}input{padding:0;padding-left:20px;}@media ", "{margin-right:16px;width:46px;div{justify-content:center;}input{padding:0;text-align:center;}}"], function (p) {
  return p.theme.QUERIES.tabletAndUp;
}); // Price Field

_c4 = Quantity;
var PriceWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.div.withConfig({
  displayName: "ItemField__PriceWrapper",
  componentId: "sc-twlod0-3"
})(["", ";display:flex;flex-flow:column;color:", ";max-width:100px;span{margin-bottom:10px;}"], _styles_typography__WEBPACK_IMPORTED_MODULE_4__.bodyTextStyle, function (p) {
  return p.theme.COLORS.primary[3];
});
_c5 = PriceWrapper;
var Price = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__.default)(react_currency_input_field__WEBPACK_IMPORTED_MODULE_1__.default).withConfig({
  displayName: "ItemField__Price",
  componentId: "sc-twlod0-4"
})(["", ";text-align:center;padding:0 10px;margin-right:16px;height:48px;border-radius:4px;border:solid 2px ", ";"], _styles_typography__WEBPACK_IMPORTED_MODULE_4__.h4TextStyle, function (p) {
  return p.theme.COLORS.grey[2];
}); // Total Display (styled to look like field)

_c6 = Price;
var TotalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.div.withConfig({
  displayName: "ItemField__TotalWrapper",
  componentId: "sc-twlod0-5"
})(["", ";display:flex;flex-flow:column;color:", ";max-width:60px;span{margin-bottom:10px;}@media ", "{max-width:45px;}"], _styles_typography__WEBPACK_IMPORTED_MODULE_4__.bodyTextStyle, function (p) {
  return p.theme.COLORS.primary[3];
}, function (p) {
  return p.theme.QUERIES.tabletAndUp;
});
_c7 = TotalWrapper;
var TotalPrice = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.p.withConfig({
  displayName: "ItemField__TotalPrice",
  componentId: "sc-twlod0-6"
})(["", ";display:flex;align-items:center;height:48px;"], _styles_typography__WEBPACK_IMPORTED_MODULE_4__.h4TextStyle); // Delete Item button

_c8 = TotalPrice;
var DeleteButton = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.button.withConfig({
  displayName: "ItemField__DeleteButton",
  componentId: "sc-twlod0-7"
})(["height:48px;align-self:flex-end;margin-left:auto;background-color:transparent;svg{fill:", ";}&:hover{cursor:pointer;svg{fill:", ";}}"], function (p) {
  return p.theme.COLORS.grey[1];
}, function (p) {
  return p.theme.COLORS.warning[1];
});
_c9 = DeleteButton;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;

$RefreshReg$(_c, "ItemField");
$RefreshReg$(_c2, "Wrapper");
$RefreshReg$(_c3, "ItemName");
$RefreshReg$(_c4, "Quantity");
$RefreshReg$(_c5, "PriceWrapper");
$RefreshReg$(_c6, "Price");
$RefreshReg$(_c7, "TotalWrapper");
$RefreshReg$(_c8, "TotalPrice");
$RefreshReg$(_c9, "DeleteButton");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW52b2ljZS9baWRdLjM3NGM1NGU0OTkzZTY5NTZlYmYxLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQU9PLElBQU1VLFNBQTZCLEdBQUcsU0FBaENBLFNBQWdDLE9BQXFCO0FBQUE7O0FBQUEsTUFBbEJDLEdBQWtCLFFBQWxCQSxHQUFrQjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFDakUsd0JBQStCUiwrREFBYyxFQUE3QztBQUFBLE1BQVFTLE9BQVIsbUJBQVFBLE9BQVI7QUFBQSxNQUFpQkMsU0FBakIsbUJBQWlCQSxTQUFqQjs7QUFDQSxNQUFNQyxJQUFJLEdBQUdWLHlEQUFRLENBQUM7QUFDckJRLElBQUFBLE9BQU8sRUFBUEEsT0FEcUI7QUFFckJHLElBQUFBLElBQUksRUFBRSx5QkFBa0JMLEdBQWxCLHlDQUFvREEsR0FBcEQ7QUFGZSxHQUFELENBQXJCO0FBS0EsTUFBTU0sV0FBVyxHQUFHSCxTQUFTLENBQUMsZUFBRCxDQUFULENBQTJCSCxHQUEzQixDQUFwQjtBQUVBLE1BQU1PLFNBQVMsR0FBR2hCLHVFQUFXLENBQUM7QUFDN0JpQixJQUFBQSxLQUFLLEVBQUUsQ0FBQUYsV0FBVyxTQUFYLElBQUFBLFdBQVcsV0FBWCxZQUFBQSxXQUFXLENBQUVHLFFBQWIsS0FBd0JILFdBQXhCLGFBQXdCQSxXQUF4Qix1QkFBd0JBLFdBQVcsQ0FBRUksS0FBckMsQ0FEc0I7QUFFN0JDLElBQUFBLGNBQWMsRUFBRSxHQUZhO0FBRzdCQyxJQUFBQSxnQkFBZ0IsRUFBRSxHQUhXO0FBSTdCQyxJQUFBQSxNQUFNLEVBQUU7QUFKcUIsR0FBRCxDQUE3QjtBQU9BQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVgsSUFBWjtBQUNBLHNCQUNDLDhEQUFDLE9BQUQ7QUFBQSw0QkFDQyw4REFBQyxRQUFEO0FBQVUs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ZW1GaWVsZC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ3VycmVuY3lJbnB1dCwgeyBmb3JtYXRWYWx1ZSB9IGZyb20gJ3JlYWN0LWN1cnJlbmN5LWlucHV0LWZpZWxkJztcclxuaW1wb3J0IHsgQ29udHJvbGxlciwgdXNlRm9ybUNvbnRleHQsIHVzZVdhdGNoIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBGb3JtRmllbGQgfSBmcm9tICcuL0Zvcm1GaWVsZCc7XHJcblxyXG5pbXBvcnQgeyBib2R5VGV4dFN0eWxlLCBoNFRleHRTdHlsZSB9IGZyb20gJ0Avc3R5bGVzL3R5cG9ncmFwaHknO1xyXG5cclxuaW50ZXJmYWNlIEl0ZW1GaWVsZFByb3BzIHtcclxuXHRpZHg6IG51bWJlcjtcclxuXHRyZW1vdmU6IChpbmRleD86IG51bWJlciB8IG51bWJlcltdIHwgdW5kZWZpbmVkKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSXRlbUZpZWxkOiBGQzxJdGVtRmllbGRQcm9wcz4gPSAoeyBpZHgsIHJlbW92ZSB9KSA9PiB7XHJcblx0Y29uc3QgeyBjb250cm9sLCBnZXRWYWx1ZXMgfSA9IHVzZUZvcm1Db250ZXh0KCk7XHJcblx0Y29uc3QgZGVtbyA9IHVzZVdhdGNoKHtcclxuXHRcdGNvbnRyb2wsXHJcblx0XHRuYW1lOiBbYGludm9pY2VfaXRlbXNbJHtpZHh9XS5xdWFudGl0eWAsIGBpbnZvaWNlX2l0ZW1zWyR7aWR4fV0ucHJpY2VgXSxcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgaW52b2ljZUl0ZW0gPSBnZXRWYWx1ZXMoJ2ludm9pY2VfaXRlbXMnKVtpZHhdO1xyXG5cclxuXHRjb25zdCBpdGVtVG90YWwgPSBmb3JtYXRWYWx1ZSh7XHJcblx0XHR2YWx1ZTogaW52b2ljZUl0ZW0/LnF1YW50aXR5ICogaW52b2ljZUl0ZW0/LnByaWNlLFxyXG5cdFx0Z3JvdXBTZXBhcmF0b3I6ICcsJyxcclxuXHRcdGRlY2ltYWxTZXBhcmF0b3I6ICcuJyxcclxuXHRcdHByZWZpeDogJyQnLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zb2xlLmxvZyhkZW1vKTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PFdyYXBwZXI+XHJcblx0XHRcdDxJdGVtTmFtZSBsYWJlbD1cIkl0ZW0gTmFtZVwiIG5hbWU9e2BpbnZvaWNlX2l0ZW1zWyR7aWR4fV0ubmFtZWB9IHR5cGU9XCJ0ZXh0XCIgLz5cclxuXHRcdFx0PFF1YW50aXR5IGxhYmVsPVwiUXR5XCIgbmFtZT17YGludm9pY2VfaXRlbXNbJHtpZHh9XS5xdWFudGl0eWB9IHR5cGU9XCJudW1iZXJcIiBtaW49ezB9IC8+XHJcblx0XHRcdDxQcmljZVdyYXBwZXI+XHJcblx0XHRcdFx0PHNwYW4+UHJpY2U8L3NwYW4+XHJcblx0XHRcdFx0PENvbnRyb2xsZXJcclxuXHRcdFx0XHRcdGNvbnRyb2w9e2NvbnRyb2x9XHJcblx0XHRcdFx0XHRuYW1lPXtgaW52b2ljZV9pdGVtc1ske2lkeH1dLnByaWNlYH1cclxuXHRcdFx0XHRcdHJlbmRlcj17KHsgZmllbGQgfSkgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8UHJpY2VcclxuXHRcdFx0XHRcdFx0XHRhbGxvd05lZ2F0aXZlVmFsdWU9e2ZhbHNlfVxyXG5cdFx0XHRcdFx0XHRcdGRlY2ltYWxTY2FsZT17Mn1cclxuXHRcdFx0XHRcdFx0XHRpbnRsQ29uZmlnPXt7IGxvY2FsZTogJ2VuLVVTJywgY3VycmVuY3k6ICdHQlAnIH19XHJcblx0XHRcdFx0XHRcdFx0b25WYWx1ZUNoYW5nZT17KGUpID0+IGZpZWxkLm9uQ2hhbmdlKGUpfVxyXG5cdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17ZmllbGQudmFsdWUgLyAxMDB9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvUHJpY2VXcmFwcGVyPlxyXG5cdFx0XHQ8VG90YWxXcmFwcGVyPlxyXG5cdFx0XHRcdDxzcGFuPlRvdGFsPC9zcGFuPlxyXG5cdFx0XHRcdDxUb3RhbFByaWNlPml0ZW1Ub3RhbDwvVG90YWxQcmljZT5cclxuXHRcdFx0PC9Ub3RhbFdyYXBwZXI+XHJcblx0XHRcdDxEZWxldGVCdXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHJlbW92ZShpZHgpfT5cclxuXHRcdFx0XHQ8c3ZnIHdpZHRoPVwiMTNcIiBoZWlnaHQ9XCIxNlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuXHRcdFx0XHRcdDxwYXRoXHJcblx0XHRcdFx0XHRcdGQ9XCJNMTEuNTgzIDMuNTU2djEwLjY2NmMwIC45ODItLjc5NSAxLjc3OC0xLjc3NyAxLjc3OEgyLjY5NGExLjc3NyAxLjc3NyAwIDAxLTEuNzc3LTEuNzc4VjMuNTU2aDEwLjY2NnpNOC40NzMgMGwuODg4Ljg4OWgzLjExMXYxLjc3OEguMDI4Vi44ODloMy4xMUw0LjAyOSAwaDQuNDQ0elwiXHJcblx0XHRcdFx0XHRcdGZpbGxSdWxlPVwibm9uemVyb1wiXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvc3ZnPlxyXG5cdFx0XHQ8L0RlbGV0ZUJ1dHRvbj5cclxuXHRcdDwvV3JhcHBlcj5cclxuXHQpO1xyXG59O1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5maWVsZHNldGBcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZmxvdzogcm93O1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxuXHRnYXA6IDE2cHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0Z2FwOiByZXZlcnQ7XHJcblx0XHRmbGV4LXdyYXA6IHJldmVydDtcclxuXHR9XHJcbmA7XHJcblxyXG4vLyBJdGVtIE5hbWUgRmllbGRcclxuY29uc3QgSXRlbU5hbWUgPSBzdHlsZWQoRm9ybUZpZWxkKWBcclxuXHRtaW4td2lkdGg6IDMwOXB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdG1pbi13aWR0aDogcmV2ZXJ0O1xyXG5cdFx0d2lkdGg6IDIxNHB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG5cdH1cclxuYDtcclxuXHJcbi8vIFF1YW5pdHkgRmllbGRcclxuY29uc3QgUXVhbnRpdHkgPSBzdHlsZWQoRm9ybUZpZWxkKWBcclxuXHRtYXgtd2lkdGg6IDY0cHg7XHJcblxyXG5cdHNwYW4ge1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0aW5wdXQge1xyXG5cdFx0cGFkZGluZzogMDtcclxuXHRcdHBhZGRpbmctbGVmdDogMjBweDtcclxuXHR9XHJcblxyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdG1hcmdpbi1yaWdodDogMTZweDtcclxuXHRcdHdpZHRoOiA0NnB4O1xyXG5cclxuXHRcdGRpdiB7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlucHV0IHtcclxuXHRcdFx0cGFkZGluZzogMDtcclxuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuXHJcbi8vIFByaWNlIEZpZWxkXHJcbmNvbnN0IFByaWNlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcblx0JHtib2R5VGV4dFN0eWxlfTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZmxvdzogY29sdW1uO1xyXG5cdGNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy5wcmltYXJ5WzNdfTtcclxuXHRtYXgtd2lkdGg6IDEwMHB4O1xyXG5cdHNwYW4ge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBQcmljZSA9IHN0eWxlZChDdXJyZW5jeUlucHV0KWBcclxuXHQke2g0VGV4dFN0eWxlfTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0cGFkZGluZzogMCAxMHB4O1xyXG5cdG1hcmdpbi1yaWdodDogMTZweDtcclxuXHRoZWlnaHQ6IDQ4cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdGJvcmRlcjogc29saWQgMnB4ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLmdyZXlbMl19O1xyXG5gO1xyXG5cclxuLy8gVG90YWwgRGlzcGxheSAoc3R5bGVkIHRvIGxvb2sgbGlrZSBmaWVsZClcclxuY29uc3QgVG90YWxXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuXHQke2JvZHlUZXh0U3R5bGV9O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1mbG93OiBjb2x1bW47XHJcblx0Y29sb3I6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLnByaW1hcnlbM119O1xyXG5cdG1heC13aWR0aDogNjBweDtcclxuXHRzcGFuIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLnRhYmxldEFuZFVwfSB7XHJcblx0XHRtYXgtd2lkdGg6IDQ1cHg7XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgVG90YWxQcmljZSA9IHN0eWxlZC5wYFxyXG5cdCR7aDRUZXh0U3R5bGV9O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRoZWlnaHQ6IDQ4cHg7XHJcbmA7XHJcblxyXG4vLyBEZWxldGUgSXRlbSBidXR0b25cclxuY29uc3QgRGVsZXRlQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuXHRoZWlnaHQ6IDQ4cHg7XHJcblx0YWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcblx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0c3ZnIHtcclxuXHRcdGZpbGw6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLmdyZXlbMV19O1xyXG5cdH1cclxuXHJcblx0Jjpob3ZlciB7XHJcblx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG5cdFx0c3ZnIHtcclxuXHRcdFx0ZmlsbDogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMud2FybmluZ1sxXX07XHJcblx0XHR9XHJcblx0fVxyXG5gO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDdXJyZW5jeUlucHV0IiwiZm9ybWF0VmFsdWUiLCJDb250cm9sbGVyIiwidXNlRm9ybUNvbnRleHQiLCJ1c2VXYXRjaCIsInN0eWxlZCIsIkZvcm1GaWVsZCIsImJvZHlUZXh0U3R5bGUiLCJoNFRleHRTdHlsZSIsIkl0ZW1GaWVsZCIsImlkeCIsInJlbW92ZSIsImNvbnRyb2wiLCJnZXRWYWx1ZXMiLCJkZW1vIiwibmFtZSIsImludm9pY2VJdGVtIiwiaXRlbVRvdGFsIiwidmFsdWUiLCJxdWFudGl0eSIsInByaWNlIiwiZ3JvdXBTZXBhcmF0b3IiLCJkZWNpbWFsU2VwYXJhdG9yIiwicHJlZml4IiwiY29uc29sZSIsImxvZyIsImZpZWxkIiwibG9jYWxlIiwiY3VycmVuY3kiLCJlIiwib25DaGFuZ2UiLCJXcmFwcGVyIiwiZmllbGRzZXQiLCJwIiwidGhlbWUiLCJRVUVSSUVTIiwidGFibGV0QW5kVXAiLCJJdGVtTmFtZSIsIlF1YW50aXR5IiwiUHJpY2VXcmFwcGVyIiwiZGl2IiwiQ09MT1JTIiwicHJpbWFyeSIsIlByaWNlIiwiZ3JleSIsIlRvdGFsV3JhcHBlciIsIlRvdGFsUHJpY2UiLCJEZWxldGVCdXR0b24iLCJidXR0b24iLCJ3YXJuaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==