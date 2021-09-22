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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW52b2ljZS9baWRdLjU2YTIzMjUxYjVlM2FlNWE2ZDBkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1LLFVBQVUsR0FBR0YsMkNBQU0sR0FBR0csS0FBVCxDQUFlO0FBQ3hDQyxFQUFBQSxtQkFBbUIsRUFBRVAsMkNBQU0sR0FBR1EsUUFBVCxDQUFrQixVQUFsQixDQURtQjtBQUV4Q0MsRUFBQUEsU0FBUyxFQUFFVCwyQ0FBTSxHQUFHUSxRQUFULENBQWtCLFVBQWxCLENBRjZCO0FBR3hDRSxFQUFBQSxjQUFjLEVBQUVWLDJDQUFNLEdBQUdRLFFBQVQsQ0FBa0IsVUFBbEIsQ0FId0I7QUFJeENHLEVBQUFBLFlBQVksRUFBRVgsMkNBQU0sR0FBR1EsUUFBVCxDQUFrQixVQUFsQixDQUowQjtBQUt4Q0ksRUFBQUEsV0FBVyxFQUFFWiwyQ0FBTSxHQUFHUSxRQUFULENBQWtCLFVBQWxCLENBTDJCO0FBTXhDSyxFQUFBQSxZQUFZLEVBQUViLDJDQUFNLEdBQUdjLEtBQVQsQ0FBZSx1QkFBZixFQUF3Q04sUUFBeEMsQ0FBaUQsVUFBakQsQ0FOMEI7QUFPeENPLEVBQUFBLHFCQUFxQixFQUFFZiwyQ0FBTSxHQUFHUSxRQUFULENBQWtCLFVBQWxCLENBUGlCO0FBUXhDUSxFQUFBQSxXQUFXLEVBQUVoQiwyQ0FBTSxHQUFHUSxRQUFULENBQWtCLFVBQWxCLENBUjJCO0FBU3hDUyxFQUFBQSxnQkFBZ0IsRUFBRWpCLDJDQUFNLEdBQUdRLFFBQVQsQ0FBa0IsVUFBbEIsQ0FUc0I7QUFVeENVLEVBQUFBLGNBQWMsRUFBRWxCLDJDQUFNLEdBQUdRLFFBQVQsQ0FBa0IsVUFBbEIsQ0FWd0I7QUFXeENXLEVBQUFBLFdBQVcsRUFBRWpCLHlDQUFJLEdBQUdNLFFBQVAsQ0FBZ0IsVUFBaEIsQ0FYMkI7QUFZeENZLEVBQUFBLGNBQWMsRUFBRWxCLHlDQUFJLEdBQUdtQixJQUFQLENBQ2YsYUFEZSxFQUVmLFVBQUNGLFdBQUQsRUFBY0csTUFBZDtBQUFBLFdBQXlCSCxXQUFXLElBQUlHLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXSixXQUFYLEVBQXdCLDBCQUF4QixDQUF4QztBQUFBLEdBRmUsQ0Fad0I7QUFnQnhDSyxFQUFBQSxrQkFBa0IsRUFBRXhCLDJDQUFNLEdBQUdRLFFBQVQsQ0FBa0IsVUFBbEIsQ0FoQm9CO0FBaUJ4Q2lCLEVBQUFBLFlBQVksRUFBRXhCLDBDQUFLLEdBQ2pCeUIsRUFEWSxDQUVadkIsMkNBQU0sR0FBR0csS0FBVCxDQUFlO0FBQ2RxQixJQUFBQSxJQUFJLEVBQUUzQiwyQ0FBTSxHQUFHUSxRQUFULENBQWtCLDBCQUFsQixDQURRO0FBRWRvQixJQUFBQSxRQUFRLEVBQUV4QiwyQ0FBTSxHQUNkeUIsUUFEUSxHQUVSQyxTQUZRLENBRUUsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsYUFBV0EsQ0FBQyxLQUFLLEVBQU4sR0FBVyxJQUFYLEdBQWtCRCxDQUE3QjtBQUFBLEtBRkYsQ0FGSTtBQUtkRSxJQUFBQSxLQUFLLEVBQUU3QiwyQ0FBTSxHQUNYeUIsUUFESyxHQUVMQyxTQUZLLENBRUssVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsYUFBV0EsQ0FBQyxLQUFLLEVBQU4sR0FBVyxJQUFYLEdBQWtCRCxDQUE3QjtBQUFBLEtBRkw7QUFMTyxHQUFmLENBRlksRUFZWlIsR0FaWSxDQVlSLENBWlEsRUFZTCxvQ0FaSztBQWpCMEIsQ0FBZixDQUFuQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb25maWcvRm9ybS9WYWxpZGF0aW9uU2NoZW1hLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAqIGFzIHl1cCBmcm9tICd5dXAnO1xyXG5pbXBvcnQgeyBzdHJpbmcsIGFycmF5LCBkYXRlLCBvYmplY3QsIG51bWJlciB9IGZyb20gJ3l1cCc7XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybVNjaGVtYSA9IG9iamVjdCgpLnNoYXBlKHtcclxuXHR1c2VyX3N0cmVldF9hZGRyZXNzOiBzdHJpbmcoKS5yZXF1aXJlZCgnUmVxdWlyZWQnKSxcclxuXHR1c2VyX2NpdHk6IHN0cmluZygpLnJlcXVpcmVkKCdSZXF1aXJlZCcpLFxyXG5cdHVzZXJfcG9zdF9jb2RlOiBzdHJpbmcoKS5yZXF1aXJlZCgnUmVxdWlyZWQnKSxcclxuXHR1c2VyX2NvdW50cnk6IHN0cmluZygpLnJlcXVpcmVkKCdSZXF1aXJlZCcpLFxyXG5cdGNsaWVudF9uYW1lOiBzdHJpbmcoKS5yZXF1aXJlZCgnUmVxdWlyZWQnKSxcclxuXHRjbGllbnRfZW1haWw6IHN0cmluZygpLmVtYWlsKCdNdXN0IGJlIGEgdmFsaWQgZW1haWwnKS5yZXF1aXJlZCgnUmVxdWlyZWQnKSxcclxuXHRjbGllbnRfc3RyZWV0X2FkZHJlc3M6IHN0cmluZygpLnJlcXVpcmVkKCdSZXF1aXJlZCcpLFxyXG5cdGNsaWVudF9jaXR5OiBzdHJpbmcoKS5yZXF1aXJlZCgnUmVxdWlyZWQnKSxcclxuXHRjbGllbnRfcG9zdF9jb2RlOiBzdHJpbmcoKS5yZXF1aXJlZCgnUmVxdWlyZWQnKSxcclxuXHRjbGllbnRfY291bnRyeTogc3RyaW5nKCkucmVxdWlyZWQoJ1JlcXVpcmVkJyksXHJcblx0aW52b2ljZURhdGU6IGRhdGUoKS5yZXF1aXJlZCgnUmVxdWlyZWQnKSxcclxuXHRpbnZvaWNlRHVlRGF0ZTogZGF0ZSgpLndoZW4oXHJcblx0XHQnaW52b2ljZURhdGUnLFxyXG5cdFx0KGludm9pY2VEYXRlLCBzY2hlbWEpID0+IGludm9pY2VEYXRlICYmIHNjaGVtYS5taW4oaW52b2ljZURhdGUsICdNdXN0IGJlIGFmdGVyIHN0YXJ0IGRhdGUnKVxyXG5cdCksXHJcblx0cHJvamVjdERlc2NyaXB0aW9uOiBzdHJpbmcoKS5yZXF1aXJlZCgnUmVxdWlyZWQnKSxcclxuXHRpbnZvaWNlSXRlbXM6IGFycmF5KClcclxuXHRcdC5vZihcclxuXHRcdFx0b2JqZWN0KCkuc2hhcGUoe1xyXG5cdFx0XHRcdG5hbWU6IHN0cmluZygpLnJlcXVpcmVkKCdBIEl0ZW0gTmFtZSBpcyByZXF1aXJlZC4nKSxcclxuXHRcdFx0XHRxdWFudGl0eTogbnVtYmVyKClcclxuXHRcdFx0XHRcdC5udWxsYWJsZSgpXHJcblx0XHRcdFx0XHQudHJhbnNmb3JtKCh2LCBvKSA9PiAobyA9PT0gJycgPyBudWxsIDogdikpLFxyXG5cdFx0XHRcdHByaWNlOiBudW1iZXIoKVxyXG5cdFx0XHRcdFx0Lm51bGxhYmxlKClcclxuXHRcdFx0XHRcdC50cmFuc2Zvcm0oKHYsIG8pID0+IChvID09PSAnJyA/IG51bGwgOiB2KSksXHJcblx0XHRcdH0pXHJcblx0XHQpXHJcblx0XHQubWluKDEsICdNdXN0IGhhdmUgYXQgbGVhc3QgMSBiaWxsYWJsZSBpdGVtJyksXHJcbn0pO1xyXG4iXSwibmFtZXMiOlsic3RyaW5nIiwiYXJyYXkiLCJkYXRlIiwib2JqZWN0IiwibnVtYmVyIiwiZm9ybVNjaGVtYSIsInNoYXBlIiwidXNlcl9zdHJlZXRfYWRkcmVzcyIsInJlcXVpcmVkIiwidXNlcl9jaXR5IiwidXNlcl9wb3N0X2NvZGUiLCJ1c2VyX2NvdW50cnkiLCJjbGllbnRfbmFtZSIsImNsaWVudF9lbWFpbCIsImVtYWlsIiwiY2xpZW50X3N0cmVldF9hZGRyZXNzIiwiY2xpZW50X2NpdHkiLCJjbGllbnRfcG9zdF9jb2RlIiwiY2xpZW50X2NvdW50cnkiLCJpbnZvaWNlRGF0ZSIsImludm9pY2VEdWVEYXRlIiwid2hlbiIsInNjaGVtYSIsIm1pbiIsInByb2plY3REZXNjcmlwdGlvbiIsImludm9pY2VJdGVtcyIsIm9mIiwibmFtZSIsInF1YW50aXR5IiwibnVsbGFibGUiLCJ0cmFuc2Zvcm0iLCJ2IiwibyIsInByaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==