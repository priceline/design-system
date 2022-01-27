(self.webpackChunk_priceline_storybook=self.webpackChunk_priceline_storybook||[]).push([[6597],{"../../packages/core/lib-esm/Button/Button.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ForwardRefs:()=>ForwardRefs,ResponsiveSize:()=>ResponsiveSize,StyledButtonStory:()=>StyledButtonStory,_Button:()=>_Button,default:()=>Button_stories});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.function.bind.js");var react=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),ForwardRefsDemo=__webpack_require__("../../packages/core/lib-esm/storybook/utils/ForwardRefsDemo.js"),Button=__webpack_require__("../../packages/core/lib-esm/Button/Button.js"),Box=__webpack_require__("../../packages/core/lib-esm/Box/Box.js"),Text=__webpack_require__("../../packages/core/lib-esm/Text/Text.js"),args=(__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.join.js"),__webpack_require__("../../packages/core/lib-esm/storybook/args/index.js")),variations=["fill","link","outline","plain","subtle","lightFill"],sizes=["small","medium","large"],argTypes={variation:{name:"variation",type:{name:"string",required:!1},description:"Display variation to render",table:{type:{summary:"Variations",detail:"- "+variations.join("\n- ")},defaultValue:{summary:"fill"}},control:{type:"select",options:variations}},size:{name:"size",type:{name:"string",required:!1},description:"Button size to render\nAccepts string or responsive array of strings.",table:{type:{summary:"Sizes",detail:"- "+sizes.join("\n- ")},defaultValue:{summary:"medium"}},control:{type:"select",options:sizes}},color:{name:"color",type:{name:"string",required:!1},description:"Palette color to use",table:{type:{summary:"Colors",detail:"- "+args.O9.join("\n- ")},defaultValue:{summary:"primary"}},control:{type:"select",options:args.O9}},width:{name:"width",type:{name:"string",required:!1},description:"Button width",table:{defaultValue:{summary:void 0}}},space:{name:"space",type:{name:"string",required:!1},description:"styled-system `space`",table:{defaultValue:{summary:void 0}}},disabled:{name:"disabled",type:{name:"boolean",required:!1},description:"Is the control disabled?",table:{defaultValue:{summary:"false"}},control:{type:"boolean"}},onClick:{name:"onClick",type:{name:"function",required:!1},description:"Event handler for `click`",table:{defaultValue:{summary:void 0}},action:"Clicked on <Button>"}},__makeTemplateObject=function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};const Button_stories={component:Button.Z,title:"core / Button",args:{variation:"fill",size:"medium",color:"primary",disabled:!1},argTypes};var Template=function Template(args){return react.createElement(Button.Z,__assign({},args),"I AM BUTTON")},_Button=Template.bind({}),ResponsiveSize=Template.bind({});ResponsiveSize.args={size:["small",null,"medium",null,"large"]},ResponsiveSize.parameters={viewport:{defaultViewport:"designSystem_sm"}};var templateObject_1,ForwardRefs=function ForwardRefs(){return react.createElement(ForwardRefsDemo.Z,{refChild:function refChild(dsRef){return react.createElement(react.Fragment,null,react.createElement(Button.Z,{ref:dsRef,color:"error",size:"large"},"PANIC"),react.createElement("br",null),react.createElement(Button.Z,{mt:4,onClick:function onClick(){dsRef.current.focus()}},"Click to focus PANIC button via ref"))}})},StyledButton=(0,styled_components_browser_esm.ZP)(Button.Z)(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  padding: 100px;\n"],["\n  padding: 100px;\n"]))),StyledButtonStory=function StyledTemplate(args){return react.createElement(StyledButton,__assign({},args),"Button Text!")}.bind({});StyledButtonStory.storyName="styled(Button) should preserve variation styling",StyledButtonStory.decorators=[function(story){return react.createElement(Box.Z,null,react.createElement(Text.ZP,null,"Below is a styled(Button) with `padding: 100px;` applied."),story())}],_Button.parameters=Object.assign({storySource:{source:'function (args) { return React.createElement(Button, __assign({}, args), "I AM BUTTON"); }'}},_Button.parameters),ResponsiveSize.parameters=Object.assign({storySource:{source:'function (args) { return React.createElement(Button, __assign({}, args), "I AM BUTTON"); }'}},ResponsiveSize.parameters),ForwardRefs.parameters=Object.assign({storySource:{source:'function () {\n    function refChild(dsRef) {\n        function onClick() {\n            dsRef.current.focus();\n        }\n        return (React.createElement(React.Fragment, null,\n            React.createElement(Button, { ref: dsRef, color: \'error\', size: \'large\' }, "PANIC"),\n            React.createElement("br", null),\n            React.createElement(Button, { mt: 4, onClick: onClick }, "Click to focus PANIC button via ref")));\n    }\n    return React.createElement(ForwardRefDemo, { refChild: refChild });\n}'}},ForwardRefs.parameters),StyledButtonStory.parameters=Object.assign({storySource:{source:'function (args) { return React.createElement(StyledButton, __assign({}, args), "Button Text!"); }'}},StyledButtonStory.parameters),ForwardRefs.__docgenInfo={description:"",methods:[],displayName:"ForwardRefs"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/lib-esm/Button/Button.stories.js"]={name:"ForwardRefs",docgenInfo:ForwardRefs.__docgenInfo,path:"../../packages/core/lib-esm/Button/Button.stories.js"})},"../../packages/core/lib-esm/Button/Button.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>buttonStyles,Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.string.bold.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.keys.js");var styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),prop_types__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__),styled_system__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../packages/core/lib-esm/utils/utils.js"),__makeTemplateObject=function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},sizes={small:(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.iv)(templateObject_1||(templateObject_1=__makeTemplateObject(["\n    border-radius: ",";\n    font-size: ","px;\n    padding: 7px 12px;\n  "],["\n    border-radius: ",";\n    font-size: ","px;\n    padding: 7px 12px;\n  "])),(0,styled_system__WEBPACK_IMPORTED_MODULE_6__.R)("borderRadii.action-sm"),(0,styled_system__WEBPACK_IMPORTED_MODULE_6__.R)("fontSizes.0")),medium:(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.iv)(templateObject_2||(templateObject_2=__makeTemplateObject(["\n    border-radius: ",";\n    font-size: ","px;\n    padding: 9.5px 18px;\n  "],["\n    border-radius: ",";\n    font-size: ","px;\n    padding: 9.5px 18px;\n  "])),(0,styled_system__WEBPACK_IMPORTED_MODULE_6__.R)("borderRadii.action-md"),(0,styled_system__WEBPACK_IMPORTED_MODULE_6__.R)("fontSizes.1")),large:(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.iv)(templateObject_3||(templateObject_3=__makeTemplateObject(["\n    border-radius: ",";\n    font-size: ","px;\n    padding: 12px 22px;\n  "],["\n    border-radius: ",";\n    font-size: ","px;\n    padding: 12px 22px;\n  "])),(0,styled_system__WEBPACK_IMPORTED_MODULE_6__.R)("borderRadii.action-lg"),(0,styled_system__WEBPACK_IMPORTED_MODULE_6__.R)("fontSizes.2"))},variations={fill:(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.iv)(templateObject_4||(templateObject_4=__makeTemplateObject(["\n    background-color: ",";\n    color: ",";\n\n    &:hover {\n      background-color: ",";\n      ","\n    }\n    &:focus {\n      outline: ",";\n      box-shadow: ",";\n    }\n  "],["\n    background-color: ",";\n    color: ",";\n\n    &:hover {\n      background-color: ",";\n      ","\n    }\n    &:focus {\n      outline: ",";\n      box-shadow: ",";\n    }\n  "])),(function(props){return(0,_utils__WEBPACK_IMPORTED_MODULE_7__.ow)(props.disabled?"light":"base")(props)}),(function(props){return(0,_utils__WEBPACK_IMPORTED_MODULE_7__.MI)(props.disabled?"light":"base")(props)}),(function(props){return(0,_utils__WEBPACK_IMPORTED_MODULE_7__.ow)(props.disabled?"light":"dark")(props)}),(function(props){return props.disabled?"":"color: ".concat((0,_utils__WEBPACK_IMPORTED_MODULE_7__.MI)("dark")(props),";")}),(function(props){return"0px solid ".concat((0,_utils__WEBPACK_IMPORTED_MODULE_7__.ow)(props.disabled?"":"dark")(props))}),(function(props){return" 0 0 0 2px  ".concat((0,_utils__WEBPACK_IMPORTED_MODULE_7__.ow)(props.disabled?"":"dark")(props))})),link:(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.iv)(templateObject_5||(templateObject_5=__makeTemplateObject(["\n    -webkit-font-smoothing: inherit;\n    font-weight: ",";\n    color: ",";\n    line-height: ",";\n    vertical-align: inherit;\n    padding: 0;\n    background-color: transparent;\n    &:hover {\n      color: ",";\n      text-decoration: underline;\n    }\n  "],["\n    -webkit-font-smoothing: inherit;\n    font-weight: ",";\n    color: ",";\n    line-height: ",";\n    vertical-align: inherit;\n    padding: 0;\n    background-color: transparent;\n    &:hover {\n      color: ",";\n      text-decoration: underline;\n    }\n  "])),(function(props){return props.theme.fontWeights.medium}),(0,_utils__WEBPACK_IMPORTED_MODULE_7__.ow)("base"),(function(props){return props.theme.lineHeights.standard}),(0,_utils__WEBPACK_IMPORTED_MODULE_7__.ow)("dark")),outline:(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.iv)(templateObject_6||(templateObject_6=__makeTemplateObject(["\n    color: ",";\n    box-shadow: inset 0 0 0 2px ",";\n    background-color: transparent;\n\n    &:hover {\n      background-color: transparent;\n      ","\n    }\n  "],["\n    color: ",";\n    box-shadow: inset 0 0 0 2px ",";\n    background-color: transparent;\n\n    &:hover {\n      background-color: transparent;\n      ","\n    }\n  "])),(function(props){return(0,_utils__WEBPACK_IMPORTED_MODULE_7__.ow)(props.disabled?"light":"base")(props)}),(function(props){return(0,_utils__WEBPACK_IMPORTED_MODULE_7__.ow)(props.disabled?"light":"base")(props)}),(function(props){return props.disabled?"":"\n      color: ".concat((0,_utils__WEBPACK_IMPORTED_MODULE_7__.ow)("dark")(props),";\n      box-shadow: inset 0 0 0 2px ").concat((0,_utils__WEBPACK_IMPORTED_MODULE_7__.ow)("dark")(props),";\n    ")})),plain:(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.iv)(templateObject_7||(templateObject_7=__makeTemplateObject(["\n    background-color: transparent;\n    color: ",";\n    &:hover {\n      background-color: ",";\n      color: ",";\n    }\n    &:focus {\n      outline: 0px solid ",";\n      box-shadow: 0 0 0 2px ",";\n    }\n  "],["\n    background-color: transparent;\n    color: ",";\n    &:hover {\n      background-color: ",";\n      color: ",";\n    }\n    &:focus {\n      outline: 0px solid ",";\n      box-shadow: 0 0 0 2px ",";\n    }\n  "])),(0,_utils__WEBPACK_IMPORTED_MODULE_7__.ow)("base"),(0,_utils__WEBPACK_IMPORTED_MODULE_7__.ow)("background.light"),(0,_utils__WEBPACK_IMPORTED_MODULE_7__.ow)("dark"),(0,_utils__WEBPACK_IMPORTED_MODULE_7__.ow)("dark"),(0,_utils__WEBPACK_IMPORTED_MODULE_7__.ow)("dark")),subtle:(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.iv)(templateObject_8||(templateObject_8=__makeTemplateObject(["\n    background-color: ",";\n    color: ",";\n    &:hover {\n      background-color: ",";\n      color: ",";\n    }\n    &:focus {\n      outline: 0px solid ",";\n      box-shadow: 0 0 0 2px ",";\n    }\n  "],["\n    background-color: ",";\n    color: ",";\n    &:hover {\n      background-color: ",";\n      color: ",";\n    }\n    &:focus {\n      outline: 0px solid ",";\n      box-shadow: 0 0 0 2px ",";\n    }\n  "])),(0,_utils__WEBPACK_IMPORTED_MODULE_7__.ow)("background.base"),(0,_utils__WEBPACK_IMPORTED_MODULE_7__.ow)("base"),(0,_utils__WEBPACK_IMPORTED_MODULE_7__.ow)("background.light"),(0,_utils__WEBPACK_IMPORTED_MODULE_7__.ow)("dark"),(0,_utils__WEBPACK_IMPORTED_MODULE_7__.ow)("dark"),(0,_utils__WEBPACK_IMPORTED_MODULE_7__.ow)("dark")),lightFill:(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.iv)(templateObject_9||(templateObject_9=__makeTemplateObject(["\n    background-color: ",";\n    color: ",";\n    &:hover {\n      background-color: ",";\n      color: ",";\n    }\n    &:focus {\n      outline: ",";\n      box-shadow: ",";\n    }\n  "],["\n    background-color: ",";\n    color: ",";\n    &:hover {\n      background-color: ",";\n      color: ",";\n    }\n    &:focus {\n      outline: ",";\n      box-shadow: ",";\n    }\n  "])),(0,_utils__WEBPACK_IMPORTED_MODULE_7__.ow)("light"),(0,_utils__WEBPACK_IMPORTED_MODULE_7__.ow)("base"),(0,_utils__WEBPACK_IMPORTED_MODULE_7__.ow)("light"),(0,_utils__WEBPACK_IMPORTED_MODULE_7__.ow)("dark"),(function(props){return"0px solid ".concat((0,_utils__WEBPACK_IMPORTED_MODULE_7__.ow)(props.disabled?"":"dark")(props))}),(function(props){return" 0 0 0 2px  ".concat((0,_utils__WEBPACK_IMPORTED_MODULE_7__.ow)(props.disabled?"":"dark")(props))}))},buttonStyles=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.iv)(templateObject_10||(templateObject_10=__makeTemplateObject(["\n  -webkit-font-smoothing: antialiased;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  text-decoration: none;\n  font-family: inherit;\n  font-weight: ",";\n  line-height: 1.5;\n  cursor: ",";\n  border-radius: ",";\n  border-width: 0;\n  border-style: solid;\n\n  ",";\n  ",";\n  ",";\n  ",";\n\n  &:disabled {\n    cursor: not-allowed;\n    color: ",";\n    background-color: ",";\n  }\n"],["\n  -webkit-font-smoothing: antialiased;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  text-decoration: none;\n  font-family: inherit;\n  font-weight: ",";\n  line-height: 1.5;\n  cursor: ",";\n  border-radius: ",";\n  border-width: 0;\n  border-style: solid;\n\n  ",";\n  ",";\n  ",";\n  ",";\n\n  &:disabled {\n    cursor: not-allowed;\n    color: ",";\n    background-color: ",";\n  }\n"])),(function(props){return props.theme.fontWeights.bold}),(function(props){return props.disabled?"default":"pointer"}),(function(props){return props.theme.radius}),(function(_a){var theme=_a.theme;return(0,_utils__WEBPACK_IMPORTED_MODULE_7__.BS)(sizes,"medium",theme.mediaQueries)}),(0,_utils__WEBPACK_IMPORTED_MODULE_7__.hO)("Button",variations),styled_system__WEBPACK_IMPORTED_MODULE_6__.bf,styled_system__WEBPACK_IMPORTED_MODULE_6__.Dh,(0,_utils__WEBPACK_IMPORTED_MODULE_7__.ow)("text.light"),(0,_utils__WEBPACK_IMPORTED_MODULE_7__.ow)("background.base")),propTypes=__assign(__assign(__assign({size:prop_types__WEBPACK_IMPORTED_MODULE_8___default().oneOf(["small","medium","large"])},styled_system__WEBPACK_IMPORTED_MODULE_6__.bf.propTypes),styled_system__WEBPACK_IMPORTED_MODULE_6__.Dh.propTypes),{fullWidth:(0,_utils__WEBPACK_IMPORTED_MODULE_7__.aR)("width"),variation:prop_types__WEBPACK_IMPORTED_MODULE_8___default().oneOf(Object.keys(variations)),color:(0,_utils__WEBPACK_IMPORTED_MODULE_7__.nL)(),disabled:prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool}),Button=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.button.attrs((function(_a){var width=_a.width,fullWidth=_a.fullWidth,title=_a.title;return{width:fullWidth?1:width,"aria-label":_a["aria-label"]||title}}))(templateObject_11||(templateObject_11=__makeTemplateObject(["\n  ","\n"],["\n  ","\n"])),buttonStyles);Button.propTypes=propTypes,Button.defaultProps={color:"primary",size:"medium",variation:"fill"},Button.displayName="Button";const __WEBPACK_DEFAULT_EXPORT__=Button;var templateObject_1,templateObject_2,templateObject_3,templateObject_4,templateObject_5,templateObject_6,templateObject_7,templateObject_8,templateObject_9,templateObject_10,templateObject_11},"../../packages/core/lib-esm/Text/Text.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{ZP:()=>Text_Text});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.string.bold.js");var styled_components_browser_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),prop_types=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),index_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js");var utils=__webpack_require__("../../packages/core/lib-esm/utils/utils.js"),typographyAttrs=__webpack_require__("../../packages/core/lib-esm/utils/attrs/typographyAttrs.js"),__makeTemplateObject=function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},textProps=(0,styled_components_browser_esm.iv)(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  ","\n  color: ",";\n  ","\n\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  ","\n  ","\n  ","\n\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"],["\n  ","\n  color: ",";\n  ","\n\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  ","\n  ","\n  ","\n\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"])),(0,utils.hO)("Text"),(0,utils.ow)("base"),(function(props){return props.bg?"background-color: ".concat((0,utils.ow)(props.bg,"base")(props),";"):""}),index_esm.jf,index_esm.Cb,index_esm.kC,index_esm.kk,index_esm.jw,index_esm.ih,index_esm.tx,index_esm.Dh,index_esm.bf,(function caps(props){return props.caps?{textTransform:"uppercase"}:null}),(function regular(props){return props.regular?{fontWeight:props.theme.regular}:null}),(function bold(props){return props.bold?{fontWeight:props.theme.bold}:null}),index_esm.JB,index_esm.p_,index_esm.Ue,index_esm.Nv,index_esm.rX,index_esm.yd,(function textDecoration(props){return props.textDecoration?"text-decoration: ".concat(props.textDecoration,";"):""}),(function textShadow(props){var textShadowSize=props.textShadowSize||"md";return props.enableTextShadow?{textShadow:props.theme.textShadows[textShadowSize]}:null}),index_esm.YK,index_esm.W5),textAttrs=function textAttrs(props){return __assign(__assign({},(0,typographyAttrs.I)(props)),function textAlignAttrs(props){var align=props.align;return{textAlign:props.textAlign||align}}(props))},Text=styled_components_browser_esm.ZP.div.attrs(textAttrs)(templateObject_2||(templateObject_2=__makeTemplateObject(["\n  ","\n"],["\n  ","\n"])),textProps),Span=styled_components_browser_esm.ZP.span.attrs(textAttrs)(templateObject_3||(templateObject_3=__makeTemplateObject(["\n  ","\n"],["\n  ","\n"])),textProps),Paragraph=styled_components_browser_esm.ZP.p.attrs(textAttrs)(templateObject_4||(templateObject_4=__makeTemplateObject(["\n  ","\n"],["\n  ","\n"])),textProps),Strike=styled_components_browser_esm.ZP.s.attrs(textAttrs)(templateObject_5||(templateObject_5=__makeTemplateObject(["\n  ","\n"],["\n  ","\n"])),textProps);Text.displayName="Text",Text.propTypes=__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({},index_esm.jf.propTypes),index_esm.JB.propTypes),index_esm.p_.propTypes),index_esm.Ue.propTypes),index_esm.Cb.propTypes),index_esm.Nv.propTypes),index_esm.kC.propTypes),index_esm.kk.propTypes),index_esm.jw.propTypes),index_esm.ih.propTypes),index_esm.tx.propTypes),index_esm.Dh.propTypes),index_esm.yd.propTypes),index_esm.YK.propTypes),index_esm.bf.propTypes),index_esm.W5.propTypes),{align:(0,utils.aR)("textAlign"),bold:prop_types_default().bool,caps:prop_types_default().bool,color:(0,utils.nL)(),enableTextShadow:prop_types_default().bool,regular:prop_types_default().bool,textDecoration:prop_types_default().string,textShadowSize:prop_types_default().oneOf(["sm","md"]),textStyle:prop_types_default().oneOf(typographyAttrs.F)}),Text.span=Span,Text.span.displayName="Text.span",Text.p=Paragraph,Text.p.displayName="Text.p",Text.s=Strike,Text.s.displayName="Text.s";const Text_Text=Text;var templateObject_1,templateObject_2,templateObject_3,templateObject_4,templateObject_5},"../../packages/core/lib-esm/storybook/args/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O9:()=>colors,LL:()=>borderRadii,eP:()=>rounded,q:()=>shadows,sq:()=>textStyles,CH:()=>fontSizes});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.reduce.js");var _utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/lib-esm/utils/createPalette.js"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/core/lib-esm/utils/attrs/borderRadiusAttrs.js"),_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/core/lib-esm/utils/attrs/boxShadowAttrs.js"),_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/core/lib-esm/utils/attrs/typographyAttrs.js"),__spreadArray=function(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))},colors=__spreadArray(__spreadArray([""],_utils__WEBPACK_IMPORTED_MODULE_3__.g,!0),["NOTVALID"],!1),borderRadii=__spreadArray(__spreadArray([""],_utils__WEBPACK_IMPORTED_MODULE_4__.Ze,!0),["NOTVALID"],!1),rounded=__spreadArray(__spreadArray([""],_utils__WEBPACK_IMPORTED_MODULE_4__.YP,!0),["NOTVALID"],!1),shadows=__spreadArray(__spreadArray([""],_utils__WEBPACK_IMPORTED_MODULE_5__.d,!0),["NOTVALID"],!1),textStyles=__spreadArray(__spreadArray([""],_utils__WEBPACK_IMPORTED_MODULE_6__.F,!0),["NOTVALID"],!1),fontSizes=(["m","mt","mr","mb","ml","mx","my","p","pt","pr","pb","pl","px","py"].reduce((function(acc,prop){return acc[prop]={name:prop,type:{name:"string"},description:prop,table:{disable:!0}},acc}),{}),[0,1,2,3,4,5,6,7,8])},"../../packages/core/lib-esm/storybook/utils/ForwardRefsDemo.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>ForwardRefsDemo});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);function ForwardRefsDemo(_a){var refChild=_a.refChild,dsRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,refChild(dsRef))}ForwardRefsDemo.propTypes={refChild:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func},ForwardRefsDemo.__docgenInfo={description:"This is a demo component for Storybook that provides a ref to content using a render prop",methods:[],displayName:"ForwardRefsDemo",props:{refChild:{type:{name:"func"},required:!1,description:"Render prop that receives a ref stored on the instance of <ForwardRefsDemo/>"}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/lib-esm/storybook/utils/ForwardRefsDemo.js"]={name:"ForwardRefsDemo",docgenInfo:ForwardRefsDemo.__docgenInfo,path:"../../packages/core/lib-esm/storybook/utils/ForwardRefsDemo.js"})},"../../packages/core/lib-esm/utils/attrs/typographyAttrs.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F:()=>textStylesValues,I:()=>typographyAttrs});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.map.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.reduce.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/web.dom-collections.for-each.js");var textStylesValues=["title1","title2","title3","heading1","heading2","heading3","heading4","heading5","heading6","article","paragraph","caption","overline","disclaimer","highlight","subtitle1","subheading1","subheading2","subheading3","subheading4","subheading5","subheading6"],textStylesAllowedPropsAcc={fontSize:[],fontWeight:[],lineHeight:[],letterSpacing:[],caps:[]};function typographyAttrs(props){var textStyle=props.textStyle,theme=props.theme;return textStyle?Array.isArray(textStyle)?textStyle.map((function(style){return theme.typography[style]})).reduce((function(acc,style){return Object.keys(style).forEach((function(styleProp){var stylePropValue=style[styleProp]||null;styleProp&&stylePropValue?acc[styleProp].push(stylePropValue):acc[styleProp].push(null)})),acc}),textStylesAllowedPropsAcc):theme.typography[textStyle]:{}}},"../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.reduce.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/internals/export.js"),$reduce=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/internals/array-reduce.js").left,arrayMethodIsStrict=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/internals/array-method-is-strict.js"),CHROME_VERSION=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/internals/engine-v8-version.js"),IS_NODE=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/internals/engine-is-node.js");$({target:"Array",proto:!0,forced:!arrayMethodIsStrict("reduce")||!IS_NODE&&CHROME_VERSION>79&&CHROME_VERSION<83},{reduce:function reduce(callbackfn){var length=arguments.length;return $reduce(this,callbackfn,length,length>1?arguments[1]:void 0)}})},"../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.function.bind.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/internals/export.js")({target:"Function",proto:!0},{bind:__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/internals/function-bind.js")})}}]);