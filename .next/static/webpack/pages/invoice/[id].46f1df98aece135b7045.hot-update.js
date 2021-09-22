"use strict";
self["webpackHotUpdate_N_E"]("pages/invoice/[id]",{

/***/ "./components/Form/EditInvoiceForm.tsx":
/*!*********************************************!*\
  !*** ./components/Form/EditInvoiceForm.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditInvoiceForm": function() { return /* binding */ EditInvoiceForm; }
/* harmony export */ });
/* harmony import */ var C_Users_scott_Documents_GitHub_Invoice_App_FS_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hookform/resolvers/yup */ "./node_modules/@hookform/resolvers/yup/dist/yup.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var config_Form_InitalValues__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! config/Form/InitalValues */ "./config/Form/InitalValues.ts");
/* harmony import */ var config_Form_ValidationSchema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! config/Form/ValidationSchema */ "./config/Form/ValidationSchema.ts");
/* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Error */ "./components/Form/Error.tsx");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Button */ "./components/Button/index.ts");
/* harmony import */ var _components_Form_Fields_FormField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Form/Fields/FormField */ "./components/Form/Fields/FormField.tsx");
/* harmony import */ var _components_Form_Fields_ItemField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Form/Fields/ItemField */ "./components/Form/Fields/ItemField.tsx");
/* harmony import */ var _components_Form_FormSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/Form/FormSection */ "./components/Form/FormSection.tsx");
/* harmony import */ var _styles_typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/styles/typography */ "./styles/typography.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\scott\\Documents\\GitHub\\Invoice-App-FS\\components\\Form\\EditInvoiceForm.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_scott_Documents_GitHub_Invoice_App_FS_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














var EditInvoiceForm = function EditInvoiceForm(_ref) {
  _s();

  var _methods$formState$er;

  var setDrawerOpen = _ref.setDrawerOpen,
      invoice = _ref.invoice;
  var methods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
    defaultValues: config_Form_InitalValues__WEBPACK_IMPORTED_MODULE_4__.initalValues,
    resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_1__.yupResolver)(config_Form_ValidationSchema__WEBPACK_IMPORTED_MODULE_5__.formSchema),
    mode: 'onBlur'
  });

  var _useFieldArray = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFieldArray)({
    control: methods.control,
    name: 'invoice_items'
  }),
      fields = _useFieldArray.fields,
      append = _useFieldArray.append,
      remove = _useFieldArray.remove; // TODO: Fix price input treating cents as dollars oh also the date input is fucked good luck


  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    methods.reset(_objectSpread(_objectSpread({}, invoice), {}, {
      invoice_items: invoice === null || invoice === void 0 ? void 0 : invoice.invoice_items
    }));
  }, [invoice, methods]);

  var submitFormData = function submitFormData(data) {
    return console.log(data);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.FormProvider, _objectSpread(_objectSpread({}, methods), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(StyledForm, {
      onSubmit: methods.handleSubmit(submitFormData),
      children: [invoice && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(FormHeader, {
        children: ["Edit ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("span", {
          children: "#"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 12
        }, _this), invoice.id]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 6
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(InnerWrapper, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Form_FormSection__WEBPACK_IMPORTED_MODULE_10__.FormSection, {
          label: "Bill From",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Form_Fields_FormField__WEBPACK_IMPORTED_MODULE_8__.FormField, {
            type: "text",
            label: "Street Address",
            name: "user_street_address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(Row, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Form_Fields_FormField__WEBPACK_IMPORTED_MODULE_8__.FormField, {
              style: {
                minWidth: '140px',
                flex: 1
              },
              type: "text",
              label: "City",
              name: "user_city"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 8
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Form_Fields_FormField__WEBPACK_IMPORTED_MODULE_8__.FormField, {
              style: {
                minWidth: '140px',
                flex: 1
              },
              type: "text",
              label: "Post Code",
              name: "user_post_code"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 8
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Form_Fields_FormField__WEBPACK_IMPORTED_MODULE_8__.FormField, {
              style: {
                minWidth: '152px',
                flex: 1
              },
              type: "text",
              label: "Country",
              name: "user_country"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Form_FormSection__WEBPACK_IMPORTED_MODULE_10__.FormSection, {
          label: "Bill To",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Form_Fields_FormField__WEBPACK_IMPORTED_MODULE_8__.FormField, {
            type: "text",
            label: "Client's Name",
            name: "client_name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Form_Fields_FormField__WEBPACK_IMPORTED_MODULE_8__.FormField, {
            type: "email",
            label: "Client's Email",
            name: "client_email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Form_Fields_FormField__WEBPACK_IMPORTED_MODULE_8__.FormField, {
            type: "text",
            label: "Street Address",
            name: "client_street_address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(Row, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Form_Fields_FormField__WEBPACK_IMPORTED_MODULE_8__.FormField, {
              style: {
                minWidth: '140px',
                flex: 1
              },
              type: "text",
              label: "City",
              name: "client_city"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 8
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Form_Fields_FormField__WEBPACK_IMPORTED_MODULE_8__.FormField, {
              style: {
                minWidth: '140px',
                flex: 1
              },
              type: "text",
              label: "Post Code",
              name: "client_post_code"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 8
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Form_Fields_FormField__WEBPACK_IMPORTED_MODULE_8__.FormField, {
              style: {
                minWidth: '152px',
                flex: 1
              },
              type: "text",
              label: "Country",
              name: "client_country"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Form_FormSection__WEBPACK_IMPORTED_MODULE_10__.FormSection, {
          label: "Invoice Details",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(Row, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Form_Fields_FormField__WEBPACK_IMPORTED_MODULE_8__.FormField, {
            style: {
              minWidth: '152px',
              flex: 1
            },
            type: "text",
            label: "Project Description",
            name: "description"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(ItemsListHeaderWrapper, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(ItemListHeader, {
              children: "Item List"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 8
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_Error__WEBPACK_IMPORTED_MODULE_6__.Error, {
              children: (_methods$formState$er = methods.formState.errors.invoiceItems) === null || _methods$formState$er === void 0 ? void 0 : _methods$formState$er.message
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(ItemsFieldList, {
            children: [fields.map(function (item, itemIndex) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Form_Fields_ItemField__WEBPACK_IMPORTED_MODULE_9__.ItemField, {
                idx: itemIndex,
                remove: remove
              }, item.id, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 9
              }, _this);
            }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(AddItemButton, {
              variant: "secondary",
              type: "button",
              onClick: function onClick() {
                return append({
                  name: '',
                  quantity: 0,
                  price: 0
                });
              },
              children: "+ Add New Item"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(FormButtonsContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_7__.Button, {
          onClick: function onClick() {
            return setDrawerOpen(false);
          },
          type: "button",
          variant: "secondary",
          children: "Cancel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(SaveDraftButton, {
          type: "submit",
          variant: "tertiary",
          children: "Save as Draft"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_7__.Button, {
          type: "submit",
          variant: "primary",
          children: "Save Changes"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 4
    }, _this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 3
  }, _this);
};

_s(EditInvoiceForm, "qTmzPc9r0XBXCIPKKIqJ3YOXK94=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm, react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFieldArray];
});

_c = EditInvoiceForm;
var BackButton = styled_components__WEBPACK_IMPORTED_MODULE_13__.default.button.withConfig({
  displayName: "EditInvoiceForm__BackButton",
  componentId: "sc-1v4zcog-0"
})(["", ";display:flex;align-items:baseline;background-color:transparent;margin-top:32px;span{margin-left:24px;}@media ", "{display:none;}"], _styles_typography__WEBPACK_IMPORTED_MODULE_11__.h4TextStyle, function (p) {
  return p.theme.QUERIES.tabletAndUp;
});
var FormHeader = styled_components__WEBPACK_IMPORTED_MODULE_13__.default.h2.withConfig({
  displayName: "EditInvoiceForm__FormHeader",
  componentId: "sc-1v4zcog-1"
})(["", ";padding-top:24px;span{color:", ";}@media ", "{padding-top:56px;}"], _styles_typography__WEBPACK_IMPORTED_MODULE_11__.formHeaderTextStyle, function (p) {
  return p.theme.COLORS.grey[1];
}, function (p) {
  return p.theme.QUERIES.tabletAndUp;
}); // Form

_c2 = FormHeader;
var StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_13__.default.form.withConfig({
  displayName: "EditInvoiceForm__StyledForm",
  componentId: "sc-1v4zcog-2"
})(["position:relative;height:100%;display:flex;flex-flow:column;padding:0;@media ", "{width:528px;}"], function (p) {
  return p.theme.QUERIES.tabletAndUp;
});
_c3 = StyledForm;
var InnerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_13__.default.div.withConfig({
  displayName: "EditInvoiceForm__InnerWrapper",
  componentId: "sc-1v4zcog-3"
})(["height:100%;width:100%;overflow:scroll !important;padding-right:8px;@media ", "{padding-right:16px;}"], function (p) {
  return p.theme.QUERIES.tabletAndUp;
});
_c4 = InnerWrapper;
var Row = styled_components__WEBPACK_IMPORTED_MODULE_13__.default.div.withConfig({
  displayName: "EditInvoiceForm__Row",
  componentId: "sc-1v4zcog-4"
})(["display:flex;flex-wrap:wrap;gap:23px;width:100%;"]);
_c5 = Row;
var ItemsListHeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_13__.default.div.withConfig({
  displayName: "EditInvoiceForm__ItemsListHeaderWrapper",
  componentId: "sc-1v4zcog-5"
})(["display:flex;flex-wrap:wrap;width:100%;margin-top:66px;@media ", "{flex-flow:row;justify-content:space-between;align-items:baseline;}"], function (p) {
  return p.theme.QUERIES.tabletAndUp;
});
_c6 = ItemsListHeaderWrapper;
var ItemListHeader = styled_components__WEBPACK_IMPORTED_MODULE_13__.default.h4.withConfig({
  displayName: "EditInvoiceForm__ItemListHeader",
  componentId: "sc-1v4zcog-6"
})(["", ";display:block;width:100%;color:", ";@media ", "{flex-flow:row;justify-content:space-between;align-items:baseline;width:auto;}"], _styles_typography__WEBPACK_IMPORTED_MODULE_11__.itemlistHeaderTextStyle, function (p) {
  return p.theme.COLORS.grey[7];
}, function (p) {
  return p.theme.QUERIES.tabletAndUp;
});
_c7 = ItemListHeader;
var ItemsFieldList = styled_components__WEBPACK_IMPORTED_MODULE_13__.default.div.withConfig({
  displayName: "EditInvoiceForm__ItemsFieldList",
  componentId: "sc-1v4zcog-7"
})(["display:flex;flex-flow:column;gap:24px;width:100%;"]);
_c8 = ItemsFieldList;
var FormButtonsContainer = styled_components__WEBPACK_IMPORTED_MODULE_13__.default.div.withConfig({
  displayName: "EditInvoiceForm__FormButtonsContainer",
  componentId: "sc-1v4zcog-8"
})(["display:flex;height:91px;align-items:center;justify-content:flex-end;gap:8px;margin-top:24px;padding-right:8px;@media ", "{padding-right:16px;}"], function (p) {
  return p.theme.QUERIES.tabletAndUp;
});
_c9 = FormButtonsContainer;
var AddItemButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_13__.default)(_components_Button__WEBPACK_IMPORTED_MODULE_7__.Button).withConfig({
  displayName: "EditInvoiceForm__AddItemButton",
  componentId: "sc-1v4zcog-9"
})([""]);
_c10 = AddItemButton;
var SaveDraftButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_13__.default)(_components_Button__WEBPACK_IMPORTED_MODULE_7__.Button).withConfig({
  displayName: "EditInvoiceForm__SaveDraftButton",
  componentId: "sc-1v4zcog-10"
})(["display:none;"]);
_c11 = SaveDraftButton;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;

$RefreshReg$(_c, "EditInvoiceForm");
$RefreshReg$(_c2, "FormHeader");
$RefreshReg$(_c3, "StyledForm");
$RefreshReg$(_c4, "InnerWrapper");
$RefreshReg$(_c5, "Row");
$RefreshReg$(_c6, "ItemsListHeaderWrapper");
$RefreshReg$(_c7, "ItemListHeader");
$RefreshReg$(_c8, "ItemsFieldList");
$RefreshReg$(_c9, "FormButtonsContainer");
$RefreshReg$(_c10, "AddItemButton");
$RefreshReg$(_c11, "SaveDraftButton");

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

/***/ "./components/Form/Fields/ItemField.tsx":
/*!**********************************************!*\
  !*** ./components/Form/Fields/ItemField.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemField": function() { return /* binding */ ItemField; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_currency_input_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-currency-input-field */ "./node_modules/react-currency-input-field/dist/index.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _FormField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormField */ "./components/Form/Fields/FormField.tsx");
/* harmony import */ var _PriceField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PriceField */ "./components/Form/Fields/PriceField.tsx");
/* harmony import */ var _styles_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/typography */ "./styles/typography.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\scott\\Documents\\GitHub\\Invoice-App-FS\\components\\Form\\Fields\\ItemField.tsx",
    _this = undefined,
    _s = $RefreshSig$();









var ItemField = function ItemField(_ref) {
  _s();

  var _invoiceItem$price;

  var idx = _ref.idx,
      remove = _ref.remove;

  var _useFormContext = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)(),
      control = _useFormContext.control,
      getValues = _useFormContext.getValues;

  var demo = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useWatch)({
    control: control,
    name: ["invoice_items[".concat(idx, "].quantity"), "invoice_items[".concat(idx, "].price")]
  });
  var invoiceItem = getValues('invoice_items')[idx];

  var calculateTotal = function calculateTotal() {
    var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    if (isNaN(price) || isNaN(quantity)) {
      return '0';
    }

    return (quantity * price / 100).toFixed(2).toString();
  };

  var formattedTotal = (0,react_currency_input_field__WEBPACK_IMPORTED_MODULE_1__.formatValue)({
    value: calculateTotal(invoiceItem === null || invoiceItem === void 0 ? void 0 : invoiceItem.quantity, invoiceItem === null || invoiceItem === void 0 ? void 0 : invoiceItem.price),
    groupSeparator: ',',
    decimalScale: 2,
    decimalSeparator: '.',
    prefix: '$'
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Wrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(ItemName, {
      label: "Item Name",
      name: "invoice_items[".concat(idx, "].name"),
      type: "text"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Quantity, {
      label: "Qty",
      name: "invoice_items[".concat(idx, "].quantity"),
      type: "number",
      min: 0
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_PriceField__WEBPACK_IMPORTED_MODULE_4__.PriceField, {
      formPriceValue: (_invoiceItem$price = invoiceItem === null || invoiceItem === void 0 ? void 0 : invoiceItem.price) !== null && _invoiceItem$price !== void 0 ? _invoiceItem$price : 0,
      name: "invoice_items[".concat(idx, "].price")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(TotalWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
        children: "Total"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(TotalPrice, {
        children: formattedTotal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(DeleteButton, {
      type: "button",
      onClick: function onClick() {
        return remove(idx);
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("svg", {
        width: "13",
        height: "16",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("path", {
          d: "M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z",
          fillRule: "nonzero"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 3
  }, _this);
};

_s(ItemField, "kHJK7LgLg2gBDp0ltL/GuPJYU/U=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext, react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useWatch];
});

_c = ItemField;
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.fieldset.withConfig({
  displayName: "ItemField__Wrapper",
  componentId: "sc-twlod0-0"
})(["display:flex;flex-flow:row;flex-wrap:wrap;gap:16px;width:100%;@media ", "{gap:revert;flex-wrap:revert;}"], function (p) {
  return p.theme.QUERIES.tabletAndUp;
}); // Item Name Field

_c2 = Wrapper;
var ItemName = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__.default)(_FormField__WEBPACK_IMPORTED_MODULE_3__.FormField).withConfig({
  displayName: "ItemField__ItemName",
  componentId: "sc-twlod0-1"
})(["min-width:309px;width:100%;@media ", "{min-width:revert;width:214px;margin-right:16px;}"], function (p) {
  return p.theme.QUERIES.tabletAndUp;
}); // Quanity Field

_c3 = ItemName;
var Quantity = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__.default)(_FormField__WEBPACK_IMPORTED_MODULE_3__.FormField).withConfig({
  displayName: "ItemField__Quantity",
  componentId: "sc-twlod0-2"
})(["max-width:64px;span{text-align:center;}input{padding:0;padding-left:20px;}@media ", "{margin-right:16px;width:46px;div{justify-content:center;}input{padding:0;text-align:center;}}"], function (p) {
  return p.theme.QUERIES.tabletAndUp;
}); // Total Display (styled to look like field)

_c4 = Quantity;
var TotalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div.withConfig({
  displayName: "ItemField__TotalWrapper",
  componentId: "sc-twlod0-3"
})(["", ";display:flex;flex-flow:column;color:", ";max-width:60px;span{margin-bottom:10px;}@media ", "{max-width:45px;}"], _styles_typography__WEBPACK_IMPORTED_MODULE_5__.bodyTextStyle, function (p) {
  return p.theme.COLORS.primary[3];
}, function (p) {
  return p.theme.QUERIES.tabletAndUp;
});
_c5 = TotalWrapper;
var TotalPrice = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.p.withConfig({
  displayName: "ItemField__TotalPrice",
  componentId: "sc-twlod0-4"
})(["", ";display:flex;align-items:center;height:48px;"], _styles_typography__WEBPACK_IMPORTED_MODULE_5__.h4TextStyle); // Delete Item button

_c6 = TotalPrice;
var DeleteButton = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.button.withConfig({
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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      price = _useState[0],
      setPrice = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setPrice(parseFloat((formPriceValue / 100).toFixed(2)));
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Wrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
      children: "Price"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
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
            field.onChange(Math.round(e * 100));
            setPrice(e);
          },
          defaultValue: field.value / 100,
          value: price
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 6
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 3
  }, _this);
}; // Price Field

_s(PriceField, "kzsH4gkW4RJiSqo7YAWkIaNNXZY=", false, function () {
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


/***/ }),

/***/ "./node_modules/react-currency-input-field/dist/index.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-currency-input-field/dist/index.esm.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatValue": function() { return /* binding */ formatValue; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || from);
}

/**
 * Escape regex char
 *
 * See: https://stackoverflow.com/questions/17885855/use-dynamic-variable-string-as-regex-pattern-in-javascript
 */
var escapeRegExp = function (stringToGoIntoTheRegex) {
    return stringToGoIntoTheRegex.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};

var abbrMap = { k: 1000, m: 1000000, b: 1000000000 };
/**
 * Parse a value with abbreviation e.g 1k = 1000
 */
var parseAbbrValue = function (value, decimalSeparator) {
    if (decimalSeparator === void 0) { decimalSeparator = '.'; }
    var reg = new RegExp("(\\d+(" + escapeRegExp(decimalSeparator) + "\\d*)?)([kmb])$", 'i');
    var match = value.match(reg);
    if (match) {
        var digits = match[1], abbr = match[3];
        var multiplier = abbrMap[abbr.toLowerCase()];
        return Number(digits.replace(decimalSeparator, '.')) * multiplier;
    }
    return undefined;
};

/**
 * Remove group separator from value eg. 1,000 > 1000
 */
var removeSeparators = function (value, separator) {
    if (separator === void 0) { separator = ','; }
    var reg = new RegExp(escapeRegExp(separator), 'g');
    return value.replace(reg, '');
};

/**
 * Remove invalid characters
 */
var removeInvalidChars = function (value, validChars) {
    var chars = escapeRegExp(validChars.join(''));
    var reg = new RegExp("[^\\d" + chars + "]", 'gi');
    return value.replace(reg, '');
};

/**
 * Remove prefix, separators and extra decimals from value
 */
var cleanValue = function (_a) {
    var value = _a.value, _b = _a.groupSeparator, groupSeparator = _b === void 0 ? ',' : _b, _c = _a.decimalSeparator, decimalSeparator = _c === void 0 ? '.' : _c, _d = _a.allowDecimals, allowDecimals = _d === void 0 ? true : _d, _e = _a.decimalsLimit, decimalsLimit = _e === void 0 ? 2 : _e, _f = _a.allowNegativeValue, allowNegativeValue = _f === void 0 ? true : _f, _g = _a.disableAbbreviations, disableAbbreviations = _g === void 0 ? false : _g, _h = _a.prefix, prefix = _h === void 0 ? '' : _h;
    if (value === '-') {
        return value;
    }
    var abbreviations = disableAbbreviations ? [] : ['k', 'm', 'b'];
    var reg = new RegExp("((^|\\D)-\\d)|(-" + escapeRegExp(prefix) + ")");
    var isNegative = reg.test(value);
    // Is there a digit before the prefix? eg. 1$
    var _j = RegExp("(\\d+)-?" + escapeRegExp(prefix)).exec(value) || [], prefixWithValue = _j[0], preValue = _j[1];
    var withoutPrefix = prefix
        ? prefixWithValue
            ? value.replace(prefixWithValue, '').concat(preValue)
            : value.replace(prefix, '')
        : value;
    var withoutSeparators = removeSeparators(withoutPrefix, groupSeparator);
    var withoutInvalidChars = removeInvalidChars(withoutSeparators, __spreadArray([
        groupSeparator,
        decimalSeparator
    ], abbreviations));
    var valueOnly = withoutInvalidChars;
    if (!disableAbbreviations) {
        // disallow letter without number
        if (abbreviations.some(function (letter) { return letter === withoutInvalidChars.toLowerCase(); })) {
            return '';
        }
        var parsed = parseAbbrValue(withoutInvalidChars, decimalSeparator);
        if (parsed) {
            valueOnly = String(parsed);
        }
    }
    var includeNegative = isNegative && allowNegativeValue ? '-' : '';
    if (decimalSeparator && valueOnly.includes(decimalSeparator)) {
        var _k = withoutInvalidChars.split(decimalSeparator), int = _k[0], decimals = _k[1];
        var trimmedDecimals = decimalsLimit && decimals ? decimals.slice(0, decimalsLimit) : decimals;
        var includeDecimals = allowDecimals ? "" + decimalSeparator + trimmedDecimals : '';
        return "" + includeNegative + int + includeDecimals;
    }
    return "" + includeNegative + valueOnly;
};

var fixedDecimalValue = function (value, decimalSeparator, fixedDecimalLength) {
    if (fixedDecimalLength && value.length > 1) {
        if (value.includes(decimalSeparator)) {
            var _a = value.split(decimalSeparator), int = _a[0], decimals = _a[1];
            if (decimals.length > fixedDecimalLength) {
                return "" + int + decimalSeparator + decimals.slice(0, fixedDecimalLength);
            }
        }
        var reg = value.length > fixedDecimalLength
            ? new RegExp("(\\d+)(\\d{" + fixedDecimalLength + "})")
            : new RegExp("(\\d)(\\d+)");
        var match = value.match(reg);
        if (match) {
            var int = match[1], decimals = match[2];
            return "" + int + decimalSeparator + decimals;
        }
    }
    return value;
};

var getSuffix = function (value, _a) {
    var _b = _a.groupSeparator, groupSeparator = _b === void 0 ? ',' : _b, _c = _a.decimalSeparator, decimalSeparator = _c === void 0 ? '.' : _c;
    var suffixReg = new RegExp("\\d([^" + escapeRegExp(groupSeparator) + escapeRegExp(decimalSeparator) + "0-9]+)");
    var suffixMatch = value.match(suffixReg);
    return suffixMatch ? suffixMatch[1] : undefined;
};

/**
 * Format value with decimal separator, group separator and prefix
 */
var formatValue = function (options) {
    var _value = options.value, decimalSeparator = options.decimalSeparator, intlConfig = options.intlConfig, decimalScale = options.decimalScale, _a = options.prefix, prefix = _a === void 0 ? '' : _a, _b = options.suffix, suffix = _b === void 0 ? '' : _b;
    if (_value === '' || _value === undefined) {
        return '';
    }
    if (_value === '-') {
        return '-';
    }
    var isNegative = new RegExp("^\\d?-" + (prefix ? escapeRegExp(prefix) + "?" : '') + "\\d").test(_value);
    var value = decimalSeparator !== '.'
        ? replaceDecimalSeparator(_value, decimalSeparator, isNegative)
        : _value;
    var numberFormatter = intlConfig
        ? new Intl.NumberFormat(intlConfig.locale, intlConfig.currency
            ? {
                style: 'currency',
                currency: intlConfig.currency,
                minimumFractionDigits: decimalScale || 0,
                maximumFractionDigits: 20,
            }
            : undefined)
        : new Intl.NumberFormat(undefined, {
            minimumFractionDigits: decimalScale || 0,
            maximumFractionDigits: 20,
        });
    var parts = numberFormatter.formatToParts(Number(value));
    var formatted = replaceParts(parts, options);
    // Does intl formatting add a suffix?
    var intlSuffix = getSuffix(formatted, __assign({}, options));
    // Include decimal separator if user input ends with decimal separator
    var includeDecimalSeparator = _value.slice(-1) === decimalSeparator ? decimalSeparator : '';
    var _c = value.match(RegExp('\\d+\\.(\\d+)')) || [], decimals = _c[1];
    // Keep original decimal padding if no decimalScale
    if (decimalScale === undefined && decimals && decimalSeparator) {
        if (formatted.includes(decimalSeparator)) {
            formatted = formatted.replace(RegExp("(\\d+)(" + escapeRegExp(decimalSeparator) + ")(\\d+)", 'g'), "$1$2" + decimals);
        }
        else {
            if (intlSuffix && !suffix) {
                formatted = formatted.replace(intlSuffix, "" + decimalSeparator + decimals + intlSuffix);
            }
            else {
                formatted = "" + formatted + decimalSeparator + decimals;
            }
        }
    }
    if (suffix && includeDecimalSeparator) {
        return "" + formatted + includeDecimalSeparator + suffix;
    }
    if (intlSuffix && includeDecimalSeparator) {
        return formatted.replace(intlSuffix, "" + includeDecimalSeparator + intlSuffix);
    }
    if (intlSuffix && suffix) {
        return formatted.replace(intlSuffix, "" + includeDecimalSeparator + suffix);
    }
    return [formatted, includeDecimalSeparator, suffix].join('');
};
/**
 * Before converting to Number, decimal separator has to be .
 */
var replaceDecimalSeparator = function (value, decimalSeparator, isNegative) {
    var newValue = value;
    if (decimalSeparator && decimalSeparator !== '.') {
        newValue = newValue.replace(RegExp(escapeRegExp(decimalSeparator), 'g'), '.');
        if (isNegative && decimalSeparator === '-') {
            newValue = "-" + newValue.slice(1);
        }
    }
    return newValue;
};
var replaceParts = function (parts, _a) {
    var prefix = _a.prefix, groupSeparator = _a.groupSeparator, decimalSeparator = _a.decimalSeparator, decimalScale = _a.decimalScale, _b = _a.disableGroupSeparators, disableGroupSeparators = _b === void 0 ? false : _b;
    return parts
        .reduce(function (prev, _a, i) {
        var type = _a.type, value = _a.value;
        if (i === 0 && prefix) {
            if (type === 'minusSign') {
                return [value, prefix];
            }
            if (type === 'currency') {
                return __spreadArray(__spreadArray([], prev), [prefix]);
            }
            return [prefix, value];
        }
        if (type === 'currency') {
            return prefix ? prev : __spreadArray(__spreadArray([], prev), [value]);
        }
        if (type === 'group') {
            return !disableGroupSeparators
                ? __spreadArray(__spreadArray([], prev), [groupSeparator !== undefined ? groupSeparator : value]) : prev;
        }
        if (type === 'decimal') {
            if (decimalScale !== undefined && decimalScale === 0) {
                return prev;
            }
            return __spreadArray(__spreadArray([], prev), [decimalSeparator !== undefined ? decimalSeparator : value]);
        }
        if (type === 'fraction') {
            return __spreadArray(__spreadArray([], prev), [decimalScale !== undefined ? value.slice(0, decimalScale) : value]);
        }
        return __spreadArray(__spreadArray([], prev), [value]);
    }, [''])
        .join('');
};

var defaultConfig = {
    currencySymbol: '',
    groupSeparator: '',
    decimalSeparator: '',
    prefix: '',
    suffix: '',
};
/**
 * Get locale config from input or default
 */
var getLocaleConfig = function (intlConfig) {
    var _a = intlConfig || {}, locale = _a.locale, currency = _a.currency;
    var numberFormatter = locale
        ? new Intl.NumberFormat(locale, currency ? { currency: currency, style: 'currency' } : undefined)
        : new Intl.NumberFormat();
    return numberFormatter.formatToParts(1000.1).reduce(function (prev, curr, i) {
        if (curr.type === 'currency') {
            if (i === 0) {
                return __assign(__assign({}, prev), { currencySymbol: curr.value, prefix: curr.value });
            }
            else {
                return __assign(__assign({}, prev), { currencySymbol: curr.value, suffix: curr.value });
            }
        }
        if (curr.type === 'group') {
            return __assign(__assign({}, prev), { groupSeparator: curr.value });
        }
        if (curr.type === 'decimal') {
            return __assign(__assign({}, prev), { decimalSeparator: curr.value });
        }
        return prev;
    }, defaultConfig);
};

var isNumber = function (input) { return RegExp(/\d/, 'gi').test(input); };

var padTrimValue = function (value, decimalSeparator, decimalScale) {
    if (decimalSeparator === void 0) { decimalSeparator = '.'; }
    if (decimalScale === undefined || value === '' || value === undefined) {
        return value;
    }
    if (!value.match(/\d/g)) {
        return '';
    }
    var _a = value.split(decimalSeparator), int = _a[0], decimals = _a[1];
    if (decimalScale === 0) {
        return int;
    }
    var newValue = decimals || '';
    if (newValue.length < decimalScale) {
        while (newValue.length < decimalScale) {
            newValue += '0';
        }
    }
    else {
        newValue = newValue.slice(0, decimalScale);
    }
    return "" + int + decimalSeparator + newValue;
};

var CurrencyInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b = _a.allowDecimals, allowDecimals = _b === void 0 ? true : _b, _c = _a.allowNegativeValue, allowNegativeValue = _c === void 0 ? true : _c, id = _a.id, name = _a.name, className = _a.className, customInput = _a.customInput, decimalsLimit = _a.decimalsLimit, defaultValue = _a.defaultValue, _d = _a.disabled, disabled = _d === void 0 ? false : _d, userMaxLength = _a.maxLength, userValue = _a.value, onValueChange = _a.onValueChange, fixedDecimalLength = _a.fixedDecimalLength, placeholder = _a.placeholder, decimalScale = _a.decimalScale, prefix = _a.prefix, suffix = _a.suffix, intlConfig = _a.intlConfig, step = _a.step, min = _a.min, max = _a.max, _e = _a.disableGroupSeparators, disableGroupSeparators = _e === void 0 ? false : _e, _f = _a.disableAbbreviations, disableAbbreviations = _f === void 0 ? false : _f, _decimalSeparator = _a.decimalSeparator, _groupSeparator = _a.groupSeparator, onChange = _a.onChange, onFocus = _a.onFocus, onBlur = _a.onBlur, onKeyDown = _a.onKeyDown, onKeyUp = _a.onKeyUp, props = __rest(_a, ["allowDecimals", "allowNegativeValue", "id", "name", "className", "customInput", "decimalsLimit", "defaultValue", "disabled", "maxLength", "value", "onValueChange", "fixedDecimalLength", "placeholder", "decimalScale", "prefix", "suffix", "intlConfig", "step", "min", "max", "disableGroupSeparators", "disableAbbreviations", "decimalSeparator", "groupSeparator", "onChange", "onFocus", "onBlur", "onKeyDown", "onKeyUp"]);
    if (_decimalSeparator && isNumber(_decimalSeparator)) {
        throw new Error('decimalSeparator cannot be a number');
    }
    if (_groupSeparator && isNumber(_groupSeparator)) {
        throw new Error('groupSeparator cannot be a number');
    }
    var localeConfig = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () { return getLocaleConfig(intlConfig); }, [intlConfig]);
    var decimalSeparator = _decimalSeparator || localeConfig.decimalSeparator || '';
    var groupSeparator = _groupSeparator || localeConfig.groupSeparator || '';
    if (decimalSeparator &&
        groupSeparator &&
        decimalSeparator === groupSeparator &&
        disableGroupSeparators === false) {
        throw new Error('decimalSeparator cannot be the same as groupSeparator');
    }
    var formatValueOptions = {
        decimalSeparator: decimalSeparator,
        groupSeparator: groupSeparator,
        disableGroupSeparators: disableGroupSeparators,
        intlConfig: intlConfig,
        prefix: prefix || localeConfig.prefix,
        suffix: suffix,
    };
    var cleanValueOptions = {
        decimalSeparator: decimalSeparator,
        groupSeparator: groupSeparator,
        allowDecimals: allowDecimals,
        decimalsLimit: decimalsLimit || fixedDecimalLength || 2,
        allowNegativeValue: allowNegativeValue,
        disableAbbreviations: disableAbbreviations,
        prefix: prefix || localeConfig.prefix,
    };
    var formattedStateValue = defaultValue !== undefined && defaultValue !== null
        ? formatValue(__assign(__assign({}, formatValueOptions), { decimalScale: decimalScale, value: String(defaultValue) }))
        : userValue !== undefined && userValue !== null
            ? formatValue(__assign(__assign({}, formatValueOptions), { decimalScale: decimalScale, value: String(userValue) }))
            : '';
    var _g = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(formattedStateValue), stateValue = _g[0], setStateValue = _g[1];
    var _h = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), dirty = _h[0], setDirty = _h[1];
    var _j = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0), cursor = _j[0], setCursor = _j[1];
    var inputRef = ref || (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    /**
     * Process change in value
     */
    var processChange = function (value, selectionStart) {
        setDirty(true);
        var stringValue = cleanValue(__assign({ value: value }, cleanValueOptions));
        if (userMaxLength && stringValue.replace(/-/g, '').length > userMaxLength) {
            return;
        }
        if (stringValue === '' || stringValue === '-' || stringValue === decimalSeparator) {
            onValueChange && onValueChange(undefined, name, { float: null, formatted: '', value: '' });
            setStateValue(stringValue);
            return;
        }
        var numberValue = parseFloat(stringValue.replace(decimalSeparator, '.'));
        var formattedValue = formatValue(__assign({ value: stringValue }, formatValueOptions));
        /* istanbul ignore next */
        if (selectionStart !== undefined && selectionStart !== null) {
            // Prevent cursor jumping
            var newCursor = selectionStart + (formattedValue.length - value.length) || 1;
            setCursor(newCursor);
        }
        setStateValue(formattedValue);
        if (onValueChange) {
            var values = {
                float: numberValue,
                formatted: formattedValue,
                value: stringValue,
            };
            onValueChange(stringValue, name, values);
        }
    };
    /**
     * Handle change event
     */
    var handleOnChange = function (event) {
        var _a = event.target, value = _a.value, selectionStart = _a.selectionStart;
        processChange(value, selectionStart);
        onChange && onChange(event);
    };
    /**
     * Handle focus event
     */
    var handleOnFocus = function (event) {
        onFocus && onFocus(event);
        return stateValue ? stateValue.length : 0;
    };
    /**
     * Handle blur event
     *
     * Format value by padding/trimming decimals if required by
     */
    var handleOnBlur = function (event) {
        var value = event.target.value;
        var valueOnly = cleanValue(__assign({ value: value }, cleanValueOptions));
        if (valueOnly === '-' || !valueOnly) {
            setStateValue('');
            onBlur && onBlur(event);
            return;
        }
        var fixedDecimals = fixedDecimalValue(valueOnly, decimalSeparator, fixedDecimalLength);
        var newValue = padTrimValue(fixedDecimals, decimalSeparator, decimalScale !== undefined ? decimalScale : fixedDecimalLength);
        var numberValue = parseFloat(newValue.replace(decimalSeparator, '.'));
        var formattedValue = formatValue(__assign(__assign({}, formatValueOptions), { value: newValue }));
        if (onValueChange) {
            onValueChange(newValue, name, {
                float: numberValue,
                formatted: formattedValue,
                value: newValue,
            });
        }
        setStateValue(formattedValue);
        onBlur && onBlur(event);
    };
    /**
     * Handle key down event
     *
     * Increase or decrease value by step
     */
    var handleOnKeyDown = function (event) {
        var key = event.key;
        if (step && (key === 'ArrowUp' || key === 'ArrowDown')) {
            event.preventDefault();
            setCursor(stateValue.length);
            var currentValue = parseFloat(userValue !== undefined && userValue !== null
                ? String(userValue).replace(decimalSeparator, '.')
                : cleanValue(__assign({ value: stateValue }, cleanValueOptions))) || 0;
            var newValue = key === 'ArrowUp' ? currentValue + step : currentValue - step;
            if (min !== undefined && newValue < min) {
                return;
            }
            if (max !== undefined && newValue > max) {
                return;
            }
            var fixedLength = String(step).includes('.')
                ? Number(String(step).split('.')[1].length)
                : undefined;
            processChange(String(fixedLength ? newValue.toFixed(fixedLength) : newValue).replace('.', decimalSeparator));
        }
        onKeyDown && onKeyDown(event);
    };
    /**
     * Handle key up event
     *
     * Move cursor if there is a suffix to prevent user typing past suffix
     */
    var handleOnKeyUp = function (event) {
        var key = event.key, selectionStart = event.currentTarget.selectionStart;
        if (key !== 'ArrowUp' && key !== 'ArrowDown' && stateValue !== '-') {
            var suffix_1 = getSuffix(stateValue, { groupSeparator: groupSeparator, decimalSeparator: decimalSeparator });
            if (suffix_1 && selectionStart && selectionStart > stateValue.length - suffix_1.length) {
                if (inputRef && typeof inputRef === 'object' && inputRef.current) {
                    var newCursor = stateValue.length - suffix_1.length;
                    inputRef.current.setSelectionRange(newCursor, newCursor);
                }
            }
        }
        onKeyUp && onKeyUp(event);
    };
    /* istanbul ignore next */
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        // prevent cursor jumping if editing value
        if (dirty &&
            stateValue !== '-' &&
            inputRef &&
            typeof inputRef === 'object' &&
            inputRef.current) {
            inputRef.current.setSelectionRange(cursor, cursor);
        }
    }, [stateValue, cursor, inputRef, dirty]);
    /**
     * If user has only entered "-" or decimal separator,
     * keep the char to allow them to enter next value
     */
    var getRenderValue = function () {
        if (userValue !== undefined &&
            userValue !== null &&
            stateValue !== '-' &&
            stateValue !== decimalSeparator) {
            return formatValue(__assign(__assign({}, formatValueOptions), { decimalScale: dirty ? undefined : decimalScale, value: String(userValue) }));
        }
        return stateValue;
    };
    var inputProps = __assign({ type: 'text', inputMode: 'decimal', id: id,
        name: name,
        className: className, onChange: handleOnChange, onBlur: handleOnBlur, onFocus: handleOnFocus, onKeyDown: handleOnKeyDown, onKeyUp: handleOnKeyUp, placeholder: placeholder,
        disabled: disabled, value: getRenderValue(), ref: inputRef }, props);
    if (customInput) {
        var CustomInput = customInput;
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CustomInput, __assign({}, inputProps));
    }
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", __assign({}, inputProps));
});
CurrencyInput.displayName = 'CurrencyInput';

/* harmony default export */ __webpack_exports__["default"] = (CurrencyInput);

//# sourceMappingURL=index.esm.js.map


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW52b2ljZS9baWRdLjQ2ZjFkZjk4YWVjZTEzNWI3MDQ1LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFRTyxJQUFNaUIsZUFBb0MsR0FBRyxTQUF2Q0EsZUFBdUMsT0FBZ0M7QUFBQTs7QUFBQTs7QUFBQSxNQUE3QkMsYUFBNkIsUUFBN0JBLGFBQTZCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQ25GLE1BQU1DLE9BQU8sR0FBR2Ysd0RBQU8sQ0FBQztBQUN2QmdCLElBQUFBLGFBQWEsRUFBRWQsa0VBRFE7QUFFdkJlLElBQUFBLFFBQVEsRUFBRXRCLG9FQUFXLENBQUNRLG9FQUFELENBRkU7QUFHdkJlLElBQUFBLElBQUksRUFBRTtBQUhpQixHQUFELENBQXZCOztBQU1BLHVCQUFtQ25CLDhEQUFhLENBQUM7QUFDaERvQixJQUFBQSxPQUFPLEVBQUVKLE9BQU8sQ0FBQ0ksT0FEK0I7QUFFaERDLElBQUFBLElBQUksRUFBRTtBQUYwQyxHQUFELENBQWhEO0FBQUEsTUFBUUMsTUFBUixrQkFBUUEsTUFBUjtBQUFBLE1BQWdCQyxNQUFoQixrQkFBZ0JBLE1BQWhCO0FBQUEsTUFBd0JDLE1BQXhCLGtCQUF3QkEsTUFBeEIsQ0FQbUYsQ0FXbkY7OztBQUNBMUIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2ZrQixJQUFBQSxPQUFPLENBQUNTLEtBQVIsaUNBQ0lWLE9BREo7QUFFQ1csTUFBQUEsYUFBYSxFQUFFWCxPQUFGLGFBQUVBLE9BQUYsdUJBQUVBLE9BQU8sQ0FBRVc7QUFGekI7QUFJQSxHQUxRLEVBS04sQ0FBQ1gsT0FBRCxFQUFVQyxPQUFWLENBTE0sQ0FBVDs7QUFPQSxNQUFNVyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELG9FQUFvRTtBQUN2SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0RBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCx5QkFBeUIsMEVBQTBFO0FBQ3RKO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFO0FBQ0E7QUFDQSxlQUFlLDBEQUFtQix5QkFBeUI7QUFDM0Q7QUFDQSxXQUFXLDBEQUFtQixxQkFBcUI7QUFDbkQsQ0FBQztBQUNEOztBQUVBLCtEQUFlLGFBQWEsRUFBQztBQUNOO0FBQ3ZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9ybS9FZGl0SW52b2ljZUZvcm0udHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zvcm0vRmllbGRzL0l0ZW1GaWVsZC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9ybS9GaWVsZHMvUHJpY2VGaWVsZC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1jdXJyZW5jeS1pbnB1dC1maWVsZC9kaXN0L2luZGV4LmVzbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB5dXBSZXNvbHZlciB9IGZyb20gJ0Bob29rZm9ybS9yZXNvbHZlcnMveXVwJztcclxuaW1wb3J0IFJlYWN0LCB7IERpc3BhdGNoLCBGQywgU2V0U3RhdGVBY3Rpb24sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybVByb3ZpZGVyLCB1c2VGaWVsZEFycmF5LCB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBpbml0YWxWYWx1ZXMgfSBmcm9tICdjb25maWcvRm9ybS9Jbml0YWxWYWx1ZXMnO1xyXG5pbXBvcnQgeyBmb3JtU2NoZW1hIH0gZnJvbSAnY29uZmlnL0Zvcm0vVmFsaWRhdGlvblNjaGVtYSc7XHJcblxyXG5pbXBvcnQgeyBFcnJvciB9IGZyb20gJy4vRXJyb3InO1xyXG5cclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQC9jb21wb25lbnRzL0J1dHRvbic7XHJcbmltcG9ydCB7IERhdGVGaWVsZCB9IGZyb20gJ0AvY29tcG9uZW50cy9Gb3JtL0ZpZWxkcy9EYXRlRmllbGQnO1xyXG5pbXBvcnQgeyBGb3JtRmllbGQgfSBmcm9tICdAL2NvbXBvbmVudHMvRm9ybS9GaWVsZHMvRm9ybUZpZWxkJztcclxuaW1wb3J0IHsgSXRlbUZpZWxkIH0gZnJvbSAnQC9jb21wb25lbnRzL0Zvcm0vRmllbGRzL0l0ZW1GaWVsZCc7XHJcbmltcG9ydCB7IEZvcm1TZWN0aW9uIH0gZnJvbSAnQC9jb21wb25lbnRzL0Zvcm0vRm9ybVNlY3Rpb24nO1xyXG5pbXBvcnQgeyBmb3JtSGVhZGVyVGV4dFN0eWxlLCBoNFRleHRTdHlsZSwgaXRlbWxpc3RIZWFkZXJUZXh0U3R5bGUgfSBmcm9tICdAL3N0eWxlcy90eXBvZ3JhcGh5JztcclxuaW1wb3J0IHsgSW52b2ljZSB9IGZyb20gJ0AvdHlwZXMvaW5kZXgnO1xyXG5cclxuaW50ZXJmYWNlIEVkaXRJbnZvaWNlRm9ybSB7XHJcblx0c2V0RHJhd2VyT3BlbjogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+O1xyXG5cdGludm9pY2U6IEludm9pY2UgfCB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBFZGl0SW52b2ljZUZvcm06IEZDPEVkaXRJbnZvaWNlRm9ybT4gPSAoeyBzZXREcmF3ZXJPcGVuLCBpbnZvaWNlIH0pID0+IHtcclxuXHRjb25zdCBtZXRob2RzID0gdXNlRm9ybSh7XHJcblx0XHRkZWZhdWx0VmFsdWVzOiBpbml0YWxWYWx1ZXMsXHJcblx0XHRyZXNvbHZlcjogeXVwUmVzb2x2ZXIoZm9ybVNjaGVtYSksXHJcblx0XHRtb2RlOiAnb25CbHVyJyxcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgeyBmaWVsZHMsIGFwcGVuZCwgcmVtb3ZlIH0gPSB1c2VGaWVsZEFycmF5KHtcclxuXHRcdGNvbnRyb2w6IG1ldGhvZHMuY29udHJvbCxcclxuXHRcdG5hbWU6ICdpbnZvaWNlX2l0ZW1zJyxcclxuXHR9KTtcclxuXHQvLyBUT0RPOiBGaXggcHJpY2UgaW5wdXQgdHJlYXRpbmcgY2VudHMgYXMgZG9sbGFycyBvaCBhbHNvIHRoZSBkYXRlIGlucHV0IGlzIGZ1Y2tlZCBnb29kIGx1Y2tcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0bWV0aG9kcy5yZXNldCh7XHJcblx0XHRcdC4uLmludm9pY2UsXHJcblx0XHRcdGludm9pY2VfaXRlbXM6IGludm9pY2U/Lmludm9pY2VfaXRlbXMsXHJcblx0XHR9KTtcclxuXHR9LCBbaW52b2ljZSwgbWV0aG9kc10pO1xyXG5cclxuXHRjb25zdCBzdWJtaXRGb3JtRGF0YSA9IChkYXRhOiBhbnkpID0+IGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEZvcm1Qcm92aWRlciB7Li4ubWV0aG9kc30+XHJcblx0XHRcdDxTdHlsZWRGb3JtIG9uU3VibWl0PXttZXRob2RzLmhhbmRsZVN1Ym1pdChzdWJtaXRGb3JtRGF0YSl9PlxyXG5cdFx0XHRcdHtpbnZvaWNlICYmIChcclxuXHRcdFx0XHRcdDxGb3JtSGVhZGVyPlxyXG5cdFx0XHRcdFx0XHRFZGl0IDxzcGFuPiM8L3NwYW4+XHJcblx0XHRcdFx0XHRcdHtpbnZvaWNlLmlkfVxyXG5cdFx0XHRcdFx0PC9Gb3JtSGVhZGVyPlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdFx0PElubmVyV3JhcHBlcj5cclxuXHRcdFx0XHRcdHsvKiBCaWxsIEZyb20gKi99XHJcblx0XHRcdFx0XHQ8Rm9ybVNlY3Rpb24gbGFiZWw9XCJCaWxsIEZyb21cIj5cclxuXHRcdFx0XHRcdFx0PEZvcm1GaWVsZCB0eXBlPVwidGV4dFwiIGxhYmVsPVwiU3RyZWV0IEFkZHJlc3NcIiBuYW1lPVwidXNlcl9zdHJlZXRfYWRkcmVzc1wiIC8+XHJcblx0XHRcdFx0XHRcdDxSb3c+XHJcblx0XHRcdFx0XHRcdFx0PEZvcm1GaWVsZFxyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgbWluV2lkdGg6ICcxNDBweCcsIGZsZXg6IDEgfX1cclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiQ2l0eVwiXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwidXNlcl9jaXR5XCJcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxGb3JtRmllbGRcclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IG1pbldpZHRoOiAnMTQwcHgnLCBmbGV4OiAxIH19XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlBvc3QgQ29kZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwidXNlcl9wb3N0X2NvZGVcIlxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PEZvcm1GaWVsZFxyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgbWluV2lkdGg6ICcxNTJweCcsIGZsZXg6IDEgfX1cclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiQ291bnRyeVwiXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwidXNlcl9jb3VudHJ5XCJcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L1Jvdz5cclxuXHRcdFx0XHRcdDwvRm9ybVNlY3Rpb24+XHJcblx0XHRcdFx0XHR7LyogQmlsbCBUbyAqL31cclxuXHRcdFx0XHRcdDxGb3JtU2VjdGlvbiBsYWJlbD1cIkJpbGwgVG9cIj5cclxuXHRcdFx0XHRcdFx0PEZvcm1GaWVsZCB0eXBlPVwidGV4dFwiIGxhYmVsPVwiQ2xpZW50J3MgTmFtZVwiIG5hbWU9XCJjbGllbnRfbmFtZVwiIC8+XHJcblx0XHRcdFx0XHRcdDxGb3JtRmllbGQgdHlwZT1cImVtYWlsXCIgbGFiZWw9XCJDbGllbnQncyBFbWFpbFwiIG5hbWU9XCJjbGllbnRfZW1haWxcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8Rm9ybUZpZWxkIHR5cGU9XCJ0ZXh0XCIgbGFiZWw9XCJTdHJlZXQgQWRkcmVzc1wiIG5hbWU9XCJjbGllbnRfc3RyZWV0X2FkZHJlc3NcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8Um93PlxyXG5cdFx0XHRcdFx0XHRcdDxGb3JtRmllbGRcclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IG1pbldpZHRoOiAnMTQwcHgnLCBmbGV4OiAxIH19XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkNpdHlcIlxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImNsaWVudF9jaXR5XCJcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxGb3JtRmllbGRcclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IG1pbldpZHRoOiAnMTQwcHgnLCBmbGV4OiAxIH19XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlBvc3QgQ29kZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiY2xpZW50X3Bvc3RfY29kZVwiXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUZpZWxkXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBtaW5XaWR0aDogJzE1MnB4JywgZmxleDogMSB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJDb3VudHJ5XCJcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJjbGllbnRfY291bnRyeVwiXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9Sb3c+XHJcblx0XHRcdFx0XHQ8L0Zvcm1TZWN0aW9uPlxyXG5cclxuXHRcdFx0XHRcdDxGb3JtU2VjdGlvbiBsYWJlbD1cIkludm9pY2UgRGV0YWlsc1wiPlxyXG5cdFx0XHRcdFx0XHQ8Um93PlxyXG5cdFx0XHRcdFx0XHRcdHsvKiA8RGF0ZUZpZWxkIHN0eWxlPXt7IGZsZXg6IDEgfX0gbmFtZT1cImludm9pY2VfZGF0ZVwiIGxhYmVsPVwiSW52b2ljZSBEYXRlXCIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8RGF0ZUZpZWxkIHN0eWxlPXt7IGZsZXg6IDEgfX0gbmFtZT1cImludm9pY2VfZHVlX2RhdGVcIiBsYWJlbD1cIkludm9pY2UgRHVlIERhdGVcIiAvPiAqL31cclxuXHRcdFx0XHRcdFx0PC9Sb3c+XHJcblxyXG5cdFx0XHRcdFx0XHQ8Rm9ybUZpZWxkXHJcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgbWluV2lkdGg6ICcxNTJweCcsIGZsZXg6IDEgfX1cclxuXHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJQcm9qZWN0IERlc2NyaXB0aW9uXCJcclxuXHRcdFx0XHRcdFx0XHRuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8SXRlbXNMaXN0SGVhZGVyV3JhcHBlcj5cclxuXHRcdFx0XHRcdFx0XHQ8SXRlbUxpc3RIZWFkZXI+SXRlbSBMaXN0PC9JdGVtTGlzdEhlYWRlcj5cclxuXHRcdFx0XHRcdFx0XHR7LyogQHRzLWV4cGVjdC1lcnJvcjogaWdub3JlIHdyb25nIHNjaGVtYSB3YXJuaW5nICovfVxyXG5cdFx0XHRcdFx0XHRcdDxFcnJvcj57bWV0aG9kcy5mb3JtU3RhdGUuZXJyb3JzLmludm9pY2VJdGVtcz8ubWVzc2FnZX08L0Vycm9yPlxyXG5cdFx0XHRcdFx0XHQ8L0l0ZW1zTGlzdEhlYWRlcldyYXBwZXI+XHJcblx0XHRcdFx0XHRcdDxJdGVtc0ZpZWxkTGlzdD5cclxuXHRcdFx0XHRcdFx0XHR7ZmllbGRzLm1hcCgoaXRlbSwgaXRlbUluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8SXRlbUZpZWxkIGtleT17aXRlbS5pZH0gaWR4PXtpdGVtSW5kZXh9IHJlbW92ZT17cmVtb3ZlfSAvPlxyXG5cdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHRcdDxBZGRJdGVtQnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PVwic2Vjb25kYXJ5XCJcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gYXBwZW5kKHsgbmFtZTogJycsIHF1YW50aXR5OiAwLCBwcmljZTogMCB9KX1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQrIEFkZCBOZXcgSXRlbVxyXG5cdFx0XHRcdFx0XHRcdDwvQWRkSXRlbUJ1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC9JdGVtc0ZpZWxkTGlzdD5cclxuXHRcdFx0XHRcdDwvRm9ybVNlY3Rpb24+XHJcblx0XHRcdFx0PC9Jbm5lcldyYXBwZXI+XHJcblx0XHRcdFx0PEZvcm1CdXR0b25zQ29udGFpbmVyPlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXREcmF3ZXJPcGVuKGZhbHNlKX0gdHlwZT1cImJ1dHRvblwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cclxuXHRcdFx0XHRcdFx0Q2FuY2VsXHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdDxTYXZlRHJhZnRCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiPlxyXG5cdFx0XHRcdFx0XHRTYXZlIGFzIERyYWZ0XHJcblx0XHRcdFx0XHQ8L1NhdmVEcmFmdEJ1dHRvbj5cclxuXHRcdFx0XHRcdDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJwcmltYXJ5XCI+XHJcblx0XHRcdFx0XHRcdFNhdmUgQ2hhbmdlc1xyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0PC9Gb3JtQnV0dG9uc0NvbnRhaW5lcj5cclxuXHRcdFx0PC9TdHlsZWRGb3JtPlxyXG5cdFx0PC9Gb3JtUHJvdmlkZXI+XHJcblx0KTtcclxufTtcclxuXHJcbmNvbnN0IEJhY2tCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG5cdCR7aDRUZXh0U3R5bGV9O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdG1hcmdpbi10b3A6IDMycHg7XHJcblx0c3BhbiB7XHJcblx0XHRtYXJnaW4tbGVmdDogMjRweDtcclxuXHR9XHJcblxyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgRm9ybUhlYWRlciA9IHN0eWxlZC5oMmBcclxuXHQke2Zvcm1IZWFkZXJUZXh0U3R5bGV9O1xyXG5cdHBhZGRpbmctdG9wOiAyNHB4O1xyXG5cdHNwYW4ge1xyXG5cdFx0Y29sb3I6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLmdyZXlbMV19O1xyXG5cdH1cclxuXHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0cGFkZGluZy10b3A6IDU2cHg7XHJcblx0fVxyXG5gO1xyXG5cclxuLy8gRm9ybVxyXG5jb25zdCBTdHlsZWRGb3JtID0gc3R5bGVkLmZvcm1gXHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZmxvdzogY29sdW1uO1xyXG5cdHBhZGRpbmc6IDA7XHJcblxyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdHdpZHRoOiA1MjhweDtcclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBJbm5lcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG5cdGhlaWdodDogMTAwJTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRvdmVyZmxvdzogc2Nyb2xsICFpbXBvcnRhbnQ7XHJcblx0cGFkZGluZy1yaWdodDogOHB4O1xyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgUm93ID0gc3R5bGVkLmRpdmBcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxuXHRnYXA6IDIzcHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcbmA7XHJcblxyXG5jb25zdCBJdGVtc0xpc3RIZWFkZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXJnaW4tdG9wOiA2NnB4O1xyXG5cclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLnRhYmxldEFuZFVwfSB7XHJcblx0XHRmbGV4LWZsb3c6IHJvdztcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBJdGVtTGlzdEhlYWRlciA9IHN0eWxlZC5oNGBcclxuXHQke2l0ZW1saXN0SGVhZGVyVGV4dFN0eWxlfTtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR3aWR0aDogMTAwJTtcclxuXHRjb2xvcjogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMuZ3JleVs3XX07XHJcblxyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdGZsZXgtZmxvdzogcm93O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5cdFx0d2lkdGg6IGF1dG87XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgSXRlbXNGaWVsZExpc3QgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1mbG93OiBjb2x1bW47XHJcblx0Z2FwOiAyNHB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybUJ1dHRvbnNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0aGVpZ2h0OiA5MXB4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHRnYXA6IDhweDtcclxuXHRtYXJnaW4tdG9wOiAyNHB4O1xyXG5cclxuXHRwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0cGFkZGluZy1yaWdodDogMTZweDtcclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBBZGRJdGVtQnV0dG9uID0gc3R5bGVkKEJ1dHRvbilgYDtcclxuXHJcbmNvbnN0IFNhdmVEcmFmdEJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEN1cnJlbmN5SW5wdXQsIHsgZm9ybWF0VmFsdWUgfSBmcm9tICdyZWFjdC1jdXJyZW5jeS1pbnB1dC1maWVsZCc7XHJcbmltcG9ydCB7IENvbnRyb2xsZXIsIHVzZUZvcm1Db250ZXh0LCB1c2VXYXRjaCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgRm9ybUZpZWxkIH0gZnJvbSAnLi9Gb3JtRmllbGQnO1xyXG5pbXBvcnQgeyBQcmljZUZpZWxkIH0gZnJvbSAnLi9QcmljZUZpZWxkJztcclxuXHJcbmltcG9ydCB7IGJvZHlUZXh0U3R5bGUsIGg0VGV4dFN0eWxlIH0gZnJvbSAnQC9zdHlsZXMvdHlwb2dyYXBoeSc7XHJcblxyXG5pbnRlcmZhY2UgSXRlbUZpZWxkUHJvcHMge1xyXG5cdGlkeDogbnVtYmVyO1xyXG5cdHJlbW92ZTogKGluZGV4PzogbnVtYmVyIHwgbnVtYmVyW10gfCB1bmRlZmluZWQpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBJdGVtRmllbGQ6IEZDPEl0ZW1GaWVsZFByb3BzPiA9ICh7IGlkeCwgcmVtb3ZlIH0pID0+IHtcclxuXHRjb25zdCB7IGNvbnRyb2wsIGdldFZhbHVlcyB9ID0gdXNlRm9ybUNvbnRleHQoKTtcclxuXHRjb25zdCBkZW1vID0gdXNlV2F0Y2goe1xyXG5cdFx0Y29udHJvbCxcclxuXHRcdG5hbWU6IFtgaW52b2ljZV9pdGVtc1ske2lkeH1dLnF1YW50aXR5YCwgYGludm9pY2VfaXRlbXNbJHtpZHh9XS5wcmljZWBdLFxyXG5cdH0pO1xyXG5cdGNvbnN0IGludm9pY2VJdGVtID0gZ2V0VmFsdWVzKCdpbnZvaWNlX2l0ZW1zJylbaWR4XTtcclxuXHJcblx0Y29uc3QgY2FsY3VsYXRlVG90YWwgPSAocHJpY2UgPSAwLCBxdWFudGl0eSA9IDApID0+IHtcclxuXHRcdGlmIChpc05hTihwcmljZSkgfHwgaXNOYU4ocXVhbnRpdHkpKSB7XHJcblx0XHRcdHJldHVybiAnMCc7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuICgocXVhbnRpdHkgKiBwcmljZSkgLyAxMDApLnRvRml4ZWQoMikudG9TdHJpbmcoKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBmb3JtYXR0ZWRUb3RhbCA9IGZvcm1hdFZhbHVlKHtcclxuXHRcdHZhbHVlOiBjYWxjdWxhdGVUb3RhbChpbnZvaWNlSXRlbT8ucXVhbnRpdHksIGludm9pY2VJdGVtPy5wcmljZSksXHJcblx0XHRncm91cFNlcGFyYXRvcjogJywnLFxyXG5cdFx0ZGVjaW1hbFNjYWxlOiAyLFxyXG5cdFx0ZGVjaW1hbFNlcGFyYXRvcjogJy4nLFxyXG5cdFx0cHJlZml4OiAnJCcsXHJcblx0fSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8V3JhcHBlcj5cclxuXHRcdFx0PEl0ZW1OYW1lIGxhYmVsPVwiSXRlbSBOYW1lXCIgbmFtZT17YGludm9pY2VfaXRlbXNbJHtpZHh9XS5uYW1lYH0gdHlwZT1cInRleHRcIiAvPlxyXG5cdFx0XHQ8UXVhbnRpdHkgbGFiZWw9XCJRdHlcIiBuYW1lPXtgaW52b2ljZV9pdGVtc1ske2lkeH1dLnF1YW50aXR5YH0gdHlwZT1cIm51bWJlclwiIG1pbj17MH0gLz5cclxuXHRcdFx0PFByaWNlRmllbGQgZm9ybVByaWNlVmFsdWU9e2ludm9pY2VJdGVtPy5wcmljZSA/PyAwfSBuYW1lPXtgaW52b2ljZV9pdGVtc1ske2lkeH1dLnByaWNlYH0gLz5cclxuXHRcdFx0PFRvdGFsV3JhcHBlcj5cclxuXHRcdFx0XHQ8c3Bhbj5Ub3RhbDwvc3Bhbj5cclxuXHRcdFx0XHQ8VG90YWxQcmljZT57Zm9ybWF0dGVkVG90YWx9PC9Ub3RhbFByaWNlPlxyXG5cdFx0XHQ8L1RvdGFsV3JhcHBlcj5cclxuXHRcdFx0PERlbGV0ZUJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gcmVtb3ZlKGlkeCl9PlxyXG5cdFx0XHRcdDxzdmcgd2lkdGg9XCIxM1wiIGhlaWdodD1cIjE2XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG5cdFx0XHRcdFx0PHBhdGhcclxuXHRcdFx0XHRcdFx0ZD1cIk0xMS41ODMgMy41NTZ2MTAuNjY2YzAgLjk4Mi0uNzk1IDEuNzc4LTEuNzc3IDEuNzc4SDIuNjk0YTEuNzc3IDEuNzc3IDAgMDEtMS43NzctMS43NzhWMy41NTZoMTAuNjY2ek04LjQ3MyAwbC44ODguODg5aDMuMTExdjEuNzc4SC4wMjhWLjg4OWgzLjExTDQuMDI5IDBoNC40NDR6XCJcclxuXHRcdFx0XHRcdFx0ZmlsbFJ1bGU9XCJub256ZXJvXCJcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9zdmc+XHJcblx0XHRcdDwvRGVsZXRlQnV0dG9uPlxyXG5cdFx0PC9XcmFwcGVyPlxyXG5cdCk7XHJcbn07XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmZpZWxkc2V0YFxyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1mbG93OiByb3c7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdGdhcDogMTZweDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLnRhYmxldEFuZFVwfSB7XHJcblx0XHRnYXA6IHJldmVydDtcclxuXHRcdGZsZXgtd3JhcDogcmV2ZXJ0O1xyXG5cdH1cclxuYDtcclxuXHJcbi8vIEl0ZW0gTmFtZSBGaWVsZFxyXG5jb25zdCBJdGVtTmFtZSA9IHN0eWxlZChGb3JtRmllbGQpYFxyXG5cdG1pbi13aWR0aDogMzA5cHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0bWluLXdpZHRoOiByZXZlcnQ7XHJcblx0XHR3aWR0aDogMjE0cHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcblx0fVxyXG5gO1xyXG5cclxuLy8gUXVhbml0eSBGaWVsZFxyXG5jb25zdCBRdWFudGl0eSA9IHN0eWxlZChGb3JtRmllbGQpYFxyXG5cdG1heC13aWR0aDogNjRweDtcclxuXHJcblx0c3BhbiB7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHRpbnB1dCB7XHJcblx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAyMHB4O1xyXG5cdH1cclxuXHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG5cdFx0d2lkdGg6IDQ2cHg7XHJcblxyXG5cdFx0ZGl2IHtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHR9XHJcblxyXG5cdFx0aW5wdXQge1xyXG5cdFx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHR9XHJcblx0fVxyXG5gO1xyXG5cclxuLy8gVG90YWwgRGlzcGxheSAoc3R5bGVkIHRvIGxvb2sgbGlrZSBmaWVsZClcclxuY29uc3QgVG90YWxXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuXHQke2JvZHlUZXh0U3R5bGV9O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1mbG93OiBjb2x1bW47XHJcblx0Y29sb3I6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLnByaW1hcnlbM119O1xyXG5cdG1heC13aWR0aDogNjBweDtcclxuXHRzcGFuIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLnRhYmxldEFuZFVwfSB7XHJcblx0XHRtYXgtd2lkdGg6IDQ1cHg7XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgVG90YWxQcmljZSA9IHN0eWxlZC5wYFxyXG5cdCR7aDRUZXh0U3R5bGV9O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRoZWlnaHQ6IDQ4cHg7XHJcbmA7XHJcblxyXG4vLyBEZWxldGUgSXRlbSBidXR0b25cclxuY29uc3QgRGVsZXRlQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuXHRoZWlnaHQ6IDQ4cHg7XHJcblx0YWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcblx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0c3ZnIHtcclxuXHRcdGZpbGw6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLmdyZXlbMV19O1xyXG5cdH1cclxuXHJcblx0Jjpob3ZlciB7XHJcblx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG5cdFx0c3ZnIHtcclxuXHRcdFx0ZmlsbDogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMud2FybmluZ1sxXX07XHJcblx0XHR9XHJcblx0fVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDdXJyZW5jeUlucHV0IGZyb20gJ3JlYWN0LWN1cnJlbmN5LWlucHV0LWZpZWxkJztcclxuaW1wb3J0IHsgQ29udHJvbGxlciwgdXNlRm9ybUNvbnRleHQgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCB7IGJvZHlUZXh0U3R5bGUsIGg0VGV4dFN0eWxlIH0gZnJvbSAnQC9zdHlsZXMvdHlwb2dyYXBoeSc7XHJcblxyXG5pbnRlcmZhY2UgUHJpY2VGaWVsZFByb3BzIHtcclxuXHRmb3JtUHJpY2VWYWx1ZTogbnVtYmVyO1xyXG5cdG5hbWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFByaWNlRmllbGQ6IEZDPFByaWNlRmllbGRQcm9wcz4gPSAoeyBmb3JtUHJpY2VWYWx1ZSwgbmFtZSB9KSA9PiB7XHJcblx0Y29uc3QgeyBjb250cm9sIH0gPSB1c2VGb3JtQ29udGV4dCgpO1xyXG5cdGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoMCk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRzZXRQcmljZShwYXJzZUZsb2F0KChmb3JtUHJpY2VWYWx1ZSAvIDEwMCkudG9GaXhlZCgyKSkpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxXcmFwcGVyPlxyXG5cdFx0XHQ8c3Bhbj5QcmljZTwvc3Bhbj5cclxuXHRcdFx0PENvbnRyb2xsZXJcclxuXHRcdFx0XHRjb250cm9sPXtjb250cm9sfVxyXG5cdFx0XHRcdG5hbWU9e25hbWV9XHJcblx0XHRcdFx0cmVuZGVyPXsoeyBmaWVsZCB9KSA9PiAoXHJcblx0XHRcdFx0XHQ8UHJpY2VcclxuXHRcdFx0XHRcdFx0YWxsb3dOZWdhdGl2ZVZhbHVlPXtmYWxzZX1cclxuXHRcdFx0XHRcdFx0ZGVjaW1hbFNjYWxlPXsyfVxyXG5cdFx0XHRcdFx0XHRpbnRsQ29uZmlnPXt7IGxvY2FsZTogJ2VuLVVTJywgY3VycmVuY3k6ICdVU0QnIH19XHJcblx0XHRcdFx0XHRcdG9uVmFsdWVDaGFuZ2U9eyhlKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0ZmllbGQub25DaGFuZ2UoTWF0aC5yb3VuZChlICogMTAwKSk7XHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpY2UoZSk7XHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17ZmllbGQudmFsdWUgLyAxMDB9XHJcblx0XHRcdFx0XHRcdHZhbHVlPXtwcmljZX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0KX1cclxuXHRcdFx0Lz5cclxuXHRcdDwvV3JhcHBlcj5cclxuXHQpO1xyXG59O1xyXG5cclxuLy8gUHJpY2UgRmllbGRcclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcblx0JHtib2R5VGV4dFN0eWxlfTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZmxvdzogY29sdW1uO1xyXG5cdGNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy5wcmltYXJ5WzNdfTtcclxuXHRtYXgtd2lkdGg6IDEwMHB4O1xyXG5cdHNwYW4ge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBQcmljZSA9IHN0eWxlZChDdXJyZW5jeUlucHV0KWBcclxuXHQke2g0VGV4dFN0eWxlfTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0cGFkZGluZzogMCAxMHB4O1xyXG5cdG1hcmdpbi1yaWdodDogMTZweDtcclxuXHRoZWlnaHQ6IDQ4cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdGJvcmRlcjogc29saWQgMnB4ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLmdyZXlbMl19O1xyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiwgdXNlTWVtbywgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG4vKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxudmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSwgcGFjaykge1xyXG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XHJcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XHJcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IGZyb20pO1xyXG59XG5cbi8qKlxuICogRXNjYXBlIHJlZ2V4IGNoYXJcbiAqXG4gKiBTZWU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE3ODg1ODU1L3VzZS1keW5hbWljLXZhcmlhYmxlLXN0cmluZy1hcy1yZWdleC1wYXR0ZXJuLWluLWphdmFzY3JpcHRcbiAqL1xudmFyIGVzY2FwZVJlZ0V4cCA9IGZ1bmN0aW9uIChzdHJpbmdUb0dvSW50b1RoZVJlZ2V4KSB7XG4gICAgcmV0dXJuIHN0cmluZ1RvR29JbnRvVGhlUmVnZXgucmVwbGFjZSgvWy1cXC9cXFxcXiQqKz8uKCl8W1xcXXt9XS9nLCAnXFxcXCQmJyk7XG59O1xuXG52YXIgYWJick1hcCA9IHsgazogMTAwMCwgbTogMTAwMDAwMCwgYjogMTAwMDAwMDAwMCB9O1xuLyoqXG4gKiBQYXJzZSBhIHZhbHVlIHdpdGggYWJicmV2aWF0aW9uIGUuZyAxayA9IDEwMDBcbiAqL1xudmFyIHBhcnNlQWJiclZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCBkZWNpbWFsU2VwYXJhdG9yKSB7XG4gICAgaWYgKGRlY2ltYWxTZXBhcmF0b3IgPT09IHZvaWQgMCkgeyBkZWNpbWFsU2VwYXJhdG9yID0gJy4nOyB9XG4gICAgdmFyIHJlZyA9IG5ldyBSZWdFeHAoXCIoXFxcXGQrKFwiICsgZXNjYXBlUmVnRXhwKGRlY2ltYWxTZXBhcmF0b3IpICsgXCJcXFxcZCopPykoW2ttYl0pJFwiLCAnaScpO1xuICAgIHZhciBtYXRjaCA9IHZhbHVlLm1hdGNoKHJlZyk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHZhciBkaWdpdHMgPSBtYXRjaFsxXSwgYWJiciA9IG1hdGNoWzNdO1xuICAgICAgICB2YXIgbXVsdGlwbGllciA9IGFiYnJNYXBbYWJici50b0xvd2VyQ2FzZSgpXTtcbiAgICAgICAgcmV0dXJuIE51bWJlcihkaWdpdHMucmVwbGFjZShkZWNpbWFsU2VwYXJhdG9yLCAnLicpKSAqIG11bHRpcGxpZXI7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBncm91cCBzZXBhcmF0b3IgZnJvbSB2YWx1ZSBlZy4gMSwwMDAgPiAxMDAwXG4gKi9cbnZhciByZW1vdmVTZXBhcmF0b3JzID0gZnVuY3Rpb24gKHZhbHVlLCBzZXBhcmF0b3IpIHtcbiAgICBpZiAoc2VwYXJhdG9yID09PSB2b2lkIDApIHsgc2VwYXJhdG9yID0gJywnOyB9XG4gICAgdmFyIHJlZyA9IG5ldyBSZWdFeHAoZXNjYXBlUmVnRXhwKHNlcGFyYXRvciksICdnJyk7XG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UocmVnLCAnJyk7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBpbnZhbGlkIGNoYXJhY3RlcnNcbiAqL1xudmFyIHJlbW92ZUludmFsaWRDaGFycyA9IGZ1bmN0aW9uICh2YWx1ZSwgdmFsaWRDaGFycykge1xuICAgIHZhciBjaGFycyA9IGVzY2FwZVJlZ0V4cCh2YWxpZENoYXJzLmpvaW4oJycpKTtcbiAgICB2YXIgcmVnID0gbmV3IFJlZ0V4cChcIlteXFxcXGRcIiArIGNoYXJzICsgXCJdXCIsICdnaScpO1xuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKHJlZywgJycpO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgcHJlZml4LCBzZXBhcmF0b3JzIGFuZCBleHRyYSBkZWNpbWFscyBmcm9tIHZhbHVlXG4gKi9cbnZhciBjbGVhblZhbHVlID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIHZhbHVlID0gX2EudmFsdWUsIF9iID0gX2EuZ3JvdXBTZXBhcmF0b3IsIGdyb3VwU2VwYXJhdG9yID0gX2IgPT09IHZvaWQgMCA/ICcsJyA6IF9iLCBfYyA9IF9hLmRlY2ltYWxTZXBhcmF0b3IsIGRlY2ltYWxTZXBhcmF0b3IgPSBfYyA9PT0gdm9pZCAwID8gJy4nIDogX2MsIF9kID0gX2EuYWxsb3dEZWNpbWFscywgYWxsb3dEZWNpbWFscyA9IF9kID09PSB2b2lkIDAgPyB0cnVlIDogX2QsIF9lID0gX2EuZGVjaW1hbHNMaW1pdCwgZGVjaW1hbHNMaW1pdCA9IF9lID09PSB2b2lkIDAgPyAyIDogX2UsIF9mID0gX2EuYWxsb3dOZWdhdGl2ZVZhbHVlLCBhbGxvd05lZ2F0aXZlVmFsdWUgPSBfZiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9mLCBfZyA9IF9hLmRpc2FibGVBYmJyZXZpYXRpb25zLCBkaXNhYmxlQWJicmV2aWF0aW9ucyA9IF9nID09PSB2b2lkIDAgPyBmYWxzZSA6IF9nLCBfaCA9IF9hLnByZWZpeCwgcHJlZml4ID0gX2ggPT09IHZvaWQgMCA/ICcnIDogX2g7XG4gICAgaWYgKHZhbHVlID09PSAnLScpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICB2YXIgYWJicmV2aWF0aW9ucyA9IGRpc2FibGVBYmJyZXZpYXRpb25zID8gW10gOiBbJ2snLCAnbScsICdiJ107XG4gICAgdmFyIHJlZyA9IG5ldyBSZWdFeHAoXCIoKF58XFxcXEQpLVxcXFxkKXwoLVwiICsgZXNjYXBlUmVnRXhwKHByZWZpeCkgKyBcIilcIik7XG4gICAgdmFyIGlzTmVnYXRpdmUgPSByZWcudGVzdCh2YWx1ZSk7XG4gICAgLy8gSXMgdGhlcmUgYSBkaWdpdCBiZWZvcmUgdGhlIHByZWZpeD8gZWcuIDEkXG4gICAgdmFyIF9qID0gUmVnRXhwKFwiKFxcXFxkKyktP1wiICsgZXNjYXBlUmVnRXhwKHByZWZpeCkpLmV4ZWModmFsdWUpIHx8IFtdLCBwcmVmaXhXaXRoVmFsdWUgPSBfalswXSwgcHJlVmFsdWUgPSBfalsxXTtcbiAgICB2YXIgd2l0aG91dFByZWZpeCA9IHByZWZpeFxuICAgICAgICA/IHByZWZpeFdpdGhWYWx1ZVxuICAgICAgICAgICAgPyB2YWx1ZS5yZXBsYWNlKHByZWZpeFdpdGhWYWx1ZSwgJycpLmNvbmNhdChwcmVWYWx1ZSlcbiAgICAgICAgICAgIDogdmFsdWUucmVwbGFjZShwcmVmaXgsICcnKVxuICAgICAgICA6IHZhbHVlO1xuICAgIHZhciB3aXRob3V0U2VwYXJhdG9ycyA9IHJlbW92ZVNlcGFyYXRvcnMod2l0aG91dFByZWZpeCwgZ3JvdXBTZXBhcmF0b3IpO1xuICAgIHZhciB3aXRob3V0SW52YWxpZENoYXJzID0gcmVtb3ZlSW52YWxpZENoYXJzKHdpdGhvdXRTZXBhcmF0b3JzLCBfX3NwcmVhZEFycmF5KFtcbiAgICAgICAgZ3JvdXBTZXBhcmF0b3IsXG4gICAgICAgIGRlY2ltYWxTZXBhcmF0b3JcbiAgICBdLCBhYmJyZXZpYXRpb25zKSk7XG4gICAgdmFyIHZhbHVlT25seSA9IHdpdGhvdXRJbnZhbGlkQ2hhcnM7XG4gICAgaWYgKCFkaXNhYmxlQWJicmV2aWF0aW9ucykge1xuICAgICAgICAvLyBkaXNhbGxvdyBsZXR0ZXIgd2l0aG91dCBudW1iZXJcbiAgICAgICAgaWYgKGFiYnJldmlhdGlvbnMuc29tZShmdW5jdGlvbiAobGV0dGVyKSB7IHJldHVybiBsZXR0ZXIgPT09IHdpdGhvdXRJbnZhbGlkQ2hhcnMudG9Mb3dlckNhc2UoKTsgfSkpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICB2YXIgcGFyc2VkID0gcGFyc2VBYmJyVmFsdWUod2l0aG91dEludmFsaWRDaGFycywgZGVjaW1hbFNlcGFyYXRvcik7XG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICAgIHZhbHVlT25seSA9IFN0cmluZyhwYXJzZWQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBpbmNsdWRlTmVnYXRpdmUgPSBpc05lZ2F0aXZlICYmIGFsbG93TmVnYXRpdmVWYWx1ZSA/ICctJyA6ICcnO1xuICAgIGlmIChkZWNpbWFsU2VwYXJhdG9yICYmIHZhbHVlT25seS5pbmNsdWRlcyhkZWNpbWFsU2VwYXJhdG9yKSkge1xuICAgICAgICB2YXIgX2sgPSB3aXRob3V0SW52YWxpZENoYXJzLnNwbGl0KGRlY2ltYWxTZXBhcmF0b3IpLCBpbnQgPSBfa1swXSwgZGVjaW1hbHMgPSBfa1sxXTtcbiAgICAgICAgdmFyIHRyaW1tZWREZWNpbWFscyA9IGRlY2ltYWxzTGltaXQgJiYgZGVjaW1hbHMgPyBkZWNpbWFscy5zbGljZSgwLCBkZWNpbWFsc0xpbWl0KSA6IGRlY2ltYWxzO1xuICAgICAgICB2YXIgaW5jbHVkZURlY2ltYWxzID0gYWxsb3dEZWNpbWFscyA/IFwiXCIgKyBkZWNpbWFsU2VwYXJhdG9yICsgdHJpbW1lZERlY2ltYWxzIDogJyc7XG4gICAgICAgIHJldHVybiBcIlwiICsgaW5jbHVkZU5lZ2F0aXZlICsgaW50ICsgaW5jbHVkZURlY2ltYWxzO1xuICAgIH1cbiAgICByZXR1cm4gXCJcIiArIGluY2x1ZGVOZWdhdGl2ZSArIHZhbHVlT25seTtcbn07XG5cbnZhciBmaXhlZERlY2ltYWxWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgZGVjaW1hbFNlcGFyYXRvciwgZml4ZWREZWNpbWFsTGVuZ3RoKSB7XG4gICAgaWYgKGZpeGVkRGVjaW1hbExlbmd0aCAmJiB2YWx1ZS5sZW5ndGggPiAxKSB7XG4gICAgICAgIGlmICh2YWx1ZS5pbmNsdWRlcyhkZWNpbWFsU2VwYXJhdG9yKSkge1xuICAgICAgICAgICAgdmFyIF9hID0gdmFsdWUuc3BsaXQoZGVjaW1hbFNlcGFyYXRvciksIGludCA9IF9hWzBdLCBkZWNpbWFscyA9IF9hWzFdO1xuICAgICAgICAgICAgaWYgKGRlY2ltYWxzLmxlbmd0aCA+IGZpeGVkRGVjaW1hbExlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiICsgaW50ICsgZGVjaW1hbFNlcGFyYXRvciArIGRlY2ltYWxzLnNsaWNlKDAsIGZpeGVkRGVjaW1hbExlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlZyA9IHZhbHVlLmxlbmd0aCA+IGZpeGVkRGVjaW1hbExlbmd0aFxuICAgICAgICAgICAgPyBuZXcgUmVnRXhwKFwiKFxcXFxkKykoXFxcXGR7XCIgKyBmaXhlZERlY2ltYWxMZW5ndGggKyBcIn0pXCIpXG4gICAgICAgICAgICA6IG5ldyBSZWdFeHAoXCIoXFxcXGQpKFxcXFxkKylcIik7XG4gICAgICAgIHZhciBtYXRjaCA9IHZhbHVlLm1hdGNoKHJlZyk7XG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgdmFyIGludCA9IG1hdGNoWzFdLCBkZWNpbWFscyA9IG1hdGNoWzJdO1xuICAgICAgICAgICAgcmV0dXJuIFwiXCIgKyBpbnQgKyBkZWNpbWFsU2VwYXJhdG9yICsgZGVjaW1hbHM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufTtcblxudmFyIGdldFN1ZmZpeCA9IGZ1bmN0aW9uICh2YWx1ZSwgX2EpIHtcbiAgICB2YXIgX2IgPSBfYS5ncm91cFNlcGFyYXRvciwgZ3JvdXBTZXBhcmF0b3IgPSBfYiA9PT0gdm9pZCAwID8gJywnIDogX2IsIF9jID0gX2EuZGVjaW1hbFNlcGFyYXRvciwgZGVjaW1hbFNlcGFyYXRvciA9IF9jID09PSB2b2lkIDAgPyAnLicgOiBfYztcbiAgICB2YXIgc3VmZml4UmVnID0gbmV3IFJlZ0V4cChcIlxcXFxkKFteXCIgKyBlc2NhcGVSZWdFeHAoZ3JvdXBTZXBhcmF0b3IpICsgZXNjYXBlUmVnRXhwKGRlY2ltYWxTZXBhcmF0b3IpICsgXCIwLTldKylcIik7XG4gICAgdmFyIHN1ZmZpeE1hdGNoID0gdmFsdWUubWF0Y2goc3VmZml4UmVnKTtcbiAgICByZXR1cm4gc3VmZml4TWF0Y2ggPyBzdWZmaXhNYXRjaFsxXSA6IHVuZGVmaW5lZDtcbn07XG5cbi8qKlxuICogRm9ybWF0IHZhbHVlIHdpdGggZGVjaW1hbCBzZXBhcmF0b3IsIGdyb3VwIHNlcGFyYXRvciBhbmQgcHJlZml4XG4gKi9cbnZhciBmb3JtYXRWYWx1ZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgdmFyIF92YWx1ZSA9IG9wdGlvbnMudmFsdWUsIGRlY2ltYWxTZXBhcmF0b3IgPSBvcHRpb25zLmRlY2ltYWxTZXBhcmF0b3IsIGludGxDb25maWcgPSBvcHRpb25zLmludGxDb25maWcsIGRlY2ltYWxTY2FsZSA9IG9wdGlvbnMuZGVjaW1hbFNjYWxlLCBfYSA9IG9wdGlvbnMucHJlZml4LCBwcmVmaXggPSBfYSA9PT0gdm9pZCAwID8gJycgOiBfYSwgX2IgPSBvcHRpb25zLnN1ZmZpeCwgc3VmZml4ID0gX2IgPT09IHZvaWQgMCA/ICcnIDogX2I7XG4gICAgaWYgKF92YWx1ZSA9PT0gJycgfHwgX3ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBpZiAoX3ZhbHVlID09PSAnLScpIHtcbiAgICAgICAgcmV0dXJuICctJztcbiAgICB9XG4gICAgdmFyIGlzTmVnYXRpdmUgPSBuZXcgUmVnRXhwKFwiXlxcXFxkPy1cIiArIChwcmVmaXggPyBlc2NhcGVSZWdFeHAocHJlZml4KSArIFwiP1wiIDogJycpICsgXCJcXFxcZFwiKS50ZXN0KF92YWx1ZSk7XG4gICAgdmFyIHZhbHVlID0gZGVjaW1hbFNlcGFyYXRvciAhPT0gJy4nXG4gICAgICAgID8gcmVwbGFjZURlY2ltYWxTZXBhcmF0b3IoX3ZhbHVlLCBkZWNpbWFsU2VwYXJhdG9yLCBpc05lZ2F0aXZlKVxuICAgICAgICA6IF92YWx1ZTtcbiAgICB2YXIgbnVtYmVyRm9ybWF0dGVyID0gaW50bENvbmZpZ1xuICAgICAgICA/IG5ldyBJbnRsLk51bWJlckZvcm1hdChpbnRsQ29uZmlnLmxvY2FsZSwgaW50bENvbmZpZy5jdXJyZW5jeVxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgc3R5bGU6ICdjdXJyZW5jeScsXG4gICAgICAgICAgICAgICAgY3VycmVuY3k6IGludGxDb25maWcuY3VycmVuY3ksXG4gICAgICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBkZWNpbWFsU2NhbGUgfHwgMCxcbiAgICAgICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIwLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiB1bmRlZmluZWQpXG4gICAgICAgIDogbmV3IEludGwuTnVtYmVyRm9ybWF0KHVuZGVmaW5lZCwge1xuICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBkZWNpbWFsU2NhbGUgfHwgMCxcbiAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMjAsXG4gICAgICAgIH0pO1xuICAgIHZhciBwYXJ0cyA9IG51bWJlckZvcm1hdHRlci5mb3JtYXRUb1BhcnRzKE51bWJlcih2YWx1ZSkpO1xuICAgIHZhciBmb3JtYXR0ZWQgPSByZXBsYWNlUGFydHMocGFydHMsIG9wdGlvbnMpO1xuICAgIC8vIERvZXMgaW50bCBmb3JtYXR0aW5nIGFkZCBhIHN1ZmZpeD9cbiAgICB2YXIgaW50bFN1ZmZpeCA9IGdldFN1ZmZpeChmb3JtYXR0ZWQsIF9fYXNzaWduKHt9LCBvcHRpb25zKSk7XG4gICAgLy8gSW5jbHVkZSBkZWNpbWFsIHNlcGFyYXRvciBpZiB1c2VyIGlucHV0IGVuZHMgd2l0aCBkZWNpbWFsIHNlcGFyYXRvclxuICAgIHZhciBpbmNsdWRlRGVjaW1hbFNlcGFyYXRvciA9IF92YWx1ZS5zbGljZSgtMSkgPT09IGRlY2ltYWxTZXBhcmF0b3IgPyBkZWNpbWFsU2VwYXJhdG9yIDogJyc7XG4gICAgdmFyIF9jID0gdmFsdWUubWF0Y2goUmVnRXhwKCdcXFxcZCtcXFxcLihcXFxcZCspJykpIHx8IFtdLCBkZWNpbWFscyA9IF9jWzFdO1xuICAgIC8vIEtlZXAgb3JpZ2luYWwgZGVjaW1hbCBwYWRkaW5nIGlmIG5vIGRlY2ltYWxTY2FsZVxuICAgIGlmIChkZWNpbWFsU2NhbGUgPT09IHVuZGVmaW5lZCAmJiBkZWNpbWFscyAmJiBkZWNpbWFsU2VwYXJhdG9yKSB7XG4gICAgICAgIGlmIChmb3JtYXR0ZWQuaW5jbHVkZXMoZGVjaW1hbFNlcGFyYXRvcikpIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZCA9IGZvcm1hdHRlZC5yZXBsYWNlKFJlZ0V4cChcIihcXFxcZCspKFwiICsgZXNjYXBlUmVnRXhwKGRlY2ltYWxTZXBhcmF0b3IpICsgXCIpKFxcXFxkKylcIiwgJ2cnKSwgXCIkMSQyXCIgKyBkZWNpbWFscyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaW50bFN1ZmZpeCAmJiAhc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkID0gZm9ybWF0dGVkLnJlcGxhY2UoaW50bFN1ZmZpeCwgXCJcIiArIGRlY2ltYWxTZXBhcmF0b3IgKyBkZWNpbWFscyArIGludGxTdWZmaXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkID0gXCJcIiArIGZvcm1hdHRlZCArIGRlY2ltYWxTZXBhcmF0b3IgKyBkZWNpbWFscztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoc3VmZml4ICYmIGluY2x1ZGVEZWNpbWFsU2VwYXJhdG9yKSB7XG4gICAgICAgIHJldHVybiBcIlwiICsgZm9ybWF0dGVkICsgaW5jbHVkZURlY2ltYWxTZXBhcmF0b3IgKyBzdWZmaXg7XG4gICAgfVxuICAgIGlmIChpbnRsU3VmZml4ICYmIGluY2x1ZGVEZWNpbWFsU2VwYXJhdG9yKSB7XG4gICAgICAgIHJldHVybiBmb3JtYXR0ZWQucmVwbGFjZShpbnRsU3VmZml4LCBcIlwiICsgaW5jbHVkZURlY2ltYWxTZXBhcmF0b3IgKyBpbnRsU3VmZml4KTtcbiAgICB9XG4gICAgaWYgKGludGxTdWZmaXggJiYgc3VmZml4KSB7XG4gICAgICAgIHJldHVybiBmb3JtYXR0ZWQucmVwbGFjZShpbnRsU3VmZml4LCBcIlwiICsgaW5jbHVkZURlY2ltYWxTZXBhcmF0b3IgKyBzdWZmaXgpO1xuICAgIH1cbiAgICByZXR1cm4gW2Zvcm1hdHRlZCwgaW5jbHVkZURlY2ltYWxTZXBhcmF0b3IsIHN1ZmZpeF0uam9pbignJyk7XG59O1xuLyoqXG4gKiBCZWZvcmUgY29udmVydGluZyB0byBOdW1iZXIsIGRlY2ltYWwgc2VwYXJhdG9yIGhhcyB0byBiZSAuXG4gKi9cbnZhciByZXBsYWNlRGVjaW1hbFNlcGFyYXRvciA9IGZ1bmN0aW9uICh2YWx1ZSwgZGVjaW1hbFNlcGFyYXRvciwgaXNOZWdhdGl2ZSkge1xuICAgIHZhciBuZXdWYWx1ZSA9IHZhbHVlO1xuICAgIGlmIChkZWNpbWFsU2VwYXJhdG9yICYmIGRlY2ltYWxTZXBhcmF0b3IgIT09ICcuJykge1xuICAgICAgICBuZXdWYWx1ZSA9IG5ld1ZhbHVlLnJlcGxhY2UoUmVnRXhwKGVzY2FwZVJlZ0V4cChkZWNpbWFsU2VwYXJhdG9yKSwgJ2cnKSwgJy4nKTtcbiAgICAgICAgaWYgKGlzTmVnYXRpdmUgJiYgZGVjaW1hbFNlcGFyYXRvciA9PT0gJy0nKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IFwiLVwiICsgbmV3VmFsdWUuc2xpY2UoMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld1ZhbHVlO1xufTtcbnZhciByZXBsYWNlUGFydHMgPSBmdW5jdGlvbiAocGFydHMsIF9hKSB7XG4gICAgdmFyIHByZWZpeCA9IF9hLnByZWZpeCwgZ3JvdXBTZXBhcmF0b3IgPSBfYS5ncm91cFNlcGFyYXRvciwgZGVjaW1hbFNlcGFyYXRvciA9IF9hLmRlY2ltYWxTZXBhcmF0b3IsIGRlY2ltYWxTY2FsZSA9IF9hLmRlY2ltYWxTY2FsZSwgX2IgPSBfYS5kaXNhYmxlR3JvdXBTZXBhcmF0b3JzLCBkaXNhYmxlR3JvdXBTZXBhcmF0b3JzID0gX2IgPT09IHZvaWQgMCA/IGZhbHNlIDogX2I7XG4gICAgcmV0dXJuIHBhcnRzXG4gICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIF9hLCBpKSB7XG4gICAgICAgIHZhciB0eXBlID0gX2EudHlwZSwgdmFsdWUgPSBfYS52YWx1ZTtcbiAgICAgICAgaWYgKGkgPT09IDAgJiYgcHJlZml4KSB7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ21pbnVzU2lnbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW3ZhbHVlLCBwcmVmaXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdjdXJyZW5jeScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX19zcHJlYWRBcnJheShfX3NwcmVhZEFycmF5KFtdLCBwcmV2KSwgW3ByZWZpeF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFtwcmVmaXgsIHZhbHVlXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PT0gJ2N1cnJlbmN5Jykge1xuICAgICAgICAgICAgcmV0dXJuIHByZWZpeCA/IHByZXYgOiBfX3NwcmVhZEFycmF5KF9fc3ByZWFkQXJyYXkoW10sIHByZXYpLCBbdmFsdWVdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PT0gJ2dyb3VwJykge1xuICAgICAgICAgICAgcmV0dXJuICFkaXNhYmxlR3JvdXBTZXBhcmF0b3JzXG4gICAgICAgICAgICAgICAgPyBfX3NwcmVhZEFycmF5KF9fc3ByZWFkQXJyYXkoW10sIHByZXYpLCBbZ3JvdXBTZXBhcmF0b3IgIT09IHVuZGVmaW5lZCA/IGdyb3VwU2VwYXJhdG9yIDogdmFsdWVdKSA6IHByZXY7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT09ICdkZWNpbWFsJykge1xuICAgICAgICAgICAgaWYgKGRlY2ltYWxTY2FsZSAhPT0gdW5kZWZpbmVkICYmIGRlY2ltYWxTY2FsZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIF9fc3ByZWFkQXJyYXkoX19zcHJlYWRBcnJheShbXSwgcHJldiksIFtkZWNpbWFsU2VwYXJhdG9yICE9PSB1bmRlZmluZWQgPyBkZWNpbWFsU2VwYXJhdG9yIDogdmFsdWVdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PT0gJ2ZyYWN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIF9fc3ByZWFkQXJyYXkoX19zcHJlYWRBcnJheShbXSwgcHJldiksIFtkZWNpbWFsU2NhbGUgIT09IHVuZGVmaW5lZCA/IHZhbHVlLnNsaWNlKDAsIGRlY2ltYWxTY2FsZSkgOiB2YWx1ZV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfX3NwcmVhZEFycmF5KF9fc3ByZWFkQXJyYXkoW10sIHByZXYpLCBbdmFsdWVdKTtcbiAgICB9LCBbJyddKVxuICAgICAgICAuam9pbignJyk7XG59O1xuXG52YXIgZGVmYXVsdENvbmZpZyA9IHtcbiAgICBjdXJyZW5jeVN5bWJvbDogJycsXG4gICAgZ3JvdXBTZXBhcmF0b3I6ICcnLFxuICAgIGRlY2ltYWxTZXBhcmF0b3I6ICcnLFxuICAgIHByZWZpeDogJycsXG4gICAgc3VmZml4OiAnJyxcbn07XG4vKipcbiAqIEdldCBsb2NhbGUgY29uZmlnIGZyb20gaW5wdXQgb3IgZGVmYXVsdFxuICovXG52YXIgZ2V0TG9jYWxlQ29uZmlnID0gZnVuY3Rpb24gKGludGxDb25maWcpIHtcbiAgICB2YXIgX2EgPSBpbnRsQ29uZmlnIHx8IHt9LCBsb2NhbGUgPSBfYS5sb2NhbGUsIGN1cnJlbmN5ID0gX2EuY3VycmVuY3k7XG4gICAgdmFyIG51bWJlckZvcm1hdHRlciA9IGxvY2FsZVxuICAgICAgICA/IG5ldyBJbnRsLk51bWJlckZvcm1hdChsb2NhbGUsIGN1cnJlbmN5ID8geyBjdXJyZW5jeTogY3VycmVuY3ksIHN0eWxlOiAnY3VycmVuY3knIH0gOiB1bmRlZmluZWQpXG4gICAgICAgIDogbmV3IEludGwuTnVtYmVyRm9ybWF0KCk7XG4gICAgcmV0dXJuIG51bWJlckZvcm1hdHRlci5mb3JtYXRUb1BhcnRzKDEwMDAuMSkucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBjdXJyLCBpKSB7XG4gICAgICAgIGlmIChjdXJyLnR5cGUgPT09ICdjdXJyZW5jeScpIHtcbiAgICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBwcmV2KSwgeyBjdXJyZW5jeVN5bWJvbDogY3Vyci52YWx1ZSwgcHJlZml4OiBjdXJyLnZhbHVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBwcmV2KSwgeyBjdXJyZW5jeVN5bWJvbDogY3Vyci52YWx1ZSwgc3VmZml4OiBjdXJyLnZhbHVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjdXJyLnR5cGUgPT09ICdncm91cCcpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcHJldiksIHsgZ3JvdXBTZXBhcmF0b3I6IGN1cnIudmFsdWUgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1cnIudHlwZSA9PT0gJ2RlY2ltYWwnKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIHByZXYpLCB7IGRlY2ltYWxTZXBhcmF0b3I6IGN1cnIudmFsdWUgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgfSwgZGVmYXVsdENvbmZpZyk7XG59O1xuXG52YXIgaXNOdW1iZXIgPSBmdW5jdGlvbiAoaW5wdXQpIHsgcmV0dXJuIFJlZ0V4cCgvXFxkLywgJ2dpJykudGVzdChpbnB1dCk7IH07XG5cbnZhciBwYWRUcmltVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUsIGRlY2ltYWxTZXBhcmF0b3IsIGRlY2ltYWxTY2FsZSkge1xuICAgIGlmIChkZWNpbWFsU2VwYXJhdG9yID09PSB2b2lkIDApIHsgZGVjaW1hbFNlcGFyYXRvciA9ICcuJzsgfVxuICAgIGlmIChkZWNpbWFsU2NhbGUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGlmICghdmFsdWUubWF0Y2goL1xcZC9nKSkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHZhciBfYSA9IHZhbHVlLnNwbGl0KGRlY2ltYWxTZXBhcmF0b3IpLCBpbnQgPSBfYVswXSwgZGVjaW1hbHMgPSBfYVsxXTtcbiAgICBpZiAoZGVjaW1hbFNjYWxlID09PSAwKSB7XG4gICAgICAgIHJldHVybiBpbnQ7XG4gICAgfVxuICAgIHZhciBuZXdWYWx1ZSA9IGRlY2ltYWxzIHx8ICcnO1xuICAgIGlmIChuZXdWYWx1ZS5sZW5ndGggPCBkZWNpbWFsU2NhbGUpIHtcbiAgICAgICAgd2hpbGUgKG5ld1ZhbHVlLmxlbmd0aCA8IGRlY2ltYWxTY2FsZSkge1xuICAgICAgICAgICAgbmV3VmFsdWUgKz0gJzAnO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBuZXdWYWx1ZSA9IG5ld1ZhbHVlLnNsaWNlKDAsIGRlY2ltYWxTY2FsZSk7XG4gICAgfVxuICAgIHJldHVybiBcIlwiICsgaW50ICsgZGVjaW1hbFNlcGFyYXRvciArIG5ld1ZhbHVlO1xufTtcblxudmFyIEN1cnJlbmN5SW5wdXQgPSBmb3J3YXJkUmVmKGZ1bmN0aW9uIChfYSwgcmVmKSB7XG4gICAgdmFyIF9iID0gX2EuYWxsb3dEZWNpbWFscywgYWxsb3dEZWNpbWFscyA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gX2EuYWxsb3dOZWdhdGl2ZVZhbHVlLCBhbGxvd05lZ2F0aXZlVmFsdWUgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBpZCA9IF9hLmlkLCBuYW1lID0gX2EubmFtZSwgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLCBjdXN0b21JbnB1dCA9IF9hLmN1c3RvbUlucHV0LCBkZWNpbWFsc0xpbWl0ID0gX2EuZGVjaW1hbHNMaW1pdCwgZGVmYXVsdFZhbHVlID0gX2EuZGVmYXVsdFZhbHVlLCBfZCA9IF9hLmRpc2FibGVkLCBkaXNhYmxlZCA9IF9kID09PSB2b2lkIDAgPyBmYWxzZSA6IF9kLCB1c2VyTWF4TGVuZ3RoID0gX2EubWF4TGVuZ3RoLCB1c2VyVmFsdWUgPSBfYS52YWx1ZSwgb25WYWx1ZUNoYW5nZSA9IF9hLm9uVmFsdWVDaGFuZ2UsIGZpeGVkRGVjaW1hbExlbmd0aCA9IF9hLmZpeGVkRGVjaW1hbExlbmd0aCwgcGxhY2Vob2xkZXIgPSBfYS5wbGFjZWhvbGRlciwgZGVjaW1hbFNjYWxlID0gX2EuZGVjaW1hbFNjYWxlLCBwcmVmaXggPSBfYS5wcmVmaXgsIHN1ZmZpeCA9IF9hLnN1ZmZpeCwgaW50bENvbmZpZyA9IF9hLmludGxDb25maWcsIHN0ZXAgPSBfYS5zdGVwLCBtaW4gPSBfYS5taW4sIG1heCA9IF9hLm1heCwgX2UgPSBfYS5kaXNhYmxlR3JvdXBTZXBhcmF0b3JzLCBkaXNhYmxlR3JvdXBTZXBhcmF0b3JzID0gX2UgPT09IHZvaWQgMCA/IGZhbHNlIDogX2UsIF9mID0gX2EuZGlzYWJsZUFiYnJldmlhdGlvbnMsIGRpc2FibGVBYmJyZXZpYXRpb25zID0gX2YgPT09IHZvaWQgMCA/IGZhbHNlIDogX2YsIF9kZWNpbWFsU2VwYXJhdG9yID0gX2EuZGVjaW1hbFNlcGFyYXRvciwgX2dyb3VwU2VwYXJhdG9yID0gX2EuZ3JvdXBTZXBhcmF0b3IsIG9uQ2hhbmdlID0gX2Eub25DaGFuZ2UsIG9uRm9jdXMgPSBfYS5vbkZvY3VzLCBvbkJsdXIgPSBfYS5vbkJsdXIsIG9uS2V5RG93biA9IF9hLm9uS2V5RG93biwgb25LZXlVcCA9IF9hLm9uS2V5VXAsIHByb3BzID0gX19yZXN0KF9hLCBbXCJhbGxvd0RlY2ltYWxzXCIsIFwiYWxsb3dOZWdhdGl2ZVZhbHVlXCIsIFwiaWRcIiwgXCJuYW1lXCIsIFwiY2xhc3NOYW1lXCIsIFwiY3VzdG9tSW5wdXRcIiwgXCJkZWNpbWFsc0xpbWl0XCIsIFwiZGVmYXVsdFZhbHVlXCIsIFwiZGlzYWJsZWRcIiwgXCJtYXhMZW5ndGhcIiwgXCJ2YWx1ZVwiLCBcIm9uVmFsdWVDaGFuZ2VcIiwgXCJmaXhlZERlY2ltYWxMZW5ndGhcIiwgXCJwbGFjZWhvbGRlclwiLCBcImRlY2ltYWxTY2FsZVwiLCBcInByZWZpeFwiLCBcInN1ZmZpeFwiLCBcImludGxDb25maWdcIiwgXCJzdGVwXCIsIFwibWluXCIsIFwibWF4XCIsIFwiZGlzYWJsZUdyb3VwU2VwYXJhdG9yc1wiLCBcImRpc2FibGVBYmJyZXZpYXRpb25zXCIsIFwiZGVjaW1hbFNlcGFyYXRvclwiLCBcImdyb3VwU2VwYXJhdG9yXCIsIFwib25DaGFuZ2VcIiwgXCJvbkZvY3VzXCIsIFwib25CbHVyXCIsIFwib25LZXlEb3duXCIsIFwib25LZXlVcFwiXSk7XG4gICAgaWYgKF9kZWNpbWFsU2VwYXJhdG9yICYmIGlzTnVtYmVyKF9kZWNpbWFsU2VwYXJhdG9yKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RlY2ltYWxTZXBhcmF0b3IgY2Fubm90IGJlIGEgbnVtYmVyJyk7XG4gICAgfVxuICAgIGlmIChfZ3JvdXBTZXBhcmF0b3IgJiYgaXNOdW1iZXIoX2dyb3VwU2VwYXJhdG9yKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dyb3VwU2VwYXJhdG9yIGNhbm5vdCBiZSBhIG51bWJlcicpO1xuICAgIH1cbiAgICB2YXIgbG9jYWxlQ29uZmlnID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRMb2NhbGVDb25maWcoaW50bENvbmZpZyk7IH0sIFtpbnRsQ29uZmlnXSk7XG4gICAgdmFyIGRlY2ltYWxTZXBhcmF0b3IgPSBfZGVjaW1hbFNlcGFyYXRvciB8fCBsb2NhbGVDb25maWcuZGVjaW1hbFNlcGFyYXRvciB8fCAnJztcbiAgICB2YXIgZ3JvdXBTZXBhcmF0b3IgPSBfZ3JvdXBTZXBhcmF0b3IgfHwgbG9jYWxlQ29uZmlnLmdyb3VwU2VwYXJhdG9yIHx8ICcnO1xuICAgIGlmIChkZWNpbWFsU2VwYXJhdG9yICYmXG4gICAgICAgIGdyb3VwU2VwYXJhdG9yICYmXG4gICAgICAgIGRlY2ltYWxTZXBhcmF0b3IgPT09IGdyb3VwU2VwYXJhdG9yICYmXG4gICAgICAgIGRpc2FibGVHcm91cFNlcGFyYXRvcnMgPT09IGZhbHNlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZGVjaW1hbFNlcGFyYXRvciBjYW5ub3QgYmUgdGhlIHNhbWUgYXMgZ3JvdXBTZXBhcmF0b3InKTtcbiAgICB9XG4gICAgdmFyIGZvcm1hdFZhbHVlT3B0aW9ucyA9IHtcbiAgICAgICAgZGVjaW1hbFNlcGFyYXRvcjogZGVjaW1hbFNlcGFyYXRvcixcbiAgICAgICAgZ3JvdXBTZXBhcmF0b3I6IGdyb3VwU2VwYXJhdG9yLFxuICAgICAgICBkaXNhYmxlR3JvdXBTZXBhcmF0b3JzOiBkaXNhYmxlR3JvdXBTZXBhcmF0b3JzLFxuICAgICAgICBpbnRsQ29uZmlnOiBpbnRsQ29uZmlnLFxuICAgICAgICBwcmVmaXg6IHByZWZpeCB8fCBsb2NhbGVDb25maWcucHJlZml4LFxuICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICB9O1xuICAgIHZhciBjbGVhblZhbHVlT3B0aW9ucyA9IHtcbiAgICAgICAgZGVjaW1hbFNlcGFyYXRvcjogZGVjaW1hbFNlcGFyYXRvcixcbiAgICAgICAgZ3JvdXBTZXBhcmF0b3I6IGdyb3VwU2VwYXJhdG9yLFxuICAgICAgICBhbGxvd0RlY2ltYWxzOiBhbGxvd0RlY2ltYWxzLFxuICAgICAgICBkZWNpbWFsc0xpbWl0OiBkZWNpbWFsc0xpbWl0IHx8IGZpeGVkRGVjaW1hbExlbmd0aCB8fCAyLFxuICAgICAgICBhbGxvd05lZ2F0aXZlVmFsdWU6IGFsbG93TmVnYXRpdmVWYWx1ZSxcbiAgICAgICAgZGlzYWJsZUFiYnJldmlhdGlvbnM6IGRpc2FibGVBYmJyZXZpYXRpb25zLFxuICAgICAgICBwcmVmaXg6IHByZWZpeCB8fCBsb2NhbGVDb25maWcucHJlZml4LFxuICAgIH07XG4gICAgdmFyIGZvcm1hdHRlZFN0YXRlVmFsdWUgPSBkZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCAmJiBkZWZhdWx0VmFsdWUgIT09IG51bGxcbiAgICAgICAgPyBmb3JtYXRWYWx1ZShfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZm9ybWF0VmFsdWVPcHRpb25zKSwgeyBkZWNpbWFsU2NhbGU6IGRlY2ltYWxTY2FsZSwgdmFsdWU6IFN0cmluZyhkZWZhdWx0VmFsdWUpIH0pKVxuICAgICAgICA6IHVzZXJWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIHVzZXJWYWx1ZSAhPT0gbnVsbFxuICAgICAgICAgICAgPyBmb3JtYXRWYWx1ZShfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZm9ybWF0VmFsdWVPcHRpb25zKSwgeyBkZWNpbWFsU2NhbGU6IGRlY2ltYWxTY2FsZSwgdmFsdWU6IFN0cmluZyh1c2VyVmFsdWUpIH0pKVxuICAgICAgICAgICAgOiAnJztcbiAgICB2YXIgX2cgPSB1c2VTdGF0ZShmb3JtYXR0ZWRTdGF0ZVZhbHVlKSwgc3RhdGVWYWx1ZSA9IF9nWzBdLCBzZXRTdGF0ZVZhbHVlID0gX2dbMV07XG4gICAgdmFyIF9oID0gdXNlU3RhdGUoZmFsc2UpLCBkaXJ0eSA9IF9oWzBdLCBzZXREaXJ0eSA9IF9oWzFdO1xuICAgIHZhciBfaiA9IHVzZVN0YXRlKDApLCBjdXJzb3IgPSBfalswXSwgc2V0Q3Vyc29yID0gX2pbMV07XG4gICAgdmFyIGlucHV0UmVmID0gcmVmIHx8IHVzZVJlZihudWxsKTtcbiAgICAvKipcbiAgICAgKiBQcm9jZXNzIGNoYW5nZSBpbiB2YWx1ZVxuICAgICAqL1xuICAgIHZhciBwcm9jZXNzQ2hhbmdlID0gZnVuY3Rpb24gKHZhbHVlLCBzZWxlY3Rpb25TdGFydCkge1xuICAgICAgICBzZXREaXJ0eSh0cnVlKTtcbiAgICAgICAgdmFyIHN0cmluZ1ZhbHVlID0gY2xlYW5WYWx1ZShfX2Fzc2lnbih7IHZhbHVlOiB2YWx1ZSB9LCBjbGVhblZhbHVlT3B0aW9ucykpO1xuICAgICAgICBpZiAodXNlck1heExlbmd0aCAmJiBzdHJpbmdWYWx1ZS5yZXBsYWNlKC8tL2csICcnKS5sZW5ndGggPiB1c2VyTWF4TGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0cmluZ1ZhbHVlID09PSAnJyB8fCBzdHJpbmdWYWx1ZSA9PT0gJy0nIHx8IHN0cmluZ1ZhbHVlID09PSBkZWNpbWFsU2VwYXJhdG9yKSB7XG4gICAgICAgICAgICBvblZhbHVlQ2hhbmdlICYmIG9uVmFsdWVDaGFuZ2UodW5kZWZpbmVkLCBuYW1lLCB7IGZsb2F0OiBudWxsLCBmb3JtYXR0ZWQ6ICcnLCB2YWx1ZTogJycgfSk7XG4gICAgICAgICAgICBzZXRTdGF0ZVZhbHVlKHN0cmluZ1ZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbnVtYmVyVmFsdWUgPSBwYXJzZUZsb2F0KHN0cmluZ1ZhbHVlLnJlcGxhY2UoZGVjaW1hbFNlcGFyYXRvciwgJy4nKSk7XG4gICAgICAgIHZhciBmb3JtYXR0ZWRWYWx1ZSA9IGZvcm1hdFZhbHVlKF9fYXNzaWduKHsgdmFsdWU6IHN0cmluZ1ZhbHVlIH0sIGZvcm1hdFZhbHVlT3B0aW9ucykpO1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICBpZiAoc2VsZWN0aW9uU3RhcnQgIT09IHVuZGVmaW5lZCAmJiBzZWxlY3Rpb25TdGFydCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gUHJldmVudCBjdXJzb3IganVtcGluZ1xuICAgICAgICAgICAgdmFyIG5ld0N1cnNvciA9IHNlbGVjdGlvblN0YXJ0ICsgKGZvcm1hdHRlZFZhbHVlLmxlbmd0aCAtIHZhbHVlLmxlbmd0aCkgfHwgMTtcbiAgICAgICAgICAgIHNldEN1cnNvcihuZXdDdXJzb3IpO1xuICAgICAgICB9XG4gICAgICAgIHNldFN0YXRlVmFsdWUoZm9ybWF0dGVkVmFsdWUpO1xuICAgICAgICBpZiAob25WYWx1ZUNoYW5nZSkge1xuICAgICAgICAgICAgdmFyIHZhbHVlcyA9IHtcbiAgICAgICAgICAgICAgICBmbG9hdDogbnVtYmVyVmFsdWUsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkOiBmb3JtYXR0ZWRWYWx1ZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogc3RyaW5nVmFsdWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgb25WYWx1ZUNoYW5nZShzdHJpbmdWYWx1ZSwgbmFtZSwgdmFsdWVzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlIGNoYW5nZSBldmVudFxuICAgICAqL1xuICAgIHZhciBoYW5kbGVPbkNoYW5nZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgX2EgPSBldmVudC50YXJnZXQsIHZhbHVlID0gX2EudmFsdWUsIHNlbGVjdGlvblN0YXJ0ID0gX2Euc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgIHByb2Nlc3NDaGFuZ2UodmFsdWUsIHNlbGVjdGlvblN0YXJ0KTtcbiAgICAgICAgb25DaGFuZ2UgJiYgb25DaGFuZ2UoZXZlbnQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlIGZvY3VzIGV2ZW50XG4gICAgICovXG4gICAgdmFyIGhhbmRsZU9uRm9jdXMgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgb25Gb2N1cyAmJiBvbkZvY3VzKGV2ZW50KTtcbiAgICAgICAgcmV0dXJuIHN0YXRlVmFsdWUgPyBzdGF0ZVZhbHVlLmxlbmd0aCA6IDA7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGUgYmx1ciBldmVudFxuICAgICAqXG4gICAgICogRm9ybWF0IHZhbHVlIGJ5IHBhZGRpbmcvdHJpbW1pbmcgZGVjaW1hbHMgaWYgcmVxdWlyZWQgYnlcbiAgICAgKi9cbiAgICB2YXIgaGFuZGxlT25CbHVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgdmFyIHZhbHVlT25seSA9IGNsZWFuVmFsdWUoX19hc3NpZ24oeyB2YWx1ZTogdmFsdWUgfSwgY2xlYW5WYWx1ZU9wdGlvbnMpKTtcbiAgICAgICAgaWYgKHZhbHVlT25seSA9PT0gJy0nIHx8ICF2YWx1ZU9ubHkpIHtcbiAgICAgICAgICAgIHNldFN0YXRlVmFsdWUoJycpO1xuICAgICAgICAgICAgb25CbHVyICYmIG9uQmx1cihldmVudCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGZpeGVkRGVjaW1hbHMgPSBmaXhlZERlY2ltYWxWYWx1ZSh2YWx1ZU9ubHksIGRlY2ltYWxTZXBhcmF0b3IsIGZpeGVkRGVjaW1hbExlbmd0aCk7XG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IHBhZFRyaW1WYWx1ZShmaXhlZERlY2ltYWxzLCBkZWNpbWFsU2VwYXJhdG9yLCBkZWNpbWFsU2NhbGUgIT09IHVuZGVmaW5lZCA/IGRlY2ltYWxTY2FsZSA6IGZpeGVkRGVjaW1hbExlbmd0aCk7XG4gICAgICAgIHZhciBudW1iZXJWYWx1ZSA9IHBhcnNlRmxvYXQobmV3VmFsdWUucmVwbGFjZShkZWNpbWFsU2VwYXJhdG9yLCAnLicpKTtcbiAgICAgICAgdmFyIGZvcm1hdHRlZFZhbHVlID0gZm9ybWF0VmFsdWUoX19hc3NpZ24oX19hc3NpZ24oe30sIGZvcm1hdFZhbHVlT3B0aW9ucyksIHsgdmFsdWU6IG5ld1ZhbHVlIH0pKTtcbiAgICAgICAgaWYgKG9uVmFsdWVDaGFuZ2UpIHtcbiAgICAgICAgICAgIG9uVmFsdWVDaGFuZ2UobmV3VmFsdWUsIG5hbWUsIHtcbiAgICAgICAgICAgICAgICBmbG9hdDogbnVtYmVyVmFsdWUsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkOiBmb3JtYXR0ZWRWYWx1ZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogbmV3VmFsdWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBzZXRTdGF0ZVZhbHVlKGZvcm1hdHRlZFZhbHVlKTtcbiAgICAgICAgb25CbHVyICYmIG9uQmx1cihldmVudCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGUga2V5IGRvd24gZXZlbnRcbiAgICAgKlxuICAgICAqIEluY3JlYXNlIG9yIGRlY3JlYXNlIHZhbHVlIGJ5IHN0ZXBcbiAgICAgKi9cbiAgICB2YXIgaGFuZGxlT25LZXlEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBrZXkgPSBldmVudC5rZXk7XG4gICAgICAgIGlmIChzdGVwICYmIChrZXkgPT09ICdBcnJvd1VwJyB8fCBrZXkgPT09ICdBcnJvd0Rvd24nKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNldEN1cnNvcihzdGF0ZVZhbHVlLmxlbmd0aCk7XG4gICAgICAgICAgICB2YXIgY3VycmVudFZhbHVlID0gcGFyc2VGbG9hdCh1c2VyVmFsdWUgIT09IHVuZGVmaW5lZCAmJiB1c2VyVmFsdWUgIT09IG51bGxcbiAgICAgICAgICAgICAgICA/IFN0cmluZyh1c2VyVmFsdWUpLnJlcGxhY2UoZGVjaW1hbFNlcGFyYXRvciwgJy4nKVxuICAgICAgICAgICAgICAgIDogY2xlYW5WYWx1ZShfX2Fzc2lnbih7IHZhbHVlOiBzdGF0ZVZhbHVlIH0sIGNsZWFuVmFsdWVPcHRpb25zKSkpIHx8IDA7XG4gICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSBrZXkgPT09ICdBcnJvd1VwJyA/IGN1cnJlbnRWYWx1ZSArIHN0ZXAgOiBjdXJyZW50VmFsdWUgLSBzdGVwO1xuICAgICAgICAgICAgaWYgKG1pbiAhPT0gdW5kZWZpbmVkICYmIG5ld1ZhbHVlIDwgbWluKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1heCAhPT0gdW5kZWZpbmVkICYmIG5ld1ZhbHVlID4gbWF4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGZpeGVkTGVuZ3RoID0gU3RyaW5nKHN0ZXApLmluY2x1ZGVzKCcuJylcbiAgICAgICAgICAgICAgICA/IE51bWJlcihTdHJpbmcoc3RlcCkuc3BsaXQoJy4nKVsxXS5sZW5ndGgpXG4gICAgICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICBwcm9jZXNzQ2hhbmdlKFN0cmluZyhmaXhlZExlbmd0aCA/IG5ld1ZhbHVlLnRvRml4ZWQoZml4ZWRMZW5ndGgpIDogbmV3VmFsdWUpLnJlcGxhY2UoJy4nLCBkZWNpbWFsU2VwYXJhdG9yKSk7XG4gICAgICAgIH1cbiAgICAgICAgb25LZXlEb3duICYmIG9uS2V5RG93bihldmVudCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGUga2V5IHVwIGV2ZW50XG4gICAgICpcbiAgICAgKiBNb3ZlIGN1cnNvciBpZiB0aGVyZSBpcyBhIHN1ZmZpeCB0byBwcmV2ZW50IHVzZXIgdHlwaW5nIHBhc3Qgc3VmZml4XG4gICAgICovXG4gICAgdmFyIGhhbmRsZU9uS2V5VXAgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIGtleSA9IGV2ZW50LmtleSwgc2VsZWN0aW9uU3RhcnQgPSBldmVudC5jdXJyZW50VGFyZ2V0LnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICBpZiAoa2V5ICE9PSAnQXJyb3dVcCcgJiYga2V5ICE9PSAnQXJyb3dEb3duJyAmJiBzdGF0ZVZhbHVlICE9PSAnLScpIHtcbiAgICAgICAgICAgIHZhciBzdWZmaXhfMSA9IGdldFN1ZmZpeChzdGF0ZVZhbHVlLCB7IGdyb3VwU2VwYXJhdG9yOiBncm91cFNlcGFyYXRvciwgZGVjaW1hbFNlcGFyYXRvcjogZGVjaW1hbFNlcGFyYXRvciB9KTtcbiAgICAgICAgICAgIGlmIChzdWZmaXhfMSAmJiBzZWxlY3Rpb25TdGFydCAmJiBzZWxlY3Rpb25TdGFydCA+IHN0YXRlVmFsdWUubGVuZ3RoIC0gc3VmZml4XzEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0UmVmICYmIHR5cGVvZiBpbnB1dFJlZiA9PT0gJ29iamVjdCcgJiYgaW5wdXRSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3Q3Vyc29yID0gc3RhdGVWYWx1ZS5sZW5ndGggLSBzdWZmaXhfMS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0UmVmLmN1cnJlbnQuc2V0U2VsZWN0aW9uUmFuZ2UobmV3Q3Vyc29yLCBuZXdDdXJzb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBvbktleVVwICYmIG9uS2V5VXAoZXZlbnQpO1xuICAgIH07XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBwcmV2ZW50IGN1cnNvciBqdW1waW5nIGlmIGVkaXRpbmcgdmFsdWVcbiAgICAgICAgaWYgKGRpcnR5ICYmXG4gICAgICAgICAgICBzdGF0ZVZhbHVlICE9PSAnLScgJiZcbiAgICAgICAgICAgIGlucHV0UmVmICYmXG4gICAgICAgICAgICB0eXBlb2YgaW5wdXRSZWYgPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgICBpbnB1dFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBpbnB1dFJlZi5jdXJyZW50LnNldFNlbGVjdGlvblJhbmdlKGN1cnNvciwgY3Vyc29yKTtcbiAgICAgICAgfVxuICAgIH0sIFtzdGF0ZVZhbHVlLCBjdXJzb3IsIGlucHV0UmVmLCBkaXJ0eV0pO1xuICAgIC8qKlxuICAgICAqIElmIHVzZXIgaGFzIG9ubHkgZW50ZXJlZCBcIi1cIiBvciBkZWNpbWFsIHNlcGFyYXRvcixcbiAgICAgKiBrZWVwIHRoZSBjaGFyIHRvIGFsbG93IHRoZW0gdG8gZW50ZXIgbmV4dCB2YWx1ZVxuICAgICAqL1xuICAgIHZhciBnZXRSZW5kZXJWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHVzZXJWYWx1ZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICB1c2VyVmFsdWUgIT09IG51bGwgJiZcbiAgICAgICAgICAgIHN0YXRlVmFsdWUgIT09ICctJyAmJlxuICAgICAgICAgICAgc3RhdGVWYWx1ZSAhPT0gZGVjaW1hbFNlcGFyYXRvcikge1xuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdFZhbHVlKF9fYXNzaWduKF9fYXNzaWduKHt9LCBmb3JtYXRWYWx1ZU9wdGlvbnMpLCB7IGRlY2ltYWxTY2FsZTogZGlydHkgPyB1bmRlZmluZWQgOiBkZWNpbWFsU2NhbGUsIHZhbHVlOiBTdHJpbmcodXNlclZhbHVlKSB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0YXRlVmFsdWU7XG4gICAgfTtcbiAgICB2YXIgaW5wdXRQcm9wcyA9IF9fYXNzaWduKHsgdHlwZTogJ3RleHQnLCBpbnB1dE1vZGU6ICdkZWNpbWFsJywgaWQ6IGlkLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSwgb25DaGFuZ2U6IGhhbmRsZU9uQ2hhbmdlLCBvbkJsdXI6IGhhbmRsZU9uQmx1ciwgb25Gb2N1czogaGFuZGxlT25Gb2N1cywgb25LZXlEb3duOiBoYW5kbGVPbktleURvd24sIG9uS2V5VXA6IGhhbmRsZU9uS2V5VXAsIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcbiAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLCB2YWx1ZTogZ2V0UmVuZGVyVmFsdWUoKSwgcmVmOiBpbnB1dFJlZiB9LCBwcm9wcyk7XG4gICAgaWYgKGN1c3RvbUlucHV0KSB7XG4gICAgICAgIHZhciBDdXN0b21JbnB1dCA9IGN1c3RvbUlucHV0O1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDdXN0b21JbnB1dCwgX19hc3NpZ24oe30sIGlucHV0UHJvcHMpKTtcbiAgICB9XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBfX2Fzc2lnbih7fSwgaW5wdXRQcm9wcykpO1xufSk7XG5DdXJyZW5jeUlucHV0LmRpc3BsYXlOYW1lID0gJ0N1cnJlbmN5SW5wdXQnO1xuXG5leHBvcnQgZGVmYXVsdCBDdXJyZW5jeUlucHV0O1xuZXhwb3J0IHsgZm9ybWF0VmFsdWUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcbiJdLCJuYW1lcyI6WyJ5dXBSZXNvbHZlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwiRm9ybVByb3ZpZGVyIiwidXNlRmllbGRBcnJheSIsInVzZUZvcm0iLCJzdHlsZWQiLCJpbml0YWxWYWx1ZXMiLCJmb3JtU2NoZW1hIiwiRXJyb3IiLCJCdXR0b24iLCJGb3JtRmllbGQiLCJJdGVtRmllbGQiLCJGb3JtU2VjdGlvbiIsImZvcm1IZWFkZXJUZXh0U3R5bGUiLCJoNFRleHRTdHlsZSIsIml0ZW1saXN0SGVhZGVyVGV4dFN0eWxlIiwiRWRpdEludm9pY2VGb3JtIiwic2V0RHJhd2VyT3BlbiIsImludm9pY2UiLCJtZXRob2RzIiwiZGVmYXVsdFZhbHVlcyIsInJlc29sdmVyIiwibW9kZSIsImNvbnRyb2wiLCJuYW1lIiwiZmllbGRzIiwiYXBwZW5kIiwicmVtb3ZlIiwicmVzZXQiLCJpbnZvaWNlX2l0ZW1zIiwic3VibWl0Rm9ybURhdGEiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVN1Ym1pdCIsImlkIiwibWluV2lkdGgiLCJmbGV4IiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwiaW52b2ljZUl0ZW1zIiwibWVzc2FnZSIsIm1hcCIsIml0ZW0iLCJpdGVtSW5kZXgiLCJxdWFudGl0eSIsInByaWNlIiwiQmFja0J1dHRvbiIsImJ1dHRvbiIsInAiLCJ0aGVtZSIsIlFVRVJJRVMiLCJ0YWJsZXRBbmRVcCIsIkZvcm1IZWFkZXIiLCJoMiIsIkNPTE9SUyIsImdyZXkiLCJTdHlsZWRGb3JtIiwiZm9ybSIsIklubmVyV3JhcHBlciIsImRpdiIsIlJvdyIsIkl0ZW1zTGlzdEhlYWRlcldyYXBwZXIiLCJJdGVtTGlzdEhlYWRlciIsImg0IiwiSXRlbXNGaWVsZExpc3QiLCJGb3JtQnV0dG9uc0NvbnRhaW5lciIsIkFkZEl0ZW1CdXR0b24iLCJTYXZlRHJhZnRCdXR0b24iLCJmb3JtYXRWYWx1ZSIsInVzZUZvcm1Db250ZXh0IiwidXNlV2F0Y2giLCJQcmljZUZpZWxkIiwiYm9keVRleHRTdHlsZSIsImlkeCIsImdldFZhbHVlcyIsImRlbW8iLCJpbnZvaWNlSXRlbSIsImNhbGN1bGF0ZVRvdGFsIiwiaXNOYU4iLCJ0b0ZpeGVkIiwidG9TdHJpbmciLCJmb3JtYXR0ZWRUb3RhbCIsInZhbHVlIiwiZ3JvdXBTZXBhcmF0b3IiLCJkZWNpbWFsU2NhbGUiLCJkZWNpbWFsU2VwYXJhdG9yIiwicHJlZml4IiwiV3JhcHBlciIsImZpZWxkc2V0IiwiSXRlbU5hbWUiLCJRdWFudGl0eSIsIlRvdGFsV3JhcHBlciIsInByaW1hcnkiLCJUb3RhbFByaWNlIiwiRGVsZXRlQnV0dG9uIiwid2FybmluZyIsInVzZVN0YXRlIiwiQ3VycmVuY3lJbnB1dCIsIkNvbnRyb2xsZXIiLCJmb3JtUHJpY2VWYWx1ZSIsInNldFByaWNlIiwicGFyc2VGbG9hdCIsImZpZWxkIiwibG9jYWxlIiwiY3VycmVuY3kiLCJlIiwib25DaGFuZ2UiLCJNYXRoIiwicm91bmQiLCJQcmljZSJdLCJzb3VyY2VSb290IjoiIn0=