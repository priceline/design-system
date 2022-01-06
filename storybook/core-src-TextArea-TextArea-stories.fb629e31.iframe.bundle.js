(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{"../../packages/core/src/Button/Button.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return buttonStyles}));__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.string.bold.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.keys.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_templateObject11,styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),styled_system__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../packages/core/src/utils/utils.js");function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var sizes={small:Object(styled_components__WEBPACK_IMPORTED_MODULE_4__.c)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n    font-size: ","px;\n    padding: 7px 12px;\n  "])),Object(styled_system__WEBPACK_IMPORTED_MODULE_6__.z)("fontSizes.0")),medium:Object(styled_components__WEBPACK_IMPORTED_MODULE_4__.c)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n    font-size: ","px;\n    padding: 9.5px 18px;\n  "])),Object(styled_system__WEBPACK_IMPORTED_MODULE_6__.z)("fontSizes.1")),large:Object(styled_components__WEBPACK_IMPORTED_MODULE_4__.c)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n    font-size: ","px;\n    padding: 12px 22px;\n  "])),Object(styled_system__WEBPACK_IMPORTED_MODULE_6__.z)("fontSizes.2"))},variations={fill:Object(styled_components__WEBPACK_IMPORTED_MODULE_4__.c)(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["\n    background-color: ",";\n    color: ",";\n\n    &:hover {\n      background-color: ",";\n      ","\n    }\n    &:focus {\n      outline: ",";\n      box-shadow: ",";\n    }\n  "])),(function(props){return Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)(props.disabled?"light":"base")(props)}),(function(props){return Object(_utils__WEBPACK_IMPORTED_MODULE_7__.h)(props.disabled?"light":"base")(props)}),(function(props){return Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)(props.disabled?"light":"dark")(props)}),(function(props){return props.disabled?"":"color: "+Object(_utils__WEBPACK_IMPORTED_MODULE_7__.h)("dark")(props)+";"}),(function(props){return"0px solid "+Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)(props.disabled?"":"dark")(props)}),(function(props){return" 0 0 0 2px  "+Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)(props.disabled?"":"dark")(props)})),link:Object(styled_components__WEBPACK_IMPORTED_MODULE_4__.c)(_templateObject5||(_templateObject5=_taggedTemplateLiteralLoose(["\n    -webkit-font-smoothing: inherit;\n    font-weight: ",";\n    color: ",";\n    line-height: ",";\n    vertical-align: inherit;\n    padding: 0;\n    background-color: transparent;\n    &:hover {\n      color: ",";\n      text-decoration: underline;\n    }\n  "])),(function(props){return props.theme.fontWeights.medium}),Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)("base"),(function(props){return props.theme.lineHeights.standard}),Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)("dark")),outline:Object(styled_components__WEBPACK_IMPORTED_MODULE_4__.c)(_templateObject6||(_templateObject6=_taggedTemplateLiteralLoose(["\n    color: ",";\n    box-shadow: inset 0 0 0 2px ",";\n    background-color: transparent;\n\n    &:hover {\n      background-color: transparent;\n      ","\n    }\n  "])),(function(props){return Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)(props.disabled?"light":"base")(props)}),(function(props){return Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)(props.disabled?"light":"base")(props)}),(function(props){return props.disabled?"":"\n      color: "+Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)("dark")(props)+";\n      box-shadow: inset 0 0 0 2px "+Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)("dark")(props)+";\n    "})),plain:Object(styled_components__WEBPACK_IMPORTED_MODULE_4__.c)(_templateObject7||(_templateObject7=_taggedTemplateLiteralLoose(["\n    background-color: transparent;\n    color: ",";\n    &:hover {\n      background-color: ",";\n      color: ",";\n    }\n    &:focus {\n      outline: 0px solid ",";\n      box-shadow: 0 0 0 2px ",";\n    }\n  "])),Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)("base"),Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)("background.light"),Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)("dark"),Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)("dark"),Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)("dark")),subtle:Object(styled_components__WEBPACK_IMPORTED_MODULE_4__.c)(_templateObject8||(_templateObject8=_taggedTemplateLiteralLoose(["\n    background-color: ",";\n    color: ",";\n    &:hover {\n      background-color: ",";\n      color: ",";\n    }\n    &:focus {\n      outline: 0px solid ",";\n      box-shadow: 0 0 0 2px ",";\n    }\n  "])),Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)("background.base"),Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)("base"),Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)("background.light"),Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)("dark"),Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)("dark"),Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)("dark")),lightFill:Object(styled_components__WEBPACK_IMPORTED_MODULE_4__.c)(_templateObject9||(_templateObject9=_taggedTemplateLiteralLoose(["\n    background-color: ",";\n    color: ",";\n    &:hover {\n      background-color: ",";\n      color: ",";\n    }\n    &:focus {\n      outline: ",";\n      box-shadow: ",";\n    }\n  "])),Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)("light"),Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)("base"),Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)("light"),Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)("dark"),(function(props){return"0px solid "+Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)(props.disabled?"":"dark")(props)}),(function(props){return" 0 0 0 2px  "+Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)(props.disabled?"":"dark")(props)}))},buttonStyles=Object(styled_components__WEBPACK_IMPORTED_MODULE_4__.c)(_templateObject10||(_templateObject10=_taggedTemplateLiteralLoose(["\n  -webkit-font-smoothing: antialiased;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  text-decoration: none;\n  font-family: inherit;\n  font-weight: ",";\n  line-height: 1.5;\n  cursor: ",";\n  border-radius: ",";\n  border-width: 0;\n  border-style: solid;\n\n  ",";\n  ",";\n  ",";\n  ",";\n\n  &:disabled {\n    cursor: not-allowed;\n    color: ",";\n    background-color: ",";\n  }\n"])),(function(props){return props.theme.fontWeights.bold}),(function(props){return props.disabled?"default":"pointer"}),(function(props){return props.theme.radius}),(function(_ref){var theme=_ref.theme;return Object(_utils__WEBPACK_IMPORTED_MODULE_7__.a)(sizes,"medium",theme.mediaQueries)}),Object(_utils__WEBPACK_IMPORTED_MODULE_7__.b)("Button",variations),styled_system__WEBPACK_IMPORTED_MODULE_6__.B,styled_system__WEBPACK_IMPORTED_MODULE_6__.w,Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)("text.light"),Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)("background.base")),Button=styled_components__WEBPACK_IMPORTED_MODULE_4__.d.button.attrs((function(_ref2){var width=_ref2.width,fullWidth=_ref2.fullWidth,title=_ref2.title;return{width:fullWidth?1:width,"aria-label":_ref2["aria-label"]||title}}))(_templateObject11||(_templateObject11=_taggedTemplateLiteralLoose(["\n  ","\n"])),buttonStyles);Button.propTypes=Object.assign({size:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(["small","medium","large"])},styled_system__WEBPACK_IMPORTED_MODULE_6__.B.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_6__.w.propTypes,{fullWidth:Object(_utils__WEBPACK_IMPORTED_MODULE_7__.f)("width"),variation:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(Object.keys(variations)),color:Object(_utils__WEBPACK_IMPORTED_MODULE_7__.e)(),disabled:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool}),Button.defaultProps={color:"primary",size:"medium",variation:"fill"},Button.displayName="Button",__webpack_exports__.b=Button},"../../packages/core/src/Label/Label.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.assign.js");var _templateObject,styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/core/src/utils/utils.js");var Label=styled_components__WEBPACK_IMPORTED_MODULE_2__.d.label(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  font-size: 10px;\n  letter-spacing: 0.2px;\n  display: block;\n  width: 100%;\n  margin: 0;\n  color: ",";\n  ","\n\n  ","\n  "," "," "," ",";\n  ","\n  ","\n"])),Object(_utils__WEBPACK_IMPORTED_MODULE_4__.g)("base"),(function(props){return props.bg?"background-color: "+Object(_utils__WEBPACK_IMPORTED_MODULE_4__.g)(props.bg,"base")(props)+";":""}),Object(_utils__WEBPACK_IMPORTED_MODULE_4__.b)("Label"),styled_system__WEBPACK_IMPORTED_MODULE_3__.w,styled_system__WEBPACK_IMPORTED_MODULE_3__.i,styled_system__WEBPACK_IMPORTED_MODULE_3__.k,styled_system__WEBPACK_IMPORTED_MODULE_3__.B,(function nowrap(props){return props.nowrap?{whiteSpace:"nowrap"}:null}),(function accessiblyHide(props){return props.hidden?{position:"absolute",width:"1px",height:"1px",clip:"rect(1px, 1px, 1px, 1px)"}:null}));Label.propTypes=Object.assign({},styled_system__WEBPACK_IMPORTED_MODULE_3__.w.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_3__.i.propTypes,{color:Object(_utils__WEBPACK_IMPORTED_MODULE_4__.e)()},styled_system__WEBPACK_IMPORTED_MODULE_3__.k.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_3__.B.propTypes),Label.defaultProps={fontSize:"10px",fontWeight:"bold",color:"text.light"},Label.displayName="Label",Label.isLabel=!0,__webpack_exports__.a=Label},"../../packages/core/src/TextArea/TextArea.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"TextAreaComponent",(function(){return TextArea_stories_TextAreaComponent})),__webpack_require__.d(__webpack_exports__,"Colors",(function(){return TextArea_stories_Colors})),__webpack_require__.d(__webpack_exports__,"WithExternalLabel",(function(){return TextArea_stories_WithExternalLabel})),__webpack_require__.d(__webpack_exports__,"ForwardRefs",(function(){return TextArea_stories_ForwardRefs}));__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.slice.js");var _templateObject,styled_components_browser_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),index_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js"),prop_types=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),utils=__webpack_require__("../../packages/core/src/utils/utils.js");var TextArea=styled_components_browser_esm.d.textarea(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  appearance: none;\n  display: block;\n  width: 100%;\n  font-family: inherit;\n  font-size: ","px;\n  color: inherit;\n  background-color: transparent;\n  border-radius: ",";\n  border-width: 1px;\n  border-style: solid;\n\n  padding-top: 14px;\n  padding-bottom: 14px;\n  padding-left: 12px;\n  padding-right: 12px;\n\n  margin: 0;\n\n  ::placeholder {\n    color: ",";\n  }\n\n  ::-ms-clear {\n    display: none;\n  }\n\n  ","\n  "," ",";\n"])),Object(index_esm.z)("fontSizes.1"),Object(index_esm.z)("radius"),Object(utils.g)("text.light"),Object(utils.b)("TextArea"),utils.c,index_esm.w);TextArea.displayName="TextArea",TextArea.isField=!0,TextArea.propTypes=Object.assign({id:prop_types_default.a.string.isRequired,color:Object(utils.e)()},utils.c.propTypes,index_esm.w.propTypes);var TextArea_TextArea=TextArea,Box=__webpack_require__("../../packages/core/src/Box/Box.js"),Label=__webpack_require__("../../packages/core/src/Label/Label.js"),Button=__webpack_require__("../../packages/core/src/Button/Button.js"),ForwardRefsDemo=__webpack_require__("../../packages/core/storybook/utils/ForwardRefsDemo.js"),jsx_runtime=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js"),TextArea_stories_TextAreaComponent=(__webpack_exports__.default={title:"TextArea",component:TextArea_TextArea,parameters:{docs:{description:{component:"Simple styled textarea component that accepts a color."}}}},function TextAreaComponent(){return Object(jsx_runtime.jsx)(TextArea_TextArea,{id:"textarea-default",my:3})});TextArea_stories_TextAreaComponent.displayName="TextAreaComponent";var TextArea_stories_Colors=function Colors(){return Object(jsx_runtime.jsxs)(Box.a,{width:400,children:[Object(jsx_runtime.jsx)(TextArea_TextArea,{mb:3,id:"textarea-colors-1",placeholder:"No color"}),Object(jsx_runtime.jsx)(TextArea_TextArea,{mb:3,id:"textarea-colors-2",color:"primary",placeholder:"Primary"}),Object(jsx_runtime.jsx)(TextArea_TextArea,{mb:3,id:"textarea-colors-3",color:"secondary",placeholder:"Secondary"}),Object(jsx_runtime.jsx)(TextArea_TextArea,{mb:3,id:"textarea-colors-4",color:"warning",placeholder:"Warning"}),Object(jsx_runtime.jsx)(TextArea_TextArea,{mb:3,id:"textarea-colors-5",color:"alert",placeholder:"Alert"}),Object(jsx_runtime.jsx)(TextArea_TextArea,{mb:3,id:"textarea-colors-6",color:"caution",placeholder:"Caution"})]})};TextArea_stories_Colors.displayName="Colors";var TextArea_stories_WithExternalLabel=function WithExternalLabel(){return Object(jsx_runtime.jsxs)(Box.a,{width:400,children:[Object(jsx_runtime.jsx)(Label.a,{fontSize:4,htmlFor:"sample-textarea",children:"Label!"}),Object(jsx_runtime.jsx)(TextArea_TextArea,{id:"sample-textarea",placeholder:"Click the label"})]})};TextArea_stories_WithExternalLabel.displayName="WithExternalLabel";var TextArea_stories_ForwardRefs=function ForwardRefs(){return Object(jsx_runtime.jsx)(ForwardRefsDemo.a,{refChild:function refChild(dsRef){return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(TextArea_TextArea,{ref:dsRef,value:"Sad Panda :("}),Object(jsx_runtime.jsx)(Button.b,{onClick:function onClick(){return dsRef.current.value="Happy Panda :D"},mt:4,children:"Click to change input value via ref"})]})}})};TextArea_stories_ForwardRefs.displayName="ForwardRefs",TextArea_stories_TextAreaComponent.parameters=Object.assign({storySource:{source:"() => <TextArea id='textarea-default' my={3} />"}},TextArea_stories_TextAreaComponent.parameters),TextArea_stories_Colors.parameters=Object.assign({storySource:{source:"() => (\n  <Box width={400}>\n    <TextArea mb={3} id='textarea-colors-1' placeholder='No color' />\n    <TextArea mb={3} id='textarea-colors-2' color='primary' placeholder='Primary' />\n    <TextArea mb={3} id='textarea-colors-3' color='secondary' placeholder='Secondary' />\n    <TextArea mb={3} id='textarea-colors-4' color='warning' placeholder='Warning' />\n    <TextArea mb={3} id='textarea-colors-5' color='alert' placeholder='Alert' />\n    <TextArea mb={3} id='textarea-colors-6' color='caution' placeholder='Caution' />\n  </Box>\n)"}},TextArea_stories_Colors.parameters),TextArea_stories_WithExternalLabel.parameters=Object.assign({storySource:{source:"() => (\n  <Box width={400}>\n    <Label fontSize={4} htmlFor='sample-textarea'>\n      Label!\n    </Label>\n    <TextArea id='sample-textarea' placeholder='Click the label' />\n  </Box>\n)"}},TextArea_stories_WithExternalLabel.parameters),TextArea_stories_ForwardRefs.parameters=Object.assign({storySource:{source:"() => (\n  <ForwardRefDemo\n    refChild={(dsRef) => (\n      <>\n        <TextArea ref={dsRef} value='Sad Panda :(' />\n        <Button onClick={() => (dsRef.current.value = 'Happy Panda :D')} mt={4}>\n          Click to change input value via ref\n        </Button>\n      </>\n    )}\n  />\n)"}},TextArea_stories_ForwardRefs.parameters),TextArea_stories_TextAreaComponent.__docgenInfo={description:"",methods:[],displayName:"TextAreaComponent"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/src/TextArea/TextArea.stories.js"]={name:"TextAreaComponent",docgenInfo:TextArea_stories_TextAreaComponent.__docgenInfo,path:"../../packages/core/src/TextArea/TextArea.stories.js"}),TextArea_stories_Colors.__docgenInfo={description:"",methods:[],displayName:"Colors"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/src/TextArea/TextArea.stories.js"]={name:"Colors",docgenInfo:TextArea_stories_Colors.__docgenInfo,path:"../../packages/core/src/TextArea/TextArea.stories.js"}),TextArea_stories_WithExternalLabel.__docgenInfo={description:"",methods:[],displayName:"WithExternalLabel"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/src/TextArea/TextArea.stories.js"]={name:"WithExternalLabel",docgenInfo:TextArea_stories_WithExternalLabel.__docgenInfo,path:"../../packages/core/src/TextArea/TextArea.stories.js"}),TextArea_stories_ForwardRefs.__docgenInfo={description:"",methods:[],displayName:"ForwardRefs"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/src/TextArea/TextArea.stories.js"]={name:"ForwardRefs",docgenInfo:TextArea_stories_ForwardRefs.__docgenInfo,path:"../../packages/core/src/TextArea/TextArea.stories.js"})},"../../packages/core/storybook/utils/ForwardRefsDemo.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return ForwardRefsDemo}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");function ForwardRefsDemo(_ref){var refChild=_ref.refChild,dsRef=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:refChild(dsRef)})}ForwardRefsDemo.propTypes={refChild:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func},ForwardRefsDemo.__docgenInfo={description:"This is a demo component for Storybook that provides a ref to content using a render prop",methods:[],displayName:"ForwardRefsDemo",props:{refChild:{type:{name:"func"},required:!1,description:"Render prop that receives a ref stored on the instance of <ForwardRefsDemo/>"}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/storybook/utils/ForwardRefsDemo.js"]={name:"ForwardRefsDemo",docgenInfo:ForwardRefsDemo.__docgenInfo,path:"../../packages/core/storybook/utils/ForwardRefsDemo.js"})}}]);