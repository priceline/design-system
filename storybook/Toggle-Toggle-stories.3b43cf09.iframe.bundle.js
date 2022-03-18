(self.webpackChunk_priceline_storybook=self.webpackChunk_priceline_storybook||[]).push([[3590],{"../../packages/core/lib-esm/Toggle/Toggle.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ToggleComponent:()=>ToggleComponent,default:()=>Toggle_stories});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.assign.js");var react=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),prop_types=(__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js")),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("../../packages/core/lib-esm/utils/utils.js"),Input=__webpack_require__("../../packages/core/lib-esm/Input/Input.js"),Absolute=__webpack_require__("../../packages/core/lib-esm/Absolute/Absolute.js"),Box=__webpack_require__("../../packages/core/lib-esm/Box/Box.js"),__makeTemplateObject=function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},AbsoluteInput=(0,styled_components_browser_esm.ZP)(Input.Z)(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  position: absolute;\n  z-index: 5;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  margin: 0;\n  cursor: ",";\n"],["\n  position: absolute;\n  z-index: 5;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  margin: 0;\n  cursor: ",";\n"])),(function(props){return props.disabled?"default":"pointer"})),OutlineAbsolute=(0,styled_components_browser_esm.ZP)(Absolute.Z)(templateObject_2||(templateObject_2=__makeTemplateObject(["\n  height: calc(100% + 8px);\n  opacity: 0;\n  background-color: ",";\n"],["\n  height: calc(100% + 8px);\n  opacity: 0;\n  background-color: ",";\n"])),(function(props){return function alphaColor(color,props){return"".concat((0,utils.ow)(color)(props),"4C")}(props.isOn?"primary.base":"background.dark",props)})),CircleAbsolute=(0,styled_components_browser_esm.ZP)(Absolute.Z)(templateObject_3||(templateObject_3=__makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: ",";\n  pointer-events: none;\n  transition: left 0.3s;\n"],["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: ",";\n  pointer-events: none;\n  transition: left 0.3s;\n"])),(function(props){return props.width})),WrapperBox=(0,styled_components_browser_esm.ZP)(Box.Z)(templateObject_4||(templateObject_4=__makeTemplateObject(["\n  position: relative;\n  height: ","px;\n  transition: background-color 0.3s;\n  min-width: ","px;\n\n  ",":focus + "," {\n    opacity: 1;\n  }\n"],["\n  position: relative;\n  height: ","px;\n  transition: background-color 0.3s;\n  min-width: ","px;\n\n  ",":focus + "," {\n    opacity: 1;\n  }\n"])),(function(props){return props.height}),(function(props){return props.width}),AbsoluteInput,OutlineAbsolute),propTypes={isOn:prop_types_default().bool.isRequired,label:prop_types_default().string.isRequired,onToggle:prop_types_default().func,disabled:prop_types_default().bool,width:prop_types_default().string,height:prop_types_default().number,icon:prop_types_default().node},Toggle=function Toggle(_a){var isOn=_a.isOn,label=_a.label,onToggle=_a.onToggle,disabled=_a.disabled,height=_a.height,icon=_a.icon,width=1.875*height,circleAbsoluteSize=height-4,leftToggleOnPosition=width-circleAbsoluteSize-2;return react.createElement(WrapperBox,{borderRadius:"full",color:disabled?"background.light":isOn?"primary.base":"background.dark",height,isOn,width},react.createElement(AbsoluteInput,{"aria-checked":isOn,"aria-label":label,checked:isOn,disabled,onClick:disabled?null:onToggle,onChange:function onChange(){},p:0,role:"switch",tabIndex:"0",type:"checkbox"}),react.createElement(OutlineAbsolute,{borderRadius:"full",isOn,left:-4,top:-4,width:"calc(100% + 8px)"}),react.createElement(CircleAbsolute,{borderRadius:"full",color:"background.lightest",left:isOn?leftToggleOnPosition:2,top:2,width:"".concat(circleAbsoluteSize,"px")},icon))};Toggle.displayName="Toggle",Toggle.propTypes=propTypes,Toggle.defaultProps={isOn:!1,height:24},Toggle.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{isOn:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},height:{defaultValue:{value:"24",computed:!1},type:{name:"number"},required:!1,description:""},label:{type:{name:"string"},required:!0,description:""},onToggle:{type:{name:"func"},required:!1,description:""},disabled:{type:{name:"bool"},required:!1,description:""},width:{type:{name:"string"},required:!1,description:""},icon:{type:{name:"node"},required:!1,description:""}}};const Toggle_Toggle=Toggle;var templateObject_1,templateObject_2,templateObject_3,templateObject_4;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/lib-esm/Toggle/Toggle.js"]={name:"Toggle",docgenInfo:Toggle.__docgenInfo,path:"../../packages/core/lib-esm/Toggle/Toggle.js"});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.keys.js");var Svg=__webpack_require__("../../packages/icons/dist/esm/Svg.js"),_excluded=["size","title","desc","titleId","descId"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var SvgDollar=(0,styled_components_browser_esm.ZP)((function BaseComponent(_ref){var size=_ref.size,title=_ref.title,desc=_ref.desc,titleId=_ref.titleId,descId=_ref.descId,props=_objectWithoutProperties(_ref,_excluded),ariaLabelledBy=titleId||"";return ariaLabelledBy=(ariaLabelledBy+=desc&&descId?" ".concat(descId):"")||void 0,props["aria-labelledby"]=ariaLabelledBy,react.createElement(Svg.Z,_extends({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:size,width:size,title,titleId,desc,descId,"aria-labelledby":ariaLabelledBy,"aria-hidden":!ariaLabelledBy,fill:"currentcolor"},props),!!title&&react.createElement("title",{id:titleId},title),!!desc&&react.createElement("desc",{id:descId},desc),react.createElement("path",{d:"M12 10.9c-2.3-.6-3-1.2-3-2.1C9 7.7 10 7 11.7 7c1.8 0 2.4.8 2.5 2.1h2.2c-.1-1.7-1.1-3.3-3.2-3.8V3h-3v2.2c-1.9.4-3.5 1.6-3.5 3.6 0 2.3 1.9 3.5 4.7 4.1 2.5.6 3 1.5 3 2.4 0 .7-.5 1.8-2.7 1.8-2.1 0-2.9-.9-3-2.1H6.5c.1 2.2 1.8 3.4 3.7 3.8V21h3v-2.1c1.9-.4 3.5-1.5 3.5-3.6 0-2.8-2.4-3.8-4.7-4.4z"}))})).withConfig({displayName:"Dollar__SvgDollar",componentId:"sc-1e1fyp8-0"})(["outline:none;"]);SvgDollar.isIcon=!0,SvgDollar.defaultProps={size:24,tabIndex:-1,focusable:!1,"aria-hidden":!0,role:"img"};const Dollar=SvgDollar;var __assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};const Toggle_stories={title:"Toggle",component:Toggle_Toggle};var ToggleComponent=function ToggleComponent(){var _a=(0,react.useState)(!1),isOn=_a[0],setIsOn=_a[1],onToggle=function onToggle(){return setIsOn(!isOn)},DollarIcon=function DollarIcon(props){return react.createElement(Dollar,__assign({color:isOn?"primary.base":"background.dark"},props))},icon=react.createElement(DollarIcon,{size:22}),largeIcon=react.createElement(DollarIcon,{size:48});return react.createElement(react.Fragment,null,react.createElement("h4",null,"Default"),react.createElement(Toggle_Toggle,{label:"Default",isOn,onToggle}),react.createElement("h4",null,"Large"),react.createElement(Toggle_Toggle,{label:"Large",isOn,onToggle,height:50}),react.createElement("h4",null,"With Icon"),react.createElement(Toggle_Toggle,{label:"With Icon",isOn,onToggle,icon}),react.createElement("h4",null,"Large With Icon"),react.createElement(Toggle_Toggle,{label:"Large With Icon",isOn,onToggle,height:50,icon:largeIcon}))};ToggleComponent.parameters=Object.assign({storySource:{source:'function () {\n    var _a = useState(false), isOn = _a[0], setIsOn = _a[1];\n    var onToggle = function () { return setIsOn(!isOn); };\n    var DollarIcon = function (props) { return React.createElement(Dollar, __assign({ color: isOn ? \'primary.base\' : \'background.dark\' }, props)); };\n    var icon = React.createElement(DollarIcon, { size: 22 });\n    var largeIcon = React.createElement(DollarIcon, { size: 48 });\n    return (React.createElement(React.Fragment, null,\n        React.createElement("h4", null, "Default"),\n        React.createElement(Toggle, { label: \'Default\', isOn: isOn, onToggle: onToggle }),\n        React.createElement("h4", null, "Large"),\n        React.createElement(Toggle, { label: \'Large\', isOn: isOn, onToggle: onToggle, height: 50 }),\n        React.createElement("h4", null, "With Icon"),\n        React.createElement(Toggle, { label: \'With Icon\', isOn: isOn, onToggle: onToggle, icon: icon }),\n        React.createElement("h4", null, "Large With Icon"),\n        React.createElement(Toggle, { label: \'Large With Icon\', isOn: isOn, onToggle: onToggle, height: 50, icon: largeIcon })));\n}'}},ToggleComponent.parameters),ToggleComponent.__docgenInfo={description:"",methods:[],displayName:"ToggleComponent"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/lib-esm/Toggle/Toggle.stories.js"]={name:"ToggleComponent",docgenInfo:ToggleComponent.__docgenInfo,path:"../../packages/core/lib-esm/Toggle/Toggle.stories.js"})},"../../packages/core/lib-esm/Absolute/Absolute.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.assign.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js"),_Box__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/lib-esm/Box/Box.js"),__makeTemplateObject=function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},Absolute=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(_Box__WEBPACK_IMPORTED_MODULE_3__.Z)(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  position: absolute;\n  "," "," "," ","\n  ","\n"],["\n  position: absolute;\n  "," "," "," ","\n  ","\n"])),styled_system__WEBPACK_IMPORTED_MODULE_4__.we,styled_system__WEBPACK_IMPORTED_MODULE_4__.I,styled_system__WEBPACK_IMPORTED_MODULE_4__.t$,styled_system__WEBPACK_IMPORTED_MODULE_4__.F2,styled_system__WEBPACK_IMPORTED_MODULE_4__.W5);Absolute.propTypes=__assign(__assign(__assign(__assign(__assign({},styled_system__WEBPACK_IMPORTED_MODULE_4__.we.propTypes),styled_system__WEBPACK_IMPORTED_MODULE_4__.F2.propTypes),styled_system__WEBPACK_IMPORTED_MODULE_4__.I.propTypes),styled_system__WEBPACK_IMPORTED_MODULE_4__.t$.propTypes),styled_system__WEBPACK_IMPORTED_MODULE_4__.W5.propTypes),Absolute.displayName="Absolute";const __WEBPACK_DEFAULT_EXPORT__=Absolute;var templateObject_1},"../../packages/core/lib-esm/Input/Input.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.symbol.js");var react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js"),prop_types__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__),_Text__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../packages/core/lib-esm/Text/Text.js"),_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/core/lib-esm/utils/attrs/borderRadiusAttrs.js"),_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../packages/core/lib-esm/utils/utils.js"),__makeTemplateObject=function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},StyledInput=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.input.attrs(_utils__WEBPACK_IMPORTED_MODULE_6__._U)(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  appearance: none;\n  display: block;\n  width: 100%;\n  font-family: inherit;\n  color: inherit;\n  background-color: transparent;\n  border-width: 1px;\n  border-style: solid;\n\n  padding-top: 14px;\n  padding-bottom: 14px;\n  padding-left: 12px;\n  padding-right: 12px;\n\n  margin: 0;\n\n  ::placeholder {\n    color: ",";\n  }\n\n  ::-ms-clear {\n    display: none;\n  }\n\n  ","\n  "," "," "," ",";\n"],["\n  appearance: none;\n  display: block;\n  width: 100%;\n  font-family: inherit;\n  color: inherit;\n  background-color: transparent;\n  border-width: 1px;\n  border-style: solid;\n\n  padding-top: 14px;\n  padding-bottom: 14px;\n  padding-left: 12px;\n  padding-right: 12px;\n\n  margin: 0;\n\n  ::placeholder {\n    color: ",";\n  }\n\n  ::-ms-clear {\n    display: none;\n  }\n\n  ","\n  "," "," "," ",";\n"])),(0,_utils__WEBPACK_IMPORTED_MODULE_7__.ow)("text.light"),(0,_utils__WEBPACK_IMPORTED_MODULE_7__.hO)("Input"),_utils__WEBPACK_IMPORTED_MODULE_7__.Lz,styled_system__WEBPACK_IMPORTED_MODULE_8__.Dh,styled_system__WEBPACK_IMPORTED_MODULE_8__.JB,styled_system__WEBPACK_IMPORTED_MODULE_8__.E0),propTypes=__assign(__assign({id:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string.isRequired,color:(0,_utils__WEBPACK_IMPORTED_MODULE_7__.nL)(),helperText:prop_types__WEBPACK_IMPORTED_MODULE_9___default().node},styled_system__WEBPACK_IMPORTED_MODULE_8__.Dh.propTypes),styled_system__WEBPACK_IMPORTED_MODULE_8__.JB.propTypes),Input=react__WEBPACK_IMPORTED_MODULE_4__.forwardRef((function(props,ref){var _a,helperText=props.helperText,color=props.color,restProps=__rest(props,["helperText","color"]);return react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_4__.createElement(StyledInput,__assign({},restProps,{color,ref})),helperText&&react__WEBPACK_IMPORTED_MODULE_4__.cloneElement(helperText,{color:(null===(_a=null==helperText?void 0:helperText.props)||void 0===_a?void 0:_a.color)||color}))})),HelperText=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP)(_Text__WEBPACK_IMPORTED_MODULE_10__.ZP).attrs((function(){return{mt:2,fontSize:1}}))(templateObject_2||(templateObject_2=__makeTemplateObject([""],[""])));Input.HelperText=function(props){return react__WEBPACK_IMPORTED_MODULE_4__.createElement(HelperText,__assign({},props),props.children)},Input.HelperText.displayName="InputHelperText",Input.displayName="Input",Input.isField=!0,Input.defaultProps={fontSize:[2,null,1],borderRadius:"lg"},Input.propTypes=propTypes,Input.__docgenInfo={description:"",methods:[{name:"HelperText",docblock:null,modifiers:["static"],params:[{name:"props",type:null}],returns:null}],displayName:"Input",props:{fontSize:{defaultValue:{value:"[2, null, 1]",computed:!1},required:!1},borderRadius:{defaultValue:{value:"'lg'",computed:!1},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Input;var templateObject_1,templateObject_2;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/lib-esm/Input/Input.js"]={name:"Input",docgenInfo:Input.__docgenInfo,path:"../../packages/core/lib-esm/Input/Input.js"})},"../../packages/core/lib-esm/Text/Text.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{ZP:()=>Text_Text});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.string.bold.js");var styled_components_browser_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),prop_types=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),index_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js");var utils=__webpack_require__("../../packages/core/lib-esm/utils/utils.js"),typographyAttrs=__webpack_require__("../../packages/core/lib-esm/utils/attrs/typographyAttrs.js"),__makeTemplateObject=function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},textProps=(0,styled_components_browser_esm.iv)(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  ","\n  color: ",";\n  ","\n\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  ","\n  ","\n  ","\n\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"],["\n  ","\n  color: ",";\n  ","\n\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  ","\n  ","\n  ","\n\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"])),(0,utils.hO)("Text"),(0,utils.ow)("base"),(function(props){return props.bg?"background-color: ".concat((0,utils.ow)(props.bg,"base")(props),";"):""}),index_esm.jf,index_esm.Cb,index_esm.kC,index_esm.kk,index_esm.jw,index_esm.ih,index_esm.tx,index_esm.Dh,index_esm.bf,(function caps(props){return Array.isArray(props.caps)&&0===props.caps.length?null:(null==props?void 0:props.caps)?{textTransform:"uppercase"}:null}),(function regular(props){return props.regular?{fontWeight:props.theme.regular}:null}),(function bold(props){return Array.isArray(props.bold)&&0===props.bold.length?null:props.bold?{fontWeight:props.theme.bold}:null}),index_esm.JB,index_esm.p_,index_esm.Ue,index_esm.Nv,index_esm.rX,index_esm.yd,(function textDecoration(props){return props.textDecoration?"text-decoration: ".concat(props.textDecoration,";"):""}),(function textShadow(props){var textShadowSize=props.textShadowSize||"md";return props.enableTextShadow?{textShadow:props.theme.textShadows[textShadowSize]}:null}),index_esm.YK,index_esm.W5),textAttrs=function textAttrs(props){return __assign(__assign({},(0,typographyAttrs.I)(props)),function textAlignAttrs(props){var align=props.align;return{textAlign:props.textAlign||align}}(props))},Text=styled_components_browser_esm.ZP.div.attrs(textAttrs)(templateObject_2||(templateObject_2=__makeTemplateObject(["\n  ","\n"],["\n  ","\n"])),textProps),Span=styled_components_browser_esm.ZP.span.attrs(textAttrs)(templateObject_3||(templateObject_3=__makeTemplateObject(["\n  ","\n"],["\n  ","\n"])),textProps),Paragraph=styled_components_browser_esm.ZP.p.attrs(textAttrs)(templateObject_4||(templateObject_4=__makeTemplateObject(["\n  ","\n"],["\n  ","\n"])),textProps),Strike=styled_components_browser_esm.ZP.s.attrs(textAttrs)(templateObject_5||(templateObject_5=__makeTemplateObject(["\n  ","\n"],["\n  ","\n"])),textProps);Text.displayName="Text",Text.propTypes=__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({},index_esm.jf.propTypes),index_esm.JB.propTypes),index_esm.p_.propTypes),index_esm.Ue.propTypes),index_esm.Cb.propTypes),index_esm.Nv.propTypes),index_esm.kC.propTypes),index_esm.kk.propTypes),index_esm.jw.propTypes),index_esm.ih.propTypes),index_esm.tx.propTypes),index_esm.Dh.propTypes),index_esm.yd.propTypes),index_esm.YK.propTypes),index_esm.bf.propTypes),index_esm.W5.propTypes),{align:(0,utils.aR)("textAlign"),bold:prop_types_default().bool,caps:prop_types_default().bool,color:(0,utils.nL)(),enableTextShadow:prop_types_default().bool,regular:prop_types_default().bool,textDecoration:prop_types_default().string,textShadowSize:prop_types_default().oneOf(["sm","md"]),textStyle:prop_types_default().oneOf(typographyAttrs.F)}),Text.span=Span,Text.span.displayName="Text.span",Text.p=Paragraph,Text.p.displayName="Text.p",Text.s=Strike,Text.s.displayName="Text.s";const Text_Text=Text;var templateObject_1,templateObject_2,templateObject_3,templateObject_4,templateObject_5},"../../packages/core/lib-esm/utils/attrs/typographyAttrs.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F:()=>textStylesValues,I:()=>typographyAttrs});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.map.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.reduce.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/web.dom-collections.for-each.js");var textStylesValues=["title1","title2","title3","heading1","heading2","heading3","heading4","heading5","heading6","article","paragraph","caption","overline","disclaimer","highlight","subtitle1","subheading1","subheading2","subheading3","subheading4","subheading5","subheading6"];function typographyAttrs(props){var textStyle=props.textStyle,theme=props.theme;return textStyle?Array.isArray(textStyle)?textStyle.map((function(style){return theme.typography[style]})).reduce((function(acc,style){var styleProps=style&&style.hasOwnProperty("fontSize")?Object.keys(style):[];return 0===styleProps.length?["fontSize","fontWeight","lineHeight","letterSpacing","textTransform"].forEach((function(styleProp){acc[styleProp].push(null)})):styleProps.forEach((function(styleProp){acc[styleProp].push(style[styleProp])})),acc}),{fontSize:[],fontWeight:[],lineHeight:[],letterSpacing:[],caps:[],textTransform:[]}):theme.typography[textStyle]:{}}},"../../packages/icons/dist/esm/Svg.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.string.match.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.concat.js");var styled_components__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var getPaletteColor=function getPaletteColor(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return function(props){var color=2===args.length?args[0]:props.color,shade=2===args.length?args[1]:args[0],colorShade=shade.match(/^([a-z]+)\.([a-z]+)$/);return colorShade&&(color=colorShade[0],shade=colorShade[1]),(0,styled_system__WEBPACK_IMPORTED_MODULE_12__.R)("palette.".concat(color,".").concat(shade))(props)||(0,styled_system__WEBPACK_IMPORTED_MODULE_12__.R)("palette.".concat(color))(props)||(0,styled_system__WEBPACK_IMPORTED_MODULE_12__.R)("colors.".concat(color))(props)||color}},color=function color(props){return props.color?(0,styled_components__WEBPACK_IMPORTED_MODULE_13__.iv)(["color:",";"],getPaletteColor("base")(props)):null},Svg=(0,styled_components__WEBPACK_IMPORTED_MODULE_13__.ZP)("svg").withConfig({displayName:"Svg",componentId:"sc-12lgb6u-0"})(["flex:none;line-height:1;"," "," "," ",""],styled_system__WEBPACK_IMPORTED_MODULE_12__.Dh,styled_system__WEBPACK_IMPORTED_MODULE_12__.bf,color,(function bg(props){return props.bg?(0,styled_components__WEBPACK_IMPORTED_MODULE_13__.iv)(["background-color:",";"],getPaletteColor(props.bg,"base")(props)):null}));Svg.propTypes=_objectSpread(_objectSpread(_objectSpread({},styled_system__WEBPACK_IMPORTED_MODULE_12__.Dh.propTypes),styled_system__WEBPACK_IMPORTED_MODULE_12__.bf.propTypes),color.propTypes);const __WEBPACK_DEFAULT_EXPORT__=Svg},"../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.reduce.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/internals/export.js"),$reduce=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/internals/array-reduce.js").left,arrayMethodIsStrict=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/internals/array-method-is-strict.js"),CHROME_VERSION=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/internals/engine-v8-version.js"),IS_NODE=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/internals/engine-is-node.js");$({target:"Array",proto:!0,forced:!arrayMethodIsStrict("reduce")||!IS_NODE&&CHROME_VERSION>79&&CHROME_VERSION<83},{reduce:function reduce(callbackfn){var length=arguments.length;return $reduce(this,callbackfn,length,length>1?arguments[1]:void 0)}})},"../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.define-properties.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/internals/export.js"),DESCRIPTORS=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/internals/descriptors.js"),defineProperties=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/internals/object-define-properties.js").f;$({target:"Object",stat:!0,forced:Object.defineProperties!==defineProperties,sham:!DESCRIPTORS},{defineProperties})}}]);