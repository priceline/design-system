(self.webpackChunk_priceline_storybook=self.webpackChunk_priceline_storybook||[]).push([[584],{"../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/modules/es.function.bind.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/internals/export.js")({target:"Function",proto:!0},{bind:__webpack_require__("../../common/temp/node_modules/.pnpm/core-js@3.20.2/node_modules/core-js/internals/function-bind.js")})},"../../common/temp/node_modules/.pnpm/fast-equals@2.0.4/node_modules/fast-equals/dist/fast-equals.js":function(__unused_webpack_module,exports){!function(exports){"use strict";var HAS_WEAKSET_SUPPORT="function"==typeof WeakSet,keys=Object.keys;function sameValueZeroEqual(a,b){return a===b||a!=a&&b!=b}function isPlainObject(value){return value.constructor===Object||null==value.constructor}function isPromiseLike(value){return!!value&&"function"==typeof value.then}function isReactElement(value){return!(!value||!value.$$typeof)}function getNewCacheFallback(){var values=[];return{add:function(value){values.push(value)},has:function(value){return-1!==values.indexOf(value)}}}var getNewCache=HAS_WEAKSET_SUPPORT?function _getNewCache(){return new WeakSet}:getNewCacheFallback;function createCircularEqualCreator(isEqual){return function createCircularEqual(comparator){var _comparator=isEqual||comparator;return function circularEqual(a,b,cache){void 0===cache&&(cache=getNewCache());var isCacheableA=!!a&&"object"==typeof a,isCacheableB=!!b&&"object"==typeof b;if(isCacheableA||isCacheableB){var hasA=isCacheableA&&cache.has(a),hasB=isCacheableB&&cache.has(b);if(hasA||hasB)return hasA&&hasB;isCacheableA&&cache.add(a),isCacheableB&&cache.add(b)}return _comparator(a,b,cache)}}}function areArraysEqual(a,b,isEqual,meta){var index=a.length;if(b.length!==index)return!1;for(;index-- >0;)if(!isEqual(a[index],b[index],meta))return!1;return!0}function areMapsEqual(a,b,isEqual,meta){var isValueEqual=a.size===b.size;if(isValueEqual&&a.size){var matchedIndices_1={};a.forEach((function(aValue,aKey){if(isValueEqual){var hasMatch_1=!1,matchIndex_1=0;b.forEach((function(bValue,bKey){hasMatch_1||matchedIndices_1[matchIndex_1]||(hasMatch_1=isEqual(aKey,bKey,meta)&&isEqual(aValue,bValue,meta))&&(matchedIndices_1[matchIndex_1]=!0),matchIndex_1++})),isValueEqual=hasMatch_1}}))}return isValueEqual}var OWNER="_owner",hasOwnProperty=Function.prototype.bind.call(Function.prototype.call,Object.prototype.hasOwnProperty);function areObjectsEqual(a,b,isEqual,meta){var keysA=keys(a),index=keysA.length;if(keys(b).length!==index)return!1;if(index)for(var key=void 0;index-- >0;){if((key=keysA[index])===OWNER){var reactElementA=isReactElement(a),reactElementB=isReactElement(b);if((reactElementA||reactElementB)&&reactElementA!==reactElementB)return!1}if(!hasOwnProperty(b,key)||!isEqual(a[key],b[key],meta))return!1}return!0}function areRegExpsEqual(a,b){return a.source===b.source&&a.global===b.global&&a.ignoreCase===b.ignoreCase&&a.multiline===b.multiline&&a.unicode===b.unicode&&a.sticky===b.sticky&&a.lastIndex===b.lastIndex}function areSetsEqual(a,b,isEqual,meta){var isValueEqual=a.size===b.size;if(isValueEqual&&a.size){var matchedIndices_2={};a.forEach((function(aValue){if(isValueEqual){var hasMatch_2=!1,matchIndex_2=0;b.forEach((function(bValue){hasMatch_2||matchedIndices_2[matchIndex_2]||(hasMatch_2=isEqual(aValue,bValue,meta))&&(matchedIndices_2[matchIndex_2]=!0),matchIndex_2++})),isValueEqual=hasMatch_2}}))}return isValueEqual}var HAS_MAP_SUPPORT="function"==typeof Map,HAS_SET_SUPPORT="function"==typeof Set;function createComparator(createIsEqual){var isEqual="function"==typeof createIsEqual?createIsEqual(comparator):comparator;function comparator(a,b,meta){if(a===b)return!0;if(a&&b&&"object"==typeof a&&"object"==typeof b){if(isPlainObject(a)&&isPlainObject(b))return areObjectsEqual(a,b,isEqual,meta);var aShape=Array.isArray(a),bShape=Array.isArray(b);return aShape||bShape?aShape===bShape&&areArraysEqual(a,b,isEqual,meta):(aShape=a instanceof Date,bShape=b instanceof Date,aShape||bShape?aShape===bShape&&sameValueZeroEqual(a.getTime(),b.getTime()):(aShape=a instanceof RegExp,bShape=b instanceof RegExp,aShape||bShape?aShape===bShape&&areRegExpsEqual(a,b):isPromiseLike(a)||isPromiseLike(b)?a===b:HAS_MAP_SUPPORT&&(aShape=a instanceof Map,bShape=b instanceof Map,aShape||bShape)?aShape===bShape&&areMapsEqual(a,b,isEqual,meta):HAS_SET_SUPPORT&&(aShape=a instanceof Set,bShape=b instanceof Set,aShape||bShape)?aShape===bShape&&areSetsEqual(a,b,isEqual,meta):areObjectsEqual(a,b,isEqual,meta)))}return a!=a&&b!=b}return comparator}var deepEqual=createComparator(),shallowEqual=createComparator((function(){return sameValueZeroEqual})),circularDeepEqual=createComparator(createCircularEqualCreator()),circularShallowEqual=createComparator(createCircularEqualCreator(sameValueZeroEqual));exports.circularDeepEqual=circularDeepEqual,exports.circularShallowEqual=circularShallowEqual,exports.createCustomEqual=createComparator,exports.deepEqual=deepEqual,exports.sameValueZeroEqual=sameValueZeroEqual,exports.shallowEqual=shallowEqual,Object.defineProperty(exports,"__esModule",{value:!0})}(exports)},"../../common/temp/node_modules/.pnpm/micro-memoize@4.0.9/node_modules/micro-memoize/dist/micro-memoize.js":function(module){module.exports=function(){"use strict";var DEFAULT_OPTIONS_KEYS={isEqual:!0,isMatchingKey:!0,isPromise:!0,maxSize:!0,onCacheAdd:!0,onCacheChange:!0,onCacheHit:!0,transformKey:!0},slice=Array.prototype.slice;function cloneArray(arrayLike){var length=arrayLike.length;return length?1===length?[arrayLike[0]]:2===length?[arrayLike[0],arrayLike[1]]:3===length?[arrayLike[0],arrayLike[1],arrayLike[2]]:slice.call(arrayLike,0):[]}function getCustomOptions(options){var customOptions={};for(var key in options)DEFAULT_OPTIONS_KEYS[key]||(customOptions[key]=options[key]);return customOptions}function isMemoized(fn){return"function"==typeof fn&&fn.isMemoized}function isSameValueZero(object1,object2){return object1===object2||object1!=object1&&object2!=object2}function mergeOptions(existingOptions,newOptions){var target={};for(var key in existingOptions)target[key]=existingOptions[key];for(var key in newOptions)target[key]=newOptions[key];return target}var Cache=function(){function Cache(options){this.keys=[],this.values=[],this.options=options;var isMatchingKeyFunction="function"==typeof options.isMatchingKey;isMatchingKeyFunction?this.getKeyIndex=this._getKeyIndexFromMatchingKey:options.maxSize>1?this.getKeyIndex=this._getKeyIndexForMany:this.getKeyIndex=this._getKeyIndexForSingle,this.canTransformKey="function"==typeof options.transformKey,this.shouldCloneArguments=this.canTransformKey||isMatchingKeyFunction,this.shouldUpdateOnAdd="function"==typeof options.onCacheAdd,this.shouldUpdateOnChange="function"==typeof options.onCacheChange,this.shouldUpdateOnHit="function"==typeof options.onCacheHit}return Object.defineProperty(Cache.prototype,"size",{get:function(){return this.keys.length},enumerable:!0,configurable:!0}),Object.defineProperty(Cache.prototype,"snapshot",{get:function(){return{keys:cloneArray(this.keys),size:this.size,values:cloneArray(this.values)}},enumerable:!0,configurable:!0}),Cache.prototype._getKeyIndexFromMatchingKey=function(keyToMatch){var _a=this.options,isMatchingKey=_a.isMatchingKey,maxSize=_a.maxSize,keys=this.keys,keysLength=keys.length;if(!keysLength)return-1;if(isMatchingKey(keys[0],keyToMatch))return 0;if(maxSize>1)for(var index=1;index<keysLength;index++)if(isMatchingKey(keys[index],keyToMatch))return index;return-1},Cache.prototype._getKeyIndexForMany=function(keyToMatch){var isEqual=this.options.isEqual,keys=this.keys,keysLength=keys.length;if(!keysLength)return-1;if(1===keysLength)return this._getKeyIndexForSingle(keyToMatch);var existingKey,argIndex,keyLength=keyToMatch.length;if(keyLength>1){for(var index=0;index<keysLength;index++)if((existingKey=keys[index]).length===keyLength){for(argIndex=0;argIndex<keyLength&&isEqual(existingKey[argIndex],keyToMatch[argIndex]);argIndex++);if(argIndex===keyLength)return index}}else for(index=0;index<keysLength;index++)if((existingKey=keys[index]).length===keyLength&&isEqual(existingKey[0],keyToMatch[0]))return index;return-1},Cache.prototype._getKeyIndexForSingle=function(keyToMatch){var keys=this.keys;if(!keys.length)return-1;var existingKey=keys[0],length=existingKey.length;if(keyToMatch.length!==length)return-1;var isEqual=this.options.isEqual;if(length>1){for(var index=0;index<length;index++)if(!isEqual(existingKey[index],keyToMatch[index]))return-1;return 0}return isEqual(existingKey[0],keyToMatch[0])?0:-1},Cache.prototype.orderByLru=function(key,value,startingIndex){for(var keys=this.keys,values=this.values,currentLength=keys.length,index=startingIndex;index--;)keys[index+1]=keys[index],values[index+1]=values[index];keys[0]=key,values[0]=value;var maxSize=this.options.maxSize;currentLength===maxSize&&startingIndex===currentLength?(keys.pop(),values.pop()):startingIndex>=maxSize&&(keys.length=values.length=maxSize)},Cache.prototype.updateAsyncCache=function(memoized){var _this=this,_a=this.options,onCacheChange=_a.onCacheChange,onCacheHit=_a.onCacheHit,firstKey=this.keys[0],firstValue=this.values[0];this.values[0]=firstValue.then((function(value){return _this.shouldUpdateOnHit&&onCacheHit(_this,_this.options,memoized),_this.shouldUpdateOnChange&&onCacheChange(_this,_this.options,memoized),value}),(function(error){var keyIndex=_this.getKeyIndex(firstKey);throw-1!==keyIndex&&(_this.keys.splice(keyIndex,1),_this.values.splice(keyIndex,1)),error}))},Cache}();function createMemoizedFunction(fn,options){if(void 0===options&&(options={}),isMemoized(fn))return createMemoizedFunction(fn.fn,mergeOptions(fn.options,options));if("function"!=typeof fn)throw new TypeError("You must pass a function to `memoize`.");var _a=options.isEqual,isEqual=void 0===_a?isSameValueZero:_a,isMatchingKey=options.isMatchingKey,_b=options.isPromise,isPromise=void 0!==_b&&_b,_c=options.maxSize,maxSize=void 0===_c?1:_c,onCacheAdd=options.onCacheAdd,onCacheChange=options.onCacheChange,onCacheHit=options.onCacheHit,transformKey=options.transformKey,normalizedOptions=mergeOptions({isEqual,isMatchingKey,isPromise,maxSize,onCacheAdd,onCacheChange,onCacheHit,transformKey},getCustomOptions(options)),cache=new Cache(normalizedOptions),keys=cache.keys,values=cache.values,canTransformKey=cache.canTransformKey,shouldCloneArguments=cache.shouldCloneArguments,shouldUpdateOnAdd=cache.shouldUpdateOnAdd,shouldUpdateOnChange=cache.shouldUpdateOnChange,shouldUpdateOnHit=cache.shouldUpdateOnHit,memoized=function memoized(){var key=shouldCloneArguments?cloneArray(arguments):arguments;canTransformKey&&(key=transformKey(key));var keyIndex=keys.length?cache.getKeyIndex(key):-1;if(-1!==keyIndex)shouldUpdateOnHit&&onCacheHit(cache,normalizedOptions,memoized),keyIndex&&(cache.orderByLru(keys[keyIndex],values[keyIndex],keyIndex),shouldUpdateOnChange&&onCacheChange(cache,normalizedOptions,memoized));else{var newValue=fn.apply(this,arguments),newKey=shouldCloneArguments?key:cloneArray(arguments);cache.orderByLru(newKey,newValue,keys.length),isPromise&&cache.updateAsyncCache(memoized),shouldUpdateOnAdd&&onCacheAdd(cache,normalizedOptions,memoized),shouldUpdateOnChange&&onCacheChange(cache,normalizedOptions,memoized)}return values[0]};return memoized.cache=cache,memoized.fn=fn,memoized.isMemoized=!0,memoized.options=normalizedOptions,memoized}return createMemoizedFunction}()},"../../common/temp/node_modules/.pnpm/moize@6.1.0/node_modules/moize/dist/moize.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=function(memoize,fastEquals){"use strict";function _interopDefaultLegacy(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var memoize__default=_interopDefaultLegacy(memoize);function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var DEFAULT_OPTIONS={isDeepEqual:!1,isPromise:!1,isReact:!1,isSerialized:!1,isShallowEqual:!1,matchesArg:void 0,matchesKey:void 0,maxAge:void 0,maxArgs:void 0,maxSize:1,onExpire:void 0,profileName:void 0,serializer:void 0,updateCacheForKey:void 0,transformArgs:void 0,updateExpire:!1};function combine(){for(var _len=arguments.length,functions=new Array(_len),_key=0;_key<_len;_key++)functions[_key]=arguments[_key];return functions.reduce((function(f,g){return"function"==typeof f?"function"==typeof g?function(){f.apply(this,arguments),g.apply(this,arguments)}:f:"function"==typeof g?g:void 0}))}function compose(){for(var _len2=arguments.length,functions=new Array(_len2),_key2=0;_key2<_len2;_key2++)functions[_key2]=arguments[_key2];return functions.reduce((function(f,g){return"function"==typeof f?"function"==typeof g?function(){return f(g.apply(this,arguments))}:f:"function"==typeof g?g:void 0}))}function findExpirationIndex(expirations,key){for(var index=0;index<expirations.length;index++)if(expirations[index].key===key)return index;return-1}function createFindKeyIndex(isEqual,isMatchingKey){var areKeysEqual="function"==typeof isMatchingKey?isMatchingKey:function(cacheKey,key){for(var index=0;index<key.length;index++)if(!isEqual(cacheKey[index],key[index]))return!1;return!0};return function(keys,key){for(var keysIndex=0;keysIndex<keys.length;keysIndex++)if(keys[keysIndex].length===key.length&&areKeysEqual(keys[keysIndex],key))return keysIndex;return-1}}function mergeOptions(originalOptions,newOptions){return newOptions&&newOptions!==DEFAULT_OPTIONS?_extends({},originalOptions,newOptions,{onCacheAdd:combine(originalOptions.onCacheAdd,newOptions.onCacheAdd),onCacheChange:combine(originalOptions.onCacheChange,newOptions.onCacheChange),onCacheHit:combine(originalOptions.onCacheHit,newOptions.onCacheHit),transformArgs:compose(originalOptions.transformArgs,newOptions.transformArgs)}):originalOptions}function isMoized(fn){return"function"==typeof fn&&fn.isMoized}function setName(fn,originalFunctionName,profileName){try{var name=profileName||originalFunctionName||"anonymous";Object.defineProperty(fn,"name",{configurable:!0,enumerable:!1,value:"moized("+name+")",writable:!0})}catch(_unused){}}function clearExpiration(expirations,key,shouldRemove){var expirationIndex=findExpirationIndex(expirations,key);-1!==expirationIndex&&(clearTimeout(expirations[expirationIndex].timeoutId),shouldRemove&&expirations.splice(expirationIndex,1))}function createTimeout(expirationMethod,maxAge){var timeoutId=setTimeout(expirationMethod,maxAge);return"function"==typeof timeoutId.unref&&timeoutId.unref(),timeoutId}function createOnCacheAddSetExpiration(expirations,options,isEqual,isMatchingKey){var maxAge=options.maxAge;return function onCacheAdd(cache,moizedOptions,moized){var key=cache.keys[0];if(-1===findExpirationIndex(expirations,key)){var expirationMethod=function expirationMethod(){var keyIndex=createFindKeyIndex(isEqual,isMatchingKey)(cache.keys,key),value=cache.values[keyIndex];~keyIndex&&(cache.keys.splice(keyIndex,1),cache.values.splice(keyIndex,1),"function"==typeof options.onCacheChange&&options.onCacheChange(cache,moizedOptions,moized)),clearExpiration(expirations,key,!0),"function"==typeof options.onExpire&&!1===options.onExpire(key)&&(cache.keys.unshift(key),cache.values.unshift(value),onCacheAdd(cache,moizedOptions,moized),"function"==typeof options.onCacheChange&&options.onCacheChange(cache,moizedOptions,moized))};expirations.push({expirationMethod,key,timeoutId:createTimeout(expirationMethod,maxAge)})}}}function createOnCacheHitResetExpiration(expirations,options){return function onCacheHit(cache){var key=cache.keys[0],expirationIndex=findExpirationIndex(expirations,key);~expirationIndex&&(clearExpiration(expirations,key,!1),expirations[expirationIndex].timeoutId=createTimeout(expirations[expirationIndex].expirationMethod,options.maxAge))}}function getMaxAgeOptions(expirations,options,isEqual,isMatchingKey){var onCacheAdd="number"==typeof options.maxAge&&isFinite(options.maxAge)?createOnCacheAddSetExpiration(expirations,options,isEqual,isMatchingKey):void 0;return{onCacheAdd,onCacheHit:onCacheAdd&&options.updateExpire?createOnCacheHitResetExpiration(expirations,options):void 0}}var statsCache={anonymousProfileNameCounter:1,isCollectingStats:!1,profiles:{}},hasWarningDisplayed=!1;function clearStats(profileName){profileName?delete statsCache.profiles[profileName]:statsCache.profiles={}}function collectStats(isCollectingStats){void 0===isCollectingStats&&(isCollectingStats=!0),statsCache.isCollectingStats=isCollectingStats}function createOnCacheAddIncrementCalls(options){var profileName=options.profileName;return function(){profileName&&!statsCache.profiles[profileName]&&(statsCache.profiles[profileName]={calls:0,hits:0}),statsCache.profiles[profileName].calls++}}function createOnCacheHitIncrementCallsAndHits(options){return function(){var profiles=statsCache.profiles,profileName=options.profileName;profiles[profileName]||(profiles[profileName]={calls:0,hits:0}),profiles[profileName].calls++,profiles[profileName].hits++}}function getDefaultProfileName(fn){var stack=(new Error).stack,fnName=fn.displayName||fn.name||"Anonymous "+statsCache.anonymousProfileNameCounter++;if(!stack)return fnName;for(var line,profileNameLocation,lines=stack.split("\n").slice(3),index=0;index<lines.length;index++)if(-1===(line=lines[index]).indexOf("/moize/")&&-1===line.indexOf(" (native)")&&-1===line.indexOf(" Function.")){profileNameLocation=line.replace(/\n/g,"\\n").trim();break}return profileNameLocation?fnName+" "+profileNameLocation:fnName}function getUsagePercentage(calls,hits){return calls?(hits/calls*100).toFixed(4)+"%":"0.0000%"}function getStats(profileName){statsCache.isCollectingStats||hasWarningDisplayed||(console.warn('Stats are not currently being collected, please run "collectStats" to enable them.'),hasWarningDisplayed=!0);var profiles=statsCache.profiles;if(profileName){if(!profiles[profileName])return{calls:0,hits:0,usage:"0.0000%"};var profile=profiles[profileName];return _extends({},profile,{usage:getUsagePercentage(profile.calls,profile.hits)})}var completeStats=Object.keys(statsCache.profiles).reduce((function(completeProfiles,profileName){return completeProfiles.calls+=profiles[profileName].calls,completeProfiles.hits+=profiles[profileName].hits,completeProfiles}),{calls:0,hits:0});return _extends({},completeStats,{profiles:Object.keys(profiles).reduce((function(computedProfiles,profileName){return computedProfiles[profileName]=getStats(profileName),computedProfiles}),{}),usage:getUsagePercentage(completeStats.calls,completeStats.hits)})}function getStatsOptions(options){return statsCache.isCollectingStats?{onCacheAdd:createOnCacheAddIncrementCalls(options),onCacheHit:createOnCacheHitIncrementCallsAndHits(options)}:{}}var ALWAYS_SKIPPED_PROPERTIES={arguments:!0,callee:!0,caller:!0,constructor:!0,length:!0,name:!0,prototype:!0};function copyStaticProperties(originalFn,newFn,skippedProperties){void 0===skippedProperties&&(skippedProperties=[]),Object.getOwnPropertyNames(originalFn).forEach((function(property){if(!ALWAYS_SKIPPED_PROPERTIES[property]&&-1===skippedProperties.indexOf(property)){var descriptor=Object.getOwnPropertyDescriptor(originalFn,property);descriptor.get||descriptor.set?Object.defineProperty(newFn,property,descriptor):newFn[property]=originalFn[property]}}))}function addInstanceMethods(memoized,_ref){var expirations=_ref.expirations,options=memoized.options,findKeyIndex=createFindKeyIndex(options.isEqual,options.isMatchingKey),moized=memoized;moized.clear=function(){var onCacheChange=moized._microMemoizeOptions.onCacheChange,cache=moized.cache;return cache.keys.length=0,cache.values.length=0,onCacheChange&&onCacheChange(cache,moized.options,moized),!0},moized.clearStats=function(){clearStats(moized.options.profileName)},moized.get=function(key){var transformKey=moized._microMemoizeOptions.transformKey,cache=moized.cache,cacheKey=transformKey?transformKey(key):key;return-1!==findKeyIndex(cache.keys,cacheKey)?moized.apply(this,key):void 0},moized.getStats=function(){return getStats(moized.options.profileName)},moized.has=function(key){var transformKey=moized._microMemoizeOptions.transformKey,cacheKey=transformKey?transformKey(key):key;return-1!==findKeyIndex(moized.cache.keys,cacheKey)},moized.keys=function(){return moized.cacheSnapshot.keys},moized.remove=function(key){var _moized$_microMemoize=moized._microMemoizeOptions,onCacheChange=_moized$_microMemoize.onCacheChange,transformKey=_moized$_microMemoize.transformKey,cache=moized.cache,keyIndex=findKeyIndex(cache.keys,transformKey?transformKey(key):key);if(-1===keyIndex)return!1;var existingKey=cache.keys[keyIndex];return cache.keys.splice(keyIndex,1),cache.values.splice(keyIndex,1),onCacheChange&&onCacheChange(cache,moized.options,moized),clearExpiration(expirations,existingKey,!0),!0},moized.set=function(key,value){var _microMemoizeOptions=moized._microMemoizeOptions,cache=moized.cache,options=moized.options,onCacheAdd=_microMemoizeOptions.onCacheAdd,onCacheChange=_microMemoizeOptions.onCacheChange,transformKey=_microMemoizeOptions.transformKey,cacheKey=transformKey?transformKey(key):key,keyIndex=findKeyIndex(cache.keys,cacheKey);if(-1===keyIndex){var cutoff=options.maxSize-1;cache.size>cutoff&&(cache.keys.length=cutoff,cache.values.length=cutoff),cache.keys.unshift(cacheKey),cache.values.unshift(value),options.isPromise&&cache.updateAsyncCache(moized),onCacheAdd&&onCacheAdd(cache,options,moized),onCacheChange&&onCacheChange(cache,options,moized)}else{var existingKey=cache.keys[keyIndex];cache.values[keyIndex]=value,keyIndex>0&&cache.orderByLru(existingKey,value,keyIndex),options.isPromise&&cache.updateAsyncCache(moized),"function"==typeof onCacheChange&&onCacheChange(cache,options,moized)}},moized.values=function(){return moized.cacheSnapshot.values}}function addInstanceProperties(memoized,_ref2){var expirations=_ref2.expirations,moizeOptions=_ref2.options,originalFunction=_ref2.originalFunction,microMemoizeOptions=memoized.options;Object.defineProperties(memoized,{_microMemoizeOptions:{configurable:!0,get:function get(){return microMemoizeOptions}},cacheSnapshot:{configurable:!0,get:function get(){var currentCache=memoized.cache;return{keys:currentCache.keys.slice(0),size:currentCache.size,values:currentCache.values.slice(0)}}},expirations:{configurable:!0,get:function get(){return expirations}},expirationsSnapshot:{configurable:!0,get:function get(){return expirations.slice(0)}},isMoized:{configurable:!0,get:function get(){return!0}},options:{configurable:!0,get:function get(){return moizeOptions}},originalFunction:{configurable:!0,get:function get(){return originalFunction}}}),copyStaticProperties(originalFunction,memoized)}function createMoizeInstance(memoized,configuration){return addInstanceMethods(memoized,configuration),addInstanceProperties(memoized,configuration),memoized}var REACT_ELEMENT_TYPE="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function createMoizedComponent(moizer,fn,options){var reactMoizer=moizer(_extends({maxArgs:2,isShallowEqual:!0},options,{isReact:!1}));function Moized(props,context,updater){this.props=props,this.context=context,this.updater=updater,this.MoizedComponent=reactMoizer(fn)}return fn.displayName||(fn.displayName=fn.name||"Component"),Moized.prototype.isReactComponent={},Moized.prototype.render=function(){return{$$typeof:REACT_ELEMENT_TYPE,type:this.MoizedComponent,props:this.props,ref:null,key:null,_owner:null}},copyStaticProperties(fn,Moized,["contextType","contextTypes"]),Moized.displayName="Moized("+(fn.displayName||fn.name||"Component")+")",setName(Moized,fn.name,options.profileName),Moized}function createGetInitialArgs(size){return function(args){if(size>=args.length)return args;if(0===size)return[];if(1===size)return[args[0]];if(2===size)return[args[0],args[1]];if(3===size)return[args[0],args[1],args[2]];for(var clone=[],index=0;index<size;index++)clone[index]=args[index];return clone}}function getCutoff(array,value){for(var length=array.length,index=0;index<length;++index)if(array[index]===value)return index+1;return 0}function createDefaultReplacer(){var cache=[],keys=[];return function defaultReplacer(key,value){var type=typeof value;if("function"===type||"symbol"===type)return value.toString();if("object"==typeof value){if(cache.length){var thisCutoff=getCutoff(cache,this);0===thisCutoff?cache[cache.length]=this:(cache.splice(thisCutoff),keys.splice(thisCutoff)),keys[keys.length]=key;var valueCutoff=getCutoff(cache,value);if(0!==valueCutoff)return"[ref="+(keys.slice(0,valueCutoff).join(".")||".")+"]"}else cache[0]=value,keys[0]=key;return value}return""+value}}function getStringifiedArgument(arg){var typeOfArg=typeof arg;return!arg||"object"!==typeOfArg&&"function"!==typeOfArg?arg:JSON.stringify(arg,createDefaultReplacer())}function defaultArgumentSerializer(args){for(var key="|",index=0;index<args.length;index++)key+=getStringifiedArgument(args[index])+"|";return[key]}function getSerializerFunction(options){return"function"==typeof options.serializer?options.serializer:defaultArgumentSerializer}function getIsSerializedKeyEqual(cacheKey,key){return cacheKey[0]===key[0]}function createOnCacheOperation(fn){if("function"==typeof fn)return function(_cacheIgnored,_microMemoizeOptionsIgnored,memoized){return fn(memoized.cache,memoized.options,memoized)}}function getIsEqual(options){return options.matchesArg||options.isDeepEqual&&fastEquals.deepEqual||options.isShallowEqual&&fastEquals.shallowEqual||fastEquals.sameValueZeroEqual}function getIsMatchingKey(options){return options.matchesKey||options.isSerialized&&getIsSerializedKeyEqual||void 0}function getTransformKey(options){return compose(options.isSerialized&&getSerializerFunction(options),"function"==typeof options.transformArgs&&options.transformArgs,"number"==typeof options.maxArgs&&createGetInitialArgs(options.maxArgs))}function createRefreshableMoized(moized){var updateCacheForKey=moized.options.updateCacheForKey,refreshableMoized=function refreshableMoized(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];if(!updateCacheForKey(args))return moized.apply(this,args);var result=moized.fn.apply(this,args);return moized.set(args,result),result};return copyStaticProperties(moized,refreshableMoized),refreshableMoized}var _excluded=["matchesArg","isDeepEqual","isPromise","isReact","isSerialized","isShallowEqual","matchesKey","maxAge","maxArgs","maxSize","onCacheAdd","onCacheChange","onCacheHit","onExpire","profileName","serializer","updateCacheForKey","transformArgs","updateExpire"],moize=function moize(fn,passedOptions){var options=passedOptions||DEFAULT_OPTIONS;if(isMoized(fn)){var moizeable=fn.originalFunction,mergedOptions=mergeOptions(fn.options,options);return moize(moizeable,mergedOptions)}if("object"==typeof fn)return function(curriedFn,curriedOptions){if("function"==typeof curriedFn){var _mergedOptions=mergeOptions(fn,curriedOptions);return moize(curriedFn,_mergedOptions)}var mergedOptions=mergeOptions(fn,curriedFn);return moize(mergedOptions)};if(options.isReact)return createMoizedComponent(moize,fn,options);var coalescedOptions=_extends({},DEFAULT_OPTIONS,options,{maxAge:"number"==typeof options.maxAge&&options.maxAge>=0?options.maxAge:DEFAULT_OPTIONS.maxAge,maxArgs:"number"==typeof options.maxArgs&&options.maxArgs>=0?options.maxArgs:DEFAULT_OPTIONS.maxArgs,maxSize:"number"==typeof options.maxSize&&options.maxSize>=0?options.maxSize:DEFAULT_OPTIONS.maxSize,profileName:options.profileName||getDefaultProfileName(fn)}),expirations=[];coalescedOptions.matchesArg,coalescedOptions.isDeepEqual;var isPromise=coalescedOptions.isPromise;coalescedOptions.isReact,coalescedOptions.isSerialized,coalescedOptions.isShallowEqual,coalescedOptions.matchesKey,coalescedOptions.maxAge,coalescedOptions.maxArgs;var maxSize=coalescedOptions.maxSize,onCacheAdd=coalescedOptions.onCacheAdd,onCacheChange=coalescedOptions.onCacheChange,onCacheHit=coalescedOptions.onCacheHit;coalescedOptions.onExpire,coalescedOptions.profileName,coalescedOptions.serializer;var updateCacheForKey=coalescedOptions.updateCacheForKey;coalescedOptions.transformArgs,coalescedOptions.updateExpire;var customOptions=_objectWithoutPropertiesLoose(coalescedOptions,_excluded),isEqual=getIsEqual(coalescedOptions),isMatchingKey=getIsMatchingKey(coalescedOptions),maxAgeOptions=getMaxAgeOptions(expirations,coalescedOptions,isEqual,isMatchingKey),statsOptions=getStatsOptions(coalescedOptions),transformKey=getTransformKey(coalescedOptions),microMemoizeOptions=_extends({},customOptions,{isEqual,isMatchingKey,isPromise,maxSize,onCacheAdd:createOnCacheOperation(combine(onCacheAdd,maxAgeOptions.onCacheAdd,statsOptions.onCacheAdd)),onCacheChange:createOnCacheOperation(onCacheChange),onCacheHit:createOnCacheOperation(combine(onCacheHit,maxAgeOptions.onCacheHit,statsOptions.onCacheHit)),transformKey}),moized=createMoizeInstance(memoize__default.default(fn,microMemoizeOptions),{expirations,options:coalescedOptions,originalFunction:fn});return updateCacheForKey&&(moized=createRefreshableMoized(moized)),setName(moized,fn.name,options.profileName),moized};function maxAge(maxAge,expireOptions){if(!0===expireOptions)return moize({maxAge,updateExpire:expireOptions});if("object"==typeof expireOptions){var onExpire=expireOptions.onExpire,updateExpire=expireOptions.updateExpire;return moize({maxAge,onExpire,updateExpire})}return moize("function"==typeof expireOptions?{maxAge,onExpire:expireOptions,updateExpire:!0}:{maxAge})}return moize.clearStats=clearStats,moize.collectStats=collectStats,moize.compose=function(){return compose.apply(void 0,arguments)||moize},moize.deep=moize({isDeepEqual:!0}),moize.getStats=getStats,moize.infinite=moize({maxSize:1/0}),moize.isCollectingStats=function isCollectingStats(){return statsCache.isCollectingStats},moize.isMoized=function isMoized(fn){return"function"==typeof fn&&!!fn.isMoized},moize.matchesArg=function(argMatcher){return moize({matchesArg:argMatcher})},moize.matchesKey=function(keyMatcher){return moize({matchesKey:keyMatcher})},moize.maxAge=maxAge,moize.maxArgs=function maxArgs(maxArgs){return moize({maxArgs})},moize.maxSize=function maxSize(maxSize){return moize({maxSize})},moize.profile=function(profileName){return moize({profileName})},moize.promise=moize({isPromise:!0,updateExpire:!0}),moize.react=moize({isReact:!0}),moize.serialize=moize({isSerialized:!0}),moize.serializeWith=function(serializer){return moize({isSerialized:!0,serializer})},moize.shallow=moize({isShallowEqual:!0}),moize.transformArgs=function(transformArgs){return moize({transformArgs})},moize.updateCacheForKey=function(updateCacheForKey){return moize({updateCacheForKey})},Object.defineProperty(moize,"default",{configurable:!1,enumerable:!1,value:moize,writable:!1}),moize}(__webpack_require__("../../common/temp/node_modules/.pnpm/micro-memoize@4.0.9/node_modules/micro-memoize/dist/micro-memoize.js"),__webpack_require__("../../common/temp/node_modules/.pnpm/fast-equals@2.0.4/node_modules/fast-equals/dist/fast-equals.js"))}}]);