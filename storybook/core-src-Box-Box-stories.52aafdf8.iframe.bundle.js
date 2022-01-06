(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.reduce.js":function(module,exports,__webpack_require__){"use strict";var $=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/internals/export.js"),$reduce=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/internals/array-reduce.js").left,arrayMethodIsStrict=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/internals/array-method-is-strict.js"),CHROME_VERSION=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/internals/engine-v8-version.js"),IS_NODE=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/internals/engine-is-node.js");$({target:"Array",proto:!0,forced:!arrayMethodIsStrict("reduce")||!IS_NODE&&CHROME_VERSION>79&&CHROME_VERSION<83},{reduce:function reduce(callbackfn){var length=arguments.length;return $reduce(this,callbackfn,length,length>1?arguments[1]:void 0)}})},"../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.function.bind.js":function(module,exports,__webpack_require__){__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/internals/export.js")({target:"Function",proto:!0},{bind:__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/internals/function-bind.js")})},"../../packages/core/src/Box/Box.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_Box",(function(){return _Box})),__webpack_require__.d(__webpack_exports__,"DisplayAndSize",(function(){return DisplayAndSize})),__webpack_require__.d(__webpack_exports__,"Padding",(function(){return Padding})),__webpack_require__.d(__webpack_exports__,"Height",(function(){return Height})),__webpack_require__.d(__webpack_exports__,"MaxAndMinValues",(function(){return MaxAndMinValues})),__webpack_require__.d(__webpack_exports__,"Margin",(function(){return Margin})),__webpack_require__.d(__webpack_exports__,"Color",(function(){return Color})),__webpack_require__.d(__webpack_exports__,"BoxShadow",(function(){return BoxShadow})),__webpack_require__.d(__webpack_exports__,"Size",(function(){return Size})),__webpack_require__.d(__webpack_exports__,"Width",(function(){return Width})),__webpack_require__.d(__webpack_exports__,"PixelWidth",(function(){return PixelWidth})),__webpack_require__.d(__webpack_exports__,"VwWidth",(function(){return VwWidth})),__webpack_require__.d(__webpack_exports__,"DirectionalPadding",(function(){return Box_stories_DirectionalPadding})),__webpack_require__.d(__webpack_exports__,"DirectionalMargin",(function(){return Box_stories_DirectionalMargin})),__webpack_require__.d(__webpack_exports__,"ThemeUserCaseColorText",(function(){return Box_stories_ThemeUserCaseColorText}));__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.function.bind.js");var react=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),react_default=__webpack_require__.n(react),Box=__webpack_require__("../../packages/core/src/Box/Box.js"),Text=__webpack_require__("../../packages/core/src/Text/Text.js"),storybook_args=(__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.join.js"),__webpack_require__("../../packages/core/storybook/args/index.js")),jsx_runtime=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js"),defaultArgs={p:3,m:0,children:Object(jsx_runtime.jsx)(Text.a,{children:"Hello!"})},argTypes={color:{name:"color",type:{name:"string",required:!1},description:"Palette color to use",table:{type:{summary:"Colors",detail:"- "+storybook_args.a.join("\n- ")},defaultValue:{summary:"primary"}},control:{type:"select",options:storybook_args.a}},boxShadowSize:{name:"boxShadowSize",type:{name:"string",required:!1},description:"Size of the box shadow",table:{defaultValue:{summary:null}},control:{type:"select",options:["sm","md","lg","xl"]}},size:{name:"size",type:{name:"string",required:!1},description:"size",table:{defaultValue:{summary:void 0}}},height:{name:"height",type:{name:"string",required:!1},description:"height",table:{defaultValue:{summary:void 0}}},width:{name:"width",type:{name:"string",required:!1},description:"width",table:{defaultValue:{summary:void 0}}},minHeight:{name:"minHeight",type:{name:"string",required:!1},description:"minHeight",table:{defaultValue:{summary:void 0}}},minWidth:{name:"minWidth",type:{name:"string",required:!1},description:"minWidth",table:{defaultValue:{summary:void 0}}},maxHeight:{name:"maxHeight",type:{name:"string",required:!1},description:"maxHeight",table:{defaultValue:{summary:void 0}}},maxWidth:{name:"maxWidth",type:{name:"string",required:!1},description:"maxWidth",table:{defaultValue:{summary:void 0}}}},Box_stories_Template=(__webpack_exports__.default={title:"core / Box",component:Box.a,args:defaultArgs,argTypes:argTypes,parameters:{docs:{description:{component:"A low-level layout component for setting color, display, height, margin, maxHeight, maxWidth, minHeight, minWidth, padding, size, textAlign, and width."}}}},function Template(args){return Object(jsx_runtime.jsx)(Box.a,Object.assign({},args))});Box_stories_Template.displayName="Template";var _Box=Box_stories_Template.bind({}),DisplayAndSize=Box_stories_Template.bind({});DisplayAndSize.storyName="Display and Size",DisplayAndSize.args={color:"alert.base",display:["none",null,"block"],size:250};var Padding=Box_stories_Template.bind({});Padding.args={p:4,color:"background.base"};var Height=Box_stories_Template.bind({});Height.args={color:"warning.base",height:[250,350,450,550],width:[150,250,350,450]};var MaxAndMinValues=Box_stories_Template.bind({});MaxAndMinValues.storyName="Min and Max Values",MaxAndMinValues.args={color:"priceSecondary.base",maxHeight:[300,null,400,null,500],maxWidth:[300,null,400,null,500],minHeight:[100,null,200,null,300],minWidth:[300,null,200,null,100]};var Margin=Box_stories_Template.bind({});Margin.args={m:3,color:"background.base"};var Color=Box_stories_Template.bind({});Color.args={color:"primary.base"};var BoxShadow=Box_stories_Template.bind({});BoxShadow.args={boxShadowSize:"sm",p:2,mb:"42px",color:"primary.base"};var Size=Box_stories_Template.bind({});Size.args={color:"primary.base",size:200};var Box_stories_DimsChildren=function DimsChildren(){return Object(jsx_runtime.jsx)(Text.a,{color:"text.lightest",children:"Box Dimensions"})};Box_stories_DimsChildren.displayName="DimsChildren";var Width=Box_stories_Template.bind({});Width.args={color:"primary.base",width:.5,children:Object(jsx_runtime.jsx)(Box_stories_DimsChildren,{})};var PixelWidth=Box_stories_Template.bind({});PixelWidth.args={color:"primary.base",width:256,children:Object(jsx_runtime.jsx)(Box_stories_DimsChildren,{})};var VwWidth=Box_stories_Template.bind({});VwWidth.storyName="Viewport Width unit",VwWidth.args={color:"primary.base",width:"75vw",children:Object(jsx_runtime.jsx)(Box_stories_DimsChildren,{})};var Box_stories_DirectionalPadding=function DirectionalPadding(){return Object(jsx_runtime.jsxs)(Box.a,{p:3,children:[Object(jsx_runtime.jsx)(Box.a,{m:1,pt:3,color:"white",bg:"blue",children:"Padding Top"}),Object(jsx_runtime.jsx)(Box.a,{m:1,pr:3,color:"white",bg:"blue",children:"Padding Right"}),Object(jsx_runtime.jsx)(Box.a,{m:1,pb:3,color:"white",bg:"blue",children:"Padding Bottom"}),Object(jsx_runtime.jsx)(Box.a,{m:1,pl:3,color:"white",bg:"blue",children:"Padding Left"}),Object(jsx_runtime.jsx)(Box.a,{m:1,px:3,color:"white",bg:"blue",children:"Padding X-Axis"}),Object(jsx_runtime.jsx)(Box.a,{m:1,py:3,color:"white",bg:"blue",children:"Padding Y-Axis"})]})};Box_stories_DirectionalPadding.displayName="DirectionalPadding";var Box_stories_DirectionalMargin=function DirectionalMargin(){return Object(jsx_runtime.jsxs)(Box.a,{p:3,children:[Object(jsx_runtime.jsx)(Box.a,{mt:3,color:"white",bg:"blue",children:"Margin Top"}),Object(jsx_runtime.jsx)(Box.a,{mr:3,color:"white",bg:"blue",children:"Margin Right"}),Object(jsx_runtime.jsx)(Box.a,{mb:3,color:"white",bg:"blue",children:"Margin Bottom"}),Object(jsx_runtime.jsx)(Box.a,{ml:3,color:"white",bg:"blue",children:"Margin Left"}),Object(jsx_runtime.jsx)(Box.a,{mx:3,color:"white",bg:"blue",children:"Margin X-Axis"}),Object(jsx_runtime.jsx)(Box.a,{my:3,color:"white",bg:"blue",children:"Margin Y-Axis"})]})};Box_stories_DirectionalMargin.displayName="DirectionalMargin";var Box_stories_ThemeUserCaseColorText=function ThemeUserCaseColorText(){return Object(jsx_runtime.jsxs)(react_default.a.Fragment,{children:[Object(jsx_runtime.jsxs)(Box.a,{p:3,children:[Object(jsx_runtime.jsx)(Box.a,{mt:3,color:"text",children:'color="text" w/o bg prop: retains the original "text" color from original color set as backward compatible: expected style w. "text" color and white background'}),Object(jsx_runtime.jsx)(Box.a,{mt:3,color:"purple",children:'color="purple" as none "text" color w/o bg prop'})]}),Object(jsx_runtime.jsxs)(Box.a,{p:5,children:[Object(jsx_runtime.jsx)(Box.a,{mt:3,color:"text.lightest",bg:"background.dark",children:'Theme 1: color="text.lightest" value & bg="background.dark"'}),Object(jsx_runtime.jsx)(Box.a,{mt:3,color:"text",bg:"background.lightest",children:'Theme 2: color="text" & "bg"="background.lightest"'})]})]})};Box_stories_ThemeUserCaseColorText.displayName="ThemeUserCaseColorText",Box_stories_ThemeUserCaseColorText.storyName="Theme user case: color=text",_Box.parameters=Object.assign({storySource:{source:"(args) => <Box {...args} />"}},_Box.parameters),DisplayAndSize.parameters=Object.assign({storySource:{source:"(args) => <Box {...args} />"}},DisplayAndSize.parameters),Padding.parameters=Object.assign({storySource:{source:"(args) => <Box {...args} />"}},Padding.parameters),Height.parameters=Object.assign({storySource:{source:"(args) => <Box {...args} />"}},Height.parameters),MaxAndMinValues.parameters=Object.assign({storySource:{source:"(args) => <Box {...args} />"}},MaxAndMinValues.parameters),Margin.parameters=Object.assign({storySource:{source:"(args) => <Box {...args} />"}},Margin.parameters),Color.parameters=Object.assign({storySource:{source:"(args) => <Box {...args} />"}},Color.parameters),BoxShadow.parameters=Object.assign({storySource:{source:"(args) => <Box {...args} />"}},BoxShadow.parameters),Size.parameters=Object.assign({storySource:{source:"(args) => <Box {...args} />"}},Size.parameters),Width.parameters=Object.assign({storySource:{source:"(args) => <Box {...args} />"}},Width.parameters),PixelWidth.parameters=Object.assign({storySource:{source:"(args) => <Box {...args} />"}},PixelWidth.parameters),VwWidth.parameters=Object.assign({storySource:{source:"(args) => <Box {...args} />"}},VwWidth.parameters),Box_stories_DirectionalPadding.parameters=Object.assign({storySource:{source:"() => (\n  <Box p={3}>\n    <Box m={1} pt={3} color='white' bg='blue'>\n      Padding Top\n    </Box>\n    <Box m={1} pr={3} color='white' bg='blue'>\n      Padding Right\n    </Box>\n    <Box m={1} pb={3} color='white' bg='blue'>\n      Padding Bottom\n    </Box>\n    <Box m={1} pl={3} color='white' bg='blue'>\n      Padding Left\n    </Box>\n    <Box m={1} px={3} color='white' bg='blue'>\n      Padding X-Axis\n    </Box>\n    <Box m={1} py={3} color='white' bg='blue'>\n      Padding Y-Axis\n    </Box>\n  </Box>\n)"}},Box_stories_DirectionalPadding.parameters),Box_stories_DirectionalMargin.parameters=Object.assign({storySource:{source:"() => (\n  <Box p={3}>\n    <Box mt={3} color='white' bg='blue'>\n      Margin Top\n    </Box>\n    <Box mr={3} color='white' bg='blue'>\n      Margin Right\n    </Box>\n    <Box mb={3} color='white' bg='blue'>\n      Margin Bottom\n    </Box>\n    <Box ml={3} color='white' bg='blue'>\n      Margin Left\n    </Box>\n    <Box mx={3} color='white' bg='blue'>\n      Margin X-Axis\n    </Box>\n    <Box my={3} color='white' bg='blue'>\n      Margin Y-Axis\n    </Box>\n  </Box>\n)"}},Box_stories_DirectionalMargin.parameters),Box_stories_ThemeUserCaseColorText.parameters=Object.assign({storySource:{source:'() => (\n  <React.Fragment>\n    <Box p={3}>\n      <Box mt={3} color=\'text\'>\n        color="text" w/o bg prop: retains the original "text" color from original color set as backward\n        compatible: expected style w. "text" color and white background\n      </Box>\n      <Box mt={3} color=\'purple\'>\n        color="purple" as none "text" color w/o bg prop\n      </Box>\n    </Box>\n    <Box p={5}>\n      <Box mt={3} color=\'text.lightest\' bg=\'background.dark\'>\n        Theme 1: color="text.lightest" value & bg="background.dark"\n      </Box>\n      <Box mt={3} color=\'text\' bg=\'background.lightest\'>\n        Theme 2: color="text" & "bg"="background.lightest"\n      </Box>\n    </Box>\n  </React.Fragment>\n)'}},Box_stories_ThemeUserCaseColorText.parameters),Box_stories_DirectionalPadding.__docgenInfo={description:"",methods:[],displayName:"DirectionalPadding"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/src/Box/Box.stories.js"]={name:"DirectionalPadding",docgenInfo:Box_stories_DirectionalPadding.__docgenInfo,path:"../../packages/core/src/Box/Box.stories.js"}),Box_stories_DirectionalMargin.__docgenInfo={description:"",methods:[],displayName:"DirectionalMargin"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/src/Box/Box.stories.js"]={name:"DirectionalMargin",docgenInfo:Box_stories_DirectionalMargin.__docgenInfo,path:"../../packages/core/src/Box/Box.stories.js"}),Box_stories_ThemeUserCaseColorText.__docgenInfo={description:"",methods:[],displayName:"ThemeUserCaseColorText"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/src/Box/Box.stories.js"]={name:"ThemeUserCaseColorText",docgenInfo:Box_stories_ThemeUserCaseColorText.__docgenInfo,path:"../../packages/core/src/Box/Box.stories.js"})},"../../packages/core/src/Text/Text.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.string.bold.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.assign.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),prop_types__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__),styled_system__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../packages/core/src/utils/utils.js"),_excluded=["align"],_excluded2=["align"],_excluded3=["align"],_excluded4=["align"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var textProps=Object(styled_components__WEBPACK_IMPORTED_MODULE_6__.c)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n  ","\n  color: ",";\n  ","\n\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  ","\n  ","\n  ","\n\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"])),Object(_utils__WEBPACK_IMPORTED_MODULE_9__.b)("Text"),Object(_utils__WEBPACK_IMPORTED_MODULE_9__.g)("base"),(function(props){return props.bg?"background-color: "+Object(_utils__WEBPACK_IMPORTED_MODULE_9__.g)(props.bg,"base")(props)+";":""}),styled_system__WEBPACK_IMPORTED_MODULE_8__.f,styled_system__WEBPACK_IMPORTED_MODULE_8__.l,styled_system__WEBPACK_IMPORTED_MODULE_8__.p,styled_system__WEBPACK_IMPORTED_MODULE_8__.q,styled_system__WEBPACK_IMPORTED_MODULE_8__.r,styled_system__WEBPACK_IMPORTED_MODULE_8__.s,styled_system__WEBPACK_IMPORTED_MODULE_8__.t,styled_system__WEBPACK_IMPORTED_MODULE_8__.w,styled_system__WEBPACK_IMPORTED_MODULE_8__.B,(function caps(props){return props.caps?{textTransform:"uppercase",letterSpacing:Object(styled_system__WEBPACK_IMPORTED_MODULE_8__.z)("letterSpacings.caps")(props)}:null}),(function regular(props){return props.regular?{fontWeight:props.theme.regular}:null}),(function bold(props){return props.bold?{fontWeight:props.theme.bold}:null}),styled_system__WEBPACK_IMPORTED_MODULE_8__.i,styled_system__WEBPACK_IMPORTED_MODULE_8__.j,styled_system__WEBPACK_IMPORTED_MODULE_8__.k,styled_system__WEBPACK_IMPORTED_MODULE_8__.o,styled_system__WEBPACK_IMPORTED_MODULE_8__.x,(function textDecoration(props){return props.textDecoration?"text-decoration: "+props.textDecoration+";":""}),(function textShadow(props){var textShadowSize=props.textShadowSize||"md";return props.enableTextShadow?{textShadow:props.theme.textShadows[textShadowSize]}:null}),styled_system__WEBPACK_IMPORTED_MODULE_8__.y,styled_system__WEBPACK_IMPORTED_MODULE_8__.C),Text=styled_components__WEBPACK_IMPORTED_MODULE_6__.d.div.attrs((function(_ref){var align=_ref.align,props=_objectWithoutProperties(_ref,_excluded);return Object.assign({textAlign:align},props)}))(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n  ","\n"])),textProps),Span=styled_components__WEBPACK_IMPORTED_MODULE_6__.d.span.attrs((function(_ref2){var align=_ref2.align,props=_objectWithoutProperties(_ref2,_excluded2);return Object.assign({textAlign:align},props)}))(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n  ","\n"])),textProps),Paragraph=styled_components__WEBPACK_IMPORTED_MODULE_6__.d.p.attrs((function(_ref3){var align=_ref3.align,props=_objectWithoutProperties(_ref3,_excluded3);return Object.assign({textAlign:align},props)}))(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["\n  ","\n"])),textProps),Strike=styled_components__WEBPACK_IMPORTED_MODULE_6__.d.s.attrs((function(_ref4){var align=_ref4.align,props=_objectWithoutProperties(_ref4,_excluded4);return Object.assign({textAlign:align},props)}))(_templateObject5||(_templateObject5=_taggedTemplateLiteralLoose(["\n  ","\n"])),textProps);Text.displayName="Text",Text.propTypes=Object.assign({},styled_system__WEBPACK_IMPORTED_MODULE_8__.f.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_8__.i.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_8__.j.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_8__.k.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_8__.l.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_8__.o.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_8__.p.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_8__.q.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_8__.r.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_8__.s.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_8__.t.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_8__.w.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_8__.x.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_8__.y.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_8__.B.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_8__.C.propTypes,{align:Object(_utils__WEBPACK_IMPORTED_MODULE_9__.f)("textAlign"),bold:prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,caps:prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,color:Object(_utils__WEBPACK_IMPORTED_MODULE_9__.e)(),enableTextShadow:prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,regular:prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,textDecoration:prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,textShadowSize:prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf(["sm","md"])}),Text.span=Span,Text.span.displayName="Text.span",Text.p=Paragraph,Text.p.displayName="Text.p",Text.s=Strike,Text.s.displayName="Text.s",__webpack_exports__.a=Text},"../../packages/core/storybook/args/index.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return colors})),__webpack_require__.d(__webpack_exports__,"b",(function(){return fontSizes}));__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.reduce.js");var colors=["primary","secondary","text","success","error","warning","alert","caution","notify","pricePrimary","priceSecondary","promoPrimary","promoSecondary","border","background"],fontSizes=(["m","mt","mr","mb","ml","mx","my","p","pt","pr","pb","pl","px","py"].reduce((function(acc,prop){return acc[prop]={name:prop,type:{name:"string",required:!1},description:prop,table:{defaultValue:{summary:void 0}}},acc}),{}),[0,1,2,3,4,5,6,7,8])}}]);