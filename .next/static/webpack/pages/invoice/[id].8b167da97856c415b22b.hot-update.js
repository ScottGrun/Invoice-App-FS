"use strict";
self["webpackHotUpdate_N_E"]("pages/invoice/[id]",{

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
            value: field.value,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW52b2ljZS9baWRdLjhiMTY3ZGE5Nzg1NmM0MTViMjJiLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQVFPLElBQU1RLFNBQTZCLEdBQUcsU0FBaENBLFNBQWdDLE9BQTRCO0FBQUE7O0FBQUEsTUFBekJDLEtBQXlCLFFBQXpCQSxLQUF5QjtBQUFBLE1BQWxCQyxLQUFrQixRQUFsQkEsS0FBa0I7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQ3hFLHdCQUFvQlQsK0RBQWMsRUFBbEM7QUFBQSxNQUFRVSxPQUFSLG1CQUFRQSxPQUFSOztBQUVBLHNCQUNDLDhEQUFDLE9BQUQ7QUFBUyxTQUFLLEVBQUVILEtBQWhCO0FBQUEsNEJBQ0MsOERBQUMsdURBQUQ7QUFDQyxVQUFJLEVBQUVFLElBRFA7QUFFQyxhQUFPLEVBQUVDLE9BRlY7QUFHQyxZQUFNLEVBQUU7QUFBQTs7QUFBQSxZQUFHQyxLQUFILFNBQUdBLEtBQUg7QUFBQSxZQUFVQyxVQUFWLFNBQVVBLFVBQVY7QUFBQSw0QkFDUCw4REFBQyx5REFBRDtBQUNDLHVCQUFhLEVBQUU7QUFBQSxtQkFBTSxJQUFOO0FBQUEsV0FEaEI7QUFFQyxrQkFBUSxFQUFFLGtCQUFDQyxDQUFEO0FBQUEsbUJBQU9GLEtBQUssQ0FBQ0csUUFBTixDQUFlRCxDQUFmLENBQVA7QUFBQSxXQUZYO0FBR0Msa0JBQVEsRUFBRUYsS0FBSyxDQUFDSSxLQUhqQjtBQUlDLHlCQUFlLEVBQUUsS0FKbEI7QUFLQyxvQkFBVSxFQUFDLFlBTFo7QUFNQywyQkFBaUIsRUFBQyxpQkFObkI7QUFPQyxzQkFBWSxFQUFFO0FBQUEsbUJBQU0sWUFBTjtBQUFBLFdBUGY7QUFRQyxxQkFBVyxlQUNWLDhEQUFDLHlEQUFEO0FBQ0MsZ0JBQUksRUFBRUosS0FBSyxDQUFDRixJQURiO0FBRUMsb0JBQVEsRUFBRUcsVUFBVSxDQUFDSSxPQUZ0QjtBQUdDLGlCQUFLLHVCQUFFSixVQUFVLENBQUNLLEtBQWIsc0RBQUUsa0JBQWtCQyxPQUgxQjtBQUlDLGlCQUFLLEVBQUVQLEtBQUssQ0FBQ0ksS0FKZDtBQUtDLGlCQUFLLEVBQUVQO0FBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFURjtBQWlCQyw0QkFBa0IsRUFBRTtBQUFBLGdCQUFHVyxTQUFILFNBQUdBLFNBQUg7QUFBQSxnQkFBY0MsYUFBZCxTQUFjQSxhQUFkO0FBQUEsZ0JBQTZCQyxhQUE3QixTQUE2QkEsYUFBN0I7QUFBQSxnQ0FDbkIsOERBQUMsMkRBQUQ7QUFDQyx1QkFBUyxFQUFFRixTQURaO0FBRUMsMkJBQWEsRUFBRUMsYUFGaEI7QUFHQywyQkFBYSxFQUFFQztBQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURtQjtBQUFBO0FBakJyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURPO0FBQUE7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFnQ0MsOERBQUMsZ0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQW9DQSxDQXZDTSxFQXlDUDs7R0F6Q2FmO1VBQ1FOOzs7S0FEUk07QUEwQ2IsSUFBTWdCLE9BQU8sR0FBR3JCLHFFQUFIO0FBQUE7QUFBQTtBQUFBLFFBQWIsRUFFQTs7TUFGTXFCO0FBR04sSUFBTUUsZ0JBQWdCLEdBQUd0QixvRUFBSCxzaUJBRWZHLDJEQUZlLEVBR0csVUFBQ29CLENBQUQ7QUFBQSxTQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUUMsTUFBUixDQUFlQyxLQUF0QjtBQUFBLENBSEgsRUFZWixVQUFDSCxDQUFEO0FBQUEsU0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLE1BQVIsQ0FBZUUsSUFBZixDQUFvQixDQUFwQixDQUFQO0FBQUEsQ0FaWSxFQWVKLFVBQUNKLENBQUQ7QUFBQSxTQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUUMsTUFBUixDQUFlRyxPQUFmLENBQXVCLENBQXZCLENBQVA7QUFBQSxDQWZJLEVBb0JELFVBQUNMLENBQUQ7QUFBQSxTQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUUMsTUFBUixDQUFlRyxPQUFmLENBQXVCLENBQXZCLENBQVA7QUFBQSxDQXBCQyxFQXFCWCxVQUFDTCxDQUFEO0FBQUEsU0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLE1BQVIsQ0FBZUMsS0FBdEI7QUFBQSxDQXJCVyxFQXlCRyxVQUFDSCxDQUFEO0FBQUEsU0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLE1BQVIsQ0FBZUcsT0FBZixDQUF1QixDQUF2QixDQUFQO0FBQUEsQ0F6QkgsRUEwQlIsVUFBQ0wsQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxNQUFSLENBQWVDLEtBQXRCO0FBQUEsQ0ExQlEsRUErQlAsVUFBQ0gsQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxNQUFSLENBQWVFLElBQWYsQ0FBb0IsQ0FBcEIsQ0FBUDtBQUFBLENBL0JPLENBQXRCO01BQU1MIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9ybS9GaWVsZHMvRGF0ZUZpZWxkL0RhdGVGaWVsZC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERhdGVQaWNrZXIsIHsgUmVhY3REYXRlUGlja2VyUHJvcHMgfSBmcm9tICdyZWFjdC1kYXRlcGlja2VyJztcclxuaW1wb3J0IHsgQ29udHJvbGxlciwgdXNlRm9ybUNvbnRleHQgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgc3R5bGVkLCB7IGNyZWF0ZUdsb2JhbFN0eWxlLCBDU1NQcm9wZXJ0aWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgQ2FsZW5kYXJIZWFkZXIgfSBmcm9tICcuL0NhbGVuZGFySGVhZGVyJztcclxuaW1wb3J0IHsgQ2FsZW5kYXJJbnB1dCB9IGZyb20gJy4vQ2FsZW5kYXJJbnB1dCc7XHJcblxyXG5pbXBvcnQgeyBoNFRleHRTdHlsZSB9IGZyb20gJ0Avc3R5bGVzL3R5cG9ncmFwaHknO1xyXG5cclxuaW50ZXJmYWNlIERhdGVGaWVsZFByb3BzIGV4dGVuZHMgT21pdDxSZWFjdERhdGVQaWNrZXJQcm9wcywgJ29uQ2hhbmdlJz4ge1xyXG5cdHN0eWxlPzogQ1NTUHJvcGVydGllcztcclxuXHRsYWJlbDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERhdGVGaWVsZDogRkM8RGF0ZUZpZWxkUHJvcHM+ID0gKHsgc3R5bGUsIGxhYmVsLCBuYW1lIH0pID0+IHtcclxuXHRjb25zdCB7IGNvbnRyb2wgfSA9IHVzZUZvcm1Db250ZXh0KCk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8V3JhcHBlciBzdHlsZT17c3R5bGV9PlxyXG5cdFx0XHQ8Q29udHJvbGxlclxyXG5cdFx0XHRcdG5hbWU9e25hbWV9XHJcblx0XHRcdFx0Y29udHJvbD17Y29udHJvbH1cclxuXHRcdFx0XHRyZW5kZXI9eyh7IGZpZWxkLCBmaWVsZFN0YXRlIH0pID0+IChcclxuXHRcdFx0XHRcdDxSZWFjdERhdGVQaWNrZXJcclxuXHRcdFx0XHRcdFx0Y2xvc2VPblNjcm9sbD17KCkgPT4gdHJ1ZX1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBmaWVsZC5vbkNoYW5nZShlKX1cclxuXHRcdFx0XHRcdFx0c2VsZWN0ZWQ9e2ZpZWxkLnZhbHVlfVxyXG5cdFx0XHRcdFx0XHRzaG93UG9wcGVyQXJyb3c9e2ZhbHNlfVxyXG5cdFx0XHRcdFx0XHRkYXRlRm9ybWF0PVwiZCBNTU0geXl5eVwiXHJcblx0XHRcdFx0XHRcdGNhbGVuZGFyQ2xhc3NOYW1lPVwiY3VzdG9tLWNhbGVuZGFyXCJcclxuXHRcdFx0XHRcdFx0ZGF5Q2xhc3NOYW1lPXsoKSA9PiAnY3VzdG9tLWRheSd9XHJcblx0XHRcdFx0XHRcdGN1c3RvbUlucHV0PXtcclxuXHRcdFx0XHRcdFx0XHQ8Q2FsZW5kYXJJbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT17ZmllbGQubmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdGhhc0Vycm9yPXtmaWVsZFN0YXRlLmludmFsaWR9XHJcblx0XHRcdFx0XHRcdFx0XHRlcnJvcj17ZmllbGRTdGF0ZS5lcnJvcj8ubWVzc2FnZX1cclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtmaWVsZC52YWx1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtsYWJlbH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHJlbmRlckN1c3RvbUhlYWRlcj17KHsgbW9udGhEYXRlLCBkZWNyZWFzZU1vbnRoLCBpbmNyZWFzZU1vbnRoIH0pID0+IChcclxuXHRcdFx0XHRcdFx0XHQ8Q2FsZW5kYXJIZWFkZXJcclxuXHRcdFx0XHRcdFx0XHRcdG1vbnRoRGF0ZT17bW9udGhEYXRlfVxyXG5cdFx0XHRcdFx0XHRcdFx0ZGVjcmVhc2VNb250aD17ZGVjcmVhc2VNb250aH1cclxuXHRcdFx0XHRcdFx0XHRcdGluY3JlYXNlTW9udGg9e2luY3JlYXNlTW9udGh9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0KX1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PERhdGVQaWNrZXJTdHlsZXMgLz5cclxuXHRcdDwvV3JhcHBlcj5cclxuXHQpO1xyXG59O1xyXG5cclxuLy8gTmVlZCB0aGlzIGFyYml0cmFyeSBkaXYgdG8gcHJldmVudCB0aGUgZGF0ZS1waWNrZXIgZnJvbSBwdXNoaW5nIGNvbnRlbnQgYmVsb3cgaXQgZG93biBhIGZleCBweFxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBgO1xyXG5cclxuLy8gT3ZlcmlkZSByZWFjdC1kYXRlcGlja2VyIHN0eWxlcyB3aXRoIGEgZ29iYWxzdHlsZSB0aGlzIGEgYml0IGhhY2t5IGJ1dCBvbmx5IHdvcmthcm91bmQgSSBjb3VsZCBmaW5kIHRoYXQgd2FzIHVzZWFibGVcclxuY29uc3QgRGF0ZVBpY2tlclN0eWxlcyA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4uY3VzdG9tLWNhbGVuZGFyIHtcclxuICAgICAke2g0VGV4dFN0eWxlfTtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy53aGl0ZX07XHJcbiAgICAgcGFkZGluZzogMjJweCAxMHB4IDIycHggMTBweDtcclxuICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSg3MiwgODQsIDE1OSwgMC4yNSk7XHJcblx0XHQgXHJcbn1cclxuXHJcbi5jdXN0b20tZGF5e1xyXG5cdGNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy5kYXJrWzFdfTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgY29sb3I6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLnByaW1hcnlbMV19O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucmVhY3QtZGF0ZXBpY2tlcl9fZGF5LS1zZWxlY3RlZCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMucHJpbWFyeVsxXX07XHJcbiAgY29sb3I6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLndoaXRlfTtcclxufVxyXG5cclxuLnJlYWN0LWRhdGVwaWNrZXJfX2RheS0ta2V5Ym9hcmQtc2VsZWN0ZWQge1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLnByaW1hcnlbMV19O1xyXG4gICAgIGNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy53aGl0ZX07XHJcbn1cclxuXHJcblxyXG4ucmVhY3QtZGF0ZXBpY2tlcl9fZGF5LS1vdXRzaWRlLW1vbnRoe1xyXG4gICAgICBjb2xvcjogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMuZGFya1sxXX07XHJcbiAgICAgIG9wYWNpdHk6IDAuMDg7XHJcbiAgICAgfVxyXG5cclxuXHRcdCAucmVhY3QtZGF0ZXBpY2tlcl9fZGF5LW5hbWVze1xyXG4gICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbiAucmVhY3QtZGF0ZXBpY2tlcl9faGVhZGVye1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgYm9yZGVyOiBub25lO1xyXG59XHJcbmA7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdERhdGVQaWNrZXIiLCJDb250cm9sbGVyIiwidXNlRm9ybUNvbnRleHQiLCJzdHlsZWQiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIkNhbGVuZGFySGVhZGVyIiwiQ2FsZW5kYXJJbnB1dCIsImg0VGV4dFN0eWxlIiwiRGF0ZUZpZWxkIiwic3R5bGUiLCJsYWJlbCIsIm5hbWUiLCJjb250cm9sIiwiZmllbGQiLCJmaWVsZFN0YXRlIiwiZSIsIm9uQ2hhbmdlIiwidmFsdWUiLCJpbnZhbGlkIiwiZXJyb3IiLCJtZXNzYWdlIiwibW9udGhEYXRlIiwiZGVjcmVhc2VNb250aCIsImluY3JlYXNlTW9udGgiLCJXcmFwcGVyIiwiZGl2IiwiRGF0ZVBpY2tlclN0eWxlcyIsInAiLCJ0aGVtZSIsIkNPTE9SUyIsIndoaXRlIiwiZGFyayIsInByaW1hcnkiXSwic291cmNlUm9vdCI6IiJ9