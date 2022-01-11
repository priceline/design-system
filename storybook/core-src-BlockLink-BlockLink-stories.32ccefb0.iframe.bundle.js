"use strict";(self.webpackChunk_priceline_storybook=self.webpackChunk_priceline_storybook||[]).push([[6549],{"../../packages/core/src/BlockLink/BlockLink.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CompositionWithoutContainer:()=>CompositionWithoutContainer,ContainingBackgroundImage:()=>ContainingBackgroundImage,ForwardRefs:()=>ForwardRefs,default:()=>BlockLink_stories});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.slice.js");var _templateObject,styled_components_browser_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),Link=__webpack_require__("../../packages/core/src/Link/Link.js");var BlockLink=(0,styled_components_browser_esm.ZP)(Link.Z)(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  display: block;\n  color: inherit;\n  text-decoration: none;\n"])));BlockLink.displayName="BlockLink",BlockLink.propTypes=Link.Z.propTypes;const BlockLink_BlockLink=BlockLink;var Flex=__webpack_require__("../../packages/core/src/Flex/Flex.js"),BackgroundImage=__webpack_require__("../../packages/core/src/BackgroundImage/BackgroundImage.js"),Box=__webpack_require__("../../packages/core/src/Box/Box.js"),Text=__webpack_require__("../../packages/core/src/Text/Text.js"),Button=__webpack_require__("../../packages/core/src/Button/Button.js"),ForwardRefsDemo=__webpack_require__("../../packages/core/storybook/utils/ForwardRefsDemo.js"),jsx_runtime=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");const BlockLink_stories={title:"BlockLink",component:BlockLink_BlockLink};var ContainingBackgroundImage=function ContainingBackgroundImage(){return(0,jsx_runtime.jsx)(Flex.Z,{justifyContent:"center",alignItems:"center",color:"white",children:(0,jsx_runtime.jsx)(BlockLink_BlockLink,{href:"https://www.priceline.com",target:"_blank",children:(0,jsx_runtime.jsx)(BackgroundImage.Z,{image:"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=aee8a50c86478d935556d865624506e4",width:"640px",children:(0,jsx_runtime.jsx)(Box.Z,{p:4,children:(0,jsx_runtime.jsx)(Text.ZP,{textAlign:"center",children:"Click to open priceline.com in new tab!"})})})})})};ContainingBackgroundImage.displayName="ContainingBackgroundImage",ContainingBackgroundImage.story={name:"containing BackgroundImage"};var ForwardRefs=function ForwardRefs(){return(0,jsx_runtime.jsx)(ForwardRefsDemo.Z,{refChild:function refChild(dsRef){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(BlockLink_BlockLink,{color:"text.dark",ref:dsRef,children:"I am a link!"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(Button.Z,{color:"error",onClick:function onClick(){return dsRef.current.innerHTML="Bacon!"},mt:4,children:"Click to update link text via ref"})]})}})};ForwardRefs.displayName="ForwardRefs",ForwardRefs.story={name:"Forward refs"};var CompositionWithoutContainer=function CompositionWithoutContainer(){return(0,jsx_runtime.jsx)(Flex.Z,{justifyContent:"center",alignItems:"center",color:"purple",children:(0,jsx_runtime.jsx)(BlockLink_BlockLink,{href:"https://www.google.com",children:(0,jsx_runtime.jsx)(Text.ZP,{fontSize:2,bold:!0,textAlign:"center",children:"Click to go to google.com!"})})})};CompositionWithoutContainer.displayName="CompositionWithoutContainer",CompositionWithoutContainer.story={name:"composition without container"},ContainingBackgroundImage.parameters=Object.assign({storySource:{source:"() => (\n  <Flex justifyContent='center' alignItems='center' color='white'>\n    <BlockLink href='https://www.priceline.com' target='_blank'>\n      <BackgroundImage image={image} width='640px'>\n        <Box p={4}>\n          <Text textAlign='center'>Click to open priceline.com in new tab!</Text>\n        </Box>\n      </BackgroundImage>\n    </BlockLink>\n  </Flex>\n)"}},ContainingBackgroundImage.parameters),ForwardRefs.parameters=Object.assign({storySource:{source:"() => (\n  <ForwardRefDemo\n    refChild={(dsRef) => (\n      <>\n        <BlockLink color='text.dark' ref={dsRef}>\n          I am a link!\n        </BlockLink>\n        <br />\n        <Button color='error' onClick={() => (dsRef.current.innerHTML = 'Bacon!')} mt={4}>\n          Click to update link text via ref\n        </Button>\n      </>\n    )}\n  />\n)"}},ForwardRefs.parameters),CompositionWithoutContainer.parameters=Object.assign({storySource:{source:"() => (\n  <Flex justifyContent='center' alignItems='center' color='purple'>\n    <BlockLink href='https://www.google.com'>\n      <Text fontSize={2} bold textAlign='center'>\n        Click to go to google.com!\n      </Text>\n    </BlockLink>\n  </Flex>\n)"}},CompositionWithoutContainer.parameters),ContainingBackgroundImage.__docgenInfo={description:"",methods:[],displayName:"ContainingBackgroundImage"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/src/BlockLink/BlockLink.stories.js"]={name:"ContainingBackgroundImage",docgenInfo:ContainingBackgroundImage.__docgenInfo,path:"../../packages/core/src/BlockLink/BlockLink.stories.js"}),ForwardRefs.__docgenInfo={description:"",methods:[],displayName:"ForwardRefs"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/src/BlockLink/BlockLink.stories.js"]={name:"ForwardRefs",docgenInfo:ForwardRefs.__docgenInfo,path:"../../packages/core/src/BlockLink/BlockLink.stories.js"}),CompositionWithoutContainer.__docgenInfo={description:"",methods:[],displayName:"CompositionWithoutContainer"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/src/BlockLink/BlockLink.stories.js"]={name:"CompositionWithoutContainer",docgenInfo:CompositionWithoutContainer.__docgenInfo,path:"../../packages/core/src/BlockLink/BlockLink.stories.js"})},"../../packages/core/src/Button/Button.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>buttonStyles,Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.string.bold.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.keys.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_templateObject11,styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),prop_types__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__),styled_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/core/src/utils/utils.js");function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var sizes={small:(0,styled_components__WEBPACK_IMPORTED_MODULE_4__.iv)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n    font-size: ","px;\n    padding: 7px 12px;\n  "])),(0,styled_system__WEBPACK_IMPORTED_MODULE_5__.R)("fontSizes.0")),medium:(0,styled_components__WEBPACK_IMPORTED_MODULE_4__.iv)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n    font-size: ","px;\n    padding: 9.5px 18px;\n  "])),(0,styled_system__WEBPACK_IMPORTED_MODULE_5__.R)("fontSizes.1")),large:(0,styled_components__WEBPACK_IMPORTED_MODULE_4__.iv)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n    font-size: ","px;\n    padding: 12px 22px;\n  "])),(0,styled_system__WEBPACK_IMPORTED_MODULE_5__.R)("fontSizes.2"))},variations={fill:(0,styled_components__WEBPACK_IMPORTED_MODULE_4__.iv)(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["\n    background-color: ",";\n    color: ",";\n\n    &:hover {\n      background-color: ",";\n      ","\n    }\n    &:focus {\n      outline: ",";\n      box-shadow: ",";\n    }\n  "])),(function(props){return(0,_utils__WEBPACK_IMPORTED_MODULE_6__.ow)(props.disabled?"light":"base")(props)}),(function(props){return(0,_utils__WEBPACK_IMPORTED_MODULE_6__.MI)(props.disabled?"light":"base")(props)}),(function(props){return(0,_utils__WEBPACK_IMPORTED_MODULE_6__.ow)(props.disabled?"light":"dark")(props)}),(function(props){return props.disabled?"":"color: "+(0,_utils__WEBPACK_IMPORTED_MODULE_6__.MI)("dark")(props)+";"}),(function(props){return"0px solid "+(0,_utils__WEBPACK_IMPORTED_MODULE_6__.ow)(props.disabled?"":"dark")(props)}),(function(props){return" 0 0 0 2px  "+(0,_utils__WEBPACK_IMPORTED_MODULE_6__.ow)(props.disabled?"":"dark")(props)})),link:(0,styled_components__WEBPACK_IMPORTED_MODULE_4__.iv)(_templateObject5||(_templateObject5=_taggedTemplateLiteralLoose(["\n    -webkit-font-smoothing: inherit;\n    font-weight: ",";\n    color: ",";\n    line-height: ",";\n    vertical-align: inherit;\n    padding: 0;\n    background-color: transparent;\n    &:hover {\n      color: ",";\n      text-decoration: underline;\n    }\n  "])),(function(props){return props.theme.fontWeights.medium}),(0,_utils__WEBPACK_IMPORTED_MODULE_6__.ow)("base"),(function(props){return props.theme.lineHeights.standard}),(0,_utils__WEBPACK_IMPORTED_MODULE_6__.ow)("dark")),outline:(0,styled_components__WEBPACK_IMPORTED_MODULE_4__.iv)(_templateObject6||(_templateObject6=_taggedTemplateLiteralLoose(["\n    color: ",";\n    box-shadow: inset 0 0 0 2px ",";\n    background-color: transparent;\n\n    &:hover {\n      background-color: transparent;\n      ","\n    }\n  "])),(function(props){return(0,_utils__WEBPACK_IMPORTED_MODULE_6__.ow)(props.disabled?"light":"base")(props)}),(function(props){return(0,_utils__WEBPACK_IMPORTED_MODULE_6__.ow)(props.disabled?"light":"base")(props)}),(function(props){return props.disabled?"":"\n      color: "+(0,_utils__WEBPACK_IMPORTED_MODULE_6__.ow)("dark")(props)+";\n      box-shadow: inset 0 0 0 2px "+(0,_utils__WEBPACK_IMPORTED_MODULE_6__.ow)("dark")(props)+";\n    "})),plain:(0,styled_components__WEBPACK_IMPORTED_MODULE_4__.iv)(_templateObject7||(_templateObject7=_taggedTemplateLiteralLoose(["\n    background-color: transparent;\n    color: ",";\n    &:hover {\n      background-color: ",";\n      color: ",";\n    }\n    &:focus {\n      outline: 0px solid ",";\n      box-shadow: 0 0 0 2px ",";\n    }\n  "])),(0,_utils__WEBPACK_IMPORTED_MODULE_6__.ow)("base"),(0,_utils__WEBPACK_IMPORTED_MODULE_6__.ow)("background.light"),(0,_utils__WEBPACK_IMPORTED_MODULE_6__.ow)("dark"),(0,_utils__WEBPACK_IMPORTED_MODULE_6__.ow)("dark"),(0,_utils__WEBPACK_IMPORTED_MODULE_6__.ow)("dark")),subtle:(0,styled_components__WEBPACK_IMPORTED_MODULE_4__.iv)(_templateObject8||(_templateObject8=_taggedTemplateLiteralLoose(["\n    background-color: ",";\n    color: ",";\n    &:hover {\n      background-color: ",";\n      color: ",";\n    }\n    &:focus {\n      outline: 0px solid ",";\n      box-shadow: 0 0 0 2px ",";\n    }\n  "])),(0,_utils__WEBPACK_IMPORTED_MODULE_6__.ow)("background.base"),(0,_utils__WEBPACK_IMPORTED_MODULE_6__.ow)("base"),(0,_utils__WEBPACK_IMPORTED_MODULE_6__.ow)("background.light"),(0,_utils__WEBPACK_IMPORTED_MODULE_6__.ow)("dark"),(0,_utils__WEBPACK_IMPORTED_MODULE_6__.ow)("dark"),(0,_utils__WEBPACK_IMPORTED_MODULE_6__.ow)("dark")),lightFill:(0,styled_components__WEBPACK_IMPORTED_MODULE_4__.iv)(_templateObject9||(_templateObject9=_taggedTemplateLiteralLoose(["\n    background-color: ",";\n    color: ",";\n    &:hover {\n      background-color: ",";\n      color: ",";\n    }\n    &:focus {\n      outline: ",";\n      box-shadow: ",";\n    }\n  "])),(0,_utils__WEBPACK_IMPORTED_MODULE_6__.ow)("light"),(0,_utils__WEBPACK_IMPORTED_MODULE_6__.ow)("base"),(0,_utils__WEBPACK_IMPORTED_MODULE_6__.ow)("light"),(0,_utils__WEBPACK_IMPORTED_MODULE_6__.ow)("dark"),(function(props){return"0px solid "+(0,_utils__WEBPACK_IMPORTED_MODULE_6__.ow)(props.disabled?"":"dark")(props)}),(function(props){return" 0 0 0 2px  "+(0,_utils__WEBPACK_IMPORTED_MODULE_6__.ow)(props.disabled?"":"dark")(props)}))},buttonStyles=(0,styled_components__WEBPACK_IMPORTED_MODULE_4__.iv)(_templateObject10||(_templateObject10=_taggedTemplateLiteralLoose(["\n  -webkit-font-smoothing: antialiased;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  text-decoration: none;\n  font-family: inherit;\n  font-weight: ",";\n  line-height: 1.5;\n  cursor: ",";\n  border-radius: ",";\n  border-width: 0;\n  border-style: solid;\n\n  ",";\n  ",";\n  ",";\n  ",";\n\n  &:disabled {\n    cursor: not-allowed;\n    color: ",";\n    background-color: ",";\n  }\n"])),(function(props){return props.theme.fontWeights.bold}),(function(props){return props.disabled?"default":"pointer"}),(function(props){return props.theme.radius}),(function(_ref){var theme=_ref.theme;return(0,_utils__WEBPACK_IMPORTED_MODULE_6__.BS)(sizes,"medium",theme.mediaQueries)}),(0,_utils__WEBPACK_IMPORTED_MODULE_6__.hO)("Button",variations),styled_system__WEBPACK_IMPORTED_MODULE_5__.bf,styled_system__WEBPACK_IMPORTED_MODULE_5__.Dh,(0,_utils__WEBPACK_IMPORTED_MODULE_6__.ow)("text.light"),(0,_utils__WEBPACK_IMPORTED_MODULE_6__.ow)("background.base")),Button=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.button.attrs((function(_ref2){var width=_ref2.width,fullWidth=_ref2.fullWidth,title=_ref2.title;return{width:fullWidth?1:width,"aria-label":_ref2["aria-label"]||title}}))(_templateObject11||(_templateObject11=_taggedTemplateLiteralLoose(["\n  ","\n"])),buttonStyles);Button.propTypes=Object.assign({size:prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOf(["small","medium","large"])},styled_system__WEBPACK_IMPORTED_MODULE_5__.bf.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_5__.Dh.propTypes,{fullWidth:(0,_utils__WEBPACK_IMPORTED_MODULE_6__.aR)("width"),variation:prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOf(Object.keys(variations)),color:(0,_utils__WEBPACK_IMPORTED_MODULE_6__.nL)(),disabled:prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool}),Button.defaultProps={color:"primary",size:"medium",variation:"fill"},Button.displayName="Button";const __WEBPACK_DEFAULT_EXPORT__=Button},"../../packages/core/src/Flex/Flex.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.assign.js");var _templateObject,styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js"),_Box__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/core/src/Box/Box.js"),_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../packages/core/src/utils/utils.js"),_excluded=["wrap","align","justify"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Flex=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP)(_Box__WEBPACK_IMPORTED_MODULE_6__.Z).attrs((function(_ref){var wrap=_ref.wrap,align=_ref.align,justify=_ref.justify,props=_objectWithoutProperties(_ref,_excluded);return Object.assign({flexWrap:wrap?"wrap":void 0,alignItems:align,justifyContent:justify},props)}))(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  display: flex;\n  ","\n  "," ","\n  ","\n  ","\n"])),(0,_utils__WEBPACK_IMPORTED_MODULE_7__.hO)("Flex"),styled_system__WEBPACK_IMPORTED_MODULE_8__.cq,styled_system__WEBPACK_IMPORTED_MODULE_8__.Kl,styled_system__WEBPACK_IMPORTED_MODULE_8__.Me,styled_system__WEBPACK_IMPORTED_MODULE_8__.WO);Flex.propTypes=Object.assign({},styled_system__WEBPACK_IMPORTED_MODULE_8__.Dh.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_8__.bf.propTypes,{color:(0,_utils__WEBPACK_IMPORTED_MODULE_7__.nL)(),bg:(0,_utils__WEBPACK_IMPORTED_MODULE_7__.aR)("color")},styled_system__WEBPACK_IMPORTED_MODULE_8__.cq.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_8__.Kl.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_8__.WO.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_8__.Me.propTypes,{wrap:(0,_utils__WEBPACK_IMPORTED_MODULE_7__.aR)("flexWrap"),align:(0,_utils__WEBPACK_IMPORTED_MODULE_7__.aR)("alignItems"),justify:(0,_utils__WEBPACK_IMPORTED_MODULE_7__.aR)("justifyContent")}),Flex.displayName="Flex";const __WEBPACK_DEFAULT_EXPORT__=Flex},"../../packages/core/src/Link/Link.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.keys.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,prop_types__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js"),_Button__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/core/src/Button/Button.js"),_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../packages/core/src/utils/utils.js"),_excluded=["target"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var variations={fill:(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.iv)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n    &:hover {\n      text-decoration: none;\n    }\n\n    ","\n  "])),_Button__WEBPACK_IMPORTED_MODULE_6__.$),link:(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.iv)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n    cursor: pointer;\n    text-decoration: none;\n    color: ",";\n\n    &:hover {\n      color: ",";\n      text-decoration: underline;\n    }\n  "])),(0,_utils__WEBPACK_IMPORTED_MODULE_7__.ow)("base"),(0,_utils__WEBPACK_IMPORTED_MODULE_7__.ow)("dark")),outline:(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.iv)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n    &:hover {\n      text-decoration: none;\n    }\n\n    ","\n  "])),_Button__WEBPACK_IMPORTED_MODULE_6__.$)},Link=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.a.attrs((function(_ref){var target=_ref.target,props=_objectWithoutProperties(_ref,_excluded);return Object.assign({rel:"_blank"===target?"noopener":null,target},props)}))(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["\n  ","\n  "," ",";\n"])),(0,_utils__WEBPACK_IMPORTED_MODULE_7__.hO)("Link",variations),styled_system__WEBPACK_IMPORTED_MODULE_8__.bf,styled_system__WEBPACK_IMPORTED_MODULE_8__.Dh);Link.displayName="Link",Link.defaultProps={color:"primary",variation:"link",size:"medium"},Link.propTypes={color:(0,_utils__WEBPACK_IMPORTED_MODULE_7__.nL)(),variation:prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOf(Object.keys(variations))};const __WEBPACK_DEFAULT_EXPORT__=Link},"../../packages/core/storybook/utils/ForwardRefsDemo.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ForwardRefsDemo});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");function ForwardRefsDemo(_ref){var refChild=_ref.refChild,dsRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:refChild(dsRef)})}ForwardRefsDemo.propTypes={refChild:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func},ForwardRefsDemo.__docgenInfo={description:"This is a demo component for Storybook that provides a ref to content using a render prop",methods:[],displayName:"ForwardRefsDemo",props:{refChild:{type:{name:"func"},required:!1,description:"Render prop that receives a ref stored on the instance of <ForwardRefsDemo/>"}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/storybook/utils/ForwardRefsDemo.js"]={name:"ForwardRefsDemo",docgenInfo:ForwardRefsDemo.__docgenInfo,path:"../../packages/core/storybook/utils/ForwardRefsDemo.js"})}}]);