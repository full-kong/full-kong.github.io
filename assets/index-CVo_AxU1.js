(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Zf={exports:{}},Do={};var vg;function gS(){if(vg)return Do;vg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:u}}return Do.Fragment=t,Do.jsx=i,Do.jsxs=i,Do}var xg;function _S(){return xg||(xg=1,Zf.exports=gS()),Zf.exports}var C=_S(),Kf={exports:{}},at={};var Sg;function vS(){if(Sg)return at;Sg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.iterator;function b(U){return U===null||typeof U!="object"?null:(U=S&&U[S]||U["@@iterator"],typeof U=="function"?U:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,y={};function x(U,ne,_e){this.props=U,this.context=ne,this.refs=y,this.updater=_e||R}x.prototype.isReactComponent={},x.prototype.setState=function(U,ne){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ne,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function F(){}F.prototype=x.prototype;function z(U,ne,_e){this.props=U,this.context=ne,this.refs=y,this.updater=_e||R}var O=z.prototype=new F;O.constructor=z,w(O,x.prototype),O.isPureReactComponent=!0;var I=Array.isArray;function H(){}var L={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function A(U,ne,_e){var Ae=_e.ref;return{$$typeof:o,type:U,key:ne,ref:Ae!==void 0?Ae:null,props:_e}}function N(U,ne){return A(U.type,ne,U.props)}function k(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function se(U){var ne={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(_e){return ne[_e]})}var ie=/\/+/g;function pe(U,ne){return typeof U=="object"&&U!==null&&U.key!=null?se(""+U.key):ne.toString(36)}function fe(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(H,H):(U.status="pending",U.then(function(ne){U.status==="pending"&&(U.status="fulfilled",U.value=ne)},function(ne){U.status==="pending"&&(U.status="rejected",U.reason=ne)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function P(U,ne,_e,Ae,Be){var te=typeof U;(te==="undefined"||te==="boolean")&&(U=null);var ue=!1;if(U===null)ue=!0;else switch(te){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(U.$$typeof){case o:case t:ue=!0;break;case v:return ue=U._init,P(ue(U._payload),ne,_e,Ae,Be)}}if(ue)return Be=Be(U),ue=Ae===""?"."+pe(U,0):Ae,I(Be)?(_e="",ue!=null&&(_e=ue.replace(ie,"$&/")+"/"),P(Be,ne,_e,"",function(He){return He})):Be!=null&&(k(Be)&&(Be=N(Be,_e+(Be.key==null||U&&U.key===Be.key?"":(""+Be.key).replace(ie,"$&/")+"/")+ue)),ne.push(Be)),1;ue=0;var Ne=Ae===""?".":Ae+":";if(I(U))for(var ke=0;ke<U.length;ke++)Ae=U[ke],te=Ne+pe(Ae,ke),ue+=P(Ae,ne,_e,te,Be);else if(ke=b(U),typeof ke=="function")for(U=ke.call(U),ke=0;!(Ae=U.next()).done;)Ae=Ae.value,te=Ne+pe(Ae,ke++),ue+=P(Ae,ne,_e,te,Be);else if(te==="object"){if(typeof U.then=="function")return P(fe(U),ne,_e,Ae,Be);throw ne=String(U),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return ue}function G(U,ne,_e){if(U==null)return U;var Ae=[],Be=0;return P(U,Ae,"","",function(te){return ne.call(_e,te,Be++)}),Ae}function ae(U){if(U._status===-1){var ne=U._result;ne=ne(),ne.then(function(_e){(U._status===0||U._status===-1)&&(U._status=1,U._result=_e)},function(_e){(U._status===0||U._status===-1)&&(U._status=2,U._result=_e)}),U._status===-1&&(U._status=0,U._result=ne)}if(U._status===1)return U._result.default;throw U._result}var Me=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},Se={map:G,forEach:function(U,ne,_e){G(U,function(){ne.apply(this,arguments)},_e)},count:function(U){var ne=0;return G(U,function(){ne++}),ne},toArray:function(U){return G(U,function(ne){return ne})||[]},only:function(U){if(!k(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return at.Activity=g,at.Children=Se,at.Component=x,at.Fragment=i,at.Profiler=l,at.PureComponent=z,at.StrictMode=s,at.Suspense=m,at.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,at.__COMPILER_RUNTIME={__proto__:null,c:function(U){return L.H.useMemoCache(U)}},at.cache=function(U){return function(){return U.apply(null,arguments)}},at.cacheSignal=function(){return null},at.cloneElement=function(U,ne,_e){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Ae=w({},U.props),Be=U.key;if(ne!=null)for(te in ne.key!==void 0&&(Be=""+ne.key),ne)!Z.call(ne,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&ne.ref===void 0||(Ae[te]=ne[te]);var te=arguments.length-2;if(te===1)Ae.children=_e;else if(1<te){for(var ue=Array(te),Ne=0;Ne<te;Ne++)ue[Ne]=arguments[Ne+2];Ae.children=ue}return A(U.type,Be,Ae)},at.createContext=function(U){return U={$$typeof:d,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},at.createElement=function(U,ne,_e){var Ae,Be={},te=null;if(ne!=null)for(Ae in ne.key!==void 0&&(te=""+ne.key),ne)Z.call(ne,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(Be[Ae]=ne[Ae]);var ue=arguments.length-2;if(ue===1)Be.children=_e;else if(1<ue){for(var Ne=Array(ue),ke=0;ke<ue;ke++)Ne[ke]=arguments[ke+2];Be.children=Ne}if(U&&U.defaultProps)for(Ae in ue=U.defaultProps,ue)Be[Ae]===void 0&&(Be[Ae]=ue[Ae]);return A(U,te,Be)},at.createRef=function(){return{current:null}},at.forwardRef=function(U){return{$$typeof:h,render:U}},at.isValidElement=k,at.lazy=function(U){return{$$typeof:v,_payload:{_status:-1,_result:U},_init:ae}},at.memo=function(U,ne){return{$$typeof:p,type:U,compare:ne===void 0?null:ne}},at.startTransition=function(U){var ne=L.T,_e={};L.T=_e;try{var Ae=U(),Be=L.S;Be!==null&&Be(_e,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(H,Me)}catch(te){Me(te)}finally{ne!==null&&_e.types!==null&&(ne.types=_e.types),L.T=ne}},at.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},at.use=function(U){return L.H.use(U)},at.useActionState=function(U,ne,_e){return L.H.useActionState(U,ne,_e)},at.useCallback=function(U,ne){return L.H.useCallback(U,ne)},at.useContext=function(U){return L.H.useContext(U)},at.useDebugValue=function(){},at.useDeferredValue=function(U,ne){return L.H.useDeferredValue(U,ne)},at.useEffect=function(U,ne){return L.H.useEffect(U,ne)},at.useEffectEvent=function(U){return L.H.useEffectEvent(U)},at.useId=function(){return L.H.useId()},at.useImperativeHandle=function(U,ne,_e){return L.H.useImperativeHandle(U,ne,_e)},at.useInsertionEffect=function(U,ne){return L.H.useInsertionEffect(U,ne)},at.useLayoutEffect=function(U,ne){return L.H.useLayoutEffect(U,ne)},at.useMemo=function(U,ne){return L.H.useMemo(U,ne)},at.useOptimistic=function(U,ne){return L.H.useOptimistic(U,ne)},at.useReducer=function(U,ne,_e){return L.H.useReducer(U,ne,_e)},at.useRef=function(U){return L.H.useRef(U)},at.useState=function(U){return L.H.useState(U)},at.useSyncExternalStore=function(U,ne,_e){return L.H.useSyncExternalStore(U,ne,_e)},at.useTransition=function(){return L.H.useTransition()},at.version="19.2.3",at}var yg;function Ch(){return yg||(yg=1,Kf.exports=vS()),Kf.exports}var _n=Ch(),Qf={exports:{}},Uo={},Jf={exports:{}},$f={};var Mg;function xS(){return Mg||(Mg=1,(function(o){function t(P,G){var ae=P.length;P.push(G);e:for(;0<ae;){var Me=ae-1>>>1,Se=P[Me];if(0<l(Se,G))P[Me]=G,P[ae]=Se,ae=Me;else break e}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var G=P[0],ae=P.pop();if(ae!==G){P[0]=ae;e:for(var Me=0,Se=P.length,U=Se>>>1;Me<U;){var ne=2*(Me+1)-1,_e=P[ne],Ae=ne+1,Be=P[Ae];if(0>l(_e,ae))Ae<Se&&0>l(Be,_e)?(P[Me]=Be,P[Ae]=ae,Me=Ae):(P[Me]=_e,P[ne]=ae,Me=ne);else if(Ae<Se&&0>l(Be,ae))P[Me]=Be,P[Ae]=ae,Me=Ae;else break e}}return G}function l(P,G){var ae=P.sortIndex-G.sortIndex;return ae!==0?ae:P.id-G.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],v=1,g=null,S=3,b=!1,R=!1,w=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function O(P){for(var G=i(p);G!==null;){if(G.callback===null)s(p);else if(G.startTime<=P)s(p),G.sortIndex=G.expirationTime,t(m,G);else break;G=i(p)}}function I(P){if(w=!1,O(P),!R)if(i(m)!==null)R=!0,H||(H=!0,se());else{var G=i(p);G!==null&&fe(I,G.startTime-P)}}var H=!1,L=-1,Z=5,A=-1;function N(){return y?!0:!(o.unstable_now()-A<Z)}function k(){if(y=!1,H){var P=o.unstable_now();A=P;var G=!0;try{e:{R=!1,w&&(w=!1,F(L),L=-1),b=!0;var ae=S;try{t:{for(O(P),g=i(m);g!==null&&!(g.expirationTime>P&&N());){var Me=g.callback;if(typeof Me=="function"){g.callback=null,S=g.priorityLevel;var Se=Me(g.expirationTime<=P);if(P=o.unstable_now(),typeof Se=="function"){g.callback=Se,O(P),G=!0;break t}g===i(m)&&s(m),O(P)}else s(m);g=i(m)}if(g!==null)G=!0;else{var U=i(p);U!==null&&fe(I,U.startTime-P),G=!1}}break e}finally{g=null,S=ae,b=!1}G=void 0}}finally{G?se():H=!1}}}var se;if(typeof z=="function")se=function(){z(k)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,pe=ie.port2;ie.port1.onmessage=k,se=function(){pe.postMessage(null)}}else se=function(){x(k,0)};function fe(P,G){L=x(function(){P(o.unstable_now())},G)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(P){switch(S){case 1:case 2:case 3:var G=3;break;default:G=S}var ae=S;S=G;try{return P()}finally{S=ae}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(P,G){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var ae=S;S=P;try{return G()}finally{S=ae}},o.unstable_scheduleCallback=function(P,G,ae){var Me=o.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?Me+ae:Me):ae=Me,P){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=ae+Se,P={id:v++,callback:G,priorityLevel:P,startTime:ae,expirationTime:Se,sortIndex:-1},ae>Me?(P.sortIndex=ae,t(p,P),i(m)===null&&P===i(p)&&(w?(F(L),L=-1):w=!0,fe(I,ae-Me))):(P.sortIndex=Se,t(m,P),R||b||(R=!0,H||(H=!0,se()))),P},o.unstable_shouldYield=N,o.unstable_wrapCallback=function(P){var G=S;return function(){var ae=S;S=G;try{return P.apply(this,arguments)}finally{S=ae}}}})($f)),$f}var bg;function SS(){return bg||(bg=1,Jf.exports=xS()),Jf.exports}var ed={exports:{}},Un={};var Eg;function yS(){if(Eg)return Un;Eg=1;var o=Ch();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:v}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Un.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,v)},Un.flushSync=function(m){var p=d.T,v=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=p,s.p=v,s.d.f()}},Un.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Un.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Un.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,g=h(v,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,b=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:S,fetchPriority:b}):v==="script"&&s.d.X(m,{crossOrigin:g,integrity:S,fetchPriority:b,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Un.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Un.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,g=h(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Un.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Un.requestFormReset=function(m){s.d.r(m)},Un.unstable_batchedUpdates=function(m,p){return m(p)},Un.useFormState=function(m,p,v){return d.H.useFormState(m,p,v)},Un.useFormStatus=function(){return d.H.useHostTransitionStatus()},Un.version="19.2.3",Un}var Tg;function MS(){if(Tg)return ed.exports;Tg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),ed.exports=yS(),ed.exports}var Ag;function bS(){if(Ag)return Uo;Ag=1;var o=SS(),t=Ch(),i=MS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var _=!1,E=c.child;E;){if(E===a){_=!0,a=c,r=f;break}if(E===r){_=!0,r=c,a=f;break}E=E.sibling}if(!_){for(E=f.child;E;){if(E===a){_=!0,a=f,r=c;break}if(E===r){_=!0,r=f,a=c;break}E=E.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,S=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),z=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function se(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Symbol.for("react.client.reference");function pe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ie?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case I:return"Suspense";case H:return"SuspenseList";case A:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case z:return e.displayName||"Context";case F:return(e._context.displayName||"Context")+".Consumer";case O:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case L:return n=e.displayName||null,n!==null?n:pe(e.type)||"Memo";case Z:n=e._payload,e=e._init;try{return pe(e(n))}catch{}}return null}var fe=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},Me=[],Se=-1;function U(e){return{current:e}}function ne(e){0>Se||(e.current=Me[Se],Me[Se]=null,Se--)}function _e(e,n){Se++,Me[Se]=e.current,e.current=n}var Ae=U(null),Be=U(null),te=U(null),ue=U(null);function Ne(e,n){switch(_e(te,n),_e(Be,e),_e(Ae,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?G0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=G0(n),e=V0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ne(Ae),_e(Ae,e)}function ke(){ne(Ae),ne(Be),ne(te)}function He(e){e.memoizedState!==null&&_e(ue,e);var n=Ae.current,a=V0(n,e.type);n!==a&&(_e(Be,e),_e(Ae,a))}function dt(e){Be.current===e&&(ne(Ae),ne(Be)),ue.current===e&&(ne(ue),Ro._currentValue=ae)}var Kt,gt;function ht(e){if(Kt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Kt=n&&n[1]||"",gt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Kt+e+gt}var Rt=!1;function rt(e,n){if(!e||Rt)return"";Rt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var ge=function(){throw Error()};if(Object.defineProperty(ge.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ge,[])}catch(le){var ee=le}Reflect.construct(e,[],ge)}else{try{ge.call()}catch(le){ee=le}e.call(ge.prototype)}}else{try{throw Error()}catch(le){ee=le}(ge=e())&&typeof ge.catch=="function"&&ge.catch(function(){})}}catch(le){if(le&&ee&&typeof le.stack=="string")return[le.stack,ee.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),_=f[0],E=f[1];if(_&&E){var B=_.split(`
`),J=E.split(`
`);for(c=r=0;r<B.length&&!B[r].includes("DetermineComponentFrameRoot");)r++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(r===B.length||c===J.length)for(r=B.length-1,c=J.length-1;1<=r&&0<=c&&B[r]!==J[c];)c--;for(;1<=r&&0<=c;r--,c--)if(B[r]!==J[c]){if(r!==1||c!==1)do if(r--,c--,0>c||B[r]!==J[c]){var de=`
`+B[r].replace(" at new "," at ");return e.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",e.displayName)),de}while(1<=r&&0<=c);break}}}finally{Rt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ht(a):""}function Qt(e,n){switch(e.tag){case 26:case 27:case 5:return ht(e.type);case 16:return ht("Lazy");case 13:return e.child!==n&&n!==null?ht("Suspense Fallback"):ht("Suspense");case 19:return ht("SuspenseList");case 0:case 15:return rt(e.type,!1);case 11:return rt(e.type.render,!1);case 1:return rt(e.type,!0);case 31:return ht("Activity");default:return""}}function V(e){try{var n="",a=null;do n+=Qt(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Wt=Object.prototype.hasOwnProperty,yt=o.unstable_scheduleCallback,Dt=o.unstable_cancelCallback,We=o.unstable_shouldYield,D=o.unstable_requestPaint,M=o.unstable_now,q=o.unstable_getCurrentPriorityLevel,he=o.unstable_ImmediatePriority,xe=o.unstable_UserBlockingPriority,ce=o.unstable_NormalPriority,Ze=o.unstable_LowPriority,Ce=o.unstable_IdlePriority,je=o.log,tt=o.unstable_setDisableYieldValue,be=null,Ee=null;function Fe(e){if(typeof je=="function"&&tt(e),Ee&&typeof Ee.setStrictMode=="function")try{Ee.setStrictMode(be,e)}catch{}}var Pe=Math.clz32?Math.clz32:X,we=Math.log,lt=Math.LN2;function X(e){return e>>>=0,e===0?32:31-(we(e)/lt|0)|0}var Ue=256,Te=262144,ze=4194304;function ye(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ve(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var c=0,f=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var E=r&134217727;return E!==0?(r=E&~f,r!==0?c=ye(r):(_&=E,_!==0?c=ye(_):a||(a=E&~e,a!==0&&(c=ye(a))))):(E=r&~f,E!==0?c=ye(E):_!==0?c=ye(_):a||(a=r&~e,a!==0&&(c=ye(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Re(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function nt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ot(){var e=ze;return ze<<=1,(ze&62914560)===0&&(ze=4194304),e}function Mt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Dn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function gi(e,n,a,r,c,f){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var E=e.entanglements,B=e.expirationTimes,J=e.hiddenUpdates;for(a=_&~a;0<a;){var de=31-Pe(a),ge=1<<de;E[de]=0,B[de]=-1;var ee=J[de];if(ee!==null)for(J[de]=null,de=0;de<ee.length;de++){var le=ee[de];le!==null&&(le.lane&=-536870913)}a&=~ge}r!==0&&Qo(e,r,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(_&~n))}function Qo(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Pe(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function Ir(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Pe(a),c=1<<r;c&n|e[r]&n&&(e[r]|=n),a&=~c}}function Ls(e,n){var a=n&-n;return a=(a&42)!==0?1:Br(a),(a&(e.suspendedLanes|n))!==0?0:a}function Br(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Os(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Hr(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:fg(e.type))}function Di(e,n){var a=G.p;try{return G.p=e,n()}finally{G.p=a}}var ni=Math.random().toString(36).slice(2),sn="__reactFiber$"+ni,xn="__reactProps$"+ni,_i="__reactContainer$"+ni,Ps="__reactEvents$"+ni,zs="__reactListeners$"+ni,Jo="__reactHandles$"+ni,Gr="__reactResources$"+ni,is="__reactMarker$"+ni;function Vr(e){delete e[sn],delete e[xn],delete e[Ps],delete e[zs],delete e[Jo]}function Ma(e){var n=e[sn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[_i]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Z0(e);e!==null;){if(a=e[sn])return a;e=Z0(e)}return n}e=a,a=e.parentNode}return null}function ba(e){if(e=e[sn]||e[_i]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function as(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ea(e){var n=e[Gr];return n||(n=e[Gr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function T(e){e[is]=!0}var W=new Set,oe={};function $(e,n){K(e,n),K(e+"Capture",n)}function K(e,n){for(oe[e]=n,e=0;e<n.length;e++)W.add(n[e])}var De=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ie={},Le={};function Ge(e){return Wt.call(Le,e)?!0:Wt.call(Ie,e)?!1:De.test(e)?Le[e]=!0:(Ie[e]=!0,!1)}function Xe(e,n,a){if(Ge(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Je(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function qe(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function $e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ct(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Yt(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function jt(e){if(!e._valueTracker){var n=Ct(e)?"checked":"value";e._valueTracker=Yt(e,n,""+e[n])}}function Ut(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=Ct(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function Ke(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var wt=/[\n"\\]/g;function it(e){return e.replace(wt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Sn(e,n,a,r,c,f,_,E){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+$e(n)):e.value!==""+$e(n)&&(e.value=""+$e(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?yn(e,_,$e(n)):a!=null?yn(e,_,$e(a)):r!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+$e(E):e.removeAttribute("name")}function ji(e,n,a,r,c,f,_,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){jt(e);return}a=a!=null?""+$e(a):"",n=n!=null?""+$e(n):a,E||n===e.value||(e.value=n),e.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=E?e.checked:!!r,e.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_),jt(e)}function yn(e,n,a){n==="number"&&Ke(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ii(e,n,a,r){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&r&&(e[a].defaultSelected=!0)}else{for(a=""+$e(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Pt(e,n,a){if(n!=null&&(n=""+$e(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+$e(a):""}function Mn(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(fe(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=$e(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),jt(e)}function fn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var bn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function En(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||bn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Fs(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&En(e,c,r)}else for(var f in n)n.hasOwnProperty(f)&&En(e,f,n[f])}function vi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),hv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $o(e){return hv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Xi(){}var Xc=null;function qc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Is=null,Bs=null;function Hh(e){var n=ba(e);if(n&&(e=n.stateNode)){var a=e[xn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Sn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+it(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var c=r[xn]||null;if(!c)throw Error(s(90));Sn(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Ut(r)}break e;case"textarea":Pt(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ii(e,!!a.multiple,n,!1)}}}var Wc=!1;function Gh(e,n,a){if(Wc)return e(n,a);Wc=!0;try{var r=e(n);return r}finally{if(Wc=!1,(Is!==null||Bs!==null)&&(Hl(),Is&&(n=Is,e=Bs,Bs=Is=null,Hh(n),e)))for(n=0;n<e.length;n++)Hh(e[n])}}function kr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[xn]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yc=!1;if(qi)try{var jr={};Object.defineProperty(jr,"passive",{get:function(){Yc=!0}}),window.addEventListener("test",jr,jr),window.removeEventListener("test",jr,jr)}catch{Yc=!1}var Ta=null,Zc=null,el=null;function Vh(){if(el)return el;var e,n=Zc,a=n.length,r,c="value"in Ta?Ta.value:Ta.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var _=a-e;for(r=1;r<=_&&n[a-r]===c[f-r];r++);return el=c.slice(e,1<r?1-r:void 0)}function tl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function nl(){return!0}function kh(){return!1}function In(e){function n(a,r,c,f,_){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(a=e[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?nl:kh,this.isPropagationStopped=kh,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),n}var ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},il=In(ss),Xr=g({},ss,{view:0,detail:0}),pv=In(Xr),Kc,Qc,qr,al=g({},Xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$c,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qr&&(qr&&e.type==="mousemove"?(Kc=e.screenX-qr.screenX,Qc=e.screenY-qr.screenY):Qc=Kc=0,qr=e),Kc)},movementY:function(e){return"movementY"in e?e.movementY:Qc}}),jh=In(al),mv=g({},al,{dataTransfer:0}),gv=In(mv),_v=g({},Xr,{relatedTarget:0}),Jc=In(_v),vv=g({},ss,{animationName:0,elapsedTime:0,pseudoElement:0}),xv=In(vv),Sv=g({},ss,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yv=In(Sv),Mv=g({},ss,{data:0}),Xh=In(Mv),bv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ev={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Av(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Tv[e])?!!n[e]:!1}function $c(){return Av}var Rv=g({},Xr,{key:function(e){if(e.key){var n=bv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=tl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ev[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$c,charCode:function(e){return e.type==="keypress"?tl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?tl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cv=In(Rv),wv=g({},al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qh=In(wv),Nv=g({},Xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$c}),Dv=In(Nv),Uv=g({},ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lv=In(Uv),Ov=g({},al,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pv=In(Ov),zv=g({},ss,{newState:0,oldState:0}),Fv=In(zv),Iv=[9,13,27,32],eu=qi&&"CompositionEvent"in window,Wr=null;qi&&"documentMode"in document&&(Wr=document.documentMode);var Bv=qi&&"TextEvent"in window&&!Wr,Wh=qi&&(!eu||Wr&&8<Wr&&11>=Wr),Yh=" ",Zh=!1;function Kh(e,n){switch(e){case"keyup":return Iv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hs=!1;function Hv(e,n){switch(e){case"compositionend":return Qh(n);case"keypress":return n.which!==32?null:(Zh=!0,Yh);case"textInput":return e=n.data,e===Yh&&Zh?null:e;default:return null}}function Gv(e,n){if(Hs)return e==="compositionend"||!eu&&Kh(e,n)?(e=Vh(),el=Zc=Ta=null,Hs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Wh&&n.locale!=="ko"?null:n.data;default:return null}}var Vv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Vv[e.type]:n==="textarea"}function $h(e,n,a,r){Is?Bs?Bs.push(r):Bs=[r]:Is=r,n=Wl(n,"onChange"),0<n.length&&(a=new il("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Yr=null,Zr=null;function kv(e){P0(e,0)}function sl(e){var n=as(e);if(Ut(n))return e}function ep(e,n){if(e==="change")return n}var tp=!1;if(qi){var tu;if(qi){var nu="oninput"in document;if(!nu){var np=document.createElement("div");np.setAttribute("oninput","return;"),nu=typeof np.oninput=="function"}tu=nu}else tu=!1;tp=tu&&(!document.documentMode||9<document.documentMode)}function ip(){Yr&&(Yr.detachEvent("onpropertychange",ap),Zr=Yr=null)}function ap(e){if(e.propertyName==="value"&&sl(Zr)){var n=[];$h(n,Zr,e,qc(e)),Gh(kv,n)}}function jv(e,n,a){e==="focusin"?(ip(),Yr=n,Zr=a,Yr.attachEvent("onpropertychange",ap)):e==="focusout"&&ip()}function Xv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return sl(Zr)}function qv(e,n){if(e==="click")return sl(n)}function Wv(e,n){if(e==="input"||e==="change")return sl(n)}function Yv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Wn=typeof Object.is=="function"?Object.is:Yv;function Kr(e,n){if(Wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!Wt.call(n,c)||!Wn(e[c],n[c]))return!1}return!0}function sp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rp(e,n){var a=sp(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=sp(a)}}function op(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?op(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function lp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Ke(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Ke(e.document)}return n}function iu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Zv=qi&&"documentMode"in document&&11>=document.documentMode,Gs=null,au=null,Qr=null,su=!1;function cp(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;su||Gs==null||Gs!==Ke(r)||(r=Gs,"selectionStart"in r&&iu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qr&&Kr(Qr,r)||(Qr=r,r=Wl(au,"onSelect"),0<r.length&&(n=new il("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Gs)))}function rs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Vs={animationend:rs("Animation","AnimationEnd"),animationiteration:rs("Animation","AnimationIteration"),animationstart:rs("Animation","AnimationStart"),transitionrun:rs("Transition","TransitionRun"),transitionstart:rs("Transition","TransitionStart"),transitioncancel:rs("Transition","TransitionCancel"),transitionend:rs("Transition","TransitionEnd")},ru={},up={};qi&&(up=document.createElement("div").style,"AnimationEvent"in window||(delete Vs.animationend.animation,delete Vs.animationiteration.animation,delete Vs.animationstart.animation),"TransitionEvent"in window||delete Vs.transitionend.transition);function os(e){if(ru[e])return ru[e];if(!Vs[e])return e;var n=Vs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in up)return ru[e]=n[a];return e}var fp=os("animationend"),dp=os("animationiteration"),hp=os("animationstart"),Kv=os("transitionrun"),Qv=os("transitionstart"),Jv=os("transitioncancel"),pp=os("transitionend"),mp=new Map,ou="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ou.push("scrollEnd");function xi(e,n){mp.set(e,n),$(n,[e])}var rl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ai=[],ks=0,lu=0;function ol(){for(var e=ks,n=lu=ks=0;n<e;){var a=ai[n];ai[n++]=null;var r=ai[n];ai[n++]=null;var c=ai[n];ai[n++]=null;var f=ai[n];if(ai[n++]=null,r!==null&&c!==null){var _=r.pending;_===null?c.next=c:(c.next=_.next,_.next=c),r.pending=c}f!==0&&gp(a,c,f)}}function ll(e,n,a,r){ai[ks++]=e,ai[ks++]=n,ai[ks++]=a,ai[ks++]=r,lu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function cu(e,n,a,r){return ll(e,n,a,r),cl(e)}function ls(e,n){return ll(e,null,null,n),cl(e)}function gp(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Pe(a),e=f.hiddenUpdates,r=e[c],r===null?e[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function cl(e){if(50<So)throw So=0,xf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var js={};function $v(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(e,n,a,r){return new $v(e,n,a,r)}function uu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wi(e,n){var a=e.alternate;return a===null?(a=Yn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function _p(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ul(e,n,a,r,c,f){var _=0;if(r=e,typeof e=="function")uu(e)&&(_=1);else if(typeof e=="string")_=aS(e,a,Ae.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case A:return e=Yn(31,a,n,c),e.elementType=A,e.lanes=f,e;case w:return cs(a.children,c,f,n);case y:_=8,c|=24;break;case x:return e=Yn(12,a,n,c|2),e.elementType=x,e.lanes=f,e;case I:return e=Yn(13,a,n,c),e.elementType=I,e.lanes=f,e;case H:return e=Yn(19,a,n,c),e.elementType=H,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case z:_=10;break e;case F:_=9;break e;case O:_=11;break e;case L:_=14;break e;case Z:_=16,r=null;break e}_=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Yn(_,a,n,c),n.elementType=e,n.type=r,n.lanes=f,n}function cs(e,n,a,r){return e=Yn(7,e,r,n),e.lanes=a,e}function fu(e,n,a){return e=Yn(6,e,null,n),e.lanes=a,e}function vp(e){var n=Yn(18,null,null,0);return n.stateNode=e,n}function du(e,n,a){return n=Yn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var xp=new WeakMap;function si(e,n){if(typeof e=="object"&&e!==null){var a=xp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:V(n)},xp.set(e,n),n)}return{value:e,source:n,stack:V(n)}}var Xs=[],qs=0,fl=null,Jr=0,ri=[],oi=0,Aa=null,Ui=1,Li="";function Yi(e,n){Xs[qs++]=Jr,Xs[qs++]=fl,fl=e,Jr=n}function Sp(e,n,a){ri[oi++]=Ui,ri[oi++]=Li,ri[oi++]=Aa,Aa=e;var r=Ui;e=Li;var c=32-Pe(r)-1;r&=~(1<<c),a+=1;var f=32-Pe(n)+c;if(30<f){var _=c-c%5;f=(r&(1<<_)-1).toString(32),r>>=_,c-=_,Ui=1<<32-Pe(n)+c|a<<c|r,Li=f+e}else Ui=1<<f|a<<c|r,Li=e}function hu(e){e.return!==null&&(Yi(e,1),Sp(e,1,0))}function pu(e){for(;e===fl;)fl=Xs[--qs],Xs[qs]=null,Jr=Xs[--qs],Xs[qs]=null;for(;e===Aa;)Aa=ri[--oi],ri[oi]=null,Li=ri[--oi],ri[oi]=null,Ui=ri[--oi],ri[oi]=null}function yp(e,n){ri[oi++]=Ui,ri[oi++]=Li,ri[oi++]=Aa,Ui=n.id,Li=n.overflow,Aa=e}var Tn=null,Xt=null,xt=!1,Ra=null,li=!1,mu=Error(s(519));function Ca(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw $r(si(n,e)),mu}function Mp(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[sn]=e,n[xn]=r,a){case"dialog":mt("cancel",n),mt("close",n);break;case"iframe":case"object":case"embed":mt("load",n);break;case"video":case"audio":for(a=0;a<Mo.length;a++)mt(Mo[a],n);break;case"source":mt("error",n);break;case"img":case"image":case"link":mt("error",n),mt("load",n);break;case"details":mt("toggle",n);break;case"input":mt("invalid",n),ji(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":mt("invalid",n);break;case"textarea":mt("invalid",n),Mn(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||B0(n.textContent,a)?(r.popover!=null&&(mt("beforetoggle",n),mt("toggle",n)),r.onScroll!=null&&mt("scroll",n),r.onScrollEnd!=null&&mt("scrollend",n),r.onClick!=null&&(n.onclick=Xi),n=!0):n=!1,n||Ca(e,!0)}function bp(e){for(Tn=e.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:li=!1;return;case 27:case 3:li=!0;return;default:Tn=Tn.return}}function Ws(e){if(e!==Tn)return!1;if(!xt)return bp(e),xt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Of(e.type,e.memoizedProps)),a=!a),a&&Xt&&Ca(e),bp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Xt=Y0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Xt=Y0(e)}else n===27?(n=Xt,Va(e.type)?(e=Bf,Bf=null,Xt=e):Xt=n):Xt=Tn?ui(e.stateNode.nextSibling):null;return!0}function us(){Xt=Tn=null,xt=!1}function gu(){var e=Ra;return e!==null&&(Vn===null?Vn=e:Vn.push.apply(Vn,e),Ra=null),e}function $r(e){Ra===null?Ra=[e]:Ra.push(e)}var _u=U(null),fs=null,Zi=null;function wa(e,n,a){_e(_u,n._currentValue),n._currentValue=a}function Ki(e){e._currentValue=_u.current,ne(_u)}function vu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function xu(e,n,a,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var _=c.child;f=f.firstContext;e:for(;f!==null;){var E=f;f=c;for(var B=0;B<n.length;B++)if(E.context===n[B]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),vu(f.return,a,e),r||(_=null);break e}f=E.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),vu(_,a,e),_=null}else _=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===e){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function Ys(e,n,a,r){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var E=c.type;Wn(c.pendingProps.value,_.value)||(e!==null?e.push(E):e=[E])}}else if(c===ue.current){if(_=c.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Ro):e=[Ro])}c=c.return}e!==null&&xu(n,e,a,r),n.flags|=262144}function dl(e){for(e=e.firstContext;e!==null;){if(!Wn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ds(e){fs=e,Zi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return Ep(fs,e)}function hl(e,n){return fs===null&&ds(e),Ep(e,n)}function Ep(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Zi===null){if(e===null)throw Error(s(308));Zi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Zi=Zi.next=n;return a}var ex=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},tx=o.unstable_scheduleCallback,nx=o.unstable_NormalPriority,rn={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Su(){return{controller:new ex,data:new Map,refCount:0}}function eo(e){e.refCount--,e.refCount===0&&tx(nx,function(){e.controller.abort()})}var to=null,yu=0,Zs=0,Ks=null;function ix(e,n){if(to===null){var a=to=[];yu=0,Zs=Tf(),Ks={status:"pending",value:void 0,then:function(r){a.push(r)}}}return yu++,n.then(Tp,Tp),n}function Tp(){if(--yu===0&&to!==null){Ks!==null&&(Ks.status="fulfilled");var e=to;to=null,Zs=0,Ks=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function ax(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var Ap=P.S;P.S=function(e,n){c0=M(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ix(e,n),Ap!==null&&Ap(e,n)};var hs=U(null);function Mu(){var e=hs.current;return e!==null?e:kt.pooledCache}function pl(e,n){n===null?_e(hs,hs.current):_e(hs,n.pool)}function Rp(){var e=Mu();return e===null?null:{parent:rn._currentValue,pool:e}}var Qs=Error(s(460)),bu=Error(s(474)),ml=Error(s(542)),gl={then:function(){}};function Cp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function wp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Xi,Xi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Dp(e),e;default:if(typeof n.status=="string")n.then(Xi,Xi);else{if(e=kt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Dp(e),e}throw ms=n,Qs}}function ps(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ms=a,Qs):a}}var ms=null;function Np(){if(ms===null)throw Error(s(459));var e=ms;return ms=null,e}function Dp(e){if(e===Qs||e===ml)throw Error(s(483))}var Js=null,no=0;function _l(e){var n=no;return no+=1,Js===null&&(Js=[]),wp(Js,e,n)}function io(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function vl(e,n){throw n.$$typeof===S?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Up(e){function n(Y,j){if(e){var Q=Y.deletions;Q===null?(Y.deletions=[j],Y.flags|=16):Q.push(j)}}function a(Y,j){if(!e)return null;for(;j!==null;)n(Y,j),j=j.sibling;return null}function r(Y){for(var j=new Map;Y!==null;)Y.key!==null?j.set(Y.key,Y):j.set(Y.index,Y),Y=Y.sibling;return j}function c(Y,j){return Y=Wi(Y,j),Y.index=0,Y.sibling=null,Y}function f(Y,j,Q){return Y.index=Q,e?(Q=Y.alternate,Q!==null?(Q=Q.index,Q<j?(Y.flags|=67108866,j):Q):(Y.flags|=67108866,j)):(Y.flags|=1048576,j)}function _(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function E(Y,j,Q,me){return j===null||j.tag!==6?(j=fu(Q,Y.mode,me),j.return=Y,j):(j=c(j,Q),j.return=Y,j)}function B(Y,j,Q,me){var Qe=Q.type;return Qe===w?de(Y,j,Q.props.children,me,Q.key):j!==null&&(j.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===Z&&ps(Qe)===j.type)?(j=c(j,Q.props),io(j,Q),j.return=Y,j):(j=ul(Q.type,Q.key,Q.props,null,Y.mode,me),io(j,Q),j.return=Y,j)}function J(Y,j,Q,me){return j===null||j.tag!==4||j.stateNode.containerInfo!==Q.containerInfo||j.stateNode.implementation!==Q.implementation?(j=du(Q,Y.mode,me),j.return=Y,j):(j=c(j,Q.children||[]),j.return=Y,j)}function de(Y,j,Q,me,Qe){return j===null||j.tag!==7?(j=cs(Q,Y.mode,me,Qe),j.return=Y,j):(j=c(j,Q),j.return=Y,j)}function ge(Y,j,Q){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=fu(""+j,Y.mode,Q),j.return=Y,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case b:return Q=ul(j.type,j.key,j.props,null,Y.mode,Q),io(Q,j),Q.return=Y,Q;case R:return j=du(j,Y.mode,Q),j.return=Y,j;case Z:return j=ps(j),ge(Y,j,Q)}if(fe(j)||se(j))return j=cs(j,Y.mode,Q,null),j.return=Y,j;if(typeof j.then=="function")return ge(Y,_l(j),Q);if(j.$$typeof===z)return ge(Y,hl(Y,j),Q);vl(Y,j)}return null}function ee(Y,j,Q,me){var Qe=j!==null?j.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Qe!==null?null:E(Y,j,""+Q,me);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case b:return Q.key===Qe?B(Y,j,Q,me):null;case R:return Q.key===Qe?J(Y,j,Q,me):null;case Z:return Q=ps(Q),ee(Y,j,Q,me)}if(fe(Q)||se(Q))return Qe!==null?null:de(Y,j,Q,me,null);if(typeof Q.then=="function")return ee(Y,j,_l(Q),me);if(Q.$$typeof===z)return ee(Y,j,hl(Y,Q),me);vl(Y,Q)}return null}function le(Y,j,Q,me,Qe){if(typeof me=="string"&&me!==""||typeof me=="number"||typeof me=="bigint")return Y=Y.get(Q)||null,E(j,Y,""+me,Qe);if(typeof me=="object"&&me!==null){switch(me.$$typeof){case b:return Y=Y.get(me.key===null?Q:me.key)||null,B(j,Y,me,Qe);case R:return Y=Y.get(me.key===null?Q:me.key)||null,J(j,Y,me,Qe);case Z:return me=ps(me),le(Y,j,Q,me,Qe)}if(fe(me)||se(me))return Y=Y.get(Q)||null,de(j,Y,me,Qe,null);if(typeof me.then=="function")return le(Y,j,Q,_l(me),Qe);if(me.$$typeof===z)return le(Y,j,Q,hl(j,me),Qe);vl(j,me)}return null}function Ve(Y,j,Q,me){for(var Qe=null,Et=null,Ye=j,ct=j=0,vt=null;Ye!==null&&ct<Q.length;ct++){Ye.index>ct?(vt=Ye,Ye=null):vt=Ye.sibling;var Tt=ee(Y,Ye,Q[ct],me);if(Tt===null){Ye===null&&(Ye=vt);break}e&&Ye&&Tt.alternate===null&&n(Y,Ye),j=f(Tt,j,ct),Et===null?Qe=Tt:Et.sibling=Tt,Et=Tt,Ye=vt}if(ct===Q.length)return a(Y,Ye),xt&&Yi(Y,ct),Qe;if(Ye===null){for(;ct<Q.length;ct++)Ye=ge(Y,Q[ct],me),Ye!==null&&(j=f(Ye,j,ct),Et===null?Qe=Ye:Et.sibling=Ye,Et=Ye);return xt&&Yi(Y,ct),Qe}for(Ye=r(Ye);ct<Q.length;ct++)vt=le(Ye,Y,ct,Q[ct],me),vt!==null&&(e&&vt.alternate!==null&&Ye.delete(vt.key===null?ct:vt.key),j=f(vt,j,ct),Et===null?Qe=vt:Et.sibling=vt,Et=vt);return e&&Ye.forEach(function(Wa){return n(Y,Wa)}),xt&&Yi(Y,ct),Qe}function et(Y,j,Q,me){if(Q==null)throw Error(s(151));for(var Qe=null,Et=null,Ye=j,ct=j=0,vt=null,Tt=Q.next();Ye!==null&&!Tt.done;ct++,Tt=Q.next()){Ye.index>ct?(vt=Ye,Ye=null):vt=Ye.sibling;var Wa=ee(Y,Ye,Tt.value,me);if(Wa===null){Ye===null&&(Ye=vt);break}e&&Ye&&Wa.alternate===null&&n(Y,Ye),j=f(Wa,j,ct),Et===null?Qe=Wa:Et.sibling=Wa,Et=Wa,Ye=vt}if(Tt.done)return a(Y,Ye),xt&&Yi(Y,ct),Qe;if(Ye===null){for(;!Tt.done;ct++,Tt=Q.next())Tt=ge(Y,Tt.value,me),Tt!==null&&(j=f(Tt,j,ct),Et===null?Qe=Tt:Et.sibling=Tt,Et=Tt);return xt&&Yi(Y,ct),Qe}for(Ye=r(Ye);!Tt.done;ct++,Tt=Q.next())Tt=le(Ye,Y,ct,Tt.value,me),Tt!==null&&(e&&Tt.alternate!==null&&Ye.delete(Tt.key===null?ct:Tt.key),j=f(Tt,j,ct),Et===null?Qe=Tt:Et.sibling=Tt,Et=Tt);return e&&Ye.forEach(function(mS){return n(Y,mS)}),xt&&Yi(Y,ct),Qe}function Gt(Y,j,Q,me){if(typeof Q=="object"&&Q!==null&&Q.type===w&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case b:e:{for(var Qe=Q.key;j!==null;){if(j.key===Qe){if(Qe=Q.type,Qe===w){if(j.tag===7){a(Y,j.sibling),me=c(j,Q.props.children),me.return=Y,Y=me;break e}}else if(j.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===Z&&ps(Qe)===j.type){a(Y,j.sibling),me=c(j,Q.props),io(me,Q),me.return=Y,Y=me;break e}a(Y,j);break}else n(Y,j);j=j.sibling}Q.type===w?(me=cs(Q.props.children,Y.mode,me,Q.key),me.return=Y,Y=me):(me=ul(Q.type,Q.key,Q.props,null,Y.mode,me),io(me,Q),me.return=Y,Y=me)}return _(Y);case R:e:{for(Qe=Q.key;j!==null;){if(j.key===Qe)if(j.tag===4&&j.stateNode.containerInfo===Q.containerInfo&&j.stateNode.implementation===Q.implementation){a(Y,j.sibling),me=c(j,Q.children||[]),me.return=Y,Y=me;break e}else{a(Y,j);break}else n(Y,j);j=j.sibling}me=du(Q,Y.mode,me),me.return=Y,Y=me}return _(Y);case Z:return Q=ps(Q),Gt(Y,j,Q,me)}if(fe(Q))return Ve(Y,j,Q,me);if(se(Q)){if(Qe=se(Q),typeof Qe!="function")throw Error(s(150));return Q=Qe.call(Q),et(Y,j,Q,me)}if(typeof Q.then=="function")return Gt(Y,j,_l(Q),me);if(Q.$$typeof===z)return Gt(Y,j,hl(Y,Q),me);vl(Y,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,j!==null&&j.tag===6?(a(Y,j.sibling),me=c(j,Q),me.return=Y,Y=me):(a(Y,j),me=fu(Q,Y.mode,me),me.return=Y,Y=me),_(Y)):a(Y,j)}return function(Y,j,Q,me){try{no=0;var Qe=Gt(Y,j,Q,me);return Js=null,Qe}catch(Ye){if(Ye===Qs||Ye===ml)throw Ye;var Et=Yn(29,Ye,null,Y.mode);return Et.lanes=me,Et.return=Y,Et}}}var gs=Up(!0),Lp=Up(!1),Na=!1;function Eu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Tu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Da(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ua(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Nt&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=cl(e),gp(e,null,a),n}return ll(e,r,n,a),cl(e)}function ao(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Ir(e,a)}}function Au(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Ru=!1;function so(){if(Ru){var e=Ks;if(e!==null)throw e}}function ro(e,n,a,r){Ru=!1;var c=e.updateQueue;Na=!1;var f=c.firstBaseUpdate,_=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var B=E,J=B.next;B.next=null,_===null?f=J:_.next=J,_=B;var de=e.alternate;de!==null&&(de=de.updateQueue,E=de.lastBaseUpdate,E!==_&&(E===null?de.firstBaseUpdate=J:E.next=J,de.lastBaseUpdate=B))}if(f!==null){var ge=c.baseState;_=0,de=J=B=null,E=f;do{var ee=E.lane&-536870913,le=ee!==E.lane;if(le?(_t&ee)===ee:(r&ee)===ee){ee!==0&&ee===Zs&&(Ru=!0),de!==null&&(de=de.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var Ve=e,et=E;ee=n;var Gt=a;switch(et.tag){case 1:if(Ve=et.payload,typeof Ve=="function"){ge=Ve.call(Gt,ge,ee);break e}ge=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=et.payload,ee=typeof Ve=="function"?Ve.call(Gt,ge,ee):Ve,ee==null)break e;ge=g({},ge,ee);break e;case 2:Na=!0}}ee=E.callback,ee!==null&&(e.flags|=64,le&&(e.flags|=8192),le=c.callbacks,le===null?c.callbacks=[ee]:le.push(ee))}else le={lane:ee,tag:E.tag,payload:E.payload,callback:E.callback,next:null},de===null?(J=de=le,B=ge):de=de.next=le,_|=ee;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;le=E,E=le.next,le.next=null,c.lastBaseUpdate=le,c.shared.pending=null}}while(!0);de===null&&(B=ge),c.baseState=B,c.firstBaseUpdate=J,c.lastBaseUpdate=de,f===null&&(c.shared.lanes=0),Fa|=_,e.lanes=_,e.memoizedState=ge}}function Op(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Pp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Op(a[e],n)}var $s=U(null),xl=U(0);function zp(e,n){e=sa,_e(xl,e),_e($s,n),sa=e|n.baseLanes}function Cu(){_e(xl,sa),_e($s,$s.current)}function wu(){sa=xl.current,ne($s),ne(xl)}var Zn=U(null),ci=null;function La(e){var n=e.alternate;_e(en,en.current&1),_e(Zn,e),ci===null&&(n===null||$s.current!==null||n.memoizedState!==null)&&(ci=e)}function Nu(e){_e(en,en.current),_e(Zn,e),ci===null&&(ci=e)}function Fp(e){e.tag===22?(_e(en,en.current),_e(Zn,e),ci===null&&(ci=e)):Oa()}function Oa(){_e(en,en.current),_e(Zn,Zn.current)}function Kn(e){ne(Zn),ci===e&&(ci=null),ne(en)}var en=U(0);function Sl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ff(a)||If(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Qi=0,ot=null,Bt=null,on=null,yl=!1,er=!1,_s=!1,Ml=0,oo=0,tr=null,sx=0;function Jt(){throw Error(s(321))}function Du(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Wn(e[a],n[a]))return!1;return!0}function Uu(e,n,a,r,c,f){return Qi=f,ot=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?Sm:Wu,_s=!1,f=a(r,c),_s=!1,er&&(f=Bp(n,a,r,c)),Ip(e),f}function Ip(e){P.H=uo;var n=Bt!==null&&Bt.next!==null;if(Qi=0,on=Bt=ot=null,yl=!1,oo=0,tr=null,n)throw Error(s(300));e===null||ln||(e=e.dependencies,e!==null&&dl(e)&&(ln=!0))}function Bp(e,n,a,r){ot=e;var c=0;do{if(er&&(tr=null),oo=0,er=!1,25<=c)throw Error(s(301));if(c+=1,on=Bt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=ym,f=n(a,r)}while(er);return f}function rx(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?lo(n):n,e=e.useState()[0],(Bt!==null?Bt.memoizedState:null)!==e&&(ot.flags|=1024),n}function Lu(){var e=Ml!==0;return Ml=0,e}function Ou(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Pu(e){if(yl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}yl=!1}Qi=0,on=Bt=ot=null,er=!1,oo=Ml=0,tr=null}function zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?ot.memoizedState=on=e:on=on.next=e,on}function tn(){if(Bt===null){var e=ot.alternate;e=e!==null?e.memoizedState:null}else e=Bt.next;var n=on===null?ot.memoizedState:on.next;if(n!==null)on=n,Bt=e;else{if(e===null)throw ot.alternate===null?Error(s(467)):Error(s(310));Bt=e,e={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},on===null?ot.memoizedState=on=e:on=on.next=e}return on}function bl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function lo(e){var n=oo;return oo+=1,tr===null&&(tr=[]),e=wp(tr,e,n),n=ot,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Sm:Wu),e}function El(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return lo(e);if(e.$$typeof===z)return An(e)}throw Error(s(438,String(e)))}function zu(e){var n=null,a=ot.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ot.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=bl(),ot.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=N;return n.index++,a}function Ji(e,n){return typeof n=="function"?n(e):n}function Tl(e){var n=tn();return Fu(n,Bt,e)}function Fu(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=e.baseQueue,f=r.pending;if(f!==null){if(c!==null){var _=c.next;c.next=f.next,f.next=_}n.baseQueue=c=f,r.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var E=_=null,B=null,J=n,de=!1;do{var ge=J.lane&-536870913;if(ge!==J.lane?(_t&ge)===ge:(Qi&ge)===ge){var ee=J.revertLane;if(ee===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),ge===Zs&&(de=!0);else if((Qi&ee)===ee){J=J.next,ee===Zs&&(de=!0);continue}else ge={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(E=B=ge,_=f):B=B.next=ge,ot.lanes|=ee,Fa|=ee;ge=J.action,_s&&a(f,ge),f=J.hasEagerState?J.eagerState:a(f,ge)}else ee={lane:ge,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(E=B=ee,_=f):B=B.next=ee,ot.lanes|=ge,Fa|=ge;J=J.next}while(J!==null&&J!==n);if(B===null?_=f:B.next=E,!Wn(f,e.memoizedState)&&(ln=!0,de&&(a=Ks,a!==null)))throw a;e.memoizedState=f,e.baseState=_,e.baseQueue=B,r.lastRenderedState=f}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Iu(e){var n=tn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var _=c=c.next;do f=e(f,_.action),_=_.next;while(_!==c);Wn(f,n.memoizedState)||(ln=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Hp(e,n,a){var r=ot,c=tn(),f=xt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!Wn((Bt||c).memoizedState,a);if(_&&(c.memoizedState=a,ln=!0),c=c.queue,Gu(kp.bind(null,r,c,e),[e]),c.getSnapshot!==n||_||on!==null&&on.memoizedState.tag&1){if(r.flags|=2048,nr(9,{destroy:void 0},Vp.bind(null,r,c,a,n),null),kt===null)throw Error(s(349));f||(Qi&127)!==0||Gp(r,n,a)}return a}function Gp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ot.updateQueue,n===null?(n=bl(),ot.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Vp(e,n,a,r){n.value=a,n.getSnapshot=r,jp(n)&&Xp(e)}function kp(e,n,a){return a(function(){jp(n)&&Xp(e)})}function jp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Wn(e,a)}catch{return!0}}function Xp(e){var n=ls(e,2);n!==null&&kn(n,e,2)}function Bu(e){var n=zn();if(typeof e=="function"){var a=e;if(e=a(),_s){Fe(!0);try{a()}finally{Fe(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:e},n}function qp(e,n,a,r){return e.baseState=a,Fu(e,Bt,typeof r=="function"?r:Ji)}function ox(e,n,a,r,c){if(Cl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};P.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Wp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Wp(e,n){var a=n.action,r=n.payload,c=e.state;if(n.isTransition){var f=P.T,_={};P.T=_;try{var E=a(c,r),B=P.S;B!==null&&B(_,E),Yp(e,n,E)}catch(J){Hu(e,n,J)}finally{f!==null&&_.types!==null&&(f.types=_.types),P.T=f}}else try{f=a(c,r),Yp(e,n,f)}catch(J){Hu(e,n,J)}}function Yp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Zp(e,n,r)},function(r){return Hu(e,n,r)}):Zp(e,n,a)}function Zp(e,n,a){n.status="fulfilled",n.value=a,Kp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Wp(e,a)))}function Hu(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Kp(n),n=n.next;while(n!==r)}e.action=null}function Kp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Qp(e,n){return n}function Jp(e,n){if(xt){var a=kt.formState;if(a!==null){e:{var r=ot;if(xt){if(Xt){t:{for(var c=Xt,f=li;c.nodeType!==8;){if(!f){c=null;break t}if(c=ui(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Xt=ui(c.nextSibling),r=c.data==="F!";break e}}Ca(r)}r=!1}r&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qp,lastRenderedState:n},a.queue=r,a=_m.bind(null,ot,r),r.dispatch=a,r=Bu(!1),f=qu.bind(null,ot,!1,r.queue),r=zn(),c={state:n,dispatch:null,action:e,pending:null},r.queue=c,a=ox.bind(null,ot,c,f,a),c.dispatch=a,r.memoizedState=e,[n,a,!1]}function $p(e){var n=tn();return em(n,Bt,e)}function em(e,n,a){if(n=Fu(e,n,Qp)[0],e=Tl(Ji)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=lo(n)}catch(_){throw _===Qs?ml:_}else r=n;n=tn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ot.flags|=2048,nr(9,{destroy:void 0},lx.bind(null,c,a),null)),[r,f,e]}function lx(e,n){e.action=n}function tm(e){var n=tn(),a=Bt;if(a!==null)return em(n,a,e);tn(),n=n.memoizedState,a=tn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function nr(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=ot.updateQueue,n===null&&(n=bl(),ot.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function nm(){return tn().memoizedState}function Al(e,n,a,r){var c=zn();ot.flags|=e,c.memoizedState=nr(1|n,{destroy:void 0},a,r===void 0?null:r)}function Rl(e,n,a,r){var c=tn();r=r===void 0?null:r;var f=c.memoizedState.inst;Bt!==null&&r!==null&&Du(r,Bt.memoizedState.deps)?c.memoizedState=nr(n,f,a,r):(ot.flags|=e,c.memoizedState=nr(1|n,f,a,r))}function im(e,n){Al(8390656,8,e,n)}function Gu(e,n){Rl(2048,8,e,n)}function cx(e){ot.flags|=4;var n=ot.updateQueue;if(n===null)n=bl(),ot.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function am(e){var n=tn().memoizedState;return cx({ref:n,nextImpl:e}),function(){if((Nt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function sm(e,n){return Rl(4,2,e,n)}function rm(e,n){return Rl(4,4,e,n)}function om(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function lm(e,n,a){a=a!=null?a.concat([e]):null,Rl(4,4,om.bind(null,n,e),a)}function Vu(){}function cm(e,n){var a=tn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Du(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function um(e,n){var a=tn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Du(n,r[1]))return r[0];if(r=e(),_s){Fe(!0);try{e()}finally{Fe(!1)}}return a.memoizedState=[r,n],r}function ku(e,n,a){return a===void 0||(Qi&1073741824)!==0&&(_t&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=f0(),ot.lanes|=e,Fa|=e,a)}function fm(e,n,a,r){return Wn(a,n)?a:$s.current!==null?(e=ku(e,a,r),Wn(e,n)||(ln=!0),e):(Qi&42)===0||(Qi&1073741824)!==0&&(_t&261930)===0?(ln=!0,e.memoizedState=a):(e=f0(),ot.lanes|=e,Fa|=e,n)}function dm(e,n,a,r,c){var f=G.p;G.p=f!==0&&8>f?f:8;var _=P.T,E={};P.T=E,qu(e,!1,n,a);try{var B=c(),J=P.S;if(J!==null&&J(E,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var de=ax(B,r);co(e,n,de,$n(e))}else co(e,n,r,$n(e))}catch(ge){co(e,n,{then:function(){},status:"rejected",reason:ge},$n())}finally{G.p=f,_!==null&&E.types!==null&&(_.types=E.types),P.T=_}}function ux(){}function ju(e,n,a,r){if(e.tag!==5)throw Error(s(476));var c=hm(e).queue;dm(e,c,n,ae,a===null?ux:function(){return pm(e),a(r)})}function hm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:ae},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function pm(e){var n=hm(e);n.next===null&&(n=e.alternate.memoizedState),co(e,n.next.queue,{},$n())}function Xu(){return An(Ro)}function mm(){return tn().memoizedState}function gm(){return tn().memoizedState}function fx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();e=Da(a);var r=Ua(n,e,a);r!==null&&(kn(r,n,a),ao(r,n,a)),n={cache:Su()},e.payload=n;return}n=n.return}}function dx(e,n,a){var r=$n();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Cl(e)?vm(n,a):(a=cu(e,n,a,r),a!==null&&(kn(a,e,r),xm(a,n,r)))}function _m(e,n,a){var r=$n();co(e,n,a,r)}function co(e,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Cl(e))vm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,E=f(_,a);if(c.hasEagerState=!0,c.eagerState=E,Wn(E,_))return ll(e,n,c,0),kt===null&&ol(),!1}catch{}if(a=cu(e,n,c,r),a!==null)return kn(a,e,r),xm(a,n,r),!0}return!1}function qu(e,n,a,r){if(r={lane:2,revertLane:Tf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Cl(e)){if(n)throw Error(s(479))}else n=cu(e,a,r,2),n!==null&&kn(n,e,2)}function Cl(e){var n=e.alternate;return e===ot||n!==null&&n===ot}function vm(e,n){er=yl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function xm(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Ir(e,a)}}var uo={readContext:An,use:El,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useLayoutEffect:Jt,useInsertionEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useSyncExternalStore:Jt,useId:Jt,useHostTransitionStatus:Jt,useFormState:Jt,useActionState:Jt,useOptimistic:Jt,useMemoCache:Jt,useCacheRefresh:Jt};uo.useEffectEvent=Jt;var Sm={readContext:An,use:El,useCallback:function(e,n){return zn().memoizedState=[e,n===void 0?null:n],e},useContext:An,useEffect:im,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Al(4194308,4,om.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Al(4194308,4,e,n)},useInsertionEffect:function(e,n){Al(4,2,e,n)},useMemo:function(e,n){var a=zn();n=n===void 0?null:n;var r=e();if(_s){Fe(!0);try{e()}finally{Fe(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=zn();if(a!==void 0){var c=a(n);if(_s){Fe(!0);try{a(n)}finally{Fe(!1)}}}else c=n;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=dx.bind(null,ot,e),[r.memoizedState,e]},useRef:function(e){var n=zn();return e={current:e},n.memoizedState=e},useState:function(e){e=Bu(e);var n=e.queue,a=_m.bind(null,ot,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Vu,useDeferredValue:function(e,n){var a=zn();return ku(a,e,n)},useTransition:function(){var e=Bu(!1);return e=dm.bind(null,ot,e.queue,!0,!1),zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=ot,c=zn();if(xt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),kt===null)throw Error(s(349));(_t&127)!==0||Gp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,im(kp.bind(null,r,f,e),[e]),r.flags|=2048,nr(9,{destroy:void 0},Vp.bind(null,r,f,a,n),null),a},useId:function(){var e=zn(),n=kt.identifierPrefix;if(xt){var a=Li,r=Ui;a=(r&~(1<<32-Pe(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ml++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=sx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Xu,useFormState:Jp,useActionState:Jp,useOptimistic:function(e){var n=zn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=qu.bind(null,ot,!0,a),a.dispatch=n,[e,n]},useMemoCache:zu,useCacheRefresh:function(){return zn().memoizedState=fx.bind(null,ot)},useEffectEvent:function(e){var n=zn(),a={impl:e};return n.memoizedState=a,function(){if((Nt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Wu={readContext:An,use:El,useCallback:cm,useContext:An,useEffect:Gu,useImperativeHandle:lm,useInsertionEffect:sm,useLayoutEffect:rm,useMemo:um,useReducer:Tl,useRef:nm,useState:function(){return Tl(Ji)},useDebugValue:Vu,useDeferredValue:function(e,n){var a=tn();return fm(a,Bt.memoizedState,e,n)},useTransition:function(){var e=Tl(Ji)[0],n=tn().memoizedState;return[typeof e=="boolean"?e:lo(e),n]},useSyncExternalStore:Hp,useId:mm,useHostTransitionStatus:Xu,useFormState:$p,useActionState:$p,useOptimistic:function(e,n){var a=tn();return qp(a,Bt,e,n)},useMemoCache:zu,useCacheRefresh:gm};Wu.useEffectEvent=am;var ym={readContext:An,use:El,useCallback:cm,useContext:An,useEffect:Gu,useImperativeHandle:lm,useInsertionEffect:sm,useLayoutEffect:rm,useMemo:um,useReducer:Iu,useRef:nm,useState:function(){return Iu(Ji)},useDebugValue:Vu,useDeferredValue:function(e,n){var a=tn();return Bt===null?ku(a,e,n):fm(a,Bt.memoizedState,e,n)},useTransition:function(){var e=Iu(Ji)[0],n=tn().memoizedState;return[typeof e=="boolean"?e:lo(e),n]},useSyncExternalStore:Hp,useId:mm,useHostTransitionStatus:Xu,useFormState:tm,useActionState:tm,useOptimistic:function(e,n){var a=tn();return Bt!==null?qp(a,Bt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:zu,useCacheRefresh:gm};ym.useEffectEvent=am;function Yu(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Zu={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=$n(),c=Da(r);c.payload=n,a!=null&&(c.callback=a),n=Ua(e,c,r),n!==null&&(kn(n,e,r),ao(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=$n(),c=Da(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ua(e,c,r),n!==null&&(kn(n,e,r),ao(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=$n(),r=Da(a);r.tag=2,n!=null&&(r.callback=n),n=Ua(e,r,a),n!==null&&(kn(n,e,a),ao(n,e,a))}};function Mm(e,n,a,r,c,f,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,_):n.prototype&&n.prototype.isPureReactComponent?!Kr(a,r)||!Kr(c,f):!0}function bm(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&Zu.enqueueReplaceState(n,n.state,null)}function vs(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function Em(e){rl(e)}function Tm(e){console.error(e)}function Am(e){rl(e)}function wl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Rm(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Ku(e,n,a){return a=Da(a),a.tag=3,a.payload={element:null},a.callback=function(){wl(e,n)},a}function Cm(e){return e=Da(e),e.tag=3,e}function wm(e,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;e.payload=function(){return c(f)},e.callback=function(){Rm(n,a,r)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){Rm(n,a,r),typeof c!="function"&&(Ia===null?Ia=new Set([this]):Ia.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function hx(e,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Ys(n,a,c,!0),a=Zn.current,a!==null){switch(a.tag){case 31:case 13:return ci===null?Gl():a.alternate===null&&$t===0&&($t=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===gl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Mf(e,r,c)),!1;case 22:return a.flags|=65536,r===gl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Mf(e,r,c)),!1}throw Error(s(435,a.tag))}return Mf(e,r,c),Gl(),!1}if(xt)return n=Zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==mu&&(e=Error(s(422),{cause:r}),$r(si(e,a)))):(r!==mu&&(n=Error(s(423),{cause:r}),$r(si(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=si(r,a),c=Ku(e.stateNode,r,c),Au(e,c),$t!==4&&($t=2)),!1;var f=Error(s(520),{cause:r});if(f=si(f,a),xo===null?xo=[f]:xo.push(f),$t!==4&&($t=2),n===null)return!0;r=si(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Ku(a.stateNode,r,e),Au(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ia===null||!Ia.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Cm(c),wm(c,e,a,r),Au(a,c),!1}a=a.return}while(a!==null);return!1}var Qu=Error(s(461)),ln=!1;function Rn(e,n,a,r){n.child=e===null?Lp(n,null,a,r):gs(n,e.child,a,r)}function Nm(e,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var _={};for(var E in r)E!=="ref"&&(_[E]=r[E])}else _=r;return ds(n),r=Uu(e,n,a,_,f,c),E=Lu(),e!==null&&!ln?(Ou(e,n,c),$i(e,n,c)):(xt&&E&&hu(n),n.flags|=1,Rn(e,n,r,c),n.child)}function Dm(e,n,a,r,c){if(e===null){var f=a.type;return typeof f=="function"&&!uu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Um(e,n,f,r,c)):(e=ul(a.type,null,r,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!rf(e,c)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Kr,a(_,r)&&e.ref===n.ref)return $i(e,n,c)}return n.flags|=1,e=Wi(f,r),e.ref=n.ref,e.return=n,n.child=e}function Um(e,n,a,r,c){if(e!==null){var f=e.memoizedProps;if(Kr(f,r)&&e.ref===n.ref)if(ln=!1,n.pendingProps=r=f,rf(e,c))(e.flags&131072)!==0&&(ln=!0);else return n.lanes=e.lanes,$i(e,n,c)}return Ju(e,n,a,r,c)}function Lm(e,n,a,r){var c=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return Om(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&pl(n,f!==null?f.cachePool:null),f!==null?zp(n,f):Cu(),Fp(n);else return r=n.lanes=536870912,Om(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(pl(n,f.cachePool),zp(n,f),Oa(),n.memoizedState=null):(e!==null&&pl(n,null),Cu(),Oa());return Rn(e,n,c,a),n.child}function fo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Om(e,n,a,r,c){var f=Mu();return f=f===null?null:{parent:rn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&pl(n,null),Cu(),Fp(n),e!==null&&Ys(e,n,r,!0),n.childLanes=c,null}function Nl(e,n){return n=Ul({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Pm(e,n,a){return gs(n,e.child,null,a),e=Nl(n,n.pendingProps),e.flags|=2,Kn(n),n.memoizedState=null,e}function px(e,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(xt){if(r.mode==="hidden")return e=Nl(n,r),n.lanes=536870912,fo(null,e);if(Nu(n),(e=Xt)?(e=W0(e,li),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Aa!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},a=vp(e),a.return=n,n.child=a,Tn=n,Xt=null)):e=null,e===null)throw Ca(n);return n.lanes=536870912,null}return Nl(n,r)}var f=e.memoizedState;if(f!==null){var _=f.dehydrated;if(Nu(n),c)if(n.flags&256)n.flags&=-257,n=Pm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(ln||Ys(e,n,a,!1),c=(a&e.childLanes)!==0,ln||c){if(r=kt,r!==null&&(_=Ls(r,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,ls(e,_),kn(r,e,_),Qu;Gl(),n=Pm(e,n,a)}else e=f.treeContext,Xt=ui(_.nextSibling),Tn=n,xt=!0,Ra=null,li=!1,e!==null&&yp(n,e),n=Nl(n,r),n.flags|=4096;return n}return e=Wi(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Dl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Ju(e,n,a,r,c){return ds(n),a=Uu(e,n,a,r,void 0,c),r=Lu(),e!==null&&!ln?(Ou(e,n,c),$i(e,n,c)):(xt&&r&&hu(n),n.flags|=1,Rn(e,n,a,c),n.child)}function zm(e,n,a,r,c,f){return ds(n),n.updateQueue=null,a=Bp(n,r,a,c),Ip(e),r=Lu(),e!==null&&!ln?(Ou(e,n,f),$i(e,n,f)):(xt&&r&&hu(n),n.flags|=1,Rn(e,n,a,f),n.child)}function Fm(e,n,a,r,c){if(ds(n),n.stateNode===null){var f=js,_=a.contextType;typeof _=="object"&&_!==null&&(f=An(_)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Zu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Eu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?An(_):js,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Yu(n,a,_,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&Zu.enqueueReplaceState(f,f.state,null),ro(n,r,f,c),so(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var E=n.memoizedProps,B=vs(a,E);f.props=B;var J=f.context,de=a.contextType;_=js,typeof de=="object"&&de!==null&&(_=An(de));var ge=a.getDerivedStateFromProps;de=typeof ge=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,de||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||J!==_)&&bm(n,f,r,_),Na=!1;var ee=n.memoizedState;f.state=ee,ro(n,r,f,c),so(),J=n.memoizedState,E||ee!==J||Na?(typeof ge=="function"&&(Yu(n,a,ge,r),J=n.memoizedState),(B=Na||Mm(n,a,B,r,ee,J,_))?(de||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=J),f.props=r,f.state=J,f.context=_,r=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Tu(e,n),_=n.memoizedProps,de=vs(a,_),f.props=de,ge=n.pendingProps,ee=f.context,J=a.contextType,B=js,typeof J=="object"&&J!==null&&(B=An(J)),E=a.getDerivedStateFromProps,(J=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==ge||ee!==B)&&bm(n,f,r,B),Na=!1,ee=n.memoizedState,f.state=ee,ro(n,r,f,c),so();var le=n.memoizedState;_!==ge||ee!==le||Na||e!==null&&e.dependencies!==null&&dl(e.dependencies)?(typeof E=="function"&&(Yu(n,a,E,r),le=n.memoizedState),(de=Na||Mm(n,a,de,r,ee,le,B)||e!==null&&e.dependencies!==null&&dl(e.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,le,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,le,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&ee===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&ee===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=le),f.props=r,f.state=le,f.context=B,r=de):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&ee===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&ee===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Dl(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=gs(n,e.child,null,c),n.child=gs(n,null,a,c)):Rn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=$i(e,n,c),e}function Im(e,n,a,r){return us(),n.flags|=256,Rn(e,n,a,r),n.child}var $u={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ef(e){return{baseLanes:e,cachePool:Rp()}}function tf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Jn),e}function Bm(e,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=e!==null&&e.memoizedState===null?!1:(en.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(xt){if(c?La(n):Oa(),(e=Xt)?(e=W0(e,li),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Aa!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},a=vp(e),a.return=n,n.child=a,Tn=n,Xt=null)):e=null,e===null)throw Ca(n);return If(e)?n.lanes=32:n.lanes=536870912,null}var E=r.children;return r=r.fallback,c?(Oa(),c=n.mode,E=Ul({mode:"hidden",children:E},c),r=cs(r,c,a,null),E.return=n,r.return=n,E.sibling=r,n.child=E,r=n.child,r.memoizedState=ef(a),r.childLanes=tf(e,_,a),n.memoizedState=$u,fo(null,r)):(La(n),nf(n,E))}var B=e.memoizedState;if(B!==null&&(E=B.dehydrated,E!==null)){if(f)n.flags&256?(La(n),n.flags&=-257,n=af(e,n,a)):n.memoizedState!==null?(Oa(),n.child=e.child,n.flags|=128,n=null):(Oa(),E=r.fallback,c=n.mode,r=Ul({mode:"visible",children:r.children},c),E=cs(E,c,a,null),E.flags|=2,r.return=n,E.return=n,r.sibling=E,n.child=r,gs(n,e.child,null,a),r=n.child,r.memoizedState=ef(a),r.childLanes=tf(e,_,a),n.memoizedState=$u,n=fo(null,r));else if(La(n),If(E)){if(_=E.nextSibling&&E.nextSibling.dataset,_)var J=_.dgst;_=J,r=Error(s(419)),r.stack="",r.digest=_,$r({value:r,source:null,stack:null}),n=af(e,n,a)}else if(ln||Ys(e,n,a,!1),_=(a&e.childLanes)!==0,ln||_){if(_=kt,_!==null&&(r=Ls(_,a),r!==0&&r!==B.retryLane))throw B.retryLane=r,ls(e,r),kn(_,e,r),Qu;Ff(E)||Gl(),n=af(e,n,a)}else Ff(E)?(n.flags|=192,n.child=e.child,n=null):(e=B.treeContext,Xt=ui(E.nextSibling),Tn=n,xt=!0,Ra=null,li=!1,e!==null&&yp(n,e),n=nf(n,r.children),n.flags|=4096);return n}return c?(Oa(),E=r.fallback,c=n.mode,B=e.child,J=B.sibling,r=Wi(B,{mode:"hidden",children:r.children}),r.subtreeFlags=B.subtreeFlags&65011712,J!==null?E=Wi(J,E):(E=cs(E,c,a,null),E.flags|=2),E.return=n,r.return=n,r.sibling=E,n.child=r,fo(null,r),r=n.child,E=e.child.memoizedState,E===null?E=ef(a):(c=E.cachePool,c!==null?(B=rn._currentValue,c=c.parent!==B?{parent:B,pool:B}:c):c=Rp(),E={baseLanes:E.baseLanes|a,cachePool:c}),r.memoizedState=E,r.childLanes=tf(e,_,a),n.memoizedState=$u,fo(e.child,r)):(La(n),a=e.child,e=a.sibling,a=Wi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=a,n.memoizedState=null,a)}function nf(e,n){return n=Ul({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ul(e,n){return e=Yn(22,e,null,n),e.lanes=0,e}function af(e,n,a){return gs(n,e.child,null,a),e=nf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Hm(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),vu(e.return,n,a)}function sf(e,n,a,r,c,f){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=a,_.tailMode=c,_.treeForkCount=f)}function Gm(e,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var _=en.current,E=(_&2)!==0;if(E?(_=_&1|2,n.flags|=128):_&=1,_e(en,_),Rn(e,n,r,a),r=xt?Jr:0,!E&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Hm(e,a,n);else if(e.tag===19)Hm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Sl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),sf(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Sl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}sf(n,!0,a,null,f,r);break;case"together":sf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function $i(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Fa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ys(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Wi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Wi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function rf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&dl(e)))}function mx(e,n,a){switch(n.tag){case 3:Ne(n,n.stateNode.containerInfo),wa(n,rn,e.memoizedState.cache),us();break;case 27:case 5:He(n);break;case 4:Ne(n,n.stateNode.containerInfo);break;case 10:wa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Nu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(La(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Bm(e,n,a):(La(n),e=$i(e,n,a),e!==null?e.sibling:null);La(n);break;case 19:var c=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Ys(e,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return Gm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),_e(en,en.current),r)break;return null;case 22:return n.lanes=0,Lm(e,n,a,n.pendingProps);case 24:wa(n,rn,e.memoizedState.cache)}return $i(e,n,a)}function Vm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)ln=!0;else{if(!rf(e,a)&&(n.flags&128)===0)return ln=!1,mx(e,n,a);ln=(e.flags&131072)!==0}else ln=!1,xt&&(n.flags&1048576)!==0&&Sp(n,Jr,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=ps(n.elementType),n.type=e,typeof e=="function")uu(e)?(r=vs(e,r),n.tag=1,n=Fm(null,n,e,r,a)):(n.tag=0,n=Ju(null,n,e,r,a));else{if(e!=null){var c=e.$$typeof;if(c===O){n.tag=11,n=Nm(null,n,e,r,a);break e}else if(c===L){n.tag=14,n=Dm(null,n,e,r,a);break e}}throw n=pe(e)||e,Error(s(306,n,""))}}return n;case 0:return Ju(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=vs(r,n.pendingProps),Fm(e,n,r,c,a);case 3:e:{if(Ne(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,Tu(e,n),ro(n,r,null,a);var _=n.memoizedState;if(r=_.cache,wa(n,rn,r),r!==f.cache&&xu(n,[rn],a,!0),so(),r=_.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Im(e,n,r,a);break e}else if(r!==c){c=si(Error(s(424)),n),$r(c),n=Im(e,n,r,a);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Xt=ui(e.firstChild),Tn=n,xt=!0,Ra=null,li=!0,a=Lp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(us(),r===c){n=$i(e,n,a);break e}Rn(e,n,r,a)}n=n.child}return n;case 26:return Dl(e,n),e===null?(a=$0(n.type,null,n.pendingProps,null))?n.memoizedState=a:xt||(a=n.type,e=n.pendingProps,r=Yl(te.current).createElement(a),r[sn]=n,r[xn]=e,Cn(r,a,e),T(r),n.stateNode=r):n.memoizedState=$0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return He(n),e===null&&xt&&(r=n.stateNode=K0(n.type,n.pendingProps,te.current),Tn=n,li=!0,c=Xt,Va(n.type)?(Bf=c,Xt=ui(r.firstChild)):Xt=c),Rn(e,n,n.pendingProps.children,a),Dl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&xt&&((c=r=Xt)&&(r=Xx(r,n.type,n.pendingProps,li),r!==null?(n.stateNode=r,Tn=n,Xt=ui(r.firstChild),li=!1,c=!0):c=!1),c||Ca(n)),He(n),c=n.type,f=n.pendingProps,_=e!==null?e.memoizedProps:null,r=f.children,Of(c,f)?r=null:_!==null&&Of(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=Uu(e,n,rx,null,null,a),Ro._currentValue=c),Dl(e,n),Rn(e,n,r,a),n.child;case 6:return e===null&&xt&&((e=a=Xt)&&(a=qx(a,n.pendingProps,li),a!==null?(n.stateNode=a,Tn=n,Xt=null,e=!0):e=!1),e||Ca(n)),null;case 13:return Bm(e,n,a);case 4:return Ne(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=gs(n,null,r,a):Rn(e,n,r,a),n.child;case 11:return Nm(e,n,n.type,n.pendingProps,a);case 7:return Rn(e,n,n.pendingProps,a),n.child;case 8:return Rn(e,n,n.pendingProps.children,a),n.child;case 12:return Rn(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,wa(n,n.type,r.value),Rn(e,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,ds(n),c=An(c),r=r(c),n.flags|=1,Rn(e,n,r,a),n.child;case 14:return Dm(e,n,n.type,n.pendingProps,a);case 15:return Um(e,n,n.type,n.pendingProps,a);case 19:return Gm(e,n,a);case 31:return px(e,n,a);case 22:return Lm(e,n,a,n.pendingProps);case 24:return ds(n),r=An(rn),e===null?(c=Mu(),c===null&&(c=kt,f=Su(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},Eu(n),wa(n,rn,c)):((e.lanes&a)!==0&&(Tu(e,n),ro(n,null,null,a),so()),c=e.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),wa(n,rn,r)):(r=f.cache,wa(n,rn,r),r!==c.cache&&xu(n,[rn],a,!0))),Rn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ea(e){e.flags|=4}function of(e,n,a,r,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(m0())e.flags|=8192;else throw ms=gl,bu}else e.flags&=-16777217}function km(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ag(n))if(m0())e.flags|=8192;else throw ms=gl,bu}function Ll(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ot():536870912,e.lanes|=n,rr|=n)}function ho(e,n){if(!xt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function qt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function gx(e,n,a){var r=n.pendingProps;switch(pu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(n),null;case 1:return qt(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Ki(rn),ke(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ws(n)?ea(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,gu())),qt(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(ea(n),f!==null?(qt(n),km(n,f)):(qt(n),of(n,c,null,r,a))):f?f!==e.memoizedState?(ea(n),qt(n),km(n,f)):(qt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&ea(n),qt(n),of(n,c,e,r,a)),null;case 27:if(dt(n),a=te.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&ea(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return qt(n),null}e=Ae.current,Ws(n)?Mp(n):(e=K0(c,r,a),n.stateNode=e,ea(n))}return qt(n),null;case 5:if(dt(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&ea(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return qt(n),null}if(f=Ae.current,Ws(n))Mp(n);else{var _=Yl(te.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?_.createElement(c,{is:r.is}):_.createElement(c)}}f[sn]=n,f[xn]=r;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;e:switch(Cn(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&ea(n)}}return qt(n),of(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&ea(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=te.current,Ws(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,c=Tn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[sn]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||B0(e.nodeValue,a)),e||Ca(n,!0)}else e=Yl(e).createTextNode(r),e[sn]=n,n.stateNode=e}return qt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Ws(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[sn]=n}else us(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qt(n),e=!1}else a=gu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Kn(n),n):(Kn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return qt(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Ws(n),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[sn]=n}else us(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qt(n),c=!1}else c=gu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Kn(n),n):(Kn(n),null)}return Kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Ll(n,n.updateQueue),qt(n),null);case 4:return ke(),e===null&&wf(n.stateNode.containerInfo),qt(n),null;case 10:return Ki(n.type),qt(n),null;case 19:if(ne(en),r=n.memoizedState,r===null)return qt(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)ho(r,!1);else{if($t!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Sl(e),f!==null){for(n.flags|=128,ho(r,!1),e=f.updateQueue,n.updateQueue=e,Ll(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)_p(a,e),a=a.sibling;return _e(en,en.current&1|2),xt&&Yi(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&M()>Il&&(n.flags|=128,c=!0,ho(r,!1),n.lanes=4194304)}else{if(!c)if(e=Sl(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Ll(n,e),ho(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!xt)return qt(n),null}else 2*M()-r.renderingStartTime>Il&&a!==536870912&&(n.flags|=128,c=!0,ho(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=M(),e.sibling=null,a=en.current,_e(en,c?a&1|2:a&1),xt&&Yi(n,r.treeForkCount),e):(qt(n),null);case 22:case 23:return Kn(n),wu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(qt(n),n.subtreeFlags&6&&(n.flags|=8192)):qt(n),a=n.updateQueue,a!==null&&Ll(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&ne(hs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ki(rn),qt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function _x(e,n){switch(pu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ki(rn),ke(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return dt(n),null;case 31:if(n.memoizedState!==null){if(Kn(n),n.alternate===null)throw Error(s(340));us()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Kn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));us()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ne(en),null;case 4:return ke(),null;case 10:return Ki(n.type),null;case 22:case 23:return Kn(n),wu(),e!==null&&ne(hs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ki(rn),null;case 25:return null;default:return null}}function jm(e,n){switch(pu(n),n.tag){case 3:Ki(rn),ke();break;case 26:case 27:case 5:dt(n);break;case 4:ke();break;case 31:n.memoizedState!==null&&Kn(n);break;case 13:Kn(n);break;case 19:ne(en);break;case 10:Ki(n.type);break;case 22:case 23:Kn(n),wu(),e!==null&&ne(hs);break;case 24:Ki(rn)}}function po(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){r=void 0;var f=a.create,_=a.inst;r=f(),_.destroy=r}a=a.next}while(a!==c)}}catch(E){Ft(n,n.return,E)}}function Pa(e,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&e)===e){var _=r.inst,E=_.destroy;if(E!==void 0){_.destroy=void 0,c=n;var B=a,J=E;try{J()}catch(de){Ft(c,B,de)}}}r=r.next}while(r!==f)}}catch(de){Ft(n,n.return,de)}}function Xm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Pp(n,a)}catch(r){Ft(e,e.return,r)}}}function qm(e,n,a){a.props=vs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Ft(e,n,r)}}function mo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(c){Ft(e,n,c)}}function Oi(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Ft(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ft(e,n,c)}else a.current=null}function Wm(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Ft(e,e.return,c)}}function lf(e,n,a){try{var r=e.stateNode;Bx(r,e.type,a,n),r[xn]=n}catch(c){Ft(e,e.return,c)}}function Ym(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Va(e.type)||e.tag===4}function cf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ym(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Va(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function uf(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Xi));else if(r!==4&&(r===27&&Va(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(uf(e,n,a),e=e.sibling;e!==null;)uf(e,n,a),e=e.sibling}function Ol(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&Va(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ol(e,n,a),e=e.sibling;e!==null;)Ol(e,n,a),e=e.sibling}function Zm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Cn(n,r,a),n[sn]=e,n[xn]=a}catch(f){Ft(e,e.return,f)}}var ta=!1,cn=!1,ff=!1,Km=typeof WeakSet=="function"?WeakSet:Set,mn=null;function vx(e,n){if(e=e.containerInfo,Uf=tc,e=lp(e),iu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,E=-1,B=-1,J=0,de=0,ge=e,ee=null;t:for(;;){for(var le;ge!==a||c!==0&&ge.nodeType!==3||(E=_+c),ge!==f||r!==0&&ge.nodeType!==3||(B=_+r),ge.nodeType===3&&(_+=ge.nodeValue.length),(le=ge.firstChild)!==null;)ee=ge,ge=le;for(;;){if(ge===e)break t;if(ee===a&&++J===c&&(E=_),ee===f&&++de===r&&(B=_),(le=ge.nextSibling)!==null)break;ge=ee,ee=ge.parentNode}ge=le}a=E===-1||B===-1?null:{start:E,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Lf={focusedElem:e,selectionRange:a},tc=!1,mn=n;mn!==null;)if(n=mn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,mn=e;else for(;mn!==null;){switch(n=mn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Ve=vs(a.type,c);e=r.getSnapshotBeforeUpdate(Ve,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(et){Ft(a,a.return,et)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)zf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":zf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,mn=e;break}mn=n.return}}function Qm(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ia(e,a),r&4&&po(5,a);break;case 1:if(ia(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(_){Ft(a,a.return,_)}else{var c=vs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(_){Ft(a,a.return,_)}}r&64&&Xm(a),r&512&&mo(a,a.return);break;case 3:if(ia(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Pp(e,n)}catch(_){Ft(a,a.return,_)}}break;case 27:n===null&&r&4&&Zm(a);case 26:case 5:ia(e,a),n===null&&r&4&&Wm(a),r&512&&mo(a,a.return);break;case 12:ia(e,a);break;case 31:ia(e,a),r&4&&e0(e,a);break;case 13:ia(e,a),r&4&&t0(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Rx.bind(null,a),Wx(e,a))));break;case 22:if(r=a.memoizedState!==null||ta,!r){n=n!==null&&n.memoizedState!==null||cn,c=ta;var f=cn;ta=r,(cn=n)&&!f?aa(e,a,(a.subtreeFlags&8772)!==0):ia(e,a),ta=c,cn=f}break;case 30:break;default:ia(e,a)}}function Jm(e){var n=e.alternate;n!==null&&(e.alternate=null,Jm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Vr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Zt=null,Bn=!1;function na(e,n,a){for(a=a.child;a!==null;)$m(e,n,a),a=a.sibling}function $m(e,n,a){if(Ee&&typeof Ee.onCommitFiberUnmount=="function")try{Ee.onCommitFiberUnmount(be,a)}catch{}switch(a.tag){case 26:cn||Oi(a,n),na(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:cn||Oi(a,n);var r=Zt,c=Bn;Va(a.type)&&(Zt=a.stateNode,Bn=!1),na(e,n,a),Eo(a.stateNode),Zt=r,Bn=c;break;case 5:cn||Oi(a,n);case 6:if(r=Zt,c=Bn,Zt=null,na(e,n,a),Zt=r,Bn=c,Zt!==null)if(Bn)try{(Zt.nodeType===9?Zt.body:Zt.nodeName==="HTML"?Zt.ownerDocument.body:Zt).removeChild(a.stateNode)}catch(f){Ft(a,n,f)}else try{Zt.removeChild(a.stateNode)}catch(f){Ft(a,n,f)}break;case 18:Zt!==null&&(Bn?(e=Zt,X0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),pr(e)):X0(Zt,a.stateNode));break;case 4:r=Zt,c=Bn,Zt=a.stateNode.containerInfo,Bn=!0,na(e,n,a),Zt=r,Bn=c;break;case 0:case 11:case 14:case 15:Pa(2,a,n),cn||Pa(4,a,n),na(e,n,a);break;case 1:cn||(Oi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&qm(a,n,r)),na(e,n,a);break;case 21:na(e,n,a);break;case 22:cn=(r=cn)||a.memoizedState!==null,na(e,n,a),cn=r;break;default:na(e,n,a)}}function e0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{pr(e)}catch(a){Ft(n,n.return,a)}}}function t0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{pr(e)}catch(a){Ft(n,n.return,a)}}function xx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Km),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Km),n;default:throw Error(s(435,e.tag))}}function Pl(e,n){var a=xx(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=Cx.bind(null,e,r);r.then(c,c)}})}function Hn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=e,_=n,E=_;e:for(;E!==null;){switch(E.tag){case 27:if(Va(E.type)){Zt=E.stateNode,Bn=!1;break e}break;case 5:Zt=E.stateNode,Bn=!1;break e;case 3:case 4:Zt=E.stateNode.containerInfo,Bn=!0;break e}E=E.return}if(Zt===null)throw Error(s(160));$m(f,_,c),Zt=null,Bn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)n0(n,e),n=n.sibling}var Si=null;function n0(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Hn(n,e),Gn(e),r&4&&(Pa(3,e,e.return),po(3,e),Pa(5,e,e.return));break;case 1:Hn(n,e),Gn(e),r&512&&(cn||a===null||Oi(a,a.return)),r&64&&ta&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=Si;if(Hn(n,e),Gn(e),r&512&&(cn||a===null||Oi(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){e:{r=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[is]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),Cn(f,r,a),f[sn]=e,T(f),r=f;break e;case"link":var _=ng("link","href",c).get(r+(a.href||""));if(_){for(var E=0;E<_.length;E++)if(f=_[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(E,1);break t}}f=c.createElement(r),Cn(f,r,a),c.head.appendChild(f);break;case"meta":if(_=ng("meta","content",c).get(r+(a.content||""))){for(E=0;E<_.length;E++)if(f=_[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(E,1);break t}}f=c.createElement(r),Cn(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[sn]=e,T(f),r=f}e.stateNode=r}else ig(c,e.type,e.stateNode);else e.stateNode=tg(c,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?ig(c,e.type,e.stateNode):tg(c,r,e.memoizedProps)):r===null&&e.stateNode!==null&&lf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,e),Gn(e),r&512&&(cn||a===null||Oi(a,a.return)),a!==null&&r&4&&lf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,e),Gn(e),r&512&&(cn||a===null||Oi(a,a.return)),e.flags&32){c=e.stateNode;try{fn(c,"")}catch(Ve){Ft(e,e.return,Ve)}}r&4&&e.stateNode!=null&&(c=e.memoizedProps,lf(e,c,a!==null?a.memoizedProps:c)),r&1024&&(ff=!0);break;case 6:if(Hn(n,e),Gn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(Ve){Ft(e,e.return,Ve)}}break;case 3:if(Ql=null,c=Si,Si=Zl(n.containerInfo),Hn(n,e),Si=c,Gn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{pr(n.containerInfo)}catch(Ve){Ft(e,e.return,Ve)}ff&&(ff=!1,i0(e));break;case 4:r=Si,Si=Zl(e.stateNode.containerInfo),Hn(n,e),Gn(e),Si=r;break;case 12:Hn(n,e),Gn(e);break;case 31:Hn(n,e),Gn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Pl(e,r)));break;case 13:Hn(n,e),Gn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Fl=M()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Pl(e,r)));break;case 22:c=e.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,J=ta,de=cn;if(ta=J||c,cn=de||B,Hn(n,e),cn=de,ta=J,Gn(e),r&8192)e:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||B||ta||cn||xs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,c)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{E=B.stateNode;var ge=B.memoizedProps.style,ee=ge!=null&&ge.hasOwnProperty("display")?ge.display:null;E.style.display=ee==null||typeof ee=="boolean"?"":(""+ee).trim()}}catch(Ve){Ft(B,B.return,Ve)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(Ve){Ft(B,B.return,Ve)}}}else if(n.tag===18){if(a===null){B=n;try{var le=B.stateNode;c?q0(le,!0):q0(B.stateNode,!1)}catch(Ve){Ft(B,B.return,Ve)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Pl(e,a))));break;case 19:Hn(n,e),Gn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Pl(e,r)));break;case 30:break;case 21:break;default:Hn(n,e),Gn(e)}}function Gn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(Ym(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=cf(e);Ol(e,f,c);break;case 5:var _=a.stateNode;a.flags&32&&(fn(_,""),a.flags&=-33);var E=cf(e);Ol(e,E,_);break;case 3:case 4:var B=a.stateNode.containerInfo,J=cf(e);uf(e,J,B);break;default:throw Error(s(161))}}catch(de){Ft(e,e.return,de)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function i0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;i0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ia(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Qm(e,n.alternate,n),n=n.sibling}function xs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Pa(4,n,n.return),xs(n);break;case 1:Oi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&qm(n,n.return,a),xs(n);break;case 27:Eo(n.stateNode);case 26:case 5:Oi(n,n.return),xs(n);break;case 22:n.memoizedState===null&&xs(n);break;case 30:xs(n);break;default:xs(n)}e=e.sibling}}function aa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=e,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:aa(c,f,a),po(4,f);break;case 1:if(aa(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){Ft(r,r.return,J)}if(r=f,c=r.updateQueue,c!==null){var E=r.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)Op(B[c],E)}catch(J){Ft(r,r.return,J)}}a&&_&64&&Xm(f),mo(f,f.return);break;case 27:Zm(f);case 26:case 5:aa(c,f,a),a&&r===null&&_&4&&Wm(f),mo(f,f.return);break;case 12:aa(c,f,a);break;case 31:aa(c,f,a),a&&_&4&&e0(c,f);break;case 13:aa(c,f,a),a&&_&4&&t0(c,f);break;case 22:f.memoizedState===null&&aa(c,f,a),mo(f,f.return);break;case 30:break;default:aa(c,f,a)}n=n.sibling}}function df(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&eo(a))}function hf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&eo(e))}function yi(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)a0(e,n,a,r),n=n.sibling}function a0(e,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:yi(e,n,a,r),c&2048&&po(9,n);break;case 1:yi(e,n,a,r);break;case 3:yi(e,n,a,r),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&eo(e)));break;case 12:if(c&2048){yi(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,_=f.id,E=f.onPostCommit;typeof E=="function"&&E(_,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){Ft(n,n.return,B)}}else yi(e,n,a,r);break;case 31:yi(e,n,a,r);break;case 13:yi(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?yi(e,n,a,r):go(e,n):f._visibility&2?yi(e,n,a,r):(f._visibility|=2,ir(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&df(_,n);break;case 24:yi(e,n,a,r),c&2048&&hf(n.alternate,n);break;default:yi(e,n,a,r)}}function ir(e,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,_=n,E=a,B=r,J=_.flags;switch(_.tag){case 0:case 11:case 15:ir(f,_,E,B,c),po(8,_);break;case 23:break;case 22:var de=_.stateNode;_.memoizedState!==null?de._visibility&2?ir(f,_,E,B,c):go(f,_):(de._visibility|=2,ir(f,_,E,B,c)),c&&J&2048&&df(_.alternate,_);break;case 24:ir(f,_,E,B,c),c&&J&2048&&hf(_.alternate,_);break;default:ir(f,_,E,B,c)}n=n.sibling}}function go(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,c=r.flags;switch(r.tag){case 22:go(a,r),c&2048&&df(r.alternate,r);break;case 24:go(a,r),c&2048&&hf(r.alternate,r);break;default:go(a,r)}n=n.sibling}}var _o=8192;function ar(e,n,a){if(e.subtreeFlags&_o)for(e=e.child;e!==null;)s0(e,n,a),e=e.sibling}function s0(e,n,a){switch(e.tag){case 26:ar(e,n,a),e.flags&_o&&e.memoizedState!==null&&sS(a,Si,e.memoizedState,e.memoizedProps);break;case 5:ar(e,n,a);break;case 3:case 4:var r=Si;Si=Zl(e.stateNode.containerInfo),ar(e,n,a),Si=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=_o,_o=16777216,ar(e,n,a),_o=r):ar(e,n,a));break;default:ar(e,n,a)}}function r0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function vo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];mn=r,l0(r,e)}r0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)o0(e),e=e.sibling}function o0(e){switch(e.tag){case 0:case 11:case 15:vo(e),e.flags&2048&&Pa(9,e,e.return);break;case 3:vo(e);break;case 12:vo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,zl(e)):vo(e);break;default:vo(e)}}function zl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];mn=r,l0(r,e)}r0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Pa(8,n,n.return),zl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,zl(n));break;default:zl(n)}e=e.sibling}}function l0(e,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:Pa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:eo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,mn=r;else e:for(a=e;mn!==null;){r=mn;var c=r.sibling,f=r.return;if(Jm(r),r===a){mn=null;break e}if(c!==null){c.return=f,mn=c;break e}mn=f}}}var Sx={getCacheForType:function(e){var n=An(rn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return An(rn).controller.signal}},yx=typeof WeakMap=="function"?WeakMap:Map,Nt=0,kt=null,pt=null,_t=0,zt=0,Qn=null,za=!1,sr=!1,pf=!1,sa=0,$t=0,Fa=0,Ss=0,mf=0,Jn=0,rr=0,xo=null,Vn=null,gf=!1,Fl=0,c0=0,Il=1/0,Bl=null,Ia=null,dn=0,Ba=null,or=null,ra=0,_f=0,vf=null,u0=null,So=0,xf=null;function $n(){return(Nt&2)!==0&&_t!==0?_t&-_t:P.T!==null?Tf():Hr()}function f0(){if(Jn===0)if((_t&536870912)===0||xt){var e=Te;Te<<=1,(Te&3932160)===0&&(Te=262144),Jn=e}else Jn=536870912;return e=Zn.current,e!==null&&(e.flags|=32),Jn}function kn(e,n,a){(e===kt&&(zt===2||zt===9)||e.cancelPendingCommit!==null)&&(lr(e,0),Ha(e,_t,Jn,!1)),Dn(e,a),((Nt&2)===0||e!==kt)&&(e===kt&&((Nt&2)===0&&(Ss|=a),$t===4&&Ha(e,_t,Jn,!1)),Pi(e))}function d0(e,n,a){if((Nt&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Re(e,n),c=r?Ex(e,n):yf(e,n,!0),f=r;do{if(c===0){sr&&!r&&Ha(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Mx(a)){c=yf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var E=e;c=xo;var B=E.current.memoizedState.isDehydrated;if(B&&(lr(E,_).flags|=256),_=yf(E,_,!1),_!==2){if(pf&&!B){E.errorRecoveryDisabledLanes|=f,Ss|=f,c=4;break e}f=Vn,Vn=c,f!==null&&(Vn===null?Vn=f:Vn.push.apply(Vn,f))}c=_}if(f=!1,c!==2)continue}}if(c===1){lr(e,0),Ha(e,n,0,!0);break}e:{switch(r=e,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ha(r,n,Jn,!za);break e;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Fl+300-M(),10<c)){if(Ha(r,n,Jn,!za),ve(r,0,!0)!==0)break e;ra=n,r.timeoutHandle=k0(h0.bind(null,r,a,Vn,Bl,gf,n,Jn,Ss,rr,za,f,"Throttled",-0,0),c);break e}h0(r,a,Vn,Bl,gf,n,Jn,Ss,rr,za,f,null,-0,0)}}break}while(!0);Pi(e)}function h0(e,n,a,r,c,f,_,E,B,J,de,ge,ee,le){if(e.timeoutHandle=-1,ge=n.subtreeFlags,ge&8192||(ge&16785408)===16785408){ge={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xi},s0(n,f,ge);var Ve=(f&62914560)===f?Fl-M():(f&4194048)===f?c0-M():0;if(Ve=rS(ge,Ve),Ve!==null){ra=f,e.cancelPendingCommit=Ve(y0.bind(null,e,n,f,a,r,c,_,E,B,de,ge,null,ee,le)),Ha(e,f,_,!J);return}}y0(e,n,f,a,r,c,_,E,B)}function Mx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Wn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ha(e,n,a,r){n&=~mf,n&=~Ss,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var c=n;0<c;){var f=31-Pe(c),_=1<<f;r[f]=-1,c&=~_}a!==0&&Qo(e,a,n)}function Hl(){return(Nt&6)===0?(yo(0),!1):!0}function Sf(){if(pt!==null){if(zt===0)var e=pt.return;else e=pt,Zi=fs=null,Pu(e),Js=null,no=0,e=pt;for(;e!==null;)jm(e.alternate,e),e=e.return;pt=null}}function lr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Vx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ra=0,Sf(),kt=e,pt=a=Wi(e.current,null),_t=n,zt=0,Qn=null,za=!1,sr=Re(e,n),pf=!1,rr=Jn=mf=Ss=Fa=$t=0,Vn=xo=null,gf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var c=31-Pe(r),f=1<<c;n|=e[c],r&=~f}return sa=n,ol(),a}function p0(e,n){ot=null,P.H=uo,n===Qs||n===ml?(n=Np(),zt=3):n===bu?(n=Np(),zt=4):zt=n===Qu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,pt===null&&($t=1,wl(e,si(n,e.current)))}function m0(){var e=Zn.current;return e===null?!0:(_t&4194048)===_t?ci===null:(_t&62914560)===_t||(_t&536870912)!==0?e===ci:!1}function g0(){var e=P.H;return P.H=uo,e===null?uo:e}function _0(){var e=P.A;return P.A=Sx,e}function Gl(){$t=4,za||(_t&4194048)!==_t&&Zn.current!==null||(sr=!0),(Fa&134217727)===0&&(Ss&134217727)===0||kt===null||Ha(kt,_t,Jn,!1)}function yf(e,n,a){var r=Nt;Nt|=2;var c=g0(),f=_0();(kt!==e||_t!==n)&&(Bl=null,lr(e,n)),n=!1;var _=$t;e:do try{if(zt!==0&&pt!==null){var E=pt,B=Qn;switch(zt){case 8:Sf(),_=6;break e;case 3:case 2:case 9:case 6:Zn.current===null&&(n=!0);var J=zt;if(zt=0,Qn=null,cr(e,E,B,J),a&&sr){_=0;break e}break;default:J=zt,zt=0,Qn=null,cr(e,E,B,J)}}bx(),_=$t;break}catch(de){p0(e,de)}while(!0);return n&&e.shellSuspendCounter++,Zi=fs=null,Nt=r,P.H=c,P.A=f,pt===null&&(kt=null,_t=0,ol()),_}function bx(){for(;pt!==null;)v0(pt)}function Ex(e,n){var a=Nt;Nt|=2;var r=g0(),c=_0();kt!==e||_t!==n?(Bl=null,Il=M()+500,lr(e,n)):sr=Re(e,n);e:do try{if(zt!==0&&pt!==null){n=pt;var f=Qn;t:switch(zt){case 1:zt=0,Qn=null,cr(e,n,f,1);break;case 2:case 9:if(Cp(f)){zt=0,Qn=null,x0(n);break}n=function(){zt!==2&&zt!==9||kt!==e||(zt=7),Pi(e)},f.then(n,n);break e;case 3:zt=7;break e;case 4:zt=5;break e;case 7:Cp(f)?(zt=0,Qn=null,x0(n)):(zt=0,Qn=null,cr(e,n,f,7));break;case 5:var _=null;switch(pt.tag){case 26:_=pt.memoizedState;case 5:case 27:var E=pt;if(_?ag(_):E.stateNode.complete){zt=0,Qn=null;var B=E.sibling;if(B!==null)pt=B;else{var J=E.return;J!==null?(pt=J,Vl(J)):pt=null}break t}}zt=0,Qn=null,cr(e,n,f,5);break;case 6:zt=0,Qn=null,cr(e,n,f,6);break;case 8:Sf(),$t=6;break e;default:throw Error(s(462))}}Tx();break}catch(de){p0(e,de)}while(!0);return Zi=fs=null,P.H=r,P.A=c,Nt=a,pt!==null?0:(kt=null,_t=0,ol(),$t)}function Tx(){for(;pt!==null&&!We();)v0(pt)}function v0(e){var n=Vm(e.alternate,e,sa);e.memoizedProps=e.pendingProps,n===null?Vl(e):pt=n}function x0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=zm(a,n,n.pendingProps,n.type,void 0,_t);break;case 11:n=zm(a,n,n.pendingProps,n.type.render,n.ref,_t);break;case 5:Pu(n);default:jm(a,n),n=pt=_p(n,sa),n=Vm(a,n,sa)}e.memoizedProps=e.pendingProps,n===null?Vl(e):pt=n}function cr(e,n,a,r){Zi=fs=null,Pu(n),Js=null,no=0;var c=n.return;try{if(hx(e,c,n,a,_t)){$t=1,wl(e,si(a,e.current)),pt=null;return}}catch(f){if(c!==null)throw pt=c,f;$t=1,wl(e,si(a,e.current)),pt=null;return}n.flags&32768?(xt||r===1?e=!0:sr||(_t&536870912)!==0?e=!1:(za=e=!0,(r===2||r===9||r===3||r===6)&&(r=Zn.current,r!==null&&r.tag===13&&(r.flags|=16384))),S0(n,e)):Vl(n)}function Vl(e){var n=e;do{if((n.flags&32768)!==0){S0(n,za);return}e=n.return;var a=gx(n.alternate,n,sa);if(a!==null){pt=a;return}if(n=n.sibling,n!==null){pt=n;return}pt=n=e}while(n!==null);$t===0&&($t=5)}function S0(e,n){do{var a=_x(e.alternate,e);if(a!==null){a.flags&=32767,pt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){pt=e;return}pt=e=a}while(e!==null);$t=6,pt=null}function y0(e,n,a,r,c,f,_,E,B){e.cancelPendingCommit=null;do kl();while(dn!==0);if((Nt&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=lu,gi(e,a,f,_,E,B),e===kt&&(pt=kt=null,_t=0),or=n,Ba=e,ra=a,_f=f,vf=c,u0=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,wx(ce,function(){return A0(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=P.T,P.T=null,c=G.p,G.p=2,_=Nt,Nt|=4;try{vx(e,n,a)}finally{Nt=_,G.p=c,P.T=r}}dn=1,M0(),b0(),E0()}}function M0(){if(dn===1){dn=0;var e=Ba,n=or,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var r=G.p;G.p=2;var c=Nt;Nt|=4;try{n0(n,e);var f=Lf,_=lp(e.containerInfo),E=f.focusedElem,B=f.selectionRange;if(_!==E&&E&&E.ownerDocument&&op(E.ownerDocument.documentElement,E)){if(B!==null&&iu(E)){var J=B.start,de=B.end;if(de===void 0&&(de=J),"selectionStart"in E)E.selectionStart=J,E.selectionEnd=Math.min(de,E.value.length);else{var ge=E.ownerDocument||document,ee=ge&&ge.defaultView||window;if(ee.getSelection){var le=ee.getSelection(),Ve=E.textContent.length,et=Math.min(B.start,Ve),Gt=B.end===void 0?et:Math.min(B.end,Ve);!le.extend&&et>Gt&&(_=Gt,Gt=et,et=_);var Y=rp(E,et),j=rp(E,Gt);if(Y&&j&&(le.rangeCount!==1||le.anchorNode!==Y.node||le.anchorOffset!==Y.offset||le.focusNode!==j.node||le.focusOffset!==j.offset)){var Q=ge.createRange();Q.setStart(Y.node,Y.offset),le.removeAllRanges(),et>Gt?(le.addRange(Q),le.extend(j.node,j.offset)):(Q.setEnd(j.node,j.offset),le.addRange(Q))}}}}for(ge=[],le=E;le=le.parentNode;)le.nodeType===1&&ge.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<ge.length;E++){var me=ge[E];me.element.scrollLeft=me.left,me.element.scrollTop=me.top}}tc=!!Uf,Lf=Uf=null}finally{Nt=c,G.p=r,P.T=a}}e.current=n,dn=2}}function b0(){if(dn===2){dn=0;var e=Ba,n=or,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var r=G.p;G.p=2;var c=Nt;Nt|=4;try{Qm(e,n.alternate,n)}finally{Nt=c,G.p=r,P.T=a}}dn=3}}function E0(){if(dn===4||dn===3){dn=0,D();var e=Ba,n=or,a=ra,r=u0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?dn=5:(dn=0,or=Ba=null,T0(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Ia=null),Os(a),n=n.stateNode,Ee&&typeof Ee.onCommitFiberRoot=="function")try{Ee.onCommitFiberRoot(be,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=P.T,c=G.p,G.p=2,P.T=null;try{for(var f=e.onRecoverableError,_=0;_<r.length;_++){var E=r[_];f(E.value,{componentStack:E.stack})}}finally{P.T=n,G.p=c}}(ra&3)!==0&&kl(),Pi(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===xf?So++:(So=0,xf=e):So=0,yo(0)}}function T0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,eo(n)))}function kl(){return M0(),b0(),E0(),A0()}function A0(){if(dn!==5)return!1;var e=Ba,n=_f;_f=0;var a=Os(ra),r=P.T,c=G.p;try{G.p=32>a?32:a,P.T=null,a=vf,vf=null;var f=Ba,_=ra;if(dn=0,or=Ba=null,ra=0,(Nt&6)!==0)throw Error(s(331));var E=Nt;if(Nt|=4,o0(f.current),a0(f,f.current,_,a),Nt=E,yo(0,!1),Ee&&typeof Ee.onPostCommitFiberRoot=="function")try{Ee.onPostCommitFiberRoot(be,f)}catch{}return!0}finally{G.p=c,P.T=r,T0(e,n)}}function R0(e,n,a){n=si(a,n),n=Ku(e.stateNode,n,2),e=Ua(e,n,2),e!==null&&(Dn(e,2),Pi(e))}function Ft(e,n,a){if(e.tag===3)R0(e,e,a);else for(;n!==null;){if(n.tag===3){R0(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ia===null||!Ia.has(r))){e=si(a,e),a=Cm(2),r=Ua(n,a,2),r!==null&&(wm(a,r,n,e),Dn(r,2),Pi(r));break}}n=n.return}}function Mf(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new yx;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(pf=!0,c.add(a),e=Ax.bind(null,e,n,a),n.then(e,e))}function Ax(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,kt===e&&(_t&a)===a&&($t===4||$t===3&&(_t&62914560)===_t&&300>M()-Fl?(Nt&2)===0&&lr(e,0):mf|=a,rr===_t&&(rr=0)),Pi(e)}function C0(e,n){n===0&&(n=Ot()),e=ls(e,n),e!==null&&(Dn(e,n),Pi(e))}function Rx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),C0(e,a)}function Cx(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),C0(e,a)}function wx(e,n){return yt(e,n)}var jl=null,ur=null,bf=!1,Xl=!1,Ef=!1,Ga=0;function Pi(e){e!==ur&&e.next===null&&(ur===null?jl=ur=e:ur=ur.next=e),Xl=!0,bf||(bf=!0,Dx())}function yo(e,n){if(!Ef&&Xl){Ef=!0;do for(var a=!1,r=jl;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var _=r.suspendedLanes,E=r.pingedLanes;f=(1<<31-Pe(42|e)+1)-1,f&=c&~(_&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,U0(r,f))}else f=_t,f=ve(r,r===kt?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Re(r,f)||(a=!0,U0(r,f));r=r.next}while(a);Ef=!1}}function Nx(){w0()}function w0(){Xl=bf=!1;var e=0;Ga!==0&&Gx()&&(e=Ga);for(var n=M(),a=null,r=jl;r!==null;){var c=r.next,f=N0(r,n);f===0?(r.next=null,a===null?jl=c:a.next=c,c===null&&(ur=a)):(a=r,(e!==0||(f&3)!==0)&&(Xl=!0)),r=c}dn!==0&&dn!==5||yo(e),Ga!==0&&(Ga=0)}function N0(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var _=31-Pe(f),E=1<<_,B=c[_];B===-1?((E&a)===0||(E&r)!==0)&&(c[_]=nt(E,n)):B<=n&&(e.expiredLanes|=E),f&=~E}if(n=kt,a=_t,a=ve(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(zt===2||zt===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Dt(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Re(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&Dt(r),Os(a)){case 2:case 8:a=xe;break;case 32:a=ce;break;case 268435456:a=Ce;break;default:a=ce}return r=D0.bind(null,e),a=yt(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&Dt(r),e.callbackPriority=2,e.callbackNode=null,2}function D0(e,n){if(dn!==0&&dn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(kl()&&e.callbackNode!==a)return null;var r=_t;return r=ve(e,e===kt?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(d0(e,r,n),N0(e,M()),e.callbackNode!=null&&e.callbackNode===a?D0.bind(null,e):null)}function U0(e,n){if(kl())return null;d0(e,n,!0)}function Dx(){kx(function(){(Nt&6)!==0?yt(he,Nx):w0()})}function Tf(){if(Ga===0){var e=Zs;e===0&&(e=Ue,Ue<<=1,(Ue&261888)===0&&(Ue=256)),Ga=e}return Ga}function L0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:$o(""+e)}function O0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Ux(e,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=L0((c[xn]||null).action),_=r.submitter;_&&(n=(n=_[xn]||null)?L0(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var E=new il("action","action",null,r,c);e.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ga!==0){var B=_?O0(c,_):new FormData(c);ju(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(E.preventDefault(),B=_?O0(c,_):new FormData(c),ju(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var Af=0;Af<ou.length;Af++){var Rf=ou[Af],Lx=Rf.toLowerCase(),Ox=Rf[0].toUpperCase()+Rf.slice(1);xi(Lx,"on"+Ox)}xi(fp,"onAnimationEnd"),xi(dp,"onAnimationIteration"),xi(hp,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi(Kv,"onTransitionRun"),xi(Qv,"onTransitionStart"),xi(Jv,"onTransitionCancel"),xi(pp,"onTransitionEnd"),K("onMouseEnter",["mouseout","mouseover"]),K("onMouseLeave",["mouseout","mouseover"]),K("onPointerEnter",["pointerout","pointerover"]),K("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Px=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mo));function P0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],c=r.event;r=r.listeners;e:{var f=void 0;if(n)for(var _=r.length-1;0<=_;_--){var E=r[_],B=E.instance,J=E.currentTarget;if(E=E.listener,B!==f&&c.isPropagationStopped())break e;f=E,c.currentTarget=J;try{f(c)}catch(de){rl(de)}c.currentTarget=null,f=B}else for(_=0;_<r.length;_++){if(E=r[_],B=E.instance,J=E.currentTarget,E=E.listener,B!==f&&c.isPropagationStopped())break e;f=E,c.currentTarget=J;try{f(c)}catch(de){rl(de)}c.currentTarget=null,f=B}}}}function mt(e,n){var a=n[Ps];a===void 0&&(a=n[Ps]=new Set);var r=e+"__bubble";a.has(r)||(z0(n,e,2,!1),a.add(r))}function Cf(e,n,a){var r=0;n&&(r|=4),z0(a,e,r,n)}var ql="_reactListening"+Math.random().toString(36).slice(2);function wf(e){if(!e[ql]){e[ql]=!0,W.forEach(function(a){a!=="selectionchange"&&(Px.has(a)||Cf(a,!1,e),Cf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ql]||(n[ql]=!0,Cf("selectionchange",!1,n))}}function z0(e,n,a,r){switch(fg(n)){case 2:var c=cS;break;case 8:c=uS;break;default:c=jf}a=c.bind(null,n,a,e),c=void 0,!Yc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Nf(e,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var E=r.stateNode.containerInfo;if(E===c)break;if(_===4)for(_=r.return;_!==null;){var B=_.tag;if((B===3||B===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;E!==null;){if(_=Ma(E),_===null)return;if(B=_.tag,B===5||B===6||B===26||B===27){r=f=_;continue e}E=E.parentNode}}r=r.return}Gh(function(){var J=f,de=qc(a),ge=[];e:{var ee=mp.get(e);if(ee!==void 0){var le=il,Ve=e;switch(e){case"keypress":if(tl(a)===0)break e;case"keydown":case"keyup":le=Cv;break;case"focusin":Ve="focus",le=Jc;break;case"focusout":Ve="blur",le=Jc;break;case"beforeblur":case"afterblur":le=Jc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=jh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=gv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=Dv;break;case fp:case dp:case hp:le=xv;break;case pp:le=Lv;break;case"scroll":case"scrollend":le=pv;break;case"wheel":le=Pv;break;case"copy":case"cut":case"paste":le=yv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=qh;break;case"toggle":case"beforetoggle":le=Fv}var et=(n&4)!==0,Gt=!et&&(e==="scroll"||e==="scrollend"),Y=et?ee!==null?ee+"Capture":null:ee;et=[];for(var j=J,Q;j!==null;){var me=j;if(Q=me.stateNode,me=me.tag,me!==5&&me!==26&&me!==27||Q===null||Y===null||(me=kr(j,Y),me!=null&&et.push(bo(j,me,Q))),Gt)break;j=j.return}0<et.length&&(ee=new le(ee,Ve,null,a,de),ge.push({event:ee,listeners:et}))}}if((n&7)===0){e:{if(ee=e==="mouseover"||e==="pointerover",le=e==="mouseout"||e==="pointerout",ee&&a!==Xc&&(Ve=a.relatedTarget||a.fromElement)&&(Ma(Ve)||Ve[_i]))break e;if((le||ee)&&(ee=de.window===de?de:(ee=de.ownerDocument)?ee.defaultView||ee.parentWindow:window,le?(Ve=a.relatedTarget||a.toElement,le=J,Ve=Ve?Ma(Ve):null,Ve!==null&&(Gt=u(Ve),et=Ve.tag,Ve!==Gt||et!==5&&et!==27&&et!==6)&&(Ve=null)):(le=null,Ve=J),le!==Ve)){if(et=jh,me="onMouseLeave",Y="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(et=qh,me="onPointerLeave",Y="onPointerEnter",j="pointer"),Gt=le==null?ee:as(le),Q=Ve==null?ee:as(Ve),ee=new et(me,j+"leave",le,a,de),ee.target=Gt,ee.relatedTarget=Q,me=null,Ma(de)===J&&(et=new et(Y,j+"enter",Ve,a,de),et.target=Q,et.relatedTarget=Gt,me=et),Gt=me,le&&Ve)t:{for(et=zx,Y=le,j=Ve,Q=0,me=Y;me;me=et(me))Q++;me=0;for(var Qe=j;Qe;Qe=et(Qe))me++;for(;0<Q-me;)Y=et(Y),Q--;for(;0<me-Q;)j=et(j),me--;for(;Q--;){if(Y===j||j!==null&&Y===j.alternate){et=Y;break t}Y=et(Y),j=et(j)}et=null}else et=null;le!==null&&F0(ge,ee,le,et,!1),Ve!==null&&Gt!==null&&F0(ge,Gt,Ve,et,!0)}}e:{if(ee=J?as(J):window,le=ee.nodeName&&ee.nodeName.toLowerCase(),le==="select"||le==="input"&&ee.type==="file")var Et=ep;else if(Jh(ee))if(tp)Et=Wv;else{Et=Xv;var Ye=jv}else le=ee.nodeName,!le||le.toLowerCase()!=="input"||ee.type!=="checkbox"&&ee.type!=="radio"?J&&vi(J.elementType)&&(Et=ep):Et=qv;if(Et&&(Et=Et(e,J))){$h(ge,Et,a,de);break e}Ye&&Ye(e,ee,J),e==="focusout"&&J&&ee.type==="number"&&J.memoizedProps.value!=null&&yn(ee,"number",ee.value)}switch(Ye=J?as(J):window,e){case"focusin":(Jh(Ye)||Ye.contentEditable==="true")&&(Gs=Ye,au=J,Qr=null);break;case"focusout":Qr=au=Gs=null;break;case"mousedown":su=!0;break;case"contextmenu":case"mouseup":case"dragend":su=!1,cp(ge,a,de);break;case"selectionchange":if(Zv)break;case"keydown":case"keyup":cp(ge,a,de)}var ct;if(eu)e:{switch(e){case"compositionstart":var vt="onCompositionStart";break e;case"compositionend":vt="onCompositionEnd";break e;case"compositionupdate":vt="onCompositionUpdate";break e}vt=void 0}else Hs?Kh(e,a)&&(vt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(vt="onCompositionStart");vt&&(Wh&&a.locale!=="ko"&&(Hs||vt!=="onCompositionStart"?vt==="onCompositionEnd"&&Hs&&(ct=Vh()):(Ta=de,Zc="value"in Ta?Ta.value:Ta.textContent,Hs=!0)),Ye=Wl(J,vt),0<Ye.length&&(vt=new Xh(vt,e,null,a,de),ge.push({event:vt,listeners:Ye}),ct?vt.data=ct:(ct=Qh(a),ct!==null&&(vt.data=ct)))),(ct=Bv?Hv(e,a):Gv(e,a))&&(vt=Wl(J,"onBeforeInput"),0<vt.length&&(Ye=new Xh("onBeforeInput","beforeinput",null,a,de),ge.push({event:Ye,listeners:vt}),Ye.data=ct)),Ux(ge,e,J,a,de)}P0(ge,n)})}function bo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Wl(e,n){for(var a=n+"Capture",r=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=kr(e,a),c!=null&&r.unshift(bo(e,c,f)),c=kr(e,n),c!=null&&r.push(bo(e,c,f))),e.tag===3)return r;e=e.return}return[]}function zx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function F0(e,n,a,r,c){for(var f=n._reactName,_=[];a!==null&&a!==r;){var E=a,B=E.alternate,J=E.stateNode;if(E=E.tag,B!==null&&B===r)break;E!==5&&E!==26&&E!==27||J===null||(B=J,c?(J=kr(a,f),J!=null&&_.unshift(bo(a,J,B))):c||(J=kr(a,f),J!=null&&_.push(bo(a,J,B)))),a=a.return}_.length!==0&&e.push({event:n,listeners:_})}var Fx=/\r\n?/g,Ix=/\u0000|\uFFFD/g;function I0(e){return(typeof e=="string"?e:""+e).replace(Fx,`
`).replace(Ix,"")}function B0(e,n){return n=I0(n),I0(e)===n}function Ht(e,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||fn(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&fn(e,""+r);break;case"className":Je(e,"class",r);break;case"tabIndex":Je(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Je(e,a,r);break;case"style":Fs(e,r,f);break;case"data":if(n!=="object"){Je(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=$o(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ht(e,n,"name",c.name,c,null),Ht(e,n,"formEncType",c.formEncType,c,null),Ht(e,n,"formMethod",c.formMethod,c,null),Ht(e,n,"formTarget",c.formTarget,c,null)):(Ht(e,n,"encType",c.encType,c,null),Ht(e,n,"method",c.method,c,null),Ht(e,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=$o(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Xi);break;case"onScroll":r!=null&&mt("scroll",e);break;case"onScrollEnd":r!=null&&mt("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=$o(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":mt("beforetoggle",e),mt("toggle",e),Xe(e,"popover",r);break;case"xlinkActuate":qe(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":qe(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":qe(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":qe(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":qe(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":qe(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":qe(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":qe(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":qe(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Xe(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=dv.get(a)||a,Xe(e,a,r))}}function Df(e,n,a,r,c,f){switch(a){case"style":Fs(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?fn(e,r):(typeof r=="number"||typeof r=="bigint")&&fn(e,""+r);break;case"onScroll":r!=null&&mt("scroll",e);break;case"onScrollEnd":r!=null&&mt("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Xi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!oe.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,c);break e}a in e?e[a]=r:r===!0?e.setAttribute(a,""):Xe(e,a,r)}}}function Cn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":mt("error",e),mt("load",e);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ht(e,n,f,_,a,null)}}c&&Ht(e,n,"srcSet",a.srcSet,a,null),r&&Ht(e,n,"src",a.src,a,null);return;case"input":mt("invalid",e);var E=f=_=c=null,B=null,J=null;for(r in a)if(a.hasOwnProperty(r)){var de=a[r];if(de!=null)switch(r){case"name":c=de;break;case"type":_=de;break;case"checked":B=de;break;case"defaultChecked":J=de;break;case"value":f=de;break;case"defaultValue":E=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(s(137,n));break;default:Ht(e,n,r,de,a,null)}}ji(e,f,E,B,J,_,c,!1);return;case"select":mt("invalid",e),r=_=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":_=E;break;case"multiple":r=E;default:Ht(e,n,c,E,a,null)}n=f,a=_,e.multiple=!!r,n!=null?ii(e,!!r,n,!1):a!=null&&ii(e,!!r,a,!0);return;case"textarea":mt("invalid",e),f=c=r=null;for(_ in a)if(a.hasOwnProperty(_)&&(E=a[_],E!=null))switch(_){case"value":r=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Ht(e,n,_,E,a,null)}Mn(e,r,c,f);return;case"option":for(B in a)a.hasOwnProperty(B)&&(r=a[B],r!=null)&&(B==="selected"?e.selected=r&&typeof r!="function"&&typeof r!="symbol":Ht(e,n,B,r,a,null));return;case"dialog":mt("beforetoggle",e),mt("toggle",e),mt("cancel",e),mt("close",e);break;case"iframe":case"object":mt("load",e);break;case"video":case"audio":for(r=0;r<Mo.length;r++)mt(Mo[r],e);break;case"image":mt("error",e),mt("load",e);break;case"details":mt("toggle",e);break;case"embed":case"source":case"link":mt("error",e),mt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(r=a[J],r!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ht(e,n,J,r,a,null)}return;default:if(vi(n)){for(de in a)a.hasOwnProperty(de)&&(r=a[de],r!==void 0&&Df(e,n,de,r,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(r=a[E],r!=null&&Ht(e,n,E,r,a,null))}function Bx(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,_=null,E=null,B=null,J=null,de=null;for(le in a){var ge=a[le];if(a.hasOwnProperty(le)&&ge!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":B=ge;default:r.hasOwnProperty(le)||Ht(e,n,le,null,r,ge)}}for(var ee in r){var le=r[ee];if(ge=a[ee],r.hasOwnProperty(ee)&&(le!=null||ge!=null))switch(ee){case"type":f=le;break;case"name":c=le;break;case"checked":J=le;break;case"defaultChecked":de=le;break;case"value":_=le;break;case"defaultValue":E=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(s(137,n));break;default:le!==ge&&Ht(e,n,ee,le,r,ge)}}Sn(e,_,E,B,J,de,f,c);return;case"select":le=_=E=ee=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":le=B;default:r.hasOwnProperty(f)||Ht(e,n,f,null,r,B)}for(c in r)if(f=r[c],B=a[c],r.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":ee=f;break;case"defaultValue":E=f;break;case"multiple":_=f;default:f!==B&&Ht(e,n,c,f,r,B)}n=E,a=_,r=le,ee!=null?ii(e,!!a,ee,!1):!!r!=!!a&&(n!=null?ii(e,!!a,n,!0):ii(e,!!a,a?[]:"",!1));return;case"textarea":le=ee=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Ht(e,n,E,null,r,c)}for(_ in r)if(c=r[_],f=a[_],r.hasOwnProperty(_)&&(c!=null||f!=null))switch(_){case"value":ee=c;break;case"defaultValue":le=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Ht(e,n,_,c,r,f)}Pt(e,ee,le);return;case"option":for(var Ve in a)ee=a[Ve],a.hasOwnProperty(Ve)&&ee!=null&&!r.hasOwnProperty(Ve)&&(Ve==="selected"?e.selected=!1:Ht(e,n,Ve,null,r,ee));for(B in r)ee=r[B],le=a[B],r.hasOwnProperty(B)&&ee!==le&&(ee!=null||le!=null)&&(B==="selected"?e.selected=ee&&typeof ee!="function"&&typeof ee!="symbol":Ht(e,n,B,ee,r,le));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in a)ee=a[et],a.hasOwnProperty(et)&&ee!=null&&!r.hasOwnProperty(et)&&Ht(e,n,et,null,r,ee);for(J in r)if(ee=r[J],le=a[J],r.hasOwnProperty(J)&&ee!==le&&(ee!=null||le!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(s(137,n));break;default:Ht(e,n,J,ee,r,le)}return;default:if(vi(n)){for(var Gt in a)ee=a[Gt],a.hasOwnProperty(Gt)&&ee!==void 0&&!r.hasOwnProperty(Gt)&&Df(e,n,Gt,void 0,r,ee);for(de in r)ee=r[de],le=a[de],!r.hasOwnProperty(de)||ee===le||ee===void 0&&le===void 0||Df(e,n,de,ee,r,le);return}}for(var Y in a)ee=a[Y],a.hasOwnProperty(Y)&&ee!=null&&!r.hasOwnProperty(Y)&&Ht(e,n,Y,null,r,ee);for(ge in r)ee=r[ge],le=a[ge],!r.hasOwnProperty(ge)||ee===le||ee==null&&le==null||Ht(e,n,ge,ee,r,le)}function H0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Hx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,_=c.initiatorType,E=c.duration;if(f&&E&&H0(_)){for(_=0,E=c.responseEnd,r+=1;r<a.length;r++){var B=a[r],J=B.startTime;if(J>E)break;var de=B.transferSize,ge=B.initiatorType;de&&H0(ge)&&(B=B.responseEnd,_+=de*(B<E?1:(E-J)/(B-J)))}if(--r,n+=8*(f+_)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Uf=null,Lf=null;function Yl(e){return e.nodeType===9?e:e.ownerDocument}function G0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function V0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Of(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Pf=null;function Gx(){var e=window.event;return e&&e.type==="popstate"?e===Pf?!1:(Pf=e,!0):(Pf=null,!1)}var k0=typeof setTimeout=="function"?setTimeout:void 0,Vx=typeof clearTimeout=="function"?clearTimeout:void 0,j0=typeof Promise=="function"?Promise:void 0,kx=typeof queueMicrotask=="function"?queueMicrotask:typeof j0<"u"?function(e){return j0.resolve(null).then(e).catch(jx)}:k0;function jx(e){setTimeout(function(){throw e})}function Va(e){return e==="head"}function X0(e,n){var a=n,r=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(c),pr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Eo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Eo(a);for(var f=a.firstChild;f;){var _=f.nextSibling,E=f.nodeName;f[is]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Eo(e.ownerDocument.body);a=c}while(a);pr(n)}function q0(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function zf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":zf(a),Vr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Xx(e,n,a,r){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[is])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ui(e.nextSibling),e===null)break}return null}function qx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ui(e.nextSibling),e===null))return null;return e}function W0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ui(e.nextSibling),e===null))return null;return e}function Ff(e){return e.data==="$?"||e.data==="$~"}function If(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Wx(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function ui(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Bf=null;function Y0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return ui(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Z0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function K0(e,n,a){switch(n=Yl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Eo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Vr(e)}var fi=new Map,Q0=new Set;function Zl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var oa=G.d;G.d={f:Yx,r:Zx,D:Kx,C:Qx,L:Jx,m:$x,X:tS,S:eS,M:nS};function Yx(){var e=oa.f(),n=Hl();return e||n}function Zx(e){var n=ba(e);n!==null&&n.tag===5&&n.type==="form"?pm(n):oa.r(e)}var fr=typeof document>"u"?null:document;function J0(e,n,a){var r=fr;if(r&&typeof n=="string"&&n){var c=it(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Q0.has(c)||(Q0.add(c),e={rel:e,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),Cn(n,"link",e),T(n),r.head.appendChild(n)))}}function Kx(e){oa.D(e),J0("dns-prefetch",e,null)}function Qx(e,n){oa.C(e,n),J0("preconnect",e,n)}function Jx(e,n,a){oa.L(e,n,a);var r=fr;if(r&&e&&n){var c='link[rel="preload"][as="'+it(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+it(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+it(a.imageSizes)+'"]')):c+='[href="'+it(e)+'"]';var f=c;switch(n){case"style":f=dr(e);break;case"script":f=hr(e)}fi.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),fi.set(f,e),r.querySelector(c)!==null||n==="style"&&r.querySelector(To(f))||n==="script"&&r.querySelector(Ao(f))||(n=r.createElement("link"),Cn(n,"link",e),T(n),r.head.appendChild(n)))}}function $x(e,n){oa.m(e,n);var a=fr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+it(r)+'"][href="'+it(e)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=hr(e)}if(!fi.has(f)&&(e=g({rel:"modulepreload",href:e},n),fi.set(f,e),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ao(f)))return}r=a.createElement("link"),Cn(r,"link",e),T(r),a.head.appendChild(r)}}}function eS(e,n,a){oa.S(e,n,a);var r=fr;if(r&&e){var c=Ea(r).hoistableStyles,f=dr(e);n=n||"default";var _=c.get(f);if(!_){var E={loading:0,preload:null};if(_=r.querySelector(To(f)))E.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=fi.get(f))&&Hf(e,a);var B=_=r.createElement("link");T(B),Cn(B,"link",e),B._p=new Promise(function(J,de){B.onload=J,B.onerror=de}),B.addEventListener("load",function(){E.loading|=1}),B.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Kl(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:E},c.set(f,_)}}}function tS(e,n){oa.X(e,n);var a=fr;if(a&&e){var r=Ea(a).hoistableScripts,c=hr(e),f=r.get(c);f||(f=a.querySelector(Ao(c)),f||(e=g({src:e,async:!0},n),(n=fi.get(c))&&Gf(e,n),f=a.createElement("script"),T(f),Cn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function nS(e,n){oa.M(e,n);var a=fr;if(a&&e){var r=Ea(a).hoistableScripts,c=hr(e),f=r.get(c);f||(f=a.querySelector(Ao(c)),f||(e=g({src:e,async:!0,type:"module"},n),(n=fi.get(c))&&Gf(e,n),f=a.createElement("script"),T(f),Cn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function $0(e,n,a,r){var c=(c=te.current)?Zl(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=dr(a.href),a=Ea(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=dr(a.href);var f=Ea(c).hoistableStyles,_=f.get(e);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,_),(f=c.querySelector(To(e)))&&!f._p&&(_.instance=f,_.state.loading=5),fi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(e,a),f||iS(c,e,a,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=hr(a),a=Ea(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function dr(e){return'href="'+it(e)+'"'}function To(e){return'link[rel="stylesheet"]['+e+"]"}function eg(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function iS(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Cn(n,"link",a),T(n),e.head.appendChild(n))}function hr(e){return'[src="'+it(e)+'"]'}function Ao(e){return"script[async]"+e}function tg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+it(a.href)+'"]');if(r)return n.instance=r,T(r),r;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),T(r),Cn(r,"style",c),Kl(r,a.precedence,e),n.instance=r;case"stylesheet":c=dr(a.href);var f=e.querySelector(To(c));if(f)return n.state.loading|=4,n.instance=f,T(f),f;r=eg(a),(c=fi.get(c))&&Hf(r,c),f=(e.ownerDocument||e).createElement("link"),T(f);var _=f;return _._p=new Promise(function(E,B){_.onload=E,_.onerror=B}),Cn(f,"link",r),n.state.loading|=4,Kl(f,a.precedence,e),n.instance=f;case"script":return f=hr(a.src),(c=e.querySelector(Ao(f)))?(n.instance=c,T(c),c):(r=a,(c=fi.get(f))&&(r=g({},a),Gf(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),T(c),Cn(c,"link",r),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Kl(r,a.precedence,e));return n.instance}function Kl(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,_=0;_<r.length;_++){var E=r[_];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Hf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Gf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Ql=null;function ng(e,n,a){if(Ql===null){var r=new Map,c=Ql=new Map;c.set(a,r)}else c=Ql,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[is]||f[sn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=e+_;var E=r.get(_);E?E.push(f):r.set(_,[f])}}return r}function ig(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function aS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function ag(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function sS(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=dr(r.href),f=n.querySelector(To(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Jl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,T(f);return}f=n.ownerDocument||n,r=eg(r),(c=fi.get(c))&&Hf(r,c),f=f.createElement("link"),T(f);var _=f;_._p=new Promise(function(E,B){_.onload=E,_.onerror=B}),Cn(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Jl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Vf=0;function rS(e,n){return e.stylesheets&&e.count===0&&ec(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&ec(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Vf===0&&(Vf=62500*Hx());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ec(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Vf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function Jl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ec(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var $l=null;function ec(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,$l=new Map,n.forEach(oS,e),$l=null,Jl.call(e))}function oS(e,n){if(!(n.state.loading&4)){var a=$l.get(e);if(a)var r=a.get(null);else{a=new Map,$l.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var _=c[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),r=_)}r&&a.set(null,r)}c=n.instance,_=c.getAttribute("data-precedence"),f=a.get(_)||r,f===r&&a.set(null,c),a.set(_,c),this.count++,r=Jl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Ro={$$typeof:z,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function lS(e,n,a,r,c,f,_,E,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Mt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mt(0),this.hiddenUpdates=Mt(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function sg(e,n,a,r,c,f,_,E,B,J,de,ge){return e=new lS(e,n,a,_,B,J,de,ge,E),n=1,f===!0&&(n|=24),f=Yn(3,null,null,n),e.current=f,f.stateNode=e,n=Su(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Eu(f),e}function rg(e){return e?(e=js,e):js}function og(e,n,a,r,c,f){c=rg(c),r.context===null?r.context=c:r.pendingContext=c,r=Da(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Ua(e,r,n),a!==null&&(kn(a,e,n),ao(a,e,n))}function lg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function kf(e,n){lg(e,n),(e=e.alternate)&&lg(e,n)}function cg(e){if(e.tag===13||e.tag===31){var n=ls(e,67108864);n!==null&&kn(n,e,67108864),kf(e,67108864)}}function ug(e){if(e.tag===13||e.tag===31){var n=$n();n=Br(n);var a=ls(e,n);a!==null&&kn(a,e,n),kf(e,n)}}var tc=!0;function cS(e,n,a,r){var c=P.T;P.T=null;var f=G.p;try{G.p=2,jf(e,n,a,r)}finally{G.p=f,P.T=c}}function uS(e,n,a,r){var c=P.T;P.T=null;var f=G.p;try{G.p=8,jf(e,n,a,r)}finally{G.p=f,P.T=c}}function jf(e,n,a,r){if(tc){var c=Xf(r);if(c===null)Nf(e,n,r,nc,a),dg(e,r);else if(dS(c,e,n,a,r))r.stopPropagation();else if(dg(e,r),n&4&&-1<fS.indexOf(e)){for(;c!==null;){var f=ba(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=ye(f.pendingLanes);if(_!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;_;){var B=1<<31-Pe(_);E.entanglements[1]|=B,_&=~B}Pi(f),(Nt&6)===0&&(Il=M()+500,yo(0))}}break;case 31:case 13:E=ls(f,2),E!==null&&kn(E,f,2),Hl(),kf(f,2)}if(f=Xf(r),f===null&&Nf(e,n,r,nc,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else Nf(e,n,r,null,a)}}function Xf(e){return e=qc(e),qf(e)}var nc=null;function qf(e){if(nc=null,e=Ma(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return nc=e,null}function fg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case he:return 2;case xe:return 8;case ce:case Ze:return 32;case Ce:return 268435456;default:return 32}default:return 32}}var Wf=!1,ka=null,ja=null,Xa=null,Co=new Map,wo=new Map,qa=[],fS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function dg(e,n){switch(e){case"focusin":case"focusout":ka=null;break;case"dragenter":case"dragleave":ja=null;break;case"mouseover":case"mouseout":Xa=null;break;case"pointerover":case"pointerout":Co.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":wo.delete(n.pointerId)}}function No(e,n,a,r,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=ba(n),n!==null&&cg(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function dS(e,n,a,r,c){switch(n){case"focusin":return ka=No(ka,e,n,a,r,c),!0;case"dragenter":return ja=No(ja,e,n,a,r,c),!0;case"mouseover":return Xa=No(Xa,e,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return Co.set(f,No(Co.get(f)||null,e,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,wo.set(f,No(wo.get(f)||null,e,n,a,r,c)),!0}return!1}function hg(e){var n=Ma(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Di(e.priority,function(){ug(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Di(e.priority,function(){ug(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ic(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Xf(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Xc=r,a.target.dispatchEvent(r),Xc=null}else return n=ba(a),n!==null&&cg(n),e.blockedOn=a,!1;n.shift()}return!0}function pg(e,n,a){ic(e)&&a.delete(n)}function hS(){Wf=!1,ka!==null&&ic(ka)&&(ka=null),ja!==null&&ic(ja)&&(ja=null),Xa!==null&&ic(Xa)&&(Xa=null),Co.forEach(pg),wo.forEach(pg)}function ac(e,n){e.blockedOn===n&&(e.blockedOn=null,Wf||(Wf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,hS)))}var sc=null;function mg(e){sc!==e&&(sc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){sc===e&&(sc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],c=e[n+2];if(typeof r!="function"){if(qf(r||a)===null)continue;break}var f=ba(a);f!==null&&(e.splice(n,3),n-=3,ju(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function pr(e){function n(B){return ac(B,e)}ka!==null&&ac(ka,e),ja!==null&&ac(ja,e),Xa!==null&&ac(Xa,e),Co.forEach(n),wo.forEach(n);for(var a=0;a<qa.length;a++){var r=qa[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<qa.length&&(a=qa[0],a.blockedOn===null);)hg(a),a.blockedOn===null&&qa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],_=c[xn]||null;if(typeof f=="function")_||mg(a);else if(_){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,_=f[xn]||null)E=_.formAction;else if(qf(c)!==null)continue}else E=_.action;typeof E=="function"?a[r+1]=E:(a.splice(r,3),r-=3),mg(a)}}}function gg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return c=_})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Yf(e){this._internalRoot=e}rc.prototype.render=Yf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=$n();og(a,r,e,n,null,null)},rc.prototype.unmount=Yf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;og(e.current,2,null,e,null,null),Hl(),n[_i]=null}};function rc(e){this._internalRoot=e}rc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Hr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<qa.length&&n!==0&&n<qa[a].priority;a++);qa.splice(a,0,e),a===0&&hg(e)}};var _g=t.version;if(_g!=="19.2.3")throw Error(s(527,_g,"19.2.3"));G.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var pS={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oc.isDisabled&&oc.supportsFiber)try{be=oc.inject(pS),Ee=oc}catch{}}return Uo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",c=Em,f=Tm,_=Am;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=sg(e,1,!1,null,null,a,r,null,c,f,_,gg),e[_i]=n.current,wf(e),new Yf(n)},Uo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,c="",f=Em,_=Tm,E=Am,B=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=sg(e,1,!0,n,a??null,r,c,B,f,_,E,gg),n.context=rg(null),a=n.current,r=$n(),r=Br(r),c=Da(r),c.callback=null,Ua(a,c,r),a=r,n.current.lanes=a,Dn(n,a),Pi(n),e[_i]=n.current,wf(e),new rc(n)},Uo.version="19.2.3",Uo}var Rg;function ES(){if(Rg)return Qf.exports;Rg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Qf.exports=bS(),Qf.exports}var TS=ES();const AS=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),RS=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,s)=>s?s.toUpperCase():i.toLowerCase()),Cg=o=>{const t=RS(o);return t.charAt(0).toUpperCase()+t.slice(1)},A_=(...o)=>o.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim(),CS=o=>{for(const t in o)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};var wS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const NS=_n.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:d,...h},m)=>_n.createElement("svg",{ref:m,...wS,width:t,height:t,stroke:o,strokeWidth:s?Number(i)*24/Number(t):i,className:A_("lucide",l),...!u&&!CS(h)&&{"aria-hidden":"true"},...h},[...d.map(([p,v])=>_n.createElement(p,v)),...Array.isArray(u)?u:[u]]));const vn=(o,t)=>{const i=_n.forwardRef(({className:s,...l},u)=>_n.createElement(NS,{ref:u,iconNode:t,className:A_(`lucide-${AS(Cg(o))}`,`lucide-${o}`,s),...l}));return i.displayName=Cg(o),i};const DS=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],US=vn("activity",DS);const LS=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],OS=vn("brain",LS);const PS=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Mi=vn("check",PS);const zS=[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",key:"9m4mmf"}],["path",{d:"m2.5 21.5 1.4-1.4",key:"17g3f0"}],["path",{d:"m20.1 3.9 1.4-1.4",key:"1qn309"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",key:"1t2c92"}],["path",{d:"m9.6 14.4 4.8-4.8",key:"6umqxw"}]],FS=vn("dumbbell",zS);const IS=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],R_=vn("file-text",IS);const BS=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],C_=vn("instagram",BS);const HS=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],GS=vn("menu",HS);const VS=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],kS=vn("message-circle",VS);const jS=[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]],XS=vn("pill",jS);const qS=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],WS=vn("quote",qS);const YS=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],ZS=vn("smartphone",YS);const KS=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],QS=vn("star",KS);const JS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],$S=vn("target",JS);const ey=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],ty=vn("users",ey);const ny=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],wg=vn("video",ny);const iy=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ay=vn("x",iy);const sy=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],ry=vn("youtube",sy);const oy=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],bi=vn("zap",oy),ly=()=>{const[o,t]=_n.useState(!1),[i,s]=_n.useState(""),[l,u]=_n.useState(!1),[d,h]=_n.useState(!1),m=["./alex/1.jpeg","./alex/2.jpeg","./alex/3.jpeg","./alex/4.jpeg","./alex/5.jpeg","./alex/6.jpeg","./alex/7.jpeg","./alex/8.jpeg"],p=v=>{s(v),t(!0)};return C.jsxs(C.Fragment,{children:[C.jsx("section",{id:"coach",className:"py-24 relative z-10 bg-black/30 backdrop-blur-sm",children:C.jsxs("div",{className:"max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center",children:[C.jsxs("div",{className:"group h-screen mb-40 perspective-1000 w-full cursor-pointer",onClick:()=>u(!l),children:[C.jsxs("div",{className:`relative h-full w-full transition-all duration-700 transform-style-3d ${l?"rotate-y-180":""}`,children:[C.jsxs("div",{className:"absolute inset-0 backface-hidden",children:[C.jsx("div",{className:"absolute -inset-4 bg-fk-yellow/20 blur-xl rounded-full"}),C.jsx("img",{src:"./alexis.png",alt:"Alexis Contreras Coach",className:"relative w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500 border-2 border-white/10"}),C.jsx("div",{className:"absolute bottom-8 left-8 right-8",children:C.jsxs("div",{className:"bg-black/80 backdrop-blur p-6 border-l-4 border-fk-yellow",children:[C.jsx("h3",{className:"text-3xl font-bebas text-white mb-1",children:"ALEXIS CONTRERAS"}),C.jsx("p",{className:"text-fk-yellow font-montserrat text-sm tracking-widest uppercase",children:"Head Coach"})]})})]}),C.jsxs("div",{className:"absolute inset-0 h-full w-full rounded-2xl bg-zinc-900 border border-fk-yellow/30 p-8 rotate-y-180 backface-hidden flex flex-col justify-center items-center text-center",children:[C.jsx("h3",{className:"text-4xl font-bebas text-fk-yellow mb-6",children:"Sobre Mí"}),C.jsxs("p",{className:"text-gray-300 font-montserrat leading-relaxed text-lg",children:["Hoy, ",C.jsx("b",{className:"text-fk-yellow font-bold",children:"4 años"})," ","después de empezar a entrenar a otros, esa curiosidad se ha traducido en"," ",C.jsx("b",{className:"text-fk-yellow font-bold",children:"7 certificaciones profesionales y 2 diplomados"}),". He pasado de no tener recursos a tener el conocimiento para distinguir qué funciona realmente y qué es solo ruido."]}),C.jsx("div",{className:"w-16 h-1 bg-fk-yellow mt-8 mb-8"})]})]}),C.jsx("div",{className:"animate-fade-in-up [animation-delay:300ms]",children:C.jsx("p",{className:"m-10",children:"Al final, sigo siendo ese mismo joven con sed de aprender y mejorar, pero con una misión clara: darte las herramientas y la guía que yo tanto necesité al principio, para que tú logres el cambio físico real que buscas."})})]}),C.jsxs("div",{className:"animate-fade-in-up [animation-delay:200ms] sm:mt-20 md:mt-0 lg:mt-0",children:[C.jsx("span",{className:"text-fk-yellow font-bold tracking-[0.2em] text-sm font-montserrat uppercase mb-4 block",children:"TU MENTOR"}),C.jsxs("h2",{className:"text-5xl md:text-7xl font-bebas text-white mb-8 leading-[0.9]",children:["MÁS QUE UN ",C.jsx("br",{}),C.jsx("span",{className:"text-stroke text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500",children:"ENTRENADOR"})]}),C.jsxs("div",{className:"space-y-6 text-gray-300 font-montserrat text-lg font-light mb-12 h-[60vh] overflow-y-auto",children:[C.jsxs("p",{children:["Todo comenzó hace aproximadamente ocho años, en un momento en el que no me sentía cómodo con mi cuerpo. No me gustaba lo que veía en el espejo y, aunque tenía muchas ganas de cambiar, la realidad era sencilla: no tenía dinero para pagar un gimnasio ni mucho menos un entrenador. Así que tomé la única opción que tenía en ese momento: entrenar en casa."," "]}),C.jsxs("p",{children:["Empecé haciendo ejercicio por mi cuenta, viendo videos en YouTube, hasta que un día me topé con algo que cambiaría por completo mi forma de ver el entrenamiento: la calistenia. Vi personas entrenando solo con su",d?"":`...
`,C.jsx("span",{className:"text-fk-yellow font-bold cursor-pointer",onClick:()=>h(!d),children:d?"":"Ver mas..."})," ",d?`peso corporal, con físicos impresionantes y realizando
                movimientos que parecían imposibles. En ese instante supe que yo
                quería lograr eso, aunque no tenía idea de por dónde empezar.
                Así que hice lo único que sabía hacer: aprender.`:""]}),C.jsxs("div",{className:`${d?"":"hidden"}`,children:[C.jsx("div",{className:"grid grid-cols-2 gap-4",children:m.map((v,g)=>g<2&&C.jsx("img",{src:v,onClick:()=>p(v),alt:`Alexis Contreras ${g+1}`,className:"w-50 h-auto rounded-2xl border-2 border-white/10 mb-4 cursor-pointer"},g))}),C.jsxs("p",{children:["Me pasaba horas y horas viendo videos, buscando las mejores rutinas en casa, ejercicios, tutoriales, métodos y consejos. Sin darme cuenta, empecé a estudiar todos los días. YouTube se convirtió en mi escuela; leía ebooks, entraba a masterclass gratuitas y consumía cualquier información que me ayudara a mejorar. No lo sentía como una obligación, sino como un gusto, porque el deporte comenzaba a apasionarme de verdad. Todo giraba alrededor de una pregunta que no me dejaba en paz: ¿De verdad se puede conseguir un buen físico entrenando en casa?"," "]}),C.jsx("p",{children:"Yo no conocía a nadie que hubiera logrado un cambio físico notable sin gimnasio ni dieta estricta, así que mi intriga crecía cada día. Estudiar, probar, equivocarme y volver a intentar se volvió parte de mi rutina. Poco a poco, la calistenia dejó de ser solo ejercicio y se convirtió en algo a lo que le tomé un verdadero cariño. Con el paso del tiempo, comencé a mejorar: día a día, semana a semana, mes con mes. Sin darme cuenta, mis amigos, conocidos y familiares empezaron a notar mis avances. Comenzaron a preguntarme qué hacía, a pedirme consejos, rutinas y ayuda para iniciar en la calistenia o cambiar su físico. Ahí fue cuando entendí que, sin proponérmelo, ya estaba ayudando a otros."}),C.jsx("div",{className:"grid grid-cols-2 gap-4",children:m.map((v,g)=>g>=2&&g<4&&C.jsx("img",{src:v,onClick:()=>p(v),alt:`Alexis Contreras ${g+1}`,className:"w-50 h-auto rounded-2xl border-2 border-white/10 mb-4 cursor-pointer"},g))}),C.jsxs("p",{children:["Un día decidí subir un video a TikTok. Era un reto que había visto. Tuvo pocas vistas, pero me animó. Luego subí otro video de calistenia… y ese llegó a miles de vistas. Ahí nació una idea: compartir mi conocimiento y ayudar a más personas. Durante la pandemia, cuando había mucho tiempo libre, empecé a subir videos constantemente. Sin darme cuenta, las vistas y los seguidores aumentaban. Me llegaban mensajes de apoyo, preguntas y dudas sobre el deporte. Grabar, editar y pensar ideas despertó en mí una chispa de creatividad y libertad que me encantaba: podía combinar lo que sabía con algo que disfrutaba hacer, y sentía que eso podía abrirme muchas puertas."," "]}),C.jsx("p",{children:"Mientras todo eso pasaba, seguía entrenando y estudiando. Aunque amaba la calistenia, comencé a sentir que mi físico no estaba mejorando como yo quería. Empecé a pensar que, si quería ser entrenador, muchas personas me juzgarían más por mi físico que por mi conocimiento. Esa idea se volvió una limitante mental muy fuerte. Fue entonces cuando tomé una decisión difícil: dejar la calistenia y buscar un camino que me permitiera seguir creciendo. Ya conocía el gimnasio desde fuera. Había ido algunas veces y, además, amigos y conocidos me pedían rutinas de gimnasio. Y le veía más futuro para vivir de eso."}),C.jsx("div",{className:"grid grid-cols-2 gap-4",children:m.map((v,g)=>g>=4&&g<6&&C.jsx("img",{src:v,onClick:()=>p(v),alt:`Alexis Contreras ${g+1}`,className:"w-50 h-auto rounded-2xl border-2 border-white/10 mb-4 cursor-pointer"},g))}),C.jsx("p",{children:"Cuando entré de lleno al gym, fue como empezar desde cero. Me sentía nuevo, como si nunca hubiera entrenado. Pero mi objetivo era claro: mejorar mi físico. Así que entrenaba todos los días y volví a hacer lo que mejor sabía hacer: estudiar. Esta vez, todo sobre entrenamiento con pesas, hipertrofia y el funcionamiento del cuerpo humano. Con el tiempo, empecé a ver potencial en mí como entrenador. La gente seguía pidiéndome rutinas y consejos. Me certifiqué como entrenador, trabajé como coach en un gimnasio pequeño y ahí lo confirmé: esto era para mí."}),C.jsxs("p",{children:["Me di cuenta de cuánto hacía falta alguien que supiera instruir, entender a cada persona, adaptar entrenamientos a diferentes capacidades y aun así lograr cambios físicos reales. Hoy en día"," ",C.jsx("b",{className:"text-fk-yellow font-bold",children:"sigo estudiando, entrenando y mejorando lo más que puedo."})," ","Ya han pasado casi ocho años desde que decidí cambiar mi vida. Cuento con"," ",C.jsx("b",{className:"text-fk-yellow font-bold",children:"siete certificaciones"})," ","en diferentes áreas del fitness, actualmente estudio"," ",C.jsx("b",{className:"text-fk-yellow font-bold",children:"dos diplomados"}),", he visto miles de videos, leído incontables ebooks y tomado muchas masterclass gratuitas cuando no tenía dinero."]}),C.jsx("div",{className:"grid grid-cols-2 gap-4",children:m.map((v,g)=>g>=6&&g<8&&C.jsx("img",{src:v,onClick:()=>p(v),alt:`Alexis Contreras ${g+1}`,className:"w-50 h-auto rounded-2xl border-2 border-white/10 mb-4 cursor-pointer"},g))}),C.jsxs("p",{className:"font-bold",children:["Todo eso me permitió aprender a distinguir qué funciona y qué no. Llevo cuatro años ayudando a personas a cambiar su físico y su vida. Al final, solo soy un joven loco por aprender, mejorar, ayudar y compartir su conocimiento."," ",C.jsx("span",{className:"text-fk-yellow font-bold cursor-pointer",onClick:()=>h(!d),children:d?"Ver menos...":""})]})]})]}),C.jsxs("div",{className:"grid grid-cols-3 gap-8 border-y border-white/10 py-8 mb-10",children:[C.jsxs("div",{className:"text-center group cursor-pointer",onClick:()=>window.open("https://www.instagram.com/alexiscontreras.fk","_blank"),children:[C.jsx(ty,{className:"w-8 h-8 text-white group-hover:text-fk-yellow transition-colors mx-auto mb-3"}),C.jsx("div",{className:"text-3xl font-bebas text-white",children:"11.5k"}),C.jsx("div",{className:"text-[10px] md:text-xs text-gray-500 uppercase tracking-widest font-montserrat",children:"Seguidores"})]}),C.jsxs("div",{className:"text-center border-l border-white/10 group cursor-pointer",onClick:()=>window.open("https://www.instagram.com/alexiscontreras.fk","_blank"),children:[C.jsx(R_,{className:"w-8 h-8 text-white group-hover:text-fk-yellow transition-colors mx-auto mb-3"}),C.jsx("div",{className:"text-3xl font-bebas text-white",children:"636"}),C.jsx("div",{className:"text-[10px] md:text-xs text-gray-500 uppercase tracking-widest font-montserrat",children:"Posts"})]}),C.jsxs("div",{className:"text-center border-l border-white/10 group cursor-pointer",onClick:()=>window.open("https://www.instagram.com/alexiscontreras.fk","_blank"),children:[C.jsx(C_,{className:"w-8 h-8 text-white group-hover:text-fk-yellow transition-colors mx-auto mb-3"}),C.jsx("div",{className:"text-3xl font-bebas text-white",children:"FK"}),C.jsx("div",{className:"text-[10px] md:text-xs text-gray-500 uppercase tracking-widest font-montserrat",children:"Comunidad"})]})]}),C.jsx("a",{href:"#testimonials",className:"inline-block text-fk-yellow border-b border-fk-yellow pb-1 hover:text-white hover:border-white transition-all duration-300 font-bebas text-xl tracking-wide",children:"VER TESTIMONIOS REALES"})]})]})}),o&&C.jsx("style",{children:`
          body {
            overflow: hidden !important;
          }
        `}),C.jsxs("dialog",{className:o?"fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 p-4 rounded-2xl w-full h-screen z-999 flex items-center justify-center":"hidden",open:o,children:[C.jsx("img",{src:i,alt:"Selected",className:"max-w-full max-h-full object-contain"}),C.jsx("button",{onClick:()=>t(!1),className:"absolute top-4 right-4 text-white text-3xl leading-none",children:"×"})]})]})},cy=()=>{const[o,t]=_n.useState(!1),[i,s]=_n.useState(""),l=["./alex/c1.jpeg","./alex/c2.jpeg","./alex/c3.jpeg","./alex/c4.jpeg","./alex/c5.jpeg","./alex/c6.jpeg","./alex/c7.jpeg"],u=d=>{s(d),t(!0)};return C.jsxs(C.Fragment,{children:[C.jsx("div",{className:"grid grid-cols-4 gap-4",children:l.map((d,h)=>h<7&&C.jsx("img",{src:d,onClick:()=>u(d),alt:`Certificado de Alexis Contreras ${h+1}`,className:"w-50 h-auto rounded-2xl border-2 border-white/10 mb-4 cursor-pointer"},h))}),o&&C.jsx("style",{children:`
          body {
            overflow: hidden !important;
          }
        `}),C.jsxs("dialog",{className:o?"fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 p-4 rounded-2xl w-full h-screen z-999 flex items-center justify-center":"hidden",open:o,children:[C.jsx("img",{src:i,alt:"Selected",className:"max-w-full max-h-full object-contain"}),C.jsx("button",{onClick:()=>t(!1),className:"absolute top-4 right-4 text-white text-3xl leading-none",children:"×"})]})]})},uy=()=>C.jsx("footer",{className:"bg-black/90 backdrop-blur-md border-t border-white/10 pt-16 pb-8 relative z-10",children:C.jsxs("div",{className:"max-w-7xl mx-auto px-4 flex flex-col items-center text-center",children:[C.jsx("div",{className:"mb-8",children:C.jsx("img",{src:"/logo.svg",alt:"Full Kong",className:"h-16 w-auto mx-auto opacity-80 hover:opacity-100 transition-opacity"})}),C.jsxs("div",{className:"flex gap-8 mb-12",children:[C.jsx("a",{onClick:()=>window.open("https://wa.me/5213323289221","_blank"),className:"text-gray-400 hover:text-[#0ea400] transition-colors transform hover:scale-110 duration-300",children:C.jsx(kS,{className:"w-8 h-8"})}),C.jsx("a",{onClick:()=>window.open("https://www.instagram.com/alexiscontreras.fk","_blank"),className:"text-gray-400 hover:text-[#E1306C] transition-colors transform hover:scale-110 duration-300",children:C.jsx(C_,{className:"w-8 h-8"})}),C.jsx("a",{onClick:()=>window.open("https://www.youtube.com/@alexisfitnessfk","_blank"),className:"text-gray-400 hover:text-[#FF0000] transition-colors transform hover:scale-110 duration-300",children:C.jsx(ry,{className:"w-8 h-8"})}),C.jsx("a",{onClick:()=>window.open("https://www.tiktok.com/@alexis_sw_fk","_blank"),className:"text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300",children:C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-8 h-8",children:C.jsx("path",{d:"M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"})})})]}),C.jsxs("div",{className:"flex flex-wrap justify-center gap-8 text-sm text-gray-500 font-montserrat uppercase tracking-wider mb-8",children:[C.jsx("a",{href:"#home",className:"hover:text-fk-yellow transition-colors",children:"Inicio"}),C.jsx("a",{href:"#benefits",className:"hover:text-fk-yellow transition-colors",children:"Filosofía"}),C.jsx("a",{href:"#coach",className:"hover:text-fk-yellow transition-colors",children:"Coach"}),C.jsx("a",{href:"#pricing",className:"hover:text-fk-yellow transition-colors",children:"Planes"})]}),C.jsxs("div",{className:"text-gray-600 text-xs font-montserrat",children:["© ",new Date().getFullYear()," FULL KONG. TODOS LOS DERECHOS RESERVADOS."]})]})}),fy=()=>{const[o,t]=_n.useState(!1);return C.jsxs("nav",{className:"fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10",children:[C.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:C.jsxs("div",{className:"flex items-center justify-between h-20",children:[C.jsx("div",{className:"shrink-0",children:C.jsx("img",{src:"/logo.svg",alt:"Full Kong",className:"h-12 w-auto hover:opacity-90 transition-opacity duration-300"})}),C.jsx("div",{className:"hidden md:block",children:C.jsxs("div",{className:"ml-10 flex items-baseline space-x-8",children:[C.jsx("a",{href:"#home",className:"text-white hover:text-fk-yellow transition-colors px-3 py-2 text-sm font-bold uppercase tracking-wide font-montserrat",children:"Inicio"}),C.jsx("a",{href:"#benefits",className:"text-white hover:text-fk-yellow transition-colors px-3 py-2 text-sm font-bold uppercase tracking-wide font-montserrat",children:"Filosofía"}),C.jsx("a",{href:"#coach",className:"text-white hover:text-fk-yellow transition-colors px-3 py-2 text-sm font-bold uppercase tracking-wide font-montserrat",children:"Coach"}),C.jsx("a",{href:"#pricing",className:"bg-fk-yellow text-black hover:bg-white transition-colors px-6 py-2 text-sm font-bold uppercase tracking-wide transform hover:-translate-y-0.5 duration-200 font-montserrat",children:"Empezar Ahora"})]})}),C.jsx("div",{className:"md:hidden",children:C.jsx("button",{onClick:()=>t(!o),className:"text-white hover:text-fk-yellow transition-colors p-2",children:o?C.jsx(ay,{size:28}):C.jsx(GS,{size:28})})})]})}),o&&C.jsx("div",{className:"md:hidden bg-black/95 border-b border-white/10 absolute w-full",children:C.jsxs("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center",children:[C.jsx("a",{href:"#home",className:"text-white hover:text-fk-yellow block px-3 py-4 text-base font-bold uppercase tracking-wide font-montserrat w-full text-center",onClick:()=>t(!1),children:"Inicio"}),C.jsx("a",{href:"#benefits",className:"text-white hover:text-fk-yellow block px-3 py-4 text-base font-bold uppercase tracking-wide font-montserrat w-full text-center",onClick:()=>t(!1),children:"Filosofía"}),C.jsx("a",{href:"#coach",className:"text-white hover:text-fk-yellow block px-3 py-4 text-base font-bold uppercase tracking-wide font-montserrat w-full text-center",onClick:()=>t(!1),children:"Coach"}),C.jsx("a",{href:"#pricing",className:"text-fk-yellow hover:text-white block px-3 py-4 text-base font-bold uppercase tracking-wide font-montserrat w-full text-center",onClick:()=>t(!1),children:"Empezar Ahora"})]})})]})},dy=()=>{const[o,t]=_n.useState(!1);return C.jsxs("section",{id:"home",className:"relative min-h-screen flex items-center justify-center pt-20 overflow-hidden",children:[C.jsxs("div",{className:"relative z-10 text-center px-4 w-full max-w-5xl mx-auto mt-0 md:mt-16",children:[C.jsx("p",{className:"text-fk-yellow font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase mb-4 text-sm md:text-base animate-fade-in-up font-montserrat",children:"CONSTRUYE TU MEJOR VERSIÓN"}),C.jsx("h1",{className:"text-5xl sm:text-7xl md:text-9xl font-bebas text-white leading-[0.9] mb-6 tracking-tight",children:"ENTRENAMIENTO"}),C.jsx("h1",{className:"text-5xl sm:text-7xl md:text-9xl font-bebas text-white leading-[0.9] mb-6 tracking-tight",children:C.jsx("span",{className:"text-black bg-fk-yellow px-2",children:"INTELIGENTE"})}),C.jsx("p",{className:"text-gray-300 text-xl md:text-3xl max-w-2xl md:max-w-4xl mx-auto mb-12 md:mb-16 font-light leading-relaxed px-4 animate-fade-in-up [animation-delay:400ms] font-montserrat",children:"La disciplina te pone en el camino, el esfuerzo te mantiene y el proceso te transforma."}),C.jsxs("div",{className:"flex flex-col gap-6 justify-center items-center w-full px-4 sm:px-0 animate-fade-in-up [animation-delay:600ms]",children:[C.jsx("a",{onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),className:"w-full sm:w-auto px-10 py-5 border border-white/30 hover:border-fk-yellow hover:text-fk-yellow text-white font-bebas text-2xl tracking-wider transition-all duration-300 backdrop-blur-sm text-center cursor-pointer",children:"CONOCER MÁS"}),C.jsx("svg",{onClick:()=>window.location.href="#benefits",className:"w-6 h-6 text-fk-yellow animate-bounce cursor-pointer",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 14l-7 7m0 0l-7-7m7 7V3"})})]})]}),C.jsx("dialog",{open:o,className:"fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-black/50 backdrop-blur-sm border border-fk-yellow rounded-lg shadow-2xl p-6 max-w-md w-11/12 text-fk-yellow",children:"Para mí, el entrenamiento es un punto de quiebre. Es el momento en el que te das cuenta de que puedes llegar tan lejos como estés dispuesto a esforzarte. El gimnasio no solo transforma el cuerpo, también te enseña disciplina, constancia y a confiar en tu proceso. Entrenar bien no es improvisar: es entender que el progreso es una ciencia, con estrategia, objetivos claros y trabajo diario. Así fue como entendí que puedo lograr lo que me proponga."})]})},hy=()=>{const[o,t]=_n.useState({columns:4,numbs:4}),i=[{icon:C.jsx(FS,{className:"w-12 h-12 text-black"}),title:"Entrenamiento inteligente",description:"Entrenamiento basado en ciencia, no en modas. Resultados medibles y progresivos."},{icon:C.jsx(OS,{className:"w-12 h-12 text-black"}),title:"Nutricion estrategica",description:"Desarrolla una disciplina inquebrantable que trascenderá del gimnasio a tu vida."},{icon:C.jsx(ZS,{className:"w-12 h-12 text-black"}),title:"Apps Exclusivas",description:"Acceso a herramientas digitales premium para gestionar tu progreso sin fricción."},{icon:C.jsx(US,{className:"w-12 h-12 text-black"}),title:"Seguimiento 24/7",description:"Monitoreo constante de tus métricas para ajustar el plan en tiempo real."},{icon:C.jsx(R_,{className:"w-12 h-12 text-black"}),title:"Evaluación Inicial y mensual",description:"Análisis completo de tu estado físico para diseñar un plan personalizado y medir tu evolución constantemente."},{icon:C.jsx($S,{className:"w-12 h-12 text-black"}),title:"Corrección de la técnica de ejercicios",description:"Supervisión profesional para ejecutar cada movimiento con precisión y maximizar resultados mientras evitas lesiones."},{icon:C.jsx(wg,{className:"w-12 h-12 text-black"}),title:"Clases de entrenamiento (videos exclusivos)",description:"Biblioteca privada de sesiones guiadas por expertos que puedes seguir en cualquier momento y lugar."},{icon:C.jsx(XS,{className:"w-12 h-12 text-black"}),title:"Guía de suplementación",description:"Recomendaciones personalizadas de suplementos basadas en tus objetivos y necesidades específicas."},{icon:C.jsx(wg,{className:"w-12 h-12 text-black"}),title:"Reunión online (vídeo llamadas)",description:"Consultas periódicas en vivo con tu coach para resolver dudas, ajustar tu plan y mantenerte motivado."}];return C.jsx("section",{id:"benefits",className:"py-24 relative z-10",children:C.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[C.jsxs("div",{className:"text-center mb-16",children:[C.jsx("p",{className:"text-fk-yellow font-bold tracking-[0.2em] uppercase mb-4 animate-fade-in-up font-montserrat",children:"¿POR QUÉ FULL KONG?"}),C.jsxs("h2",{className:"text-5xl md:text-7xl font-bebas text-white mb-6 animate-fade-in-up [animation-delay:200ms]",children:["CONOCE LOS ",C.jsx("span",{className:"text-fk-yellow",children:"BENEFICIOS"})]})]}),C.jsx("div",{className:"grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-2",children:i.map((s,l)=>{if(l<o.numbs)return C.jsxs("div",{className:"group bg-zinc-900/50 backdrop-blur-sm border border-white/10 p-8 hover:border-fk-yellow transition-all duration-300 hover:-translate-y-2 animate-fade-in-up",style:{animationDelay:`${(l+2)*200}ms`},children:[C.jsx("div",{className:"bg-fk-yellow p-4 inline-block rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300",children:s.icon}),C.jsx("h3",{className:"text-2xl font-bebas text-white mb-4 tracking-wide",children:s.title}),C.jsx("p",{className:"text-gray-400 font-montserrat leading-relaxed",children:s.description})]},l)})}),C.jsx("div",{className:"mt-16 text-center animate-fade-in-up [animation-delay:1000ms]",children:C.jsx("button",{className:"px-8 py-4 border border-fk-yellow text-fk-yellow hover:bg-fk-yellow hover:text-black font-bebas text-xl tracking-wider transition-all duration-300",onClick:()=>{o.numbs>4?t({columns:5,numbs:4}):t({columns:5,numbs:10})},children:`VER LA LISTA ${o.numbs===10?"SIMPLIFICADA":"COMPLETA"} DE BENEFICIOS`})})]})})},py=()=>{const[o,t]=_n.useState(!1);return C.jsxs("section",{id:"pricing",className:"py-24 relative z-10 bg-black/50 backdrop-blur-sm",children:[C.jsx("div",{className:"absolute inset-0 opacity-10 pointer-events-none",style:{backgroundImage:"radial-gradient(#333 1px, transparent 1px)",backgroundSize:"30px 30px"}}),C.jsxs("div",{className:"max-w-7xl mx-auto px-4 relative z-10",children:[C.jsxs("div",{className:"text-center mb-12",children:[C.jsx("p",{className:"text-fk-yellow font-bold tracking-[0.2em] uppercase mb-4 animate-fade-in-up font-montserrat",children:"INVIERTE EN TI"}),C.jsxs("h2",{className:"text-5xl md:text-7xl mb-8 font-bebas text-white animate-fade-in-up [animation-delay:200ms]",children:["PLANES DE ",C.jsx("span",{className:"text-fk-yellow",children:"TRANSFORMACIÓN"})]}),C.jsx("div",{className:"flex justify-center animate-fade-in-up [animation-delay:300ms]",children:C.jsxs("div",{className:"bg-zinc-900/80 p-1.5 rounded-full border border-white/10 flex relative shadow-lg shadow-black/50",children:[C.jsx("button",{onClick:()=>t(!1),className:`px-8 py-3 rounded-full font-bebas text-xl tracking-wide transition-all duration-300 ${o?"text-gray-400 hover:text-white":"bg-fk-yellow text-black shadow-lg scale-105"}`,children:"SOLO ENTRENAMIENTO"}),C.jsx("button",{onClick:()=>t(!0),className:`px-8 py-3 rounded-full font-bebas text-xl tracking-wide transition-all duration-300 ${o?"bg-fk-yellow text-black shadow-lg scale-105":"text-gray-400 hover:text-white"}`,children:"+ NUTRICIÓN"})]})})]}),C.jsx("div",{className:"flex justify-center max-w-5xl mx-auto min-h-150 items-start",children:o?C.jsxs("div",{className:"grid md:grid-cols-2 gap-8 w-full animate-fade-in-up [animation-delay:400ms]",children:[C.jsxs("div",{className:"bg-zinc-900/80 p-8 border border-white/10 hover:border-fk-yellow transition-all duration-500 group hover:shadow-[0_0_30px_rgba(255,230,0,0.05)]",children:[C.jsx("h3",{className:"text-3xl font-bebas text-white mb-2 tracking-wide",children:"BÁSICO"}),C.jsxs("div",{className:"space-y-4 mb-8",children:[C.jsxs("div",{children:[C.jsxs("div",{className:"flex items-center gap-2",children:[C.jsx("span",{className:"text-5xl font-black text-white font-bebas",children:"$36.00"}),C.jsx("span",{className:"text-lg text-gray-500 font-bold font-montserrat",children:"USD"})]}),C.jsx("p",{className:"text-gray-400 font-montserrat text-xs",children:"($647.21 MXN) / 4 semanas"})]}),C.jsxs("div",{children:[C.jsxs("div",{className:"flex items-center gap-2",children:[C.jsx("span",{className:"text-gray-500 line-through font-bebas text-lg",children:"$108.00"}),C.jsx("span",{className:"text-5xl font-black text-white font-bebas",children:"$86.40"}),C.jsx("span",{className:"text-lg text-gray-500 font-bold font-montserrat",children:"USD"})]}),C.jsx("p",{className:"text-gray-400 font-montserrat text-xs",children:"($1553.31 MXN) / 12 semanas"})]})]}),C.jsxs("ul",{className:"space-y-4 mb-10",children:[C.jsxs("li",{className:"flex items-center text-gray-300 font-montserrat",children:[C.jsx(Mi,{className:"w-5 h-5 text-fk-yellow mr-3 shrink-0"}),C.jsx("span",{children:"Rutina Personalizada"})]}),C.jsxs("li",{className:"flex items-center text-gray-300 font-montserrat",children:[C.jsx(Mi,{className:"w-5 h-5 text-fk-yellow mr-3 shrink-0"}),C.jsx("span",{children:"Dieta Personalizada"})]}),C.jsxs("li",{className:"flex items-center text-gray-300 font-montserrat",children:[C.jsx(Mi,{className:"w-5 h-5 text-fk-yellow mr-3 shrink-0"}),C.jsx("span",{children:"Evaluación Inicial + Mensual"})]}),C.jsxs("li",{className:"flex items-center text-gray-300 font-montserrat",children:[C.jsx(Mi,{className:"w-5 h-5 text-fk-yellow mr-3 shrink-0"}),C.jsx("span",{children:"Corrección de la Técnica"})]}),C.jsxs("li",{className:"flex items-center text-gray-300 font-montserrat",children:[C.jsx(Mi,{className:"w-5 h-5 text-fk-yellow mr-3 shrink-0"}),C.jsx("span",{children:"Seguimiento vía WhatsApp"})]}),C.jsxs("li",{className:"flex items-center text-gray-500 font-montserrat line-through decoration-gray-500 opacity-50",children:[C.jsx(Mi,{className:"w-5 h-5 text-gray-700 mr-3 shrink-0"}),C.jsx("span",{children:"App de entrenamiento"})]})]}),C.jsx("button",{className:"w-full py-4 border border-white/30 text-white font-bebas text-xl tracking-wider uppercase hover:bg-white hover:text-black hover:border-white transition-all duration-300",children:"MÁS INFORMACIÓN"})]}),C.jsxs("div",{className:"bg-zinc-900/90 p-8 border-2 border-fk-yellow relative shadow-[0_0_30px_rgba(255,230,0,0.1)] transition-all duration-500 transform md:-translate-y-4",children:[C.jsx("div",{className:"absolute top-0 right-0 bg-fk-yellow text-black text-xs font-bold px-4 py-1 uppercase font-montserrat tracking-widest",children:"Más Completo"}),C.jsx("h3",{className:"text-3xl font-bebas text-fk-yellow mb-2 tracking-wide",children:"PREMIUM"}),C.jsxs("div",{className:"space-y-4 mb-8",children:[C.jsxs("div",{children:[C.jsxs("div",{className:"flex items-center gap-2",children:[C.jsx("span",{className:"text-5xl font-black text-white font-bebas",children:"$55.00"}),C.jsx("span",{className:"text-lg text-gray-500 font-bold font-montserrat",children:"USD"})]}),C.jsx("p",{className:"text-gray-400 font-montserrat text-xs",children:"($988.80 MXN) / 4 semanas"})]}),C.jsxs("div",{children:[C.jsxs("div",{className:"flex items-center gap-2",children:[C.jsx("span",{className:"text-gray-500 line-through font-bebas text-lg",children:"$165.00"}),C.jsx("span",{className:"text-5xl font-black text-white font-bebas",children:"$132.00"}),C.jsx("span",{className:"text-lg text-gray-500 font-bold font-montserrat",children:"USD"})]}),C.jsx("p",{className:"text-gray-400 font-montserrat text-xs",children:"($2373.11 MXN) / 12 semanas"})]})]}),C.jsxs("ul",{className:"space-y-4 mb-10",children:[C.jsxs("li",{className:"flex items-center text-white font-montserrat font-medium",children:[C.jsx(bi,{className:"w-5 h-5 text-fk-yellow mr-3 fill-current shrink-0"}),C.jsx("span",{children:"Todos los beneficios del Plan Básico"})]}),C.jsxs("li",{className:"flex items-center text-white font-montserrat font-medium",children:[C.jsx(bi,{className:"w-5 h-5 text-fk-yellow mr-3 fill-current shrink-0"}),C.jsx("span",{children:"Aplicación de Nutrición y Entrenamiento"})]}),C.jsxs("li",{className:"flex items-center text-white font-montserrat font-medium",children:[C.jsx(bi,{className:"w-5 h-5 text-fk-yellow mr-3 fill-current shrink-0"}),C.jsx("span",{children:"Guía de Suplementación"})]}),C.jsxs("li",{className:"flex items-center text-white font-montserrat font-medium",children:[C.jsx(bi,{className:"w-5 h-5 text-fk-yellow mr-3 fill-current shrink-0"}),C.jsx("span",{children:"Reunión Online"})]}),C.jsxs("li",{className:"flex items-center text-white font-montserrat font-medium",children:[C.jsx(bi,{className:"w-5 h-5 text-fk-yellow mr-3 fill-current shrink-0"}),C.jsx("span",{children:"Contenido Exclusivo"})]}),C.jsxs("li",{className:"flex items-center text-white font-montserrat font-medium",children:[C.jsx(bi,{className:"w-5 h-5 text-fk-yellow mr-3 fill-current shrink-0"}),C.jsx("span",{children:"Más personalización y seguimiento"})]})]}),C.jsx("button",{className:"w-full py-4 bg-fk-yellow text-black font-bebas text-xl tracking-wider uppercase hover:bg-white hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-fk-yellow/20",children:"MÁS INFORMACIÓN"})]})]}):C.jsxs("div",{className:"grid md:grid-cols-2 gap-8 w-full animate-fade-in-up [animation-delay:400ms]",children:[C.jsxs("div",{className:"bg-zinc-900/80 p-8 border border-white/10 hover:border-fk-yellow transition-all duration-500 group hover:shadow-[0_0_30px_rgba(255,230,0,0.05)]",children:[C.jsx("h3",{className:"text-3xl font-bebas text-white mb-2 tracking-wide",children:"BÁSICO"}),C.jsxs("div",{className:"space-y-4 mb-8",children:[C.jsxs("div",{children:[C.jsxs("div",{className:"flex items-center gap-2",children:[C.jsx("span",{className:"text-5xl font-black text-white font-bebas",children:"$24.00"}),C.jsx("span",{className:"text-lg text-gray-500 font-bold font-montserrat",children:"USD"})]}),C.jsx("p",{className:"text-gray-400 font-montserrat text-xs",children:"($431.47 MXN) / 4 semanas"})]}),C.jsxs("div",{children:[C.jsxs("div",{className:"flex items-center gap-2",children:[C.jsx("span",{className:"text-gray-500 line-through font-bebas text-lg",children:"$72.00"}),C.jsx("span",{className:"text-5xl font-black text-white font-bebas",children:"$57.60"}),C.jsx("span",{className:"text-lg text-gray-500 font-bold font-montserrat",children:"USD"})]}),C.jsx("p",{className:"text-gray-400 font-montserrat text-xs",children:"($1035.54 MXN) / 12 semanas"})]})]}),C.jsxs("ul",{className:"space-y-4 mb-10",children:[C.jsxs("li",{className:"flex items-center text-gray-300 font-montserrat",children:[C.jsx(Mi,{className:"w-5 h-5 text-fk-yellow mr-3 shrink-0"}),C.jsx("span",{children:"Rutina personalizada"})]}),C.jsxs("li",{className:"flex items-center text-gray-300 font-montserrat",children:[C.jsx(Mi,{className:"w-5 h-5 text-fk-yellow mr-3 shrink-0"}),C.jsx("span",{children:"Evaluacion inicial y mensual"})]}),C.jsxs("li",{className:"flex items-center text-gray-300 font-montserrat",children:[C.jsx(Mi,{className:"w-5 h-5 text-fk-yellow mr-3 shrink-0"}),C.jsx("span",{children:"Correccion de la tecnica"})]}),C.jsxs("li",{className:"flex items-center text-gray-300 font-montserrat",children:[C.jsx(Mi,{className:"w-5 h-5 text-fk-yellow mr-3 shrink-0"}),C.jsx("span",{children:"Seguimiento via WhatsApp"})]}),C.jsxs("li",{className:"flex items-center text-gray-500 font-montserrat line-through decoration-gray-500 opacity-50",children:[C.jsx(Mi,{className:"w-5 h-5 text-gray-700 mr-3 shrink-0"}),C.jsx("span",{children:"App de entrenamiento"})]})]}),C.jsx("button",{onClick:()=>window.open("https://wa.me/5213323289221","_blank"),className:"w-full py-4 border border-white/30 text-white font-bebas text-xl tracking-wider uppercase hover:bg-white hover:text-black hover:border-white transition-all duration-300",children:"MÁS INFORMACIÓN"})]}),C.jsxs("div",{className:"bg-zinc-900/90 p-8 border-2 border-fk-yellow relative shadow-[0_0_30px_rgba(255,230,0,0.1)] transition-all duration-500 transform md:-translate-y-4",children:[C.jsx("div",{className:"absolute top-0 right-0 bg-fk-yellow text-black text-xs font-bold px-4 py-1 uppercase font-montserrat tracking-widest",children:"Recomendado"}),C.jsx("h3",{className:"text-3xl font-bebas text-fk-yellow mb-2 tracking-wide",children:"PREMIUM"}),C.jsxs("div",{className:"space-y-4 mb-8",children:[C.jsxs("div",{children:[C.jsxs("div",{className:"flex items-center gap-2",children:[C.jsx("span",{className:"text-5xl font-black text-white font-bebas",children:"$33.00"}),C.jsx("span",{className:"text-lg text-gray-500 font-bold font-montserrat",children:"USD"})]}),C.jsx("p",{className:"text-gray-400 font-montserrat text-xs",children:"($604.82 MXN) / 4-5 semanas"})]}),C.jsxs("div",{children:[C.jsxs("div",{className:"flex items-center gap-2",children:[C.jsx("span",{className:"text-gray-500 line-through font-bebas text-lg",children:"$99.00"}),C.jsx("span",{className:"text-5xl font-black text-white font-bebas",children:"$83.00"}),C.jsx("span",{className:"text-lg text-gray-500 font-bold font-montserrat",children:"USD"})]}),C.jsx("p",{className:"text-gray-400 font-montserrat text-xs",children:"($1521.21 MXN) / 12-14 semanas"})]})]}),C.jsxs("ul",{className:"space-y-4 mb-10",children:[C.jsxs("li",{className:"flex items-center text-white font-montserrat font-medium",children:[C.jsx(bi,{className:"w-5 h-5 text-fk-yellow mr-3 fill-current shrink-0"}),C.jsx("span",{children:"Todo lo del Básico"})]}),C.jsxs("li",{className:"flex items-center text-white font-montserrat font-medium",children:[C.jsx(bi,{className:"w-5 h-5 text-fk-yellow mr-3 fill-current shrink-0"}),C.jsx("span",{children:"App de entrenamiento"})]}),C.jsxs("li",{className:"flex items-center text-white font-montserrat font-medium",children:[C.jsx(bi,{className:"w-5 h-5 text-fk-yellow mr-3 fill-current shrink-0"}),C.jsx("span",{children:"Reunion online"})]}),C.jsxs("li",{className:"flex items-center text-white font-montserrat font-medium",children:[C.jsx(bi,{className:"w-5 h-5 text-fk-yellow mr-3 fill-current shrink-0"}),C.jsx("span",{children:"Contenido exclusivo"})]}),C.jsxs("li",{className:"flex items-center text-white font-montserrat font-medium",children:[C.jsx(bi,{className:"w-5 h-5 text-fk-yellow mr-3 fill-current shrink-0"}),C.jsxs("span",{children:[C.jsx("span",{className:"text-xl",children:"+"})," Personalizacion y seguimiento constante"]})]})]}),C.jsx("button",{onClick:()=>window.open("https://wa.me/5213323289221","_blank"),className:"w-full py-4 bg-fk-yellow text-black font-bebas text-xl tracking-wider uppercase hover:bg-white hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-fk-yellow/20",children:"MÁS INFORMACIÓN"})]})]})})]})]})},my=()=>{const o=[{name:"Jonathan",content:"Antes de entrenar con Alexis sentía que hacía mucho esfuerzo y veía pocos resultados. Con su plan entendí cómo entrenar de verdad y cómo comer para rendir mejor. No solo mejoré físicamente, también aprendí a escuchar mi cuerpo y a entrenar con un objetivo claro.",image:"./alex/t1.jpeg"},{name:"Donovan",content:"COUCH, no me salen las palabras para decirte lo agradecido que estoy contigo, de verdad llevo 1 año y medio entrenando contigo y el cambio a sido una volada de cabeza, de 82 KG baje hasta 72 KG en un periodo corto de tiempo y de verdad estoy extremadamente agradecido por el físico que me has ayudado a construir de verdad muchas gracias porque sin ti este físico no se hubiera logrado, sin duda alguna tu asesoría fue lo mejor que pude adquirir, increíblemente feliz por los resultados que e obtenido ¡GRACIAS! seguiré esforzándome",image:"./alex/t2.jpeg"},{name:"Angela",content:"Super contenta con los resultados de estos últimos 6 meses, llevaba ya dos años entrenando pero desde que empecé con tus asesorías incrementó mucho mi fuerza, dejé de estar estancada con los mismos y empecé a notar muy buenos resultados. También muy agradecida con tu paciencia y disposición de siempre explicarme y ayudarme en cualquier duda que me surge, el mejor coach",image:"./alex/t3.jpeg"},{name:"Yael",content:"Alexis ya llevas casi 2 años siendo mi coach y la neta quiero darte las gracias, ya que has sido parte fundamental de este proceso. Aplico todas las técnicas que me has instruido , me has puesto mis rutinas de acuerdo a mis objetivos. He tenido bastantes cambios desde que me entrenas, antes estaba más flaco y ni siquiera tenía nada de músculo, al igual que ya sé entrenar por mi propia cuenta, sé hacer los ejercicios. Al inicio pesaba menos de 60kg y hoy estoy sobre los 68kg, he ganado bastante masa muscular y la verdad me siento muy bien conmigo mismo.",image:"./alex/t4.jpeg"},{name:"Alvaro",content:"Llevo un año entrenando con Alexis y más allá de estar feliz con los resultados he continuado con él por el gusto que da trabajar en conjunto con alguien que se nota le apasiona su trabajo. Buenos resultados, atención personalizada y siempre al pendiente.",image:"./alex/t5.jpeg"},{name:"Zayra",content:"Tengo ya 3 meses con el plan de entrenamiento bajo la supervisión de el coach Alexis y la verdad el hizo que me encantara ir al gym, pero lo que mas me gustó fue cómo manejo mi dieta. Cada mes que pasa me gusta más y más las rutinas y plan nutricional que me pone ya que aunque llevo poco tiempo ya noto unos grandes cambios en mi. Cada día soy más fuerte y eso me motiva cada día. He bajado mucho de peso gracias a su asesoría , en total 7 kg en poco tiempo y cada día veo más cerca mi meta. Realmente me gusta mucho su asesoría, siempre atenta y constante, dando retros en todo momento para poder mejorar siempre y tiene una forma perfecta de hacerlo.",image:"./alex/t6.jpeg"}];return C.jsx("section",{id:"testimonials",className:"py-24 relative z-10",children:C.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[C.jsxs("div",{className:"text-center mb-16",children:[C.jsx("p",{className:"text-fk-yellow font-bold tracking-[0.2em] uppercase mb-4 animate-fade-in-up font-montserrat",children:"HISTORIAS DE ÉXITO"}),C.jsxs("h2",{className:"text-5xl md:text-7xl font-bebas text-white mb-6 animate-fade-in-up [animation-delay:200ms]",children:["TRANSFORMACIONES ",C.jsx("span",{className:"text-fk-yellow",children:"REALES"})]})]}),C.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:o.map((t,i)=>C.jsxs("div",{className:"bg-zinc-900/80 backdrop-blur-sm border border-white/10 p-8 relative hover:border-fk-yellow/50 transition-colors animate-fade-in-up",style:{animationDelay:`${(i+2)*200}ms`},children:[C.jsx(WS,{className:"absolute top-8 right-8 text-fk-yellow/20 w-12 h-12"}),C.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[C.jsx("img",{src:t.image,alt:t.name,className:"h-60 rounded-3xl object-cover border-2 border-fk-yellow"}),C.jsx("div",{className:"align-middle justify-center flex",children:C.jsx("h4",{className:"text-white font-bebas text-xl tracking-wide",children:t.name})})]}),C.jsx("div",{className:"flex gap-1 mb-4",children:[...Array(5)].map((s,l)=>C.jsx(QS,{className:"w-4 h-4 text-fk-yellow fill-current"},l))}),C.jsxs("p",{className:"text-gray-300 font-montserrat leading-relaxed italic",children:['"',t.content,'"']})]},i))})]})})};const wh="182",gy=0,Ng=1,_y=2,Dc=1,vy=2,Ho=3,ns=0,Xn=1,ha=2,ma=0,wr=1,Ud=2,Dg=3,Ug=4,xy=5,Cs=100,Sy=101,yy=102,My=103,by=104,Ey=200,Ty=201,Ay=202,Ry=203,Ld=204,Od=205,Cy=206,wy=207,Ny=208,Dy=209,Uy=210,Ly=211,Oy=212,Py=213,zy=214,Pd=0,zd=1,Fd=2,Dr=3,Id=4,Bd=5,Hd=6,Gd=7,w_=0,Fy=1,Iy=2,Hi=0,N_=1,D_=2,U_=3,L_=4,O_=5,P_=6,z_=7,F_=300,Us=301,Ur=302,Vd=303,kd=304,Hc=306,jd=1e3,pa=1001,Xd=1002,wn=1003,By=1004,lc=1005,Pn=1006,td=1007,Ns=1008,mi=1009,I_=1010,B_=1011,Vo=1012,Nh=1013,Vi=1014,Ii=1015,va=1016,Dh=1017,Uh=1018,ko=1020,H_=35902,G_=35899,V_=1021,k_=1022,Ci=1023,xa=1026,Ds=1027,j_=1028,Lh=1029,Lr=1030,Oh=1031,Ph=1033,Uc=33776,Lc=33777,Oc=33778,Pc=33779,qd=35840,Wd=35841,Yd=35842,Zd=35843,Kd=36196,Qd=37492,Jd=37496,$d=37488,eh=37489,th=37490,nh=37491,ih=37808,ah=37809,sh=37810,rh=37811,oh=37812,lh=37813,ch=37814,uh=37815,fh=37816,dh=37817,hh=37818,ph=37819,mh=37820,gh=37821,_h=36492,vh=36494,xh=36495,Sh=36283,yh=36284,Mh=36285,bh=36286,Hy=3200,Gy=0,Vy=1,es="",hi="srgb",Or="srgb-linear",Fc="linear",It="srgb",mr=7680,Lg=519,ky=512,jy=513,Xy=514,zh=515,qy=516,Wy=517,Fh=518,Yy=519,Og=35044,Pg="300 es",Bi=2e3,Ic=2001;function X_(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Bc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Zy(){const o=Bc("canvas");return o.style.display="block",o}const zg={};function Fg(...o){const t="THREE."+o.shift();console.log(t,...o)}function st(...o){const t="THREE."+o.shift();console.warn(t,...o)}function At(...o){const t="THREE."+o.shift();console.error(t,...o)}function jo(...o){const t=o.join(" ");t in zg||(zg[t]=!0,st(...o))}function Ky(o,t,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}class zr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,t);t.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nd=Math.PI/180,Eh=180/Math.PI;function qo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Ln[o&255]+Ln[o>>8&255]+Ln[o>>16&255]+Ln[o>>24&255]+"-"+Ln[t&255]+Ln[t>>8&255]+"-"+Ln[t>>16&15|64]+Ln[t>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]).toLowerCase()}function St(o,t,i){return Math.max(t,Math.min(i,o))}function Qy(o,t){return(o%t+t)%t}function id(o,t,i){return(1-i)*o+i*t}function Lo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function jn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Vt{constructor(t=0,i=0){Vt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=St(this.x,t.x,i.x),this.y=St(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=St(this.x,t,i),this.y=St(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(St(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,d=this.y-t.y;return this.x=u*s-d*l+t.x,this.y=u*l+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wo{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,d,h){let m=s[l+0],p=s[l+1],v=s[l+2],g=s[l+3],S=u[d+0],b=u[d+1],R=u[d+2],w=u[d+3];if(h<=0){t[i+0]=m,t[i+1]=p,t[i+2]=v,t[i+3]=g;return}if(h>=1){t[i+0]=S,t[i+1]=b,t[i+2]=R,t[i+3]=w;return}if(g!==w||m!==S||p!==b||v!==R){let y=m*S+p*b+v*R+g*w;y<0&&(S=-S,b=-b,R=-R,w=-w,y=-y);let x=1-h;if(y<.9995){const F=Math.acos(y),z=Math.sin(F);x=Math.sin(x*F)/z,h=Math.sin(h*F)/z,m=m*x+S*h,p=p*x+b*h,v=v*x+R*h,g=g*x+w*h}else{m=m*x+S*h,p=p*x+b*h,v=v*x+R*h,g=g*x+w*h;const F=1/Math.sqrt(m*m+p*p+v*v+g*g);m*=F,p*=F,v*=F,g*=F}}t[i]=m,t[i+1]=p,t[i+2]=v,t[i+3]=g}static multiplyQuaternionsFlat(t,i,s,l,u,d){const h=s[l],m=s[l+1],p=s[l+2],v=s[l+3],g=u[d],S=u[d+1],b=u[d+2],R=u[d+3];return t[i]=h*R+v*g+m*b-p*S,t[i+1]=m*R+v*S+p*g-h*b,t[i+2]=p*R+v*b+h*S-m*g,t[i+3]=v*R-h*g-m*S-p*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(s/2),v=h(l/2),g=h(u/2),S=m(s/2),b=m(l/2),R=m(u/2);switch(d){case"XYZ":this._x=S*v*g+p*b*R,this._y=p*b*g-S*v*R,this._z=p*v*R+S*b*g,this._w=p*v*g-S*b*R;break;case"YXZ":this._x=S*v*g+p*b*R,this._y=p*b*g-S*v*R,this._z=p*v*R-S*b*g,this._w=p*v*g+S*b*R;break;case"ZXY":this._x=S*v*g-p*b*R,this._y=p*b*g+S*v*R,this._z=p*v*R+S*b*g,this._w=p*v*g-S*b*R;break;case"ZYX":this._x=S*v*g-p*b*R,this._y=p*b*g+S*v*R,this._z=p*v*R-S*b*g,this._w=p*v*g+S*b*R;break;case"YZX":this._x=S*v*g+p*b*R,this._y=p*b*g+S*v*R,this._z=p*v*R-S*b*g,this._w=p*v*g-S*b*R;break;case"XZY":this._x=S*v*g-p*b*R,this._y=p*b*g-S*v*R,this._z=p*v*R+S*b*g,this._w=p*v*g+S*b*R;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],v=i[6],g=i[10],S=s+h+g;if(S>0){const b=.5/Math.sqrt(S+1);this._w=.25/b,this._x=(v-m)*b,this._y=(u-p)*b,this._z=(d-l)*b}else if(s>h&&s>g){const b=2*Math.sqrt(1+s-h-g);this._w=(v-m)/b,this._x=.25*b,this._y=(l+d)/b,this._z=(u+p)/b}else if(h>g){const b=2*Math.sqrt(1+h-s-g);this._w=(u-p)/b,this._x=(l+d)/b,this._y=.25*b,this._z=(m+v)/b}else{const b=2*Math.sqrt(1+g-s-h);this._w=(d-l)/b,this._x=(u+p)/b,this._y=(m+v)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(St(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,d=t._w,h=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+d*h+l*p-u*m,this._y=l*v+d*m+u*h-s*p,this._z=u*v+d*p+s*m-l*h,this._w=d*v-s*h-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,u=t._z,d=t._w,h=this.dot(t);h<0&&(s=-s,l=-l,u=-u,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(t=0,i=0,s=0){re.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Ig.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Ig.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,d=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*s),v=2*(h*i-u*l),g=2*(u*s-d*i);return this.x=i+m*p+d*g-h*v,this.y=s+m*v+h*p-u*g,this.z=l+m*g+u*v-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=St(this.x,t.x,i.x),this.y=St(this.y,t.y,i.y),this.z=St(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=St(this.x,t,i),this.y=St(this.y,t,i),this.z=St(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-s*m,this.z=s*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return ad.copy(this).projectOnVector(t),this.sub(ad)}reflect(t){return this.sub(ad.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(St(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ad=new re,Ig=new Wo;class ut{constructor(t,i,s,l,u,d,h,m,p){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,d,h,m,p)}set(t,i,s,l,u,d,h,m,p){const v=this.elements;return v[0]=t,v[1]=l,v[2]=h,v[3]=i,v[4]=u,v[5]=m,v[6]=s,v[7]=d,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],v=s[4],g=s[7],S=s[2],b=s[5],R=s[8],w=l[0],y=l[3],x=l[6],F=l[1],z=l[4],O=l[7],I=l[2],H=l[5],L=l[8];return u[0]=d*w+h*F+m*I,u[3]=d*y+h*z+m*H,u[6]=d*x+h*O+m*L,u[1]=p*w+v*F+g*I,u[4]=p*y+v*z+g*H,u[7]=p*x+v*O+g*L,u[2]=S*w+b*F+R*I,u[5]=S*y+b*z+R*H,u[8]=S*x+b*O+R*L,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],v=t[8];return i*d*v-i*h*p-s*u*v+s*h*m+l*u*p-l*d*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],v=t[8],g=v*d-h*p,S=h*m-v*u,b=p*u-d*m,R=i*g+s*S+l*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/R;return t[0]=g*w,t[1]=(l*p-v*s)*w,t[2]=(h*s-l*d)*w,t[3]=S*w,t[4]=(v*i-l*m)*w,t[5]=(l*u-h*i)*w,t[6]=b*w,t[7]=(s*m-p*i)*w,t[8]=(d*i-s*u)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(sd.makeScale(t,i)),this}rotate(t){return this.premultiply(sd.makeRotation(-t)),this}translate(t,i){return this.premultiply(sd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const sd=new ut,Bg=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hg=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jy(){const o={enabled:!0,workingColorSpace:Or,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===It&&(l.r=ga(l.r),l.g=ga(l.g),l.b=ga(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===It&&(l.r=Nr(l.r),l.g=Nr(l.g),l.b=Nr(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===es?Fc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return jo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return jo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Or]:{primaries:t,whitePoint:s,transfer:Fc,toXYZ:Bg,fromXYZ:Hg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:t,whitePoint:s,transfer:It,toXYZ:Bg,fromXYZ:Hg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),o}const bt=Jy();function ga(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Nr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let gr;class $y{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{gr===void 0&&(gr=Bc("canvas")),gr.width=t.width,gr.height=t.height;const l=gr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=gr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Bc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=ga(u[d]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ga(i[s]/255)*255):i[s]=ga(i[s]);return{data:i,width:t.width,height:t.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let eM=0;class Ih{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=qo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(rd(l[d].image)):u.push(rd(l[d]))}else u=rd(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function rd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?$y.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let tM=0;const od=new re;class Nn extends zr{constructor(t=Nn.DEFAULT_IMAGE,i=Nn.DEFAULT_MAPPING,s=pa,l=pa,u=Pn,d=Ns,h=Ci,m=mi,p=Nn.DEFAULT_ANISOTROPY,v=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=qo(),this.name="",this.source=new Ih(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(od).x}get height(){return this.source.getSize(od).y}get depth(){return this.source.getSize(od).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){st(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){st(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==F_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jd:t.x=t.x-Math.floor(t.x);break;case pa:t.x=t.x<0?0:1;break;case Xd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jd:t.y=t.y-Math.floor(t.y);break;case pa:t.y=t.y<0?0:1;break;case Xd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=F_;Nn.DEFAULT_ANISOTROPY=1;class nn{constructor(t=0,i=0,s=0,l=1){nn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const m=t.elements,p=m[0],v=m[4],g=m[8],S=m[1],b=m[5],R=m[9],w=m[2],y=m[6],x=m[10];if(Math.abs(v-S)<.01&&Math.abs(g-w)<.01&&Math.abs(R-y)<.01){if(Math.abs(v+S)<.1&&Math.abs(g+w)<.1&&Math.abs(R+y)<.1&&Math.abs(p+b+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const z=(p+1)/2,O=(b+1)/2,I=(x+1)/2,H=(v+S)/4,L=(g+w)/4,Z=(R+y)/4;return z>O&&z>I?z<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(z),l=H/s,u=L/s):O>I?O<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(O),s=H/l,u=Z/l):I<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(I),s=L/u,l=Z/u),this.set(s,l,u,i),this}let F=Math.sqrt((y-R)*(y-R)+(g-w)*(g-w)+(S-v)*(S-v));return Math.abs(F)<.001&&(F=1),this.x=(y-R)/F,this.y=(g-w)/F,this.z=(S-v)/F,this.w=Math.acos((p+b+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=St(this.x,t.x,i.x),this.y=St(this.y,t.y,i.y),this.z=St(this.z,t.z,i.z),this.w=St(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=St(this.x,t,i),this.y=St(this.y,t,i),this.z=St(this.z,t,i),this.w=St(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nM extends zr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new nn(0,0,t,i),this.scissorTest=!1,this.viewport=new nn(0,0,t,i);const l={width:t,height:i,depth:s.depth},u=new Nn(l);this.textures=[];const d=s.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Ih(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends nM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class q_ extends Nn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class iM extends Nn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yo{constructor(t=new re(1/0,1/0,1/0),i=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ei.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ei.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ei.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,Ei):Ei.fromBufferAttribute(u,d),Ei.applyMatrix4(t.matrixWorld),this.expandByPoint(Ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),cc.copy(s.boundingBox)),cc.applyMatrix4(t.matrixWorld),this.union(cc)}const l=t.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ei),Ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Oo),uc.subVectors(this.max,Oo),_r.subVectors(t.a,Oo),vr.subVectors(t.b,Oo),xr.subVectors(t.c,Oo),Ya.subVectors(vr,_r),Za.subVectors(xr,vr),ys.subVectors(_r,xr);let i=[0,-Ya.z,Ya.y,0,-Za.z,Za.y,0,-ys.z,ys.y,Ya.z,0,-Ya.x,Za.z,0,-Za.x,ys.z,0,-ys.x,-Ya.y,Ya.x,0,-Za.y,Za.x,0,-ys.y,ys.x,0];return!ld(i,_r,vr,xr,uc)||(i=[1,0,0,0,1,0,0,0,1],!ld(i,_r,vr,xr,uc))?!1:(fc.crossVectors(Ya,Za),i=[fc.x,fc.y,fc.z],ld(i,_r,vr,xr,uc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(la[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),la[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),la[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),la[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),la[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),la[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),la[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),la[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(la),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const la=[new re,new re,new re,new re,new re,new re,new re,new re],Ei=new re,cc=new Yo,_r=new re,vr=new re,xr=new re,Ya=new re,Za=new re,ys=new re,Oo=new re,uc=new re,fc=new re,Ms=new re;function ld(o,t,i,s,l){for(let u=0,d=o.length-3;u<=d;u+=3){Ms.fromArray(o,u);const h=l.x*Math.abs(Ms.x)+l.y*Math.abs(Ms.y)+l.z*Math.abs(Ms.z),m=t.dot(Ms),p=i.dot(Ms),v=s.dot(Ms);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>h)return!1}return!0}const aM=new Yo,Po=new re,cd=new re;class Gc{constructor(t=new re,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):aM.setFromPoints(t).getCenter(s);let l=0;for(let u=0,d=t.length;u<d;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Po.subVectors(t,this.center);const i=Po.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Po,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Po.copy(t.center).add(cd)),this.expandByPoint(Po.copy(t.center).sub(cd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ca=new re,ud=new re,dc=new re,Ka=new re,fd=new re,hc=new re,dd=new re;class W_{constructor(t=new re,i=new re(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ca)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ca.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ca.copy(this.origin).addScaledVector(this.direction,i),ca.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){ud.copy(t).add(i).multiplyScalar(.5),dc.copy(i).sub(t).normalize(),Ka.copy(this.origin).sub(ud);const u=t.distanceTo(i)*.5,d=-this.direction.dot(dc),h=Ka.dot(this.direction),m=-Ka.dot(dc),p=Ka.lengthSq(),v=Math.abs(1-d*d);let g,S,b,R;if(v>0)if(g=d*m-h,S=d*h-m,R=u*v,g>=0)if(S>=-R)if(S<=R){const w=1/v;g*=w,S*=w,b=g*(g+d*S+2*h)+S*(d*g+S+2*m)+p}else S=u,g=Math.max(0,-(d*S+h)),b=-g*g+S*(S+2*m)+p;else S=-u,g=Math.max(0,-(d*S+h)),b=-g*g+S*(S+2*m)+p;else S<=-R?(g=Math.max(0,-(-d*u+h)),S=g>0?-u:Math.min(Math.max(-u,-m),u),b=-g*g+S*(S+2*m)+p):S<=R?(g=0,S=Math.min(Math.max(-u,-m),u),b=S*(S+2*m)+p):(g=Math.max(0,-(d*u+h)),S=g>0?u:Math.min(Math.max(-u,-m),u),b=-g*g+S*(S+2*m)+p);else S=d>0?-u:u,g=Math.max(0,-(d*S+h)),b=-g*g+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(ud).addScaledVector(dc,S),b}intersectSphere(t,i){ca.subVectors(t.center,this.origin);const s=ca.dot(this.direction),l=ca.dot(ca)-s*s,u=t.radius*t.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,d,h,m;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,S=this.origin;return p>=0?(s=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(s=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),v>=0?(u=(t.min.y-S.y)*v,d=(t.max.y-S.y)*v):(u=(t.max.y-S.y)*v,d=(t.min.y-S.y)*v),s>d||u>l||((u>s||isNaN(s))&&(s=u),(d<l||isNaN(l))&&(l=d),g>=0?(h=(t.min.z-S.z)*g,m=(t.max.z-S.z)*g):(h=(t.max.z-S.z)*g,m=(t.min.z-S.z)*g),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ca)!==null}intersectTriangle(t,i,s,l,u){fd.subVectors(i,t),hc.subVectors(s,t),dd.crossVectors(fd,hc);let d=this.direction.dot(dd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ka.subVectors(this.origin,t);const m=h*this.direction.dot(hc.crossVectors(Ka,hc));if(m<0)return null;const p=h*this.direction.dot(fd.cross(Ka));if(p<0||m+p>d)return null;const v=-h*Ka.dot(dd);return v<0?null:this.at(v/d,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class an{constructor(t,i,s,l,u,d,h,m,p,v,g,S,b,R,w,y){an.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,d,h,m,p,v,g,S,b,R,w,y)}set(t,i,s,l,u,d,h,m,p,v,g,S,b,R,w,y){const x=this.elements;return x[0]=t,x[4]=i,x[8]=s,x[12]=l,x[1]=u,x[5]=d,x[9]=h,x[13]=m,x[2]=p,x[6]=v,x[10]=g,x[14]=S,x[3]=b,x[7]=R,x[11]=w,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new an().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Sr.setFromMatrixColumn(t,0).length(),u=1/Sr.setFromMatrixColumn(t,1).length(),d=1/Sr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(u),g=Math.sin(u);if(t.order==="XYZ"){const S=d*v,b=d*g,R=h*v,w=h*g;i[0]=m*v,i[4]=-m*g,i[8]=p,i[1]=b+R*p,i[5]=S-w*p,i[9]=-h*m,i[2]=w-S*p,i[6]=R+b*p,i[10]=d*m}else if(t.order==="YXZ"){const S=m*v,b=m*g,R=p*v,w=p*g;i[0]=S+w*h,i[4]=R*h-b,i[8]=d*p,i[1]=d*g,i[5]=d*v,i[9]=-h,i[2]=b*h-R,i[6]=w+S*h,i[10]=d*m}else if(t.order==="ZXY"){const S=m*v,b=m*g,R=p*v,w=p*g;i[0]=S-w*h,i[4]=-d*g,i[8]=R+b*h,i[1]=b+R*h,i[5]=d*v,i[9]=w-S*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const S=d*v,b=d*g,R=h*v,w=h*g;i[0]=m*v,i[4]=R*p-b,i[8]=S*p+w,i[1]=m*g,i[5]=w*p+S,i[9]=b*p-R,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const S=d*m,b=d*p,R=h*m,w=h*p;i[0]=m*v,i[4]=w-S*g,i[8]=R*g+b,i[1]=g,i[5]=d*v,i[9]=-h*v,i[2]=-p*v,i[6]=b*g+R,i[10]=S-w*g}else if(t.order==="XZY"){const S=d*m,b=d*p,R=h*m,w=h*p;i[0]=m*v,i[4]=-g,i[8]=p*v,i[1]=S*g+w,i[5]=d*v,i[9]=b*g-R,i[2]=R*g-b,i[6]=h*v,i[10]=w*g+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sM,t,rM)}lookAt(t,i,s){const l=this.elements;return ei.subVectors(t,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Qa.crossVectors(s,ei),Qa.lengthSq()===0&&(Math.abs(s.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Qa.crossVectors(s,ei)),Qa.normalize(),pc.crossVectors(ei,Qa),l[0]=Qa.x,l[4]=pc.x,l[8]=ei.x,l[1]=Qa.y,l[5]=pc.y,l[9]=ei.y,l[2]=Qa.z,l[6]=pc.z,l[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],v=s[1],g=s[5],S=s[9],b=s[13],R=s[2],w=s[6],y=s[10],x=s[14],F=s[3],z=s[7],O=s[11],I=s[15],H=l[0],L=l[4],Z=l[8],A=l[12],N=l[1],k=l[5],se=l[9],ie=l[13],pe=l[2],fe=l[6],P=l[10],G=l[14],ae=l[3],Me=l[7],Se=l[11],U=l[15];return u[0]=d*H+h*N+m*pe+p*ae,u[4]=d*L+h*k+m*fe+p*Me,u[8]=d*Z+h*se+m*P+p*Se,u[12]=d*A+h*ie+m*G+p*U,u[1]=v*H+g*N+S*pe+b*ae,u[5]=v*L+g*k+S*fe+b*Me,u[9]=v*Z+g*se+S*P+b*Se,u[13]=v*A+g*ie+S*G+b*U,u[2]=R*H+w*N+y*pe+x*ae,u[6]=R*L+w*k+y*fe+x*Me,u[10]=R*Z+w*se+y*P+x*Se,u[14]=R*A+w*ie+y*G+x*U,u[3]=F*H+z*N+O*pe+I*ae,u[7]=F*L+z*k+O*fe+I*Me,u[11]=F*Z+z*se+O*P+I*Se,u[15]=F*A+z*ie+O*G+I*U,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],d=t[1],h=t[5],m=t[9],p=t[13],v=t[2],g=t[6],S=t[10],b=t[14],R=t[3],w=t[7],y=t[11],x=t[15],F=m*b-p*S,z=h*b-p*g,O=h*S-m*g,I=d*b-p*v,H=d*S-m*v,L=d*g-h*v;return i*(w*F-y*z+x*O)-s*(R*F-y*I+x*H)+l*(R*z-w*I+x*L)-u*(R*O-w*H+y*L)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],v=t[8],g=t[9],S=t[10],b=t[11],R=t[12],w=t[13],y=t[14],x=t[15],F=g*y*p-w*S*p+w*m*b-h*y*b-g*m*x+h*S*x,z=R*S*p-v*y*p-R*m*b+d*y*b+v*m*x-d*S*x,O=v*w*p-R*g*p+R*h*b-d*w*b-v*h*x+d*g*x,I=R*g*m-v*w*m-R*h*S+d*w*S+v*h*y-d*g*y,H=i*F+s*z+l*O+u*I;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/H;return t[0]=F*L,t[1]=(w*S*u-g*y*u-w*l*b+s*y*b+g*l*x-s*S*x)*L,t[2]=(h*y*u-w*m*u+w*l*p-s*y*p-h*l*x+s*m*x)*L,t[3]=(g*m*u-h*S*u-g*l*p+s*S*p+h*l*b-s*m*b)*L,t[4]=z*L,t[5]=(v*y*u-R*S*u+R*l*b-i*y*b-v*l*x+i*S*x)*L,t[6]=(R*m*u-d*y*u-R*l*p+i*y*p+d*l*x-i*m*x)*L,t[7]=(d*S*u-v*m*u+v*l*p-i*S*p-d*l*b+i*m*b)*L,t[8]=O*L,t[9]=(R*g*u-v*w*u-R*s*b+i*w*b+v*s*x-i*g*x)*L,t[10]=(d*w*u-R*h*u+R*s*p-i*w*p-d*s*x+i*h*x)*L,t[11]=(v*h*u-d*g*u-v*s*p+i*g*p+d*s*b-i*h*b)*L,t[12]=I*L,t[13]=(v*w*l-R*g*l+R*s*S-i*w*S-v*s*y+i*g*y)*L,t[14]=(R*h*l-d*w*l-R*s*m+i*w*m+d*s*y-i*h*y)*L,t[15]=(d*g*l-v*h*l+v*s*m-i*g*m-d*s*S+i*h*S)*L,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,d=t.x,h=t.y,m=t.z,p=u*d,v=u*h;return this.set(p*d+s,p*h-l*m,p*m+l*h,0,p*h+l*m,v*h+s,v*m-l*d,0,p*m-l*h,v*m+l*d,u*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,d){return this.set(1,s,u,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,v=d+d,g=h+h,S=u*p,b=u*v,R=u*g,w=d*v,y=d*g,x=h*g,F=m*p,z=m*v,O=m*g,I=s.x,H=s.y,L=s.z;return l[0]=(1-(w+x))*I,l[1]=(b+O)*I,l[2]=(R-z)*I,l[3]=0,l[4]=(b-O)*H,l[5]=(1-(S+x))*H,l[6]=(y+F)*H,l[7]=0,l[8]=(R+z)*L,l[9]=(y-F)*L,l[10]=(1-(S+w))*L,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let u=Sr.set(l[0],l[1],l[2]).length();const d=Sr.set(l[4],l[5],l[6]).length(),h=Sr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),Ti.copy(this);const p=1/u,v=1/d,g=1/h;return Ti.elements[0]*=p,Ti.elements[1]*=p,Ti.elements[2]*=p,Ti.elements[4]*=v,Ti.elements[5]*=v,Ti.elements[6]*=v,Ti.elements[8]*=g,Ti.elements[9]*=g,Ti.elements[10]*=g,i.setFromRotationMatrix(Ti),s.x=u,s.y=d,s.z=h,this}makePerspective(t,i,s,l,u,d,h=Bi,m=!1){const p=this.elements,v=2*u/(i-t),g=2*u/(s-l),S=(i+t)/(i-t),b=(s+l)/(s-l);let R,w;if(m)R=u/(d-u),w=d*u/(d-u);else if(h===Bi)R=-(d+u)/(d-u),w=-2*d*u/(d-u);else if(h===Ic)R=-d/(d-u),w=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=g,p[9]=b,p[13]=0,p[2]=0,p[6]=0,p[10]=R,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,u,d,h=Bi,m=!1){const p=this.elements,v=2/(i-t),g=2/(s-l),S=-(i+t)/(i-t),b=-(s+l)/(s-l);let R,w;if(m)R=1/(d-u),w=d/(d-u);else if(h===Bi)R=-2/(d-u),w=-(d+u)/(d-u);else if(h===Ic)R=-1/(d-u),w=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=g,p[9]=0,p[13]=b,p[2]=0,p[6]=0,p[10]=R,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Sr=new re,Ti=new an,sM=new re(0,0,0),rM=new re(1,1,1),Qa=new re,pc=new re,ei=new re,Gg=new an,Vg=new Wo;class Sa{constructor(t=0,i=0,s=0,l=Sa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],v=l[9],g=l[2],S=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,b),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-St(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,b),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(St(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,b),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-St(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,b),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(St(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(h,b));break;case"XZY":this._z=Math.asin(-St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-v,b),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Gg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gg,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Vg.setFromEuler(this),this.setFromQuaternion(Vg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sa.DEFAULT_ORDER="XYZ";class Y_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let oM=0;const kg=new re,yr=new Wo,ua=new an,mc=new re,zo=new re,lM=new re,cM=new Wo,jg=new re(1,0,0),Xg=new re(0,1,0),qg=new re(0,0,1),Wg={type:"added"},uM={type:"removed"},Mr={type:"childadded",child:null},hd={type:"childremoved",child:null};class qn extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DEFAULT_UP.clone();const t=new re,i=new Sa,s=new Wo,l=new re(1,1,1);function u(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new an},normalMatrix:{value:new ut}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Y_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return yr.setFromAxisAngle(t,i),this.quaternion.multiply(yr),this}rotateOnWorldAxis(t,i){return yr.setFromAxisAngle(t,i),this.quaternion.premultiply(yr),this}rotateX(t){return this.rotateOnAxis(jg,t)}rotateY(t){return this.rotateOnAxis(Xg,t)}rotateZ(t){return this.rotateOnAxis(qg,t)}translateOnAxis(t,i){return kg.copy(t).applyQuaternion(this.quaternion),this.position.add(kg.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(jg,t)}translateY(t){return this.translateOnAxis(Xg,t)}translateZ(t){return this.translateOnAxis(qg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ua.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?mc.copy(t):mc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ua.lookAt(zo,mc,this.up):ua.lookAt(mc,zo,this.up),this.quaternion.setFromRotationMatrix(ua),l&&(ua.extractRotation(l.matrixWorld),yr.setFromRotationMatrix(ua),this.quaternion.premultiply(yr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(At("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wg),Mr.child=t,this.dispatchEvent(Mr),Mr.child=null):At("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(uM),hd.child=t,this.dispatchEvent(hd),hd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ua.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ua.multiply(t.parent.matrixWorld)),t.applyMatrix4(ua),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wg),Mr.child=t,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,t,lM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,cM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const g=m[p];u(t.shapes,g)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(t.materials,this.material[m]));l.material=h}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),v=d(t.images),g=d(t.shapes),S=d(t.skeletons),b=d(t.animations),R=d(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),g.length>0&&(s.shapes=g),S.length>0&&(s.skeletons=S),b.length>0&&(s.animations=b),R.length>0&&(s.nodes=R)}return s.object=l,s;function d(h){const m=[];for(const p in h){const v=h[p];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}qn.DEFAULT_UP=new re(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new re,fa=new re,pd=new re,da=new re,br=new re,Er=new re,Yg=new re,md=new re,gd=new re,_d=new re,vd=new nn,xd=new nn,Sd=new nn;class Ri{constructor(t=new re,i=new re,s=new re){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ai.subVectors(t,i),l.cross(Ai);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){Ai.subVectors(l,i),fa.subVectors(s,i),pd.subVectors(t,i);const d=Ai.dot(Ai),h=Ai.dot(fa),m=Ai.dot(pd),p=fa.dot(fa),v=fa.dot(pd),g=d*p-h*h;if(g===0)return u.set(0,0,0),null;const S=1/g,b=(p*m-h*v)*S,R=(d*v-h*m)*S;return u.set(1-b-R,R,b)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,da)===null?!1:da.x>=0&&da.y>=0&&da.x+da.y<=1}static getInterpolation(t,i,s,l,u,d,h,m){return this.getBarycoord(t,i,s,l,da)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,da.x),m.addScaledVector(d,da.y),m.addScaledVector(h,da.z),m)}static getInterpolatedAttribute(t,i,s,l,u,d){return vd.setScalar(0),xd.setScalar(0),Sd.setScalar(0),vd.fromBufferAttribute(t,i),xd.fromBufferAttribute(t,s),Sd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(vd,u.x),d.addScaledVector(xd,u.y),d.addScaledVector(Sd,u.z),d}static isFrontFacing(t,i,s,l){return Ai.subVectors(s,i),fa.subVectors(t,i),Ai.cross(fa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ai.subVectors(this.c,this.b),fa.subVectors(this.a,this.b),Ai.cross(fa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ri.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ri.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return Ri.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return Ri.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ri.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let d,h;br.subVectors(l,s),Er.subVectors(u,s),md.subVectors(t,s);const m=br.dot(md),p=Er.dot(md);if(m<=0&&p<=0)return i.copy(s);gd.subVectors(t,l);const v=br.dot(gd),g=Er.dot(gd);if(v>=0&&g<=v)return i.copy(l);const S=m*g-v*p;if(S<=0&&m>=0&&v<=0)return d=m/(m-v),i.copy(s).addScaledVector(br,d);_d.subVectors(t,u);const b=br.dot(_d),R=Er.dot(_d);if(R>=0&&b<=R)return i.copy(u);const w=b*p-m*R;if(w<=0&&p>=0&&R<=0)return h=p/(p-R),i.copy(s).addScaledVector(Er,h);const y=v*R-b*g;if(y<=0&&g-v>=0&&b-R>=0)return Yg.subVectors(u,l),h=(g-v)/(g-v+(b-R)),i.copy(l).addScaledVector(Yg,h);const x=1/(y+w+S);return d=w*x,h=S*x,i.copy(s).addScaledVector(br,d).addScaledVector(Er,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Z_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ja={h:0,s:0,l:0},gc={h:0,s:0,l:0};function yd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Lt{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=hi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,bt.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=bt.workingColorSpace){return this.r=t,this.g=i,this.b=s,bt.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=bt.workingColorSpace){if(t=Qy(t,1),i=St(i,0,1),s=St(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,d=2*s-u;this.r=yd(d,u,t+1/3),this.g=yd(d,u,t),this.b=yd(d,u,t-1/3)}return bt.colorSpaceToWorking(this,l),this}setStyle(t,i=hi){function s(u){u!==void 0&&parseFloat(u)<1&&st("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:st("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);st("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=hi){const s=Z_[t.toLowerCase()];return s!==void 0?this.setHex(s,i):st("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ga(t.r),this.g=ga(t.g),this.b=ga(t.b),this}copyLinearToSRGB(t){return this.r=Nr(t.r),this.g=Nr(t.g),this.b=Nr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hi){return bt.workingToColorSpace(On.copy(this),t),Math.round(St(On.r*255,0,255))*65536+Math.round(St(On.g*255,0,255))*256+Math.round(St(On.b*255,0,255))}getHexString(t=hi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=bt.workingColorSpace){bt.workingToColorSpace(On.copy(this),i);const s=On.r,l=On.g,u=On.b,d=Math.max(s,l,u),h=Math.min(s,l,u);let m,p;const v=(h+d)/2;if(h===d)m=0,p=0;else{const g=d-h;switch(p=v<=.5?g/(d+h):g/(2-d-h),d){case s:m=(l-u)/g+(l<u?6:0);break;case l:m=(u-s)/g+2;break;case u:m=(s-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=v,t}getRGB(t,i=bt.workingColorSpace){return bt.workingToColorSpace(On.copy(this),i),t.r=On.r,t.g=On.g,t.b=On.b,t}getStyle(t=hi){bt.workingToColorSpace(On.copy(this),t);const i=On.r,s=On.g,l=On.b;return t!==hi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ja),this.setHSL(Ja.h+t,Ja.s+i,Ja.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ja),t.getHSL(gc);const s=id(Ja.h,gc.h,i),l=id(Ja.s,gc.s,i),u=id(Ja.l,gc.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new Lt;Lt.NAMES=Z_;let fM=0;class Zo extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fM++}),this.uuid=qo(),this.name="",this.type="Material",this.blending=wr,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ld,this.blendDst=Od,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mr,this.stencilZFail=mr,this.stencilZPass=mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){st(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){st(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==wr&&(s.blending=this.blending),this.side!==ns&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ld&&(s.blendSrc=this.blendSrc),this.blendDst!==Od&&(s.blendDst=this.blendDst),this.blendEquation!==Cs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==mr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==mr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(t.textures),d=l(t.images);u.length>0&&(s.textures=u),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class K_ extends Zo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sa,this.combine=w_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const un=new re,_c=new Vt;let dM=0;class wi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Og,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)_c.fromBufferAttribute(this,i),_c.applyMatrix3(t),this.setXY(i,_c.x,_c.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(t),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.transformDirection(t),this.setXYZ(i,un.x,un.y,un.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Lo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=jn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Lo(i,this.array)),i}setX(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Lo(i,this.array)),i}setY(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Lo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Lo(i,this.array)),i}setW(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),l=jn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),l=jn(l,this.array),u=jn(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Og&&(t.usage=this.usage),t}}class Q_ extends wi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class J_ extends wi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class _a extends wi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let hM=0;const di=new an,Md=new qn,Tr=new re,ti=new Yo,Fo=new Yo,gn=new re;class Ni extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=qo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(X_(t)?J_:Q_)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new ut().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,i,s){return di.makeTranslation(t,i,s),this.applyMatrix4(di),this}scale(t,i,s){return di.makeScale(t,i,s),this.applyMatrix4(di),this}lookAt(t){return Md.lookAt(t),Md.updateMatrix(),this.applyMatrix4(Md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const d=t[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new _a(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){At("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];ti.setFromBufferAttribute(u),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&At('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){At("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(t){const s=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Fo.setFromBufferAttribute(h),this.morphTargetsRelative?(gn.addVectors(ti.min,Fo.min),ti.expandByPoint(gn),gn.addVectors(ti.max,Fo.max),ti.expandByPoint(gn)):(ti.expandByPoint(Fo.min),ti.expandByPoint(Fo.max))}ti.getCenter(s);let l=0;for(let u=0,d=t.count;u<d;u++)gn.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(gn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)gn.fromBufferAttribute(h,p),m&&(Tr.fromBufferAttribute(t,p),gn.add(Tr)),l=Math.max(l,s.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&At('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){At("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let Z=0;Z<s.count;Z++)h[Z]=new re,m[Z]=new re;const p=new re,v=new re,g=new re,S=new Vt,b=new Vt,R=new Vt,w=new re,y=new re;function x(Z,A,N){p.fromBufferAttribute(s,Z),v.fromBufferAttribute(s,A),g.fromBufferAttribute(s,N),S.fromBufferAttribute(u,Z),b.fromBufferAttribute(u,A),R.fromBufferAttribute(u,N),v.sub(p),g.sub(p),b.sub(S),R.sub(S);const k=1/(b.x*R.y-R.x*b.y);isFinite(k)&&(w.copy(v).multiplyScalar(R.y).addScaledVector(g,-b.y).multiplyScalar(k),y.copy(g).multiplyScalar(b.x).addScaledVector(v,-R.x).multiplyScalar(k),h[Z].add(w),h[A].add(w),h[N].add(w),m[Z].add(y),m[A].add(y),m[N].add(y))}let F=this.groups;F.length===0&&(F=[{start:0,count:t.count}]);for(let Z=0,A=F.length;Z<A;++Z){const N=F[Z],k=N.start,se=N.count;for(let ie=k,pe=k+se;ie<pe;ie+=3)x(t.getX(ie+0),t.getX(ie+1),t.getX(ie+2))}const z=new re,O=new re,I=new re,H=new re;function L(Z){I.fromBufferAttribute(l,Z),H.copy(I);const A=h[Z];z.copy(A),z.sub(I.multiplyScalar(I.dot(A))).normalize(),O.crossVectors(H,A);const k=O.dot(m[Z])<0?-1:1;d.setXYZW(Z,z.x,z.y,z.z,k)}for(let Z=0,A=F.length;Z<A;++Z){const N=F[Z],k=N.start,se=N.count;for(let ie=k,pe=k+se;ie<pe;ie+=3)L(t.getX(ie+0)),L(t.getX(ie+1)),L(t.getX(ie+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new wi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,b=s.count;S<b;S++)s.setXYZ(S,0,0,0);const l=new re,u=new re,d=new re,h=new re,m=new re,p=new re,v=new re,g=new re;if(t)for(let S=0,b=t.count;S<b;S+=3){const R=t.getX(S+0),w=t.getX(S+1),y=t.getX(S+2);l.fromBufferAttribute(i,R),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,y),v.subVectors(d,u),g.subVectors(l,u),v.cross(g),h.fromBufferAttribute(s,R),m.fromBufferAttribute(s,w),p.fromBufferAttribute(s,y),h.add(v),m.add(v),p.add(v),s.setXYZ(R,h.x,h.y,h.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,b=i.count;S<b;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),v.subVectors(d,u),g.subVectors(l,u),v.cross(g),s.setXYZ(S+0,v.x,v.y,v.z),s.setXYZ(S+1,v.x,v.y,v.z),s.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)gn.fromBufferAttribute(t,i),gn.normalize(),t.setXYZ(i,gn.x,gn.y,gn.z)}toNonIndexed(){function t(h,m){const p=h.array,v=h.itemSize,g=h.normalized,S=new p.constructor(m.length*v);let b=0,R=0;for(let w=0,y=m.length;w<y;w++){h.isInterleavedBufferAttribute?b=m[w]*h.data.stride+h.offset:b=m[w]*v;for(let x=0;x<v;x++)S[R++]=p[b++]}return new wi(S,v,g)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ni,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,s);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let v=0,g=p.length;v<g;v++){const S=p[v],b=t(S,s);m.push(b)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let g=0,S=p.length;g<S;g++){const b=p[g];v.push(b.toJSON(t.data))}v.length>0&&(l[m]=v,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const u=t.morphAttributes;for(const p in u){const v=[],g=u[p];for(let S=0,b=g.length;S<b;S++)v.push(g[S].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,v=d.length;p<v;p++){const g=d[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zg=new an,bs=new W_,vc=new Gc,Kg=new re,xc=new re,Sc=new re,yc=new re,bd=new re,Mc=new re,Qg=new re,bc=new re;class ya extends qn{constructor(t=new Ni,i=new K_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(u&&h){Mc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const v=h[m],g=u[m];v!==0&&(bd.fromBufferAttribute(g,t),d?Mc.addScaledVector(bd,v):Mc.addScaledVector(bd.sub(i),v))}i.add(Mc)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),vc.copy(s.boundingSphere),vc.applyMatrix4(u),bs.copy(t.ray).recast(t.near),!(vc.containsPoint(bs.origin)===!1&&(bs.intersectSphere(vc,Kg)===null||bs.origin.distanceToSquared(Kg)>(t.far-t.near)**2))&&(Zg.copy(u).invert(),bs.copy(t.ray).applyMatrix4(Zg),!(s.boundingBox!==null&&bs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,bs)))}_computeIntersections(t,i,s){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,v=u.attributes.uv1,g=u.attributes.normal,S=u.groups,b=u.drawRange;if(h!==null)if(Array.isArray(d))for(let R=0,w=S.length;R<w;R++){const y=S[R],x=d[y.materialIndex],F=Math.max(y.start,b.start),z=Math.min(h.count,Math.min(y.start+y.count,b.start+b.count));for(let O=F,I=z;O<I;O+=3){const H=h.getX(O),L=h.getX(O+1),Z=h.getX(O+2);l=Ec(this,x,t,s,p,v,g,H,L,Z),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const R=Math.max(0,b.start),w=Math.min(h.count,b.start+b.count);for(let y=R,x=w;y<x;y+=3){const F=h.getX(y),z=h.getX(y+1),O=h.getX(y+2);l=Ec(this,d,t,s,p,v,g,F,z,O),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let R=0,w=S.length;R<w;R++){const y=S[R],x=d[y.materialIndex],F=Math.max(y.start,b.start),z=Math.min(m.count,Math.min(y.start+y.count,b.start+b.count));for(let O=F,I=z;O<I;O+=3){const H=O,L=O+1,Z=O+2;l=Ec(this,x,t,s,p,v,g,H,L,Z),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const R=Math.max(0,b.start),w=Math.min(m.count,b.start+b.count);for(let y=R,x=w;y<x;y+=3){const F=y,z=y+1,O=y+2;l=Ec(this,d,t,s,p,v,g,F,z,O),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function pM(o,t,i,s,l,u,d,h){let m;if(t.side===Xn?m=s.intersectTriangle(d,u,l,!0,h):m=s.intersectTriangle(l,u,d,t.side===ns,h),m===null)return null;bc.copy(h),bc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(bc);return p<i.near||p>i.far?null:{distance:p,point:bc.clone(),object:o}}function Ec(o,t,i,s,l,u,d,h,m,p){o.getVertexPosition(h,xc),o.getVertexPosition(m,Sc),o.getVertexPosition(p,yc);const v=pM(o,t,i,s,xc,Sc,yc,Qg);if(v){const g=new re;Ri.getBarycoord(Qg,xc,Sc,yc,g),l&&(v.uv=Ri.getInterpolatedAttribute(l,h,m,p,g,new Vt)),u&&(v.uv1=Ri.getInterpolatedAttribute(u,h,m,p,g,new Vt)),d&&(v.normal=Ri.getInterpolatedAttribute(d,h,m,p,g,new re),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new re,materialIndex:0};Ri.getNormal(xc,Sc,yc,S.normal),v.face=S,v.barycoord=g}return v}class Ko extends Ni{constructor(t=1,i=1,s=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],v=[],g=[];let S=0,b=0;R("z","y","x",-1,-1,s,i,t,d,u,0),R("z","y","x",1,-1,s,i,-t,d,u,1),R("x","z","y",1,1,t,s,i,l,d,2),R("x","z","y",1,-1,t,s,-i,l,d,3),R("x","y","z",1,-1,t,i,s,l,u,4),R("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new _a(p,3)),this.setAttribute("normal",new _a(v,3)),this.setAttribute("uv",new _a(g,2));function R(w,y,x,F,z,O,I,H,L,Z,A){const N=O/L,k=I/Z,se=O/2,ie=I/2,pe=H/2,fe=L+1,P=Z+1;let G=0,ae=0;const Me=new re;for(let Se=0;Se<P;Se++){const U=Se*k-ie;for(let ne=0;ne<fe;ne++){const _e=ne*N-se;Me[w]=_e*F,Me[y]=U*z,Me[x]=pe,p.push(Me.x,Me.y,Me.z),Me[w]=0,Me[y]=0,Me[x]=H>0?1:-1,v.push(Me.x,Me.y,Me.z),g.push(ne/L),g.push(1-Se/Z),G+=1}}for(let Se=0;Se<Z;Se++)for(let U=0;U<L;U++){const ne=S+U+fe*Se,_e=S+U+fe*(Se+1),Ae=S+(U+1)+fe*(Se+1),Be=S+(U+1)+fe*Se;m.push(ne,_e,Be),m.push(_e,Ae,Be),ae+=6}h.addGroup(b,ae,A),b+=ae,S+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ko(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Pr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Fn(o){const t={};for(let i=0;i<o.length;i++){const s=Pr(o[i]);for(const l in s)t[l]=s[l]}return t}function mM(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function $_(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:bt.workingColorSpace}const gM={clone:Pr,merge:Fn};var _M=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends Zo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_M,this.fragmentShader=vM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Pr(t.uniforms),this.uniformsGroups=mM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class ev extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $a=new re,Jg=new Vt,$g=new Vt;class pi extends ev{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Eh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(nd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Eh*2*Math.atan(Math.tan(nd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){$a.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($a.x,$a.y).multiplyScalar(-t/$a.z),$a.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set($a.x,$a.y).multiplyScalar(-t/$a.z)}getViewSize(t,i){return this.getViewBounds(t,Jg,$g),i.subVectors($g,Jg)}setViewOffset(t,i,s,l,u,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(nd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*s/p,l*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ar=-90,Rr=1;class xM extends qn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new pi(Ar,Rr,t,i);l.layers=this.layers,this.add(l);const u=new pi(Ar,Rr,t,i);u.layers=this.layers,this.add(u);const d=new pi(Ar,Rr,t,i);d.layers=this.layers,this.add(d);const h=new pi(Ar,Rr,t,i);h.layers=this.layers,this.add(h);const m=new pi(Ar,Rr,t,i);m.layers=this.layers,this.add(m);const p=new pi(Ar,Rr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(t===Bi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Ic)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,v]=this.children,g=t.getRenderTarget(),S=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),R=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,u),t.setRenderTarget(s,1,l),t.render(i,d),t.setRenderTarget(s,2,l),t.render(i,h),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),t.render(i,v),t.setRenderTarget(g,S,b),t.xr.enabled=R,s.texture.needsPMREMUpdate=!0}}class tv extends Nn{constructor(t=[],i=Us,s,l,u,d,h,m,p,v){super(t,i,s,l,u,d,h,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nv extends Gi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new tv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Ko(5,5,5),u=new ki({name:"CubemapFromEquirect",uniforms:Pr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Xn,blending:ma});u.uniforms.tEquirect.value=i;const d=new ya(l,u),h=i.minFilter;return i.minFilter===Ns&&(i.minFilter=Pn),new xM(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const u=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,l);t.setRenderTarget(u)}}class Tc extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const SM={type:"move"};class Ed{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const w of t.hand.values()){const y=i.getJointPose(w,s),x=this._getHandJoint(p,w);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],S=v.position.distanceTo(g.position),b=.02,R=.005;p.inputState.pinching&&S>b+R?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=b-R&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(SM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Tc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class Bh{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Lt(t),this.density=i}clone(){return new Bh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class yM extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sa,this.environmentIntensity=1,this.environmentRotation=new Sa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class MM extends Nn{constructor(t=null,i=1,s=1,l,u,d,h,m,p=wn,v=wn,g,S){super(null,d,h,m,p,v,l,u,g,S),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Td=new re,bM=new re,EM=new ut;class Rs{constructor(t=new re(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Td.subVectors(s,i).cross(bM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Td),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||EM.getNormalMatrix(t),l=this.coplanarPoint(Td).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Es=new Gc,TM=new Vt(.5,.5),Ac=new re;class iv{constructor(t=new Rs,i=new Rs,s=new Rs,l=new Rs,u=new Rs,d=new Rs){this.planes=[t,i,s,l,u,d]}set(t,i,s,l,u,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Bi,s=!1){const l=this.planes,u=t.elements,d=u[0],h=u[1],m=u[2],p=u[3],v=u[4],g=u[5],S=u[6],b=u[7],R=u[8],w=u[9],y=u[10],x=u[11],F=u[12],z=u[13],O=u[14],I=u[15];if(l[0].setComponents(p-d,b-v,x-R,I-F).normalize(),l[1].setComponents(p+d,b+v,x+R,I+F).normalize(),l[2].setComponents(p+h,b+g,x+w,I+z).normalize(),l[3].setComponents(p-h,b-g,x-w,I-z).normalize(),s)l[4].setComponents(m,S,y,O).normalize(),l[5].setComponents(p-m,b-S,x-y,I-O).normalize();else if(l[4].setComponents(p-m,b-S,x-y,I-O).normalize(),i===Bi)l[5].setComponents(p+m,b+S,x+y,I+O).normalize();else if(i===Ic)l[5].setComponents(m,S,y,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Es.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(t){Es.center.set(0,0,0);const i=TM.distanceTo(t.center);return Es.radius=.7071067811865476+i,Es.applyMatrix4(t.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Ac.x=l.normal.x>0?t.max.x:t.min.x,Ac.y=l.normal.y>0?t.max.y:t.min.y,Ac.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Ac)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class av extends Zo{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const e_=new an,Th=new W_,Rc=new Gc,Cc=new re;class AM extends qn{constructor(t=new Ni,i=new av){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,u=t.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Rc.copy(s.boundingSphere),Rc.applyMatrix4(l),Rc.radius+=u,t.ray.intersectsSphere(Rc)===!1)return;e_.copy(l).invert(),Th.copy(t.ray).applyMatrix4(e_);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=s.index,g=s.attributes.position;if(p!==null){const S=Math.max(0,d.start),b=Math.min(p.count,d.start+d.count);for(let R=S,w=b;R<w;R++){const y=p.getX(R);Cc.fromBufferAttribute(g,y),t_(Cc,y,m,l,t,i,this)}}else{const S=Math.max(0,d.start),b=Math.min(g.count,d.start+d.count);for(let R=S,w=b;R<w;R++)Cc.fromBufferAttribute(g,R),t_(Cc,R,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function t_(o,t,i,s,l,u,d){const h=Th.distanceSqToPoint(o);if(h<i){const m=new re;Th.closestPointToPoint(o,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:d})}}class RM extends Nn{constructor(t,i,s,l,u,d,h,m,p){super(t,i,s,l,u,d,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xo extends Nn{constructor(t,i,s=Vi,l,u,d,h=wn,m=wn,p,v=xa,g=1){if(v!==xa&&v!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:g};super(S,l,u,d,h,m,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ih(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class CM extends Xo{constructor(t,i=Vi,s=Us,l,u,d=wn,h=wn,m,p=xa){const v={width:t,height:t,depth:1},g=[v,v,v,v,v,v];super(t,t,i,s,l,u,d,h,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class sv extends Nn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Vc extends Ni{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,d=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,v=m+1,g=t/h,S=i/m,b=[],R=[],w=[],y=[];for(let x=0;x<v;x++){const F=x*S-d;for(let z=0;z<p;z++){const O=z*g-u;R.push(O,-F,0),w.push(0,0,1),y.push(z/h),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let F=0;F<h;F++){const z=F+p*x,O=F+p*(x+1),I=F+1+p*(x+1),H=F+1+p*x;b.push(z,O,H),b.push(O,I,H)}this.setIndex(b),this.setAttribute("position",new _a(R,3)),this.setAttribute("normal",new _a(w,3)),this.setAttribute("uv",new _a(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vc(t.width,t.height,t.widthSegments,t.heightSegments)}}class wM extends ki{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class NM extends Zo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class DM extends Zo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class rv extends ev{constructor(t=-1,i=1,s=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,d=s+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=v*this.view.offsetY,m=h-v*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class UM extends pi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class LM{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function n_(o,t,i,s){const l=OM(s);switch(i){case V_:return o*t;case j_:return o*t/l.components*l.byteLength;case Lh:return o*t/l.components*l.byteLength;case Lr:return o*t*2/l.components*l.byteLength;case Oh:return o*t*2/l.components*l.byteLength;case k_:return o*t*3/l.components*l.byteLength;case Ci:return o*t*4/l.components*l.byteLength;case Ph:return o*t*4/l.components*l.byteLength;case Uc:case Lc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Oc:case Pc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Wd:case Zd:return Math.max(o,16)*Math.max(t,8)/4;case qd:case Yd:return Math.max(o,8)*Math.max(t,8)/2;case Kd:case Qd:case $d:case eh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Jd:case th:case nh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ih:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ah:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case sh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case rh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case oh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case lh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case ch:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case uh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case fh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case dh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case hh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case ph:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case mh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case gh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case _h:case vh:case xh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Sh:case yh:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Mh:case bh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function OM(o){switch(o){case mi:case I_:return{byteLength:1,components:1};case Vo:case B_:case va:return{byteLength:2,components:1};case Dh:case Uh:return{byteLength:2,components:4};case Vi:case Nh:case Ii:return{byteLength:4,components:1};case H_:case G_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wh}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wh);function ov(){let o=null,t=!1,i=null,s=null;function l(u,d){i(u,d),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function PM(o){const t=new WeakMap;function i(h,m){const p=h.array,v=h.usage,g=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,v),h.onUploadCallback();let b;if(p instanceof Float32Array)b=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)b=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?b=o.HALF_FLOAT:b=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)b=o.SHORT;else if(p instanceof Uint32Array)b=o.UNSIGNED_INT;else if(p instanceof Int32Array)b=o.INT;else if(p instanceof Int8Array)b=o.BYTE;else if(p instanceof Uint8Array)b=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)b=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:b,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function s(h,m,p){const v=m.array,g=m.updateRanges;if(o.bindBuffer(p,h),g.length===0)o.bufferSubData(p,0,v);else{g.sort((b,R)=>b.start-R.start);let S=0;for(let b=1;b<g.length;b++){const R=g[S],w=g[b];w.start<=R.start+R.count+1?R.count=Math.max(R.count,w.start+w.count-R.start):(++S,g[S]=w)}g.length=S+1;for(let b=0,R=g.length;b<R;b++){const w=g[b];o.bufferSubData(p,w.start*v.BYTES_PER_ELEMENT,v,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(o.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=t.get(h);(!v||v.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var zM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,FM=`#ifdef USE_ALPHAHASH
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
#endif`,IM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,BM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,GM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,VM=`#ifdef USE_AOMAP
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
#endif`,kM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jM=`#ifdef USE_BATCHING
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
#endif`,YM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ZM=`#ifdef USE_IRIDESCENCE
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
#endif`,KM=`#ifdef USE_BUMPMAP
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
#endif`,QM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,JM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$M=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ib=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ab=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sb=`#define PI 3.141592653589793
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
} // validated`,rb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ob=`vec3 transformedNormal = objectNormal;
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
#endif`,lb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ub=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,db="gl_FragColor = linearToOutputTexel( gl_FragColor );",hb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pb=`#ifdef USE_ENVMAP
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
#endif`,mb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,gb=`#ifdef USE_ENVMAP
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
#endif`,_b=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vb=`#ifdef USE_ENVMAP
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
#endif`,xb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bb=`#ifdef USE_GRADIENTMAP
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
}`,Eb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ab=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rb=`uniform bool receiveShadow;
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
#endif`,Cb=`#ifdef USE_ENVMAP
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
#endif`,wb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Db=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ub=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lb=`PhysicalMaterial material;
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
#endif`,Ob=`uniform sampler2D dfgLUT;
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
}`,Pb=`
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
#endif`,zb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ib=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xb=`#if defined( USE_POINTS_UV )
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
#endif`,qb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qb=`#ifdef USE_MORPHTARGETS
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
#endif`,Jb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$b=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,eE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aE=`#ifdef USE_NORMALMAP
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
#endif`,sE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,oE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_E=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,SE=`float getShadowMask() {
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
}`,yE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ME=`#ifdef USE_SKINNING
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
#endif`,bE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,EE=`#ifdef USE_SKINNING
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
#endif`,TE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,AE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,RE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,CE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wE=`#ifdef USE_TRANSMISSION
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
#endif`,NE=`#ifdef USE_TRANSMISSION
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
#endif`,DE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zE=`uniform sampler2D t2D;
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
}`,FE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,BE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GE=`#include <common>
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
}`,VE=`#if DEPTH_PACKING == 3200
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
}`,kE=`#define DISTANCE
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
}`,jE=`#define DISTANCE
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
}`,XE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WE=`uniform float scale;
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
}`,YE=`uniform vec3 diffuse;
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
}`,ZE=`#include <common>
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
}`,KE=`uniform vec3 diffuse;
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
}`,QE=`#define LAMBERT
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
}`,JE=`#define LAMBERT
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
}`,$E=`#define MATCAP
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
}`,e1=`#define MATCAP
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
}`,t1=`#define NORMAL
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
}`,n1=`#define NORMAL
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
}`,i1=`#define PHONG
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
}`,a1=`#define PHONG
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
}`,s1=`#define STANDARD
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
}`,r1=`#define STANDARD
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
}`,o1=`#define TOON
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
}`,l1=`#define TOON
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
}`,c1=`uniform float size;
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
}`,u1=`uniform vec3 diffuse;
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
}`,f1=`#include <common>
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
}`,d1=`uniform vec3 color;
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
}`,h1=`uniform float rotation;
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
}`,p1=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:zM,alphahash_pars_fragment:FM,alphamap_fragment:IM,alphamap_pars_fragment:BM,alphatest_fragment:HM,alphatest_pars_fragment:GM,aomap_fragment:VM,aomap_pars_fragment:kM,batching_pars_vertex:jM,batching_vertex:XM,begin_vertex:qM,beginnormal_vertex:WM,bsdfs:YM,iridescence_fragment:ZM,bumpmap_pars_fragment:KM,clipping_planes_fragment:QM,clipping_planes_pars_fragment:JM,clipping_planes_pars_vertex:$M,clipping_planes_vertex:eb,color_fragment:tb,color_pars_fragment:nb,color_pars_vertex:ib,color_vertex:ab,common:sb,cube_uv_reflection_fragment:rb,defaultnormal_vertex:ob,displacementmap_pars_vertex:lb,displacementmap_vertex:cb,emissivemap_fragment:ub,emissivemap_pars_fragment:fb,colorspace_fragment:db,colorspace_pars_fragment:hb,envmap_fragment:pb,envmap_common_pars_fragment:mb,envmap_pars_fragment:gb,envmap_pars_vertex:_b,envmap_physical_pars_fragment:Cb,envmap_vertex:vb,fog_vertex:xb,fog_pars_vertex:Sb,fog_fragment:yb,fog_pars_fragment:Mb,gradientmap_pars_fragment:bb,lightmap_pars_fragment:Eb,lights_lambert_fragment:Tb,lights_lambert_pars_fragment:Ab,lights_pars_begin:Rb,lights_toon_fragment:wb,lights_toon_pars_fragment:Nb,lights_phong_fragment:Db,lights_phong_pars_fragment:Ub,lights_physical_fragment:Lb,lights_physical_pars_fragment:Ob,lights_fragment_begin:Pb,lights_fragment_maps:zb,lights_fragment_end:Fb,logdepthbuf_fragment:Ib,logdepthbuf_pars_fragment:Bb,logdepthbuf_pars_vertex:Hb,logdepthbuf_vertex:Gb,map_fragment:Vb,map_pars_fragment:kb,map_particle_fragment:jb,map_particle_pars_fragment:Xb,metalnessmap_fragment:qb,metalnessmap_pars_fragment:Wb,morphinstance_vertex:Yb,morphcolor_vertex:Zb,morphnormal_vertex:Kb,morphtarget_pars_vertex:Qb,morphtarget_vertex:Jb,normal_fragment_begin:$b,normal_fragment_maps:eE,normal_pars_fragment:tE,normal_pars_vertex:nE,normal_vertex:iE,normalmap_pars_fragment:aE,clearcoat_normal_fragment_begin:sE,clearcoat_normal_fragment_maps:rE,clearcoat_pars_fragment:oE,iridescence_pars_fragment:lE,opaque_fragment:cE,packing:uE,premultiplied_alpha_fragment:fE,project_vertex:dE,dithering_fragment:hE,dithering_pars_fragment:pE,roughnessmap_fragment:mE,roughnessmap_pars_fragment:gE,shadowmap_pars_fragment:_E,shadowmap_pars_vertex:vE,shadowmap_vertex:xE,shadowmask_pars_fragment:SE,skinbase_vertex:yE,skinning_pars_vertex:ME,skinning_vertex:bE,skinnormal_vertex:EE,specularmap_fragment:TE,specularmap_pars_fragment:AE,tonemapping_fragment:RE,tonemapping_pars_fragment:CE,transmission_fragment:wE,transmission_pars_fragment:NE,uv_pars_fragment:DE,uv_pars_vertex:UE,uv_vertex:LE,worldpos_vertex:OE,background_vert:PE,background_frag:zE,backgroundCube_vert:FE,backgroundCube_frag:IE,cube_vert:BE,cube_frag:HE,depth_vert:GE,depth_frag:VE,distance_vert:kE,distance_frag:jE,equirect_vert:XE,equirect_frag:qE,linedashed_vert:WE,linedashed_frag:YE,meshbasic_vert:ZE,meshbasic_frag:KE,meshlambert_vert:QE,meshlambert_frag:JE,meshmatcap_vert:$E,meshmatcap_frag:e1,meshnormal_vert:t1,meshnormal_frag:n1,meshphong_vert:i1,meshphong_frag:a1,meshphysical_vert:s1,meshphysical_frag:r1,meshtoon_vert:o1,meshtoon_frag:l1,points_vert:c1,points_frag:u1,shadow_vert:f1,shadow_frag:d1,sprite_vert:h1,sprite_frag:p1},Oe={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Fi={basic:{uniforms:Fn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Fn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Lt(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Fn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Fn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Fn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Lt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Fn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Fn([Oe.points,Oe.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Fn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Fn([Oe.common,Oe.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Fn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Fn([Oe.sprite,Oe.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:Fn([Oe.common,Oe.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:Fn([Oe.lights,Oe.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Fi.physical={uniforms:Fn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const wc={r:0,b:0,g:0},Ts=new Sa,m1=new an;function g1(o,t,i,s,l,u,d){const h=new Lt(0);let m=u===!0?0:1,p,v,g=null,S=0,b=null;function R(z){let O=z.isScene===!0?z.background:null;return O&&O.isTexture&&(O=(z.backgroundBlurriness>0?i:t).get(O)),O}function w(z){let O=!1;const I=R(z);I===null?x(h,m):I&&I.isColor&&(x(I,1),O=!0);const H=o.xr.getEnvironmentBlendMode();H==="additive"?s.buffers.color.setClear(0,0,0,1,d):H==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(o.autoClear||O)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(z,O){const I=R(O);I&&(I.isCubeTexture||I.mapping===Hc)?(v===void 0&&(v=new ya(new Ko(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:Pr(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(H,L,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Ts.copy(O.backgroundRotation),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),v.material.uniforms.envMap.value=I,v.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(m1.makeRotationFromEuler(Ts)),v.material.toneMapped=bt.getTransfer(I.colorSpace)!==It,(g!==I||S!==I.version||b!==o.toneMapping)&&(v.material.needsUpdate=!0,g=I,S=I.version,b=o.toneMapping),v.layers.enableAll(),z.unshift(v,v.geometry,v.material,0,0,null)):I&&I.isTexture&&(p===void 0&&(p=new ya(new Vc(2,2),new ki({name:"BackgroundMaterial",uniforms:Pr(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=I,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.toneMapped=bt.getTransfer(I.colorSpace)!==It,I.matrixAutoUpdate===!0&&I.updateMatrix(),p.material.uniforms.uvTransform.value.copy(I.matrix),(g!==I||S!==I.version||b!==o.toneMapping)&&(p.material.needsUpdate=!0,g=I,S=I.version,b=o.toneMapping),p.layers.enableAll(),z.unshift(p,p.geometry,p.material,0,0,null))}function x(z,O){z.getRGB(wc,$_(o)),s.buffers.color.setClear(wc.r,wc.g,wc.b,O,d)}function F(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(z,O=1){h.set(z),m=O,x(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(z){m=z,x(h,m)},render:w,addToRenderList:y,dispose:F}}function _1(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=S(null);let u=l,d=!1;function h(N,k,se,ie,pe){let fe=!1;const P=g(ie,se,k);u!==P&&(u=P,p(u.object)),fe=b(N,ie,se,pe),fe&&R(N,ie,se,pe),pe!==null&&t.update(pe,o.ELEMENT_ARRAY_BUFFER),(fe||d)&&(d=!1,O(N,k,se,ie),pe!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(pe).buffer))}function m(){return o.createVertexArray()}function p(N){return o.bindVertexArray(N)}function v(N){return o.deleteVertexArray(N)}function g(N,k,se){const ie=se.wireframe===!0;let pe=s[N.id];pe===void 0&&(pe={},s[N.id]=pe);let fe=pe[k.id];fe===void 0&&(fe={},pe[k.id]=fe);let P=fe[ie];return P===void 0&&(P=S(m()),fe[ie]=P),P}function S(N){const k=[],se=[],ie=[];for(let pe=0;pe<i;pe++)k[pe]=0,se[pe]=0,ie[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:se,attributeDivisors:ie,object:N,attributes:{},index:null}}function b(N,k,se,ie){const pe=u.attributes,fe=k.attributes;let P=0;const G=se.getAttributes();for(const ae in G)if(G[ae].location>=0){const Se=pe[ae];let U=fe[ae];if(U===void 0&&(ae==="instanceMatrix"&&N.instanceMatrix&&(U=N.instanceMatrix),ae==="instanceColor"&&N.instanceColor&&(U=N.instanceColor)),Se===void 0||Se.attribute!==U||U&&Se.data!==U.data)return!0;P++}return u.attributesNum!==P||u.index!==ie}function R(N,k,se,ie){const pe={},fe=k.attributes;let P=0;const G=se.getAttributes();for(const ae in G)if(G[ae].location>=0){let Se=fe[ae];Se===void 0&&(ae==="instanceMatrix"&&N.instanceMatrix&&(Se=N.instanceMatrix),ae==="instanceColor"&&N.instanceColor&&(Se=N.instanceColor));const U={};U.attribute=Se,Se&&Se.data&&(U.data=Se.data),pe[ae]=U,P++}u.attributes=pe,u.attributesNum=P,u.index=ie}function w(){const N=u.newAttributes;for(let k=0,se=N.length;k<se;k++)N[k]=0}function y(N){x(N,0)}function x(N,k){const se=u.newAttributes,ie=u.enabledAttributes,pe=u.attributeDivisors;se[N]=1,ie[N]===0&&(o.enableVertexAttribArray(N),ie[N]=1),pe[N]!==k&&(o.vertexAttribDivisor(N,k),pe[N]=k)}function F(){const N=u.newAttributes,k=u.enabledAttributes;for(let se=0,ie=k.length;se<ie;se++)k[se]!==N[se]&&(o.disableVertexAttribArray(se),k[se]=0)}function z(N,k,se,ie,pe,fe,P){P===!0?o.vertexAttribIPointer(N,k,se,pe,fe):o.vertexAttribPointer(N,k,se,ie,pe,fe)}function O(N,k,se,ie){w();const pe=ie.attributes,fe=se.getAttributes(),P=k.defaultAttributeValues;for(const G in fe){const ae=fe[G];if(ae.location>=0){let Me=pe[G];if(Me===void 0&&(G==="instanceMatrix"&&N.instanceMatrix&&(Me=N.instanceMatrix),G==="instanceColor"&&N.instanceColor&&(Me=N.instanceColor)),Me!==void 0){const Se=Me.normalized,U=Me.itemSize,ne=t.get(Me);if(ne===void 0)continue;const _e=ne.buffer,Ae=ne.type,Be=ne.bytesPerElement,te=Ae===o.INT||Ae===o.UNSIGNED_INT||Me.gpuType===Nh;if(Me.isInterleavedBufferAttribute){const ue=Me.data,Ne=ue.stride,ke=Me.offset;if(ue.isInstancedInterleavedBuffer){for(let He=0;He<ae.locationSize;He++)x(ae.location+He,ue.meshPerAttribute);N.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let He=0;He<ae.locationSize;He++)y(ae.location+He);o.bindBuffer(o.ARRAY_BUFFER,_e);for(let He=0;He<ae.locationSize;He++)z(ae.location+He,U/ae.locationSize,Ae,Se,Ne*Be,(ke+U/ae.locationSize*He)*Be,te)}else{if(Me.isInstancedBufferAttribute){for(let ue=0;ue<ae.locationSize;ue++)x(ae.location+ue,Me.meshPerAttribute);N.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let ue=0;ue<ae.locationSize;ue++)y(ae.location+ue);o.bindBuffer(o.ARRAY_BUFFER,_e);for(let ue=0;ue<ae.locationSize;ue++)z(ae.location+ue,U/ae.locationSize,Ae,Se,U*Be,U/ae.locationSize*ue*Be,te)}}else if(P!==void 0){const Se=P[G];if(Se!==void 0)switch(Se.length){case 2:o.vertexAttrib2fv(ae.location,Se);break;case 3:o.vertexAttrib3fv(ae.location,Se);break;case 4:o.vertexAttrib4fv(ae.location,Se);break;default:o.vertexAttrib1fv(ae.location,Se)}}}}F()}function I(){Z();for(const N in s){const k=s[N];for(const se in k){const ie=k[se];for(const pe in ie)v(ie[pe].object),delete ie[pe];delete k[se]}delete s[N]}}function H(N){if(s[N.id]===void 0)return;const k=s[N.id];for(const se in k){const ie=k[se];for(const pe in ie)v(ie[pe].object),delete ie[pe];delete k[se]}delete s[N.id]}function L(N){for(const k in s){const se=s[k];if(se[N.id]===void 0)continue;const ie=se[N.id];for(const pe in ie)v(ie[pe].object),delete ie[pe];delete se[N.id]}}function Z(){A(),d=!0,u!==l&&(u=l,p(u.object))}function A(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Z,resetDefaultState:A,dispose:I,releaseStatesOfGeometry:H,releaseStatesOfProgram:L,initAttributes:w,enableAttribute:y,disableUnusedAttributes:F}}function v1(o,t,i){let s;function l(p){s=p}function u(p,v){o.drawArrays(s,p,v),i.update(v,s,1)}function d(p,v,g){g!==0&&(o.drawArraysInstanced(s,p,v,g),i.update(v,s,g))}function h(p,v,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,v,0,g);let b=0;for(let R=0;R<g;R++)b+=v[R];i.update(b,s,1)}function m(p,v,g,S){if(g===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let R=0;R<p.length;R++)d(p[R],v[R],S[R]);else{b.multiDrawArraysInstancedWEBGL(s,p,0,v,0,S,0,g);let R=0;for(let w=0;w<g;w++)R+=v[w]*S[w];i.update(R,s,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function x1(o,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(L){return!(L!==Ci&&s.convert(L)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(L){const Z=L===va&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==mi&&s.convert(L)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Ii&&!Z)}function m(L){if(L==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(st("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),b=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),F=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),z=o.getParameter(o.MAX_VARYING_VECTORS),O=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),I=o.getParameter(o.MAX_SAMPLES),H=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:S,maxTextures:b,maxVertexTextures:R,maxTextureSize:w,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:F,maxVaryings:z,maxFragmentUniforms:O,maxSamples:I,samples:H}}function S1(o){const t=this;let i=null,s=0,l=!1,u=!1;const d=new Rs,h=new ut,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const b=g.length!==0||S||s!==0||l;return l=S,s=g.length,b},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,S){i=v(g,S,0)},this.setState=function(g,S,b){const R=g.clippingPlanes,w=g.clipIntersection,y=g.clipShadows,x=o.get(g);if(!l||R===null||R.length===0||u&&!y)u?v(null):p();else{const F=u?0:s,z=F*4;let O=x.clippingState||null;m.value=O,O=v(R,S,z,b);for(let I=0;I!==z;++I)O[I]=i[I];x.clippingState=O,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=F}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(g,S,b,R){const w=g!==null?g.length:0;let y=null;if(w!==0){if(y=m.value,R!==!0||y===null){const x=b+w*4,F=S.matrixWorldInverse;h.getNormalMatrix(F),(y===null||y.length<x)&&(y=new Float32Array(x));for(let z=0,O=b;z!==w;++z,O+=4)d.copy(g[z]).applyMatrix4(F,h),d.normal.toArray(y,O),y[O+3]=d.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,y}}function y1(o){let t=new WeakMap;function i(d,h){return h===Vd?d.mapping=Us:h===kd&&(d.mapping=Ur),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===Vd||h===kd)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new nv(m.height);return p.fromEquirectangularTexture(o,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const ts=4,i_=[.125,.215,.35,.446,.526,.582],ws=20,M1=256,Io=new rv,a_=new Lt;let Ad=null,Rd=0,Cd=0,wd=!1;const b1=new re;class s_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,u={}){const{size:d=256,position:h=b1}=u;Ad=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),Cd=this._renderer.getActiveMipmapLevel(),wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=l_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=o_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ad,Rd,Cd),this._renderer.xr.enabled=wd,t.scissorTest=!1,Cr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Us||t.mapping===Ur?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ad=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),Cd=this._renderer.getActiveMipmapLevel(),wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:va,format:Ci,colorSpace:Or,depthBuffer:!1},l=r_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=r_(t,i,s);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=E1(u)),this._blurMaterial=A1(u,t,i),this._ggxMaterial=T1(u,t,i)}return l}_compileMaterial(t){const i=new ya(new Ni,t);this._renderer.compile(i,Io)}_sceneToCubeUV(t,i,s,l,u){const m=new pi(90,1,i,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,b=g.toneMapping;g.getClearColor(a_),g.toneMapping=Hi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ya(new Ko,new K_({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,y=w.material;let x=!1;const F=t.background;F?F.isColor&&(y.color.copy(F),t.background=null,x=!0):(y.color.copy(a_),x=!0);for(let z=0;z<6;z++){const O=z%3;O===0?(m.up.set(0,p[z],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+v[z],u.y,u.z)):O===1?(m.up.set(0,0,p[z]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+v[z],u.z)):(m.up.set(0,p[z],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+v[z]));const I=this._cubeSize;Cr(l,O*I,z>2?I:0,I,I),g.setRenderTarget(l),x&&g.render(w,m),g.render(t,m)}g.toneMapping=b,g.autoClear=S,t.background=F}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Us||t.mapping===Ur;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=l_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=o_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const h=u.uniforms;h.envMap.value=t;const m=this._cubeSize;Cr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,Io)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,u=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const m=d.uniforms,p=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-v*v),S=0+p*1.25,b=g*S,{_lodMax:R}=this,w=this._sizeLods[s],y=3*w*(s>R-ts?s-R+ts:0),x=4*(this._cubeSize-w);m.envMap.value=t.texture,m.roughness.value=b,m.mipInt.value=R-i,Cr(u,y,x,3*w,2*w),l.setRenderTarget(u),l.render(h,Io),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=R-s,Cr(t,y,x,3*w,2*w),l.setRenderTarget(t),l.render(h,Io)}_blur(t,i,s,l,u){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,s,l,"latitudinal",u),this._halfBlur(d,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&At("blur direction must be either latitudinal or longitudinal!");const v=3,g=this._lodMeshes[l];g.material=p;const S=p.uniforms,b=this._sizeLods[s]-1,R=isFinite(u)?Math.PI/(2*b):2*Math.PI/(2*ws-1),w=u/R,y=isFinite(u)?1+Math.floor(v*w):ws;y>ws&&st(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ws}`);const x=[];let F=0;for(let L=0;L<ws;++L){const Z=L/w,A=Math.exp(-Z*Z/2);x.push(A),L===0?F+=A:L<y&&(F+=2*A)}for(let L=0;L<x.length;L++)x[L]=x[L]/F;S.envMap.value=t.texture,S.samples.value=y,S.weights.value=x,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:z}=this;S.dTheta.value=R,S.mipInt.value=z-s;const O=this._sizeLods[l],I=3*O*(l>z-ts?l-z+ts:0),H=4*(this._cubeSize-O);Cr(i,I,H,3*O,2*O),m.setRenderTarget(i),m.render(g,Io)}}function E1(o){const t=[],i=[],s=[];let l=o;const u=o-ts+1+i_.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);t.push(h);let m=1/h;d>o-ts?m=i_[d-o+ts-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),v=-p,g=1+p,S=[v,v,g,v,g,g,v,v,g,g,v,g],b=6,R=6,w=3,y=2,x=1,F=new Float32Array(w*R*b),z=new Float32Array(y*R*b),O=new Float32Array(x*R*b);for(let H=0;H<b;H++){const L=H%3*2/3-1,Z=H>2?0:-1,A=[L,Z,0,L+2/3,Z,0,L+2/3,Z+1,0,L,Z,0,L+2/3,Z+1,0,L,Z+1,0];F.set(A,w*R*H),z.set(S,y*R*H);const N=[H,H,H,H,H,H];O.set(N,x*R*H)}const I=new Ni;I.setAttribute("position",new wi(F,w)),I.setAttribute("uv",new wi(z,y)),I.setAttribute("faceIndex",new wi(O,x)),s.push(new ya(I,null)),l>ts&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function r_(o,t,i){const s=new Gi(o,t,i);return s.texture.mapping=Hc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Cr(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function T1(o,t,i){return new ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:M1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kc(),fragmentShader:`

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
		`,blending:ma,depthTest:!1,depthWrite:!1})}function A1(o,t,i){const s=new Float32Array(ws),l=new re(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:kc(),fragmentShader:`

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
		`,blending:ma,depthTest:!1,depthWrite:!1})}function o_(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

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
		`,blending:ma,depthTest:!1,depthWrite:!1})}function l_(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function kc(){return`

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
	`}function R1(o){let t=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===Vd||m===kd,v=m===Us||m===Ur;if(p||v){let g=t.get(h);const S=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new s_(o)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const b=h.image;return p&&b&&b.height>0||v&&b&&l(b)?(i===null&&(i=new s_(o)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function C1(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&jo("WebGLRenderer: "+s+" extension not supported."),l}}}function w1(o,t,i,s){const l={},u=new WeakMap;function d(g){const S=g.target;S.index!==null&&t.remove(S.index);for(const R in S.attributes)t.remove(S.attributes[R]);S.removeEventListener("dispose",d),delete l[S.id];const b=u.get(S);b&&(t.remove(b),u.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(g,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function m(g){const S=g.attributes;for(const b in S)t.update(S[b],o.ARRAY_BUFFER)}function p(g){const S=[],b=g.index,R=g.attributes.position;let w=0;if(b!==null){const F=b.array;w=b.version;for(let z=0,O=F.length;z<O;z+=3){const I=F[z+0],H=F[z+1],L=F[z+2];S.push(I,H,H,L,L,I)}}else if(R!==void 0){const F=R.array;w=R.version;for(let z=0,O=F.length/3-1;z<O;z+=3){const I=z+0,H=z+1,L=z+2;S.push(I,H,H,L,L,I)}}else return;const y=new(X_(S)?J_:Q_)(S,1);y.version=w;const x=u.get(g);x&&t.remove(x),u.set(g,y)}function v(g){const S=u.get(g);if(S){const b=g.index;b!==null&&S.version<b.version&&p(g)}else p(g);return u.get(g)}return{get:h,update:m,getWireframeAttribute:v}}function N1(o,t,i){let s;function l(S){s=S}let u,d;function h(S){u=S.type,d=S.bytesPerElement}function m(S,b){o.drawElements(s,b,u,S*d),i.update(b,s,1)}function p(S,b,R){R!==0&&(o.drawElementsInstanced(s,b,u,S*d,R),i.update(b,s,R))}function v(S,b,R){if(R===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,b,0,u,S,0,R);let y=0;for(let x=0;x<R;x++)y+=b[x];i.update(y,s,1)}function g(S,b,R,w){if(R===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<S.length;x++)p(S[x]/d,b[x],w[x]);else{y.multiDrawElementsInstancedWEBGL(s,b,0,u,S,0,w,0,R);let x=0;for(let F=0;F<R;F++)x+=b[F]*w[F];i.update(x,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function D1(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:At("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function U1(o,t,i){const s=new WeakMap,l=new nn;function u(d,h,m){const p=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=v!==void 0?v.length:0;let S=s.get(h);if(S===void 0||S.count!==g){let N=function(){Z.dispose(),s.delete(h),h.removeEventListener("dispose",N)};var b=N;S!==void 0&&S.texture.dispose();const R=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],F=h.morphAttributes.normal||[],z=h.morphAttributes.color||[];let O=0;R===!0&&(O=1),w===!0&&(O=2),y===!0&&(O=3);let I=h.attributes.position.count*O,H=1;I>t.maxTextureSize&&(H=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const L=new Float32Array(I*H*4*g),Z=new q_(L,I,H,g);Z.type=Ii,Z.needsUpdate=!0;const A=O*4;for(let k=0;k<g;k++){const se=x[k],ie=F[k],pe=z[k],fe=I*H*4*k;for(let P=0;P<se.count;P++){const G=P*A;R===!0&&(l.fromBufferAttribute(se,P),L[fe+G+0]=l.x,L[fe+G+1]=l.y,L[fe+G+2]=l.z,L[fe+G+3]=0),w===!0&&(l.fromBufferAttribute(ie,P),L[fe+G+4]=l.x,L[fe+G+5]=l.y,L[fe+G+6]=l.z,L[fe+G+7]=0),y===!0&&(l.fromBufferAttribute(pe,P),L[fe+G+8]=l.x,L[fe+G+9]=l.y,L[fe+G+10]=l.z,L[fe+G+11]=pe.itemSize===4?l.w:1)}}S={count:g,texture:Z,size:new Vt(I,H)},s.set(h,S),h.addEventListener("dispose",N)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let R=0;for(let y=0;y<p.length;y++)R+=p[y];const w=h.morphTargetsRelative?1:1-R;m.getUniforms().setValue(o,"morphTargetBaseInfluence",w),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function L1(o,t,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,v=m.geometry,g=t.get(m,v);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return g}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const O1={[N_]:"LINEAR_TONE_MAPPING",[D_]:"REINHARD_TONE_MAPPING",[U_]:"CINEON_TONE_MAPPING",[L_]:"ACES_FILMIC_TONE_MAPPING",[P_]:"AGX_TONE_MAPPING",[z_]:"NEUTRAL_TONE_MAPPING",[O_]:"CUSTOM_TONE_MAPPING"};function P1(o,t,i,s,l){const u=new Gi(t,i,{type:o,depthBuffer:s,stencilBuffer:l}),d=new Gi(t,i,{type:va,depthBuffer:!1,stencilBuffer:!1}),h=new Ni;h.setAttribute("position",new _a([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new _a([0,2,0,0,2,0],2));const m=new wM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new ya(h,m),v=new rv(-1,1,1,-1,0,1);let g=null,S=null,b=!1,R,w=null,y=[],x=!1;this.setSize=function(F,z){u.setSize(F,z),d.setSize(F,z);for(let O=0;O<y.length;O++){const I=y[O];I.setSize&&I.setSize(F,z)}},this.setEffects=function(F){y=F,x=y.length>0&&y[0].isRenderPass===!0;const z=u.width,O=u.height;for(let I=0;I<y.length;I++){const H=y[I];H.setSize&&H.setSize(z,O)}},this.begin=function(F,z){if(b||F.toneMapping===Hi&&y.length===0)return!1;if(w=z,z!==null){const O=z.width,I=z.height;(u.width!==O||u.height!==I)&&this.setSize(O,I)}return x===!1&&F.setRenderTarget(u),R=F.toneMapping,F.toneMapping=Hi,!0},this.hasRenderPass=function(){return x},this.end=function(F,z){F.toneMapping=R,b=!0;let O=u,I=d;for(let H=0;H<y.length;H++){const L=y[H];if(L.enabled!==!1&&(L.render(F,I,O,z),L.needsSwap!==!1)){const Z=O;O=I,I=Z}}if(g!==F.outputColorSpace||S!==F.toneMapping){g=F.outputColorSpace,S=F.toneMapping,m.defines={},bt.getTransfer(g)===It&&(m.defines.SRGB_TRANSFER="");const H=O1[S];H&&(m.defines[H]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=O.texture,F.setRenderTarget(w),F.render(p,v),w=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){u.dispose(),d.dispose(),h.dispose(),m.dispose()}}const lv=new Nn,Ah=new Xo(1,1),cv=new q_,uv=new iM,fv=new tv,c_=[],u_=[],f_=new Float32Array(16),d_=new Float32Array(9),h_=new Float32Array(4);function Fr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let u=c_[l];if(u===void 0&&(u=new Float32Array(l),c_[l]=u),t!==0){s.toArray(u,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(u,h)}return u}function hn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function pn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function jc(o,t){let i=u_[t];i===void 0&&(i=new Int32Array(t),u_[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function z1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function F1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2fv(this.addr,t),pn(i,t)}}function I1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(hn(i,t))return;o.uniform3fv(this.addr,t),pn(i,t)}}function B1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4fv(this.addr,t),pn(i,t)}}function H1(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(hn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),pn(i,t)}else{if(hn(i,s))return;h_.set(s),o.uniformMatrix2fv(this.addr,!1,h_),pn(i,s)}}function G1(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(hn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),pn(i,t)}else{if(hn(i,s))return;d_.set(s),o.uniformMatrix3fv(this.addr,!1,d_),pn(i,s)}}function V1(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(hn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),pn(i,t)}else{if(hn(i,s))return;f_.set(s),o.uniformMatrix4fv(this.addr,!1,f_),pn(i,s)}}function k1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function j1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2iv(this.addr,t),pn(i,t)}}function X1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;o.uniform3iv(this.addr,t),pn(i,t)}}function q1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4iv(this.addr,t),pn(i,t)}}function W1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function Y1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2uiv(this.addr,t),pn(i,t)}}function Z1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;o.uniform3uiv(this.addr,t),pn(i,t)}}function K1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4uiv(this.addr,t),pn(i,t)}}function Q1(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Ah.compareFunction=i.isReversedDepthBuffer()?Fh:zh,u=Ah):u=lv,i.setTexture2D(t||u,l)}function J1(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||uv,l)}function $1(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||fv,l)}function eT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||cv,l)}function tT(o){switch(o){case 5126:return z1;case 35664:return F1;case 35665:return I1;case 35666:return B1;case 35674:return H1;case 35675:return G1;case 35676:return V1;case 5124:case 35670:return k1;case 35667:case 35671:return j1;case 35668:case 35672:return X1;case 35669:case 35673:return q1;case 5125:return W1;case 36294:return Y1;case 36295:return Z1;case 36296:return K1;case 35678:case 36198:case 36298:case 36306:case 35682:return Q1;case 35679:case 36299:case 36307:return J1;case 35680:case 36300:case 36308:case 36293:return $1;case 36289:case 36303:case 36311:case 36292:return eT}}function nT(o,t){o.uniform1fv(this.addr,t)}function iT(o,t){const i=Fr(t,this.size,2);o.uniform2fv(this.addr,i)}function aT(o,t){const i=Fr(t,this.size,3);o.uniform3fv(this.addr,i)}function sT(o,t){const i=Fr(t,this.size,4);o.uniform4fv(this.addr,i)}function rT(o,t){const i=Fr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function oT(o,t){const i=Fr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function lT(o,t){const i=Fr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function cT(o,t){o.uniform1iv(this.addr,t)}function uT(o,t){o.uniform2iv(this.addr,t)}function fT(o,t){o.uniform3iv(this.addr,t)}function dT(o,t){o.uniform4iv(this.addr,t)}function hT(o,t){o.uniform1uiv(this.addr,t)}function pT(o,t){o.uniform2uiv(this.addr,t)}function mT(o,t){o.uniform3uiv(this.addr,t)}function gT(o,t){o.uniform4uiv(this.addr,t)}function _T(o,t,i){const s=this.cache,l=t.length,u=jc(i,l);hn(s,u)||(o.uniform1iv(this.addr,u),pn(s,u));let d;this.type===o.SAMPLER_2D_SHADOW?d=Ah:d=lv;for(let h=0;h!==l;++h)i.setTexture2D(t[h]||d,u[h])}function vT(o,t,i){const s=this.cache,l=t.length,u=jc(i,l);hn(s,u)||(o.uniform1iv(this.addr,u),pn(s,u));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||uv,u[d])}function xT(o,t,i){const s=this.cache,l=t.length,u=jc(i,l);hn(s,u)||(o.uniform1iv(this.addr,u),pn(s,u));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||fv,u[d])}function ST(o,t,i){const s=this.cache,l=t.length,u=jc(i,l);hn(s,u)||(o.uniform1iv(this.addr,u),pn(s,u));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||cv,u[d])}function yT(o){switch(o){case 5126:return nT;case 35664:return iT;case 35665:return aT;case 35666:return sT;case 35674:return rT;case 35675:return oT;case 35676:return lT;case 5124:case 35670:return cT;case 35667:case 35671:return uT;case 35668:case 35672:return fT;case 35669:case 35673:return dT;case 5125:return hT;case 36294:return pT;case 36295:return mT;case 36296:return gT;case 35678:case 36198:case 36298:case 36306:case 35682:return _T;case 35679:case 36299:case 36307:return vT;case 35680:case 36300:case 36308:case 36293:return xT;case 36289:case 36303:case 36311:case 36292:return ST}}class MT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=tT(i.type)}}class bT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=yT(i.type)}}class ET{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(t,i[h.id],s)}}}const Nd=/(\w+)(\])?(\[|\.)?/g;function p_(o,t){o.seq.push(t),o.map[t.id]=t}function TT(o,t,i){const s=o.name,l=s.length;for(Nd.lastIndex=0;;){const u=Nd.exec(s),d=Nd.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){p_(i,p===void 0?new MT(h,o,t):new bT(h,o,t));break}else{let g=i.map[h];g===void 0&&(g=new ET(h),p_(i,g)),i=g}}}class zc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=t.getActiveUniform(i,d),m=t.getUniformLocation(i,h.name);TT(h,m,this)}const l=[],u=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):u.push(d);l.length>0&&(this.seq=l.concat(u))}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const d=t[l];d.id in i&&s.push(d)}return s}}function m_(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const AT=37297;let RT=0;function CT(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let d=l;d<u;d++){const h=d+1;s.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const g_=new ut;function wT(o){bt._getMatrix(g_,bt.workingColorSpace,o);const t=`mat3( ${g_.elements.map(i=>i.toFixed(4))} )`;switch(bt.getTransfer(o)){case Fc:return[t,"LinearTransferOETF"];case It:return[t,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function __(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(s&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+CT(o.getShaderSource(t),h)}else return u}function NT(o,t){const i=wT(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const DT={[N_]:"Linear",[D_]:"Reinhard",[U_]:"Cineon",[L_]:"ACESFilmic",[P_]:"AgX",[z_]:"Neutral",[O_]:"Custom"};function UT(o,t){const i=DT[t];return i===void 0?(st("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Nc=new re;function LT(){bt.getLuminanceCoefficients(Nc);const o=Nc.x.toFixed(4),t=Nc.y.toFixed(4),i=Nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function OT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function PT(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function zT(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(t,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function Go(o){return o!==""}function v_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function x_(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const FT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rh(o){return o.replace(FT,BT)}const IT=new Map;function BT(o,t){let i=ft[t];if(i===void 0){const s=IT.get(t);if(s!==void 0)i=ft[s],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Rh(i)}const HT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function S_(o){return o.replace(HT,GT)}function GT(o,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function y_(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}const VT={[Dc]:"SHADOWMAP_TYPE_PCF",[Ho]:"SHADOWMAP_TYPE_VSM"};function kT(o){return VT[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const jT={[Us]:"ENVMAP_TYPE_CUBE",[Ur]:"ENVMAP_TYPE_CUBE",[Hc]:"ENVMAP_TYPE_CUBE_UV"};function XT(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":jT[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const qT={[Ur]:"ENVMAP_MODE_REFRACTION"};function WT(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":qT[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const YT={[w_]:"ENVMAP_BLENDING_MULTIPLY",[Fy]:"ENVMAP_BLENDING_MIX",[Iy]:"ENVMAP_BLENDING_ADD"};function ZT(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":YT[o.combine]||"ENVMAP_BLENDING_NONE"}function KT(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function QT(o,t,i,s){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=kT(i),p=XT(i),v=WT(i),g=ZT(i),S=KT(i),b=OT(i),R=PT(u),w=l.createProgram();let y,x,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Go).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Go).join(`
`),x.length>0&&(x+=`
`)):(y=[y_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),x=[y_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Hi?"#define TONE_MAPPING":"",i.toneMapping!==Hi?ft.tonemapping_pars_fragment:"",i.toneMapping!==Hi?UT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,NT("linearToOutputTexel",i.outputColorSpace),LT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Go).join(`
`)),d=Rh(d),d=v_(d,i),d=x_(d,i),h=Rh(h),h=v_(h,i),h=x_(h,i),d=S_(d),h=S_(h),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,y=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===Pg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Pg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const z=F+y+d,O=F+x+h,I=m_(l,l.VERTEX_SHADER,z),H=m_(l,l.FRAGMENT_SHADER,O);l.attachShader(w,I),l.attachShader(w,H),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function L(k){if(o.debug.checkShaderErrors){const se=l.getProgramInfoLog(w)||"",ie=l.getShaderInfoLog(I)||"",pe=l.getShaderInfoLog(H)||"",fe=se.trim(),P=ie.trim(),G=pe.trim();let ae=!0,Me=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ae=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,I,H);else{const Se=__(l,I,"vertex"),U=__(l,H,"fragment");At("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+fe+`
`+Se+`
`+U)}else fe!==""?st("WebGLProgram: Program Info Log:",fe):(P===""||G==="")&&(Me=!1);Me&&(k.diagnostics={runnable:ae,programLog:fe,vertexShader:{log:P,prefix:y},fragmentShader:{log:G,prefix:x}})}l.deleteShader(I),l.deleteShader(H),Z=new zc(l,w),A=zT(l,w)}let Z;this.getUniforms=function(){return Z===void 0&&L(this),Z};let A;this.getAttributes=function(){return A===void 0&&L(this),A};let N=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=l.getProgramParameter(w,AT)),N},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=RT++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=I,this.fragmentShader=H,this}let JT=0;class $T{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new eA(t),i.set(t,s)),s}}class eA{constructor(t){this.id=JT++,this.code=t,this.usedTimes=0}}function tA(o,t,i,s,l,u,d){const h=new Y_,m=new $T,p=new Set,v=[],g=new Map,S=l.logarithmicDepthBuffer;let b=l.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(A){return p.add(A),A===0?"uv":`uv${A}`}function y(A,N,k,se,ie){const pe=se.fog,fe=ie.geometry,P=A.isMeshStandardMaterial?se.environment:null,G=(A.isMeshStandardMaterial?i:t).get(A.envMap||P),ae=G&&G.mapping===Hc?G.image.height:null,Me=R[A.type];A.precision!==null&&(b=l.getMaxPrecision(A.precision),b!==A.precision&&st("WebGLProgram.getParameters:",A.precision,"not supported, using",b,"instead."));const Se=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,U=Se!==void 0?Se.length:0;let ne=0;fe.morphAttributes.position!==void 0&&(ne=1),fe.morphAttributes.normal!==void 0&&(ne=2),fe.morphAttributes.color!==void 0&&(ne=3);let _e,Ae,Be,te;if(Me){const Mt=Fi[Me];_e=Mt.vertexShader,Ae=Mt.fragmentShader}else _e=A.vertexShader,Ae=A.fragmentShader,m.update(A),Be=m.getVertexShaderID(A),te=m.getFragmentShaderID(A);const ue=o.getRenderTarget(),Ne=o.state.buffers.depth.getReversed(),ke=ie.isInstancedMesh===!0,He=ie.isBatchedMesh===!0,dt=!!A.map,Kt=!!A.matcap,gt=!!G,ht=!!A.aoMap,Rt=!!A.lightMap,rt=!!A.bumpMap,Qt=!!A.normalMap,V=!!A.displacementMap,Wt=!!A.emissiveMap,yt=!!A.metalnessMap,Dt=!!A.roughnessMap,We=A.anisotropy>0,D=A.clearcoat>0,M=A.dispersion>0,q=A.iridescence>0,he=A.sheen>0,xe=A.transmission>0,ce=We&&!!A.anisotropyMap,Ze=D&&!!A.clearcoatMap,Ce=D&&!!A.clearcoatNormalMap,je=D&&!!A.clearcoatRoughnessMap,tt=q&&!!A.iridescenceMap,be=q&&!!A.iridescenceThicknessMap,Ee=he&&!!A.sheenColorMap,Fe=he&&!!A.sheenRoughnessMap,Pe=!!A.specularMap,we=!!A.specularColorMap,lt=!!A.specularIntensityMap,X=xe&&!!A.transmissionMap,Ue=xe&&!!A.thicknessMap,Te=!!A.gradientMap,ze=!!A.alphaMap,ye=A.alphaTest>0,ve=!!A.alphaHash,Re=!!A.extensions;let nt=Hi;A.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(nt=o.toneMapping);const Ot={shaderID:Me,shaderType:A.type,shaderName:A.name,vertexShader:_e,fragmentShader:Ae,defines:A.defines,customVertexShaderID:Be,customFragmentShaderID:te,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:b,batching:He,batchingColor:He&&ie._colorsTexture!==null,instancing:ke,instancingColor:ke&&ie.instanceColor!==null,instancingMorph:ke&&ie.morphTexture!==null,outputColorSpace:ue===null?o.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Or,alphaToCoverage:!!A.alphaToCoverage,map:dt,matcap:Kt,envMap:gt,envMapMode:gt&&G.mapping,envMapCubeUVHeight:ae,aoMap:ht,lightMap:Rt,bumpMap:rt,normalMap:Qt,displacementMap:V,emissiveMap:Wt,normalMapObjectSpace:Qt&&A.normalMapType===Vy,normalMapTangentSpace:Qt&&A.normalMapType===Gy,metalnessMap:yt,roughnessMap:Dt,anisotropy:We,anisotropyMap:ce,clearcoat:D,clearcoatMap:Ze,clearcoatNormalMap:Ce,clearcoatRoughnessMap:je,dispersion:M,iridescence:q,iridescenceMap:tt,iridescenceThicknessMap:be,sheen:he,sheenColorMap:Ee,sheenRoughnessMap:Fe,specularMap:Pe,specularColorMap:we,specularIntensityMap:lt,transmission:xe,transmissionMap:X,thicknessMap:Ue,gradientMap:Te,opaque:A.transparent===!1&&A.blending===wr&&A.alphaToCoverage===!1,alphaMap:ze,alphaTest:ye,alphaHash:ve,combine:A.combine,mapUv:dt&&w(A.map.channel),aoMapUv:ht&&w(A.aoMap.channel),lightMapUv:Rt&&w(A.lightMap.channel),bumpMapUv:rt&&w(A.bumpMap.channel),normalMapUv:Qt&&w(A.normalMap.channel),displacementMapUv:V&&w(A.displacementMap.channel),emissiveMapUv:Wt&&w(A.emissiveMap.channel),metalnessMapUv:yt&&w(A.metalnessMap.channel),roughnessMapUv:Dt&&w(A.roughnessMap.channel),anisotropyMapUv:ce&&w(A.anisotropyMap.channel),clearcoatMapUv:Ze&&w(A.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&w(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:je&&w(A.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&w(A.iridescenceMap.channel),iridescenceThicknessMapUv:be&&w(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&w(A.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&w(A.sheenRoughnessMap.channel),specularMapUv:Pe&&w(A.specularMap.channel),specularColorMapUv:we&&w(A.specularColorMap.channel),specularIntensityMapUv:lt&&w(A.specularIntensityMap.channel),transmissionMapUv:X&&w(A.transmissionMap.channel),thicknessMapUv:Ue&&w(A.thicknessMap.channel),alphaMapUv:ze&&w(A.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(Qt||We),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:ie.isPoints===!0&&!!fe.attributes.uv&&(dt||ze),fog:!!pe,useFog:A.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Ne,skinning:ie.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ne,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:A.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:nt,decodeVideoTexture:dt&&A.map.isVideoTexture===!0&&bt.getTransfer(A.map.colorSpace)===It,decodeVideoTextureEmissive:Wt&&A.emissiveMap.isVideoTexture===!0&&bt.getTransfer(A.emissiveMap.colorSpace)===It,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===ha,flipSided:A.side===Xn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Re&&A.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&A.extensions.multiDraw===!0||He)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ot.vertexUv1s=p.has(1),Ot.vertexUv2s=p.has(2),Ot.vertexUv3s=p.has(3),p.clear(),Ot}function x(A){const N=[];if(A.shaderID?N.push(A.shaderID):(N.push(A.customVertexShaderID),N.push(A.customFragmentShaderID)),A.defines!==void 0)for(const k in A.defines)N.push(k),N.push(A.defines[k]);return A.isRawShaderMaterial===!1&&(F(N,A),z(N,A),N.push(o.outputColorSpace)),N.push(A.customProgramCacheKey),N.join()}function F(A,N){A.push(N.precision),A.push(N.outputColorSpace),A.push(N.envMapMode),A.push(N.envMapCubeUVHeight),A.push(N.mapUv),A.push(N.alphaMapUv),A.push(N.lightMapUv),A.push(N.aoMapUv),A.push(N.bumpMapUv),A.push(N.normalMapUv),A.push(N.displacementMapUv),A.push(N.emissiveMapUv),A.push(N.metalnessMapUv),A.push(N.roughnessMapUv),A.push(N.anisotropyMapUv),A.push(N.clearcoatMapUv),A.push(N.clearcoatNormalMapUv),A.push(N.clearcoatRoughnessMapUv),A.push(N.iridescenceMapUv),A.push(N.iridescenceThicknessMapUv),A.push(N.sheenColorMapUv),A.push(N.sheenRoughnessMapUv),A.push(N.specularMapUv),A.push(N.specularColorMapUv),A.push(N.specularIntensityMapUv),A.push(N.transmissionMapUv),A.push(N.thicknessMapUv),A.push(N.combine),A.push(N.fogExp2),A.push(N.sizeAttenuation),A.push(N.morphTargetsCount),A.push(N.morphAttributeCount),A.push(N.numDirLights),A.push(N.numPointLights),A.push(N.numSpotLights),A.push(N.numSpotLightMaps),A.push(N.numHemiLights),A.push(N.numRectAreaLights),A.push(N.numDirLightShadows),A.push(N.numPointLightShadows),A.push(N.numSpotLightShadows),A.push(N.numSpotLightShadowsWithMaps),A.push(N.numLightProbes),A.push(N.shadowMapType),A.push(N.toneMapping),A.push(N.numClippingPlanes),A.push(N.numClipIntersection),A.push(N.depthPacking)}function z(A,N){h.disableAll(),N.instancing&&h.enable(0),N.instancingColor&&h.enable(1),N.instancingMorph&&h.enable(2),N.matcap&&h.enable(3),N.envMap&&h.enable(4),N.normalMapObjectSpace&&h.enable(5),N.normalMapTangentSpace&&h.enable(6),N.clearcoat&&h.enable(7),N.iridescence&&h.enable(8),N.alphaTest&&h.enable(9),N.vertexColors&&h.enable(10),N.vertexAlphas&&h.enable(11),N.vertexUv1s&&h.enable(12),N.vertexUv2s&&h.enable(13),N.vertexUv3s&&h.enable(14),N.vertexTangents&&h.enable(15),N.anisotropy&&h.enable(16),N.alphaHash&&h.enable(17),N.batching&&h.enable(18),N.dispersion&&h.enable(19),N.batchingColor&&h.enable(20),N.gradientMap&&h.enable(21),A.push(h.mask),h.disableAll(),N.fog&&h.enable(0),N.useFog&&h.enable(1),N.flatShading&&h.enable(2),N.logarithmicDepthBuffer&&h.enable(3),N.reversedDepthBuffer&&h.enable(4),N.skinning&&h.enable(5),N.morphTargets&&h.enable(6),N.morphNormals&&h.enable(7),N.morphColors&&h.enable(8),N.premultipliedAlpha&&h.enable(9),N.shadowMapEnabled&&h.enable(10),N.doubleSided&&h.enable(11),N.flipSided&&h.enable(12),N.useDepthPacking&&h.enable(13),N.dithering&&h.enable(14),N.transmission&&h.enable(15),N.sheen&&h.enable(16),N.opaque&&h.enable(17),N.pointsUvs&&h.enable(18),N.decodeVideoTexture&&h.enable(19),N.decodeVideoTextureEmissive&&h.enable(20),N.alphaToCoverage&&h.enable(21),A.push(h.mask)}function O(A){const N=R[A.type];let k;if(N){const se=Fi[N];k=gM.clone(se.uniforms)}else k=A.uniforms;return k}function I(A,N){let k=g.get(N);return k!==void 0?++k.usedTimes:(k=new QT(o,N,A,u),v.push(k),g.set(N,k)),k}function H(A){if(--A.usedTimes===0){const N=v.indexOf(A);v[N]=v[v.length-1],v.pop(),g.delete(A.cacheKey),A.destroy()}}function L(A){m.remove(A)}function Z(){m.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:O,acquireProgram:I,releaseProgram:H,releaseShaderCache:L,programs:v,dispose:Z}}function nA(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function iA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function M_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function b_(){const o=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function d(g,S,b,R,w,y){let x=o[t];return x===void 0?(x={id:g.id,object:g,geometry:S,material:b,groupOrder:R,renderOrder:g.renderOrder,z:w,group:y},o[t]=x):(x.id=g.id,x.object=g,x.geometry=S,x.material=b,x.groupOrder=R,x.renderOrder=g.renderOrder,x.z=w,x.group=y),t++,x}function h(g,S,b,R,w,y){const x=d(g,S,b,R,w,y);b.transmission>0?s.push(x):b.transparent===!0?l.push(x):i.push(x)}function m(g,S,b,R,w,y){const x=d(g,S,b,R,w,y);b.transmission>0?s.unshift(x):b.transparent===!0?l.unshift(x):i.unshift(x)}function p(g,S){i.length>1&&i.sort(g||iA),s.length>1&&s.sort(S||M_),l.length>1&&l.sort(S||M_)}function v(){for(let g=t,S=o.length;g<S;g++){const b=o[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:h,unshift:m,finish:v,sort:p}}function aA(){let o=new WeakMap;function t(s,l){const u=o.get(s);let d;return u===void 0?(d=new b_,o.set(s,[d])):l>=u.length?(d=new b_,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function sA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new re,color:new Lt};break;case"SpotLight":i={position:new re,direction:new re,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new re,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new re,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":i={color:new Lt,position:new re,halfWidth:new re,halfHeight:new re};break}return o[t.id]=i,i}}}function rA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let oA=0;function lA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function cA(o){const t=new sA,i=rA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new re);const l=new re,u=new an,d=new an;function h(p){let v=0,g=0,S=0;for(let A=0;A<9;A++)s.probe[A].set(0,0,0);let b=0,R=0,w=0,y=0,x=0,F=0,z=0,O=0,I=0,H=0,L=0;p.sort(lA);for(let A=0,N=p.length;A<N;A++){const k=p[A],se=k.color,ie=k.intensity,pe=k.distance;let fe=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Lr?fe=k.shadow.map.texture:fe=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)v+=se.r*ie,g+=se.g*ie,S+=se.b*ie;else if(k.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(k.sh.coefficients[P],ie);L++}else if(k.isDirectionalLight){const P=t.get(k);if(P.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const G=k.shadow,ae=i.get(k);ae.shadowIntensity=G.intensity,ae.shadowBias=G.bias,ae.shadowNormalBias=G.normalBias,ae.shadowRadius=G.radius,ae.shadowMapSize=G.mapSize,s.directionalShadow[b]=ae,s.directionalShadowMap[b]=fe,s.directionalShadowMatrix[b]=k.shadow.matrix,F++}s.directional[b]=P,b++}else if(k.isSpotLight){const P=t.get(k);P.position.setFromMatrixPosition(k.matrixWorld),P.color.copy(se).multiplyScalar(ie),P.distance=pe,P.coneCos=Math.cos(k.angle),P.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),P.decay=k.decay,s.spot[w]=P;const G=k.shadow;if(k.map&&(s.spotLightMap[I]=k.map,I++,G.updateMatrices(k),k.castShadow&&H++),s.spotLightMatrix[w]=G.matrix,k.castShadow){const ae=i.get(k);ae.shadowIntensity=G.intensity,ae.shadowBias=G.bias,ae.shadowNormalBias=G.normalBias,ae.shadowRadius=G.radius,ae.shadowMapSize=G.mapSize,s.spotShadow[w]=ae,s.spotShadowMap[w]=fe,O++}w++}else if(k.isRectAreaLight){const P=t.get(k);P.color.copy(se).multiplyScalar(ie),P.halfWidth.set(k.width*.5,0,0),P.halfHeight.set(0,k.height*.5,0),s.rectArea[y]=P,y++}else if(k.isPointLight){const P=t.get(k);if(P.color.copy(k.color).multiplyScalar(k.intensity),P.distance=k.distance,P.decay=k.decay,k.castShadow){const G=k.shadow,ae=i.get(k);ae.shadowIntensity=G.intensity,ae.shadowBias=G.bias,ae.shadowNormalBias=G.normalBias,ae.shadowRadius=G.radius,ae.shadowMapSize=G.mapSize,ae.shadowCameraNear=G.camera.near,ae.shadowCameraFar=G.camera.far,s.pointShadow[R]=ae,s.pointShadowMap[R]=fe,s.pointShadowMatrix[R]=k.shadow.matrix,z++}s.point[R]=P,R++}else if(k.isHemisphereLight){const P=t.get(k);P.skyColor.copy(k.color).multiplyScalar(ie),P.groundColor.copy(k.groundColor).multiplyScalar(ie),s.hemi[x]=P,x++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Oe.LTC_FLOAT_1,s.rectAreaLTC2=Oe.LTC_FLOAT_2):(s.rectAreaLTC1=Oe.LTC_HALF_1,s.rectAreaLTC2=Oe.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=g,s.ambient[2]=S;const Z=s.hash;(Z.directionalLength!==b||Z.pointLength!==R||Z.spotLength!==w||Z.rectAreaLength!==y||Z.hemiLength!==x||Z.numDirectionalShadows!==F||Z.numPointShadows!==z||Z.numSpotShadows!==O||Z.numSpotMaps!==I||Z.numLightProbes!==L)&&(s.directional.length=b,s.spot.length=w,s.rectArea.length=y,s.point.length=R,s.hemi.length=x,s.directionalShadow.length=F,s.directionalShadowMap.length=F,s.pointShadow.length=z,s.pointShadowMap.length=z,s.spotShadow.length=O,s.spotShadowMap.length=O,s.directionalShadowMatrix.length=F,s.pointShadowMatrix.length=z,s.spotLightMatrix.length=O+I-H,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=L,Z.directionalLength=b,Z.pointLength=R,Z.spotLength=w,Z.rectAreaLength=y,Z.hemiLength=x,Z.numDirectionalShadows=F,Z.numPointShadows=z,Z.numSpotShadows=O,Z.numSpotMaps=I,Z.numLightProbes=L,s.version=oA++)}function m(p,v){let g=0,S=0,b=0,R=0,w=0;const y=v.matrixWorldInverse;for(let x=0,F=p.length;x<F;x++){const z=p[x];if(z.isDirectionalLight){const O=s.directional[g];O.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(y),g++}else if(z.isSpotLight){const O=s.spot[b];O.position.setFromMatrixPosition(z.matrixWorld),O.position.applyMatrix4(y),O.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(y),b++}else if(z.isRectAreaLight){const O=s.rectArea[R];O.position.setFromMatrixPosition(z.matrixWorld),O.position.applyMatrix4(y),d.identity(),u.copy(z.matrixWorld),u.premultiply(y),d.extractRotation(u),O.halfWidth.set(z.width*.5,0,0),O.halfHeight.set(0,z.height*.5,0),O.halfWidth.applyMatrix4(d),O.halfHeight.applyMatrix4(d),R++}else if(z.isPointLight){const O=s.point[S];O.position.setFromMatrixPosition(z.matrixWorld),O.position.applyMatrix4(y),S++}else if(z.isHemisphereLight){const O=s.hemi[w];O.direction.setFromMatrixPosition(z.matrixWorld),O.direction.transformDirection(y),w++}}}return{setup:h,setupView:m,state:s}}function E_(o){const t=new cA(o),i=[],s=[];function l(v){p.camera=v,i.length=0,s.length=0}function u(v){i.push(v)}function d(v){s.push(v)}function h(){t.setup(i)}function m(v){t.setupView(i,v)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function uA(o){let t=new WeakMap;function i(l,u=0){const d=t.get(l);let h;return d===void 0?(h=new E_(o),t.set(l,[h])):u>=d.length?(h=new E_(o),d.push(h)):h=d[u],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const fA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dA=`uniform sampler2D shadow_pass;
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
}`,hA=[new re(1,0,0),new re(-1,0,0),new re(0,1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1)],pA=[new re(0,-1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1),new re(0,-1,0),new re(0,-1,0)],T_=new an,Bo=new re,Dd=new re;function mA(o,t,i){let s=new iv;const l=new Vt,u=new Vt,d=new nn,h=new NM,m=new DM,p={},v=i.maxTextureSize,g={[ns]:Xn,[Xn]:ns,[ha]:ha},S=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:fA,fragmentShader:dA}),b=S.clone();b.defines.HORIZONTAL_PASS=1;const R=new Ni;R.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new ya(R,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dc;let x=this.type;this.render=function(H,L,Z){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||H.length===0)return;H.type===vy&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),H.type=Dc);const A=o.getRenderTarget(),N=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),se=o.state;se.setBlending(ma),se.buffers.depth.getReversed()===!0?se.buffers.color.setClear(0,0,0,0):se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const ie=x!==this.type;ie&&L.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach(fe=>fe.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,fe=H.length;pe<fe;pe++){const P=H[pe],G=P.shadow;if(G===void 0){st("WebGLShadowMap:",P,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const ae=G.getFrameExtents();if(l.multiply(ae),u.copy(G.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/ae.x),l.x=u.x*ae.x,G.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/ae.y),l.y=u.y*ae.y,G.mapSize.y=u.y)),G.map===null||ie===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Ho){if(P.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Gi(l.x,l.y,{format:Lr,type:va,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),G.map.texture.name=P.name+".shadowMap",G.map.depthTexture=new Xo(l.x,l.y,Ii),G.map.depthTexture.name=P.name+".shadowMapDepth",G.map.depthTexture.format=xa,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=wn,G.map.depthTexture.magFilter=wn}else{P.isPointLight?(G.map=new nv(l.x),G.map.depthTexture=new CM(l.x,Vi)):(G.map=new Gi(l.x,l.y),G.map.depthTexture=new Xo(l.x,l.y,Vi)),G.map.depthTexture.name=P.name+".shadowMap",G.map.depthTexture.format=xa;const Se=o.state.buffers.depth.getReversed();this.type===Dc?(G.map.depthTexture.compareFunction=Se?Fh:zh,G.map.depthTexture.minFilter=Pn,G.map.depthTexture.magFilter=Pn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=wn,G.map.depthTexture.magFilter=wn)}G.camera.updateProjectionMatrix()}const Me=G.map.isWebGLCubeRenderTarget?6:1;for(let Se=0;Se<Me;Se++){if(G.map.isWebGLCubeRenderTarget)o.setRenderTarget(G.map,Se),o.clear();else{Se===0&&(o.setRenderTarget(G.map),o.clear());const U=G.getViewport(Se);d.set(u.x*U.x,u.y*U.y,u.x*U.z,u.y*U.w),se.viewport(d)}if(P.isPointLight){const U=G.camera,ne=G.matrix,_e=P.distance||U.far;_e!==U.far&&(U.far=_e,U.updateProjectionMatrix()),Bo.setFromMatrixPosition(P.matrixWorld),U.position.copy(Bo),Dd.copy(U.position),Dd.add(hA[Se]),U.up.copy(pA[Se]),U.lookAt(Dd),U.updateMatrixWorld(),ne.makeTranslation(-Bo.x,-Bo.y,-Bo.z),T_.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),G._frustum.setFromProjectionMatrix(T_,U.coordinateSystem,U.reversedDepth)}else G.updateMatrices(P);s=G.getFrustum(),O(L,Z,G.camera,P,this.type)}G.isPointLightShadow!==!0&&this.type===Ho&&F(G,Z),G.needsUpdate=!1}x=this.type,y.needsUpdate=!1,o.setRenderTarget(A,N,k)};function F(H,L){const Z=t.update(w);S.defines.VSM_SAMPLES!==H.blurSamples&&(S.defines.VSM_SAMPLES=H.blurSamples,b.defines.VSM_SAMPLES=H.blurSamples,S.needsUpdate=!0,b.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Gi(l.x,l.y,{format:Lr,type:va})),S.uniforms.shadow_pass.value=H.map.depthTexture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(L,null,Z,S,w,null),b.uniforms.shadow_pass.value=H.mapPass.texture,b.uniforms.resolution.value=H.mapSize,b.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(L,null,Z,b,w,null)}function z(H,L,Z,A){let N=null;const k=Z.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(k!==void 0)N=k;else if(N=Z.isPointLight===!0?m:h,o.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const se=N.uuid,ie=L.uuid;let pe=p[se];pe===void 0&&(pe={},p[se]=pe);let fe=pe[ie];fe===void 0&&(fe=N.clone(),pe[ie]=fe,L.addEventListener("dispose",I)),N=fe}if(N.visible=L.visible,N.wireframe=L.wireframe,A===Ho?N.side=L.shadowSide!==null?L.shadowSide:L.side:N.side=L.shadowSide!==null?L.shadowSide:g[L.side],N.alphaMap=L.alphaMap,N.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,N.map=L.map,N.clipShadows=L.clipShadows,N.clippingPlanes=L.clippingPlanes,N.clipIntersection=L.clipIntersection,N.displacementMap=L.displacementMap,N.displacementScale=L.displacementScale,N.displacementBias=L.displacementBias,N.wireframeLinewidth=L.wireframeLinewidth,N.linewidth=L.linewidth,Z.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const se=o.properties.get(N);se.light=Z}return N}function O(H,L,Z,A,N){if(H.visible===!1)return;if(H.layers.test(L.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&N===Ho)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,H.matrixWorld);const ie=t.update(H),pe=H.material;if(Array.isArray(pe)){const fe=ie.groups;for(let P=0,G=fe.length;P<G;P++){const ae=fe[P],Me=pe[ae.materialIndex];if(Me&&Me.visible){const Se=z(H,Me,A,N);H.onBeforeShadow(o,H,L,Z,ie,Se,ae),o.renderBufferDirect(Z,null,ie,Se,H,ae),H.onAfterShadow(o,H,L,Z,ie,Se,ae)}}}else if(pe.visible){const fe=z(H,pe,A,N);H.onBeforeShadow(o,H,L,Z,ie,fe,null),o.renderBufferDirect(Z,null,ie,fe,H,null),H.onAfterShadow(o,H,L,Z,ie,fe,null)}}const se=H.children;for(let ie=0,pe=se.length;ie<pe;ie++)O(se[ie],L,Z,A,N)}function I(H){H.target.removeEventListener("dispose",I);for(const Z in p){const A=p[Z],N=H.target.uuid;N in A&&(A[N].dispose(),delete A[N])}}}const gA={[Pd]:zd,[Fd]:Hd,[Id]:Gd,[Dr]:Bd,[zd]:Pd,[Hd]:Fd,[Gd]:Id,[Bd]:Dr};function _A(o,t){function i(){let X=!1;const Ue=new nn;let Te=null;const ze=new nn(0,0,0,0);return{setMask:function(ye){Te!==ye&&!X&&(o.colorMask(ye,ye,ye,ye),Te=ye)},setLocked:function(ye){X=ye},setClear:function(ye,ve,Re,nt,Ot){Ot===!0&&(ye*=nt,ve*=nt,Re*=nt),Ue.set(ye,ve,Re,nt),ze.equals(Ue)===!1&&(o.clearColor(ye,ve,Re,nt),ze.copy(Ue))},reset:function(){X=!1,Te=null,ze.set(-1,0,0,0)}}}function s(){let X=!1,Ue=!1,Te=null,ze=null,ye=null;return{setReversed:function(ve){if(Ue!==ve){const Re=t.get("EXT_clip_control");ve?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),Ue=ve;const nt=ye;ye=null,this.setClear(nt)}},getReversed:function(){return Ue},setTest:function(ve){ve?ue(o.DEPTH_TEST):Ne(o.DEPTH_TEST)},setMask:function(ve){Te!==ve&&!X&&(o.depthMask(ve),Te=ve)},setFunc:function(ve){if(Ue&&(ve=gA[ve]),ze!==ve){switch(ve){case Pd:o.depthFunc(o.NEVER);break;case zd:o.depthFunc(o.ALWAYS);break;case Fd:o.depthFunc(o.LESS);break;case Dr:o.depthFunc(o.LEQUAL);break;case Id:o.depthFunc(o.EQUAL);break;case Bd:o.depthFunc(o.GEQUAL);break;case Hd:o.depthFunc(o.GREATER);break;case Gd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ze=ve}},setLocked:function(ve){X=ve},setClear:function(ve){ye!==ve&&(Ue&&(ve=1-ve),o.clearDepth(ve),ye=ve)},reset:function(){X=!1,Te=null,ze=null,ye=null,Ue=!1}}}function l(){let X=!1,Ue=null,Te=null,ze=null,ye=null,ve=null,Re=null,nt=null,Ot=null;return{setTest:function(Mt){X||(Mt?ue(o.STENCIL_TEST):Ne(o.STENCIL_TEST))},setMask:function(Mt){Ue!==Mt&&!X&&(o.stencilMask(Mt),Ue=Mt)},setFunc:function(Mt,Dn,gi){(Te!==Mt||ze!==Dn||ye!==gi)&&(o.stencilFunc(Mt,Dn,gi),Te=Mt,ze=Dn,ye=gi)},setOp:function(Mt,Dn,gi){(ve!==Mt||Re!==Dn||nt!==gi)&&(o.stencilOp(Mt,Dn,gi),ve=Mt,Re=Dn,nt=gi)},setLocked:function(Mt){X=Mt},setClear:function(Mt){Ot!==Mt&&(o.clearStencil(Mt),Ot=Mt)},reset:function(){X=!1,Ue=null,Te=null,ze=null,ye=null,ve=null,Re=null,nt=null,Ot=null}}}const u=new i,d=new s,h=new l,m=new WeakMap,p=new WeakMap;let v={},g={},S=new WeakMap,b=[],R=null,w=!1,y=null,x=null,F=null,z=null,O=null,I=null,H=null,L=new Lt(0,0,0),Z=0,A=!1,N=null,k=null,se=null,ie=null,pe=null;const fe=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,G=0;const ae=o.getParameter(o.VERSION);ae.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(ae)[1]),P=G>=1):ae.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),P=G>=2);let Me=null,Se={};const U=o.getParameter(o.SCISSOR_BOX),ne=o.getParameter(o.VIEWPORT),_e=new nn().fromArray(U),Ae=new nn().fromArray(ne);function Be(X,Ue,Te,ze){const ye=new Uint8Array(4),ve=o.createTexture();o.bindTexture(X,ve),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Re=0;Re<Te;Re++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Ue,0,o.RGBA,1,1,ze,0,o.RGBA,o.UNSIGNED_BYTE,ye):o.texImage2D(Ue+Re,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,ye);return ve}const te={};te[o.TEXTURE_2D]=Be(o.TEXTURE_2D,o.TEXTURE_2D,1),te[o.TEXTURE_CUBE_MAP]=Be(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[o.TEXTURE_2D_ARRAY]=Be(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),te[o.TEXTURE_3D]=Be(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ue(o.DEPTH_TEST),d.setFunc(Dr),rt(!1),Qt(Ng),ue(o.CULL_FACE),ht(ma);function ue(X){v[X]!==!0&&(o.enable(X),v[X]=!0)}function Ne(X){v[X]!==!1&&(o.disable(X),v[X]=!1)}function ke(X,Ue){return g[X]!==Ue?(o.bindFramebuffer(X,Ue),g[X]=Ue,X===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Ue),X===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Ue),!0):!1}function He(X,Ue){let Te=b,ze=!1;if(X){Te=S.get(Ue),Te===void 0&&(Te=[],S.set(Ue,Te));const ye=X.textures;if(Te.length!==ye.length||Te[0]!==o.COLOR_ATTACHMENT0){for(let ve=0,Re=ye.length;ve<Re;ve++)Te[ve]=o.COLOR_ATTACHMENT0+ve;Te.length=ye.length,ze=!0}}else Te[0]!==o.BACK&&(Te[0]=o.BACK,ze=!0);ze&&o.drawBuffers(Te)}function dt(X){return R!==X?(o.useProgram(X),R=X,!0):!1}const Kt={[Cs]:o.FUNC_ADD,[Sy]:o.FUNC_SUBTRACT,[yy]:o.FUNC_REVERSE_SUBTRACT};Kt[My]=o.MIN,Kt[by]=o.MAX;const gt={[Ey]:o.ZERO,[Ty]:o.ONE,[Ay]:o.SRC_COLOR,[Ld]:o.SRC_ALPHA,[Uy]:o.SRC_ALPHA_SATURATE,[Ny]:o.DST_COLOR,[Cy]:o.DST_ALPHA,[Ry]:o.ONE_MINUS_SRC_COLOR,[Od]:o.ONE_MINUS_SRC_ALPHA,[Dy]:o.ONE_MINUS_DST_COLOR,[wy]:o.ONE_MINUS_DST_ALPHA,[Ly]:o.CONSTANT_COLOR,[Oy]:o.ONE_MINUS_CONSTANT_COLOR,[Py]:o.CONSTANT_ALPHA,[zy]:o.ONE_MINUS_CONSTANT_ALPHA};function ht(X,Ue,Te,ze,ye,ve,Re,nt,Ot,Mt){if(X===ma){w===!0&&(Ne(o.BLEND),w=!1);return}if(w===!1&&(ue(o.BLEND),w=!0),X!==xy){if(X!==y||Mt!==A){if((x!==Cs||O!==Cs)&&(o.blendEquation(o.FUNC_ADD),x=Cs,O=Cs),Mt)switch(X){case wr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ud:o.blendFunc(o.ONE,o.ONE);break;case Dg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Ug:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:At("WebGLState: Invalid blending: ",X);break}else switch(X){case wr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ud:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Dg:At("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ug:At("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:At("WebGLState: Invalid blending: ",X);break}F=null,z=null,I=null,H=null,L.set(0,0,0),Z=0,y=X,A=Mt}return}ye=ye||Ue,ve=ve||Te,Re=Re||ze,(Ue!==x||ye!==O)&&(o.blendEquationSeparate(Kt[Ue],Kt[ye]),x=Ue,O=ye),(Te!==F||ze!==z||ve!==I||Re!==H)&&(o.blendFuncSeparate(gt[Te],gt[ze],gt[ve],gt[Re]),F=Te,z=ze,I=ve,H=Re),(nt.equals(L)===!1||Ot!==Z)&&(o.blendColor(nt.r,nt.g,nt.b,Ot),L.copy(nt),Z=Ot),y=X,A=!1}function Rt(X,Ue){X.side===ha?Ne(o.CULL_FACE):ue(o.CULL_FACE);let Te=X.side===Xn;Ue&&(Te=!Te),rt(Te),X.blending===wr&&X.transparent===!1?ht(ma):ht(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),d.setFunc(X.depthFunc),d.setTest(X.depthTest),d.setMask(X.depthWrite),u.setMask(X.colorWrite);const ze=X.stencilWrite;h.setTest(ze),ze&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Wt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ue(o.SAMPLE_ALPHA_TO_COVERAGE):Ne(o.SAMPLE_ALPHA_TO_COVERAGE)}function rt(X){N!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),N=X)}function Qt(X){X!==gy?(ue(o.CULL_FACE),X!==k&&(X===Ng?o.cullFace(o.BACK):X===_y?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ne(o.CULL_FACE),k=X}function V(X){X!==se&&(P&&o.lineWidth(X),se=X)}function Wt(X,Ue,Te){X?(ue(o.POLYGON_OFFSET_FILL),(ie!==Ue||pe!==Te)&&(o.polygonOffset(Ue,Te),ie=Ue,pe=Te)):Ne(o.POLYGON_OFFSET_FILL)}function yt(X){X?ue(o.SCISSOR_TEST):Ne(o.SCISSOR_TEST)}function Dt(X){X===void 0&&(X=o.TEXTURE0+fe-1),Me!==X&&(o.activeTexture(X),Me=X)}function We(X,Ue,Te){Te===void 0&&(Me===null?Te=o.TEXTURE0+fe-1:Te=Me);let ze=Se[Te];ze===void 0&&(ze={type:void 0,texture:void 0},Se[Te]=ze),(ze.type!==X||ze.texture!==Ue)&&(Me!==Te&&(o.activeTexture(Te),Me=Te),o.bindTexture(X,Ue||te[X]),ze.type=X,ze.texture=Ue)}function D(){const X=Se[Me];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function M(){try{o.compressedTexImage2D(...arguments)}catch(X){At("WebGLState:",X)}}function q(){try{o.compressedTexImage3D(...arguments)}catch(X){At("WebGLState:",X)}}function he(){try{o.texSubImage2D(...arguments)}catch(X){At("WebGLState:",X)}}function xe(){try{o.texSubImage3D(...arguments)}catch(X){At("WebGLState:",X)}}function ce(){try{o.compressedTexSubImage2D(...arguments)}catch(X){At("WebGLState:",X)}}function Ze(){try{o.compressedTexSubImage3D(...arguments)}catch(X){At("WebGLState:",X)}}function Ce(){try{o.texStorage2D(...arguments)}catch(X){At("WebGLState:",X)}}function je(){try{o.texStorage3D(...arguments)}catch(X){At("WebGLState:",X)}}function tt(){try{o.texImage2D(...arguments)}catch(X){At("WebGLState:",X)}}function be(){try{o.texImage3D(...arguments)}catch(X){At("WebGLState:",X)}}function Ee(X){_e.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),_e.copy(X))}function Fe(X){Ae.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),Ae.copy(X))}function Pe(X,Ue){let Te=p.get(Ue);Te===void 0&&(Te=new WeakMap,p.set(Ue,Te));let ze=Te.get(X);ze===void 0&&(ze=o.getUniformBlockIndex(Ue,X.name),Te.set(X,ze))}function we(X,Ue){const ze=p.get(Ue).get(X);m.get(Ue)!==ze&&(o.uniformBlockBinding(Ue,ze,X.__bindingPointIndex),m.set(Ue,ze))}function lt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},Me=null,Se={},g={},S=new WeakMap,b=[],R=null,w=!1,y=null,x=null,F=null,z=null,O=null,I=null,H=null,L=new Lt(0,0,0),Z=0,A=!1,N=null,k=null,se=null,ie=null,pe=null,_e.set(0,0,o.canvas.width,o.canvas.height),Ae.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:ue,disable:Ne,bindFramebuffer:ke,drawBuffers:He,useProgram:dt,setBlending:ht,setMaterial:Rt,setFlipSided:rt,setCullFace:Qt,setLineWidth:V,setPolygonOffset:Wt,setScissorTest:yt,activeTexture:Dt,bindTexture:We,unbindTexture:D,compressedTexImage2D:M,compressedTexImage3D:q,texImage2D:tt,texImage3D:be,updateUBOMapping:Pe,uniformBlockBinding:we,texStorage2D:Ce,texStorage3D:je,texSubImage2D:he,texSubImage3D:xe,compressedTexSubImage2D:ce,compressedTexSubImage3D:Ze,scissor:Ee,viewport:Fe,reset:lt}}function vA(o,t,i,s,l,u,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Vt,v=new WeakMap;let g;const S=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(D,M){return b?new OffscreenCanvas(D,M):Bc("canvas")}function w(D,M,q){let he=1;const xe=We(D);if((xe.width>q||xe.height>q)&&(he=q/Math.max(xe.width,xe.height)),he<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ce=Math.floor(he*xe.width),Ze=Math.floor(he*xe.height);g===void 0&&(g=R(ce,Ze));const Ce=M?R(ce,Ze):g;return Ce.width=ce,Ce.height=Ze,Ce.getContext("2d").drawImage(D,0,0,ce,Ze),st("WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+ce+"x"+Ze+")."),Ce}else return"data"in D&&st("WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),D;return D}function y(D){return D.generateMipmaps}function x(D){o.generateMipmap(D)}function F(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function z(D,M,q,he,xe=!1){if(D!==null){if(o[D]!==void 0)return o[D];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ce=M;if(M===o.RED&&(q===o.FLOAT&&(ce=o.R32F),q===o.HALF_FLOAT&&(ce=o.R16F),q===o.UNSIGNED_BYTE&&(ce=o.R8)),M===o.RED_INTEGER&&(q===o.UNSIGNED_BYTE&&(ce=o.R8UI),q===o.UNSIGNED_SHORT&&(ce=o.R16UI),q===o.UNSIGNED_INT&&(ce=o.R32UI),q===o.BYTE&&(ce=o.R8I),q===o.SHORT&&(ce=o.R16I),q===o.INT&&(ce=o.R32I)),M===o.RG&&(q===o.FLOAT&&(ce=o.RG32F),q===o.HALF_FLOAT&&(ce=o.RG16F),q===o.UNSIGNED_BYTE&&(ce=o.RG8)),M===o.RG_INTEGER&&(q===o.UNSIGNED_BYTE&&(ce=o.RG8UI),q===o.UNSIGNED_SHORT&&(ce=o.RG16UI),q===o.UNSIGNED_INT&&(ce=o.RG32UI),q===o.BYTE&&(ce=o.RG8I),q===o.SHORT&&(ce=o.RG16I),q===o.INT&&(ce=o.RG32I)),M===o.RGB_INTEGER&&(q===o.UNSIGNED_BYTE&&(ce=o.RGB8UI),q===o.UNSIGNED_SHORT&&(ce=o.RGB16UI),q===o.UNSIGNED_INT&&(ce=o.RGB32UI),q===o.BYTE&&(ce=o.RGB8I),q===o.SHORT&&(ce=o.RGB16I),q===o.INT&&(ce=o.RGB32I)),M===o.RGBA_INTEGER&&(q===o.UNSIGNED_BYTE&&(ce=o.RGBA8UI),q===o.UNSIGNED_SHORT&&(ce=o.RGBA16UI),q===o.UNSIGNED_INT&&(ce=o.RGBA32UI),q===o.BYTE&&(ce=o.RGBA8I),q===o.SHORT&&(ce=o.RGBA16I),q===o.INT&&(ce=o.RGBA32I)),M===o.RGB&&(q===o.UNSIGNED_INT_5_9_9_9_REV&&(ce=o.RGB9_E5),q===o.UNSIGNED_INT_10F_11F_11F_REV&&(ce=o.R11F_G11F_B10F)),M===o.RGBA){const Ze=xe?Fc:bt.getTransfer(he);q===o.FLOAT&&(ce=o.RGBA32F),q===o.HALF_FLOAT&&(ce=o.RGBA16F),q===o.UNSIGNED_BYTE&&(ce=Ze===It?o.SRGB8_ALPHA8:o.RGBA8),q===o.UNSIGNED_SHORT_4_4_4_4&&(ce=o.RGBA4),q===o.UNSIGNED_SHORT_5_5_5_1&&(ce=o.RGB5_A1)}return(ce===o.R16F||ce===o.R32F||ce===o.RG16F||ce===o.RG32F||ce===o.RGBA16F||ce===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ce}function O(D,M){let q;return D?M===null||M===Vi||M===ko?q=o.DEPTH24_STENCIL8:M===Ii?q=o.DEPTH32F_STENCIL8:M===Vo&&(q=o.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Vi||M===ko?q=o.DEPTH_COMPONENT24:M===Ii?q=o.DEPTH_COMPONENT32F:M===Vo&&(q=o.DEPTH_COMPONENT16),q}function I(D,M){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==wn&&D.minFilter!==Pn?Math.log2(Math.max(M.width,M.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?M.mipmaps.length:1}function H(D){const M=D.target;M.removeEventListener("dispose",H),Z(M),M.isVideoTexture&&v.delete(M)}function L(D){const M=D.target;M.removeEventListener("dispose",L),N(M)}function Z(D){const M=s.get(D);if(M.__webglInit===void 0)return;const q=D.source,he=S.get(q);if(he){const xe=he[M.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&A(D),Object.keys(he).length===0&&S.delete(q)}s.remove(D)}function A(D){const M=s.get(D);o.deleteTexture(M.__webglTexture);const q=D.source,he=S.get(q);delete he[M.__cacheKey],d.memory.textures--}function N(D){const M=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(M.__webglFramebuffer[he]))for(let xe=0;xe<M.__webglFramebuffer[he].length;xe++)o.deleteFramebuffer(M.__webglFramebuffer[he][xe]);else o.deleteFramebuffer(M.__webglFramebuffer[he]);M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer[he])}else{if(Array.isArray(M.__webglFramebuffer))for(let he=0;he<M.__webglFramebuffer.length;he++)o.deleteFramebuffer(M.__webglFramebuffer[he]);else o.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&o.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let he=0;he<M.__webglColorRenderbuffer.length;he++)M.__webglColorRenderbuffer[he]&&o.deleteRenderbuffer(M.__webglColorRenderbuffer[he]);M.__webglDepthRenderbuffer&&o.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const q=D.textures;for(let he=0,xe=q.length;he<xe;he++){const ce=s.get(q[he]);ce.__webglTexture&&(o.deleteTexture(ce.__webglTexture),d.memory.textures--),s.remove(q[he])}s.remove(D)}let k=0;function se(){k=0}function ie(){const D=k;return D>=l.maxTextures&&st("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),k+=1,D}function pe(D){const M=[];return M.push(D.wrapS),M.push(D.wrapT),M.push(D.wrapR||0),M.push(D.magFilter),M.push(D.minFilter),M.push(D.anisotropy),M.push(D.internalFormat),M.push(D.format),M.push(D.type),M.push(D.generateMipmaps),M.push(D.premultiplyAlpha),M.push(D.flipY),M.push(D.unpackAlignment),M.push(D.colorSpace),M.join()}function fe(D,M){const q=s.get(D);if(D.isVideoTexture&&yt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&q.__version!==D.version){const he=D.image;if(he===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{te(q,D,M);return}}else D.isExternalTexture&&(q.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,q.__webglTexture,o.TEXTURE0+M)}function P(D,M){const q=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){te(q,D,M);return}else D.isExternalTexture&&(q.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,q.__webglTexture,o.TEXTURE0+M)}function G(D,M){const q=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){te(q,D,M);return}i.bindTexture(o.TEXTURE_3D,q.__webglTexture,o.TEXTURE0+M)}function ae(D,M){const q=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&q.__version!==D.version){ue(q,D,M);return}i.bindTexture(o.TEXTURE_CUBE_MAP,q.__webglTexture,o.TEXTURE0+M)}const Me={[jd]:o.REPEAT,[pa]:o.CLAMP_TO_EDGE,[Xd]:o.MIRRORED_REPEAT},Se={[wn]:o.NEAREST,[By]:o.NEAREST_MIPMAP_NEAREST,[lc]:o.NEAREST_MIPMAP_LINEAR,[Pn]:o.LINEAR,[td]:o.LINEAR_MIPMAP_NEAREST,[Ns]:o.LINEAR_MIPMAP_LINEAR},U={[ky]:o.NEVER,[Yy]:o.ALWAYS,[jy]:o.LESS,[zh]:o.LEQUAL,[Xy]:o.EQUAL,[Fh]:o.GEQUAL,[qy]:o.GREATER,[Wy]:o.NOTEQUAL};function ne(D,M){if(M.type===Ii&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Pn||M.magFilter===td||M.magFilter===lc||M.magFilter===Ns||M.minFilter===Pn||M.minFilter===td||M.minFilter===lc||M.minFilter===Ns)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,Me[M.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,Me[M.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,Me[M.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,Se[M.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,Se[M.minFilter]),M.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,U[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===wn||M.minFilter!==lc&&M.minFilter!==Ns||M.type===Ii&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");o.texParameterf(D,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function _e(D,M){let q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,M.addEventListener("dispose",H));const he=M.source;let xe=S.get(he);xe===void 0&&(xe={},S.set(he,xe));const ce=pe(M);if(ce!==D.__cacheKey){xe[ce]===void 0&&(xe[ce]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,q=!0),xe[ce].usedTimes++;const Ze=xe[D.__cacheKey];Ze!==void 0&&(xe[D.__cacheKey].usedTimes--,Ze.usedTimes===0&&A(M)),D.__cacheKey=ce,D.__webglTexture=xe[ce].texture}return q}function Ae(D,M,q){return Math.floor(Math.floor(D/q)/M)}function Be(D,M,q,he){const ce=D.updateRanges;if(ce.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,M.width,M.height,q,he,M.data);else{ce.sort((be,Ee)=>be.start-Ee.start);let Ze=0;for(let be=1;be<ce.length;be++){const Ee=ce[Ze],Fe=ce[be],Pe=Ee.start+Ee.count,we=Ae(Fe.start,M.width,4),lt=Ae(Ee.start,M.width,4);Fe.start<=Pe+1&&we===lt&&Ae(Fe.start+Fe.count-1,M.width,4)===we?Ee.count=Math.max(Ee.count,Fe.start+Fe.count-Ee.start):(++Ze,ce[Ze]=Fe)}ce.length=Ze+1;const Ce=o.getParameter(o.UNPACK_ROW_LENGTH),je=o.getParameter(o.UNPACK_SKIP_PIXELS),tt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,M.width);for(let be=0,Ee=ce.length;be<Ee;be++){const Fe=ce[be],Pe=Math.floor(Fe.start/4),we=Math.ceil(Fe.count/4),lt=Pe%M.width,X=Math.floor(Pe/M.width),Ue=we,Te=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,lt),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,lt,X,Ue,Te,q,he,M.data)}D.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ce),o.pixelStorei(o.UNPACK_SKIP_PIXELS,je),o.pixelStorei(o.UNPACK_SKIP_ROWS,tt)}}function te(D,M,q){let he=o.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(he=o.TEXTURE_2D_ARRAY),M.isData3DTexture&&(he=o.TEXTURE_3D);const xe=_e(D,M),ce=M.source;i.bindTexture(he,D.__webglTexture,o.TEXTURE0+q);const Ze=s.get(ce);if(ce.version!==Ze.__version||xe===!0){i.activeTexture(o.TEXTURE0+q);const Ce=bt.getPrimaries(bt.workingColorSpace),je=M.colorSpace===es?null:bt.getPrimaries(M.colorSpace),tt=M.colorSpace===es||Ce===je?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let be=w(M.image,!1,l.maxTextureSize);be=Dt(M,be);const Ee=u.convert(M.format,M.colorSpace),Fe=u.convert(M.type);let Pe=z(M.internalFormat,Ee,Fe,M.colorSpace,M.isVideoTexture);ne(he,M);let we;const lt=M.mipmaps,X=M.isVideoTexture!==!0,Ue=Ze.__version===void 0||xe===!0,Te=ce.dataReady,ze=I(M,be);if(M.isDepthTexture)Pe=O(M.format===Ds,M.type),Ue&&(X?i.texStorage2D(o.TEXTURE_2D,1,Pe,be.width,be.height):i.texImage2D(o.TEXTURE_2D,0,Pe,be.width,be.height,0,Ee,Fe,null));else if(M.isDataTexture)if(lt.length>0){X&&Ue&&i.texStorage2D(o.TEXTURE_2D,ze,Pe,lt[0].width,lt[0].height);for(let ye=0,ve=lt.length;ye<ve;ye++)we=lt[ye],X?Te&&i.texSubImage2D(o.TEXTURE_2D,ye,0,0,we.width,we.height,Ee,Fe,we.data):i.texImage2D(o.TEXTURE_2D,ye,Pe,we.width,we.height,0,Ee,Fe,we.data);M.generateMipmaps=!1}else X?(Ue&&i.texStorage2D(o.TEXTURE_2D,ze,Pe,be.width,be.height),Te&&Be(M,be,Ee,Fe)):i.texImage2D(o.TEXTURE_2D,0,Pe,be.width,be.height,0,Ee,Fe,be.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){X&&Ue&&i.texStorage3D(o.TEXTURE_2D_ARRAY,ze,Pe,lt[0].width,lt[0].height,be.depth);for(let ye=0,ve=lt.length;ye<ve;ye++)if(we=lt[ye],M.format!==Ci)if(Ee!==null)if(X){if(Te)if(M.layerUpdates.size>0){const Re=n_(we.width,we.height,M.format,M.type);for(const nt of M.layerUpdates){const Ot=we.data.subarray(nt*Re/we.data.BYTES_PER_ELEMENT,(nt+1)*Re/we.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ye,0,0,nt,we.width,we.height,1,Ee,Ot)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ye,0,0,0,we.width,we.height,be.depth,Ee,we.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ye,Pe,we.width,we.height,be.depth,0,we.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Te&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ye,0,0,0,we.width,we.height,be.depth,Ee,Fe,we.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ye,Pe,we.width,we.height,be.depth,0,Ee,Fe,we.data)}else{X&&Ue&&i.texStorage2D(o.TEXTURE_2D,ze,Pe,lt[0].width,lt[0].height);for(let ye=0,ve=lt.length;ye<ve;ye++)we=lt[ye],M.format!==Ci?Ee!==null?X?Te&&i.compressedTexSubImage2D(o.TEXTURE_2D,ye,0,0,we.width,we.height,Ee,we.data):i.compressedTexImage2D(o.TEXTURE_2D,ye,Pe,we.width,we.height,0,we.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Te&&i.texSubImage2D(o.TEXTURE_2D,ye,0,0,we.width,we.height,Ee,Fe,we.data):i.texImage2D(o.TEXTURE_2D,ye,Pe,we.width,we.height,0,Ee,Fe,we.data)}else if(M.isDataArrayTexture)if(X){if(Ue&&i.texStorage3D(o.TEXTURE_2D_ARRAY,ze,Pe,be.width,be.height,be.depth),Te)if(M.layerUpdates.size>0){const ye=n_(be.width,be.height,M.format,M.type);for(const ve of M.layerUpdates){const Re=be.data.subarray(ve*ye/be.data.BYTES_PER_ELEMENT,(ve+1)*ye/be.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ve,be.width,be.height,1,Ee,Fe,Re)}M.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Ee,Fe,be.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Pe,be.width,be.height,be.depth,0,Ee,Fe,be.data);else if(M.isData3DTexture)X?(Ue&&i.texStorage3D(o.TEXTURE_3D,ze,Pe,be.width,be.height,be.depth),Te&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Ee,Fe,be.data)):i.texImage3D(o.TEXTURE_3D,0,Pe,be.width,be.height,be.depth,0,Ee,Fe,be.data);else if(M.isFramebufferTexture){if(Ue)if(X)i.texStorage2D(o.TEXTURE_2D,ze,Pe,be.width,be.height);else{let ye=be.width,ve=be.height;for(let Re=0;Re<ze;Re++)i.texImage2D(o.TEXTURE_2D,Re,Pe,ye,ve,0,Ee,Fe,null),ye>>=1,ve>>=1}}else if(lt.length>0){if(X&&Ue){const ye=We(lt[0]);i.texStorage2D(o.TEXTURE_2D,ze,Pe,ye.width,ye.height)}for(let ye=0,ve=lt.length;ye<ve;ye++)we=lt[ye],X?Te&&i.texSubImage2D(o.TEXTURE_2D,ye,0,0,Ee,Fe,we):i.texImage2D(o.TEXTURE_2D,ye,Pe,Ee,Fe,we);M.generateMipmaps=!1}else if(X){if(Ue){const ye=We(be);i.texStorage2D(o.TEXTURE_2D,ze,Pe,ye.width,ye.height)}Te&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ee,Fe,be)}else i.texImage2D(o.TEXTURE_2D,0,Pe,Ee,Fe,be);y(M)&&x(he),Ze.__version=ce.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function ue(D,M,q){if(M.image.length!==6)return;const he=_e(D,M),xe=M.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+q);const ce=s.get(xe);if(xe.version!==ce.__version||he===!0){i.activeTexture(o.TEXTURE0+q);const Ze=bt.getPrimaries(bt.workingColorSpace),Ce=M.colorSpace===es?null:bt.getPrimaries(M.colorSpace),je=M.colorSpace===es||Ze===Ce?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);const tt=M.isCompressedTexture||M.image[0].isCompressedTexture,be=M.image[0]&&M.image[0].isDataTexture,Ee=[];for(let ve=0;ve<6;ve++)!tt&&!be?Ee[ve]=w(M.image[ve],!0,l.maxCubemapSize):Ee[ve]=be?M.image[ve].image:M.image[ve],Ee[ve]=Dt(M,Ee[ve]);const Fe=Ee[0],Pe=u.convert(M.format,M.colorSpace),we=u.convert(M.type),lt=z(M.internalFormat,Pe,we,M.colorSpace),X=M.isVideoTexture!==!0,Ue=ce.__version===void 0||he===!0,Te=xe.dataReady;let ze=I(M,Fe);ne(o.TEXTURE_CUBE_MAP,M);let ye;if(tt){X&&Ue&&i.texStorage2D(o.TEXTURE_CUBE_MAP,ze,lt,Fe.width,Fe.height);for(let ve=0;ve<6;ve++){ye=Ee[ve].mipmaps;for(let Re=0;Re<ye.length;Re++){const nt=ye[Re];M.format!==Ci?Pe!==null?X?Te&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re,0,0,nt.width,nt.height,Pe,nt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re,lt,nt.width,nt.height,0,nt.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Te&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re,0,0,nt.width,nt.height,Pe,we,nt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re,lt,nt.width,nt.height,0,Pe,we,nt.data)}}}else{if(ye=M.mipmaps,X&&Ue){ye.length>0&&ze++;const ve=We(Ee[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,ze,lt,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(be){X?Te&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ee[ve].width,Ee[ve].height,Pe,we,Ee[ve].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,lt,Ee[ve].width,Ee[ve].height,0,Pe,we,Ee[ve].data);for(let Re=0;Re<ye.length;Re++){const Ot=ye[Re].image[ve].image;X?Te&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re+1,0,0,Ot.width,Ot.height,Pe,we,Ot.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re+1,lt,Ot.width,Ot.height,0,Pe,we,Ot.data)}}else{X?Te&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Pe,we,Ee[ve]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,lt,Pe,we,Ee[ve]);for(let Re=0;Re<ye.length;Re++){const nt=ye[Re];X?Te&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re+1,0,0,Pe,we,nt.image[ve]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Re+1,lt,Pe,we,nt.image[ve])}}}y(M)&&x(o.TEXTURE_CUBE_MAP),ce.__version=xe.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function Ne(D,M,q,he,xe,ce){const Ze=u.convert(q.format,q.colorSpace),Ce=u.convert(q.type),je=z(q.internalFormat,Ze,Ce,q.colorSpace),tt=s.get(M),be=s.get(q);if(be.__renderTarget=M,!tt.__hasExternalTextures){const Ee=Math.max(1,M.width>>ce),Fe=Math.max(1,M.height>>ce);xe===o.TEXTURE_3D||xe===o.TEXTURE_2D_ARRAY?i.texImage3D(xe,ce,je,Ee,Fe,M.depth,0,Ze,Ce,null):i.texImage2D(xe,ce,je,Ee,Fe,0,Ze,Ce,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),Wt(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,he,xe,be.__webglTexture,0,V(M)):(xe===o.TEXTURE_2D||xe>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,he,xe,be.__webglTexture,ce),i.bindFramebuffer(o.FRAMEBUFFER,null)}function ke(D,M,q){if(o.bindRenderbuffer(o.RENDERBUFFER,D),M.depthBuffer){const he=M.depthTexture,xe=he&&he.isDepthTexture?he.type:null,ce=O(M.stencilBuffer,xe),Ze=M.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Wt(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(M),ce,M.width,M.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(M),ce,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,ce,M.width,M.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ze,o.RENDERBUFFER,D)}else{const he=M.textures;for(let xe=0;xe<he.length;xe++){const ce=he[xe],Ze=u.convert(ce.format,ce.colorSpace),Ce=u.convert(ce.type),je=z(ce.internalFormat,Ze,Ce,ce.colorSpace);Wt(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(M),je,M.width,M.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(M),je,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,je,M.width,M.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function He(D,M,q){const he=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xe=s.get(M.depthTexture);if(xe.__renderTarget=M,(!xe.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),he){if(xe.__webglInit===void 0&&(xe.__webglInit=!0,M.depthTexture.addEventListener("dispose",H)),xe.__webglTexture===void 0){xe.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,xe.__webglTexture),ne(o.TEXTURE_CUBE_MAP,M.depthTexture);const tt=u.convert(M.depthTexture.format),be=u.convert(M.depthTexture.type);let Ee;M.depthTexture.format===xa?Ee=o.DEPTH_COMPONENT24:M.depthTexture.format===Ds&&(Ee=o.DEPTH24_STENCIL8);for(let Fe=0;Fe<6;Fe++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Ee,M.width,M.height,0,tt,be,null)}}else fe(M.depthTexture,0);const ce=xe.__webglTexture,Ze=V(M),Ce=he?o.TEXTURE_CUBE_MAP_POSITIVE_X+q:o.TEXTURE_2D,je=M.depthTexture.format===Ds?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(M.depthTexture.format===xa)Wt(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,je,Ce,ce,0,Ze):o.framebufferTexture2D(o.FRAMEBUFFER,je,Ce,ce,0);else if(M.depthTexture.format===Ds)Wt(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,je,Ce,ce,0,Ze):o.framebufferTexture2D(o.FRAMEBUFFER,je,Ce,ce,0);else throw new Error("Unknown depthTexture format")}function dt(D){const M=s.get(D),q=D.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==D.depthTexture){const he=D.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),he){const xe=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,he.removeEventListener("dispose",xe)};he.addEventListener("dispose",xe),M.__depthDisposeCallback=xe}M.__boundDepthTexture=he}if(D.depthTexture&&!M.__autoAllocateDepthBuffer)if(q)for(let he=0;he<6;he++)He(M.__webglFramebuffer[he],D,he);else{const he=D.texture.mipmaps;he&&he.length>0?He(M.__webglFramebuffer[0],D,0):He(M.__webglFramebuffer,D,0)}else if(q){M.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[he]),M.__webglDepthbuffer[he]===void 0)M.__webglDepthbuffer[he]=o.createRenderbuffer(),ke(M.__webglDepthbuffer[he],D,!1);else{const xe=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer[he];o.bindRenderbuffer(o.RENDERBUFFER,ce),o.framebufferRenderbuffer(o.FRAMEBUFFER,xe,o.RENDERBUFFER,ce)}}else{const he=D.texture.mipmaps;if(he&&he.length>0?i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=o.createRenderbuffer(),ke(M.__webglDepthbuffer,D,!1);else{const xe=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ce),o.framebufferRenderbuffer(o.FRAMEBUFFER,xe,o.RENDERBUFFER,ce)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Kt(D,M,q){const he=s.get(D);M!==void 0&&Ne(he.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),q!==void 0&&dt(D)}function gt(D){const M=D.texture,q=s.get(D),he=s.get(M);D.addEventListener("dispose",L);const xe=D.textures,ce=D.isWebGLCubeRenderTarget===!0,Ze=xe.length>1;if(Ze||(he.__webglTexture===void 0&&(he.__webglTexture=o.createTexture()),he.__version=M.version,d.memory.textures++),ce){q.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer[Ce]=[];for(let je=0;je<M.mipmaps.length;je++)q.__webglFramebuffer[Ce][je]=o.createFramebuffer()}else q.__webglFramebuffer[Ce]=o.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer=[];for(let Ce=0;Ce<M.mipmaps.length;Ce++)q.__webglFramebuffer[Ce]=o.createFramebuffer()}else q.__webglFramebuffer=o.createFramebuffer();if(Ze)for(let Ce=0,je=xe.length;Ce<je;Ce++){const tt=s.get(xe[Ce]);tt.__webglTexture===void 0&&(tt.__webglTexture=o.createTexture(),d.memory.textures++)}if(D.samples>0&&Wt(D)===!1){q.__webglMultisampledFramebuffer=o.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Ce=0;Ce<xe.length;Ce++){const je=xe[Ce];q.__webglColorRenderbuffer[Ce]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,q.__webglColorRenderbuffer[Ce]);const tt=u.convert(je.format,je.colorSpace),be=u.convert(je.type),Ee=z(je.internalFormat,tt,be,je.colorSpace,D.isXRRenderTarget===!0),Fe=V(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,Fe,Ee,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ce,o.RENDERBUFFER,q.__webglColorRenderbuffer[Ce])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(q.__webglDepthRenderbuffer=o.createRenderbuffer(),ke(q.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ce){i.bindTexture(o.TEXTURE_CUBE_MAP,he.__webglTexture),ne(o.TEXTURE_CUBE_MAP,M);for(let Ce=0;Ce<6;Ce++)if(M.mipmaps&&M.mipmaps.length>0)for(let je=0;je<M.mipmaps.length;je++)Ne(q.__webglFramebuffer[Ce][je],D,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,je);else Ne(q.__webglFramebuffer[Ce],D,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(M)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ze){for(let Ce=0,je=xe.length;Ce<je;Ce++){const tt=xe[Ce],be=s.get(tt);let Ee=o.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ee=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ee,be.__webglTexture),ne(Ee,tt),Ne(q.__webglFramebuffer,D,tt,o.COLOR_ATTACHMENT0+Ce,Ee,0),y(tt)&&x(Ee)}i.unbindTexture()}else{let Ce=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ce=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ce,he.__webglTexture),ne(Ce,M),M.mipmaps&&M.mipmaps.length>0)for(let je=0;je<M.mipmaps.length;je++)Ne(q.__webglFramebuffer[je],D,M,o.COLOR_ATTACHMENT0,Ce,je);else Ne(q.__webglFramebuffer,D,M,o.COLOR_ATTACHMENT0,Ce,0);y(M)&&x(Ce),i.unbindTexture()}D.depthBuffer&&dt(D)}function ht(D){const M=D.textures;for(let q=0,he=M.length;q<he;q++){const xe=M[q];if(y(xe)){const ce=F(D),Ze=s.get(xe).__webglTexture;i.bindTexture(ce,Ze),x(ce),i.unbindTexture()}}}const Rt=[],rt=[];function Qt(D){if(D.samples>0){if(Wt(D)===!1){const M=D.textures,q=D.width,he=D.height;let xe=o.COLOR_BUFFER_BIT;const ce=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ze=s.get(D),Ce=M.length>1;if(Ce)for(let tt=0;tt<M.length;tt++)i.bindFramebuffer(o.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ze.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer);const je=D.texture.mipmaps;je&&je.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer);for(let tt=0;tt<M.length;tt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(xe|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(xe|=o.STENCIL_BUFFER_BIT)),Ce){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ze.__webglColorRenderbuffer[tt]);const be=s.get(M[tt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,be,0)}o.blitFramebuffer(0,0,q,he,0,0,q,he,xe,o.NEAREST),m===!0&&(Rt.length=0,rt.length=0,Rt.push(o.COLOR_ATTACHMENT0+tt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Rt.push(ce),rt.push(ce),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,rt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Rt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ce)for(let tt=0;tt<M.length;tt++){i.bindFramebuffer(o.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.RENDERBUFFER,Ze.__webglColorRenderbuffer[tt]);const be=s.get(M[tt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ze.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.TEXTURE_2D,be,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const M=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[M])}}}function V(D){return Math.min(l.maxSamples,D.samples)}function Wt(D){const M=s.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function yt(D){const M=d.render.frame;v.get(D)!==M&&(v.set(D,M),D.update())}function Dt(D,M){const q=D.colorSpace,he=D.format,xe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||q!==Or&&q!==es&&(bt.getTransfer(q)===It?(he!==Ci||xe!==mi)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):At("WebGLTextures: Unsupported texture color space:",q)),M}function We(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=ie,this.resetTextureUnits=se,this.setTexture2D=fe,this.setTexture2DArray=P,this.setTexture3D=G,this.setTextureCube=ae,this.rebindTextures=Kt,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=Wt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function xA(o,t){function i(s,l=es){let u;const d=bt.getTransfer(l);if(s===mi)return o.UNSIGNED_BYTE;if(s===Dh)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Uh)return o.UNSIGNED_SHORT_5_5_5_1;if(s===H_)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===G_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===I_)return o.BYTE;if(s===B_)return o.SHORT;if(s===Vo)return o.UNSIGNED_SHORT;if(s===Nh)return o.INT;if(s===Vi)return o.UNSIGNED_INT;if(s===Ii)return o.FLOAT;if(s===va)return o.HALF_FLOAT;if(s===V_)return o.ALPHA;if(s===k_)return o.RGB;if(s===Ci)return o.RGBA;if(s===xa)return o.DEPTH_COMPONENT;if(s===Ds)return o.DEPTH_STENCIL;if(s===j_)return o.RED;if(s===Lh)return o.RED_INTEGER;if(s===Lr)return o.RG;if(s===Oh)return o.RG_INTEGER;if(s===Ph)return o.RGBA_INTEGER;if(s===Uc||s===Lc||s===Oc||s===Pc)if(d===It)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Uc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Lc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Oc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Pc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Uc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Lc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Oc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Pc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===qd||s===Wd||s===Yd||s===Zd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===qd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Wd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Yd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Zd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Kd||s===Qd||s===Jd||s===$d||s===eh||s===th||s===nh)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Kd||s===Qd)return d===It?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Jd)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(s===$d)return u.COMPRESSED_R11_EAC;if(s===eh)return u.COMPRESSED_SIGNED_R11_EAC;if(s===th)return u.COMPRESSED_RG11_EAC;if(s===nh)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===ih||s===ah||s===sh||s===rh||s===oh||s===lh||s===ch||s===uh||s===fh||s===dh||s===hh||s===ph||s===mh||s===gh)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===ih)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ah)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===sh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===rh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===oh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===lh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ch)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===uh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===fh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===dh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===hh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ph)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===mh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===gh)return d===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===_h||s===vh||s===xh)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===_h)return d===It?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===vh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===xh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Sh||s===yh||s===Mh||s===bh)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===Sh)return u.COMPRESSED_RED_RGTC1_EXT;if(s===yh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Mh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===bh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ko?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const SA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yA=`
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

}`;class MA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new sv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ki({vertexShader:SA,fragmentShader:yA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ya(new Vc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bA extends zr{constructor(t,i){super();const s=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,v=null,g=null,S=null,b=null,R=null;const w=typeof XRWebGLBinding<"u",y=new MA,x={},F=i.getContextAttributes();let z=null,O=null;const I=[],H=[],L=new Vt;let Z=null;const A=new pi;A.viewport=new nn;const N=new pi;N.viewport=new nn;const k=[A,N],se=new UM;let ie=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ue=I[te];return ue===void 0&&(ue=new Ed,I[te]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(te){let ue=I[te];return ue===void 0&&(ue=new Ed,I[te]=ue),ue.getGripSpace()},this.getHand=function(te){let ue=I[te];return ue===void 0&&(ue=new Ed,I[te]=ue),ue.getHandSpace()};function fe(te){const ue=H.indexOf(te.inputSource);if(ue===-1)return;const Ne=I[ue];Ne!==void 0&&(Ne.update(te.inputSource,te.frame,p||d),Ne.dispatchEvent({type:te.type,data:te.inputSource}))}function P(){l.removeEventListener("select",fe),l.removeEventListener("selectstart",fe),l.removeEventListener("selectend",fe),l.removeEventListener("squeeze",fe),l.removeEventListener("squeezestart",fe),l.removeEventListener("squeezeend",fe),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",G);for(let te=0;te<I.length;te++){const ue=H[te];ue!==null&&(H[te]=null,I[te].disconnect(ue))}ie=null,pe=null,y.reset();for(const te in x)delete x[te];t.setRenderTarget(z),b=null,S=null,g=null,l=null,O=null,Be.stop(),s.isPresenting=!1,t.setPixelRatio(Z),t.setSize(L.width,L.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){u=te,s.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){h=te,s.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(te){p=te},this.getBaseLayer=function(){return S!==null?S:b},this.getBinding=function(){return g===null&&w&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return R},this.getSession=function(){return l},this.setSession=async function(te){if(l=te,l!==null){if(z=t.getRenderTarget(),l.addEventListener("select",fe),l.addEventListener("selectstart",fe),l.addEventListener("selectend",fe),l.addEventListener("squeeze",fe),l.addEventListener("squeezestart",fe),l.addEventListener("squeezeend",fe),l.addEventListener("end",P),l.addEventListener("inputsourceschange",G),F.xrCompatible!==!0&&await i.makeXRCompatible(),Z=t.getPixelRatio(),t.getSize(L),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ne=null,ke=null,He=null;F.depth&&(He=F.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ne=F.stencil?Ds:xa,ke=F.stencil?ko:Vi);const dt={colorFormat:i.RGBA8,depthFormat:He,scaleFactor:u};g=this.getBinding(),S=g.createProjectionLayer(dt),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),O=new Gi(S.textureWidth,S.textureHeight,{format:Ci,type:mi,depthTexture:new Xo(S.textureWidth,S.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,Ne),stencilBuffer:F.stencil,colorSpace:t.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Ne={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:u};b=new XRWebGLLayer(l,i,Ne),l.updateRenderState({baseLayer:b}),t.setPixelRatio(1),t.setSize(b.framebufferWidth,b.framebufferHeight,!1),O=new Gi(b.framebufferWidth,b.framebufferHeight,{format:Ci,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Be.setContext(l),Be.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function G(te){for(let ue=0;ue<te.removed.length;ue++){const Ne=te.removed[ue],ke=H.indexOf(Ne);ke>=0&&(H[ke]=null,I[ke].disconnect(Ne))}for(let ue=0;ue<te.added.length;ue++){const Ne=te.added[ue];let ke=H.indexOf(Ne);if(ke===-1){for(let dt=0;dt<I.length;dt++)if(dt>=H.length){H.push(Ne),ke=dt;break}else if(H[dt]===null){H[dt]=Ne,ke=dt;break}if(ke===-1)break}const He=I[ke];He&&He.connect(Ne)}}const ae=new re,Me=new re;function Se(te,ue,Ne){ae.setFromMatrixPosition(ue.matrixWorld),Me.setFromMatrixPosition(Ne.matrixWorld);const ke=ae.distanceTo(Me),He=ue.projectionMatrix.elements,dt=Ne.projectionMatrix.elements,Kt=He[14]/(He[10]-1),gt=He[14]/(He[10]+1),ht=(He[9]+1)/He[5],Rt=(He[9]-1)/He[5],rt=(He[8]-1)/He[0],Qt=(dt[8]+1)/dt[0],V=Kt*rt,Wt=Kt*Qt,yt=ke/(-rt+Qt),Dt=yt*-rt;if(ue.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Dt),te.translateZ(yt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),He[10]===-1)te.projectionMatrix.copy(ue.projectionMatrix),te.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const We=Kt+yt,D=gt+yt,M=V-Dt,q=Wt+(ke-Dt),he=ht*gt/D*We,xe=Rt*gt/D*We;te.projectionMatrix.makePerspective(M,q,he,xe,We,D),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function U(te,ue){ue===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ue.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(l===null)return;let ue=te.near,Ne=te.far;y.texture!==null&&(y.depthNear>0&&(ue=y.depthNear),y.depthFar>0&&(Ne=y.depthFar)),se.near=N.near=A.near=ue,se.far=N.far=A.far=Ne,(ie!==se.near||pe!==se.far)&&(l.updateRenderState({depthNear:se.near,depthFar:se.far}),ie=se.near,pe=se.far),se.layers.mask=te.layers.mask|6,A.layers.mask=se.layers.mask&3,N.layers.mask=se.layers.mask&5;const ke=te.parent,He=se.cameras;U(se,ke);for(let dt=0;dt<He.length;dt++)U(He[dt],ke);He.length===2?Se(se,A,N):se.projectionMatrix.copy(A.projectionMatrix),ne(te,se,ke)};function ne(te,ue,Ne){Ne===null?te.matrix.copy(ue.matrixWorld):(te.matrix.copy(Ne.matrixWorld),te.matrix.invert(),te.matrix.multiply(ue.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ue.projectionMatrix),te.projectionMatrixInverse.copy(ue.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Eh*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return se},this.getFoveation=function(){if(!(S===null&&b===null))return m},this.setFoveation=function(te){m=te,S!==null&&(S.fixedFoveation=te),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=te)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(se)},this.getCameraTexture=function(te){return x[te]};let _e=null;function Ae(te,ue){if(v=ue.getViewerPose(p||d),R=ue,v!==null){const Ne=v.views;b!==null&&(t.setRenderTargetFramebuffer(O,b.framebuffer),t.setRenderTarget(O));let ke=!1;Ne.length!==se.cameras.length&&(se.cameras.length=0,ke=!0);for(let gt=0;gt<Ne.length;gt++){const ht=Ne[gt];let Rt=null;if(b!==null)Rt=b.getViewport(ht);else{const Qt=g.getViewSubImage(S,ht);Rt=Qt.viewport,gt===0&&(t.setRenderTargetTextures(O,Qt.colorTexture,Qt.depthStencilTexture),t.setRenderTarget(O))}let rt=k[gt];rt===void 0&&(rt=new pi,rt.layers.enable(gt),rt.viewport=new nn,k[gt]=rt),rt.matrix.fromArray(ht.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(ht.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),gt===0&&(se.matrix.copy(rt.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale)),ke===!0&&se.cameras.push(rt)}const He=l.enabledFeatures;if(He&&He.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){g=s.getBinding();const gt=g.getDepthInformation(Ne[0]);gt&&gt.isValid&&gt.texture&&y.init(gt,l.renderState)}if(He&&He.includes("camera-access")&&w){t.state.unbindTexture(),g=s.getBinding();for(let gt=0;gt<Ne.length;gt++){const ht=Ne[gt].camera;if(ht){let Rt=x[ht];Rt||(Rt=new sv,x[ht]=Rt);const rt=g.getCameraImage(ht);Rt.sourceTexture=rt}}}}for(let Ne=0;Ne<I.length;Ne++){const ke=H[Ne],He=I[Ne];ke!==null&&He!==void 0&&He.update(ke,ue,p||d)}_e&&_e(te,ue),ue.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ue}),R=null}const Be=new ov;Be.setAnimationLoop(Ae),this.setAnimationLoop=function(te){_e=te},this.dispose=function(){}}}const As=new Sa,EA=new an;function TA(o,t){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function s(y,x){x.color.getRGB(y.fogColor.value,$_(o)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function l(y,x,F,z,O){x.isMeshBasicMaterial||x.isMeshLambertMaterial?u(y,x):x.isMeshToonMaterial?(u(y,x),g(y,x)):x.isMeshPhongMaterial?(u(y,x),v(y,x)):x.isMeshStandardMaterial?(u(y,x),S(y,x),x.isMeshPhysicalMaterial&&b(y,x,O)):x.isMeshMatcapMaterial?(u(y,x),R(y,x)):x.isMeshDepthMaterial?u(y,x):x.isMeshDistanceMaterial?(u(y,x),w(y,x)):x.isMeshNormalMaterial?u(y,x):x.isLineBasicMaterial?(d(y,x),x.isLineDashedMaterial&&h(y,x)):x.isPointsMaterial?m(y,x,F,z):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Xn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Xn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const F=t.get(x),z=F.envMap,O=F.envMapRotation;z&&(y.envMap.value=z,As.copy(O),As.x*=-1,As.y*=-1,As.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),y.envMapRotation.value.setFromMatrix4(EA.makeRotationFromEuler(As)),y.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function d(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function h(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,F,z){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*F,y.scale.value=z*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function v(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function g(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function S(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function b(y,x,F){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Xn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=F.texture,y.transmissionSamplerSize.value.set(F.width,F.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function R(y,x){x.matcap&&(y.matcap.value=x.matcap)}function w(y,x){const F=t.get(x).light;y.referencePosition.value.setFromMatrixPosition(F.matrixWorld),y.nearDistance.value=F.shadow.camera.near,y.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function AA(o,t,i,s){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(F,z){const O=z.program;s.uniformBlockBinding(F,O)}function p(F,z){let O=l[F.id];O===void 0&&(R(F),O=v(F),l[F.id]=O,F.addEventListener("dispose",y));const I=z.program;s.updateUBOMapping(F,I);const H=t.render.frame;u[F.id]!==H&&(S(F),u[F.id]=H)}function v(F){const z=g();F.__bindingPointIndex=z;const O=o.createBuffer(),I=F.__size,H=F.usage;return o.bindBuffer(o.UNIFORM_BUFFER,O),o.bufferData(o.UNIFORM_BUFFER,I,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,z,O),O}function g(){for(let F=0;F<h;F++)if(d.indexOf(F)===-1)return d.push(F),F;return At("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(F){const z=l[F.id],O=F.uniforms,I=F.__cache;o.bindBuffer(o.UNIFORM_BUFFER,z);for(let H=0,L=O.length;H<L;H++){const Z=Array.isArray(O[H])?O[H]:[O[H]];for(let A=0,N=Z.length;A<N;A++){const k=Z[A];if(b(k,H,A,I)===!0){const se=k.__offset,ie=Array.isArray(k.value)?k.value:[k.value];let pe=0;for(let fe=0;fe<ie.length;fe++){const P=ie[fe],G=w(P);typeof P=="number"||typeof P=="boolean"?(k.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,se+pe,k.__data)):P.isMatrix3?(k.__data[0]=P.elements[0],k.__data[1]=P.elements[1],k.__data[2]=P.elements[2],k.__data[3]=0,k.__data[4]=P.elements[3],k.__data[5]=P.elements[4],k.__data[6]=P.elements[5],k.__data[7]=0,k.__data[8]=P.elements[6],k.__data[9]=P.elements[7],k.__data[10]=P.elements[8],k.__data[11]=0):(P.toArray(k.__data,pe),pe+=G.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,se,k.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function b(F,z,O,I){const H=F.value,L=z+"_"+O;if(I[L]===void 0)return typeof H=="number"||typeof H=="boolean"?I[L]=H:I[L]=H.clone(),!0;{const Z=I[L];if(typeof H=="number"||typeof H=="boolean"){if(Z!==H)return I[L]=H,!0}else if(Z.equals(H)===!1)return Z.copy(H),!0}return!1}function R(F){const z=F.uniforms;let O=0;const I=16;for(let L=0,Z=z.length;L<Z;L++){const A=Array.isArray(z[L])?z[L]:[z[L]];for(let N=0,k=A.length;N<k;N++){const se=A[N],ie=Array.isArray(se.value)?se.value:[se.value];for(let pe=0,fe=ie.length;pe<fe;pe++){const P=ie[pe],G=w(P),ae=O%I,Me=ae%G.boundary,Se=ae+Me;O+=Me,Se!==0&&I-Se<G.storage&&(O+=I-Se),se.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=O,O+=G.storage}}}const H=O%I;return H>0&&(O+=I-H),F.__size=O,F.__cache={},this}function w(F){const z={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(z.boundary=4,z.storage=4):F.isVector2?(z.boundary=8,z.storage=8):F.isVector3||F.isColor?(z.boundary=16,z.storage=12):F.isVector4?(z.boundary=16,z.storage=16):F.isMatrix3?(z.boundary=48,z.storage=48):F.isMatrix4?(z.boundary=64,z.storage=64):F.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):st("WebGLRenderer: Unsupported uniform value type.",F),z}function y(F){const z=F.target;z.removeEventListener("dispose",y);const O=d.indexOf(z.__bindingPointIndex);d.splice(O,1),o.deleteBuffer(l[z.id]),delete l[z.id],delete u[z.id]}function x(){for(const F in l)o.deleteBuffer(l[F]);d=[],l={},u={}}return{bind:m,update:p,dispose:x}}const RA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zi=null;function CA(){return zi===null&&(zi=new MM(RA,16,16,Lr,va),zi.name="DFG_LUT",zi.minFilter=Pn,zi.magFilter=Pn,zi.wrapS=pa,zi.wrapT=pa,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}class wA{constructor(t={}){const{canvas:i=Zy(),context:s=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:S=!1,outputBufferType:b=mi}=t;this.isWebGLRenderer=!0;let R;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=s.getContextAttributes().alpha}else R=d;const w=b,y=new Set([Ph,Oh,Lh]),x=new Set([mi,Vi,Vo,ko,Dh,Uh]),F=new Uint32Array(4),z=new Int32Array(4);let O=null,I=null;const H=[],L=[];let Z=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let N=!1;this._outputColorSpace=hi;let k=0,se=0,ie=null,pe=-1,fe=null;const P=new nn,G=new nn;let ae=null;const Me=new Lt(0);let Se=0,U=i.width,ne=i.height,_e=1,Ae=null,Be=null;const te=new nn(0,0,U,ne),ue=new nn(0,0,U,ne);let Ne=!1;const ke=new iv;let He=!1,dt=!1;const Kt=new an,gt=new re,ht=new nn,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function Qt(){return ie===null?_e:1}let V=s;function Wt(T,W){return i.getContext(T,W)}try{const T={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${wh}`),i.addEventListener("webglcontextlost",nt,!1),i.addEventListener("webglcontextrestored",Ot,!1),i.addEventListener("webglcontextcreationerror",Mt,!1),V===null){const W="webgl2";if(V=Wt(W,T),V===null)throw Wt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw At("WebGLRenderer: "+T.message),T}let yt,Dt,We,D,M,q,he,xe,ce,Ze,Ce,je,tt,be,Ee,Fe,Pe,we,lt,X,Ue,Te,ze,ye;function ve(){yt=new C1(V),yt.init(),Te=new xA(V,yt),Dt=new x1(V,yt,t,Te),We=new _A(V,yt),Dt.reversedDepthBuffer&&S&&We.buffers.depth.setReversed(!0),D=new D1(V),M=new nA,q=new vA(V,yt,We,M,Dt,Te,D),he=new y1(A),xe=new R1(A),ce=new PM(V),ze=new _1(V,ce),Ze=new w1(V,ce,D,ze),Ce=new L1(V,Ze,ce,D),lt=new U1(V,Dt,q),Fe=new S1(M),je=new tA(A,he,xe,yt,Dt,ze,Fe),tt=new TA(A,M),be=new aA,Ee=new uA(yt),we=new g1(A,he,xe,We,Ce,R,m),Pe=new mA(A,Ce,Dt),ye=new AA(V,D,Dt,We),X=new v1(V,yt,D),Ue=new N1(V,yt,D),D.programs=je.programs,A.capabilities=Dt,A.extensions=yt,A.properties=M,A.renderLists=be,A.shadowMap=Pe,A.state=We,A.info=D}ve(),w!==mi&&(Z=new P1(w,i.width,i.height,l,u));const Re=new bA(A,V);this.xr=Re,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const T=yt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=yt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(T){T!==void 0&&(_e=T,this.setSize(U,ne,!1))},this.getSize=function(T){return T.set(U,ne)},this.setSize=function(T,W,oe=!0){if(Re.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}U=T,ne=W,i.width=Math.floor(T*_e),i.height=Math.floor(W*_e),oe===!0&&(i.style.width=T+"px",i.style.height=W+"px"),Z!==null&&Z.setSize(i.width,i.height),this.setViewport(0,0,T,W)},this.getDrawingBufferSize=function(T){return T.set(U*_e,ne*_e).floor()},this.setDrawingBufferSize=function(T,W,oe){U=T,ne=W,_e=oe,i.width=Math.floor(T*oe),i.height=Math.floor(W*oe),this.setViewport(0,0,T,W)},this.setEffects=function(T){if(w===mi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let W=0;W<T.length;W++)if(T[W].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Z.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(te)},this.setViewport=function(T,W,oe,$){T.isVector4?te.set(T.x,T.y,T.z,T.w):te.set(T,W,oe,$),We.viewport(P.copy(te).multiplyScalar(_e).round())},this.getScissor=function(T){return T.copy(ue)},this.setScissor=function(T,W,oe,$){T.isVector4?ue.set(T.x,T.y,T.z,T.w):ue.set(T,W,oe,$),We.scissor(G.copy(ue).multiplyScalar(_e).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(T){We.setScissorTest(Ne=T)},this.setOpaqueSort=function(T){Ae=T},this.setTransparentSort=function(T){Be=T},this.getClearColor=function(T){return T.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(T=!0,W=!0,oe=!0){let $=0;if(T){let K=!1;if(ie!==null){const De=ie.texture.format;K=y.has(De)}if(K){const De=ie.texture.type,Ie=x.has(De),Le=we.getClearColor(),Ge=we.getClearAlpha(),Xe=Le.r,Je=Le.g,qe=Le.b;Ie?(F[0]=Xe,F[1]=Je,F[2]=qe,F[3]=Ge,V.clearBufferuiv(V.COLOR,0,F)):(z[0]=Xe,z[1]=Je,z[2]=qe,z[3]=Ge,V.clearBufferiv(V.COLOR,0,z))}else $|=V.COLOR_BUFFER_BIT}W&&($|=V.DEPTH_BUFFER_BIT),oe&&($|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",nt,!1),i.removeEventListener("webglcontextrestored",Ot,!1),i.removeEventListener("webglcontextcreationerror",Mt,!1),we.dispose(),be.dispose(),Ee.dispose(),M.dispose(),he.dispose(),xe.dispose(),Ce.dispose(),ze.dispose(),ye.dispose(),je.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",Os),Re.removeEventListener("sessionend",Hr),Di.stop()};function nt(T){T.preventDefault(),Fg("WebGLRenderer: Context Lost."),N=!0}function Ot(){Fg("WebGLRenderer: Context Restored."),N=!1;const T=D.autoReset,W=Pe.enabled,oe=Pe.autoUpdate,$=Pe.needsUpdate,K=Pe.type;ve(),D.autoReset=T,Pe.enabled=W,Pe.autoUpdate=oe,Pe.needsUpdate=$,Pe.type=K}function Mt(T){At("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Dn(T){const W=T.target;W.removeEventListener("dispose",Dn),gi(W)}function gi(T){Qo(T),M.remove(T)}function Qo(T){const W=M.get(T).programs;W!==void 0&&(W.forEach(function(oe){je.releaseProgram(oe)}),T.isShaderMaterial&&je.releaseShaderCache(T))}this.renderBufferDirect=function(T,W,oe,$,K,De){W===null&&(W=Rt);const Ie=K.isMesh&&K.matrixWorld.determinant()<0,Le=is(T,W,oe,$,K);We.setMaterial($,Ie);let Ge=oe.index,Xe=1;if($.wireframe===!0){if(Ge=Ze.getWireframeAttribute(oe),Ge===void 0)return;Xe=2}const Je=oe.drawRange,qe=oe.attributes.position;let $e=Je.start*Xe,Ct=(Je.start+Je.count)*Xe;De!==null&&($e=Math.max($e,De.start*Xe),Ct=Math.min(Ct,(De.start+De.count)*Xe)),Ge!==null?($e=Math.max($e,0),Ct=Math.min(Ct,Ge.count)):qe!=null&&($e=Math.max($e,0),Ct=Math.min(Ct,qe.count));const Yt=Ct-$e;if(Yt<0||Yt===1/0)return;ze.setup(K,$,Le,oe,Ge);let jt,Ut=X;if(Ge!==null&&(jt=ce.get(Ge),Ut=Ue,Ut.setIndex(jt)),K.isMesh)$.wireframe===!0?(We.setLineWidth($.wireframeLinewidth*Qt()),Ut.setMode(V.LINES)):Ut.setMode(V.TRIANGLES);else if(K.isLine){let Ke=$.linewidth;Ke===void 0&&(Ke=1),We.setLineWidth(Ke*Qt()),K.isLineSegments?Ut.setMode(V.LINES):K.isLineLoop?Ut.setMode(V.LINE_LOOP):Ut.setMode(V.LINE_STRIP)}else K.isPoints?Ut.setMode(V.POINTS):K.isSprite&&Ut.setMode(V.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)jo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ut.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(yt.get("WEBGL_multi_draw"))Ut.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Ke=K._multiDrawStarts,wt=K._multiDrawCounts,it=K._multiDrawCount,Sn=Ge?ce.get(Ge).bytesPerElement:1,ji=M.get($).currentProgram.getUniforms();for(let yn=0;yn<it;yn++)ji.setValue(V,"_gl_DrawID",yn),Ut.render(Ke[yn]/Sn,wt[yn])}else if(K.isInstancedMesh)Ut.renderInstances($e,Yt,K.count);else if(oe.isInstancedBufferGeometry){const Ke=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,wt=Math.min(oe.instanceCount,Ke);Ut.renderInstances($e,Yt,wt)}else Ut.render($e,Yt)};function Ir(T,W,oe){T.transparent===!0&&T.side===ha&&T.forceSinglePass===!1?(T.side=Xn,T.needsUpdate=!0,zs(T,W,oe),T.side=ns,T.needsUpdate=!0,zs(T,W,oe),T.side=ha):zs(T,W,oe)}this.compile=function(T,W,oe=null){oe===null&&(oe=T),I=Ee.get(oe),I.init(W),L.push(I),oe.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(I.pushLight(K),K.castShadow&&I.pushShadow(K))}),T!==oe&&T.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(I.pushLight(K),K.castShadow&&I.pushShadow(K))}),I.setupLights();const $=new Set;return T.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const De=K.material;if(De)if(Array.isArray(De))for(let Ie=0;Ie<De.length;Ie++){const Le=De[Ie];Ir(Le,oe,K),$.add(Le)}else Ir(De,oe,K),$.add(De)}),I=L.pop(),$},this.compileAsync=function(T,W,oe=null){const $=this.compile(T,W,oe);return new Promise(K=>{function De(){if($.forEach(function(Ie){M.get(Ie).currentProgram.isReady()&&$.delete(Ie)}),$.size===0){K(T);return}setTimeout(De,10)}yt.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let Ls=null;function Br(T){Ls&&Ls(T)}function Os(){Di.stop()}function Hr(){Di.start()}const Di=new ov;Di.setAnimationLoop(Br),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(T){Ls=T,Re.setAnimationLoop(T),T===null?Di.stop():Di.start()},Re.addEventListener("sessionstart",Os),Re.addEventListener("sessionend",Hr),this.render=function(T,W){if(W!==void 0&&W.isCamera!==!0){At("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;const oe=Re.enabled===!0&&Re.isPresenting===!0,$=Z!==null&&(ie===null||oe)&&Z.begin(A,ie);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Z===null||Z.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(W),W=Re.getCamera()),T.isScene===!0&&T.onBeforeRender(A,T,W,ie),I=Ee.get(T,L.length),I.init(W),L.push(I),Kt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ke.setFromProjectionMatrix(Kt,Bi,W.reversedDepth),dt=this.localClippingEnabled,He=Fe.init(this.clippingPlanes,dt),O=be.get(T,H.length),O.init(),H.push(O),Re.enabled===!0&&Re.isPresenting===!0){const Ie=A.xr.getDepthSensingMesh();Ie!==null&&ni(Ie,W,-1/0,A.sortObjects)}ni(T,W,0,A.sortObjects),O.finish(),A.sortObjects===!0&&O.sort(Ae,Be),rt=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,rt&&we.addToRenderList(O,T),this.info.render.frame++,He===!0&&Fe.beginShadows();const K=I.state.shadowsArray;if(Pe.render(K,T,W),He===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&Z.hasRenderPass())===!1){const Ie=O.opaque,Le=O.transmissive;if(I.setupLights(),W.isArrayCamera){const Ge=W.cameras;if(Le.length>0)for(let Xe=0,Je=Ge.length;Xe<Je;Xe++){const qe=Ge[Xe];xn(Ie,Le,T,qe)}rt&&we.render(T);for(let Xe=0,Je=Ge.length;Xe<Je;Xe++){const qe=Ge[Xe];sn(O,T,qe,qe.viewport)}}else Le.length>0&&xn(Ie,Le,T,W),rt&&we.render(T),sn(O,T,W)}ie!==null&&se===0&&(q.updateMultisampleRenderTarget(ie),q.updateRenderTargetMipmap(ie)),$&&Z.end(A),T.isScene===!0&&T.onAfterRender(A,T,W),ze.resetDefaultState(),pe=-1,fe=null,L.pop(),L.length>0?(I=L[L.length-1],He===!0&&Fe.setGlobalState(A.clippingPlanes,I.state.camera)):I=null,H.pop(),H.length>0?O=H[H.length-1]:O=null};function ni(T,W,oe,$){if(T.visible===!1)return;if(T.layers.test(W.layers)){if(T.isGroup)oe=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(W);else if(T.isLight)I.pushLight(T),T.castShadow&&I.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ke.intersectsSprite(T)){$&&ht.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Kt);const Ie=Ce.update(T),Le=T.material;Le.visible&&O.push(T,Ie,Le,oe,ht.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ke.intersectsObject(T))){const Ie=Ce.update(T),Le=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ht.copy(T.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),ht.copy(Ie.boundingSphere.center)),ht.applyMatrix4(T.matrixWorld).applyMatrix4(Kt)),Array.isArray(Le)){const Ge=Ie.groups;for(let Xe=0,Je=Ge.length;Xe<Je;Xe++){const qe=Ge[Xe],$e=Le[qe.materialIndex];$e&&$e.visible&&O.push(T,Ie,$e,oe,ht.z,qe)}}else Le.visible&&O.push(T,Ie,Le,oe,ht.z,null)}}const De=T.children;for(let Ie=0,Le=De.length;Ie<Le;Ie++)ni(De[Ie],W,oe,$)}function sn(T,W,oe,$){const{opaque:K,transmissive:De,transparent:Ie}=T;I.setupLightsView(oe),He===!0&&Fe.setGlobalState(A.clippingPlanes,oe),$&&We.viewport(P.copy($)),K.length>0&&_i(K,W,oe),De.length>0&&_i(De,W,oe),Ie.length>0&&_i(Ie,W,oe),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function xn(T,W,oe,$){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[$.id]===void 0){const $e=yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[$.id]=new Gi(1,1,{generateMipmaps:!0,type:$e?va:mi,minFilter:Ns,samples:Dt.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace})}const De=I.state.transmissionRenderTarget[$.id],Ie=$.viewport||P;De.setSize(Ie.z*A.transmissionResolutionScale,Ie.w*A.transmissionResolutionScale);const Le=A.getRenderTarget(),Ge=A.getActiveCubeFace(),Xe=A.getActiveMipmapLevel();A.setRenderTarget(De),A.getClearColor(Me),Se=A.getClearAlpha(),Se<1&&A.setClearColor(16777215,.5),A.clear(),rt&&we.render(oe);const Je=A.toneMapping;A.toneMapping=Hi;const qe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),I.setupLightsView($),He===!0&&Fe.setGlobalState(A.clippingPlanes,$),_i(T,oe,$),q.updateMultisampleRenderTarget(De),q.updateRenderTargetMipmap(De),yt.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Ct=0,Yt=W.length;Ct<Yt;Ct++){const jt=W[Ct],{object:Ut,geometry:Ke,material:wt,group:it}=jt;if(wt.side===ha&&Ut.layers.test($.layers)){const Sn=wt.side;wt.side=Xn,wt.needsUpdate=!0,Ps(Ut,oe,$,Ke,wt,it),wt.side=Sn,wt.needsUpdate=!0,$e=!0}}$e===!0&&(q.updateMultisampleRenderTarget(De),q.updateRenderTargetMipmap(De))}A.setRenderTarget(Le,Ge,Xe),A.setClearColor(Me,Se),qe!==void 0&&($.viewport=qe),A.toneMapping=Je}function _i(T,W,oe){const $=W.isScene===!0?W.overrideMaterial:null;for(let K=0,De=T.length;K<De;K++){const Ie=T[K],{object:Le,geometry:Ge,group:Xe}=Ie;let Je=Ie.material;Je.allowOverride===!0&&$!==null&&(Je=$),Le.layers.test(oe.layers)&&Ps(Le,W,oe,Ge,Je,Xe)}}function Ps(T,W,oe,$,K,De){T.onBeforeRender(A,W,oe,$,K,De),T.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),K.onBeforeRender(A,W,oe,$,T,De),K.transparent===!0&&K.side===ha&&K.forceSinglePass===!1?(K.side=Xn,K.needsUpdate=!0,A.renderBufferDirect(oe,W,$,K,T,De),K.side=ns,K.needsUpdate=!0,A.renderBufferDirect(oe,W,$,K,T,De),K.side=ha):A.renderBufferDirect(oe,W,$,K,T,De),T.onAfterRender(A,W,oe,$,K,De)}function zs(T,W,oe){W.isScene!==!0&&(W=Rt);const $=M.get(T),K=I.state.lights,De=I.state.shadowsArray,Ie=K.state.version,Le=je.getParameters(T,K.state,De,W,oe),Ge=je.getProgramCacheKey(Le);let Xe=$.programs;$.environment=T.isMeshStandardMaterial?W.environment:null,$.fog=W.fog,$.envMap=(T.isMeshStandardMaterial?xe:he).get(T.envMap||$.environment),$.envMapRotation=$.environment!==null&&T.envMap===null?W.environmentRotation:T.envMapRotation,Xe===void 0&&(T.addEventListener("dispose",Dn),Xe=new Map,$.programs=Xe);let Je=Xe.get(Ge);if(Je!==void 0){if($.currentProgram===Je&&$.lightsStateVersion===Ie)return Gr(T,Le),Je}else Le.uniforms=je.getUniforms(T),T.onBeforeCompile(Le,A),Je=je.acquireProgram(Le,Ge),Xe.set(Ge,Je),$.uniforms=Le.uniforms;const qe=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(qe.clippingPlanes=Fe.uniform),Gr(T,Le),$.needsLights=Ma(T),$.lightsStateVersion=Ie,$.needsLights&&(qe.ambientLightColor.value=K.state.ambient,qe.lightProbe.value=K.state.probe,qe.directionalLights.value=K.state.directional,qe.directionalLightShadows.value=K.state.directionalShadow,qe.spotLights.value=K.state.spot,qe.spotLightShadows.value=K.state.spotShadow,qe.rectAreaLights.value=K.state.rectArea,qe.ltc_1.value=K.state.rectAreaLTC1,qe.ltc_2.value=K.state.rectAreaLTC2,qe.pointLights.value=K.state.point,qe.pointLightShadows.value=K.state.pointShadow,qe.hemisphereLights.value=K.state.hemi,qe.directionalShadowMap.value=K.state.directionalShadowMap,qe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,qe.spotShadowMap.value=K.state.spotShadowMap,qe.spotLightMatrix.value=K.state.spotLightMatrix,qe.spotLightMap.value=K.state.spotLightMap,qe.pointShadowMap.value=K.state.pointShadowMap,qe.pointShadowMatrix.value=K.state.pointShadowMatrix),$.currentProgram=Je,$.uniformsList=null,Je}function Jo(T){if(T.uniformsList===null){const W=T.currentProgram.getUniforms();T.uniformsList=zc.seqWithValue(W.seq,T.uniforms)}return T.uniformsList}function Gr(T,W){const oe=M.get(T);oe.outputColorSpace=W.outputColorSpace,oe.batching=W.batching,oe.batchingColor=W.batchingColor,oe.instancing=W.instancing,oe.instancingColor=W.instancingColor,oe.instancingMorph=W.instancingMorph,oe.skinning=W.skinning,oe.morphTargets=W.morphTargets,oe.morphNormals=W.morphNormals,oe.morphColors=W.morphColors,oe.morphTargetsCount=W.morphTargetsCount,oe.numClippingPlanes=W.numClippingPlanes,oe.numIntersection=W.numClipIntersection,oe.vertexAlphas=W.vertexAlphas,oe.vertexTangents=W.vertexTangents,oe.toneMapping=W.toneMapping}function is(T,W,oe,$,K){W.isScene!==!0&&(W=Rt),q.resetTextureUnits();const De=W.fog,Ie=$.isMeshStandardMaterial?W.environment:null,Le=ie===null?A.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Or,Ge=($.isMeshStandardMaterial?xe:he).get($.envMap||Ie),Xe=$.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,Je=!!oe.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),qe=!!oe.morphAttributes.position,$e=!!oe.morphAttributes.normal,Ct=!!oe.morphAttributes.color;let Yt=Hi;$.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Yt=A.toneMapping);const jt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Ut=jt!==void 0?jt.length:0,Ke=M.get($),wt=I.state.lights;if(He===!0&&(dt===!0||T!==fe)){const bn=T===fe&&$.id===pe;Fe.setState($,T,bn)}let it=!1;$.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==wt.state.version||Ke.outputColorSpace!==Le||K.isBatchedMesh&&Ke.batching===!1||!K.isBatchedMesh&&Ke.batching===!0||K.isBatchedMesh&&Ke.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Ke.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Ke.instancing===!1||!K.isInstancedMesh&&Ke.instancing===!0||K.isSkinnedMesh&&Ke.skinning===!1||!K.isSkinnedMesh&&Ke.skinning===!0||K.isInstancedMesh&&Ke.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ke.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ke.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ke.instancingMorph===!1&&K.morphTexture!==null||Ke.envMap!==Ge||$.fog===!0&&Ke.fog!==De||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Fe.numPlanes||Ke.numIntersection!==Fe.numIntersection)||Ke.vertexAlphas!==Xe||Ke.vertexTangents!==Je||Ke.morphTargets!==qe||Ke.morphNormals!==$e||Ke.morphColors!==Ct||Ke.toneMapping!==Yt||Ke.morphTargetsCount!==Ut)&&(it=!0):(it=!0,Ke.__version=$.version);let Sn=Ke.currentProgram;it===!0&&(Sn=zs($,W,K));let ji=!1,yn=!1,ii=!1;const Pt=Sn.getUniforms(),Mn=Ke.uniforms;if(We.useProgram(Sn.program)&&(ji=!0,yn=!0,ii=!0),$.id!==pe&&(pe=$.id,yn=!0),ji||fe!==T){We.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Pt.setValue(V,"projectionMatrix",T.projectionMatrix),Pt.setValue(V,"viewMatrix",T.matrixWorldInverse);const En=Pt.map.cameraPosition;En!==void 0&&En.setValue(V,gt.setFromMatrixPosition(T.matrixWorld)),Dt.logarithmicDepthBuffer&&Pt.setValue(V,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Pt.setValue(V,"isOrthographic",T.isOrthographicCamera===!0),fe!==T&&(fe=T,yn=!0,ii=!0)}if(Ke.needsLights&&(wt.state.directionalShadowMap.length>0&&Pt.setValue(V,"directionalShadowMap",wt.state.directionalShadowMap,q),wt.state.spotShadowMap.length>0&&Pt.setValue(V,"spotShadowMap",wt.state.spotShadowMap,q),wt.state.pointShadowMap.length>0&&Pt.setValue(V,"pointShadowMap",wt.state.pointShadowMap,q)),K.isSkinnedMesh){Pt.setOptional(V,K,"bindMatrix"),Pt.setOptional(V,K,"bindMatrixInverse");const bn=K.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Pt.setValue(V,"boneTexture",bn.boneTexture,q))}K.isBatchedMesh&&(Pt.setOptional(V,K,"batchingTexture"),Pt.setValue(V,"batchingTexture",K._matricesTexture,q),Pt.setOptional(V,K,"batchingIdTexture"),Pt.setValue(V,"batchingIdTexture",K._indirectTexture,q),Pt.setOptional(V,K,"batchingColorTexture"),K._colorsTexture!==null&&Pt.setValue(V,"batchingColorTexture",K._colorsTexture,q));const fn=oe.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&lt.update(K,oe,Sn),(yn||Ke.receiveShadow!==K.receiveShadow)&&(Ke.receiveShadow=K.receiveShadow,Pt.setValue(V,"receiveShadow",K.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Mn.envMap.value=Ge,Mn.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&W.environment!==null&&(Mn.envMapIntensity.value=W.environmentIntensity),Mn.dfgLUT!==void 0&&(Mn.dfgLUT.value=CA()),yn&&(Pt.setValue(V,"toneMappingExposure",A.toneMappingExposure),Ke.needsLights&&Vr(Mn,ii),De&&$.fog===!0&&tt.refreshFogUniforms(Mn,De),tt.refreshMaterialUniforms(Mn,$,_e,ne,I.state.transmissionRenderTarget[T.id]),zc.upload(V,Jo(Ke),Mn,q)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(zc.upload(V,Jo(Ke),Mn,q),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Pt.setValue(V,"center",K.center),Pt.setValue(V,"modelViewMatrix",K.modelViewMatrix),Pt.setValue(V,"normalMatrix",K.normalMatrix),Pt.setValue(V,"modelMatrix",K.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const bn=$.uniformsGroups;for(let En=0,Fs=bn.length;En<Fs;En++){const vi=bn[En];ye.update(vi,Sn),ye.bind(vi,Sn)}}return Sn}function Vr(T,W){T.ambientLightColor.needsUpdate=W,T.lightProbe.needsUpdate=W,T.directionalLights.needsUpdate=W,T.directionalLightShadows.needsUpdate=W,T.pointLights.needsUpdate=W,T.pointLightShadows.needsUpdate=W,T.spotLights.needsUpdate=W,T.spotLightShadows.needsUpdate=W,T.rectAreaLights.needsUpdate=W,T.hemisphereLights.needsUpdate=W}function Ma(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(T,W,oe){const $=M.get(T);$.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),M.get(T.texture).__webglTexture=W,M.get(T.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:oe,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,W){const oe=M.get(T);oe.__webglFramebuffer=W,oe.__useDefaultFramebuffer=W===void 0};const ba=V.createFramebuffer();this.setRenderTarget=function(T,W=0,oe=0){ie=T,k=W,se=oe;let $=null,K=!1,De=!1;if(T){const Le=M.get(T);if(Le.__useDefaultFramebuffer!==void 0){We.bindFramebuffer(V.FRAMEBUFFER,Le.__webglFramebuffer),P.copy(T.viewport),G.copy(T.scissor),ae=T.scissorTest,We.viewport(P),We.scissor(G),We.setScissorTest(ae),pe=-1;return}else if(Le.__webglFramebuffer===void 0)q.setupRenderTarget(T);else if(Le.__hasExternalTextures)q.rebindTextures(T,M.get(T.texture).__webglTexture,M.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Je=T.depthTexture;if(Le.__boundDepthTexture!==Je){if(Je!==null&&M.has(Je)&&(T.width!==Je.image.width||T.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(T)}}const Ge=T.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(De=!0);const Xe=M.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Xe[W])?$=Xe[W][oe]:$=Xe[W],K=!0):T.samples>0&&q.useMultisampledRTT(T)===!1?$=M.get(T).__webglMultisampledFramebuffer:Array.isArray(Xe)?$=Xe[oe]:$=Xe,P.copy(T.viewport),G.copy(T.scissor),ae=T.scissorTest}else P.copy(te).multiplyScalar(_e).floor(),G.copy(ue).multiplyScalar(_e).floor(),ae=Ne;if(oe!==0&&($=ba),We.bindFramebuffer(V.FRAMEBUFFER,$)&&We.drawBuffers(T,$),We.viewport(P),We.scissor(G),We.setScissorTest(ae),K){const Le=M.get(T.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+W,Le.__webglTexture,oe)}else if(De){const Le=W;for(let Ge=0;Ge<T.textures.length;Ge++){const Xe=M.get(T.textures[Ge]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ge,Xe.__webglTexture,oe,Le)}}else if(T!==null&&oe!==0){const Le=M.get(T.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Le.__webglTexture,oe)}pe=-1},this.readRenderTargetPixels=function(T,W,oe,$,K,De,Ie,Le=0){if(!(T&&T.isWebGLRenderTarget)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=M.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ge=Ge[Ie]),Ge){We.bindFramebuffer(V.FRAMEBUFFER,Ge);try{const Xe=T.textures[Le],Je=Xe.format,qe=Xe.type;if(!Dt.textureFormatReadable(Je)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Dt.textureTypeReadable(qe)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=T.width-$&&oe>=0&&oe<=T.height-K&&(T.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Le),V.readPixels(W,oe,$,K,Te.convert(Je),Te.convert(qe),De))}finally{const Xe=ie!==null?M.get(ie).__webglFramebuffer:null;We.bindFramebuffer(V.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(T,W,oe,$,K,De,Ie,Le=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=M.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ge=Ge[Ie]),Ge)if(W>=0&&W<=T.width-$&&oe>=0&&oe<=T.height-K){We.bindFramebuffer(V.FRAMEBUFFER,Ge);const Xe=T.textures[Le],Je=Xe.format,qe=Xe.type;if(!Dt.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Dt.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,$e),V.bufferData(V.PIXEL_PACK_BUFFER,De.byteLength,V.STREAM_READ),T.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Le),V.readPixels(W,oe,$,K,Te.convert(Je),Te.convert(qe),0);const Ct=ie!==null?M.get(ie).__webglFramebuffer:null;We.bindFramebuffer(V.FRAMEBUFFER,Ct);const Yt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Ky(V,Yt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,$e),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,De),V.deleteBuffer($e),V.deleteSync(Yt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,W=null,oe=0){const $=Math.pow(2,-oe),K=Math.floor(T.image.width*$),De=Math.floor(T.image.height*$),Ie=W!==null?W.x:0,Le=W!==null?W.y:0;q.setTexture2D(T,0),V.copyTexSubImage2D(V.TEXTURE_2D,oe,0,0,Ie,Le,K,De),We.unbindTexture()};const as=V.createFramebuffer(),Ea=V.createFramebuffer();this.copyTextureToTexture=function(T,W,oe=null,$=null,K=0,De=null){De===null&&(K!==0?(jo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),De=K,K=0):De=0);let Ie,Le,Ge,Xe,Je,qe,$e,Ct,Yt;const jt=T.isCompressedTexture?T.mipmaps[De]:T.image;if(oe!==null)Ie=oe.max.x-oe.min.x,Le=oe.max.y-oe.min.y,Ge=oe.isBox3?oe.max.z-oe.min.z:1,Xe=oe.min.x,Je=oe.min.y,qe=oe.isBox3?oe.min.z:0;else{const fn=Math.pow(2,-K);Ie=Math.floor(jt.width*fn),Le=Math.floor(jt.height*fn),T.isDataArrayTexture?Ge=jt.depth:T.isData3DTexture?Ge=Math.floor(jt.depth*fn):Ge=1,Xe=0,Je=0,qe=0}$!==null?($e=$.x,Ct=$.y,Yt=$.z):($e=0,Ct=0,Yt=0);const Ut=Te.convert(W.format),Ke=Te.convert(W.type);let wt;W.isData3DTexture?(q.setTexture3D(W,0),wt=V.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(q.setTexture2DArray(W,0),wt=V.TEXTURE_2D_ARRAY):(q.setTexture2D(W,0),wt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,W.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,W.unpackAlignment);const it=V.getParameter(V.UNPACK_ROW_LENGTH),Sn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),ji=V.getParameter(V.UNPACK_SKIP_PIXELS),yn=V.getParameter(V.UNPACK_SKIP_ROWS),ii=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,jt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,jt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Xe),V.pixelStorei(V.UNPACK_SKIP_ROWS,Je),V.pixelStorei(V.UNPACK_SKIP_IMAGES,qe);const Pt=T.isDataArrayTexture||T.isData3DTexture,Mn=W.isDataArrayTexture||W.isData3DTexture;if(T.isDepthTexture){const fn=M.get(T),bn=M.get(W),En=M.get(fn.__renderTarget),Fs=M.get(bn.__renderTarget);We.bindFramebuffer(V.READ_FRAMEBUFFER,En.__webglFramebuffer),We.bindFramebuffer(V.DRAW_FRAMEBUFFER,Fs.__webglFramebuffer);for(let vi=0;vi<Ge;vi++)Pt&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,M.get(T).__webglTexture,K,qe+vi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,M.get(W).__webglTexture,De,Yt+vi)),V.blitFramebuffer(Xe,Je,Ie,Le,$e,Ct,Ie,Le,V.DEPTH_BUFFER_BIT,V.NEAREST);We.bindFramebuffer(V.READ_FRAMEBUFFER,null),We.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(K!==0||T.isRenderTargetTexture||M.has(T)){const fn=M.get(T),bn=M.get(W);We.bindFramebuffer(V.READ_FRAMEBUFFER,as),We.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ea);for(let En=0;En<Ge;En++)Pt?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,fn.__webglTexture,K,qe+En):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,fn.__webglTexture,K),Mn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,bn.__webglTexture,De,Yt+En):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,bn.__webglTexture,De),K!==0?V.blitFramebuffer(Xe,Je,Ie,Le,$e,Ct,Ie,Le,V.COLOR_BUFFER_BIT,V.NEAREST):Mn?V.copyTexSubImage3D(wt,De,$e,Ct,Yt+En,Xe,Je,Ie,Le):V.copyTexSubImage2D(wt,De,$e,Ct,Xe,Je,Ie,Le);We.bindFramebuffer(V.READ_FRAMEBUFFER,null),We.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Mn?T.isDataTexture||T.isData3DTexture?V.texSubImage3D(wt,De,$e,Ct,Yt,Ie,Le,Ge,Ut,Ke,jt.data):W.isCompressedArrayTexture?V.compressedTexSubImage3D(wt,De,$e,Ct,Yt,Ie,Le,Ge,Ut,jt.data):V.texSubImage3D(wt,De,$e,Ct,Yt,Ie,Le,Ge,Ut,Ke,jt):T.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,De,$e,Ct,Ie,Le,Ut,Ke,jt.data):T.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,De,$e,Ct,jt.width,jt.height,Ut,jt.data):V.texSubImage2D(V.TEXTURE_2D,De,$e,Ct,Ie,Le,Ut,Ke,jt);V.pixelStorei(V.UNPACK_ROW_LENGTH,it),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Sn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ji),V.pixelStorei(V.UNPACK_SKIP_ROWS,yn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ii),De===0&&W.generateMipmaps&&V.generateMipmap(wt),We.unbindTexture()},this.initRenderTarget=function(T){M.get(T).__webglFramebuffer===void 0&&q.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?q.setTextureCube(T,0):T.isData3DTexture?q.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?q.setTexture2DArray(T,0):q.setTexture2D(T,0),We.unbindTexture()},this.resetState=function(){k=0,se=0,ie=null,We.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(t),i.unpackColorSpace=bt._getUnpackColorSpace()}}const NA=({rotation:o="auto"})=>{const t=_n.useRef(null);return _n.useEffect(()=>{if(!t.current)return;const i=new yM;i.fog=new Bh(657930,.002);const s=new pi(75,window.innerWidth/window.innerHeight,.1,2e3);s.position.z=1e3;const l=new wA({canvas:t.current,alpha:!0,antialias:!0});l.setSize(window.innerWidth,window.innerHeight),l.setPixelRatio(Math.min(window.devicePixelRatio,2));const u=L=>{const Z=document.createElement("canvas");Z.width=64,Z.height=64;const A=Z.getContext("2d");if(!A)return new Nn;if(A.save(),A.translate(32,32),A.rotate(0),A.translate(-32,-32),L==="star"){const k=A.createRadialGradient(32,32,0,32,32,32);k.addColorStop(0,"rgba(255, 230, 0, 1)"),k.addColorStop(1,"rgba(0, 0, 0, 0)"),A.fillStyle=k,A.beginPath(),A.moveTo(32,0),A.quadraticCurveTo(32,32,64,32),A.quadraticCurveTo(32,32,32,64),A.quadraticCurveTo(32,32,0,32),A.quadraticCurveTo(32,32,32,0),A.fill()}else A.fillStyle="#FFE600",A.fillRect(10,20,10,24),A.fillRect(44,20,10,24),A.fillRect(20,30,24,4);A.restore();const N=new RM(Z);return N.needsUpdate=!0,N},d=(L,Z,A)=>{const N=new Ni,k=new Float32Array(Z*3);for(let ie=0;ie<Z*3;ie++)k[ie]=(Math.random()-.5)*3e3;N.setAttribute("position",new wi(k,3));const se=new av({size:A,map:L,transparent:!0,opacity:.8,blending:Ud,depthWrite:!1});return new AM(N,se)};let h=u("star"),m=u("dumbbell");const p=window.innerWidth<768,v=p?800:1500,g=p?150:300,S=d(h,v,15),b=d(m,g,20);i.add(S),i.add(b);let R=0,w=0,y=window.innerWidth/2,x=window.innerHeight/2;const F=L=>{R=L.clientX-y,w=L.clientY-x};document.addEventListener("mousemove",F);const z=new LM;let O;const I=()=>{const L=z.getElapsedTime();o==="auto"?(S.rotation.y=L*.05+R*5e-4,S.rotation.x=L*.02+w*5e-4,b.rotation.y=L*.03+R*5e-4,b.rotation.x=L*.02+w*5e-4):(S.rotation.y=R*5e-4,S.rotation.x=w*5e-4,b.rotation.y=R*5e-4,b.rotation.x=w*5e-4),S.position.y=Math.sin(L*.2)*10+w*.05,b.position.y=Math.cos(L*.3)*15+w*.05,l.render(i,s),O=requestAnimationFrame(I)};I();const H=()=>{const L=window.innerWidth,Z=window.innerHeight;y=L/2,x=Z/2,s.aspect=L/Z,s.updateProjectionMatrix(),l.setSize(L,Z)};return window.addEventListener("resize",H),()=>{document.removeEventListener("mousemove",F),window.removeEventListener("resize",H),cancelAnimationFrame(O),S.geometry.dispose(),S.material.dispose(),b.geometry.dispose(),b.material.dispose(),l.dispose()}},[o]),C.jsx("canvas",{ref:t,className:"fixed inset-0 z-0 pointer-events-none"})};function DA(){return C.jsxs("div",{className:"bg-fk-dark min-h-screen text-white font-montserrat overflow-x-hidden",children:[C.jsx(NA,{rotation:"auto"}),C.jsx(fy,{}),C.jsxs("main",{children:[C.jsx(dy,{}),C.jsx(hy,{}),C.jsx(ly,{}),C.jsx(my,{}),C.jsx(py,{}),C.jsx(cy,{})]}),C.jsx(uy,{})]})}TS.createRoot(document.getElementById("root")).render(C.jsx(_n.StrictMode,{children:C.jsx(DA,{})}));
