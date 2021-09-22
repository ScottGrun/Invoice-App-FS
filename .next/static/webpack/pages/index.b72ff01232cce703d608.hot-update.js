"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var config_Form_InitalValues__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! config/Form/InitalValues */ "./config/Form/InitalValues.ts");
/* harmony import */ var config_Form_ValidationSchema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! config/Form/ValidationSchema */ "./config/Form/ValidationSchema.ts");
/* harmony import */ var context_InvoicesContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! context/InvoicesContext */ "./context/InvoicesContext.tsx");
/* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Error */ "./components/Form/Error.tsx");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Button */ "./components/Button/index.ts");
/* harmony import */ var _components_Form_Fields_DateField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Form/Fields/DateField */ "./components/Form/Fields/DateField/index.ts");
/* harmony import */ var _components_Form_Fields_FormField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/Form/Fields/FormField */ "./components/Form/Fields/FormField.tsx");
/* harmony import */ var _components_Form_Fields_ItemField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/Form/Fields/ItemField */ "./components/Form/Fields/ItemField.tsx");
/* harmony import */ var _components_Form_FormSection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/Form/FormSection */ "./components/Form/FormSection.tsx");
/* harmony import */ var _styles_typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/styles/typography */ "./styles/typography.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__);
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

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(context_InvoicesContext__WEBPACK_IMPORTED_MODULE_6__.InvoicesContext),
      addInvoice = _useContext.addInvoice,
      updateInvoice = _useContext.updateInvoice;

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
    switch (methods.getValues().status) {
      case 'Pending':
        return updateInvoice(data);

      case 'Draft':
        return addInvoice(data);

      default:
        throw new _Error__WEBPACK_IMPORTED_MODULE_7__.Error('Unknown status');
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.FormProvider, _objectSpread(_objectSpread({}, methods), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(StyledForm, {
      onSubmit: methods.handleSubmit(submitFormData),
      children: [invoice && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(FormHeader, {
        children: ["Edit ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("span", {
          children: "#"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 12
        }, _this), invoice.id]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 6
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(InnerWrapper, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Form_FormSection__WEBPACK_IMPORTED_MODULE_12__.FormSection, {
          label: "Bill From",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Form_Fields_FormField__WEBPACK_IMPORTED_MODULE_10__.FormField, {
            type: "text",
            label: "Street Address",
            name: "user_street_address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(Row, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Form_Fields_FormField__WEBPACK_IMPORTED_MODULE_10__.FormField, {
              style: {
                minWidth: '140px',
                flex: 1
              },
              type: "text",
              label: "City",
              name: "user_city"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 8
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Form_Fields_FormField__WEBPACK_IMPORTED_MODULE_10__.FormField, {
              style: {
                minWidth: '140px',
                flex: 1
              },
              type: "text",
              label: "Post Code",
              name: "user_post_code"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 8
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Form_Fields_FormField__WEBPACK_IMPORTED_MODULE_10__.FormField, {
              style: {
                minWidth: '152px',
                flex: 1
              },
              type: "text",
              label: "Country",
              name: "user_country"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Form_FormSection__WEBPACK_IMPORTED_MODULE_12__.FormSection, {
          label: "Bill To",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Form_Fields_FormField__WEBPACK_IMPORTED_MODULE_10__.FormField, {
            type: "text",
            label: "Client's Name",
            name: "client_name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Form_Fields_FormField__WEBPACK_IMPORTED_MODULE_10__.FormField, {
            type: "email",
            label: "Client's Email",
            name: "client_email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Form_Fields_FormField__WEBPACK_IMPORTED_MODULE_10__.FormField, {
            type: "text",
            label: "Street Address",
            name: "client_street_address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(Row, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Form_Fields_FormField__WEBPACK_IMPORTED_MODULE_10__.FormField, {
              style: {
                minWidth: '140px',
                flex: 1
              },
              type: "text",
              label: "City",
              name: "client_city"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 8
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Form_Fields_FormField__WEBPACK_IMPORTED_MODULE_10__.FormField, {
              style: {
                minWidth: '140px',
                flex: 1
              },
              type: "text",
              label: "Post Code",
              name: "client_post_code"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 8
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Form_Fields_FormField__WEBPACK_IMPORTED_MODULE_10__.FormField, {
              style: {
                minWidth: '152px',
                flex: 1
              },
              type: "text",
              label: "Country",
              name: "client_country"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Form_FormSection__WEBPACK_IMPORTED_MODULE_12__.FormSection, {
          label: "Invoice Details",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(Row, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Form_Fields_DateField__WEBPACK_IMPORTED_MODULE_9__.DateField, {
              style: {
                flex: 1
              },
              name: "invoice_date",
              label: "Invoice Date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 8
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Form_Fields_DateField__WEBPACK_IMPORTED_MODULE_9__.DateField, {
              style: {
                flex: 1
              },
              name: "invoice_due_date",
              label: "Invoice Due Date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Form_Fields_FormField__WEBPACK_IMPORTED_MODULE_10__.FormField, {
            style: {
              minWidth: '152px',
              flex: 1
            },
            type: "text",
            label: "Project Description",
            name: "description"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(ItemsListHeaderWrapper, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(ItemListHeader, {
              children: "Item List"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 8
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_Error__WEBPACK_IMPORTED_MODULE_7__.Error, {
              children: (_methods$formState$er = methods.formState.errors.invoice_items) === null || _methods$formState$er === void 0 ? void 0 : _methods$formState$er.message
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(ItemsFieldList, {
            children: [fields.map(function (item, itemIndex) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Form_Fields_ItemField__WEBPACK_IMPORTED_MODULE_11__.ItemField, {
                idx: itemIndex,
                remove: remove
              }, item.id, false, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 9
              }, _this);
            }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(AddItemButton, {
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
              lineNumber: 140,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(FormButtonsContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.Button, {
          onClick: function onClick() {
            return setDrawerOpen(false);
          },
          type: "button",
          variant: "secondary",
          children: "Cancel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(SaveDraftButton, {
          type: "submit",
          variant: "tertiary",
          children: "Save as Draft"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.Button, {
          type: "submit",
          variant: "primary",
          children: "Save Changes"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 4
    }, _this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 3
  }, _this);
};

_s(EditInvoiceForm, "Soq6Qme71OOITzp0eacQUosD1ww=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm, react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFieldArray];
});

_c = EditInvoiceForm;
var FormHeader = styled_components__WEBPACK_IMPORTED_MODULE_15__.default.h2.withConfig({
  displayName: "EditInvoiceForm__FormHeader",
  componentId: "sc-1v4zcog-0"
})(["", ";padding-top:24px;span{color:", ";}@media ", "{padding-top:56px;}"], _styles_typography__WEBPACK_IMPORTED_MODULE_13__.formHeaderTextStyle, function (p) {
  return p.theme.COLORS.grey[1];
}, function (p) {
  return p.theme.QUERIES.tabletAndUp;
}); // Form

_c2 = FormHeader;
var StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_15__.default.form.withConfig({
  displayName: "EditInvoiceForm__StyledForm",
  componentId: "sc-1v4zcog-1"
})(["position:relative;height:100%;display:flex;flex-flow:column;padding:0;@media ", "{width:528px;}"], function (p) {
  return p.theme.QUERIES.tabletAndUp;
});
_c3 = StyledForm;
var InnerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_15__.default.div.withConfig({
  displayName: "EditInvoiceForm__InnerWrapper",
  componentId: "sc-1v4zcog-2"
})(["height:100%;width:100%;overflow:scroll !important;padding-right:8px;@media ", "{padding-right:16px;}"], function (p) {
  return p.theme.QUERIES.tabletAndUp;
});
_c4 = InnerWrapper;
var Row = styled_components__WEBPACK_IMPORTED_MODULE_15__.default.div.withConfig({
  displayName: "EditInvoiceForm__Row",
  componentId: "sc-1v4zcog-3"
})(["display:flex;flex-wrap:wrap;gap:23px;width:100%;"]);
_c5 = Row;
var ItemsListHeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_15__.default.div.withConfig({
  displayName: "EditInvoiceForm__ItemsListHeaderWrapper",
  componentId: "sc-1v4zcog-4"
})(["display:flex;flex-wrap:wrap;width:100%;margin-top:66px;@media ", "{flex-flow:row;justify-content:space-between;align-items:baseline;}"], function (p) {
  return p.theme.QUERIES.tabletAndUp;
});
_c6 = ItemsListHeaderWrapper;
var ItemListHeader = styled_components__WEBPACK_IMPORTED_MODULE_15__.default.h4.withConfig({
  displayName: "EditInvoiceForm__ItemListHeader",
  componentId: "sc-1v4zcog-5"
})(["", ";display:block;width:100%;color:", ";@media ", "{flex-flow:row;justify-content:space-between;align-items:baseline;width:auto;}"], _styles_typography__WEBPACK_IMPORTED_MODULE_13__.itemlistHeaderTextStyle, function (p) {
  return p.theme.COLORS.grey[7];
}, function (p) {
  return p.theme.QUERIES.tabletAndUp;
});
_c7 = ItemListHeader;
var ItemsFieldList = styled_components__WEBPACK_IMPORTED_MODULE_15__.default.div.withConfig({
  displayName: "EditInvoiceForm__ItemsFieldList",
  componentId: "sc-1v4zcog-6"
})(["display:flex;flex-flow:column;gap:24px;width:100%;"]);
_c8 = ItemsFieldList;
var FormButtonsContainer = styled_components__WEBPACK_IMPORTED_MODULE_15__.default.div.withConfig({
  displayName: "EditInvoiceForm__FormButtonsContainer",
  componentId: "sc-1v4zcog-7"
})(["display:flex;height:91px;align-items:center;justify-content:flex-end;gap:8px;margin-top:24px;padding-right:8px;@media ", "{padding-right:16px;}"], function (p) {
  return p.theme.QUERIES.tabletAndUp;
});
_c9 = FormButtonsContainer;
var AddItemButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_15__.default)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.Button).withConfig({
  displayName: "EditInvoiceForm__AddItemButton",
  componentId: "sc-1v4zcog-8"
})([""]);
_c10 = AddItemButton;
var SaveDraftButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_15__.default)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.Button).withConfig({
  displayName: "EditInvoiceForm__SaveDraftButton",
  componentId: "sc-1v4zcog-9"
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjcyZmYwMTIzMmNjZTcwM2Q2MDguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQVFPLElBQU1tQixlQUFvQyxHQUFHLFNBQXZDQSxlQUF1QyxPQUFnQztBQUFBOztBQUFBOztBQUFBLE1BQTdCQyxhQUE2QixRQUE3QkEsYUFBNkI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7O0FBQ25GLG9CQUFzQ25CLGlEQUFVLENBQUNRLG9FQUFELENBQWhEO0FBQUEsTUFBUVksVUFBUixlQUFRQSxVQUFSO0FBQUEsTUFBb0JDLGFBQXBCLGVBQW9CQSxhQUFwQjs7QUFFQSxNQUFNQyxPQUFPLEdBQUdsQix3REFBTyxDQUFDO0FBQ3ZCbUIsSUFBQUEsYUFBYSxFQUFFakIsa0VBRFE7QUFFdkJrQixJQUFBQSxRQUFRLEVBQUUxQixvRUFBVyxDQUFDUyxvRUFBRCxDQUZFO0FBR3ZCa0IsSUFBQUEsSUFBSSxFQUFFO0FBSGlCLEdBQUQsQ0FBdkI7O0FBTUEsdUJBQW1DdEIsOERBQWEsQ0FBQztBQUNoRHVCLElBQUFBLE9BQU8sRUFBRUosT0FBTyxDQUFDSSxPQUQrQjtBQUVoREMsSUFBQUEsSUFBSSxFQUFFO0FBRjBDLEdBQUQsQ0FBaEQ7QUFBQSxNQUFRQyxNQUFSLGtCQUFRQSxNQUFSO0FBQUEsTUFBZ0JDLE1BQWhCLGtCQUFnQkEsTUFBaEI7QUFBQSxNQUF3QkMsTUFBeEIsa0JBQXdCQSxNQUF4QixDQVRtRixDQWFuRjs7O0FBQ0E3QixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZnFCLElBQUFBLE9BQU8sQ0FBQ1MsS0FBUixpQ0FDSVosT0FESjtBQUVDYSxNQUFBQSxhQUFhLEVBQUViLE9BQUYsYUFBRUEsT0FBRix1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YUFBYSxHQUFHOUQsMkRBQU0sQ0FBQ0ssc0RBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxRQUFuQjtPQUFNeUQ7QUFFTixJQUFNQyxlQUFlLEdBQUcvRCwyREFBTSxDQUFDSyxzREFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLHFCQUFyQjtPQUFNMEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtL0VkaXRJbnZvaWNlRm9ybS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgeXVwUmVzb2x2ZXIgfSBmcm9tICdAaG9va2Zvcm0vcmVzb2x2ZXJzL3l1cCc7XHJcbmltcG9ydCBSZWFjdCwgeyBEaXNwYXRjaCwgRkMsIFNldFN0YXRlQWN0aW9uLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm1Qcm92aWRlciwgdXNlRmllbGRBcnJheSwgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgaW5pdGFsVmFsdWVzIH0gZnJvbSAnY29uZmlnL0Zvcm0vSW5pdGFsVmFsdWVzJztcclxuaW1wb3J0IHsgZm9ybVNjaGVtYSB9IGZyb20gJ2NvbmZpZy9Gb3JtL1ZhbGlkYXRpb25TY2hlbWEnO1xyXG5pbXBvcnQgeyBJbnZvaWNlc0NvbnRleHQgfSBmcm9tICdjb250ZXh0L0ludm9pY2VzQ29udGV4dCc7XHJcblxyXG5pbXBvcnQgeyBFcnJvciB9IGZyb20gJy4vRXJyb3InO1xyXG5cclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQC9jb21wb25lbnRzL0J1dHRvbic7XHJcbmltcG9ydCB7IERhdGVGaWVsZCB9IGZyb20gJ0AvY29tcG9uZW50cy9Gb3JtL0ZpZWxkcy9EYXRlRmllbGQnO1xyXG5pbXBvcnQgeyBGb3JtRmllbGQgfSBmcm9tICdAL2NvbXBvbmVudHMvRm9ybS9GaWVsZHMvRm9ybUZpZWxkJztcclxuaW1wb3J0IHsgSXRlbUZpZWxkIH0gZnJvbSAnQC9jb21wb25lbnRzL0Zvcm0vRmllbGRzL0l0ZW1GaWVsZCc7XHJcbmltcG9ydCB7IEZvcm1TZWN0aW9uIH0gZnJvbSAnQC9jb21wb25lbnRzL0Zvcm0vRm9ybVNlY3Rpb24nO1xyXG5pbXBvcnQgeyBQb3NzaWJsZVN0YXR1cyB9IGZyb20gJ0AvY29uZmlnL1Bvc3NpYmxlU3RhdHVzJztcclxuaW1wb3J0IHsgZm9ybUhlYWRlclRleHRTdHlsZSwgaXRlbWxpc3RIZWFkZXJUZXh0U3R5bGUgfSBmcm9tICdAL3N0eWxlcy90eXBvZ3JhcGh5JztcclxuaW1wb3J0IHsgSW52b2ljZSB9IGZyb20gJ0AvdHlwZXMvaW5kZXgnO1xyXG5cclxuaW50ZXJmYWNlIEVkaXRJbnZvaWNlRm9ybSB7XHJcblx0c2V0RHJhd2VyT3BlbjogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+O1xyXG5cdGludm9pY2U6IEludm9pY2UgfCB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBFZGl0SW52b2ljZUZvcm06IEZDPEVkaXRJbnZvaWNlRm9ybT4gPSAoeyBzZXREcmF3ZXJPcGVuLCBpbnZvaWNlIH0pID0+IHtcclxuXHRjb25zdCB7IGFkZEludm9pY2UsIHVwZGF0ZUludm9pY2UgfSA9IHVzZUNvbnRleHQoSW52b2ljZXNDb250ZXh0KTtcclxuXHJcblx0Y29uc3QgbWV0aG9kcyA9IHVzZUZvcm0oe1xyXG5cdFx0ZGVmYXVsdFZhbHVlczogaW5pdGFsVmFsdWVzLFxyXG5cdFx0cmVzb2x2ZXI6IHl1cFJlc29sdmVyKGZvcm1TY2hlbWEpLFxyXG5cdFx0bW9kZTogJ29uQmx1cicsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IHsgZmllbGRzLCBhcHBlbmQsIHJlbW92ZSB9ID0gdXNlRmllbGRBcnJheSh7XHJcblx0XHRjb250cm9sOiBtZXRob2RzLmNvbnRyb2wsXHJcblx0XHRuYW1lOiAnaW52b2ljZV9pdGVtcycsXHJcblx0fSk7XHJcblx0Ly8gVE9ETzogRml4IHByaWNlIGlucHV0IHRyZWF0aW5nIGNlbnRzIGFzIGRvbGxhcnMgb2ggYWxzbyB0aGUgZGF0ZSBpbnB1dCBpcyBmdWNrZWQgZ29vZCBsdWNrXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdG1ldGhvZHMucmVzZXQoe1xyXG5cdFx0XHQuLi5pbnZvaWNlLFxyXG5cdFx0XHRpbnZvaWNlX2l0ZW1zOiBpbnZvaWNlPy5pbnZvaWNlX2l0ZW1zLFxyXG5cdFx0fSk7XHJcblx0fSwgW2ludm9pY2UsIG1ldGhvZHNdKTtcclxuXHJcblx0Y29uc3Qgc3VibWl0Rm9ybURhdGEgPSAoZGF0YSkgPT4ge1xyXG5cdFx0c3dpdGNoIChtZXRob2RzLmdldFZhbHVlcygpLnN0YXR1cykge1xyXG5cdFx0XHRjYXNlICdQZW5kaW5nJzpcclxuXHRcdFx0XHRyZXR1cm4gdXBkYXRlSW52b2ljZShkYXRhKTtcclxuXHRcdFx0Y2FzZSAnRHJhZnQnOlxyXG5cdFx0XHRcdHJldHVybiBhZGRJbnZvaWNlKGRhdGEpO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignVW5rbm93biBzdGF0dXMnKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEZvcm1Qcm92aWRlciB7Li4ubWV0aG9kc30+XHJcblx0XHRcdDxTdHlsZWRGb3JtIG9uU3VibWl0PXttZXRob2RzLmhhbmRsZVN1Ym1pdChzdWJtaXRGb3JtRGF0YSl9PlxyXG5cdFx0XHRcdHtpbnZvaWNlICYmIChcclxuXHRcdFx0XHRcdDxGb3JtSGVhZGVyPlxyXG5cdFx0XHRcdFx0XHRFZGl0IDxzcGFuPiM8L3NwYW4+XHJcblx0XHRcdFx0XHRcdHtpbnZvaWNlLmlkfVxyXG5cdFx0XHRcdFx0PC9Gb3JtSGVhZGVyPlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdFx0PElubmVyV3JhcHBlcj5cclxuXHRcdFx0XHRcdHsvKiBCaWxsIEZyb20gKi99XHJcblx0XHRcdFx0XHQ8Rm9ybVNlY3Rpb24gbGFiZWw9XCJCaWxsIEZyb21cIj5cclxuXHRcdFx0XHRcdFx0PEZvcm1GaWVsZCB0eXBlPVwidGV4dFwiIGxhYmVsPVwiU3RyZWV0IEFkZHJlc3NcIiBuYW1lPVwidXNlcl9zdHJlZXRfYWRkcmVzc1wiIC8+XHJcblx0XHRcdFx0XHRcdDxSb3c+XHJcblx0XHRcdFx0XHRcdFx0PEZvcm1GaWVsZFxyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgbWluV2lkdGg6ICcxNDBweCcsIGZsZXg6IDEgfX1cclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiQ2l0eVwiXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwidXNlcl9jaXR5XCJcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxGb3JtRmllbGRcclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IG1pbldpZHRoOiAnMTQwcHgnLCBmbGV4OiAxIH19XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlBvc3QgQ29kZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwidXNlcl9wb3N0X2NvZGVcIlxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PEZvcm1GaWVsZFxyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgbWluV2lkdGg6ICcxNTJweCcsIGZsZXg6IDEgfX1cclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiQ291bnRyeVwiXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwidXNlcl9jb3VudHJ5XCJcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L1Jvdz5cclxuXHRcdFx0XHRcdDwvRm9ybVNlY3Rpb24+XHJcblx0XHRcdFx0XHR7LyogQmlsbCBUbyAqL31cclxuXHRcdFx0XHRcdDxGb3JtU2VjdGlvbiBsYWJlbD1cIkJpbGwgVG9cIj5cclxuXHRcdFx0XHRcdFx0PEZvcm1GaWVsZCB0eXBlPVwidGV4dFwiIGxhYmVsPVwiQ2xpZW50J3MgTmFtZVwiIG5hbWU9XCJjbGllbnRfbmFtZVwiIC8+XHJcblx0XHRcdFx0XHRcdDxGb3JtRmllbGQgdHlwZT1cImVtYWlsXCIgbGFiZWw9XCJDbGllbnQncyBFbWFpbFwiIG5hbWU9XCJjbGllbnRfZW1haWxcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8Rm9ybUZpZWxkIHR5cGU9XCJ0ZXh0XCIgbGFiZWw9XCJTdHJlZXQgQWRkcmVzc1wiIG5hbWU9XCJjbGllbnRfc3RyZWV0X2FkZHJlc3NcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8Um93PlxyXG5cdFx0XHRcdFx0XHRcdDxGb3JtRmllbGRcclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IG1pbldpZHRoOiAnMTQwcHgnLCBmbGV4OiAxIH19XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkNpdHlcIlxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImNsaWVudF9jaXR5XCJcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxGb3JtRmllbGRcclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IG1pbldpZHRoOiAnMTQwcHgnLCBmbGV4OiAxIH19XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlBvc3QgQ29kZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiY2xpZW50X3Bvc3RfY29kZVwiXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUZpZWxkXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBtaW5XaWR0aDogJzE1MnB4JywgZmxleDogMSB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJDb3VudHJ5XCJcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJjbGllbnRfY291bnRyeVwiXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9Sb3c+XHJcblx0XHRcdFx0XHQ8L0Zvcm1TZWN0aW9uPlxyXG5cclxuXHRcdFx0XHRcdDxGb3JtU2VjdGlvbiBsYWJlbD1cIkludm9pY2UgRGV0YWlsc1wiPlxyXG5cdFx0XHRcdFx0XHQ8Um93PlxyXG5cdFx0XHRcdFx0XHRcdDxEYXRlRmllbGQgc3R5bGU9e3sgZmxleDogMSB9fSBuYW1lPVwiaW52b2ljZV9kYXRlXCIgbGFiZWw9XCJJbnZvaWNlIERhdGVcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdDxEYXRlRmllbGQgc3R5bGU9e3sgZmxleDogMSB9fSBuYW1lPVwiaW52b2ljZV9kdWVfZGF0ZVwiIGxhYmVsPVwiSW52b2ljZSBEdWUgRGF0ZVwiIC8+XHJcblx0XHRcdFx0XHRcdDwvUm93PlxyXG5cclxuXHRcdFx0XHRcdFx0PEZvcm1GaWVsZFxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7IG1pbldpZHRoOiAnMTUycHgnLCBmbGV4OiAxIH19XHJcblx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdGxhYmVsPVwiUHJvamVjdCBEZXNjcmlwdGlvblwiXHJcblx0XHRcdFx0XHRcdFx0bmFtZT1cImRlc2NyaXB0aW9uXCJcclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PEl0ZW1zTGlzdEhlYWRlcldyYXBwZXI+XHJcblx0XHRcdFx0XHRcdFx0PEl0ZW1MaXN0SGVhZGVyPkl0ZW0gTGlzdDwvSXRlbUxpc3RIZWFkZXI+XHJcblx0XHRcdFx0XHRcdFx0ey8qIEB0cy1leHBlY3QtZXJyb3I6IGlnbm9yZSB3cm9uZyBzY2hlbWEgd2FybmluZyAqL31cclxuXHRcdFx0XHRcdFx0XHQ8RXJyb3I+e21ldGhvZHMuZm9ybVN0YXRlLmVycm9ycy5pbnZvaWNlX2l0ZW1zPy5tZXNzYWdlfTwvRXJyb3I+XHJcblx0XHRcdFx0XHRcdDwvSXRlbXNMaXN0SGVhZGVyV3JhcHBlcj5cclxuXHRcdFx0XHRcdFx0PEl0ZW1zRmllbGRMaXN0PlxyXG5cdFx0XHRcdFx0XHRcdHtmaWVsZHMubWFwKChpdGVtLCBpdGVtSW5kZXgpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdDxJdGVtRmllbGQga2V5PXtpdGVtLmlkfSBpZHg9e2l0ZW1JbmRleH0gcmVtb3ZlPXtyZW1vdmV9IC8+XHJcblx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdFx0PEFkZEl0ZW1CdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBhcHBlbmQoeyBuYW1lOiAnJywgcXVhbnRpdHk6IDAsIHByaWNlOiAwIH0pfVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdCsgQWRkIE5ldyBJdGVtXHJcblx0XHRcdFx0XHRcdFx0PC9BZGRJdGVtQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L0l0ZW1zRmllbGRMaXN0PlxyXG5cdFx0XHRcdFx0PC9Gb3JtU2VjdGlvbj5cclxuXHRcdFx0XHQ8L0lubmVyV3JhcHBlcj5cclxuXHRcdFx0XHQ8Rm9ybUJ1dHRvbnNDb250YWluZXI+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldERyYXdlck9wZW4oZmFsc2UpfSB0eXBlPVwiYnV0dG9uXCIgdmFyaWFudD1cInNlY29uZGFyeVwiPlxyXG5cdFx0XHRcdFx0XHRDYW5jZWxcclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0PFNhdmVEcmFmdEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cInRlcnRpYXJ5XCI+XHJcblx0XHRcdFx0XHRcdFNhdmUgYXMgRHJhZnRcclxuXHRcdFx0XHRcdDwvU2F2ZURyYWZ0QnV0dG9uPlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cInByaW1hcnlcIj5cclxuXHRcdFx0XHRcdFx0U2F2ZSBDaGFuZ2VzXHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8L0Zvcm1CdXR0b25zQ29udGFpbmVyPlxyXG5cdFx0XHQ8L1N0eWxlZEZvcm0+XHJcblx0XHQ8L0Zvcm1Qcm92aWRlcj5cclxuXHQpO1xyXG59O1xyXG5cclxuY29uc3QgRm9ybUhlYWRlciA9IHN0eWxlZC5oMmBcclxuXHQke2Zvcm1IZWFkZXJUZXh0U3R5bGV9O1xyXG5cdHBhZGRpbmctdG9wOiAyNHB4O1xyXG5cdHNwYW4ge1xyXG5cdFx0Y29sb3I6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLmdyZXlbMV19O1xyXG5cdH1cclxuXHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0cGFkZGluZy10b3A6IDU2cHg7XHJcblx0fVxyXG5gO1xyXG5cclxuLy8gRm9ybVxyXG5jb25zdCBTdHlsZWRGb3JtID0gc3R5bGVkLmZvcm1gXHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZmxvdzogY29sdW1uO1xyXG5cdHBhZGRpbmc6IDA7XHJcblxyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdHdpZHRoOiA1MjhweDtcclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBJbm5lcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG5cdGhlaWdodDogMTAwJTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRvdmVyZmxvdzogc2Nyb2xsICFpbXBvcnRhbnQ7XHJcblx0cGFkZGluZy1yaWdodDogOHB4O1xyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgUm93ID0gc3R5bGVkLmRpdmBcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxuXHRnYXA6IDIzcHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcbmA7XHJcblxyXG5jb25zdCBJdGVtc0xpc3RIZWFkZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXJnaW4tdG9wOiA2NnB4O1xyXG5cclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLnRhYmxldEFuZFVwfSB7XHJcblx0XHRmbGV4LWZsb3c6IHJvdztcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBJdGVtTGlzdEhlYWRlciA9IHN0eWxlZC5oNGBcclxuXHQke2l0ZW1saXN0SGVhZGVyVGV4dFN0eWxlfTtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR3aWR0aDogMTAwJTtcclxuXHRjb2xvcjogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMuZ3JleVs3XX07XHJcblxyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdGZsZXgtZmxvdzogcm93O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5cdFx0d2lkdGg6IGF1dG87XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgSXRlbXNGaWVsZExpc3QgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1mbG93OiBjb2x1bW47XHJcblx0Z2FwOiAyNHB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybUJ1dHRvbnNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0aGVpZ2h0OiA5MXB4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHRnYXA6IDhweDtcclxuXHRtYXJnaW4tdG9wOiAyNHB4O1xyXG5cclxuXHRwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0cGFkZGluZy1yaWdodDogMTZweDtcclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBBZGRJdGVtQnV0dG9uID0gc3R5bGVkKEJ1dHRvbilgYDtcclxuXHJcbmNvbnN0IFNhdmVEcmFmdEJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbmA7XHJcbiJdLCJuYW1lcyI6WyJ5dXBSZXNvbHZlciIsIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsIkZvcm1Qcm92aWRlciIsInVzZUZpZWxkQXJyYXkiLCJ1c2VGb3JtIiwic3R5bGVkIiwiaW5pdGFsVmFsdWVzIiwiZm9ybVNjaGVtYSIsIkludm9pY2VzQ29udGV4dCIsIkVycm9yIiwiQnV0dG9uIiwiRGF0ZUZpZWxkIiwiRm9ybUZpZWxkIiwiSXRlbUZpZWxkIiwiRm9ybVNlY3Rpb24iLCJmb3JtSGVhZGVyVGV4dFN0eWxlIiwiaXRlbWxpc3RIZWFkZXJUZXh0U3R5bGUiLCJFZGl0SW52b2ljZUZvcm0iLCJzZXREcmF3ZXJPcGVuIiwiaW52b2ljZSIsImFkZEludm9pY2UiLCJ1cGRhdGVJbnZvaWNlIiwibWV0aG9kcyIsImRlZmF1bHRWYWx1ZXMiLCJyZXNvbHZlciIsIm1vZGUiLCJjb250cm9sIiwibmFtZSIsImZpZWxkcyIsImFwcGVuZCIsInJlbW92ZSIsInJlc2V0IiwiaW52b2ljZV9pdGVtcyIsInN1Ym1pdEZvcm1EYXRhIiwiZGF0YSIsImdldFZhbHVlcyIsInN0YXR1cyIsImhhbmRsZVN1Ym1pdCIsImlkIiwibWluV2lkdGgiLCJmbGV4IiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwibWVzc2FnZSIsIm1hcCIsIml0ZW0iLCJpdGVtSW5kZXgiLCJxdWFudGl0eSIsInByaWNlIiwiRm9ybUhlYWRlciIsImgyIiwicCIsInRoZW1lIiwiQ09MT1JTIiwiZ3JleSIsIlFVRVJJRVMiLCJ0YWJsZXRBbmRVcCIsIlN0eWxlZEZvcm0iLCJmb3JtIiwiSW5uZXJXcmFwcGVyIiwiZGl2IiwiUm93IiwiSXRlbXNMaXN0SGVhZGVyV3JhcHBlciIsIkl0ZW1MaXN0SGVhZGVyIiwiaDQiLCJJdGVtc0ZpZWxkTGlzdCIsIkZvcm1CdXR0b25zQ29udGFpbmVyIiwiQWRkSXRlbUJ1dHRvbiIsIlNhdmVEcmFmdEJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=