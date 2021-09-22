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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW52b2ljZS9baWRdLjkwMWRjNGQ0OWUzYjRmNDZlOWRkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQU9PLElBQU1TLFVBQStCLEdBQUcsU0FBbENBLFVBQWtDLE9BQThCO0FBQUE7O0FBQUEsTUFBM0JDLGNBQTJCLFFBQTNCQSxjQUEyQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFDNUUsd0JBQW9CTiwrREFBYyxFQUFsQztBQUFBLE1BQVFPLE9BQVIsbUJBQVFBLE9BQVI7O0FBQ0Esa0JBQTBCViwrQ0FBUSxDQUFDLEdBQUQsQ0FBbEM7QUFBQSxNQUFPVyxLQUFQO0FBQUEsTUFBY0MsUUFBZCxnQkFGNEUsQ0FJNUU7QUFDQTtBQUNBO0FBQ0E7OztBQUVBYixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZjtBQUNBYSxJQUFBQSxRQUFRLENBQUNDLFVBQVUsQ0FBQyxDQUFDTCxjQUFjLEdBQUcsR0FBbEIsRUFBdUJNLE9BQXZCLENBQStCLENBQS9CLENBQUQsQ0FBVixDQUE4Q0MsUUFBOUMsRUFBRCxDQUFSO0FBQ0EsR0FIUSxFQUdOLEVBSE0sQ0FBVDtBQUtBLHNCQUNDLDhEQUFDLE9BQUQ7QUFBQSw0QkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBRUMsOERBQUMsdURBQUQ7QUFDQyxhQUFPLEVBQUVMLE9BRFY7QUFFQyxVQUFJLEVBQUVELElBRlA7QUFHQyxZQUFNLEVBQUU7QUFBQSxZQUFHTyxLQUFILFNBQUdBLEtBQUg7QUFBQSw0QkFDUCw4REFBQyxLQUFEO0FBQ0MsNEJBQWtCLEVBQUUsS0FEckI7QUFFQyxzQkFBWSxFQUFFLENBRmY7QUFHQyxvQkFBVSxFQUFFO0FBQUVDLFlBQUFBLE1BQU0sRUFBRSxPQUFWO0FBQW1CQyxZQUFBQSxRQUFRLEVBQUU7QUFBN0IsV0FIYjtBQUlDLHVCQUFhLEVBQUUsdUJBQUNDLENBQUQsRUFBTztBQUNyQixnQkFBSUEsQ0FBQyxLQUFLQyxTQUFWLEVBQXFCO0FBQ3BCSixjQUFBQSxLQUFLLENBQUNLLFFBQU4sQ0FBZSxDQUFmO0FBQ0FULGNBQUFBLFFBQVEsQ0FBQ08sQ0FBRCxDQUFSO0FBQ0EsYUFIRCxNQUdPO0FBQ05ILGNBQUFBLEtBQUssQ0FBQ0ssUUFBTixDQUFlQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1YsVUFBVSxDQUFDTSxDQUFELENBQVYsR0FBZ0IsR0FBM0IsQ0FBZjtBQUNBUCxjQUFBQSxRQUFRLENBQUNPLENBQUQsQ0FBUjtBQUNBO0FBQ0QsV0FaRjtBQWFDLHNCQUFZLEVBQUVILEtBQUssQ0FBQ1EsS0FBTixHQUFjLEdBYjdCO0FBY0MsZUFBSyxFQUFFYjtBQWRSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRE87QUFBQTtBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQTJCQSxDQXpDTSxFQTJDUDs7R0EzQ2FKO1VBQ1FKOzs7S0FEUkk7QUE0Q2IsSUFBTWtCLE9BQU8sR0FBR3JCLHFFQUFIO0FBQUE7QUFBQTtBQUFBLGdHQUNWQyw2REFEVSxFQUlILFVBQUNzQixDQUFEO0FBQUEsU0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLE1BQVIsQ0FBZUMsT0FBZixDQUF1QixDQUF2QixDQUFQO0FBQUEsQ0FKRyxDQUFiO01BQU1MO0FBV04sSUFBTU0sS0FBSyxHQUFHM0IsMERBQU0sQ0FBQ0gsK0RBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxxSEFDUkssMkRBRFEsRUFPVSxVQUFDcUIsQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxNQUFSLENBQWVHLElBQWYsQ0FBb0IsQ0FBcEIsQ0FBUDtBQUFBLENBUFYsQ0FBWDtNQUFNRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zvcm0vRmllbGRzL1ByaWNlRmllbGQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEN1cnJlbmN5SW5wdXQgZnJvbSAncmVhY3QtY3VycmVuY3ktaW5wdXQtZmllbGQnO1xyXG5pbXBvcnQgeyBDb250cm9sbGVyLCB1c2VGb3JtQ29udGV4dCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgYm9keVRleHRTdHlsZSwgaDRUZXh0U3R5bGUgfSBmcm9tICdAL3N0eWxlcy90eXBvZ3JhcGh5JztcclxuXHJcbmludGVyZmFjZSBQcmljZUZpZWxkUHJvcHMge1xyXG5cdGZvcm1QcmljZVZhbHVlOiBudW1iZXI7XHJcblx0bmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUHJpY2VGaWVsZDogRkM8UHJpY2VGaWVsZFByb3BzPiA9ICh7IGZvcm1QcmljZVZhbHVlLCBuYW1lIH0pID0+IHtcclxuXHRjb25zdCB7IGNvbnRyb2wgfSA9IHVzZUZvcm1Db250ZXh0KCk7XHJcblx0Y29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZSgnMCcpO1xyXG5cclxuXHQvLyBPaCB0aGUgam95cyBvZiB3b3JraW5nIHdpdGggY3VycmVuY3kuLi5cclxuXHQvLyBTbyBlc3NlbnRhaWxseSB0aGlzIGlucHV0IGlzIHNldHRpbmcgdGhlIGZvcm0gc3RhdGUgdmFsdWUgYXMgYSBmbG9hdCBpbiBjZW50cywgd2hpbGVcclxuXHQvLyBtYW5hZ2luZyB0aGUgbG9jYWwgc3RhdGUgb2YgcHJpY2UgaW5wdXQgYXMgYSBzdHJpbmcgaW4gZG9sbGFycyB3aXRoIGRlY2ltYWxzIEkgaGF2ZSBubyBpZGVhIHdoeVxyXG5cdC8vIHRoZSByZWFjdC1jdXJyZW5jeSBpbnB1dCB3b250IGFjY3BldCBvbiBjaGFuZ2UgdmFsdWVzIGFzIGZsb2F0J3MgYnV0IGl0IGRvZXNuJ3Qgc28gYWxhcyBoZXJlIHdlIGFyZS4uXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHQvLyBPbiBtb3VudCBjb252ZXJ0IHRoZSB0aGUgc2F2ZWQgdmFsdWUgZnJvbSB2YWx1ZSBmcm9tIGNlbnRzIGFzIGEgSU5UIHRvIHRvIGRvbGxhcnMgYXMgc3RyaW5nXHJcblx0XHRzZXRQcmljZShwYXJzZUZsb2F0KChmb3JtUHJpY2VWYWx1ZSAvIDEwMCkudG9GaXhlZCgyKSkudG9TdHJpbmcoKSk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PFdyYXBwZXI+XHJcblx0XHRcdDxzcGFuPlByaWNlPC9zcGFuPlxyXG5cdFx0XHQ8Q29udHJvbGxlclxyXG5cdFx0XHRcdGNvbnRyb2w9e2NvbnRyb2x9XHJcblx0XHRcdFx0bmFtZT17bmFtZX1cclxuXHRcdFx0XHRyZW5kZXI9eyh7IGZpZWxkIH0pID0+IChcclxuXHRcdFx0XHRcdDxQcmljZVxyXG5cdFx0XHRcdFx0XHRhbGxvd05lZ2F0aXZlVmFsdWU9e2ZhbHNlfVxyXG5cdFx0XHRcdFx0XHRkZWNpbWFsU2NhbGU9ezJ9XHJcblx0XHRcdFx0XHRcdGludGxDb25maWc9e3sgbG9jYWxlOiAnZW4tVVMnLCBjdXJyZW5jeTogJ1VTRCcgfX1cclxuXHRcdFx0XHRcdFx0b25WYWx1ZUNoYW5nZT17KGUpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoZSA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRmaWVsZC5vbkNoYW5nZSgwKTtcclxuXHRcdFx0XHRcdFx0XHRcdHNldFByaWNlKGUpO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRmaWVsZC5vbkNoYW5nZShNYXRoLnJvdW5kKHBhcnNlRmxvYXQoZSkgKiAxMDApKTtcclxuXHRcdFx0XHRcdFx0XHRcdHNldFByaWNlKGUpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtmaWVsZC52YWx1ZSAvIDEwMH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9e3ByaWNlfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQpfVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9XcmFwcGVyPlxyXG5cdCk7XHJcbn07XHJcblxyXG4vLyBQcmljZSBGaWVsZFxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuXHQke2JvZHlUZXh0U3R5bGV9O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1mbG93OiBjb2x1bW47XHJcblx0Y29sb3I6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLnByaW1hcnlbM119O1xyXG5cdG1heC13aWR0aDogMTAwcHg7XHJcblx0c3BhbiB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdH1cclxuYDtcclxuXHJcbmNvbnN0IFByaWNlID0gc3R5bGVkKEN1cnJlbmN5SW5wdXQpYFxyXG5cdCR7aDRUZXh0U3R5bGV9O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRwYWRkaW5nOiAwIDEwcHg7XHJcblx0bWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG5cdGhlaWdodDogNDhweDtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0Ym9yZGVyOiBzb2xpZCAycHggJHsocCkgPT4gcC50aGVtZS5DT0xPUlMuZ3JleVsyXX07XHJcbmA7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ3VycmVuY3lJbnB1dCIsIkNvbnRyb2xsZXIiLCJ1c2VGb3JtQ29udGV4dCIsInN0eWxlZCIsImJvZHlUZXh0U3R5bGUiLCJoNFRleHRTdHlsZSIsIlByaWNlRmllbGQiLCJmb3JtUHJpY2VWYWx1ZSIsIm5hbWUiLCJjb250cm9sIiwicHJpY2UiLCJzZXRQcmljZSIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwidG9TdHJpbmciLCJmaWVsZCIsImxvY2FsZSIsImN1cnJlbmN5IiwiZSIsInVuZGVmaW5lZCIsIm9uQ2hhbmdlIiwiTWF0aCIsInJvdW5kIiwidmFsdWUiLCJXcmFwcGVyIiwiZGl2IiwicCIsInRoZW1lIiwiQ09MT1JTIiwicHJpbWFyeSIsIlByaWNlIiwiZ3JleSJdLCJzb3VyY2VSb290IjoiIn0=