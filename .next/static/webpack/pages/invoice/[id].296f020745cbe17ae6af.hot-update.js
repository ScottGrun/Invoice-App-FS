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
  client_post_code: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().required('Required'),
  client_country: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().required('Required'),
  invoice_date: (0,yup__WEBPACK_IMPORTED_MODULE_0__.date)().required('Required'),
  invoice_due_date: (0,yup__WEBPACK_IMPORTED_MODULE_0__.date)().when('invoice_date', function (invoice_date, schema) {
    return invoice_date && schema.min(invoice_date, 'Must be after start date');
  }),
  description: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().required('Required'),
  invoice_items: (0,yup__WEBPACK_IMPORTED_MODULE_0__.array)().of((0,yup__WEBPACK_IMPORTED_MODULE_0__.object)().shape({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW52b2ljZS9baWRdLjI5NmYwMjA3NDVjYmUxN2FlNmFmLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1LLFVBQVUsR0FBR0YsMkNBQU0sR0FBR0csS0FBVCxDQUFlO0FBQ3hDQyxFQUFBQSxtQkFBbUIsRUFBRVAsMkNBQU0sR0FBR1EsUUFBVCxDQUFrQixVQUFsQixDQURtQjtBQUV4Q0MsRUFBQUEsU0FBUyxFQUFFVCwyQ0FBTSxHQUFHUSxRQUFULENBQWtCLFVBQWxCLENBRjZCO0FBR3hDRSxFQUFBQSxjQUFjLEVBQUVWLDJDQUFNLEdBQUdRLFFBQVQsQ0FBa0IsVUFBbEIsQ0FId0I7QUFJeENHLEVBQUFBLFlBQVksRUFBRVgsMkNBQU0sR0FBR1EsUUFBVCxDQUFrQixVQUFsQixDQUowQjtBQUt4Q0ksRUFBQUEsV0FBVyxFQUFFWiwyQ0FBTSxHQUFHUSxRQUFULENBQWtCLFVBQWxCLENBTDJCO0FBTXhDSyxFQUFBQSxZQUFZLEVBQUViLDJDQUFNLEdBQUdjLEtBQVQsQ0FBZSx1QkFBZixFQUF3Q04sUUFBeEMsQ0FBaUQsVUFBakQsQ0FOMEI7QUFPeENPLEVBQUFBLHFCQUFxQixFQUFFZiwyQ0FBTSxHQUFHUSxRQUFULENBQWtCLFVBQWxCLENBUGlCO0FBUXhDUSxFQUFBQSxXQUFXLEVBQUVoQiwyQ0FBTSxHQUFHUSxRQUFULENBQWtCLFVBQWxCLENBUjJCO0FBU3hDUyxFQUFBQSxnQkFBZ0IsRUFBRWpCLDJDQUFNLEdBQUdRLFFBQVQsQ0FBa0IsVUFBbEIsQ0FUc0I7QUFVeENVLEVBQUFBLGNBQWMsRUFBRWxCLDJDQUFNLEdBQUdRLFFBQVQsQ0FBa0IsVUFBbEIsQ0FWd0I7QUFXeENXLEVBQUFBLFlBQVksRUFBRWpCLHlDQUFJLEdBQUdNLFFBQVAsQ0FBZ0IsVUFBaEIsQ0FYMEI7QUFZeENZLEVBQUFBLGdCQUFnQixFQUFFbEIseUNBQUksR0FBR21CLElBQVAsQ0FDakIsY0FEaUIsRUFFakIsVUFBQ0YsWUFBRCxFQUFlRyxNQUFmO0FBQUEsV0FBMEJILFlBQVksSUFBSUcsTUFBTSxDQUFDQyxHQUFQLENBQVdKLFlBQVgsRUFBeUIsMEJBQXpCLENBQTFDO0FBQUEsR0FGaUIsQ0Fac0I7QUFnQnhDSyxFQUFBQSxXQUFXLEVBQUV4QiwyQ0FBTSxHQUFHUSxRQUFULENBQWtCLFVBQWxCLENBaEIyQjtBQWlCeENpQixFQUFBQSxhQUFhLEVBQUV4QiwwQ0FBSyxHQUNsQnlCLEVBRGEsQ0FFYnZCLDJDQUFNLEdBQUdHLEtBQVQsQ0FBZTtBQUNkcUIsSUFBQUEsSUFBSSxFQUFFM0IsMkNBQU0sR0FBR1EsUUFBVCxDQUFrQiwwQkFBbEIsQ0FEUTtBQUVkb0IsSUFBQUEsUUFBUSxFQUFFeEIsMkNBQU0sR0FDZHlCLFFBRFEsR0FFUkMsU0FGUSxDQUVFLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGFBQVdBLENBQUMsS0FBSyxFQUFOLEdBQVcsSUFBWCxHQUFrQkQsQ0FBN0I7QUFBQSxLQUZGLENBRkk7QUFLZEUsSUFBQUEsS0FBSyxFQUFFN0IsMkNBQU0sR0FDWHlCLFFBREssR0FFTEMsU0FGSyxDQUVLLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGFBQVdBLENBQUMsS0FBSyxFQUFOLEdBQVcsSUFBWCxHQUFrQkQsQ0FBN0I7QUFBQSxLQUZMO0FBTE8sR0FBZixDQUZhLEVBWWJSLEdBWmEsQ0FZVCxDQVpTLEVBWU4sb0NBWk07QUFqQnlCLENBQWYsQ0FBbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uZmlnL0Zvcm0vVmFsaWRhdGlvblNjaGVtYS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgKiBhcyB5dXAgZnJvbSAneXVwJztcclxuaW1wb3J0IHsgc3RyaW5nLCBhcnJheSwgZGF0ZSwgb2JqZWN0LCBudW1iZXIgfSBmcm9tICd5dXAnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1TY2hlbWEgPSBvYmplY3QoKS5zaGFwZSh7XHJcblx0dXNlcl9zdHJlZXRfYWRkcmVzczogc3RyaW5nKCkucmVxdWlyZWQoJ1JlcXVpcmVkJyksXHJcblx0dXNlcl9jaXR5OiBzdHJpbmcoKS5yZXF1aXJlZCgnUmVxdWlyZWQnKSxcclxuXHR1c2VyX3Bvc3RfY29kZTogc3RyaW5nKCkucmVxdWlyZWQoJ1JlcXVpcmVkJyksXHJcblx0dXNlcl9jb3VudHJ5OiBzdHJpbmcoKS5yZXF1aXJlZCgnUmVxdWlyZWQnKSxcclxuXHRjbGllbnRfbmFtZTogc3RyaW5nKCkucmVxdWlyZWQoJ1JlcXVpcmVkJyksXHJcblx0Y2xpZW50X2VtYWlsOiBzdHJpbmcoKS5lbWFpbCgnTXVzdCBiZSBhIHZhbGlkIGVtYWlsJykucmVxdWlyZWQoJ1JlcXVpcmVkJyksXHJcblx0Y2xpZW50X3N0cmVldF9hZGRyZXNzOiBzdHJpbmcoKS5yZXF1aXJlZCgnUmVxdWlyZWQnKSxcclxuXHRjbGllbnRfY2l0eTogc3RyaW5nKCkucmVxdWlyZWQoJ1JlcXVpcmVkJyksXHJcblx0Y2xpZW50X3Bvc3RfY29kZTogc3RyaW5nKCkucmVxdWlyZWQoJ1JlcXVpcmVkJyksXHJcblx0Y2xpZW50X2NvdW50cnk6IHN0cmluZygpLnJlcXVpcmVkKCdSZXF1aXJlZCcpLFxyXG5cdGludm9pY2VfZGF0ZTogZGF0ZSgpLnJlcXVpcmVkKCdSZXF1aXJlZCcpLFxyXG5cdGludm9pY2VfZHVlX2RhdGU6IGRhdGUoKS53aGVuKFxyXG5cdFx0J2ludm9pY2VfZGF0ZScsXHJcblx0XHQoaW52b2ljZV9kYXRlLCBzY2hlbWEpID0+IGludm9pY2VfZGF0ZSAmJiBzY2hlbWEubWluKGludm9pY2VfZGF0ZSwgJ011c3QgYmUgYWZ0ZXIgc3RhcnQgZGF0ZScpXHJcblx0KSxcclxuXHRkZXNjcmlwdGlvbjogc3RyaW5nKCkucmVxdWlyZWQoJ1JlcXVpcmVkJyksXHJcblx0aW52b2ljZV9pdGVtczogYXJyYXkoKVxyXG5cdFx0Lm9mKFxyXG5cdFx0XHRvYmplY3QoKS5zaGFwZSh7XHJcblx0XHRcdFx0bmFtZTogc3RyaW5nKCkucmVxdWlyZWQoJ0EgSXRlbSBOYW1lIGlzIHJlcXVpcmVkLicpLFxyXG5cdFx0XHRcdHF1YW50aXR5OiBudW1iZXIoKVxyXG5cdFx0XHRcdFx0Lm51bGxhYmxlKClcclxuXHRcdFx0XHRcdC50cmFuc2Zvcm0oKHYsIG8pID0+IChvID09PSAnJyA/IG51bGwgOiB2KSksXHJcblx0XHRcdFx0cHJpY2U6IG51bWJlcigpXHJcblx0XHRcdFx0XHQubnVsbGFibGUoKVxyXG5cdFx0XHRcdFx0LnRyYW5zZm9ybSgodiwgbykgPT4gKG8gPT09ICcnID8gbnVsbCA6IHYpKSxcclxuXHRcdFx0fSlcclxuXHRcdClcclxuXHRcdC5taW4oMSwgJ011c3QgaGF2ZSBhdCBsZWFzdCAxIGJpbGxhYmxlIGl0ZW0nKSxcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJzdHJpbmciLCJhcnJheSIsImRhdGUiLCJvYmplY3QiLCJudW1iZXIiLCJmb3JtU2NoZW1hIiwic2hhcGUiLCJ1c2VyX3N0cmVldF9hZGRyZXNzIiwicmVxdWlyZWQiLCJ1c2VyX2NpdHkiLCJ1c2VyX3Bvc3RfY29kZSIsInVzZXJfY291bnRyeSIsImNsaWVudF9uYW1lIiwiY2xpZW50X2VtYWlsIiwiZW1haWwiLCJjbGllbnRfc3RyZWV0X2FkZHJlc3MiLCJjbGllbnRfY2l0eSIsImNsaWVudF9wb3N0X2NvZGUiLCJjbGllbnRfY291bnRyeSIsImludm9pY2VfZGF0ZSIsImludm9pY2VfZHVlX2RhdGUiLCJ3aGVuIiwic2NoZW1hIiwibWluIiwiZGVzY3JpcHRpb24iLCJpbnZvaWNlX2l0ZW1zIiwib2YiLCJuYW1lIiwicXVhbnRpdHkiLCJudWxsYWJsZSIsInRyYW5zZm9ybSIsInYiLCJvIiwicHJpY2UiXSwic291cmNlUm9vdCI6IiJ9