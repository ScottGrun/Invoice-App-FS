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
    value: ((invoiceItem === null || invoiceItem === void 0 ? void 0 : invoiceItem.quantity) * (invoiceItem === null || invoiceItem === void 0 ? void 0 : invoiceItem.price) / 100).toFixed(2).toString(),
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
      lineNumber: 34,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Quantity, {
      label: "Qty",
      name: "invoice_items[".concat(idx, "].quantity"),
      type: "number",
      min: 0
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_PriceField__WEBPACK_IMPORTED_MODULE_4__.PriceField, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(TotalWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
        children: "Total"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(TotalPrice, {
        children: itemTotal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
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
          lineNumber: 43,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
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


/***/ }),

/***/ "./components/Form/Fields/PriceField.tsx":
/*!***********************************************!*\
  !*** ./components/Form/Fields/PriceField.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PriceField": function() { return /* binding */ PriceField; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_currency_input_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-currency-input-field */ "./node_modules/react-currency-input-field/dist/index.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/typography */ "./styles/typography.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\scott\\Documents\\GitHub\\Invoice-App-FS\\components\\Form\\Fields\\PriceField.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var PriceField = function PriceField(_ref) {
  _s();

  var formPriceValue = _ref.formPriceValue;

  var _useFormContext = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)(),
      control = _useFormContext.control;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      price = _useState[0],
      setPrice = _useState[1];

  useEffect(function () {
    setPrice((formPriceValue / 100).toFixed(2));
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Wrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
      children: "Price"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, {
      control: control,
      name: "invoice_items[".concat(idx, "].price"),
      render: function render(_ref2) {
        var field = _ref2.field;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Price, {
          allowNegativeValue: false,
          decimalScale: 2,
          intlConfig: {
            locale: 'en-US',
            currency: 'USD'
          },
          onValueChange: function onValueChange(e) {
            field.onChange(Math.round(e * 100));
            setPrice(e);
          },
          defaultValue: field.value / 100,
          value: price
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 6
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 3
  }, _this);
}; // Price Field

_s(PriceField, "kzsH4gkW4RJiSqo7YAWkIaNNXZY=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext];
});

_c = PriceField;
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "PriceField__Wrapper",
  componentId: "sc-1ebhed6-0"
})(["", ";display:flex;flex-flow:column;color:", ";max-width:100px;span{margin-bottom:10px;}"], _styles_typography__WEBPACK_IMPORTED_MODULE_3__.bodyTextStyle, function (p) {
  return p.theme.COLORS.primary[3];
});
_c2 = Wrapper;
var Price = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.default)(react_currency_input_field__WEBPACK_IMPORTED_MODULE_1__.default).withConfig({
  displayName: "PriceField__Price",
  componentId: "sc-1ebhed6-1"
})(["", ";text-align:center;padding:0 10px;margin-right:16px;height:48px;border-radius:4px;border:solid 2px ", ";"], _styles_typography__WEBPACK_IMPORTED_MODULE_3__.h4TextStyle, function (p) {
  return p.theme.COLORS.grey[2];
});
_c3 = Price;

var _c, _c2, _c3;

$RefreshReg$(_c, "PriceField");
$RefreshReg$(_c2, "Wrapper");
$RefreshReg$(_c3, "Price");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW52b2ljZS9baWRdLjI1NmM2ZjMwYWE5MDFhMWE3OGFmLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQU9PLElBQU1TLFNBQTZCLEdBQUcsU0FBaENBLFNBQWdDLE9BQXFCO0FBQUE7O0FBQUEsTUFBbEJDLEdBQWtCLFFBQWxCQSxHQUFrQjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFDakUsd0JBQStCVCwrREFBYyxFQUE3QztBQUFBLE1BQVFVLE9BQVIsbUJBQVFBLE9BQVI7QUFBQSxNQUFpQkMsU0FBakIsbUJBQWlCQSxTQUFqQjs7QUFDQSxNQUFNQyxJQUFJLEdBQUdYLHlEQUFRLENBQUM7QUFDckJTLElBQUFBLE9BQU8sRUFBUEEsT0FEcUI7QUFFckJHLElBQUFBLElBQUksRUFBRSx5QkFBa0JMLEdBQWxCLHlDQUFvREEsR0FBcEQ7QUFGZSxHQUFELENBQXJCO0FBSUEsTUFBTU0sV0FBVyxHQUFHSCxTQUFTLENBQUMsZUFBRCxDQUFULENBQTJCSCxHQUEzQixDQUFwQjtBQUVBLE1BQU1PLFNBQVMsR0FBR2hCLHVFQUFXLENBQUM7QUFDN0JpQixJQUFBQSxLQUFLLEVBQUUsQ0FBRSxDQUFBRixXQUFXLFNBQVgsSUFBQUEsV0FBVyxXQUFYLFlBQUFBLFdBQVcsQ0FBRUcsUUFBYixLQUF3QkgsV0FBeEIsYUFBd0JBLFdBQXhCLHVCQUF3QkEsV0FBVyxDQUFFSSxLQUFyQyxDQUFELEdBQStDLEdBQWhELEVBQXFEQyxPQUFyRCxDQUE2RCxDQUE3RCxFQUFnRUMsUUFBaEUsRUFEc0I7QUFFN0JDLElBQUFBLGNBQWMsRUFBRSxHQUZhO0FBRzdCQyxJQUFBQSxZQUFZLEVBQUUsQ0FIZTtBQUk3QkMsSUFBQUEsZ0JBQWdCLEVBQUUsR0FKVztBQUs3QkMsSUFBQUEsTUFBTSxFQUFFO0FBTHFCLEdBQUQs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QUNJLFFBQU4sQ0FBZUMsSUFBSSxDQUFDQyxLQUFMLENBQVdILENBQUMsR0FBRyxHQUFmLENBQWY7QUFDQUwsWUFBQUEsUUFBUSxDQUFDSyxDQUFELENBQVI7QUFDQSxXQVBGO0FBUUMsc0JBQVksRUFBRUgsS0FBSyxDQUFDaEMsS0FBTixHQUFjLEdBUjdCO0FBU0MsZUFBSyxFQUFFRTtBQVRSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRE87QUFBQTtBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQXNCQSxDQTlCTSxFQWdDUDs7R0FoQ2FkO1VBQ1FKOzs7S0FEUkk7QUFpQ2IsSUFBTXFCLE9BQU8sR0FBR3ZCLHFFQUFIO0FBQUE7QUFBQTtBQUFBLGdHQUNWRyw2REFEVSxFQUlILFVBQUNzQixDQUFEO0FBQUEsU0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFPLE1BQVIsQ0FBZUMsT0FBZixDQUF1QixDQUF2QixDQUFQO0FBQUEsQ0FKRyxDQUFiO01BQU1YO0FBV04sSUFBTThCLEtBQUssR0FBR3JELDBEQUFNLENBQUN5QywrREFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLHFIQUNSckMsMkRBRFEsRUFPVSxVQUFDcUIsQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRTyxNQUFSLENBQWVLLElBQWYsQ0FBb0IsQ0FBcEIsQ0FBUDtBQUFBLENBUFYsQ0FBWDtNQUFNZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zvcm0vRmllbGRzL0l0ZW1GaWVsZC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9ybS9GaWVsZHMvUHJpY2VGaWVsZC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ3VycmVuY3lJbnB1dCwgeyBmb3JtYXRWYWx1ZSB9IGZyb20gJ3JlYWN0LWN1cnJlbmN5LWlucHV0LWZpZWxkJztcclxuaW1wb3J0IHsgQ29udHJvbGxlciwgdXNlRm9ybUNvbnRleHQsIHVzZVdhdGNoIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBGb3JtRmllbGQgfSBmcm9tICcuL0Zvcm1GaWVsZCc7XHJcbmltcG9ydCB7IFByaWNlRmllbGQgfSBmcm9tICcuL1ByaWNlRmllbGQnO1xyXG5cclxuaW1wb3J0IHsgYm9keVRleHRTdHlsZSwgaDRUZXh0U3R5bGUgfSBmcm9tICdAL3N0eWxlcy90eXBvZ3JhcGh5JztcclxuXHJcbmludGVyZmFjZSBJdGVtRmllbGRQcm9wcyB7XHJcblx0aWR4OiBudW1iZXI7XHJcblx0cmVtb3ZlOiAoaW5kZXg/OiBudW1iZXIgfCBudW1iZXJbXSB8IHVuZGVmaW5lZCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEl0ZW1GaWVsZDogRkM8SXRlbUZpZWxkUHJvcHM+ID0gKHsgaWR4LCByZW1vdmUgfSkgPT4ge1xyXG5cdGNvbnN0IHsgY29udHJvbCwgZ2V0VmFsdWVzIH0gPSB1c2VGb3JtQ29udGV4dCgpO1xyXG5cdGNvbnN0IGRlbW8gPSB1c2VXYXRjaCh7XHJcblx0XHRjb250cm9sLFxyXG5cdFx0bmFtZTogW2BpbnZvaWNlX2l0ZW1zWyR7aWR4fV0ucXVhbnRpdHlgLCBgaW52b2ljZV9pdGVtc1ske2lkeH1dLnByaWNlYF0sXHJcblx0fSk7XHJcblx0Y29uc3QgaW52b2ljZUl0ZW0gPSBnZXRWYWx1ZXMoJ2ludm9pY2VfaXRlbXMnKVtpZHhdO1xyXG5cclxuXHRjb25zdCBpdGVtVG90YWwgPSBmb3JtYXRWYWx1ZSh7XHJcblx0XHR2YWx1ZTogKChpbnZvaWNlSXRlbT8ucXVhbnRpdHkgKiBpbnZvaWNlSXRlbT8ucHJpY2UpIC8gMTAwKS50b0ZpeGVkKDIpLnRvU3RyaW5nKCksXHJcblx0XHRncm91cFNlcGFyYXRvcjogJywnLFxyXG5cdFx0ZGVjaW1hbFNjYWxlOiAyLFxyXG5cdFx0ZGVjaW1hbFNlcGFyYXRvcjogJy4nLFxyXG5cdFx0cHJlZml4OiAnJCcsXHJcblx0fSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8V3JhcHBlcj5cclxuXHRcdFx0PEl0ZW1OYW1lIGxhYmVsPVwiSXRlbSBOYW1lXCIgbmFtZT17YGludm9pY2VfaXRlbXNbJHtpZHh9XS5uYW1lYH0gdHlwZT1cInRleHRcIiAvPlxyXG5cdFx0XHQ8UXVhbnRpdHkgbGFiZWw9XCJRdHlcIiBuYW1lPXtgaW52b2ljZV9pdGVtc1ske2lkeH1dLnF1YW50aXR5YH0gdHlwZT1cIm51bWJlclwiIG1pbj17MH0gLz5cclxuXHRcdFx0PFByaWNlRmllbGQgLz5cclxuXHRcdFx0PFRvdGFsV3JhcHBlcj5cclxuXHRcdFx0XHQ8c3Bhbj5Ub3RhbDwvc3Bhbj5cclxuXHRcdFx0XHQ8VG90YWxQcmljZT57aXRlbVRvdGFsfTwvVG90YWxQcmljZT5cclxuXHRcdFx0PC9Ub3RhbFdyYXBwZXI+XHJcblx0XHRcdDxEZWxldGVCdXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHJlbW92ZShpZHgpfT5cclxuXHRcdFx0XHQ8c3ZnIHdpZHRoPVwiMTNcIiBoZWlnaHQ9XCIxNlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuXHRcdFx0XHRcdDxwYXRoXHJcblx0XHRcdFx0XHRcdGQ9XCJNMTEuNTgzIDMuNTU2djEwLjY2NmMwIC45ODItLjc5NSAxLjc3OC0xLjc3NyAxLjc3OEgyLjY5NGExLjc3NyAxLjc3NyAwIDAxLTEuNzc3LTEuNzc4VjMuNTU2aDEwLjY2NnpNOC40NzMgMGwuODg4Ljg4OWgzLjExMXYxLjc3OEguMDI4Vi44ODloMy4xMUw0LjAyOSAwaDQuNDQ0elwiXHJcblx0XHRcdFx0XHRcdGZpbGxSdWxlPVwibm9uemVyb1wiXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvc3ZnPlxyXG5cdFx0XHQ8L0RlbGV0ZUJ1dHRvbj5cclxuXHRcdDwvV3JhcHBlcj5cclxuXHQpO1xyXG59O1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5maWVsZHNldGBcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZmxvdzogcm93O1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxuXHRnYXA6IDE2cHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0Z2FwOiByZXZlcnQ7XHJcblx0XHRmbGV4LXdyYXA6IHJldmVydDtcclxuXHR9XHJcbmA7XHJcblxyXG4vLyBJdGVtIE5hbWUgRmllbGRcclxuY29uc3QgSXRlbU5hbWUgPSBzdHlsZWQoRm9ybUZpZWxkKWBcclxuXHRtaW4td2lkdGg6IDMwOXB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdG1pbi13aWR0aDogcmV2ZXJ0O1xyXG5cdFx0d2lkdGg6IDIxNHB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG5cdH1cclxuYDtcclxuXHJcbi8vIFF1YW5pdHkgRmllbGRcclxuY29uc3QgUXVhbnRpdHkgPSBzdHlsZWQoRm9ybUZpZWxkKWBcclxuXHRtYXgtd2lkdGg6IDY0cHg7XHJcblxyXG5cdHNwYW4ge1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0aW5wdXQge1xyXG5cdFx0cGFkZGluZzogMDtcclxuXHRcdHBhZGRpbmctbGVmdDogMjBweDtcclxuXHR9XHJcblxyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdG1hcmdpbi1yaWdodDogMTZweDtcclxuXHRcdHdpZHRoOiA0NnB4O1xyXG5cclxuXHRcdGRpdiB7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlucHV0IHtcclxuXHRcdFx0cGFkZGluZzogMDtcclxuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuXHJcbi8vIFRvdGFsIERpc3BsYXkgKHN0eWxlZCB0byBsb29rIGxpa2UgZmllbGQpXHJcbmNvbnN0IFRvdGFsV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcblx0JHtib2R5VGV4dFN0eWxlfTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZmxvdzogY29sdW1uO1xyXG5cdGNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy5wcmltYXJ5WzNdfTtcclxuXHRtYXgtd2lkdGg6IDYwcHg7XHJcblx0c3BhbiB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdH1cclxuXHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0bWF4LXdpZHRoOiA0NXB4O1xyXG5cdH1cclxuYDtcclxuXHJcbmNvbnN0IFRvdGFsUHJpY2UgPSBzdHlsZWQucGBcclxuXHQke2g0VGV4dFN0eWxlfTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0aGVpZ2h0OiA0OHB4O1xyXG5gO1xyXG5cclxuLy8gRGVsZXRlIEl0ZW0gYnV0dG9uXHJcbmNvbnN0IERlbGV0ZUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcblx0aGVpZ2h0OiA0OHB4O1xyXG5cdGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdHN2ZyB7XHJcblx0XHRmaWxsOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy5ncmV5WzFdfTtcclxuXHR9XHJcblxyXG5cdCY6aG92ZXIge1xyXG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cclxuXHRcdHN2ZyB7XHJcblx0XHRcdGZpbGw6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLndhcm5pbmdbMV19O1xyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEN1cnJlbmN5SW5wdXQgZnJvbSAncmVhY3QtY3VycmVuY3ktaW5wdXQtZmllbGQnO1xyXG5pbXBvcnQgeyBDb250cm9sbGVyLCB1c2VGb3JtQ29udGV4dCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgYm9keVRleHRTdHlsZSwgaDRUZXh0U3R5bGUgfSBmcm9tICdAL3N0eWxlcy90eXBvZ3JhcGh5JztcclxuXHJcbmludGVyZmFjZSBQcmljZUZpZWxkUHJvcHMge1xyXG5cdGZvcm1QaXJjZVZhbHVlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQcmljZUZpZWxkOiBGQzxQcmljZUZpZWxkUHJvcHM+ID0gKHsgZm9ybVByaWNlVmFsdWUgfSkgPT4ge1xyXG5cdGNvbnN0IHsgY29udHJvbCB9ID0gdXNlRm9ybUNvbnRleHQoKTtcclxuXHRjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0c2V0UHJpY2UoKGZvcm1QcmljZVZhbHVlIC8gMTAwKS50b0ZpeGVkKDIpKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8V3JhcHBlcj5cclxuXHRcdFx0PHNwYW4+UHJpY2U8L3NwYW4+XHJcblx0XHRcdDxDb250cm9sbGVyXHJcblx0XHRcdFx0Y29udHJvbD17Y29udHJvbH1cclxuXHRcdFx0XHRuYW1lPXtgaW52b2ljZV9pdGVtc1ske2lkeH1dLnByaWNlYH1cclxuXHRcdFx0XHRyZW5kZXI9eyh7IGZpZWxkIH0pID0+IChcclxuXHRcdFx0XHRcdDxQcmljZVxyXG5cdFx0XHRcdFx0XHRhbGxvd05lZ2F0aXZlVmFsdWU9e2ZhbHNlfVxyXG5cdFx0XHRcdFx0XHRkZWNpbWFsU2NhbGU9ezJ9XHJcblx0XHRcdFx0XHRcdGludGxDb25maWc9e3sgbG9jYWxlOiAnZW4tVVMnLCBjdXJyZW5jeTogJ1VTRCcgfX1cclxuXHRcdFx0XHRcdFx0b25WYWx1ZUNoYW5nZT17KGUpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRmaWVsZC5vbkNoYW5nZShNYXRoLnJvdW5kKGUgKiAxMDApKTtcclxuXHRcdFx0XHRcdFx0XHRzZXRQcmljZShlKTtcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtmaWVsZC52YWx1ZSAvIDEwMH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9e3ByaWNlfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQpfVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9XcmFwcGVyPlxyXG5cdCk7XHJcbn07XHJcblxyXG4vLyBQcmljZSBGaWVsZFxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuXHQke2JvZHlUZXh0U3R5bGV9O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1mbG93OiBjb2x1bW47XHJcblx0Y29sb3I6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLnByaW1hcnlbM119O1xyXG5cdG1heC13aWR0aDogMTAwcHg7XHJcblx0c3BhbiB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdH1cclxuYDtcclxuXHJcbmNvbnN0IFByaWNlID0gc3R5bGVkKEN1cnJlbmN5SW5wdXQpYFxyXG5cdCR7aDRUZXh0U3R5bGV9O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRwYWRkaW5nOiAwIDEwcHg7XHJcblx0bWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG5cdGhlaWdodDogNDhweDtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0Ym9yZGVyOiBzb2xpZCAycHggJHsocCkgPT4gcC50aGVtZS5DT0xPUlMuZ3JleVsyXX07XHJcbmA7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImZvcm1hdFZhbHVlIiwidXNlRm9ybUNvbnRleHQiLCJ1c2VXYXRjaCIsInN0eWxlZCIsIkZvcm1GaWVsZCIsIlByaWNlRmllbGQiLCJib2R5VGV4dFN0eWxlIiwiaDRUZXh0U3R5bGUiLCJJdGVtRmllbGQiLCJpZHgiLCJyZW1vdmUiLCJjb250cm9sIiwiZ2V0VmFsdWVzIiwiZGVtbyIsIm5hbWUiLCJpbnZvaWNlSXRlbSIsIml0ZW1Ub3RhbCIsInZhbHVlIiwicXVhbnRpdHkiLCJwcmljZSIsInRvRml4ZWQiLCJ0b1N0cmluZyIsImdyb3VwU2VwYXJhdG9yIiwiZGVjaW1hbFNjYWxlIiwiZGVjaW1hbFNlcGFyYXRvciIsInByZWZpeCIsIldyYXBwZXIiLCJmaWVsZHNldCIsInAiLCJ0aGVtZSIsIlFVRVJJRVMiLCJ0YWJsZXRBbmRVcCIsIkl0ZW1OYW1lIiwiUXVhbnRpdHkiLCJUb3RhbFdyYXBwZXIiLCJkaXYiLCJDT0xPUlMiLCJwcmltYXJ5IiwiVG90YWxQcmljZSIsIkRlbGV0ZUJ1dHRvbiIsImJ1dHRvbiIsImdyZXkiLCJ3YXJuaW5nIiwidXNlU3RhdGUiLCJDdXJyZW5jeUlucHV0IiwiQ29udHJvbGxlciIsImZvcm1QcmljZVZhbHVlIiwic2V0UHJpY2UiLCJ1c2VFZmZlY3QiLCJmaWVsZCIsImxvY2FsZSIsImN1cnJlbmN5IiwiZSIsIm9uQ2hhbmdlIiwiTWF0aCIsInJvdW5kIiwiUHJpY2UiXSwic291cmNlUm9vdCI6IiJ9