(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"../../packages/core/src/Box/Box.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.assign.js");var _templateObject,styled_components_browser_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),prop_types=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),index_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js"),utils=__webpack_require__("../../packages/core/src/utils/utils.js"),theme=__webpack_require__("../../packages/core/src/theme/theme.js");var Box=styled_components_browser_esm.d.div(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  ","\n  "," "," "," ","\n  "," "," "," "," \n  "," "," \n  ","\n  ","\n"])),Object(utils.b)("Box"),index_esm.f,index_esm.l,index_esm.p,index_esm.q,index_esm.r,index_esm.s,index_esm.v,index_esm.w,index_esm.x,index_esm.B,(function boxShadow(props){var boxShadowTheme=props.theme.boxShadows||theme.a;return{sm:{"box-shadow":boxShadowTheme[0]},md:{"box-shadow":boxShadowTheme[1]},lg:{"box-shadow":boxShadowTheme[2]},xl:{"box-shadow":boxShadowTheme[3]}}[props.boxShadowSize]}),utils.d);Box.displayName="Box",Box.propTypes=Object.assign({},index_esm.f.propTypes,index_esm.p.propTypes,index_esm.q.propTypes,index_esm.r.propTypes,index_esm.s.propTypes,index_esm.v.propTypes,index_esm.w.propTypes,index_esm.x.propTypes,index_esm.B.propTypes,{bg:Object(utils.f)("color"),boxShadowSize:prop_types_default.a.oneOf(["sm","md","lg","xl"]),color:Object(utils.e)()});__webpack_exports__.a=Box},"../../packages/core/src/theme/theme.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return mediaQueries})),__webpack_require__.d(__webpack_exports__,"a",(function(){return boxShadows})),__webpack_require__.d(__webpack_exports__,"c",(function(){return theme}));__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.map.js");var _utils_createTextStyles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/core/src/utils/createTextStyles.js"),_utils_createColorStyles__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/core/src/utils/createColorStyles.js"),_utils_createMediaQueries__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/core/src/utils/createMediaQueries/createMediaQueries.js"),addAliases=function addAliases(arr,aliases){return aliases.forEach((function(key,i){return Object.defineProperty(arr,key,{enumerable:!1,get:function get(){return this[i]}})}))},breakpoints=[32,40,48,64,80].map((function(n){return n+"em"})),mediaQueries=Object(_utils_createMediaQueries__WEBPACK_IMPORTED_MODULE_6__.a)(breakpoints),aliases=["sm","md","lg","xl","xxl"];addAliases(breakpoints,aliases),addAliases(mediaQueries,aliases);var fontSizes=[12,14,16,20,24,32,40,56,72],fontWeights={medium:500,bold:700,regular:500},lineHeights={standard:1.4,display:1.25},letterSpacings={normal:"normal",caps:"0.025em"},colors={black:"#000",white:"#fff",text:"#001833",blue:"#0068EF",lightBlue:"#e8f2ff",darkBlue:"#049",gray:"#4f6f8f",lightGray:"#f4f6f8",buttonGray:"#edf0f3",borderGray:"#c0cad5",darkGray:"#364049",green:"#0a0",lightGreen:"#ecf7ec",darkGreen:"#060",red:"#c00",lightRed:"#fbebeb",darkRed:"#800",orange:"#f68013",darkOrange:"#f06f20",lightOrange:"#fef2e7",purple:"#70b",lightPurple:"#f5ebfa",yellow:"#fedc2a",lightYellow:"#fff3c0",pink:"#fe3e81",darkPurple:"#70b"},boxShadows=["0 0 2px 0 rgba(0,0,0,.08),0 1px 4px 0 rgba(0,0,0,.16)","0 0 2px 0 rgba(0,0,0,.08),0 2px 8px 0 rgba(0,0,0,.16)","0 0 2px 0 rgba(0,0,0,.08),0 4px 16px 0 rgba(0,0,0,.16)","0 0 2px 0 rgba(0,0,0,.08),0 8px 32px 0 rgba(0,0,0,.16)"],timingFunctions={easeInOut:"cubic-bezier(0.5, 0, 0.25, 1)",easeOut:"cubic-bezier(0, 0, 0.25, 1)",easeIn:"cubic-bezier(0.5, 0, 1, 1)"},textStyles=Object(_utils_createTextStyles__WEBPACK_IMPORTED_MODULE_4__.a)({fontSizes:fontSizes,fontWeights:fontWeights,lineHeights:lineHeights,letterSpacings:letterSpacings}),colorStyles=Object(_utils_createColorStyles__WEBPACK_IMPORTED_MODULE_5__.a)({colors:colors}),theme={breakpoints:breakpoints,mediaQueries:mediaQueries,space:[0,4,8,16,32,64,128],font:"'Montserrat','Helvetica Neue',Helvetica,Arial,sans-serif",fontSizes:fontSizes,fontWeights:fontWeights,lineHeights:lineHeights,letterSpacings:letterSpacings,regular:500,bold:700,textStyles:textStyles,colors:colors,colorStyles:colorStyles,radii:[0,2,6],radius:"2px",boxShadows:boxShadows,textShadows:{sm:"0 1px 2px rgba(0,0,0,0.5)",md:"0 2px 4px rgba(0,0,0,0.5)"},maxContainerWidth:"1280px",duration:{fast:"150ms",normal:"300ms",slow:"450ms",slowest:"600ms"},timingFunctions:timingFunctions,transitionDelays:{small:"60ms",medium:"160ms",large:"260ms",xLarge:"360ms"}}},"../../packages/core/src/utils/createColorStyles.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return createColorStyles}));var createColorStyles=function createColorStyles(){var theme=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_theme$colors=theme.colors,white=_theme$colors.white,text=_theme$colors.text,gray=_theme$colors.gray,lightGray=_theme$colors.lightGray,blue=_theme$colors.blue,lightBlue=_theme$colors.lightBlue,green=_theme$colors.green,lightGreen=_theme$colors.lightGreen,red=_theme$colors.red,lightRed=_theme$colors.lightRed,orange=_theme$colors.orange,purple=_theme$colors.purple,lightPurple=_theme$colors.lightPurple,darkOrange=_theme$colors.darkOrange;return{whiteOnText:{color:white,backgroundColor:text},whiteOnGray:{color:white,backgroundColor:gray},textOnLightGray:{color:text,backgroundColor:lightGray},whiteOnBlue:{color:white,backgroundColor:blue},blueOnLightBlue:{color:blue,backgroundColor:lightBlue},whiteOnGreen:{color:white,backgroundColor:green},greenOnLightGreen:{color:green,backgroundColor:lightGreen},whiteOnRed:{color:white,backgroundColor:red},redOnLightRed:{color:red,backgroundColor:lightRed},textOnOrange:{color:text,backgroundColor:orange},whiteOnPurple:{color:white,backgroundColor:purple},purpleOnLightPurple:{color:purple,backgroundColor:lightPurple},textOnWhite:{color:text,backgroundColor:white},grayOnWhite:{color:gray,backgroundColor:white},blueOnWhite:{color:blue,backgroundColor:white},greenOnWhite:{color:green,backgroundColor:white},redOnWhite:{color:red,backgroundColor:white},purpleOnWhite:{color:purple,backgroundColor:white},whiteOnDarkOrange:{color:white,backgroundColor:darkOrange},info:{color:text,backgroundColor:lightGray},success:{color:white,backgroundColor:green},warning:{color:text,backgroundColor:orange},danger:{color:white,backgroundColor:red}}}},"../../packages/core/src/utils/createMediaQueries/createMediaQueries.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return createMediaQueries}));__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.map.js");var createMediaQueries=function createMediaQueries(breakpoints){return breakpoints.map((function(n){return"@media screen and (min-width:"+n+")"}))}},"../../packages/core/src/utils/createTextStyles.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return createTextStyles}));__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.string.bold.js");var createTextStyles=function createTextStyles(){var theme=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},fontSizes=theme.fontSizes,fontWeights=theme.fontWeights,lineHeights=theme.lineHeights,letterSpacings=theme.letterSpacings;return{display8:{fontSize:fontSizes[8]+"px",fontWeight:fontWeights.bold,lineHeight:lineHeights.display},display7:{fontSize:fontSizes[7]+"px",fontWeight:fontWeights.bold,lineHeight:lineHeights.display},display6:{fontSize:fontSizes[6]+"px",fontWeight:fontWeights.bold,lineHeight:lineHeights.display},display5:{fontSize:fontSizes[5]+"px",fontWeight:fontWeights.bold,lineHeight:lineHeights.display},display4:{fontSize:fontSizes[4]+"px",fontWeight:fontWeights.bold,lineHeight:lineHeights.display},display3:{fontSize:fontSizes[3]+"px",fontWeight:fontWeights.bold,lineHeight:lineHeights.display},display2:{fontSize:fontSizes[2]+"px",fontWeight:fontWeights.bold,lineHeight:lineHeights.display},display1:{fontSize:fontSizes[1]+"px",fontWeight:fontWeights.bold,lineHeight:lineHeights.display},display0:{fontSize:fontSizes[0]+"px",fontWeight:fontWeights.bold,lineHeight:lineHeights.display,letterSpacing:letterSpacings.caps,textTransform:"uppercase"},body2:{fontSize:fontSizes[2]+"px",fontWeight:fontWeights.medium,lineHeight:lineHeights.standard},body1:{fontSize:fontSizes[1]+"px",fontWeight:fontWeights.medium,lineHeight:lineHeights.standard},body0:{fontSize:fontSizes[0]+"px",fontWeight:fontWeights.medium,lineHeight:lineHeights.standard},small:{fontSize:"10px",fontWeight:fontWeights.bold,lineHeight:lineHeights.standard}}}},"../../packages/core/src/utils/utils.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"f",(function(){return deprecatedPropType})),__webpack_require__.d(__webpack_exports__,"e",(function(){return deprecatedColorValue})),__webpack_require__.d(__webpack_exports__,"a",(function(){return applySizes})),__webpack_require__.d(__webpack_exports__,"b",(function(){return applyVariations})),__webpack_require__.d(__webpack_exports__,"g",(function(){return getPaletteColor})),__webpack_require__.d(__webpack_exports__,"i",(function(){return hasPaletteColor})),__webpack_require__.d(__webpack_exports__,"h",(function(){return getTextColorOn})),__webpack_require__.d(__webpack_exports__,"d",(function(){return color})),__webpack_require__.d(__webpack_exports__,"c",(function(){return borders}));__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.from.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.string.match.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.regexp.constructor.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.join.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.map.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.parse-int.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.string.split.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.parse-float.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.reduce-right.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.keys.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_templateObject11,styled_system__WEBPACK_IMPORTED_MODULE_26__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js"),styled_components__WEBPACK_IMPORTED_MODULE_27__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),_theme_theme_js__WEBPACK_IMPORTED_MODULE_28__=__webpack_require__("../../packages/core/src/theme/theme.js");function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var deprecatedPropType=function deprecatedPropType(replacement){return function(props,propName){if(props[propName])return new Error("The `"+propName+"` prop is deprecated and will be removed in a future release. Please use `"+replacement+"` instead.")}},deprecatedColorValue=function deprecatedColorValue(){return function(props,propName,componentName){0}},decomposeColor=function decomposeColor(color){return"#"===color.charAt(0)?decomposeColor(function hexToRgb(color){var colors=(color=color.substring(1)).match(new RegExp(".{1,"+color.length/3+"}","g"));return colors&&(colors=colors.map((function(val){return parseInt(1===val.length?val+val:val,16)})).join(", ")),colors?"rgb("+colors+")":""}(color)):color.substring(color.indexOf("(")+1,color.length-1).split(",").map((function(value){return parseFloat(value)}))},getLuminance=function getLuminance(color){var _decomposeColor$map2=_slicedToArray(decomposeColor(color).map((function(val){return(val/=255)<=.03928?val/12.92:Math.pow((val+.055)/1.055,2.4)})),3);return.2126*_decomposeColor$map2[0]+.7152*_decomposeColor$map2[1]+.0722*_decomposeColor$map2[2]},getBreakpointSize=function getBreakpointSize(array,length){return array.slice(0,length).reduceRight((function(carry,item){return carry||item}),null)},applySizes=function applySizes(){var sizes=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,defaultSize=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"medium",mediaQueriesOptions=arguments.length>2&&void 0!==arguments[2]?arguments[2]:_theme_theme_js__WEBPACK_IMPORTED_MODULE_28__.b;return function(_ref){var size=_ref.size;return sizes&&"string"==typeof size?Object(styled_components__WEBPACK_IMPORTED_MODULE_27__.c)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n      ","\n    "])),sizes[size]||sizes[defaultSize]||""):sizes&&Array.isArray(size)?Object(styled_components__WEBPACK_IMPORTED_MODULE_27__.c)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n      ",";\n      "," {\n        ",";\n      }\n      "," {\n        ",";\n      }\n      "," {\n        ",";\n      }\n      "," {\n        ",";\n      }\n      "," {\n        ",";\n      }\n    "])),sizes[getBreakpointSize(size,1)],mediaQueriesOptions.sm,sizes[getBreakpointSize(size,2)],mediaQueriesOptions.md,sizes[getBreakpointSize(size,3)],mediaQueriesOptions.lg,sizes[getBreakpointSize(size,4)],mediaQueriesOptions.xl,sizes[getBreakpointSize(size,5)],mediaQueriesOptions.xxl,sizes[getBreakpointSize(size,6)]):void 0}},colorShadeRegex=/^([a-z]+)\.([a-z]+)$/i,applyVariations=function applyVariations(componentName){var variations=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return function(props){var shade,color=props.color,variation=props.variation,colorShade=!!color&&"string"==typeof color&&color.match(colorShadeRegex);colorShade&&(color=colorShade[1],shade=colorShade[2]);var isValidShade=shade&&"string"==typeof shade;return variations&&"string"==typeof variation?isValidShade?Object(styled_components__WEBPACK_IMPORTED_MODULE_27__.c)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n        ","\n        ","\n      "])),variations[variation]||"","string"==typeof color&&Object(styled_system__WEBPACK_IMPORTED_MODULE_26__.z)("componentStyles."+componentName+"."+variation+"."+color+"."+shade,"")):Object(styled_components__WEBPACK_IMPORTED_MODULE_27__.c)(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["\n      ","\n      ","\n    "])),variations[variation]||"","string"==typeof color&&Object(styled_system__WEBPACK_IMPORTED_MODULE_26__.z)("componentStyles."+componentName+"."+variation+"."+color,"")):isValidShade?Object(styled_components__WEBPACK_IMPORTED_MODULE_27__.c)(_templateObject5||(_templateObject5=_taggedTemplateLiteralLoose(["\n      ","\n    "])),Object(styled_system__WEBPACK_IMPORTED_MODULE_26__.z)("componentStyles."+componentName+"."+color+"."+shade,"")):Object(styled_components__WEBPACK_IMPORTED_MODULE_27__.c)(_templateObject6||(_templateObject6=_taggedTemplateLiteralLoose(["\n    ","\n  "])),Object(styled_system__WEBPACK_IMPORTED_MODULE_26__.z)("componentStyles."+componentName+"."+color,""))}},getPaletteColor=function getPaletteColor(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return function(props){var color=2===args.length?args[0]:props.color,shade=2===args.length?args[1]:args[0],colorShade=shade.match(colorShadeRegex);return colorShade&&(color=colorShade[0],shade=colorShade[1]),Object(styled_system__WEBPACK_IMPORTED_MODULE_26__.z)("palette."+color+"."+shade)(props)||Object(styled_system__WEBPACK_IMPORTED_MODULE_26__.z)("palette."+color)(props)||Object(styled_system__WEBPACK_IMPORTED_MODULE_26__.z)("colors."+color)(props)||color}},hasPaletteColor=function hasPaletteColor(props){return props.theme&&props.theme.palette&&"string"==typeof props.color&&Object.keys(props.theme.palette).includes(props.color.split(".")[0])},getTextColorOn=function getTextColorOn(name){return function(props){var theme=props.theme;if(theme.palette){var _color=getPaletteColor(name)(props),text=theme.palette.text;return _color&&function getContrastRatio(colorA,colorB){var luminA=getLuminance(colorA),luminB=getLuminance(colorB);return(Math.max(luminA,luminB)+.05)/(Math.min(luminA,luminB)+.05)}(text.lightest,_color)>=theme.contrastRatio?text.lightest:text.base}return""}},getByPalette=function getByPalette(props){return Object(styled_components__WEBPACK_IMPORTED_MODULE_27__.c)(_templateObject7||(_templateObject7=_taggedTemplateLiteralLoose(["\n  background-color: ",";\n  color: ",";\n"])),getPaletteColor(props.bg,"base")(props),getPaletteColor(props.color,"base")(props))},color=function color(props){return props.theme&&(props.color||props.bg)?"text"===props.color?props.color&&props.bg?getByPalette(props):Object(styled_components__WEBPACK_IMPORTED_MODULE_27__.c)(_templateObject8||(_templateObject8=_taggedTemplateLiteralLoose(["\n          color: ",";\n        "])),getPaletteColor("base")(props)):props.color&&props.bg?getByPalette(props):props.color&&hasPaletteColor(props)?Object(styled_components__WEBPACK_IMPORTED_MODULE_27__.c)(_templateObject9||(_templateObject9=_taggedTemplateLiteralLoose(["\n      background-color: ",";\n      color: ",";\n    "])),getPaletteColor("base")(props),getTextColorOn("base")(props)):props.color?Object(styled_components__WEBPACK_IMPORTED_MODULE_27__.c)(_templateObject10||(_templateObject10=_taggedTemplateLiteralLoose(["\n      color: ",";\n    "])),getPaletteColor("base")(props)):Object(styled_components__WEBPACK_IMPORTED_MODULE_27__.c)(_templateObject11||(_templateObject11=_taggedTemplateLiteralLoose(["\n      background-color: ",";\n    "])),getPaletteColor(props.bg,"base")(props)):""},borders=function borders(props){var borderColor=props.color?getPaletteColor("base")(props):getPaletteColor("border.base")(props),focusColor=props.color?borderColor:getPaletteColor("primary.base")(props);return{"border-color":borderColor,":focus":{outline:0,"border-color":focusColor,"box-shadow":"0 0 0 2px "+focusColor}}}}}]);