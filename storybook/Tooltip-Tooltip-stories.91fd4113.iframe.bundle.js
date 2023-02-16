"use strict";(self.webpackChunk_priceline_storybook=self.webpackChunk_priceline_storybook||[]).push([[2724],{"../../packages/core/src/Tooltip/Tooltip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TooltipComponent:()=>TooltipComponent,WithAnchors:()=>WithAnchors,WithoutAnchors:()=>WithoutAnchors,__namedExportsOrder:()=>Tooltip_stories_namedExportsOrder,default:()=>Tooltip_stories});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");var _templateObject,Flex=__webpack_require__("../../packages/core/src/Flex/Flex.tsx"),Tooltip=__webpack_require__("../../packages/core/src/Tooltip/Tooltip.tsx"),Box=__webpack_require__("../../packages/core/src/Box/Box.tsx"),FormField=__webpack_require__("../../packages/core/src/FormField/FormField.tsx"),argTypes={borderRadius:{name:"borderRadius",type:{name:"string"},options:__webpack_require__("../../packages/core/src/storybook/args/index.ts").LL,description:"borderRadius",control:{type:"select"}}},styled_components_browser_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@5.3.5_sfoxds7t5ydpegc3knd667wn6m/node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");var FlexColumn=(0,styled_components_browser_esm.ZP)(Flex.Z)(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  flex-direction: column;\n"])));const Tooltip_stories={title:"Tooltip",component:Tooltip.Z,argTypes};var Template=function Template(args){return(0,jsx_runtime.jsx)(Tooltip.Z,Object.assign({},args,{children:"I am a tooltip!"}))};Template.displayName="Template";var TooltipComponent=Template.bind({});TooltipComponent.args={color:"primary"};var WithoutAnchors=function WithoutAnchors(){return(0,jsx_runtime.jsxs)(Box.Z,{mt:5,width:500,children:[(0,jsx_runtime.jsx)(Tooltip.Z,{bg:"blue",color:"white",top:!0,left:!0,children:"left tooltip"}),(0,jsx_runtime.jsx)(Tooltip.Z,{bg:"black",color:"white",top:!0,center:!0,children:"centered tooltip"}),(0,jsx_runtime.jsx)(Tooltip.Z,{bg:"red",color:"white",top:!0,right:!0,children:"right tooltip"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(Tooltip.Z,{bottom:!0,left:!0,children:"left tooltip"}),(0,jsx_runtime.jsx)(Tooltip.Z,{bottom:!0,center:!0,children:"centered tooltip"}),(0,jsx_runtime.jsx)(Tooltip.Z,{bottom:!0,right:!0,children:"right tooltip"})]})};WithoutAnchors.displayName="WithoutAnchors";var WithAnchors=function WithAnchors(){return(0,jsx_runtime.jsxs)(FlexColumn,{justifyContent:"space-between",wrap:"wrap",children:[(0,jsx_runtime.jsxs)(Box.Z,{width:300,p:2,my:2,children:[(0,jsx_runtime.jsx)(Tooltip.Z,{top:!0,left:!0,bg:"blue",color:"white",children:"top left tooltip"}),(0,jsx_runtime.jsx)("div",{children:"some text"})]}),(0,jsx_runtime.jsxs)(Box.Z,{width:"300px",p:2,mb:5,children:[(0,jsx_runtime.jsx)("div",{children:"some text"}),(0,jsx_runtime.jsx)(Tooltip.Z,{bottom:!0,left:!0,bg:"red",color:"white",children:"bottom left tooltip"})]}),(0,jsx_runtime.jsxs)(Box.Z,{width:"300px",p:2,mb:55,children:[(0,jsx_runtime.jsx)(FormField.Z,{icon:"circleInfo",color:"blue",label:"Email Address",defaultValue:"albus.dumbledore@priceline.com",id:"form-field-3",placeholder:"example@test.com"}),(0,jsx_runtime.jsx)(Tooltip.Z,{bottom:!0,left:!0,bg:"blue",color:"white",children:"bottom left tooltip"})]}),(0,jsx_runtime.jsxs)(Box.Z,{width:"300px",p:2,mb:5,children:[(0,jsx_runtime.jsx)(FormField.Z,{icon:"circleInfo",color:"blue",label:"Email Address",defaultValue:"albus.dumbledore@priceline.com",id:"form-field-4",placeholder:"example@test.com"}),(0,jsx_runtime.jsx)(Tooltip.Z,{bottom:!0,center:!0,bg:"blue",color:"white",children:"bottom center tooltip"})]}),(0,jsx_runtime.jsxs)(Box.Z,{width:"300px",p:2,mb:"80px",children:[(0,jsx_runtime.jsx)(FormField.Z,{icon:"circleInfo",color:"red",label:"Email Address",defaultValue:"albus.dumbledore@pr",id:"form-field-5",placeholder:"example@test.com"}),(0,jsx_runtime.jsx)(Tooltip.Z,{bottom:!0,right:!0,bg:"red",color:"white",children:"Email Address Invalid"})]}),(0,jsx_runtime.jsxs)(Box.Z,{width:"300px",p:2,mb:5,children:[(0,jsx_runtime.jsx)(Tooltip.Z,{top:!0,left:!0,bg:"blue",color:"white",children:"top left tooltip"}),(0,jsx_runtime.jsx)(FormField.Z,{icon:"circleInfo",color:"blue",label:"Email Address",defaultValue:"albus.dumbledore@priceline.com",id:"form-field-6",placeholder:"example@test.com"})]}),(0,jsx_runtime.jsxs)(Box.Z,{width:"300px",p:2,mb:5,children:[(0,jsx_runtime.jsx)(Tooltip.Z,{top:!0,center:!0,bg:"blue",color:"white",children:"top center tooltip"}),(0,jsx_runtime.jsx)(FormField.Z,{icon:"circleInfo",color:"blue",label:"Email Address",defaultValue:"albus.dumbledore@priceline.com",id:"form-field-7",placeholder:"example@test.com"})]}),(0,jsx_runtime.jsxs)(Box.Z,{width:"300px",p:2,children:[(0,jsx_runtime.jsx)(Tooltip.Z,{top:!0,right:!0,bg:"blue",color:"white",children:"top right tooltip"}),(0,jsx_runtime.jsx)(FormField.Z,{icon:"circleInfo",color:"blue",label:"Email Address",defaultValue:"albus.dumbledore@priceline.com",id:"form-field-8",placeholder:"example@test.com"})]})]})};WithAnchors.displayName="WithAnchors",TooltipComponent.parameters=Object.assign({storySource:{source:"(args) => <Tooltip {...args}>I am a tooltip!</Tooltip>"}},TooltipComponent.parameters),WithoutAnchors.parameters=Object.assign({storySource:{source:"() => (\n  <Box mt={5} width={500}>\n    <Tooltip bg='blue' color='white' top left>\n      left tooltip\n    </Tooltip>\n    <Tooltip bg='black' color='white' top center>\n      centered tooltip\n    </Tooltip>\n    <Tooltip bg='red' color='white' top right>\n      right tooltip\n    </Tooltip>\n    <br />\n    <Tooltip bottom left>\n      left tooltip\n    </Tooltip>\n    <Tooltip bottom center>\n      centered tooltip\n    </Tooltip>\n    <Tooltip bottom right>\n      right tooltip\n    </Tooltip>\n  </Box>\n)"}},WithoutAnchors.parameters),WithAnchors.parameters=Object.assign({storySource:{source:"() => (\n  <FlexColumn justifyContent='space-between' wrap='wrap'>\n    <Box width={300} p={2} my={2}>\n      <Tooltip top left bg='blue' color='white'>\n        top left tooltip\n      </Tooltip>\n      <div>some text</div>\n    </Box>\n    <Box width={'300px'} p={2} mb={5}>\n      <div>some text</div>\n      <Tooltip bottom left bg='red' color='white'>\n        bottom left tooltip\n      </Tooltip>\n    </Box>\n    <Box width={'300px'} p={2} mb={55}>\n      <InputField\n        icon='circleInfo'\n        color='blue'\n        label='Email Address'\n        defaultValue='albus.dumbledore@priceline.com'\n        id='form-field-3'\n        placeholder='example@test.com'\n      />\n      <Tooltip bottom left bg='blue' color='white'>\n        bottom left tooltip\n      </Tooltip>\n    </Box>\n    <Box width={'300px'} p={2} mb={5}>\n      <InputField\n        icon='circleInfo'\n        color='blue'\n        label='Email Address'\n        defaultValue='albus.dumbledore@priceline.com'\n        id='form-field-4'\n        placeholder='example@test.com'\n      />\n      <Tooltip bottom center bg='blue' color='white'>\n        bottom center tooltip\n      </Tooltip>\n    </Box>\n    <Box width={'300px'} p={2} mb={'80px'}>\n      <InputField\n        icon='circleInfo'\n        color='red'\n        label='Email Address'\n        defaultValue='albus.dumbledore@pr'\n        id='form-field-5'\n        placeholder='example@test.com'\n      />\n      <Tooltip bottom right bg='red' color='white'>\n        Email Address Invalid\n      </Tooltip>\n    </Box>\n    <Box width={'300px'} p={2} mb={5}>\n      <Tooltip top left bg='blue' color='white'>\n        top left tooltip\n      </Tooltip>\n      <InputField\n        icon='circleInfo'\n        color='blue'\n        label='Email Address'\n        defaultValue='albus.dumbledore@priceline.com'\n        id='form-field-6'\n        placeholder='example@test.com'\n      />\n    </Box>\n    <Box width={'300px'} p={2} mb={5}>\n      <Tooltip top center bg='blue' color='white'>\n        top center tooltip\n      </Tooltip>\n      <InputField\n        icon='circleInfo'\n        color='blue'\n        label='Email Address'\n        defaultValue='albus.dumbledore@priceline.com'\n        id='form-field-7'\n        placeholder='example@test.com'\n      />\n    </Box>\n    <Box width={'300px'} p={2}>\n      <Tooltip top right bg='blue' color='white'>\n        top right tooltip\n      </Tooltip>\n      <InputField\n        icon='circleInfo'\n        color='blue'\n        label='Email Address'\n        defaultValue='albus.dumbledore@priceline.com'\n        id='form-field-8'\n        placeholder='example@test.com'\n      />\n    </Box>\n  </FlexColumn>\n)"}},WithAnchors.parameters);var Tooltip_stories_namedExportsOrder=["TooltipComponent","WithoutAnchors","WithAnchors"]},"../../packages/core/src/FormField/FormField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.from.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.map.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.is-array.js");var react__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),_Box__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("../../packages/core/src/Box/Box.tsx"),_IconField__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("../../packages/core/src/IconField/IconField.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js"),_excluded=["children"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var paddingTopWithLabel={sm:"14px",md:"16px",lg:"20px",xl:"24px"},paddingBottomWithLabel={sm:"0px",md:"5px",lg:"8px",xl:"13px"},paddingTopForLabel={sm:"0px",md:"2px",lg:"6px",xl:"10px"},propTypes={children:function childrenPropType(props,propName,componentName){var children=react__WEBPACK_IMPORTED_MODULE_16__.Children.toArray(props.children),label=_slicedToArray(children.filter((function(child){return child.type.isLabel})),1)[0];return _slicedToArray(children.filter((function(child){return child.type.isField})),1)[0]?label?void 0:new Error("No label found for "+componentName+". Please include a Label as a child."):new Error("No form field found for "+componentName+". Please include an Input, Select, or other form field as a child.")}},inputPaddingTop=function inputPaddingTop(size){return null!=paddingTopWithLabel&&paddingTopWithLabel[size]?paddingTopWithLabel[size]:"20px"},inputPaddingBottom=function inputPaddingBottom(size){return null!=paddingBottomWithLabel&&paddingBottomWithLabel[size]?paddingBottomWithLabel[size]:"8px"},labelPaddingTop=function labelPaddingTop(size){return null!=paddingTopForLabel&&paddingTopForLabel[size]?paddingTopForLabel[size]:"6px"},FormField=function FormField(_ref){var children=_ref.children,props=_objectWithoutProperties(_ref,_excluded),iconBefore=!1,childrenArray=react__WEBPACK_IMPORTED_MODULE_16__.Children.toArray(children),field=_slicedToArray(childrenArray.filter((function(child){return child.type.isField})),1)[0],label=_slicedToArray(childrenArray.filter((function(child){return child.type.isLabel})),1)[0],valueNoLabel=!label&&field&&!!field.props.value,showLabel=(label&&!label.props.autoHide||field&&!!field.props.value)&&!valueNoLabel,id=field&&(field.props.id||field.props.name),inputSize=field&&(field.props.size||void 0),styled=childrenArray.map((function(child,i,arr){return child.type.isField&&arr[i-1]&&arr[i-1].type.isIcon&&(iconBefore=!0),child===field?react__WEBPACK_IMPORTED_MODULE_16__.cloneElement(child,{id,style:Object.assign({},child.props.style,{transitionProperty:"padding-top, padding-bottom",transitionDuration:".1s",paddingTop:showLabel?inputPaddingTop(inputSize):void 0,paddingBottom:showLabel?inputPaddingBottom(inputSize):void 0})}):child})),ml=iconBefore?"40px":"12px",styledLabel=label&&react__WEBPACK_IMPORTED_MODULE_16__.cloneElement(label,{htmlFor:label.props.htmlFor||id,fontSize:10,ml,pt:labelPaddingTop(inputSize),mb:"-20px",style:Object.assign({},label.props.style,{height:20,transitionProperty:"opacity",transitionDuration:".1s",opacity:showLabel?1:0,pointerEvents:"none",position:"relative",width:"calc(100% - "+ml+")"})});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Box__WEBPACK_IMPORTED_MODULE_18__.Z,Object.assign({},props,{children:[styledLabel,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_IconField__WEBPACK_IMPORTED_MODULE_19__.Z,{children:styled})]}))};FormField.displayName="FormField",FormField.propTypes=propTypes,FormField.displayName="FormField";const __WEBPACK_DEFAULT_EXPORT__=FormField},"../../packages/core/src/Tooltip/Tooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");var _templateObject,prop_types__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__),_Box__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../packages/core/src/Box/Box.tsx"),styled_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@5.3.5_sfoxds7t5ydpegc3knd667wn6m/node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../packages/core/src/utils/utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js"),_excluded=["children"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var TooltipContent=(0,styled_components__WEBPACK_IMPORTED_MODULE_7__.ZP)(_Box__WEBPACK_IMPORTED_MODULE_8__.Z)(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  display: inline;\n  font-size: ","px;\n  position: absolute;\n  box-sizing: border-box;\n  background: ",";\n  text-align: center;\n\n  "," "," &::after {\n    content: '';\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-width: 5px;\n    border-style: solid;\n    border-color: transparent transparent\n      ","\n      ",";\n\n    "," "," "," ",";\n  }\n\n  ","\n"])),(function(_ref){return _ref.theme.fontSizes[0]}),(function(props){return(0,_utils__WEBPACK_IMPORTED_MODULE_9__.ow)(props.bg||props.color,"base")(props)}),(function tooltipPosition(props){return props.top?{bottom:"-8px"}:{top:0}}),(function tooltipAlign(props){return props.right?{right:0}:props.center?{left:"50%",width:"auto",transform:"translateX(-50%)"}:null}),(function(props){return(0,_utils__WEBPACK_IMPORTED_MODULE_9__.ow)(props.bg||props.color,"base")(props)}),(function(props){return(0,_utils__WEBPACK_IMPORTED_MODULE_9__.ow)(props.bg||props.color,"base")(props)}),(function arrow(props){return props.top?{"transform-origin":"0 0",transform:"rotate(-45deg)"}:{"transform-origin":"0 0",transform:"rotate(-225deg)"}}),(function arrowPosition(props){return props.top?{"transform-origin":"0 0",transform:"rotate(-45deg)",bottom:"-10px"}:{"transform-origin":"0 0",transform:"rotate(-225deg)",top:"0"}}),(function arrowAlign(props){return props.left?{left:"16px","margin-left":props.top?0:"15px"}:props.center?{left:"50%","margin-left":props.top?"-7px":"7px"}:{right:"16px","margin-right":props.top?"5px":"-10px"}}),(function arrowShadow(props){return props.top?{"box-shadow":"-9.66px 9.66px 8px 0 rgba(0,0,0,0.04), -4px 4px 4px 0 rgba(0,0,0,0.08)"}:{"box-shadow":"-1.41px 1.41px 1px 0 rgba(0,0,0,0.01), -3.66px 3.66px 8px 0 rgba(0,0,0,0.04)"}}),(0,_utils__WEBPACK_IMPORTED_MODULE_9__.hO)("Tooltip")),propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_10___default().any.isRequired,bg:(0,_utils__WEBPACK_IMPORTED_MODULE_9__.nL)(),color:(0,_utils__WEBPACK_IMPORTED_MODULE_9__.nL)(),bottom:prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool,top:prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool,center:prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool,left:prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool,right:prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool,zIndex:prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default().number,prop_types__WEBPACK_IMPORTED_MODULE_10___default().string])},Tooltip=function Tooltip(_ref2){var children=_ref2.children,props=_objectWithoutProperties(_ref2,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{style:{position:"relative",zIndex:props.zIndex},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TooltipContent,Object.assign({p:2,mb:3,mt:2,boxShadowSize:"md"},props,{children}))})};Tooltip.displayName="Tooltip",Tooltip.propTypes=propTypes,Tooltip.defaultProps={borderRadius:"md",position:"bottom",color:"background.lightest",zIndex:"auto"};const __WEBPACK_DEFAULT_EXPORT__=(0,styled_components__WEBPACK_IMPORTED_MODULE_7__.Zz)(Tooltip)},"../../packages/core/src/storybook/args/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{CH:()=>fontSizes,LL:()=>borderRadii,O9:()=>colors,aJ:()=>inputArgs,eP:()=>rounded,q:()=>shadows,sq:()=>textStyles});__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.reduce.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.from.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.23.3/node_modules/core-js/modules/es.function.name.js");var _utils__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../../packages/core/src/utils/createPalette.ts"),_utils__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("../../packages/core/src/utils/attrs/borderRadiusAttrs.ts"),_utils__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("../../packages/core/src/utils/attrs/boxShadowAttrs.ts"),_utils__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("../../packages/core/src/utils/attrs/typographyAttrs.ts");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var colors=[""].concat(_toConsumableArray(_utils__WEBPACK_IMPORTED_MODULE_13__.g),["NOTVALID"]),borderRadii=[""].concat(_toConsumableArray(_utils__WEBPACK_IMPORTED_MODULE_14__.Ze),["NOTVALID"]),rounded=[""].concat(_toConsumableArray(_utils__WEBPACK_IMPORTED_MODULE_14__.YP),["NOTVALID"]),shadows=[""].concat(_toConsumableArray(_utils__WEBPACK_IMPORTED_MODULE_15__.d),["NOTVALID"]),textStyles=[""].concat(_toConsumableArray(_utils__WEBPACK_IMPORTED_MODULE_16__.F),["NOTVALID"]),inputArgs=["sm","md","lg","xl"],fontSizes=(["m","mt","mr","mb","ml","mx","my","p","pt","pr","pb","pl","px","py"].reduce((function(acc,prop){return acc[prop]={name:prop,type:{name:"string"},description:prop,table:{disable:!0}},acc}),{}),[0,1,2,3,4,5,6,7,8])}}]);