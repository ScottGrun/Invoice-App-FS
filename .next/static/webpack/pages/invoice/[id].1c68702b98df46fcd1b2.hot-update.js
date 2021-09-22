"use strict";
self["webpackHotUpdate_N_E"]("pages/invoice/[id]",{

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

  var formPriceValue = _ref.formPriceValue,
      name = _ref.name;

  var _useFormContext = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)(),
      control = _useFormContext.control;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      price = _useState[0],
      setPrice = _useState[1]; // Oh the joys of working with currency...
  // So essentailly this input is setting the form state value as a float in cents, while
  // managing the local state of price input as a string in dollars with decimals I have no idea why
  // the react-currency input wont accpet on change values as float's but it doesn't so alas here we are..


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setPrice(parseFloat((formPriceValue / 100).toFixed(2)).toString());
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Wrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
      children: "Price"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, {
      control: control,
      name: name,
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
            if (e === undefined) {
              field.onChange(0);
              setPrice(e);
            } else {
              field.onChange(Math.round(parseFloat(e) * 100));
              setPrice(e);
            }
          },
          defaultValue: field.value / 100,
          value: price
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 6
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW52b2ljZS9baWRdLjFjNjg3MDJiOThkZjQ2ZmNkMWIyLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQU9PLElBQU1TLFVBQStCLEdBQUcsU0FBbENBLFVBQWtDLE9BQThCO0FBQUE7O0FBQUEsTUFBM0JDLGNBQTJCLFFBQTNCQSxjQUEyQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFDNUUsd0JBQW9CTiwrREFBYyxFQUFsQztBQUFBLE1BQVFPLE9BQVIsbUJBQVFBLE9BQVI7O0FBQ0Esa0JBQTBCViwrQ0FBUSxDQUFDLENBQUQsQ0FBbEM7QUFBQSxNQUFPVyxLQUFQO0FBQUEsTUFBY0MsUUFBZCxnQkFGNEUsQ0FJNUU7QUFDQTtBQUNBO0FBQ0E7OztBQUVBYixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZmEsSUFBQUEsUUFBUSxDQUFDQyxVQUFVLENBQUMsQ0FBQ0wsY0FBYyxHQUFHLEdBQWxCLEVBQXVCTSxPQUF2QixDQUErQixDQUEvQixDQUFELENBQVYsQ0FBOENDLFFBQTlDLEVBQUQsQ0FBUjtBQUNBLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxzQkFDQyw4REFBQyxPQUFEO0FBQUEsNEJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQUVDLDhEQUFDLHVEQUFEO0FBQ0MsYUFBTyxFQUFFTCxPQURWO0FBRUMsVUFBSSxFQUFFRCxJQUZQO0FBR0MsWUFBTSxFQUFFO0FBQUEsWUFBR08sS0FBSCxTQUFHQSxLQUFIO0FBQUEsNEJBQ1AsOERBQUMsS0FBRDtBQUNDLDRCQUFrQixFQUFFLEtBRHJCO0FBRUMsc0JBQVksRUFBRSxDQUZmO0FBR0Msb0JBQVUsRUFBRTtBQUFFQyxZQUFBQSxNQUFNLEVBQUUsT0FBVjtBQUFtQkMsWUFBQUEsUUFBUSxFQUFFO0FBQTdCLFdBSGI7QUFJQyx1QkFBYSxFQUFFLHVCQUFDQyxDQUFELEVBQU87QUFDckIsZ0JBQUlBLENBQUMsS0FBS0MsU0FBVixFQUFxQjtBQUNwQkosY0FBQUEsS0FBSyxDQUFDSyxRQUFOLENBQWUsQ0FBZjtBQUNBVCxjQUFBQSxRQUFRLENBQUNPLENBQUQsQ0FBUjtBQUNBLGFBSEQsTUFHTztBQUNOSCxjQUFBQSxLQUFLLENBQUNLLFFBQU4sQ0FBZUMsSUFBSSxDQUFDQyxLQUFMLENBQVdWLFVBQVUsQ0FBQ00sQ0FBRCxDQUFWLEdBQWdCLEdBQTNCLENBQWY7QUFDQVAsY0FBQUEsUUFBUSxDQUFDTyxDQUFELENBQVI7QUFDQTtBQUNELFdBWkY7QUFhQyxzQkFBWSxFQUFFSCxLQUFLLENBQUNRLEtBQU4sR0FBYyxHQWI3QjtBQWNDLGVBQUssRUFBRWI7QUFkUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURPO0FBQUE7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUEyQkEsQ0F4Q00sRUEwQ1A7O0dBMUNhSjtVQUNRSjs7O0tBRFJJO0FBMkNiLElBQU1rQixPQUFPLEdBQUdyQixxRUFBSDtBQUFBO0FBQUE7QUFBQSxnR0FDVkMsNkRBRFUsRUFJSCxVQUFDc0IsQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxNQUFSLENBQWVDLE9BQWYsQ0FBdUIsQ0FBdkIsQ0FBUDtBQUFBLENBSkcsQ0FBYjtNQUFNTDtBQVdOLElBQU1NLEtBQUssR0FBRzNCLDBEQUFNLENBQUNILCtEQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEscUhBQ1JLLDJEQURRLEVBT1UsVUFBQ3FCLENBQUQ7QUFBQSxTQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUUMsTUFBUixDQUFlRyxJQUFmLENBQW9CLENBQXBCLENBQVA7QUFBQSxDQVBWLENBQVg7TUFBTUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtL0ZpZWxkcy9QcmljZUZpZWxkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDdXJyZW5jeUlucHV0IGZyb20gJ3JlYWN0LWN1cnJlbmN5LWlucHV0LWZpZWxkJztcclxuaW1wb3J0IHsgQ29udHJvbGxlciwgdXNlRm9ybUNvbnRleHQgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCB7IGJvZHlUZXh0U3R5bGUsIGg0VGV4dFN0eWxlIH0gZnJvbSAnQC9zdHlsZXMvdHlwb2dyYXBoeSc7XHJcblxyXG5pbnRlcmZhY2UgUHJpY2VGaWVsZFByb3BzIHtcclxuXHRmb3JtUHJpY2VWYWx1ZTogbnVtYmVyO1xyXG5cdG5hbWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFByaWNlRmllbGQ6IEZDPFByaWNlRmllbGRQcm9wcz4gPSAoeyBmb3JtUHJpY2VWYWx1ZSwgbmFtZSB9KSA9PiB7XHJcblx0Y29uc3QgeyBjb250cm9sIH0gPSB1c2VGb3JtQ29udGV4dCgpO1xyXG5cdGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoMCk7XHJcblxyXG5cdC8vIE9oIHRoZSBqb3lzIG9mIHdvcmtpbmcgd2l0aCBjdXJyZW5jeS4uLlxyXG5cdC8vIFNvIGVzc2VudGFpbGx5IHRoaXMgaW5wdXQgaXMgc2V0dGluZyB0aGUgZm9ybSBzdGF0ZSB2YWx1ZSBhcyBhIGZsb2F0IGluIGNlbnRzLCB3aGlsZVxyXG5cdC8vIG1hbmFnaW5nIHRoZSBsb2NhbCBzdGF0ZSBvZiBwcmljZSBpbnB1dCBhcyBhIHN0cmluZyBpbiBkb2xsYXJzIHdpdGggZGVjaW1hbHMgSSBoYXZlIG5vIGlkZWEgd2h5XHJcblx0Ly8gdGhlIHJlYWN0LWN1cnJlbmN5IGlucHV0IHdvbnQgYWNjcGV0IG9uIGNoYW5nZSB2YWx1ZXMgYXMgZmxvYXQncyBidXQgaXQgZG9lc24ndCBzbyBhbGFzIGhlcmUgd2UgYXJlLi5cclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHNldFByaWNlKHBhcnNlRmxvYXQoKGZvcm1QcmljZVZhbHVlIC8gMTAwKS50b0ZpeGVkKDIpKS50b1N0cmluZygpKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8V3JhcHBlcj5cclxuXHRcdFx0PHNwYW4+UHJpY2U8L3NwYW4+XHJcblx0XHRcdDxDb250cm9sbGVyXHJcblx0XHRcdFx0Y29udHJvbD17Y29udHJvbH1cclxuXHRcdFx0XHRuYW1lPXtuYW1lfVxyXG5cdFx0XHRcdHJlbmRlcj17KHsgZmllbGQgfSkgPT4gKFxyXG5cdFx0XHRcdFx0PFByaWNlXHJcblx0XHRcdFx0XHRcdGFsbG93TmVnYXRpdmVWYWx1ZT17ZmFsc2V9XHJcblx0XHRcdFx0XHRcdGRlY2ltYWxTY2FsZT17Mn1cclxuXHRcdFx0XHRcdFx0aW50bENvbmZpZz17eyBsb2NhbGU6ICdlbi1VUycsIGN1cnJlbmN5OiAnVVNEJyB9fVxyXG5cdFx0XHRcdFx0XHRvblZhbHVlQ2hhbmdlPXsoZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChlID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGZpZWxkLm9uQ2hhbmdlKDApO1xyXG5cdFx0XHRcdFx0XHRcdFx0c2V0UHJpY2UoZSk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdGZpZWxkLm9uQ2hhbmdlKE1hdGgucm91bmQocGFyc2VGbG9hdChlKSAqIDEwMCkpO1xyXG5cdFx0XHRcdFx0XHRcdFx0c2V0UHJpY2UoZSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e2ZpZWxkLnZhbHVlIC8gMTAwfVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17cHJpY2V9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdC8+XHJcblx0XHQ8L1dyYXBwZXI+XHJcblx0KTtcclxufTtcclxuXHJcbi8vIFByaWNlIEZpZWxkXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG5cdCR7Ym9keVRleHRTdHlsZX07XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWZsb3c6IGNvbHVtbjtcclxuXHRjb2xvcjogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMucHJpbWFyeVszXX07XHJcblx0bWF4LXdpZHRoOiAxMDBweDtcclxuXHRzcGFuIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgUHJpY2UgPSBzdHlsZWQoQ3VycmVuY3lJbnB1dClgXHJcblx0JHtoNFRleHRTdHlsZX07XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHBhZGRpbmc6IDAgMTBweDtcclxuXHRtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcblx0aGVpZ2h0OiA0OHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRib3JkZXI6IHNvbGlkIDJweCAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy5ncmV5WzJdfTtcclxuYDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDdXJyZW5jeUlucHV0IiwiQ29udHJvbGxlciIsInVzZUZvcm1Db250ZXh0Iiwic3R5bGVkIiwiYm9keVRleHRTdHlsZSIsImg0VGV4dFN0eWxlIiwiUHJpY2VGaWVsZCIsImZvcm1QcmljZVZhbHVlIiwibmFtZSIsImNvbnRyb2wiLCJwcmljZSIsInNldFByaWNlIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJ0b1N0cmluZyIsImZpZWxkIiwibG9jYWxlIiwiY3VycmVuY3kiLCJlIiwidW5kZWZpbmVkIiwib25DaGFuZ2UiLCJNYXRoIiwicm91bmQiLCJ2YWx1ZSIsIldyYXBwZXIiLCJkaXYiLCJwIiwidGhlbWUiLCJDT0xPUlMiLCJwcmltYXJ5IiwiUHJpY2UiLCJncmV5Il0sInNvdXJjZVJvb3QiOiIifQ==