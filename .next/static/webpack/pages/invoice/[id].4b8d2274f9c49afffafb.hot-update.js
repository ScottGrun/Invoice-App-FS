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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      itemPrice = _useState[0],
      setItemPrice = _useState[1];

  var demo = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useWatch)({
    control: control,
    name: ["invoice_items[".concat(idx, "].quantity"), "invoice_items[".concat(idx, "].price")]
  });
  var invoiceItem = getValues('invoice_items')[idx];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setItemPrice(invoiceItem === null || invoiceItem === void 0 ? void 0 : invoiceItem.price);
  }, []);
  console.log("This is the total: ".concat(itemPrice));
  var itemTotal = (0,react_currency_input_field__WEBPACK_IMPORTED_MODULE_1__.formatValue)({
    value: ((invoiceItem === null || invoiceItem === void 0 ? void 0 : invoiceItem.quantity) * (invoiceItem === null || invoiceItem === void 0 ? void 0 : invoiceItem.price)).toString(),
    groupSeparator: ',',
    decimalScale: 2,
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
      lineNumber: 41,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Quantity, {
      label: "Qty",
      name: "invoice_items[".concat(idx, "].quantity"),
      type: "number",
      min: 0
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(PriceWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
        children: "Price"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
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
              currency: 'USD'
            },
            onValueChange: function onValueChange(e) {
              return field.onChange(Math.round(e * 100));
            },
            defaultValue: field.value / 100
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 7
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(TotalWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
        children: "Total"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(TotalPrice, {
        children: itemTotal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
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
          lineNumber: 65,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 3
  }, _this);
};

_s(ItemField, "t8A/iNrGC2EaLSwX6w+YX4SeqMY=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW52b2ljZS9baWRdLjRiOGQyMjc0ZjljNDlhZmZmYWZiLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQU9PLElBQU1ZLFNBQTZCLEdBQUcsU0FBaENBLFNBQWdDLE9BQXFCO0FBQUE7O0FBQUEsTUFBbEJDLEdBQWtCLFFBQWxCQSxHQUFrQjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFDakUsd0JBQStCUiwrREFBYyxFQUE3QztBQUFBLE1BQVFTLE9BQVIsbUJBQVFBLE9BQVI7QUFBQSxNQUFpQkMsU0FBakIsbUJBQWlCQSxTQUFqQjs7QUFDQSxrQkFBa0NkLCtDQUFRLENBQUMsQ0FBRCxDQUExQztBQUFBLE1BQU9lLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBQ0EsTUFBTUMsSUFBSSxHQUFHWix5REFBUSxDQUFDO0FBQ3JCUSxJQUFBQSxPQUFPLEVBQVBBLE9BRHFCO0FBRXJCSyxJQUFBQSxJQUFJLEVBQUUseUJBQWtCUCxHQUFsQix5Q0FBb0RBLEdBQXBEO0FBRmUsR0FBRCxDQUFyQjtBQUtBLE1BQU1RLFdBQVcsR0FBR0wsU0FBUyxDQUFDLGVBQUQsQ0FBVCxDQUEyQkgsR0FBM0IsQ0FBcEI7QUFFQVosRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2ZpQixJQUFBQSxZQUFZLENBQUNHLFdBQUQsYUFBQ0EsV0FBRCx1QkFBQ0EsV0FBVyxDQUFFQyxLQUFkLENBQVo7QUFDQSxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUFDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUiw4QkFBa0NQLFNBQWxDO0FBQ0EsTUFBTVEsU0FBUyxHQUFHckIsdUVBQVcsQ0FBQztBQUM3QnNCLElBQUFBLEtBQUssRUFBRSxDQUFDLENBQUFMLFdBQVcsU0FBWCxJQUFBQSxXQUFXLFdBQVgsWUFBQUEsV0FBVyxDQUFFTSxRQUFiLEtBQXdC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REFDYkcsMkRBRGEsQ0FBaEIsRUFPQTs7TUFQTTRDO0FBUU4sSUFBTUMsWUFBWSxHQUFHaEQsd0VBQUg7QUFBQTtBQUFBO0FBQUEsNklBTVIsVUFBQ2tDLENBQUQ7QUFBQSxTQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUU8sTUFBUixDQUFlRyxJQUFmLENBQW9CLENBQXBCLENBQVA7QUFBQSxDQU5RLEVBYVAsVUFBQ1gsQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRTyxNQUFSLENBQWVRLE9BQWYsQ0FBdUIsQ0FBdkIsQ0FBUDtBQUFBLENBYk8sQ0FBbEI7TUFBTUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtL0ZpZWxkcy9JdGVtRmllbGQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEN1cnJlbmN5SW5wdXQsIHsgZm9ybWF0VmFsdWUgfSBmcm9tICdyZWFjdC1jdXJyZW5jeS1pbnB1dC1maWVsZCc7XHJcbmltcG9ydCB7IENvbnRyb2xsZXIsIHVzZUZvcm1Db250ZXh0LCB1c2VXYXRjaCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgRm9ybUZpZWxkIH0gZnJvbSAnLi9Gb3JtRmllbGQnO1xyXG5cclxuaW1wb3J0IHsgYm9keVRleHRTdHlsZSwgaDRUZXh0U3R5bGUgfSBmcm9tICdAL3N0eWxlcy90eXBvZ3JhcGh5JztcclxuXHJcbmludGVyZmFjZSBJdGVtRmllbGRQcm9wcyB7XHJcblx0aWR4OiBudW1iZXI7XHJcblx0cmVtb3ZlOiAoaW5kZXg/OiBudW1iZXIgfCBudW1iZXJbXSB8IHVuZGVmaW5lZCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEl0ZW1GaWVsZDogRkM8SXRlbUZpZWxkUHJvcHM+ID0gKHsgaWR4LCByZW1vdmUgfSkgPT4ge1xyXG5cdGNvbnN0IHsgY29udHJvbCwgZ2V0VmFsdWVzIH0gPSB1c2VGb3JtQ29udGV4dCgpO1xyXG5cdGNvbnN0IFtpdGVtUHJpY2UsIHNldEl0ZW1QcmljZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHRjb25zdCBkZW1vID0gdXNlV2F0Y2goe1xyXG5cdFx0Y29udHJvbCxcclxuXHRcdG5hbWU6IFtgaW52b2ljZV9pdGVtc1ske2lkeH1dLnF1YW50aXR5YCwgYGludm9pY2VfaXRlbXNbJHtpZHh9XS5wcmljZWBdLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBpbnZvaWNlSXRlbSA9IGdldFZhbHVlcygnaW52b2ljZV9pdGVtcycpW2lkeF07XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRzZXRJdGVtUHJpY2UoaW52b2ljZUl0ZW0/LnByaWNlKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdGNvbnNvbGUubG9nKGBUaGlzIGlzIHRoZSB0b3RhbDogJHtpdGVtUHJpY2V9YCk7XHJcblx0Y29uc3QgaXRlbVRvdGFsID0gZm9ybWF0VmFsdWUoe1xyXG5cdFx0dmFsdWU6IChpbnZvaWNlSXRlbT8ucXVhbnRpdHkgKiBpbnZvaWNlSXRlbT8ucHJpY2UpLnRvU3RyaW5nKCksXHJcblx0XHRncm91cFNlcGFyYXRvcjogJywnLFxyXG5cdFx0ZGVjaW1hbFNjYWxlOiAyLFxyXG5cdFx0ZGVjaW1hbFNlcGFyYXRvcjogJy4nLFxyXG5cdFx0cHJlZml4OiAnJCcsXHJcblx0fSk7XHJcblxyXG5cdGNvbnNvbGUubG9nKGRlbW8pO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8V3JhcHBlcj5cclxuXHRcdFx0PEl0ZW1OYW1lIGxhYmVsPVwiSXRlbSBOYW1lXCIgbmFtZT17YGludm9pY2VfaXRlbXNbJHtpZHh9XS5uYW1lYH0gdHlwZT1cInRleHRcIiAvPlxyXG5cdFx0XHQ8UXVhbnRpdHkgbGFiZWw9XCJRdHlcIiBuYW1lPXtgaW52b2ljZV9pdGVtc1ske2lkeH1dLnF1YW50aXR5YH0gdHlwZT1cIm51bWJlclwiIG1pbj17MH0gLz5cclxuXHRcdFx0PFByaWNlV3JhcHBlcj5cclxuXHRcdFx0XHQ8c3Bhbj5QcmljZTwvc3Bhbj5cclxuXHRcdFx0XHQ8Q29udHJvbGxlclxyXG5cdFx0XHRcdFx0Y29udHJvbD17Y29udHJvbH1cclxuXHRcdFx0XHRcdG5hbWU9e2BpbnZvaWNlX2l0ZW1zWyR7aWR4fV0ucHJpY2VgfVxyXG5cdFx0XHRcdFx0cmVuZGVyPXsoeyBmaWVsZCB9KSA9PiAoXHJcblx0XHRcdFx0XHRcdDxQcmljZVxyXG5cdFx0XHRcdFx0XHRcdGFsbG93TmVnYXRpdmVWYWx1ZT17ZmFsc2V9XHJcblx0XHRcdFx0XHRcdFx0ZGVjaW1hbFNjYWxlPXsyfVxyXG5cdFx0XHRcdFx0XHRcdGludGxDb25maWc9e3sgbG9jYWxlOiAnZW4tVVMnLCBjdXJyZW5jeTogJ1VTRCcgfX1cclxuXHRcdFx0XHRcdFx0XHRvblZhbHVlQ2hhbmdlPXsoZSkgPT4gZmllbGQub25DaGFuZ2UoTWF0aC5yb3VuZChlICogMTAwKSl9XHJcblx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtmaWVsZC52YWx1ZSAvIDEwMH1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9QcmljZVdyYXBwZXI+XHJcblx0XHRcdDxUb3RhbFdyYXBwZXI+XHJcblx0XHRcdFx0PHNwYW4+VG90YWw8L3NwYW4+XHJcblx0XHRcdFx0PFRvdGFsUHJpY2U+e2l0ZW1Ub3RhbH08L1RvdGFsUHJpY2U+XHJcblx0XHRcdDwvVG90YWxXcmFwcGVyPlxyXG5cdFx0XHQ8RGVsZXRlQnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiByZW1vdmUoaWR4KX0+XHJcblx0XHRcdFx0PHN2ZyB3aWR0aD1cIjEzXCIgaGVpZ2h0PVwiMTZcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcblx0XHRcdFx0XHQ8cGF0aFxyXG5cdFx0XHRcdFx0XHRkPVwiTTExLjU4MyAzLjU1NnYxMC42NjZjMCAuOTgyLS43OTUgMS43NzgtMS43NzcgMS43NzhIMi42OTRhMS43NzcgMS43NzcgMCAwMS0xLjc3Ny0xLjc3OFYzLjU1NmgxMC42NjZ6TTguNDczIDBsLjg4OC44ODloMy4xMTF2MS43NzhILjAyOFYuODg5aDMuMTFMNC4wMjkgMGg0LjQ0NHpcIlxyXG5cdFx0XHRcdFx0XHRmaWxsUnVsZT1cIm5vbnplcm9cIlxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L3N2Zz5cclxuXHRcdFx0PC9EZWxldGVCdXR0b24+XHJcblx0XHQ8L1dyYXBwZXI+XHJcblx0KTtcclxufTtcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZmllbGRzZXRgXHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWZsb3c6IHJvdztcclxuXHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0Z2FwOiAxNnB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdGdhcDogcmV2ZXJ0O1xyXG5cdFx0ZmxleC13cmFwOiByZXZlcnQ7XHJcblx0fVxyXG5gO1xyXG5cclxuLy8gSXRlbSBOYW1lIEZpZWxkXHJcbmNvbnN0IEl0ZW1OYW1lID0gc3R5bGVkKEZvcm1GaWVsZClgXHJcblx0bWluLXdpZHRoOiAzMDlweDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLnRhYmxldEFuZFVwfSB7XHJcblx0XHRtaW4td2lkdGg6IHJldmVydDtcclxuXHRcdHdpZHRoOiAyMTRweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMTZweDtcclxuXHR9XHJcbmA7XHJcblxyXG4vLyBRdWFuaXR5IEZpZWxkXHJcbmNvbnN0IFF1YW50aXR5ID0gc3R5bGVkKEZvcm1GaWVsZClgXHJcblx0bWF4LXdpZHRoOiA2NHB4O1xyXG5cclxuXHRzcGFuIHtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdGlucHV0IHtcclxuXHRcdHBhZGRpbmc6IDA7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLnRhYmxldEFuZFVwfSB7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcblx0XHR3aWR0aDogNDZweDtcclxuXHJcblx0XHRkaXYge1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdH1cclxuXHJcblx0XHRpbnB1dCB7XHJcblx0XHRcdHBhZGRpbmc6IDA7XHJcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdH1cclxuXHR9XHJcbmA7XHJcblxyXG4vLyBQcmljZSBGaWVsZFxyXG5jb25zdCBQcmljZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG5cdCR7Ym9keVRleHRTdHlsZX07XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWZsb3c6IGNvbHVtbjtcclxuXHRjb2xvcjogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMucHJpbWFyeVszXX07XHJcblx0bWF4LXdpZHRoOiAxMDBweDtcclxuXHRzcGFuIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgUHJpY2UgPSBzdHlsZWQoQ3VycmVuY3lJbnB1dClgXHJcblx0JHtoNFRleHRTdHlsZX07XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHBhZGRpbmc6IDAgMTBweDtcclxuXHRtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcblx0aGVpZ2h0OiA0OHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRib3JkZXI6IHNvbGlkIDJweCAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy5ncmV5WzJdfTtcclxuYDtcclxuXHJcbi8vIFRvdGFsIERpc3BsYXkgKHN0eWxlZCB0byBsb29rIGxpa2UgZmllbGQpXHJcbmNvbnN0IFRvdGFsV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcblx0JHtib2R5VGV4dFN0eWxlfTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZmxvdzogY29sdW1uO1xyXG5cdGNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy5wcmltYXJ5WzNdfTtcclxuXHRtYXgtd2lkdGg6IDYwcHg7XHJcblx0c3BhbiB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdH1cclxuXHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0bWF4LXdpZHRoOiA0NXB4O1xyXG5cdH1cclxuYDtcclxuXHJcbmNvbnN0IFRvdGFsUHJpY2UgPSBzdHlsZWQucGBcclxuXHQke2g0VGV4dFN0eWxlfTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0aGVpZ2h0OiA0OHB4O1xyXG5gO1xyXG5cclxuLy8gRGVsZXRlIEl0ZW0gYnV0dG9uXHJcbmNvbnN0IERlbGV0ZUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcblx0aGVpZ2h0OiA0OHB4O1xyXG5cdGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdHN2ZyB7XHJcblx0XHRmaWxsOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy5ncmV5WzFdfTtcclxuXHR9XHJcblxyXG5cdCY6aG92ZXIge1xyXG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cclxuXHRcdHN2ZyB7XHJcblx0XHRcdGZpbGw6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLndhcm5pbmdbMV19O1xyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDdXJyZW5jeUlucHV0IiwiZm9ybWF0VmFsdWUiLCJDb250cm9sbGVyIiwidXNlRm9ybUNvbnRleHQiLCJ1c2VXYXRjaCIsInN0eWxlZCIsIkZvcm1GaWVsZCIsImJvZHlUZXh0U3R5bGUiLCJoNFRleHRTdHlsZSIsIkl0ZW1GaWVsZCIsImlkeCIsInJlbW92ZSIsImNvbnRyb2wiLCJnZXRWYWx1ZXMiLCJpdGVtUHJpY2UiLCJzZXRJdGVtUHJpY2UiLCJkZW1vIiwibmFtZSIsImludm9pY2VJdGVtIiwicHJpY2UiLCJjb25zb2xlIiwibG9nIiwiaXRlbVRvdGFsIiwidmFsdWUiLCJxdWFudGl0eSIsInRvU3RyaW5nIiwiZ3JvdXBTZXBhcmF0b3IiLCJkZWNpbWFsU2NhbGUiLCJkZWNpbWFsU2VwYXJhdG9yIiwicHJlZml4IiwiZmllbGQiLCJsb2NhbGUiLCJjdXJyZW5jeSIsImUiLCJvbkNoYW5nZSIsIk1hdGgiLCJyb3VuZCIsIldyYXBwZXIiLCJmaWVsZHNldCIsInAiLCJ0aGVtZSIsIlFVRVJJRVMiLCJ0YWJsZXRBbmRVcCIsIkl0ZW1OYW1lIiwiUXVhbnRpdHkiLCJQcmljZVdyYXBwZXIiLCJkaXYiLCJDT0xPUlMiLCJwcmltYXJ5IiwiUHJpY2UiLCJncmV5IiwiVG90YWxXcmFwcGVyIiwiVG90YWxQcmljZSIsIkRlbGV0ZUJ1dHRvbiIsImJ1dHRvbiIsIndhcm5pbmciXSwic291cmNlUm9vdCI6IiJ9