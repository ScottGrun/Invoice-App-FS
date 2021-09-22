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
      addInvoice = _useContext.addInvoice;

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


  var submitFormData = function submitFormData(data) {
    return console.log(data);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.FormProvider, _objectSpread(_objectSpread({}, methods), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(StyledForm, {
      onSubmit: methods.handleSubmit(submitFormData),
      children: [invoice && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(FormHeader, {
        children: ["Edit ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("span", {
          children: "#"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 12
        }, _this), invoice.id]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
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
            lineNumber: 59,
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
              lineNumber: 61,
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
              lineNumber: 67,
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
              lineNumber: 73,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Form_FormSection__WEBPACK_IMPORTED_MODULE_12__.FormSection, {
          label: "Bill To",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Form_Fields_FormField__WEBPACK_IMPORTED_MODULE_10__.FormField, {
            type: "text",
            label: "Client's Name",
            name: "client_name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Form_Fields_FormField__WEBPACK_IMPORTED_MODULE_10__.FormField, {
            type: "email",
            label: "Client's Email",
            name: "client_email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Form_Fields_FormField__WEBPACK_IMPORTED_MODULE_10__.FormField, {
            type: "text",
            label: "Street Address",
            name: "client_street_address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
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
              lineNumber: 87,
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
              lineNumber: 93,
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
              lineNumber: 99,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
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
              lineNumber: 110,
              columnNumber: 8
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Form_Fields_DateField__WEBPACK_IMPORTED_MODULE_9__.DateField, {
              style: {
                flex: 1
              },
              name: "invoice_due_date",
              label: "Invoice Due Date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 109,
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
            lineNumber: 114,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(ItemsListHeaderWrapper, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(ItemListHeader, {
              children: "Item List"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 8
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_Error__WEBPACK_IMPORTED_MODULE_7__.Error, {
              children: (_methods$formState$er = methods.formState.errors.invoice_items) === null || _methods$formState$er === void 0 ? void 0 : _methods$formState$er.message
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(ItemsFieldList, {
            children: [fields.map(function (item, itemIndex) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Form_Fields_ItemField__WEBPACK_IMPORTED_MODULE_11__.ItemField, {
                idx: itemIndex,
                remove: remove
              }, item.id, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
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
              lineNumber: 129,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
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
          lineNumber: 140,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(SaveDraftButton, {
          type: "submit",
          variant: "tertiary",
          children: "Save as Draft"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.Button, {
          type: "submit",
          variant: "primary",
          children: "Save Changes"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 4
    }, _this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 3
  }, _this);
};

_s(EditInvoiceForm, "vJcDaFTD55Y/8AcYJfGmk1VNbPU=", false, function () {
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


/***/ }),

/***/ "./context/InvoicesContext.tsx":
/*!*************************************!*\
  !*** ./context/InvoicesContext.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoicesContext": function() { return /* binding */ InvoicesContext; },
/* harmony export */   "InvoicesProvider": function() { return /* binding */ InvoicesProvider; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var data_demo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! data/demo */ "./data/demo.js");
/* harmony import */ var _invoiceReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoiceReducer */ "./context/invoiceReducer.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\scott\\Documents\\GitHub\\Invoice-App-FS\\context\\InvoicesContext.tsx",
    _this = undefined,
    _s = $RefreshSig$();





// Context
var InvoicesContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  invoices: [],
  addInvoice: function addInvoice() {},
  deleteInvoice: function deleteInvoice() {},
  updateInvoice: function updateInvoice() {}
}); // const initalState = {
// 	invoices: [],
// };

var InvoicesProvider = function InvoicesProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(_invoiceReducer__WEBPACK_IMPORTED_MODULE_2__.invoiceReducer, []),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var localInvoices = JSON.parse(localStorage.getItem('invoices')); // TODO: Add check for demo flag here

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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    localStorage.setItem('invoices', JSON.stringify(state));
  }, [state]); // Turn dispatch actions into funcs for context to make things easier to use also ensures they are typed

  var addInvoice = function addInvoice(invoice) {
    dispatch({
      type: 'ADD',
      payload: invoice
    });
  };

  var deleteInvoice = function deleteInvoice(id) {
    dispatch({
      type: 'DELETE',
      payload: id
    });
  };

  var updateInvoice = function updateInvoice(invoice) {
    dispatch({
      type: 'UPDATE',
      payload: invoice
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(InvoicesContext.Provider, {
    value: {
      invoices: state,
      addInvoice: addInvoice,
      deleteInvoice: deleteInvoice,
      updateInvoice: updateInvoice
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 3
  }, _this);
};

_s(InvoicesProvider, "bvwMX2dLV1mpx4qg0VQItmezWQ8=");

_c = InvoicesProvider;

var _c;

$RefreshReg$(_c, "InvoicesProvider");

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

/***/ "./context/invoiceReducer.ts":
/*!***********************************!*\
  !*** ./context/invoiceReducer.ts ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "invoiceReducer": function() { return /* binding */ invoiceReducer; }
/* harmony export */ });
/* harmony import */ var C_Users_scott_Documents_GitHub_Invoice_App_FS_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var invoiceReducer = function invoiceReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      if (Array.isArray(action.payload)) {
        return [].concat((0,C_Users_scott_Documents_GitHub_Invoice_App_FS_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(state), (0,C_Users_scott_Documents_GitHub_Invoice_App_FS_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(action.payload));
      } else {
        return [].concat((0,C_Users_scott_Documents_GitHub_Invoice_App_FS_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(state), [action.payload]);
      }

    case 'DELETE':
      return state.invoices.filter(function (invoice) {
        return invoice.id !== action.payload;
      });

    case 'UPDATE':
      return state.map(function (invoice) {
        if (invoice.id === action.payload.id) {
          return action.payload;
        } else {
          return invoice;
        }
      });

    default:
      throw new Error("Unknown action type".concat(action));
  }
};

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

/***/ "./data/demo.js":
/*!**********************!*\
  !*** ./data/demo.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "demoInvoicesData": function() { return /* binding */ demoInvoicesData; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var demoInvoicesData = [{
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

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithoutHoles; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArray; }
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableSpread; }
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toConsumableArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__.default)(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__.default)(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTgxYzc3NDhiM2Q0N2U1ZWM5ZDguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVFPLElBQU1rQixlQUFvQyxHQUFHLFNBQXZDQSxlQUF1QyxPQUFnQztBQUFBOztBQUFBOztBQUFBLE1BQTdCQyxhQUE2QixRQUE3QkEsYUFBNkI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7O0FBQ25GLG9CQUF1QmxCLGlEQUFVLENBQUNPLG9FQUFELENBQWpDO0FBQUEsTUFBUVksVUFBUixlQUFRQSxVQUFSOztBQUNBLE1BQU1DLE9BQU8sR0FBR2pCLHdEQUFPLENBQUM7QUFDdkJrQixJQUFBQSxhQUFhLEVBQUVoQixrRUFEUTtBQUV2QmlCLElBQUFBLFFBQVEsRUFBRXhCLG9FQUFXLENBQUNRLG9FQUFELENBRkU7QUFHdkJpQixJQUFBQSxJQUFJLEVBQUU7QUFIaUIsR0FBRCxDQUF2Qjs7QUFNQSx1QkFBbUNyQiw4REFBYSxDQUFDO0FBQ2hEc0IsSUFBQUEsT0FBTyxFQUFFSixPQUFPLENBQUNJLE9BRCtCO0FBRWhEQyxJQUFBQSxJQUFJLEVBQUU7QUFGMEMsR0FBRCxDQUFoRDtBQUFBLE1BQVFDLE1BQVIsa0JBQVFBLE1BQVI7QUFBQSxNQUFnQkMsTUFBaEIsa0JBQWdCQSxNQUFoQjtBQUFBLE1BQXdCQyxNQUF4QixrQkFBd0JBLE1BQXhCLENBUm1GLENBWW5GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLElBQUQ7QUFBQSxXQUFlQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWixDQUFmO0FBQUEsR0FBdkI7O0FBRUEsc0JBQ0Ms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RTtBQUhSLEdBRGMsRUFNZDtBQUNDcEIsSUFBQUEsSUFBSSxFQUFFLGNBRFA7QUFFQ21CLElBQUFBLFFBQVEsRUFBRSxDQUZYO0FBR0NDLElBQUFBLEtBQUssRUFBRTtBQUhSLEdBTmM7QUFoQmhCLENBekIrQixDQUF6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FRO0FBQ2Y7O0FBRUEseUNBQXlDLFNBQVM7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNScUQ7QUFDdEM7QUFDZixpQ0FBaUMsNkRBQWdCO0FBQ2pEOzs7Ozs7Ozs7Ozs7OztBQ0hlO0FBQ2Y7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNGZTtBQUNmO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Z1RDtBQUNKO0FBQ3NCO0FBQ2xCO0FBQ3hDO0FBQ2YsU0FBUyw4REFBaUIsU0FBUyw0REFBZSxTQUFTLHVFQUEwQixTQUFTLDhEQUFpQjtBQUMvRzs7Ozs7Ozs7Ozs7Ozs7O0FDTnFEO0FBQ3RDO0FBQ2Y7QUFDQSxvQ0FBb0MsNkRBQWdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRiw2REFBZ0I7QUFDdEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtL0VkaXRJbnZvaWNlRm9ybS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHQvSW52b2ljZXNDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9pbnZvaWNlUmVkdWNlci50cyIsIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS9kZW1vLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHl1cFJlc29sdmVyIH0gZnJvbSAnQGhvb2tmb3JtL3Jlc29sdmVycy95dXAnO1xyXG5pbXBvcnQgUmVhY3QsIHsgRGlzcGF0Y2gsIEZDLCBTZXRTdGF0ZUFjdGlvbiwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtUHJvdmlkZXIsIHVzZUZpZWxkQXJyYXksIHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCB7IGluaXRhbFZhbHVlcyB9IGZyb20gJ2NvbmZpZy9Gb3JtL0luaXRhbFZhbHVlcyc7XHJcbmltcG9ydCB7IGZvcm1TY2hlbWEgfSBmcm9tICdjb25maWcvRm9ybS9WYWxpZGF0aW9uU2NoZW1hJztcclxuaW1wb3J0IHsgSW52b2ljZXNDb250ZXh0IH0gZnJvbSAnY29udGV4dC9JbnZvaWNlc0NvbnRleHQnO1xyXG5cclxuaW1wb3J0IHsgRXJyb3IgfSBmcm9tICcuL0Vycm9yJztcclxuXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0AvY29tcG9uZW50cy9CdXR0b24nO1xyXG5pbXBvcnQgeyBEYXRlRmllbGQgfSBmcm9tICdAL2NvbXBvbmVudHMvRm9ybS9GaWVsZHMvRGF0ZUZpZWxkJztcclxuaW1wb3J0IHsgRm9ybUZpZWxkIH0gZnJvbSAnQC9jb21wb25lbnRzL0Zvcm0vRmllbGRzL0Zvcm1GaWVsZCc7XHJcbmltcG9ydCB7IEl0ZW1GaWVsZCB9IGZyb20gJ0AvY29tcG9uZW50cy9Gb3JtL0ZpZWxkcy9JdGVtRmllbGQnO1xyXG5pbXBvcnQgeyBGb3JtU2VjdGlvbiB9IGZyb20gJ0AvY29tcG9uZW50cy9Gb3JtL0Zvcm1TZWN0aW9uJztcclxuaW1wb3J0IHsgZm9ybUhlYWRlclRleHRTdHlsZSwgaXRlbWxpc3RIZWFkZXJUZXh0U3R5bGUgfSBmcm9tICdAL3N0eWxlcy90eXBvZ3JhcGh5JztcclxuaW1wb3J0IHsgSW52b2ljZSB9IGZyb20gJ0AvdHlwZXMvaW5kZXgnO1xyXG5cclxuaW50ZXJmYWNlIEVkaXRJbnZvaWNlRm9ybSB7XHJcblx0c2V0RHJhd2VyT3BlbjogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+O1xyXG5cdGludm9pY2U6IEludm9pY2UgfCB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBFZGl0SW52b2ljZUZvcm06IEZDPEVkaXRJbnZvaWNlRm9ybT4gPSAoeyBzZXREcmF3ZXJPcGVuLCBpbnZvaWNlIH0pID0+IHtcclxuXHRjb25zdCB7IGFkZEludm9pY2UgfSA9IHVzZUNvbnRleHQoSW52b2ljZXNDb250ZXh0KTtcclxuXHRjb25zdCBtZXRob2RzID0gdXNlRm9ybSh7XHJcblx0XHRkZWZhdWx0VmFsdWVzOiBpbml0YWxWYWx1ZXMsXHJcblx0XHRyZXNvbHZlcjogeXVwUmVzb2x2ZXIoZm9ybVNjaGVtYSksXHJcblx0XHRtb2RlOiAnb25CbHVyJyxcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgeyBmaWVsZHMsIGFwcGVuZCwgcmVtb3ZlIH0gPSB1c2VGaWVsZEFycmF5KHtcclxuXHRcdGNvbnRyb2w6IG1ldGhvZHMuY29udHJvbCxcclxuXHRcdG5hbWU6ICdpbnZvaWNlX2l0ZW1zJyxcclxuXHR9KTtcclxuXHQvLyBUT0RPOiBGaXggcHJpY2UgaW5wdXQgdHJlYXRpbmcgY2VudHMgYXMgZG9sbGFycyBvaCBhbHNvIHRoZSBkYXRlIGlucHV0IGlzIGZ1Y2tlZCBnb29kIGx1Y2tcclxuXHQvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdC8vIFx0bWV0aG9kcy5yZXNldCh7XHJcblx0Ly8gXHRcdC4uLmludm9pY2UsXHJcblx0Ly8gXHRcdGludm9pY2VfaXRlbXM6IGludm9pY2U/Lmludm9pY2VfaXRlbXMsXHJcblx0Ly8gXHR9KTtcclxuXHQvLyB9LCBbaW52b2ljZSwgbWV0aG9kc10pO1xyXG5cclxuXHRjb25zdCBzdWJtaXRGb3JtRGF0YSA9IChkYXRhOiBhbnkpID0+IGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEZvcm1Qcm92aWRlciB7Li4ubWV0aG9kc30+XHJcblx0XHRcdDxTdHlsZWRGb3JtIG9uU3VibWl0PXttZXRob2RzLmhhbmRsZVN1Ym1pdChzdWJtaXRGb3JtRGF0YSl9PlxyXG5cdFx0XHRcdHtpbnZvaWNlICYmIChcclxuXHRcdFx0XHRcdDxGb3JtSGVhZGVyPlxyXG5cdFx0XHRcdFx0XHRFZGl0IDxzcGFuPiM8L3NwYW4+XHJcblx0XHRcdFx0XHRcdHtpbnZvaWNlLmlkfVxyXG5cdFx0XHRcdFx0PC9Gb3JtSGVhZGVyPlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdFx0PElubmVyV3JhcHBlcj5cclxuXHRcdFx0XHRcdHsvKiBCaWxsIEZyb20gKi99XHJcblx0XHRcdFx0XHQ8Rm9ybVNlY3Rpb24gbGFiZWw9XCJCaWxsIEZyb21cIj5cclxuXHRcdFx0XHRcdFx0PEZvcm1GaWVsZCB0eXBlPVwidGV4dFwiIGxhYmVsPVwiU3RyZWV0IEFkZHJlc3NcIiBuYW1lPVwidXNlcl9zdHJlZXRfYWRkcmVzc1wiIC8+XHJcblx0XHRcdFx0XHRcdDxSb3c+XHJcblx0XHRcdFx0XHRcdFx0PEZvcm1GaWVsZFxyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgbWluV2lkdGg6ICcxNDBweCcsIGZsZXg6IDEgfX1cclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiQ2l0eVwiXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwidXNlcl9jaXR5XCJcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxGb3JtRmllbGRcclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IG1pbldpZHRoOiAnMTQwcHgnLCBmbGV4OiAxIH19XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlBvc3QgQ29kZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwidXNlcl9wb3N0X2NvZGVcIlxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PEZvcm1GaWVsZFxyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgbWluV2lkdGg6ICcxNTJweCcsIGZsZXg6IDEgfX1cclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiQ291bnRyeVwiXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwidXNlcl9jb3VudHJ5XCJcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L1Jvdz5cclxuXHRcdFx0XHRcdDwvRm9ybVNlY3Rpb24+XHJcblx0XHRcdFx0XHR7LyogQmlsbCBUbyAqL31cclxuXHRcdFx0XHRcdDxGb3JtU2VjdGlvbiBsYWJlbD1cIkJpbGwgVG9cIj5cclxuXHRcdFx0XHRcdFx0PEZvcm1GaWVsZCB0eXBlPVwidGV4dFwiIGxhYmVsPVwiQ2xpZW50J3MgTmFtZVwiIG5hbWU9XCJjbGllbnRfbmFtZVwiIC8+XHJcblx0XHRcdFx0XHRcdDxGb3JtRmllbGQgdHlwZT1cImVtYWlsXCIgbGFiZWw9XCJDbGllbnQncyBFbWFpbFwiIG5hbWU9XCJjbGllbnRfZW1haWxcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8Rm9ybUZpZWxkIHR5cGU9XCJ0ZXh0XCIgbGFiZWw9XCJTdHJlZXQgQWRkcmVzc1wiIG5hbWU9XCJjbGllbnRfc3RyZWV0X2FkZHJlc3NcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8Um93PlxyXG5cdFx0XHRcdFx0XHRcdDxGb3JtRmllbGRcclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IG1pbldpZHRoOiAnMTQwcHgnLCBmbGV4OiAxIH19XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkNpdHlcIlxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImNsaWVudF9jaXR5XCJcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxGb3JtRmllbGRcclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IG1pbldpZHRoOiAnMTQwcHgnLCBmbGV4OiAxIH19XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlBvc3QgQ29kZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiY2xpZW50X3Bvc3RfY29kZVwiXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUZpZWxkXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBtaW5XaWR0aDogJzE1MnB4JywgZmxleDogMSB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJDb3VudHJ5XCJcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJjbGllbnRfY291bnRyeVwiXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9Sb3c+XHJcblx0XHRcdFx0XHQ8L0Zvcm1TZWN0aW9uPlxyXG5cclxuXHRcdFx0XHRcdDxGb3JtU2VjdGlvbiBsYWJlbD1cIkludm9pY2UgRGV0YWlsc1wiPlxyXG5cdFx0XHRcdFx0XHQ8Um93PlxyXG5cdFx0XHRcdFx0XHRcdDxEYXRlRmllbGQgc3R5bGU9e3sgZmxleDogMSB9fSBuYW1lPVwiaW52b2ljZV9kYXRlXCIgbGFiZWw9XCJJbnZvaWNlIERhdGVcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdDxEYXRlRmllbGQgc3R5bGU9e3sgZmxleDogMSB9fSBuYW1lPVwiaW52b2ljZV9kdWVfZGF0ZVwiIGxhYmVsPVwiSW52b2ljZSBEdWUgRGF0ZVwiIC8+XHJcblx0XHRcdFx0XHRcdDwvUm93PlxyXG5cclxuXHRcdFx0XHRcdFx0PEZvcm1GaWVsZFxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7IG1pbldpZHRoOiAnMTUycHgnLCBmbGV4OiAxIH19XHJcblx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdGxhYmVsPVwiUHJvamVjdCBEZXNjcmlwdGlvblwiXHJcblx0XHRcdFx0XHRcdFx0bmFtZT1cImRlc2NyaXB0aW9uXCJcclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PEl0ZW1zTGlzdEhlYWRlcldyYXBwZXI+XHJcblx0XHRcdFx0XHRcdFx0PEl0ZW1MaXN0SGVhZGVyPkl0ZW0gTGlzdDwvSXRlbUxpc3RIZWFkZXI+XHJcblx0XHRcdFx0XHRcdFx0ey8qIEB0cy1leHBlY3QtZXJyb3I6IGlnbm9yZSB3cm9uZyBzY2hlbWEgd2FybmluZyAqL31cclxuXHRcdFx0XHRcdFx0XHQ8RXJyb3I+e21ldGhvZHMuZm9ybVN0YXRlLmVycm9ycy5pbnZvaWNlX2l0ZW1zPy5tZXNzYWdlfTwvRXJyb3I+XHJcblx0XHRcdFx0XHRcdDwvSXRlbXNMaXN0SGVhZGVyV3JhcHBlcj5cclxuXHRcdFx0XHRcdFx0PEl0ZW1zRmllbGRMaXN0PlxyXG5cdFx0XHRcdFx0XHRcdHtmaWVsZHMubWFwKChpdGVtLCBpdGVtSW5kZXgpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdDxJdGVtRmllbGQga2V5PXtpdGVtLmlkfSBpZHg9e2l0ZW1JbmRleH0gcmVtb3ZlPXtyZW1vdmV9IC8+XHJcblx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdFx0PEFkZEl0ZW1CdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBhcHBlbmQoeyBuYW1lOiAnJywgcXVhbnRpdHk6IDAsIHByaWNlOiAwIH0pfVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdCsgQWRkIE5ldyBJdGVtXHJcblx0XHRcdFx0XHRcdFx0PC9BZGRJdGVtQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L0l0ZW1zRmllbGRMaXN0PlxyXG5cdFx0XHRcdFx0PC9Gb3JtU2VjdGlvbj5cclxuXHRcdFx0XHQ8L0lubmVyV3JhcHBlcj5cclxuXHRcdFx0XHQ8Rm9ybUJ1dHRvbnNDb250YWluZXI+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldERyYXdlck9wZW4oZmFsc2UpfSB0eXBlPVwiYnV0dG9uXCIgdmFyaWFudD1cInNlY29uZGFyeVwiPlxyXG5cdFx0XHRcdFx0XHRDYW5jZWxcclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0PFNhdmVEcmFmdEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cInRlcnRpYXJ5XCI+XHJcblx0XHRcdFx0XHRcdFNhdmUgYXMgRHJhZnRcclxuXHRcdFx0XHRcdDwvU2F2ZURyYWZ0QnV0dG9uPlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cInByaW1hcnlcIj5cclxuXHRcdFx0XHRcdFx0U2F2ZSBDaGFuZ2VzXHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8L0Zvcm1CdXR0b25zQ29udGFpbmVyPlxyXG5cdFx0XHQ8L1N0eWxlZEZvcm0+XHJcblx0XHQ8L0Zvcm1Qcm92aWRlcj5cclxuXHQpO1xyXG59O1xyXG5cclxuY29uc3QgRm9ybUhlYWRlciA9IHN0eWxlZC5oMmBcclxuXHQke2Zvcm1IZWFkZXJUZXh0U3R5bGV9O1xyXG5cdHBhZGRpbmctdG9wOiAyNHB4O1xyXG5cdHNwYW4ge1xyXG5cdFx0Y29sb3I6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLmdyZXlbMV19O1xyXG5cdH1cclxuXHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0cGFkZGluZy10b3A6IDU2cHg7XHJcblx0fVxyXG5gO1xyXG5cclxuLy8gRm9ybVxyXG5jb25zdCBTdHlsZWRGb3JtID0gc3R5bGVkLmZvcm1gXHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZmxvdzogY29sdW1uO1xyXG5cdHBhZGRpbmc6IDA7XHJcblxyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdHdpZHRoOiA1MjhweDtcclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBJbm5lcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG5cdGhlaWdodDogMTAwJTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRvdmVyZmxvdzogc2Nyb2xsICFpbXBvcnRhbnQ7XHJcblx0cGFkZGluZy1yaWdodDogOHB4O1xyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgUm93ID0gc3R5bGVkLmRpdmBcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxuXHRnYXA6IDIzcHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcbmA7XHJcblxyXG5jb25zdCBJdGVtc0xpc3RIZWFkZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXJnaW4tdG9wOiA2NnB4O1xyXG5cclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLnRhYmxldEFuZFVwfSB7XHJcblx0XHRmbGV4LWZsb3c6IHJvdztcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBJdGVtTGlzdEhlYWRlciA9IHN0eWxlZC5oNGBcclxuXHQke2l0ZW1saXN0SGVhZGVyVGV4dFN0eWxlfTtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR3aWR0aDogMTAwJTtcclxuXHRjb2xvcjogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMuZ3JleVs3XX07XHJcblxyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdGZsZXgtZmxvdzogcm93O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5cdFx0d2lkdGg6IGF1dG87XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgSXRlbXNGaWVsZExpc3QgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1mbG93OiBjb2x1bW47XHJcblx0Z2FwOiAyNHB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybUJ1dHRvbnNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0aGVpZ2h0OiA5MXB4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHRnYXA6IDhweDtcclxuXHRtYXJnaW4tdG9wOiAyNHB4O1xyXG5cclxuXHRwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0cGFkZGluZy1yaWdodDogMTZweDtcclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBBZGRJdGVtQnV0dG9uID0gc3R5bGVkKEJ1dHRvbilgYDtcclxuXHJcbmNvbnN0IFNhdmVEcmFmdEJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbmA7XHJcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIEZDLCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgZGVtb0ludm9pY2VzRGF0YSB9IGZyb20gJ2RhdGEvZGVtbyc7XHJcblxyXG5pbXBvcnQgeyBJbnZvaWNlIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5cclxuaW1wb3J0IHsgaW52b2ljZVJlZHVjZXIgfSBmcm9tICcuL2ludm9pY2VSZWR1Y2VyJztcclxuXHJcbnR5cGUgSW52b2ljZXNDb250ZXh0U3RhdGVUeXBlID0ge1xyXG5cdGludm9pY2VzOiBJbnZvaWNlW10gfCBbXTtcclxuXHRhZGRJbnZvaWNlOiAoaW52b2ljZTogSW52b2ljZSkgPT4gdm9pZDtcclxuXHRkZWxldGVJbnZvaWNlOiAoaWQ6IHN0cmluZykgPT4gdm9pZDtcclxuXHR1cGRhdGVJbnZvaWNlOiAoaW52b2ljZTogSW52b2ljZSkgPT4gdm9pZDtcclxufTtcclxuXHJcbi8vIENvbnRleHRcclxuZXhwb3J0IGNvbnN0IEludm9pY2VzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8SW52b2ljZXNDb250ZXh0U3RhdGVUeXBlPih7XHJcblx0aW52b2ljZXM6IFtdLFxyXG5cdGFkZEludm9pY2U6ICgpID0+IHt9LFxyXG5cdGRlbGV0ZUludm9pY2U6ICgpID0+IHt9LFxyXG5cdHVwZGF0ZUludm9pY2U6ICgpID0+IHt9LFxyXG59KTtcclxuXHJcbi8vIGNvbnN0IGluaXRhbFN0YXRlID0ge1xyXG4vLyBcdGludm9pY2VzOiBbXSxcclxuLy8gfTtcclxuXHJcbmV4cG9ydCBjb25zdCBJbnZvaWNlc1Byb3ZpZGVyOiBGQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuXHRjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoaW52b2ljZVJlZHVjZXIsIFtdKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0IGxvY2FsSW52b2ljZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbnZvaWNlcycpKTtcclxuXHRcdC8vIFRPRE86IEFkZCBjaGVjayBmb3IgZGVtbyBmbGFnIGhlcmVcclxuXHJcblx0XHRpZiAobG9jYWxJbnZvaWNlcyAhPT0gbnVsbCkge1xyXG5cdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdBREQnLCBwYXlsb2FkOiBsb2NhbEludm9pY2VzIH0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnQUREJywgcGF5bG9hZDogZGVtb0ludm9pY2VzRGF0YSB9KTtcclxuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ludm9pY2VzJywgSlNPTi5zdHJpbmdpZnkoZGVtb0ludm9pY2VzRGF0YSkpO1xyXG5cdFx0fVxyXG5cdH0sIFtdKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbnZvaWNlcycsIEpTT04uc3RyaW5naWZ5KHN0YXRlKSk7XHJcblx0fSwgW3N0YXRlXSk7XHJcblxyXG5cdC8vIFR1cm4gZGlzcGF0Y2ggYWN0aW9ucyBpbnRvIGZ1bmNzIGZvciBjb250ZXh0IHRvIG1ha2UgdGhpbmdzIGVhc2llciB0byB1c2UgYWxzbyBlbnN1cmVzIHRoZXkgYXJlIHR5cGVkXHJcblx0Y29uc3QgYWRkSW52b2ljZSA9IChpbnZvaWNlOiBJbnZvaWNlIHwgSW52b2ljZVtdKSA9PiB7XHJcblx0XHRkaXNwYXRjaCh7IHR5cGU6ICdBREQnLCBwYXlsb2FkOiBpbnZvaWNlIH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGRlbGV0ZUludm9pY2UgPSAoaWQ6IHN0cmluZykgPT4ge1xyXG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiAnREVMRVRFJywgcGF5bG9hZDogaWQgfSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgdXBkYXRlSW52b2ljZSA9IChpbnZvaWNlOiBJbnZvaWNlKSA9PiB7XHJcblx0XHRkaXNwYXRjaCh7IHR5cGU6ICdVUERBVEUnLCBwYXlsb2FkOiBpbnZvaWNlIH0pO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8SW52b2ljZXNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGludm9pY2VzOiBzdGF0ZSwgYWRkSW52b2ljZSwgZGVsZXRlSW52b2ljZSwgdXBkYXRlSW52b2ljZSB9fT5cclxuXHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0PC9JbnZvaWNlc0NvbnRleHQuUHJvdmlkZXI+XHJcblx0KTtcclxufTtcclxuIiwiaW1wb3J0IHsgSW52b2ljZSB9IGZyb20gJy4uL3R5cGVzJztcclxuXHJcbnR5cGUgSW52b2ljZUFjdGlvbnMgPVxyXG5cdHwgeyB0eXBlOiAnQUREJzsgcGF5bG9hZDogSW52b2ljZSB8IEludm9pY2VbXSB9XHJcblx0fCB7IHR5cGU6ICdERUxFVEUnOyBwYXlsb2FkOiBzdHJpbmcgfVxyXG5cdHwgeyB0eXBlOiAnVVBEQVRFJzsgcGF5bG9hZDogSW52b2ljZSB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGludm9pY2VSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb246IEludm9pY2VBY3Rpb25zKSA9PiB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSAnQUREJzpcclxuXHRcdFx0aWYgKEFycmF5LmlzQXJyYXkoYWN0aW9uLnBheWxvYWQpKSB7XHJcblx0XHRcdFx0cmV0dXJuIFsuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWRdO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBbLi4uc3RhdGUsIGFjdGlvbi5wYXlsb2FkXTtcclxuXHRcdFx0fVxyXG5cdFx0Y2FzZSAnREVMRVRFJzpcclxuXHRcdFx0cmV0dXJuIHN0YXRlLmludm9pY2VzLmZpbHRlcigoaW52b2ljZTogSW52b2ljZSkgPT4gaW52b2ljZS5pZCAhPT0gYWN0aW9uLnBheWxvYWQpO1xyXG5cdFx0Y2FzZSAnVVBEQVRFJzpcclxuXHRcdFx0cmV0dXJuIHN0YXRlLm1hcCgoaW52b2ljZTogSW52b2ljZSkgPT4ge1xyXG5cdFx0XHRcdGlmIChpbnZvaWNlLmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gaW52b2ljZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihgVW5rbm93biBhY3Rpb24gdHlwZSR7YWN0aW9ufWApO1xyXG5cdH1cclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGRlbW9JbnZvaWNlc0RhdGEgPSBbXHJcblx0e1xyXG5cdFx0aWQ6ICdSVDMwODAnLFxyXG5cdFx0aW52b2ljZV9kYXRlOiAnVHVlIFNlcCAxIDIwMDInLFxyXG5cdFx0aW52b2ljZV9kdWVfZGF0ZTogJ1R1ZSBTZXAgMjEgMjAyMScsXHJcblx0XHRkZXNjcmlwdGlvbjogJ1JlLWJyYW5kaW5nJyxcclxuXHRcdGNsaWVudF9uYW1lOiAnSmVuc2VuIEh1YW5nJyxcclxuXHRcdGNsaWVudF9lbWFpbDogJ2plbnNlbmhAbWFpbC5jb20nLFxyXG5cdFx0c3RhdHVzOiAnUGFpZCcsXHJcblx0XHR1c2VyX3N0cmVldF9hZGRyZXNzOiAnMTkgVW5pb24gVGVycmFjZScsXHJcblx0XHR1c2VyX2NpdHk6ICdMb25kb24nLFxyXG5cdFx0dXNlcl9wb3N0X2NvZGU6ICdFMSAzRVonLFxyXG5cdFx0dXNlcl9jb3VudHJ5OiAnVW5pdGVkIEtpbmdkb20nLFxyXG5cdFx0Y2xpZW50X3N0cmVldF9hZGRyZXNzOiAnMTA2IEtlbmRlbGwgU3RyZWV0JyxcclxuXHRcdGNsaWVudF9jaXR5OiAnU2hhcnJpbmd0b24nLFxyXG5cdFx0Y2xpZW50X3Bvc3RfY29kZTogJ05SMjQgNVdRJyxcclxuXHRcdGNsaWVudF9jb3VudHJ5OiAnVW5pdGVkIEtpbmdkb20nLFxyXG5cdFx0aW52b2ljZV9pdGVtczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0bmFtZTogJ0JyYW5kIEd1aWRlbGluZXMnLFxyXG5cdFx0XHRcdHF1YW50aXR5OiAyLFxyXG5cdFx0XHRcdHByaWNlOiA1MDAsXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQ6ICdSVDMwODB6JyxcclxuXHRcdGludm9pY2VfZGF0ZTogJ1R1ZSBTZXAgMSAyMDIyJyxcclxuXHRcdGludm9pY2VfZHVlX2RhdGU6ICdUdWUgU2VwIDIxIDIwMjEnLFxyXG5cdFx0ZGVzY3JpcHRpb246ICdMb2dvIFdvcmsnLFxyXG5cdFx0Y2xpZW50X25hbWU6ICdHYWJlIE5ld2wnLFxyXG5cdFx0Y2xpZW50X2VtYWlsOiAnaGFtbWVyQG1haWwuY29tJyxcclxuXHRcdHN0YXR1czogJ1BlbmRpbmcnLFxyXG5cdFx0dXNlcl9zdHJlZXRfYWRkcmVzczogJzM5IENyZXMgVGVycmFjZScsXHJcblx0XHR1c2VyX2NpdHk6ICdWYW5jb3V2ZXInLFxyXG5cdFx0dXNlcl9wb3N0X2NvZGU6ICdFMSAzRVonLFxyXG5cdFx0dXNlcl9jb3VudHJ5OiAnQ2FuYWRhJyxcclxuXHRcdGNsaWVudF9zdHJlZXRfYWRkcmVzczogJzI2IEdheiBTdHJlZXQnLFxyXG5cdFx0Y2xpZW50X2NpdHk6ICdCbGVtZGFsZScsXHJcblx0XHRjbGllbnRfcG9zdF9jb2RlOiAnTlIyNCA1V1EnLFxyXG5cdFx0Y2xpZW50X2NvdW50cnk6ICdVbml0ZWQgS2luZ2RvbScsXHJcblx0XHRpbnZvaWNlX2l0ZW1zOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRuYW1lOiAnQnJhbmQgR3VpZGVsaW5lcycsXHJcblx0XHRcdFx0cXVhbnRpdHk6IDIsXHJcblx0XHRcdFx0cHJpY2U6IDI1MCxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG5hbWU6ICdXZWJzaXRlIFdvcmsnLFxyXG5cdFx0XHRcdHF1YW50aXR5OiAyLFxyXG5cdFx0XHRcdHByaWNlOiA1MDAsXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdH0sXHJcbl07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiaW1wb3J0IGFycmF5V2l0aG91dEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgbm9uSXRlcmFibGVTcHJlYWQgZnJvbSBcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59Il0sIm5hbWVzIjpbInl1cFJlc29sdmVyIiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwiRm9ybVByb3ZpZGVyIiwidXNlRmllbGRBcnJheSIsInVzZUZvcm0iLCJzdHlsZWQiLCJpbml0YWxWYWx1ZXMiLCJmb3JtU2NoZW1hIiwiSW52b2ljZXNDb250ZXh0IiwiRXJyb3IiLCJCdXR0b24iLCJEYXRlRmllbGQiLCJGb3JtRmllbGQiLCJJdGVtRmllbGQiLCJGb3JtU2VjdGlvbiIsImZvcm1IZWFkZXJUZXh0U3R5bGUiLCJpdGVtbGlzdEhlYWRlclRleHRTdHlsZSIsIkVkaXRJbnZvaWNlRm9ybSIsInNldERyYXdlck9wZW4iLCJpbnZvaWNlIiwiYWRkSW52b2ljZSIsIm1ldGhvZHMiLCJkZWZhdWx0VmFsdWVzIiwicmVzb2x2ZXIiLCJtb2RlIiwiY29udHJvbCIsIm5hbWUiLCJmaWVsZHMiLCJhcHBlbmQiLCJyZW1vdmUiLCJzdWJtaXRGb3JtRGF0YSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwiaWQiLCJtaW5XaWR0aCIsImZsZXgiLCJmb3JtU3RhdGUiLCJlcnJvcnMiLCJpbnZvaWNlX2l0ZW1zIiwibWVzc2FnZSIsIm1hcCIsIml0ZW0iLCJpdGVtSW5kZXgiLCJxdWFudGl0eSIsInByaWNlIiwiRm9ybUhlYWRlciIsImgyIiwicCIsInRoZW1lIiwiQ09MT1JTIiwiZ3JleSIsIlFVRVJJRVMiLCJ0YWJsZXRBbmRVcCIsIlN0eWxlZEZvcm0iLCJmb3JtIiwiSW5uZXJXcmFwcGVyIiwiZGl2IiwiUm93IiwiSXRlbXNMaXN0SGVhZGVyV3JhcHBlciIsIkl0ZW1MaXN0SGVhZGVyIiwiaDQiLCJJdGVtc0ZpZWxkTGlzdCIsIkZvcm1CdXR0b25zQ29udGFpbmVyIiwiQWRkSXRlbUJ1dHRvbiIsIlNhdmVEcmFmdEJ1dHRvbiIsImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VSZWR1Y2VyIiwiZGVtb0ludm9pY2VzRGF0YSIsImludm9pY2VSZWR1Y2VyIiwiaW52b2ljZXMiLCJkZWxldGVJbnZvaWNlIiwidXBkYXRlSW52b2ljZSIsIkludm9pY2VzUHJvdmlkZXIiLCJjaGlsZHJlbiIsInN0YXRlIiwiZGlzcGF0Y2giLCJsb2NhbEludm9pY2VzIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInR5cGUiLCJwYXlsb2FkIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImFjdGlvbiIsIkFycmF5IiwiaXNBcnJheSIsImZpbHRlciIsImludm9pY2VfZGF0ZSIsImludm9pY2VfZHVlX2RhdGUiLCJkZXNjcmlwdGlvbiIsImNsaWVudF9uYW1lIiwiY2xpZW50X2VtYWlsIiwic3RhdHVzIiwidXNlcl9zdHJlZXRfYWRkcmVzcyIsInVzZXJfY2l0eSIsInVzZXJfcG9zdF9jb2RlIiwidXNlcl9jb3VudHJ5IiwiY2xpZW50X3N0cmVldF9hZGRyZXNzIiwiY2xpZW50X2NpdHkiLCJjbGllbnRfcG9zdF9jb2RlIiwiY2xpZW50X2NvdW50cnkiXSwic291cmNlUm9vdCI6IiJ9