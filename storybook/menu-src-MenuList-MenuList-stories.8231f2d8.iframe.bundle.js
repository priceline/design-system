(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{"../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.function.bind.js":function(module,exports,__webpack_require__){__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/internals/export.js")({target:"Function",proto:!0},{bind:__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/internals/function-bind.js")})},"../../packages/menu/src/MenuList/MenuList.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.from.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.map.js");var _templateObject,_templateObject2,_templateObject3,react__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__),prop_types__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__),styled_components__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js"),pcln_design_system__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("../../packages/core/dist/esm/Flex/Flex.js"),pcln_design_system__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("../../packages/core/dist/esm/utils/utils.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var sizes={singleColumn:Object(styled_components__WEBPACK_IMPORTED_MODULE_14__.c)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n    & > * {\n      width: 100%;\n    }\n  "]))),twoColumns:Object(styled_components__WEBPACK_IMPORTED_MODULE_14__.c)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n    & > * {\n      width: calc(50% - ","px);\n    }\n  "])),Object(styled_system__WEBPACK_IMPORTED_MODULE_15__.z)("space.1"))},MenuContainer=Object(styled_components__WEBPACK_IMPORTED_MODULE_14__.d)(pcln_design_system__WEBPACK_IMPORTED_MODULE_16__.a)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n  font-family: ",";\n  overflow-y: scroll;\n\n  & > * {\n    margin-right: ","px;\n    margin-bottom: ","px;\n  }\n\n  ",";\n"])),Object(styled_system__WEBPACK_IMPORTED_MODULE_15__.z)("font")||"'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif",Object(styled_system__WEBPACK_IMPORTED_MODULE_15__.z)("space.1"),Object(styled_system__WEBPACK_IMPORTED_MODULE_15__.z)("space.1"),Object(pcln_design_system__WEBPACK_IMPORTED_MODULE_17__.a)(sizes));function focusNext(item){return null==item?void 0:item.nextElementSibling}function focusPrevious(item){return null==item?void 0:item.previousElementSibling}function moveFocus(currentFocus,traversalFunction){var nextFocus=traversalFunction(currentFocus);null==nextFocus||nextFocus.focus()}function MenuList(_ref){var id=_ref.id,children=_ref.children,color=_ref.color,size=_ref.size,height=_ref.height,handleClose=_ref.handleClose,listRef=Object(react__WEBPACK_IMPORTED_MODULE_12__.useRef)(null),currentItemRef=Object(react__WEBPACK_IMPORTED_MODULE_12__.useRef)(null),_useState2=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_12__.useState)(null),2),currentItemId=_useState2[0],setCurrentItemId=_useState2[1];Object(react__WEBPACK_IMPORTED_MODULE_12__.useEffect)((function(){var _currentItemRef$curre,_currentItemRef$curre2;setCurrentItemId(null===(_currentItemRef$curre=currentItemRef.current)||void 0===_currentItemRef$curre?void 0:_currentItemRef$curre.id),null===(_currentItemRef$curre2=currentItemRef.current)||void 0===_currentItemRef$curre2||_currentItemRef$curre2.focus()}),[]);var handleKeyDown=Object(react__WEBPACK_IMPORTED_MODULE_12__.useCallback)((function(evt){var _list$ownerDocument,list=listRef.current,key=evt.key,currentFocus=null==list||null===(_list$ownerDocument=list.ownerDocument)||void 0===_list$ownerDocument?void 0:_list$ownerDocument.activeElement;"ArrowDown"===key?(evt.preventDefault(),moveFocus(currentFocus,focusNext)):"ArrowUp"===key&&(evt.preventDefault(),moveFocus(currentFocus,focusPrevious))}),[]);return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(MenuContainer,{id:id,ref:listRef,role:"listbox","aria-activedescendant":currentItemId,flexWrap:"wrap",height:height,size:size,p:2,pr:1,pb:1,onKeyDown:handleKeyDown,children:react__WEBPACK_IMPORTED_MODULE_12___default.a.Children.map(children,(function(child,index){return react__WEBPACK_IMPORTED_MODULE_12___default.a.cloneElement(child,{id:"option"+index,ref:child.props.selected?currentItemRef:null,color:child.props.color||color,handleClose:handleClose})}))})}MenuList.displayName="MenuList",MenuList.displayName="MenuList",MenuList.propTypes={id:prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.string,children:prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.node,color:prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.string,size:prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.string,height:prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.number,handleClose:prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.func},MenuList.defaultProps={size:"singleColumn"},MenuList.__docgenInfo={description:"",methods:[],displayName:"MenuList",props:{size:{defaultValue:{value:"'singleColumn'",computed:!1},type:{name:"string"},required:!1,description:""},id:{type:{name:"string"},required:!1,description:""},children:{type:{name:"node"},required:!1,description:""},color:{type:{name:"string"},required:!1,description:""},height:{type:{name:"number"},required:!1,description:""},handleClose:{type:{name:"func"},required:!1,description:""}}},__webpack_exports__.a=MenuList,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/menu/src/MenuList/MenuList.js"]={name:"MenuList",docgenInfo:MenuList.__docgenInfo,path:"../../packages/menu/src/MenuList/MenuList.js"})},"../../packages/menu/src/MenuList/MenuList.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"CurrencyMenuListWithArgs",(function(){return CurrencyMenuListWithArgs})),__webpack_require__.d(__webpack_exports__,"CurrencyMenuListWithSelection",(function(){return MenuList_stories_CurrencyMenuListWithSelection}));__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.map.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.from.js");var react=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),Text=__webpack_require__("../../packages/core/dist/esm/Text/Text.js"),MenuList=__webpack_require__("../../packages/menu/src/MenuList/MenuList.js"),MenuItem=__webpack_require__("../../packages/menu/src/MenuItem/MenuItem.js"),Menu=__webpack_require__("../../packages/menu/test/mocks/Menu.js"),storybook_args=(__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.join.js"),__webpack_require__("../../packages/core/storybook/args/index.js")),argTypes={id:{name:"id",type:{name:"string",required:!1},description:"DOM id",table:{defaultValue:{summary:void 0}}},color:{name:"color",type:{name:"string",required:!1},description:"Palette color to use",table:{type:{summary:"Colors",detail:"- "+storybook_args.a.join("\n- ")},defaultValue:{summary:"primary"}},control:{type:"select",options:storybook_args.a}},size:{name:"size",type:{name:"string",required:!1},description:"Column layout",table:{defaultValue:{summary:"singleColumn"}},control:{type:"select",options:["singleColumn","twoColumns"]}},height:{name:"height",type:{name:"string",required:!1},description:"height of open menu",table:{defaultValue:{summary:void 0}}},handleClose:{name:"handleClose",type:{name:"function",required:!1},description:"Handle close",table:{defaultValue:{summary:void 0}},action:"handleClose from <MenuList>"}},jsx_runtime=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_exports__.default={title:"pcln-menu / MenuList",component:MenuList.a,subcomponents:{MenuItem:MenuItem.a},args:{size:"singleColumn"},argTypes:argTypes,parameters:{docs:{description:{component:"some component **markdown**"}}}};var MenuList_stories_CurrencyItems=function CurrencyItems(_ref){var currencyCode=_ref.currencyCode;return Menu.a.map((function(currency,index){var selected=currencyCode===currency.code;return Object(jsx_runtime.jsxs)(MenuItem.a,{selected:selected,children:[Object(jsx_runtime.jsx)(Text.a,{regular:!0,width:32,textAlign:"center",mr:3,children:currency.symbol}),Object(jsx_runtime.jsx)(Text.a,{regular:!0,children:currency.label})]},index)}))},MenuList_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(MenuList.a,Object.assign({},args))};MenuList_stories_Template.displayName="Template";var CurrencyMenuListWithArgs=MenuList_stories_Template.bind({});CurrencyMenuListWithArgs.args={children:Object(jsx_runtime.jsx)(MenuList_stories_CurrencyItems,{})};var MenuList_stories_CurrencyMenuListWithSelection=function CurrencyMenuListWithSelection(){var _useState2=_slicedToArray(Object(react.useState)("USD"),2),currencyCode=_useState2[0],setCurrencyCode=_useState2[1];return Object(jsx_runtime.jsx)(MenuList.a,{children:Menu.a.map((function(currency,index){var selected=currencyCode===currency.code;return Object(jsx_runtime.jsxs)(MenuItem.a,{selected:selected,onClick:function onClick(){return setCurrencyCode(currency.code)},children:[Object(jsx_runtime.jsx)(Text.a,{regular:!0,width:32,textAlign:"center",mr:3,children:currency.symbol}),Object(jsx_runtime.jsx)(Text.a,{regular:!0,children:currency.label})]},index)}))})};MenuList_stories_CurrencyMenuListWithSelection.displayName="CurrencyMenuListWithSelection",CurrencyMenuListWithArgs.parameters=Object.assign({storySource:{source:"(args) => <MenuList {...args} />"}},CurrencyMenuListWithArgs.parameters),MenuList_stories_CurrencyMenuListWithSelection.parameters=Object.assign({storySource:{source:"() => {\n  const [currencyCode, setCurrencyCode] = useState('USD')\n\n  return (\n    <MenuList>\n      {currencies.map((currency, index) => {\n        const selected = currencyCode === currency.code\n        const onClick = () => setCurrencyCode(currency.code)\n        return (\n          <MenuItem key={index} selected={selected} onClick={onClick}>\n            <Text regular width={32} textAlign='center' mr={3}>\n              {currency.symbol}\n            </Text>\n            <Text regular>{currency.label}</Text>\n          </MenuItem>\n        )\n      })}\n    </MenuList>\n  )\n}"}},MenuList_stories_CurrencyMenuListWithSelection.parameters),MenuList_stories_CurrencyMenuListWithSelection.__docgenInfo={description:"",methods:[],displayName:"CurrencyMenuListWithSelection"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/menu/src/MenuList/MenuList.stories.js"]={name:"CurrencyMenuListWithSelection",docgenInfo:MenuList_stories_CurrencyMenuListWithSelection.__docgenInfo,path:"../../packages/menu/src/MenuList/MenuList.stories.js"})},"../../packages/menu/test/mocks/Menu.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return listItems})),__webpack_require__.d(__webpack_exports__,"a",(function(){return currencies}));var listItems=[{label:"List Item 1",value:"one"},{label:"List Item 2",value:"two"},{label:"List Item 3",value:"three"},{label:"List Item 4",value:"four"}],currencies=[{code:"USD",label:"U.S. Dollar",symbol:"$"},{code:"AUS",label:"Austrailian Dollar",symbol:"AU$"},{code:"BZR",label:"Brazilian Real",symbol:"R$"},{code:"CAD",label:"Canadian Dollar",symbol:"C$"},{code:"GBP",label:"Pound Sterling",symbol:"£"},{code:"CNY",label:"Chinese Yuan Renminbi",symbol:"¥"},{code:"DKK",label:"Danish Krone",symbol:"kr"},{code:"AED",label:"Emirati Dirham",symbol:"AED"},{code:"EUR",label:"Euro",symbol:"€"},{code:"HKD",label:"Hong Kong Dollar",symbol:"HK$"}]}}]);