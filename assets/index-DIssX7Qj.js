(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Zf={exports:{}},wo={};var xg;function gS(){if(xg)return wo;xg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:u}}return wo.Fragment=t,wo.jsx=i,wo.jsxs=i,wo}var Sg;function _S(){return Sg||(Sg=1,Zf.exports=gS()),Zf.exports}var G=_S(),Kf={exports:{}},at={};var yg;function vS(){if(yg)return at;yg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),S=Symbol.iterator;function E(N){return N===null||typeof N!="object"?null:(N=S&&N[S]||N["@@iterator"],typeof N=="function"?N:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function x(N,ne,_e){this.props=N,this.context=ne,this.refs=y,this.updater=_e||R}x.prototype.isReactComponent={},x.prototype.setState=function(N,ne){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ne,"setState")},x.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function z(){}z.prototype=x.prototype;function P(N,ne,_e){this.props=N,this.context=ne,this.refs=y,this.updater=_e||R}var L=P.prototype=new z;L.constructor=P,C(L,x.prototype),L.isPureReactComponent=!0;var F=Array.isArray;function B(){}var U={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function A(N,ne,_e){var Ae=_e.ref;return{$$typeof:o,type:N,key:ne,ref:Ae!==void 0?Ae:null,props:_e}}function w(N,ne){return A(N.type,ne,N.props)}function k(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function se(N){var ne={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(_e){return ne[_e]})}var ie=/\/+/g;function pe(N,ne){return typeof N=="object"&&N!==null&&N.key!=null?se(""+N.key):ne.toString(36)}function fe(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(B,B):(N.status="pending",N.then(function(ne){N.status==="pending"&&(N.status="fulfilled",N.value=ne)},function(ne){N.status==="pending"&&(N.status="rejected",N.reason=ne)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function O(N,ne,_e,Ae,Be){var te=typeof N;(te==="undefined"||te==="boolean")&&(N=null);var ue=!1;if(N===null)ue=!0;else switch(te){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(N.$$typeof){case o:case t:ue=!0;break;case v:return ue=N._init,O(ue(N._payload),ne,_e,Ae,Be)}}if(ue)return Be=Be(N),ue=Ae===""?"."+pe(N,0):Ae,F(Be)?(_e="",ue!=null&&(_e=ue.replace(ie,"$&/")+"/"),O(Be,ne,_e,"",function(He){return He})):Be!=null&&(k(Be)&&(Be=w(Be,_e+(Be.key==null||N&&N.key===Be.key?"":(""+Be.key).replace(ie,"$&/")+"/")+ue)),ne.push(Be)),1;ue=0;var De=Ae===""?".":Ae+":";if(F(N))for(var ke=0;ke<N.length;ke++)Ae=N[ke],te=De+pe(Ae,ke),ue+=O(Ae,ne,_e,te,Be);else if(ke=E(N),typeof ke=="function")for(N=ke.call(N),ke=0;!(Ae=N.next()).done;)Ae=Ae.value,te=De+pe(Ae,ke++),ue+=O(Ae,ne,_e,te,Be);else if(te==="object"){if(typeof N.then=="function")return O(fe(N),ne,_e,Ae,Be);throw ne=String(N),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return ue}function H(N,ne,_e){if(N==null)return N;var Ae=[],Be=0;return O(N,Ae,"","",function(te){return ne.call(_e,te,Be++)}),Ae}function ae(N){if(N._status===-1){var ne=N._result;ne=ne(),ne.then(function(_e){(N._status===0||N._status===-1)&&(N._status=1,N._result=_e)},function(_e){(N._status===0||N._status===-1)&&(N._status=2,N._result=_e)}),N._status===-1&&(N._status=0,N._result=ne)}if(N._status===1)return N._result.default;throw N._result}var Me=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},Se={map:H,forEach:function(N,ne,_e){H(N,function(){ne.apply(this,arguments)},_e)},count:function(N){var ne=0;return H(N,function(){ne++}),ne},toArray:function(N){return H(N,function(ne){return ne})||[]},only:function(N){if(!k(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return at.Activity=_,at.Children=Se,at.Component=x,at.Fragment=i,at.Profiler=l,at.PureComponent=P,at.StrictMode=s,at.Suspense=m,at.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=U,at.__COMPILER_RUNTIME={__proto__:null,c:function(N){return U.H.useMemoCache(N)}},at.cache=function(N){return function(){return N.apply(null,arguments)}},at.cacheSignal=function(){return null},at.cloneElement=function(N,ne,_e){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Ae=C({},N.props),Be=N.key;if(ne!=null)for(te in ne.key!==void 0&&(Be=""+ne.key),ne)!Z.call(ne,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&ne.ref===void 0||(Ae[te]=ne[te]);var te=arguments.length-2;if(te===1)Ae.children=_e;else if(1<te){for(var ue=Array(te),De=0;De<te;De++)ue[De]=arguments[De+2];Ae.children=ue}return A(N.type,Be,Ae)},at.createContext=function(N){return N={$$typeof:d,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},at.createElement=function(N,ne,_e){var Ae,Be={},te=null;if(ne!=null)for(Ae in ne.key!==void 0&&(te=""+ne.key),ne)Z.call(ne,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(Be[Ae]=ne[Ae]);var ue=arguments.length-2;if(ue===1)Be.children=_e;else if(1<ue){for(var De=Array(ue),ke=0;ke<ue;ke++)De[ke]=arguments[ke+2];Be.children=De}if(N&&N.defaultProps)for(Ae in ue=N.defaultProps,ue)Be[Ae]===void 0&&(Be[Ae]=ue[Ae]);return A(N,te,Be)},at.createRef=function(){return{current:null}},at.forwardRef=function(N){return{$$typeof:h,render:N}},at.isValidElement=k,at.lazy=function(N){return{$$typeof:v,_payload:{_status:-1,_result:N},_init:ae}},at.memo=function(N,ne){return{$$typeof:p,type:N,compare:ne===void 0?null:ne}},at.startTransition=function(N){var ne=U.T,_e={};U.T=_e;try{var Ae=N(),Be=U.S;Be!==null&&Be(_e,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(B,Me)}catch(te){Me(te)}finally{ne!==null&&_e.types!==null&&(ne.types=_e.types),U.T=ne}},at.unstable_useCacheRefresh=function(){return U.H.useCacheRefresh()},at.use=function(N){return U.H.use(N)},at.useActionState=function(N,ne,_e){return U.H.useActionState(N,ne,_e)},at.useCallback=function(N,ne){return U.H.useCallback(N,ne)},at.useContext=function(N){return U.H.useContext(N)},at.useDebugValue=function(){},at.useDeferredValue=function(N,ne){return U.H.useDeferredValue(N,ne)},at.useEffect=function(N,ne){return U.H.useEffect(N,ne)},at.useEffectEvent=function(N){return U.H.useEffectEvent(N)},at.useId=function(){return U.H.useId()},at.useImperativeHandle=function(N,ne,_e){return U.H.useImperativeHandle(N,ne,_e)},at.useInsertionEffect=function(N,ne){return U.H.useInsertionEffect(N,ne)},at.useLayoutEffect=function(N,ne){return U.H.useLayoutEffect(N,ne)},at.useMemo=function(N,ne){return U.H.useMemo(N,ne)},at.useOptimistic=function(N,ne){return U.H.useOptimistic(N,ne)},at.useReducer=function(N,ne,_e){return U.H.useReducer(N,ne,_e)},at.useRef=function(N){return U.H.useRef(N)},at.useState=function(N){return U.H.useState(N)},at.useSyncExternalStore=function(N,ne,_e){return U.H.useSyncExternalStore(N,ne,_e)},at.useTransition=function(){return U.H.useTransition()},at.version="19.2.3",at}var Mg;function Ch(){return Mg||(Mg=1,Kf.exports=vS()),Kf.exports}var ti=Ch(),Qf={exports:{}},Do={},Jf={exports:{}},$f={};var Eg;function xS(){return Eg||(Eg=1,(function(o){function t(O,H){var ae=O.length;O.push(H);e:for(;0<ae;){var Me=ae-1>>>1,Se=O[Me];if(0<l(Se,H))O[Me]=H,O[ae]=Se,ae=Me;else break e}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var H=O[0],ae=O.pop();if(ae!==H){O[0]=ae;e:for(var Me=0,Se=O.length,N=Se>>>1;Me<N;){var ne=2*(Me+1)-1,_e=O[ne],Ae=ne+1,Be=O[Ae];if(0>l(_e,ae))Ae<Se&&0>l(Be,_e)?(O[Me]=Be,O[Ae]=ae,Me=Ae):(O[Me]=_e,O[ne]=ae,Me=ne);else if(Ae<Se&&0>l(Be,ae))O[Me]=Be,O[Ae]=ae,Me=Ae;else break e}}return H}function l(O,H){var ae=O.sortIndex-H.sortIndex;return ae!==0?ae:O.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],v=1,_=null,S=3,E=!1,R=!1,C=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function L(O){for(var H=i(p);H!==null;){if(H.callback===null)s(p);else if(H.startTime<=O)s(p),H.sortIndex=H.expirationTime,t(m,H);else break;H=i(p)}}function F(O){if(C=!1,L(O),!R)if(i(m)!==null)R=!0,B||(B=!0,se());else{var H=i(p);H!==null&&fe(F,H.startTime-O)}}var B=!1,U=-1,Z=5,A=-1;function w(){return y?!0:!(o.unstable_now()-A<Z)}function k(){if(y=!1,B){var O=o.unstable_now();A=O;var H=!0;try{e:{R=!1,C&&(C=!1,z(U),U=-1),E=!0;var ae=S;try{t:{for(L(O),_=i(m);_!==null&&!(_.expirationTime>O&&w());){var Me=_.callback;if(typeof Me=="function"){_.callback=null,S=_.priorityLevel;var Se=Me(_.expirationTime<=O);if(O=o.unstable_now(),typeof Se=="function"){_.callback=Se,L(O),H=!0;break t}_===i(m)&&s(m),L(O)}else s(m);_=i(m)}if(_!==null)H=!0;else{var N=i(p);N!==null&&fe(F,N.startTime-O),H=!1}}break e}finally{_=null,S=ae,E=!1}H=void 0}}finally{H?se():B=!1}}}var se;if(typeof P=="function")se=function(){P(k)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,pe=ie.port2;ie.port1.onmessage=k,se=function(){pe.postMessage(null)}}else se=function(){x(k,0)};function fe(O,H){U=x(function(){O(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(O){switch(S){case 1:case 2:case 3:var H=3;break;default:H=S}var ae=S;S=H;try{return O()}finally{S=ae}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(O,H){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var ae=S;S=O;try{return H()}finally{S=ae}},o.unstable_scheduleCallback=function(O,H,ae){var Me=o.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?Me+ae:Me):ae=Me,O){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=ae+Se,O={id:v++,callback:H,priorityLevel:O,startTime:ae,expirationTime:Se,sortIndex:-1},ae>Me?(O.sortIndex=ae,t(p,O),i(m)===null&&O===i(p)&&(C?(z(U),U=-1):C=!0,fe(F,ae-Me))):(O.sortIndex=Se,t(m,O),R||E||(R=!0,B||(B=!0,se()))),O},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(O){var H=S;return function(){var ae=S;S=H;try{return O.apply(this,arguments)}finally{S=ae}}}})($f)),$f}var bg;function SS(){return bg||(bg=1,Jf.exports=xS()),Jf.exports}var ed={exports:{}},Nn={};var Tg;function yS(){if(Tg)return Nn;Tg=1;var o=Ch();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,v){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:v}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Nn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,v)},Nn.flushSync=function(m){var p=d.T,v=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=p,s.p=v,s.d.f()}},Nn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Nn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Nn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,_=h(v,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:S,fetchPriority:E}):v==="script"&&s.d.X(m,{crossOrigin:_,integrity:S,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Nn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Nn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,_=h(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Nn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Nn.requestFormReset=function(m){s.d.r(m)},Nn.unstable_batchedUpdates=function(m,p){return m(p)},Nn.useFormState=function(m,p,v){return d.H.useFormState(m,p,v)},Nn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Nn.version="19.2.3",Nn}var Ag;function MS(){if(Ag)return ed.exports;Ag=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),ed.exports=yS(),ed.exports}var Rg;function ES(){if(Rg)return Do;Rg=1;var o=SS(),t=Ch(),i=MS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var g=!1,b=c.child;b;){if(b===a){g=!0,a=c,r=f;break}if(b===r){g=!0,r=c,a=f;break}b=b.sibling}if(!g){for(b=f.child;b;){if(b===a){g=!0,a=f,r=c;break}if(b===r){g=!0,r=f,a=c;break}b=b.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,S=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),P=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function se(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Symbol.for("react.client.reference");function pe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ie?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case F:return"Suspense";case B:return"SuspenseList";case A:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case P:return e.displayName||"Context";case z:return(e._context.displayName||"Context")+".Consumer";case L:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case U:return n=e.displayName||null,n!==null?n:pe(e.type)||"Memo";case Z:n=e._payload,e=e._init;try{return pe(e(n))}catch{}}return null}var fe=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},Me=[],Se=-1;function N(e){return{current:e}}function ne(e){0>Se||(e.current=Me[Se],Me[Se]=null,Se--)}function _e(e,n){Se++,Me[Se]=e.current,e.current=n}var Ae=N(null),Be=N(null),te=N(null),ue=N(null);function De(e,n){switch(_e(te,n),_e(Be,e),_e(Ae,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?V0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=V0(n),e=k0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ne(Ae),_e(Ae,e)}function ke(){ne(Ae),ne(Be),ne(te)}function He(e){e.memoizedState!==null&&_e(ue,e);var n=Ae.current,a=k0(n,e.type);n!==a&&(_e(Be,e),_e(Ae,a))}function dt(e){Be.current===e&&(ne(Ae),ne(Be)),ue.current===e&&(ne(ue),To._currentValue=ae)}var Kt,gt;function ht(e){if(Kt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Kt=n&&n[1]||"",gt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Kt+e+gt}var Rt=!1;function rt(e,n){if(!e||Rt)return"";Rt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var ge=function(){throw Error()};if(Object.defineProperty(ge.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ge,[])}catch(le){var ee=le}Reflect.construct(e,[],ge)}else{try{ge.call()}catch(le){ee=le}e.call(ge.prototype)}}else{try{throw Error()}catch(le){ee=le}(ge=e())&&typeof ge.catch=="function"&&ge.catch(function(){})}}catch(le){if(le&&ee&&typeof le.stack=="string")return[le.stack,ee.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),g=f[0],b=f[1];if(g&&b){var I=g.split(`
`),J=b.split(`
`);for(c=r=0;r<I.length&&!I[r].includes("DetermineComponentFrameRoot");)r++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(r===I.length||c===J.length)for(r=I.length-1,c=J.length-1;1<=r&&0<=c&&I[r]!==J[c];)c--;for(;1<=r&&0<=c;r--,c--)if(I[r]!==J[c]){if(r!==1||c!==1)do if(r--,c--,0>c||I[r]!==J[c]){var de=`
`+I[r].replace(" at new "," at ");return e.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",e.displayName)),de}while(1<=r&&0<=c);break}}}finally{Rt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ht(a):""}function Qt(e,n){switch(e.tag){case 26:case 27:case 5:return ht(e.type);case 16:return ht("Lazy");case 13:return e.child!==n&&n!==null?ht("Suspense Fallback"):ht("Suspense");case 19:return ht("SuspenseList");case 0:case 15:return rt(e.type,!1);case 11:return rt(e.type.render,!1);case 1:return rt(e.type,!0);case 31:return ht("Activity");default:return""}}function V(e){try{var n="",a=null;do n+=Qt(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var jt=Object.prototype.hasOwnProperty,yt=o.unstable_scheduleCallback,Nt=o.unstable_cancelCallback,je=o.unstable_shouldYield,D=o.unstable_requestPaint,M=o.unstable_now,W=o.unstable_getCurrentPriorityLevel,he=o.unstable_ImmediatePriority,xe=o.unstable_UserBlockingPriority,ce=o.unstable_NormalPriority,Ze=o.unstable_LowPriority,Ce=o.unstable_IdlePriority,Xe=o.log,tt=o.unstable_setDisableYieldValue,Ee=null,be=null;function Fe(e){if(typeof Xe=="function"&&tt(e),be&&typeof be.setStrictMode=="function")try{be.setStrictMode(Ee,e)}catch{}}var Pe=Math.clz32?Math.clz32:q,we=Math.log,lt=Math.LN2;function q(e){return e>>>=0,e===0?32:31-(we(e)/lt|0)|0}var Ue=256,Te=262144,ze=4194304;function ye(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ve(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var c=0,f=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var b=r&134217727;return b!==0?(r=b&~f,r!==0?c=ye(r):(g&=b,g!==0?c=ye(g):a||(a=b&~e,a!==0&&(c=ye(a))))):(b=r&~f,b!==0?c=ye(b):g!==0?c=ye(g):a||(a=r&~e,a!==0&&(c=ye(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Re(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function nt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ot(){var e=ze;return ze<<=1,(ze&62914560)===0&&(ze=4194304),e}function Mt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Dn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function gi(e,n,a,r,c,f){var g=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,I=e.expirationTimes,J=e.hiddenUpdates;for(a=g&~a;0<a;){var de=31-Pe(a),ge=1<<de;b[de]=0,I[de]=-1;var ee=J[de];if(ee!==null)for(J[de]=null,de=0;de<ee.length;de++){var le=ee[de];le!==null&&(le.lane&=-536870913)}a&=~ge}r!==0&&Zo(e,r,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(g&~n))}function Zo(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Pe(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function zr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Pe(a),c=1<<r;c&n|e[r]&n&&(e[r]|=n),a&=~c}}function Ns(e,n){var a=n&-n;return a=(a&42)!==0?1:Fr(a),(a&(e.suspendedLanes|n))!==0?0:a}function Fr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Us(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ir(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:dg(e.type))}function wi(e,n){var a=H.p;try{return H.p=e,n()}finally{H.p=a}}var ni=Math.random().toString(36).slice(2),sn="__reactFiber$"+ni,vn="__reactProps$"+ni,_i="__reactContainer$"+ni,Ls="__reactEvents$"+ni,Os="__reactListeners$"+ni,Ko="__reactHandles$"+ni,Br="__reactResources$"+ni,ts="__reactMarker$"+ni;function Hr(e){delete e[sn],delete e[vn],delete e[Ls],delete e[Os],delete e[Ko]}function Sa(e){var n=e[sn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[_i]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=K0(e);e!==null;){if(a=e[sn])return a;e=K0(e)}return n}e=a,a=e.parentNode}return null}function ya(e){if(e=e[sn]||e[_i]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ns(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ma(e){var n=e[Br];return n||(n=e[Br]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function T(e){e[ts]=!0}var j=new Set,oe={};function $(e,n){K(e,n),K(e+"Capture",n)}function K(e,n){for(oe[e]=n,e=0;e<n.length;e++)j.add(n[e])}var Ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ie={},Le={};function Ge(e){return jt.call(Le,e)?!0:jt.call(Ie,e)?!1:Ne.test(e)?Le[e]=!0:(Ie[e]=!0,!1)}function qe(e,n,a){if(Ge(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Je(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function We(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function $e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ct(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Yt(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Xt(e){if(!e._valueTracker){var n=Ct(e)?"checked":"value";e._valueTracker=Yt(e,n,""+e[n])}}function Ut(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=Ct(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function Ke(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var wt=/[\n"\\]/g;function it(e){return e.replace(wt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function xn(e,n,a,r,c,f,g,b){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),n!=null?g==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+$e(n)):e.value!==""+$e(n)&&(e.value=""+$e(n)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),n!=null?Sn(e,g,$e(n)):a!=null?Sn(e,g,$e(a)):r!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+$e(b):e.removeAttribute("name")}function Vi(e,n,a,r,c,f,g,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Xt(e);return}a=a!=null?""+$e(a):"",n=n!=null?""+$e(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=b?e.checked:!!r,e.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g),Xt(e)}function Sn(e,n,a){n==="number"&&Ke(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ii(e,n,a,r){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&r&&(e[a].defaultSelected=!0)}else{for(a=""+$e(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Pt(e,n,a){if(n!=null&&(n=""+$e(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+$e(a):""}function yn(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(fe(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=$e(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Xt(e)}function fn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Mn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function En(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||Mn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Ps(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&En(e,c,r)}else for(var f in n)n.hasOwnProperty(f)&&En(e,f,n[f])}function vi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),hv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qo(e){return hv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ki(){}var qc=null;function Wc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zs=null,Fs=null;function Gh(e){var n=ya(e);if(n&&(e=n.stateNode)){var a=e[vn]||null;e:switch(e=n.stateNode,n.type){case"input":if(xn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+it(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var c=r[vn]||null;if(!c)throw Error(s(90));xn(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Ut(r)}break e;case"textarea":Pt(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ii(e,!!a.multiple,n,!1)}}}var jc=!1;function Vh(e,n,a){if(jc)return e(n,a);jc=!0;try{var r=e(n);return r}finally{if(jc=!1,(zs!==null||Fs!==null)&&(Il(),zs&&(n=zs,e=Fs,Fs=zs=null,Gh(n),e)))for(n=0;n<e.length;n++)Gh(e[n])}}function Gr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[vn]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yc=!1;if(Xi)try{var Vr={};Object.defineProperty(Vr,"passive",{get:function(){Yc=!0}}),window.addEventListener("test",Vr,Vr),window.removeEventListener("test",Vr,Vr)}catch{Yc=!1}var Ea=null,Zc=null,Jo=null;function kh(){if(Jo)return Jo;var e,n=Zc,a=n.length,r,c="value"in Ea?Ea.value:Ea.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var g=a-e;for(r=1;r<=g&&n[a-r]===c[f-r];r++);return Jo=c.slice(e,1<r?1-r:void 0)}function $o(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function el(){return!0}function Xh(){return!1}function Fn(e){function n(a,r,c,f,g){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?el:Xh,this.isPropagationStopped=Xh,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),n}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tl=Fn(is),kr=_({},is,{view:0,detail:0}),pv=Fn(kr),Kc,Qc,Xr,nl=_({},kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$c,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xr&&(Xr&&e.type==="mousemove"?(Kc=e.screenX-Xr.screenX,Qc=e.screenY-Xr.screenY):Qc=Kc=0,Xr=e),Kc)},movementY:function(e){return"movementY"in e?e.movementY:Qc}}),qh=Fn(nl),mv=_({},nl,{dataTransfer:0}),gv=Fn(mv),_v=_({},kr,{relatedTarget:0}),Jc=Fn(_v),vv=_({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),xv=Fn(vv),Sv=_({},is,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yv=Fn(Sv),Mv=_({},is,{data:0}),Wh=Fn(Mv),Ev={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Av(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Tv[e])?!!n[e]:!1}function $c(){return Av}var Rv=_({},kr,{key:function(e){if(e.key){var n=Ev[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=$o(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$c,charCode:function(e){return e.type==="keypress"?$o(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$o(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cv=Fn(Rv),wv=_({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jh=Fn(wv),Dv=_({},kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$c}),Nv=Fn(Dv),Uv=_({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lv=Fn(Uv),Ov=_({},nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pv=Fn(Ov),zv=_({},is,{newState:0,oldState:0}),Fv=Fn(zv),Iv=[9,13,27,32],eu=Xi&&"CompositionEvent"in window,qr=null;Xi&&"documentMode"in document&&(qr=document.documentMode);var Bv=Xi&&"TextEvent"in window&&!qr,Yh=Xi&&(!eu||qr&&8<qr&&11>=qr),Zh=" ",Kh=!1;function Qh(e,n){switch(e){case"keyup":return Iv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Is=!1;function Hv(e,n){switch(e){case"compositionend":return Jh(n);case"keypress":return n.which!==32?null:(Kh=!0,Zh);case"textInput":return e=n.data,e===Zh&&Kh?null:e;default:return null}}function Gv(e,n){if(Is)return e==="compositionend"||!eu&&Qh(e,n)?(e=kh(),Jo=Zc=Ea=null,Is=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Yh&&n.locale!=="ko"?null:n.data;default:return null}}var Vv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $h(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Vv[e.type]:n==="textarea"}function ep(e,n,a,r){zs?Fs?Fs.push(r):Fs=[r]:zs=r,n=ql(n,"onChange"),0<n.length&&(a=new tl("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Wr=null,jr=null;function kv(e){z0(e,0)}function il(e){var n=ns(e);if(Ut(n))return e}function tp(e,n){if(e==="change")return n}var np=!1;if(Xi){var tu;if(Xi){var nu="oninput"in document;if(!nu){var ip=document.createElement("div");ip.setAttribute("oninput","return;"),nu=typeof ip.oninput=="function"}tu=nu}else tu=!1;np=tu&&(!document.documentMode||9<document.documentMode)}function ap(){Wr&&(Wr.detachEvent("onpropertychange",sp),jr=Wr=null)}function sp(e){if(e.propertyName==="value"&&il(jr)){var n=[];ep(n,jr,e,Wc(e)),Vh(kv,n)}}function Xv(e,n,a){e==="focusin"?(ap(),Wr=n,jr=a,Wr.attachEvent("onpropertychange",sp)):e==="focusout"&&ap()}function qv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return il(jr)}function Wv(e,n){if(e==="click")return il(n)}function jv(e,n){if(e==="input"||e==="change")return il(n)}function Yv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Wn=typeof Object.is=="function"?Object.is:Yv;function Yr(e,n){if(Wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!jt.call(n,c)||!Wn(e[c],n[c]))return!1}return!0}function rp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function op(e,n){var a=rp(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=rp(a)}}function lp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?lp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function cp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Ke(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Ke(e.document)}return n}function iu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Zv=Xi&&"documentMode"in document&&11>=document.documentMode,Bs=null,au=null,Zr=null,su=!1;function up(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;su||Bs==null||Bs!==Ke(r)||(r=Bs,"selectionStart"in r&&iu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zr&&Yr(Zr,r)||(Zr=r,r=ql(au,"onSelect"),0<r.length&&(n=new tl("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Bs)))}function as(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Hs={animationend:as("Animation","AnimationEnd"),animationiteration:as("Animation","AnimationIteration"),animationstart:as("Animation","AnimationStart"),transitionrun:as("Transition","TransitionRun"),transitionstart:as("Transition","TransitionStart"),transitioncancel:as("Transition","TransitionCancel"),transitionend:as("Transition","TransitionEnd")},ru={},fp={};Xi&&(fp=document.createElement("div").style,"AnimationEvent"in window||(delete Hs.animationend.animation,delete Hs.animationiteration.animation,delete Hs.animationstart.animation),"TransitionEvent"in window||delete Hs.transitionend.transition);function ss(e){if(ru[e])return ru[e];if(!Hs[e])return e;var n=Hs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in fp)return ru[e]=n[a];return e}var dp=ss("animationend"),hp=ss("animationiteration"),pp=ss("animationstart"),Kv=ss("transitionrun"),Qv=ss("transitionstart"),Jv=ss("transitioncancel"),mp=ss("transitionend"),gp=new Map,ou="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ou.push("scrollEnd");function xi(e,n){gp.set(e,n),$(n,[e])}var al=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ai=[],Gs=0,lu=0;function sl(){for(var e=Gs,n=lu=Gs=0;n<e;){var a=ai[n];ai[n++]=null;var r=ai[n];ai[n++]=null;var c=ai[n];ai[n++]=null;var f=ai[n];if(ai[n++]=null,r!==null&&c!==null){var g=r.pending;g===null?c.next=c:(c.next=g.next,g.next=c),r.pending=c}f!==0&&_p(a,c,f)}}function rl(e,n,a,r){ai[Gs++]=e,ai[Gs++]=n,ai[Gs++]=a,ai[Gs++]=r,lu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function cu(e,n,a,r){return rl(e,n,a,r),ol(e)}function rs(e,n){return rl(e,null,null,n),ol(e)}function _p(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Pe(a),e=f.hiddenUpdates,r=e[c],r===null?e[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function ol(e){if(50<vo)throw vo=0,xf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Vs={};function $v(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(e,n,a,r){return new $v(e,n,a,r)}function uu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qi(e,n){var a=e.alternate;return a===null?(a=jn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function vp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ll(e,n,a,r,c,f){var g=0;if(r=e,typeof e=="function")uu(e)&&(g=1);else if(typeof e=="string")g=aS(e,a,Ae.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case A:return e=jn(31,a,n,c),e.elementType=A,e.lanes=f,e;case C:return os(a.children,c,f,n);case y:g=8,c|=24;break;case x:return e=jn(12,a,n,c|2),e.elementType=x,e.lanes=f,e;case F:return e=jn(13,a,n,c),e.elementType=F,e.lanes=f,e;case B:return e=jn(19,a,n,c),e.elementType=B,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case P:g=10;break e;case z:g=9;break e;case L:g=11;break e;case U:g=14;break e;case Z:g=16,r=null;break e}g=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=jn(g,a,n,c),n.elementType=e,n.type=r,n.lanes=f,n}function os(e,n,a,r){return e=jn(7,e,r,n),e.lanes=a,e}function fu(e,n,a){return e=jn(6,e,null,n),e.lanes=a,e}function xp(e){var n=jn(18,null,null,0);return n.stateNode=e,n}function du(e,n,a){return n=jn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Sp=new WeakMap;function si(e,n){if(typeof e=="object"&&e!==null){var a=Sp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:V(n)},Sp.set(e,n),n)}return{value:e,source:n,stack:V(n)}}var ks=[],Xs=0,cl=null,Kr=0,ri=[],oi=0,ba=null,Di=1,Ni="";function Wi(e,n){ks[Xs++]=Kr,ks[Xs++]=cl,cl=e,Kr=n}function yp(e,n,a){ri[oi++]=Di,ri[oi++]=Ni,ri[oi++]=ba,ba=e;var r=Di;e=Ni;var c=32-Pe(r)-1;r&=~(1<<c),a+=1;var f=32-Pe(n)+c;if(30<f){var g=c-c%5;f=(r&(1<<g)-1).toString(32),r>>=g,c-=g,Di=1<<32-Pe(n)+c|a<<c|r,Ni=f+e}else Di=1<<f|a<<c|r,Ni=e}function hu(e){e.return!==null&&(Wi(e,1),yp(e,1,0))}function pu(e){for(;e===cl;)cl=ks[--Xs],ks[Xs]=null,Kr=ks[--Xs],ks[Xs]=null;for(;e===ba;)ba=ri[--oi],ri[oi]=null,Ni=ri[--oi],ri[oi]=null,Di=ri[--oi],ri[oi]=null}function Mp(e,n){ri[oi++]=Di,ri[oi++]=Ni,ri[oi++]=ba,Di=n.id,Ni=n.overflow,ba=e}var bn=null,qt=null,xt=!1,Ta=null,li=!1,mu=Error(s(519));function Aa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qr(si(n,e)),mu}function Ep(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[sn]=e,n[vn]=r,a){case"dialog":mt("cancel",n),mt("close",n);break;case"iframe":case"object":case"embed":mt("load",n);break;case"video":case"audio":for(a=0;a<So.length;a++)mt(So[a],n);break;case"source":mt("error",n);break;case"img":case"image":case"link":mt("error",n),mt("load",n);break;case"details":mt("toggle",n);break;case"input":mt("invalid",n),Vi(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":mt("invalid",n);break;case"textarea":mt("invalid",n),yn(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||H0(n.textContent,a)?(r.popover!=null&&(mt("beforetoggle",n),mt("toggle",n)),r.onScroll!=null&&mt("scroll",n),r.onScrollEnd!=null&&mt("scrollend",n),r.onClick!=null&&(n.onclick=ki),n=!0):n=!1,n||Aa(e,!0)}function bp(e){for(bn=e.return;bn;)switch(bn.tag){case 5:case 31:case 13:li=!1;return;case 27:case 3:li=!0;return;default:bn=bn.return}}function qs(e){if(e!==bn)return!1;if(!xt)return bp(e),xt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Of(e.type,e.memoizedProps)),a=!a),a&&qt&&Aa(e),bp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));qt=Z0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));qt=Z0(e)}else n===27?(n=qt,Ha(e.type)?(e=Bf,Bf=null,qt=e):qt=n):qt=bn?ui(e.stateNode.nextSibling):null;return!0}function ls(){qt=bn=null,xt=!1}function gu(){var e=Ta;return e!==null&&(Gn===null?Gn=e:Gn.push.apply(Gn,e),Ta=null),e}function Qr(e){Ta===null?Ta=[e]:Ta.push(e)}var _u=N(null),cs=null,ji=null;function Ra(e,n,a){_e(_u,n._currentValue),n._currentValue=a}function Yi(e){e._currentValue=_u.current,ne(_u)}function vu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function xu(e,n,a,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;e:for(;f!==null;){var b=f;f=c;for(var I=0;I<n.length;I++)if(b.context===n[I]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),vu(f.return,a,e),r||(g=null);break e}f=b.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(s(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),vu(g,a,e),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===e){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function Ws(e,n,a,r){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var b=c.type;Wn(c.pendingProps.value,g.value)||(e!==null?e.push(b):e=[b])}}else if(c===ue.current){if(g=c.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(To):e=[To])}c=c.return}e!==null&&xu(n,e,a,r),n.flags|=262144}function ul(e){for(e=e.firstContext;e!==null;){if(!Wn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function us(e){cs=e,ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tn(e){return Tp(cs,e)}function fl(e,n){return cs===null&&us(e),Tp(e,n)}function Tp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ji===null){if(e===null)throw Error(s(308));ji=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ji=ji.next=n;return a}var ex=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},tx=o.unstable_scheduleCallback,nx=o.unstable_NormalPriority,rn={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Su(){return{controller:new ex,data:new Map,refCount:0}}function Jr(e){e.refCount--,e.refCount===0&&tx(nx,function(){e.controller.abort()})}var $r=null,yu=0,js=0,Ys=null;function ix(e,n){if($r===null){var a=$r=[];yu=0,js=Tf(),Ys={status:"pending",value:void 0,then:function(r){a.push(r)}}}return yu++,n.then(Ap,Ap),n}function Ap(){if(--yu===0&&$r!==null){Ys!==null&&(Ys.status="fulfilled");var e=$r;$r=null,js=0,Ys=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function ax(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var Rp=O.S;O.S=function(e,n){u0=M(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ix(e,n),Rp!==null&&Rp(e,n)};var fs=N(null);function Mu(){var e=fs.current;return e!==null?e:kt.pooledCache}function dl(e,n){n===null?_e(fs,fs.current):_e(fs,n.pool)}function Cp(){var e=Mu();return e===null?null:{parent:rn._currentValue,pool:e}}var Zs=Error(s(460)),Eu=Error(s(474)),hl=Error(s(542)),pl={then:function(){}};function wp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Dp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ki,ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Up(e),e;default:if(typeof n.status=="string")n.then(ki,ki);else{if(e=kt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Up(e),e}throw hs=n,Zs}}function ds(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(hs=a,Zs):a}}var hs=null;function Np(){if(hs===null)throw Error(s(459));var e=hs;return hs=null,e}function Up(e){if(e===Zs||e===hl)throw Error(s(483))}var Ks=null,eo=0;function ml(e){var n=eo;return eo+=1,Ks===null&&(Ks=[]),Dp(Ks,e,n)}function to(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function gl(e,n){throw n.$$typeof===S?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Lp(e){function n(Y,X){if(e){var Q=Y.deletions;Q===null?(Y.deletions=[X],Y.flags|=16):Q.push(X)}}function a(Y,X){if(!e)return null;for(;X!==null;)n(Y,X),X=X.sibling;return null}function r(Y){for(var X=new Map;Y!==null;)Y.key!==null?X.set(Y.key,Y):X.set(Y.index,Y),Y=Y.sibling;return X}function c(Y,X){return Y=qi(Y,X),Y.index=0,Y.sibling=null,Y}function f(Y,X,Q){return Y.index=Q,e?(Q=Y.alternate,Q!==null?(Q=Q.index,Q<X?(Y.flags|=67108866,X):Q):(Y.flags|=67108866,X)):(Y.flags|=1048576,X)}function g(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function b(Y,X,Q,me){return X===null||X.tag!==6?(X=fu(Q,Y.mode,me),X.return=Y,X):(X=c(X,Q),X.return=Y,X)}function I(Y,X,Q,me){var Qe=Q.type;return Qe===C?de(Y,X,Q.props.children,me,Q.key):X!==null&&(X.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===Z&&ds(Qe)===X.type)?(X=c(X,Q.props),to(X,Q),X.return=Y,X):(X=ll(Q.type,Q.key,Q.props,null,Y.mode,me),to(X,Q),X.return=Y,X)}function J(Y,X,Q,me){return X===null||X.tag!==4||X.stateNode.containerInfo!==Q.containerInfo||X.stateNode.implementation!==Q.implementation?(X=du(Q,Y.mode,me),X.return=Y,X):(X=c(X,Q.children||[]),X.return=Y,X)}function de(Y,X,Q,me,Qe){return X===null||X.tag!==7?(X=os(Q,Y.mode,me,Qe),X.return=Y,X):(X=c(X,Q),X.return=Y,X)}function ge(Y,X,Q){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=fu(""+X,Y.mode,Q),X.return=Y,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case E:return Q=ll(X.type,X.key,X.props,null,Y.mode,Q),to(Q,X),Q.return=Y,Q;case R:return X=du(X,Y.mode,Q),X.return=Y,X;case Z:return X=ds(X),ge(Y,X,Q)}if(fe(X)||se(X))return X=os(X,Y.mode,Q,null),X.return=Y,X;if(typeof X.then=="function")return ge(Y,ml(X),Q);if(X.$$typeof===P)return ge(Y,fl(Y,X),Q);gl(Y,X)}return null}function ee(Y,X,Q,me){var Qe=X!==null?X.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Qe!==null?null:b(Y,X,""+Q,me);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case E:return Q.key===Qe?I(Y,X,Q,me):null;case R:return Q.key===Qe?J(Y,X,Q,me):null;case Z:return Q=ds(Q),ee(Y,X,Q,me)}if(fe(Q)||se(Q))return Qe!==null?null:de(Y,X,Q,me,null);if(typeof Q.then=="function")return ee(Y,X,ml(Q),me);if(Q.$$typeof===P)return ee(Y,X,fl(Y,Q),me);gl(Y,Q)}return null}function le(Y,X,Q,me,Qe){if(typeof me=="string"&&me!==""||typeof me=="number"||typeof me=="bigint")return Y=Y.get(Q)||null,b(X,Y,""+me,Qe);if(typeof me=="object"&&me!==null){switch(me.$$typeof){case E:return Y=Y.get(me.key===null?Q:me.key)||null,I(X,Y,me,Qe);case R:return Y=Y.get(me.key===null?Q:me.key)||null,J(X,Y,me,Qe);case Z:return me=ds(me),le(Y,X,Q,me,Qe)}if(fe(me)||se(me))return Y=Y.get(Q)||null,de(X,Y,me,Qe,null);if(typeof me.then=="function")return le(Y,X,Q,ml(me),Qe);if(me.$$typeof===P)return le(Y,X,Q,fl(X,me),Qe);gl(X,me)}return null}function Ve(Y,X,Q,me){for(var Qe=null,bt=null,Ye=X,ct=X=0,vt=null;Ye!==null&&ct<Q.length;ct++){Ye.index>ct?(vt=Ye,Ye=null):vt=Ye.sibling;var Tt=ee(Y,Ye,Q[ct],me);if(Tt===null){Ye===null&&(Ye=vt);break}e&&Ye&&Tt.alternate===null&&n(Y,Ye),X=f(Tt,X,ct),bt===null?Qe=Tt:bt.sibling=Tt,bt=Tt,Ye=vt}if(ct===Q.length)return a(Y,Ye),xt&&Wi(Y,ct),Qe;if(Ye===null){for(;ct<Q.length;ct++)Ye=ge(Y,Q[ct],me),Ye!==null&&(X=f(Ye,X,ct),bt===null?Qe=Ye:bt.sibling=Ye,bt=Ye);return xt&&Wi(Y,ct),Qe}for(Ye=r(Ye);ct<Q.length;ct++)vt=le(Ye,Y,ct,Q[ct],me),vt!==null&&(e&&vt.alternate!==null&&Ye.delete(vt.key===null?ct:vt.key),X=f(vt,X,ct),bt===null?Qe=vt:bt.sibling=vt,bt=vt);return e&&Ye.forEach(function(qa){return n(Y,qa)}),xt&&Wi(Y,ct),Qe}function et(Y,X,Q,me){if(Q==null)throw Error(s(151));for(var Qe=null,bt=null,Ye=X,ct=X=0,vt=null,Tt=Q.next();Ye!==null&&!Tt.done;ct++,Tt=Q.next()){Ye.index>ct?(vt=Ye,Ye=null):vt=Ye.sibling;var qa=ee(Y,Ye,Tt.value,me);if(qa===null){Ye===null&&(Ye=vt);break}e&&Ye&&qa.alternate===null&&n(Y,Ye),X=f(qa,X,ct),bt===null?Qe=qa:bt.sibling=qa,bt=qa,Ye=vt}if(Tt.done)return a(Y,Ye),xt&&Wi(Y,ct),Qe;if(Ye===null){for(;!Tt.done;ct++,Tt=Q.next())Tt=ge(Y,Tt.value,me),Tt!==null&&(X=f(Tt,X,ct),bt===null?Qe=Tt:bt.sibling=Tt,bt=Tt);return xt&&Wi(Y,ct),Qe}for(Ye=r(Ye);!Tt.done;ct++,Tt=Q.next())Tt=le(Ye,Y,ct,Tt.value,me),Tt!==null&&(e&&Tt.alternate!==null&&Ye.delete(Tt.key===null?ct:Tt.key),X=f(Tt,X,ct),bt===null?Qe=Tt:bt.sibling=Tt,bt=Tt);return e&&Ye.forEach(function(mS){return n(Y,mS)}),xt&&Wi(Y,ct),Qe}function Gt(Y,X,Q,me){if(typeof Q=="object"&&Q!==null&&Q.type===C&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case E:e:{for(var Qe=Q.key;X!==null;){if(X.key===Qe){if(Qe=Q.type,Qe===C){if(X.tag===7){a(Y,X.sibling),me=c(X,Q.props.children),me.return=Y,Y=me;break e}}else if(X.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===Z&&ds(Qe)===X.type){a(Y,X.sibling),me=c(X,Q.props),to(me,Q),me.return=Y,Y=me;break e}a(Y,X);break}else n(Y,X);X=X.sibling}Q.type===C?(me=os(Q.props.children,Y.mode,me,Q.key),me.return=Y,Y=me):(me=ll(Q.type,Q.key,Q.props,null,Y.mode,me),to(me,Q),me.return=Y,Y=me)}return g(Y);case R:e:{for(Qe=Q.key;X!==null;){if(X.key===Qe)if(X.tag===4&&X.stateNode.containerInfo===Q.containerInfo&&X.stateNode.implementation===Q.implementation){a(Y,X.sibling),me=c(X,Q.children||[]),me.return=Y,Y=me;break e}else{a(Y,X);break}else n(Y,X);X=X.sibling}me=du(Q,Y.mode,me),me.return=Y,Y=me}return g(Y);case Z:return Q=ds(Q),Gt(Y,X,Q,me)}if(fe(Q))return Ve(Y,X,Q,me);if(se(Q)){if(Qe=se(Q),typeof Qe!="function")throw Error(s(150));return Q=Qe.call(Q),et(Y,X,Q,me)}if(typeof Q.then=="function")return Gt(Y,X,ml(Q),me);if(Q.$$typeof===P)return Gt(Y,X,fl(Y,Q),me);gl(Y,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,X!==null&&X.tag===6?(a(Y,X.sibling),me=c(X,Q),me.return=Y,Y=me):(a(Y,X),me=fu(Q,Y.mode,me),me.return=Y,Y=me),g(Y)):a(Y,X)}return function(Y,X,Q,me){try{eo=0;var Qe=Gt(Y,X,Q,me);return Ks=null,Qe}catch(Ye){if(Ye===Zs||Ye===hl)throw Ye;var bt=jn(29,Ye,null,Y.mode);return bt.lanes=me,bt.return=Y,bt}}}var ps=Lp(!0),Op=Lp(!1),Ca=!1;function bu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Tu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function wa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Da(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Dt&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=ol(e),_p(e,null,a),n}return rl(e,r,n,a),ol(e)}function no(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,zr(e,a)}}function Au(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Ru=!1;function io(){if(Ru){var e=Ys;if(e!==null)throw e}}function ao(e,n,a,r){Ru=!1;var c=e.updateQueue;Ca=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var I=b,J=I.next;I.next=null,g===null?f=J:g.next=J,g=I;var de=e.alternate;de!==null&&(de=de.updateQueue,b=de.lastBaseUpdate,b!==g&&(b===null?de.firstBaseUpdate=J:b.next=J,de.lastBaseUpdate=I))}if(f!==null){var ge=c.baseState;g=0,de=J=I=null,b=f;do{var ee=b.lane&-536870913,le=ee!==b.lane;if(le?(_t&ee)===ee:(r&ee)===ee){ee!==0&&ee===js&&(Ru=!0),de!==null&&(de=de.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var Ve=e,et=b;ee=n;var Gt=a;switch(et.tag){case 1:if(Ve=et.payload,typeof Ve=="function"){ge=Ve.call(Gt,ge,ee);break e}ge=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=et.payload,ee=typeof Ve=="function"?Ve.call(Gt,ge,ee):Ve,ee==null)break e;ge=_({},ge,ee);break e;case 2:Ca=!0}}ee=b.callback,ee!==null&&(e.flags|=64,le&&(e.flags|=8192),le=c.callbacks,le===null?c.callbacks=[ee]:le.push(ee))}else le={lane:ee,tag:b.tag,payload:b.payload,callback:b.callback,next:null},de===null?(J=de=le,I=ge):de=de.next=le,g|=ee;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;le=b,b=le.next,le.next=null,c.lastBaseUpdate=le,c.shared.pending=null}}while(!0);de===null&&(I=ge),c.baseState=I,c.firstBaseUpdate=J,c.lastBaseUpdate=de,f===null&&(c.shared.lanes=0),Pa|=g,e.lanes=g,e.memoizedState=ge}}function Pp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function zp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Pp(a[e],n)}var Qs=N(null),_l=N(0);function Fp(e,n){e=ia,_e(_l,e),_e(Qs,n),ia=e|n.baseLanes}function Cu(){_e(_l,ia),_e(Qs,Qs.current)}function wu(){ia=_l.current,ne(Qs),ne(_l)}var Yn=N(null),ci=null;function Na(e){var n=e.alternate;_e(en,en.current&1),_e(Yn,e),ci===null&&(n===null||Qs.current!==null||n.memoizedState!==null)&&(ci=e)}function Du(e){_e(en,en.current),_e(Yn,e),ci===null&&(ci=e)}function Ip(e){e.tag===22?(_e(en,en.current),_e(Yn,e),ci===null&&(ci=e)):Ua()}function Ua(){_e(en,en.current),_e(Yn,Yn.current)}function Zn(e){ne(Yn),ci===e&&(ci=null),ne(en)}var en=N(0);function vl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ff(a)||If(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Zi=0,ot=null,Bt=null,on=null,xl=!1,Js=!1,ms=!1,Sl=0,so=0,$s=null,sx=0;function Jt(){throw Error(s(321))}function Nu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Wn(e[a],n[a]))return!1;return!0}function Uu(e,n,a,r,c,f){return Zi=f,ot=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?ym:ju,ms=!1,f=a(r,c),ms=!1,Js&&(f=Hp(n,a,r,c)),Bp(e),f}function Bp(e){O.H=lo;var n=Bt!==null&&Bt.next!==null;if(Zi=0,on=Bt=ot=null,xl=!1,so=0,$s=null,n)throw Error(s(300));e===null||ln||(e=e.dependencies,e!==null&&ul(e)&&(ln=!0))}function Hp(e,n,a,r){ot=e;var c=0;do{if(Js&&($s=null),so=0,Js=!1,25<=c)throw Error(s(301));if(c+=1,on=Bt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=Mm,f=n(a,r)}while(Js);return f}function rx(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?ro(n):n,e=e.useState()[0],(Bt!==null?Bt.memoizedState:null)!==e&&(ot.flags|=1024),n}function Lu(){var e=Sl!==0;return Sl=0,e}function Ou(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Pu(e){if(xl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}xl=!1}Zi=0,on=Bt=ot=null,Js=!1,so=Sl=0,$s=null}function Pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?ot.memoizedState=on=e:on=on.next=e,on}function tn(){if(Bt===null){var e=ot.alternate;e=e!==null?e.memoizedState:null}else e=Bt.next;var n=on===null?ot.memoizedState:on.next;if(n!==null)on=n,Bt=e;else{if(e===null)throw ot.alternate===null?Error(s(467)):Error(s(310));Bt=e,e={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},on===null?ot.memoizedState=on=e:on=on.next=e}return on}function yl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ro(e){var n=so;return so+=1,$s===null&&($s=[]),e=Dp($s,e,n),n=ot,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?ym:ju),e}function Ml(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ro(e);if(e.$$typeof===P)return Tn(e)}throw Error(s(438,String(e)))}function zu(e){var n=null,a=ot.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ot.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=yl(),ot.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=w;return n.index++,a}function Ki(e,n){return typeof n=="function"?n(e):n}function El(e){var n=tn();return Fu(n,Bt,e)}function Fu(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=e.baseQueue,f=r.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,r.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var b=g=null,I=null,J=n,de=!1;do{var ge=J.lane&-536870913;if(ge!==J.lane?(_t&ge)===ge:(Zi&ge)===ge){var ee=J.revertLane;if(ee===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),ge===js&&(de=!0);else if((Zi&ee)===ee){J=J.next,ee===js&&(de=!0);continue}else ge={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},I===null?(b=I=ge,g=f):I=I.next=ge,ot.lanes|=ee,Pa|=ee;ge=J.action,ms&&a(f,ge),f=J.hasEagerState?J.eagerState:a(f,ge)}else ee={lane:ge,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},I===null?(b=I=ee,g=f):I=I.next=ee,ot.lanes|=ge,Pa|=ge;J=J.next}while(J!==null&&J!==n);if(I===null?g=f:I.next=b,!Wn(f,e.memoizedState)&&(ln=!0,de&&(a=Ys,a!==null)))throw a;e.memoizedState=f,e.baseState=g,e.baseQueue=I,r.lastRenderedState=f}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Iu(e){var n=tn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=e(f,g.action),g=g.next;while(g!==c);Wn(f,n.memoizedState)||(ln=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Gp(e,n,a){var r=ot,c=tn(),f=xt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var g=!Wn((Bt||c).memoizedState,a);if(g&&(c.memoizedState=a,ln=!0),c=c.queue,Gu(Xp.bind(null,r,c,e),[e]),c.getSnapshot!==n||g||on!==null&&on.memoizedState.tag&1){if(r.flags|=2048,er(9,{destroy:void 0},kp.bind(null,r,c,a,n),null),kt===null)throw Error(s(349));f||(Zi&127)!==0||Vp(r,n,a)}return a}function Vp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ot.updateQueue,n===null?(n=yl(),ot.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function kp(e,n,a,r){n.value=a,n.getSnapshot=r,qp(n)&&Wp(e)}function Xp(e,n,a){return a(function(){qp(n)&&Wp(e)})}function qp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Wn(e,a)}catch{return!0}}function Wp(e){var n=rs(e,2);n!==null&&Vn(n,e,2)}function Bu(e){var n=Pn();if(typeof e=="function"){var a=e;if(e=a(),ms){Fe(!0);try{a()}finally{Fe(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:e},n}function jp(e,n,a,r){return e.baseState=a,Fu(e,Bt,typeof r=="function"?r:Ki)}function ox(e,n,a,r,c){if(Al(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};O.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Yp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Yp(e,n){var a=n.action,r=n.payload,c=e.state;if(n.isTransition){var f=O.T,g={};O.T=g;try{var b=a(c,r),I=O.S;I!==null&&I(g,b),Zp(e,n,b)}catch(J){Hu(e,n,J)}finally{f!==null&&g.types!==null&&(f.types=g.types),O.T=f}}else try{f=a(c,r),Zp(e,n,f)}catch(J){Hu(e,n,J)}}function Zp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Kp(e,n,r)},function(r){return Hu(e,n,r)}):Kp(e,n,a)}function Kp(e,n,a){n.status="fulfilled",n.value=a,Qp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Yp(e,a)))}function Hu(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Qp(n),n=n.next;while(n!==r)}e.action=null}function Qp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Jp(e,n){return n}function $p(e,n){if(xt){var a=kt.formState;if(a!==null){e:{var r=ot;if(xt){if(qt){t:{for(var c=qt,f=li;c.nodeType!==8;){if(!f){c=null;break t}if(c=ui(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){qt=ui(c.nextSibling),r=c.data==="F!";break e}}Aa(r)}r=!1}r&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jp,lastRenderedState:n},a.queue=r,a=vm.bind(null,ot,r),r.dispatch=a,r=Bu(!1),f=Wu.bind(null,ot,!1,r.queue),r=Pn(),c={state:n,dispatch:null,action:e,pending:null},r.queue=c,a=ox.bind(null,ot,c,f,a),c.dispatch=a,r.memoizedState=e,[n,a,!1]}function em(e){var n=tn();return tm(n,Bt,e)}function tm(e,n,a){if(n=Fu(e,n,Jp)[0],e=El(Ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=ro(n)}catch(g){throw g===Zs?hl:g}else r=n;n=tn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ot.flags|=2048,er(9,{destroy:void 0},lx.bind(null,c,a),null)),[r,f,e]}function lx(e,n){e.action=n}function nm(e){var n=tn(),a=Bt;if(a!==null)return tm(n,a,e);tn(),n=n.memoizedState,a=tn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function er(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=ot.updateQueue,n===null&&(n=yl(),ot.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function im(){return tn().memoizedState}function bl(e,n,a,r){var c=Pn();ot.flags|=e,c.memoizedState=er(1|n,{destroy:void 0},a,r===void 0?null:r)}function Tl(e,n,a,r){var c=tn();r=r===void 0?null:r;var f=c.memoizedState.inst;Bt!==null&&r!==null&&Nu(r,Bt.memoizedState.deps)?c.memoizedState=er(n,f,a,r):(ot.flags|=e,c.memoizedState=er(1|n,f,a,r))}function am(e,n){bl(8390656,8,e,n)}function Gu(e,n){Tl(2048,8,e,n)}function cx(e){ot.flags|=4;var n=ot.updateQueue;if(n===null)n=yl(),ot.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function sm(e){var n=tn().memoizedState;return cx({ref:n,nextImpl:e}),function(){if((Dt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function rm(e,n){return Tl(4,2,e,n)}function om(e,n){return Tl(4,4,e,n)}function lm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function cm(e,n,a){a=a!=null?a.concat([e]):null,Tl(4,4,lm.bind(null,n,e),a)}function Vu(){}function um(e,n){var a=tn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Nu(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function fm(e,n){var a=tn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Nu(n,r[1]))return r[0];if(r=e(),ms){Fe(!0);try{e()}finally{Fe(!1)}}return a.memoizedState=[r,n],r}function ku(e,n,a){return a===void 0||(Zi&1073741824)!==0&&(_t&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=d0(),ot.lanes|=e,Pa|=e,a)}function dm(e,n,a,r){return Wn(a,n)?a:Qs.current!==null?(e=ku(e,a,r),Wn(e,n)||(ln=!0),e):(Zi&42)===0||(Zi&1073741824)!==0&&(_t&261930)===0?(ln=!0,e.memoizedState=a):(e=d0(),ot.lanes|=e,Pa|=e,n)}function hm(e,n,a,r,c){var f=H.p;H.p=f!==0&&8>f?f:8;var g=O.T,b={};O.T=b,Wu(e,!1,n,a);try{var I=c(),J=O.S;if(J!==null&&J(b,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var de=ax(I,r);oo(e,n,de,Jn(e))}else oo(e,n,r,Jn(e))}catch(ge){oo(e,n,{then:function(){},status:"rejected",reason:ge},Jn())}finally{H.p=f,g!==null&&b.types!==null&&(g.types=b.types),O.T=g}}function ux(){}function Xu(e,n,a,r){if(e.tag!==5)throw Error(s(476));var c=pm(e).queue;hm(e,c,n,ae,a===null?ux:function(){return mm(e),a(r)})}function pm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:ae},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function mm(e){var n=pm(e);n.next===null&&(n=e.alternate.memoizedState),oo(e,n.next.queue,{},Jn())}function qu(){return Tn(To)}function gm(){return tn().memoizedState}function _m(){return tn().memoizedState}function fx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Jn();e=wa(a);var r=Da(n,e,a);r!==null&&(Vn(r,n,a),no(r,n,a)),n={cache:Su()},e.payload=n;return}n=n.return}}function dx(e,n,a){var r=Jn();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Al(e)?xm(n,a):(a=cu(e,n,a,r),a!==null&&(Vn(a,e,r),Sm(a,n,r)))}function vm(e,n,a){var r=Jn();oo(e,n,a,r)}function oo(e,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Al(e))xm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,b=f(g,a);if(c.hasEagerState=!0,c.eagerState=b,Wn(b,g))return rl(e,n,c,0),kt===null&&sl(),!1}catch{}if(a=cu(e,n,c,r),a!==null)return Vn(a,e,r),Sm(a,n,r),!0}return!1}function Wu(e,n,a,r){if(r={lane:2,revertLane:Tf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Al(e)){if(n)throw Error(s(479))}else n=cu(e,a,r,2),n!==null&&Vn(n,e,2)}function Al(e){var n=e.alternate;return e===ot||n!==null&&n===ot}function xm(e,n){Js=xl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Sm(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,zr(e,a)}}var lo={readContext:Tn,use:Ml,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useLayoutEffect:Jt,useInsertionEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useSyncExternalStore:Jt,useId:Jt,useHostTransitionStatus:Jt,useFormState:Jt,useActionState:Jt,useOptimistic:Jt,useMemoCache:Jt,useCacheRefresh:Jt};lo.useEffectEvent=Jt;var ym={readContext:Tn,use:Ml,useCallback:function(e,n){return Pn().memoizedState=[e,n===void 0?null:n],e},useContext:Tn,useEffect:am,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,bl(4194308,4,lm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return bl(4194308,4,e,n)},useInsertionEffect:function(e,n){bl(4,2,e,n)},useMemo:function(e,n){var a=Pn();n=n===void 0?null:n;var r=e();if(ms){Fe(!0);try{e()}finally{Fe(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Pn();if(a!==void 0){var c=a(n);if(ms){Fe(!0);try{a(n)}finally{Fe(!1)}}}else c=n;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=dx.bind(null,ot,e),[r.memoizedState,e]},useRef:function(e){var n=Pn();return e={current:e},n.memoizedState=e},useState:function(e){e=Bu(e);var n=e.queue,a=vm.bind(null,ot,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Vu,useDeferredValue:function(e,n){var a=Pn();return ku(a,e,n)},useTransition:function(){var e=Bu(!1);return e=hm.bind(null,ot,e.queue,!0,!1),Pn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=ot,c=Pn();if(xt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),kt===null)throw Error(s(349));(_t&127)!==0||Vp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,am(Xp.bind(null,r,f,e),[e]),r.flags|=2048,er(9,{destroy:void 0},kp.bind(null,r,f,a,n),null),a},useId:function(){var e=Pn(),n=kt.identifierPrefix;if(xt){var a=Ni,r=Di;a=(r&~(1<<32-Pe(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Sl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=sx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:qu,useFormState:$p,useActionState:$p,useOptimistic:function(e){var n=Pn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Wu.bind(null,ot,!0,a),a.dispatch=n,[e,n]},useMemoCache:zu,useCacheRefresh:function(){return Pn().memoizedState=fx.bind(null,ot)},useEffectEvent:function(e){var n=Pn(),a={impl:e};return n.memoizedState=a,function(){if((Dt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},ju={readContext:Tn,use:Ml,useCallback:um,useContext:Tn,useEffect:Gu,useImperativeHandle:cm,useInsertionEffect:rm,useLayoutEffect:om,useMemo:fm,useReducer:El,useRef:im,useState:function(){return El(Ki)},useDebugValue:Vu,useDeferredValue:function(e,n){var a=tn();return dm(a,Bt.memoizedState,e,n)},useTransition:function(){var e=El(Ki)[0],n=tn().memoizedState;return[typeof e=="boolean"?e:ro(e),n]},useSyncExternalStore:Gp,useId:gm,useHostTransitionStatus:qu,useFormState:em,useActionState:em,useOptimistic:function(e,n){var a=tn();return jp(a,Bt,e,n)},useMemoCache:zu,useCacheRefresh:_m};ju.useEffectEvent=sm;var Mm={readContext:Tn,use:Ml,useCallback:um,useContext:Tn,useEffect:Gu,useImperativeHandle:cm,useInsertionEffect:rm,useLayoutEffect:om,useMemo:fm,useReducer:Iu,useRef:im,useState:function(){return Iu(Ki)},useDebugValue:Vu,useDeferredValue:function(e,n){var a=tn();return Bt===null?ku(a,e,n):dm(a,Bt.memoizedState,e,n)},useTransition:function(){var e=Iu(Ki)[0],n=tn().memoizedState;return[typeof e=="boolean"?e:ro(e),n]},useSyncExternalStore:Gp,useId:gm,useHostTransitionStatus:qu,useFormState:nm,useActionState:nm,useOptimistic:function(e,n){var a=tn();return Bt!==null?jp(a,Bt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:zu,useCacheRefresh:_m};Mm.useEffectEvent=sm;function Yu(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Zu={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=Jn(),c=wa(r);c.payload=n,a!=null&&(c.callback=a),n=Da(e,c,r),n!==null&&(Vn(n,e,r),no(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=Jn(),c=wa(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Da(e,c,r),n!==null&&(Vn(n,e,r),no(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Jn(),r=wa(a);r.tag=2,n!=null&&(r.callback=n),n=Da(e,r,a),n!==null&&(Vn(n,e,a),no(n,e,a))}};function Em(e,n,a,r,c,f,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,g):n.prototype&&n.prototype.isPureReactComponent?!Yr(a,r)||!Yr(c,f):!0}function bm(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&Zu.enqueueReplaceState(n,n.state,null)}function gs(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function Tm(e){al(e)}function Am(e){console.error(e)}function Rm(e){al(e)}function Rl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Cm(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Ku(e,n,a){return a=wa(a),a.tag=3,a.payload={element:null},a.callback=function(){Rl(e,n)},a}function wm(e){return e=wa(e),e.tag=3,e}function Dm(e,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;e.payload=function(){return c(f)},e.callback=function(){Cm(n,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){Cm(n,a,r),typeof c!="function"&&(za===null?za=new Set([this]):za.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})})}function hx(e,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Ws(n,a,c,!0),a=Yn.current,a!==null){switch(a.tag){case 31:case 13:return ci===null?Bl():a.alternate===null&&$t===0&&($t=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===pl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Mf(e,r,c)),!1;case 22:return a.flags|=65536,r===pl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Mf(e,r,c)),!1}throw Error(s(435,a.tag))}return Mf(e,r,c),Bl(),!1}if(xt)return n=Yn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==mu&&(e=Error(s(422),{cause:r}),Qr(si(e,a)))):(r!==mu&&(n=Error(s(423),{cause:r}),Qr(si(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=si(r,a),c=Ku(e.stateNode,r,c),Au(e,c),$t!==4&&($t=2)),!1;var f=Error(s(520),{cause:r});if(f=si(f,a),_o===null?_o=[f]:_o.push(f),$t!==4&&($t=2),n===null)return!0;r=si(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Ku(a.stateNode,r,e),Au(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(za===null||!za.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=wm(c),Dm(c,e,a,r),Au(a,c),!1}a=a.return}while(a!==null);return!1}var Qu=Error(s(461)),ln=!1;function An(e,n,a,r){n.child=e===null?Op(n,null,a,r):ps(n,e.child,a,r)}function Nm(e,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var g={};for(var b in r)b!=="ref"&&(g[b]=r[b])}else g=r;return us(n),r=Uu(e,n,a,g,f,c),b=Lu(),e!==null&&!ln?(Ou(e,n,c),Qi(e,n,c)):(xt&&b&&hu(n),n.flags|=1,An(e,n,r,c),n.child)}function Um(e,n,a,r,c){if(e===null){var f=a.type;return typeof f=="function"&&!uu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Lm(e,n,f,r,c)):(e=ll(a.type,null,r,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!rf(e,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Yr,a(g,r)&&e.ref===n.ref)return Qi(e,n,c)}return n.flags|=1,e=qi(f,r),e.ref=n.ref,e.return=n,n.child=e}function Lm(e,n,a,r,c){if(e!==null){var f=e.memoizedProps;if(Yr(f,r)&&e.ref===n.ref)if(ln=!1,n.pendingProps=r=f,rf(e,c))(e.flags&131072)!==0&&(ln=!0);else return n.lanes=e.lanes,Qi(e,n,c)}return Ju(e,n,a,r,c)}function Om(e,n,a,r){var c=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return Pm(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&dl(n,f!==null?f.cachePool:null),f!==null?Fp(n,f):Cu(),Ip(n);else return r=n.lanes=536870912,Pm(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(dl(n,f.cachePool),Fp(n,f),Ua(),n.memoizedState=null):(e!==null&&dl(n,null),Cu(),Ua());return An(e,n,c,a),n.child}function co(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Pm(e,n,a,r,c){var f=Mu();return f=f===null?null:{parent:rn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&dl(n,null),Cu(),Ip(n),e!==null&&Ws(e,n,r,!0),n.childLanes=c,null}function Cl(e,n){return n=Dl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function zm(e,n,a){return ps(n,e.child,null,a),e=Cl(n,n.pendingProps),e.flags|=2,Zn(n),n.memoizedState=null,e}function px(e,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(xt){if(r.mode==="hidden")return e=Cl(n,r),n.lanes=536870912,co(null,e);if(Du(n),(e=qt)?(e=Y0(e,li),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ba!==null?{id:Di,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},a=xp(e),a.return=n,n.child=a,bn=n,qt=null)):e=null,e===null)throw Aa(n);return n.lanes=536870912,null}return Cl(n,r)}var f=e.memoizedState;if(f!==null){var g=f.dehydrated;if(Du(n),c)if(n.flags&256)n.flags&=-257,n=zm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(ln||Ws(e,n,a,!1),c=(a&e.childLanes)!==0,ln||c){if(r=kt,r!==null&&(g=Ns(r,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,rs(e,g),Vn(r,e,g),Qu;Bl(),n=zm(e,n,a)}else e=f.treeContext,qt=ui(g.nextSibling),bn=n,xt=!0,Ta=null,li=!1,e!==null&&Mp(n,e),n=Cl(n,r),n.flags|=4096;return n}return e=qi(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function wl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Ju(e,n,a,r,c){return us(n),a=Uu(e,n,a,r,void 0,c),r=Lu(),e!==null&&!ln?(Ou(e,n,c),Qi(e,n,c)):(xt&&r&&hu(n),n.flags|=1,An(e,n,a,c),n.child)}function Fm(e,n,a,r,c,f){return us(n),n.updateQueue=null,a=Hp(n,r,a,c),Bp(e),r=Lu(),e!==null&&!ln?(Ou(e,n,f),Qi(e,n,f)):(xt&&r&&hu(n),n.flags|=1,An(e,n,a,f),n.child)}function Im(e,n,a,r,c){if(us(n),n.stateNode===null){var f=Vs,g=a.contextType;typeof g=="object"&&g!==null&&(f=Tn(g)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Zu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},bu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?Tn(g):Vs,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Yu(n,a,g,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Zu.enqueueReplaceState(f,f.state,null),ao(n,r,f,c),io(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var b=n.memoizedProps,I=gs(a,b);f.props=I;var J=f.context,de=a.contextType;g=Vs,typeof de=="object"&&de!==null&&(g=Tn(de));var ge=a.getDerivedStateFromProps;de=typeof ge=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,de||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||J!==g)&&bm(n,f,r,g),Ca=!1;var ee=n.memoizedState;f.state=ee,ao(n,r,f,c),io(),J=n.memoizedState,b||ee!==J||Ca?(typeof ge=="function"&&(Yu(n,a,ge,r),J=n.memoizedState),(I=Ca||Em(n,a,I,r,ee,J,g))?(de||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=J),f.props=r,f.state=J,f.context=g,r=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Tu(e,n),g=n.memoizedProps,de=gs(a,g),f.props=de,ge=n.pendingProps,ee=f.context,J=a.contextType,I=Vs,typeof J=="object"&&J!==null&&(I=Tn(J)),b=a.getDerivedStateFromProps,(J=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==ge||ee!==I)&&bm(n,f,r,I),Ca=!1,ee=n.memoizedState,f.state=ee,ao(n,r,f,c),io();var le=n.memoizedState;g!==ge||ee!==le||Ca||e!==null&&e.dependencies!==null&&ul(e.dependencies)?(typeof b=="function"&&(Yu(n,a,b,r),le=n.memoizedState),(de=Ca||Em(n,a,de,r,ee,le,I)||e!==null&&e.dependencies!==null&&ul(e.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,le,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,le,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&ee===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&ee===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=le),f.props=r,f.state=le,f.context=I,r=de):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&ee===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&ee===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,wl(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=ps(n,e.child,null,c),n.child=ps(n,null,a,c)):An(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Qi(e,n,c),e}function Bm(e,n,a,r){return ls(),n.flags|=256,An(e,n,a,r),n.child}var $u={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ef(e){return{baseLanes:e,cachePool:Cp()}}function tf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Qn),e}function Hm(e,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=e!==null&&e.memoizedState===null?!1:(en.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,e===null){if(xt){if(c?Na(n):Ua(),(e=qt)?(e=Y0(e,li),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ba!==null?{id:Di,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},a=xp(e),a.return=n,n.child=a,bn=n,qt=null)):e=null,e===null)throw Aa(n);return If(e)?n.lanes=32:n.lanes=536870912,null}var b=r.children;return r=r.fallback,c?(Ua(),c=n.mode,b=Dl({mode:"hidden",children:b},c),r=os(r,c,a,null),b.return=n,r.return=n,b.sibling=r,n.child=b,r=n.child,r.memoizedState=ef(a),r.childLanes=tf(e,g,a),n.memoizedState=$u,co(null,r)):(Na(n),nf(n,b))}var I=e.memoizedState;if(I!==null&&(b=I.dehydrated,b!==null)){if(f)n.flags&256?(Na(n),n.flags&=-257,n=af(e,n,a)):n.memoizedState!==null?(Ua(),n.child=e.child,n.flags|=128,n=null):(Ua(),b=r.fallback,c=n.mode,r=Dl({mode:"visible",children:r.children},c),b=os(b,c,a,null),b.flags|=2,r.return=n,b.return=n,r.sibling=b,n.child=r,ps(n,e.child,null,a),r=n.child,r.memoizedState=ef(a),r.childLanes=tf(e,g,a),n.memoizedState=$u,n=co(null,r));else if(Na(n),If(b)){if(g=b.nextSibling&&b.nextSibling.dataset,g)var J=g.dgst;g=J,r=Error(s(419)),r.stack="",r.digest=g,Qr({value:r,source:null,stack:null}),n=af(e,n,a)}else if(ln||Ws(e,n,a,!1),g=(a&e.childLanes)!==0,ln||g){if(g=kt,g!==null&&(r=Ns(g,a),r!==0&&r!==I.retryLane))throw I.retryLane=r,rs(e,r),Vn(g,e,r),Qu;Ff(b)||Bl(),n=af(e,n,a)}else Ff(b)?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,qt=ui(b.nextSibling),bn=n,xt=!0,Ta=null,li=!1,e!==null&&Mp(n,e),n=nf(n,r.children),n.flags|=4096);return n}return c?(Ua(),b=r.fallback,c=n.mode,I=e.child,J=I.sibling,r=qi(I,{mode:"hidden",children:r.children}),r.subtreeFlags=I.subtreeFlags&65011712,J!==null?b=qi(J,b):(b=os(b,c,a,null),b.flags|=2),b.return=n,r.return=n,r.sibling=b,n.child=r,co(null,r),r=n.child,b=e.child.memoizedState,b===null?b=ef(a):(c=b.cachePool,c!==null?(I=rn._currentValue,c=c.parent!==I?{parent:I,pool:I}:c):c=Cp(),b={baseLanes:b.baseLanes|a,cachePool:c}),r.memoizedState=b,r.childLanes=tf(e,g,a),n.memoizedState=$u,co(e.child,r)):(Na(n),a=e.child,e=a.sibling,a=qi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(g=n.deletions,g===null?(n.deletions=[e],n.flags|=16):g.push(e)),n.child=a,n.memoizedState=null,a)}function nf(e,n){return n=Dl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Dl(e,n){return e=jn(22,e,null,n),e.lanes=0,e}function af(e,n,a){return ps(n,e.child,null,a),e=nf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Gm(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),vu(e.return,n,a)}function sf(e,n,a,r,c,f){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=a,g.tailMode=c,g.treeForkCount=f)}function Vm(e,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var g=en.current,b=(g&2)!==0;if(b?(g=g&1|2,n.flags|=128):g&=1,_e(en,g),An(e,n,r,a),r=xt?Kr:0,!b&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gm(e,a,n);else if(e.tag===19)Gm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&vl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),sf(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&vl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}sf(n,!0,a,null,f,r);break;case"together":sf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function Qi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Pa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ws(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=qi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=qi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function rf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ul(e)))}function mx(e,n,a){switch(n.tag){case 3:De(n,n.stateNode.containerInfo),Ra(n,rn,e.memoizedState.cache),ls();break;case 27:case 5:He(n);break;case 4:De(n,n.stateNode.containerInfo);break;case 10:Ra(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Du(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Na(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Hm(e,n,a):(Na(n),e=Qi(e,n,a),e!==null?e.sibling:null);Na(n);break;case 19:var c=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Ws(e,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return Vm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),_e(en,en.current),r)break;return null;case 22:return n.lanes=0,Om(e,n,a,n.pendingProps);case 24:Ra(n,rn,e.memoizedState.cache)}return Qi(e,n,a)}function km(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)ln=!0;else{if(!rf(e,a)&&(n.flags&128)===0)return ln=!1,mx(e,n,a);ln=(e.flags&131072)!==0}else ln=!1,xt&&(n.flags&1048576)!==0&&yp(n,Kr,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=ds(n.elementType),n.type=e,typeof e=="function")uu(e)?(r=gs(e,r),n.tag=1,n=Im(null,n,e,r,a)):(n.tag=0,n=Ju(null,n,e,r,a));else{if(e!=null){var c=e.$$typeof;if(c===L){n.tag=11,n=Nm(null,n,e,r,a);break e}else if(c===U){n.tag=14,n=Um(null,n,e,r,a);break e}}throw n=pe(e)||e,Error(s(306,n,""))}}return n;case 0:return Ju(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=gs(r,n.pendingProps),Im(e,n,r,c,a);case 3:e:{if(De(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,Tu(e,n),ao(n,r,null,a);var g=n.memoizedState;if(r=g.cache,Ra(n,rn,r),r!==f.cache&&xu(n,[rn],a,!0),io(),r=g.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Bm(e,n,r,a);break e}else if(r!==c){c=si(Error(s(424)),n),Qr(c),n=Bm(e,n,r,a);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,qt=ui(e.firstChild),bn=n,xt=!0,Ta=null,li=!0,a=Op(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ls(),r===c){n=Qi(e,n,a);break e}An(e,n,r,a)}n=n.child}return n;case 26:return wl(e,n),e===null?(a=eg(n.type,null,n.pendingProps,null))?n.memoizedState=a:xt||(a=n.type,e=n.pendingProps,r=Wl(te.current).createElement(a),r[sn]=n,r[vn]=e,Rn(r,a,e),T(r),n.stateNode=r):n.memoizedState=eg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return He(n),e===null&&xt&&(r=n.stateNode=Q0(n.type,n.pendingProps,te.current),bn=n,li=!0,c=qt,Ha(n.type)?(Bf=c,qt=ui(r.firstChild)):qt=c),An(e,n,n.pendingProps.children,a),wl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&xt&&((c=r=qt)&&(r=qx(r,n.type,n.pendingProps,li),r!==null?(n.stateNode=r,bn=n,qt=ui(r.firstChild),li=!1,c=!0):c=!1),c||Aa(n)),He(n),c=n.type,f=n.pendingProps,g=e!==null?e.memoizedProps:null,r=f.children,Of(c,f)?r=null:g!==null&&Of(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=Uu(e,n,rx,null,null,a),To._currentValue=c),wl(e,n),An(e,n,r,a),n.child;case 6:return e===null&&xt&&((e=a=qt)&&(a=Wx(a,n.pendingProps,li),a!==null?(n.stateNode=a,bn=n,qt=null,e=!0):e=!1),e||Aa(n)),null;case 13:return Hm(e,n,a);case 4:return De(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=ps(n,null,r,a):An(e,n,r,a),n.child;case 11:return Nm(e,n,n.type,n.pendingProps,a);case 7:return An(e,n,n.pendingProps,a),n.child;case 8:return An(e,n,n.pendingProps.children,a),n.child;case 12:return An(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Ra(n,n.type,r.value),An(e,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,us(n),c=Tn(c),r=r(c),n.flags|=1,An(e,n,r,a),n.child;case 14:return Um(e,n,n.type,n.pendingProps,a);case 15:return Lm(e,n,n.type,n.pendingProps,a);case 19:return Vm(e,n,a);case 31:return px(e,n,a);case 22:return Om(e,n,a,n.pendingProps);case 24:return us(n),r=Tn(rn),e===null?(c=Mu(),c===null&&(c=kt,f=Su(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},bu(n),Ra(n,rn,c)):((e.lanes&a)!==0&&(Tu(e,n),ao(n,null,null,a),io()),c=e.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Ra(n,rn,r)):(r=f.cache,Ra(n,rn,r),r!==c.cache&&xu(n,[rn],a,!0))),An(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ji(e){e.flags|=4}function of(e,n,a,r,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(g0())e.flags|=8192;else throw hs=pl,Eu}else e.flags&=-16777217}function Xm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!sg(n))if(g0())e.flags|=8192;else throw hs=pl,Eu}function Nl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ot():536870912,e.lanes|=n,ar|=n)}function uo(e,n){if(!xt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Wt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function gx(e,n,a){var r=n.pendingProps;switch(pu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(n),null;case 1:return Wt(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Yi(rn),ke(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(qs(n)?Ji(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,gu())),Wt(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(Ji(n),f!==null?(Wt(n),Xm(n,f)):(Wt(n),of(n,c,null,r,a))):f?f!==e.memoizedState?(Ji(n),Wt(n),Xm(n,f)):(Wt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Ji(n),Wt(n),of(n,c,e,r,a)),null;case 27:if(dt(n),a=te.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Ji(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Wt(n),null}e=Ae.current,qs(n)?Ep(n):(e=Q0(c,r,a),n.stateNode=e,Ji(n))}return Wt(n),null;case 5:if(dt(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Ji(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Wt(n),null}if(f=Ae.current,qs(n))Ep(n);else{var g=Wl(te.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?g.createElement(c,{is:r.is}):g.createElement(c)}}f[sn]=n,f[vn]=r;e:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break e;for(;g.sibling===null;){if(g.return===null||g.return===n)break e;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;e:switch(Rn(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Ji(n)}}return Wt(n),of(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Ji(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=te.current,qs(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,c=bn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[sn]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||H0(e.nodeValue,a)),e||Aa(n,!0)}else e=Wl(e).createTextNode(r),e[sn]=n,n.stateNode=e}return Wt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=qs(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[sn]=n}else ls(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Wt(n),e=!1}else a=gu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Zn(n),n):(Zn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Wt(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=qs(n),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[sn]=n}else ls(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Wt(n),c=!1}else c=gu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Zn(n),n):(Zn(n),null)}return Zn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Nl(n,n.updateQueue),Wt(n),null);case 4:return ke(),e===null&&wf(n.stateNode.containerInfo),Wt(n),null;case 10:return Yi(n.type),Wt(n),null;case 19:if(ne(en),r=n.memoizedState,r===null)return Wt(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)uo(r,!1);else{if($t!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=vl(e),f!==null){for(n.flags|=128,uo(r,!1),e=f.updateQueue,n.updateQueue=e,Nl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)vp(a,e),a=a.sibling;return _e(en,en.current&1|2),xt&&Wi(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&M()>zl&&(n.flags|=128,c=!0,uo(r,!1),n.lanes=4194304)}else{if(!c)if(e=vl(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Nl(n,e),uo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!xt)return Wt(n),null}else 2*M()-r.renderingStartTime>zl&&a!==536870912&&(n.flags|=128,c=!0,uo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=M(),e.sibling=null,a=en.current,_e(en,c?a&1|2:a&1),xt&&Wi(n,r.treeForkCount),e):(Wt(n),null);case 22:case 23:return Zn(n),wu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Wt(n),n.subtreeFlags&6&&(n.flags|=8192)):Wt(n),a=n.updateQueue,a!==null&&Nl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&ne(fs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Yi(rn),Wt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function _x(e,n){switch(pu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Yi(rn),ke(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return dt(n),null;case 31:if(n.memoizedState!==null){if(Zn(n),n.alternate===null)throw Error(s(340));ls()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Zn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ls()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ne(en),null;case 4:return ke(),null;case 10:return Yi(n.type),null;case 22:case 23:return Zn(n),wu(),e!==null&&ne(fs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Yi(rn),null;case 25:return null;default:return null}}function qm(e,n){switch(pu(n),n.tag){case 3:Yi(rn),ke();break;case 26:case 27:case 5:dt(n);break;case 4:ke();break;case 31:n.memoizedState!==null&&Zn(n);break;case 13:Zn(n);break;case 19:ne(en);break;case 10:Yi(n.type);break;case 22:case 23:Zn(n),wu(),e!==null&&ne(fs);break;case 24:Yi(rn)}}function fo(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){r=void 0;var f=a.create,g=a.inst;r=f(),g.destroy=r}a=a.next}while(a!==c)}}catch(b){Ft(n,n.return,b)}}function La(e,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&e)===e){var g=r.inst,b=g.destroy;if(b!==void 0){g.destroy=void 0,c=n;var I=a,J=b;try{J()}catch(de){Ft(c,I,de)}}}r=r.next}while(r!==f)}}catch(de){Ft(n,n.return,de)}}function Wm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{zp(n,a)}catch(r){Ft(e,e.return,r)}}}function jm(e,n,a){a.props=gs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Ft(e,n,r)}}function ho(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(c){Ft(e,n,c)}}function Ui(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Ft(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ft(e,n,c)}else a.current=null}function Ym(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Ft(e,e.return,c)}}function lf(e,n,a){try{var r=e.stateNode;Bx(r,e.type,a,n),r[vn]=n}catch(c){Ft(e,e.return,c)}}function Zm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ha(e.type)||e.tag===4}function cf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ha(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function uf(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ki));else if(r!==4&&(r===27&&Ha(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(uf(e,n,a),e=e.sibling;e!==null;)uf(e,n,a),e=e.sibling}function Ul(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&Ha(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ul(e,n,a),e=e.sibling;e!==null;)Ul(e,n,a),e=e.sibling}function Km(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Rn(n,r,a),n[sn]=e,n[vn]=a}catch(f){Ft(e,e.return,f)}}var $i=!1,cn=!1,ff=!1,Qm=typeof WeakSet=="function"?WeakSet:Set,mn=null;function vx(e,n){if(e=e.containerInfo,Uf=$l,e=cp(e),iu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var g=0,b=-1,I=-1,J=0,de=0,ge=e,ee=null;t:for(;;){for(var le;ge!==a||c!==0&&ge.nodeType!==3||(b=g+c),ge!==f||r!==0&&ge.nodeType!==3||(I=g+r),ge.nodeType===3&&(g+=ge.nodeValue.length),(le=ge.firstChild)!==null;)ee=ge,ge=le;for(;;){if(ge===e)break t;if(ee===a&&++J===c&&(b=g),ee===f&&++de===r&&(I=g),(le=ge.nextSibling)!==null)break;ge=ee,ee=ge.parentNode}ge=le}a=b===-1||I===-1?null:{start:b,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Lf={focusedElem:e,selectionRange:a},$l=!1,mn=n;mn!==null;)if(n=mn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,mn=e;else for(;mn!==null;){switch(n=mn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Ve=gs(a.type,c);e=r.getSnapshotBeforeUpdate(Ve,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(et){Ft(a,a.return,et)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)zf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":zf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,mn=e;break}mn=n.return}}function Jm(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ta(e,a),r&4&&fo(5,a);break;case 1:if(ta(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(g){Ft(a,a.return,g)}else{var c=gs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(g){Ft(a,a.return,g)}}r&64&&Wm(a),r&512&&ho(a,a.return);break;case 3:if(ta(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{zp(e,n)}catch(g){Ft(a,a.return,g)}}break;case 27:n===null&&r&4&&Km(a);case 26:case 5:ta(e,a),n===null&&r&4&&Ym(a),r&512&&ho(a,a.return);break;case 12:ta(e,a);break;case 31:ta(e,a),r&4&&t0(e,a);break;case 13:ta(e,a),r&4&&n0(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Rx.bind(null,a),jx(e,a))));break;case 22:if(r=a.memoizedState!==null||$i,!r){n=n!==null&&n.memoizedState!==null||cn,c=$i;var f=cn;$i=r,(cn=n)&&!f?na(e,a,(a.subtreeFlags&8772)!==0):ta(e,a),$i=c,cn=f}break;case 30:break;default:ta(e,a)}}function $m(e){var n=e.alternate;n!==null&&(e.alternate=null,$m(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Hr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Zt=null,In=!1;function ea(e,n,a){for(a=a.child;a!==null;)e0(e,n,a),a=a.sibling}function e0(e,n,a){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(Ee,a)}catch{}switch(a.tag){case 26:cn||Ui(a,n),ea(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:cn||Ui(a,n);var r=Zt,c=In;Ha(a.type)&&(Zt=a.stateNode,In=!1),ea(e,n,a),Mo(a.stateNode),Zt=r,In=c;break;case 5:cn||Ui(a,n);case 6:if(r=Zt,c=In,Zt=null,ea(e,n,a),Zt=r,In=c,Zt!==null)if(In)try{(Zt.nodeType===9?Zt.body:Zt.nodeName==="HTML"?Zt.ownerDocument.body:Zt).removeChild(a.stateNode)}catch(f){Ft(a,n,f)}else try{Zt.removeChild(a.stateNode)}catch(f){Ft(a,n,f)}break;case 18:Zt!==null&&(In?(e=Zt,W0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),dr(e)):W0(Zt,a.stateNode));break;case 4:r=Zt,c=In,Zt=a.stateNode.containerInfo,In=!0,ea(e,n,a),Zt=r,In=c;break;case 0:case 11:case 14:case 15:La(2,a,n),cn||La(4,a,n),ea(e,n,a);break;case 1:cn||(Ui(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&jm(a,n,r)),ea(e,n,a);break;case 21:ea(e,n,a);break;case 22:cn=(r=cn)||a.memoizedState!==null,ea(e,n,a),cn=r;break;default:ea(e,n,a)}}function t0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{dr(e)}catch(a){Ft(n,n.return,a)}}}function n0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{dr(e)}catch(a){Ft(n,n.return,a)}}function xx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Qm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Qm),n;default:throw Error(s(435,e.tag))}}function Ll(e,n){var a=xx(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=Cx.bind(null,e,r);r.then(c,c)}})}function Bn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=e,g=n,b=g;e:for(;b!==null;){switch(b.tag){case 27:if(Ha(b.type)){Zt=b.stateNode,In=!1;break e}break;case 5:Zt=b.stateNode,In=!1;break e;case 3:case 4:Zt=b.stateNode.containerInfo,In=!0;break e}b=b.return}if(Zt===null)throw Error(s(160));e0(f,g,c),Zt=null,In=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)i0(n,e),n=n.sibling}var Si=null;function i0(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Bn(n,e),Hn(e),r&4&&(La(3,e,e.return),fo(3,e),La(5,e,e.return));break;case 1:Bn(n,e),Hn(e),r&512&&(cn||a===null||Ui(a,a.return)),r&64&&$i&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=Si;if(Bn(n,e),Hn(e),r&512&&(cn||a===null||Ui(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){e:{r=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ts]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),Rn(f,r,a),f[sn]=e,T(f),r=f;break e;case"link":var g=ig("link","href",c).get(r+(a.href||""));if(g){for(var b=0;b<g.length;b++)if(f=g[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(b,1);break t}}f=c.createElement(r),Rn(f,r,a),c.head.appendChild(f);break;case"meta":if(g=ig("meta","content",c).get(r+(a.content||""))){for(b=0;b<g.length;b++)if(f=g[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(b,1);break t}}f=c.createElement(r),Rn(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[sn]=e,T(f),r=f}e.stateNode=r}else ag(c,e.type,e.stateNode);else e.stateNode=ng(c,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?ag(c,e.type,e.stateNode):ng(c,r,e.memoizedProps)):r===null&&e.stateNode!==null&&lf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,e),Hn(e),r&512&&(cn||a===null||Ui(a,a.return)),a!==null&&r&4&&lf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,e),Hn(e),r&512&&(cn||a===null||Ui(a,a.return)),e.flags&32){c=e.stateNode;try{fn(c,"")}catch(Ve){Ft(e,e.return,Ve)}}r&4&&e.stateNode!=null&&(c=e.memoizedProps,lf(e,c,a!==null?a.memoizedProps:c)),r&1024&&(ff=!0);break;case 6:if(Bn(n,e),Hn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(Ve){Ft(e,e.return,Ve)}}break;case 3:if(Zl=null,c=Si,Si=jl(n.containerInfo),Bn(n,e),Si=c,Hn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{dr(n.containerInfo)}catch(Ve){Ft(e,e.return,Ve)}ff&&(ff=!1,a0(e));break;case 4:r=Si,Si=jl(e.stateNode.containerInfo),Bn(n,e),Hn(e),Si=r;break;case 12:Bn(n,e),Hn(e);break;case 31:Bn(n,e),Hn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ll(e,r)));break;case 13:Bn(n,e),Hn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Pl=M()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ll(e,r)));break;case 22:c=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,J=$i,de=cn;if($i=J||c,cn=de||I,Bn(n,e),cn=de,$i=J,Hn(e),r&8192)e:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||I||$i||cn||_s(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{b=I.stateNode;var ge=I.memoizedProps.style,ee=ge!=null&&ge.hasOwnProperty("display")?ge.display:null;b.style.display=ee==null||typeof ee=="boolean"?"":(""+ee).trim()}}catch(Ve){Ft(I,I.return,Ve)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=c?"":I.memoizedProps}catch(Ve){Ft(I,I.return,Ve)}}}else if(n.tag===18){if(a===null){I=n;try{var le=I.stateNode;c?j0(le,!0):j0(I.stateNode,!1)}catch(Ve){Ft(I,I.return,Ve)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Ll(e,a))));break;case 19:Bn(n,e),Hn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ll(e,r)));break;case 30:break;case 21:break;default:Bn(n,e),Hn(e)}}function Hn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(Zm(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=cf(e);Ul(e,f,c);break;case 5:var g=a.stateNode;a.flags&32&&(fn(g,""),a.flags&=-33);var b=cf(e);Ul(e,b,g);break;case 3:case 4:var I=a.stateNode.containerInfo,J=cf(e);uf(e,J,I);break;default:throw Error(s(161))}}catch(de){Ft(e,e.return,de)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function a0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;a0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ta(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Jm(e,n.alternate,n),n=n.sibling}function _s(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:La(4,n,n.return),_s(n);break;case 1:Ui(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&jm(n,n.return,a),_s(n);break;case 27:Mo(n.stateNode);case 26:case 5:Ui(n,n.return),_s(n);break;case 22:n.memoizedState===null&&_s(n);break;case 30:_s(n);break;default:_s(n)}e=e.sibling}}function na(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=e,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:na(c,f,a),fo(4,f);break;case 1:if(na(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){Ft(r,r.return,J)}if(r=f,c=r.updateQueue,c!==null){var b=r.stateNode;try{var I=c.shared.hiddenCallbacks;if(I!==null)for(c.shared.hiddenCallbacks=null,c=0;c<I.length;c++)Pp(I[c],b)}catch(J){Ft(r,r.return,J)}}a&&g&64&&Wm(f),ho(f,f.return);break;case 27:Km(f);case 26:case 5:na(c,f,a),a&&r===null&&g&4&&Ym(f),ho(f,f.return);break;case 12:na(c,f,a);break;case 31:na(c,f,a),a&&g&4&&t0(c,f);break;case 13:na(c,f,a),a&&g&4&&n0(c,f);break;case 22:f.memoizedState===null&&na(c,f,a),ho(f,f.return);break;case 30:break;default:na(c,f,a)}n=n.sibling}}function df(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Jr(a))}function hf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Jr(e))}function yi(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)s0(e,n,a,r),n=n.sibling}function s0(e,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:yi(e,n,a,r),c&2048&&fo(9,n);break;case 1:yi(e,n,a,r);break;case 3:yi(e,n,a,r),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Jr(e)));break;case 12:if(c&2048){yi(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,g=f.id,b=f.onPostCommit;typeof b=="function"&&b(g,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Ft(n,n.return,I)}}else yi(e,n,a,r);break;case 31:yi(e,n,a,r);break;case 13:yi(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?yi(e,n,a,r):po(e,n):f._visibility&2?yi(e,n,a,r):(f._visibility|=2,tr(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&df(g,n);break;case 24:yi(e,n,a,r),c&2048&&hf(n.alternate,n);break;default:yi(e,n,a,r)}}function tr(e,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,g=n,b=a,I=r,J=g.flags;switch(g.tag){case 0:case 11:case 15:tr(f,g,b,I,c),fo(8,g);break;case 23:break;case 22:var de=g.stateNode;g.memoizedState!==null?de._visibility&2?tr(f,g,b,I,c):po(f,g):(de._visibility|=2,tr(f,g,b,I,c)),c&&J&2048&&df(g.alternate,g);break;case 24:tr(f,g,b,I,c),c&&J&2048&&hf(g.alternate,g);break;default:tr(f,g,b,I,c)}n=n.sibling}}function po(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,c=r.flags;switch(r.tag){case 22:po(a,r),c&2048&&df(r.alternate,r);break;case 24:po(a,r),c&2048&&hf(r.alternate,r);break;default:po(a,r)}n=n.sibling}}var mo=8192;function nr(e,n,a){if(e.subtreeFlags&mo)for(e=e.child;e!==null;)r0(e,n,a),e=e.sibling}function r0(e,n,a){switch(e.tag){case 26:nr(e,n,a),e.flags&mo&&e.memoizedState!==null&&sS(a,Si,e.memoizedState,e.memoizedProps);break;case 5:nr(e,n,a);break;case 3:case 4:var r=Si;Si=jl(e.stateNode.containerInfo),nr(e,n,a),Si=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=mo,mo=16777216,nr(e,n,a),mo=r):nr(e,n,a));break;default:nr(e,n,a)}}function o0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function go(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];mn=r,c0(r,e)}o0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)l0(e),e=e.sibling}function l0(e){switch(e.tag){case 0:case 11:case 15:go(e),e.flags&2048&&La(9,e,e.return);break;case 3:go(e);break;case 12:go(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ol(e)):go(e);break;default:go(e)}}function Ol(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];mn=r,c0(r,e)}o0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:La(8,n,n.return),Ol(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ol(n));break;default:Ol(n)}e=e.sibling}}function c0(e,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:La(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Jr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,mn=r;else e:for(a=e;mn!==null;){r=mn;var c=r.sibling,f=r.return;if($m(r),r===a){mn=null;break e}if(c!==null){c.return=f,mn=c;break e}mn=f}}}var Sx={getCacheForType:function(e){var n=Tn(rn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Tn(rn).controller.signal}},yx=typeof WeakMap=="function"?WeakMap:Map,Dt=0,kt=null,pt=null,_t=0,zt=0,Kn=null,Oa=!1,ir=!1,pf=!1,ia=0,$t=0,Pa=0,vs=0,mf=0,Qn=0,ar=0,_o=null,Gn=null,gf=!1,Pl=0,u0=0,zl=1/0,Fl=null,za=null,dn=0,Fa=null,sr=null,aa=0,_f=0,vf=null,f0=null,vo=0,xf=null;function Jn(){return(Dt&2)!==0&&_t!==0?_t&-_t:O.T!==null?Tf():Ir()}function d0(){if(Qn===0)if((_t&536870912)===0||xt){var e=Te;Te<<=1,(Te&3932160)===0&&(Te=262144),Qn=e}else Qn=536870912;return e=Yn.current,e!==null&&(e.flags|=32),Qn}function Vn(e,n,a){(e===kt&&(zt===2||zt===9)||e.cancelPendingCommit!==null)&&(rr(e,0),Ia(e,_t,Qn,!1)),Dn(e,a),((Dt&2)===0||e!==kt)&&(e===kt&&((Dt&2)===0&&(vs|=a),$t===4&&Ia(e,_t,Qn,!1)),Li(e))}function h0(e,n,a){if((Dt&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Re(e,n),c=r?bx(e,n):yf(e,n,!0),f=r;do{if(c===0){ir&&!r&&Ia(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Mx(a)){c=yf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;e:{var b=e;c=_o;var I=b.current.memoizedState.isDehydrated;if(I&&(rr(b,g).flags|=256),g=yf(b,g,!1),g!==2){if(pf&&!I){b.errorRecoveryDisabledLanes|=f,vs|=f,c=4;break e}f=Gn,Gn=c,f!==null&&(Gn===null?Gn=f:Gn.push.apply(Gn,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){rr(e,0),Ia(e,n,0,!0);break}e:{switch(r=e,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ia(r,n,Qn,!Oa);break e;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Pl+300-M(),10<c)){if(Ia(r,n,Qn,!Oa),ve(r,0,!0)!==0)break e;aa=n,r.timeoutHandle=X0(p0.bind(null,r,a,Gn,Fl,gf,n,Qn,vs,ar,Oa,f,"Throttled",-0,0),c);break e}p0(r,a,Gn,Fl,gf,n,Qn,vs,ar,Oa,f,null,-0,0)}}break}while(!0);Li(e)}function p0(e,n,a,r,c,f,g,b,I,J,de,ge,ee,le){if(e.timeoutHandle=-1,ge=n.subtreeFlags,ge&8192||(ge&16785408)===16785408){ge={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ki},r0(n,f,ge);var Ve=(f&62914560)===f?Pl-M():(f&4194048)===f?u0-M():0;if(Ve=rS(ge,Ve),Ve!==null){aa=f,e.cancelPendingCommit=Ve(M0.bind(null,e,n,f,a,r,c,g,b,I,de,ge,null,ee,le)),Ia(e,f,g,!J);return}}M0(e,n,f,a,r,c,g,b,I)}function Mx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Wn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ia(e,n,a,r){n&=~mf,n&=~vs,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var c=n;0<c;){var f=31-Pe(c),g=1<<f;r[f]=-1,c&=~g}a!==0&&Zo(e,a,n)}function Il(){return(Dt&6)===0?(xo(0),!1):!0}function Sf(){if(pt!==null){if(zt===0)var e=pt.return;else e=pt,ji=cs=null,Pu(e),Ks=null,eo=0,e=pt;for(;e!==null;)qm(e.alternate,e),e=e.return;pt=null}}function rr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Vx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),aa=0,Sf(),kt=e,pt=a=qi(e.current,null),_t=n,zt=0,Kn=null,Oa=!1,ir=Re(e,n),pf=!1,ar=Qn=mf=vs=Pa=$t=0,Gn=_o=null,gf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var c=31-Pe(r),f=1<<c;n|=e[c],r&=~f}return ia=n,sl(),a}function m0(e,n){ot=null,O.H=lo,n===Zs||n===hl?(n=Np(),zt=3):n===Eu?(n=Np(),zt=4):zt=n===Qu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,pt===null&&($t=1,Rl(e,si(n,e.current)))}function g0(){var e=Yn.current;return e===null?!0:(_t&4194048)===_t?ci===null:(_t&62914560)===_t||(_t&536870912)!==0?e===ci:!1}function _0(){var e=O.H;return O.H=lo,e===null?lo:e}function v0(){var e=O.A;return O.A=Sx,e}function Bl(){$t=4,Oa||(_t&4194048)!==_t&&Yn.current!==null||(ir=!0),(Pa&134217727)===0&&(vs&134217727)===0||kt===null||Ia(kt,_t,Qn,!1)}function yf(e,n,a){var r=Dt;Dt|=2;var c=_0(),f=v0();(kt!==e||_t!==n)&&(Fl=null,rr(e,n)),n=!1;var g=$t;e:do try{if(zt!==0&&pt!==null){var b=pt,I=Kn;switch(zt){case 8:Sf(),g=6;break e;case 3:case 2:case 9:case 6:Yn.current===null&&(n=!0);var J=zt;if(zt=0,Kn=null,or(e,b,I,J),a&&ir){g=0;break e}break;default:J=zt,zt=0,Kn=null,or(e,b,I,J)}}Ex(),g=$t;break}catch(de){m0(e,de)}while(!0);return n&&e.shellSuspendCounter++,ji=cs=null,Dt=r,O.H=c,O.A=f,pt===null&&(kt=null,_t=0,sl()),g}function Ex(){for(;pt!==null;)x0(pt)}function bx(e,n){var a=Dt;Dt|=2;var r=_0(),c=v0();kt!==e||_t!==n?(Fl=null,zl=M()+500,rr(e,n)):ir=Re(e,n);e:do try{if(zt!==0&&pt!==null){n=pt;var f=Kn;t:switch(zt){case 1:zt=0,Kn=null,or(e,n,f,1);break;case 2:case 9:if(wp(f)){zt=0,Kn=null,S0(n);break}n=function(){zt!==2&&zt!==9||kt!==e||(zt=7),Li(e)},f.then(n,n);break e;case 3:zt=7;break e;case 4:zt=5;break e;case 7:wp(f)?(zt=0,Kn=null,S0(n)):(zt=0,Kn=null,or(e,n,f,7));break;case 5:var g=null;switch(pt.tag){case 26:g=pt.memoizedState;case 5:case 27:var b=pt;if(g?sg(g):b.stateNode.complete){zt=0,Kn=null;var I=b.sibling;if(I!==null)pt=I;else{var J=b.return;J!==null?(pt=J,Hl(J)):pt=null}break t}}zt=0,Kn=null,or(e,n,f,5);break;case 6:zt=0,Kn=null,or(e,n,f,6);break;case 8:Sf(),$t=6;break e;default:throw Error(s(462))}}Tx();break}catch(de){m0(e,de)}while(!0);return ji=cs=null,O.H=r,O.A=c,Dt=a,pt!==null?0:(kt=null,_t=0,sl(),$t)}function Tx(){for(;pt!==null&&!je();)x0(pt)}function x0(e){var n=km(e.alternate,e,ia);e.memoizedProps=e.pendingProps,n===null?Hl(e):pt=n}function S0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Fm(a,n,n.pendingProps,n.type,void 0,_t);break;case 11:n=Fm(a,n,n.pendingProps,n.type.render,n.ref,_t);break;case 5:Pu(n);default:qm(a,n),n=pt=vp(n,ia),n=km(a,n,ia)}e.memoizedProps=e.pendingProps,n===null?Hl(e):pt=n}function or(e,n,a,r){ji=cs=null,Pu(n),Ks=null,eo=0;var c=n.return;try{if(hx(e,c,n,a,_t)){$t=1,Rl(e,si(a,e.current)),pt=null;return}}catch(f){if(c!==null)throw pt=c,f;$t=1,Rl(e,si(a,e.current)),pt=null;return}n.flags&32768?(xt||r===1?e=!0:ir||(_t&536870912)!==0?e=!1:(Oa=e=!0,(r===2||r===9||r===3||r===6)&&(r=Yn.current,r!==null&&r.tag===13&&(r.flags|=16384))),y0(n,e)):Hl(n)}function Hl(e){var n=e;do{if((n.flags&32768)!==0){y0(n,Oa);return}e=n.return;var a=gx(n.alternate,n,ia);if(a!==null){pt=a;return}if(n=n.sibling,n!==null){pt=n;return}pt=n=e}while(n!==null);$t===0&&($t=5)}function y0(e,n){do{var a=_x(e.alternate,e);if(a!==null){a.flags&=32767,pt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){pt=e;return}pt=e=a}while(e!==null);$t=6,pt=null}function M0(e,n,a,r,c,f,g,b,I){e.cancelPendingCommit=null;do Gl();while(dn!==0);if((Dt&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=lu,gi(e,a,f,g,b,I),e===kt&&(pt=kt=null,_t=0),sr=n,Fa=e,aa=a,_f=f,vf=c,f0=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,wx(ce,function(){return R0(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=O.T,O.T=null,c=H.p,H.p=2,g=Dt,Dt|=4;try{vx(e,n,a)}finally{Dt=g,H.p=c,O.T=r}}dn=1,E0(),b0(),T0()}}function E0(){if(dn===1){dn=0;var e=Fa,n=sr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var r=H.p;H.p=2;var c=Dt;Dt|=4;try{i0(n,e);var f=Lf,g=cp(e.containerInfo),b=f.focusedElem,I=f.selectionRange;if(g!==b&&b&&b.ownerDocument&&lp(b.ownerDocument.documentElement,b)){if(I!==null&&iu(b)){var J=I.start,de=I.end;if(de===void 0&&(de=J),"selectionStart"in b)b.selectionStart=J,b.selectionEnd=Math.min(de,b.value.length);else{var ge=b.ownerDocument||document,ee=ge&&ge.defaultView||window;if(ee.getSelection){var le=ee.getSelection(),Ve=b.textContent.length,et=Math.min(I.start,Ve),Gt=I.end===void 0?et:Math.min(I.end,Ve);!le.extend&&et>Gt&&(g=Gt,Gt=et,et=g);var Y=op(b,et),X=op(b,Gt);if(Y&&X&&(le.rangeCount!==1||le.anchorNode!==Y.node||le.anchorOffset!==Y.offset||le.focusNode!==X.node||le.focusOffset!==X.offset)){var Q=ge.createRange();Q.setStart(Y.node,Y.offset),le.removeAllRanges(),et>Gt?(le.addRange(Q),le.extend(X.node,X.offset)):(Q.setEnd(X.node,X.offset),le.addRange(Q))}}}}for(ge=[],le=b;le=le.parentNode;)le.nodeType===1&&ge.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<ge.length;b++){var me=ge[b];me.element.scrollLeft=me.left,me.element.scrollTop=me.top}}$l=!!Uf,Lf=Uf=null}finally{Dt=c,H.p=r,O.T=a}}e.current=n,dn=2}}function b0(){if(dn===2){dn=0;var e=Fa,n=sr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var r=H.p;H.p=2;var c=Dt;Dt|=4;try{Jm(e,n.alternate,n)}finally{Dt=c,H.p=r,O.T=a}}dn=3}}function T0(){if(dn===4||dn===3){dn=0,D();var e=Fa,n=sr,a=aa,r=f0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?dn=5:(dn=0,sr=Fa=null,A0(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(za=null),Us(a),n=n.stateNode,be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(Ee,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=O.T,c=H.p,H.p=2,O.T=null;try{for(var f=e.onRecoverableError,g=0;g<r.length;g++){var b=r[g];f(b.value,{componentStack:b.stack})}}finally{O.T=n,H.p=c}}(aa&3)!==0&&Gl(),Li(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===xf?vo++:(vo=0,xf=e):vo=0,xo(0)}}function A0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Jr(n)))}function Gl(){return E0(),b0(),T0(),R0()}function R0(){if(dn!==5)return!1;var e=Fa,n=_f;_f=0;var a=Us(aa),r=O.T,c=H.p;try{H.p=32>a?32:a,O.T=null,a=vf,vf=null;var f=Fa,g=aa;if(dn=0,sr=Fa=null,aa=0,(Dt&6)!==0)throw Error(s(331));var b=Dt;if(Dt|=4,l0(f.current),s0(f,f.current,g,a),Dt=b,xo(0,!1),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(Ee,f)}catch{}return!0}finally{H.p=c,O.T=r,A0(e,n)}}function C0(e,n,a){n=si(a,n),n=Ku(e.stateNode,n,2),e=Da(e,n,2),e!==null&&(Dn(e,2),Li(e))}function Ft(e,n,a){if(e.tag===3)C0(e,e,a);else for(;n!==null;){if(n.tag===3){C0(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(za===null||!za.has(r))){e=si(a,e),a=wm(2),r=Da(n,a,2),r!==null&&(Dm(a,r,n,e),Dn(r,2),Li(r));break}}n=n.return}}function Mf(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new yx;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(pf=!0,c.add(a),e=Ax.bind(null,e,n,a),n.then(e,e))}function Ax(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,kt===e&&(_t&a)===a&&($t===4||$t===3&&(_t&62914560)===_t&&300>M()-Pl?(Dt&2)===0&&rr(e,0):mf|=a,ar===_t&&(ar=0)),Li(e)}function w0(e,n){n===0&&(n=Ot()),e=rs(e,n),e!==null&&(Dn(e,n),Li(e))}function Rx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),w0(e,a)}function Cx(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),w0(e,a)}function wx(e,n){return yt(e,n)}var Vl=null,lr=null,Ef=!1,kl=!1,bf=!1,Ba=0;function Li(e){e!==lr&&e.next===null&&(lr===null?Vl=lr=e:lr=lr.next=e),kl=!0,Ef||(Ef=!0,Nx())}function xo(e,n){if(!bf&&kl){bf=!0;do for(var a=!1,r=Vl;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var g=r.suspendedLanes,b=r.pingedLanes;f=(1<<31-Pe(42|e)+1)-1,f&=c&~(g&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,L0(r,f))}else f=_t,f=ve(r,r===kt?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Re(r,f)||(a=!0,L0(r,f));r=r.next}while(a);bf=!1}}function Dx(){D0()}function D0(){kl=Ef=!1;var e=0;Ba!==0&&Gx()&&(e=Ba);for(var n=M(),a=null,r=Vl;r!==null;){var c=r.next,f=N0(r,n);f===0?(r.next=null,a===null?Vl=c:a.next=c,c===null&&(lr=a)):(a=r,(e!==0||(f&3)!==0)&&(kl=!0)),r=c}dn!==0&&dn!==5||xo(e),Ba!==0&&(Ba=0)}function N0(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var g=31-Pe(f),b=1<<g,I=c[g];I===-1?((b&a)===0||(b&r)!==0)&&(c[g]=nt(b,n)):I<=n&&(e.expiredLanes|=b),f&=~b}if(n=kt,a=_t,a=ve(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(zt===2||zt===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Nt(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Re(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&Nt(r),Us(a)){case 2:case 8:a=xe;break;case 32:a=ce;break;case 268435456:a=Ce;break;default:a=ce}return r=U0.bind(null,e),a=yt(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&Nt(r),e.callbackPriority=2,e.callbackNode=null,2}function U0(e,n){if(dn!==0&&dn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Gl()&&e.callbackNode!==a)return null;var r=_t;return r=ve(e,e===kt?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(h0(e,r,n),N0(e,M()),e.callbackNode!=null&&e.callbackNode===a?U0.bind(null,e):null)}function L0(e,n){if(Gl())return null;h0(e,n,!0)}function Nx(){kx(function(){(Dt&6)!==0?yt(he,Dx):D0()})}function Tf(){if(Ba===0){var e=js;e===0&&(e=Ue,Ue<<=1,(Ue&261888)===0&&(Ue=256)),Ba=e}return Ba}function O0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Qo(""+e)}function P0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Ux(e,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=O0((c[vn]||null).action),g=r.submitter;g&&(n=(n=g[vn]||null)?O0(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var b=new tl("action","action",null,r,c);e.push({event:b,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ba!==0){var I=g?P0(c,g):new FormData(c);Xu(a,{pending:!0,data:I,method:c.method,action:f},null,I)}}else typeof f=="function"&&(b.preventDefault(),I=g?P0(c,g):new FormData(c),Xu(a,{pending:!0,data:I,method:c.method,action:f},f,I))},currentTarget:c}]})}}for(var Af=0;Af<ou.length;Af++){var Rf=ou[Af],Lx=Rf.toLowerCase(),Ox=Rf[0].toUpperCase()+Rf.slice(1);xi(Lx,"on"+Ox)}xi(dp,"onAnimationEnd"),xi(hp,"onAnimationIteration"),xi(pp,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi(Kv,"onTransitionRun"),xi(Qv,"onTransitionStart"),xi(Jv,"onTransitionCancel"),xi(mp,"onTransitionEnd"),K("onMouseEnter",["mouseout","mouseover"]),K("onMouseLeave",["mouseout","mouseover"]),K("onPointerEnter",["pointerout","pointerover"]),K("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Px=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(So));function z0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],c=r.event;r=r.listeners;e:{var f=void 0;if(n)for(var g=r.length-1;0<=g;g--){var b=r[g],I=b.instance,J=b.currentTarget;if(b=b.listener,I!==f&&c.isPropagationStopped())break e;f=b,c.currentTarget=J;try{f(c)}catch(de){al(de)}c.currentTarget=null,f=I}else for(g=0;g<r.length;g++){if(b=r[g],I=b.instance,J=b.currentTarget,b=b.listener,I!==f&&c.isPropagationStopped())break e;f=b,c.currentTarget=J;try{f(c)}catch(de){al(de)}c.currentTarget=null,f=I}}}}function mt(e,n){var a=n[Ls];a===void 0&&(a=n[Ls]=new Set);var r=e+"__bubble";a.has(r)||(F0(n,e,2,!1),a.add(r))}function Cf(e,n,a){var r=0;n&&(r|=4),F0(a,e,r,n)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function wf(e){if(!e[Xl]){e[Xl]=!0,j.forEach(function(a){a!=="selectionchange"&&(Px.has(a)||Cf(a,!1,e),Cf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Xl]||(n[Xl]=!0,Cf("selectionchange",!1,n))}}function F0(e,n,a,r){switch(dg(n)){case 2:var c=cS;break;case 8:c=uS;break;default:c=Xf}a=c.bind(null,n,a,e),c=void 0,!Yc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Df(e,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var b=r.stateNode.containerInfo;if(b===c)break;if(g===4)for(g=r.return;g!==null;){var I=g.tag;if((I===3||I===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;b!==null;){if(g=Sa(b),g===null)return;if(I=g.tag,I===5||I===6||I===26||I===27){r=f=g;continue e}b=b.parentNode}}r=r.return}Vh(function(){var J=f,de=Wc(a),ge=[];e:{var ee=gp.get(e);if(ee!==void 0){var le=tl,Ve=e;switch(e){case"keypress":if($o(a)===0)break e;case"keydown":case"keyup":le=Cv;break;case"focusin":Ve="focus",le=Jc;break;case"focusout":Ve="blur",le=Jc;break;case"beforeblur":case"afterblur":le=Jc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=qh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=gv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=Nv;break;case dp:case hp:case pp:le=xv;break;case mp:le=Lv;break;case"scroll":case"scrollend":le=pv;break;case"wheel":le=Pv;break;case"copy":case"cut":case"paste":le=yv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=jh;break;case"toggle":case"beforetoggle":le=Fv}var et=(n&4)!==0,Gt=!et&&(e==="scroll"||e==="scrollend"),Y=et?ee!==null?ee+"Capture":null:ee;et=[];for(var X=J,Q;X!==null;){var me=X;if(Q=me.stateNode,me=me.tag,me!==5&&me!==26&&me!==27||Q===null||Y===null||(me=Gr(X,Y),me!=null&&et.push(yo(X,me,Q))),Gt)break;X=X.return}0<et.length&&(ee=new le(ee,Ve,null,a,de),ge.push({event:ee,listeners:et}))}}if((n&7)===0){e:{if(ee=e==="mouseover"||e==="pointerover",le=e==="mouseout"||e==="pointerout",ee&&a!==qc&&(Ve=a.relatedTarget||a.fromElement)&&(Sa(Ve)||Ve[_i]))break e;if((le||ee)&&(ee=de.window===de?de:(ee=de.ownerDocument)?ee.defaultView||ee.parentWindow:window,le?(Ve=a.relatedTarget||a.toElement,le=J,Ve=Ve?Sa(Ve):null,Ve!==null&&(Gt=u(Ve),et=Ve.tag,Ve!==Gt||et!==5&&et!==27&&et!==6)&&(Ve=null)):(le=null,Ve=J),le!==Ve)){if(et=qh,me="onMouseLeave",Y="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(et=jh,me="onPointerLeave",Y="onPointerEnter",X="pointer"),Gt=le==null?ee:ns(le),Q=Ve==null?ee:ns(Ve),ee=new et(me,X+"leave",le,a,de),ee.target=Gt,ee.relatedTarget=Q,me=null,Sa(de)===J&&(et=new et(Y,X+"enter",Ve,a,de),et.target=Q,et.relatedTarget=Gt,me=et),Gt=me,le&&Ve)t:{for(et=zx,Y=le,X=Ve,Q=0,me=Y;me;me=et(me))Q++;me=0;for(var Qe=X;Qe;Qe=et(Qe))me++;for(;0<Q-me;)Y=et(Y),Q--;for(;0<me-Q;)X=et(X),me--;for(;Q--;){if(Y===X||X!==null&&Y===X.alternate){et=Y;break t}Y=et(Y),X=et(X)}et=null}else et=null;le!==null&&I0(ge,ee,le,et,!1),Ve!==null&&Gt!==null&&I0(ge,Gt,Ve,et,!0)}}e:{if(ee=J?ns(J):window,le=ee.nodeName&&ee.nodeName.toLowerCase(),le==="select"||le==="input"&&ee.type==="file")var bt=tp;else if($h(ee))if(np)bt=jv;else{bt=qv;var Ye=Xv}else le=ee.nodeName,!le||le.toLowerCase()!=="input"||ee.type!=="checkbox"&&ee.type!=="radio"?J&&vi(J.elementType)&&(bt=tp):bt=Wv;if(bt&&(bt=bt(e,J))){ep(ge,bt,a,de);break e}Ye&&Ye(e,ee,J),e==="focusout"&&J&&ee.type==="number"&&J.memoizedProps.value!=null&&Sn(ee,"number",ee.value)}switch(Ye=J?ns(J):window,e){case"focusin":($h(Ye)||Ye.contentEditable==="true")&&(Bs=Ye,au=J,Zr=null);break;case"focusout":Zr=au=Bs=null;break;case"mousedown":su=!0;break;case"contextmenu":case"mouseup":case"dragend":su=!1,up(ge,a,de);break;case"selectionchange":if(Zv)break;case"keydown":case"keyup":up(ge,a,de)}var ct;if(eu)e:{switch(e){case"compositionstart":var vt="onCompositionStart";break e;case"compositionend":vt="onCompositionEnd";break e;case"compositionupdate":vt="onCompositionUpdate";break e}vt=void 0}else Is?Qh(e,a)&&(vt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(vt="onCompositionStart");vt&&(Yh&&a.locale!=="ko"&&(Is||vt!=="onCompositionStart"?vt==="onCompositionEnd"&&Is&&(ct=kh()):(Ea=de,Zc="value"in Ea?Ea.value:Ea.textContent,Is=!0)),Ye=ql(J,vt),0<Ye.length&&(vt=new Wh(vt,e,null,a,de),ge.push({event:vt,listeners:Ye}),ct?vt.data=ct:(ct=Jh(a),ct!==null&&(vt.data=ct)))),(ct=Bv?Hv(e,a):Gv(e,a))&&(vt=ql(J,"onBeforeInput"),0<vt.length&&(Ye=new Wh("onBeforeInput","beforeinput",null,a,de),ge.push({event:Ye,listeners:vt}),Ye.data=ct)),Ux(ge,e,J,a,de)}z0(ge,n)})}function yo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function ql(e,n){for(var a=n+"Capture",r=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Gr(e,a),c!=null&&r.unshift(yo(e,c,f)),c=Gr(e,n),c!=null&&r.push(yo(e,c,f))),e.tag===3)return r;e=e.return}return[]}function zx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function I0(e,n,a,r,c){for(var f=n._reactName,g=[];a!==null&&a!==r;){var b=a,I=b.alternate,J=b.stateNode;if(b=b.tag,I!==null&&I===r)break;b!==5&&b!==26&&b!==27||J===null||(I=J,c?(J=Gr(a,f),J!=null&&g.unshift(yo(a,J,I))):c||(J=Gr(a,f),J!=null&&g.push(yo(a,J,I)))),a=a.return}g.length!==0&&e.push({event:n,listeners:g})}var Fx=/\r\n?/g,Ix=/\u0000|\uFFFD/g;function B0(e){return(typeof e=="string"?e:""+e).replace(Fx,`
`).replace(Ix,"")}function H0(e,n){return n=B0(n),B0(e)===n}function Ht(e,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||fn(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&fn(e,""+r);break;case"className":Je(e,"class",r);break;case"tabIndex":Je(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Je(e,a,r);break;case"style":Ps(e,r,f);break;case"data":if(n!=="object"){Je(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Qo(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ht(e,n,"name",c.name,c,null),Ht(e,n,"formEncType",c.formEncType,c,null),Ht(e,n,"formMethod",c.formMethod,c,null),Ht(e,n,"formTarget",c.formTarget,c,null)):(Ht(e,n,"encType",c.encType,c,null),Ht(e,n,"method",c.method,c,null),Ht(e,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Qo(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=ki);break;case"onScroll":r!=null&&mt("scroll",e);break;case"onScrollEnd":r!=null&&mt("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=Qo(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":mt("beforetoggle",e),mt("toggle",e),qe(e,"popover",r);break;case"xlinkActuate":We(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":We(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":We(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":We(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":We(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":We(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":We(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":We(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":We(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":qe(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=dv.get(a)||a,qe(e,a,r))}}function Nf(e,n,a,r,c,f){switch(a){case"style":Ps(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?fn(e,r):(typeof r=="number"||typeof r=="bigint")&&fn(e,""+r);break;case"onScroll":r!=null&&mt("scroll",e);break;case"onScrollEnd":r!=null&&mt("scrollend",e);break;case"onClick":r!=null&&(e.onclick=ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!oe.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[vn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,c);break e}a in e?e[a]=r:r===!0?e.setAttribute(a,""):qe(e,a,r)}}}function Rn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":mt("error",e),mt("load",e);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ht(e,n,f,g,a,null)}}c&&Ht(e,n,"srcSet",a.srcSet,a,null),r&&Ht(e,n,"src",a.src,a,null);return;case"input":mt("invalid",e);var b=f=g=c=null,I=null,J=null;for(r in a)if(a.hasOwnProperty(r)){var de=a[r];if(de!=null)switch(r){case"name":c=de;break;case"type":g=de;break;case"checked":I=de;break;case"defaultChecked":J=de;break;case"value":f=de;break;case"defaultValue":b=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(s(137,n));break;default:Ht(e,n,r,de,a,null)}}Vi(e,f,b,I,J,g,c,!1);return;case"select":mt("invalid",e),r=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":g=b;break;case"multiple":r=b;default:Ht(e,n,c,b,a,null)}n=f,a=g,e.multiple=!!r,n!=null?ii(e,!!r,n,!1):a!=null&&ii(e,!!r,a,!0);return;case"textarea":mt("invalid",e),f=c=r=null;for(g in a)if(a.hasOwnProperty(g)&&(b=a[g],b!=null))switch(g){case"value":r=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Ht(e,n,g,b,a,null)}yn(e,r,c,f);return;case"option":for(I in a)a.hasOwnProperty(I)&&(r=a[I],r!=null)&&(I==="selected"?e.selected=r&&typeof r!="function"&&typeof r!="symbol":Ht(e,n,I,r,a,null));return;case"dialog":mt("beforetoggle",e),mt("toggle",e),mt("cancel",e),mt("close",e);break;case"iframe":case"object":mt("load",e);break;case"video":case"audio":for(r=0;r<So.length;r++)mt(So[r],e);break;case"image":mt("error",e),mt("load",e);break;case"details":mt("toggle",e);break;case"embed":case"source":case"link":mt("error",e),mt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(r=a[J],r!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ht(e,n,J,r,a,null)}return;default:if(vi(n)){for(de in a)a.hasOwnProperty(de)&&(r=a[de],r!==void 0&&Nf(e,n,de,r,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(r=a[b],r!=null&&Ht(e,n,b,r,a,null))}function Bx(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,b=null,I=null,J=null,de=null;for(le in a){var ge=a[le];if(a.hasOwnProperty(le)&&ge!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":I=ge;default:r.hasOwnProperty(le)||Ht(e,n,le,null,r,ge)}}for(var ee in r){var le=r[ee];if(ge=a[ee],r.hasOwnProperty(ee)&&(le!=null||ge!=null))switch(ee){case"type":f=le;break;case"name":c=le;break;case"checked":J=le;break;case"defaultChecked":de=le;break;case"value":g=le;break;case"defaultValue":b=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(s(137,n));break;default:le!==ge&&Ht(e,n,ee,le,r,ge)}}xn(e,g,b,I,J,de,f,c);return;case"select":le=g=b=ee=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":le=I;default:r.hasOwnProperty(f)||Ht(e,n,f,null,r,I)}for(c in r)if(f=r[c],I=a[c],r.hasOwnProperty(c)&&(f!=null||I!=null))switch(c){case"value":ee=f;break;case"defaultValue":b=f;break;case"multiple":g=f;default:f!==I&&Ht(e,n,c,f,r,I)}n=b,a=g,r=le,ee!=null?ii(e,!!a,ee,!1):!!r!=!!a&&(n!=null?ii(e,!!a,n,!0):ii(e,!!a,a?[]:"",!1));return;case"textarea":le=ee=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!r.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ht(e,n,b,null,r,c)}for(g in r)if(c=r[g],f=a[g],r.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":ee=c;break;case"defaultValue":le=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Ht(e,n,g,c,r,f)}Pt(e,ee,le);return;case"option":for(var Ve in a)ee=a[Ve],a.hasOwnProperty(Ve)&&ee!=null&&!r.hasOwnProperty(Ve)&&(Ve==="selected"?e.selected=!1:Ht(e,n,Ve,null,r,ee));for(I in r)ee=r[I],le=a[I],r.hasOwnProperty(I)&&ee!==le&&(ee!=null||le!=null)&&(I==="selected"?e.selected=ee&&typeof ee!="function"&&typeof ee!="symbol":Ht(e,n,I,ee,r,le));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in a)ee=a[et],a.hasOwnProperty(et)&&ee!=null&&!r.hasOwnProperty(et)&&Ht(e,n,et,null,r,ee);for(J in r)if(ee=r[J],le=a[J],r.hasOwnProperty(J)&&ee!==le&&(ee!=null||le!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(s(137,n));break;default:Ht(e,n,J,ee,r,le)}return;default:if(vi(n)){for(var Gt in a)ee=a[Gt],a.hasOwnProperty(Gt)&&ee!==void 0&&!r.hasOwnProperty(Gt)&&Nf(e,n,Gt,void 0,r,ee);for(de in r)ee=r[de],le=a[de],!r.hasOwnProperty(de)||ee===le||ee===void 0&&le===void 0||Nf(e,n,de,ee,r,le);return}}for(var Y in a)ee=a[Y],a.hasOwnProperty(Y)&&ee!=null&&!r.hasOwnProperty(Y)&&Ht(e,n,Y,null,r,ee);for(ge in r)ee=r[ge],le=a[ge],!r.hasOwnProperty(ge)||ee===le||ee==null&&le==null||Ht(e,n,ge,ee,r,le)}function G0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Hx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,g=c.initiatorType,b=c.duration;if(f&&b&&G0(g)){for(g=0,b=c.responseEnd,r+=1;r<a.length;r++){var I=a[r],J=I.startTime;if(J>b)break;var de=I.transferSize,ge=I.initiatorType;de&&G0(ge)&&(I=I.responseEnd,g+=de*(I<b?1:(b-J)/(I-J)))}if(--r,n+=8*(f+g)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Uf=null,Lf=null;function Wl(e){return e.nodeType===9?e:e.ownerDocument}function V0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function k0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Of(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Pf=null;function Gx(){var e=window.event;return e&&e.type==="popstate"?e===Pf?!1:(Pf=e,!0):(Pf=null,!1)}var X0=typeof setTimeout=="function"?setTimeout:void 0,Vx=typeof clearTimeout=="function"?clearTimeout:void 0,q0=typeof Promise=="function"?Promise:void 0,kx=typeof queueMicrotask=="function"?queueMicrotask:typeof q0<"u"?function(e){return q0.resolve(null).then(e).catch(Xx)}:X0;function Xx(e){setTimeout(function(){throw e})}function Ha(e){return e==="head"}function W0(e,n){var a=n,r=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(c),dr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Mo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Mo(a);for(var f=a.firstChild;f;){var g=f.nextSibling,b=f.nodeName;f[ts]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&Mo(e.ownerDocument.body);a=c}while(a);dr(n)}function j0(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function zf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":zf(a),Hr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function qx(e,n,a,r){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[ts])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ui(e.nextSibling),e===null)break}return null}function Wx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ui(e.nextSibling),e===null))return null;return e}function Y0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ui(e.nextSibling),e===null))return null;return e}function Ff(e){return e.data==="$?"||e.data==="$~"}function If(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function jx(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function ui(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Bf=null;function Z0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return ui(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function K0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Q0(e,n,a){switch(n=Wl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Mo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Hr(e)}var fi=new Map,J0=new Set;function jl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var sa=H.d;H.d={f:Yx,r:Zx,D:Kx,C:Qx,L:Jx,m:$x,X:tS,S:eS,M:nS};function Yx(){var e=sa.f(),n=Il();return e||n}function Zx(e){var n=ya(e);n!==null&&n.tag===5&&n.type==="form"?mm(n):sa.r(e)}var cr=typeof document>"u"?null:document;function $0(e,n,a){var r=cr;if(r&&typeof n=="string"&&n){var c=it(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),J0.has(c)||(J0.add(c),e={rel:e,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),Rn(n,"link",e),T(n),r.head.appendChild(n)))}}function Kx(e){sa.D(e),$0("dns-prefetch",e,null)}function Qx(e,n){sa.C(e,n),$0("preconnect",e,n)}function Jx(e,n,a){sa.L(e,n,a);var r=cr;if(r&&e&&n){var c='link[rel="preload"][as="'+it(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+it(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+it(a.imageSizes)+'"]')):c+='[href="'+it(e)+'"]';var f=c;switch(n){case"style":f=ur(e);break;case"script":f=fr(e)}fi.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),fi.set(f,e),r.querySelector(c)!==null||n==="style"&&r.querySelector(Eo(f))||n==="script"&&r.querySelector(bo(f))||(n=r.createElement("link"),Rn(n,"link",e),T(n),r.head.appendChild(n)))}}function $x(e,n){sa.m(e,n);var a=cr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+it(r)+'"][href="'+it(e)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=fr(e)}if(!fi.has(f)&&(e=_({rel:"modulepreload",href:e},n),fi.set(f,e),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(bo(f)))return}r=a.createElement("link"),Rn(r,"link",e),T(r),a.head.appendChild(r)}}}function eS(e,n,a){sa.S(e,n,a);var r=cr;if(r&&e){var c=Ma(r).hoistableStyles,f=ur(e);n=n||"default";var g=c.get(f);if(!g){var b={loading:0,preload:null};if(g=r.querySelector(Eo(f)))b.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=fi.get(f))&&Hf(e,a);var I=g=r.createElement("link");T(I),Rn(I,"link",e),I._p=new Promise(function(J,de){I.onload=J,I.onerror=de}),I.addEventListener("load",function(){b.loading|=1}),I.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Yl(g,n,r)}g={type:"stylesheet",instance:g,count:1,state:b},c.set(f,g)}}}function tS(e,n){sa.X(e,n);var a=cr;if(a&&e){var r=Ma(a).hoistableScripts,c=fr(e),f=r.get(c);f||(f=a.querySelector(bo(c)),f||(e=_({src:e,async:!0},n),(n=fi.get(c))&&Gf(e,n),f=a.createElement("script"),T(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function nS(e,n){sa.M(e,n);var a=cr;if(a&&e){var r=Ma(a).hoistableScripts,c=fr(e),f=r.get(c);f||(f=a.querySelector(bo(c)),f||(e=_({src:e,async:!0,type:"module"},n),(n=fi.get(c))&&Gf(e,n),f=a.createElement("script"),T(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function eg(e,n,a,r){var c=(c=te.current)?jl(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ur(a.href),a=Ma(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ur(a.href);var f=Ma(c).hoistableStyles,g=f.get(e);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,g),(f=c.querySelector(Eo(e)))&&!f._p&&(g.instance=f,g.state.loading=5),fi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(e,a),f||iS(c,e,a,g.state))),n&&r===null)throw Error(s(528,""));return g}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=fr(a),a=Ma(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function ur(e){return'href="'+it(e)+'"'}function Eo(e){return'link[rel="stylesheet"]['+e+"]"}function tg(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function iS(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Rn(n,"link",a),T(n),e.head.appendChild(n))}function fr(e){return'[src="'+it(e)+'"]'}function bo(e){return"script[async]"+e}function ng(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+it(a.href)+'"]');if(r)return n.instance=r,T(r),r;var c=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),T(r),Rn(r,"style",c),Yl(r,a.precedence,e),n.instance=r;case"stylesheet":c=ur(a.href);var f=e.querySelector(Eo(c));if(f)return n.state.loading|=4,n.instance=f,T(f),f;r=tg(a),(c=fi.get(c))&&Hf(r,c),f=(e.ownerDocument||e).createElement("link"),T(f);var g=f;return g._p=new Promise(function(b,I){g.onload=b,g.onerror=I}),Rn(f,"link",r),n.state.loading|=4,Yl(f,a.precedence,e),n.instance=f;case"script":return f=fr(a.src),(c=e.querySelector(bo(f)))?(n.instance=c,T(c),c):(r=a,(c=fi.get(f))&&(r=_({},a),Gf(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),T(c),Rn(c,"link",r),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Yl(r,a.precedence,e));return n.instance}function Yl(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,g=0;g<r.length;g++){var b=r[g];if(b.dataset.precedence===n)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Hf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Gf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Zl=null;function ig(e,n,a){if(Zl===null){var r=new Map,c=Zl=new Map;c.set(a,r)}else c=Zl,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[ts]||f[sn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=e+g;var b=r.get(g);b?b.push(f):r.set(g,[f])}}return r}function ag(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function aS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function sg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function sS(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=ur(r.href),f=n.querySelector(Eo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Kl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,T(f);return}f=n.ownerDocument||n,r=tg(r),(c=fi.get(c))&&Hf(r,c),f=f.createElement("link"),T(f);var g=f;g._p=new Promise(function(b,I){g.onload=b,g.onerror=I}),Rn(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Kl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Vf=0;function rS(e,n){return e.stylesheets&&e.count===0&&Jl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&Jl(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Vf===0&&(Vf=62500*Hx());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Jl(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Vf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function Kl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Jl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ql=null;function Jl(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ql=new Map,n.forEach(oS,e),Ql=null,Kl.call(e))}function oS(e,n){if(!(n.state.loading&4)){var a=Ql.get(e);if(a)var r=a.get(null);else{a=new Map,Ql.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||r,f===r&&a.set(null,c),a.set(g,c),this.count++,r=Kl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var To={$$typeof:P,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function lS(e,n,a,r,c,f,g,b,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Mt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mt(0),this.hiddenUpdates=Mt(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function rg(e,n,a,r,c,f,g,b,I,J,de,ge){return e=new lS(e,n,a,g,I,J,de,ge,b),n=1,f===!0&&(n|=24),f=jn(3,null,null,n),e.current=f,f.stateNode=e,n=Su(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},bu(f),e}function og(e){return e?(e=Vs,e):Vs}function lg(e,n,a,r,c,f){c=og(c),r.context===null?r.context=c:r.pendingContext=c,r=wa(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Da(e,r,n),a!==null&&(Vn(a,e,n),no(a,e,n))}function cg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function kf(e,n){cg(e,n),(e=e.alternate)&&cg(e,n)}function ug(e){if(e.tag===13||e.tag===31){var n=rs(e,67108864);n!==null&&Vn(n,e,67108864),kf(e,67108864)}}function fg(e){if(e.tag===13||e.tag===31){var n=Jn();n=Fr(n);var a=rs(e,n);a!==null&&Vn(a,e,n),kf(e,n)}}var $l=!0;function cS(e,n,a,r){var c=O.T;O.T=null;var f=H.p;try{H.p=2,Xf(e,n,a,r)}finally{H.p=f,O.T=c}}function uS(e,n,a,r){var c=O.T;O.T=null;var f=H.p;try{H.p=8,Xf(e,n,a,r)}finally{H.p=f,O.T=c}}function Xf(e,n,a,r){if($l){var c=qf(r);if(c===null)Df(e,n,r,ec,a),hg(e,r);else if(dS(c,e,n,a,r))r.stopPropagation();else if(hg(e,r),n&4&&-1<fS.indexOf(e)){for(;c!==null;){var f=ya(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=ye(f.pendingLanes);if(g!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;g;){var I=1<<31-Pe(g);b.entanglements[1]|=I,g&=~I}Li(f),(Dt&6)===0&&(zl=M()+500,xo(0))}}break;case 31:case 13:b=rs(f,2),b!==null&&Vn(b,f,2),Il(),kf(f,2)}if(f=qf(r),f===null&&Df(e,n,r,ec,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else Df(e,n,r,null,a)}}function qf(e){return e=Wc(e),Wf(e)}var ec=null;function Wf(e){if(ec=null,e=Sa(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ec=e,null}function dg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case he:return 2;case xe:return 8;case ce:case Ze:return 32;case Ce:return 268435456;default:return 32}default:return 32}}var jf=!1,Ga=null,Va=null,ka=null,Ao=new Map,Ro=new Map,Xa=[],fS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function hg(e,n){switch(e){case"focusin":case"focusout":Ga=null;break;case"dragenter":case"dragleave":Va=null;break;case"mouseover":case"mouseout":ka=null;break;case"pointerover":case"pointerout":Ao.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(n.pointerId)}}function Co(e,n,a,r,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=ya(n),n!==null&&ug(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function dS(e,n,a,r,c){switch(n){case"focusin":return Ga=Co(Ga,e,n,a,r,c),!0;case"dragenter":return Va=Co(Va,e,n,a,r,c),!0;case"mouseover":return ka=Co(ka,e,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return Ao.set(f,Co(Ao.get(f)||null,e,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,Ro.set(f,Co(Ro.get(f)||null,e,n,a,r,c)),!0}return!1}function pg(e){var n=Sa(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,wi(e.priority,function(){fg(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,wi(e.priority,function(){fg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function tc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=qf(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);qc=r,a.target.dispatchEvent(r),qc=null}else return n=ya(a),n!==null&&ug(n),e.blockedOn=a,!1;n.shift()}return!0}function mg(e,n,a){tc(e)&&a.delete(n)}function hS(){jf=!1,Ga!==null&&tc(Ga)&&(Ga=null),Va!==null&&tc(Va)&&(Va=null),ka!==null&&tc(ka)&&(ka=null),Ao.forEach(mg),Ro.forEach(mg)}function nc(e,n){e.blockedOn===n&&(e.blockedOn=null,jf||(jf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,hS)))}var ic=null;function gg(e){ic!==e&&(ic=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ic===e&&(ic=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],c=e[n+2];if(typeof r!="function"){if(Wf(r||a)===null)continue;break}var f=ya(a);f!==null&&(e.splice(n,3),n-=3,Xu(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function dr(e){function n(I){return nc(I,e)}Ga!==null&&nc(Ga,e),Va!==null&&nc(Va,e),ka!==null&&nc(ka,e),Ao.forEach(n),Ro.forEach(n);for(var a=0;a<Xa.length;a++){var r=Xa[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Xa.length&&(a=Xa[0],a.blockedOn===null);)pg(a),a.blockedOn===null&&Xa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],g=c[vn]||null;if(typeof f=="function")g||gg(a);else if(g){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[vn]||null)b=g.formAction;else if(Wf(c)!==null)continue}else b=g.action;typeof b=="function"?a[r+1]=b:(a.splice(r,3),r-=3),gg(a)}}}function _g(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Yf(e){this._internalRoot=e}ac.prototype.render=Yf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=Jn();lg(a,r,e,n,null,null)},ac.prototype.unmount=Yf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;lg(e.current,2,null,e,null,null),Il(),n[_i]=null}};function ac(e){this._internalRoot=e}ac.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ir();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Xa.length&&n!==0&&n<Xa[a].priority;a++);Xa.splice(a,0,e),a===0&&pg(e)}};var vg=t.version;if(vg!=="19.2.3")throw Error(s(527,vg,"19.2.3"));H.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var pS={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sc.isDisabled&&sc.supportsFiber)try{Ee=sc.inject(pS),be=sc}catch{}}return Do.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",c=Tm,f=Am,g=Rm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=rg(e,1,!1,null,null,a,r,null,c,f,g,_g),e[_i]=n.current,wf(e),new Yf(n)},Do.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,c="",f=Tm,g=Am,b=Rm,I=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=rg(e,1,!0,n,a??null,r,c,I,f,g,b,_g),n.context=og(null),a=n.current,r=Jn(),r=Fr(r),c=wa(r),c.callback=null,Da(a,c,r),a=r,n.current.lanes=a,Dn(n,a),Li(n),e[_i]=n.current,wf(e),new ac(n)},Do.version="19.2.3",Do}var Cg;function bS(){if(Cg)return Qf.exports;Cg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Qf.exports=ES(),Qf.exports}var TS=bS();const AS=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),RS=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,s)=>s?s.toUpperCase():i.toLowerCase()),wg=o=>{const t=RS(o);return t.charAt(0).toUpperCase()+t.slice(1)},R_=(...o)=>o.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim(),CS=o=>{for(const t in o)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};var wS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const DS=ti.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:d,...h},m)=>ti.createElement("svg",{ref:m,...wS,width:t,height:t,stroke:o,strokeWidth:s?Number(i)*24/Number(t):i,className:R_("lucide",l),...!u&&!CS(h)&&{"aria-hidden":"true"},...h},[...d.map(([p,v])=>ti.createElement(p,v)),...Array.isArray(u)?u:[u]]));const _n=(o,t)=>{const i=ti.forwardRef(({className:s,...l},u)=>ti.createElement(DS,{ref:u,iconNode:t,className:R_(`lucide-${AS(wg(o))}`,`lucide-${o}`,s),...l}));return i.displayName=wg(o),i};const NS=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],US=_n("activity",NS);const LS=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],OS=_n("brain",LS);const PS=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],rc=_n("check",PS);const zS=[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",key:"9m4mmf"}],["path",{d:"m2.5 21.5 1.4-1.4",key:"17g3f0"}],["path",{d:"m20.1 3.9 1.4-1.4",key:"1qn309"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",key:"1t2c92"}],["path",{d:"m9.6 14.4 4.8-4.8",key:"6umqxw"}]],FS=_n("dumbbell",zS);const IS=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],wh=_n("file-text",IS);const BS=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],C_=_n("instagram",BS);const HS=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],GS=_n("menu",HS);const VS=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],kS=_n("message-circle",VS);const XS=[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]],qS=_n("pill",XS);const WS=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],jS=_n("quote",WS);const YS=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],ZS=_n("smartphone",YS);const KS=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],QS=_n("star",KS);const JS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],$S=_n("target",JS);const ey=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],ty=_n("users",ey);const ny=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],Dg=_n("video",ny);const iy=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ay=_n("x",iy);const sy=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],ry=_n("youtube",sy);const oy=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],oc=_n("zap",oy),ly=()=>{const[o,t]=ti.useState(!1),[i,s]=ti.useState(""),l=["./alex/1.jpeg","./alex/2.jpeg","./alex/3.jpeg","./alex/6.jpeg","./alex/8.jpeg"],u=d=>{s(d),t(!0)};return G.jsxs(G.Fragment,{children:[G.jsx("section",{id:"coach",className:"py-24 relative z-10 bg-black/30 backdrop-blur-sm",children:G.jsxs("div",{className:"max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center",children:[G.jsxs("div",{className:"group h-screen mb-40 perspective-1000 w-full cursor-pointer",children:[G.jsxs("div",{className:"relative h-full w-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180",children:[G.jsxs("div",{className:"absolute inset-0 backface-hidden",children:[G.jsx("div",{className:"absolute -inset-4 bg-fk-yellow/20 blur-xl rounded-full"}),G.jsx("img",{src:"./alexis.png",alt:"Alexis Contreras Coach",className:"relative w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500 border-2 border-white/10"}),G.jsx("div",{className:"absolute bottom-8 left-8 right-8",children:G.jsxs("div",{className:"bg-black/80 backdrop-blur p-6 border-l-4 border-fk-yellow",children:[G.jsx("h3",{className:"text-3xl font-bebas text-white mb-1",children:"ALEXIS CONTRERAS"}),G.jsx("p",{className:"text-fk-yellow font-montserrat text-sm tracking-widest uppercase",children:"Head Coach"})]})})]}),G.jsxs("div",{className:"absolute inset-0 h-full w-full rounded-2xl bg-zinc-900 border border-fk-yellow/30 p-8 rotate-y-180 backface-hidden flex flex-col justify-center items-center text-center",children:[G.jsx("h3",{className:"text-4xl font-bebas text-fk-yellow mb-6",children:"Sobre Mí"}),G.jsxs("p",{className:"text-gray-300 font-montserrat leading-relaxed text-lg",children:["Hoy, ",G.jsx("b",{className:"text-fk-yellow font-bold",children:"4 años"})," ","después de empezar a entrenar a otros, esa curiosidad se ha traducido en"," ",G.jsx("b",{className:"text-fk-yellow font-bold",children:"7 certificaciones profesionales y 2 diplomados"}),". He pasado de no tener recursos a tener el conocimiento para distinguir qué funciona realmente y qué es solo ruido."]}),G.jsx("div",{className:"w-16 h-1 bg-fk-yellow mt-8 mb-8"})]})]}),G.jsx("div",{className:"animate-fade-in-up [animation-delay:300ms]",children:G.jsx("p",{className:"m-10",children:"Al final, sigo siendo ese mismo joven con sed de aprender y mejorar, pero con una misión clara: darte las herramientas y la guía que yo tanto necesité al principio, para que tú logres el cambio físico real que buscas."})})]}),G.jsxs("div",{className:"animate-fade-in-up [animation-delay:200ms] sm:mt-20 md:mt-0 lg:mt-0",children:[G.jsx("span",{className:"text-fk-yellow font-bold tracking-[0.2em] text-sm font-montserrat uppercase mb-4 block",children:"TU MENTOR"}),G.jsxs("h2",{className:"text-5xl md:text-7xl font-bebas text-white mb-8 leading-[0.9]",children:["MÁS QUE UN ",G.jsx("br",{}),G.jsx("span",{className:"text-stroke text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500",children:"ENTRENADOR"})]}),G.jsxs("div",{className:"space-y-6 text-gray-300 font-montserrat text-lg font-light mb-12",children:[G.jsx("p",{children:'Todo empezó hace ocho años con una realidad incómoda: no me gustaba lo que veía en el espejo. Quería cambiar, pero mi cuenta bancaria decía "cero". No había dinero para gimnasios, y mucho menos para entrenadores. Mi única opción fue el suelo de mi casa.'}),G.jsxs("p",{children:["Ahí descubrí la calistenia. Ver a personas logrando físicos increíbles usando solo su propio peso encendió una chispa en mí. Me obsesioné. YouTube se convirtió en mi universidad y mi cuerpo en mi laboratorio. Estudiaba, probaba, fallaba y volvía a intentar. La pregunta que no me dejaba dormir era:"," ",G.jsx("b",{className:"text-fk-yellow font-bold",children:'"¿De verdad se puede lograr un gran cambio sin un gimnasio?'}),". La respuesta la encontré en mi propio progreso."]}),G.jsx("div",{className:"grid grid-cols-5 gap-4",children:l.map((d,h)=>G.jsx("img",{src:d,onClick:()=>u(d),alt:`Alexis Contreras ${h+1}`,className:"w-25 h-auto rounded-2xl border-2 border-white/10 mb-4 cursor-pointer"},h))}),G.jsx("p",{children:"Cuando mi entorno empezó a notar los cambios y a pedirme consejos, entendí que mi obsesión por aprender ya no era solo para mí; tenía el poder de ayudar a otros. Lo que comenzó con videos virales en TikTok y consejos a amigos, se transformó en una vocación real."}),G.jsx("p",{children:'Pero la búsqueda de la excelencia me llevó más allá. Sentí que para ser el entrenador que mis alumnos merecían, debía dominar también el mundo de las pesas y la hipertrofia. Volví a ser el "nuevo", entré al gimnasio desde cero y apliqué mi vieja fórmula: estudiar incansablemente.'})]}),G.jsxs("div",{className:"grid grid-cols-3 gap-8 border-y border-white/10 py-8 mb-10",children:[G.jsxs("div",{className:"text-center group cursor-pointer",onClick:()=>window.open("https://www.instagram.com/alexiscontreras.fk","_blank"),children:[G.jsx(ty,{className:"w-8 h-8 text-white group-hover:text-fk-yellow transition-colors mx-auto mb-3"}),G.jsx("div",{className:"text-3xl font-bebas text-white",children:"11.5k"}),G.jsx("div",{className:"text-[10px] md:text-xs text-gray-500 uppercase tracking-widest font-montserrat",children:"Seguidores"})]}),G.jsxs("div",{className:"text-center border-l border-white/10 group cursor-pointer",onClick:()=>window.open("https://www.instagram.com/alexiscontreras.fk","_blank"),children:[G.jsx(wh,{className:"w-8 h-8 text-white group-hover:text-fk-yellow transition-colors mx-auto mb-3"}),G.jsx("div",{className:"text-3xl font-bebas text-white",children:"636"}),G.jsx("div",{className:"text-[10px] md:text-xs text-gray-500 uppercase tracking-widest font-montserrat",children:"Posts"})]}),G.jsxs("div",{className:"text-center border-l border-white/10 group cursor-pointer",onClick:()=>window.open("https://www.instagram.com/alexiscontreras.fk","_blank"),children:[G.jsx(C_,{className:"w-8 h-8 text-white group-hover:text-fk-yellow transition-colors mx-auto mb-3"}),G.jsx("div",{className:"text-3xl font-bebas text-white",children:"FK"}),G.jsx("div",{className:"text-[10px] md:text-xs text-gray-500 uppercase tracking-widest font-montserrat",children:"Comunidad"})]})]}),G.jsx("a",{href:"#testimonials",className:"inline-block text-fk-yellow border-b border-fk-yellow pb-1 hover:text-white hover:border-white transition-all duration-300 font-bebas text-xl tracking-wide",children:"VER TESTIMONIOS REALES"})]})]})}),o&&G.jsx("style",{children:`
          body {
            overflow: hidden !important;
          }
        `}),G.jsxs("dialog",{className:o?"fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 p-4 rounded-2xl w-full h-screen z-999 flex items-center justify-center":"hidden",open:o,children:[G.jsx("img",{src:i,alt:"Selected",className:"max-w-full max-h-full object-contain"}),G.jsx("button",{onClick:()=>t(!1),className:"absolute top-4 right-4 text-white text-3xl leading-none",children:"×"})]})]})},cy=()=>G.jsx("footer",{className:"bg-black/90 backdrop-blur-md border-t border-white/10 pt-16 pb-8 relative z-10",children:G.jsxs("div",{className:"max-w-7xl mx-auto px-4 flex flex-col items-center text-center",children:[G.jsx("div",{className:"mb-8",children:G.jsx("img",{src:"/logo.svg",alt:"Full Kong",className:"h-16 w-auto mx-auto opacity-80 hover:opacity-100 transition-opacity"})}),G.jsxs("div",{className:"flex flex-col sm:flex-row gap-6 mb-12 w-full max-w-2xl justify-center",children:[G.jsxs("button",{className:"flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold rounded-full hover:bg-[#128C7E] transition-all duration-300 w-full sm:w-auto",children:[G.jsx(kS,{className:"w-6 h-6"}),G.jsx("span",{children:"WHATSAPP"})]}),G.jsxs("button",{className:"flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all duration-300 w-full sm:w-auto",children:[G.jsx(wh,{className:"w-6 h-6"}),G.jsx("span",{children:"FORMULARIO"})]})]}),G.jsxs("div",{className:"flex gap-8 mb-12",children:[G.jsx("a",{href:"#",className:"text-gray-400 hover:text-[#E1306C] transition-colors transform hover:scale-110 duration-300",children:G.jsx(C_,{className:"w-8 h-8"})}),G.jsx("a",{href:"#",className:"text-gray-400 hover:text-[#FF0000] transition-colors transform hover:scale-110 duration-300",children:G.jsx(ry,{className:"w-8 h-8"})}),G.jsx("a",{href:"#",className:"text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300",children:G.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-8 h-8",children:G.jsx("path",{d:"M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"})})})]}),G.jsxs("div",{className:"flex flex-wrap justify-center gap-8 text-sm text-gray-500 font-montserrat uppercase tracking-wider mb-8",children:[G.jsx("a",{href:"#home",className:"hover:text-fk-yellow transition-colors",children:"Inicio"}),G.jsx("a",{href:"#benefits",className:"hover:text-fk-yellow transition-colors",children:"Filosofía"}),G.jsx("a",{href:"#coach",className:"hover:text-fk-yellow transition-colors",children:"Coach"}),G.jsx("a",{href:"#pricing",className:"hover:text-fk-yellow transition-colors",children:"Planes"})]}),G.jsxs("div",{className:"text-gray-600 text-xs font-montserrat",children:["© ",new Date().getFullYear()," FULL KONG. TODOS LOS DERECHOS RESERVADOS."]})]})}),uy=()=>{const[o,t]=ti.useState(!1);return G.jsxs("nav",{className:"fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10",children:[G.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:G.jsxs("div",{className:"flex items-center justify-between h-20",children:[G.jsx("div",{className:"shrink-0",children:G.jsx("img",{src:"/logo.svg",alt:"Full Kong",className:"h-12 w-auto hover:opacity-90 transition-opacity duration-300"})}),G.jsx("div",{className:"hidden md:block",children:G.jsxs("div",{className:"ml-10 flex items-baseline space-x-8",children:[G.jsx("a",{href:"#home",className:"text-white hover:text-fk-yellow transition-colors px-3 py-2 text-sm font-bold uppercase tracking-wide font-montserrat",children:"Inicio"}),G.jsx("a",{href:"#benefits",className:"text-white hover:text-fk-yellow transition-colors px-3 py-2 text-sm font-bold uppercase tracking-wide font-montserrat",children:"Filosofía"}),G.jsx("a",{href:"#coach",className:"text-white hover:text-fk-yellow transition-colors px-3 py-2 text-sm font-bold uppercase tracking-wide font-montserrat",children:"Coach"}),G.jsx("a",{href:"#pricing",className:"bg-fk-yellow text-black hover:bg-white transition-colors px-6 py-2 text-sm font-bold uppercase tracking-wide transform hover:-translate-y-0.5 duration-200 font-montserrat",children:"Empezar Ahora"})]})}),G.jsx("div",{className:"md:hidden",children:G.jsx("button",{onClick:()=>t(!o),className:"text-white hover:text-fk-yellow transition-colors p-2",children:o?G.jsx(ay,{size:28}):G.jsx(GS,{size:28})})})]})}),o&&G.jsx("div",{className:"md:hidden bg-black/95 border-b border-white/10 absolute w-full",children:G.jsxs("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center",children:[G.jsx("a",{href:"#home",className:"text-white hover:text-fk-yellow block px-3 py-4 text-base font-bold uppercase tracking-wide font-montserrat w-full text-center",onClick:()=>t(!1),children:"Inicio"}),G.jsx("a",{href:"#benefits",className:"text-white hover:text-fk-yellow block px-3 py-4 text-base font-bold uppercase tracking-wide font-montserrat w-full text-center",onClick:()=>t(!1),children:"Filosofía"}),G.jsx("a",{href:"#coach",className:"text-white hover:text-fk-yellow block px-3 py-4 text-base font-bold uppercase tracking-wide font-montserrat w-full text-center",onClick:()=>t(!1),children:"Coach"}),G.jsx("a",{href:"#pricing",className:"text-fk-yellow hover:text-white block px-3 py-4 text-base font-bold uppercase tracking-wide font-montserrat w-full text-center",onClick:()=>t(!1),children:"Empezar Ahora"})]})})]})},fy=()=>{const[o,t]=ti.useState(!1);return G.jsxs("section",{id:"home",className:"relative min-h-screen flex items-center justify-center pt-20 overflow-hidden",children:[G.jsxs("div",{className:"relative z-10 text-center px-4 w-full max-w-5xl mx-auto mt-0 md:mt-16",children:[G.jsx("p",{className:"text-fk-yellow font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase mb-4 text-sm md:text-base animate-fade-in-up font-montserrat",children:"CONSTRUYE TU MEJOR VERSIÓN"}),G.jsx("h1",{className:"text-5xl sm:text-7xl md:text-9xl font-bebas text-white leading-[0.9] mb-6 tracking-tight",children:"ENTRENAMIENTO"}),G.jsx("h1",{className:"text-5xl sm:text-7xl md:text-9xl font-bebas text-white leading-[0.9] mb-6 tracking-tight",children:G.jsx("span",{className:"text-black bg-fk-yellow px-2",children:"INTELIGENTE"})}),G.jsx("p",{className:"text-gray-300 text-xl md:text-3xl max-w-2xl md:max-w-4xl mx-auto mb-12 md:mb-16 font-light leading-relaxed px-4 animate-fade-in-up [animation-delay:400ms] font-montserrat",children:"La disciplina te pone en el camino, el esfuerzo te mantiene y el proceso te transforma."}),G.jsxs("div",{className:"flex flex-col gap-6 justify-center items-center w-full px-4 sm:px-0 animate-fade-in-up [animation-delay:600ms]",children:[G.jsx("a",{onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),className:"w-full sm:w-auto px-10 py-5 border border-white/30 hover:border-fk-yellow hover:text-fk-yellow text-white font-bebas text-2xl tracking-wider transition-all duration-300 backdrop-blur-sm text-center cursor-pointer",children:"CONOCER MÁS"}),G.jsx("svg",{onClick:()=>window.location.href="#benefits",className:"w-6 h-6 text-fk-yellow animate-bounce cursor-pointer",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:G.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 14l-7 7m0 0l-7-7m7 7V3"})})]})]}),G.jsx("dialog",{open:o,className:"fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-black/50 backdrop-blur-sm border border-fk-yellow rounded-lg shadow-2xl p-6 max-w-md w-11/12 text-fk-yellow",children:"Para mí, el entrenamiento es un punto de quiebre. Es el momento en el que te das cuenta de que puedes llegar tan lejos como estés dispuesto a esforzarte. El gimnasio no solo transforma el cuerpo, también te enseña disciplina, constancia y a confiar en tu proceso. Entrenar bien no es improvisar: es entender que el progreso es una ciencia, con estrategia, objetivos claros y trabajo diario. Así fue como entendí que puedo lograr lo que me proponga."})]})},dy=()=>{const[o,t]=ti.useState({columns:4,numbs:4}),i=[{icon:G.jsx(FS,{className:"w-12 h-12 text-black"}),title:"Fuerza Real",description:"Entrenamiento basado en ciencia, no en modas. Resultados medibles y progresivos."},{icon:G.jsx(OS,{className:"w-12 h-12 text-black"}),title:"Mentalidad",description:"Desarrolla una disciplina inquebrantable que trascenderá del gimnasio a tu vida."},{icon:G.jsx(ZS,{className:"w-12 h-12 text-black"}),title:"Apps de Calidad",description:"Acceso a herramientas digitales premium para gestionar tu progreso sin fricción."},{icon:G.jsx(US,{className:"w-12 h-12 text-black"}),title:"Seguimiento 24/7",description:"Monitoreo constante de tus métricas para ajustar el plan en tiempo real."},{icon:G.jsx(wh,{className:"w-12 h-12 text-black"}),title:"Evaluación Inicial y mensual",description:"Análisis completo de tu estado físico para diseñar un plan personalizado y medir tu evolución constantemente."},{icon:G.jsx($S,{className:"w-12 h-12 text-black"}),title:"Corrección de la técnica de ejercicios",description:"Supervisión profesional para ejecutar cada movimiento con precisión y maximizar resultados mientras evitas lesiones."},{icon:G.jsx(Dg,{className:"w-12 h-12 text-black"}),title:"Clases de entrenamiento (videos exclusivos)",description:"Biblioteca privada de sesiones guiadas por expertos que puedes seguir en cualquier momento y lugar."},{icon:G.jsx(qS,{className:"w-12 h-12 text-black"}),title:"Guía de suplementación",description:"Recomendaciones personalizadas de suplementos basadas en tus objetivos y necesidades específicas."},{icon:G.jsx(Dg,{className:"w-12 h-12 text-black"}),title:"Reunión online (vídeo llamadas)",description:"Consultas periódicas en vivo con tu coach para resolver dudas, ajustar tu plan y mantenerte motivado."}];return G.jsx("section",{id:"benefits",className:"py-24 relative z-10",children:G.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[G.jsxs("div",{className:"text-center mb-16",children:[G.jsx("p",{className:"text-fk-yellow font-bold tracking-[0.2em] uppercase mb-4 animate-fade-in-up font-montserrat",children:"¿POR QUÉ FULL KONG?"}),G.jsxs("h2",{className:"text-5xl md:text-7xl font-bebas text-white mb-6 animate-fade-in-up [animation-delay:200ms]",children:["CONOCE LOS ",G.jsx("span",{className:"text-fk-yellow",children:"BENEFICIOS"})]})]}),G.jsx("div",{className:`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${o.columns} gap-8`,children:i.map((s,l)=>{if(l<o.numbs)return G.jsxs("div",{className:"group bg-zinc-900/50 backdrop-blur-sm border border-white/10 p-8 hover:border-fk-yellow transition-all duration-300 hover:-translate-y-2 animate-fade-in-up",style:{animationDelay:`${(l+2)*200}ms`},children:[G.jsx("div",{className:"bg-fk-yellow p-4 inline-block rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300",children:s.icon}),G.jsx("h3",{className:"text-2xl font-bebas text-white mb-4 tracking-wide",children:s.title}),G.jsx("p",{className:"text-gray-400 font-montserrat leading-relaxed",children:s.description})]},l)})}),G.jsx("div",{className:"mt-16 text-center animate-fade-in-up [animation-delay:1000ms]",children:G.jsx("button",{className:"px-8 py-4 border border-fk-yellow text-fk-yellow hover:bg-fk-yellow hover:text-black font-bebas text-xl tracking-wider transition-all duration-300",onClick:()=>{o.numbs>4?t({columns:4,numbs:4}):t({columns:5,numbs:10})},children:`VER LA LISTA ${o.numbs===10?"SIMPLIFICADA":"COMPLETA"} DE BENEFICIOS`})})]})})},hy=()=>G.jsxs("section",{id:"pricing",className:"py-24 relative z-10 bg-black/50 backdrop-blur-sm",children:[G.jsx("div",{className:"absolute inset-0 opacity-10 pointer-events-none",style:{backgroundImage:"radial-gradient(#333 1px, transparent 1px)",backgroundSize:"30px 30px"}}),G.jsxs("div",{className:"max-w-7xl mx-auto px-4 relative z-10",children:[G.jsxs("div",{className:"text-center mb-16",children:[G.jsx("p",{className:"text-fk-yellow font-bold tracking-[0.2em] uppercase mb-4 animate-fade-in-up font-montserrat",children:"INVIERTE EN TI"}),G.jsxs("h2",{className:"text-5xl md:text-7xl mb-4 font-bebas text-white animate-fade-in-up [animation-delay:200ms]",children:["PLANES DE ",G.jsx("span",{className:"text-fk-yellow",children:"TRANSFORMACIÓN"})]})]}),G.jsxs("div",{className:"grid md:grid-cols-2 gap-8 max-w-4xl mx-auto",children:[G.jsxs("div",{className:"bg-zinc-900/80 p-8 border border-white/10 hover:border-fk-yellow transition-all duration-300 animate-fade-in-up [animation-delay:400ms] group",children:[G.jsx("h3",{className:"text-3xl font-bebas text-white mb-2 tracking-wide",children:"PLAN BÁSICO"}),G.jsxs("div",{className:"flex items-baseline mb-2",children:[G.jsx("span",{className:"text-5xl font-black text-white font-bebas",children:"$33"}),G.jsx("span",{className:"text-xl text-gray-500 font-bold ml-2 font-montserrat",children:"USD"})]}),G.jsx("p",{className:"text-gray-500 mb-8 font-montserrat text-sm",children:"($616 MXN) / 4 semanas"}),G.jsxs("ul",{className:"space-y-4 mb-10",children:[G.jsxs("li",{className:"flex items-center text-gray-300 font-montserrat",children:[G.jsx(rc,{className:"w-5 h-5 text-fk-yellow mr-3 shrink-0"}),G.jsx("span",{children:"Entrenamiento Inteligente"})]}),G.jsxs("li",{className:"flex items-center text-gray-300 font-montserrat",children:[G.jsx(rc,{className:"w-5 h-5 text-fk-yellow mr-3 shrink-0"}),G.jsx("span",{children:"Rutina Personalizada en App"})]}),G.jsxs("li",{className:"flex items-center text-gray-300 font-montserrat",children:[G.jsx(rc,{className:"w-5 h-5 text-fk-yellow mr-3 shrink-0"}),G.jsx("span",{children:"Video-guías de ejercicios"})]}),G.jsxs("li",{className:"flex items-center text-gray-500 font-montserrat line-through decoration-gray-500",children:[G.jsx(rc,{className:"w-5 h-5 text-gray-700 mr-3 shrink-0"}),G.jsx("span",{children:"Plan Nutricional"})]})]}),G.jsx("button",{className:"w-full py-4 border border-white/30 text-white font-bebas text-xl tracking-wider uppercase hover:bg-white hover:text-black hover:border-white transition-all duration-300",children:"MÁS INFORMACIÓN"})]}),G.jsxs("div",{className:"bg-zinc-900/90 p-8 border-2 border-fk-yellow relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(255,230,0,0.1)] animate-fade-in-up [animation-delay:600ms]",children:[G.jsx("div",{className:"absolute top-0 right-0 bg-fk-yellow text-black text-xs font-bold px-4 py-1 uppercase font-montserrat tracking-widest",children:"Más Popular"}),G.jsx("h3",{className:"text-3xl font-bebas text-fk-yellow mb-2 tracking-wide",children:"PLAN PREMIUM"}),G.jsxs("div",{className:"flex items-baseline mb-2",children:[G.jsx("span",{className:"text-5xl font-black text-white font-bebas",children:"$50"}),G.jsx("span",{className:"text-xl text-gray-500 font-bold ml-2 font-montserrat",children:"USD"})]}),G.jsx("p",{className:"text-gray-500 mb-8 font-montserrat text-sm",children:"($934 MXN) / 4 semanas"}),G.jsxs("ul",{className:"space-y-4 mb-10",children:[G.jsxs("li",{className:"flex items-center text-white font-montserrat font-medium",children:[G.jsx(oc,{className:"w-5 h-5 text-fk-yellow mr-3 fill-current shrink-0"}),G.jsx("span",{children:"Rutina + Plan Nutricional"})]}),G.jsxs("li",{className:"flex items-center text-white font-montserrat font-medium",children:[G.jsx(oc,{className:"w-5 h-5 text-fk-yellow mr-3 fill-current shrink-0"}),G.jsx("span",{children:"Soporte Prioritario WhatsApp"})]}),G.jsxs("li",{className:"flex items-center text-white font-montserrat font-medium",children:[G.jsx(oc,{className:"w-5 h-5 text-fk-yellow mr-3 fill-current shrink-0"}),G.jsx("span",{children:"Revisiones Semanales (Check-ins)"})]}),G.jsxs("li",{className:"flex items-center text-white font-montserrat font-medium",children:[G.jsx(oc,{className:"w-5 h-5 text-fk-yellow mr-3 fill-current shrink-0"}),G.jsx("span",{children:"Corrección de Técnica"})]})]}),G.jsx("button",{className:"w-full py-4 bg-fk-yellow text-black font-bebas text-xl tracking-wider uppercase hover:bg-white hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-fk-yellow/20",children:"MÁS INFORMACIÓN"})]})]})]})]}),py=()=>{const o=[{name:"Carlos M.",role:"Atleta Híbrido",content:"Llevaba años estancado. Con la programación de Alexis, no solo rompí mis PRs, sino que entendí por fin cómo comer para rendir.",image:"https://randomuser.me/api/portraits/men/32.jpg"},{name:"Sofía R.",role:"Opositora Policía",content:"Necesitaba pasar las físicas y terminé superando las marcas mínimas por mucho. La disciplina que se respira aquí es otra cosa.",image:"https://randomuser.me/api/portraits/women/44.jpg"},{name:"Javier T.",role:"Emprendedor",content:"Lo mejor es la flexibilidad. Entiende mi estilo de vida ocupado y adapta el volumen de entreno para que pueda cumplir sin fallar.",image:"https://randomuser.me/api/portraits/men/85.jpg"}];return G.jsx("section",{id:"testimonials",className:"py-24 relative z-10",children:G.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[G.jsxs("div",{className:"text-center mb-16",children:[G.jsx("p",{className:"text-fk-yellow font-bold tracking-[0.2em] uppercase mb-4 animate-fade-in-up font-montserrat",children:"HISTORIAS DE ÉXITO"}),G.jsxs("h2",{className:"text-5xl md:text-7xl font-bebas text-white mb-6 animate-fade-in-up [animation-delay:200ms]",children:["TRANSFORMACIONES ",G.jsx("span",{className:"text-fk-yellow",children:"REALES"})]})]}),G.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:o.map((t,i)=>G.jsxs("div",{className:"bg-zinc-900/80 backdrop-blur-sm border border-white/10 p-8 relative hover:border-fk-yellow/50 transition-colors animate-fade-in-up",style:{animationDelay:`${(i+2)*200}ms`},children:[G.jsx(jS,{className:"absolute top-8 right-8 text-fk-yellow/20 w-12 h-12"}),G.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[G.jsx("img",{src:t.image,alt:t.name,className:"w-16 h-16 rounded-full object-cover border-2 border-fk-yellow"}),G.jsxs("div",{children:[G.jsx("h4",{className:"text-white font-bebas text-xl tracking-wide",children:t.name}),G.jsx("p",{className:"text-gray-400 text-sm uppercase tracking-wider font-montserrat",children:t.role})]})]}),G.jsx("div",{className:"flex gap-1 mb-4",children:[...Array(5)].map((s,l)=>G.jsx(QS,{className:"w-4 h-4 text-fk-yellow fill-current"},l))}),G.jsxs("p",{className:"text-gray-300 font-montserrat leading-relaxed italic",children:['"',t.content,'"']})]},i))})]})})};const Dh="182",my=0,Ng=1,gy=2,Nc=1,_y=2,Io=3,es=0,Xn=1,fa=2,ha=0,Rr=1,Ud=2,Ug=3,Lg=4,vy=5,As=100,xy=101,Sy=102,yy=103,My=104,Ey=200,by=201,Ty=202,Ay=203,Ld=204,Od=205,Ry=206,Cy=207,wy=208,Dy=209,Ny=210,Uy=211,Ly=212,Oy=213,Py=214,Pd=0,zd=1,Fd=2,wr=3,Id=4,Bd=5,Hd=6,Gd=7,w_=0,zy=1,Fy=2,Ii=0,D_=1,N_=2,U_=3,L_=4,O_=5,P_=6,z_=7,F_=300,Ds=301,Dr=302,Vd=303,kd=304,Hc=306,Xd=1e3,da=1001,qd=1002,Cn=1003,Iy=1004,lc=1005,On=1006,td=1007,Cs=1008,mi=1009,I_=1010,B_=1011,Ho=1012,Nh=1013,Hi=1014,zi=1015,ga=1016,Uh=1017,Lh=1018,Go=1020,H_=35902,G_=35899,V_=1021,k_=1022,Ai=1023,_a=1026,ws=1027,X_=1028,Oh=1029,Nr=1030,Ph=1031,zh=1033,Uc=33776,Lc=33777,Oc=33778,Pc=33779,Wd=35840,jd=35841,Yd=35842,Zd=35843,Kd=36196,Qd=37492,Jd=37496,$d=37488,eh=37489,th=37490,nh=37491,ih=37808,ah=37809,sh=37810,rh=37811,oh=37812,lh=37813,ch=37814,uh=37815,fh=37816,dh=37817,hh=37818,ph=37819,mh=37820,gh=37821,_h=36492,vh=36494,xh=36495,Sh=36283,yh=36284,Mh=36285,Eh=36286,By=3200,Hy=0,Gy=1,Ja="",hi="srgb",Ur="srgb-linear",Fc="linear",It="srgb",hr=7680,Og=519,Vy=512,ky=513,Xy=514,Fh=515,qy=516,Wy=517,Ih=518,jy=519,Pg=35044,zg="300 es",Fi=2e3,Ic=2001;function q_(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Bc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Yy(){const o=Bc("canvas");return o.style.display="block",o}const Fg={};function Ig(...o){const t="THREE."+o.shift();console.log(t,...o)}function st(...o){const t="THREE."+o.shift();console.warn(t,...o)}function At(...o){const t="THREE."+o.shift();console.error(t,...o)}function Vo(...o){const t=o.join(" ");t in Fg||(Fg[t]=!0,st(...o))}function Zy(o,t,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}class Or{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,t);t.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nd=Math.PI/180,bh=180/Math.PI;function Xo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Un[o&255]+Un[o>>8&255]+Un[o>>16&255]+Un[o>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]).toLowerCase()}function St(o,t,i){return Math.max(t,Math.min(i,o))}function Ky(o,t){return(o%t+t)%t}function id(o,t,i){return(1-i)*o+i*t}function No(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function kn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Vt{constructor(t=0,i=0){Vt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=St(this.x,t.x,i.x),this.y=St(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=St(this.x,t,i),this.y=St(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(St(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,d=this.y-t.y;return this.x=u*s-d*l+t.x,this.y=u*l+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qo{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,d,h){let m=s[l+0],p=s[l+1],v=s[l+2],_=s[l+3],S=u[d+0],E=u[d+1],R=u[d+2],C=u[d+3];if(h<=0){t[i+0]=m,t[i+1]=p,t[i+2]=v,t[i+3]=_;return}if(h>=1){t[i+0]=S,t[i+1]=E,t[i+2]=R,t[i+3]=C;return}if(_!==C||m!==S||p!==E||v!==R){let y=m*S+p*E+v*R+_*C;y<0&&(S=-S,E=-E,R=-R,C=-C,y=-y);let x=1-h;if(y<.9995){const z=Math.acos(y),P=Math.sin(z);x=Math.sin(x*z)/P,h=Math.sin(h*z)/P,m=m*x+S*h,p=p*x+E*h,v=v*x+R*h,_=_*x+C*h}else{m=m*x+S*h,p=p*x+E*h,v=v*x+R*h,_=_*x+C*h;const z=1/Math.sqrt(m*m+p*p+v*v+_*_);m*=z,p*=z,v*=z,_*=z}}t[i]=m,t[i+1]=p,t[i+2]=v,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,u,d){const h=s[l],m=s[l+1],p=s[l+2],v=s[l+3],_=u[d],S=u[d+1],E=u[d+2],R=u[d+3];return t[i]=h*R+v*_+m*E-p*S,t[i+1]=m*R+v*S+p*_-h*E,t[i+2]=p*R+v*E+h*S-m*_,t[i+3]=v*R-h*_-m*S-p*E,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(s/2),v=h(l/2),_=h(u/2),S=m(s/2),E=m(l/2),R=m(u/2);switch(d){case"XYZ":this._x=S*v*_+p*E*R,this._y=p*E*_-S*v*R,this._z=p*v*R+S*E*_,this._w=p*v*_-S*E*R;break;case"YXZ":this._x=S*v*_+p*E*R,this._y=p*E*_-S*v*R,this._z=p*v*R-S*E*_,this._w=p*v*_+S*E*R;break;case"ZXY":this._x=S*v*_-p*E*R,this._y=p*E*_+S*v*R,this._z=p*v*R+S*E*_,this._w=p*v*_-S*E*R;break;case"ZYX":this._x=S*v*_-p*E*R,this._y=p*E*_+S*v*R,this._z=p*v*R-S*E*_,this._w=p*v*_+S*E*R;break;case"YZX":this._x=S*v*_+p*E*R,this._y=p*E*_+S*v*R,this._z=p*v*R-S*E*_,this._w=p*v*_-S*E*R;break;case"XZY":this._x=S*v*_-p*E*R,this._y=p*E*_-S*v*R,this._z=p*v*R+S*E*_,this._w=p*v*_+S*E*R;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],v=i[6],_=i[10],S=s+h+_;if(S>0){const E=.5/Math.sqrt(S+1);this._w=.25/E,this._x=(v-m)*E,this._y=(u-p)*E,this._z=(d-l)*E}else if(s>h&&s>_){const E=2*Math.sqrt(1+s-h-_);this._w=(v-m)/E,this._x=.25*E,this._y=(l+d)/E,this._z=(u+p)/E}else if(h>_){const E=2*Math.sqrt(1+h-s-_);this._w=(u-p)/E,this._x=(l+d)/E,this._y=.25*E,this._z=(m+v)/E}else{const E=2*Math.sqrt(1+_-s-h);this._w=(d-l)/E,this._x=(u+p)/E,this._y=(m+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(St(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,d=t._w,h=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+d*h+l*p-u*m,this._y=l*v+d*m+u*h-s*p,this._z=u*v+d*p+s*m-l*h,this._w=d*v-s*h-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,u=t._z,d=t._w,h=this.dot(t);h<0&&(s=-s,l=-l,u=-u,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(t=0,i=0,s=0){re.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Bg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Bg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,d=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*s),v=2*(h*i-u*l),_=2*(u*s-d*i);return this.x=i+m*p+d*_-h*v,this.y=s+m*v+h*p-u*_,this.z=l+m*_+u*v-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=St(this.x,t.x,i.x),this.y=St(this.y,t.y,i.y),this.z=St(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=St(this.x,t,i),this.y=St(this.y,t,i),this.z=St(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-s*m,this.z=s*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return ad.copy(this).projectOnVector(t),this.sub(ad)}reflect(t){return this.sub(ad.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(St(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ad=new re,Bg=new qo;class ut{constructor(t,i,s,l,u,d,h,m,p){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,d,h,m,p)}set(t,i,s,l,u,d,h,m,p){const v=this.elements;return v[0]=t,v[1]=l,v[2]=h,v[3]=i,v[4]=u,v[5]=m,v[6]=s,v[7]=d,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],v=s[4],_=s[7],S=s[2],E=s[5],R=s[8],C=l[0],y=l[3],x=l[6],z=l[1],P=l[4],L=l[7],F=l[2],B=l[5],U=l[8];return u[0]=d*C+h*z+m*F,u[3]=d*y+h*P+m*B,u[6]=d*x+h*L+m*U,u[1]=p*C+v*z+_*F,u[4]=p*y+v*P+_*B,u[7]=p*x+v*L+_*U,u[2]=S*C+E*z+R*F,u[5]=S*y+E*P+R*B,u[8]=S*x+E*L+R*U,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],v=t[8];return i*d*v-i*h*p-s*u*v+s*h*m+l*u*p-l*d*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],v=t[8],_=v*d-h*p,S=h*m-v*u,E=p*u-d*m,R=i*_+s*S+l*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/R;return t[0]=_*C,t[1]=(l*p-v*s)*C,t[2]=(h*s-l*d)*C,t[3]=S*C,t[4]=(v*i-l*m)*C,t[5]=(l*u-h*i)*C,t[6]=E*C,t[7]=(s*m-p*i)*C,t[8]=(d*i-s*u)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(sd.makeScale(t,i)),this}rotate(t){return this.premultiply(sd.makeRotation(-t)),this}translate(t,i){return this.premultiply(sd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const sd=new ut,Hg=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gg=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qy(){const o={enabled:!0,workingColorSpace:Ur,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===It&&(l.r=pa(l.r),l.g=pa(l.g),l.b=pa(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===It&&(l.r=Cr(l.r),l.g=Cr(l.g),l.b=Cr(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ja?Fc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Vo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Vo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Ur]:{primaries:t,whitePoint:s,transfer:Fc,toXYZ:Hg,fromXYZ:Gg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:t,whitePoint:s,transfer:It,toXYZ:Hg,fromXYZ:Gg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),o}const Et=Qy();function pa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Cr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let pr;class Jy{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{pr===void 0&&(pr=Bc("canvas")),pr.width=t.width,pr.height=t.height;const l=pr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=pr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Bc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=pa(u[d]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(pa(i[s]/255)*255):i[s]=pa(i[s]);return{data:i,width:t.width,height:t.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $y=0;class Bh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$y++}),this.uuid=Xo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(rd(l[d].image)):u.push(rd(l[d]))}else u=rd(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function rd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Jy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let eM=0;const od=new re;class wn extends Or{constructor(t=wn.DEFAULT_IMAGE,i=wn.DEFAULT_MAPPING,s=da,l=da,u=On,d=Cs,h=Ai,m=mi,p=wn.DEFAULT_ANISOTROPY,v=Ja){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=Xo(),this.name="",this.source=new Bh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(od).x}get height(){return this.source.getSize(od).y}get depth(){return this.source.getSize(od).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){st(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){st(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==F_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xd:t.x=t.x-Math.floor(t.x);break;case da:t.x=t.x<0?0:1;break;case qd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xd:t.y=t.y-Math.floor(t.y);break;case da:t.y=t.y<0?0:1;break;case qd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=F_;wn.DEFAULT_ANISOTROPY=1;class nn{constructor(t=0,i=0,s=0,l=1){nn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const m=t.elements,p=m[0],v=m[4],_=m[8],S=m[1],E=m[5],R=m[9],C=m[2],y=m[6],x=m[10];if(Math.abs(v-S)<.01&&Math.abs(_-C)<.01&&Math.abs(R-y)<.01){if(Math.abs(v+S)<.1&&Math.abs(_+C)<.1&&Math.abs(R+y)<.1&&Math.abs(p+E+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(p+1)/2,L=(E+1)/2,F=(x+1)/2,B=(v+S)/4,U=(_+C)/4,Z=(R+y)/4;return P>L&&P>F?P<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(P),l=B/s,u=U/s):L>F?L<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(L),s=B/l,u=Z/l):F<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(F),s=U/u,l=Z/u),this.set(s,l,u,i),this}let z=Math.sqrt((y-R)*(y-R)+(_-C)*(_-C)+(S-v)*(S-v));return Math.abs(z)<.001&&(z=1),this.x=(y-R)/z,this.y=(_-C)/z,this.z=(S-v)/z,this.w=Math.acos((p+E+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=St(this.x,t.x,i.x),this.y=St(this.y,t.y,i.y),this.z=St(this.z,t.z,i.z),this.w=St(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=St(this.x,t,i),this.y=St(this.y,t,i),this.z=St(this.z,t,i),this.w=St(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tM extends Or{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new nn(0,0,t,i),this.scissorTest=!1,this.viewport=new nn(0,0,t,i);const l={width:t,height:i,depth:s.depth},u=new wn(l);this.textures=[];const d=s.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Bh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends tM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class W_ extends wn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class nM extends wn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wo{constructor(t=new re(1/0,1/0,1/0),i=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Mi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Mi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Mi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,Mi):Mi.fromBufferAttribute(u,d),Mi.applyMatrix4(t.matrixWorld),this.expandByPoint(Mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),cc.copy(s.boundingBox)),cc.applyMatrix4(t.matrixWorld),this.union(cc)}const l=t.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mi),Mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Uo),uc.subVectors(this.max,Uo),mr.subVectors(t.a,Uo),gr.subVectors(t.b,Uo),_r.subVectors(t.c,Uo),Wa.subVectors(gr,mr),ja.subVectors(_r,gr),xs.subVectors(mr,_r);let i=[0,-Wa.z,Wa.y,0,-ja.z,ja.y,0,-xs.z,xs.y,Wa.z,0,-Wa.x,ja.z,0,-ja.x,xs.z,0,-xs.x,-Wa.y,Wa.x,0,-ja.y,ja.x,0,-xs.y,xs.x,0];return!ld(i,mr,gr,_r,uc)||(i=[1,0,0,0,1,0,0,0,1],!ld(i,mr,gr,_r,uc))?!1:(fc.crossVectors(Wa,ja),i=[fc.x,fc.y,fc.z],ld(i,mr,gr,_r,uc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ra[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ra[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ra[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ra[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ra[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ra[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ra[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ra[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ra),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ra=[new re,new re,new re,new re,new re,new re,new re,new re],Mi=new re,cc=new Wo,mr=new re,gr=new re,_r=new re,Wa=new re,ja=new re,xs=new re,Uo=new re,uc=new re,fc=new re,Ss=new re;function ld(o,t,i,s,l){for(let u=0,d=o.length-3;u<=d;u+=3){Ss.fromArray(o,u);const h=l.x*Math.abs(Ss.x)+l.y*Math.abs(Ss.y)+l.z*Math.abs(Ss.z),m=t.dot(Ss),p=i.dot(Ss),v=s.dot(Ss);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>h)return!1}return!0}const iM=new Wo,Lo=new re,cd=new re;class Gc{constructor(t=new re,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):iM.setFromPoints(t).getCenter(s);let l=0;for(let u=0,d=t.length;u<d;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Lo.subVectors(t,this.center);const i=Lo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Lo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Lo.copy(t.center).add(cd)),this.expandByPoint(Lo.copy(t.center).sub(cd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const oa=new re,ud=new re,dc=new re,Ya=new re,fd=new re,hc=new re,dd=new re;class j_{constructor(t=new re,i=new re(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,oa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=oa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(oa.copy(this.origin).addScaledVector(this.direction,i),oa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){ud.copy(t).add(i).multiplyScalar(.5),dc.copy(i).sub(t).normalize(),Ya.copy(this.origin).sub(ud);const u=t.distanceTo(i)*.5,d=-this.direction.dot(dc),h=Ya.dot(this.direction),m=-Ya.dot(dc),p=Ya.lengthSq(),v=Math.abs(1-d*d);let _,S,E,R;if(v>0)if(_=d*m-h,S=d*h-m,R=u*v,_>=0)if(S>=-R)if(S<=R){const C=1/v;_*=C,S*=C,E=_*(_+d*S+2*h)+S*(d*_+S+2*m)+p}else S=u,_=Math.max(0,-(d*S+h)),E=-_*_+S*(S+2*m)+p;else S=-u,_=Math.max(0,-(d*S+h)),E=-_*_+S*(S+2*m)+p;else S<=-R?(_=Math.max(0,-(-d*u+h)),S=_>0?-u:Math.min(Math.max(-u,-m),u),E=-_*_+S*(S+2*m)+p):S<=R?(_=0,S=Math.min(Math.max(-u,-m),u),E=S*(S+2*m)+p):(_=Math.max(0,-(d*u+h)),S=_>0?u:Math.min(Math.max(-u,-m),u),E=-_*_+S*(S+2*m)+p);else S=d>0?-u:u,_=Math.max(0,-(d*S+h)),E=-_*_+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(ud).addScaledVector(dc,S),E}intersectSphere(t,i){oa.subVectors(t.center,this.origin);const s=oa.dot(this.direction),l=oa.dot(oa)-s*s,u=t.radius*t.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,d,h,m;const p=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,S=this.origin;return p>=0?(s=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(s=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),v>=0?(u=(t.min.y-S.y)*v,d=(t.max.y-S.y)*v):(u=(t.max.y-S.y)*v,d=(t.min.y-S.y)*v),s>d||u>l||((u>s||isNaN(s))&&(s=u),(d<l||isNaN(l))&&(l=d),_>=0?(h=(t.min.z-S.z)*_,m=(t.max.z-S.z)*_):(h=(t.max.z-S.z)*_,m=(t.min.z-S.z)*_),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,oa)!==null}intersectTriangle(t,i,s,l,u){fd.subVectors(i,t),hc.subVectors(s,t),dd.crossVectors(fd,hc);let d=this.direction.dot(dd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ya.subVectors(this.origin,t);const m=h*this.direction.dot(hc.crossVectors(Ya,hc));if(m<0)return null;const p=h*this.direction.dot(fd.cross(Ya));if(p<0||m+p>d)return null;const v=-h*Ya.dot(dd);return v<0?null:this.at(v/d,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class an{constructor(t,i,s,l,u,d,h,m,p,v,_,S,E,R,C,y){an.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,d,h,m,p,v,_,S,E,R,C,y)}set(t,i,s,l,u,d,h,m,p,v,_,S,E,R,C,y){const x=this.elements;return x[0]=t,x[4]=i,x[8]=s,x[12]=l,x[1]=u,x[5]=d,x[9]=h,x[13]=m,x[2]=p,x[6]=v,x[10]=_,x[14]=S,x[3]=E,x[7]=R,x[11]=C,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new an().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/vr.setFromMatrixColumn(t,0).length(),u=1/vr.setFromMatrixColumn(t,1).length(),d=1/vr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(u),_=Math.sin(u);if(t.order==="XYZ"){const S=d*v,E=d*_,R=h*v,C=h*_;i[0]=m*v,i[4]=-m*_,i[8]=p,i[1]=E+R*p,i[5]=S-C*p,i[9]=-h*m,i[2]=C-S*p,i[6]=R+E*p,i[10]=d*m}else if(t.order==="YXZ"){const S=m*v,E=m*_,R=p*v,C=p*_;i[0]=S+C*h,i[4]=R*h-E,i[8]=d*p,i[1]=d*_,i[5]=d*v,i[9]=-h,i[2]=E*h-R,i[6]=C+S*h,i[10]=d*m}else if(t.order==="ZXY"){const S=m*v,E=m*_,R=p*v,C=p*_;i[0]=S-C*h,i[4]=-d*_,i[8]=R+E*h,i[1]=E+R*h,i[5]=d*v,i[9]=C-S*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const S=d*v,E=d*_,R=h*v,C=h*_;i[0]=m*v,i[4]=R*p-E,i[8]=S*p+C,i[1]=m*_,i[5]=C*p+S,i[9]=E*p-R,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const S=d*m,E=d*p,R=h*m,C=h*p;i[0]=m*v,i[4]=C-S*_,i[8]=R*_+E,i[1]=_,i[5]=d*v,i[9]=-h*v,i[2]=-p*v,i[6]=E*_+R,i[10]=S-C*_}else if(t.order==="XZY"){const S=d*m,E=d*p,R=h*m,C=h*p;i[0]=m*v,i[4]=-_,i[8]=p*v,i[1]=S*_+C,i[5]=d*v,i[9]=E*_-R,i[2]=R*_-E,i[6]=h*v,i[10]=C*_+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(aM,t,sM)}lookAt(t,i,s){const l=this.elements;return $n.subVectors(t,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Za.crossVectors(s,$n),Za.lengthSq()===0&&(Math.abs(s.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Za.crossVectors(s,$n)),Za.normalize(),pc.crossVectors($n,Za),l[0]=Za.x,l[4]=pc.x,l[8]=$n.x,l[1]=Za.y,l[5]=pc.y,l[9]=$n.y,l[2]=Za.z,l[6]=pc.z,l[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],v=s[1],_=s[5],S=s[9],E=s[13],R=s[2],C=s[6],y=s[10],x=s[14],z=s[3],P=s[7],L=s[11],F=s[15],B=l[0],U=l[4],Z=l[8],A=l[12],w=l[1],k=l[5],se=l[9],ie=l[13],pe=l[2],fe=l[6],O=l[10],H=l[14],ae=l[3],Me=l[7],Se=l[11],N=l[15];return u[0]=d*B+h*w+m*pe+p*ae,u[4]=d*U+h*k+m*fe+p*Me,u[8]=d*Z+h*se+m*O+p*Se,u[12]=d*A+h*ie+m*H+p*N,u[1]=v*B+_*w+S*pe+E*ae,u[5]=v*U+_*k+S*fe+E*Me,u[9]=v*Z+_*se+S*O+E*Se,u[13]=v*A+_*ie+S*H+E*N,u[2]=R*B+C*w+y*pe+x*ae,u[6]=R*U+C*k+y*fe+x*Me,u[10]=R*Z+C*se+y*O+x*Se,u[14]=R*A+C*ie+y*H+x*N,u[3]=z*B+P*w+L*pe+F*ae,u[7]=z*U+P*k+L*fe+F*Me,u[11]=z*Z+P*se+L*O+F*Se,u[15]=z*A+P*ie+L*H+F*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],d=t[1],h=t[5],m=t[9],p=t[13],v=t[2],_=t[6],S=t[10],E=t[14],R=t[3],C=t[7],y=t[11],x=t[15],z=m*E-p*S,P=h*E-p*_,L=h*S-m*_,F=d*E-p*v,B=d*S-m*v,U=d*_-h*v;return i*(C*z-y*P+x*L)-s*(R*z-y*F+x*B)+l*(R*P-C*F+x*U)-u*(R*L-C*B+y*U)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],v=t[8],_=t[9],S=t[10],E=t[11],R=t[12],C=t[13],y=t[14],x=t[15],z=_*y*p-C*S*p+C*m*E-h*y*E-_*m*x+h*S*x,P=R*S*p-v*y*p-R*m*E+d*y*E+v*m*x-d*S*x,L=v*C*p-R*_*p+R*h*E-d*C*E-v*h*x+d*_*x,F=R*_*m-v*C*m-R*h*S+d*C*S+v*h*y-d*_*y,B=i*z+s*P+l*L+u*F;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/B;return t[0]=z*U,t[1]=(C*S*u-_*y*u-C*l*E+s*y*E+_*l*x-s*S*x)*U,t[2]=(h*y*u-C*m*u+C*l*p-s*y*p-h*l*x+s*m*x)*U,t[3]=(_*m*u-h*S*u-_*l*p+s*S*p+h*l*E-s*m*E)*U,t[4]=P*U,t[5]=(v*y*u-R*S*u+R*l*E-i*y*E-v*l*x+i*S*x)*U,t[6]=(R*m*u-d*y*u-R*l*p+i*y*p+d*l*x-i*m*x)*U,t[7]=(d*S*u-v*m*u+v*l*p-i*S*p-d*l*E+i*m*E)*U,t[8]=L*U,t[9]=(R*_*u-v*C*u-R*s*E+i*C*E+v*s*x-i*_*x)*U,t[10]=(d*C*u-R*h*u+R*s*p-i*C*p-d*s*x+i*h*x)*U,t[11]=(v*h*u-d*_*u-v*s*p+i*_*p+d*s*E-i*h*E)*U,t[12]=F*U,t[13]=(v*C*l-R*_*l+R*s*S-i*C*S-v*s*y+i*_*y)*U,t[14]=(R*h*l-d*C*l-R*s*m+i*C*m+d*s*y-i*h*y)*U,t[15]=(d*_*l-v*h*l+v*s*m-i*_*m-d*s*S+i*h*S)*U,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,d=t.x,h=t.y,m=t.z,p=u*d,v=u*h;return this.set(p*d+s,p*h-l*m,p*m+l*h,0,p*h+l*m,v*h+s,v*m-l*d,0,p*m-l*h,v*m+l*d,u*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,d){return this.set(1,s,u,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,v=d+d,_=h+h,S=u*p,E=u*v,R=u*_,C=d*v,y=d*_,x=h*_,z=m*p,P=m*v,L=m*_,F=s.x,B=s.y,U=s.z;return l[0]=(1-(C+x))*F,l[1]=(E+L)*F,l[2]=(R-P)*F,l[3]=0,l[4]=(E-L)*B,l[5]=(1-(S+x))*B,l[6]=(y+z)*B,l[7]=0,l[8]=(R+P)*U,l[9]=(y-z)*U,l[10]=(1-(S+C))*U,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let u=vr.set(l[0],l[1],l[2]).length();const d=vr.set(l[4],l[5],l[6]).length(),h=vr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),Ei.copy(this);const p=1/u,v=1/d,_=1/h;return Ei.elements[0]*=p,Ei.elements[1]*=p,Ei.elements[2]*=p,Ei.elements[4]*=v,Ei.elements[5]*=v,Ei.elements[6]*=v,Ei.elements[8]*=_,Ei.elements[9]*=_,Ei.elements[10]*=_,i.setFromRotationMatrix(Ei),s.x=u,s.y=d,s.z=h,this}makePerspective(t,i,s,l,u,d,h=Fi,m=!1){const p=this.elements,v=2*u/(i-t),_=2*u/(s-l),S=(i+t)/(i-t),E=(s+l)/(s-l);let R,C;if(m)R=u/(d-u),C=d*u/(d-u);else if(h===Fi)R=-(d+u)/(d-u),C=-2*d*u/(d-u);else if(h===Ic)R=-d/(d-u),C=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=_,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=R,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,u,d,h=Fi,m=!1){const p=this.elements,v=2/(i-t),_=2/(s-l),S=-(i+t)/(i-t),E=-(s+l)/(s-l);let R,C;if(m)R=1/(d-u),C=d/(d-u);else if(h===Fi)R=-2/(d-u),C=-(d+u)/(d-u);else if(h===Ic)R=-1/(d-u),C=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=_,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=R,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const vr=new re,Ei=new an,aM=new re(0,0,0),sM=new re(1,1,1),Za=new re,pc=new re,$n=new re,Vg=new an,kg=new qo;class va{constructor(t=0,i=0,s=0,l=va.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],v=l[9],_=l[2],S=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-St(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(St(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,E),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-St(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,E),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(St(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-v,E),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Vg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vg,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return kg.setFromEuler(this),this.setFromQuaternion(kg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}va.DEFAULT_ORDER="XYZ";class Y_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let rM=0;const Xg=new re,xr=new qo,la=new an,mc=new re,Oo=new re,oM=new re,lM=new qo,qg=new re(1,0,0),Wg=new re(0,1,0),jg=new re(0,0,1),Yg={type:"added"},cM={type:"removed"},Sr={type:"childadded",child:null},hd={type:"childremoved",child:null};class qn extends Or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=Xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DEFAULT_UP.clone();const t=new re,i=new va,s=new qo,l=new re(1,1,1);function u(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new an},normalMatrix:{value:new ut}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Y_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return xr.setFromAxisAngle(t,i),this.quaternion.multiply(xr),this}rotateOnWorldAxis(t,i){return xr.setFromAxisAngle(t,i),this.quaternion.premultiply(xr),this}rotateX(t){return this.rotateOnAxis(qg,t)}rotateY(t){return this.rotateOnAxis(Wg,t)}rotateZ(t){return this.rotateOnAxis(jg,t)}translateOnAxis(t,i){return Xg.copy(t).applyQuaternion(this.quaternion),this.position.add(Xg.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(qg,t)}translateY(t){return this.translateOnAxis(Wg,t)}translateZ(t){return this.translateOnAxis(jg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(la.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?mc.copy(t):mc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?la.lookAt(Oo,mc,this.up):la.lookAt(mc,Oo,this.up),this.quaternion.setFromRotationMatrix(la),l&&(la.extractRotation(l.matrixWorld),xr.setFromRotationMatrix(la),this.quaternion.premultiply(xr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(At("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yg),Sr.child=t,this.dispatchEvent(Sr),Sr.child=null):At("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(cM),hd.child=t,this.dispatchEvent(hd),hd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),la.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),la.multiply(t.parent.matrixWorld)),t.applyMatrix4(la),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yg),Sr.child=t,this.dispatchEvent(Sr),Sr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,t,oM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,lM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const _=m[p];u(t.shapes,_)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(t.materials,this.material[m]));l.material=h}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),v=d(t.images),_=d(t.shapes),S=d(t.skeletons),E=d(t.animations),R=d(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),_.length>0&&(s.shapes=_),S.length>0&&(s.skeletons=S),E.length>0&&(s.animations=E),R.length>0&&(s.nodes=R)}return s.object=l,s;function d(h){const m=[];for(const p in h){const v=h[p];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}qn.DEFAULT_UP=new re(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bi=new re,ca=new re,pd=new re,ua=new re,yr=new re,Mr=new re,Zg=new re,md=new re,gd=new re,_d=new re,vd=new nn,xd=new nn,Sd=new nn;class Ti{constructor(t=new re,i=new re,s=new re){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),bi.subVectors(t,i),l.cross(bi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){bi.subVectors(l,i),ca.subVectors(s,i),pd.subVectors(t,i);const d=bi.dot(bi),h=bi.dot(ca),m=bi.dot(pd),p=ca.dot(ca),v=ca.dot(pd),_=d*p-h*h;if(_===0)return u.set(0,0,0),null;const S=1/_,E=(p*m-h*v)*S,R=(d*v-h*m)*S;return u.set(1-E-R,R,E)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ua)===null?!1:ua.x>=0&&ua.y>=0&&ua.x+ua.y<=1}static getInterpolation(t,i,s,l,u,d,h,m){return this.getBarycoord(t,i,s,l,ua)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ua.x),m.addScaledVector(d,ua.y),m.addScaledVector(h,ua.z),m)}static getInterpolatedAttribute(t,i,s,l,u,d){return vd.setScalar(0),xd.setScalar(0),Sd.setScalar(0),vd.fromBufferAttribute(t,i),xd.fromBufferAttribute(t,s),Sd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(vd,u.x),d.addScaledVector(xd,u.y),d.addScaledVector(Sd,u.z),d}static isFrontFacing(t,i,s,l){return bi.subVectors(s,i),ca.subVectors(t,i),bi.cross(ca).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bi.subVectors(this.c,this.b),ca.subVectors(this.a,this.b),bi.cross(ca).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ti.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ti.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return Ti.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return Ti.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ti.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let d,h;yr.subVectors(l,s),Mr.subVectors(u,s),md.subVectors(t,s);const m=yr.dot(md),p=Mr.dot(md);if(m<=0&&p<=0)return i.copy(s);gd.subVectors(t,l);const v=yr.dot(gd),_=Mr.dot(gd);if(v>=0&&_<=v)return i.copy(l);const S=m*_-v*p;if(S<=0&&m>=0&&v<=0)return d=m/(m-v),i.copy(s).addScaledVector(yr,d);_d.subVectors(t,u);const E=yr.dot(_d),R=Mr.dot(_d);if(R>=0&&E<=R)return i.copy(u);const C=E*p-m*R;if(C<=0&&p>=0&&R<=0)return h=p/(p-R),i.copy(s).addScaledVector(Mr,h);const y=v*R-E*_;if(y<=0&&_-v>=0&&E-R>=0)return Zg.subVectors(u,l),h=(_-v)/(_-v+(E-R)),i.copy(l).addScaledVector(Zg,h);const x=1/(y+C+S);return d=C*x,h=S*x,i.copy(s).addScaledVector(yr,d).addScaledVector(Mr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Z_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ka={h:0,s:0,l:0},gc={h:0,s:0,l:0};function yd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Lt{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=hi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Et.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Et.workingColorSpace){return this.r=t,this.g=i,this.b=s,Et.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Et.workingColorSpace){if(t=Ky(t,1),i=St(i,0,1),s=St(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,d=2*s-u;this.r=yd(d,u,t+1/3),this.g=yd(d,u,t),this.b=yd(d,u,t-1/3)}return Et.colorSpaceToWorking(this,l),this}setStyle(t,i=hi){function s(u){u!==void 0&&parseFloat(u)<1&&st("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:st("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);st("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=hi){const s=Z_[t.toLowerCase()];return s!==void 0?this.setHex(s,i):st("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pa(t.r),this.g=pa(t.g),this.b=pa(t.b),this}copyLinearToSRGB(t){return this.r=Cr(t.r),this.g=Cr(t.g),this.b=Cr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hi){return Et.workingToColorSpace(Ln.copy(this),t),Math.round(St(Ln.r*255,0,255))*65536+Math.round(St(Ln.g*255,0,255))*256+Math.round(St(Ln.b*255,0,255))}getHexString(t=hi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Et.workingColorSpace){Et.workingToColorSpace(Ln.copy(this),i);const s=Ln.r,l=Ln.g,u=Ln.b,d=Math.max(s,l,u),h=Math.min(s,l,u);let m,p;const v=(h+d)/2;if(h===d)m=0,p=0;else{const _=d-h;switch(p=v<=.5?_/(d+h):_/(2-d-h),d){case s:m=(l-u)/_+(l<u?6:0);break;case l:m=(u-s)/_+2;break;case u:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=v,t}getRGB(t,i=Et.workingColorSpace){return Et.workingToColorSpace(Ln.copy(this),i),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=hi){Et.workingToColorSpace(Ln.copy(this),t);const i=Ln.r,s=Ln.g,l=Ln.b;return t!==hi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ka),this.setHSL(Ka.h+t,Ka.s+i,Ka.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ka),t.getHSL(gc);const s=id(Ka.h,gc.h,i),l=id(Ka.s,gc.s,i),u=id(Ka.l,gc.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Lt;Lt.NAMES=Z_;let uM=0;class jo extends Or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=Xo(),this.name="",this.type="Material",this.blending=Rr,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ld,this.blendDst=Od,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Og,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hr,this.stencilZFail=hr,this.stencilZPass=hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){st(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){st(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Rr&&(s.blending=this.blending),this.side!==es&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ld&&(s.blendSrc=this.blendSrc),this.blendDst!==Od&&(s.blendDst=this.blendDst),this.blendEquation!==As&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==wr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Og&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==hr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==hr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(t.textures),d=l(t.images);u.length>0&&(s.textures=u),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class K_ extends jo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new va,this.combine=w_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const un=new re,_c=new Vt;let fM=0;class Ri{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Pg,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)_c.fromBufferAttribute(this,i),_c.applyMatrix3(t),this.setXY(i,_c.x,_c.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(t),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.transformDirection(t),this.setXYZ(i,un.x,un.y,un.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=No(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=kn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=No(i,this.array)),i}setX(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=No(i,this.array)),i}setY(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=No(i,this.array)),i}setZ(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=No(i,this.array)),i}setW(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array),l=kn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array),l=kn(l,this.array),u=kn(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Pg&&(t.usage=this.usage),t}}class Q_ extends Ri{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class J_ extends Ri{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class ma extends Ri{constructor(t,i,s){super(new Float32Array(t),i,s)}}let dM=0;const di=new an,Md=new qn,Er=new re,ei=new Wo,Po=new Wo,gn=new re;class Ci extends Or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=Xo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(q_(t)?J_:Q_)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new ut().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,i,s){return di.makeTranslation(t,i,s),this.applyMatrix4(di),this}scale(t,i,s){return di.makeScale(t,i,s),this.applyMatrix4(di),this}lookAt(t){return Md.lookAt(t),Md.updateMatrix(),this.applyMatrix4(Md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Er).negate(),this.translate(Er.x,Er.y,Er.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const d=t[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new ma(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){At("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];ei.setFromBufferAttribute(u),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&At('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){At("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(t){const s=this.boundingSphere.center;if(ei.setFromBufferAttribute(t),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Po.setFromBufferAttribute(h),this.morphTargetsRelative?(gn.addVectors(ei.min,Po.min),ei.expandByPoint(gn),gn.addVectors(ei.max,Po.max),ei.expandByPoint(gn)):(ei.expandByPoint(Po.min),ei.expandByPoint(Po.max))}ei.getCenter(s);let l=0;for(let u=0,d=t.count;u<d;u++)gn.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(gn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)gn.fromBufferAttribute(h,p),m&&(Er.fromBufferAttribute(t,p),gn.add(Er)),l=Math.max(l,s.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&At('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){At("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ri(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let Z=0;Z<s.count;Z++)h[Z]=new re,m[Z]=new re;const p=new re,v=new re,_=new re,S=new Vt,E=new Vt,R=new Vt,C=new re,y=new re;function x(Z,A,w){p.fromBufferAttribute(s,Z),v.fromBufferAttribute(s,A),_.fromBufferAttribute(s,w),S.fromBufferAttribute(u,Z),E.fromBufferAttribute(u,A),R.fromBufferAttribute(u,w),v.sub(p),_.sub(p),E.sub(S),R.sub(S);const k=1/(E.x*R.y-R.x*E.y);isFinite(k)&&(C.copy(v).multiplyScalar(R.y).addScaledVector(_,-E.y).multiplyScalar(k),y.copy(_).multiplyScalar(E.x).addScaledVector(v,-R.x).multiplyScalar(k),h[Z].add(C),h[A].add(C),h[w].add(C),m[Z].add(y),m[A].add(y),m[w].add(y))}let z=this.groups;z.length===0&&(z=[{start:0,count:t.count}]);for(let Z=0,A=z.length;Z<A;++Z){const w=z[Z],k=w.start,se=w.count;for(let ie=k,pe=k+se;ie<pe;ie+=3)x(t.getX(ie+0),t.getX(ie+1),t.getX(ie+2))}const P=new re,L=new re,F=new re,B=new re;function U(Z){F.fromBufferAttribute(l,Z),B.copy(F);const A=h[Z];P.copy(A),P.sub(F.multiplyScalar(F.dot(A))).normalize(),L.crossVectors(B,A);const k=L.dot(m[Z])<0?-1:1;d.setXYZW(Z,P.x,P.y,P.z,k)}for(let Z=0,A=z.length;Z<A;++Z){const w=z[Z],k=w.start,se=w.count;for(let ie=k,pe=k+se;ie<pe;ie+=3)U(t.getX(ie+0)),U(t.getX(ie+1)),U(t.getX(ie+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ri(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,E=s.count;S<E;S++)s.setXYZ(S,0,0,0);const l=new re,u=new re,d=new re,h=new re,m=new re,p=new re,v=new re,_=new re;if(t)for(let S=0,E=t.count;S<E;S+=3){const R=t.getX(S+0),C=t.getX(S+1),y=t.getX(S+2);l.fromBufferAttribute(i,R),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,y),v.subVectors(d,u),_.subVectors(l,u),v.cross(_),h.fromBufferAttribute(s,R),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,y),h.add(v),m.add(v),p.add(v),s.setXYZ(R,h.x,h.y,h.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,E=i.count;S<E;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),v.subVectors(d,u),_.subVectors(l,u),v.cross(_),s.setXYZ(S+0,v.x,v.y,v.z),s.setXYZ(S+1,v.x,v.y,v.z),s.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)gn.fromBufferAttribute(t,i),gn.normalize(),t.setXYZ(i,gn.x,gn.y,gn.z)}toNonIndexed(){function t(h,m){const p=h.array,v=h.itemSize,_=h.normalized,S=new p.constructor(m.length*v);let E=0,R=0;for(let C=0,y=m.length;C<y;C++){h.isInterleavedBufferAttribute?E=m[C]*h.data.stride+h.offset:E=m[C]*v;for(let x=0;x<v;x++)S[R++]=p[E++]}return new Ri(S,v,_)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ci,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,s);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let v=0,_=p.length;v<_;v++){const S=p[v],E=t(S,s);m.push(E)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let _=0,S=p.length;_<S;_++){const E=p[_];v.push(E.toJSON(t.data))}v.length>0&&(l[m]=v,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const u=t.morphAttributes;for(const p in u){const v=[],_=u[p];for(let S=0,E=_.length;S<E;S++)v.push(_[S].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,v=d.length;p<v;p++){const _=d[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kg=new an,ys=new j_,vc=new Gc,Qg=new re,xc=new re,Sc=new re,yc=new re,Ed=new re,Mc=new re,Jg=new re,Ec=new re;class xa extends qn{constructor(t=new Ci,i=new K_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(u&&h){Mc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const v=h[m],_=u[m];v!==0&&(Ed.fromBufferAttribute(_,t),d?Mc.addScaledVector(Ed,v):Mc.addScaledVector(Ed.sub(i),v))}i.add(Mc)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),vc.copy(s.boundingSphere),vc.applyMatrix4(u),ys.copy(t.ray).recast(t.near),!(vc.containsPoint(ys.origin)===!1&&(ys.intersectSphere(vc,Qg)===null||ys.origin.distanceToSquared(Qg)>(t.far-t.near)**2))&&(Kg.copy(u).invert(),ys.copy(t.ray).applyMatrix4(Kg),!(s.boundingBox!==null&&ys.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ys)))}_computeIntersections(t,i,s){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,v=u.attributes.uv1,_=u.attributes.normal,S=u.groups,E=u.drawRange;if(h!==null)if(Array.isArray(d))for(let R=0,C=S.length;R<C;R++){const y=S[R],x=d[y.materialIndex],z=Math.max(y.start,E.start),P=Math.min(h.count,Math.min(y.start+y.count,E.start+E.count));for(let L=z,F=P;L<F;L+=3){const B=h.getX(L),U=h.getX(L+1),Z=h.getX(L+2);l=bc(this,x,t,s,p,v,_,B,U,Z),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const R=Math.max(0,E.start),C=Math.min(h.count,E.start+E.count);for(let y=R,x=C;y<x;y+=3){const z=h.getX(y),P=h.getX(y+1),L=h.getX(y+2);l=bc(this,d,t,s,p,v,_,z,P,L),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let R=0,C=S.length;R<C;R++){const y=S[R],x=d[y.materialIndex],z=Math.max(y.start,E.start),P=Math.min(m.count,Math.min(y.start+y.count,E.start+E.count));for(let L=z,F=P;L<F;L+=3){const B=L,U=L+1,Z=L+2;l=bc(this,x,t,s,p,v,_,B,U,Z),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const R=Math.max(0,E.start),C=Math.min(m.count,E.start+E.count);for(let y=R,x=C;y<x;y+=3){const z=y,P=y+1,L=y+2;l=bc(this,d,t,s,p,v,_,z,P,L),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function hM(o,t,i,s,l,u,d,h){let m;if(t.side===Xn?m=s.intersectTriangle(d,u,l,!0,h):m=s.intersectTriangle(l,u,d,t.side===es,h),m===null)return null;Ec.copy(h),Ec.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Ec);return p<i.near||p>i.far?null:{distance:p,point:Ec.clone(),object:o}}function bc(o,t,i,s,l,u,d,h,m,p){o.getVertexPosition(h,xc),o.getVertexPosition(m,Sc),o.getVertexPosition(p,yc);const v=hM(o,t,i,s,xc,Sc,yc,Jg);if(v){const _=new re;Ti.getBarycoord(Jg,xc,Sc,yc,_),l&&(v.uv=Ti.getInterpolatedAttribute(l,h,m,p,_,new Vt)),u&&(v.uv1=Ti.getInterpolatedAttribute(u,h,m,p,_,new Vt)),d&&(v.normal=Ti.getInterpolatedAttribute(d,h,m,p,_,new re),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new re,materialIndex:0};Ti.getNormal(xc,Sc,yc,S.normal),v.face=S,v.barycoord=_}return v}class Yo extends Ci{constructor(t=1,i=1,s=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],v=[],_=[];let S=0,E=0;R("z","y","x",-1,-1,s,i,t,d,u,0),R("z","y","x",1,-1,s,i,-t,d,u,1),R("x","z","y",1,1,t,s,i,l,d,2),R("x","z","y",1,-1,t,s,-i,l,d,3),R("x","y","z",1,-1,t,i,s,l,u,4),R("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new ma(p,3)),this.setAttribute("normal",new ma(v,3)),this.setAttribute("uv",new ma(_,2));function R(C,y,x,z,P,L,F,B,U,Z,A){const w=L/U,k=F/Z,se=L/2,ie=F/2,pe=B/2,fe=U+1,O=Z+1;let H=0,ae=0;const Me=new re;for(let Se=0;Se<O;Se++){const N=Se*k-ie;for(let ne=0;ne<fe;ne++){const _e=ne*w-se;Me[C]=_e*z,Me[y]=N*P,Me[x]=pe,p.push(Me.x,Me.y,Me.z),Me[C]=0,Me[y]=0,Me[x]=B>0?1:-1,v.push(Me.x,Me.y,Me.z),_.push(ne/U),_.push(1-Se/Z),H+=1}}for(let Se=0;Se<Z;Se++)for(let N=0;N<U;N++){const ne=S+N+fe*Se,_e=S+N+fe*(Se+1),Ae=S+(N+1)+fe*(Se+1),Be=S+(N+1)+fe*Se;m.push(ne,_e,Be),m.push(_e,Ae,Be),ae+=6}h.addGroup(E,ae,A),E+=ae,S+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Lr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function zn(o){const t={};for(let i=0;i<o.length;i++){const s=Lr(o[i]);for(const l in s)t[l]=s[l]}return t}function pM(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function $_(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Et.workingColorSpace}const mM={clone:Lr,merge:zn};var gM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_M=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gi extends jo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gM,this.fragmentShader=_M,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Lr(t.uniforms),this.uniformsGroups=pM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class ev extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qa=new re,$g=new Vt,e_=new Vt;class pi extends ev{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=bh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(nd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bh*2*Math.atan(Math.tan(nd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Qa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qa.x,Qa.y).multiplyScalar(-t/Qa.z),Qa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Qa.x,Qa.y).multiplyScalar(-t/Qa.z)}getViewSize(t,i){return this.getViewBounds(t,$g,e_),i.subVectors(e_,$g)}setViewOffset(t,i,s,l,u,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(nd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*s/p,l*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const br=-90,Tr=1;class vM extends qn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new pi(br,Tr,t,i);l.layers=this.layers,this.add(l);const u=new pi(br,Tr,t,i);u.layers=this.layers,this.add(u);const d=new pi(br,Tr,t,i);d.layers=this.layers,this.add(d);const h=new pi(br,Tr,t,i);h.layers=this.layers,this.add(h);const m=new pi(br,Tr,t,i);m.layers=this.layers,this.add(m);const p=new pi(br,Tr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(t===Fi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Ic)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,v]=this.children,_=t.getRenderTarget(),S=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),R=t.xr.enabled;t.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,u),t.setRenderTarget(s,1,l),t.render(i,d),t.setRenderTarget(s,2,l),t.render(i,h),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=C,t.setRenderTarget(s,5,l),t.render(i,v),t.setRenderTarget(_,S,E),t.xr.enabled=R,s.texture.needsPMREMUpdate=!0}}class tv extends wn{constructor(t=[],i=Ds,s,l,u,d,h,m,p,v){super(t,i,s,l,u,d,h,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nv extends Bi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new tv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Yo(5,5,5),u=new Gi({name:"CubemapFromEquirect",uniforms:Lr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Xn,blending:ha});u.uniforms.tEquirect.value=i;const d=new xa(l,u),h=i.minFilter;return i.minFilter===Cs&&(i.minFilter=On),new vM(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const u=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,l);t.setRenderTarget(u)}}class Tc extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xM={type:"move"};class bd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const C of t.hand.values()){const y=i.getJointPose(C,s),x=this._getHandJoint(p,C);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const v=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],S=v.position.distanceTo(_.position),E=.02,R=.005;p.inputState.pinching&&S>E+R?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=E-R&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(xM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Tc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class Hh{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Lt(t),this.density=i}clone(){return new Hh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class SM extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new va,this.environmentIntensity=1,this.environmentRotation=new va,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class yM extends wn{constructor(t=null,i=1,s=1,l,u,d,h,m,p=Cn,v=Cn,_,S){super(null,d,h,m,p,v,l,u,_,S),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Td=new re,MM=new re,EM=new ut;class Ts{constructor(t=new re(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Td.subVectors(s,i).cross(MM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Td),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||EM.getNormalMatrix(t),l=this.coplanarPoint(Td).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ms=new Gc,bM=new Vt(.5,.5),Ac=new re;class iv{constructor(t=new Ts,i=new Ts,s=new Ts,l=new Ts,u=new Ts,d=new Ts){this.planes=[t,i,s,l,u,d]}set(t,i,s,l,u,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Fi,s=!1){const l=this.planes,u=t.elements,d=u[0],h=u[1],m=u[2],p=u[3],v=u[4],_=u[5],S=u[6],E=u[7],R=u[8],C=u[9],y=u[10],x=u[11],z=u[12],P=u[13],L=u[14],F=u[15];if(l[0].setComponents(p-d,E-v,x-R,F-z).normalize(),l[1].setComponents(p+d,E+v,x+R,F+z).normalize(),l[2].setComponents(p+h,E+_,x+C,F+P).normalize(),l[3].setComponents(p-h,E-_,x-C,F-P).normalize(),s)l[4].setComponents(m,S,y,L).normalize(),l[5].setComponents(p-m,E-S,x-y,F-L).normalize();else if(l[4].setComponents(p-m,E-S,x-y,F-L).normalize(),i===Fi)l[5].setComponents(p+m,E+S,x+y,F+L).normalize();else if(i===Ic)l[5].setComponents(m,S,y,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ms.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ms.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(t){Ms.center.set(0,0,0);const i=bM.distanceTo(t.center);return Ms.radius=.7071067811865476+i,Ms.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Ac.x=l.normal.x>0?t.max.x:t.min.x,Ac.y=l.normal.y>0?t.max.y:t.min.y,Ac.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Ac)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class av extends jo{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const t_=new an,Th=new j_,Rc=new Gc,Cc=new re;class TM extends qn{constructor(t=new Ci,i=new av){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,u=t.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Rc.copy(s.boundingSphere),Rc.applyMatrix4(l),Rc.radius+=u,t.ray.intersectsSphere(Rc)===!1)return;t_.copy(l).invert(),Th.copy(t.ray).applyMatrix4(t_);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=s.index,_=s.attributes.position;if(p!==null){const S=Math.max(0,d.start),E=Math.min(p.count,d.start+d.count);for(let R=S,C=E;R<C;R++){const y=p.getX(R);Cc.fromBufferAttribute(_,y),n_(Cc,y,m,l,t,i,this)}}else{const S=Math.max(0,d.start),E=Math.min(_.count,d.start+d.count);for(let R=S,C=E;R<C;R++)Cc.fromBufferAttribute(_,R),n_(Cc,R,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function n_(o,t,i,s,l,u,d){const h=Th.distanceSqToPoint(o);if(h<i){const m=new re;Th.closestPointToPoint(o,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:d})}}class AM extends wn{constructor(t,i,s,l,u,d,h,m,p){super(t,i,s,l,u,d,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ko extends wn{constructor(t,i,s=Hi,l,u,d,h=Cn,m=Cn,p,v=_a,_=1){if(v!==_a&&v!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:_};super(S,l,u,d,h,m,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Bh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class RM extends ko{constructor(t,i=Hi,s=Ds,l,u,d=Cn,h=Cn,m,p=_a){const v={width:t,height:t,depth:1},_=[v,v,v,v,v,v];super(t,t,i,s,l,u,d,h,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class sv extends wn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Vc extends Ci{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,d=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,v=m+1,_=t/h,S=i/m,E=[],R=[],C=[],y=[];for(let x=0;x<v;x++){const z=x*S-d;for(let P=0;P<p;P++){const L=P*_-u;R.push(L,-z,0),C.push(0,0,1),y.push(P/h),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let z=0;z<h;z++){const P=z+p*x,L=z+p*(x+1),F=z+1+p*(x+1),B=z+1+p*x;E.push(P,L,B),E.push(L,F,B)}this.setIndex(E),this.setAttribute("position",new ma(R,3)),this.setAttribute("normal",new ma(C,3)),this.setAttribute("uv",new ma(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vc(t.width,t.height,t.widthSegments,t.heightSegments)}}class CM extends Gi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wM extends jo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=By,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class DM extends jo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class rv extends ev{constructor(t=-1,i=1,s=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,d=s+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=v*this.view.offsetY,m=h-v*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class NM extends pi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class UM{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function i_(o,t,i,s){const l=LM(s);switch(i){case V_:return o*t;case X_:return o*t/l.components*l.byteLength;case Oh:return o*t/l.components*l.byteLength;case Nr:return o*t*2/l.components*l.byteLength;case Ph:return o*t*2/l.components*l.byteLength;case k_:return o*t*3/l.components*l.byteLength;case Ai:return o*t*4/l.components*l.byteLength;case zh:return o*t*4/l.components*l.byteLength;case Uc:case Lc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Oc:case Pc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case jd:case Zd:return Math.max(o,16)*Math.max(t,8)/4;case Wd:case Yd:return Math.max(o,8)*Math.max(t,8)/2;case Kd:case Qd:case $d:case eh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Jd:case th:case nh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ih:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ah:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case sh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case rh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case oh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case lh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case ch:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case uh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case fh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case dh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case hh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case ph:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case mh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case gh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case _h:case vh:case xh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Sh:case yh:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Mh:case Eh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function LM(o){switch(o){case mi:case I_:return{byteLength:1,components:1};case Ho:case B_:case ga:return{byteLength:2,components:1};case Uh:case Lh:return{byteLength:2,components:4};case Hi:case Nh:case zi:return{byteLength:4,components:1};case H_:case G_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dh}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dh);function ov(){let o=null,t=!1,i=null,s=null;function l(u,d){i(u,d),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function OM(o){const t=new WeakMap;function i(h,m){const p=h.array,v=h.usage,_=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,v),h.onUploadCallback();let E;if(p instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=o.SHORT;else if(p instanceof Uint32Array)E=o.UNSIGNED_INT;else if(p instanceof Int32Array)E=o.INT;else if(p instanceof Int8Array)E=o.BYTE;else if(p instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,m,p){const v=m.array,_=m.updateRanges;if(o.bindBuffer(p,h),_.length===0)o.bufferSubData(p,0,v);else{_.sort((E,R)=>E.start-R.start);let S=0;for(let E=1;E<_.length;E++){const R=_[S],C=_[E];C.start<=R.start+R.count+1?R.count=Math.max(R.count,C.start+C.count-R.start):(++S,_[S]=C)}_.length=S+1;for(let E=0,R=_.length;E<R;E++){const C=_[E];o.bufferSubData(p,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(o.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=t.get(h);(!v||v.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var PM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,FM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,IM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,HM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,GM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,VM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,XM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,WM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,YM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ZM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,KM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,QM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,JM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$M=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,iE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,aE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,oE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fE="gl_FragColor = linearToOutputTexel( gl_FragColor );",dE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,mE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_E=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,SE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ME=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,EE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,TE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,AE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,RE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,CE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,LE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,OE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,PE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,FE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,IE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,GE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,VE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,XE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,WE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,YE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ZE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,QE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$E=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,eb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ib=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ab=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ob=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ub=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,db=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,_b=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,xb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Mb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Eb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ab=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Db=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ub=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Lb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ob=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ib=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Gb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Vb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Xb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Zb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$b=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,t1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,n1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,s1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,c1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,u1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,d1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,h1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:PM,alphahash_pars_fragment:zM,alphamap_fragment:FM,alphamap_pars_fragment:IM,alphatest_fragment:BM,alphatest_pars_fragment:HM,aomap_fragment:GM,aomap_pars_fragment:VM,batching_pars_vertex:kM,batching_vertex:XM,begin_vertex:qM,beginnormal_vertex:WM,bsdfs:jM,iridescence_fragment:YM,bumpmap_pars_fragment:ZM,clipping_planes_fragment:KM,clipping_planes_pars_fragment:QM,clipping_planes_pars_vertex:JM,clipping_planes_vertex:$M,color_fragment:eE,color_pars_fragment:tE,color_pars_vertex:nE,color_vertex:iE,common:aE,cube_uv_reflection_fragment:sE,defaultnormal_vertex:rE,displacementmap_pars_vertex:oE,displacementmap_vertex:lE,emissivemap_fragment:cE,emissivemap_pars_fragment:uE,colorspace_fragment:fE,colorspace_pars_fragment:dE,envmap_fragment:hE,envmap_common_pars_fragment:pE,envmap_pars_fragment:mE,envmap_pars_vertex:gE,envmap_physical_pars_fragment:RE,envmap_vertex:_E,fog_vertex:vE,fog_pars_vertex:xE,fog_fragment:SE,fog_pars_fragment:yE,gradientmap_pars_fragment:ME,lightmap_pars_fragment:EE,lights_lambert_fragment:bE,lights_lambert_pars_fragment:TE,lights_pars_begin:AE,lights_toon_fragment:CE,lights_toon_pars_fragment:wE,lights_phong_fragment:DE,lights_phong_pars_fragment:NE,lights_physical_fragment:UE,lights_physical_pars_fragment:LE,lights_fragment_begin:OE,lights_fragment_maps:PE,lights_fragment_end:zE,logdepthbuf_fragment:FE,logdepthbuf_pars_fragment:IE,logdepthbuf_pars_vertex:BE,logdepthbuf_vertex:HE,map_fragment:GE,map_pars_fragment:VE,map_particle_fragment:kE,map_particle_pars_fragment:XE,metalnessmap_fragment:qE,metalnessmap_pars_fragment:WE,morphinstance_vertex:jE,morphcolor_vertex:YE,morphnormal_vertex:ZE,morphtarget_pars_vertex:KE,morphtarget_vertex:QE,normal_fragment_begin:JE,normal_fragment_maps:$E,normal_pars_fragment:eb,normal_pars_vertex:tb,normal_vertex:nb,normalmap_pars_fragment:ib,clearcoat_normal_fragment_begin:ab,clearcoat_normal_fragment_maps:sb,clearcoat_pars_fragment:rb,iridescence_pars_fragment:ob,opaque_fragment:lb,packing:cb,premultiplied_alpha_fragment:ub,project_vertex:fb,dithering_fragment:db,dithering_pars_fragment:hb,roughnessmap_fragment:pb,roughnessmap_pars_fragment:mb,shadowmap_pars_fragment:gb,shadowmap_pars_vertex:_b,shadowmap_vertex:vb,shadowmask_pars_fragment:xb,skinbase_vertex:Sb,skinning_pars_vertex:yb,skinning_vertex:Mb,skinnormal_vertex:Eb,specularmap_fragment:bb,specularmap_pars_fragment:Tb,tonemapping_fragment:Ab,tonemapping_pars_fragment:Rb,transmission_fragment:Cb,transmission_pars_fragment:wb,uv_pars_fragment:Db,uv_pars_vertex:Nb,uv_vertex:Ub,worldpos_vertex:Lb,background_vert:Ob,background_frag:Pb,backgroundCube_vert:zb,backgroundCube_frag:Fb,cube_vert:Ib,cube_frag:Bb,depth_vert:Hb,depth_frag:Gb,distance_vert:Vb,distance_frag:kb,equirect_vert:Xb,equirect_frag:qb,linedashed_vert:Wb,linedashed_frag:jb,meshbasic_vert:Yb,meshbasic_frag:Zb,meshlambert_vert:Kb,meshlambert_frag:Qb,meshmatcap_vert:Jb,meshmatcap_frag:$b,meshnormal_vert:e1,meshnormal_frag:t1,meshphong_vert:n1,meshphong_frag:i1,meshphysical_vert:a1,meshphysical_frag:s1,meshtoon_vert:r1,meshtoon_frag:o1,points_vert:l1,points_frag:c1,shadow_vert:u1,shadow_frag:f1,sprite_vert:d1,sprite_frag:h1},Oe={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Pi={basic:{uniforms:zn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:zn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Lt(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:zn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:zn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:zn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Lt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:zn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:zn([Oe.points,Oe.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:zn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:zn([Oe.common,Oe.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:zn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:zn([Oe.sprite,Oe.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:zn([Oe.common,Oe.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:zn([Oe.lights,Oe.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Pi.physical={uniforms:zn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const wc={r:0,b:0,g:0},Es=new va,p1=new an;function m1(o,t,i,s,l,u,d){const h=new Lt(0);let m=u===!0?0:1,p,v,_=null,S=0,E=null;function R(P){let L=P.isScene===!0?P.background:null;return L&&L.isTexture&&(L=(P.backgroundBlurriness>0?i:t).get(L)),L}function C(P){let L=!1;const F=R(P);F===null?x(h,m):F&&F.isColor&&(x(F,1),L=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?s.buffers.color.setClear(0,0,0,1,d):B==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(o.autoClear||L)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(P,L){const F=R(L);F&&(F.isCubeTexture||F.mapping===Hc)?(v===void 0&&(v=new xa(new Yo(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:Lr(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(B,U,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Es.copy(L.backgroundRotation),Es.x*=-1,Es.y*=-1,Es.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),v.material.uniforms.envMap.value=F,v.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(p1.makeRotationFromEuler(Es)),v.material.toneMapped=Et.getTransfer(F.colorSpace)!==It,(_!==F||S!==F.version||E!==o.toneMapping)&&(v.material.needsUpdate=!0,_=F,S=F.version,E=o.toneMapping),v.layers.enableAll(),P.unshift(v,v.geometry,v.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new xa(new Vc(2,2),new Gi({name:"BackgroundMaterial",uniforms:Lr(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=Et.getTransfer(F.colorSpace)!==It,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(_!==F||S!==F.version||E!==o.toneMapping)&&(p.material.needsUpdate=!0,_=F,S=F.version,E=o.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function x(P,L){P.getRGB(wc,$_(o)),s.buffers.color.setClear(wc.r,wc.g,wc.b,L,d)}function z(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(P,L=1){h.set(P),m=L,x(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(P){m=P,x(h,m)},render:C,addToRenderList:y,dispose:z}}function g1(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=S(null);let u=l,d=!1;function h(w,k,se,ie,pe){let fe=!1;const O=_(ie,se,k);u!==O&&(u=O,p(u.object)),fe=E(w,ie,se,pe),fe&&R(w,ie,se,pe),pe!==null&&t.update(pe,o.ELEMENT_ARRAY_BUFFER),(fe||d)&&(d=!1,L(w,k,se,ie),pe!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(pe).buffer))}function m(){return o.createVertexArray()}function p(w){return o.bindVertexArray(w)}function v(w){return o.deleteVertexArray(w)}function _(w,k,se){const ie=se.wireframe===!0;let pe=s[w.id];pe===void 0&&(pe={},s[w.id]=pe);let fe=pe[k.id];fe===void 0&&(fe={},pe[k.id]=fe);let O=fe[ie];return O===void 0&&(O=S(m()),fe[ie]=O),O}function S(w){const k=[],se=[],ie=[];for(let pe=0;pe<i;pe++)k[pe]=0,se[pe]=0,ie[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:se,attributeDivisors:ie,object:w,attributes:{},index:null}}function E(w,k,se,ie){const pe=u.attributes,fe=k.attributes;let O=0;const H=se.getAttributes();for(const ae in H)if(H[ae].location>=0){const Se=pe[ae];let N=fe[ae];if(N===void 0&&(ae==="instanceMatrix"&&w.instanceMatrix&&(N=w.instanceMatrix),ae==="instanceColor"&&w.instanceColor&&(N=w.instanceColor)),Se===void 0||Se.attribute!==N||N&&Se.data!==N.data)return!0;O++}return u.attributesNum!==O||u.index!==ie}function R(w,k,se,ie){const pe={},fe=k.attributes;let O=0;const H=se.getAttributes();for(const ae in H)if(H[ae].location>=0){let Se=fe[ae];Se===void 0&&(ae==="instanceMatrix"&&w.instanceMatrix&&(Se=w.instanceMatrix),ae==="instanceColor"&&w.instanceColor&&(Se=w.instanceColor));const N={};N.attribute=Se,Se&&Se.data&&(N.data=Se.data),pe[ae]=N,O++}u.attributes=pe,u.attributesNum=O,u.index=ie}function C(){const w=u.newAttributes;for(let k=0,se=w.length;k<se;k++)w[k]=0}function y(w){x(w,0)}function x(w,k){const se=u.newAttributes,ie=u.enabledAttributes,pe=u.attributeDivisors;se[w]=1,ie[w]===0&&(o.enableVertexAttribArray(w),ie[w]=1),pe[w]!==k&&(o.vertexAttribDivisor(w,k),pe[w]=k)}function z(){const w=u.newAttributes,k=u.enabledAttributes;for(let se=0,ie=k.length;se<ie;se++)k[se]!==w[se]&&(o.disableVertexAttribArray(se),k[se]=0)}function P(w,k,se,ie,pe,fe,O){O===!0?o.vertexAttribIPointer(w,k,se,pe,fe):o.vertexAttribPointer(w,k,se,ie,pe,fe)}function L(w,k,se,ie){C();const pe=ie.attributes,fe=se.getAttributes(),O=k.defaultAttributeValues;for(const H in fe){const ae=fe[H];if(ae.location>=0){let Me=pe[H];if(Me===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(Me=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(Me=w.instanceColor)),Me!==void 0){const Se=Me.normalized,N=Me.itemSize,ne=t.get(Me);if(ne===void 0)continue;const _e=ne.buffer,Ae=ne.type,Be=ne.bytesPerElement,te=Ae===o.INT||Ae===o.UNSIGNED_INT||Me.gpuType===Nh;if(Me.isInterleavedBufferAttribute){const ue=Me.data,De=ue.stride,ke=Me.offset;if(ue.isInstancedInterleavedBuffer){for(let He=0;He<ae.locationSize;He++)x(ae.location+He,ue.meshPerAttribute);w.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let He=0;He<ae.locationSize;He++)y(ae.location+He);o.bindBuffer(o.ARRAY_BUFFER,_e);for(let He=0;He<ae.locationSize;He++)P(ae.location+He,N/ae.locationSize,Ae,Se,De*Be,(ke+N/ae.locationSize*He)*Be,te)}else{if(Me.isInstancedBufferAttribute){for(let ue=0;ue<ae.locationSize;ue++)x(ae.location+ue,Me.meshPerAttribute);w.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let ue=0;ue<ae.locationSize;ue++)y(ae.location+ue);o.bindBuffer(o.ARRAY_BUFFER,_e);for(let ue=0;ue<ae.locationSize;ue++)P(ae.location+ue,N/ae.locationSize,Ae,Se,N*Be,N/ae.locationSize*ue*Be,te)}}else if(O!==void 0){const Se=O[H];if(Se!==void 0)switch(Se.length){case 2:o.vertexAttrib2fv(ae.location,Se);break;case 3:o.vertexAttrib3fv(ae.location,Se);break;case 4:o.vertexAttrib4fv(ae.location,Se);break;default:o.vertexAttrib1fv(ae.location,Se)}}}}z()}function F(){Z();for(const w in s){const k=s[w];for(const se in k){const ie=k[se];for(const pe in ie)v(ie[pe].object),delete ie[pe];delete k[se]}delete s[w]}}function B(w){if(s[w.id]===void 0)return;const k=s[w.id];for(const se in k){const ie=k[se];for(const pe in ie)v(ie[pe].object),delete ie[pe];delete k[se]}delete s[w.id]}function U(w){for(const k in s){const se=s[k];if(se[w.id]===void 0)continue;const ie=se[w.id];for(const pe in ie)v(ie[pe].object),delete ie[pe];delete se[w.id]}}function Z(){A(),d=!0,u!==l&&(u=l,p(u.object))}function A(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Z,resetDefaultState:A,dispose:F,releaseStatesOfGeometry:B,releaseStatesOfProgram:U,initAttributes:C,enableAttribute:y,disableUnusedAttributes:z}}function _1(o,t,i){let s;function l(p){s=p}function u(p,v){o.drawArrays(s,p,v),i.update(v,s,1)}function d(p,v,_){_!==0&&(o.drawArraysInstanced(s,p,v,_),i.update(v,s,_))}function h(p,v,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,v,0,_);let E=0;for(let R=0;R<_;R++)E+=v[R];i.update(E,s,1)}function m(p,v,_,S){if(_===0)return;const E=t.get("WEBGL_multi_draw");if(E===null)for(let R=0;R<p.length;R++)d(p[R],v[R],S[R]);else{E.multiDrawArraysInstancedWEBGL(s,p,0,v,0,S,0,_);let R=0;for(let C=0;C<_;C++)R+=v[C]*S[C];i.update(R,s,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function v1(o,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const U=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(U){return!(U!==Ai&&s.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(U){const Z=U===ga&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==mi&&s.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==zi&&!Z)}function m(U){if(U==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(st("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const _=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),z=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),L=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),F=o.getParameter(o.MAX_SAMPLES),B=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:S,maxTextures:E,maxVertexTextures:R,maxTextureSize:C,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:z,maxVaryings:P,maxFragmentUniforms:L,maxSamples:F,samples:B}}function x1(o){const t=this;let i=null,s=0,l=!1,u=!1;const d=new Ts,h=new ut,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const E=_.length!==0||S||s!==0||l;return l=S,s=_.length,E},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,S){i=v(_,S,0)},this.setState=function(_,S,E){const R=_.clippingPlanes,C=_.clipIntersection,y=_.clipShadows,x=o.get(_);if(!l||R===null||R.length===0||u&&!y)u?v(null):p();else{const z=u?0:s,P=z*4;let L=x.clippingState||null;m.value=L,L=v(R,S,P,E);for(let F=0;F!==P;++F)L[F]=i[F];x.clippingState=L,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=z}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(_,S,E,R){const C=_!==null?_.length:0;let y=null;if(C!==0){if(y=m.value,R!==!0||y===null){const x=E+C*4,z=S.matrixWorldInverse;h.getNormalMatrix(z),(y===null||y.length<x)&&(y=new Float32Array(x));for(let P=0,L=E;P!==C;++P,L+=4)d.copy(_[P]).applyMatrix4(z,h),d.normal.toArray(y,L),y[L+3]=d.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,y}}function S1(o){let t=new WeakMap;function i(d,h){return h===Vd?d.mapping=Ds:h===kd&&(d.mapping=Dr),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===Vd||h===kd)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new nv(m.height);return p.fromEquirectangularTexture(o,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const $a=4,a_=[.125,.215,.35,.446,.526,.582],Rs=20,y1=256,zo=new rv,s_=new Lt;let Ad=null,Rd=0,Cd=0,wd=!1;const M1=new re;class r_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,u={}){const{size:d=256,position:h=M1}=u;Ad=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),Cd=this._renderer.getActiveMipmapLevel(),wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=c_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=l_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ad,Rd,Cd),this._renderer.xr.enabled=wd,t.scissorTest=!1,Ar(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ds||t.mapping===Dr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ad=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),Cd=this._renderer.getActiveMipmapLevel(),wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:On,minFilter:On,generateMipmaps:!1,type:ga,format:Ai,colorSpace:Ur,depthBuffer:!1},l=o_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=o_(t,i,s);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=E1(u)),this._blurMaterial=T1(u,t,i),this._ggxMaterial=b1(u,t,i)}return l}_compileMaterial(t){const i=new xa(new Ci,t);this._renderer.compile(i,zo)}_sceneToCubeUV(t,i,s,l,u){const m=new pi(90,1,i,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,E=_.toneMapping;_.getClearColor(s_),_.toneMapping=Ii,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xa(new Yo,new K_({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let x=!1;const z=t.background;z?z.isColor&&(y.color.copy(z),t.background=null,x=!0):(y.color.copy(s_),x=!0);for(let P=0;P<6;P++){const L=P%3;L===0?(m.up.set(0,p[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+v[P],u.y,u.z)):L===1?(m.up.set(0,0,p[P]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+v[P],u.z)):(m.up.set(0,p[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+v[P]));const F=this._cubeSize;Ar(l,L*F,P>2?F:0,F,F),_.setRenderTarget(l),x&&_.render(C,m),_.render(t,m)}_.toneMapping=E,_.autoClear=S,t.background=z}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Ds||t.mapping===Dr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=c_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=l_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const h=u.uniforms;h.envMap.value=t;const m=this._cubeSize;Ar(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,zo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,u=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const m=d.uniforms,p=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-v*v),S=0+p*1.25,E=_*S,{_lodMax:R}=this,C=this._sizeLods[s],y=3*C*(s>R-$a?s-R+$a:0),x=4*(this._cubeSize-C);m.envMap.value=t.texture,m.roughness.value=E,m.mipInt.value=R-i,Ar(u,y,x,3*C,2*C),l.setRenderTarget(u),l.render(h,zo),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=R-s,Ar(t,y,x,3*C,2*C),l.setRenderTarget(t),l.render(h,zo)}_blur(t,i,s,l,u){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,s,l,"latitudinal",u),this._halfBlur(d,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&At("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[l];_.material=p;const S=p.uniforms,E=this._sizeLods[s]-1,R=isFinite(u)?Math.PI/(2*E):2*Math.PI/(2*Rs-1),C=u/R,y=isFinite(u)?1+Math.floor(v*C):Rs;y>Rs&&st(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Rs}`);const x=[];let z=0;for(let U=0;U<Rs;++U){const Z=U/C,A=Math.exp(-Z*Z/2);x.push(A),U===0?z+=A:U<y&&(z+=2*A)}for(let U=0;U<x.length;U++)x[U]=x[U]/z;S.envMap.value=t.texture,S.samples.value=y,S.weights.value=x,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:P}=this;S.dTheta.value=R,S.mipInt.value=P-s;const L=this._sizeLods[l],F=3*L*(l>P-$a?l-P+$a:0),B=4*(this._cubeSize-L);Ar(i,F,B,3*L,2*L),m.setRenderTarget(i),m.render(_,zo)}}function E1(o){const t=[],i=[],s=[];let l=o;const u=o-$a+1+a_.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);t.push(h);let m=1/h;d>o-$a?m=a_[d-o+$a-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),v=-p,_=1+p,S=[v,v,_,v,_,_,v,v,_,_,v,_],E=6,R=6,C=3,y=2,x=1,z=new Float32Array(C*R*E),P=new Float32Array(y*R*E),L=new Float32Array(x*R*E);for(let B=0;B<E;B++){const U=B%3*2/3-1,Z=B>2?0:-1,A=[U,Z,0,U+2/3,Z,0,U+2/3,Z+1,0,U,Z,0,U+2/3,Z+1,0,U,Z+1,0];z.set(A,C*R*B),P.set(S,y*R*B);const w=[B,B,B,B,B,B];L.set(w,x*R*B)}const F=new Ci;F.setAttribute("position",new Ri(z,C)),F.setAttribute("uv",new Ri(P,y)),F.setAttribute("faceIndex",new Ri(L,x)),s.push(new xa(F,null)),l>$a&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function o_(o,t,i){const s=new Bi(o,t,i);return s.texture.mapping=Hc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ar(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function b1(o,t,i){return new Gi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:y1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ha,depthTest:!1,depthWrite:!1})}function T1(o,t,i){const s=new Float32Array(Rs),l=new re(0,1,0);return new Gi({name:"SphericalGaussianBlur",defines:{n:Rs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ha,depthTest:!1,depthWrite:!1})}function l_(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ha,depthTest:!1,depthWrite:!1})}function c_(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ha,depthTest:!1,depthWrite:!1})}function kc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function A1(o){let t=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===Vd||m===kd,v=m===Ds||m===Dr;if(p||v){let _=t.get(h);const S=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new r_(o)),_=p?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const E=h.image;return p&&E&&E.height>0||v&&E&&l(E)?(i===null&&(i=new r_(o)),_=p?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",u),_.texture):null}}}return h}function l(h){let m=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function R1(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Vo("WebGLRenderer: "+s+" extension not supported."),l}}}function C1(o,t,i,s){const l={},u=new WeakMap;function d(_){const S=_.target;S.index!==null&&t.remove(S.index);for(const R in S.attributes)t.remove(S.attributes[R]);S.removeEventListener("dispose",d),delete l[S.id];const E=u.get(S);E&&(t.remove(E),u.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(_,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function m(_){const S=_.attributes;for(const E in S)t.update(S[E],o.ARRAY_BUFFER)}function p(_){const S=[],E=_.index,R=_.attributes.position;let C=0;if(E!==null){const z=E.array;C=E.version;for(let P=0,L=z.length;P<L;P+=3){const F=z[P+0],B=z[P+1],U=z[P+2];S.push(F,B,B,U,U,F)}}else if(R!==void 0){const z=R.array;C=R.version;for(let P=0,L=z.length/3-1;P<L;P+=3){const F=P+0,B=P+1,U=P+2;S.push(F,B,B,U,U,F)}}else return;const y=new(q_(S)?J_:Q_)(S,1);y.version=C;const x=u.get(_);x&&t.remove(x),u.set(_,y)}function v(_){const S=u.get(_);if(S){const E=_.index;E!==null&&S.version<E.version&&p(_)}else p(_);return u.get(_)}return{get:h,update:m,getWireframeAttribute:v}}function w1(o,t,i){let s;function l(S){s=S}let u,d;function h(S){u=S.type,d=S.bytesPerElement}function m(S,E){o.drawElements(s,E,u,S*d),i.update(E,s,1)}function p(S,E,R){R!==0&&(o.drawElementsInstanced(s,E,u,S*d,R),i.update(E,s,R))}function v(S,E,R){if(R===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,E,0,u,S,0,R);let y=0;for(let x=0;x<R;x++)y+=E[x];i.update(y,s,1)}function _(S,E,R,C){if(R===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<S.length;x++)p(S[x]/d,E[x],C[x]);else{y.multiDrawElementsInstancedWEBGL(s,E,0,u,S,0,C,0,R);let x=0;for(let z=0;z<R;z++)x+=E[z]*C[z];i.update(x,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function D1(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:At("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function N1(o,t,i){const s=new WeakMap,l=new nn;function u(d,h,m){const p=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=v!==void 0?v.length:0;let S=s.get(h);if(S===void 0||S.count!==_){let w=function(){Z.dispose(),s.delete(h),h.removeEventListener("dispose",w)};var E=w;S!==void 0&&S.texture.dispose();const R=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],z=h.morphAttributes.normal||[],P=h.morphAttributes.color||[];let L=0;R===!0&&(L=1),C===!0&&(L=2),y===!0&&(L=3);let F=h.attributes.position.count*L,B=1;F>t.maxTextureSize&&(B=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const U=new Float32Array(F*B*4*_),Z=new W_(U,F,B,_);Z.type=zi,Z.needsUpdate=!0;const A=L*4;for(let k=0;k<_;k++){const se=x[k],ie=z[k],pe=P[k],fe=F*B*4*k;for(let O=0;O<se.count;O++){const H=O*A;R===!0&&(l.fromBufferAttribute(se,O),U[fe+H+0]=l.x,U[fe+H+1]=l.y,U[fe+H+2]=l.z,U[fe+H+3]=0),C===!0&&(l.fromBufferAttribute(ie,O),U[fe+H+4]=l.x,U[fe+H+5]=l.y,U[fe+H+6]=l.z,U[fe+H+7]=0),y===!0&&(l.fromBufferAttribute(pe,O),U[fe+H+8]=l.x,U[fe+H+9]=l.y,U[fe+H+10]=l.z,U[fe+H+11]=pe.itemSize===4?l.w:1)}}S={count:_,texture:Z,size:new Vt(F,B)},s.set(h,S),h.addEventListener("dispose",w)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let R=0;for(let y=0;y<p.length;y++)R+=p[y];const C=h.morphTargetsRelative?1:1-R;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function U1(o,t,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,v=m.geometry,_=t.get(m,v);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return _}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const L1={[D_]:"LINEAR_TONE_MAPPING",[N_]:"REINHARD_TONE_MAPPING",[U_]:"CINEON_TONE_MAPPING",[L_]:"ACES_FILMIC_TONE_MAPPING",[P_]:"AGX_TONE_MAPPING",[z_]:"NEUTRAL_TONE_MAPPING",[O_]:"CUSTOM_TONE_MAPPING"};function O1(o,t,i,s,l){const u=new Bi(t,i,{type:o,depthBuffer:s,stencilBuffer:l}),d=new Bi(t,i,{type:ga,depthBuffer:!1,stencilBuffer:!1}),h=new Ci;h.setAttribute("position",new ma([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ma([0,2,0,0,2,0],2));const m=new CM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new xa(h,m),v=new rv(-1,1,1,-1,0,1);let _=null,S=null,E=!1,R,C=null,y=[],x=!1;this.setSize=function(z,P){u.setSize(z,P),d.setSize(z,P);for(let L=0;L<y.length;L++){const F=y[L];F.setSize&&F.setSize(z,P)}},this.setEffects=function(z){y=z,x=y.length>0&&y[0].isRenderPass===!0;const P=u.width,L=u.height;for(let F=0;F<y.length;F++){const B=y[F];B.setSize&&B.setSize(P,L)}},this.begin=function(z,P){if(E||z.toneMapping===Ii&&y.length===0)return!1;if(C=P,P!==null){const L=P.width,F=P.height;(u.width!==L||u.height!==F)&&this.setSize(L,F)}return x===!1&&z.setRenderTarget(u),R=z.toneMapping,z.toneMapping=Ii,!0},this.hasRenderPass=function(){return x},this.end=function(z,P){z.toneMapping=R,E=!0;let L=u,F=d;for(let B=0;B<y.length;B++){const U=y[B];if(U.enabled!==!1&&(U.render(z,F,L,P),U.needsSwap!==!1)){const Z=L;L=F,F=Z}}if(_!==z.outputColorSpace||S!==z.toneMapping){_=z.outputColorSpace,S=z.toneMapping,m.defines={},Et.getTransfer(_)===It&&(m.defines.SRGB_TRANSFER="");const B=L1[S];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,z.setRenderTarget(C),z.render(p,v),C=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){u.dispose(),d.dispose(),h.dispose(),m.dispose()}}const lv=new wn,Ah=new ko(1,1),cv=new W_,uv=new nM,fv=new tv,u_=[],f_=[],d_=new Float32Array(16),h_=new Float32Array(9),p_=new Float32Array(4);function Pr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let u=u_[l];if(u===void 0&&(u=new Float32Array(l),u_[l]=u),t!==0){s.toArray(u,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(u,h)}return u}function hn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function pn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Xc(o,t){let i=f_[t];i===void 0&&(i=new Int32Array(t),f_[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function P1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function z1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2fv(this.addr,t),pn(i,t)}}function F1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(hn(i,t))return;o.uniform3fv(this.addr,t),pn(i,t)}}function I1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4fv(this.addr,t),pn(i,t)}}function B1(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(hn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),pn(i,t)}else{if(hn(i,s))return;p_.set(s),o.uniformMatrix2fv(this.addr,!1,p_),pn(i,s)}}function H1(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(hn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),pn(i,t)}else{if(hn(i,s))return;h_.set(s),o.uniformMatrix3fv(this.addr,!1,h_),pn(i,s)}}function G1(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(hn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),pn(i,t)}else{if(hn(i,s))return;d_.set(s),o.uniformMatrix4fv(this.addr,!1,d_),pn(i,s)}}function V1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function k1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2iv(this.addr,t),pn(i,t)}}function X1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;o.uniform3iv(this.addr,t),pn(i,t)}}function q1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4iv(this.addr,t),pn(i,t)}}function W1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function j1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2uiv(this.addr,t),pn(i,t)}}function Y1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;o.uniform3uiv(this.addr,t),pn(i,t)}}function Z1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4uiv(this.addr,t),pn(i,t)}}function K1(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Ah.compareFunction=i.isReversedDepthBuffer()?Ih:Fh,u=Ah):u=lv,i.setTexture2D(t||u,l)}function Q1(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||uv,l)}function J1(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||fv,l)}function $1(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||cv,l)}function eT(o){switch(o){case 5126:return P1;case 35664:return z1;case 35665:return F1;case 35666:return I1;case 35674:return B1;case 35675:return H1;case 35676:return G1;case 5124:case 35670:return V1;case 35667:case 35671:return k1;case 35668:case 35672:return X1;case 35669:case 35673:return q1;case 5125:return W1;case 36294:return j1;case 36295:return Y1;case 36296:return Z1;case 35678:case 36198:case 36298:case 36306:case 35682:return K1;case 35679:case 36299:case 36307:return Q1;case 35680:case 36300:case 36308:case 36293:return J1;case 36289:case 36303:case 36311:case 36292:return $1}}function tT(o,t){o.uniform1fv(this.addr,t)}function nT(o,t){const i=Pr(t,this.size,2);o.uniform2fv(this.addr,i)}function iT(o,t){const i=Pr(t,this.size,3);o.uniform3fv(this.addr,i)}function aT(o,t){const i=Pr(t,this.size,4);o.uniform4fv(this.addr,i)}function sT(o,t){const i=Pr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function rT(o,t){const i=Pr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function oT(o,t){const i=Pr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function lT(o,t){o.uniform1iv(this.addr,t)}function cT(o,t){o.uniform2iv(this.addr,t)}function uT(o,t){o.uniform3iv(this.addr,t)}function fT(o,t){o.uniform4iv(this.addr,t)}function dT(o,t){o.uniform1uiv(this.addr,t)}function hT(o,t){o.uniform2uiv(this.addr,t)}function pT(o,t){o.uniform3uiv(this.addr,t)}function mT(o,t){o.uniform4uiv(this.addr,t)}function gT(o,t,i){const s=this.cache,l=t.length,u=Xc(i,l);hn(s,u)||(o.uniform1iv(this.addr,u),pn(s,u));let d;this.type===o.SAMPLER_2D_SHADOW?d=Ah:d=lv;for(let h=0;h!==l;++h)i.setTexture2D(t[h]||d,u[h])}function _T(o,t,i){const s=this.cache,l=t.length,u=Xc(i,l);hn(s,u)||(o.uniform1iv(this.addr,u),pn(s,u));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||uv,u[d])}function vT(o,t,i){const s=this.cache,l=t.length,u=Xc(i,l);hn(s,u)||(o.uniform1iv(this.addr,u),pn(s,u));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||fv,u[d])}function xT(o,t,i){const s=this.cache,l=t.length,u=Xc(i,l);hn(s,u)||(o.uniform1iv(this.addr,u),pn(s,u));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||cv,u[d])}function ST(o){switch(o){case 5126:return tT;case 35664:return nT;case 35665:return iT;case 35666:return aT;case 35674:return sT;case 35675:return rT;case 35676:return oT;case 5124:case 35670:return lT;case 35667:case 35671:return cT;case 35668:case 35672:return uT;case 35669:case 35673:return fT;case 5125:return dT;case 36294:return hT;case 36295:return pT;case 36296:return mT;case 35678:case 36198:case 36298:case 36306:case 35682:return gT;case 35679:case 36299:case 36307:return _T;case 35680:case 36300:case 36308:case 36293:return vT;case 36289:case 36303:case 36311:case 36292:return xT}}class yT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=eT(i.type)}}class MT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=ST(i.type)}}class ET{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(t,i[h.id],s)}}}const Dd=/(\w+)(\])?(\[|\.)?/g;function m_(o,t){o.seq.push(t),o.map[t.id]=t}function bT(o,t,i){const s=o.name,l=s.length;for(Dd.lastIndex=0;;){const u=Dd.exec(s),d=Dd.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){m_(i,p===void 0?new yT(h,o,t):new MT(h,o,t));break}else{let _=i.map[h];_===void 0&&(_=new ET(h),m_(i,_)),i=_}}}class zc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=t.getActiveUniform(i,d),m=t.getUniformLocation(i,h.name);bT(h,m,this)}const l=[],u=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):u.push(d);l.length>0&&(this.seq=l.concat(u))}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const d=t[l];d.id in i&&s.push(d)}return s}}function g_(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const TT=37297;let AT=0;function RT(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let d=l;d<u;d++){const h=d+1;s.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const __=new ut;function CT(o){Et._getMatrix(__,Et.workingColorSpace,o);const t=`mat3( ${__.elements.map(i=>i.toFixed(4))} )`;switch(Et.getTransfer(o)){case Fc:return[t,"LinearTransferOETF"];case It:return[t,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function v_(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(s&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+RT(o.getShaderSource(t),h)}else return u}function wT(o,t){const i=CT(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const DT={[D_]:"Linear",[N_]:"Reinhard",[U_]:"Cineon",[L_]:"ACESFilmic",[P_]:"AgX",[z_]:"Neutral",[O_]:"Custom"};function NT(o,t){const i=DT[t];return i===void 0?(st("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Dc=new re;function UT(){Et.getLuminanceCoefficients(Dc);const o=Dc.x.toFixed(4),t=Dc.y.toFixed(4),i=Dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function LT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function OT(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function PT(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(t,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function Bo(o){return o!==""}function x_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function S_(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const zT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rh(o){return o.replace(zT,IT)}const FT=new Map;function IT(o,t){let i=ft[t];if(i===void 0){const s=FT.get(t);if(s!==void 0)i=ft[s],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Rh(i)}const BT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function y_(o){return o.replace(BT,HT)}function HT(o,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function M_(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const GT={[Nc]:"SHADOWMAP_TYPE_PCF",[Io]:"SHADOWMAP_TYPE_VSM"};function VT(o){return GT[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const kT={[Ds]:"ENVMAP_TYPE_CUBE",[Dr]:"ENVMAP_TYPE_CUBE",[Hc]:"ENVMAP_TYPE_CUBE_UV"};function XT(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":kT[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const qT={[Dr]:"ENVMAP_MODE_REFRACTION"};function WT(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":qT[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const jT={[w_]:"ENVMAP_BLENDING_MULTIPLY",[zy]:"ENVMAP_BLENDING_MIX",[Fy]:"ENVMAP_BLENDING_ADD"};function YT(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":jT[o.combine]||"ENVMAP_BLENDING_NONE"}function ZT(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function KT(o,t,i,s){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=VT(i),p=XT(i),v=WT(i),_=YT(i),S=ZT(i),E=LT(i),R=OT(u),C=l.createProgram();let y,x,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Bo).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Bo).join(`
`),x.length>0&&(x+=`
`)):(y=[M_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),x=[M_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ii?"#define TONE_MAPPING":"",i.toneMapping!==Ii?ft.tonemapping_pars_fragment:"",i.toneMapping!==Ii?NT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,wT("linearToOutputTexel",i.outputColorSpace),UT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Bo).join(`
`)),d=Rh(d),d=x_(d,i),d=S_(d,i),h=Rh(h),h=x_(h,i),h=S_(h,i),d=y_(d),h=y_(h),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,y=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===zg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===zg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=z+y+d,L=z+x+h,F=g_(l,l.VERTEX_SHADER,P),B=g_(l,l.FRAGMENT_SHADER,L);l.attachShader(C,F),l.attachShader(C,B),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function U(k){if(o.debug.checkShaderErrors){const se=l.getProgramInfoLog(C)||"",ie=l.getShaderInfoLog(F)||"",pe=l.getShaderInfoLog(B)||"",fe=se.trim(),O=ie.trim(),H=pe.trim();let ae=!0,Me=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ae=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,F,B);else{const Se=v_(l,F,"vertex"),N=v_(l,B,"fragment");At("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+fe+`
`+Se+`
`+N)}else fe!==""?st("WebGLProgram: Program Info Log:",fe):(O===""||H==="")&&(Me=!1);Me&&(k.diagnostics={runnable:ae,programLog:fe,vertexShader:{log:O,prefix:y},fragmentShader:{log:H,prefix:x}})}l.deleteShader(F),l.deleteShader(B),Z=new zc(l,C),A=PT(l,C)}let Z;this.getUniforms=function(){return Z===void 0&&U(this),Z};let A;this.getAttributes=function(){return A===void 0&&U(this),A};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(C,TT)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=AT++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=F,this.fragmentShader=B,this}let QT=0;class JT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new $T(t),i.set(t,s)),s}}class $T{constructor(t){this.id=QT++,this.code=t,this.usedTimes=0}}function eA(o,t,i,s,l,u,d){const h=new Y_,m=new JT,p=new Set,v=[],_=new Map,S=l.logarithmicDepthBuffer;let E=l.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(A){return p.add(A),A===0?"uv":`uv${A}`}function y(A,w,k,se,ie){const pe=se.fog,fe=ie.geometry,O=A.isMeshStandardMaterial?se.environment:null,H=(A.isMeshStandardMaterial?i:t).get(A.envMap||O),ae=H&&H.mapping===Hc?H.image.height:null,Me=R[A.type];A.precision!==null&&(E=l.getMaxPrecision(A.precision),E!==A.precision&&st("WebGLProgram.getParameters:",A.precision,"not supported, using",E,"instead."));const Se=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,N=Se!==void 0?Se.length:0;let ne=0;fe.morphAttributes.position!==void 0&&(ne=1),fe.morphAttributes.normal!==void 0&&(ne=2),fe.morphAttributes.color!==void 0&&(ne=3);let _e,Ae,Be,te;if(Me){const Mt=Pi[Me];_e=Mt.vertexShader,Ae=Mt.fragmentShader}else _e=A.vertexShader,Ae=A.fragmentShader,m.update(A),Be=m.getVertexShaderID(A),te=m.getFragmentShaderID(A);const ue=o.getRenderTarget(),De=o.state.buffers.depth.getReversed(),ke=ie.isInstancedMesh===!0,He=ie.isBatchedMesh===!0,dt=!!A.map,Kt=!!A.matcap,gt=!!H,ht=!!A.aoMap,Rt=!!A.lightMap,rt=!!A.bumpMap,Qt=!!A.normalMap,V=!!A.displacementMap,jt=!!A.emissiveMap,yt=!!A.metalnessMap,Nt=!!A.roughnessMap,je=A.anisotropy>0,D=A.clearcoat>0,M=A.dispersion>0,W=A.iridescence>0,he=A.sheen>0,xe=A.transmission>0,ce=je&&!!A.anisotropyMap,Ze=D&&!!A.clearcoatMap,Ce=D&&!!A.clearcoatNormalMap,Xe=D&&!!A.clearcoatRoughnessMap,tt=W&&!!A.iridescenceMap,Ee=W&&!!A.iridescenceThicknessMap,be=he&&!!A.sheenColorMap,Fe=he&&!!A.sheenRoughnessMap,Pe=!!A.specularMap,we=!!A.specularColorMap,lt=!!A.specularIntensityMap,q=xe&&!!A.transmissionMap,Ue=xe&&!!A.thicknessMap,Te=!!A.gradientMap,ze=!!A.alphaMap,ye=A.alphaTest>0,ve=!!A.alphaHash,Re=!!A.extensions;let nt=Ii;A.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(nt=o.toneMapping);const Ot={shaderID:Me,shaderType:A.type,shaderName:A.name,vertexShader:_e,fragmentShader:Ae,defines:A.defines,customVertexShaderID:Be,customFragmentShaderID:te,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:E,batching:He,batchingColor:He&&ie._colorsTexture!==null,instancing:ke,instancingColor:ke&&ie.instanceColor!==null,instancingMorph:ke&&ie.morphTexture!==null,outputColorSpace:ue===null?o.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Ur,alphaToCoverage:!!A.alphaToCoverage,map:dt,matcap:Kt,envMap:gt,envMapMode:gt&&H.mapping,envMapCubeUVHeight:ae,aoMap:ht,lightMap:Rt,bumpMap:rt,normalMap:Qt,displacementMap:V,emissiveMap:jt,normalMapObjectSpace:Qt&&A.normalMapType===Gy,normalMapTangentSpace:Qt&&A.normalMapType===Hy,metalnessMap:yt,roughnessMap:Nt,anisotropy:je,anisotropyMap:ce,clearcoat:D,clearcoatMap:Ze,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Xe,dispersion:M,iridescence:W,iridescenceMap:tt,iridescenceThicknessMap:Ee,sheen:he,sheenColorMap:be,sheenRoughnessMap:Fe,specularMap:Pe,specularColorMap:we,specularIntensityMap:lt,transmission:xe,transmissionMap:q,thicknessMap:Ue,gradientMap:Te,opaque:A.transparent===!1&&A.blending===Rr&&A.alphaToCoverage===!1,alphaMap:ze,alphaTest:ye,alphaHash:ve,combine:A.combine,mapUv:dt&&C(A.map.channel),aoMapUv:ht&&C(A.aoMap.channel),lightMapUv:Rt&&C(A.lightMap.channel),bumpMapUv:rt&&C(A.bumpMap.channel),normalMapUv:Qt&&C(A.normalMap.channel),displacementMapUv:V&&C(A.displacementMap.channel),emissiveMapUv:jt&&C(A.emissiveMap.channel),metalnessMapUv:yt&&C(A.metalnessMap.channel),roughnessMapUv:Nt&&C(A.roughnessMap.channel),anisotropyMapUv:ce&&C(A.anisotropyMap.channel),clearcoatMapUv:Ze&&C(A.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&C(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&C(A.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&C(A.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&C(A.iridescenceThicknessMap.channel),sheenColorMapUv:be&&C(A.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&C(A.sheenRoughnessMap.channel),specularMapUv:Pe&&C(A.specularMap.channel),specularColorMapUv:we&&C(A.specularColorMap.channel),specularIntensityMapUv:lt&&C(A.specularIntensityMap.channel),transmissionMapUv:q&&C(A.transmissionMap.channel),thicknessMapUv:Ue&&C(A.thicknessMap.channel),alphaMapUv:ze&&C(A.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(Qt||je),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:ie.isPoints===!0&&!!fe.attributes.uv&&(dt||ze),fog:!!pe,useFog:A.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:De,skinning:ie.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:ne,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:A.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:nt,decodeVideoTexture:dt&&A.map.isVideoTexture===!0&&Et.getTransfer(A.map.colorSpace)===It,decodeVideoTextureEmissive:jt&&A.emissiveMap.isVideoTexture===!0&&Et.getTransfer(A.emissiveMap.colorSpace)===It,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===fa,flipSided:A.side===Xn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Re&&A.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&A.extensions.multiDraw===!0||He)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ot.vertexUv1s=p.has(1),Ot.vertexUv2s=p.has(2),Ot.vertexUv3s=p.has(3),p.clear(),Ot}function x(A){const w=[];if(A.shaderID?w.push(A.shaderID):(w.push(A.customVertexShaderID),w.push(A.customFragmentShaderID)),A.defines!==void 0)for(const k in A.defines)w.push(k),w.push(A.defines[k]);return A.isRawShaderMaterial===!1&&(z(w,A),P(w,A),w.push(o.outputColorSpace)),w.push(A.customProgramCacheKey),w.join()}function z(A,w){A.push(w.precision),A.push(w.outputColorSpace),A.push(w.envMapMode),A.push(w.envMapCubeUVHeight),A.push(w.mapUv),A.push(w.alphaMapUv),A.push(w.lightMapUv),A.push(w.aoMapUv),A.push(w.bumpMapUv),A.push(w.normalMapUv),A.push(w.displacementMapUv),A.push(w.emissiveMapUv),A.push(w.metalnessMapUv),A.push(w.roughnessMapUv),A.push(w.anisotropyMapUv),A.push(w.clearcoatMapUv),A.push(w.clearcoatNormalMapUv),A.push(w.clearcoatRoughnessMapUv),A.push(w.iridescenceMapUv),A.push(w.iridescenceThicknessMapUv),A.push(w.sheenColorMapUv),A.push(w.sheenRoughnessMapUv),A.push(w.specularMapUv),A.push(w.specularColorMapUv),A.push(w.specularIntensityMapUv),A.push(w.transmissionMapUv),A.push(w.thicknessMapUv),A.push(w.combine),A.push(w.fogExp2),A.push(w.sizeAttenuation),A.push(w.morphTargetsCount),A.push(w.morphAttributeCount),A.push(w.numDirLights),A.push(w.numPointLights),A.push(w.numSpotLights),A.push(w.numSpotLightMaps),A.push(w.numHemiLights),A.push(w.numRectAreaLights),A.push(w.numDirLightShadows),A.push(w.numPointLightShadows),A.push(w.numSpotLightShadows),A.push(w.numSpotLightShadowsWithMaps),A.push(w.numLightProbes),A.push(w.shadowMapType),A.push(w.toneMapping),A.push(w.numClippingPlanes),A.push(w.numClipIntersection),A.push(w.depthPacking)}function P(A,w){h.disableAll(),w.instancing&&h.enable(0),w.instancingColor&&h.enable(1),w.instancingMorph&&h.enable(2),w.matcap&&h.enable(3),w.envMap&&h.enable(4),w.normalMapObjectSpace&&h.enable(5),w.normalMapTangentSpace&&h.enable(6),w.clearcoat&&h.enable(7),w.iridescence&&h.enable(8),w.alphaTest&&h.enable(9),w.vertexColors&&h.enable(10),w.vertexAlphas&&h.enable(11),w.vertexUv1s&&h.enable(12),w.vertexUv2s&&h.enable(13),w.vertexUv3s&&h.enable(14),w.vertexTangents&&h.enable(15),w.anisotropy&&h.enable(16),w.alphaHash&&h.enable(17),w.batching&&h.enable(18),w.dispersion&&h.enable(19),w.batchingColor&&h.enable(20),w.gradientMap&&h.enable(21),A.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reversedDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),A.push(h.mask)}function L(A){const w=R[A.type];let k;if(w){const se=Pi[w];k=mM.clone(se.uniforms)}else k=A.uniforms;return k}function F(A,w){let k=_.get(w);return k!==void 0?++k.usedTimes:(k=new KT(o,w,A,u),v.push(k),_.set(w,k)),k}function B(A){if(--A.usedTimes===0){const w=v.indexOf(A);v[w]=v[v.length-1],v.pop(),_.delete(A.cacheKey),A.destroy()}}function U(A){m.remove(A)}function Z(){m.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:L,acquireProgram:F,releaseProgram:B,releaseShaderCache:U,programs:v,dispose:Z}}function tA(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function nA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function E_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function b_(){const o=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function d(_,S,E,R,C,y){let x=o[t];return x===void 0?(x={id:_.id,object:_,geometry:S,material:E,groupOrder:R,renderOrder:_.renderOrder,z:C,group:y},o[t]=x):(x.id=_.id,x.object=_,x.geometry=S,x.material=E,x.groupOrder=R,x.renderOrder=_.renderOrder,x.z=C,x.group=y),t++,x}function h(_,S,E,R,C,y){const x=d(_,S,E,R,C,y);E.transmission>0?s.push(x):E.transparent===!0?l.push(x):i.push(x)}function m(_,S,E,R,C,y){const x=d(_,S,E,R,C,y);E.transmission>0?s.unshift(x):E.transparent===!0?l.unshift(x):i.unshift(x)}function p(_,S){i.length>1&&i.sort(_||nA),s.length>1&&s.sort(S||E_),l.length>1&&l.sort(S||E_)}function v(){for(let _=t,S=o.length;_<S;_++){const E=o[_];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:h,unshift:m,finish:v,sort:p}}function iA(){let o=new WeakMap;function t(s,l){const u=o.get(s);let d;return u===void 0?(d=new b_,o.set(s,[d])):l>=u.length?(d=new b_,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function aA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new re,color:new Lt};break;case"SpotLight":i={position:new re,direction:new re,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new re,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new re,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":i={color:new Lt,position:new re,halfWidth:new re,halfHeight:new re};break}return o[t.id]=i,i}}}function sA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let rA=0;function oA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function lA(o){const t=new aA,i=sA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new re);const l=new re,u=new an,d=new an;function h(p){let v=0,_=0,S=0;for(let A=0;A<9;A++)s.probe[A].set(0,0,0);let E=0,R=0,C=0,y=0,x=0,z=0,P=0,L=0,F=0,B=0,U=0;p.sort(oA);for(let A=0,w=p.length;A<w;A++){const k=p[A],se=k.color,ie=k.intensity,pe=k.distance;let fe=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Nr?fe=k.shadow.map.texture:fe=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)v+=se.r*ie,_+=se.g*ie,S+=se.b*ie;else if(k.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(k.sh.coefficients[O],ie);U++}else if(k.isDirectionalLight){const O=t.get(k);if(O.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const H=k.shadow,ae=i.get(k);ae.shadowIntensity=H.intensity,ae.shadowBias=H.bias,ae.shadowNormalBias=H.normalBias,ae.shadowRadius=H.radius,ae.shadowMapSize=H.mapSize,s.directionalShadow[E]=ae,s.directionalShadowMap[E]=fe,s.directionalShadowMatrix[E]=k.shadow.matrix,z++}s.directional[E]=O,E++}else if(k.isSpotLight){const O=t.get(k);O.position.setFromMatrixPosition(k.matrixWorld),O.color.copy(se).multiplyScalar(ie),O.distance=pe,O.coneCos=Math.cos(k.angle),O.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),O.decay=k.decay,s.spot[C]=O;const H=k.shadow;if(k.map&&(s.spotLightMap[F]=k.map,F++,H.updateMatrices(k),k.castShadow&&B++),s.spotLightMatrix[C]=H.matrix,k.castShadow){const ae=i.get(k);ae.shadowIntensity=H.intensity,ae.shadowBias=H.bias,ae.shadowNormalBias=H.normalBias,ae.shadowRadius=H.radius,ae.shadowMapSize=H.mapSize,s.spotShadow[C]=ae,s.spotShadowMap[C]=fe,L++}C++}else if(k.isRectAreaLight){const O=t.get(k);O.color.copy(se).multiplyScalar(ie),O.halfWidth.set(k.width*.5,0,0),O.halfHeight.set(0,k.height*.5,0),s.rectArea[y]=O,y++}else if(k.isPointLight){const O=t.get(k);if(O.color.copy(k.color).multiplyScalar(k.intensity),O.distance=k.distance,O.decay=k.decay,k.castShadow){const H=k.shadow,ae=i.get(k);ae.shadowIntensity=H.intensity,ae.shadowBias=H.bias,ae.shadowNormalBias=H.normalBias,ae.shadowRadius=H.radius,ae.shadowMapSize=H.mapSize,ae.shadowCameraNear=H.camera.near,ae.shadowCameraFar=H.camera.far,s.pointShadow[R]=ae,s.pointShadowMap[R]=fe,s.pointShadowMatrix[R]=k.shadow.matrix,P++}s.point[R]=O,R++}else if(k.isHemisphereLight){const O=t.get(k);O.skyColor.copy(k.color).multiplyScalar(ie),O.groundColor.copy(k.groundColor).multiplyScalar(ie),s.hemi[x]=O,x++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Oe.LTC_FLOAT_1,s.rectAreaLTC2=Oe.LTC_FLOAT_2):(s.rectAreaLTC1=Oe.LTC_HALF_1,s.rectAreaLTC2=Oe.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=_,s.ambient[2]=S;const Z=s.hash;(Z.directionalLength!==E||Z.pointLength!==R||Z.spotLength!==C||Z.rectAreaLength!==y||Z.hemiLength!==x||Z.numDirectionalShadows!==z||Z.numPointShadows!==P||Z.numSpotShadows!==L||Z.numSpotMaps!==F||Z.numLightProbes!==U)&&(s.directional.length=E,s.spot.length=C,s.rectArea.length=y,s.point.length=R,s.hemi.length=x,s.directionalShadow.length=z,s.directionalShadowMap.length=z,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=z,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=L+F-B,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=U,Z.directionalLength=E,Z.pointLength=R,Z.spotLength=C,Z.rectAreaLength=y,Z.hemiLength=x,Z.numDirectionalShadows=z,Z.numPointShadows=P,Z.numSpotShadows=L,Z.numSpotMaps=F,Z.numLightProbes=U,s.version=rA++)}function m(p,v){let _=0,S=0,E=0,R=0,C=0;const y=v.matrixWorldInverse;for(let x=0,z=p.length;x<z;x++){const P=p[x];if(P.isDirectionalLight){const L=s.directional[_];L.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(y),_++}else if(P.isSpotLight){const L=s.spot[E];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(y),L.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(y),E++}else if(P.isRectAreaLight){const L=s.rectArea[R];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(y),d.identity(),u.copy(P.matrixWorld),u.premultiply(y),d.extractRotation(u),L.halfWidth.set(P.width*.5,0,0),L.halfHeight.set(0,P.height*.5,0),L.halfWidth.applyMatrix4(d),L.halfHeight.applyMatrix4(d),R++}else if(P.isPointLight){const L=s.point[S];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(y),S++}else if(P.isHemisphereLight){const L=s.hemi[C];L.direction.setFromMatrixPosition(P.matrixWorld),L.direction.transformDirection(y),C++}}}return{setup:h,setupView:m,state:s}}function T_(o){const t=new lA(o),i=[],s=[];function l(v){p.camera=v,i.length=0,s.length=0}function u(v){i.push(v)}function d(v){s.push(v)}function h(){t.setup(i)}function m(v){t.setupView(i,v)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function cA(o){let t=new WeakMap;function i(l,u=0){const d=t.get(l);let h;return d===void 0?(h=new T_(o),t.set(l,[h])):u>=d.length?(h=new T_(o),d.push(h)):h=d[u],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const uA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,dA=[new re(1,0,0),new re(-1,0,0),new re(0,1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1)],hA=[new re(0,-1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1),new re(0,-1,0),new re(0,-1,0)],A_=new an,Fo=new re,Nd=new re;function pA(o,t,i){let s=new iv;const l=new Vt,u=new Vt,d=new nn,h=new wM,m=new DM,p={},v=i.maxTextureSize,_={[es]:Xn,[Xn]:es,[fa]:fa},S=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:uA,fragmentShader:fA}),E=S.clone();E.defines.HORIZONTAL_PASS=1;const R=new Ci;R.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new xa(R,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nc;let x=this.type;this.render=function(B,U,Z){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||B.length===0)return;B.type===_y&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=Nc);const A=o.getRenderTarget(),w=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),se=o.state;se.setBlending(ha),se.buffers.depth.getReversed()===!0?se.buffers.color.setClear(0,0,0,0):se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const ie=x!==this.type;ie&&U.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach(fe=>fe.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,fe=B.length;pe<fe;pe++){const O=B[pe],H=O.shadow;if(H===void 0){st("WebGLShadowMap:",O,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const ae=H.getFrameExtents();if(l.multiply(ae),u.copy(H.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/ae.x),l.x=u.x*ae.x,H.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/ae.y),l.y=u.y*ae.y,H.mapSize.y=u.y)),H.map===null||ie===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Io){if(O.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Bi(l.x,l.y,{format:Nr,type:ga,minFilter:On,magFilter:On,generateMipmaps:!1}),H.map.texture.name=O.name+".shadowMap",H.map.depthTexture=new ko(l.x,l.y,zi),H.map.depthTexture.name=O.name+".shadowMapDepth",H.map.depthTexture.format=_a,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Cn,H.map.depthTexture.magFilter=Cn}else{O.isPointLight?(H.map=new nv(l.x),H.map.depthTexture=new RM(l.x,Hi)):(H.map=new Bi(l.x,l.y),H.map.depthTexture=new ko(l.x,l.y,Hi)),H.map.depthTexture.name=O.name+".shadowMap",H.map.depthTexture.format=_a;const Se=o.state.buffers.depth.getReversed();this.type===Nc?(H.map.depthTexture.compareFunction=Se?Ih:Fh,H.map.depthTexture.minFilter=On,H.map.depthTexture.magFilter=On):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Cn,H.map.depthTexture.magFilter=Cn)}H.camera.updateProjectionMatrix()}const Me=H.map.isWebGLCubeRenderTarget?6:1;for(let Se=0;Se<Me;Se++){if(H.map.isWebGLCubeRenderTarget)o.setRenderTarget(H.map,Se),o.clear();else{Se===0&&(o.setRenderTarget(H.map),o.clear());const N=H.getViewport(Se);d.set(u.x*N.x,u.y*N.y,u.x*N.z,u.y*N.w),se.viewport(d)}if(O.isPointLight){const N=H.camera,ne=H.matrix,_e=O.distance||N.far;_e!==N.far&&(N.far=_e,N.updateProjectionMatrix()),Fo.setFromMatrixPosition(O.matrixWorld),N.position.copy(Fo),Nd.copy(N.position),Nd.add(dA[Se]),N.up.copy(hA[Se]),N.lookAt(Nd),N.updateMatrixWorld(),ne.makeTranslation(-Fo.x,-Fo.y,-Fo.z),A_.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),H._frustum.setFromProjectionMatrix(A_,N.coordinateSystem,N.reversedDepth)}else H.updateMatrices(O);s=H.getFrustum(),L(U,Z,H.camera,O,this.type)}H.isPointLightShadow!==!0&&this.type===Io&&z(H,Z),H.needsUpdate=!1}x=this.type,y.needsUpdate=!1,o.setRenderTarget(A,w,k)};function z(B,U){const Z=t.update(C);S.defines.VSM_SAMPLES!==B.blurSamples&&(S.defines.VSM_SAMPLES=B.blurSamples,E.defines.VSM_SAMPLES=B.blurSamples,S.needsUpdate=!0,E.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Bi(l.x,l.y,{format:Nr,type:ga})),S.uniforms.shadow_pass.value=B.map.depthTexture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(U,null,Z,S,C,null),E.uniforms.shadow_pass.value=B.mapPass.texture,E.uniforms.resolution.value=B.mapSize,E.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(U,null,Z,E,C,null)}function P(B,U,Z,A){let w=null;const k=Z.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(k!==void 0)w=k;else if(w=Z.isPointLight===!0?m:h,o.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const se=w.uuid,ie=U.uuid;let pe=p[se];pe===void 0&&(pe={},p[se]=pe);let fe=pe[ie];fe===void 0&&(fe=w.clone(),pe[ie]=fe,U.addEventListener("dispose",F)),w=fe}if(w.visible=U.visible,w.wireframe=U.wireframe,A===Io?w.side=U.shadowSide!==null?U.shadowSide:U.side:w.side=U.shadowSide!==null?U.shadowSide:_[U.side],w.alphaMap=U.alphaMap,w.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,w.map=U.map,w.clipShadows=U.clipShadows,w.clippingPlanes=U.clippingPlanes,w.clipIntersection=U.clipIntersection,w.displacementMap=U.displacementMap,w.displacementScale=U.displacementScale,w.displacementBias=U.displacementBias,w.wireframeLinewidth=U.wireframeLinewidth,w.linewidth=U.linewidth,Z.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const se=o.properties.get(w);se.light=Z}return w}function L(B,U,Z,A,w){if(B.visible===!1)return;if(B.layers.test(U.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&w===Io)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,B.matrixWorld);const ie=t.update(B),pe=B.material;if(Array.isArray(pe)){const fe=ie.groups;for(let O=0,H=fe.length;O<H;O++){const ae=fe[O],Me=pe[ae.materialIndex];if(Me&&Me.visible){const Se=P(B,Me,A,w);B.onBeforeShadow(o,B,U,Z,ie,Se,ae),o.renderBufferDirect(Z,null,ie,Se,B,ae),B.onAfterShadow(o,B,U,Z,ie,Se,ae)}}}else if(pe.visible){const fe=P(B,pe,A,w);B.onBeforeShadow(o,B,U,Z,ie,fe,null),o.renderBufferDirect(Z,null,ie,fe,B,null),B.onAfterShadow(o,B,U,Z,ie,fe,null)}}const se=B.children;for(let ie=0,pe=se.length;ie<pe;ie++)L(se[ie],U,Z,A,w)}function F(B){B.target.removeEventListener("dispose",F);for(const Z in p){const A=p[Z],w=B.target.uuid;w in A&&(A[w].dispose(),delete A[w])}}}const mA={[Pd]:zd,[Fd]:Hd,[Id]:Gd,[wr]:Bd,[zd]:Pd,[Hd]:Fd,[Gd]:Id,[Bd]:wr};function gA(o,t){function i(){let q=!1;const Ue=new nn;let Te=null;const ze=new nn(0,0,0,0);return{setMask:function(ye){Te!==ye&&!q&&(o.colorMask(ye,ye,ye,ye),Te=ye)},setLocked:function(ye){q=ye},setClear:function(ye,ve,Re,nt,Ot){Ot===!0&&(ye*=nt,ve*=nt,Re*=nt),Ue.set(ye,ve,Re,nt),ze.equals(Ue)===!1&&(o.clearColor(ye,ve,Re,nt),ze.copy(Ue))},reset:function(){q=!1,Te=null,ze.set(-1,0,0,0)}}}function s(){let q=!1,Ue=!1,Te=null,ze=null,ye=null;return{setReversed:function(ve){if(Ue!==ve){const Re=t.get("EXT_clip_control");ve?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),Ue=ve;const nt=ye;ye=null,this.setClear(nt)}},getReversed:function(){return Ue},setTest:function(ve){ve?ue(o.DEPTH_TEST):De(o.DEPTH_TEST)},setMask:function(ve){Te!==ve&&!q&&(o.depthMask(ve),Te=ve)},setFunc:function(ve){if(Ue&&(ve=mA[ve]),ze!==ve){switch(ve){case Pd:o.depthFunc(o.NEVER);break;case zd:o.depthFunc(o.ALWAYS);break;case Fd:o.depthFunc(o.LESS);break;case wr:o.depthFunc(o.LEQUAL);break;case Id:o.depthFunc(o.EQUAL);break;case Bd:o.depthFunc(o.GEQUAL);break;case Hd:o.depthFunc(o.GREATER);break;case Gd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ze=ve}},setLocked:function(ve){q=ve},setClear:function(ve){ye!==ve&&(Ue&&(ve=1-ve),o.clearDepth(ve),ye=ve)},reset:function(){q=!1,Te=null,ze=null,ye=null,Ue=!1}}}function l(){let q=!1,Ue=null,Te=null,ze=null,ye=null,ve=null,Re=null,nt=null,Ot=null;return{setTest:function(Mt){q||(Mt?ue(o.STENCIL_TEST):De(o.STENCIL_TEST))},setMask:function(Mt){Ue!==Mt&&!q&&(o.stencilMask(Mt),Ue=Mt)},setFunc:function(Mt,Dn,gi){(Te!==Mt||ze!==Dn||ye!==gi)&&(o.stencilFunc(Mt,Dn,gi),Te=Mt,ze=Dn,ye=gi)},setOp:function(Mt,Dn,gi){(ve!==Mt||Re!==Dn||nt!==gi)&&(o.stencilOp(Mt,Dn,gi),ve=Mt,Re=Dn,nt=gi)},setLocked:function(Mt){q=Mt},setClear:function(Mt){Ot!==Mt&&(o.clearStencil(Mt),Ot=Mt)},reset:function(){q=!1,Ue=null,Te=null,ze=null,ye=null,ve=null,Re=null,nt=null,Ot=null}}}const u=new i,d=new s,h=new l,m=new WeakMap,p=new WeakMap;let v={},_={},S=new WeakMap,E=[],R=null,C=!1,y=null,x=null,z=null,P=null,L=null,F=null,B=null,U=new Lt(0,0,0),Z=0,A=!1,w=null,k=null,se=null,ie=null,pe=null;const fe=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,H=0;const ae=o.getParameter(o.VERSION);ae.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(ae)[1]),O=H>=1):ae.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),O=H>=2);let Me=null,Se={};const N=o.getParameter(o.SCISSOR_BOX),ne=o.getParameter(o.VIEWPORT),_e=new nn().fromArray(N),Ae=new nn().fromArray(ne);function Be(q,Ue,Te,ze){const ye=new Uint8Array(4),ve=o.createTexture();o.bindTexture(q,ve),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Re=0;Re<Te;Re++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(Ue,0,o.RGBA,1,1,ze,0,o.RGBA,o.UNSIGNED_BYTE,ye):o.texImage2D(Ue+Re,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,ye);return ve}const te={};te[o.TEXTURE_2D]=Be(o.TEXTURE_2D,o.TEXTURE_2D,1),te[o.TEXTURE_CUBE_MAP]=Be(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[o.TEXTURE_2D_ARRAY]=Be(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),te[o.TEXTURE_3D]=Be(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ue(o.DEPTH_TEST),d.setFunc(wr),rt(!1),Qt(Ng),ue(o.CULL_FACE),ht(ha);function ue(q){v[q]!==!0&&(o.enable(q),v[q]=!0)}function De(q){v[q]!==!1&&(o.disable(q),v[q]=!1)}function ke(q,Ue){return _[q]!==Ue?(o.bindFramebuffer(q,Ue),_[q]=Ue,q===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Ue),q===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Ue),!0):!1}function He(q,Ue){let Te=E,ze=!1;if(q){Te=S.get(Ue),Te===void 0&&(Te=[],S.set(Ue,Te));const ye=q.textures;if(Te.length!==ye.length||Te[0]!==o.COLOR_ATTACHMENT0){for(let ve=0,Re=ye.length;ve<Re;ve++)Te[ve]=o.COLOR_ATTACHMENT0+ve;Te.length=ye.length,ze=!0}}else Te[0]!==o.BACK&&(Te[0]=o.BACK,ze=!0);ze&&o.drawBuffers(Te)}function dt(q){return R!==q?(o.useProgram(q),R=q,!0):!1}const Kt={[As]:o.FUNC_ADD,[xy]:o.FUNC_SUBTRACT,[Sy]:o.FUNC_REVERSE_SUBTRACT};Kt[yy]=o.MIN,Kt[My]=o.MAX;const gt={[Ey]:o.ZERO,[by]:o.ONE,[Ty]:o.SRC_COLOR,[Ld]:o.SRC_ALPHA,[Ny]:o.SRC_ALPHA_SATURATE,[wy]:o.DST_COLOR,[Ry]:o.DST_ALPHA,[Ay]:o.ONE_MINUS_SRC_COLOR,[Od]:o.ONE_MINUS_SRC_ALPHA,[Dy]:o.ONE_MINUS_DST_COLOR,[Cy]:o.ONE_MINUS_DST_ALPHA,[Uy]:o.CONSTANT_COLOR,[Ly]:o.ONE_MINUS_CONSTANT_COLOR,[Oy]:o.CONSTANT_ALPHA,[Py]:o.ONE_MINUS_CONSTANT_ALPHA};function ht(q,Ue,Te,ze,ye,ve,Re,nt,Ot,Mt){if(q===ha){C===!0&&(De(o.BLEND),C=!1);return}if(C===!1&&(ue(o.BLEND),C=!0),q!==vy){if(q!==y||Mt!==A){if((x!==As||L!==As)&&(o.blendEquation(o.FUNC_ADD),x=As,L=As),Mt)switch(q){case Rr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ud:o.blendFunc(o.ONE,o.ONE);break;case Ug:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Lg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:At("WebGLState: Invalid blending: ",q);break}else switch(q){case Rr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ud:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Ug:At("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lg:At("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:At("WebGLState: Invalid blending: ",q);break}z=null,P=null,F=null,B=null,U.set(0,0,0),Z=0,y=q,A=Mt}return}ye=ye||Ue,ve=ve||Te,Re=Re||ze,(Ue!==x||ye!==L)&&(o.blendEquationSeparate(Kt[Ue],Kt[ye]),x=Ue,L=ye),(Te!==z||ze!==P||ve!==F||Re!==B)&&(o.blendFuncSeparate(gt[Te],gt[ze],gt[ve],gt[Re]),z=Te,P=ze,F=ve,B=Re),(nt.equals(U)===!1||Ot!==Z)&&(o.blendColor(nt.r,nt.g,nt.b,Ot),U.copy(nt),Z=Ot),y=q,A=!1}function Rt(q,Ue){q.side===fa?De(o.CULL_FACE):ue(o.CULL_FACE);let Te=q.side===Xn;Ue&&(Te=!Te),rt(Te),q.blending===Rr&&q.transparent===!1?ht(ha):ht(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),d.setFunc(q.depthFunc),d.setTest(q.depthTest),d.setMask(q.depthWrite),u.setMask(q.colorWrite);const ze=q.stencilWrite;h.setTest(ze),ze&&(h.setMask(q.stencilWriteMask),h.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),h.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),jt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?ue(o.SAMPLE_ALPHA_TO_COVERAGE):De(o.SAMPLE_ALPHA_TO_COVERAGE)}function rt(q){w!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),w=q)}function Qt(q){q!==my?(ue(o.CULL_FACE),q!==k&&(q===Ng?o.cullFace(o.BACK):q===gy?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):De(o.CULL_FACE),k=q}function V(q){q!==se&&(O&&o.lineWidth(q),se=q)}function jt(q,Ue,Te){q?(ue(o.POLYGON_OFFSET_FILL),(ie!==Ue||pe!==Te)&&(o.polygonOffset(Ue,Te),ie=Ue,pe=Te)):De(o.POLYGON_OFFSET_FILL)}function yt(q){q?ue(o.SCISSOR_TEST):De(o.SCISSOR_TEST)}function Nt(q){q===void 0&&(q=o.TEXTURE0+fe-1),Me!==q&&(o.activeTexture(q),Me=q)}function je(q,Ue,Te){Te===void 0&&(Me===null?Te=o.TEXTURE0+fe-1:Te=Me);let ze=Se[Te];ze===void 0&&(ze={type:void 0,texture:void 0},Se[Te]=ze),(ze.type!==q||ze.texture!==Ue)&&(Me!==Te&&(o.activeTexture(Te),Me=Te),o.bindTexture(q,Ue||te[q]),ze.type=q,ze.texture=Ue)}function D(){const q=Se[Me];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function M(){try{o.compressedTexImage2D(...arguments)}catch(q){At("WebGLState:",q)}}function W(){try{o.compressedTexImage3D(...arguments)}catch(q){At("WebGLState:",q)}}function he(){try{o.texSubImage2D(...arguments)}catch(q){At("WebGLState:",q)}}function xe(){try{o.texSubImage3D(...arguments)}catch(q){At("WebGLState:",q)}}function ce(){try{o.compressedTexSubImage2D(...arguments)}catch(q){At("WebGLState:",q)}}function Ze(){try{o.compressedTexSubImage3D(...arguments)}catch(q){At("WebGLState:",q)}}function Ce(){try{o.texStorage2D(...arguments)}catch(q){At("WebGLState:",q)}}function Xe(){try{o.texStorage3D(...arguments)}catch(q){At("WebGLState:",q)}}function tt(){try{o.texImage2D(...arguments)}catch(q){At("WebGLState:",q)}}function Ee(){try{o.texImage3D(...arguments)}catch(q){At("WebGLState:",q)}}function be(q){_e.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),_e.copy(q))}function Fe(q){Ae.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),Ae.copy(q))}function Pe(q,Ue){let Te=p.get(Ue);Te===void 0&&(Te=new WeakMap,p.set(Ue,Te));let ze=Te.get(q);ze===void 0&&(ze=o.getUniformBlockIndex(Ue,q.name),Te.set(q,ze))}function we(q,Ue){const ze=p.get(Ue).get(q);m.get(Ue)!==ze&&(o.uniformBlockBinding(Ue,ze,q.__bindingPointIndex),m.set(Ue,ze))}function lt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},Me=null,Se={},_={},S=new WeakMap,E=[],R=null,C=!1,y=null,x=null,z=null,P=null,L=null,F=null,B=null,U=new Lt(0,0,0),Z=0,A=!1,w=null,k=null,se=null,ie=null,pe=null,_e.set(0,0,o.canvas.width,o.canvas.height),Ae.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:ue,disable:De,bindFramebuffer:ke,drawBuffers:He,useProgram:dt,setBlending:ht,setMaterial:Rt,setFlipSided:rt,setCullFace:Qt,setLineWidth:V,setPolygonOffset:jt,setScissorTest:yt,activeTexture:Nt,bindTexture:je,unbindTexture:D,compressedTexImage2D:M,compressedTexImage3D:W,texImage2D:tt,texImage3D:Ee,updateUBOMapping:Pe,uniformBlockBinding:we,texStorage2D:Ce,texStorage3D:Xe,texSubImage2D:he,texSubImage3D:xe,compressedTexSubImage2D:ce,compressedTexSubImage3D:Ze,scissor:be,viewport:Fe,reset:lt}}function _A(o,t,i,s,l,u,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Vt,v=new WeakMap;let _;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(D,M){return E?new OffscreenCanvas(D,M):Bc("canvas")}function C(D,M,W){let he=1;const xe=je(D);if((xe.width>W||xe.height>W)&&(he=W/Math.max(xe.width,xe.height)),he<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ce=Math.floor(he*xe.width),Ze=Math.floor(he*xe.height);_===void 0&&(_=R(ce,Ze));const Ce=M?R(ce,Ze):_;return Ce.width=ce,Ce.height=Ze,Ce.getContext("2d").drawImage(D,0,0,ce,Ze),st("WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+ce+"x"+Ze+")."),Ce}else return"data"in D&&st("WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),D;return D}function y(D){return D.generateMipmaps}function x(D){o.generateMipmap(D)}function z(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(D,M,W,he,xe=!1){if(D!==null){if(o[D]!==void 0)return o[D];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ce=M;if(M===o.RED&&(W===o.FLOAT&&(ce=o.R32F),W===o.HALF_FLOAT&&(ce=o.R16F),W===o.UNSIGNED_BYTE&&(ce=o.R8)),M===o.RED_INTEGER&&(W===o.UNSIGNED_BYTE&&(ce=o.R8UI),W===o.UNSIGNED_SHORT&&(ce=o.R16UI),W===o.UNSIGNED_INT&&(ce=o.R32UI),W===o.BYTE&&(ce=o.R8I),W===o.SHORT&&(ce=o.R16I),W===o.INT&&(ce=o.R32I)),M===o.RG&&(W===o.FLOAT&&(ce=o.RG32F),W===o.HALF_FLOAT&&(ce=o.RG16F),W===o.UNSIGNED_BYTE&&(ce=o.RG8)),M===o.RG_INTEGER&&(W===o.UNSIGNED_BYTE&&(ce=o.RG8UI),W===o.UNSIGNED_SHORT&&(ce=o.RG16UI),W===o.UNSIGNED_INT&&(ce=o.RG32UI),W===o.BYTE&&(ce=o.RG8I),W===o.SHORT&&(ce=o.RG16I),W===o.INT&&(ce=o.RG32I)),M===o.RGB_INTEGER&&(W===o.UNSIGNED_BYTE&&(ce=o.RGB8UI),W===o.UNSIGNED_SHORT&&(ce=o.RGB16UI),W===o.UNSIGNED_INT&&(ce=o.RGB32UI),W===o.BYTE&&(ce=o.RGB8I),W===o.SHORT&&(ce=o.RGB16I),W===o.INT&&(ce=o.RGB32I)),M===o.RGBA_INTEGER&&(W===o.UNSIGNED_BYTE&&(ce=o.RGBA8UI),W===o.UNSIGNED_SHORT&&(ce=o.RGBA16UI),W===o.UNSIGNED_INT&&(ce=o.RGBA32UI),W===o.BYTE&&(ce=o.RGBA8I),W===o.SHORT&&(ce=o.RGBA16I),W===o.INT&&(ce=o.RGBA32I)),M===o.RGB&&(W===o.UNSIGNED_INT_5_9_9_9_REV&&(ce=o.RGB9_E5),W===o.UNSIGNED_INT_10F_11F_11F_REV&&(ce=o.R11F_G11F_B10F)),M===o.RGBA){const Ze=xe?Fc:Et.getTransfer(he);W===o.FLOAT&&(ce=o.RGBA32F),W===o.HALF_FLOAT&&(ce=o.RGBA16F),W===o.UNSIGNED_BYTE&&(ce=Ze===It?o.SRGB8_ALPHA8:o.RGBA8),W===o.UNSIGNED_SHORT_4_4_4_4&&(ce=o.RGBA4),W===o.UNSIGNED_SHORT_5_5_5_1&&(ce=o.RGB5_A1)}return(ce===o.R16F||ce===o.R32F||ce===o.RG16F||ce===o.RG32F||ce===o.RGBA16F||ce===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ce}function L(D,M){let W;return D?M===null||M===Hi||M===Go?W=o.DEPTH24_STENCIL8:M===zi?W=o.DEPTH32F_STENCIL8:M===Ho&&(W=o.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Hi||M===Go?W=o.DEPTH_COMPONENT24:M===zi?W=o.DEPTH_COMPONENT32F:M===Ho&&(W=o.DEPTH_COMPONENT16),W}function F(D,M){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==Cn&&D.minFilter!==On?Math.log2(Math.max(M.width,M.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?M.mipmaps.length:1}function B(D){const M=D.target;M.removeEventListener("dispose",B),Z(M),M.isVideoTexture&&v.delete(M)}function U(D){const M=D.target;M.removeEventListener("dispose",U),w(M)}function Z(D){const M=s.get(D);if(M.__webglInit===void 0)return;const W=D.source,he=S.get(W);if(he){const xe=he[M.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&A(D),Object.keys(he).length===0&&S.delete(W)}s.remove(D)}function A(D){const M=s.get(D);o.deleteTexture(M.__webglTexture);const W=D.source,he=S.get(W);delete he[M.__cacheKey],d.memory.textures--}function w(D){const M=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(M.__webglFramebuffer[he]))for(let xe=0;xe<M.__webglFramebuffer[he].length;xe++)o.deleteFramebuffer(M.__webglFramebuffer[he][xe]);else o.deleteFramebuffer(M.__webglFramebuffer[he]);M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer[he])}else{if(Array.isArray(M.__webglFramebuffer))for(let he=0;he<M.__webglFramebuffer.length;he++)o.deleteFramebuffer(M.__webglFramebuffer[he]);else o.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&o.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let he=0;he<M.__webglColorRenderbuffer.length;he++)M.__webglColorRenderbuffer[he]&&o.deleteRenderbuffer(M.__webglColorRenderbuffer[he]);M.__webglDepthRenderbuffer&&o.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const W=D.textures;for(let he=0,xe=W.length;he<xe;he++){const ce=s.get(W[he]);ce.__webglTexture&&(o.deleteTexture(ce.__webglTexture),d.memory.textures--),s.remove(W[he])}s.remove(D)}let k=0;function se(){k=0}function ie(){const D=k;return D>=l.maxTextures&&st("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),k+=1,D}function pe(D){const M=[];return M.push(D.wrapS),M.push(D.wrapT),M.push(D.wrapR||0),M.push(D.magFilter),M.push(D.minFilter),M.push(D.anisotropy),M.push(D.internalFormat),M.push(D.format),M.push(D.type),M.push(D.generateMipmaps),M.push(D.premultiplyAlpha),M.push(D.flipY),M.push(D.unpackAlignment),M.push(D.colorSpace),M.join()}function fe(D,M){const W=s.get(D);if(D.isVideoTexture&&yt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&W.__version!==D.version){const he=D.image;if(he===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{te(W,D,M);return}}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,W.__webglTexture,o.TEXTURE0+M)}function O(D,M){const W=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){te(W,D,M);return}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,W.__webglTexture,o.TEXTURE0+M)}function H(D,M){const W=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){te(W,D,M);return}i.bindTexture(o.TEXTURE_3D,W.__webglTexture,o.TEXTURE0+M)}function ae(D,M){const W=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&W.__version!==D.version){ue(W,D,M);return}i.bindTexture(o.TEXTURE_CUBE_MAP,W.__webglTexture,o.TEXTURE0+M)}const Me={[Xd]:o.REPEAT,[da]:o.CLAMP_TO_EDGE,[qd]:o.MIRRORED_REPEAT},Se={[Cn]:o.NEAREST,[Iy]:o.NEAREST_MIPMAP_NEAREST,[lc]:o.NEAREST_MIPMAP_LINEAR,[On]:o.LINEAR,[td]:o.LINEAR_MIPMAP_NEAREST,[Cs]:o.LINEAR_MIPMAP_LINEAR},N={[Vy]:o.NEVER,[jy]:o.ALWAYS,[ky]:o.LESS,[Fh]:o.LEQUAL,[Xy]:o.EQUAL,[Ih]:o.GEQUAL,[qy]:o.GREATER,[Wy]:o.NOTEQUAL};function ne(D,M){if(M.type===zi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===On||M.magFilter===td||M.magFilter===lc||M.magFilter===Cs||M.minFilter===On||M.minFilter===td||M.minFilter===lc||M.minFilter===Cs)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,Me[M.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,Me[M.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,Me[M.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,Se[M.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,Se[M.minFilter]),M.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,N[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Cn||M.minFilter!==lc&&M.minFilter!==Cs||M.type===zi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");o.texParameterf(D,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function _e(D,M){let W=!1;D.__webglInit===void 0&&(D.__webglInit=!0,M.addEventListener("dispose",B));const he=M.source;let xe=S.get(he);xe===void 0&&(xe={},S.set(he,xe));const ce=pe(M);if(ce!==D.__cacheKey){xe[ce]===void 0&&(xe[ce]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,W=!0),xe[ce].usedTimes++;const Ze=xe[D.__cacheKey];Ze!==void 0&&(xe[D.__cacheKey].usedTimes--,Ze.usedTimes===0&&A(M)),D.__cacheKey=ce,D.__webglTexture=xe[ce].texture}return W}function Ae(D,M,W){return Math.floor(Math.floor(D/W)/M)}function Be(D,M,W,he){const ce=D.updateRanges;if(ce.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,M.width,M.height,W,he,M.data);else{ce.sort((Ee,be)=>Ee.start-be.start);let Ze=0;for(let Ee=1;Ee<ce.length;Ee++){const be=ce[Ze],Fe=ce[Ee],Pe=be.start+be.count,we=Ae(Fe.start,M.width,4),lt=Ae(be.start,M.width,4);Fe.start<=Pe+1&&we===lt&&Ae(Fe.start+Fe.count-1,M.width,4)===we?be.count=Math.max(be.count,Fe.start+Fe.count-be.start):(++Ze,ce[Ze]=Fe)}ce.length=Ze+1;const Ce=o.getParameter(o.UNPACK_ROW_LENGTH),Xe=o.getParameter(o.UNPACK_SKIP_PIXELS),tt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,M.width);for(let Ee=0,be=ce.length;Ee<be;Ee++){const Fe=ce[Ee],Pe=Math.floor(Fe.start/4),we=Math.ceil(Fe.count/4),lt=Pe%M.width,q=Math.floor(Pe/M.width),Ue=we,Te=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,lt),o.pixelStorei(o.UNPACK_SKIP_ROWS,q),i.texSubImage2D(o.TEXTURE_2D,0,lt,q,Ue,Te,W,he,M.data)}D.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ce),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Xe),o.pixelStorei(o.UNPACK_SKIP_ROWS,tt)}}function te(D,M,W){let he=o.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(he=o.TEXTURE_2D_ARRAY),M.isData3DTexture&&(he=o.TEXTURE_3D);const xe=_e(D,M),ce=M.source;i.bindTexture(he,D.__webglTexture,o.TEXTURE0+W);const Ze=s.get(ce);if(ce.version!==Ze.__version||xe===!0){i.activeTexture(o.TEXTURE0+W);const Ce=Et.getPrimaries(Et.workingColorSpace),Xe=M.colorSpace===Ja?null:Et.getPrimaries(M.colorSpace),tt=M.colorSpace===Ja||Ce===Xe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let Ee=C(M.image,!1,l.maxTextureSize);Ee=Nt(M,Ee);const be=u.convert(M.format,M.colorSpace),Fe=u.convert(M.type);let Pe=P(M.internalFormat,be,Fe,M.colorSpace,M.isVideoTexture);ne(he,M);let we;const lt=M.mipmaps,q=M.isVideoTexture!==!0,Ue=Ze.__version===void 0||xe===!0,Te=ce.dataReady,ze=F(M,Ee);if(M.isDepthTexture)Pe=L(M.format===ws,M.type),Ue&&(q?i.texStorage2D(o.TEXTURE_2D,1,Pe,Ee.width,Ee.height):i.texImage2D(o.TEXTURE_2D,0,Pe,Ee.width,Ee.height,0,be,Fe,null));else if(M.isDataTexture)if(lt.length>0){q&&Ue&&i.texStorage2D(o.TEXTURE_2D,ze,Pe,lt[0].width,lt[0].height);for(let ye=0,ve=lt.length;ye<ve;ye++)we=lt[ye],q?Te&&i.texSubImage2D(o.TEXTURE_2D,ye,0,0,we.width,we.height,be,Fe,we.data):i.texImage2D(o.TEXTURE_2D,ye,Pe,we.width,we.height,0,be,Fe,we.data);M.generateMipmaps=!1}else q?(Ue&&i.texStorage2D(o.TEXTURE_2D,ze,Pe,Ee.width,Ee.height),Te&&Be(M,Ee,be,Fe)):i.texImage2D(o.TEXTURE_2D,0,Pe,Ee.width,Ee.height,0,be,Fe,Ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){q&&Ue&&i.texStorage3D(o.TEXTURE_2D_ARRAY,ze,Pe,lt[0].width,lt[0].height,Ee.depth);for(let ye=0,ve=lt.length;ye<ve;ye++)if(we=lt[ye],M.format!==Ai)if(be!==null)if(q){if(Te)if(M.layerUpdates.size>0){const Re=i_(we.width,we.height,M.format,M.type);for(const nt of M.layerUpdates){const Ot=we.data.subarray(nt*Re/we.data.BYTES_PER_ELEMENT,(nt+1)*Re/we.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ye,0,0,nt,we.width,we.height,1,be,Ot)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ye,0,0,0,we.width,we.height,Ee.depth,be,we.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ye,Pe,we.width,we.height,Ee.depth,0,we.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Te&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ye,0,0,0,we.width,we.height,Ee.depth,be,Fe,we.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ye,Pe,we.width,we.height,Ee.depth,0,be,Fe,we.data)}else{q&&Ue&&i.texStorage2D(o.TEXTURE_2D,ze,Pe,lt[0].width,lt[0].height);for(let ye=0,ve=lt.length;ye<ve;ye++)we=lt[ye],M.format!==Ai?be!==null?q?Te&&i.compressedTexSubImage2D(o.TEXTURE_2D,ye,0,0,we.width,we.height,be,we.data):i.compressedTexImage2D(o.TEXTURE_2D,ye,Pe,we.width,we.height,0,we.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Te&&i.texSubImage2D(o.TEXTURE_2D,ye,0,0,we.width,we.height,be,Fe,we.data):i.texImage2D(o.TEXTURE_2D,ye,Pe,we.width,we.height,0,be,Fe,we.data)}else if(M.isDataArrayTexture)if(q){if(Ue&&i.texStorage3D(o.TEXTURE_2D_ARRAY,ze,Pe,Ee.width,Ee.height,Ee.depth),Te)if(M.layerUpdates.size>0){const ye=i_(Ee.width,Ee.height,M.format,M.type);for(const ve of M.layerUpdates){const Re=Ee.data.subarray(ve*ye/Ee.data.BYTES_PER_ELEMENT,(ve+1)*ye/Ee.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ve,Ee.width,Ee.height,1,be,Fe,Re)}M.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,be,Fe,Ee.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Pe,Ee.width,Ee.height,Ee.depth,0,be,Fe,Ee.data);else if(M.isData3DTexture)q?(Ue&&i.texStorage3D(o.TEXTURE_3D,ze,Pe,Ee.width,Ee.height,Ee.depth),Te&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,be,Fe,Ee.data)):i.texImage3D(o.TEXTURE_3D,0,Pe,Ee.width,Ee.height,Ee.depth,0,be,Fe,Ee.data);else if(M.isFramebufferTexture){if(Ue)if(q)i.texStorage2D(o.TEXTURE_2D,ze,Pe,Ee.width,Ee.height);else{let ye=Ee.width,ve=Ee.height;for(let Re=0;Re<ze;Re++)i.texImage2D(o.TEXTURE_2D,Re,Pe,ye,ve,0,be,Fe,null),ye>>=1,ve>>=1}}else if(lt.length>0){if(q&&Ue){const ye=je(lt[0]);i.texStorage2D(o.TEXTURE_2D,ze,Pe,ye.width,ye.height)}for(let ye=0,ve=lt.length;ye<ve;ye++)we=lt[ye],q?Te&&i.texSubImage2D(o.TEXTURE_2D,ye,0,0,be,Fe,we):i.texImage2D(o.TEXTURE_2D,ye,Pe,be,Fe,we);M.generateMipmaps=!1}else if(q){if(Ue){const ye=je(Ee);i.texStorage2D(o.TEXTURE_2D,ze,Pe,ye.width,ye.height)}Te&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,be,Fe,Ee)}else i.texImage2D(o.TEXTURE_2D,0,Pe,be,Fe,Ee);y(M)&&x(he),Ze.__version=ce.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function ue(D,M,W){if(M.image.length!==6)return;const he=_e(D,M),xe=M.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+W);const ce=s.get(xe);if(xe.version!==ce.__version||he===!0){i.activeTexture(o.TEXTURE0+W);const Ze=Et.getPrimaries(Et.workingColorSpace),Ce=M.colorSpace===Ja?null:Et.getPrimaries(M.colorSpace),Xe=M.colorSpace===Ja||Ze===Ce?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);const tt=M.isCompressedTexture||M.image[0].isCompressedTexture,Ee=M.image[0]&&M.image[0].isDataTexture,be=[];for(let ve=0;ve<6;ve++)!tt&&!Ee?be[ve]=C(M.image[ve],!0,l.maxCubemapSize):be[ve]=Ee?M.image[ve].image:M.image[ve],be[ve]=Nt(M,be[ve]);const Fe=be[0],Pe=u.convert(M.format,M.colorSpace),we=u.convert(M.type),lt=P(M.internalFormat,Pe,we,M.colorSpace),q=M.isVideoTexture!==!0,Ue=ce.__version===void 0||he===!0,Te=xe.dataReady;let ze=F(M,Fe);ne(o.TEXTURE_CUBE_MAP,M);let ye;if(tt){q&&Ue&&i.texStorage2D(o.TEXTURE_CUBE_MAP,ze,lt,Fe.width,Fe.height);for(let ve=0;ve<6;ve++){ye=be[ve].mipmaps;for(let Re=0;Re<ye.length;Re++){const nt=ye[Re];M.format!==Ai?Pe!==null?q?Te&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re,0,0,nt.width,nt.height,Pe,nt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re,lt,nt.width,nt.height,0,nt.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Te&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re,0,0,nt.width,nt.height,Pe,we,nt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re,lt,nt.width,nt.height,0,Pe,we,nt.data)}}}else{if(ye=M.mipmaps,q&&Ue){ye.length>0&&ze++;const ve=je(be[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,ze,lt,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Ee){q?Te&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,be[ve].width,be[ve].height,Pe,we,be[ve].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,lt,be[ve].width,be[ve].height,0,Pe,we,be[ve].data);for(let Re=0;Re<ye.length;Re++){const Ot=ye[Re].image[ve].image;q?Te&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re+1,0,0,Ot.width,Ot.height,Pe,we,Ot.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re+1,lt,Ot.width,Ot.height,0,Pe,we,Ot.data)}}else{q?Te&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Pe,we,be[ve]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,lt,Pe,we,be[ve]);for(let Re=0;Re<ye.length;Re++){const nt=ye[Re];q?Te&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re+1,0,0,Pe,we,nt.image[ve]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re+1,lt,Pe,we,nt.image[ve])}}}y(M)&&x(o.TEXTURE_CUBE_MAP),ce.__version=xe.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function De(D,M,W,he,xe,ce){const Ze=u.convert(W.format,W.colorSpace),Ce=u.convert(W.type),Xe=P(W.internalFormat,Ze,Ce,W.colorSpace),tt=s.get(M),Ee=s.get(W);if(Ee.__renderTarget=M,!tt.__hasExternalTextures){const be=Math.max(1,M.width>>ce),Fe=Math.max(1,M.height>>ce);xe===o.TEXTURE_3D||xe===o.TEXTURE_2D_ARRAY?i.texImage3D(xe,ce,Xe,be,Fe,M.depth,0,Ze,Ce,null):i.texImage2D(xe,ce,Xe,be,Fe,0,Ze,Ce,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),jt(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,he,xe,Ee.__webglTexture,0,V(M)):(xe===o.TEXTURE_2D||xe>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,he,xe,Ee.__webglTexture,ce),i.bindFramebuffer(o.FRAMEBUFFER,null)}function ke(D,M,W){if(o.bindRenderbuffer(o.RENDERBUFFER,D),M.depthBuffer){const he=M.depthTexture,xe=he&&he.isDepthTexture?he.type:null,ce=L(M.stencilBuffer,xe),Ze=M.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;jt(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(M),ce,M.width,M.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(M),ce,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,ce,M.width,M.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ze,o.RENDERBUFFER,D)}else{const he=M.textures;for(let xe=0;xe<he.length;xe++){const ce=he[xe],Ze=u.convert(ce.format,ce.colorSpace),Ce=u.convert(ce.type),Xe=P(ce.internalFormat,Ze,Ce,ce.colorSpace);jt(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(M),Xe,M.width,M.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(M),Xe,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,Xe,M.width,M.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function He(D,M,W){const he=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xe=s.get(M.depthTexture);if(xe.__renderTarget=M,(!xe.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),he){if(xe.__webglInit===void 0&&(xe.__webglInit=!0,M.depthTexture.addEventListener("dispose",B)),xe.__webglTexture===void 0){xe.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,xe.__webglTexture),ne(o.TEXTURE_CUBE_MAP,M.depthTexture);const tt=u.convert(M.depthTexture.format),Ee=u.convert(M.depthTexture.type);let be;M.depthTexture.format===_a?be=o.DEPTH_COMPONENT24:M.depthTexture.format===ws&&(be=o.DEPTH24_STENCIL8);for(let Fe=0;Fe<6;Fe++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,be,M.width,M.height,0,tt,Ee,null)}}else fe(M.depthTexture,0);const ce=xe.__webglTexture,Ze=V(M),Ce=he?o.TEXTURE_CUBE_MAP_POSITIVE_X+W:o.TEXTURE_2D,Xe=M.depthTexture.format===ws?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(M.depthTexture.format===_a)jt(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Xe,Ce,ce,0,Ze):o.framebufferTexture2D(o.FRAMEBUFFER,Xe,Ce,ce,0);else if(M.depthTexture.format===ws)jt(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Xe,Ce,ce,0,Ze):o.framebufferTexture2D(o.FRAMEBUFFER,Xe,Ce,ce,0);else throw new Error("Unknown depthTexture format")}function dt(D){const M=s.get(D),W=D.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==D.depthTexture){const he=D.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),he){const xe=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,he.removeEventListener("dispose",xe)};he.addEventListener("dispose",xe),M.__depthDisposeCallback=xe}M.__boundDepthTexture=he}if(D.depthTexture&&!M.__autoAllocateDepthBuffer)if(W)for(let he=0;he<6;he++)He(M.__webglFramebuffer[he],D,he);else{const he=D.texture.mipmaps;he&&he.length>0?He(M.__webglFramebuffer[0],D,0):He(M.__webglFramebuffer,D,0)}else if(W){M.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[he]),M.__webglDepthbuffer[he]===void 0)M.__webglDepthbuffer[he]=o.createRenderbuffer(),ke(M.__webglDepthbuffer[he],D,!1);else{const xe=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer[he];o.bindRenderbuffer(o.RENDERBUFFER,ce),o.framebufferRenderbuffer(o.FRAMEBUFFER,xe,o.RENDERBUFFER,ce)}}else{const he=D.texture.mipmaps;if(he&&he.length>0?i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=o.createRenderbuffer(),ke(M.__webglDepthbuffer,D,!1);else{const xe=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ce),o.framebufferRenderbuffer(o.FRAMEBUFFER,xe,o.RENDERBUFFER,ce)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Kt(D,M,W){const he=s.get(D);M!==void 0&&De(he.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),W!==void 0&&dt(D)}function gt(D){const M=D.texture,W=s.get(D),he=s.get(M);D.addEventListener("dispose",U);const xe=D.textures,ce=D.isWebGLCubeRenderTarget===!0,Ze=xe.length>1;if(Ze||(he.__webglTexture===void 0&&(he.__webglTexture=o.createTexture()),he.__version=M.version,d.memory.textures++),ce){W.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[Ce]=[];for(let Xe=0;Xe<M.mipmaps.length;Xe++)W.__webglFramebuffer[Ce][Xe]=o.createFramebuffer()}else W.__webglFramebuffer[Ce]=o.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let Ce=0;Ce<M.mipmaps.length;Ce++)W.__webglFramebuffer[Ce]=o.createFramebuffer()}else W.__webglFramebuffer=o.createFramebuffer();if(Ze)for(let Ce=0,Xe=xe.length;Ce<Xe;Ce++){const tt=s.get(xe[Ce]);tt.__webglTexture===void 0&&(tt.__webglTexture=o.createTexture(),d.memory.textures++)}if(D.samples>0&&jt(D)===!1){W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Ce=0;Ce<xe.length;Ce++){const Xe=xe[Ce];W.__webglColorRenderbuffer[Ce]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,W.__webglColorRenderbuffer[Ce]);const tt=u.convert(Xe.format,Xe.colorSpace),Ee=u.convert(Xe.type),be=P(Xe.internalFormat,tt,Ee,Xe.colorSpace,D.isXRRenderTarget===!0),Fe=V(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,Fe,be,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ce,o.RENDERBUFFER,W.__webglColorRenderbuffer[Ce])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),ke(W.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ce){i.bindTexture(o.TEXTURE_CUBE_MAP,he.__webglTexture),ne(o.TEXTURE_CUBE_MAP,M);for(let Ce=0;Ce<6;Ce++)if(M.mipmaps&&M.mipmaps.length>0)for(let Xe=0;Xe<M.mipmaps.length;Xe++)De(W.__webglFramebuffer[Ce][Xe],D,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Xe);else De(W.__webglFramebuffer[Ce],D,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(M)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ze){for(let Ce=0,Xe=xe.length;Ce<Xe;Ce++){const tt=xe[Ce],Ee=s.get(tt);let be=o.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(be=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(be,Ee.__webglTexture),ne(be,tt),De(W.__webglFramebuffer,D,tt,o.COLOR_ATTACHMENT0+Ce,be,0),y(tt)&&x(be)}i.unbindTexture()}else{let Ce=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ce=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ce,he.__webglTexture),ne(Ce,M),M.mipmaps&&M.mipmaps.length>0)for(let Xe=0;Xe<M.mipmaps.length;Xe++)De(W.__webglFramebuffer[Xe],D,M,o.COLOR_ATTACHMENT0,Ce,Xe);else De(W.__webglFramebuffer,D,M,o.COLOR_ATTACHMENT0,Ce,0);y(M)&&x(Ce),i.unbindTexture()}D.depthBuffer&&dt(D)}function ht(D){const M=D.textures;for(let W=0,he=M.length;W<he;W++){const xe=M[W];if(y(xe)){const ce=z(D),Ze=s.get(xe).__webglTexture;i.bindTexture(ce,Ze),x(ce),i.unbindTexture()}}}const Rt=[],rt=[];function Qt(D){if(D.samples>0){if(jt(D)===!1){const M=D.textures,W=D.width,he=D.height;let xe=o.COLOR_BUFFER_BIT;const ce=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ze=s.get(D),Ce=M.length>1;if(Ce)for(let tt=0;tt<M.length;tt++)i.bindFramebuffer(o.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ze.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer);const Xe=D.texture.mipmaps;Xe&&Xe.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer);for(let tt=0;tt<M.length;tt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(xe|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(xe|=o.STENCIL_BUFFER_BIT)),Ce){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ze.__webglColorRenderbuffer[tt]);const Ee=s.get(M[tt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ee,0)}o.blitFramebuffer(0,0,W,he,0,0,W,he,xe,o.NEAREST),m===!0&&(Rt.length=0,rt.length=0,Rt.push(o.COLOR_ATTACHMENT0+tt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Rt.push(ce),rt.push(ce),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,rt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Rt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ce)for(let tt=0;tt<M.length;tt++){i.bindFramebuffer(o.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.RENDERBUFFER,Ze.__webglColorRenderbuffer[tt]);const Ee=s.get(M[tt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ze.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.TEXTURE_2D,Ee,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const M=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[M])}}}function V(D){return Math.min(l.maxSamples,D.samples)}function jt(D){const M=s.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function yt(D){const M=d.render.frame;v.get(D)!==M&&(v.set(D,M),D.update())}function Nt(D,M){const W=D.colorSpace,he=D.format,xe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||W!==Ur&&W!==Ja&&(Et.getTransfer(W)===It?(he!==Ai||xe!==mi)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):At("WebGLTextures: Unsupported texture color space:",W)),M}function je(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=ie,this.resetTextureUnits=se,this.setTexture2D=fe,this.setTexture2DArray=O,this.setTexture3D=H,this.setTextureCube=ae,this.rebindTextures=Kt,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=De,this.useMultisampledRTT=jt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function vA(o,t){function i(s,l=Ja){let u;const d=Et.getTransfer(l);if(s===mi)return o.UNSIGNED_BYTE;if(s===Uh)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Lh)return o.UNSIGNED_SHORT_5_5_5_1;if(s===H_)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===G_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===I_)return o.BYTE;if(s===B_)return o.SHORT;if(s===Ho)return o.UNSIGNED_SHORT;if(s===Nh)return o.INT;if(s===Hi)return o.UNSIGNED_INT;if(s===zi)return o.FLOAT;if(s===ga)return o.HALF_FLOAT;if(s===V_)return o.ALPHA;if(s===k_)return o.RGB;if(s===Ai)return o.RGBA;if(s===_a)return o.DEPTH_COMPONENT;if(s===ws)return o.DEPTH_STENCIL;if(s===X_)return o.RED;if(s===Oh)return o.RED_INTEGER;if(s===Nr)return o.RG;if(s===Ph)return o.RG_INTEGER;if(s===zh)return o.RGBA_INTEGER;if(s===Uc||s===Lc||s===Oc||s===Pc)if(d===It)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Uc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Lc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Oc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Pc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Uc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Lc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Oc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Pc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Wd||s===jd||s===Yd||s===Zd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Wd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===jd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Yd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Zd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Kd||s===Qd||s===Jd||s===$d||s===eh||s===th||s===nh)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Kd||s===Qd)return d===It?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Jd)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(s===$d)return u.COMPRESSED_R11_EAC;if(s===eh)return u.COMPRESSED_SIGNED_R11_EAC;if(s===th)return u.COMPRESSED_RG11_EAC;if(s===nh)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===ih||s===ah||s===sh||s===rh||s===oh||s===lh||s===ch||s===uh||s===fh||s===dh||s===hh||s===ph||s===mh||s===gh)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===ih)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ah)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===sh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===rh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===oh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===lh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ch)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===uh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===fh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===dh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===hh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ph)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===mh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===gh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===_h||s===vh||s===xh)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===_h)return d===It?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===vh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===xh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Sh||s===yh||s===Mh||s===Eh)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===Sh)return u.COMPRESSED_RED_RGTC1_EXT;if(s===yh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Mh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Eh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Go?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const xA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class yA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new sv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Gi({vertexShader:xA,fragmentShader:SA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new xa(new Vc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class MA extends Or{constructor(t,i){super();const s=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,v=null,_=null,S=null,E=null,R=null;const C=typeof XRWebGLBinding<"u",y=new yA,x={},z=i.getContextAttributes();let P=null,L=null;const F=[],B=[],U=new Vt;let Z=null;const A=new pi;A.viewport=new nn;const w=new pi;w.viewport=new nn;const k=[A,w],se=new NM;let ie=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ue=F[te];return ue===void 0&&(ue=new bd,F[te]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(te){let ue=F[te];return ue===void 0&&(ue=new bd,F[te]=ue),ue.getGripSpace()},this.getHand=function(te){let ue=F[te];return ue===void 0&&(ue=new bd,F[te]=ue),ue.getHandSpace()};function fe(te){const ue=B.indexOf(te.inputSource);if(ue===-1)return;const De=F[ue];De!==void 0&&(De.update(te.inputSource,te.frame,p||d),De.dispatchEvent({type:te.type,data:te.inputSource}))}function O(){l.removeEventListener("select",fe),l.removeEventListener("selectstart",fe),l.removeEventListener("selectend",fe),l.removeEventListener("squeeze",fe),l.removeEventListener("squeezestart",fe),l.removeEventListener("squeezeend",fe),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",H);for(let te=0;te<F.length;te++){const ue=B[te];ue!==null&&(B[te]=null,F[te].disconnect(ue))}ie=null,pe=null,y.reset();for(const te in x)delete x[te];t.setRenderTarget(P),E=null,S=null,_=null,l=null,L=null,Be.stop(),s.isPresenting=!1,t.setPixelRatio(Z),t.setSize(U.width,U.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){u=te,s.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){h=te,s.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(te){p=te},this.getBaseLayer=function(){return S!==null?S:E},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return R},this.getSession=function(){return l},this.setSession=async function(te){if(l=te,l!==null){if(P=t.getRenderTarget(),l.addEventListener("select",fe),l.addEventListener("selectstart",fe),l.addEventListener("selectend",fe),l.addEventListener("squeeze",fe),l.addEventListener("squeezestart",fe),l.addEventListener("squeezeend",fe),l.addEventListener("end",O),l.addEventListener("inputsourceschange",H),z.xrCompatible!==!0&&await i.makeXRCompatible(),Z=t.getPixelRatio(),t.getSize(U),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let De=null,ke=null,He=null;z.depth&&(He=z.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,De=z.stencil?ws:_a,ke=z.stencil?Go:Hi);const dt={colorFormat:i.RGBA8,depthFormat:He,scaleFactor:u};_=this.getBinding(),S=_.createProjectionLayer(dt),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),L=new Bi(S.textureWidth,S.textureHeight,{format:Ai,type:mi,depthTexture:new ko(S.textureWidth,S.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,De),stencilBuffer:z.stencil,colorSpace:t.outputColorSpace,samples:z.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const De={antialias:z.antialias,alpha:!0,depth:z.depth,stencil:z.stencil,framebufferScaleFactor:u};E=new XRWebGLLayer(l,i,De),l.updateRenderState({baseLayer:E}),t.setPixelRatio(1),t.setSize(E.framebufferWidth,E.framebufferHeight,!1),L=new Bi(E.framebufferWidth,E.framebufferHeight,{format:Ai,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:z.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Be.setContext(l),Be.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(te){for(let ue=0;ue<te.removed.length;ue++){const De=te.removed[ue],ke=B.indexOf(De);ke>=0&&(B[ke]=null,F[ke].disconnect(De))}for(let ue=0;ue<te.added.length;ue++){const De=te.added[ue];let ke=B.indexOf(De);if(ke===-1){for(let dt=0;dt<F.length;dt++)if(dt>=B.length){B.push(De),ke=dt;break}else if(B[dt]===null){B[dt]=De,ke=dt;break}if(ke===-1)break}const He=F[ke];He&&He.connect(De)}}const ae=new re,Me=new re;function Se(te,ue,De){ae.setFromMatrixPosition(ue.matrixWorld),Me.setFromMatrixPosition(De.matrixWorld);const ke=ae.distanceTo(Me),He=ue.projectionMatrix.elements,dt=De.projectionMatrix.elements,Kt=He[14]/(He[10]-1),gt=He[14]/(He[10]+1),ht=(He[9]+1)/He[5],Rt=(He[9]-1)/He[5],rt=(He[8]-1)/He[0],Qt=(dt[8]+1)/dt[0],V=Kt*rt,jt=Kt*Qt,yt=ke/(-rt+Qt),Nt=yt*-rt;if(ue.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Nt),te.translateZ(yt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),He[10]===-1)te.projectionMatrix.copy(ue.projectionMatrix),te.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const je=Kt+yt,D=gt+yt,M=V-Nt,W=jt+(ke-Nt),he=ht*gt/D*je,xe=Rt*gt/D*je;te.projectionMatrix.makePerspective(M,W,he,xe,je,D),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function N(te,ue){ue===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ue.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(l===null)return;let ue=te.near,De=te.far;y.texture!==null&&(y.depthNear>0&&(ue=y.depthNear),y.depthFar>0&&(De=y.depthFar)),se.near=w.near=A.near=ue,se.far=w.far=A.far=De,(ie!==se.near||pe!==se.far)&&(l.updateRenderState({depthNear:se.near,depthFar:se.far}),ie=se.near,pe=se.far),se.layers.mask=te.layers.mask|6,A.layers.mask=se.layers.mask&3,w.layers.mask=se.layers.mask&5;const ke=te.parent,He=se.cameras;N(se,ke);for(let dt=0;dt<He.length;dt++)N(He[dt],ke);He.length===2?Se(se,A,w):se.projectionMatrix.copy(A.projectionMatrix),ne(te,se,ke)};function ne(te,ue,De){De===null?te.matrix.copy(ue.matrixWorld):(te.matrix.copy(De.matrixWorld),te.matrix.invert(),te.matrix.multiply(ue.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ue.projectionMatrix),te.projectionMatrixInverse.copy(ue.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=bh*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return se},this.getFoveation=function(){if(!(S===null&&E===null))return m},this.setFoveation=function(te){m=te,S!==null&&(S.fixedFoveation=te),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=te)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(se)},this.getCameraTexture=function(te){return x[te]};let _e=null;function Ae(te,ue){if(v=ue.getViewerPose(p||d),R=ue,v!==null){const De=v.views;E!==null&&(t.setRenderTargetFramebuffer(L,E.framebuffer),t.setRenderTarget(L));let ke=!1;De.length!==se.cameras.length&&(se.cameras.length=0,ke=!0);for(let gt=0;gt<De.length;gt++){const ht=De[gt];let Rt=null;if(E!==null)Rt=E.getViewport(ht);else{const Qt=_.getViewSubImage(S,ht);Rt=Qt.viewport,gt===0&&(t.setRenderTargetTextures(L,Qt.colorTexture,Qt.depthStencilTexture),t.setRenderTarget(L))}let rt=k[gt];rt===void 0&&(rt=new pi,rt.layers.enable(gt),rt.viewport=new nn,k[gt]=rt),rt.matrix.fromArray(ht.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(ht.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),gt===0&&(se.matrix.copy(rt.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale)),ke===!0&&se.cameras.push(rt)}const He=l.enabledFeatures;if(He&&He.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){_=s.getBinding();const gt=_.getDepthInformation(De[0]);gt&&gt.isValid&&gt.texture&&y.init(gt,l.renderState)}if(He&&He.includes("camera-access")&&C){t.state.unbindTexture(),_=s.getBinding();for(let gt=0;gt<De.length;gt++){const ht=De[gt].camera;if(ht){let Rt=x[ht];Rt||(Rt=new sv,x[ht]=Rt);const rt=_.getCameraImage(ht);Rt.sourceTexture=rt}}}}for(let De=0;De<F.length;De++){const ke=B[De],He=F[De];ke!==null&&He!==void 0&&He.update(ke,ue,p||d)}_e&&_e(te,ue),ue.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ue}),R=null}const Be=new ov;Be.setAnimationLoop(Ae),this.setAnimationLoop=function(te){_e=te},this.dispose=function(){}}}const bs=new va,EA=new an;function bA(o,t){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function s(y,x){x.color.getRGB(y.fogColor.value,$_(o)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function l(y,x,z,P,L){x.isMeshBasicMaterial||x.isMeshLambertMaterial?u(y,x):x.isMeshToonMaterial?(u(y,x),_(y,x)):x.isMeshPhongMaterial?(u(y,x),v(y,x)):x.isMeshStandardMaterial?(u(y,x),S(y,x),x.isMeshPhysicalMaterial&&E(y,x,L)):x.isMeshMatcapMaterial?(u(y,x),R(y,x)):x.isMeshDepthMaterial?u(y,x):x.isMeshDistanceMaterial?(u(y,x),C(y,x)):x.isMeshNormalMaterial?u(y,x):x.isLineBasicMaterial?(d(y,x),x.isLineDashedMaterial&&h(y,x)):x.isPointsMaterial?m(y,x,z,P):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Xn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Xn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const z=t.get(x),P=z.envMap,L=z.envMapRotation;P&&(y.envMap.value=P,bs.copy(L),bs.x*=-1,bs.y*=-1,bs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),y.envMapRotation.value.setFromMatrix4(EA.makeRotationFromEuler(bs)),y.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function d(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function h(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,z,P){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*z,y.scale.value=P*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function v(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function _(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function S(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function E(y,x,z){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Xn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=z.texture,y.transmissionSamplerSize.value.set(z.width,z.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function R(y,x){x.matcap&&(y.matcap.value=x.matcap)}function C(y,x){const z=t.get(x).light;y.referencePosition.value.setFromMatrixPosition(z.matrixWorld),y.nearDistance.value=z.shadow.camera.near,y.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function TA(o,t,i,s){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(z,P){const L=P.program;s.uniformBlockBinding(z,L)}function p(z,P){let L=l[z.id];L===void 0&&(R(z),L=v(z),l[z.id]=L,z.addEventListener("dispose",y));const F=P.program;s.updateUBOMapping(z,F);const B=t.render.frame;u[z.id]!==B&&(S(z),u[z.id]=B)}function v(z){const P=_();z.__bindingPointIndex=P;const L=o.createBuffer(),F=z.__size,B=z.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,F,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,L),L}function _(){for(let z=0;z<h;z++)if(d.indexOf(z)===-1)return d.push(z),z;return At("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(z){const P=l[z.id],L=z.uniforms,F=z.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let B=0,U=L.length;B<U;B++){const Z=Array.isArray(L[B])?L[B]:[L[B]];for(let A=0,w=Z.length;A<w;A++){const k=Z[A];if(E(k,B,A,F)===!0){const se=k.__offset,ie=Array.isArray(k.value)?k.value:[k.value];let pe=0;for(let fe=0;fe<ie.length;fe++){const O=ie[fe],H=C(O);typeof O=="number"||typeof O=="boolean"?(k.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,se+pe,k.__data)):O.isMatrix3?(k.__data[0]=O.elements[0],k.__data[1]=O.elements[1],k.__data[2]=O.elements[2],k.__data[3]=0,k.__data[4]=O.elements[3],k.__data[5]=O.elements[4],k.__data[6]=O.elements[5],k.__data[7]=0,k.__data[8]=O.elements[6],k.__data[9]=O.elements[7],k.__data[10]=O.elements[8],k.__data[11]=0):(O.toArray(k.__data,pe),pe+=H.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,se,k.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(z,P,L,F){const B=z.value,U=P+"_"+L;if(F[U]===void 0)return typeof B=="number"||typeof B=="boolean"?F[U]=B:F[U]=B.clone(),!0;{const Z=F[U];if(typeof B=="number"||typeof B=="boolean"){if(Z!==B)return F[U]=B,!0}else if(Z.equals(B)===!1)return Z.copy(B),!0}return!1}function R(z){const P=z.uniforms;let L=0;const F=16;for(let U=0,Z=P.length;U<Z;U++){const A=Array.isArray(P[U])?P[U]:[P[U]];for(let w=0,k=A.length;w<k;w++){const se=A[w],ie=Array.isArray(se.value)?se.value:[se.value];for(let pe=0,fe=ie.length;pe<fe;pe++){const O=ie[pe],H=C(O),ae=L%F,Me=ae%H.boundary,Se=ae+Me;L+=Me,Se!==0&&F-Se<H.storage&&(L+=F-Se),se.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=L,L+=H.storage}}}const B=L%F;return B>0&&(L+=F-B),z.__size=L,z.__cache={},this}function C(z){const P={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(P.boundary=4,P.storage=4):z.isVector2?(P.boundary=8,P.storage=8):z.isVector3||z.isColor?(P.boundary=16,P.storage=12):z.isVector4?(P.boundary=16,P.storage=16):z.isMatrix3?(P.boundary=48,P.storage=48):z.isMatrix4?(P.boundary=64,P.storage=64):z.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):st("WebGLRenderer: Unsupported uniform value type.",z),P}function y(z){const P=z.target;P.removeEventListener("dispose",y);const L=d.indexOf(P.__bindingPointIndex);d.splice(L,1),o.deleteBuffer(l[P.id]),delete l[P.id],delete u[P.id]}function x(){for(const z in l)o.deleteBuffer(l[z]);d=[],l={},u={}}return{bind:m,update:p,dispose:x}}const AA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Oi=null;function RA(){return Oi===null&&(Oi=new yM(AA,16,16,Nr,ga),Oi.name="DFG_LUT",Oi.minFilter=On,Oi.magFilter=On,Oi.wrapS=da,Oi.wrapT=da,Oi.generateMipmaps=!1,Oi.needsUpdate=!0),Oi}class CA{constructor(t={}){const{canvas:i=Yy(),context:s=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:S=!1,outputBufferType:E=mi}=t;this.isWebGLRenderer=!0;let R;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=s.getContextAttributes().alpha}else R=d;const C=E,y=new Set([zh,Ph,Oh]),x=new Set([mi,Hi,Ho,Go,Uh,Lh]),z=new Uint32Array(4),P=new Int32Array(4);let L=null,F=null;const B=[],U=[];let Z=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let w=!1;this._outputColorSpace=hi;let k=0,se=0,ie=null,pe=-1,fe=null;const O=new nn,H=new nn;let ae=null;const Me=new Lt(0);let Se=0,N=i.width,ne=i.height,_e=1,Ae=null,Be=null;const te=new nn(0,0,N,ne),ue=new nn(0,0,N,ne);let De=!1;const ke=new iv;let He=!1,dt=!1;const Kt=new an,gt=new re,ht=new nn,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function Qt(){return ie===null?_e:1}let V=s;function jt(T,j){return i.getContext(T,j)}try{const T={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Dh}`),i.addEventListener("webglcontextlost",nt,!1),i.addEventListener("webglcontextrestored",Ot,!1),i.addEventListener("webglcontextcreationerror",Mt,!1),V===null){const j="webgl2";if(V=jt(j,T),V===null)throw jt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw At("WebGLRenderer: "+T.message),T}let yt,Nt,je,D,M,W,he,xe,ce,Ze,Ce,Xe,tt,Ee,be,Fe,Pe,we,lt,q,Ue,Te,ze,ye;function ve(){yt=new R1(V),yt.init(),Te=new vA(V,yt),Nt=new v1(V,yt,t,Te),je=new gA(V,yt),Nt.reversedDepthBuffer&&S&&je.buffers.depth.setReversed(!0),D=new D1(V),M=new tA,W=new _A(V,yt,je,M,Nt,Te,D),he=new S1(A),xe=new A1(A),ce=new OM(V),ze=new g1(V,ce),Ze=new C1(V,ce,D,ze),Ce=new U1(V,Ze,ce,D),lt=new N1(V,Nt,W),Fe=new x1(M),Xe=new eA(A,he,xe,yt,Nt,ze,Fe),tt=new bA(A,M),Ee=new iA,be=new cA(yt),we=new m1(A,he,xe,je,Ce,R,m),Pe=new pA(A,Ce,Nt),ye=new TA(V,D,Nt,je),q=new _1(V,yt,D),Ue=new w1(V,yt,D),D.programs=Xe.programs,A.capabilities=Nt,A.extensions=yt,A.properties=M,A.renderLists=Ee,A.shadowMap=Pe,A.state=je,A.info=D}ve(),C!==mi&&(Z=new O1(C,i.width,i.height,l,u));const Re=new MA(A,V);this.xr=Re,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const T=yt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=yt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(T){T!==void 0&&(_e=T,this.setSize(N,ne,!1))},this.getSize=function(T){return T.set(N,ne)},this.setSize=function(T,j,oe=!0){if(Re.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}N=T,ne=j,i.width=Math.floor(T*_e),i.height=Math.floor(j*_e),oe===!0&&(i.style.width=T+"px",i.style.height=j+"px"),Z!==null&&Z.setSize(i.width,i.height),this.setViewport(0,0,T,j)},this.getDrawingBufferSize=function(T){return T.set(N*_e,ne*_e).floor()},this.setDrawingBufferSize=function(T,j,oe){N=T,ne=j,_e=oe,i.width=Math.floor(T*oe),i.height=Math.floor(j*oe),this.setViewport(0,0,T,j)},this.setEffects=function(T){if(C===mi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let j=0;j<T.length;j++)if(T[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Z.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(O)},this.getViewport=function(T){return T.copy(te)},this.setViewport=function(T,j,oe,$){T.isVector4?te.set(T.x,T.y,T.z,T.w):te.set(T,j,oe,$),je.viewport(O.copy(te).multiplyScalar(_e).round())},this.getScissor=function(T){return T.copy(ue)},this.setScissor=function(T,j,oe,$){T.isVector4?ue.set(T.x,T.y,T.z,T.w):ue.set(T,j,oe,$),je.scissor(H.copy(ue).multiplyScalar(_e).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(T){je.setScissorTest(De=T)},this.setOpaqueSort=function(T){Ae=T},this.setTransparentSort=function(T){Be=T},this.getClearColor=function(T){return T.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(T=!0,j=!0,oe=!0){let $=0;if(T){let K=!1;if(ie!==null){const Ne=ie.texture.format;K=y.has(Ne)}if(K){const Ne=ie.texture.type,Ie=x.has(Ne),Le=we.getClearColor(),Ge=we.getClearAlpha(),qe=Le.r,Je=Le.g,We=Le.b;Ie?(z[0]=qe,z[1]=Je,z[2]=We,z[3]=Ge,V.clearBufferuiv(V.COLOR,0,z)):(P[0]=qe,P[1]=Je,P[2]=We,P[3]=Ge,V.clearBufferiv(V.COLOR,0,P))}else $|=V.COLOR_BUFFER_BIT}j&&($|=V.DEPTH_BUFFER_BIT),oe&&($|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",nt,!1),i.removeEventListener("webglcontextrestored",Ot,!1),i.removeEventListener("webglcontextcreationerror",Mt,!1),we.dispose(),Ee.dispose(),be.dispose(),M.dispose(),he.dispose(),xe.dispose(),Ce.dispose(),ze.dispose(),ye.dispose(),Xe.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",Us),Re.removeEventListener("sessionend",Ir),wi.stop()};function nt(T){T.preventDefault(),Ig("WebGLRenderer: Context Lost."),w=!0}function Ot(){Ig("WebGLRenderer: Context Restored."),w=!1;const T=D.autoReset,j=Pe.enabled,oe=Pe.autoUpdate,$=Pe.needsUpdate,K=Pe.type;ve(),D.autoReset=T,Pe.enabled=j,Pe.autoUpdate=oe,Pe.needsUpdate=$,Pe.type=K}function Mt(T){At("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Dn(T){const j=T.target;j.removeEventListener("dispose",Dn),gi(j)}function gi(T){Zo(T),M.remove(T)}function Zo(T){const j=M.get(T).programs;j!==void 0&&(j.forEach(function(oe){Xe.releaseProgram(oe)}),T.isShaderMaterial&&Xe.releaseShaderCache(T))}this.renderBufferDirect=function(T,j,oe,$,K,Ne){j===null&&(j=Rt);const Ie=K.isMesh&&K.matrixWorld.determinant()<0,Le=ts(T,j,oe,$,K);je.setMaterial($,Ie);let Ge=oe.index,qe=1;if($.wireframe===!0){if(Ge=Ze.getWireframeAttribute(oe),Ge===void 0)return;qe=2}const Je=oe.drawRange,We=oe.attributes.position;let $e=Je.start*qe,Ct=(Je.start+Je.count)*qe;Ne!==null&&($e=Math.max($e,Ne.start*qe),Ct=Math.min(Ct,(Ne.start+Ne.count)*qe)),Ge!==null?($e=Math.max($e,0),Ct=Math.min(Ct,Ge.count)):We!=null&&($e=Math.max($e,0),Ct=Math.min(Ct,We.count));const Yt=Ct-$e;if(Yt<0||Yt===1/0)return;ze.setup(K,$,Le,oe,Ge);let Xt,Ut=q;if(Ge!==null&&(Xt=ce.get(Ge),Ut=Ue,Ut.setIndex(Xt)),K.isMesh)$.wireframe===!0?(je.setLineWidth($.wireframeLinewidth*Qt()),Ut.setMode(V.LINES)):Ut.setMode(V.TRIANGLES);else if(K.isLine){let Ke=$.linewidth;Ke===void 0&&(Ke=1),je.setLineWidth(Ke*Qt()),K.isLineSegments?Ut.setMode(V.LINES):K.isLineLoop?Ut.setMode(V.LINE_LOOP):Ut.setMode(V.LINE_STRIP)}else K.isPoints?Ut.setMode(V.POINTS):K.isSprite&&Ut.setMode(V.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Vo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ut.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(yt.get("WEBGL_multi_draw"))Ut.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Ke=K._multiDrawStarts,wt=K._multiDrawCounts,it=K._multiDrawCount,xn=Ge?ce.get(Ge).bytesPerElement:1,Vi=M.get($).currentProgram.getUniforms();for(let Sn=0;Sn<it;Sn++)Vi.setValue(V,"_gl_DrawID",Sn),Ut.render(Ke[Sn]/xn,wt[Sn])}else if(K.isInstancedMesh)Ut.renderInstances($e,Yt,K.count);else if(oe.isInstancedBufferGeometry){const Ke=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,wt=Math.min(oe.instanceCount,Ke);Ut.renderInstances($e,Yt,wt)}else Ut.render($e,Yt)};function zr(T,j,oe){T.transparent===!0&&T.side===fa&&T.forceSinglePass===!1?(T.side=Xn,T.needsUpdate=!0,Os(T,j,oe),T.side=es,T.needsUpdate=!0,Os(T,j,oe),T.side=fa):Os(T,j,oe)}this.compile=function(T,j,oe=null){oe===null&&(oe=T),F=be.get(oe),F.init(j),U.push(F),oe.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(F.pushLight(K),K.castShadow&&F.pushShadow(K))}),T!==oe&&T.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(F.pushLight(K),K.castShadow&&F.pushShadow(K))}),F.setupLights();const $=new Set;return T.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ne=K.material;if(Ne)if(Array.isArray(Ne))for(let Ie=0;Ie<Ne.length;Ie++){const Le=Ne[Ie];zr(Le,oe,K),$.add(Le)}else zr(Ne,oe,K),$.add(Ne)}),F=U.pop(),$},this.compileAsync=function(T,j,oe=null){const $=this.compile(T,j,oe);return new Promise(K=>{function Ne(){if($.forEach(function(Ie){M.get(Ie).currentProgram.isReady()&&$.delete(Ie)}),$.size===0){K(T);return}setTimeout(Ne,10)}yt.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Ns=null;function Fr(T){Ns&&Ns(T)}function Us(){wi.stop()}function Ir(){wi.start()}const wi=new ov;wi.setAnimationLoop(Fr),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(T){Ns=T,Re.setAnimationLoop(T),T===null?wi.stop():wi.start()},Re.addEventListener("sessionstart",Us),Re.addEventListener("sessionend",Ir),this.render=function(T,j){if(j!==void 0&&j.isCamera!==!0){At("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const oe=Re.enabled===!0&&Re.isPresenting===!0,$=Z!==null&&(ie===null||oe)&&Z.begin(A,ie);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Z===null||Z.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(j),j=Re.getCamera()),T.isScene===!0&&T.onBeforeRender(A,T,j,ie),F=be.get(T,U.length),F.init(j),U.push(F),Kt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ke.setFromProjectionMatrix(Kt,Fi,j.reversedDepth),dt=this.localClippingEnabled,He=Fe.init(this.clippingPlanes,dt),L=Ee.get(T,B.length),L.init(),B.push(L),Re.enabled===!0&&Re.isPresenting===!0){const Ie=A.xr.getDepthSensingMesh();Ie!==null&&ni(Ie,j,-1/0,A.sortObjects)}ni(T,j,0,A.sortObjects),L.finish(),A.sortObjects===!0&&L.sort(Ae,Be),rt=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,rt&&we.addToRenderList(L,T),this.info.render.frame++,He===!0&&Fe.beginShadows();const K=F.state.shadowsArray;if(Pe.render(K,T,j),He===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&Z.hasRenderPass())===!1){const Ie=L.opaque,Le=L.transmissive;if(F.setupLights(),j.isArrayCamera){const Ge=j.cameras;if(Le.length>0)for(let qe=0,Je=Ge.length;qe<Je;qe++){const We=Ge[qe];vn(Ie,Le,T,We)}rt&&we.render(T);for(let qe=0,Je=Ge.length;qe<Je;qe++){const We=Ge[qe];sn(L,T,We,We.viewport)}}else Le.length>0&&vn(Ie,Le,T,j),rt&&we.render(T),sn(L,T,j)}ie!==null&&se===0&&(W.updateMultisampleRenderTarget(ie),W.updateRenderTargetMipmap(ie)),$&&Z.end(A),T.isScene===!0&&T.onAfterRender(A,T,j),ze.resetDefaultState(),pe=-1,fe=null,U.pop(),U.length>0?(F=U[U.length-1],He===!0&&Fe.setGlobalState(A.clippingPlanes,F.state.camera)):F=null,B.pop(),B.length>0?L=B[B.length-1]:L=null};function ni(T,j,oe,$){if(T.visible===!1)return;if(T.layers.test(j.layers)){if(T.isGroup)oe=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(j);else if(T.isLight)F.pushLight(T),T.castShadow&&F.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ke.intersectsSprite(T)){$&&ht.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Kt);const Ie=Ce.update(T),Le=T.material;Le.visible&&L.push(T,Ie,Le,oe,ht.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ke.intersectsObject(T))){const Ie=Ce.update(T),Le=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ht.copy(T.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),ht.copy(Ie.boundingSphere.center)),ht.applyMatrix4(T.matrixWorld).applyMatrix4(Kt)),Array.isArray(Le)){const Ge=Ie.groups;for(let qe=0,Je=Ge.length;qe<Je;qe++){const We=Ge[qe],$e=Le[We.materialIndex];$e&&$e.visible&&L.push(T,Ie,$e,oe,ht.z,We)}}else Le.visible&&L.push(T,Ie,Le,oe,ht.z,null)}}const Ne=T.children;for(let Ie=0,Le=Ne.length;Ie<Le;Ie++)ni(Ne[Ie],j,oe,$)}function sn(T,j,oe,$){const{opaque:K,transmissive:Ne,transparent:Ie}=T;F.setupLightsView(oe),He===!0&&Fe.setGlobalState(A.clippingPlanes,oe),$&&je.viewport(O.copy($)),K.length>0&&_i(K,j,oe),Ne.length>0&&_i(Ne,j,oe),Ie.length>0&&_i(Ie,j,oe),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function vn(T,j,oe,$){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[$.id]===void 0){const $e=yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[$.id]=new Bi(1,1,{generateMipmaps:!0,type:$e?ga:mi,minFilter:Cs,samples:Nt.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace})}const Ne=F.state.transmissionRenderTarget[$.id],Ie=$.viewport||O;Ne.setSize(Ie.z*A.transmissionResolutionScale,Ie.w*A.transmissionResolutionScale);const Le=A.getRenderTarget(),Ge=A.getActiveCubeFace(),qe=A.getActiveMipmapLevel();A.setRenderTarget(Ne),A.getClearColor(Me),Se=A.getClearAlpha(),Se<1&&A.setClearColor(16777215,.5),A.clear(),rt&&we.render(oe);const Je=A.toneMapping;A.toneMapping=Ii;const We=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),F.setupLightsView($),He===!0&&Fe.setGlobalState(A.clippingPlanes,$),_i(T,oe,$),W.updateMultisampleRenderTarget(Ne),W.updateRenderTargetMipmap(Ne),yt.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Ct=0,Yt=j.length;Ct<Yt;Ct++){const Xt=j[Ct],{object:Ut,geometry:Ke,material:wt,group:it}=Xt;if(wt.side===fa&&Ut.layers.test($.layers)){const xn=wt.side;wt.side=Xn,wt.needsUpdate=!0,Ls(Ut,oe,$,Ke,wt,it),wt.side=xn,wt.needsUpdate=!0,$e=!0}}$e===!0&&(W.updateMultisampleRenderTarget(Ne),W.updateRenderTargetMipmap(Ne))}A.setRenderTarget(Le,Ge,qe),A.setClearColor(Me,Se),We!==void 0&&($.viewport=We),A.toneMapping=Je}function _i(T,j,oe){const $=j.isScene===!0?j.overrideMaterial:null;for(let K=0,Ne=T.length;K<Ne;K++){const Ie=T[K],{object:Le,geometry:Ge,group:qe}=Ie;let Je=Ie.material;Je.allowOverride===!0&&$!==null&&(Je=$),Le.layers.test(oe.layers)&&Ls(Le,j,oe,Ge,Je,qe)}}function Ls(T,j,oe,$,K,Ne){T.onBeforeRender(A,j,oe,$,K,Ne),T.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),K.onBeforeRender(A,j,oe,$,T,Ne),K.transparent===!0&&K.side===fa&&K.forceSinglePass===!1?(K.side=Xn,K.needsUpdate=!0,A.renderBufferDirect(oe,j,$,K,T,Ne),K.side=es,K.needsUpdate=!0,A.renderBufferDirect(oe,j,$,K,T,Ne),K.side=fa):A.renderBufferDirect(oe,j,$,K,T,Ne),T.onAfterRender(A,j,oe,$,K,Ne)}function Os(T,j,oe){j.isScene!==!0&&(j=Rt);const $=M.get(T),K=F.state.lights,Ne=F.state.shadowsArray,Ie=K.state.version,Le=Xe.getParameters(T,K.state,Ne,j,oe),Ge=Xe.getProgramCacheKey(Le);let qe=$.programs;$.environment=T.isMeshStandardMaterial?j.environment:null,$.fog=j.fog,$.envMap=(T.isMeshStandardMaterial?xe:he).get(T.envMap||$.environment),$.envMapRotation=$.environment!==null&&T.envMap===null?j.environmentRotation:T.envMapRotation,qe===void 0&&(T.addEventListener("dispose",Dn),qe=new Map,$.programs=qe);let Je=qe.get(Ge);if(Je!==void 0){if($.currentProgram===Je&&$.lightsStateVersion===Ie)return Br(T,Le),Je}else Le.uniforms=Xe.getUniforms(T),T.onBeforeCompile(Le,A),Je=Xe.acquireProgram(Le,Ge),qe.set(Ge,Je),$.uniforms=Le.uniforms;const We=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(We.clippingPlanes=Fe.uniform),Br(T,Le),$.needsLights=Sa(T),$.lightsStateVersion=Ie,$.needsLights&&(We.ambientLightColor.value=K.state.ambient,We.lightProbe.value=K.state.probe,We.directionalLights.value=K.state.directional,We.directionalLightShadows.value=K.state.directionalShadow,We.spotLights.value=K.state.spot,We.spotLightShadows.value=K.state.spotShadow,We.rectAreaLights.value=K.state.rectArea,We.ltc_1.value=K.state.rectAreaLTC1,We.ltc_2.value=K.state.rectAreaLTC2,We.pointLights.value=K.state.point,We.pointLightShadows.value=K.state.pointShadow,We.hemisphereLights.value=K.state.hemi,We.directionalShadowMap.value=K.state.directionalShadowMap,We.directionalShadowMatrix.value=K.state.directionalShadowMatrix,We.spotShadowMap.value=K.state.spotShadowMap,We.spotLightMatrix.value=K.state.spotLightMatrix,We.spotLightMap.value=K.state.spotLightMap,We.pointShadowMap.value=K.state.pointShadowMap,We.pointShadowMatrix.value=K.state.pointShadowMatrix),$.currentProgram=Je,$.uniformsList=null,Je}function Ko(T){if(T.uniformsList===null){const j=T.currentProgram.getUniforms();T.uniformsList=zc.seqWithValue(j.seq,T.uniforms)}return T.uniformsList}function Br(T,j){const oe=M.get(T);oe.outputColorSpace=j.outputColorSpace,oe.batching=j.batching,oe.batchingColor=j.batchingColor,oe.instancing=j.instancing,oe.instancingColor=j.instancingColor,oe.instancingMorph=j.instancingMorph,oe.skinning=j.skinning,oe.morphTargets=j.morphTargets,oe.morphNormals=j.morphNormals,oe.morphColors=j.morphColors,oe.morphTargetsCount=j.morphTargetsCount,oe.numClippingPlanes=j.numClippingPlanes,oe.numIntersection=j.numClipIntersection,oe.vertexAlphas=j.vertexAlphas,oe.vertexTangents=j.vertexTangents,oe.toneMapping=j.toneMapping}function ts(T,j,oe,$,K){j.isScene!==!0&&(j=Rt),W.resetTextureUnits();const Ne=j.fog,Ie=$.isMeshStandardMaterial?j.environment:null,Le=ie===null?A.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Ur,Ge=($.isMeshStandardMaterial?xe:he).get($.envMap||Ie),qe=$.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,Je=!!oe.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),We=!!oe.morphAttributes.position,$e=!!oe.morphAttributes.normal,Ct=!!oe.morphAttributes.color;let Yt=Ii;$.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Yt=A.toneMapping);const Xt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Ut=Xt!==void 0?Xt.length:0,Ke=M.get($),wt=F.state.lights;if(He===!0&&(dt===!0||T!==fe)){const Mn=T===fe&&$.id===pe;Fe.setState($,T,Mn)}let it=!1;$.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==wt.state.version||Ke.outputColorSpace!==Le||K.isBatchedMesh&&Ke.batching===!1||!K.isBatchedMesh&&Ke.batching===!0||K.isBatchedMesh&&Ke.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Ke.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Ke.instancing===!1||!K.isInstancedMesh&&Ke.instancing===!0||K.isSkinnedMesh&&Ke.skinning===!1||!K.isSkinnedMesh&&Ke.skinning===!0||K.isInstancedMesh&&Ke.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ke.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ke.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ke.instancingMorph===!1&&K.morphTexture!==null||Ke.envMap!==Ge||$.fog===!0&&Ke.fog!==Ne||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Fe.numPlanes||Ke.numIntersection!==Fe.numIntersection)||Ke.vertexAlphas!==qe||Ke.vertexTangents!==Je||Ke.morphTargets!==We||Ke.morphNormals!==$e||Ke.morphColors!==Ct||Ke.toneMapping!==Yt||Ke.morphTargetsCount!==Ut)&&(it=!0):(it=!0,Ke.__version=$.version);let xn=Ke.currentProgram;it===!0&&(xn=Os($,j,K));let Vi=!1,Sn=!1,ii=!1;const Pt=xn.getUniforms(),yn=Ke.uniforms;if(je.useProgram(xn.program)&&(Vi=!0,Sn=!0,ii=!0),$.id!==pe&&(pe=$.id,Sn=!0),Vi||fe!==T){je.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Pt.setValue(V,"projectionMatrix",T.projectionMatrix),Pt.setValue(V,"viewMatrix",T.matrixWorldInverse);const En=Pt.map.cameraPosition;En!==void 0&&En.setValue(V,gt.setFromMatrixPosition(T.matrixWorld)),Nt.logarithmicDepthBuffer&&Pt.setValue(V,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Pt.setValue(V,"isOrthographic",T.isOrthographicCamera===!0),fe!==T&&(fe=T,Sn=!0,ii=!0)}if(Ke.needsLights&&(wt.state.directionalShadowMap.length>0&&Pt.setValue(V,"directionalShadowMap",wt.state.directionalShadowMap,W),wt.state.spotShadowMap.length>0&&Pt.setValue(V,"spotShadowMap",wt.state.spotShadowMap,W),wt.state.pointShadowMap.length>0&&Pt.setValue(V,"pointShadowMap",wt.state.pointShadowMap,W)),K.isSkinnedMesh){Pt.setOptional(V,K,"bindMatrix"),Pt.setOptional(V,K,"bindMatrixInverse");const Mn=K.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Pt.setValue(V,"boneTexture",Mn.boneTexture,W))}K.isBatchedMesh&&(Pt.setOptional(V,K,"batchingTexture"),Pt.setValue(V,"batchingTexture",K._matricesTexture,W),Pt.setOptional(V,K,"batchingIdTexture"),Pt.setValue(V,"batchingIdTexture",K._indirectTexture,W),Pt.setOptional(V,K,"batchingColorTexture"),K._colorsTexture!==null&&Pt.setValue(V,"batchingColorTexture",K._colorsTexture,W));const fn=oe.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&lt.update(K,oe,xn),(Sn||Ke.receiveShadow!==K.receiveShadow)&&(Ke.receiveShadow=K.receiveShadow,Pt.setValue(V,"receiveShadow",K.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(yn.envMap.value=Ge,yn.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&j.environment!==null&&(yn.envMapIntensity.value=j.environmentIntensity),yn.dfgLUT!==void 0&&(yn.dfgLUT.value=RA()),Sn&&(Pt.setValue(V,"toneMappingExposure",A.toneMappingExposure),Ke.needsLights&&Hr(yn,ii),Ne&&$.fog===!0&&tt.refreshFogUniforms(yn,Ne),tt.refreshMaterialUniforms(yn,$,_e,ne,F.state.transmissionRenderTarget[T.id]),zc.upload(V,Ko(Ke),yn,W)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(zc.upload(V,Ko(Ke),yn,W),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Pt.setValue(V,"center",K.center),Pt.setValue(V,"modelViewMatrix",K.modelViewMatrix),Pt.setValue(V,"normalMatrix",K.normalMatrix),Pt.setValue(V,"modelMatrix",K.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Mn=$.uniformsGroups;for(let En=0,Ps=Mn.length;En<Ps;En++){const vi=Mn[En];ye.update(vi,xn),ye.bind(vi,xn)}}return xn}function Hr(T,j){T.ambientLightColor.needsUpdate=j,T.lightProbe.needsUpdate=j,T.directionalLights.needsUpdate=j,T.directionalLightShadows.needsUpdate=j,T.pointLights.needsUpdate=j,T.pointLightShadows.needsUpdate=j,T.spotLights.needsUpdate=j,T.spotLightShadows.needsUpdate=j,T.rectAreaLights.needsUpdate=j,T.hemisphereLights.needsUpdate=j}function Sa(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(T,j,oe){const $=M.get(T);$.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),M.get(T.texture).__webglTexture=j,M.get(T.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:oe,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,j){const oe=M.get(T);oe.__webglFramebuffer=j,oe.__useDefaultFramebuffer=j===void 0};const ya=V.createFramebuffer();this.setRenderTarget=function(T,j=0,oe=0){ie=T,k=j,se=oe;let $=null,K=!1,Ne=!1;if(T){const Le=M.get(T);if(Le.__useDefaultFramebuffer!==void 0){je.bindFramebuffer(V.FRAMEBUFFER,Le.__webglFramebuffer),O.copy(T.viewport),H.copy(T.scissor),ae=T.scissorTest,je.viewport(O),je.scissor(H),je.setScissorTest(ae),pe=-1;return}else if(Le.__webglFramebuffer===void 0)W.setupRenderTarget(T);else if(Le.__hasExternalTextures)W.rebindTextures(T,M.get(T.texture).__webglTexture,M.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Je=T.depthTexture;if(Le.__boundDepthTexture!==Je){if(Je!==null&&M.has(Je)&&(T.width!==Je.image.width||T.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(T)}}const Ge=T.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ne=!0);const qe=M.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(qe[j])?$=qe[j][oe]:$=qe[j],K=!0):T.samples>0&&W.useMultisampledRTT(T)===!1?$=M.get(T).__webglMultisampledFramebuffer:Array.isArray(qe)?$=qe[oe]:$=qe,O.copy(T.viewport),H.copy(T.scissor),ae=T.scissorTest}else O.copy(te).multiplyScalar(_e).floor(),H.copy(ue).multiplyScalar(_e).floor(),ae=De;if(oe!==0&&($=ya),je.bindFramebuffer(V.FRAMEBUFFER,$)&&je.drawBuffers(T,$),je.viewport(O),je.scissor(H),je.setScissorTest(ae),K){const Le=M.get(T.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+j,Le.__webglTexture,oe)}else if(Ne){const Le=j;for(let Ge=0;Ge<T.textures.length;Ge++){const qe=M.get(T.textures[Ge]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ge,qe.__webglTexture,oe,Le)}}else if(T!==null&&oe!==0){const Le=M.get(T.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Le.__webglTexture,oe)}pe=-1},this.readRenderTargetPixels=function(T,j,oe,$,K,Ne,Ie,Le=0){if(!(T&&T.isWebGLRenderTarget)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=M.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ge=Ge[Ie]),Ge){je.bindFramebuffer(V.FRAMEBUFFER,Ge);try{const qe=T.textures[Le],Je=qe.format,We=qe.type;if(!Nt.textureFormatReadable(Je)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Nt.textureTypeReadable(We)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=T.width-$&&oe>=0&&oe<=T.height-K&&(T.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Le),V.readPixels(j,oe,$,K,Te.convert(Je),Te.convert(We),Ne))}finally{const qe=ie!==null?M.get(ie).__webglFramebuffer:null;je.bindFramebuffer(V.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(T,j,oe,$,K,Ne,Ie,Le=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=M.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ge=Ge[Ie]),Ge)if(j>=0&&j<=T.width-$&&oe>=0&&oe<=T.height-K){je.bindFramebuffer(V.FRAMEBUFFER,Ge);const qe=T.textures[Le],Je=qe.format,We=qe.type;if(!Nt.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Nt.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,$e),V.bufferData(V.PIXEL_PACK_BUFFER,Ne.byteLength,V.STREAM_READ),T.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Le),V.readPixels(j,oe,$,K,Te.convert(Je),Te.convert(We),0);const Ct=ie!==null?M.get(ie).__webglFramebuffer:null;je.bindFramebuffer(V.FRAMEBUFFER,Ct);const Yt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Zy(V,Yt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,$e),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ne),V.deleteBuffer($e),V.deleteSync(Yt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,j=null,oe=0){const $=Math.pow(2,-oe),K=Math.floor(T.image.width*$),Ne=Math.floor(T.image.height*$),Ie=j!==null?j.x:0,Le=j!==null?j.y:0;W.setTexture2D(T,0),V.copyTexSubImage2D(V.TEXTURE_2D,oe,0,0,Ie,Le,K,Ne),je.unbindTexture()};const ns=V.createFramebuffer(),Ma=V.createFramebuffer();this.copyTextureToTexture=function(T,j,oe=null,$=null,K=0,Ne=null){Ne===null&&(K!==0?(Vo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ne=K,K=0):Ne=0);let Ie,Le,Ge,qe,Je,We,$e,Ct,Yt;const Xt=T.isCompressedTexture?T.mipmaps[Ne]:T.image;if(oe!==null)Ie=oe.max.x-oe.min.x,Le=oe.max.y-oe.min.y,Ge=oe.isBox3?oe.max.z-oe.min.z:1,qe=oe.min.x,Je=oe.min.y,We=oe.isBox3?oe.min.z:0;else{const fn=Math.pow(2,-K);Ie=Math.floor(Xt.width*fn),Le=Math.floor(Xt.height*fn),T.isDataArrayTexture?Ge=Xt.depth:T.isData3DTexture?Ge=Math.floor(Xt.depth*fn):Ge=1,qe=0,Je=0,We=0}$!==null?($e=$.x,Ct=$.y,Yt=$.z):($e=0,Ct=0,Yt=0);const Ut=Te.convert(j.format),Ke=Te.convert(j.type);let wt;j.isData3DTexture?(W.setTexture3D(j,0),wt=V.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(W.setTexture2DArray(j,0),wt=V.TEXTURE_2D_ARRAY):(W.setTexture2D(j,0),wt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment);const it=V.getParameter(V.UNPACK_ROW_LENGTH),xn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Vi=V.getParameter(V.UNPACK_SKIP_PIXELS),Sn=V.getParameter(V.UNPACK_SKIP_ROWS),ii=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Xt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Xt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,qe),V.pixelStorei(V.UNPACK_SKIP_ROWS,Je),V.pixelStorei(V.UNPACK_SKIP_IMAGES,We);const Pt=T.isDataArrayTexture||T.isData3DTexture,yn=j.isDataArrayTexture||j.isData3DTexture;if(T.isDepthTexture){const fn=M.get(T),Mn=M.get(j),En=M.get(fn.__renderTarget),Ps=M.get(Mn.__renderTarget);je.bindFramebuffer(V.READ_FRAMEBUFFER,En.__webglFramebuffer),je.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ps.__webglFramebuffer);for(let vi=0;vi<Ge;vi++)Pt&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,M.get(T).__webglTexture,K,We+vi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,M.get(j).__webglTexture,Ne,Yt+vi)),V.blitFramebuffer(qe,Je,Ie,Le,$e,Ct,Ie,Le,V.DEPTH_BUFFER_BIT,V.NEAREST);je.bindFramebuffer(V.READ_FRAMEBUFFER,null),je.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(K!==0||T.isRenderTargetTexture||M.has(T)){const fn=M.get(T),Mn=M.get(j);je.bindFramebuffer(V.READ_FRAMEBUFFER,ns),je.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ma);for(let En=0;En<Ge;En++)Pt?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,fn.__webglTexture,K,We+En):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,fn.__webglTexture,K),yn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Mn.__webglTexture,Ne,Yt+En):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Mn.__webglTexture,Ne),K!==0?V.blitFramebuffer(qe,Je,Ie,Le,$e,Ct,Ie,Le,V.COLOR_BUFFER_BIT,V.NEAREST):yn?V.copyTexSubImage3D(wt,Ne,$e,Ct,Yt+En,qe,Je,Ie,Le):V.copyTexSubImage2D(wt,Ne,$e,Ct,qe,Je,Ie,Le);je.bindFramebuffer(V.READ_FRAMEBUFFER,null),je.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else yn?T.isDataTexture||T.isData3DTexture?V.texSubImage3D(wt,Ne,$e,Ct,Yt,Ie,Le,Ge,Ut,Ke,Xt.data):j.isCompressedArrayTexture?V.compressedTexSubImage3D(wt,Ne,$e,Ct,Yt,Ie,Le,Ge,Ut,Xt.data):V.texSubImage3D(wt,Ne,$e,Ct,Yt,Ie,Le,Ge,Ut,Ke,Xt):T.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ne,$e,Ct,Ie,Le,Ut,Ke,Xt.data):T.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ne,$e,Ct,Xt.width,Xt.height,Ut,Xt.data):V.texSubImage2D(V.TEXTURE_2D,Ne,$e,Ct,Ie,Le,Ut,Ke,Xt);V.pixelStorei(V.UNPACK_ROW_LENGTH,it),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,xn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Vi),V.pixelStorei(V.UNPACK_SKIP_ROWS,Sn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ii),Ne===0&&j.generateMipmaps&&V.generateMipmap(wt),je.unbindTexture()},this.initRenderTarget=function(T){M.get(T).__webglFramebuffer===void 0&&W.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?W.setTextureCube(T,0):T.isData3DTexture?W.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?W.setTexture2DArray(T,0):W.setTexture2D(T,0),je.unbindTexture()},this.resetState=function(){k=0,se=0,ie=null,je.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(t),i.unpackColorSpace=Et._getUnpackColorSpace()}}const wA=({rotation:o="auto"})=>{const t=ti.useRef(null);return ti.useEffect(()=>{if(!t.current)return;const i=new SM;i.fog=new Hh(657930,.002);const s=new pi(75,window.innerWidth/window.innerHeight,.1,2e3);s.position.z=1e3;const l=new CA({canvas:t.current,alpha:!0,antialias:!0});l.setSize(window.innerWidth,window.innerHeight),l.setPixelRatio(Math.min(window.devicePixelRatio,2));const u=U=>{const Z=document.createElement("canvas");Z.width=64,Z.height=64;const A=Z.getContext("2d");if(!A)return new wn;if(A.save(),A.translate(32,32),A.rotate(0),A.translate(-32,-32),U==="star"){const k=A.createRadialGradient(32,32,0,32,32,32);k.addColorStop(0,"rgba(255, 230, 0, 1)"),k.addColorStop(1,"rgba(0, 0, 0, 0)"),A.fillStyle=k,A.beginPath(),A.moveTo(32,0),A.quadraticCurveTo(32,32,64,32),A.quadraticCurveTo(32,32,32,64),A.quadraticCurveTo(32,32,0,32),A.quadraticCurveTo(32,32,32,0),A.fill()}else A.fillStyle="#FFE600",A.fillRect(10,20,10,24),A.fillRect(44,20,10,24),A.fillRect(20,30,24,4);A.restore();const w=new AM(Z);return w.needsUpdate=!0,w},d=(U,Z,A)=>{const w=new Ci,k=new Float32Array(Z*3);for(let ie=0;ie<Z*3;ie++)k[ie]=(Math.random()-.5)*3e3;w.setAttribute("position",new Ri(k,3));const se=new av({size:A,map:U,transparent:!0,opacity:.8,blending:Ud,depthWrite:!1});return new TM(w,se)};let h=u("star"),m=u("dumbbell");const p=window.innerWidth<768,v=p?800:1500,_=p?150:300,S=d(h,v,15),E=d(m,_,20);i.add(S),i.add(E);let R=0,C=0,y=window.innerWidth/2,x=window.innerHeight/2;const z=U=>{R=U.clientX-y,C=U.clientY-x};document.addEventListener("mousemove",z);const P=new UM;let L;const F=()=>{const U=P.getElapsedTime();o==="auto"?(S.rotation.y=U*.05+R*5e-4,S.rotation.x=U*.02+C*5e-4,E.rotation.y=U*.03+R*5e-4,E.rotation.x=U*.02+C*5e-4):(S.rotation.y=R*5e-4,S.rotation.x=C*5e-4,E.rotation.y=R*5e-4,E.rotation.x=C*5e-4),S.position.y=Math.sin(U*.2)*10+C*.05,E.position.y=Math.cos(U*.3)*15+C*.05,l.render(i,s),L=requestAnimationFrame(F)};F();const B=()=>{const U=window.innerWidth,Z=window.innerHeight;y=U/2,x=Z/2,s.aspect=U/Z,s.updateProjectionMatrix(),l.setSize(U,Z)};return window.addEventListener("resize",B),()=>{document.removeEventListener("mousemove",z),window.removeEventListener("resize",B),cancelAnimationFrame(L),S.geometry.dispose(),S.material.dispose(),E.geometry.dispose(),E.material.dispose(),l.dispose()}},[o]),G.jsx("canvas",{ref:t,className:"fixed inset-0 z-0 pointer-events-none"})};function DA(){return G.jsxs("div",{className:"bg-fk-dark min-h-screen text-white font-montserrat",children:[G.jsx(wA,{rotation:"auto"}),G.jsx(uy,{}),G.jsxs("main",{children:[G.jsx(fy,{}),G.jsx(dy,{}),G.jsx(ly,{}),G.jsx(py,{}),G.jsx(hy,{})]}),G.jsx(cy,{})]})}TS.createRoot(document.getElementById("root")).render(G.jsx(ti.StrictMode,{children:G.jsx(DA,{})}));
