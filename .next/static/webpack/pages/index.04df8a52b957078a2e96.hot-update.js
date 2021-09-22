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
  // useEffect(() => {
  // 	methods.reset({
  // 		...invoice,
  // 		invoice_items: invoice?.invoice_items,
  // 	});
  // }, [invoice, methods]);


  var submitFormData = function submitFormData(e) {
    e.preventDefault();
    console.log('hi submitted');
  };

  var handleAddInvoice = function handleAddInvoice() {
    console.log('tried to add');
    console.log(methods.formState.errors);

    if (methods.formState.isValid) {
      console.log('added invoice');
      addInvoice({
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
      });
    }
  };

  var handleUpdateInvoice = function handleUpdateInvoice() {
    if (methods.formState.isValid) {
      updateInvoice(methods.getValues());
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.FormProvider, _objectSpread(_objectSpread({}, methods), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(StyledForm, {
      onSubmit: function onSubmit(e) {
        return e.preventDefault();
      },
      children: [invoice && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(FormHeader, {
        children: ["Edit ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("span", {
          children: "#"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 12
        }, _this), invoice.id]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
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
              name: "user_city"
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
              name: "user_post_code"
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
              name: "user_country"
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
          lineNumber: 95,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Form_FormSection__WEBPACK_IMPORTED_MODULE_12__.FormSection, {
          label: "Bill To",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Form_Fields_FormField__WEBPACK_IMPORTED_MODULE_10__.FormField, {
            type: "text",
            label: "Client's Name",
            name: "client_name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Form_Fields_FormField__WEBPACK_IMPORTED_MODULE_10__.FormField, {
            type: "email",
            label: "Client's Email",
            name: "client_email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Form_Fields_FormField__WEBPACK_IMPORTED_MODULE_10__.FormField, {
            type: "text",
            label: "Street Address",
            name: "client_street_address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
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
              lineNumber: 124,
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
              lineNumber: 130,
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
              lineNumber: 136,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 119,
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
              lineNumber: 147,
              columnNumber: 8
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Form_Fields_DateField__WEBPACK_IMPORTED_MODULE_9__.DateField, {
              style: {
                flex: 1
              },
              name: "invoice_due_date",
              label: "Invoice Due Date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 146,
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
            lineNumber: 151,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(ItemsListHeaderWrapper, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(ItemListHeader, {
              children: "Item List"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 8
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_Error__WEBPACK_IMPORTED_MODULE_7__.Error, {
              children: (_methods$formState$er = methods.formState.errors.invoice_items) === null || _methods$formState$er === void 0 ? void 0 : _methods$formState$er.message
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(ItemsFieldList, {
            children: [fields.map(function (item, itemIndex) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Form_Fields_ItemField__WEBPACK_IMPORTED_MODULE_11__.ItemField, {
                idx: itemIndex,
                remove: remove
              }, item.id, false, {
                fileName: _jsxFileName,
                lineNumber: 164,
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
              lineNumber: 166,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
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
          lineNumber: 177,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(SaveDraftButton, {
          type: "submit",
          variant: "tertiary",
          onClick: function onClick() {
            return handleAddInvoice();
          },
          children: "Save as Draft"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.Button, {
          type: "submit",
          variant: "primary",
          onClick: function onClick() {
            return handleUpdateInvoice();
          },
          children: "Save Changes"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 4
    }, _this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 3
  }, _this);
};

_s(EditInvoiceForm, "qOgCJRBh/JbvthWPMKwgUOX6VbE=", false, function () {
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
})([""]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDRkZjhhNTJiOTU3MDc4YTJlOTYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQVFPLElBQU1rQixlQUFvQyxHQUFHLFNBQXZDQSxlQUF1QyxPQUFnQztBQUFBOztBQUFBOztBQUFBLE1BQTdCQyxhQUE2QixRQUE3QkEsYUFBNkI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7O0FBQ25GLG9CQUFzQ2xCLGlEQUFVLENBQUNPLG9FQUFELENBQWhEO0FBQUEsTUFBUVksVUFBUixlQUFRQSxVQUFSO0FBQUEsTUFBb0JDLGFBQXBCLGVBQW9CQSxhQUFwQjs7QUFFQSxNQUFNQyxPQUFPLEdBQUdsQix3REFBTyxDQUFDO0FBQ3ZCbUIsSUFBQUEsYUFBYSxFQUFFakIsa0VBRFE7QUFFdkJrQixJQUFBQSxRQUFRLEVBQUV6QixvRUFBVyxDQUFDUSxvRUFBRCxDQUZFO0FBR3ZCa0IsSUFBQUEsSUFBSSxFQUFFO0FBSGlCLEdBQUQsQ0FBdkI7O0FBTUEsdUJBQW1DdEIsOERBQWEsQ0FBQztBQUNoRHVCLElBQUFBLE9BQU8sRUFBRUosT0FBTyxDQUFDSSxPQUQrQjtBQUVoREMsSUFBQUEsSUFBSSxFQUFFO0FBRjBDLEdBQUQsQ0FBaEQ7QUFBQSxNQUFRQyxNQUFSLGtCQUFRQSxNQUFSO0FBQUEsTUFBZ0JDLE1BQWhCLGtCQUFnQkEsTUFBaEI7QUFBQSxNQUF3QkMsTUFBeEIsa0JBQXdCQSxNQUF4QixDQVRtRixDQWFuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxDQUFELEVBQU87QUFDN0JBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjtB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QUFuQjtPQUFNMEU7QUFFTixJQUFNQyxlQUFlLEdBQUdoRiwyREFBTSxDQUFDSyxzREFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLFFBQXJCO09BQU0yRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zvcm0vRWRpdEludm9pY2VGb3JtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB5dXBSZXNvbHZlciB9IGZyb20gJ0Bob29rZm9ybS9yZXNvbHZlcnMveXVwJztcclxuaW1wb3J0IFJlYWN0LCB7IERpc3BhdGNoLCBGQywgU2V0U3RhdGVBY3Rpb24sIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybVByb3ZpZGVyLCB1c2VGaWVsZEFycmF5LCB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBpbml0YWxWYWx1ZXMgfSBmcm9tICdjb25maWcvRm9ybS9Jbml0YWxWYWx1ZXMnO1xyXG5pbXBvcnQgeyBmb3JtU2NoZW1hIH0gZnJvbSAnY29uZmlnL0Zvcm0vVmFsaWRhdGlvblNjaGVtYSc7XHJcbmltcG9ydCB7IEludm9pY2VzQ29udGV4dCB9IGZyb20gJ2NvbnRleHQvSW52b2ljZXNDb250ZXh0JztcclxuXHJcbmltcG9ydCB7IEVycm9yIH0gZnJvbSAnLi9FcnJvcic7XHJcblxyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAL2NvbXBvbmVudHMvQnV0dG9uJztcclxuaW1wb3J0IHsgRGF0ZUZpZWxkIH0gZnJvbSAnQC9jb21wb25lbnRzL0Zvcm0vRmllbGRzL0RhdGVGaWVsZCc7XHJcbmltcG9ydCB7IEZvcm1GaWVsZCB9IGZyb20gJ0AvY29tcG9uZW50cy9Gb3JtL0ZpZWxkcy9Gb3JtRmllbGQnO1xyXG5pbXBvcnQgeyBJdGVtRmllbGQgfSBmcm9tICdAL2NvbXBvbmVudHMvRm9ybS9GaWVsZHMvSXRlbUZpZWxkJztcclxuaW1wb3J0IHsgRm9ybVNlY3Rpb24gfSBmcm9tICdAL2NvbXBvbmVudHMvRm9ybS9Gb3JtU2VjdGlvbic7XHJcbmltcG9ydCB7IFBvc3NpYmxlU3RhdHVzIH0gZnJvbSAnQC9jb25maWcvUG9zc2libGVTdGF0dXMnO1xyXG5pbXBvcnQgeyBmb3JtSGVhZGVyVGV4dFN0eWxlLCBpdGVtbGlzdEhlYWRlclRleHRTdHlsZSB9IGZyb20gJ0Avc3R5bGVzL3R5cG9ncmFwaHknO1xyXG5pbXBvcnQgeyBJbnZvaWNlIH0gZnJvbSAnQC90eXBlcy9pbmRleCc7XHJcblxyXG5pbnRlcmZhY2UgRWRpdEludm9pY2VGb3JtIHtcclxuXHRzZXREcmF3ZXJPcGVuOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxib29sZWFuPj47XHJcblx0aW52b2ljZTogSW52b2ljZSB8IHVuZGVmaW5lZDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEVkaXRJbnZvaWNlRm9ybTogRkM8RWRpdEludm9pY2VGb3JtPiA9ICh7IHNldERyYXdlck9wZW4sIGludm9pY2UgfSkgPT4ge1xyXG5cdGNvbnN0IHsgYWRkSW52b2ljZSwgdXBkYXRlSW52b2ljZSB9ID0gdXNlQ29udGV4dChJbnZvaWNlc0NvbnRleHQpO1xyXG5cclxuXHRjb25zdCBtZXRob2RzID0gdXNlRm9ybSh7XHJcblx0XHRkZWZhdWx0VmFsdWVzOiBpbml0YWxWYWx1ZXMsXHJcblx0XHRyZXNvbHZlcjogeXVwUmVzb2x2ZXIoZm9ybVNjaGVtYSksXHJcblx0XHRtb2RlOiAnb25CbHVyJyxcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgeyBmaWVsZHMsIGFwcGVuZCwgcmVtb3ZlIH0gPSB1c2VGaWVsZEFycmF5KHtcclxuXHRcdGNvbnRyb2w6IG1ldGhvZHMuY29udHJvbCxcclxuXHRcdG5hbWU6ICdpbnZvaWNlX2l0ZW1zJyxcclxuXHR9KTtcclxuXHQvLyBUT0RPOiBGaXggcHJpY2UgaW5wdXQgdHJlYXRpbmcgY2VudHMgYXMgZG9sbGFycyBvaCBhbHNvIHRoZSBkYXRlIGlucHV0IGlzIGZ1Y2tlZCBnb29kIGx1Y2tcclxuXHQvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdC8vIFx0bWV0aG9kcy5yZXNldCh7XHJcblx0Ly8gXHRcdC4uLmludm9pY2UsXHJcblx0Ly8gXHRcdGludm9pY2VfaXRlbXM6IGludm9pY2U/Lmludm9pY2VfaXRlbXMsXHJcblx0Ly8gXHR9KTtcclxuXHQvLyB9LCBbaW52b2ljZSwgbWV0aG9kc10pO1xyXG5cclxuXHRjb25zdCBzdWJtaXRGb3JtRGF0YSA9IChlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRjb25zb2xlLmxvZygnaGkgc3VibWl0dGVkJyk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQWRkSW52b2ljZSA9ICgpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKCd0cmllZCB0byBhZGQnKTtcclxuXHRcdGNvbnNvbGUubG9nKG1ldGhvZHMuZm9ybVN0YXRlLmVycm9ycyk7XHJcblx0XHRpZiAobWV0aG9kcy5mb3JtU3RhdGUuaXNWYWxpZCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnYWRkZWQgaW52b2ljZScpO1xyXG5cdFx0XHRhZGRJbnZvaWNlKHtcclxuXHRcdFx0XHRpZDogJ1JUMzA4MCcsXHJcblx0XHRcdFx0aW52b2ljZV9kYXRlOiAnVHVlIFNlcCAxIDIwMDInLFxyXG5cdFx0XHRcdGludm9pY2VfZHVlX2RhdGU6ICdUdWUgU2VwIDIxIDIwMjEnLFxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiAnUmUtYnJhbmRpbmcnLFxyXG5cdFx0XHRcdGNsaWVudF9uYW1lOiAnSmVuc2VuIEh1YW5nJyxcclxuXHRcdFx0XHRjbGllbnRfZW1haWw6ICdqZW5zZW5oQG1haWwuY29tJyxcclxuXHRcdFx0XHRzdGF0dXM6ICdQYWlkJyxcclxuXHRcdFx0XHR1c2VyX3N0cmVldF9hZGRyZXNzOiAnMTkgVW5pb24gVGVycmFjZScsXHJcblx0XHRcdFx0dXNlcl9jaXR5OiAnTG9uZG9uJyxcclxuXHRcdFx0XHR1c2VyX3Bvc3RfY29kZTogJ0UxIDNFWicsXHJcblx0XHRcdFx0dXNlcl9jb3VudHJ5OiAnVW5pdGVkIEtpbmdkb20nLFxyXG5cdFx0XHRcdGNsaWVudF9zdHJlZXRfYWRkcmVzczogJzEwNiBLZW5kZWxsIFN0cmVldCcsXHJcblx0XHRcdFx0Y2xpZW50X2NpdHk6ICdTaGFycmluZ3RvbicsXHJcblx0XHRcdFx0Y2xpZW50X3Bvc3RfY29kZTogJ05SMjQgNVdRJyxcclxuXHRcdFx0XHRjbGllbnRfY291bnRyeTogJ1VuaXRlZCBLaW5nZG9tJyxcclxuXHRcdFx0XHRpbnZvaWNlX2l0ZW1zOiBbeyBuYW1lOiAnQnJhbmQgR3VpZGVsaW5lcycsIHF1YW50aXR5OiAyLCBwcmljZTogNTAwIH1dLFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVVcGRhdGVJbnZvaWNlID0gKCkgPT4ge1xyXG5cdFx0aWYgKG1ldGhvZHMuZm9ybVN0YXRlLmlzVmFsaWQpIHtcclxuXHRcdFx0dXBkYXRlSW52b2ljZShtZXRob2RzLmdldFZhbHVlcygpKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEZvcm1Qcm92aWRlciB7Li4ubWV0aG9kc30+XHJcblx0XHRcdDxTdHlsZWRGb3JtIG9uU3VibWl0PXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfT5cclxuXHRcdFx0XHR7aW52b2ljZSAmJiAoXHJcblx0XHRcdFx0XHQ8Rm9ybUhlYWRlcj5cclxuXHRcdFx0XHRcdFx0RWRpdCA8c3Bhbj4jPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHR7aW52b2ljZS5pZH1cclxuXHRcdFx0XHRcdDwvRm9ybUhlYWRlcj5cclxuXHRcdFx0XHQpfVxyXG5cdFx0XHRcdDxJbm5lcldyYXBwZXI+XHJcblx0XHRcdFx0XHR7LyogQmlsbCBGcm9tICovfVxyXG5cdFx0XHRcdFx0PEZvcm1TZWN0aW9uIGxhYmVsPVwiQmlsbCBGcm9tXCI+XHJcblx0XHRcdFx0XHRcdDxGb3JtRmllbGQgdHlwZT1cInRleHRcIiBsYWJlbD1cIlN0cmVldCBBZGRyZXNzXCIgbmFtZT1cInVzZXJfc3RyZWV0X2FkZHJlc3NcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8Um93PlxyXG5cdFx0XHRcdFx0XHRcdDxGb3JtRmllbGRcclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IG1pbldpZHRoOiAnMTQwcHgnLCBmbGV4OiAxIH19XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkNpdHlcIlxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cInVzZXJfY2l0eVwiXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUZpZWxkXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBtaW5XaWR0aDogJzE0MHB4JywgZmxleDogMSB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJQb3N0IENvZGVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cInVzZXJfcG9zdF9jb2RlXCJcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxGb3JtRmllbGRcclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IG1pbldpZHRoOiAnMTUycHgnLCBmbGV4OiAxIH19XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkNvdW50cnlcIlxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cInVzZXJfY291bnRyeVwiXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9Sb3c+XHJcblx0XHRcdFx0XHQ8L0Zvcm1TZWN0aW9uPlxyXG5cdFx0XHRcdFx0ey8qIEJpbGwgVG8gKi99XHJcblx0XHRcdFx0XHQ8Rm9ybVNlY3Rpb24gbGFiZWw9XCJCaWxsIFRvXCI+XHJcblx0XHRcdFx0XHRcdDxGb3JtRmllbGQgdHlwZT1cInRleHRcIiBsYWJlbD1cIkNsaWVudCdzIE5hbWVcIiBuYW1lPVwiY2xpZW50X25hbWVcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8Rm9ybUZpZWxkIHR5cGU9XCJlbWFpbFwiIGxhYmVsPVwiQ2xpZW50J3MgRW1haWxcIiBuYW1lPVwiY2xpZW50X2VtYWlsXCIgLz5cclxuXHRcdFx0XHRcdFx0PEZvcm1GaWVsZCB0eXBlPVwidGV4dFwiIGxhYmVsPVwiU3RyZWV0IEFkZHJlc3NcIiBuYW1lPVwiY2xpZW50X3N0cmVldF9hZGRyZXNzXCIgLz5cclxuXHRcdFx0XHRcdFx0PFJvdz5cclxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUZpZWxkXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBtaW5XaWR0aDogJzE0MHB4JywgZmxleDogMSB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJDaXR5XCJcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJjbGllbnRfY2l0eVwiXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUZpZWxkXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBtaW5XaWR0aDogJzE0MHB4JywgZmxleDogMSB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJQb3N0IENvZGVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImNsaWVudF9wb3N0X2NvZGVcIlxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PEZvcm1GaWVsZFxyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgbWluV2lkdGg6ICcxNTJweCcsIGZsZXg6IDEgfX1cclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiQ291bnRyeVwiXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiY2xpZW50X2NvdW50cnlcIlxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvUm93PlxyXG5cdFx0XHRcdFx0PC9Gb3JtU2VjdGlvbj5cclxuXHJcblx0XHRcdFx0XHQ8Rm9ybVNlY3Rpb24gbGFiZWw9XCJJbnZvaWNlIERldGFpbHNcIj5cclxuXHRcdFx0XHRcdFx0PFJvdz5cclxuXHRcdFx0XHRcdFx0XHQ8RGF0ZUZpZWxkIHN0eWxlPXt7IGZsZXg6IDEgfX0gbmFtZT1cImludm9pY2VfZGF0ZVwiIGxhYmVsPVwiSW52b2ljZSBEYXRlXCIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8RGF0ZUZpZWxkIHN0eWxlPXt7IGZsZXg6IDEgfX0gbmFtZT1cImludm9pY2VfZHVlX2RhdGVcIiBsYWJlbD1cIkludm9pY2UgRHVlIERhdGVcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8L1Jvdz5cclxuXHJcblx0XHRcdFx0XHRcdDxGb3JtRmllbGRcclxuXHRcdFx0XHRcdFx0XHRzdHlsZT17eyBtaW5XaWR0aDogJzE1MnB4JywgZmxleDogMSB9fVxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIlByb2plY3QgRGVzY3JpcHRpb25cIlxyXG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDxJdGVtc0xpc3RIZWFkZXJXcmFwcGVyPlxyXG5cdFx0XHRcdFx0XHRcdDxJdGVtTGlzdEhlYWRlcj5JdGVtIExpc3Q8L0l0ZW1MaXN0SGVhZGVyPlxyXG5cdFx0XHRcdFx0XHRcdHsvKiBAdHMtZXhwZWN0LWVycm9yOiBpZ25vcmUgd3Jvbmcgc2NoZW1hIHdhcm5pbmcgKi99XHJcblx0XHRcdFx0XHRcdFx0PEVycm9yPnttZXRob2RzLmZvcm1TdGF0ZS5lcnJvcnMuaW52b2ljZV9pdGVtcz8ubWVzc2FnZX08L0Vycm9yPlxyXG5cdFx0XHRcdFx0XHQ8L0l0ZW1zTGlzdEhlYWRlcldyYXBwZXI+XHJcblx0XHRcdFx0XHRcdDxJdGVtc0ZpZWxkTGlzdD5cclxuXHRcdFx0XHRcdFx0XHR7ZmllbGRzLm1hcCgoaXRlbSwgaXRlbUluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8SXRlbUZpZWxkIGtleT17aXRlbS5pZH0gaWR4PXtpdGVtSW5kZXh9IHJlbW92ZT17cmVtb3ZlfSAvPlxyXG5cdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHRcdDxBZGRJdGVtQnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PVwic2Vjb25kYXJ5XCJcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gYXBwZW5kKHsgbmFtZTogJycsIHF1YW50aXR5OiAwLCBwcmljZTogMCB9KX1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQrIEFkZCBOZXcgSXRlbVxyXG5cdFx0XHRcdFx0XHRcdDwvQWRkSXRlbUJ1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC9JdGVtc0ZpZWxkTGlzdD5cclxuXHRcdFx0XHRcdDwvRm9ybVNlY3Rpb24+XHJcblx0XHRcdFx0PC9Jbm5lcldyYXBwZXI+XHJcblx0XHRcdFx0PEZvcm1CdXR0b25zQ29udGFpbmVyPlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXREcmF3ZXJPcGVuKGZhbHNlKX0gdHlwZT1cImJ1dHRvblwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cclxuXHRcdFx0XHRcdFx0Q2FuY2VsXHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdDxTYXZlRHJhZnRCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZEludm9pY2UoKX0+XHJcblx0XHRcdFx0XHRcdFNhdmUgYXMgRHJhZnRcclxuXHRcdFx0XHRcdDwvU2F2ZURyYWZ0QnV0dG9uPlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVVcGRhdGVJbnZvaWNlKCl9PlxyXG5cdFx0XHRcdFx0XHRTYXZlIENoYW5nZXNcclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvRm9ybUJ1dHRvbnNDb250YWluZXI+XHJcblx0XHRcdDwvU3R5bGVkRm9ybT5cclxuXHRcdDwvRm9ybVByb3ZpZGVyPlxyXG5cdCk7XHJcbn07XHJcblxyXG5jb25zdCBGb3JtSGVhZGVyID0gc3R5bGVkLmgyYFxyXG5cdCR7Zm9ybUhlYWRlclRleHRTdHlsZX07XHJcblx0cGFkZGluZy10b3A6IDI0cHg7XHJcblx0c3BhbiB7XHJcblx0XHRjb2xvcjogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMuZ3JleVsxXX07XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLnRhYmxldEFuZFVwfSB7XHJcblx0XHRwYWRkaW5nLXRvcDogNTZweDtcclxuXHR9XHJcbmA7XHJcblxyXG4vLyBGb3JtXHJcbmNvbnN0IFN0eWxlZEZvcm0gPSBzdHlsZWQuZm9ybWBcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1mbG93OiBjb2x1bW47XHJcblx0cGFkZGluZzogMDtcclxuXHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0d2lkdGg6IDUyOHB4O1xyXG5cdH1cclxuYDtcclxuXHJcbmNvbnN0IElubmVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG92ZXJmbG93OiBzY3JvbGwgIWltcG9ydGFudDtcclxuXHRwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0cGFkZGluZy1yaWdodDogMTZweDtcclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBSb3cgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdGdhcDogMjNweDtcclxuXHR3aWR0aDogMTAwJTtcclxuYDtcclxuXHJcbmNvbnN0IEl0ZW1zTGlzdEhlYWRlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1hcmdpbi10b3A6IDY2cHg7XHJcblxyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdGZsZXgtZmxvdzogcm93O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5cdH1cclxuYDtcclxuXHJcbmNvbnN0IEl0ZW1MaXN0SGVhZGVyID0gc3R5bGVkLmg0YFxyXG5cdCR7aXRlbWxpc3RIZWFkZXJUZXh0U3R5bGV9O1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy5ncmV5WzddfTtcclxuXHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0ZmxleC1mbG93OiByb3c7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcblx0XHR3aWR0aDogYXV0bztcclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBJdGVtc0ZpZWxkTGlzdCA9IHN0eWxlZC5kaXZgXHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWZsb3c6IGNvbHVtbjtcclxuXHRnYXA6IDI0cHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcbmA7XHJcblxyXG5jb25zdCBGb3JtQnV0dG9uc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRoZWlnaHQ6IDkxcHg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cdGdhcDogOHB4O1xyXG5cdG1hcmdpbi10b3A6IDI0cHg7XHJcblxyXG5cdHBhZGRpbmctcmlnaHQ6IDhweDtcclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLnRhYmxldEFuZFVwfSB7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG5cdH1cclxuYDtcclxuXHJcbmNvbnN0IEFkZEl0ZW1CdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBgO1xyXG5cclxuY29uc3QgU2F2ZURyYWZ0QnV0dG9uID0gc3R5bGVkKEJ1dHRvbilgXHJcblx0LyogZGlzcGxheTogbm9uZTsgKi9cclxuYDtcclxuIl0sIm5hbWVzIjpbInl1cFJlc29sdmVyIiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwiRm9ybVByb3ZpZGVyIiwidXNlRmllbGRBcnJheSIsInVzZUZvcm0iLCJzdHlsZWQiLCJpbml0YWxWYWx1ZXMiLCJmb3JtU2NoZW1hIiwiSW52b2ljZXNDb250ZXh0IiwiRXJyb3IiLCJCdXR0b24iLCJEYXRlRmllbGQiLCJGb3JtRmllbGQiLCJJdGVtRmllbGQiLCJGb3JtU2VjdGlvbiIsImZvcm1IZWFkZXJUZXh0U3R5bGUiLCJpdGVtbGlzdEhlYWRlclRleHRTdHlsZSIsIkVkaXRJbnZvaWNlRm9ybSIsInNldERyYXdlck9wZW4iLCJpbnZvaWNlIiwiYWRkSW52b2ljZSIsInVwZGF0ZUludm9pY2UiLCJtZXRob2RzIiwiZGVmYXVsdFZhbHVlcyIsInJlc29sdmVyIiwibW9kZSIsImNvbnRyb2wiLCJuYW1lIiwiZmllbGRzIiwiYXBwZW5kIiwicmVtb3ZlIiwic3VibWl0Rm9ybURhdGEiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQWRkSW52b2ljZSIsImZvcm1TdGF0ZSIsImVycm9ycyIsImlzVmFsaWQiLCJpZCIsImludm9pY2VfZGF0ZSIsImludm9pY2VfZHVlX2RhdGUiLCJkZXNjcmlwdGlvbiIsImNsaWVudF9uYW1lIiwiY2xpZW50X2VtYWlsIiwic3RhdHVzIiwidXNlcl9zdHJlZXRfYWRkcmVzcyIsInVzZXJfY2l0eSIsInVzZXJfcG9zdF9jb2RlIiwidXNlcl9jb3VudHJ5IiwiY2xpZW50X3N0cmVldF9hZGRyZXNzIiwiY2xpZW50X2NpdHkiLCJjbGllbnRfcG9zdF9jb2RlIiwiY2xpZW50X2NvdW50cnkiLCJpbnZvaWNlX2l0ZW1zIiwicXVhbnRpdHkiLCJwcmljZSIsImhhbmRsZVVwZGF0ZUludm9pY2UiLCJnZXRWYWx1ZXMiLCJtaW5XaWR0aCIsImZsZXgiLCJtZXNzYWdlIiwibWFwIiwiaXRlbSIsIml0ZW1JbmRleCIsIkZvcm1IZWFkZXIiLCJoMiIsInAiLCJ0aGVtZSIsIkNPTE9SUyIsImdyZXkiLCJRVUVSSUVTIiwidGFibGV0QW5kVXAiLCJTdHlsZWRGb3JtIiwiZm9ybSIsIklubmVyV3JhcHBlciIsImRpdiIsIlJvdyIsIkl0ZW1zTGlzdEhlYWRlcldyYXBwZXIiLCJJdGVtTGlzdEhlYWRlciIsImg0IiwiSXRlbXNGaWVsZExpc3QiLCJGb3JtQnV0dG9uc0NvbnRhaW5lciIsIkFkZEl0ZW1CdXR0b24iLCJTYXZlRHJhZnRCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9