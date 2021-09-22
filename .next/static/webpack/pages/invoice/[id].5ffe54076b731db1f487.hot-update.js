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
      setPrice = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var priceToSet = (parseFloat(formPriceValue) / 100).toFixed(2).toString();
    setPrice(priceToSet);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Wrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
      children: "Price"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
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
            field.onChange(Math.round(parseFloat(e) * 100));
            setPrice(e);
          },
          defaultValue: field.value / 100,
          value: price
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 6
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW52b2ljZS9baWRdLjVmZmU1NDA3NmI3MzFkYjFmNDg3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQU9PLElBQU1TLFVBQStCLEdBQUcsU0FBbENBLFVBQWtDLE9BQThCO0FBQUE7O0FBQUEsTUFBM0JDLGNBQTJCLFFBQTNCQSxjQUEyQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFDNUUsd0JBQW9CTiwrREFBYyxFQUFsQztBQUFBLE1BQVFPLE9BQVIsbUJBQVFBLE9BQVI7O0FBQ0Esa0JBQTBCViwrQ0FBUSxDQUFDLEdBQUQsQ0FBbEM7QUFBQSxNQUFPVyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFFQWIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2YsUUFBTWMsVUFBVSxHQUFHLENBQUNDLFVBQVUsQ0FBQ04sY0FBRCxDQUFWLEdBQTZCLEdBQTlCLEVBQW1DTyxPQUFuQyxDQUEyQyxDQUEzQyxFQUE4Q0MsUUFBOUMsRUFBbkI7QUFFQUosSUFBQUEsUUFBUSxDQUFDQyxVQUFELENBQVI7QUFDQSxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUEsc0JBQ0MsOERBQUMsT0FBRDtBQUFBLDRCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFFQyw4REFBQyx1REFBRDtBQUNDLGFBQU8sRUFBRUgsT0FEVjtBQUVDLFVBQUksRUFBRUQsSUFGUDtBQUdDLFlBQU0sRUFBRTtBQUFBLFlBQUdRLEtBQUgsU0FBR0EsS0FBSDtBQUFBLDRCQUNQLDhEQUFDLEtBQUQ7QUFDQyw0QkFBa0IsRUFBRSxLQURyQjtBQUVDLHNCQUFZLEVBQUUsQ0FGZjtBQUdDLG9CQUFVLEVBQUU7QUFBRUMsWUFBQUEsTUFBTSxFQUFFLE9BQVY7QUFBbUJDLFlBQUFBLFFBQVEsRUFBRTtBQUE3QixXQUhiO0FBSUMsdUJBQWEsRUFBRSx1QkFBQ0MsQ0FBRCxFQUFPO0FBQ3JCSCxZQUFBQSxLQUFLLENBQUNJLFFBQU4sQ0FBZUMsSUFBSSxDQUFDQyxLQUFMLENBQVdULFVBQVUsQ0FBQ00sQ0FBRCxDQUFWLEdBQWdCLEdBQTNCLENBQWY7QUFDQVIsWUFBQUEsUUFBUSxDQUFDUSxDQUFELENBQVI7QUFDQSxXQVBGO0FBUUMsc0JBQVksRUFBRUgsS0FBSyxDQUFDTyxLQUFOLEdBQWMsR0FSN0I7QUFTQyxlQUFLLEVBQUViO0FBVFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFETztBQUFBO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBc0JBLENBaENNLEVBa0NQOztHQWxDYUo7VUFDUUo7OztLQURSSTtBQW1DYixJQUFNa0IsT0FBTyxHQUFHckIscUVBQUg7QUFBQTtBQUFBO0FBQUEsZ0dBQ1ZDLDZEQURVLEVBSUgsVUFBQ3NCLENBQUQ7QUFBQSxTQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUUMsTUFBUixDQUFlQyxPQUFmLENBQXVCLENBQXZCLENBQVA7QUFBQSxDQUpHLENBQWI7TUFBTUw7QUFXTixJQUFNTSxLQUFLLEdBQUczQiwwREFBTSxDQUFDSCwrREFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLHFIQUNSSywyREFEUSxFQU9VLFVBQUNxQixDQUFEO0FBQUEsU0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLE1BQVIsQ0FBZUcsSUFBZixDQUFvQixDQUFwQixDQUFQO0FBQUEsQ0FQVixDQUFYO01BQU1EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9ybS9GaWVsZHMvUHJpY2VGaWVsZC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ3VycmVuY3lJbnB1dCBmcm9tICdyZWFjdC1jdXJyZW5jeS1pbnB1dC1maWVsZCc7XHJcbmltcG9ydCB7IENvbnRyb2xsZXIsIHVzZUZvcm1Db250ZXh0IH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBib2R5VGV4dFN0eWxlLCBoNFRleHRTdHlsZSB9IGZyb20gJ0Avc3R5bGVzL3R5cG9ncmFwaHknO1xyXG5cclxuaW50ZXJmYWNlIFByaWNlRmllbGRQcm9wcyB7XHJcblx0Zm9ybVByaWNlVmFsdWU6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQcmljZUZpZWxkOiBGQzxQcmljZUZpZWxkUHJvcHM+ID0gKHsgZm9ybVByaWNlVmFsdWUsIG5hbWUgfSkgPT4ge1xyXG5cdGNvbnN0IHsgY29udHJvbCB9ID0gdXNlRm9ybUNvbnRleHQoKTtcclxuXHRjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKCcwJyk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdCBwcmljZVRvU2V0ID0gKHBhcnNlRmxvYXQoZm9ybVByaWNlVmFsdWUpIC8gMTAwKS50b0ZpeGVkKDIpLnRvU3RyaW5nKCk7XHJcblxyXG5cdFx0c2V0UHJpY2UocHJpY2VUb1NldCk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PFdyYXBwZXI+XHJcblx0XHRcdDxzcGFuPlByaWNlPC9zcGFuPlxyXG5cdFx0XHQ8Q29udHJvbGxlclxyXG5cdFx0XHRcdGNvbnRyb2w9e2NvbnRyb2x9XHJcblx0XHRcdFx0bmFtZT17bmFtZX1cclxuXHRcdFx0XHRyZW5kZXI9eyh7IGZpZWxkIH0pID0+IChcclxuXHRcdFx0XHRcdDxQcmljZVxyXG5cdFx0XHRcdFx0XHRhbGxvd05lZ2F0aXZlVmFsdWU9e2ZhbHNlfVxyXG5cdFx0XHRcdFx0XHRkZWNpbWFsU2NhbGU9ezJ9XHJcblx0XHRcdFx0XHRcdGludGxDb25maWc9e3sgbG9jYWxlOiAnZW4tVVMnLCBjdXJyZW5jeTogJ1VTRCcgfX1cclxuXHRcdFx0XHRcdFx0b25WYWx1ZUNoYW5nZT17KGUpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRmaWVsZC5vbkNoYW5nZShNYXRoLnJvdW5kKHBhcnNlRmxvYXQoZSkgKiAxMDApKTtcclxuXHRcdFx0XHRcdFx0XHRzZXRQcmljZShlKTtcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtmaWVsZC52YWx1ZSAvIDEwMH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9e3ByaWNlfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQpfVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9XcmFwcGVyPlxyXG5cdCk7XHJcbn07XHJcblxyXG4vLyBQcmljZSBGaWVsZFxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuXHQke2JvZHlUZXh0U3R5bGV9O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1mbG93OiBjb2x1bW47XHJcblx0Y29sb3I6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLnByaW1hcnlbM119O1xyXG5cdG1heC13aWR0aDogMTAwcHg7XHJcblx0c3BhbiB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdH1cclxuYDtcclxuXHJcbmNvbnN0IFByaWNlID0gc3R5bGVkKEN1cnJlbmN5SW5wdXQpYFxyXG5cdCR7aDRUZXh0U3R5bGV9O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRwYWRkaW5nOiAwIDEwcHg7XHJcblx0bWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG5cdGhlaWdodDogNDhweDtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0Ym9yZGVyOiBzb2xpZCAycHggJHsocCkgPT4gcC50aGVtZS5DT0xPUlMuZ3JleVsyXX07XHJcbmA7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ3VycmVuY3lJbnB1dCIsIkNvbnRyb2xsZXIiLCJ1c2VGb3JtQ29udGV4dCIsInN0eWxlZCIsImJvZHlUZXh0U3R5bGUiLCJoNFRleHRTdHlsZSIsIlByaWNlRmllbGQiLCJmb3JtUHJpY2VWYWx1ZSIsIm5hbWUiLCJjb250cm9sIiwicHJpY2UiLCJzZXRQcmljZSIsInByaWNlVG9TZXQiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsInRvU3RyaW5nIiwiZmllbGQiLCJsb2NhbGUiLCJjdXJyZW5jeSIsImUiLCJvbkNoYW5nZSIsIk1hdGgiLCJyb3VuZCIsInZhbHVlIiwiV3JhcHBlciIsImRpdiIsInAiLCJ0aGVtZSIsIkNPTE9SUyIsInByaW1hcnkiLCJQcmljZSIsImdyZXkiXSwic291cmNlUm9vdCI6IiJ9