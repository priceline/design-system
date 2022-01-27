(self.webpackChunk_priceline_storybook=self.webpackChunk_priceline_storybook||[]).push([[1808],{"../../packages/core/lib-esm/CloseButton/CloseButton.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,WithClickHandler:()=>WithClickHandler,ForwardRefs:()=>ForwardRefs});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.assign.js");var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../common/temp/node_modules/.pnpm/@storybook+addon-actions@6.4.12_react-dom@17.0.2+react@17.0.2/node_modules/@storybook/addon-actions/dist/esm/index.js"),___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/lib-esm/CloseButton/CloseButton.js"),___WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/core/lib-esm/Button/Button.js"),_storybook_utils_ForwardRefsDemo__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/core/lib-esm/storybook/utils/ForwardRefsDemo.js");const __WEBPACK_DEFAULT_EXPORT__={title:"CloseButton",component:___WEBPACK_IMPORTED_MODULE_3__.Z};var WithClickHandler=function WithClickHandler(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(___WEBPACK_IMPORTED_MODULE_3__.Z,{color:"background.darkest",onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")})};WithClickHandler.story={name:"with click handler"};var ForwardRefs=function ForwardRefs(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_storybook_utils_ForwardRefsDemo__WEBPACK_IMPORTED_MODULE_5__.Z,{refChild:function refChild(dsRef){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(___WEBPACK_IMPORTED_MODULE_3__.Z,{color:"background.darkest",onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked"),dsRef}),react__WEBPACK_IMPORTED_MODULE_1__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_1__.createElement(___WEBPACK_IMPORTED_MODULE_4__.Z,{onClick:function onClick(){dsRef.current.focus()},mt:4},"Click to focus button via ref"))}})};ForwardRefs.story={name:"Forward refs"},WithClickHandler.parameters=Object.assign({storySource:{source:"function () { return React.createElement(CloseButton, { color: 'background.darkest', onClick: action('clicked') }); }"}},WithClickHandler.parameters),ForwardRefs.parameters=Object.assign({storySource:{source:"function () {\n    function refChild(dsRef) {\n        function onClick() {\n            dsRef.current.focus();\n        }\n        return (React.createElement(React.Fragment, null,\n            React.createElement(CloseButton, { color: 'background.darkest', onClick: action('clicked'), dsRef: dsRef }),\n            React.createElement(\"br\", null),\n            React.createElement(Button, { onClick: onClick, mt: 4 }, \"Click to focus button via ref\")));\n    }\n    return React.createElement(ForwardRefDemo, { refChild: refChild });\n}"}},ForwardRefs.parameters),WithClickHandler.__docgenInfo={description:"",methods:[],displayName:"WithClickHandler"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/lib-esm/CloseButton/CloseButton.stories.js"]={name:"WithClickHandler",docgenInfo:WithClickHandler.__docgenInfo,path:"../../packages/core/lib-esm/CloseButton/CloseButton.stories.js"}),ForwardRefs.__docgenInfo={description:"",methods:[],displayName:"ForwardRefs"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/lib-esm/CloseButton/CloseButton.stories.js"]={name:"ForwardRefs",docgenInfo:ForwardRefs.__docgenInfo,path:"../../packages/core/lib-esm/CloseButton/CloseButton.stories.js"})},"../../packages/core/lib-esm/storybook/utils/ForwardRefsDemo.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>ForwardRefsDemo});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function ForwardRefsDemo(_a){var refChild=_a.refChild,dsRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,refChild(dsRef))}ForwardRefsDemo.propTypes={refChild:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func},ForwardRefsDemo.__docgenInfo={description:"This is a demo component for Storybook that provides a ref to content using a render prop",methods:[],displayName:"ForwardRefsDemo",props:{refChild:{type:{name:"func"},required:!1,description:"Render prop that receives a ref stored on the instance of <ForwardRefsDemo/>"}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/lib-esm/storybook/utils/ForwardRefsDemo.js"]={name:"ForwardRefsDemo",docgenInfo:ForwardRefsDemo.__docgenInfo,path:"../../packages/core/lib-esm/storybook/utils/ForwardRefsDemo.js"})},"../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.define-properties.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/internals/export.js"),DESCRIPTORS=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/internals/descriptors.js"),defineProperties=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/internals/object-define-properties.js").f;$({target:"Object",stat:!0,forced:Object.defineProperties!==defineProperties,sham:!DESCRIPTORS},{defineProperties})}}]);