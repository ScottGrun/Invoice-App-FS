(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/InvoicesContext.tsx":
/*!*************************************!*\
  !*** ./context/InvoicesContext.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoicesContext": () => (/* binding */ InvoicesContext),
/* harmony export */   "InvoicesProvider": () => (/* binding */ InvoicesProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var data_demo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! data/demo */ "./data/demo.js");
/* harmony import */ var _invoiceReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoiceReducer */ "./context/invoiceReducer.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\scott\\Documents\\GitHub\\Invoice-App-FS\\context\\InvoicesContext.tsx";




// Context
const InvoicesContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  invoices: [],
  addInvoice: () => {},
  deleteInvoice: () => {},
  updateInvoice: () => {}
}); // const initalState = {
// 	invoices: [],
// };

const InvoicesProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(_invoiceReducer__WEBPACK_IMPORTED_MODULE_2__.invoiceReducer, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const localInvoices = JSON.parse(localStorage.getItem('invoices')); // TODO: Add check for demo flag here

    if (localInvoices !== null) {
      dispatch({
        type: 'ADD',
        payload: localInvoices
      });
    } else {
      dispatch({
        type: 'ADD',
        payload: data_demo__WEBPACK_IMPORTED_MODULE_1__.demoInvoicesData
      });
      localStorage.setItem('invoices', JSON.stringify(data_demo__WEBPACK_IMPORTED_MODULE_1__.demoInvoicesData));
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    localStorage.setItem('invoices', JSON.stringify(state));
  }, [state]); // Turn dispatch actions into funcs for context to make things easier to use also ensures they are typed

  const addInvoice = invoice => {
    dispatch({
      type: 'ADD',
      payload: invoice
    });
  };

  const deleteInvoice = id => {
    dispatch({
      type: 'DELETE',
      payload: id
    });
  };

  const updateInvoice = invoice => {
    dispatch({
      type: 'UPDATE',
      payload: invoice
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(InvoicesContext.Provider, {
    value: {
      invoices: state,
      addInvoice,
      deleteInvoice,
      updateInvoice
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 3
  }, undefined);
};

/***/ }),

/***/ "./context/invoiceReducer.ts":
/*!***********************************!*\
  !*** ./context/invoiceReducer.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "invoiceReducer": () => (/* binding */ invoiceReducer)
/* harmony export */ });
const invoiceReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      if (Array.isArray(action.payload)) {
        return [...state, ...action.payload];
      } else {
        return [...state, action.payload];
      }

    case 'DELETE':
      return state.invoices.filter(invoice => invoice.id !== action.payload);

    case 'UPDATE':
      return state.map(invoice => {
        if (invoice.id === action.payload.id) {
          return action.payload;
        } else {
          return invoice;
        }
      });

    default:
      throw new Error(`Unknown action type${action}`);
  }
};

/***/ }),

/***/ "./data/demo.js":
/*!**********************!*\
  !*** ./data/demo.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "demoInvoicesData": () => (/* binding */ demoInvoicesData)
/* harmony export */ });
const demoInvoicesData = [{
  id: 'RT3080',
  invoice_date: 'Tue Sep 1 2002',
  invoice_due_date: 'Tue Sep 21 2021',
  description: 'Re-branding',
  client_name: 'Jensen Huang',
  client_email: 'jensenh@mail.com',
  status: 'Paid',
  user_street_address: '19 Union Terrace',
  user_city: 'London',
  user_post_code: 'E1 3EZ',
  user_country: 'United Kingdom',
  client_street_address: '106 Kendell Street',
  client_city: 'Sharrington',
  client_post_code: 'NR24 5WQ',
  client_country: 'United Kingdom',
  invoice_items: [{
    name: 'Brand Guidelines',
    quantity: 2,
    price: 500
  }]
}, {
  id: 'RT3080z',
  invoice_date: 'Tue Sep 1 2022',
  invoice_due_date: 'Tue Sep 21 2021',
  description: 'Logo Work',
  client_name: 'Gabe Newl',
  client_email: 'hammer@mail.com',
  status: 'Pending',
  user_street_address: '39 Cres Terrace',
  user_city: 'Vancouver',
  user_post_code: 'E1 3EZ',
  user_country: 'Canada',
  client_street_address: '26 Gaz Street',
  client_city: 'Blemdale',
  client_post_code: 'NR24 5WQ',
  client_country: 'United Kingdom',
  invoice_items: [{
    name: 'Brand Guidelines',
    quantity: 2,
    price: 250
  }, {
    name: 'Website Work',
    quantity: 2,
    price: 500
  }]
}];

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var context_InvoicesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! context/InvoicesContext */ "./context/InvoicesContext.tsx");
/* harmony import */ var _styles_globalStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globalStyle */ "./styles/globalStyle.ts");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\scott\\Documents\\GitHub\\Invoice-App-FS\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_globalStyle__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_0__.ThemeProvider, {
      theme: _styles_theme__WEBPACK_IMPORTED_MODULE_4__.theme,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(context_InvoicesContext__WEBPACK_IMPORTED_MODULE_2__.InvoicesProvider, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }, this)]
  }, void 0, true);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./styles/globalStyle.ts":
/*!*******************************!*\
  !*** ./styles/globalStyle.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(["html{box-sizing:border-box;}*,*:before,*:after{box-sizing:border-box;}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,menu,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,main,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block;}*[hidden]{display:none;}body{line-height:1;background-color:#F8F8FB;color:#0C0E16;accent-color:hotpink;}menu,ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}a{text-decoration:none;color:inherit;}button{border:none;}::-webkit-scrollbar{width:8px;}::-webkit-scrollbar-track{background:transparent;}::-webkit-scrollbar-thumb{background-color:#DFE3FA;border-radius:4px;}"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyle);

/***/ }),

/***/ "./styles/theme.ts":
/*!*************************!*\
  !*** ./styles/theme.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BREAKPOINTS": () => (/* binding */ BREAKPOINTS),
/* harmony export */   "theme": () => (/* binding */ theme)
/* harmony export */ });
// Constants
const BREAKPOINTS = {
  phone: 500,
  tablet: 768,
  laptop: 1110,
  xl: 1440
};
const theme = {
  COLORS: {
    primary: {
      1: '#7C5DFA',
      2: '#9277FF',
      3: '#7E88C3'
    },
    dark: {
      1: '#0C0E16',
      2: '#141625',
      3: '#1E2139',
      4: '#252945',
      5: '#373B53',
      6: '#494E6E'
    },
    grey: {
      1: '#888EB0',
      2: '#DFE3FA',
      3: '#F8F8FB',
      4: '#F9FAFE',
      5: '#858BB2',
      6: '#F3F3F5',
      7: '#777F98'
    },
    success: {
      1: '#33D69F',
      2: '#F3FCF9'
    },
    caution: {
      1: '#FF8F00',
      2: '#FFF8F0'
    },
    warning: {
      1: '#EC5757',
      2: '#FF9797'
    },
    white: '#fff'
  },
  FONT_FAMILY: {
    header: "'Spartan', sans-serif",
    body: "'Spartan', sans-serif",
    error: "'Spartan', sans-serif"
  },
  FONT_SIZES: {
    h1: `${32 / 16}rem`,
    h2: `${20 / 16}rem`,
    h3: `${16 / 16}rem`,
    h4: `${12 / 16}rem`,
    body: `${12 / 16}rem`,
    body2: `${11 / 16}rem`,
    formH1: `${24 / 16}rem`,
    formItemListH1: `${18 / 16}rem`,
    formError: `${10 / 16}rem`
  },
  WEIGHTS: {
    medium: 500,
    semiBold: 600,
    bold: 700
  },
  // Using REM for breakpoints to maintain a nicer UI
  //  when changing zoom levels
  QUERIES: {
    phoneAndUp: `(min-width: ${BREAKPOINTS.phone / 16}rem)`,
    tabletAndUp: `(min-width: ${BREAKPOINTS.tablet / 16}rem)`,
    laptopAndUp: `(min-width: ${BREAKPOINTS.laptop / 16}rem)`,
    xlAndUp: `(min-width: ${BREAKPOINTS.xl / 16}rem)`
  }
};

/***/ }),

/***/ "./node_modules/react-datepicker/dist/react-datepicker.css":
/*!*****************************************************************!*\
  !*** ./node_modules/react-datepicker/dist/react-datepicker.css ***!
  \*****************************************************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxHQURBO0FBRVJDLElBQUFBLFFBQVEsRUFBRSxHQUZGO0FBR1JDLElBQUFBLElBQUksRUFBRTtBQUhFLEdBdERXO0FBMkRwQjtBQUNBO0FBQ0FDLEVBQUFBLE9BQU8sRUFBRTtBQUNSQyxJQUFBQSxVQUFVLEVBQUcsZUFBYy9CLFdBQVcsQ0FBQ0MsS0FBWixHQUFvQixFQUFHLE1BRDFDO0FBRVIrQixJQUFBQSxXQUFXLEVBQUcsZUFBY2hDLFdBQVcsQ0FBQ0UsTUFBWixHQUFxQixFQUFHLE1BRjVDO0FBR1IrQixJQUFBQSxXQUFXLEVBQUcsZUFBY2pDLFdBQVcsQ0FBQ0csTUFBWixHQUFxQixFQUFHLE1BSDVDO0FBSVIrQixJQUFBQSxPQUFPLEVBQUcsZUFBY2xDLFdBQVcsQ0FBQ0ksRUFBWixHQUFpQixFQUFHO0FBSnBDO0FBN0RXLENBQWQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JQOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vY29udGV4dC9JbnZvaWNlc0NvbnRleHQudHN4Iiwid2VicGFjazovL215LWFwcC8uL2NvbnRleHQvaW52b2ljZVJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vbXktYXBwLy4vZGF0YS9kZW1vLmpzIiwid2VicGFjazovL215LWFwcC8uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovL215LWFwcC8uL3N0eWxlcy9nbG9iYWxTdHlsZS50cyIsIndlYnBhY2s6Ly9teS1hcHAvLi9zdHlsZXMvdGhlbWUudHMiLCJ3ZWJwYWNrOi8vbXktYXBwL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9teS1hcHAvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9teS1hcHAvZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIEZDLCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgZGVtb0ludm9pY2VzRGF0YSB9IGZyb20gJ2RhdGEvZGVtbyc7XHJcblxyXG5pbXBvcnQgeyBJbnZvaWNlIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5cclxuaW1wb3J0IHsgaW52b2ljZVJlZHVjZXIgfSBmcm9tICcuL2ludm9pY2VSZWR1Y2VyJztcclxuXHJcbnR5cGUgSW52b2ljZXNDb250ZXh0U3RhdGVUeXBlID0ge1xyXG5cdGludm9pY2VzOiBJbnZvaWNlW10gfCBbXTtcclxuXHRhZGRJbnZvaWNlOiAoaW52b2ljZTogSW52b2ljZSkgPT4gdm9pZDtcclxuXHRkZWxldGVJbnZvaWNlOiAoaWQ6IHN0cmluZykgPT4gdm9pZDtcclxuXHR1cGRhdGVJbnZvaWNlOiAoaW52b2ljZTogSW52b2ljZSkgPT4gdm9pZDtcclxufTtcclxuXHJcbi8vIENvbnRleHRcclxuZXhwb3J0IGNvbnN0IEludm9pY2VzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8SW52b2ljZXNDb250ZXh0U3RhdGVUeXBlPih7XHJcblx0aW52b2ljZXM6IFtdLFxyXG5cdGFkZEludm9pY2U6ICgpID0+IHt9LFxyXG5cdGRlbGV0ZUludm9pY2U6ICgpID0+IHt9LFxyXG5cdHVwZGF0ZUludm9pY2U6ICgpID0+IHt9LFxyXG59KTtcclxuXHJcbi8vIGNvbnN0IGluaXRhbFN0YXRlID0ge1xyXG4vLyBcdGludm9pY2VzOiBbXSxcclxuLy8gfTtcclxuXHJcbmV4cG9ydCBjb25zdCBJbnZvaWNlc1Byb3ZpZGVyOiBGQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuXHRjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoaW52b2ljZVJlZHVjZXIsIFtdKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0IGxvY2FsSW52b2ljZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbnZvaWNlcycpKTtcclxuXHRcdC8vIFRPRE86IEFkZCBjaGVjayBmb3IgZGVtbyBmbGFnIGhlcmVcclxuXHJcblx0XHRpZiAobG9jYWxJbnZvaWNlcyAhPT0gbnVsbCkge1xyXG5cdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdBREQnLCBwYXlsb2FkOiBsb2NhbEludm9pY2VzIH0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnQUREJywgcGF5bG9hZDogZGVtb0ludm9pY2VzRGF0YSB9KTtcclxuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ludm9pY2VzJywgSlNPTi5zdHJpbmdpZnkoZGVtb0ludm9pY2VzRGF0YSkpO1xyXG5cdFx0fVxyXG5cdH0sIFtdKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbnZvaWNlcycsIEpTT04uc3RyaW5naWZ5KHN0YXRlKSk7XHJcblx0fSwgW3N0YXRlXSk7XHJcblxyXG5cdC8vIFR1cm4gZGlzcGF0Y2ggYWN0aW9ucyBpbnRvIGZ1bmNzIGZvciBjb250ZXh0IHRvIG1ha2UgdGhpbmdzIGVhc2llciB0byB1c2UgYWxzbyBlbnN1cmVzIHRoZXkgYXJlIHR5cGVkXHJcblx0Y29uc3QgYWRkSW52b2ljZSA9IChpbnZvaWNlOiBJbnZvaWNlIHwgSW52b2ljZVtdKSA9PiB7XHJcblx0XHRkaXNwYXRjaCh7IHR5cGU6ICdBREQnLCBwYXlsb2FkOiBpbnZvaWNlIH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGRlbGV0ZUludm9pY2UgPSAoaWQ6IHN0cmluZykgPT4ge1xyXG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiAnREVMRVRFJywgcGF5bG9hZDogaWQgfSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgdXBkYXRlSW52b2ljZSA9IChpbnZvaWNlOiBJbnZvaWNlKSA9PiB7XHJcblx0XHRkaXNwYXRjaCh7IHR5cGU6ICdVUERBVEUnLCBwYXlsb2FkOiBpbnZvaWNlIH0pO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8SW52b2ljZXNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGludm9pY2VzOiBzdGF0ZSwgYWRkSW52b2ljZSwgZGVsZXRlSW52b2ljZSwgdXBkYXRlSW52b2ljZSB9fT5cclxuXHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0PC9JbnZvaWNlc0NvbnRleHQuUHJvdmlkZXI+XHJcblx0KTtcclxufTtcclxuIiwiaW1wb3J0IHsgSW52b2ljZSB9IGZyb20gJy4uL3R5cGVzJztcclxuXHJcbnR5cGUgSW52b2ljZUFjdGlvbnMgPVxyXG5cdHwgeyB0eXBlOiAnQUREJzsgcGF5bG9hZDogSW52b2ljZSB8IEludm9pY2VbXSB9XHJcblx0fCB7IHR5cGU6ICdERUxFVEUnOyBwYXlsb2FkOiBzdHJpbmcgfVxyXG5cdHwgeyB0eXBlOiAnVVBEQVRFJzsgcGF5bG9hZDogSW52b2ljZSB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGludm9pY2VSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb246IEludm9pY2VBY3Rpb25zKSA9PiB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSAnQUREJzpcclxuXHRcdFx0aWYgKEFycmF5LmlzQXJyYXkoYWN0aW9uLnBheWxvYWQpKSB7XHJcblx0XHRcdFx0cmV0dXJuIFsuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWRdO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBbLi4uc3RhdGUsIGFjdGlvbi5wYXlsb2FkXTtcclxuXHRcdFx0fVxyXG5cdFx0Y2FzZSAnREVMRVRFJzpcclxuXHRcdFx0cmV0dXJuIHN0YXRlLmludm9pY2VzLmZpbHRlcigoaW52b2ljZTogSW52b2ljZSkgPT4gaW52b2ljZS5pZCAhPT0gYWN0aW9uLnBheWxvYWQpO1xyXG5cdFx0Y2FzZSAnVVBEQVRFJzpcclxuXHRcdFx0cmV0dXJuIHN0YXRlLm1hcCgoaW52b2ljZTogSW52b2ljZSkgPT4ge1xyXG5cdFx0XHRcdGlmIChpbnZvaWNlLmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gaW52b2ljZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihgVW5rbm93biBhY3Rpb24gdHlwZSR7YWN0aW9ufWApO1xyXG5cdH1cclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGRlbW9JbnZvaWNlc0RhdGEgPSBbXHJcblx0e1xyXG5cdFx0aWQ6ICdSVDMwODAnLFxyXG5cdFx0aW52b2ljZV9kYXRlOiAnVHVlIFNlcCAxIDIwMDInLFxyXG5cdFx0aW52b2ljZV9kdWVfZGF0ZTogJ1R1ZSBTZXAgMjEgMjAyMScsXHJcblx0XHRkZXNjcmlwdGlvbjogJ1JlLWJyYW5kaW5nJyxcclxuXHRcdGNsaWVudF9uYW1lOiAnSmVuc2VuIEh1YW5nJyxcclxuXHRcdGNsaWVudF9lbWFpbDogJ2plbnNlbmhAbWFpbC5jb20nLFxyXG5cdFx0c3RhdHVzOiAnUGFpZCcsXHJcblx0XHR1c2VyX3N0cmVldF9hZGRyZXNzOiAnMTkgVW5pb24gVGVycmFjZScsXHJcblx0XHR1c2VyX2NpdHk6ICdMb25kb24nLFxyXG5cdFx0dXNlcl9wb3N0X2NvZGU6ICdFMSAzRVonLFxyXG5cdFx0dXNlcl9jb3VudHJ5OiAnVW5pdGVkIEtpbmdkb20nLFxyXG5cdFx0Y2xpZW50X3N0cmVldF9hZGRyZXNzOiAnMTA2IEtlbmRlbGwgU3RyZWV0JyxcclxuXHRcdGNsaWVudF9jaXR5OiAnU2hhcnJpbmd0b24nLFxyXG5cdFx0Y2xpZW50X3Bvc3RfY29kZTogJ05SMjQgNVdRJyxcclxuXHRcdGNsaWVudF9jb3VudHJ5OiAnVW5pdGVkIEtpbmdkb20nLFxyXG5cdFx0aW52b2ljZV9pdGVtczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0bmFtZTogJ0JyYW5kIEd1aWRlbGluZXMnLFxyXG5cdFx0XHRcdHF1YW50aXR5OiAyLFxyXG5cdFx0XHRcdHByaWNlOiA1MDAsXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQ6ICdSVDMwODB6JyxcclxuXHRcdGludm9pY2VfZGF0ZTogJ1R1ZSBTZXAgMSAyMDIyJyxcclxuXHRcdGludm9pY2VfZHVlX2RhdGU6ICdUdWUgU2VwIDIxIDIwMjEnLFxyXG5cdFx0ZGVzY3JpcHRpb246ICdMb2dvIFdvcmsnLFxyXG5cdFx0Y2xpZW50X25hbWU6ICdHYWJlIE5ld2wnLFxyXG5cdFx0Y2xpZW50X2VtYWlsOiAnaGFtbWVyQG1haWwuY29tJyxcclxuXHRcdHN0YXR1czogJ1BlbmRpbmcnLFxyXG5cdFx0dXNlcl9zdHJlZXRfYWRkcmVzczogJzM5IENyZXMgVGVycmFjZScsXHJcblx0XHR1c2VyX2NpdHk6ICdWYW5jb3V2ZXInLFxyXG5cdFx0dXNlcl9wb3N0X2NvZGU6ICdFMSAzRVonLFxyXG5cdFx0dXNlcl9jb3VudHJ5OiAnQ2FuYWRhJyxcclxuXHRcdGNsaWVudF9zdHJlZXRfYWRkcmVzczogJzI2IEdheiBTdHJlZXQnLFxyXG5cdFx0Y2xpZW50X2NpdHk6ICdCbGVtZGFsZScsXHJcblx0XHRjbGllbnRfcG9zdF9jb2RlOiAnTlIyNCA1V1EnLFxyXG5cdFx0Y2xpZW50X2NvdW50cnk6ICdVbml0ZWQgS2luZ2RvbScsXHJcblx0XHRpbnZvaWNlX2l0ZW1zOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRuYW1lOiAnQnJhbmQgR3VpZGVsaW5lcycsXHJcblx0XHRcdFx0cXVhbnRpdHk6IDIsXHJcblx0XHRcdFx0cHJpY2U6IDI1MCxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG5hbWU6ICdXZWJzaXRlIFdvcmsnLFxyXG5cdFx0XHRcdHF1YW50aXR5OiAyLFxyXG5cdFx0XHRcdHByaWNlOiA1MDAsXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdH0sXHJcbl07XHJcbiIsImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgJ3JlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyLmNzcyc7XHJcbmltcG9ydCB7IEludm9pY2VzUHJvdmlkZXIgfSBmcm9tICdjb250ZXh0L0ludm9pY2VzQ29udGV4dCc7XHJcblxyXG5pbXBvcnQgR2xvYmFsU3R5bGUgZnJvbSAnLi4vc3R5bGVzL2dsb2JhbFN0eWxlJztcclxuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8R2xvYmFsU3R5bGUgLz5cclxuXHRcdFx0PFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuXHRcdFx0XHQ8SW52b2ljZXNQcm92aWRlcj5cclxuXHRcdFx0XHRcdDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuXHRcdFx0XHQ8L0ludm9pY2VzUHJvdmlkZXI+XHJcblx0XHRcdDwvVGhlbWVQcm92aWRlcj5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiIsImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICAgIC8qIFByb3BzIHRvIGh0dHBzOi8vbWVkaXVtLmNvbS9nZWVrY3VsdHVyZS9oZWFkbGVzcy13b29jb21tZXJjZS1uZXh0LWpzLXNldC11cC1zdHlsZWQtY29tcG9uZW50cy13aXRoLXR5cGVzY3JpcHQtYW5kLW5leHQtanMtMThjYzA0N2NjZDc5IGZvciB0aGUgZm9sbG93aW5nIFxyXG4gICAgYm9yZGVyIGJveCB0aXBzICovXHJcbiBcclxuICAgIC8qIFVzaW5nIHRoaXMgaW5oZXJpdCByZXNldCBtZXRob2QgbWVhbnMgeW91IGNhbiB1c2UgY29udGVudC1ib3ggb3IgcGFkZGluZy1ib3ggd2l0aG91dCBhIHVuaXZlcnNhbCBzZWxlY3RvciBvdmVycmlkaW5nIHlvdXIgQ1NTICovXHJcbiAgaHRtbCB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICB9XHJcbiAgLyogT25seSB1c2luZyAqIG9taXRzIHBzZXVkbyBlbGVtZW50cyBzbyBzcGVjaWZpY2FsbHkgaW5jbHVkZSB0aGVzZSAgKi9cclxuICAqICwgKjpiZWZvcmUsICo6YWZ0ZXIge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG5cclxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxyXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXHJcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcclxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxyXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxyXG5iLCB1LCBpLCBjZW50ZXIsXHJcbmRsLCBkdCwgZGQsIG1lbnUsIG9sLCB1bCwgbGksXHJcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxyXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcclxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXHJcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcclxubWFpbiwgbWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXHJcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTAwJTtcclxuICBmb250OiBpbmhlcml0O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxufVxyXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXHJcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXHJcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1haW4sIG1lbnUsIG5hdiwgc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLyogSFRNTDUgaGlkZGVuLWF0dHJpYnV0ZSBmaXggZm9yIG5ld2VyIGJyb3dzZXJzICovXHJcbipbaGlkZGVuXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbmJvZHkge1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIGJhY2tncm91bmQtY29sb3I6I0Y4RjhGQjtcclxuICBjb2xvcjogIzBDMEUxNjtcclxuICBhY2NlbnQtY29sb3I6IGhvdHBpbms7XHJcblxyXG59XHJcbm1lbnUsIG9sLCB1bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5ibG9ja3F1b3RlLCBxIHtcclxuICBxdW90ZXM6IG5vbmU7XHJcbn1cclxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXHJcbnE6YmVmb3JlLCBxOmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBjb250ZW50OiBub25lO1xyXG59XHJcbnRhYmxlIHtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xyXG59XHJcblxyXG5he1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLyogQ3VzdG9tIFNjcm9sbGJhciAqL1xyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDhweDsgICAgICAgICAgICAgICAvKiB3aWR0aCBvZiB0aGUgZW50aXJlIHNjcm9sbGJhciAqL1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgIFxyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREZFM0ZBOyAgICAvKiBjb2xvciBvZiB0aGUgc2Nyb2xsIHRodW1iICovXHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsU3R5bGU7XHJcbiIsIi8vIENvbnN0YW50c1xyXG5leHBvcnQgY29uc3QgQlJFQUtQT0lOVFMgPSB7XHJcblx0cGhvbmU6IDUwMCxcclxuXHR0YWJsZXQ6IDc2OCxcclxuXHRsYXB0b3A6IDExMTAsXHJcblx0eGw6IDE0NDAsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdGhlbWUgPSB7XHJcblx0Q09MT1JTOiB7XHJcblx0XHRwcmltYXJ5OiB7XHJcblx0XHRcdDE6ICcjN0M1REZBJyxcclxuXHRcdFx0MjogJyM5Mjc3RkYnLFxyXG5cdFx0XHQzOiAnIzdFODhDMycsXHJcblx0XHR9LFxyXG5cdFx0ZGFyazoge1xyXG5cdFx0XHQxOiAnIzBDMEUxNicsXHJcblx0XHRcdDI6ICcjMTQxNjI1JyxcclxuXHRcdFx0MzogJyMxRTIxMzknLFxyXG5cdFx0XHQ0OiAnIzI1Mjk0NScsXHJcblx0XHRcdDU6ICcjMzczQjUzJyxcclxuXHRcdFx0NjogJyM0OTRFNkUnLFxyXG5cdFx0fSxcclxuXHRcdGdyZXk6IHtcclxuXHRcdFx0MTogJyM4ODhFQjAnLFxyXG5cdFx0XHQyOiAnI0RGRTNGQScsXHJcblx0XHRcdDM6ICcjRjhGOEZCJyxcclxuXHRcdFx0NDogJyNGOUZBRkUnLFxyXG5cdFx0XHQ1OiAnIzg1OEJCMicsXHJcblx0XHRcdDY6ICcjRjNGM0Y1JyxcclxuXHRcdFx0NzogJyM3NzdGOTgnLFxyXG5cdFx0fSxcclxuXHRcdHN1Y2Nlc3M6IHtcclxuXHRcdFx0MTogJyMzM0Q2OUYnLFxyXG5cdFx0XHQyOiAnI0YzRkNGOScsXHJcblx0XHR9LFxyXG5cdFx0Y2F1dGlvbjoge1xyXG5cdFx0XHQxOiAnI0ZGOEYwMCcsXHJcblx0XHRcdDI6ICcjRkZGOEYwJyxcclxuXHRcdH0sXHJcblx0XHR3YXJuaW5nOiB7XHJcblx0XHRcdDE6ICcjRUM1NzU3JyxcclxuXHRcdFx0MjogJyNGRjk3OTcnLFxyXG5cdFx0fSxcclxuXHRcdHdoaXRlOiAnI2ZmZicsXHJcblx0fSxcclxuXHRGT05UX0ZBTUlMWToge1xyXG5cdFx0aGVhZGVyOiBcIidTcGFydGFuJywgc2Fucy1zZXJpZlwiLFxyXG5cdFx0Ym9keTogXCInU3BhcnRhbicsIHNhbnMtc2VyaWZcIixcclxuXHRcdGVycm9yOiBcIidTcGFydGFuJywgc2Fucy1zZXJpZlwiLFxyXG5cdH0sXHJcblx0Rk9OVF9TSVpFUzoge1xyXG5cdFx0aDE6IGAkezMyIC8gMTZ9cmVtYCxcclxuXHRcdGgyOiBgJHsyMCAvIDE2fXJlbWAsXHJcblx0XHRoMzogYCR7MTYgLyAxNn1yZW1gLFxyXG5cdFx0aDQ6IGAkezEyIC8gMTZ9cmVtYCxcclxuXHRcdGJvZHk6IGAkezEyIC8gMTZ9cmVtYCxcclxuXHRcdGJvZHkyOiBgJHsxMSAvIDE2fXJlbWAsXHJcblx0XHRmb3JtSDE6IGAkezI0IC8gMTZ9cmVtYCxcclxuXHRcdGZvcm1JdGVtTGlzdEgxOiBgJHsxOCAvIDE2fXJlbWAsXHJcblx0XHRmb3JtRXJyb3I6IGAkezEwIC8gMTZ9cmVtYCxcclxuXHR9LFxyXG5cdFdFSUdIVFM6IHtcclxuXHRcdG1lZGl1bTogNTAwLFxyXG5cdFx0c2VtaUJvbGQ6IDYwMCxcclxuXHRcdGJvbGQ6IDcwMCxcclxuXHR9LFxyXG5cdC8vIFVzaW5nIFJFTSBmb3IgYnJlYWtwb2ludHMgdG8gbWFpbnRhaW4gYSBuaWNlciBVSVxyXG5cdC8vICB3aGVuIGNoYW5naW5nIHpvb20gbGV2ZWxzXHJcblx0UVVFUklFUzoge1xyXG5cdFx0cGhvbmVBbmRVcDogYChtaW4td2lkdGg6ICR7QlJFQUtQT0lOVFMucGhvbmUgLyAxNn1yZW0pYCxcclxuXHRcdHRhYmxldEFuZFVwOiBgKG1pbi13aWR0aDogJHtCUkVBS1BPSU5UUy50YWJsZXQgLyAxNn1yZW0pYCxcclxuXHRcdGxhcHRvcEFuZFVwOiBgKG1pbi13aWR0aDogJHtCUkVBS1BPSU5UUy5sYXB0b3AgLyAxNn1yZW0pYCxcclxuXHRcdHhsQW5kVXA6IGAobWluLXdpZHRoOiAke0JSRUFLUE9JTlRTLnhsIC8gMTZ9cmVtKWAsXHJcblx0fSxcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlUmVkdWNlciIsImRlbW9JbnZvaWNlc0RhdGEiLCJpbnZvaWNlUmVkdWNlciIsIkludm9pY2VzQ29udGV4dCIsImludm9pY2VzIiwiYWRkSW52b2ljZSIsImRlbGV0ZUludm9pY2UiLCJ1cGRhdGVJbnZvaWNlIiwiSW52b2ljZXNQcm92aWRlciIsImNoaWxkcmVuIiwic3RhdGUiLCJkaXNwYXRjaCIsImxvY2FsSW52b2ljZXMiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidHlwZSIsInBheWxvYWQiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiaW52b2ljZSIsImlkIiwiYWN0aW9uIiwiQXJyYXkiLCJpc0FycmF5IiwiZmlsdGVyIiwibWFwIiwiRXJyb3IiLCJpbnZvaWNlX2RhdGUiLCJpbnZvaWNlX2R1ZV9kYXRlIiwiZGVzY3JpcHRpb24iLCJjbGllbnRfbmFtZSIsImNsaWVudF9lbWFpbCIsInN0YXR1cyIsInVzZXJfc3RyZWV0X2FkZHJlc3MiLCJ1c2VyX2NpdHkiLCJ1c2VyX3Bvc3RfY29kZSIsInVzZXJfY291bnRyeSIsImNsaWVudF9zdHJlZXRfYWRkcmVzcyIsImNsaWVudF9jaXR5IiwiY2xpZW50X3Bvc3RfY29kZSIsImNsaWVudF9jb3VudHJ5IiwiaW52b2ljZV9pdGVtcyIsIm5hbWUiLCJxdWFudGl0eSIsInByaWNlIiwiVGhlbWVQcm92aWRlciIsIkdsb2JhbFN0eWxlIiwidGhlbWUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiQlJFQUtQT0lOVFMiLCJwaG9uZSIsInRhYmxldCIsImxhcHRvcCIsInhsIiwiQ09MT1JTIiwicHJpbWFyeSIsImRhcmsiLCJncmV5Iiwic3VjY2VzcyIsImNhdXRpb24iLCJ3YXJuaW5nIiwid2hpdGUiLCJGT05UX0ZBTUlMWSIsImhlYWRlciIsImJvZHkiLCJlcnJvciIsIkZPTlRfU0laRVMiLCJoMSIsImgyIiwiaDMiLCJoNCIsImJvZHkyIiwiZm9ybUgxIiwiZm9ybUl0ZW1MaXN0SDEiLCJmb3JtRXJyb3IiLCJXRUlHSFRTIiwibWVkaXVtIiwic2VtaUJvbGQiLCJib2xkIiwiUVVFUklFUyIsInBob25lQW5kVXAiLCJ0YWJsZXRBbmRVcCIsImxhcHRvcEFuZFVwIiwieGxBbmRVcCJdLCJzb3VyY2VSb290IjoiIn0=