function W2(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var lc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function q2(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var b={exports:{}},we={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yu=Symbol.for("react.element"),G2=Symbol.for("react.portal"),K2=Symbol.for("react.fragment"),Y2=Symbol.for("react.strict_mode"),Q2=Symbol.for("react.profiler"),X2=Symbol.for("react.provider"),J2=Symbol.for("react.context"),Z2=Symbol.for("react.forward_ref"),eN=Symbol.for("react.suspense"),tN=Symbol.for("react.memo"),nN=Symbol.for("react.lazy"),r_=Symbol.iterator;function rN(e){return e===null||typeof e!="object"?null:(e=r_&&e[r_]||e["@@iterator"],typeof e=="function"?e:null)}var yC={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vC=Object.assign,wC={};function Zo(e,t,n){this.props=e,this.context=t,this.refs=wC,this.updater=n||yC}Zo.prototype.isReactComponent={};Zo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Zo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function _C(){}_C.prototype=Zo.prototype;function $v(e,t,n){this.props=e,this.context=t,this.refs=wC,this.updater=n||yC}var Nv=$v.prototype=new _C;Nv.constructor=$v;vC(Nv,Zo.prototype);Nv.isPureReactComponent=!0;var i_=Array.isArray,SC=Object.prototype.hasOwnProperty,Mv={current:null},xC={key:!0,ref:!0,__self:!0,__source:!0};function EC(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)SC.call(t,r)&&!xC.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:yu,type:e,key:s,ref:o,props:i,_owner:Mv.current}}function iN(e,t){return{$$typeof:yu,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Lv(e){return typeof e=="object"&&e!==null&&e.$$typeof===yu}function sN(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var s_=/\/+/g;function Mp(e,t){return typeof e=="object"&&e!==null&&e.key!=null?sN(""+e.key):t.toString(36)}function Wc(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case yu:case G2:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Mp(o,0):r,i_(i)?(n="",e!=null&&(n=e.replace(s_,"$&/")+"/"),Wc(i,t,n,"",function(u){return u})):i!=null&&(Lv(i)&&(i=iN(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(s_,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",i_(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+Mp(s,a);o+=Wc(s,t,n,l,i)}else if(l=rN(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+Mp(s,a++),o+=Wc(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function uc(e,t,n){if(e==null)return e;var r=[],i=0;return Wc(e,r,"","",function(s){return t.call(n,s,i++)}),r}function oN(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Wt={current:null},qc={transition:null},aN={ReactCurrentDispatcher:Wt,ReactCurrentBatchConfig:qc,ReactCurrentOwner:Mv};we.Children={map:uc,forEach:function(e,t,n){uc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return uc(e,function(){t++}),t},toArray:function(e){return uc(e,function(t){return t})||[]},only:function(e){if(!Lv(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};we.Component=Zo;we.Fragment=K2;we.Profiler=Q2;we.PureComponent=$v;we.StrictMode=Y2;we.Suspense=eN;we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aN;we.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=vC({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Mv.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)SC.call(t,l)&&!xC.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:yu,type:e.type,key:i,ref:s,props:r,_owner:o}};we.createContext=function(e){return e={$$typeof:J2,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:X2,_context:e},e.Consumer=e};we.createElement=EC;we.createFactory=function(e){var t=EC.bind(null,e);return t.type=e,t};we.createRef=function(){return{current:null}};we.forwardRef=function(e){return{$$typeof:Z2,render:e}};we.isValidElement=Lv;we.lazy=function(e){return{$$typeof:nN,_payload:{_status:-1,_result:e},_init:oN}};we.memo=function(e,t){return{$$typeof:tN,type:e,compare:t===void 0?null:t}};we.startTransition=function(e){var t=qc.transition;qc.transition={};try{e()}finally{qc.transition=t}};we.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};we.useCallback=function(e,t){return Wt.current.useCallback(e,t)};we.useContext=function(e){return Wt.current.useContext(e)};we.useDebugValue=function(){};we.useDeferredValue=function(e){return Wt.current.useDeferredValue(e)};we.useEffect=function(e,t){return Wt.current.useEffect(e,t)};we.useId=function(){return Wt.current.useId()};we.useImperativeHandle=function(e,t,n){return Wt.current.useImperativeHandle(e,t,n)};we.useInsertionEffect=function(e,t){return Wt.current.useInsertionEffect(e,t)};we.useLayoutEffect=function(e,t){return Wt.current.useLayoutEffect(e,t)};we.useMemo=function(e,t){return Wt.current.useMemo(e,t)};we.useReducer=function(e,t,n){return Wt.current.useReducer(e,t,n)};we.useRef=function(e){return Wt.current.useRef(e)};we.useState=function(e){return Wt.current.useState(e)};we.useSyncExternalStore=function(e,t,n){return Wt.current.useSyncExternalStore(e,t,n)};we.useTransition=function(){return Wt.current.useTransition()};we.version="18.2.0";(function(e){e.exports=we})(b);const Ye=q2(b.exports),ug=W2({__proto__:null,default:Ye},[b.exports]);var cg={},Fv={exports:{}},hn={},bC={exports:{}},TC={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(V,re){var q=V.length;V.push(re);e:for(;0<q;){var D=q-1>>>1,P=V[D];if(0<i(P,re))V[D]=re,V[q]=P,q=D;else break e}}function n(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var re=V[0],q=V.pop();if(q!==re){V[0]=q;e:for(var D=0,P=V.length,M=P>>>1;D<M;){var G=2*(D+1)-1,ee=V[G],k=G+1,me=V[k];if(0>i(ee,q))k<P&&0>i(me,ee)?(V[D]=me,V[k]=q,D=k):(V[D]=ee,V[G]=q,D=G);else if(k<P&&0>i(me,q))V[D]=me,V[k]=q,D=k;else break e}}return re}function i(V,re){var q=V.sortIndex-re.sortIndex;return q!==0?q:V.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,h=!1,p=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(V){for(var re=n(u);re!==null;){if(re.callback===null)r(u);else if(re.startTime<=V)r(u),re.sortIndex=re.expirationTime,t(l,re);else break;re=n(u)}}function _(V){if(y=!1,g(V),!p)if(n(l)!==null)p=!0,fe(E);else{var re=n(u);re!==null&&Ee(_,re.startTime-V)}}function E(V,re){p=!1,y&&(y=!1,v(O),O=-1),h=!0;var q=f;try{for(g(re),d=n(l);d!==null&&(!(d.expirationTime>re)||V&&!K());){var D=d.callback;if(typeof D=="function"){d.callback=null,f=d.priorityLevel;var P=D(d.expirationTime<=re);re=e.unstable_now(),typeof P=="function"?d.callback=P:d===n(l)&&r(l),g(re)}else r(l);d=n(l)}if(d!==null)var M=!0;else{var G=n(u);G!==null&&Ee(_,G.startTime-re),M=!1}return M}finally{d=null,f=q,h=!1}}var I=!1,C=null,O=-1,z=5,F=-1;function K(){return!(e.unstable_now()-F<z)}function Y(){if(C!==null){var V=e.unstable_now();F=V;var re=!0;try{re=C(!0,V)}finally{re?se():(I=!1,C=null)}}else I=!1}var se;if(typeof m=="function")se=function(){m(Y)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,de=ce.port2;ce.port1.onmessage=Y,se=function(){de.postMessage(null)}}else se=function(){w(Y,0)};function fe(V){C=V,I||(I=!0,se())}function Ee(V,re){O=w(function(){V(e.unstable_now())},re)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(V){V.callback=null},e.unstable_continueExecution=function(){p||h||(p=!0,fe(E))},e.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<V?Math.floor(1e3/V):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(V){switch(f){case 1:case 2:case 3:var re=3;break;default:re=f}var q=f;f=re;try{return V()}finally{f=q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(V,re){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var q=f;f=V;try{return re()}finally{f=q}},e.unstable_scheduleCallback=function(V,re,q){var D=e.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?D+q:D):q=D,V){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=q+P,V={id:c++,callback:re,priorityLevel:V,startTime:q,expirationTime:P,sortIndex:-1},q>D?(V.sortIndex=q,t(u,V),n(l)===null&&V===n(u)&&(y?(v(O),O=-1):y=!0,Ee(_,q-D))):(V.sortIndex=P,t(l,V),p||h||(p=!0,fe(E))),V},e.unstable_shouldYield=K,e.unstable_wrapCallback=function(V){var re=f;return function(){var q=f;f=re;try{return V.apply(this,arguments)}finally{f=q}}}})(TC);(function(e){e.exports=TC})(bC);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var CC=b.exports,un=bC.exports;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var IC=new Set,bl={};function Ds(e,t){$o(e,t),$o(e+"Capture",t)}function $o(e,t){for(bl[e]=t,e=0;e<t.length;e++)IC.add(t[e])}var kr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dg=Object.prototype.hasOwnProperty,lN=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,o_={},a_={};function uN(e){return dg.call(a_,e)?!0:dg.call(o_,e)?!1:lN.test(e)?a_[e]=!0:(o_[e]=!0,!1)}function cN(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function dN(e,t,n,r){if(t===null||typeof t>"u"||cN(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function qt(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){xt[e]=new qt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];xt[t]=new qt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){xt[e]=new qt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){xt[e]=new qt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){xt[e]=new qt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){xt[e]=new qt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){xt[e]=new qt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){xt[e]=new qt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){xt[e]=new qt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Vv=/[\-:]([a-z])/g;function jv(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Vv,jv);xt[t]=new qt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Vv,jv);xt[t]=new qt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Vv,jv);xt[t]=new qt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){xt[e]=new qt(e,1,!1,e.toLowerCase(),null,!1,!1)});xt.xlinkHref=new qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){xt[e]=new qt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Uv(e,t,n,r){var i=xt.hasOwnProperty(t)?xt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(dN(t,n,i,r)&&(n=null),r||i===null?uN(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Vr=CC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,cc=Symbol.for("react.element"),Js=Symbol.for("react.portal"),Zs=Symbol.for("react.fragment"),zv=Symbol.for("react.strict_mode"),fg=Symbol.for("react.profiler"),kC=Symbol.for("react.provider"),AC=Symbol.for("react.context"),Bv=Symbol.for("react.forward_ref"),hg=Symbol.for("react.suspense"),pg=Symbol.for("react.suspense_list"),Hv=Symbol.for("react.memo"),Kr=Symbol.for("react.lazy"),OC=Symbol.for("react.offscreen"),l_=Symbol.iterator;function xa(e){return e===null||typeof e!="object"?null:(e=l_&&e[l_]||e["@@iterator"],typeof e=="function"?e:null)}var We=Object.assign,Lp;function ja(e){if(Lp===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Lp=t&&t[1]||""}return`
`+Lp+e}var Fp=!1;function Vp(e,t){if(!e||Fp)return"";Fp=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{Fp=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ja(e):""}function fN(e){switch(e.tag){case 5:return ja(e.type);case 16:return ja("Lazy");case 13:return ja("Suspense");case 19:return ja("SuspenseList");case 0:case 2:case 15:return e=Vp(e.type,!1),e;case 11:return e=Vp(e.type.render,!1),e;case 1:return e=Vp(e.type,!0),e;default:return""}}function mg(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zs:return"Fragment";case Js:return"Portal";case fg:return"Profiler";case zv:return"StrictMode";case hg:return"Suspense";case pg:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case AC:return(e.displayName||"Context")+".Consumer";case kC:return(e._context.displayName||"Context")+".Provider";case Bv:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Hv:return t=e.displayName||null,t!==null?t:mg(e.type)||"Memo";case Kr:t=e._payload,e=e._init;try{return mg(e(t))}catch{}}return null}function hN(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mg(t);case 8:return t===zv?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ti(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function PC(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function pN(e){var t=PC(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function dc(e){e._valueTracker||(e._valueTracker=pN(e))}function DC(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=PC(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function xd(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function gg(e,t){var n=t.checked;return We({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function u_(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ti(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function RC(e,t){t=t.checked,t!=null&&Uv(e,"checked",t,!1)}function yg(e,t){RC(e,t);var n=Ti(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?vg(e,t.type,n):t.hasOwnProperty("defaultValue")&&vg(e,t.type,Ti(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function c_(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function vg(e,t,n){(t!=="number"||xd(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ua=Array.isArray;function _o(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ti(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function wg(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return We({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function d_(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(Ua(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ti(n)}}function $C(e,t){var n=Ti(t.value),r=Ti(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function f_(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function NC(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _g(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?NC(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fc,MC=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(fc=fc||document.createElement("div"),fc.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=fc.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Tl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Xa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mN=["Webkit","ms","Moz","O"];Object.keys(Xa).forEach(function(e){mN.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Xa[t]=Xa[e]})});function LC(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Xa.hasOwnProperty(e)&&Xa[e]?(""+t).trim():t+"px"}function FC(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=LC(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var gN=We({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sg(e,t){if(t){if(gN[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function xg(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Eg=null;function Wv(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bg=null,So=null,xo=null;function h_(e){if(e=_u(e)){if(typeof bg!="function")throw Error(j(280));var t=e.stateNode;t&&(t=eh(t),bg(e.stateNode,e.type,t))}}function VC(e){So?xo?xo.push(e):xo=[e]:So=e}function jC(){if(So){var e=So,t=xo;if(xo=So=null,h_(e),t)for(e=0;e<t.length;e++)h_(t[e])}}function UC(e,t){return e(t)}function zC(){}var jp=!1;function BC(e,t,n){if(jp)return e(t,n);jp=!0;try{return UC(e,t,n)}finally{jp=!1,(So!==null||xo!==null)&&(zC(),jC())}}function Cl(e,t){var n=e.stateNode;if(n===null)return null;var r=eh(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var Tg=!1;if(kr)try{var Ea={};Object.defineProperty(Ea,"passive",{get:function(){Tg=!0}}),window.addEventListener("test",Ea,Ea),window.removeEventListener("test",Ea,Ea)}catch{Tg=!1}function yN(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ja=!1,Ed=null,bd=!1,Cg=null,vN={onError:function(e){Ja=!0,Ed=e}};function wN(e,t,n,r,i,s,o,a,l){Ja=!1,Ed=null,yN.apply(vN,arguments)}function _N(e,t,n,r,i,s,o,a,l){if(wN.apply(this,arguments),Ja){if(Ja){var u=Ed;Ja=!1,Ed=null}else throw Error(j(198));bd||(bd=!0,Cg=u)}}function Rs(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function HC(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p_(e){if(Rs(e)!==e)throw Error(j(188))}function SN(e){var t=e.alternate;if(!t){if(t=Rs(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return p_(i),e;if(s===r)return p_(i),t;s=s.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function WC(e){return e=SN(e),e!==null?qC(e):null}function qC(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=qC(e);if(t!==null)return t;e=e.sibling}return null}var GC=un.unstable_scheduleCallback,m_=un.unstable_cancelCallback,xN=un.unstable_shouldYield,EN=un.unstable_requestPaint,Xe=un.unstable_now,bN=un.unstable_getCurrentPriorityLevel,qv=un.unstable_ImmediatePriority,KC=un.unstable_UserBlockingPriority,Td=un.unstable_NormalPriority,TN=un.unstable_LowPriority,YC=un.unstable_IdlePriority,Qf=null,sr=null;function CN(e){if(sr&&typeof sr.onCommitFiberRoot=="function")try{sr.onCommitFiberRoot(Qf,e,void 0,(e.current.flags&128)===128)}catch{}}var Hn=Math.clz32?Math.clz32:AN,IN=Math.log,kN=Math.LN2;function AN(e){return e>>>=0,e===0?32:31-(IN(e)/kN|0)|0}var hc=64,pc=4194304;function za(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Cd(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=za(a):(s&=o,s!==0&&(r=za(s)))}else o=n&~i,o!==0?r=za(o):s!==0&&(r=za(s));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Hn(t),i=1<<n,r|=e[n],t&=~i;return r}function ON(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function PN(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Hn(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=ON(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function Ig(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function QC(){var e=hc;return hc<<=1,(hc&4194240)===0&&(hc=64),e}function Up(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vu(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Hn(t),e[t]=n}function DN(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Hn(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Gv(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Hn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Ie=0;function XC(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var JC,Kv,ZC,eI,tI,kg=!1,mc=[],ui=null,ci=null,di=null,Il=new Map,kl=new Map,Xr=[],RN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function g_(e,t){switch(e){case"focusin":case"focusout":ui=null;break;case"dragenter":case"dragleave":ci=null;break;case"mouseover":case"mouseout":di=null;break;case"pointerover":case"pointerout":Il.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":kl.delete(t.pointerId)}}function ba(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=_u(t),t!==null&&Kv(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function $N(e,t,n,r,i){switch(t){case"focusin":return ui=ba(ui,e,t,n,r,i),!0;case"dragenter":return ci=ba(ci,e,t,n,r,i),!0;case"mouseover":return di=ba(di,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Il.set(s,ba(Il.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,kl.set(s,ba(kl.get(s)||null,e,t,n,r,i)),!0}return!1}function nI(e){var t=es(e.target);if(t!==null){var n=Rs(t);if(n!==null){if(t=n.tag,t===13){if(t=HC(n),t!==null){e.blockedOn=t,tI(e.priority,function(){ZC(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ag(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Eg=r,n.target.dispatchEvent(r),Eg=null}else return t=_u(n),t!==null&&Kv(t),e.blockedOn=n,!1;t.shift()}return!0}function y_(e,t,n){Gc(e)&&n.delete(t)}function NN(){kg=!1,ui!==null&&Gc(ui)&&(ui=null),ci!==null&&Gc(ci)&&(ci=null),di!==null&&Gc(di)&&(di=null),Il.forEach(y_),kl.forEach(y_)}function Ta(e,t){e.blockedOn===t&&(e.blockedOn=null,kg||(kg=!0,un.unstable_scheduleCallback(un.unstable_NormalPriority,NN)))}function Al(e){function t(i){return Ta(i,e)}if(0<mc.length){Ta(mc[0],e);for(var n=1;n<mc.length;n++){var r=mc[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ui!==null&&Ta(ui,e),ci!==null&&Ta(ci,e),di!==null&&Ta(di,e),Il.forEach(t),kl.forEach(t),n=0;n<Xr.length;n++)r=Xr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Xr.length&&(n=Xr[0],n.blockedOn===null);)nI(n),n.blockedOn===null&&Xr.shift()}var Eo=Vr.ReactCurrentBatchConfig,Id=!0;function MN(e,t,n,r){var i=Ie,s=Eo.transition;Eo.transition=null;try{Ie=1,Yv(e,t,n,r)}finally{Ie=i,Eo.transition=s}}function LN(e,t,n,r){var i=Ie,s=Eo.transition;Eo.transition=null;try{Ie=4,Yv(e,t,n,r)}finally{Ie=i,Eo.transition=s}}function Yv(e,t,n,r){if(Id){var i=Ag(e,t,n,r);if(i===null)Xp(e,t,r,kd,n),g_(e,r);else if($N(i,e,t,n,r))r.stopPropagation();else if(g_(e,r),t&4&&-1<RN.indexOf(e)){for(;i!==null;){var s=_u(i);if(s!==null&&JC(s),s=Ag(e,t,n,r),s===null&&Xp(e,t,r,kd,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Xp(e,t,r,null,n)}}var kd=null;function Ag(e,t,n,r){if(kd=null,e=Wv(r),e=es(e),e!==null)if(t=Rs(e),t===null)e=null;else if(n=t.tag,n===13){if(e=HC(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return kd=e,null}function rI(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bN()){case qv:return 1;case KC:return 4;case Td:case TN:return 16;case YC:return 536870912;default:return 16}default:return 16}}var ri=null,Qv=null,Kc=null;function iI(){if(Kc)return Kc;var e,t=Qv,n=t.length,r,i="value"in ri?ri.value:ri.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Kc=i.slice(e,1<r?1-r:void 0)}function Yc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function gc(){return!0}function v_(){return!1}function pn(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?gc:v_,this.isPropagationStopped=v_,this}return We(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=gc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=gc)},persist:function(){},isPersistent:gc}),t}var ea={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xv=pn(ea),wu=We({},ea,{view:0,detail:0}),FN=pn(wu),zp,Bp,Ca,Xf=We({},wu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jv,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ca&&(Ca&&e.type==="mousemove"?(zp=e.screenX-Ca.screenX,Bp=e.screenY-Ca.screenY):Bp=zp=0,Ca=e),zp)},movementY:function(e){return"movementY"in e?e.movementY:Bp}}),w_=pn(Xf),VN=We({},Xf,{dataTransfer:0}),jN=pn(VN),UN=We({},wu,{relatedTarget:0}),Hp=pn(UN),zN=We({},ea,{animationName:0,elapsedTime:0,pseudoElement:0}),BN=pn(zN),HN=We({},ea,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),WN=pn(HN),qN=We({},ea,{data:0}),__=pn(qN),GN={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},KN={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},YN={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function QN(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=YN[e])?!!t[e]:!1}function Jv(){return QN}var XN=We({},wu,{key:function(e){if(e.key){var t=GN[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?KN[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jv,charCode:function(e){return e.type==="keypress"?Yc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),JN=pn(XN),ZN=We({},Xf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),S_=pn(ZN),eM=We({},wu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jv}),tM=pn(eM),nM=We({},ea,{propertyName:0,elapsedTime:0,pseudoElement:0}),rM=pn(nM),iM=We({},Xf,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sM=pn(iM),oM=[9,13,27,32],Zv=kr&&"CompositionEvent"in window,Za=null;kr&&"documentMode"in document&&(Za=document.documentMode);var aM=kr&&"TextEvent"in window&&!Za,sI=kr&&(!Zv||Za&&8<Za&&11>=Za),x_=String.fromCharCode(32),E_=!1;function oI(e,t){switch(e){case"keyup":return oM.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function aI(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var eo=!1;function lM(e,t){switch(e){case"compositionend":return aI(t);case"keypress":return t.which!==32?null:(E_=!0,x_);case"textInput":return e=t.data,e===x_&&E_?null:e;default:return null}}function uM(e,t){if(eo)return e==="compositionend"||!Zv&&oI(e,t)?(e=iI(),Kc=Qv=ri=null,eo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return sI&&t.locale!=="ko"?null:t.data;default:return null}}var cM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function b_(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!cM[e.type]:t==="textarea"}function lI(e,t,n,r){VC(r),t=Ad(t,"onChange"),0<t.length&&(n=new Xv("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var el=null,Ol=null;function dM(e){wI(e,0)}function Jf(e){var t=ro(e);if(DC(t))return e}function fM(e,t){if(e==="change")return t}var uI=!1;if(kr){var Wp;if(kr){var qp="oninput"in document;if(!qp){var T_=document.createElement("div");T_.setAttribute("oninput","return;"),qp=typeof T_.oninput=="function"}Wp=qp}else Wp=!1;uI=Wp&&(!document.documentMode||9<document.documentMode)}function C_(){el&&(el.detachEvent("onpropertychange",cI),Ol=el=null)}function cI(e){if(e.propertyName==="value"&&Jf(Ol)){var t=[];lI(t,Ol,e,Wv(e)),BC(dM,t)}}function hM(e,t,n){e==="focusin"?(C_(),el=t,Ol=n,el.attachEvent("onpropertychange",cI)):e==="focusout"&&C_()}function pM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Jf(Ol)}function mM(e,t){if(e==="click")return Jf(t)}function gM(e,t){if(e==="input"||e==="change")return Jf(t)}function yM(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Kn=typeof Object.is=="function"?Object.is:yM;function Pl(e,t){if(Kn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!dg.call(t,i)||!Kn(e[i],t[i]))return!1}return!0}function I_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function k_(e,t){var n=I_(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=I_(n)}}function dI(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?dI(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function fI(){for(var e=window,t=xd();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=xd(e.document)}return t}function e0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function vM(e){var t=fI(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dI(n.ownerDocument.documentElement,n)){if(r!==null&&e0(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=k_(n,s);var o=k_(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var wM=kr&&"documentMode"in document&&11>=document.documentMode,to=null,Og=null,tl=null,Pg=!1;function A_(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pg||to==null||to!==xd(r)||(r=to,"selectionStart"in r&&e0(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),tl&&Pl(tl,r)||(tl=r,r=Ad(Og,"onSelect"),0<r.length&&(t=new Xv("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=to)))}function yc(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var no={animationend:yc("Animation","AnimationEnd"),animationiteration:yc("Animation","AnimationIteration"),animationstart:yc("Animation","AnimationStart"),transitionend:yc("Transition","TransitionEnd")},Gp={},hI={};kr&&(hI=document.createElement("div").style,"AnimationEvent"in window||(delete no.animationend.animation,delete no.animationiteration.animation,delete no.animationstart.animation),"TransitionEvent"in window||delete no.transitionend.transition);function Zf(e){if(Gp[e])return Gp[e];if(!no[e])return e;var t=no[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in hI)return Gp[e]=t[n];return e}var pI=Zf("animationend"),mI=Zf("animationiteration"),gI=Zf("animationstart"),yI=Zf("transitionend"),vI=new Map,O_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ri(e,t){vI.set(e,t),Ds(t,[e])}for(var Kp=0;Kp<O_.length;Kp++){var Yp=O_[Kp],_M=Yp.toLowerCase(),SM=Yp[0].toUpperCase()+Yp.slice(1);Ri(_M,"on"+SM)}Ri(pI,"onAnimationEnd");Ri(mI,"onAnimationIteration");Ri(gI,"onAnimationStart");Ri("dblclick","onDoubleClick");Ri("focusin","onFocus");Ri("focusout","onBlur");Ri(yI,"onTransitionEnd");$o("onMouseEnter",["mouseout","mouseover"]);$o("onMouseLeave",["mouseout","mouseover"]);$o("onPointerEnter",["pointerout","pointerover"]);$o("onPointerLeave",["pointerout","pointerover"]);Ds("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ds("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ds("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ds("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ds("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ds("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ba="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xM=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ba));function P_(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,_N(r,t,void 0,e),e.currentTarget=null}function wI(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;P_(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;P_(i,a,u),s=l}}}if(bd)throw e=Cg,bd=!1,Cg=null,e}function Re(e,t){var n=t[Mg];n===void 0&&(n=t[Mg]=new Set);var r=e+"__bubble";n.has(r)||(_I(t,e,2,!1),n.add(r))}function Qp(e,t,n){var r=0;t&&(r|=4),_I(n,e,r,t)}var vc="_reactListening"+Math.random().toString(36).slice(2);function Dl(e){if(!e[vc]){e[vc]=!0,IC.forEach(function(n){n!=="selectionchange"&&(xM.has(n)||Qp(n,!1,e),Qp(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[vc]||(t[vc]=!0,Qp("selectionchange",!1,t))}}function _I(e,t,n,r){switch(rI(t)){case 1:var i=MN;break;case 4:i=LN;break;default:i=Yv}n=i.bind(null,t,n,e),i=void 0,!Tg||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Xp(e,t,n,r,i){var s=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=es(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}BC(function(){var u=s,c=Wv(n),d=[];e:{var f=vI.get(e);if(f!==void 0){var h=Xv,p=e;switch(e){case"keypress":if(Yc(n)===0)break e;case"keydown":case"keyup":h=JN;break;case"focusin":p="focus",h=Hp;break;case"focusout":p="blur",h=Hp;break;case"beforeblur":case"afterblur":h=Hp;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=w_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=jN;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=tM;break;case pI:case mI:case gI:h=BN;break;case yI:h=rM;break;case"scroll":h=FN;break;case"wheel":h=sM;break;case"copy":case"cut":case"paste":h=WN;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=S_}var y=(t&4)!==0,w=!y&&e==="scroll",v=y?f!==null?f+"Capture":null:f;y=[];for(var m=u,g;m!==null;){g=m;var _=g.stateNode;if(g.tag===5&&_!==null&&(g=_,v!==null&&(_=Cl(m,v),_!=null&&y.push(Rl(m,_,g)))),w)break;m=m.return}0<y.length&&(f=new h(f,p,null,n,c),d.push({event:f,listeners:y}))}}if((t&7)===0){e:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&n!==Eg&&(p=n.relatedTarget||n.fromElement)&&(es(p)||p[Ar]))break e;if((h||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,h?(p=n.relatedTarget||n.toElement,h=u,p=p?es(p):null,p!==null&&(w=Rs(p),p!==w||p.tag!==5&&p.tag!==6)&&(p=null)):(h=null,p=u),h!==p)){if(y=w_,_="onMouseLeave",v="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(y=S_,_="onPointerLeave",v="onPointerEnter",m="pointer"),w=h==null?f:ro(h),g=p==null?f:ro(p),f=new y(_,m+"leave",h,n,c),f.target=w,f.relatedTarget=g,_=null,es(c)===u&&(y=new y(v,m+"enter",p,n,c),y.target=g,y.relatedTarget=w,_=y),w=_,h&&p)t:{for(y=h,v=p,m=0,g=y;g;g=qs(g))m++;for(g=0,_=v;_;_=qs(_))g++;for(;0<m-g;)y=qs(y),m--;for(;0<g-m;)v=qs(v),g--;for(;m--;){if(y===v||v!==null&&y===v.alternate)break t;y=qs(y),v=qs(v)}y=null}else y=null;h!==null&&D_(d,f,h,y,!1),p!==null&&w!==null&&D_(d,w,p,y,!0)}}e:{if(f=u?ro(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var E=fM;else if(b_(f))if(uI)E=gM;else{E=pM;var I=hM}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=mM);if(E&&(E=E(e,u))){lI(d,E,n,c);break e}I&&I(e,f,u),e==="focusout"&&(I=f._wrapperState)&&I.controlled&&f.type==="number"&&vg(f,"number",f.value)}switch(I=u?ro(u):window,e){case"focusin":(b_(I)||I.contentEditable==="true")&&(to=I,Og=u,tl=null);break;case"focusout":tl=Og=to=null;break;case"mousedown":Pg=!0;break;case"contextmenu":case"mouseup":case"dragend":Pg=!1,A_(d,n,c);break;case"selectionchange":if(wM)break;case"keydown":case"keyup":A_(d,n,c)}var C;if(Zv)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else eo?oI(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(sI&&n.locale!=="ko"&&(eo||O!=="onCompositionStart"?O==="onCompositionEnd"&&eo&&(C=iI()):(ri=c,Qv="value"in ri?ri.value:ri.textContent,eo=!0)),I=Ad(u,O),0<I.length&&(O=new __(O,e,null,n,c),d.push({event:O,listeners:I}),C?O.data=C:(C=aI(n),C!==null&&(O.data=C)))),(C=aM?lM(e,n):uM(e,n))&&(u=Ad(u,"onBeforeInput"),0<u.length&&(c=new __("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=C))}wI(d,t)})}function Rl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ad(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Cl(e,n),s!=null&&r.unshift(Rl(e,s,i)),s=Cl(e,t),s!=null&&r.push(Rl(e,s,i))),e=e.return}return r}function qs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function D_(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Cl(n,s),l!=null&&o.unshift(Rl(n,l,a))):i||(l=Cl(n,s),l!=null&&o.push(Rl(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var EM=/\r\n?/g,bM=/\u0000|\uFFFD/g;function R_(e){return(typeof e=="string"?e:""+e).replace(EM,`
`).replace(bM,"")}function wc(e,t,n){if(t=R_(t),R_(e)!==t&&n)throw Error(j(425))}function Od(){}var Dg=null,Rg=null;function $g(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ng=typeof setTimeout=="function"?setTimeout:void 0,TM=typeof clearTimeout=="function"?clearTimeout:void 0,$_=typeof Promise=="function"?Promise:void 0,CM=typeof queueMicrotask=="function"?queueMicrotask:typeof $_<"u"?function(e){return $_.resolve(null).then(e).catch(IM)}:Ng;function IM(e){setTimeout(function(){throw e})}function Jp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Al(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Al(t)}function fi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function N_(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ta=Math.random().toString(36).slice(2),tr="__reactFiber$"+ta,$l="__reactProps$"+ta,Ar="__reactContainer$"+ta,Mg="__reactEvents$"+ta,kM="__reactListeners$"+ta,AM="__reactHandles$"+ta;function es(e){var t=e[tr];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ar]||n[tr]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=N_(e);e!==null;){if(n=e[tr])return n;e=N_(e)}return t}e=n,n=e.parentNode}return null}function _u(e){return e=e[tr]||e[Ar],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ro(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function eh(e){return e[$l]||null}var Lg=[],io=-1;function $i(e){return{current:e}}function Fe(e){0>io||(e.current=Lg[io],Lg[io]=null,io--)}function Pe(e,t){io++,Lg[io]=e.current,e.current=t}var Ci={},Rt=$i(Ci),Xt=$i(!1),gs=Ci;function No(e,t){var n=e.type.contextTypes;if(!n)return Ci;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Jt(e){return e=e.childContextTypes,e!=null}function Pd(){Fe(Xt),Fe(Rt)}function M_(e,t,n){if(Rt.current!==Ci)throw Error(j(168));Pe(Rt,t),Pe(Xt,n)}function SI(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(j(108,hN(e)||"Unknown",i));return We({},n,r)}function Dd(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ci,gs=Rt.current,Pe(Rt,e),Pe(Xt,Xt.current),!0}function L_(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=SI(e,t,gs),r.__reactInternalMemoizedMergedChildContext=e,Fe(Xt),Fe(Rt),Pe(Rt,e)):Fe(Xt),Pe(Xt,n)}var yr=null,th=!1,Zp=!1;function xI(e){yr===null?yr=[e]:yr.push(e)}function OM(e){th=!0,xI(e)}function Ni(){if(!Zp&&yr!==null){Zp=!0;var e=0,t=Ie;try{var n=yr;for(Ie=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}yr=null,th=!1}catch(i){throw yr!==null&&(yr=yr.slice(e+1)),GC(qv,Ni),i}finally{Ie=t,Zp=!1}}return null}var so=[],oo=0,Rd=null,$d=0,wn=[],_n=0,ys=null,wr=1,_r="";function Wi(e,t){so[oo++]=$d,so[oo++]=Rd,Rd=e,$d=t}function EI(e,t,n){wn[_n++]=wr,wn[_n++]=_r,wn[_n++]=ys,ys=e;var r=wr;e=_r;var i=32-Hn(r)-1;r&=~(1<<i),n+=1;var s=32-Hn(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,wr=1<<32-Hn(t)+i|n<<i|r,_r=s+e}else wr=1<<s|n<<i|r,_r=e}function t0(e){e.return!==null&&(Wi(e,1),EI(e,1,0))}function n0(e){for(;e===Rd;)Rd=so[--oo],so[oo]=null,$d=so[--oo],so[oo]=null;for(;e===ys;)ys=wn[--_n],wn[_n]=null,_r=wn[--_n],wn[_n]=null,wr=wn[--_n],wn[_n]=null}var on=null,rn=null,Ue=!1,Un=null;function bI(e,t){var n=Sn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function F_(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,on=e,rn=fi(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,on=e,rn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ys!==null?{id:wr,overflow:_r}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Sn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,on=e,rn=null,!0):!1;default:return!1}}function Fg(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Vg(e){if(Ue){var t=rn;if(t){var n=t;if(!F_(e,t)){if(Fg(e))throw Error(j(418));t=fi(n.nextSibling);var r=on;t&&F_(e,t)?bI(r,n):(e.flags=e.flags&-4097|2,Ue=!1,on=e)}}else{if(Fg(e))throw Error(j(418));e.flags=e.flags&-4097|2,Ue=!1,on=e}}}function V_(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;on=e}function _c(e){if(e!==on)return!1;if(!Ue)return V_(e),Ue=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!$g(e.type,e.memoizedProps)),t&&(t=rn)){if(Fg(e))throw TI(),Error(j(418));for(;t;)bI(e,t),t=fi(t.nextSibling)}if(V_(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){rn=fi(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}rn=null}}else rn=on?fi(e.stateNode.nextSibling):null;return!0}function TI(){for(var e=rn;e;)e=fi(e.nextSibling)}function Mo(){rn=on=null,Ue=!1}function r0(e){Un===null?Un=[e]:Un.push(e)}var PM=Vr.ReactCurrentBatchConfig;function Vn(e,t){if(e&&e.defaultProps){t=We({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Nd=$i(null),Md=null,ao=null,i0=null;function s0(){i0=ao=Md=null}function o0(e){var t=Nd.current;Fe(Nd),e._currentValue=t}function jg(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function bo(e,t){Md=e,i0=ao=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Qt=!0),e.firstContext=null)}function An(e){var t=e._currentValue;if(i0!==e)if(e={context:e,memoizedValue:t,next:null},ao===null){if(Md===null)throw Error(j(308));ao=e,Md.dependencies={lanes:0,firstContext:e}}else ao=ao.next=e;return t}var ts=null;function a0(e){ts===null?ts=[e]:ts.push(e)}function CI(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,a0(t)):(n.next=i.next,i.next=n),t.interleaved=n,Or(e,r)}function Or(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Yr=!1;function l0(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function II(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function br(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function hi(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(xe&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Or(e,n)}return i=r.interleaved,i===null?(t.next=t,a0(r)):(t.next=i.next,i.next=t),r.interleaved=t,Or(e,n)}function Qc(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gv(e,n)}}function j_(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ld(e,t,n,r){var i=e.updateQueue;Yr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,h=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var p=e,y=a;switch(f=t,h=n,y.tag){case 1:if(p=y.payload,typeof p=="function"){d=p.call(h,d,f);break e}d=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=y.payload,f=typeof p=="function"?p.call(h,d,f):p,f==null)break e;d=We({},d,f);break e;case 2:Yr=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else h={eventTime:h,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=h,l=d):c=c.next=h,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);ws|=o,e.lanes=o,e.memoizedState=d}}function U_(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var kI=new CC.Component().refs;function Ug(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:We({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var nh={isMounted:function(e){return(e=e._reactInternals)?Rs(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=zt(),i=mi(e),s=br(r,i);s.payload=t,n!=null&&(s.callback=n),t=hi(e,s,i),t!==null&&(Wn(t,e,i,r),Qc(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=zt(),i=mi(e),s=br(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=hi(e,s,i),t!==null&&(Wn(t,e,i,r),Qc(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=zt(),r=mi(e),i=br(n,r);i.tag=2,t!=null&&(i.callback=t),t=hi(e,i,r),t!==null&&(Wn(t,e,r,n),Qc(t,e,r))}};function z_(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Pl(n,r)||!Pl(i,s):!0}function AI(e,t,n){var r=!1,i=Ci,s=t.contextType;return typeof s=="object"&&s!==null?s=An(s):(i=Jt(t)?gs:Rt.current,r=t.contextTypes,s=(r=r!=null)?No(e,i):Ci),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=nh,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function B_(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&nh.enqueueReplaceState(t,t.state,null)}function zg(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=kI,l0(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=An(s):(s=Jt(t)?gs:Rt.current,i.context=No(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Ug(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&nh.enqueueReplaceState(i,i.state,null),Ld(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ia(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===kI&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function Sc(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function H_(e){var t=e._init;return t(e._payload)}function OI(e){function t(v,m){if(e){var g=v.deletions;g===null?(v.deletions=[m],v.flags|=16):g.push(m)}}function n(v,m){if(!e)return null;for(;m!==null;)t(v,m),m=m.sibling;return null}function r(v,m){for(v=new Map;m!==null;)m.key!==null?v.set(m.key,m):v.set(m.index,m),m=m.sibling;return v}function i(v,m){return v=gi(v,m),v.index=0,v.sibling=null,v}function s(v,m,g){return v.index=g,e?(g=v.alternate,g!==null?(g=g.index,g<m?(v.flags|=2,m):g):(v.flags|=2,m)):(v.flags|=1048576,m)}function o(v){return e&&v.alternate===null&&(v.flags|=2),v}function a(v,m,g,_){return m===null||m.tag!==6?(m=om(g,v.mode,_),m.return=v,m):(m=i(m,g),m.return=v,m)}function l(v,m,g,_){var E=g.type;return E===Zs?c(v,m,g.props.children,_,g.key):m!==null&&(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Kr&&H_(E)===m.type)?(_=i(m,g.props),_.ref=Ia(v,m,g),_.return=v,_):(_=nd(g.type,g.key,g.props,null,v.mode,_),_.ref=Ia(v,m,g),_.return=v,_)}function u(v,m,g,_){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=am(g,v.mode,_),m.return=v,m):(m=i(m,g.children||[]),m.return=v,m)}function c(v,m,g,_,E){return m===null||m.tag!==7?(m=ds(g,v.mode,_,E),m.return=v,m):(m=i(m,g),m.return=v,m)}function d(v,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=om(""+m,v.mode,g),m.return=v,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case cc:return g=nd(m.type,m.key,m.props,null,v.mode,g),g.ref=Ia(v,null,m),g.return=v,g;case Js:return m=am(m,v.mode,g),m.return=v,m;case Kr:var _=m._init;return d(v,_(m._payload),g)}if(Ua(m)||xa(m))return m=ds(m,v.mode,g,null),m.return=v,m;Sc(v,m)}return null}function f(v,m,g,_){var E=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return E!==null?null:a(v,m,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case cc:return g.key===E?l(v,m,g,_):null;case Js:return g.key===E?u(v,m,g,_):null;case Kr:return E=g._init,f(v,m,E(g._payload),_)}if(Ua(g)||xa(g))return E!==null?null:c(v,m,g,_,null);Sc(v,g)}return null}function h(v,m,g,_,E){if(typeof _=="string"&&_!==""||typeof _=="number")return v=v.get(g)||null,a(m,v,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case cc:return v=v.get(_.key===null?g:_.key)||null,l(m,v,_,E);case Js:return v=v.get(_.key===null?g:_.key)||null,u(m,v,_,E);case Kr:var I=_._init;return h(v,m,g,I(_._payload),E)}if(Ua(_)||xa(_))return v=v.get(g)||null,c(m,v,_,E,null);Sc(m,_)}return null}function p(v,m,g,_){for(var E=null,I=null,C=m,O=m=0,z=null;C!==null&&O<g.length;O++){C.index>O?(z=C,C=null):z=C.sibling;var F=f(v,C,g[O],_);if(F===null){C===null&&(C=z);break}e&&C&&F.alternate===null&&t(v,C),m=s(F,m,O),I===null?E=F:I.sibling=F,I=F,C=z}if(O===g.length)return n(v,C),Ue&&Wi(v,O),E;if(C===null){for(;O<g.length;O++)C=d(v,g[O],_),C!==null&&(m=s(C,m,O),I===null?E=C:I.sibling=C,I=C);return Ue&&Wi(v,O),E}for(C=r(v,C);O<g.length;O++)z=h(C,v,O,g[O],_),z!==null&&(e&&z.alternate!==null&&C.delete(z.key===null?O:z.key),m=s(z,m,O),I===null?E=z:I.sibling=z,I=z);return e&&C.forEach(function(K){return t(v,K)}),Ue&&Wi(v,O),E}function y(v,m,g,_){var E=xa(g);if(typeof E!="function")throw Error(j(150));if(g=E.call(g),g==null)throw Error(j(151));for(var I=E=null,C=m,O=m=0,z=null,F=g.next();C!==null&&!F.done;O++,F=g.next()){C.index>O?(z=C,C=null):z=C.sibling;var K=f(v,C,F.value,_);if(K===null){C===null&&(C=z);break}e&&C&&K.alternate===null&&t(v,C),m=s(K,m,O),I===null?E=K:I.sibling=K,I=K,C=z}if(F.done)return n(v,C),Ue&&Wi(v,O),E;if(C===null){for(;!F.done;O++,F=g.next())F=d(v,F.value,_),F!==null&&(m=s(F,m,O),I===null?E=F:I.sibling=F,I=F);return Ue&&Wi(v,O),E}for(C=r(v,C);!F.done;O++,F=g.next())F=h(C,v,O,F.value,_),F!==null&&(e&&F.alternate!==null&&C.delete(F.key===null?O:F.key),m=s(F,m,O),I===null?E=F:I.sibling=F,I=F);return e&&C.forEach(function(Y){return t(v,Y)}),Ue&&Wi(v,O),E}function w(v,m,g,_){if(typeof g=="object"&&g!==null&&g.type===Zs&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case cc:e:{for(var E=g.key,I=m;I!==null;){if(I.key===E){if(E=g.type,E===Zs){if(I.tag===7){n(v,I.sibling),m=i(I,g.props.children),m.return=v,v=m;break e}}else if(I.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Kr&&H_(E)===I.type){n(v,I.sibling),m=i(I,g.props),m.ref=Ia(v,I,g),m.return=v,v=m;break e}n(v,I);break}else t(v,I);I=I.sibling}g.type===Zs?(m=ds(g.props.children,v.mode,_,g.key),m.return=v,v=m):(_=nd(g.type,g.key,g.props,null,v.mode,_),_.ref=Ia(v,m,g),_.return=v,v=_)}return o(v);case Js:e:{for(I=g.key;m!==null;){if(m.key===I)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){n(v,m.sibling),m=i(m,g.children||[]),m.return=v,v=m;break e}else{n(v,m);break}else t(v,m);m=m.sibling}m=am(g,v.mode,_),m.return=v,v=m}return o(v);case Kr:return I=g._init,w(v,m,I(g._payload),_)}if(Ua(g))return p(v,m,g,_);if(xa(g))return y(v,m,g,_);Sc(v,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(n(v,m.sibling),m=i(m,g),m.return=v,v=m):(n(v,m),m=om(g,v.mode,_),m.return=v,v=m),o(v)):n(v,m)}return w}var Lo=OI(!0),PI=OI(!1),Su={},or=$i(Su),Nl=$i(Su),Ml=$i(Su);function ns(e){if(e===Su)throw Error(j(174));return e}function u0(e,t){switch(Pe(Ml,t),Pe(Nl,e),Pe(or,Su),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:_g(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=_g(t,e)}Fe(or),Pe(or,t)}function Fo(){Fe(or),Fe(Nl),Fe(Ml)}function DI(e){ns(Ml.current);var t=ns(or.current),n=_g(t,e.type);t!==n&&(Pe(Nl,e),Pe(or,n))}function c0(e){Nl.current===e&&(Fe(or),Fe(Nl))}var Be=$i(0);function Fd(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var em=[];function d0(){for(var e=0;e<em.length;e++)em[e]._workInProgressVersionPrimary=null;em.length=0}var Xc=Vr.ReactCurrentDispatcher,tm=Vr.ReactCurrentBatchConfig,vs=0,He=null,rt=null,ct=null,Vd=!1,nl=!1,Ll=0,DM=0;function Tt(){throw Error(j(321))}function f0(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Kn(e[n],t[n]))return!1;return!0}function h0(e,t,n,r,i,s){if(vs=s,He=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xc.current=e===null||e.memoizedState===null?MM:LM,e=n(r,i),nl){s=0;do{if(nl=!1,Ll=0,25<=s)throw Error(j(301));s+=1,ct=rt=null,t.updateQueue=null,Xc.current=FM,e=n(r,i)}while(nl)}if(Xc.current=jd,t=rt!==null&&rt.next!==null,vs=0,ct=rt=He=null,Vd=!1,t)throw Error(j(300));return e}function p0(){var e=Ll!==0;return Ll=0,e}function Zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ct===null?He.memoizedState=ct=e:ct=ct.next=e,ct}function On(){if(rt===null){var e=He.alternate;e=e!==null?e.memoizedState:null}else e=rt.next;var t=ct===null?He.memoizedState:ct.next;if(t!==null)ct=t,rt=e;else{if(e===null)throw Error(j(310));rt=e,e={memoizedState:rt.memoizedState,baseState:rt.baseState,baseQueue:rt.baseQueue,queue:rt.queue,next:null},ct===null?He.memoizedState=ct=e:ct=ct.next=e}return ct}function Fl(e,t){return typeof t=="function"?t(e):t}function nm(e){var t=On(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=rt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((vs&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,He.lanes|=c,ws|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Kn(r,t.memoizedState)||(Qt=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,He.lanes|=s,ws|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function rm(e){var t=On(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Kn(s,t.memoizedState)||(Qt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function RI(){}function $I(e,t){var n=He,r=On(),i=t(),s=!Kn(r.memoizedState,i);if(s&&(r.memoizedState=i,Qt=!0),r=r.queue,m0(LI.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||ct!==null&&ct.memoizedState.tag&1){if(n.flags|=2048,Vl(9,MI.bind(null,n,r,i,t),void 0,null),ft===null)throw Error(j(349));(vs&30)!==0||NI(n,t,i)}return i}function NI(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=He.updateQueue,t===null?(t={lastEffect:null,stores:null},He.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function MI(e,t,n,r){t.value=n,t.getSnapshot=r,FI(t)&&VI(e)}function LI(e,t,n){return n(function(){FI(t)&&VI(e)})}function FI(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Kn(e,n)}catch{return!0}}function VI(e){var t=Or(e,1);t!==null&&Wn(t,e,1,-1)}function W_(e){var t=Zn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fl,lastRenderedState:e},t.queue=e,e=e.dispatch=NM.bind(null,He,e),[t.memoizedState,e]}function Vl(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=He.updateQueue,t===null?(t={lastEffect:null,stores:null},He.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function jI(){return On().memoizedState}function Jc(e,t,n,r){var i=Zn();He.flags|=e,i.memoizedState=Vl(1|t,n,void 0,r===void 0?null:r)}function rh(e,t,n,r){var i=On();r=r===void 0?null:r;var s=void 0;if(rt!==null){var o=rt.memoizedState;if(s=o.destroy,r!==null&&f0(r,o.deps)){i.memoizedState=Vl(t,n,s,r);return}}He.flags|=e,i.memoizedState=Vl(1|t,n,s,r)}function q_(e,t){return Jc(8390656,8,e,t)}function m0(e,t){return rh(2048,8,e,t)}function UI(e,t){return rh(4,2,e,t)}function zI(e,t){return rh(4,4,e,t)}function BI(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function HI(e,t,n){return n=n!=null?n.concat([e]):null,rh(4,4,BI.bind(null,t,e),n)}function g0(){}function WI(e,t){var n=On();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&f0(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function qI(e,t){var n=On();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&f0(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function GI(e,t,n){return(vs&21)===0?(e.baseState&&(e.baseState=!1,Qt=!0),e.memoizedState=n):(Kn(n,t)||(n=QC(),He.lanes|=n,ws|=n,e.baseState=!0),t)}function RM(e,t){var n=Ie;Ie=n!==0&&4>n?n:4,e(!0);var r=tm.transition;tm.transition={};try{e(!1),t()}finally{Ie=n,tm.transition=r}}function KI(){return On().memoizedState}function $M(e,t,n){var r=mi(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},YI(e))QI(t,n);else if(n=CI(e,t,n,r),n!==null){var i=zt();Wn(n,e,r,i),XI(n,t,r)}}function NM(e,t,n){var r=mi(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(YI(e))QI(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Kn(a,o)){var l=t.interleaved;l===null?(i.next=i,a0(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=CI(e,t,i,r),n!==null&&(i=zt(),Wn(n,e,r,i),XI(n,t,r))}}function YI(e){var t=e.alternate;return e===He||t!==null&&t===He}function QI(e,t){nl=Vd=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function XI(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gv(e,n)}}var jd={readContext:An,useCallback:Tt,useContext:Tt,useEffect:Tt,useImperativeHandle:Tt,useInsertionEffect:Tt,useLayoutEffect:Tt,useMemo:Tt,useReducer:Tt,useRef:Tt,useState:Tt,useDebugValue:Tt,useDeferredValue:Tt,useTransition:Tt,useMutableSource:Tt,useSyncExternalStore:Tt,useId:Tt,unstable_isNewReconciler:!1},MM={readContext:An,useCallback:function(e,t){return Zn().memoizedState=[e,t===void 0?null:t],e},useContext:An,useEffect:q_,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Jc(4194308,4,BI.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Jc(4194308,4,e,t)},useInsertionEffect:function(e,t){return Jc(4,2,e,t)},useMemo:function(e,t){var n=Zn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Zn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=$M.bind(null,He,e),[r.memoizedState,e]},useRef:function(e){var t=Zn();return e={current:e},t.memoizedState=e},useState:W_,useDebugValue:g0,useDeferredValue:function(e){return Zn().memoizedState=e},useTransition:function(){var e=W_(!1),t=e[0];return e=RM.bind(null,e[1]),Zn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=He,i=Zn();if(Ue){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),ft===null)throw Error(j(349));(vs&30)!==0||NI(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,q_(LI.bind(null,r,s,e),[e]),r.flags|=2048,Vl(9,MI.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Zn(),t=ft.identifierPrefix;if(Ue){var n=_r,r=wr;n=(r&~(1<<32-Hn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ll++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=DM++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},LM={readContext:An,useCallback:WI,useContext:An,useEffect:m0,useImperativeHandle:HI,useInsertionEffect:UI,useLayoutEffect:zI,useMemo:qI,useReducer:nm,useRef:jI,useState:function(){return nm(Fl)},useDebugValue:g0,useDeferredValue:function(e){var t=On();return GI(t,rt.memoizedState,e)},useTransition:function(){var e=nm(Fl)[0],t=On().memoizedState;return[e,t]},useMutableSource:RI,useSyncExternalStore:$I,useId:KI,unstable_isNewReconciler:!1},FM={readContext:An,useCallback:WI,useContext:An,useEffect:m0,useImperativeHandle:HI,useInsertionEffect:UI,useLayoutEffect:zI,useMemo:qI,useReducer:rm,useRef:jI,useState:function(){return rm(Fl)},useDebugValue:g0,useDeferredValue:function(e){var t=On();return rt===null?t.memoizedState=e:GI(t,rt.memoizedState,e)},useTransition:function(){var e=rm(Fl)[0],t=On().memoizedState;return[e,t]},useMutableSource:RI,useSyncExternalStore:$I,useId:KI,unstable_isNewReconciler:!1};function Vo(e,t){try{var n="",r=t;do n+=fN(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function im(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Bg(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var VM=typeof WeakMap=="function"?WeakMap:Map;function JI(e,t,n){n=br(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){zd||(zd=!0,Zg=r),Bg(e,t)},n}function ZI(e,t,n){n=br(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Bg(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Bg(e,t),typeof r!="function"&&(pi===null?pi=new Set([this]):pi.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function G_(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new VM;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=ZM.bind(null,e,t,n),t.then(e,e))}function K_(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Y_(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=br(-1,1),t.tag=2,hi(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var jM=Vr.ReactCurrentOwner,Qt=!1;function Ft(e,t,n,r){t.child=e===null?PI(t,null,n,r):Lo(t,e.child,n,r)}function Q_(e,t,n,r,i){n=n.render;var s=t.ref;return bo(t,i),r=h0(e,t,n,r,s,i),n=p0(),e!==null&&!Qt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Pr(e,t,i)):(Ue&&n&&t0(t),t.flags|=1,Ft(e,t,r,i),t.child)}function X_(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!b0(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,ek(e,t,s,r,i)):(e=nd(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,(e.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Pl,n(o,r)&&e.ref===t.ref)return Pr(e,t,i)}return t.flags|=1,e=gi(s,r),e.ref=t.ref,e.return=t,t.child=e}function ek(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Pl(s,r)&&e.ref===t.ref)if(Qt=!1,t.pendingProps=r=s,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Qt=!0);else return t.lanes=e.lanes,Pr(e,t,i)}return Hg(e,t,n,r,i)}function tk(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pe(uo,tn),tn|=n;else{if((n&1073741824)===0)return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Pe(uo,tn),tn|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Pe(uo,tn),tn|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Pe(uo,tn),tn|=r;return Ft(e,t,i,n),t.child}function nk(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Hg(e,t,n,r,i){var s=Jt(n)?gs:Rt.current;return s=No(t,s),bo(t,i),n=h0(e,t,n,r,s,i),r=p0(),e!==null&&!Qt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Pr(e,t,i)):(Ue&&r&&t0(t),t.flags|=1,Ft(e,t,n,i),t.child)}function J_(e,t,n,r,i){if(Jt(n)){var s=!0;Dd(t)}else s=!1;if(bo(t,i),t.stateNode===null)Zc(e,t),AI(t,n,r),zg(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=An(u):(u=Jt(n)?gs:Rt.current,u=No(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&B_(t,o,r,u),Yr=!1;var f=t.memoizedState;o.state=f,Ld(t,r,o,i),l=t.memoizedState,a!==r||f!==l||Xt.current||Yr?(typeof c=="function"&&(Ug(t,n,c,r),l=t.memoizedState),(a=Yr||z_(t,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,II(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Vn(t.type,a),o.props=u,d=t.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=An(l):(l=Jt(n)?gs:Rt.current,l=No(t,l));var h=n.getDerivedStateFromProps;(c=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&B_(t,o,r,l),Yr=!1,f=t.memoizedState,o.state=f,Ld(t,r,o,i);var p=t.memoizedState;a!==d||f!==p||Xt.current||Yr?(typeof h=="function"&&(Ug(t,n,h,r),p=t.memoizedState),(u=Yr||z_(t,n,u,r,f,p,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,p,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,p,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),o.props=r,o.state=p,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Wg(e,t,n,r,s,i)}function Wg(e,t,n,r,i,s){nk(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&L_(t,n,!1),Pr(e,t,s);r=t.stateNode,jM.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Lo(t,e.child,null,s),t.child=Lo(t,null,a,s)):Ft(e,t,a,s),t.memoizedState=r.state,i&&L_(t,n,!0),t.child}function rk(e){var t=e.stateNode;t.pendingContext?M_(e,t.pendingContext,t.pendingContext!==t.context):t.context&&M_(e,t.context,!1),u0(e,t.containerInfo)}function Z_(e,t,n,r,i){return Mo(),r0(i),t.flags|=256,Ft(e,t,n,r),t.child}var qg={dehydrated:null,treeContext:null,retryLane:0};function Gg(e){return{baseLanes:e,cachePool:null,transitions:null}}function ik(e,t,n){var r=t.pendingProps,i=Be.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Pe(Be,i&1),e===null)return Vg(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=oh(o,r,0,null),e=ds(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Gg(n),t.memoizedState=qg,e):y0(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return UM(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=gi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=gi(a,s):(s=ds(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Gg(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=qg,r}return s=e.child,e=s.sibling,r=gi(s,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function y0(e,t){return t=oh({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function xc(e,t,n,r){return r!==null&&r0(r),Lo(t,e.child,null,n),e=y0(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function UM(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=im(Error(j(422))),xc(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=oh({mode:"visible",children:r.children},i,0,null),s=ds(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,(t.mode&1)!==0&&Lo(t,e.child,null,o),t.child.memoizedState=Gg(o),t.memoizedState=qg,s);if((t.mode&1)===0)return xc(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(j(419)),r=im(s,r,void 0),xc(e,t,o,r)}if(a=(o&e.childLanes)!==0,Qt||a){if(r=ft,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Or(e,i),Wn(r,e,i,-1))}return E0(),r=im(Error(j(421))),xc(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=eL.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,rn=fi(i.nextSibling),on=t,Ue=!0,Un=null,e!==null&&(wn[_n++]=wr,wn[_n++]=_r,wn[_n++]=ys,wr=e.id,_r=e.overflow,ys=t),t=y0(t,r.children),t.flags|=4096,t)}function eS(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),jg(e.return,t,n)}function sm(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function sk(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Ft(e,t,r.children,n),r=Be.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&eS(e,n,t);else if(e.tag===19)eS(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Pe(Be,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Fd(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),sm(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Fd(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}sm(t,!0,n,null,s);break;case"together":sm(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Zc(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Pr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ws|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=gi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function zM(e,t,n){switch(t.tag){case 3:rk(t),Mo();break;case 5:DI(t);break;case 1:Jt(t.type)&&Dd(t);break;case 4:u0(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Pe(Nd,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Pe(Be,Be.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?ik(e,t,n):(Pe(Be,Be.current&1),e=Pr(e,t,n),e!==null?e.sibling:null);Pe(Be,Be.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return sk(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Pe(Be,Be.current),r)break;return null;case 22:case 23:return t.lanes=0,tk(e,t,n)}return Pr(e,t,n)}var ok,Kg,ak,lk;ok=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Kg=function(){};ak=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ns(or.current);var s=null;switch(n){case"input":i=gg(e,i),r=gg(e,r),s=[];break;case"select":i=We({},i,{value:void 0}),r=We({},r,{value:void 0}),s=[];break;case"textarea":i=wg(e,i),r=wg(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Od)}Sg(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(bl.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(bl.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Re("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};lk=function(e,t,n,r){n!==r&&(t.flags|=4)};function ka(e,t){if(!Ue)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ct(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function BM(e,t,n){var r=t.pendingProps;switch(n0(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ct(t),null;case 1:return Jt(t.type)&&Pd(),Ct(t),null;case 3:return r=t.stateNode,Fo(),Fe(Xt),Fe(Rt),d0(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_c(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Un!==null&&(ny(Un),Un=null))),Kg(e,t),Ct(t),null;case 5:c0(t);var i=ns(Ml.current);if(n=t.type,e!==null&&t.stateNode!=null)ak(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return Ct(t),null}if(e=ns(or.current),_c(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[tr]=t,r[$l]=s,e=(t.mode&1)!==0,n){case"dialog":Re("cancel",r),Re("close",r);break;case"iframe":case"object":case"embed":Re("load",r);break;case"video":case"audio":for(i=0;i<Ba.length;i++)Re(Ba[i],r);break;case"source":Re("error",r);break;case"img":case"image":case"link":Re("error",r),Re("load",r);break;case"details":Re("toggle",r);break;case"input":u_(r,s),Re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Re("invalid",r);break;case"textarea":d_(r,s),Re("invalid",r)}Sg(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&wc(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&wc(r.textContent,a,e),i=["children",""+a]):bl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Re("scroll",r)}switch(n){case"input":dc(r),c_(r,s,!0);break;case"textarea":dc(r),f_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Od)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=NC(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[tr]=t,e[$l]=r,ok(e,t,!1,!1),t.stateNode=e;e:{switch(o=xg(n,r),n){case"dialog":Re("cancel",e),Re("close",e),i=r;break;case"iframe":case"object":case"embed":Re("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ba.length;i++)Re(Ba[i],e);i=r;break;case"source":Re("error",e),i=r;break;case"img":case"image":case"link":Re("error",e),Re("load",e),i=r;break;case"details":Re("toggle",e),i=r;break;case"input":u_(e,r),i=gg(e,r),Re("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=We({},r,{value:void 0}),Re("invalid",e);break;case"textarea":d_(e,r),i=wg(e,r),Re("invalid",e);break;default:i=r}Sg(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?FC(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&MC(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Tl(e,l):typeof l=="number"&&Tl(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(bl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Re("scroll",e):l!=null&&Uv(e,s,l,o))}switch(n){case"input":dc(e),c_(e,r,!1);break;case"textarea":dc(e),f_(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ti(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?_o(e,!!r.multiple,s,!1):r.defaultValue!=null&&_o(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Od)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ct(t),null;case 6:if(e&&t.stateNode!=null)lk(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=ns(Ml.current),ns(or.current),_c(t)){if(r=t.stateNode,n=t.memoizedProps,r[tr]=t,(s=r.nodeValue!==n)&&(e=on,e!==null))switch(e.tag){case 3:wc(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wc(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tr]=t,t.stateNode=r}return Ct(t),null;case 13:if(Fe(Be),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ue&&rn!==null&&(t.mode&1)!==0&&(t.flags&128)===0)TI(),Mo(),t.flags|=98560,s=!1;else if(s=_c(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(j(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[tr]=t}else Mo(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ct(t),s=!1}else Un!==null&&(ny(Un),Un=null),s=!0;if(!s)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Be.current&1)!==0?it===0&&(it=3):E0())),t.updateQueue!==null&&(t.flags|=4),Ct(t),null);case 4:return Fo(),Kg(e,t),e===null&&Dl(t.stateNode.containerInfo),Ct(t),null;case 10:return o0(t.type._context),Ct(t),null;case 17:return Jt(t.type)&&Pd(),Ct(t),null;case 19:if(Fe(Be),s=t.memoizedState,s===null)return Ct(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)ka(s,!1);else{if(it!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=Fd(e),o!==null){for(t.flags|=128,ka(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Pe(Be,Be.current&1|2),t.child}e=e.sibling}s.tail!==null&&Xe()>jo&&(t.flags|=128,r=!0,ka(s,!1),t.lanes=4194304)}else{if(!r)if(e=Fd(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ka(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ue)return Ct(t),null}else 2*Xe()-s.renderingStartTime>jo&&n!==1073741824&&(t.flags|=128,r=!0,ka(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Xe(),t.sibling=null,n=Be.current,Pe(Be,r?n&1|2:n&1),t):(Ct(t),null);case 22:case 23:return x0(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(tn&1073741824)!==0&&(Ct(t),t.subtreeFlags&6&&(t.flags|=8192)):Ct(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function HM(e,t){switch(n0(t),t.tag){case 1:return Jt(t.type)&&Pd(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Fo(),Fe(Xt),Fe(Rt),d0(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return c0(t),null;case 13:if(Fe(Be),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));Mo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Fe(Be),null;case 4:return Fo(),null;case 10:return o0(t.type._context),null;case 22:case 23:return x0(),null;case 24:return null;default:return null}}var Ec=!1,At=!1,WM=typeof WeakSet=="function"?WeakSet:Set,Q=null;function lo(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ge(e,t,r)}else n.current=null}function Yg(e,t,n){try{n()}catch(r){Ge(e,t,r)}}var tS=!1;function qM(e,t){if(Dg=Id,e=fI(),e0(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var h;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(h=d.firstChild)!==null;)f=d,d=h;for(;;){if(d===e)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(h=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=h}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rg={focusedElem:e,selectionRange:n},Id=!1,Q=t;Q!==null;)if(t=Q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Q=e;else for(;Q!==null;){t=Q;try{var p=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var y=p.memoizedProps,w=p.memoizedState,v=t.stateNode,m=v.getSnapshotBeforeUpdate(t.elementType===t.type?y:Vn(t.type,y),w);v.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(_){Ge(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,Q=e;break}Q=t.return}return p=tS,tS=!1,p}function rl(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Yg(t,n,s)}i=i.next}while(i!==r)}}function ih(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Qg(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function uk(e){var t=e.alternate;t!==null&&(e.alternate=null,uk(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[tr],delete t[$l],delete t[Mg],delete t[kM],delete t[AM])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ck(e){return e.tag===5||e.tag===3||e.tag===4}function nS(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ck(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xg(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Od));else if(r!==4&&(e=e.child,e!==null))for(Xg(e,t,n),e=e.sibling;e!==null;)Xg(e,t,n),e=e.sibling}function Jg(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Jg(e,t,n),e=e.sibling;e!==null;)Jg(e,t,n),e=e.sibling}var gt=null,jn=!1;function Wr(e,t,n){for(n=n.child;n!==null;)dk(e,t,n),n=n.sibling}function dk(e,t,n){if(sr&&typeof sr.onCommitFiberUnmount=="function")try{sr.onCommitFiberUnmount(Qf,n)}catch{}switch(n.tag){case 5:At||lo(n,t);case 6:var r=gt,i=jn;gt=null,Wr(e,t,n),gt=r,jn=i,gt!==null&&(jn?(e=gt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):gt.removeChild(n.stateNode));break;case 18:gt!==null&&(jn?(e=gt,n=n.stateNode,e.nodeType===8?Jp(e.parentNode,n):e.nodeType===1&&Jp(e,n),Al(e)):Jp(gt,n.stateNode));break;case 4:r=gt,i=jn,gt=n.stateNode.containerInfo,jn=!0,Wr(e,t,n),gt=r,jn=i;break;case 0:case 11:case 14:case 15:if(!At&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Yg(n,t,o),i=i.next}while(i!==r)}Wr(e,t,n);break;case 1:if(!At&&(lo(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ge(n,t,a)}Wr(e,t,n);break;case 21:Wr(e,t,n);break;case 22:n.mode&1?(At=(r=At)||n.memoizedState!==null,Wr(e,t,n),At=r):Wr(e,t,n);break;default:Wr(e,t,n)}}function rS(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new WM),t.forEach(function(r){var i=tL.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Nn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:gt=a.stateNode,jn=!1;break e;case 3:gt=a.stateNode.containerInfo,jn=!0;break e;case 4:gt=a.stateNode.containerInfo,jn=!0;break e}a=a.return}if(gt===null)throw Error(j(160));dk(s,o,i),gt=null,jn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ge(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)fk(t,e),t=t.sibling}function fk(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Nn(t,e),Jn(e),r&4){try{rl(3,e,e.return),ih(3,e)}catch(y){Ge(e,e.return,y)}try{rl(5,e,e.return)}catch(y){Ge(e,e.return,y)}}break;case 1:Nn(t,e),Jn(e),r&512&&n!==null&&lo(n,n.return);break;case 5:if(Nn(t,e),Jn(e),r&512&&n!==null&&lo(n,n.return),e.flags&32){var i=e.stateNode;try{Tl(i,"")}catch(y){Ge(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&RC(i,s),xg(a,o);var u=xg(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?FC(i,d):c==="dangerouslySetInnerHTML"?MC(i,d):c==="children"?Tl(i,d):Uv(i,c,d,u)}switch(a){case"input":yg(i,s);break;case"textarea":$C(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?_o(i,!!s.multiple,h,!1):f!==!!s.multiple&&(s.defaultValue!=null?_o(i,!!s.multiple,s.defaultValue,!0):_o(i,!!s.multiple,s.multiple?[]:"",!1))}i[$l]=s}catch(y){Ge(e,e.return,y)}}break;case 6:if(Nn(t,e),Jn(e),r&4){if(e.stateNode===null)throw Error(j(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(y){Ge(e,e.return,y)}}break;case 3:if(Nn(t,e),Jn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Al(t.containerInfo)}catch(y){Ge(e,e.return,y)}break;case 4:Nn(t,e),Jn(e);break;case 13:Nn(t,e),Jn(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(_0=Xe())),r&4&&rS(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(At=(u=At)||c,Nn(t,e),At=u):Nn(t,e),Jn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&(e.mode&1)!==0)for(Q=e,c=e.child;c!==null;){for(d=Q=c;Q!==null;){switch(f=Q,h=f.child,f.tag){case 0:case 11:case 14:case 15:rl(4,f,f.return);break;case 1:lo(f,f.return);var p=f.stateNode;if(typeof p.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,p.props=t.memoizedProps,p.state=t.memoizedState,p.componentWillUnmount()}catch(y){Ge(r,n,y)}}break;case 5:lo(f,f.return);break;case 22:if(f.memoizedState!==null){sS(d);continue}}h!==null?(h.return=f,Q=h):sS(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=LC("display",o))}catch(y){Ge(e,e.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){Ge(e,e.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Nn(t,e),Jn(e),r&4&&rS(e);break;case 21:break;default:Nn(t,e),Jn(e)}}function Jn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ck(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Tl(i,""),r.flags&=-33);var s=nS(e);Jg(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=nS(e);Xg(e,a,o);break;default:throw Error(j(161))}}catch(l){Ge(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function GM(e,t,n){Q=e,hk(e)}function hk(e,t,n){for(var r=(e.mode&1)!==0;Q!==null;){var i=Q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ec;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||At;a=Ec;var u=At;if(Ec=o,(At=l)&&!u)for(Q=i;Q!==null;)o=Q,l=o.child,o.tag===22&&o.memoizedState!==null?oS(i):l!==null?(l.return=o,Q=l):oS(i);for(;s!==null;)Q=s,hk(s),s=s.sibling;Q=i,Ec=a,At=u}iS(e)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,Q=s):iS(e)}}function iS(e){for(;Q!==null;){var t=Q;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:At||ih(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!At)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Vn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&U_(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}U_(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Al(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}At||t.flags&512&&Qg(t)}catch(f){Ge(t,t.return,f)}}if(t===e){Q=null;break}if(n=t.sibling,n!==null){n.return=t.return,Q=n;break}Q=t.return}}function sS(e){for(;Q!==null;){var t=Q;if(t===e){Q=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Q=n;break}Q=t.return}}function oS(e){for(;Q!==null;){var t=Q;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ih(4,t)}catch(l){Ge(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Ge(t,i,l)}}var s=t.return;try{Qg(t)}catch(l){Ge(t,s,l)}break;case 5:var o=t.return;try{Qg(t)}catch(l){Ge(t,o,l)}}}catch(l){Ge(t,t.return,l)}if(t===e){Q=null;break}var a=t.sibling;if(a!==null){a.return=t.return,Q=a;break}Q=t.return}}var KM=Math.ceil,Ud=Vr.ReactCurrentDispatcher,v0=Vr.ReactCurrentOwner,En=Vr.ReactCurrentBatchConfig,xe=0,ft=null,tt=null,wt=0,tn=0,uo=$i(0),it=0,jl=null,ws=0,sh=0,w0=0,il=null,Kt=null,_0=0,jo=1/0,gr=null,zd=!1,Zg=null,pi=null,bc=!1,ii=null,Bd=0,sl=0,ey=null,ed=-1,td=0;function zt(){return(xe&6)!==0?Xe():ed!==-1?ed:ed=Xe()}function mi(e){return(e.mode&1)===0?1:(xe&2)!==0&&wt!==0?wt&-wt:PM.transition!==null?(td===0&&(td=QC()),td):(e=Ie,e!==0||(e=window.event,e=e===void 0?16:rI(e.type)),e)}function Wn(e,t,n,r){if(50<sl)throw sl=0,ey=null,Error(j(185));vu(e,n,r),((xe&2)===0||e!==ft)&&(e===ft&&((xe&2)===0&&(sh|=n),it===4&&Jr(e,wt)),Zt(e,r),n===1&&xe===0&&(t.mode&1)===0&&(jo=Xe()+500,th&&Ni()))}function Zt(e,t){var n=e.callbackNode;PN(e,t);var r=Cd(e,e===ft?wt:0);if(r===0)n!==null&&m_(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&m_(n),t===1)e.tag===0?OM(aS.bind(null,e)):xI(aS.bind(null,e)),CM(function(){(xe&6)===0&&Ni()}),n=null;else{switch(XC(r)){case 1:n=qv;break;case 4:n=KC;break;case 16:n=Td;break;case 536870912:n=YC;break;default:n=Td}n=Sk(n,pk.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function pk(e,t){if(ed=-1,td=0,(xe&6)!==0)throw Error(j(327));var n=e.callbackNode;if(To()&&e.callbackNode!==n)return null;var r=Cd(e,e===ft?wt:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Hd(e,r);else{t=r;var i=xe;xe|=2;var s=gk();(ft!==e||wt!==t)&&(gr=null,jo=Xe()+500,cs(e,t));do try{XM();break}catch(a){mk(e,a)}while(1);s0(),Ud.current=s,xe=i,tt!==null?t=0:(ft=null,wt=0,t=it)}if(t!==0){if(t===2&&(i=Ig(e),i!==0&&(r=i,t=ty(e,i))),t===1)throw n=jl,cs(e,0),Jr(e,r),Zt(e,Xe()),n;if(t===6)Jr(e,r);else{if(i=e.current.alternate,(r&30)===0&&!YM(i)&&(t=Hd(e,r),t===2&&(s=Ig(e),s!==0&&(r=s,t=ty(e,s))),t===1))throw n=jl,cs(e,0),Jr(e,r),Zt(e,Xe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:qi(e,Kt,gr);break;case 3:if(Jr(e,r),(r&130023424)===r&&(t=_0+500-Xe(),10<t)){if(Cd(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){zt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ng(qi.bind(null,e,Kt,gr),t);break}qi(e,Kt,gr);break;case 4:if(Jr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Hn(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=Xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*KM(r/1960))-r,10<r){e.timeoutHandle=Ng(qi.bind(null,e,Kt,gr),r);break}qi(e,Kt,gr);break;case 5:qi(e,Kt,gr);break;default:throw Error(j(329))}}}return Zt(e,Xe()),e.callbackNode===n?pk.bind(null,e):null}function ty(e,t){var n=il;return e.current.memoizedState.isDehydrated&&(cs(e,t).flags|=256),e=Hd(e,t),e!==2&&(t=Kt,Kt=n,t!==null&&ny(t)),e}function ny(e){Kt===null?Kt=e:Kt.push.apply(Kt,e)}function YM(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Kn(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Jr(e,t){for(t&=~w0,t&=~sh,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Hn(t),r=1<<n;e[n]=-1,t&=~r}}function aS(e){if((xe&6)!==0)throw Error(j(327));To();var t=Cd(e,0);if((t&1)===0)return Zt(e,Xe()),null;var n=Hd(e,t);if(e.tag!==0&&n===2){var r=Ig(e);r!==0&&(t=r,n=ty(e,r))}if(n===1)throw n=jl,cs(e,0),Jr(e,t),Zt(e,Xe()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,qi(e,Kt,gr),Zt(e,Xe()),null}function S0(e,t){var n=xe;xe|=1;try{return e(t)}finally{xe=n,xe===0&&(jo=Xe()+500,th&&Ni())}}function _s(e){ii!==null&&ii.tag===0&&(xe&6)===0&&To();var t=xe;xe|=1;var n=En.transition,r=Ie;try{if(En.transition=null,Ie=1,e)return e()}finally{Ie=r,En.transition=n,xe=t,(xe&6)===0&&Ni()}}function x0(){tn=uo.current,Fe(uo)}function cs(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,TM(n)),tt!==null)for(n=tt.return;n!==null;){var r=n;switch(n0(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Pd();break;case 3:Fo(),Fe(Xt),Fe(Rt),d0();break;case 5:c0(r);break;case 4:Fo();break;case 13:Fe(Be);break;case 19:Fe(Be);break;case 10:o0(r.type._context);break;case 22:case 23:x0()}n=n.return}if(ft=e,tt=e=gi(e.current,null),wt=tn=t,it=0,jl=null,w0=sh=ws=0,Kt=il=null,ts!==null){for(t=0;t<ts.length;t++)if(n=ts[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ts=null}return e}function mk(e,t){do{var n=tt;try{if(s0(),Xc.current=jd,Vd){for(var r=He.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Vd=!1}if(vs=0,ct=rt=He=null,nl=!1,Ll=0,v0.current=null,n===null||n.return===null){it=1,jl=t,tt=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=wt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if((c.mode&1)===0&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=K_(o);if(h!==null){h.flags&=-257,Y_(h,o,a,s,t),h.mode&1&&G_(s,u,t),t=h,l=u;var p=t.updateQueue;if(p===null){var y=new Set;y.add(l),t.updateQueue=y}else p.add(l);break e}else{if((t&1)===0){G_(s,u,t),E0();break e}l=Error(j(426))}}else if(Ue&&a.mode&1){var w=K_(o);if(w!==null){(w.flags&65536)===0&&(w.flags|=256),Y_(w,o,a,s,t),r0(Vo(l,a));break e}}s=l=Vo(l,a),it!==4&&(it=2),il===null?il=[s]:il.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var v=JI(s,l,t);j_(s,v);break e;case 1:a=l;var m=s.type,g=s.stateNode;if((s.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(pi===null||!pi.has(g)))){s.flags|=65536,t&=-t,s.lanes|=t;var _=ZI(s,a,t);j_(s,_);break e}}s=s.return}while(s!==null)}vk(n)}catch(E){t=E,tt===n&&n!==null&&(tt=n=n.return);continue}break}while(1)}function gk(){var e=Ud.current;return Ud.current=jd,e===null?jd:e}function E0(){(it===0||it===3||it===2)&&(it=4),ft===null||(ws&268435455)===0&&(sh&268435455)===0||Jr(ft,wt)}function Hd(e,t){var n=xe;xe|=2;var r=gk();(ft!==e||wt!==t)&&(gr=null,cs(e,t));do try{QM();break}catch(i){mk(e,i)}while(1);if(s0(),xe=n,Ud.current=r,tt!==null)throw Error(j(261));return ft=null,wt=0,it}function QM(){for(;tt!==null;)yk(tt)}function XM(){for(;tt!==null&&!xN();)yk(tt)}function yk(e){var t=_k(e.alternate,e,tn);e.memoizedProps=e.pendingProps,t===null?vk(e):tt=t,v0.current=null}function vk(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=BM(n,t,tn),n!==null){tt=n;return}}else{if(n=HM(n,t),n!==null){n.flags&=32767,tt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{it=6,tt=null;return}}if(t=t.sibling,t!==null){tt=t;return}tt=t=e}while(t!==null);it===0&&(it=5)}function qi(e,t,n){var r=Ie,i=En.transition;try{En.transition=null,Ie=1,JM(e,t,n,r)}finally{En.transition=i,Ie=r}return null}function JM(e,t,n,r){do To();while(ii!==null);if((xe&6)!==0)throw Error(j(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(DN(e,s),e===ft&&(tt=ft=null,wt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||bc||(bc=!0,Sk(Td,function(){return To(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=En.transition,En.transition=null;var o=Ie;Ie=1;var a=xe;xe|=4,v0.current=null,qM(e,n),fk(n,e),vM(Rg),Id=!!Dg,Rg=Dg=null,e.current=n,GM(n),EN(),xe=a,Ie=o,En.transition=s}else e.current=n;if(bc&&(bc=!1,ii=e,Bd=i),s=e.pendingLanes,s===0&&(pi=null),CN(n.stateNode),Zt(e,Xe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(zd)throw zd=!1,e=Zg,Zg=null,e;return(Bd&1)!==0&&e.tag!==0&&To(),s=e.pendingLanes,(s&1)!==0?e===ey?sl++:(sl=0,ey=e):sl=0,Ni(),null}function To(){if(ii!==null){var e=XC(Bd),t=En.transition,n=Ie;try{if(En.transition=null,Ie=16>e?16:e,ii===null)var r=!1;else{if(e=ii,ii=null,Bd=0,(xe&6)!==0)throw Error(j(331));var i=xe;for(xe|=4,Q=e.current;Q!==null;){var s=Q,o=s.child;if((Q.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Q=u;Q!==null;){var c=Q;switch(c.tag){case 0:case 11:case 15:rl(8,c,s)}var d=c.child;if(d!==null)d.return=c,Q=d;else for(;Q!==null;){c=Q;var f=c.sibling,h=c.return;if(uk(c),c===u){Q=null;break}if(f!==null){f.return=h,Q=f;break}Q=h}}}var p=s.alternate;if(p!==null){var y=p.child;if(y!==null){p.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}Q=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,Q=o;else e:for(;Q!==null;){if(s=Q,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:rl(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,Q=v;break e}Q=s.return}}var m=e.current;for(Q=m;Q!==null;){o=Q;var g=o.child;if((o.subtreeFlags&2064)!==0&&g!==null)g.return=o,Q=g;else e:for(o=m;Q!==null;){if(a=Q,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:ih(9,a)}}catch(E){Ge(a,a.return,E)}if(a===o){Q=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,Q=_;break e}Q=a.return}}if(xe=i,Ni(),sr&&typeof sr.onPostCommitFiberRoot=="function")try{sr.onPostCommitFiberRoot(Qf,e)}catch{}r=!0}return r}finally{Ie=n,En.transition=t}}return!1}function lS(e,t,n){t=Vo(n,t),t=JI(e,t,1),e=hi(e,t,1),t=zt(),e!==null&&(vu(e,1,t),Zt(e,t))}function Ge(e,t,n){if(e.tag===3)lS(e,e,n);else for(;t!==null;){if(t.tag===3){lS(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pi===null||!pi.has(r))){e=Vo(n,e),e=ZI(t,e,1),t=hi(t,e,1),e=zt(),t!==null&&(vu(t,1,e),Zt(t,e));break}}t=t.return}}function ZM(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=zt(),e.pingedLanes|=e.suspendedLanes&n,ft===e&&(wt&n)===n&&(it===4||it===3&&(wt&130023424)===wt&&500>Xe()-_0?cs(e,0):w0|=n),Zt(e,t)}function wk(e,t){t===0&&((e.mode&1)===0?t=1:(t=pc,pc<<=1,(pc&130023424)===0&&(pc=4194304)));var n=zt();e=Or(e,t),e!==null&&(vu(e,t,n),Zt(e,n))}function eL(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),wk(e,n)}function tL(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),wk(e,n)}var _k;_k=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Xt.current)Qt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Qt=!1,zM(e,t,n);Qt=(e.flags&131072)!==0}else Qt=!1,Ue&&(t.flags&1048576)!==0&&EI(t,$d,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Zc(e,t),e=t.pendingProps;var i=No(t,Rt.current);bo(t,n),i=h0(null,t,r,e,i,n);var s=p0();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Jt(r)?(s=!0,Dd(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,l0(t),i.updater=nh,t.stateNode=i,i._reactInternals=t,zg(t,r,e,n),t=Wg(null,t,r,!0,s,n)):(t.tag=0,Ue&&s&&t0(t),Ft(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Zc(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=rL(r),e=Vn(r,e),i){case 0:t=Hg(null,t,r,e,n);break e;case 1:t=J_(null,t,r,e,n);break e;case 11:t=Q_(null,t,r,e,n);break e;case 14:t=X_(null,t,r,Vn(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Vn(r,i),Hg(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Vn(r,i),J_(e,t,r,i,n);case 3:e:{if(rk(t),e===null)throw Error(j(387));r=t.pendingProps,s=t.memoizedState,i=s.element,II(e,t),Ld(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Vo(Error(j(423)),t),t=Z_(e,t,r,n,i);break e}else if(r!==i){i=Vo(Error(j(424)),t),t=Z_(e,t,r,n,i);break e}else for(rn=fi(t.stateNode.containerInfo.firstChild),on=t,Ue=!0,Un=null,n=PI(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mo(),r===i){t=Pr(e,t,n);break e}Ft(e,t,r,n)}t=t.child}return t;case 5:return DI(t),e===null&&Vg(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,$g(r,i)?o=null:s!==null&&$g(r,s)&&(t.flags|=32),nk(e,t),Ft(e,t,o,n),t.child;case 6:return e===null&&Vg(t),null;case 13:return ik(e,t,n);case 4:return u0(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Lo(t,null,r,n):Ft(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Vn(r,i),Q_(e,t,r,i,n);case 7:return Ft(e,t,t.pendingProps,n),t.child;case 8:return Ft(e,t,t.pendingProps.children,n),t.child;case 12:return Ft(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,Pe(Nd,r._currentValue),r._currentValue=o,s!==null)if(Kn(s.value,o)){if(s.children===i.children&&!Xt.current){t=Pr(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=br(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),jg(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),jg(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ft(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,bo(t,n),i=An(i),r=r(i),t.flags|=1,Ft(e,t,r,n),t.child;case 14:return r=t.type,i=Vn(r,t.pendingProps),i=Vn(r.type,i),X_(e,t,r,i,n);case 15:return ek(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Vn(r,i),Zc(e,t),t.tag=1,Jt(r)?(e=!0,Dd(t)):e=!1,bo(t,n),AI(t,r,i),zg(t,r,i,n),Wg(null,t,r,!0,e,n);case 19:return sk(e,t,n);case 22:return tk(e,t,n)}throw Error(j(156,t.tag))};function Sk(e,t){return GC(e,t)}function nL(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(e,t,n,r){return new nL(e,t,n,r)}function b0(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rL(e){if(typeof e=="function")return b0(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Bv)return 11;if(e===Hv)return 14}return 2}function gi(e,t){var n=e.alternate;return n===null?(n=Sn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function nd(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")b0(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Zs:return ds(n.children,i,s,t);case zv:o=8,i|=8;break;case fg:return e=Sn(12,n,t,i|2),e.elementType=fg,e.lanes=s,e;case hg:return e=Sn(13,n,t,i),e.elementType=hg,e.lanes=s,e;case pg:return e=Sn(19,n,t,i),e.elementType=pg,e.lanes=s,e;case OC:return oh(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case kC:o=10;break e;case AC:o=9;break e;case Bv:o=11;break e;case Hv:o=14;break e;case Kr:o=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=Sn(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function ds(e,t,n,r){return e=Sn(7,e,r,t),e.lanes=n,e}function oh(e,t,n,r){return e=Sn(22,e,r,t),e.elementType=OC,e.lanes=n,e.stateNode={isHidden:!1},e}function om(e,t,n){return e=Sn(6,e,null,t),e.lanes=n,e}function am(e,t,n){return t=Sn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function iL(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Up(0),this.expirationTimes=Up(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Up(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function T0(e,t,n,r,i,s,o,a,l){return e=new iL(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Sn(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},l0(s),e}function sL(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Js,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function xk(e){if(!e)return Ci;e=e._reactInternals;e:{if(Rs(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Jt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(Jt(n))return SI(e,n,t)}return t}function Ek(e,t,n,r,i,s,o,a,l){return e=T0(n,r,!0,e,i,s,o,a,l),e.context=xk(null),n=e.current,r=zt(),i=mi(n),s=br(r,i),s.callback=t!=null?t:null,hi(n,s,i),e.current.lanes=i,vu(e,i,r),Zt(e,r),e}function ah(e,t,n,r){var i=t.current,s=zt(),o=mi(i);return n=xk(n),t.context===null?t.context=n:t.pendingContext=n,t=br(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=hi(i,t,o),e!==null&&(Wn(e,i,o,s),Qc(e,i,o)),o}function Wd(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function uS(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function C0(e,t){uS(e,t),(e=e.alternate)&&uS(e,t)}function oL(){return null}var bk=typeof reportError=="function"?reportError:function(e){console.error(e)};function I0(e){this._internalRoot=e}lh.prototype.render=I0.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));ah(e,t,null,null)};lh.prototype.unmount=I0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_s(function(){ah(null,e,null,null)}),t[Ar]=null}};function lh(e){this._internalRoot=e}lh.prototype.unstable_scheduleHydration=function(e){if(e){var t=eI();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Xr.length&&t!==0&&t<Xr[n].priority;n++);Xr.splice(n,0,e),n===0&&nI(e)}};function k0(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function uh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function cS(){}function aL(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Wd(o);s.call(u)}}var o=Ek(t,r,e,0,null,!1,!1,"",cS);return e._reactRootContainer=o,e[Ar]=o.current,Dl(e.nodeType===8?e.parentNode:e),_s(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Wd(l);a.call(u)}}var l=T0(e,0,!1,null,null,!1,!1,"",cS);return e._reactRootContainer=l,e[Ar]=l.current,Dl(e.nodeType===8?e.parentNode:e),_s(function(){ah(t,l,n,r)}),l}function ch(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Wd(o);a.call(l)}}ah(t,o,e,i)}else o=aL(n,t,e,i,r);return Wd(o)}JC=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=za(t.pendingLanes);n!==0&&(Gv(t,n|1),Zt(t,Xe()),(xe&6)===0&&(jo=Xe()+500,Ni()))}break;case 13:_s(function(){var r=Or(e,1);if(r!==null){var i=zt();Wn(r,e,1,i)}}),C0(e,1)}};Kv=function(e){if(e.tag===13){var t=Or(e,134217728);if(t!==null){var n=zt();Wn(t,e,134217728,n)}C0(e,134217728)}};ZC=function(e){if(e.tag===13){var t=mi(e),n=Or(e,t);if(n!==null){var r=zt();Wn(n,e,t,r)}C0(e,t)}};eI=function(){return Ie};tI=function(e,t){var n=Ie;try{return Ie=e,t()}finally{Ie=n}};bg=function(e,t,n){switch(t){case"input":if(yg(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=eh(r);if(!i)throw Error(j(90));DC(r),yg(r,i)}}}break;case"textarea":$C(e,n);break;case"select":t=n.value,t!=null&&_o(e,!!n.multiple,t,!1)}};UC=S0;zC=_s;var lL={usingClientEntryPoint:!1,Events:[_u,ro,eh,VC,jC,S0]},Aa={findFiberByHostInstance:es,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},uL={bundleType:Aa.bundleType,version:Aa.version,rendererPackageName:Aa.rendererPackageName,rendererConfig:Aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=WC(e),e===null?null:e.stateNode},findFiberByHostInstance:Aa.findFiberByHostInstance||oL,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tc.isDisabled&&Tc.supportsFiber)try{Qf=Tc.inject(uL),sr=Tc}catch{}}hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lL;hn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!k0(t))throw Error(j(200));return sL(e,t,null,n)};hn.createRoot=function(e,t){if(!k0(e))throw Error(j(299));var n=!1,r="",i=bk;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=T0(e,1,!1,null,null,n,!1,r,i),e[Ar]=t.current,Dl(e.nodeType===8?e.parentNode:e),new I0(t)};hn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=WC(t),e=e===null?null:e.stateNode,e};hn.flushSync=function(e){return _s(e)};hn.hydrate=function(e,t,n){if(!uh(t))throw Error(j(200));return ch(null,e,t,!0,n)};hn.hydrateRoot=function(e,t,n){if(!k0(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=bk;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Ek(t,null,e,1,n!=null?n:null,i,!1,s,o),e[Ar]=t.current,Dl(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new lh(t)};hn.render=function(e,t,n){if(!uh(t))throw Error(j(200));return ch(null,e,t,!1,n)};hn.unmountComponentAtNode=function(e){if(!uh(e))throw Error(j(40));return e._reactRootContainer?(_s(function(){ch(null,null,e,!1,function(){e._reactRootContainer=null,e[Ar]=null})}),!0):!1};hn.unstable_batchedUpdates=S0;hn.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!uh(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return ch(e,t,n,!1,r)};hn.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=hn})(Fv);var dS=Fv.exports;cg.createRoot=dS.createRoot,cg.hydrateRoot=dS.hydrateRoot;/**
 * @remix-run/router v1.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qd(){return qd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qd.apply(this,arguments)}var si;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(si||(si={}));const fS="popstate";function cL(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return ry("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:iy(i)}return fL(t,n,null,e)}function dL(){return Math.random().toString(36).substr(2,8)}function hS(e){return{usr:e.state,key:e.key}}function ry(e,t,n,r){return n===void 0&&(n=null),qd({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?na(t):t,{state:n,key:t&&t.key||r||dL()})}function iy(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function na(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function fL(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=si.Pop,l=null;function u(){a=si.Pop,l&&l({action:a,location:f.location})}function c(h,p){a=si.Push;let y=ry(f.location,h,p);n&&n(y,h);let w=hS(y),v=f.createHref(y);try{o.pushState(w,"",v)}catch{i.location.assign(v)}s&&l&&l({action:a,location:y})}function d(h,p){a=si.Replace;let y=ry(f.location,h,p);n&&n(y,h);let w=hS(y),v=f.createHref(y);o.replaceState(w,"",v),s&&l&&l({action:a,location:y})}let f={get action(){return a},get location(){return e(i,o)},listen(h){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(fS,u),l=h,()=>{i.removeEventListener(fS,u),l=null}},createHref(h){return t(i,h)},push:c,replace:d,go(h){return o.go(h)}};return f}var pS;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(pS||(pS={}));function hL(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?na(t):t,i=Ck(r.pathname||"/",n);if(i==null)return null;let s=Tk(e);pL(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=EL(s[a],i);return o}function Tk(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(st(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let a=yi([r,o.relativePath]),l=n.concat(o);i.children&&i.children.length>0&&(st(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+a+'".')),Tk(i.children,t,l,a)),!(i.path==null&&!i.index)&&t.push({path:a,score:SL(a,i.index),routesMeta:l})}),t}function pL(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:xL(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const mL=/^:\w+$/,gL=3,yL=2,vL=1,wL=10,_L=-2,mS=e=>e==="*";function SL(e,t){let n=e.split("/"),r=n.length;return n.some(mS)&&(r+=_L),t&&(r+=yL),n.filter(i=>!mS(i)).reduce((i,s)=>i+(mL.test(s)?gL:s===""?vL:wL),r)}function xL(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function EL(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=A0({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:yi([i,c.pathname]),pathnameBase:kL(yi([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=yi([i,c.pathnameBase]))}return s}function A0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=bL(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=TL(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:e}}function bL(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ik(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function TL(e,t){try{return decodeURIComponent(e)}catch(n){return Ik(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Ck(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function st(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ik(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function CL(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?na(e):e;return{pathname:n?n.startsWith("/")?n:IL(n,t):t,search:AL(r),hash:OL(i)}}function IL(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function lm(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function kk(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=na(e):(i=qd({},e),st(!i.pathname||!i.pathname.includes("?"),lm("?","pathname","search",i)),st(!i.pathname||!i.pathname.includes("#"),lm("#","pathname","hash",i)),st(!i.search||!i.search.includes("#"),lm("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=t.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?t[d]:"/"}let l=CL(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const yi=e=>e.join("/").replace(/\/\/+/g,"/"),kL=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),AL=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,OL=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class PL{constructor(t,n,r){this.status=t,this.statusText=n||"",this.data=r}}function DL(e){return e instanceof PL}var dh={exports:{}},fh={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var RL=b.exports,$L=Symbol.for("react.element"),NL=Symbol.for("react.fragment"),ML=Object.prototype.hasOwnProperty,LL=RL.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,FL={key:!0,ref:!0,__self:!0,__source:!0};function Ak(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)ML.call(t,r)&&!FL.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:$L,type:e,key:s,ref:o,props:i,_owner:LL.current}}fh.Fragment=NL;fh.jsx=Ak;fh.jsxs=Ak;(function(e){e.exports=fh})(dh);const Yn=dh.exports.Fragment,S=dh.exports.jsx,X=dh.exports.jsxs;/**
 * React Router v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sy(){return sy=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sy.apply(this,arguments)}function VL(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const jL=typeof Object.is=="function"?Object.is:VL,{useState:UL,useEffect:zL,useLayoutEffect:BL,useDebugValue:HL}=ug;function WL(e,t,n){const r=t(),[{inst:i},s]=UL({inst:{value:r,getSnapshot:t}});return BL(()=>{i.value=r,i.getSnapshot=t,um(i)&&s({inst:i})},[e,r,t]),zL(()=>(um(i)&&s({inst:i}),e(()=>{um(i)&&s({inst:i})})),[e]),HL(r),r}function um(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!jL(n,r)}catch{return!0}}function qL(e,t,n){return t()}const GL=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",KL=!GL,YL=KL?qL:WL;"useSyncExternalStore"in ug&&(e=>e.useSyncExternalStore)(ug);const QL=b.exports.createContext(null),XL=b.exports.createContext(null),O0=b.exports.createContext(null),P0=b.exports.createContext(null),hh=b.exports.createContext(null),ra=b.exports.createContext({outlet:null,matches:[]}),Ok=b.exports.createContext(null);function JL(e,t){let{relative:n}=t===void 0?{}:t;ia()||st(!1);let{basename:r,navigator:i}=b.exports.useContext(P0),{hash:s,pathname:o,search:a}=Gd(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:yi([r,o])),i.createHref({pathname:l,search:a,hash:s})}function ia(){return b.exports.useContext(hh)!=null}function $s(){return ia()||st(!1),b.exports.useContext(hh).location}function ZL(e){ia()||st(!1);let{pathname:t}=$s();return b.exports.useMemo(()=>A0(e,t),[t,e])}function Pk(e){return e.filter((t,n)=>n===0||!t.route.index&&t.pathnameBase!==e[n-1].pathnameBase)}function Mi(){ia()||st(!1);let{basename:e,navigator:t}=b.exports.useContext(P0),{matches:n}=b.exports.useContext(ra),{pathname:r}=$s(),i=JSON.stringify(Pk(n).map(a=>a.pathnameBase)),s=b.exports.useRef(!1);return b.exports.useEffect(()=>{s.current=!0}),b.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){t.go(a);return}let u=kk(a,JSON.parse(i),r,l.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:yi([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state,l)},[e,t,i,r])}function eF(){let{matches:e}=b.exports.useContext(ra),t=e[e.length-1];return t?t.params:{}}function Gd(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=b.exports.useContext(ra),{pathname:i}=$s(),s=JSON.stringify(Pk(r).map(o=>o.pathnameBase));return b.exports.useMemo(()=>kk(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function tF(e,t){ia()||st(!1);let n=b.exports.useContext(O0),{matches:r}=b.exports.useContext(ra),i=r[r.length-1],s=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let a=$s(),l;if(t){var u;let p=typeof t=="string"?na(t):t;o==="/"||((u=p.pathname)==null?void 0:u.startsWith(o))||st(!1),l=p}else l=a;let c=l.pathname||"/",d=o==="/"?c:c.slice(o.length)||"/",f=hL(e,{pathname:d}),h=sF(f&&f.map(p=>Object.assign({},p,{params:Object.assign({},s,p.params),pathname:yi([o,p.pathname]),pathnameBase:p.pathnameBase==="/"?o:yi([o,p.pathnameBase])})),r,n||void 0);return t?S(hh.Provider,{value:{location:sy({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:si.Pop},children:h}):h}function nF(){let e=aF(),t=DL(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r};return X(Yn,{children:[S("h2",{children:"Unhandled Thrown Error!"}),S("h3",{style:{fontStyle:"italic"},children:t}),n?S("pre",{style:i,children:n}):null,S("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),X("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",S("code",{style:s,children:"errorElement"})," props on\xA0",S("code",{style:s,children:"<Route>"})]})]})}class rF extends b.exports.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?S(Ok.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function iF(e){let{routeContext:t,match:n,children:r}=e,i=b.exports.useContext(QL);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),S(ra.Provider,{value:t,children:r})}function sF(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||st(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||S(nF,{}):null,c=()=>S(iF,{match:o,routeContext:{outlet:s,matches:t.concat(r.slice(0,a+1))},children:l?u:o.route.element!==void 0?o.route.element:s});return n&&(o.route.errorElement||a===0)?S(rF,{location:n.location,component:u,error:l,children:c()}):c()},null)}var gS;(function(e){e.UseRevalidator="useRevalidator"})(gS||(gS={}));var oy;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(oy||(oy={}));function oF(e){let t=b.exports.useContext(O0);return t||st(!1),t}function aF(){var e;let t=b.exports.useContext(Ok),n=oF(oy.UseRouteError),r=b.exports.useContext(ra),i=r.matches[r.matches.length-1];return t||(r||st(!1),i.route.id||st(!1),(e=n.errors)==null?void 0:e[i.route.id])}function Gi(e){st(!1)}function lF(e){let{basename:t="/",children:n=null,location:r,navigationType:i=si.Pop,navigator:s,static:o=!1}=e;ia()&&st(!1);let a=t.replace(/^\/*/,"/"),l=b.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=na(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:h="default"}=r,p=b.exports.useMemo(()=>{let y=Ck(u,a);return y==null?null:{pathname:y,search:c,hash:d,state:f,key:h}},[a,u,c,d,f,h]);return p==null?null:S(P0.Provider,{value:l,children:S(hh.Provider,{children:n,value:{location:p,navigationType:i}})})}function uF(e){let{children:t,location:n}=e,r=b.exports.useContext(XL),i=r&&!t?r.router.routes:ay(t);return tF(i,n)}var yS;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(yS||(yS={}));new Promise(()=>{});function ay(e,t){t===void 0&&(t=[]);let n=[];return b.exports.Children.forEach(e,(r,i)=>{if(!b.exports.isValidElement(r))return;if(r.type===b.exports.Fragment){n.push.apply(n,ay(r.props.children,t));return}r.type!==Gi&&st(!1),!r.props.index||!r.props.children||st(!1);let s=[...t,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=ay(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dk(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function cF(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function dF(e,t){return e.button===0&&(!t||t==="_self")&&!cF(e)}const fF=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],hF=["aria-current","caseSensitive","className","end","style","to","children"];function pF(e){let{basename:t,children:n,window:r}=e,i=b.exports.useRef();i.current==null&&(i.current=cL({window:r,v5Compat:!0}));let s=i.current,[o,a]=b.exports.useState({action:s.action,location:s.location});return b.exports.useLayoutEffect(()=>s.listen(a),[s]),S(lF,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:s})}const mF=b.exports.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=t,d=Dk(t,fF),f=JL(u,{relative:i}),h=yF(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function p(y){r&&r(y),y.defaultPrevented||h(y)}return S("a",{...d,href:f,onClick:s?r:p,ref:n,target:l})}),gF=b.exports.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=t,c=Dk(t,hF),d=Gd(l),f=ZL({path:d.pathname,end:o,caseSensitive:i}),h=b.exports.useContext(O0),p=h==null?void 0:h.navigation.location,y=Gd(p||""),v=b.exports.useMemo(()=>p?A0({path:d.pathname,end:o,caseSensitive:i},y.pathname):null,[p,d.pathname,i,o,y.pathname])!=null,m=f!=null,g=m?r:void 0,_;typeof s=="function"?_=s({isActive:m,isPending:v}):_=[s,m?"active":null,v?"pending":null].filter(Boolean).join(" ");let E=typeof a=="function"?a({isActive:m,isPending:v}):a;return S(mF,{...c,"aria-current":g,className:_,ref:n,style:E,to:l,children:typeof u=="function"?u({isActive:m,isPending:v}):u})});var vS;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(vS||(vS={}));var wS;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(wS||(wS={}));function yF(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=t===void 0?{}:t,a=Mi(),l=$s(),u=Gd(e,{relative:o});return b.exports.useCallback(c=>{if(dF(c,n)){c.preventDefault();let d=r!==void 0?r:iy(l)===iy(u);a(e,{replace:d,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,e,s,o])}const D0=b.exports.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),ph=b.exports.createContext({});function vF(){return b.exports.useContext(ph).visualElement}const xu=b.exports.createContext(null),Ns=typeof document<"u",Kd=Ns?b.exports.useLayoutEffect:b.exports.useEffect,Rk=b.exports.createContext({strict:!1});function wF(e,t,n,r){const i=vF(),s=b.exports.useContext(Rk),o=b.exports.useContext(xu),a=b.exports.useContext(D0).reducedMotion,l=b.exports.useRef(void 0);r=r||s.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:i,props:n,presenceId:o?o.id:void 0,blockInitialAnimation:o?o.initial===!1:!1,reducedMotionConfig:a}));const u=l.current;return Kd(()=>{u&&u.syncRender()}),b.exports.useEffect(()=>{u&&u.animationState&&u.animationState.animateChanges()}),Kd(()=>()=>u&&u.notifyUnmount(),[]),u}function co(e){return typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function _F(e,t,n){return b.exports.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):co(n)&&(n.current=r))},[t])}function Ul(e){return typeof e=="string"||Array.isArray(e)}function mh(e){return typeof e=="object"&&typeof e.start=="function"}const SF=["initial","animate","exit","whileHover","whileDrag","whileTap","whileFocus","whileInView"];function gh(e){return mh(e.animate)||SF.some(t=>Ul(e[t]))}function $k(e){return Boolean(gh(e)||e.variants)}function xF(e,t){if(gh(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Ul(n)?n:void 0,animate:Ul(r)?r:void 0}}return e.inherit!==!1?t:{}}function EF(e){const{initial:t,animate:n}=xF(e,b.exports.useContext(ph));return b.exports.useMemo(()=>({initial:t,animate:n}),[_S(t),_S(n)])}function _S(e){return Array.isArray(e)?e.join(" "):e}const pr=e=>({isEnabled:t=>e.some(n=>!!t[n])}),zl={measureLayout:pr(["layout","layoutId","drag"]),animation:pr(["animate","exit","variants","whileHover","whileTap","whileFocus","whileDrag","whileInView"]),exit:pr(["exit"]),drag:pr(["drag","dragControls"]),focus:pr(["whileFocus"]),hover:pr(["whileHover","onHoverStart","onHoverEnd"]),tap:pr(["whileTap","onTap","onTapStart","onTapCancel"]),pan:pr(["onPan","onPanStart","onPanSessionStart","onPanEnd"]),inView:pr(["whileInView","onViewportEnter","onViewportLeave"])};function bF(e){for(const t in e)t==="projectionNodeConstructor"?zl.projectionNodeConstructor=e[t]:zl[t].Component=e[t]}function yh(e){const t=b.exports.useRef(null);return t.current===null&&(t.current=e()),t.current}const ol={hasAnimatedSinceResize:!0,hasEverUpdated:!1};let TF=1;function CF(){return yh(()=>{if(ol.hasEverUpdated)return TF++})}const R0=b.exports.createContext({});class IF extends Ye.Component{getSnapshotBeforeUpdate(){const{visualElement:t,props:n}=this.props;return t&&t.setProps(n),null}componentDidUpdate(){}render(){return this.props.children}}const Nk=b.exports.createContext({}),kF=Symbol.for("motionComponentSymbol");function AF({preloadedFeatures:e,createVisualElement:t,projectionNodeConstructor:n,useRender:r,useVisualState:i,Component:s}){e&&bF(e);function o(l,u){const c={...b.exports.useContext(D0),...l,layoutId:OF(l)},{isStatic:d}=c;let f=null;const h=EF(l),p=d?void 0:CF(),y=i(l,d);if(!d&&Ns){h.visualElement=wF(s,y,c,t);const w=b.exports.useContext(Rk).strict,v=b.exports.useContext(Nk);h.visualElement&&(f=h.visualElement.loadFeatures(c,w,e,p,n||zl.projectionNodeConstructor,v))}return X(IF,{visualElement:h.visualElement,props:c,children:[f,S(ph.Provider,{value:h,children:r(s,l,p,_F(y,h.visualElement,u),y,d,h.visualElement)})]})}const a=b.exports.forwardRef(o);return a[kF]=s,a}function OF({layoutId:e}){const t=b.exports.useContext(R0).id;return t&&e!==void 0?t+"-"+e:e}function PF(e){function t(r,i={}){return AF(e(r,i))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,i)=>(n.has(i)||n.set(i,t(i)),n.get(i))})}const DF=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","svg","switch","symbol","text","tspan","use","view"];function $0(e){return typeof e!="string"||e.includes("-")?!1:!!(DF.indexOf(e)>-1||/[A-Z]/.test(e))}const Yd={};function RF(e){Object.assign(Yd,e)}const Qd=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Eu=new Set(Qd);function Mk(e,{layout:t,layoutId:n}){return Eu.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Yd[e]||e==="opacity")}const qn=e=>!!(e!=null&&e.getVelocity),$F={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},NF=(e,t)=>Qd.indexOf(e)-Qd.indexOf(t);function MF({transform:e,transformKeys:t},{enableHardwareAcceleration:n=!0,allowTransformNone:r=!0},i,s){let o="";t.sort(NF);for(const a of t)o+=`${$F[a]||a}(${e[a]}) `;return n&&!e.z&&(o+="translateZ(0)"),o=o.trim(),s?o=s(e,i?"":o):r&&i&&(o="none"),o}function Lk(e){return e.startsWith("--")}const LF=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Fk=(e,t)=>n=>Math.max(Math.min(n,t),e),al=e=>e%1?Number(e.toFixed(5)):e,Bl=/(-)?([\d]*\.?[\d])+/g,ly=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,FF=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function bu(e){return typeof e=="string"}const Ms={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},ll=Object.assign(Object.assign({},Ms),{transform:Fk(0,1)}),Cc=Object.assign(Object.assign({},Ms),{default:1}),Tu=e=>({test:t=>bu(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Gr=Tu("deg"),ar=Tu("%"),oe=Tu("px"),VF=Tu("vh"),jF=Tu("vw"),SS=Object.assign(Object.assign({},ar),{parse:e=>ar.parse(e)/100,transform:e=>ar.transform(e*100)}),N0=(e,t)=>n=>Boolean(bu(n)&&FF.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),Vk=(e,t,n)=>r=>{if(!bu(r))return r;const[i,s,o,a]=r.match(Bl);return{[e]:parseFloat(i),[t]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},rs={test:N0("hsl","hue"),parse:Vk("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+ar.transform(al(t))+", "+ar.transform(al(n))+", "+al(ll.transform(r))+")"},UF=Fk(0,255),cm=Object.assign(Object.assign({},Ms),{transform:e=>Math.round(UF(e))}),oi={test:N0("rgb","red"),parse:Vk("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+cm.transform(e)+", "+cm.transform(t)+", "+cm.transform(n)+", "+al(ll.transform(r))+")"};function zF(e){let t="",n="",r="",i="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),r=e.substr(5,2),i=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),r=e.substr(3,1),i=e.substr(4,1),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const uy={test:N0("#"),parse:zF,transform:oi.transform},Lt={test:e=>oi.test(e)||uy.test(e)||rs.test(e),parse:e=>oi.test(e)?oi.parse(e):rs.test(e)?rs.parse(e):uy.parse(e),transform:e=>bu(e)?e:e.hasOwnProperty("red")?oi.transform(e):rs.transform(e)},jk="${c}",Uk="${n}";function BF(e){var t,n,r,i;return isNaN(e)&&bu(e)&&((n=(t=e.match(Bl))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((i=(r=e.match(ly))===null||r===void 0?void 0:r.length)!==null&&i!==void 0?i:0)>0}function zk(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const r=e.match(ly);r&&(n=r.length,e=e.replace(ly,jk),t.push(...r.map(Lt.parse)));const i=e.match(Bl);return i&&(e=e.replace(Bl,Uk),t.push(...i.map(Ms.parse))),{values:t,numColors:n,tokenised:e}}function Bk(e){return zk(e).values}function Hk(e){const{values:t,numColors:n,tokenised:r}=zk(e),i=t.length;return s=>{let o=r;for(let a=0;a<i;a++)o=o.replace(a<n?jk:Uk,a<n?Lt.transform(s[a]):al(s[a]));return o}}const HF=e=>typeof e=="number"?0:e;function WF(e){const t=Bk(e);return Hk(e)(t.map(HF))}const Dr={test:BF,parse:Bk,createTransformer:Hk,getAnimatableNone:WF},qF=new Set(["brightness","contrast","saturate","opacity"]);function GF(e){let[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Bl)||[];if(!r)return e;const i=n.replace(r,"");let s=qF.has(t)?1:0;return r!==n&&(s*=100),t+"("+s+i+")"}const KF=/([a-z-]*)\(.*?\)/g,cy=Object.assign(Object.assign({},Dr),{getAnimatableNone:e=>{const t=e.match(KF);return t?t.map(GF).join(" "):e}}),xS={...Ms,transform:Math.round},Wk={borderWidth:oe,borderTopWidth:oe,borderRightWidth:oe,borderBottomWidth:oe,borderLeftWidth:oe,borderRadius:oe,radius:oe,borderTopLeftRadius:oe,borderTopRightRadius:oe,borderBottomRightRadius:oe,borderBottomLeftRadius:oe,width:oe,maxWidth:oe,height:oe,maxHeight:oe,size:oe,top:oe,right:oe,bottom:oe,left:oe,padding:oe,paddingTop:oe,paddingRight:oe,paddingBottom:oe,paddingLeft:oe,margin:oe,marginTop:oe,marginRight:oe,marginBottom:oe,marginLeft:oe,rotate:Gr,rotateX:Gr,rotateY:Gr,rotateZ:Gr,scale:Cc,scaleX:Cc,scaleY:Cc,scaleZ:Cc,skew:Gr,skewX:Gr,skewY:Gr,distance:oe,translateX:oe,translateY:oe,translateZ:oe,x:oe,y:oe,z:oe,perspective:oe,transformPerspective:oe,opacity:ll,originX:SS,originY:SS,originZ:oe,zIndex:xS,fillOpacity:ll,strokeOpacity:ll,numOctaves:xS};function M0(e,t,n,r){const{style:i,vars:s,transform:o,transformKeys:a,transformOrigin:l}=e;a.length=0;let u=!1,c=!1,d=!0;for(const f in t){const h=t[f];if(Lk(f)){s[f]=h;continue}const p=Wk[f],y=LF(h,p);if(Eu.has(f)){if(u=!0,o[f]=y,a.push(f),!d)continue;h!==(p.default||0)&&(d=!1)}else f.startsWith("origin")?(c=!0,l[f]=y):i[f]=y}if(t.transform||(u||r?i.transform=MF(e,n,d,r):i.transform&&(i.transform="none")),c){const{originX:f="50%",originY:h="50%",originZ:p=0}=l;i.transformOrigin=`${f} ${h} ${p}`}}const L0=()=>({style:{},transform:{},transformKeys:[],transformOrigin:{},vars:{}});function qk(e,t,n){for(const r in t)!qn(t[r])&&!Mk(r,n)&&(e[r]=t[r])}function YF({transformTemplate:e},t,n){return b.exports.useMemo(()=>{const r=L0();return M0(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function QF(e,t,n){const r=e.style||{},i={};return qk(i,r,e),Object.assign(i,YF(e,t,n)),e.transformValues?e.transformValues(i):i}function XF(e,t,n){const r={},i=QF(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),r.style=i,r}const JF=["animate","exit","variants","whileHover","whileTap","whileFocus","whileDrag","whileInView"],ZF=["whileTap","onTap","onTapStart","onTapCancel"],eV=["onPan","onPanStart","onPanSessionStart","onPanEnd"],tV=["whileInView","onViewportEnter","onViewportLeave","viewport"],nV=new Set(["initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","layout","layoutId","layoutDependency","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","drag","dragControls","dragListener","dragConstraints","dragDirectionLock","dragSnapToOrigin","_dragX","_dragY","dragElastic","dragMomentum","dragPropagation","dragTransition","onHoverStart","onHoverEnd","layoutScroll",...tV,...ZF,...JF,...eV]);function Xd(e){return nV.has(e)}let Gk=e=>!Xd(e);function rV(e){!e||(Gk=t=>t.startsWith("on")?!Xd(t):e(t))}try{rV(require("@emotion/is-prop-valid").default)}catch{}function iV(e,t,n){const r={};for(const i in e)(Gk(i)||n===!0&&Xd(i)||!t&&!Xd(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function ES(e,t,n){return typeof e=="string"?e:oe.transform(t+n*e)}function sV(e,t,n){const r=ES(t,e.x,e.width),i=ES(n,e.y,e.height);return`${r} ${i}`}const oV={offset:"stroke-dashoffset",array:"stroke-dasharray"},aV={offset:"strokeDashoffset",array:"strokeDasharray"};function lV(e,t,n=1,r=0,i=!0){e.pathLength=1;const s=i?oV:aV;e[s.offset]=oe.transform(-r);const o=oe.transform(t),a=oe.transform(n);e[s.array]=`${o} ${a}`}function F0(e,{attrX:t,attrY:n,originX:r,originY:i,pathLength:s,pathSpacing:o=1,pathOffset:a=0,...l},u,c){M0(e,l,u,c),e.attrs=e.style,e.style={};const{attrs:d,style:f,dimensions:h}=e;d.transform&&(h&&(f.transform=d.transform),delete d.transform),h&&(r!==void 0||i!==void 0||f.transform)&&(f.transformOrigin=sV(h,r!==void 0?r:.5,i!==void 0?i:.5)),t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),s!==void 0&&lV(d,s,o,a,!1)}const Kk=()=>({...L0(),attrs:{}});function uV(e,t){const n=b.exports.useMemo(()=>{const r=Kk();return F0(r,t,{enableHardwareAcceleration:!1},e.transformTemplate),{...r.attrs,style:{...r.style}}},[t]);if(e.style){const r={};qk(r,e.style,e),n.style={...r,...n.style}}return n}function cV(e=!1){return(n,r,i,s,{latestValues:o},a)=>{const u=($0(n)?uV:XF)(r,o,a),d={...iV(r,typeof n=="string",e),...u,ref:s};return i&&(d["data-projection-id"]=i),b.exports.createElement(n,d)}}const Yk=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();function Qk(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const s in n)e.style.setProperty(s,n[s])}const Xk=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength"]);function Jk(e,t,n,r){Qk(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Xk.has(i)?i:Yk(i),t.attrs[i])}function V0(e){const{style:t}=e,n={};for(const r in t)(qn(t[r])||Mk(r,e))&&(n[r]=t[r]);return n}function Zk(e){const t=V0(e);for(const n in e)if(qn(e[n])){const r=n==="x"||n==="y"?"attr"+n.toUpperCase():n;t[r]=e[n]}return t}function j0(e,t,n,r={},i={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),t}const Hl=e=>Array.isArray(e),dV=e=>Boolean(e&&typeof e=="object"&&e.mix&&e.toValue),eA=e=>Hl(e)?e[e.length-1]||0:e;function rd(e){const t=qn(e)?e.get():e;return dV(t)?t.toValue():t}function fV({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,s){const o={latestValues:hV(r,i,s,e),renderState:t()};return n&&(o.mount=a=>n(r,a,o)),o}const tA=e=>(t,n)=>{const r=b.exports.useContext(ph),i=b.exports.useContext(xu),s=()=>fV(e,t,r,i);return n?s():yh(s)};function hV(e,t,n,r){const i={},s=r(e);for(const f in s)i[f]=rd(s[f]);let{initial:o,animate:a}=e;const l=gh(e),u=$k(e);t&&u&&!l&&e.inherit!==!1&&(o===void 0&&(o=t.initial),a===void 0&&(a=t.animate));let c=n?n.initial===!1:!1;c=c||o===!1;const d=c?a:o;return d&&typeof d!="boolean"&&!mh(d)&&(Array.isArray(d)?d:[d]).forEach(h=>{const p=j0(e,h);if(!p)return;const{transitionEnd:y,transition:w,...v}=p;for(const m in v){let g=v[m];if(Array.isArray(g)){const _=c?g.length-1:0;g=g[_]}g!==null&&(i[m]=g)}for(const m in y)i[m]=y[m]}),i}const pV={useVisualState:tA({scrapeMotionValuesFromProps:Zk,createRenderState:Kk,onMount:(e,t,{renderState:n,latestValues:r})=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}F0(n,r,{enableHardwareAcceleration:!1},e.transformTemplate),Jk(t,n)}})},mV={useVisualState:tA({scrapeMotionValuesFromProps:V0,createRenderState:L0})};function gV(e,{forwardMotionProps:t=!1},n,r,i){return{...$0(e)?pV:mV,preloadedFeatures:n,useRender:cV(t),createVisualElement:r,projectionNodeConstructor:i,Component:e}}var Oe;(function(e){e.Animate="animate",e.Hover="whileHover",e.Tap="whileTap",e.Drag="whileDrag",e.Focus="whileFocus",e.InView="whileInView",e.Exit="exit"})(Oe||(Oe={}));function vh(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function dy(e,t,n,r){b.exports.useEffect(()=>{const i=e.current;if(n&&i)return vh(i,t,n,r)},[e,t,n,r])}function yV({whileFocus:e,visualElement:t}){const{animationState:n}=t,r=()=>{n&&n.setActive(Oe.Focus,!0)},i=()=>{n&&n.setActive(Oe.Focus,!1)};dy(t,"focus",e?r:void 0),dy(t,"blur",e?i:void 0)}function nA(e){return typeof PointerEvent<"u"&&e instanceof PointerEvent?e.pointerType==="mouse":e instanceof MouseEvent}function rA(e){return!!e.touches}function vV(e){return t=>{const n=t instanceof MouseEvent;(!n||n&&t.button===0)&&e(t)}}const wV={pageX:0,pageY:0};function _V(e,t="page"){const r=e.touches[0]||e.changedTouches[0]||wV;return{x:r[t+"X"],y:r[t+"Y"]}}function SV(e,t="page"){return{x:e[t+"X"],y:e[t+"Y"]}}function U0(e,t="page"){return{point:rA(e)?_V(e,t):SV(e,t)}}const iA=(e,t=!1)=>{const n=r=>e(r,U0(r));return t?vV(n):n},xV=()=>Ns&&window.onpointerdown===null,EV=()=>Ns&&window.ontouchstart===null,bV=()=>Ns&&window.onmousedown===null,TV={pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointercancel:"mousecancel",pointerover:"mouseover",pointerout:"mouseout",pointerenter:"mouseenter",pointerleave:"mouseleave"},CV={pointerdown:"touchstart",pointermove:"touchmove",pointerup:"touchend",pointercancel:"touchcancel"};function sA(e){return xV()?e:EV()?CV[e]:bV()?TV[e]:e}function Co(e,t,n,r){return vh(e,sA(t),iA(n,t==="pointerdown"),r)}function Jd(e,t,n,r){return dy(e,sA(t),n&&iA(n,t==="pointerdown"),r)}function oA(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const bS=oA("dragHorizontal"),TS=oA("dragVertical");function aA(e){let t=!1;if(e==="y")t=TS();else if(e==="x")t=bS();else{const n=bS(),r=TS();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function lA(){const e=aA(!0);return e?(e(),!1):!0}function CS(e,t,n){return(r,i)=>{!nA(r)||lA()||(e.animationState&&e.animationState.setActive(Oe.Hover,t),n&&n(r,i))}}function IV({onHoverStart:e,onHoverEnd:t,whileHover:n,visualElement:r}){Jd(r,"pointerenter",e||n?CS(r,!0,e):void 0,{passive:!e}),Jd(r,"pointerleave",t||n?CS(r,!1,t):void 0,{passive:!t})}const uA=(e,t)=>t?e===t?!0:uA(e,t.parentElement):!1;function z0(e){return b.exports.useEffect(()=>()=>e(),[])}function Cu(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}var kV=function(){},Zd=function(){};const ef=(e,t,n)=>Math.min(Math.max(n,e),t),dm=.001,AV=.01,IS=10,OV=.05,PV=1;function DV({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,s;kV(e<=IS*1e3);let o=1-t;o=ef(OV,PV,o),e=ef(AV,IS,e/1e3),o<1?(i=u=>{const c=u*o,d=c*e,f=c-n,h=fy(u,o),p=Math.exp(-d);return dm-f/h*p},s=u=>{const d=u*o*e,f=d*n+n,h=Math.pow(o,2)*Math.pow(u,2)*e,p=Math.exp(-d),y=fy(Math.pow(u,2),o);return(-i(u)+dm>0?-1:1)*((f-h)*p)/y}):(i=u=>{const c=Math.exp(-u*e),d=(u-n)*e+1;return-dm+c*d},s=u=>{const c=Math.exp(-u*e),d=(n-u)*(e*e);return c*d});const a=5/e,l=$V(i,s,a);if(e=e*1e3,isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:o*2*Math.sqrt(r*u),duration:e}}}const RV=12;function $V(e,t,n){let r=n;for(let i=1;i<RV;i++)r=r-e(r)/t(r);return r}function fy(e,t){return e*Math.sqrt(1-t*t)}const NV=["duration","bounce"],MV=["stiffness","damping","mass"];function kS(e,t){return t.some(n=>e[n]!==void 0)}function LV(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!kS(e,MV)&&kS(e,NV)){const n=DV(e);t=Object.assign(Object.assign(Object.assign({},t),n),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function B0(e){var{from:t=0,to:n=1,restSpeed:r=2,restDelta:i}=e,s=Cu(e,["from","to","restSpeed","restDelta"]);const o={done:!1,value:t};let{stiffness:a,damping:l,mass:u,velocity:c,duration:d,isResolvedFromDuration:f}=LV(s),h=AS,p=AS;function y(){const w=c?-(c/1e3):0,v=n-t,m=l/(2*Math.sqrt(a*u)),g=Math.sqrt(a/u)/1e3;if(i===void 0&&(i=Math.min(Math.abs(n-t)/100,.4)),m<1){const _=fy(g,m);h=E=>{const I=Math.exp(-m*g*E);return n-I*((w+m*g*v)/_*Math.sin(_*E)+v*Math.cos(_*E))},p=E=>{const I=Math.exp(-m*g*E);return m*g*I*(Math.sin(_*E)*(w+m*g*v)/_+v*Math.cos(_*E))-I*(Math.cos(_*E)*(w+m*g*v)-_*v*Math.sin(_*E))}}else if(m===1)h=_=>n-Math.exp(-g*_)*(v+(w+g*v)*_);else{const _=g*Math.sqrt(m*m-1);h=E=>{const I=Math.exp(-m*g*E),C=Math.min(_*E,300);return n-I*((w+m*g*v)*Math.sinh(C)+_*v*Math.cosh(C))/_}}}return y(),{next:w=>{const v=h(w);if(f)o.done=w>=d;else{const m=p(w)*1e3,g=Math.abs(m)<=r,_=Math.abs(n-v)<=i;o.done=g&&_}return o.value=o.done?n:v,o},flipTarget:()=>{c=-c,[t,n]=[n,t],y()}}}B0.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const AS=e=>0,Wl=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Ke=(e,t,n)=>-n*e+n*t+e;function fm(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function OS({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,s=0,o=0;if(!t)i=s=o=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=fm(l,a,e+1/3),s=fm(l,a,e),o=fm(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:r}}const FV=(e,t,n)=>{const r=e*e,i=t*t;return Math.sqrt(Math.max(0,n*(i-r)+r))},VV=[uy,oi,rs],PS=e=>VV.find(t=>t.test(e)),cA=(e,t)=>{let n=PS(e),r=PS(t),i=n.parse(e),s=r.parse(t);n===rs&&(i=OS(i),n=oi),r===rs&&(s=OS(s),r=oi);const o=Object.assign({},i);return a=>{for(const l in o)l!=="alpha"&&(o[l]=FV(i[l],s[l],a));return o.alpha=Ke(i.alpha,s.alpha,a),n.transform(o)}},hy=e=>typeof e=="number",jV=(e,t)=>n=>t(e(n)),wh=(...e)=>e.reduce(jV);function dA(e,t){return hy(e)?n=>Ke(e,t,n):Lt.test(e)?cA(e,t):hA(e,t)}const fA=(e,t)=>{const n=[...e],r=n.length,i=e.map((s,o)=>dA(s,t[o]));return s=>{for(let o=0;o<r;o++)n[o]=i[o](s);return n}},UV=(e,t)=>{const n=Object.assign(Object.assign({},e),t),r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=dA(e[i],t[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}};function DS(e){const t=Dr.parse(e),n=t.length;let r=0,i=0,s=0;for(let o=0;o<n;o++)r||typeof t[o]=="number"?r++:t[o].hue!==void 0?s++:i++;return{parsed:t,numNumbers:r,numRGB:i,numHSL:s}}const hA=(e,t)=>{const n=Dr.createTransformer(t),r=DS(e),i=DS(t);return r.numHSL===i.numHSL&&r.numRGB===i.numRGB&&r.numNumbers>=i.numNumbers?wh(fA(r.parsed,i.parsed),n):o=>`${o>0?t:e}`},zV=(e,t)=>n=>Ke(e,t,n);function BV(e){if(typeof e=="number")return zV;if(typeof e=="string")return Lt.test(e)?cA:hA;if(Array.isArray(e))return fA;if(typeof e=="object")return UV}function HV(e,t,n){const r=[],i=n||BV(e[0]),s=e.length-1;for(let o=0;o<s;o++){let a=i(e[o],e[o+1]);if(t){const l=Array.isArray(t)?t[o]:t;a=wh(l,a)}r.push(a)}return r}function WV([e,t],[n]){return r=>n(Wl(e,t,r))}function qV(e,t){const n=e.length,r=n-1;return i=>{let s=0,o=!1;if(i<=e[0]?o=!0:i>=e[r]&&(s=r-1,o=!0),!o){let l=1;for(;l<n&&!(e[l]>i||l===r);l++);s=l-1}const a=Wl(e[s],e[s+1],i);return t[s](a)}}function pA(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const s=e.length;Zd(s===t.length),Zd(!r||!Array.isArray(r)||r.length===s-1),e[0]>e[s-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const o=HV(t,r,i),a=s===2?WV(e,o):qV(e,o);return n?l=>a(ef(e[0],e[s-1],l)):a}const _h=e=>t=>1-e(1-t),H0=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,GV=e=>t=>Math.pow(t,e),mA=e=>t=>t*t*((e+1)*t-e),KV=e=>{const t=mA(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},gA=1.525,YV=4/11,QV=8/11,XV=9/10,W0=e=>e,q0=GV(2),JV=_h(q0),yA=H0(q0),vA=e=>1-Math.sin(Math.acos(e)),G0=_h(vA),ZV=H0(G0),K0=mA(gA),ej=_h(K0),tj=H0(K0),nj=KV(gA),rj=4356/361,ij=35442/1805,sj=16061/1805,tf=e=>{if(e===1||e===0)return e;const t=e*e;return e<YV?7.5625*t:e<QV?9.075*t-9.9*e+3.4:e<XV?rj*t-ij*e+sj:10.8*e*e-20.52*e+10.72},oj=_h(tf),aj=e=>e<.5?.5*(1-tf(1-e*2)):.5*tf(e*2-1)+.5;function lj(e,t){return e.map(()=>t||yA).splice(0,e.length-1)}function uj(e){const t=e.length;return e.map((n,r)=>r!==0?r/(t-1):0)}function cj(e,t){return e.map(n=>n*t)}function id({from:e=0,to:t=1,ease:n,offset:r,duration:i=300}){const s={done:!1,value:e},o=Array.isArray(t)?t:[e,t],a=cj(r&&r.length===o.length?r:uj(o),i);function l(){return pA(a,o,{ease:Array.isArray(n)?n:lj(o,n)})}let u=l();return{next:c=>(s.value=u(c),s.done=c>=i,s),flipTarget:()=>{o.reverse(),u=l()}}}function dj({velocity:e=0,from:t=0,power:n=.8,timeConstant:r=350,restDelta:i=.5,modifyTarget:s}){const o={done:!1,value:t};let a=n*e;const l=t+a,u=s===void 0?l:s(l);return u!==l&&(a=u-t),{next:c=>{const d=-a*Math.exp(-c/r);return o.done=!(d>i||d<-i),o.value=o.done?u:u+d,o},flipTarget:()=>{}}}const RS={keyframes:id,spring:B0,decay:dj};function fj(e){if(Array.isArray(e.to))return id;if(RS[e.type])return RS[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?id:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?B0:id}const wA=1/60*1e3,hj=typeof performance<"u"?()=>performance.now():()=>Date.now(),_A=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(hj()),wA);function pj(e){let t=[],n=[],r=0,i=!1,s=!1;const o=new WeakSet,a={schedule:(l,u=!1,c=!1)=>{const d=c&&i,f=d?t:n;return u&&o.add(l),f.indexOf(l)===-1&&(f.push(l),d&&i&&(r=t.length)),l},cancel:l=>{const u=n.indexOf(l);u!==-1&&n.splice(u,1),o.delete(l)},process:l=>{if(i){s=!0;return}if(i=!0,[t,n]=[n,t],n.length=0,r=t.length,r)for(let u=0;u<r;u++){const c=t[u];c(l),o.has(c)&&(a.schedule(c),e())}i=!1,s&&(s=!1,a.process(l))}};return a}const mj=40;let py=!0,ql=!1,my=!1;const Io={delta:0,timestamp:0},Iu=["read","update","preRender","render","postRender"],Sh=Iu.reduce((e,t)=>(e[t]=pj(()=>ql=!0),e),{}),bn=Iu.reduce((e,t)=>{const n=Sh[t];return e[t]=(r,i=!1,s=!1)=>(ql||yj(),n.schedule(r,i,s)),e},{}),Ii=Iu.reduce((e,t)=>(e[t]=Sh[t].cancel,e),{}),hm=Iu.reduce((e,t)=>(e[t]=()=>Sh[t].process(Io),e),{}),gj=e=>Sh[e].process(Io),SA=e=>{ql=!1,Io.delta=py?wA:Math.max(Math.min(e-Io.timestamp,mj),1),Io.timestamp=e,my=!0,Iu.forEach(gj),my=!1,ql&&(py=!1,_A(SA))},yj=()=>{ql=!0,py=!0,my||_A(SA)},nf=()=>Io;function xA(e,t,n=0){return e-t-n}function vj(e,t,n=0,r=!0){return r?xA(t+-e,t,n):t-(e-t)+n}function wj(e,t,n,r){return r?e>=t+n:e<=-n}const _j=e=>{const t=({delta:n})=>e(n);return{start:()=>bn.update(t,!0),stop:()=>Ii.update(t)}};function EA(e){var t,n,{from:r,autoplay:i=!0,driver:s=_j,elapsed:o=0,repeat:a=0,repeatType:l="loop",repeatDelay:u=0,onPlay:c,onStop:d,onComplete:f,onRepeat:h,onUpdate:p}=e,y=Cu(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:w}=y,v,m=0,g=y.duration,_,E=!1,I=!0,C;const O=fj(y);!((n=(t=O).needsInterpolation)===null||n===void 0)&&n.call(t,r,w)&&(C=pA([0,100],[r,w],{clamp:!1}),r=0,w=100);const z=O(Object.assign(Object.assign({},y),{from:r,to:w}));function F(){m++,l==="reverse"?(I=m%2===0,o=vj(o,g,u,I)):(o=xA(o,g,u),l==="mirror"&&z.flipTarget()),E=!1,h&&h()}function K(){v.stop(),f&&f()}function Y(ce){if(I||(ce=-ce),o+=ce,!E){const de=z.next(Math.max(0,o));_=de.value,C&&(_=C(_)),E=I?de.done:o<=0}p==null||p(_),E&&(m===0&&(g!=null||(g=o)),m<a?wj(o,g,u,I)&&F():K())}function se(){c==null||c(),v=s(Y),v.start()}return i&&se(),{stop:()=>{d==null||d(),v.stop()}}}function bA(e,t){return t?e*(1e3/t):0}function Sj({from:e=0,velocity:t=0,min:n,max:r,power:i=.8,timeConstant:s=750,bounceStiffness:o=500,bounceDamping:a=10,restDelta:l=1,modifyTarget:u,driver:c,onUpdate:d,onComplete:f,onStop:h}){let p;function y(g){return n!==void 0&&g<n||r!==void 0&&g>r}function w(g){return n===void 0?r:r===void 0||Math.abs(n-g)<Math.abs(r-g)?n:r}function v(g){p==null||p.stop(),p=EA(Object.assign(Object.assign({},g),{driver:c,onUpdate:_=>{var E;d==null||d(_),(E=g.onUpdate)===null||E===void 0||E.call(g,_)},onComplete:f,onStop:h}))}function m(g){v(Object.assign({type:"spring",stiffness:o,damping:a,restDelta:l},g))}if(y(e))m({from:e,velocity:t,to:w(e)});else{let g=i*t+e;typeof u<"u"&&(g=u(g));const _=w(g),E=_===n?-1:1;let I,C;const O=z=>{I=C,C=z,t=bA(z-I,nf().delta),(E===1&&z>_||E===-1&&z<_)&&m({from:z,to:_,velocity:t})};v({type:"decay",from:e,velocity:t,timeConstant:s,power:i,restDelta:l,modifyTarget:u,onUpdate:y(g)?O:void 0})}return{stop:()=>p==null?void 0:p.stop()}}const gy=e=>e.hasOwnProperty("x")&&e.hasOwnProperty("y"),$S=e=>gy(e)&&e.hasOwnProperty("z"),Ic=(e,t)=>Math.abs(e-t);function Y0(e,t){if(hy(e)&&hy(t))return Ic(e,t);if(gy(e)&&gy(t)){const n=Ic(e.x,t.x),r=Ic(e.y,t.y),i=$S(e)&&$S(t)?Ic(e.z,t.z):0;return Math.sqrt(Math.pow(n,2)+Math.pow(r,2)+Math.pow(i,2))}}const TA=(e,t)=>1-3*t+3*e,CA=(e,t)=>3*t-6*e,IA=e=>3*e,rf=(e,t,n)=>((TA(t,n)*e+CA(t,n))*e+IA(t))*e,kA=(e,t,n)=>3*TA(t,n)*e*e+2*CA(t,n)*e+IA(t),xj=1e-7,Ej=10;function bj(e,t,n,r,i){let s,o,a=0;do o=t+(n-t)/2,s=rf(o,r,i)-e,s>0?n=o:t=o;while(Math.abs(s)>xj&&++a<Ej);return o}const Tj=8,Cj=.001;function Ij(e,t,n,r){for(let i=0;i<Tj;++i){const s=kA(t,n,r);if(s===0)return t;t-=(rf(t,n,r)-e)/s}return t}const sd=11,kc=1/(sd-1);function kj(e,t,n,r){if(e===t&&n===r)return W0;const i=new Float32Array(sd);for(let o=0;o<sd;++o)i[o]=rf(o*kc,e,n);function s(o){let a=0,l=1;const u=sd-1;for(;l!==u&&i[l]<=o;++l)a+=kc;--l;const c=(o-i[l])/(i[l+1]-i[l]),d=a+c*kc,f=kA(d,e,n);return f>=Cj?Ij(o,d,e,n):f===0?d:bj(o,a,a+kc,e,n)}return o=>o===0||o===1?o:rf(s(o),t,r)}function Aj({onTap:e,onTapStart:t,onTapCancel:n,whileTap:r,visualElement:i}){const s=e||t||n||r,o=b.exports.useRef(!1),a=b.exports.useRef(null),l={passive:!(t||e||n||h)};function u(){a.current&&a.current(),a.current=null}function c(){return u(),o.current=!1,i.animationState&&i.animationState.setActive(Oe.Tap,!1),!lA()}function d(p,y){!c()||(uA(i.getInstance(),p.target)?e&&e(p,y):n&&n(p,y))}function f(p,y){!c()||n&&n(p,y)}function h(p,y){u(),!o.current&&(o.current=!0,a.current=wh(Co(window,"pointerup",d,l),Co(window,"pointercancel",f,l)),i.animationState&&i.animationState.setActive(Oe.Tap,!0),t&&t(p,y))}Jd(i,"pointerdown",s?h:void 0,l),z0(u)}const Oj="production",AA=typeof process>"u"||process.env===void 0?Oj:"production",NS=new Set;function OA(e,t,n){e||NS.has(t)||(console.warn(t),n&&console.warn(n),NS.add(t))}const yy=new WeakMap,pm=new WeakMap,Pj=e=>{const t=yy.get(e.target);t&&t(e)},Dj=e=>{e.forEach(Pj)};function Rj({root:e,...t}){const n=e||document;pm.has(n)||pm.set(n,{});const r=pm.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(Dj,{root:e,...t})),r[i]}function $j(e,t,n){const r=Rj(t);return yy.set(e,n),r.observe(e),()=>{yy.delete(e),r.unobserve(e)}}function Nj({visualElement:e,whileInView:t,onViewportEnter:n,onViewportLeave:r,viewport:i={}}){const s=b.exports.useRef({hasEnteredView:!1,isInView:!1});let o=Boolean(t||n||r);i.once&&s.current.hasEnteredView&&(o=!1),(typeof IntersectionObserver>"u"?Fj:Lj)(o,s.current,e,i)}const Mj={some:0,all:1};function Lj(e,t,n,{root:r,margin:i,amount:s="some",once:o}){b.exports.useEffect(()=>{if(!e)return;const a={root:r==null?void 0:r.current,rootMargin:i,threshold:typeof s=="number"?s:Mj[s]},l=u=>{const{isIntersecting:c}=u;if(t.isInView===c||(t.isInView=c,o&&!c&&t.hasEnteredView))return;c&&(t.hasEnteredView=!0),n.animationState&&n.animationState.setActive(Oe.InView,c);const d=n.getProps(),f=c?d.onViewportEnter:d.onViewportLeave;f&&f(u)};return $j(n.getInstance(),a,l)},[e,r,i,s])}function Fj(e,t,n,{fallback:r=!0}){b.exports.useEffect(()=>{!e||!r||(AA!=="production"&&OA(!1,"IntersectionObserver not available on this device. whileInView animations will trigger on mount."),requestAnimationFrame(()=>{t.hasEnteredView=!0;const{onViewportEnter:i}=n.getProps();i&&i(null),n.animationState&&n.animationState.setActive(Oe.InView,!0)}))},[e])}const ai=e=>t=>(e(t),null),Vj={inView:ai(Nj),tap:ai(Aj),focus:ai(yV),hover:ai(IV)};function PA(){const e=b.exports.useContext(xu);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=b.exports.useId();return b.exports.useEffect(()=>r(i),[]),!t&&n?[!1,()=>n&&n(i)]:[!0]}function DA(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const sf=e=>e*1e3,jj={linear:W0,easeIn:q0,easeInOut:yA,easeOut:JV,circIn:vA,circInOut:ZV,circOut:G0,backIn:K0,backInOut:tj,backOut:ej,anticipate:nj,bounceIn:oj,bounceInOut:aj,bounceOut:tf},MS=e=>{if(Array.isArray(e)){Zd(e.length===4);const[t,n,r,i]=e;return kj(t,n,r,i)}else if(typeof e=="string")return jj[e];return e},Uj=e=>Array.isArray(e)&&typeof e[0]!="number",LS=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&Dr.test(t)&&!t.startsWith("url(")),Bi=()=>({type:"spring",stiffness:500,damping:25,restSpeed:10}),Ac=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),mm=()=>({type:"keyframes",ease:"linear",duration:.3}),zj=e=>({type:"keyframes",duration:.8,values:e}),FS={x:Bi,y:Bi,z:Bi,rotate:Bi,rotateX:Bi,rotateY:Bi,rotateZ:Bi,scaleX:Ac,scaleY:Ac,scale:Ac,opacity:mm,backgroundColor:mm,color:mm,default:Ac},Bj=(e,t)=>{let n;return Hl(t)?n=zj:n=FS[e]||FS.default,{to:t,...n(t)}},Hj={...Wk,color:Lt,backgroundColor:Lt,outlineColor:Lt,fill:Lt,stroke:Lt,borderColor:Lt,borderTopColor:Lt,borderRightColor:Lt,borderBottomColor:Lt,borderLeftColor:Lt,filter:cy,WebkitFilter:cy},Q0=e=>Hj[e];function X0(e,t){var n;let r=Q0(e);return r!==cy&&(r=Dr),(n=r.getAnimatableNone)===null||n===void 0?void 0:n.call(r,t)}const Wj={current:!1};function RA(e,t){const n=performance.now(),r=({timestamp:i})=>{const s=i-n;s>=t&&(Ii.read(r),e(s-t))};return bn.read(r,!0),()=>Ii.read(r)}function qj({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:o,repeatDelay:a,from:l,...u}){return!!Object.keys(u).length}function Gj({ease:e,times:t,yoyo:n,flip:r,loop:i,...s}){const o={...s};return t&&(o.offset=t),s.duration&&(o.duration=sf(s.duration)),s.repeatDelay&&(o.repeatDelay=sf(s.repeatDelay)),e&&(o.ease=Uj(e)?e.map(MS):MS(e)),s.type==="tween"&&(o.type="keyframes"),(n||i||r)&&(n?o.repeatType="reverse":i?o.repeatType="loop":r&&(o.repeatType="mirror"),o.repeat=i||n||r||s.repeat),s.type!=="spring"&&(o.type="keyframes"),o}function Kj(e,t){var n,r;return(r=(n=(J0(e,t)||{}).delay)!==null&&n!==void 0?n:e.delay)!==null&&r!==void 0?r:0}function Yj(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function Qj(e,t,n){return Array.isArray(t.to)&&e.duration===void 0&&(e.duration=.8),Yj(t),qj(e)||(e={...e,...Bj(n,t.to)}),{...t,...Gj(e)}}function Xj(e,t,n,r,i){const s=J0(r,e)||{};let o=s.from!==void 0?s.from:t.get();const a=LS(e,n);o==="none"&&a&&typeof n=="string"?o=X0(e,n):VS(o)&&typeof n=="string"?o=jS(n):!Array.isArray(n)&&VS(n)&&typeof o=="string"&&(n=jS(o));const l=LS(e,o);function u(){const d={from:o,to:n,velocity:t.getVelocity(),onComplete:i,onUpdate:f=>t.set(f)};return s.type==="inertia"||s.type==="decay"?Sj({...d,...s}):EA({...Qj(s,d,e),onUpdate:f=>{d.onUpdate(f),s.onUpdate&&s.onUpdate(f)},onComplete:()=>{d.onComplete(),s.onComplete&&s.onComplete()}})}function c(){const d=eA(n);return t.set(d),i(),s.onUpdate&&s.onUpdate(d),s.onComplete&&s.onComplete(),{stop:()=>{}}}return!l||!a||s.type===!1?c:u}function VS(e){return e===0||typeof e=="string"&&parseFloat(e)===0&&e.indexOf(" ")===-1}function jS(e){return typeof e=="number"?0:X0("",e)}function J0(e,t){return e[t]||e.default||e}function Z0(e,t,n,r={}){return Wj.current&&(r={type:!1}),t.start(i=>{let s;const o=Xj(e,t,n,r,i),a=Kj(r,e),l=()=>s=o();let u;return a?u=RA(l,sf(a)):l(),()=>{u&&u(),s&&s.stop()}})}const Jj=e=>/^\-?\d*\.?\d+$/.test(e),Zj=e=>/^0[^.\s]+$/.test(e);function e1(e,t){e.indexOf(t)===-1&&e.push(t)}function t1(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class ul{constructor(){this.subscriptions=[]}add(t){return e1(this.subscriptions,t),()=>t1(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(!!i)if(i===1)this.subscriptions[0](t,n,r);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const e3=e=>!isNaN(parseFloat(e));class t3{constructor(t){this.version="7.6.1",this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new ul,this.velocityUpdateSubscribers=new ul,this.renderSubscribers=new ul,this.canTrackVelocity=!1,this.updateAndNotify=(n,r=!0)=>{this.prev=this.current,this.current=n;const{delta:i,timestamp:s}=nf();this.lastUpdated!==s&&(this.timeDelta=i,this.lastUpdated=s,bn.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.updateSubscribers.notify(this.current),this.velocityUpdateSubscribers.getSize()&&this.velocityUpdateSubscribers.notify(this.getVelocity()),r&&this.renderSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>bn.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{n!==this.lastUpdated&&(this.prev=this.current,this.velocityUpdateSubscribers.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=e3(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}onRenderRequest(t){return t(this.get()),this.renderSubscribers.add(t)}attach(t){this.passiveEffect=t}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?bA(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.stopAnimation=t(n)}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.renderSubscribers.clear(),this.stop()}}function Uo(e){return new t3(e)}const $A=e=>t=>t.test(e),n3={test:e=>e==="auto",parse:e=>e},NA=[Ms,oe,ar,Gr,jF,VF,n3],Oa=e=>NA.find($A(e)),r3=[...NA,Lt,Dr],i3=e=>r3.find($A(e));function s3(e){const t={};return e.forEachValue((n,r)=>t[r]=n.get()),t}function o3(e){const t={};return e.forEachValue((n,r)=>t[r]=n.getVelocity()),t}function xh(e,t,n){const r=e.getProps();return j0(r,t,n!==void 0?n:r.custom,s3(e),o3(e))}function a3(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Uo(n))}function l3(e,t){const n=xh(e,t);let{transitionEnd:r={},transition:i={},...s}=n?e.makeTargetAnimatable(n,!1):{};s={...s,...r};for(const o in s){const a=eA(s[o]);a3(e,o,a)}}function u3(e,t,n){var r,i;const s=Object.keys(t).filter(a=>!e.hasValue(a)),o=s.length;if(!!o)for(let a=0;a<o;a++){const l=s[a],u=t[l];let c=null;Array.isArray(u)&&(c=u[0]),c===null&&(c=(i=(r=n[l])!==null&&r!==void 0?r:e.readValue(l))!==null&&i!==void 0?i:t[l]),c!=null&&(typeof c=="string"&&(Jj(c)||Zj(c))?c=parseFloat(c):!i3(c)&&Dr.test(u)&&(c=X0(l,u)),e.addValue(l,Uo(c)),n[l]===void 0&&(n[l]=c),e.setBaseTarget(l,c))}}function c3(e,t){return t?(t[e]||t.default||t).from:void 0}function d3(e,t,n){var r;const i={};for(const s in e){const o=c3(s,t);i[s]=o!==void 0?o:(r=n.getValue(s))===null||r===void 0?void 0:r.get()}return i}function of(e){return Boolean(qn(e)&&e.add)}function f3(e,t,n={}){e.notifyAnimationStart(t);let r;if(Array.isArray(t)){const i=t.map(s=>vy(e,s,n));r=Promise.all(i)}else if(typeof t=="string")r=vy(e,t,n);else{const i=typeof t=="function"?xh(e,t,n.custom):t;r=MA(e,i,n)}return r.then(()=>e.notifyAnimationComplete(t))}function vy(e,t,n={}){var r;const i=xh(e,t,n.custom);let{transition:s=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(s=n.transitionOverride);const o=i?()=>MA(e,i,n):()=>Promise.resolve(),a=!((r=e.variantChildren)===null||r===void 0)&&r.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:d,staggerDirection:f}=s;return h3(e,t,c+u,d,f,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[u,c]=l==="beforeChildren"?[o,a]:[a,o];return u().then(c)}else return Promise.all([o(),a(n.delay)])}function MA(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var s;let{transition:o=e.getDefaultTransition(),transitionEnd:a,...l}=e.makeTargetAnimatable(t);const u=e.getValue("willChange");r&&(o=r);const c=[],d=i&&((s=e.animationState)===null||s===void 0?void 0:s.getState()[i]);for(const f in l){const h=e.getValue(f),p=l[f];if(!h||p===void 0||d&&m3(d,f))continue;let y={delay:n,...o};e.shouldReduceMotion&&Eu.has(f)&&(y={...y,type:!1,delay:0});let w=Z0(f,h,p,y);of(u)&&(u.add(f),w=w.then(()=>u.remove(f))),c.push(w)}return Promise.all(c).then(()=>{a&&l3(e,a)})}function h3(e,t,n=0,r=0,i=1,s){const o=[],a=(e.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>a-u*r;return Array.from(e.variantChildren).sort(p3).forEach((u,c)=>{o.push(vy(u,t,{...s,delay:n+l(c)}).then(()=>u.notifyAnimationComplete(t)))}),Promise.all(o)}function p3(e,t){return e.sortNodePosition(t)}function m3({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}const n1=[Oe.Animate,Oe.InView,Oe.Focus,Oe.Hover,Oe.Tap,Oe.Drag,Oe.Exit],g3=[...n1].reverse(),y3=n1.length;function v3(e){return t=>Promise.all(t.map(({animation:n,options:r})=>f3(e,n,r)))}function w3(e){let t=v3(e);const n=S3();let r=!0;const i=(l,u)=>{const c=xh(e,u);if(c){const{transition:d,transitionEnd:f,...h}=c;l={...l,...h,...f}}return l};function s(l){t=l(e)}function o(l,u){var c;const d=e.getProps(),f=e.getVariantContext(!0)||{},h=[],p=new Set;let y={},w=1/0;for(let m=0;m<y3;m++){const g=g3[m],_=n[g],E=(c=d[g])!==null&&c!==void 0?c:f[g],I=Ul(E),C=g===u?_.isActive:null;C===!1&&(w=m);let O=E===f[g]&&E!==d[g]&&I;if(O&&r&&e.manuallyAnimateOnMount&&(O=!1),_.protectedKeys={...y},!_.isActive&&C===null||!E&&!_.prevProp||mh(E)||typeof E=="boolean")continue;const z=_3(_.prevProp,E);let F=z||g===u&&_.isActive&&!O&&I||m>w&&I;const K=Array.isArray(E)?E:[E];let Y=K.reduce(i,{});C===!1&&(Y={});const{prevResolvedValues:se={}}=_,ce={...se,...Y},de=fe=>{F=!0,p.delete(fe),_.needsAnimating[fe]=!0};for(const fe in ce){const Ee=Y[fe],V=se[fe];y.hasOwnProperty(fe)||(Ee!==V?Hl(Ee)&&Hl(V)?!DA(Ee,V)||z?de(fe):_.protectedKeys[fe]=!0:Ee!==void 0?de(fe):p.add(fe):Ee!==void 0&&p.has(fe)?de(fe):_.protectedKeys[fe]=!0)}_.prevProp=E,_.prevResolvedValues=Y,_.isActive&&(y={...y,...Y}),r&&e.blockInitialAnimation&&(F=!1),F&&!O&&h.push(...K.map(fe=>({animation:fe,options:{type:g,...l}})))}if(p.size){const m={};p.forEach(g=>{const _=e.getBaseTarget(g);_!==void 0&&(m[g]=_)}),h.push({animation:m})}let v=Boolean(h.length);return r&&d.initial===!1&&!e.manuallyAnimateOnMount&&(v=!1),r=!1,v?t(h):Promise.resolve()}function a(l,u,c){var d;if(n[l].isActive===u)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(h=>{var p;return(p=h.animationState)===null||p===void 0?void 0:p.setActive(l,u)}),n[l].isActive=u;const f=o(c,l);for(const h in n)n[h].protectedKeys={};return f}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n}}function _3(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!DA(t,e):!1}function Hi(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function S3(){return{[Oe.Animate]:Hi(!0),[Oe.InView]:Hi(),[Oe.Hover]:Hi(),[Oe.Tap]:Hi(),[Oe.Drag]:Hi(),[Oe.Focus]:Hi(),[Oe.Exit]:Hi()}}const x3={animation:ai(({visualElement:e,animate:t})=>{e.animationState||(e.animationState=w3(e)),mh(t)&&b.exports.useEffect(()=>t.subscribe(e),[t])}),exit:ai(e=>{const{custom:t,visualElement:n}=e,[r,i]=PA(),s=b.exports.useContext(xu);b.exports.useEffect(()=>{n.isPresent=r;const o=n.animationState&&n.animationState.setActive(Oe.Exit,!r,{custom:s&&s.custom||t});o&&!r&&o.then(i)},[r])})};class LA{constructor(t,n,{transformPagePoint:r}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const u=ym(this.lastMoveEventInfo,this.history),c=this.startEvent!==null,d=Y0(u.offset,{x:0,y:0})>=3;if(!c&&!d)return;const{point:f}=u,{timestamp:h}=nf();this.history.push({...f,timestamp:h});const{onStart:p,onMove:y}=this.handlers;c||(p&&p(this.lastMoveEvent,u),this.startEvent=this.lastMoveEvent),y&&y(this.lastMoveEvent,u)},this.handlePointerMove=(u,c)=>{if(this.lastMoveEvent=u,this.lastMoveEventInfo=gm(c,this.transformPagePoint),nA(u)&&u.buttons===0){this.handlePointerUp(u,c);return}bn.update(this.updatePoint,!0)},this.handlePointerUp=(u,c)=>{this.end();const{onEnd:d,onSessionEnd:f}=this.handlers,h=ym(gm(c,this.transformPagePoint),this.history);this.startEvent&&d&&d(u,h),f&&f(u,h)},rA(t)&&t.touches.length>1)return;this.handlers=n,this.transformPagePoint=r;const i=U0(t),s=gm(i,this.transformPagePoint),{point:o}=s,{timestamp:a}=nf();this.history=[{...o,timestamp:a}];const{onSessionStart:l}=n;l&&l(t,ym(s,this.history)),this.removeListeners=wh(Co(window,"pointermove",this.handlePointerMove),Co(window,"pointerup",this.handlePointerUp),Co(window,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Ii.update(this.updatePoint)}}function gm(e,t){return t?{point:t(e.point)}:e}function US(e,t){return{x:e.x-t.x,y:e.y-t.y}}function ym({point:e},t){return{point:e,delta:US(e,FA(t)),offset:US(e,E3(t)),velocity:b3(t,.1)}}function E3(e){return e[0]}function FA(e){return e[e.length-1]}function b3(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=FA(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>sf(t)));)n--;if(!r)return{x:0,y:0};const s=(i.timestamp-r.timestamp)/1e3;if(s===0)return{x:0,y:0};const o={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function cn(e){return e.max-e.min}function zS(e,t=0,n=.01){return Y0(e,t)<n}function BS(e,t,n,r=.5){e.origin=r,e.originPoint=Ke(t.min,t.max,e.origin),e.scale=cn(n)/cn(t),(zS(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=Ke(n.min,n.max,e.origin)-e.originPoint,(zS(e.translate)||isNaN(e.translate))&&(e.translate=0)}function cl(e,t,n,r){BS(e.x,t.x,n.x,r==null?void 0:r.originX),BS(e.y,t.y,n.y,r==null?void 0:r.originY)}function HS(e,t,n){e.min=n.min+t.min,e.max=e.min+cn(t)}function T3(e,t,n){HS(e.x,t.x,n.x),HS(e.y,t.y,n.y)}function WS(e,t,n){e.min=t.min-n.min,e.max=e.min+cn(t)}function dl(e,t,n){WS(e.x,t.x,n.x),WS(e.y,t.y,n.y)}function C3(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?Ke(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?Ke(n,e,r.max):Math.min(e,n)),e}function qS(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function I3(e,{top:t,left:n,bottom:r,right:i}){return{x:qS(e.x,n,i),y:qS(e.y,t,r)}}function GS(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function k3(e,t){return{x:GS(e.x,t.x),y:GS(e.y,t.y)}}function A3(e,t){let n=.5;const r=cn(e),i=cn(t);return i>r?n=Wl(t.min,t.max-r,e.min):r>i&&(n=Wl(e.min,e.max-i,t.min)),ef(0,1,n)}function O3(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const wy=.35;function P3(e=wy){return e===!1?e=0:e===!0&&(e=wy),{x:KS(e,"left","right"),y:KS(e,"top","bottom")}}function KS(e,t,n){return{min:YS(e,t),max:YS(e,n)}}function YS(e,t){var n;return typeof e=="number"?e:(n=e[t])!==null&&n!==void 0?n:0}const QS=()=>({translate:0,scale:1,origin:0,originPoint:0}),fl=()=>({x:QS(),y:QS()}),XS=()=>({min:0,max:0}),mt=()=>({x:XS(),y:XS()});function er(e){return[e("x"),e("y")]}function VA({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function D3({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function R3(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function vm(e){return e===void 0||e===1}function _y({scale:e,scaleX:t,scaleY:n}){return!vm(e)||!vm(t)||!vm(n)}function Ki(e){return _y(e)||jA(e)||e.z||e.rotate||e.rotateX||e.rotateY}function jA(e){return JS(e.x)||JS(e.y)}function JS(e){return e&&e!=="0%"}function af(e,t,n){const r=e-n,i=t*r;return n+i}function ZS(e,t,n,r,i){return i!==void 0&&(e=af(e,i,r)),af(e,n,r)+t}function Sy(e,t=0,n=1,r,i){e.min=ZS(e.min,t,n,r,i),e.max=ZS(e.max,t,n,r,i)}function UA(e,{x:t,y:n}){Sy(e.x,t.translate,t.scale,t.originPoint),Sy(e.y,n.translate,n.scale,n.originPoint)}function $3(e,t,n,r=!1){var i,s;const o=n.length;if(!o)return;t.x=t.y=1;let a,l;for(let u=0;u<o;u++)a=n[u],l=a.projectionDelta,((s=(i=a.instance)===null||i===void 0?void 0:i.style)===null||s===void 0?void 0:s.display)!=="contents"&&(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&fo(e,{x:-a.scroll.x,y:-a.scroll.y}),l&&(t.x*=l.x.scale,t.y*=l.y.scale,UA(e,l)),r&&Ki(a.latestValues)&&fo(e,a.latestValues))}function Qr(e,t){e.min=e.min+t,e.max=e.max+t}function ex(e,t,[n,r,i]){const s=t[i]!==void 0?t[i]:.5,o=Ke(e.min,e.max,s);Sy(e,t[n],t[r],o,t.scale)}const N3=["x","scaleX","originX"],M3=["y","scaleY","originY"];function fo(e,t){ex(e.x,t,N3),ex(e.y,t,M3)}function zA(e,t){return VA(R3(e.getBoundingClientRect(),t))}function L3(e,t,n){const r=zA(e,n),{scroll:i}=t;return i&&(Qr(r.x,i.x),Qr(r.y,i.y)),r}const F3=new WeakMap;class V3{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=mt(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){if(this.visualElement.isPresent===!1)return;const r=a=>{this.stopAnimation(),n&&this.snapToCursor(U0(a,"page").point)},i=(a,l)=>{var u;const{drag:c,dragPropagation:d,onDragStart:f}=this.getProps();c&&!d&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=aA(c),!this.openGlobalLock)||(this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),er(h=>{var p,y;let w=this.getAxisMotionValue(h).get()||0;if(ar.test(w)){const v=(y=(p=this.visualElement.projection)===null||p===void 0?void 0:p.layout)===null||y===void 0?void 0:y.actual[h];v&&(w=cn(v)*(parseFloat(w)/100))}this.originPoint[h]=w}),f==null||f(a,l),(u=this.visualElement.animationState)===null||u===void 0||u.setActive(Oe.Drag,!0))},s=(a,l)=>{const{dragPropagation:u,dragDirectionLock:c,onDirectionLock:d,onDrag:f}=this.getProps();if(!u&&!this.openGlobalLock)return;const{offset:h}=l;if(c&&this.currentDirection===null){this.currentDirection=j3(h),this.currentDirection!==null&&(d==null||d(this.currentDirection));return}this.updateAxis("x",l.point,h),this.updateAxis("y",l.point,h),this.visualElement.syncRender(),f==null||f(a,l)},o=(a,l)=>this.stop(a,l);this.panSession=new LA(t,{onSessionStart:r,onStart:i,onMove:s,onSessionEnd:o},{transformPagePoint:this.visualElement.getTransformPagePoint()})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s==null||s(t,n)}cancel(){var t,n;this.isDragging=!1,this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!1),(t=this.panSession)===null||t===void 0||t.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),(n=this.visualElement.animationState)===null||n===void 0||n.setActive(Oe.Drag,!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Oc(t,i,this.currentDirection))return;const s=this.getAxisMotionValue(t);let o=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(o=C3(o,this.constraints[t],this.elastic[t])),s.set(o)}resolveConstraints(){const{dragConstraints:t,dragElastic:n}=this.getProps(),{layout:r}=this.visualElement.projection||{},i=this.constraints;t&&co(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=I3(r.actual,t):this.constraints=!1,this.elastic=P3(n),i!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&er(s=>{this.getAxisMotionValue(s)&&(this.constraints[s]=O3(r.actual[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!co(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=L3(r,i.root,this.visualElement.getTransformPagePoint());let o=k3(i.layout.actual,s);if(n){const a=n(D3(o));this.hasMutatedConstraints=!!a,a&&(o=VA(a))}return o}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=er(c=>{var d;if(!Oc(c,n,this.currentDirection))return;let f=(d=l==null?void 0:l[c])!==null&&d!==void 0?d:{};o&&(f={min:0,max:0});const h=i?200:1e6,p=i?40:1e7,y={type:"inertia",velocity:r?t[c]:0,bounceStiffness:h,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(c,y)});return Promise.all(u).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Z0(t,r,0,n)}stopAnimation(){er(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){var n,r;const i="_drag"+t.toUpperCase(),s=this.visualElement.getProps()[i];return s||this.visualElement.getValue(t,(r=(n=this.visualElement.getProps().initial)===null||n===void 0?void 0:n[t])!==null&&r!==void 0?r:0)}snapToCursor(t){er(n=>{const{drag:r}=this.getProps();if(!Oc(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:a}=i.layout.actual[n];s.set(t[n]-Ke(o,a,.5))}})}scalePositionWithinConstraints(){var t;const{drag:n,dragConstraints:r}=this.getProps(),{projection:i}=this.visualElement;if(!co(r)||!i||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};er(a=>{const l=this.getAxisMotionValue(a);if(l){const u=l.get();s[a]=A3({min:u,max:u},this.constraints[a])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.getInstance().style.transform=o?o({},""):"none",(t=i.root)===null||t===void 0||t.updateScroll(),i.updateLayout(),this.resolveConstraints(),er(a=>{if(!Oc(a,n,null))return;const l=this.getAxisMotionValue(a),{min:u,max:c}=this.constraints[a];l.set(Ke(u,c,s[a]))})}addListeners(){var t;F3.set(this.visualElement,this);const n=this.visualElement.getInstance(),r=Co(n,"pointerdown",u=>{const{drag:c,dragListener:d=!0}=this.getProps();c&&d&&this.start(u)}),i=()=>{const{dragConstraints:u}=this.getProps();co(u)&&(this.constraints=this.resolveRefConstraints())},{projection:s}=this.visualElement,o=s.addEventListener("measure",i);s&&!s.layout&&((t=s.root)===null||t===void 0||t.updateScroll(),s.updateLayout()),i();const a=vh(window,"resize",()=>this.scalePositionWithinConstraints()),l=s.addEventListener("didUpdate",({delta:u,hasLayoutChanged:c})=>{this.isDragging&&c&&(er(d=>{const f=this.getAxisMotionValue(d);!f||(this.originPoint[d]+=u[d].translate,f.set(f.get()+u[d].translate))}),this.visualElement.syncRender())});return()=>{a(),r(),o(),l==null||l()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:o=wy,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function Oc(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function j3(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}function U3(e){const{dragControls:t,visualElement:n}=e,r=yh(()=>new V3(n));b.exports.useEffect(()=>t&&t.subscribe(r),[r,t]),b.exports.useEffect(()=>r.addListeners(),[r])}function z3({onPan:e,onPanStart:t,onPanEnd:n,onPanSessionStart:r,visualElement:i}){const s=e||t||n||r,o=b.exports.useRef(null),{transformPagePoint:a}=b.exports.useContext(D0),l={onSessionStart:r,onStart:t,onMove:e,onEnd:(c,d)=>{o.current=null,n&&n(c,d)}};b.exports.useEffect(()=>{o.current!==null&&o.current.updateHandlers(l)});function u(c){o.current=new LA(c,l,{transformPagePoint:a})}Jd(i,"pointerdown",s&&u),z0(()=>o.current&&o.current.end())}const B3={pan:ai(z3),drag:ai(U3)},xy={current:null},BA={current:!1};function H3(){if(BA.current=!0,!!Ns)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>xy.current=e.matches;e.addListener(t),t()}else xy.current=!1}const Pc=["LayoutMeasure","BeforeLayoutMeasure","LayoutUpdate","ViewportBoxUpdate","Update","Render","AnimationComplete","LayoutAnimationComplete","AnimationStart","LayoutAnimationStart","SetAxisTarget","Unmount"];function W3(){const e=Pc.map(()=>new ul),t={},n={clearAllListeners:()=>e.forEach(r=>r.clear()),updatePropListeners:r=>{Pc.forEach(i=>{var s;const o="on"+i,a=r[o];(s=t[i])===null||s===void 0||s.call(t),a&&(t[i]=n[o](a))})}};return e.forEach((r,i)=>{n["on"+Pc[i]]=s=>r.add(s),n["notify"+Pc[i]]=(...s)=>r.notify(...s)}),n}function q3(e,t,n){const{willChange:r}=t;for(const i in t){const s=t[i],o=n[i];if(qn(s))e.addValue(i,s),of(r)&&r.add(i);else if(qn(o))e.addValue(i,Uo(s)),of(r)&&r.remove(i);else if(o!==s)if(e.hasValue(i)){const a=e.getValue(i);!a.hasAnimated&&a.set(s)}else{const a=e.getStaticValue(i);e.addValue(i,Uo(a!==void 0?a:s))}}for(const i in n)t[i]===void 0&&e.removeValue(i);return t}const HA=Object.keys(zl),G3=HA.length,WA=({treeType:e="",build:t,getBaseTarget:n,makeTargetAnimatable:r,measureViewportBox:i,render:s,readValueFromInstance:o,removeValueFromRenderState:a,sortNodePosition:l,scrapeMotionValuesFromProps:u})=>({parent:c,props:d,presenceId:f,blockInitialAnimation:h,visualState:p,reducedMotionConfig:y},w={})=>{let v=!1;const{latestValues:m,renderState:g}=p;let _;const E=W3(),I=new Map,C=new Map;let O={};const z={...m},F=d.initial?{...m}:{};let K;function Y(){!_||!v||(se(),s(_,g,d.style,q.projection))}function se(){t(q,g,m,w,d)}function ce(){E.notifyUpdate(m)}function de(D,P){const M=P.onChange(ee=>{m[D]=ee,d.onUpdate&&bn.update(ce,!1,!0)}),G=P.onRenderRequest(q.scheduleRender);C.set(D,()=>{M(),G()})}const{willChange:fe,...Ee}=u(d);for(const D in Ee){const P=Ee[D];m[D]!==void 0&&qn(P)&&(P.set(m[D],!1),of(fe)&&fe.add(D))}if(d.values)for(const D in d.values){const P=d.values[D];m[D]!==void 0&&qn(P)&&P.set(m[D])}const V=gh(d),re=$k(d),q={treeType:e,current:null,depth:c?c.depth+1:0,parent:c,children:new Set,presenceId:f,shouldReduceMotion:null,variantChildren:re?new Set:void 0,isVisible:void 0,manuallyAnimateOnMount:Boolean(c==null?void 0:c.isMounted()),blockInitialAnimation:h,isMounted:()=>Boolean(_),mount(D){v=!0,_=q.current=D,q.projection&&q.projection.mount(D),re&&c&&!V&&(K=c==null?void 0:c.addVariantChild(q)),I.forEach((P,M)=>de(M,P)),BA.current||H3(),q.shouldReduceMotion=y==="never"?!1:y==="always"?!0:xy.current,c==null||c.children.add(q),q.setProps(d)},unmount(){var D;(D=q.projection)===null||D===void 0||D.unmount(),Ii.update(ce),Ii.render(Y),C.forEach(P=>P()),K==null||K(),c==null||c.children.delete(q),E.clearAllListeners(),_=void 0,v=!1},loadFeatures(D,P,M,G,ee,k){const me=[];for(let H=0;H<G3;H++){const Te=HA[H],{isEnabled:_e,Component:x}=zl[Te];_e(D)&&x&&me.push(b.exports.createElement(x,{key:Te,...D,visualElement:q}))}if(!q.projection&&ee){q.projection=new ee(G,q.getLatestValues(),c&&c.projection);const{layoutId:H,layout:Te,drag:_e,dragConstraints:x,layoutScroll:T}=D;q.projection.setOptions({layoutId:H,layout:Te,alwaysMeasureLayout:Boolean(_e)||x&&co(x),visualElement:q,scheduleRender:()=>q.scheduleRender(),animationType:typeof Te=="string"?Te:"both",initialPromotionConfig:k,layoutScroll:T})}return me},addVariantChild(D){var P;const M=q.getClosestVariantNode();if(M)return(P=M.variantChildren)===null||P===void 0||P.add(D),()=>M.variantChildren.delete(D)},sortNodePosition(D){return!l||e!==D.treeType?0:l(q.getInstance(),D.getInstance())},getClosestVariantNode:()=>re?q:c==null?void 0:c.getClosestVariantNode(),getLayoutId:()=>d.layoutId,getInstance:()=>_,getStaticValue:D=>m[D],setStaticValue:(D,P)=>m[D]=P,getLatestValues:()=>m,setVisibility(D){q.isVisible!==D&&(q.isVisible=D,q.scheduleRender())},makeTargetAnimatable(D,P=!0){return r(q,D,d,P)},measureViewportBox(){return i(_,d)},addValue(D,P){q.hasValue(D)&&q.removeValue(D),I.set(D,P),m[D]=P.get(),de(D,P)},removeValue(D){var P;I.delete(D),(P=C.get(D))===null||P===void 0||P(),C.delete(D),delete m[D],a(D,g)},hasValue:D=>I.has(D),getValue(D,P){if(d.values&&d.values[D])return d.values[D];let M=I.get(D);return M===void 0&&P!==void 0&&(M=Uo(P),q.addValue(D,M)),M},forEachValue:D=>I.forEach(D),readValue:D=>m[D]!==void 0?m[D]:o(_,D,w),setBaseTarget(D,P){z[D]=P},getBaseTarget(D){var P;const{initial:M}=d,G=typeof M=="string"||typeof M=="object"?(P=j0(d,M))===null||P===void 0?void 0:P[D]:void 0;if(M&&G!==void 0)return G;if(n){const ee=n(d,D);if(ee!==void 0&&!qn(ee))return ee}return F[D]!==void 0&&G===void 0?void 0:z[D]},...E,build(){return se(),g},scheduleRender(){bn.render(Y,!1,!0)},syncRender:Y,setProps(D){(D.transformTemplate||d.transformTemplate)&&q.scheduleRender(),d=D,E.updatePropListeners(D),O=q3(q,u(d),O)},getProps:()=>d,getVariant:D=>{var P;return(P=d.variants)===null||P===void 0?void 0:P[D]},getDefaultTransition:()=>d.transition,getTransformPagePoint:()=>d.transformPagePoint,getVariantContext(D=!1){if(D)return c==null?void 0:c.getVariantContext();if(!V){const M=(c==null?void 0:c.getVariantContext())||{};return d.initial!==void 0&&(M.initial=d.initial),M}const P={};for(let M=0;M<K3;M++){const G=qA[M],ee=d[G];(Ul(ee)||ee===!1)&&(P[G]=ee)}return P}};return q},qA=["initial",...n1],K3=qA.length;function Ey(e){return typeof e=="string"&&e.startsWith("var(--")}const GA=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function Y3(e){const t=GA.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function by(e,t,n=1){const[r,i]=Y3(e);if(!r)return;const s=window.getComputedStyle(t).getPropertyValue(r);return s?s.trim():Ey(i)?by(i,t,n+1):i}function Q3(e,{...t},n){const r=e.getInstance();if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.forEachValue(i=>{const s=i.get();if(!Ey(s))return;const o=by(s,r);o&&i.set(o)});for(const i in t){const s=t[i];if(!Ey(s))continue;const o=by(s,r);!o||(t[i]=o,n&&n[i]===void 0&&(n[i]=s))}return{target:t,transitionEnd:n}}const X3=new Set(["width","height","top","left","right","bottom","x","y"]),KA=e=>X3.has(e),J3=e=>Object.keys(e).some(KA),YA=(e,t)=>{e.set(t,!1),e.set(t)},tx=e=>e===Ms||e===oe;var nx;(function(e){e.width="width",e.height="height",e.left="left",e.right="right",e.top="top",e.bottom="bottom"})(nx||(nx={}));const rx=(e,t)=>parseFloat(e.split(", ")[t]),ix=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/);if(i)return rx(i[1],t);{const s=r.match(/^matrix\((.+)\)$/);return s?rx(s[1],e):0}},Z3=new Set(["x","y","z"]),eU=Qd.filter(e=>!Z3.has(e));function tU(e){const t=[];return eU.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.syncRender(),t}const sx={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:ix(4,13),y:ix(5,14)},nU=(e,t,n)=>{const r=t.measureViewportBox(),i=t.getInstance(),s=getComputedStyle(i),{display:o}=s,a={};o==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(u=>{a[u]=sx[u](r,s)}),t.syncRender();const l=t.measureViewportBox();return n.forEach(u=>{const c=t.getValue(u);YA(c,a[u]),e[u]=sx[u](l,s)}),e},rU=(e,t,n={},r={})=>{t={...t},r={...r};const i=Object.keys(t).filter(KA);let s=[],o=!1;const a=[];if(i.forEach(l=>{const u=e.getValue(l);if(!e.hasValue(l))return;let c=n[l],d=Oa(c);const f=t[l];let h;if(Hl(f)){const p=f.length,y=f[0]===null?1:0;c=f[y],d=Oa(c);for(let w=y;w<p;w++)h?Zd(Oa(f[w])===h):h=Oa(f[w])}else h=Oa(f);if(d!==h)if(tx(d)&&tx(h)){const p=u.get();typeof p=="string"&&u.set(parseFloat(p)),typeof f=="string"?t[l]=parseFloat(f):Array.isArray(f)&&h===oe&&(t[l]=f.map(parseFloat))}else(d==null?void 0:d.transform)&&(h==null?void 0:h.transform)&&(c===0||f===0)?c===0?u.set(h.transform(c)):t[l]=d.transform(f):(o||(s=tU(e),o=!0),a.push(l),r[l]=r[l]!==void 0?r[l]:t[l],YA(u,f))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,u=nU(t,e,a);return s.length&&s.forEach(([c,d])=>{e.getValue(c).set(d)}),e.syncRender(),Ns&&l!==null&&window.scrollTo({top:l}),{target:u,transitionEnd:r}}else return{target:t,transitionEnd:r}};function iU(e,t,n,r){return J3(t)?rU(e,t,n,r):{target:t,transitionEnd:r}}const sU=(e,t,n,r)=>{const i=Q3(e,t,r);return t=i.target,r=i.transitionEnd,iU(e,t,n,r)};function oU(e){return window.getComputedStyle(e)}const QA={treeType:"dom",readValueFromInstance(e,t){if(Eu.has(t)){const n=Q0(t);return n&&n.default||0}else{const n=oU(e),r=(Lk(t)?n.getPropertyValue(t):n[t])||0;return typeof r=="string"?r.trim():r}},sortNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1},getBaseTarget(e,t){var n;return(n=e.style)===null||n===void 0?void 0:n[t]},measureViewportBox(e,{transformPagePoint:t}){return zA(e,t)},resetTransform(e,t,n){const{transformTemplate:r}=n;t.style.transform=r?r({},""):"none",e.scheduleRender()},restoreTransform(e,t){e.style.transform=t.style.transform},removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]},makeTargetAnimatable(e,{transition:t,transitionEnd:n,...r},{transformValues:i},s=!0){let o=d3(r,t||{},e);if(i&&(n&&(n=i(n)),r&&(r=i(r)),o&&(o=i(o))),s){u3(e,r,o);const a=sU(e,r,o,n);n=a.transitionEnd,r=a.target}return{transition:t,transitionEnd:n,...r}},scrapeMotionValuesFromProps:V0,build(e,t,n,r,i){e.isVisible!==void 0&&(t.style.visibility=e.isVisible?"visible":"hidden"),M0(t,n,r,i.transformTemplate)},render:Qk},aU=WA(QA),lU=WA({...QA,getBaseTarget(e,t){return e[t]},readValueFromInstance(e,t){var n;return Eu.has(t)?((n=Q0(t))===null||n===void 0?void 0:n.default)||0:(t=Xk.has(t)?t:Yk(t),e.getAttribute(t))},scrapeMotionValuesFromProps:Zk,build(e,t,n,r,i){F0(t,n,r,i.transformTemplate)},render:Jk}),uU=(e,t)=>$0(e)?lU(t,{enableHardwareAcceleration:!1}):aU(t,{enableHardwareAcceleration:!0});function ox(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Pa={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(oe.test(e))e=parseFloat(e);else return e;const n=ox(e,t.target.x),r=ox(e,t.target.y);return`${n}% ${r}%`}},ax="_$css",cU={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=e.includes("var("),s=[];i&&(e=e.replace(GA,h=>(s.push(h),ax)));const o=Dr.parse(e);if(o.length>5)return r;const a=Dr.createTransformer(e),l=typeof o[0]!="number"?1:0,u=n.x.scale*t.x,c=n.y.scale*t.y;o[0+l]/=u,o[1+l]/=c;const d=Ke(u,c,.5);typeof o[2+l]=="number"&&(o[2+l]/=d),typeof o[3+l]=="number"&&(o[3+l]/=d);let f=a(o);if(i){let h=0;f=f.replace(ax,()=>{const p=s[h];return h++,p})}return f}};class dU extends Ye.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=t;RF(hU),s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),ol.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,o=r.projection;return o&&(o.isPresent=s,i||t.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?o.promote():o.relegate()||bn.postRender(()=>{var a;!((a=o.getStack())===null||a===void 0)&&a.members.length||this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),!t.currentAnimation&&t.isLead()&&this.safeToRemove())}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n!=null&&n.group&&n.group.remove(i),r!=null&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t==null||t()}render(){return null}}function fU(e){const[t,n]=PA(),r=b.exports.useContext(R0);return S(dU,{...e,layoutGroup:r,switchLayoutGroup:b.exports.useContext(Nk),isPresent:t,safeToRemove:n})}const hU={borderRadius:{...Pa,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Pa,borderTopRightRadius:Pa,borderBottomLeftRadius:Pa,borderBottomRightRadius:Pa,boxShadow:cU},pU={measureLayout:fU};function mU(e,t,n={}){const r=qn(e)?e:Uo(e);return Z0("",r,t,n),{stop:()=>r.stop(),isAnimating:()=>r.isAnimating()}}const XA=["TopLeft","TopRight","BottomLeft","BottomRight"],gU=XA.length,lx=e=>typeof e=="string"?parseFloat(e):e,ux=e=>typeof e=="number"||oe.test(e);function yU(e,t,n,r,i,s){var o,a,l,u;i?(e.opacity=Ke(0,(o=n.opacity)!==null&&o!==void 0?o:1,vU(r)),e.opacityExit=Ke((a=t.opacity)!==null&&a!==void 0?a:1,0,wU(r))):s&&(e.opacity=Ke((l=t.opacity)!==null&&l!==void 0?l:1,(u=n.opacity)!==null&&u!==void 0?u:1,r));for(let c=0;c<gU;c++){const d=`border${XA[c]}Radius`;let f=cx(t,d),h=cx(n,d);if(f===void 0&&h===void 0)continue;f||(f=0),h||(h=0),f===0||h===0||ux(f)===ux(h)?(e[d]=Math.max(Ke(lx(f),lx(h),r),0),(ar.test(h)||ar.test(f))&&(e[d]+="%")):e[d]=h}(t.rotate||n.rotate)&&(e.rotate=Ke(t.rotate||0,n.rotate||0,r))}function cx(e,t){var n;return(n=e[t])!==null&&n!==void 0?n:e.borderRadius}const vU=JA(0,.5,G0),wU=JA(.5,.95,W0);function JA(e,t,n){return r=>r<e?0:r>t?1:n(Wl(e,t,r))}function dx(e,t){e.min=t.min,e.max=t.max}function Mn(e,t){dx(e.x,t.x),dx(e.y,t.y)}function fx(e,t,n,r,i){return e-=t,e=af(e,1/n,r),i!==void 0&&(e=af(e,1/i,r)),e}function _U(e,t=0,n=1,r=.5,i,s=e,o=e){if(ar.test(t)&&(t=parseFloat(t),t=Ke(o.min,o.max,t/100)-o.min),typeof t!="number")return;let a=Ke(s.min,s.max,r);e===s&&(a-=t),e.min=fx(e.min,t,n,a,i),e.max=fx(e.max,t,n,a,i)}function hx(e,t,[n,r,i],s,o){_U(e,t[n],t[r],t[i],t.scale,s,o)}const SU=["x","scaleX","originX"],xU=["y","scaleY","originY"];function px(e,t,n,r){hx(e.x,t,SU,n==null?void 0:n.x,r==null?void 0:r.x),hx(e.y,t,xU,n==null?void 0:n.y,r==null?void 0:r.y)}function mx(e){return e.translate===0&&e.scale===1}function ZA(e){return mx(e.x)&&mx(e.y)}function eO(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function gx(e){return cn(e.x)/cn(e.y)}function EU(e,t,n=.1){return Y0(e,t)<=n}class bU{constructor(){this.members=[]}add(t){e1(this.members,t),t.scheduleRender()}remove(t){if(t1(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(t,n){var r;const i=this.lead;if(t!==i&&(this.prevLead=i,this.lead=t,t.show(),i)){i.instance&&i.scheduleRender(),t.scheduleRender(),t.resumeFrom=i,n&&(t.resumeFrom.preserveOpacity=!0),i.snapshot&&(t.snapshot=i.snapshot,t.snapshot.latestValues=i.animationValues||i.latestValues,t.snapshot.isShared=!0),!((r=t.root)===null||r===void 0)&&r.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:s}=t.options;s===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(t=>{var n,r,i,s,o;(r=(n=t.options).onExitComplete)===null||r===void 0||r.call(n),(o=(i=t.resumingFrom)===null||i===void 0?void 0:(s=i.options).onExitComplete)===null||o===void 0||o.call(s)})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const TU="translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)";function yx(e,t,n){const r=e.x.translate/t.x,i=e.y.translate/t.y;let s=`translate3d(${r}px, ${i}px, 0) `;if(s+=`scale(${1/t.x}, ${1/t.y}) `,n){const{rotate:l,rotateX:u,rotateY:c}=n;l&&(s+=`rotate(${l}deg) `),u&&(s+=`rotateX(${u}deg) `),c&&(s+=`rotateY(${c}deg) `)}const o=e.x.scale*t.x,a=e.y.scale*t.y;return s+=`scale(${o}, ${a})`,s===TU?"none":s}const CU=(e,t)=>e.depth-t.depth;class IU{constructor(){this.children=[],this.isDirty=!1}add(t){e1(this.children,t),this.isDirty=!0}remove(t){t1(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(CU),this.isDirty=!1,this.children.forEach(t)}}const vx=["","X","Y","Z"],wx=1e3;function tO({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o,a={},l=t==null?void 0:t()){this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.potentialNodes=new Map,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.nodes.forEach(DU),this.nodes.forEach(RU)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.id=o,this.latestValues=a,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0,o&&this.root.registerPotentialNode(o,this);for(let u=0;u<this.path.length;u++)this.path[u].shouldResetTransform=!0;this.root===this&&(this.nodes=new IU)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new ul),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l==null||l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}registerPotentialNode(o,a){this.potentialNodes.set(o,a)}mount(o,a=!1){var l;if(this.instance)return;this.isSVG=o instanceof SVGElement&&o.tagName!=="svg",this.instance=o;const{layoutId:u,layout:c,visualElement:d}=this.options;if(d&&!d.getInstance()&&d.mount(o),this.root.nodes.add(this),(l=this.parent)===null||l===void 0||l.children.add(this),this.id&&this.root.potentialNodes.delete(this.id),a&&(c||u)&&(this.isLayoutDirty=!0),e){let f;const h=()=>this.root.updateBlockedByResize=!1;e(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=RA(h,250),ol.hasAnimatedSinceResize&&(ol.hasAnimatedSinceResize=!1,this.nodes.forEach(Sx))})}u&&this.root.registerSharedNode(u,this),this.options.animate!==!1&&d&&(u||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:h,hasRelativeTargetChanged:p,layout:y})=>{var w,v,m,g,_;if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const E=(v=(w=this.options.transition)!==null&&w!==void 0?w:d.getDefaultTransition())!==null&&v!==void 0?v:FU,{onLayoutAnimationStart:I,onLayoutAnimationComplete:C}=d.getProps(),O=!this.targetLayout||!eO(this.targetLayout,y)||p,z=!h&&p;if(((m=this.resumeFrom)===null||m===void 0?void 0:m.instance)||z||h&&(O||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,z);const F={...J0(E,"layout"),onPlay:I,onComplete:C};d.shouldReduceMotion&&(F.delay=0,F.type=!1),this.startAnimation(F)}else!h&&this.animationProgress===0&&Sx(this),this.isLead()&&((_=(g=this.options).onExitComplete)===null||_===void 0||_.call(g));this.targetLayout=y})}unmount(){var o,a;this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this),(o=this.getStack())===null||o===void 0||o.remove(this),(a=this.parent)===null||a===void 0||a.children.delete(this),this.instance=void 0,Ii.preRender(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){var o;return this.isAnimationBlocked||((o=this.parent)===null||o===void 0?void 0:o.isTreeAnimationBlocked())||!1}startUpdate(){var o;this.isUpdateBlocked()||(this.isUpdating=!0,(o=this.nodes)===null||o===void 0||o.forEach($U))}willUpdate(o=!0){var a,l,u;if(this.root.isUpdateBlocked()){(l=(a=this.options).onExitComplete)===null||l===void 0||l.call(a);return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let h=0;h<this.path.length;h++){const p=this.path[h];p.shouldResetTransform=!0,p.updateScroll()}const{layoutId:c,layout:d}=this.options;if(c===void 0&&!d)return;const f=(u=this.options.visualElement)===null||u===void 0?void 0:u.getProps().transformTemplate;this.prevTransformTemplateValue=f==null?void 0:f(this.latestValues,""),this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}didUpdate(){if(this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(_x);return}!this.isUpdating||(this.isUpdating=!1,this.potentialNodes.size&&(this.potentialNodes.forEach(VU),this.potentialNodes.clear()),this.nodes.forEach(PU),this.nodes.forEach(kU),this.nodes.forEach(AU),this.clearAllSnapshots(),hm.update(),hm.preRender(),hm.render())}clearAllSnapshots(){this.nodes.forEach(OU),this.sharedNodes.forEach(NU)}scheduleUpdateProjection(){bn.preRender(this.updateProjection,!1,!0)}scheduleCheckAfterUnmount(){bn.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){if(this.snapshot||!this.instance)return;const o=this.measure(),a=this.removeTransform(this.removeElementScroll(o));Tx(a),this.snapshot={measured:o,layout:a,latestValues:{}}}updateLayout(){var o;if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let u=0;u<this.path.length;u++)this.path[u].updateScroll();const a=this.measure();Tx(a);const l=this.layout;this.layout={measured:a,actual:this.removeElementScroll(a)},this.layoutCorrected=mt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.actual),(o=this.options.visualElement)===null||o===void 0||o.notifyLayoutMeasure(this.layout.actual,l==null?void 0:l.actual)}updateScroll(){this.options.layoutScroll&&this.instance&&(this.isScrollRoot=r(this.instance),this.scroll=n(this.instance))}resetTransform(){var o;if(!i)return;const a=this.isLayoutDirty||this.shouldResetTransform,l=this.projectionDelta&&!ZA(this.projectionDelta),u=(o=this.options.visualElement)===null||o===void 0?void 0:o.getProps().transformTemplate,c=u==null?void 0:u(this.latestValues,""),d=c!==this.prevTransformTemplateValue;a&&(l||Ki(this.latestValues)||d)&&(i(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(){const{visualElement:o}=this.options;if(!o)return mt();const a=o.measureViewportBox(),{scroll:l}=this.root;return l&&(Qr(a.x,l.x),Qr(a.y,l.y)),a}removeElementScroll(o){const a=mt();Mn(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:c,options:d,isScrollRoot:f}=u;if(u!==this.root&&c&&d.layoutScroll){if(f){Mn(a,o);const{scroll:h}=this.root;h&&(Qr(a.x,-h.x),Qr(a.y,-h.y))}Qr(a.x,c.x),Qr(a.y,c.y)}}return a}applyTransform(o,a=!1){const l=mt();Mn(l,o);for(let u=0;u<this.path.length;u++){const c=this.path[u];!a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&fo(l,{x:-c.scroll.x,y:-c.scroll.y}),Ki(c.latestValues)&&fo(l,c.latestValues)}return Ki(this.latestValues)&&fo(l,this.latestValues),l}removeTransform(o){var a;const l=mt();Mn(l,o);for(let u=0;u<this.path.length;u++){const c=this.path[u];if(!c.instance||!Ki(c.latestValues))continue;_y(c.latestValues)&&c.updateSnapshot();const d=mt(),f=c.measure();Mn(d,f),px(l,c.latestValues,(a=c.snapshot)===null||a===void 0?void 0:a.layout,d)}return Ki(this.latestValues)&&px(l,this.latestValues),l}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection()}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}resolveTargetDelta(){var o;const{layout:a,layoutId:l}=this.options;!this.layout||!(a||l)||(!this.targetDelta&&!this.relativeTarget&&(this.relativeParent=this.getClosestProjectingParent(),this.relativeParent&&this.relativeParent.layout&&(this.relativeTarget=mt(),this.relativeTargetOrigin=mt(),dl(this.relativeTargetOrigin,this.layout.actual,this.relativeParent.layout.actual),Mn(this.relativeTarget,this.relativeTargetOrigin))),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=mt(),this.targetWithTransforms=mt()),this.relativeTarget&&this.relativeTargetOrigin&&((o=this.relativeParent)===null||o===void 0?void 0:o.target)?T3(this.target,this.relativeTarget,this.relativeParent.target):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.actual):Mn(this.target,this.layout.actual),UA(this.target,this.targetDelta)):Mn(this.target,this.layout.actual),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.relativeParent=this.getClosestProjectingParent(),this.relativeParent&&Boolean(this.relativeParent.resumingFrom)===Boolean(this.resumingFrom)&&!this.relativeParent.options.layoutScroll&&this.relativeParent.target&&(this.relativeTarget=mt(),this.relativeTargetOrigin=mt(),dl(this.relativeTargetOrigin,this.target,this.relativeParent.target),Mn(this.relativeTarget,this.relativeTargetOrigin)))))}getClosestProjectingParent(){if(!(!this.parent||_y(this.parent.latestValues)||jA(this.parent.latestValues)))return(this.parent.relativeTarget||this.parent.targetDelta)&&this.parent.layout?this.parent:this.parent.getClosestProjectingParent()}calcProjection(){var o;const{layout:a,layoutId:l}=this.options;if(this.isTreeAnimating=Boolean(((o=this.parent)===null||o===void 0?void 0:o.isTreeAnimating)||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(a||l))return;const u=this.getLead();Mn(this.layoutCorrected,this.layout.actual),$3(this.layoutCorrected,this.treeScale,this.path,Boolean(this.resumingFrom)||this!==u);const{target:c}=u;if(!c)return;this.projectionDelta||(this.projectionDelta=fl(),this.projectionDeltaWithTransform=fl());const d=this.treeScale.x,f=this.treeScale.y,h=this.projectionTransform;cl(this.projectionDelta,this.layoutCorrected,c,this.latestValues),this.projectionTransform=yx(this.projectionDelta,this.treeScale),(this.projectionTransform!==h||this.treeScale.x!==d||this.treeScale.y!==f)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",c))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a,l,u;(l=(a=this.options).scheduleRender)===null||l===void 0||l.call(a),o&&((u=this.getStack())===null||u===void 0||u.scheduleRender()),this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(o,a=!1){var l;const u=this.snapshot,c=(u==null?void 0:u.latestValues)||{},d={...this.latestValues},f=fl();this.relativeTarget=this.relativeTargetOrigin=void 0,this.attemptToResolveRelativeTarget=!a;const h=mt(),p=u==null?void 0:u.isShared,y=(((l=this.getStack())===null||l===void 0?void 0:l.members.length)||0)<=1,w=Boolean(p&&!y&&this.options.crossfade===!0&&!this.path.some(LU));this.animationProgress=0,this.mixTargetDelta=v=>{var m;const g=v/1e3;xx(f.x,o.x,g),xx(f.y,o.y,g),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&((m=this.relativeParent)===null||m===void 0?void 0:m.layout)&&(dl(h,this.layout.actual,this.relativeParent.layout.actual),MU(this.relativeTarget,this.relativeTargetOrigin,h,g)),p&&(this.animationValues=d,yU(d,c,this.latestValues,g,w,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=g},this.mixTargetDelta(0)}startAnimation(o){var a,l;this.notifyListeners("animationStart"),(a=this.currentAnimation)===null||a===void 0||a.stop(),this.resumingFrom&&((l=this.resumingFrom.currentAnimation)===null||l===void 0||l.stop()),this.pendingAnimation&&(Ii.update(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=bn.update(()=>{ol.hasAnimatedSinceResize=!0,this.currentAnimation=mU(0,wx,{...o,onUpdate:u=>{var c;this.mixTargetDelta(u),(c=o.onUpdate)===null||c===void 0||c.call(o,u)},onComplete:()=>{var u;(u=o.onComplete)===null||u===void 0||u.call(o),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){var o;this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0),(o=this.getStack())===null||o===void 0||o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){var o;this.currentAnimation&&((o=this.mixTargetDelta)===null||o===void 0||o.call(this,wx),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=o;if(!(!a||!l||!u)){if(this!==o&&this.layout&&u&&nO(this.options.animationType,this.layout.actual,u.actual)){l=this.target||mt();const d=cn(this.layout.actual.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const f=cn(this.layout.actual.y);l.y.min=o.target.y.min,l.y.max=l.y.min+f}Mn(a,l),fo(a,c),cl(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(o,a){var l,u,c;this.sharedNodes.has(o)||this.sharedNodes.set(o,new bU),this.sharedNodes.get(o).add(a),a.promote({transition:(l=a.options.initialPromotionConfig)===null||l===void 0?void 0:l.transition,preserveFollowOpacity:(c=(u=a.options.initialPromotionConfig)===null||u===void 0?void 0:u.shouldPreserveFollowOpacity)===null||c===void 0?void 0:c.call(u,a)})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const l={};for(let u=0;u<vx.length;u++){const c=vx[u],d="rotate"+c;!o.getStaticValue(d)||(a=!0,l[d]=o.getStaticValue(d),o.setStaticValue(d,0))}if(!!a){o==null||o.syncRender();for(const u in l)o.setStaticValue(u,l[u]);o.scheduleRender()}}getProjectionStyles(o={}){var a,l,u;const c={};if(!this.instance||this.isSVG)return c;if(this.isVisible)c.visibility="";else return{visibility:"hidden"};const d=(a=this.options.visualElement)===null||a===void 0?void 0:a.getProps().transformTemplate;if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=rd(o.pointerEvents)||"",c.transform=d?d(this.latestValues,""):"none",c;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const w={};return this.options.layoutId&&(w.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,w.pointerEvents=rd(o.pointerEvents)||""),this.hasProjected&&!Ki(this.latestValues)&&(w.transform=d?d({},""):"none",this.hasProjected=!1),w}const h=f.animationValues||f.latestValues;this.applyTransformsToTarget(),c.transform=yx(this.projectionDeltaWithTransform,this.treeScale,h),d&&(c.transform=d(h,c.transform));const{x:p,y}=this.projectionDelta;c.transformOrigin=`${p.origin*100}% ${y.origin*100}% 0`,f.animationValues?c.opacity=f===this?(u=(l=h.opacity)!==null&&l!==void 0?l:this.latestValues.opacity)!==null&&u!==void 0?u:1:this.preserveOpacity?this.latestValues.opacity:h.opacityExit:c.opacity=f===this?h.opacity!==void 0?h.opacity:"":h.opacityExit!==void 0?h.opacityExit:0;for(const w in Yd){if(h[w]===void 0)continue;const{correct:v,applyTo:m}=Yd[w],g=v(h[w],f);if(m){const _=m.length;for(let E=0;E<_;E++)c[m[E]]=g}else c[w]=g}return this.options.layoutId&&(c.pointerEvents=f===this?rd(o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(_x),this.root.sharedNodes.clear()}}}function kU(e){e.updateLayout()}function AU(e){var t,n,r;const i=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&i&&e.hasListeners("didUpdate")){const{actual:s,measured:o}=e.layout,{animationType:a}=e.options;a==="size"?er(f=>{const h=i.isShared?i.measured[f]:i.layout[f],p=cn(h);h.min=s[f].min,h.max=h.min+p}):nO(a,i.layout,s)&&er(f=>{const h=i.isShared?i.measured[f]:i.layout[f],p=cn(s[f]);h.max=h.min+p});const l=fl();cl(l,s,i.layout);const u=fl();i.isShared?cl(u,e.applyTransform(o,!0),i.measured):cl(u,s,i.layout);const c=!ZA(l);let d=!1;if(!e.resumeFrom&&(e.relativeParent=e.getClosestProjectingParent(),e.relativeParent&&!e.relativeParent.resumeFrom)){const{snapshot:f,layout:h}=e.relativeParent;if(f&&h){const p=mt();dl(p,i.layout,f.layout);const y=mt();dl(y,s,h.actual),eO(p,y)||(d=!0)}}e.notifyListeners("didUpdate",{layout:s,snapshot:i,delta:u,layoutDelta:l,hasLayoutChanged:c,hasRelativeTargetChanged:d})}else e.isLead()&&((r=(n=e.options).onExitComplete)===null||r===void 0||r.call(n));e.options.transition=void 0}function OU(e){e.clearSnapshot()}function _x(e){e.clearMeasurements()}function PU(e){const{visualElement:t}=e.options;t!=null&&t.getProps().onBeforeLayoutMeasure&&t.notifyBeforeLayoutMeasure(),e.resetTransform()}function Sx(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0}function DU(e){e.resolveTargetDelta()}function RU(e){e.calcProjection()}function $U(e){e.resetRotation()}function NU(e){e.removeLeadSnapshot()}function xx(e,t,n){e.translate=Ke(t.translate,0,n),e.scale=Ke(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Ex(e,t,n,r){e.min=Ke(t.min,n.min,r),e.max=Ke(t.max,n.max,r)}function MU(e,t,n,r){Ex(e.x,t.x,n.x,r),Ex(e.y,t.y,n.y,r)}function LU(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const FU={duration:.45,ease:[.4,0,.1,1]};function VU(e,t){let n=e.root;for(let s=e.path.length-1;s>=0;s--)if(Boolean(e.path[s].instance)){n=e.path[s];break}const i=(n&&n!==e.root?n.instance:document).querySelector(`[data-projection-id="${t}"]`);i&&e.mount(i,!0)}function bx(e){e.min=Math.round(e.min),e.max=Math.round(e.max)}function Tx(e){bx(e.x),bx(e.y)}function nO(e,t,n){return e==="position"||e==="preserve-aspect"&&!EU(gx(t),gx(n),.2)}const jU=tO({attachResizeListener:(e,t)=>vh(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),wm={current:void 0},UU=tO({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!wm.current){const e=new jU(0,{});e.mount(window),e.setOptions({layoutScroll:!0}),wm.current=e}return wm.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>Boolean(window.getComputedStyle(e).position==="fixed")}),zU={...x3,...Vj,...B3,...pU},Ss=PF((e,t)=>gV(e,t,zU,uU,UU));function rO(){const e=b.exports.useRef(!1);return Kd(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function BU(){const e=rO(),[t,n]=b.exports.useState(0),r=b.exports.useCallback(()=>{e.current&&n(t+1)},[t]);return[b.exports.useCallback(()=>bn.postRender(r),[r]),t]}class HU extends b.exports.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function WU({children:e,isPresent:t}){const n=b.exports.useId(),r=b.exports.useRef(null),i=b.exports.useRef({width:0,height:0,top:0,left:0});return b.exports.useInsertionEffect(()=>{const{width:s,height:o,top:a,left:l}=i.current;if(t||!r.current||!s||!o)return;r.current.dataset.motionPopId=n;const u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${o}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),S(HU,{isPresent:t,childRef:r,sizeRef:i,children:b.exports.cloneElement(e,{ref:r})})}const _m=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:s,mode:o})=>{const a=yh(qU),l=b.exports.useId(),u=b.exports.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:c=>{a.set(c,!0);for(const d of a.values())if(!d)return;r&&r()},register:c=>(a.set(c,!1),()=>a.delete(c))}),s?void 0:[n]);return b.exports.useMemo(()=>{a.forEach((c,d)=>a.set(d,!1))},[n]),b.exports.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),o==="popLayout"&&(e=S(WU,{isPresent:n,children:e})),S(xu.Provider,{value:u,children:e})};function qU(){return new Map}const Ys=e=>e.key||"";function GU(e,t){e.forEach(n=>{const r=Ys(n);t.set(r,n)})}function KU(e){const t=[];return b.exports.Children.forEach(e,n=>{b.exports.isValidElement(n)&&t.push(n)}),t}const YU=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:i,presenceAffectsLayout:s=!0,mode:o="sync"})=>{i&&(o="wait",OA(!1,"Replace exitBeforeEnter with mode='wait'"));let[a]=BU();const l=b.exports.useContext(R0).forceRender;l&&(a=l);const u=rO(),c=KU(e);let d=c;const f=new Set,h=b.exports.useRef(d),p=b.exports.useRef(new Map).current,y=b.exports.useRef(!0);if(Kd(()=>{y.current=!1,GU(c,p),h.current=d}),z0(()=>{y.current=!0,p.clear(),f.clear()}),y.current)return S(Yn,{children:d.map(g=>S(_m,{isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:s,mode:o,children:g},Ys(g)))});d=[...d];const w=h.current.map(Ys),v=c.map(Ys),m=w.length;for(let g=0;g<m;g++){const _=w[g];v.indexOf(_)===-1&&f.add(_)}return o==="wait"&&f.size&&(d=[]),f.forEach(g=>{if(v.indexOf(g)!==-1)return;const _=p.get(g);if(!_)return;const E=w.indexOf(g),I=()=>{p.delete(g),f.delete(g);const C=h.current.findIndex(O=>O.key===g);if(h.current.splice(C,1),!f.size){if(h.current=c,u.current===!1)return;a(),r&&r()}};d.splice(E,0,S(_m,{isPresent:!1,onExitComplete:I,custom:t,presenceAffectsLayout:s,mode:o,children:_},Ys(_)))}),d=d.map(g=>{const _=g.key;return f.has(_)?g:S(_m,{isPresent:!0,presenceAffectsLayout:s,mode:o,children:g},Ys(g))}),AA!=="production"&&o==="wait"&&d.length>1&&console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`),S(Yn,{children:f.size?d:d.map(g=>b.exports.cloneElement(g))})};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iO=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},QU=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},sO={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,h=u&63;l||(h=64,o||(f=64)),r.push(n[c],n[d],n[f],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(iO(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):QU(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw Error();const f=s<<2|a>>4;if(r.push(f),u!==64){const h=a<<4&240|u>>2;if(r.push(h),d!==64){const p=u<<6&192|d;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},XU=function(e){const t=iO(e);return sO.encodeByteArray(t,!0)},lf=function(e){return XU(e).replace(/\./g,"")},oO=function(e){try{return sO.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function JU(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($t())}function aO(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function ZU(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function e4(){const e=$t();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function lO(){return typeof indexedDB=="object"}function uO(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function t4(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function n4(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r4=()=>n4().__FIREBASE_DEFAULTS__,i4=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e=process.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},s4=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&oO(e[1]);return t&&JSON.parse(t)},r1=()=>{try{return r4()||i4()||s4()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},cO=e=>{var t,n;return(n=(t=r1())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},o4=e=>{const t=cO(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},a4=()=>{var e;return(e=r1())===null||e===void 0?void 0:e.config},dO=e=>{var t;return(t=r1())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l4{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u4(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[lf(JSON.stringify(n)),lf(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c4="FirebaseError";class Xn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=c4,Object.setPrototypeOf(this,Xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ls.prototype.create)}}class Ls{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?d4(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Xn(i,a,r)}}function d4(e,t){return e.replace(f4,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const f4=/\{\$([^}]+)}/g;function h4(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Gl(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(Cx(s)&&Cx(o)){if(!Gl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Cx(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Ha(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function Wa(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function p4(e,t){const n=new m4(e,t);return n.subscribe.bind(n)}class m4{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");g4(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Sm),i.error===void 0&&(i.error=Sm),i.complete===void 0&&(i.complete=Sm);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function g4(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Sm(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y4=1e3,v4=2,w4=4*60*60*1e3,_4=.5;function Ix(e,t=y4,n=v4){const r=t*Math.pow(n,e),i=Math.round(_4*r*(Math.random()-.5)*2);return Math.min(w4,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(e){return e&&e._delegate?e._delegate:e}class Qn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S4{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new l4;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(E4(t))try{this.getOrInitializeService({instanceIdentifier:Yi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Yi){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Yi){return this.instances.has(t)}getOptions(t=Yi){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:x4(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Yi){return this.component?this.component.multipleInstances?t:Yi:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function x4(e){return e===Yi?void 0:e}function E4(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b4{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new S4(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(be||(be={}));const T4={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},C4=be.INFO,I4={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},k4=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=I4[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Eh{constructor(t){this.name=t,this._logLevel=C4,this._logHandler=k4,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in be))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?T4[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...t),this._logHandler(this,be.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...t),this._logHandler(this,be.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,be.INFO,...t),this._logHandler(this,be.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,be.WARN,...t),this._logHandler(this,be.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...t),this._logHandler(this,be.ERROR,...t)}}const A4=(e,t)=>t.some(n=>e instanceof n);let kx,Ax;function O4(){return kx||(kx=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function P4(){return Ax||(Ax=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fO=new WeakMap,Ty=new WeakMap,hO=new WeakMap,xm=new WeakMap,i1=new WeakMap;function D4(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(vi(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&fO.set(n,e)}).catch(()=>{}),i1.set(t,e),t}function R4(e){if(Ty.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Ty.set(e,t)}let Cy={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ty.get(e);if(t==="objectStoreNames")return e.objectStoreNames||hO.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vi(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function $4(e){Cy=e(Cy)}function N4(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Em(this),t,...n);return hO.set(r,t.sort?t.sort():[t]),vi(r)}:P4().includes(e)?function(...t){return e.apply(Em(this),t),vi(fO.get(this))}:function(...t){return vi(e.apply(Em(this),t))}}function M4(e){return typeof e=="function"?N4(e):(e instanceof IDBTransaction&&R4(e),A4(e,O4())?new Proxy(e,Cy):e)}function vi(e){if(e instanceof IDBRequest)return D4(e);if(xm.has(e))return xm.get(e);const t=M4(e);return t!==e&&(xm.set(e,t),i1.set(t,e)),t}const Em=e=>i1.get(e);function pO(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=vi(o);return r&&o.addEventListener("upgradeneeded",l=>{r(vi(o.result),l.oldVersion,l.newVersion,vi(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const L4=["get","getKey","getAll","getAllKeys","count"],F4=["put","add","delete","clear"],bm=new Map;function Ox(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(bm.get(t))return bm.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=F4.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||L4.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return bm.set(t,s),s}$4(e=>({...e,get:(t,n,r)=>Ox(t,n)||e.get(t,n,r),has:(t,n)=>!!Ox(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V4{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(j4(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function j4(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Iy="@firebase/app",Px="0.8.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs=new Eh("@firebase/app"),U4="@firebase/app-compat",z4="@firebase/analytics-compat",B4="@firebase/analytics",H4="@firebase/app-check-compat",W4="@firebase/app-check",q4="@firebase/auth",G4="@firebase/auth-compat",K4="@firebase/database",Y4="@firebase/database-compat",Q4="@firebase/functions",X4="@firebase/functions-compat",J4="@firebase/installations",Z4="@firebase/installations-compat",e5="@firebase/messaging",t5="@firebase/messaging-compat",n5="@firebase/performance",r5="@firebase/performance-compat",i5="@firebase/remote-config",s5="@firebase/remote-config-compat",o5="@firebase/storage",a5="@firebase/storage-compat",l5="@firebase/firestore",u5="@firebase/firestore-compat",c5="firebase",d5="9.12.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky="[DEFAULT]",f5={[Iy]:"fire-core",[U4]:"fire-core-compat",[B4]:"fire-analytics",[z4]:"fire-analytics-compat",[W4]:"fire-app-check",[H4]:"fire-app-check-compat",[q4]:"fire-auth",[G4]:"fire-auth-compat",[K4]:"fire-rtdb",[Y4]:"fire-rtdb-compat",[Q4]:"fire-fn",[X4]:"fire-fn-compat",[J4]:"fire-iid",[Z4]:"fire-iid-compat",[e5]:"fire-fcm",[t5]:"fire-fcm-compat",[n5]:"fire-perf",[r5]:"fire-perf-compat",[i5]:"fire-rc",[s5]:"fire-rc-compat",[o5]:"fire-gcs",[a5]:"fire-gcs-compat",[l5]:"fire-fst",[u5]:"fire-fst-compat","fire-js":"fire-js",[c5]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf=new Map,Ay=new Map;function h5(e,t){try{e.container.addComponent(t)}catch(n){xs.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function dr(e){const t=e.name;if(Ay.has(t))return xs.debug(`There were multiple attempts to register component ${t}.`),!1;Ay.set(t,e);for(const n of uf.values())h5(n,e);return!0}function Fs(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p5={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},wi=new Ls("app","Firebase",p5);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m5{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw wi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au=d5;function mO(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ky,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw wi.create("bad-app-name",{appName:String(i)});if(n||(n=a4()),!n)throw wi.create("no-options");const s=uf.get(i);if(s){if(Gl(n,s.options)&&Gl(r,s.config))return s;throw wi.create("duplicate-app",{appName:i})}const o=new b4(i);for(const l of Ay.values())o.addComponent(l);const a=new m5(n,r,o);return uf.set(i,a),a}function s1(e=ky){const t=uf.get(e);if(!t&&e===ky)return mO();if(!t)throw wi.create("no-app",{appName:e});return t}function Tn(e,t,n){var r;let i=(r=f5[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),xs.warn(a.join(" "));return}dr(new Qn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g5="firebase-heartbeat-database",y5=1,Kl="firebase-heartbeat-store";let Tm=null;function gO(){return Tm||(Tm=pO(g5,y5,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Kl)}}}).catch(e=>{throw wi.create("idb-open",{originalErrorMessage:e.message})})),Tm}async function v5(e){var t;try{return(await gO()).transaction(Kl).objectStore(Kl).get(yO(e))}catch(n){if(n instanceof Xn)xs.warn(n.message);else{const r=wi.create("idb-get",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message});xs.warn(r.message)}}}async function Dx(e,t){var n;try{const i=(await gO()).transaction(Kl,"readwrite");return await i.objectStore(Kl).put(t,yO(e)),i.done}catch(r){if(r instanceof Xn)xs.warn(r.message);else{const i=wi.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});xs.warn(i.message)}}}function yO(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w5=1024,_5=30*24*60*60*1e3;class S5{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new E5(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Rx();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=_5}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Rx(),{heartbeatsToSend:n,unsentEntries:r}=x5(this._heartbeatsCache.heartbeats),i=lf(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Rx(){return new Date().toISOString().substring(0,10)}function x5(e,t=w5){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),$x(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),$x(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class E5{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lO()?uO().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await v5(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dx(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dx(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function $x(e){return lf(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b5(e){dr(new Qn("platform-logger",t=>new V4(t),"PRIVATE")),dr(new Qn("heartbeat",t=>new S5(t),"PRIVATE")),Tn(Iy,Px,e),Tn(Iy,Px,"esm2017"),Tn("fire-js","")}b5("");function vO(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const T5=vO,wO=new Ls("auth","Firebase",vO());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nx=new Eh("@firebase/auth");function od(e,...t){Nx.logLevel<=be.ERROR&&Nx.error(`Auth (${Au}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(e,...t){throw o1(e,...t)}function lr(e,...t){return o1(e,...t)}function _O(e,t,n){const r=Object.assign(Object.assign({},T5()),{[t]:n});return new Ls("auth","Firebase",r).create(t,{appName:e.name})}function C5(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Pn(e,"argument-error"),_O(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function o1(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return wO.create(e,...t)}function ae(e,t,...n){if(!e)throw o1(t,...n)}function Sr(e){const t="INTERNAL ASSERTION FAILED: "+e;throw od(t),new Error(t)}function Rr(e,t){e||Sr(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mx=new Map;function xr(e){Rr(e instanceof Function,"Expected a class definition");let t=Mx.get(e);return t?(Rr(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Mx.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I5(e,t){const n=Fs(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Gl(s,t!=null?t:{}))return i;Pn(i,"already-initialized")}return n.initialize({options:t})}function k5(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(xr);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function A5(){return Lx()==="http:"||Lx()==="https:"}function Lx(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O5(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(A5()||aO()||"connection"in navigator)?navigator.onLine:!0}function P5(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(t,n){this.shortDelay=t,this.longDelay=n,Rr(n>t,"Short delay should be less than long delay!"),this.isMobile=JU()||ZU()}get(){return O5()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a1(e,t){Rr(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SO{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Sr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Sr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Sr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D5={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R5=new Ou(3e4,6e4);function Pu(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Du(e,t,n,r,i={}){return xO(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=ku(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),SO.fetch()(EO(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function xO(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},D5),t);try{const i=new $5(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Dc(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Dc(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Dc(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw Dc(e,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw _O(e,c,u);Pn(e,c)}}catch(i){if(i instanceof Xn)throw i;Pn(e,"network-request-failed")}}async function Ru(e,t,n,r,i={}){const s=await Du(e,t,n,r,i);return"mfaPendingCredential"in s&&Pn(e,"multi-factor-auth-required",{_serverResponse:s}),s}function EO(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?a1(e.config,i):`${e.config.apiScheme}://${i}`}class $5{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(lr(this.auth,"network-request-failed")),R5.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Dc(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=lr(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N5(e,t){return Du(e,"POST","/v1/accounts:delete",t)}async function M5(e,t){return Du(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function L5(e,t=!1){const n=Je(e),r=await n.getIdToken(t),i=l1(r);ae(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:hl(Cm(i.auth_time)),issuedAtTime:hl(Cm(i.iat)),expirationTime:hl(Cm(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Cm(e){return Number(e)*1e3}function l1(e){var t;const[n,r,i]=e.split(".");if(n===void 0||r===void 0||i===void 0)return od("JWT malformed, contained fewer than 3 sections"),null;try{const s=oO(r);return s?JSON.parse(s):(od("Failed to decode base64 JWT payload"),null)}catch(s){return od("Caught error parsing JWT payload as JSON",(t=s)===null||t===void 0?void 0:t.toString()),null}}function F5(e){const t=l1(e);return ae(t,"internal-error"),ae(typeof t.exp<"u","internal-error"),ae(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yl(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Xn&&V5(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function V5({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j5{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var t;try{await this.user.getIdToken(!0)}catch(n){((t=n)===null||t===void 0?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=hl(this.lastLoginAt),this.creationTime=hl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cf(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Yl(e,M5(n,{idToken:r}));ae(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?B5(s.providerUserInfo):[],a=z5(e.providerData,o),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new bO(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(e,d)}async function U5(e){const t=Je(e);await cf(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function z5(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function B5(e){return e.map(t=>{var{providerId:n}=t,r=Cu(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H5(e,t){const n=await xO(e,{},async()=>{const r=ku({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=EO(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",SO.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){ae(t.idToken,"internal-error"),ae(typeof t.idToken<"u","internal-error"),ae(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):F5(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return ae(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await H5(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ql;return r&&(ae(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(ae(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(ae(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ql,this.toJSON())}_performRefresh(){return Sr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(e,t){ae(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class fs{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Cu(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new j5(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new bO(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Yl(this,this.stsTokenManager.getToken(this.auth,t));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return L5(this,t)}reload(){return U5(this)}_assign(t){this!==t&&(ae(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new fs(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await cf(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Yl(this,N5(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,h=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(u=n.createdAt)!==null&&u!==void 0?u:void 0,m=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:_,isAnonymous:E,providerData:I,stsTokenManager:C}=n;ae(g&&C,t,"internal-error");const O=Ql.fromJSON(this.name,C);ae(typeof g=="string",t,"internal-error"),qr(d,t.name),qr(f,t.name),ae(typeof _=="boolean",t,"internal-error"),ae(typeof E=="boolean",t,"internal-error"),qr(h,t.name),qr(p,t.name),qr(y,t.name),qr(w,t.name),qr(v,t.name),qr(m,t.name);const z=new fs({uid:g,auth:t,email:f,emailVerified:_,displayName:d,isAnonymous:E,photoURL:p,phoneNumber:h,tenantId:y,stsTokenManager:O,createdAt:v,lastLoginAt:m});return I&&Array.isArray(I)&&(z.providerData=I.map(F=>Object.assign({},F))),w&&(z._redirectEventId=w),z}static async _fromIdTokenResponse(t,n,r=!1){const i=new Ql;i.updateFromServerResponse(n);const s=new fs({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await cf(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}TO.type="NONE";const Fx=TO;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(e,t,n){return`firebase:${e}:${t}:${n}`}class ko{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ad(this.userKey,i.apiKey,s),this.fullPersistenceKey=ad("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?fs._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new ko(xr(Fx),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||xr(Fx);const o=ad(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=fs._fromJSON(t,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ko(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ko(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vx(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(kO(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(CO(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(OO(t))return"Blackberry";if(PO(t))return"Webos";if(u1(t))return"Safari";if((t.includes("chrome/")||IO(t))&&!t.includes("edge/"))return"Chrome";if(AO(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function CO(e=$t()){return/firefox\//i.test(e)}function u1(e=$t()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function IO(e=$t()){return/crios\//i.test(e)}function kO(e=$t()){return/iemobile/i.test(e)}function AO(e=$t()){return/android/i.test(e)}function OO(e=$t()){return/blackberry/i.test(e)}function PO(e=$t()){return/webos/i.test(e)}function bh(e=$t()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function W5(e=$t()){var t;return bh(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function q5(){return e4()&&document.documentMode===10}function DO(e=$t()){return bh(e)||AO(e)||PO(e)||OO(e)||/windows phone/i.test(e)||kO(e)}function G5(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RO(e,t=[]){let n;switch(e){case"Browser":n=Vx($t());break;case"Worker":n=`${Vx($t())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Au}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K5{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){var n;if(this.auth.currentUser===t)return;const r=[];try{for(const i of this.queue)await i(t),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y5{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jx(this),this.idTokenSubscription=new jx(this),this.beforeStateQueue=new K5(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wO,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=xr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ko.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){var n;try{await cf(t)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=P5()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Je(t):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&ae(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(xr(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Ls("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&xr(t)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await ko.create(this,[xr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ae(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=RO(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function sa(e){return Je(e)}class jx{constructor(t){this.auth=t,this.observer=null,this.addObserver=p4(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Q5(e,t,n){const r=sa(e);ae(r._canInitEmulator,r,"emulator-config-failed"),ae(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=$O(t),{host:o,port:a}=X5(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||J5()}function $O(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function X5(e){const t=$O(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ux(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ux(o)}}}function Ux(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function J5(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Sr("not implemented")}_getIdTokenResponse(t){return Sr("not implemented")}_linkToIdToken(t,n){return Sr("not implemented")}_getReauthenticationResolver(t){return Sr("not implemented")}}async function Z5(e,t){return Du(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ez(e,t){return Ru(e,"POST","/v1/accounts:signInWithPassword",Pu(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tz(e,t){return Ru(e,"POST","/v1/accounts:signInWithEmailLink",Pu(e,t))}async function nz(e,t){return Ru(e,"POST","/v1/accounts:signInWithEmailLink",Pu(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl extends c1{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Xl(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Xl(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return ez(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return tz(t,{email:this._email,oobCode:this._password});default:Pn(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return Z5(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return nz(t,{idToken:n,email:this._email,oobCode:this._password});default:Pn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ao(e,t){return Ru(e,"POST","/v1/accounts:signInWithIdp",Pu(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rz="http://localhost";class Es extends c1{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Es(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Pn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Cu(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Es(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Ao(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Ao(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Ao(t,n)}buildRequest(){const t={requestUri:rz,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ku(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iz(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function sz(e){const t=Ha(Wa(e)).link,n=t?Ha(Wa(t)).deep_link_id:null,r=Ha(Wa(e)).deep_link_id;return(r?Ha(Wa(r)).link:null)||r||n||t||e}class d1{constructor(t){var n,r,i,s,o,a;const l=Ha(Wa(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=iz((i=l.mode)!==null&&i!==void 0?i:null);ae(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=sz(t);try{return new d1(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(){this.providerId=oa.PROVIDER_ID}static credential(t,n){return Xl._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=d1.parseLink(n);return ae(r,"argument-error"),Xl._fromEmailAndCode(t,r.code,r.tenantId)}}oa.PROVIDER_ID="password";oa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";oa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u extends f1{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends $u{constructor(){super("facebook.com")}static credential(t){return Es._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Zr.credentialFromTaggedObject(t)}static credentialFromError(t){return Zr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Zr.credential(t.oauthAccessToken)}catch{return null}}}Zr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends $u{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Es._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return vr.credentialFromTaggedObject(t)}static credentialFromError(t){return vr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return vr.credential(n,r)}catch{return null}}}vr.GOOGLE_SIGN_IN_METHOD="google.com";vr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends $u{constructor(){super("github.com")}static credential(t){return Es._fromParams({providerId:ei.PROVIDER_ID,signInMethod:ei.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ei.credentialFromTaggedObject(t)}static credentialFromError(t){return ei.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ei.credential(t.oauthAccessToken)}catch{return null}}}ei.GITHUB_SIGN_IN_METHOD="github.com";ei.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends $u{constructor(){super("twitter.com")}static credential(t,n){return Es._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return ti.credentialFromTaggedObject(t)}static credentialFromError(t){return ti.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return ti.credential(n,r)}catch{return null}}}ti.TWITTER_SIGN_IN_METHOD="twitter.com";ti.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oz(e,t){return Ru(e,"POST","/v1/accounts:signUp",Pu(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await fs._fromIdTokenResponse(t,r,i),o=zx(r);return new bs({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=zx(r);return new bs({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function zx(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df extends Xn{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,df.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new df(t,n,r,i)}}function NO(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?df._fromErrorAndOperation(e,s,t,r):s})}async function az(e,t,n=!1){const r=await Yl(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return bs._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lz(e,t,n=!1){var r;const{auth:i}=e,s="reauthenticate";try{const o=await Yl(e,NO(i,s,t,e),n);ae(o.idToken,i,"internal-error");const a=l1(o.idToken);ae(a,i,"internal-error");const{sub:l}=a;return ae(e.uid===l,i,"user-mismatch"),bs._forOperation(e,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Pn(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MO(e,t,n=!1){const r="signIn",i=await NO(e,r,t),s=await bs._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function uz(e,t){return MO(sa(e),t)}async function cz(e,t,n){const r=sa(e),i=await oz(r,{returnSecureToken:!0,email:t,password:n}),s=await bs._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function dz(e,t,n){return uz(Je(e),oa.credential(t,n))}function fz(e,t,n,r){return Je(e).onIdTokenChanged(t,n,r)}function hz(e,t,n){return Je(e).beforeAuthStateChanged(t,n)}function pz(e,t,n,r){return Je(e).onAuthStateChanged(t,n,r)}function mz(e){return Je(e).signOut()}async function gz(e){return Je(e).delete()}const ff="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LO{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ff,"1"),this.storage.removeItem(ff),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yz(){const e=$t();return u1(e)||bh(e)}const vz=1e3,wz=10;class FO extends LO{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=yz()&&G5(),this.fallbackToPolling=DO(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);q5()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,wz):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},vz)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}FO.type="LOCAL";const _z=FO;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO extends LO{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}VO.type="SESSION";const jO=VO;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sz(e){return Promise.all(e.map(async t=>{try{const n=await t;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Th(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await Sz(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Th.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h1(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xz{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=h1("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(){return window}function Ez(e){ur().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UO(){return typeof ur().WorkerGlobalScope<"u"&&typeof ur().importScripts=="function"}async function bz(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Tz(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Cz(){return UO()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zO="firebaseLocalStorageDb",Iz=1,hf="firebaseLocalStorage",BO="fbase_key";class Nu{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ch(e,t){return e.transaction([hf],t?"readwrite":"readonly").objectStore(hf)}function kz(){const e=indexedDB.deleteDatabase(zO);return new Nu(e).toPromise()}function Py(){const e=indexedDB.open(zO,Iz);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(hf,{keyPath:BO})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(hf)?t(r):(r.close(),await kz(),t(await Py()))})})}async function Bx(e,t,n){const r=Ch(e,!0).put({[BO]:t,value:n});return new Nu(r).toPromise()}async function Az(e,t){const n=Ch(e,!1).get(t),r=await new Nu(n).toPromise();return r===void 0?null:r.value}function Hx(e,t){const n=Ch(e,!0).delete(t);return new Nu(n).toPromise()}const Oz=800,Pz=3;class HO{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Py(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Pz)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return UO()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Th._getInstance(Cz()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await bz(),!this.activeServiceWorker)return;this.sender=new xz(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((t=r[0])===null||t===void 0?void 0:t.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Tz()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Py();return await Bx(t,ff,"1"),await Hx(t,ff),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Bx(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Az(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Hx(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Ch(i,!1).getAll();return new Nu(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Oz)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}HO.type="LOCAL";const Dz=HO;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rz(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function $z(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=lr("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Rz().appendChild(r)})}function Nz(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new Ou(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WO(e,t){return t?xr(t):(ae(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1 extends c1{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ao(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Ao(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Ao(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Mz(e){return MO(e.auth,new p1(e),e.bypassAuthState)}function Lz(e){const{auth:t,user:n}=e;return ae(n,t,"internal-error"),lz(n,new p1(e),e.bypassAuthState)}async function Fz(e){const{auth:t,user:n}=e;return ae(n,t,"internal-error"),az(n,new p1(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qO{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Mz;case"linkViaPopup":case"linkViaRedirect":return Fz;case"reauthViaPopup":case"reauthViaRedirect":return Lz;default:Pn(this.auth,"internal-error")}}resolve(t){Rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vz=new Ou(2e3,1e4);async function jz(e,t,n){const r=sa(e);C5(e,t,f1);const i=WO(r,n);return new is(r,"signInViaPopup",t,i).executeNotNull()}class is extends qO{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,is.currentPopupAction&&is.currentPopupAction.cancel(),is.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return ae(t,this.auth,"internal-error"),t}async onExecution(){Rr(this.filter.length===1,"Popup operations only handle one event");const t=h1();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(lr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(lr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,is.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(lr(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,Vz.get())};t()}}is.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uz="pendingRedirect",ld=new Map;class zz extends qO{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=ld.get(this.auth._key());if(!t){try{const r=await Bz(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}ld.set(this.auth._key(),t)}return this.bypassAuthState||ld.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Bz(e,t){const n=qz(t),r=Wz(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Hz(e,t){ld.set(e._key(),t)}function Wz(e){return xr(e._redirectPersistence)}function qz(e){return ad(Uz,e.config.apiKey,e.name)}async function Gz(e,t,n=!1){const r=sa(e),i=WO(r,t),o=await new zz(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kz=10*60*1e3;class Yz{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Qz(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!GO(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(lr(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Kz&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wx(t))}saveEventToCache(t){this.cachedEventUids.add(Wx(t)),this.lastProcessedEventTime=Date.now()}}function Wx(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function GO({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Qz(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return GO(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xz(e,t={}){return Du(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jz=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zz=/^https?/;async function eB(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Xz(e);for(const n of t)try{if(tB(n))return}catch{}Pn(e,"unauthorized-domain")}function tB(e){const t=Oy(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Zz.test(n))return!1;if(Jz.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nB=new Ou(3e4,6e4);function qx(){const e=ur().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function rB(e){return new Promise((t,n)=>{var r,i,s;function o(){qx(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{qx(),n(lr(e,"network-request-failed"))},timeout:nB.get()})}if(!((i=(r=ur().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=ur().gapi)===null||s===void 0)&&s.load)o();else{const a=Nz("iframefcb");return ur()[a]=()=>{gapi.load?o():n(lr(e,"network-request-failed"))},$z(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw ud=null,t})}let ud=null;function iB(e){return ud=ud||rB(e),ud}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sB=new Ou(5e3,15e3),oB="__/auth/iframe",aB="emulator/auth/iframe",lB={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uB=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cB(e){const t=e.config;ae(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?a1(t,aB):`https://${e.config.authDomain}/${oB}`,r={apiKey:t.apiKey,appName:e.name,v:Au},i=uB.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ku(r).slice(1)}`}async function dB(e){const t=await iB(e),n=ur().gapi;return ae(n,e,"internal-error"),t.open({where:document.body,url:cB(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lB,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=lr(e,"network-request-failed"),a=ur().setTimeout(()=>{s(o)},sB.get());function l(){ur().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fB={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hB=500,pB=600,mB="_blank",gB="http://localhost";class Gx{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yB(e,t,n,r=hB,i=pB){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},fB),{width:r.toString(),height:i.toString(),top:s,left:o}),u=$t().toLowerCase();n&&(a=IO(u)?mB:n),CO(u)&&(t=t||gB,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[h,p])=>`${f}${h}=${p},`,"");if(W5(u)&&a!=="_self")return vB(t||"",a),new Gx(null);const d=window.open(t||"",a,c);ae(d,e,"popup-blocked");try{d.focus()}catch{}return new Gx(d)}function vB(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wB="__/auth/handler",_B="emulator/auth/handler";function Kx(e,t,n,r,i,s){ae(e.config.authDomain,e,"auth-domain-config-required"),ae(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Au,eventId:i};if(t instanceof f1){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",h4(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(t instanceof $u){const l=t.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${SB(e)}?${ku(a).slice(1)}`}function SB({config:e}){return e.emulator?a1(e,_B):`https://${e.authDomain}/${wB}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im="webStorageSupport";class xB{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jO,this._completeRedirectFn=Gz,this._overrideRedirectResult=Hz}async _openPopup(t,n,r,i){var s;Rr((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Kx(t,n,r,Oy(),i);return yB(t,o,h1())}async _openRedirect(t,n,r,i){return await this._originValidation(t),Ez(Kx(t,n,r,Oy(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Rr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await dB(t),r=new Yz(t);return n.register("authEvent",i=>(ae(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Im,{type:Im},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Im];o!==void 0&&n(!!o),Pn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=eB(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return DO()||u1()||bh()}}const EB=xB;var Yx="@firebase/auth",Qx="0.20.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bB{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{var i;t(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);!n||(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TB(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function CB(e){dr(new Qn("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{ae(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),ae(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:RO(e)},c=new Y5(a,l,u);return k5(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),dr(new Qn("auth-internal",t=>{const n=sa(t.getProvider("auth").getImmediate());return(r=>new bB(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tn(Yx,Qx,TB(e)),Tn(Yx,Qx,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IB=5*60,kB=dO("authIdTokenMaxAge")||IB;let Xx=null;const AB=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>kB)return;const i=n==null?void 0:n.token;Xx!==i&&(Xx=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function KO(e=s1()){const t=Fs(e,"auth");if(t.isInitialized())return t.getImmediate();const n=I5(e,{popupRedirectResolver:EB,persistence:[Dz,_z,jO]}),r=dO("authTokenSyncURL");if(r){const s=AB(r);hz(n,s,()=>s(n.currentUser)),fz(n,o=>s(o))}const i=cO("auth");return i&&Q5(n,`http://${i}`),n}CB("Browser");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function OB(e,t,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(d){o(d)}}function l(c){try{u(r.throw(c))}catch(d){o(d)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(e,t||[])).next())})}function PB(e,t){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ho=function(){return ho=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},ho.apply(this,arguments)},YO=function(e){return{loading:e==null,value:e}},DB=function(){return function(e,t){switch(t.type){case"error":return ho(ho({},e),{error:t.error,loading:!1,value:void 0});case"reset":return YO(t.defaultValue);case"value":return ho(ho({},e),{error:void 0,loading:!1,value:t.value});default:return e}}},RB=function(e){var t=e?e():void 0,n=b.exports.useReducer(DB(),YO(t)),r=n[0],i=n[1],s=function(){var l=e?e():void 0;i({type:"reset",defaultValue:l})},o=function(l){i({type:"error",error:l})},a=function(l){i({type:"value",value:l})};return b.exports.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},jr=function(e,t){var n=RB(function(){return e.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,a=n.value;b.exports.useEffect(function(){var u=pz(e,function(c){return OB(void 0,void 0,void 0,function(){var d;return PB(this,function(f){switch(f.label){case 0:if(!(t!=null&&t.onUserChanged))return[3,4];f.label=1;case 1:return f.trys.push([1,3,,4]),[4,t.onUserChanged(c)];case 2:return f.sent(),[3,4];case 3:return d=f.sent(),s(d),[3,4];case 4:return o(c),[2]}})})},s);return function(){u()}},[e]);var l=[a,i,r];return b.exports.useMemo(function(){return l},l)},QO={exports:{}},XO={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zo=b.exports;function $B(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var NB=typeof Object.is=="function"?Object.is:$B,MB=zo.useState,LB=zo.useEffect,FB=zo.useLayoutEffect,VB=zo.useDebugValue;function jB(e,t){var n=t(),r=MB({inst:{value:n,getSnapshot:t}}),i=r[0].inst,s=r[1];return FB(function(){i.value=n,i.getSnapshot=t,km(i)&&s({inst:i})},[e,n,t]),LB(function(){return km(i)&&s({inst:i}),e(function(){km(i)&&s({inst:i})})},[e]),VB(n),n}function km(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!NB(e,n)}catch{return!0}}function UB(e,t){return t()}var zB=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?UB:jB;XO.useSyncExternalStore=zo.useSyncExternalStore!==void 0?zo.useSyncExternalStore:zB;(function(e){e.exports=XO})(QO);var JO={exports:{}},ZO={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ih=b.exports,BB=QO.exports;function HB(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var WB=typeof Object.is=="function"?Object.is:HB,qB=BB.useSyncExternalStore,GB=Ih.useRef,KB=Ih.useEffect,YB=Ih.useMemo,QB=Ih.useDebugValue;ZO.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var s=GB(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=YB(function(){function l(h){if(!u){if(u=!0,c=h,h=r(h),i!==void 0&&o.hasValue){var p=o.value;if(i(p,h))return d=p}return d=h}if(p=d,WB(c,h))return p;var y=r(h);return i!==void 0&&i(p,y)?p:(c=h,d=y)}var u=!1,c,d,f=n===void 0?null:n;return[function(){return l(t())},f===null?void 0:function(){return l(f())}]},[t,n,r,i]);var a=qB(e,s[0],s[1]);return KB(function(){o.hasValue=!0,o.value=a},[a]),QB(a),a};(function(e){e.exports=ZO})(JO);function XB(e){e()}let eP=XB;const JB=e=>eP=e,ZB=()=>eP,ki=b.exports.createContext(null);function tP(){return b.exports.useContext(ki)}const e6=()=>{throw new Error("uSES not initialized!")};let nP=e6;const t6=e=>{nP=e},n6=(e,t)=>e===t;function r6(e=ki){const t=e===ki?tP:()=>b.exports.useContext(e);return function(r,i=n6){const{store:s,subscription:o,getServerState:a}=t(),l=nP(o.addNestedSub,s.getState,a||s.getState,r,i);return b.exports.useDebugValue(l),l}}const Cn=r6();var rP={exports:{}},ke={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pt=typeof Symbol=="function"&&Symbol.for,m1=pt?Symbol.for("react.element"):60103,g1=pt?Symbol.for("react.portal"):60106,kh=pt?Symbol.for("react.fragment"):60107,Ah=pt?Symbol.for("react.strict_mode"):60108,Oh=pt?Symbol.for("react.profiler"):60114,Ph=pt?Symbol.for("react.provider"):60109,Dh=pt?Symbol.for("react.context"):60110,y1=pt?Symbol.for("react.async_mode"):60111,Rh=pt?Symbol.for("react.concurrent_mode"):60111,$h=pt?Symbol.for("react.forward_ref"):60112,Nh=pt?Symbol.for("react.suspense"):60113,i6=pt?Symbol.for("react.suspense_list"):60120,Mh=pt?Symbol.for("react.memo"):60115,Lh=pt?Symbol.for("react.lazy"):60116,s6=pt?Symbol.for("react.block"):60121,o6=pt?Symbol.for("react.fundamental"):60117,a6=pt?Symbol.for("react.responder"):60118,l6=pt?Symbol.for("react.scope"):60119;function mn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case m1:switch(e=e.type,e){case y1:case Rh:case kh:case Oh:case Ah:case Nh:return e;default:switch(e=e&&e.$$typeof,e){case Dh:case $h:case Lh:case Mh:case Ph:return e;default:return t}}case g1:return t}}}function iP(e){return mn(e)===Rh}ke.AsyncMode=y1;ke.ConcurrentMode=Rh;ke.ContextConsumer=Dh;ke.ContextProvider=Ph;ke.Element=m1;ke.ForwardRef=$h;ke.Fragment=kh;ke.Lazy=Lh;ke.Memo=Mh;ke.Portal=g1;ke.Profiler=Oh;ke.StrictMode=Ah;ke.Suspense=Nh;ke.isAsyncMode=function(e){return iP(e)||mn(e)===y1};ke.isConcurrentMode=iP;ke.isContextConsumer=function(e){return mn(e)===Dh};ke.isContextProvider=function(e){return mn(e)===Ph};ke.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===m1};ke.isForwardRef=function(e){return mn(e)===$h};ke.isFragment=function(e){return mn(e)===kh};ke.isLazy=function(e){return mn(e)===Lh};ke.isMemo=function(e){return mn(e)===Mh};ke.isPortal=function(e){return mn(e)===g1};ke.isProfiler=function(e){return mn(e)===Oh};ke.isStrictMode=function(e){return mn(e)===Ah};ke.isSuspense=function(e){return mn(e)===Nh};ke.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===kh||e===Rh||e===Oh||e===Ah||e===Nh||e===i6||typeof e=="object"&&e!==null&&(e.$$typeof===Lh||e.$$typeof===Mh||e.$$typeof===Ph||e.$$typeof===Dh||e.$$typeof===$h||e.$$typeof===o6||e.$$typeof===a6||e.$$typeof===l6||e.$$typeof===s6)};ke.typeOf=mn;(function(e){e.exports=ke})(rP);var v1=rP.exports,u6={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},c6={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},d6={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},sP={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},w1={};w1[v1.ForwardRef]=d6;w1[v1.Memo]=sP;function Jx(e){return v1.isMemo(e)?sP:w1[e.$$typeof]||u6}var f6=Object.defineProperty,h6=Object.getOwnPropertyNames,Zx=Object.getOwnPropertySymbols,p6=Object.getOwnPropertyDescriptor,m6=Object.getPrototypeOf,eE=Object.prototype;function oP(e,t,n){if(typeof t!="string"){if(eE){var r=m6(t);r&&r!==eE&&oP(e,r,n)}var i=h6(t);Zx&&(i=i.concat(Zx(t)));for(var s=Jx(e),o=Jx(t),a=0;a<i.length;++a){var l=i[a];if(!c6[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=p6(t,l);try{f6(e,l,u)}catch{}}}}return e}var g6=oP,_1={exports:{}},Ae={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S1=Symbol.for("react.element"),x1=Symbol.for("react.portal"),Fh=Symbol.for("react.fragment"),Vh=Symbol.for("react.strict_mode"),jh=Symbol.for("react.profiler"),Uh=Symbol.for("react.provider"),zh=Symbol.for("react.context"),y6=Symbol.for("react.server_context"),Bh=Symbol.for("react.forward_ref"),Hh=Symbol.for("react.suspense"),Wh=Symbol.for("react.suspense_list"),qh=Symbol.for("react.memo"),Gh=Symbol.for("react.lazy"),v6=Symbol.for("react.offscreen"),aP;aP=Symbol.for("react.module.reference");function Dn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case S1:switch(e=e.type,e){case Fh:case jh:case Vh:case Hh:case Wh:return e;default:switch(e=e&&e.$$typeof,e){case y6:case zh:case Bh:case Gh:case qh:case Uh:return e;default:return t}}case x1:return t}}}Ae.ContextConsumer=zh;Ae.ContextProvider=Uh;Ae.Element=S1;Ae.ForwardRef=Bh;Ae.Fragment=Fh;Ae.Lazy=Gh;Ae.Memo=qh;Ae.Portal=x1;Ae.Profiler=jh;Ae.StrictMode=Vh;Ae.Suspense=Hh;Ae.SuspenseList=Wh;Ae.isAsyncMode=function(){return!1};Ae.isConcurrentMode=function(){return!1};Ae.isContextConsumer=function(e){return Dn(e)===zh};Ae.isContextProvider=function(e){return Dn(e)===Uh};Ae.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===S1};Ae.isForwardRef=function(e){return Dn(e)===Bh};Ae.isFragment=function(e){return Dn(e)===Fh};Ae.isLazy=function(e){return Dn(e)===Gh};Ae.isMemo=function(e){return Dn(e)===qh};Ae.isPortal=function(e){return Dn(e)===x1};Ae.isProfiler=function(e){return Dn(e)===jh};Ae.isStrictMode=function(e){return Dn(e)===Vh};Ae.isSuspense=function(e){return Dn(e)===Hh};Ae.isSuspenseList=function(e){return Dn(e)===Wh};Ae.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Fh||e===jh||e===Vh||e===Hh||e===Wh||e===v6||typeof e=="object"&&e!==null&&(e.$$typeof===Gh||e.$$typeof===qh||e.$$typeof===Uh||e.$$typeof===zh||e.$$typeof===Bh||e.$$typeof===aP||e.getModuleId!==void 0)};Ae.typeOf=Dn;(function(e){e.exports=Ae})(_1);function w6(){const e=ZB();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,s=n={callback:r,next:null,prev:n};return s.prev?s.prev.next=s:t=s,function(){!i||t===null||(i=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:t=s.next)}}}}const tE={notify(){},get:()=>[]};function _6(e,t){let n,r=tE;function i(d){return l(),r.subscribe(d)}function s(){r.notify()}function o(){c.onStateChange&&c.onStateChange()}function a(){return Boolean(n)}function l(){n||(n=t?t.addNestedSub(o):e.subscribe(o),r=w6())}function u(){n&&(n(),n=void 0,r.clear(),r=tE)}const c={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:a,trySubscribe:l,tryUnsubscribe:u,getListeners:()=>r};return c}const S6=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",x6=S6?b.exports.useLayoutEffect:b.exports.useEffect;function E6({store:e,context:t,children:n,serverState:r}){const i=b.exports.useMemo(()=>{const a=_6(e);return{store:e,subscription:a,getServerState:r?()=>r:void 0}},[e,r]),s=b.exports.useMemo(()=>e.getState(),[e]);return x6(()=>{const{subscription:a}=i;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),s!==e.getState()&&a.notifyNestedSubs(),()=>{a.tryUnsubscribe(),a.onStateChange=void 0}},[i,s]),S((t||ki).Provider,{value:i,children:n})}function lP(e=ki){const t=e===ki?tP:()=>b.exports.useContext(e);return function(){const{store:r}=t();return r}}const b6=lP();function T6(e=ki){const t=e===ki?b6:lP(e);return function(){return t().dispatch}}const Li=T6();t6(JO.exports.useSyncExternalStoreWithSelector);JB(Fv.exports.unstable_batchedUpdates);var C6="firebase",I6="9.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tn(C6,I6,"app");const uP="@firebase/installations",E1="0.5.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cP=1e4,dP=`w:${E1}`,fP="FIS_v2",k6="https://firebaseinstallations.googleapis.com/v1",A6=60*60*1e3,O6="installations",P6="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D6={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Ts=new Ls(O6,P6,D6);function hP(e){return e instanceof Xn&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pP({projectId:e}){return`${k6}/projects/${e}/installations`}function mP(e){return{token:e.token,requestStatus:2,expiresIn:$6(e.expiresIn),creationTime:Date.now()}}async function gP(e,t){const r=(await t.json()).error;return Ts.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function yP({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function R6(e,{refreshToken:t}){const n=yP(e);return n.append("Authorization",N6(t)),n}async function vP(e){const t=await e();return t.status>=500&&t.status<600?e():t}function $6(e){return Number(e.replace("s","000"))}function N6(e){return`${fP} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M6({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=pP(e),i=yP(e),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:fP,appId:e.appId,sdkVersion:dP},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await vP(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:mP(u.authToken)}}else throw await gP("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wP(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L6(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F6=/^[cdef][\w-]{21}$/,Dy="";function V6(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=j6(e);return F6.test(n)?n:Dy}catch{return Dy}}function j6(e){return L6(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _P=new Map;function SP(e,t){const n=Kh(e);xP(n,t),U6(n,t)}function xP(e,t){const n=_P.get(e);if(!!n)for(const r of n)r(t)}function U6(e,t){const n=z6();n&&n.postMessage({key:e,fid:t}),B6()}let ss=null;function z6(){return!ss&&"BroadcastChannel"in self&&(ss=new BroadcastChannel("[Firebase] FID Change"),ss.onmessage=e=>{xP(e.data.key,e.data.fid)}),ss}function B6(){_P.size===0&&ss&&(ss.close(),ss=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H6="firebase-installations-database",W6=1,Cs="firebase-installations-store";let Am=null;function b1(){return Am||(Am=pO(H6,W6,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Cs)}}})),Am}async function pf(e,t){const n=Kh(e),i=(await b1()).transaction(Cs,"readwrite"),s=i.objectStore(Cs),o=await s.get(n);return await s.put(t,n),await i.done,(!o||o.fid!==t.fid)&&SP(e,t.fid),t}async function EP(e){const t=Kh(e),r=(await b1()).transaction(Cs,"readwrite");await r.objectStore(Cs).delete(t),await r.done}async function Yh(e,t){const n=Kh(e),i=(await b1()).transaction(Cs,"readwrite"),s=i.objectStore(Cs),o=await s.get(n),a=t(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&SP(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T1(e){let t;const n=await Yh(e.appConfig,r=>{const i=q6(r),s=G6(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===Dy?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function q6(e){const t=e||{fid:V6(),registrationStatus:0};return bP(t)}function G6(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ts.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=K6(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Y6(e)}:{installationEntry:t}}async function K6(e,t){try{const n=await M6(e,t);return pf(e.appConfig,n)}catch(n){throw hP(n)&&n.customData.serverCode===409?await EP(e.appConfig):await pf(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Y6(e){let t=await nE(e.appConfig);for(;t.registrationStatus===1;)await wP(100),t=await nE(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await T1(e);return r||n}return t}function nE(e){return Yh(e,t=>{if(!t)throw Ts.create("installation-not-found");return bP(t)})}function bP(e){return Q6(e)?{fid:e.fid,registrationStatus:0}:e}function Q6(e){return e.registrationStatus===1&&e.registrationTime+cP<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X6({appConfig:e,heartbeatServiceProvider:t},n){const r=J6(e,n),i=R6(e,n),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:dP,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await vP(()=>fetch(r,a));if(l.ok){const u=await l.json();return mP(u)}else throw await gP("Generate Auth Token",l)}function J6(e,{fid:t}){return`${pP(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C1(e,t=!1){let n;const r=await Yh(e.appConfig,s=>{if(!TP(s))throw Ts.create("not-registered");const o=s.authToken;if(!t&&t8(o))return s;if(o.requestStatus===1)return n=Z6(e,t),s;{if(!navigator.onLine)throw Ts.create("app-offline");const a=r8(s);return n=e8(e,a),a}});return n?await n:r.authToken}async function Z6(e,t){let n=await rE(e.appConfig);for(;n.authToken.requestStatus===1;)await wP(100),n=await rE(e.appConfig);const r=n.authToken;return r.requestStatus===0?C1(e,t):r}function rE(e){return Yh(e,t=>{if(!TP(t))throw Ts.create("not-registered");const n=t.authToken;return i8(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function e8(e,t){try{const n=await X6(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await pf(e.appConfig,r),n}catch(n){if(hP(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await EP(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await pf(e.appConfig,r)}throw n}}function TP(e){return e!==void 0&&e.registrationStatus===2}function t8(e){return e.requestStatus===2&&!n8(e)}function n8(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+A6}function r8(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function i8(e){return e.requestStatus===1&&e.requestTime+cP<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s8(e){const t=e,{installationEntry:n,registrationPromise:r}=await T1(t);return r?r.catch(console.error):C1(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o8(e,t=!1){const n=e;return await a8(n),(await C1(n,t)).token}async function a8(e){const{registrationPromise:t}=await T1(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l8(e){if(!e||!e.options)throw Om("App Configuration");if(!e.name)throw Om("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Om(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Om(e){return Ts.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CP="installations",u8="installations-internal",c8=e=>{const t=e.getProvider("app").getImmediate(),n=l8(t),r=Fs(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},d8=e=>{const t=e.getProvider("app").getImmediate(),n=Fs(t,CP).getImmediate();return{getId:()=>s8(n),getToken:i=>o8(n,i)}};function f8(){dr(new Qn(CP,c8,"PUBLIC")),dr(new Qn(u8,d8,"PRIVATE"))}f8();Tn(uP,E1);Tn(uP,E1,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf="analytics",h8="firebase_id",p8="origin",m8=60*1e3,g8="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",IP="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an=new Eh("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kP(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function y8(e,t){const n=document.createElement("script");n.src=`${IP}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function v8(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function w8(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const l=(await kP(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){an.error(a)}e("config",i,s)}async function _8(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await kP(n);for(const l of o){const u=a.find(d=>d.measurementId===l),c=u&&t[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){an.error(s)}}function S8(e,t,n,r){async function i(s,o,a){try{s==="event"?await _8(e,t,n,o,a):s==="config"?await w8(e,t,n,r,o,a):s==="consent"?e("consent","update",a):e("set",o)}catch(l){an.error(l)}}return i}function x8(e,t,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=S8(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function E8(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(IP)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b8={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},In=new Ls("analytics","Analytics",b8);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T8=30,C8=1e3;class I8{constructor(t={},n=C8){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const AP=new I8;function k8(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function A8(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:k8(r)},s=g8.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw In.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function O8(e,t=AP,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw In.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw In.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new R8;return setTimeout(async()=>{a.abort()},n!==void 0?n:m8),OP({appId:r,apiKey:i,measurementId:s},o,a,t)}async function OP(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=AP){var s,o;const{appId:a,measurementId:l}=e;try{await P8(r,t)}catch(u){if(l)return an.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${(s=u)===null||s===void 0?void 0:s.message}]`),{appId:a,measurementId:l};throw u}try{const u=await A8(e);return i.deleteThrottleMetadata(a),u}catch(u){const c=u;if(!D8(c)){if(i.deleteThrottleMetadata(a),l)return an.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:l};throw u}const d=Number((o=c==null?void 0:c.customData)===null||o===void 0?void 0:o.httpStatus)===503?Ix(n,i.intervalMillis,T8):Ix(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(a,f),an.debug(`Calling attemptFetch again in ${d} millis`),OP(e,f,r,i)}}function P8(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(In.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function D8(e){if(!(e instanceof Xn)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class R8{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function $8(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,o=Object.assign(Object.assign({},r),{send_to:s});e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N8(){var e;if(lO())try{await uO()}catch(t){return an.warn(In.create("indexeddb-unavailable",{errorInfo:(e=t)===null||e===void 0?void 0:e.toString()}).message),!1}else return an.warn(In.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function M8(e,t,n,r,i,s,o){var a;const l=O8(e);l.then(h=>{n[h.measurementId]=h.appId,e.options.measurementId&&h.measurementId!==e.options.measurementId&&an.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${h.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(h=>an.error(h)),t.push(l);const u=N8().then(h=>{if(h)return r.getId()}),[c,d]=await Promise.all([l,u]);E8(s)||y8(s,c.measurementId),i("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[p8]="firebase",f.update=!0,d!=null&&(f[h8]=d),i("config",c.measurementId,f),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L8{constructor(t){this.app=t}_delete(){return delete pl[this.app.options.appId],Promise.resolve()}}let pl={},iE=[];const sE={};let Pm="dataLayer",F8="gtag",oE,PP,aE=!1;function V8(){const e=[];if(aO()&&e.push("This is a browser extension environment."),t4()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=In.create("invalid-analytics-context",{errorInfo:t});an.warn(n.message)}}function j8(e,t,n){V8();const r=e.options.appId;if(!r)throw In.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)an.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw In.create("no-api-key");if(pl[r]!=null)throw In.create("already-exists",{id:r});if(!aE){v8(Pm);const{wrappedGtag:s,gtagCore:o}=x8(pl,iE,sE,Pm,F8);PP=s,oE=o,aE=!0}return pl[r]=M8(e,iE,sE,t,oE,Pm,n),new L8(e)}function U8(e=s1()){e=Je(e);const t=Fs(e,mf);return t.isInitialized()?t.getImmediate():z8(e)}function z8(e,t={}){const n=Fs(e,mf);if(n.isInitialized()){const i=n.getImmediate();if(Gl(t,n.getOptions()))return i;throw In.create("already-initialized")}return n.initialize({options:t})}function B8(e,t,n,r){e=Je(e),$8(PP,pl[e.app.options.appId],t,n,r).catch(i=>an.error(i))}const lE="@firebase/analytics",uE="0.8.3";function H8(){dr(new Qn(mf,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return j8(r,i,n)},"PUBLIC")),dr(new Qn("analytics-internal",e,"PRIVATE")),Tn(lE,uE),Tn(lE,uE,"esm2017");function e(t){try{const n=t.getProvider(mf).getImmediate();return{logEvent:(r,i,s)=>B8(n,r,i,s)}}catch(n){throw In.create("interop-component-reg-failed",{reason:n})}}}H8();var W8=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},te,I1=I1||{},ue=W8||self;function gf(){}function Qh(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Mu(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function q8(e){return Object.prototype.hasOwnProperty.call(e,Dm)&&e[Dm]||(e[Dm]=++G8)}var Dm="closure_uid_"+(1e9*Math.random()>>>0),G8=0;function K8(e,t,n){return e.call.apply(e.bind,arguments)}function Y8(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function Pt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Pt=K8:Pt=Y8,Pt.apply(null,arguments)}function Rc(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function bt(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function Fi(){this.s=this.s,this.o=this.o}var Q8=0;Fi.prototype.s=!1;Fi.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Q8!=0)&&q8(this)};Fi.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const DP=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function k1(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function cE(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Qh(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function Dt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Dt.prototype.h=function(){this.defaultPrevented=!0};var X8=function(){if(!ue.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{ue.addEventListener("test",gf,t),ue.removeEventListener("test",gf,t)}catch{}return e}();function yf(e){return/^[\s\xa0]*$/.test(e)}var dE=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Rm(e,t){return e<t?-1:e>t?1:0}function Xh(){var e=ue.navigator;return e&&(e=e.userAgent)?e:""}function nr(e){return Xh().indexOf(e)!=-1}function A1(e){return A1[" "](e),e}A1[" "]=gf;function J8(e){var t=tH;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Z8=nr("Opera"),Bo=nr("Trident")||nr("MSIE"),RP=nr("Edge"),Ry=RP||Bo,$P=nr("Gecko")&&!(Xh().toLowerCase().indexOf("webkit")!=-1&&!nr("Edge"))&&!(nr("Trident")||nr("MSIE"))&&!nr("Edge"),eH=Xh().toLowerCase().indexOf("webkit")!=-1&&!nr("Edge");function NP(){var e=ue.document;return e?e.documentMode:void 0}var vf;e:{var $m="",Nm=function(){var e=Xh();if($P)return/rv:([^\);]+)(\)|;)/.exec(e);if(RP)return/Edge\/([\d\.]+)/.exec(e);if(Bo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(eH)return/WebKit\/(\S+)/.exec(e);if(Z8)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Nm&&($m=Nm?Nm[1]:""),Bo){var Mm=NP();if(Mm!=null&&Mm>parseFloat($m)){vf=String(Mm);break e}}vf=$m}var tH={};function nH(){return J8(function(){let e=0;const t=dE(String(vf)).split("."),n=dE("9").split("."),r=Math.max(t.length,n.length);for(let o=0;e==0&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;e=Rm(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Rm(i[2].length==0,s[2].length==0)||Rm(i[2],s[2]),i=i[3],s=s[3]}while(e==0)}return 0<=e})}var $y;if(ue.document&&Bo){var fE=NP();$y=fE||parseInt(vf,10)||void 0}else $y=void 0;var rH=$y;function Jl(e,t){if(Dt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if($P){e:{try{A1(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:iH[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Jl.X.h.call(this)}}bt(Jl,Dt);var iH={2:"touch",3:"pen",4:"mouse"};Jl.prototype.h=function(){Jl.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Lu="closure_listenable_"+(1e6*Math.random()|0),sH=0;function oH(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++sH,this.ba=this.ea=!1}function Jh(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function O1(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function MP(e){const t={};for(const n in e)t[n]=e[n];return t}const hE="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function LP(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<hE.length;s++)n=hE[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Zh(e){this.src=e,this.g={},this.h=0}Zh.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=My(e,t,r,i);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new oH(t,this.src,s,!!r,i),t.ea=n,e.push(t)),t};function Ny(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=DP(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Jh(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function My(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ba&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}var P1="closure_lm_"+(1e6*Math.random()|0),Lm={};function FP(e,t,n,r,i){if(r&&r.once)return jP(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)FP(e,t[s],n,r,i);return null}return n=$1(n),e&&e[Lu]?e.N(t,n,Mu(r)?!!r.capture:!!r,i):VP(e,t,n,!1,r,i)}function VP(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=Mu(i)?!!i.capture:!!i,a=R1(e);if(a||(e[P1]=a=new Zh(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=aH(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)X8||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(zP(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function aH(){function e(n){return t.call(e.src,e.listener,n)}const t=lH;return e}function jP(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)jP(e,t[s],n,r,i);return null}return n=$1(n),e&&e[Lu]?e.O(t,n,Mu(r)?!!r.capture:!!r,i):VP(e,t,n,!0,r,i)}function UP(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)UP(e,t[s],n,r,i);else r=Mu(r)?!!r.capture:!!r,n=$1(n),e&&e[Lu]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=My(s,n,r,i),-1<n&&(Jh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=R1(e))&&(t=e.g[t.toString()],e=-1,t&&(e=My(t,n,r,i)),(n=-1<e?t[e]:null)&&D1(n))}function D1(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[Lu])Ny(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(zP(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=R1(t))?(Ny(n,e),n.h==0&&(n.src=null,t[P1]=null)):Jh(e)}}}function zP(e){return e in Lm?Lm[e]:Lm[e]="on"+e}function lH(e,t){if(e.ba)e=!0;else{t=new Jl(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&D1(e),e=n.call(r,t)}return e}function R1(e){return e=e[P1],e instanceof Zh?e:null}var Fm="__closure_events_fn_"+(1e9*Math.random()>>>0);function $1(e){return typeof e=="function"?e:(e[Fm]||(e[Fm]=function(t){return e.handleEvent(t)}),e[Fm])}function ht(){Fi.call(this),this.i=new Zh(this),this.P=this,this.I=null}bt(ht,Fi);ht.prototype[Lu]=!0;ht.prototype.removeEventListener=function(e,t,n,r){UP(this,e,t,n,r)};function _t(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,typeof t=="string")t=new Dt(t,e);else if(t instanceof Dt)t.target=t.target||e;else{var i=t;t=new Dt(r,e),LP(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=$c(o,r,!0,t)&&i}if(o=t.g=e,i=$c(o,r,!0,t)&&i,i=$c(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=$c(o,r,!1,t)&&i}ht.prototype.M=function(){if(ht.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Jh(n[r]);delete e.g[t],e.h--}}this.I=null};ht.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};ht.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function $c(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Ny(e.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var N1=ue.JSON.stringify;function uH(){var e=WP;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class cH{constructor(){this.h=this.g=null}add(t,n){const r=BP.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var BP=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new dH,e=>e.reset());class dH{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function fH(e){ue.setTimeout(()=>{throw e},0)}function HP(e,t){Ly||hH(),Fy||(Ly(),Fy=!0),WP.add(e,t)}var Ly;function hH(){var e=ue.Promise.resolve(void 0);Ly=function(){e.then(pH)}}var Fy=!1,WP=new cH;function pH(){for(var e;e=uH();){try{e.h.call(e.g)}catch(n){fH(n)}var t=BP;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Fy=!1}function ep(e,t){ht.call(this),this.h=e||1,this.g=t||ue,this.j=Pt(this.lb,this),this.l=Date.now()}bt(ep,ht);te=ep.prototype;te.ca=!1;te.R=null;te.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),_t(this,"tick"),this.ca&&(M1(this),this.start()))}};te.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function M1(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}te.M=function(){ep.X.M.call(this),M1(this),delete this.g};function L1(e,t,n){if(typeof e=="function")n&&(e=Pt(e,n));else if(e&&typeof e.handleEvent=="function")e=Pt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:ue.setTimeout(e,t||0)}function qP(e){e.g=L1(()=>{e.g=null,e.i&&(e.i=!1,qP(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class mH extends Fi{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:qP(this)}M(){super.M(),this.g&&(ue.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zl(e){Fi.call(this),this.h=e,this.g={}}bt(Zl,Fi);var pE=[];function GP(e,t,n,r){Array.isArray(n)||(n&&(pE[0]=n.toString()),n=pE);for(var i=0;i<n.length;i++){var s=FP(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function KP(e){O1(e.g,function(t,n){this.g.hasOwnProperty(n)&&D1(t)},e),e.g={}}Zl.prototype.M=function(){Zl.X.M.call(this),KP(this)};Zl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function tp(){this.g=!0}tp.prototype.Aa=function(){this.g=!1};function gH(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function yH(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function po(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+wH(e,n)+(r?" "+r:"")})}function vH(e,t){e.info(function(){return"TIMEOUT: "+t})}tp.prototype.info=function(){};function wH(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return N1(n)}catch{return t}}var Vs={},mE=null;function np(){return mE=mE||new ht}Vs.Pa="serverreachability";function YP(e){Dt.call(this,Vs.Pa,e)}bt(YP,Dt);function eu(e){const t=np();_t(t,new YP(t))}Vs.STAT_EVENT="statevent";function QP(e,t){Dt.call(this,Vs.STAT_EVENT,e),this.stat=t}bt(QP,Dt);function jt(e){const t=np();_t(t,new QP(t,e))}Vs.Qa="timingevent";function XP(e,t){Dt.call(this,Vs.Qa,e),this.size=t}bt(XP,Dt);function Fu(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return ue.setTimeout(function(){e()},t)}var rp={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},JP={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function F1(){}F1.prototype.h=null;function gE(e){return e.h||(e.h=e.i())}function ZP(){}var Vu={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function V1(){Dt.call(this,"d")}bt(V1,Dt);function j1(){Dt.call(this,"c")}bt(j1,Dt);var Vy;function ip(){}bt(ip,F1);ip.prototype.g=function(){return new XMLHttpRequest};ip.prototype.i=function(){return{}};Vy=new ip;function ju(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new Zl(this),this.O=_H,e=Ry?125:void 0,this.T=new ep(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new eD}function eD(){this.i=null,this.g="",this.h=!1}var _H=45e3,jy={},wf={};te=ju.prototype;te.setTimeout=function(e){this.O=e};function Uy(e,t,n){e.K=1,e.v=op($r(t)),e.s=n,e.P=!0,tD(e,null)}function tD(e,t){e.F=Date.now(),Uu(e),e.A=$r(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),uD(n.i,"t",r),e.C=0,n=e.l.H,e.h=new eD,e.g=OD(e.l,n?t:null,!e.s),0<e.N&&(e.L=new mH(Pt(e.La,e,e.g),e.N)),GP(e.S,e.g,"readystatechange",e.ib),t=e.H?MP(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),eu(),gH(e.j,e.u,e.A,e.m,e.U,e.s)}te.ib=function(e){e=e.target;const t=this.L;t&&Er(e)==3?t.l():this.La(e)};te.La=function(e){try{if(e==this.g)e:{const c=Er(this.g);var t=this.g.Ea();const d=this.g.aa();if(!(3>c)&&(c!=3||Ry||this.g&&(this.h.h||this.g.fa()||_E(this.g)))){this.I||c!=4||t==7||(t==8||0>=d?eu(3):eu(2)),sp(this);var n=this.g.aa();this.Y=n;t:if(nD(this)){var r=_E(this.g);e="";var i=r.length,s=Er(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){os(this),ml(this);var o="";break t}this.h.i=new ue.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,yH(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!yf(a)){var u=a;break t}}u=null}if(n=u)po(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,zy(this,n);else{this.i=!1,this.o=3,jt(12),os(this),ml(this);break e}}this.P?(rD(this,c,o),Ry&&this.i&&c==3&&(GP(this.S,this.T,"tick",this.hb),this.T.start())):(po(this.j,this.m,o,null),zy(this,o)),c==4&&os(this),this.i&&!this.I&&(c==4?CD(this.l,this):(this.i=!1,Uu(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,jt(12)):(this.o=0,jt(13)),os(this),ml(this)}}}catch{}finally{}};function nD(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function rD(e,t,n){let r=!0,i;for(;!e.I&&e.C<n.length;)if(i=SH(e,n),i==wf){t==4&&(e.o=4,jt(14),r=!1),po(e.j,e.m,null,"[Incomplete Response]");break}else if(i==jy){e.o=4,jt(15),po(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else po(e.j,e.m,i,null),zy(e,i);nD(e)&&i!=wf&&i!=jy&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,jt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),G1(t),t.K=!0,jt(11))):(po(e.j,e.m,n,"[Invalid Chunked Response]"),os(e),ml(e))}te.hb=function(){if(this.g){var e=Er(this.g),t=this.g.fa();this.C<t.length&&(sp(this),rD(this,e,t),this.i&&e!=4&&Uu(this))}};function SH(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?wf:(n=Number(t.substring(n,r)),isNaN(n)?jy:(r+=1,r+n>t.length?wf:(t=t.substr(r,n),e.C=r+n,t)))}te.cancel=function(){this.I=!0,os(this)};function Uu(e){e.V=Date.now()+e.O,iD(e,e.O)}function iD(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Fu(Pt(e.gb,e),t)}function sp(e){e.B&&(ue.clearTimeout(e.B),e.B=null)}te.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(vH(this.j,this.A),this.K!=2&&(eu(),jt(17)),os(this),this.o=2,ml(this)):iD(this,this.V-e)};function ml(e){e.l.G==0||e.I||CD(e.l,e)}function os(e){sp(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,M1(e.T),KP(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function zy(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||By(n.h,e))){if(!e.J&&By(n.h,e)&&n.G==3){try{var r=n.Fa.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)xf(n),up(n);else break e;q1(n),jt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Fu(Pt(n.cb,n),6e3));if(1>=fD(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else as(n,11)}else if((e.J||n.g==e)&&xf(n),!yf(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const d=u[4];d!=null&&(n.Ca=d,n.j.info("SVER="+n.Ca));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const p=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var s=r.h;s.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(U1(s,s.h),s.h=null))}if(r.D){const y=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.za=y,ze(r.F,r.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=e;if(r.sa=AD(r,r.H?r.ka:null,r.V),o.J){hD(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(sp(a),Uu(a)),r.g=o}else bD(r);0<n.i.length&&cp(n)}else u[0]!="stop"&&u[0]!="close"||as(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?as(n,7):W1(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}eu(4)}catch{}}function xH(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Qh(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function EH(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Qh(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function sD(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Qh(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=EH(e),r=xH(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var oD=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bH(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function hs(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof hs){this.h=t!==void 0?t:e.h,_f(this,e.j),this.s=e.s,this.g=e.g,Sf(this,e.m),this.l=e.l,t=e.i;var n=new tu;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),yE(this,n),this.o=e.o}else e&&(n=String(e).match(oD))?(this.h=!!t,_f(this,n[1]||"",!0),this.s=qa(n[2]||""),this.g=qa(n[3]||"",!0),Sf(this,n[4]),this.l=qa(n[5]||"",!0),yE(this,n[6]||"",!0),this.o=qa(n[7]||"")):(this.h=!!t,this.i=new tu(null,this.h))}hs.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ga(t,vE,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Ga(t,vE,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Ga(n,n.charAt(0)=="/"?IH:CH,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ga(n,AH)),e.join("")};function $r(e){return new hs(e)}function _f(e,t,n){e.j=n?qa(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Sf(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function yE(e,t,n){t instanceof tu?(e.i=t,OH(e.i,e.h)):(n||(t=Ga(t,kH)),e.i=new tu(t,e.h))}function ze(e,t,n){e.i.set(t,n)}function op(e){return ze(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function qa(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ga(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,TH),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function TH(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var vE=/[#\/\?@]/g,CH=/[#\?:]/g,IH=/[#\?]/g,kH=/[#\?@]/g,AH=/#/g;function tu(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Vi(e){e.g||(e.g=new Map,e.h=0,e.i&&bH(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}te=tu.prototype;te.add=function(e,t){Vi(this),this.i=null,e=aa(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function aD(e,t){Vi(e),t=aa(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function lD(e,t){return Vi(e),t=aa(e,t),e.g.has(t)}te.forEach=function(e,t){Vi(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};te.oa=function(){Vi(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};te.W=function(e){Vi(this);let t=[];if(typeof e=="string")lD(this,e)&&(t=t.concat(this.g.get(aa(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};te.set=function(e,t){return Vi(this),this.i=null,e=aa(this,e),lD(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};te.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function uD(e,t,n){aD(e,t),0<n.length&&(e.i=null,e.g.set(aa(e,t),k1(n)),e.h+=n.length)}te.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function aa(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function OH(e,t){t&&!e.j&&(Vi(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(aD(this,r),uD(this,i,n))},e)),e.j=t}var PH=class{constructor(e,t){this.h=e,this.g=t}};function cD(e){this.l=e||DH,ue.PerformanceNavigationTiming?(e=ue.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(ue.g&&ue.g.Ga&&ue.g.Ga()&&ue.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var DH=10;function dD(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function fD(e){return e.h?1:e.g?e.g.size:0}function By(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function U1(e,t){e.g?e.g.add(t):e.h=t}function hD(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}cD.prototype.cancel=function(){if(this.i=pD(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function pD(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return k1(e.i)}function z1(){}z1.prototype.stringify=function(e){return ue.JSON.stringify(e,void 0)};z1.prototype.parse=function(e){return ue.JSON.parse(e,void 0)};function RH(){this.g=new z1}function $H(e,t,n){const r=n||"";try{sD(e,function(i,s){let o=i;Mu(i)&&(o=N1(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function NH(e,t){const n=new tp;if(ue.Image){const r=new Image;r.onload=Rc(Nc,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Rc(Nc,n,r,"TestLoadImage: error",!1,t),r.onabort=Rc(Nc,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Rc(Nc,n,r,"TestLoadImage: timeout",!1,t),ue.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Nc(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function zu(e){this.l=e.ac||null,this.j=e.jb||!1}bt(zu,F1);zu.prototype.g=function(){return new ap(this.l,this.j)};zu.prototype.i=function(e){return function(){return e}}({});function ap(e,t){ht.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=B1,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}bt(ap,ht);var B1=0;te=ap.prototype;te.open=function(e,t){if(this.readyState!=B1)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,nu(this)};te.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||ue).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};te.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Bu(this)),this.readyState=B1};te.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,nu(this)),this.g&&(this.readyState=3,nu(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof ue.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;mD(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function mD(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}te.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Bu(this):nu(this),this.readyState==3&&mD(this)}};te.Va=function(e){this.g&&(this.response=this.responseText=e,Bu(this))};te.Ua=function(e){this.g&&(this.response=e,Bu(this))};te.ga=function(){this.g&&Bu(this)};function Bu(e){e.readyState=4,e.l=null,e.j=null,e.A=null,nu(e)}te.setRequestHeader=function(e,t){this.v.append(e,t)};te.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};te.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function nu(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(ap.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var MH=ue.JSON.parse;function Qe(e){ht.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=gD,this.K=this.L=!1}bt(Qe,ht);var gD="",LH=/^https?$/i,FH=["POST","PUT"];te=Qe.prototype;te.Ka=function(e){this.L=e};te.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Vy.g(),this.C=this.u?gE(this.u):gE(Vy),this.g.onreadystatechange=Pt(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){wE(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=ue.FormData&&e instanceof ue.FormData,!(0<=DP(FH,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{wD(this),0<this.B&&((this.K=VH(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Pt(this.qa,this)):this.A=L1(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){wE(this,s)}};function VH(e){return Bo&&nH()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}te.qa=function(){typeof I1<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,_t(this,"timeout"),this.abort(8))};function wE(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,yD(e),lp(e)}function yD(e){e.D||(e.D=!0,_t(e,"complete"),_t(e,"error"))}te.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,_t(this,"complete"),_t(this,"abort"),lp(this))};te.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),lp(this,!0)),Qe.X.M.call(this)};te.Ha=function(){this.s||(this.F||this.v||this.l?vD(this):this.fb())};te.fb=function(){vD(this)};function vD(e){if(e.h&&typeof I1<"u"&&(!e.C[1]||Er(e)!=4||e.aa()!=2)){if(e.v&&Er(e)==4)L1(e.Ha,0,e);else if(_t(e,"readystatechange"),Er(e)==4){e.h=!1;try{const a=e.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=a===0){var i=String(e.H).match(oD)[1]||null;if(!i&&ue.self&&ue.self.location){var s=ue.self.location.protocol;i=s.substr(0,s.length-1)}r=!LH.test(i?i.toLowerCase():"")}n=r}if(n)_t(e,"complete"),_t(e,"success");else{e.m=6;try{var o=2<Er(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",yD(e)}}finally{lp(e)}}}}function lp(e,t){if(e.g){wD(e);const n=e.g,r=e.C[0]?gf:null;e.g=null,e.C=null,t||_t(e,"ready");try{n.onreadystatechange=r}catch{}}}function wD(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(ue.clearTimeout(e.A),e.A=null)}function Er(e){return e.g?e.g.readyState:0}te.aa=function(){try{return 2<Er(this)?this.g.status:-1}catch{return-1}};te.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};te.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),MH(t)}};function _E(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case gD:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}te.Ea=function(){return this.m};te.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function _D(e){let t="";return O1(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function H1(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=_D(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):ze(e,t,n))}function Da(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function SD(e){this.Ca=0,this.i=[],this.j=new tp,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Da("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Da("baseRetryDelayMs",5e3,e),this.bb=Da("retryDelaySeedMs",1e4,e),this.$a=Da("forwardChannelMaxRetries",2,e),this.ta=Da("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new cD(e&&e.concurrentRequestLimit),this.Fa=new RH,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}te=SD.prototype;te.ma=8;te.G=1;function W1(e){if(xD(e),e.G==3){var t=e.U++,n=$r(e.F);ze(n,"SID",e.I),ze(n,"RID",t),ze(n,"TYPE","terminate"),Hu(e,n),t=new ju(e,e.j,t,void 0),t.K=2,t.v=op($r(n)),n=!1,ue.navigator&&ue.navigator.sendBeacon&&(n=ue.navigator.sendBeacon(t.v.toString(),"")),!n&&ue.Image&&(new Image().src=t.v,n=!0),n||(t.g=OD(t.l,null),t.g.da(t.v)),t.F=Date.now(),Uu(t)}kD(e)}function up(e){e.g&&(G1(e),e.g.cancel(),e.g=null)}function xD(e){up(e),e.u&&(ue.clearTimeout(e.u),e.u=null),xf(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&ue.clearTimeout(e.m),e.m=null)}function cp(e){dD(e.h)||e.m||(e.m=!0,HP(e.Ja,e),e.C=0)}function jH(e,t){return fD(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=Fu(Pt(e.Ja,e,t),ID(e,e.C)),e.C++,!0)}te.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new ju(this,this.j,e,void 0);let s=this.s;if(this.S&&(s?(s=MP(s),LP(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=ED(this,i,t),n=$r(this.F),ze(n,"RID",e),ze(n,"CVER",22),this.D&&ze(n,"X-HTTP-Session-Id",this.D),Hu(this,n),s&&(this.N?t="headers="+encodeURIComponent(String(_D(s)))+"&"+t:this.o&&H1(n,this.o,s)),U1(this.h,i),this.Ya&&ze(n,"TYPE","init"),this.O?(ze(n,"$req",t),ze(n,"SID","null"),i.Z=!0,Uy(i,n,null)):Uy(i,n,t),this.G=2}}else this.G==3&&(e?SE(this,e):this.i.length==0||dD(this.h)||SE(this))};function SE(e,t){var n;t?n=t.m:n=e.U++;const r=$r(e.F);ze(r,"SID",e.I),ze(r,"RID",n),ze(r,"AID",e.T),Hu(e,r),e.o&&e.s&&H1(r,e.o,e.s),n=new ju(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=ED(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),U1(e.h,n),Uy(n,r,t)}function Hu(e,t){e.ia&&O1(e.ia,function(n,r){ze(t,r,n)}),e.l&&sD({},function(n,r){ze(t,r,n)})}function ED(e,t,n){n=Math.min(e.i.length,n);var r=e.l?Pt(e.l.Ra,e.l,e):null;e:{var i=e.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{$H(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function bD(e){e.g||e.u||(e.Z=1,HP(e.Ia,e),e.A=0)}function q1(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=Fu(Pt(e.Ia,e),ID(e,e.A)),e.A++,!0)}te.Ia=function(){if(this.u=null,TD(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Fu(Pt(this.eb,this),e)}};te.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,jt(10),up(this),TD(this))};function G1(e){e.B!=null&&(ue.clearTimeout(e.B),e.B=null)}function TD(e){e.g=new ju(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=$r(e.sa);ze(t,"RID","rpc"),ze(t,"SID",e.I),ze(t,"CI",e.L?"0":"1"),ze(t,"AID",e.T),ze(t,"TYPE","xmlhttp"),Hu(e,t),e.o&&e.s&&H1(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=op($r(t)),n.s=null,n.P=!0,tD(n,e)}te.cb=function(){this.v!=null&&(this.v=null,up(this),q1(this),jt(19))};function xf(e){e.v!=null&&(ue.clearTimeout(e.v),e.v=null)}function CD(e,t){var n=null;if(e.g==t){xf(e),G1(e),e.g=null;var r=2}else if(By(e.h,t))n=t.D,hD(e.h,t),r=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=np(),_t(r,new XP(r,n)),cp(e)}else bD(e);else if(i=t.o,i==3||i==0&&0<e.pa||!(r==1&&jH(e,t)||r==2&&q1(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:as(e,5);break;case 4:as(e,10);break;case 3:as(e,6);break;default:as(e,2)}}}function ID(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function as(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var r=Pt(e.kb,e);n||(n=new hs("//www.google.com/images/cleardot.gif"),ue.location&&ue.location.protocol=="http"||_f(n,"https"),op(n)),NH(n.toString(),r)}else jt(2);e.G=0,e.l&&e.l.va(t),kD(e),xD(e)}te.kb=function(e){e?(this.j.info("Successfully pinged google.com"),jt(2)):(this.j.info("Failed to ping google.com"),jt(1))};function kD(e){if(e.G=0,e.la=[],e.l){const t=pD(e.h);(t.length!=0||e.i.length!=0)&&(cE(e.la,t),cE(e.la,e.i),e.h.i.length=0,k1(e.i),e.i.length=0),e.l.ua()}}function AD(e,t,n){var r=n instanceof hs?$r(n):new hs(n,void 0);if(r.g!="")t&&(r.g=t+"."+r.g),Sf(r,r.m);else{var i=ue.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new hs(null,void 0);r&&_f(s,r),t&&(s.g=t),i&&Sf(s,i),n&&(s.l=n),r=s}return n=e.D,t=e.za,n&&t&&ze(r,n,t),ze(r,"VER",e.ma),Hu(e,r),r}function OD(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new Qe(new zu({jb:!0})):new Qe(e.ra),t.Ka(e.H),t}function PD(){}te=PD.prototype;te.xa=function(){};te.wa=function(){};te.va=function(){};te.ua=function(){};te.Ra=function(){};function Ef(){if(Bo&&!(10<=Number(rH)))throw Error("Environmental error: no available transport.")}Ef.prototype.g=function(e,t){return new dn(e,t)};function dn(e,t){ht.call(this),this.g=new SD(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!yf(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!yf(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new la(this)}bt(dn,ht);dn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;jt(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=AD(e,null,e.V),cp(e)};dn.prototype.close=function(){W1(this.g)};dn.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=N1(e),e=n);t.i.push(new PH(t.ab++,e)),t.G==3&&cp(t)};dn.prototype.M=function(){this.g.l=null,delete this.j,W1(this.g),delete this.g,dn.X.M.call(this)};function DD(e){V1.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}bt(DD,V1);function RD(){j1.call(this),this.status=1}bt(RD,j1);function la(e){this.g=e}bt(la,PD);la.prototype.xa=function(){_t(this.g,"a")};la.prototype.wa=function(e){_t(this.g,new DD(e))};la.prototype.va=function(e){_t(this.g,new RD)};la.prototype.ua=function(){_t(this.g,"b")};Ef.prototype.createWebChannel=Ef.prototype.g;dn.prototype.send=dn.prototype.u;dn.prototype.open=dn.prototype.m;dn.prototype.close=dn.prototype.close;rp.NO_ERROR=0;rp.TIMEOUT=8;rp.HTTP_ERROR=6;JP.COMPLETE="complete";ZP.EventType=Vu;Vu.OPEN="a";Vu.CLOSE="b";Vu.ERROR="c";Vu.MESSAGE="d";ht.prototype.listen=ht.prototype.N;Qe.prototype.listenOnce=Qe.prototype.O;Qe.prototype.getLastError=Qe.prototype.Oa;Qe.prototype.getLastErrorCode=Qe.prototype.Ea;Qe.prototype.getStatus=Qe.prototype.aa;Qe.prototype.getResponseJson=Qe.prototype.Sa;Qe.prototype.getResponseText=Qe.prototype.fa;Qe.prototype.send=Qe.prototype.da;Qe.prototype.setWithCredentials=Qe.prototype.Ka;var UH=function(){return new Ef},zH=function(){return np()},Vm=rp,BH=JP,HH=Vs,xE={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},WH=zu,Mc=ZP,qH=Qe;const EE="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}kt.UNAUTHENTICATED=new kt(null),kt.GOOGLE_CREDENTIALS=new kt("google-credentials-uid"),kt.FIRST_PARTY=new kt("first-party-uid"),kt.MOCK_USER=new kt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ua="9.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=new Eh("@firebase/firestore");function bE(){return Is.logLevel}function ne(e,...t){if(Is.logLevel<=be.DEBUG){const n=t.map(K1);Is.debug(`Firestore (${ua}): ${e}`,...n)}}function Nr(e,...t){if(Is.logLevel<=be.ERROR){const n=t.map(K1);Is.error(`Firestore (${ua}): ${e}`,...n)}}function Hy(e,...t){if(Is.logLevel<=be.WARN){const n=t.map(K1);Is.warn(`Firestore (${ua}): ${e}`,...n)}}function K1(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(e="Unexpected state"){const t=`FIRESTORE (${ua}) INTERNAL ASSERTION FAILED: `+e;throw Nr(t),new Error(t)}function De(e,t){e||he()}function pe(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends Xn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class GH{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(kt.UNAUTHENTICATED))}shutdown(){}}class KH{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class YH{constructor(t){this.t=t,this.currentUser=kt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Tr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Tr,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Tr)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(De(typeof r.accessToken=="string"),new $D(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return De(t===null||typeof t=="string"),new kt(t)}}class QH{constructor(t,n,r,i){this.h=t,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=kt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(De(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class XH{constructor(t,n,r,i){this.h=t,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new QH(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(kt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class JH{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ZH{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const r=s=>{s.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,ne("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(De(typeof n.token=="string"),this.A=n.token,new JH(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e7(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=e7(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function Ce(e,t){return e<t?-1:e>t?1:0}function Ho(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new J($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new J($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new J($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new J($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ot.fromMillis(Date.now())}static fromDate(t){return ot.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new ot(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Ce(this.nanoseconds,t.nanoseconds):Ce(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(t){this.timestamp=t}static fromTimestamp(t){return new ye(t)}static min(){return new ye(new ot(0,0))}static max(){return new ye(new ot(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(t,n,r){n===void 0?n=0:n>t.length&&he(),r===void 0?r=t.length-n:r>t.length-n&&he(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return ru.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof ru?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class Me extends ru{construct(t,n,r){return new Me(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new J($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Me(n)}static emptyPath(){return new Me([])}}const t7=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ot extends ru{construct(t,n,r){return new Ot(t,n,r)}static isValidIdentifier(t){return t7.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ot.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ot(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new J($.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new J($.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new J($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new J($.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ot(n)}static emptyPath(){return new Ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(t){this.path=t}static fromPath(t){return new ie(Me.fromString(t))}static fromName(t){return new ie(Me.fromString(t).popFirst(5))}static empty(){return new ie(Me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Me.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Me.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ie(new Me(t.slice()))}}function n7(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=ye.fromTimestamp(r===1e9?new ot(n+1,0):new ot(n,r));return new Ai(i,ie.empty(),t)}function r7(e){return new Ai(e.readTime,e.key,-1)}class Ai{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Ai(ye.min(),ie.empty(),-1)}static max(){return new Ai(ye.max(),ie.empty(),-1)}}function i7(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=ie.comparator(e.documentKey,t.documentKey),n!==0?n:Ce(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s7="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class o7{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wu(e){if(e.code!==$.FAILED_PRECONDITION||e.message!==s7)throw e;ne("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&he(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new U((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):U.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):U.reject(n)}static resolve(t){return new U((n,r)=>{n(t)})}static reject(t){return new U((n,r)=>{r(t)})}static waitFor(t){return new U((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(t){let n=U.resolve(!1);for(const r of t)n=n.next(i=>i?U.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new U((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(t[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(t,n){return new U((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}function qu(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function js(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function MD(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Y1.at=-1;class lt{constructor(t,n){this.comparator=t,this.root=n||yt.EMPTY}insert(t,n){return new lt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,yt.BLACK,null,null))}remove(t){return new lt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,yt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Lc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Lc(this.root,t,this.comparator,!1)}getReverseIterator(){return new Lc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Lc(this.root,t,this.comparator,!0)}}class Lc{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class yt{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r!=null?r:yt.RED,this.left=i!=null?i:yt.EMPTY,this.right=s!=null?s:yt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new yt(t!=null?t:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return yt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return yt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw he();const t=this.left.check();if(t!==this.right.check())throw he();return t+(this.isRed()?0:1)}}yt.EMPTY=null,yt.RED=!0,yt.BLACK=!1;yt.EMPTY=new class{constructor(){this.size=0}get key(){throw he()}get value(){throw he()}get color(){throw he()}get left(){throw he()}get right(){throw he()}copy(e,t,n,r,i){return this}insert(e,t,n){return new yt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t){this.comparator=t,this.data=new lt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new CE(this.data.getIterator())}getIteratorFrom(t){return new CE(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof at)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new at(this.comparator);return n.data=t,n}}class CE{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(t){this.fields=t,t.sort(Ot.comparator)}static empty(){return new kn([])}unionWith(t){let n=new at(Ot.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new kn(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Ho(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new Nt(n)}static fromUint8Array(t){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(t);return new Nt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Ce(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Nt.EMPTY_BYTE_STRING=new Nt("");const a7=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Oi(e){if(De(!!e),typeof e=="string"){let t=0;const n=a7.exec(e);if(De(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:et(e.seconds),nanos:et(e.nanos)}}function et(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Wo(e){return typeof e=="string"?Nt.fromBase64String(e):Nt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LD(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function FD(e){const t=e.mapValue.fields.__previous_value__;return LD(t)?FD(t):t}function iu(e){const t=Oi(e.mapValue.fields.__local_write_time__.timestampValue);return new ot(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l7{constructor(t,n,r,i,s,o,a,l){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class su{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new su("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof su&&t.projectId===this.projectId&&t.database===this.database}}function dp(e){return e==null}function bf(e){return e===0&&1/e==-1/0}function u7(e){return typeof e=="number"&&Number.isInteger(e)&&!bf(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ks(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?LD(e)?4:c7(e)?9007199254740991:10:he()}function fr(e,t){if(e===t)return!0;const n=ks(e);if(n!==ks(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return iu(e).isEqual(iu(t));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Oi(r.timestampValue),o=Oi(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(r,i){return Wo(r.bytesValue).isEqual(Wo(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(r,i){return et(r.geoPointValue.latitude)===et(i.geoPointValue.latitude)&&et(r.geoPointValue.longitude)===et(i.geoPointValue.longitude)}(e,t);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return et(r.integerValue)===et(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=et(r.doubleValue),o=et(i.doubleValue);return s===o?bf(s)===bf(o):isNaN(s)&&isNaN(o)}return!1}(e,t);case 9:return Ho(e.arrayValue.values||[],t.arrayValue.values||[],fr);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(TE(s)!==TE(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!fr(s[a],o[a])))return!1;return!0}(e,t);default:return he()}}function ou(e,t){return(e.values||[]).find(n=>fr(n,t))!==void 0}function qo(e,t){if(e===t)return 0;const n=ks(e),r=ks(t);if(n!==r)return Ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ce(e.booleanValue,t.booleanValue);case 2:return function(i,s){const o=et(i.integerValue||i.doubleValue),a=et(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return IE(e.timestampValue,t.timestampValue);case 4:return IE(iu(e),iu(t));case 5:return Ce(e.stringValue,t.stringValue);case 6:return function(i,s){const o=Wo(i),a=Wo(s);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=Ce(o[l],a[l]);if(u!==0)return u}return Ce(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,s){const o=Ce(et(i.latitude),et(s.latitude));return o!==0?o:Ce(et(i.longitude),et(s.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=qo(o[l],a[l]);if(u)return u}return Ce(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,s){if(i===Fc.mapValue&&s===Fc.mapValue)return 0;if(i===Fc.mapValue)return 1;if(s===Fc.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const d=Ce(a[c],u[c]);if(d!==0)return d;const f=qo(o[a[c]],l[u[c]]);if(f!==0)return f}return Ce(a.length,u.length)}(e.mapValue,t.mapValue);default:throw he()}}function IE(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return Ce(e,t);const n=Oi(e),r=Oi(t),i=Ce(n.seconds,r.seconds);return i!==0?i:Ce(n.nanos,r.nanos)}function Oo(e){return Wy(e)}function Wy(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(r){const i=Oi(r);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Wo(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,ie.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Wy(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Wy(r.fields[a])}`;return s+"}"}(e.mapValue):he();var t,n}function kE(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function qy(e){return!!e&&"integerValue"in e}function Q1(e){return!!e&&"arrayValue"in e}function AE(e){return!!e&&"nullValue"in e}function OE(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function cd(e){return!!e&&"mapValue"in e}function gl(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return js(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=gl(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=gl(e.arrayValue.values[n]);return t}return Object.assign({},e)}function c7(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(t){this.value=t}static empty(){return new Yt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!cd(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=gl(n)}setAll(t){let n=Ot.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=gl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());cd(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return fr(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];cd(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){js(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new Yt(gl(this.value))}}function VD(e){const t=[];return js(e.fields,(n,r)=>{const i=new Ot([n]);if(cd(r)){const s=VD(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new kn(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t,n,r,i,s,o){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(t){return new vt(t,0,ye.min(),ye.min(),Yt.empty(),0)}static newFoundDocument(t,n,r){return new vt(t,1,n,ye.min(),r,0)}static newNoDocument(t,n){return new vt(t,2,n,ye.min(),Yt.empty(),0)}static newUnknownDocument(t,n){return new vt(t,3,n,ye.min(),Yt.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Yt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ye.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof vt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d7{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ht=null}}function PE(e,t=null,n=[],r=[],i=null,s=null,o=null){return new d7(e,t,n,r,i,s,o)}function X1(e){const t=pe(e);if(t.ht===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+Oo(i.value);var i}).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),dp(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Oo(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Oo(r)).join(",")),t.ht=n}return t.ht}function f7(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Oo(r.value)}`;var r}).join(", ")}]`),dp(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>Oo(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>Oo(n)).join(",")),`Target(${t})`}function J1(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!_7(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!fr(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!RE(e.startAt,t.startAt)&&RE(e.endAt,t.endAt)}function Gy(e){return ie.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class Ut extends class{}{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.lt(t,n,r):new h7(t,n,r):n==="array-contains"?new g7(t,r):n==="in"?new y7(t,r):n==="not-in"?new v7(t,r):n==="array-contains-any"?new w7(t,r):new Ut(t,n,r)}static lt(t,n,r){return n==="in"?new p7(t,r):new m7(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.ft(qo(n,this.value)):n!==null&&ks(this.value)===ks(n)&&this.ft(qo(n,this.value))}ft(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return he()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class h7 extends Ut{constructor(t,n,r){super(t,n,r),this.key=ie.fromName(r.referenceValue)}matches(t){const n=ie.comparator(t.key,this.key);return this.ft(n)}}class p7 extends Ut{constructor(t,n){super(t,"in",n),this.keys=jD("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class m7 extends Ut{constructor(t,n){super(t,"not-in",n),this.keys=jD("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function jD(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ie.fromName(r.referenceValue))}class g7 extends Ut{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Q1(n)&&ou(n.arrayValue,this.value)}}class y7 extends Ut{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&ou(this.value.arrayValue,n)}}class v7 extends Ut{constructor(t,n){super(t,"not-in",n)}matches(t){if(ou(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!ou(this.value.arrayValue,n)}}class w7 extends Ut{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Q1(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ou(this.value.arrayValue,r))}}class Tf{constructor(t,n){this.position=t,this.inclusive=n}}class yl{constructor(t,n="asc"){this.field=t,this.dir=n}}function _7(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function DE(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=ie.comparator(ie.fromName(o.referenceValue),n.key):r=qo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function RE(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!fr(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function S7(e,t,n,r,i,s,o,a){return new Gu(e,t,n,r,i,s,o,a)}function Z1(e){return new Gu(e)}function $E(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function UD(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function zD(e){for(const t of e.filters)if(t.dt())return t.field;return null}function BD(e){return e.collectionGroup!==null}function au(e){const t=pe(e);if(t._t===null){t._t=[];const n=zD(t),r=UD(t);if(n!==null&&r===null)n.isKeyField()||t._t.push(new yl(n)),t._t.push(new yl(Ot.keyField(),"asc"));else{let i=!1;for(const s of t.explicitOrderBy)t._t.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t._t.push(new yl(Ot.keyField(),s))}}}return t._t}function Mr(e){const t=pe(e);if(!t.wt)if(t.limitType==="F")t.wt=PE(t.path,t.collectionGroup,au(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const s of au(t)){const o=s.dir==="desc"?"asc":"desc";n.push(new yl(s.field,o))}const r=t.endAt?new Tf(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new Tf(t.startAt.position,t.startAt.inclusive):null;t.wt=PE(t.path,t.collectionGroup,n,t.filters,t.limit,r,i)}return t.wt}function Ky(e,t,n){return new Gu(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function fp(e,t){return J1(Mr(e),Mr(t))&&e.limitType===t.limitType}function HD(e){return`${X1(Mr(e))}|lt:${e.limitType}`}function Yy(e){return`Query(target=${f7(Mr(e))}; limitType=${e.limitType})`}function ew(e,t){return t.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):ie.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(e,t)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=DE(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,au(n),r)||n.endAt&&!function(i,s,o){const a=DE(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,au(n),r))}(e,t)}function x7(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function WD(e){return(t,n)=>{let r=!1;for(const i of au(e)){const s=E7(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function E7(e,t,n){const r=e.field.isKeyField()?ie.comparator(t.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?qo(a,l):he()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return he()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qD(e,t){if(e.gt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bf(t)?"-0":t}}function GD(e){return{integerValue:""+e}}function b7(e,t){return u7(t)?GD(t):qD(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(){this._=void 0}}function T7(e,t,n){return e instanceof Cf?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,t):e instanceof lu?YD(e,t):e instanceof uu?QD(e,t):function(r,i){const s=KD(r,i),o=NE(s)+NE(r.yt);return qy(s)&&qy(r.yt)?GD(o):qD(r.It,o)}(e,t)}function C7(e,t,n){return e instanceof lu?YD(e,t):e instanceof uu?QD(e,t):n}function KD(e,t){return e instanceof If?qy(n=t)||function(r){return!!r&&"doubleValue"in r}(n)?t:{integerValue:0}:null;var n}class Cf extends hp{}class lu extends hp{constructor(t){super(),this.elements=t}}function YD(e,t){const n=XD(t);for(const r of e.elements)n.some(i=>fr(i,r))||n.push(r);return{arrayValue:{values:n}}}class uu extends hp{constructor(t){super(),this.elements=t}}function QD(e,t){let n=XD(t);for(const r of e.elements)n=n.filter(i=>!fr(i,r));return{arrayValue:{values:n}}}class If extends hp{constructor(t,n){super(),this.It=t,this.yt=n}}function NE(e){return et(e.integerValue||e.doubleValue)}function XD(e){return Q1(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function I7(e,t){return e.field.isEqual(t.field)&&function(n,r){return n instanceof lu&&r instanceof lu||n instanceof uu&&r instanceof uu?Ho(n.elements,r.elements,fr):n instanceof If&&r instanceof If?fr(n.yt,r.yt):n instanceof Cf&&r instanceof Cf}(e.transform,t.transform)}class k7{constructor(t,n){this.version=t,this.transformResults=n}}class Gn{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Gn}static exists(t){return new Gn(void 0,t)}static updateTime(t){return new Gn(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function dd(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class pp{}function JD(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new tw(e.key,Gn.none()):new Ku(e.key,e.data,Gn.none());{const n=e.data,r=Yt.empty();let i=new at(Ot.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ji(e.key,r,new kn(i.toArray()),Gn.none())}}function A7(e,t,n){e instanceof Ku?function(r,i,s){const o=r.value.clone(),a=LE(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(e,t,n):e instanceof ji?function(r,i,s){if(!dd(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=LE(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(ZD(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(e,t,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,t,n)}function vl(e,t,n,r){return e instanceof Ku?function(i,s,o,a){if(!dd(i.precondition,s))return o;const l=i.value.clone(),u=FE(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(e,t,n,r):e instanceof ji?function(i,s,o,a){if(!dd(i.precondition,s))return o;const l=FE(i.fieldTransforms,a,s),u=s.data;return u.setAll(ZD(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(e,t,n,r):function(i,s,o){return dd(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(e,t,n)}function O7(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=KD(r.transform,i||null);s!=null&&(n===null&&(n=Yt.empty()),n.set(r.field,s))}return n||null}function ME(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Ho(n,r,(i,s)=>I7(i,s))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Ku extends pp{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ji extends pp{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ZD(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function LE(e,t,n){const r=new Map;De(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,C7(o,a,n[i]))}return r}function FE(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,T7(s,o,t))}return r}class tw extends pp{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class P7 extends pp{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D7{constructor(t){this.count=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ze,Se;function R7(e){switch(e){default:return he();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function eR(e){if(e===void 0)return Nr("GRPC error has no .code"),$.UNKNOWN;switch(e){case Ze.OK:return $.OK;case Ze.CANCELLED:return $.CANCELLED;case Ze.UNKNOWN:return $.UNKNOWN;case Ze.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case Ze.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case Ze.INTERNAL:return $.INTERNAL;case Ze.UNAVAILABLE:return $.UNAVAILABLE;case Ze.UNAUTHENTICATED:return $.UNAUTHENTICATED;case Ze.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case Ze.NOT_FOUND:return $.NOT_FOUND;case Ze.ALREADY_EXISTS:return $.ALREADY_EXISTS;case Ze.PERMISSION_DENIED:return $.PERMISSION_DENIED;case Ze.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case Ze.ABORTED:return $.ABORTED;case Ze.OUT_OF_RANGE:return $.OUT_OF_RANGE;case Ze.UNIMPLEMENTED:return $.UNIMPLEMENTED;case Ze.DATA_LOSS:return $.DATA_LOSS;default:return he()}}(Se=Ze||(Ze={}))[Se.OK=0]="OK",Se[Se.CANCELLED=1]="CANCELLED",Se[Se.UNKNOWN=2]="UNKNOWN",Se[Se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Se[Se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Se[Se.NOT_FOUND=5]="NOT_FOUND",Se[Se.ALREADY_EXISTS=6]="ALREADY_EXISTS",Se[Se.PERMISSION_DENIED=7]="PERMISSION_DENIED",Se[Se.UNAUTHENTICATED=16]="UNAUTHENTICATED",Se[Se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Se[Se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Se[Se.ABORTED=10]="ABORTED",Se[Se.OUT_OF_RANGE=11]="OUT_OF_RANGE",Se[Se.UNIMPLEMENTED=12]="UNIMPLEMENTED",Se[Se.INTERNAL=13]="INTERNAL",Se[Se.UNAVAILABLE=14]="UNAVAILABLE",Se[Se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){js(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return MD(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $7=new lt(ie.comparator);function Lr(){return $7}const tR=new lt(ie.comparator);function Ka(...e){let t=tR;for(const n of e)t=t.insert(n.key,n);return t}function nR(e){let t=tR;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function ls(){return wl()}function rR(){return wl()}function wl(){return new ca(e=>e.toString(),(e,t)=>e.isEqual(t))}const N7=new lt(ie.comparator),M7=new at(ie.comparator);function ve(...e){let t=M7;for(const n of e)t=t.add(n);return t}const L7=new at(Ce);function iR(){return L7}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,Yu.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new mp(ye.min(),i,iR(),Lr(),ve())}}class Yu{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Yu(r,n,ve(),ve(),ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(t,n,r,i){this.Tt=t,this.removedTargetIds=n,this.key=r,this.Et=i}}class sR{constructor(t,n){this.targetId=t,this.At=n}}class oR{constructor(t,n,r=Nt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class VE{constructor(){this.Rt=0,this.bt=UE(),this.Pt=Nt.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(t){t.approximateByteSize()>0&&(this.Vt=!0,this.Pt=t)}xt(){let t=ve(),n=ve(),r=ve();return this.bt.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:he()}}),new Yu(this.Pt,this.vt,t,n,r)}Nt(){this.Vt=!1,this.bt=UE()}kt(t,n){this.Vt=!0,this.bt=this.bt.insert(t,n)}Ot(t){this.Vt=!0,this.bt=this.bt.remove(t)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class F7{constructor(t){this.Bt=t,this.Lt=new Map,this.Ut=Lr(),this.qt=jE(),this.Kt=new at(Ce)}Gt(t){for(const n of t.Tt)t.Et&&t.Et.isFoundDocument()?this.Qt(n,t.Et):this.jt(n,t.key,t.Et);for(const n of t.removedTargetIds)this.jt(n,t.key,t.Et)}Wt(t){this.forEachTarget(t,n=>{const r=this.zt(n);switch(t.state){case 0:this.Ht(n)&&r.Ct(t.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(t.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(t.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(t.resumeToken));break;default:he()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Lt.forEach((r,i)=>{this.Ht(i)&&n(i)})}Yt(t){const n=t.targetId,r=t.At.count,i=this.Xt(n);if(i){const s=i.target;if(Gy(s))if(r===0){const o=new ie(s.path);this.jt(n,o,vt.newNoDocument(o,ye.min()))}else De(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(t){const n=new Map;this.Lt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&Gy(a.target)){const l=new ie(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,vt.newNoDocument(l,t))}s.Dt&&(n.set(o,s.xt()),s.Nt())}});let r=ve();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(t));const i=new mp(t,n,this.Kt,this.Ut,r);return this.Ut=Lr(),this.qt=jE(),this.Kt=new at(Ce),i}Qt(t,n){if(!this.Ht(t))return;const r=this.ee(t,n.key)?2:0;this.zt(t).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(t))}jt(t,n,r){if(!this.Ht(t))return;const i=this.zt(t);this.ee(t,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(t)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(t){this.Lt.delete(t)}Zt(t){const n=this.zt(t).xt();return this.Bt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Mt(t){this.zt(t).Mt()}zt(t){let n=this.Lt.get(t);return n||(n=new VE,this.Lt.set(t,n)),n}ne(t){let n=this.qt.get(t);return n||(n=new at(Ce),this.qt=this.qt.insert(t,n)),n}Ht(t){const n=this.Xt(t)!==null;return n||ne("WatchChangeAggregator","Detected inactive target",t),n}Xt(t){const n=this.Lt.get(t);return n&&n.St?null:this.Bt.se(t)}Jt(t){this.Lt.set(t,new VE),this.Bt.getRemoteKeysForTarget(t).forEach(n=>{this.jt(t,n,null)})}ee(t,n){return this.Bt.getRemoteKeysForTarget(t).has(n)}}function jE(){return new lt(ie.comparator)}function UE(){return new lt(ie.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V7=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),j7=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class U7{constructor(t,n){this.databaseId=t,this.gt=n}}function kf(e,t){return e.gt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function aR(e,t){return e.gt?t.toBase64():t.toUint8Array()}function z7(e,t){return kf(e,t.toTimestamp())}function Cr(e){return De(!!e),ye.fromTimestamp(function(t){const n=Oi(t);return new ot(n.seconds,n.nanos)}(e))}function nw(e,t){return function(n){return new Me(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function lR(e){const t=Me.fromString(e);return De(dR(t)),t}function Qy(e,t){return nw(e.databaseId,t.path)}function jm(e,t){const n=lR(t);if(n.get(1)!==e.databaseId.projectId)throw new J($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new J($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new ie(uR(n))}function Xy(e,t){return nw(e.databaseId,t)}function B7(e){const t=lR(e);return t.length===4?Me.emptyPath():uR(t)}function Jy(e){return new Me(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function uR(e){return De(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function zE(e,t,n){return{name:Qy(e,t),fields:n.value.mapValue.fields}}function H7(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:he()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(l,u){return l.gt?(De(u===void 0||typeof u=="string"),Nt.fromBase64String(u||"")):(De(u===void 0||u instanceof Uint8Array),Nt.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(l){const u=l.code===void 0?$.UNKNOWN:eR(l.code);return new J(u,l.message||"")}(o);n=new oR(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=jm(e,r.document.name),s=Cr(r.document.updateTime),o=new Yt({mapValue:{fields:r.document.fields}}),a=vt.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new fd(l,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=jm(e,r.document),s=r.readTime?Cr(r.readTime):ye.min(),o=vt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new fd([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=jm(e,r.document),s=r.removedTargetIds||[];n=new fd([],s,i,null)}else{if(!("filter"in t))return he();{t.filter;const r=t.filter;r.targetId;const i=r.count||0,s=new D7(i),o=r.targetId;n=new sR(o,s)}}return n}function W7(e,t){let n;if(t instanceof Ku)n={update:zE(e,t.key,t.value)};else if(t instanceof tw)n={delete:Qy(e,t.key)};else if(t instanceof ji)n={update:zE(e,t.key,t.data),updateMask:t9(t.fieldMask)};else{if(!(t instanceof P7))return he();n={verify:Qy(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Cf)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof lu)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof uu)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof If)return{fieldPath:s.field.canonicalString(),increment:o.yt};throw he()}(0,r))),t.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:z7(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:he()}(e,t.precondition)),n}function q7(e,t){return e&&e.length>0?(De(t!==void 0),e.map(n=>function(r,i){let s=r.updateTime?Cr(r.updateTime):Cr(i);return s.isEqual(ye.min())&&(s=Cr(i)),new k7(s,r.transformResults||[])}(n,t))):[]}function G7(e,t){return{documents:[Xy(e,t.path)]}}function K7(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=Xy(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Xy(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(c=>function(d){if(d.op==="=="){if(OE(d.value))return{unaryFilter:{field:Gs(d.field),op:"IS_NAN"}};if(AE(d.value))return{unaryFilter:{field:Gs(d.field),op:"IS_NULL"}}}else if(d.op==="!="){if(OE(d.value))return{unaryFilter:{field:Gs(d.field),op:"IS_NOT_NAN"}};if(AE(d.value))return{unaryFilter:{field:Gs(d.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gs(d.field),op:J7(d.op),value:d.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Gs(c.field),direction:X7(c.dir)}}(u))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.gt||dp(u)?u:{value:u}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),n}function Y7(e){let t=B7(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){De(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:t=t.child(c.collectionId)}let s=[];n.where&&(s=cR(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(d){return new yl(mo(d.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(c)));let a=null;n.limit&&(a=function(c){let d;return d=typeof c=="object"?c.value:c,dp(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(c){const d=!!c.before,f=c.values||[];return new Tf(f,d)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const d=!c.before,f=c.values||[];return new Tf(f,d)}(n.endAt)),S7(t,i,o,s,a,"F",l,u)}function Q7(e,t){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return he()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function cR(e){return e?e.unaryFilter!==void 0?[e9(e)]:e.fieldFilter!==void 0?[Z7(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>cR(t)).reduce((t,n)=>t.concat(n)):he():[]}function X7(e){return V7[e]}function J7(e){return j7[e]}function Gs(e){return{fieldPath:e.canonicalString()}}function mo(e){return Ot.fromServerFormat(e.fieldPath)}function Z7(e){return Ut.create(mo(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return he()}}(e.fieldFilter.op),e.fieldFilter.value)}function e9(e){switch(e.unaryFilter.op){case"IS_NAN":const t=mo(e.unaryFilter.field);return Ut.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=mo(e.unaryFilter.field);return Ut.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=mo(e.unaryFilter.field);return Ut.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=mo(e.unaryFilter.field);return Ut.create(i,"!=",{nullValue:"NULL_VALUE"});default:return he()}}function t9(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function dR(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n9{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&A7(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=vl(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=vl(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=rR();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=JD(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(ye.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),ve())}isEqual(t){return this.batchId===t.batchId&&Ho(this.mutations,t.mutations,(n,r)=>ME(n,r))&&Ho(this.baseMutations,t.baseMutations,(n,r)=>ME(n,r))}}class rw{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){De(t.mutations.length===r.length);let i=N7;const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new rw(t,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r9{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(t,n,r,i,s=ye.min(),o=ye.min(),a=Nt.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new ps(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new ps(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new ps(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i9{constructor(t){this.re=t}}function s9(e){const t=Y7({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Ky(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o9{constructor(){this.Ye=new a9}addToCollectionParentIndex(t,n){return this.Ye.add(n),U.resolve()}getCollectionParents(t,n){return U.resolve(this.Ye.getEntries(n))}addFieldIndex(t,n){return U.resolve()}deleteFieldIndex(t,n){return U.resolve()}getDocumentsMatchingTarget(t,n){return U.resolve(null)}getIndexType(t,n){return U.resolve(0)}getFieldIndexes(t,n){return U.resolve([])}getNextCollectionGroupToUpdate(t){return U.resolve(null)}getMinOffset(t,n){return U.resolve(Ai.min())}getMinOffsetFromCollectionGroup(t,n){return U.resolve(Ai.min())}updateCollectionGroup(t,n,r){return U.resolve()}updateIndexEntries(t,n){return U.resolve()}}class a9{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new at(Me.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new at(Me.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new Go(0)}static vn(){return new Go(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l9{constructor(){this.changes=new ca(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,vt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u9{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c9{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.getBaseDocument(t,n,r))).next(i=>(r!==null&&vl(r.mutation,i,kn.empty(),ot.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,ve()).next(()=>r))}getLocalViewOfDocuments(t,n,r=ve()){const i=ls();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=Ka();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=ls();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,ve()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=Lr();const o=wl(),a=wl();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof ji)?s=s.insert(u.key,u):c!==void 0&&(o.set(u.key,c.mutation.getFieldMask()),vl(c.mutation,u,c.mutation.getFieldMask(),ot.now()))}),this.recalculateAndSaveOverlays(t,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var d;return a.set(u,new u9(c,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(t,n){const r=wl();let i=new lt((o,a)=>o-a),s=ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||kn.empty();c=a.applyToLocalView(u,c),r.set(l,c);const d=(i.get(a.batchId)||ve()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,d=rR();c.forEach(f=>{if(!s.has(f)){const h=JD(n.get(f),r.get(f));h!==null&&d.set(f,h),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,d))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r){return function(i){return ie.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):BD(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r):this.getDocumentsMatchingCollectionQuery(t,n,r)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):U.resolve(ls());let a=-1,l=s;return o.next(u=>U.forEach(u,(c,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(c)?U.resolve():this.getBaseDocument(t,c,d).next(f=>{l=l.insert(c,f)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,l,u,ve())).next(c=>({batchId:a,changes:nR(c)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new ie(n)).next(r=>{let i=Ka();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r){const i=n.collectionGroup;let s=Ka();return this.indexManager.getCollectionParents(t,i).next(o=>U.forEach(o,a=>{const l=function(u,c){return new Gu(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,l,r).next(u=>{u.forEach((c,d)=>{s=s.insert(c,d)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(t,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,vt.newInvalidDocument(u)))});let o=Ka();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&vl(u.mutation,l,kn.empty(),ot.now()),ew(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(t,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(t,n):U.resolve(vt.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d9{constructor(t){this.It=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,n){return U.resolve(this.Zn.get(n))}saveBundleMetadata(t,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Cr(r.createTime)}),U.resolve()}getNamedQuery(t,n){return U.resolve(this.ts.get(n))}saveNamedQuery(t,n){return this.ts.set(n.name,function(r){return{name:r.name,query:s9(r.bundledQuery),readTime:Cr(r.readTime)}}(n)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f9{constructor(){this.overlays=new lt(ie.comparator),this.es=new Map}getOverlay(t,n){return U.resolve(this.overlays.get(n))}getOverlays(t,n){const r=ls();return U.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.ue(t,n,s)}),U.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),U.resolve()}getOverlaysForCollection(t,n,r){const i=ls(),s=n.length+1,o=new ie(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return U.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new lt((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=ls(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=ls(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return U.resolve(a)}ue(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new r9(n,r));let s=this.es.get(n);s===void 0&&(s=ve(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(){this.ns=new at(ut.ss),this.rs=new at(ut.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,n){const r=new ut(t,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.cs(new ut(t,n))}hs(t,n){t.forEach(r=>this.removeReference(r,n))}ls(t){const n=new ie(new Me([])),r=new ut(n,t),i=new ut(n,t+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(t=>this.cs(t))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const n=new ie(new Me([])),r=new ut(n,t),i=new ut(n,t+1);let s=ve();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new ut(t,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class ut{constructor(t,n){this.key=t,this._s=n}static ss(t,n){return ie.comparator(t.key,n.key)||Ce(t._s,n._s)}static os(t,n){return Ce(t._s,n._s)||ie.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h9{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new at(ut.ss)}checkEmpty(t){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new n9(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new ut(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return U.resolve(o)}lookupMutationBatch(t,n){return U.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return U.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(t){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new ut(n,0),i=new ut(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),U.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new at(Ce);return n.forEach(i=>{const s=new ut(i,0),o=new ut(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),U.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;ie.isDocumentKey(s)||(s=s.child(""));const o=new ut(new ie(s),0);let a=new at(Ce);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},o),U.resolve(this.Is(a))}Is(t){const n=[];return t.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){De(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return U.forEach(n.mutations,i=>{const s=new ut(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.gs=r})}An(t){}containsKey(t,n){const r=new ut(n,0),i=this.gs.firstAfterOrEqual(r);return U.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,U.resolve()}Ts(t,n){return this.ps(t)}ps(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ys(t){const n=this.ps(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p9{constructor(t){this.Es=t,this.docs=new lt(ie.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(n))}getEntries(t,n){let r=Lr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():vt.newInvalidDocument(i))}),U.resolve(r)}getAllFromCollection(t,n,r){let i=Lr();const s=new ie(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||i7(r7(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(t,n,r,i){he()}As(t,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new m9(this)}getSize(t){return U.resolve(this.size)}}class m9 extends l9{constructor(t){super(),this.Yn=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(t,i)):this.Yn.removeEntry(r)}),U.waitFor(n)}getFromCache(t,n){return this.Yn.getEntry(t,n)}getAllFromCache(t,n){return this.Yn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g9{constructor(t){this.persistence=t,this.Rs=new ca(n=>X1(n),J1),this.lastRemoteSnapshotVersion=ye.min(),this.highestTargetId=0,this.bs=0,this.Ps=new iw,this.targetCount=0,this.vs=Go.Pn()}forEachTarget(t,n){return this.Rs.forEach((r,i)=>n(i)),U.resolve()}getLastRemoteSnapshotVersion(t){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return U.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),U.resolve()}Dn(t){this.Rs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.vs=new Go(n),this.highestTargetId=n),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,n){return this.Dn(n),this.targetCount+=1,U.resolve()}updateTargetData(t,n){return this.Dn(n),U.resolve()}removeTargetData(t,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),U.waitFor(s).next(()=>i)}getTargetCount(t){return U.resolve(this.targetCount)}getTargetData(t,n){const r=this.Rs.get(n)||null;return U.resolve(r)}addMatchingKeys(t,n,r){return this.Ps.us(n,r),U.resolve()}removeMatchingKeys(t,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),U.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Ps.ls(n),U.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Ps.ds(n);return U.resolve(r)}containsKey(t,n){return U.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y9{constructor(t,n){this.Vs={},this.overlays={},this.Ss=new Y1(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new g9(this),this.indexManager=new o9,this.remoteDocumentCache=function(r){return new p9(r)}(r=>this.referenceDelegate.xs(r)),this.It=new i9(n),this.Ns=new d9(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new f9,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Vs[t.toKey()];return r||(r=new h9(n,this.referenceDelegate),this.Vs[t.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,n,r){ne("MemoryPersistence","Starting transaction:",t);const i=new v9(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(t,n){return U.or(Object.values(this.Vs).map(r=>()=>r.containsKey(t,n)))}}class v9 extends o7{constructor(t){super(),this.currentSequenceNumber=t}}class sw{constructor(t){this.persistence=t,this.Fs=new iw,this.$s=null}static Bs(t){return new sw(t)}get Ls(){if(this.$s)return this.$s;throw he()}addReference(t,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),U.resolve()}removeReference(t,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),U.resolve()}markPotentiallyOrphaned(t,n){return this.Ls.add(n.toString()),U.resolve()}removeTarget(t,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}ks(){this.$s=new Set}Os(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Ls,r=>{const i=ie.fromPath(r);return this.Us(t,i).next(s=>{s||n.removeEntry(i,ye.min())})}).next(()=>(this.$s=null,n.apply(t)))}updateLimboDocument(t,n){return this.Us(t,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(t){return 0}Us(t,n){return U.or([()=>U.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ms(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.Si=r,this.Di=i}static Ci(t,n){let r=ve(),i=ve();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ow(t,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w9{constructor(){this.xi=!1}initialize(t,n){this.Ni=t,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(t,n,r,i){return this.ki(t,n).next(s=>s||this.Oi(t,n,i,r)).next(s=>s||this.Mi(t,n))}ki(t,n){if($E(n))return U.resolve(null);let r=Mr(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ky(n,null,"F"),r=Mr(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=ve(...s);return this.Ni.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,o,l.readTime)?this.ki(t,Ky(n,null,"F")):this.Bi(t,u,n,l)}))})))}Oi(t,n,r,i){return $E(n)||i.isEqual(ye.min())?this.Mi(t,n):this.Ni.getDocuments(t,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Mi(t,n):(bE()<=be.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Yy(n)),this.Bi(t,o,n,n7(i,-1)))})}Fi(t,n){let r=new at(WD(t));return n.forEach((i,s)=>{ew(t,s)&&(r=r.add(s))}),r}$i(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(t,n){return bE()<=be.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",Yy(n)),this.Ni.getDocumentsMatchingQuery(t,n,Ai.min())}Bi(t,n,r,i){return this.Ni.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _9{constructor(t,n,r,i){this.persistence=t,this.Li=n,this.It=i,this.Ui=new lt(Ce),this.qi=new ca(s=>X1(s),J1),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(r)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new c9(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ui))}}function S9(e,t,n,r){return new _9(e,t,n,r)}async function fR(e,t){const n=pe(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ve();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function x9(e,t){const n=pe(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,d=c.keys();let f=U.resolve();return d.forEach(h=>{f=f.next(()=>u.getEntry(a,h)).next(p=>{const y=l.docVersions.get(h);De(y!==null),p.version.compareTo(y)<0&&(c.applyToRemoteDocument(p,l),p.isValidDocument()&&(p.setReadTime(l.commitVersion),u.addEntry(p)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=ve();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function hR(e){const t=pe(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Cs.getLastRemoteSnapshotVersion(n))}function E9(e,t){const n=pe(e),r=t.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];t.targetChanges.forEach((c,d)=>{const f=i.get(d);if(!f)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,d).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,d)));let h=f.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.has(d)?h=h.withResumeToken(Nt.EMPTY_BYTE_STRING,ye.min()).withLastLimboFreeSnapshotVersion(ye.min()):c.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(c.resumeToken,r)),i=i.insert(d,h),function(p,y,w){return p.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(f,h,c)&&a.push(n.Cs.updateTargetData(s,h))});let l=Lr(),u=ve();if(t.documentUpdates.forEach(c=>{t.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(b9(s,o,t.documentUpdates).next(c=>{l=c.Wi,u=c.zi})),!r.isEqual(ye.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(d=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return U.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ui=i,s))}function b9(e,t,n){let r=ve(),i=ve();return n.forEach(s=>r=r.add(s)),t.getEntries(e,r).next(s=>{let o=Lr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ye.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):ne("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function T9(e,t){const n=pe(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function C9(e,t){const n=pe(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,t).next(s=>s?(i=s,U.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new ps(t,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(t,r.targetId)),r})}async function Zy(e,t,n){const r=pe(e),i=r.Ui.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!qu(o))throw o;ne("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.Ui=r.Ui.remove(t),r.qi.delete(i.target)}function BE(e,t,n){const r=pe(e);let i=ye.min(),s=ve();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=pe(a),d=c.qi.get(u);return d!==void 0?U.resolve(c.Ui.get(d)):c.Cs.getTargetData(l,u)}(r,o,Mr(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Li.getDocumentsMatchingQuery(o,t,n?i:ye.min(),n?s:ve())).next(a=>(I9(r,x7(t),a),{documents:a,Hi:s})))}function I9(e,t,n){let r=e.Ki.get(t)||ye.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),e.Ki.set(t,r)}class HE{constructor(){this.activeTargetIds=iR()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class k9{constructor(){this.Lr=new HE,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.Lr.er(t),this.Ur[t]||"not-current"}updateQueryState(t,n,r){this.Ur[t]=n}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.Ur[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new HE,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A9{qr(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){ne("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){ne("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O9={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P9{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D9 extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.oo=n+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,n,r,i,s){const o=this.ho(t,n);ne("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(t,o,a,r).then(l=>(ne("RestConnection","Received: ",l),l),l=>{throw Hy("RestConnection",`${t} failed with error: `,l,"url: ",o,"request:",r),l})}_o(t,n,r,i,s,o){return this.ao(t,n,r,i,s)}lo(t,n,r){t["X-Goog-Api-Client"]="gl-js/ fire/"+ua,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>t[s]=i),r&&r.headers.forEach((i,s)=>t[s]=i)}ho(t,n){const r=O9[t];return`${this.oo}/v1/${n}:${r}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,n,r,i){return new Promise((s,o)=>{const a=new qH;a.setWithCredentials(!0),a.listenOnce(BH.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Vm.NO_ERROR:const u=a.getResponseJson();ne("Connection","XHR received:",JSON.stringify(u)),s(u);break;case Vm.TIMEOUT:ne("Connection",'RPC "'+t+'" timed out'),o(new J($.DEADLINE_EXCEEDED,"Request time out"));break;case Vm.HTTP_ERROR:const c=a.getStatus();if(ne("Connection",'RPC "'+t+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const d=a.getResponseJson().error;if(d&&d.status&&d.message){const f=function(h){const p=h.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(p)>=0?p:$.UNKNOWN}(d.status);o(new J(f,d.message))}else o(new J($.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new J($.UNAVAILABLE,"Connection failed."));break;default:he()}}finally{ne("Connection",'RPC "'+t+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}wo(t,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=UH(),o=zH(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new WH({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const l=i.join("");ne("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,d=!1;const f=new P9({Hr:p=>{d?ne("Connection","Not sending because WebChannel is closed:",p):(c||(ne("Connection","Opening WebChannel transport."),u.open(),c=!0),ne("Connection","WebChannel sending:",p),u.send(p))},Jr:()=>u.close()}),h=(p,y,w)=>{p.listen(y,v=>{try{w(v)}catch(m){setTimeout(()=>{throw m},0)}})};return h(u,Mc.EventType.OPEN,()=>{d||ne("Connection","WebChannel transport opened.")}),h(u,Mc.EventType.CLOSE,()=>{d||(d=!0,ne("Connection","WebChannel transport closed"),f.io())}),h(u,Mc.EventType.ERROR,p=>{d||(d=!0,Hy("Connection","WebChannel transport errored:",p),f.io(new J($.UNAVAILABLE,"The operation could not be completed")))}),h(u,Mc.EventType.MESSAGE,p=>{var y;if(!d){const w=p.data[0];De(!!w);const v=w,m=v.error||((y=v[0])===null||y===void 0?void 0:y.error);if(m){ne("Connection","WebChannel received error:",m);const g=m.status;let _=function(I){const C=Ze[I];if(C!==void 0)return eR(C)}(g),E=m.message;_===void 0&&(_=$.INTERNAL,E="Unknown error status: "+g+" with message "+m.message),d=!0,f.io(new J(_,E)),u.close()}else ne("Connection","WebChannel received:",w),f.ro(w)}}),h(o,HH.STAT_EVENT,p=>{p.stat===xE.PROXY?ne("Connection","Detected buffering proxy"):p.stat===xE.NOPROXY&&ne("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}function Um(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(e){return new U7(e,!0)}class pR{constructor(t,n,r=1e3,i=1.5,s=6e4){this.Hs=t,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&ne("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),t())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(t,n,r,i,s,o,a,l){this.Hs=t,this.vo=r,this.Vo=i,this.So=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new pR(t,n)}ko(){return this.state===1||this.state===5||this.Oo()}Oo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Oo()&&this.Co===null&&(this.Co=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.Bo()))}Lo(t){this.Uo(),this.stream.send(t)}async Bo(){if(this.Oo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(t,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,t!==4?this.No.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(Nr(n.toString()),Nr("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(n)}Ko(){}auth(){this.state=1;const t=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Do===n&&this.Qo(r,i)},r=>{t(()=>{const i=new J($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.jo(i)})})}Qo(t,n){const r=this.Go(this.Do);this.stream=this.Wo(t,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.xo=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.Oo()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.jo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Mo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(t){return ne("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Go(t){return n=>{this.Hs.enqueueAndForget(()=>this.Do===t?n():(ne("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class R9 extends mR{constructor(t,n,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.It=s}Wo(t,n){return this.So.wo("Listen",t,n)}onMessage(t){this.No.reset();const n=H7(this.It,t),r=function(i){if(!("targetChange"in i))return ye.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?ye.min():s.readTime?Cr(s.readTime):ye.min()}(t);return this.listener.zo(n,r)}Ho(t){const n={};n.database=Jy(this.It),n.addTarget=function(i,s){let o;const a=s.target;return o=Gy(a)?{documents:G7(i,a)}:{query:K7(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=aR(i,s.resumeToken):s.snapshotVersion.compareTo(ye.min())>0&&(o.readTime=kf(i,s.snapshotVersion.toTimestamp())),o}(this.It,t);const r=Q7(this.It,t);r&&(n.labels=r),this.Lo(n)}Jo(t){const n={};n.database=Jy(this.It),n.removeTarget=t,this.Lo(n)}}class $9 extends mR{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.It=s,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(t,n){return this.So.wo("Write",t,n)}onMessage(t){if(De(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Yo){this.No.reset();const n=q7(t.writeResults,t.commitTime),r=Cr(t.commitTime);return this.listener.tu(r,n)}return De(!t.writeResults||t.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const t={};t.database=Jy(this.It),this.Lo(t)}Zo(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>W7(this.It,r))};this.Lo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N9 extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.So=r,this.It=i,this.su=!1}iu(){if(this.su)throw new J($.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,n,r){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.So.ao(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new J($.UNKNOWN,i.toString())})}_o(t,n,r,i){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.So._o(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new J($.UNKNOWN,s.toString())})}terminate(){this.su=!0}}class M9{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}cu(){this.ru===0&&(this.au("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.au("Offline"),Promise.resolve())))}lu(t){this.state==="Online"?this.au("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.au("Offline")))}set(t){this.fu(),this.ru=0,t==="Online"&&(this.uu=!1),this.au(t)}au(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}hu(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(Nr(n),this.uu=!1):ne("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L9{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=s,this.gu.qr(o=>{r.enqueueAndForget(async()=>{Us(this)&&(ne("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=pe(a);l.wu.add(4),await Qu(l),l.yu.set("Unknown"),l.wu.delete(4),await yp(l)}(this))})}),this.yu=new M9(r,i)}}async function yp(e){if(Us(e))for(const t of e.mu)await t(!0)}async function Qu(e){for(const t of e.mu)await t(!1)}function gR(e,t){const n=pe(e);n._u.has(t.targetId)||(n._u.set(t.targetId,t),uw(n)?lw(n):da(n).Oo()&&aw(n,t))}function yR(e,t){const n=pe(e),r=da(n);n._u.delete(t),r.Oo()&&vR(n,t),n._u.size===0&&(r.Oo()?r.$o():Us(n)&&n.yu.set("Unknown"))}function aw(e,t){e.pu.Mt(t.targetId),da(e).Ho(t)}function vR(e,t){e.pu.Mt(t),da(e).Jo(t)}function lw(e){e.pu=new F7({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),se:t=>e._u.get(t)||null}),da(e).start(),e.yu.cu()}function uw(e){return Us(e)&&!da(e).ko()&&e._u.size>0}function Us(e){return pe(e).wu.size===0}function wR(e){e.pu=void 0}async function F9(e){e._u.forEach((t,n)=>{aw(e,t)})}async function V9(e,t){wR(e),uw(e)?(e.yu.lu(t),lw(e)):e.yu.set("Unknown")}async function j9(e,t,n){if(e.yu.set("Online"),t instanceof oR&&t.state===2&&t.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r._u.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r._u.delete(o),r.pu.removeTarget(o))}(e,t)}catch(r){ne("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Af(e,r)}else if(t instanceof fd?e.pu.Gt(t):t instanceof sR?e.pu.Yt(t):e.pu.Wt(t),!n.isEqual(ye.min()))try{const r=await hR(e.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.pu.te(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i._u.get(l);u&&i._u.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i._u.get(a);if(!l)return;i._u.set(a,l.withResumeToken(Nt.EMPTY_BYTE_STRING,l.snapshotVersion)),vR(i,a);const u=new ps(l.target,a,1,l.sequenceNumber);aw(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(r){ne("RemoteStore","Failed to raise snapshot:",r),await Af(e,r)}}async function Af(e,t,n){if(!qu(t))throw t;e.wu.add(1),await Qu(e),e.yu.set("Offline"),n||(n=()=>hR(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{ne("RemoteStore","Retrying IndexedDB access"),await n(),e.wu.delete(1),await yp(e)})}function _R(e,t){return t().catch(n=>Af(e,n,t))}async function vp(e){const t=pe(e),n=Pi(t);let r=t.du.length>0?t.du[t.du.length-1].batchId:-1;for(;U9(t);)try{const i=await T9(t.localStore,r);if(i===null){t.du.length===0&&n.$o();break}r=i.batchId,z9(t,i)}catch(i){await Af(t,i)}SR(t)&&xR(t)}function U9(e){return Us(e)&&e.du.length<10}function z9(e,t){e.du.push(t);const n=Pi(e);n.Oo()&&n.Xo&&n.Zo(t.mutations)}function SR(e){return Us(e)&&!Pi(e).ko()&&e.du.length>0}function xR(e){Pi(e).start()}async function B9(e){Pi(e).nu()}async function H9(e){const t=Pi(e);for(const n of e.du)t.Zo(n.mutations)}async function W9(e,t,n){const r=e.du.shift(),i=rw.from(r,t,n);await _R(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await vp(e)}async function q9(e,t){t&&Pi(e).Xo&&await async function(n,r){if(i=r.code,R7(i)&&i!==$.ABORTED){const s=n.du.shift();Pi(n).Fo(),await _R(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await vp(n)}var i}(e,t),SR(e)&&xR(e)}async function qE(e,t){const n=pe(e);n.asyncQueue.verifyOperationInProgress(),ne("RemoteStore","RemoteStore received new credentials");const r=Us(n);n.wu.add(3),await Qu(n),r&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.wu.delete(3),await yp(n)}async function G9(e,t){const n=pe(e);t?(n.wu.delete(2),await yp(n)):t||(n.wu.add(2),await Qu(n),n.yu.set("Unknown"))}function da(e){return e.Iu||(e.Iu=function(t,n,r){const i=pe(t);return i.iu(),new R9(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,r)}(e.datastore,e.asyncQueue,{Yr:F9.bind(null,e),Zr:V9.bind(null,e),zo:j9.bind(null,e)}),e.mu.push(async t=>{t?(e.Iu.Fo(),uw(e)?lw(e):e.yu.set("Unknown")):(await e.Iu.stop(),wR(e))})),e.Iu}function Pi(e){return e.Tu||(e.Tu=function(t,n,r){const i=pe(t);return i.iu(),new $9(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,r)}(e.datastore,e.asyncQueue,{Yr:B9.bind(null,e),Zr:q9.bind(null,e),eu:H9.bind(null,e),tu:W9.bind(null,e)}),e.mu.push(async t=>{t?(e.Tu.Fo(),await vp(e)):(await e.Tu.stop(),e.du.length>0&&(ne("RemoteStore",`Stopping write stream with ${e.du.length} pending writes`),e.du=[]))})),e.Tu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Tr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new cw(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J($.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dw(e,t){if(Nr("AsyncQueue",`${t}: ${e}`),qu(e))return new J($.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(t){this.comparator=t?(n,r)=>t(n,r)||ie.comparator(n.key,r.key):(n,r)=>ie.comparator(n.key,r.key),this.keyedMap=Ka(),this.sortedSet=new lt(this.comparator)}static emptySet(t){return new Po(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Po)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new Po;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(){this.Eu=new lt(ie.comparator)}track(t){const n=t.doc.key,r=this.Eu.get(n);r?t.type!==0&&r.type===3?this.Eu=this.Eu.insert(n,t):t.type===3&&r.type!==1?this.Eu=this.Eu.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Eu=this.Eu.remove(n):t.type===1&&r.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:t.doc}):he():this.Eu=this.Eu.insert(n,t)}Au(){const t=[];return this.Eu.inorderTraversal((n,r)=>{t.push(r)}),t}}class Ko{constructor(t,n,r,i,s,o,a,l,u){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(t,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ko(t,n,Po.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&fp(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K9{constructor(){this.Ru=void 0,this.listeners=[]}}class Y9{constructor(){this.queries=new ca(t=>HD(t),fp),this.onlineState="Unknown",this.bu=new Set}}async function ER(e,t){const n=pe(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new K9),i)try{s.Ru=await n.onListen(r)}catch(o){const a=dw(o,`Initialization of query '${Yy(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,s),s.listeners.push(t),t.Pu(n.onlineState),s.Ru&&t.vu(s.Ru)&&fw(n)}async function bR(e,t){const n=pe(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Q9(e,t){const n=pe(e);let r=!1;for(const i of t){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.vu(i)&&(r=!0);o.Ru=i}}r&&fw(n)}function X9(e,t,n){const r=pe(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function fw(e){e.bu.forEach(t=>{t.next()})}class TR{constructor(t,n,r){this.query=t,this.Vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=r||{}}vu(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Ko(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Su?this.Cu(t)&&(this.Vu.next(t),n=!0):this.xu(t,this.onlineState)&&(this.Nu(t),n=!0),this.Du=t,n}onError(t){this.Vu.error(t)}Pu(t){this.onlineState=t;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,t)&&(this.Nu(this.Du),n=!0),n}xu(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.ku||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Cu(t){if(t.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(t){t=Ko.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Su=!0,this.Vu.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(t){this.key=t}}class IR{constructor(t){this.key=t}}class J9{constructor(t,n){this.query=t,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=ve(),this.mutatedKeys=ve(),this.Gu=WD(t),this.Qu=new Po(this.Gu)}get ju(){return this.Uu}Wu(t,n){const r=n?n.zu:new GE,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((c,d)=>{const f=i.get(c),h=ew(this.query,d)?d:null,p=!!f&&this.mutatedKeys.has(f.key),y=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let w=!1;f&&h?f.data.isEqual(h.data)?p!==y&&(r.track({type:3,doc:h}),w=!0):this.Hu(f,h)||(r.track({type:2,doc:h}),w=!0,(l&&this.Gu(h,l)>0||u&&this.Gu(h,u)<0)&&(a=!0)):!f&&h?(r.track({type:0,doc:h}),w=!0):f&&!h&&(r.track({type:1,doc:f}),w=!0,(l||u)&&(a=!0)),w&&(h?(o=o.add(h),s=y?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Qu:o,zu:r,$i:a,mutatedKeys:s}}Hu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){const i=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const s=t.zu.Au();s.sort((u,c)=>function(d,f){const h=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he()}};return h(d)-h(f)}(u.type,c.type)||this.Gu(u.doc,c.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,s.length!==0||l?{snapshot:new Ko(this.query,t.Qu,i,s,t.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}Pu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new GE,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.Uu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=ve(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return t.forEach(r=>{this.Ku.has(r)||n.push(new IR(r))}),this.Ku.forEach(r=>{t.has(r)||n.push(new CR(r))}),n}tc(t){this.Uu=t.Hi,this.Ku=ve();const n=this.Wu(t.documents);return this.applyChanges(n,!0)}ec(){return Ko.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class Z9{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class eW{constructor(t){this.key=t,this.nc=!1}}class tW{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new ca(a=>HD(a),fp),this.rc=new Map,this.oc=new Set,this.uc=new lt(ie.comparator),this.cc=new Map,this.ac=new iw,this.hc={},this.lc=new Map,this.fc=Go.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function nW(e,t){const n=fW(e);let r,i;const s=n.ic.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const o=await C9(n.localStore,Mr(t));n.isPrimaryClient&&gR(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await rW(n,t,r,a==="current",o.resumeToken)}return i}async function rW(e,t,n,r,i){e._c=(d,f,h)=>async function(p,y,w,v){let m=y.view.Wu(w);m.$i&&(m=await BE(p.localStore,y.query,!1).then(({documents:E})=>y.view.Wu(E,m)));const g=v&&v.targetChanges.get(y.targetId),_=y.view.applyChanges(m,p.isPrimaryClient,g);return YE(p,y.targetId,_.Xu),_.snapshot}(e,d,f,h);const s=await BE(e.localStore,t,!0),o=new J9(t,s.Hi),a=o.Wu(s.documents),l=Yu.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),u=o.applyChanges(a,e.isPrimaryClient,l);YE(e,n,u.Xu);const c=new Z9(t,n,o);return e.ic.set(t,c),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),u.snapshot}async function iW(e,t){const n=pe(e),r=n.ic.get(t),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(s=>!fp(s,t))),void n.ic.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Zy(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),yR(n.remoteStore,r.targetId),ev(n,r.targetId)}).catch(Wu)):(ev(n,r.targetId),await Zy(n.localStore,r.targetId,!0))}async function sW(e,t,n){const r=hW(e);try{const i=await function(s,o){const a=pe(s),l=ot.now(),u=o.reduce((f,h)=>f.add(h.key),ve());let c,d;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let h=Lr(),p=ve();return a.Gi.getEntries(f,u).next(y=>{h=y,h.forEach((w,v)=>{v.isValidDocument()||(p=p.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,h)).next(y=>{c=y;const w=[];for(const v of o){const m=O7(v,c.get(v.key).overlayedDocument);m!=null&&w.push(new ji(v.key,m,VD(m.value.mapValue),Gn.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,w,o)}).next(y=>{d=y;const w=y.applyToLocalDocumentSet(c,p);return a.documentOverlayCache.saveOverlays(f,y.batchId,w)})}).then(()=>({batchId:d.batchId,changes:nR(c)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.hc[s.currentUser.toKey()];l||(l=new lt(Ce)),l=l.insert(o,a),s.hc[s.currentUser.toKey()]=l}(r,i.batchId,n),await Xu(r,i.changes),await vp(r.remoteStore)}catch(i){const s=dw(i,"Failed to persist write");n.reject(s)}}async function kR(e,t){const n=pe(e);try{const r=await E9(n.localStore,t);t.targetChanges.forEach((i,s)=>{const o=n.cc.get(s);o&&(De(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?De(o.nc):i.removedDocuments.size>0&&(De(o.nc),o.nc=!1))}),await Xu(n,r,t)}catch(r){await Wu(r)}}function KE(e,t,n){const r=pe(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((s,o)=>{const a=o.view.Pu(t);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=pe(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const d of c.listeners)d.Pu(o)&&(l=!0)}),l&&fw(a)}(r.eventManager,t),i.length&&r.sc.zo(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function oW(e,t,n){const r=pe(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.cc.get(t),s=i&&i.key;if(s){let o=new lt(ie.comparator);o=o.insert(s,vt.newNoDocument(s,ye.min()));const a=ve().add(s),l=new mp(ye.min(),new Map,new at(Ce),o,a);await kR(r,l),r.uc=r.uc.remove(s),r.cc.delete(t),hw(r)}else await Zy(r.localStore,t,!1).then(()=>ev(r,t,n)).catch(Wu)}async function aW(e,t){const n=pe(e),r=t.batch.batchId;try{const i=await x9(n.localStore,t);OR(n,r,null),AR(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Xu(n,i)}catch(i){await Wu(i)}}async function lW(e,t,n){const r=pe(e);try{const i=await function(s,o){const a=pe(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(De(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,t);OR(r,t,n),AR(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Xu(r,i)}catch(i){await Wu(i)}}function AR(e,t){(e.lc.get(t)||[]).forEach(n=>{n.resolve()}),e.lc.delete(t)}function OR(e,t,n){const r=pe(e);let i=r.hc[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.hc[r.currentUser.toKey()]=i}}function ev(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.rc.get(t))e.ic.delete(r),n&&e.sc.wc(r,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach(r=>{e.ac.containsKey(r)||PR(e,r)})}function PR(e,t){e.oc.delete(t.path.canonicalString());const n=e.uc.get(t);n!==null&&(yR(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),hw(e))}function YE(e,t,n){for(const r of n)r instanceof CR?(e.ac.addReference(r.key,t),uW(e,r)):r instanceof IR?(ne("SyncEngine","Document no longer in limbo: "+r.key),e.ac.removeReference(r.key,t),e.ac.containsKey(r.key)||PR(e,r.key)):he()}function uW(e,t){const n=t.key,r=n.path.canonicalString();e.uc.get(n)||e.oc.has(r)||(ne("SyncEngine","New document in limbo: "+n),e.oc.add(r),hw(e))}function hw(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const t=e.oc.values().next().value;e.oc.delete(t);const n=new ie(Me.fromString(t)),r=e.fc.next();e.cc.set(r,new eW(n)),e.uc=e.uc.insert(n,r),gR(e.remoteStore,new ps(Mr(Z1(n.path)),r,2,Y1.at))}}async function Xu(e,t,n){const r=pe(e),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,l)=>{o.push(r._c(l,t,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=ow.Ci(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.sc.zo(i),await async function(a,l){const u=pe(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>U.forEach(l,d=>U.forEach(d.Si,f=>u.persistence.referenceDelegate.addReference(c,d.targetId,f)).next(()=>U.forEach(d.Di,f=>u.persistence.referenceDelegate.removeReference(c,d.targetId,f)))))}catch(c){if(!qu(c))throw c;ne("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const d=c.targetId;if(!c.fromCache){const f=u.Ui.get(d),h=f.snapshotVersion,p=f.withLastLimboFreeSnapshotVersion(h);u.Ui=u.Ui.insert(d,p)}}}(r.localStore,s))}async function cW(e,t){const n=pe(e);if(!n.currentUser.isEqual(t)){ne("SyncEngine","User change. New user:",t.toKey());const r=await fR(n.localStore,t);n.currentUser=t,function(i,s){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new J($.CANCELLED,s))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Xu(n,r.ji)}}function dW(e,t){const n=pe(e),r=n.cc.get(t);if(r&&r.nc)return ve().add(r.key);{let i=ve();const s=n.rc.get(t);if(!s)return i;for(const o of s){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function fW(e){const t=pe(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=kR.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=dW.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=oW.bind(null,t),t.sc.zo=Q9.bind(null,t.eventManager),t.sc.wc=X9.bind(null,t.eventManager),t}function hW(e){const t=pe(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=aW.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=lW.bind(null,t),t}class pW{constructor(){this.synchronizeTabs=!1}async initialize(t){this.It=gp(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,n){return null}Ec(t,n){return null}Ic(t){return S9(this.persistence,new w9,t.initialUser,this.It)}yc(t){return new y9(sw.Bs,this.It)}gc(t){return new k9}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class mW{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>KE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=cW.bind(null,this.syncEngine),await G9(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Y9}createDatastore(t){const n=gp(t.databaseInfo.databaseId),r=(i=t.databaseInfo,new D9(i));var i;return function(s,o,a,l){return new N9(s,o,a,l)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return n=this.localStore,r=this.datastore,i=t.asyncQueue,s=a=>KE(this.syncEngine,a,0),o=WE.C()?new WE:new A9,new L9(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(t,n){return function(r,i,s,o,a,l,u){const c=new tW(r,i,s,o,a,l);return u&&(c.dc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=pe(t);ne("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await Qu(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DR(e,t,n){if(!n)throw new J($.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function gW(e,t,n,r){if(t===!0&&r===!0)throw new J($.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function QE(e){if(!ie.isDocumentKey(e))throw new J($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function XE(e){if(ie.isDocumentKey(e))throw new J($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function wp(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":he()}function hr(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new J($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=wp(e);throw new J($.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE=new Map;class ZE{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new J($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new J($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,gW("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ZE({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new J($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new J($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ZE(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new GH;switch(n.type){case"gapi":const r=n.client;return new XH(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new J($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=JE.get(t);n&&(ne("ComponentProvider","Removing Datastore"),JE.delete(t),n.terminate())}(this),Promise.resolve()}}function yW(e,t,n,r={}){var i;const s=(e=hr(e,_p))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==t&&Hy("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=kt.MOCK_USER;else{o=u4(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new J($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new kt(l)}e._authCredentials=new KH(new $D(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _i(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Bt(this.firestore,t,this._key)}}class Ju{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Ju(this.firestore,t,this._query)}}class _i extends Ju{constructor(t,n,r){super(t,n,Z1(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Bt(this.firestore,null,new ie(t))}withConverter(t){return new _i(this.firestore,t,this._path)}}function Yo(e,t,...n){if(e=Je(e),DR("collection","path",t),e instanceof _p){const r=Me.fromString(t,...n);return XE(r),new _i(e,null,r)}{if(!(e instanceof Bt||e instanceof _i))throw new J($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Me.fromString(t,...n));return XE(r),new _i(e.firestore,null,r)}}function zs(e,t,...n){if(e=Je(e),arguments.length===1&&(t=ND.R()),DR("doc","path",t),e instanceof _p){const r=Me.fromString(t,...n);return QE(r),new Bt(e,null,new ie(r))}{if(!(e instanceof Bt||e instanceof _i))throw new J($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Me.fromString(t,...n));return QE(r),new Bt(e.firestore,e instanceof _i?e.converter:null,new ie(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):Nr("Uncaught Error in snapshot listener:",t)}bc(){this.muted=!0}Rc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vW{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=kt.UNAUTHENTICATED,this.clientId=ND.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{ne("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(ne("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new J($.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Tr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=dw(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function wW(e,t){e.asyncQueue.verifyOperationInProgress(),ne("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await fR(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function _W(e,t){e.asyncQueue.verifyOperationInProgress();const n=await SW(e);ne("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>qE(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>qE(t.remoteStore,s)),e.onlineComponents=t}async function SW(e){return e.offlineComponents||(ne("FirestoreClient","Using default OfflineComponentProvider"),await wW(e,new pW)),e.offlineComponents}async function $R(e){return e.onlineComponents||(ne("FirestoreClient","Using default OnlineComponentProvider"),await _W(e,new mW)),e.onlineComponents}function xW(e){return $R(e).then(t=>t.syncEngine)}async function NR(e){const t=await $R(e),n=t.eventManager;return n.onListen=nW.bind(null,t.syncEngine),n.onUnlisten=iW.bind(null,t.syncEngine),n}function EW(e,t,n={}){const r=new Tr;return e.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new RR({next:d=>{s.enqueueAndForget(()=>bR(i,c));const f=d.docs.has(o);!f&&d.fromCache?l.reject(new J($.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&a&&a.source==="server"?l.reject(new J($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),c=new TR(Z1(o.path),u,{includeMetadataChanges:!0,ku:!0});return ER(i,c)}(await NR(e),e.asyncQueue,t,n,r)),r.promise}function bW(e,t,n={}){const r=new Tr;return e.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new RR({next:d=>{s.enqueueAndForget(()=>bR(i,c)),d.fromCache&&a.source==="server"?l.reject(new J($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),c=new TR(o,u,{includeMetadataChanges:!0,ku:!0});return ER(i,c)}(await NR(e),e.asyncQueue,t,n,r)),r.promise}class TW{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.No=new pR(this,"async_queue_retry"),this.Wc=()=>{const n=Um();n&&ne("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const t=Um();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.Uc){this.Uc=!0,this.Qc=t||!1;const n=Um();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new Tr;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Lc.push(t),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.No.reset()}catch(t){if(!qu(t))throw t;ne("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.No.Ro(()=>this.Jc())}}Hc(t){const n=this.Bc.then(()=>(this.Gc=!0,t().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Nr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(t,n,r){this.zc(),this.jc.indexOf(t)>-1&&(n=0);const i=cw.createAndSchedule(this,t,n,r,s=>this.Yc(s));return this.qc.push(i),i}zc(){this.Kc&&he()}verifyOperationInProgress(){}async Xc(){let t;do t=this.Bc,await t;while(t!==this.Bc)}Zc(t){for(const n of this.qc)if(n.timerId===t)return!0;return!1}ta(t){return this.Xc().then(()=>{this.qc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Xc()})}ea(t){this.jc.push(t)}Yc(t){const n=this.qc.indexOf(t);this.qc.splice(n,1)}}class fa extends _p{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=new TW,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||MR(this),this._firestoreClient.terminate()}}function CW(e,t){const n=typeof e=="object"?e:s1(),r=typeof e=="string"?e:t||"(default)",i=Fs(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=o4("firestore");s&&yW(i,...s)}return i}function pw(e){return e._firestoreClient||MR(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function MR(e){var t;const n=e._freezeSettings(),r=function(i,s,o,a){return new l7(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new vW(e._authCredentials,e._appCheckCredentials,e._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Qo(Nt.fromBase64String(t))}catch(n){throw new J($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Qo(Nt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new J($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ot(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new J($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new J($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Ce(this._lat,t._lat)||Ce(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IW=/^__.*__$/;class kW{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new ji(t,this.data,this.fieldMask,n,this.fieldTransforms):new Ku(t,this.data,n,this.fieldTransforms)}}class LR{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new ji(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function FR(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he()}}class yw{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=i,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new yw(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.ia({path:r,oa:!1});return i.ua(t),i}ca(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.ia({path:r,oa:!1});return i.na(),i}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return Of(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(t.length===0)throw this.ha("Document fields must not be empty");if(FR(this.sa)&&IW.test(t))throw this.ha('Document fields cannot begin and end with "__"')}}class AW{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.It=r||gp(t)}da(t,n,r,i=!1){return new yw({sa:t,methodName:n,fa:r,path:Ot.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function vw(e){const t=e._freezeSettings(),n=gp(e._databaseId);return new AW(e._databaseId,!!t.ignoreUndefinedProperties,n)}function OW(e,t,n,r,i,s={}){const o=e.da(s.merge||s.mergeFields?2:0,t,n,i);ww("Data must be an object, but it was:",o,r);const a=VR(r,o);let l,u;if(s.merge)l=new kn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const f=tv(t,d,n);if(!o.contains(f))throw new J($.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);UR(c,f)||c.push(f)}l=new kn(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new kW(new Yt(a),l,u)}class xp extends mw{_toFieldTransform(t){if(t.sa!==2)throw t.sa===1?t.ha(`${this._methodName}() can only appear at the top level of your update data`):t.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof xp}}function PW(e,t,n,r){const i=e.da(1,t,n);ww("Data must be an object, but it was:",i,r);const s=[],o=Yt.empty();js(r,(l,u)=>{const c=_w(t,l,n);u=Je(u);const d=i.ca(c);if(u instanceof xp)s.push(c);else{const f=Zu(u,d);f!=null&&(s.push(c),o.set(c,f))}});const a=new kn(s);return new LR(o,a,i.fieldTransforms)}function DW(e,t,n,r,i,s){const o=e.da(1,t,n),a=[tv(t,r,n)],l=[i];if(s.length%2!=0)throw new J($.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(tv(t,s[f])),l.push(s[f+1]);const u=[],c=Yt.empty();for(let f=a.length-1;f>=0;--f)if(!UR(u,a[f])){const h=a[f];let p=l[f];p=Je(p);const y=o.ca(h);if(p instanceof xp)u.push(h);else{const w=Zu(p,y);w!=null&&(u.push(h),c.set(h,w))}}const d=new kn(u);return new LR(c,d,o.fieldTransforms)}function RW(e,t,n,r=!1){return Zu(n,e.da(r?4:3,t))}function Zu(e,t){if(jR(e=Je(e)))return ww("Unsupported field value:",t,e),VR(e,t);if(e instanceof mw)return function(n,r){if(!FR(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&t.sa!==4)throw t.ha("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Zu(o,r.aa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(e,t)}return function(n,r){if((n=Je(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return b7(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ot.fromDate(n);return{timestampValue:kf(r.It,i)}}if(n instanceof ot){const i=new ot(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:kf(r.It,i)}}if(n instanceof gw)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Qo)return{bytesValue:aR(r.It,n._byteString)};if(n instanceof Bt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:nw(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${wp(n)}`)}(e,t)}function VR(e,t){const n={};return MD(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):js(e,(r,i)=>{const s=Zu(i,t.ra(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function jR(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof ot||e instanceof gw||e instanceof Qo||e instanceof Bt||e instanceof mw)}function ww(e,t,n){if(!jR(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=wp(n);throw r==="an object"?t.ha(e+" a custom object"):t.ha(e+" "+r)}}function tv(e,t,n){if((t=Je(t))instanceof Sp)return t._internalPath;if(typeof t=="string")return _w(e,t);throw Of("Field path arguments must be of type string or ",e,!1,void 0,n)}const $W=new RegExp("[~\\*/\\[\\]]");function _w(e,t,n){if(t.search($W)>=0)throw Of(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Sp(...t.split("."))._internalPath}catch{throw Of(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Of(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new J($.INVALID_ARGUMENT,a+e+l)}function UR(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new NW(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Sw("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class NW extends zR{data(){return super.data()}}function Sw(e,t){return typeof t=="string"?_w(e,t):t instanceof Sp?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MW(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new J($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class LW{}function cu(e,...t){for(const n of t)e=n._apply(e);return e}class FW extends LW{constructor(t,n,r){super(),this.ma=t,this.ga=n,this.ya=r,this.type="where"}_apply(t){const n=vw(t.firestore),r=function(i,s,o,a,l,u,c){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new J($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){tb(c,u);const h=[];for(const p of c)h.push(eb(a,i,p));d={arrayValue:{values:h}}}else d=eb(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||tb(c,u),d=RW(o,s,c,u==="in"||u==="not-in");const f=Ut.create(l,u,d);return function(h,p){if(p.dt()){const w=zD(h);if(w!==null&&!w.isEqual(p.field))throw new J($.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${w.toString()}' and '${p.field.toString()}'`);const v=UD(h);v!==null&&VW(h,p.field,v)}const y=function(w,v){for(const m of w.filters)if(v.indexOf(m.op)>=0)return m.op;return null}(h,function(w){switch(w){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(p.op));if(y!==null)throw y===p.op?new J($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${p.op.toString()}' filter.`):new J($.INVALID_ARGUMENT,`Invalid query. You cannot use '${p.op.toString()}' filters with '${y.toString()}' filters.`)}(i,f),f}(t._query,"where",n,t.firestore._databaseId,this.ma,this.ga,this.ya);return new Ju(t.firestore,t.converter,function(i,s){const o=i.filters.concat([s]);return new Gu(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(t._query,r))}}function du(e,t,n){const r=t,i=Sw("where",e);return new FW(i,r,n)}function eb(e,t,n){if(typeof(n=Je(n))=="string"){if(n==="")throw new J($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!BD(t)&&n.indexOf("/")!==-1)throw new J($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Me.fromString(n));if(!ie.isDocumentKey(r))throw new J($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return kE(e,new ie(r))}if(n instanceof Bt)return kE(e,n._key);throw new J($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${wp(n)}.`)}function tb(e,t){if(!Array.isArray(e)||e.length===0)throw new J($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new J($.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function VW(e,t,n){if(!n.isEqual(t))throw new J($.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jW{convertValue(t,n="none"){switch(ks(t)){case 0:return null;case 1:return t.booleanValue;case 2:return et(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Wo(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw he()}}convertObject(t,n){const r={};return js(t.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new gw(et(t.latitude),et(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=FD(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(iu(t));default:return null}}convertTimestamp(t){const n=Oi(t);return new ot(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=Me.fromString(t);De(dR(r));const i=new su(r.get(1),r.get(3)),s=new ie(r.popFirst(5));return i.isEqual(n)||Nr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UW(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class BR extends zR{constructor(t,n,r,i,s,o){super(t,n,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new hd(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Sw("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class hd extends BR{data(t={}){return super.data(t)}}class zW{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ya(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new hd(this._firestore,this._userDataWriter,r.key,r,new Ya(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new J($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new hd(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ya(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new hd(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ya(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:BW(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function BW(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HW(e){e=hr(e,Bt);const t=hr(e.firestore,fa);return EW(pw(t),e._key).then(n=>qW(t,e,n))}class HR extends jW{constructor(t){super(),this.firestore=t}convertBytes(t){return new Qo(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Bt(this.firestore,null,n)}}function Xo(e){e=hr(e,Ju);const t=hr(e.firestore,fa),n=pw(t),r=new HR(t);return MW(e._query),bW(n,e._query).then(i=>new zW(t,r,e,i))}function WR(e,t,n){e=hr(e,Bt);const r=hr(e.firestore,fa),i=UW(e.converter,t,n);return Ew(r,[OW(vw(r),"setDoc",e._key,i,e.converter!==null,n).toMutation(e._key,Gn.none())])}function xw(e,t,n,...r){e=hr(e,Bt);const i=hr(e.firestore,fa),s=vw(i);let o;return o=typeof(t=Je(t))=="string"||t instanceof Sp?DW(s,"updateDoc",e._key,t,n,r):PW(s,"updateDoc",e._key,t),Ew(i,[o.toMutation(e._key,Gn.exists(!0))])}function WW(e){return Ew(hr(e.firestore,fa),[new tw(e._key,Gn.none())])}function Ew(e,t){return function(n,r){const i=new Tr;return n.asyncQueue.enqueueAndForget(async()=>sW(await xW(n),r,i)),i.promise}(pw(e),t)}function qW(e,t,n){const r=n.docs.get(t._key),i=new HR(e);return new BR(e,i,t._key,r,new Ya(n.hasPendingWrites,n.fromCache),t.converter)}(function(e,t=!0){(function(n){ua=n})(Au),dr(new Qn("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new fa(new YH(n.getProvider("auth-internal")),new ZH(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new J($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new su(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Tn(EE,"3.7.1",e),Tn(EE,"3.7.1","esm2017")})();const GW={apiKey:"AIzaSyAConBsZaK-WjqE_GS5V3AnQt5mCpDbkWs",authDomain:"ecommerce-new-bc470.firebaseapp.com",projectId:"ecommerce-new-bc470",storageBucket:"ecommerce-new-bc470.appspot.com",messagingSenderId:"898046532924",appId:"1:898046532924:web:d0837b6238ed9fdb601239",measurementId:"G-KD49TMJKXD"},bw=mO(GW);U8(bw);const gn=KO(bw),ln=CW(bw),KW=new vr,YW=async()=>{try{const t=(await jz(gn,KW)).user,n=cu(Yo(ln,"users"),du("uid","==",t.uid));(await Xo(n)).docs.length===0&&await WR(zs(ln,"users",t.uid),{uid:t.uid,email:t.email,name:t.displayName,authProvider:"google",signUpDate:Date.now()})}catch(e){console.error(e)}},QW=async(e,t)=>{try{await dz(gn,e,t)}catch(n){console.error(n)}},XW=async(e,t,n)=>{try{const i=(await cz(gn,t,n)).user;await WR(zs(ln,"users",i.uid),{uid:i.uid,email:t,name:e,signUpDate:Date.now()})}catch(r){console.error(r)}},qR=()=>{mz(gn)};function zn(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Di(e){return!!e&&!!e[je]}function Fr(e){return!!e&&(function(t){if(!t||typeof t!="object")return!1;var n=Object.getPrototypeOf(t);if(n===null)return!0;var r=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return r===Object||typeof r=="function"&&Function.toString.call(r)===oq}(e)||Array.isArray(e)||!!e[lb]||!!e.constructor[lb]||Tw(e)||Cw(e))}function As(e,t,n){n===void 0&&(n=!1),ha(e)===0?(n?Object.keys:Ro)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function ha(e){var t=e[je];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Tw(e)?2:Cw(e)?3:0}function Do(e,t){return ha(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function JW(e,t){return ha(e)===2?e.get(t):e[t]}function GR(e,t,n){var r=ha(e);r===2?e.set(t,n):r===3?(e.delete(t),e.add(n)):e[t]=n}function KR(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Tw(e){return iq&&e instanceof Map}function Cw(e){return sq&&e instanceof Set}function Qi(e){return e.o||e.t}function Iw(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=QR(e);delete t[je];for(var n=Ro(t),r=0;r<n.length;r++){var i=n[r],s=t[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(t[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function kw(e,t){return t===void 0&&(t=!1),Aw(e)||Di(e)||!Fr(e)||(ha(e)>1&&(e.set=e.add=e.clear=e.delete=ZW),Object.freeze(e),t&&As(e,function(n,r){return kw(r,!0)},!0)),e}function ZW(){zn(2)}function Aw(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function cr(e){var t=sv[e];return t||zn(18,e),t}function eq(e,t){sv[e]||(sv[e]=t)}function nv(){return fu}function zm(e,t){t&&(cr("Patches"),e.u=[],e.s=[],e.v=t)}function Pf(e){rv(e),e.p.forEach(tq),e.p=null}function rv(e){e===fu&&(fu=e.l)}function nb(e){return fu={p:[],l:fu,h:e,m:!0,_:0}}function tq(e){var t=e[je];t.i===0||t.i===1?t.j():t.O=!0}function Bm(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.g||cr("ES5").S(t,e,r),r?(n[je].P&&(Pf(t),zn(4)),Fr(e)&&(e=Df(t,e),t.l||Rf(t,e)),t.u&&cr("Patches").M(n[je].t,e,t.u,t.s)):e=Df(t,n,[]),Pf(t),t.u&&t.v(t.u,t.s),e!==YR?e:void 0}function Df(e,t,n){if(Aw(t))return t;var r=t[je];if(!r)return As(t,function(s,o){return rb(e,r,t,s,o,n)},!0),t;if(r.A!==e)return t;if(!r.P)return Rf(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=Iw(r.k):r.o;As(r.i===3?new Set(i):i,function(s,o){return rb(e,r,i,s,o,n)}),Rf(e,i,!1),n&&e.u&&cr("Patches").R(r,n,e.u,e.s)}return r.o}function rb(e,t,n,r,i,s){if(Di(i)){var o=Df(e,i,s&&t&&t.i!==3&&!Do(t.D,r)?s.concat(r):void 0);if(GR(n,r,o),!Di(o))return;e.m=!1}if(Fr(i)&&!Aw(i)){if(!e.h.F&&e._<1)return;Df(e,i),t&&t.A.l||Rf(e,i)}}function Rf(e,t,n){n===void 0&&(n=!1),e.h.F&&e.m&&kw(t,n)}function Hm(e,t){var n=e[je];return(n?Qi(n):e)[t]}function ib(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function ni(e){e.P||(e.P=!0,e.l&&ni(e.l))}function Wm(e){e.o||(e.o=Iw(e.t))}function iv(e,t,n){var r=Tw(t)?cr("MapSet").N(t,n):Cw(t)?cr("MapSet").T(t,n):e.g?function(i,s){var o=Array.isArray(i),a={i:o?1:0,A:s?s.A:nv(),P:!1,I:!1,D:{},l:s,t:i,k:null,o:null,j:null,C:!1},l=a,u=hu;o&&(l=[a],u=Qa);var c=Proxy.revocable(l,u),d=c.revoke,f=c.proxy;return a.k=f,a.j=d,f}(t,n):cr("ES5").J(t,n);return(n?n.A:nv()).p.push(r),r}function nq(e){return Di(e)||zn(22,e),function t(n){if(!Fr(n))return n;var r,i=n[je],s=ha(n);if(i){if(!i.P&&(i.i<4||!cr("ES5").K(i)))return i.t;i.I=!0,r=sb(n,s),i.I=!1}else r=sb(n,s);return As(r,function(o,a){i&&JW(i.t,o)===a||GR(r,o,t(a))}),s===3?new Set(r):r}(e)}function sb(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Iw(e)}function rq(){function e(s,o){var a=i[s];return a?a.enumerable=o:i[s]=a={configurable:!0,enumerable:o,get:function(){var l=this[je];return hu.get(l,s)},set:function(l){var u=this[je];hu.set(u,s,l)}},a}function t(s){for(var o=s.length-1;o>=0;o--){var a=s[o][je];if(!a.P)switch(a.i){case 5:r(a)&&ni(a);break;case 4:n(a)&&ni(a)}}}function n(s){for(var o=s.t,a=s.k,l=Ro(a),u=l.length-1;u>=0;u--){var c=l[u];if(c!==je){var d=o[c];if(d===void 0&&!Do(o,c))return!0;var f=a[c],h=f&&f[je];if(h?h.t!==d:!KR(f,d))return!0}}var p=!!o[je];return l.length!==Ro(o).length+(p?0:1)}function r(s){var o=s.k;if(o.length!==s.t.length)return!0;var a=Object.getOwnPropertyDescriptor(o,o.length-1);if(a&&!a.get)return!0;for(var l=0;l<o.length;l++)if(!o.hasOwnProperty(l))return!0;return!1}var i={};eq("ES5",{J:function(s,o){var a=Array.isArray(s),l=function(c,d){if(c){for(var f=Array(d.length),h=0;h<d.length;h++)Object.defineProperty(f,""+h,e(h,!0));return f}var p=QR(d);delete p[je];for(var y=Ro(p),w=0;w<y.length;w++){var v=y[w];p[v]=e(v,c||!!p[v].enumerable)}return Object.create(Object.getPrototypeOf(d),p)}(a,s),u={i:a?5:4,A:o?o.A:nv(),P:!1,I:!1,D:{},l:o,t:s,k:l,o:null,O:!1,C:!1};return Object.defineProperty(l,je,{value:u,writable:!0}),l},S:function(s,o,a){a?Di(o)&&o[je].A===s&&t(s.p):(s.u&&function l(u){if(u&&typeof u=="object"){var c=u[je];if(c){var d=c.t,f=c.k,h=c.D,p=c.i;if(p===4)As(f,function(g){g!==je&&(d[g]!==void 0||Do(d,g)?h[g]||l(f[g]):(h[g]=!0,ni(c)))}),As(d,function(g){f[g]!==void 0||Do(f,g)||(h[g]=!1,ni(c))});else if(p===5){if(r(c)&&(ni(c),h.length=!0),f.length<d.length)for(var y=f.length;y<d.length;y++)h[y]=!1;else for(var w=d.length;w<f.length;w++)h[w]=!0;for(var v=Math.min(f.length,d.length),m=0;m<v;m++)f.hasOwnProperty(m)||(h[m]=!0),h[m]===void 0&&l(f[m])}}}}(s.p[0]),t(s.p))},K:function(s){return s.i===4?n(s):r(s)}})}var ob,fu,Ow=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",iq=typeof Map<"u",sq=typeof Set<"u",ab=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",YR=Ow?Symbol.for("immer-nothing"):((ob={})["immer-nothing"]=!0,ob),lb=Ow?Symbol.for("immer-draftable"):"__$immer_draftable",je=Ow?Symbol.for("immer-state"):"__$immer_state",oq=""+Object.prototype.constructor,Ro=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,QR=Object.getOwnPropertyDescriptors||function(e){var t={};return Ro(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},sv={},hu={get:function(e,t){if(t===je)return e;var n=Qi(e);if(!Do(n,t))return function(i,s,o){var a,l=ib(s,o);return l?"value"in l?l.value:(a=l.get)===null||a===void 0?void 0:a.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!Fr(r)?r:r===Hm(e.t,t)?(Wm(e),e.o[t]=iv(e.A.h,r,e)):r},has:function(e,t){return t in Qi(e)},ownKeys:function(e){return Reflect.ownKeys(Qi(e))},set:function(e,t,n){var r=ib(Qi(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=Hm(Qi(e),t),s=i==null?void 0:i[je];if(s&&s.t===n)return e.o[t]=n,e.D[t]=!1,!0;if(KR(n,i)&&(n!==void 0||Do(e.t,t)))return!0;Wm(e),ni(e)}return e.o[t]===n&&typeof n!="number"&&(n!==void 0||t in e.o)||(e.o[t]=n,e.D[t]=!0,!0)},deleteProperty:function(e,t){return Hm(e.t,t)!==void 0||t in e.t?(e.D[t]=!1,Wm(e),ni(e)):delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=Qi(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){zn(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){zn(12)}},Qa={};As(hu,function(e,t){Qa[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Qa.deleteProperty=function(e,t){return Qa.set.call(this,e,t,void 0)},Qa.set=function(e,t,n){return hu.set.call(this,e[0],t,n,e[0])};var aq=function(){function e(n){var r=this;this.g=ab,this.F=!0,this.produce=function(i,s,o){if(typeof i=="function"&&typeof s!="function"){var a=s;s=i;var l=r;return function(y){var w=this;y===void 0&&(y=a);for(var v=arguments.length,m=Array(v>1?v-1:0),g=1;g<v;g++)m[g-1]=arguments[g];return l.produce(y,function(_){var E;return(E=s).call.apply(E,[w,_].concat(m))})}}var u;if(typeof s!="function"&&zn(6),o!==void 0&&typeof o!="function"&&zn(7),Fr(i)){var c=nb(r),d=iv(r,i,void 0),f=!0;try{u=s(d),f=!1}finally{f?Pf(c):rv(c)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(y){return zm(c,o),Bm(y,c)},function(y){throw Pf(c),y}):(zm(c,o),Bm(u,c))}if(!i||typeof i!="object"){if((u=s(i))===void 0&&(u=i),u===YR&&(u=void 0),r.F&&kw(u,!0),o){var h=[],p=[];cr("Patches").M(i,u,h,p),o(h,p)}return u}zn(21,i)},this.produceWithPatches=function(i,s){if(typeof i=="function")return function(u){for(var c=arguments.length,d=Array(c>1?c-1:0),f=1;f<c;f++)d[f-1]=arguments[f];return r.produceWithPatches(u,function(h){return i.apply(void 0,[h].concat(d))})};var o,a,l=r.produce(i,s,function(u,c){o=u,a=c});return typeof Promise<"u"&&l instanceof Promise?l.then(function(u){return[u,o,a]}):[l,o,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){Fr(n)||zn(8),Di(n)&&(n=nq(n));var r=nb(this),i=iv(this,n,void 0);return i[je].C=!0,rv(r),i},t.finishDraft=function(n,r){var i=n&&n[je],s=i.A;return zm(s,r),Bm(void 0,s)},t.setAutoFreeze=function(n){this.F=n},t.setUseProxies=function(n){n&&!ab&&zn(20),this.g=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var s=r[i];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}i>-1&&(r=r.slice(i+1));var o=cr("Patches").$;return Di(n)?o(n,r):this.produce(n,function(a){return o(a,r)})},e}(),fn=new aq,XR=fn.produce;fn.produceWithPatches.bind(fn);fn.setAutoFreeze.bind(fn);fn.setUseProxies.bind(fn);fn.applyPatches.bind(fn);fn.createDraft.bind(fn);fn.finishDraft.bind(fn);function lq(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ub(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function cb(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ub(Object(n),!0).forEach(function(r){lq(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ub(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function It(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var db=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),qm=function(){return Math.random().toString(36).substring(7).split("").join(".")},$f={INIT:"@@redux/INIT"+qm(),REPLACE:"@@redux/REPLACE"+qm(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+qm()}};function uq(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function JR(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(It(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(It(1));return n(JR)(e,t)}if(typeof e!="function")throw new Error(It(2));var i=e,s=t,o=[],a=o,l=!1;function u(){a===o&&(a=o.slice())}function c(){if(l)throw new Error(It(3));return s}function d(y){if(typeof y!="function")throw new Error(It(4));if(l)throw new Error(It(5));var w=!0;return u(),a.push(y),function(){if(!!w){if(l)throw new Error(It(6));w=!1,u();var m=a.indexOf(y);a.splice(m,1),o=null}}}function f(y){if(!uq(y))throw new Error(It(7));if(typeof y.type>"u")throw new Error(It(8));if(l)throw new Error(It(9));try{l=!0,s=i(s,y)}finally{l=!1}for(var w=o=a,v=0;v<w.length;v++){var m=w[v];m()}return y}function h(y){if(typeof y!="function")throw new Error(It(10));i=y,f({type:$f.REPLACE})}function p(){var y,w=d;return y={subscribe:function(m){if(typeof m!="object"||m===null)throw new Error(It(11));function g(){m.next&&m.next(c())}g();var _=w(g);return{unsubscribe:_}}},y[db]=function(){return this},y}return f({type:$f.INIT}),r={dispatch:f,subscribe:d,getState:c,replaceReducer:h},r[db]=p,r}function cq(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:$f.INIT});if(typeof r>"u")throw new Error(It(12));if(typeof n(void 0,{type:$f.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(It(13))})}function dq(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var s=Object.keys(n),o;try{cq(n)}catch(a){o=a}return function(l,u){if(l===void 0&&(l={}),o)throw o;for(var c=!1,d={},f=0;f<s.length;f++){var h=s[f],p=n[h],y=l[h],w=p(y,u);if(typeof w>"u")throw u&&u.type,new Error(It(14));d[h]=w,c=c||w!==y}return c=c||s.length!==Object.keys(l).length,c?d:l}}function Nf(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function fq(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),s=function(){throw new Error(It(15))},o={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},a=t.map(function(l){return l(o)});return s=Nf.apply(void 0,a)(i.dispatch),cb(cb({},i),{},{dispatch:s})}}}function ZR(e){var t=function(r){var i=r.dispatch,s=r.getState;return function(o){return function(a){return typeof a=="function"?a(i,s,e):o(a)}}};return t}var e$=ZR();e$.withExtraArgument=ZR;const fb=e$;var hq=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),pq=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},Mf=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},mq=Object.defineProperty,gq=Object.defineProperties,yq=Object.getOwnPropertyDescriptors,hb=Object.getOwnPropertySymbols,vq=Object.prototype.hasOwnProperty,wq=Object.prototype.propertyIsEnumerable,pb=function(e,t,n){return t in e?mq(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},Si=function(e,t){for(var n in t||(t={}))vq.call(t,n)&&pb(e,n,t[n]);if(hb)for(var r=0,i=hb(t);r<i.length;r++){var n=i[r];wq.call(t,n)&&pb(e,n,t[n])}return e},Gm=function(e,t){return gq(e,yq(t))},_q=function(e,t,n){return new Promise(function(r,i){var s=function(l){try{a(n.next(l))}catch(u){i(u)}},o=function(l){try{a(n.throw(l))}catch(u){i(u)}},a=function(l){return l.done?r(l.value):Promise.resolve(l.value).then(s,o)};a((n=n.apply(e,t)).next())})},Sq=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Nf:Nf.apply(null,arguments)};function xq(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}var Eq=function(e){hq(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Mf([void 0],n[0].concat(this)))):new(t.bind.apply(t,Mf([void 0],n.concat(this))))},t}(Array);function ov(e){return Fr(e)?XR(e,function(){}):e}function bq(e){return typeof e=="boolean"}function Tq(){return function(t){return Cq(t)}}function Cq(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var r=new Eq;return n&&(bq(n)?r.push(fb):r.push(fb.withExtraArgument(n.extraArgument))),r}var Iq=!0;function kq(e){var t=Tq(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,s=n.middleware,o=s===void 0?t():s,a=n.devTools,l=a===void 0?!0:a,u=n.preloadedState,c=u===void 0?void 0:u,d=n.enhancers,f=d===void 0?void 0:d,h;if(typeof i=="function")h=i;else if(xq(i))h=dq(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var p=o;typeof p=="function"&&(p=p(t));var y=fq.apply(void 0,p),w=Nf;l&&(w=Sq(Si({trace:!Iq},typeof l=="object"&&l)));var v=[y];Array.isArray(f)?v=Mf([y],f):typeof f=="function"&&(v=f(v));var m=w.apply(void 0,v);return JR(h,c,m)}function xi(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var s=t.apply(void 0,r);if(!s)throw new Error("prepareAction did not return an object");return Si(Si({type:e,payload:s.payload},"meta"in s&&{meta:s.meta}),"error"in s&&{error:s.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}function t$(e){var t={},n=[],r,i={addCase:function(s,o){var a=typeof s=="string"?s:s.type;if(a in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[a]=o,i},addMatcher:function(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase:function(s){return r=s,i}};return e(i),[t,n,r]}function Aq(e){return typeof e=="function"}function Oq(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?t$(t):[t,n,r],s=i[0],o=i[1],a=i[2],l;if(Aq(e))l=function(){return ov(e())};else{var u=ov(e);l=function(){return u}}function c(d,f){d===void 0&&(d=l());var h=Mf([s[f.type]],o.filter(function(p){var y=p.matcher;return y(f)}).map(function(p){var y=p.reducer;return y}));return h.filter(function(p){return!!p}).length===0&&(h=[a]),h.reduce(function(p,y){if(y)if(Di(p)){var w=p,v=y(w,f);return v===void 0?p:v}else{if(Fr(p))return XR(p,function(m){return y(m,f)});var v=y(p,f);if(v===void 0){if(p===null)return p;throw Error("A case reducer on a non-draftable value must not return undefined")}return v}return p},d)}return c.getInitialState=l,c}function Pq(e,t){return e+"/"+t}function n$(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:ov(e.initialState),r=e.reducers||{},i=Object.keys(r),s={},o={},a={};i.forEach(function(c){var d=r[c],f=Pq(t,c),h,p;"reducer"in d?(h=d.reducer,p=d.prepare):h=d,s[c]=h,o[f]=h,a[c]=p?xi(f,p):xi(f)});function l(){var c=typeof e.extraReducers=="function"?t$(e.extraReducers):[e.extraReducers],d=c[0],f=d===void 0?{}:d,h=c[1],p=h===void 0?[]:h,y=c[2],w=y===void 0?void 0:y,v=Si(Si({},f),o);return Oq(n,v,p,w)}var u;return{name:t,reducer:function(c,d){return u||(u=l()),u(c,d)},actions:a,caseReducers:s,getInitialState:function(){return u||(u=l()),u.getInitialState()}}}var Dq="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Rq=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=Dq[Math.random()*64|0];return t},$q=["name","message","stack","code"],Km=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),mb=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),Nq=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=$q;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}};function Ep(e,t,n){var r=xi(e+"/fulfilled",function(l,u,c,d){return{payload:l,meta:Gm(Si({},d||{}),{arg:c,requestId:u,requestStatus:"fulfilled"})}}),i=xi(e+"/pending",function(l,u,c){return{payload:void 0,meta:Gm(Si({},c||{}),{arg:u,requestId:l,requestStatus:"pending"})}}),s=xi(e+"/rejected",function(l,u,c,d,f){return{payload:d,error:(n&&n.serializeError||Nq)(l||"Rejected"),meta:Gm(Si({},f||{}),{arg:c,requestId:u,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(l==null?void 0:l.name)==="AbortError",condition:(l==null?void 0:l.name)==="ConditionError"})}}),o=typeof AbortController<"u"?AbortController:function(){function l(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return l.prototype.abort=function(){},l}();function a(l){return function(u,c,d){var f=n!=null&&n.idGenerator?n.idGenerator(l):Rq(),h=new o,p,y=new Promise(function(g,_){return h.signal.addEventListener("abort",function(){return _({name:"AbortError",message:p||"Aborted"})})}),w=!1;function v(g){w&&(p=g,h.abort())}var m=function(){return _q(this,null,function(){var g,_,E,I,C,O;return pq(this,function(z){switch(z.label){case 0:return z.trys.push([0,4,,5]),I=(g=n==null?void 0:n.condition)==null?void 0:g.call(n,l,{getState:c,extra:d}),Lq(I)?[4,I]:[3,2];case 1:I=z.sent(),z.label=2;case 2:if(I===!1)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return w=!0,u(i(f,l,(_=n==null?void 0:n.getPendingMeta)==null?void 0:_.call(n,{requestId:f,arg:l},{getState:c,extra:d}))),[4,Promise.race([y,Promise.resolve(t(l,{dispatch:u,getState:c,extra:d,requestId:f,signal:h.signal,rejectWithValue:function(F,K){return new Km(F,K)},fulfillWithValue:function(F,K){return new mb(F,K)}})).then(function(F){if(F instanceof Km)throw F;return F instanceof mb?r(F.payload,f,l,F.meta):r(F,f,l)})])];case 3:return E=z.sent(),[3,5];case 4:return C=z.sent(),E=C instanceof Km?s(null,f,l,C.payload,C.meta):s(C,f,l),[3,5];case 5:return O=n&&!n.dispatchConditionRejection&&s.match(E)&&E.meta.condition,O||u(E),[2,E]}})})}();return Object.assign(m,{abort:v,requestId:f,arg:l,unwrap:function(){return m.then(Mq)}})}}return Object.assign(a,{pending:i,rejected:s,fulfilled:r,typePrefix:e})}function Mq(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function Lq(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var Pw="listenerMiddleware";xi(Pw+"/add");xi(Pw+"/removeAll");xi(Pw+"/remove");rq();const pd=Ep("cart/updateCart",async({userId:e,cart:t,product:n})=>{const r=[...t.map(i=>i.id),n.id];return await xw(zs(ln,"users",e),{cart:r}),n}),md=Ep("cart/getCart",async e=>{const t=cu(Yo(ln,"users"),du("uid","==",e)),i=(await Xo(t)).docs[0].data().cart.map(o=>zs(ln,"products",o.toString()));return await Promise.all(i.map(async o=>(await HW(o)).data()))}),gd=Ep("cart/deleteFromCart",async({userId:e,cart:t,indexToDelete:n})=>{const r=[...t];r.splice(n,1);const i=r.map(s=>s.id);return await xw(zs(ln,"users",e),{cart:i}),r}),_l=Ep("cart/deleteAllCart",async e=>{await xw(zs(ln,"users",e),{cart:[]})}),Fq={cart:[],randomNum:null,loading:{replaceRandomNumber:!1,updateCart:!1,deleteFromCart:!1,deleteAllCart:!1},errors:{replaceRandomNumber:null,updateCart:null,deleteFromCart:null,deleteAllCart:null}},r$=n$({name:"cart",initialState:Fq,reducers:{clearCart:e=>{e.cart=[]},deleteItemFromCart:(e,t)=>{e.cart=e.cart.filter(n=>n.id!==t.payload)}},extraReducers:e=>{e.addCase(pd.fulfilled,(t,n)=>{t.loading.updateCart=!1,t.cart.push(n.payload)}).addCase(pd.pending,t=>{t.errors.updateCart=null,t.loading.updateCart=!0}).addCase(pd.rejected,t=>{t.loading.updateCart=!1,t.errors.updateCart="Error"}).addCase(md.fulfilled,(t,n)=>{t.loading.updateCart=!1,t.cart=n.payload}).addCase(md.pending,t=>{t.errors.updateCart=null,t.loading.updateCart=!0}).addCase(md.rejected,t=>{t.loading.updateCart=!1,t.errors.updateCart="Error"}).addCase(gd.fulfilled,(t,n)=>{t.loading.deleteFromCart=!1,t.cart=n.payload}).addCase(gd.pending,t=>{t.errors.deleteFromCart=null,t.loading.deleteFromCart=!0}).addCase(gd.rejected,t=>{t.loading.deleteFromCart=!1,t.errors.deleteFromCart="Error"}).addCase(_l.fulfilled,(t,n)=>{t.loading.deleteAllCart=!1,t.cart=[]}).addCase(_l.pending,t=>{t.errors.deleteAllCart=null,t.loading.deleteAllCart=!0}).addCase(_l.rejected,t=>{t.loading.deleteAllCart=!1,t.errors.deleteAllCart="Error"})}}),{clearCart:i$}=r$.actions,pa=e=>e.cart.cart,Vq=r$.reducer;function jq(e){function t(P,M,G,ee,k){for(var me=0,H=0,Te=0,_e=0,x,T,A=0,W=0,L,R=L=x=0,B=0,ge=0,nt=0,qe=0,Br=G.length,zi=Br-1,Gt,le="",Ve="",$p="",Np="",Hr;B<Br;){if(T=G.charCodeAt(B),B===zi&&H+_e+Te+me!==0&&(H!==0&&(T=H===47?10:47),_e=Te=me=0,Br++,zi++),H+_e+Te+me===0){if(B===zi&&(0<ge&&(le=le.replace(f,"")),0<le.trim().length)){switch(T){case 32:case 9:case 59:case 13:case 10:break;default:le+=G.charAt(B)}T=59}switch(T){case 123:for(le=le.trim(),x=le.charCodeAt(0),L=1,qe=++B;B<Br;){switch(T=G.charCodeAt(B)){case 123:L++;break;case 125:L--;break;case 47:switch(T=G.charCodeAt(B+1)){case 42:case 47:e:{for(R=B+1;R<zi;++R)switch(G.charCodeAt(R)){case 47:if(T===42&&G.charCodeAt(R-1)===42&&B+2!==R){B=R+1;break e}break;case 10:if(T===47){B=R+1;break e}}B=R}}break;case 91:T++;case 40:T++;case 34:case 39:for(;B++<zi&&G.charCodeAt(B)!==T;);}if(L===0)break;B++}switch(L=G.substring(qe,B),x===0&&(x=(le=le.replace(d,"").trim()).charCodeAt(0)),x){case 64:switch(0<ge&&(le=le.replace(f,"")),T=le.charCodeAt(1),T){case 100:case 109:case 115:case 45:ge=M;break;default:ge=fe}if(L=t(M,ge,L,T,k+1),qe=L.length,0<V&&(ge=n(fe,le,nt),Hr=a(3,L,ge,M,se,Y,qe,T,k,ee),le=ge.join(""),Hr!==void 0&&(qe=(L=Hr.trim()).length)===0&&(T=0,L="")),0<qe)switch(T){case 115:le=le.replace(I,o);case 100:case 109:case 45:L=le+"{"+L+"}";break;case 107:le=le.replace(m,"$1 $2"),L=le+"{"+L+"}",L=de===1||de===2&&s("@"+L,3)?"@-webkit-"+L+"@"+L:"@"+L;break;default:L=le+L,ee===112&&(L=(Ve+=L,""))}else L="";break;default:L=t(M,n(M,le,nt),L,ee,k+1)}$p+=L,L=nt=ge=R=x=0,le="",T=G.charCodeAt(++B);break;case 125:case 59:if(le=(0<ge?le.replace(f,""):le).trim(),1<(qe=le.length))switch(R===0&&(x=le.charCodeAt(0),x===45||96<x&&123>x)&&(qe=(le=le.replace(" ",":")).length),0<V&&(Hr=a(1,le,M,P,se,Y,Ve.length,ee,k,ee))!==void 0&&(qe=(le=Hr.trim()).length)===0&&(le="\0\0"),x=le.charCodeAt(0),T=le.charCodeAt(1),x){case 0:break;case 64:if(T===105||T===99){Np+=le+G.charAt(B);break}default:le.charCodeAt(qe-1)!==58&&(Ve+=i(le,x,T,le.charCodeAt(2)))}nt=ge=R=x=0,le="",T=G.charCodeAt(++B)}}switch(T){case 13:case 10:H===47?H=0:1+x===0&&ee!==107&&0<le.length&&(ge=1,le+="\0"),0<V*q&&a(0,le,M,P,se,Y,Ve.length,ee,k,ee),Y=1,se++;break;case 59:case 125:if(H+_e+Te+me===0){Y++;break}default:switch(Y++,Gt=G.charAt(B),T){case 9:case 32:if(_e+me+H===0)switch(A){case 44:case 58:case 9:case 32:Gt="";break;default:T!==32&&(Gt=" ")}break;case 0:Gt="\\0";break;case 12:Gt="\\f";break;case 11:Gt="\\v";break;case 38:_e+H+me===0&&(ge=nt=1,Gt="\f"+Gt);break;case 108:if(_e+H+me+ce===0&&0<R)switch(B-R){case 2:A===112&&G.charCodeAt(B-3)===58&&(ce=A);case 8:W===111&&(ce=W)}break;case 58:_e+H+me===0&&(R=B);break;case 44:H+Te+_e+me===0&&(ge=1,Gt+="\r");break;case 34:case 39:H===0&&(_e=_e===T?0:_e===0?T:_e);break;case 91:_e+H+Te===0&&me++;break;case 93:_e+H+Te===0&&me--;break;case 41:_e+H+me===0&&Te--;break;case 40:if(_e+H+me===0){if(x===0)switch(2*A+3*W){case 533:break;default:x=1}Te++}break;case 64:H+Te+_e+me+R+L===0&&(L=1);break;case 42:case 47:if(!(0<_e+me+Te))switch(H){case 0:switch(2*T+3*G.charCodeAt(B+1)){case 235:H=47;break;case 220:qe=B,H=42}break;case 42:T===47&&A===42&&qe+2!==B&&(G.charCodeAt(qe+2)===33&&(Ve+=G.substring(qe,B+1)),Gt="",H=0)}}H===0&&(le+=Gt)}W=A,A=T,B++}if(qe=Ve.length,0<qe){if(ge=M,0<V&&(Hr=a(2,Ve,ge,P,se,Y,qe,ee,k,ee),Hr!==void 0&&(Ve=Hr).length===0))return Np+Ve+$p;if(Ve=ge.join(",")+"{"+Ve+"}",de*ce!==0){switch(de!==2||s(Ve,2)||(ce=0),ce){case 111:Ve=Ve.replace(_,":-moz-$1")+Ve;break;case 112:Ve=Ve.replace(g,"::-webkit-input-$1")+Ve.replace(g,"::-moz-$1")+Ve.replace(g,":-ms-input-$1")+Ve}ce=0}}return Np+Ve+$p}function n(P,M,G){var ee=M.trim().split(w);M=ee;var k=ee.length,me=P.length;switch(me){case 0:case 1:var H=0;for(P=me===0?"":P[0]+" ";H<k;++H)M[H]=r(P,M[H],G).trim();break;default:var Te=H=0;for(M=[];H<k;++H)for(var _e=0;_e<me;++_e)M[Te++]=r(P[_e]+" ",ee[H],G).trim()}return M}function r(P,M,G){var ee=M.charCodeAt(0);switch(33>ee&&(ee=(M=M.trim()).charCodeAt(0)),ee){case 38:return M.replace(v,"$1"+P.trim());case 58:return P.trim()+M.replace(v,"$1"+P.trim());default:if(0<1*G&&0<M.indexOf("\f"))return M.replace(v,(P.charCodeAt(0)===58?"":"$1")+P.trim())}return P+M}function i(P,M,G,ee){var k=P+";",me=2*M+3*G+4*ee;if(me===944){P=k.indexOf(":",9)+1;var H=k.substring(P,k.length-1).trim();return H=k.substring(0,P).trim()+H+";",de===1||de===2&&s(H,1)?"-webkit-"+H+H:H}if(de===0||de===2&&!s(k,1))return k;switch(me){case 1015:return k.charCodeAt(10)===97?"-webkit-"+k+k:k;case 951:return k.charCodeAt(3)===116?"-webkit-"+k+k:k;case 963:return k.charCodeAt(5)===110?"-webkit-"+k+k:k;case 1009:if(k.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+k+k;case 978:return"-webkit-"+k+"-moz-"+k+k;case 1019:case 983:return"-webkit-"+k+"-moz-"+k+"-ms-"+k+k;case 883:if(k.charCodeAt(8)===45)return"-webkit-"+k+k;if(0<k.indexOf("image-set(",11))return k.replace(K,"$1-webkit-$2")+k;break;case 932:if(k.charCodeAt(4)===45)switch(k.charCodeAt(5)){case 103:return"-webkit-box-"+k.replace("-grow","")+"-webkit-"+k+"-ms-"+k.replace("grow","positive")+k;case 115:return"-webkit-"+k+"-ms-"+k.replace("shrink","negative")+k;case 98:return"-webkit-"+k+"-ms-"+k.replace("basis","preferred-size")+k}return"-webkit-"+k+"-ms-"+k+k;case 964:return"-webkit-"+k+"-ms-flex-"+k+k;case 1023:if(k.charCodeAt(8)!==99)break;return H=k.substring(k.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+H+"-webkit-"+k+"-ms-flex-pack"+H+k;case 1005:return p.test(k)?k.replace(h,":-webkit-")+k.replace(h,":-moz-")+k:k;case 1e3:switch(H=k.substring(13).trim(),M=H.indexOf("-")+1,H.charCodeAt(0)+H.charCodeAt(M)){case 226:H=k.replace(E,"tb");break;case 232:H=k.replace(E,"tb-rl");break;case 220:H=k.replace(E,"lr");break;default:return k}return"-webkit-"+k+"-ms-"+H+k;case 1017:if(k.indexOf("sticky",9)===-1)break;case 975:switch(M=(k=P).length-10,H=(k.charCodeAt(M)===33?k.substring(0,M):k).substring(P.indexOf(":",7)+1).trim(),me=H.charCodeAt(0)+(H.charCodeAt(7)|0)){case 203:if(111>H.charCodeAt(8))break;case 115:k=k.replace(H,"-webkit-"+H)+";"+k;break;case 207:case 102:k=k.replace(H,"-webkit-"+(102<me?"inline-":"")+"box")+";"+k.replace(H,"-webkit-"+H)+";"+k.replace(H,"-ms-"+H+"box")+";"+k}return k+";";case 938:if(k.charCodeAt(5)===45)switch(k.charCodeAt(6)){case 105:return H=k.replace("-items",""),"-webkit-"+k+"-webkit-box-"+H+"-ms-flex-"+H+k;case 115:return"-webkit-"+k+"-ms-flex-item-"+k.replace(O,"")+k;default:return"-webkit-"+k+"-ms-flex-line-pack"+k.replace("align-content","").replace(O,"")+k}break;case 973:case 989:if(k.charCodeAt(3)!==45||k.charCodeAt(4)===122)break;case 931:case 953:if(F.test(P)===!0)return(H=P.substring(P.indexOf(":")+1)).charCodeAt(0)===115?i(P.replace("stretch","fill-available"),M,G,ee).replace(":fill-available",":stretch"):k.replace(H,"-webkit-"+H)+k.replace(H,"-moz-"+H.replace("fill-",""))+k;break;case 962:if(k="-webkit-"+k+(k.charCodeAt(5)===102?"-ms-"+k:"")+k,G+ee===211&&k.charCodeAt(13)===105&&0<k.indexOf("transform",10))return k.substring(0,k.indexOf(";",27)+1).replace(y,"$1-webkit-$2")+k}return k}function s(P,M){var G=P.indexOf(M===1?":":"{"),ee=P.substring(0,M!==3?G:10);return G=P.substring(G+1,P.length-1),re(M!==2?ee:ee.replace(z,"$1"),G,M)}function o(P,M){var G=i(M,M.charCodeAt(0),M.charCodeAt(1),M.charCodeAt(2));return G!==M+";"?G.replace(C," or ($1)").substring(4):"("+M+")"}function a(P,M,G,ee,k,me,H,Te,_e,x){for(var T=0,A=M,W;T<V;++T)switch(W=Ee[T].call(c,P,A,G,ee,k,me,H,Te,_e,x)){case void 0:case!1:case!0:case null:break;default:A=W}if(A!==M)return A}function l(P){switch(P){case void 0:case null:V=Ee.length=0;break;default:if(typeof P=="function")Ee[V++]=P;else if(typeof P=="object")for(var M=0,G=P.length;M<G;++M)l(P[M]);else q=!!P|0}return l}function u(P){return P=P.prefix,P!==void 0&&(re=null,P?typeof P!="function"?de=1:(de=2,re=P):de=0),u}function c(P,M){var G=P;if(33>G.charCodeAt(0)&&(G=G.trim()),D=G,G=[D],0<V){var ee=a(-1,M,G,G,se,Y,0,0,0,0);ee!==void 0&&typeof ee=="string"&&(M=ee)}var k=t(fe,G,M,0,0);return 0<V&&(ee=a(-2,k,G,G,se,Y,k.length,0,0,0),ee!==void 0&&(k=ee)),D="",ce=0,Y=se=1,k}var d=/^\0+/g,f=/[\0\r\f]/g,h=/: */g,p=/zoo|gra/,y=/([,: ])(transform)/g,w=/,\r+?/g,v=/([\t\r\n ])*\f?&/g,m=/@(k\w+)\s*(\S*)\s*/,g=/::(place)/g,_=/:(read-only)/g,E=/[svh]\w+-[tblr]{2}/,I=/\(\s*(.*)\s*\)/g,C=/([\s\S]*?);/g,O=/-self|flex-/g,z=/[^]*?(:[rp][el]a[\w-]+)[^]*/,F=/stretch|:\s*\w+\-(?:conte|avail)/,K=/([^-])(image-set\()/,Y=1,se=1,ce=0,de=1,fe=[],Ee=[],V=0,re=null,q=0,D="";return c.use=l,c.set=u,e!==void 0&&u(e),c}var Uq={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function zq(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Bq=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,gb=zq(function(e){return Bq.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function rr(){return(rr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var yb=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},av=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!_1.exports.typeOf(e)},Lf=Object.freeze([]),Ei=Object.freeze({});function pu(e){return typeof e=="function"}function vb(e){return e.displayName||e.name||"Component"}function Dw(e){return e&&typeof e.styledComponentId=="string"}var Jo=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Rw=typeof window<"u"&&"HTMLElement"in window,Hq=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1),Wq={};function ec(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var qq=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&ec(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),yd=new Map,Ff=new Map,Sl=1,Vc=function(e){if(yd.has(e))return yd.get(e);for(;Ff.has(Sl);)Sl++;var t=Sl++;return yd.set(e,t),Ff.set(t,e),t},Gq=function(e){return Ff.get(e)},Kq=function(e,t){t>=Sl&&(Sl=t+1),yd.set(e,t),Ff.set(t,e)},Yq="style["+Jo+'][data-styled-version="5.3.6"]',Qq=new RegExp("^"+Jo+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Xq=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},Jq=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(Qq);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(Kq(u,l),Xq(e,u,a[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},Zq=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},s$=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(Jo))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Jo,"active"),r.setAttribute("data-styled-version","5.3.6");var o=Zq();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},eG=function(){function e(n){var r=this.element=s$(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}ec(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),tG=function(){function e(n){var r=this.element=s$(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),nG=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),wb=Rw,rG={isServer:!Rw,useCSSOMInjection:!Hq},Vf=function(){function e(n,r,i){n===void 0&&(n=Ei),r===void 0&&(r={}),this.options=rr({},rG,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Rw&&wb&&(wb=!1,function(s){for(var o=document.querySelectorAll(Yq),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Jo)!=="active"&&(Jq(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return Vc(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(rr({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new nG(o):s?new eG(o):new tG(o),new qq(n)));var n,r,i,s,o},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Vc(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Vc(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Vc(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=Gq(o);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(o);if(l&&u&&l.size){var c=Jo+".g"+o+'[id="'+a+'"]',d="";l!==void 0&&l.forEach(function(f){f.length>0&&(d+=f+",")}),s+=""+u+c+'{content:"'+d+`"}/*!sc*/
`}}}return s}(this)},e}(),iG=/(a)(d)/gi,_b=function(e){return String.fromCharCode(e+(e>25?39:97))};function lv(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=_b(t%52)+n;return(_b(t%52)+n).replace(iG,"$1-$2")}var go=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},o$=function(e){return go(5381,e)};function a$(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(pu(n)&&!Dw(n))return!1}return!0}var sG=o$("5.3.6"),oG=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&a$(t),this.componentId=n,this.baseHash=go(sG,n),this.baseStyle=r,Vf.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=Os(this.rules,t,n,r).join(""),a=lv(go(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=go(this.baseHash,r.hash),d="",f=0;f<u;f++){var h=this.rules[f];if(typeof h=="string")d+=h;else if(h){var p=Os(h,t,n,r),y=Array.isArray(p)?p.join(""):p;c=go(c,y+f),d+=y}}if(d){var w=lv(c>>>0);if(!n.hasNameForId(i,w)){var v=r(d,"."+w,void 0,i);n.insertRules(i,w,v)}s.push(w)}}return s.join(" ")},e}(),aG=/^\s*\/\/.*$/gm,lG=[":","[",".","#"];function uG(e){var t,n,r,i,s=e===void 0?Ei:e,o=s.options,a=o===void 0?Ei:o,l=s.plugins,u=l===void 0?Lf:l,c=new jq(a),d=[],f=function(y){function w(v){if(v)try{y(v+"}")}catch{}}return function(v,m,g,_,E,I,C,O,z,F){switch(v){case 1:if(z===0&&m.charCodeAt(0)===64)return y(m+";"),"";break;case 2:if(O===0)return m+"/*|*/";break;case 3:switch(O){case 102:case 112:return y(g[0]+m),"";default:return m+(F===0?"/*|*/":"")}case-2:m.split("/*|*/}").forEach(w)}}}(function(y){d.push(y)}),h=function(y,w,v){return w===0&&lG.indexOf(v[n.length])!==-1||v.match(i)?y:"."+t};function p(y,w,v,m){m===void 0&&(m="&");var g=y.replace(aG,""),_=w&&v?v+" "+w+" { "+g+" }":g;return t=m,n=w,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(v||!w?"":w,_)}return c.use([].concat(u,[function(y,w,v){y===2&&v.length&&v[0].lastIndexOf(n)>0&&(v[0]=v[0].replace(r,h))},f,function(y){if(y===-2){var w=d;return d=[],w}}])),p.hash=u.length?u.reduce(function(y,w){return w.name||ec(15),go(y,w.name)},5381).toString():"",p}var l$=Ye.createContext();l$.Consumer;var u$=Ye.createContext(),cG=(u$.Consumer,new Vf),uv=uG();function c$(){return b.exports.useContext(l$)||cG}function d$(){return b.exports.useContext(u$)||uv}var f$=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=uv);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return ec(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=uv),this.name+t.hash},e}(),dG=/([A-Z])/,fG=/([A-Z])/g,hG=/^ms-/,pG=function(e){return"-"+e.toLowerCase()};function Sb(e){return dG.test(e)?e.replace(fG,pG).replace(hG,"-ms-"):e}var xb=function(e){return e==null||e===!1||e===""};function Os(e,t,n,r){if(Array.isArray(e)){for(var i,s=[],o=0,a=e.length;o<a;o+=1)(i=Os(e[o],t,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(xb(e))return"";if(Dw(e))return"."+e.styledComponentId;if(pu(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var l=e(t);return Os(l,t,n,r)}var u;return e instanceof f$?n?(e.inject(n,r),e.getName(r)):e:av(e)?function c(d,f){var h,p,y=[];for(var w in d)d.hasOwnProperty(w)&&!xb(d[w])&&(Array.isArray(d[w])&&d[w].isCss||pu(d[w])?y.push(Sb(w)+":",d[w],";"):av(d[w])?y.push.apply(y,c(d[w],w)):y.push(Sb(w)+": "+(h=w,(p=d[w])==null||typeof p=="boolean"||p===""?"":typeof p!="number"||p===0||h in Uq?String(p).trim():p+"px")+";"));return f?[f+" {"].concat(y,["}"]):y}(e):e.toString()}var Eb=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Rn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return pu(e)||av(e)?Eb(Os(yb(Lf,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Eb(Os(yb(e,n)))}var h$=function(e,t,n){return n===void 0&&(n=Ei),e.theme!==n.theme&&e.theme||t||n.theme},mG=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,gG=/(^-|-$)/g;function Ym(e){return e.replace(mG,"-").replace(gG,"")}var $w=function(e){return lv(o$(e)>>>0)};function jc(e){return typeof e=="string"&&!0}var cv=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},yG=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function vG(e,t,n){var r=e[n];cv(t)&&cv(r)?p$(r,t):e[n]=t}function p$(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(cv(o))for(var a in o)yG(a)&&vG(e,o[a],a)}return e}var Nw=Ye.createContext();Nw.Consumer;var Qm={};function m$(e,t,n){var r=Dw(e),i=!jc(e),s=t.attrs,o=s===void 0?Lf:s,a=t.componentId,l=a===void 0?function(m,g){var _=typeof m!="string"?"sc":Ym(m);Qm[_]=(Qm[_]||0)+1;var E=_+"-"+$w("5.3.6"+_+Qm[_]);return g?g+"-"+E:E}(t.displayName,t.parentComponentId):a,u=t.displayName,c=u===void 0?function(m){return jc(m)?"styled."+m:"Styled("+vb(m)+")"}(e):u,d=t.displayName&&t.componentId?Ym(t.displayName)+"-"+t.componentId:t.componentId||l,f=r&&e.attrs?Array.prototype.concat(e.attrs,o).filter(Boolean):o,h=t.shouldForwardProp;r&&e.shouldForwardProp&&(h=t.shouldForwardProp?function(m,g,_){return e.shouldForwardProp(m,g,_)&&t.shouldForwardProp(m,g,_)}:e.shouldForwardProp);var p,y=new oG(n,d,r?e.componentStyle:void 0),w=y.isStatic&&o.length===0,v=function(m,g){return function(_,E,I,C){var O=_.attrs,z=_.componentStyle,F=_.defaultProps,K=_.foldedComponentIds,Y=_.shouldForwardProp,se=_.styledComponentId,ce=_.target,de=function(ee,k,me){ee===void 0&&(ee=Ei);var H=rr({},k,{theme:ee}),Te={};return me.forEach(function(_e){var x,T,A,W=_e;for(x in pu(W)&&(W=W(H)),W)H[x]=Te[x]=x==="className"?(T=Te[x],A=W[x],T&&A?T+" "+A:T||A):W[x]}),[H,Te]}(h$(E,b.exports.useContext(Nw),F)||Ei,E,O),fe=de[0],Ee=de[1],V=function(ee,k,me,H){var Te=c$(),_e=d$(),x=k?ee.generateAndInjectStyles(Ei,Te,_e):ee.generateAndInjectStyles(me,Te,_e);return x}(z,C,fe),re=I,q=Ee.$as||E.$as||Ee.as||E.as||ce,D=jc(q),P=Ee!==E?rr({},E,{},Ee):E,M={};for(var G in P)G[0]!=="$"&&G!=="as"&&(G==="forwardedAs"?M.as=P[G]:(Y?Y(G,gb,q):!D||gb(G))&&(M[G]=P[G]));return E.style&&Ee.style!==E.style&&(M.style=rr({},E.style,{},Ee.style)),M.className=Array.prototype.concat(K,se,V!==se?V:null,E.className,Ee.className).filter(Boolean).join(" "),M.ref=re,b.exports.createElement(q,M)}(p,m,g,w)};return v.displayName=c,(p=Ye.forwardRef(v)).attrs=f,p.componentStyle=y,p.displayName=c,p.shouldForwardProp=h,p.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Lf,p.styledComponentId=d,p.target=r?e.target:e,p.withComponent=function(m){var g=t.componentId,_=function(I,C){if(I==null)return{};var O,z,F={},K=Object.keys(I);for(z=0;z<K.length;z++)O=K[z],C.indexOf(O)>=0||(F[O]=I[O]);return F}(t,["componentId"]),E=g&&g+"-"+(jc(m)?m:Ym(vb(m)));return m$(m,rr({},_,{attrs:f,componentId:E}),n)},Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(m){this._foldedDefaultProps=r?p$({},e.defaultProps,m):m}}),p.toString=function(){return"."+p.styledComponentId},i&&g6(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),p}var dv=function(e){return function t(n,r,i){if(i===void 0&&(i=Ei),!_1.exports.isValidElementType(r))return ec(1,String(r));var s=function(){return n(r,i,Rn.apply(void 0,arguments))};return s.withConfig=function(o){return t(n,r,rr({},i,{},o))},s.attrs=function(o){return t(n,r,rr({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(m$,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){dv[e]=dv(e)});var wG=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=a$(n),Vf.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,s){var o=s(Os(this.rules,r,i,s).join(""),""),a=this.componentId+n;i.insertRules(a,a,o)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,s){n>2&&Vf.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,s)},e}();function _G(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Rn.apply(void 0,[e].concat(n)),s="sc-global-"+$w(JSON.stringify(i)),o=new wG(i,s);function a(u){var c=c$(),d=d$(),f=b.exports.useContext(Nw),h=b.exports.useRef(c.allocateGSInstance(s)).current;return c.server&&l(h,u,c,f,d),b.exports.useLayoutEffect(function(){if(!c.server)return l(h,u,c,f,d),function(){return o.removeStyles(h,c)}},[h,u,c,f,d]),null}function l(u,c,d,f,h){if(o.isStatic)o.renderStyles(u,Wq,d,h);else{var p=rr({},c,{theme:h$(c,f,a.defaultProps)});o.renderStyles(u,p,d,h)}}return Ye.memo(a)}function Mw(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Rn.apply(void 0,[e].concat(n)).join(""),s=$w(i);return new f$(s,i)}const N=dv;var g$={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},bb=Ye.createContext&&Ye.createContext(g$),bi=globalThis&&globalThis.__assign||function(){return bi=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},bi.apply(this,arguments)},SG=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function y$(e){return e&&e.map(function(t,n){return Ye.createElement(t.tag,bi({key:n},t.attr),y$(t.child))})}function Bs(e){return function(t){return S(xG,{...bi({attr:bi({},e.attr)},t),children:y$(e.child)})}}function xG(e){var t=function(n){var r=e.attr,i=e.size,s=e.title,o=SG(e,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),X("svg",{...bi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:bi(bi({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),children:[s&&S("title",{children:s}),e.children]})};return bb!==void 0?S(bb.Consumer,{children:function(n){return t(n)}}):t(g$)}function EG(e){return Bs({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"}}]})(e)}function bG(e){return Bs({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}}]})(e)}function v$(e){return Bs({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"}}]})(e)}const TG=N.div`
  position: relative;
  border-bottom: 1px solid gray;
`,CG=N.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  text-align: center;
  img{
    width: 150px;
    height: 150px;
    object-fit: cover;
    cursor: pointer;
  }

  @media (min-width: 768px){
    flex-direction: row;
  }
`,IG=N.div`
@media (min-width: 768px){
    width: 33%;
  }
`,kG=N.div`

p{
  margin-bottom: 10px;
  font-weight: bold;
  text-align: left;
}

@media (min-width: 768px){
  display: none;
}
`,AG=N.p`
  margin-bottom: 10px;

  @media (min-width: 768px){
    font-size: 24px;
  }
`,OG=N.p`
  font-size: 12px;
  margin-bottom: 10px;
`,PG=N.p`
  display: none;
  font-weight: bold;
  
  @media (min-width: 768px){
    display: block;
    width: 33%;
  }
`,DG=N(v$)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;

  transition: transform 0.3s, color 0.3s;
  &:hover {
    transform: scale(1.1);
    color: gray;
  }
  @media (min-width: 768px){
    font-size: 24px;
  }
`;N.p`
  font-size: 12px;

  @media (max-width: 767px){
    margin-bottom: 20px;
  }
`;const RG=N.div`
@media (min-width: 768px){
    width: 33%;
  }
`,$G=({item:e,index:t})=>{const{description:n,id:r,price:i,shortBrand:s,images:o,size:a}=e,l=Mi(),u=Li(),[c]=jr(gn),d=Cn(pa);return S(TG,{children:X(CG,{children:[X(RG,{children:[" ",S("img",{src:o[0],alt:"shoe image",onClick:()=>l(`/product/${r}`)})]}),X(IG,{children:[S(AG,{children:s}),S(OG,{children:n}),S(DG,{onClick:()=>u(gd({userId:c==null?void 0:c.uid,cart:d,indexToDelete:t}))})]}),X(PG,{children:["$",i]}),S(kG,{children:X("p",{children:["$",i]})})]})})},w$=N.div`
  margin: 0 auto;
  padding: 10px 20px;
  width: 100%;
  max-width: 1400px;
`;function ma({children:e}){return S(w$,{children:e})}const NG=N.img`
z-index: -1;
  position: absolute;
  bottom: 0;
`,MG="/ecommerce-react/assets/wave.91f90d37.svg",ga=()=>S(NG,{src:MG,alt:"wave decoration"}),LG=N.div`
  position: relative;
  min-height: 100vh;
`,FG=N.div`
  min-height: 80vh;
  margin-bottom: 40px;
`,VG=N.div`
  background-color: #fff;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`,jG=N.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`,UG=N.div`
  padding: 20px;
  background-color: #f5f5f6;
`,zG=N.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  background-color: #ffffff;
  padding: 50px 25px;
`,BG=N.p`

  @media (min-width: 768px){
    font-size: 22px;
  }
`,HG=N.p`
  font-weight: bold;
  font-size: 20px;

  @media (min-width: 768px){
    font-size: 28px;
  }
`,WG=N.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  height: 80vh;
  font-size: 26px;
`,qG=N.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,GG=N.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px){
      margin-top: 40px;
    }

  button{
    margin: 0 20px;
    padding: 5px 10px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: transform 0.3s;
    font-family: 'Montserrat', sans-serif;

    &:hover {
      transform: scale(1.05);
    }

    @media (min-width: 768px){
      font-size: 18px;
      padding: 9px 18px;
    }
  }
`,KG=N.button`
  background-color: #f05454;
  transition: background-color 0.3s;
  &:hover {
      background-color: rgb(245, 59, 59);
    }
`,YG=N.p`
  margin-top: 20px;
  color: green;
`,QG=N.p`
  text-align: center;
  font-size: 10px;

  @media (min-width: 768px){
    font-size: 12px;
  }
`;function XG(){const e=Cn(pa),t=e.reduce((l,u)=>l+u.price,0).toFixed(2),[n,r]=b.exports.useState(!1),[i]=jr(gn),s=Mi(),o=Li(),a=()=>{r(!0),setTimeout(()=>{o(_l(i==null?void 0:i.uid)),s("/")},3e3)};return X(LG,{children:[S(ma,{children:S(FG,{as:Ss.div,initial:{scale:0},animate:{scale:1},children:e.length?X(Yn,{children:[S(VG,{children:X(jG,{children:[S("p",{children:"Shopping Cart"}),X("p",{children:[e.length," Items"]})]})}),S(UG,{children:e.map((l,u)=>S($G,{index:u,item:l},`${l.id}_${u}`))}),X(zG,{children:[X(qG,{children:[S(BG,{children:"Total Cost:"}),X(HG,{children:["$",t]})]}),X(GG,{children:[S("button",{onClick:()=>o(_l(i==null?void 0:i.uid)),children:"Delete all"}),S(KG,{onClick:a,children:"Checkout"})]}),n&&X(Yn,{children:[S(YG,{children:"Thanks for odering!"}),S(QG,{children:"You will soon be redirected to the home page."})]})]})]}):S(WG,{children:"Your cart is empty"})})}),S(ga,{})]})}const JG={isShow:!1,selectedBrand:"",showModal:!1},_$=n$({name:"categories",initialState:JG,reducers:{toggleShow:e=>{e.isShow===!1?e.isShow=!0:e.isShow=!1},changeBrand:(e,t)=>{e.selectedBrand=t.payload},openModal:(e,t)=>{e.showModal=t.payload}}}),{toggleShow:S$,changeBrand:Qs,openModal:Xm}=_$.actions,Lw=e=>e.categories.isShow,ZG=e=>e.categories.showModal,x$=e=>e.categories.selectedBrand,eK=_$.reducer,tK=N.aside`
position: fixed;
margin-top: -20px;
margin-bottom: 15px;
transform: translateX(-105%);
padding: 20px 0;
width: 100%;
background-color: #222831;
z-index: 100;
opacity: 0;
transition: transform 0.3s, opacity 0.3s;


${({showCategories:e})=>e&&Rn`
  transform: translate(0);
  opacity: 1;
`}

@media (min-width: 768px){
  display: none;
}
`,nK=N.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`,rK=N.h1`
color: #F05454;
border-bottom: 2px solid gray;
font-size: 16px;
margin-top: 0.5em;
margin-bottom: 0.5em;
  text-transform: uppercase;

  @media (min-width: 576px) {
    font-size: 20px;
  }
`,iK=N.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
`,Ra=N.h2`
text-align: center;
margin-bottom: 10px;
padding: 0.2em;
font-size: 14px;
color: rgb(201, 201, 199);
cursor: pointer;
transition: transform 0.2s, color 0.2s;

${({isHighlighted:e})=>e&&Rn`
  color: #F05454;
`}

&:hover {
  transform: scale(1.15);
  color: white;
}

@media (min-width: 576px) {
  font-size: 18px;
}

`;function sK(){const e=Li(),t=Cn(x$),n=Cn(Lw),r=i=>{e(Qs(i)),e(S$())};return S(tK,{showCategories:n,children:S(w$,{children:S(iK,{children:X(nK,{children:[S(rK,{children:"Brand:"}),S(Ra,{onClick:()=>r(""),isHighlighted:t==="",children:"All"}),S(Ra,{onClick:()=>r("Adidas"),isHighlighted:t==="Adidas",children:"Adidas"}),S(Ra,{onClick:()=>r("Nike"),isHighlighted:t==="Nike",children:"Nike"}),S(Ra,{onClick:()=>r("New Balance"),isHighlighted:t==="New Balance",children:"New Balance"}),S(Ra,{onClick:()=>r("Vans"),isHighlighted:t==="Vans",children:"Vans"})]})})})})}const oK=N.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,Tb=N.h1`
  text-align: center;
  font-size: 24px;
`,aK=N.h1`
  display: none;
  text-align: center;
  font-size: 24px;

  @media (min-width: 768px) {
    display: block;
  }
`,lK=N.div`
display: none;
justify-content: center;
align-items: center;

@media (min-width: 768px) {
  display: flex;
}
`,uK=N.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
`,Uc=N.button`
  margin: 10px 5px 20px;
  background-color: #222831;
  border: none;
  color: white;
  border-radius: 10px;
  padding: 5px 10px;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;

  ${({isActive:e})=>e&&Rn`
  transform: scale(1.1);
    background-color: #F05454;
  `}

  &:hover {
    transform: scale(1.1);
    background-color: #F05454;
  }

  @media (min-width: 576px){
    padding: 8px 16px;
  }

  @media (min-width: 850px){
    padding: 10px 20px;
  }

  @media (min-width: 1120px){
    padding: 12px 24px;
  }
`,$a=N.button`
  margin: 10px 5px 0;
  background-color: #222831;
  border: none;
  color: white;
  border-radius: 10px;
  padding: 5px 10px;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;

  ${({isHighlighted:e})=>e&&Rn`
  transform: scale(1.1);
    background-color: #F05454;
  `}

  &:hover {
    transform: scale(1.1);
    background-color: #F05454;
  }

  @media (min-width: 576px){
    padding: 8px 16px;
  }

  @media (min-width: 850px){
    padding: 10px 20px;
  }

  @media (min-width: 1120px){
    padding: 12px 24px;
  }
`,cK=N.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;

  select {
    margin-top: 10px;
  }
`,dK=N.div`
  position: relative;
  min-height: 100vh;
`,fK=N(EG)`
    position: fixed;
    bottom: -50px;
    right: 20px;
    font-size: 25px;
    cursor: pointer;
    transition: bottom 0.3s, transform 0.3s;
    ${({showArrowIcon:e})=>e&&Rn`
      bottom: 20px;
    `}

    &:hover {
      transform: scale(1.1);
    }

    @media (min-width: 768px){
    font-size: 40px;
    }

    @media (min-width: 1024px){
    font-size: 45px;
    }
`,hK=N.div`
overflow: hidden;
border-radius: 10px;
width: 250px;
margin: 10px;
height: 450px;
background-color: #222831;
box-shadow: 0 0 5px gray;
cursor: pointer;
transition: transform 0.2s;

&:hover {
  transform: translateY(-10px);

}

@media (min-width: 1200px){
  margin: 12px;
}
`,pK=N.img`
object-fit: cover;
  width: 100%;
  height: 80%;
`,mK=N.div`
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
margin: 8px;
  color: white;
  
`,gK=N.p`
  color: gold;
`,yK=N.p`
  font-weight: lighter;
  padding: 4px 0;
  color: #eeeeee;
  font-size: 12px;
`;function vK({shoe:e}){const{id:t,price:n,category:r,brand:i,shortBrand:s,description:o,images:a}=e,l=Mi();return X(hK,{onClick:()=>l(`/product/${t}`),children:[S(pK,{loading:"lazy",width:250,height:360,src:a[0]}),X(mK,{children:[S("p",{children:i}),S(yK,{children:o}),X(gK,{children:["$",n]})]})]})}var wK=function(e){return{display:e?"flex":"none"}},Cb="#4fa94d",_K={"aria-busy":!0,role:"status"},Ib=globalThis&&globalThis.__assign||function(){return Ib=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ib.apply(this,arguments)},kb=globalThis&&globalThis.__assign||function(){return kb=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},kb.apply(this,arguments)},Ab=globalThis&&globalThis.__assign||function(){return Ab=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ab.apply(this,arguments)},Ob=globalThis&&globalThis.__assign||function(){return Ob=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ob.apply(this,arguments)},Pb=globalThis&&globalThis.__assign||function(){return Pb=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Pb.apply(this,arguments)},Db=globalThis&&globalThis.__assign||function(){return Db=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Db.apply(this,arguments)},Rb=globalThis&&globalThis.__assign||function(){return Rb=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Rb.apply(this,arguments)},E$=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Fn=242.776657104492,SK=1.6,xK=Mw($b||($b=E$([`
  12.5% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  43.75% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  100% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
`],[`
  12.5% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  43.75% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  100% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
`])),Fn*.14,Fn,Fn*.11,Fn*.35,Fn,Fn*.35,Fn*.01,Fn,Fn*.99);N.path(Nb||(Nb=E$([`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`],[`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`])),Fn*.01,Fn,xK,SK);var $b,Nb,Mb=globalThis&&globalThis.__assign||function(){return Mb=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Mb.apply(this,arguments)},xl=globalThis&&globalThis.__assign||function(){return xl=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},xl.apply(this,arguments)},Fw=function(e){var t=e.height,n=t===void 0?90:t,r=e.width,i=r===void 0?80:r,s=e.radius,o=s===void 0?12.5:s,a=e.color,l=a===void 0?Cb:a,u=e.secondaryColor,c=u===void 0?Cb:u,d=e.ariaLabel,f=d===void 0?"mutating-dots-loading":d,h=e.wrapperStyle,p=e.wrapperClass,y=e.visible,w=y===void 0?!0:y;return S("div",{...xl({style:xl(xl({},wK(w)),h),className:p,"data-testid":"mutating-dots-loading","aria-label":f},_K),children:X("svg",{id:"goo-loader",width:i,height:n,"data-testid":"mutating-dots-svg",children:[X("filter",{id:"fancy-goo",children:[S("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"6",result:"blur"}),S("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",result:"goo"}),S("feComposite",{in:"SourceGraphic",in2:"goo",operator:"atop"})]}),X("g",{filter:"url(#fancy-goo)",children:[S("animateTransform",{id:"mainAnim",attributeName:"transform",attributeType:"XML",type:"rotate",from:"0 50 50",to:"359 50 50",dur:"1.2s",repeatCount:"indefinite"}),S("circle",{cx:"50%",cy:"40",r:o,fill:l,children:S("animate",{id:"cAnim1",attributeType:"XML",attributeName:"cy",dur:"0.6s",begin:"0;cAnim1.end+0.2s",calcMode:"spline",values:"40;20;40",keyTimes:"0;0.3;1",keySplines:"0.09, 0.45, 0.16, 1;0.09, 0.45, 0.16, 1"})}),S("circle",{cx:"50%",cy:"60",r:o,fill:c,children:S("animate",{id:"cAnim2",attributeType:"XML",attributeName:"cy",dur:"0.6s",begin:"0.4s;cAnim2.end+0.2s",calcMode:"spline",values:"60;80;60",keyTimes:"0;0.3;1",keySplines:"0.09, 0.45, 0.16, 1;0.09, 0.45, 0.16, 1"})})]})]})})},Lb=globalThis&&globalThis.__assign||function(){return Lb=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Lb.apply(this,arguments)},Fb=globalThis&&globalThis.__assign||function(){return Fb=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Fb.apply(this,arguments)},Vb=globalThis&&globalThis.__assign||function(){return Vb=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Vb.apply(this,arguments)},jb=globalThis&&globalThis.__assign||function(){return jb=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},jb.apply(this,arguments)},Ub=globalThis&&globalThis.__assign||function(){return Ub=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ub.apply(this,arguments)},EK=function(t,n){return function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(typeof r[t]<"u")return r[t];if(t&&t.indexOf(".")>0){for(var i=t.split("."),s=i.length,o=r[i[0]],a=1;o!=null&&a<s;)o=o[i[a]],a+=1;if(typeof o<"u")return o}return n}},Vw=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},zb=globalThis&&globalThis.__assign||function(){return zb=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},zb.apply(this,arguments)},bK=Mw(Bb||(Bb=Vw([`
 to {
    transform: rotate(360deg);
  }
`],[`
 to {
    transform: rotate(360deg);
  }
`])));N.svg(Hb||(Hb=Vw([`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`],[`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`])),bK,EK("speed","0.75"));N.polyline(Wb||(Wb=Vw([`
  stroke-width: `,`px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`],[`
  stroke-width: `,`px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`])),function(e){return e.width});var Bb,Hb,Wb,qb=globalThis&&globalThis.__assign||function(){return qb=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},qb.apply(this,arguments)},Gb=globalThis&&globalThis.__assign||function(){return Gb=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Gb.apply(this,arguments)},Kb=globalThis&&globalThis.__assign||function(){return Kb=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Kb.apply(this,arguments)},jw=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Yb=globalThis&&globalThis.__assign||function(){return Yb=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Yb.apply(this,arguments)},TK=Mw(Qb||(Qb=jw([`
 to {
    stroke-dashoffset: 136;
  }
`],[`
 to {
    stroke-dashoffset: 136;
  }
`])));N.polygon(Xb||(Xb=jw([`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`],[`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`])),TK);N.svg(Jb||(Jb=jw([`
  transform-origin: 50% 65%;
`],[`
  transform-origin: 50% 65%;
`])));var Qb,Xb,Jb,Zb=globalThis&&globalThis.__assign||function(){return Zb=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Zb.apply(this,arguments)},eT=globalThis&&globalThis.__assign||function(){return eT=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},eT.apply(this,arguments)},tT=globalThis&&globalThis.__assign||function(){return tT=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},tT.apply(this,arguments)},nT=globalThis&&globalThis.__assign||function(){return nT=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},nT.apply(this,arguments)},rT=globalThis&&globalThis.__assign||function(){return rT=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},rT.apply(this,arguments)},iT=globalThis&&globalThis.__assign||function(){return iT=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},iT.apply(this,arguments)},sT=globalThis&&globalThis.__assign||function(){return sT=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},sT.apply(this,arguments)},oT=globalThis&&globalThis.__assign||function(){return oT=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},oT.apply(this,arguments)},aT=globalThis&&globalThis.__assign||function(){return aT=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},aT.apply(this,arguments)},lT=globalThis&&globalThis.__assign||function(){return lT=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},lT.apply(this,arguments)},uT=globalThis&&globalThis.__assign||function(){return uT=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},uT.apply(this,arguments)},cT=globalThis&&globalThis.__assign||function(){return cT=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},cT.apply(this,arguments)},dT=globalThis&&globalThis.__assign||function(){return dT=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},dT.apply(this,arguments)};function CK(){Cn(Lw);const e=Cn(x$),t=Li(),[n,r]=b.exports.useState(""),[i,s]=b.exports.useState("Popular");jr(gn);const[o,a]=b.exports.useState(null),[l,u]=b.exports.useState(!0),[c,d]=b.exports.useState(0);Cn(pa);const f=async()=>{const w=(await Xo(Yo(ln,"products"))).docs.map(v=>v.data());a(w),u(!1)};b.exports.useEffect(()=>{f()},[]),b.exports.useEffect(()=>{const y=()=>{d(window.pageYOffset)};return window.addEventListener("scroll",y),y(),()=>window.removeEventListener("scroll",y)},[]);const h=()=>{window.scrollTo({top:0,behavior:"smooth"})},p=(y,w)=>{switch(i){case"Lowest":return y.price-w.price;case"Highest":return w.price-y.price;default:return 0}};return X(dK,{as:Ss.div,initial:{width:0},animate:{width:"100%"},children:[S(sK,{}),X(ma,{children:[S(Tb,{children:"Category:"}),X(oK,{children:[S(Uc,{onClick:()=>r(""),isActive:!n,children:"All"}),S(Uc,{onClick:()=>r("woman"),isActive:n==="woman",children:"Women"}),S(Uc,{onClick:()=>r("man"),isActive:n==="man",children:"Men"}),S(Uc,{onClick:()=>r("kids"),isActive:n==="kids",children:"Kids"})]}),S(aK,{children:"Brand:"}),X(lK,{children:[S($a,{onClick:()=>t(Qs("")),isHighlighted:!e,children:"All"}),S($a,{onClick:()=>t(Qs("Adidas")),isHighlighted:e==="Adidas",children:"Adidas"}),S($a,{onClick:()=>t(Qs("Nike")),isHighlighted:e==="Nike",children:"Nike"}),S($a,{onClick:()=>t(Qs("New Balance")),isHighlighted:e==="New Balance",children:"New Balance"}),S($a,{onClick:()=>t(Qs("Vans")),isHighlighted:e==="Vans",children:"Vans"})]}),X(cK,{children:[S(Tb,{children:"Sort by:"}),X("select",{value:i,onChange:y=>s(y.target.value),children:[S("option",{value:"Popular",children:"Most popular"}),S("option",{value:"Lowest",children:"Lowest price"}),S("option",{value:"Highest",children:"Highest price"})]})]}),S(uK,{children:l?S(Fw,{color:"#ef5454",secondaryColor:"#ef5454"}):S(Yn,{children:o==null?void 0:o.filter(({category:y})=>!n||y===n).filter(({shortBrand:y})=>y===e||!e).sort((y,w)=>p(y,w)).map(y=>S(vK,{shoe:y},y.id))})})]}),S(fK,{onClick:h,showArrowIcon:c>=500}),!l&&S(ga,{})]})}const IK=N.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`,kK=N.p`
font-size: 10px;
padding-top: 20px;

  @media (min-width: 576px) {
   font-size: 20px;
  }
`,AK=N.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
position: relative;
  min-height: 350px;
  max-width: 700px;
  width: 100%;
  border-radius: 6px;
  box-shadow: 0 0 10px gray;
  background-color: white;

p {
  color: black;
  margin: 10px 0;
}

  img {
    display: none;

    @media (min-width: 576px){
      display: block;
    position: absolute;
    top: 10px;
    right: 10px;
    width: 75px;
    height: 75px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 576px) {
   height: 450px;
  }

  input {
    padding: 10px 20px;
    border-radius: 6px;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    border: 1px solid black;
    font-family: 'Montserrat', sans-serif;
    box-shadow: 0 0 10px gray;

    &:focus {
      outline: transparent;
    }

    @media (min-width: 576px) {
   font-size: 18px;
  }
  }
`,fT=N.button`
    padding: 4px 8px;
    border-radius: 6px;
    width: 100px;
    border: none;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    background-color: #F05454;
    color: black;
    transition: transform 0.3s, background-color 0.3s;

    &:hover {
      transform: scale(1.05);
      background-color: rgb(245, 59, 59);
    }

    @media (min-width: 576px) {
      width: 160px;
      padding: 10px 20px;
  }
  `,OK=N.button`
    background-color: transparent;
    border: none;
    color: #F05454;
    text-decoration: underline;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: red;
    }

    @media (min-width: 576px) {
      font-size: 20px;
    }
  `,hT=N.p`
    color: red;
    text-align: center;
    font-size: 10px;
  
  @media (min-width: 576px) {
    font-size: 12px;
  }
  `,PK=N.div`
  position: relative;
  min-height: 100vh;
`;var tc=e=>e.type==="checkbox",yo=e=>e instanceof Date,Vt=e=>e==null;const b$=e=>typeof e=="object";var Et=e=>!Vt(e)&&!Array.isArray(e)&&b$(e)&&!yo(e),DK=e=>Et(e)&&e.target?tc(e.target)?e.target.checked:e.target.value:e,RK=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,$K=(e,t)=>e.has(RK(t)),nc=e=>Array.isArray(e)?e.filter(Boolean):[],dt=e=>e===void 0,Z=(e,t,n)=>{if(!t||!Et(e))return n;const r=nc(t.split(/[,[\].]+?/)).reduce((i,s)=>Vt(i)?i:i[s],e);return dt(r)||r===e?dt(e[t])?n:e[t]:r};const pT={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Bn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},mr={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};Ye.createContext(null);var NK=(e,t,n,r=!0)=>{const i={defaultValues:t._defaultValues};for(const s in e)Object.defineProperty(i,s,{get:()=>{const o=s;return t._proxyFormState[o]!==Bn.all&&(t._proxyFormState[o]=!r||Bn.all),n&&(n[o]=!0),e[o]}});return i},vn=e=>Et(e)&&!Object.keys(e).length,MK=(e,t,n)=>{const{name:r,...i}=e;return vn(i)||Object.keys(i).length>=Object.keys(t).length||Object.keys(i).find(s=>t[s]===(!n||Bn.all))},Jm=e=>Array.isArray(e)?e:[e];function LK(e){const t=Ye.useRef(e);t.current=e,Ye.useEffect(()=>{const n=!e.disabled&&t.current.subject.subscribe({next:t.current.callback});return()=>{n&&n.unsubscribe()}},[e.disabled])}var ir=e=>typeof e=="string",FK=(e,t,n,r)=>{const i=Array.isArray(e);return ir(e)?(r&&t.watch.add(e),Z(n,e)):i?e.map(s=>(r&&t.watch.add(s),Z(n,s))):(r&&(t.watchAll=!0),n)},jf=e=>typeof e=="function",T$=e=>{for(const t in e)if(jf(e[t]))return!0;return!1},C$=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{},Uw=e=>/^\w*$/.test(e),I$=e=>nc(e.replace(/["|']|\]/g,"").split(/\.|\[/));function $e(e,t,n){let r=-1;const i=Uw(t)?[t]:I$(t),s=i.length,o=s-1;for(;++r<s;){const a=i[r];let l=n;if(r!==o){const u=e[a];l=Et(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}e[a]=l,e=e[a]}return e}const fv=(e,t,n)=>{for(const r of n||Object.keys(e)){const i=Z(e,r);if(i){const{_f:s,...o}=i;if(s&&t(s.name)){if(s.ref.focus){s.ref.focus();break}else if(s.refs&&s.refs[0].focus){s.refs[0].focus();break}}else Et(o)&&fv(o,t)}}};var mT=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length)))),VK=(e,t,n)=>{const r=nc(Z(e,n));return $e(r,"root",t[n]),$e(e,n,r),e},Uf=e=>typeof e=="boolean",zw=e=>e.type==="file",vd=e=>ir(e)||Ye.isValidElement(e),Bw=e=>e.type==="radio",zf=e=>e instanceof RegExp;const gT={value:!1,isValid:!1},yT={value:!0,isValid:!0};var k$=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!dt(e[0].attributes.value)?dt(e[0].value)||e[0].value===""?yT:{value:e[0].value,isValid:!0}:yT:gT}return gT};const vT={isValid:!1,value:null};var A$=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,vT):vT;function wT(e,t,n="validate"){if(vd(e)||Array.isArray(e)&&e.every(vd)||Uf(e)&&!e)return{type:n,message:vd(e)?e:"",ref:t}}var Ks=e=>Et(e)&&!zf(e)?e:{value:e,message:""},_T=async(e,t,n,r,i)=>{const{ref:s,refs:o,required:a,maxLength:l,minLength:u,min:c,max:d,pattern:f,validate:h,name:p,valueAsNumber:y,mount:w,disabled:v}=e._f;if(!w||v)return{};const m=o?o[0]:s,g=K=>{r&&m.reportValidity&&(m.setCustomValidity(Uf(K)?"":K||" "),m.reportValidity())},_={},E=Bw(s),I=tc(s),C=E||I,O=(y||zw(s))&&!s.value||t===""||Array.isArray(t)&&!t.length,z=C$.bind(null,p,n,_),F=(K,Y,se,ce=mr.maxLength,de=mr.minLength)=>{const fe=K?Y:se;_[p]={type:K?ce:de,message:fe,ref:s,...z(K?ce:de,fe)}};if(i?!Array.isArray(t)||!t.length:a&&(!C&&(O||Vt(t))||Uf(t)&&!t||I&&!k$(o).isValid||E&&!A$(o).isValid)){const{value:K,message:Y}=vd(a)?{value:!!a,message:a}:Ks(a);if(K&&(_[p]={type:mr.required,message:Y,ref:m,...z(mr.required,Y)},!n))return g(Y),_}if(!O&&(!Vt(c)||!Vt(d))){let K,Y;const se=Ks(d),ce=Ks(c);if(!Vt(t)&&!isNaN(t)){const de=s.valueAsNumber||t&&+t;Vt(se.value)||(K=de>se.value),Vt(ce.value)||(Y=de<ce.value)}else{const de=s.valueAsDate||new Date(t);ir(se.value)&&(K=de>new Date(se.value)),ir(ce.value)&&(Y=de<new Date(ce.value))}if((K||Y)&&(F(!!K,se.message,ce.message,mr.max,mr.min),!n))return g(_[p].message),_}if((l||u)&&!O&&(ir(t)||i&&Array.isArray(t))){const K=Ks(l),Y=Ks(u),se=!Vt(K.value)&&t.length>K.value,ce=!Vt(Y.value)&&t.length<Y.value;if((se||ce)&&(F(se,K.message,Y.message),!n))return g(_[p].message),_}if(f&&!O&&ir(t)){const{value:K,message:Y}=Ks(f);if(zf(K)&&!t.match(K)&&(_[p]={type:mr.pattern,message:Y,ref:s,...z(mr.pattern,Y)},!n))return g(Y),_}if(h){if(jf(h)){const K=await h(t),Y=wT(K,m);if(Y&&(_[p]={...Y,...z(mr.validate,Y.message)},!n))return g(Y.message),_}else if(Et(h)){let K={};for(const Y in h){if(!vn(K)&&!n)break;const se=wT(await h[Y](t),m,Y);se&&(K={...se,...z(Y,se.message)},g(se.message),n&&(_[p]=K))}if(!vn(K)&&(_[p]={ref:m,...K},!n))return _}}return g(!0),_},jK=e=>{const t=e.constructor&&e.constructor.prototype;return Et(t)&&t.hasOwnProperty("isPrototypeOf")},hv=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Xi(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(hv&&(e instanceof Blob||e instanceof FileList))&&(n||Et(e)))if(t=n?[]:{},!Array.isArray(e)&&!jK(e))t=e;else for(const r in e)t[r]=Xi(e[r]);else return e;return t}var ST=e=>({isOnSubmit:!e||e===Bn.onSubmit,isOnBlur:e===Bn.onBlur,isOnChange:e===Bn.onChange,isOnAll:e===Bn.all,isOnTouch:e===Bn.onTouched});function UK(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=dt(e)?r++:e[t[r++]];return e}function zK(e){for(const t in e)if(!dt(e[t]))return!1;return!0}function Mt(e,t){const n=Uw(t)?[t]:I$(t),r=n.length==1?e:UK(e,n),i=n[n.length-1];let s;r&&delete r[i];for(let o=0;o<n.slice(0,-1).length;o++){let a=-1,l;const u=n.slice(0,-(o+1)),c=u.length-1;for(o>0&&(s=e);++a<u.length;){const d=u[a];l=l?l[d]:e[d],c===a&&(Et(l)&&vn(l)||Array.isArray(l)&&zK(l))&&(s?delete s[d]:delete e[d]),s=l}}return e}function Zm(){let e=[];return{get observers(){return e},next:i=>{for(const s of e)s.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(s=>s!==i)}}),unsubscribe:()=>{e=[]}}}var Bf=e=>Vt(e)||!b$(e);function vo(e,t){if(Bf(e)||Bf(t))return e===t;if(yo(e)&&yo(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n){const s=e[i];if(!r.includes(i))return!1;if(i!=="ref"){const o=t[i];if(yo(s)&&yo(o)||Et(s)&&Et(o)||Array.isArray(s)&&Array.isArray(o)?!vo(s,o):s!==o)return!1}}return!0}var pv=e=>{const t=e?e.ownerDocument:0,n=t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement;return e instanceof n},O$=e=>e.type==="select-multiple",BK=e=>Bw(e)||tc(e),eg=e=>pv(e)&&e.isConnected;function Hf(e,t={}){const n=Array.isArray(e);if(Et(e)||n)for(const r in e)Array.isArray(e[r])||Et(e[r])&&!T$(e[r])?(t[r]=Array.isArray(e[r])?[]:{},Hf(e[r],t[r])):Vt(e[r])||(t[r]=!0);return t}function P$(e,t,n){const r=Array.isArray(e);if(Et(e)||r)for(const i in e)Array.isArray(e[i])||Et(e[i])&&!T$(e[i])?dt(t)||Bf(n[i])?n[i]=Array.isArray(e[i])?Hf(e[i],[]):{...Hf(e[i])}:P$(e[i],Vt(t)?{}:t[i],n[i]):n[i]=!vo(e[i],t[i]);return n}var tg=(e,t)=>P$(e,t,Hf(t)),D$=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>dt(e)?e:t?e===""?NaN:e&&+e:n&&ir(e)?new Date(e):r?r(e):e;function ng(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return zw(t)?t.files:Bw(t)?A$(e.refs).value:O$(t)?[...t.selectedOptions].map(({value:n})=>n):tc(t)?k$(e.refs).value:D$(dt(t.value)?e.ref.value:t.value,e)}var HK=(e,t,n,r)=>{const i={};for(const s of e){const o=Z(t,s);o&&$e(i,s,o._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},Na=e=>dt(e)?void 0:zf(e)?e.source:Et(e)?zf(e.value)?e.value.source:e.value:e,WK=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function xT(e,t,n){const r=Z(e,n);if(r||Uw(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const s=i.join("."),o=Z(t,s),a=Z(e,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(a&&a.type)return{name:s,error:a};i.pop()}return{name:n}}var qK=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:(n?r.isOnChange:i.isOnChange)?e:!0,GK=(e,t)=>!nc(Z(e,t)).length&&Mt(e,t);const KK={mode:Bn.onSubmit,reValidateMode:Bn.onChange,shouldFocusError:!0};function YK(e={}){let t={...KK,...e},n={submitCount:0,isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},r={},i=Xi(t.defaultValues)||{},s=t.shouldUnregister?{}:Xi(i),o={action:!1,mount:!1,watch:!1},a={mount:new Set,unMount:new Set,array:new Set,watch:new Set},l,u=0,c={};const d={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},f={watch:Zm(),array:Zm(),state:Zm()},h=ST(t.mode),p=ST(t.reValidateMode),y=t.criteriaMode===Bn.all,w=x=>T=>{clearTimeout(u),u=window.setTimeout(x,T)},v=async x=>{let T=!1;return d.isValid&&(T=t.resolver?vn((await C()).errors):await z(r,!0),!x&&T!==n.isValid&&(n.isValid=T,f.state.next({isValid:T}))),T},m=(x,T=[],A,W,L=!0,R=!0)=>{if(W&&A){if(o.action=!0,R&&Array.isArray(Z(r,x))){const B=A(Z(r,x),W.argA,W.argB);L&&$e(r,x,B)}if(d.errors&&R&&Array.isArray(Z(n.errors,x))){const B=A(Z(n.errors,x),W.argA,W.argB);L&&$e(n.errors,x,B),GK(n.errors,x)}if(d.touchedFields&&R&&Array.isArray(Z(n.touchedFields,x))){const B=A(Z(n.touchedFields,x),W.argA,W.argB);L&&$e(n.touchedFields,x,B)}d.dirtyFields&&(n.dirtyFields=tg(i,s)),f.state.next({isDirty:K(x,T),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else $e(s,x,T)},g=(x,T)=>{$e(n.errors,x,T),f.state.next({errors:n.errors})},_=(x,T,A,W)=>{const L=Z(r,x);if(L){const R=Z(s,x,dt(A)?Z(i,x):A);dt(R)||W&&W.defaultChecked||T?$e(s,x,T?R:ng(L._f)):ce(x,R),o.mount&&v()}},E=(x,T,A,W,L)=>{let R=!1;const B={name:x},ge=Z(n.touchedFields,x);if(d.isDirty){const nt=n.isDirty;n.isDirty=B.isDirty=K(),R=nt!==B.isDirty}if(d.dirtyFields&&(!A||W)){const nt=Z(n.dirtyFields,x);vo(Z(i,x),T)?Mt(n.dirtyFields,x):$e(n.dirtyFields,x,!0),B.dirtyFields=n.dirtyFields,R=R||nt!==Z(n.dirtyFields,x)}return A&&!ge&&($e(n.touchedFields,x,A),B.touchedFields=n.touchedFields,R=R||d.touchedFields&&ge!==A),R&&L&&f.state.next(B),R?B:{}},I=async(x,T,A,W)=>{const L=Z(n.errors,x),R=d.isValid&&n.isValid!==T;if(e.delayError&&A?(l=w(()=>g(x,A)),l(e.delayError)):(clearTimeout(u),l=null,A?$e(n.errors,x,A):Mt(n.errors,x)),(A?!vo(L,A):L)||!vn(W)||R){const B={...W,...R?{isValid:T}:{},errors:n.errors,name:x};n={...n,...B},f.state.next(B)}c[x]--,d.isValidating&&!Object.values(c).some(B=>B)&&(f.state.next({isValidating:!1}),c={})},C=async x=>t.resolver?await t.resolver({...s},t.context,HK(x||a.mount,r,t.criteriaMode,t.shouldUseNativeValidation)):{},O=async x=>{const{errors:T}=await C();if(x)for(const A of x){const W=Z(T,A);W?$e(n.errors,A,W):Mt(n.errors,A)}else n.errors=T;return T},z=async(x,T,A={valid:!0})=>{for(const W in x){const L=x[W];if(L){const{_f:R,...B}=L;if(R){const ge=a.array.has(R.name),nt=await _T(L,Z(s,R.name),y,t.shouldUseNativeValidation,ge);if(nt[R.name]&&(A.valid=!1,T))break;!T&&(Z(nt,R.name)?ge?VK(n.errors,nt,R.name):$e(n.errors,R.name,nt[R.name]):Mt(n.errors,R.name))}B&&await z(B,T,A)}}return A.valid},F=()=>{for(const x of a.unMount){const T=Z(r,x);T&&(T._f.refs?T._f.refs.every(A=>!eg(A)):!eg(T._f.ref))&&G(x)}a.unMount=new Set},K=(x,T)=>(x&&T&&$e(s,x,T),!vo(re(),i)),Y=(x,T,A)=>{const W={...o.mount?s:dt(T)?i:ir(x)?{[x]:T}:T};return FK(x,a,W,A)},se=x=>nc(Z(o.mount?s:i,x,e.shouldUnregister?Z(i,x,[]):[])),ce=(x,T,A={})=>{const W=Z(r,x);let L=T;if(W){const R=W._f;R&&(!R.disabled&&$e(s,x,D$(T,R)),L=hv&&pv(R.ref)&&Vt(T)?"":T,O$(R.ref)?[...R.ref.options].forEach(B=>B.selected=L.includes(B.value)):R.refs?tc(R.ref)?R.refs.length>1?R.refs.forEach(B=>(!B.defaultChecked||!B.disabled)&&(B.checked=Array.isArray(L)?!!L.find(ge=>ge===B.value):L===B.value)):R.refs[0]&&(R.refs[0].checked=!!L):R.refs.forEach(B=>B.checked=B.value===L):zw(R.ref)?R.ref.value="":(R.ref.value=L,R.ref.type||f.watch.next({name:x})))}(A.shouldDirty||A.shouldTouch)&&E(x,L,A.shouldTouch,A.shouldDirty,!0),A.shouldValidate&&V(x)},de=(x,T,A)=>{for(const W in T){const L=T[W],R=`${x}.${W}`,B=Z(r,R);(a.array.has(x)||!Bf(L)||B&&!B._f)&&!yo(L)?de(R,L,A):ce(R,L,A)}},fe=(x,T,A={})=>{const W=Z(r,x),L=a.array.has(x),R=Xi(T);$e(s,x,R),L?(f.array.next({name:x,values:s}),(d.isDirty||d.dirtyFields)&&A.shouldDirty&&(n.dirtyFields=tg(i,s),f.state.next({name:x,dirtyFields:n.dirtyFields,isDirty:K(x,R)}))):W&&!W._f&&!Vt(R)?de(x,R,A):ce(x,R,A),mT(x,a)&&f.state.next({}),f.watch.next({name:x})},Ee=async x=>{const T=x.target;let A=T.name;const W=Z(r,A);if(W){let L,R;const B=T.type?ng(W._f):DK(x),ge=x.type===pT.BLUR||x.type===pT.FOCUS_OUT,nt=!WK(W._f)&&!t.resolver&&!Z(n.errors,A)&&!W._f.deps||qK(ge,Z(n.touchedFields,A),n.isSubmitted,p,h),qe=mT(A,a,ge);$e(s,A,B),ge?(W._f.onBlur&&W._f.onBlur(x),l&&l(0)):W._f.onChange&&W._f.onChange(x);const Br=E(A,B,ge,!1),zi=!vn(Br)||qe;if(!ge&&f.watch.next({name:A,type:x.type}),nt)return zi&&f.state.next({name:A,...qe?{}:Br});if(!ge&&qe&&f.state.next({}),c[A]=(c[A],1),f.state.next({isValidating:!0}),t.resolver){const{errors:Gt}=await C([A]),le=xT(n.errors,r,A),Ve=xT(Gt,r,le.name||A);L=Ve.error,A=Ve.name,R=vn(Gt)}else L=(await _T(W,Z(s,A),y,t.shouldUseNativeValidation))[A],R=await v(!0);W._f.deps&&V(W._f.deps),I(A,R,L,Br)}},V=async(x,T={})=>{let A,W;const L=Jm(x);if(f.state.next({isValidating:!0}),t.resolver){const R=await O(dt(x)?x:L);A=vn(R),W=x?!L.some(B=>Z(R,B)):A}else x?(W=(await Promise.all(L.map(async R=>{const B=Z(r,R);return await z(B&&B._f?{[R]:B}:B)}))).every(Boolean),!(!W&&!n.isValid)&&v()):W=A=await z(r);return f.state.next({...!ir(x)||d.isValid&&A!==n.isValid?{}:{name:x},...t.resolver?{isValid:A}:{},errors:n.errors,isValidating:!1}),T.shouldFocus&&!W&&fv(r,R=>Z(n.errors,R),x?L:a.mount),W},re=x=>{const T={...i,...o.mount?s:{}};return dt(x)?T:ir(x)?Z(T,x):x.map(A=>Z(T,A))},q=(x,T)=>({invalid:!!Z((T||n).errors,x),isDirty:!!Z((T||n).dirtyFields,x),isTouched:!!Z((T||n).touchedFields,x),error:Z((T||n).errors,x)}),D=x=>{x?Jm(x).forEach(T=>Mt(n.errors,T)):n.errors={},f.state.next({errors:n.errors})},P=(x,T,A)=>{const W=(Z(r,x,{_f:{}})._f||{}).ref;$e(n.errors,x,{...T,ref:W}),f.state.next({name:x,errors:n.errors,isValid:!1}),A&&A.shouldFocus&&W&&W.focus&&W.focus()},M=(x,T)=>jf(x)?f.watch.subscribe({next:A=>x(Y(void 0,T),A)}):Y(x,T,!0),G=(x,T={})=>{for(const A of x?Jm(x):a.mount)a.mount.delete(A),a.array.delete(A),Z(r,A)&&(T.keepValue||(Mt(r,A),Mt(s,A)),!T.keepError&&Mt(n.errors,A),!T.keepDirty&&Mt(n.dirtyFields,A),!T.keepTouched&&Mt(n.touchedFields,A),!t.shouldUnregister&&!T.keepDefaultValue&&Mt(i,A));f.watch.next({}),f.state.next({...n,...T.keepDirty?{isDirty:K()}:{}}),!T.keepIsValid&&v()},ee=(x,T={})=>{let A=Z(r,x);const W=Uf(T.disabled);return $e(r,x,{...A||{},_f:{...A&&A._f?A._f:{ref:{name:x}},name:x,mount:!0,...T}}),a.mount.add(x),A?W&&$e(s,x,T.disabled?void 0:Z(s,x,ng(A._f))):_(x,!0,T.value),{...W?{disabled:T.disabled}:{},...t.shouldUseNativeValidation?{required:!!T.required,min:Na(T.min),max:Na(T.max),minLength:Na(T.minLength),maxLength:Na(T.maxLength),pattern:Na(T.pattern)}:{},name:x,onChange:Ee,onBlur:Ee,ref:L=>{if(L){ee(x,T),A=Z(r,x);const R=dt(L.value)&&L.querySelectorAll&&L.querySelectorAll("input,select,textarea")[0]||L,B=BK(R),ge=A._f.refs||[];if(B?ge.find(nt=>nt===R):R===A._f.ref)return;$e(r,x,{_f:{...A._f,...B?{refs:[...ge.filter(eg),R,...Array.isArray(Z(i,x))?[{}]:[]],ref:{type:R.type,name:x}}:{ref:R}}}),_(x,!1,void 0,R)}else A=Z(r,x,{}),A._f&&(A._f.mount=!1),(t.shouldUnregister||T.shouldUnregister)&&!($K(a.array,x)&&o.action)&&a.unMount.add(x)}}},k=(x,T)=>async A=>{A&&(A.preventDefault&&A.preventDefault(),A.persist&&A.persist());let W=!0,L=Xi(s);f.state.next({isSubmitting:!0});try{if(t.resolver){const{errors:R,values:B}=await C();n.errors=R,L=B}else await z(r);vn(n.errors)?(f.state.next({errors:{},isSubmitting:!0}),await x(L,A)):(T&&await T({...n.errors},A),t.shouldFocusError&&fv(r,R=>Z(n.errors,R),a.mount))}catch(R){throw W=!1,R}finally{n.isSubmitted=!0,f.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:vn(n.errors)&&W,submitCount:n.submitCount+1,errors:n.errors})}},me=(x,T={})=>{Z(r,x)&&(dt(T.defaultValue)?fe(x,Z(i,x)):(fe(x,T.defaultValue),$e(i,x,T.defaultValue)),T.keepTouched||Mt(n.touchedFields,x),T.keepDirty||(Mt(n.dirtyFields,x),n.isDirty=T.defaultValue?K(x,Z(i,x)):K()),T.keepError||(Mt(n.errors,x),d.isValid&&v()),f.state.next({...n}))},H=(x,T={})=>{const A=x||i,W=Xi(A),L=x&&!vn(x)?W:i;if(T.keepDefaultValues||(i=A),!T.keepValues){if(T.keepDirtyValues)for(const R of a.mount)Z(n.dirtyFields,R)?$e(L,R,Z(s,R)):fe(R,Z(L,R));else{if(hv&&dt(x))for(const R of a.mount){const B=Z(r,R);if(B&&B._f){const ge=Array.isArray(B._f.refs)?B._f.refs[0]:B._f.ref;try{if(pv(ge)){ge.closest("form").reset();break}}catch{}}}r={}}s=e.shouldUnregister?T.keepDefaultValues?Xi(i):{}:W,f.array.next({values:L}),f.watch.next({values:L})}a={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},o.mount=!d.isValid||!!T.keepIsValid,o.watch=!!e.shouldUnregister,f.state.next({submitCount:T.keepSubmitCount?n.submitCount:0,isDirty:T.keepDirty||T.keepDirtyValues?n.isDirty:!!(T.keepDefaultValues&&!vo(x,i)),isSubmitted:T.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:T.keepDirty||T.keepDirtyValues?n.dirtyFields:T.keepDefaultValues&&x?tg(i,x):{},touchedFields:T.keepTouched?n.touchedFields:{},errors:T.keepErrors?n.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})};return{control:{register:ee,unregister:G,getFieldState:q,_executeSchema:C,_getWatch:Y,_getDirty:K,_updateValid:v,_removeUnmounted:F,_updateFieldArray:m,_getFieldArray:se,_subjects:f,_proxyFormState:d,get _fields(){return r},get _formValues(){return s},get _stateFlags(){return o},set _stateFlags(x){o=x},get _defaultValues(){return i},get _names(){return a},set _names(x){a=x},get _formState(){return n},set _formState(x){n=x},get _options(){return t},set _options(x){t={...t,...x}}},trigger:V,register:ee,handleSubmit:k,watch:M,setValue:fe,getValues:re,reset:(x,T)=>H(jf(x)?x(s):x,T),resetField:me,clearErrors:D,unregister:G,setError:P,setFocus:(x,T={})=>{const A=Z(r,x),W=A&&A._f;if(W){const L=W.refs?W.refs[0]:W.ref;L.focus&&(L.focus(),T.shouldSelect&&L.select())}},getFieldState:q}}function R$(e={}){const t=Ye.useRef(),[n,r]=Ye.useState({isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:e.defaultValues});t.current||(t.current={...YK(e),formState:n});const i=t.current.control;return i._options=e,LK({subject:i._subjects.state,callback:Ye.useCallback(s=>{MK(s,i._proxyFormState,!0)&&(i._formState={...i._formState,...s},r({...i._formState}))},[i])}),Ye.useEffect(()=>{i._stateFlags.mount||(i._proxyFormState.isValid&&i._updateValid(),i._stateFlags.mount=!0),i._stateFlags.watch&&(i._stateFlags.watch=!1,i._subjects.state.next({})),i._removeUnmounted()}),t.current.formState=NK(n,i),t.current}var mv;try{mv=Map}catch{}var gv;try{gv=Set}catch{}function $$(e,t,n){if(!e||typeof e!="object"||typeof e=="function")return e;if(e.nodeType&&"cloneNode"in e)return e.cloneNode(!0);if(e instanceof Date)return new Date(e.getTime());if(e instanceof RegExp)return new RegExp(e);if(Array.isArray(e))return e.map(yv);if(mv&&e instanceof mv)return new Map(Array.from(e.entries()));if(gv&&e instanceof gv)return new Set(Array.from(e.values()));if(e instanceof Object){t.push(e);var r=Object.create(e);n.push(r);for(var i in e){var s=t.findIndex(function(o){return o===e[i]});r[i]=s>-1?n[s]:$$(e[i],t,n)}return r}return e}function yv(e){return $$(e,[],[])}const QK=Object.prototype.toString,XK=Error.prototype.toString,JK=RegExp.prototype.toString,ZK=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",eY=/^Symbol\((.*)\)(.*)$/;function tY(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function ET(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const n=typeof e;if(n==="number")return tY(e);if(n==="string")return t?`"${e}"`:e;if(n==="function")return"[Function "+(e.name||"anonymous")+"]";if(n==="symbol")return ZK.call(e).replace(eY,"Symbol($1)");const r=QK.call(e).slice(8,-1);return r==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):r==="Error"||e instanceof Error?"["+XK.call(e)+"]":r==="RegExp"?JK.call(e):null}function mu(e,t){let n=ET(e,t);return n!==null?n:JSON.stringify(e,function(r,i){let s=ET(this[r],t);return s!==null?s:i},2)}let Ji={default:"${path} is invalid",required:"${path} is a required field",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:n,originalValue:r})=>{let i=r!=null&&r!==n,s=`${e} must be a \`${t}\` type, but the final value was: \`${mu(n,!0)}\``+(i?` (cast from the value \`${mu(r,!0)}\`).`:".");return n===null&&(s+='\n If "null" is intended as an empty value be sure to mark the schema as `.nullable()`'),s},defined:"${path} must be defined"},Ln={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},nY={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},vv={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},wv={isValue:"${path} field must be ${value}"},_v={noUnknown:"${path} field has unspecified keys: ${unknown}"},rY={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"};Object.assign(Object.create(null),{mixed:Ji,string:Ln,number:nY,date:vv,object:_v,array:rY,boolean:wv});var iY=Object.prototype,sY=iY.hasOwnProperty;function oY(e,t){return e!=null&&sY.call(e,t)}var aY=oY,lY=Array.isArray,Ui=lY,uY=typeof lc=="object"&&lc&&lc.Object===Object&&lc,N$=uY,cY=N$,dY=typeof self=="object"&&self&&self.Object===Object&&self,fY=cY||dY||Function("return this")(),Ur=fY,hY=Ur,pY=hY.Symbol,bp=pY,bT=bp,M$=Object.prototype,mY=M$.hasOwnProperty,gY=M$.toString,Ma=bT?bT.toStringTag:void 0;function yY(e){var t=mY.call(e,Ma),n=e[Ma];try{e[Ma]=void 0;var r=!0}catch{}var i=gY.call(e);return r&&(t?e[Ma]=n:delete e[Ma]),i}var vY=yY,wY=Object.prototype,_Y=wY.toString;function SY(e){return _Y.call(e)}var xY=SY,TT=bp,EY=vY,bY=xY,TY="[object Null]",CY="[object Undefined]",CT=TT?TT.toStringTag:void 0;function IY(e){return e==null?e===void 0?CY:TY:CT&&CT in Object(e)?EY(e):bY(e)}var rc=IY;function kY(e){return e!=null&&typeof e=="object"}var ic=kY,AY=rc,OY=ic,PY="[object Symbol]";function DY(e){return typeof e=="symbol"||OY(e)&&AY(e)==PY}var Hw=DY,RY=Ui,$Y=Hw,NY=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,MY=/^\w*$/;function LY(e,t){if(RY(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||$Y(e)?!0:MY.test(e)||!NY.test(e)||t!=null&&e in Object(t)}var Ww=LY;function FY(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var qw=FY,VY=rc,jY=qw,UY="[object AsyncFunction]",zY="[object Function]",BY="[object GeneratorFunction]",HY="[object Proxy]";function WY(e){if(!jY(e))return!1;var t=VY(e);return t==zY||t==BY||t==UY||t==HY}var L$=WY,qY=Ur,GY=qY["__core-js_shared__"],KY=GY,rg=KY,IT=function(){var e=/[^.]+$/.exec(rg&&rg.keys&&rg.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function YY(e){return!!IT&&IT in e}var QY=YY,XY=Function.prototype,JY=XY.toString;function ZY(e){if(e!=null){try{return JY.call(e)}catch{}try{return e+""}catch{}}return""}var F$=ZY,eQ=L$,tQ=QY,nQ=qw,rQ=F$,iQ=/[\\^$.*+?()[\]{}|]/g,sQ=/^\[object .+?Constructor\]$/,oQ=Function.prototype,aQ=Object.prototype,lQ=oQ.toString,uQ=aQ.hasOwnProperty,cQ=RegExp("^"+lQ.call(uQ).replace(iQ,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function dQ(e){if(!nQ(e)||tQ(e))return!1;var t=eQ(e)?cQ:sQ;return t.test(rQ(e))}var fQ=dQ;function hQ(e,t){return e==null?void 0:e[t]}var pQ=hQ,mQ=fQ,gQ=pQ;function yQ(e,t){var n=gQ(e,t);return mQ(n)?n:void 0}var Hs=yQ,vQ=Hs,wQ=vQ(Object,"create"),Tp=wQ,kT=Tp;function _Q(){this.__data__=kT?kT(null):{},this.size=0}var SQ=_Q;function xQ(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var EQ=xQ,bQ=Tp,TQ="__lodash_hash_undefined__",CQ=Object.prototype,IQ=CQ.hasOwnProperty;function kQ(e){var t=this.__data__;if(bQ){var n=t[e];return n===TQ?void 0:n}return IQ.call(t,e)?t[e]:void 0}var AQ=kQ,OQ=Tp,PQ=Object.prototype,DQ=PQ.hasOwnProperty;function RQ(e){var t=this.__data__;return OQ?t[e]!==void 0:DQ.call(t,e)}var $Q=RQ,NQ=Tp,MQ="__lodash_hash_undefined__";function LQ(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=NQ&&t===void 0?MQ:t,this}var FQ=LQ,VQ=SQ,jQ=EQ,UQ=AQ,zQ=$Q,BQ=FQ;function ya(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ya.prototype.clear=VQ;ya.prototype.delete=jQ;ya.prototype.get=UQ;ya.prototype.has=zQ;ya.prototype.set=BQ;var HQ=ya;function WQ(){this.__data__=[],this.size=0}var qQ=WQ;function GQ(e,t){return e===t||e!==e&&t!==t}var V$=GQ,KQ=V$;function YQ(e,t){for(var n=e.length;n--;)if(KQ(e[n][0],t))return n;return-1}var Cp=YQ,QQ=Cp,XQ=Array.prototype,JQ=XQ.splice;function ZQ(e){var t=this.__data__,n=QQ(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():JQ.call(t,n,1),--this.size,!0}var eX=ZQ,tX=Cp;function nX(e){var t=this.__data__,n=tX(t,e);return n<0?void 0:t[n][1]}var rX=nX,iX=Cp;function sX(e){return iX(this.__data__,e)>-1}var oX=sX,aX=Cp;function lX(e,t){var n=this.__data__,r=aX(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}var uX=lX,cX=qQ,dX=eX,fX=rX,hX=oX,pX=uX;function va(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}va.prototype.clear=cX;va.prototype.delete=dX;va.prototype.get=fX;va.prototype.has=hX;va.prototype.set=pX;var Ip=va,mX=Hs,gX=Ur,yX=mX(gX,"Map"),Gw=yX,AT=HQ,vX=Ip,wX=Gw;function _X(){this.size=0,this.__data__={hash:new AT,map:new(wX||vX),string:new AT}}var SX=_X;function xX(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var EX=xX,bX=EX;function TX(e,t){var n=e.__data__;return bX(t)?n[typeof t=="string"?"string":"hash"]:n.map}var kp=TX,CX=kp;function IX(e){var t=CX(this,e).delete(e);return this.size-=t?1:0,t}var kX=IX,AX=kp;function OX(e){return AX(this,e).get(e)}var PX=OX,DX=kp;function RX(e){return DX(this,e).has(e)}var $X=RX,NX=kp;function MX(e,t){var n=NX(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}var LX=MX,FX=SX,VX=kX,jX=PX,UX=$X,zX=LX;function wa(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}wa.prototype.clear=FX;wa.prototype.delete=VX;wa.prototype.get=jX;wa.prototype.has=UX;wa.prototype.set=zX;var Kw=wa,j$=Kw,BX="Expected a function";function Yw(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(BX);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var o=e.apply(this,r);return n.cache=s.set(i,o)||s,o};return n.cache=new(Yw.Cache||j$),n}Yw.Cache=j$;var HX=Yw,WX=HX,qX=500;function GX(e){var t=WX(e,function(r){return n.size===qX&&n.clear(),r}),n=t.cache;return t}var KX=GX,YX=KX,QX=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,XX=/\\(\\)?/g,JX=YX(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(QX,function(n,r,i,s){t.push(i?s.replace(XX,"$1"):r||n)}),t}),ZX=JX;function eJ(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}var tJ=eJ,OT=bp,nJ=tJ,rJ=Ui,iJ=Hw,sJ=1/0,PT=OT?OT.prototype:void 0,DT=PT?PT.toString:void 0;function U$(e){if(typeof e=="string")return e;if(rJ(e))return nJ(e,U$)+"";if(iJ(e))return DT?DT.call(e):"";var t=e+"";return t=="0"&&1/e==-sJ?"-0":t}var oJ=U$,aJ=oJ;function lJ(e){return e==null?"":aJ(e)}var sc=lJ,uJ=Ui,cJ=Ww,dJ=ZX,fJ=sc;function hJ(e,t){return uJ(e)?e:cJ(e,t)?[e]:dJ(fJ(e))}var z$=hJ,pJ=rc,mJ=ic,gJ="[object Arguments]";function yJ(e){return mJ(e)&&pJ(e)==gJ}var vJ=yJ,RT=vJ,wJ=ic,B$=Object.prototype,_J=B$.hasOwnProperty,SJ=B$.propertyIsEnumerable,xJ=RT(function(){return arguments}())?RT:function(e){return wJ(e)&&_J.call(e,"callee")&&!SJ.call(e,"callee")},H$=xJ,EJ=9007199254740991,bJ=/^(?:0|[1-9]\d*)$/;function TJ(e,t){var n=typeof e;return t=t==null?EJ:t,!!t&&(n=="number"||n!="symbol"&&bJ.test(e))&&e>-1&&e%1==0&&e<t}var W$=TJ,CJ=9007199254740991;function IJ(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=CJ}var Qw=IJ,kJ=Hw,AJ=1/0;function OJ(e){if(typeof e=="string"||kJ(e))return e;var t=e+"";return t=="0"&&1/e==-AJ?"-0":t}var Ap=OJ,PJ=z$,DJ=H$,RJ=Ui,$J=W$,NJ=Qw,MJ=Ap;function LJ(e,t,n){t=PJ(t,e);for(var r=-1,i=t.length,s=!1;++r<i;){var o=MJ(t[r]);if(!(s=e!=null&&n(e,o)))break;e=e[o]}return s||++r!=i?s:(i=e==null?0:e.length,!!i&&NJ(i)&&$J(o,i)&&(RJ(e)||DJ(e)))}var q$=LJ,FJ=aY,VJ=q$;function jJ(e,t){return e!=null&&VJ(e,t,FJ)}var Wf=jJ;const G$=e=>e&&e.__isYupSchema__;class UJ{constructor(t,n){if(this.fn=void 0,this.refs=t,this.refs=t,typeof n=="function"){this.fn=n;return}if(!Wf(n,"is"))throw new TypeError("`is:` is required for `when()` conditions");if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:i,otherwise:s}=n,o=typeof r=="function"?r:(...a)=>a.every(l=>l===r);this.fn=function(...a){let l=a.pop(),u=a.pop(),c=o(...a)?i:s;if(!!c)return typeof c=="function"?c(u):u.concat(c.resolve(l))}}resolve(t,n){let r=this.refs.map(s=>s.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),i=this.fn.apply(t,r.concat(t,n));if(i===void 0||i===t)return t;if(!G$(i))throw new TypeError("conditions must return a schema object");return i.resolve(n)}}function K$(e){return e==null?[]:[].concat(e)}function Sv(){return Sv=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Sv.apply(this,arguments)}let zJ=/\$\{\s*(\w+)\s*\}/g;class sn extends Error{static formatError(t,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Sv({},n,{path:r})),typeof t=="string"?t.replace(zJ,(i,s)=>mu(n[s])):typeof t=="function"?t(n):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,n,r,i){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this.name="ValidationError",this.value=n,this.path=r,this.type=i,this.errors=[],this.inner=[],K$(t).forEach(s=>{sn.isError(s)?(this.errors.push(...s.errors),this.inner=this.inner.concat(s.inner.length?s.inner:s)):this.errors.push(s)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],Error.captureStackTrace&&Error.captureStackTrace(this,sn)}}const BJ=e=>{let t=!1;return(...n)=>{t||(t=!0,e(...n))}};function xv(e,t){let{endEarly:n,tests:r,args:i,value:s,errors:o,sort:a,path:l}=e,u=BJ(t),c=r.length;const d=[];if(o=o||[],!c)return o.length?u(new sn(o,s,l)):u(null,s);for(let f=0;f<r.length;f++){const h=r[f];h(i,function(y){if(y){if(!sn.isError(y))return u(y,s);if(n)return y.value=s,u(y,s);d.push(y)}if(--c<=0){if(d.length&&(a&&d.sort(a),o.length&&d.push(...o),o=d),o.length){u(new sn(o,s,l),s);return}u(null,s)}})}}var HJ=Hs,WJ=function(){try{var e=HJ(Object,"defineProperty");return e({},"",{}),e}catch{}}(),qJ=WJ,$T=qJ;function GJ(e,t,n){t=="__proto__"&&$T?$T(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var Y$=GJ;function KJ(e){return function(t,n,r){for(var i=-1,s=Object(t),o=r(t),a=o.length;a--;){var l=o[e?a:++i];if(n(s[l],l,s)===!1)break}return t}}var YJ=KJ,QJ=YJ,XJ=QJ(),JJ=XJ;function ZJ(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var eZ=ZJ,qf={exports:{}};function tZ(){return!1}var nZ=tZ;(function(e,t){var n=Ur,r=nZ,i=t&&!t.nodeType&&t,s=i&&!0&&e&&!e.nodeType&&e,o=s&&s.exports===i,a=o?n.Buffer:void 0,l=a?a.isBuffer:void 0,u=l||r;e.exports=u})(qf,qf.exports);var rZ=rc,iZ=Qw,sZ=ic,oZ="[object Arguments]",aZ="[object Array]",lZ="[object Boolean]",uZ="[object Date]",cZ="[object Error]",dZ="[object Function]",fZ="[object Map]",hZ="[object Number]",pZ="[object Object]",mZ="[object RegExp]",gZ="[object Set]",yZ="[object String]",vZ="[object WeakMap]",wZ="[object ArrayBuffer]",_Z="[object DataView]",SZ="[object Float32Array]",xZ="[object Float64Array]",EZ="[object Int8Array]",bZ="[object Int16Array]",TZ="[object Int32Array]",CZ="[object Uint8Array]",IZ="[object Uint8ClampedArray]",kZ="[object Uint16Array]",AZ="[object Uint32Array]",Ne={};Ne[SZ]=Ne[xZ]=Ne[EZ]=Ne[bZ]=Ne[TZ]=Ne[CZ]=Ne[IZ]=Ne[kZ]=Ne[AZ]=!0;Ne[oZ]=Ne[aZ]=Ne[wZ]=Ne[lZ]=Ne[_Z]=Ne[uZ]=Ne[cZ]=Ne[dZ]=Ne[fZ]=Ne[hZ]=Ne[pZ]=Ne[mZ]=Ne[gZ]=Ne[yZ]=Ne[vZ]=!1;function OZ(e){return sZ(e)&&iZ(e.length)&&!!Ne[rZ(e)]}var PZ=OZ;function DZ(e){return function(t){return e(t)}}var RZ=DZ,Ev={exports:{}};(function(e,t){var n=N$,r=t&&!t.nodeType&&t,i=r&&!0&&e&&!e.nodeType&&e,s=i&&i.exports===r,o=s&&n.process,a=function(){try{var l=i&&i.require&&i.require("util").types;return l||o&&o.binding&&o.binding("util")}catch{}}();e.exports=a})(Ev,Ev.exports);var $Z=PZ,NZ=RZ,NT=Ev.exports,MT=NT&&NT.isTypedArray,MZ=MT?NZ(MT):$Z,Q$=MZ,LZ=eZ,FZ=H$,VZ=Ui,jZ=qf.exports,UZ=W$,zZ=Q$,BZ=Object.prototype,HZ=BZ.hasOwnProperty;function WZ(e,t){var n=VZ(e),r=!n&&FZ(e),i=!n&&!r&&jZ(e),s=!n&&!r&&!i&&zZ(e),o=n||r||i||s,a=o?LZ(e.length,String):[],l=a.length;for(var u in e)(t||HZ.call(e,u))&&!(o&&(u=="length"||i&&(u=="offset"||u=="parent")||s&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||UZ(u,l)))&&a.push(u);return a}var qZ=WZ,GZ=Object.prototype;function KZ(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||GZ;return e===n}var YZ=KZ;function QZ(e,t){return function(n){return e(t(n))}}var XZ=QZ,JZ=XZ,ZZ=JZ(Object.keys,Object),eee=ZZ,tee=YZ,nee=eee,ree=Object.prototype,iee=ree.hasOwnProperty;function see(e){if(!tee(e))return nee(e);var t=[];for(var n in Object(e))iee.call(e,n)&&n!="constructor"&&t.push(n);return t}var oee=see,aee=L$,lee=Qw;function uee(e){return e!=null&&lee(e.length)&&!aee(e)}var cee=uee,dee=qZ,fee=oee,hee=cee;function pee(e){return hee(e)?dee(e):fee(e)}var Xw=pee,mee=JJ,gee=Xw;function yee(e,t){return e&&mee(e,t,gee)}var X$=yee,vee=Ip;function wee(){this.__data__=new vee,this.size=0}var _ee=wee;function See(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}var xee=See;function Eee(e){return this.__data__.get(e)}var bee=Eee;function Tee(e){return this.__data__.has(e)}var Cee=Tee,Iee=Ip,kee=Gw,Aee=Kw,Oee=200;function Pee(e,t){var n=this.__data__;if(n instanceof Iee){var r=n.__data__;if(!kee||r.length<Oee-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Aee(r)}return n.set(e,t),this.size=n.size,this}var Dee=Pee,Ree=Ip,$ee=_ee,Nee=xee,Mee=bee,Lee=Cee,Fee=Dee;function _a(e){var t=this.__data__=new Ree(e);this.size=t.size}_a.prototype.clear=$ee;_a.prototype.delete=Nee;_a.prototype.get=Mee;_a.prototype.has=Lee;_a.prototype.set=Fee;var J$=_a,Vee="__lodash_hash_undefined__";function jee(e){return this.__data__.set(e,Vee),this}var Uee=jee;function zee(e){return this.__data__.has(e)}var Bee=zee,Hee=Kw,Wee=Uee,qee=Bee;function Gf(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new Hee;++t<n;)this.add(e[t])}Gf.prototype.add=Gf.prototype.push=Wee;Gf.prototype.has=qee;var Gee=Gf;function Kee(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}var Yee=Kee;function Qee(e,t){return e.has(t)}var Xee=Qee,Jee=Gee,Zee=Yee,ete=Xee,tte=1,nte=2;function rte(e,t,n,r,i,s){var o=n&tte,a=e.length,l=t.length;if(a!=l&&!(o&&l>a))return!1;var u=s.get(e),c=s.get(t);if(u&&c)return u==t&&c==e;var d=-1,f=!0,h=n&nte?new Jee:void 0;for(s.set(e,t),s.set(t,e);++d<a;){var p=e[d],y=t[d];if(r)var w=o?r(y,p,d,t,e,s):r(p,y,d,e,t,s);if(w!==void 0){if(w)continue;f=!1;break}if(h){if(!Zee(t,function(v,m){if(!ete(h,m)&&(p===v||i(p,v,n,r,s)))return h.push(m)})){f=!1;break}}else if(!(p===y||i(p,y,n,r,s))){f=!1;break}}return s.delete(e),s.delete(t),f}var Z$=rte,ite=Ur,ste=ite.Uint8Array,ote=ste;function ate(e){var t=-1,n=Array(e.size);return e.forEach(function(r,i){n[++t]=[i,r]}),n}var lte=ate;function ute(e){var t=-1,n=Array(e.size);return e.forEach(function(r){n[++t]=r}),n}var cte=ute,LT=bp,FT=ote,dte=V$,fte=Z$,hte=lte,pte=cte,mte=1,gte=2,yte="[object Boolean]",vte="[object Date]",wte="[object Error]",_te="[object Map]",Ste="[object Number]",xte="[object RegExp]",Ete="[object Set]",bte="[object String]",Tte="[object Symbol]",Cte="[object ArrayBuffer]",Ite="[object DataView]",VT=LT?LT.prototype:void 0,ig=VT?VT.valueOf:void 0;function kte(e,t,n,r,i,s,o){switch(n){case Ite:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case Cte:return!(e.byteLength!=t.byteLength||!s(new FT(e),new FT(t)));case yte:case vte:case Ste:return dte(+e,+t);case wte:return e.name==t.name&&e.message==t.message;case xte:case bte:return e==t+"";case _te:var a=hte;case Ete:var l=r&mte;if(a||(a=pte),e.size!=t.size&&!l)return!1;var u=o.get(e);if(u)return u==t;r|=gte,o.set(e,t);var c=fte(a(e),a(t),r,i,s,o);return o.delete(e),c;case Tte:if(ig)return ig.call(e)==ig.call(t)}return!1}var Ate=kte;function Ote(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}var Pte=Ote,Dte=Pte,Rte=Ui;function $te(e,t,n){var r=t(e);return Rte(e)?r:Dte(r,n(e))}var Nte=$te;function Mte(e,t){for(var n=-1,r=e==null?0:e.length,i=0,s=[];++n<r;){var o=e[n];t(o,n,e)&&(s[i++]=o)}return s}var Lte=Mte;function Fte(){return[]}var Vte=Fte,jte=Lte,Ute=Vte,zte=Object.prototype,Bte=zte.propertyIsEnumerable,jT=Object.getOwnPropertySymbols,Hte=jT?function(e){return e==null?[]:(e=Object(e),jte(jT(e),function(t){return Bte.call(e,t)}))}:Ute,Wte=Hte,qte=Nte,Gte=Wte,Kte=Xw;function Yte(e){return qte(e,Kte,Gte)}var Qte=Yte,UT=Qte,Xte=1,Jte=Object.prototype,Zte=Jte.hasOwnProperty;function ene(e,t,n,r,i,s){var o=n&Xte,a=UT(e),l=a.length,u=UT(t),c=u.length;if(l!=c&&!o)return!1;for(var d=l;d--;){var f=a[d];if(!(o?f in t:Zte.call(t,f)))return!1}var h=s.get(e),p=s.get(t);if(h&&p)return h==t&&p==e;var y=!0;s.set(e,t),s.set(t,e);for(var w=o;++d<l;){f=a[d];var v=e[f],m=t[f];if(r)var g=o?r(m,v,f,t,e,s):r(v,m,f,e,t,s);if(!(g===void 0?v===m||i(v,m,n,r,s):g)){y=!1;break}w||(w=f=="constructor")}if(y&&!w){var _=e.constructor,E=t.constructor;_!=E&&"constructor"in e&&"constructor"in t&&!(typeof _=="function"&&_ instanceof _&&typeof E=="function"&&E instanceof E)&&(y=!1)}return s.delete(e),s.delete(t),y}var tne=ene,nne=Hs,rne=Ur,ine=nne(rne,"DataView"),sne=ine,one=Hs,ane=Ur,lne=one(ane,"Promise"),une=lne,cne=Hs,dne=Ur,fne=cne(dne,"Set"),hne=fne,pne=Hs,mne=Ur,gne=pne(mne,"WeakMap"),yne=gne,bv=sne,Tv=Gw,Cv=une,Iv=hne,kv=yne,e2=rc,Sa=F$,zT="[object Map]",vne="[object Object]",BT="[object Promise]",HT="[object Set]",WT="[object WeakMap]",qT="[object DataView]",wne=Sa(bv),_ne=Sa(Tv),Sne=Sa(Cv),xne=Sa(Iv),Ene=Sa(kv),Zi=e2;(bv&&Zi(new bv(new ArrayBuffer(1)))!=qT||Tv&&Zi(new Tv)!=zT||Cv&&Zi(Cv.resolve())!=BT||Iv&&Zi(new Iv)!=HT||kv&&Zi(new kv)!=WT)&&(Zi=function(e){var t=e2(e),n=t==vne?e.constructor:void 0,r=n?Sa(n):"";if(r)switch(r){case wne:return qT;case _ne:return zT;case Sne:return BT;case xne:return HT;case Ene:return WT}return t});var bne=Zi,sg=J$,Tne=Z$,Cne=Ate,Ine=tne,GT=bne,KT=Ui,YT=qf.exports,kne=Q$,Ane=1,QT="[object Arguments]",XT="[object Array]",zc="[object Object]",One=Object.prototype,JT=One.hasOwnProperty;function Pne(e,t,n,r,i,s){var o=KT(e),a=KT(t),l=o?XT:GT(e),u=a?XT:GT(t);l=l==QT?zc:l,u=u==QT?zc:u;var c=l==zc,d=u==zc,f=l==u;if(f&&YT(e)){if(!YT(t))return!1;o=!0,c=!1}if(f&&!c)return s||(s=new sg),o||kne(e)?Tne(e,t,n,r,i,s):Cne(e,t,l,n,r,i,s);if(!(n&Ane)){var h=c&&JT.call(e,"__wrapped__"),p=d&&JT.call(t,"__wrapped__");if(h||p){var y=h?e.value():e,w=p?t.value():t;return s||(s=new sg),i(y,w,n,r,s)}}return f?(s||(s=new sg),Ine(e,t,n,r,i,s)):!1}var Dne=Pne,Rne=Dne,ZT=ic;function t2(e,t,n,r,i){return e===t?!0:e==null||t==null||!ZT(e)&&!ZT(t)?e!==e&&t!==t:Rne(e,t,n,r,t2,i)}var n2=t2,$ne=J$,Nne=n2,Mne=1,Lne=2;function Fne(e,t,n,r){var i=n.length,s=i,o=!r;if(e==null)return!s;for(e=Object(e);i--;){var a=n[i];if(o&&a[2]?a[1]!==e[a[0]]:!(a[0]in e))return!1}for(;++i<s;){a=n[i];var l=a[0],u=e[l],c=a[1];if(o&&a[2]){if(u===void 0&&!(l in e))return!1}else{var d=new $ne;if(r)var f=r(u,c,l,e,t,d);if(!(f===void 0?Nne(c,u,Mne|Lne,r,d):f))return!1}}return!0}var Vne=Fne,jne=qw;function Une(e){return e===e&&!jne(e)}var r2=Une,zne=r2,Bne=Xw;function Hne(e){for(var t=Bne(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,zne(i)]}return t}var Wne=Hne;function qne(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}var i2=qne,Gne=Vne,Kne=Wne,Yne=i2;function Qne(e){var t=Kne(e);return t.length==1&&t[0][2]?Yne(t[0][0],t[0][1]):function(n){return n===e||Gne(n,e,t)}}var Xne=Qne,Jne=z$,Zne=Ap;function ere(e,t){t=Jne(t,e);for(var n=0,r=t.length;e!=null&&n<r;)e=e[Zne(t[n++])];return n&&n==r?e:void 0}var s2=ere,tre=s2;function nre(e,t,n){var r=e==null?void 0:tre(e,t);return r===void 0?n:r}var rre=nre;function ire(e,t){return e!=null&&t in Object(e)}var sre=ire,ore=sre,are=q$;function lre(e,t){return e!=null&&are(e,t,ore)}var ure=lre,cre=n2,dre=rre,fre=ure,hre=Ww,pre=r2,mre=i2,gre=Ap,yre=1,vre=2;function wre(e,t){return hre(e)&&pre(t)?mre(gre(e),t):function(n){var r=dre(n,e);return r===void 0&&r===t?fre(n,e):cre(t,r,yre|vre)}}var _re=wre;function Sre(e){return e}var xre=Sre;function Ere(e){return function(t){return t==null?void 0:t[e]}}var bre=Ere,Tre=s2;function Cre(e){return function(t){return Tre(t,e)}}var Ire=Cre,kre=bre,Are=Ire,Ore=Ww,Pre=Ap;function Dre(e){return Ore(e)?kre(Pre(e)):Are(e)}var Rre=Dre,$re=Xne,Nre=_re,Mre=xre,Lre=Ui,Fre=Rre;function Vre(e){return typeof e=="function"?e:e==null?Mre:typeof e=="object"?Lre(e)?Nre(e[0],e[1]):$re(e):Fre(e)}var o2=Vre,jre=Y$,Ure=X$,zre=o2;function Bre(e,t){var n={};return t=zre(t),Ure(e,function(r,i,s){jre(n,i,t(r,i,s))}),n}var a2=Bre;function Ws(e){this._maxSize=e,this.clear()}Ws.prototype.clear=function(){this._size=0,this._values=Object.create(null)};Ws.prototype.get=function(e){return this._values[e]};Ws.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var Hre=/[^.^\]^[]+|(?=\[\]|\.\.)/g,l2=/^\d+$/,Wre=/^\d/,qre=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,Gre=/^\s*(['"]?)(.*?)(\1)\s*$/,Jw=512,eC=new Ws(Jw),tC=new Ws(Jw),nC=new Ws(Jw),Op={Cache:Ws,split:Av,normalizePath:og,setter:function(e){var t=og(e);return tC.get(e)||tC.set(e,function(r,i){for(var s=0,o=t.length,a=r;s<o-1;){var l=t[s];if(l==="__proto__"||l==="constructor"||l==="prototype")return r;a=a[t[s++]]}a[t[s]]=i})},getter:function(e,t){var n=og(e);return nC.get(e)||nC.set(e,function(i){for(var s=0,o=n.length;s<o;)if(i!=null||!t)i=i[n[s++]];else return;return i})},join:function(e){return e.reduce(function(t,n){return t+(Zw(n)||l2.test(n)?"["+n+"]":(t?".":"")+n)},"")},forEach:function(e,t,n){Kre(Array.isArray(e)?e:Av(e),t,n)}};function og(e){return eC.get(e)||eC.set(e,Av(e).map(function(t){return t.replace(Gre,"$2")}))}function Av(e){return e.match(Hre)||[""]}function Kre(e,t,n){var r=e.length,i,s,o,a;for(s=0;s<r;s++)i=e[s],i&&(Xre(i)&&(i='"'+i+'"'),a=Zw(i),o=!a&&/^\d+$/.test(i),t.call(n,i,a,o,s,e))}function Zw(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function Yre(e){return e.match(Wre)&&!e.match(l2)}function Qre(e){return qre.test(e)}function Xre(e){return!Zw(e)&&(Yre(e)||Qre(e))}const Bc={context:"$",value:"."};function Jre(e,t){return new Ir(e,t)}class Ir{constructor(t,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Bc.context,this.isValue=this.key[0]===Bc.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?Bc.context:this.isValue?Bc.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&Op.getter(this.path,!0),this.map=n.map}getValue(t,n,r){let i=this.isContext?r:this.isValue?t:n;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(t,n){return this.getValue(t,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}Ir.prototype.__isYupRef=!0;function Kf(){return Kf=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Kf.apply(this,arguments)}function Zre(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Hc(e){function t(n,r){let{value:i,path:s="",label:o,options:a,originalValue:l,sync:u}=n,c=Zre(n,["value","path","label","options","originalValue","sync"]);const{name:d,test:f,params:h,message:p}=e;let{parent:y,context:w}=a;function v(I){return Ir.isRef(I)?I.getValue(i,y,w):I}function m(I={}){const C=a2(Kf({value:i,originalValue:l,label:o,path:I.path||s},h,I.params),v),O=new sn(sn.formatError(I.message||p,C),i,C.path,I.type||d);return O.params=C,O}let g=Kf({path:s,parent:y,type:d,createError:m,resolve:v,options:a,originalValue:l},c);if(!u){try{Promise.resolve(f.call(g,i,g)).then(I=>{sn.isError(I)?r(I):I?r(null,I):r(m())}).catch(r)}catch(I){r(I)}return}let _;try{var E;if(_=f.call(g,i,g),typeof((E=_)==null?void 0:E.then)=="function")throw new Error(`Validation test of type: "${g.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`)}catch(I){r(I);return}sn.isError(_)?r(_):_?r(null,_):r(m())}return t.OPTIONS=e,t}let eie=e=>e.substr(0,e.length-1).substr(1);function tie(e,t,n,r=n){let i,s,o;return t?(Op.forEach(t,(a,l,u)=>{let c=l?eie(a):a;if(e=e.resolve({context:r,parent:i,value:n}),e.innerType){let d=u?parseInt(c,10):0;if(n&&d>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${t}. because there is no value at that index. `);i=n,n=n&&n[d],e=e.innerType}if(!u){if(!e.fields||!e.fields[c])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${o} which is a type: "${e._type}")`);i=n,n=n&&n[c],e=e.fields[c]}s=c,o=l?"["+a+"]":"."+a}),{schema:e,parent:i,parentPath:s}):{parent:i,parentPath:t,schema:e}}class Yf{constructor(){this.list=void 0,this.refs=void 0,this.list=new Set,this.refs=new Map}get size(){return this.list.size+this.refs.size}describe(){const t=[];for(const n of this.list)t.push(n);for(const[,n]of this.refs)t.push(n.describe());return t}toArray(){return Array.from(this.list).concat(Array.from(this.refs.values()))}resolveAll(t){return this.toArray().reduce((n,r)=>n.concat(Ir.isRef(r)?t(r):r),[])}add(t){Ir.isRef(t)?this.refs.set(t.key,t):this.list.add(t)}delete(t){Ir.isRef(t)?this.refs.delete(t.key):this.list.delete(t)}clone(){const t=new Yf;return t.list=new Set(this.list),t.refs=new Map(this.refs),t}merge(t,n){const r=this.clone();return t.list.forEach(i=>r.add(i)),t.refs.forEach(i=>r.add(i)),n.list.forEach(i=>r.delete(i)),n.refs.forEach(i=>r.delete(i)),r}}function yn(){return yn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yn.apply(this,arguments)}class Ht{constructor(t){this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this._typeError=void 0,this._whitelist=new Yf,this._blacklist=new Yf,this.exclusiveTests=Object.create(null),this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(Ji.notType)}),this.type=(t==null?void 0:t.type)||"mixed",this.spec=yn({strip:!1,strict:!1,abortEarly:!0,recursive:!0,nullable:!1,presence:"optional"},t==null?void 0:t.spec)}get _type(){return this.type}_typeCheck(t){return!0}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeError=this._typeError,n._whitelistError=this._whitelistError,n._blacklistError=this._blacklistError,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.exclusiveTests=yn({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=yv(yn({},this.spec,t)),n}label(t){let n=this.clone();return n.spec.label=t,n}meta(...t){if(t.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},t[0]),n}withMutation(t){let n=this._mutate;this._mutate=!0;let r=t(this);return this._mutate=n,r}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let n=this,r=t.clone();const i=yn({},n.spec,r.spec);return r.spec=i,r._typeError||(r._typeError=n._typeError),r._whitelistError||(r._whitelistError=n._whitelistError),r._blacklistError||(r._blacklistError=n._blacklistError),r._whitelist=n._whitelist.merge(t._whitelist,t._blacklist),r._blacklist=n._blacklist.merge(t._blacklist,t._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(s=>{t.tests.forEach(o=>{s.test(o.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(t){return this.spec.nullable&&t===null?!0:this._typeCheck(t)}resolve(t){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((i,s)=>s.resolve(i,t),n),n=n.resolve(t)}return n}cast(t,n={}){let r=this.resolve(yn({value:t},n)),i=r._cast(t,n);if(t!==void 0&&n.assert!==!1&&r.isType(i)!==!0){let s=mu(t),o=mu(i);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r._type}". 

attempted value: ${s} 
`+(o!==s?`result of cast: ${o}`:""))}return i}_cast(t,n){let r=t===void 0?t:this.transforms.reduce((i,s)=>s.call(this,i,t,this),t);return r===void 0&&(r=this.getDefault()),r}_validate(t,n={},r){let{sync:i,path:s,from:o=[],originalValue:a=t,strict:l=this.spec.strict,abortEarly:u=this.spec.abortEarly}=n,c=t;l||(c=this._cast(c,yn({assert:!1},n)));let d={value:c,path:s,options:n,originalValue:a,schema:this,label:this.spec.label,sync:i,from:o},f=[];this._typeError&&f.push(this._typeError);let h=[];this._whitelistError&&h.push(this._whitelistError),this._blacklistError&&h.push(this._blacklistError),xv({args:d,value:c,path:s,sync:i,tests:f,endEarly:u},p=>{if(p)return void r(p,c);xv({tests:this.tests.concat(h),args:d,path:s,sync:i,value:c,endEarly:u},r)})}validate(t,n,r){let i=this.resolve(yn({},n,{value:t}));return typeof r=="function"?i._validate(t,n,r):new Promise((s,o)=>i._validate(t,n,(a,l)=>{a?o(a):s(l)}))}validateSync(t,n){let r=this.resolve(yn({},n,{value:t})),i;return r._validate(t,yn({},n,{sync:!0}),(s,o)=>{if(s)throw s;i=o}),i}isValid(t,n){return this.validate(t,n).then(()=>!0,r=>{if(sn.isError(r))return!1;throw r})}isValidSync(t,n){try{return this.validateSync(t,n),!0}catch(r){if(sn.isError(r))return!1;throw r}}_getDefault(){let t=this.spec.default;return t==null?t:typeof t=="function"?t.call(this):yv(t)}getDefault(t){return this.resolve(t||{})._getDefault()}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){let n=this.clone();return n.spec.strict=t,n}_isPresent(t){return t!=null}defined(t=Ji.defined){return this.test({message:t,name:"defined",exclusive:!0,test(n){return n!==void 0}})}required(t=Ji.required){return this.clone({presence:"required"}).withMutation(n=>n.test({message:t,name:"required",exclusive:!0,test(r){return this.schema._isPresent(r)}}))}notRequired(){let t=this.clone({presence:"optional"});return t.tests=t.tests.filter(n=>n.OPTIONS.name!=="required"),t}nullable(t=!0){return this.clone({nullable:t!==!1})}transform(t){let n=this.clone();return n.transforms.push(t),n}test(...t){let n;if(t.length===1?typeof t[0]=="function"?n={test:t[0]}:n=t[0]:t.length===2?n={name:t[0],test:t[1]}:n={name:t[0],message:t[1],test:t[2]},n.message===void 0&&(n.message=Ji.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),i=Hc(n),s=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(o=>!(o.OPTIONS.name===n.name&&(s||o.OPTIONS.test===i.OPTIONS.test))),r.tests.push(i),r}when(t,n){!Array.isArray(t)&&typeof t!="string"&&(n=t,t=".");let r=this.clone(),i=K$(t).map(s=>new Ir(s));return i.forEach(s=>{s.isSibling&&r.deps.push(s.key)}),r.conditions.push(new UJ(i,n)),r}typeError(t){let n=this.clone();return n._typeError=Hc({message:t,name:"typeError",test(r){return r!==void 0&&!this.schema.isType(r)?this.createError({params:{type:this.schema._type}}):!0}}),n}oneOf(t,n=Ji.oneOf){let r=this.clone();return t.forEach(i=>{r._whitelist.add(i),r._blacklist.delete(i)}),r._whitelistError=Hc({message:n,name:"oneOf",test(i){if(i===void 0)return!0;let s=this.schema._whitelist,o=s.resolveAll(this.resolve);return o.includes(i)?!0:this.createError({params:{values:s.toArray().join(", "),resolved:o}})}}),r}notOneOf(t,n=Ji.notOneOf){let r=this.clone();return t.forEach(i=>{r._blacklist.add(i),r._whitelist.delete(i)}),r._blacklistError=Hc({message:n,name:"notOneOf",test(i){let s=this.schema._blacklist,o=s.resolveAll(this.resolve);return o.includes(i)?this.createError({params:{values:s.toArray().join(", "),resolved:o}}):!0}}),r}strip(t=!0){let n=this.clone();return n.spec.strip=t,n}describe(){const t=this.clone(),{label:n,meta:r}=t.spec;return{meta:r,label:n,type:t.type,oneOf:t._whitelist.describe(),notOneOf:t._blacklist.describe(),tests:t.tests.map(s=>({name:s.OPTIONS.name,params:s.OPTIONS.params})).filter((s,o,a)=>a.findIndex(l=>l.name===s.name)===o)}}}Ht.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])Ht.prototype[`${e}At`]=function(t,n,r={}){const{parent:i,parentPath:s,schema:o}=tie(this,t,n,r.context);return o[e](i&&i[s],yn({},r,{parent:i,path:t}))};for(const e of["equals","is"])Ht.prototype[e]=Ht.prototype.oneOf;for(const e of["not","nope"])Ht.prototype[e]=Ht.prototype.notOneOf;Ht.prototype.optional=Ht.prototype.notRequired;const nie=Ht;nie.prototype;const nn=e=>e==null;function u2(){return new c2}class c2 extends Ht{constructor(){super({type:"boolean"}),this.withMutation(()=>{this.transform(function(t){if(!this.isType(t)){if(/^(true|1)$/i.test(String(t)))return!0;if(/^(false|0)$/i.test(String(t)))return!1}return t})})}_typeCheck(t){return t instanceof Boolean&&(t=t.valueOf()),typeof t=="boolean"}isTrue(t=wv.isValue){return this.test({message:t,name:"is-value",exclusive:!0,params:{value:"true"},test(n){return nn(n)||n===!0}})}isFalse(t=wv.isValue){return this.test({message:t,name:"is-value",exclusive:!0,params:{value:"false"},test(n){return nn(n)||n===!1}})}}u2.prototype=c2.prototype;let rie=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,iie=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,sie=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,oie=e=>nn(e)||e===e.trim(),aie={}.toString();function us(){return new d2}class d2 extends Ht{constructor(){super({type:"string"}),this.withMutation(()=>{this.transform(function(t){if(this.isType(t)||Array.isArray(t))return t;const n=t!=null&&t.toString?t.toString():t;return n===aie?t:n})})}_typeCheck(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}_isPresent(t){return super._isPresent(t)&&!!t.length}length(t,n=Ln.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:t},test(r){return nn(r)||r.length===this.resolve(t)}})}min(t,n=Ln.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},test(r){return nn(r)||r.length>=this.resolve(t)}})}max(t,n=Ln.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:t},test(r){return nn(r)||r.length<=this.resolve(t)}})}matches(t,n){let r=!1,i,s;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:i,name:s}=n:i=n),this.test({name:s||"matches",message:i||Ln.matches,params:{regex:t},test:o=>nn(o)||o===""&&r||o.search(t)!==-1})}email(t=Ln.email){return this.matches(rie,{name:"email",message:t,excludeEmptyString:!0})}url(t=Ln.url){return this.matches(iie,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=Ln.uuid){return this.matches(sie,{name:"uuid",message:t,excludeEmptyString:!1})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=Ln.trim){return this.transform(n=>n!=null?n.trim():n).test({message:t,name:"trim",test:oie})}lowercase(t=Ln.lowercase){return this.transform(n=>nn(n)?n:n.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,test:n=>nn(n)||n===n.toLowerCase()})}uppercase(t=Ln.uppercase){return this.transform(n=>nn(n)?n:n.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,test:n=>nn(n)||n===n.toUpperCase()})}}us.prototype=d2.prototype;var lie=/^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;function uie(e){var t=[1,4,5,6,7,10,11],n=0,r,i;if(i=lie.exec(e)){for(var s=0,o;o=t[s];++s)i[o]=+i[o]||0;i[2]=(+i[2]||1)-1,i[3]=+i[3]||1,i[7]=i[7]?String(i[7]).substr(0,3):0,(i[8]===void 0||i[8]==="")&&(i[9]===void 0||i[9]==="")?r=+new Date(i[1],i[2],i[3],i[4],i[5],i[6],i[7]):(i[8]!=="Z"&&i[9]!==void 0&&(n=i[10]*60+i[11],i[9]==="+"&&(n=0-n)),r=Date.UTC(i[1],i[2],i[3],i[4],i[5]+n,i[6],i[7]))}else r=Date.parse?Date.parse(e):NaN;return r}let f2=new Date(""),cie=e=>Object.prototype.toString.call(e)==="[object Date]";class h2 extends Ht{constructor(){super({type:"date"}),this.withMutation(()=>{this.transform(function(t){return this.isType(t)?t:(t=uie(t),isNaN(t)?f2:new Date(t))})})}_typeCheck(t){return cie(t)&&!isNaN(t.getTime())}prepareParam(t,n){let r;if(Ir.isRef(t))r=t;else{let i=this.cast(t);if(!this._typeCheck(i))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=i}return r}min(t,n=vv.min){let r=this.prepareParam(t,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:t},test(i){return nn(i)||i>=this.resolve(r)}})}max(t,n=vv.max){let r=this.prepareParam(t,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:t},test(i){return nn(i)||i<=this.resolve(r)}})}}h2.INVALID_DATE=f2;h2.prototype;function die(e,t,n,r){var i=-1,s=e==null?0:e.length;for(r&&s&&(n=e[++i]);++i<s;)n=t(n,e[i],i,e);return n}var fie=die;function hie(e){return function(t){return e==null?void 0:e[t]}}var pie=hie,mie=pie,gie={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},yie=mie(gie),vie=yie,wie=vie,_ie=sc,Sie=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,xie="\\u0300-\\u036f",Eie="\\ufe20-\\ufe2f",bie="\\u20d0-\\u20ff",Tie=xie+Eie+bie,Cie="["+Tie+"]",Iie=RegExp(Cie,"g");function kie(e){return e=_ie(e),e&&e.replace(Sie,wie).replace(Iie,"")}var Aie=kie,Oie=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function Pie(e){return e.match(Oie)||[]}var Die=Pie,Rie=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function $ie(e){return Rie.test(e)}var Nie=$ie,p2="\\ud800-\\udfff",Mie="\\u0300-\\u036f",Lie="\\ufe20-\\ufe2f",Fie="\\u20d0-\\u20ff",Vie=Mie+Lie+Fie,m2="\\u2700-\\u27bf",g2="a-z\\xdf-\\xf6\\xf8-\\xff",jie="\\xac\\xb1\\xd7\\xf7",Uie="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",zie="\\u2000-\\u206f",Bie=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",y2="A-Z\\xc0-\\xd6\\xd8-\\xde",Hie="\\ufe0e\\ufe0f",v2=jie+Uie+zie+Bie,w2="['\u2019]",rC="["+v2+"]",Wie="["+Vie+"]",_2="\\d+",qie="["+m2+"]",S2="["+g2+"]",x2="[^"+p2+v2+_2+m2+g2+y2+"]",Gie="\\ud83c[\\udffb-\\udfff]",Kie="(?:"+Wie+"|"+Gie+")",Yie="[^"+p2+"]",E2="(?:\\ud83c[\\udde6-\\uddff]){2}",b2="[\\ud800-\\udbff][\\udc00-\\udfff]",Xs="["+y2+"]",Qie="\\u200d",iC="(?:"+S2+"|"+x2+")",Xie="(?:"+Xs+"|"+x2+")",sC="(?:"+w2+"(?:d|ll|m|re|s|t|ve))?",oC="(?:"+w2+"(?:D|LL|M|RE|S|T|VE))?",T2=Kie+"?",C2="["+Hie+"]?",Jie="(?:"+Qie+"(?:"+[Yie,E2,b2].join("|")+")"+C2+T2+")*",Zie="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ese="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",tse=C2+T2+Jie,nse="(?:"+[qie,E2,b2].join("|")+")"+tse,rse=RegExp([Xs+"?"+S2+"+"+sC+"(?="+[rC,Xs,"$"].join("|")+")",Xie+"+"+oC+"(?="+[rC,Xs+iC,"$"].join("|")+")",Xs+"?"+iC+"+"+sC,Xs+"+"+oC,ese,Zie,_2,nse].join("|"),"g");function ise(e){return e.match(rse)||[]}var sse=ise,ose=Die,ase=Nie,lse=sc,use=sse;function cse(e,t,n){return e=lse(e),t=n?void 0:t,t===void 0?ase(e)?use(e):ose(e):e.match(t)||[]}var dse=cse,fse=fie,hse=Aie,pse=dse,mse="['\u2019]",gse=RegExp(mse,"g");function yse(e){return function(t){return fse(pse(hse(t).replace(gse,"")),e,"")}}var I2=yse,vse=I2,wse=vse(function(e,t,n){return e+(n?"_":"")+t.toLowerCase()}),aC=wse;function _se(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),n=n>i?i:n,n<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var s=Array(i);++r<i;)s[r]=e[r+t];return s}var Sse=_se,xse=Sse;function Ese(e,t,n){var r=e.length;return n=n===void 0?r:n,!t&&n>=r?e:xse(e,t,n)}var bse=Ese,Tse="\\ud800-\\udfff",Cse="\\u0300-\\u036f",Ise="\\ufe20-\\ufe2f",kse="\\u20d0-\\u20ff",Ase=Cse+Ise+kse,Ose="\\ufe0e\\ufe0f",Pse="\\u200d",Dse=RegExp("["+Pse+Tse+Ase+Ose+"]");function Rse(e){return Dse.test(e)}var k2=Rse;function $se(e){return e.split("")}var Nse=$se,A2="\\ud800-\\udfff",Mse="\\u0300-\\u036f",Lse="\\ufe20-\\ufe2f",Fse="\\u20d0-\\u20ff",Vse=Mse+Lse+Fse,jse="\\ufe0e\\ufe0f",Use="["+A2+"]",Ov="["+Vse+"]",Pv="\\ud83c[\\udffb-\\udfff]",zse="(?:"+Ov+"|"+Pv+")",O2="[^"+A2+"]",P2="(?:\\ud83c[\\udde6-\\uddff]){2}",D2="[\\ud800-\\udbff][\\udc00-\\udfff]",Bse="\\u200d",R2=zse+"?",$2="["+jse+"]?",Hse="(?:"+Bse+"(?:"+[O2,P2,D2].join("|")+")"+$2+R2+")*",Wse=$2+R2+Hse,qse="(?:"+[O2+Ov+"?",Ov,P2,D2,Use].join("|")+")",Gse=RegExp(Pv+"(?="+Pv+")|"+qse+Wse,"g");function Kse(e){return e.match(Gse)||[]}var Yse=Kse,Qse=Nse,Xse=k2,Jse=Yse;function Zse(e){return Xse(e)?Jse(e):Qse(e)}var eoe=Zse,toe=bse,noe=k2,roe=eoe,ioe=sc;function soe(e){return function(t){t=ioe(t);var n=noe(t)?roe(t):void 0,r=n?n[0]:t.charAt(0),i=n?toe(n,1).join(""):t.slice(1);return r[e]()+i}}var ooe=soe,aoe=ooe,loe=aoe("toUpperCase"),uoe=loe,coe=sc,doe=uoe;function foe(e){return doe(coe(e).toLowerCase())}var hoe=foe,poe=hoe,moe=I2,goe=moe(function(e,t,n){return t=t.toLowerCase(),e+(n?poe(t):t)}),yoe=goe,voe=Y$,woe=X$,_oe=o2;function Soe(e,t){var n={};return t=_oe(t),woe(e,function(r,i,s){voe(n,t(r,i,s),r)}),n}var xoe=Soe,e_={exports:{}};e_.exports=function(e){return N2(Eoe(e),e)};e_.exports.array=N2;function N2(e,t){var n=e.length,r=new Array(n),i={},s=n,o=boe(t),a=Toe(e);for(t.forEach(function(u){if(!a.has(u[0])||!a.has(u[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});s--;)i[s]||l(e[s],s,new Set);return r;function l(u,c,d){if(d.has(u)){var f;try{f=", node was:"+JSON.stringify(u)}catch{f=""}throw new Error("Cyclic dependency"+f)}if(!a.has(u))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(u));if(!i[c]){i[c]=!0;var h=o.get(u)||new Set;if(h=Array.from(h),c=h.length){d.add(u);do{var p=h[--c];l(p,a.get(p),d)}while(c);d.delete(u)}r[--n]=u}}}function Eoe(e){for(var t=new Set,n=0,r=e.length;n<r;n++){var i=e[n];t.add(i[0]),t.add(i[1])}return Array.from(t)}function boe(e){for(var t=new Map,n=0,r=e.length;n<r;n++){var i=e[n];t.has(i[0])||t.set(i[0],new Set),t.has(i[1])||t.set(i[1],new Set),t.get(i[0]).add(i[1])}return t}function Toe(e){for(var t=new Map,n=0,r=e.length;n<r;n++)t.set(e[n],n);return t}function Coe(e,t=[]){let n=[],r=new Set,i=new Set(t.map(([o,a])=>`${o}-${a}`));function s(o,a){let l=Op.split(o)[0];r.add(l),i.has(`${a}-${l}`)||n.push([a,l])}for(const o in e)if(Wf(e,o)){let a=e[o];r.add(o),Ir.isRef(a)&&a.isSibling?s(a.path,o):G$(a)&&"deps"in a&&a.deps.forEach(l=>s(l,o))}return e_.exports.array(Array.from(r),n).reverse()}function lC(e,t){let n=1/0;return e.some((r,i)=>{var s;if(((s=t.path)==null?void 0:s.indexOf(r))!==-1)return n=i,!0}),n}function M2(e){return(t,n)=>lC(e,t)-lC(e,n)}function wo(){return wo=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wo.apply(this,arguments)}let uC=e=>Object.prototype.toString.call(e)==="[object Object]";function Ioe(e,t){let n=Object.keys(e.fields);return Object.keys(t).filter(r=>n.indexOf(r)===-1)}const koe=M2([]);class L2 extends Ht{constructor(t){super({type:"object"}),this.fields=Object.create(null),this._sortErrors=koe,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{this.transform(function(r){if(typeof r=="string")try{r=JSON.parse(r)}catch{r=null}return this.isType(r)?r:null}),t&&this.shape(t)})}_typeCheck(t){return uC(t)||typeof t=="function"}_cast(t,n={}){var r;let i=super._cast(t,n);if(i===void 0)return this.getDefault();if(!this._typeCheck(i))return i;let s=this.fields,o=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,a=this._nodes.concat(Object.keys(i).filter(d=>this._nodes.indexOf(d)===-1)),l={},u=wo({},n,{parent:l,__validating:n.__validating||!1}),c=!1;for(const d of a){let f=s[d],h=Wf(i,d);if(f){let p,y=i[d];u.path=(n.path?`${n.path}.`:"")+d,f=f.resolve({value:y,context:n.context,parent:l});let w="spec"in f?f.spec:void 0,v=w==null?void 0:w.strict;if(w!=null&&w.strip){c=c||d in i;continue}p=!n.__validating||!v?f.cast(i[d],u):i[d],p!==void 0&&(l[d]=p)}else h&&!o&&(l[d]=i[d]);l[d]!==i[d]&&(c=!0)}return c?l:i}_validate(t,n={},r){let i=[],{sync:s,from:o=[],originalValue:a=t,abortEarly:l=this.spec.abortEarly,recursive:u=this.spec.recursive}=n;o=[{schema:this,value:a},...o],n.__validating=!0,n.originalValue=a,n.from=o,super._validate(t,n,(c,d)=>{if(c){if(!sn.isError(c)||l)return void r(c,d);i.push(c)}if(!u||!uC(d)){r(i[0]||null,d);return}a=a||d;let f=this._nodes.map(h=>(p,y)=>{let w=h.indexOf(".")===-1?(n.path?`${n.path}.`:"")+h:`${n.path||""}["${h}"]`,v=this.fields[h];if(v&&"validate"in v){v.validate(d[h],wo({},n,{path:w,from:o,strict:!0,parent:d,originalValue:a[h]}),y);return}y(null)});xv({sync:s,tests:f,value:d,errors:i,endEarly:l,sort:this._sortErrors,path:n.path},r)})}clone(t){const n=super.clone(t);return n.fields=wo({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(t){let n=super.concat(t),r=n.fields;for(let[i,s]of Object.entries(this.fields)){const o=r[i];o===void 0?r[i]=s:o instanceof Ht&&s instanceof Ht&&(r[i]=s.concat(o))}return n.withMutation(()=>n.shape(r,this._excludedEdges))}getDefaultFromShape(){let t={};return this._nodes.forEach(n=>{const r=this.fields[n];t[n]="default"in r?r.getDefault():void 0}),t}_getDefault(){if("default"in this.spec)return super._getDefault();if(!!this._nodes.length)return this.getDefaultFromShape()}shape(t,n=[]){let r=this.clone(),i=Object.assign(r.fields,t);return r.fields=i,r._sortErrors=M2(Object.keys(i)),n.length&&(Array.isArray(n[0])||(n=[n]),r._excludedEdges=[...r._excludedEdges,...n]),r._nodes=Coe(i,r._excludedEdges),r}pick(t){const n={};for(const r of t)this.fields[r]&&(n[r]=this.fields[r]);return this.clone().withMutation(r=>(r.fields={},r.shape(n)))}omit(t){const n=this.clone(),r=n.fields;n.fields={};for(const i of t)delete r[i];return n.withMutation(()=>n.shape(r))}from(t,n,r){let i=Op.getter(t,!0);return this.transform(s=>{if(s==null)return s;let o=s;return Wf(s,t)&&(o=wo({},s),r||delete o[t],o[n]=i(s)),o})}noUnknown(t=!0,n=_v.noUnknown){typeof t=="string"&&(n=t,t=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(i){if(i==null)return!0;const s=Ioe(this.schema,i);return!t||s.length===0||this.createError({params:{unknown:s.join(", ")}})}});return r.spec.noUnknown=t,r}unknown(t=!0,n=_v.noUnknown){return this.noUnknown(!t,n)}transformKeys(t){return this.transform(n=>n&&xoe(n,(r,i)=>t(i)))}camelCase(){return this.transformKeys(yoe)}snakeCase(){return this.transformKeys(aC)}constantCase(){return this.transformKeys(t=>aC(t).toUpperCase())}describe(){let t=super.describe();return t.fields=a2(this.fields,n=>n.describe()),t}}function t_(e){return new L2(e)}t_.prototype=L2.prototype;var cC=function(e,t,n){if(e&&"reportValidity"in e){var r=Z(n,t);e.setCustomValidity(r&&r.message||""),e.reportValidity()}},F2=function(e,t){var n=function(i){var s=t.fields[i];s&&s.ref&&"reportValidity"in s.ref?cC(s.ref,i,e):s.refs&&s.refs.forEach(function(o){return cC(o,i,e)})};for(var r in t.fields)n(r)},Aoe=function(e,t){t.shouldUseNativeValidation&&F2(e,t);var n={};for(var r in e){var i=Z(t.fields,r);$e(n,r,Object.assign(e[r],{ref:i&&i.ref}))}return n},V2=function(e,t,n){return t===void 0&&(t={}),n===void 0&&(n={}),function(r,i,s){try{return Promise.resolve(function(o,a){try{var l=(t.context,Promise.resolve(e[n.mode==="sync"?"validateSync":"validate"](r,Object.assign({abortEarly:!1},t,{context:i}))).then(function(u){return s.shouldUseNativeValidation&&F2({},s),{values:n.rawValues?r:u,errors:{}}}))}catch(u){return a(u)}return l&&l.then?l.then(void 0,a):l}(0,function(o){if(!o.inner)throw o;return{values:{},errors:Aoe((a=o,l=!s.shouldUseNativeValidation&&s.criteriaMode==="all",(a.inner||[]).reduce(function(u,c){if(u[c.path]||(u[c.path]={message:c.message,type:c.type}),l){var d=u[c.path].types,f=d&&d[c.type];u[c.path]=C$(c.path,l,u,c.type,f?[].concat(f,c.message):c.message)}return u},{})),s)};var a,l}))}catch(o){return Promise.reject(o)}}};const Ooe="/ecommerce-react/assets/undraw_pic_profile_re_1865.a5ac473b.svg";function Poe(){var u,c;const e=Mi(),[t,n,r]=jr(gn),i=({email:d,password:f})=>{QW(d,f)},s=t_().shape({email:us().email("Please enter a valid email schema").required("Please enter your email"),password:us().required("Please enter your password").min(3,"Password must have more than 3 characters")}),{register:o,handleSubmit:a,formState:{errors:l}}=R$({resolver:V2(s)});return b.exports.useEffect(()=>{t&&e("/")},[t]),X(PK,{children:[S(ma,{children:S(IK,{children:X(AK,{as:Ss.div,initial:{scale:0},animate:{scale:1},children:[X("form",{onSubmit:a(i),children:[S("input",{type:"email",placeholder:"E-mail Address",...o("email")}),S(hT,{children:(u=l.email)==null?void 0:u.message}),S("input",{type:"password",placeholder:"Password",...o("password")}),S(hT,{children:(c=l.password)==null?void 0:c.message}),S(fT,{children:"Login"})]}),S("p",{children:"or"}),S(fT,{onClick:YW,children:"Login with Google"}),X(kK,{children:["Don't have an account? ",S(OK,{onClick:()=>e("/register"),children:"Register"})," now"]}),S("img",{src:Ooe,alt:"profile image"})]})})}),S(ga,{})]})}const Doe=N.div`
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
min-height: 500px;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`,Roe=N.img`
margin-top: 100px;
object-fit: cover;
width: 100%;
max-width: 500px;
height: 100%;
border-radius: 6px;
box-shadow: 0 0 15px gray;

@media (min-width: 992px) {
    height: 400px;
  }
`,$oe=N.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 10px;
  height: 20%;
`,La=N.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    margin: 0 5px;
    border-radius: 6px;
    cursor: pointer;
    ${({isHighlighted:e})=>e&&Rn`
      border: 1px solid black;
    `}

    @media (min-width: 992px) {
      margin-top: 40px;
    width: 90px;
    height: 90px;
  }
`,Noe=N.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
height: 50%;

@media (min-width: 992px) {
    width: 60%;
  }
`,Moe=N.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  h3 {
    
  }

  button {
    padding: 15px 30px;
    border-radius: 6px;
    font-weight: bold;
    border: none;
    background-color: #F05454;
    cursor: pointer;
    transition: transform 0.3s, background-color 0.3s;

    &:hover {
      transform: scale(1.05);
      background-color: rgb(245, 59, 59);
    }
  }
`,Loe=N.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 40px auto 90px;
max-width: 500px;
width: 100%;
text-align: left;

@media (min-width: 700px){
  padding-bottom: 50px;
}

@media (min-width: 992px){
  padding-bottom: 0px;
}

h1 {
  text-transform: uppercase;
  font-size: 22px;
  border-bottom: 1px solid black;
}

h2 {
  font-weight: 400;
  margin-bottom: 20px;
  font-size: 18px;
}

@media (min-width: 992px) {
  margin-left: -20px;
  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 22px;
  }
}
`,Foe=N.div`
  position: relative;
  min-height: 100vh;
`,Voe=N.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  width: 100%;

  @media (min-width: 992px){
    margin-left: 25px;
  }

  @media (min-width: 1050px){
    margin-left: 0;
  }
`;function j2(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=j2(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function li(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=j2(e))&&(r&&(r+=" "),r+=t);return r}function oc(e){return typeof e=="number"&&!isNaN(e)}function Fa(e){return typeof e=="boolean"}function Ps(e){return typeof e=="string"}function en(e){return typeof e=="function"}function wd(e){return Ps(e)||en(e)?e:null}function _d(e){return e!=null}function joe(e,t){return e===!1||oc(e)&&e>0?e:t}function ag(e){return b.exports.isValidElement(e)||Ps(e)||en(e)||oc(e)}const U2={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},zr={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function Uoe(e,t,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition="all "+n+"ms",requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function zoe(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:s=300}=e;return function(a){let{children:l,position:u,preventExitTransition:c,done:d,nodeRef:f,isIn:h}=a;const p=r?t+"--"+u:t,y=r?n+"--"+u:n,w=b.exports.useRef(0);return b.exports.useLayoutEffect(()=>{const v=f.current,m=p.split(" "),g=E=>{E.target===f.current&&(v.dispatchEvent(new Event("d")),v.removeEventListener("animationend",g),v.removeEventListener("animationcancel",g),w.current===0&&E.type!=="animationcancel"&&v.classList.remove(...m))};(()=>{v.classList.add(...m),v.addEventListener("animationend",g),v.addEventListener("animationcancel",g)})()},[]),b.exports.useEffect(()=>{const v=f.current,m=()=>{v.removeEventListener("animationend",m),i?Uoe(v,d,s):d()};h||(c?m():(()=>{w.current=1,v.className+=" "+y,v.addEventListener("animationend",m)})())},[h]),S(Yn,{children:l})}}function dC(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}const xn={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter(r=>r!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},Pp=e=>{let{theme:t,type:n,...r}=e;return S("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":"var(--toastify-icon-color-"+n+")",...r})};function Boe(e){return S(Pp,{...e,children:S("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"})})}function Hoe(e){return S(Pp,{...e,children:S("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"})})}function Woe(e){return S(Pp,{...e,children:S("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"})})}function qoe(e){return S(Pp,{...e,children:S("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"})})}function Goe(){return S("div",{className:"Toastify__spinner"})}const Dv={info:Hoe,warning:Boe,success:Woe,error:qoe,spinner:Goe},Koe=e=>e in Dv;function Yoe(e){let{theme:t,type:n,isLoading:r,icon:i}=e,s=null;const o={theme:t,type:n};return i===!1||(en(i)?s=i(o):b.exports.isValidElement(i)?s=b.exports.cloneElement(i,o):Ps(i)||oc(i)?s=i:r?s=Dv.spinner():Koe(n)&&(s=Dv[n](o))),s}function Qoe(e){const[,t]=b.exports.useReducer(y=>y+1,0),[n,r]=b.exports.useState([]),i=b.exports.useRef(null),s=b.exports.useRef(new Map).current,o=y=>n.indexOf(y)!==-1,a=b.exports.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:o,getToast:y=>s.get(y)}).current;b.exports.useEffect(()=>(a.containerId=e.containerId,xn.cancelEmit(3).on(0,f).on(1,y=>i.current&&u(y)).on(5,l).emit(2,a),()=>{s.clear(),xn.emit(3,a)}),[]),b.exports.useEffect(()=>{a.props=e,a.isToastActive=o,a.displayedToast=n.length});function l(y){let{containerId:w}=y;const{limit:v}=a.props;v&&(!w||a.containerId===w)&&(a.count-=a.queue.length,a.queue=[])}function u(y){r(w=>_d(y)?w.filter(v=>v!==y):[])}function c(){const{toastContent:y,toastProps:w,staleId:v}=a.queue.shift();h(y,w,v)}function d(y){return!i.current||a.props.enableMultiContainer&&y.containerId!==a.props.containerId||s.has(y.toastId)&&y.updateId==null}function f(y,w){let{delay:v,staleId:m,...g}=w;if(!ag(y)||d(g))return;const{toastId:_,updateId:E,data:I}=g,{props:C}=a,O=()=>u(_),z=E==null;z&&a.count++;const F={toastId:_,updateId:E,data:I,containerId:g.containerId,isLoading:g.isLoading,theme:g.theme||C.theme,icon:g.icon!=null?g.icon:C.icon,isIn:!1,key:g.key||a.toastKey++,type:g.type,closeToast:O,closeButton:g.closeButton,rtl:C.rtl,position:g.position||C.position,transition:g.transition||C.transition,className:wd(g.className||C.toastClassName),bodyClassName:wd(g.bodyClassName||C.bodyClassName),style:g.style||C.toastStyle,bodyStyle:g.bodyStyle||C.bodyStyle,onClick:g.onClick||C.onClick,pauseOnHover:Fa(g.pauseOnHover)?g.pauseOnHover:C.pauseOnHover,pauseOnFocusLoss:Fa(g.pauseOnFocusLoss)?g.pauseOnFocusLoss:C.pauseOnFocusLoss,draggable:Fa(g.draggable)?g.draggable:C.draggable,draggablePercent:g.draggablePercent||C.draggablePercent,draggableDirection:g.draggableDirection||C.draggableDirection,closeOnClick:Fa(g.closeOnClick)?g.closeOnClick:C.closeOnClick,progressClassName:wd(g.progressClassName||C.progressClassName),progressStyle:g.progressStyle||C.progressStyle,autoClose:g.isLoading?!1:joe(g.autoClose,C.autoClose),hideProgressBar:Fa(g.hideProgressBar)?g.hideProgressBar:C.hideProgressBar,progress:g.progress,role:g.role||C.role,deleteToast(){const Y=dC(s.get(_),"removed");s.delete(_),xn.emit(4,Y);const se=a.queue.length;if(a.count=_d(_)?a.count-1:a.count-a.displayedToast,a.count<0&&(a.count=0),se>0){const ce=_d(_)?1:a.props.limit;if(se===1||ce===1)a.displayedToast++,c();else{const de=ce>se?se:ce;a.displayedToast=de;for(let fe=0;fe<de;fe++)c()}}else t()}};F.iconOut=Yoe(F),en(g.onOpen)&&(F.onOpen=g.onOpen),en(g.onClose)&&(F.onClose=g.onClose),F.closeButton=C.closeButton,g.closeButton===!1||ag(g.closeButton)?F.closeButton=g.closeButton:g.closeButton===!0&&(F.closeButton=ag(C.closeButton)?C.closeButton:!0);let K=y;b.exports.isValidElement(y)&&!Ps(y.type)?K=b.exports.cloneElement(y,{closeToast:O,toastProps:F,data:I}):en(y)&&(K=y({closeToast:O,toastProps:F,data:I})),C.limit&&C.limit>0&&a.count>C.limit&&z?a.queue.push({toastContent:K,toastProps:F,staleId:m}):oc(v)?setTimeout(()=>{h(K,F,m)},v):h(K,F,m)}function h(y,w,v){const{toastId:m}=w;v&&s.delete(v);const g={content:y,props:w};s.set(m,g),r(_=>[..._,m].filter(E=>E!==v)),xn.emit(4,dC(g,g.props.updateId==null?"added":"updated"))}function p(y){const w=new Map,v=Array.from(s.values());return e.newestOnTop&&v.reverse(),v.forEach(m=>{const{position:g}=m.props;w.has(g)||w.set(g,[]),w.get(g).push(m)}),Array.from(w,m=>y(m[0],m[1]))}return{getToastToRender:p,containerRef:i,isToastActive:o}}function fC(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function hC(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function Xoe(e){const[t,n]=b.exports.useState(!1),[r,i]=b.exports.useState(!1),s=b.exports.useRef(null),o=b.exports.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=b.exports.useRef(e),{autoClose:l,pauseOnHover:u,closeToast:c,onClick:d,closeOnClick:f}=e;b.exports.useEffect(()=>{a.current=e}),b.exports.useEffect(()=>(s.current&&s.current.addEventListener("d",y,{once:!0}),en(e.onOpen)&&e.onOpen(b.exports.isValidElement(e.children)&&e.children.props),()=>{const O=a.current;en(O.onClose)&&O.onClose(b.exports.isValidElement(O.children)&&O.children.props)}),[]),b.exports.useEffect(()=>(e.pauseOnFocusLoss&&v(),()=>{e.pauseOnFocusLoss&&m()}),[e.pauseOnFocusLoss]);function h(O){if(e.draggable){g();const z=s.current;o.canCloseOnClick=!0,o.canDrag=!0,o.boundingRect=z.getBoundingClientRect(),z.style.transition="",o.x=fC(O.nativeEvent),o.y=hC(O.nativeEvent),e.draggableDirection==="x"?(o.start=o.x,o.removalDistance=z.offsetWidth*(e.draggablePercent/100)):(o.start=o.y,o.removalDistance=z.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent/100))}}function p(){if(o.boundingRect){const{top:O,bottom:z,left:F,right:K}=o.boundingRect;e.pauseOnHover&&o.x>=F&&o.x<=K&&o.y>=O&&o.y<=z?w():y()}}function y(){n(!0)}function w(){n(!1)}function v(){document.hasFocus()||w(),window.addEventListener("focus",y),window.addEventListener("blur",w)}function m(){window.removeEventListener("focus",y),window.removeEventListener("blur",w)}function g(){o.didMove=!1,document.addEventListener("mousemove",E),document.addEventListener("mouseup",I),document.addEventListener("touchmove",E),document.addEventListener("touchend",I)}function _(){document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",I),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",I)}function E(O){const z=s.current;o.canDrag&&z&&(o.didMove=!0,t&&w(),o.x=fC(O),o.y=hC(O),e.draggableDirection==="x"?o.delta=o.x-o.start:o.delta=o.y-o.start,o.start!==o.x&&(o.canCloseOnClick=!1),z.style.transform="translate"+e.draggableDirection+"("+o.delta+"px)",z.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function I(){_();const O=s.current;if(o.canDrag&&o.didMove&&O){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance){i(!0),e.closeToast();return}O.style.transition="transform 0.2s, opacity 0.2s",O.style.transform="translate"+e.draggableDirection+"(0)",O.style.opacity="1"}}const C={onMouseDown:h,onTouchStart:h,onMouseUp:p,onTouchEnd:p};return l&&u&&(C.onMouseEnter=w,C.onMouseLeave=y),f&&(C.onClick=O=>{d&&d(O),o.canCloseOnClick&&c()}),{playToast:y,pauseToast:w,isRunning:t,preventExitTransition:r,toastRef:s,eventHandlers:C}}function z2(e){let{closeToast:t,theme:n,ariaLabel:r="close"}=e;return S("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:i=>{i.stopPropagation(),t(i)},"aria-label":r,children:S("svg",{"aria-hidden":"true",viewBox:"0 0 14 16",children:S("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})})})}function B2(e){let{delay:t,isRunning:n,closeToast:r,type:i,hide:s,className:o,style:a,controlledProgress:l,progress:u,rtl:c,isIn:d,theme:f}=e;const h={...a,animationDuration:t+"ms",animationPlayState:n?"running":"paused",opacity:s?0:1};l&&(h.transform="scaleX("+u+")");const p=li("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+f,"Toastify__progress-bar--"+i,{["Toastify__progress-bar--rtl"]:c}),y=en(o)?o({rtl:c,type:i,defaultClassName:p}):li(p,o),w={[l&&u>=1?"onTransitionEnd":"onAnimationEnd"]:l&&u<1?null:()=>{d&&r()}};return S("div",{role:"progressbar","aria-hidden":s?"true":"false","aria-label":"notification timer",className:y,style:h,...w})}B2.defaultProps={type:zr.DEFAULT,hide:!1};const Joe=e=>{const{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i}=Xoe(e),{closeButton:s,children:o,autoClose:a,onClick:l,type:u,hideProgressBar:c,closeToast:d,transition:f,position:h,className:p,style:y,bodyClassName:w,bodyStyle:v,progressClassName:m,progressStyle:g,updateId:_,role:E,progress:I,rtl:C,toastId:O,deleteToast:z,isIn:F,isLoading:K,iconOut:Y,theme:se}=e,ce=li("Toastify__toast","Toastify__toast-theme--"+se,"Toastify__toast--"+u,{["Toastify__toast--rtl"]:C}),de=en(p)?p({rtl:C,position:h,type:u,defaultClassName:ce}):li(ce,p),fe=!!I,Ee={closeToast:d,type:u,theme:se};let V=null;return s===!1||(en(s)?V=s(Ee):Ye.isValidElement(s)?V=Ye.cloneElement(s,Ee):V=z2(Ee)),S(f,{isIn:F,done:z,position:h,preventExitTransition:n,nodeRef:r,children:X("div",{id:O,onClick:l,className:de,...i,style:y,ref:r,children:[X("div",{...F&&{role:E},className:en(w)?w({type:u}):li("Toastify__toast-body",w),style:v,children:[Y!=null&&S("div",{className:li("Toastify__toast-icon",{["Toastify--animate-icon Toastify__zoom-enter"]:!K}),children:Y}),S("div",{children:o})]}),V,(a||fe)&&S(B2,{..._&&!fe?{key:"pb-"+_}:{},rtl:C,theme:se,delay:a,isRunning:t,isIn:F,closeToast:d,hide:c,type:u,style:g,className:m,controlledProgress:fe,progress:I})]})})},Zoe=zoe({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),n_=b.exports.forwardRef((e,t)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=Qoe(e),{className:s,style:o,rtl:a,containerId:l}=e;function u(c){const d=li("Toastify__toast-container","Toastify__toast-container--"+c,{["Toastify__toast-container--rtl"]:a});return en(s)?s({position:c,rtl:a,defaultClassName:d}):li(d,wd(s))}return b.exports.useEffect(()=>{t&&(t.current=r.current)},[]),S("div",{ref:r,className:"Toastify",id:l,children:n((c,d)=>{const f=d.length?{...o}:{...o,pointerEvents:"none"};return S("div",{className:u(c),style:f,children:d.map((h,p)=>{let{content:y,props:w}=h;return b.exports.createElement(Joe,{...w,isIn:i(w.toastId),style:{...w.style,"--nth":p+1,"--len":d.length},key:"toast-"+w.key},y)})},"container-"+c)})})});n_.displayName="ToastContainer";n_.defaultProps={position:U2.TOP_RIGHT,transition:Zoe,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:z2,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let ms=new Map,Rv,gu=[];function eae(e,t){let{containerId:n}=t;const r=ms.get(n||Rv);return r?r.getToast(e):null}function H2(){return Math.random().toString(36).substring(2,9)}function tae(e){return e&&(Ps(e.toastId)||oc(e.toastId))?e.toastId:H2()}function ac(e,t){return ms.size>0?xn.emit(0,e,t):gu.push({content:e,options:t}),t.toastId}function Dp(e,t){return{...t,type:t&&t.type||e,toastId:tae(t)}}function Rp(e){return(t,n)=>ac(t,Dp(e,n))}function Le(e,t){return ac(e,Dp(zr.DEFAULT,t))}Le.loading=(e,t)=>ac(e,Dp(zr.DEFAULT,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function nae(e,t,n){let{pending:r,error:i,success:s}=t,o;r&&(o=Ps(r)?Le.loading(r,n):Le.loading(r.render,{...n,...r}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},l=(c,d,f)=>{if(d==null){Le.dismiss(o);return}const h={type:c,...a,...n,data:f},p=Ps(d)?{render:d}:d;return o?Le.update(o,{...h,...p}):Le(p.render,{...h,...p}),f},u=en(e)?e():e;return u.then(c=>l("success",s,c)).catch(c=>l("error",i,c)),u}Le.promise=nae;Le.success=Rp(zr.SUCCESS);Le.info=Rp(zr.INFO);Le.error=Rp(zr.ERROR);Le.warning=Rp(zr.WARNING);Le.warn=Le.warning;Le.dark=(e,t)=>ac(e,Dp(zr.DEFAULT,{theme:"dark",...t}));Le.dismiss=e=>{ms.size>0?xn.emit(1,e):gu=gu.filter(t=>_d(e)&&t.options.toastId!==e)};Le.clearWaitingQueue=function(e){return e===void 0&&(e={}),xn.emit(5,e)};Le.isActive=e=>{let t=!1;return ms.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t};Le.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const n=eae(e,t);if(n){const{props:r,content:i}=n,s={...r,...t,toastId:t.toastId||e,updateId:H2()};s.toastId!==e&&(s.staleId=e);const o=s.render||i;delete s.render,ac(o,s)}},0)};Le.done=e=>{Le.update(e,{progress:1})};Le.onChange=e=>(xn.on(4,e),()=>{xn.off(4,e)});Le.POSITION=U2;Le.TYPE=zr;xn.on(2,e=>{Rv=e.containerId||e,ms.set(Rv,e),gu.forEach(t=>{xn.emit(0,t.content,t.options)}),gu=[]}).on(3,e=>{ms.delete(e.containerId||e),ms.size===0&&xn.off(0).off(1).off(5)});const rae=N.p`
  margin: 8px 4px;
  padding: 5px;
  font-weight: bold;
  text-align: center;
  width: 45%;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  ${({checked:e})=>e&&Rn`
    background-color: gray;
    transform: scale(1.02);
  `}

  &:hover {
    background-color: gray;
    transform: scale(1.02);
  }
`,iae=({size:e,setCheckedSize:t,checkedSize:n})=>S(rae,{onClick:()=>t(e),checked:n===e,children:e});function sae(){const{productId:e}=eF(),[t,n]=b.exports.useState(null),[r,i]=jr(gn),[s,o]=b.exports.useState(!0),a=Li(),[l,u]=b.exports.useState(null),[c,d]=b.exports.useState(36),f=Cn(pa),h=[36,37,38,39,40,41,42,43,44,45,46,47],p=v=>{n(v)},y=async()=>{const v=cu(Yo(ln,"products"),du("id","==",parseInt(e))),g=(await Xo(v)).docs[0].data();u(g),n(g.images[0]),o(!1)};b.exports.useEffect(()=>{y()},[]);const w=async v=>{r?(a(pd({userId:r.uid,cart:f,product:v})),Le.success("The product has been added to the cart",{position:"bottom-left",autoClose:4e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})):Le.error("You must log in to add a product",{position:"bottom-left",autoClose:4e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})};return X(Foe,{children:[X(ma,{children:[X(Doe,{children:[S(Noe,{children:s?S(Fw,{color:"#ef5454",secondaryColor:"#ef5454"}):X(Yn,{children:[t&&S(Roe,{src:t,alt:"default image",as:Ss.img,initial:{scale:0},animate:{scale:1}}),X($oe,{as:Ss.div,initial:{scale:0},animate:{scale:1},children:[S(La,{src:l==null?void 0:l.images[0],alt:"default mini image",onClick:()=>p(l==null?void 0:l.images[0]),isHighlighted:t===(l==null?void 0:l.images[0])}),S(La,{src:l==null?void 0:l.images[1],alt:"example mini image 1",onClick:()=>p(l==null?void 0:l.images[1]),isHighlighted:t===(l==null?void 0:l.images[1])}),S(La,{src:l==null?void 0:l.images[2],alt:"example mini image 2",onClick:()=>p(l==null?void 0:l.images[2]),isHighlighted:t===(l==null?void 0:l.images[2])}),S(La,{src:l==null?void 0:l.images[3],alt:"example mini image 3",onClick:()=>p(l==null?void 0:l.images[3]),isHighlighted:t===(l==null?void 0:l.images[3])}),S(La,{src:l==null?void 0:l.images[4],alt:"example mini image 4",onClick:()=>p(l==null?void 0:l.images[4]),isHighlighted:t===(l==null?void 0:l.images[4])})]})]})}),X(Loe,{children:[S("h1",{children:l==null?void 0:l.brand}),S("h2",{children:l==null?void 0:l.description}),S(Voe,{children:h.map(v=>S(iae,{size:v,setCheckedSize:d,checkedSize:c},v))}),X(Moe,{children:[X("h3",{children:["$",l==null?void 0:l.price]}),S("button",{onClick:()=>l&&w({...l,size:c}),children:"Add to cart"})]})]})]}),S(n_,{})]}),S(ga,{})]})}const oae=N.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`,aae=N.div`
display: flex;
flex-direction: column;
justify-content: space-between;
margin: 0 5px;
  padding: 20px;
  max-width: 700px;
  min-width: 250px;
  width: 100%;
  height: 400px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px gray;

  p{
    text-align: center;

    span {
      font-weight: bold;
    }

    span:nth-child(1) {
      font-size: 16px;

      @media (min-width: 576px){
        font-size: 20px;
      }
    }
    
    @media (min-width: 576px) {
      font-size: 20px;
    }
  }
`,lae=N.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 576px){
        font-size: 20px;
  }

  p:first-child {
    margin: 10px 0;
    font-size: 20px;
  }
`,uae=N.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f05454;
    padding: 5px 10px;
    border: none;
    margin-bottom: 5px;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;

    &:hover {
      transform: scale(1.05);
      background-color: rgb(245, 59, 59);
    }

    @media (min-width: 576px){
      padding: 10px 20px;    
    }
  }
`,cae=N.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  transform: translateX(-105%);
  opacity: 0;
  transition: transform 0.3s, opacity 0.3s;

  ${({showModal:e})=>e&&Rn`
    transform: translateX(0);
    opacity: 1;
  `}
`,dae=N.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 10px;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: white;
min-width: 250px;
height: 300px;
border-radius: 10px;

@media (min-width: 576px){
  justify-content: space-evenly;
  width: 500px;
 }

p{
  text-align: center;

  @media (min-width: 576px){
      font-size: 22px;
    }
}
`,fae=N.div`
display: flex;
justify-content: space-evenly;
align-items: center;
  margin-top: 40px;

  button{
    padding: 5px 10px;
    margin: 0 40px;
    background-color: #222831;
    color: white;
    border: none;
    border-radius: 6px;
    transition: background-color 0.3s, color 0.3s;
    cursor: pointer;

    &:hover {
      background-color: gray;
      color: black;
    }

    @media (min-width: 576px){
      font-size: 18px;
      padding: 7px 14px;
    }
  }
`,hae=N.div`
  position: relative;
  min-height: 100vh;
`,pae=N.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;function mae(e){return Bs({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M23,20 L23,6 L12,15 L1,6 L1,20 L23,20 Z M12,12 L22,4 L2,4 L12,12 Z"}}]})(e)}function $n(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function Sd(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Sd=function(n){return typeof n}:Sd=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Sd(e)}function St(e){$n(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||Sd(e)==="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function pC(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function mC(e){$n(1,arguments);var t=St(e);return t.setHours(0,0,0,0),t}var gae=864e5;function yae(e,t){$n(2,arguments);var n=mC(e),r=mC(t),i=n.getTime()-pC(n),s=r.getTime()-pC(r);return Math.round((i-s)/gae)}function El(e,t){$n(2,arguments);var n=St(e),r=St(t),i=n.getTime()-r.getTime();return i<0?-1:i>0?1:i}function vae(e,t){$n(2,arguments);var n=St(e),r=St(t),i=n.getFullYear()-r.getFullYear(),s=n.getMonth()-r.getMonth();return i*12+s}function wae(e,t){$n(2,arguments);var n=St(e),r=St(t);return n.getFullYear()-r.getFullYear()}function gC(e,t){var n=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return n<0?-1:n>0?1:n}function _ae(e,t){$n(2,arguments);var n=St(e),r=St(t),i=gC(n,r),s=Math.abs(yae(n,r));n.setDate(n.getDate()-i*s);var o=Number(gC(n,r)===-i),a=i*(s-o);return a===0?0:a}function Sae(e){$n(1,arguments);var t=St(e);return t.setHours(23,59,59,999),t}function xae(e){$n(1,arguments);var t=St(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function Eae(e){$n(1,arguments);var t=St(e);return Sae(t).getTime()===xae(t).getTime()}function bae(e,t){$n(2,arguments);var n=St(e),r=St(t),i=El(n,r),s=Math.abs(vae(n,r)),o;if(s<1)o=0;else{n.getMonth()===1&&n.getDate()>27&&n.setDate(30),n.setMonth(n.getMonth()-i*s);var a=El(n,r)===-i;Eae(St(e))&&s===1&&El(e,r)===1&&(a=!1),o=i*(s-Number(a))}return o===0?0:o}function Tae(e,t){$n(2,arguments);var n=St(e),r=St(t),i=El(n,r),s=Math.abs(wae(n,r));n.setFullYear(1584),r.setFullYear(1584);var o=El(n,r)===-i,a=i*(s-Number(o));return a===0?0:a}function Cae(){const[e,t]=jr(gn),n=Mi(),r=Li(),i=Cn(ZG),[s,o]=b.exports.useState(null),[a,l]=b.exports.useState(!0);b.exports.useEffect(()=>{e||n("/login")},[e]);const u=async()=>{const h=KO().currentUser,p=cu(Yo(ln,"users"),du("uid","==",h==null?void 0:h.uid)),y=await Xo(p);await WW(zs(ln,"users",y.docs[0].id)),await gz(h),r(Xm(!1)),qR(),r(i$()),n("/")},c=f=>{const h=Tae(Date.now(),f),p=bae(Date.now(),f),y=_ae(Date.now(),f);return h?`${h} ${h===1?"year ago":"years ago"}`:p?`${p} ${p===1?"month ago":"months ago"}`:y?`${y} ${y===1?"day ago":"days ago"}`:"less than 1 day ago"},d=async()=>{const f=cu(Yo(ln,"users"),du("uid","==",e==null?void 0:e.uid)),p=(await Xo(f)).docs[0].data();o({...p,signUpDate:c(p.signUpDate)}),l(!1)};return b.exports.useEffect(()=>{d()},[]),X(hae,{children:[S(ma,{children:S(oae,{as:Ss.div,initial:{scale:0},animate:{scale:1},children:S(aae,{children:a?S(pae,{children:S(Fw,{color:"#ef5454",secondaryColor:"#ef5454"})}):X(Yn,{children:[X("p",{children:["Hello ",S("span",{children:s==null?void 0:s.name}),"!"]}),X("p",{children:["registered: ",S("span",{children:s==null?void 0:s.signUpDate})]}),X(lae,{children:[S(mae,{}),S("p",{children:S("span",{children:s==null?void 0:s.email})})]}),S(uae,{children:X("button",{onClick:()=>r(Xm(!0)),children:[S(v$,{}),"Delete account"]})})]})})})}),S(cae,{showModal:i,children:X(dae,{children:[S("p",{children:"Are you sure you want to delete your account?"}),X(fae,{children:[S("button",{onClick:u,children:"Yes"}),S("button",{onClick:()=>r(Xm(!1)),children:"No"})]})]})}),S(ga,{})]})}const Iae=N.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
`,Va=N.p`
  color: crimson;
  text-align: center;
  font-size: 10px;
  
  @media (min-width: 576px) {
    font-size: 12px;
  }
  `,kae=N.p`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 80vh;

    button {
      margin-top: 10px;
    padding: 5px 10px;
    border-radius: 6px;
    width: 100px;
    border: none;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    background-color: #F05454;
    color: black;
    transition: transform 0.3s, background-color 0.3s;

    &:hover {
      transform: scale(1.05);
      background-color: rgb(245, 59, 59);
    }

    @media (min-width: 576px) {
      width: 160px;
    padding: 10px 20px;
  }
    }
  `,Aae=N.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  max-width: 700px;
  position: relative;
  width: 100%;
  border-radius: 6px;
  box-shadow: 0 0 10px gray;
  background-color: white;

  img {
    display: none;
    @media (min-width: 576px){
    display: block;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  button {
    margin-top: 10px;
    padding: 5px 10px;
    border-radius: 6px;
    width: 100px;
    border: none;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    background-color: #F05454;
    color: black;
    transition: transform 0.3s, background-color 0.3s;

    &:hover {
      transform: scale(1.05);
      background-color: rgb(245, 59, 59);
    }

    @media (min-width: 576px) {
      width: 160px;
    padding: 10px 20px;
  }
  }

  input {
    margin: 5px 0;
    padding: 6px 12px;
    border-radius: 6px;
    background-color: rgba(0, 0, 0, 0.8);
    box-shadow: 0 0 10px gray;
    border: 1px solid black;
    color: white;
    font-family: 'Montserrat', sans-serif;

    &:focus {
      outline: transparent;
    }

    @media (min-width: 576px) {
   font-size: 20px;
  }
  }
  `,Oae=N.div`
  position: relative;
  min-height: 100vh;
`,Pae=N.p`
  margin-bottom: 7px;

  @media (min-width: 768px) {
    margin-bottom: 20px;
    padding-top: 20px;
    font-size: 20px;
  }
`,Dae=N.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
  font-size: 10px;

  p{
    margin-right: 10px;
  }

  input {
    padding: 2px;
    box-shadow: none;
    cursor: pointer;
  }
`,Rae=N.img`
  z-index: -1;
  position: absolute;
  right: 20%;
  top: -20%;
  width: 1000px;
  height: 600px;
`,$ae="/ecommerce-react/assets/blob.297b1b9e.svg";function Nae(){return S(Rae,{src:$ae,alt:"blob photo"})}function Mae(){var c,d,f,h,p;const e=Mi(),[t,n,r]=jr(gn),i=({email:y,password:w,name:v})=>{XW(v,y,w),e("/")},s=t_().shape({email:us().email("Please enter a valid email schema").required("Please enter your email"),password:us().required("Please enter your password").min(6,"Password must have more than 6 characters").max(20,"Password must have less than 20 characters"),confirmPassword:us().oneOf([Jre("password"),null],"Passwords must match").required("Please confirm your password"),name:us().required("Please enter your name").min(3,"Name must have more than 3 character"),checkbox:u2().oneOf([!0],"You must accept the terms and conditions")}),{register:o,handleSubmit:a,watch:l,formState:{errors:u}}=R$({resolver:V2(s)});return t?X(kae,{children:[S("p",{children:"You are already registered"}),S("button",{onClick:()=>e("/"),children:"Back to shop"})]}):X(Oae,{children:[S(ma,{children:S(Iae,{children:X(Aae,{children:[S(Pae,{as:Ss.div,initial:{scale:0},animate:{scale:1},children:"Register an account"}),X("form",{onSubmit:a(i),children:[S("input",{type:"email",placeholder:"Email",...o("email")}),S(Va,{children:(c=u.email)==null?void 0:c.message}),S("input",{type:"password",placeholder:"Password",...o("password")}),S(Va,{children:(d=u.password)==null?void 0:d.message}),S("input",{type:"password",placeholder:"Confirm Password",...o("confirmPassword")}),S(Va,{children:(f=u.confirmPassword)==null?void 0:f.message}),S("input",{type:"text",placeholder:"Name",...o("name")}),S(Va,{children:(h=u.name)==null?void 0:h.message}),X(Dae,{children:[S("p",{children:"I agree the Terms & Conditions"}),S("input",{type:"checkbox",...o("checkbox")})]}),S(Va,{children:(p=u.checkbox)==null?void 0:p.message}),S("button",{children:"Register"})]}),S(Nae,{})]})})}),S(ga,{})]})}const Lae=()=>{const e=$s();return S(YU,{children:X(uF,{location:e,children:[S(Gi,{path:"/",element:S(CK,{})}),S(Gi,{path:"/profile",element:S(Cae,{})}),S(Gi,{path:"/cart",element:S(XG,{})}),S(Gi,{path:"/product/:productId",element:S(sae,{})}),S(Gi,{path:"/login",element:S(Poe,{})}),S(Gi,{path:"/register",element:S(Mae,{})})]},e.pathname)})},Fae=N.footer`
  height: 50px;
  border-top: 1px solid #dddddd;
  background-color: #f05454;
`,Vae=N.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 1400px;

  a {
    text-align: center;
    margin: 0 10px;
    color: white;
    text-decoration: none;
    font-size: 7px;

    @media(min-width: 576px){
      font-size: 10px;
      margin: 0 16px;
      padding: 5px;
    }
  }
`,jae=()=>S(Fae,{children:X(Vae,{children:[S("a",{href:"#",children:"Data preferences"}),S("a",{href:"#",children:"Privacy Notice"}),S("a",{href:"#",children:"Terms & Conditions"}),S("a",{href:"#",children:"Legal Notice"})]})}),Uae=N.nav`
  position: fixed;
  margin: 0 auto;
  background-color: #222831;
  height: 60px;
  width: 100%;
  z-index: 100;

  @media (min-width: 768px) {
    a {
      margin: 0 10px;
    }
  }
`,lg=N(gF)`
font-size: 30px;
  text-decoration: none;
  color: #eeeeee;
  cursor: pointer;

  &.active {
    color: #F05454;
  }
`,zae=N.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin: 0 auto;
  max-width: 1400px;
  width: 100%;

  section {
    width: 33%;

    button {
      margin-left: 5px;
    }
  }

  @media (min-width: 768px) {
    section {
      display: none;
    }
  }

  a, button {
    transition: color 0.15s;
  }

  a:hover, button:hover {
    color: #F05454;
  }
`,Bae=N.button`
  border: none;
  background-color: transparent;
  font-size: 18px;
  cursor: pointer;
  color: #eeeeee;
  ${({isOpen:e})=>e&&Rn`
    color: #F05454;
  `}

  @media (min-width: 370px) {
      font-size: 24px;
    }

    @media (min-width: 580px) {
      font-size: 28px;
    }
`,Hae=N.div`
display: flex;
justify-content: center;
align-items: center;
  width: 33%;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px; 
    text-align: center;
    font-weight: bold;

    @media (min-width: 580px){
      font-size: 20px;
    }
  }

  @media (min-width: 768px){
    justify-content: flex-start;
  }
`;N.div`
display: flex;
align-items: center;
justify-content: center;
  flex-direction: column;
`;const Wae=N.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 5px;
  height: 100%;
  width: 33%;
  font-size: 8px;

  a {
    padding: 0 2px;
    font-size: 18px;

    @media (min-width: 370px) {
      font-size: 24px;
    }

    @media (min-width: 580px) {
      font-size: 28px;
      padding: 0 5px;
    }
  }
  
  button {
    font-size: 10px;

    @media (min-width: 370px) {
      font-size: 12px;
    }

    @media (min-width: 580px) {
      font-size: 13px;
    }
  }
`,qae=N.button`
color: white;
text-transform: uppercase;
background-color: transparent;
padding: 5px 10px;
border: none;
cursor: pointer;
`,Gae=N.div`
  position: relative;

p {
  position: absolute;
  top: -5px;
  right: 0px;
  background-color: red;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  text-align: center;
  font-size: 12px;
  pointer-events: none;

  @media (min-width: 768px){
    width: 20px;
    height: 20px;
    font-size: 16px;
    right: 10px;
  }
}
`;function Kae(e){return Bs({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"}}]})(e)}function Yae(e){return Bs({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M42.63 89c8.3 49.2 17.42 100.1 14.35 151.5-2.9 48.8-28.19 92.8-31.58 134.5h319.7c5.3-16.4 16.2-30.9 28.3-42.1 4.2-3.9 8.5-7.5 12.8-10.6-34.9-9.7-61.7-24-82.5-41.3H244v-18h41c-8.5-9.5-15.7-19.6-21.7-30H208v-18h46c-4.6-9.9-8.4-19.9-11.7-30H192v-18h44.8c-2.8-10.1-5.3-20.2-7.6-30H176v-18h49c-2.4-10.5-4.9-20.54-7.7-30H42.63zM128 215c31.4 0 57 25.6 57 57s-25.6 57-57 57c-31.37 0-57-25.6-57-57s25.63-57 57-57zm0 18c-21.6 0-39 17.4-39 39s17.4 39 39 39 39-17.4 39-39-17.4-39-39-39zm287.6 96c-5 .3-18.6 6.5-30 17.1-8.7 8-16.5 18.3-21.2 28.9H448c11.5 0 25.6-5.7 38.6-12.3-.4-4.2-1-7.7-2.2-10-1.6-3.3-3.9-5.7-8.7-8.3-9.6-5.2-28.9-9.5-60.1-15.4zm71.4 52.9c-2 .9-3.4 1.6-5.7 2.5C471 388.5 459 393 448 393H25v30h407c22.2 0 45.3-8.7 55-12.8v-28.3z"}}]})(e)}function Qae(e){return Bs({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"}}]})(e)}function Xae(){const e=Li(),t=$s(),n=Mi(),r=Cn(Lw),[i,s,o]=jr(gn),a=Cn(pa),l=()=>{qR(),e(i$())};return S(Yn,{children:S(Uae,{children:X(zae,{children:[S("section",{children:t.pathname==="/"&&S(Bae,{isOpen:r,onClick:()=>e(S$()),children:S(Qae,{})})}),S(Hae,{children:X(lg,{to:"/",children:[S(Yae,{}),"FUTURE"]})}),X(Wae,{children:[S(qae,{onClick:()=>i?l():n("/login"),children:i?"log out":"log in"}),i&&S(lg,{to:"/profile",children:S(bG,{})}),X(Gae,{children:[S(lg,{to:"/cart",children:S(Kae,{})}),a.length>0&&S("p",{children:a.length})]})]})]})})})}const Jae=N.main`
padding-top: 80px;
`;function Zae({children:e}){const[t]=jr(gn),n=Cn(pa),r=Li();return b.exports.useEffect(()=>{t&&!n.length&&r(md(t.uid))},[t]),X(Yn,{children:[S(Xae,{}),S(Jae,{children:e}),S(jae,{})]})}function ele(){return S(Zae,{children:S(Lae,{})})}const tle=kq({reducer:{categories:eK,cart:Vq}}),nle=_G`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: black;
    background-color: #DDDDDD;
    font-family: 'Montserrat', sans-serif;
  }
`;cg.createRoot(document.getElementById("root")).render(S(Ye.StrictMode,{children:S(pF,{children:X(E6,{store:tle,children:[S(nle,{}),S(ele,{})]})})}));
