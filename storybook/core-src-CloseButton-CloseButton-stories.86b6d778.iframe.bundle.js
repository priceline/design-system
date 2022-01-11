"use strict";(self.webpackChunk_priceline_storybook=self.webpackChunk_priceline_storybook||[]).push([[2888],{"../../packages/core/src/CloseButton/CloseButton.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,WithClickHandler:()=>WithClickHandler,ForwardRefs:()=>ForwardRefs});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../common/temp/node_modules/.pnpm/@storybook+addon-actions@6.4.10_react-dom@17.0.2+react@17.0.2/node_modules/@storybook/addon-actions/dist/esm/index.js"),___WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/core/src/CloseButton/CloseButton.js"),___WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/core/src/Button/Button.js"),_storybook_utils_ForwardRefsDemo__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/core/storybook/utils/ForwardRefsDemo.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"CloseButton",component:___WEBPACK_IMPORTED_MODULE_4__.Z};var WithClickHandler=function WithClickHandler(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.Z,{color:"background.darkest",onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")})};WithClickHandler.displayName="WithClickHandler",WithClickHandler.story={name:"with click handler"};var ForwardRefs=function ForwardRefs(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_utils_ForwardRefsDemo__WEBPACK_IMPORTED_MODULE_5__.Z,{refChild:function refChild(dsRef){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.Z,{color:"background.darkest",onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked"),dsRef}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_6__.Z,{onClick:function onClick(){return dsRef.current.focus()},mt:4,children:"Click to focus button via ref"})]})}})};ForwardRefs.displayName="ForwardRefs",ForwardRefs.story={name:"Forward refs"},WithClickHandler.parameters=Object.assign({storySource:{source:"() => <CloseButton color='background.darkest' onClick={action('clicked')} />"}},WithClickHandler.parameters),ForwardRefs.parameters=Object.assign({storySource:{source:"() => (\n  <ForwardRefDemo\n    refChild={(dsRef) => (\n      <>\n        <CloseButton color='background.darkest' onClick={action('clicked')} dsRef={dsRef} />\n        <br />\n        <Button onClick={() => dsRef.current.focus()} mt={4}>\n          Click to focus button via ref\n        </Button>\n      </>\n    )}\n  />\n)"}},ForwardRefs.parameters),WithClickHandler.__docgenInfo={description:"",methods:[],displayName:"WithClickHandler"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/src/CloseButton/CloseButton.stories.js"]={name:"WithClickHandler",docgenInfo:WithClickHandler.__docgenInfo,path:"../../packages/core/src/CloseButton/CloseButton.stories.js"}),ForwardRefs.__docgenInfo={description:"",methods:[],displayName:"ForwardRefs"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/src/CloseButton/CloseButton.stories.js"]={name:"ForwardRefs",docgenInfo:ForwardRefs.__docgenInfo,path:"../../packages/core/src/CloseButton/CloseButton.stories.js"})},"../../packages/core/storybook/utils/ForwardRefsDemo.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ForwardRefsDemo});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");function ForwardRefsDemo(_ref){var refChild=_ref.refChild,dsRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:refChild(dsRef)})}ForwardRefsDemo.propTypes={refChild:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func},ForwardRefsDemo.__docgenInfo={description:"This is a demo component for Storybook that provides a ref to content using a render prop",methods:[],displayName:"ForwardRefsDemo",props:{refChild:{type:{name:"func"},required:!1,description:"Render prop that receives a ref stored on the instance of <ForwardRefsDemo/>"}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/storybook/utils/ForwardRefsDemo.js"]={name:"ForwardRefsDemo",docgenInfo:ForwardRefsDemo.__docgenInfo,path:"../../packages/core/storybook/utils/ForwardRefsDemo.js"})}}]);