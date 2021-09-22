"use strict";
self["webpackHotUpdate_N_E"]("pages/invoice/[id]",{

/***/ "./config/Form/ValidationSchema.ts":
/*!*****************************************!*\
  !*** ./config/Form/ValidationSchema.ts ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formSchema": function() { return /* binding */ formSchema; }
/* harmony export */ });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);
// import * as yup from 'yup';

var formSchema = (0,yup__WEBPACK_IMPORTED_MODULE_0__.object)().shape({
  user_street_address: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().required('Required'),
  user_city: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().required('Required'),
  user_post_code: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().required('Required'),
  user_country: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().required('Required'),
  client_name: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().required('Required'),
  client_email: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().email('Must be a valid email').required('Required'),
  client_street_address: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().required('Required'),
  client_city: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().required('Required'),
  clientPostCode: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().required('Required'),
  clientCountry: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().required('Required'),
  invoiceDate: (0,yup__WEBPACK_IMPORTED_MODULE_0__.date)().required('Required'),
  invoiceDueDate: (0,yup__WEBPACK_IMPORTED_MODULE_0__.date)().when('invoiceDate', function (invoiceDate, schema) {
    return invoiceDate && schema.min(invoiceDate, 'Must be after start date');
  }),
  projectDescription: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().required('Required'),
  invoiceItems: (0,yup__WEBPACK_IMPORTED_MODULE_0__.array)().of((0,yup__WEBPACK_IMPORTED_MODULE_0__.object)().shape({
    name: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().required('A Item Name is required.'),
    quantity: (0,yup__WEBPACK_IMPORTED_MODULE_0__.number)().nullable().transform(function (v, o) {
      return o === '' ? null : v;
    }),
    price: (0,yup__WEBPACK_IMPORTED_MODULE_0__.number)().nullable().transform(function (v, o) {
      return o === '' ? null : v;
    })
  })).min(1, 'Must have at least 1 billable item')
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW52b2ljZS9baWRdLjkyNjA1MmRiMTQ5MmY4YTZhOGEwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1LLFVBQVUsR0FBR0YsMkNBQU0sR0FBR0csS0FBVCxDQUFlO0FBQ3hDQyxFQUFBQSxtQkFBbUIsRUFBRVAsMkNBQU0sR0FBR1EsUUFBVCxDQUFrQixVQUFsQixDQURtQjtBQUV4Q0MsRUFBQUEsU0FBUyxFQUFFVCwyQ0FBTSxHQUFHUSxRQUFULENBQWtCLFVBQWxCLENBRjZCO0FBR3hDRSxFQUFBQSxjQUFjLEVBQUVWLDJDQUFNLEdBQUdRLFFBQVQsQ0FBa0IsVUFBbEIsQ0FId0I7QUFJeENHLEVBQUFBLFlBQVksRUFBRVgsMkNBQU0sR0FBR1EsUUFBVCxDQUFrQixVQUFsQixDQUowQjtBQUt4Q0ksRUFBQUEsV0FBVyxFQUFFWiwyQ0FBTSxHQUFHUSxRQUFULENBQWtCLFVBQWxCLENBTDJCO0FBTXhDSyxFQUFBQSxZQUFZLEVBQUViLDJDQUFNLEdBQUdjLEtBQVQsQ0FBZSx1QkFBZixFQUF3Q04sUUFBeEMsQ0FBaUQsVUFBakQsQ0FOMEI7QUFPeENPLEVBQUFBLHFCQUFxQixFQUFFZiwyQ0FBTSxHQUFHUSxRQUFULENBQWtCLFVBQWxCLENBUGlCO0FBUXhDUSxFQUFBQSxXQUFXLEVBQUVoQiwyQ0FBTSxHQUFHUSxRQUFULENBQWtCLFVBQWxCLENBUjJCO0FBU3hDUyxFQUFBQSxjQUFjLEVBQUVqQiwyQ0FBTSxHQUFHUSxRQUFULENBQWtCLFVBQWxCLENBVHdCO0FBVXhDVSxFQUFBQSxhQUFhLEVBQUVsQiwyQ0FBTSxHQUFHUSxRQUFULENBQWtCLFVBQWxCLENBVnlCO0FBV3hDVyxFQUFBQSxXQUFXLEVBQUVqQix5Q0FBSSxHQUFHTSxRQUFQLENBQWdCLFVBQWhCLENBWDJCO0FBWXhDWSxFQUFBQSxjQUFjLEVBQUVsQix5Q0FBSSxHQUFHbUIsSUFBUCxDQUNmLGFBRGUsRUFFZixVQUFDRixXQUFELEVBQWNHLE1BQWQ7QUFBQSxXQUF5QkgsV0FBVyxJQUFJRyxNQUFNLENBQUNDLEdBQVAsQ0FBV0osV0FBWCxFQUF3QiwwQkFBeEIsQ0FBeEM7QUFBQSxHQUZlLENBWndCO0FBZ0J4Q0ssRUFBQUEsa0JBQWtCLEVBQUV4QiwyQ0FBTSxHQUFHUSxRQUFULENBQWtCLFVBQWxCLENBaEJvQjtBQWlCeENpQixFQUFBQSxZQUFZLEVBQUV4QiwwQ0FBSyxHQUNqQnlCLEVBRFksQ0FFWnZCLDJDQUFNLEdBQUdHLEtBQVQsQ0FBZTtBQUNkcUIsSUFBQUEsSUFBSSxFQUFFM0IsMkNBQU0sR0FBR1EsUUFBVCxDQUFrQiwwQkFBbEIsQ0FEUTtBQUVkb0IsSUFBQUEsUUFBUSxFQUFFeEIsMkNBQU0sR0FDZHlCLFFBRFEsR0FFUkMsU0FGUSxDQUVFLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGFBQVdBLENBQUMsS0FBSyxFQUFOLEdBQVcsSUFBWCxHQUFrQkQsQ0FBN0I7QUFBQSxLQUZGLENBRkk7QUFLZEUsSUFBQUEsS0FBSyxFQUFFN0IsMkNBQU0sR0FDWHlCLFFBREssR0FFTEMsU0FGSyxDQUVLLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGFBQVdBLENBQUMsS0FBSyxFQUFOLEdBQVcsSUFBWCxHQUFrQkQsQ0FBN0I7QUFBQSxLQUZMO0FBTE8sR0FBZixDQUZZLEVBWVpSLEdBWlksQ0FZUixDQVpRLEVBWUwsb0NBWks7QUFqQjBCLENBQWYsQ0FBbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uZmlnL0Zvcm0vVmFsaWRhdGlvblNjaGVtYS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgKiBhcyB5dXAgZnJvbSAneXVwJztcclxuaW1wb3J0IHsgc3RyaW5nLCBhcnJheSwgZGF0ZSwgb2JqZWN0LCBudW1iZXIgfSBmcm9tICd5dXAnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1TY2hlbWEgPSBvYmplY3QoKS5zaGFwZSh7XHJcblx0dXNlcl9zdHJlZXRfYWRkcmVzczogc3RyaW5nKCkucmVxdWlyZWQoJ1JlcXVpcmVkJyksXHJcblx0dXNlcl9jaXR5OiBzdHJpbmcoKS5yZXF1aXJlZCgnUmVxdWlyZWQnKSxcclxuXHR1c2VyX3Bvc3RfY29kZTogc3RyaW5nKCkucmVxdWlyZWQoJ1JlcXVpcmVkJyksXHJcblx0dXNlcl9jb3VudHJ5OiBzdHJpbmcoKS5yZXF1aXJlZCgnUmVxdWlyZWQnKSxcclxuXHRjbGllbnRfbmFtZTogc3RyaW5nKCkucmVxdWlyZWQoJ1JlcXVpcmVkJyksXHJcblx0Y2xpZW50X2VtYWlsOiBzdHJpbmcoKS5lbWFpbCgnTXVzdCBiZSBhIHZhbGlkIGVtYWlsJykucmVxdWlyZWQoJ1JlcXVpcmVkJyksXHJcblx0Y2xpZW50X3N0cmVldF9hZGRyZXNzOiBzdHJpbmcoKS5yZXF1aXJlZCgnUmVxdWlyZWQnKSxcclxuXHRjbGllbnRfY2l0eTogc3RyaW5nKCkucmVxdWlyZWQoJ1JlcXVpcmVkJyksXHJcblx0Y2xpZW50UG9zdENvZGU6IHN0cmluZygpLnJlcXVpcmVkKCdSZXF1aXJlZCcpLFxyXG5cdGNsaWVudENvdW50cnk6IHN0cmluZygpLnJlcXVpcmVkKCdSZXF1aXJlZCcpLFxyXG5cdGludm9pY2VEYXRlOiBkYXRlKCkucmVxdWlyZWQoJ1JlcXVpcmVkJyksXHJcblx0aW52b2ljZUR1ZURhdGU6IGRhdGUoKS53aGVuKFxyXG5cdFx0J2ludm9pY2VEYXRlJyxcclxuXHRcdChpbnZvaWNlRGF0ZSwgc2NoZW1hKSA9PiBpbnZvaWNlRGF0ZSAmJiBzY2hlbWEubWluKGludm9pY2VEYXRlLCAnTXVzdCBiZSBhZnRlciBzdGFydCBkYXRlJylcclxuXHQpLFxyXG5cdHByb2plY3REZXNjcmlwdGlvbjogc3RyaW5nKCkucmVxdWlyZWQoJ1JlcXVpcmVkJyksXHJcblx0aW52b2ljZUl0ZW1zOiBhcnJheSgpXHJcblx0XHQub2YoXHJcblx0XHRcdG9iamVjdCgpLnNoYXBlKHtcclxuXHRcdFx0XHRuYW1lOiBzdHJpbmcoKS5yZXF1aXJlZCgnQSBJdGVtIE5hbWUgaXMgcmVxdWlyZWQuJyksXHJcblx0XHRcdFx0cXVhbnRpdHk6IG51bWJlcigpXHJcblx0XHRcdFx0XHQubnVsbGFibGUoKVxyXG5cdFx0XHRcdFx0LnRyYW5zZm9ybSgodiwgbykgPT4gKG8gPT09ICcnID8gbnVsbCA6IHYpKSxcclxuXHRcdFx0XHRwcmljZTogbnVtYmVyKClcclxuXHRcdFx0XHRcdC5udWxsYWJsZSgpXHJcblx0XHRcdFx0XHQudHJhbnNmb3JtKCh2LCBvKSA9PiAobyA9PT0gJycgPyBudWxsIDogdikpLFxyXG5cdFx0XHR9KVxyXG5cdFx0KVxyXG5cdFx0Lm1pbigxLCAnTXVzdCBoYXZlIGF0IGxlYXN0IDEgYmlsbGFibGUgaXRlbScpLFxyXG59KTtcclxuIl0sIm5hbWVzIjpbInN0cmluZyIsImFycmF5IiwiZGF0ZSIsIm9iamVjdCIsIm51bWJlciIsImZvcm1TY2hlbWEiLCJzaGFwZSIsInVzZXJfc3RyZWV0X2FkZHJlc3MiLCJyZXF1aXJlZCIsInVzZXJfY2l0eSIsInVzZXJfcG9zdF9jb2RlIiwidXNlcl9jb3VudHJ5IiwiY2xpZW50X25hbWUiLCJjbGllbnRfZW1haWwiLCJlbWFpbCIsImNsaWVudF9zdHJlZXRfYWRkcmVzcyIsImNsaWVudF9jaXR5IiwiY2xpZW50UG9zdENvZGUiLCJjbGllbnRDb3VudHJ5IiwiaW52b2ljZURhdGUiLCJpbnZvaWNlRHVlRGF0ZSIsIndoZW4iLCJzY2hlbWEiLCJtaW4iLCJwcm9qZWN0RGVzY3JpcHRpb24iLCJpbnZvaWNlSXRlbXMiLCJvZiIsIm5hbWUiLCJxdWFudGl0eSIsIm51bGxhYmxlIiwidHJhbnNmb3JtIiwidiIsIm8iLCJwcmljZSJdLCJzb3VyY2VSb290IjoiIn0=