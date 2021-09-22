(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
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

/***/ "./components/Dropdown/Dropdown.tsx":
/*!******************************************!*\
  !*** ./components/Dropdown/Dropdown.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dropdown": () => (/* binding */ Dropdown)
/* harmony export */ });
/* harmony import */ var _reach_listbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reach/listbox */ "@reach/listbox");
/* harmony import */ var _reach_listbox__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reach_listbox__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_visually_hidden__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reach/visually-hidden */ "@reach/visually-hidden");
/* harmony import */ var _reach_visually_hidden__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reach_visually_hidden__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reach_listbox_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @reach/listbox/styles.css */ "./node_modules/@reach/listbox/styles.css");
/* harmony import */ var _reach_listbox_styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_reach_listbox_styles_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_icons_icon_arrow_down_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/icons/icon-arrow-down.svg */ "./public/icons/icon-arrow-down.svg");
/* harmony import */ var _styles_typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/styles/typography */ "./styles/typography.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\scott\\Documents\\GitHub\\Invoice-App-FS\\components\\Dropdown\\Dropdown.tsx";









const Dropdown = ({
  children,
  className,
  setDropdownValue
}) => {
  const labelId = `filter-by-status`;
  const {
    0: localState,
    1: setLocalState
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
    className: className,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((_reach_visually_hidden__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: labelId,
      children: "Filter By Status"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_reach_listbox__WEBPACK_IMPORTED_MODULE_0__.ListboxInput, {
      "aria-labelledby": labelId,
      defaultValue: "",
      value: localState,
      onChange: value => setDropdownValue(value),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(DropdownButton, {
        arrow: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
          id: "chevron",
          src: _public_icons_icon_arrow_down_svg__WEBPACK_IMPORTED_MODULE_6__.default,
          alt: "Arrow facing up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }, undefined),
        children: ["Filter\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("span", {
          id: "extra-text",
          children: "by status"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 18
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(PopOver, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_reach_listbox__WEBPACK_IMPORTED_MODULE_0__.ListboxList, {
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 3
  }, undefined);
};
const PopOver = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_reach_listbox__WEBPACK_IMPORTED_MODULE_0__.ListboxPopover).withConfig({
  displayName: "Dropdown__PopOver",
  componentId: "sc-2ozlv6-0"
})(["&[data-reach-listbox-popover]{margin:0 auto;margin-left:-39px;margin-top:23px;padding:24px;border-radius:8px;box-shadow:0px 10px 20px rgba(72,84,159,0.25);border:none;}"]);
const DropdownButton = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_reach_listbox__WEBPACK_IMPORTED_MODULE_0__.ListboxButton).withConfig({
  displayName: "Dropdown__DropdownButton",
  componentId: "sc-2ozlv6-1"
})(["", ";display:flex;align-items:center;width:fit-content;padding:0;background-color:transparent;border:none;cursor:pointer;span{height:10px;margin-left:12px;}#extra-text{display:none;height:auto;margin:0;}&[data-reach-listbox-button][aria-expanded='true']{#chevron{transition:transform 200ms;transform:rotate(180deg);}}@media ", "{#extra-text{display:revert;}}"], _styles_typography__WEBPACK_IMPORTED_MODULE_7__.h4TextStyle, p => p.theme.QUERIES.tabletAndUp);

/***/ }),

/***/ "./components/Dropdown/DropdownOption.tsx":
/*!************************************************!*\
  !*** ./components/Dropdown/DropdownOption.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownOption": () => (/* binding */ DropdownOption)
/* harmony export */ });
/* harmony import */ var _reach_listbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reach/listbox */ "@reach/listbox");
/* harmony import */ var _reach_listbox__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reach_listbox__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons_icon_check_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/icons/icon-check.svg */ "./public/icons/icon-check.svg");
/* harmony import */ var _styles_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/typography */ "./styles/typography.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\scott\\Documents\\GitHub\\Invoice-App-FS\\components\\Dropdown\\DropdownOption.tsx";







const DropdownOption = ({
  value,
  children,
  className,
  label,
  onClick
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Option, {
    onClick: onClick,
    className: className,
    value: value,
    label: label,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(CheckWrapper, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        src: _icons_icon_check_svg__WEBPACK_IMPORTED_MODULE_4__.default,
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }, undefined), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 3
  }, undefined);
};
const Option = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_reach_listbox__WEBPACK_IMPORTED_MODULE_0__.ListboxOption).withConfig({
  displayName: "DropdownOption__Option",
  componentId: "sc-lhviym-0"
})(["", ";display:flex;align-items:center;color:inherit;padding-left:0;div > img{display:none !important;}&[data-reach-listbox-option][data-current-selected]{div{background-color:", ";}div > img{display:block !important;}}&[data-reach-listbox-option][data-current-nav]{background-color:transparent;color:", ";cursor:pointer;div{border-color:", ";}}"], _styles_typography__WEBPACK_IMPORTED_MODULE_5__.h4TextStyle, p => p.theme.COLORS.primary[1], p => p.theme.COLORS.primary[1], p => p.theme.COLORS.primary[1]);
const CheckWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "DropdownOption__CheckWrapper",
  componentId: "sc-lhviym-1"
})(["display:grid;place-content:center;width:16px;height:16px;margin-right:13px;background-color:", ";border-radius:2px;border:solid 2px transparent;"], p => p.theme.COLORS.grey[2]);

/***/ }),

/***/ "./components/Dropdown/InvoiceFilterDropdown.tsx":
/*!*******************************************************!*\
  !*** ./components/Dropdown/InvoiceFilterDropdown.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceFilterDropdown": () => (/* binding */ InvoiceFilterDropdown)
/* harmony export */ });
/* harmony import */ var _reach_listbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reach/listbox */ "@reach/listbox");
/* harmony import */ var _reach_listbox__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reach_listbox__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_visually_hidden__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reach/visually-hidden */ "@reach/visually-hidden");
/* harmony import */ var _reach_visually_hidden__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reach_visually_hidden__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reach_listbox_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reach/listbox/styles.css */ "./node_modules/@reach/listbox/styles.css");
/* harmony import */ var _reach_listbox_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_reach_listbox_styles_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_icons_icon_arrow_down_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/icons/icon-arrow-down.svg */ "./public/icons/icon-arrow-down.svg");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! . */ "./components/Dropdown/index.ts");
/* harmony import */ var _styles_typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/styles/typography */ "./styles/typography.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\scott\\Documents\\GitHub\\Invoice-App-FS\\components\\Dropdown\\InvoiceFilterDropdown.tsx";









// Need to comeback here and refactor this. Reason I had to compose Dropdown and DropdownOption
// like this was to enable the ability to click on a input that has already been clicked and toggle it off
// This preserves the value being either '', 'Draft', 'Pending', 'Paid' making the dropdown accessible
// currently no way to do this with the native Reach UI controls because it only offers a onChange handler
// and I wanted to keep accessible nature of Reach UI components since they are battle tested as being acessible rather
// then try implement my own version https://reach.tech/listbox
const InvoiceFilterDropdown = ({
  className,
  setDropdownValue,
  filter
}) => {
  const labelId = `filter-by-status`;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
    className: className,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((_reach_visually_hidden__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: labelId,
      children: "Filter By Status"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_reach_listbox__WEBPACK_IMPORTED_MODULE_0__.ListboxInput, {
      "aria-labelledby": labelId,
      defaultValue: "",
      value: filter,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(DropdownButton, {
        arrow: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
          id: "chevron",
          src: _public_icons_icon_arrow_down_svg__WEBPACK_IMPORTED_MODULE_5__.default,
          alt: "Arrow facing up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }, undefined),
        children: ["Filter\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("span", {
          id: "extra-text",
          children: "by status"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 18
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(PopOver, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_reach_listbox__WEBPACK_IMPORTED_MODULE_0__.ListboxList, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_6__.DropdownOption, {
            onClick: () => setDropdownValue(filter === 'Draft' ? '' : 'Draft'),
            value: "Draft",
            label: "Draft",
            children: "Draft"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 7
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_6__.DropdownOption, {
            onClick: () => setDropdownValue(filter === 'Pending' ? '' : 'Pending'),
            value: "Pending",
            label: "Pending",
            children: "Pending"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 7
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_6__.DropdownOption, {
            onClick: () => setDropdownValue(filter === 'Paid' ? '' : 'Paid'),
            value: "Paid",
            label: "Paid",
            children: "Paid"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 3
  }, undefined);
};
const PopOver = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_reach_listbox__WEBPACK_IMPORTED_MODULE_0__.ListboxPopover).withConfig({
  displayName: "InvoiceFilterDropdown__PopOver",
  componentId: "sc-dmhzej-0"
})(["&[data-reach-listbox-popover]{margin:0 auto;margin-left:-39px;margin-top:23px;padding:24px;border-radius:8px;box-shadow:0px 10px 20px rgba(72,84,159,0.25);border:none;}"]);
const DropdownButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_reach_listbox__WEBPACK_IMPORTED_MODULE_0__.ListboxButton).withConfig({
  displayName: "InvoiceFilterDropdown__DropdownButton",
  componentId: "sc-dmhzej-1"
})(["", ";display:flex;align-items:center;width:fit-content;padding:0;background-color:transparent;border:none;cursor:pointer;span{height:10px;margin-left:12px;}#extra-text{display:none;height:auto;margin:0;}&[data-reach-listbox-button][aria-expanded='true']{#chevron{transition:transform 200ms;transform:rotate(180deg);}}@media ", "{#extra-text{display:revert;}}"], _styles_typography__WEBPACK_IMPORTED_MODULE_7__.h4TextStyle, p => p.theme.QUERIES.tabletAndUp);

/***/ }),

/***/ "./components/Dropdown/index.ts":
/*!**************************************!*\
  !*** ./components/Dropdown/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dropdown": () => (/* reexport safe */ _Dropdown__WEBPACK_IMPORTED_MODULE_0__.Dropdown),
/* harmony export */   "DropdownOption": () => (/* reexport safe */ _DropdownOption__WEBPACK_IMPORTED_MODULE_1__.DropdownOption),
/* harmony export */   "InvoiceFilterDropdown": () => (/* reexport safe */ _InvoiceFilterDropdown__WEBPACK_IMPORTED_MODULE_2__.InvoiceFilterDropdown)
/* harmony export */ });
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dropdown */ "./components/Dropdown/Dropdown.tsx");
/* harmony import */ var _DropdownOption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropdownOption */ "./components/Dropdown/DropdownOption.tsx");
/* harmony import */ var _InvoiceFilterDropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InvoiceFilterDropdown */ "./components/Dropdown/InvoiceFilterDropdown.tsx");




/***/ }),

/***/ "./components/EmptyState/EmptyState.tsx":
/*!**********************************************!*\
  !*** ./components/EmptyState/EmptyState.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmptyState": () => (/* binding */ EmptyState)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_illustration_empty_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/illustration-empty.svg */ "./public/assets/illustration-empty.svg");
/* harmony import */ var _styles_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/typography */ "./styles/typography.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\scott\\Documents\\GitHub\\Invoice-App-FS\\components\\EmptyState\\EmptyState.tsx";






const EmptyState = ({
  heading,
  errorMessage,
  className
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Wrapper, {
    className: className,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(EmptyStateImgWrapper, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
        src: _assets_illustration_empty_svg__WEBPACK_IMPORTED_MODULE_3__.default,
        layout: "responsive",
        alt: "A drawing of a person jumping out a letter with a megaphone"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(ErrorHeading, {
      children: heading
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(ErrorMessage, {
      children: errorMessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 3
  }, undefined);
};
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "EmptyState__Wrapper",
  componentId: "sc-1l1nx4w-0"
})(["display:flex;flex-flow:column;align-items:center;"]);
const EmptyStateImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "EmptyState__EmptyStateImgWrapper",
  componentId: "sc-1l1nx4w-1"
})(["position:relative;width:192px;height:159px;@media ", "{width:240px;height:199px;}"], p => p.theme.QUERIES.tabletAndUp);
const ErrorHeading = styled_components__WEBPACK_IMPORTED_MODULE_2___default().h2.withConfig({
  displayName: "EmptyState__ErrorHeading",
  componentId: "sc-1l1nx4w-2"
})(["", ";color:", ";margin-top:40px;@media ", "{margin-top:64px;}"], _styles_typography__WEBPACK_IMPORTED_MODULE_4__.h2TextStyle, p => p.theme.COLORS.dark[1], p => p.theme.QUERIES.tabletAndUp);
const ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_2___default().p.withConfig({
  displayName: "EmptyState__ErrorMessage",
  componentId: "sc-1l1nx4w-3"
})(["max-width:201px;margin-top:24px;font-family:", ";font-weight:", ";font-size:", "rem;line-height:15px;text-align:center;letter-spacing:-0.25px;color:", ";@media ", "{max-width:221px;}"], p => p.theme.FONT_FAMILY.body, p => p.theme.WEIGHTS.medium, 12 / 16, p => p.theme.COLORS.grey[1], p => p.theme.QUERIES.tabletAndUp);

/***/ }),

/***/ "./components/EmptyState/index.ts":
/*!****************************************!*\
  !*** ./components/EmptyState/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmptyState": () => (/* reexport safe */ _EmptyState__WEBPACK_IMPORTED_MODULE_0__.EmptyState)
/* harmony export */ });
/* harmony import */ var _EmptyState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmptyState */ "./components/EmptyState/EmptyState.tsx");


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

/***/ "./components/Home/Header/Header.tsx":
/*!*******************************************!*\
  !*** ./components/Home/Header/Header.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var _components_Dropdown_InvoiceFilterDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Dropdown/InvoiceFilterDropdown */ "./components/Dropdown/InvoiceFilterDropdown.tsx");
/* harmony import */ var _styles_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/typography */ "./styles/typography.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\scott\\Documents\\GitHub\\Invoice-App-FS\\components\\Home\\Header\\Header.tsx";







const getInvoiceCountText = count => {
  if (count <= 0) {
    return 'No invoices';
  } else if (count === 1) {
    return 'There is 1 invoice';
  } else {
    return `There are ${count} invoices.`;
  }
};

const Header = ({
  invoiceCount,
  setFilter,
  filter
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Wrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(HeadingWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Heading, {
        children: "Invoices"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(SubHeading, {
        children: getInvoiceCountText(invoiceCount)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(StyledDropdown, {
      setDropdownValue: setFilter,
      filter: filter
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(NewInvoiceButton, {
      icon: "plus",
      children: ["New\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
        children: "Invoice"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 14
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 3
  }, undefined);
};
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().header.withConfig({
  displayName: "Header__Wrapper",
  componentId: "sc-1th3701-0"
})(["display:flex;gap:18px;@media ", "{align-items:center;gap:40px;}"], p => p.theme.QUERIES.tabletAndUp);
const HeadingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "Header__HeadingWrapper",
  componentId: "sc-1th3701-1"
})(["margin-top:2px;margin-right:auto;"]);
const Heading = styled_components__WEBPACK_IMPORTED_MODULE_1___default().h1.withConfig({
  displayName: "Header__Heading",
  componentId: "sc-1th3701-2"
})(["", ";@media ", "{", ";}"], _styles_typography__WEBPACK_IMPORTED_MODULE_4__.h2TextStyle, p => p.theme.QUERIES.tabletAndUp, _styles_typography__WEBPACK_IMPORTED_MODULE_4__.h1TextStyle);
const SubHeading = styled_components__WEBPACK_IMPORTED_MODULE_1___default().p.withConfig({
  displayName: "Header__SubHeading",
  componentId: "sc-1th3701-3"
})(["", ";margin-top:4px;color:", ";@media ", "{margin-top:8px;}"], _styles_typography__WEBPACK_IMPORTED_MODULE_4__.bodyTextStyle, p => p.theme.COLORS.grey[1], p => p.theme.QUERIES.tabletAndUp);
const StyledDropdown = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_components_Dropdown_InvoiceFilterDropdown__WEBPACK_IMPORTED_MODULE_3__.InvoiceFilterDropdown).withConfig({
  displayName: "Header__StyledDropdown",
  componentId: "sc-1th3701-4"
})(["margin-top:15px;@media ", "{margin:0px;}"], p => p.theme.QUERIES.tabletAndUp);
const NewInvoiceButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__.Button).withConfig({
  displayName: "Header__NewInvoiceButton",
  componentId: "sc-1th3701-5"
})(["span{display:none;}@media ", "{span{display:revert;}}"], p => p.theme.QUERIES.tabletAndUp);

/***/ }),

/***/ "./components/Home/Header/index.ts":
/*!*****************************************!*\
  !*** ./components/Home/Header/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./components/Home/Header/Header.tsx");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _Header__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _Header__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./components/Home/index.ts":
/*!**********************************!*\
  !*** ./components/Home/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_0__.Header)
/* harmony export */ });
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./components/Home/Header/index.ts");


/***/ }),

/***/ "./components/InvoiceCard/InvoiceCard.tsx":
/*!************************************************!*\
  !*** ./components/InvoiceCard/InvoiceCard.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceCard": () => (/* binding */ InvoiceCard)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StatusBadge_StatusBadge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../StatusBadge/StatusBadge */ "./components/StatusBadge/StatusBadge.tsx");
/* harmony import */ var _icons_icon_arrow_right_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/icons/icon-arrow-right.svg */ "./public/icons/icon-arrow-right.svg");
/* harmony import */ var _styles_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/typography */ "./styles/typography.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\scott\\Documents\\GitHub\\Invoice-App-FS\\components\\InvoiceCard\\InvoiceCard.tsx";






const InvoiceCard = ({
  id,
  dueDate,
  clientName,
  total,
  status
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Wrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Id, {
      className: "id",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
        children: "#"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 5
      }, undefined), id]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(DueDate, {
      children: dueDate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(ClientName, {
      children: clientName
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Total, {
      children: `$` + total
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Status, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_StatusBadge_StatusBadge__WEBPACK_IMPORTED_MODULE_2__.StatusBadge, {
        status: status
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(ChevronWrapper, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
        src: _icons_icon_arrow_right_svg__WEBPACK_IMPORTED_MODULE_3__.default,
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 3
  }, undefined);
};
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().li.withConfig({
  displayName: "InvoiceCard__Wrapper",
  componentId: "sc-iwf3v9-0"
})(["display:grid;grid-template-columns:repeat(2,1fr);gap:0px 0px;grid-template-areas:'id client-name' 'due-date .' 'total status';padding:24px;background-color:", ";border-radius:8px;box-shadow:0px 10px 10px -10px rgba(72,84,159,0.100397);@media ", "{display:flex;align-items:center;height:72px;}"], p => p.theme.COLORS.white, p => p.theme.QUERIES.tabletAndUp);
const Id = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "InvoiceCard__Id",
  componentId: "sc-iwf3v9-1"
})(["", ";grid-area:id;span{color:", ";}@media ", "{flex-basis:87px;}@media ", "{flex-basis:103px;}"], _styles_typography__WEBPACK_IMPORTED_MODULE_4__.h4TextStyle, p => p.theme.COLORS.primary[3], p => p.theme.QUERIES.tabletAndUp, p => p.theme.QUERIES.laptopAndUp);
const DueDate = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "InvoiceCard__DueDate",
  componentId: "sc-iwf3v9-2"
})(["", ";grid-area:total;padding-top:24px;padding-bottom:28px;color:", ";@media ", "{padding:0px;flex-basis:143px;}@media ", "{flex-basis:151px;}"], _styles_typography__WEBPACK_IMPORTED_MODULE_4__.bodyTextStyle, p => p.theme.COLORS.grey[1], p => p.theme.QUERIES.tabletAndUp, p => p.theme.QUERIES.laptopAndUp);
const Total = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "InvoiceCard__Total",
  componentId: "sc-iwf3v9-3"
})(["", ";align-self:end;grid-area:total;@media ", "{flex-basis:116px;align-self:revert;text-align:end;}@media ", "{flex-basis:142px;}"], _styles_typography__WEBPACK_IMPORTED_MODULE_4__.h3TextStyle, p => p.theme.QUERIES.tabletAndUp, p => p.theme.QUERIES.laptopAndUp);
const ClientName = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "InvoiceCard__ClientName",
  componentId: "sc-iwf3v9-4"
})(["", ";grid-area:client-name;color:", ";text-align:end;@media ", "{white-space:nowrap;text-align:start;flex-basis:110px;}@media ", "{flex-basis:110px;}"], _styles_typography__WEBPACK_IMPORTED_MODULE_4__.bodyTextStyle, p => p.theme.COLORS.grey[5], p => p.theme.QUERIES.tabletAndUp, p => p.theme.QUERIES.laptopAndUp);
const Status = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "InvoiceCard__Status",
  componentId: "sc-iwf3v9-5"
})(["grid-area:status;justify-self:end;align-self:end;@media ", "{display:flex;align-self:center;justify-content:flex-end;flex-basis:144px;}@media ", "{flex-basis:144px;}"], p => p.theme.QUERIES.tabletAndUp, p => p.theme.QUERIES.laptopAndUp);
const ChevronWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "InvoiceCard__ChevronWrapper",
  componentId: "sc-iwf3v9-6"
})(["display:none;@media ", "{display:flex;justify-content:flex-end;flex-basis:26px;}"], p => p.theme.QUERIES.tabletAndUp);

/***/ }),

/***/ "./components/InvoiceListContainer/InvoiceListContainer.tsx":
/*!******************************************************************!*\
  !*** ./components/InvoiceListContainer/InvoiceListContainer.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceListContainer": () => (/* binding */ InvoiceListContainer)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\scott\\Documents\\GitHub\\Invoice-App-FS\\components\\InvoiceListContainer\\InvoiceListContainer.tsx";


const InvoiceListContainer = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Wrapper, {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "InvoiceListContainer__Wrapper",
  componentId: "sc-u5ydfv-0"
})(["display:flex;flex-flow:column;gap:16px;margin-top:32px;@media ", "{margin-top:56px;}@media ", "{margin-top:65parx;}"], p => p.theme.QUERIES.tabletAndUp, p => p.theme.QUERIES.laptopAndUp);

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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var context_InvoicesContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! context/InvoicesContext */ "./context/InvoicesContext.tsx");
/* harmony import */ var _components_Drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Drawer */ "./components/Drawer/index.ts");
/* harmony import */ var _components_EmptyState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/EmptyState */ "./components/EmptyState/index.ts");
/* harmony import */ var _components_Form_EditInvoiceForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Form/EditInvoiceForm */ "./components/Form/EditInvoiceForm.tsx");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Home */ "./components/Home/index.ts");
/* harmony import */ var _components_InvoiceCard_InvoiceCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/InvoiceCard/InvoiceCard */ "./components/InvoiceCard/InvoiceCard.tsx");
/* harmony import */ var _components_InvoiceListContainer_InvoiceListContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/InvoiceListContainer/InvoiceListContainer */ "./components/InvoiceListContainer/InvoiceListContainer.tsx");
/* harmony import */ var _layouts_PageLayout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/layouts/PageLayout */ "./layouts/PageLayout.tsx");
/* harmony import */ var _utils_calculateTotal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/utils/calculateTotal */ "./utils/calculateTotal.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "C:\\Users\\scott\\Documents\\GitHub\\Invoice-App-FS\\pages\\index.tsx";















const Home = () => {
  var _invoices$length;

  const {
    invoices,
    addInvoice
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(context_InvoicesContext__WEBPACK_IMPORTED_MODULE_3__.InvoicesContext);
  const {
    0: filter,
    1: setFilter
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: filteredInvoices,
    1: setFilteredInvoices
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(invoices);
  const {
    0: isDrawerOpen,
    1: setDrawerOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (filter === 'Draft' && invoices.length > 0) {
      setFilteredInvoices(invoices.filter(invoice => invoice.status === filter));
    } else if (filter === 'Pending') {
      setFilteredInvoices(invoices.filter(invoice => invoice.status === filter));
    } else if (filter === 'Paid') {
      setFilteredInvoices(invoices.filter(invoice => invoice.status === filter));
    } else {
      setFilteredInvoices(invoices);
    }
  }, [filter, invoices]);
  console.log(invoices);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Drawer__WEBPACK_IMPORTED_MODULE_4__.Drawer, {
      isDrawerOpen: isDrawerOpen,
      setDrawerOpen: setDrawerOpen,
      ariaLabel: "Invoice Editing Form Modal",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Form_EditInvoiceForm__WEBPACK_IMPORTED_MODULE_6__.EditInvoiceForm, {
        setDrawerOpen: setDrawerOpen
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_layouts_PageLayout__WEBPACK_IMPORTED_MODULE_10__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Home__WEBPACK_IMPORTED_MODULE_7__.Header, {
        invoiceCount: (_invoices$length = invoices.length) !== null && _invoices$length !== void 0 ? _invoices$length : 0,
        setFilter: setFilter,
        filter: filter
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_InvoiceListContainer_InvoiceListContainer__WEBPACK_IMPORTED_MODULE_9__.InvoiceListContainer, {
        children: filteredInvoices.length > 0 ? filteredInvoices.map(invoice => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
          href: `/invoice/${invoice.id}`,
          passHref: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("a", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_InvoiceCard_InvoiceCard__WEBPACK_IMPORTED_MODULE_8__.InvoiceCard, {
              id: invoice.id,
              dueDate: invoice.invoice_date,
              clientName: invoice.client_name,
              status: invoice.status,
              total: (0,_utils_calculateTotal__WEBPACK_IMPORTED_MODULE_11__.calculateInvoiceTotal)(invoice.invoice_items)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 10
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 9
          }, undefined)
        }, invoice.id, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 8
        }, undefined)) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(StyledEmptyState, {
            heading: "There is nothing here",
            errorMessage: "Create a new invoice by clicking the\r New Invoice button and get started"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 8
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 7
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 4
    }, undefined)]
  }, void 0, true);
};

const StyledEmptyState = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_components_EmptyState__WEBPACK_IMPORTED_MODULE_5__.EmptyState).withConfig({
  displayName: "pages__StyledEmptyState",
  componentId: "sc-1d3y2lj-0"
})(["margin-top:71px;@media ", "{margin-top:154px;}@media ", "{margin-top:76px;}"], p => p.theme.QUERIES.tabletAndUp, p => p.theme.QUERIES.laptopAndUp);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

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

/***/ "./public/assets/illustration-empty.svg":
/*!**********************************************!*\
  !*** ./public/assets/illustration-empty.svg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/assets/illustration-empty.e3122ec28052ac246263daf21c5e9764.svg","height":200,"width":242});

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

/***/ "./public/icons/icon-arrow-down.svg":
/*!******************************************!*\
  !*** ./public/icons/icon-arrow-down.svg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/icons/icon-arrow-down.a6ed7bfffecda935c666fda2939c385c.svg","height":7,"width":11});

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

/***/ "./public/icons/icon-check.svg":
/*!*************************************!*\
  !*** ./public/icons/icon-check.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/icons/icon-check.daa8ab8e6a721cbe585796236895de58.svg","height":8,"width":10});

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

/***/ "./node_modules/@reach/listbox/styles.css":
/*!************************************************!*\
  !*** ./node_modules/@reach/listbox/styles.css ***!
  \************************************************/
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

/***/ "@reach/listbox":
/*!*********************************!*\
  !*** external "@reach/listbox" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reach/listbox");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L0gsaUVBQWUsQ0FBQywrR0FBK0c7Ozs7Ozs7Ozs7Ozs7OztBQ0EvSCxpRUFBZSxDQUFDLCtHQUErRzs7Ozs7Ozs7Ozs7Ozs7O0FDQS9ILGlFQUFlLENBQUMsOEdBQThHOzs7Ozs7Ozs7Ozs7Ozs7QUNBOUgsaUVBQWUsQ0FBQywrR0FBK0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0EvSCwyR0FBK0M7Ozs7Ozs7Ozs7O0FDQS9DLHlHQUE4Qzs7Ozs7Ozs7Ozs7O0FDQTlDOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24udHN4Iiwid2VicGFjazovL215LWFwcC8uL2NvbXBvbmVudHMvRHJhd2VyL0RyYXdlci50c3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vY29tcG9uZW50cy9Ecm9wZG93bi9Ecm9wZG93bi50c3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vY29tcG9uZW50cy9Ecm9wZG93bi9Ecm9wZG93bk9wdGlvbi50c3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vY29tcG9uZW50cy9Ecm9wZG93bi9JbnZvaWNlRmlsdGVyRHJvcGRvd24udHN4Iiwid2VicGFjazovL215LWFwcC8uL2NvbXBvbmVudHMvRHJvcGRvd24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbXktYXBwLy4vY29tcG9uZW50cy9FbXB0eVN0YXRlL0VtcHR5U3RhdGUudHN4Iiwid2VicGFjazovL215LWFwcC8uL2NvbXBvbmVudHMvRm9ybS9FZGl0SW52b2ljZUZvcm0udHN4Iiwid2VicGFjazovL215LWFwcC8uL2NvbXBvbmVudHMvRm9ybS9FcnJvci50c3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vY29tcG9uZW50cy9Gb3JtL0ZpZWxkcy9EYXRlRmllbGQvQ2FsZW5kYXJIZWFkZXIudHN4Iiwid2VicGFjazovL215LWFwcC8uL2NvbXBvbmVudHMvRm9ybS9GaWVsZHMvRGF0ZUZpZWxkL0NhbGVuZGFySW5wdXQudHN4Iiwid2VicGFjazovL215LWFwcC8uL2NvbXBvbmVudHMvRm9ybS9GaWVsZHMvRGF0ZUZpZWxkL0RhdGVGaWVsZC50c3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vY29tcG9uZW50cy9Gb3JtL0ZpZWxkcy9Gb3JtRmllbGQudHN4Iiwid2VicGFjazovL215LWFwcC8uL2NvbXBvbmVudHMvRm9ybS9GaWVsZHMvSXRlbUZpZWxkLnRzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9jb21wb25lbnRzL0Zvcm0vRmllbGRzL1ByaWNlRmllbGQudHN4Iiwid2VicGFjazovL215LWFwcC8uL2NvbXBvbmVudHMvRm9ybS9Gb3JtU2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vY29tcG9uZW50cy9Ib21lL0hlYWRlci9IZWFkZXIudHN4Iiwid2VicGFjazovL215LWFwcC8uL2NvbXBvbmVudHMvSW52b2ljZUNhcmQvSW52b2ljZUNhcmQudHN4Iiwid2VicGFjazovL215LWFwcC8uL2NvbXBvbmVudHMvSW52b2ljZUxpc3RDb250YWluZXIvSW52b2ljZUxpc3RDb250YWluZXIudHN4Iiwid2VicGFjazovL215LWFwcC8uL2NvbXBvbmVudHMvUHJvZmlsZUltZy9Qcm9maWxlSW1nLnRzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9jb21wb25lbnRzL1NpZGViYXIvU2lkZWJhci50c3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vY29tcG9uZW50cy9TdGF0dXNCYWRnZS9TdGF0dXNCYWRnZS50c3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vY29tcG9uZW50cy9UaGVtZVN3aXRjaGVyL1RoZW1lU3dpdGNoZXIudHN4Iiwid2VicGFjazovL215LWFwcC8uL2NvbmZpZy9Gb3JtL0luaXRhbFZhbHVlcy50cyIsIndlYnBhY2s6Ly9teS1hcHAvLi9jb25maWcvRm9ybS9WYWxpZGF0aW9uU2NoZW1hLnRzIiwid2VicGFjazovL215LWFwcC8uL2NvbnRleHQvSW52b2ljZXNDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9jb250ZXh0L2ludm9pY2VSZWR1Y2VyLnRzIiwid2VicGFjazovL215LWFwcC8uL2RhdGEvZGVtby5qcyIsIndlYnBhY2s6Ly9teS1hcHAvLi9sYXlvdXRzL1BhZ2VMYXlvdXQudHN4Iiwid2VicGFjazovL215LWFwcC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2ltYWdlLmpzIiwid2VicGFjazovL215LWFwcC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vbXktYXBwLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzIiwid2VicGFjazovL215LWFwcC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9teS1hcHAvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vbXktYXBwLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovL215LWFwcC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbXktYXBwLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vbXktYXBwLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL215LWFwcC8uL3N0eWxlcy90aGVtZS50cyIsIndlYnBhY2s6Ly9teS1hcHAvLi9zdHlsZXMvdHlwb2dyYXBoeS50cyIsIndlYnBhY2s6Ly9teS1hcHAvLi91dGlscy9jYWxjdWxhdGVUb3RhbC50cyIsIndlYnBhY2s6Ly9teS1hcHAvLi9wdWJsaWMvYXNzZXRzL2lsbHVzdHJhdGlvbi1lbXB0eS5zdmciLCJ3ZWJwYWNrOi8vbXktYXBwLy4vcHVibGljL2Fzc2V0cy9sb2dvLnN2ZyIsIndlYnBhY2s6Ly9teS1hcHAvLi9wdWJsaWMvaWNvbnMvaWNvbi1hcnJvdy1kb3duLnN2ZyIsIndlYnBhY2s6Ly9teS1hcHAvLi9wdWJsaWMvaWNvbnMvaWNvbi1hcnJvdy1sZWZ0LnN2ZyIsIndlYnBhY2s6Ly9teS1hcHAvLi9wdWJsaWMvaWNvbnMvaWNvbi1hcnJvdy1yaWdodC5zdmciLCJ3ZWJwYWNrOi8vbXktYXBwLy4vcHVibGljL2ljb25zL2ljb24tY2FsZW5kYXIuc3ZnIiwid2VicGFjazovL215LWFwcC8uL3B1YmxpYy9pY29ucy9pY29uLWNoZWNrLnN2ZyIsIndlYnBhY2s6Ly9teS1hcHAvLi9wdWJsaWMvaWNvbnMvaWNvbi1tb29uLnN2ZyIsIndlYnBhY2s6Ly9teS1hcHAvLi9wdWJsaWMvaWNvbnMvaWNvbi1wbHVzLnN2ZyIsIndlYnBhY2s6Ly9teS1hcHAvLi9wdWJsaWMvaWNvbnMvaWNvbi1zdW4uc3ZnIiwid2VicGFjazovL215LWFwcC8uL3B1YmxpYy9pY29ucy9pY29uLXVzZXIuc3ZnIiwid2VicGFjazovL215LWFwcC8uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwid2VicGFjazovL215LWFwcC8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vbXktYXBwL2V4dGVybmFsIFwiQGhvb2tmb3JtL3Jlc29sdmVycy95dXBcIiIsIndlYnBhY2s6Ly9teS1hcHAvZXh0ZXJuYWwgXCJAcmVhY2gvZGlhbG9nXCIiLCJ3ZWJwYWNrOi8vbXktYXBwL2V4dGVybmFsIFwiQHJlYWNoL2xpc3Rib3hcIiIsIndlYnBhY2s6Ly9teS1hcHAvZXh0ZXJuYWwgXCJAcmVhY2gvdmlzdWFsbHktaGlkZGVuXCIiLCJ3ZWJwYWNrOi8vbXktYXBwL2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIiIsIndlYnBhY2s6Ly9teS1hcHAvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovL215LWFwcC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQuanNcIiIsIndlYnBhY2s6Ly9teS1hcHAvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiIiwid2VicGFjazovL215LWFwcC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL21pdHQuanNcIiIsIndlYnBhY2s6Ly9teS1hcHAvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL215LWFwcC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vbXktYXBwL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanNcIiIsIndlYnBhY2s6Ly9teS1hcHAvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIiLCJ3ZWJwYWNrOi8vbXktYXBwL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIiLCJ3ZWJwYWNrOi8vbXktYXBwL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanNcIiIsIndlYnBhY2s6Ly9teS1hcHAvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIiIsIndlYnBhY2s6Ly9teS1hcHAvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vbXktYXBwL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly9teS1hcHAvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL215LWFwcC9leHRlcm5hbCBcInJlYWN0LWN1cnJlbmN5LWlucHV0LWZpZWxkXCIiLCJ3ZWJwYWNrOi8vbXktYXBwL2V4dGVybmFsIFwicmVhY3QtZGF0ZXBpY2tlclwiIiwid2VicGFjazovL215LWFwcC9leHRlcm5hbCBcInJlYWN0LWhvb2stZm9ybVwiIiwid2VicGFjazovL215LWFwcC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vbXktYXBwL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vbXktYXBwL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9teS1hcHAvZXh0ZXJuYWwgXCJ5dXBcIiIsIndlYnBhY2s6Ly9teS1hcHAvaWdub3JlZHxDOlxcVXNlcnNcXHNjb3R0XFxEb2N1bWVudHNcXEdpdEh1YlxcSW52b2ljZS1BcHAtRlNcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcc2hhcmVkXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgUmVhY3QsIHsgQnV0dG9uSFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IGljb25QbHVzU3JjIGZyb20gJ3B1YmxpYy9pY29ucy9pY29uLXBsdXMuc3ZnJztcclxuXHJcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnQC9zdHlsZXMvdGhlbWUnO1xyXG5pbXBvcnQgeyBoNFRleHRTdHlsZSB9IGZyb20gJ0Avc3R5bGVzL3R5cG9ncmFwaHknO1xyXG5cclxuZXhwb3J0IHR5cGUgQ29sb3JWYXJpYW50c1R5cGUgPSB7XHJcblx0W2tleTogc3RyaW5nXToge1xyXG5cdFx0W2tleTogc3RyaW5nXTogc3RyaW5nO1xyXG5cdH07XHJcbn07XHJcblxyXG5jb25zdCBjb2xvclZhcmlhbnRzOiBDb2xvclZhcmlhbnRzVHlwZSA9IHtcclxuXHRwcmltYXJ5OiB7XHJcblx0XHRiYWNrZ3JvdW5kOiB0aGVtZS5DT0xPUlMucHJpbWFyeVsxXSxcclxuXHRcdGJhY2tncm91bmRIb3ZlcjogdGhlbWUuQ09MT1JTLnByaW1hcnlbMl0sXHJcblx0XHR0ZXh0OiB0aGVtZS5DT0xPUlMud2hpdGUsXHJcblx0fSxcclxuXHRzZWNvbmRhcnk6IHtcclxuXHRcdGJhY2tncm91bmQ6IHRoZW1lLkNPTE9SUy5ncmV5WzRdLFxyXG5cdFx0YmFja2dyb3VuZEhvdmVyOiB0aGVtZS5DT0xPUlMuZ3JleVsyXSxcclxuXHRcdHRleHQ6IHRoZW1lLkNPTE9SUy5wcmltYXJ5WzNdLFxyXG5cdH0sXHJcblx0dGVydGlhcnk6IHtcclxuXHRcdGJhY2tncm91bmQ6IHRoZW1lLkNPTE9SUy5kYXJrWzVdLFxyXG5cdFx0YmFja2dyb3VuZEhvdmVyOiB0aGVtZS5DT0xPUlMuZGFya1sxXSxcclxuXHRcdHRleHQ6IHRoZW1lLkNPTE9SUy5ncmV5WzFdLFxyXG5cdH0sXHJcblx0d2FybmluZzoge1xyXG5cdFx0YmFja2dyb3VuZDogdGhlbWUuQ09MT1JTLndhcm5pbmdbMV0sXHJcblx0XHRiYWNrZ3JvdW5kSG92ZXI6IHRoZW1lLkNPTE9SUy53YXJuaW5nWzJdLFxyXG5cdFx0dGV4dDogdGhlbWUuQ09MT1JTLndoaXRlLFxyXG5cdH0sXHJcbn07XHJcblxyXG50eXBlIEJ1dHRvblByb3BzID0gQnV0dG9uSFRNTEF0dHJpYnV0ZXM8SFRNTEJ1dHRvbkVsZW1lbnQ+ICYge1xyXG5cdGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcblx0dmFyaWFudD86ICdwcmltYXJ5JyB8ICdzZWNvbmRhcnknIHwgJ3RlcnRpYXJ5JyB8ICd3YXJuaW5nJztcclxuXHRpY29uPzogJ3BsdXMnO1xyXG5cdGNsYXNzTmFtZT86IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b24gPSAoe1xyXG5cdGNoaWxkcmVuLFxyXG5cdGljb24sXHJcblx0b25DbGljayxcclxuXHR2YXJpYW50ID0gJ3ByaW1hcnknLFxyXG5cdGNsYXNzTmFtZSxcclxuXHR0eXBlLFxyXG59OiBCdXR0b25Qcm9wcykgPT4ge1xyXG5cdHJldHVybiBpY29uID8gKFxyXG5cdFx0PEljb25CdXR0b24gdHlwZT17dHlwZX0gb25DbGljaz17b25DbGlja30gdmFyaWFudD17dmFyaWFudH0gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxyXG5cdFx0XHQ8SWNvbldyYXBwZXI+XHJcblx0XHRcdFx0PEltYWdlIHNyYz17aWNvblBsdXNTcmN9IGFsdD1cIlwiIC8+XHJcblx0XHRcdDwvSWNvbldyYXBwZXI+XHJcblx0XHRcdHtjaGlsZHJlbn1cclxuXHRcdDwvSWNvbkJ1dHRvbj5cclxuXHQpIDogKFxyXG5cdFx0PFRleHRCdXR0b24gdHlwZT17dHlwZX0gb25DbGljaz17b25DbGlja30gdmFyaWFudD17dmFyaWFudH0gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxyXG5cdFx0XHR7Y2hpbGRyZW59XHJcblx0XHQ8L1RleHRCdXR0b24+XHJcblx0KTtcclxufTtcclxuXHJcbmNvbnN0IEJ1dHRvbkJhc2UgPSBzdHlsZWQuYnV0dG9uPHsgdmFyaWFudDogc3RyaW5nIH0+YFxyXG5cdCR7aDRUZXh0U3R5bGV9O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcblx0aGVpZ2h0OiA0NHB4O1xyXG5cclxuXHRib3JkZXItcmFkaXVzOiAyNHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICR7KHsgdmFyaWFudCB9KSA9PiBjb2xvclZhcmlhbnRzW3ZhcmlhbnRdLmJhY2tncm91bmR9O1xyXG5cdGNvbG9yOiAkeyh7IHZhcmlhbnQgfSkgPT4gY29sb3JWYXJpYW50c1t2YXJpYW50XS50ZXh0fTtcclxuXHJcblx0Jjpob3ZlcixcclxuXHQ6Zm9jdXMge1xyXG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJHsoeyB2YXJpYW50IH0pID0+IGNvbG9yVmFyaWFudHNbdmFyaWFudF0uYmFja2dyb3VuZEhvdmVyfTtcclxuXHR9XHJcblxyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdGhlaWdodDogNDhweDtcclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBUZXh0QnV0dG9uID0gc3R5bGVkKEJ1dHRvbkJhc2UpYFxyXG5cdHBhZGRpbmc6IDE2cHggMjRweDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IEljb25CdXR0b24gPSBzdHlsZWQoQnV0dG9uQmFzZSlgXHJcblx0cGFkZGluZzogNnB4IDE0cHggNnB4IDZweDtcclxuXHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0cGFkZGluZzogOHB4IDE1cHggOHB4IDhweDtcclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBJY29uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRwbGFjZS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG5cdG1hcmdpbi1yaWdodDogOHB4O1xyXG5cdHdpZHRoOiAzMnB4O1xyXG5cdGhlaWdodDogMzJweDtcclxuXHJcblx0YmFja2dyb3VuZC1jb2xvcjogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMud2hpdGV9O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG5cdH1cclxuYDtcclxuIiwiaW1wb3J0IERpYWxvZ0NvbnRlbnQsIHsgRGlhbG9nT3ZlcmxheSB9IGZyb20gJ0ByZWFjaC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBEaXNwYXRjaCwgRkMsIFNldFN0YXRlQWN0aW9uIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0ICdAcmVhY2gvZGlhbG9nL3N0eWxlcy5jc3MnO1xyXG5cclxuaW50ZXJmYWNlIERyYXdlclByb3BzIHtcclxuXHRpc0RyYXdlck9wZW46IGJvb2xlYW47XHJcblx0c2V0RHJhd2VyT3BlbjogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+O1xyXG5cdGFyaWFMYWJlbDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRHJhd2VyOiBGQzxEcmF3ZXJQcm9wcz4gPSAoeyBjaGlsZHJlbiwgaXNEcmF3ZXJPcGVuLCBzZXREcmF3ZXJPcGVuLCBhcmlhTGFiZWwgfSkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8RGlhbG9nT3ZlcmxheSBpc09wZW49e2lzRHJhd2VyT3Blbn0gb25EaXNtaXNzPXsoKSA9PiBzZXREcmF3ZXJPcGVuKGZhbHNlKX0+XHJcblx0XHRcdDxTdHlsZWREaWFsb2dDb250ZW50XHJcblx0XHRcdFx0aXNPcGVuPXtpc0RyYXdlck9wZW59XHJcblx0XHRcdFx0b25EaXNtaXNzPXsoKSA9PiBzZXREcmF3ZXJPcGVuKGZhbHNlKX1cclxuXHRcdFx0XHRhcmlhLWxhYmVsPXthcmlhTGFiZWx9XHJcblx0XHRcdD5cclxuXHRcdFx0XHR7Y2hpbGRyZW59XHJcblx0XHRcdDwvU3R5bGVkRGlhbG9nQ29udGVudD5cclxuXHRcdDwvRGlhbG9nT3ZlcmxheT5cclxuXHQpO1xyXG59O1xyXG5cclxuY29uc3QgU3R5bGVkRGlhbG9nQ29udGVudCA9IHN0eWxlZChEaWFsb2dDb250ZW50KWBcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMDtcclxuXHRwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcblx0cGFkZGluZy10b3A6IDgwcHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy53aGl0ZX07XHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0d2lkdGg6IDYxNnB4O1xyXG5cdFx0cGFkZGluZy1sZWZ0OiA1NnB4O1xyXG5cdH1cclxuXHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy5sYXB0b3BBbmRVcH0ge1xyXG5cdFx0d2lkdGg6IDcxOXB4O1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAxNTlweDtcclxuXHRcdHBhZGRpbmctdG9wOiAwcHg7XHJcblx0fVxyXG5gO1xyXG4iLCJpbXBvcnQgeyBMaXN0Ym94SW5wdXQsIExpc3Rib3hCdXR0b24sIExpc3Rib3hQb3BvdmVyLCBMaXN0Ym94TGlzdCB9IGZyb20gJ0ByZWFjaC9saXN0Ym94JztcclxuaW1wb3J0IFZpc3VhbGx5SGlkZGVuIGZyb20gJ0ByZWFjaC92aXN1YWxseS1oaWRkZW4nO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IERpc3BhdGNoLCBGQywgU2V0U3RhdGVBY3Rpb24sIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgJ0ByZWFjaC9saXN0Ym94L3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgaWNvbkNoZXZyb25Eb3duU3JjIGZyb20gJy9wdWJsaWMvaWNvbnMvaWNvbi1hcnJvdy1kb3duLnN2Zyc7XHJcblxyXG5pbXBvcnQgeyBQb3NzaWJsZVN0YXR1cyB9IGZyb20gJ0AvY29uZmlnL1Bvc3NpYmxlU3RhdHVzJztcclxuaW1wb3J0IHsgdXNlUHJldmlvdXMgfSBmcm9tICdAL2hvb2tzL3VzZVByZXZpb3VzJztcclxuaW1wb3J0IHsgaDRUZXh0U3R5bGUgfSBmcm9tICdAL3N0eWxlcy90eXBvZ3JhcGh5JztcclxuXHJcbmludGVyZmFjZSBEcm9wRG93blByb3BzIHtcclxuXHRjbGFzc05hbWU/OiBzdHJpbmc7XHJcblx0c2V0RHJvcGRvd25WYWx1ZTogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248YW55Pj47XHJcblx0ZmlsdGVyOiBQb3NzaWJsZVN0YXR1cyB8ICcnO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRHJvcGRvd246IEZDPERyb3BEb3duUHJvcHM+ID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgc2V0RHJvcGRvd25WYWx1ZSB9KSA9PiB7XHJcblx0Y29uc3QgbGFiZWxJZCA9IGBmaWx0ZXItYnktc3RhdHVzYDtcclxuXHRjb25zdCBbbG9jYWxTdGF0ZSwgc2V0TG9jYWxTdGF0ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuXHRcdFx0PFZpc3VhbGx5SGlkZGVuIGlkPXtsYWJlbElkfT5GaWx0ZXIgQnkgU3RhdHVzPC9WaXN1YWxseUhpZGRlbj5cclxuXHRcdFx0PExpc3Rib3hJbnB1dFxyXG5cdFx0XHRcdGFyaWEtbGFiZWxsZWRieT17bGFiZWxJZH1cclxuXHRcdFx0XHRkZWZhdWx0VmFsdWU9XCJcIlxyXG5cdFx0XHRcdHZhbHVlPXtsb2NhbFN0YXRlfVxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldERyb3Bkb3duVmFsdWUodmFsdWUpfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PERyb3Bkb3duQnV0dG9uXHJcblx0XHRcdFx0XHRhcnJvdz17PEltYWdlIGlkPVwiY2hldnJvblwiIHNyYz17aWNvbkNoZXZyb25Eb3duU3JjfSBhbHQ9XCJBcnJvdyBmYWNpbmcgdXBcIiAvPn1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRGaWx0ZXImbmJzcDs8c3BhbiBpZD1cImV4dHJhLXRleHRcIj5ieSBzdGF0dXM8L3NwYW4+XHJcblx0XHRcdFx0PC9Ecm9wZG93bkJ1dHRvbj5cclxuXHRcdFx0XHQ8UG9wT3Zlcj5cclxuXHRcdFx0XHRcdDxMaXN0Ym94TGlzdD57Y2hpbGRyZW59PC9MaXN0Ym94TGlzdD5cclxuXHRcdFx0XHQ8L1BvcE92ZXI+XHJcblx0XHRcdDwvTGlzdGJveElucHV0PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmNvbnN0IFBvcE92ZXIgPSBzdHlsZWQoTGlzdGJveFBvcG92ZXIpYFxyXG5cdCZbZGF0YS1yZWFjaC1saXN0Ym94LXBvcG92ZXJdIHtcclxuXHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IC0zOXB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMjNweDtcclxuXHRcdHBhZGRpbmc6IDI0cHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA4cHg7XHJcblx0XHRib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IHJnYmEoNzIsIDg0LCAxNTksIDAuMjUpO1xyXG5cdFx0Ym9yZGVyOiBub25lO1xyXG5cdH1cclxuYDtcclxuXHJcbmNvbnN0IERyb3Bkb3duQnV0dG9uID0gc3R5bGVkKExpc3Rib3hCdXR0b24pYFxyXG5cdCR7aDRUZXh0U3R5bGV9O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR3aWR0aDogZml0LWNvbnRlbnQ7XHJcblx0cGFkZGluZzogMDtcclxuXHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHJcblx0c3BhbiB7XHJcblx0XHRoZWlnaHQ6IDEwcHg7XHJcblx0XHRtYXJnaW4tbGVmdDogMTJweDtcclxuXHR9XHJcblxyXG5cdCNleHRyYS10ZXh0IHtcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0XHRoZWlnaHQ6IGF1dG87XHJcblx0XHRtYXJnaW46IDA7XHJcblx0fVxyXG5cclxuXHQmW2RhdGEtcmVhY2gtbGlzdGJveC1idXR0b25dW2FyaWEtZXhwYW5kZWQ9J3RydWUnXSB7XHJcblx0XHQjY2hldnJvbiB7XHJcblx0XHRcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcztcclxuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdCNleHRyYS10ZXh0IHtcclxuXHRcdFx0ZGlzcGxheTogcmV2ZXJ0O1xyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuIiwiaW1wb3J0IHsgTGlzdGJveE9wdGlvbiwgdXNlTGlzdGJveENvbnRleHQgfSBmcm9tICdAcmVhY2gvbGlzdGJveCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCBpY29uQ2hlY2ttYXJrU3JjIGZyb20gJ0AvaWNvbnMvaWNvbi1jaGVjay5zdmcnO1xyXG5pbXBvcnQgeyBoNFRleHRTdHlsZSB9IGZyb20gJ0Avc3R5bGVzL3R5cG9ncmFwaHknO1xyXG5cclxuaW50ZXJmYWNlIERyb3Bkb3duT3B0aW9uUHJvcHMge1xyXG5cdHZhbHVlOiBhbnk7XHJcblx0Y2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxuXHRjbGFzc05hbWU/OiBzdHJpbmc7XHJcblx0bGFiZWw6IHN0cmluZztcclxuXHRvbkNsaWNrPzogKHZhbHVlOiBhbnkpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEcm9wZG93bk9wdGlvbjogRkM8RHJvcGRvd25PcHRpb25Qcm9wcz4gPSAoe1xyXG5cdHZhbHVlLFxyXG5cdGNoaWxkcmVuLFxyXG5cdGNsYXNzTmFtZSxcclxuXHRsYWJlbCxcclxuXHRvbkNsaWNrLFxyXG59KSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxPcHRpb24gb25DbGljaz17b25DbGlja30gY2xhc3NOYW1lPXtjbGFzc05hbWV9IHZhbHVlPXt2YWx1ZX0gbGFiZWw9e2xhYmVsfT5cclxuXHRcdFx0PENoZWNrV3JhcHBlcj5cclxuXHRcdFx0XHQ8SW1hZ2Ugc3JjPXtpY29uQ2hlY2ttYXJrU3JjfSBhbHQ9XCJcIiAvPlxyXG5cdFx0XHQ8L0NoZWNrV3JhcHBlcj5cclxuXHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0PC9PcHRpb24+XHJcblx0KTtcclxufTtcclxuXHJcbmNvbnN0IE9wdGlvbiA9IHN0eWxlZChMaXN0Ym94T3B0aW9uKWBcclxuXHQke2g0VGV4dFN0eWxlfTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0Y29sb3I6IGluaGVyaXQ7XHJcblx0cGFkZGluZy1sZWZ0OiAwO1xyXG5cclxuXHRkaXYgPiBpbWcge1xyXG5cdFx0ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHJcblx0JltkYXRhLXJlYWNoLWxpc3Rib3gtb3B0aW9uXVtkYXRhLWN1cnJlbnQtc2VsZWN0ZWRdIHtcclxuXHRcdGRpdiB7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLnByaW1hcnlbMV19O1xyXG5cdFx0fVxyXG5cclxuXHRcdGRpdiA+IGltZyB7XHJcblx0XHRcdGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQmW2RhdGEtcmVhY2gtbGlzdGJveC1vcHRpb25dW2RhdGEtY3VycmVudC1uYXZdIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdFx0Y29sb3I6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLnByaW1hcnlbMV19O1xyXG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0ZGl2IHtcclxuXHRcdFx0Ym9yZGVyLWNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy5wcmltYXJ5WzFdfTtcclxuXHRcdH1cclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBDaGVja1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0cGxhY2UtY29udGVudDogY2VudGVyO1xyXG5cclxuXHR3aWR0aDogMTZweDtcclxuXHRoZWlnaHQ6IDE2cHg7XHJcblx0bWFyZ2luLXJpZ2h0OiAxM3B4O1xyXG5cclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy5ncmV5WzJdfTtcclxuXHRib3JkZXItcmFkaXVzOiAycHg7XHJcblx0Ym9yZGVyOiBzb2xpZCAycHggdHJhbnNwYXJlbnQ7XHJcbmA7XHJcbiIsImltcG9ydCB7IExpc3Rib3hJbnB1dCwgTGlzdGJveEJ1dHRvbiwgTGlzdGJveFBvcG92ZXIsIExpc3Rib3hMaXN0IH0gZnJvbSAnQHJlYWNoL2xpc3Rib3gnO1xyXG5pbXBvcnQgVmlzdWFsbHlIaWRkZW4gZnJvbSAnQHJlYWNoL3Zpc3VhbGx5LWhpZGRlbic7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgRGlzcGF0Y2gsIEZDLCBTZXRTdGF0ZUFjdGlvbiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgJ0ByZWFjaC9saXN0Ym94L3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgaWNvbkNoZXZyb25Eb3duU3JjIGZyb20gJy9wdWJsaWMvaWNvbnMvaWNvbi1hcnJvdy1kb3duLnN2Zyc7XHJcblxyXG5pbXBvcnQgeyBEcm9wZG93bk9wdGlvbiB9IGZyb20gJy4nO1xyXG5cclxuaW1wb3J0IHsgUG9zc2libGVTdGF0dXMgfSBmcm9tICdAL2NvbmZpZy9Qb3NzaWJsZVN0YXR1cyc7XHJcbmltcG9ydCB7IGg0VGV4dFN0eWxlIH0gZnJvbSAnQC9zdHlsZXMvdHlwb2dyYXBoeSc7XHJcblxyXG5pbnRlcmZhY2UgRHJvcERvd25Qcm9wcyB7XHJcblx0Y2xhc3NOYW1lPzogc3RyaW5nO1xyXG5cdHNldERyb3Bkb3duVmFsdWU6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPGFueT4+O1xyXG5cdGZpbHRlcjogUG9zc2libGVTdGF0dXMgfCAnJztcclxufVxyXG5cclxuLy8gTmVlZCB0byBjb21lYmFjayBoZXJlIGFuZCByZWZhY3RvciB0aGlzLiBSZWFzb24gSSBoYWQgdG8gY29tcG9zZSBEcm9wZG93biBhbmQgRHJvcGRvd25PcHRpb25cclxuLy8gbGlrZSB0aGlzIHdhcyB0byBlbmFibGUgdGhlIGFiaWxpdHkgdG8gY2xpY2sgb24gYSBpbnB1dCB0aGF0IGhhcyBhbHJlYWR5IGJlZW4gY2xpY2tlZCBhbmQgdG9nZ2xlIGl0IG9mZlxyXG4vLyBUaGlzIHByZXNlcnZlcyB0aGUgdmFsdWUgYmVpbmcgZWl0aGVyICcnLCAnRHJhZnQnLCAnUGVuZGluZycsICdQYWlkJyBtYWtpbmcgdGhlIGRyb3Bkb3duIGFjY2Vzc2libGVcclxuLy8gY3VycmVudGx5IG5vIHdheSB0byBkbyB0aGlzIHdpdGggdGhlIG5hdGl2ZSBSZWFjaCBVSSBjb250cm9scyBiZWNhdXNlIGl0IG9ubHkgb2ZmZXJzIGEgb25DaGFuZ2UgaGFuZGxlclxyXG4vLyBhbmQgSSB3YW50ZWQgdG8ga2VlcCBhY2Nlc3NpYmxlIG5hdHVyZSBvZiBSZWFjaCBVSSBjb21wb25lbnRzIHNpbmNlIHRoZXkgYXJlIGJhdHRsZSB0ZXN0ZWQgYXMgYmVpbmcgYWNlc3NpYmxlIHJhdGhlclxyXG4vLyB0aGVuIHRyeSBpbXBsZW1lbnQgbXkgb3duIHZlcnNpb24gaHR0cHM6Ly9yZWFjaC50ZWNoL2xpc3Rib3hcclxuXHJcbmV4cG9ydCBjb25zdCBJbnZvaWNlRmlsdGVyRHJvcGRvd246IEZDPERyb3BEb3duUHJvcHM+ID0gKHtcclxuXHRjbGFzc05hbWUsXHJcblx0c2V0RHJvcGRvd25WYWx1ZSxcclxuXHRmaWx0ZXIsXHJcbn0pID0+IHtcclxuXHRjb25zdCBsYWJlbElkID0gYGZpbHRlci1ieS1zdGF0dXNgO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XHJcblx0XHRcdDxWaXN1YWxseUhpZGRlbiBpZD17bGFiZWxJZH0+RmlsdGVyIEJ5IFN0YXR1czwvVmlzdWFsbHlIaWRkZW4+XHJcblx0XHRcdDxMaXN0Ym94SW5wdXQgYXJpYS1sYWJlbGxlZGJ5PXtsYWJlbElkfSBkZWZhdWx0VmFsdWU9XCJcIiB2YWx1ZT17ZmlsdGVyfT5cclxuXHRcdFx0XHQ8RHJvcGRvd25CdXR0b25cclxuXHRcdFx0XHRcdGFycm93PXs8SW1hZ2UgaWQ9XCJjaGV2cm9uXCIgc3JjPXtpY29uQ2hldnJvbkRvd25TcmN9IGFsdD1cIkFycm93IGZhY2luZyB1cFwiIC8+fVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdEZpbHRlciZuYnNwOzxzcGFuIGlkPVwiZXh0cmEtdGV4dFwiPmJ5IHN0YXR1czwvc3Bhbj5cclxuXHRcdFx0XHQ8L0Ryb3Bkb3duQnV0dG9uPlxyXG5cdFx0XHRcdDxQb3BPdmVyPlxyXG5cdFx0XHRcdFx0PExpc3Rib3hMaXN0PlxyXG5cdFx0XHRcdFx0XHQ8RHJvcGRvd25PcHRpb25cclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXREcm9wZG93blZhbHVlKGZpbHRlciA9PT0gJ0RyYWZ0JyA/ICcnIDogJ0RyYWZ0Jyl9XHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9XCJEcmFmdFwiXHJcblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJEcmFmdFwiXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHREcmFmdFxyXG5cdFx0XHRcdFx0XHQ8L0Ryb3Bkb3duT3B0aW9uPlxyXG5cdFx0XHRcdFx0XHQ8RHJvcGRvd25PcHRpb25cclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXREcm9wZG93blZhbHVlKGZpbHRlciA9PT0gJ1BlbmRpbmcnID8gJycgOiAnUGVuZGluZycpfVxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPVwiUGVuZGluZ1wiXHJcblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJQZW5kaW5nXCJcclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFBlbmRpbmdcclxuXHRcdFx0XHRcdFx0PC9Ecm9wZG93bk9wdGlvbj5cclxuXHRcdFx0XHRcdFx0PERyb3Bkb3duT3B0aW9uXHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0RHJvcGRvd25WYWx1ZShmaWx0ZXIgPT09ICdQYWlkJyA/ICcnIDogJ1BhaWQnKX1cclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT1cIlBhaWRcIlxyXG5cdFx0XHRcdFx0XHRcdGxhYmVsPVwiUGFpZFwiXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRQYWlkXHJcblx0XHRcdFx0XHRcdDwvRHJvcGRvd25PcHRpb24+XHJcblx0XHRcdFx0XHQ8L0xpc3Rib3hMaXN0PlxyXG5cdFx0XHRcdDwvUG9wT3Zlcj5cclxuXHRcdFx0PC9MaXN0Ym94SW5wdXQ+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuY29uc3QgUG9wT3ZlciA9IHN0eWxlZChMaXN0Ym94UG9wb3ZlcilgXHJcblx0JltkYXRhLXJlYWNoLWxpc3Rib3gtcG9wb3Zlcl0ge1xyXG5cdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0XHRtYXJnaW4tbGVmdDogLTM5cHg7XHJcblx0XHRtYXJnaW4tdG9wOiAyM3B4O1xyXG5cdFx0cGFkZGluZzogMjRweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHRcdGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSg3MiwgODQsIDE1OSwgMC4yNSk7XHJcblx0XHRib3JkZXI6IG5vbmU7XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgRHJvcGRvd25CdXR0b24gPSBzdHlsZWQoTGlzdGJveEJ1dHRvbilgXHJcblx0JHtoNFRleHRTdHlsZX07XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdHdpZHRoOiBmaXQtY29udGVudDtcclxuXHRwYWRkaW5nOiAwO1xyXG5cclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cclxuXHRzcGFuIHtcclxuXHRcdGhlaWdodDogMTBweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG5cdH1cclxuXHJcblx0I2V4dHJhLXRleHQge1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHRcdGhlaWdodDogYXV0bztcclxuXHRcdG1hcmdpbjogMDtcclxuXHR9XHJcblxyXG5cdCZbZGF0YS1yZWFjaC1saXN0Ym94LWJ1dHRvbl1bYXJpYS1leHBhbmRlZD0ndHJ1ZSddIHtcclxuXHRcdCNjaGV2cm9uIHtcclxuXHRcdFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zO1xyXG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0I2V4dHJhLXRleHQge1xyXG5cdFx0XHRkaXNwbGF5OiByZXZlcnQ7XHJcblx0XHR9XHJcblx0fVxyXG5gO1xyXG4iLCJleHBvcnQgeyBEcm9wZG93biB9IGZyb20gJy4vRHJvcGRvd24nO1xyXG5leHBvcnQgeyBEcm9wZG93bk9wdGlvbiB9IGZyb20gJy4vRHJvcGRvd25PcHRpb24nO1xyXG5leHBvcnQgeyBJbnZvaWNlRmlsdGVyRHJvcGRvd24gfSBmcm9tICcuL0ludm9pY2VGaWx0ZXJEcm9wZG93bic7XHJcbiIsImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgZW1wdHlTdGF0ZUlsbHVzdHJhdGlvblNyYyBmcm9tICdAL2Fzc2V0cy9pbGx1c3RyYXRpb24tZW1wdHkuc3ZnJztcclxuaW1wb3J0IHsgaDJUZXh0U3R5bGUgfSBmcm9tICdAL3N0eWxlcy90eXBvZ3JhcGh5JztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcblx0aGVhZGluZzogc3RyaW5nO1xyXG5cdGVycm9yTWVzc2FnZTogc3RyaW5nO1xyXG5cdGNsYXNzTmFtZT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEVtcHR5U3RhdGUgPSAoeyBoZWFkaW5nLCBlcnJvck1lc3NhZ2UsIGNsYXNzTmFtZSB9OiBQcm9wcykgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8V3JhcHBlciBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XHJcblx0XHRcdDxFbXB0eVN0YXRlSW1nV3JhcHBlcj5cclxuXHRcdFx0XHQ8SW1hZ2VcclxuXHRcdFx0XHRcdHNyYz17ZW1wdHlTdGF0ZUlsbHVzdHJhdGlvblNyY31cclxuXHRcdFx0XHRcdGxheW91dD1cInJlc3BvbnNpdmVcIlxyXG5cdFx0XHRcdFx0YWx0PVwiQSBkcmF3aW5nIG9mIGEgcGVyc29uIGp1bXBpbmcgb3V0IGEgbGV0dGVyIHdpdGggYSBtZWdhcGhvbmVcIlxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvRW1wdHlTdGF0ZUltZ1dyYXBwZXI+XHJcblx0XHRcdDxFcnJvckhlYWRpbmc+e2hlYWRpbmd9PC9FcnJvckhlYWRpbmc+XHJcblx0XHRcdDxFcnJvck1lc3NhZ2U+e2Vycm9yTWVzc2FnZX08L0Vycm9yTWVzc2FnZT5cclxuXHRcdDwvV3JhcHBlcj5cclxuXHQpO1xyXG59O1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWZsb3c6IGNvbHVtbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgRW1wdHlTdGF0ZUltZ1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR3aWR0aDogMTkycHg7XHJcblx0aGVpZ2h0OiAxNTlweDtcclxuXHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0d2lkdGg6IDI0MHB4O1xyXG5cdFx0aGVpZ2h0OiAxOTlweDtcclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBFcnJvckhlYWRpbmcgPSBzdHlsZWQuaDJgXHJcblx0JHtoMlRleHRTdHlsZX07XHJcblx0Y29sb3I6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLmRhcmtbMV19O1xyXG5cdG1hcmdpbi10b3A6IDQwcHg7XHJcblxyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdG1hcmdpbi10b3A6IDY0cHg7XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgRXJyb3JNZXNzYWdlID0gc3R5bGVkLnBgXHJcblx0bWF4LXdpZHRoOiAyMDFweDtcclxuXHRtYXJnaW4tdG9wOiAyNHB4O1xyXG5cclxuXHRmb250LWZhbWlseTogJHsocCkgPT4gcC50aGVtZS5GT05UX0ZBTUlMWS5ib2R5fTtcclxuXHRmb250LXdlaWdodDogJHsocCkgPT4gcC50aGVtZS5XRUlHSFRTLm1lZGl1bX07XHJcblx0Zm9udC1zaXplOiAkezEyIC8gMTZ9cmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRsZXR0ZXItc3BhY2luZzogLTAuMjVweDtcclxuXHRjb2xvcjogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMuZ3JleVsxXX07XHJcblxyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdG1heC13aWR0aDogMjIxcHg7XHJcblx0fVxyXG5gO1xyXG4iLCJpbXBvcnQgeyB5dXBSZXNvbHZlciB9IGZyb20gJ0Bob29rZm9ybS9yZXNvbHZlcnMveXVwJztcclxuaW1wb3J0IFJlYWN0LCB7IERpc3BhdGNoLCBGQywgU2V0U3RhdGVBY3Rpb24sIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybVByb3ZpZGVyLCB1c2VGaWVsZEFycmF5LCB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBpbml0YWxWYWx1ZXMgfSBmcm9tICdjb25maWcvRm9ybS9Jbml0YWxWYWx1ZXMnO1xyXG5pbXBvcnQgeyBmb3JtU2NoZW1hIH0gZnJvbSAnY29uZmlnL0Zvcm0vVmFsaWRhdGlvblNjaGVtYSc7XHJcbmltcG9ydCB7IEludm9pY2VzQ29udGV4dCB9IGZyb20gJ2NvbnRleHQvSW52b2ljZXNDb250ZXh0JztcclxuXHJcbmltcG9ydCB7IEVycm9yIH0gZnJvbSAnLi9FcnJvcic7XHJcblxyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAL2NvbXBvbmVudHMvQnV0dG9uJztcclxuaW1wb3J0IHsgRGF0ZUZpZWxkIH0gZnJvbSAnQC9jb21wb25lbnRzL0Zvcm0vRmllbGRzL0RhdGVGaWVsZCc7XHJcbmltcG9ydCB7IEZvcm1GaWVsZCB9IGZyb20gJ0AvY29tcG9uZW50cy9Gb3JtL0ZpZWxkcy9Gb3JtRmllbGQnO1xyXG5pbXBvcnQgeyBJdGVtRmllbGQgfSBmcm9tICdAL2NvbXBvbmVudHMvRm9ybS9GaWVsZHMvSXRlbUZpZWxkJztcclxuaW1wb3J0IHsgRm9ybVNlY3Rpb24gfSBmcm9tICdAL2NvbXBvbmVudHMvRm9ybS9Gb3JtU2VjdGlvbic7XHJcbmltcG9ydCB7IFBvc3NpYmxlU3RhdHVzIH0gZnJvbSAnQC9jb25maWcvUG9zc2libGVTdGF0dXMnO1xyXG5pbXBvcnQgeyBmb3JtSGVhZGVyVGV4dFN0eWxlLCBpdGVtbGlzdEhlYWRlclRleHRTdHlsZSB9IGZyb20gJ0Avc3R5bGVzL3R5cG9ncmFwaHknO1xyXG5pbXBvcnQgeyBJbnZvaWNlIH0gZnJvbSAnQC90eXBlcy9pbmRleCc7XHJcblxyXG5pbnRlcmZhY2UgRWRpdEludm9pY2VGb3JtIHtcclxuXHRzZXREcmF3ZXJPcGVuOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxib29sZWFuPj47XHJcblx0aW52b2ljZTogSW52b2ljZSB8IHVuZGVmaW5lZDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEVkaXRJbnZvaWNlRm9ybTogRkM8RWRpdEludm9pY2VGb3JtPiA9ICh7IHNldERyYXdlck9wZW4sIGludm9pY2UgfSkgPT4ge1xyXG5cdGNvbnN0IHsgYWRkSW52b2ljZSwgdXBkYXRlSW52b2ljZSB9ID0gdXNlQ29udGV4dChJbnZvaWNlc0NvbnRleHQpO1xyXG5cclxuXHRjb25zdCBtZXRob2RzID0gdXNlRm9ybSh7XHJcblx0XHRkZWZhdWx0VmFsdWVzOiBpbml0YWxWYWx1ZXMsXHJcblx0XHRyZXNvbHZlcjogeXVwUmVzb2x2ZXIoZm9ybVNjaGVtYSksXHJcblx0XHRtb2RlOiAnb25CbHVyJyxcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgeyBmaWVsZHMsIGFwcGVuZCwgcmVtb3ZlIH0gPSB1c2VGaWVsZEFycmF5KHtcclxuXHRcdGNvbnRyb2w6IG1ldGhvZHMuY29udHJvbCxcclxuXHRcdG5hbWU6ICdpbnZvaWNlX2l0ZW1zJyxcclxuXHR9KTtcclxuXHQvLyBUT0RPOiBGaXggcHJpY2UgaW5wdXQgdHJlYXRpbmcgY2VudHMgYXMgZG9sbGFycyBvaCBhbHNvIHRoZSBkYXRlIGlucHV0IGlzIGZ1Y2tlZCBnb29kIGx1Y2tcclxuXHQvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdC8vIFx0bWV0aG9kcy5yZXNldCh7XHJcblx0Ly8gXHRcdC4uLmludm9pY2UsXHJcblx0Ly8gXHRcdGludm9pY2VfaXRlbXM6IGludm9pY2U/Lmludm9pY2VfaXRlbXMsXHJcblx0Ly8gXHR9KTtcclxuXHQvLyB9LCBbaW52b2ljZSwgbWV0aG9kc10pO1xyXG5cclxuXHRjb25zdCBzdWJtaXRGb3JtRGF0YSA9IChlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRjb25zb2xlLmxvZygnaGkgc3VibWl0dGVkJyk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQWRkSW52b2ljZSA9ICgpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKG1ldGhvZHMuZ2V0VmFsdWVzKCkpO1xyXG5cdFx0YWRkSW52b2ljZShtZXRob2RzLmdldFZhbHVlcygpKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVVcGRhdGVJbnZvaWNlID0gKCkgPT4ge1xyXG5cdFx0aWYgKG1ldGhvZHMuZm9ybVN0YXRlLmlzVmFsaWQpIHtcclxuXHRcdFx0dXBkYXRlSW52b2ljZShtZXRob2RzLmdldFZhbHVlcygpKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEZvcm1Qcm92aWRlciB7Li4ubWV0aG9kc30+XHJcblx0XHRcdDxTdHlsZWRGb3JtIG9uU3VibWl0PXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfT5cclxuXHRcdFx0XHR7aW52b2ljZSAmJiAoXHJcblx0XHRcdFx0XHQ8Rm9ybUhlYWRlcj5cclxuXHRcdFx0XHRcdFx0RWRpdCA8c3Bhbj4jPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHR7aW52b2ljZS5pZH1cclxuXHRcdFx0XHRcdDwvRm9ybUhlYWRlcj5cclxuXHRcdFx0XHQpfVxyXG5cdFx0XHRcdDxJbm5lcldyYXBwZXI+XHJcblx0XHRcdFx0XHR7LyogQmlsbCBGcm9tICovfVxyXG5cdFx0XHRcdFx0PEZvcm1TZWN0aW9uIGxhYmVsPVwiQmlsbCBGcm9tXCI+XHJcblx0XHRcdFx0XHRcdDxGb3JtRmllbGQgdHlwZT1cInRleHRcIiBsYWJlbD1cIlN0cmVldCBBZGRyZXNzXCIgbmFtZT1cInVzZXJfc3RyZWV0X2FkZHJlc3NcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8Um93PlxyXG5cdFx0XHRcdFx0XHRcdDxGb3JtRmllbGRcclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IG1pbldpZHRoOiAnMTQwcHgnLCBmbGV4OiAxIH19XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkNpdHlcIlxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cInVzZXJfY2l0eVwiXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUZpZWxkXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBtaW5XaWR0aDogJzE0MHB4JywgZmxleDogMSB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJQb3N0IENvZGVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cInVzZXJfcG9zdF9jb2RlXCJcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxGb3JtRmllbGRcclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IG1pbldpZHRoOiAnMTUycHgnLCBmbGV4OiAxIH19XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkNvdW50cnlcIlxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cInVzZXJfY291bnRyeVwiXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9Sb3c+XHJcblx0XHRcdFx0XHQ8L0Zvcm1TZWN0aW9uPlxyXG5cdFx0XHRcdFx0ey8qIEJpbGwgVG8gKi99XHJcblx0XHRcdFx0XHQ8Rm9ybVNlY3Rpb24gbGFiZWw9XCJCaWxsIFRvXCI+XHJcblx0XHRcdFx0XHRcdDxGb3JtRmllbGQgdHlwZT1cInRleHRcIiBsYWJlbD1cIkNsaWVudCdzIE5hbWVcIiBuYW1lPVwiY2xpZW50X25hbWVcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8Rm9ybUZpZWxkIHR5cGU9XCJlbWFpbFwiIGxhYmVsPVwiQ2xpZW50J3MgRW1haWxcIiBuYW1lPVwiY2xpZW50X2VtYWlsXCIgLz5cclxuXHRcdFx0XHRcdFx0PEZvcm1GaWVsZCB0eXBlPVwidGV4dFwiIGxhYmVsPVwiU3RyZWV0IEFkZHJlc3NcIiBuYW1lPVwiY2xpZW50X3N0cmVldF9hZGRyZXNzXCIgLz5cclxuXHRcdFx0XHRcdFx0PFJvdz5cclxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUZpZWxkXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBtaW5XaWR0aDogJzE0MHB4JywgZmxleDogMSB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJDaXR5XCJcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJjbGllbnRfY2l0eVwiXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUZpZWxkXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBtaW5XaWR0aDogJzE0MHB4JywgZmxleDogMSB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJQb3N0IENvZGVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImNsaWVudF9wb3N0X2NvZGVcIlxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PEZvcm1GaWVsZFxyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgbWluV2lkdGg6ICcxNTJweCcsIGZsZXg6IDEgfX1cclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiQ291bnRyeVwiXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiY2xpZW50X2NvdW50cnlcIlxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvUm93PlxyXG5cdFx0XHRcdFx0PC9Gb3JtU2VjdGlvbj5cclxuXHJcblx0XHRcdFx0XHQ8Rm9ybVNlY3Rpb24gbGFiZWw9XCJJbnZvaWNlIERldGFpbHNcIj5cclxuXHRcdFx0XHRcdFx0PFJvdz5cclxuXHRcdFx0XHRcdFx0XHQ8RGF0ZUZpZWxkIHN0eWxlPXt7IGZsZXg6IDEgfX0gbmFtZT1cImludm9pY2VfZGF0ZVwiIGxhYmVsPVwiSW52b2ljZSBEYXRlXCIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8RGF0ZUZpZWxkIHN0eWxlPXt7IGZsZXg6IDEgfX0gbmFtZT1cImludm9pY2VfZHVlX2RhdGVcIiBsYWJlbD1cIkludm9pY2UgRHVlIERhdGVcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8L1Jvdz5cclxuXHJcblx0XHRcdFx0XHRcdDxGb3JtRmllbGRcclxuXHRcdFx0XHRcdFx0XHRzdHlsZT17eyBtaW5XaWR0aDogJzE1MnB4JywgZmxleDogMSB9fVxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIlByb2plY3QgRGVzY3JpcHRpb25cIlxyXG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDxJdGVtc0xpc3RIZWFkZXJXcmFwcGVyPlxyXG5cdFx0XHRcdFx0XHRcdDxJdGVtTGlzdEhlYWRlcj5JdGVtIExpc3Q8L0l0ZW1MaXN0SGVhZGVyPlxyXG5cdFx0XHRcdFx0XHRcdHsvKiBAdHMtZXhwZWN0LWVycm9yOiBpZ25vcmUgd3Jvbmcgc2NoZW1hIHdhcm5pbmcgKi99XHJcblx0XHRcdFx0XHRcdFx0PEVycm9yPnttZXRob2RzLmZvcm1TdGF0ZS5lcnJvcnMuaW52b2ljZV9pdGVtcz8ubWVzc2FnZX08L0Vycm9yPlxyXG5cdFx0XHRcdFx0XHQ8L0l0ZW1zTGlzdEhlYWRlcldyYXBwZXI+XHJcblx0XHRcdFx0XHRcdDxJdGVtc0ZpZWxkTGlzdD5cclxuXHRcdFx0XHRcdFx0XHR7ZmllbGRzLm1hcCgoaXRlbSwgaXRlbUluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8SXRlbUZpZWxkIGtleT17aXRlbS5pZH0gaWR4PXtpdGVtSW5kZXh9IHJlbW92ZT17cmVtb3ZlfSAvPlxyXG5cdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHRcdDxBZGRJdGVtQnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PVwic2Vjb25kYXJ5XCJcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gYXBwZW5kKHsgbmFtZTogJycsIHF1YW50aXR5OiAwLCBwcmljZTogMCB9KX1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQrIEFkZCBOZXcgSXRlbVxyXG5cdFx0XHRcdFx0XHRcdDwvQWRkSXRlbUJ1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC9JdGVtc0ZpZWxkTGlzdD5cclxuXHRcdFx0XHRcdDwvRm9ybVNlY3Rpb24+XHJcblx0XHRcdFx0PC9Jbm5lcldyYXBwZXI+XHJcblx0XHRcdFx0PEZvcm1CdXR0b25zQ29udGFpbmVyPlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXREcmF3ZXJPcGVuKGZhbHNlKX0gdHlwZT1cImJ1dHRvblwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cclxuXHRcdFx0XHRcdFx0Q2FuY2VsXHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdDxTYXZlRHJhZnRCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZEludm9pY2UoKX0+XHJcblx0XHRcdFx0XHRcdFNhdmUgYXMgRHJhZnRcclxuXHRcdFx0XHRcdDwvU2F2ZURyYWZ0QnV0dG9uPlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVVcGRhdGVJbnZvaWNlKCl9PlxyXG5cdFx0XHRcdFx0XHRTYXZlIENoYW5nZXNcclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvRm9ybUJ1dHRvbnNDb250YWluZXI+XHJcblx0XHRcdDwvU3R5bGVkRm9ybT5cclxuXHRcdDwvRm9ybVByb3ZpZGVyPlxyXG5cdCk7XHJcbn07XHJcblxyXG5jb25zdCBGb3JtSGVhZGVyID0gc3R5bGVkLmgyYFxyXG5cdCR7Zm9ybUhlYWRlclRleHRTdHlsZX07XHJcblx0cGFkZGluZy10b3A6IDI0cHg7XHJcblx0c3BhbiB7XHJcblx0XHRjb2xvcjogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMuZ3JleVsxXX07XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLnRhYmxldEFuZFVwfSB7XHJcblx0XHRwYWRkaW5nLXRvcDogNTZweDtcclxuXHR9XHJcbmA7XHJcblxyXG4vLyBGb3JtXHJcbmNvbnN0IFN0eWxlZEZvcm0gPSBzdHlsZWQuZm9ybWBcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1mbG93OiBjb2x1bW47XHJcblx0cGFkZGluZzogMDtcclxuXHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0d2lkdGg6IDUyOHB4O1xyXG5cdH1cclxuYDtcclxuXHJcbmNvbnN0IElubmVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG92ZXJmbG93OiBzY3JvbGwgIWltcG9ydGFudDtcclxuXHRwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0cGFkZGluZy1yaWdodDogMTZweDtcclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBSb3cgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdGdhcDogMjNweDtcclxuXHR3aWR0aDogMTAwJTtcclxuYDtcclxuXHJcbmNvbnN0IEl0ZW1zTGlzdEhlYWRlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1hcmdpbi10b3A6IDY2cHg7XHJcblxyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdGZsZXgtZmxvdzogcm93O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5cdH1cclxuYDtcclxuXHJcbmNvbnN0IEl0ZW1MaXN0SGVhZGVyID0gc3R5bGVkLmg0YFxyXG5cdCR7aXRlbWxpc3RIZWFkZXJUZXh0U3R5bGV9O1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy5ncmV5WzddfTtcclxuXHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0ZmxleC1mbG93OiByb3c7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcblx0XHR3aWR0aDogYXV0bztcclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBJdGVtc0ZpZWxkTGlzdCA9IHN0eWxlZC5kaXZgXHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWZsb3c6IGNvbHVtbjtcclxuXHRnYXA6IDI0cHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcbmA7XHJcblxyXG5jb25zdCBGb3JtQnV0dG9uc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRoZWlnaHQ6IDkxcHg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cdGdhcDogOHB4O1xyXG5cdG1hcmdpbi10b3A6IDI0cHg7XHJcblxyXG5cdHBhZGRpbmctcmlnaHQ6IDhweDtcclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLnRhYmxldEFuZFVwfSB7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG5cdH1cclxuYDtcclxuXHJcbmNvbnN0IEFkZEl0ZW1CdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBgO1xyXG5cclxuY29uc3QgU2F2ZURyYWZ0QnV0dG9uID0gc3R5bGVkKEJ1dHRvbilgXHJcblx0LyogZGlzcGxheTogbm9uZTsgKi9cclxuYDtcclxuIiwiaW1wb3J0IHsgRkMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgZXJyb3JNZXNzYWdlVGV4dFN0eWxlIH0gZnJvbSAnQC9zdHlsZXMvdHlwb2dyYXBoeSc7XHJcblxyXG5leHBvcnQgY29uc3QgRXJyb3I6IEZDID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG5cdHJldHVybiA8V3JhcHBlcj57Y2hpbGRyZW59PC9XcmFwcGVyPjtcclxufTtcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQucGBcclxuXHQke2Vycm9yTWVzc2FnZVRleHRTdHlsZX07XHJcblx0Y29sb3I6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLndhcm5pbmdbMV19O1xyXG5gO1xyXG4iLCJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IEZDIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCBpY29uQ2hldnJvbkxlZnRTcmMgZnJvbSAnQC9pY29ucy9pY29uLWFycm93LWxlZnQuc3ZnJztcclxuaW1wb3J0IGljb25DaGV2cm9uUmlnaHRTcmMgZnJvbSAnQC9pY29ucy9pY29uLWFycm93LXJpZ2h0LnN2Zyc7XHJcbmltcG9ydCB7IGg0VGV4dFN0eWxlIH0gZnJvbSAnQC9zdHlsZXMvdHlwb2dyYXBoeSc7XHJcblxyXG5pbnRlcmZhY2UgQ2FsZW5kYXJIZWFkZXJQcm9wcyB7XHJcblx0bW9udGhEYXRlOiBEYXRlO1xyXG5cdGluY3JlYXNlTW9udGg6ICgpID0+IHZvaWQ7XHJcblx0ZGVjcmVhc2VNb250aDogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENhbGVuZGFySGVhZGVyOiBGQzxDYWxlbmRhckhlYWRlclByb3BzPiA9ICh7XHJcblx0bW9udGhEYXRlLFxyXG5cdGRlY3JlYXNlTW9udGgsXHJcblx0aW5jcmVhc2VNb250aCxcclxufSkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8SGVhZGVyPlxyXG5cdFx0XHQ8SGVhZGVyQnV0dG9uIHR5cGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwiUHJldmlvdXMgTW9udGhcIiBvbkNsaWNrPXtkZWNyZWFzZU1vbnRofT5cclxuXHRcdFx0XHQ8SW1hZ2Ugc3JjPXtpY29uQ2hldnJvbkxlZnRTcmN9IGFsdD1cIlwiIC8+XHJcblx0XHRcdDwvSGVhZGVyQnV0dG9uPlxyXG5cdFx0XHQ8TW9udGggY2xhc3NOYW1lPVwicmVhY3QtZGF0ZXBpY2tlcl9fY3VycmVudC1tb250aFwiPlxyXG5cdFx0XHRcdHttb250aERhdGUudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywge1xyXG5cdFx0XHRcdFx0bW9udGg6ICdzaG9ydCcsXHJcblx0XHRcdFx0XHR5ZWFyOiAnbnVtZXJpYycsXHJcblx0XHRcdFx0fSl9XHJcblx0XHRcdDwvTW9udGg+XHJcblx0XHRcdDxIZWFkZXJCdXR0b24gdHlwZT1cImJ1dHRvblwiIGFyaWEtbGFiZWw9XCJOZXh0IE1vbnRoXCIgb25DbGljaz17aW5jcmVhc2VNb250aH0+XHJcblx0XHRcdFx0PEltYWdlIHNyYz17aWNvbkNoZXZyb25SaWdodFNyY30gYWx0PVwiXCIgLz5cclxuXHRcdFx0PC9IZWFkZXJCdXR0b24+XHJcblx0XHQ8L0hlYWRlcj5cclxuXHQpO1xyXG59O1xyXG5cclxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmRpdmBcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHRwYWRkaW5nOiAwIDEwcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMjJweDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbmA7XHJcblxyXG5jb25zdCBNb250aCA9IHN0eWxlZC5zcGFuYFxyXG5cdCR7aDRUZXh0U3R5bGV9O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5gO1xyXG5cclxuY29uc3QgSGVhZGVyQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcblx0Jjpob3ZlciB7XHJcblx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0fVxyXG5gO1xyXG4iLCJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQsIHsgQ1NTUHJvcGVydGllcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCB7IEVycm9yIH0gZnJvbSAnQC9jb21wb25lbnRzL0Zvcm0vRXJyb3InO1xyXG5pbXBvcnQgaWNvbkNhbGVuZGFyU3JjIGZyb20gJ0AvaWNvbnMvaWNvbi1jYWxlbmRhci5zdmcnO1xyXG5pbXBvcnQgeyBib2R5VGV4dFN0eWxlLCBoNFRleHRTdHlsZSB9IGZyb20gJ0Avc3R5bGVzL3R5cG9ncmFwaHknO1xyXG5cclxuaW50ZXJmYWNlIENhbGVuZGFySW5wdXRQcm9wcyB7XHJcblx0bGFiZWw6IHN0cmluZztcclxuXHRzdHlsZT86IENTU1Byb3BlcnRpZXM7XHJcblx0dmFsdWU6IHN0cmluZztcclxuXHRvbkNoYW5nZT86ICgpID0+IHZvaWQ7XHJcblx0b25DbGljaz86ICgpID0+IHZvaWQ7XHJcblx0ZXJyb3I6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuXHRoYXNFcnJvcjogYm9vbGVhbjtcclxuXHRuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8vIE5lZWQgdG8gc3ByZWFkIHByb3BzIGJlY2F1c2Ugb2YgaG93IHJlYWN0LWRhdGVwaWNrZXIgd29ya3Mgd2l0aCBjdXN0b20gaW5wdXRzXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9kaXNwbGF5LW5hbWVcclxuZXhwb3J0IGNvbnN0IENhbGVuZGFySW5wdXQgPSBmb3J3YXJkUmVmPEhUTUxJbnB1dEVsZW1lbnQsIENhbGVuZGFySW5wdXRQcm9wcz4oXHJcblx0KHsgbGFiZWwsIHN0eWxlLCBlcnJvciwgaGFzRXJyb3IsIG5hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxyXG5cdFx0PEN1c3RvbUlucHV0V3JhcHBlciBzdHlsZT17c3R5bGV9PlxyXG5cdFx0XHQ8SW5wdXRIZWFkZXI+XHJcblx0XHRcdFx0PExhYmVsIGh0bWxGb3I9e25hbWV9IGhhc0Vycm9yPXtoYXNFcnJvcn0+XHJcblx0XHRcdFx0XHR7bGFiZWx9XHJcblx0XHRcdFx0PC9MYWJlbD5cclxuXHRcdFx0XHR7aGFzRXJyb3IgJiYgPEVycm9yPntlcnJvcn08L0Vycm9yPn1cclxuXHRcdFx0PC9JbnB1dEhlYWRlcj5cclxuXHRcdFx0PElucHV0V3JhcHBlcj5cclxuXHRcdFx0XHQ8Q3VzdG9tSW5wdXQgaWQ9e25hbWV9IHsuLi5wcm9wc30gaGFzRXJyb3I9e2hhc0Vycm9yfSByZWY9e3JlZn0gLz5cclxuXHRcdFx0XHQ8SW5wdXRJY29uPlxyXG5cdFx0XHRcdFx0PEltYWdlIHNyYz17aWNvbkNhbGVuZGFyU3JjfSBhbHQ9XCJcIiAvPlxyXG5cdFx0XHRcdDwvSW5wdXRJY29uPlxyXG5cdFx0XHQ8L0lucHV0V3JhcHBlcj5cclxuXHRcdDwvQ3VzdG9tSW5wdXRXcmFwcGVyPlxyXG5cdClcclxuKTtcclxuXHJcbmNvbnN0IEN1c3RvbUlucHV0V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWZsb3c6IGNvbHVtbjtcclxuXHR3aWR0aDogMTAwJTtcclxuYDtcclxuXHJcbmNvbnN0IElucHV0SGVhZGVyID0gc3R5bGVkLmRpdmBcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZmxvdzogY29sdW1uO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHR3aWR0aDogMTAwJTtcclxuXHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0ZmxleC1mbG93OiByZXZlcnQ7XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWw8eyBoYXNFcnJvcjogYm9vbGVhbiB9PmBcclxuXHQke2JvZHlUZXh0U3R5bGV9O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1mbG93OiBjb2x1bW47XHJcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHRjb2xvcjogJHsocCkgPT4gKHAuaGFzRXJyb3IgPyBwLnRoZW1lLkNPTE9SUy53YXJuaW5nWzFdIDogcC50aGVtZS5DT0xPUlMucHJpbWFyeVszXSl9O1xyXG5gO1xyXG5cclxuY29uc3QgSW5wdXRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGhlaWdodDogNDhweDtcclxuXHR3aWR0aDogMTAwJTtcclxuYDtcclxuXHJcbmNvbnN0IEN1c3RvbUlucHV0ID0gc3R5bGVkLmlucHV0PHsgaGFzRXJyb3I6IGJvb2xlYW4gfT5gXHJcblx0JHtoNFRleHRTdHlsZX07XHJcblx0cGFkZGluZy1sZWZ0OiAyMHB4O1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0Ym9yZGVyOiBzb2xpZCAycHggJHsocCkgPT4gKHAuaGFzRXJyb3IgPyBwLnRoZW1lLkNPTE9SUy53YXJuaW5nWzFdIDogcC50aGVtZS5DT0xPUlMuZ3JleVsyXSl9O1xyXG5cclxuXHQmOmhvdmVyIHtcclxuXHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdGJvcmRlcjogc29saWQgMnB4ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLnByaW1hcnlbMV19O1xyXG5cdH1cclxuYDtcclxuXHJcbmNvbnN0IElucHV0SWNvbiA9IHN0eWxlZC5kaXZgXHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHJpZ2h0OiAxNnB4O1xyXG5gO1xyXG4iLCJpbXBvcnQgeyBGQyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RGF0ZVBpY2tlciwgeyBSZWFjdERhdGVQaWNrZXJQcm9wcyB9IGZyb20gJ3JlYWN0LWRhdGVwaWNrZXInO1xyXG5pbXBvcnQgeyBDb250cm9sbGVyLCB1c2VGb3JtQ29udGV4dCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCBzdHlsZWQsIHsgY3JlYXRlR2xvYmFsU3R5bGUsIENTU1Byb3BlcnRpZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBDYWxlbmRhckhlYWRlciB9IGZyb20gJy4vQ2FsZW5kYXJIZWFkZXInO1xyXG5pbXBvcnQgeyBDYWxlbmRhcklucHV0IH0gZnJvbSAnLi9DYWxlbmRhcklucHV0JztcclxuXHJcbmltcG9ydCB7IGg0VGV4dFN0eWxlIH0gZnJvbSAnQC9zdHlsZXMvdHlwb2dyYXBoeSc7XHJcblxyXG5pbnRlcmZhY2UgRGF0ZUZpZWxkUHJvcHMgZXh0ZW5kcyBPbWl0PFJlYWN0RGF0ZVBpY2tlclByb3BzLCAnb25DaGFuZ2UnPiB7XHJcblx0c3R5bGU/OiBDU1NQcm9wZXJ0aWVzO1xyXG5cdGxhYmVsOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGF0ZUZpZWxkOiBGQzxEYXRlRmllbGRQcm9wcz4gPSAoeyBzdHlsZSwgbGFiZWwsIG5hbWUgfSkgPT4ge1xyXG5cdGNvbnN0IHsgY29udHJvbCB9ID0gdXNlRm9ybUNvbnRleHQoKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxXcmFwcGVyIHN0eWxlPXtzdHlsZX0+XHJcblx0XHRcdDxDb250cm9sbGVyXHJcblx0XHRcdFx0bmFtZT17bmFtZX1cclxuXHRcdFx0XHRjb250cm9sPXtjb250cm9sfVxyXG5cdFx0XHRcdHJlbmRlcj17KHsgZmllbGQsIGZpZWxkU3RhdGUgfSkgPT4gKFxyXG5cdFx0XHRcdFx0PFJlYWN0RGF0ZVBpY2tlclxyXG5cdFx0XHRcdFx0XHRjbG9zZU9uU2Nyb2xsPXsoKSA9PiB0cnVlfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IGZpZWxkLm9uQ2hhbmdlKGUudG9EYXRlU3RyaW5nKCkpfVxyXG5cdFx0XHRcdFx0XHRzZWxlY3RlZD17ZmllbGQudmFsdWV9XHJcblx0XHRcdFx0XHRcdHNob3dQb3BwZXJBcnJvdz17ZmFsc2V9XHJcblx0XHRcdFx0XHRcdGRhdGVGb3JtYXQ9XCJkIE1NTSB5eXl5XCJcclxuXHRcdFx0XHRcdFx0Y2FsZW5kYXJDbGFzc05hbWU9XCJjdXN0b20tY2FsZW5kYXJcIlxyXG5cdFx0XHRcdFx0XHRkYXlDbGFzc05hbWU9eygpID0+ICdjdXN0b20tZGF5J31cclxuXHRcdFx0XHRcdFx0Y3VzdG9tSW5wdXQ9e1xyXG5cdFx0XHRcdFx0XHRcdDxDYWxlbmRhcklucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPXtmaWVsZC5uYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0aGFzRXJyb3I9e2ZpZWxkU3RhdGUuaW52YWxpZH1cclxuXHRcdFx0XHRcdFx0XHRcdGVycm9yPXtmaWVsZFN0YXRlLmVycm9yPy5tZXNzYWdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2ZpZWxkLnZhbHVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9e2xhYmVsfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0cmVuZGVyQ3VzdG9tSGVhZGVyPXsoeyBtb250aERhdGUsIGRlY3JlYXNlTW9udGgsIGluY3JlYXNlTW9udGggfSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdDxDYWxlbmRhckhlYWRlclxyXG5cdFx0XHRcdFx0XHRcdFx0bW9udGhEYXRlPXttb250aERhdGV9XHJcblx0XHRcdFx0XHRcdFx0XHRkZWNyZWFzZU1vbnRoPXtkZWNyZWFzZU1vbnRofVxyXG5cdFx0XHRcdFx0XHRcdFx0aW5jcmVhc2VNb250aD17aW5jcmVhc2VNb250aH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQpfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8RGF0ZVBpY2tlclN0eWxlcyAvPlxyXG5cdFx0PC9XcmFwcGVyPlxyXG5cdCk7XHJcbn07XHJcblxyXG4vLyBOZWVkIHRoaXMgYXJiaXRyYXJ5IGRpdiB0byBwcmV2ZW50IHRoZSBkYXRlLXBpY2tlciBmcm9tIHB1c2hpbmcgY29udGVudCBiZWxvdyBpdCBkb3duIGEgZmV4IHB4XHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YGA7XHJcblxyXG4vLyBPdmVyaWRlIHJlYWN0LWRhdGVwaWNrZXIgc3R5bGVzIHdpdGggYSBnb2JhbHN0eWxlIHRoaXMgYSBiaXQgaGFja3kgYnV0IG9ubHkgd29ya2Fyb3VuZCBJIGNvdWxkIGZpbmQgdGhhdCB3YXMgdXNlYWJsZVxyXG5jb25zdCBEYXRlUGlja2VyU3R5bGVzID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbi5jdXN0b20tY2FsZW5kYXIge1xyXG4gICAgICR7aDRUZXh0U3R5bGV9O1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLndoaXRlfTtcclxuICAgICBwYWRkaW5nOiAyMnB4IDEwcHggMjJweCAxMHB4O1xyXG4gICAgIGJvcmRlcjogbm9uZTtcclxuICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDcyLCA4NCwgMTU5LCAwLjI1KTtcclxuXHRcdCBcclxufVxyXG5cclxuLmN1c3RvbS1kYXl7XHJcblx0Y29sb3I6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLmRhcmtbMV19O1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICBjb2xvcjogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMucHJpbWFyeVsxXX07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5yZWFjdC1kYXRlcGlja2VyX19kYXktLXNlbGVjdGVkIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy5wcmltYXJ5WzFdfTtcclxuICBjb2xvcjogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMud2hpdGV9O1xyXG59XHJcblxyXG4ucmVhY3QtZGF0ZXBpY2tlcl9fZGF5LS1rZXlib2FyZC1zZWxlY3RlZCB7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMucHJpbWFyeVsxXX07XHJcbiAgICAgY29sb3I6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLndoaXRlfTtcclxufVxyXG5cclxuXHJcbi5yZWFjdC1kYXRlcGlja2VyX19kYXktLW91dHNpZGUtbW9udGh7XHJcbiAgICAgIGNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy5kYXJrWzFdfTtcclxuICAgICAgb3BhY2l0eTogMC4wODtcclxuICAgICB9XHJcblxyXG5cdFx0IC5yZWFjdC1kYXRlcGlja2VyX19kYXktbmFtZXN7XHJcbiAgICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuIC5yZWFjdC1kYXRlcGlja2VyX19oZWFkZXJ7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgcGFkZGluZzogMDtcclxuICAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCBJbnB1dEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VDb250cm9sbGVyLCB1c2VGb3JtQ29udGV4dCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCBzdHlsZWQsIHsgQ1NTUHJvcGVydGllcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCB7IEVycm9yIH0gZnJvbSAnLi4vRXJyb3InO1xyXG5cclxuaW1wb3J0IHsgYm9keVRleHRTdHlsZSwgaDRUZXh0U3R5bGUgfSBmcm9tICdAL3N0eWxlcy90eXBvZ3JhcGh5JztcclxuXHJcbmludGVyZmFjZSBGcm9tRmllbGRQcm9wcyBleHRlbmRzIElucHV0SFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD4ge1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRzdHlsZT86IENTU1Byb3BlcnRpZXM7XHJcblx0Y2xhc3NOYW1lPzogc3RyaW5nO1xyXG5cdGxhYmVsOiBzdHJpbmc7XHJcblx0dHlwZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRm9ybUZpZWxkOiBGQzxGcm9tRmllbGRQcm9wcz4gPSAoe1xyXG5cdG5hbWUsXHJcblx0c3R5bGUsXHJcblx0Y2xhc3NOYW1lLFxyXG5cdGxhYmVsLFxyXG5cdHR5cGUsXHJcblx0Li4ucHJvcHNcclxufSkgPT4ge1xyXG5cdGNvbnN0IHsgY29udHJvbCB9ID0gdXNlRm9ybUNvbnRleHQoKTtcclxuXHRjb25zdCB7IGZpZWxkLCBmaWVsZFN0YXRlIH0gPSB1c2VDb250cm9sbGVyKHsgbmFtZSwgY29udHJvbCB9KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxXcmFwcGVyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBzdHlsZT17c3R5bGV9PlxyXG5cdFx0XHQ8SW5wdXRIZWFkZXI+XHJcblx0XHRcdFx0PExhYmVsIGh0bWxGb3I9e25hbWV9IGhhc0Vycm9yPXtmaWVsZFN0YXRlLmludmFsaWR9PlxyXG5cdFx0XHRcdFx0e2xhYmVsfVxyXG5cdFx0XHRcdDwvTGFiZWw+XHJcblx0XHRcdFx0e2ZpZWxkU3RhdGUuaW52YWxpZCAmJiA8RXJyb3I+e2ZpZWxkU3RhdGUuZXJyb3I/Lm1lc3NhZ2V9PC9FcnJvcj59XHJcblx0XHRcdDwvSW5wdXRIZWFkZXI+XHJcblx0XHRcdDxJbnB1dCBpZD17bmFtZX0gey4uLmZpZWxkfSB7Li4ucHJvcHN9IHR5cGU9e3R5cGV9IGhhc0Vycm9yPXtmaWVsZFN0YXRlLmludmFsaWR9IC8+XHJcblx0XHQ8L1dyYXBwZXI+XHJcblx0KTtcclxufTtcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG5cdCR7Ym9keVRleHRTdHlsZX07XHJcbmA7XHJcblxyXG5jb25zdCBMYWJlbCA9IHN0eWxlZC5sYWJlbDx7IGhhc0Vycm9yOiBib29sZWFuIH0+YFxyXG5cdGZsZXgtZmxvdzogY29sdW1uO1xyXG5cdGNvbG9yOiAkeyhwKSA9PiAocC5oYXNFcnJvciA/IHAudGhlbWUuQ09MT1JTLndhcm5pbmdbMV0gOiBwLnRoZW1lLkNPTE9SUy5wcmltYXJ5WzNdKX07XHJcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuYDtcclxuXHJcbmNvbnN0IElucHV0SGVhZGVyID0gc3R5bGVkLmRpdmBcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuYDtcclxuXHJcbmNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0PHsgaGFzRXJyb3I6IGJvb2xlYW4gfT5gXHJcblx0JHtoNFRleHRTdHlsZX07XHJcblx0aGVpZ2h0OiA0OHB4O1xyXG5cdHBhZGRpbmctbGVmdDogMjBweDtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0Ym9yZGVyOiBzb2xpZCAycHggJHsocCkgPT4gKHAuaGFzRXJyb3IgPyBwLnRoZW1lLkNPTE9SUy53YXJuaW5nWzFdIDogcC50aGVtZS5DT0xPUlMuZ3JleVsyXSl9O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGZvcm1hdFZhbHVlIH0gZnJvbSAncmVhY3QtY3VycmVuY3ktaW5wdXQtZmllbGQnO1xyXG5pbXBvcnQgeyB1c2VGb3JtQ29udGV4dCwgdXNlV2F0Y2ggfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCB7IEZvcm1GaWVsZCB9IGZyb20gJy4vRm9ybUZpZWxkJztcclxuaW1wb3J0IHsgUHJpY2VGaWVsZCB9IGZyb20gJy4vUHJpY2VGaWVsZCc7XHJcblxyXG5pbXBvcnQgeyBib2R5VGV4dFN0eWxlLCBoNFRleHRTdHlsZSB9IGZyb20gJ0Avc3R5bGVzL3R5cG9ncmFwaHknO1xyXG5cclxuaW50ZXJmYWNlIEl0ZW1GaWVsZFByb3BzIHtcclxuXHRpZHg6IG51bWJlcjtcclxuXHRyZW1vdmU6IChpbmRleD86IG51bWJlciB8IG51bWJlcltdKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSXRlbUZpZWxkOiBGQzxJdGVtRmllbGRQcm9wcz4gPSAoeyBpZHgsIHJlbW92ZSB9KSA9PiB7XHJcblx0Y29uc3QgeyBjb250cm9sLCBnZXRWYWx1ZXMgfSA9IHVzZUZvcm1Db250ZXh0KCk7XHJcblx0Y29uc3QgW3RvdGFsLCBzZXRUb3RhbF0gPSB1c2VTdGF0ZSgnMCcpO1xyXG5cclxuXHRjb25zdCB3YXRjaGVkUXVhbnRpdHlBbmRQcmljZSA9IHVzZVdhdGNoKHtcclxuXHRcdGNvbnRyb2wsXHJcblx0XHRuYW1lOiBbYGludm9pY2VfaXRlbXNbJHtpZHh9XS5xdWFudGl0eWAsIGBpbnZvaWNlX2l0ZW1zWyR7aWR4fV0ucHJpY2VgXSxcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgaW52b2ljZUl0ZW0gPSBnZXRWYWx1ZXMoJ2ludm9pY2VfaXRlbXMnKVtpZHhdO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKGlzTmFOKHdhdGNoZWRRdWFudGl0eUFuZFByaWNlWzBdKSB8fCBpc05hTih3YXRjaGVkUXVhbnRpdHlBbmRQcmljZVsxXSkpIHtcclxuXHRcdFx0cmV0dXJuIHNldFRvdGFsKCcwJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgZm9ybWF0dGVkVG90YWwgPSBmb3JtYXRWYWx1ZSh7XHJcblx0XHRcdHZhbHVlOiAoKHdhdGNoZWRRdWFudGl0eUFuZFByaWNlWzBdICogd2F0Y2hlZFF1YW50aXR5QW5kUHJpY2VbMV0pIC8gMTAwKVxyXG5cdFx0XHRcdC50b0ZpeGVkKDIpXHJcblx0XHRcdFx0LnRvU3RyaW5nKCksXHJcblx0XHRcdGdyb3VwU2VwYXJhdG9yOiAnLCcsXHJcblx0XHRcdGRlY2ltYWxTY2FsZTogMixcclxuXHRcdFx0ZGVjaW1hbFNlcGFyYXRvcjogJy4nLFxyXG5cdFx0XHRwcmVmaXg6ICckJyxcclxuXHRcdH0pO1xyXG5cclxuXHRcdHNldFRvdGFsKGZvcm1hdHRlZFRvdGFsKTtcclxuXHR9LCBbd2F0Y2hlZFF1YW50aXR5QW5kUHJpY2VdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxXcmFwcGVyPlxyXG5cdFx0XHQ8SXRlbU5hbWUgbGFiZWw9XCJJdGVtIE5hbWVcIiBuYW1lPXtgaW52b2ljZV9pdGVtc1ske2lkeH1dLm5hbWVgfSB0eXBlPVwidGV4dFwiIC8+XHJcblx0XHRcdDxRdWFudGl0eSBsYWJlbD1cIlF0eVwiIG5hbWU9e2BpbnZvaWNlX2l0ZW1zWyR7aWR4fV0ucXVhbnRpdHlgfSB0eXBlPVwibnVtYmVyXCIgbWluPXswfSAvPlxyXG5cdFx0XHQ8UHJpY2VGaWVsZCBmb3JtUHJpY2VWYWx1ZT17aW52b2ljZUl0ZW0/LnByaWNlID8/IDB9IG5hbWU9e2BpbnZvaWNlX2l0ZW1zWyR7aWR4fV0ucHJpY2VgfSAvPlxyXG5cdFx0XHQ8VG90YWxXcmFwcGVyPlxyXG5cdFx0XHRcdDxzcGFuPlRvdGFsPC9zcGFuPlxyXG5cdFx0XHRcdDxUb3RhbFByaWNlPnt0b3RhbH08L1RvdGFsUHJpY2U+XHJcblx0XHRcdDwvVG90YWxXcmFwcGVyPlxyXG5cdFx0XHQ8RGVsZXRlQnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiByZW1vdmUoaWR4KX0+XHJcblx0XHRcdFx0PHN2ZyB3aWR0aD1cIjEzXCIgaGVpZ2h0PVwiMTZcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcblx0XHRcdFx0XHQ8cGF0aFxyXG5cdFx0XHRcdFx0XHRkPVwiTTExLjU4MyAzLjU1NnYxMC42NjZjMCAuOTgyLS43OTUgMS43NzgtMS43NzcgMS43NzhIMi42OTRhMS43NzcgMS43NzcgMCAwMS0xLjc3Ny0xLjc3OFYzLjU1NmgxMC42NjZ6TTguNDczIDBsLjg4OC44ODloMy4xMTF2MS43NzhILjAyOFYuODg5aDMuMTFMNC4wMjkgMGg0LjQ0NHpcIlxyXG5cdFx0XHRcdFx0XHRmaWxsUnVsZT1cIm5vbnplcm9cIlxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L3N2Zz5cclxuXHRcdFx0PC9EZWxldGVCdXR0b24+XHJcblx0XHQ8L1dyYXBwZXI+XHJcblx0KTtcclxufTtcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZmllbGRzZXRgXHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWZsb3c6IHJvdztcclxuXHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0Z2FwOiAxNnB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdGdhcDogcmV2ZXJ0O1xyXG5cdFx0ZmxleC13cmFwOiByZXZlcnQ7XHJcblx0fVxyXG5gO1xyXG5cclxuLy8gSXRlbSBOYW1lIEZpZWxkXHJcbmNvbnN0IEl0ZW1OYW1lID0gc3R5bGVkKEZvcm1GaWVsZClgXHJcblx0bWluLXdpZHRoOiAzMDlweDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLnRhYmxldEFuZFVwfSB7XHJcblx0XHRtaW4td2lkdGg6IHJldmVydDtcclxuXHRcdHdpZHRoOiAyMTRweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMTZweDtcclxuXHR9XHJcbmA7XHJcblxyXG4vLyBRdWFuaXR5IEZpZWxkXHJcbmNvbnN0IFF1YW50aXR5ID0gc3R5bGVkKEZvcm1GaWVsZClgXHJcblx0bWF4LXdpZHRoOiA2NHB4O1xyXG5cdHNwYW4ge1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0aW5wdXQge1xyXG5cdFx0cGFkZGluZzogMDtcclxuXHRcdHBhZGRpbmctbGVmdDogMjBweDtcclxuXHR9XHJcblxyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdG1hcmdpbi1yaWdodDogMTZweDtcclxuXHRcdHdpZHRoOiA0NnB4O1xyXG5cclxuXHRcdGRpdiB7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlucHV0IHtcclxuXHRcdFx0cGFkZGluZzogMDtcclxuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuXHJcbi8vIFRvdGFsIERpc3BsYXkgKHN0eWxlZCB0byBsb29rIGxpa2UgZmllbGQpXHJcbmNvbnN0IFRvdGFsV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcblx0JHtib2R5VGV4dFN0eWxlfTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZmxvdzogY29sdW1uO1xyXG5cdGNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy5wcmltYXJ5WzNdfTtcclxuXHRtYXgtd2lkdGg6IDYwcHg7XHJcblxyXG5cdHNwYW4ge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHR9XHJcblxyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdC8qIG1heC13aWR0aDogNDVweDsgKi9cclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBUb3RhbFByaWNlID0gc3R5bGVkLnBgXHJcblx0JHtoNFRleHRTdHlsZX07XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGhlaWdodDogNDhweDtcclxuXHR3aWR0aDogOTBweDtcclxuXHRvdmVyZmxvdzogYXV0bztcclxuYDtcclxuXHJcbi8vIERlbGV0ZSBJdGVtIGJ1dHRvblxyXG5jb25zdCBEZWxldGVCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG5cdGhlaWdodDogNDhweDtcclxuXHRhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuXHRtYXJnaW4tbGVmdDogYXV0bztcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRzdmcge1xyXG5cdFx0ZmlsbDogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMuZ3JleVsxXX07XHJcblx0fVxyXG5cclxuXHQmOmhvdmVyIHtcclxuXHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHJcblx0XHRzdmcge1xyXG5cdFx0XHRmaWxsOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy53YXJuaW5nWzFdfTtcclxuXHRcdH1cclxuXHR9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEN1cnJlbmN5SW5wdXQgZnJvbSAncmVhY3QtY3VycmVuY3ktaW5wdXQtZmllbGQnO1xyXG5pbXBvcnQgeyBDb250cm9sbGVyLCB1c2VGb3JtQ29udGV4dCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgYm9keVRleHRTdHlsZSwgaDRUZXh0U3R5bGUgfSBmcm9tICdAL3N0eWxlcy90eXBvZ3JhcGh5JztcclxuXHJcbmludGVyZmFjZSBQcmljZUZpZWxkUHJvcHMge1xyXG5cdGZvcm1QcmljZVZhbHVlOiBudW1iZXI7XHJcblx0bmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUHJpY2VGaWVsZDogRkM8UHJpY2VGaWVsZFByb3BzPiA9ICh7IGZvcm1QcmljZVZhbHVlLCBuYW1lIH0pID0+IHtcclxuXHRjb25zdCB7IGNvbnRyb2wgfSA9IHVzZUZvcm1Db250ZXh0KCk7XHJcblx0Y29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCB1bmRlZmluZWQ+KCcwJyk7XHJcblxyXG5cdC8vIE9oIHRoZSBqb3lzIG9mIHdvcmtpbmcgd2l0aCBjdXJyZW5jeS4uLlxyXG5cdC8vIFNvIGVzc2VudGFpbGx5IHRoaXMgaW5wdXQgaXMgc2V0dGluZyB0aGUgZm9ybSBzdGF0ZSB2YWx1ZSBhcyBhIGZsb2F0IGluIGNlbnRzLCB3aGlsZVxyXG5cdC8vIG1hbmFnaW5nIHRoZSBsb2NhbCBzdGF0ZSBvZiBwcmljZSBpbnB1dCBhcyBhIHN0cmluZyBpbiBkb2xsYXJzIHdpdGggZGVjaW1hbHMgSSBoYXZlIG5vIGlkZWEgd2h5XHJcblx0Ly8gdGhlIHJlYWN0LWN1cnJlbmN5IGlucHV0IHdvbnQgYWNjcGV0IG9uIGNoYW5nZSB2YWx1ZXMgYXMgZmxvYXQncyBidXQgaXQgZG9lc24ndCBzbyBhbGFzIGhlcmUgd2UgYXJlLi5cclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdC8vIE9uIG1vdW50IGNvbnZlcnQgdGhlIHRoZSBzYXZlZCB2YWx1ZSBmcm9tIHZhbHVlIGZyb20gY2VudHMgYXMgYSBJTlQgdG8gdG8gZG9sbGFycyBhcyBzdHJpbmdcclxuXHRcdHNldFByaWNlKHBhcnNlRmxvYXQoKGZvcm1QcmljZVZhbHVlIC8gMTAwKS50b0ZpeGVkKDIpKS50b1N0cmluZygpKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8V3JhcHBlcj5cclxuXHRcdFx0PHNwYW4+UHJpY2U8L3NwYW4+XHJcblx0XHRcdDxDb250cm9sbGVyXHJcblx0XHRcdFx0Y29udHJvbD17Y29udHJvbH1cclxuXHRcdFx0XHRuYW1lPXtuYW1lfVxyXG5cdFx0XHRcdHJlbmRlcj17KHsgZmllbGQgfSkgPT4gKFxyXG5cdFx0XHRcdFx0PFByaWNlXHJcblx0XHRcdFx0XHRcdGFsbG93TmVnYXRpdmVWYWx1ZT17ZmFsc2V9XHJcblx0XHRcdFx0XHRcdGRlY2ltYWxTY2FsZT17Mn1cclxuXHRcdFx0XHRcdFx0aW50bENvbmZpZz17eyBsb2NhbGU6ICdlbi1VUycsIGN1cnJlbmN5OiAnVVNEJyB9fVxyXG5cdFx0XHRcdFx0XHRvblZhbHVlQ2hhbmdlPXsoZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChlID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdC8vIElmIGUgaXMgdW5kZWZpbmVkIHdlIHN0aWxsIG5lZWQgdG8gcGFzcyBpdCB0byB0aGUgY3VycmVuY3kgaW5wdXQgYXMgYSB2YWx1ZVxyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gdGhpcyBpcyB3aGF0IGxldHMgdXNlcnMgdHlwZSBpbiBudW1iZXJzIGFzIGRlY2ltYWxzLCBidXQgd2UgbWFrZSBzdXJlIHRvIHNldCB0aGUgZm9ybSB2YWx1ZSB0byAwIGluIGNhc2UgdGhleSBzdWJtaXRcclxuXHRcdFx0XHRcdFx0XHRcdC8vIHdpdGggbm8gcHJpY2VcclxuXHRcdFx0XHRcdFx0XHRcdGZpZWxkLm9uQ2hhbmdlKDApO1xyXG5cdFx0XHRcdFx0XHRcdFx0c2V0UHJpY2UoZSk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdGZpZWxkLm9uQ2hhbmdlKE1hdGgucm91bmQocGFyc2VGbG9hdChlKSAqIDEwMCkpO1xyXG5cdFx0XHRcdFx0XHRcdFx0c2V0UHJpY2UoZSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e2ZpZWxkLnZhbHVlIC8gMTAwfVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17cHJpY2V9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdC8+XHJcblx0XHQ8L1dyYXBwZXI+XHJcblx0KTtcclxufTtcclxuXHJcbi8vIFByaWNlIEZpZWxkXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG5cdCR7Ym9keVRleHRTdHlsZX07XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWZsb3c6IGNvbHVtbjtcclxuXHRjb2xvcjogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMucHJpbWFyeVszXX07XHJcblx0bWF4LXdpZHRoOiAxMDBweDtcclxuXHRzcGFuIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgUHJpY2UgPSBzdHlsZWQoQ3VycmVuY3lJbnB1dClgXHJcblx0JHtoNFRleHRTdHlsZX07XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHBhZGRpbmc6IDAgMTBweDtcclxuXHRtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcblx0aGVpZ2h0OiA0OHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRib3JkZXI6IHNvbGlkIDJweCAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy5ncmV5WzJdfTtcclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBoNFRleHRTdHlsZSB9IGZyb20gJ0Avc3R5bGVzL3R5cG9ncmFwaHknO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuXHRjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG5cdGxhYmVsOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBGb3JtU2VjdGlvbiA9ICh7IGNoaWxkcmVuLCBsYWJlbCB9OiBQcm9wcykgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8V3JhcHBlcj5cclxuXHRcdFx0PExhYmVsPntsYWJlbH08L0xhYmVsPlxyXG5cdFx0XHR7Y2hpbGRyZW59XHJcblx0XHQ8L1dyYXBwZXI+XHJcblx0KTtcclxufTtcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZmllbGRzZXRgXHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRnYXA6IDI0cHg7XHJcblx0ZmxleC1mbG93OiBjb2x1bW47XHJcblx0bWFyZ2luLXRvcDogMjRweDtcclxuYDtcclxuXHJcbmNvbnN0IExhYmVsID0gc3R5bGVkLmgzYFxyXG5cdCR7aDRUZXh0U3R5bGV9O1xyXG5cdGNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy5wcmltYXJ5WzFdfTtcclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IERpc3BhdGNoLCBGQywgU2V0U3RhdGVBY3Rpb24gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQC9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24nO1xyXG5pbXBvcnQgeyBJbnZvaWNlRmlsdGVyRHJvcGRvd24gfSBmcm9tICdAL2NvbXBvbmVudHMvRHJvcGRvd24vSW52b2ljZUZpbHRlckRyb3Bkb3duJztcclxuaW1wb3J0IHsgUG9zc2libGVTdGF0dXMgfSBmcm9tICdAL2NvbmZpZy9Qb3NzaWJsZVN0YXR1cyc7XHJcbmltcG9ydCB7IGJvZHlUZXh0U3R5bGUsIGgxVGV4dFN0eWxlLCBoMlRleHRTdHlsZSB9IGZyb20gJ0Avc3R5bGVzL3R5cG9ncmFwaHknO1xyXG5pbnRlcmZhY2UgSGVhZGVyUHJvcHMge1xyXG5cdGludm9pY2VDb3VudDogbnVtYmVyO1xyXG5cdHNldEZpbHRlcjogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248JycgfCBQb3NzaWJsZVN0YXR1cz4+O1xyXG5cdGZpbHRlcjogUG9zc2libGVTdGF0dXMgfCAnJztcclxufVxyXG5cclxuY29uc3QgZ2V0SW52b2ljZUNvdW50VGV4dCA9IChjb3VudDogbnVtYmVyKSA9PiB7XHJcblx0aWYgKGNvdW50IDw9IDApIHtcclxuXHRcdHJldHVybiAnTm8gaW52b2ljZXMnO1xyXG5cdH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcclxuXHRcdHJldHVybiAnVGhlcmUgaXMgMSBpbnZvaWNlJztcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuIGBUaGVyZSBhcmUgJHtjb3VudH0gaW52b2ljZXMuYDtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyOiBGQzxIZWFkZXJQcm9wcz4gPSAoeyBpbnZvaWNlQ291bnQsIHNldEZpbHRlciwgZmlsdGVyIH0pID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PFdyYXBwZXI+XHJcblx0XHRcdDxIZWFkaW5nV3JhcHBlcj5cclxuXHRcdFx0XHQ8SGVhZGluZz5JbnZvaWNlczwvSGVhZGluZz5cclxuXHRcdFx0XHQ8U3ViSGVhZGluZz57Z2V0SW52b2ljZUNvdW50VGV4dChpbnZvaWNlQ291bnQpfTwvU3ViSGVhZGluZz5cclxuXHRcdFx0PC9IZWFkaW5nV3JhcHBlcj5cclxuXHRcdFx0PFN0eWxlZERyb3Bkb3duIHNldERyb3Bkb3duVmFsdWU9e3NldEZpbHRlcn0gZmlsdGVyPXtmaWx0ZXJ9IC8+XHJcblx0XHRcdDxOZXdJbnZvaWNlQnV0dG9uIGljb249XCJwbHVzXCI+XHJcblx0XHRcdFx0TmV3Jm5ic3A7PHNwYW4+SW52b2ljZTwvc3Bhbj5cclxuXHRcdFx0PC9OZXdJbnZvaWNlQnV0dG9uPlxyXG5cdFx0PC9XcmFwcGVyPlxyXG5cdCk7XHJcbn07XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmhlYWRlcmBcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGdhcDogMThweDtcclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLnRhYmxldEFuZFVwfSB7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0Z2FwOiA0MHB4O1xyXG5cdH1cclxuYDtcclxuXHJcbmNvbnN0IEhlYWRpbmdXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuXHRtYXJnaW4tdG9wOiAycHg7XHJcblx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5gO1xyXG5cclxuY29uc3QgSGVhZGluZyA9IHN0eWxlZC5oMWBcclxuXHQke2gyVGV4dFN0eWxlfTtcclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLnRhYmxldEFuZFVwfSB7XHJcblx0XHQke2gxVGV4dFN0eWxlfTtcclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBTdWJIZWFkaW5nID0gc3R5bGVkLnBgXHJcblx0JHtib2R5VGV4dFN0eWxlfTtcclxuXHRtYXJnaW4tdG9wOiA0cHg7XHJcblx0Y29sb3I6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLmdyZXlbMV19O1xyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdG1hcmdpbi10b3A6IDhweDtcclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWREcm9wZG93biA9IHN0eWxlZChJbnZvaWNlRmlsdGVyRHJvcGRvd24pYFxyXG5cdG1hcmdpbi10b3A6IDE1cHg7XHJcblxyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdG1hcmdpbjogMHB4O1xyXG5cdH1cclxuYDtcclxuXHJcbmNvbnN0IE5ld0ludm9pY2VCdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBcclxuXHRzcGFuIHtcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLnRhYmxldEFuZFVwfSB7XHJcblx0XHRzcGFuIHtcclxuXHRcdFx0ZGlzcGxheTogcmV2ZXJ0O1xyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuIiwiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyBGQyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBTdGF0dXNCYWRnZSB9IGZyb20gJy4uL1N0YXR1c0JhZGdlL1N0YXR1c0JhZGdlJztcclxuXHJcbmltcG9ydCBpY29uQ2hldnJvblNyYyBmcm9tICdAL2ljb25zL2ljb24tYXJyb3ctcmlnaHQuc3ZnJztcclxuaW1wb3J0IHsgYm9keVRleHRTdHlsZSwgaDNUZXh0U3R5bGUsIGg0VGV4dFN0eWxlIH0gZnJvbSAnQC9zdHlsZXMvdHlwb2dyYXBoeSc7XHJcblxyXG5pbnRlcmZhY2UgSW52b2ljZUNhcmRQcm9wcyB7XHJcblx0aWQ6IHN0cmluZztcclxuXHRkdWVEYXRlOiBzdHJpbmc7XHJcblx0Y2xpZW50TmFtZTogc3RyaW5nO1xyXG5cdHRvdGFsOiBzdHJpbmc7XHJcblx0c3RhdHVzOiAnRHJhZnQnIHwgJ1BlbmRpbmcnIHwgJ1BhaWQnO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSW52b2ljZUNhcmQ6IEZDPEludm9pY2VDYXJkUHJvcHM+ID0gKHsgaWQsIGR1ZURhdGUsIGNsaWVudE5hbWUsIHRvdGFsLCBzdGF0dXMgfSkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8V3JhcHBlcj5cclxuXHRcdFx0PElkIGNsYXNzTmFtZT1cImlkXCI+XHJcblx0XHRcdFx0PHNwYW4+Izwvc3Bhbj5cclxuXHRcdFx0XHR7aWR9XHJcblx0XHRcdDwvSWQ+XHJcblx0XHRcdDxEdWVEYXRlPntkdWVEYXRlfTwvRHVlRGF0ZT5cclxuXHRcdFx0PENsaWVudE5hbWU+e2NsaWVudE5hbWV9PC9DbGllbnROYW1lPlxyXG5cdFx0XHQ8VG90YWw+e2AkYCArIHRvdGFsfTwvVG90YWw+XHJcblx0XHRcdDxTdGF0dXM+XHJcblx0XHRcdFx0PFN0YXR1c0JhZGdlIHN0YXR1cz17c3RhdHVzfSAvPlxyXG5cdFx0XHQ8L1N0YXR1cz5cclxuXHJcblx0XHRcdDxDaGV2cm9uV3JhcHBlcj5cclxuXHRcdFx0XHQ8SW1hZ2Ugc3JjPXtpY29uQ2hldnJvblNyY30gYWx0PVwiXCIgLz5cclxuXHRcdFx0PC9DaGV2cm9uV3JhcHBlcj5cclxuXHRcdDwvV3JhcHBlcj5cclxuXHQpO1xyXG59O1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5saWBcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcblx0Z2FwOiAwcHggMHB4O1xyXG5cdGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcblx0XHQnaWQgY2xpZW50LW5hbWUnXHJcblx0XHQnZHVlLWRhdGUgLidcclxuXHRcdCd0b3RhbCBzdGF0dXMnO1xyXG5cclxuXHRwYWRkaW5nOiAyNHB4O1xyXG5cclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy53aGl0ZX07XHJcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xyXG5cdGJveC1zaGFkb3c6IDBweCAxMHB4IDEwcHggLTEwcHggcmdiYSg3MiwgODQsIDE1OSwgMC4xMDAzOTcpO1xyXG5cclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLnRhYmxldEFuZFVwfSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGhlaWdodDogNzJweDtcclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBJZCA9IHN0eWxlZC5kaXZgXHJcblx0JHtoNFRleHRTdHlsZX07XHJcblx0Z3JpZC1hcmVhOiBpZDtcclxuXHJcblx0c3BhbiB7XHJcblx0XHRjb2xvcjogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMucHJpbWFyeVszXX07XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLnRhYmxldEFuZFVwfSB7XHJcblx0XHRmbGV4LWJhc2lzOiA4N3B4O1xyXG5cdH1cclxuXHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy5sYXB0b3BBbmRVcH0ge1xyXG5cdFx0ZmxleC1iYXNpczogMTAzcHg7XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgRHVlRGF0ZSA9IHN0eWxlZC5kaXZgXHJcblx0JHtib2R5VGV4dFN0eWxlfTtcclxuXHRncmlkLWFyZWE6IHRvdGFsO1xyXG5cdHBhZGRpbmctdG9wOiAyNHB4O1xyXG5cdHBhZGRpbmctYm90dG9tOiAyOHB4O1xyXG5cdGNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy5ncmV5WzFdfTtcclxuXHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0cGFkZGluZzogMHB4O1xyXG5cdFx0ZmxleC1iYXNpczogMTQzcHg7XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLmxhcHRvcEFuZFVwfSB7XHJcblx0XHRmbGV4LWJhc2lzOiAxNTFweDtcclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBUb3RhbCA9IHN0eWxlZC5kaXZgXHJcblx0JHtoM1RleHRTdHlsZX07XHJcblx0YWxpZ24tc2VsZjogZW5kO1xyXG5cdGdyaWQtYXJlYTogdG90YWw7XHJcblxyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdGZsZXgtYmFzaXM6IDExNnB4O1xyXG5cdFx0YWxpZ24tc2VsZjogcmV2ZXJ0O1xyXG5cdFx0dGV4dC1hbGlnbjogZW5kO1xyXG5cdH1cclxuXHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy5sYXB0b3BBbmRVcH0ge1xyXG5cdFx0ZmxleC1iYXNpczogMTQycHg7XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgQ2xpZW50TmFtZSA9IHN0eWxlZC5kaXZgXHJcblx0JHtib2R5VGV4dFN0eWxlfTtcclxuXHRncmlkLWFyZWE6IGNsaWVudC1uYW1lO1xyXG5cdGNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLkNPTE9SUy5ncmV5WzVdfTtcclxuXHR0ZXh0LWFsaWduOiBlbmQ7XHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHRcdHRleHQtYWxpZ246IHN0YXJ0O1xyXG5cdFx0ZmxleC1iYXNpczogMTEwcHg7XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLmxhcHRvcEFuZFVwfSB7XHJcblx0XHRmbGV4LWJhc2lzOiAxMTBweDtcclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBTdGF0dXMgPSBzdHlsZWQuZGl2YFxyXG5cdGdyaWQtYXJlYTogc3RhdHVzO1xyXG5cdGp1c3RpZnktc2VsZjogZW5kO1xyXG5cdGFsaWduLXNlbGY6IGVuZDtcclxuXHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLXNlbGY6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblx0XHRmbGV4LWJhc2lzOiAxNDRweDtcclxuXHR9XHJcblxyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMubGFwdG9wQW5kVXB9IHtcclxuXHRcdGZsZXgtYmFzaXM6IDE0NHB4O1xyXG5cdH1cclxuYDtcclxuXHJcbmNvbnN0IENoZXZyb25XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuXHRkaXNwbGF5OiBub25lO1xyXG5cclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLnRhYmxldEFuZFVwfSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHRcdGZsZXgtYmFzaXM6IDI2cHg7XHJcblx0fVxyXG5gO1xyXG4iLCJpbXBvcnQgeyBGQyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBFbXB0eVN0YXRlIH0gZnJvbSAnLi4vRW1wdHlTdGF0ZS9FbXB0eVN0YXRlJztcclxuXHJcbmV4cG9ydCBjb25zdCBJbnZvaWNlTGlzdENvbnRhaW5lcjogRkMgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblx0cmV0dXJuIDxXcmFwcGVyPntjaGlsZHJlbn08L1dyYXBwZXI+O1xyXG59O1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC51bGBcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZmxvdzogY29sdW1uO1xyXG5cdGdhcDogMTZweDtcclxuXHJcblx0bWFyZ2luLXRvcDogMzJweDtcclxuXHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy50YWJsZXRBbmRVcH0ge1xyXG5cdFx0bWFyZ2luLXRvcDogNTZweDtcclxuXHR9XHJcblxyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMubGFwdG9wQW5kVXB9IHtcclxuXHRcdG1hcmdpbi10b3A6IDY1cGFyeDtcclxuXHR9XHJcbmA7XHJcbiIsImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgRkMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IGljb25QZXJzb25TcmMgZnJvbSAnQC9pY29ucy9pY29uLXVzZXIuc3ZnJztcclxuXHJcbmludGVyZmFjZSBQcm9maWxlSW1nUHJvcHMge1xyXG5cdGNsYXNzTmFtZT86IHN0cmluZztcclxuXHRwcm9maWxlSW1nU3JjPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZmlsZUltZzogRkM8UHJvZmlsZUltZ1Byb3BzPiA9ICh7IGNsYXNzTmFtZSwgcHJvZmlsZUltZ1NyYyB9KSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxXcmFwcGVyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuXHRcdFx0e3Byb2ZpbGVJbWdTcmMgPyAoXHJcblx0XHRcdFx0PEltYWdlXHJcblx0XHRcdFx0XHRzcmM9e3Byb2ZpbGVJbWdTcmN9XHJcblx0XHRcdFx0XHRsYXlvdXQ9XCJmaXhlZFwiXHJcblx0XHRcdFx0XHRoZWlnaHQ9XCIzMlwiXHJcblx0XHRcdFx0XHR3aWR0aD1cIjMyXCJcclxuXHRcdFx0XHRcdGFsdD1cIllvdXIgcHJvZmlsZSBwaWN0dXJlXCJcclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQpIDogKFxyXG5cdFx0XHRcdDxFbXB0eVN0YXRlPlxyXG5cdFx0XHRcdFx0PEltYWdlIHNyYz17aWNvblBlcnNvblNyY30gYWx0PVwiWW91ciBwcm9maWxlIHBpY3R1cmVcIiAvPlxyXG5cdFx0XHRcdDwvRW1wdHlTdGF0ZT5cclxuXHRcdFx0KX1cclxuXHRcdDwvV3JhcHBlcj5cclxuXHQpO1xyXG59O1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgYDtcclxuXHJcbmNvbnN0IEVtcHR5U3RhdGUgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcblx0d2lkdGg6IDMycHg7XHJcblx0aGVpZ2h0OiAzMnB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLmdyZXlbMV19O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuYDtcclxuIiwiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyBGQyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBQcm9maWxlSW1nIH0gZnJvbSAnLi4vUHJvZmlsZUltZy9Qcm9maWxlSW1nJztcclxuaW1wb3J0IHsgVGhlbWVTd2l0Y2hlciB9IGZyb20gJy4uL1RoZW1lU3dpdGNoZXIvVGhlbWVTd2l0Y2hlcic7XHJcblxyXG5pbXBvcnQgbG9nb1NyYyBmcm9tICdAL2Fzc2V0cy9sb2dvLnN2Zyc7XHJcblxyXG5pbnRlcmZhY2UgU2lkZWJhclByb3BzIHtcclxuXHRjbGFzc05hbWU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTaWRlYmFyOiBGQzxTaWRlYmFyUHJvcHM+ID0gKHsgY2xhc3NOYW1lIH0pID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PFdyYXBwZXIgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxyXG5cdFx0XHQ8TG9nb1dyYXBwZXI+XHJcblx0XHRcdFx0PEltYWdlIHNyYz17bG9nb1NyY30gbGF5b3V0PVwiZmlsbFwiIGFsdD1cIlwiIC8+XHJcblx0XHRcdDwvTG9nb1dyYXBwZXI+XHJcblx0XHRcdDxTdHlsZWRUaGVtZVN3aXRjaGVyIC8+XHJcblx0XHRcdDxEaXZpZGVyIC8+XHJcblx0XHRcdDxQcm9maWxlSW1nIC8+XHJcblx0XHQ8L1dyYXBwZXI+XHJcblx0KTtcclxufTtcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuYXNpZGVgXHJcblx0ei1pbmRleDogMTA7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGdhcDogMjRweDtcclxuXHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiA3MnB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6IDMycHg7XHJcblxyXG5cdGJhY2tncm91bmQtY29sb3I6ICR7KHApID0+IHAudGhlbWUuQ09MT1JTLmRhcmtbNV19O1xyXG5cclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLnRhYmxldEFuZFVwfSB7XHJcblx0XHRoZWlnaHQ6IDgwcHg7XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLmxhcHRvcEFuZFVwfSB7XHJcblx0XHRmbGV4LWZsb3c6IGNvbHVtbjtcclxuXHRcdG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG5cdFx0d2lkdGg6IDEwM3B4O1xyXG5cdFx0cGFkZGluZy1yaWdodDogMDtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAyNHB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMHB4IDM1cHggMjBweCAwcHg7XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgTG9nb1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR3aWR0aDogNzJweDtcclxuXHRoZWlnaHQ6IDcycHg7XHJcblxyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdHdpZHRoOiA4MHB4O1xyXG5cdFx0aGVpZ2h0OiA4MHB4O1xyXG5cdH1cclxuXHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy5sYXB0b3BBbmRVcH0ge1xyXG5cdFx0d2lkdGg6IDEwM3B4O1xyXG5cdFx0aGVpZ2h0OiAxMDNweDtcclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRUaGVtZVN3aXRjaGVyID0gc3R5bGVkKFRoZW1lU3dpdGNoZXIpYFxyXG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLmxhcHRvcEFuZFVwfSB7XHJcblx0XHRtYXJnaW4tbGVmdDogcmV2ZXJ0O1xyXG5cdFx0bWFyZ2luLXRvcDogYXV0bztcclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBEaXZpZGVyID0gc3R5bGVkLmRpdmBcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0d2lkdGg6IDJweDtcclxuXHJcblx0YmFja2dyb3VuZC1jb2xvcjogJHsocCkgPT4gcC50aGVtZS5DT0xPUlMuZGFya1s2XX07XHJcblxyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMubGFwdG9wQW5kVXB9IHtcclxuXHRcdGhlaWdodDogMnB4O1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0fVxyXG5gO1xyXG4iLCJpbXBvcnQgeyBGQyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBQb3NzaWJsZVN0YXR1cyB9IGZyb20gJ2NvbmZpZy9Qb3NzaWJsZVN0YXR1cyc7XHJcblxyXG5pbXBvcnQgeyBDb2xvclZhcmlhbnRzVHlwZSB9IGZyb20gJy4uL0J1dHRvbi9CdXR0b24nO1xyXG5cclxuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICdAL3N0eWxlcy90aGVtZSc7XHJcbmltcG9ydCB7IGg0VGV4dFN0eWxlIH0gZnJvbSAnQC9zdHlsZXMvdHlwb2dyYXBoeSc7XHJcblxyXG5pbnRlcmZhY2UgU3RhdHVzUHJvcHMge1xyXG5cdHN0YXR1czogUG9zc2libGVTdGF0dXM7XHJcblx0Y2xhc3NOYW1lPzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBjb2xvclZhcmlhbnRzOiBDb2xvclZhcmlhbnRzVHlwZSA9IHtcclxuXHRQYWlkOiB7XHJcblx0XHRjb2xvcjogdGhlbWUuQ09MT1JTLnN1Y2Nlc3NbMV0sXHJcblx0XHRiYWNrZ3JvdW5kOiB0aGVtZS5DT0xPUlMuc3VjY2Vzc1syXSxcclxuXHR9LFxyXG5cdFBlbmRpbmc6IHtcclxuXHRcdGNvbG9yOiB0aGVtZS5DT0xPUlMuY2F1dGlvblsxXSxcclxuXHRcdGJhY2tncm91bmQ6IHRoZW1lLkNPTE9SUy5jYXV0aW9uWzJdLFxyXG5cdH0sXHJcblx0RHJhZnQ6IHtcclxuXHRcdGNvbG9yOiB0aGVtZS5DT0xPUlMuZGFya1s1XSxcclxuXHRcdGJhY2tncm91bmQ6IHRoZW1lLkNPTE9SUy5ncmV5WzZdLFxyXG5cdH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgU3RhdHVzQmFkZ2U6IEZDPFN0YXR1c1Byb3BzPiA9ICh7IHN0YXR1cywgY2xhc3NOYW1lIH0pID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PFdyYXBwZXIgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHN0YXR1cz17c3RhdHVzfT5cclxuXHRcdFx0PGRpdj48L2Rpdj5cclxuXHRcdFx0e3N0YXR1c31cclxuXHRcdDwvV3JhcHBlcj5cclxuXHQpO1xyXG59O1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXY8eyBzdGF0dXM6IHN0cmluZyB9PmBcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0JHtoNFRleHRTdHlsZX07XHJcblx0d2lkdGg6IDEwNHB4O1xyXG5cdGhlaWdodDogNDBweDtcclxuXHRib3JkZXItcmFkaXVzOiA2cHg7XHJcblx0Y29sb3I6ICR7KHsgc3RhdHVzIH0pID0+IGNvbG9yVmFyaWFudHNbc3RhdHVzXVsnY29sb3InXX07XHJcblx0YmFja2dyb3VuZC1jb2xvcjogJHsoeyBzdGF0dXMgfSkgPT4gY29sb3JWYXJpYW50c1tzdGF0dXNdWydiYWNrZ3JvdW5kJ119O1xyXG5cclxuXHRkaXYge1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRoZWlnaHQ6IDhweDtcclxuXHRcdHdpZHRoOiA4cHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDhweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICR7KHsgc3RhdHVzIH0pID0+IGNvbG9yVmFyaWFudHNbc3RhdHVzXVsnY29sb3InXX07XHJcblx0fVxyXG5gO1xyXG4iLCJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBpY29uTW9vblNyYyBmcm9tICdAL2ljb25zL2ljb24tbW9vbi5zdmcnO1xyXG5pbXBvcnQgaWNvblN1blNyYyBmcm9tICdAL2ljb25zL2ljb24tc3VuLnN2Zyc7XHJcblxyXG4vLyBXb3VsZCBsb3ZlIHRvIGhhdmUgc29tZSBmZWVkYmFjayBvbiBob3cgdG8gbWFrZSB0aGlzIGNvbXBvbmVudFxyXG4vLyBtb3JlIGFjY2Vzc2libGVcclxuXHJcbmludGVyZmFjZSBUaGVtZVN3aXRjaGVyUHJvcHMge1xyXG5cdGNsYXNzTmFtZT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRoZW1lU3dpdGNoZXI6IEZDPFRoZW1lU3dpdGNoZXJQcm9wcz4gPSAoeyBjbGFzc05hbWUgfSkgPT4ge1xyXG5cdGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUoJ2xpZ2h0Jyk7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxyXG5cdFx0XHR7dGhlbWUgPT09ICdsaWdodCcgPyAoXHJcblx0XHRcdFx0PEltYWdlIHNyYz17aWNvbk1vb25TcmN9IGFsdD1cIkEgbW9vbiBpY29uXCIgLz5cclxuXHRcdFx0KSA6IChcclxuXHRcdFx0XHQ8SW1hZ2Ugc3JjPXtpY29uU3VuU3JjfSBhbHQ9XCJBIHN1biBpY29uXCIgLz5cclxuXHRcdFx0KX1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcbiIsImltcG9ydCB7IEludm9pY2UgfSBmcm9tICdAL3R5cGVzL2luZGV4JztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0YWxWYWx1ZXM6IEludm9pY2UgPSB7XHJcblx0aWQ6ICcnLFxyXG5cdHN0YXR1czogJ0RyYWZ0JyxcclxuXHR1c2VyX3N0cmVldF9hZGRyZXNzOiAnJyxcclxuXHR1c2VyX2NpdHk6ICcnLFxyXG5cdHVzZXJfcG9zdF9jb2RlOiAnJyxcclxuXHR1c2VyX2NvdW50cnk6ICcnLFxyXG5cdGNsaWVudF9uYW1lOiAnJyxcclxuXHRjbGllbnRfZW1haWw6ICcnLFxyXG5cdGNsaWVudF9zdHJlZXRfYWRkcmVzczogJycsXHJcblx0Y2xpZW50X2NpdHk6ICcnLFxyXG5cdGNsaWVudF9wb3N0X2NvZGU6ICcnLFxyXG5cdGNsaWVudF9jb3VudHJ5OiAnJyxcclxuXHRpbnZvaWNlX2RhdGU6IG5ldyBEYXRlKCksXHJcblx0aW52b2ljZV9kdWVfZGF0ZTogbmV3IERhdGUoKSxcclxuXHRkZXNjcmlwdGlvbjogJycsXHJcblx0aW52b2ljZV9pdGVtczogW1xyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnQmFubmVyIERlc2lnbicsXHJcblx0XHRcdHF1YW50aXR5OiAxLFxyXG5cdFx0XHRwcmljZTogMTU2LjAsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnQmFubmVyIERlc2lnbicsXHJcblx0XHRcdHF1YW50aXR5OiAxLFxyXG5cdFx0XHRwcmljZTogMTU2LjAsXHJcblx0XHR9LFxyXG5cdF0sXHJcbn07XHJcbiIsIi8vIGltcG9ydCAqIGFzIHl1cCBmcm9tICd5dXAnO1xyXG5pbXBvcnQgeyBzdHJpbmcsIGFycmF5LCBkYXRlLCBvYmplY3QsIG51bWJlciB9IGZyb20gJ3l1cCc7XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybVNjaGVtYSA9IG9iamVjdCgpLnNoYXBlKHtcclxuXHR1c2VyX3N0cmVldF9hZGRyZXNzOiBzdHJpbmcoKS5yZXF1aXJlZCgnUmVxdWlyZWQnKSxcclxuXHR1c2VyX2NpdHk6IHN0cmluZygpLnJlcXVpcmVkKCdSZXF1aXJlZCcpLFxyXG5cdHVzZXJfcG9zdF9jb2RlOiBzdHJpbmcoKS5yZXF1aXJlZCgnUmVxdWlyZWQnKSxcclxuXHR1c2VyX2NvdW50cnk6IHN0cmluZygpLnJlcXVpcmVkKCdSZXF1aXJlZCcpLFxyXG5cdGNsaWVudF9uYW1lOiBzdHJpbmcoKS5yZXF1aXJlZCgnUmVxdWlyZWQnKSxcclxuXHRjbGllbnRfZW1haWw6IHN0cmluZygpLmVtYWlsKCdNdXN0IGJlIGEgdmFsaWQgZW1haWwnKS5yZXF1aXJlZCgnUmVxdWlyZWQnKSxcclxuXHRjbGllbnRfc3RyZWV0X2FkZHJlc3M6IHN0cmluZygpLnJlcXVpcmVkKCdSZXF1aXJlZCcpLFxyXG5cdGNsaWVudF9jaXR5OiBzdHJpbmcoKS5yZXF1aXJlZCgnUmVxdWlyZWQnKSxcclxuXHRjbGllbnRfcG9zdF9jb2RlOiBzdHJpbmcoKS5yZXF1aXJlZCgnUmVxdWlyZWQnKSxcclxuXHRjbGllbnRfY291bnRyeTogc3RyaW5nKCkucmVxdWlyZWQoJ1JlcXVpcmVkJyksXHJcblx0aW52b2ljZV9kYXRlOiBkYXRlKCkucmVxdWlyZWQoJ1JlcXVpcmVkJyksXHJcblx0aW52b2ljZV9kdWVfZGF0ZTogZGF0ZSgpLndoZW4oXHJcblx0XHQnaW52b2ljZV9kYXRlJyxcclxuXHRcdChpbnZvaWNlX2RhdGUsIHNjaGVtYSkgPT4gaW52b2ljZV9kYXRlICYmIHNjaGVtYS5taW4oaW52b2ljZV9kYXRlLCAnTXVzdCBiZSBhZnRlciBzdGFydCBkYXRlJylcclxuXHQpLFxyXG5cdGRlc2NyaXB0aW9uOiBzdHJpbmcoKS5yZXF1aXJlZCgnUmVxdWlyZWQnKSxcclxuXHRpbnZvaWNlX2l0ZW1zOiBhcnJheSgpXHJcblx0XHQub2YoXHJcblx0XHRcdG9iamVjdCgpLnNoYXBlKHtcclxuXHRcdFx0XHRuYW1lOiBzdHJpbmcoKS5yZXF1aXJlZCgnQSBJdGVtIE5hbWUgaXMgcmVxdWlyZWQuJyksXHJcblx0XHRcdFx0cXVhbnRpdHk6IG51bWJlcigpXHJcblx0XHRcdFx0XHQubnVsbGFibGUoKVxyXG5cdFx0XHRcdFx0LnRyYW5zZm9ybSgodiwgbykgPT4gKG8gPT09ICcnID8gbnVsbCA6IHYpKSxcclxuXHRcdFx0XHRwcmljZTogbnVtYmVyKClcclxuXHRcdFx0XHRcdC5udWxsYWJsZSgpXHJcblx0XHRcdFx0XHQudHJhbnNmb3JtKCh2LCBvKSA9PiAobyA9PT0gJycgPyBudWxsIDogdikpLFxyXG5cdFx0XHR9KVxyXG5cdFx0KVxyXG5cdFx0Lm1pbigxLCAnTXVzdCBoYXZlIGF0IGxlYXN0IDEgYmlsbGFibGUgaXRlbScpLFxyXG59KTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgRkMsIHVzZUVmZmVjdCwgdXNlUmVkdWNlciwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBkZW1vSW52b2ljZXNEYXRhIH0gZnJvbSAnZGF0YS9kZW1vJztcclxuXHJcbmltcG9ydCB7IEludm9pY2UgfSBmcm9tICcuLi90eXBlcyc7XHJcblxyXG5pbXBvcnQgeyBpbnZvaWNlUmVkdWNlciB9IGZyb20gJy4vaW52b2ljZVJlZHVjZXInO1xyXG5cclxudHlwZSBJbnZvaWNlc0NvbnRleHRTdGF0ZVR5cGUgPSB7XHJcblx0aW52b2ljZXM6IEludm9pY2VbXSB8IFtdO1xyXG5cdGFkZEludm9pY2U6IChpbnZvaWNlOiBJbnZvaWNlKSA9PiB2b2lkO1xyXG5cdGRlbGV0ZUludm9pY2U6IChpZDogc3RyaW5nKSA9PiB2b2lkO1xyXG5cdHVwZGF0ZUludm9pY2U6IChpbnZvaWNlOiBJbnZvaWNlKSA9PiB2b2lkO1xyXG59O1xyXG5cclxuLy8gQ29udGV4dFxyXG5leHBvcnQgY29uc3QgSW52b2ljZXNDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxJbnZvaWNlc0NvbnRleHRTdGF0ZVR5cGU+KHtcclxuXHRpbnZvaWNlczogW10sXHJcblx0YWRkSW52b2ljZTogKCkgPT4ge30sXHJcblx0ZGVsZXRlSW52b2ljZTogKCkgPT4ge30sXHJcblx0dXBkYXRlSW52b2ljZTogKCkgPT4ge30sXHJcbn0pO1xyXG5cclxuLy8gY29uc3QgaW5pdGFsU3RhdGUgPSB7XHJcbi8vIFx0aW52b2ljZXM6IFtdLFxyXG4vLyB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IEludm9pY2VzUHJvdmlkZXI6IEZDID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG5cdGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihpbnZvaWNlUmVkdWNlciwgW10pO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3QgbG9jYWxJbnZvaWNlcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ludm9pY2VzJykpO1xyXG5cdFx0Ly8gVE9ETzogQWRkIGNoZWNrIGZvciBkZW1vIGZsYWcgaGVyZVxyXG5cclxuXHRcdGlmIChsb2NhbEludm9pY2VzICE9PSBudWxsKSB7XHJcblx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ0FERCcsIHBheWxvYWQ6IGxvY2FsSW52b2ljZXMgfSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdBREQnLCBwYXlsb2FkOiBkZW1vSW52b2ljZXNEYXRhIH0pO1xyXG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW52b2ljZXMnLCBKU09OLnN0cmluZ2lmeShkZW1vSW52b2ljZXNEYXRhKSk7XHJcblx0XHR9XHJcblx0fSwgW10pO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ludm9pY2VzJywgSlNPTi5zdHJpbmdpZnkoc3RhdGUpKTtcclxuXHR9LCBbc3RhdGVdKTtcclxuXHJcblx0Ly8gVHVybiBkaXNwYXRjaCBhY3Rpb25zIGludG8gZnVuY3MgZm9yIGNvbnRleHQgdG8gbWFrZSB0aGluZ3MgZWFzaWVyIHRvIHVzZSBhbHNvIGVuc3VyZXMgdGhleSBhcmUgdHlwZWRcclxuXHRjb25zdCBhZGRJbnZvaWNlID0gKGludm9pY2U6IEludm9pY2UgfCBJbnZvaWNlW10pID0+IHtcclxuXHRcdGRpc3BhdGNoKHsgdHlwZTogJ0FERCcsIHBheWxvYWQ6IGludm9pY2UgfSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZGVsZXRlSW52b2ljZSA9IChpZDogc3RyaW5nKSA9PiB7XHJcblx0XHRkaXNwYXRjaCh7IHR5cGU6ICdERUxFVEUnLCBwYXlsb2FkOiBpZCB9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCB1cGRhdGVJbnZvaWNlID0gKGludm9pY2U6IEludm9pY2UpID0+IHtcclxuXHRcdGRpc3BhdGNoKHsgdHlwZTogJ1VQREFURScsIHBheWxvYWQ6IGludm9pY2UgfSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxJbnZvaWNlc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgaW52b2ljZXM6IHN0YXRlLCBhZGRJbnZvaWNlLCBkZWxldGVJbnZvaWNlLCB1cGRhdGVJbnZvaWNlIH19PlxyXG5cdFx0XHR7Y2hpbGRyZW59XHJcblx0XHQ8L0ludm9pY2VzQ29udGV4dC5Qcm92aWRlcj5cclxuXHQpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBJbnZvaWNlIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5cclxudHlwZSBJbnZvaWNlQWN0aW9ucyA9XHJcblx0fCB7IHR5cGU6ICdBREQnOyBwYXlsb2FkOiBJbnZvaWNlIHwgSW52b2ljZVtdIH1cclxuXHR8IHsgdHlwZTogJ0RFTEVURSc7IHBheWxvYWQ6IHN0cmluZyB9XHJcblx0fCB7IHR5cGU6ICdVUERBVEUnOyBwYXlsb2FkOiBJbnZvaWNlIH07XHJcblxyXG5leHBvcnQgY29uc3QgaW52b2ljZVJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbjogSW52b2ljZUFjdGlvbnMpID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlICdBREQnOlxyXG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShhY3Rpb24ucGF5bG9hZCkpIHtcclxuXHRcdFx0XHRyZXR1cm4gWy4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZF07XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIFsuLi5zdGF0ZSwgYWN0aW9uLnBheWxvYWRdO1xyXG5cdFx0XHR9XHJcblx0XHRjYXNlICdERUxFVEUnOlxyXG5cdFx0XHRyZXR1cm4gc3RhdGUuaW52b2ljZXMuZmlsdGVyKChpbnZvaWNlOiBJbnZvaWNlKSA9PiBpbnZvaWNlLmlkICE9PSBhY3Rpb24ucGF5bG9hZCk7XHJcblx0XHRjYXNlICdVUERBVEUnOlxyXG5cdFx0XHRyZXR1cm4gc3RhdGUubWFwKChpbnZvaWNlOiBJbnZvaWNlKSA9PiB7XHJcblx0XHRcdFx0aWYgKGludm9pY2UuaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gYWN0aW9uLnBheWxvYWQ7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHJldHVybiBpbnZvaWNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGFjdGlvbiB0eXBlJHthY3Rpb259YCk7XHJcblx0fVxyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgZGVtb0ludm9pY2VzRGF0YSA9IFtcclxuXHR7XHJcblx0XHRpZDogJ1JUMzA4MCcsXHJcblx0XHRpbnZvaWNlX2RhdGU6ICdUdWUgU2VwIDEgMjAwMicsXHJcblx0XHRpbnZvaWNlX2R1ZV9kYXRlOiAnVHVlIFNlcCAyMSAyMDIxJyxcclxuXHRcdGRlc2NyaXB0aW9uOiAnUmUtYnJhbmRpbmcnLFxyXG5cdFx0Y2xpZW50X25hbWU6ICdKZW5zZW4gSHVhbmcnLFxyXG5cdFx0Y2xpZW50X2VtYWlsOiAnamVuc2VuaEBtYWlsLmNvbScsXHJcblx0XHRzdGF0dXM6ICdQYWlkJyxcclxuXHRcdHVzZXJfc3RyZWV0X2FkZHJlc3M6ICcxOSBVbmlvbiBUZXJyYWNlJyxcclxuXHRcdHVzZXJfY2l0eTogJ0xvbmRvbicsXHJcblx0XHR1c2VyX3Bvc3RfY29kZTogJ0UxIDNFWicsXHJcblx0XHR1c2VyX2NvdW50cnk6ICdVbml0ZWQgS2luZ2RvbScsXHJcblx0XHRjbGllbnRfc3RyZWV0X2FkZHJlc3M6ICcxMDYgS2VuZGVsbCBTdHJlZXQnLFxyXG5cdFx0Y2xpZW50X2NpdHk6ICdTaGFycmluZ3RvbicsXHJcblx0XHRjbGllbnRfcG9zdF9jb2RlOiAnTlIyNCA1V1EnLFxyXG5cdFx0Y2xpZW50X2NvdW50cnk6ICdVbml0ZWQgS2luZ2RvbScsXHJcblx0XHRpbnZvaWNlX2l0ZW1zOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRuYW1lOiAnQnJhbmQgR3VpZGVsaW5lcycsXHJcblx0XHRcdFx0cXVhbnRpdHk6IDIsXHJcblx0XHRcdFx0cHJpY2U6IDUwMCxcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZDogJ1JUMzA4MHonLFxyXG5cdFx0aW52b2ljZV9kYXRlOiAnVHVlIFNlcCAxIDIwMjInLFxyXG5cdFx0aW52b2ljZV9kdWVfZGF0ZTogJ1R1ZSBTZXAgMjEgMjAyMScsXHJcblx0XHRkZXNjcmlwdGlvbjogJ0xvZ28gV29yaycsXHJcblx0XHRjbGllbnRfbmFtZTogJ0dhYmUgTmV3bCcsXHJcblx0XHRjbGllbnRfZW1haWw6ICdoYW1tZXJAbWFpbC5jb20nLFxyXG5cdFx0c3RhdHVzOiAnUGVuZGluZycsXHJcblx0XHR1c2VyX3N0cmVldF9hZGRyZXNzOiAnMzkgQ3JlcyBUZXJyYWNlJyxcclxuXHRcdHVzZXJfY2l0eTogJ1ZhbmNvdXZlcicsXHJcblx0XHR1c2VyX3Bvc3RfY29kZTogJ0UxIDNFWicsXHJcblx0XHR1c2VyX2NvdW50cnk6ICdDYW5hZGEnLFxyXG5cdFx0Y2xpZW50X3N0cmVldF9hZGRyZXNzOiAnMjYgR2F6IFN0cmVldCcsXHJcblx0XHRjbGllbnRfY2l0eTogJ0JsZW1kYWxlJyxcclxuXHRcdGNsaWVudF9wb3N0X2NvZGU6ICdOUjI0IDVXUScsXHJcblx0XHRjbGllbnRfY291bnRyeTogJ1VuaXRlZCBLaW5nZG9tJyxcclxuXHRcdGludm9pY2VfaXRlbXM6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG5hbWU6ICdCcmFuZCBHdWlkZWxpbmVzJyxcclxuXHRcdFx0XHRxdWFudGl0eTogMixcclxuXHRcdFx0XHRwcmljZTogMjUwLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bmFtZTogJ1dlYnNpdGUgV29yaycsXHJcblx0XHRcdFx0cXVhbnRpdHk6IDIsXHJcblx0XHRcdFx0cHJpY2U6IDUwMCxcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0fSxcclxuXTtcclxuIiwiaW1wb3J0IHsgRkMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgU2lkZWJhciB9IGZyb20gJ0AvY29tcG9uZW50cy9TaWRlYmFyL1NpZGViYXInO1xyXG5cclxuaW50ZXJmYWNlIFBhZ2VMYXlvdXRQcm9wcyB7XHJcblx0Y2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBhZ2VMYXlvdXQ6IEZDPFBhZ2VMYXlvdXRQcm9wcz4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxDb250YWluZXI+XHJcblx0XHRcdDxTaWRlYmFyIC8+XHJcblx0XHRcdDxXcmFwcGVyPntjaGlsZHJlbn08L1dyYXBwZXI+XHJcblx0XHQ8L0NvbnRhaW5lcj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZUxheW91dDtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWZsb3c6IGNvbHVtbjtcclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLmxhcHRvcEFuZFVwfSB7XHJcblx0XHRmbGV4LWZsb3c6IHJvdztcclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLm1haW5gXHJcblx0cGFkZGluZzogMCAyNHB4O1xyXG5cdG1hcmdpbi10b3A6IDMycHg7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLnRhYmxldEFuZFVwfSB7XHJcblx0XHRtYXJnaW46IDAgYXV0bztcclxuXHRcdG1hcmdpbi10b3A6IDU2cHg7XHJcblx0XHRwYWRkaW5nOiAwO1xyXG5cclxuXHRcdG1heC13aWR0aDogNjcycHg7XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgJHsocCkgPT4gcC50aGVtZS5RVUVSSUVTLmxhcHRvcEFuZFVwfSB7XHJcblx0XHRtYXgtd2lkdGg6IDczMHB4O1xyXG5cdFx0bWFyZ2luLXRvcDogNzJweDtcclxuXHR9XHJcbmA7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gSW1hZ2UxO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfaGVhZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvaGVhZFwiKSk7XG52YXIgX3RvQmFzZTY0ID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvdG8tYmFzZS02NFwiKTtcbnZhciBfaW1hZ2VDb25maWcgPSByZXF1aXJlKFwiLi4vc2VydmVyL2ltYWdlLWNvbmZpZ1wiKTtcbnZhciBfdXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBpZiAoa2V5IGluIG9iaikge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xufVxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgICBmb3IodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbihzeW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICAgIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHtcbiAgICB9O1xuICAgIHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgICB2YXIga2V5LCBpO1xuICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuICAgICAgICBmb3IoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICAgICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7XG4gICAgfTtcbiAgICB2YXIgdGFyZ2V0ID0ge1xuICAgIH07XG4gICAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgIHZhciBrZXksIGk7XG4gICAgZm9yKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5jb25zdCBsb2FkZWRJbWFnZVVSTHMgPSBuZXcgU2V0KCk7XG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBnbG9iYWwuX19ORVhUX0lNQUdFX0lNUE9SVEVEID0gdHJ1ZTtcbn1cbmNvbnN0IFZBTElEX0xPQURJTkdfVkFMVUVTID0gW1xuICAgICdsYXp5JyxcbiAgICAnZWFnZXInLFxuICAgIHVuZGVmaW5lZFxuXTtcbmNvbnN0IGxvYWRlcnMgPSBuZXcgTWFwKFtcbiAgICBbXG4gICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgZGVmYXVsdExvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnaW1naXgnLFxuICAgICAgICBpbWdpeExvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnY2xvdWRpbmFyeScsXG4gICAgICAgIGNsb3VkaW5hcnlMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2FrYW1haScsXG4gICAgICAgIGFrYW1haUxvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnY3VzdG9tJyxcbiAgICAgICAgY3VzdG9tTG9hZGVyXG4gICAgXSwgXG5dKTtcbmNvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVMgPSBbXG4gICAgJ2ZpbGwnLFxuICAgICdmaXhlZCcsXG4gICAgJ2ludHJpbnNpYycsXG4gICAgJ3Jlc3BvbnNpdmUnLFxuICAgIHVuZGVmaW5lZCwgXG5dO1xuZnVuY3Rpb24gaXNTdGF0aWNSZXF1aXJlKHNyYykge1xuICAgIHJldHVybiBzcmMuZGVmYXVsdCAhPT0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gaXNTdGF0aWNJbWFnZURhdGEoc3JjKSB7XG4gICAgcmV0dXJuIHNyYy5zcmMgIT09IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGlzU3RhdGljSW1wb3J0KHNyYykge1xuICAgIHJldHVybiB0eXBlb2Ygc3JjID09PSAnb2JqZWN0JyAmJiAoaXNTdGF0aWNSZXF1aXJlKHNyYykgfHwgaXNTdGF0aWNJbWFnZURhdGEoc3JjKSk7XG59XG5jb25zdCB7IGRldmljZVNpemVzOiBjb25maWdEZXZpY2VTaXplcyAsIGltYWdlU2l6ZXM6IGNvbmZpZ0ltYWdlU2l6ZXMgLCBsb2FkZXI6IGNvbmZpZ0xvYWRlciAsIHBhdGg6IGNvbmZpZ1BhdGggLCBkb21haW5zOiBjb25maWdEb21haW5zICwgIH0gPSBwcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUUyB8fCBfaW1hZ2VDb25maWcuaW1hZ2VDb25maWdEZWZhdWx0O1xuLy8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcyA9IFtcbiAgICAuLi5jb25maWdEZXZpY2VTaXplcyxcbiAgICAuLi5jb25maWdJbWFnZVNpemVzXG5dO1xuY29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSwgYik9PmEgLSBiXG4pO1xuYWxsU2l6ZXMuc29ydCgoYSwgYik9PmEgLSBiXG4pO1xuZnVuY3Rpb24gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKSB7XG4gICAgaWYgKHNpemVzICYmIChsYXlvdXQgPT09ICdmaWxsJyB8fCBsYXlvdXQgPT09ICdyZXNwb25zaXZlJykpIHtcbiAgICAgICAgLy8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbiAgICAgICAgY29uc3Qgdmlld3BvcnRXaWR0aFJlID0gLyhefFxccykoMT9cXGQ/XFxkKXZ3L2c7XG4gICAgICAgIGNvbnN0IHBlcmNlbnRTaXplcyA9IFtdO1xuICAgICAgICBmb3IobGV0IG1hdGNoOyBtYXRjaCA9IHZpZXdwb3J0V2lkdGhSZS5leGVjKHNpemVzKTsgbWF0Y2gpe1xuICAgICAgICAgICAgcGVyY2VudFNpemVzLnB1c2gocGFyc2VJbnQobWF0Y2hbMl0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGVyY2VudFNpemVzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3Qgc21hbGxlc3RSYXRpbyA9IE1hdGgubWluKC4uLnBlcmNlbnRTaXplcykgKiAwLjAxO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB3aWR0aHM6IGFsbFNpemVzLmZpbHRlcigocyk9PnMgPj0gY29uZmlnRGV2aWNlU2l6ZXNbMF0gKiBzbWFsbGVzdFJhdGlvXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoczogYWxsU2l6ZXMsXG4gICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicgfHwgbGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoczogY29uZmlnRGV2aWNlU2l6ZXMsXG4gICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgd2lkdGhzID0gW1xuICAgICAgICAuLi5uZXcgU2V0KC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4gICAgICAgIC8vID4gYXJlIGFjdHVhbGx5IDN4IGluIHRoZSBncmVlbiBjb2xvciwgYnV0IG9ubHkgMS41eCBpbiB0aGUgcmVkIGFuZFxuICAgICAgICAvLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbiAgICAgICAgLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2VcbiAgICAgICAgLy8gPiB0YWtlcyBzaWduaWZpY2FudGx5IG1vcmUgZGF0YS4gRXZlbiB0cnVlIDN4IHJlc29sdXRpb24gc2NyZWVucyBhcmVcbiAgICAgICAgLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuICAgICAgICAvLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbiAgICAgICAgLy8gaHR0cHM6Ly9ibG9nLnR3aXR0ZXIuY29tL2VuZ2luZWVyaW5nL2VuX3VzL3RvcGljcy9pbmZyYXN0cnVjdHVyZS8yMDE5L2NhcHBpbmctaW1hZ2UtZmlkZWxpdHktb24tdWx0cmEtaGlnaC1yZXNvbHV0aW9uLWRldmljZXMuaHRtbFxuICAgICAgICBbXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIHdpZHRoICogMiAvKiwgd2lkdGggKiAzKi8gXG4gICAgICAgIF0ubWFwKCh3KT0+YWxsU2l6ZXMuZmluZCgocCk9PnAgPj0gd1xuICAgICAgICAgICAgKSB8fCBhbGxTaXplc1thbGxTaXplcy5sZW5ndGggLSAxXVxuICAgICAgICApKSwgXG4gICAgXTtcbiAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aHMsXG4gICAgICAgIGtpbmQ6ICd4J1xuICAgIH07XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHsgc3JjICwgdW5vcHRpbWl6ZWQgLCBsYXlvdXQgLCB3aWR0aCAsIHF1YWxpdHkgLCBzaXplcyAsIGxvYWRlciAgfSkge1xuICAgIGlmICh1bm9wdGltaXplZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBzaXplczogdW5kZWZpbmVkXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHsgd2lkdGhzICwga2luZCAgfSA9IGdldFdpZHRocyh3aWR0aCwgbGF5b3V0LCBzaXplcyk7XG4gICAgY29uc3QgbGFzdCA9IHdpZHRocy5sZW5ndGggLSAxO1xuICAgIHJldHVybiB7XG4gICAgICAgIHNpemVzOiAhc2l6ZXMgJiYga2luZCA9PT0gJ3cnID8gJzEwMHZ3JyA6IHNpemVzLFxuICAgICAgICBzcmNTZXQ6IHdpZHRocy5tYXAoKHcsIGkpPT5gJHtsb2FkZXIoe1xuICAgICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgICBxdWFsaXR5LFxuICAgICAgICAgICAgICAgIHdpZHRoOiB3XG4gICAgICAgICAgICB9KX0gJHtraW5kID09PSAndycgPyB3IDogaSArIDF9JHtraW5kfWBcbiAgICAgICAgKS5qb2luKCcsICcpLFxuICAgICAgICAvLyBJdCdzIGludGVuZGVkIHRvIGtlZXAgYHNyY2AgdGhlIGxhc3QgYXR0cmlidXRlIGJlY2F1c2UgUmVhY3QgdXBkYXRlc1xuICAgICAgICAvLyBhdHRyaWJ1dGVzIGluIG9yZGVyLiBJZiB3ZSBrZWVwIGBzcmNgIHRoZSBmaXJzdCBvbmUsIFNhZmFyaSB3aWxsXG4gICAgICAgIC8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbiAgICAgICAgLy8gdXBkYXRlZCBieSBSZWFjdC4gVGhhdCBjYXVzZXMgbXVsdGlwbGUgdW5uZWNlc3NhcnkgcmVxdWVzdHMgaWYgYHNyY1NldGBcbiAgICAgICAgLy8gYW5kIGBzaXplc2AgYXJlIGRlZmluZWQuXG4gICAgICAgIC8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94LlxuICAgICAgICBzcmM6IGxvYWRlcih7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBxdWFsaXR5LFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoc1tsYXN0XVxuICAgICAgICB9KVxuICAgIH07XG59XG5mdW5jdGlvbiBnZXRJbnQoeCkge1xuICAgIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHgsIDEwKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wcykge1xuICAgIGNvbnN0IGxvYWQgPSBsb2FkZXJzLmdldChjb25maWdMb2FkZXIpO1xuICAgIGlmIChsb2FkKSB7XG4gICAgICAgIHJldHVybiBsb2FkKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgcm9vdDogY29uZmlnUGF0aFxuICAgICAgICB9LCBsb2FkZXJQcm9wcykpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke19pbWFnZUNvbmZpZy5WQUxJRF9MT0FERVJTLmpvaW4oJywgJyl9LiBSZWNlaXZlZDogJHtjb25maWdMb2FkZXJ9YCk7XG59XG4vLyBTZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzM5Nzc3ODMzLzI2NjUzNSBmb3Igd2h5IHdlIHVzZSB0aGlzIHJlZlxuLy8gaGFuZGxlciBpbnN0ZWFkIG9mIHRoZSBpbWcncyBvbkxvYWQgYXR0cmlidXRlLlxuZnVuY3Rpb24gaGFuZGxlTG9hZGluZyhpbWcsIHNyYywgbGF5b3V0LCBwbGFjZWhvbGRlciwgb25Mb2FkaW5nQ29tcGxldGUpIHtcbiAgICBpZiAoIWltZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZUxvYWQgPSAoKT0+e1xuICAgICAgICBpZiAoIWltZy5zcmMuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgICAgICAgICAgY29uc3QgcCA9ICdkZWNvZGUnIGluIGltZyA/IGltZy5kZWNvZGUoKSA6IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgcC5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgfSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgIGlmIChwbGFjZWhvbGRlciA9PT0gJ2JsdXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5maWx0ZXIgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbG9hZGVkSW1hZ2VVUkxzLmFkZChzcmMpO1xuICAgICAgICAgICAgICAgIGlmIChvbkxvYWRpbmdDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IG5hdHVyYWxXaWR0aCAsIG5hdHVyYWxIZWlnaHQgIH0gPSBpbWc7XG4gICAgICAgICAgICAgICAgICAgIC8vIFBhc3MgYmFjayByZWFkLW9ubHkgcHJpbWl0aXZlIHZhbHVlcyBidXQgbm90IHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyB1bmRlcmx5aW5nIERPTSBlbGVtZW50IGJlY2F1c2UgaXQgY291bGQgYmUgbWlzdXNlZC5cbiAgICAgICAgICAgICAgICAgICAgb25Mb2FkaW5nQ29tcGxldGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF0dXJhbFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmF0dXJhbEhlaWdodFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChyZWYgPSBpbWcucGFyZW50RWxlbWVudCkgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZ2V0Q29tcHV0ZWRTdHlsZShpbWcucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJyAmJiBwYXJlbnQuZGlzcGxheSA9PT0gJ2ZsZXgnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG1heSBub3QgcmVuZGVyIHByb3Blcmx5IGFzIGEgY2hpbGQgb2YgYSBmbGV4IGNvbnRhaW5lci4gQ29uc2lkZXIgd3JhcHBpbmcgdGhlIGltYWdlIHdpdGggYSBkaXYgdG8gY29uZmlndXJlIHRoZSB3aWR0aC5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZmlsbCcgJiYgcGFyZW50LnBvc2l0aW9uICE9PSAncmVsYXRpdmUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG1heSBub3QgcmVuZGVyIHByb3Blcmx5IHdpdGggYSBwYXJlbnQgdXNpbmcgcG9zaXRpb246XCIke3BhcmVudC5wb3NpdGlvbn1cIi4gQ29uc2lkZXIgY2hhbmdpbmcgdGhlIHBhcmVudCBzdHlsZSB0byBwb3NpdGlvbjpcInJlbGF0aXZlXCIgd2l0aCBhIHdpZHRoIGFuZCBoZWlnaHQuYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaWYgKGltZy5jb21wbGV0ZSkge1xuICAgICAgICAvLyBJZiB0aGUgcmVhbCBpbWFnZSBmYWlscyB0byBsb2FkLCB0aGlzIHdpbGwgc3RpbGwgcmVtb3ZlIHRoZSBwbGFjZWhvbGRlci5cbiAgICAgICAgLy8gVGhpcyBpcyB0aGUgZGVzaXJlZCBiZWhhdmlvciBmb3Igbm93LCBhbmQgd2lsbCBiZSByZXZpc2l0ZWQgd2hlbiBlcnJvclxuICAgICAgICAvLyBoYW5kbGluZyBpcyB3b3JrZWQgb24gZm9yIHRoZSBpbWFnZSBjb21wb25lbnQgaXRzZWxmLlxuICAgICAgICBoYW5kbGVMb2FkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW1nLm9ubG9hZCA9IGhhbmRsZUxvYWQ7XG4gICAgfVxufVxuZnVuY3Rpb24gSW1hZ2UxKF9wYXJhbSkge1xuICAgIHZhciB7IHNyYyAsIHNpemVzICwgdW5vcHRpbWl6ZWQgPWZhbHNlICwgcHJpb3JpdHkgPWZhbHNlICwgbG9hZGluZyAsIGxhenlCb3VuZGFyeSA9JzIwMHB4JyAsIGNsYXNzTmFtZSAsIHF1YWxpdHkgLCB3aWR0aCAsIGhlaWdodCAsIG9iamVjdEZpdCAsIG9iamVjdFBvc2l0aW9uICwgb25Mb2FkaW5nQ29tcGxldGUgLCBsb2FkZXIgPWRlZmF1bHRJbWFnZUxvYWRlciAsIHBsYWNlaG9sZGVyID0nZW1wdHknICwgYmx1ckRhdGFVUkwgIH0gPSBfcGFyYW0sIGFsbCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcGFyYW0sIFtcInNyY1wiLCBcInNpemVzXCIsIFwidW5vcHRpbWl6ZWRcIiwgXCJwcmlvcml0eVwiLCBcImxvYWRpbmdcIiwgXCJsYXp5Qm91bmRhcnlcIiwgXCJjbGFzc05hbWVcIiwgXCJxdWFsaXR5XCIsIFwid2lkdGhcIiwgXCJoZWlnaHRcIiwgXCJvYmplY3RGaXRcIiwgXCJvYmplY3RQb3NpdGlvblwiLCBcIm9uTG9hZGluZ0NvbXBsZXRlXCIsIFwibG9hZGVyXCIsIFwicGxhY2Vob2xkZXJcIiwgXCJibHVyRGF0YVVSTFwiXSk7XG4gICAgbGV0IHJlc3QgPSBhbGw7XG4gICAgbGV0IGxheW91dCA9IHNpemVzID8gJ3Jlc3BvbnNpdmUnIDogJ2ludHJpbnNpYyc7XG4gICAgaWYgKCdsYXlvdXQnIGluIHJlc3QpIHtcbiAgICAgICAgLy8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbiAgICAgICAgaWYgKHJlc3QubGF5b3V0KSBsYXlvdXQgPSByZXN0LmxheW91dDtcbiAgICAgICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgICAgICBkZWxldGUgcmVzdFsnbGF5b3V0J107XG4gICAgfVxuICAgIGxldCBzdGF0aWNTcmMgPSAnJztcbiAgICBpZiAoaXNTdGF0aWNJbXBvcnQoc3JjKSkge1xuICAgICAgICBjb25zdCBzdGF0aWNJbWFnZURhdGEgPSBpc1N0YXRpY1JlcXVpcmUoc3JjKSA/IHNyYy5kZWZhdWx0IDogc3JjO1xuICAgICAgICBpZiAoIXN0YXRpY0ltYWdlRGF0YS5zcmMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBzcmMuIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTtcbiAgICAgICAgfVxuICAgICAgICBibHVyRGF0YVVSTCA9IGJsdXJEYXRhVVJMIHx8IHN0YXRpY0ltYWdlRGF0YS5ibHVyRGF0YVVSTDtcbiAgICAgICAgc3RhdGljU3JjID0gc3RhdGljSW1hZ2VEYXRhLnNyYztcbiAgICAgICAgaWYgKCFsYXlvdXQgfHwgbGF5b3V0ICE9PSAnZmlsbCcpIHtcbiAgICAgICAgICAgIGhlaWdodCA9IGhlaWdodCB8fCBzdGF0aWNJbWFnZURhdGEuaGVpZ2h0O1xuICAgICAgICAgICAgd2lkdGggPSB3aWR0aCB8fCBzdGF0aWNJbWFnZURhdGEud2lkdGg7XG4gICAgICAgICAgICBpZiAoIXN0YXRpY0ltYWdlRGF0YS5oZWlnaHQgfHwgIXN0YXRpY0ltYWdlRGF0YS53aWR0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBoZWlnaHQgYW5kIHdpZHRoLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3JjID0gdHlwZW9mIHNyYyA9PT0gJ3N0cmluZycgPyBzcmMgOiBzdGF0aWNTcmM7XG4gICAgY29uc3Qgd2lkdGhJbnQgPSBnZXRJbnQod2lkdGgpO1xuICAgIGNvbnN0IGhlaWdodEludCA9IGdldEludChoZWlnaHQpO1xuICAgIGNvbnN0IHF1YWxpdHlJbnQgPSBnZXRJbnQocXVhbGl0eSk7XG4gICAgbGV0IGlzTGF6eSA9ICFwcmlvcml0eSAmJiAobG9hZGluZyA9PT0gJ2xhenknIHx8IHR5cGVvZiBsb2FkaW5nID09PSAndW5kZWZpbmVkJyk7XG4gICAgaWYgKHNyYy5zdGFydHNXaXRoKCdkYXRhOicpIHx8IHNyYy5zdGFydHNXaXRoKCdibG9iOicpKSB7XG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG4gICAgICAgIHVub3B0aW1pemVkID0gdHJ1ZTtcbiAgICAgICAgaXNMYXp5ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBsb2FkZWRJbWFnZVVSTHMuaGFzKHNyYykpIHtcbiAgICAgICAgaXNMYXp5ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHF1YWxpdHlcbiAgICAgICAgICAgIH0pfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghVkFMSURfTEFZT1VUX1ZBTFVFUy5pbmNsdWRlcyhsYXlvdXQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmIGlzTmFOKHdpZHRoSW50KSB8fCB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hTihoZWlnaHRJbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJ3aWR0aFwiIG9yIFwiaGVpZ2h0XCIgcHJvcGVydHkuIFRoZXNlIHNob3VsZCBiZSBudW1lcmljIHZhbHVlcy5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGF5b3V0ID09PSAnZmlsbCcgJiYgKHdpZHRoIHx8IGhlaWdodCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBhbmQgXCJsYXlvdXQ9J2ZpbGwnXCIgaGFzIHVudXNlZCBwcm9wZXJ0aWVzIGFzc2lnbmVkLiBQbGVhc2UgcmVtb3ZlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIi5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVZBTElEX0xPQURJTkdfVkFMVUVTLmluY2x1ZGVzKGxvYWRpbmcpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmlvcml0eSAmJiBsb2FkaW5nID09PSAnbGF6eScpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGxhY2Vob2xkZXIgPT09ICdibHVyJykge1xuICAgICAgICAgICAgaWYgKGxheW91dCAhPT0gJ2ZpbGwnICYmICh3aWR0aEludCB8fCAwKSAqIChoZWlnaHRJbnQgfHwgMCkgPCAxNjAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHNtYWxsZXIgdGhhbiA0MHg0MC4gQ29uc2lkZXIgcmVtb3ZpbmcgdGhlIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYmx1ckRhdGFVUkwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBWQUxJRF9CTFVSX0VYVCA9IFtcbiAgICAgICAgICAgICAgICAgICAgJ2pwZWcnLFxuICAgICAgICAgICAgICAgICAgICAncG5nJyxcbiAgICAgICAgICAgICAgICAgICAgJ3dlYnAnXG4gICAgICAgICAgICAgICAgXSAvLyBzaG91bGQgbWF0Y2ggbmV4dC1pbWFnZS1sb2FkZXJcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IGJ1dCBpcyBtaXNzaW5nIHRoZSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHkuXG4gICAgICAgICAgUG9zc2libGUgc29sdXRpb25zOlxuICAgICAgICAgICAgLSBBZGQgYSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHksIHRoZSBjb250ZW50cyBzaG91bGQgYmUgYSBzbWFsbCBEYXRhIFVSTCB0byByZXByZXNlbnQgdGhlIGltYWdlXG4gICAgICAgICAgICAtIENoYW5nZSB0aGUgXCJzcmNcIiBwcm9wZXJ0eSB0byBhIHN0YXRpYyBpbXBvcnQgd2l0aCBvbmUgb2YgdGhlIHN1cHBvcnRlZCBmaWxlIHR5cGVzOiAke1ZBTElEX0JMVVJfRVhULmpvaW4oJywnKX1cbiAgICAgICAgICAgIC0gUmVtb3ZlIHRoZSBcInBsYWNlaG9sZGVyXCIgcHJvcGVydHksIGVmZmVjdGl2ZWx5IG5vIGJsdXIgZWZmZWN0XG4gICAgICAgICAgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wbGFjZWhvbGRlci1ibHVyLWRhdGEtdXJsYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdyZWYnIGluIHJlc3QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyB1c2luZyB1bnN1cHBvcnRlZCBcInJlZlwiIHByb3BlcnR5LiBDb25zaWRlciB1c2luZyB0aGUgXCJvbkxvYWRpbmdDb21wbGV0ZVwiIHByb3BlcnR5IGluc3RlYWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdzdHlsZScgaW4gcmVzdCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHVzaW5nIHVuc3VwcG9ydGVkIFwic3R5bGVcIiBwcm9wZXJ0eS4gUGxlYXNlIHVzZSB0aGUgXCJjbGFzc05hbWVcIiBwcm9wZXJ0eSBpbnN0ZWFkLmApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKSArIDEwMDtcbiAgICAgICAgaWYgKCF1bm9wdGltaXplZCAmJiAhbG9hZGVyKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHdpZHRoOiByYW5kLFxuICAgICAgICAgICAgcXVhbGl0eTogNzVcbiAgICAgICAgfSkuaW5jbHVkZXMocmFuZC50b1N0cmluZygpKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBhIFwibG9hZGVyXCIgcHJvcGVydHkgdGhhdCBkb2VzIG5vdCBpbXBsZW1lbnQgd2lkdGguIFBsZWFzZSBpbXBsZW1lbnQgaXQgb3IgdXNlIHRoZSBcInVub3B0aW1pemVkXCIgcHJvcGVydHkgaW5zdGVhZC5gICsgYFxcblJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS1taXNzaW5nLWxvYWRlci13aWR0aGApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IFtzZXRSZWYsIGlzSW50ZXJzZWN0ZWRdID0gKDAsIF91c2VJbnRlcnNlY3Rpb24pLnVzZUludGVyc2VjdGlvbih7XG4gICAgICAgIHJvb3RNYXJnaW46IGxhenlCb3VuZGFyeSxcbiAgICAgICAgZGlzYWJsZWQ6ICFpc0xhenlcbiAgICB9KTtcbiAgICBjb25zdCBpc1Zpc2libGUgPSAhaXNMYXp5IHx8IGlzSW50ZXJzZWN0ZWQ7XG4gICAgbGV0IHdyYXBwZXJTdHlsZTtcbiAgICBsZXQgc2l6ZXJTdHlsZTtcbiAgICBsZXQgc2l6ZXJTdmc7XG4gICAgbGV0IGltZ1N0eWxlID0ge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIG9iamVjdEZpdCxcbiAgICAgICAgb2JqZWN0UG9zaXRpb25cbiAgICB9O1xuICAgIGNvbnN0IGJsdXJTdHlsZSA9IHBsYWNlaG9sZGVyID09PSAnYmx1cicgPyB7XG4gICAgICAgIGZpbHRlcjogJ2JsdXIoMjBweCknLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogb2JqZWN0Rml0IHx8ICdjb3ZlcicsXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChcIiR7Ymx1ckRhdGFVUkx9XCIpYCxcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBvYmplY3RQb3NpdGlvbiB8fCAnMCUgMCUnXG4gICAgfSA6IHtcbiAgICB9O1xuICAgIGlmIChsYXlvdXQgPT09ICdmaWxsJykge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbiAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuICAgICAgICBjb25zdCBxdW90aWVudCA9IGhlaWdodEludCAvIHdpZHRoSW50O1xuICAgICAgICBjb25zdCBwYWRkaW5nVG9wID0gaXNOYU4ocXVvdGllbnQpID8gJzEwMCUnIDogYCR7cXVvdGllbnQgKiAxMDB9JWA7XG4gICAgICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdpbnRyaW5zaWMnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJSdcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN2ZyA9IGA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gO1xuICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpeGVkJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodEludFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IGltZ0F0dHJpYnV0ZXMgPSB7XG4gICAgICAgIHNyYzogJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsXG4gICAgICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgICAgICBzaXplczogdW5kZWZpbmVkXG4gICAgfTtcbiAgICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgICAgIGltZ0F0dHJpYnV0ZXMgPSBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHVub3B0aW1pemVkLFxuICAgICAgICAgICAgbGF5b3V0LFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgICAgICAgIHNpemVzLFxuICAgICAgICAgICAgbG9hZGVyXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgc3JjU3RyaW5nID0gc3JjO1xuICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBzdHlsZTogd3JhcHBlclN0eWxlXG4gICAgfSwgc2l6ZXJTdHlsZSA/IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHN0eWxlOiBzaXplclN0eWxlXG4gICAgfSwgc2l6ZXJTdmcgPyAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgIHBhZGRpbmc6IDBcbiAgICAgICAgfSxcbiAgICAgICAgYWx0OiBcIlwiLFxuICAgICAgICBcImFyaWEtaGlkZGVuXCI6IHRydWUsXG4gICAgICAgIHNyYzogYGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHsoMCwgX3RvQmFzZTY0KS50b0Jhc2U2NChzaXplclN2Zyl9YFxuICAgIH0pIDogbnVsbCkgOiBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgfSwgcmVzdCwgaW1nQXR0cmlidXRlcywge1xuICAgICAgICBkZWNvZGluZzogXCJhc3luY1wiLFxuICAgICAgICBcImRhdGEtbmltZ1wiOiBsYXlvdXQsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICByZWY6IChpbWcpPT57XG4gICAgICAgICAgICBzZXRSZWYoaW1nKTtcbiAgICAgICAgICAgIGhhbmRsZUxvYWRpbmcoaW1nLCBzcmNTdHJpbmcsIGxheW91dCwgcGxhY2Vob2xkZXIsIG9uTG9hZGluZ0NvbXBsZXRlKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGU6IF9vYmplY3RTcHJlYWQoe1xuICAgICAgICB9LCBpbWdTdHlsZSwgYmx1clN0eWxlKVxuICAgIH0pKSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIiwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgIH0sIHJlc3QsIGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICBzcmMsXG4gICAgICAgIHVub3B0aW1pemVkLFxuICAgICAgICBsYXlvdXQsXG4gICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgICAgc2l6ZXMsXG4gICAgICAgIGxvYWRlclxuICAgIH0pLCB7XG4gICAgICAgIGRlY29kaW5nOiBcImFzeW5jXCIsXG4gICAgICAgIFwiZGF0YS1uaW1nXCI6IGxheW91dCxcbiAgICAgICAgc3R5bGU6IGltZ1N0eWxlLFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgbG9hZGluZzogbG9hZGluZyB8fCAnbGF6eSdcbiAgICB9KSkpLCBwcmlvcml0eSA/IC8vIE5vdGUgaG93IHdlIG9taXQgdGhlIGBocmVmYCBhdHRyaWJ1dGUsIGFzIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbiAgICAvLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbiAgICAvLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4gICAgLy9cbiAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbiAgICAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWQuZGVmYXVsdCwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XG4gICAgICAgIGtleTogJ19fbmltZy0nICsgaW1nQXR0cmlidXRlcy5zcmMgKyBpbWdBdHRyaWJ1dGVzLnNyY1NldCArIGltZ0F0dHJpYnV0ZXMuc2l6ZXMsXG4gICAgICAgIHJlbDogXCJwcmVsb2FkXCIsXG4gICAgICAgIGFzOiBcImltYWdlXCIsXG4gICAgICAgIGhyZWY6IGltZ0F0dHJpYnV0ZXMuc3JjU2V0ID8gdW5kZWZpbmVkIDogaW1nQXR0cmlidXRlcy5zcmMsXG4gICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlLlxuICAgICAgICBpbWFnZXNyY3NldDogaW1nQXR0cmlidXRlcy5zcmNTZXQsXG4gICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGUuXG4gICAgICAgIGltYWdlc2l6ZXM6IGltZ0F0dHJpYnV0ZXMuc2l6ZXNcbiAgICB9KSkgOiBudWxsKSk7XG59XG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjKSB7XG4gICAgcmV0dXJuIHNyY1swXSA9PT0gJy8nID8gc3JjLnNsaWNlKDEpIDogc3JjO1xufVxuZnVuY3Rpb24gaW1naXhMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgLy8gRGVtbzogaHR0cHM6Ly9zdGF0aWMuaW1naXgubmV0L2RhaXN5LnBuZz9hdXRvPWZvcm1hdCZmaXQ9bWF4Jnc9MzAwXG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9YCk7XG4gICAgY29uc3QgcGFyYW1zID0gdXJsLnNlYXJjaFBhcmFtcztcbiAgICBwYXJhbXMuc2V0KCdhdXRvJywgcGFyYW1zLmdldCgnYXV0bycpIHx8ICdmb3JtYXQnKTtcbiAgICBwYXJhbXMuc2V0KCdmaXQnLCBwYXJhbXMuZ2V0KCdmaXQnKSB8fCAnbWF4Jyk7XG4gICAgcGFyYW1zLnNldCgndycsIHBhcmFtcy5nZXQoJ3cnKSB8fCB3aWR0aC50b1N0cmluZygpKTtcbiAgICBpZiAocXVhbGl0eSkge1xuICAgICAgICBwYXJhbXMuc2V0KCdxJywgcXVhbGl0eS50b1N0cmluZygpKTtcbiAgICB9XG4gICAgcmV0dXJuIHVybC5ocmVmO1xufVxuZnVuY3Rpb24gYWthbWFpTG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICB9KSB7XG4gICAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWA7XG59XG5mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICwgcXVhbGl0eSAgfSkge1xuICAgIC8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG4gICAgY29uc3QgcGFyYW1zID0gW1xuICAgICAgICAnZl9hdXRvJyxcbiAgICAgICAgJ2NfbGltaXQnLFxuICAgICAgICAnd18nICsgd2lkdGgsXG4gICAgICAgICdxXycgKyAocXVhbGl0eSB8fCAnYXV0bycpXG4gICAgXTtcbiAgICBsZXQgcGFyYW1zU3RyaW5nID0gcGFyYW1zLmpvaW4oJywnKSArICcvJztcbiAgICByZXR1cm4gYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWA7XG59XG5mdW5jdGlvbiBjdXN0b21Mb2FkZXIoeyBzcmMgIH0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgbWlzc2luZyBcImxvYWRlclwiIHByb3AuYCArIGBcXG5SZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtbWlzc2luZy1sb2FkZXJgKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1ZhbHVlcyA9IFtdO1xuICAgICAgICAvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbiAgICAgICAgaWYgKCFzcmMpIG1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJyk7XG4gICAgICAgIGlmICghd2lkdGgpIG1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKTtcbiAgICAgICAgaWYgKG1pc3NpbmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbignLCAnKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICBxdWFsaXR5XG4gICAgICAgICAgICB9KX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJy8vJykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzcmMuc3RhcnRzV2l0aCgnLycpICYmIGNvbmZpZ0RvbWFpbnMpIHtcbiAgICAgICAgICAgIGxldCBwYXJzZWRTcmM7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHBhcnNlZFNyYyA9IG5ldyBVUkwoc3JjKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnICYmICFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmAgKyBgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBgJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIik7XG52YXIgX3JvdXRlcjEgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG52YXIgX3VzZUludGVyc2VjdGlvbiA9IHJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBwcmVmZXRjaGVkID0ge1xufTtcbmZ1bmN0aW9uIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuO1xuICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAgIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAgIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICAgIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycik9PntcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9IG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCkge1xuICAgIGNvbnN0IHsgdGFyZ2V0ICB9ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICByZXR1cm4gdGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJyB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyO1xufVxuZnVuY3Rpb24gbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpIHtcbiAgICBjb25zdCB7IG5vZGVOYW1lICB9ID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgICAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gICAgaWYgKHNjcm9sbCA9PSBudWxsICYmIGFzLmluZGV4T2YoJyMnKSA+PSAwKSB7XG4gICAgICAgIHNjcm9sbCA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICAgICAgc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBzY3JvbGxcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIExpbmsocHJvcHMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgaHJlZjogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzID0gT2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtcbiAgICAgICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSA9PSBudWxsIHx8IHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgYXM6IHRydWUsXG4gICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgICAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICAgICAgICBsb2NhbGU6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wcyA9IE9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7XG4gICAgICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldO1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdyZXBsYWNlJyB8fCBrZXkgPT09ICdzY3JvbGwnIHx8IGtleSA9PT0gJ3NoYWxsb3cnIHx8IGtleSA9PT0gJ3Bhc3NIcmVmJyB8fCBrZXkgPT09ICdwcmVmZXRjaCcpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgICAgICAgICAgY29uc3QgXyA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgICAgICBjb25zdCBoYXNXYXJuZWQgPSBfcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO1xuICAgICAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICAgICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZTtcbiAgICBjb25zdCByb3V0ZXIgPSAoMCwgX3JvdXRlcjEpLnVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHsgaHJlZiAsIGFzICB9ID0gX3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e1xuICAgICAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmhyZWYsIHRydWUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgICAgICAgYXM6IHByb3BzLmFzID8gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuYXMpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcbiAgICAgICAgfTtcbiAgICB9LCBbXG4gICAgICAgIHJvdXRlcixcbiAgICAgICAgcHJvcHMuaHJlZixcbiAgICAgICAgcHJvcHMuYXNcbiAgICBdKTtcbiAgICBsZXQgeyBjaGlsZHJlbiAsIHJlcGxhY2UgLCBzaGFsbG93ICwgc2Nyb2xsICwgbG9jYWxlICB9ID0gcHJvcHM7XG4gICAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY2hpbGRyZW4gPSAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIG51bGwsIGNoaWxkcmVuKTtcbiAgICB9XG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgbGV0IGNoaWxkO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE11bHRpcGxlIGNoaWxkcmVuIHdlcmUgcGFzc2VkIHRvIDxMaW5rPiB3aXRoIFxcYGhyZWZcXGAgb2YgXFxgJHtwcm9wcy5ocmVmfVxcYCBidXQgb25seSBvbmUgY2hpbGQgaXMgc3VwcG9ydGVkIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2xpbmstbXVsdGlwbGUtY2hpbGRyZW5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCIgXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZFJlZiA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmO1xuICAgIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSAoMCwgX3VzZUludGVyc2VjdGlvbikudXNlSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgcm9vdE1hcmdpbjogJzIwMHB4J1xuICAgIH0pO1xuICAgIGNvbnN0IHNldFJlZiA9IF9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtcbiAgICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbCk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBjaGlsZFJlZixcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmXG4gICAgXSk7XG4gICAgX3JlYWN0LmRlZmF1bHQudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZik7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV07XG4gICAgICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBhcyxcbiAgICAgICAgaHJlZixcbiAgICAgICAgaXNWaXNpYmxlLFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHAsXG4gICAgICAgIHJvdXRlclxuICAgIF0pO1xuICAgIGNvbnN0IGNoaWxkUHJvcHMgPSB7XG4gICAgICAgIHJlZjogc2V0UmVmLFxuICAgICAgICBvbkNsaWNrOiAoZSk9PntcbiAgICAgICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZSk9PntcbiAgICAgICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO1xuICAgICAgICB9XG4gICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgIHByaW9yaXR5OiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpIHtcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAgICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAgICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICAgICAgY29uc3QgbG9jYWxlRG9tYWluID0gcm91dGVyICYmIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJiAoMCwgX3JvdXRlcikuZ2V0RG9tYWluTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcywgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzKTtcbiAgICAgICAgY2hpbGRQcm9wcy5ocmVmID0gbG9jYWxlRG9tYWluIHx8ICgwLCBfcm91dGVyKS5hZGRCYXNlUGF0aCgoMCwgX3JvdXRlcikuYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpO1xuICAgIH1cbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpKTtcbn1cbnZhciBfZGVmYXVsdCA9IExpbms7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSB2b2lkIDA7XG5mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGg7XG59XG5jb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSCA/IChwYXRoKT0+e1xuICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCk7XG4gICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLyc7XG4gICAgfVxufSA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSBleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IHZvaWQgMDtcbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oY2IpIHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYih7XG4gICAgICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgMSk7XG59O1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaztcbmNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjayAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oaWQpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbn07XG5leHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IGNhbmNlbElkbGVDYWxsYmFjaztcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5tYXJrQXNzZXRFcnJvciA9IG1hcmtBc3NldEVycm9yO1xuZXhwb3J0cy5pc0Fzc2V0RXJyb3IgPSBpc0Fzc2V0RXJyb3I7XG5leHBvcnRzLmdldENsaWVudEJ1aWxkTWFuaWZlc3QgPSBnZXRDbGllbnRCdWlsZE1hbmlmZXN0O1xuZXhwb3J0cy5jcmVhdGVSb3V0ZUxvYWRlciA9IGNyZWF0ZVJvdXRlTG9hZGVyO1xudmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDA7XG5mdW5jdGlvbiB3aXRoRnV0dXJlKGtleSwgbWFwLCBnZW5lcmF0b3IpIHtcbiAgICBsZXQgZW50cnkgPSBtYXAuZ2V0KGtleSk7XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KTtcbiAgICB9XG4gICAgbGV0IHJlc29sdmVyO1xuICAgIGNvbnN0IHByb20gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgcmVzb2x2ZXIgPSByZXNvbHZlO1xuICAgIH0pO1xuICAgIG1hcC5zZXQoa2V5LCBlbnRyeSA9IHtcbiAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZXIsXG4gICAgICAgIGZ1dHVyZTogcHJvbVxuICAgIH0pO1xuICAgIHJldHVybiBnZW5lcmF0b3IgPyBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSk9PihyZXNvbHZlcih2YWx1ZSksIHZhbHVlKVxuICAgICkgOiBwcm9tO1xufVxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaykge1xuICAgIHRyeSB7XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIHJldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSB8fCBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmNvbnN0IGNhblByZWZldGNoID0gaGFzUHJlZmV0Y2goKTtcbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsIGFzLCBsaW5rKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaik9PntcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgICAgICBpZiAoYXMpIGxpbmsuYXMgPSBhcztcbiAgICAgICAgbGluay5yZWwgPSBgcHJlZmV0Y2hgO1xuICAgICAgICBsaW5rLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgbGluay5vbmxvYWQgPSByZXM7XG4gICAgICAgIGxpbmsub25lcnJvciA9IHJlajtcbiAgICAgICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICAgICAgbGluay5ocmVmID0gaHJlZjtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9KTtcbn1cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTtcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycikge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVycjtcbn1cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsIHNjcmlwdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAgICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgICAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmU7XG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gKCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuICAgICAgICA7XG4gICAgICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgICAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICAgICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAgICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgICAgIHNjcmlwdC5zcmMgPSBzcmM7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9KTtcbn1cbi8vIFdlIHdhaXQgZm9yIHBhZ2VzIHRvIGJlIGJ1aWx0IGluIGRldiBiZWZvcmUgd2Ugc3RhcnQgdGhlIHJvdXRlIHRyYW5zaXRpb25cbi8vIHRpbWVvdXQgdG8gcHJldmVudCBhbiB1bi1uZWNlc3NhcnkgaGFyZCBuYXZpZ2F0aW9uIGluIGRldmVsb3BtZW50LlxubGV0IGRldkJ1aWxkUHJvbWlzZTtcbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHAsIG1zLCBlcnIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBwLnRoZW4oKHIpPT57XG4gICAgICAgICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzb2x2ZShyKTtcbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgLy8gV2Ugd3JhcCB0aGVzZSBjaGVja3Mgc2VwYXJhdGVseSBmb3IgYmV0dGVyIGRlYWQtY29kZSBlbGltaW5hdGlvbiBpblxuICAgICAgICAvLyBwcm9kdWN0aW9uIGJ1bmRsZXMuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKGRldkJ1aWxkUHJvbWlzZSB8fCBQcm9taXNlLnJlc29sdmUoKSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgbXMpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIG1zKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpIHtcbiAgICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcbiAgICB9XG4gICAgY29uc3Qgb25CdWlsZE1hbmlmZXN0ID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICAgICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7XG4gICAgICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpPT57XG4gICAgICAgICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XG4gICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTtcbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgc2NyaXB0czogW1xuICAgICAgICAgICAgICAgIGFzc2V0UHJlZml4ICsgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArIGVuY29kZVVSSSgoMCwgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSkuZGVmYXVsdChyb3V0ZSwgJy5qcycpKSwgXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgICAgICAgY3NzOiBbXVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCk9PntcbiAgICAgICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcCgoZW50cnkpPT5hc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5qcycpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuY3NzJylcbiAgICAgICAgICAgIClcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KSB7XG4gICAgY29uc3QgZW50cnlwb2ludHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgbG9hZGVkU2NyaXB0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBzdHlsZVNoZWV0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCByb3V0ZXMgPSBuZXcgTWFwKCk7XG4gICAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYykge1xuICAgICAgICBsZXQgcHJvbSA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYyk7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCBwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpIHtcbiAgICAgICAgbGV0IHByb20gPSBzdHlsZVNoZWV0cy5nZXQoaHJlZik7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICBzdHlsZVNoZWV0cy5zZXQoaHJlZiwgcHJvbSA9IGZldGNoKGhyZWYpLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KT0+KHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGV4dFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2hlbkVudHJ5cG9pbnQgKHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVudHJ5cG9pbnQgKHJvdXRlLCBleGVjdXRlKSB7XG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSkudGhlbigoZm4pPT5mbigpXG4gICAgICAgICAgICApLnRoZW4oKGV4cG9ydHMpPT4oe1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0IHx8IGV4cG9ydHMsXG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLCAoZXJyKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLnRoZW4oKGlucHV0KT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dCk7XG4gICAgICAgICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZFJvdXRlIChyb3V0ZSwgcHJlZmV0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCByb3V0ZXMsICgpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVGaWxlc1Byb21pc2UgPSBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigoeyBzY3JpcHRzICwgY3NzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKSA/IFtdIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLCBcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbigoZW50cnlwb2ludCk9Pih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHJlc1sxXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGV2QnVpbGRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm91dGVGaWxlc1Byb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVGaWxlc1Byb21pc2UuZmluYWxseSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChyb3V0ZUZpbGVzUHJvbWlzZSwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKSkudGhlbigoeyBlbnRyeXBvaW50ICwgc3R5bGVzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogc3R5bGVzXG4gICAgICAgICAgICAgICAgICAgIH0sIGVudHJ5cG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlcztcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJlZmV0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJlZmV0Y2ggKHJvdXRlKSB7XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAgICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICAgICAgICBsZXQgY247XG4gICAgICAgICAgICBpZiAoY24gPSBuYXZpZ2F0b3IuY29ubmVjdGlvbikge1xuICAgICAgICAgICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICAgICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigob3V0cHV0KT0+UHJvbWlzZS5hbGwoY2FuUHJlZmV0Y2ggPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCk9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpXG4gICAgICAgICAgICAgICAgKSA6IFtdKVxuICAgICAgICAgICAgKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAgICgpPT57XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwid2l0aFJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3dpdGhSb3V0ZXIuZGVmYXVsdDtcbiAgICB9XG59KTtcbmV4cG9ydHMudXNlUm91dGVyID0gdXNlUm91dGVyO1xuZXhwb3J0cy5jcmVhdGVSb3V0ZXIgPSBjcmVhdGVSb3V0ZXI7XG5leHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSA9IG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKSk7XG52YXIgX3JvdXRlckNvbnRleHQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dFwiKTtcbnZhciBfd2l0aFJvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3Qgc2luZ2xldG9uUm91dGVyID0ge1xuICAgIHJvdXRlcjogbnVsbCxcbiAgICByZWFkeUNhbGxiYWNrczogW10sXG4gICAgcmVhZHkgKGNiKSB7XG4gICAgICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgICAncGF0aG5hbWUnLFxuICAgICdyb3V0ZScsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnYXNQYXRoJyxcbiAgICAnY29tcG9uZW50cycsXG4gICAgJ2lzRmFsbGJhY2snLFxuICAgICdiYXNlUGF0aCcsXG4gICAgJ2xvY2FsZScsXG4gICAgJ2xvY2FsZXMnLFxuICAgICdkZWZhdWx0TG9jYWxlJyxcbiAgICAnaXNSZWFkeScsXG4gICAgJ2lzUHJldmlldycsXG4gICAgJ2lzTG9jYWxlRG9tYWluJyxcbiAgICAnZG9tYWluTG9jYWxlcycsIFxuXTtcbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAgICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIFxuXTtcbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICAgJ3B1c2gnLFxuICAgICdyZXBsYWNlJyxcbiAgICAncmVsb2FkJyxcbiAgICAnYmFjaycsXG4gICAgJ3ByZWZldGNoJyxcbiAgICAnYmVmb3JlUG9wU3RhdGUnLCBcbl07XG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICAgIGdldCAoKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIH1cbn0pO1xudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuICAgIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAgIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAgIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXJbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKTtcbiAgICB9O1xufSk7XG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57XG4gICAgICAgIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtcbiAgICAgICAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXI7XG4gICAgICAgICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuZnVuY3Rpb24gZ2V0Um91dGVyKCkge1xuICAgIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICsgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxudmFyIF9kZWZhdWx0ID0gc2luZ2xldG9uUm91dGVyO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5mdW5jdGlvbiB1c2VSb3V0ZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoLi4uYXJncykge1xuICAgIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgX3JvdXRlci5kZWZhdWx0KC4uLmFyZ3MpO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYik9PmNiKClcbiAgICApO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdO1xuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxuZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcikge1xuICAgIGNvbnN0IF9yb3V0ZXIxID0gcm91dGVyO1xuICAgIGNvbnN0IGluc3RhbmNlID0ge1xuICAgIH07XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7XG4gICAgICAgIGlmICh0eXBlb2YgX3JvdXRlcjFbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXIxW3Byb3BlcnR5XSkgPyBbXSA6IHtcbiAgICAgICAgICAgIH0sIF9yb3V0ZXIxW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXIxW3Byb3BlcnR5XTtcbiAgICB9XG4gICAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICAgIGluc3RhbmNlLmV2ZW50cyA9IF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XG4gICAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICAgICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgICAgICByZXR1cm4gX3JvdXRlcjFbZmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy51c2VJbnRlcnNlY3Rpb24gPSB1c2VJbnRlcnNlY3Rpb247XG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHsgcm9vdE1hcmdpbiAsIGRpc2FibGVkICB9KSB7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtcbiAgICBjb25zdCB1bm9ic2VydmUgPSAoMCwgX3JlYWN0KS51c2VSZWYoKTtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSAoMCwgX3JlYWN0KS51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgc2V0UmVmID0gKDAsIF9yZWFjdCkudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KCk7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm47XG4gICAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoZWwsIChpc1Zpc2libGUpPT5pc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpXG4gICAgICAgICAgICAsIHtcbiAgICAgICAgICAgICAgICByb290TWFyZ2luXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgaXNEaXNhYmxlZCxcbiAgICAgICAgcm9vdE1hcmdpbixcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgICgwLCBfcmVhY3QpLnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFZpc2libGUodHJ1ZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKT0+KDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5jYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgIHJldHVybiBbXG4gICAgICAgIHNldFJlZixcbiAgICAgICAgdmlzaWJsZVxuICAgIF07XG59XG5mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyBpZCAsIG9ic2VydmVyICwgZWxlbWVudHMgIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKTtcbiAgICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpIHtcbiAgICAgICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XG4gICAgICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICAgICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpIHtcbiAgICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJztcbiAgICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKTtcbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcyk9PntcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSk9PntcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDA7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgb3B0aW9ucyk7XG4gICAgb2JzZXJ2ZXJzLnNldChpZCwgaW5zdGFuY2UgPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBvYnNlcnZlcixcbiAgICAgICAgZWxlbWVudHNcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB3aXRoUm91dGVyO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCkge1xuICAgIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKSB7XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgcm91dGVyOiAoMCwgX3JvdXRlcikudXNlUm91dGVyKClcbiAgICAgICAgfSwgcHJvcHMpKSk7XG4gICAgfVxuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICBXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBuYW1lID0gQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bic7XG4gICAgICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgO1xuICAgIH1cbiAgICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpdGgtcm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXREb21haW5Mb2NhbGUgPSBnZXREb21haW5Mb2NhbGU7XG5leHBvcnRzLmFkZExvY2FsZSA9IGFkZExvY2FsZTtcbmV4cG9ydHMuZGVsTG9jYWxlID0gZGVsTG9jYWxlO1xuZXhwb3J0cy5oYXNCYXNlUGF0aCA9IGhhc0Jhc2VQYXRoO1xuZXhwb3J0cy5hZGRCYXNlUGF0aCA9IGFkZEJhc2VQYXRoO1xuZXhwb3J0cy5kZWxCYXNlUGF0aCA9IGRlbEJhc2VQYXRoO1xuZXhwb3J0cy5pc0xvY2FsVVJMID0gaXNMb2NhbFVSTDtcbmV4cG9ydHMuaW50ZXJwb2xhdGVBcyA9IGludGVycG9sYXRlQXM7XG5leHBvcnRzLnJlc29sdmVIcmVmID0gcmVzb2x2ZUhyZWY7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2ggPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTtcbnZhciBfcm91dGVMb2FkZXIgPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTtcbnZhciBfZGVub3JtYWxpemVQYWdlUGF0aCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoXCIpO1xudmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoID0gcmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO1xudmFyIF9taXR0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7XG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIF9pc0R5bmFtaWMgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xudmFyIF9wYXJzZVJlbGF0aXZlVXJsID0gcmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO1xudmFyIF9xdWVyeXN0cmluZyA9IHJlcXVpcmUoXCIuL3V0aWxzL3F1ZXJ5c3RyaW5nXCIpO1xudmFyIF9yZXNvbHZlUmV3cml0ZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO1xudmFyIF9yb3V0ZU1hdGNoZXIgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xudmFyIF9yb3V0ZVJlZ2V4ID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlO1xuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlO1xufVxuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgICAgIGNhbmNlbGxlZDogdHJ1ZVxuICAgIH0pO1xufVxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpID8gcGF0aCA9PT0gJy8nID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YCA6IHBhdGg7XG59XG5mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCwgbG9jYWxlLCBsb2NhbGVzLCBkb21haW5Mb2NhbGVzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgbG9jYWxlID0gbG9jYWxlIHx8ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpO1xuICAgICAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgICAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGggfHwgJyd9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLCBsb2NhbGUsIGRlZmF1bHRMb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgJiYgcGF0aExvd2VyICE9PSAnLycgKyBsb2NhbGVMb3dlciA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKSA6IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGgsIGxvY2FsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiAocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpIHx8IHBhdGhMb3dlciA9PT0gJy8nICsgbG9jYWxlTG93ZXIpID8gKHBhdGhuYW1lLmxlbmd0aCA9PT0gbG9jYWxlLmxlbmd0aCArIDEgPyAnLycgOiAnJykgKyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoKSB7XG4gICAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpO1xuICAgIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpO1xuICAgIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpO1xufVxuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gICAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpO1xufVxuZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7XG4gICAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWA7XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCkge1xuICAgIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpIHx8IHVybC5zdGFydHNXaXRoKCc/JykpIHJldHVybiB0cnVlO1xuICAgIHRyeSB7XG4gICAgICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgICAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KSB7XG4gICAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJyc7XG4gICAgY29uc3QgZHluYW1pY1JlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3VwcztcbiAgICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9IC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHwgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5O1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gcm91dGU7XG4gICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7XG4gICAgaWYgKCFwYXJhbXMuZXZlcnkoKHBhcmFtKT0+e1xuICAgICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJyc7XG4gICAgICAgIGNvbnN0IHsgcmVwZWF0ICwgb3B0aW9uYWwgIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXTtcbiAgICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYDtcbiAgICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFtcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPSBpbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLCByZXBlYXQgPyB2YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAoc2VnbWVudCk9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICApLmpvaW4oJy8nKSA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpIHx8ICcvJyk7XG4gICAgfSkpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuICAgICAgICA7XG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXJhbXMsXG4gICAgICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGVcbiAgICB9O1xufVxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpIHtcbiAgICBjb25zdCBmaWx0ZXJlZFF1ZXJ5ID0ge1xuICAgIH07XG4gICAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJlZFF1ZXJ5O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLCBocmVmLCByZXNvbHZlQXMpIHtcbiAgICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICAgIGxldCBiYXNlO1xuICAgIGxldCB1cmxBc1N0cmluZyA9IHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKTtcbiAgICAvLyByZXBlYXRlZCBzbGFzaGVzIGFuZCBiYWNrc2xhc2hlcyBpbiB0aGUgVVJMIGFyZSBjb25zaWRlcmVkXG4gICAgLy8gaW52YWxpZCBhbmQgd2lsbCBuZXZlciBtYXRjaCBhIE5leHQuanMgcGFnZS9maWxlXG4gICAgY29uc3QgdXJsUHJvdG9NYXRjaCA9IHVybEFzU3RyaW5nLm1hdGNoKC9eW2EtekEtWl17MSx9OlxcL1xcLy8pO1xuICAgIGNvbnN0IHVybEFzU3RyaW5nTm9Qcm90byA9IHVybFByb3RvTWF0Y2ggPyB1cmxBc1N0cmluZy5zdWJzdHIodXJsUHJvdG9NYXRjaFswXS5sZW5ndGgpIDogdXJsQXNTdHJpbmc7XG4gICAgY29uc3QgdXJsUGFydHMgPSB1cmxBc1N0cmluZ05vUHJvdG8uc3BsaXQoJz8nKTtcbiAgICBpZiAoKHVybFBhcnRzWzBdIHx8ICcnKS5tYXRjaCgvKFxcL1xcL3xcXFxcKS8pKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gbmV4dC9yb3V0ZXI6ICR7dXJsQXNTdHJpbmd9LCByZXBlYXRlZCBmb3J3YXJkLXNsYXNoZXMgKC8vKSBvciBiYWNrc2xhc2hlcyBcXFxcIGFyZSBub3QgdmFsaWQgaW4gdGhlIGhyZWZgKTtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFVybCA9ICgwLCBfdXRpbHMpLm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyh1cmxBc1N0cmluZ05vUHJvdG8pO1xuICAgICAgICB1cmxBc1N0cmluZyA9ICh1cmxQcm90b01hdGNoID8gdXJsUHJvdG9NYXRjaFswXSA6ICcnKSArIG5vcm1hbGl6ZWRVcmw7XG4gICAgfVxuICAgIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgdXJsQXNTdHJpbmdcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBiYXNlID0gbmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJykgPyByb3V0ZXIuYXNQYXRoIDogcm91dGVyLnBhdGhuYW1lLCAnaHR0cDovL24nKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIC8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKCcvJywgJ2h0dHA6Ly9uJyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSk7XG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSk7XG4gICAgICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnO1xuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJiBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiYgcmVzb2x2ZUFzKSB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9ICgwLCBfcXVlcnlzdHJpbmcpLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKTtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVzdWx0ICwgcGFyYW1zICB9ID0gaW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSwgZmluYWxVcmwucGF0aG5hbWUsIHF1ZXJ5KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW4gPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpIDogZmluYWxVcmwuaHJlZjtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHJlc29sdmVkSHJlZixcbiAgICAgICAgICAgIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICBdIDogcmVzb2x2ZWRIcmVmO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG59XG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpIHtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybDtcbn1cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsIHVybCwgYXMpIHtcbiAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlciwgdXJsLCB0cnVlKTtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO1xuICAgIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO1xuICAgIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzO1xuICAgIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7XG4gICAgY29uc3QgcHJlcGFyZWRBcyA9IGFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLCBhcykpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWY7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICAgICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKSB7XG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goKDAsIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoKS5kZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lKSk7XG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhuYW1lO1xuICAgIH1cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpPT57XG4gICAgICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhZ2UpICYmICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUgPSBwYWdlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpO1xufVxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPSBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiYgISFmdW5jdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgdiA9ICdfX25leHQnO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlO1xuICAgIH0gY2F0Y2ggKG4pIHtcbiAgICB9XG59KCk7XG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO1xuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyKSB7XG4gICAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnIpPT57XG4gICAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgICAvLyBsb29wLlxuICAgICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgICAgICAoMCwgX3JvdXRlTG9hZGVyKS5tYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cbmNsYXNzIFJvdXRlciB7XG4gICAgY29uc3RydWN0b3IocGF0aG5hbWUxLCBxdWVyeTEsIGFzMSwgeyBpbml0aWFsUHJvcHMgLCBwYWdlTG9hZGVyICwgQXBwICwgd3JhcEFwcCAsIENvbXBvbmVudDogQ29tcG9uZW50MSAsIGVycjogZXJyMSAsIHN1YnNjcmlwdGlvbiAsIGlzRmFsbGJhY2sgLCBsb2NhbGUgLCBsb2NhbGVzICwgZGVmYXVsdExvY2FsZSAsIGRvbWFpbkxvY2FsZXMgLCBpc1ByZXZpZXcgIH0pe1xuICAgICAgICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICAgICAgICB0aGlzLnNkYyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgICAgICAgdGhpcy5zZHIgPSB7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2lkeCA9IDA7XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKT0+e1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBmb3JjZWRTY3JvbGw7XG4gICAgICAgICAgICBjb25zdCB7IHVybCAsIGFzOiBhczEgLCBvcHRpb25zICwgaWR4ICB9ID0gc3RhdGU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VsZi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faWR4ID0gaWR4O1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICB9ID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMxID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZTEgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzMSwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgICAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgIH0pLCBmb3JjZWRTY3JvbGwpO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICAgICAgdGhpcy5yb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyOiBlcnIxLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1BcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgICAgICAgQ29tcG9uZW50OiBBcHAsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogW11cbiAgICAgICAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWUxO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnkxO1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9ICgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYXRobmFtZTEpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUxIDogYXMxO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICB0aGlzLmlzUmVhZHkgPSAhIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5hcHBHaXAgJiYgIXNlbGYuX19ORVhUX0RBVEFfXy5nc3AgfHwgIWF1dG9FeHBvcnREeW5hbWljICYmICFzZWxmLmxvY2F0aW9uLnNlYXJjaCAmJiAhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7XG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXc7XG4gICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzO1xuICAgICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMxLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IGFzMSAhPT0gcGF0aG5hbWUxO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcbiAgICAgICAgICAgICAgICB9KSwgKDAsIF91dGlscykuZ2V0VVJMKCksIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqLyBiYWNrKCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcHVzaCh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqLyByZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGFzeW5jIGNoYW5nZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMsIGZvcmNlZFNjcm9sbCkge1xuICAgICAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWYgPSB1cmwgPT09IGFzIHx8IG9wdGlvbnMuX2ggfHwgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7XG4gICAgICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgICAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICAgICAgaWYgKG9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJldkxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UgPyB0aGlzLmRlZmF1bHRMb2NhbGUgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKTtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCgoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgoaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsIHRoaXMubG9jYWxlcykucGF0aG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVmO1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgICAgICAgICBpZiAoISgocmVmID0gdGhpcy5sb2NhbGVzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZi5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUodGhpcy5kb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgICAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgICAgICAgICBpZiAoIWRpZE5hdmlnYXRlICYmIGRldGVjdGVkRG9tYWluICYmIHRoaXMuaXNMb2NhbGVEb21haW4gJiYgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJyl9YDtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgICAgaWYgKF91dGlscy5TVCkge1xuICAgICAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHNoYWxsb3cgPWZhbHNlICB9ID0gb3B0aW9ucztcbiAgICAgICAgY29uc3Qgcm91dGVQcm9wcyA9IHtcbiAgICAgICAgICAgIHNoYWxsb3dcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgICAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIGFzID0gYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLCBvcHRpb25zLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSk7XG4gICAgICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgdGhpcy5sb2NhbGUpO1xuICAgICAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXM7XG4gICAgICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBwcmV2TG9jYWxlICE9PSB0aGlzLmxvY2FsZTtcbiAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbCk7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSBwYXJzZWQ7XG4gICAgICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAgICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgICAgIGxldCBwYWdlcywgcmV3cml0ZXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgICAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgfVxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgICAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXM7XG4gICAgICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAgICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgICAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgICAgICBwYXRobmFtZTEgPSBwYXRobmFtZTEgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lMSkpIDogcGF0aG5hbWUxO1xuICAgICAgICBpZiAoc2hvdWxkUmVzb2x2ZUhyZWYgJiYgcGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBxdWVyeTEsIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aDtcbiAgICAgICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZTEsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICsgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpO1xuICAgICAgICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWU7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkxKSA6IHtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKChwYXJhbSk9PiFxdWVyeTFbcGFyYW1dXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7c2hvdWxkSW50ZXJwb2xhdGUgPyBgSW50ZXJwb2xhdGluZyBocmVmYCA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgKyBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYCA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICsgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZSA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJyA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcyd9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgfSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTEsIGludGVycG9sYXRlZEFzLnBhcmFtcylcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeTEsIHJvdXRlTWF0Y2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciByZWYsIHJlZjE7XG4gICAgICAgICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICBsZXQgeyBlcnJvciAsIHByb3BzICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgICAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5wYWdlUHJvcHMgJiYgcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsICwgYXM6IG5ld0FzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIGRlc3RpbmF0aW9uLCBkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFVztcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGU7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsIG5vdEZvdW5kUm91dGUsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWxsb3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9IGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiYgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuX2ggJiYgcGF0aG5hbWUxID09PSAnL19lcnJvcicgJiYgKChyZWYgPSBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKHJlZjEgPSByZWYucGFnZVByb3BzKSA9PT0gbnVsbCB8fCByZWYxID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYxLnN0YXR1c0NvZGUpID09PSA1MDAgJiYgKHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5wYWdlUHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgICAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZTtcbiAgICAgICAgICAgIHZhciBfc2Nyb2xsO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkU2Nyb2xsID0gKF9zY3JvbGwgPSBvcHRpb25zLnNjcm9sbCkgIT09IG51bGwgJiYgX3Njcm9sbCAhPT0gdm9pZCAwID8gX3Njcm9sbCA6ICFpc1ZhbGlkU2hhbGxvd1JvdXRlO1xuICAgICAgICAgICAgY29uc3QgcmVzZXRTY3JvbGwgPSBzaG91bGRTY3JvbGwgPyB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICB9IDogbnVsbDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgY2xlYW5lZEFzLCByb3V0ZUluZm8sIGZvcmNlZFNjcm9sbCAhPT0gbnVsbCAmJiBmb3JjZWRTY3JvbGwgIT09IHZvaWQgMCA/IGZvcmNlZFNjcm9sbCA6IHJlc2V0U2Nyb2xsKS5jYXRjaCgoZSk9PntcbiAgICAgICAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZTtcbiAgICAgICAgICAgICAgICBlbHNlIHRocm93IGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgaWYgKGVycjEuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCAoMCwgX3V0aWxzKS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3c7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMVxuICAgICAgICAgICAgfSwgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgICAgICcnLCBhcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgX3JvdXRlTG9hZGVyKS5pc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgQ29tcG9uZW50MTtcbiAgICAgICAgICAgIGxldCBzdHlsZVNoZWV0cztcbiAgICAgICAgICAgIGxldCBwcm9wcztcbiAgICAgICAgICAgIGlmICh0eXBlb2YgQ29tcG9uZW50MSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHN0eWxlU2hlZXRzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICh7IHBhZ2U6IENvbXBvbmVudDEgLCBzdHlsZVNoZWV0cyAgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSB7XG4gICAgICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mbyA/IHVuZGVmaW5lZCA6IGV4aXN0aW5nUm91dGVJbmZvO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvID8gY2FjaGVkUm91dGVJbmZvIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1BcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBDb21wb25lbnQxICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlICB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQxKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRhdGFIcmVmO1xuICAgICAgICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICAgICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgfSksIHJlc29sdmVkQXMsIF9fTl9TU0csIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRyA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIDogX19OX1NTUCA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlczogdGhpcy5sb2NhbGVzLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TG9jYWxlOiB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKGVycjIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycjIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi8gYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGlmIChoYXNoID09PSAnJyB8fCBoYXNoID09PSAndG9wJykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcbiAgICAgICAgaWYgKGlkRWwpIHtcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO1xuICAgICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cmxJc05ldyhhc1BhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovIGFzeW5jIHByZWZldGNoKHVybCwgYXNQYXRoID0gdXJsLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgbGV0IHBhcnNlZCA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUyICB9ID0gcGFyc2VkO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZTIsIHRoaXMubG9jYWxlcykucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgbGV0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGFzUGF0aCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgICAgICBhc1BhdGggPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhc1BhdGg7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzUGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGxldCByZXdyaXRlcztcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBwYXJzZWQucXVlcnksIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTIpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMik7XG4gICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZyk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNTc2cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZih1cmwsIHJlc29sdmVkQXMsIHRydWUsIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHRoaXMubG9jYWxlKSkgOiBmYWxzZTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLCBcbiAgICAgICAgXSk7XG4gICAgfVxuICAgIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gdGhpcy5jbGMgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIyID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7XG4gICAgICAgICAgICAgICAgZXJyMi5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmICF0aGlzLmlzUHJldmlldyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGE7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogcmVzb3VyY2VLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pLmNhdGNoKChlcnIyKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcDEgIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcDEpO1xuICAgICAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWU7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzKS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcDEsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHhcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcywgcm91dGVQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQsIHJlc2V0U2Nyb2xsKTtcbiAgICB9XG59XG5Sb3V0ZXIuZXZlbnRzID0gKDAsIF9taXR0KS5kZWZhdWx0KCk7XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgSW52b2ljZXNDb250ZXh0IH0gZnJvbSAnY29udGV4dC9JbnZvaWNlc0NvbnRleHQnO1xyXG5cclxuaW1wb3J0IHsgUG9zc2libGVTdGF0dXMgfSBmcm9tICcuLi9jb25maWcvUG9zc2libGVTdGF0dXMnO1xyXG5pbXBvcnQgeyBkZW1vSW52b2ljZXNEYXRhIH0gZnJvbSAnLi4vZGF0YS9kZW1vJztcclxuaW1wb3J0IHsgSW52b2ljZSB9IGZyb20gJy4uL3R5cGVzJztcclxuXHJcbmltcG9ydCB7IERyYXdlciB9IGZyb20gJ0AvY29tcG9uZW50cy9EcmF3ZXInO1xyXG5pbXBvcnQgeyBFbXB0eVN0YXRlIH0gZnJvbSAnQC9jb21wb25lbnRzL0VtcHR5U3RhdGUnO1xyXG5pbXBvcnQgeyBFZGl0SW52b2ljZUZvcm0gfSBmcm9tICdAL2NvbXBvbmVudHMvRm9ybS9FZGl0SW52b2ljZUZvcm0nO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvSG9tZSc7XHJcbmltcG9ydCB7IEludm9pY2VDYXJkIH0gZnJvbSAnQC9jb21wb25lbnRzL0ludm9pY2VDYXJkL0ludm9pY2VDYXJkJztcclxuaW1wb3J0IHsgSW52b2ljZUxpc3RDb250YWluZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvSW52b2ljZUxpc3RDb250YWluZXIvSW52b2ljZUxpc3RDb250YWluZXInO1xyXG5pbXBvcnQgUGFnZUxheW91dCBmcm9tICdAL2xheW91dHMvUGFnZUxheW91dCc7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZUludm9pY2VUb3RhbCB9IGZyb20gJ0AvdXRpbHMvY2FsY3VsYXRlVG90YWwnO1xyXG5cclxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcblx0Y29uc3QgeyBpbnZvaWNlcywgYWRkSW52b2ljZSB9ID0gdXNlQ29udGV4dChJbnZvaWNlc0NvbnRleHQpO1xyXG5cdGNvbnN0IFtmaWx0ZXIsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZTxQb3NzaWJsZVN0YXR1cyB8ICcnPignJyk7XHJcblx0Y29uc3QgW2ZpbHRlcmVkSW52b2ljZXMsIHNldEZpbHRlcmVkSW52b2ljZXNdID0gdXNlU3RhdGUoaW52b2ljZXMpO1xyXG5cdGNvbnN0IFtpc0RyYXdlck9wZW4sIHNldERyYXdlck9wZW5dID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpZiAoZmlsdGVyID09PSAnRHJhZnQnICYmIGludm9pY2VzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0c2V0RmlsdGVyZWRJbnZvaWNlcyhpbnZvaWNlcy5maWx0ZXIoKGludm9pY2UpID0+IGludm9pY2Uuc3RhdHVzID09PSBmaWx0ZXIpKTtcclxuXHRcdH0gZWxzZSBpZiAoZmlsdGVyID09PSAnUGVuZGluZycpIHtcclxuXHRcdFx0c2V0RmlsdGVyZWRJbnZvaWNlcyhpbnZvaWNlcy5maWx0ZXIoKGludm9pY2UpID0+IGludm9pY2Uuc3RhdHVzID09PSBmaWx0ZXIpKTtcclxuXHRcdH0gZWxzZSBpZiAoZmlsdGVyID09PSAnUGFpZCcpIHtcclxuXHRcdFx0c2V0RmlsdGVyZWRJbnZvaWNlcyhpbnZvaWNlcy5maWx0ZXIoKGludm9pY2UpID0+IGludm9pY2Uuc3RhdHVzID09PSBmaWx0ZXIpKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNldEZpbHRlcmVkSW52b2ljZXMoaW52b2ljZXMpO1xyXG5cdFx0fVxyXG5cdH0sIFtmaWx0ZXIsIGludm9pY2VzXSk7XHJcblxyXG5cdGNvbnNvbGUubG9nKGludm9pY2VzKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxEcmF3ZXJcclxuXHRcdFx0XHRpc0RyYXdlck9wZW49e2lzRHJhd2VyT3Blbn1cclxuXHRcdFx0XHRzZXREcmF3ZXJPcGVuPXtzZXREcmF3ZXJPcGVufVxyXG5cdFx0XHRcdGFyaWFMYWJlbD1cIkludm9pY2UgRWRpdGluZyBGb3JtIE1vZGFsXCJcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxFZGl0SW52b2ljZUZvcm0gc2V0RHJhd2VyT3Blbj17c2V0RHJhd2VyT3Blbn0gLz5cclxuXHRcdFx0PC9EcmF3ZXI+XHJcblx0XHRcdDxQYWdlTGF5b3V0PlxyXG5cdFx0XHRcdDxIZWFkZXIgaW52b2ljZUNvdW50PXtpbnZvaWNlcy5sZW5ndGggPz8gMH0gc2V0RmlsdGVyPXtzZXRGaWx0ZXJ9IGZpbHRlcj17ZmlsdGVyfSAvPlxyXG5cdFx0XHRcdDxJbnZvaWNlTGlzdENvbnRhaW5lcj5cclxuXHRcdFx0XHRcdHtmaWx0ZXJlZEludm9pY2VzLmxlbmd0aCA+IDAgPyAoXHJcblx0XHRcdFx0XHRcdGZpbHRlcmVkSW52b2ljZXMubWFwKChpbnZvaWNlOiBJbnZvaWNlKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PExpbmsga2V5PXtpbnZvaWNlLmlkfSBocmVmPXtgL2ludm9pY2UvJHtpbnZvaWNlLmlkfWB9IHBhc3NIcmVmPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGE+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxJbnZvaWNlQ2FyZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlkPXtpbnZvaWNlLmlkfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGR1ZURhdGU9e2ludm9pY2UuaW52b2ljZV9kYXRlIGFzIHN0cmluZ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGllbnROYW1lPXtpbnZvaWNlLmNsaWVudF9uYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0YXR1cz17aW52b2ljZS5zdGF0dXN9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dG90YWw9e2NhbGN1bGF0ZUludm9pY2VUb3RhbChpbnZvaWNlLmludm9pY2VfaXRlbXMpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0KSlcclxuXHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0XHQ8U3R5bGVkRW1wdHlTdGF0ZVxyXG5cdFx0XHRcdFx0XHRcdFx0aGVhZGluZz1cIlRoZXJlIGlzIG5vdGhpbmcgaGVyZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRlcnJvck1lc3NhZ2U9XCJDcmVhdGUgYSBuZXcgaW52b2ljZSBieSBjbGlja2luZyB0aGVcclxuXHRcdFx0XHRcdE5ldyBJbnZvaWNlIGJ1dHRvbiBhbmQgZ2V0IHN0YXJ0ZWRcIlxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdDwvSW52b2ljZUxpc3RDb250YWluZXI+XHJcblx0XHRcdDwvUGFnZUxheW91dD5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5jb25zdCBTdHlsZWRFbXB0eVN0YXRlID0gc3R5bGVkKEVtcHR5U3RhdGUpYFxyXG5cdG1hcmdpbi10b3A6IDcxcHg7XHJcblxyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdG1hcmdpbi10b3A6IDE1NHB4O1xyXG5cdH1cclxuXHJcblx0QG1lZGlhICR7KHApID0+IHAudGhlbWUuUVVFUklFUy5sYXB0b3BBbmRVcH0ge1xyXG5cdFx0bWFyZ2luLXRvcDogNzZweDtcclxuXHR9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iLCIvLyBDb25zdGFudHNcclxuZXhwb3J0IGNvbnN0IEJSRUFLUE9JTlRTID0ge1xyXG5cdHBob25lOiA1MDAsXHJcblx0dGFibGV0OiA3NjgsXHJcblx0bGFwdG9wOiAxMTEwLFxyXG5cdHhsOiAxNDQwLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHRoZW1lID0ge1xyXG5cdENPTE9SUzoge1xyXG5cdFx0cHJpbWFyeToge1xyXG5cdFx0XHQxOiAnIzdDNURGQScsXHJcblx0XHRcdDI6ICcjOTI3N0ZGJyxcclxuXHRcdFx0MzogJyM3RTg4QzMnLFxyXG5cdFx0fSxcclxuXHRcdGRhcms6IHtcclxuXHRcdFx0MTogJyMwQzBFMTYnLFxyXG5cdFx0XHQyOiAnIzE0MTYyNScsXHJcblx0XHRcdDM6ICcjMUUyMTM5JyxcclxuXHRcdFx0NDogJyMyNTI5NDUnLFxyXG5cdFx0XHQ1OiAnIzM3M0I1MycsXHJcblx0XHRcdDY6ICcjNDk0RTZFJyxcclxuXHRcdH0sXHJcblx0XHRncmV5OiB7XHJcblx0XHRcdDE6ICcjODg4RUIwJyxcclxuXHRcdFx0MjogJyNERkUzRkEnLFxyXG5cdFx0XHQzOiAnI0Y4RjhGQicsXHJcblx0XHRcdDQ6ICcjRjlGQUZFJyxcclxuXHRcdFx0NTogJyM4NThCQjInLFxyXG5cdFx0XHQ2OiAnI0YzRjNGNScsXHJcblx0XHRcdDc6ICcjNzc3Rjk4JyxcclxuXHRcdH0sXHJcblx0XHRzdWNjZXNzOiB7XHJcblx0XHRcdDE6ICcjMzNENjlGJyxcclxuXHRcdFx0MjogJyNGM0ZDRjknLFxyXG5cdFx0fSxcclxuXHRcdGNhdXRpb246IHtcclxuXHRcdFx0MTogJyNGRjhGMDAnLFxyXG5cdFx0XHQyOiAnI0ZGRjhGMCcsXHJcblx0XHR9LFxyXG5cdFx0d2FybmluZzoge1xyXG5cdFx0XHQxOiAnI0VDNTc1NycsXHJcblx0XHRcdDI6ICcjRkY5Nzk3JyxcclxuXHRcdH0sXHJcblx0XHR3aGl0ZTogJyNmZmYnLFxyXG5cdH0sXHJcblx0Rk9OVF9GQU1JTFk6IHtcclxuXHRcdGhlYWRlcjogXCInU3BhcnRhbicsIHNhbnMtc2VyaWZcIixcclxuXHRcdGJvZHk6IFwiJ1NwYXJ0YW4nLCBzYW5zLXNlcmlmXCIsXHJcblx0XHRlcnJvcjogXCInU3BhcnRhbicsIHNhbnMtc2VyaWZcIixcclxuXHR9LFxyXG5cdEZPTlRfU0laRVM6IHtcclxuXHRcdGgxOiBgJHszMiAvIDE2fXJlbWAsXHJcblx0XHRoMjogYCR7MjAgLyAxNn1yZW1gLFxyXG5cdFx0aDM6IGAkezE2IC8gMTZ9cmVtYCxcclxuXHRcdGg0OiBgJHsxMiAvIDE2fXJlbWAsXHJcblx0XHRib2R5OiBgJHsxMiAvIDE2fXJlbWAsXHJcblx0XHRib2R5MjogYCR7MTEgLyAxNn1yZW1gLFxyXG5cdFx0Zm9ybUgxOiBgJHsyNCAvIDE2fXJlbWAsXHJcblx0XHRmb3JtSXRlbUxpc3RIMTogYCR7MTggLyAxNn1yZW1gLFxyXG5cdFx0Zm9ybUVycm9yOiBgJHsxMCAvIDE2fXJlbWAsXHJcblx0fSxcclxuXHRXRUlHSFRTOiB7XHJcblx0XHRtZWRpdW06IDUwMCxcclxuXHRcdHNlbWlCb2xkOiA2MDAsXHJcblx0XHRib2xkOiA3MDAsXHJcblx0fSxcclxuXHQvLyBVc2luZyBSRU0gZm9yIGJyZWFrcG9pbnRzIHRvIG1haW50YWluIGEgbmljZXIgVUlcclxuXHQvLyAgd2hlbiBjaGFuZ2luZyB6b29tIGxldmVsc1xyXG5cdFFVRVJJRVM6IHtcclxuXHRcdHBob25lQW5kVXA6IGAobWluLXdpZHRoOiAke0JSRUFLUE9JTlRTLnBob25lIC8gMTZ9cmVtKWAsXHJcblx0XHR0YWJsZXRBbmRVcDogYChtaW4td2lkdGg6ICR7QlJFQUtQT0lOVFMudGFibGV0IC8gMTZ9cmVtKWAsXHJcblx0XHRsYXB0b3BBbmRVcDogYChtaW4td2lkdGg6ICR7QlJFQUtQT0lOVFMubGFwdG9wIC8gMTZ9cmVtKWAsXHJcblx0XHR4bEFuZFVwOiBgKG1pbi13aWR0aDogJHtCUkVBS1BPSU5UUy54bCAvIDE2fXJlbSlgLFxyXG5cdH0sXHJcbn07XHJcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbi8vIEJhc2UgU3R5bGVzXHJcbmV4cG9ydCBjb25zdCBoZWFkZXJCYXNlU3R5bGVzID0gY3NzYFxyXG5cdGZvbnQtZmFtaWx5OiAkeyhwKSA9PiBwLnRoZW1lLkZPTlRfRkFNSUxZLmhlYWRlcn07XHJcblx0Zm9udC13ZWlnaHQ6ICR7KHApID0+IHAudGhlbWUuV0VJR0hUUy5ib2xkfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBib2R5QmFzZVN0eWxlcyA9IGNzc2BcclxuXHRmb250LWZhbWlseTogJHsocCkgPT4gcC50aGVtZS5GT05UX0ZBTUlMWS5ib2R5fTtcclxuXHRmb250LXdlaWdodDogJHsocCkgPT4gcC50aGVtZS5XRUlHSFRTLm1lZGl1bX07XHJcbmA7XHJcblxyXG4vLyBIZWFkZXJzXHJcbmV4cG9ydCBjb25zdCBoMVRleHRTdHlsZSA9IGNzc2BcclxuXHQke2hlYWRlckJhc2VTdHlsZXN9XHJcblx0Zm9udC1zaXplOiAkeyhwKSA9PiBwLnRoZW1lLkZPTlRfU0laRVMuaDF9O1xyXG5cdGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG5cdGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IGgyVGV4dFN0eWxlID0gY3NzYFxyXG5cdCR7aGVhZGVyQmFzZVN0eWxlc31cclxuXHRmb250LXNpemU6ICR7KHApID0+IHAudGhlbWUuRk9OVF9TSVpFUy5oMn07XHJcblx0bGluZS1oZWlnaHQ6IDIycHg7XHJcblx0bGV0dGVyLXNwYWNpbmc6IC0wLjYyNXB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IGgzVGV4dFN0eWxlID0gY3NzYFxyXG5cdCR7aGVhZGVyQmFzZVN0eWxlc31cclxuXHRmb250LXNpemU6ICR7KHApID0+IHAudGhlbWUuRk9OVF9TSVpFUy5oM307XHJcblx0bGluZS1oZWlnaHQ6IDI0cHg7XHJcblx0bGV0dGVyLXNwYWNpbmc6IC0wLjhweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBoNFRleHRTdHlsZSA9IGNzc2BcclxuXHQke2hlYWRlckJhc2VTdHlsZXN9XHJcblx0Zm9udC1zaXplOiAkeyhwKSA9PiBwLnRoZW1lLkZPTlRfU0laRVMuaDR9O1xyXG5cdGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG5cdGxldHRlci1zcGFjaW5nOiAtMC4yNXB4O1xyXG5gO1xyXG5cclxuLy8gQm9keVxyXG5leHBvcnQgY29uc3QgYm9keVRleHRTdHlsZSA9IGNzc2BcclxuXHQke2JvZHlCYXNlU3R5bGVzfVxyXG5cdGZvbnQtc2l6ZTogJHsocCkgPT4gcC50aGVtZS5GT05UX1NJWkVTLmJvZHl9O1xyXG5cdGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG5cdGxldHRlci1zcGFjaW5nOiAtMC4yNXB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IGJvZHkyVGV4dFN0eWxlID0gY3NzYFxyXG5cdCR7Ym9keUJhc2VTdHlsZXN9XHJcblx0Zm9udC1zaXplOiAkeyhwKSA9PiBwLnRoZW1lLkZPTlRfU0laRVMuYm9keTJ9O1xyXG5cdGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG5cdGxldHRlci1zcGFjaW5nOiAtMC4yMjkxNjdweDtcclxuYDtcclxuXHJcbi8vIEludm9pY2UgRGV0YWlsc1xyXG5cclxuZXhwb3J0IGNvbnN0IGRldGFpbFZhbHVlVGV4dFN0eWxlID0gY3NzYFxyXG5cdCR7aGVhZGVyQmFzZVN0eWxlc307XHJcblx0Zm9udC1zaXplOiAkezE1IC8gMTZ9cmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cdGxldHRlci1zcGFjaW5nOiAtMC4zMTI1cHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgdGFibGVGb290ZXJUb3RhbFRleHRTdHlsZSA9IGNzc2BcclxuXHQke2hlYWRlckJhc2VTdHlsZXN9O1xyXG5cdGZvbnQtc2l6ZTogJHsyMCAvIDE2fXJlbTtcclxuXHRsaW5lLWhlaWdodDogMzJweDtcclxuXHRsZXR0ZXItc3BhY2luZzogLTAuNDE2NjY3cHg7XHJcblxyXG5cdEBtZWRpYSAkeyhwKSA9PiBwLnRoZW1lLlFVRVJJRVMudGFibGV0QW5kVXB9IHtcclxuXHRcdGZvbnQtc2l6ZTogJHsyNCAvIDE2fXJlbTtcclxuXHRcdGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG5cdFx0bGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcclxuXHR9XHJcbmA7XHJcblxyXG4vLyBGb3JtXHJcblxyXG5leHBvcnQgY29uc3QgZm9ybUhlYWRlclRleHRTdHlsZSA9IGNzc2BcclxuXHQke2hlYWRlckJhc2VTdHlsZXN9O1xyXG5cdGZvbnQtc2l6ZTogJHsocCkgPT4gcC50aGVtZS5GT05UX1NJWkVTLmZvcm1IMX07XHJcblx0bGluZS1oZWlnaHQ6IDMycHg7XHJcblx0bGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBpdGVtbGlzdEhlYWRlclRleHRTdHlsZSA9IGNzc2BcclxuXHQke2hlYWRlckJhc2VTdHlsZXN9O1xyXG5cdGZvbnQtc2l6ZTogJHsocCkgPT4gcC50aGVtZS5GT05UX1NJWkVTLmZvcm1JdGVtTGlzdEgxfTtcclxuXHRsaW5lLWhlaWdodDogMzJweDtcclxuXHRsZXR0ZXItc3BhY2luZzogLTAuMzc1cHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgZXJyb3JNZXNzYWdlVGV4dFN0eWxlID0gY3NzYFxyXG5cdGZvbnQtZmFtaWx5OiAkeyhwKSA9PiBwLnRoZW1lLkZPTlRfRkFNSUxZLmVycm9yfTtcclxuXHRmb250LXNpemU6ICR7KHApID0+IHAudGhlbWUuRk9OVF9TSVpFUy5mb3JtRXJyb3J9O1xyXG5cdGZvbnQtd2VpZ2h0OiAkeyhwKSA9PiBwLnRoZW1lLldFSUdIVFMuc2VtaUJvbGR9O1xyXG5cdGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG5cdGxldHRlci1zcGFjaW5nOiAtMC4yMDgzMzNweDtcclxuYDtcclxuIiwiaW1wb3J0IHsgSW52b2ljZUl0ZW0gfSBmcm9tICcuLi90eXBlcy9pbmRleCc7XHJcblxyXG5leHBvcnQgY29uc3QgY2FsY3VsYXRlSW52b2ljZVRvdGFsID0gKGl0ZW1zOiBJbnZvaWNlSXRlbVtdKSA9PiB7XHJcblx0Y29uc3QgdG90YWxJbkNlbnRzID0gaXRlbXMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBwcmV2ICsgY3Vyci5wcmljZSAqIGN1cnIucXVhbnRpdHksIDApO1xyXG5cdHJldHVybiAodG90YWxJbkNlbnRzIC8gMTAwKS50b0ZpeGVkKDIpO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9pbGx1c3RyYXRpb24tZW1wdHkuZTMxMjJlYzI4MDUyYWMyNDYyNjNkYWYyMWM1ZTk3NjQuc3ZnXCIsXCJoZWlnaHRcIjoyMDAsXCJ3aWR0aFwiOjI0Mn07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9hc3NldHMvbG9nby5hODY1MWQ5NzVlMzU3ZjNmZjAwMzE2MzE3MTdmN2IxNy5zdmdcIixcImhlaWdodFwiOjcyLFwid2lkdGhcIjo3Mn07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pY29ucy9pY29uLWFycm93LWRvd24uYTZlZDdiZmZmZWNkYTkzNWM2NjZmZGEyOTM5YzM4NWMuc3ZnXCIsXCJoZWlnaHRcIjo3LFwid2lkdGhcIjoxMX07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pY29ucy9pY29uLWFycm93LWxlZnQuZTliYjc2Mzc2Yjg4NDA0MmZlY2YxYWJiYTE0MTk5MzQuc3ZnXCIsXCJoZWlnaHRcIjoxMCxcIndpZHRoXCI6N307IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pY29ucy9pY29uLWFycm93LXJpZ2h0LjllMTliZTY0MDAxNTA0YTE3YzE0NmViMzc4YzU1NmEyLnN2Z1wiLFwiaGVpZ2h0XCI6MTAsXCJ3aWR0aFwiOjd9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaWNvbnMvaWNvbi1jYWxlbmRhci43MWM5OWFiNWRiOTRmOGNiYjdiNzBjZTQwYWZkZGZiNS5zdmdcIixcImhlaWdodFwiOjE2LFwid2lkdGhcIjoxNn07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pY29ucy9pY29uLWNoZWNrLmRhYThhYjhlNmE3MjFjYmU1ODU3OTYyMzY4OTVkZTU4LnN2Z1wiLFwiaGVpZ2h0XCI6OCxcIndpZHRoXCI6MTB9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaWNvbnMvaWNvbi1tb29uLjcxMDFjNTdkYzhlY2M4NWUwNDVlOTE3OTYyNWUyY2IyLnN2Z1wiLFwiaGVpZ2h0XCI6MjAsXCJ3aWR0aFwiOjIwfTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ljb25zL2ljb24tcGx1cy4yNzhjMDQ4YTM4ZGUyNjZkMGU1YmRiYjhiY2FhZjM5NS5zdmdcIixcImhlaWdodFwiOjExLFwid2lkdGhcIjoxMX07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pY29ucy9pY29uLXN1bi5mM2RhNTJkMTNhMzVhZDhiYzc1MWRmMmU4NTA5M2Y5OC5zdmdcIixcImhlaWdodFwiOjIwLFwid2lkdGhcIjoyMH07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pY29ucy9pY29uLXVzZXIuOWQzYWI3Mzk5NzYwNmMyN2E1MmIxZTNmODBjMjRmYzQuc3ZnXCIsXCJoZWlnaHRcIjoyMCxcIndpZHRoXCI6MjB9OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAaG9va2Zvcm0vcmVzb2x2ZXJzL3l1cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVhY2gvZGlhbG9nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWFjaC9saXN0Ym94XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWFjaC92aXN1YWxseS1oaWRkZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWN1cnJlbmN5LWlucHV0LWZpZWxkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRhdGVwaWNrZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaG9vay1mb3JtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ5dXBcIik7IiwiLyogKGlnbm9yZWQpICovIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJzdHlsZWQiLCJpY29uUGx1c1NyYyIsInRoZW1lIiwiaDRUZXh0U3R5bGUiLCJjb2xvclZhcmlhbnRzIiwicHJpbWFyeSIsImJhY2tncm91bmQiLCJDT0xPUlMiLCJiYWNrZ3JvdW5kSG92ZXIiLCJ0ZXh0Iiwid2hpdGUiLCJzZWNvbmRhcnkiLCJncmV5IiwidGVydGlhcnkiLCJkYXJrIiwid2FybmluZyIsIkJ1dHRvbiIsImNoaWxkcmVuIiwiaWNvbiIsIm9uQ2xpY2siLCJ2YXJpYW50IiwiY2xhc3NOYW1lIiwidHlwZSIsIkJ1dHRvbkJhc2UiLCJidXR0b24iLCJwIiwiUVVFUklFUyIsInRhYmxldEFuZFVwIiwiVGV4dEJ1dHRvbiIsIkljb25CdXR0b24iLCJJY29uV3JhcHBlciIsImRpdiIsIkRpYWxvZ0NvbnRlbnQiLCJEaWFsb2dPdmVybGF5IiwiRHJhd2VyIiwiaXNEcmF3ZXJPcGVuIiwic2V0RHJhd2VyT3BlbiIsImFyaWFMYWJlbCIsIlN0eWxlZERpYWxvZ0NvbnRlbnQiLCJsYXB0b3BBbmRVcCIsIkxpc3Rib3hJbnB1dCIsIkxpc3Rib3hCdXR0b24iLCJMaXN0Ym94UG9wb3ZlciIsIkxpc3Rib3hMaXN0IiwiVmlzdWFsbHlIaWRkZW4iLCJ1c2VTdGF0ZSIsImljb25DaGV2cm9uRG93blNyYyIsIkRyb3Bkb3duIiwic2V0RHJvcGRvd25WYWx1ZSIsImxhYmVsSWQiLCJsb2NhbFN0YXRlIiwic2V0TG9jYWxTdGF0ZSIsInZhbHVlIiwiUG9wT3ZlciIsIkRyb3Bkb3duQnV0dG9uIiwiTGlzdGJveE9wdGlvbiIsImljb25DaGVja21hcmtTcmMiLCJEcm9wZG93bk9wdGlvbiIsImxhYmVsIiwiT3B0aW9uIiwiQ2hlY2tXcmFwcGVyIiwiSW52b2ljZUZpbHRlckRyb3Bkb3duIiwiZmlsdGVyIiwiZW1wdHlTdGF0ZUlsbHVzdHJhdGlvblNyYyIsImgyVGV4dFN0eWxlIiwiRW1wdHlTdGF0ZSIsImhlYWRpbmciLCJlcnJvck1lc3NhZ2UiLCJXcmFwcGVyIiwiRW1wdHlTdGF0ZUltZ1dyYXBwZXIiLCJFcnJvckhlYWRpbmciLCJoMiIsIkVycm9yTWVzc2FnZSIsIkZPTlRfRkFNSUxZIiwiYm9keSIsIldFSUdIVFMiLCJtZWRpdW0iLCJ5dXBSZXNvbHZlciIsInVzZUNvbnRleHQiLCJGb3JtUHJvdmlkZXIiLCJ1c2VGaWVsZEFycmF5IiwidXNlRm9ybSIsImluaXRhbFZhbHVlcyIsImZvcm1TY2hlbWEiLCJJbnZvaWNlc0NvbnRleHQiLCJFcnJvciIsIkRhdGVGaWVsZCIsIkZvcm1GaWVsZCIsIkl0ZW1GaWVsZCIsIkZvcm1TZWN0aW9uIiwiZm9ybUhlYWRlclRleHRTdHlsZSIsIml0ZW1saXN0SGVhZGVyVGV4dFN0eWxlIiwiRWRpdEludm9pY2VGb3JtIiwiaW52b2ljZSIsImFkZEludm9pY2UiLCJ1cGRhdGVJbnZvaWNlIiwibWV0aG9kcyIsImRlZmF1bHRWYWx1ZXMiLCJyZXNvbHZlciIsIm1vZGUiLCJmaWVsZHMiLCJhcHBlbmQiLCJyZW1vdmUiLCJjb250cm9sIiwibmFtZSIsInN1Ym1pdEZvcm1EYXRhIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUFkZEludm9pY2UiLCJnZXRWYWx1ZXMiLCJoYW5kbGVVcGRhdGVJbnZvaWNlIiwiZm9ybVN0YXRlIiwiaXNWYWxpZCIsImlkIiwibWluV2lkdGgiLCJmbGV4IiwiZXJyb3JzIiwiaW52b2ljZV9pdGVtcyIsIm1lc3NhZ2UiLCJtYXAiLCJpdGVtIiwiaXRlbUluZGV4IiwicXVhbnRpdHkiLCJwcmljZSIsIkZvcm1IZWFkZXIiLCJTdHlsZWRGb3JtIiwiZm9ybSIsIklubmVyV3JhcHBlciIsIlJvdyIsIkl0ZW1zTGlzdEhlYWRlcldyYXBwZXIiLCJJdGVtTGlzdEhlYWRlciIsImg0IiwiSXRlbXNGaWVsZExpc3QiLCJGb3JtQnV0dG9uc0NvbnRhaW5lciIsIkFkZEl0ZW1CdXR0b24iLCJTYXZlRHJhZnRCdXR0b24iLCJlcnJvck1lc3NhZ2VUZXh0U3R5bGUiLCJpY29uQ2hldnJvbkxlZnRTcmMiLCJpY29uQ2hldnJvblJpZ2h0U3JjIiwiQ2FsZW5kYXJIZWFkZXIiLCJtb250aERhdGUiLCJkZWNyZWFzZU1vbnRoIiwiaW5jcmVhc2VNb250aCIsInRvTG9jYWxlU3RyaW5nIiwibW9udGgiLCJ5ZWFyIiwiSGVhZGVyIiwiTW9udGgiLCJzcGFuIiwiSGVhZGVyQnV0dG9uIiwiZm9yd2FyZFJlZiIsImljb25DYWxlbmRhclNyYyIsImJvZHlUZXh0U3R5bGUiLCJDYWxlbmRhcklucHV0IiwicmVmIiwic3R5bGUiLCJlcnJvciIsImhhc0Vycm9yIiwicHJvcHMiLCJDdXN0b21JbnB1dFdyYXBwZXIiLCJJbnB1dEhlYWRlciIsIkxhYmVsIiwiSW5wdXRXcmFwcGVyIiwiQ3VzdG9tSW5wdXQiLCJpbnB1dCIsIklucHV0SWNvbiIsIlJlYWN0RGF0ZVBpY2tlciIsIkNvbnRyb2xsZXIiLCJ1c2VGb3JtQ29udGV4dCIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiZmllbGQiLCJmaWVsZFN0YXRlIiwib25DaGFuZ2UiLCJ0b0RhdGVTdHJpbmciLCJpbnZhbGlkIiwiRGF0ZVBpY2tlclN0eWxlcyIsInVzZUNvbnRyb2xsZXIiLCJJbnB1dCIsInVzZUVmZmVjdCIsImZvcm1hdFZhbHVlIiwidXNlV2F0Y2giLCJQcmljZUZpZWxkIiwiaWR4IiwidG90YWwiLCJzZXRUb3RhbCIsIndhdGNoZWRRdWFudGl0eUFuZFByaWNlIiwiaW52b2ljZUl0ZW0iLCJpc05hTiIsImZvcm1hdHRlZFRvdGFsIiwidG9GaXhlZCIsInRvU3RyaW5nIiwiZ3JvdXBTZXBhcmF0b3IiLCJkZWNpbWFsU2NhbGUiLCJkZWNpbWFsU2VwYXJhdG9yIiwicHJlZml4IiwiZmllbGRzZXQiLCJJdGVtTmFtZSIsIlF1YW50aXR5IiwiVG90YWxXcmFwcGVyIiwiVG90YWxQcmljZSIsIkRlbGV0ZUJ1dHRvbiIsIkN1cnJlbmN5SW5wdXQiLCJmb3JtUHJpY2VWYWx1ZSIsInNldFByaWNlIiwicGFyc2VGbG9hdCIsImxvY2FsZSIsImN1cnJlbmN5IiwidW5kZWZpbmVkIiwiTWF0aCIsInJvdW5kIiwiUHJpY2UiLCJoMyIsImgxVGV4dFN0eWxlIiwiZ2V0SW52b2ljZUNvdW50VGV4dCIsImNvdW50IiwiaW52b2ljZUNvdW50Iiwic2V0RmlsdGVyIiwiaGVhZGVyIiwiSGVhZGluZ1dyYXBwZXIiLCJIZWFkaW5nIiwiaDEiLCJTdWJIZWFkaW5nIiwiU3R5bGVkRHJvcGRvd24iLCJOZXdJbnZvaWNlQnV0dG9uIiwiU3RhdHVzQmFkZ2UiLCJpY29uQ2hldnJvblNyYyIsImgzVGV4dFN0eWxlIiwiSW52b2ljZUNhcmQiLCJkdWVEYXRlIiwiY2xpZW50TmFtZSIsInN0YXR1cyIsImxpIiwiSWQiLCJEdWVEYXRlIiwiVG90YWwiLCJDbGllbnROYW1lIiwiU3RhdHVzIiwiQ2hldnJvbldyYXBwZXIiLCJJbnZvaWNlTGlzdENvbnRhaW5lciIsInVsIiwiaWNvblBlcnNvblNyYyIsIlByb2ZpbGVJbWciLCJwcm9maWxlSW1nU3JjIiwiVGhlbWVTd2l0Y2hlciIsImxvZ29TcmMiLCJTaWRlYmFyIiwiYXNpZGUiLCJMb2dvV3JhcHBlciIsIlN0eWxlZFRoZW1lU3dpdGNoZXIiLCJEaXZpZGVyIiwiUGFpZCIsImNvbG9yIiwic3VjY2VzcyIsIlBlbmRpbmciLCJjYXV0aW9uIiwiRHJhZnQiLCJpY29uTW9vblNyYyIsImljb25TdW5TcmMiLCJzZXRUaGVtZSIsInVzZXJfc3RyZWV0X2FkZHJlc3MiLCJ1c2VyX2NpdHkiLCJ1c2VyX3Bvc3RfY29kZSIsInVzZXJfY291bnRyeSIsImNsaWVudF9uYW1lIiwiY2xpZW50X2VtYWlsIiwiY2xpZW50X3N0cmVldF9hZGRyZXNzIiwiY2xpZW50X2NpdHkiLCJjbGllbnRfcG9zdF9jb2RlIiwiY2xpZW50X2NvdW50cnkiLCJpbnZvaWNlX2RhdGUiLCJEYXRlIiwiaW52b2ljZV9kdWVfZGF0ZSIsImRlc2NyaXB0aW9uIiwic3RyaW5nIiwiYXJyYXkiLCJkYXRlIiwib2JqZWN0IiwibnVtYmVyIiwic2hhcGUiLCJyZXF1aXJlZCIsImVtYWlsIiwid2hlbiIsInNjaGVtYSIsIm1pbiIsIm9mIiwibnVsbGFibGUiLCJ0cmFuc2Zvcm0iLCJ2IiwibyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VSZWR1Y2VyIiwiZGVtb0ludm9pY2VzRGF0YSIsImludm9pY2VSZWR1Y2VyIiwiaW52b2ljZXMiLCJkZWxldGVJbnZvaWNlIiwiSW52b2ljZXNQcm92aWRlciIsInN0YXRlIiwiZGlzcGF0Y2giLCJsb2NhbEludm9pY2VzIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBheWxvYWQiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiYWN0aW9uIiwiQXJyYXkiLCJpc0FycmF5IiwiUGFnZUxheW91dCIsIkNvbnRhaW5lciIsIm1haW4iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJkZWZhdWx0IiwiSW1hZ2UxIiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfaGVhZCIsIl90b0Jhc2U2NCIsIl9pbWFnZUNvbmZpZyIsIl91c2VJbnRlcnNlY3Rpb24iLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfX2VzTW9kdWxlIiwiX29iamVjdFNwcmVhZCIsInRhcmdldCIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzb3VyY2UiLCJvd25LZXlzIiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImNvbmNhdCIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImZvckVhY2giLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJleGNsdWRlZCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwic291cmNlU3ltYm9sS2V5cyIsImluZGV4T2YiLCJwcm90b3R5cGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImNhbGwiLCJzb3VyY2VLZXlzIiwibG9hZGVkSW1hZ2VVUkxzIiwiU2V0IiwiZ2xvYmFsIiwiX19ORVhUX0lNQUdFX0lNUE9SVEVEIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJsb2FkZXJzIiwiTWFwIiwiZGVmYXVsdExvYWRlciIsImltZ2l4TG9hZGVyIiwiY2xvdWRpbmFyeUxvYWRlciIsImFrYW1haUxvYWRlciIsImN1c3RvbUxvYWRlciIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJpc1N0YXRpY1JlcXVpcmUiLCJzcmMiLCJpc1N0YXRpY0ltYWdlRGF0YSIsImlzU3RhdGljSW1wb3J0IiwiZGV2aWNlU2l6ZXMiLCJjb25maWdEZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJjb25maWdJbWFnZVNpemVzIiwibG9hZGVyIiwiY29uZmlnTG9hZGVyIiwicGF0aCIsImNvbmZpZ1BhdGgiLCJkb21haW5zIiwiY29uZmlnRG9tYWlucyIsInByb2Nlc3MiLCJlbnYiLCJfX05FWFRfSU1BR0VfT1BUUyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwic29ydCIsImEiLCJiIiwiZ2V0V2lkdGhzIiwid2lkdGgiLCJsYXlvdXQiLCJzaXplcyIsInZpZXdwb3J0V2lkdGhSZSIsInBlcmNlbnRTaXplcyIsIm1hdGNoIiwiZXhlYyIsInB1c2giLCJwYXJzZUludCIsInNtYWxsZXN0UmF0aW8iLCJ3aWR0aHMiLCJzIiwia2luZCIsInciLCJmaW5kIiwiZ2VuZXJhdGVJbWdBdHRycyIsInVub3B0aW1pemVkIiwicXVhbGl0eSIsInNyY1NldCIsImxhc3QiLCJqb2luIiwiZ2V0SW50IiwieCIsImRlZmF1bHRJbWFnZUxvYWRlciIsImxvYWRlclByb3BzIiwibG9hZCIsImdldCIsInJvb3QiLCJWQUxJRF9MT0FERVJTIiwiaGFuZGxlTG9hZGluZyIsImltZyIsInBsYWNlaG9sZGVyIiwib25Mb2FkaW5nQ29tcGxldGUiLCJoYW5kbGVMb2FkIiwic3RhcnRzV2l0aCIsImRlY29kZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2F0Y2giLCJ0aGVuIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJhZGQiLCJuYXR1cmFsV2lkdGgiLCJuYXR1cmFsSGVpZ2h0IiwicGFyZW50RWxlbWVudCIsInBhcmVudCIsImdldENvbXB1dGVkU3R5bGUiLCJkaXNwbGF5Iiwid2FybiIsInBvc2l0aW9uIiwiY29tcGxldGUiLCJvbmxvYWQiLCJfcGFyYW0iLCJwcmlvcml0eSIsImxvYWRpbmciLCJsYXp5Qm91bmRhcnkiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImJsdXJEYXRhVVJMIiwiYWxsIiwicmVzdCIsInN0YXRpY1NyYyIsInN0YXRpY0ltYWdlRGF0YSIsIndpZHRoSW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImlzTGF6eSIsImhhcyIsImluY2x1ZGVzIiwiU3RyaW5nIiwiVkFMSURfQkxVUl9FWFQiLCJyYW5kIiwiZmxvb3IiLCJyYW5kb20iLCJzZXRSZWYiLCJpc0ludGVyc2VjdGVkIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsImRpc2FibGVkIiwiaXNWaXNpYmxlIiwid3JhcHBlclN0eWxlIiwic2l6ZXJTdHlsZSIsInNpemVyU3ZnIiwiaW1nU3R5bGUiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJib3hTaXppbmciLCJwYWRkaW5nIiwiYm9yZGVyIiwibWFyZ2luIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJibHVyU3R5bGUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJvdmVyZmxvdyIsInF1b3RpZW50IiwicGFkZGluZ1RvcCIsImltZ0F0dHJpYnV0ZXMiLCJzcmNTdHJpbmciLCJjcmVhdGVFbGVtZW50IiwiYWx0IiwidG9CYXNlNjQiLCJhc3NpZ24iLCJkZWNvZGluZyIsInJlbCIsImFzIiwiaHJlZiIsImltYWdlc3Jjc2V0IiwiaW1hZ2VzaXplcyIsIm5vcm1hbGl6ZVNyYyIsInNsaWNlIiwidXJsIiwiVVJMIiwicGFyYW1zIiwic2VhcmNoUGFyYW1zIiwic2V0IiwicGFyYW1zU3RyaW5nIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsImVyciIsImhvc3RuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiX3JvdXRlciIsIl9yb3V0ZXIxIiwicHJlZmV0Y2hlZCIsInByZWZldGNoIiwicm91dGVyIiwib3B0aW9ucyIsImlzTG9jYWxVUkwiLCJjdXJMb2NhbGUiLCJpc01vZGlmaWVkRXZlbnQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsImxpbmtDbGlja2VkIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsIkxpbmsiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJ1c2VSZWYiLCJjdXJyZW50IiwidXNlUm91dGVyIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJ1c2VDYWxsYmFjayIsImVsIiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsImxvY2FsZURvbWFpbiIsImlzTG9jYWxlRG9tYWluIiwiZ2V0RG9tYWluTG9jYWxlIiwibG9jYWxlcyIsImRvbWFpbkxvY2FsZXMiLCJhZGRCYXNlUGF0aCIsImFkZExvY2FsZSIsImRlZmF1bHRMb2NhbGUiLCJjbG9uZUVsZW1lbnQiLCJfZGVmYXVsdCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJlbmRzV2l0aCIsIl9fTkVYVF9UUkFJTElOR19TTEFTSCIsInRlc3QiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwic2VsZiIsImJpbmQiLCJ3aW5kb3ciLCJjYiIsInN0YXJ0Iiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwibWF4IiwiY2xlYXJUaW1lb3V0IiwibWFya0Fzc2V0RXJyb3IiLCJpc0Fzc2V0RXJyb3IiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwiY3JlYXRlUm91dGVMb2FkZXIiLCJfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJNU19NQVhfSURMRV9ERUxBWSIsIndpdGhGdXR1cmUiLCJnZW5lcmF0b3IiLCJlbnRyeSIsImZ1dHVyZSIsInByb20iLCJoYXNQcmVmZXRjaCIsImxpbmsiLCJkb2N1bWVudCIsIk1TSW5wdXRNZXRob2RDb250ZXh0IiwiZG9jdW1lbnRNb2RlIiwicmVsTGlzdCIsInN1cHBvcnRzIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlcyIsInJlaiIsInF1ZXJ5U2VsZWN0b3IiLCJjcm9zc09yaWdpbiIsIl9fTkVYVF9DUk9TU19PUklHSU4iLCJvbmVycm9yIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFwcGVuZFNjcmlwdCIsInNjcmlwdCIsInJlamVjdCIsImRldkJ1aWxkUHJvbWlzZSIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJtcyIsImNhbmNlbGxlZCIsInIiLCJfX0JVSUxEX01BTklGRVNUIiwib25CdWlsZE1hbmlmZXN0IiwiX19CVUlMRF9NQU5JRkVTVF9DQiIsImdldEZpbGVzRm9yUm91dGUiLCJhc3NldFByZWZpeCIsInJvdXRlIiwic2NyaXB0cyIsImVuY29kZVVSSSIsImNzcyIsIm1hbmlmZXN0IiwiYWxsRmlsZXMiLCJlbnRyeXBvaW50cyIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsImZldGNoIiwib2siLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJvbkVudHJ5cG9pbnQiLCJleGVjdXRlIiwiZm4iLCJjb21wb25lbnQiLCJvbGQiLCJsb2FkUm91dGUiLCJyb3V0ZUZpbGVzUHJvbWlzZSIsImVudHJ5cG9pbnQiLCJzdHlsZXMiLCJmaW5hbGx5IiwiY24iLCJuYXZpZ2F0b3IiLCJjb25uZWN0aW9uIiwic2F2ZURhdGEiLCJlZmZlY3RpdmVUeXBlIiwib3V0cHV0IiwiX3dpdGhSb3V0ZXIiLCJjcmVhdGVSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJfcm91dGVyQ29udGV4dCIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJldmVudHMiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiZWxlbWVudCIsImNhbGxiYWNrIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJfX05FWFRfSTE4Tl9TVVBQT1JUIiwiYmFzZVBhdGgiLCJfX05FWFRfUk9VVEVSX0JBU0VQQVRIIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJub3JtYWxpemVMb2NhbGVQYXRoIiwiZGV0ZWN0ZWRMb2NhbGUiLCJkZXRlY3RlZERvbWFpbiIsImh0dHAiLCJkb21haW4iLCJwYXRobmFtZSIsInBhdGhMb3dlciIsInRvTG93ZXJDYXNlIiwibG9jYWxlTG93ZXIiLCJzdWJzdHIiLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwibG9jYXRpb25PcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwib3JpZ2luIiwiYXNQYXRobmFtZSIsInF1ZXJ5IiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiZ2V0Um91dGVNYXRjaGVyIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJzZWdtZW50IiwicmVzdWx0Iiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwidXJsUHJvdG9NYXRjaCIsInVybEFzU3RyaW5nTm9Qcm90byIsInVybFBhcnRzIiwic3BsaXQiLCJub3JtYWxpemVkVXJsIiwibm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwic29tZSIsInBhZ2UiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiIsImhpc3RvcnkiLCJzZXNzaW9uU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJuIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJqc29uIiwiZGF0YSIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJSb3V0ZXIiLCJjb25zdHJ1Y3RvciIsInBhdGhuYW1lMSIsInF1ZXJ5MSIsImFzMSIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50IiwiQ29tcG9uZW50MSIsImVycjEiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3Iiwic2RjIiwic2RyIiwiX2lkeCIsIm9uUG9wU3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsIl9fTiIsImZvcmNlZFNjcm9sbCIsInBhZ2VYT2Zmc2V0IiwieSIsInBhZ2VZT2Zmc2V0IiwicGFyc2VSZWxhdGl2ZVVybCIsImlzU3NyIiwiX2JwcyIsImNoYW5nZSIsIl9zaGFsbG93IiwiY29tcG9uZW50cyIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJzdWIiLCJjbGMiLCJfd3JhcEFwcCIsImlzUmVhZHkiLCJnc3NwIiwiZ2lwIiwiYXBwR2lwIiwiZ3NwIiwibG9jYXRpb24iLCJzZWFyY2giLCJfX05FWFRfSEFTX1JFV1JJVEVTIiwiX3Nob3VsZFJlc29sdmVIcmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFJlc3RvcmF0aW9uIiwicmVsb2FkIiwiYmFjayIsIm1ldGhvZCIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJwcmV2TG9jYWxlIiwicGFyc2VkQXMiLCJsb2NhbGVQYXRoUmVzdWx0IiwiZGlkTmF2aWdhdGUiLCJhc05vQmFzZVBhdGgiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJfaW5GbGlnaHRSb3V0ZSIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsImxvY2FsZUNoYW5nZSIsIm9ubHlBSGFzaENoYW5nZSIsImVtaXQiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3IiwicmV3cml0ZXNSZXN1bHQiLCJtYXRjaGVkUGFnZSIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicmVmMSIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsIl9zY3JvbGwiLCJzaG91bGRTY3JvbGwiLCJyZXNldFNjcm9sbCIsImRvY3VtZW50RWxlbWVudCIsImxhbmciLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiZXJyMiIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwYXRobmFtZTIiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcDEiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImNhbGN1bGF0ZUludm9pY2VUb3RhbCIsIkhvbWUiLCJmaWx0ZXJlZEludm9pY2VzIiwic2V0RmlsdGVyZWRJbnZvaWNlcyIsIlN0eWxlZEVtcHR5U3RhdGUiLCJCUkVBS1BPSU5UUyIsInBob25lIiwidGFibGV0IiwibGFwdG9wIiwieGwiLCJGT05UX1NJWkVTIiwiYm9keTIiLCJmb3JtSDEiLCJmb3JtSXRlbUxpc3RIMSIsImZvcm1FcnJvciIsInNlbWlCb2xkIiwiYm9sZCIsInBob25lQW5kVXAiLCJ4bEFuZFVwIiwiaGVhZGVyQmFzZVN0eWxlcyIsImJvZHlCYXNlU3R5bGVzIiwiYm9keTJUZXh0U3R5bGUiLCJkZXRhaWxWYWx1ZVRleHRTdHlsZSIsInRhYmxlRm9vdGVyVG90YWxUZXh0U3R5bGUiLCJpdGVtcyIsInRvdGFsSW5DZW50cyIsInJlZHVjZSIsInByZXYiLCJjdXJyIl0sInNvdXJjZVJvb3QiOiIifQ==