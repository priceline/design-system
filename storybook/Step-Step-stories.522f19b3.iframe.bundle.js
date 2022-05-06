"use strict";(self.webpackChunk_priceline_storybook=self.webpackChunk_priceline_storybook||[]).push([[315],{"../../packages/core/lib-esm/Step/Step.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,StepComponent:()=>StepComponent,CurrentStep:()=>CurrentStep,CompletedStep:()=>CompletedStep,CurrentAndCompletedStep:()=>CurrentAndCompletedStep,ClickableStep:()=>ClickableStep});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.assign.js");var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../common/temp/node_modules/.pnpm/@storybook+addon-actions@6.4.19_react-dom@17.0.2+react@17.0.2/node_modules/@storybook/addon-actions/dist/esm/index.js"),___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/lib-esm/Step/Step.js"),onClick=(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("Step Clicked");const __WEBPACK_DEFAULT_EXPORT__={title:"Step",component:___WEBPACK_IMPORTED_MODULE_3__.Z,parameters:{docs:{description:{component:"Use the <Stepper.Step /> component to render a step."}}}};var StepComponent=function StepComponent(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(___WEBPACK_IMPORTED_MODULE_3__.Z,null,"Step")};StepComponent.story={name:"Step component"};var CurrentStep=function CurrentStep(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(___WEBPACK_IMPORTED_MODULE_3__.Z,{active:!0},"Step")},CompletedStep=function CompletedStep(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(___WEBPACK_IMPORTED_MODULE_3__.Z,{completed:!0},"Step")},CurrentAndCompletedStep=function CurrentAndCompletedStep(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(___WEBPACK_IMPORTED_MODULE_3__.Z,{active:!0,completed:!0},"Step")};CurrentAndCompletedStep.story={name:"Current and Completed Step"};var ClickableStep=function ClickableStep(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(___WEBPACK_IMPORTED_MODULE_3__.Z,{onClick},"Step")};StepComponent.parameters=Object.assign({storySource:{source:'function () { return React.createElement(Step, null, "Step"); }'}},StepComponent.parameters),CurrentStep.parameters=Object.assign({storySource:{source:'function () { return React.createElement(Step, { active: true }, "Step"); }'}},CurrentStep.parameters),CompletedStep.parameters=Object.assign({storySource:{source:'function () { return React.createElement(Step, { completed: true }, "Step"); }'}},CompletedStep.parameters),CurrentAndCompletedStep.parameters=Object.assign({storySource:{source:'function () { return (React.createElement(Step, { active: true, completed: true }, "Step")); }'}},CurrentAndCompletedStep.parameters),ClickableStep.parameters=Object.assign({storySource:{source:'function () { return React.createElement(Step, { onClick: onClick }, "Step"); }'}},ClickableStep.parameters),StepComponent.__docgenInfo={description:"",methods:[],displayName:"StepComponent"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/lib-esm/Step/Step.stories.js"]={name:"StepComponent",docgenInfo:StepComponent.__docgenInfo,path:"../../packages/core/lib-esm/Step/Step.stories.js"}),CurrentStep.__docgenInfo={description:"",methods:[],displayName:"CurrentStep"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/lib-esm/Step/Step.stories.js"]={name:"CurrentStep",docgenInfo:CurrentStep.__docgenInfo,path:"../../packages/core/lib-esm/Step/Step.stories.js"}),CompletedStep.__docgenInfo={description:"",methods:[],displayName:"CompletedStep"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/lib-esm/Step/Step.stories.js"]={name:"CompletedStep",docgenInfo:CompletedStep.__docgenInfo,path:"../../packages/core/lib-esm/Step/Step.stories.js"}),CurrentAndCompletedStep.__docgenInfo={description:"",methods:[],displayName:"CurrentAndCompletedStep"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/lib-esm/Step/Step.stories.js"]={name:"CurrentAndCompletedStep",docgenInfo:CurrentAndCompletedStep.__docgenInfo,path:"../../packages/core/lib-esm/Step/Step.stories.js"}),ClickableStep.__docgenInfo={description:"",methods:[],displayName:"ClickableStep"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/lib-esm/Step/Step.stories.js"]={name:"ClickableStep",docgenInfo:ClickableStep.__docgenInfo,path:"../../packages/core/lib-esm/Step/Step.stories.js"})}}]);