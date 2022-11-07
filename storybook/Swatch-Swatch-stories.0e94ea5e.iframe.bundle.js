"use strict";(self.webpackChunk_priceline_storybook=self.webpackChunk_priceline_storybook||[]).push([[3034],{"../../packages/core/src/Swatch/Swatch.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MultipleColors:()=>MultipleColors,SelectColor:()=>SelectColor,SingleColor:()=>SingleColor,Wrap:()=>Wrap,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Swatch_stories});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.from.js");var _templateObject,react=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),prop_types=(__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.map.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js")),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@5.3.5_sfoxds7t5ydpegc3knd667wn6m/node_modules/styled-components/dist/styled-components.browser.esm.js"),Flex=__webpack_require__("../../packages/core/src/Flex/Flex.tsx"),jsx_runtime=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js"),_excluded=["colors","onClick"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var SwatchColor=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  height: 24px;\n  width: 24px;\n  background-color: ",";\n  border-radius: 50%;\n  display: flex;\n  margin: 4px;\n  cursor: ",";\n"])),(function(props){return props.color}),(function(props){return props.onClick?"pointer":"default"})),propTypes={colors:prop_types_default().arrayOf(prop_types_default().string),onClick:prop_types_default().func},Swatch=function Swatch(_ref){var colors=_ref.colors,onClick=_ref.onClick,props=_objectWithoutProperties(_ref,_excluded);return(0,jsx_runtime.jsx)(Flex.Z,Object.assign({flexWrap:"wrap"},props,{children:colors.map((function(color,idx){return(0,jsx_runtime.jsx)(SwatchColor,{"data-testid":idx+"-"+color,color,onClick:onClick?function(){return onClick(color)}:void 0},idx+"-"+color)}))}))};Swatch.displayName="Swatch",Swatch.propTypes=propTypes,Swatch.displayName="Swatch";const Swatch_Swatch=Swatch;var Box=__webpack_require__("../../packages/core/src/Box/Box.tsx"),Text=__webpack_require__("../../packages/core/src/Text/Text.tsx");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const Swatch_stories={title:"Swatch",component:Swatch_Swatch};var SingleColor=function SingleColor(){return(0,jsx_runtime.jsx)(Swatch_Swatch,{colors:["#0033A0"]})};SingleColor.displayName="SingleColor";var MultipleColors=function MultipleColors(){return(0,jsx_runtime.jsx)(Swatch_Swatch,{colors:["#D50032","#1B7742","#0033A0"]})};MultipleColors.displayName="MultipleColors";var Wrap=function Wrap(){return(0,jsx_runtime.jsx)(Box.Z,{width:"100px",children:(0,jsx_runtime.jsx)(Swatch_Swatch,{colors:["#D50032","#1B7742","#0033A0","#002244","#6244BB","#31225D","#31225D","#FFC658","#4F6F8F"]})})};Wrap.displayName="Wrap";var SelectColor=function SelectColor(){var _useState2=_slicedToArray((0,react.useState)("#D50032"),2),color=_useState2[0],setColor=_useState2[1];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Swatch_Swatch,{colors:["#D50032","#1B7742","#0033A0"],onClick:function onClick(color){return setColor(color)}}),(0,jsx_runtime.jsxs)(Flex.Z,{mt:"3",flexDirection:"row",alignItems:"center",children:[(0,jsx_runtime.jsx)(Text.ZP,{mr:2,children:"Color:"}),(0,jsx_runtime.jsx)(Text.ZP,{children:color})]})]})};SingleColor.parameters=Object.assign({storySource:{source:"() => <Swatch colors={['#0033A0']} />"}},SingleColor.parameters),MultipleColors.parameters=Object.assign({storySource:{source:"() => <Swatch colors={['#D50032', '#1B7742', '#0033A0']} />"}},MultipleColors.parameters),Wrap.parameters=Object.assign({storySource:{source:"() => (\n  <Box width='100px'>\n    <Swatch\n      colors={[\n        '#D50032',\n        '#1B7742',\n        '#0033A0',\n        '#002244',\n        '#6244BB',\n        '#31225D',\n        '#31225D',\n        '#FFC658',\n        '#4F6F8F',\n      ]}\n    />\n  </Box>\n)"}},Wrap.parameters),SelectColor.parameters=Object.assign({storySource:{source:"() => {\n  const [color, setColor] = useState('#D50032')\n  return (\n    <>\n      <Swatch colors={['#D50032', '#1B7742', '#0033A0']} onClick={(color) => setColor(color)} />\n      <Flex mt='3' flexDirection='row' alignItems='center'>\n        <Text mr={2}>Color:</Text>\n        <Text>{color}</Text>\n      </Flex>\n    </>\n  )\n}"}},SelectColor.parameters);var __namedExportsOrder=["SingleColor","MultipleColors","Wrap","SelectColor"]},"../../packages/core/src/Box/Box.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.assign.js");var _templateObject,styled_components__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@5.3.5_sfoxds7t5ydpegc3knd667wn6m/node_modules/styled-components/dist/styled-components.browser.esm.js"),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),styled_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@5.1.5/node_modules/styled-system/dist/index.esm.js"),_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../common/temp/node_modules/.pnpm/@styled-system+prop-types@5.1.5_styled-system@5.1.5/node_modules/@styled-system/prop-types/dist/index.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/core/src/utils/utils.ts"),_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/core/src/utils/attrs/borderRadiusAttrs.ts"),_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../packages/core/src/utils/attrs/boxShadowAttrs.ts"),_utils__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../packages/core/src/utils/createPalette.ts");var boxPropTypes=Object.assign({},_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__.ZP.border,_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__.ZP.boxShadow,_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__.ZP.display,_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__.ZP.maxHeight,_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__.ZP.maxWidth,_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__.ZP.minHeight,_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__.ZP.minWidth,_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__.ZP.height,_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__.ZP.size,_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__.ZP.space,_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__.ZP.textAlign,_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__.ZP.width,{bg:(0,_utils__WEBPACK_IMPORTED_MODULE_4__.nL)(),borderRadiusSize:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(_utils__WEBPACK_IMPORTED_MODULE_6__.Ze),rounded:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(_utils__WEBPACK_IMPORTED_MODULE_6__.YP),boxShadowSize:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(_utils__WEBPACK_IMPORTED_MODULE_7__.d),boxShadowColor:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(_utils__WEBPACK_IMPORTED_MODULE_8__.g),color:(0,_utils__WEBPACK_IMPORTED_MODULE_4__.nL)()}),Box=styled_components__WEBPACK_IMPORTED_MODULE_9__.ZP.div.attrs((function(props){return Object.assign({},(0,_utils__WEBPACK_IMPORTED_MODULE_6__._U)(props),(0,_utils__WEBPACK_IMPORTED_MODULE_7__.v)(props))}))(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  ","\n  "," "," "," ","\n  "," "," "," "," \n  "," "," \n  ","\n\n  ","\n  ","\n"])),(0,_utils__WEBPACK_IMPORTED_MODULE_4__.hO)("Box"),styled_system__WEBPACK_IMPORTED_MODULE_2__.jf,styled_system__WEBPACK_IMPORTED_MODULE_2__.Cb,styled_system__WEBPACK_IMPORTED_MODULE_2__.kC,styled_system__WEBPACK_IMPORTED_MODULE_2__.kk,styled_system__WEBPACK_IMPORTED_MODULE_2__.jw,styled_system__WEBPACK_IMPORTED_MODULE_2__.ih,styled_system__WEBPACK_IMPORTED_MODULE_2__.dp,styled_system__WEBPACK_IMPORTED_MODULE_2__.Dh,styled_system__WEBPACK_IMPORTED_MODULE_2__.yd,styled_system__WEBPACK_IMPORTED_MODULE_2__.bf,_utils__WEBPACK_IMPORTED_MODULE_4__.$_,styled_system__WEBPACK_IMPORTED_MODULE_2__.E0,styled_system__WEBPACK_IMPORTED_MODULE_2__.Wn);Box.displayName="Box",Box.propTypes=boxPropTypes;const __WEBPACK_DEFAULT_EXPORT__=Box},"../../packages/core/src/Flex/Flex.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.assign.js");var _templateObject,styled_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@5.3.5_sfoxds7t5ydpegc3knd667wn6m/node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@5.1.5/node_modules/styled-system/dist/index.esm.js"),_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../common/temp/node_modules/.pnpm/@styled-system+prop-types@5.1.5_styled-system@5.1.5/node_modules/@styled-system/prop-types/dist/index.esm.js"),_Box__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../packages/core/src/Box/Box.tsx"),_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../packages/core/src/utils/utils.ts"),_excluded=["wrap","align","justify"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var flexPropTypes=Object.assign({},_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_6__.ZP.space,_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_6__.ZP.width,_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_6__.ZP.alignItems,_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_6__.ZP.justifyContent,_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_6__.ZP.flexWrap,_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_6__.ZP.flexDirection,{color:(0,_utils__WEBPACK_IMPORTED_MODULE_7__.nL)(),bg:(0,_utils__WEBPACK_IMPORTED_MODULE_7__.nL)()}),Flex=(0,styled_components__WEBPACK_IMPORTED_MODULE_8__.ZP)(_Box__WEBPACK_IMPORTED_MODULE_9__.Z).attrs((function(_ref){var wrap=_ref.wrap,align=_ref.align,justify=_ref.justify,props=_objectWithoutProperties(_ref,_excluded);return Object.assign({flexWrap:wrap?"wrap":void 0,alignItems:align,justifyContent:justify},props)}))(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  display: flex;\n  ","\n  "," ","\n  ","\n  ","\n"])),(0,_utils__WEBPACK_IMPORTED_MODULE_7__.hO)("Flex"),styled_system__WEBPACK_IMPORTED_MODULE_5__.cq,styled_system__WEBPACK_IMPORTED_MODULE_5__.Kl,styled_system__WEBPACK_IMPORTED_MODULE_5__.Me,styled_system__WEBPACK_IMPORTED_MODULE_5__.WO);Flex.propTypes=flexPropTypes,Flex.displayName="Flex";const __WEBPACK_DEFAULT_EXPORT__=Flex},"../../packages/core/src/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>Text_Text});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.string.bold.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.slice.js");var styled_components_browser_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@5.3.5_sfoxds7t5ydpegc3knd667wn6m/node_modules/styled-components/dist/styled-components.browser.esm.js"),prop_types=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),index_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/@styled-system+prop-types@5.1.5_styled-system@5.1.5/node_modules/@styled-system/prop-types/dist/index.esm.js"),dist_index_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@5.1.5/node_modules/styled-system/dist/index.esm.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,utils=__webpack_require__("../../packages/core/src/utils/utils.ts"),typographyAttrs=__webpack_require__("../../packages/core/src/utils/attrs/typographyAttrs.ts");function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var textPropTypes=Object.assign({},index_esm.ZP.display,index_esm.ZP.fontSize,index_esm.ZP.fontStyle,index_esm.ZP.fontWeight,index_esm.ZP.height,index_esm.ZP.lineHeight,index_esm.ZP.maxHeight,index_esm.ZP.maxWidth,index_esm.ZP.minHeight,index_esm.ZP.minWidth,index_esm.ZP.overflow,index_esm.ZP.space,index_esm.ZP.textAlign,index_esm.ZP.textStyle,index_esm.ZP.width,index_esm.ZP.zIndex,{bold:prop_types_default().bool,caps:prop_types_default().bool,color:(0,utils.nL)(),enableTextShadow:prop_types_default().bool,regular:prop_types_default().bool,textDecoration:prop_types_default().string,textShadowSize:prop_types_default().oneOf(["sm","md"]),textStyle:prop_types_default().oneOf(typographyAttrs.F)}),textProps=(0,styled_components_browser_esm.iv)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n  ","\n  color: ",";\n  ","\n\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  ","\n  ","\n  ","\n\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"])),(0,utils.hO)("Text"),(0,utils.ow)("base"),(function(props){return props.bg?"background-color: "+(0,utils.ow)(props.bg,"base")(props)+";":""}),dist_index_esm.jf,dist_index_esm.Cb,dist_index_esm.kC,dist_index_esm.kk,dist_index_esm.jw,dist_index_esm.ih,dist_index_esm.tx,dist_index_esm.Dh,dist_index_esm.bf,(function caps(props){return Array.isArray(props.caps)&&0===props.caps.length?null:null!=props&&props.caps?{textTransform:"uppercase"}:null}),(function regular(props){return props.regular?{fontWeight:props.theme.regular}:null}),(function bold(props){return Array.isArray(props.bold)&&0===props.bold.length?null:props.bold?{fontWeight:props.theme.bold}:null}),dist_index_esm.JB,dist_index_esm.p_,dist_index_esm.Ue,dist_index_esm.Nv,dist_index_esm.rX,dist_index_esm.yd,(function textDecoration(props){return props.textDecoration?"text-decoration: "+props.textDecoration+";":""}),(function textShadow(props){var textShadowSize=props.textShadowSize||"md";return props.enableTextShadow?{textShadow:props.theme.textShadows[textShadowSize]}:null}),dist_index_esm.YK,dist_index_esm.W5),textAttrs=function textAttrs(props){return Object.assign({},(0,typographyAttrs.I)(props),function textAlignAttrs(props){var align=props.align;return{textAlign:props.textAlign||align}}(props))},Text=styled_components_browser_esm.ZP.div.attrs(textAttrs)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n  ","\n"])),textProps),Span=styled_components_browser_esm.ZP.span.attrs(textAttrs)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n  ","\n"])),textProps),Paragraph=styled_components_browser_esm.ZP.p.attrs(textAttrs)(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["\n  ","\n"])),textProps),Strike=styled_components_browser_esm.ZP.s.attrs(textAttrs)(_templateObject5||(_templateObject5=_taggedTemplateLiteralLoose(["\n  ","\n"])),textProps);Text.displayName="Text",Text.propTypes=textPropTypes,Text.span=Span,Text.span.displayName="Text.span",Text.p=Paragraph,Text.p.displayName="Text.p",Text.s=Strike,Text.s.displayName="Text.s";const Text_Text=Text;try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/src/Text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"../../packages/core/src/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/core/src/utils/attrs/borderRadiusAttrs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{YP:()=>roundedValues,Ze:()=>borderRadiusValues,_U:()=>borderRadiusAttrs});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.map.js");var roundedValues=["top","right","bottom","left","topLeft","topRight","bottomRight","bottomLeft"],borderRadiusValues=["none","xsm","sm","md","lg","xl","2xl","3xl","full","action-sm","action-md","action-lg"];function calculateRoundedProps(radius,rounded){var topRight=0,bottomRight=0,bottomLeft=0,topLeft=0;return rounded&&"round"!==rounded?("top"===rounded?topLeft=topRight=radius:"right"===rounded?topRight=bottomRight=radius:"bottom"===rounded?bottomRight=bottomLeft=radius:"left"===rounded?topLeft=bottomLeft=radius:"topLeft"===rounded?topLeft=radius:"topRight"===rounded?topRight=radius:"bottomRight"===rounded?bottomRight=radius:"bottomLeft"===rounded&&(bottomLeft=radius),topLeft+" "+topRight+" "+bottomRight+" "+bottomLeft):radius}function borderRadiusAttrs(_ref){var borderRadius=_ref.borderRadius,rounded=_ref.rounded,theme=_ref.theme;if(!borderRadius)return{};if(Array.isArray(borderRadius))return{borderRadius:borderRadius.map((function(radius){return theme.borderRadii[radius]})).map((function(radius){return radius?calculateRoundedProps(radius,rounded):borderRadius}))};var _effectiveRadius=theme.borderRadii[borderRadius];return{borderRadius:_effectiveRadius?calculateRoundedProps(_effectiveRadius,rounded):borderRadius}}},"../../packages/core/src/utils/attrs/boxShadowAttrs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>boxShadowSizeValues,v:()=>boxShadowAttrs});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.string.split.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.map.js");var ___WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/core/src/utils/utils.ts"),boxShadowSizeValues=["sm","md","lg","xl","2xl","overlay-lg","overlay-xl"];function calculateShadowProps(effectiveShadow,effectiveColor){if(effectiveColor){var rgb=(0,___WEBPACK_IMPORTED_MODULE_6__.oo)(effectiveColor);return effectiveShadow.replace("rgba(0,0,0,",rgb.slice(0,rgb.length-1)+", ")}return effectiveShadow}function boxShadowAttrs(props){var effectiveColor,boxShadowSize=props.boxShadowSize,boxShadowColor=props.boxShadowColor,theme=props.theme;if(!boxShadowSize)return{};if(boxShadowColor){var shadowColor=boxShadowColor.split(".")[0]+".dark";effectiveColor=(0,___WEBPACK_IMPORTED_MODULE_6__.ow)(shadowColor)(props)}return Array.isArray(boxShadowSize)?{boxShadow:boxShadowSize.map((function(size){return theme.shadows[size]})).map((function(shadow){return calculateShadowProps(shadow,effectiveColor)}))}:{boxShadow:calculateShadowProps(theme.shadows[boxShadowSize],effectiveColor)}}},"../../packages/core/src/utils/attrs/typographyAttrs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>textStylesValues,I:()=>typographyAttrs});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.map.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.reduce.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/web.dom-collections.for-each.js");var textStylesValues=["title1","title2","title3","heading1","heading2","heading3","heading4","heading5","heading6","article","articleBold","paragraph","paragraphBold","paragraph2","paragraph2Bold","caption","captionBold","overline","overlineMedium","disclaimer","disclaimerBold","highlight","highlightBold","subtitle1","subheading1","subheading2","subheading3","subheading4","subheading5","subheading6"];function typographyAttrs(props){var textStyle=props.textStyle,theme=props.theme;return textStyle?Array.isArray(textStyle)?textStyle.map((function(style){return theme.typography[style]})).reduce((function(acc,style){var styleProps=style&&style.hasOwnProperty("fontSize")?Object.keys(style):[];return 0===styleProps.length?["fontSize","fontWeight","lineHeight","letterSpacing","textTransform"].forEach((function(styleProp){acc[styleProp].push(null)})):styleProps.forEach((function(styleProp){acc[styleProp].push(style[styleProp])})),acc}),{fontSize:[],fontWeight:[],lineHeight:[],letterSpacing:[],caps:[],textTransform:[]}):theme.typography[textStyle]:{}}},"../../packages/core/src/utils/createPalette.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>paletteFamilies,r:()=>createPalette});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.symbol.js");var _excluded=["palette"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var deepmerge=__webpack_require__("../../common/temp/node_modules/.pnpm/deepmerge@4.2.2/node_modules/deepmerge/dist/cjs.js"),paletteFamilies=["primary","secondary","text","highlight","success","error","warning","alert","caution","notify","pricePrimary","priceSecondary","promoPrimary","promoSecondary","border","background"],createPalette=function createPalette(_ref){var _ref$palette=_ref.palette,palette=void 0===_ref$palette?{}:_ref$palette,_theme$colors=_objectWithoutProperties(_ref,_excluded).colors,lightBlue=_theme$colors.lightBlue,tintBlue=_theme$colors.tintBlue,blue=_theme$colors.blue,toneBlue=_theme$colors.toneBlue,darkBlue=_theme$colors.darkBlue,shadeBlue=_theme$colors.shadeBlue,lightGreen=_theme$colors.lightGreen,tintGreen=_theme$colors.tintGreen,green=_theme$colors.green,toneGreen=_theme$colors.toneGreen,darkGreen=_theme$colors.darkGreen,shadeGreen=_theme$colors.shadeGreen,lightRed=_theme$colors.lightRed,tintRed=_theme$colors.tintRed,red=_theme$colors.red,toneRed=_theme$colors.toneRed,darkRed=_theme$colors.darkRed,shadeRed=_theme$colors.shadeRed,lightOrange=_theme$colors.lightOrange,tintOrange=_theme$colors.tintOrange,orange=_theme$colors.orange,toneOrange=_theme$colors.toneOrange,darkOrange=_theme$colors.darkOrange,shadeOrange=_theme$colors.shadeOrange,lightYellow=_theme$colors.lightYellow,tintYellow=_theme$colors.tintYellow,yellow=_theme$colors.yellow,toneYellow=_theme$colors.toneYellow,darkYellow=_theme$colors.darkYellow,shadeYellow=_theme$colors.shadeYellow,lightPurple=_theme$colors.lightPurple,tintPurple=_theme$colors.tintPurple,purple=_theme$colors.purple,tonePurple=_theme$colors.tonePurple,darkPurple=_theme$colors.darkPurple,shadePurple=_theme$colors.shadePurple,lightPink=_theme$colors.lightPink,tintPink=_theme$colors.tintPink,pink=_theme$colors.pink,tonePink=_theme$colors.tonePink,darkPink=_theme$colors.darkPink,shadePink=_theme$colors.shadePink,lightestText=_theme$colors.lightestText,lightText=_theme$colors.lightText,tintText=_theme$colors.tintText,text=_theme$colors.text,darkText=_theme$colors.darkText,headingText=_theme$colors.headingText,lightHighlight=_theme$colors.lightHighlight,tintHighlight=_theme$colors.tintHighlight,highlight=_theme$colors.highlight,toneHighlight=_theme$colors.toneHighlight,darkHighlight=_theme$colors.darkHighlight,shadeHighlight=_theme$colors.shadeHighlight,lightestBackground=_theme$colors.lightestBackground,lightBackground=_theme$colors.lightBackground,tintBackground=_theme$colors.tintBackground,background=_theme$colors.background,toneBackground=_theme$colors.toneBackground,darkBackground=_theme$colors.darkBackground,shadeBackground=_theme$colors.shadeBackground,darkestBackground=_theme$colors.darkestBackground,lightBorder=_theme$colors.lightBorder,tintBorder=_theme$colors.tintBorder,border=_theme$colors.border,toneBorder=_theme$colors.toneBorder,darkBorder=_theme$colors.darkBorder,shadeBorder=_theme$colors.shadeBorder;return deepmerge({primary:{light:lightBlue,tint:tintBlue,base:blue,tone:toneBlue,dark:darkBlue,shade:shadeBlue},secondary:{light:lightGreen,tint:tintGreen,base:green,tone:toneGreen,dark:darkGreen,shade:shadeGreen},text:{lightest:lightestText,light:lightText,tint:tintText,base:text,dark:darkText,heading:headingText},highlight:{light:lightHighlight,tint:tintHighlight,base:highlight,tone:toneHighlight,dark:darkHighlight,shade:shadeHighlight},success:{light:lightGreen,tint:tintGreen,base:green,tone:toneGreen,dark:darkGreen,shade:shadeGreen},error:{light:lightRed,tint:tintRed,base:red,tone:toneRed,dark:darkRed,shade:shadeRed},warning:{light:lightRed,tint:tintRed,base:red,tone:toneRed,dark:darkRed,shade:shadeRed},alert:{light:lightOrange,tint:tintOrange,base:orange,tone:toneOrange,dark:darkOrange,shade:shadeOrange},caution:{light:lightYellow,tint:tintYellow,base:yellow,tone:toneYellow,dark:darkYellow,shade:shadeYellow},notify:{light:lightYellow,tint:tintYellow,base:yellow,tone:toneYellow,dark:darkYellow,shade:shadeYellow},pricePrimary:{light:lightGreen,tint:tintGreen,base:green,tone:toneGreen,dark:darkGreen,shade:shadeGreen},priceSecondary:{light:lightBlue,tint:tintBlue,base:blue,tone:toneBlue,dark:darkBlue,shade:shadeBlue},strike:{base:red},promoPrimary:{light:lightPurple,tint:tintPurple,base:purple,tone:tonePurple,dark:darkPurple,shade:shadePurple},promoSecondary:{light:lightPink,tint:tintPink,base:pink,tone:tonePink,dark:darkPink,shade:shadePink},border:{light:lightBorder,tint:tintBorder,base:border,tone:toneBorder,dark:darkBorder,shade:shadeBorder},background:{lightest:lightestBackground,light:lightBackground,tint:tintBackground,base:background,tone:toneBackground,dark:darkBackground,shade:shadeBackground,darkest:darkestBackground}},palette)}},"../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.reduce.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/internals/export.js"),$reduce=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/internals/array-reduce.js").left,arrayMethodIsStrict=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/internals/array-method-is-strict.js"),CHROME_VERSION=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/internals/engine-v8-version.js"),IS_NODE=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/internals/engine-is-node.js");$({target:"Array",proto:!0,forced:!arrayMethodIsStrict("reduce")||!IS_NODE&&CHROME_VERSION>79&&CHROME_VERSION<83},{reduce:function reduce(callbackfn){var length=arguments.length;return $reduce(this,callbackfn,length,length>1?arguments[1]:void 0)}})}}]);