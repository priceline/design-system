"use strict";(self.webpackChunk_priceline_storybook=self.webpackChunk_priceline_storybook||[]).push([[6420],{"../../packages/core/lib-esm/Layout/Layout.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LayoutInContainer:()=>LayoutInContainer,default:()=>Layout_stories});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.function.bind.js");var react=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),moize=(__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.map.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.string.split.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.parse-int.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.fill.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/moize@6.1.0/node_modules/moize/dist/moize.js")),moize_default=__webpack_require__.n(moize),prop_types=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Flex=__webpack_require__("../../packages/core/lib-esm/Flex/Flex.js"),Box=__webpack_require__("../../packages/core/lib-esm/Box/Box.js"),getWidthsForVariation=function getWidthsForVariation(variation,numChildren){return variation?"50-50"===variation?Array(numChildren).fill(.5):"33-33-33"===variation?Array(numChildren).fill(1/3):"25-25-25-25"===variation?Array(numChildren).fill(1/4):"100"!==variation?function getNonhomogeneousWidths(variationWidth,numChildren){for(var variationWidths=variationWidth.split("-").map((function(width){return parseInt(width,10)})),widths=[],i=0;i<numChildren;i++)widths.push(variationWidths[i%variationWidths.length]/100);return widths}(variation,numChildren):Array(numChildren).fill(1):null},memoGetChildrenWidths=moize_default()((function getChildrenWidths(variation,numChildren){if(Array.isArray(variation)){for(var variationWidths=variation.map((function(v){return getWidthsForVariation(v,numChildren)})),widthsPerChild=[],_loop_1=function _loop_1(i){var widths=variationWidths.map((function(v){return v&&v[i]}));widthsPerChild.push(widths)},i=0;i<numChildren;i++)_loop_1(i);return widthsPerChild}return getWidthsForVariation(variation,numChildren)})),gapValues={sm:1,md:2,lg:3,xl:4},memoGetGapValues=moize_default()((function getGapValues(gapProp,rowGapProp){var boxPaddingX,boxPaddingY,flexMarginX,flexMarginY;return Array.isArray(gapProp)?(boxPaddingX=gapProp.map((function(gap){return gapValues[gap]})),flexMarginX=gapProp.map((function(gap){return gapValues[gap]?-1*gapValues[gap]:null}))):(boxPaddingX=gapValues[gapProp],flexMarginX=-1*gapValues[gapProp]),Array.isArray(rowGapProp)?(boxPaddingY=rowGapProp.map((function(gap){return gapValues[gap]||null})),flexMarginY=rowGapProp.map((function(gap){return gapValues[gap]?-1*gapValues[gap]:null}))):(boxPaddingY=gapValues[rowGapProp],flexMarginY=-1*gapValues[rowGapProp]),{boxPaddingX,boxPaddingY,flexMarginX,flexMarginY}})),ALLOWED_LAYOUT_VALUES=["50-50","33-33-33","33-66","66-33","25-25-25-25","60-40","40-60","100"],ALLOWED_GAP_VALUES=["sm","md","lg","xl"],propTypes={children:prop_types_default().node.isRequired,variation:prop_types_default().oneOfType([prop_types_default().oneOf(ALLOWED_LAYOUT_VALUES),prop_types_default().arrayOf(ALLOWED_LAYOUT_VALUES)]),gap:prop_types_default().oneOfType([prop_types_default().oneOf(ALLOWED_GAP_VALUES),prop_types_default().arrayOf(prop_types_default().oneOf(ALLOWED_GAP_VALUES))]),rowGap:prop_types_default().oneOfType([prop_types_default().oneOf(ALLOWED_GAP_VALUES),prop_types_default().arrayOf(prop_types_default().oneOf(ALLOWED_GAP_VALUES))])},Layout=function Layout(_a){var children=_a.children,gap=_a.gap,rowGap=_a.rowGap,variation=_a.variation,widths=memoGetChildrenWidths(variation,children.length),_b=memoGetGapValues(gap,rowGap),boxPaddingX=_b.boxPaddingX,boxPaddingY=_b.boxPaddingY,flexMarginX=_b.flexMarginX,flexMarginY=_b.flexMarginY;return react.createElement(Flex.Z,{flexWrap:"wrap",mx:flexMarginX,my:flexMarginY,"data-testid":"layout-flex"},react.Children.map(children,(function(child,idx){return react.createElement(Box.Z,{width:widths[idx],px:boxPaddingX,py:boxPaddingY,"data-testid":"box-".concat(idx)},react.cloneElement(child))})))};Layout.propTypes=propTypes,Layout.defaultProps={},Layout.displayName="Layout",Layout.__docgenInfo={description:"",methods:[],displayName:"Layout",props:{children:{type:{name:"node"},required:!0,description:""},variation:{type:{name:"union",value:[{name:"enum",value:[{value:"'50-50'",computed:!1},{value:"'33-33-33'",computed:!1},{value:"'33-66'",computed:!1},{value:"'66-33'",computed:!1},{value:"'25-25-25-25'",computed:!1},{value:"'60-40'",computed:!1},{value:"'40-60'",computed:!1},{value:"'100'",computed:!1}]},{name:"arrayOf",value:{name:"custom",raw:"ALLOWED_LAYOUT_VALUES"}}]},required:!1,description:""},gap:{type:{name:"union",value:[{name:"enum",value:[{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1},{value:"'xl'",computed:!1}]},{name:"arrayOf",value:{name:"enum",value:[{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1},{value:"'xl'",computed:!1}]}}]},required:!1,description:""},rowGap:{type:{name:"union",value:[{name:"enum",value:[{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1},{value:"'xl'",computed:!1}]},{name:"arrayOf",value:{name:"enum",value:[{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1},{value:"'xl'",computed:!1}]}}]},required:!1,description:""}}};const Layout_Layout=Layout;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/lib-esm/Layout/Layout.js"]={name:"Layout",docgenInfo:Layout.__docgenInfo,path:"../../packages/core/lib-esm/Layout/Layout.js"});var Container=__webpack_require__("../../packages/core/lib-esm/Container/Container.js"),__makeTemplateObject=function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};const Layout_stories={title:"Layout",component:Layout_Layout};var templateObject_1,LayoutDemoBox=(0,styled_components_browser_esm.ZP)(Box.Z)(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  height: 100px;\n"],["\n  height: 100px;\n"]))),LayoutInContainer=function Template(args){return react.createElement(Flex.Z,{width:"100%",color:"primary.light"},react.createElement(Container.Z,{size:"xl",style:{border:"1px solid"}},react.createElement(Layout_Layout,__assign({},args),react.createElement(LayoutDemoBox,{color:"secondary.base"}),react.createElement(LayoutDemoBox,{color:"warning.base"}),react.createElement(LayoutDemoBox,{color:"alert"}),react.createElement(LayoutDemoBox,{color:"primary"}),react.createElement(LayoutDemoBox,{color:"promoPrimary"}))))}.bind({});LayoutInContainer.args={variation:"33-33-33",gap:"sm"},LayoutInContainer.parameters=Object.assign({storySource:{source:"function (args) { return (React.createElement(Flex, { width: '100%', color: 'primary.light' },\n    React.createElement(Container, { size: 'xl', style: { border: \"1px solid\" } },\n        React.createElement(Layout, __assign({}, args),\n            React.createElement(LayoutDemoBox, { color: 'secondary.base' }),\n            React.createElement(LayoutDemoBox, { color: 'warning.base' }),\n            React.createElement(LayoutDemoBox, { color: 'alert' }),\n            React.createElement(LayoutDemoBox, { color: 'primary' }),\n            React.createElement(LayoutDemoBox, { color: 'promoPrimary' }))))); }"}},LayoutInContainer.parameters)},"../../packages/core/lib-esm/Container/Container.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.define-property.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/lib-esm/Box/Box.js"),__makeTemplateObject=function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},sizes={sm:640,md:768,lg:1024,xl:1280},paddings={sm:3,md:[3,null,4],lg:[3,null,4],xl:[3,null,4]},propTypes={maxWidth:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,size:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["sm","md","lg","xl"])},Container=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(___WEBPACK_IMPORTED_MODULE_3__.Z).attrs((function(props){return props.size?{px:paddings[props.size],maxWidth:props.size?"".concat(sizes[props.size],"px"):props.maxWidth}:props.maxWidth?{maxWidth:"".concat(props.maxWidth,"px")}:{maxWidth:props.theme.maxContainerWidth}}))(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n"],["\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n"])));Container.propTypes=propTypes,Container.displayName="Container";const __WEBPACK_DEFAULT_EXPORT__=Container;var templateObject_1},"../../packages/core/lib-esm/Flex/Flex.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.symbol.js");var styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js"),_Box__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../packages/core/lib-esm/Box/Box.js"),_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/core/lib-esm/utils/utils.js"),__makeTemplateObject=function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},propTypes=__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({},styled_system__WEBPACK_IMPORTED_MODULE_4__.Dh.propTypes),styled_system__WEBPACK_IMPORTED_MODULE_4__.bf.propTypes),{color:(0,_utils__WEBPACK_IMPORTED_MODULE_5__.nL)(),bg:(0,_utils__WEBPACK_IMPORTED_MODULE_5__.aR)("color")}),styled_system__WEBPACK_IMPORTED_MODULE_4__.cq.propTypes),styled_system__WEBPACK_IMPORTED_MODULE_4__.Kl.propTypes),styled_system__WEBPACK_IMPORTED_MODULE_4__.WO.propTypes),styled_system__WEBPACK_IMPORTED_MODULE_4__.Me.propTypes),{wrap:(0,_utils__WEBPACK_IMPORTED_MODULE_5__.aR)("flexWrap"),align:(0,_utils__WEBPACK_IMPORTED_MODULE_5__.aR)("alignItems"),justify:(0,_utils__WEBPACK_IMPORTED_MODULE_5__.aR)("justifyContent")}),Flex=(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)(_Box__WEBPACK_IMPORTED_MODULE_7__.Z).attrs((function(_a){var wrap=_a.wrap,align=_a.align,justify=_a.justify,props=__rest(_a,["wrap","align","justify"]);return __assign({flexWrap:wrap?"wrap":void 0,alignItems:align,justifyContent:justify},props)}))(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  display: flex;\n  ","\n  "," ","\n  ","\n  ","\n"],["\n  display: flex;\n  ","\n  "," ","\n  ","\n  ","\n"])),(0,_utils__WEBPACK_IMPORTED_MODULE_5__.hO)("Flex"),styled_system__WEBPACK_IMPORTED_MODULE_4__.cq,styled_system__WEBPACK_IMPORTED_MODULE_4__.Kl,styled_system__WEBPACK_IMPORTED_MODULE_4__.Me,styled_system__WEBPACK_IMPORTED_MODULE_4__.WO);Flex.propTypes=propTypes,Flex.displayName="Flex";const __WEBPACK_DEFAULT_EXPORT__=Flex;var templateObject_1}}]);