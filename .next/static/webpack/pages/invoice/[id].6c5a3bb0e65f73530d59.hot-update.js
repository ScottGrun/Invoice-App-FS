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
/* harmony import */ var C_Users_scott_Documents_GitHub_Invoice_App_FS_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_currency_input_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-currency-input-field */ "./node_modules/react-currency-input-field/dist/index.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _FormField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormField */ "./components/Form/Fields/FormField.tsx");
/* harmony import */ var _PriceField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PriceField */ "./components/Form/Fields/PriceField.tsx");
/* harmony import */ var _styles_typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/typography */ "./styles/typography.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\scott\\Documents\\GitHub\\Invoice-App-FS\\components\\Form\\Fields\\ItemField.tsx",
    _this = undefined,
    _s = $RefreshSig$();









var ItemField = function ItemField(_ref) {
  _s();

  var _invoiceItem$price;

  var idx = _ref.idx,
      remove = _ref.remove;

  var _useFormContext = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)(),
      control = _useFormContext.control,
      getValues = _useFormContext.getValues;

  var _useState = useState(0),
      _useState2 = (0,C_Users_scott_Documents_GitHub_Invoice_App_FS_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      total = _useState2[0],
      setTotal = _useState2[1];

  var watchedQuantityAndPrice = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useWatch)({
    control: control,
    name: ["invoice_items[".concat(idx, "].quantity"), "invoice_items[".concat(idx, "].price")]
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {}, []);
  var invoiceItem = getValues('invoice_items')[idx];

  var calculateTotal = function calculateTotal() {
    var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    if (isNaN(price) || isNaN(quantity)) {
      return '0';
    }

    return (quantity * price / 100).toFixed(2).toString();
  };

  var formattedTotal = (0,react_currency_input_field__WEBPACK_IMPORTED_MODULE_2__.formatValue)({
    value: calculateTotal(invoiceItem === null || invoiceItem === void 0 ? void 0 : invoiceItem.quantity, invoiceItem === null || invoiceItem === void 0 ? void 0 : invoiceItem.price),
    groupSeparator: ',',
    decimalScale: 2,
    decimalSeparator: '.',
    prefix: '$'
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Wrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(ItemName, {
      label: "Item Name",
      name: "invoice_items[".concat(idx, "].name"),
      type: "text"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Quantity, {
      label: "Qty",
      name: "invoice_items[".concat(idx, "].quantity"),
      type: "number",
      min: 0
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_PriceField__WEBPACK_IMPORTED_MODULE_5__.PriceField, {
      formPriceValue: (_invoiceItem$price = invoiceItem === null || invoiceItem === void 0 ? void 0 : invoiceItem.price) !== null && _invoiceItem$price !== void 0 ? _invoiceItem$price : 0,
      name: "invoice_items[".concat(idx, "].price")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(TotalWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
        children: "Total"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(TotalPrice, {
        children: formattedTotal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(DeleteButton, {
      type: "button",
      onClick: function onClick() {
        return remove(idx);
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("svg", {
        width: "13",
        height: "16",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("path", {
          d: "M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z",
          fillRule: "nonzero"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 3
  }, _this);
};

_s(ItemField, "aByZnP8TwP6/wOXwTZNzbxvBnm8=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext, react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useWatch];
});

_c = ItemField;
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__.default.fieldset.withConfig({
  displayName: "ItemField__Wrapper",
  componentId: "sc-twlod0-0"
})(["display:flex;flex-flow:row;flex-wrap:wrap;gap:16px;width:100%;@media ", "{gap:revert;flex-wrap:revert;}"], function (p) {
  return p.theme.QUERIES.tabletAndUp;
}); // Item Name Field

_c2 = Wrapper;
var ItemName = (0,styled_components__WEBPACK_IMPORTED_MODULE_8__.default)(_FormField__WEBPACK_IMPORTED_MODULE_4__.FormField).withConfig({
  displayName: "ItemField__ItemName",
  componentId: "sc-twlod0-1"
})(["min-width:309px;width:100%;@media ", "{min-width:revert;width:214px;margin-right:16px;}"], function (p) {
  return p.theme.QUERIES.tabletAndUp;
}); // Quanity Field

_c3 = ItemName;
var Quantity = (0,styled_components__WEBPACK_IMPORTED_MODULE_8__.default)(_FormField__WEBPACK_IMPORTED_MODULE_4__.FormField).withConfig({
  displayName: "ItemField__Quantity",
  componentId: "sc-twlod0-2"
})(["max-width:64px;span{text-align:center;}input{padding:0;padding-left:20px;}@media ", "{margin-right:16px;width:46px;div{justify-content:center;}input{padding:0;text-align:center;}}"], function (p) {
  return p.theme.QUERIES.tabletAndUp;
}); // Total Display (styled to look like field)

_c4 = Quantity;
var TotalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__.default.div.withConfig({
  displayName: "ItemField__TotalWrapper",
  componentId: "sc-twlod0-3"
})(["", ";display:flex;flex-flow:column;color:", ";max-width:60px;span{margin-bottom:10px;}@media ", "{}"], _styles_typography__WEBPACK_IMPORTED_MODULE_6__.bodyTextStyle, function (p) {
  return p.theme.COLORS.primary[3];
}, function (p) {
  return p.theme.QUERIES.tabletAndUp;
});
_c5 = TotalWrapper;
var TotalPrice = styled_components__WEBPACK_IMPORTED_MODULE_8__.default.p.withConfig({
  displayName: "ItemField__TotalPrice",
  componentId: "sc-twlod0-4"
})(["", ";display:flex;align-items:center;height:48px;width:90px;overflow:auto;"], _styles_typography__WEBPACK_IMPORTED_MODULE_6__.h4TextStyle); // Delete Item button

_c6 = TotalPrice;
var DeleteButton = styled_components__WEBPACK_IMPORTED_MODULE_8__.default.button.withConfig({
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

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithHoles; }
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArrayLimit; }
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableRest; }
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _slicedToArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__.default)(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__.default)(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW52b2ljZS9baWRdLjZjNWEzYmIwZTY1ZjczNTMwZDU5LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQU9PLElBQU1VLFNBQTZCLEdBQUcsU0FBaENBLFNBQWdDLE9BQXFCO0FBQUE7O0FBQUE7O0FBQUEsTUFBbEJDLEdBQWtCLFFBQWxCQSxHQUFrQjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFDakUsd0JBQStCVCwrREFBYyxFQUE3QztBQUFBLE1BQVFVLE9BQVIsbUJBQVFBLE9BQVI7QUFBQSxNQUFpQkMsU0FBakIsbUJBQWlCQSxTQUFqQjs7QUFDQSxrQkFBMEJDLFFBQVEsQ0FBQyxDQUFELENBQWxDO0FBQUE7QUFBQSxNQUFPQyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxNQUFNQyx1QkFBdUIsR0FBR2QseURBQVEsQ0FBQztBQUN4Q1MsSUFBQUEsT0FBTyxFQUFQQSxPQUR3QztBQUV4Q00sSUFBQUEsSUFBSSxFQUFFLHlCQUFrQlIsR0FBbEIseUNBQW9EQSxHQUFwRDtBQUZrQyxHQUFELENBQXhDO0FBS0FWLEVBQUFBLGdEQUFTLENBQUMsWUFBTSxDQUFFLENBQVQsRUFBVyxFQUFYLENBQVQ7QUFFQSxNQUFNbUIsV0FBVyxHQUFHTixTQUFTLENBQUMsZUFBRCxDQUFULENBQTJCSCxHQUEzQixDQUFwQjs7QUFFQSxNQUFNVSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQTZCO0FBQUEsUUFBNUJDLEtBQTRCLHVFQUFwQixDQUFvQjtBQUFBLFFBQWpCQyxRQUFpQix1RUFBTixDQUFNOztBQUNuRCxRQUFJQyxLQUFLLENBQUNGLEtBQUQsQ0FBTCxJQUFnQkUsS0FBSyxDQUFDRCxRQUFELENBQXpCLEVBQXFDO0FBQ3BDLGFBQU8sR0FBUDtBQUNBOztBQUVELFdBQU8sQ0FBRUEsUUFB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QixZQUFZLHVFQUEwQixZQUFZLDREQUFlO0FBQ3JIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9ybS9GaWVsZHMvSXRlbUZpZWxkLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aEhvbGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBmb3JtYXRWYWx1ZSB9IGZyb20gJ3JlYWN0LWN1cnJlbmN5LWlucHV0LWZpZWxkJztcclxuaW1wb3J0IHsgdXNlRm9ybUNvbnRleHQsIHVzZVdhdGNoIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBGb3JtRmllbGQgfSBmcm9tICcuL0Zvcm1GaWVsZCc7XHJcbmltcG9ydCB7IFByaWNlRmllbGQgfSBmcm9tICcuL1ByaWNlRmllbGQnO1xyXG5cclxuaW1wb3J0IHsgYm9keVRleHRTdHlsZSwgaDRUZXh0U3R5bGUgfSBmcm9tICdAL3N0eWxlcy90eXBvZ3JhcGh5JztcclxuXHJcbmludGVyZmFjZSBJdGVtRmllbGRQcm9wcyB7XHJcblx0aWR4OiBudW1iZXI7XHJcblx0cmVtb3ZlOiAoaW5kZXg/OiBudW1iZXIgfCBudW1iZXJbXSB8IHVuZGVmaW5lZCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEl0ZW1GaWVsZDogRkM8SXRlbUZpZWxkUHJvcHM+ID0gKHsgaWR4LCByZW1vdmUgfSkgPT4ge1xyXG5cdGNvbnN0IHsgY29udHJvbCwgZ2V0VmFsdWVzIH0gPSB1c2VGb3JtQ29udGV4dCgpO1xyXG5cdGNvbnN0IFt0b3RhbCwgc2V0VG90YWxdID0gdXNlU3RhdGUoMCk7XHJcblx0Y29uc3Qgd2F0Y2hlZFF1YW50aXR5QW5kUHJpY2UgPSB1c2VXYXRjaCh7XHJcblx0XHRjb250cm9sLFxyXG5cdFx0bmFtZTogW2BpbnZvaWNlX2l0ZW1zWyR7aWR4fV0ucXVhbnRpdHlgLCBgaW52b2ljZV9pdGVtc1ske2lkeH1dLnByaWNlYF0sXHJcblx0fSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7fSwgW10pO1xyXG5cclxuXHRjb25zdCBpbnZvaWNlSXRlbSA9IGdldFZhbHVlcygnaW52b2ljZV9pdGVtcycpW2lkeF07XHJcblxyXG5cdGNvbnN0IGNhbGN1bGF0ZVRvdGFsID0gKHByaWNlID0gMCwgcXVhbnRpdHkgPSAwKSA9PiB7XHJcblx0XHRpZiAoaXNOYU4ocHJpY2UpIHx8IGlzTmFOKHF1YW50aXR5KSkge1xyXG5cdFx0XHRyZXR1cm4gJzAnO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiAoKHF1YW50aXR5ICogcHJpY2UpIC8gMTAwKS50b0ZpeGVkKDIpLnRvU3RyaW5nKCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZm9ybWF0dGVkVG90YWwgPSBmb3JtYXRWYWx1ZSh7XHJcblx0XHR2YWx1ZTogY2FsY3VsYXRlVG90YWwoaW52b2ljZUl0ZW0/LnF1YW50aXR5LCBpbnZvaWNlSXRlbT8ucHJpY2UpLFxyXG5cdFx0Z3JvdXBTZXBhcmF0b3I6ICcsJyxcclxuXHRcdGRlY2ltYWxTY2FsZTogMixcclxuXHRcdGRlY2ltYWxTZXBhcmF0b3I6ICcuJyxcclxuXHRcdHByZWZpeDogJyQnLFxyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PFdyYXBwZXI+XHJcblx0XHRcdDxJdGVtTmFtZSBsYWJlbD1cIkl0ZW0gTmFtZVwiIG5hbWU9e2BpbnZvaWNlX2l0ZW1zWyR7aWR4fV0ubmFtZWB9IHR5cGU9XCJ0ZXh0XCIgLz5cclxuXHRcdFx0PFF1YW50aXR5IGxhYmVsPVwiUXR5XCIgbmFtZT17YGludm9pY2VfaXRlbXNbJHtpZHh9XS5xdWFudGl0eWB9IHR5cGU9XCJudW1iZXJcIiBtaW49ezB9IC8+XHJcblx0XHRcdDxQcmljZUZpZWxkIGZvcm1QcmljZVZhbHVlPXtpbnZvaWNlSXRlbT8ucHJpY2UgPz8gMH0gbmFtZT17YGludm9pY2VfaXRlbXNbJHtpZHh9XS5wcmljZWB9IC8+XHJcblx0XHRcdDxUb3RhbFdyYXBwZXI+XHJcblx0XHRcdFx0PHNwYW4+VG90YWw8L3NwYW4+XHJcblx0XHRcdFx0PFRvdGFsUHJpY2U+e2Zvcm1hdHRlZFRvdGFsfTwvVG90YWxQcmljZT5cclxuXHRcdFx0PC9Ub3RhbFdyYXBwZXI+XHJcblx0XHRcdDxEZWxldGVCdXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHJlbW92ZShpZHgpfT5cclxuXHRcdFx0XHQ8c3ZnIHdpZHRoPVwiMTNcIiBoZWlnaHQ9XCIxNlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuXHRcdFx0XHRcdDxwYXRoXHJcblx0XHRcdFx0XHRcdGQ9XCJNMTEuNTgzIDMuNTU2djEwLjY2NmMwIC45ODItLjc5NSAxLjc3OC0xLjc3NyAxLjc3OEgyLjY5NGExLjc3NyAxLjc3NyAwIDAxLTEuNzc3LTEuNzc4VjMuNTU2aDEwLjY2NnpNOC40NzMgMGwuODg4Ljg4OWgzLjExMXYxLjc3OEguMDI4Vi44ODloMy4xMUw0LjAyOSAwaDQuNDQ0elwiXHJcblx0XHRcdFx0XHRcdGZpbGxSdWxlPVwibm9uemVyb1wiXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvc3ZnPlxyXG5cdFx0XHQ8L0RlbGV0ZUJ1dHRvbj5cclxuXHRcdDwvV3JhcHBlcj5cclxuXHQpO1xyXG59O1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5maWVsZHNldGBcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZmxvdzogcm93O1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxuXHRnYXA6IDE2cHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0Z2FwOiByZXZlcnQ7XHJcblx0XHRmbGV4LXdyYXA6IHJldmVydDtcclxuXHR9XHJcbmA7XHJcblxyXG4vLyBJdGVtIE5hbWUgRmllbGRcclxuY29uc3QgSXRlbU5hbWUgPSBzdHlsZWQoRm9ybUZpZWxkKWBcclxuXHRtaW4td2lkdGg6IDMwOXB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdG1pbi13aWR0aDogcmV2ZXJ0O1xyXG5cdFx0d2lkdGg6IDIxNHB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG5cdH1cclxuYDtcclxuXHJcbi8vIFF1YW5pdHkgRmllbGRcclxuY29uc3QgUXVhbnRpdHkgPSBzdHlsZWQoRm9ybUZpZWxkKWBcclxuXHRtYXgtd2lkdGg6IDY0cHg7XHJcblx0c3BhbiB7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHRpbnB1dCB7XHJcblx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAyMHB4O1xyXG5cdH1cclxuXHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG5cdFx0d2lkdGg6IDQ2cHg7XHJcblxyXG5cdFx0ZGl2IHtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHR9XHJcblxyXG5cdFx0aW5wdXQge1xyXG5cdFx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHR9XHJcblx0fVxyXG5gO1xyXG5cclxuLy8gVG90YWwgRGlzcGxheSAoc3R5bGVkIHRvIGxvb2sgbGlrZSBmaWVsZClcclxuY29uc3QgVG90YWxXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuXHQke2JvZHlUZXh0U3R5bGV9O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1mbG93OiBjb2x1bW47XHJcblx0Y29sb3I6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLnByaW1hcnlbM119O1xyXG5cdG1heC13aWR0aDogNjBweDtcclxuXHJcblx0c3BhbiB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdH1cclxuXHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0LyogbWF4LXdpZHRoOiA0NXB4OyAqL1xyXG5cdH1cclxuYDtcclxuXHJcbmNvbnN0IFRvdGFsUHJpY2UgPSBzdHlsZWQucGBcclxuXHQke2g0VGV4dFN0eWxlfTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0aGVpZ2h0OiA0OHB4O1xyXG5cdHdpZHRoOiA5MHB4O1xyXG5cdG92ZXJmbG93OiBhdXRvO1xyXG5gO1xyXG5cclxuLy8gRGVsZXRlIEl0ZW0gYnV0dG9uXHJcbmNvbnN0IERlbGV0ZUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcblx0aGVpZ2h0OiA0OHB4O1xyXG5cdGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdHN2ZyB7XHJcblx0XHRmaWxsOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy5ncmV5WzFdfTtcclxuXHR9XHJcblxyXG5cdCY6aG92ZXIge1xyXG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cclxuXHRcdHN2ZyB7XHJcblx0XHRcdGZpbGw6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLndhcm5pbmdbMV19O1xyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdO1xuXG4gIGlmIChfaSA9PSBudWxsKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuXG4gIHZhciBfcywgX2U7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBhcnJheVdpdGhIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhIb2xlcy5qc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheUxpbWl0IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVJlc3QgZnJvbSBcIi4vbm9uSXRlcmFibGVSZXN0LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsImZvcm1hdFZhbHVlIiwidXNlRm9ybUNvbnRleHQiLCJ1c2VXYXRjaCIsInN0eWxlZCIsIkZvcm1GaWVsZCIsIlByaWNlRmllbGQiLCJib2R5VGV4dFN0eWxlIiwiaDRUZXh0U3R5bGUiLCJJdGVtRmllbGQiLCJpZHgiLCJyZW1vdmUiLCJjb250cm9sIiwiZ2V0VmFsdWVzIiwidXNlU3RhdGUiLCJ0b3RhbCIsInNldFRvdGFsIiwid2F0Y2hlZFF1YW50aXR5QW5kUHJpY2UiLCJuYW1lIiwiaW52b2ljZUl0ZW0iLCJjYWxjdWxhdGVUb3RhbCIsInByaWNlIiwicXVhbnRpdHkiLCJpc05hTiIsInRvRml4ZWQiLCJ0b1N0cmluZyIsImZvcm1hdHRlZFRvdGFsIiwidmFsdWUiLCJncm91cFNlcGFyYXRvciIsImRlY2ltYWxTY2FsZSIsImRlY2ltYWxTZXBhcmF0b3IiLCJwcmVmaXgiLCJXcmFwcGVyIiwiZmllbGRzZXQiLCJwIiwidGhlbWUiLCJRVUVSSUVTIiwidGFibGV0QW5kVXAiLCJJdGVtTmFtZSIsIlF1YW50aXR5IiwiVG90YWxXcmFwcGVyIiwiZGl2IiwiQ09MT1JTIiwicHJpbWFyeSIsIlRvdGFsUHJpY2UiLCJEZWxldGVCdXR0b24iLCJidXR0b24iLCJncmV5Iiwid2FybmluZyJdLCJzb3VyY2VSb290IjoiIn0=