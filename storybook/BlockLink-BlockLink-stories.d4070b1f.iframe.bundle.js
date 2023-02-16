"use strict";(self.webpackChunk_priceline_storybook=self.webpackChunk_priceline_storybook||[]).push([[3797],{"../../packages/core/src/BlockLink/BlockLink.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CompositionWithoutContainer:()=>CompositionWithoutContainer,ContainingBackgroundImage:()=>ContainingBackgroundImage,ForwardRefs:()=>ForwardRefs,__namedExportsOrder:()=>__namedExportsOrder,default:()=>BlockLink_stories});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.slice.js");var _templateObject,styled_components_browser_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@5.3.5_sfoxds7t5ydpegc3knd667wn6m/node_modules/styled-components/dist/styled-components.browser.esm.js"),Link=__webpack_require__("../../packages/core/src/Link/Link.tsx");var BlockLink=(0,styled_components_browser_esm.ZP)(Link.Z)(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  display: block;\n  color: inherit;\n  text-decoration: none;\n"])));BlockLink.displayName="BlockLink",BlockLink.propTypes=Link.Z.propTypes;const BlockLink_BlockLink=BlockLink;var Flex=__webpack_require__("../../packages/core/src/Flex/Flex.tsx"),BackgroundImage=__webpack_require__("../../packages/core/src/BackgroundImage/BackgroundImage.tsx"),Box=__webpack_require__("../../packages/core/src/Box/Box.tsx"),Text=__webpack_require__("../../packages/core/src/Text/Text.tsx"),Button=__webpack_require__("../../packages/core/src/Button/Button.tsx"),ForwardRefsDemo=__webpack_require__("../../packages/core/src/storybook/utils/ForwardRefsDemo.tsx"),jsx_runtime=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");const BlockLink_stories={title:"BlockLink",component:BlockLink_BlockLink};var ContainingBackgroundImage=function ContainingBackgroundImage(){return(0,jsx_runtime.jsx)(Flex.Z,{justifyContent:"center",alignItems:"center",color:"white",children:(0,jsx_runtime.jsx)(BlockLink_BlockLink,{href:"https://www.priceline.com",target:"_blank",children:(0,jsx_runtime.jsx)(BackgroundImage.Z,{image:"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=aee8a50c86478d935556d865624506e4",width:"640px",children:(0,jsx_runtime.jsx)(Box.Z,{p:4,children:(0,jsx_runtime.jsx)(Text.ZP,{textAlign:"center",children:"Click to open priceline.com in new tab!"})})})})})};ContainingBackgroundImage.displayName="ContainingBackgroundImage",ContainingBackgroundImage.story={name:"containing BackgroundImage"};var ForwardRefs=function ForwardRefs(){return(0,jsx_runtime.jsx)(ForwardRefsDemo.Z,{refChild:function refChild(dsRef){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(BlockLink_BlockLink,{color:"text.dark",ref:dsRef,children:"I am a link!"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(Button.ZP,{color:"error",onClick:function onClick(){return dsRef.current.innerHTML="Bacon!"},mt:4,children:"Click to update link text via ref"})]})}})};ForwardRefs.displayName="ForwardRefs",ForwardRefs.story={name:"Forward refs"};var CompositionWithoutContainer=function CompositionWithoutContainer(){return(0,jsx_runtime.jsx)(Flex.Z,{justifyContent:"center",alignItems:"center",color:"purple",children:(0,jsx_runtime.jsx)(BlockLink_BlockLink,{href:"https://www.google.com",children:(0,jsx_runtime.jsx)(Text.ZP,{fontSize:2,bold:!0,textAlign:"center",children:"Click to go to google.com!"})})})};CompositionWithoutContainer.displayName="CompositionWithoutContainer",CompositionWithoutContainer.story={name:"composition without container"},ContainingBackgroundImage.parameters=Object.assign({storySource:{source:"() => (\n  <Flex justifyContent='center' alignItems='center' color='white'>\n    <BlockLink href='https://www.priceline.com' target='_blank'>\n      <BackgroundImage image={image} width='640px'>\n        <Box p={4}>\n          <Text textAlign='center'>Click to open priceline.com in new tab!</Text>\n        </Box>\n      </BackgroundImage>\n    </BlockLink>\n  </Flex>\n)"}},ContainingBackgroundImage.parameters),ForwardRefs.parameters=Object.assign({storySource:{source:"() => {\n  function refChild(dsRef) {\n    function onClick() {\n      return (dsRef.current.innerHTML = 'Bacon!')\n    }\n    return (\n      <>\n        <BlockLink color='text.dark' ref={dsRef}>\n          I am a link!\n        </BlockLink>\n        <br />\n        <Button color='error' onClick={onClick} mt={4}>\n          Click to update link text via ref\n        </Button>\n      </>\n    )\n  }\n  return <ForwardRefDemo refChild={refChild} />\n}"}},ForwardRefs.parameters),CompositionWithoutContainer.parameters=Object.assign({storySource:{source:"() => (\n  <Flex justifyContent='center' alignItems='center' color='purple'>\n    <BlockLink href='https://www.google.com'>\n      <Text fontSize={2} bold textAlign='center'>\n        Click to go to google.com!\n      </Text>\n    </BlockLink>\n  </Flex>\n)"}},CompositionWithoutContainer.parameters);var __namedExportsOrder=["ContainingBackgroundImage","ForwardRefs","CompositionWithoutContainer"]},"../../packages/core/src/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$Y:()=>buttonStyles,ZP:()=>__WEBPACK_DEFAULT_EXPORT__,hH:()=>borderRadiusButtonValues});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.from.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.string.bold.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.concat.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_templateObject11,_templateObject12,_templateObject13,_templateObject14,styled_components__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@5.3.5_sfoxds7t5ydpegc3knd667wn6m/node_modules/styled-components/dist/styled-components.browser.esm.js"),prop_types__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_21___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_21__),styled_system__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@5.1.5/node_modules/styled-system/dist/index.esm.js"),_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("../../common/temp/node_modules/.pnpm/@styled-system+prop-types@5.1.5_styled-system@5.1.5/node_modules/@styled-system/prop-types/dist/index.esm.js"),_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("../../common/temp/node_modules/.pnpm/@styled-system+theme-get@5.1.2/node_modules/@styled-system/theme-get/dist/index.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("../../packages/core/src/utils/utils.ts"),_utils__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__("../../packages/core/src/utils/attrs/boxShadowAttrs.ts");function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var borderRadiusButtonValues=["none","sm","md","lg","xl","2xl","3xl"],isValidBorderRadius=function isValidBorderRadius(size){return size&&borderRadiusButtonValues.includes(size)},sizes={small:(0,styled_components__WEBPACK_IMPORTED_MODULE_19__.iv)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n    border-radius: ",";\n    font-size: ","px;\n    padding: 7px 12px;\n  "])),(function(props){return(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_18__.R)("borderRadii."+(isValidBorderRadius(props.borderRadius)?props.borderRadius:"action-sm"))(props)}),(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_18__.R)("fontSizes.0")),medium:(0,styled_components__WEBPACK_IMPORTED_MODULE_19__.iv)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n    border-radius: ",";\n    font-size: ","px;\n    padding: 9.5px 18px;\n  "])),(function(props){return(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_18__.R)("borderRadii."+(isValidBorderRadius(props.borderRadius)?props.borderRadius:"action-md"))(props)}),(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_18__.R)("fontSizes.1")),large:(0,styled_components__WEBPACK_IMPORTED_MODULE_19__.iv)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n    border-radius: ",";\n    font-size: ","px;\n    padding: 12px 22px;\n  "])),(function(props){return(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_18__.R)("borderRadii."+(isValidBorderRadius(props.borderRadius)?props.borderRadius:"action-lg"))(props)}),(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_18__.R)("fontSizes.2")),extraLarge:(0,styled_components__WEBPACK_IMPORTED_MODULE_19__.iv)(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["\n    border-radius: ",";\n    font-size: ","px;\n    padding: 16px 22px;\n  "])),(function(props){return(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_18__.R)("borderRadii."+(isValidBorderRadius(props.borderRadius)?props.borderRadius:"action-xl"))(props)}),(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_18__.R)("fontSizes.2"))},variations={fill:(0,styled_components__WEBPACK_IMPORTED_MODULE_19__.iv)(_templateObject5||(_templateObject5=_taggedTemplateLiteralLoose(["\n    background-color: ",";\n    color: ",";\n\n    &:hover {\n      background-color: ",";\n      ","\n    }\n    &:focus {\n      outline: ",";\n      box-shadow: ",";\n    }\n  "])),(function(props){return(0,_utils__WEBPACK_IMPORTED_MODULE_20__.ow)(props.disabled?"light":"base")(props)}),(function(props){return(0,_utils__WEBPACK_IMPORTED_MODULE_20__.MI)(props.disabled?"light":"base")(props)}),(function(props){return(0,_utils__WEBPACK_IMPORTED_MODULE_20__.ow)(props.disabled?"light":"dark")(props)}),(function(props){return props.disabled?"":"color: "+(0,_utils__WEBPACK_IMPORTED_MODULE_20__.MI)("dark")(props)+";"}),(function(props){return"0px solid "+(0,_utils__WEBPACK_IMPORTED_MODULE_20__.ow)(props.disabled?"":"dark")(props)}),(function(props){return" 0 0 0 2px  "+(0,_utils__WEBPACK_IMPORTED_MODULE_20__.ow)(props.disabled?"":"dark")(props)})),link:(0,styled_components__WEBPACK_IMPORTED_MODULE_19__.iv)(_templateObject6||(_templateObject6=_taggedTemplateLiteralLoose(["\n    -webkit-font-smoothing: inherit;\n    font-weight: ",";\n    color: ",";\n    line-height: ",";\n    vertical-align: inherit;\n    padding: 0;\n    background-color: transparent;\n    &:hover {\n      color: ",";\n      text-decoration: underline;\n    }\n  "])),(function(props){return props.theme.fontWeights.medium}),(0,_utils__WEBPACK_IMPORTED_MODULE_20__.ow)("base"),(function(props){return props.theme.lineHeights.standard}),(0,_utils__WEBPACK_IMPORTED_MODULE_20__.ow)("dark")),outline:(0,styled_components__WEBPACK_IMPORTED_MODULE_19__.iv)(_templateObject7||(_templateObject7=_taggedTemplateLiteralLoose(["\n    color: ",";\n    box-shadow: inset 0 0 0 2px ",";\n    background-color: transparent;\n\n    &:hover {\n      background-color: transparent;\n      ","\n    }\n  "])),(function(props){return(0,_utils__WEBPACK_IMPORTED_MODULE_20__.ow)(props.disabled?"light":"base")(props)}),(function(props){return(0,_utils__WEBPACK_IMPORTED_MODULE_20__.ow)(props.disabled?"light":"base")(props)}),(function(props){return props.disabled?"":"\n      color: "+(0,_utils__WEBPACK_IMPORTED_MODULE_20__.ow)("dark")(props)+";\n      box-shadow: inset 0 0 0 2px "+(0,_utils__WEBPACK_IMPORTED_MODULE_20__.ow)("dark")(props)+";\n    "})),plain:(0,styled_components__WEBPACK_IMPORTED_MODULE_19__.iv)(_templateObject8||(_templateObject8=_taggedTemplateLiteralLoose(["\n    background-color: transparent;\n    color: ",";\n    &:hover {\n      background-color: ",";\n      color: ",";\n    }\n    &:focus {\n      outline: 0px solid ",";\n      box-shadow: 0 0 0 2px ",";\n    }\n  "])),(0,_utils__WEBPACK_IMPORTED_MODULE_20__.ow)("base"),(0,_utils__WEBPACK_IMPORTED_MODULE_20__.ow)("background.light"),(0,_utils__WEBPACK_IMPORTED_MODULE_20__.ow)("dark"),(0,_utils__WEBPACK_IMPORTED_MODULE_20__.ow)("dark"),(0,_utils__WEBPACK_IMPORTED_MODULE_20__.ow)("dark")),subtle:(0,styled_components__WEBPACK_IMPORTED_MODULE_19__.iv)(_templateObject9||(_templateObject9=_taggedTemplateLiteralLoose(["\n    background-color: ",";\n    color: ",";\n    &:hover {\n      background-color: ",";\n      color: ",";\n    }\n    &:focus {\n      outline: 0px solid ",";\n      box-shadow: 0 0 0 2px ",";\n    }\n  "])),(0,_utils__WEBPACK_IMPORTED_MODULE_20__.ow)("background.base"),(0,_utils__WEBPACK_IMPORTED_MODULE_20__.ow)("base"),(0,_utils__WEBPACK_IMPORTED_MODULE_20__.ow)("background.light"),(0,_utils__WEBPACK_IMPORTED_MODULE_20__.ow)("dark"),(0,_utils__WEBPACK_IMPORTED_MODULE_20__.ow)("dark"),(0,_utils__WEBPACK_IMPORTED_MODULE_20__.ow)("dark")),white:(0,styled_components__WEBPACK_IMPORTED_MODULE_19__.iv)(_templateObject10||(_templateObject10=_taggedTemplateLiteralLoose(["\n    background-color: ",";\n    color: ",";\n    &:hover {\n      background-color: ",";\n      color: ",";\n    }\n    &:focus {\n      outline: 0px solid ",";\n      box-shadow: 0 0 0 2px ",";\n    }\n  "])),(0,_utils__WEBPACK_IMPORTED_MODULE_20__.ow)("background.lightest"),(0,_utils__WEBPACK_IMPORTED_MODULE_20__.ow)("base"),(0,_utils__WEBPACK_IMPORTED_MODULE_20__.ow)("background.light"),(0,_utils__WEBPACK_IMPORTED_MODULE_20__.ow)("dark"),(0,_utils__WEBPACK_IMPORTED_MODULE_20__.ow)("dark"),(0,_utils__WEBPACK_IMPORTED_MODULE_20__.ow)("dark")),lightFill:(0,styled_components__WEBPACK_IMPORTED_MODULE_19__.iv)(_templateObject11||(_templateObject11=_taggedTemplateLiteralLoose(["\n    background-color: ",";\n    color: ",";\n    &:hover {\n      background-color: ",";\n      color: ",";\n    }\n    &:focus {\n      outline: ",";\n      box-shadow: ",";\n    }\n  "])),(0,_utils__WEBPACK_IMPORTED_MODULE_20__.ow)("light"),(0,_utils__WEBPACK_IMPORTED_MODULE_20__.ow)("base"),(0,_utils__WEBPACK_IMPORTED_MODULE_20__.ow)("light"),(0,_utils__WEBPACK_IMPORTED_MODULE_20__.ow)("dark"),(function(props){return"0px solid "+(0,_utils__WEBPACK_IMPORTED_MODULE_20__.ow)(props.disabled?"":"dark")(props)}),(function(props){return" 0 0 0 2px  "+(0,_utils__WEBPACK_IMPORTED_MODULE_20__.ow)(props.disabled?"":"dark")(props)})),input:(0,styled_components__WEBPACK_IMPORTED_MODULE_19__.iv)(_templateObject12||(_templateObject12=_taggedTemplateLiteralLoose(["\n    appearance: none;\n    background-color: transparent;\n    border-style: solid;\n    border-width: 1px;\n    color: ",";\n    display: block;\n    font-family: inherit;\n    font-weight: normal;\n    line-height: normal;\n    margin: 0;\n    padding: 14px 12px;\n    text-align: left;\n    width: 100%;\n\n    ","\n    "," "," ",";\n  "])),(0,_utils__WEBPACK_IMPORTED_MODULE_20__.ow)("text.base"),(function(props){return(0,_utils__WEBPACK_IMPORTED_MODULE_20__.Lz)(Object.assign({},props,{color:void 0}))}),styled_system__WEBPACK_IMPORTED_MODULE_16__.Dh,styled_system__WEBPACK_IMPORTED_MODULE_16__.JB,styled_system__WEBPACK_IMPORTED_MODULE_16__.E0)},buttonStyles=(0,styled_components__WEBPACK_IMPORTED_MODULE_19__.iv)(_templateObject13||(_templateObject13=_taggedTemplateLiteralLoose(["\n  -webkit-font-smoothing: antialiased;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  text-decoration: none;\n  font-family: inherit;\n  font-weight: ",";\n  line-height: 1.5;\n  cursor: ",";\n  border-radius: ",";\n  border-width: 0;\n  border-style: solid;\n\n  ",";\n  ",";\n  ",";\n  ",";\n  ","\n\n  &:disabled {\n    cursor: not-allowed;\n    color: ",";\n    background-color: ",";\n  }\n"])),(function(props){return props.theme.fontWeights.bold}),(function(props){return props.disabled?"default":"pointer"}),(function(props){return(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_18__.R)("borderRadii."+(isValidBorderRadius(props.borderRadius)?props.borderRadius:"action-md"))(props)}),(function(_ref){var theme=_ref.theme;return(0,_utils__WEBPACK_IMPORTED_MODULE_20__.BS)(sizes,"medium",theme.mediaQueries)}),(0,_utils__WEBPACK_IMPORTED_MODULE_20__.hO)("Button",variations),styled_system__WEBPACK_IMPORTED_MODULE_16__.bf,styled_system__WEBPACK_IMPORTED_MODULE_16__.Dh,styled_system__WEBPACK_IMPORTED_MODULE_16__.Wn,(0,_utils__WEBPACK_IMPORTED_MODULE_20__.ow)("text.light"),(0,_utils__WEBPACK_IMPORTED_MODULE_20__.ow)("background.base")),buttonPropTypes=Object.assign({},_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_17__.ZP.width,_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_17__.ZP.space,_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_17__.ZP.boxShadow,{color:(0,_utils__WEBPACK_IMPORTED_MODULE_20__.nL)(),variation:prop_types__WEBPACK_IMPORTED_MODULE_21___default().oneOf(Object.keys(variations)),size:prop_types__WEBPACK_IMPORTED_MODULE_21___default().oneOf(["small","medium","large","extraLarge"]),disabled:prop_types__WEBPACK_IMPORTED_MODULE_21___default().bool,borderRadius:prop_types__WEBPACK_IMPORTED_MODULE_21___default().oneOf(borderRadiusButtonValues),boxShadowSize:prop_types__WEBPACK_IMPORTED_MODULE_21___default().oneOf([""].concat(function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(_utils__WEBPACK_IMPORTED_MODULE_22__.d)))}),Button=styled_components__WEBPACK_IMPORTED_MODULE_19__.ZP.button.attrs((function(props){var width=props.width,title=props.title,ariaLabel=props["aria-label"],borderRadius=props.borderRadius;return Object.assign({borderRadius},(0,_utils__WEBPACK_IMPORTED_MODULE_22__.v)(props),{width,"aria-label":ariaLabel||title})}))(_templateObject14||(_templateObject14=_taggedTemplateLiteralLoose(["\n  ","\n"])),buttonStyles);Button.propTypes=buttonPropTypes,Button.defaultProps={color:"primary",size:"medium",variation:"fill"},Button.displayName="Button";const __WEBPACK_DEFAULT_EXPORT__=Button},"../../packages/core/src/Flex/Flex.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.assign.js");var _templateObject,styled_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@5.3.5_sfoxds7t5ydpegc3knd667wn6m/node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@5.1.5/node_modules/styled-system/dist/index.esm.js"),_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../common/temp/node_modules/.pnpm/@styled-system+prop-types@5.1.5_styled-system@5.1.5/node_modules/@styled-system/prop-types/dist/index.esm.js"),_Box__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../packages/core/src/Box/Box.tsx"),_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../packages/core/src/utils/utils.ts"),_excluded=["wrap","align","justify"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var flexPropTypes=Object.assign({},_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_6__.ZP.space,_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_6__.ZP.width,_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_6__.ZP.alignItems,_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_6__.ZP.justifyContent,_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_6__.ZP.flexWrap,_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_6__.ZP.flexDirection,{color:(0,_utils__WEBPACK_IMPORTED_MODULE_7__.nL)(),bg:(0,_utils__WEBPACK_IMPORTED_MODULE_7__.nL)()}),Flex=(0,styled_components__WEBPACK_IMPORTED_MODULE_8__.ZP)(_Box__WEBPACK_IMPORTED_MODULE_9__.Z).attrs((function(_ref){var wrap=_ref.wrap,align=_ref.align,justify=_ref.justify,props=_objectWithoutProperties(_ref,_excluded);return Object.assign({flexWrap:wrap?"wrap":void 0,alignItems:align,justifyContent:justify},props)}))(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  display: flex;\n  ","\n  "," ","\n  ","\n  ","\n"])),(0,_utils__WEBPACK_IMPORTED_MODULE_7__.hO)("Flex"),styled_system__WEBPACK_IMPORTED_MODULE_5__.cq,styled_system__WEBPACK_IMPORTED_MODULE_5__.Kl,styled_system__WEBPACK_IMPORTED_MODULE_5__.Me,styled_system__WEBPACK_IMPORTED_MODULE_5__.WO);Flex.propTypes=flexPropTypes,Flex.displayName="Flex";const __WEBPACK_DEFAULT_EXPORT__=Flex},"../../packages/core/src/Link/Link.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.assign.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,prop_types__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__),styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@5.3.5_sfoxds7t5ydpegc3knd667wn6m/node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@5.1.5/node_modules/styled-system/dist/index.esm.js"),_Button__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../packages/core/src/Button/Button.tsx"),_utils__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../packages/core/src/utils/utils.ts"),_excluded=["color","disabled","href","target","onClick"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var variations={fill:(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.iv)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n    &:hover {\n      text-decoration: none;\n    }\n\n    ","\n  "])),_Button__WEBPACK_IMPORTED_MODULE_7__.$Y),link:(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.iv)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n    cursor: pointer;\n    text-decoration: none;\n    color: ",";\n\n    &:hover {\n      color: ",";\n      text-decoration: underline;\n    }\n  "])),(0,_utils__WEBPACK_IMPORTED_MODULE_8__.ow)("base"),(0,_utils__WEBPACK_IMPORTED_MODULE_8__.ow)("dark")),outline:(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.iv)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n    &:hover {\n      text-decoration: none;\n    }\n\n    ","\n  "])),_Button__WEBPACK_IMPORTED_MODULE_7__.$Y)},propTypes={color:(0,_utils__WEBPACK_IMPORTED_MODULE_8__.nL)(),disabled:prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool,variation:prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOf(Object.keys(variations))},Link=styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP.a.attrs((function(_ref){var color=_ref.color,disabled=_ref.disabled,href=_ref.href,target=_ref.target,onClick=_ref.onClick,props=_objectWithoutProperties(_ref,_excluded);return Object.assign({color:disabled?"text.light":color,disabled,href:disabled?void 0:href,rel:"_blank"===target?"noopener":null,target,onClick:disabled?function(){}:onClick},props)}))(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["\n  ","\n  "," ",";\n\n  ","\n"])),(0,_utils__WEBPACK_IMPORTED_MODULE_8__.hO)("Link",variations),styled_system__WEBPACK_IMPORTED_MODULE_5__.bf,styled_system__WEBPACK_IMPORTED_MODULE_5__.Dh,(function(props){return props.disabled&&"\n    cursor: default;\n\n    &:hover {\n      text-decoration: none;\n    }\n  "}));Link.displayName="Link",Link.defaultProps={color:"primary",variation:"link",size:"medium"},Link.propTypes=propTypes;const __WEBPACK_DEFAULT_EXPORT__=Link},"../../packages/core/src/storybook/utils/ForwardRefsDemo.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ForwardRefsDemo});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");function ForwardRefsDemo(_ref){var refChild=_ref.refChild,dsRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:refChild(dsRef)})}ForwardRefsDemo.propTypes={refChild:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func};try{ForwardRefsDemo.displayName="ForwardRefsDemo",ForwardRefsDemo.__docgenInfo={description:"This is a demo component for Storybook that provides a ref to content using a render prop",displayName:"ForwardRefsDemo",props:{refChild:{defaultValue:null,description:"",name:"refChild",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/src/storybook/utils/ForwardRefsDemo.tsx#ForwardRefsDemo"]={docgenInfo:ForwardRefsDemo.__docgenInfo,name:"ForwardRefsDemo",path:"../../packages/core/src/storybook/utils/ForwardRefsDemo.tsx#ForwardRefsDemo"})}catch(__react_docgen_typescript_loader_error){}},"../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.reduce.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/internals/export.js"),$reduce=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/internals/array-reduce.js").left,arrayMethodIsStrict=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/internals/array-method-is-strict.js"),CHROME_VERSION=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/internals/engine-v8-version.js"),IS_NODE=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/internals/engine-is-node.js");$({target:"Array",proto:!0,forced:!arrayMethodIsStrict("reduce")||!IS_NODE&&CHROME_VERSION>79&&CHROME_VERSION<83},{reduce:function reduce(callbackfn){var length=arguments.length;return $reduce(this,callbackfn,length,length>1?arguments[1]:void 0)}})}}]);