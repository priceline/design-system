(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"../../packages/core/src/BackgroundImage/BackgroundImage.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.keys.js");var _templateObject,_templateObject2,_templateObject3,styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),styled_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/core/src/utils/utils.js");function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var variations={parallax:Object(styled_components__WEBPACK_IMPORTED_MODULE_3__.c)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n    background-attachment: fixed;\n  "]))),static:Object(styled_components__WEBPACK_IMPORTED_MODULE_3__.c)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n    background-attachment: scroll;\n  "])))},BackgroundImage=styled_components__WEBPACK_IMPORTED_MODULE_3__.d.div(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-color: ",";\n  ","\n  "," "," ",";\n"])),Object(_utils__WEBPACK_IMPORTED_MODULE_6__.g)("border.light"),Object(_utils__WEBPACK_IMPORTED_MODULE_6__.b)("BackgroundImage",variations),(function image(props){return props.image?{backgroundImage:"url("+props.image+")"}:null}),styled_system__WEBPACK_IMPORTED_MODULE_5__.l,styled_system__WEBPACK_IMPORTED_MODULE_5__.B);BackgroundImage.defaultProps={variation:"static"},BackgroundImage.propTypes=Object.assign({},styled_system__WEBPACK_IMPORTED_MODULE_5__.l.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_5__.B.propTypes,{image:prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,variation:prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(Object.keys(variations))}),BackgroundImage.displayName="BackgroundImage",__webpack_exports__.a=BackgroundImage},"../../packages/core/src/BlockLink/BlockLink.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ContainingBackgroundImage",(function(){return BlockLink_stories_ContainingBackgroundImage})),__webpack_require__.d(__webpack_exports__,"ForwardRefs",(function(){return BlockLink_stories_ForwardRefs})),__webpack_require__.d(__webpack_exports__,"CompositionWithoutContainer",(function(){return BlockLink_stories_CompositionWithoutContainer}));__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.slice.js");var _templateObject,styled_components_browser_esm=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),Link=__webpack_require__("../../packages/core/src/Link/Link.js");var BlockLink=Object(styled_components_browser_esm.d)(Link.a)(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  display: block;\n  color: inherit;\n  text-decoration: none;\n"])));BlockLink.displayName="BlockLink",BlockLink.propTypes=Link.a.propTypes;var BlockLink_BlockLink=BlockLink,Flex=__webpack_require__("../../packages/core/src/Flex/Flex.js"),BackgroundImage=__webpack_require__("../../packages/core/src/BackgroundImage/BackgroundImage.js"),Box=__webpack_require__("../../packages/core/src/Box/Box.js"),Text=__webpack_require__("../../packages/core/src/Text/Text.js"),Button=__webpack_require__("../../packages/core/src/Button/Button.js"),ForwardRefsDemo=__webpack_require__("../../packages/core/storybook/utils/ForwardRefsDemo.js"),jsx_runtime=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js"),BlockLink_stories_ContainingBackgroundImage=(__webpack_exports__.default={title:"BlockLink",component:BlockLink_BlockLink},function ContainingBackgroundImage(){return Object(jsx_runtime.jsx)(Flex.a,{justifyContent:"center",alignItems:"center",color:"white",children:Object(jsx_runtime.jsx)(BlockLink_BlockLink,{href:"https://www.priceline.com",target:"_blank",children:Object(jsx_runtime.jsx)(BackgroundImage.a,{image:"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=aee8a50c86478d935556d865624506e4",width:"640px",children:Object(jsx_runtime.jsx)(Box.a,{p:4,children:Object(jsx_runtime.jsx)(Text.a,{textAlign:"center",children:"Click to open priceline.com in new tab!"})})})})})});BlockLink_stories_ContainingBackgroundImage.displayName="ContainingBackgroundImage",BlockLink_stories_ContainingBackgroundImage.story={name:"containing BackgroundImage"};var BlockLink_stories_ForwardRefs=function ForwardRefs(){return Object(jsx_runtime.jsx)(ForwardRefsDemo.a,{refChild:function refChild(dsRef){return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(BlockLink_BlockLink,{color:"text.dark",ref:dsRef,children:"I am a link!"}),Object(jsx_runtime.jsx)("br",{}),Object(jsx_runtime.jsx)(Button.b,{color:"error",onClick:function onClick(){return dsRef.current.innerHTML="Bacon!"},mt:4,children:"Click to update link text via ref"})]})}})};BlockLink_stories_ForwardRefs.displayName="ForwardRefs",BlockLink_stories_ForwardRefs.story={name:"Forward refs"};var BlockLink_stories_CompositionWithoutContainer=function CompositionWithoutContainer(){return Object(jsx_runtime.jsx)(Flex.a,{justifyContent:"center",alignItems:"center",color:"purple",children:Object(jsx_runtime.jsx)(BlockLink_BlockLink,{href:"https://www.google.com",children:Object(jsx_runtime.jsx)(Text.a,{fontSize:2,bold:!0,textAlign:"center",children:"Click to go to google.com!"})})})};BlockLink_stories_CompositionWithoutContainer.displayName="CompositionWithoutContainer",BlockLink_stories_CompositionWithoutContainer.story={name:"composition without container"},BlockLink_stories_ContainingBackgroundImage.parameters=Object.assign({storySource:{source:"() => (\n  <Flex justifyContent='center' alignItems='center' color='white'>\n    <BlockLink href='https://www.priceline.com' target='_blank'>\n      <BackgroundImage image={image} width='640px'>\n        <Box p={4}>\n          <Text textAlign='center'>Click to open priceline.com in new tab!</Text>\n        </Box>\n      </BackgroundImage>\n    </BlockLink>\n  </Flex>\n)"}},BlockLink_stories_ContainingBackgroundImage.parameters),BlockLink_stories_ForwardRefs.parameters=Object.assign({storySource:{source:"() => (\n  <ForwardRefDemo\n    refChild={(dsRef) => (\n      <>\n        <BlockLink color='text.dark' ref={dsRef}>\n          I am a link!\n        </BlockLink>\n        <br />\n        <Button color='error' onClick={() => (dsRef.current.innerHTML = 'Bacon!')} mt={4}>\n          Click to update link text via ref\n        </Button>\n      </>\n    )}\n  />\n)"}},BlockLink_stories_ForwardRefs.parameters),BlockLink_stories_CompositionWithoutContainer.parameters=Object.assign({storySource:{source:"() => (\n  <Flex justifyContent='center' alignItems='center' color='purple'>\n    <BlockLink href='https://www.google.com'>\n      <Text fontSize={2} bold textAlign='center'>\n        Click to go to google.com!\n      </Text>\n    </BlockLink>\n  </Flex>\n)"}},BlockLink_stories_CompositionWithoutContainer.parameters),BlockLink_stories_ContainingBackgroundImage.__docgenInfo={description:"",methods:[],displayName:"ContainingBackgroundImage"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/src/BlockLink/BlockLink.stories.js"]={name:"ContainingBackgroundImage",docgenInfo:BlockLink_stories_ContainingBackgroundImage.__docgenInfo,path:"../../packages/core/src/BlockLink/BlockLink.stories.js"}),BlockLink_stories_ForwardRefs.__docgenInfo={description:"",methods:[],displayName:"ForwardRefs"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/src/BlockLink/BlockLink.stories.js"]={name:"ForwardRefs",docgenInfo:BlockLink_stories_ForwardRefs.__docgenInfo,path:"../../packages/core/src/BlockLink/BlockLink.stories.js"}),BlockLink_stories_CompositionWithoutContainer.__docgenInfo={description:"",methods:[],displayName:"CompositionWithoutContainer"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/src/BlockLink/BlockLink.stories.js"]={name:"CompositionWithoutContainer",docgenInfo:BlockLink_stories_CompositionWithoutContainer.__docgenInfo,path:"../../packages/core/src/BlockLink/BlockLink.stories.js"})},"../../packages/core/src/Button/Button.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return buttonStyles}));__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.string.bold.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.keys.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_templateObject11,styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),styled_system__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../packages/core/src/utils/utils.js");function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var sizes={small:Object(styled_components__WEBPACK_IMPORTED_MODULE_4__.c)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n    font-size: ","px;\n    padding: 7px 12px;\n  "])),Object(styled_system__WEBPACK_IMPORTED_MODULE_6__.z)("fontSizes.0")),medium:Object(styled_components__WEBPACK_IMPORTED_MODULE_4__.c)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n    font-size: ","px;\n    padding: 9.5px 18px;\n  "])),Object(styled_system__WEBPACK_IMPORTED_MODULE_6__.z)("fontSizes.1")),large:Object(styled_components__WEBPACK_IMPORTED_MODULE_4__.c)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n    font-size: ","px;\n    padding: 12px 22px;\n  "])),Object(styled_system__WEBPACK_IMPORTED_MODULE_6__.z)("fontSizes.2"))},variations={fill:Object(styled_components__WEBPACK_IMPORTED_MODULE_4__.c)(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["\n    background-color: ",";\n    color: ",";\n\n    &:hover {\n      background-color: ",";\n      ","\n    }\n    &:focus {\n      outline: ",";\n      box-shadow: ",";\n    }\n  "])),(function(props){return Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)(props.disabled?"light":"base")(props)}),(function(props){return Object(_utils__WEBPACK_IMPORTED_MODULE_7__.h)(props.disabled?"light":"base")(props)}),(function(props){return Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)(props.disabled?"light":"dark")(props)}),(function(props){return props.disabled?"":"color: "+Object(_utils__WEBPACK_IMPORTED_MODULE_7__.h)("dark")(props)+";"}),(function(props){return"0px solid "+Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)(props.disabled?"":"dark")(props)}),(function(props){return" 0 0 0 2px  "+Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)(props.disabled?"":"dark")(props)})),link:Object(styled_components__WEBPACK_IMPORTED_MODULE_4__.c)(_templateObject5||(_templateObject5=_taggedTemplateLiteralLoose(["\n    -webkit-font-smoothing: inherit;\n    font-weight: ",";\n    color: ",";\n    line-height: ",";\n    vertical-align: inherit;\n    padding: 0;\n    background-color: transparent;\n    &:hover {\n      color: ",";\n      text-decoration: underline;\n    }\n  "])),(function(props){return props.theme.fontWeights.medium}),Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)("base"),(function(props){return props.theme.lineHeights.standard}),Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)("dark")),outline:Object(styled_components__WEBPACK_IMPORTED_MODULE_4__.c)(_templateObject6||(_templateObject6=_taggedTemplateLiteralLoose(["\n    color: ",";\n    box-shadow: inset 0 0 0 2px ",";\n    background-color: transparent;\n\n    &:hover {\n      background-color: transparent;\n      ","\n    }\n  "])),(function(props){return Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)(props.disabled?"light":"base")(props)}),(function(props){return Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)(props.disabled?"light":"base")(props)}),(function(props){return props.disabled?"":"\n      color: "+Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)("dark")(props)+";\n      box-shadow: inset 0 0 0 2px "+Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)("dark")(props)+";\n    "})),plain:Object(styled_components__WEBPACK_IMPORTED_MODULE_4__.c)(_templateObject7||(_templateObject7=_taggedTemplateLiteralLoose(["\n    background-color: transparent;\n    color: ",";\n    &:hover {\n      background-color: ",";\n      color: ",";\n    }\n    &:focus {\n      outline: 0px solid ",";\n      box-shadow: 0 0 0 2px ",";\n    }\n  "])),Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)("base"),Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)("background.light"),Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)("dark"),Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)("dark"),Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)("dark")),subtle:Object(styled_components__WEBPACK_IMPORTED_MODULE_4__.c)(_templateObject8||(_templateObject8=_taggedTemplateLiteralLoose(["\n    background-color: ",";\n    color: ",";\n    &:hover {\n      background-color: ",";\n      color: ",";\n    }\n    &:focus {\n      outline: 0px solid ",";\n      box-shadow: 0 0 0 2px ",";\n    }\n  "])),Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)("background.base"),Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)("base"),Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)("background.light"),Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)("dark"),Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)("dark"),Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)("dark")),lightFill:Object(styled_components__WEBPACK_IMPORTED_MODULE_4__.c)(_templateObject9||(_templateObject9=_taggedTemplateLiteralLoose(["\n    background-color: ",";\n    color: ",";\n    &:hover {\n      background-color: ",";\n      color: ",";\n    }\n    &:focus {\n      outline: ",";\n      box-shadow: ",";\n    }\n  "])),Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)("light"),Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)("base"),Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)("light"),Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)("dark"),(function(props){return"0px solid "+Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)(props.disabled?"":"dark")(props)}),(function(props){return" 0 0 0 2px  "+Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)(props.disabled?"":"dark")(props)}))},buttonStyles=Object(styled_components__WEBPACK_IMPORTED_MODULE_4__.c)(_templateObject10||(_templateObject10=_taggedTemplateLiteralLoose(["\n  -webkit-font-smoothing: antialiased;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  text-decoration: none;\n  font-family: inherit;\n  font-weight: ",";\n  line-height: 1.5;\n  cursor: ",";\n  border-radius: ",";\n  border-width: 0;\n  border-style: solid;\n\n  ",";\n  ",";\n  ",";\n  ",";\n\n  &:disabled {\n    cursor: not-allowed;\n    color: ",";\n    background-color: ",";\n  }\n"])),(function(props){return props.theme.fontWeights.bold}),(function(props){return props.disabled?"default":"pointer"}),(function(props){return props.theme.radius}),(function(_ref){var theme=_ref.theme;return Object(_utils__WEBPACK_IMPORTED_MODULE_7__.a)(sizes,"medium",theme.mediaQueries)}),Object(_utils__WEBPACK_IMPORTED_MODULE_7__.b)("Button",variations),styled_system__WEBPACK_IMPORTED_MODULE_6__.B,styled_system__WEBPACK_IMPORTED_MODULE_6__.w,Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)("text.light"),Object(_utils__WEBPACK_IMPORTED_MODULE_7__.g)("background.base")),Button=styled_components__WEBPACK_IMPORTED_MODULE_4__.d.button.attrs((function(_ref2){var width=_ref2.width,fullWidth=_ref2.fullWidth,title=_ref2.title;return{width:fullWidth?1:width,"aria-label":_ref2["aria-label"]||title}}))(_templateObject11||(_templateObject11=_taggedTemplateLiteralLoose(["\n  ","\n"])),buttonStyles);Button.propTypes=Object.assign({size:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(["small","medium","large"])},styled_system__WEBPACK_IMPORTED_MODULE_6__.B.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_6__.w.propTypes,{fullWidth:Object(_utils__WEBPACK_IMPORTED_MODULE_7__.f)("width"),variation:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(Object.keys(variations)),color:Object(_utils__WEBPACK_IMPORTED_MODULE_7__.e)(),disabled:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool}),Button.defaultProps={color:"primary",size:"medium",variation:"fill"},Button.displayName="Button",__webpack_exports__.b=Button},"../../packages/core/src/Flex/Flex.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.assign.js");var _templateObject,styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js"),_Box__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../packages/core/src/Box/Box.js"),_utils__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../packages/core/src/utils/utils.js"),_excluded=["wrap","align","justify"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Flex=Object(styled_components__WEBPACK_IMPORTED_MODULE_5__.d)(_Box__WEBPACK_IMPORTED_MODULE_7__.a).attrs((function(_ref){var wrap=_ref.wrap,align=_ref.align,justify=_ref.justify,props=_objectWithoutProperties(_ref,_excluded);return Object.assign({flexWrap:wrap?"wrap":void 0,alignItems:align,justifyContent:justify},props)}))(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  display: flex;\n  ","\n  "," ","\n  ","\n  ","\n"])),Object(_utils__WEBPACK_IMPORTED_MODULE_8__.b)("Flex"),styled_system__WEBPACK_IMPORTED_MODULE_6__.a,styled_system__WEBPACK_IMPORTED_MODULE_6__.m,styled_system__WEBPACK_IMPORTED_MODULE_6__.g,styled_system__WEBPACK_IMPORTED_MODULE_6__.h);Flex.propTypes=Object.assign({},styled_system__WEBPACK_IMPORTED_MODULE_6__.w.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_6__.B.propTypes,{color:Object(_utils__WEBPACK_IMPORTED_MODULE_8__.e)(),bg:Object(_utils__WEBPACK_IMPORTED_MODULE_8__.f)("color")},styled_system__WEBPACK_IMPORTED_MODULE_6__.a.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_6__.m.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_6__.h.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_6__.g.propTypes,{wrap:Object(_utils__WEBPACK_IMPORTED_MODULE_8__.f)("flexWrap"),align:Object(_utils__WEBPACK_IMPORTED_MODULE_8__.f)("alignItems"),justify:Object(_utils__WEBPACK_IMPORTED_MODULE_8__.f)("justifyContent")}),Flex.displayName="Flex",__webpack_exports__.a=Flex},"../../packages/core/src/Link/Link.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.keys.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js"),_Button__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../packages/core/src/Button/Button.js"),_utils__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../packages/core/src/utils/utils.js"),_excluded=["target"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var variations={fill:Object(styled_components__WEBPACK_IMPORTED_MODULE_6__.c)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n    &:hover {\n      text-decoration: none;\n    }\n\n    ","\n  "])),_Button__WEBPACK_IMPORTED_MODULE_8__.a),link:Object(styled_components__WEBPACK_IMPORTED_MODULE_6__.c)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n    cursor: pointer;\n    text-decoration: none;\n    color: ",";\n\n    &:hover {\n      color: ",";\n      text-decoration: underline;\n    }\n  "])),Object(_utils__WEBPACK_IMPORTED_MODULE_9__.g)("base"),Object(_utils__WEBPACK_IMPORTED_MODULE_9__.g)("dark")),outline:Object(styled_components__WEBPACK_IMPORTED_MODULE_6__.c)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n    &:hover {\n      text-decoration: none;\n    }\n\n    ","\n  "])),_Button__WEBPACK_IMPORTED_MODULE_8__.a)},Link=styled_components__WEBPACK_IMPORTED_MODULE_6__.d.a.attrs((function(_ref){var target=_ref.target,props=_objectWithoutProperties(_ref,_excluded);return Object.assign({rel:"_blank"===target?"noopener":null,target:target},props)}))(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["\n  ","\n  "," ",";\n"])),Object(_utils__WEBPACK_IMPORTED_MODULE_9__.b)("Link",variations),styled_system__WEBPACK_IMPORTED_MODULE_7__.B,styled_system__WEBPACK_IMPORTED_MODULE_7__.w);Link.displayName="Link",Link.defaultProps={color:"primary",variation:"link",size:"medium"},Link.propTypes={color:Object(_utils__WEBPACK_IMPORTED_MODULE_9__.e)(),variation:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(Object.keys(variations))},__webpack_exports__.a=Link},"../../packages/core/src/Text/Text.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.string.bold.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.object.assign.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-components@4.4.1_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),prop_types__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__),styled_system__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../common/temp/node_modules/.pnpm/styled-system@4.2.4/node_modules/styled-system/dist/index.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../packages/core/src/utils/utils.js"),_excluded=["align"],_excluded2=["align"],_excluded3=["align"],_excluded4=["align"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var textProps=Object(styled_components__WEBPACK_IMPORTED_MODULE_6__.c)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n  ","\n  color: ",";\n  ","\n\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  ","\n  ","\n  ","\n\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"])),Object(_utils__WEBPACK_IMPORTED_MODULE_9__.b)("Text"),Object(_utils__WEBPACK_IMPORTED_MODULE_9__.g)("base"),(function(props){return props.bg?"background-color: "+Object(_utils__WEBPACK_IMPORTED_MODULE_9__.g)(props.bg,"base")(props)+";":""}),styled_system__WEBPACK_IMPORTED_MODULE_8__.f,styled_system__WEBPACK_IMPORTED_MODULE_8__.l,styled_system__WEBPACK_IMPORTED_MODULE_8__.p,styled_system__WEBPACK_IMPORTED_MODULE_8__.q,styled_system__WEBPACK_IMPORTED_MODULE_8__.r,styled_system__WEBPACK_IMPORTED_MODULE_8__.s,styled_system__WEBPACK_IMPORTED_MODULE_8__.t,styled_system__WEBPACK_IMPORTED_MODULE_8__.w,styled_system__WEBPACK_IMPORTED_MODULE_8__.B,(function caps(props){return props.caps?{textTransform:"uppercase",letterSpacing:Object(styled_system__WEBPACK_IMPORTED_MODULE_8__.z)("letterSpacings.caps")(props)}:null}),(function regular(props){return props.regular?{fontWeight:props.theme.regular}:null}),(function bold(props){return props.bold?{fontWeight:props.theme.bold}:null}),styled_system__WEBPACK_IMPORTED_MODULE_8__.i,styled_system__WEBPACK_IMPORTED_MODULE_8__.j,styled_system__WEBPACK_IMPORTED_MODULE_8__.k,styled_system__WEBPACK_IMPORTED_MODULE_8__.o,styled_system__WEBPACK_IMPORTED_MODULE_8__.x,(function textDecoration(props){return props.textDecoration?"text-decoration: "+props.textDecoration+";":""}),(function textShadow(props){var textShadowSize=props.textShadowSize||"md";return props.enableTextShadow?{textShadow:props.theme.textShadows[textShadowSize]}:null}),styled_system__WEBPACK_IMPORTED_MODULE_8__.y,styled_system__WEBPACK_IMPORTED_MODULE_8__.C),Text=styled_components__WEBPACK_IMPORTED_MODULE_6__.d.div.attrs((function(_ref){var align=_ref.align,props=_objectWithoutProperties(_ref,_excluded);return Object.assign({textAlign:align},props)}))(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n  ","\n"])),textProps),Span=styled_components__WEBPACK_IMPORTED_MODULE_6__.d.span.attrs((function(_ref2){var align=_ref2.align,props=_objectWithoutProperties(_ref2,_excluded2);return Object.assign({textAlign:align},props)}))(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n  ","\n"])),textProps),Paragraph=styled_components__WEBPACK_IMPORTED_MODULE_6__.d.p.attrs((function(_ref3){var align=_ref3.align,props=_objectWithoutProperties(_ref3,_excluded3);return Object.assign({textAlign:align},props)}))(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["\n  ","\n"])),textProps),Strike=styled_components__WEBPACK_IMPORTED_MODULE_6__.d.s.attrs((function(_ref4){var align=_ref4.align,props=_objectWithoutProperties(_ref4,_excluded4);return Object.assign({textAlign:align},props)}))(_templateObject5||(_templateObject5=_taggedTemplateLiteralLoose(["\n  ","\n"])),textProps);Text.displayName="Text",Text.propTypes=Object.assign({},styled_system__WEBPACK_IMPORTED_MODULE_8__.f.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_8__.i.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_8__.j.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_8__.k.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_8__.l.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_8__.o.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_8__.p.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_8__.q.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_8__.r.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_8__.s.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_8__.t.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_8__.w.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_8__.x.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_8__.y.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_8__.B.propTypes,styled_system__WEBPACK_IMPORTED_MODULE_8__.C.propTypes,{align:Object(_utils__WEBPACK_IMPORTED_MODULE_9__.f)("textAlign"),bold:prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,caps:prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,color:Object(_utils__WEBPACK_IMPORTED_MODULE_9__.e)(),enableTextShadow:prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,regular:prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,textDecoration:prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,textShadowSize:prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf(["sm","md"])}),Text.span=Span,Text.span.displayName="Text.span",Text.p=Paragraph,Text.p.displayName="Text.p",Text.s=Strike,Text.s.displayName="Text.s",__webpack_exports__.a=Text},"../../packages/core/storybook/utils/ForwardRefsDemo.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return ForwardRefsDemo}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");function ForwardRefsDemo(_ref){var refChild=_ref.refChild,dsRef=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:refChild(dsRef)})}ForwardRefsDemo.propTypes={refChild:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func},ForwardRefsDemo.__docgenInfo={description:"This is a demo component for Storybook that provides a ref to content using a render prop",methods:[],displayName:"ForwardRefsDemo",props:{refChild:{type:{name:"func"},required:!1,description:"Render prop that receives a ref stored on the instance of <ForwardRefsDemo/>"}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/core/storybook/utils/ForwardRefsDemo.js"]={name:"ForwardRefsDemo",docgenInfo:ForwardRefsDemo.__docgenInfo,path:"../../packages/core/storybook/utils/ForwardRefsDemo.js"})}}]);