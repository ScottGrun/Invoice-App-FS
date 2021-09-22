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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW52b2ljZS9baWRdLjgxYzQ3MjI3MDUwNDdhNWY5MmRjLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQVFPLElBQU1RLFNBQTZCLEdBQUcsU0FBaENBLFNBQWdDLE9BQTRCO0FBQUE7O0FBQUEsTUFBekJDLEtBQXlCLFFBQXpCQSxLQUF5QjtBQUFBLE1BQWxCQyxLQUFrQixRQUFsQkEsS0FBa0I7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQ3hFLHdCQUFvQlQsK0RBQWMsRUFBbEM7QUFBQSxNQUFRVSxPQUFSLG1CQUFRQSxPQUFSOztBQUVBLHNCQUNDLDhEQUFDLE9BQUQ7QUFBUyxTQUFLLEVBQUVILEtBQWhCO0FBQUEsNEJBQ0MsOERBQUMsdURBQUQ7QUFDQyxVQUFJLEVBQUVFLElBRFA7QUFFQyxhQUFPLEVBQUVDLE9BRlY7QUFHQyxZQUFNLEVBQUU7QUFBQTs7QUFBQSxZQUFHQyxLQUFILFNBQUdBLEtBQUg7QUFBQSxZQUFVQyxVQUFWLFNBQVVBLFVBQVY7QUFBQSw0QkFDUCw4REFBQyx5REFBRDtBQUNDLHVCQUFhLEVBQUU7QUFBQSxtQkFBTSxJQUFOO0FBQUEsV0FEaEI7QUFFQyxrQkFBUSxFQUFFLGtCQUFDQyxDQUFEO0FBQUEsbUJBQU9GLEtBQUssQ0FBQ0csUUFBTixDQUFlRCxDQUFmLENBQVA7QUFBQSxXQUZYO0FBR0Msa0JBQVEsRUFBRUYsS0FBSyxDQUFDSSxLQUhqQjtBQUlDLHlCQUFlLEVBQUUsS0FKbEI7QUFLQyxvQkFBVSxFQUFDLFlBTFo7QUFNQywyQkFBaUIsRUFBQyxpQkFObkI7QUFPQyxzQkFBWSxFQUFFO0FBQUEsbUJBQU0sWUFBTjtBQUFBLFdBUGY7QUFRQyxxQkFBVyxlQUNWLDhEQUFDLHlEQUFEO0FBQ0MsZ0JBQUksRUFBRUosS0FBSyxDQUFDRixJQURiO0FBRUMsb0JBQVEsRUFBRUcsVUFBVSxDQUFDSSxPQUZ0QjtBQUdDLGlCQUFLLHVCQUFFSixVQUFVLENBQUNLLEtBQWIsc0RBQUUsa0JBQWtCQyxPQUgxQjtBQUlDLGlCQUFLLEVBQUVQLEtBQUssQ0FBQ0ksS0FBTixDQUFZSSxZQUFaLEVBSlI7QUFLQyxpQkFBSyxFQUFFWDtBQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEY7QUFpQkMsNEJBQWtCLEVBQUU7QUFBQSxnQkFBR1ksU0FBSCxTQUFHQSxTQUFIO0FBQUEsZ0JBQWNDLGFBQWQsU0FBY0EsYUFBZDtBQUFBLGdCQUE2QkMsYUFBN0IsU0FBNkJBLGFBQTdCO0FBQUEsZ0NBQ25CLDhEQUFDLDJEQUFEO0FBQ0MsdUJBQVMsRUFBRUYsU0FEWjtBQUVDLDJCQUFhLEVBQUVDLGFBRmhCO0FBR0MsMkJBQWEsRUFBRUM7QUFIaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEbUI7QUFBQTtBQWpCckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFETztBQUFBO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBZ0NDLDhEQUFDLGdCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFvQ0EsQ0F2Q00sRUF5Q1A7O0dBekNhaEI7VUFDUU47OztLQURSTTtBQTBDYixJQUFNaUIsT0FBTyxHQUFHdEIscUVBQUg7QUFBQTtBQUFBO0FBQUEsUUFBYixFQUVBOztNQUZNc0I7QUFHTixJQUFNRSxnQkFBZ0IsR0FBR3ZCLG9FQUFILHNpQkFFZkcsMkRBRmUsRUFHRyxVQUFDcUIsQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxNQUFSLENBQWVDLEtBQXRCO0FBQUEsQ0FISCxFQVlaLFVBQUNILENBQUQ7QUFBQSxTQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUUMsTUFBUixDQUFlRSxJQUFmLENBQW9CLENBQXBCLENBQVA7QUFBQSxDQVpZLEVBZUosVUFBQ0osQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxNQUFSLENBQWVHLE9BQWYsQ0FBdUIsQ0FBdkIsQ0FBUDtBQUFBLENBZkksRUFvQkQsVUFBQ0wsQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxNQUFSLENBQWVHLE9BQWYsQ0FBdUIsQ0FBdkIsQ0FBUDtBQUFBLENBcEJDLEVBcUJYLFVBQUNMLENBQUQ7QUFBQSxTQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUUMsTUFBUixDQUFlQyxLQUF0QjtBQUFBLENBckJXLEVBeUJHLFVBQUNILENBQUQ7QUFBQSxTQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUUMsTUFBUixDQUFlRyxPQUFmLENBQXVCLENBQXZCLENBQVA7QUFBQSxDQXpCSCxFQTBCUixVQUFDTCxDQUFEO0FBQUEsU0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLE1BQVIsQ0FBZUMsS0FBdEI7QUFBQSxDQTFCUSxFQStCUCxVQUFDSCxDQUFEO0FBQUEsU0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLE1BQVIsQ0FBZUUsSUFBZixDQUFvQixDQUFwQixDQUFQO0FBQUEsQ0EvQk8sQ0FBdEI7TUFBTUwiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtL0ZpZWxkcy9EYXRlRmllbGQvRGF0ZUZpZWxkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RGF0ZVBpY2tlciwgeyBSZWFjdERhdGVQaWNrZXJQcm9wcyB9IGZyb20gJ3JlYWN0LWRhdGVwaWNrZXInO1xyXG5pbXBvcnQgeyBDb250cm9sbGVyLCB1c2VGb3JtQ29udGV4dCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCBzdHlsZWQsIHsgY3JlYXRlR2xvYmFsU3R5bGUsIENTU1Byb3BlcnRpZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBDYWxlbmRhckhlYWRlciB9IGZyb20gJy4vQ2FsZW5kYXJIZWFkZXInO1xyXG5pbXBvcnQgeyBDYWxlbmRhcklucHV0IH0gZnJvbSAnLi9DYWxlbmRhcklucHV0JztcclxuXHJcbmltcG9ydCB7IGg0VGV4dFN0eWxlIH0gZnJvbSAnQC9zdHlsZXMvdHlwb2dyYXBoeSc7XHJcblxyXG5pbnRlcmZhY2UgRGF0ZUZpZWxkUHJvcHMgZXh0ZW5kcyBPbWl0PFJlYWN0RGF0ZVBpY2tlclByb3BzLCAnb25DaGFuZ2UnPiB7XHJcblx0c3R5bGU/OiBDU1NQcm9wZXJ0aWVzO1xyXG5cdGxhYmVsOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGF0ZUZpZWxkOiBGQzxEYXRlRmllbGRQcm9wcz4gPSAoeyBzdHlsZSwgbGFiZWwsIG5hbWUgfSkgPT4ge1xyXG5cdGNvbnN0IHsgY29udHJvbCB9ID0gdXNlRm9ybUNvbnRleHQoKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxXcmFwcGVyIHN0eWxlPXtzdHlsZX0+XHJcblx0XHRcdDxDb250cm9sbGVyXHJcblx0XHRcdFx0bmFtZT17bmFtZX1cclxuXHRcdFx0XHRjb250cm9sPXtjb250cm9sfVxyXG5cdFx0XHRcdHJlbmRlcj17KHsgZmllbGQsIGZpZWxkU3RhdGUgfSkgPT4gKFxyXG5cdFx0XHRcdFx0PFJlYWN0RGF0ZVBpY2tlclxyXG5cdFx0XHRcdFx0XHRjbG9zZU9uU2Nyb2xsPXsoKSA9PiB0cnVlfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IGZpZWxkLm9uQ2hhbmdlKGUpfVxyXG5cdFx0XHRcdFx0XHRzZWxlY3RlZD17ZmllbGQudmFsdWV9XHJcblx0XHRcdFx0XHRcdHNob3dQb3BwZXJBcnJvdz17ZmFsc2V9XHJcblx0XHRcdFx0XHRcdGRhdGVGb3JtYXQ9XCJkIE1NTSB5eXl5XCJcclxuXHRcdFx0XHRcdFx0Y2FsZW5kYXJDbGFzc05hbWU9XCJjdXN0b20tY2FsZW5kYXJcIlxyXG5cdFx0XHRcdFx0XHRkYXlDbGFzc05hbWU9eygpID0+ICdjdXN0b20tZGF5J31cclxuXHRcdFx0XHRcdFx0Y3VzdG9tSW5wdXQ9e1xyXG5cdFx0XHRcdFx0XHRcdDxDYWxlbmRhcklucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPXtmaWVsZC5uYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0aGFzRXJyb3I9e2ZpZWxkU3RhdGUuaW52YWxpZH1cclxuXHRcdFx0XHRcdFx0XHRcdGVycm9yPXtmaWVsZFN0YXRlLmVycm9yPy5tZXNzYWdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2ZpZWxkLnZhbHVlLnRvRGF0ZVN0cmluZygpfVxyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9e2xhYmVsfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0cmVuZGVyQ3VzdG9tSGVhZGVyPXsoeyBtb250aERhdGUsIGRlY3JlYXNlTW9udGgsIGluY3JlYXNlTW9udGggfSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdDxDYWxlbmRhckhlYWRlclxyXG5cdFx0XHRcdFx0XHRcdFx0bW9udGhEYXRlPXttb250aERhdGV9XHJcblx0XHRcdFx0XHRcdFx0XHRkZWNyZWFzZU1vbnRoPXtkZWNyZWFzZU1vbnRofVxyXG5cdFx0XHRcdFx0XHRcdFx0aW5jcmVhc2VNb250aD17aW5jcmVhc2VNb250aH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQpfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8RGF0ZVBpY2tlclN0eWxlcyAvPlxyXG5cdFx0PC9XcmFwcGVyPlxyXG5cdCk7XHJcbn07XHJcblxyXG4vLyBOZWVkIHRoaXMgYXJiaXRyYXJ5IGRpdiB0byBwcmV2ZW50IHRoZSBkYXRlLXBpY2tlciBmcm9tIHB1c2hpbmcgY29udGVudCBiZWxvdyBpdCBkb3duIGEgZmV4IHB4XHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YGA7XHJcblxyXG4vLyBPdmVyaWRlIHJlYWN0LWRhdGVwaWNrZXIgc3R5bGVzIHdpdGggYSBnb2JhbHN0eWxlIHRoaXMgYSBiaXQgaGFja3kgYnV0IG9ubHkgd29ya2Fyb3VuZCBJIGNvdWxkIGZpbmQgdGhhdCB3YXMgdXNlYWJsZVxyXG5jb25zdCBEYXRlUGlja2VyU3R5bGVzID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbi5jdXN0b20tY2FsZW5kYXIge1xyXG4gICAgICR7aDRUZXh0U3R5bGV9O1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLndoaXRlfTtcclxuICAgICBwYWRkaW5nOiAyMnB4IDEwcHggMjJweCAxMHB4O1xyXG4gICAgIGJvcmRlcjogbm9uZTtcclxuICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDcyLCA4NCwgMTU5LCAwLjI1KTtcclxuXHRcdCBcclxufVxyXG5cclxuLmN1c3RvbS1kYXl7XHJcblx0Y29sb3I6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLmRhcmtbMV19O1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICBjb2xvcjogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMucHJpbWFyeVsxXX07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5yZWFjdC1kYXRlcGlja2VyX19kYXktLXNlbGVjdGVkIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy5wcmltYXJ5WzFdfTtcclxuICBjb2xvcjogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMud2hpdGV9O1xyXG59XHJcblxyXG4ucmVhY3QtZGF0ZXBpY2tlcl9fZGF5LS1rZXlib2FyZC1zZWxlY3RlZCB7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMucHJpbWFyeVsxXX07XHJcbiAgICAgY29sb3I6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLndoaXRlfTtcclxufVxyXG5cclxuXHJcbi5yZWFjdC1kYXRlcGlja2VyX19kYXktLW91dHNpZGUtbW9udGh7XHJcbiAgICAgIGNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy5kYXJrWzFdfTtcclxuICAgICAgb3BhY2l0eTogMC4wODtcclxuICAgICB9XHJcblxyXG5cdFx0IC5yZWFjdC1kYXRlcGlja2VyX19kYXktbmFtZXN7XHJcbiAgICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuIC5yZWFjdC1kYXRlcGlja2VyX19oZWFkZXJ7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgcGFkZGluZzogMDtcclxuICAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuYDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0RGF0ZVBpY2tlciIsIkNvbnRyb2xsZXIiLCJ1c2VGb3JtQ29udGV4dCIsInN0eWxlZCIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiQ2FsZW5kYXJIZWFkZXIiLCJDYWxlbmRhcklucHV0IiwiaDRUZXh0U3R5bGUiLCJEYXRlRmllbGQiLCJzdHlsZSIsImxhYmVsIiwibmFtZSIsImNvbnRyb2wiLCJmaWVsZCIsImZpZWxkU3RhdGUiLCJlIiwib25DaGFuZ2UiLCJ2YWx1ZSIsImludmFsaWQiLCJlcnJvciIsIm1lc3NhZ2UiLCJ0b0RhdGVTdHJpbmciLCJtb250aERhdGUiLCJkZWNyZWFzZU1vbnRoIiwiaW5jcmVhc2VNb250aCIsIldyYXBwZXIiLCJkaXYiLCJEYXRlUGlja2VyU3R5bGVzIiwicCIsInRoZW1lIiwiQ09MT1JTIiwid2hpdGUiLCJkYXJrIiwicHJpbWFyeSJdLCJzb3VyY2VSb290IjoiIn0=