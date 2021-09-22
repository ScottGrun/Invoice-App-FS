"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Form/Fields/DateField/DateField.tsx":
/*!********************************************************!*\
  !*** ./components/Form/Fields/DateField/DateField.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateField": function() { return /* binding */ DateField; }
/* harmony export */ });
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _CalendarHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CalendarHeader */ "./components/Form/Fields/DateField/CalendarHeader.tsx");
/* harmony import */ var _CalendarInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CalendarInput */ "./components/Form/Fields/DateField/CalendarInput.tsx");
/* harmony import */ var _styles_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/typography */ "./styles/typography.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\scott\\Documents\\GitHub\\Invoice-App-FS\\components\\Form\\Fields\\DateField\\DateField.tsx",
    _this = undefined,
    _s = $RefreshSig$();








var DateField = function DateField(_ref) {
  _s();

  var style = _ref.style,
      label = _ref.label,
      name = _ref.name;

  var _useFormContext = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_0__.useFormContext)(),
      control = _useFormContext.control;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Wrapper, {
    style: style,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_hook_form__WEBPACK_IMPORTED_MODULE_0__.Controller, {
      name: name,
      control: control,
      render: function render(_ref2) {
        var _fieldState$error;

        var field = _ref2.field,
            fieldState = _ref2.fieldState;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((react_datepicker__WEBPACK_IMPORTED_MODULE_5___default()), {
          closeOnScroll: function closeOnScroll() {
            return true;
          },
          onChange: function onChange(e) {
            return field.onChange(e);
          },
          selected: field.value,
          showPopperArrow: false,
          dateFormat: "d MMM yyyy",
          calendarClassName: "custom-calendar",
          dayClassName: function dayClassName() {
            return 'custom-day';
          },
          customInput: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_CalendarInput__WEBPACK_IMPORTED_MODULE_2__.CalendarInput, {
            name: field.name,
            hasError: fieldState.invalid,
            error: (_fieldState$error = fieldState.error) === null || _fieldState$error === void 0 ? void 0 : _fieldState$error.message,
            value: field.value.toDateString(),
            label: label
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 8
          }, _this),
          renderCustomHeader: function renderCustomHeader(_ref3) {
            var monthDate = _ref3.monthDate,
                decreaseMonth = _ref3.decreaseMonth,
                increaseMonth = _ref3.increaseMonth;
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_CalendarHeader__WEBPACK_IMPORTED_MODULE_1__.CalendarHeader, {
              monthDate: monthDate,
              decreaseMonth: decreaseMonth,
              increaseMonth: increaseMonth
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 8
            }, _this);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 6
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(DatePickerStyles, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 3
  }, _this);
}; // Need this arbitrary div to prevent the date-picker from pushing content below it down a fex px

_s(DateField, "zyAxkz+Wq3InUdCKNlVVi99oElQ=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_0__.useFormContext];
});

_c = DateField;
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.div.withConfig({
  displayName: "DateField__Wrapper",
  componentId: "sc-1aqzhnp-0"
})([""]); // Overide react-datepicker styles with a gobalstyle this a bit hacky but only workaround I could find that was useable

_c2 = Wrapper;
var DatePickerStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__.createGlobalStyle)([".custom-calendar{", ";background-color:", ";padding:22px 10px 22px 10px;border:none;border-radius:8px;box-shadow:0px 10px 20px rgba(72,84,159,0.25);}.custom-day{color:", ";&:hover{background-color:transparent;color:", ";}}.react-datepicker__day--selected{background-color:", ";color:", ";}.react-datepicker__day--keyboard-selected{background-color:", ";color:", ";}.react-datepicker__day--outside-month{color:", ";opacity:0.08;}.react-datepicker__day-names{display:none;}.react-datepicker__header{background-color:white;padding:0;border:none;}"], _styles_typography__WEBPACK_IMPORTED_MODULE_3__.h4TextStyle, function (p) {
  return p.theme.COLORS.white;
}, function (p) {
  return p.theme.COLORS.dark[1];
}, function (p) {
  return p.theme.COLORS.primary[1];
}, function (p) {
  return p.theme.COLORS.primary[1];
}, function (p) {
  return p.theme.COLORS.white;
}, function (p) {
  return p.theme.COLORS.primary[1];
}, function (p) {
  return p.theme.COLORS.white;
}, function (p) {
  return p.theme.COLORS.dark[1];
});
_c3 = DatePickerStyles;

var _c, _c2, _c3;

$RefreshReg$(_c, "DateField");
$RefreshReg$(_c2, "Wrapper");
$RefreshReg$(_c3, "DatePickerStyles");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODFjNDcyMjcwNTA0N2E1ZjkyZGMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBUU8sSUFBTVEsU0FBNkIsR0FBRyxTQUFoQ0EsU0FBZ0MsT0FBNEI7QUFBQTs7QUFBQSxNQUF6QkMsS0FBeUIsUUFBekJBLEtBQXlCO0FBQUEsTUFBbEJDLEtBQWtCLFFBQWxCQSxLQUFrQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFDeEUsd0JBQW9CVCwrREFBYyxFQUFsQztBQUFBLE1BQVFVLE9BQVIsbUJBQVFBLE9BQVI7O0FBRUEsc0JBQ0MsOERBQUMsT0FBRDtBQUFTLFNBQUssRUFBRUgsS0FBaEI7QUFBQSw0QkFDQyw4REFBQyx1REFBRDtBQUNDLFVBQUksRUFBRUUsSUFEUDtBQUVDLGFBQU8sRUFBRUMsT0FGVjtBQUdDLFlBQU0sRUFBRTtBQUFBOztBQUFBLFlBQUdDLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFlBQVVDLFVBQVYsU0FBVUEsVUFBVjtBQUFBLDRCQUNQLDhEQUFDLHlEQUFEO0FBQ0MsdUJBQWEsRUFBRTtBQUFBLG1CQUFNLElBQU47QUFBQSxXQURoQjtBQUVDLGtCQUFRLEVBQUUsa0JBQUNDLENBQUQ7QUFBQSxtQkFBT0YsS0FBSyxDQUFDRyxRQUFOLENBQWVELENBQWYsQ0FBUDtBQUFBLFdBRlg7QUFHQyxrQkFBUSxFQUFFRixLQUFLLENBQUNJLEtBSGpCO0FBSUMseUJBQWUsRUFBRSxLQUpsQjtBQUtDLG9CQUFVLEVBQUMsWUFMWjtBQU1DLDJCQUFpQixFQUFDLGlCQU5uQjtBQU9DLHNCQUFZLEVBQUU7QUFBQSxtQkFBTSxZQUFOO0FBQUEsV0FQZjtBQVFDLHFCQUFXLGVBQ1YsOERBQUMseURBQUQ7QUFDQyxnQkFBSSxFQUFFSixLQUFLLENBQUNGLElBRGI7QUFFQyxvQkFBUSxFQUFFRyxVQUFVLENBQUNJLE9BRnRCO0FBR0MsaUJBQUssdUJBQUVKLFVBQVUsQ0FBQ0ssS0FBYixzREFBRSxrQkFBa0JDLE9BSDFCO0FBSUMsaUJBQUssRUFBRVAsS0FBSyxDQUFDSSxLQUFOLENBQVlJLFlBQVosRUFKUjtBQUtDLGlCQUFLLEVBQUVYO0FBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFURjtBQWlCQyw0QkFBa0IsRUFBRTtBQUFBLGdCQUFHWSxTQUFILFNBQUdBLFNBQUg7QUFBQSxnQkFBY0MsYUFBZCxTQUFjQSxhQUFkO0FBQUEsZ0JBQTZCQyxhQUE3QixTQUE2QkEsYUFBN0I7QUFBQSxnQ0FDbkIsOERBQUMsMkRBQUQ7QUFDQyx1QkFBUyxFQUFFRixTQURaO0FBRUMsMkJBQWEsRUFBRUMsYUFGaEI7QUFHQywyQkFBYSxFQUFFQztBQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURtQjtBQUFBO0FBakJyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURPO0FBQUE7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFnQ0MsOERBQUMsZ0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQW9DQSxDQXZDTSxFQXlDUDs7R0F6Q2FoQjtVQUNRTjs7O0tBRFJNO0FBMENiLElBQU1pQixPQUFPLEdBQUd0QixxRUFBSDtBQUFBO0FBQUE7QUFBQSxRQUFiLEVBRUE7O01BRk1zQjtBQUdOLElBQU1FLGdCQUFnQixHQUFHdkIsb0VBQUgsc2lCQUVmRywyREFGZSxFQUdHLFVBQUNxQixDQUFEO0FBQUEsU0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLE1BQVIsQ0FBZUMsS0FBdEI7QUFBQSxDQUhILEVBWVosVUFBQ0gsQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxNQUFSLENBQWVFLElBQWYsQ0FBb0IsQ0FBcEIsQ0FBUDtBQUFBLENBWlksRUFlSixVQUFDSixDQUFEO0FBQUEsU0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLE1BQVIsQ0FBZUcsT0FBZixDQUF1QixDQUF2QixDQUFQO0FBQUEsQ0FmSSxFQW9CRCxVQUFDTCxDQUFEO0FBQUEsU0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLE1BQVIsQ0FBZUcsT0FBZixDQUF1QixDQUF2QixDQUFQO0FBQUEsQ0FwQkMsRUFxQlgsVUFBQ0wsQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxNQUFSLENBQWVDLEtBQXRCO0FBQUEsQ0FyQlcsRUF5QkcsVUFBQ0gsQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxNQUFSLENBQWVHLE9BQWYsQ0FBdUIsQ0FBdkIsQ0FBUDtBQUFBLENBekJILEVBMEJSLFVBQUNMLENBQUQ7QUFBQSxTQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUUMsTUFBUixDQUFlQyxLQUF0QjtBQUFBLENBMUJRLEVBK0JQLFVBQUNILENBQUQ7QUFBQSxTQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUUMsTUFBUixDQUFlRSxJQUFmLENBQW9CLENBQXBCLENBQVA7QUFBQSxDQS9CTyxDQUF0QjtNQUFNTCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zvcm0vRmllbGRzL0RhdGVGaWVsZC9EYXRlRmllbGQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZDIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3REYXRlUGlja2VyLCB7IFJlYWN0RGF0ZVBpY2tlclByb3BzIH0gZnJvbSAncmVhY3QtZGF0ZXBpY2tlcic7XHJcbmltcG9ydCB7IENvbnRyb2xsZXIsIHVzZUZvcm1Db250ZXh0IH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0IHN0eWxlZCwgeyBjcmVhdGVHbG9iYWxTdHlsZSwgQ1NTUHJvcGVydGllcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCB7IENhbGVuZGFySGVhZGVyIH0gZnJvbSAnLi9DYWxlbmRhckhlYWRlcic7XHJcbmltcG9ydCB7IENhbGVuZGFySW5wdXQgfSBmcm9tICcuL0NhbGVuZGFySW5wdXQnO1xyXG5cclxuaW1wb3J0IHsgaDRUZXh0U3R5bGUgfSBmcm9tICdAL3N0eWxlcy90eXBvZ3JhcGh5JztcclxuXHJcbmludGVyZmFjZSBEYXRlRmllbGRQcm9wcyBleHRlbmRzIE9taXQ8UmVhY3REYXRlUGlja2VyUHJvcHMsICdvbkNoYW5nZSc+IHtcclxuXHRzdHlsZT86IENTU1Byb3BlcnRpZXM7XHJcblx0bGFiZWw6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEYXRlRmllbGQ6IEZDPERhdGVGaWVsZFByb3BzPiA9ICh7IHN0eWxlLCBsYWJlbCwgbmFtZSB9KSA9PiB7XHJcblx0Y29uc3QgeyBjb250cm9sIH0gPSB1c2VGb3JtQ29udGV4dCgpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PFdyYXBwZXIgc3R5bGU9e3N0eWxlfT5cclxuXHRcdFx0PENvbnRyb2xsZXJcclxuXHRcdFx0XHRuYW1lPXtuYW1lfVxyXG5cdFx0XHRcdGNvbnRyb2w9e2NvbnRyb2x9XHJcblx0XHRcdFx0cmVuZGVyPXsoeyBmaWVsZCwgZmllbGRTdGF0ZSB9KSA9PiAoXHJcblx0XHRcdFx0XHQ8UmVhY3REYXRlUGlja2VyXHJcblx0XHRcdFx0XHRcdGNsb3NlT25TY3JvbGw9eygpID0+IHRydWV9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gZmllbGQub25DaGFuZ2UoZSl9XHJcblx0XHRcdFx0XHRcdHNlbGVjdGVkPXtmaWVsZC52YWx1ZX1cclxuXHRcdFx0XHRcdFx0c2hvd1BvcHBlckFycm93PXtmYWxzZX1cclxuXHRcdFx0XHRcdFx0ZGF0ZUZvcm1hdD1cImQgTU1NIHl5eXlcIlxyXG5cdFx0XHRcdFx0XHRjYWxlbmRhckNsYXNzTmFtZT1cImN1c3RvbS1jYWxlbmRhclwiXHJcblx0XHRcdFx0XHRcdGRheUNsYXNzTmFtZT17KCkgPT4gJ2N1c3RvbS1kYXknfVxyXG5cdFx0XHRcdFx0XHRjdXN0b21JbnB1dD17XHJcblx0XHRcdFx0XHRcdFx0PENhbGVuZGFySW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9e2ZpZWxkLm5hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHRoYXNFcnJvcj17ZmllbGRTdGF0ZS5pbnZhbGlkfVxyXG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3I9e2ZpZWxkU3RhdGUuZXJyb3I/Lm1lc3NhZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17ZmllbGQudmFsdWUudG9EYXRlU3RyaW5nKCl9XHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17bGFiZWx9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRyZW5kZXJDdXN0b21IZWFkZXI9eyh7IG1vbnRoRGF0ZSwgZGVjcmVhc2VNb250aCwgaW5jcmVhc2VNb250aCB9KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PENhbGVuZGFySGVhZGVyXHJcblx0XHRcdFx0XHRcdFx0XHRtb250aERhdGU9e21vbnRoRGF0ZX1cclxuXHRcdFx0XHRcdFx0XHRcdGRlY3JlYXNlTW9udGg9e2RlY3JlYXNlTW9udGh9XHJcblx0XHRcdFx0XHRcdFx0XHRpbmNyZWFzZU1vbnRoPXtpbmNyZWFzZU1vbnRofVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxEYXRlUGlja2VyU3R5bGVzIC8+XHJcblx0XHQ8L1dyYXBwZXI+XHJcblx0KTtcclxufTtcclxuXHJcbi8vIE5lZWQgdGhpcyBhcmJpdHJhcnkgZGl2IHRvIHByZXZlbnQgdGhlIGRhdGUtcGlja2VyIGZyb20gcHVzaGluZyBjb250ZW50IGJlbG93IGl0IGRvd24gYSBmZXggcHhcclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgYDtcclxuXHJcbi8vIE92ZXJpZGUgcmVhY3QtZGF0ZXBpY2tlciBzdHlsZXMgd2l0aCBhIGdvYmFsc3R5bGUgdGhpcyBhIGJpdCBoYWNreSBidXQgb25seSB3b3JrYXJvdW5kIEkgY291bGQgZmluZCB0aGF0IHdhcyB1c2VhYmxlXHJcbmNvbnN0IERhdGVQaWNrZXJTdHlsZXMgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuLmN1c3RvbS1jYWxlbmRhciB7XHJcbiAgICAgJHtoNFRleHRTdHlsZX07XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMud2hpdGV9O1xyXG4gICAgIHBhZGRpbmc6IDIycHggMTBweCAyMnB4IDEwcHg7XHJcbiAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IHJnYmEoNzIsIDg0LCAxNTksIDAuMjUpO1xyXG5cdFx0IFxyXG59XHJcblxyXG4uY3VzdG9tLWRheXtcclxuXHRjb2xvcjogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMuZGFya1sxXX07XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgIGNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy5wcmltYXJ5WzFdfTtcclxuICAgIH1cclxufVxyXG5cclxuLnJlYWN0LWRhdGVwaWNrZXJfX2RheS0tc2VsZWN0ZWQge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLnByaW1hcnlbMV19O1xyXG4gIGNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy53aGl0ZX07XHJcbn1cclxuXHJcbi5yZWFjdC1kYXRlcGlja2VyX19kYXktLWtleWJvYXJkLXNlbGVjdGVkIHtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy5wcmltYXJ5WzFdfTtcclxuICAgICBjb2xvcjogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMud2hpdGV9O1xyXG59XHJcblxyXG5cclxuLnJlYWN0LWRhdGVwaWNrZXJfX2RheS0tb3V0c2lkZS1tb250aHtcclxuICAgICAgY29sb3I6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLmRhcmtbMV19O1xyXG4gICAgICBvcGFjaXR5OiAwLjA4O1xyXG4gICAgIH1cclxuXHJcblx0XHQgLnJlYWN0LWRhdGVwaWNrZXJfX2RheS1uYW1lc3tcclxuICAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4gLnJlYWN0LWRhdGVwaWNrZXJfX2hlYWRlcntcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICBwYWRkaW5nOiAwO1xyXG4gICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5gO1xyXG4iXSwibmFtZXMiOlsiUmVhY3REYXRlUGlja2VyIiwiQ29udHJvbGxlciIsInVzZUZvcm1Db250ZXh0Iiwic3R5bGVkIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJDYWxlbmRhckhlYWRlciIsIkNhbGVuZGFySW5wdXQiLCJoNFRleHRTdHlsZSIsIkRhdGVGaWVsZCIsInN0eWxlIiwibGFiZWwiLCJuYW1lIiwiY29udHJvbCIsImZpZWxkIiwiZmllbGRTdGF0ZSIsImUiLCJvbkNoYW5nZSIsInZhbHVlIiwiaW52YWxpZCIsImVycm9yIiwibWVzc2FnZSIsInRvRGF0ZVN0cmluZyIsIm1vbnRoRGF0ZSIsImRlY3JlYXNlTW9udGgiLCJpbmNyZWFzZU1vbnRoIiwiV3JhcHBlciIsImRpdiIsIkRhdGVQaWNrZXJTdHlsZXMiLCJwIiwidGhlbWUiLCJDT0xPUlMiLCJ3aGl0ZSIsImRhcmsiLCJwcmltYXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==