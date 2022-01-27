(self.webpackChunk_priceline_storybook=self.webpackChunk_priceline_storybook||[]).push([[5091],{"../../packages/core/lib-esm/Image/Image.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BoxShadow:()=>BoxShadow,Default:()=>Default,ResponsiveWidth:()=>ResponsiveWidth,Rounded:()=>Rounded,SpecificWidthAndHeight:()=>SpecificWidthAndHeight,default:()=>Image_stories});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.function.bind.js");var react=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),Image=__webpack_require__("../../packages/core/lib-esm/Image/Image.js"),args=__webpack_require__("../../packages/core/lib-esm/storybook/args/index.js"),argTypes={borderRadius:{name:"borderRadius",type:{name:"string"},options:args.LL,description:"borderRadius",control:{type:"select"}},rounded:{name:"rounded",type:{name:"string"},options:args.eP,description:"rounded",control:{type:"select"}},boxShadowSize:{name:"boxShadowSize",type:{name:"string"},options:args.q,description:"Size of the box shadow",control:{type:"select"}},boxShadowColor:{name:"boxShadowColor",type:{name:"string"},options:args.O9,description:"Palette family for box shadows",table:{type:{summary:'Palette color to use for box-shadow - always uses "dark" shade'}},control:{type:"select"}},height:{name:"height",type:{name:"string"},description:"height"},width:{name:"width",type:{name:"string"},description:"width"}},__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},imageSrc="https://www.goodfreephotos.com/albums/new-zealand/other-new-zealand/lake-pukaki-and-mount-cook-in-the-background.jpg";const Image_stories={title:"Image",component:Image.Z,parameters:{docs:{description:{component:"A low-level layout component that renders an image"}}},argTypes};var Template=function Template(args){return react.createElement(Image.Z,__assign({},args,{src:imageSrc}))},Default=Template.bind({}),Rounded=Template.bind({});Rounded.args={rounded:"left",borderRadius:"full"};var BoxShadow=Template.bind({});BoxShadow.args={boxShadowSize:"overlay-lg"};var ResponsiveWidth=function ResponsiveWidth(){return react.createElement(Image.Z,{width:.5,src:imageSrc})},SpecificWidthAndHeight=function SpecificWidthAndHeight(){return react.createElement(Image.Z,{width:"200px",height:"300px",src:imageSrc})};Default.parameters=Object.assign({storySource:{source:"function (args) { return React.createElement(Image, __assign({}, args, { src: imageSrc })); }"}},Default.parameters),Rounded.parameters=Object.assign({storySource:{source:"function (args) { return React.createElement(Image, __assign({}, args, { src: imageSrc })); }"}},Rounded.parameters),BoxShadow.parameters=Object.assign({storySource:{source:"function (args) { return React.createElement(Image, __assign({}, args, { src: imageSrc })); }"}},BoxShadow.parameters),ResponsiveWidth.parameters=Object.assign({storySource:{source:"function () { return React.createElement(Image, { width: 1 / 2, src: imageSrc }); }"}},ResponsiveWidth.parameters),SpecificWidthAndHeight.parameters=Object.assign({storySource:{source:"function () { return React.createElement(Image, { width: '200px', height: '300px', src: imageSrc }); }"}},SpecificWidthAndHeight.parameters),ResponsiveWidth.__docgenInfo={description:"",methods:[],displayName:"ResponsiveWidth"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/lib-esm/Image/Image.stories.js"]={name:"ResponsiveWidth",docgenInfo:ResponsiveWidth.__docgenInfo,path:"../../packages/core/lib-esm/Image/Image.stories.js"}),SpecificWidthAndHeight.__docgenInfo={description:"",methods:[],displayName:"SpecificWidthAndHeight"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/lib-esm/Image/Image.stories.js"]={name:"SpecificWidthAndHeight",docgenInfo:SpecificWidthAndHeight.__docgenInfo,path:"../../packages/core/lib-esm/Image/Image.stories.js"})},"../../packages/core/lib-esm/Image/Image.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.assign.js");var styled_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),styled_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/core/lib-esm/utils/attrs/borderRadiusAttrs.js"),_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/core/lib-esm/utils/attrs/boxShadowAttrs.js"),_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/core/lib-esm/utils/createPalette.js"),__makeTemplateObject=function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},propTypes=__assign(__assign(__assign(__assign(__assign(__assign({},styled_system__WEBPACK_IMPORTED_MODULE_2__.E0.propTypes),styled_system__WEBPACK_IMPORTED_MODULE_2__.Wn.propTypes),styled_system__WEBPACK_IMPORTED_MODULE_2__.Cb.propTypes),styled_system__WEBPACK_IMPORTED_MODULE_2__.Dh.propTypes),styled_system__WEBPACK_IMPORTED_MODULE_2__.bf.propTypes),{borderRadiusSize:prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(_utils__WEBPACK_IMPORTED_MODULE_4__.Ze),rounded:prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(_utils__WEBPACK_IMPORTED_MODULE_4__.YP),boxShadowSize:prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(_utils__WEBPACK_IMPORTED_MODULE_5__.d),boxShadowColor:prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(_utils__WEBPACK_IMPORTED_MODULE_6__.g)}),Image=styled_components__WEBPACK_IMPORTED_MODULE_7__.ZP.img.attrs((function(props){return __assign(__assign({},(0,_utils__WEBPACK_IMPORTED_MODULE_4__._U)(props)),(0,_utils__WEBPACK_IMPORTED_MODULE_5__.v)(props))}))(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  display: block;\n  max-width: 100%;\n  ",";\n  ",";\n  ",";\n\n  ","\n  ","\n"],["\n  display: block;\n  max-width: 100%;\n  ",";\n  ",";\n  ",";\n\n  ","\n  ","\n"])),styled_system__WEBPACK_IMPORTED_MODULE_2__.Cb,styled_system__WEBPACK_IMPORTED_MODULE_2__.Dh,styled_system__WEBPACK_IMPORTED_MODULE_2__.bf,styled_system__WEBPACK_IMPORTED_MODULE_2__.E0,styled_system__WEBPACK_IMPORTED_MODULE_2__.Wn);Image.displayName="Image",Image.propTypes=propTypes;const __WEBPACK_DEFAULT_EXPORT__=Image;var templateObject_1},"../../packages/core/lib-esm/storybook/args/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O9:()=>colors,LL:()=>borderRadii,eP:()=>rounded,q:()=>shadows,sq:()=>textStyles,CH:()=>fontSizes});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.reduce.js");var _utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/lib-esm/utils/createPalette.js"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/core/lib-esm/utils/attrs/borderRadiusAttrs.js"),_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/core/lib-esm/utils/attrs/boxShadowAttrs.js"),_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/core/lib-esm/utils/attrs/typographyAttrs.js"),__spreadArray=function(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))},colors=__spreadArray(__spreadArray([""],_utils__WEBPACK_IMPORTED_MODULE_3__.g,!0),["NOTVALID"],!1),borderRadii=__spreadArray(__spreadArray([""],_utils__WEBPACK_IMPORTED_MODULE_4__.Ze,!0),["NOTVALID"],!1),rounded=__spreadArray(__spreadArray([""],_utils__WEBPACK_IMPORTED_MODULE_4__.YP,!0),["NOTVALID"],!1),shadows=__spreadArray(__spreadArray([""],_utils__WEBPACK_IMPORTED_MODULE_5__.d,!0),["NOTVALID"],!1),textStyles=__spreadArray(__spreadArray([""],_utils__WEBPACK_IMPORTED_MODULE_6__.F,!0),["NOTVALID"],!1),fontSizes=(["m","mt","mr","mb","ml","mx","my","p","pt","pr","pb","pl","px","py"].reduce((function(acc,prop){return acc[prop]={name:prop,type:{name:"string"},description:prop,table:{disable:!0}},acc}),{}),[0,1,2,3,4,5,6,7,8])},"../../packages/core/lib-esm/utils/attrs/typographyAttrs.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F:()=>textStylesValues,I:()=>typographyAttrs});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.map.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.reduce.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/web.dom-collections.for-each.js");var textStylesValues=["title1","title2","title3","heading1","heading2","heading3","heading4","heading5","heading6","article","paragraph","caption","overline","disclaimer","highlight","subtitle1","subheading1","subheading2","subheading3","subheading4","subheading5","subheading6"],textStylesAllowedPropsAcc={fontSize:[],fontWeight:[],lineHeight:[],letterSpacing:[],caps:[]};function typographyAttrs(props){var textStyle=props.textStyle,theme=props.theme;return textStyle?Array.isArray(textStyle)?textStyle.map((function(style){return theme.typography[style]})).reduce((function(acc,style){return Object.keys(style).forEach((function(styleProp){var stylePropValue=style[styleProp]||null;styleProp&&stylePropValue?acc[styleProp].push(stylePropValue):acc[styleProp].push(null)})),acc}),textStylesAllowedPropsAcc):theme.typography[textStyle]:{}}},"../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.reduce.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/internals/export.js"),$reduce=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/internals/array-reduce.js").left,arrayMethodIsStrict=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/internals/array-method-is-strict.js"),CHROME_VERSION=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/internals/engine-v8-version.js"),IS_NODE=__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/internals/engine-is-node.js");$({target:"Array",proto:!0,forced:!arrayMethodIsStrict("reduce")||!IS_NODE&&CHROME_VERSION>79&&CHROME_VERSION<83},{reduce:function reduce(callbackfn){var length=arguments.length;return $reduce(this,callbackfn,length,length>1?arguments[1]:void 0)}})},"../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.function.bind.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/internals/export.js")({target:"Function",proto:!0},{bind:__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/internals/function-bind.js")})}}]);