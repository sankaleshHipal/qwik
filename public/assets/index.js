(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=globalThis,X=H.ShadowRoot&&(H.ShadyCSS===void 0||H.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol(),Q=new WeakMap;let de=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==G)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(X&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Q.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Q.set(t,e))}return e}toString(){return this.cssText}};const _e=o=>new de(typeof o=="string"?o:o+"",void 0,G),U=(o,...e)=>{const t=o.length===1?o[0]:e.reduce((i,s,r)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[r+1],o[0]);return new de(t,o,G)},ve=(o,e)=>{if(X)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=H.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,o.appendChild(i)}},ee=X?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return _e(t)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ae,defineProperty:we,getOwnPropertyDescriptor:xe,getOwnPropertyNames:Ee,getOwnPropertySymbols:Pe,getPrototypeOf:Se}=Object,b=globalThis,te=b.trustedTypes,Ce=te?te.emptyScript:"",V=b.reactiveElementPolyfillSupport,C=(o,e)=>o,R={toAttribute(o,e){switch(e){case Boolean:o=o?Ce:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},Z=(o,e)=>!Ae(o,e),se={attribute:!0,type:String,converter:R,reflect:!1,hasChanged:Z};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),b.litPropertyMetadata??(b.litPropertyMetadata=new WeakMap);class A extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=se){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&we(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:r}=xe(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get(){return s==null?void 0:s.call(this)},set(n){const l=s==null?void 0:s.call(this);r.call(this,n),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??se}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;const e=Se(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){const t=this.properties,i=[...Ee(t),...Pe(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(ee(s))}else e!==void 0&&t.push(ee(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$ES(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$E_??(this._$E_=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$E_)==null||t.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ve(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$E_)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$E_)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t){var r;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const n=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:R).toAttribute(t,i.type);this._$Em=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(e,t){var r;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const n=i.getPropertyOptions(s),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)==null?void 0:r.fromAttribute)!==void 0?n.converter:R;this._$Em=s,this[s]=l.fromAttribute(t,n.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??Z)(this[e],t))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$ET??(this._$ET=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,n]of s)n.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.C(r,this[r],n)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$E_)==null||i.forEach(s=>{var r;return(r=s.hostUpdate)==null?void 0:r.call(s)}),this.update(t)):this._$Ej()}catch(s){throw e=!1,this._$Ej(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$E_)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$ET&&(this._$ET=this._$ET.forEach(t=>this._$EO(t,this[t]))),this._$Ej()}updated(e){}firstUpdated(e){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[C("elementProperties")]=new Map,A[C("finalized")]=new Map,V==null||V({ReactiveElement:A}),(b.reactiveElementVersions??(b.reactiveElementVersions=[])).push("2.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=globalThis,B=O.trustedTypes,ie=B?B.createPolicy("lit-html",{createHTML:o=>o}):void 0,pe="$lit$",$=`lit$${(Math.random()+"").slice(9)}$`,fe="?"+$,Oe=`<${fe}>`,v=document,I=()=>v.createComment(""),N=o=>o===null||typeof o!="object"&&typeof o!="function",ue=Array.isArray,Ie=o=>ue(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",q=`[ 	
\f\r]`,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,oe=/-->/g,re=/>/g,y=RegExp(`>|${q}(?:([^\\s"'>=/]+)(${q}*=${q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ne=/'/g,ae=/"/g,ge=/^(?:script|style|textarea|title)$/i,Ne=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),f=Ne(1),w=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),le=new WeakMap,_=v.createTreeWalker(v,129);function me(o,e){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return ie!==void 0?ie.createHTML(e):e}const Te=(o,e)=>{const t=o.length-1,i=[];let s,r=e===2?"<svg>":"",n=S;for(let l=0;l<t;l++){const a=o[l];let h,p,c=-1,u=0;for(;u<a.length&&(n.lastIndex=u,p=n.exec(a),p!==null);)u=n.lastIndex,n===S?p[1]==="!--"?n=oe:p[1]!==void 0?n=re:p[2]!==void 0?(ge.test(p[2])&&(s=RegExp("</"+p[2],"g")),n=y):p[3]!==void 0&&(n=y):n===y?p[0]===">"?(n=s??S,c=-1):p[1]===void 0?c=-2:(c=n.lastIndex-p[2].length,h=p[1],n=p[3]===void 0?y:p[3]==='"'?ae:ne):n===ae||n===ne?n=y:n===oe||n===re?n=S:(n=y,s=void 0);const m=n===y&&o[l+1].startsWith("/>")?" ":"";r+=n===S?a+Oe:c>=0?(i.push(h),a.slice(0,c)+pe+a.slice(c)+$+m):a+$+(c===-2?l:m)}return[me(o,r+(o[t]||"<?>")+(e===2?"</svg>":"")),i]};class T{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,n=0;const l=e.length-1,a=this.parts,[h,p]=Te(e,t);if(this.el=T.createElement(h,i),_.currentNode=this.el.content,t===2){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=_.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(pe)){const u=p[n++],m=s.getAttribute(c).split($),j=/([.?@])?(.*)/.exec(u);a.push({type:1,index:r,name:j[2],strings:m,ctor:j[1]==="."?ke:j[1]==="?"?Me:j[1]==="@"?je:F}),s.removeAttribute(c)}else c.startsWith($)&&(a.push({type:6,index:r}),s.removeAttribute(c));if(ge.test(s.tagName)){const c=s.textContent.split($),u=c.length-1;if(u>0){s.textContent=B?B.emptyScript:"";for(let m=0;m<u;m++)s.append(c[m],I()),_.nextNode(),a.push({type:2,index:++r});s.append(c[u],I())}}}else if(s.nodeType===8)if(s.data===fe)a.push({type:2,index:r});else{let c=-1;for(;(c=s.data.indexOf($,c+1))!==-1;)a.push({type:7,index:r}),c+=$.length-1}r++}}static createElement(e,t){const i=v.createElement("template");return i.innerHTML=e,i}}function x(o,e,t=o,i){var n,l;if(e===w)return e;let s=i!==void 0?(n=t._$Co)==null?void 0:n[i]:t._$Cl;const r=N(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==r&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),r===void 0?s=void 0:(s=new r(o),s._$AT(o,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=x(o,s._$AS(o,e.values),s,i)),e}class Ue{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??v).importNode(t,!0);_.currentNode=s;let r=_.nextNode(),n=0,l=0,a=i[0];for(;a!==void 0;){if(n===a.index){let h;a.type===2?h=new k(r,r.nextSibling,this,e):a.type===1?h=new a.ctor(r,a.name,a.strings,this,e):a.type===6&&(h=new He(r,this,e)),this._$AV.push(h),a=i[++l]}n!==(a==null?void 0:a.index)&&(r=_.nextNode(),n++)}return _.currentNode=v,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class k{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=x(this,e,t),N(e)?e===d||e==null||e===""?(this._$AH!==d&&this._$AR(),this._$AH=d):e!==this._$AH&&e!==w&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Ie(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==d&&N(this._$AH)?this._$AA.nextSibling.data=e:this.$(v.createTextNode(e)),this._$AH=e}g(e){var r;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=T.createElement(me(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===s)this._$AH.p(t);else{const n=new Ue(s,this),l=n.u(this.options);n.p(t),this.$(l),this._$AH=n}}_$AC(e){let t=le.get(e.strings);return t===void 0&&le.set(e.strings,t=new T(e)),t}T(e){ue(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new k(this.k(I()),this.k(I()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class F{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,r){this.type=1,this._$AH=d,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}_$AI(e,t=this,i,s){const r=this.strings;let n=!1;if(r===void 0)e=x(this,e,t,0),n=!N(e)||e!==this._$AH&&e!==w,n&&(this._$AH=e);else{const l=e;let a,h;for(e=r[0],a=0;a<r.length-1;a++)h=x(this,l[i+a],t,a),h===w&&(h=this._$AH[a]),n||(n=!N(h)||h!==this._$AH[a]),h===d?e=d:e!==d&&(e+=(h??"")+r[a+1]),this._$AH[a]=h}n&&!s&&this.O(e)}O(e){e===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ke extends F{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===d?void 0:e}}class Me extends F{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==d)}}class je extends F{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){if((e=x(this,e,t,0)??d)===w)return;const i=this._$AH,s=e===d&&i!==d||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==d&&(i===d||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class He{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){x(this,e)}}const J=O.litHtmlPolyfillSupport;J==null||J(T,k),(O.litHtmlVersions??(O.litHtmlVersions=[])).push("3.1.1");const Re=(o,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const r=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new k(e.insertBefore(I(),r),r,void 0,t??{})}return s._$AI(o),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class g extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Re(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return w}}var he;g._$litElement$=!0,g.finalized=!0,(he=globalThis.litElementHydrateSupport)==null||he.call(globalThis,{LitElement:g});const K=globalThis.litElementPolyfillSupport;K==null||K({LitElement:g});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=o=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(o,e)}):customElements.define(o,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Be={attribute:!0,type:String,converter:R,reflect:!1,hasChanged:Z},ze=(o=Be,e,t)=>{const{kind:i,metadata:s}=t;let r=globalThis.litPropertyMetadata.get(s);if(r===void 0&&globalThis.litPropertyMetadata.set(s,r=new Map),r.set(t.name,o),i==="accessor"){const{name:n}=t;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(n,a,o)},init(l){return l!==void 0&&this.C(n,void 0,o),l}}}if(i==="setter"){const{name:n}=t;return function(l){const a=this[n];e.call(this,l),this.requestUpdate(n,a,o)}}throw Error("Unsupported decorator location: "+i)};function P(o){return(e,t)=>typeof t=="object"?ze(o,e,t):((i,s,r)=>{const n=s.hasOwnProperty(r);return s.constructor.createProperty(r,n?{...i,wrapped:!0}:i),n?Object.getOwnPropertyDescriptor(s,r):void 0})(o,e,t)}var Le=Object.defineProperty,De=Object.getOwnPropertyDescriptor,W=(o,e,t,i)=>{for(var s=i>1?void 0:i?De(e,t):e,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=(i?n(e,t,s):n(s))||s);return i&&s&&Le(e,t,s),s};let E=class extends g{constructor(){super(...arguments),this.images=[],this.name="",this.selectedImageIndex=-1,this.cycleIntervalId=null}render(){return f`
      <div
        class="thumbnail-container"
        @click="${()=>{this.selectImage(0)}}"
      >
        <img src="${this.images[0]}" class="thumbnail" />
        <div class="name-label">${this.name}</div>
      </div>
      ${this.selectedImageIndex!==-1?f`
            <div class="progress-container">
              <div class="progress-bar" id="progressBar"></div>
            </div>
            ${this.images.map((o,e)=>f`
                <img
                  src="${o}"
                  class="${e===this.selectedImageIndex?"fullscreen":"hidden"}"
                  @click="${t=>this.handleImageClick(t,e)}"
                />
              `)}
            <div class="close-button" @click="${this.closeFullscreen}">
              &times;
            </div>
          `:""}
    `}selectImage(o){this.selectedImageIndex=o,this.startProgressBar(),this.resetAndStartCycle()}cycleToNextImage(){this.selectedImageIndex<this.images.length-1?(this.selectedImageIndex++,this.startProgressBar()):this.closeFullscreen()}resetAndStartCycle(){this.cycleIntervalId!==null&&clearInterval(this.cycleIntervalId),this.cycleIntervalId=window.setInterval(()=>{this.cycleToNextImage()},5e3)}closeFullscreen(){this.cycleIntervalId!==null&&(clearInterval(this.cycleIntervalId),this.cycleIntervalId=null),this.selectedImageIndex=-1,this.resetProgressBar()}handleImageClick(o,e){const t=o.target;if(t){const i=o.clientX,s=t.width;i>s/2?e<this.images.length-1?(this.selectImage(e+1),this.resetProgressBar()):this.closeFullscreen():e>0&&this.selectImage(e-1)}}startProgressBar(){if(console.log("called"),!this.shadowRoot)return;const o=this.shadowRoot.getElementById("progressBar");o&&(o.style.width="0%",setTimeout(()=>{o.style.width="100%"},100))}resetProgressBar(){if(!this.shadowRoot)return;const o=this.shadowRoot.getElementById("progressBar");o&&(o.style.width="0%")}};E.styles=U`
    .thumbnail-container {
      align-items: center;
      cursor: pointer;
    }

    .thumbnail {
      width: 100px;
      height: 140px;
      object-fit: cover;
      transition: transform 0.3s ease-in-out;
      cursor: pointer;
      border-radius: 10%;
    }
    .name-label {
      margin-top: 8px;
      margin-right: 8px;
      cursor: pointer;
      text-align: center;
    }
    img {
      width: 100px;
      height: 100px;
      object-fit: cover;
      cursor: pointer;
      transition: transform 0.3s ease-in-out;
    }
    .fullscreen {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      object-fit: contain;
      z-index: 1000;
      background-color: rgba(0, 0, 0, 1);
    }
    .close-button {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 1001;
      cursor: pointer;
      font-size: 30px;
      color: white;
    }
    .progress-container {
      position: fixed;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      width: 90%;
      height: 5px;
      background-color: #000;
      z-index: 1002;
    }
    .progress-bar {
      height: 20%;
      background-color: #ccc;
      width: 0%;
      transition: width 5s linear;
      border-radius: 5px;
    }
  `;W([P({type:Array})],E.prototype,"images",2);W([P({type:String})],E.prototype,"name",2);W([P({type:Number})],E.prototype,"selectedImageIndex",2);E=W([M("carousel-element")],E);var Fe=Object.defineProperty,We=Object.getOwnPropertyDescriptor,$e=(o,e,t,i)=>{for(var s=i>1?void 0:i?We(e,t):e,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=(i?n(e,t,s):n(s))||s);return i&&s&&Fe(e,t,s),s};let z=class extends g{constructor(){super(...arguments),this.data={}}connectedCallback(){if(super.connectedCallback(),typeof this.data=="string")try{this.data=JSON.parse(this.data)}catch(o){console.error("Error parsing JSON:",o)}}render(){var o,e;return f`
      <div class='hero-section-container'>
        <div class='hero-section-top'>
          ${(o=this.data)!=null&&o.logo?f`
            <img
              src="${this.data.logo}"
              height="100"
              width="100"
              alt='logo-business'
              class='business-logo'
            />
          `:f`<span>business-logo</span>`}

          <div class='business-info'>
            ${(e=this.data)!=null&&e.businessName?f`
              <h1 class='business-name'>${this.data.businessName}</h1>
            `:""}
            <h3 class='business-description'>
            Pet Friendly | Cafe | Community
            </h3>
          </div>
        </div>
        <div class='hero-section-bottom'>
          <p class='additional-info'>
          The ambience of a childhood home, the company of a furry friend and the comfort of delicious food.
          </p>
        </div>
      </div>
    `}};z.styles=U`
    .hero-section-container {
        display: flex;
        flex-direction: column;
        gap: 16px;
        /* */
    }

    .hero-section-top {
        display: flex;
        align-items: center;
        gap: 16px;
        margin: 16px; 
    }

    .logo-container {
        flex-basis: 100px; 
    }

    .business-logo, .placeholder-logo {
        display: block;
        width: 100px; 
        height: 100px; 
        object-fit: cover;
        border-radius: 8px; 
    }

    .business-info {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 16px; 
    }

    .business-name {
        font-size: 1.5rem;
        font-weight: bold;
    }

    .business-description {
        font-size: 1rem; 
        opacity: 0.6;
        margin-top: -8px;
    }

    .additional-info {
        font-size: 0.825rem; 
        color: #666; 
        margin-top: -16px;
    }
`;$e([P({type:Object})],z.prototype,"data",2);z=$e([M("hero-section")],z);var Ve=Object.defineProperty,qe=Object.getOwnPropertyDescriptor,be=(o,e,t,i)=>{for(var s=i>1?void 0:i?qe(e,t):e,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=(i?n(e,t,s):n(s))||s);return i&&s&&Ve(e,t,s),s};let L=class extends g{constructor(){super(...arguments),this.showModal=!1}toggleModal(){this.showModal=!this.showModal}render(){return f`
      ${this.showModal?f`
            <div class="backdrop">
              <div
                class="modal"
                @click="${o=>o.stopPropagation()}"
              >
                <div class="modal-header">
                  <button class="close-button" @click="${this.toggleModal}">
                    ✖️
                  </button>
                </div>
                <div class="modal-content">
                  <slot></slot>
                </div>
              </div>
            </div>
          `:""}
    `}};L.styles=U`
    .backdrop {
      position: fixed;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.7);
      display: flex;
      align-items: end;
      justify-content: center;
      backdrop-filter: blur(5px);
      z-index: 1001;
    }

    .modal-header {
      position: absolute;
      top: -1.5rem;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .close-button {
      background-color: var(--primary-color);
      color: var(--secondary-color);
      padding: 0.5rem;
      font-size: 1rem;
      border-radius: 50px;
      cursor: pointer;
      z-index: 1001;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .modal {
      background-color: var(--primary-color);
      padding: 1rem;
      border-radius: 1.5rem 1.5rem 0 0;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      max-width: 420px;
      width: 100%;
      position: relative;
      color: var(--secondary-color);
      transition: transform 3s ease-in-out;
      z-index: 1001;
    }
    .modal.show {
      transform: translateY(0);
    }

    .modal-content {
      margin-top: 16px;
      overflow-y: auto;
      max-height: 80vh;
      -ms-overflow-style: none;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  `;be([P({type:Boolean})],L.prototype,"showModal",2);L=be([M("popup-element")],L);const ce={businessName:"h old trees cafe",registeredName:"H Old Trees Cafe",logo:"https://storage.hipal.life/minio/assets/8ca9fa55-8947-46f5-ae84-95c332f6e568",address:"Old trees cafe - kandlakoya, opp. Ksr convention kompally, Hyderabad, Telangana 501401",ownerPhone:9949271220},Je={businessId:"64c36c4d9f464445c1fc6a8d",themes:{primaryColor:"#FAE8CA",secondaryColor:"#830F16",accentColor:"#000000",fontFamily:"'Inter', sans-serif;",fontURL:"https://fonts.googleapis.com/css2?family=Inter&display=swap",buttonStyle:"",miniBanner:"https://storage.hipal.life/minio/assets/b7aeb567-8acd-4191-92c0-137bfba092b2.jpeg",specialBanner:"",endBanner:"https://storage.hipal.life/minio/assets/6d5f0402-2ef5-44ba-b969-aa329e3d4635.png",instagramLink:"https://www.instagram.com/nankingcr/",facebookLink:"https://www.facebook.com/nankingcr",youtubeLink:"",linkedinLink:"",footerText:""},categoryOrder:["64e74a19bee4f6e5e0f57a3f","64e5db3fbee4f6e5e0f57733","64e5e27dbee4f6e5e0f5778b","64e5f71abee4f6e5e0f577ce","64e5e369bee4f6e5e0f57797","64e5e3b3bee4f6e5e0f5779c","64e5e457bee4f6e5e0f577a4","64e5e0f0bee4f6e5e0f57779","64e5e1d7bee4f6e5e0f57786","64e74accbee4f6e5e0f57a7f","64e5dfaabee4f6e5e0f57771","64e74adfbee4f6e5e0f57a8a","64e5df84bee4f6e5e0f5776c"],explore:{wallpaper:"https://storage.hipal.life/minio/assets/e6f8b7e5-cdb3-4cb6-a71b-3fd89e98ac23.png",phone:"7702932451",countryCode:"91",location:"",openFrom:"11:00 AM",openTill:"10:30 PM",specialOffers:[{wallpaper:"https://storage.hipal.life/minio/assets/aebc7725-57ad-4919-9092-294362ac6d8f.jpeg",offerName:"Must try🥰"}],popular:[{id:"64e5d808045c8593a00b5c3e",name:"Crispy Corn -Dry"},{id:"64e5dc9a045c8593a00b5dbb",name:"Chicken drum sticks"},{id:"64e6135a045c8593a00b5f98",name:"Ginger Chicken-Boned"},{id:"64e5d806045c8593a00b5c08",name:"Veg Spring Roll"}],highlights:[{name:"Chicken❤️‍🔥",stories:["https://storage.hipal.life/minio/assets/76618f27-13b8-4f32-8245-25a575013dcf.png"]},{name:"Yummy🥰",stories:["https://storage.hipal.life/minio/assets/028f592e-6f62-462f-b4f5-4a4996d8642c.jpeg"]},{name:"Food😋",stories:["https://storage.hipal.life/minio/assets/ab6e876a-bdae-43b0-88be-ac80ba517cbd.jpeg","https://storage.hipal.life/minio/assets/0af04174-a89f-49df-ac33-8f5aa6cad48d.jpeg"]},{name:"Chicken❤️‍🔥",stories:["https://storage.hipal.life/minio/assets/76618f27-13b8-4f32-8245-25a575013dcf.png"]},{name:"Yummy🥰",stories:["https://storage.hipal.life/minio/assets/028f592e-6f62-462f-b4f5-4a4996d8642c.jpeg"]},{name:"Food😋",stories:["https://storage.hipal.life/minio/assets/ab6e876a-bdae-43b0-88be-ac80ba517cbd.jpeg","https://storage.hipal.life/minio/assets/0af04174-a89f-49df-ac33-8f5aa6cad48d.jpeg"]},{name:"Chicken❤️‍🔥",stories:["https://storage.hipal.life/minio/assets/76618f27-13b8-4f32-8245-25a575013dcf.png"]},{name:"Yummy🥰",stories:["https://storage.hipal.life/minio/assets/028f592e-6f62-462f-b4f5-4a4996d8642c.jpeg"]},{name:"Food😋",stories:["https://storage.hipal.life/minio/assets/ab6e876a-bdae-43b0-88be-ac80ba517cbd.jpeg","https://storage.hipal.life/minio/assets/0af04174-a89f-49df-ac33-8f5aa6cad48d.jpeg"]}]},id:"64c36f467e60706c5fdd6583"};var Ke=Object.defineProperty,Ye=Object.getOwnPropertyDescriptor,ye=(o,e,t,i)=>{for(var s=i>1?void 0:i?Ye(e,t):e,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=(i?n(e,t,s):n(s))||s);return i&&s&&Ke(e,t,s),s};let D=class extends g{constructor(){super(...arguments),this.label="Action"}render(){return f`<button class="action-button">${this.label}</button>`}};D.styles=U`
    .action-button {
      position: fixed;
      bottom: 20px;
      left: 0;
      width: 100%;
      background-color: var(--secondary-color);
      color: var(--primary-color);
      padding: 1rem;
      font-size: 1rem;
      border-radius: 50px;
      cursor: pointer;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  `;ye([P({type:String})],D.prototype,"label",2);D=ye([M("action-button")],D);var Xe=Object.defineProperty,Ge=Object.getOwnPropertyDescriptor,Ze=(o,e,t,i)=>{for(var s=i>1?void 0:i?Ge(e,t):e,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=(i?n(e,t,s):n(s))||s);return i&&s&&Xe(e,t,s),s};let Y=class extends g{constructor(){super(...arguments),this.highlights=Je.explore.highlights}openPopup(){if(!this.shadowRoot)return;const o=this.shadowRoot.getElementById("popup");o&&(o.showModal=!0)}render(){return f`
      <hero-section></hero-section>
      <div class="carousel-wrapper">
        ${this.highlights.map(o=>f`
            <carousel-element
              .images=${o.stories}
              .name=${o.name}
            >
            </carousel-element>
          `)}
      </div>
     
      <popup-element id="popup" message="click me">
        <hero-section .data=${ce}></hero-section>
        <hero-section .data=${ce}></hero-section>
      </popup-element>
      <action-button class="open-popup-button" @click="${this.openPopup}"></action-button>
    `}};Y.styles=U`
    .carousel-wrapper {
      display: flex;
      flex-wrap: nowrap;
      overflow-x: auto;
      gap: 16px;
      padding: 8px;
    }

    ::-webkit-scrollbar {
      height: 1px;
    }

    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
      background: #888;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  `;Y=Ze([M("highlights-container")],Y);
