(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{"../../common/temp/node_modules/.pnpm/@reach+dialog@0.16.2_react-dom@17.0.2+react@17.0.2/node_modules/@reach/dialog/dist/reach-dialog.esm.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return reach_dialog_esm_DialogContent})),__webpack_require__.d(__webpack_exports__,"b",(function(){return reach_dialog_esm_DialogOverlay}));var react=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");function canUseDOM(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}var useIsomorphicLayoutEffect=canUseDOM()?react.useLayoutEffect:react.useEffect;var react_dom=__webpack_require__("../../common/temp/node_modules/.pnpm/react-dom@17.0.2_react@17.0.2/node_modules/react-dom/index.js"),reach_portal_esm_Portal=function Portal(_ref){var children=_ref.children,_ref$type=_ref.type,type=void 0===_ref$type?"reach-portal":_ref$type,containerRef=_ref.containerRef,mountNode=Object(react.useRef)(null),portalNode=Object(react.useRef)(null),forceUpdate=function useForceUpdate(){var dispatch=Object(react.useState)(Object.create(null))[1];return Object(react.useCallback)((function(){dispatch(Object.create(null))}),[])}();return useIsomorphicLayoutEffect((function(){if(mountNode.current){var ownerDocument=mountNode.current.ownerDocument,body=(null==containerRef?void 0:containerRef.current)||ownerDocument.body;return portalNode.current=null==ownerDocument?void 0:ownerDocument.createElement(type),body.appendChild(portalNode.current),forceUpdate(),function(){portalNode.current&&body&&body.removeChild(portalNode.current)}}}),[type,forceUpdate,containerRef]),portalNode.current?Object(react_dom.createPortal)(children,portalNode.current):Object(react.createElement)("span",{ref:mountNode})};function getOwnerDocument(element){return canUseDOM()?element?element.ownerDocument:document:null}function noop(){}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _createForOfIteratorHelperLoose(o,allowArrayLike){var it;if("undefined"==typeof Symbol||null==o[Symbol.iterator]){if(Array.isArray(o)||(it=function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}(o))||allowArrayLike&&o&&"number"==typeof o.length){it&&(o=it);var i=0;return function(){return i>=o.length?{done:!0}:{done:!1,value:o[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(it=o[Symbol.iterator]()).next.bind(it)}function assignRef(ref,value){if(null!=ref)if(function isFunction(value){return!(!value||"[object Function]"!={}.toString.call(value))}(ref))ref(value);else try{ref.current=value}catch(error){throw new Error('Cannot assign value "'+value+'" to ref "'+ref+'"')}}function composeEventHandlers(theirHandler,ourHandler){return function(event){if(theirHandler&&theirHandler(event),!event.defaultPrevented)return ourHandler(event)}}var es2015=__webpack_require__("../../common/temp/node_modules/.pnpm/react-focus-lock@2.7.1_react@17.0.2/node_modules/react-focus-lock/dist/es2015/index.js"),tslib_es6=__webpack_require__("../../common/temp/node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js"),medium=__webpack_require__("../../common/temp/node_modules/.pnpm/use-sidecar@1.0.5_react@17.0.2/node_modules/use-sidecar/dist/es2015/medium.js"),effectCar=Object(medium.b)(),useMergeRef=__webpack_require__("../../common/temp/node_modules/.pnpm/use-callback-ref@1.2.5_react@17.0.2/node_modules/use-callback-ref/dist/es2015/useMergeRef.js"),nothing=function(){},RemoveScroll=react.forwardRef((function(props,parentRef){var ref=react.useRef(null),_a=react.useState({onScrollCapture:nothing,onWheelCapture:nothing,onTouchMoveCapture:nothing}),callbacks=_a[0],setCallbacks=_a[1],forwardProps=props.forwardProps,children=props.children,className=props.className,removeScrollBar=props.removeScrollBar,enabled=props.enabled,shards=props.shards,sideCar=props.sideCar,noIsolation=props.noIsolation,inert=props.inert,allowPinchZoom=props.allowPinchZoom,_b=props.as,Container=void 0===_b?"div":_b,rest=tslib_es6.b(props,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),SideCar=sideCar,containerRef=Object(useMergeRef.a)([ref,parentRef]),containerProps=tslib_es6.a({},rest,callbacks);return react.createElement(react.Fragment,null,enabled&&react.createElement(SideCar,{sideCar:effectCar,removeScrollBar:removeScrollBar,shards:shards,noIsolation:noIsolation,inert:inert,setCallbacks:setCallbacks,allowPinchZoom:!!allowPinchZoom,lockRef:ref}),forwardProps?react.cloneElement(react.Children.only(children),tslib_es6.a({},containerProps,{ref:containerRef})):react.createElement(Container,tslib_es6.a({},containerProps,{className:className,ref:containerRef}),children))}));RemoveScroll.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},RemoveScroll.classNames={fullWidth:"width-before-scroll-bar",zeroRight:"right-scroll-bar-position"};var currentNonce,exports_SideCar=function(_a){var sideCar=_a.sideCar,rest=tslib_es6.b(_a,["sideCar"]);if(!sideCar)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var Target=sideCar.read();if(!Target)throw new Error("Sidecar medium not found");return react.createElement(Target,tslib_es6.a({},rest))};exports_SideCar.isSideCarExport=!0;function makeStyleTag(){if(!document)return null;var tag=document.createElement("style");tag.type="text/css";var nonce=currentNonce||__webpack_require__.nc;return nonce&&tag.setAttribute("nonce",nonce),tag}var stylesheetSingleton=function(){var counter=0,stylesheet=null;return{add:function(style){0==counter&&(stylesheet=makeStyleTag())&&(!function injectStyles(tag,css){tag.styleSheet?tag.styleSheet.cssText=css:tag.appendChild(document.createTextNode(css))}(stylesheet,style),function insertStyleTag(tag){(document.head||document.getElementsByTagName("head")[0]).appendChild(tag)}(stylesheet)),counter++},remove:function(){!--counter&&stylesheet&&(stylesheet.parentNode&&stylesheet.parentNode.removeChild(stylesheet),stylesheet=null)}}},styleSingleton=function(){var sheet,useStyle=(sheet=stylesheetSingleton(),function(styles){react.useEffect((function(){return sheet.add(styles),function(){sheet.remove()}}),[])});return function(_a){var styles=_a.styles;return useStyle(styles),null}},zeroGap={left:0,top:0,right:0,gap:0},parse=function(x){return parseInt(x||"",10)||0},getGapWidth=function(gapMode){if(void 0===gapMode&&(gapMode="margin"),"undefined"==typeof window)return zeroGap;var offsets=function(gapMode){var cs=window.getComputedStyle(document.body),left=cs["padding"===gapMode?"paddingLeft":"marginLeft"],top=cs["padding"===gapMode?"paddingTop":"marginTop"],right=cs["padding"===gapMode?"paddingRight":"marginRight"];return[parse(left),parse(top),parse(right)]}(gapMode),documentWidth=document.documentElement.clientWidth,windowWidth=window.innerWidth;return{left:offsets[0],top:offsets[1],right:offsets[2],gap:Math.max(0,windowWidth-documentWidth+offsets[2]-offsets[0])}},component_Style=styleSingleton(),getStyles=function(_a,allowRelative,gapMode,important){var left=_a.left,top=_a.top,right=_a.right,gap=_a.gap;return void 0===gapMode&&(gapMode="margin"),"\n  .with-scroll-bars-hidden {\n   overflow: hidden "+important+";\n   padding-right: "+gap+"px "+important+";\n  }\n  body {\n    overflow: hidden "+important+";\n    "+[allowRelative&&"position: relative "+important+";","margin"===gapMode&&"\n    padding-left: "+left+"px;\n    padding-top: "+top+"px;\n    padding-right: "+right+"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "+gap+"px "+important+";\n    ","padding"===gapMode&&"padding-right: "+gap+"px "+important+";"].filter(Boolean).join("")+"\n  }\n  \n  .right-scroll-bar-position {\n    right: "+gap+"px "+important+";\n  }\n  \n  .width-before-scroll-bar {\n    margin-right: "+gap+"px "+important+";\n  }\n  \n  .right-scroll-bar-position .right-scroll-bar-position {\n    right: 0 "+important+";\n  }\n  \n  .width-before-scroll-bar .width-before-scroll-bar {\n    margin-right: 0 "+important+";\n  }\n  \n  body {\n    --removed-body-scroll-bar-size: "+gap+"px;\n  }\n"},RemoveScrollBar=function(props){var _a=react.useState(getGapWidth(props.gapMode)),gap=_a[0],setGap=_a[1];react.useEffect((function(){setGap(getGapWidth(props.gapMode))}),[props.gapMode]);var noRelative=props.noRelative,noImportant=props.noImportant,_b=props.gapMode,gapMode=void 0===_b?"margin":_b;return react.createElement(component_Style,{styles:getStyles(gap,!noRelative,gapMode,noImportant?"":"!important")})},locationCouldBeScrolled=function(axis,node){var current=node;do{if("undefined"!=typeof ShadowRoot&&current instanceof ShadowRoot&&(current=current.host),elementCouldBeScrolled(axis,current)){var _a=getScrollVariables(axis,current);if(_a[1]>_a[2])return!0}current=current.parentNode}while(current&&current!==document.body);return!1},elementCouldBeScrolled=function(axis,node){return"v"===axis?function(node){var styles=window.getComputedStyle(node);return"hidden"!==styles.overflowY&&!(styles.overflowY===styles.overflowX&&"visible"===styles.overflowY)}(node):function(node){var styles=window.getComputedStyle(node);return"range"===node.type||"hidden"!==styles.overflowX&&!(styles.overflowY===styles.overflowX&&"visible"===styles.overflowX)}(node)},getScrollVariables=function(axis,node){return"v"===axis?[(_a=node).scrollTop,_a.scrollHeight,_a.clientHeight]:function(_a){return[_a.scrollLeft,_a.scrollWidth,_a.clientWidth]}(node);var _a},passiveSupported=!1;if("undefined"!=typeof window)try{var options=Object.defineProperty({},"passive",{get:function(){return passiveSupported=!0,!0}});window.addEventListener("test",options,options),window.removeEventListener("test",options,options)}catch(err){passiveSupported=!1}var nonPassive=!!passiveSupported&&{passive:!1},getTouchXY=function(event){return"changedTouches"in event?[event.changedTouches[0].clientX,event.changedTouches[0].clientY]:[0,0]},getDeltaXY=function(event){return[event.deltaX,event.deltaY]},extractRef=function(ref){return ref&&"current"in ref?ref.current:ref},generateStyle=function(id){return"\n  .block-interactivity-"+id+" {pointer-events: none;}\n  .allow-interactivity-"+id+" {pointer-events: all;}\n"},idCounter=0,lockStack=[];var sidecar=function exportSidecar(medium,exported){return medium.useMedium(exported),exports_SideCar}(effectCar,(function RemoveScrollSideCar(props){var shouldPreventQueue=react.useRef([]),touchStartRef=react.useRef([0,0]),activeAxis=react.useRef(),id=react.useState(idCounter++)[0],Style=react.useState((function(){return styleSingleton()}))[0],lastProps=react.useRef(props);react.useEffect((function(){lastProps.current=props}),[props]),react.useEffect((function(){if(props.inert){document.body.classList.add("block-interactivity-"+id);var allow_1=[props.lockRef.current].concat((props.shards||[]).map(extractRef)).filter(Boolean);return allow_1.forEach((function(el){return el.classList.add("allow-interactivity-"+id)})),function(){document.body.classList.remove("block-interactivity-"+id),allow_1.forEach((function(el){return el.classList.remove("allow-interactivity-"+id)}))}}}),[props.inert,props.lockRef.current,props.shards]);var shouldCancelEvent=react.useCallback((function(event,parent){if("touches"in event&&2===event.touches.length)return!lastProps.current.allowPinchZoom;var currentAxis,touch=getTouchXY(event),touchStart=touchStartRef.current,deltaX="deltaX"in event?event.deltaX:touchStart[0]-touch[0],deltaY="deltaY"in event?event.deltaY:touchStart[1]-touch[1],target=event.target,moveDirection=Math.abs(deltaX)>Math.abs(deltaY)?"h":"v",canBeScrolledInMainDirection=locationCouldBeScrolled(moveDirection,target);if(!canBeScrolledInMainDirection)return!0;if(canBeScrolledInMainDirection?currentAxis=moveDirection:(currentAxis="v"===moveDirection?"h":"v",canBeScrolledInMainDirection=locationCouldBeScrolled(moveDirection,target)),!canBeScrolledInMainDirection)return!1;if(!activeAxis.current&&"changedTouches"in event&&(deltaX||deltaY)&&(activeAxis.current=currentAxis),!currentAxis)return!0;var cancelingAxis=activeAxis.current||currentAxis;return function(axis,endTarget,event,sourceDelta,noOverscroll){var delta=sourceDelta,target=event.target,targetInLock=endTarget.contains(target),shouldCancelScroll=!1,isDeltaPositive=delta>0,availableScroll=0,availableScrollTop=0;do{var _a=getScrollVariables(axis,target),position=_a[0],elementScroll=_a[1]-_a[2]-position;(position||elementScroll)&&elementCouldBeScrolled(axis,target)&&(availableScroll+=elementScroll,availableScrollTop+=position),target=target.parentNode}while(!targetInLock&&target!==document.body||targetInLock&&(endTarget.contains(target)||endTarget===target));return(isDeltaPositive&&(noOverscroll&&0===availableScroll||!noOverscroll&&delta>availableScroll)||!isDeltaPositive&&(noOverscroll&&0===availableScrollTop||!noOverscroll&&-delta>availableScrollTop))&&(shouldCancelScroll=!0),shouldCancelScroll}(cancelingAxis,parent,event,"h"===cancelingAxis?deltaX:deltaY,!0)}),[]),shouldPrevent=react.useCallback((function(_event){var event=_event;if(lockStack.length&&lockStack[lockStack.length-1]===Style){var delta="deltaY"in event?getDeltaXY(event):getTouchXY(event),sourceEvent=shouldPreventQueue.current.filter((function(e){return e.name===event.type&&e.target===event.target&&(x=e.delta,y=delta,x[0]===y[0]&&x[1]===y[1]);var x,y}))[0];if(sourceEvent&&sourceEvent.should)event.preventDefault();else if(!sourceEvent){var shardNodes=(lastProps.current.shards||[]).map(extractRef).filter(Boolean).filter((function(node){return node.contains(event.target)}));(shardNodes.length>0?shouldCancelEvent(event,shardNodes[0]):!lastProps.current.noIsolation)&&event.preventDefault()}}}),[]),shouldCancel=react.useCallback((function(name,delta,target,should){var event={name:name,delta:delta,target:target,should:should};shouldPreventQueue.current.push(event),setTimeout((function(){shouldPreventQueue.current=shouldPreventQueue.current.filter((function(e){return e!==event}))}),1)}),[]),scrollTouchStart=react.useCallback((function(event){touchStartRef.current=getTouchXY(event),activeAxis.current=void 0}),[]),scrollWheel=react.useCallback((function(event){shouldCancel(event.type,getDeltaXY(event),event.target,shouldCancelEvent(event,props.lockRef.current))}),[]),scrollTouchMove=react.useCallback((function(event){shouldCancel(event.type,getTouchXY(event),event.target,shouldCancelEvent(event,props.lockRef.current))}),[]);react.useEffect((function(){return lockStack.push(Style),props.setCallbacks({onScrollCapture:scrollWheel,onWheelCapture:scrollWheel,onTouchMoveCapture:scrollTouchMove}),document.addEventListener("wheel",shouldPrevent,nonPassive),document.addEventListener("touchmove",shouldPrevent,nonPassive),document.addEventListener("touchstart",scrollTouchStart,nonPassive),function(){lockStack=lockStack.filter((function(inst){return inst!==Style})),document.removeEventListener("wheel",shouldPrevent,nonPassive),document.removeEventListener("touchmove",shouldPrevent,nonPassive),document.removeEventListener("touchstart",scrollTouchStart,nonPassive)}}),[]);var removeScrollBar=props.removeScrollBar,inert=props.inert;return react.createElement(react.Fragment,null,inert?react.createElement(Style,{styles:generateStyle(id)}):null,removeScrollBar?react.createElement(RemoveScrollBar,{gapMode:"margin"}):null)})),ReactRemoveScroll=react.forwardRef((function(props,ref){return react.createElement(RemoveScroll,tslib_es6.a({},props,{ref:ref,sideCar:sidecar}))}));ReactRemoveScroll.classNames=RemoveScroll.classNames;var Combination=ReactRemoveScroll,prop_types=__webpack_require__("../../common/temp/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var _excluded=["as","isOpen"],_excluded2=["allowPinchZoom","as","dangerouslyBypassFocusLock","dangerouslyBypassScrollLock","initialFocusRef","onClick","onDismiss","onKeyDown","onMouseDown","unstable_lockFocusAcrossFrames"],_excluded3=["as","onClick","onKeyDown"],reach_dialog_esm_DialogOverlay=(prop_types_default.a.bool,prop_types_default.a.bool,prop_types_default.a.bool,prop_types_default.a.func,Object(react.forwardRef)((function DialogOverlay(_ref,forwardedRef){var _ref$as=_ref.as,Comp=void 0===_ref$as?"div":_ref$as,_ref$isOpen=_ref.isOpen,isOpen=void 0===_ref$isOpen||_ref$isOpen,props=_objectWithoutPropertiesLoose(_ref,_excluded);return Object(react.useEffect)((function(){isOpen?window.__REACH_DISABLE_TOOLTIPS=!0:window.requestAnimationFrame((function(){window.__REACH_DISABLE_TOOLTIPS=!1}))}),[isOpen]),isOpen?Object(react.createElement)(reach_portal_esm_Portal,{"data-reach-dialog-wrapper":""},Object(react.createElement)(reach_dialog_esm_DialogInner,_extends({ref:forwardedRef,as:Comp},props))):null})));var reach_dialog_esm_DialogInner=Object(react.forwardRef)((function DialogInner(_ref2,forwardedRef){var allowPinchZoom=_ref2.allowPinchZoom,_ref2$as=_ref2.as,Comp=void 0===_ref2$as?"div":_ref2$as,_ref2$dangerouslyBypa=_ref2.dangerouslyBypassFocusLock,dangerouslyBypassFocusLock=void 0!==_ref2$dangerouslyBypa&&_ref2$dangerouslyBypa,_ref2$dangerouslyBypa2=_ref2.dangerouslyBypassScrollLock,dangerouslyBypassScrollLock=void 0!==_ref2$dangerouslyBypa2&&_ref2$dangerouslyBypa2,initialFocusRef=_ref2.initialFocusRef,onClick=_ref2.onClick,_ref2$onDismiss=_ref2.onDismiss,onDismiss=void 0===_ref2$onDismiss?noop:_ref2$onDismiss,onKeyDown=_ref2.onKeyDown,onMouseDown=_ref2.onMouseDown,unstable_lockFocusAcrossFrames=_ref2.unstable_lockFocusAcrossFrames,props=_objectWithoutPropertiesLoose(_ref2,_excluded2);var mouseDownTarget=Object(react.useRef)(null),overlayNode=Object(react.useRef)(null),ref=function useComposedRefs(){for(var _len=arguments.length,refs=new Array(_len),_key=0;_key<_len;_key++)refs[_key]=arguments[_key];return Object(react.useCallback)((function(node){for(var _step,_iterator=_createForOfIteratorHelperLoose(refs);!(_step=_iterator()).done;)assignRef(_step.value,node)}),refs)}(overlayNode,forwardedRef),activateFocusLock=Object(react.useCallback)((function(){initialFocusRef&&initialFocusRef.current&&initialFocusRef.current.focus()}),[initialFocusRef]);return Object(react.useEffect)((function(){return overlayNode.current?function createAriaHider(dialogNode){var originalValues=[],rootNodes=[],ownerDocument=getOwnerDocument(dialogNode);if(!dialogNode)return noop;return Array.prototype.forEach.call(ownerDocument.querySelectorAll("body > *"),(function(node){var _dialogNode$parentNod,_dialogNode$parentNod2;if(node!==(null==(_dialogNode$parentNod=dialogNode.parentNode)||null==(_dialogNode$parentNod2=_dialogNode$parentNod.parentNode)?void 0:_dialogNode$parentNod2.parentNode)){var attr=node.getAttribute("aria-hidden");null!==attr&&"false"!==attr||(originalValues.push(attr),rootNodes.push(node),node.setAttribute("aria-hidden","true"))}})),function(){rootNodes.forEach((function(node,index){var originalValue=originalValues[index];null===originalValue?node.removeAttribute("aria-hidden"):node.setAttribute("aria-hidden",originalValue)}))}}(overlayNode.current):void 0}),[]),Object(react.createElement)(es2015.a,{autoFocus:!0,returnFocus:!0,onActivation:activateFocusLock,disabled:dangerouslyBypassFocusLock,crossFrame:null==unstable_lockFocusAcrossFrames||unstable_lockFocusAcrossFrames},Object(react.createElement)(Combination,{allowPinchZoom:allowPinchZoom,enabled:!dangerouslyBypassScrollLock},Object(react.createElement)(Comp,_extends({},props,{ref:ref,"data-reach-dialog-overlay":"",onClick:composeEventHandlers(onClick,(function handleClick(event){mouseDownTarget.current===event.target&&(event.stopPropagation(),onDismiss(event))})),onKeyDown:composeEventHandlers(onKeyDown,(function handleKeyDown(event){"Escape"===event.key&&(event.stopPropagation(),onDismiss(event))})),onMouseDown:composeEventHandlers(onMouseDown,(function handleMouseDown(event){mouseDownTarget.current=event.target}))}))))}));var reach_dialog_esm_DialogContent=Object(react.forwardRef)((function DialogContent(_ref3,forwardedRef){var _ref3$as=_ref3.as,Comp=void 0===_ref3$as?"div":_ref3$as,onClick=_ref3.onClick;_ref3.onKeyDown;var props=_objectWithoutPropertiesLoose(_ref3,_excluded3);return Object(react.createElement)(Comp,_extends({"aria-modal":"true",role:"dialog",tabIndex:-1},props,{ref:forwardedRef,"data-reach-dialog-content":"",onClick:composeEventHandlers(onClick,(function(event){event.stopPropagation()}))}))}))},"../../common/temp/node_modules/.pnpm/react-transition-group@4.4.2_react-dom@17.0.2+react@17.0.2/node_modules/react-transition-group/esm/Transition.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var objectWithoutPropertiesLoose=__webpack_require__("../../common/temp/node_modules/.pnpm/@babel+runtime@7.16.7/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),inheritsLoose=__webpack_require__("../../common/temp/node_modules/.pnpm/@babel+runtime@7.16.7/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js"),react=__webpack_require__("../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),react_default=__webpack_require__.n(react),react_dom=__webpack_require__("../../common/temp/node_modules/.pnpm/react-dom@17.0.2_react@17.0.2/node_modules/react-dom/index.js"),react_dom_default=__webpack_require__.n(react_dom),config_disabled=!1,TransitionGroupContext=react_default.a.createContext(null),Transition_Transition=function(_React$Component){function Transition(props,context){var _this;_this=_React$Component.call(this,props,context)||this;var initialStatus,appear=context&&!context.isMounting?props.enter:props.appear;return _this.appearStatus=null,props.in?appear?(initialStatus="exited",_this.appearStatus="entering"):initialStatus="entered":initialStatus=props.unmountOnExit||props.mountOnEnter?"unmounted":"exited",_this.state={status:initialStatus},_this.nextCallback=null,_this}Object(inheritsLoose.a)(Transition,_React$Component),Transition.getDerivedStateFromProps=function getDerivedStateFromProps(_ref,prevState){return _ref.in&&"unmounted"===prevState.status?{status:"exited"}:null};var _proto=Transition.prototype;return _proto.componentDidMount=function componentDidMount(){this.updateStatus(!0,this.appearStatus)},_proto.componentDidUpdate=function componentDidUpdate(prevProps){var nextStatus=null;if(prevProps!==this.props){var status=this.state.status;this.props.in?"entering"!==status&&"entered"!==status&&(nextStatus="entering"):"entering"!==status&&"entered"!==status||(nextStatus="exiting")}this.updateStatus(!1,nextStatus)},_proto.componentWillUnmount=function componentWillUnmount(){this.cancelNextCallback()},_proto.getTimeouts=function getTimeouts(){var exit,enter,appear,timeout=this.props.timeout;return exit=enter=appear=timeout,null!=timeout&&"number"!=typeof timeout&&(exit=timeout.exit,enter=timeout.enter,appear=void 0!==timeout.appear?timeout.appear:enter),{exit:exit,enter:enter,appear:appear}},_proto.updateStatus=function updateStatus(mounting,nextStatus){void 0===mounting&&(mounting=!1),null!==nextStatus?(this.cancelNextCallback(),"entering"===nextStatus?this.performEnter(mounting):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},_proto.performEnter=function performEnter(mounting){var _this2=this,enter=this.props.enter,appearing=this.context?this.context.isMounting:mounting,_ref2=this.props.nodeRef?[appearing]:[react_dom_default.a.findDOMNode(this),appearing],maybeNode=_ref2[0],maybeAppearing=_ref2[1],timeouts=this.getTimeouts(),enterTimeout=appearing?timeouts.appear:timeouts.enter;!mounting&&!enter||config_disabled?this.safeSetState({status:"entered"},(function(){_this2.props.onEntered(maybeNode)})):(this.props.onEnter(maybeNode,maybeAppearing),this.safeSetState({status:"entering"},(function(){_this2.props.onEntering(maybeNode,maybeAppearing),_this2.onTransitionEnd(enterTimeout,(function(){_this2.safeSetState({status:"entered"},(function(){_this2.props.onEntered(maybeNode,maybeAppearing)}))}))})))},_proto.performExit=function performExit(){var _this3=this,exit=this.props.exit,timeouts=this.getTimeouts(),maybeNode=this.props.nodeRef?void 0:react_dom_default.a.findDOMNode(this);exit&&!config_disabled?(this.props.onExit(maybeNode),this.safeSetState({status:"exiting"},(function(){_this3.props.onExiting(maybeNode),_this3.onTransitionEnd(timeouts.exit,(function(){_this3.safeSetState({status:"exited"},(function(){_this3.props.onExited(maybeNode)}))}))}))):this.safeSetState({status:"exited"},(function(){_this3.props.onExited(maybeNode)}))},_proto.cancelNextCallback=function cancelNextCallback(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},_proto.safeSetState=function safeSetState(nextState,callback){callback=this.setNextCallback(callback),this.setState(nextState,callback)},_proto.setNextCallback=function setNextCallback(callback){var _this4=this,active=!0;return this.nextCallback=function(event){active&&(active=!1,_this4.nextCallback=null,callback(event))},this.nextCallback.cancel=function(){active=!1},this.nextCallback},_proto.onTransitionEnd=function onTransitionEnd(timeout,handler){this.setNextCallback(handler);var node=this.props.nodeRef?this.props.nodeRef.current:react_dom_default.a.findDOMNode(this),doesNotHaveTimeoutOrListener=null==timeout&&!this.props.addEndListener;if(node&&!doesNotHaveTimeoutOrListener){if(this.props.addEndListener){var _ref3=this.props.nodeRef?[this.nextCallback]:[node,this.nextCallback],maybeNode=_ref3[0],maybeNextCallback=_ref3[1];this.props.addEndListener(maybeNode,maybeNextCallback)}null!=timeout&&setTimeout(this.nextCallback,timeout)}else setTimeout(this.nextCallback,0)},_proto.render=function render(){var status=this.state.status;if("unmounted"===status)return null;var _this$props=this.props,children=_this$props.children,childProps=(_this$props.in,_this$props.mountOnEnter,_this$props.unmountOnExit,_this$props.appear,_this$props.enter,_this$props.exit,_this$props.timeout,_this$props.addEndListener,_this$props.onEnter,_this$props.onEntering,_this$props.onEntered,_this$props.onExit,_this$props.onExiting,_this$props.onExited,_this$props.nodeRef,Object(objectWithoutPropertiesLoose.a)(_this$props,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return react_default.a.createElement(TransitionGroupContext.Provider,{value:null},"function"==typeof children?children(status,childProps):react_default.a.cloneElement(react_default.a.Children.only(children),childProps))},Transition}(react_default.a.Component);function noop(){}Transition_Transition.contextType=TransitionGroupContext,Transition_Transition.propTypes={},Transition_Transition.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:noop,onEntering:noop,onEntered:noop,onExit:noop,onExiting:noop,onExited:noop},Transition_Transition.UNMOUNTED="unmounted",Transition_Transition.EXITED="exited",Transition_Transition.ENTERING="entering",Transition_Transition.ENTERED="entered",Transition_Transition.EXITING="exiting";__webpack_exports__.a=Transition_Transition}}]);