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

  var watchedQuantityAndPrice = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useWatch)({
    control: control,
    name: ["invoice_items[".concat(idx, "].quantity"), "invoice_items[".concat(idx, "].price")]
  });
  var invoiceItem = getValues('invoice_items')[idx];

  var calculateTotal = function calculateTotal() {
    var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    if (isNaN(price) || isNaN(quantity)) {
      return '0';
    }

    return (quantity * price / 100).toFixed(2).toString();
  };

  var formattedTotal = (0,react_currency_input_field__WEBPACK_IMPORTED_MODULE_1__.formatValue)({
    value: calculateTotal(invoiceItem === null || invoiceItem === void 0 ? void 0 : invoiceItem.quantity, invoiceItem === null || invoiceItem === void 0 ? void 0 : invoiceItem.price),
    groupSeparator: ',',
    decimalScale: 2,
    decimalSeparator: '.',
    prefix: '$'
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Wrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(ItemName, {
      label: "Item Name",
      name: "invoice_items[".concat(idx, "].name"),
      type: "text"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Quantity, {
      label: "Qty",
      name: "invoice_items[".concat(idx, "].quantity"),
      type: "number",
      min: 0
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_PriceField__WEBPACK_IMPORTED_MODULE_4__.PriceField, {
      formPriceValue: (_invoiceItem$price = invoiceItem === null || invoiceItem === void 0 ? void 0 : invoiceItem.price) !== null && _invoiceItem$price !== void 0 ? _invoiceItem$price : 0,
      name: "invoice_items[".concat(idx, "].price")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(TotalWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
        children: "Total"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(TotalPrice, {
        children: formattedTotal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
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
          lineNumber: 52,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 3
  }, _this);
};

_s(ItemField, "lY7AFPzkr4g1aIjssM6iXCxy44o=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW52b2ljZS9baWRdLjZjOWYzZDg1ZTkyMTMwZTU4NWIyLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQU9PLElBQU1TLFNBQTZCLEdBQUcsU0FBaENBLFNBQWdDLE9BQXFCO0FBQUE7O0FBQUE7O0FBQUEsTUFBbEJDLEdBQWtCLFFBQWxCQSxHQUFrQjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFDakUsd0JBQStCVCwrREFBYyxFQUE3QztBQUFBLE1BQVFVLE9BQVIsbUJBQVFBLE9BQVI7QUFBQSxNQUFpQkMsU0FBakIsbUJBQWlCQSxTQUFqQjs7QUFDQSxNQUFNQyx1QkFBdUIsR0FBR1gseURBQVEsQ0FBQztBQUN4Q1MsSUFBQUEsT0FBTyxFQUFQQSxPQUR3QztBQUV4Q0csSUFBQUEsSUFBSSxFQUFFLHlCQUFrQkwsR0FBbEIseUNBQW9EQSxHQUFwRDtBQUZrQyxHQUFELENBQXhDO0FBS0EsTUFBTU0sV0FBVyxHQUFHSCxTQUFTLENBQUMsZUFBRCxDQUFULENBQTJCSCxHQUEzQixDQUFwQjs7QUFFQSxNQUFNTyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQTZCO0FBQUEsUUFBNUJDLEtBQTRCLHVFQUFwQixDQUFvQjtBQUFBLFFBQWpCQyxRQUFpQix1RUFBTixDQUFNOztBQUNuRCxRQUFJQyxLQUFLLENBQUNGLEtBQUQsQ0FBTCxJQUFnQkUsS0FBSyxDQUFDRCxRQUFELENBQXpCLEVBQXFDO0FBQ3BDLGFBQU8sR0FBUDtBQUNBOztBQUVELFdBQU8sQ0FBRUEsUUFBUSxHQUFHRCxLQUFaLEdBQXFCLEdBQXRCLEVBQTJCRyxPQUEzQixDQUFtQyxDQUFuQyxFQUFzQ0MsUUFBdEMsRUFBUDtBQUNBLEdBTkQ7O0FBUUEsTUFBTUMsY0FBYyxHQUFHdEIsdUVBQVcsQ0FBQztBQUNsQ3VCLElBQUFBLEtB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QVVSLFVBQUNULENBQUQ7QUFBQSxTQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUUMsT0FBUixDQUFnQkMsV0FBdkI7QUFBQSxDQVZRLENBQWxCO01BQU1HO0FBZU4sSUFBTUksVUFBVSxHQUFHckMsbUVBQUg7QUFBQTtBQUFBO0FBQUEsMERBQ2JJLDJEQURhLENBQWhCLEVBT0E7O01BUE1pQztBQVFOLElBQU1DLFlBQVksR0FBR3RDLHdFQUFIO0FBQUE7QUFBQTtBQUFBLDZJQU1SLFVBQUMyQixDQUFEO0FBQUEsU0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFPLE1BQVIsQ0FBZUssSUFBZixDQUFvQixDQUFwQixDQUFQO0FBQUEsQ0FOUSxFQWFQLFVBQUNiLENBQUQ7QUFBQSxTQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUU8sTUFBUixDQUFlTSxPQUFmLENBQXVCLENBQXZCLENBQVA7QUFBQSxDQWJPLENBQWxCO01BQU1IIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9ybS9GaWVsZHMvSXRlbUZpZWxkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGZvcm1hdFZhbHVlIH0gZnJvbSAncmVhY3QtY3VycmVuY3ktaW5wdXQtZmllbGQnO1xyXG5pbXBvcnQgeyB1c2VGb3JtQ29udGV4dCwgdXNlV2F0Y2ggfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCB7IEZvcm1GaWVsZCB9IGZyb20gJy4vRm9ybUZpZWxkJztcclxuaW1wb3J0IHsgUHJpY2VGaWVsZCB9IGZyb20gJy4vUHJpY2VGaWVsZCc7XHJcblxyXG5pbXBvcnQgeyBib2R5VGV4dFN0eWxlLCBoNFRleHRTdHlsZSB9IGZyb20gJ0Avc3R5bGVzL3R5cG9ncmFwaHknO1xyXG5cclxuaW50ZXJmYWNlIEl0ZW1GaWVsZFByb3BzIHtcclxuXHRpZHg6IG51bWJlcjtcclxuXHRyZW1vdmU6IChpbmRleD86IG51bWJlciB8IG51bWJlcltdIHwgdW5kZWZpbmVkKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSXRlbUZpZWxkOiBGQzxJdGVtRmllbGRQcm9wcz4gPSAoeyBpZHgsIHJlbW92ZSB9KSA9PiB7XHJcblx0Y29uc3QgeyBjb250cm9sLCBnZXRWYWx1ZXMgfSA9IHVzZUZvcm1Db250ZXh0KCk7XHJcblx0Y29uc3Qgd2F0Y2hlZFF1YW50aXR5QW5kUHJpY2UgPSB1c2VXYXRjaCh7XHJcblx0XHRjb250cm9sLFxyXG5cdFx0bmFtZTogW2BpbnZvaWNlX2l0ZW1zWyR7aWR4fV0ucXVhbnRpdHlgLCBgaW52b2ljZV9pdGVtc1ske2lkeH1dLnByaWNlYF0sXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IGludm9pY2VJdGVtID0gZ2V0VmFsdWVzKCdpbnZvaWNlX2l0ZW1zJylbaWR4XTtcclxuXHJcblx0Y29uc3QgY2FsY3VsYXRlVG90YWwgPSAocHJpY2UgPSAwLCBxdWFudGl0eSA9IDApID0+IHtcclxuXHRcdGlmIChpc05hTihwcmljZSkgfHwgaXNOYU4ocXVhbnRpdHkpKSB7XHJcblx0XHRcdHJldHVybiAnMCc7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuICgocXVhbnRpdHkgKiBwcmljZSkgLyAxMDApLnRvRml4ZWQoMikudG9TdHJpbmcoKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBmb3JtYXR0ZWRUb3RhbCA9IGZvcm1hdFZhbHVlKHtcclxuXHRcdHZhbHVlOiBjYWxjdWxhdGVUb3RhbChpbnZvaWNlSXRlbT8ucXVhbnRpdHksIGludm9pY2VJdGVtPy5wcmljZSksXHJcblx0XHRncm91cFNlcGFyYXRvcjogJywnLFxyXG5cdFx0ZGVjaW1hbFNjYWxlOiAyLFxyXG5cdFx0ZGVjaW1hbFNlcGFyYXRvcjogJy4nLFxyXG5cdFx0cHJlZml4OiAnJCcsXHJcblx0fSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8V3JhcHBlcj5cclxuXHRcdFx0PEl0ZW1OYW1lIGxhYmVsPVwiSXRlbSBOYW1lXCIgbmFtZT17YGludm9pY2VfaXRlbXNbJHtpZHh9XS5uYW1lYH0gdHlwZT1cInRleHRcIiAvPlxyXG5cdFx0XHQ8UXVhbnRpdHkgbGFiZWw9XCJRdHlcIiBuYW1lPXtgaW52b2ljZV9pdGVtc1ske2lkeH1dLnF1YW50aXR5YH0gdHlwZT1cIm51bWJlclwiIG1pbj17MH0gLz5cclxuXHRcdFx0PFByaWNlRmllbGQgZm9ybVByaWNlVmFsdWU9e2ludm9pY2VJdGVtPy5wcmljZSA/PyAwfSBuYW1lPXtgaW52b2ljZV9pdGVtc1ske2lkeH1dLnByaWNlYH0gLz5cclxuXHRcdFx0PFRvdGFsV3JhcHBlcj5cclxuXHRcdFx0XHQ8c3Bhbj5Ub3RhbDwvc3Bhbj5cclxuXHRcdFx0XHQ8VG90YWxQcmljZT57Zm9ybWF0dGVkVG90YWx9PC9Ub3RhbFByaWNlPlxyXG5cdFx0XHQ8L1RvdGFsV3JhcHBlcj5cclxuXHRcdFx0PERlbGV0ZUJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gcmVtb3ZlKGlkeCl9PlxyXG5cdFx0XHRcdDxzdmcgd2lkdGg9XCIxM1wiIGhlaWdodD1cIjE2XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG5cdFx0XHRcdFx0PHBhdGhcclxuXHRcdFx0XHRcdFx0ZD1cIk0xMS41ODMgMy41NTZ2MTAuNjY2YzAgLjk4Mi0uNzk1IDEuNzc4LTEuNzc3IDEuNzc4SDIuNjk0YTEuNzc3IDEuNzc3IDAgMDEtMS43NzctMS43NzhWMy41NTZoMTAuNjY2ek04LjQ3MyAwbC44ODguODg5aDMuMTExdjEuNzc4SC4wMjhWLjg4OWgzLjExTDQuMDI5IDBoNC40NDR6XCJcclxuXHRcdFx0XHRcdFx0ZmlsbFJ1bGU9XCJub256ZXJvXCJcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9zdmc+XHJcblx0XHRcdDwvRGVsZXRlQnV0dG9uPlxyXG5cdFx0PC9XcmFwcGVyPlxyXG5cdCk7XHJcbn07XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmZpZWxkc2V0YFxyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1mbG93OiByb3c7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdGdhcDogMTZweDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLnRhYmxldEFuZFVwfSB7XHJcblx0XHRnYXA6IHJldmVydDtcclxuXHRcdGZsZXgtd3JhcDogcmV2ZXJ0O1xyXG5cdH1cclxuYDtcclxuXHJcbi8vIEl0ZW0gTmFtZSBGaWVsZFxyXG5jb25zdCBJdGVtTmFtZSA9IHN0eWxlZChGb3JtRmllbGQpYFxyXG5cdG1pbi13aWR0aDogMzA5cHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0bWluLXdpZHRoOiByZXZlcnQ7XHJcblx0XHR3aWR0aDogMjE0cHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcblx0fVxyXG5gO1xyXG5cclxuLy8gUXVhbml0eSBGaWVsZFxyXG5jb25zdCBRdWFudGl0eSA9IHN0eWxlZChGb3JtRmllbGQpYFxyXG5cdG1heC13aWR0aDogNjRweDtcclxuXHJcblx0c3BhbiB7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHRpbnB1dCB7XHJcblx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAyMHB4O1xyXG5cdH1cclxuXHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG5cdFx0d2lkdGg6IDQ2cHg7XHJcblxyXG5cdFx0ZGl2IHtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHR9XHJcblxyXG5cdFx0aW5wdXQge1xyXG5cdFx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHR9XHJcblx0fVxyXG5gO1xyXG5cclxuLy8gVG90YWwgRGlzcGxheSAoc3R5bGVkIHRvIGxvb2sgbGlrZSBmaWVsZClcclxuY29uc3QgVG90YWxXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuXHQke2JvZHlUZXh0U3R5bGV9O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1mbG93OiBjb2x1bW47XHJcblx0Y29sb3I6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLnByaW1hcnlbM119O1xyXG5cdG1heC13aWR0aDogNjBweDtcclxuXHRzcGFuIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLnRhYmxldEFuZFVwfSB7XHJcblx0XHRtYXgtd2lkdGg6IDQ1cHg7XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgVG90YWxQcmljZSA9IHN0eWxlZC5wYFxyXG5cdCR7aDRUZXh0U3R5bGV9O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRoZWlnaHQ6IDQ4cHg7XHJcbmA7XHJcblxyXG4vLyBEZWxldGUgSXRlbSBidXR0b25cclxuY29uc3QgRGVsZXRlQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuXHRoZWlnaHQ6IDQ4cHg7XHJcblx0YWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcblx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0c3ZnIHtcclxuXHRcdGZpbGw6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLmdyZXlbMV19O1xyXG5cdH1cclxuXHJcblx0Jjpob3ZlciB7XHJcblx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG5cdFx0c3ZnIHtcclxuXHRcdFx0ZmlsbDogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMud2FybmluZ1sxXX07XHJcblx0XHR9XHJcblx0fVxyXG5gO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJmb3JtYXRWYWx1ZSIsInVzZUZvcm1Db250ZXh0IiwidXNlV2F0Y2giLCJzdHlsZWQiLCJGb3JtRmllbGQiLCJQcmljZUZpZWxkIiwiYm9keVRleHRTdHlsZSIsImg0VGV4dFN0eWxlIiwiSXRlbUZpZWxkIiwiaWR4IiwicmVtb3ZlIiwiY29udHJvbCIsImdldFZhbHVlcyIsIndhdGNoZWRRdWFudGl0eUFuZFByaWNlIiwibmFtZSIsImludm9pY2VJdGVtIiwiY2FsY3VsYXRlVG90YWwiLCJwcmljZSIsInF1YW50aXR5IiwiaXNOYU4iLCJ0b0ZpeGVkIiwidG9TdHJpbmciLCJmb3JtYXR0ZWRUb3RhbCIsInZhbHVlIiwiZ3JvdXBTZXBhcmF0b3IiLCJkZWNpbWFsU2NhbGUiLCJkZWNpbWFsU2VwYXJhdG9yIiwicHJlZml4IiwiV3JhcHBlciIsImZpZWxkc2V0IiwicCIsInRoZW1lIiwiUVVFUklFUyIsInRhYmxldEFuZFVwIiwiSXRlbU5hbWUiLCJRdWFudGl0eSIsIlRvdGFsV3JhcHBlciIsImRpdiIsIkNPTE9SUyIsInByaW1hcnkiLCJUb3RhbFByaWNlIiwiRGVsZXRlQnV0dG9uIiwiYnV0dG9uIiwiZ3JleSIsIndhcm5pbmciXSwic291cmNlUm9vdCI6IiJ9