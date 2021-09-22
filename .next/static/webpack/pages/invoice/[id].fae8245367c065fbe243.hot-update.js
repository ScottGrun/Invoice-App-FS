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
/* harmony import */ var _styles_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/typography */ "./styles/typography.ts");
/* harmony import */ var _utils_calculateItemTotal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/calculateItemTotal */ "./utils/calculateItemTotal.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
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
      getValues = _useFormContext.getValues,
      watch = _useFormContext.watch;

  var demo = watch(["invoice_items[".concat(idx, "].quantity"), "invoice_items[".concat(idx, "].price")]);
  console.log(demo);
  var invoiceItem = getValues('invoice_items')[idx];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Wrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(ItemName, {
      label: "Item Name",
      name: "invoice_items[".concat(idx, "].name"),
      type: "text"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Quantity, {
      label: "Qty",
      name: "invoice_items[".concat(idx, "].quantity"),
      type: "number",
      min: 0
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(PriceWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
        children: "Price"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, {
        control: control,
        name: "invoice_items[".concat(idx, "].price"),
        render: function render(_ref2) {
          var field = _ref2.field;
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Price, {
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
            lineNumber: 31,
            columnNumber: 7
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(TotalWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
        children: "Total"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(TotalPrice, {
        children: ["$", (0,_utils_calculateItemTotal__WEBPACK_IMPORTED_MODULE_5__.calculateItemTotal)(invoiceItem === null || invoiceItem === void 0 ? void 0 : invoiceItem.quantity, invoiceItem === null || invoiceItem === void 0 ? void 0 : invoiceItem.price)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
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
          lineNumber: 47,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 3
  }, _this);
};

_s(ItemField, "99VGs1Fisgw8wXh6wnU51ln4qIQ=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext];
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
}); // Price Field

_c4 = Quantity;
var PriceWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div.withConfig({
  displayName: "ItemField__PriceWrapper",
  componentId: "sc-twlod0-3"
})(["", ";display:flex;flex-flow:column;color:", ";max-width:100px;span{margin-bottom:10px;}"], _styles_typography__WEBPACK_IMPORTED_MODULE_4__.bodyTextStyle, function (p) {
  return p.theme.COLORS.primary[3];
});
_c5 = PriceWrapper;
var Price = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__.default)(react_currency_input_field__WEBPACK_IMPORTED_MODULE_1__.default).withConfig({
  displayName: "ItemField__Price",
  componentId: "sc-twlod0-4"
})(["", ";text-align:center;padding:0 10px;margin-right:16px;height:48px;border-radius:4px;border:solid 2px ", ";"], _styles_typography__WEBPACK_IMPORTED_MODULE_4__.h4TextStyle, function (p) {
  return p.theme.COLORS.grey[2];
}); // Total Display (styled to look like field)

_c6 = Price;
var TotalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div.withConfig({
  displayName: "ItemField__TotalWrapper",
  componentId: "sc-twlod0-5"
})(["", ";display:flex;flex-flow:column;color:", ";max-width:60px;span{margin-bottom:10px;}@media ", "{max-width:45px;}"], _styles_typography__WEBPACK_IMPORTED_MODULE_4__.bodyTextStyle, function (p) {
  return p.theme.COLORS.primary[3];
}, function (p) {
  return p.theme.QUERIES.tabletAndUp;
});
_c7 = TotalWrapper;
var TotalPrice = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.p.withConfig({
  displayName: "ItemField__TotalPrice",
  componentId: "sc-twlod0-6"
})(["", ";display:flex;align-items:center;height:48px;"], _styles_typography__WEBPACK_IMPORTED_MODULE_4__.h4TextStyle); // Delete Item button

_c8 = TotalPrice;
var DeleteButton = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.button.withConfig({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW52b2ljZS9baWRdLmZhZTgyNDUzNjdjMDY1ZmJlMjQzLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztBQU9PLElBQU1TLFNBQTZCLEdBQUcsU0FBaENBLFNBQWdDLE9BQXFCO0FBQUE7O0FBQUEsTUFBbEJDLEdBQWtCLFFBQWxCQSxHQUFrQjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFDakUsd0JBQXNDUiwrREFBYyxFQUFwRDtBQUFBLE1BQVFTLE9BQVIsbUJBQVFBLE9BQVI7QUFBQSxNQUFpQkMsU0FBakIsbUJBQWlCQSxTQUFqQjtBQUFBLE1BQTRCQyxLQUE1QixtQkFBNEJBLEtBQTVCOztBQUNBLE1BQU1DLElBQUksR0FBR0QsS0FBSyxDQUFDLHlCQUFrQkosR0FBbEIseUNBQW9EQSxHQUFwRCxhQUFELENBQWxCO0FBQ0FNLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0EsTUFBTUcsV0FBVyxHQUFHTCxTQUFTLENBQUMsZUFBRCxDQUFULENBQTJCSCxHQUEzQixDQUFwQjtBQUNBLHNCQUNDLDhEQUFDLE9BQUQ7QUFBQSw0QkFDQyw4REFBQyxRQUFEO0FBQVUsV0FBSyxFQUFDLFdBQWhCO0FBQTRCLFVBQUksMEJBQW1CQSxHQUFuQixXQUFoQztBQUFnRSxVQUFJLEVBQUM7QUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBRUMsOERBQUMsUUFBRDtBQUFVLFdBQUssRUFBQyxLQUFoQjtBQUFzQixVQUFJLDBCQUFtQkEsR0FBbkIsZUFBMUI7QUFBOEQsVUFBSSxFQUFDLFFBQW5FO0FBQTRFLFNBQUcsRUFBRTtBQUFqRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkQsZUFHQyw4REFBQyxZQUFEO0FBQUEsOEJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEs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QU9VLFVBQUNzQixDQUFEO0FBQUEsU0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFPLE1BQVIsQ0FBZUcsSUFBZixDQUFvQixDQUFwQixDQUFQO0FBQUEsQ0FQVixDQUFYLEVBVUE7O01BVk1EO0FBV04sSUFBTUUsWUFBWSxHQUFHckMscUVBQUg7QUFBQTtBQUFBO0FBQUEsMkhBQ2ZFLDZEQURlLEVBSVIsVUFBQ3VCLENBQUQ7QUFBQSxTQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUU8sTUFBUixDQUFlQyxPQUFmLENBQXVCLENBQXZCLENBQVA7QUFBQSxDQUpRLEVBVVIsVUFBQ1QsQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxPQUFSLENBQWdCQyxXQUF2QjtBQUFBLENBVlEsQ0FBbEI7TUFBTVM7QUFlTixJQUFNQyxVQUFVLEdBQUd0QyxtRUFBSDtBQUFBO0FBQUE7QUFBQSwwREFDYkcsMkRBRGEsQ0FBaEIsRUFPQTs7TUFQTW1DO0FBUU4sSUFBTUMsWUFBWSxHQUFHdkMsd0VBQUg7QUFBQTtBQUFBO0FBQUEsNklBTVIsVUFBQ3lCLENBQUQ7QUFBQSxTQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUU8sTUFBUixDQUFlRyxJQUFmLENBQW9CLENBQXBCLENBQVA7QUFBQSxDQU5RLEVBYVAsVUFBQ1gsQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRTyxNQUFSLENBQWVRLE9BQWYsQ0FBdUIsQ0FBdkIsQ0FBUDtBQUFBLENBYk8sQ0FBbEI7TUFBTUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtL0ZpZWxkcy9JdGVtRmllbGQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ3VycmVuY3lJbnB1dCBmcm9tICdyZWFjdC1jdXJyZW5jeS1pbnB1dC1maWVsZCc7XHJcbmltcG9ydCB7IENvbnRyb2xsZXIsIHVzZUZvcm1Db250ZXh0IH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBGb3JtRmllbGQgfSBmcm9tICcuL0Zvcm1GaWVsZCc7XHJcblxyXG5pbXBvcnQgeyBib2R5VGV4dFN0eWxlLCBoNFRleHRTdHlsZSB9IGZyb20gJ0Avc3R5bGVzL3R5cG9ncmFwaHknO1xyXG5pbXBvcnQgeyBjYWxjdWxhdGVJdGVtVG90YWwgfSBmcm9tICdAL3V0aWxzL2NhbGN1bGF0ZUl0ZW1Ub3RhbCc7XHJcblxyXG5pbnRlcmZhY2UgSXRlbUZpZWxkUHJvcHMge1xyXG5cdGlkeDogbnVtYmVyO1xyXG5cdHJlbW92ZTogKGluZGV4PzogbnVtYmVyIHwgbnVtYmVyW10gfCB1bmRlZmluZWQpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBJdGVtRmllbGQ6IEZDPEl0ZW1GaWVsZFByb3BzPiA9ICh7IGlkeCwgcmVtb3ZlIH0pID0+IHtcclxuXHRjb25zdCB7IGNvbnRyb2wsIGdldFZhbHVlcywgd2F0Y2ggfSA9IHVzZUZvcm1Db250ZXh0KCk7XHJcblx0Y29uc3QgZGVtbyA9IHdhdGNoKFtgaW52b2ljZV9pdGVtc1ske2lkeH1dLnF1YW50aXR5YCwgYGludm9pY2VfaXRlbXNbJHtpZHh9XS5wcmljZWBdKTtcclxuXHRjb25zb2xlLmxvZyhkZW1vKTtcclxuXHRjb25zdCBpbnZvaWNlSXRlbSA9IGdldFZhbHVlcygnaW52b2ljZV9pdGVtcycpW2lkeF07XHJcblx0cmV0dXJuIChcclxuXHRcdDxXcmFwcGVyPlxyXG5cdFx0XHQ8SXRlbU5hbWUgbGFiZWw9XCJJdGVtIE5hbWVcIiBuYW1lPXtgaW52b2ljZV9pdGVtc1ske2lkeH1dLm5hbWVgfSB0eXBlPVwidGV4dFwiIC8+XHJcblx0XHRcdDxRdWFudGl0eSBsYWJlbD1cIlF0eVwiIG5hbWU9e2BpbnZvaWNlX2l0ZW1zWyR7aWR4fV0ucXVhbnRpdHlgfSB0eXBlPVwibnVtYmVyXCIgbWluPXswfSAvPlxyXG5cdFx0XHQ8UHJpY2VXcmFwcGVyPlxyXG5cdFx0XHRcdDxzcGFuPlByaWNlPC9zcGFuPlxyXG5cdFx0XHRcdDxDb250cm9sbGVyXHJcblx0XHRcdFx0XHRjb250cm9sPXtjb250cm9sfVxyXG5cdFx0XHRcdFx0bmFtZT17YGludm9pY2VfaXRlbXNbJHtpZHh9XS5wcmljZWB9XHJcblx0XHRcdFx0XHRyZW5kZXI9eyh7IGZpZWxkIH0pID0+IChcclxuXHRcdFx0XHRcdFx0PFByaWNlXHJcblx0XHRcdFx0XHRcdFx0YWxsb3dOZWdhdGl2ZVZhbHVlPXtmYWxzZX1cclxuXHRcdFx0XHRcdFx0XHRkZWNpbWFsU2NhbGU9ezJ9XHJcblx0XHRcdFx0XHRcdFx0aW50bENvbmZpZz17eyBsb2NhbGU6ICdlbi1VUycsIGN1cnJlbmN5OiAnR0JQJyB9fVxyXG5cdFx0XHRcdFx0XHRcdG9uVmFsdWVDaGFuZ2U9eyhlKSA9PiBmaWVsZC5vbkNoYW5nZShlKX1cclxuXHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e2ZpZWxkLnZhbHVlIC8gMTAwfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L1ByaWNlV3JhcHBlcj5cclxuXHRcdFx0PFRvdGFsV3JhcHBlcj5cclxuXHRcdFx0XHQ8c3Bhbj5Ub3RhbDwvc3Bhbj5cclxuXHRcdFx0XHQ8VG90YWxQcmljZT4ke2NhbGN1bGF0ZUl0ZW1Ub3RhbChpbnZvaWNlSXRlbT8ucXVhbnRpdHksIGludm9pY2VJdGVtPy5wcmljZSl9PC9Ub3RhbFByaWNlPlxyXG5cdFx0XHQ8L1RvdGFsV3JhcHBlcj5cclxuXHRcdFx0PERlbGV0ZUJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gcmVtb3ZlKGlkeCl9PlxyXG5cdFx0XHRcdDxzdmcgd2lkdGg9XCIxM1wiIGhlaWdodD1cIjE2XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG5cdFx0XHRcdFx0PHBhdGhcclxuXHRcdFx0XHRcdFx0ZD1cIk0xMS41ODMgMy41NTZ2MTAuNjY2YzAgLjk4Mi0uNzk1IDEuNzc4LTEuNzc3IDEuNzc4SDIuNjk0YTEuNzc3IDEuNzc3IDAgMDEtMS43NzctMS43NzhWMy41NTZoMTAuNjY2ek04LjQ3MyAwbC44ODguODg5aDMuMTExdjEuNzc4SC4wMjhWLjg4OWgzLjExTDQuMDI5IDBoNC40NDR6XCJcclxuXHRcdFx0XHRcdFx0ZmlsbFJ1bGU9XCJub256ZXJvXCJcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9zdmc+XHJcblx0XHRcdDwvRGVsZXRlQnV0dG9uPlxyXG5cdFx0PC9XcmFwcGVyPlxyXG5cdCk7XHJcbn07XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmZpZWxkc2V0YFxyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1mbG93OiByb3c7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdGdhcDogMTZweDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLnRhYmxldEFuZFVwfSB7XHJcblx0XHRnYXA6IHJldmVydDtcclxuXHRcdGZsZXgtd3JhcDogcmV2ZXJ0O1xyXG5cdH1cclxuYDtcclxuXHJcbi8vIEl0ZW0gTmFtZSBGaWVsZFxyXG5jb25zdCBJdGVtTmFtZSA9IHN0eWxlZChGb3JtRmllbGQpYFxyXG5cdG1pbi13aWR0aDogMzA5cHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0bWluLXdpZHRoOiByZXZlcnQ7XHJcblx0XHR3aWR0aDogMjE0cHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcblx0fVxyXG5gO1xyXG5cclxuLy8gUXVhbml0eSBGaWVsZFxyXG5jb25zdCBRdWFudGl0eSA9IHN0eWxlZChGb3JtRmllbGQpYFxyXG5cdG1heC13aWR0aDogNjRweDtcclxuXHJcblx0c3BhbiB7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHRpbnB1dCB7XHJcblx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAyMHB4O1xyXG5cdH1cclxuXHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG5cdFx0d2lkdGg6IDQ2cHg7XHJcblxyXG5cdFx0ZGl2IHtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHR9XHJcblxyXG5cdFx0aW5wdXQge1xyXG5cdFx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHR9XHJcblx0fVxyXG5gO1xyXG5cclxuLy8gUHJpY2UgRmllbGRcclxuY29uc3QgUHJpY2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuXHQke2JvZHlUZXh0U3R5bGV9O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1mbG93OiBjb2x1bW47XHJcblx0Y29sb3I6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLnByaW1hcnlbM119O1xyXG5cdG1heC13aWR0aDogMTAwcHg7XHJcblx0c3BhbiB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdH1cclxuYDtcclxuXHJcbmNvbnN0IFByaWNlID0gc3R5bGVkKEN1cnJlbmN5SW5wdXQpYFxyXG5cdCR7aDRUZXh0U3R5bGV9O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRwYWRkaW5nOiAwIDEwcHg7XHJcblx0bWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG5cdGhlaWdodDogNDhweDtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0Ym9yZGVyOiBzb2xpZCAycHggJHsocCkgPT4gcC50aGVtZS5DT0xPUlMuZ3JleVsyXX07XHJcbmA7XHJcblxyXG4vLyBUb3RhbCBEaXNwbGF5IChzdHlsZWQgdG8gbG9vayBsaWtlIGZpZWxkKVxyXG5jb25zdCBUb3RhbFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG5cdCR7Ym9keVRleHRTdHlsZX07XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWZsb3c6IGNvbHVtbjtcclxuXHRjb2xvcjogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMucHJpbWFyeVszXX07XHJcblx0bWF4LXdpZHRoOiA2MHB4O1xyXG5cdHNwYW4ge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHR9XHJcblxyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdG1heC13aWR0aDogNDVweDtcclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBUb3RhbFByaWNlID0gc3R5bGVkLnBgXHJcblx0JHtoNFRleHRTdHlsZX07XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGhlaWdodDogNDhweDtcclxuYDtcclxuXHJcbi8vIERlbGV0ZSBJdGVtIGJ1dHRvblxyXG5jb25zdCBEZWxldGVCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG5cdGhlaWdodDogNDhweDtcclxuXHRhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuXHRtYXJnaW4tbGVmdDogYXV0bztcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRzdmcge1xyXG5cdFx0ZmlsbDogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMuZ3JleVsxXX07XHJcblx0fVxyXG5cclxuXHQmOmhvdmVyIHtcclxuXHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHJcblx0XHRzdmcge1xyXG5cdFx0XHRmaWxsOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy53YXJuaW5nWzFdfTtcclxuXHRcdH1cclxuXHR9XHJcbmA7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkN1cnJlbmN5SW5wdXQiLCJDb250cm9sbGVyIiwidXNlRm9ybUNvbnRleHQiLCJzdHlsZWQiLCJGb3JtRmllbGQiLCJib2R5VGV4dFN0eWxlIiwiaDRUZXh0U3R5bGUiLCJjYWxjdWxhdGVJdGVtVG90YWwiLCJJdGVtRmllbGQiLCJpZHgiLCJyZW1vdmUiLCJjb250cm9sIiwiZ2V0VmFsdWVzIiwid2F0Y2giLCJkZW1vIiwiY29uc29sZSIsImxvZyIsImludm9pY2VJdGVtIiwiZmllbGQiLCJsb2NhbGUiLCJjdXJyZW5jeSIsImUiLCJvbkNoYW5nZSIsInZhbHVlIiwicXVhbnRpdHkiLCJwcmljZSIsIldyYXBwZXIiLCJmaWVsZHNldCIsInAiLCJ0aGVtZSIsIlFVRVJJRVMiLCJ0YWJsZXRBbmRVcCIsIkl0ZW1OYW1lIiwiUXVhbnRpdHkiLCJQcmljZVdyYXBwZXIiLCJkaXYiLCJDT0xPUlMiLCJwcmltYXJ5IiwiUHJpY2UiLCJncmV5IiwiVG90YWxXcmFwcGVyIiwiVG90YWxQcmljZSIsIkRlbGV0ZUJ1dHRvbiIsImJ1dHRvbiIsIndhcm5pbmciXSwic291cmNlUm9vdCI6IiJ9