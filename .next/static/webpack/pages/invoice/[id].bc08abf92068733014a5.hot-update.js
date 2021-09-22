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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('0'),
      price = _useState[0],
      setPrice = _useState[1]; // Oh the joys of working with currency...
  // So essentailly this input is setting the form state value as a float in cents, while
  // managing the local state of price input as a string in dollars with decimals I have no idea why
  // the react-currency input wont accpet on change values as float's but it doesn't so alas here we are..


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // On mount convert the the saved value from value from cents as a INT to to dollars as string
    setPrice(parseFloat((formPriceValue / 100).toFixed(2)).toString());
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Wrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
      children: "Price"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
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
              // If e is undefined we still need to pass it to the currency input as a value
              // this is what lets users type in numbers as decimals, but we make sure to set the form value to 0 in case they submit
              // with no price
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
          lineNumber: 34,
          columnNumber: 6
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 3
  }, _this);
}; // Price Field

_s(PriceField, "rt1idsIihLTdoscJ+SPX73K3uzk=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW52b2ljZS9baWRdLmJjMDhhYmY5MjA2ODczMzAxNGE1LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQU9PLElBQU1TLFVBQStCLEdBQUcsU0FBbENBLFVBQWtDLE9BQThCO0FBQUE7O0FBQUEsTUFBM0JDLGNBQTJCLFFBQTNCQSxjQUEyQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFDNUUsd0JBQW9CTiwrREFBYyxFQUFsQztBQUFBLE1BQVFPLE9BQVIsbUJBQVFBLE9BQVI7O0FBQ0Esa0JBQTBCViwrQ0FBUSxDQUFxQixHQUFyQixDQUFsQztBQUFBLE1BQU9XLEtBQVA7QUFBQSxNQUFjQyxRQUFkLGdCQUY0RSxDQUk1RTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUFiLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNmO0FBQ0FhLElBQUFBLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDLENBQUNMLGNBQWMsR0FBRyxHQUFsQixFQUF1Qk0sT0FBdkIsQ0FBK0IsQ0FBL0IsQ0FBRCxDQUFWLENBQThDQyxRQUE5QyxFQUFELENBQVI7QUFDQSxHQUhRLEVBR04sRUFITSxDQUFUO0FBS0Esc0JBQ0MsOERBQUMsT0FBRDtBQUFBLDRCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFFQyw4REFBQyx1REFBRDtBQUNDLGFBQU8sRUFBRUwsT0FEVjtBQUVDLFVBQUksRUFBRUQsSUFGUDtBQUdDLFlBQU0sRUFBRTtBQUFBLFlBQUdPLEtBQUgsU0FBR0EsS0FBSDtBQUFBLDRCQUNQLDhEQUFDLEtBQUQ7QUFDQyw0QkFBa0IsRUFBRSxLQURyQjtBQUVDLHNCQUFZLEVBQUUsQ0FGZjtBQUdDLG9CQUFVLEVBQUU7QUFBRUMsWUFBQUEsTUFBTSxFQUFFLE9BQVY7QUFBbUJDLFlBQUFBLFFBQVEsRUFBRTtBQUE3QixXQUhiO0FBSUMsdUJBQWEsRUFBRSx1QkFBQ0MsQ0FBRCxFQUFPO0FBQ3JCLGdCQUFJQSxDQUFDLEtBQUtDLFNBQVYsRUFBcUI7QUFDcEI7QUFDQTtBQUNBO0FBQ0FKLGNBQUFBLEtBQUssQ0FBQ0ssUUFBTixDQUFlLENBQWY7QUFDQVQsY0FBQUEsUUFBUSxDQUFDTyxDQUFELENBQVI7QUFDQSxhQU5ELE1BTU87QUFDTkgsY0FBQUEsS0FBSyxDQUFDSyxRQUFOLENBQWVDLElBQUksQ0FBQ0MsS0FBTCxDQUFXVixVQUFVLENBQUNNLENBQUQsQ0FBVixHQUFnQixHQUEzQixDQUFmO0FBQ0FQLGNBQUFBLFFBQVEsQ0FBQ08sQ0FBRCxDQUFSO0FBQ0E7QUFDRCxXQWZGO0FBZ0JDLHNCQUFZLEVBQUVILEtBQUssQ0FBQ1EsS0FBTixHQUFjLEdBaEI3QjtBQWlCQyxlQUFLLEVBQUViO0FBakJSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRE87QUFBQTtBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQThCQSxDQTVDTSxFQThDUDs7R0E5Q2FKO1VBQ1FKOzs7S0FEUkk7QUErQ2IsSUFBTWtCLE9BQU8sR0FBR3JCLHFFQUFIO0FBQUE7QUFBQTtBQUFBLGdHQUNWQyw2REFEVSxFQUlILFVBQUNzQixDQUFEO0FBQUEsU0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLE1BQVIsQ0FBZUMsT0FBZixDQUF1QixDQUF2QixDQUFQO0FBQUEsQ0FKRyxDQUFiO01BQU1MO0FBV04sSUFBTU0sS0FBSyxHQUFHM0IsMERBQU0sQ0FBQ0gsK0RBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxxSEFDUkssMkRBRFEsRUFPVSxVQUFDcUIsQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxNQUFSLENBQWVHLElBQWYsQ0FBb0IsQ0FBcEIsQ0FBUDtBQUFBLENBUFYsQ0FBWDtNQUFNRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zvcm0vRmllbGRzL1ByaWNlRmllbGQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEN1cnJlbmN5SW5wdXQgZnJvbSAncmVhY3QtY3VycmVuY3ktaW5wdXQtZmllbGQnO1xyXG5pbXBvcnQgeyBDb250cm9sbGVyLCB1c2VGb3JtQ29udGV4dCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgYm9keVRleHRTdHlsZSwgaDRUZXh0U3R5bGUgfSBmcm9tICdAL3N0eWxlcy90eXBvZ3JhcGh5JztcclxuXHJcbmludGVyZmFjZSBQcmljZUZpZWxkUHJvcHMge1xyXG5cdGZvcm1QcmljZVZhbHVlOiBudW1iZXI7XHJcblx0bmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUHJpY2VGaWVsZDogRkM8UHJpY2VGaWVsZFByb3BzPiA9ICh7IGZvcm1QcmljZVZhbHVlLCBuYW1lIH0pID0+IHtcclxuXHRjb25zdCB7IGNvbnRyb2wgfSA9IHVzZUZvcm1Db250ZXh0KCk7XHJcblx0Y29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCB1bmRlZmluZWQ+KCcwJyk7XHJcblxyXG5cdC8vIE9oIHRoZSBqb3lzIG9mIHdvcmtpbmcgd2l0aCBjdXJyZW5jeS4uLlxyXG5cdC8vIFNvIGVzc2VudGFpbGx5IHRoaXMgaW5wdXQgaXMgc2V0dGluZyB0aGUgZm9ybSBzdGF0ZSB2YWx1ZSBhcyBhIGZsb2F0IGluIGNlbnRzLCB3aGlsZVxyXG5cdC8vIG1hbmFnaW5nIHRoZSBsb2NhbCBzdGF0ZSBvZiBwcmljZSBpbnB1dCBhcyBhIHN0cmluZyBpbiBkb2xsYXJzIHdpdGggZGVjaW1hbHMgSSBoYXZlIG5vIGlkZWEgd2h5XHJcblx0Ly8gdGhlIHJlYWN0LWN1cnJlbmN5IGlucHV0IHdvbnQgYWNjcGV0IG9uIGNoYW5nZSB2YWx1ZXMgYXMgZmxvYXQncyBidXQgaXQgZG9lc24ndCBzbyBhbGFzIGhlcmUgd2UgYXJlLi5cclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdC8vIE9uIG1vdW50IGNvbnZlcnQgdGhlIHRoZSBzYXZlZCB2YWx1ZSBmcm9tIHZhbHVlIGZyb20gY2VudHMgYXMgYSBJTlQgdG8gdG8gZG9sbGFycyBhcyBzdHJpbmdcclxuXHRcdHNldFByaWNlKHBhcnNlRmxvYXQoKGZvcm1QcmljZVZhbHVlIC8gMTAwKS50b0ZpeGVkKDIpKS50b1N0cmluZygpKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8V3JhcHBlcj5cclxuXHRcdFx0PHNwYW4+UHJpY2U8L3NwYW4+XHJcblx0XHRcdDxDb250cm9sbGVyXHJcblx0XHRcdFx0Y29udHJvbD17Y29udHJvbH1cclxuXHRcdFx0XHRuYW1lPXtuYW1lfVxyXG5cdFx0XHRcdHJlbmRlcj17KHsgZmllbGQgfSkgPT4gKFxyXG5cdFx0XHRcdFx0PFByaWNlXHJcblx0XHRcdFx0XHRcdGFsbG93TmVnYXRpdmVWYWx1ZT17ZmFsc2V9XHJcblx0XHRcdFx0XHRcdGRlY2ltYWxTY2FsZT17Mn1cclxuXHRcdFx0XHRcdFx0aW50bENvbmZpZz17eyBsb2NhbGU6ICdlbi1VUycsIGN1cnJlbmN5OiAnVVNEJyB9fVxyXG5cdFx0XHRcdFx0XHRvblZhbHVlQ2hhbmdlPXsoZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChlID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdC8vIElmIGUgaXMgdW5kZWZpbmVkIHdlIHN0aWxsIG5lZWQgdG8gcGFzcyBpdCB0byB0aGUgY3VycmVuY3kgaW5wdXQgYXMgYSB2YWx1ZVxyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gdGhpcyBpcyB3aGF0IGxldHMgdXNlcnMgdHlwZSBpbiBudW1iZXJzIGFzIGRlY2ltYWxzLCBidXQgd2UgbWFrZSBzdXJlIHRvIHNldCB0aGUgZm9ybSB2YWx1ZSB0byAwIGluIGNhc2UgdGhleSBzdWJtaXRcclxuXHRcdFx0XHRcdFx0XHRcdC8vIHdpdGggbm8gcHJpY2VcclxuXHRcdFx0XHRcdFx0XHRcdGZpZWxkLm9uQ2hhbmdlKDApO1xyXG5cdFx0XHRcdFx0XHRcdFx0c2V0UHJpY2UoZSk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdGZpZWxkLm9uQ2hhbmdlKE1hdGgucm91bmQocGFyc2VGbG9hdChlKSAqIDEwMCkpO1xyXG5cdFx0XHRcdFx0XHRcdFx0c2V0UHJpY2UoZSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e2ZpZWxkLnZhbHVlIC8gMTAwfVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17cHJpY2V9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdC8+XHJcblx0XHQ8L1dyYXBwZXI+XHJcblx0KTtcclxufTtcclxuXHJcbi8vIFByaWNlIEZpZWxkXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG5cdCR7Ym9keVRleHRTdHlsZX07XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWZsb3c6IGNvbHVtbjtcclxuXHRjb2xvcjogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMucHJpbWFyeVszXX07XHJcblx0bWF4LXdpZHRoOiAxMDBweDtcclxuXHRzcGFuIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgUHJpY2UgPSBzdHlsZWQoQ3VycmVuY3lJbnB1dClgXHJcblx0JHtoNFRleHRTdHlsZX07XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHBhZGRpbmc6IDAgMTBweDtcclxuXHRtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcblx0aGVpZ2h0OiA0OHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRib3JkZXI6IHNvbGlkIDJweCAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy5ncmV5WzJdfTtcclxuYDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDdXJyZW5jeUlucHV0IiwiQ29udHJvbGxlciIsInVzZUZvcm1Db250ZXh0Iiwic3R5bGVkIiwiYm9keVRleHRTdHlsZSIsImg0VGV4dFN0eWxlIiwiUHJpY2VGaWVsZCIsImZvcm1QcmljZVZhbHVlIiwibmFtZSIsImNvbnRyb2wiLCJwcmljZSIsInNldFByaWNlIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJ0b1N0cmluZyIsImZpZWxkIiwibG9jYWxlIiwiY3VycmVuY3kiLCJlIiwidW5kZWZpbmVkIiwib25DaGFuZ2UiLCJNYXRoIiwicm91bmQiLCJ2YWx1ZSIsIldyYXBwZXIiLCJkaXYiLCJwIiwidGhlbWUiLCJDT0xPUlMiLCJwcmltYXJ5IiwiUHJpY2UiLCJncmV5Il0sInNvdXJjZVJvb3QiOiIifQ==