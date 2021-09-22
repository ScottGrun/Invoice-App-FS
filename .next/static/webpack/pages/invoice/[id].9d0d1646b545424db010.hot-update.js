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

  console.log(getValues);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Wrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(ItemName, {
      label: "Item Name",
      name: "invoice_items[".concat(idx, "].name"),
      type: "text"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Quantity, {
      label: "Qty",
      name: "invoice_items[".concat(idx, "].quantity"),
      type: "number",
      min: 0
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(PriceWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
        children: "Price"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
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
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(TotalWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
        children: "Total"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(TotalPrice, {
        children: "$"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
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

_s(ItemField, "tdBC9h14rZDL1KYUigI4pOEmhmQ=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW52b2ljZS9baWRdLjlkMGQxNjQ2YjU0NTQyNGRiMDEwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQVFPLElBQU1RLFNBQTZCLEdBQUcsU0FBaENBLFNBQWdDLE9BQXFCO0FBQUE7O0FBQUEsTUFBbEJDLEdBQWtCLFFBQWxCQSxHQUFrQjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFDakUsd0JBQStCUCwrREFBYyxFQUE3QztBQUFBLE1BQVFRLE9BQVIsbUJBQVFBLE9BQVI7QUFBQSxNQUFpQkMsU0FBakIsbUJBQWlCQSxTQUFqQjs7QUFFQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLFNBQVo7QUFFQSxzQkFDQyw4REFBQyxPQUFEO0FBQUEsNEJBQ0MsOERBQUMsUUFBRDtBQUFVLFdBQUssRUFBQyxXQUFoQjtBQUE0QixVQUFJLDBCQUFtQkgsR0FBbkIsV0FBaEM7QUFBZ0UsVUFBSSxFQUFDO0FBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQUVDLDhEQUFDLFFBQUQ7QUFBVSxXQUFLLEVBQUMsS0FBaEI7QUFBc0IsVUFBSSwwQkFBbUJBLEdBQW5CLGVBQTFCO0FBQThELFVBQUksRUFBQyxRQUFuRTtBQUE0RSxTQUFHLEVBQUU7QUFBakY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZELGVBR0MsOERBQUMsWUFBRDtBQUFBLDhCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFFQyw4REFBQyx1REFBRDtBQUNDLGVBQU8sRUFBRUUsT0FEVjtBQUVDLFlBQUksMEJBQW1CRixHQUFuQixZQUZMO0FBR0MsY0FBTSxFQUFFO0FBQUEsY0FBR00sS0FBSCxTQUFHQSxLQUFIO0FBQUEsOEJBQ1AsOERBQUMsS0FBRDtBQUNDLDhCQUFrQixFQUFFLEtBRHJCO0FBRUMsd0JBQVks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QUMsQ0FBQ0MsS0FBRixDQUFRQyxPQUFSLENBQWdCQyxXQUF2QjtBQUFBLENBVlEsQ0FBbEI7TUFBTVM7QUFlTixJQUFNQyxVQUFVLEdBQUdoQyxtRUFBSDtBQUFBO0FBQUE7QUFBQSwwREFDYkcsMkRBRGEsQ0FBaEIsRUFPQTs7TUFQTTZCO0FBUU4sSUFBTUMsWUFBWSxHQUFHakMsd0VBQUg7QUFBQTtBQUFBO0FBQUEsNklBTVIsVUFBQ21CLENBQUQ7QUFBQSxTQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUU8sTUFBUixDQUFlRyxJQUFmLENBQW9CLENBQXBCLENBQVA7QUFBQSxDQU5RLEVBYVAsVUFBQ1gsQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRTyxNQUFSLENBQWVRLE9BQWYsQ0FBdUIsQ0FBdkIsQ0FBUDtBQUFBLENBYk8sQ0FBbEI7TUFBTUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtL0ZpZWxkcy9JdGVtRmllbGQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ3VycmVuY3lJbnB1dCBmcm9tICdyZWFjdC1jdXJyZW5jeS1pbnB1dC1maWVsZCc7XHJcbmltcG9ydCB7IENvbnRyb2xsZXIsIHVzZUZvcm1Db250ZXh0IH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBGb3JtRmllbGQgfSBmcm9tICcuL0Zvcm1GaWVsZCc7XHJcblxyXG5pbXBvcnQgeyBib2R5VGV4dFN0eWxlLCBoNFRleHRTdHlsZSB9IGZyb20gJ0Avc3R5bGVzL3R5cG9ncmFwaHknO1xyXG5pbXBvcnQgeyBjYWxjdWxhdGVJdGVtVG90YWwgfSBmcm9tICdAL3V0aWxzL2NhbGN1bGF0ZUl0ZW1Ub3RhbCc7XHJcblxyXG5pbnRlcmZhY2UgSXRlbUZpZWxkUHJvcHMge1xyXG5cdGlkeDogbnVtYmVyO1xyXG5cdHJlbW92ZTogKGluZGV4PzogbnVtYmVyIHwgbnVtYmVyW10gfCB1bmRlZmluZWQpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBJdGVtRmllbGQ6IEZDPEl0ZW1GaWVsZFByb3BzPiA9ICh7IGlkeCwgcmVtb3ZlIH0pID0+IHtcclxuXHRjb25zdCB7IGNvbnRyb2wsIGdldFZhbHVlcyB9ID0gdXNlRm9ybUNvbnRleHQoKTtcclxuXHJcblx0Y29uc29sZS5sb2coZ2V0VmFsdWVzKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxXcmFwcGVyPlxyXG5cdFx0XHQ8SXRlbU5hbWUgbGFiZWw9XCJJdGVtIE5hbWVcIiBuYW1lPXtgaW52b2ljZV9pdGVtc1ske2lkeH1dLm5hbWVgfSB0eXBlPVwidGV4dFwiIC8+XHJcblx0XHRcdDxRdWFudGl0eSBsYWJlbD1cIlF0eVwiIG5hbWU9e2BpbnZvaWNlX2l0ZW1zWyR7aWR4fV0ucXVhbnRpdHlgfSB0eXBlPVwibnVtYmVyXCIgbWluPXswfSAvPlxyXG5cdFx0XHQ8UHJpY2VXcmFwcGVyPlxyXG5cdFx0XHRcdDxzcGFuPlByaWNlPC9zcGFuPlxyXG5cdFx0XHRcdDxDb250cm9sbGVyXHJcblx0XHRcdFx0XHRjb250cm9sPXtjb250cm9sfVxyXG5cdFx0XHRcdFx0bmFtZT17YGludm9pY2VfaXRlbXNbJHtpZHh9XS5wcmljZWB9XHJcblx0XHRcdFx0XHRyZW5kZXI9eyh7IGZpZWxkIH0pID0+IChcclxuXHRcdFx0XHRcdFx0PFByaWNlXHJcblx0XHRcdFx0XHRcdFx0YWxsb3dOZWdhdGl2ZVZhbHVlPXtmYWxzZX1cclxuXHRcdFx0XHRcdFx0XHRkZWNpbWFsU2NhbGU9ezJ9XHJcblx0XHRcdFx0XHRcdFx0aW50bENvbmZpZz17eyBsb2NhbGU6ICdlbi1VUycsIGN1cnJlbmN5OiAnR0JQJyB9fVxyXG5cdFx0XHRcdFx0XHRcdG9uVmFsdWVDaGFuZ2U9eyhlKSA9PiBmaWVsZC5vbkNoYW5nZShlKX1cclxuXHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e2ZpZWxkLnZhbHVlIC8gMTAwfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L1ByaWNlV3JhcHBlcj5cclxuXHRcdFx0PFRvdGFsV3JhcHBlcj5cclxuXHRcdFx0XHQ8c3Bhbj5Ub3RhbDwvc3Bhbj5cclxuXHRcdFx0XHQ8VG90YWxQcmljZT4ke308L1RvdGFsUHJpY2U+XHJcblx0XHRcdDwvVG90YWxXcmFwcGVyPlxyXG5cdFx0XHQ8RGVsZXRlQnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiByZW1vdmUoaWR4KX0+XHJcblx0XHRcdFx0PHN2ZyB3aWR0aD1cIjEzXCIgaGVpZ2h0PVwiMTZcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcblx0XHRcdFx0XHQ8cGF0aFxyXG5cdFx0XHRcdFx0XHRkPVwiTTExLjU4MyAzLjU1NnYxMC42NjZjMCAuOTgyLS43OTUgMS43NzgtMS43NzcgMS43NzhIMi42OTRhMS43NzcgMS43NzcgMCAwMS0xLjc3Ny0xLjc3OFYzLjU1NmgxMC42NjZ6TTguNDczIDBsLjg4OC44ODloMy4xMTF2MS43NzhILjAyOFYuODg5aDMuMTFMNC4wMjkgMGg0LjQ0NHpcIlxyXG5cdFx0XHRcdFx0XHRmaWxsUnVsZT1cIm5vbnplcm9cIlxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L3N2Zz5cclxuXHRcdFx0PC9EZWxldGVCdXR0b24+XHJcblx0XHQ8L1dyYXBwZXI+XHJcblx0KTtcclxufTtcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZmllbGRzZXRgXHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWZsb3c6IHJvdztcclxuXHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0Z2FwOiAxNnB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdGdhcDogcmV2ZXJ0O1xyXG5cdFx0ZmxleC13cmFwOiByZXZlcnQ7XHJcblx0fVxyXG5gO1xyXG5cclxuLy8gSXRlbSBOYW1lIEZpZWxkXHJcbmNvbnN0IEl0ZW1OYW1lID0gc3R5bGVkKEZvcm1GaWVsZClgXHJcblx0bWluLXdpZHRoOiAzMDlweDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLnRhYmxldEFuZFVwfSB7XHJcblx0XHRtaW4td2lkdGg6IHJldmVydDtcclxuXHRcdHdpZHRoOiAyMTRweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMTZweDtcclxuXHR9XHJcbmA7XHJcblxyXG4vLyBRdWFuaXR5IEZpZWxkXHJcbmNvbnN0IFF1YW50aXR5ID0gc3R5bGVkKEZvcm1GaWVsZClgXHJcblx0bWF4LXdpZHRoOiA2NHB4O1xyXG5cclxuXHRzcGFuIHtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdGlucHV0IHtcclxuXHRcdHBhZGRpbmc6IDA7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLnRhYmxldEFuZFVwfSB7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcblx0XHR3aWR0aDogNDZweDtcclxuXHJcblx0XHRkaXYge1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdH1cclxuXHJcblx0XHRpbnB1dCB7XHJcblx0XHRcdHBhZGRpbmc6IDA7XHJcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdH1cclxuXHR9XHJcbmA7XHJcblxyXG4vLyBQcmljZSBGaWVsZFxyXG5jb25zdCBQcmljZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG5cdCR7Ym9keVRleHRTdHlsZX07XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWZsb3c6IGNvbHVtbjtcclxuXHRjb2xvcjogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMucHJpbWFyeVszXX07XHJcblx0bWF4LXdpZHRoOiAxMDBweDtcclxuXHRzcGFuIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgUHJpY2UgPSBzdHlsZWQoQ3VycmVuY3lJbnB1dClgXHJcblx0JHtoNFRleHRTdHlsZX07XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHBhZGRpbmc6IDAgMTBweDtcclxuXHRtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcblx0aGVpZ2h0OiA0OHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRib3JkZXI6IHNvbGlkIDJweCAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy5ncmV5WzJdfTtcclxuYDtcclxuXHJcbi8vIFRvdGFsIERpc3BsYXkgKHN0eWxlZCB0byBsb29rIGxpa2UgZmllbGQpXHJcbmNvbnN0IFRvdGFsV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcblx0JHtib2R5VGV4dFN0eWxlfTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZmxvdzogY29sdW1uO1xyXG5cdGNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy5wcmltYXJ5WzNdfTtcclxuXHRtYXgtd2lkdGg6IDYwcHg7XHJcblx0c3BhbiB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdH1cclxuXHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0bWF4LXdpZHRoOiA0NXB4O1xyXG5cdH1cclxuYDtcclxuXHJcbmNvbnN0IFRvdGFsUHJpY2UgPSBzdHlsZWQucGBcclxuXHQke2g0VGV4dFN0eWxlfTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0aGVpZ2h0OiA0OHB4O1xyXG5gO1xyXG5cclxuLy8gRGVsZXRlIEl0ZW0gYnV0dG9uXHJcbmNvbnN0IERlbGV0ZUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcblx0aGVpZ2h0OiA0OHB4O1xyXG5cdGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdHN2ZyB7XHJcblx0XHRmaWxsOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy5ncmV5WzFdfTtcclxuXHR9XHJcblxyXG5cdCY6aG92ZXIge1xyXG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cclxuXHRcdHN2ZyB7XHJcblx0XHRcdGZpbGw6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLndhcm5pbmdbMV19O1xyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ3VycmVuY3lJbnB1dCIsIkNvbnRyb2xsZXIiLCJ1c2VGb3JtQ29udGV4dCIsInN0eWxlZCIsIkZvcm1GaWVsZCIsImJvZHlUZXh0U3R5bGUiLCJoNFRleHRTdHlsZSIsIkl0ZW1GaWVsZCIsImlkeCIsInJlbW92ZSIsImNvbnRyb2wiLCJnZXRWYWx1ZXMiLCJjb25zb2xlIiwibG9nIiwiZmllbGQiLCJsb2NhbGUiLCJjdXJyZW5jeSIsImUiLCJvbkNoYW5nZSIsInZhbHVlIiwiV3JhcHBlciIsImZpZWxkc2V0IiwicCIsInRoZW1lIiwiUVVFUklFUyIsInRhYmxldEFuZFVwIiwiSXRlbU5hbWUiLCJRdWFudGl0eSIsIlByaWNlV3JhcHBlciIsImRpdiIsIkNPTE9SUyIsInByaW1hcnkiLCJQcmljZSIsImdyZXkiLCJUb3RhbFdyYXBwZXIiLCJUb3RhbFByaWNlIiwiRGVsZXRlQnV0dG9uIiwiYnV0dG9uIiwid2FybmluZyJdLCJzb3VyY2VSb290IjoiIn0=