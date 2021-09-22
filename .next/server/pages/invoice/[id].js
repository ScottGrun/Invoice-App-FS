(() => {
var exports = {};
exports.id = "pages/invoice/[id]";
exports.ids = ["pages/invoice/[id]"];
exports.modules = {

/***/ "./components/Button/Button.tsx":
/*!**************************************!*\
  !*** ./components/Button/Button.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var public_icons_icon_plus_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! public/icons/icon-plus.svg */ "./public/icons/icon-plus.svg");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/theme */ "./styles/theme.ts");
/* harmony import */ var _styles_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/typography */ "./styles/typography.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\scott\\Documents\\GitHub\\Invoice-App-FS\\components\\Button\\Button.tsx";







const colorVariants = {
  primary: {
    background: _styles_theme__WEBPACK_IMPORTED_MODULE_4__.theme.COLORS.primary[1],
    backgroundHover: _styles_theme__WEBPACK_IMPORTED_MODULE_4__.theme.COLORS.primary[2],
    text: _styles_theme__WEBPACK_IMPORTED_MODULE_4__.theme.COLORS.white
  },
  secondary: {
    background: _styles_theme__WEBPACK_IMPORTED_MODULE_4__.theme.COLORS.grey[4],
    backgroundHover: _styles_theme__WEBPACK_IMPORTED_MODULE_4__.theme.COLORS.grey[2],
    text: _styles_theme__WEBPACK_IMPORTED_MODULE_4__.theme.COLORS.primary[3]
  },
  tertiary: {
    background: _styles_theme__WEBPACK_IMPORTED_MODULE_4__.theme.COLORS.dark[5],
    backgroundHover: _styles_theme__WEBPACK_IMPORTED_MODULE_4__.theme.COLORS.dark[1],
    text: _styles_theme__WEBPACK_IMPORTED_MODULE_4__.theme.COLORS.grey[1]
  },
  warning: {
    background: _styles_theme__WEBPACK_IMPORTED_MODULE_4__.theme.COLORS.warning[1],
    backgroundHover: _styles_theme__WEBPACK_IMPORTED_MODULE_4__.theme.COLORS.warning[2],
    text: _styles_theme__WEBPACK_IMPORTED_MODULE_4__.theme.COLORS.white
  }
};
const Button = ({
  children,
  icon,
  onClick,
  variant = 'primary',
  className,
  type
}) => {
  return icon ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(IconButton, {
    type: type,
    onClick: onClick,
    variant: variant,
    className: className,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(IconWrapper, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
        src: public_icons_icon_plus_svg__WEBPACK_IMPORTED_MODULE_3__.default,
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 4
    }, undefined), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 3
  }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(TextButton, {
    type: type,
    onClick: onClick,
    variant: variant,
    className: className,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 3
  }, undefined);
};
const ButtonBase = styled_components__WEBPACK_IMPORTED_MODULE_2___default().button.withConfig({
  displayName: "Button__ButtonBase",
  componentId: "sc-vn6tl-0"
})(["", ";display:flex;align-items:center;height:44px;border-radius:24px;background-color:", ";color:", ";&:hover,:focus{cursor:pointer;background-color:", ";}@media ", "{height:48px;}"], _styles_typography__WEBPACK_IMPORTED_MODULE_5__.h4TextStyle, ({
  variant
}) => colorVariants[variant].background, ({
  variant
}) => colorVariants[variant].text, ({
  variant
}) => colorVariants[variant].backgroundHover, p => p.theme.QUERIES.tabletAndUp);
const TextButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(ButtonBase).withConfig({
  displayName: "Button__TextButton",
  componentId: "sc-vn6tl-1"
})(["padding:16px 24px;justify-content:center;"]);
const IconButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(ButtonBase).withConfig({
  displayName: "Button__IconButton",
  componentId: "sc-vn6tl-2"
})(["padding:6px 14px 6px 6px;@media ", "{padding:8px 15px 8px 8px;}"], p => p.theme.QUERIES.tabletAndUp);
const IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Button__IconWrapper",
  componentId: "sc-vn6tl-3"
})(["display:grid;place-content:center;margin-right:8px;width:32px;height:32px;background-color:", ";border-radius:50%;@media ", "{margin-right:16px;}"], p => p.theme.COLORS.white, p => p.theme.QUERIES.tabletAndUp);

/***/ }),

/***/ "./components/Button/index.ts":
/*!************************************!*\
  !*** ./components/Button/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* reexport safe */ _Button__WEBPACK_IMPORTED_MODULE_0__.Button)
/* harmony export */ });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./components/Button/Button.tsx");


/***/ }),

/***/ "./components/Drawer/Drawer.tsx":
/*!**************************************!*\
  !*** ./components/Drawer/Drawer.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Drawer": () => (/* binding */ Drawer)
/* harmony export */ });
/* harmony import */ var _reach_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reach/dialog */ "@reach/dialog");
/* harmony import */ var _reach_dialog__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reach_dialog__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_dialog_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/dialog/styles.css */ "./node_modules/@reach/dialog/styles.css");
/* harmony import */ var _reach_dialog_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_dialog_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\scott\\Documents\\GitHub\\Invoice-App-FS\\components\\Drawer\\Drawer.tsx";




const Drawer = ({
  children,
  isDrawerOpen,
  setDrawerOpen,
  ariaLabel
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_reach_dialog__WEBPACK_IMPORTED_MODULE_0__.DialogOverlay, {
    isOpen: isDrawerOpen,
    onDismiss: () => setDrawerOpen(false),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(StyledDialogContent, {
      isOpen: isDrawerOpen,
      onDismiss: () => setDrawerOpen(false),
      "aria-label": ariaLabel,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 3
  }, undefined);
};
const StyledDialogContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default()((_reach_dialog__WEBPACK_IMPORTED_MODULE_0___default())).withConfig({
  displayName: "Drawer__StyledDialogContent",
  componentId: "sc-13y4ts5-0"
})(["margin:0;padding:0;padding-left:24px;padding-top:80px;width:100%;height:100%;background-color:", ";@media ", "{width:616px;padding-left:56px;}@media ", "{width:719px;padding-left:159px;padding-top:0px;}"], p => p.theme.COLORS.white, p => p.theme.QUERIES.tabletAndUp, p => p.theme.QUERIES.laptopAndUp);

/***/ }),

/***/ "./components/Drawer/index.ts":
/*!************************************!*\
  !*** ./components/Drawer/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Drawer": () => (/* reexport safe */ _Drawer__WEBPACK_IMPORTED_MODULE_0__.Drawer)
/* harmony export */ });
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Drawer */ "./components/Drawer/Drawer.tsx");


/***/ }),

/***/ "./components/Form/EditInvoiceForm.tsx":
/*!*********************************************!*\
  !*** ./components/Form/EditInvoiceForm.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditInvoiceForm": () => (/* binding */ EditInvoiceForm)
/* harmony export */ });
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hookform/resolvers/yup */ "@hookform/resolvers/yup");
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__);
var _jsxFileName = "C:\\Users\\scott\\Documents\\GitHub\\Invoice-App-FS\\components\\Form\\EditInvoiceForm.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















const EditInvoiceForm = ({
  setDrawerOpen,
  invoice
}) => {
  var _methods$formState$er;

  const {
    addInvoice,
    updateInvoice
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(context_InvoicesContext__WEBPACK_IMPORTED_MODULE_6__.InvoicesContext);
  const methods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
    defaultValues: config_Form_InitalValues__WEBPACK_IMPORTED_MODULE_4__.initalValues,
    resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_0__.yupResolver)(config_Form_ValidationSchema__WEBPACK_IMPORTED_MODULE_5__.formSchema),
    mode: 'onBlur'
  });
  const {
    fields,
    append,
    remove
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFieldArray)({
    control: methods.control,
    name: 'invoice_items'
  }); // TODO: Fix price input treating cents as dollars oh also the date input is fucked good luck
  // useEffect(() => {
  // 	methods.reset({
  // 		...invoice,
  // 		invoice_items: invoice?.invoice_items,
  // 	});
  // }, [invoice, methods]);

  const submitFormData = e => {
    e.preventDefault();
    console.log('hi submitted');
  };

  const handleAddInvoice = () => {
    console.log(methods.getValues());
    addInvoice(methods.getValues());
  };

  const handleUpdateInvoice = () => {
    if (methods.formState.isValid) {
      updateInvoice(methods.getValues());
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.FormProvider, _objectSpread(_objectSpread({}, methods), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(StyledForm, {
      onSubmit: e => e.preventDefault(),
      children: [invoice && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(FormHeader, {
        children: ["Edit ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("span", {
          children: "#"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 12
        }, undefined), invoice.id]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 6
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(InnerWrapper, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Form_FormSection__WEBPACK_IMPORTED_MODULE_12__.FormSection, {
          label: "Bill From",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Form_Fields_FormField__WEBPACK_IMPORTED_MODULE_10__.FormField, {
            type: "text",
            label: "Street Address",
            name: "user_street_address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 7
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(Row, {
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
              lineNumber: 77,
              columnNumber: 8
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Form_Fields_FormField__WEBPACK_IMPORTED_MODULE_10__.FormField, {
              style: {
                minWidth: '140px',
                flex: 1
              },
              type: "text",
              label: "Post Code",
              name: "user_post_code"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 8
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Form_Fields_FormField__WEBPACK_IMPORTED_MODULE_10__.FormField, {
              style: {
                minWidth: '152px',
                flex: 1
              },
              type: "text",
              label: "Country",
              name: "user_country"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 8
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Form_FormSection__WEBPACK_IMPORTED_MODULE_12__.FormSection, {
          label: "Bill To",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Form_Fields_FormField__WEBPACK_IMPORTED_MODULE_10__.FormField, {
            type: "text",
            label: "Client's Name",
            name: "client_name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 7
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Form_Fields_FormField__WEBPACK_IMPORTED_MODULE_10__.FormField, {
            type: "email",
            label: "Client's Email",
            name: "client_email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 7
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Form_Fields_FormField__WEBPACK_IMPORTED_MODULE_10__.FormField, {
            type: "text",
            label: "Street Address",
            name: "client_street_address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 7
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(Row, {
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
              lineNumber: 103,
              columnNumber: 8
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Form_Fields_FormField__WEBPACK_IMPORTED_MODULE_10__.FormField, {
              style: {
                minWidth: '140px',
                flex: 1
              },
              type: "text",
              label: "Post Code",
              name: "client_post_code"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 8
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Form_Fields_FormField__WEBPACK_IMPORTED_MODULE_10__.FormField, {
              style: {
                minWidth: '152px',
                flex: 1
              },
              type: "text",
              label: "Country",
              name: "client_country"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 8
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Form_FormSection__WEBPACK_IMPORTED_MODULE_12__.FormSection, {
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
              lineNumber: 126,
              columnNumber: 8
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Form_Fields_DateField__WEBPACK_IMPORTED_MODULE_9__.DateField, {
              style: {
                flex: 1
              },
              name: "invoice_due_date",
              label: "Invoice Due Date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 8
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 7
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Form_Fields_FormField__WEBPACK_IMPORTED_MODULE_10__.FormField, {
            style: {
              minWidth: '152px',
              flex: 1
            },
            type: "text",
            label: "Project Description",
            name: "description"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 7
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(ItemsListHeaderWrapper, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(ItemListHeader, {
              children: "Item List"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 8
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_Error__WEBPACK_IMPORTED_MODULE_7__.Error, {
              children: (_methods$formState$er = methods.formState.errors.invoice_items) === null || _methods$formState$er === void 0 ? void 0 : _methods$formState$er.message
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 8
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 7
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(ItemsFieldList, {
            children: [fields.map((item, itemIndex) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Form_Fields_ItemField__WEBPACK_IMPORTED_MODULE_11__.ItemField, {
              idx: itemIndex,
              remove: remove
            }, item.id, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 9
            }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(AddItemButton, {
              variant: "secondary",
              type: "button",
              onClick: () => append({
                name: '',
                quantity: 0,
                price: 0
              }),
              children: "+ Add New Item"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 8
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(FormButtonsContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.Button, {
          onClick: () => setDrawerOpen(false),
          type: "button",
          variant: "secondary",
          children: "Cancel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(SaveDraftButton, {
          type: "submit",
          variant: "tertiary",
          onClick: () => handleAddInvoice(),
          children: "Save as Draft"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.Button, {
          type: "submit",
          variant: "primary",
          onClick: () => handleUpdateInvoice(),
          children: "Save Changes"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 4
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 3
  }, undefined);
};
const FormHeader = styled_components__WEBPACK_IMPORTED_MODULE_3___default().h2.withConfig({
  displayName: "EditInvoiceForm__FormHeader",
  componentId: "sc-1v4zcog-0"
})(["", ";padding-top:24px;span{color:", ";}@media ", "{padding-top:56px;}"], _styles_typography__WEBPACK_IMPORTED_MODULE_13__.formHeaderTextStyle, p => p.theme.COLORS.grey[1], p => p.theme.QUERIES.tabletAndUp); // Form

const StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_3___default().form.withConfig({
  displayName: "EditInvoiceForm__StyledForm",
  componentId: "sc-1v4zcog-1"
})(["position:relative;height:100%;display:flex;flex-flow:column;padding:0;@media ", "{width:528px;}"], p => p.theme.QUERIES.tabletAndUp);
const InnerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "EditInvoiceForm__InnerWrapper",
  componentId: "sc-1v4zcog-2"
})(["height:100%;width:100%;overflow:scroll !important;padding-right:8px;@media ", "{padding-right:16px;}"], p => p.theme.QUERIES.tabletAndUp);
const Row = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "EditInvoiceForm__Row",
  componentId: "sc-1v4zcog-3"
})(["display:flex;flex-wrap:wrap;gap:23px;width:100%;"]);
const ItemsListHeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "EditInvoiceForm__ItemsListHeaderWrapper",
  componentId: "sc-1v4zcog-4"
})(["display:flex;flex-wrap:wrap;width:100%;margin-top:66px;@media ", "{flex-flow:row;justify-content:space-between;align-items:baseline;}"], p => p.theme.QUERIES.tabletAndUp);
const ItemListHeader = styled_components__WEBPACK_IMPORTED_MODULE_3___default().h4.withConfig({
  displayName: "EditInvoiceForm__ItemListHeader",
  componentId: "sc-1v4zcog-5"
})(["", ";display:block;width:100%;color:", ";@media ", "{flex-flow:row;justify-content:space-between;align-items:baseline;width:auto;}"], _styles_typography__WEBPACK_IMPORTED_MODULE_13__.itemlistHeaderTextStyle, p => p.theme.COLORS.grey[7], p => p.theme.QUERIES.tabletAndUp);
const ItemsFieldList = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "EditInvoiceForm__ItemsFieldList",
  componentId: "sc-1v4zcog-6"
})(["display:flex;flex-flow:column;gap:24px;width:100%;"]);
const FormButtonsContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "EditInvoiceForm__FormButtonsContainer",
  componentId: "sc-1v4zcog-7"
})(["display:flex;height:91px;align-items:center;justify-content:flex-end;gap:8px;margin-top:24px;padding-right:8px;@media ", "{padding-right:16px;}"], p => p.theme.QUERIES.tabletAndUp);
const AddItemButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_components_Button__WEBPACK_IMPORTED_MODULE_8__.Button).withConfig({
  displayName: "EditInvoiceForm__AddItemButton",
  componentId: "sc-1v4zcog-8"
})([""]);
const SaveDraftButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_components_Button__WEBPACK_IMPORTED_MODULE_8__.Button).withConfig({
  displayName: "EditInvoiceForm__SaveDraftButton",
  componentId: "sc-1v4zcog-9"
})([""]);

/***/ }),

/***/ "./components/Form/Error.tsx":
/*!***********************************!*\
  !*** ./components/Form/Error.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Error": () => (/* binding */ Error)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/typography */ "./styles/typography.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\scott\\Documents\\GitHub\\Invoice-App-FS\\components\\Form\\Error.tsx";



const Error = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Wrapper, {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "Error__Wrapper",
  componentId: "sc-18ewizo-0"
})(["", ";color:", ";"], _styles_typography__WEBPACK_IMPORTED_MODULE_1__.errorMessageTextStyle, p => p.theme.COLORS.warning[1]);

/***/ }),

/***/ "./components/Form/Fields/DateField/CalendarHeader.tsx":
/*!*************************************************************!*\
  !*** ./components/Form/Fields/DateField/CalendarHeader.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarHeader": () => (/* binding */ CalendarHeader)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons_icon_arrow_left_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/icons/icon-arrow-left.svg */ "./public/icons/icon-arrow-left.svg");
/* harmony import */ var _icons_icon_arrow_right_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/icons/icon-arrow-right.svg */ "./public/icons/icon-arrow-right.svg");
/* harmony import */ var _styles_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/typography */ "./styles/typography.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\scott\\Documents\\GitHub\\Invoice-App-FS\\components\\Form\\Fields\\DateField\\CalendarHeader.tsx";






const CalendarHeader = ({
  monthDate,
  decreaseMonth,
  increaseMonth
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Header, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(HeaderButton, {
      type: "button",
      "aria-label": "Previous Month",
      onClick: decreaseMonth,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
        src: _icons_icon_arrow_left_svg__WEBPACK_IMPORTED_MODULE_2__.default,
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Month, {
      className: "react-datepicker__current-month",
      children: monthDate.toLocaleString('en-US', {
        month: 'short',
        year: 'numeric'
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(HeaderButton, {
      type: "button",
      "aria-label": "Next Month",
      onClick: increaseMonth,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
        src: _icons_icon_arrow_right_svg__WEBPACK_IMPORTED_MODULE_3__.default,
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 3
  }, undefined);
};
const Header = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "CalendarHeader__Header",
  componentId: "sc-1ixc3ow-0"
})(["background-color:white;padding:0 10px;margin-bottom:22px;width:100%;display:flex;justify-content:space-between;align-items:baseline;"]);
const Month = styled_components__WEBPACK_IMPORTED_MODULE_1___default().span.withConfig({
  displayName: "CalendarHeader__Month",
  componentId: "sc-1ixc3ow-1"
})(["", ";background-color:white;"], _styles_typography__WEBPACK_IMPORTED_MODULE_4__.h4TextStyle);
const HeaderButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default().button.withConfig({
  displayName: "CalendarHeader__HeaderButton",
  componentId: "sc-1ixc3ow-2"
})(["background-color:white;&:hover{cursor:pointer;}"]);

/***/ }),

/***/ "./components/Form/Fields/DateField/CalendarInput.tsx":
/*!************************************************************!*\
  !*** ./components/Form/Fields/DateField/CalendarInput.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarInput": () => (/* binding */ CalendarInput)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Form_Error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Form/Error */ "./components/Form/Error.tsx");
/* harmony import */ var _icons_icon_calendar_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/icons/icon-calendar.svg */ "./public/icons/icon-calendar.svg");
/* harmony import */ var _styles_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/typography */ "./styles/typography.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
const _excluded = ["label", "style", "error", "hasError", "name"];
var _jsxFileName = "C:\\Users\\scott\\Documents\\GitHub\\Invoice-App-FS\\components\\Form\\Fields\\DateField\\CalendarInput.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








// Need to spread props because of how react-datepicker works with custom inputs
// eslint-disable-next-line react/display-name
const CalendarInput = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((_ref, ref) => {
  let {
    label,
    style,
    error,
    hasError,
    name
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(CustomInputWrapper, {
    style: style,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(InputHeader, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Label, {
        htmlFor: name,
        hasError: hasError,
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }, undefined), hasError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Form_Error__WEBPACK_IMPORTED_MODULE_3__.Error, {
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 18
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(InputWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(CustomInput, _objectSpread(_objectSpread({
        id: name
      }, props), {}, {
        hasError: hasError,
        ref: ref
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(InputIcon, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
          src: _icons_icon_calendar_svg__WEBPACK_IMPORTED_MODULE_4__.default,
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 3
  }, undefined);
});
const CustomInputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "CalendarInput__CustomInputWrapper",
  componentId: "sc-1iol4eq-0"
})(["display:flex;flex-flow:column;width:100%;"]);
const InputHeader = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "CalendarInput__InputHeader",
  componentId: "sc-1iol4eq-1"
})(["display:flex;flex-flow:column;justify-content:space-between;width:100%;@media ", "{flex-flow:revert;}"], p => p.theme.QUERIES.tabletAndUp);
const Label = styled_components__WEBPACK_IMPORTED_MODULE_2___default().label.withConfig({
  displayName: "CalendarInput__Label",
  componentId: "sc-1iol4eq-2"
})(["", ";display:flex;flex-flow:column;margin-bottom:10px;color:", ";"], _styles_typography__WEBPACK_IMPORTED_MODULE_5__.bodyTextStyle, p => p.hasError ? p.theme.COLORS.warning[1] : p.theme.COLORS.primary[3]);
const InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "CalendarInput__InputWrapper",
  componentId: "sc-1iol4eq-3"
})(["position:relative;display:flex;align-items:center;height:48px;width:100%;"]);
const CustomInput = styled_components__WEBPACK_IMPORTED_MODULE_2___default().input.withConfig({
  displayName: "CalendarInput__CustomInput",
  componentId: "sc-1iol4eq-4"
})(["", ";padding-left:20px;height:100%;border-radius:4px;width:100%;border:solid 2px ", ";&:hover{cursor:pointer;border:solid 2px ", ";}"], _styles_typography__WEBPACK_IMPORTED_MODULE_5__.h4TextStyle, p => p.hasError ? p.theme.COLORS.warning[1] : p.theme.COLORS.grey[2], p => p.theme.COLORS.primary[1]);
const InputIcon = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "CalendarInput__InputIcon",
  componentId: "sc-1iol4eq-5"
})(["position:absolute;right:16px;"]);

/***/ }),

/***/ "./components/Form/Fields/DateField/DateField.tsx":
/*!********************************************************!*\
  !*** ./components/Form/Fields/DateField/DateField.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateField": () => (/* binding */ DateField)
/* harmony export */ });
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-datepicker */ "react-datepicker");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CalendarHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CalendarHeader */ "./components/Form/Fields/DateField/CalendarHeader.tsx");
/* harmony import */ var _CalendarInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CalendarInput */ "./components/Form/Fields/DateField/CalendarInput.tsx");
/* harmony import */ var _styles_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/typography */ "./styles/typography.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\scott\\Documents\\GitHub\\Invoice-App-FS\\components\\Form\\Fields\\DateField\\DateField.tsx";







const DateField = ({
  style,
  label,
  name
}) => {
  const {
    control
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Wrapper, {
    style: style,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_hook_form__WEBPACK_IMPORTED_MODULE_1__.Controller, {
      name: name,
      control: control,
      render: ({
        field,
        fieldState
      }) => {
        var _fieldState$error;

        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((react_datepicker__WEBPACK_IMPORTED_MODULE_0___default()), {
          closeOnScroll: () => true,
          onChange: e => field.onChange(e.toDateString()),
          selected: field.value,
          showPopperArrow: false,
          dateFormat: "d MMM yyyy",
          calendarClassName: "custom-calendar",
          dayClassName: () => 'custom-day',
          customInput: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_CalendarInput__WEBPACK_IMPORTED_MODULE_4__.CalendarInput, {
            name: field.name,
            hasError: fieldState.invalid,
            error: (_fieldState$error = fieldState.error) === null || _fieldState$error === void 0 ? void 0 : _fieldState$error.message,
            value: field.value,
            label: label
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 8
          }, undefined),
          renderCustomHeader: ({
            monthDate,
            decreaseMonth,
            increaseMonth
          }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_CalendarHeader__WEBPACK_IMPORTED_MODULE_3__.CalendarHeader, {
            monthDate: monthDate,
            decreaseMonth: decreaseMonth,
            increaseMonth: increaseMonth
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 8
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 6
        }, undefined);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(DatePickerStyles, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 3
  }, undefined);
}; // Need this arbitrary div to prevent the date-picker from pushing content below it down a fex px

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "DateField__Wrapper",
  componentId: "sc-1aqzhnp-0"
})([""]); // Overide react-datepicker styles with a gobalstyle this a bit hacky but only workaround I could find that was useable

const DatePickerStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.createGlobalStyle)([".custom-calendar{", ";background-color:", ";padding:22px 10px 22px 10px;border:none;border-radius:8px;box-shadow:0px 10px 20px rgba(72,84,159,0.25);}.custom-day{color:", ";&:hover{background-color:transparent;color:", ";}}.react-datepicker__day--selected{background-color:", ";color:", ";}.react-datepicker__day--keyboard-selected{background-color:", ";color:", ";}.react-datepicker__day--outside-month{color:", ";opacity:0.08;}.react-datepicker__day-names{display:none;}.react-datepicker__header{background-color:white;padding:0;border:none;}"], _styles_typography__WEBPACK_IMPORTED_MODULE_5__.h4TextStyle, p => p.theme.COLORS.white, p => p.theme.COLORS.dark[1], p => p.theme.COLORS.primary[1], p => p.theme.COLORS.primary[1], p => p.theme.COLORS.white, p => p.theme.COLORS.primary[1], p => p.theme.COLORS.white, p => p.theme.COLORS.dark[1]);

/***/ }),

/***/ "./components/Form/Fields/DateField/index.ts":
/*!***************************************************!*\
  !*** ./components/Form/Fields/DateField/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateField": () => (/* reexport safe */ _DateField__WEBPACK_IMPORTED_MODULE_0__.DateField)
/* harmony export */ });
/* harmony import */ var _DateField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateField */ "./components/Form/Fields/DateField/DateField.tsx");


/***/ }),

/***/ "./components/Form/Fields/FormField.tsx":
/*!**********************************************!*\
  !*** ./components/Form/Fields/FormField.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormField": () => (/* binding */ FormField)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Error */ "./components/Form/Error.tsx");
/* harmony import */ var _styles_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/typography */ "./styles/typography.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
const _excluded = ["name", "style", "className", "label", "type"];
var _jsxFileName = "C:\\Users\\scott\\Documents\\GitHub\\Invoice-App-FS\\components\\Form\\Fields\\FormField.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const FormField = _ref => {
  var _fieldState$error;

  let {
    name,
    style,
    className,
    label,
    type
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    control
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();
  const {
    field,
    fieldState
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useController)({
    name,
    control
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Wrapper, {
    className: className,
    style: style,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(InputHeader, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Label, {
        htmlFor: name,
        hasError: fieldState.invalid,
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 5
      }, undefined), fieldState.invalid && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Error__WEBPACK_IMPORTED_MODULE_3__.Error, {
        children: (_fieldState$error = fieldState.error) === null || _fieldState$error === void 0 ? void 0 : _fieldState$error.message
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 28
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Input, _objectSpread(_objectSpread(_objectSpread({
      id: name
    }, field), props), {}, {
      type: type,
      hasError: fieldState.invalid
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 3
  }, undefined);
};
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "FormField__Wrapper",
  componentId: "sc-160dyho-0"
})(["", ";"], _styles_typography__WEBPACK_IMPORTED_MODULE_4__.bodyTextStyle);
const Label = styled_components__WEBPACK_IMPORTED_MODULE_2___default().label.withConfig({
  displayName: "FormField__Label",
  componentId: "sc-160dyho-1"
})(["flex-flow:column;color:", ";margin-bottom:10px;"], p => p.hasError ? p.theme.COLORS.warning[1] : p.theme.COLORS.primary[3]);
const InputHeader = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "FormField__InputHeader",
  componentId: "sc-160dyho-2"
})(["display:flex;width:100%;justify-content:space-between;"]);
const Input = styled_components__WEBPACK_IMPORTED_MODULE_2___default().input.withConfig({
  displayName: "FormField__Input",
  componentId: "sc-160dyho-3"
})(["", ";height:48px;padding-left:20px;border-radius:4px;border:solid 2px ", ";width:100%;"], _styles_typography__WEBPACK_IMPORTED_MODULE_4__.h4TextStyle, p => p.hasError ? p.theme.COLORS.warning[1] : p.theme.COLORS.grey[2]);

/***/ }),

/***/ "./components/Form/Fields/ItemField.tsx":
/*!**********************************************!*\
  !*** ./components/Form/Fields/ItemField.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemField": () => (/* binding */ ItemField)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_currency_input_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-currency-input-field */ "react-currency-input-field");
/* harmony import */ var react_currency_input_field__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_currency_input_field__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _FormField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormField */ "./components/Form/Fields/FormField.tsx");
/* harmony import */ var _PriceField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PriceField */ "./components/Form/Fields/PriceField.tsx");
/* harmony import */ var _styles_typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/typography */ "./styles/typography.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\scott\\Documents\\GitHub\\Invoice-App-FS\\components\\Form\\Fields\\ItemField.tsx";








const ItemField = ({
  idx,
  remove
}) => {
  var _invoiceItem$price;

  const {
    control,
    getValues
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const {
    0: total,
    1: setTotal
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('0');
  const watchedQuantityAndPrice = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useWatch)({
    control,
    name: [`invoice_items[${idx}].quantity`, `invoice_items[${idx}].price`]
  });
  const invoiceItem = getValues('invoice_items')[idx];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isNaN(watchedQuantityAndPrice[0]) || isNaN(watchedQuantityAndPrice[1])) {
      return setTotal('0');
    }

    const formattedTotal = (0,react_currency_input_field__WEBPACK_IMPORTED_MODULE_1__.formatValue)({
      value: (watchedQuantityAndPrice[0] * watchedQuantityAndPrice[1] / 100).toFixed(2).toString(),
      groupSeparator: ',',
      decimalScale: 2,
      decimalSeparator: '.',
      prefix: '$'
    });
    setTotal(formattedTotal);
  }, [watchedQuantityAndPrice]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Wrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(ItemName, {
      label: "Item Name",
      name: `invoice_items[${idx}].name`,
      type: "text"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Quantity, {
      label: "Qty",
      name: `invoice_items[${idx}].quantity`,
      type: "number",
      min: 0
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_PriceField__WEBPACK_IMPORTED_MODULE_5__.PriceField, {
      formPriceValue: (_invoiceItem$price = invoiceItem === null || invoiceItem === void 0 ? void 0 : invoiceItem.price) !== null && _invoiceItem$price !== void 0 ? _invoiceItem$price : 0,
      name: `invoice_items[${idx}].price`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(TotalWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
        children: "Total"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(TotalPrice, {
        children: total
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(DeleteButton, {
      type: "button",
      onClick: () => remove(idx),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("svg", {
        width: "13",
        height: "16",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("path", {
          d: "M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z",
          fillRule: "nonzero"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 3
  }, undefined);
};
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().fieldset.withConfig({
  displayName: "ItemField__Wrapper",
  componentId: "sc-twlod0-0"
})(["display:flex;flex-flow:row;flex-wrap:wrap;gap:16px;width:100%;@media ", "{gap:revert;flex-wrap:revert;}"], p => p.theme.QUERIES.tabletAndUp); // Item Name Field

const ItemName = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_FormField__WEBPACK_IMPORTED_MODULE_4__.FormField).withConfig({
  displayName: "ItemField__ItemName",
  componentId: "sc-twlod0-1"
})(["min-width:309px;width:100%;@media ", "{min-width:revert;width:214px;margin-right:16px;}"], p => p.theme.QUERIES.tabletAndUp); // Quanity Field

const Quantity = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_FormField__WEBPACK_IMPORTED_MODULE_4__.FormField).withConfig({
  displayName: "ItemField__Quantity",
  componentId: "sc-twlod0-2"
})(["max-width:64px;span{text-align:center;}input{padding:0;padding-left:20px;}@media ", "{margin-right:16px;width:46px;div{justify-content:center;}input{padding:0;text-align:center;}}"], p => p.theme.QUERIES.tabletAndUp); // Total Display (styled to look like field)

const TotalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "ItemField__TotalWrapper",
  componentId: "sc-twlod0-3"
})(["", ";display:flex;flex-flow:column;color:", ";max-width:60px;span{margin-bottom:10px;}@media ", "{}"], _styles_typography__WEBPACK_IMPORTED_MODULE_6__.bodyTextStyle, p => p.theme.COLORS.primary[3], p => p.theme.QUERIES.tabletAndUp);
const TotalPrice = styled_components__WEBPACK_IMPORTED_MODULE_3___default().p.withConfig({
  displayName: "ItemField__TotalPrice",
  componentId: "sc-twlod0-4"
})(["", ";display:flex;align-items:center;height:48px;width:90px;overflow:auto;"], _styles_typography__WEBPACK_IMPORTED_MODULE_6__.h4TextStyle); // Delete Item button

const DeleteButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default().button.withConfig({
  displayName: "ItemField__DeleteButton",
  componentId: "sc-twlod0-5"
})(["height:48px;align-self:flex-end;margin-left:auto;background-color:transparent;svg{fill:", ";}&:hover{cursor:pointer;svg{fill:", ";}}"], p => p.theme.COLORS.grey[1], p => p.theme.COLORS.warning[1]);

/***/ }),

/***/ "./components/Form/Fields/PriceField.tsx":
/*!***********************************************!*\
  !*** ./components/Form/Fields/PriceField.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PriceField": () => (/* binding */ PriceField)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_currency_input_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-currency-input-field */ "react-currency-input-field");
/* harmony import */ var react_currency_input_field__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_currency_input_field__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/typography */ "./styles/typography.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\scott\\Documents\\GitHub\\Invoice-App-FS\\components\\Form\\Fields\\PriceField.tsx";






const PriceField = ({
  formPriceValue,
  name
}) => {
  const {
    control
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const {
    0: price,
    1: setPrice
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('0'); // Oh the joys of working with currency...
  // So essentailly this input is setting the form state value as a float in cents, while
  // managing the local state of price input as a string in dollars with decimals I have no idea why
  // the react-currency input wont accpet on change values as float's but it doesn't so alas here we are..

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // On mount convert the the saved value from value from cents as a INT to to dollars as string
    setPrice(parseFloat((formPriceValue / 100).toFixed(2)).toString());
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Wrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
      children: "Price"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, {
      control: control,
      name: name,
      render: ({
        field
      }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Price, {
        allowNegativeValue: false,
        decimalScale: 2,
        intlConfig: {
          locale: 'en-US',
          currency: 'USD'
        },
        onValueChange: e => {
          if (e === undefined) {
            // If e is undefined we still need to pass it to the currency input as a value
            // this is what lets users type in numbers as decimals, but we make sure to set the form value to 0 in case they submit
            // with no price
            field.onChange(0);
            setPrice(e);
          } else {
            field.onChange(Math.round(parseFloat(e) * 100));
            setPrice(e);
          }
        },
        defaultValue: field.value / 100,
        value: price
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 6
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 3
  }, undefined);
}; // Price Field

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "PriceField__Wrapper",
  componentId: "sc-1ebhed6-0"
})(["", ";display:flex;flex-flow:column;color:", ";max-width:100px;span{margin-bottom:10px;}"], _styles_typography__WEBPACK_IMPORTED_MODULE_4__.bodyTextStyle, p => p.theme.COLORS.primary[3]);
const Price = styled_components__WEBPACK_IMPORTED_MODULE_3___default()((react_currency_input_field__WEBPACK_IMPORTED_MODULE_1___default())).withConfig({
  displayName: "PriceField__Price",
  componentId: "sc-1ebhed6-1"
})(["", ";text-align:center;padding:0 10px;margin-right:16px;height:48px;border-radius:4px;border:solid 2px ", ";"], _styles_typography__WEBPACK_IMPORTED_MODULE_4__.h4TextStyle, p => p.theme.COLORS.grey[2]);

/***/ }),

/***/ "./components/Form/FormSection.tsx":
/*!*****************************************!*\
  !*** ./components/Form/FormSection.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormSection": () => (/* binding */ FormSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/typography */ "./styles/typography.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\scott\\Documents\\GitHub\\Invoice-App-FS\\components\\Form\\FormSection.tsx";




const FormSection = ({
  children,
  label
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Wrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Label, {
      children: label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }, undefined), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 3
  }, undefined);
};
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().fieldset.withConfig({
  displayName: "FormSection__Wrapper",
  componentId: "sc-1g0yesk-0"
})(["display:flex;gap:24px;flex-flow:column;margin-top:24px;"]);
const Label = styled_components__WEBPACK_IMPORTED_MODULE_1___default().h3.withConfig({
  displayName: "FormSection__Label",
  componentId: "sc-1g0yesk-1"
})(["", ";color:", ";"], _styles_typography__WEBPACK_IMPORTED_MODULE_2__.h4TextStyle, p => p.theme.COLORS.primary[1]);

/***/ }),

/***/ "./components/InvoiceDetails/DesktopTable/DesktopTable.tsx":
/*!*****************************************************************!*\
  !*** ./components/InvoiceDetails/DesktopTable/DesktopTable.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesktopTable": () => (/* binding */ DesktopTable)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/typography */ "./styles/typography.ts");
/* harmony import */ var _utils_calculateItemTotal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/calculateItemTotal */ "./utils/calculateItemTotal.ts");
/* harmony import */ var _utils_calculateTotal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/calculateTotal */ "./utils/calculateTotal.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\scott\\Documents\\GitHub\\Invoice-App-FS\\components\\InvoiceDetails\\DesktopTable\\DesktopTable.tsx";





const DesktopTable = ({
  className,
  items
}) => {
  console.log(items.length);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Table, {
    className: className,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("thead", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(ItemNameColumn, {
          children: "Item Name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(QuantityColumn, {
          children: "QTY."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(PriceColumn, {
          children: "Price"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(TotalColumn, {
          children: "Total"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Body, {
      children: items.map((item, idx) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Name, {
          children: item.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 7
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Quantity, {
          children: item.quantity
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 7
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Price, {
          children: ["$", (item.price / 100).toFixed(2)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 7
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Total, {
          children: ["$", (0,_utils_calculateItemTotal__WEBPACK_IMPORTED_MODULE_2__.calculateItemTotal)(item.quantity, item.price)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 7
        }, undefined)]
      }, item.name + idx, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 6
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Footer, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(TotalLabel, {
          children: "Grand Total"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(InvoiceTotal, {
          colSpan: 3,
          children: ["\xA3", (0,_utils_calculateTotal__WEBPACK_IMPORTED_MODULE_3__.calculateInvoiceTotal)(items)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 3
  }, undefined);
};
const Table = styled_components__WEBPACK_IMPORTED_MODULE_0___default().table.withConfig({
  displayName: "DesktopTable__Table",
  componentId: "sc-1v7dwsw-0"
})(["", ";width:100%;background-color:", ";border-radius:8px 8px 0 0;th{", ";color:", ";}"], _styles_typography__WEBPACK_IMPORTED_MODULE_1__.h4TextStyle, p => p.theme.COLORS.grey[4], _styles_typography__WEBPACK_IMPORTED_MODULE_1__.body2TextStyle, p => p.theme.COLORS.primary[3]);
const Body = styled_components__WEBPACK_IMPORTED_MODULE_0___default().tbody.withConfig({
  displayName: "DesktopTable__Body",
  componentId: "sc-1v7dwsw-1"
})(["tr:first-child > td{padding-top:32px;}td{padding-bottom:32px;}"]); // Head

const ItemNameColumn = styled_components__WEBPACK_IMPORTED_MODULE_0___default().th.withConfig({
  displayName: "DesktopTable__ItemNameColumn",
  componentId: "sc-1v7dwsw-2"
})(["text-align:start;width:276px;padding-left:32px;padding-top:32px;"]);
const QuantityColumn = styled_components__WEBPACK_IMPORTED_MODULE_0___default().th.withConfig({
  displayName: "DesktopTable__QuantityColumn",
  componentId: "sc-1v7dwsw-3"
})(["width:29px;text-align:center;"]);
const PriceColumn = styled_components__WEBPACK_IMPORTED_MODULE_0___default().th.withConfig({
  displayName: "DesktopTable__PriceColumn",
  componentId: "sc-1v7dwsw-4"
})(["width:117px;text-align:end;"]);
const TotalColumn = styled_components__WEBPACK_IMPORTED_MODULE_0___default().th.withConfig({
  displayName: "DesktopTable__TotalColumn",
  componentId: "sc-1v7dwsw-5"
})(["width:138px;text-align:end;padding-right:32px;"]); // Row

const Name = styled_components__WEBPACK_IMPORTED_MODULE_0___default().td.withConfig({
  displayName: "DesktopTable__Name",
  componentId: "sc-1v7dwsw-6"
})(["text-align:start;padding-left:32px;"]);
const Quantity = styled_components__WEBPACK_IMPORTED_MODULE_0___default().td.withConfig({
  displayName: "DesktopTable__Quantity",
  componentId: "sc-1v7dwsw-7"
})(["text-align:center;color:", ";"], p => p.theme.COLORS.primary[3]);
const Price = styled_components__WEBPACK_IMPORTED_MODULE_0___default().td.withConfig({
  displayName: "DesktopTable__Price",
  componentId: "sc-1v7dwsw-8"
})(["text-align:end;color:", ";"], p => p.theme.COLORS.primary[3]);
const Total = styled_components__WEBPACK_IMPORTED_MODULE_0___default().td.withConfig({
  displayName: "DesktopTable__Total",
  componentId: "sc-1v7dwsw-9"
})(["text-align:end;padding-right:32px;"]); // Footer

const Footer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().tfoot.withConfig({
  displayName: "DesktopTable__Footer",
  componentId: "sc-1v7dwsw-10"
})(["td{padding-top:31px;padding-bottom:31px;}"]);
const TotalLabel = styled_components__WEBPACK_IMPORTED_MODULE_0___default().td.withConfig({
  displayName: "DesktopTable__TotalLabel",
  componentId: "sc-1v7dwsw-11"
})(["", ";color:", ";padding-left:32px;border-radius:0 0 0 8px;background-color:", ";"], _styles_typography__WEBPACK_IMPORTED_MODULE_1__.body2TextStyle, p => p.theme.COLORS.white, p => p.theme.COLORS.dark[5]);
const InvoiceTotal = styled_components__WEBPACK_IMPORTED_MODULE_0___default().td.withConfig({
  displayName: "DesktopTable__InvoiceTotal",
  componentId: "sc-1v7dwsw-12"
})(["", ";padding-right:32px;text-align:end;color:", ";background-color:", ";border-radius:0 0 8px 0;"], _styles_typography__WEBPACK_IMPORTED_MODULE_1__.tableFooterTotalTextStyle, p => p.theme.COLORS.white, p => p.theme.COLORS.dark[5]);

/***/ }),

/***/ "./components/InvoiceDetails/DesktopTable/index.ts":
/*!*********************************************************!*\
  !*** ./components/InvoiceDetails/DesktopTable/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesktopTable": () => (/* reexport safe */ _DesktopTable__WEBPACK_IMPORTED_MODULE_0__.DesktopTable)
/* harmony export */ });
/* harmony import */ var _DesktopTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DesktopTable */ "./components/InvoiceDetails/DesktopTable/DesktopTable.tsx");


/***/ }),

/***/ "./components/InvoiceDetails/DetailField/DetailField.tsx":
/*!***************************************************************!*\
  !*** ./components/InvoiceDetails/DetailField/DetailField.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailField": () => (/* binding */ DetailField)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/typography */ "./styles/typography.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\scott\\Documents\\GitHub\\Invoice-App-FS\\components\\InvoiceDetails\\DetailField\\DetailField.tsx";




const DetailField = ({
  label,
  value,
  children,
  className
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Wrapper, {
    className: className,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Label, {
      children: label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Value, {
      children: value
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }, undefined), children && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(ChildrenWrapper, {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 3
  }, undefined);
};
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "DetailField__Wrapper",
  componentId: "sc-a7g4v7-0"
})(["display:flex;flex-flow:column;"]);
const Label = styled_components__WEBPACK_IMPORTED_MODULE_1___default().h4.withConfig({
  displayName: "DetailField__Label",
  componentId: "sc-a7g4v7-1"
})(["", ";color:", ";"], _styles_typography__WEBPACK_IMPORTED_MODULE_2__.bodyTextStyle, p => p.theme.COLORS.primary[3]);
const Value = styled_components__WEBPACK_IMPORTED_MODULE_1___default().p.withConfig({
  displayName: "DetailField__Value",
  componentId: "sc-a7g4v7-2"
})(["margin-top:12px;", ";color:", ";"], _styles_typography__WEBPACK_IMPORTED_MODULE_2__.detailValueTextStyle, p => p.theme.COLORS.dark[0]);
const ChildrenWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "DetailField__ChildrenWrapper",
  componentId: "sc-a7g4v7-3"
})(["", ";margin-top:8px;color:", ";"], _styles_typography__WEBPACK_IMPORTED_MODULE_2__.body2TextStyle, p => p.theme.COLORS.primary[3]);

/***/ }),

/***/ "./components/InvoiceDetails/DetailField/index.ts":
/*!********************************************************!*\
  !*** ./components/InvoiceDetails/DetailField/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailField": () => (/* reexport safe */ _DetailField__WEBPACK_IMPORTED_MODULE_0__.DetailField)
/* harmony export */ });
/* harmony import */ var _DetailField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DetailField */ "./components/InvoiceDetails/DetailField/DetailField.tsx");


/***/ }),

/***/ "./components/InvoiceDetails/DetailsCard/DetailsCard.tsx":
/*!***************************************************************!*\
  !*** ./components/InvoiceDetails/DetailsCard/DetailsCard.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsCard": () => (/* binding */ DetailsCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_InvoiceDetails_DesktopTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/InvoiceDetails/DesktopTable */ "./components/InvoiceDetails/DesktopTable/index.ts");
/* harmony import */ var _components_InvoiceDetails_DetailField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/InvoiceDetails/DetailField */ "./components/InvoiceDetails/DetailField/index.ts");
/* harmony import */ var _components_InvoiceDetails_MobileItemsTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/InvoiceDetails/MobileItemsTable */ "./components/InvoiceDetails/MobileItemsTable/index.ts");
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/useWindowSize */ "./hooks/useWindowSize.ts");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/theme */ "./styles/theme.ts");
/* harmony import */ var _styles_typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/styles/typography */ "./styles/typography.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\scott\\Documents\\GitHub\\Invoice-App-FS\\components\\InvoiceDetails\\DetailsCard\\DetailsCard.tsx";









const DetailsCard = ({
  className,
  invoice
}) => {
  const size = (0,_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_5__.useWindowSize)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Wrapper, {
    className: className,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(MetaData, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(InvoiceIdAndName, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Id, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("span", {
            children: "#"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 7
          }, undefined), invoice.id]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Name, {
          children: invoice.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(UserAddress, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("address", {
          children: [invoice.user_street_address, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 37
          }, undefined), invoice.user_city, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 27
          }, undefined), invoice.user_post_code, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 7
          }, undefined), invoice.user_country]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(InvoiceDate, {
        label: "Invoice Date",
        value: invoice.invoice_date
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(PaymentDue, {
        label: "Payment Due",
        value: invoice.invoice_due_date
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(ClientEmail, {
        label: "Sent to",
        value: invoice.client_email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(BillTo, {
        label: "Bill to",
        value: invoice.client_name,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("address", {
          children: [invoice.client_street_address, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 39
          }, undefined), invoice.client_city, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 29
          }, undefined), invoice.client_post_code, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 7
          }, undefined), invoice.client_country]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }, undefined), (size === null || size === void 0 ? void 0 : size.width) > _styles_theme__WEBPACK_IMPORTED_MODULE_6__.BREAKPOINTS.phone ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(StyledDesktopTable, {
      items: invoice.invoice_items
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(MobileTable, {
      items: invoice.invoice_items
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 3
  }, undefined);
};
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().main.withConfig({
  displayName: "DetailsCard__Wrapper",
  componentId: "sc-18haye3-0"
})(["width:100%;padding:32px;background-color:", ";border-radius:8px;box-shadow:0px 10px 10px -10px rgba(72,84,159,0.100397);"], p => p.theme.COLORS.white);
const MetaData = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "DetailsCard__MetaData",
  componentId: "sc-18haye3-1"
})(["display:grid;grid-template-columns:1fr 1fr;grid-template-rows:repeat(5,max-content);gap:32px 0px;grid-auto-flow:row;grid-template-areas:'id .' 'user-address .' 'invoice-date bill-to' 'payment-due bill-to' 'client-email .';@media ", "{grid-template-columns:max-content 100px max-content 110px auto;grid-template-rows:repeat(3,max-content);gap:21px 0px;grid-template-areas:'id . . . user-address' 'invoice-date . bill-to . client-email' 'payment-due . bill-to  . .';}"], p => p.theme.QUERIES.tabletAndUp);
const InvoiceIdAndName = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "DetailsCard__InvoiceIdAndName",
  componentId: "sc-18haye3-2"
})(["grid-area:id;span{color:", ";}"], p => p.theme.COLORS.primary[3]);
const Id = styled_components__WEBPACK_IMPORTED_MODULE_1___default().p.withConfig({
  displayName: "DetailsCard__Id",
  componentId: "sc-18haye3-3"
})(["", ";"], _styles_typography__WEBPACK_IMPORTED_MODULE_7__.h4TextStyle);
const Name = styled_components__WEBPACK_IMPORTED_MODULE_1___default().h1.withConfig({
  displayName: "DetailsCard__Name",
  componentId: "sc-18haye3-4"
})(["", ";color:", ";margin-top:4px;"], _styles_typography__WEBPACK_IMPORTED_MODULE_7__.bodyTextStyle, p => p.theme.COLORS.primary[3]);
const UserAddress = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "DetailsCard__UserAddress",
  componentId: "sc-18haye3-5"
})(["", ";grid-area:user-address;color:", ";@media ", "{justify-self:flex-end;}"], _styles_typography__WEBPACK_IMPORTED_MODULE_7__.body2TextStyle, p => p.theme.COLORS.primary[3], p => p.theme.QUERIES.tabletAndUp);
const InvoiceDate = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_components_InvoiceDetails_DetailField__WEBPACK_IMPORTED_MODULE_3__.DetailField).withConfig({
  displayName: "DetailsCard__InvoiceDate",
  componentId: "sc-18haye3-6"
})(["grid-area:invoice-date;"]);
const PaymentDue = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_components_InvoiceDetails_DetailField__WEBPACK_IMPORTED_MODULE_3__.DetailField).withConfig({
  displayName: "DetailsCard__PaymentDue",
  componentId: "sc-18haye3-7"
})(["grid-area:payment-due;align-self:flex-end;"]);
const ClientEmail = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_components_InvoiceDetails_DetailField__WEBPACK_IMPORTED_MODULE_3__.DetailField).withConfig({
  displayName: "DetailsCard__ClientEmail",
  componentId: "sc-18haye3-8"
})(["grid-area:client-email;"]);
const BillTo = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_components_InvoiceDetails_DetailField__WEBPACK_IMPORTED_MODULE_3__.DetailField).withConfig({
  displayName: "DetailsCard__BillTo",
  componentId: "sc-18haye3-9"
})(["grid-area:bill-to;"]);
const StyledDesktopTable = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_components_InvoiceDetails_DesktopTable__WEBPACK_IMPORTED_MODULE_2__.DesktopTable).withConfig({
  displayName: "DetailsCard__StyledDesktopTable",
  componentId: "sc-18haye3-10"
})(["margin-top:40px;"]);
const MobileTable = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_components_InvoiceDetails_MobileItemsTable__WEBPACK_IMPORTED_MODULE_4__.MobileItemsTable).withConfig({
  displayName: "DetailsCard__MobileTable",
  componentId: "sc-18haye3-11"
})(["margin-top:40px;"]);

/***/ }),

/***/ "./components/InvoiceDetails/MobileItemsTable/MobileItemsTable.tsx":
/*!*************************************************************************!*\
  !*** ./components/InvoiceDetails/MobileItemsTable/MobileItemsTable.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileItemsTable": () => (/* binding */ MobileItemsTable)
/* harmony export */ });
/* harmony import */ var _reach_visually_hidden__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reach/visually-hidden */ "@reach/visually-hidden");
/* harmony import */ var _reach_visually_hidden__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reach_visually_hidden__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/typography */ "./styles/typography.ts");
/* harmony import */ var _utils_calculateItemTotal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/calculateItemTotal */ "./utils/calculateItemTotal.ts");
/* harmony import */ var _utils_calculateTotal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/calculateTotal */ "./utils/calculateTotal.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\scott\\Documents\\GitHub\\Invoice-App-FS\\components\\InvoiceDetails\\MobileItemsTable\\MobileItemsTable.tsx";







const MobileItemsTable = ({
  className,
  items
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Table, {
    className: className,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("thead", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((_reach_visually_hidden__WEBPACK_IMPORTED_MODULE_0___default()), {
            children: "Item Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((_reach_visually_hidden__WEBPACK_IMPORTED_MODULE_0___default()), {
            children: "Item Total"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Body, {
      children: items.map((item, idx) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(NameColumn, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(ItemName, {
              children: item.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 9
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(ItemQuantity, {
              children: [item.quantity, " x $", (item.price / 100).toFixed(2)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 9
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 8
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 7
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(TotalColumn, {
          children: ["$", (0,_utils_calculateItemTotal__WEBPACK_IMPORTED_MODULE_4__.calculateItemTotal)(item.quantity, item.price)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 7
        }, undefined)]
      }, item.name + idx, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 6
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Footer, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(TotalLabel, {
          children: "Grand Total"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(InvoiceTotal, {
          children: ["$", (0,_utils_calculateTotal__WEBPACK_IMPORTED_MODULE_5__.calculateInvoiceTotal)(items)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 3
  }, undefined);
};
const Table = styled_components__WEBPACK_IMPORTED_MODULE_2___default().table.withConfig({
  displayName: "MobileItemsTable__Table",
  componentId: "sc-dqnxcp-0"
})(["", ";width:100%;background-color:", ";border-radius:8px 8px 0 0;"], _styles_typography__WEBPACK_IMPORTED_MODULE_3__.h4TextStyle, p => p.theme.COLORS.grey[4]);
const Body = styled_components__WEBPACK_IMPORTED_MODULE_2___default().tbody.withConfig({
  displayName: "MobileItemsTable__Body",
  componentId: "sc-dqnxcp-1"
})(["tr:first-child > td{padding-top:24px;}td{padding-bottom:24px;}"]);
const NameColumn = styled_components__WEBPACK_IMPORTED_MODULE_2___default().td.withConfig({
  displayName: "MobileItemsTable__NameColumn",
  componentId: "sc-dqnxcp-2"
})(["padding-left:24px;div{display:flex;flex-flow:column;gap:8px;}"]);
const ItemName = styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({
  displayName: "MobileItemsTable__ItemName",
  componentId: "sc-dqnxcp-3"
})([""]);
const ItemQuantity = styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({
  displayName: "MobileItemsTable__ItemQuantity",
  componentId: "sc-dqnxcp-4"
})(["width:fit-content;color:", ";"], p => p.theme.COLORS.primary[3]);
const TotalColumn = styled_components__WEBPACK_IMPORTED_MODULE_2___default().td.withConfig({
  displayName: "MobileItemsTable__TotalColumn",
  componentId: "sc-dqnxcp-5"
})(["height:100%;vertical-align:middle;text-align:end;padding-right:24px;"]);
const Footer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().tfoot.withConfig({
  displayName: "MobileItemsTable__Footer",
  componentId: "sc-dqnxcp-6"
})(["td{padding-top:31px;padding-bottom:31px;}"]);
const TotalLabel = styled_components__WEBPACK_IMPORTED_MODULE_2___default().td.withConfig({
  displayName: "MobileItemsTable__TotalLabel",
  componentId: "sc-dqnxcp-7"
})(["", ";color:", ";padding-left:24px;border-radius:0 0 0 8px;background-color:", ";"], _styles_typography__WEBPACK_IMPORTED_MODULE_3__.body2TextStyle, p => p.theme.COLORS.white, p => p.theme.COLORS.dark[5]);
const InvoiceTotal = styled_components__WEBPACK_IMPORTED_MODULE_2___default().td.withConfig({
  displayName: "MobileItemsTable__InvoiceTotal",
  componentId: "sc-dqnxcp-8"
})(["", ";padding-right:24px;text-align:end;color:", ";background-color:", ";border-radius:0 0 8px 0;"], _styles_typography__WEBPACK_IMPORTED_MODULE_3__.tableFooterTotalTextStyle, p => p.theme.COLORS.white, p => p.theme.COLORS.dark[5]);

/***/ }),

/***/ "./components/InvoiceDetails/MobileItemsTable/index.ts":
/*!*************************************************************!*\
  !*** ./components/InvoiceDetails/MobileItemsTable/index.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileItemsTable": () => (/* reexport safe */ _MobileItemsTable__WEBPACK_IMPORTED_MODULE_0__.MobileItemsTable)
/* harmony export */ });
/* harmony import */ var _MobileItemsTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MobileItemsTable */ "./components/InvoiceDetails/MobileItemsTable/MobileItemsTable.tsx");


/***/ }),

/***/ "./components/PageLink/PageLink.tsx":
/*!******************************************!*\
  !*** ./components/PageLink/PageLink.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageLink": () => (/* binding */ PageLink)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons_icon_arrow_left_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/icons/icon-arrow-left.svg */ "./public/icons/icon-arrow-left.svg");
/* harmony import */ var _styles_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/typography */ "./styles/typography.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\scott\\Documents\\GitHub\\Invoice-App-FS\\components\\PageLink\\PageLink.tsx";







const PageLink = ({
  children,
  icon,
  href
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: href,
    passHref: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(InnerWrapper, {
      icon: icon,
      children: [icon && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(IconWrapper, {
        icon: icon,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
          src: _icons_icon_arrow_left_svg__WEBPACK_IMPORTED_MODULE_4__.default,
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 7
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 6
      }, undefined), children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 3
  }, undefined);
};
const InnerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().a.withConfig({
  displayName: "PageLink__InnerWrapper",
  componentId: "sc-1vn2okz-0"
})(["", ";display:flex;align-items:baseline;flex-direction:", ";width:fit-content;&:hover{color:", ";}"], _styles_typography__WEBPACK_IMPORTED_MODULE_5__.h4TextStyle, ({
  icon
}) => icon === 'back' ? 'row' : icon === 'forward' ? 'row-reverse' : null, p => p.theme.COLORS.primary[3]);
const IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "PageLink__IconWrapper",
  componentId: "sc-1vn2okz-1"
})(["margin-right:", ";margin-left:", ";transform:", ";;"], ({
  icon
}) => icon === 'back' ? '24px' : null, ({
  icon
}) => icon === 'forward' ? '24px' : null, ({
  icon
}) => icon === 'forward' ? 'rotateY(180deg)' : null);

/***/ }),

/***/ "./components/ProfileImg/ProfileImg.tsx":
/*!**********************************************!*\
  !*** ./components/ProfileImg/ProfileImg.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileImg": () => (/* binding */ ProfileImg)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons_icon_user_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/icons/icon-user.svg */ "./public/icons/icon-user.svg");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\scott\\Documents\\GitHub\\Invoice-App-FS\\components\\ProfileImg\\ProfileImg.tsx";




const ProfileImg = ({
  className,
  profileImgSrc
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Wrapper, {
    className: className,
    children: profileImgSrc ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
      src: profileImgSrc,
      layout: "fixed",
      height: "32",
      width: "32",
      alt: "Your profile picture"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(EmptyState, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
        src: _icons_icon_user_svg__WEBPACK_IMPORTED_MODULE_2__.default,
        alt: "Your profile picture"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 6
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 3
  }, undefined);
};
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "ProfileImg__Wrapper",
  componentId: "sc-1fnwt18-0"
})([""]);
const EmptyState = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "ProfileImg__EmptyState",
  componentId: "sc-1fnwt18-1"
})(["display:flex;align-items:center;justify-content:center;width:32px;height:32px;background-color:", ";border-radius:50%;"], p => p.theme.COLORS.grey[1]);

/***/ }),

/***/ "./components/Sidebar/Sidebar.tsx":
/*!****************************************!*\
  !*** ./components/Sidebar/Sidebar.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sidebar": () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProfileImg_ProfileImg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ProfileImg/ProfileImg */ "./components/ProfileImg/ProfileImg.tsx");
/* harmony import */ var _ThemeSwitcher_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ThemeSwitcher/ThemeSwitcher */ "./components/ThemeSwitcher/ThemeSwitcher.tsx");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/logo.svg */ "./public/assets/logo.svg");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\scott\\Documents\\GitHub\\Invoice-App-FS\\components\\Sidebar\\Sidebar.tsx";






const Sidebar = ({
  className
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Wrapper, {
    className: className,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(LogoWrapper, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
        src: _assets_logo_svg__WEBPACK_IMPORTED_MODULE_4__.default,
        layout: "fill",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(StyledThemeSwitcher, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Divider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_ProfileImg_ProfileImg__WEBPACK_IMPORTED_MODULE_2__.ProfileImg, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 3
  }, undefined);
};
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().aside.withConfig({
  displayName: "Sidebar__Wrapper",
  componentId: "sc-1ghgp7i-0"
})(["z-index:10;display:flex;align-items:center;gap:24px;width:100%;height:72px;padding-right:32px;background-color:", ";@media ", "{height:80px;}@media ", "{flex-flow:column;min-height:100vh;width:103px;padding-right:0;padding-bottom:24px;border-radius:0px 35px 20px 0px;}"], p => p.theme.COLORS.dark[5], p => p.theme.QUERIES.tabletAndUp, p => p.theme.QUERIES.laptopAndUp);
const LogoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "Sidebar__LogoWrapper",
  componentId: "sc-1ghgp7i-1"
})(["position:relative;width:72px;height:72px;@media ", "{width:80px;height:80px;}@media ", "{width:103px;height:103px;}"], p => p.theme.QUERIES.tabletAndUp, p => p.theme.QUERIES.laptopAndUp);
const StyledThemeSwitcher = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_ThemeSwitcher_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_3__.ThemeSwitcher).withConfig({
  displayName: "Sidebar__StyledThemeSwitcher",
  componentId: "sc-1ghgp7i-2"
})(["margin-left:auto;@media ", "{margin-left:revert;margin-top:auto;}"], p => p.theme.QUERIES.laptopAndUp);
const Divider = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "Sidebar__Divider",
  componentId: "sc-1ghgp7i-3"
})(["height:100%;width:2px;background-color:", ";@media ", "{height:2px;width:100%;}"], p => p.theme.COLORS.dark[6], p => p.theme.QUERIES.laptopAndUp);

/***/ }),

/***/ "./components/StatusBadge/StatusBadge.tsx":
/*!************************************************!*\
  !*** ./components/StatusBadge/StatusBadge.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatusBadge": () => (/* binding */ StatusBadge)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/theme */ "./styles/theme.ts");
/* harmony import */ var _styles_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/typography */ "./styles/typography.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\scott\\Documents\\GitHub\\Invoice-App-FS\\components\\StatusBadge\\StatusBadge.tsx";




const colorVariants = {
  Paid: {
    color: _styles_theme__WEBPACK_IMPORTED_MODULE_1__.theme.COLORS.success[1],
    background: _styles_theme__WEBPACK_IMPORTED_MODULE_1__.theme.COLORS.success[2]
  },
  Pending: {
    color: _styles_theme__WEBPACK_IMPORTED_MODULE_1__.theme.COLORS.caution[1],
    background: _styles_theme__WEBPACK_IMPORTED_MODULE_1__.theme.COLORS.caution[2]
  },
  Draft: {
    color: _styles_theme__WEBPACK_IMPORTED_MODULE_1__.theme.COLORS.dark[5],
    background: _styles_theme__WEBPACK_IMPORTED_MODULE_1__.theme.COLORS.grey[6]
  }
};
const StatusBadge = ({
  status,
  className
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Wrapper, {
    className: className,
    status: status,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }, undefined), status]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 3
  }, undefined);
};
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "StatusBadge__Wrapper",
  componentId: "sc-1pmxmfj-0"
})(["display:flex;align-items:center;justify-content:center;", ";width:104px;height:40px;border-radius:6px;color:", ";background-color:", ";div{display:block;height:8px;width:8px;border-radius:50%;margin-right:8px;background-color:", ";}"], _styles_typography__WEBPACK_IMPORTED_MODULE_2__.h4TextStyle, ({
  status
}) => colorVariants[status]['color'], ({
  status
}) => colorVariants[status]['background'], ({
  status
}) => colorVariants[status]['color']);

/***/ }),

/***/ "./components/StatusBadge/index.ts":
/*!*****************************************!*\
  !*** ./components/StatusBadge/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatusBadge": () => (/* reexport safe */ _StatusBadge__WEBPACK_IMPORTED_MODULE_0__.StatusBadge)
/* harmony export */ });
/* harmony import */ var _StatusBadge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StatusBadge */ "./components/StatusBadge/StatusBadge.tsx");


/***/ }),

/***/ "./components/ThemeSwitcher/ThemeSwitcher.tsx":
/*!****************************************************!*\
  !*** ./components/ThemeSwitcher/ThemeSwitcher.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeSwitcher": () => (/* binding */ ThemeSwitcher)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons_icon_moon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/icons/icon-moon.svg */ "./public/icons/icon-moon.svg");
/* harmony import */ var _icons_icon_sun_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/icons/icon-sun.svg */ "./public/icons/icon-sun.svg");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\scott\\Documents\\GitHub\\Invoice-App-FS\\components\\ThemeSwitcher\\ThemeSwitcher.tsx";



 // Would love to have some feedback on how to make this component
// more accessible


const ThemeSwitcher = ({
  className
}) => {
  const {
    0: theme,
    1: setTheme
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('light');
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: className,
    children: theme === 'light' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
      src: _icons_icon_moon_svg__WEBPACK_IMPORTED_MODULE_2__.default,
      alt: "A moon icon"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
      src: _icons_icon_sun_svg__WEBPACK_IMPORTED_MODULE_3__.default,
      alt: "A sun icon"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 3
  }, undefined);
};

/***/ }),

/***/ "./config/Form/InitalValues.ts":
/*!*************************************!*\
  !*** ./config/Form/InitalValues.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initalValues": () => (/* binding */ initalValues)
/* harmony export */ });
const initalValues = {
  id: '',
  status: 'Draft',
  user_street_address: '',
  user_city: '',
  user_post_code: '',
  user_country: '',
  client_name: '',
  client_email: '',
  client_street_address: '',
  client_city: '',
  client_post_code: '',
  client_country: '',
  invoice_date: new Date(),
  invoice_due_date: new Date(),
  description: '',
  invoice_items: [{
    name: 'Banner Design',
    quantity: 1,
    price: 156.0
  }, {
    name: 'Banner Design',
    quantity: 1,
    price: 156.0
  }]
};

/***/ }),

/***/ "./config/Form/ValidationSchema.ts":
/*!*****************************************!*\
  !*** ./config/Form/ValidationSchema.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formSchema": () => (/* binding */ formSchema)
/* harmony export */ });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);
// import * as yup from 'yup';

const formSchema = (0,yup__WEBPACK_IMPORTED_MODULE_0__.object)().shape({
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
  invoice_due_date: (0,yup__WEBPACK_IMPORTED_MODULE_0__.date)().when('invoice_date', (invoice_date, schema) => invoice_date && schema.min(invoice_date, 'Must be after start date')),
  description: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().required('Required'),
  invoice_items: (0,yup__WEBPACK_IMPORTED_MODULE_0__.array)().of((0,yup__WEBPACK_IMPORTED_MODULE_0__.object)().shape({
    name: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().required('A Item Name is required.'),
    quantity: (0,yup__WEBPACK_IMPORTED_MODULE_0__.number)().nullable().transform((v, o) => o === '' ? null : v),
    price: (0,yup__WEBPACK_IMPORTED_MODULE_0__.number)().nullable().transform((v, o) => o === '' ? null : v)
  })).min(1, 'Must have at least 1 billable item')
});

/***/ }),

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

/***/ "./hooks/useWindowSize.ts":
/*!********************************!*\
  !*** ./hooks/useWindowSize.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useWindowSize": () => (/* binding */ useWindowSize)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // CREDIT TO https://usehooks.com/useWindowSize/
// Define general type for useWindowSize hook, which includes width and height

// Hook
const useWindowSize = () => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const {
    0: windowSize,
    1: setWindowSize
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    width: undefined,
    height: undefined
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    } // Add event listener


    window.addEventListener('resize', handleResize); // Call handler right away so state gets updated with initial window size

    handleResize(); // Remove event listener on cleanup

    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
};

/***/ }),

/***/ "./layouts/PageLayout.tsx":
/*!********************************!*\
  !*** ./layouts/PageLayout.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageLayout": () => (/* binding */ PageLayout),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Sidebar/Sidebar */ "./components/Sidebar/Sidebar.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\scott\\Documents\\GitHub\\Invoice-App-FS\\layouts\\PageLayout.tsx";



const PageLayout = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_1__.Sidebar, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Wrapper, {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 3
  }, undefined);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageLayout);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "PageLayout__Container",
  componentId: "sc-1wleg7c-0"
})(["display:flex;flex-flow:column;@media ", "{flex-flow:row;}"], p => p.theme.QUERIES.laptopAndUp);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().main.withConfig({
  displayName: "PageLayout__Wrapper",
  componentId: "sc-1wleg7c-1"
})(["padding:0 24px;margin-top:32px;height:100%;width:100%;@media ", "{margin:0 auto;margin-top:56px;padding:0;max-width:672px;}@media ", "{max-width:730px;margin-top:72px;}"], p => p.theme.QUERIES.tabletAndUp, p => p.theme.QUERIES.laptopAndUp);

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = Image1;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/head */ "../shared/lib/head"));

var _toBase64 = __webpack_require__(/*! ../shared/lib/to-base-64 */ "../shared/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../server/image-config */ "../server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const loadedImageURLs = new Set();

if (true) {
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['default', defaultLoader], ['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['custom', customLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load(_objectSpread({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function handleLoading(img, src, layout, placeholder, onLoadingComplete) {
  if (!img) {
    return;
  }

  const handleLoad = () => {
    if (!img.src.startsWith('data:')) {
      const p = 'decode' in img ? img.decode() : Promise.resolve();
      p.catch(() => {}).then(() => {
        if (placeholder === 'blur') {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        }

        loadedImageURLs.add(src);

        if (onLoadingComplete) {
          const {
            naturalWidth,
            naturalHeight
          } = img; // Pass back read-only primitive values but not the
          // underlying DOM element because it could be misused.

          onLoadingComplete({
            naturalWidth,
            naturalHeight
          });
        }

        if (true) {
          var ref;

          if ((ref = img.parentElement) === null || ref === void 0 ? void 0 : ref.parentElement) {
            const parent = getComputedStyle(img.parentElement.parentElement);

            if (layout === 'responsive' && parent.display === 'flex') {
              console.warn(`Image with src "${src}" may not render properly as a child of a flex container. Consider wrapping the image with a div to configure the width.`);
            } else if (layout === 'fill' && parent.position !== 'relative') {
              console.warn(`Image with src "${src}" may not render properly with a parent using position:"${parent.position}". Consider changing the parent style to position:"relative" with a width and height.`);
            }
          }
        }
      });
    }
  };

  if (img.complete) {
    // If the real image fails to load, this will still remove the placeholder.
    // This is the desired behavior for now, and will be revisited when error
    // handling is worked on for the image component itself.
    handleLoad();
  } else {
    img.onload = handleLoad;
  }
}

function Image1(_param) {
  var {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    lazyBoundary = '200px',
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    onLoadingComplete,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _param,
      all = _objectWithoutProperties(_param, ["src", "sizes", "unoptimized", "priority", "loading", "lazyBoundary", "className", "quality", "width", "height", "objectFit", "objectPosition", "onLoadingComplete", "loader", "placeholder", "blurDataURL"]);

  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src.startsWith('data:') || src.startsWith('blob:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  if (false) {}

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (typeof widthInt !== 'undefined' && isNaN(widthInt) || typeof heightInt !== 'undefined' && isNaN(heightInt)) {
      throw new Error(`Image with src "${src}" has invalid "width" or "height" property. These should be numeric values.`);
    }

    if (layout === 'fill' && (width || height)) {
      console.warn(`Image with src "${src}" and "layout='fill'" has unused properties assigned. Please remove "width" and "height".`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (placeholder === 'blur') {
      if (layout !== 'fill' && (widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`);
      }

      if (!blurDataURL) {
        const VALID_BLUR_EXT = ['jpeg', 'png', 'webp'] // should match next-image-loader
        ;
        throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
    }

    if ('ref' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "ref" property. Consider using the "onLoadingComplete" property instead.`);
    }

    if ('style' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "style" property. Please use the "className" property instead.`);
    }

    const rand = Math.floor(Math.random() * 1000) + 100;

    if (!unoptimized && !loader({
      src,
      width: rand,
      quality: 75
    }).includes(rand.toString())) {
      console.warn(`Image with src "${src}" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width`);
    }
  }

  const [setRef, isIntersected] = (0, _useIntersection).useIntersection({
    rootMargin: lazyBoundary,
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };
  const blurStyle = placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: objectFit || 'cover',
    backgroundImage: `url("${blurDataURL}")`,
    backgroundPosition: objectPosition || '0% 0%'
  } : {};

  if (layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  let srcString = src;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    src: `data:image/svg+xml;base64,${(0, _toBase64).toBase64(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    "data-nimg": layout,
    className: className,
    ref: img => {
      setRef(img);
      handleLoading(img, srcString, layout, placeholder, onLoadingComplete);
    },
    style: _objectSpread({}, imgStyle, blurStyle)
  })), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    decoding: "async",
    "data-nimg": layout,
    style: imgStyle,
    className: className,
    loading: loading || 'lazy'
  }))), priority ? // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset

  /*#__PURE__*/
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src,
    // @ts-ignore: imagesrcset is not yet in the link element type.
    imagesrcset: imgAttributes.srcSet,
    // @ts-ignore: imagesizes is not yet in the link element type.
    imagesizes: imgAttributes.sizes
  })) : null);
}

function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?auto=format&fit=max&w=300
  const url = new URL(`${root}${normalizeSrc(src)}`);
  const params = url.searchParams;
  params.set('auto', params.get('auto') || 'format');
  params.set('fit', params.get('fit') || 'max');
  params.set('w', params.get('w') || width.toString());

  if (quality) {
    params.set('q', quality.toString());
  }

  return url.href;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function customLoader({
  src
}) {
  throw new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`);
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if ( true && !configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js");

var _router1 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router1).useRouter();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.default.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react.default.useEffect(() => {
    const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router).isLocalURL(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}

const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/utils/get-asset-path-from-route */ "../shared/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


let devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (true) {
      (devBuildPromise || Promise.resolve()).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
          if (!cancelled) {
            reject(err);
          }
        }, ms));
      });
    }

    if (false) {}
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute).default(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        const routeFilesPromise = getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        });

        if (true) {
          devBuildPromise = new Promise(resolve => {
            if (routeFilesPromise) {
              return routeFilesPromise.finally(() => {
                resolve();
              });
            }
          });
        }

        return resolvePromiseWithTimeout(routeFilesPromise, MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Router", ({
  enumerable: true,
  get: function () {
    return _router.default;
  }
}));
Object.defineProperty(exports, "withRouter", ({
  enumerable: true,
  get: function () {
    return _withRouter.default;
  }
}));
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js"));

var _routerContext = __webpack_require__(/*! ../shared/lib/router-context */ "../shared/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const singletonRouter = {
  router: null,
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
}

var _default = singletonRouter;
exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
}

function createRouter(...args) {
  singletonRouter.router = new _router.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}

function makePublicRouterInstance(router) {
  const _router1 = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router1[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router1[property]) ? [] : {}, _router1[property]) // makes sure query is not stateful
      ;
      continue;
    }

    instance[property] = _router1[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router1[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router).useRouter()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/router/router.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/router.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../../server/denormalize-page-path */ "../../../server/denormalize-page-path");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "../i18n/normalize-locale-path");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../mitt"));

var _utils = __webpack_require__(/*! ../utils */ "../shared/lib/utils");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./utils/is-dynamic");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./utils/parse-relative-url");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./utils/querystring");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?5c99"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./utils/route-matcher");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./utils/route-regex");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash).normalizePathTrailingSlash(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {} else {
    return false;
  }
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils).getLocationOrigin();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  let urlAsString = typeof href === 'string' ? href : (0, _utils).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  const urlAsStringNoProto = urlProtoMatch ? urlAsString.substr(urlProtoMatch[0].length) : urlAsString;
  const urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
    const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils).getLocationOrigin();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader).markAssetError(err);
    }

    throw err;
  });
}

class Router {
  constructor(pathname1, query1, as1, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component: Component1,
    err: err1,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    // Static Data Cache
    this.sdc = {}; // In-flight Server Data Requests, for deduping

    this.sdr = {};
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname: pathname1,
          query: query1
        } = this;
        this.changeState('replaceState', (0, _utils).formatWithValidation({
          pathname: addBasePath(pathname1),
          query: query1
        }), (0, _utils).getURL());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as: as1,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname: pathname1
      } = (0, _parseRelativeUrl).parseRelativeUrl(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as1 === this.asPath && pathname1 === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as1, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[this.route] = {
        Component: Component1,
        initial: true,
        props: initialProps,
        err: err1,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname1;
    this.query = query1; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? pathname1 : as1;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    const prevLocale = this.locale;

    if (false) { var ref; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as;
    let localeChange = prevLocale !== this.locale; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname1,
      query: query1
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader).getClientBuildManifest());
    } catch (err1) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname1 = pathname1 ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname1)) : pathname1;

    if (shouldResolveHref && pathname1 !== '/_error') {
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname1, pages);

        if (parsed.pathname !== pathname1) {
          pathname1 = parsed.pathname;
          parsed.pathname = addBasePath(pathname1);
          url = (0, _utils).formatWithValidation(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic).isDynamicRoute(route)) {
      const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex).getRouteRegex(route);
      const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query1) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query1[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils).formatWithValidation(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query1, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query1, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var ref, ref1;
      let routeInfo = await this.getRouteInfo(route, pathname1, query1, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query1, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname1 === '/_error' && ((ref = self.__NEXT_DATA__.props) === null || ref === void 0 ? void 0 : (ref1 = ref.pageProps) === null || ref1 === void 0 ? void 0 : ref1.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      var _scroll;

      const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname1, query1, cleanedAs, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err1) {
      if (err1.cancelled) {
        return false;
      }

      throw err1;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils).getURL() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component1;
      let styleSheets;
      let props;

      if (typeof Component1 === 'undefined' || typeof styleSheets === 'undefined') {
        ({
          page: Component1,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component: Component1,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component1, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component: Component1,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component1)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils).formatWithValidation({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component1, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err2) {
      return this.handleRouteInfoError(err2, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname2
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname2) {
        pathname2 = parsed.pathname;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname2); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err2 = new Error('Loading initial props cancelled');
        err2.cancelled = true;
        throw err2;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err2 => {
      delete this.sdr[resourceKey];
      throw err2;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App1
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App1);

    ctx.AppTree = AppTree;
    return (0, _utils).loadGetInitialProps(App1, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

Router.events = (0, _mitt).default();
exports.default = Router;

/***/ }),

/***/ "./pages/invoice/[id].tsx":
/*!********************************!*\
  !*** ./pages/invoice/[id].tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var context_InvoicesContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! context/InvoicesContext */ "./context/InvoicesContext.tsx");
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var _components_Drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Drawer */ "./components/Drawer/index.ts");
/* harmony import */ var _components_Form_EditInvoiceForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Form/EditInvoiceForm */ "./components/Form/EditInvoiceForm.tsx");
/* harmony import */ var _components_InvoiceDetails_DetailsCard_DetailsCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/InvoiceDetails/DetailsCard/DetailsCard */ "./components/InvoiceDetails/DetailsCard/DetailsCard.tsx");
/* harmony import */ var _components_PageLink_PageLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/PageLink/PageLink */ "./components/PageLink/PageLink.tsx");
/* harmony import */ var _components_StatusBadge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/StatusBadge */ "./components/StatusBadge/index.ts");
/* harmony import */ var _layouts_PageLayout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/layouts/PageLayout */ "./layouts/PageLayout.tsx");
/* harmony import */ var _styles_typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/styles/typography */ "./styles/typography.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "C:\\Users\\scott\\Documents\\GitHub\\Invoice-App-FS\\pages\\invoice\\[id].tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















const InvoiceDetails = () => {
  const {
    0: isDrawerOpen,
    1: setDrawerOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const {
    id
  } = router.query;
  const {
    invoices,
    updateInvoice
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(context_InvoicesContext__WEBPACK_IMPORTED_MODULE_3__.InvoicesContext);
  const selectedInvoice = invoices.find(invoice => invoice.id === id);

  const markInvoicePaid = () => updateInvoice(_objectSpread(_objectSpread({}, selectedInvoice), {}, {
    status: 'Paid'
  }));

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Drawer__WEBPACK_IMPORTED_MODULE_5__.Drawer, {
      isDrawerOpen: isDrawerOpen,
      setDrawerOpen: setDrawerOpen,
      ariaLabel: "Invoice Editing Form Modal",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Form_EditInvoiceForm__WEBPACK_IMPORTED_MODULE_6__.EditInvoiceForm, {
        setDrawerOpen: setDrawerOpen,
        invoice: selectedInvoice
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_layouts_PageLayout__WEBPACK_IMPORTED_MODULE_10__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_PageLink_PageLink__WEBPACK_IMPORTED_MODULE_8__.PageLink, {
        href: "/",
        icon: "back",
        children: "Go back"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 5
      }, undefined), selectedInvoice && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(Header, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(StatusLabel, {
            children: "Status"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 8
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(StyledStatusBadge, {
            status: selectedInvoice.status
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 8
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(ButtonContainer, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {
              variant: "secondary",
              onClick: () => setDrawerOpen(true),
              children: "Edit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 9
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {
              variant: "warning",
              children: "Delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 9
            }, undefined), selectedInvoice.status !== 'Paid' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {
              variant: "primary",
              onClick: markInvoicePaid,
              children: "Mark as Paid"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 10
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 8
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 7
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(InvoiceDetailsCard, {
          invoice: selectedInvoice
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 7
        }, undefined), ' ']
      }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(MobileButtonsContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {
          variant: "secondary",
          onClick: () => setDrawerOpen(true),
          children: "Edit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {
          variant: "warning",
          children: "Delete"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {
          variant: "primary",
          children: "Mark As Paid"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InvoiceDetails); // const StyledHeader = styled(Header)`
//
// `;

const Header = styled_components__WEBPACK_IMPORTED_MODULE_2___default().header.withConfig({
  displayName: "id__Header",
  componentId: "sc-1yl858b-0"
})(["display:flex;align-items:center;padding:0 24px;margin-top:32px;width:100%;height:91px;background-color:", ";border-radius:8px;box-shadow:0px 10px 10px -10px rgba(72,84,159,0.100397);"], p => p.theme.COLORS.white);
const StatusLabel = styled_components__WEBPACK_IMPORTED_MODULE_2___default().p.withConfig({
  displayName: "id__StatusLabel",
  componentId: "sc-1yl858b-1"
})(["", ";color:", ";"], _styles_typography__WEBPACK_IMPORTED_MODULE_11__.bodyTextStyle, p => p.theme.COLORS.grey[5]);
const StyledStatusBadge = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_components_StatusBadge__WEBPACK_IMPORTED_MODULE_9__.StatusBadge).withConfig({
  displayName: "id__StyledStatusBadge",
  componentId: "sc-1yl858b-2"
})(["margin-left:auto;@media ", "{margin-left:16px;margin-right:auto;}"], p => p.theme.QUERIES.tabletAndUp);
const ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "id__ButtonContainer",
  componentId: "sc-1yl858b-3"
})(["display:none;@media ", "{display:flex;gap:8px;}"], p => p.theme.QUERIES.tabletAndUp);
const InvoiceDetailsCard = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_components_InvoiceDetails_DetailsCard_DetailsCard__WEBPACK_IMPORTED_MODULE_7__.DetailsCard).withConfig({
  displayName: "id__InvoiceDetailsCard",
  componentId: "sc-1yl858b-4"
})(["margin-top:16px;margin-bottom:147px;@media ", "{margin-bottom:revert;}"], p => p.theme.QUERIES.tabletAndUp);
const MobileButtonsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "id__MobileButtonsContainer",
  componentId: "sc-1yl858b-5"
})(["position:fixed;bottom:0;left:0;display:flex;align-items:center;justify-content:center;gap:8px;width:100%;height:91px;background-color:", ";@media ", "{display:none;}"], p => p.theme.COLORS.white, p => p.theme.QUERIES.tabletAndUp);

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

/***/ "./styles/typography.ts":
/*!******************************!*\
  !*** ./styles/typography.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "headerBaseStyles": () => (/* binding */ headerBaseStyles),
/* harmony export */   "bodyBaseStyles": () => (/* binding */ bodyBaseStyles),
/* harmony export */   "h1TextStyle": () => (/* binding */ h1TextStyle),
/* harmony export */   "h2TextStyle": () => (/* binding */ h2TextStyle),
/* harmony export */   "h3TextStyle": () => (/* binding */ h3TextStyle),
/* harmony export */   "h4TextStyle": () => (/* binding */ h4TextStyle),
/* harmony export */   "bodyTextStyle": () => (/* binding */ bodyTextStyle),
/* harmony export */   "body2TextStyle": () => (/* binding */ body2TextStyle),
/* harmony export */   "detailValueTextStyle": () => (/* binding */ detailValueTextStyle),
/* harmony export */   "tableFooterTotalTextStyle": () => (/* binding */ tableFooterTotalTextStyle),
/* harmony export */   "formHeaderTextStyle": () => (/* binding */ formHeaderTextStyle),
/* harmony export */   "itemlistHeaderTextStyle": () => (/* binding */ itemlistHeaderTextStyle),
/* harmony export */   "errorMessageTextStyle": () => (/* binding */ errorMessageTextStyle)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
 // Base Styles

const headerBaseStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["font-family:", ";font-weight:", ";"], p => p.theme.FONT_FAMILY.header, p => p.theme.WEIGHTS.bold);
const bodyBaseStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["font-family:", ";font-weight:", ";"], p => p.theme.FONT_FAMILY.body, p => p.theme.WEIGHTS.medium); // Headers

const h1TextStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["", " font-size:", ";line-height:36px;letter-spacing:-1px;"], headerBaseStyles, p => p.theme.FONT_SIZES.h1);
const h2TextStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["", " font-size:", ";line-height:22px;letter-spacing:-0.625px;"], headerBaseStyles, p => p.theme.FONT_SIZES.h2);
const h3TextStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["", " font-size:", ";line-height:24px;letter-spacing:-0.8px;"], headerBaseStyles, p => p.theme.FONT_SIZES.h3);
const h4TextStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["", " font-size:", ";line-height:15px;letter-spacing:-0.25px;"], headerBaseStyles, p => p.theme.FONT_SIZES.h4); // Body

const bodyTextStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["", " font-size:", ";line-height:15px;letter-spacing:-0.25px;"], bodyBaseStyles, p => p.theme.FONT_SIZES.body);
const body2TextStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["", " font-size:", ";line-height:18px;letter-spacing:-0.229167px;"], bodyBaseStyles, p => p.theme.FONT_SIZES.body2); // Invoice Details

const detailValueTextStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["", ";font-size:", "rem;line-height:20px;letter-spacing:-0.3125px;"], headerBaseStyles, 15 / 16);
const tableFooterTotalTextStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["", ";font-size:", "rem;line-height:32px;letter-spacing:-0.416667px;@media ", "{font-size:", "rem;line-height:32px;letter-spacing:-0.5px;}"], headerBaseStyles, 20 / 16, p => p.theme.QUERIES.tabletAndUp, 24 / 16); // Form

const formHeaderTextStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["", ";font-size:", ";line-height:32px;letter-spacing:-0.5px;"], headerBaseStyles, p => p.theme.FONT_SIZES.formH1);
const itemlistHeaderTextStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["", ";font-size:", ";line-height:32px;letter-spacing:-0.375px;"], headerBaseStyles, p => p.theme.FONT_SIZES.formItemListH1);
const errorMessageTextStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["font-family:", ";font-size:", ";font-weight:", ";line-height:15px;letter-spacing:-0.208333px;"], p => p.theme.FONT_FAMILY.error, p => p.theme.FONT_SIZES.formError, p => p.theme.WEIGHTS.semiBold);

/***/ }),

/***/ "./utils/calculateItemTotal.ts":
/*!*************************************!*\
  !*** ./utils/calculateItemTotal.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateItemTotal": () => (/* binding */ calculateItemTotal)
/* harmony export */ });
const calculateItemTotal = (quantity = 0, price = 0) => {
  return (quantity * price / 100).toFixed(2);
};

/***/ }),

/***/ "./utils/calculateTotal.ts":
/*!*********************************!*\
  !*** ./utils/calculateTotal.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateInvoiceTotal": () => (/* binding */ calculateInvoiceTotal)
/* harmony export */ });
const calculateInvoiceTotal = items => {
  const totalInCents = items.reduce((prev, curr) => prev + curr.price * curr.quantity, 0);
  return (totalInCents / 100).toFixed(2);
};

/***/ }),

/***/ "./public/assets/logo.svg":
/*!********************************!*\
  !*** ./public/assets/logo.svg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/logo.a8651d975e357f3ff0031631717f7b17.svg","height":72,"width":72});

/***/ }),

/***/ "./public/icons/icon-arrow-left.svg":
/*!******************************************!*\
  !*** ./public/icons/icon-arrow-left.svg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/icons/icon-arrow-left.e9bb76376b884042fecf1abba1419934.svg","height":10,"width":7});

/***/ }),

/***/ "./public/icons/icon-arrow-right.svg":
/*!*******************************************!*\
  !*** ./public/icons/icon-arrow-right.svg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/icons/icon-arrow-right.9e19be64001504a17c146eb378c556a2.svg","height":10,"width":7});

/***/ }),

/***/ "./public/icons/icon-calendar.svg":
/*!****************************************!*\
  !*** ./public/icons/icon-calendar.svg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/icons/icon-calendar.71c99ab5db94f8cbb7b70ce40afddfb5.svg","height":16,"width":16});

/***/ }),

/***/ "./public/icons/icon-moon.svg":
/*!************************************!*\
  !*** ./public/icons/icon-moon.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/icons/icon-moon.7101c57dc8ecc85e045e9179625e2cb2.svg","height":20,"width":20});

/***/ }),

/***/ "./public/icons/icon-plus.svg":
/*!************************************!*\
  !*** ./public/icons/icon-plus.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/icons/icon-plus.278c048a38de266d0e5bdbb8bcaaf395.svg","height":11,"width":11});

/***/ }),

/***/ "./public/icons/icon-sun.svg":
/*!***********************************!*\
  !*** ./public/icons/icon-sun.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/icons/icon-sun.f3da52d13a35ad8bc751df2e85093f98.svg","height":20,"width":20});

/***/ }),

/***/ "./public/icons/icon-user.svg":
/*!************************************!*\
  !*** ./public/icons/icon-user.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/icons/icon-user.9d3ab73997606c27a52b1e3f80c24fc4.svg","height":20,"width":20});

/***/ }),

/***/ "./node_modules/@reach/dialog/styles.css":
/*!***********************************************!*\
  !*** ./node_modules/@reach/dialog/styles.css ***!
  \***********************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "@hookform/resolvers/yup":
/*!******************************************!*\
  !*** external "@hookform/resolvers/yup" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@hookform/resolvers/yup");

/***/ }),

/***/ "@reach/dialog":
/*!********************************!*\
  !*** external "@reach/dialog" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reach/dialog");

/***/ }),

/***/ "@reach/visually-hidden":
/*!*****************************************!*\
  !*** external "@reach/visually-hidden" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reach/visually-hidden");

/***/ }),

/***/ "../../../server/denormalize-page-path":
/*!************************************************************!*\
  !*** external "next/dist/server/denormalize-page-path.js" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "../server/image-config":
/*!***************************************************!*\
  !*** external "next/dist/server/image-config.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "../i18n/normalize-locale-path":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "../mitt":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/get-asset-path-from-route":
/*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./utils/is-dynamic":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "./utils/parse-relative-url":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "./utils/querystring":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "./utils/route-matcher":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "./utils/route-regex":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "../shared/lib/to-base-64":
/*!*****************************************************!*\
  !*** external "next/dist/shared/lib/to-base-64.js" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-currency-input-field":
/*!*********************************************!*\
  !*** external "react-currency-input-field" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-currency-input-field");

/***/ }),

/***/ "react-datepicker":
/*!***********************************!*\
  !*** external "react-datepicker" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-datepicker");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-hook-form");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-is");

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

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("yup");

/***/ }),

/***/ "?5c99":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/invoice/[id].tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRyxHQUFoQixFQUFxQnQwQixPQUFyQixDQUE2QixDQUE3QixDQUFQO0FBQ0EsQ0FITTs7Ozs7Ozs7Ozs7Ozs7O0FDRlAsaUVBQWUsQ0FBQywyR0FBMkc7Ozs7Ozs7Ozs7Ozs7OztBQ0EzSCxpRUFBZSxDQUFDLG9IQUFvSDs7Ozs7Ozs7Ozs7Ozs7O0FDQXBJLGlFQUFlLENBQUMscUhBQXFIOzs7Ozs7Ozs7Ozs7Ozs7QUNBckksaUVBQWUsQ0FBQyxtSEFBbUg7Ozs7Ozs7Ozs7Ozs7OztBQ0FuSSxpRUFBZSxDQUFDLCtHQUErRzs7Ozs7Ozs7Ozs7Ozs7O0FDQS9ILGlFQUFlLENBQUMsK0dBQStHOzs7Ozs7Ozs7Ozs7Ozs7QUNBL0gsaUVBQWUsQ0FBQyw4R0FBOEc7Ozs7Ozs7Ozs7Ozs7OztBQ0E5SCxpRUFBZSxDQUFDLCtHQUErRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBL0gsMkdBQStDOzs7Ozs7Ozs7OztBQ0EvQyx5R0FBOEM7Ozs7Ozs7Ozs7OztBQ0E5Qzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9jb21wb25lbnRzL0RyYXdlci9EcmF3ZXIudHN4Iiwid2VicGFjazovL215LWFwcC8uL2NvbXBvbmVudHMvRm9ybS9FZGl0SW52b2ljZUZvcm0udHN4Iiwid2VicGFjazovL215LWFwcC8uL2NvbXBvbmVudHMvRm9ybS9FcnJvci50c3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vY29tcG9uZW50cy9Gb3JtL0ZpZWxkcy9EYXRlRmllbGQvQ2FsZW5kYXJIZWFkZXIudHN4Iiwid2VicGFjazovL215LWFwcC8uL2NvbXBvbmVudHMvRm9ybS9GaWVsZHMvRGF0ZUZpZWxkL0NhbGVuZGFySW5wdXQudHN4Iiwid2VicGFjazovL215LWFwcC8uL2NvbXBvbmVudHMvRm9ybS9GaWVsZHMvRGF0ZUZpZWxkL0RhdGVGaWVsZC50c3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vY29tcG9uZW50cy9Gb3JtL0ZpZWxkcy9Gb3JtRmllbGQudHN4Iiwid2VicGFjazovL215LWFwcC8uL2NvbXBvbmVudHMvRm9ybS9GaWVsZHMvSXRlbUZpZWxkLnRzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9jb21wb25lbnRzL0Zvcm0vRmllbGRzL1ByaWNlRmllbGQudHN4Iiwid2VicGFjazovL215LWFwcC8uL2NvbXBvbmVudHMvRm9ybS9Gb3JtU2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vY29tcG9uZW50cy9JbnZvaWNlRGV0YWlscy9EZXNrdG9wVGFibGUvRGVza3RvcFRhYmxlLnRzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9jb21wb25lbnRzL0ludm9pY2VEZXRhaWxzL0RldGFpbEZpZWxkL0RldGFpbEZpZWxkLnRzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9jb21wb25lbnRzL0ludm9pY2VEZXRhaWxzL0RldGFpbHNDYXJkL0RldGFpbHNDYXJkLnRzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9jb21wb25lbnRzL0ludm9pY2VEZXRhaWxzL01vYmlsZUl0ZW1zVGFibGUvTW9iaWxlSXRlbXNUYWJsZS50c3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vY29tcG9uZW50cy9QYWdlTGluay9QYWdlTGluay50c3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vY29tcG9uZW50cy9Qcm9maWxlSW1nL1Byb2ZpbGVJbWcudHN4Iiwid2VicGFjazovL215LWFwcC8uL2NvbXBvbmVudHMvU2lkZWJhci9TaWRlYmFyLnRzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9jb21wb25lbnRzL1N0YXR1c0JhZGdlL1N0YXR1c0JhZGdlLnRzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9jb21wb25lbnRzL1RoZW1lU3dpdGNoZXIvVGhlbWVTd2l0Y2hlci50c3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vY29uZmlnL0Zvcm0vSW5pdGFsVmFsdWVzLnRzIiwid2VicGFjazovL215LWFwcC8uL2NvbmZpZy9Gb3JtL1ZhbGlkYXRpb25TY2hlbWEudHMiLCJ3ZWJwYWNrOi8vbXktYXBwLy4vY29udGV4dC9JbnZvaWNlc0NvbnRleHQudHN4Iiwid2VicGFjazovL215LWFwcC8uL2NvbnRleHQvaW52b2ljZVJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vbXktYXBwLy4vZGF0YS9kZW1vLmpzIiwid2VicGFjazovL215LWFwcC8uL2hvb2tzL3VzZVdpbmRvd1NpemUudHMiLCJ3ZWJwYWNrOi8vbXktYXBwLy4vbGF5b3V0cy9QYWdlTGF5b3V0LnRzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9teS1hcHAvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovL215LWFwcC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly9teS1hcHAvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vbXktYXBwLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGUtbG9hZGVyLmpzIiwid2VicGFjazovL215LWFwcC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly9teS1hcHAvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL215LWFwcC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovL215LWFwcC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovL215LWFwcC8uL3BhZ2VzL2ludm9pY2UvW2lkXS50c3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3R5bGVzL3RoZW1lLnRzIiwid2VicGFjazovL215LWFwcC8uL3N0eWxlcy90eXBvZ3JhcGh5LnRzIiwid2VicGFjazovL215LWFwcC8uL3V0aWxzL2NhbGN1bGF0ZUl0ZW1Ub3RhbC50cyIsIndlYnBhY2s6Ly9teS1hcHAvLi91dGlscy9jYWxjdWxhdGVUb3RhbC50cyIsIndlYnBhY2s6Ly9teS1hcHAvLi9wdWJsaWMvYXNzZXRzL2xvZ28uc3ZnIiwid2VicGFjazovL215LWFwcC8uL3B1YmxpYy9pY29ucy9pY29uLWFycm93LWxlZnQuc3ZnIiwid2VicGFjazovL215LWFwcC8uL3B1YmxpYy9pY29ucy9pY29uLWFycm93LXJpZ2h0LnN2ZyIsIndlYnBhY2s6Ly9teS1hcHAvLi9wdWJsaWMvaWNvbnMvaWNvbi1jYWxlbmRhci5zdmciLCJ3ZWJwYWNrOi8vbXktYXBwLy4vcHVibGljL2ljb25zL2ljb24tbW9vbi5zdmciLCJ3ZWJwYWNrOi8vbXktYXBwLy4vcHVibGljL2ljb25zL2ljb24tcGx1cy5zdmciLCJ3ZWJwYWNrOi8vbXktYXBwLy4vcHVibGljL2ljb25zL2ljb24tc3VuLnN2ZyIsIndlYnBhY2s6Ly9teS1hcHAvLi9wdWJsaWMvaWNvbnMvaWNvbi11c2VyLnN2ZyIsIndlYnBhY2s6Ly9teS1hcHAvLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9teS1hcHAvLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL215LWFwcC9leHRlcm5hbCBcIkBob29rZm9ybS9yZXNvbHZlcnMveXVwXCIiLCJ3ZWJwYWNrOi8vbXktYXBwL2V4dGVybmFsIFwiQHJlYWNoL2RpYWxvZ1wiIiwid2VicGFjazovL215LWFwcC9leHRlcm5hbCBcIkByZWFjaC92aXN1YWxseS1oaWRkZW5cIiIsIndlYnBhY2s6Ly9teS1hcHAvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiIiwid2VicGFjazovL215LWFwcC9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIiLCJ3ZWJwYWNrOi8vbXktYXBwL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL215LWFwcC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vbXktYXBwL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiIiwid2VicGFjazovL215LWFwcC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vbXktYXBwL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9teS1hcHAvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiIiwid2VicGFjazovL215LWFwcC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIiIsIndlYnBhY2s6Ly9teS1hcHAvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIiIsIndlYnBhY2s6Ly9teS1hcHAvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiIiwid2VicGFjazovL215LWFwcC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiIiwid2VicGFjazovL215LWFwcC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly9teS1hcHAvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovL215LWFwcC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vbXktYXBwL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9teS1hcHAvZXh0ZXJuYWwgXCJyZWFjdC1jdXJyZW5jeS1pbnB1dC1maWVsZFwiIiwid2VicGFjazovL215LWFwcC9leHRlcm5hbCBcInJlYWN0LWRhdGVwaWNrZXJcIiIsIndlYnBhY2s6Ly9teS1hcHAvZXh0ZXJuYWwgXCJyZWFjdC1ob29rLWZvcm1cIiIsIndlYnBhY2s6Ly9teS1hcHAvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL215LWFwcC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL215LWFwcC9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vbXktYXBwL2V4dGVybmFsIFwieXVwXCIiLCJ3ZWJwYWNrOi8vbXktYXBwL2lnbm9yZWR8QzpcXFVzZXJzXFxzY290dFxcRG9jdW1lbnRzXFxHaXRIdWJcXEludm9pY2UtQXBwLUZTXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXHNoYXJlZFxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IFJlYWN0LCB7IEJ1dHRvbkhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCBpY29uUGx1c1NyYyBmcm9tICdwdWJsaWMvaWNvbnMvaWNvbi1wbHVzLnN2Zyc7XHJcblxyXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJ0Avc3R5bGVzL3RoZW1lJztcclxuaW1wb3J0IHsgaDRUZXh0U3R5bGUgfSBmcm9tICdAL3N0eWxlcy90eXBvZ3JhcGh5JztcclxuXHJcbmV4cG9ydCB0eXBlIENvbG9yVmFyaWFudHNUeXBlID0ge1xyXG5cdFtrZXk6IHN0cmluZ106IHtcclxuXHRcdFtrZXk6IHN0cmluZ106IHN0cmluZztcclxuXHR9O1xyXG59O1xyXG5cclxuY29uc3QgY29sb3JWYXJpYW50czogQ29sb3JWYXJpYW50c1R5cGUgPSB7XHJcblx0cHJpbWFyeToge1xyXG5cdFx0YmFja2dyb3VuZDogdGhlbWUuQ09MT1JTLnByaW1hcnlbMV0sXHJcblx0XHRiYWNrZ3JvdW5kSG92ZXI6IHRoZW1lLkNPTE9SUy5wcmltYXJ5WzJdLFxyXG5cdFx0dGV4dDogdGhlbWUuQ09MT1JTLndoaXRlLFxyXG5cdH0sXHJcblx0c2Vjb25kYXJ5OiB7XHJcblx0XHRiYWNrZ3JvdW5kOiB0aGVtZS5DT0xPUlMuZ3JleVs0XSxcclxuXHRcdGJhY2tncm91bmRIb3ZlcjogdGhlbWUuQ09MT1JTLmdyZXlbMl0sXHJcblx0XHR0ZXh0OiB0aGVtZS5DT0xPUlMucHJpbWFyeVszXSxcclxuXHR9LFxyXG5cdHRlcnRpYXJ5OiB7XHJcblx0XHRiYWNrZ3JvdW5kOiB0aGVtZS5DT0xPUlMuZGFya1s1XSxcclxuXHRcdGJhY2tncm91bmRIb3ZlcjogdGhlbWUuQ09MT1JTLmRhcmtbMV0sXHJcblx0XHR0ZXh0OiB0aGVtZS5DT0xPUlMuZ3JleVsxXSxcclxuXHR9LFxyXG5cdHdhcm5pbmc6IHtcclxuXHRcdGJhY2tncm91bmQ6IHRoZW1lLkNPTE9SUy53YXJuaW5nWzFdLFxyXG5cdFx0YmFja2dyb3VuZEhvdmVyOiB0aGVtZS5DT0xPUlMud2FybmluZ1syXSxcclxuXHRcdHRleHQ6IHRoZW1lLkNPTE9SUy53aGl0ZSxcclxuXHR9LFxyXG59O1xyXG5cclxudHlwZSBCdXR0b25Qcm9wcyA9IEJ1dHRvbkhUTUxBdHRyaWJ1dGVzPEhUTUxCdXR0b25FbGVtZW50PiAmIHtcclxuXHRjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG5cdHZhcmlhbnQ/OiAncHJpbWFyeScgfCAnc2Vjb25kYXJ5JyB8ICd0ZXJ0aWFyeScgfCAnd2FybmluZyc7XHJcblx0aWNvbj86ICdwbHVzJztcclxuXHRjbGFzc05hbWU/OiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uID0gKHtcclxuXHRjaGlsZHJlbixcclxuXHRpY29uLFxyXG5cdG9uQ2xpY2ssXHJcblx0dmFyaWFudCA9ICdwcmltYXJ5JyxcclxuXHRjbGFzc05hbWUsXHJcblx0dHlwZSxcclxufTogQnV0dG9uUHJvcHMpID0+IHtcclxuXHRyZXR1cm4gaWNvbiA/IChcclxuXHRcdDxJY29uQnV0dG9uIHR5cGU9e3R5cGV9IG9uQ2xpY2s9e29uQ2xpY2t9IHZhcmlhbnQ9e3ZhcmlhbnR9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuXHRcdFx0PEljb25XcmFwcGVyPlxyXG5cdFx0XHRcdDxJbWFnZSBzcmM9e2ljb25QbHVzU3JjfSBhbHQ9XCJcIiAvPlxyXG5cdFx0XHQ8L0ljb25XcmFwcGVyPlxyXG5cdFx0XHR7Y2hpbGRyZW59XHJcblx0XHQ8L0ljb25CdXR0b24+XHJcblx0KSA6IChcclxuXHRcdDxUZXh0QnV0dG9uIHR5cGU9e3R5cGV9IG9uQ2xpY2s9e29uQ2xpY2t9IHZhcmlhbnQ9e3ZhcmlhbnR9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuXHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0PC9UZXh0QnV0dG9uPlxyXG5cdCk7XHJcbn07XHJcblxyXG5jb25zdCBCdXR0b25CYXNlID0gc3R5bGVkLmJ1dHRvbjx7IHZhcmlhbnQ6IHN0cmluZyB9PmBcclxuXHQke2g0VGV4dFN0eWxlfTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG5cdGhlaWdodDogNDRweDtcclxuXHJcblx0Ym9yZGVyLXJhZGl1czogMjRweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHZhcmlhbnQgfSkgPT4gY29sb3JWYXJpYW50c1t2YXJpYW50XS5iYWNrZ3JvdW5kfTtcclxuXHRjb2xvcjogJHsoeyB2YXJpYW50IH0pID0+IGNvbG9yVmFyaWFudHNbdmFyaWFudF0udGV4dH07XHJcblxyXG5cdCY6aG92ZXIsXHJcblx0OmZvY3VzIHtcclxuXHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICR7KHsgdmFyaWFudCB9KSA9PiBjb2xvclZhcmlhbnRzW3ZhcmlhbnRdLmJhY2tncm91bmRIb3Zlcn07XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLnRhYmxldEFuZFVwfSB7XHJcblx0XHRoZWlnaHQ6IDQ4cHg7XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgVGV4dEJ1dHRvbiA9IHN0eWxlZChCdXR0b25CYXNlKWBcclxuXHRwYWRkaW5nOiAxNnB4IDI0cHg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBJY29uQnV0dG9uID0gc3R5bGVkKEJ1dHRvbkJhc2UpYFxyXG5cdHBhZGRpbmc6IDZweCAxNHB4IDZweCA2cHg7XHJcblxyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdHBhZGRpbmc6IDhweCAxNXB4IDhweCA4cHg7XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgSWNvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0cGxhY2UtY29udGVudDogY2VudGVyO1xyXG5cclxuXHRtYXJnaW4tcmlnaHQ6IDhweDtcclxuXHR3aWR0aDogMzJweDtcclxuXHRoZWlnaHQ6IDMycHg7XHJcblxyXG5cdGJhY2tncm91bmQtY29sb3I6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLndoaXRlfTtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdG1hcmdpbi1yaWdodDogMTZweDtcclxuXHR9XHJcbmA7XHJcbiIsImltcG9ydCBEaWFsb2dDb250ZW50LCB7IERpYWxvZ092ZXJsYXkgfSBmcm9tICdAcmVhY2gvZGlhbG9nJztcclxuaW1wb3J0IHsgRGlzcGF0Y2gsIEZDLCBTZXRTdGF0ZUFjdGlvbiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCAnQHJlYWNoL2RpYWxvZy9zdHlsZXMuY3NzJztcclxuXHJcbmludGVyZmFjZSBEcmF3ZXJQcm9wcyB7XHJcblx0aXNEcmF3ZXJPcGVuOiBib29sZWFuO1xyXG5cdHNldERyYXdlck9wZW46IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPGJvb2xlYW4+PjtcclxuXHRhcmlhTGFiZWw6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERyYXdlcjogRkM8RHJhd2VyUHJvcHM+ID0gKHsgY2hpbGRyZW4sIGlzRHJhd2VyT3Blbiwgc2V0RHJhd2VyT3BlbiwgYXJpYUxhYmVsIH0pID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PERpYWxvZ092ZXJsYXkgaXNPcGVuPXtpc0RyYXdlck9wZW59IG9uRGlzbWlzcz17KCkgPT4gc2V0RHJhd2VyT3BlbihmYWxzZSl9PlxyXG5cdFx0XHQ8U3R5bGVkRGlhbG9nQ29udGVudFxyXG5cdFx0XHRcdGlzT3Blbj17aXNEcmF3ZXJPcGVufVxyXG5cdFx0XHRcdG9uRGlzbWlzcz17KCkgPT4gc2V0RHJhd2VyT3BlbihmYWxzZSl9XHJcblx0XHRcdFx0YXJpYS1sYWJlbD17YXJpYUxhYmVsfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0XHQ8L1N0eWxlZERpYWxvZ0NvbnRlbnQ+XHJcblx0XHQ8L0RpYWxvZ092ZXJsYXk+XHJcblx0KTtcclxufTtcclxuXHJcbmNvbnN0IFN0eWxlZERpYWxvZ0NvbnRlbnQgPSBzdHlsZWQoRGlhbG9nQ29udGVudClgXHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0cGFkZGluZy1sZWZ0OiAyNHB4O1xyXG5cdHBhZGRpbmctdG9wOiA4MHB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHJcblx0YmFja2dyb3VuZC1jb2xvcjogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMud2hpdGV9O1xyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdHdpZHRoOiA2MTZweDtcclxuXHRcdHBhZGRpbmctbGVmdDogNTZweDtcclxuXHR9XHJcblxyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMubGFwdG9wQW5kVXB9IHtcclxuXHRcdHdpZHRoOiA3MTlweDtcclxuXHRcdHBhZGRpbmctbGVmdDogMTU5cHg7XHJcblx0XHRwYWRkaW5nLXRvcDogMHB4O1xyXG5cdH1cclxuYDtcclxuIiwiaW1wb3J0IHsgeXVwUmVzb2x2ZXIgfSBmcm9tICdAaG9va2Zvcm0vcmVzb2x2ZXJzL3l1cCc7XHJcbmltcG9ydCBSZWFjdCwgeyBEaXNwYXRjaCwgRkMsIFNldFN0YXRlQWN0aW9uLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm1Qcm92aWRlciwgdXNlRmllbGRBcnJheSwgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgaW5pdGFsVmFsdWVzIH0gZnJvbSAnY29uZmlnL0Zvcm0vSW5pdGFsVmFsdWVzJztcclxuaW1wb3J0IHsgZm9ybVNjaGVtYSB9IGZyb20gJ2NvbmZpZy9Gb3JtL1ZhbGlkYXRpb25TY2hlbWEnO1xyXG5pbXBvcnQgeyBJbnZvaWNlc0NvbnRleHQgfSBmcm9tICdjb250ZXh0L0ludm9pY2VzQ29udGV4dCc7XHJcblxyXG5pbXBvcnQgeyBFcnJvciB9IGZyb20gJy4vRXJyb3InO1xyXG5cclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQC9jb21wb25lbnRzL0J1dHRvbic7XHJcbmltcG9ydCB7IERhdGVGaWVsZCB9IGZyb20gJ0AvY29tcG9uZW50cy9Gb3JtL0ZpZWxkcy9EYXRlRmllbGQnO1xyXG5pbXBvcnQgeyBGb3JtRmllbGQgfSBmcm9tICdAL2NvbXBvbmVudHMvRm9ybS9GaWVsZHMvRm9ybUZpZWxkJztcclxuaW1wb3J0IHsgSXRlbUZpZWxkIH0gZnJvbSAnQC9jb21wb25lbnRzL0Zvcm0vRmllbGRzL0l0ZW1GaWVsZCc7XHJcbmltcG9ydCB7IEZvcm1TZWN0aW9uIH0gZnJvbSAnQC9jb21wb25lbnRzL0Zvcm0vRm9ybVNlY3Rpb24nO1xyXG5pbXBvcnQgeyBQb3NzaWJsZVN0YXR1cyB9IGZyb20gJ0AvY29uZmlnL1Bvc3NpYmxlU3RhdHVzJztcclxuaW1wb3J0IHsgZm9ybUhlYWRlclRleHRTdHlsZSwgaXRlbWxpc3RIZWFkZXJUZXh0U3R5bGUgfSBmcm9tICdAL3N0eWxlcy90eXBvZ3JhcGh5JztcclxuaW1wb3J0IHsgSW52b2ljZSB9IGZyb20gJ0AvdHlwZXMvaW5kZXgnO1xyXG5cclxuaW50ZXJmYWNlIEVkaXRJbnZvaWNlRm9ybSB7XHJcblx0c2V0RHJhd2VyT3BlbjogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+O1xyXG5cdGludm9pY2U6IEludm9pY2UgfCB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBFZGl0SW52b2ljZUZvcm06IEZDPEVkaXRJbnZvaWNlRm9ybT4gPSAoeyBzZXREcmF3ZXJPcGVuLCBpbnZvaWNlIH0pID0+IHtcclxuXHRjb25zdCB7IGFkZEludm9pY2UsIHVwZGF0ZUludm9pY2UgfSA9IHVzZUNvbnRleHQoSW52b2ljZXNDb250ZXh0KTtcclxuXHJcblx0Y29uc3QgbWV0aG9kcyA9IHVzZUZvcm0oe1xyXG5cdFx0ZGVmYXVsdFZhbHVlczogaW5pdGFsVmFsdWVzLFxyXG5cdFx0cmVzb2x2ZXI6IHl1cFJlc29sdmVyKGZvcm1TY2hlbWEpLFxyXG5cdFx0bW9kZTogJ29uQmx1cicsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IHsgZmllbGRzLCBhcHBlbmQsIHJlbW92ZSB9ID0gdXNlRmllbGRBcnJheSh7XHJcblx0XHRjb250cm9sOiBtZXRob2RzLmNvbnRyb2wsXHJcblx0XHRuYW1lOiAnaW52b2ljZV9pdGVtcycsXHJcblx0fSk7XHJcblx0Ly8gVE9ETzogRml4IHByaWNlIGlucHV0IHRyZWF0aW5nIGNlbnRzIGFzIGRvbGxhcnMgb2ggYWxzbyB0aGUgZGF0ZSBpbnB1dCBpcyBmdWNrZWQgZ29vZCBsdWNrXHJcblx0Ly8gdXNlRWZmZWN0KCgpID0+IHtcclxuXHQvLyBcdG1ldGhvZHMucmVzZXQoe1xyXG5cdC8vIFx0XHQuLi5pbnZvaWNlLFxyXG5cdC8vIFx0XHRpbnZvaWNlX2l0ZW1zOiBpbnZvaWNlPy5pbnZvaWNlX2l0ZW1zLFxyXG5cdC8vIFx0fSk7XHJcblx0Ly8gfSwgW2ludm9pY2UsIG1ldGhvZHNdKTtcclxuXHJcblx0Y29uc3Qgc3VibWl0Rm9ybURhdGEgPSAoZSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y29uc29sZS5sb2coJ2hpIHN1Ym1pdHRlZCcpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZUFkZEludm9pY2UgPSAoKSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhtZXRob2RzLmdldFZhbHVlcygpKTtcclxuXHRcdGFkZEludm9pY2UobWV0aG9kcy5nZXRWYWx1ZXMoKSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlVXBkYXRlSW52b2ljZSA9ICgpID0+IHtcclxuXHRcdGlmIChtZXRob2RzLmZvcm1TdGF0ZS5pc1ZhbGlkKSB7XHJcblx0XHRcdHVwZGF0ZUludm9pY2UobWV0aG9kcy5nZXRWYWx1ZXMoKSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxGb3JtUHJvdmlkZXIgey4uLm1ldGhvZHN9PlxyXG5cdFx0XHQ8U3R5bGVkRm9ybSBvblN1Ym1pdD17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0+XHJcblx0XHRcdFx0e2ludm9pY2UgJiYgKFxyXG5cdFx0XHRcdFx0PEZvcm1IZWFkZXI+XHJcblx0XHRcdFx0XHRcdEVkaXQgPHNwYW4+Izwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0e2ludm9pY2UuaWR9XHJcblx0XHRcdFx0XHQ8L0Zvcm1IZWFkZXI+XHJcblx0XHRcdFx0KX1cclxuXHRcdFx0XHQ8SW5uZXJXcmFwcGVyPlxyXG5cdFx0XHRcdFx0ey8qIEJpbGwgRnJvbSAqL31cclxuXHRcdFx0XHRcdDxGb3JtU2VjdGlvbiBsYWJlbD1cIkJpbGwgRnJvbVwiPlxyXG5cdFx0XHRcdFx0XHQ8Rm9ybUZpZWxkIHR5cGU9XCJ0ZXh0XCIgbGFiZWw9XCJTdHJlZXQgQWRkcmVzc1wiIG5hbWU9XCJ1c2VyX3N0cmVldF9hZGRyZXNzXCIgLz5cclxuXHRcdFx0XHRcdFx0PFJvdz5cclxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUZpZWxkXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBtaW5XaWR0aDogJzE0MHB4JywgZmxleDogMSB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJDaXR5XCJcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJ1c2VyX2NpdHlcIlxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PEZvcm1GaWVsZFxyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgbWluV2lkdGg6ICcxNDBweCcsIGZsZXg6IDEgfX1cclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiUG9zdCBDb2RlXCJcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJ1c2VyX3Bvc3RfY29kZVwiXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUZpZWxkXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBtaW5XaWR0aDogJzE1MnB4JywgZmxleDogMSB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJDb3VudHJ5XCJcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJ1c2VyX2NvdW50cnlcIlxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvUm93PlxyXG5cdFx0XHRcdFx0PC9Gb3JtU2VjdGlvbj5cclxuXHRcdFx0XHRcdHsvKiBCaWxsIFRvICovfVxyXG5cdFx0XHRcdFx0PEZvcm1TZWN0aW9uIGxhYmVsPVwiQmlsbCBUb1wiPlxyXG5cdFx0XHRcdFx0XHQ8Rm9ybUZpZWxkIHR5cGU9XCJ0ZXh0XCIgbGFiZWw9XCJDbGllbnQncyBOYW1lXCIgbmFtZT1cImNsaWVudF9uYW1lXCIgLz5cclxuXHRcdFx0XHRcdFx0PEZvcm1GaWVsZCB0eXBlPVwiZW1haWxcIiBsYWJlbD1cIkNsaWVudCdzIEVtYWlsXCIgbmFtZT1cImNsaWVudF9lbWFpbFwiIC8+XHJcblx0XHRcdFx0XHRcdDxGb3JtRmllbGQgdHlwZT1cInRleHRcIiBsYWJlbD1cIlN0cmVldCBBZGRyZXNzXCIgbmFtZT1cImNsaWVudF9zdHJlZXRfYWRkcmVzc1wiIC8+XHJcblx0XHRcdFx0XHRcdDxSb3c+XHJcblx0XHRcdFx0XHRcdFx0PEZvcm1GaWVsZFxyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgbWluV2lkdGg6ICcxNDBweCcsIGZsZXg6IDEgfX1cclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiQ2l0eVwiXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiY2xpZW50X2NpdHlcIlxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PEZvcm1GaWVsZFxyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgbWluV2lkdGg6ICcxNDBweCcsIGZsZXg6IDEgfX1cclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiUG9zdCBDb2RlXCJcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJjbGllbnRfcG9zdF9jb2RlXCJcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxGb3JtRmllbGRcclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IG1pbldpZHRoOiAnMTUycHgnLCBmbGV4OiAxIH19XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkNvdW50cnlcIlxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImNsaWVudF9jb3VudHJ5XCJcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L1Jvdz5cclxuXHRcdFx0XHRcdDwvRm9ybVNlY3Rpb24+XHJcblxyXG5cdFx0XHRcdFx0PEZvcm1TZWN0aW9uIGxhYmVsPVwiSW52b2ljZSBEZXRhaWxzXCI+XHJcblx0XHRcdFx0XHRcdDxSb3c+XHJcblx0XHRcdFx0XHRcdFx0PERhdGVGaWVsZCBzdHlsZT17eyBmbGV4OiAxIH19IG5hbWU9XCJpbnZvaWNlX2RhdGVcIiBsYWJlbD1cIkludm9pY2UgRGF0ZVwiIC8+XHJcblx0XHRcdFx0XHRcdFx0PERhdGVGaWVsZCBzdHlsZT17eyBmbGV4OiAxIH19IG5hbWU9XCJpbnZvaWNlX2R1ZV9kYXRlXCIgbGFiZWw9XCJJbnZvaWNlIER1ZSBEYXRlXCIgLz5cclxuXHRcdFx0XHRcdFx0PC9Sb3c+XHJcblxyXG5cdFx0XHRcdFx0XHQ8Rm9ybUZpZWxkXHJcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgbWluV2lkdGg6ICcxNTJweCcsIGZsZXg6IDEgfX1cclxuXHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJQcm9qZWN0IERlc2NyaXB0aW9uXCJcclxuXHRcdFx0XHRcdFx0XHRuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8SXRlbXNMaXN0SGVhZGVyV3JhcHBlcj5cclxuXHRcdFx0XHRcdFx0XHQ8SXRlbUxpc3RIZWFkZXI+SXRlbSBMaXN0PC9JdGVtTGlzdEhlYWRlcj5cclxuXHRcdFx0XHRcdFx0XHR7LyogQHRzLWV4cGVjdC1lcnJvcjogaWdub3JlIHdyb25nIHNjaGVtYSB3YXJuaW5nICovfVxyXG5cdFx0XHRcdFx0XHRcdDxFcnJvcj57bWV0aG9kcy5mb3JtU3RhdGUuZXJyb3JzLmludm9pY2VfaXRlbXM/Lm1lc3NhZ2V9PC9FcnJvcj5cclxuXHRcdFx0XHRcdFx0PC9JdGVtc0xpc3RIZWFkZXJXcmFwcGVyPlxyXG5cdFx0XHRcdFx0XHQ8SXRlbXNGaWVsZExpc3Q+XHJcblx0XHRcdFx0XHRcdFx0e2ZpZWxkcy5tYXAoKGl0ZW0sIGl0ZW1JbmRleCkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PEl0ZW1GaWVsZCBrZXk9e2l0ZW0uaWR9IGlkeD17aXRlbUluZGV4fSByZW1vdmU9e3JlbW92ZX0gLz5cclxuXHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0XHQ8QWRkSXRlbUJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0dmFyaWFudD1cInNlY29uZGFyeVwiXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGFwcGVuZCh7IG5hbWU6ICcnLCBxdWFudGl0eTogMCwgcHJpY2U6IDAgfSl9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0KyBBZGQgTmV3IEl0ZW1cclxuXHRcdFx0XHRcdFx0XHQ8L0FkZEl0ZW1CdXR0b24+XHJcblx0XHRcdFx0XHRcdDwvSXRlbXNGaWVsZExpc3Q+XHJcblx0XHRcdFx0XHQ8L0Zvcm1TZWN0aW9uPlxyXG5cdFx0XHRcdDwvSW5uZXJXcmFwcGVyPlxyXG5cdFx0XHRcdDxGb3JtQnV0dG9uc0NvbnRhaW5lcj5cclxuXHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0RHJhd2VyT3BlbihmYWxzZSl9IHR5cGU9XCJidXR0b25cIiB2YXJpYW50PVwic2Vjb25kYXJ5XCI+XHJcblx0XHRcdFx0XHRcdENhbmNlbFxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8U2F2ZURyYWZ0QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwidGVydGlhcnlcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBZGRJbnZvaWNlKCl9PlxyXG5cdFx0XHRcdFx0XHRTYXZlIGFzIERyYWZ0XHJcblx0XHRcdFx0XHQ8L1NhdmVEcmFmdEJ1dHRvbj5cclxuXHRcdFx0XHRcdDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gaGFuZGxlVXBkYXRlSW52b2ljZSgpfT5cclxuXHRcdFx0XHRcdFx0U2F2ZSBDaGFuZ2VzXHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8L0Zvcm1CdXR0b25zQ29udGFpbmVyPlxyXG5cdFx0XHQ8L1N0eWxlZEZvcm0+XHJcblx0XHQ8L0Zvcm1Qcm92aWRlcj5cclxuXHQpO1xyXG59O1xyXG5cclxuY29uc3QgRm9ybUhlYWRlciA9IHN0eWxlZC5oMmBcclxuXHQke2Zvcm1IZWFkZXJUZXh0U3R5bGV9O1xyXG5cdHBhZGRpbmctdG9wOiAyNHB4O1xyXG5cdHNwYW4ge1xyXG5cdFx0Y29sb3I6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLmdyZXlbMV19O1xyXG5cdH1cclxuXHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0cGFkZGluZy10b3A6IDU2cHg7XHJcblx0fVxyXG5gO1xyXG5cclxuLy8gRm9ybVxyXG5jb25zdCBTdHlsZWRGb3JtID0gc3R5bGVkLmZvcm1gXHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZmxvdzogY29sdW1uO1xyXG5cdHBhZGRpbmc6IDA7XHJcblxyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdHdpZHRoOiA1MjhweDtcclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBJbm5lcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG5cdGhlaWdodDogMTAwJTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRvdmVyZmxvdzogc2Nyb2xsICFpbXBvcnRhbnQ7XHJcblx0cGFkZGluZy1yaWdodDogOHB4O1xyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgUm93ID0gc3R5bGVkLmRpdmBcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxuXHRnYXA6IDIzcHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcbmA7XHJcblxyXG5jb25zdCBJdGVtc0xpc3RIZWFkZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXJnaW4tdG9wOiA2NnB4O1xyXG5cclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLnRhYmxldEFuZFVwfSB7XHJcblx0XHRmbGV4LWZsb3c6IHJvdztcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBJdGVtTGlzdEhlYWRlciA9IHN0eWxlZC5oNGBcclxuXHQke2l0ZW1saXN0SGVhZGVyVGV4dFN0eWxlfTtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR3aWR0aDogMTAwJTtcclxuXHRjb2xvcjogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMuZ3JleVs3XX07XHJcblxyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdGZsZXgtZmxvdzogcm93O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5cdFx0d2lkdGg6IGF1dG87XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgSXRlbXNGaWVsZExpc3QgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1mbG93OiBjb2x1bW47XHJcblx0Z2FwOiAyNHB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybUJ1dHRvbnNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0aGVpZ2h0OiA5MXB4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHRnYXA6IDhweDtcclxuXHRtYXJnaW4tdG9wOiAyNHB4O1xyXG5cclxuXHRwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0cGFkZGluZy1yaWdodDogMTZweDtcclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBBZGRJdGVtQnV0dG9uID0gc3R5bGVkKEJ1dHRvbilgYDtcclxuXHJcbmNvbnN0IFNhdmVEcmFmdEJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxyXG5cdC8qIGRpc3BsYXk6IG5vbmU7ICovXHJcbmA7XHJcbiIsImltcG9ydCB7IEZDIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCB7IGVycm9yTWVzc2FnZVRleHRTdHlsZSB9IGZyb20gJ0Avc3R5bGVzL3R5cG9ncmFwaHknO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVycm9yOiBGQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuXHRyZXR1cm4gPFdyYXBwZXI+e2NoaWxkcmVufTwvV3JhcHBlcj47XHJcbn07XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLnBgXHJcblx0JHtlcnJvck1lc3NhZ2VUZXh0U3R5bGV9O1xyXG5cdGNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy53YXJuaW5nWzFdfTtcclxuYDtcclxuIiwiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyBGQyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgaWNvbkNoZXZyb25MZWZ0U3JjIGZyb20gJ0AvaWNvbnMvaWNvbi1hcnJvdy1sZWZ0LnN2Zyc7XHJcbmltcG9ydCBpY29uQ2hldnJvblJpZ2h0U3JjIGZyb20gJ0AvaWNvbnMvaWNvbi1hcnJvdy1yaWdodC5zdmcnO1xyXG5pbXBvcnQgeyBoNFRleHRTdHlsZSB9IGZyb20gJ0Avc3R5bGVzL3R5cG9ncmFwaHknO1xyXG5cclxuaW50ZXJmYWNlIENhbGVuZGFySGVhZGVyUHJvcHMge1xyXG5cdG1vbnRoRGF0ZTogRGF0ZTtcclxuXHRpbmNyZWFzZU1vbnRoOiAoKSA9PiB2b2lkO1xyXG5cdGRlY3JlYXNlTW9udGg6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDYWxlbmRhckhlYWRlcjogRkM8Q2FsZW5kYXJIZWFkZXJQcm9wcz4gPSAoe1xyXG5cdG1vbnRoRGF0ZSxcclxuXHRkZWNyZWFzZU1vbnRoLFxyXG5cdGluY3JlYXNlTW9udGgsXHJcbn0pID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PEhlYWRlcj5cclxuXHRcdFx0PEhlYWRlckJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD1cIlByZXZpb3VzIE1vbnRoXCIgb25DbGljaz17ZGVjcmVhc2VNb250aH0+XHJcblx0XHRcdFx0PEltYWdlIHNyYz17aWNvbkNoZXZyb25MZWZ0U3JjfSBhbHQ9XCJcIiAvPlxyXG5cdFx0XHQ8L0hlYWRlckJ1dHRvbj5cclxuXHRcdFx0PE1vbnRoIGNsYXNzTmFtZT1cInJlYWN0LWRhdGVwaWNrZXJfX2N1cnJlbnQtbW9udGhcIj5cclxuXHRcdFx0XHR7bW9udGhEYXRlLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHtcclxuXHRcdFx0XHRcdG1vbnRoOiAnc2hvcnQnLFxyXG5cdFx0XHRcdFx0eWVhcjogJ251bWVyaWMnLFxyXG5cdFx0XHRcdH0pfVxyXG5cdFx0XHQ8L01vbnRoPlxyXG5cdFx0XHQ8SGVhZGVyQnV0dG9uIHR5cGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwiTmV4dCBNb250aFwiIG9uQ2xpY2s9e2luY3JlYXNlTW9udGh9PlxyXG5cdFx0XHRcdDxJbWFnZSBzcmM9e2ljb25DaGV2cm9uUmlnaHRTcmN9IGFsdD1cIlwiIC8+XHJcblx0XHRcdDwvSGVhZGVyQnV0dG9uPlxyXG5cdFx0PC9IZWFkZXI+XHJcblx0KTtcclxufTtcclxuXHJcbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5kaXZgXHJcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0cGFkZGluZzogMCAxMHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDIycHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0YWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5gO1xyXG5cclxuY29uc3QgTW9udGggPSBzdHlsZWQuc3BhbmBcclxuXHQke2g0VGV4dFN0eWxlfTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuYDtcclxuXHJcbmNvbnN0IEhlYWRlckJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG5cdCY6aG92ZXIge1xyXG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdH1cclxuYDtcclxuIiwiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkLCB7IENTU1Byb3BlcnRpZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBFcnJvciB9IGZyb20gJ0AvY29tcG9uZW50cy9Gb3JtL0Vycm9yJztcclxuaW1wb3J0IGljb25DYWxlbmRhclNyYyBmcm9tICdAL2ljb25zL2ljb24tY2FsZW5kYXIuc3ZnJztcclxuaW1wb3J0IHsgYm9keVRleHRTdHlsZSwgaDRUZXh0U3R5bGUgfSBmcm9tICdAL3N0eWxlcy90eXBvZ3JhcGh5JztcclxuXHJcbmludGVyZmFjZSBDYWxlbmRhcklucHV0UHJvcHMge1xyXG5cdGxhYmVsOiBzdHJpbmc7XHJcblx0c3R5bGU/OiBDU1NQcm9wZXJ0aWVzO1xyXG5cdHZhbHVlOiBzdHJpbmc7XHJcblx0b25DaGFuZ2U/OiAoKSA9PiB2b2lkO1xyXG5cdG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xyXG5cdGVycm9yOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcblx0aGFzRXJyb3I6IGJvb2xlYW47XHJcblx0bmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG4vLyBOZWVkIHRvIHNwcmVhZCBwcm9wcyBiZWNhdXNlIG9mIGhvdyByZWFjdC1kYXRlcGlja2VyIHdvcmtzIHdpdGggY3VzdG9tIGlucHV0c1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZGlzcGxheS1uYW1lXHJcbmV4cG9ydCBjb25zdCBDYWxlbmRhcklucHV0ID0gZm9yd2FyZFJlZjxIVE1MSW5wdXRFbGVtZW50LCBDYWxlbmRhcklucHV0UHJvcHM+KFxyXG5cdCh7IGxhYmVsLCBzdHlsZSwgZXJyb3IsIGhhc0Vycm9yLCBuYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcclxuXHRcdDxDdXN0b21JbnB1dFdyYXBwZXIgc3R5bGU9e3N0eWxlfT5cclxuXHRcdFx0PElucHV0SGVhZGVyPlxyXG5cdFx0XHRcdDxMYWJlbCBodG1sRm9yPXtuYW1lfSBoYXNFcnJvcj17aGFzRXJyb3J9PlxyXG5cdFx0XHRcdFx0e2xhYmVsfVxyXG5cdFx0XHRcdDwvTGFiZWw+XHJcblx0XHRcdFx0e2hhc0Vycm9yICYmIDxFcnJvcj57ZXJyb3J9PC9FcnJvcj59XHJcblx0XHRcdDwvSW5wdXRIZWFkZXI+XHJcblx0XHRcdDxJbnB1dFdyYXBwZXI+XHJcblx0XHRcdFx0PEN1c3RvbUlucHV0IGlkPXtuYW1lfSB7Li4ucHJvcHN9IGhhc0Vycm9yPXtoYXNFcnJvcn0gcmVmPXtyZWZ9IC8+XHJcblx0XHRcdFx0PElucHV0SWNvbj5cclxuXHRcdFx0XHRcdDxJbWFnZSBzcmM9e2ljb25DYWxlbmRhclNyY30gYWx0PVwiXCIgLz5cclxuXHRcdFx0XHQ8L0lucHV0SWNvbj5cclxuXHRcdFx0PC9JbnB1dFdyYXBwZXI+XHJcblx0XHQ8L0N1c3RvbUlucHV0V3JhcHBlcj5cclxuXHQpXHJcbik7XHJcblxyXG5jb25zdCBDdXN0b21JbnB1dFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1mbG93OiBjb2x1bW47XHJcblx0d2lkdGg6IDEwMCU7XHJcbmA7XHJcblxyXG5jb25zdCBJbnB1dEhlYWRlciA9IHN0eWxlZC5kaXZgXHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWZsb3c6IGNvbHVtbjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0d2lkdGg6IDEwMCU7XHJcblxyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdGZsZXgtZmxvdzogcmV2ZXJ0O1xyXG5cdH1cclxuYDtcclxuXHJcbmNvbnN0IExhYmVsID0gc3R5bGVkLmxhYmVsPHsgaGFzRXJyb3I6IGJvb2xlYW4gfT5gXHJcblx0JHtib2R5VGV4dFN0eWxlfTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZmxvdzogY29sdW1uO1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0Y29sb3I6ICR7KHApID0+IChwLmhhc0Vycm9yID8gcC50aGVtZS5DT0xPUlMud2FybmluZ1sxXSA6IHAudGhlbWUuQ09MT1JTLnByaW1hcnlbM10pfTtcclxuYDtcclxuXHJcbmNvbnN0IElucHV0V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRoZWlnaHQ6IDQ4cHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcbmA7XHJcblxyXG5jb25zdCBDdXN0b21JbnB1dCA9IHN0eWxlZC5pbnB1dDx7IGhhc0Vycm9yOiBib29sZWFuIH0+YFxyXG5cdCR7aDRUZXh0U3R5bGV9O1xyXG5cdHBhZGRpbmctbGVmdDogMjBweDtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGJvcmRlcjogc29saWQgMnB4ICR7KHApID0+IChwLmhhc0Vycm9yID8gcC50aGVtZS5DT0xPUlMud2FybmluZ1sxXSA6IHAudGhlbWUuQ09MT1JTLmdyZXlbMl0pfTtcclxuXHJcblx0Jjpob3ZlciB7XHJcblx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRib3JkZXI6IHNvbGlkIDJweCAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy5wcmltYXJ5WzFdfTtcclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBJbnB1dEljb24gPSBzdHlsZWQuZGl2YFxyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRyaWdodDogMTZweDtcclxuYDtcclxuIiwiaW1wb3J0IHsgRkMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERhdGVQaWNrZXIsIHsgUmVhY3REYXRlUGlja2VyUHJvcHMgfSBmcm9tICdyZWFjdC1kYXRlcGlja2VyJztcclxuaW1wb3J0IHsgQ29udHJvbGxlciwgdXNlRm9ybUNvbnRleHQgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgc3R5bGVkLCB7IGNyZWF0ZUdsb2JhbFN0eWxlLCBDU1NQcm9wZXJ0aWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgQ2FsZW5kYXJIZWFkZXIgfSBmcm9tICcuL0NhbGVuZGFySGVhZGVyJztcclxuaW1wb3J0IHsgQ2FsZW5kYXJJbnB1dCB9IGZyb20gJy4vQ2FsZW5kYXJJbnB1dCc7XHJcblxyXG5pbXBvcnQgeyBoNFRleHRTdHlsZSB9IGZyb20gJ0Avc3R5bGVzL3R5cG9ncmFwaHknO1xyXG5cclxuaW50ZXJmYWNlIERhdGVGaWVsZFByb3BzIGV4dGVuZHMgT21pdDxSZWFjdERhdGVQaWNrZXJQcm9wcywgJ29uQ2hhbmdlJz4ge1xyXG5cdHN0eWxlPzogQ1NTUHJvcGVydGllcztcclxuXHRsYWJlbDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERhdGVGaWVsZDogRkM8RGF0ZUZpZWxkUHJvcHM+ID0gKHsgc3R5bGUsIGxhYmVsLCBuYW1lIH0pID0+IHtcclxuXHRjb25zdCB7IGNvbnRyb2wgfSA9IHVzZUZvcm1Db250ZXh0KCk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8V3JhcHBlciBzdHlsZT17c3R5bGV9PlxyXG5cdFx0XHQ8Q29udHJvbGxlclxyXG5cdFx0XHRcdG5hbWU9e25hbWV9XHJcblx0XHRcdFx0Y29udHJvbD17Y29udHJvbH1cclxuXHRcdFx0XHRyZW5kZXI9eyh7IGZpZWxkLCBmaWVsZFN0YXRlIH0pID0+IChcclxuXHRcdFx0XHRcdDxSZWFjdERhdGVQaWNrZXJcclxuXHRcdFx0XHRcdFx0Y2xvc2VPblNjcm9sbD17KCkgPT4gdHJ1ZX1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBmaWVsZC5vbkNoYW5nZShlLnRvRGF0ZVN0cmluZygpKX1cclxuXHRcdFx0XHRcdFx0c2VsZWN0ZWQ9e2ZpZWxkLnZhbHVlfVxyXG5cdFx0XHRcdFx0XHRzaG93UG9wcGVyQXJyb3c9e2ZhbHNlfVxyXG5cdFx0XHRcdFx0XHRkYXRlRm9ybWF0PVwiZCBNTU0geXl5eVwiXHJcblx0XHRcdFx0XHRcdGNhbGVuZGFyQ2xhc3NOYW1lPVwiY3VzdG9tLWNhbGVuZGFyXCJcclxuXHRcdFx0XHRcdFx0ZGF5Q2xhc3NOYW1lPXsoKSA9PiAnY3VzdG9tLWRheSd9XHJcblx0XHRcdFx0XHRcdGN1c3RvbUlucHV0PXtcclxuXHRcdFx0XHRcdFx0XHQ8Q2FsZW5kYXJJbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT17ZmllbGQubmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdGhhc0Vycm9yPXtmaWVsZFN0YXRlLmludmFsaWR9XHJcblx0XHRcdFx0XHRcdFx0XHRlcnJvcj17ZmllbGRTdGF0ZS5lcnJvcj8ubWVzc2FnZX1cclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtmaWVsZC52YWx1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtsYWJlbH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHJlbmRlckN1c3RvbUhlYWRlcj17KHsgbW9udGhEYXRlLCBkZWNyZWFzZU1vbnRoLCBpbmNyZWFzZU1vbnRoIH0pID0+IChcclxuXHRcdFx0XHRcdFx0XHQ8Q2FsZW5kYXJIZWFkZXJcclxuXHRcdFx0XHRcdFx0XHRcdG1vbnRoRGF0ZT17bW9udGhEYXRlfVxyXG5cdFx0XHRcdFx0XHRcdFx0ZGVjcmVhc2VNb250aD17ZGVjcmVhc2VNb250aH1cclxuXHRcdFx0XHRcdFx0XHRcdGluY3JlYXNlTW9udGg9e2luY3JlYXNlTW9udGh9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0KX1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PERhdGVQaWNrZXJTdHlsZXMgLz5cclxuXHRcdDwvV3JhcHBlcj5cclxuXHQpO1xyXG59O1xyXG5cclxuLy8gTmVlZCB0aGlzIGFyYml0cmFyeSBkaXYgdG8gcHJldmVudCB0aGUgZGF0ZS1waWNrZXIgZnJvbSBwdXNoaW5nIGNvbnRlbnQgYmVsb3cgaXQgZG93biBhIGZleCBweFxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBgO1xyXG5cclxuLy8gT3ZlcmlkZSByZWFjdC1kYXRlcGlja2VyIHN0eWxlcyB3aXRoIGEgZ29iYWxzdHlsZSB0aGlzIGEgYml0IGhhY2t5IGJ1dCBvbmx5IHdvcmthcm91bmQgSSBjb3VsZCBmaW5kIHRoYXQgd2FzIHVzZWFibGVcclxuY29uc3QgRGF0ZVBpY2tlclN0eWxlcyA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4uY3VzdG9tLWNhbGVuZGFyIHtcclxuICAgICAke2g0VGV4dFN0eWxlfTtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy53aGl0ZX07XHJcbiAgICAgcGFkZGluZzogMjJweCAxMHB4IDIycHggMTBweDtcclxuICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSg3MiwgODQsIDE1OSwgMC4yNSk7XHJcblx0XHQgXHJcbn1cclxuXHJcbi5jdXN0b20tZGF5e1xyXG5cdGNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy5kYXJrWzFdfTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgY29sb3I6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLnByaW1hcnlbMV19O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucmVhY3QtZGF0ZXBpY2tlcl9fZGF5LS1zZWxlY3RlZCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMucHJpbWFyeVsxXX07XHJcbiAgY29sb3I6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLndoaXRlfTtcclxufVxyXG5cclxuLnJlYWN0LWRhdGVwaWNrZXJfX2RheS0ta2V5Ym9hcmQtc2VsZWN0ZWQge1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLnByaW1hcnlbMV19O1xyXG4gICAgIGNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy53aGl0ZX07XHJcbn1cclxuXHJcblxyXG4ucmVhY3QtZGF0ZXBpY2tlcl9fZGF5LS1vdXRzaWRlLW1vbnRoe1xyXG4gICAgICBjb2xvcjogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMuZGFya1sxXX07XHJcbiAgICAgIG9wYWNpdHk6IDAuMDg7XHJcbiAgICAgfVxyXG5cclxuXHRcdCAucmVhY3QtZGF0ZXBpY2tlcl9fZGF5LW5hbWVze1xyXG4gICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbiAucmVhY3QtZGF0ZXBpY2tlcl9faGVhZGVye1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgYm9yZGVyOiBub25lO1xyXG59XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgSW5wdXRIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlQ29udHJvbGxlciwgdXNlRm9ybUNvbnRleHQgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgc3R5bGVkLCB7IENTU1Byb3BlcnRpZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBFcnJvciB9IGZyb20gJy4uL0Vycm9yJztcclxuXHJcbmltcG9ydCB7IGJvZHlUZXh0U3R5bGUsIGg0VGV4dFN0eWxlIH0gZnJvbSAnQC9zdHlsZXMvdHlwb2dyYXBoeSc7XHJcblxyXG5pbnRlcmZhY2UgRnJvbUZpZWxkUHJvcHMgZXh0ZW5kcyBJbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+IHtcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0c3R5bGU/OiBDU1NQcm9wZXJ0aWVzO1xyXG5cdGNsYXNzTmFtZT86IHN0cmluZztcclxuXHRsYWJlbDogc3RyaW5nO1xyXG5cdHR5cGU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEZvcm1GaWVsZDogRkM8RnJvbUZpZWxkUHJvcHM+ID0gKHtcclxuXHRuYW1lLFxyXG5cdHN0eWxlLFxyXG5cdGNsYXNzTmFtZSxcclxuXHRsYWJlbCxcclxuXHR0eXBlLFxyXG5cdC4uLnByb3BzXHJcbn0pID0+IHtcclxuXHRjb25zdCB7IGNvbnRyb2wgfSA9IHVzZUZvcm1Db250ZXh0KCk7XHJcblx0Y29uc3QgeyBmaWVsZCwgZmllbGRTdGF0ZSB9ID0gdXNlQ29udHJvbGxlcih7IG5hbWUsIGNvbnRyb2wgfSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8V3JhcHBlciBjbGFzc05hbWU9e2NsYXNzTmFtZX0gc3R5bGU9e3N0eWxlfT5cclxuXHRcdFx0PElucHV0SGVhZGVyPlxyXG5cdFx0XHRcdDxMYWJlbCBodG1sRm9yPXtuYW1lfSBoYXNFcnJvcj17ZmllbGRTdGF0ZS5pbnZhbGlkfT5cclxuXHRcdFx0XHRcdHtsYWJlbH1cclxuXHRcdFx0XHQ8L0xhYmVsPlxyXG5cdFx0XHRcdHtmaWVsZFN0YXRlLmludmFsaWQgJiYgPEVycm9yPntmaWVsZFN0YXRlLmVycm9yPy5tZXNzYWdlfTwvRXJyb3I+fVxyXG5cdFx0XHQ8L0lucHV0SGVhZGVyPlxyXG5cdFx0XHQ8SW5wdXQgaWQ9e25hbWV9IHsuLi5maWVsZH0gey4uLnByb3BzfSB0eXBlPXt0eXBlfSBoYXNFcnJvcj17ZmllbGRTdGF0ZS5pbnZhbGlkfSAvPlxyXG5cdFx0PC9XcmFwcGVyPlxyXG5cdCk7XHJcbn07XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuXHQke2JvZHlUZXh0U3R5bGV9O1xyXG5gO1xyXG5cclxuY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWw8eyBoYXNFcnJvcjogYm9vbGVhbiB9PmBcclxuXHRmbGV4LWZsb3c6IGNvbHVtbjtcclxuXHRjb2xvcjogJHsocCkgPT4gKHAuaGFzRXJyb3IgPyBwLnRoZW1lLkNPTE9SUy53YXJuaW5nWzFdIDogcC50aGVtZS5DT0xPUlMucHJpbWFyeVszXSl9O1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBJbnB1dEhlYWRlciA9IHN0eWxlZC5kaXZgXHJcblx0ZGlzcGxheTogZmxleDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbmA7XHJcblxyXG5jb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dDx7IGhhc0Vycm9yOiBib29sZWFuIH0+YFxyXG5cdCR7aDRUZXh0U3R5bGV9O1xyXG5cdGhlaWdodDogNDhweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdGJvcmRlcjogc29saWQgMnB4ICR7KHApID0+IChwLmhhc0Vycm9yID8gcC50aGVtZS5DT0xPUlMud2FybmluZ1sxXSA6IHAudGhlbWUuQ09MT1JTLmdyZXlbMl0pfTtcclxuXHR3aWR0aDogMTAwJTtcclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBmb3JtYXRWYWx1ZSB9IGZyb20gJ3JlYWN0LWN1cnJlbmN5LWlucHV0LWZpZWxkJztcclxuaW1wb3J0IHsgdXNlRm9ybUNvbnRleHQsIHVzZVdhdGNoIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBGb3JtRmllbGQgfSBmcm9tICcuL0Zvcm1GaWVsZCc7XHJcbmltcG9ydCB7IFByaWNlRmllbGQgfSBmcm9tICcuL1ByaWNlRmllbGQnO1xyXG5cclxuaW1wb3J0IHsgYm9keVRleHRTdHlsZSwgaDRUZXh0U3R5bGUgfSBmcm9tICdAL3N0eWxlcy90eXBvZ3JhcGh5JztcclxuXHJcbmludGVyZmFjZSBJdGVtRmllbGRQcm9wcyB7XHJcblx0aWR4OiBudW1iZXI7XHJcblx0cmVtb3ZlOiAoaW5kZXg/OiBudW1iZXIgfCBudW1iZXJbXSkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEl0ZW1GaWVsZDogRkM8SXRlbUZpZWxkUHJvcHM+ID0gKHsgaWR4LCByZW1vdmUgfSkgPT4ge1xyXG5cdGNvbnN0IHsgY29udHJvbCwgZ2V0VmFsdWVzIH0gPSB1c2VGb3JtQ29udGV4dCgpO1xyXG5cdGNvbnN0IFt0b3RhbCwgc2V0VG90YWxdID0gdXNlU3RhdGUoJzAnKTtcclxuXHJcblx0Y29uc3Qgd2F0Y2hlZFF1YW50aXR5QW5kUHJpY2UgPSB1c2VXYXRjaCh7XHJcblx0XHRjb250cm9sLFxyXG5cdFx0bmFtZTogW2BpbnZvaWNlX2l0ZW1zWyR7aWR4fV0ucXVhbnRpdHlgLCBgaW52b2ljZV9pdGVtc1ske2lkeH1dLnByaWNlYF0sXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IGludm9pY2VJdGVtID0gZ2V0VmFsdWVzKCdpbnZvaWNlX2l0ZW1zJylbaWR4XTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmIChpc05hTih3YXRjaGVkUXVhbnRpdHlBbmRQcmljZVswXSkgfHwgaXNOYU4od2F0Y2hlZFF1YW50aXR5QW5kUHJpY2VbMV0pKSB7XHJcblx0XHRcdHJldHVybiBzZXRUb3RhbCgnMCcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGZvcm1hdHRlZFRvdGFsID0gZm9ybWF0VmFsdWUoe1xyXG5cdFx0XHR2YWx1ZTogKCh3YXRjaGVkUXVhbnRpdHlBbmRQcmljZVswXSAqIHdhdGNoZWRRdWFudGl0eUFuZFByaWNlWzFdKSAvIDEwMClcclxuXHRcdFx0XHQudG9GaXhlZCgyKVxyXG5cdFx0XHRcdC50b1N0cmluZygpLFxyXG5cdFx0XHRncm91cFNlcGFyYXRvcjogJywnLFxyXG5cdFx0XHRkZWNpbWFsU2NhbGU6IDIsXHJcblx0XHRcdGRlY2ltYWxTZXBhcmF0b3I6ICcuJyxcclxuXHRcdFx0cHJlZml4OiAnJCcsXHJcblx0XHR9KTtcclxuXHJcblx0XHRzZXRUb3RhbChmb3JtYXR0ZWRUb3RhbCk7XHJcblx0fSwgW3dhdGNoZWRRdWFudGl0eUFuZFByaWNlXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8V3JhcHBlcj5cclxuXHRcdFx0PEl0ZW1OYW1lIGxhYmVsPVwiSXRlbSBOYW1lXCIgbmFtZT17YGludm9pY2VfaXRlbXNbJHtpZHh9XS5uYW1lYH0gdHlwZT1cInRleHRcIiAvPlxyXG5cdFx0XHQ8UXVhbnRpdHkgbGFiZWw9XCJRdHlcIiBuYW1lPXtgaW52b2ljZV9pdGVtc1ske2lkeH1dLnF1YW50aXR5YH0gdHlwZT1cIm51bWJlclwiIG1pbj17MH0gLz5cclxuXHRcdFx0PFByaWNlRmllbGQgZm9ybVByaWNlVmFsdWU9e2ludm9pY2VJdGVtPy5wcmljZSA/PyAwfSBuYW1lPXtgaW52b2ljZV9pdGVtc1ske2lkeH1dLnByaWNlYH0gLz5cclxuXHRcdFx0PFRvdGFsV3JhcHBlcj5cclxuXHRcdFx0XHQ8c3Bhbj5Ub3RhbDwvc3Bhbj5cclxuXHRcdFx0XHQ8VG90YWxQcmljZT57dG90YWx9PC9Ub3RhbFByaWNlPlxyXG5cdFx0XHQ8L1RvdGFsV3JhcHBlcj5cclxuXHRcdFx0PERlbGV0ZUJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gcmVtb3ZlKGlkeCl9PlxyXG5cdFx0XHRcdDxzdmcgd2lkdGg9XCIxM1wiIGhlaWdodD1cIjE2XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG5cdFx0XHRcdFx0PHBhdGhcclxuXHRcdFx0XHRcdFx0ZD1cIk0xMS41ODMgMy41NTZ2MTAuNjY2YzAgLjk4Mi0uNzk1IDEuNzc4LTEuNzc3IDEuNzc4SDIuNjk0YTEuNzc3IDEuNzc3IDAgMDEtMS43NzctMS43NzhWMy41NTZoMTAuNjY2ek04LjQ3MyAwbC44ODguODg5aDMuMTExdjEuNzc4SC4wMjhWLjg4OWgzLjExTDQuMDI5IDBoNC40NDR6XCJcclxuXHRcdFx0XHRcdFx0ZmlsbFJ1bGU9XCJub256ZXJvXCJcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9zdmc+XHJcblx0XHRcdDwvRGVsZXRlQnV0dG9uPlxyXG5cdFx0PC9XcmFwcGVyPlxyXG5cdCk7XHJcbn07XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmZpZWxkc2V0YFxyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1mbG93OiByb3c7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdGdhcDogMTZweDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLnRhYmxldEFuZFVwfSB7XHJcblx0XHRnYXA6IHJldmVydDtcclxuXHRcdGZsZXgtd3JhcDogcmV2ZXJ0O1xyXG5cdH1cclxuYDtcclxuXHJcbi8vIEl0ZW0gTmFtZSBGaWVsZFxyXG5jb25zdCBJdGVtTmFtZSA9IHN0eWxlZChGb3JtRmllbGQpYFxyXG5cdG1pbi13aWR0aDogMzA5cHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0bWluLXdpZHRoOiByZXZlcnQ7XHJcblx0XHR3aWR0aDogMjE0cHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcblx0fVxyXG5gO1xyXG5cclxuLy8gUXVhbml0eSBGaWVsZFxyXG5jb25zdCBRdWFudGl0eSA9IHN0eWxlZChGb3JtRmllbGQpYFxyXG5cdG1heC13aWR0aDogNjRweDtcclxuXHRzcGFuIHtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdGlucHV0IHtcclxuXHRcdHBhZGRpbmc6IDA7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLnRhYmxldEFuZFVwfSB7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcblx0XHR3aWR0aDogNDZweDtcclxuXHJcblx0XHRkaXYge1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdH1cclxuXHJcblx0XHRpbnB1dCB7XHJcblx0XHRcdHBhZGRpbmc6IDA7XHJcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdH1cclxuXHR9XHJcbmA7XHJcblxyXG4vLyBUb3RhbCBEaXNwbGF5IChzdHlsZWQgdG8gbG9vayBsaWtlIGZpZWxkKVxyXG5jb25zdCBUb3RhbFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG5cdCR7Ym9keVRleHRTdHlsZX07XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWZsb3c6IGNvbHVtbjtcclxuXHRjb2xvcjogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMucHJpbWFyeVszXX07XHJcblx0bWF4LXdpZHRoOiA2MHB4O1xyXG5cclxuXHRzcGFuIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLnRhYmxldEFuZFVwfSB7XHJcblx0XHQvKiBtYXgtd2lkdGg6IDQ1cHg7ICovXHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgVG90YWxQcmljZSA9IHN0eWxlZC5wYFxyXG5cdCR7aDRUZXh0U3R5bGV9O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRoZWlnaHQ6IDQ4cHg7XHJcblx0d2lkdGg6IDkwcHg7XHJcblx0b3ZlcmZsb3c6IGF1dG87XHJcbmA7XHJcblxyXG4vLyBEZWxldGUgSXRlbSBidXR0b25cclxuY29uc3QgRGVsZXRlQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuXHRoZWlnaHQ6IDQ4cHg7XHJcblx0YWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcblx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0c3ZnIHtcclxuXHRcdGZpbGw6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLmdyZXlbMV19O1xyXG5cdH1cclxuXHJcblx0Jjpob3ZlciB7XHJcblx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG5cdFx0c3ZnIHtcclxuXHRcdFx0ZmlsbDogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMud2FybmluZ1sxXX07XHJcblx0XHR9XHJcblx0fVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDdXJyZW5jeUlucHV0IGZyb20gJ3JlYWN0LWN1cnJlbmN5LWlucHV0LWZpZWxkJztcclxuaW1wb3J0IHsgQ29udHJvbGxlciwgdXNlRm9ybUNvbnRleHQgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCB7IGJvZHlUZXh0U3R5bGUsIGg0VGV4dFN0eWxlIH0gZnJvbSAnQC9zdHlsZXMvdHlwb2dyYXBoeSc7XHJcblxyXG5pbnRlcmZhY2UgUHJpY2VGaWVsZFByb3BzIHtcclxuXHRmb3JtUHJpY2VWYWx1ZTogbnVtYmVyO1xyXG5cdG5hbWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFByaWNlRmllbGQ6IEZDPFByaWNlRmllbGRQcm9wcz4gPSAoeyBmb3JtUHJpY2VWYWx1ZSwgbmFtZSB9KSA9PiB7XHJcblx0Y29uc3QgeyBjb250cm9sIH0gPSB1c2VGb3JtQ29udGV4dCgpO1xyXG5cdGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGU8c3RyaW5nIHwgdW5kZWZpbmVkPignMCcpO1xyXG5cclxuXHQvLyBPaCB0aGUgam95cyBvZiB3b3JraW5nIHdpdGggY3VycmVuY3kuLi5cclxuXHQvLyBTbyBlc3NlbnRhaWxseSB0aGlzIGlucHV0IGlzIHNldHRpbmcgdGhlIGZvcm0gc3RhdGUgdmFsdWUgYXMgYSBmbG9hdCBpbiBjZW50cywgd2hpbGVcclxuXHQvLyBtYW5hZ2luZyB0aGUgbG9jYWwgc3RhdGUgb2YgcHJpY2UgaW5wdXQgYXMgYSBzdHJpbmcgaW4gZG9sbGFycyB3aXRoIGRlY2ltYWxzIEkgaGF2ZSBubyBpZGVhIHdoeVxyXG5cdC8vIHRoZSByZWFjdC1jdXJyZW5jeSBpbnB1dCB3b250IGFjY3BldCBvbiBjaGFuZ2UgdmFsdWVzIGFzIGZsb2F0J3MgYnV0IGl0IGRvZXNuJ3Qgc28gYWxhcyBoZXJlIHdlIGFyZS4uXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHQvLyBPbiBtb3VudCBjb252ZXJ0IHRoZSB0aGUgc2F2ZWQgdmFsdWUgZnJvbSB2YWx1ZSBmcm9tIGNlbnRzIGFzIGEgSU5UIHRvIHRvIGRvbGxhcnMgYXMgc3RyaW5nXHJcblx0XHRzZXRQcmljZShwYXJzZUZsb2F0KChmb3JtUHJpY2VWYWx1ZSAvIDEwMCkudG9GaXhlZCgyKSkudG9TdHJpbmcoKSk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PFdyYXBwZXI+XHJcblx0XHRcdDxzcGFuPlByaWNlPC9zcGFuPlxyXG5cdFx0XHQ8Q29udHJvbGxlclxyXG5cdFx0XHRcdGNvbnRyb2w9e2NvbnRyb2x9XHJcblx0XHRcdFx0bmFtZT17bmFtZX1cclxuXHRcdFx0XHRyZW5kZXI9eyh7IGZpZWxkIH0pID0+IChcclxuXHRcdFx0XHRcdDxQcmljZVxyXG5cdFx0XHRcdFx0XHRhbGxvd05lZ2F0aXZlVmFsdWU9e2ZhbHNlfVxyXG5cdFx0XHRcdFx0XHRkZWNpbWFsU2NhbGU9ezJ9XHJcblx0XHRcdFx0XHRcdGludGxDb25maWc9e3sgbG9jYWxlOiAnZW4tVVMnLCBjdXJyZW5jeTogJ1VTRCcgfX1cclxuXHRcdFx0XHRcdFx0b25WYWx1ZUNoYW5nZT17KGUpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoZSA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvLyBJZiBlIGlzIHVuZGVmaW5lZCB3ZSBzdGlsbCBuZWVkIHRvIHBhc3MgaXQgdG8gdGhlIGN1cnJlbmN5IGlucHV0IGFzIGEgdmFsdWVcclxuXHRcdFx0XHRcdFx0XHRcdC8vIHRoaXMgaXMgd2hhdCBsZXRzIHVzZXJzIHR5cGUgaW4gbnVtYmVycyBhcyBkZWNpbWFscywgYnV0IHdlIG1ha2Ugc3VyZSB0byBzZXQgdGhlIGZvcm0gdmFsdWUgdG8gMCBpbiBjYXNlIHRoZXkgc3VibWl0XHJcblx0XHRcdFx0XHRcdFx0XHQvLyB3aXRoIG5vIHByaWNlXHJcblx0XHRcdFx0XHRcdFx0XHRmaWVsZC5vbkNoYW5nZSgwKTtcclxuXHRcdFx0XHRcdFx0XHRcdHNldFByaWNlKGUpO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRmaWVsZC5vbkNoYW5nZShNYXRoLnJvdW5kKHBhcnNlRmxvYXQoZSkgKiAxMDApKTtcclxuXHRcdFx0XHRcdFx0XHRcdHNldFByaWNlKGUpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtmaWVsZC52YWx1ZSAvIDEwMH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9e3ByaWNlfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQpfVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9XcmFwcGVyPlxyXG5cdCk7XHJcbn07XHJcblxyXG4vLyBQcmljZSBGaWVsZFxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuXHQke2JvZHlUZXh0U3R5bGV9O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1mbG93OiBjb2x1bW47XHJcblx0Y29sb3I6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLnByaW1hcnlbM119O1xyXG5cdG1heC13aWR0aDogMTAwcHg7XHJcblx0c3BhbiB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdH1cclxuYDtcclxuXHJcbmNvbnN0IFByaWNlID0gc3R5bGVkKEN1cnJlbmN5SW5wdXQpYFxyXG5cdCR7aDRUZXh0U3R5bGV9O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRwYWRkaW5nOiAwIDEwcHg7XHJcblx0bWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG5cdGhlaWdodDogNDhweDtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0Ym9yZGVyOiBzb2xpZCAycHggJHsocCkgPT4gcC50aGVtZS5DT0xPUlMuZ3JleVsyXX07XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgaDRUZXh0U3R5bGUgfSBmcm9tICdAL3N0eWxlcy90eXBvZ3JhcGh5JztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcblx0Y2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxuXHRsYWJlbDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRm9ybVNlY3Rpb24gPSAoeyBjaGlsZHJlbiwgbGFiZWwgfTogUHJvcHMpID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PFdyYXBwZXI+XHJcblx0XHRcdDxMYWJlbD57bGFiZWx9PC9MYWJlbD5cclxuXHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0PC9XcmFwcGVyPlxyXG5cdCk7XHJcbn07XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmZpZWxkc2V0YFxyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0Z2FwOiAyNHB4O1xyXG5cdGZsZXgtZmxvdzogY29sdW1uO1xyXG5cdG1hcmdpbi10b3A6IDI0cHg7XHJcbmA7XHJcblxyXG5jb25zdCBMYWJlbCA9IHN0eWxlZC5oM2BcclxuXHQke2g0VGV4dFN0eWxlfTtcclxuXHRjb2xvcjogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMucHJpbWFyeVsxXX07XHJcbmA7XHJcbiIsImltcG9ydCB7IEZDIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCB7IGJvZHkyVGV4dFN0eWxlLCBoNFRleHRTdHlsZSwgdGFibGVGb290ZXJUb3RhbFRleHRTdHlsZSB9IGZyb20gJ0Avc3R5bGVzL3R5cG9ncmFwaHknO1xyXG5pbXBvcnQgeyBJbnZvaWNlSXRlbSB9IGZyb20gJ0AvdHlwZXMvaW5kZXgnO1xyXG5pbXBvcnQgeyBjYWxjdWxhdGVJdGVtVG90YWwgfSBmcm9tICdAL3V0aWxzL2NhbGN1bGF0ZUl0ZW1Ub3RhbCc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZUludm9pY2VUb3RhbCB9IGZyb20gJ0AvdXRpbHMvY2FsY3VsYXRlVG90YWwnO1xyXG5cclxuaW50ZXJmYWNlIERlc2t0b3BUYWJsZVByb3BzIHtcclxuXHRjbGFzc05hbWU/OiBzdHJpbmc7XHJcblx0aXRlbXM6IEludm9pY2VJdGVtW107XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEZXNrdG9wVGFibGU6IEZDPERlc2t0b3BUYWJsZVByb3BzPiA9ICh7IGNsYXNzTmFtZSwgaXRlbXMgfSkgPT4ge1xyXG5cdGNvbnNvbGUubG9nKGl0ZW1zLmxlbmd0aCk7XHJcblx0cmV0dXJuIChcclxuXHRcdDxUYWJsZSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XHJcblx0XHRcdDx0aGVhZD5cclxuXHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHQ8SXRlbU5hbWVDb2x1bW4+SXRlbSBOYW1lPC9JdGVtTmFtZUNvbHVtbj5cclxuXHRcdFx0XHRcdDxRdWFudGl0eUNvbHVtbj5RVFkuPC9RdWFudGl0eUNvbHVtbj5cclxuXHRcdFx0XHRcdDxQcmljZUNvbHVtbj5QcmljZTwvUHJpY2VDb2x1bW4+XHJcblx0XHRcdFx0XHQ8VG90YWxDb2x1bW4+VG90YWw8L1RvdGFsQ29sdW1uPlxyXG5cdFx0XHRcdDwvdHI+XHJcblx0XHRcdDwvdGhlYWQ+XHJcblx0XHRcdDxCb2R5PlxyXG5cdFx0XHRcdHtpdGVtcy5tYXAoKGl0ZW0sIGlkeCkgPT4gKFxyXG5cdFx0XHRcdFx0PHRyIGtleT17aXRlbS5uYW1lICsgaWR4fT5cclxuXHRcdFx0XHRcdFx0PE5hbWU+e2l0ZW0ubmFtZX08L05hbWU+XHJcblx0XHRcdFx0XHRcdDxRdWFudGl0eT57aXRlbS5xdWFudGl0eX08L1F1YW50aXR5PlxyXG5cdFx0XHRcdFx0XHQ8UHJpY2U+JHsoaXRlbS5wcmljZSAvIDEwMCkudG9GaXhlZCgyKX08L1ByaWNlPlxyXG5cdFx0XHRcdFx0XHQ8VG90YWw+JHtjYWxjdWxhdGVJdGVtVG90YWwoaXRlbS5xdWFudGl0eSwgaXRlbS5wcmljZSl9PC9Ub3RhbD5cclxuXHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0KSl9XHJcblx0XHRcdDwvQm9keT5cclxuXHRcdFx0PEZvb3Rlcj5cclxuXHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHQ8VG90YWxMYWJlbD5HcmFuZCBUb3RhbDwvVG90YWxMYWJlbD5cclxuXHRcdFx0XHRcdDxJbnZvaWNlVG90YWwgY29sU3Bhbj17M30+wqN7Y2FsY3VsYXRlSW52b2ljZVRvdGFsKGl0ZW1zKX08L0ludm9pY2VUb3RhbD5cclxuXHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHQ8L0Zvb3Rlcj5cclxuXHRcdDwvVGFibGU+XHJcblx0KTtcclxufTtcclxuXHJcbmNvbnN0IFRhYmxlID0gc3R5bGVkLnRhYmxlYFxyXG5cdCR7aDRUZXh0U3R5bGV9O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLmdyZXlbNF19O1xyXG5cdGJvcmRlci1yYWRpdXM6IDhweCA4cHggMCAwO1xyXG5cclxuXHR0aCB7XHJcblx0XHQke2JvZHkyVGV4dFN0eWxlfTtcclxuXHRcdGNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy5wcmltYXJ5WzNdfTtcclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBCb2R5ID0gc3R5bGVkLnRib2R5YFxyXG5cdHRyOmZpcnN0LWNoaWxkID4gdGQge1xyXG5cdFx0cGFkZGluZy10b3A6IDMycHg7XHJcblx0fVxyXG5cdHRkIHtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAzMnB4O1xyXG5cdH1cclxuYDtcclxuXHJcbi8vIEhlYWRcclxuXHJcbmNvbnN0IEl0ZW1OYW1lQ29sdW1uID0gc3R5bGVkLnRoYFxyXG5cdHRleHQtYWxpZ246IHN0YXJ0O1xyXG5cdHdpZHRoOiAyNzZweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDMycHg7XHJcblx0cGFkZGluZy10b3A6IDMycHg7XHJcbmA7XHJcbmNvbnN0IFF1YW50aXR5Q29sdW1uID0gc3R5bGVkLnRoYFxyXG5cdHdpZHRoOiAyOXB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuYDtcclxuY29uc3QgUHJpY2VDb2x1bW4gPSBzdHlsZWQudGhgXHJcblx0d2lkdGg6IDExN3B4O1xyXG5cdHRleHQtYWxpZ246IGVuZDtcclxuYDtcclxuY29uc3QgVG90YWxDb2x1bW4gPSBzdHlsZWQudGhgXHJcblx0d2lkdGg6IDEzOHB4O1xyXG5cdHRleHQtYWxpZ246IGVuZDtcclxuXHRwYWRkaW5nLXJpZ2h0OiAzMnB4O1xyXG5gO1xyXG5cclxuLy8gUm93XHJcblxyXG5jb25zdCBOYW1lID0gc3R5bGVkLnRkYFxyXG5cdHRleHQtYWxpZ246IHN0YXJ0O1xyXG5cdHBhZGRpbmctbGVmdDogMzJweDtcclxuYDtcclxuY29uc3QgUXVhbnRpdHkgPSBzdHlsZWQudGRgXHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy5wcmltYXJ5WzNdfTtcclxuYDtcclxuY29uc3QgUHJpY2UgPSBzdHlsZWQudGRgXHJcblx0dGV4dC1hbGlnbjogZW5kO1xyXG5cdGNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy5wcmltYXJ5WzNdfTtcclxuYDtcclxuY29uc3QgVG90YWwgPSBzdHlsZWQudGRgXHJcblx0dGV4dC1hbGlnbjogZW5kO1xyXG5cdHBhZGRpbmctcmlnaHQ6IDMycHg7XHJcbmA7XHJcblxyXG4vLyBGb290ZXJcclxuXHJcbmNvbnN0IEZvb3RlciA9IHN0eWxlZC50Zm9vdGBcclxuXHR0ZCB7XHJcblx0XHRwYWRkaW5nLXRvcDogMzFweDtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAzMXB4O1xyXG5cdH1cclxuYDtcclxuXHJcbmNvbnN0IFRvdGFsTGFiZWwgPSBzdHlsZWQudGRgXHJcblx0JHtib2R5MlRleHRTdHlsZX07XHJcblx0Y29sb3I6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLndoaXRlfTtcclxuXHRwYWRkaW5nLWxlZnQ6IDMycHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMCAwIDAgOHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLmRhcmtbNV19O1xyXG5gO1xyXG5jb25zdCBJbnZvaWNlVG90YWwgPSBzdHlsZWQudGQ8eyBjb2xTcGFuOiBudW1iZXIgfT5gXHJcblx0JHt0YWJsZUZvb3RlclRvdGFsVGV4dFN0eWxlfTtcclxuXHRwYWRkaW5nLXJpZ2h0OiAzMnB4O1xyXG5cdHRleHQtYWxpZ246IGVuZDtcclxuXHRjb2xvcjogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMud2hpdGV9O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLmRhcmtbNV19O1xyXG5cdGJvcmRlci1yYWRpdXM6IDAgMCA4cHggMDtcclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCB7IGJvZHkyVGV4dFN0eWxlLCBib2R5VGV4dFN0eWxlLCBkZXRhaWxWYWx1ZVRleHRTdHlsZSB9IGZyb20gJ0Avc3R5bGVzL3R5cG9ncmFwaHknO1xyXG5cclxuaW50ZXJmYWNlIERldGFpbEZpZWxkUHJvcHMge1xyXG5cdGxhYmVsOiBzdHJpbmc7XHJcblx0dmFsdWU6IHN0cmluZztcclxuXHRjbGFzc05hbWU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEZXRhaWxGaWVsZDogRkM8RGV0YWlsRmllbGRQcm9wcz4gPSAoeyBsYWJlbCwgdmFsdWUsIGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8V3JhcHBlciBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XHJcblx0XHRcdDxMYWJlbD57bGFiZWx9PC9MYWJlbD5cclxuXHRcdFx0PFZhbHVlPnt2YWx1ZX08L1ZhbHVlPlxyXG5cdFx0XHR7Y2hpbGRyZW4gJiYgPENoaWxkcmVuV3JhcHBlcj57Y2hpbGRyZW59PC9DaGlsZHJlbldyYXBwZXI+fVxyXG5cdFx0PC9XcmFwcGVyPlxyXG5cdCk7XHJcbn07XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZmxvdzogY29sdW1uO1xyXG5gO1xyXG5cclxuY29uc3QgTGFiZWwgPSBzdHlsZWQuaDRgXHJcblx0JHtib2R5VGV4dFN0eWxlfTtcclxuXHRjb2xvcjogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMucHJpbWFyeVszXX07XHJcbmA7XHJcblxyXG5jb25zdCBWYWx1ZSA9IHN0eWxlZC5wYFxyXG5cdG1hcmdpbi10b3A6IDEycHg7XHJcblx0JHtkZXRhaWxWYWx1ZVRleHRTdHlsZX07XHJcblx0Y29sb3I6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLmRhcmtbMF19O1xyXG5gO1xyXG5cclxuY29uc3QgQ2hpbGRyZW5XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuXHQke2JvZHkyVGV4dFN0eWxlfTtcclxuXHRtYXJnaW4tdG9wOiA4cHg7XHJcblx0Y29sb3I6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLnByaW1hcnlbM119O1xyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgRGVza3RvcFRhYmxlIH0gZnJvbSAnQC9jb21wb25lbnRzL0ludm9pY2VEZXRhaWxzL0Rlc2t0b3BUYWJsZSc7XHJcbmltcG9ydCB7IERldGFpbEZpZWxkIH0gZnJvbSAnQC9jb21wb25lbnRzL0ludm9pY2VEZXRhaWxzL0RldGFpbEZpZWxkJztcclxuaW1wb3J0IHsgTW9iaWxlSXRlbXNUYWJsZSB9IGZyb20gJ0AvY29tcG9uZW50cy9JbnZvaWNlRGV0YWlscy9Nb2JpbGVJdGVtc1RhYmxlJztcclxuaW1wb3J0IHsgU2l6ZSwgdXNlV2luZG93U2l6ZSB9IGZyb20gJ0AvaG9va3MvdXNlV2luZG93U2l6ZSc7XHJcbmltcG9ydCB7IEJSRUFLUE9JTlRTIH0gZnJvbSAnQC9zdHlsZXMvdGhlbWUnO1xyXG5pbXBvcnQgeyBib2R5MlRleHRTdHlsZSwgYm9keVRleHRTdHlsZSwgaDRUZXh0U3R5bGUgfSBmcm9tICdAL3N0eWxlcy90eXBvZ3JhcGh5JztcclxuaW1wb3J0IHsgSW52b2ljZUl0ZW0sIEludm9pY2UgfSBmcm9tICdAL3R5cGVzL2luZGV4JztcclxuXHJcbmludGVyZmFjZSBEZXRhaWxzQ2FyZFByb3BzIHtcclxuXHRjbGFzc05hbWU/OiBzdHJpbmc7XHJcblx0aW52b2ljZTogSW52b2ljZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERldGFpbHNDYXJkOiBGQzxEZXRhaWxzQ2FyZFByb3BzPiA9ICh7IGNsYXNzTmFtZSwgaW52b2ljZSB9KSA9PiB7XHJcblx0Y29uc3Qgc2l6ZTogU2l6ZSA9IHVzZVdpbmRvd1NpemUoKTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PFdyYXBwZXIgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxyXG5cdFx0XHQ8TWV0YURhdGE+XHJcblx0XHRcdFx0PEludm9pY2VJZEFuZE5hbWU+XHJcblx0XHRcdFx0XHQ8SWQ+XHJcblx0XHRcdFx0XHRcdDxzcGFuPiM8L3NwYW4+XHJcblx0XHRcdFx0XHRcdHtpbnZvaWNlLmlkfVxyXG5cdFx0XHRcdFx0PC9JZD5cclxuXHRcdFx0XHRcdDxOYW1lPntpbnZvaWNlLmRlc2NyaXB0aW9ufTwvTmFtZT5cclxuXHRcdFx0XHQ8L0ludm9pY2VJZEFuZE5hbWU+XHJcblx0XHRcdFx0PFVzZXJBZGRyZXNzPlxyXG5cdFx0XHRcdFx0PGFkZHJlc3M+XHJcblx0XHRcdFx0XHRcdHtpbnZvaWNlLnVzZXJfc3RyZWV0X2FkZHJlc3N9IDxiciAvPlxyXG5cdFx0XHRcdFx0XHR7aW52b2ljZS51c2VyX2NpdHl9IDxiciAvPlxyXG5cdFx0XHRcdFx0XHR7aW52b2ljZS51c2VyX3Bvc3RfY29kZX1cclxuXHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdHtpbnZvaWNlLnVzZXJfY291bnRyeX1cclxuXHRcdFx0XHRcdDwvYWRkcmVzcz5cclxuXHRcdFx0XHQ8L1VzZXJBZGRyZXNzPlxyXG5cdFx0XHRcdDxJbnZvaWNlRGF0ZSBsYWJlbD1cIkludm9pY2UgRGF0ZVwiIHZhbHVlPXtpbnZvaWNlLmludm9pY2VfZGF0ZX0+PC9JbnZvaWNlRGF0ZT5cclxuXHRcdFx0XHQ8UGF5bWVudER1ZSBsYWJlbD1cIlBheW1lbnQgRHVlXCIgdmFsdWU9e2ludm9pY2UuaW52b2ljZV9kdWVfZGF0ZX0+PC9QYXltZW50RHVlPlxyXG5cdFx0XHRcdDxDbGllbnRFbWFpbCBsYWJlbD1cIlNlbnQgdG9cIiB2YWx1ZT17aW52b2ljZS5jbGllbnRfZW1haWx9PjwvQ2xpZW50RW1haWw+XHJcblx0XHRcdFx0PEJpbGxUbyBsYWJlbD1cIkJpbGwgdG9cIiB2YWx1ZT17aW52b2ljZS5jbGllbnRfbmFtZX0+XHJcblx0XHRcdFx0XHQ8YWRkcmVzcz5cclxuXHRcdFx0XHRcdFx0e2ludm9pY2UuY2xpZW50X3N0cmVldF9hZGRyZXNzfSA8YnIgLz5cclxuXHRcdFx0XHRcdFx0e2ludm9pY2UuY2xpZW50X2NpdHl9IDxiciAvPlxyXG5cdFx0XHRcdFx0XHR7aW52b2ljZS5jbGllbnRfcG9zdF9jb2RlfVxyXG5cdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0e2ludm9pY2UuY2xpZW50X2NvdW50cnl9XHJcblx0XHRcdFx0XHQ8L2FkZHJlc3M+XHJcblx0XHRcdFx0PC9CaWxsVG8+XHJcblx0XHRcdDwvTWV0YURhdGE+XHJcblx0XHRcdHtzaXplPy53aWR0aCA+IEJSRUFLUE9JTlRTLnBob25lID8gKFxyXG5cdFx0XHRcdDxTdHlsZWREZXNrdG9wVGFibGUgaXRlbXM9e2ludm9pY2UuaW52b2ljZV9pdGVtc30gLz5cclxuXHRcdFx0KSA6IChcclxuXHRcdFx0XHQ8TW9iaWxlVGFibGUgaXRlbXM9e2ludm9pY2UuaW52b2ljZV9pdGVtc30gLz5cclxuXHRcdFx0KX1cclxuXHRcdDwvV3JhcHBlcj5cclxuXHQpO1xyXG59O1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5tYWluYFxyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHBhZGRpbmc6IDMycHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMud2hpdGV9O1xyXG5cdGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHRib3gtc2hhZG93OiAwcHggMTBweCAxMHB4IC0xMHB4IHJnYmEoNzIsIDg0LCAxNTksIDAuMTAwMzk3KTtcclxuYDtcclxuXHJcbmNvbnN0IE1ldGFEYXRhID0gc3R5bGVkLmRpdmBcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuXHRncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCBtYXgtY29udGVudCk7XHJcblx0Z2FwOiAzMnB4IDBweDtcclxuXHRncmlkLWF1dG8tZmxvdzogcm93O1xyXG5cdGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcblx0XHQnaWQgLidcclxuXHRcdCd1c2VyLWFkZHJlc3MgLidcclxuXHRcdCdpbnZvaWNlLWRhdGUgYmlsbC10bydcclxuXHRcdCdwYXltZW50LWR1ZSBiaWxsLXRvJ1xyXG5cdFx0J2NsaWVudC1lbWFpbCAuJztcclxuXHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudCAxMDBweCBtYXgtY29udGVudCAxMTBweCBhdXRvO1xyXG5cdFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgbWF4LWNvbnRlbnQpO1xyXG5cdFx0Z2FwOiAyMXB4IDBweDtcclxuXHJcblx0XHRncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG5cdFx0XHQnaWQgLiAuIC4gdXNlci1hZGRyZXNzJ1xyXG5cdFx0XHQnaW52b2ljZS1kYXRlIC4gYmlsbC10byAuIGNsaWVudC1lbWFpbCdcclxuXHRcdFx0J3BheW1lbnQtZHVlIC4gYmlsbC10byAgLiAuJztcclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBJbnZvaWNlSWRBbmROYW1lID0gc3R5bGVkLmRpdmBcclxuXHRncmlkLWFyZWE6IGlkO1xyXG5cclxuXHRzcGFuIHtcclxuXHRcdGNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy5wcmltYXJ5WzNdfTtcclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBJZCA9IHN0eWxlZC5wYFxyXG5cdCR7aDRUZXh0U3R5bGV9O1xyXG5gO1xyXG5cclxuY29uc3QgTmFtZSA9IHN0eWxlZC5oMWBcclxuXHQke2JvZHlUZXh0U3R5bGV9O1xyXG5cdGNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy5wcmltYXJ5WzNdfTtcclxuXHRtYXJnaW4tdG9wOiA0cHg7XHJcbmA7XHJcblxyXG5jb25zdCBVc2VyQWRkcmVzcyA9IHN0eWxlZC5kaXZgXHJcblx0JHtib2R5MlRleHRTdHlsZX07XHJcblx0Z3JpZC1hcmVhOiB1c2VyLWFkZHJlc3M7XHJcblx0Y29sb3I6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLnByaW1hcnlbM119O1xyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XHJcblx0fVxyXG5gO1xyXG5jb25zdCBJbnZvaWNlRGF0ZSA9IHN0eWxlZChEZXRhaWxGaWVsZClgXHJcblx0Z3JpZC1hcmVhOiBpbnZvaWNlLWRhdGU7XHJcbmA7XHJcbmNvbnN0IFBheW1lbnREdWUgPSBzdHlsZWQoRGV0YWlsRmllbGQpYFxyXG5cdGdyaWQtYXJlYTogcGF5bWVudC1kdWU7XHJcblx0YWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbmA7XHJcbmNvbnN0IENsaWVudEVtYWlsID0gc3R5bGVkKERldGFpbEZpZWxkKWBcclxuXHRncmlkLWFyZWE6IGNsaWVudC1lbWFpbDtcclxuYDtcclxuY29uc3QgQmlsbFRvID0gc3R5bGVkKERldGFpbEZpZWxkKWBcclxuXHRncmlkLWFyZWE6IGJpbGwtdG87XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWREZXNrdG9wVGFibGUgPSBzdHlsZWQoRGVza3RvcFRhYmxlKWBcclxuXHRtYXJnaW4tdG9wOiA0MHB4O1xyXG5gO1xyXG5cclxuY29uc3QgTW9iaWxlVGFibGUgPSBzdHlsZWQoTW9iaWxlSXRlbXNUYWJsZSlgXHJcblx0bWFyZ2luLXRvcDogNDBweDtcclxuYDtcclxuIiwiaW1wb3J0IFZpc3VhbGx5SGlkZGVuIGZyb20gJ0ByZWFjaC92aXN1YWxseS1oaWRkZW4nO1xyXG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgYm9keTJUZXh0U3R5bGUsIGg0VGV4dFN0eWxlLCB0YWJsZUZvb3RlclRvdGFsVGV4dFN0eWxlIH0gZnJvbSAnQC9zdHlsZXMvdHlwb2dyYXBoeSc7XHJcbmltcG9ydCB7IEludm9pY2VJdGVtIH0gZnJvbSAnQC90eXBlcy9pbmRleCc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZUl0ZW1Ub3RhbCB9IGZyb20gJ0AvdXRpbHMvY2FsY3VsYXRlSXRlbVRvdGFsJztcclxuaW1wb3J0IHsgY2FsY3VsYXRlSW52b2ljZVRvdGFsIH0gZnJvbSAnQC91dGlscy9jYWxjdWxhdGVUb3RhbCc7XHJcblxyXG5pbnRlcmZhY2UgTW9iaWxlSXRlbXNUYWJsZVByb3BzIHtcclxuXHRjbGFzc05hbWU/OiBzdHJpbmc7XHJcblx0aXRlbXM6IEludm9pY2VJdGVtW107XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBNb2JpbGVJdGVtc1RhYmxlOiBGQzxNb2JpbGVJdGVtc1RhYmxlUHJvcHM+ID0gKHsgY2xhc3NOYW1lLCBpdGVtcyB9KSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxUYWJsZSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XHJcblx0XHRcdDx0aGVhZD5cclxuXHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHQ8dGQ+XHJcblx0XHRcdFx0XHRcdDxWaXN1YWxseUhpZGRlbj5JdGVtIE5hbWU8L1Zpc3VhbGx5SGlkZGVuPlxyXG5cdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdDx0ZD5cclxuXHRcdFx0XHRcdFx0PFZpc3VhbGx5SGlkZGVuPkl0ZW0gVG90YWw8L1Zpc3VhbGx5SGlkZGVuPlxyXG5cdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHQ8L3RoZWFkPlxyXG5cdFx0XHQ8Qm9keT5cclxuXHRcdFx0XHR7aXRlbXMubWFwKChpdGVtLCBpZHgpID0+IChcclxuXHRcdFx0XHRcdDx0ciBrZXk9e2l0ZW0ubmFtZSArIGlkeH0+XHJcblx0XHRcdFx0XHRcdDxOYW1lQ29sdW1uPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8SXRlbU5hbWU+e2l0ZW0ubmFtZX08L0l0ZW1OYW1lPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEl0ZW1RdWFudGl0eT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0ucXVhbnRpdHl9IHggJHsoaXRlbS5wcmljZSAvIDEwMCkudG9GaXhlZCgyKX1cclxuXHRcdFx0XHRcdFx0XHRcdDwvSXRlbVF1YW50aXR5PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L05hbWVDb2x1bW4+XHJcblx0XHRcdFx0XHRcdDxUb3RhbENvbHVtbj4ke2NhbGN1bGF0ZUl0ZW1Ub3RhbChpdGVtLnF1YW50aXR5LCBpdGVtLnByaWNlKX08L1RvdGFsQ29sdW1uPlxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHQpKX1cclxuXHRcdFx0PC9Cb2R5PlxyXG5cdFx0XHQ8Rm9vdGVyPlxyXG5cdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdDxUb3RhbExhYmVsPkdyYW5kIFRvdGFsPC9Ub3RhbExhYmVsPlxyXG5cdFx0XHRcdFx0PEludm9pY2VUb3RhbD4ke2NhbGN1bGF0ZUludm9pY2VUb3RhbChpdGVtcyl9PC9JbnZvaWNlVG90YWw+XHJcblx0XHRcdFx0PC90cj5cclxuXHRcdFx0PC9Gb290ZXI+XHJcblx0XHQ8L1RhYmxlPlxyXG5cdCk7XHJcbn07XHJcblxyXG5jb25zdCBUYWJsZSA9IHN0eWxlZC50YWJsZWBcclxuXHQke2g0VGV4dFN0eWxlfTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy5ncmV5WzRdfTtcclxuXHRib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcclxuYDtcclxuXHJcbmNvbnN0IEJvZHkgPSBzdHlsZWQudGJvZHlgXHJcblx0dHI6Zmlyc3QtY2hpbGQgPiB0ZCB7XHJcblx0XHRwYWRkaW5nLXRvcDogMjRweDtcclxuXHR9XHJcblx0dGQge1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDI0cHg7XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgTmFtZUNvbHVtbiA9IHN0eWxlZC50ZGBcclxuXHRwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcblxyXG5cdGRpdiB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1mbG93OiBjb2x1bW47XHJcblx0XHRnYXA6IDhweDtcclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBJdGVtTmFtZSA9IHN0eWxlZC5zcGFuYGA7XHJcblxyXG5jb25zdCBJdGVtUXVhbnRpdHkgPSBzdHlsZWQuc3BhbmBcclxuXHR3aWR0aDogZml0LWNvbnRlbnQ7XHJcblx0Y29sb3I6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLnByaW1hcnlbM119O1xyXG5gO1xyXG5cclxuY29uc3QgVG90YWxDb2x1bW4gPSBzdHlsZWQudGRgXHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblx0dGV4dC1hbGlnbjogZW5kO1xyXG5cdHBhZGRpbmctcmlnaHQ6IDI0cHg7XHJcbmA7XHJcblxyXG5jb25zdCBGb290ZXIgPSBzdHlsZWQudGZvb3RgXHJcblx0dGQge1xyXG5cdFx0cGFkZGluZy10b3A6IDMxcHg7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMzFweDtcclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBUb3RhbExhYmVsID0gc3R5bGVkLnRkYFxyXG5cdCR7Ym9keTJUZXh0U3R5bGV9O1xyXG5cdGNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy53aGl0ZX07XHJcblx0cGFkZGluZy1sZWZ0OiAyNHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDAgMCAwIDhweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy5kYXJrWzVdfTtcclxuYDtcclxuY29uc3QgSW52b2ljZVRvdGFsID0gc3R5bGVkLnRkYFxyXG5cdCR7dGFibGVGb290ZXJUb3RhbFRleHRTdHlsZX07XHJcblx0cGFkZGluZy1yaWdodDogMjRweDtcclxuXHR0ZXh0LWFsaWduOiBlbmQ7XHJcblx0Y29sb3I6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLndoaXRlfTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy5kYXJrWzVdfTtcclxuXHRib3JkZXItcmFkaXVzOiAwIDAgOHB4IDA7XHJcbmA7XHJcbiIsImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgaWNvbkNoZXZyb25TcmMgZnJvbSAnQC9pY29ucy9pY29uLWFycm93LWxlZnQuc3ZnJztcclxuaW1wb3J0IHsgaDRUZXh0U3R5bGUgfSBmcm9tICdAL3N0eWxlcy90eXBvZ3JhcGh5JztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcblx0Y2hpbGRyZW4/OiBzdHJpbmcgfCBSZWFjdC5SZWFjdE5vZGU7XHJcblx0aHJlZjogc3RyaW5nO1xyXG5cdGljb24/OiAnYmFjaycgfCAnZm9yd2FyZCc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQYWdlTGluayA9ICh7IGNoaWxkcmVuLCBpY29uLCBocmVmIH06IFByb3BzKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxMaW5rIGhyZWY9e2hyZWZ9IHBhc3NIcmVmPlxyXG5cdFx0XHQ8SW5uZXJXcmFwcGVyIGljb249e2ljb259PlxyXG5cdFx0XHRcdHtpY29uICYmIChcclxuXHRcdFx0XHRcdDxJY29uV3JhcHBlciBpY29uPXtpY29ufT5cclxuXHRcdFx0XHRcdFx0PEltYWdlIHNyYz17aWNvbkNoZXZyb25TcmN9IGFsdD1cIlwiIC8+XHJcblx0XHRcdFx0XHQ8L0ljb25XcmFwcGVyPlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0XHQ8L0lubmVyV3JhcHBlcj5cclxuXHRcdDwvTGluaz5cclxuXHQpO1xyXG59O1xyXG5cclxuY29uc3QgSW5uZXJXcmFwcGVyID0gc3R5bGVkLmE8eyBpY29uPzogc3RyaW5nIH0+YFxyXG5cdCR7aDRUZXh0U3R5bGV9O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiAkeyh7IGljb24gfSkgPT5cclxuXHRcdGljb24gPT09ICdiYWNrJyA/ICdyb3cnIDogaWNvbiA9PT0gJ2ZvcndhcmQnID8gJ3Jvdy1yZXZlcnNlJyA6IG51bGx9O1xyXG5cdHdpZHRoOiBmaXQtY29udGVudDtcclxuXHJcblx0Jjpob3ZlciB7XHJcblx0XHRjb2xvcjogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMucHJpbWFyeVszXX07XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgSWNvbldyYXBwZXIgPSBzdHlsZWQuZGl2PHsgaWNvbj86IHN0cmluZyB9PmBcclxuXHRtYXJnaW4tcmlnaHQ6ICR7KHsgaWNvbiB9KSA9PiAoaWNvbiA9PT0gJ2JhY2snID8gJzI0cHgnIDogbnVsbCl9O1xyXG5cdG1hcmdpbi1sZWZ0OiAkeyh7IGljb24gfSkgPT4gKGljb24gPT09ICdmb3J3YXJkJyA/ICcyNHB4JyA6IG51bGwpfTtcclxuXHR0cmFuc2Zvcm06ICR7KHsgaWNvbiB9KSA9PiAoaWNvbiA9PT0gJ2ZvcndhcmQnID8gJ3JvdGF0ZVkoMTgwZGVnKScgOiBudWxsKX07IDtcclxuYDtcclxuIiwiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyBGQyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgaWNvblBlcnNvblNyYyBmcm9tICdAL2ljb25zL2ljb24tdXNlci5zdmcnO1xyXG5cclxuaW50ZXJmYWNlIFByb2ZpbGVJbWdQcm9wcyB7XHJcblx0Y2xhc3NOYW1lPzogc3RyaW5nO1xyXG5cdHByb2ZpbGVJbWdTcmM/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQcm9maWxlSW1nOiBGQzxQcm9maWxlSW1nUHJvcHM+ID0gKHsgY2xhc3NOYW1lLCBwcm9maWxlSW1nU3JjIH0pID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PFdyYXBwZXIgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxyXG5cdFx0XHR7cHJvZmlsZUltZ1NyYyA/IChcclxuXHRcdFx0XHQ8SW1hZ2VcclxuXHRcdFx0XHRcdHNyYz17cHJvZmlsZUltZ1NyY31cclxuXHRcdFx0XHRcdGxheW91dD1cImZpeGVkXCJcclxuXHRcdFx0XHRcdGhlaWdodD1cIjMyXCJcclxuXHRcdFx0XHRcdHdpZHRoPVwiMzJcIlxyXG5cdFx0XHRcdFx0YWx0PVwiWW91ciBwcm9maWxlIHBpY3R1cmVcIlxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdCkgOiAoXHJcblx0XHRcdFx0PEVtcHR5U3RhdGU+XHJcblx0XHRcdFx0XHQ8SW1hZ2Ugc3JjPXtpY29uUGVyc29uU3JjfSBhbHQ9XCJZb3VyIHByb2ZpbGUgcGljdHVyZVwiIC8+XHJcblx0XHRcdFx0PC9FbXB0eVN0YXRlPlxyXG5cdFx0XHQpfVxyXG5cdFx0PC9XcmFwcGVyPlxyXG5cdCk7XHJcbn07XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBgO1xyXG5cclxuY29uc3QgRW1wdHlTdGF0ZSA9IHN0eWxlZC5kaXZgXHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuXHR3aWR0aDogMzJweDtcclxuXHRoZWlnaHQ6IDMycHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMuZ3JleVsxXX07XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5gO1xyXG4iLCJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IEZDIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCB7IFByb2ZpbGVJbWcgfSBmcm9tICcuLi9Qcm9maWxlSW1nL1Byb2ZpbGVJbWcnO1xyXG5pbXBvcnQgeyBUaGVtZVN3aXRjaGVyIH0gZnJvbSAnLi4vVGhlbWVTd2l0Y2hlci9UaGVtZVN3aXRjaGVyJztcclxuXHJcbmltcG9ydCBsb2dvU3JjIGZyb20gJ0AvYXNzZXRzL2xvZ28uc3ZnJztcclxuXHJcbmludGVyZmFjZSBTaWRlYmFyUHJvcHMge1xyXG5cdGNsYXNzTmFtZT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNpZGViYXI6IEZDPFNpZGViYXJQcm9wcz4gPSAoeyBjbGFzc05hbWUgfSkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8V3JhcHBlciBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XHJcblx0XHRcdDxMb2dvV3JhcHBlcj5cclxuXHRcdFx0XHQ8SW1hZ2Ugc3JjPXtsb2dvU3JjfSBsYXlvdXQ9XCJmaWxsXCIgYWx0PVwiXCIgLz5cclxuXHRcdFx0PC9Mb2dvV3JhcHBlcj5cclxuXHRcdFx0PFN0eWxlZFRoZW1lU3dpdGNoZXIgLz5cclxuXHRcdFx0PERpdmlkZXIgLz5cclxuXHRcdFx0PFByb2ZpbGVJbWcgLz5cclxuXHRcdDwvV3JhcHBlcj5cclxuXHQpO1xyXG59O1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5hc2lkZWBcclxuXHR6LWluZGV4OiAxMDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0Z2FwOiAyNHB4O1xyXG5cclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDcycHg7XHJcblx0cGFkZGluZy1yaWdodDogMzJweDtcclxuXHJcblx0YmFja2dyb3VuZC1jb2xvcjogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMuZGFya1s1XX07XHJcblxyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdGhlaWdodDogODBweDtcclxuXHR9XHJcblxyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMubGFwdG9wQW5kVXB9IHtcclxuXHRcdGZsZXgtZmxvdzogY29sdW1uO1xyXG5cdFx0bWluLWhlaWdodDogMTAwdmg7XHJcblx0XHR3aWR0aDogMTAzcHg7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiAwO1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDI0cHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAwcHggMzVweCAyMHB4IDBweDtcclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBMb2dvV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHdpZHRoOiA3MnB4O1xyXG5cdGhlaWdodDogNzJweDtcclxuXHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0d2lkdGg6IDgwcHg7XHJcblx0XHRoZWlnaHQ6IDgwcHg7XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLmxhcHRvcEFuZFVwfSB7XHJcblx0XHR3aWR0aDogMTAzcHg7XHJcblx0XHRoZWlnaHQ6IDEwM3B4O1xyXG5cdH1cclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZFRoZW1lU3dpdGNoZXIgPSBzdHlsZWQoVGhlbWVTd2l0Y2hlcilgXHJcblx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblxyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMubGFwdG9wQW5kVXB9IHtcclxuXHRcdG1hcmdpbi1sZWZ0OiByZXZlcnQ7XHJcblx0XHRtYXJnaW4tdG9wOiBhdXRvO1xyXG5cdH1cclxuYDtcclxuXHJcbmNvbnN0IERpdmlkZXIgPSBzdHlsZWQuZGl2YFxyXG5cdGhlaWdodDogMTAwJTtcclxuXHR3aWR0aDogMnB4O1xyXG5cclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy5kYXJrWzZdfTtcclxuXHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy5sYXB0b3BBbmRVcH0ge1xyXG5cdFx0aGVpZ2h0OiAycHg7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcbmA7XHJcbiIsImltcG9ydCB7IEZDIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCB7IFBvc3NpYmxlU3RhdHVzIH0gZnJvbSAnY29uZmlnL1Bvc3NpYmxlU3RhdHVzJztcclxuXHJcbmltcG9ydCB7IENvbG9yVmFyaWFudHNUeXBlIH0gZnJvbSAnLi4vQnV0dG9uL0J1dHRvbic7XHJcblxyXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJ0Avc3R5bGVzL3RoZW1lJztcclxuaW1wb3J0IHsgaDRUZXh0U3R5bGUgfSBmcm9tICdAL3N0eWxlcy90eXBvZ3JhcGh5JztcclxuXHJcbmludGVyZmFjZSBTdGF0dXNQcm9wcyB7XHJcblx0c3RhdHVzOiBQb3NzaWJsZVN0YXR1cztcclxuXHRjbGFzc05hbWU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IGNvbG9yVmFyaWFudHM6IENvbG9yVmFyaWFudHNUeXBlID0ge1xyXG5cdFBhaWQ6IHtcclxuXHRcdGNvbG9yOiB0aGVtZS5DT0xPUlMuc3VjY2Vzc1sxXSxcclxuXHRcdGJhY2tncm91bmQ6IHRoZW1lLkNPTE9SUy5zdWNjZXNzWzJdLFxyXG5cdH0sXHJcblx0UGVuZGluZzoge1xyXG5cdFx0Y29sb3I6IHRoZW1lLkNPTE9SUy5jYXV0aW9uWzFdLFxyXG5cdFx0YmFja2dyb3VuZDogdGhlbWUuQ09MT1JTLmNhdXRpb25bMl0sXHJcblx0fSxcclxuXHREcmFmdDoge1xyXG5cdFx0Y29sb3I6IHRoZW1lLkNPTE9SUy5kYXJrWzVdLFxyXG5cdFx0YmFja2dyb3VuZDogdGhlbWUuQ09MT1JTLmdyZXlbNl0sXHJcblx0fSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTdGF0dXNCYWRnZTogRkM8U3RhdHVzUHJvcHM+ID0gKHsgc3RhdHVzLCBjbGFzc05hbWUgfSkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8V3JhcHBlciBjbGFzc05hbWU9e2NsYXNzTmFtZX0gc3RhdHVzPXtzdGF0dXN9PlxyXG5cdFx0XHQ8ZGl2PjwvZGl2PlxyXG5cdFx0XHR7c3RhdHVzfVxyXG5cdFx0PC9XcmFwcGVyPlxyXG5cdCk7XHJcbn07XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdjx7IHN0YXR1czogc3RyaW5nIH0+YFxyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHQke2g0VGV4dFN0eWxlfTtcclxuXHR3aWR0aDogMTA0cHg7XHJcblx0aGVpZ2h0OiA0MHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDZweDtcclxuXHRjb2xvcjogJHsoeyBzdGF0dXMgfSkgPT4gY29sb3JWYXJpYW50c1tzdGF0dXNdWydjb2xvciddfTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHN0YXR1cyB9KSA9PiBjb2xvclZhcmlhbnRzW3N0YXR1c11bJ2JhY2tncm91bmQnXX07XHJcblxyXG5cdGRpdiB7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdGhlaWdodDogOHB4O1xyXG5cdFx0d2lkdGg6IDhweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdG1hcmdpbi1yaWdodDogOHB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJHsoeyBzdGF0dXMgfSkgPT4gY29sb3JWYXJpYW50c1tzdGF0dXNdWydjb2xvciddfTtcclxuXHR9XHJcbmA7XHJcbiIsImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgRkMsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IGljb25Nb29uU3JjIGZyb20gJ0AvaWNvbnMvaWNvbi1tb29uLnN2Zyc7XHJcbmltcG9ydCBpY29uU3VuU3JjIGZyb20gJ0AvaWNvbnMvaWNvbi1zdW4uc3ZnJztcclxuXHJcbi8vIFdvdWxkIGxvdmUgdG8gaGF2ZSBzb21lIGZlZWRiYWNrIG9uIGhvdyB0byBtYWtlIHRoaXMgY29tcG9uZW50XHJcbi8vIG1vcmUgYWNjZXNzaWJsZVxyXG5cclxuaW50ZXJmYWNlIFRoZW1lU3dpdGNoZXJQcm9wcyB7XHJcblx0Y2xhc3NOYW1lPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVGhlbWVTd2l0Y2hlcjogRkM8VGhlbWVTd2l0Y2hlclByb3BzPiA9ICh7IGNsYXNzTmFtZSB9KSA9PiB7XHJcblx0Y29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZSgnbGlnaHQnKTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XHJcblx0XHRcdHt0aGVtZSA9PT0gJ2xpZ2h0JyA/IChcclxuXHRcdFx0XHQ8SW1hZ2Ugc3JjPXtpY29uTW9vblNyY30gYWx0PVwiQSBtb29uIGljb25cIiAvPlxyXG5cdFx0XHQpIDogKFxyXG5cdFx0XHRcdDxJbWFnZSBzcmM9e2ljb25TdW5TcmN9IGFsdD1cIkEgc3VuIGljb25cIiAvPlxyXG5cdFx0XHQpfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuIiwiaW1wb3J0IHsgSW52b2ljZSB9IGZyb20gJ0AvdHlwZXMvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRhbFZhbHVlczogSW52b2ljZSA9IHtcclxuXHRpZDogJycsXHJcblx0c3RhdHVzOiAnRHJhZnQnLFxyXG5cdHVzZXJfc3RyZWV0X2FkZHJlc3M6ICcnLFxyXG5cdHVzZXJfY2l0eTogJycsXHJcblx0dXNlcl9wb3N0X2NvZGU6ICcnLFxyXG5cdHVzZXJfY291bnRyeTogJycsXHJcblx0Y2xpZW50X25hbWU6ICcnLFxyXG5cdGNsaWVudF9lbWFpbDogJycsXHJcblx0Y2xpZW50X3N0cmVldF9hZGRyZXNzOiAnJyxcclxuXHRjbGllbnRfY2l0eTogJycsXHJcblx0Y2xpZW50X3Bvc3RfY29kZTogJycsXHJcblx0Y2xpZW50X2NvdW50cnk6ICcnLFxyXG5cdGludm9pY2VfZGF0ZTogbmV3IERhdGUoKSxcclxuXHRpbnZvaWNlX2R1ZV9kYXRlOiBuZXcgRGF0ZSgpLFxyXG5cdGRlc2NyaXB0aW9uOiAnJyxcclxuXHRpbnZvaWNlX2l0ZW1zOiBbXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdCYW5uZXIgRGVzaWduJyxcclxuXHRcdFx0cXVhbnRpdHk6IDEsXHJcblx0XHRcdHByaWNlOiAxNTYuMCxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdCYW5uZXIgRGVzaWduJyxcclxuXHRcdFx0cXVhbnRpdHk6IDEsXHJcblx0XHRcdHByaWNlOiAxNTYuMCxcclxuXHRcdH0sXHJcblx0XSxcclxufTtcclxuIiwiLy8gaW1wb3J0ICogYXMgeXVwIGZyb20gJ3l1cCc7XHJcbmltcG9ydCB7IHN0cmluZywgYXJyYXksIGRhdGUsIG9iamVjdCwgbnVtYmVyIH0gZnJvbSAneXVwJztcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtU2NoZW1hID0gb2JqZWN0KCkuc2hhcGUoe1xyXG5cdHVzZXJfc3RyZWV0X2FkZHJlc3M6IHN0cmluZygpLnJlcXVpcmVkKCdSZXF1aXJlZCcpLFxyXG5cdHVzZXJfY2l0eTogc3RyaW5nKCkucmVxdWlyZWQoJ1JlcXVpcmVkJyksXHJcblx0dXNlcl9wb3N0X2NvZGU6IHN0cmluZygpLnJlcXVpcmVkKCdSZXF1aXJlZCcpLFxyXG5cdHVzZXJfY291bnRyeTogc3RyaW5nKCkucmVxdWlyZWQoJ1JlcXVpcmVkJyksXHJcblx0Y2xpZW50X25hbWU6IHN0cmluZygpLnJlcXVpcmVkKCdSZXF1aXJlZCcpLFxyXG5cdGNsaWVudF9lbWFpbDogc3RyaW5nKCkuZW1haWwoJ011c3QgYmUgYSB2YWxpZCBlbWFpbCcpLnJlcXVpcmVkKCdSZXF1aXJlZCcpLFxyXG5cdGNsaWVudF9zdHJlZXRfYWRkcmVzczogc3RyaW5nKCkucmVxdWlyZWQoJ1JlcXVpcmVkJyksXHJcblx0Y2xpZW50X2NpdHk6IHN0cmluZygpLnJlcXVpcmVkKCdSZXF1aXJlZCcpLFxyXG5cdGNsaWVudF9wb3N0X2NvZGU6IHN0cmluZygpLnJlcXVpcmVkKCdSZXF1aXJlZCcpLFxyXG5cdGNsaWVudF9jb3VudHJ5OiBzdHJpbmcoKS5yZXF1aXJlZCgnUmVxdWlyZWQnKSxcclxuXHRpbnZvaWNlX2RhdGU6IGRhdGUoKS5yZXF1aXJlZCgnUmVxdWlyZWQnKSxcclxuXHRpbnZvaWNlX2R1ZV9kYXRlOiBkYXRlKCkud2hlbihcclxuXHRcdCdpbnZvaWNlX2RhdGUnLFxyXG5cdFx0KGludm9pY2VfZGF0ZSwgc2NoZW1hKSA9PiBpbnZvaWNlX2RhdGUgJiYgc2NoZW1hLm1pbihpbnZvaWNlX2RhdGUsICdNdXN0IGJlIGFmdGVyIHN0YXJ0IGRhdGUnKVxyXG5cdCksXHJcblx0ZGVzY3JpcHRpb246IHN0cmluZygpLnJlcXVpcmVkKCdSZXF1aXJlZCcpLFxyXG5cdGludm9pY2VfaXRlbXM6IGFycmF5KClcclxuXHRcdC5vZihcclxuXHRcdFx0b2JqZWN0KCkuc2hhcGUoe1xyXG5cdFx0XHRcdG5hbWU6IHN0cmluZygpLnJlcXVpcmVkKCdBIEl0ZW0gTmFtZSBpcyByZXF1aXJlZC4nKSxcclxuXHRcdFx0XHRxdWFudGl0eTogbnVtYmVyKClcclxuXHRcdFx0XHRcdC5udWxsYWJsZSgpXHJcblx0XHRcdFx0XHQudHJhbnNmb3JtKCh2LCBvKSA9PiAobyA9PT0gJycgPyBudWxsIDogdikpLFxyXG5cdFx0XHRcdHByaWNlOiBudW1iZXIoKVxyXG5cdFx0XHRcdFx0Lm51bGxhYmxlKClcclxuXHRcdFx0XHRcdC50cmFuc2Zvcm0oKHYsIG8pID0+IChvID09PSAnJyA/IG51bGwgOiB2KSksXHJcblx0XHRcdH0pXHJcblx0XHQpXHJcblx0XHQubWluKDEsICdNdXN0IGhhdmUgYXQgbGVhc3QgMSBiaWxsYWJsZSBpdGVtJyksXHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBGQywgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IGRlbW9JbnZvaWNlc0RhdGEgfSBmcm9tICdkYXRhL2RlbW8nO1xyXG5cclxuaW1wb3J0IHsgSW52b2ljZSB9IGZyb20gJy4uL3R5cGVzJztcclxuXHJcbmltcG9ydCB7IGludm9pY2VSZWR1Y2VyIH0gZnJvbSAnLi9pbnZvaWNlUmVkdWNlcic7XHJcblxyXG50eXBlIEludm9pY2VzQ29udGV4dFN0YXRlVHlwZSA9IHtcclxuXHRpbnZvaWNlczogSW52b2ljZVtdIHwgW107XHJcblx0YWRkSW52b2ljZTogKGludm9pY2U6IEludm9pY2UpID0+IHZvaWQ7XHJcblx0ZGVsZXRlSW52b2ljZTogKGlkOiBzdHJpbmcpID0+IHZvaWQ7XHJcblx0dXBkYXRlSW52b2ljZTogKGludm9pY2U6IEludm9pY2UpID0+IHZvaWQ7XHJcbn07XHJcblxyXG4vLyBDb250ZXh0XHJcbmV4cG9ydCBjb25zdCBJbnZvaWNlc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0PEludm9pY2VzQ29udGV4dFN0YXRlVHlwZT4oe1xyXG5cdGludm9pY2VzOiBbXSxcclxuXHRhZGRJbnZvaWNlOiAoKSA9PiB7fSxcclxuXHRkZWxldGVJbnZvaWNlOiAoKSA9PiB7fSxcclxuXHR1cGRhdGVJbnZvaWNlOiAoKSA9PiB7fSxcclxufSk7XHJcblxyXG4vLyBjb25zdCBpbml0YWxTdGF0ZSA9IHtcclxuLy8gXHRpbnZvaWNlczogW10sXHJcbi8vIH07XHJcblxyXG5leHBvcnQgY29uc3QgSW52b2ljZXNQcm92aWRlcjogRkMgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblx0Y29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKGludm9pY2VSZWR1Y2VyLCBbXSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdCBsb2NhbEludm9pY2VzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW52b2ljZXMnKSk7XHJcblx0XHQvLyBUT0RPOiBBZGQgY2hlY2sgZm9yIGRlbW8gZmxhZyBoZXJlXHJcblxyXG5cdFx0aWYgKGxvY2FsSW52b2ljZXMgIT09IG51bGwpIHtcclxuXHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnQUREJywgcGF5bG9hZDogbG9jYWxJbnZvaWNlcyB9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ0FERCcsIHBheWxvYWQ6IGRlbW9JbnZvaWNlc0RhdGEgfSk7XHJcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbnZvaWNlcycsIEpTT04uc3RyaW5naWZ5KGRlbW9JbnZvaWNlc0RhdGEpKTtcclxuXHRcdH1cclxuXHR9LCBbXSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW52b2ljZXMnLCBKU09OLnN0cmluZ2lmeShzdGF0ZSkpO1xyXG5cdH0sIFtzdGF0ZV0pO1xyXG5cclxuXHQvLyBUdXJuIGRpc3BhdGNoIGFjdGlvbnMgaW50byBmdW5jcyBmb3IgY29udGV4dCB0byBtYWtlIHRoaW5ncyBlYXNpZXIgdG8gdXNlIGFsc28gZW5zdXJlcyB0aGV5IGFyZSB0eXBlZFxyXG5cdGNvbnN0IGFkZEludm9pY2UgPSAoaW52b2ljZTogSW52b2ljZSB8IEludm9pY2VbXSkgPT4ge1xyXG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiAnQUREJywgcGF5bG9hZDogaW52b2ljZSB9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBkZWxldGVJbnZvaWNlID0gKGlkOiBzdHJpbmcpID0+IHtcclxuXHRcdGRpc3BhdGNoKHsgdHlwZTogJ0RFTEVURScsIHBheWxvYWQ6IGlkIH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHVwZGF0ZUludm9pY2UgPSAoaW52b2ljZTogSW52b2ljZSkgPT4ge1xyXG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiAnVVBEQVRFJywgcGF5bG9hZDogaW52b2ljZSB9KTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEludm9pY2VzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBpbnZvaWNlczogc3RhdGUsIGFkZEludm9pY2UsIGRlbGV0ZUludm9pY2UsIHVwZGF0ZUludm9pY2UgfX0+XHJcblx0XHRcdHtjaGlsZHJlbn1cclxuXHRcdDwvSW52b2ljZXNDb250ZXh0LlByb3ZpZGVyPlxyXG5cdCk7XHJcbn07XHJcbiIsImltcG9ydCB7IEludm9pY2UgfSBmcm9tICcuLi90eXBlcyc7XHJcblxyXG50eXBlIEludm9pY2VBY3Rpb25zID1cclxuXHR8IHsgdHlwZTogJ0FERCc7IHBheWxvYWQ6IEludm9pY2UgfCBJbnZvaWNlW10gfVxyXG5cdHwgeyB0eXBlOiAnREVMRVRFJzsgcGF5bG9hZDogc3RyaW5nIH1cclxuXHR8IHsgdHlwZTogJ1VQREFURSc7IHBheWxvYWQ6IEludm9pY2UgfTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbnZvaWNlUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uOiBJbnZvaWNlQWN0aW9ucykgPT4ge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgJ0FERCc6XHJcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KGFjdGlvbi5wYXlsb2FkKSkge1xyXG5cdFx0XHRcdHJldHVybiBbLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkXTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gWy4uLnN0YXRlLCBhY3Rpb24ucGF5bG9hZF07XHJcblx0XHRcdH1cclxuXHRcdGNhc2UgJ0RFTEVURSc6XHJcblx0XHRcdHJldHVybiBzdGF0ZS5pbnZvaWNlcy5maWx0ZXIoKGludm9pY2U6IEludm9pY2UpID0+IGludm9pY2UuaWQgIT09IGFjdGlvbi5wYXlsb2FkKTtcclxuXHRcdGNhc2UgJ1VQREFURSc6XHJcblx0XHRcdHJldHVybiBzdGF0ZS5tYXAoKGludm9pY2U6IEludm9pY2UpID0+IHtcclxuXHRcdFx0XHRpZiAoaW52b2ljZS5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQpIHtcclxuXHRcdFx0XHRcdHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGludm9pY2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gYWN0aW9uIHR5cGUke2FjdGlvbn1gKTtcclxuXHR9XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBkZW1vSW52b2ljZXNEYXRhID0gW1xyXG5cdHtcclxuXHRcdGlkOiAnUlQzMDgwJyxcclxuXHRcdGludm9pY2VfZGF0ZTogJ1R1ZSBTZXAgMSAyMDAyJyxcclxuXHRcdGludm9pY2VfZHVlX2RhdGU6ICdUdWUgU2VwIDIxIDIwMjEnLFxyXG5cdFx0ZGVzY3JpcHRpb246ICdSZS1icmFuZGluZycsXHJcblx0XHRjbGllbnRfbmFtZTogJ0plbnNlbiBIdWFuZycsXHJcblx0XHRjbGllbnRfZW1haWw6ICdqZW5zZW5oQG1haWwuY29tJyxcclxuXHRcdHN0YXR1czogJ1BhaWQnLFxyXG5cdFx0dXNlcl9zdHJlZXRfYWRkcmVzczogJzE5IFVuaW9uIFRlcnJhY2UnLFxyXG5cdFx0dXNlcl9jaXR5OiAnTG9uZG9uJyxcclxuXHRcdHVzZXJfcG9zdF9jb2RlOiAnRTEgM0VaJyxcclxuXHRcdHVzZXJfY291bnRyeTogJ1VuaXRlZCBLaW5nZG9tJyxcclxuXHRcdGNsaWVudF9zdHJlZXRfYWRkcmVzczogJzEwNiBLZW5kZWxsIFN0cmVldCcsXHJcblx0XHRjbGllbnRfY2l0eTogJ1NoYXJyaW5ndG9uJyxcclxuXHRcdGNsaWVudF9wb3N0X2NvZGU6ICdOUjI0IDVXUScsXHJcblx0XHRjbGllbnRfY291bnRyeTogJ1VuaXRlZCBLaW5nZG9tJyxcclxuXHRcdGludm9pY2VfaXRlbXM6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG5hbWU6ICdCcmFuZCBHdWlkZWxpbmVzJyxcclxuXHRcdFx0XHRxdWFudGl0eTogMixcclxuXHRcdFx0XHRwcmljZTogNTAwLFxyXG5cdFx0XHR9LFxyXG5cdFx0XSxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkOiAnUlQzMDgweicsXHJcblx0XHRpbnZvaWNlX2RhdGU6ICdUdWUgU2VwIDEgMjAyMicsXHJcblx0XHRpbnZvaWNlX2R1ZV9kYXRlOiAnVHVlIFNlcCAyMSAyMDIxJyxcclxuXHRcdGRlc2NyaXB0aW9uOiAnTG9nbyBXb3JrJyxcclxuXHRcdGNsaWVudF9uYW1lOiAnR2FiZSBOZXdsJyxcclxuXHRcdGNsaWVudF9lbWFpbDogJ2hhbW1lckBtYWlsLmNvbScsXHJcblx0XHRzdGF0dXM6ICdQZW5kaW5nJyxcclxuXHRcdHVzZXJfc3RyZWV0X2FkZHJlc3M6ICczOSBDcmVzIFRlcnJhY2UnLFxyXG5cdFx0dXNlcl9jaXR5OiAnVmFuY291dmVyJyxcclxuXHRcdHVzZXJfcG9zdF9jb2RlOiAnRTEgM0VaJyxcclxuXHRcdHVzZXJfY291bnRyeTogJ0NhbmFkYScsXHJcblx0XHRjbGllbnRfc3RyZWV0X2FkZHJlc3M6ICcyNiBHYXogU3RyZWV0JyxcclxuXHRcdGNsaWVudF9jaXR5OiAnQmxlbWRhbGUnLFxyXG5cdFx0Y2xpZW50X3Bvc3RfY29kZTogJ05SMjQgNVdRJyxcclxuXHRcdGNsaWVudF9jb3VudHJ5OiAnVW5pdGVkIEtpbmdkb20nLFxyXG5cdFx0aW52b2ljZV9pdGVtczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0bmFtZTogJ0JyYW5kIEd1aWRlbGluZXMnLFxyXG5cdFx0XHRcdHF1YW50aXR5OiAyLFxyXG5cdFx0XHRcdHByaWNlOiAyNTAsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRuYW1lOiAnV2Vic2l0ZSBXb3JrJyxcclxuXHRcdFx0XHRxdWFudGl0eTogMixcclxuXHRcdFx0XHRwcmljZTogNTAwLFxyXG5cdFx0XHR9LFxyXG5cdFx0XSxcclxuXHR9LFxyXG5dO1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gQ1JFRElUIFRPIGh0dHBzOi8vdXNlaG9va3MuY29tL3VzZVdpbmRvd1NpemUvXHJcblxyXG4vLyBEZWZpbmUgZ2VuZXJhbCB0eXBlIGZvciB1c2VXaW5kb3dTaXplIGhvb2ssIHdoaWNoIGluY2x1ZGVzIHdpZHRoIGFuZCBoZWlnaHRcclxuZXhwb3J0IGludGVyZmFjZSBTaXplIHtcclxuXHR3aWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG5cdGhlaWdodDogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG59XHJcbi8vIEhvb2tcclxuZXhwb3J0IGNvbnN0IHVzZVdpbmRvd1NpemUgPSAoKTogU2l6ZSA9PiB7XHJcblx0Ly8gSW5pdGlhbGl6ZSBzdGF0ZSB3aXRoIHVuZGVmaW5lZCB3aWR0aC9oZWlnaHQgc28gc2VydmVyIGFuZCBjbGllbnQgcmVuZGVycyBtYXRjaFxyXG5cdC8vIExlYXJuIG1vcmUgaGVyZTogaHR0cHM6Ly9qb3Nod2NvbWVhdS5jb20vcmVhY3QvdGhlLXBlcmlscy1vZi1yZWh5ZHJhdGlvbi9cclxuXHRjb25zdCBbd2luZG93U2l6ZSwgc2V0V2luZG93U2l6ZV0gPSB1c2VTdGF0ZTxTaXplPih7XHJcblx0XHR3aWR0aDogdW5kZWZpbmVkLFxyXG5cdFx0aGVpZ2h0OiB1bmRlZmluZWQsXHJcblx0fSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHQvLyBIYW5kbGVyIHRvIGNhbGwgb24gd2luZG93IHJlc2l6ZVxyXG5cdFx0ZnVuY3Rpb24gaGFuZGxlUmVzaXplKCkge1xyXG5cdFx0XHQvLyBTZXQgd2luZG93IHdpZHRoL2hlaWdodCB0byBzdGF0ZVxyXG5cdFx0XHRzZXRXaW5kb3dTaXplKHtcclxuXHRcdFx0XHR3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcblx0XHRcdFx0aGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIEFkZCBldmVudCBsaXN0ZW5lclxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XHJcblxyXG5cdFx0Ly8gQ2FsbCBoYW5kbGVyIHJpZ2h0IGF3YXkgc28gc3RhdGUgZ2V0cyB1cGRhdGVkIHdpdGggaW5pdGlhbCB3aW5kb3cgc2l6ZVxyXG5cdFx0aGFuZGxlUmVzaXplKCk7XHJcblxyXG5cdFx0Ly8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVyIG9uIGNsZWFudXBcclxuXHRcdHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcclxuXHR9LCBbXSk7IC8vIEVtcHR5IGFycmF5IGVuc3VyZXMgdGhhdCBlZmZlY3QgaXMgb25seSBydW4gb24gbW91bnRcclxuXHJcblx0cmV0dXJuIHdpbmRvd1NpemU7XHJcbn07XHJcbiIsImltcG9ydCB7IEZDIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCB7IFNpZGViYXIgfSBmcm9tICdAL2NvbXBvbmVudHMvU2lkZWJhci9TaWRlYmFyJztcclxuXHJcbmludGVyZmFjZSBQYWdlTGF5b3V0UHJvcHMge1xyXG5cdGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQYWdlTGF5b3V0OiBGQzxQYWdlTGF5b3V0UHJvcHM+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8Q29udGFpbmVyPlxyXG5cdFx0XHQ8U2lkZWJhciAvPlxyXG5cdFx0XHQ8V3JhcHBlcj57Y2hpbGRyZW59PC9XcmFwcGVyPlxyXG5cdFx0PC9Db250YWluZXI+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VMYXlvdXQ7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1mbG93OiBjb2x1bW47XHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy5sYXB0b3BBbmRVcH0ge1xyXG5cdFx0ZmxleC1mbG93OiByb3c7XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5tYWluYFxyXG5cdHBhZGRpbmc6IDAgMjRweDtcclxuXHRtYXJnaW4tdG9wOiAzMnB4O1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0XHRtYXJnaW4tdG9wOiA1NnB4O1xyXG5cdFx0cGFkZGluZzogMDtcclxuXHJcblx0XHRtYXgtd2lkdGg6IDY3MnB4O1xyXG5cdH1cclxuXHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy5sYXB0b3BBbmRVcH0ge1xyXG5cdFx0bWF4LXdpZHRoOiA3MzBweDtcclxuXHRcdG1hcmdpbi10b3A6IDcycHg7XHJcblx0fVxyXG5gO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IEltYWdlMTtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX2hlYWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL2hlYWRcIikpO1xudmFyIF90b0Jhc2U2NCA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3RvLWJhc2UtNjRcIik7XG52YXIgX2ltYWdlQ29uZmlnID0gcmVxdWlyZShcIi4uL3NlcnZlci9pbWFnZS1jb25maWdcIik7XG52YXIgX3VzZUludGVyc2VjdGlvbiA9IHJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbn1cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XG4gICAgZm9yKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgICAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24oc3ltKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7XG4gICAgfTtcbiAgICB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gICAgdmFyIGtleSwgaTtcbiAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcbiAgICAgICAgZm9yKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge1xuICAgIH07XG4gICAgdmFyIHRhcmdldCA9IHtcbiAgICB9O1xuICAgIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICB2YXIga2V5LCBpO1xuICAgIGZvcihpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspe1xuICAgICAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuY29uc3QgbG9hZGVkSW1hZ2VVUkxzID0gbmV3IFNldCgpO1xuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZ2xvYmFsLl9fTkVYVF9JTUFHRV9JTVBPUlRFRCA9IHRydWU7XG59XG5jb25zdCBWQUxJRF9MT0FESU5HX1ZBTFVFUyA9IFtcbiAgICAnbGF6eScsXG4gICAgJ2VhZ2VyJyxcbiAgICB1bmRlZmluZWRcbl07XG5jb25zdCBsb2FkZXJzID0gbmV3IE1hcChbXG4gICAgW1xuICAgICAgICAnZGVmYXVsdCcsXG4gICAgICAgIGRlZmF1bHRMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2ltZ2l4JyxcbiAgICAgICAgaW1naXhMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2Nsb3VkaW5hcnknLFxuICAgICAgICBjbG91ZGluYXJ5TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdha2FtYWknLFxuICAgICAgICBha2FtYWlMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2N1c3RvbScsXG4gICAgICAgIGN1c3RvbUxvYWRlclxuICAgIF0sIFxuXSk7XG5jb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTID0gW1xuICAgICdmaWxsJyxcbiAgICAnZml4ZWQnLFxuICAgICdpbnRyaW5zaWMnLFxuICAgICdyZXNwb25zaXZlJyxcbiAgICB1bmRlZmluZWQsIFxuXTtcbmZ1bmN0aW9uIGlzU3RhdGljUmVxdWlyZShzcmMpIHtcbiAgICByZXR1cm4gc3JjLmRlZmF1bHQgIT09IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGlzU3RhdGljSW1hZ2VEYXRhKHNyYykge1xuICAgIHJldHVybiBzcmMuc3JjICE9PSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBpc1N0YXRpY0ltcG9ydChzcmMpIHtcbiAgICByZXR1cm4gdHlwZW9mIHNyYyA9PT0gJ29iamVjdCcgJiYgKGlzU3RhdGljUmVxdWlyZShzcmMpIHx8IGlzU3RhdGljSW1hZ2VEYXRhKHNyYykpO1xufVxuY29uc3QgeyBkZXZpY2VTaXplczogY29uZmlnRGV2aWNlU2l6ZXMgLCBpbWFnZVNpemVzOiBjb25maWdJbWFnZVNpemVzICwgbG9hZGVyOiBjb25maWdMb2FkZXIgLCBwYXRoOiBjb25maWdQYXRoICwgZG9tYWluczogY29uZmlnRG9tYWlucyAsICB9ID0gcHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFMgfHwgX2ltYWdlQ29uZmlnLmltYWdlQ29uZmlnRGVmYXVsdDtcbi8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXMgPSBbXG4gICAgLi4uY29uZmlnRGV2aWNlU2l6ZXMsXG4gICAgLi4uY29uZmlnSW1hZ2VTaXplc1xuXTtcbmNvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsIGIpPT5hIC0gYlxuKTtcbmFsbFNpemVzLnNvcnQoKGEsIGIpPT5hIC0gYlxuKTtcbmZ1bmN0aW9uIGdldFdpZHRocyh3aWR0aCwgbGF5b3V0LCBzaXplcykge1xuICAgIGlmIChzaXplcyAmJiAobGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpKSB7XG4gICAgICAgIC8vIEZpbmQgYWxsIHRoZSBcInZ3XCIgcGVyY2VudCBzaXplcyB1c2VkIGluIHRoZSBzaXplcyBwcm9wXG4gICAgICAgIGNvbnN0IHZpZXdwb3J0V2lkdGhSZSA9IC8oXnxcXHMpKDE/XFxkP1xcZCl2dy9nO1xuICAgICAgICBjb25zdCBwZXJjZW50U2l6ZXMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBtYXRjaDsgbWF0Y2ggPSB2aWV3cG9ydFdpZHRoUmUuZXhlYyhzaXplcyk7IG1hdGNoKXtcbiAgICAgICAgICAgIHBlcmNlbnRTaXplcy5wdXNoKHBhcnNlSW50KG1hdGNoWzJdKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBlcmNlbnRTaXplcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHNtYWxsZXN0UmF0aW8gPSBNYXRoLm1pbiguLi5wZXJjZW50U2l6ZXMpICogMC4wMTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgd2lkdGhzOiBhbGxTaXplcy5maWx0ZXIoKHMpPT5zID49IGNvbmZpZ0RldmljZVNpemVzWzBdICogc21hbGxlc3RSYXRpb1xuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAga2luZDogJ3cnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aHM6IGFsbFNpemVzLFxuICAgICAgICAgICAga2luZDogJ3cnXG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2lkdGggIT09ICdudW1iZXInIHx8IGxheW91dCA9PT0gJ2ZpbGwnIHx8IGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aHM6IGNvbmZpZ0RldmljZVNpemVzLFxuICAgICAgICAgICAga2luZDogJ3cnXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHdpZHRocyA9IFtcbiAgICAgICAgLi4ubmV3IFNldCgvLyA+IFRoaXMgbWVhbnMgdGhhdCBtb3N0IE9MRUQgc2NyZWVucyB0aGF0IHNheSB0aGV5IGFyZSAzeCByZXNvbHV0aW9uLFxuICAgICAgICAvLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbiAgICAgICAgLy8gPiBibHVlIGNvbG9ycy4gU2hvd2luZyBhIDN4IHJlc29sdXRpb24gaW1hZ2UgaW4gdGhlIGFwcCB2cyBhIDJ4XG4gICAgICAgIC8vID4gcmVzb2x1dGlvbiBpbWFnZSB3aWxsIGJlIHZpc3VhbGx5IHRoZSBzYW1lLCB0aG91Z2ggdGhlIDN4IGltYWdlXG4gICAgICAgIC8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4gICAgICAgIC8vID4gd2FzdGVmdWwgYXMgdGhlIGh1bWFuIGV5ZSBjYW5ub3Qgc2VlIHRoYXQgbGV2ZWwgb2YgZGV0YWlsIHdpdGhvdXRcbiAgICAgICAgLy8gPiBzb21ldGhpbmcgbGlrZSBhIG1hZ25pZnlpbmcgZ2xhc3MuXG4gICAgICAgIC8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcbiAgICAgICAgW1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICB3aWR0aCAqIDIgLyosIHdpZHRoICogMyovIFxuICAgICAgICBdLm1hcCgodyk9PmFsbFNpemVzLmZpbmQoKHApPT5wID49IHdcbiAgICAgICAgICAgICkgfHwgYWxsU2l6ZXNbYWxsU2l6ZXMubGVuZ3RoIC0gMV1cbiAgICAgICAgKSksIFxuICAgIF07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGhzLFxuICAgICAgICBraW5kOiAneCdcbiAgICB9O1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7IHNyYyAsIHVub3B0aW1pemVkICwgbGF5b3V0ICwgd2lkdGggLCBxdWFsaXR5ICwgc2l6ZXMgLCBsb2FkZXIgIH0pIHtcbiAgICBpZiAodW5vcHRpbWl6ZWQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgc2l6ZXM6IHVuZGVmaW5lZFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCB7IHdpZHRocyAsIGtpbmQgIH0gPSBnZXRXaWR0aHMod2lkdGgsIGxheW91dCwgc2l6ZXMpO1xuICAgIGNvbnN0IGxhc3QgPSB3aWR0aHMubGVuZ3RoIC0gMTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzaXplczogIXNpemVzICYmIGtpbmQgPT09ICd3JyA/ICcxMDB2dycgOiBzaXplcyxcbiAgICAgICAgc3JjU2V0OiB3aWR0aHMubWFwKCh3LCBpKT0+YCR7bG9hZGVyKHtcbiAgICAgICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICAgICAgcXVhbGl0eSxcbiAgICAgICAgICAgICAgICB3aWR0aDogd1xuICAgICAgICAgICAgfSl9ICR7a2luZCA9PT0gJ3cnID8gdyA6IGkgKyAxfSR7a2luZH1gXG4gICAgICAgICkuam9pbignLCAnKSxcbiAgICAgICAgLy8gSXQncyBpbnRlbmRlZCB0byBrZWVwIGBzcmNgIHRoZSBsYXN0IGF0dHJpYnV0ZSBiZWNhdXNlIFJlYWN0IHVwZGF0ZXNcbiAgICAgICAgLy8gYXR0cmlidXRlcyBpbiBvcmRlci4gSWYgd2Uga2VlcCBgc3JjYCB0aGUgZmlyc3Qgb25lLCBTYWZhcmkgd2lsbFxuICAgICAgICAvLyBpbW1lZGlhdGVseSBzdGFydCB0byBmZXRjaCBgc3JjYCwgYmVmb3JlIGBzaXplc2AgYW5kIGBzcmNTZXRgIGFyZSBldmVuXG4gICAgICAgIC8vIHVwZGF0ZWQgYnkgUmVhY3QuIFRoYXQgY2F1c2VzIG11bHRpcGxlIHVubmVjZXNzYXJ5IHJlcXVlc3RzIGlmIGBzcmNTZXRgXG4gICAgICAgIC8vIGFuZCBgc2l6ZXNgIGFyZSBkZWZpbmVkLlxuICAgICAgICAvLyBUaGlzIGJ1ZyBjYW5ub3QgYmUgcmVwcm9kdWNlZCBpbiBDaHJvbWUgb3IgRmlyZWZveC5cbiAgICAgICAgc3JjOiBsb2FkZXIoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgcXVhbGl0eSxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aHNbbGFzdF1cbiAgICAgICAgfSlcbiAgICB9O1xufVxuZnVuY3Rpb24gZ2V0SW50KHgpIHtcbiAgICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludCh4LCAxMCk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBkZWZhdWx0SW1hZ2VMb2FkZXIobG9hZGVyUHJvcHMpIHtcbiAgICBjb25zdCBsb2FkID0gbG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKTtcbiAgICBpZiAobG9hZCkge1xuICAgICAgICByZXR1cm4gbG9hZChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgIHJvb3Q6IGNvbmZpZ1BhdGhcbiAgICAgICAgfSwgbG9hZGVyUHJvcHMpKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIFwibG9hZGVyXCIgZm91bmQgaW4gXCJuZXh0LmNvbmZpZy5qc1wiLiBFeHBlY3RlZDogJHtfaW1hZ2VDb25maWcuVkFMSURfTE9BREVSUy5qb2luKCcsICcpfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWApO1xufVxuLy8gU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8zOTc3NzgzMy8yNjY1MzUgZm9yIHdoeSB3ZSB1c2UgdGhpcyByZWZcbi8vIGhhbmRsZXIgaW5zdGVhZCBvZiB0aGUgaW1nJ3Mgb25Mb2FkIGF0dHJpYnV0ZS5cbmZ1bmN0aW9uIGhhbmRsZUxvYWRpbmcoaW1nLCBzcmMsIGxheW91dCwgcGxhY2Vob2xkZXIsIG9uTG9hZGluZ0NvbXBsZXRlKSB7XG4gICAgaWYgKCFpbWcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBoYW5kbGVMb2FkID0gKCk9PntcbiAgICAgICAgaWYgKCFpbWcuc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6JykpIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSAnZGVjb2RlJyBpbiBpbWcgPyBpbWcuZGVjb2RlKCkgOiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIHAuY2F0Y2goKCk9PntcbiAgICAgICAgICAgIH0pLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICBpZiAocGxhY2Vob2xkZXIgPT09ICdibHVyJykge1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuZmlsdGVyID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxvYWRlZEltYWdlVVJMcy5hZGQoc3JjKTtcbiAgICAgICAgICAgICAgICBpZiAob25Mb2FkaW5nQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBuYXR1cmFsV2lkdGggLCBuYXR1cmFsSGVpZ2h0ICB9ID0gaW1nO1xuICAgICAgICAgICAgICAgICAgICAvLyBQYXNzIGJhY2sgcmVhZC1vbmx5IHByaW1pdGl2ZSB2YWx1ZXMgYnV0IG5vdCB0aGVcbiAgICAgICAgICAgICAgICAgICAgLy8gdW5kZXJseWluZyBET00gZWxlbWVudCBiZWNhdXNlIGl0IGNvdWxkIGJlIG1pc3VzZWQuXG4gICAgICAgICAgICAgICAgICAgIG9uTG9hZGluZ0NvbXBsZXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdHVyYWxXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdHVyYWxIZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWY7XG4gICAgICAgICAgICAgICAgICAgIGlmICgocmVmID0gaW1nLnBhcmVudEVsZW1lbnQpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGdldENvbXB1dGVkU3R5bGUoaW1nLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScgJiYgcGFyZW50LmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtYXkgbm90IHJlbmRlciBwcm9wZXJseSBhcyBhIGNoaWxkIG9mIGEgZmxleCBjb250YWluZXIuIENvbnNpZGVyIHdyYXBwaW5nIHRoZSBpbWFnZSB3aXRoIGEgZGl2IHRvIGNvbmZpZ3VyZSB0aGUgd2lkdGguYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpbGwnICYmIHBhcmVudC5wb3NpdGlvbiAhPT0gJ3JlbGF0aXZlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtYXkgbm90IHJlbmRlciBwcm9wZXJseSB3aXRoIGEgcGFyZW50IHVzaW5nIHBvc2l0aW9uOlwiJHtwYXJlbnQucG9zaXRpb259XCIuIENvbnNpZGVyIGNoYW5naW5nIHRoZSBwYXJlbnQgc3R5bGUgdG8gcG9zaXRpb246XCJyZWxhdGl2ZVwiIHdpdGggYSB3aWR0aCBhbmQgaGVpZ2h0LmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlmIChpbWcuY29tcGxldGUpIHtcbiAgICAgICAgLy8gSWYgdGhlIHJlYWwgaW1hZ2UgZmFpbHMgdG8gbG9hZCwgdGhpcyB3aWxsIHN0aWxsIHJlbW92ZSB0aGUgcGxhY2Vob2xkZXIuXG4gICAgICAgIC8vIFRoaXMgaXMgdGhlIGRlc2lyZWQgYmVoYXZpb3IgZm9yIG5vdywgYW5kIHdpbGwgYmUgcmV2aXNpdGVkIHdoZW4gZXJyb3JcbiAgICAgICAgLy8gaGFuZGxpbmcgaXMgd29ya2VkIG9uIGZvciB0aGUgaW1hZ2UgY29tcG9uZW50IGl0c2VsZi5cbiAgICAgICAgaGFuZGxlTG9hZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGltZy5vbmxvYWQgPSBoYW5kbGVMb2FkO1xuICAgIH1cbn1cbmZ1bmN0aW9uIEltYWdlMShfcGFyYW0pIHtcbiAgICB2YXIgeyBzcmMgLCBzaXplcyAsIHVub3B0aW1pemVkID1mYWxzZSAsIHByaW9yaXR5ID1mYWxzZSAsIGxvYWRpbmcgLCBsYXp5Qm91bmRhcnkgPScyMDBweCcgLCBjbGFzc05hbWUgLCBxdWFsaXR5ICwgd2lkdGggLCBoZWlnaHQgLCBvYmplY3RGaXQgLCBvYmplY3RQb3NpdGlvbiAsIG9uTG9hZGluZ0NvbXBsZXRlICwgbG9hZGVyID1kZWZhdWx0SW1hZ2VMb2FkZXIgLCBwbGFjZWhvbGRlciA9J2VtcHR5JyAsIGJsdXJEYXRhVVJMICB9ID0gX3BhcmFtLCBhbGwgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3BhcmFtLCBbXCJzcmNcIiwgXCJzaXplc1wiLCBcInVub3B0aW1pemVkXCIsIFwicHJpb3JpdHlcIiwgXCJsb2FkaW5nXCIsIFwibGF6eUJvdW5kYXJ5XCIsIFwiY2xhc3NOYW1lXCIsIFwicXVhbGl0eVwiLCBcIndpZHRoXCIsIFwiaGVpZ2h0XCIsIFwib2JqZWN0Rml0XCIsIFwib2JqZWN0UG9zaXRpb25cIiwgXCJvbkxvYWRpbmdDb21wbGV0ZVwiLCBcImxvYWRlclwiLCBcInBsYWNlaG9sZGVyXCIsIFwiYmx1ckRhdGFVUkxcIl0pO1xuICAgIGxldCByZXN0ID0gYWxsO1xuICAgIGxldCBsYXlvdXQgPSBzaXplcyA/ICdyZXNwb25zaXZlJyA6ICdpbnRyaW5zaWMnO1xuICAgIGlmICgnbGF5b3V0JyBpbiByZXN0KSB7XG4gICAgICAgIC8vIE92ZXJyaWRlIGRlZmF1bHQgbGF5b3V0IGlmIHRoZSB1c2VyIHNwZWNpZmllZCBvbmU6XG4gICAgICAgIGlmIChyZXN0LmxheW91dCkgbGF5b3V0ID0gcmVzdC5sYXlvdXQ7XG4gICAgICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICAgICAgZGVsZXRlIHJlc3RbJ2xheW91dCddO1xuICAgIH1cbiAgICBsZXQgc3RhdGljU3JjID0gJyc7XG4gICAgaWYgKGlzU3RhdGljSW1wb3J0KHNyYykpIHtcbiAgICAgICAgY29uc3Qgc3RhdGljSW1hZ2VEYXRhID0gaXNTdGF0aWNSZXF1aXJlKHNyYykgPyBzcmMuZGVmYXVsdCA6IHNyYztcbiAgICAgICAgaWYgKCFzdGF0aWNJbWFnZURhdGEuc3JjKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgc3JjLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgYmx1ckRhdGFVUkwgPSBibHVyRGF0YVVSTCB8fCBzdGF0aWNJbWFnZURhdGEuYmx1ckRhdGFVUkw7XG4gICAgICAgIHN0YXRpY1NyYyA9IHN0YXRpY0ltYWdlRGF0YS5zcmM7XG4gICAgICAgIGlmICghbGF5b3V0IHx8IGxheW91dCAhPT0gJ2ZpbGwnKSB7XG4gICAgICAgICAgICBoZWlnaHQgPSBoZWlnaHQgfHwgc3RhdGljSW1hZ2VEYXRhLmhlaWdodDtcbiAgICAgICAgICAgIHdpZHRoID0gd2lkdGggfHwgc3RhdGljSW1hZ2VEYXRhLndpZHRoO1xuICAgICAgICAgICAgaWYgKCFzdGF0aWNJbWFnZURhdGEuaGVpZ2h0IHx8ICFzdGF0aWNJbWFnZURhdGEud2lkdGgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgaGVpZ2h0IGFuZCB3aWR0aC4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHNyYyA9IHR5cGVvZiBzcmMgPT09ICdzdHJpbmcnID8gc3JjIDogc3RhdGljU3JjO1xuICAgIGNvbnN0IHdpZHRoSW50ID0gZ2V0SW50KHdpZHRoKTtcbiAgICBjb25zdCBoZWlnaHRJbnQgPSBnZXRJbnQoaGVpZ2h0KTtcbiAgICBjb25zdCBxdWFsaXR5SW50ID0gZ2V0SW50KHF1YWxpdHkpO1xuICAgIGxldCBpc0xhenkgPSAhcHJpb3JpdHkgJiYgKGxvYWRpbmcgPT09ICdsYXp5JyB8fCB0eXBlb2YgbG9hZGluZyA9PT0gJ3VuZGVmaW5lZCcpO1xuICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSB8fCBzcmMuc3RhcnRzV2l0aCgnYmxvYjonKSkge1xuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Jhc2ljc19vZl9IVFRQL0RhdGFfVVJJc1xuICAgICAgICB1bm9wdGltaXplZCA9IHRydWU7XG4gICAgICAgIGlzTGF6eSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9hZGVkSW1hZ2VVUkxzLmhhcyhzcmMpKSB7XG4gICAgICAgIGlzTGF6eSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSBpcyBtaXNzaW5nIHJlcXVpcmVkIFwic3JjXCIgcHJvcGVydHkuIE1ha2Ugc3VyZSB5b3UgcGFzcyBcInNyY1wiIGluIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgICAgICBxdWFsaXR5XG4gICAgICAgICAgICB9KX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVZBTElEX0xBWU9VVF9WQUxVRVMuaW5jbHVkZXMobGF5b3V0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibGF5b3V0XCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsYXlvdXR9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xBWU9VVF9WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hTih3aWR0aEludCkgfHwgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYU4oaGVpZ2h0SW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwid2lkdGhcIiBvciBcImhlaWdodFwiIHByb3BlcnR5LiBUaGVzZSBzaG91bGQgYmUgbnVtZXJpYyB2YWx1ZXMuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxheW91dCA9PT0gJ2ZpbGwnICYmICh3aWR0aCB8fCBoZWlnaHQpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgYW5kIFwibGF5b3V0PSdmaWxsJ1wiIGhhcyB1bnVzZWQgcHJvcGVydGllcyBhc3NpZ25lZC4gUGxlYXNlIHJlbW92ZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibG9hZGluZ1wiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bG9hZGluZ31cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTE9BRElOR19WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJpb3JpdHkgJiYgbG9hZGluZyA9PT0gJ2xhenknKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBsYWNlaG9sZGVyID09PSAnYmx1cicpIHtcbiAgICAgICAgICAgIGlmIChsYXlvdXQgIT09ICdmaWxsJyAmJiAod2lkdGhJbnQgfHwgMCkgKiAoaGVpZ2h0SW50IHx8IDApIDwgMTYwMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBzbWFsbGVyIHRoYW4gNDB4NDAuIENvbnNpZGVyIHJlbW92aW5nIHRoZSBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IHRvIGltcHJvdmUgcGVyZm9ybWFuY2UuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWJsdXJEYXRhVVJMKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgVkFMSURfQkxVUl9FWFQgPSBbXG4gICAgICAgICAgICAgICAgICAgICdqcGVnJyxcbiAgICAgICAgICAgICAgICAgICAgJ3BuZycsXG4gICAgICAgICAgICAgICAgICAgICd3ZWJwJ1xuICAgICAgICAgICAgICAgIF0gLy8gc2hvdWxkIG1hdGNoIG5leHQtaW1hZ2UtbG9hZGVyXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSBidXQgaXMgbWlzc2luZyB0aGUgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LlxuICAgICAgICAgIFBvc3NpYmxlIHNvbHV0aW9uczpcbiAgICAgICAgICAgIC0gQWRkIGEgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LCB0aGUgY29udGVudHMgc2hvdWxkIGJlIGEgc21hbGwgRGF0YSBVUkwgdG8gcmVwcmVzZW50IHRoZSBpbWFnZVxuICAgICAgICAgICAgLSBDaGFuZ2UgdGhlIFwic3JjXCIgcHJvcGVydHkgdG8gYSBzdGF0aWMgaW1wb3J0IHdpdGggb25lIG9mIHRoZSBzdXBwb3J0ZWQgZmlsZSB0eXBlczogJHtWQUxJRF9CTFVSX0VYVC5qb2luKCcsJyl9XG4gICAgICAgICAgICAtIFJlbW92ZSB0aGUgXCJwbGFjZWhvbGRlclwiIHByb3BlcnR5LCBlZmZlY3RpdmVseSBubyBibHVyIGVmZmVjdFxuICAgICAgICAgIFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcGxhY2Vob2xkZXItYmx1ci1kYXRhLXVybGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgncmVmJyBpbiByZXN0KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgdXNpbmcgdW5zdXBwb3J0ZWQgXCJyZWZcIiBwcm9wZXJ0eS4gQ29uc2lkZXIgdXNpbmcgdGhlIFwib25Mb2FkaW5nQ29tcGxldGVcIiBwcm9wZXJ0eSBpbnN0ZWFkLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICgnc3R5bGUnIGluIHJlc3QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyB1c2luZyB1bnN1cHBvcnRlZCBcInN0eWxlXCIgcHJvcGVydHkuIFBsZWFzZSB1c2UgdGhlIFwiY2xhc3NOYW1lXCIgcHJvcGVydHkgaW5zdGVhZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCkgKyAxMDA7XG4gICAgICAgIGlmICghdW5vcHRpbWl6ZWQgJiYgIWxvYWRlcih7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICB3aWR0aDogcmFuZCxcbiAgICAgICAgICAgIHF1YWxpdHk6IDc1XG4gICAgICAgIH0pLmluY2x1ZGVzKHJhbmQudG9TdHJpbmcoKSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYSBcImxvYWRlclwiIHByb3BlcnR5IHRoYXQgZG9lcyBub3QgaW1wbGVtZW50IHdpZHRoLiBQbGVhc2UgaW1wbGVtZW50IGl0IG9yIHVzZSB0aGUgXCJ1bm9wdGltaXplZFwiIHByb3BlcnR5IGluc3RlYWQuYCArIGBcXG5SZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtbWlzc2luZy1sb2FkZXItd2lkdGhgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBbc2V0UmVmLCBpc0ludGVyc2VjdGVkXSA9ICgwLCBfdXNlSW50ZXJzZWN0aW9uKS51c2VJbnRlcnNlY3Rpb24oe1xuICAgICAgICByb290TWFyZ2luOiBsYXp5Qm91bmRhcnksXG4gICAgICAgIGRpc2FibGVkOiAhaXNMYXp5XG4gICAgfSk7XG4gICAgY29uc3QgaXNWaXNpYmxlID0gIWlzTGF6eSB8fCBpc0ludGVyc2VjdGVkO1xuICAgIGxldCB3cmFwcGVyU3R5bGU7XG4gICAgbGV0IHNpemVyU3R5bGU7XG4gICAgbGV0IHNpemVyU3ZnO1xuICAgIGxldCBpbWdTdHlsZSA9IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIG1heEhlaWdodDogJzEwMCUnLFxuICAgICAgICBvYmplY3RGaXQsXG4gICAgICAgIG9iamVjdFBvc2l0aW9uXG4gICAgfTtcbiAgICBjb25zdCBibHVyU3R5bGUgPSBwbGFjZWhvbGRlciA9PT0gJ2JsdXInID8ge1xuICAgICAgICBmaWx0ZXI6ICdibHVyKDIwcHgpJyxcbiAgICAgICAgYmFja2dyb3VuZFNpemU6IG9iamVjdEZpdCB8fCAnY292ZXInLFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCIke2JsdXJEYXRhVVJMfVwiKWAsXG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogb2JqZWN0UG9zaXRpb24gfHwgJzAlIDAlJ1xuICAgIH0gOiB7XG4gICAgfTtcbiAgICBpZiAobGF5b3V0ID09PSAnZmlsbCcpIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG4gICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbiAgICAgICAgY29uc3QgcXVvdGllbnQgPSBoZWlnaHRJbnQgLyB3aWR0aEludDtcbiAgICAgICAgY29uc3QgcGFkZGluZ1RvcCA9IGlzTmFOKHF1b3RpZW50KSA/ICcxMDAlJyA6IGAke3F1b3RpZW50ICogMTAwfSVgO1xuICAgICAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdUb3BcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnaW50cmluc2ljJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJpbnRyaW5zaWNcIiAvPlxuICAgICAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2l6ZXJTdmcgPSBgPHN2ZyB3aWR0aD1cIiR7d2lkdGhJbnR9XCIgaGVpZ2h0PVwiJHtoZWlnaHRJbnR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIi8+YDtcbiAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaXhlZCcpIHtcbiAgICAgICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxuICAgICAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRJbnRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiAvPlxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG11c3QgdXNlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIiBwcm9wZXJ0aWVzIG9yIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5LmApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBpbWdBdHRyaWJ1dGVzID0ge1xuICAgICAgICBzcmM6ICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLFxuICAgICAgICBzcmNTZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgc2l6ZXM6IHVuZGVmaW5lZFxuICAgIH07XG4gICAgaWYgKGlzVmlzaWJsZSkge1xuICAgICAgICBpbWdBdHRyaWJ1dGVzID0gZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICB1bm9wdGltaXplZCxcbiAgICAgICAgICAgIGxheW91dCxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICAgICAgICBzaXplcyxcbiAgICAgICAgICAgIGxvYWRlclxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGV0IHNyY1N0cmluZyA9IHNyYztcbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgc3R5bGU6IHdyYXBwZXJTdHlsZVxuICAgIH0sIHNpemVyU3R5bGUgPyAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBzdHlsZTogc2l6ZXJTdHlsZVxuICAgIH0sIHNpemVyU3ZnID8gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICBwYWRkaW5nOiAwXG4gICAgICAgIH0sXG4gICAgICAgIGFsdDogXCJcIixcbiAgICAgICAgXCJhcmlhLWhpZGRlblwiOiB0cnVlLFxuICAgICAgICBzcmM6IGBkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7KDAsIF90b0Jhc2U2NCkudG9CYXNlNjQoc2l6ZXJTdmcpfWBcbiAgICB9KSA6IG51bGwpIDogbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgIH0sIHJlc3QsIGltZ0F0dHJpYnV0ZXMsIHtcbiAgICAgICAgZGVjb2Rpbmc6IFwiYXN5bmNcIixcbiAgICAgICAgXCJkYXRhLW5pbWdcIjogbGF5b3V0LFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgcmVmOiAoaW1nKT0+e1xuICAgICAgICAgICAgc2V0UmVmKGltZyk7XG4gICAgICAgICAgICBoYW5kbGVMb2FkaW5nKGltZywgc3JjU3RyaW5nLCBsYXlvdXQsIHBsYWNlaG9sZGVyLCBvbkxvYWRpbmdDb21wbGV0ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgfSwgaW1nU3R5bGUsIGJsdXJTdHlsZSlcbiAgICB9KSksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCBPYmplY3QuYXNzaWduKHtcbiAgICB9LCByZXN0LCBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgICAgc3JjLFxuICAgICAgICB1bm9wdGltaXplZCxcbiAgICAgICAgbGF5b3V0LFxuICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICAgIHNpemVzLFxuICAgICAgICBsb2FkZXJcbiAgICB9KSwge1xuICAgICAgICBkZWNvZGluZzogXCJhc3luY1wiLFxuICAgICAgICBcImRhdGEtbmltZ1wiOiBsYXlvdXQsXG4gICAgICAgIHN0eWxlOiBpbWdTdHlsZSxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIGxvYWRpbmc6IGxvYWRpbmcgfHwgJ2xhenknXG4gICAgfSkpKSwgcHJpb3JpdHkgPyAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4gICAgLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgYGltYWdlc3Jjc2V0YCwgYW5kIGluIHRob3NlIGNhc2VzXG4gICAgLy8gaXQgd291bGQgbGlrZWx5IGNhdXNlIHRoZSBpbmNvcnJlY3QgaW1hZ2UgdG8gYmUgcHJlbG9hZGVkLlxuICAgIC8vXG4gICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2VtYW50aWNzLmh0bWwjYXR0ci1saW5rLWltYWdlc3Jjc2V0XG4gICAgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9oZWFkLmRlZmF1bHQsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xuICAgICAgICBrZXk6ICdfX25pbWctJyArIGltZ0F0dHJpYnV0ZXMuc3JjICsgaW1nQXR0cmlidXRlcy5zcmNTZXQgKyBpbWdBdHRyaWJ1dGVzLnNpemVzLFxuICAgICAgICByZWw6IFwicHJlbG9hZFwiLFxuICAgICAgICBhczogXCJpbWFnZVwiLFxuICAgICAgICBocmVmOiBpbWdBdHRyaWJ1dGVzLnNyY1NldCA/IHVuZGVmaW5lZCA6IGltZ0F0dHJpYnV0ZXMuc3JjLFxuICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNyY3NldCBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZS5cbiAgICAgICAgaW1hZ2VzcmNzZXQ6IGltZ0F0dHJpYnV0ZXMuc3JjU2V0LFxuICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNpemVzIGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlLlxuICAgICAgICBpbWFnZXNpemVzOiBpbWdBdHRyaWJ1dGVzLnNpemVzXG4gICAgfSkpIDogbnVsbCkpO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplU3JjKHNyYykge1xuICAgIHJldHVybiBzcmNbMF0gPT09ICcvJyA/IHNyYy5zbGljZSgxKSA6IHNyYztcbn1cbmZ1bmN0aW9uIGltZ2l4TG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICwgcXVhbGl0eSAgfSkge1xuICAgIC8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/YXV0bz1mb3JtYXQmZml0PW1heCZ3PTMwMFxuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfWApO1xuICAgIGNvbnN0IHBhcmFtcyA9IHVybC5zZWFyY2hQYXJhbXM7XG4gICAgcGFyYW1zLnNldCgnYXV0bycsIHBhcmFtcy5nZXQoJ2F1dG8nKSB8fCAnZm9ybWF0Jyk7XG4gICAgcGFyYW1zLnNldCgnZml0JywgcGFyYW1zLmdldCgnZml0JykgfHwgJ21heCcpO1xuICAgIHBhcmFtcy5zZXQoJ3cnLCBwYXJhbXMuZ2V0KCd3JykgfHwgd2lkdGgudG9TdHJpbmcoKSk7XG4gICAgaWYgKHF1YWxpdHkpIHtcbiAgICAgICAgcGFyYW1zLnNldCgncScsIHF1YWxpdHkudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIHJldHVybiB1cmwuaHJlZjtcbn1cbmZ1bmN0aW9uIGFrYW1haUxvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAgfSkge1xuICAgIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9P2ltd2lkdGg9JHt3aWR0aH1gO1xufVxuZnVuY3Rpb24gY2xvdWRpbmFyeUxvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICAvLyBEZW1vOiBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL2ltYWdlL3VwbG9hZC93XzMwMCxjX2xpbWl0LHFfYXV0by90dXJ0bGVzLmpwZ1xuICAgIGNvbnN0IHBhcmFtcyA9IFtcbiAgICAgICAgJ2ZfYXV0bycsXG4gICAgICAgICdjX2xpbWl0JyxcbiAgICAgICAgJ3dfJyArIHdpZHRoLFxuICAgICAgICAncV8nICsgKHF1YWxpdHkgfHwgJ2F1dG8nKVxuICAgIF07XG4gICAgbGV0IHBhcmFtc1N0cmluZyA9IHBhcmFtcy5qb2luKCcsJykgKyAnLyc7XG4gICAgcmV0dXJuIGAke3Jvb3R9JHtwYXJhbXNTdHJpbmd9JHtub3JtYWxpemVTcmMoc3JjKX1gO1xufVxuZnVuY3Rpb24gY3VzdG9tTG9hZGVyKHsgc3JjICB9KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIG1pc3NpbmcgXCJsb2FkZXJcIiBwcm9wLmAgKyBgXFxuUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLW1pc3NpbmctbG9hZGVyYCk7XG59XG5mdW5jdGlvbiBkZWZhdWx0TG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICwgcXVhbGl0eSAgfSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdWYWx1ZXMgPSBbXTtcbiAgICAgICAgLy8gdGhlc2Ugc2hvdWxkIGFsd2F5cyBiZSBwcm92aWRlZCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlXG4gICAgICAgIGlmICghc3JjKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3NyYycpO1xuICAgICAgICBpZiAoIXdpZHRoKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3dpZHRoJyk7XG4gICAgICAgIGlmIChtaXNzaW5nVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oJywgJyl9IHRvIGJlIHByb3ZpZGVkLiBNYWtlIHN1cmUgeW91IHBhc3MgdGhlbSBhcyBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgcXVhbGl0eVxuICAgICAgICAgICAgfSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNyYy5zdGFydHNXaXRoKCcvLycpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc3JjLnN0YXJ0c1dpdGgoJy8nKSAmJiBjb25maWdEb21haW5zKSB7XG4gICAgICAgICAgICBsZXQgcGFyc2VkU3JjO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBwYXJzZWRTcmMgPSBuZXcgVVJMKHNyYyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJiAhY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNyYyBwcm9wICgke3NyY30pIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGhvc3RuYW1lIFwiJHtwYXJzZWRTcmMuaG9zdG5hbWV9XCIgaXMgbm90IGNvbmZpZ3VyZWQgdW5kZXIgaW1hZ2VzIGluIHlvdXIgXFxgbmV4dC5jb25maWcuanNcXGBcXG5gICsgYFNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYCR7cm9vdH0/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNyYyl9Jnc9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YDtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1hZ2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyXCIpO1xudmFyIF9yb3V0ZXIxID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xudmFyIF91c2VJbnRlcnNlY3Rpb24gPSByZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3QgcHJlZmV0Y2hlZCA9IHtcbn07XG5mdW5jdGlvbiBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFyb3V0ZXIpIHJldHVybjtcbiAgICBpZiAoISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSByZXR1cm47XG4gICAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpPT57XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBjdXJMb2NhbGUgPSBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWU7XG59XG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgICBjb25zdCB7IHRhcmdldCAgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgcmV0dXJuIHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicgfHwgZXZlbnQubWV0YUtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMjtcbn1cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKSB7XG4gICAgY29uc3QgeyBub2RlTmFtZSAgfSA9IGUuY3VycmVudFRhcmdldDtcbiAgICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAgICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICAgIGlmIChzY3JvbGwgPT0gbnVsbCAmJiBhcy5pbmRleE9mKCcjJykgPj0gMCkge1xuICAgICAgICBzY3JvbGwgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gICAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgICAgIHNoYWxsb3csXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgc2Nyb2xsXG4gICAgfSk7XG59XG5mdW5jdGlvbiBMaW5rKHByb3BzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCIgOiAnJykpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZCA9IHtcbiAgICAgICAgICAgIGhyZWY6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wcyA9IE9iamVjdC5rZXlzKHJlcXVpcmVkUHJvcHNHdWFyZCk7XG4gICAgICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gPT0gbnVsbCB8fCB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgICAgICAgICAgY29uc3QgXyA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZCA9IHtcbiAgICAgICAgICAgIGFzOiB0cnVlLFxuICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgICAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICAgICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgICAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgICAgICAgbG9jYWxlOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUHJvcHMgPSBPYmplY3Qua2V5cyhvcHRpb25hbFByb3BzR3VhcmQpO1xuICAgICAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XTtcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAncmVwbGFjZScgfHwga2V5ID09PSAnc2Nyb2xsJyB8fCBrZXkgPT09ICdzaGFsbG93JyB8fCBrZXkgPT09ICdwYXNzSHJlZicgfHwga2V5ID09PSAncHJlZmV0Y2gnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICAgICAgICAgIGNvbnN0IF8gPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICAgICAgY29uc3QgaGFzV2FybmVkID0gX3JlYWN0LmRlZmF1bHQudXNlUmVmKGZhbHNlKTtcbiAgICAgICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2U7XG4gICAgY29uc3Qgcm91dGVyID0gKDAsIF9yb3V0ZXIxKS51c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IGhyZWYgLCBhcyAgfSA9IF9yZWFjdC5kZWZhdWx0LnVzZU1lbW8oKCk9PntcbiAgICAgICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSAoMCwgX3JvdXRlcikucmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5ocmVmLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgICAgICAgIGFzOiBwcm9wcy5hcyA/ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmFzKSA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG4gICAgICAgIH07XG4gICAgfSwgW1xuICAgICAgICByb3V0ZXIsXG4gICAgICAgIHByb3BzLmhyZWYsXG4gICAgICAgIHByb3BzLmFzXG4gICAgXSk7XG4gICAgbGV0IHsgY2hpbGRyZW4gLCByZXBsYWNlICwgc2hhbGxvdyAsIHNjcm9sbCAsIGxvY2FsZSAgfSA9IHByb3BzO1xuICAgIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNoaWxkcmVuID0gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBudWxsLCBjaGlsZHJlbik7XG4gICAgfVxuICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgIGxldCBjaGlsZDtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBjaGlsZHJlbiB3ZXJlIHBhc3NlZCB0byA8TGluaz4gd2l0aCBcXGBocmVmXFxgIG9mIFxcYCR7cHJvcHMuaHJlZn1cXGAgYnV0IG9ubHkgb25lIGNoaWxkIGlzIHN1cHBvcnRlZCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9saW5rLW11bHRpcGxlLWNoaWxkcmVuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiIFxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCIgOiAnJykpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICB9XG4gICAgY29uc3QgY2hpbGRSZWYgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZjtcbiAgICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gKDAsIF91c2VJbnRlcnNlY3Rpb24pLnVzZUludGVyc2VjdGlvbih7XG4gICAgICAgIHJvb3RNYXJnaW46ICcyMDBweCdcbiAgICB9KTtcbiAgICBjb25zdCBzZXRSZWYgPSBfcmVhY3QuZGVmYXVsdC51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIHNldEludGVyc2VjdGlvblJlZihlbCk7XG4gICAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgY2hpbGRSZWYsXG4gICAgICAgIHNldEludGVyc2VjdGlvblJlZlxuICAgIF0pO1xuICAgIF9yZWFjdC5kZWZhdWx0LnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmICgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpO1xuICAgICAgICBjb25zdCBjdXJMb2NhbGUgPSB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldO1xuICAgICAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICAgICAgICAgIGxvY2FsZTogY3VyTG9jYWxlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgYXMsXG4gICAgICAgIGhyZWYsXG4gICAgICAgIGlzVmlzaWJsZSxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBwLFxuICAgICAgICByb3V0ZXJcbiAgICBdKTtcbiAgICBjb25zdCBjaGlsZFByb3BzID0ge1xuICAgICAgICByZWY6IHNldFJlZixcbiAgICAgICAgb25DbGljazogKGUpPT57XG4gICAgICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGUpPT57XG4gICAgICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTtcbiAgICAgICAgfVxuICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICBwcmlvcml0eTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAgIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICAgIGlmIChwcm9wcy5wYXNzSHJlZiB8fCBjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSB7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4gICAgICAgIC8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG4gICAgICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9IHJvdXRlciAmJiByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiYgKDAsIF9yb3V0ZXIpLmdldERvbWFpbkxvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlcyk7XG4gICAgICAgIGNoaWxkUHJvcHMuaHJlZiA9IGxvY2FsZURvbWFpbiB8fCAoMCwgX3JvdXRlcikuYWRkQmFzZVBhdGgoKDAsIF9yb3V0ZXIpLmFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKTtcbiAgICB9XG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKSk7XG59XG52YXIgX2RlZmF1bHQgPSBMaW5rO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmsuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7XG5leHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gdm9pZCAwO1xuZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoO1xufVxuY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0ggPyAocGF0aCk9PntcbiAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpO1xuICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nO1xuICAgIH1cbn0gOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSB2b2lkIDA7XG5jb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjayAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGNiKSB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY2Ioe1xuICAgICAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIDEpO1xufTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2s7XG5jb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2sgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGlkKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZCk7XG59O1xuZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSBjYW5jZWxJZGxlQ2FsbGJhY2s7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMubWFya0Fzc2V0RXJyb3IgPSBtYXJrQXNzZXRFcnJvcjtcbmV4cG9ydHMuaXNBc3NldEVycm9yID0gaXNBc3NldEVycm9yO1xuZXhwb3J0cy5nZXRDbGllbnRCdWlsZE1hbmlmZXN0ID0gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdDtcbmV4cG9ydHMuY3JlYXRlUm91dGVMb2FkZXIgPSBjcmVhdGVSb3V0ZUxvYWRlcjtcbnZhciBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZVwiKSk7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwO1xuZnVuY3Rpb24gd2l0aEZ1dHVyZShrZXksIG1hcCwgZ2VuZXJhdG9yKSB7XG4gICAgbGV0IGVudHJ5ID0gbWFwLmdldChrZXkpO1xuICAgIGlmIChlbnRyeSkge1xuICAgICAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgICAgICAgIHJldHVybiBlbnRyeS5mdXR1cmU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSk7XG4gICAgfVxuICAgIGxldCByZXNvbHZlcjtcbiAgICBjb25zdCBwcm9tID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgIHJlc29sdmVyID0gcmVzb2x2ZTtcbiAgICB9KTtcbiAgICBtYXAuc2V0KGtleSwgZW50cnkgPSB7XG4gICAgICAgIHJlc29sdmU6IHJlc29sdmVyLFxuICAgICAgICBmdXR1cmU6IHByb21cbiAgICB9KTtcbiAgICByZXR1cm4gZ2VuZXJhdG9yID8gZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpPT4ocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSlcbiAgICApIDogcHJvbTtcbn1cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbmspIHtcbiAgICB0cnkge1xuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICByZXR1cm4oLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIWRvY3VtZW50LmRvY3VtZW50TW9kZSkgfHwgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5jb25zdCBjYW5QcmVmZXRjaCA9IGhhc1ByZWZldGNoKCk7XG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShocmVmLCBhcywgbGluaykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopPT57XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICAgICAgaWYgKGFzKSBsaW5rLmFzID0gYXM7XG4gICAgICAgIGxpbmsucmVsID0gYHByZWZldGNoYDtcbiAgICAgICAgbGluay5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47XG4gICAgICAgIGxpbmsub25sb2FkID0gcmVzO1xuICAgICAgICBsaW5rLm9uZXJyb3IgPSByZWo7XG4gICAgICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgICAgIGxpbmsuaHJlZiA9IGhyZWY7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgfSk7XG59XG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJyk7XG5mdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnIpIHtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge1xuICAgIH0pO1xufVxuZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycikge1xuICAgIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnI7XG59XG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoc3JjLCBzY3JpcHQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9ICgpPT5yZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcbiAgICAgICAgO1xuICAgICAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAgICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG4gICAgICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47XG4gICAgICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4gICAgICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgICAgICBzY3JpcHQuc3JjID0gc3JjO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfSk7XG59XG4vLyBXZSB3YWl0IGZvciBwYWdlcyB0byBiZSBidWlsdCBpbiBkZXYgYmVmb3JlIHdlIHN0YXJ0IHRoZSByb3V0ZSB0cmFuc2l0aW9uXG4vLyB0aW1lb3V0IHRvIHByZXZlbnQgYW4gdW4tbmVjZXNzYXJ5IGhhcmQgbmF2aWdhdGlvbiBpbiBkZXZlbG9wbWVudC5cbmxldCBkZXZCdWlsZFByb21pc2U7XG4vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChwLCBtcywgZXJyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgcC50aGVuKChyKT0+e1xuICAgICAgICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc29sdmUocik7XG4gICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgICAgIC8vIFdlIHdyYXAgdGhlc2UgY2hlY2tzIHNlcGFyYXRlbHkgZm9yIGJldHRlciBkZWFkLWNvZGUgZWxpbWluYXRpb24gaW5cbiAgICAgICAgLy8gcHJvZHVjdGlvbiBidW5kbGVzLlxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgIChkZXZCdWlsZFByb21pc2UgfHwgUHJvbWlzZS5yZXNvbHZlKCkpLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIG1zKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBtcylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSB7XG4gICAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XG4gICAgfVxuICAgIGNvbnN0IG9uQnVpbGRNYW5pZmVzdCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCO1xuICAgICAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKT0+e1xuICAgICAgICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO1xuICAgICAgICAgICAgY2IgJiYgY2IoKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChvbkJ1aWxkTWFuaWZlc3QsIE1TX01BWF9JRExFX0RFTEFZLCBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKSk7XG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgICAgICAgICBhc3NldFByZWZpeCArICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgKyBlbmNvZGVVUkkoKDAsIF9nZXRBc3NldFBhdGhGcm9tUm91dGUpLmRlZmF1bHQocm91dGUsICcuanMnKSksIFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgICAgICAgIGNzczogW11cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpPT57XG4gICAgICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoKGVudHJ5KT0+YXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuanMnKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KT0+di5lbmRzV2l0aCgnLmNzcycpXG4gICAgICAgICAgICApXG4gICAgICAgIH07XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeCkge1xuICAgIGNvbnN0IGVudHJ5cG9pbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IGxvYWRlZFNjcmlwdHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgc3R5bGVTaGVldHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgcm91dGVzID0gbmV3IE1hcCgpO1xuICAgIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmMpIHtcbiAgICAgICAgbGV0IHByb20gPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpO1xuICAgICAgICBpZiAocHJvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb207XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgcHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKTtcbiAgICAgICAgcmV0dXJuIHByb207XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmKSB7XG4gICAgICAgIGxldCBwcm9tID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpO1xuICAgICAgICBpZiAocHJvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb207XG4gICAgICAgIH1cbiAgICAgICAgc3R5bGVTaGVldHMuc2V0KGhyZWYsIHByb20gPSBmZXRjaChocmVmKS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCk9Pih7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IGhyZWYsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRleHRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycik7XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHByb207XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHdoZW5FbnRyeXBvaW50IChyb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FbnRyeXBvaW50IChyb3V0ZSwgZXhlY3V0ZSkge1xuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpLnRoZW4oKGZuKT0+Zm4oKVxuICAgICAgICAgICAgKS50aGVuKChleHBvcnRzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCB8fCBleHBvcnRzLFxuICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICwgKGVycik9Pih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKS50aGVuKChpbnB1dCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpO1xuICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLnNldChyb3V0ZSwgaW5wdXQpO1xuICAgICAgICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRSb3V0ZSAocm91dGUsIHByZWZldGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgcm91dGVzLCAoKT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlRmlsZXNQcm9taXNlID0gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpLnRoZW4oKHsgc2NyaXB0cyAsIGNzcyAgfSk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSkgPyBbXSA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSwgXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oKGVudHJ5cG9pbnQpPT4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5cG9pbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiByZXNbMV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGRldkJ1aWxkUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdXRlRmlsZXNQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlRmlsZXNQcm9taXNlLmZpbmFsbHkoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocm91dGVGaWxlc1Byb21pc2UsIE1TX01BWF9JRExFX0RFTEFZLCBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSkpLnRoZW4oKHsgZW50cnlwb2ludCAsIHN0eWxlcyAgfSk9PntcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHN0eWxlc1xuICAgICAgICAgICAgICAgICAgICB9LCBlbnRyeXBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXM7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZWZldGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHByZWZldGNoIChyb3V0ZSkge1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgICAgICAgbGV0IGNuO1xuICAgICAgICAgICAgaWYgKGNuID0gbmF2aWdhdG9yLmNvbm5lY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpLnRoZW4oKG91dHB1dCk9PlByb21pc2UuYWxsKGNhblByZWZldGNoID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpPT5wcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKVxuICAgICAgICAgICAgICAgICkgOiBbXSlcbiAgICAgICAgICAgICkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+dGhpcy5sb2FkUm91dGUocm91dGUsIHRydWUpLmNhdGNoKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4gICAgICAgICAgICAoKT0+e1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJSb3V0ZXJcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9yb3V0ZXIuZGVmYXVsdDtcbiAgICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIndpdGhSb3V0ZXJcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF93aXRoUm91dGVyLmRlZmF1bHQ7XG4gICAgfVxufSk7XG5leHBvcnRzLnVzZVJvdXRlciA9IHVzZVJvdXRlcjtcbmV4cG9ydHMuY3JlYXRlUm91dGVyID0gY3JlYXRlUm91dGVyO1xuZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2UgPSBtYWtlUHVibGljUm91dGVySW5zdGFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIikpO1xudmFyIF9yb3V0ZXJDb250ZXh0ID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHRcIik7XG52YXIgX3dpdGhSb3V0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IHNpbmdsZXRvblJvdXRlciA9IHtcbiAgICByb3V0ZXI6IG51bGwsXG4gICAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICAgIHJlYWR5IChjYikge1xuICAgICAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICAgJ3BhdGhuYW1lJyxcbiAgICAncm91dGUnLFxuICAgICdxdWVyeScsXG4gICAgJ2FzUGF0aCcsXG4gICAgJ2NvbXBvbmVudHMnLFxuICAgICdpc0ZhbGxiYWNrJyxcbiAgICAnYmFzZVBhdGgnLFxuICAgICdsb2NhbGUnLFxuICAgICdsb2NhbGVzJyxcbiAgICAnZGVmYXVsdExvY2FsZScsXG4gICAgJ2lzUmVhZHknLFxuICAgICdpc1ByZXZpZXcnLFxuICAgICdpc0xvY2FsZURvbWFpbicsXG4gICAgJ2RvbWFpbkxvY2FsZXMnLCBcbl07XG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAgICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAgICdoYXNoQ2hhbmdlQ29tcGxldGUnLCBcbl07XG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAgICdwdXNoJyxcbiAgICAncmVwbGFjZScsXG4gICAgJ3JlbG9hZCcsXG4gICAgJ2JhY2snLFxuICAgICdwcmVmZXRjaCcsXG4gICAgJ2JlZm9yZVBvcFN0YXRlJywgXG5dO1xuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgICBnZXQgKCkge1xuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0LmV2ZW50cztcbiAgICB9XG59KTtcbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cbiAgICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgICAgIGdldCAoKSB7XG4gICAgICAgICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKTtcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyW2ZpZWxkXSA9ICguLi5hcmdzKT0+e1xuICAgICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKTtcbiAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7XG4gICAgfTtcbn0pO1xucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KT0+e1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e1xuICAgICAgICBfcm91dGVyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncyk9PntcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKDEpfWA7XG4gICAgICAgICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyO1xuICAgICAgICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbmZ1bmN0aW9uIGdldFJvdXRlcigpIHtcbiAgICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9ICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBvbiB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJztcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcbn1cbnZhciBfZGVmYXVsdCA9IHNpbmdsZXRvblJvdXRlcjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuZnVuY3Rpb24gdXNlUm91dGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO1xufVxuZnVuY3Rpb24gY3JlYXRlUm91dGVyKC4uLmFyZ3MpIHtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IF9yb3V0ZXIuZGVmYXVsdCguLi5hcmdzKTtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpPT5jYigpXG4gICAgKTtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXTtcbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcbn1cbmZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpIHtcbiAgICBjb25zdCBfcm91dGVyMSA9IHJvdXRlcjtcbiAgICBjb25zdCBpbnN0YW5jZSA9IHtcbiAgICB9O1xuICAgIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe1xuICAgICAgICBpZiAodHlwZW9mIF9yb3V0ZXIxW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oQXJyYXkuaXNBcnJheShfcm91dGVyMVtwcm9wZXJ0eV0pID8gW10gOiB7XG4gICAgICAgICAgICB9LCBfcm91dGVyMVtwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyMVtwcm9wZXJ0eV07XG4gICAgfVxuICAgIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgICBpbnN0YW5jZS5ldmVudHMgPSBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgcmV0dXJuIF9yb3V0ZXIxW2ZpZWxkXSguLi5hcmdzKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudXNlSW50ZXJzZWN0aW9uID0gdXNlSW50ZXJzZWN0aW9uO1xudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbih7IHJvb3RNYXJnaW4gLCBkaXNhYmxlZCAgfSkge1xuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7XG4gICAgY29uc3QgdW5vYnNlcnZlID0gKDAsIF9yZWFjdCkudXNlUmVmKCk7XG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gKDAsIF9yZWFjdCkudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHNldFJlZiA9ICgwLCBfcmVhY3QpLnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpO1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuO1xuICAgICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKGVsLCAoaXNWaXNpYmxlKT0+aXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKVxuICAgICAgICAgICAgLCB7XG4gICAgICAgICAgICAgICAgcm9vdE1hcmdpblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGlzRGlzYWJsZWQsXG4gICAgICAgIHJvb3RNYXJnaW4sXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICAoMCwgX3JlYWN0KS51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRWaXNpYmxlKHRydWUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCk9PigwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykuY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICByZXR1cm4gW1xuICAgICAgICBzZXRSZWYsXG4gICAgICAgIHZpc2libGVcbiAgICBdO1xufVxuZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgIGNvbnN0IHsgaWQgLCBvYnNlcnZlciAsIGVsZW1lbnRzICB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7XG4gICAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKSB7XG4gICAgICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpO1xuICAgICAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKSB7XG4gICAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJyc7XG4gICAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZCk7XG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG4gICAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpPT57XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpPT57XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIG9wdGlvbnMpO1xuICAgIG9ic2VydmVycy5zZXQoaWQsIGluc3RhbmNlID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgb2JzZXJ2ZXIsXG4gICAgICAgIGVsZW1lbnRzXG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gd2l0aFJvdXRlcjtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuL3JvdXRlclwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpIHtcbiAgICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcykge1xuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHJvdXRlcjogKDAsIF9yb3V0ZXIpLnVzZVJvdXRlcigpXG4gICAgICAgIH0sIHByb3BzKSkpO1xuICAgIH1cbiAgICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgV2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xuICAgICAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYDtcbiAgICB9XG4gICAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0RG9tYWluTG9jYWxlID0gZ2V0RG9tYWluTG9jYWxlO1xuZXhwb3J0cy5hZGRMb2NhbGUgPSBhZGRMb2NhbGU7XG5leHBvcnRzLmRlbExvY2FsZSA9IGRlbExvY2FsZTtcbmV4cG9ydHMuaGFzQmFzZVBhdGggPSBoYXNCYXNlUGF0aDtcbmV4cG9ydHMuYWRkQmFzZVBhdGggPSBhZGRCYXNlUGF0aDtcbmV4cG9ydHMuZGVsQmFzZVBhdGggPSBkZWxCYXNlUGF0aDtcbmV4cG9ydHMuaXNMb2NhbFVSTCA9IGlzTG9jYWxVUkw7XG5leHBvcnRzLmludGVycG9sYXRlQXMgPSBpbnRlcnBvbGF0ZUFzO1xuZXhwb3J0cy5yZXNvbHZlSHJlZiA9IHJlc29sdmVIcmVmO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoID0gcmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7XG52YXIgX3JvdXRlTG9hZGVyID0gcmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXJcIik7XG52YXIgX2Rlbm9ybWFsaXplUGFnZVBhdGggPSByZXF1aXJlKFwiLi4vLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTtcbnZhciBfbm9ybWFsaXplTG9jYWxlUGF0aCA9IHJlcXVpcmUoXCIuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTtcbnZhciBfbWl0dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO1xudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbnZhciBfaXNEeW5hbWljID0gcmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTtcbnZhciBfcGFyc2VSZWxhdGl2ZVVybCA9IHJlcXVpcmUoXCIuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybFwiKTtcbnZhciBfcXVlcnlzdHJpbmcgPSByZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTtcbnZhciBfcmVzb2x2ZVJld3JpdGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9yZXNvbHZlLXJld3JpdGVzXCIpKTtcbnZhciBfcm91dGVNYXRjaGVyID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTtcbnZhciBfcm91dGVSZWdleCA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtcbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZTtcbn1cbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCB8fCAnJztcbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgICAgICBjYW5jZWxsZWQ6IHRydWVcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCwgcHJlZml4KSB7XG4gICAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKSA/IHBhdGggPT09ICcvJyA/ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KSA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWAgOiBwYXRoO1xufVxuZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKHBhdGgsIGxvY2FsZSwgbG9jYWxlcywgZG9tYWluTG9jYWxlcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGxvY2FsZSA9IGxvY2FsZSB8fCAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGU7XG4gICAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKTtcbiAgICAgICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICAgICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2Jhc2VQYXRoIHx8ICcnfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBhZGRMb2NhbGUocGF0aCwgbG9jYWxlLCBkZWZhdWx0TG9jYWxlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpICYmIHBhdGhMb3dlciAhPT0gJy8nICsgbG9jYWxlTG93ZXIgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLCBsb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSB8fCBwYXRoTG93ZXIgPT09ICcvJyArIGxvY2FsZUxvd2VyKSA/IChwYXRobmFtZS5sZW5ndGggPT09IGxvY2FsZS5sZW5ndGggKyAxID8gJy8nIDogJycpICsgcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIDogcGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCkge1xuICAgIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKTtcbiAgICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKTtcbiAgICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKSB7XG4gICAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKTtcbn1cbmZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpIHtcbiAgICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICAgIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKTtcbn1cbmZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpO1xuICAgIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gO1xuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmwpIHtcbiAgICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gICAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSB8fCB1cmwuc3RhcnRzV2l0aCgnPycpKSByZXR1cm4gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICAgICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgICAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbik7XG4gICAgICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSkge1xuICAgIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnO1xuICAgIGNvbnN0IGR5bmFtaWNSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHM7XG4gICAgY29uc3QgZHluYW1pY01hdGNoZXMgPSAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8IC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeTtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlO1xuICAgIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpO1xuICAgIGlmICghcGFyYW1zLmV2ZXJ5KChwYXJhbSk9PntcbiAgICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnO1xuICAgICAgICBjb25zdCB7IHJlcGVhdCAsIG9wdGlvbmFsICB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV07XG4gICAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWA7XG4gICAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4gKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJiAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID0gaW50ZXJwb2xhdGVkUm91dGUucmVwbGFjZShyZXBsYWNlZCwgcmVwZWF0ID8gdmFsdWUubWFwKC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgKHNlZ21lbnQpPT5lbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgKS5qb2luKCcvJykgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKSB8fCAnLycpO1xuICAgIH0pKSB7XG4gICAgICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcbiAgICAgICAgO1xuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGFyYW1zLFxuICAgICAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlXG4gICAgfTtcbn1cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSB7XG4gICAgY29uc3QgZmlsdGVyZWRRdWVyeSA9IHtcbiAgICB9O1xuICAgIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV07XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZmlsdGVyZWRRdWVyeTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVIcmVmKHJvdXRlciwgaHJlZiwgcmVzb2x2ZUFzKSB7XG4gICAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgICBsZXQgYmFzZTtcbiAgICBsZXQgdXJsQXNTdHJpbmcgPSB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZik7XG4gICAgLy8gcmVwZWF0ZWQgc2xhc2hlcyBhbmQgYmFja3NsYXNoZXMgaW4gdGhlIFVSTCBhcmUgY29uc2lkZXJlZFxuICAgIC8vIGludmFsaWQgYW5kIHdpbGwgbmV2ZXIgbWF0Y2ggYSBOZXh0LmpzIHBhZ2UvZmlsZVxuICAgIGNvbnN0IHVybFByb3RvTWF0Y2ggPSB1cmxBc1N0cmluZy5tYXRjaCgvXlthLXpBLVpdezEsfTpcXC9cXC8vKTtcbiAgICBjb25zdCB1cmxBc1N0cmluZ05vUHJvdG8gPSB1cmxQcm90b01hdGNoID8gdXJsQXNTdHJpbmcuc3Vic3RyKHVybFByb3RvTWF0Y2hbMF0ubGVuZ3RoKSA6IHVybEFzU3RyaW5nO1xuICAgIGNvbnN0IHVybFBhcnRzID0gdXJsQXNTdHJpbmdOb1Byb3RvLnNwbGl0KCc/Jyk7XG4gICAgaWYgKCh1cmxQYXJ0c1swXSB8fCAnJykubWF0Y2goLyhcXC9cXC98XFxcXCkvKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIG5leHQvcm91dGVyOiAke3VybEFzU3RyaW5nfSwgcmVwZWF0ZWQgZm9yd2FyZC1zbGFzaGVzICgvLykgb3IgYmFja3NsYXNoZXMgXFxcXCBhcmUgbm90IHZhbGlkIGluIHRoZSBocmVmYCk7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRVcmwgPSAoMCwgX3V0aWxzKS5ub3JtYWxpemVSZXBlYXRlZFNsYXNoZXModXJsQXNTdHJpbmdOb1Byb3RvKTtcbiAgICAgICAgdXJsQXNTdHJpbmcgPSAodXJsUHJvdG9NYXRjaCA/IHVybFByb3RvTWF0Y2hbMF0gOiAnJykgKyBub3JtYWxpemVkVXJsO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICAgIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgYmFzZSA9IG5ldyBVUkwodXJsQXNTdHJpbmcuc3RhcnRzV2l0aCgnIycpID8gcm91dGVyLmFzUGF0aCA6IHJvdXRlci5wYXRobmFtZSwgJ2h0dHA6Ly9uJyk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICAvLyBmYWxsYmFjayB0byAvIGZvciBpbnZhbGlkIGFzUGF0aCB2YWx1ZXMgZS5nLiAvL1xuICAgICAgICBiYXNlID0gbmV3IFVSTCgnLycsICdodHRwOi8vbicpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpO1xuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpO1xuICAgICAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJztcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiYgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmIHJlc29sdmVBcykge1xuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSAoMCwgX3F1ZXJ5c3RyaW5nKS5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7XG4gICAgICAgICAgICBjb25zdCB7IHJlc3VsdCAsIHBhcmFtcyAgfSA9IGludGVycG9sYXRlQXMoZmluYWxVcmwucGF0aG5hbWUsIGZpbmFsVXJsLnBhdGhuYW1lLCBxdWVyeSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKSA6IGZpbmFsVXJsLmhyZWY7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICByZXNvbHZlZEhyZWYsXG4gICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZcbiAgICAgICAgXSA6IHJlc29sdmVkSHJlZjtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICB1cmxBc1N0cmluZ1xuICAgICAgICBdIDogdXJsQXNTdHJpbmc7XG4gICAgfVxufVxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsKSB7XG4gICAgY29uc3Qgb3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmw7XG59XG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyLCB1cmwsIGFzKSB7XG4gICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIsIHVybCwgdHJ1ZSk7XG4gICAgY29uc3Qgb3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7XG4gICAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKTtcbiAgICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBcztcbiAgICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpO1xuICAgIGNvbnN0IHByZXBhcmVkQXMgPSBhcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlciwgYXMpKSA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKVxuICAgIH07XG59XG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLCBwYWdlcykge1xuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKCgwLCBfZGVub3JtYWxpemVQYWdlUGF0aCkuZGVub3JtYWxpemVQYWdlUGF0aChwYXRobmFtZSkpO1xuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICAgIHJldHVybiBwYXRobmFtZTtcbiAgICB9XG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSkpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgICBwYWdlcy5zb21lKChwYWdlKT0+e1xuICAgICAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYWdlKSAmJiAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lID0gcGFnZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKTtcbn1cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID0gcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmICEhZnVuY3Rpb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHYgPSAnX19uZXh0JztcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZTtcbiAgICB9IGNhdGNoIChuKSB7XG4gICAgfVxufSgpO1xuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKTtcbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cykge1xuICAgIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICB9KS50aGVuKChyZXMpPT57XG4gICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkRcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlcikge1xuICAgIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgICAgLy8gbG9vcC5cbiAgICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICAgICAgKDAsIF9yb3V0ZUxvYWRlcikubWFya0Fzc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG59XG5jbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhdGhuYW1lMSwgcXVlcnkxLCBhczEsIHsgaW5pdGlhbFByb3BzICwgcGFnZUxvYWRlciAsIEFwcCAsIHdyYXBBcHAgLCBDb21wb25lbnQ6IENvbXBvbmVudDEgLCBlcnI6IGVycjEgLCBzdWJzY3JpcHRpb24gLCBpc0ZhbGxiYWNrICwgbG9jYWxlICwgbG9jYWxlcyAsIGRlZmF1bHRMb2NhbGUgLCBkb21haW5Mb2NhbGVzICwgaXNQcmV2aWV3ICB9KXtcbiAgICAgICAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgICAgICAgdGhpcy5zZGMgPSB7XG4gICAgICAgIH07XG4gICAgICAgIC8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG4gICAgICAgIHRoaXMuc2RyID0ge1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9pZHggPSAwO1xuICAgICAgICB0aGlzLm9uUG9wU3RhdGUgPSAoZSk9PntcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZTtcbiAgICAgICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgICAgICAgICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgICAgICAgICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgICAgICAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgICAgICAgICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgICAgICAgICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICwgcXVlcnk6IHF1ZXJ5MSAgfSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUxKSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5MVxuICAgICAgICAgICAgICAgIH0pLCAoMCwgX3V0aWxzKS5nZXRVUkwoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZm9yY2VkU2Nyb2xsO1xuICAgICAgICAgICAgY29uc3QgeyB1cmwgLCBhczogYXMxICwgb3B0aW9ucyAsIGlkeCAgfSA9IHN0YXRlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNlbGYucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2Uodik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2lkeCA9IGlkeDtcbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAgfSA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgICAgICAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3NyICYmIGFzMSA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUxID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgICAgICAgICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhczEsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgfSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICAgICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICB9KSwgZm9yY2VkU2Nyb2xsKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgICAgIHRoaXMucm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMSk7XG4gICAgICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7XG4gICAgICAgIH07XG4gICAgICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAgICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgICAgICBpZiAocGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IENvbXBvbmVudDEsXG4gICAgICAgICAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICAgICAgICAgIGVycjogZXJyMSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgICAgICAgIENvbXBvbmVudDogQXBwLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IFtdXG4gICAgICAgIH07XG4gICAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50cztcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlcjtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lMTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5MTtcbiAgICAgICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAgICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICAgICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPSAoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocGF0aG5hbWUxKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydDtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lMSA6IGFzMTtcbiAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICAgICAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcDtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgICAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICB0aGlzLmlzU3NyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFjaztcbiAgICAgICAgdGhpcy5pc1JlYWR5ID0gISEoc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHwgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uYXBwR2lwICYmICFzZWxmLl9fTkVYVF9EQVRBX18uZ3NwIHx8ICFhdXRvRXhwb3J0RHluYW1pYyAmJiAhc2VsZi5sb2NhdGlvbi5zZWFyY2ggJiYgIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpO1xuICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3O1xuICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2U7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXM7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAgICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgICAgICAgaWYgKGFzMS5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWYgPSBhczEgIT09IHBhdGhuYW1lMTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgICAgICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi8gYmFjaygpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovIHB1c2godXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgICAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBzZWxmLnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgKHsgdXJsICwgYXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBhc3luYyBjaGFuZ2UobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zLCBmb3JjZWRTY3JvbGwpIHtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNob3VsZFJlc29sdmVIcmVmID0gdXJsID09PSBhcyB8fCBvcHRpb25zLl9oIHx8IG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmO1xuICAgICAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAgICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgICAgIGlmIChvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByZXZMb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlID8gdGhpcy5kZWZhdWx0TG9jYWxlIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGU7XG4gICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgYXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlZjtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgICAgICAgICAgaWYgKCEoKHJlZiA9IHRoaXMubG9jYWxlcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYuaW5jbHVkZXModGhpcy5sb2NhbGUpKSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAgICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgICAgICAgICAgaWYgKCFkaWROYXZpZ2F0ZSAmJiBkZXRlY3RlZERvbWFpbiAmJiB0aGlzLmlzTG9jYWxlRG9tYWluICYmIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpbikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcyk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2FkZEJhc2VQYXRoKGAke3RoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7dGhpcy5sb2NhbGV9YH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLycpfWA7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICAgIGlmIChfdXRpbHMuU1QpIHtcbiAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBzaGFsbG93ID1mYWxzZSAgfSA9IG9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7XG4gICAgICAgICAgICBzaGFsbG93XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICBhcyA9IGFkZEJhc2VQYXRoKGFkZExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSkpO1xuICAgICAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzO1xuICAgICAgICBsZXQgbG9jYWxlQ2hhbmdlID0gcHJldkxvY2FsZSAhPT0gdGhpcy5sb2NhbGU7XG4gICAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbiAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBcztcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcyk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGFyc2VkID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgIGxldCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gcGFyc2VkO1xuICAgICAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgICAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgICAgICBsZXQgcGFnZXMsIHJld3JpdGVzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAgICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAgICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgICAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzO1xuICAgICAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAgICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICAgICAgcGF0aG5hbWUxID0gcGF0aG5hbWUxID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZTEpKSA6IHBhdGhuYW1lMTtcbiAgICAgICAgaWYgKHNob3VsZFJlc29sdmVIcmVmICYmIHBhdGhuYW1lMSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IHRydWU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9ICgwLCBfcmVzb2x2ZVJld3JpdGVzKS5kZWZhdWx0KGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsIHRoaXMubG9jYWxlKSksIHBhZ2VzLCByZXdyaXRlcywgcXVlcnkxLCAocCk9PnJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpXG4gICAgICAgICAgICAgICAgLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGg7XG4gICAgICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lMSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUxKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUxLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUxKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lMSA9IHBhcnNlZC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUxKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMSk7XG4gICAgICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKTtcbiAgICAgICAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9ICgwLCBfcm91dGVNYXRjaGVyKS5nZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSk7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZSA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5MSkgOiB7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcigocGFyYW0pPT4hcXVlcnkxW3BhcmFtXVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlID8gYEludGVycG9sYXRpbmcgaHJlZmAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICsgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKChzaG91bGRJbnRlcnBvbGF0ZSA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArIGBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7c2hvdWxkSW50ZXJwb2xhdGUgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCcgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgIH0sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkxLCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMpXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnkxLCByb3V0ZU1hdGNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgcmVmLCByZWYxO1xuICAgICAgICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgbGV0IHsgZXJyb3IgLCBwcm9wcyAsIF9fTl9TU0cgLCBfX05fU1NQICB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICAgICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMucGFnZVByb3BzICYmIHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSBwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUO1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgICAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZi5wYXRobmFtZSwgcGFnZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCAsIGFzOiBuZXdBcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCBkZXN0aW5hdGlvbiwgZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhcHJvcHMuX19OX1BSRVZJRVc7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0JztcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhub3RGb3VuZFJvdXRlLCBub3RGb3VuZFJvdXRlLCBxdWVyeTEsIGFzLCByZXNvbHZlZEFzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFsbG93OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFwcENvbXAgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O1xuICAgICAgICAgICAgICAgIHdpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQgPSBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmICFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLl9oICYmIHBhdGhuYW1lMSA9PT0gJy9fZXJyb3InICYmICgocmVmID0gc2VsZi5fX05FWFRfREFUQV9fLnByb3BzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChyZWYxID0gcmVmLnBhZ2VQcm9wcykgPT09IG51bGwgfHwgcmVmMSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmMS5zdGF0dXNDb2RlKSA9PT0gNTAwICYmIChwcm9wcyA9PT0gbnVsbCB8fCBwcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvcHMucGFnZVByb3BzKSkge1xuICAgICAgICAgICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAgICAgICAgIC8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICBwcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZSA9IDUwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgICAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGU7XG4gICAgICAgICAgICB2YXIgX3Njcm9sbDtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZFNjcm9sbCA9IChfc2Nyb2xsID0gb3B0aW9ucy5zY3JvbGwpICE9PSBudWxsICYmIF9zY3JvbGwgIT09IHZvaWQgMCA/IF9zY3JvbGwgOiAhaXNWYWxpZFNoYWxsb3dSb3V0ZTtcbiAgICAgICAgICAgIGNvbnN0IHJlc2V0U2Nyb2xsID0gc2hvdWxkU2Nyb2xsID8ge1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgfSA6IG51bGw7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUxLCBxdWVyeTEsIGNsZWFuZWRBcywgcm91dGVJbmZvLCBmb3JjZWRTY3JvbGwgIT09IG51bGwgJiYgZm9yY2VkU2Nyb2xsICE9PSB2b2lkIDAgPyBmb3JjZWRTY3JvbGwgOiByZXNldFNjcm9sbCkuY2F0Y2goKGUpPT57XG4gICAgICAgICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGU7XG4gICAgICAgICAgICAgICAgZWxzZSB0aHJvdyBlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycjEpIHtcbiAgICAgICAgICAgIGlmIChlcnIxLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycjE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgKDAsIF91dGlscykuZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICAgICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93O1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDFcbiAgICAgICAgICAgIH0sIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICAgICAnJywgYXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcywgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKDAsIF9yb3V0ZUxvYWRlcikuaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IENvbXBvbmVudDE7XG4gICAgICAgICAgICBsZXQgc3R5bGVTaGVldHM7XG4gICAgICAgICAgICBsZXQgcHJvcHM7XG4gICAgICAgICAgICBpZiAodHlwZW9mIENvbXBvbmVudDEgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBzdHlsZVNoZWV0cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAoeyBwYWdlOiBDb21wb25lbnQxICwgc3R5bGVTaGVldHMgIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0ge1xuICAgICAgICAgICAgICAgIHByb3BzLFxuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBnZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJlc29sdmVkQXMsIHJvdXRlUHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm8gPyB1bmRlZmluZWQgOiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mbyA/IGNhY2hlZFJvdXRlSW5mbyA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcyk9Pih7XG4gICAgICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQ29tcG9uZW50MSAsIF9fTl9TU0cgLCBfX05fU1NQICB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSAgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50MSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkYXRhSHJlZjtcbiAgICAgICAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZigoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVxuICAgICAgICAgICAgICAgIH0pLCByZXNvbHZlZEFzLCBfX05fU1NHLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGEoKCk9Pl9fTl9TU0cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSA6IF9fTl9TU1AgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudDEsIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZXM6IHRoaXMubG9jYWxlcyxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdExvY2FsZTogdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICB9IGNhdGNoIChlcnIyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIGRhdGEsIHJlc2V0U2Nyb2xsKSB7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpO1xuICAgIH1cbiAgICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovIGJlZm9yZVBvcFN0YXRlKGNiKSB7XG4gICAgICAgIHRoaXMuX2JwcyA9IGNiO1xuICAgIH1cbiAgICBvbmx5QUhhc2hDaGFuZ2UoYXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7XG4gICAgICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgICAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoO1xuICAgIH1cbiAgICBzY3JvbGxUb0hhc2goYXMpIHtcbiAgICAgICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgICAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgICAgIGlmIChpZEVsKSB7XG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXJsSXNOZXcoYXNQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqLyBhc3luYyBwcmVmZXRjaCh1cmwsIGFzUGF0aCA9IHVybCwgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMiAgfSA9IHBhcnNlZDtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aG5hbWUyLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIGxldCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICAgICAgYXNQYXRoID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBsZXQgcmV3cml0ZXM7XG4gICAgICAgICAgICAoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyAgfSA9IGF3YWl0ICgwLCBfcm91dGVMb2FkZXIpLmdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSk7XG4gICAgICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9ICgwLCBfcmVzb2x2ZVJld3JpdGVzKS5kZWZhdWx0KGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsIHRoaXMubG9jYWxlKSksIHBhZ2VzLCByZXdyaXRlcywgcGFyc2VkLnF1ZXJ5LCAocCk9PnJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpXG4gICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSwgcGFnZXMpO1xuICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUyKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTIpO1xuICAgICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbigoaXNTc2cpPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzU3NnID8gdGhpcy5fZ2V0U3RhdGljRGF0YSh0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYodXJsLCByZXNvbHZlZEFzLCB0cnVlLCB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5sb2NhbGUgOiB0aGlzLmxvY2FsZSkpIDogZmFsc2U7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSwgXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSkge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IHRoaXMuY2xjID0gKCk9PntcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtcbiAgICAgICAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZXN1bHQ7XG4gICAgfVxuICAgIF9nZXREYXRhKGZuKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCk9PntcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xjID0gY2FuY2VsO1xuICAgICAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyMiA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO1xuICAgICAgICAgICAgICAgIGVycjIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnIyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZikge1xuICAgICAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5ICB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiAhdGhpcy5pc1ByZXZpZXcgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZikge1xuICAgICAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5ICB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV0gPSBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KS5jYXRjaCgoZXJyMik9PntcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgICAgICB0aHJvdyBlcnIyO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAxICB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddO1xuICAgICAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAxKTtcbiAgICAgICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlO1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscykubG9hZEdldEluaXRpYWxQcm9wcyhBcHAxLCB7XG4gICAgICAgICAgICBBcHBUcmVlLFxuICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgICAgICAgY3R4XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhYm9ydENvbXBvbmVudExvYWQoYXMsIHJvdXRlUHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2xjKCk7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50LCByZXNldFNjcm9sbCk7XG4gICAgfVxufVxuUm91dGVyLmV2ZW50cyA9ICgwLCBfbWl0dCkuZGVmYXVsdCgpO1xuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCB7IEludm9pY2VzQ29udGV4dCB9IGZyb20gJ2NvbnRleHQvSW52b2ljZXNDb250ZXh0JztcclxuXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0AvY29tcG9uZW50cy9CdXR0b24vQnV0dG9uJztcclxuaW1wb3J0IHsgRHJhd2VyIH0gZnJvbSAnQC9jb21wb25lbnRzL0RyYXdlcic7XHJcbmltcG9ydCB7IEVkaXRJbnZvaWNlRm9ybSB9IGZyb20gJ0AvY29tcG9uZW50cy9Gb3JtL0VkaXRJbnZvaWNlRm9ybSc7XHJcbmltcG9ydCB7IERldGFpbHNDYXJkIH0gZnJvbSAnQC9jb21wb25lbnRzL0ludm9pY2VEZXRhaWxzL0RldGFpbHNDYXJkL0RldGFpbHNDYXJkJztcclxuaW1wb3J0IHsgUGFnZUxpbmsgfSBmcm9tICdAL2NvbXBvbmVudHMvUGFnZUxpbmsvUGFnZUxpbmsnO1xyXG5pbXBvcnQgeyBTdGF0dXNCYWRnZSB9IGZyb20gJ0AvY29tcG9uZW50cy9TdGF0dXNCYWRnZSc7XHJcbmltcG9ydCBQYWdlTGF5b3V0IGZyb20gJ0AvbGF5b3V0cy9QYWdlTGF5b3V0JztcclxuaW1wb3J0IHsgYm9keVRleHRTdHlsZSB9IGZyb20gJ0Avc3R5bGVzL3R5cG9ncmFwaHknO1xyXG5pbXBvcnQgeyBJbnZvaWNlIH0gZnJvbSAnQC90eXBlcy9pbmRleCc7XHJcblxyXG5jb25zdCBJbnZvaWNlRGV0YWlsczogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcblx0Y29uc3QgW2lzRHJhd2VyT3Blbiwgc2V0RHJhd2VyT3Blbl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHRjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcblx0Y29uc3QgeyBpbnZvaWNlcywgdXBkYXRlSW52b2ljZSB9ID0gdXNlQ29udGV4dChJbnZvaWNlc0NvbnRleHQpO1xyXG5cclxuXHRjb25zdCBzZWxlY3RlZEludm9pY2UgPSBpbnZvaWNlcy5maW5kKChpbnZvaWNlKSA9PiBpbnZvaWNlLmlkID09PSBpZCk7XHJcblxyXG5cdGNvbnN0IG1hcmtJbnZvaWNlUGFpZCA9ICgpID0+IHVwZGF0ZUludm9pY2UoeyAuLi5zZWxlY3RlZEludm9pY2UsIHN0YXR1czogJ1BhaWQnIH0pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PERyYXdlclxyXG5cdFx0XHRcdGlzRHJhd2VyT3Blbj17aXNEcmF3ZXJPcGVufVxyXG5cdFx0XHRcdHNldERyYXdlck9wZW49e3NldERyYXdlck9wZW59XHJcblx0XHRcdFx0YXJpYUxhYmVsPVwiSW52b2ljZSBFZGl0aW5nIEZvcm0gTW9kYWxcIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PEVkaXRJbnZvaWNlRm9ybSBzZXREcmF3ZXJPcGVuPXtzZXREcmF3ZXJPcGVufSBpbnZvaWNlPXtzZWxlY3RlZEludm9pY2V9IC8+XHJcblx0XHRcdDwvRHJhd2VyPlxyXG5cdFx0XHQ8UGFnZUxheW91dD5cclxuXHRcdFx0XHQ8UGFnZUxpbmsgaHJlZj1cIi9cIiBpY29uPVwiYmFja1wiPlxyXG5cdFx0XHRcdFx0R28gYmFja1xyXG5cdFx0XHRcdDwvUGFnZUxpbms+XHJcblx0XHRcdFx0e3NlbGVjdGVkSW52b2ljZSAmJiAoXHJcblx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHQ8SGVhZGVyPlxyXG5cdFx0XHRcdFx0XHRcdDxTdGF0dXNMYWJlbD5TdGF0dXM8L1N0YXR1c0xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxTdHlsZWRTdGF0dXNCYWRnZSBzdGF0dXM9e3NlbGVjdGVkSW52b2ljZS5zdGF0dXN9IC8+XHJcblx0XHRcdFx0XHRcdFx0PEJ1dHRvbkNvbnRhaW5lcj5cclxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIG9uQ2xpY2s9eygpID0+IHNldERyYXdlck9wZW4odHJ1ZSl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRFZGl0XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cIndhcm5pbmdcIj5EZWxldGU8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdHtzZWxlY3RlZEludm9pY2Uuc3RhdHVzICE9PSAnUGFpZCcgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17bWFya0ludm9pY2VQYWlkfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRNYXJrIGFzIFBhaWRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uQ29udGFpbmVyPlxyXG5cdFx0XHRcdFx0XHQ8L0hlYWRlcj5cclxuXHRcdFx0XHRcdFx0PEludm9pY2VEZXRhaWxzQ2FyZCBpbnZvaWNlPXtzZWxlY3RlZEludm9pY2V9IC8+eycgJ31cclxuXHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdFx0PE1vYmlsZUJ1dHRvbnNDb250YWluZXI+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXsoKSA9PiBzZXREcmF3ZXJPcGVuKHRydWUpfT5cclxuXHRcdFx0XHRcdFx0RWRpdFxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJ3YXJuaW5nXCI+RGVsZXRlPC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCI+TWFyayBBcyBQYWlkPC9CdXR0b24+XHJcblx0XHRcdFx0PC9Nb2JpbGVCdXR0b25zQ29udGFpbmVyPlxyXG5cdFx0XHQ8L1BhZ2VMYXlvdXQ+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW52b2ljZURldGFpbHM7XHJcblxyXG4vLyBjb25zdCBTdHlsZWRIZWFkZXIgPSBzdHlsZWQoSGVhZGVyKWBcclxuLy9cclxuLy8gYDtcclxuXHJcbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdHBhZGRpbmc6IDAgMjRweDtcclxuXHRtYXJnaW4tdG9wOiAzMnB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogOTFweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy53aGl0ZX07XHJcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xyXG5cdGJveC1zaGFkb3c6IDBweCAxMHB4IDEwcHggLTEwcHggcmdiYSg3MiwgODQsIDE1OSwgMC4xMDAzOTcpO1xyXG5gO1xyXG5cclxuY29uc3QgU3RhdHVzTGFiZWwgPSBzdHlsZWQucGBcclxuXHQke2JvZHlUZXh0U3R5bGV9O1xyXG5cdGNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy5ncmV5WzVdfTtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZFN0YXR1c0JhZGdlID0gc3R5bGVkKFN0YXR1c0JhZGdlKWBcclxuXHRtYXJnaW4tbGVmdDogYXV0bztcclxuXHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDE2cHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgQnV0dG9uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuXHRkaXNwbGF5OiBub25lO1xyXG5cclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLnRhYmxldEFuZFVwfSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0Z2FwOiA4cHg7XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgSW52b2ljZURldGFpbHNDYXJkID0gc3R5bGVkKERldGFpbHNDYXJkKWBcclxuXHRtYXJnaW4tdG9wOiAxNnB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDE0N3B4O1xyXG5cclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLnRhYmxldEFuZFVwfSB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiByZXZlcnQ7XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgTW9iaWxlQnV0dG9uc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdGJvdHRvbTogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRnYXA6IDhweDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDkxcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMud2hpdGV9O1xyXG5cclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLnRhYmxldEFuZFVwfSB7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxuYDtcclxuIiwiLy8gQ29uc3RhbnRzXHJcbmV4cG9ydCBjb25zdCBCUkVBS1BPSU5UUyA9IHtcclxuXHRwaG9uZTogNTAwLFxyXG5cdHRhYmxldDogNzY4LFxyXG5cdGxhcHRvcDogMTExMCxcclxuXHR4bDogMTQ0MCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB0aGVtZSA9IHtcclxuXHRDT0xPUlM6IHtcclxuXHRcdHByaW1hcnk6IHtcclxuXHRcdFx0MTogJyM3QzVERkEnLFxyXG5cdFx0XHQyOiAnIzkyNzdGRicsXHJcblx0XHRcdDM6ICcjN0U4OEMzJyxcclxuXHRcdH0sXHJcblx0XHRkYXJrOiB7XHJcblx0XHRcdDE6ICcjMEMwRTE2JyxcclxuXHRcdFx0MjogJyMxNDE2MjUnLFxyXG5cdFx0XHQzOiAnIzFFMjEzOScsXHJcblx0XHRcdDQ6ICcjMjUyOTQ1JyxcclxuXHRcdFx0NTogJyMzNzNCNTMnLFxyXG5cdFx0XHQ2OiAnIzQ5NEU2RScsXHJcblx0XHR9LFxyXG5cdFx0Z3JleToge1xyXG5cdFx0XHQxOiAnIzg4OEVCMCcsXHJcblx0XHRcdDI6ICcjREZFM0ZBJyxcclxuXHRcdFx0MzogJyNGOEY4RkInLFxyXG5cdFx0XHQ0OiAnI0Y5RkFGRScsXHJcblx0XHRcdDU6ICcjODU4QkIyJyxcclxuXHRcdFx0NjogJyNGM0YzRjUnLFxyXG5cdFx0XHQ3OiAnIzc3N0Y5OCcsXHJcblx0XHR9LFxyXG5cdFx0c3VjY2Vzczoge1xyXG5cdFx0XHQxOiAnIzMzRDY5RicsXHJcblx0XHRcdDI6ICcjRjNGQ0Y5JyxcclxuXHRcdH0sXHJcblx0XHRjYXV0aW9uOiB7XHJcblx0XHRcdDE6ICcjRkY4RjAwJyxcclxuXHRcdFx0MjogJyNGRkY4RjAnLFxyXG5cdFx0fSxcclxuXHRcdHdhcm5pbmc6IHtcclxuXHRcdFx0MTogJyNFQzU3NTcnLFxyXG5cdFx0XHQyOiAnI0ZGOTc5NycsXHJcblx0XHR9LFxyXG5cdFx0d2hpdGU6ICcjZmZmJyxcclxuXHR9LFxyXG5cdEZPTlRfRkFNSUxZOiB7XHJcblx0XHRoZWFkZXI6IFwiJ1NwYXJ0YW4nLCBzYW5zLXNlcmlmXCIsXHJcblx0XHRib2R5OiBcIidTcGFydGFuJywgc2Fucy1zZXJpZlwiLFxyXG5cdFx0ZXJyb3I6IFwiJ1NwYXJ0YW4nLCBzYW5zLXNlcmlmXCIsXHJcblx0fSxcclxuXHRGT05UX1NJWkVTOiB7XHJcblx0XHRoMTogYCR7MzIgLyAxNn1yZW1gLFxyXG5cdFx0aDI6IGAkezIwIC8gMTZ9cmVtYCxcclxuXHRcdGgzOiBgJHsxNiAvIDE2fXJlbWAsXHJcblx0XHRoNDogYCR7MTIgLyAxNn1yZW1gLFxyXG5cdFx0Ym9keTogYCR7MTIgLyAxNn1yZW1gLFxyXG5cdFx0Ym9keTI6IGAkezExIC8gMTZ9cmVtYCxcclxuXHRcdGZvcm1IMTogYCR7MjQgLyAxNn1yZW1gLFxyXG5cdFx0Zm9ybUl0ZW1MaXN0SDE6IGAkezE4IC8gMTZ9cmVtYCxcclxuXHRcdGZvcm1FcnJvcjogYCR7MTAgLyAxNn1yZW1gLFxyXG5cdH0sXHJcblx0V0VJR0hUUzoge1xyXG5cdFx0bWVkaXVtOiA1MDAsXHJcblx0XHRzZW1pQm9sZDogNjAwLFxyXG5cdFx0Ym9sZDogNzAwLFxyXG5cdH0sXHJcblx0Ly8gVXNpbmcgUkVNIGZvciBicmVha3BvaW50cyB0byBtYWludGFpbiBhIG5pY2VyIFVJXHJcblx0Ly8gIHdoZW4gY2hhbmdpbmcgem9vbSBsZXZlbHNcclxuXHRRVUVSSUVTOiB7XHJcblx0XHRwaG9uZUFuZFVwOiBgKG1pbi13aWR0aDogJHtCUkVBS1BPSU5UUy5waG9uZSAvIDE2fXJlbSlgLFxyXG5cdFx0dGFibGV0QW5kVXA6IGAobWluLXdpZHRoOiAke0JSRUFLUE9JTlRTLnRhYmxldCAvIDE2fXJlbSlgLFxyXG5cdFx0bGFwdG9wQW5kVXA6IGAobWluLXdpZHRoOiAke0JSRUFLUE9JTlRTLmxhcHRvcCAvIDE2fXJlbSlgLFxyXG5cdFx0eGxBbmRVcDogYChtaW4td2lkdGg6ICR7QlJFQUtQT0lOVFMueGwgLyAxNn1yZW0pYCxcclxuXHR9LFxyXG59O1xyXG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG4vLyBCYXNlIFN0eWxlc1xyXG5leHBvcnQgY29uc3QgaGVhZGVyQmFzZVN0eWxlcyA9IGNzc2BcclxuXHRmb250LWZhbWlseTogJHsocCkgPT4gcC50aGVtZS5GT05UX0ZBTUlMWS5oZWFkZXJ9O1xyXG5cdGZvbnQtd2VpZ2h0OiAkeyhwKSA9PiBwLnRoZW1lLldFSUdIVFMuYm9sZH07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgYm9keUJhc2VTdHlsZXMgPSBjc3NgXHJcblx0Zm9udC1mYW1pbHk6ICR7KHApID0+IHAudGhlbWUuRk9OVF9GQU1JTFkuYm9keX07XHJcblx0Zm9udC13ZWlnaHQ6ICR7KHApID0+IHAudGhlbWUuV0VJR0hUUy5tZWRpdW19O1xyXG5gO1xyXG5cclxuLy8gSGVhZGVyc1xyXG5leHBvcnQgY29uc3QgaDFUZXh0U3R5bGUgPSBjc3NgXHJcblx0JHtoZWFkZXJCYXNlU3R5bGVzfVxyXG5cdGZvbnQtc2l6ZTogJHsocCkgPT4gcC50aGVtZS5GT05UX1NJWkVTLmgxfTtcclxuXHRsaW5lLWhlaWdodDogMzZweDtcclxuXHRsZXR0ZXItc3BhY2luZzogLTFweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBoMlRleHRTdHlsZSA9IGNzc2BcclxuXHQke2hlYWRlckJhc2VTdHlsZXN9XHJcblx0Zm9udC1zaXplOiAkeyhwKSA9PiBwLnRoZW1lLkZPTlRfU0laRVMuaDJ9O1xyXG5cdGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cdGxldHRlci1zcGFjaW5nOiAtMC42MjVweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBoM1RleHRTdHlsZSA9IGNzc2BcclxuXHQke2hlYWRlckJhc2VTdHlsZXN9XHJcblx0Zm9udC1zaXplOiAkeyhwKSA9PiBwLnRoZW1lLkZPTlRfU0laRVMuaDN9O1xyXG5cdGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG5cdGxldHRlci1zcGFjaW5nOiAtMC44cHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgaDRUZXh0U3R5bGUgPSBjc3NgXHJcblx0JHtoZWFkZXJCYXNlU3R5bGVzfVxyXG5cdGZvbnQtc2l6ZTogJHsocCkgPT4gcC50aGVtZS5GT05UX1NJWkVTLmg0fTtcclxuXHRsaW5lLWhlaWdodDogMTVweDtcclxuXHRsZXR0ZXItc3BhY2luZzogLTAuMjVweDtcclxuYDtcclxuXHJcbi8vIEJvZHlcclxuZXhwb3J0IGNvbnN0IGJvZHlUZXh0U3R5bGUgPSBjc3NgXHJcblx0JHtib2R5QmFzZVN0eWxlc31cclxuXHRmb250LXNpemU6ICR7KHApID0+IHAudGhlbWUuRk9OVF9TSVpFUy5ib2R5fTtcclxuXHRsaW5lLWhlaWdodDogMTVweDtcclxuXHRsZXR0ZXItc3BhY2luZzogLTAuMjVweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBib2R5MlRleHRTdHlsZSA9IGNzc2BcclxuXHQke2JvZHlCYXNlU3R5bGVzfVxyXG5cdGZvbnQtc2l6ZTogJHsocCkgPT4gcC50aGVtZS5GT05UX1NJWkVTLmJvZHkyfTtcclxuXHRsaW5lLWhlaWdodDogMThweDtcclxuXHRsZXR0ZXItc3BhY2luZzogLTAuMjI5MTY3cHg7XHJcbmA7XHJcblxyXG4vLyBJbnZvaWNlIERldGFpbHNcclxuXHJcbmV4cG9ydCBjb25zdCBkZXRhaWxWYWx1ZVRleHRTdHlsZSA9IGNzc2BcclxuXHQke2hlYWRlckJhc2VTdHlsZXN9O1xyXG5cdGZvbnQtc2l6ZTogJHsxNSAvIDE2fXJlbTtcclxuXHRsaW5lLWhlaWdodDogMjBweDtcclxuXHRsZXR0ZXItc3BhY2luZzogLTAuMzEyNXB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRhYmxlRm9vdGVyVG90YWxUZXh0U3R5bGUgPSBjc3NgXHJcblx0JHtoZWFkZXJCYXNlU3R5bGVzfTtcclxuXHRmb250LXNpemU6ICR7MjAgLyAxNn1yZW07XHJcblx0bGluZS1oZWlnaHQ6IDMycHg7XHJcblx0bGV0dGVyLXNwYWNpbmc6IC0wLjQxNjY2N3B4O1xyXG5cclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLnRhYmxldEFuZFVwfSB7XHJcblx0XHRmb250LXNpemU6ICR7MjQgLyAxNn1yZW07XHJcblx0XHRsaW5lLWhlaWdodDogMzJweDtcclxuXHRcdGxldHRlci1zcGFjaW5nOiAtMC41cHg7XHJcblx0fVxyXG5gO1xyXG5cclxuLy8gRm9ybVxyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1IZWFkZXJUZXh0U3R5bGUgPSBjc3NgXHJcblx0JHtoZWFkZXJCYXNlU3R5bGVzfTtcclxuXHRmb250LXNpemU6ICR7KHApID0+IHAudGhlbWUuRk9OVF9TSVpFUy5mb3JtSDF9O1xyXG5cdGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG5cdGxldHRlci1zcGFjaW5nOiAtMC41cHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgaXRlbWxpc3RIZWFkZXJUZXh0U3R5bGUgPSBjc3NgXHJcblx0JHtoZWFkZXJCYXNlU3R5bGVzfTtcclxuXHRmb250LXNpemU6ICR7KHApID0+IHAudGhlbWUuRk9OVF9TSVpFUy5mb3JtSXRlbUxpc3RIMX07XHJcblx0bGluZS1oZWlnaHQ6IDMycHg7XHJcblx0bGV0dGVyLXNwYWNpbmc6IC0wLjM3NXB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVycm9yTWVzc2FnZVRleHRTdHlsZSA9IGNzc2BcclxuXHRmb250LWZhbWlseTogJHsocCkgPT4gcC50aGVtZS5GT05UX0ZBTUlMWS5lcnJvcn07XHJcblx0Zm9udC1zaXplOiAkeyhwKSA9PiBwLnRoZW1lLkZPTlRfU0laRVMuZm9ybUVycm9yfTtcclxuXHRmb250LXdlaWdodDogJHsocCkgPT4gcC50aGVtZS5XRUlHSFRTLnNlbWlCb2xkfTtcclxuXHRsaW5lLWhlaWdodDogMTVweDtcclxuXHRsZXR0ZXItc3BhY2luZzogLTAuMjA4MzMzcHg7XHJcbmA7XHJcbiIsImV4cG9ydCBjb25zdCBjYWxjdWxhdGVJdGVtVG90YWwgPSAocXVhbnRpdHkgPSAwLCBwcmljZSA9IDApID0+IHtcclxuXHRyZXR1cm4gKChxdWFudGl0eSAqIHByaWNlKSAvIDEwMCkudG9GaXhlZCgyKTtcclxufTtcclxuIiwiaW1wb3J0IHsgSW52b2ljZUl0ZW0gfSBmcm9tICcuLi90eXBlcy9pbmRleCc7XHJcblxyXG5leHBvcnQgY29uc3QgY2FsY3VsYXRlSW52b2ljZVRvdGFsID0gKGl0ZW1zOiBJbnZvaWNlSXRlbVtdKSA9PiB7XHJcblx0Y29uc3QgdG90YWxJbkNlbnRzID0gaXRlbXMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBwcmV2ICsgY3Vyci5wcmljZSAqIGN1cnIucXVhbnRpdHksIDApO1xyXG5cdHJldHVybiAodG90YWxJbkNlbnRzIC8gMTAwKS50b0ZpeGVkKDIpO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9sb2dvLmE4NjUxZDk3NWUzNTdmM2ZmMDAzMTYzMTcxN2Y3YjE3LnN2Z1wiLFwiaGVpZ2h0XCI6NzIsXCJ3aWR0aFwiOjcyfTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ljb25zL2ljb24tYXJyb3ctbGVmdC5lOWJiNzYzNzZiODg0MDQyZmVjZjFhYmJhMTQxOTkzNC5zdmdcIixcImhlaWdodFwiOjEwLFwid2lkdGhcIjo3fTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ljb25zL2ljb24tYXJyb3ctcmlnaHQuOWUxOWJlNjQwMDE1MDRhMTdjMTQ2ZWIzNzhjNTU2YTIuc3ZnXCIsXCJoZWlnaHRcIjoxMCxcIndpZHRoXCI6N307IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pY29ucy9pY29uLWNhbGVuZGFyLjcxYzk5YWI1ZGI5NGY4Y2JiN2I3MGNlNDBhZmRkZmI1LnN2Z1wiLFwiaGVpZ2h0XCI6MTYsXCJ3aWR0aFwiOjE2fTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ljb25zL2ljb24tbW9vbi43MTAxYzU3ZGM4ZWNjODVlMDQ1ZTkxNzk2MjVlMmNiMi5zdmdcIixcImhlaWdodFwiOjIwLFwid2lkdGhcIjoyMH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pY29ucy9pY29uLXBsdXMuMjc4YzA0OGEzOGRlMjY2ZDBlNWJkYmI4YmNhYWYzOTUuc3ZnXCIsXCJoZWlnaHRcIjoxMSxcIndpZHRoXCI6MTF9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaWNvbnMvaWNvbi1zdW4uZjNkYTUyZDEzYTM1YWQ4YmM3NTFkZjJlODUwOTNmOTguc3ZnXCIsXCJoZWlnaHRcIjoyMCxcIndpZHRoXCI6MjB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaWNvbnMvaWNvbi11c2VyLjlkM2FiNzM5OTc2MDZjMjdhNTJiMWUzZjgwYzI0ZmM0LnN2Z1wiLFwiaGVpZ2h0XCI6MjAsXCJ3aWR0aFwiOjIwfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGhvb2tmb3JtL3Jlc29sdmVycy95dXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlYWNoL2RpYWxvZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVhY2gvdmlzdWFsbHktaGlkZGVuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdG8tYmFzZS02NC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jdXJyZW5jeS1pbnB1dC1maWVsZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kYXRlcGlja2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWhvb2stZm9ybVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwieXVwXCIpOyIsIi8qIChpZ25vcmVkKSAqLyJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0Iiwic3R5bGVkIiwiaWNvblBsdXNTcmMiLCJ0aGVtZSIsImg0VGV4dFN0eWxlIiwiY29sb3JWYXJpYW50cyIsInByaW1hcnkiLCJiYWNrZ3JvdW5kIiwiQ09MT1JTIiwiYmFja2dyb3VuZEhvdmVyIiwidGV4dCIsIndoaXRlIiwic2Vjb25kYXJ5IiwiZ3JleSIsInRlcnRpYXJ5IiwiZGFyayIsIndhcm5pbmciLCJCdXR0b24iLCJjaGlsZHJlbiIsImljb24iLCJvbkNsaWNrIiwidmFyaWFudCIsImNsYXNzTmFtZSIsInR5cGUiLCJCdXR0b25CYXNlIiwiYnV0dG9uIiwicCIsIlFVRVJJRVMiLCJ0YWJsZXRBbmRVcCIsIlRleHRCdXR0b24iLCJJY29uQnV0dG9uIiwiSWNvbldyYXBwZXIiLCJkaXYiLCJEaWFsb2dDb250ZW50IiwiRGlhbG9nT3ZlcmxheSIsIkRyYXdlciIsImlzRHJhd2VyT3BlbiIsInNldERyYXdlck9wZW4iLCJhcmlhTGFiZWwiLCJTdHlsZWREaWFsb2dDb250ZW50IiwibGFwdG9wQW5kVXAiLCJ5dXBSZXNvbHZlciIsInVzZUNvbnRleHQiLCJGb3JtUHJvdmlkZXIiLCJ1c2VGaWVsZEFycmF5IiwidXNlRm9ybSIsImluaXRhbFZhbHVlcyIsImZvcm1TY2hlbWEiLCJJbnZvaWNlc0NvbnRleHQiLCJFcnJvciIsIkRhdGVGaWVsZCIsIkZvcm1GaWVsZCIsIkl0ZW1GaWVsZCIsIkZvcm1TZWN0aW9uIiwiZm9ybUhlYWRlclRleHRTdHlsZSIsIml0ZW1saXN0SGVhZGVyVGV4dFN0eWxlIiwiRWRpdEludm9pY2VGb3JtIiwiaW52b2ljZSIsImFkZEludm9pY2UiLCJ1cGRhdGVJbnZvaWNlIiwibWV0aG9kcyIsImRlZmF1bHRWYWx1ZXMiLCJyZXNvbHZlciIsIm1vZGUiLCJmaWVsZHMiLCJhcHBlbmQiLCJyZW1vdmUiLCJjb250cm9sIiwibmFtZSIsInN1Ym1pdEZvcm1EYXRhIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUFkZEludm9pY2UiLCJnZXRWYWx1ZXMiLCJoYW5kbGVVcGRhdGVJbnZvaWNlIiwiZm9ybVN0YXRlIiwiaXNWYWxpZCIsImlkIiwibWluV2lkdGgiLCJmbGV4IiwiZXJyb3JzIiwiaW52b2ljZV9pdGVtcyIsIm1lc3NhZ2UiLCJtYXAiLCJpdGVtIiwiaXRlbUluZGV4IiwicXVhbnRpdHkiLCJwcmljZSIsIkZvcm1IZWFkZXIiLCJoMiIsIlN0eWxlZEZvcm0iLCJmb3JtIiwiSW5uZXJXcmFwcGVyIiwiUm93IiwiSXRlbXNMaXN0SGVhZGVyV3JhcHBlciIsIkl0ZW1MaXN0SGVhZGVyIiwiaDQiLCJJdGVtc0ZpZWxkTGlzdCIsIkZvcm1CdXR0b25zQ29udGFpbmVyIiwiQWRkSXRlbUJ1dHRvbiIsIlNhdmVEcmFmdEJ1dHRvbiIsImVycm9yTWVzc2FnZVRleHRTdHlsZSIsIldyYXBwZXIiLCJpY29uQ2hldnJvbkxlZnRTcmMiLCJpY29uQ2hldnJvblJpZ2h0U3JjIiwiQ2FsZW5kYXJIZWFkZXIiLCJtb250aERhdGUiLCJkZWNyZWFzZU1vbnRoIiwiaW5jcmVhc2VNb250aCIsInRvTG9jYWxlU3RyaW5nIiwibW9udGgiLCJ5ZWFyIiwiSGVhZGVyIiwiTW9udGgiLCJzcGFuIiwiSGVhZGVyQnV0dG9uIiwiZm9yd2FyZFJlZiIsImljb25DYWxlbmRhclNyYyIsImJvZHlUZXh0U3R5bGUiLCJDYWxlbmRhcklucHV0IiwicmVmIiwibGFiZWwiLCJzdHlsZSIsImVycm9yIiwiaGFzRXJyb3IiLCJwcm9wcyIsIkN1c3RvbUlucHV0V3JhcHBlciIsIklucHV0SGVhZGVyIiwiTGFiZWwiLCJJbnB1dFdyYXBwZXIiLCJDdXN0b21JbnB1dCIsImlucHV0IiwiSW5wdXRJY29uIiwiUmVhY3REYXRlUGlja2VyIiwiQ29udHJvbGxlciIsInVzZUZvcm1Db250ZXh0IiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJmaWVsZCIsImZpZWxkU3RhdGUiLCJvbkNoYW5nZSIsInRvRGF0ZVN0cmluZyIsInZhbHVlIiwiaW52YWxpZCIsIkRhdGVQaWNrZXJTdHlsZXMiLCJ1c2VDb250cm9sbGVyIiwiSW5wdXQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImZvcm1hdFZhbHVlIiwidXNlV2F0Y2giLCJQcmljZUZpZWxkIiwiaWR4IiwidG90YWwiLCJzZXRUb3RhbCIsIndhdGNoZWRRdWFudGl0eUFuZFByaWNlIiwiaW52b2ljZUl0ZW0iLCJpc05hTiIsImZvcm1hdHRlZFRvdGFsIiwidG9GaXhlZCIsInRvU3RyaW5nIiwiZ3JvdXBTZXBhcmF0b3IiLCJkZWNpbWFsU2NhbGUiLCJkZWNpbWFsU2VwYXJhdG9yIiwicHJlZml4IiwiZmllbGRzZXQiLCJJdGVtTmFtZSIsIlF1YW50aXR5IiwiVG90YWxXcmFwcGVyIiwiVG90YWxQcmljZSIsIkRlbGV0ZUJ1dHRvbiIsIkN1cnJlbmN5SW5wdXQiLCJmb3JtUHJpY2VWYWx1ZSIsInNldFByaWNlIiwicGFyc2VGbG9hdCIsImxvY2FsZSIsImN1cnJlbmN5IiwidW5kZWZpbmVkIiwiTWF0aCIsInJvdW5kIiwiUHJpY2UiLCJoMyIsImJvZHkyVGV4dFN0eWxlIiwidGFibGVGb290ZXJUb3RhbFRleHRTdHlsZSIsImNhbGN1bGF0ZUl0ZW1Ub3RhbCIsImNhbGN1bGF0ZUludm9pY2VUb3RhbCIsIkRlc2t0b3BUYWJsZSIsIml0ZW1zIiwibGVuZ3RoIiwiVGFibGUiLCJ0YWJsZSIsIkJvZHkiLCJ0Ym9keSIsIkl0ZW1OYW1lQ29sdW1uIiwidGgiLCJRdWFudGl0eUNvbHVtbiIsIlByaWNlQ29sdW1uIiwiVG90YWxDb2x1bW4iLCJOYW1lIiwidGQiLCJUb3RhbCIsIkZvb3RlciIsInRmb290IiwiVG90YWxMYWJlbCIsIkludm9pY2VUb3RhbCIsImRldGFpbFZhbHVlVGV4dFN0eWxlIiwiRGV0YWlsRmllbGQiLCJWYWx1ZSIsIkNoaWxkcmVuV3JhcHBlciIsIk1vYmlsZUl0ZW1zVGFibGUiLCJ1c2VXaW5kb3dTaXplIiwiQlJFQUtQT0lOVFMiLCJEZXRhaWxzQ2FyZCIsInNpemUiLCJkZXNjcmlwdGlvbiIsInVzZXJfc3RyZWV0X2FkZHJlc3MiLCJ1c2VyX2NpdHkiLCJ1c2VyX3Bvc3RfY29kZSIsInVzZXJfY291bnRyeSIsImludm9pY2VfZGF0ZSIsImludm9pY2VfZHVlX2RhdGUiLCJjbGllbnRfZW1haWwiLCJjbGllbnRfbmFtZSIsImNsaWVudF9zdHJlZXRfYWRkcmVzcyIsImNsaWVudF9jaXR5IiwiY2xpZW50X3Bvc3RfY29kZSIsImNsaWVudF9jb3VudHJ5Iiwid2lkdGgiLCJwaG9uZSIsIm1haW4iLCJNZXRhRGF0YSIsIkludm9pY2VJZEFuZE5hbWUiLCJJZCIsImgxIiwiVXNlckFkZHJlc3MiLCJJbnZvaWNlRGF0ZSIsIlBheW1lbnREdWUiLCJDbGllbnRFbWFpbCIsIkJpbGxUbyIsIlN0eWxlZERlc2t0b3BUYWJsZSIsIk1vYmlsZVRhYmxlIiwiVmlzdWFsbHlIaWRkZW4iLCJOYW1lQ29sdW1uIiwiSXRlbVF1YW50aXR5IiwiTGluayIsImljb25DaGV2cm9uU3JjIiwiUGFnZUxpbmsiLCJocmVmIiwiYSIsImljb25QZXJzb25TcmMiLCJQcm9maWxlSW1nIiwicHJvZmlsZUltZ1NyYyIsIkVtcHR5U3RhdGUiLCJUaGVtZVN3aXRjaGVyIiwibG9nb1NyYyIsIlNpZGViYXIiLCJhc2lkZSIsIkxvZ29XcmFwcGVyIiwiU3R5bGVkVGhlbWVTd2l0Y2hlciIsIkRpdmlkZXIiLCJQYWlkIiwiY29sb3IiLCJzdWNjZXNzIiwiUGVuZGluZyIsImNhdXRpb24iLCJEcmFmdCIsIlN0YXR1c0JhZGdlIiwic3RhdHVzIiwiaWNvbk1vb25TcmMiLCJpY29uU3VuU3JjIiwic2V0VGhlbWUiLCJEYXRlIiwic3RyaW5nIiwiYXJyYXkiLCJkYXRlIiwib2JqZWN0IiwibnVtYmVyIiwic2hhcGUiLCJyZXF1aXJlZCIsImVtYWlsIiwid2hlbiIsInNjaGVtYSIsIm1pbiIsIm9mIiwibnVsbGFibGUiLCJ0cmFuc2Zvcm0iLCJ2IiwibyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VSZWR1Y2VyIiwiZGVtb0ludm9pY2VzRGF0YSIsImludm9pY2VSZWR1Y2VyIiwiaW52b2ljZXMiLCJkZWxldGVJbnZvaWNlIiwiSW52b2ljZXNQcm92aWRlciIsInN0YXRlIiwiZGlzcGF0Y2giLCJsb2NhbEludm9pY2VzIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBheWxvYWQiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiYWN0aW9uIiwiQXJyYXkiLCJpc0FycmF5IiwiZmlsdGVyIiwid2luZG93U2l6ZSIsInNldFdpbmRvd1NpemUiLCJoZWlnaHQiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIlBhZ2VMYXlvdXQiLCJDb250YWluZXIiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJkZWZhdWx0IiwiSW1hZ2UxIiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfaGVhZCIsIl90b0Jhc2U2NCIsIl9pbWFnZUNvbmZpZyIsIl91c2VJbnRlcnNlY3Rpb24iLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfX2VzTW9kdWxlIiwiX29iamVjdFNwcmVhZCIsInRhcmdldCIsImkiLCJhcmd1bWVudHMiLCJzb3VyY2UiLCJvd25LZXlzIiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImNvbmNhdCIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImZvckVhY2giLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJleGNsdWRlZCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwic291cmNlU3ltYm9sS2V5cyIsImluZGV4T2YiLCJwcm90b3R5cGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImNhbGwiLCJzb3VyY2VLZXlzIiwibG9hZGVkSW1hZ2VVUkxzIiwiU2V0IiwiZ2xvYmFsIiwiX19ORVhUX0lNQUdFX0lNUE9SVEVEIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJsb2FkZXJzIiwiTWFwIiwiZGVmYXVsdExvYWRlciIsImltZ2l4TG9hZGVyIiwiY2xvdWRpbmFyeUxvYWRlciIsImFrYW1haUxvYWRlciIsImN1c3RvbUxvYWRlciIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJpc1N0YXRpY1JlcXVpcmUiLCJzcmMiLCJpc1N0YXRpY0ltYWdlRGF0YSIsImlzU3RhdGljSW1wb3J0IiwiZGV2aWNlU2l6ZXMiLCJjb25maWdEZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJjb25maWdJbWFnZVNpemVzIiwibG9hZGVyIiwiY29uZmlnTG9hZGVyIiwicGF0aCIsImNvbmZpZ1BhdGgiLCJkb21haW5zIiwiY29uZmlnRG9tYWlucyIsInByb2Nlc3MiLCJlbnYiLCJfX05FWFRfSU1BR0VfT1BUUyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwic29ydCIsImIiLCJnZXRXaWR0aHMiLCJsYXlvdXQiLCJzaXplcyIsInZpZXdwb3J0V2lkdGhSZSIsInBlcmNlbnRTaXplcyIsIm1hdGNoIiwiZXhlYyIsInB1c2giLCJwYXJzZUludCIsInNtYWxsZXN0UmF0aW8iLCJ3aWR0aHMiLCJzIiwia2luZCIsInciLCJmaW5kIiwiZ2VuZXJhdGVJbWdBdHRycyIsInVub3B0aW1pemVkIiwicXVhbGl0eSIsInNyY1NldCIsImxhc3QiLCJqb2luIiwiZ2V0SW50IiwieCIsImRlZmF1bHRJbWFnZUxvYWRlciIsImxvYWRlclByb3BzIiwibG9hZCIsImdldCIsInJvb3QiLCJWQUxJRF9MT0FERVJTIiwiaGFuZGxlTG9hZGluZyIsImltZyIsInBsYWNlaG9sZGVyIiwib25Mb2FkaW5nQ29tcGxldGUiLCJoYW5kbGVMb2FkIiwic3RhcnRzV2l0aCIsImRlY29kZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2F0Y2giLCJ0aGVuIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJhZGQiLCJuYXR1cmFsV2lkdGgiLCJuYXR1cmFsSGVpZ2h0IiwicGFyZW50RWxlbWVudCIsInBhcmVudCIsImdldENvbXB1dGVkU3R5bGUiLCJkaXNwbGF5Iiwid2FybiIsInBvc2l0aW9uIiwiY29tcGxldGUiLCJvbmxvYWQiLCJfcGFyYW0iLCJwcmlvcml0eSIsImxvYWRpbmciLCJsYXp5Qm91bmRhcnkiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImJsdXJEYXRhVVJMIiwiYWxsIiwicmVzdCIsInN0YXRpY1NyYyIsInN0YXRpY0ltYWdlRGF0YSIsIndpZHRoSW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImlzTGF6eSIsImhhcyIsImluY2x1ZGVzIiwiU3RyaW5nIiwiVkFMSURfQkxVUl9FWFQiLCJyYW5kIiwiZmxvb3IiLCJyYW5kb20iLCJzZXRSZWYiLCJpc0ludGVyc2VjdGVkIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsImRpc2FibGVkIiwiaXNWaXNpYmxlIiwid3JhcHBlclN0eWxlIiwic2l6ZXJTdHlsZSIsInNpemVyU3ZnIiwiaW1nU3R5bGUiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJib3hTaXppbmciLCJwYWRkaW5nIiwiYm9yZGVyIiwibWFyZ2luIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJibHVyU3R5bGUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJvdmVyZmxvdyIsInF1b3RpZW50IiwicGFkZGluZ1RvcCIsImltZ0F0dHJpYnV0ZXMiLCJzcmNTdHJpbmciLCJjcmVhdGVFbGVtZW50IiwiYWx0IiwidG9CYXNlNjQiLCJhc3NpZ24iLCJkZWNvZGluZyIsInJlbCIsImFzIiwiaW1hZ2VzcmNzZXQiLCJpbWFnZXNpemVzIiwibm9ybWFsaXplU3JjIiwic2xpY2UiLCJ1cmwiLCJVUkwiLCJwYXJhbXMiLCJzZWFyY2hQYXJhbXMiLCJzZXQiLCJwYXJhbXNTdHJpbmciLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiZXJyIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJfcm91dGVyIiwiX3JvdXRlcjEiLCJwcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJyb3V0ZXIiLCJvcHRpb25zIiwiaXNMb2NhbFVSTCIsImN1ckxvY2FsZSIsImlzTW9kaWZpZWRFdmVudCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwidXNlUmVmIiwiY3VycmVudCIsInVzZVJvdXRlciIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwicmVzb2x2ZUhyZWYiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUmVmIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwidXNlQ2FsbGJhY2siLCJlbCIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJsb2NhbGVEb21haW4iLCJpc0xvY2FsZURvbWFpbiIsImdldERvbWFpbkxvY2FsZSIsImxvY2FsZXMiLCJkb21haW5Mb2NhbGVzIiwiYWRkQmFzZVBhdGgiLCJhZGRMb2NhbGUiLCJkZWZhdWx0TG9jYWxlIiwiY2xvbmVFbGVtZW50IiwiX2RlZmF1bHQiLCJyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwiZW5kc1dpdGgiLCJfX05FWFRfVFJBSUxJTkdfU0xBU0giLCJ0ZXN0IiwicmVxdWVzdElkbGVDYWxsYmFjayIsImNhbmNlbElkbGVDYWxsYmFjayIsInNlbGYiLCJiaW5kIiwiY2IiLCJzdGFydCIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIm1heCIsImNsZWFyVGltZW91dCIsIm1hcmtBc3NldEVycm9yIiwiaXNBc3NldEVycm9yIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJmdXR1cmUiLCJwcm9tIiwiaGFzUHJlZmV0Y2giLCJsaW5rIiwiZG9jdW1lbnQiLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsInJlbExpc3QiLCJzdXBwb3J0cyIsImNhblByZWZldGNoIiwicHJlZmV0Y2hWaWFEb20iLCJyZXMiLCJyZWoiLCJxdWVyeVNlbGVjdG9yIiwiY3Jvc3NPcmlnaW4iLCJfX05FWFRfQ1JPU1NfT1JJR0lOIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhcHBlbmRTY3JpcHQiLCJzY3JpcHQiLCJyZWplY3QiLCJib2R5IiwiZGV2QnVpbGRQcm9taXNlIiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0IiwiZmV0Y2giLCJvayIsImNvbnRlbnQiLCJ3aGVuRW50cnlwb2ludCIsIm9uRW50cnlwb2ludCIsImV4ZWN1dGUiLCJmbiIsImNvbXBvbmVudCIsIm9sZCIsImxvYWRSb3V0ZSIsInJvdXRlRmlsZXNQcm9taXNlIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImZpbmFsbHkiLCJjbiIsIm5hdmlnYXRvciIsImNvbm5lY3Rpb24iLCJzYXZlRGF0YSIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJfd2l0aFJvdXRlciIsImNyZWF0ZVJvdXRlciIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIl9yb3V0ZXJDb250ZXh0Iiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImV2ZW50cyIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImluc3RhbmNlIiwicHJvcGVydHkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJkaXNwbGF5TmFtZSIsImRlbExvY2FsZSIsImhhc0Jhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZUFzIiwiX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2giLCJfcm91dGVMb2FkZXIiLCJfZGVub3JtYWxpemVQYWdlUGF0aCIsIl9ub3JtYWxpemVMb2NhbGVQYXRoIiwiX21pdHQiLCJfdXRpbHMiLCJfaXNEeW5hbWljIiwiX3BhcnNlUmVsYXRpdmVVcmwiLCJfcXVlcnlzdHJpbmciLCJfcmVzb2x2ZVJld3JpdGVzIiwiX3JvdXRlTWF0Y2hlciIsIl9yb3V0ZVJlZ2V4IiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwiX19ORVhUX0kxOE5fU1VQUE9SVCIsImJhc2VQYXRoIiwiX19ORVhUX1JPVVRFUl9CQVNFUEFUSCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJhZGRQYXRoUHJlZml4IiwicGF0aE5vUXVlcnlIYXNoIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsImRldGVjdGVkTG9jYWxlIiwiZGV0ZWN0ZWREb21haW4iLCJodHRwIiwiZG9tYWluIiwicGF0aG5hbWUiLCJwYXRoTG93ZXIiLCJ0b0xvd2VyQ2FzZSIsImxvY2FsZUxvd2VyIiwic3Vic3RyIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsImxvY2F0aW9uT3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIm9yaWdpbiIsImFzUGF0aG5hbWUiLCJxdWVyeSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZ2V0Um91dGVSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImdldFJvdXRlTWF0Y2hlciIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwic2VnbWVudCIsInJlc3VsdCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsImZpbHRlcmVkUXVlcnkiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsInVybFByb3RvTWF0Y2giLCJ1cmxBc1N0cmluZ05vUHJvdG8iLCJ1cmxQYXJ0cyIsInNwbGl0Iiwibm9ybWFsaXplZFVybCIsIm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyIsImFzUGF0aCIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpc0R5bmFtaWNSb3V0ZSIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJoYXNoIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlVXJsQXMiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJwcmVwYXJlZFVybCIsInByZXBhcmVkQXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFnZXMiLCJjbGVhblBhdGhuYW1lIiwiZGVub3JtYWxpemVQYWdlUGF0aCIsInNvbWUiLCJwYWdlIiwicmUiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIl9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04iLCJoaXN0b3J5Iiwic2Vzc2lvblN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwibiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwianNvbiIsImRhdGEiLCJub3RGb3VuZCIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiUm91dGVyIiwiY29uc3RydWN0b3IiLCJwYXRobmFtZTEiLCJxdWVyeTEiLCJhczEiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsIkNvbXBvbmVudCIsIkNvbXBvbmVudDEiLCJlcnIxIiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImlzUHJldmlldyIsInNkYyIsInNkciIsIl9pZHgiLCJvblBvcFN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJfX04iLCJmb3JjZWRTY3JvbGwiLCJwYWdlWE9mZnNldCIsInkiLCJwYWdlWU9mZnNldCIsInBhcnNlUmVsYXRpdmVVcmwiLCJpc1NzciIsIl9icHMiLCJjaGFuZ2UiLCJfc2hhbGxvdyIsImNvbXBvbmVudHMiLCJpbml0aWFsIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJhdXRvRXhwb3J0RHluYW1pYyIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJpc1JlYWR5IiwiZ3NzcCIsImdpcCIsImFwcEdpcCIsImdzcCIsImxvY2F0aW9uIiwic2VhcmNoIiwiX19ORVhUX0hBU19SRVdSSVRFUyIsIl9zaG91bGRSZXNvbHZlSHJlZiIsInNjcm9sbFJlc3RvcmF0aW9uIiwicmVsb2FkIiwiYmFjayIsIm1ldGhvZCIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJwcmV2TG9jYWxlIiwicGFyc2VkQXMiLCJsb2NhbGVQYXRoUmVzdWx0IiwiZGlkTmF2aWdhdGUiLCJhc05vQmFzZVBhdGgiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJfaW5GbGlnaHRSb3V0ZSIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsImxvY2FsZUNoYW5nZSIsIm9ubHlBSGFzaENoYW5nZSIsImVtaXQiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3IiwicmV3cml0ZXNSZXN1bHQiLCJtYXRjaGVkUGFnZSIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicmVmMSIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsIl9zY3JvbGwiLCJzaG91bGRTY3JvbGwiLCJyZXNldFNjcm9sbCIsImRvY3VtZW50RWxlbWVudCIsImxhbmciLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiZXJyMiIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwYXRobmFtZTIiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcDEiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIkludm9pY2VEZXRhaWxzIiwic2VsZWN0ZWRJbnZvaWNlIiwibWFya0ludm9pY2VQYWlkIiwiaGVhZGVyIiwiU3RhdHVzTGFiZWwiLCJTdHlsZWRTdGF0dXNCYWRnZSIsIkJ1dHRvbkNvbnRhaW5lciIsIkludm9pY2VEZXRhaWxzQ2FyZCIsIk1vYmlsZUJ1dHRvbnNDb250YWluZXIiLCJ0YWJsZXQiLCJsYXB0b3AiLCJ4bCIsIkZPTlRfRkFNSUxZIiwiRk9OVF9TSVpFUyIsImJvZHkyIiwiZm9ybUgxIiwiZm9ybUl0ZW1MaXN0SDEiLCJmb3JtRXJyb3IiLCJXRUlHSFRTIiwibWVkaXVtIiwic2VtaUJvbGQiLCJib2xkIiwicGhvbmVBbmRVcCIsInhsQW5kVXAiLCJoZWFkZXJCYXNlU3R5bGVzIiwiYm9keUJhc2VTdHlsZXMiLCJoMVRleHRTdHlsZSIsImgyVGV4dFN0eWxlIiwiaDNUZXh0U3R5bGUiLCJ0b3RhbEluQ2VudHMiLCJyZWR1Y2UiLCJwcmV2IiwiY3VyciJdLCJzb3VyY2VSb290IjoiIn0=