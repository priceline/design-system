(self.webpackChunk_priceline_storybook=self.webpackChunk_priceline_storybook||[]).push([[9461],{"../../packages/core/lib-esm/Badge/Badge.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,LightBlueAndTextCustom:()=>LightBlueAndTextCustom,TextCustom:()=>TextCustom,default:()=>Badge_stories});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.function.bind.js");var react=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),Badge=__webpack_require__("../../packages/core/lib-esm/Badge/Badge.js"),args=__webpack_require__("../../packages/core/lib-esm/storybook/args/index.js"),argTypes={borderRadius:{name:"borderRadius",type:{name:"string"},options:args.LL,description:"borderRadius",control:{type:"select"}},bg:{name:"bg",type:{name:"string"},options:args.O9,description:"Color of badge background",control:{type:"select"}},color:{name:"color",type:{name:"string"},options:args.O9,description:"Color of badge",control:{type:"select"}}},__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};const Badge_stories={title:"Badge",component:Badge.Z,parameters:{docs:{description:{component:"Use the <Badge /> component to render a primitive badge."}}},argTypes};var Template=function Template(args){return react.createElement(Badge.Z,__assign({},args),"badge")},Default=Template.bind({});Default.args={bg:"lightGray"};var TextCustom=Template.bind({});TextCustom.storyName="text (custom)",TextCustom.args={bg:"text",color:"white"};var LightBlueAndTextCustom=Template.bind({});LightBlueAndTextCustom.storyName="lightBlue and text (custom)",LightBlueAndTextCustom.args={bg:"primary.light",color:"text"},Default.parameters=Object.assign({storySource:{source:'function (args) { return React.createElement(Badge, __assign({}, args), "badge"); }'}},Default.parameters),TextCustom.parameters=Object.assign({storySource:{source:'function (args) { return React.createElement(Badge, __assign({}, args), "badge"); }'}},TextCustom.parameters),LightBlueAndTextCustom.parameters=Object.assign({storySource:{source:'function (args) { return React.createElement(Badge, __assign({}, args), "badge"); }'}},LightBlueAndTextCustom.parameters)},"../../packages/core/lib-esm/Badge/Badge.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.keys.js");var prop_types__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/core/lib-esm/utils/attrs/borderRadiusAttrs.js"),_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/core/lib-esm/utils/utils.js"),__makeTemplateObject=function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},sizes={small:(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.iv)(templateObject_1||(templateObject_1=__makeTemplateObject(["\n    ","\n    line-height: ",";\n  "],["\n    ","\n    line-height: ",";\n  "])),(0,styled_system__WEBPACK_IMPORTED_MODULE_4__.R)("textStyles.small"),(0,styled_system__WEBPACK_IMPORTED_MODULE_4__.R)("lineHeights.display")),medium:(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.iv)(templateObject_2||(templateObject_2=__makeTemplateObject(["\n    ","\n    line-height: ",";\n  "],["\n    ","\n    line-height: ",";\n  "])),(0,styled_system__WEBPACK_IMPORTED_MODULE_4__.R)("textStyles.display0"),(0,styled_system__WEBPACK_IMPORTED_MODULE_4__.R)("lineHeights.standard"))},Badge=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div.attrs(_utils__WEBPACK_IMPORTED_MODULE_5__._U)(templateObject_3||(templateObject_3=__makeTemplateObject(["\n  display: inline-block;\n  text-transform: uppercase;\n  letter-spacing: ",";\n  ",";\n  ",";\n  "," "," ",";\n\n  ","\n"],["\n  display: inline-block;\n  text-transform: uppercase;\n  letter-spacing: ",";\n  ",";\n  ",";\n  "," "," ",";\n\n  ","\n"])),(0,styled_system__WEBPACK_IMPORTED_MODULE_4__.R)("letterSpacings.caps"),(function(_a){var theme=_a.theme;return(0,_utils__WEBPACK_IMPORTED_MODULE_6__.BS)(sizes,void 0,theme.mediaQueries)}),(0,_utils__WEBPACK_IMPORTED_MODULE_6__.hO)("Badge"),styled_system__WEBPACK_IMPORTED_MODULE_4__.Dh,(function type(props){var badgeColors={blue:{backgroundColor:props.theme.colors.blue,color:props.theme.colors.white},lightBlue:{backgroundColor:props.theme.colors.lightBlue,color:props.theme.colors.darkBlue},green:{backgroundColor:props.theme.colors.green,color:props.theme.colors.white},lightGreen:{backgroundColor:props.theme.colors.lightGreen,color:props.theme.colors.darkGreen},red:{backgroundColor:props.theme.colors.red,color:props.theme.colors.white},lightRed:{backgroundColor:props.theme.colors.lightRed,color:props.theme.colors.darkRed},orange:{backgroundColor:props.theme.colors.orange,color:props.theme.colors.text},gray:{backgroundColor:props.theme.colors.gray,color:props.theme.colors.white},lightGray:{backgroundColor:props.theme.colors.lightGray,color:props.theme.colors.text}};return!(props.bg&&props.color)&&(badgeColors[props.bg]||badgeColors.lightGray)}),_utils__WEBPACK_IMPORTED_MODULE_6__.$_,styled_system__WEBPACK_IMPORTED_MODULE_4__.E0);Badge.displayName="Badge",Badge.propTypes=__assign(__assign({},styled_system__WEBPACK_IMPORTED_MODULE_4__.Dh.propTypes),{size:prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOf(Object.keys(sizes)),color:(0,_utils__WEBPACK_IMPORTED_MODULE_6__.nL)(),bg:(0,_utils__WEBPACK_IMPORTED_MODULE_6__.aR)("color")}),Badge.defaultProps={size:"medium",px:2,py:1,borderRadius:"full"};const __WEBPACK_DEFAULT_EXPORT__=Badge;var templateObject_1,templateObject_2,templateObject_3},"../../packages/core/lib-esm/storybook/args/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O9:()=>colors,LL:()=>borderRadii,eP:()=>rounded,q:()=>shadows,sq:()=>textStyles,CH:()=>fontSizes});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.reduce.js");var _utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/lib-esm/utils/createPalette.js"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/core/lib-esm/utils/attrs/borderRadiusAttrs.js"),_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/core/lib-esm/utils/attrs/boxShadowAttrs.js"),_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/core/lib-esm/utils/attrs/typographyAttrs.js"),__spreadArray=function(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))},colors=__spreadArray(__spreadArray([""],_utils__WEBPACK_IMPORTED_MODULE_3__.g,!0),["NOTVALID"],!1),borderRadii=__spreadArray(__spreadArray([""],_utils__WEBPACK_IMPORTED_MODULE_4__.Ze,!0),["NOTVALID"],!1),rounded=__spreadArray(__spreadArray([""],_utils__WEBPACK_IMPORTED_MODULE_4__.YP,!0),["NOTVALID"],!1),shadows=__spreadArray(__spreadArray([""],_utils__WEBPACK_IMPORTED_MODULE_5__.d,!0),["NOTVALID"],!1),textStyles=__spreadArray(__spreadArray([""],_utils__WEBPACK_IMPORTED_MODULE_6__.F,!0),["NOTVALID"],!1),fontSizes=(["m","mt","mr","mb","ml","mx","my","p","pt","pr","pb","pl","px","py"].reduce((function(acc,prop){return acc[prop]={name:prop,type:{name:"string"},description:prop,table:{disable:!0}},acc}),{}),[0,1,2,3,4,5,6,7,8])},"../../packages/core/lib-esm/utils/attrs/typographyAttrs.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F:()=>textStylesValues,I:()=>typographyAttrs});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.map.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.reduce.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/web.dom-collections.for-each.js");var textStylesValues=["title1","title2","title3","heading1","heading2","heading3","heading4","heading5","heading6","article","paragraph","caption","overline","disclaimer","highlight","subtitle1","subheading1","subheading2","subheading3","subheading4","subheading5","subheading6"];function typographyAttrs(props){var textStyle=props.textStyle,theme=props.theme;return textStyle?Array.isArray(textStyle)?textStyle.map((function(style){return theme.typography[style]})).reduce((function(acc,style){var styleProps=style&&style.hasOwnProperty("fontSize")?Object.keys(style):[];return 0===styleProps.length?["fontSize","fontWeight","lineHeight","letterSpacing","textTransform"].forEach((function(styleProp){acc[styleProp].push(null)})):styleProps.forEach((function(styleProp){acc[styleProp].push(style[styleProp])})),acc}),{fontSize:[],fontWeight:[],lineHeight:[],letterSpacing:[],caps:[],textTransform:[]}):theme.typography[textStyle]:{}}},"../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.reduce.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/internals/export.js"),$reduce=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/internals/array-reduce.js").left,arrayMethodIsStrict=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/internals/array-method-is-strict.js"),CHROME_VERSION=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/internals/engine-v8-version.js"),IS_NODE=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/internals/engine-is-node.js");$({target:"Array",proto:!0,forced:!arrayMethodIsStrict("reduce")||!IS_NODE&&CHROME_VERSION>79&&CHROME_VERSION<83},{reduce:function reduce(callbackfn){var length=arguments.length;return $reduce(this,callbackfn,length,length>1?arguments[1]:void 0)}})},"../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.function.bind.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/internals/export.js"),bind=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/internals/function-bind.js");$({target:"Function",proto:!0,forced:Function.bind!==bind},{bind})}}]);