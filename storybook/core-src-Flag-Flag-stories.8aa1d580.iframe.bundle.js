"use strict";(self.webpackChunk_priceline_storybook=self.webpackChunk_priceline_storybook||[]).push([[8654],{"../../packages/core/src/Flag/Flag.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Colors:()=>Colors,CompensatingFor1PxBorder:()=>CompensatingFor1PxBorder,Default:()=>Default,WithCustomHexBgColor:()=>WithCustomHexBgColor,WithCustomPadding:()=>WithCustomPadding,WithIcon:()=>WithIcon,WrappedText:()=>WrappedText,default:()=>Flag_stories});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.assign.js");var react=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),Flag=__webpack_require__("../../packages/core/src/Flag/Flag.js"),Box=__webpack_require__("../../packages/core/src/Box/Box.js"),Card=__webpack_require__("../../packages/core/src/Card/Card.js"),Flex=__webpack_require__("../../packages/core/src/Flex/Flex.js"),Text=__webpack_require__("../../packages/core/src/Text/Text.js"),Svg=(__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../packages/icons/dist/esm/Svg.js")),styled_components_browser_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),_excluded=["size","title","desc","titleId","descId"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var SvgLoyalty=(0,styled_components_browser_esm.ZP)((function BaseComponent(_ref){var size=_ref.size,title=_ref.title,desc=_ref.desc,titleId=_ref.titleId,descId=_ref.descId,props=_objectWithoutProperties(_ref,_excluded),ariaLabelledBy=titleId||"";return ariaLabelledBy=(ariaLabelledBy+=desc&&descId?" ".concat(descId):"")||void 0,props["aria-labelledby"]=ariaLabelledBy,react.createElement(Svg.Z,_extends({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:size,width:size,title,titleId,desc,descId,"aria-labelledby":ariaLabelledBy,"aria-hidden":!ariaLabelledBy,fill:"currentcolor"},props),!!title&&react.createElement("title",{id:titleId},title),!!desc&&react.createElement("desc",{id:descId},desc),react.createElement("path",{d:"M21.4 11.6l-9-9c-.3-.4-.8-.6-1.4-.6H4c-1.1 0-2 .9-2 2v7c0 .6.2 1.1.6 1.4l9 9c.4.4.9.6 1.4.6s1.1-.2 1.4-.6l7-7c.4-.4.6-.9.6-1.4s-.2-1.1-.6-1.4zM5.5 7C4.7 7 4 6.3 4 5.5S4.7 4 5.5 4 7 4.7 7 5.5 6.3 7 5.5 7zm11.8 8.3L13 19.5l-4.3-4.3c-.4-.4-.7-1-.7-1.7 0-1.4 1.1-2.5 2.5-2.5.7 0 1.3.3 1.8.7l.7.7.7-.7c.5-.4 1.1-.7 1.8-.7 1.4 0 2.5 1.1 2.5 2.5 0 .7-.3 1.3-.7 1.8z"}))})).withConfig({displayName:"Loyalty__SvgLoyalty",componentId:"sc-ascepo-0"})(["outline:none;"]);SvgLoyalty.isIcon=!0,SvgLoyalty.defaultProps={size:24,tabIndex:-1,focusable:!1,"aria-hidden":!0,role:"img"};const Loyalty=SvgLoyalty;var jsx_runtime=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");const Flag_stories={title:"Flag",component:Flag.Z};var Default=function Default(){return(0,jsx_runtime.jsx)(Box.Z,{p:3,children:(0,jsx_runtime.jsxs)(Card.Z,{py:0,children:[(0,jsx_runtime.jsx)(Flag.Z,{mt:2,children:"Hello Flag"}),(0,jsx_runtime.jsx)(Box.Z,{p:3,children:"Hello"})]})})};Default.displayName="Default";var Colors=function Colors(){return(0,jsx_runtime.jsx)(Box.Z,{p:3,children:(0,jsx_runtime.jsxs)(Card.Z,{pb:3,children:[(0,jsx_runtime.jsxs)(Flag.Z,{width:192,mt:2,bg:"orange",children:[(0,jsx_runtime.jsx)("b",{children:"Hello"})," Orange"]}),(0,jsx_runtime.jsx)(Flag.Z,{mt:3,bg:"blue",children:"Hello Blue"}),(0,jsx_runtime.jsx)(Flag.Z,{mt:3,bg:"purple",children:"Hello Purple"})]})})};Colors.displayName="Colors";var WithCustomHexBgColor=function WithCustomHexBgColor(){return(0,jsx_runtime.jsx)(Box.Z,{p:3,children:(0,jsx_runtime.jsxs)(Card.Z,{pb:3,children:[(0,jsx_runtime.jsxs)(Flag.Z,{width:192,mt:2,bg:"#085397",children:[(0,jsx_runtime.jsx)("b",{children:"Hello"})," #085397"]}),(0,jsx_runtime.jsxs)(Flag.Z,{width:192,mt:2,bg:"#f2633a",children:[(0,jsx_runtime.jsx)("b",{children:"Hello"})," #f2633a"]}),(0,jsx_runtime.jsxs)(Flag.Z,{width:192,mt:2,bg:"#0a84c1",children:[(0,jsx_runtime.jsx)("b",{children:"Hello"})," #0a84c1"]}),(0,jsx_runtime.jsxs)(Flag.Z,{width:192,mt:2,bg:"#3c910e",children:[(0,jsx_runtime.jsx)("b",{children:"Hello"})," #3c910e"]})]})})};WithCustomHexBgColor.displayName="WithCustomHexBgColor",WithCustomHexBgColor.story={name:"with custom hex bg color"};var CompensatingFor1PxBorder=function CompensatingFor1PxBorder(){return(0,jsx_runtime.jsx)(Box.Z,{p:3,children:(0,jsx_runtime.jsx)(Card.Z,{pb:3,children:(0,jsx_runtime.jsx)(Flag.Z,{width:192,ml:-9,mt:2,children:(0,jsx_runtime.jsx)("b",{children:"Hello"})})})})};CompensatingFor1PxBorder.displayName="CompensatingFor1PxBorder",CompensatingFor1PxBorder.story={name:"Compensating for 1px border"};var WrappedText=function WrappedText(){return(0,jsx_runtime.jsx)(Box.Z,{p:3,children:(0,jsx_runtime.jsx)(Card.Z,{pb:3,children:(0,jsx_runtime.jsxs)(Flag.Z,{mt:2,children:[(0,jsx_runtime.jsx)("b",{children:"Hello"}),"This is a really long string of text that should wrap when it gets too long. But then the flag part to the right will probably break."]})})})};WrappedText.displayName="WrappedText",WrappedText.story={name:"Wrapped text"};var WithIcon=function WithIcon(){return(0,jsx_runtime.jsx)(Box.Z,{p:3,children:(0,jsx_runtime.jsx)(Card.Z,{pb:3,children:(0,jsx_runtime.jsx)(Flag.Z,{mt:2,children:(0,jsx_runtime.jsxs)(Flex.Z,{children:[(0,jsx_runtime.jsx)(Loyalty,{size:14,mr:1}),(0,jsx_runtime.jsx)(Text.ZP,{children:"Hello World"})]})})})})};WithIcon.displayName="WithIcon";var WithCustomPadding=function WithCustomPadding(){return(0,jsx_runtime.jsx)(Box.Z,{p:3,children:(0,jsx_runtime.jsx)(Card.Z,{pb:3,children:(0,jsx_runtime.jsx)(Flag.Z,{mt:2,py:[1,2,3],pl:[2,3,4],pr:[1,3,4],children:(0,jsx_runtime.jsx)(Flex.Z,{children:(0,jsx_runtime.jsx)(Text.ZP,{children:"Hello World"})})})})})};WithCustomPadding.displayName="WithCustomPadding",WithCustomPadding.story={name:"With custom padding"},Default.parameters=Object.assign({storySource:{source:"() => (\n  <Box p={3}>\n    <Card py={0}>\n      <Flag mt={2}>Hello Flag</Flag>\n      <Box p={3}>Hello</Box>\n    </Card>\n  </Box>\n)"}},Default.parameters),Colors.parameters=Object.assign({storySource:{source:"() => (\n  <Box p={3}>\n    <Card pb={3}>\n      <Flag width={192} mt={2} bg='orange'>\n        <b>Hello</b> Orange\n      </Flag>\n      <Flag mt={3} bg='blue'>\n        Hello Blue\n      </Flag>\n      <Flag mt={3} bg='purple'>\n        Hello Purple\n      </Flag>\n    </Card>\n  </Box>\n)"}},Colors.parameters),WithCustomHexBgColor.parameters=Object.assign({storySource:{source:"() => (\n  <Box p={3}>\n    <Card pb={3}>\n      <Flag width={192} mt={2} bg='#085397'>\n        <b>Hello</b> #085397\n      </Flag>\n      <Flag width={192} mt={2} bg='#f2633a'>\n        <b>Hello</b> #f2633a\n      </Flag>\n      <Flag width={192} mt={2} bg='#0a84c1'>\n        <b>Hello</b> #0a84c1\n      </Flag>\n      <Flag width={192} mt={2} bg='#3c910e'>\n        <b>Hello</b> #3c910e\n      </Flag>\n    </Card>\n  </Box>\n)"}},WithCustomHexBgColor.parameters),CompensatingFor1PxBorder.parameters=Object.assign({storySource:{source:"() => (\n  <Box p={3}>\n    <Card pb={3}>\n      <Flag width={192} ml={-9} mt={2}>\n        <b>Hello</b>\n      </Flag>\n    </Card>\n  </Box>\n)"}},CompensatingFor1PxBorder.parameters),WrappedText.parameters=Object.assign({storySource:{source:"() => (\n  <Box p={3}>\n    <Card pb={3}>\n      <Flag mt={2}>\n        <b>Hello</b>\n        This is a really long string of text that should wrap when it gets too long. But then the flag part to\n        the right will probably break.\n      </Flag>\n    </Card>\n  </Box>\n)"}},WrappedText.parameters),WithIcon.parameters=Object.assign({storySource:{source:"() => (\n  <Box p={3}>\n    <Card pb={3}>\n      <Flag mt={2}>\n        <Flex>\n          <LoyaltyIcon size={14} mr={1} />\n          <Text>Hello World</Text>\n        </Flex>\n      </Flag>\n    </Card>\n  </Box>\n)"}},WithIcon.parameters),WithCustomPadding.parameters=Object.assign({storySource:{source:"() => (\n  <Box p={3}>\n    <Card pb={3}>\n      <Flag mt={2} py={[1, 2, 3]} pl={[2, 3, 4]} pr={[1, 3, 4]}>\n        <Flex>\n          <Text>Hello World</Text>\n        </Flex>\n      </Flag>\n    </Card>\n  </Box>\n)"}},WithCustomPadding.parameters),Default.__docgenInfo={description:"",methods:[],displayName:"Default"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/src/Flag/Flag.stories.js"]={name:"Default",docgenInfo:Default.__docgenInfo,path:"../../packages/core/src/Flag/Flag.stories.js"}),Colors.__docgenInfo={description:"",methods:[],displayName:"Colors"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/src/Flag/Flag.stories.js"]={name:"Colors",docgenInfo:Colors.__docgenInfo,path:"../../packages/core/src/Flag/Flag.stories.js"}),WithCustomHexBgColor.__docgenInfo={description:"",methods:[],displayName:"WithCustomHexBgColor"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/src/Flag/Flag.stories.js"]={name:"WithCustomHexBgColor",docgenInfo:WithCustomHexBgColor.__docgenInfo,path:"../../packages/core/src/Flag/Flag.stories.js"}),CompensatingFor1PxBorder.__docgenInfo={description:"",methods:[],displayName:"CompensatingFor1PxBorder"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/src/Flag/Flag.stories.js"]={name:"CompensatingFor1PxBorder",docgenInfo:CompensatingFor1PxBorder.__docgenInfo,path:"../../packages/core/src/Flag/Flag.stories.js"}),WrappedText.__docgenInfo={description:"",methods:[],displayName:"WrappedText"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/src/Flag/Flag.stories.js"]={name:"WrappedText",docgenInfo:WrappedText.__docgenInfo,path:"../../packages/core/src/Flag/Flag.stories.js"}),WithIcon.__docgenInfo={description:"",methods:[],displayName:"WithIcon"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/src/Flag/Flag.stories.js"]={name:"WithIcon",docgenInfo:WithIcon.__docgenInfo,path:"../../packages/core/src/Flag/Flag.stories.js"}),WithCustomPadding.__docgenInfo={description:"",methods:[],displayName:"WithCustomPadding"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/src/Flag/Flag.stories.js"]={name:"WithCustomPadding",docgenInfo:WithCustomPadding.__docgenInfo,path:"../../packages/core/src/Flag/Flag.stories.js"})},"../../packages/core/src/Card/Card.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.slice.js");var _templateObject,styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),prop_types__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__),_Box__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/core/src/Box/Box.js"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/core/src/utils/utils.js"),_excluded=["borderWidth","borderColor"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Card=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP)(_Box__WEBPACK_IMPORTED_MODULE_6__.Z)(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  ","\n  ","\n"])),(0,_utils__WEBPACK_IMPORTED_MODULE_4__.hO)("Card"),(function boxBorder(_ref){var borderWidth=_ref.borderWidth,borderColor=_ref.borderColor,props=_objectWithoutProperties(_ref,_excluded);return{border:0===borderWidth?"0":borderWidth+"px solid "+(0,_utils__WEBPACK_IMPORTED_MODULE_4__.ow)(borderColor,"base")(props)}}));Card.propTypes={borderColor:(0,_utils__WEBPACK_IMPORTED_MODULE_4__.nL)(),color:(0,_utils__WEBPACK_IMPORTED_MODULE_4__.nL)(),borderWidth:prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOf([0,1,2])},Card.defaultProps={borderColor:"border",borderRadius:"xsm",borderWidth:1},Card.displayName="Card";const __WEBPACK_DEFAULT_EXPORT__=Card},"../../packages/core/src/Flag/Flag.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,styled_components__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js"),_Flex__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../../packages/core/src/Flex/Flex.js"),_Hide__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../../packages/core/src/Hide/Hide.js"),_Box__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../packages/core/src/Box/Box.js"),_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../packages/core/src/utils/utils.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js"),_excluded=["color","bg","children","pl","pr","py","width"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var FlagShadow=(0,styled_components__WEBPACK_IMPORTED_MODULE_9__.ZP)(_Box__WEBPACK_IMPORTED_MODULE_10__.Z)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n  width: 8px;\n  height: 8px;\n  align-self: flex-end;\n  background-color: inherit;\n  ",";\n  position: absolute;\n  bottom: 0;\n"])),(function shadowColor(props){var darkColor=(0,_utils__WEBPACK_IMPORTED_MODULE_7__.o)(props)?(0,_utils__WEBPACK_IMPORTED_MODULE_7__.ow)("dark")(props):(0,styled_system__WEBPACK_IMPORTED_MODULE_8__.R)("colors.dark"+function capitalize(str){return str.charAt(0).toUpperCase()+str.slice(1)}(props.color))(props);return{backgroundImage:darkColor?"linear-gradient(45deg, transparent 50%, "+darkColor+" 50%)":"\n        linear-gradient(45deg, transparent 50%, rgba(0, 0, 0, 0.5) 50%),\n        linear-gradient(45deg, transparent 50%, "+props.color+" 50%)\n      "}})),FlagRight=(0,styled_components__WEBPACK_IMPORTED_MODULE_9__.ZP)(_Box__WEBPACK_IMPORTED_MODULE_10__.Z)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n  flex: none;\n  background-color: ",";\n  border-radius: 0 "," "," 0;\n  /* for 32 x 8 triangle */\n  transform: skew(-14deg);\n  position: relative;\n  z-index: 1;\n"])),(function(props){return(0,_utils__WEBPACK_IMPORTED_MODULE_7__.ow)("base")(props)||props.color}),(0,styled_system__WEBPACK_IMPORTED_MODULE_8__.R)("radius"),(0,styled_system__WEBPACK_IMPORTED_MODULE_8__.R)("radius")),FlagBody=(0,styled_components__WEBPACK_IMPORTED_MODULE_9__.ZP)(_Box__WEBPACK_IMPORTED_MODULE_10__.Z)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n  font-size: ","px;\n  border-radius: 0 0 "," 0;\n  "," ",";\n  z-index: 2;\n"])),(0,styled_system__WEBPACK_IMPORTED_MODULE_8__.R)("fontSizes.0"),(0,styled_system__WEBPACK_IMPORTED_MODULE_8__.R)("radius"),(function flexAuto(props){return props.flexAuto?{flex:"1 1 auto"}:null}),_utils__WEBPACK_IMPORTED_MODULE_7__.$_),RelativeHide=(0,styled_components__WEBPACK_IMPORTED_MODULE_9__.ZP)(_Hide__WEBPACK_IMPORTED_MODULE_11__.Z)(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["\n  position: relative;\n"]))),StyledFlex=(0,styled_components__WEBPACK_IMPORTED_MODULE_9__.ZP)(_Flex__WEBPACK_IMPORTED_MODULE_12__.Z)(_templateObject5||(_templateObject5=_taggedTemplateLiteralLoose(["\n  ","\n"])),(0,_utils__WEBPACK_IMPORTED_MODULE_7__.hO)("Flag")),Flag=function Flag(_ref){var color=_ref.color,bg=_ref.bg,children=_ref.children,pl=_ref.pl,pr=_ref.pr,py=_ref.py,width=_ref.width,props=_objectWithoutProperties(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(StyledFlex,Object.assign({width},props,{ml:[0,-2],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(RelativeHide,{xs:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(FlagShadow,{width:"4px",mr:-2,mb:-2,color:(0,_utils__WEBPACK_IMPORTED_MODULE_7__.o)(Object.assign({color},props))?color:bg})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(FlagBody,{flexAuto:!!width,color,bg:!(0,_utils__WEBPACK_IMPORTED_MODULE_7__.o)(Object.assign({color},props))&&bg,pl,pr,py,children}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(FlagRight,{width:"18px",color:(0,_utils__WEBPACK_IMPORTED_MODULE_7__.o)(Object.assign({color},props))?color:bg,ml:-2})]}))};Flag.displayName="Flag",Flag.propTypes=Object.assign({color:(0,_utils__WEBPACK_IMPORTED_MODULE_7__.nL)(),bg:(0,_utils__WEBPACK_IMPORTED_MODULE_7__.aR)("color")},styled_system__WEBPACK_IMPORTED_MODULE_8__.Dh.propTypes),Flag.defaultProps={color:"white",bg:"green",pl:[1,3],pr:null,py:[1,2]},Flag.displayName="Flag",Flag.__docgenInfo={description:"",methods:[],displayName:"Flag",props:{color:{defaultValue:{value:"'white'",computed:!1},type:{name:"custom",raw:"deprecatedColorValue()"},required:!1,description:""},bg:{defaultValue:{value:"'green'",computed:!1},type:{name:"custom",raw:"deprecatedPropType('color')"},required:!1,description:""},pl:{defaultValue:{value:"[1, 3]",computed:!1},required:!1},pr:{defaultValue:{value:"null",computed:!1},required:!1},py:{defaultValue:{value:"[1, 2]",computed:!1},required:!1}},composes:["styled-system"]};const __WEBPACK_DEFAULT_EXPORT__=(0,styled_components__WEBPACK_IMPORTED_MODULE_9__.Zz)(Flag);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/src/Flag/Flag.js"]={name:"Flag",docgenInfo:Flag.__docgenInfo,path:"../../packages/core/src/Flag/Flag.js"})},"../../packages/icons/dist/esm/Svg.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.string.match.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.concat.js");var styled_components__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var getPaletteColor=function getPaletteColor(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return function(props){var color=2===args.length?args[0]:props.color,shade=2===args.length?args[1]:args[0],colorShade=shade.match(/^([a-z]+)\.([a-z]+)$/);return colorShade&&(color=colorShade[0],shade=colorShade[1]),(0,styled_system__WEBPACK_IMPORTED_MODULE_12__.R)("palette.".concat(color,".").concat(shade))(props)||(0,styled_system__WEBPACK_IMPORTED_MODULE_12__.R)("palette.".concat(color))(props)||(0,styled_system__WEBPACK_IMPORTED_MODULE_12__.R)("colors.".concat(color))(props)||color}},color=function color(props){return props.color?(0,styled_components__WEBPACK_IMPORTED_MODULE_13__.iv)(["color:",";"],getPaletteColor("base")(props)):null},Svg=(0,styled_components__WEBPACK_IMPORTED_MODULE_13__.ZP)("svg").withConfig({displayName:"Svg",componentId:"sc-12lgb6u-0"})(["flex:none;line-height:1;"," "," "," ",""],styled_system__WEBPACK_IMPORTED_MODULE_12__.Dh,styled_system__WEBPACK_IMPORTED_MODULE_12__.bf,color,(function bg(props){return props.bg?(0,styled_components__WEBPACK_IMPORTED_MODULE_13__.iv)(["background-color:",";"],getPaletteColor(props.bg,"base")(props)):null}));Svg.propTypes=_objectSpread(_objectSpread(_objectSpread({},styled_system__WEBPACK_IMPORTED_MODULE_12__.Dh.propTypes),styled_system__WEBPACK_IMPORTED_MODULE_12__.bf.propTypes),color.propTypes);const __WEBPACK_DEFAULT_EXPORT__=Svg}}]);