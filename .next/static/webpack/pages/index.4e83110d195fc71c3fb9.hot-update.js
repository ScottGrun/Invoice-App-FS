"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGU4MzExMGQxOTVmYzcxYzNmYjkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUssVUFBVSxHQUFHRiwyQ0FBTSxHQUFHRyxLQUFULENBQWU7QUFDeENDLEVBQUFBLG1CQUFtQixFQUFFUCwyQ0FBTSxHQUFHUSxRQUFULENBQWtCLFVBQWxCLENBRG1CO0FBRXhDQyxFQUFBQSxTQUFTLEVBQUVULDJDQUFNLEdBQUdRLFFBQVQsQ0FBa0IsVUFBbEIsQ0FGNkI7QUFHeENFLEVBQUFBLGNBQWMsRUFBRVYsMkNBQU0sR0FBR1EsUUFBVCxDQUFrQixVQUFsQixDQUh3QjtBQUl4Q0csRUFBQUEsWUFBWSxFQUFFWCwyQ0FBTSxHQUFHUSxRQUFULENBQWtCLFVBQWxCLENBSjBCO0FBS3hDSSxFQUFBQSxXQUFXLEVBQUVaLDJDQUFNLEdBQUdRLFFBQVQsQ0FBa0IsVUFBbEIsQ0FMMkI7QUFNeENLLEVBQUFBLFlBQVksRUFBRWIsMkNBQU0sR0FBR2MsS0FBVCxDQUFlLHVCQUFmLEVBQXdDTixRQUF4QyxDQUFpRCxVQUFqRCxDQU4wQjtBQU94Q08sRUFBQUEscUJBQXFCLEVBQUVmLDJDQUFNLEdBQUdRLFFBQVQsQ0FBa0IsVUFBbEIsQ0FQaUI7QUFReENRLEVBQUFBLFdBQVcsRUFBRWhCLDJDQUFNLEdBQUdRLFFBQVQsQ0FBa0IsVUFBbEIsQ0FSMkI7QUFTeENTLEVBQUFBLGdCQUFnQixFQUFFakIsMkNBQU0sR0FBR1EsUUFBVCxDQUFrQixVQUFsQixDQVRzQjtBQVV4Q1UsRUFBQUEsYUFBYSxFQUFFbEIsMkNBQU0sR0FBR1EsUUFBVCxDQUFrQixVQUFsQixDQVZ5QjtBQVd4Q1csRUFBQUEsV0FBVyxFQUFFakIseUNBQUksR0FBR00sUUFBUCxDQUFnQixVQUFoQixDQVgyQjtBQVl4Q1ksRUFBQUEsY0FBYyxFQUFFbEIseUNBQUksR0FBR21CLElBQVAsQ0FDZixhQURlLEVBRWYsVUFBQ0YsV0FBRCxFQUFjRyxNQUFkO0FBQUEsV0FBeUJILFdBQVcsSUFBSUcsTUFBTSxDQUFDQyxHQUFQLENBQVdKLFdBQVgsRUFBd0IsMEJBQXhCLENBQXhDO0FBQUEsR0FGZSxDQVp3QjtBQWdCeENLLEVBQUFBLGtCQUFrQixFQUFFeEIsMkNBQU0sR0FBR1EsUUFBVCxDQUFrQixVQUFsQixDQWhCb0I7QUFpQnhDaUIsRUFBQUEsWUFBWSxFQUFFeEIsMENBQUssR0FDakJ5QixFQURZLENBRVp2QiwyQ0FBTSxHQUFHRyxLQUFULENBQWU7QUFDZHFCLElBQUFBLElBQUksRUFBRTNCLDJDQUFNLEdBQUdRLFFBQVQsQ0FBa0IsMEJBQWxCLENBRFE7QUFFZG9CLElBQUFBLFFBQVEsRUFBRXhCLDJDQUFNLEdBQ2R5QixRQURRLEdBRVJDLFNBRlEsQ0FFRSxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxhQUFXQSxDQUFDLEtBQUssRUFBTixHQUFXLElBQVgsR0FBa0JELENBQTdCO0FBQUEsS0FGRixDQUZJO0FBS2RFLElBQUFBLEtBQUssRUFBRTdCLDJDQUFNLEdBQ1h5QixRQURLLEdBRUxDLFNBRkssQ0FFSyxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxhQUFXQSxDQUFDLEtBQUssRUFBTixHQUFXLElBQVgsR0FBa0JELENBQTdCO0FBQUEsS0FGTDtBQUxPLEdBQWYsQ0FGWSxFQVlaUixHQVpZLENBWVIsQ0FaUSxFQVlMLG9DQVpLO0FBakIwQixDQUFmLENBQW5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbmZpZy9Gb3JtL1ZhbGlkYXRpb25TY2hlbWEudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICogYXMgeXVwIGZyb20gJ3l1cCc7XHJcbmltcG9ydCB7IHN0cmluZywgYXJyYXksIGRhdGUsIG9iamVjdCwgbnVtYmVyIH0gZnJvbSAneXVwJztcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtU2NoZW1hID0gb2JqZWN0KCkuc2hhcGUoe1xyXG5cdHVzZXJfc3RyZWV0X2FkZHJlc3M6IHN0cmluZygpLnJlcXVpcmVkKCdSZXF1aXJlZCcpLFxyXG5cdHVzZXJfY2l0eTogc3RyaW5nKCkucmVxdWlyZWQoJ1JlcXVpcmVkJyksXHJcblx0dXNlcl9wb3N0X2NvZGU6IHN0cmluZygpLnJlcXVpcmVkKCdSZXF1aXJlZCcpLFxyXG5cdHVzZXJfY291bnRyeTogc3RyaW5nKCkucmVxdWlyZWQoJ1JlcXVpcmVkJyksXHJcblx0Y2xpZW50X25hbWU6IHN0cmluZygpLnJlcXVpcmVkKCdSZXF1aXJlZCcpLFxyXG5cdGNsaWVudF9lbWFpbDogc3RyaW5nKCkuZW1haWwoJ011c3QgYmUgYSB2YWxpZCBlbWFpbCcpLnJlcXVpcmVkKCdSZXF1aXJlZCcpLFxyXG5cdGNsaWVudF9zdHJlZXRfYWRkcmVzczogc3RyaW5nKCkucmVxdWlyZWQoJ1JlcXVpcmVkJyksXHJcblx0Y2xpZW50X2NpdHk6IHN0cmluZygpLnJlcXVpcmVkKCdSZXF1aXJlZCcpLFxyXG5cdGNsaWVudF9wb3N0X2NvZGU6IHN0cmluZygpLnJlcXVpcmVkKCdSZXF1aXJlZCcpLFxyXG5cdGNsaWVudENvdW50cnk6IHN0cmluZygpLnJlcXVpcmVkKCdSZXF1aXJlZCcpLFxyXG5cdGludm9pY2VEYXRlOiBkYXRlKCkucmVxdWlyZWQoJ1JlcXVpcmVkJyksXHJcblx0aW52b2ljZUR1ZURhdGU6IGRhdGUoKS53aGVuKFxyXG5cdFx0J2ludm9pY2VEYXRlJyxcclxuXHRcdChpbnZvaWNlRGF0ZSwgc2NoZW1hKSA9PiBpbnZvaWNlRGF0ZSAmJiBzY2hlbWEubWluKGludm9pY2VEYXRlLCAnTXVzdCBiZSBhZnRlciBzdGFydCBkYXRlJylcclxuXHQpLFxyXG5cdHByb2plY3REZXNjcmlwdGlvbjogc3RyaW5nKCkucmVxdWlyZWQoJ1JlcXVpcmVkJyksXHJcblx0aW52b2ljZUl0ZW1zOiBhcnJheSgpXHJcblx0XHQub2YoXHJcblx0XHRcdG9iamVjdCgpLnNoYXBlKHtcclxuXHRcdFx0XHRuYW1lOiBzdHJpbmcoKS5yZXF1aXJlZCgnQSBJdGVtIE5hbWUgaXMgcmVxdWlyZWQuJyksXHJcblx0XHRcdFx0cXVhbnRpdHk6IG51bWJlcigpXHJcblx0XHRcdFx0XHQubnVsbGFibGUoKVxyXG5cdFx0XHRcdFx0LnRyYW5zZm9ybSgodiwgbykgPT4gKG8gPT09ICcnID8gbnVsbCA6IHYpKSxcclxuXHRcdFx0XHRwcmljZTogbnVtYmVyKClcclxuXHRcdFx0XHRcdC5udWxsYWJsZSgpXHJcblx0XHRcdFx0XHQudHJhbnNmb3JtKCh2LCBvKSA9PiAobyA9PT0gJycgPyBudWxsIDogdikpLFxyXG5cdFx0XHR9KVxyXG5cdFx0KVxyXG5cdFx0Lm1pbigxLCAnTXVzdCBoYXZlIGF0IGxlYXN0IDEgYmlsbGFibGUgaXRlbScpLFxyXG59KTtcclxuIl0sIm5hbWVzIjpbInN0cmluZyIsImFycmF5IiwiZGF0ZSIsIm9iamVjdCIsIm51bWJlciIsImZvcm1TY2hlbWEiLCJzaGFwZSIsInVzZXJfc3RyZWV0X2FkZHJlc3MiLCJyZXF1aXJlZCIsInVzZXJfY2l0eSIsInVzZXJfcG9zdF9jb2RlIiwidXNlcl9jb3VudHJ5IiwiY2xpZW50X25hbWUiLCJjbGllbnRfZW1haWwiLCJlbWFpbCIsImNsaWVudF9zdHJlZXRfYWRkcmVzcyIsImNsaWVudF9jaXR5IiwiY2xpZW50X3Bvc3RfY29kZSIsImNsaWVudENvdW50cnkiLCJpbnZvaWNlRGF0ZSIsImludm9pY2VEdWVEYXRlIiwid2hlbiIsInNjaGVtYSIsIm1pbiIsInByb2plY3REZXNjcmlwdGlvbiIsImludm9pY2VJdGVtcyIsIm9mIiwibmFtZSIsInF1YW50aXR5IiwibnVsbGFibGUiLCJ0cmFuc2Zvcm0iLCJ2IiwibyIsInByaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==