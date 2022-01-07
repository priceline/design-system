(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"../../packages/core/src/Box/Box.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.assign.js");var _templateObject,styled_components_browser_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),prop_types=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),index_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js"),utils=__webpack_require__("../../packages/core/src/utils/utils.js"),theme=__webpack_require__("../../packages/core/src/theme/theme.js");var Box=styled_components_browser_esm.d.div(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  ","\n  "," "," "," ","\n  "," "," "," "," \n  "," "," \n  ","\n  ","\n"])),Object(utils.b)("Box"),index_esm.f,index_esm.l,index_esm.p,index_esm.q,index_esm.r,index_esm.s,index_esm.v,index_esm.w,index_esm.x,index_esm.B,(function boxShadow(props){var boxShadowTheme=props.theme.boxShadows||theme.a;return{sm:{"box-shadow":boxShadowTheme[0]},md:{"box-shadow":boxShadowTheme[1]},lg:{"box-shadow":boxShadowTheme[2]},xl:{"box-shadow":boxShadowTheme[3]}}[props.boxShadowSize]}),utils.d);Box.displayName="Box",Box.propTypes=Object.assign({},index_esm.f.propTypes,index_esm.p.propTypes,index_esm.q.propTypes,index_esm.r.propTypes,index_esm.s.propTypes,index_esm.v.propTypes,index_esm.w.propTypes,index_esm.x.propTypes,index_esm.B.propTypes,{bg:Object(utils.f)("color"),boxShadowSize:prop_types_default.a.oneOf(["sm","md","lg","xl"]),color:Object(utils.e)()});__webpack_exports__.a=Box},"../../packages/core/src/Flex/Flex.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.assign.js");var _templateObject,styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js"),_Box__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../packages/core/src/Box/Box.js"),_utils__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../packages/core/src/utils/utils.js"),_excluded=["wrap","align","justify"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Flex=Object(styled_components__WEBPACK_IMPORTED_MODULE_5__.d)(_Box__WEBPACK_IMPORTED_MODULE_7__.a).attrs((function(_ref){var wrap=_ref.wrap,align=_ref.align,justify=_ref.justify,props=_objectWithoutProperties(_ref,_excluded);return Object.assign({flexWrap:wrap?"wrap":void 0,alignItems:align,justifyContent:justify},props)}))(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  display: flex;\n  ","\n  "," ","\n  ","\n  ","\n"])),Object(_utils__WEBPACK_IMPORTED_MODULE_8__.b)("Flex"),styled_system__WEBPACK_IMPORTED_MODULE_6__.a,styled_system__WEBPACK_IMPORTED_MODULE_6__.m,styled_system__WEBPACK_IMPORTED_MODULE_6__.g,styled_system__WEBPACK_IMPORTED_MODULE_6__.h);Flex.propTypes=Object.assign({},styled_system__WEBPACK_IMPORTED_MODULE_6__.w.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_6__.B.propTypes,{color:Object(_utils__WEBPACK_IMPORTED_MODULE_8__.e)(),bg:Object(_utils__WEBPACK_IMPORTED_MODULE_8__.f)("color")},styled_system__WEBPACK_IMPORTED_MODULE_6__.a.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_6__.m.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_6__.h.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_6__.g.propTypes,{wrap:Object(_utils__WEBPACK_IMPORTED_MODULE_8__.f)("flexWrap"),align:Object(_utils__WEBPACK_IMPORTED_MODULE_8__.f)("alignItems"),justify:Object(_utils__WEBPACK_IMPORTED_MODULE_8__.f)("justifyContent")}),Flex.displayName="Flex",__webpack_exports__.a=Flex},"../../packages/core/src/Flex/Flex.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Basic",(function(){return Basic})),__webpack_require__.d(__webpack_exports__,"Wrap",(function(){return Wrap})),__webpack_require__.d(__webpack_exports__,"Justify",(function(){return Justify})),__webpack_require__.d(__webpack_exports__,"DeprecatedBgShim",(function(){return DeprecatedBgShim}));__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/src/Flex/Flex.js"),___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/src/Box/Box.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Flex",component:___WEBPACK_IMPORTED_MODULE_2__.a};var Basic=function Basic(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(___WEBPACK_IMPORTED_MODULE_2__.a,{align:"center",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.a,{width:.5,p:3,color:"white",bg:"blue",children:"Flex"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.a,{width:.5,p:1,color:"white",bg:"green",children:"Box"})]})};Basic.displayName="Basic";var Wrap=function Wrap(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(___WEBPACK_IMPORTED_MODULE_2__.a,{wrap:"wrap",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.a,{width:[1,.5],p:3,color:"white",bg:"blue",children:"Flex"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.a,{width:[1,.5],p:1,color:"white",bg:"green",children:"Wrap"})]})};Wrap.displayName="Wrap";var Justify=function Justify(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(___WEBPACK_IMPORTED_MODULE_2__.a,{justifyContent:"space-around",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.a,{width:1/3,p:2,color:"white",bg:"blue",children:"Flex"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.a,{width:1/3,p:2,color:"white",bg:"green",children:"Justify"})]})};Justify.displayName="Justify";var DeprecatedBgShim=function DeprecatedBgShim(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(___WEBPACK_IMPORTED_MODULE_2__.a,{bg:"blue",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.a,{width:.5,p:3,color:"white",bg:"blue",children:"Flex"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.a,{width:.5,p:1,color:"white",bg:"green",children:"Box"})]})};DeprecatedBgShim.displayName="DeprecatedBgShim",DeprecatedBgShim.story={name:"deprecated bg shim"},Basic.parameters=Object.assign({storySource:{source:"() => (\n  <Flex align='center'>\n    <Box width={1 / 2} p={3} color='white' bg='blue'>\n      Flex\n    </Box>\n    <Box width={1 / 2} p={1} color='white' bg='green'>\n      Box\n    </Box>\n  </Flex>\n)"}},Basic.parameters),Wrap.parameters=Object.assign({storySource:{source:"() => (\n  <Flex wrap='wrap'>\n    <Box width={[1, 1 / 2]} p={3} color='white' bg='blue'>\n      Flex\n    </Box>\n    <Box width={[1, 1 / 2]} p={1} color='white' bg='green'>\n      Wrap\n    </Box>\n  </Flex>\n)"}},Wrap.parameters),Justify.parameters=Object.assign({storySource:{source:"() => (\n  <Flex justifyContent='space-around'>\n    <Box width={1 / 3} p={2} color='white' bg='blue'>\n      Flex\n    </Box>\n    <Box width={1 / 3} p={2} color='white' bg='green'>\n      Justify\n    </Box>\n  </Flex>\n)"}},Justify.parameters),DeprecatedBgShim.parameters=Object.assign({storySource:{source:"() => (\n  <Flex bg='blue'>\n    <Box width={1 / 2} p={3} color='white' bg='blue'>\n      Flex\n    </Box>\n    <Box width={1 / 2} p={1} color='white' bg='green'>\n      Box\n    </Box>\n  </Flex>\n)"}},DeprecatedBgShim.parameters),Basic.__docgenInfo={description:"",methods:[],displayName:"Basic"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/src/Flex/Flex.stories.js"]={name:"Basic",docgenInfo:Basic.__docgenInfo,path:"../../packages/core/src/Flex/Flex.stories.js"}),Wrap.__docgenInfo={description:"",methods:[],displayName:"Wrap"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/src/Flex/Flex.stories.js"]={name:"Wrap",docgenInfo:Wrap.__docgenInfo,path:"../../packages/core/src/Flex/Flex.stories.js"}),Justify.__docgenInfo={description:"",methods:[],displayName:"Justify"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/src/Flex/Flex.stories.js"]={name:"Justify",docgenInfo:Justify.__docgenInfo,path:"../../packages/core/src/Flex/Flex.stories.js"}),DeprecatedBgShim.__docgenInfo={description:"",methods:[],displayName:"DeprecatedBgShim"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/src/Flex/Flex.stories.js"]={name:"DeprecatedBgShim",docgenInfo:DeprecatedBgShim.__docgenInfo,path:"../../packages/core/src/Flex/Flex.stories.js"})}}]);