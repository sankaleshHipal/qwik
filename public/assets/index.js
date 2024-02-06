(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=globalThis,Y=j.ShadowRoot&&(j.ShadyCSS===void 0||j.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Z=Symbol(),Q=new WeakMap;let ht=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Y&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Q.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Q.set(e,t))}return t}toString(){return this.cssText}};const bt=r=>new ht(typeof r=="string"?r:r+"",void 0,Z),T=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,s,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new ht(e,r,Z)},vt=(r,t)=>{if(Y)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=j.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}},tt=Y?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return bt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:At,defineProperty:wt,getOwnPropertyDescriptor:xt,getOwnPropertyNames:Et,getOwnPropertySymbols:Pt,getPrototypeOf:St}=Object,_=globalThis,et=_.trustedTypes,Ct=et?et.emptyScript:"",F=_.reactiveElementPolyfillSupport,C=(r,t)=>r,B={toAttribute(r,t){switch(t){case Boolean:r=r?Ct:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},G=(r,t)=>!At(r,t),st={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:G};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),_.litPropertyMetadata??(_.litPropertyMetadata=new WeakMap);class w extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=st){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&wt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=xt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return s==null?void 0:s.call(this)},set(n){const l=s==null?void 0:s.call(this);o.call(this,n),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??st}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;const t=St(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){const e=this.properties,i=[...Et(e),...Pt(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(tt(s))}else t!==void 0&&e.push(tt(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$ES(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$E_??(this._$E_=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$E_)==null||e.delete(t)}_$ES(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$E_)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$E_)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e){var o;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const n=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:B).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){var o;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=i.getPropertyOptions(s),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:B;this._$Em=s,this[s]=l.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??G)(this[t],e))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$ET??(this._$ET=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,n]of s)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.C(o,this[o],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$E_)==null||i.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(e)):this._$Ej()}catch(s){throw t=!1,this._$Ej(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$E_)==null||e.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$ET&&(this._$ET=this._$ET.forEach(e=>this._$EO(e,this[e]))),this._$Ej()}updated(t){}firstUpdated(t){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[C("elementProperties")]=new Map,w[C("finalized")]=new Map,F==null||F({ReactiveElement:w}),(_.reactiveElementVersions??(_.reactiveElementVersions=[])).push("2.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=globalThis,z=O.trustedTypes,it=z?z.createPolicy("lit-html",{createHTML:r=>r}):void 0,dt="$lit$",$=`lit$${(Math.random()+"").slice(9)}$`,pt="?"+$,Ot=`<${pt}>`,v=document,I=()=>v.createComment(""),U=r=>r===null||typeof r!="object"&&typeof r!="function",ut=Array.isArray,It=r=>ut(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",K=`[ 	
\f\r]`,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,rt=/-->/g,ot=/>/g,y=RegExp(`>|${K}(?:([^\\s"'>=/]+)(${K}*=${K}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),nt=/'/g,at=/"/g,ft=/^(?:script|style|textarea|title)$/i,Ut=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),u=Ut(1),x=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),lt=new WeakMap,b=v.createTreeWalker(v,129);function gt(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return it!==void 0?it.createHTML(t):t}const Nt=(r,t)=>{const e=r.length-1,i=[];let s,o=t===2?"<svg>":"",n=S;for(let l=0;l<e;l++){const a=r[l];let h,p,c=-1,f=0;for(;f<a.length&&(n.lastIndex=f,p=n.exec(a),p!==null);)f=n.lastIndex,n===S?p[1]==="!--"?n=rt:p[1]!==void 0?n=ot:p[2]!==void 0?(ft.test(p[2])&&(s=RegExp("</"+p[2],"g")),n=y):p[3]!==void 0&&(n=y):n===y?p[0]===">"?(n=s??S,c=-1):p[1]===void 0?c=-2:(c=n.lastIndex-p[2].length,h=p[1],n=p[3]===void 0?y:p[3]==='"'?at:nt):n===at||n===nt?n=y:n===rt||n===ot?n=S:(n=y,s=void 0);const m=n===y&&r[l+1].startsWith("/>")?" ":"";o+=n===S?a+Ot:c>=0?(i.push(h),a.slice(0,c)+dt+a.slice(c)+$+m):a+$+(c===-2?l:m)}return[gt(r,o+(r[e]||"<?>")+(t===2?"</svg>":"")),i]};class N{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const l=t.length-1,a=this.parts,[h,p]=Nt(t,e);if(this.el=N.createElement(h,i),b.currentNode=this.el.content,e===2){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=b.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(dt)){const f=p[n++],m=s.getAttribute(c).split($),R=/([.?@])?(.*)/.exec(f);a.push({type:1,index:o,name:R[2],strings:m,ctor:R[1]==="."?Mt:R[1]==="?"?Ht:R[1]==="@"?Rt:V}),s.removeAttribute(c)}else c.startsWith($)&&(a.push({type:6,index:o}),s.removeAttribute(c));if(ft.test(s.tagName)){const c=s.textContent.split($),f=c.length-1;if(f>0){s.textContent=z?z.emptyScript:"";for(let m=0;m<f;m++)s.append(c[m],I()),b.nextNode(),a.push({type:2,index:++o});s.append(c[f],I())}}}else if(s.nodeType===8)if(s.data===pt)a.push({type:2,index:o});else{let c=-1;for(;(c=s.data.indexOf($,c+1))!==-1;)a.push({type:7,index:o}),c+=$.length-1}o++}}static createElement(t,e){const i=v.createElement("template");return i.innerHTML=t,i}}function E(r,t,e=r,i){var n,l;if(t===x)return t;let s=i!==void 0?(n=e._$Co)==null?void 0:n[i]:e._$Cl;const o=U(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),o===void 0?s=void 0:(s=new o(r),s._$AT(r,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=E(r,s._$AS(r,t.values),s,i)),t}class Tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??v).importNode(e,!0);b.currentNode=s;let o=b.nextNode(),n=0,l=0,a=i[0];for(;a!==void 0;){if(n===a.index){let h;a.type===2?h=new M(o,o.nextSibling,this,t):a.type===1?h=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(h=new jt(o,this,t)),this._$AV.push(h),a=i[++l]}n!==(a==null?void 0:a.index)&&(o=b.nextNode(),n++)}return b.currentNode=v,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class M{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),U(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==x&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):It(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==d&&U(this._$AH)?this._$AA.nextSibling.data=t:this.$(v.createTextNode(t)),this._$AH=t}g(t){var o;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=N.createElement(gt(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(e);else{const n=new Tt(s,this),l=n.u(this.options);n.p(e),this.$(l),this._$AH=n}}_$AC(t){let e=lt.get(t.strings);return e===void 0&&lt.set(t.strings,e=new N(t)),e}T(t){ut(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new M(this.k(I()),this.k(I()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class V{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(o===void 0)t=E(this,t,e,0),n=!U(t)||t!==this._$AH&&t!==x,n&&(this._$AH=t);else{const l=t;let a,h;for(t=o[0],a=0;a<o.length-1;a++)h=E(this,l[i+a],e,a),h===x&&(h=this._$AH[a]),n||(n=!U(h)||h!==this._$AH[a]),h===d?t=d:t!==d&&(t+=(h??"")+o[a+1]),this._$AH[a]=h}n&&!s&&this.O(t)}O(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Mt extends V{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===d?void 0:t}}class Ht extends V{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Rt extends V{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=E(this,t,e,0)??d)===x)return;const i=this._$AH,s=t===d&&i!==d||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==d&&(i===d||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class jt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const X=O.litHtmlPolyfillSupport;X==null||X(N,M),(O.litHtmlVersions??(O.litHtmlVersions=[])).push("3.1.1");const Bt=(r,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const o=(e==null?void 0:e.renderBefore)??null;i._$litPart$=s=new M(t.insertBefore(I(),o),o,void 0,e??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class g extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Bt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return x}}var ct;g._$litElement$=!0,g.finalized=!0,(ct=globalThis.litElementHydrateSupport)==null||ct.call(globalThis,{LitElement:g});const J=globalThis.litElementPolyfillSupport;J==null||J({LitElement:g});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zt={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:G},kt=(r=zt,t,e)=>{const{kind:i,metadata:s}=e;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),o.set(e.name,r),i==="accessor"){const{name:n}=e;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,a,r)},init(l){return l!==void 0&&this.C(n,void 0,r),l}}}if(i==="setter"){const{name:n}=e;return function(l){const a=this[n];t.call(this,l),this.requestUpdate(n,a,r)}}throw Error("Unsupported decorator location: "+i)};function A(r){return(t,e)=>typeof e=="object"?kt(r,t,e):((i,s,o)=>{const n=s.hasOwnProperty(o);return s.constructor.createProperty(o,n?{...i,wrapped:!0}:i),n?Object.getOwnPropertyDescriptor(s,o):void 0})(r,t,e)}var Dt=Object.defineProperty,Lt=Object.getOwnPropertyDescriptor,q=(r,t,e,i)=>{for(var s=i>1?void 0:i?Lt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Dt(t,e,s),s};let P=class extends g{constructor(){super(...arguments),this.images=[],this.name="",this.selectedImageIndex=-1,this.cycleIntervalId=null}render(){return u`
      <div
        class="thumbnail-container"
        @click="${()=>{this.selectImage(0)}}"
      >
        <img src="${this.images[0]}" class="thumbnail" />
        <div class="name-label">${this.name}</div>
      </div>
      ${this.selectedImageIndex!==-1?u`
            <div class="progress-container">
              <div class="progress-bar" id="progressBar"></div>
            </div>
            ${this.images.map((r,t)=>u`
                <img
                  src="${r}"
                  class="${t===this.selectedImageIndex?"fullscreen":"hidden"}"
                  @click="${e=>this.handleImageClick(e,t)}"
                />
              `)}
            <div class="close-button" @click="${this.closeFullscreen}">
              &times;
            </div>
          `:""}
    `}selectImage(r){this.selectedImageIndex=r,this.startProgressBar(),this.resetAndStartCycle()}cycleToNextImage(){this.selectedImageIndex<this.images.length-1?(this.selectedImageIndex++,this.startProgressBar()):this.closeFullscreen()}resetAndStartCycle(){this.cycleIntervalId!==null&&clearInterval(this.cycleIntervalId),this.cycleIntervalId=window.setInterval(()=>{this.cycleToNextImage()},5e3)}closeFullscreen(){this.cycleIntervalId!==null&&(clearInterval(this.cycleIntervalId),this.cycleIntervalId=null),this.selectedImageIndex=-1,this.resetProgressBar()}handleImageClick(r,t){const e=r.target;if(e){const i=r.clientX,s=e.width;i>s/2?t<this.images.length-1?(this.selectImage(t+1),this.resetProgressBar()):this.closeFullscreen():t>0&&this.selectImage(t-1)}}startProgressBar(){if(console.log("called"),!this.shadowRoot)return;const r=this.shadowRoot.getElementById("progressBar");r&&(r.style.width="0%",setTimeout(()=>{r.style.width="100%"},100))}resetProgressBar(){if(!this.shadowRoot)return;const r=this.shadowRoot.getElementById("progressBar");r&&(r.style.width="0%")}};P.styles=T`
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
  `;q([A({type:Array})],P.prototype,"images",2);q([A({type:String})],P.prototype,"name",2);q([A({type:Number})],P.prototype,"selectedImageIndex",2);P=q([H("carousel-element")],P);var Wt=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,mt=(r,t,e,i)=>{for(var s=i>1?void 0:i?Vt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Wt(t,e,s),s};let k=class extends g{constructor(){super(...arguments),this.data={}}connectedCallback(){super.connectedCallback()}render(){var r,t;return u`
      <div class='hero-section-container'>
        <div class='hero-section-top'>
          ${(r=this.data)!=null&&r.logo?u`
            <img
              src="${this.data.logo}"
              height="100"
              width="100"
              alt='logo-business'
              class='business-logo'
            />
          `:u`<span>business-logo</span>`}

          <div class='business-info'>
            ${(t=this.data)!=null&&t.businessName?u`
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
    `}};k.styles=T`
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
`;mt([A({type:Object})],k.prototype,"data",2);k=mt([H("hero-section")],k);var qt=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,$t=(r,t,e,i)=>{for(var s=i>1?void 0:i?Ft(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&qt(t,e,s),s};let D=class extends g{constructor(){super(...arguments),this.showModal=!1}toggleModal(){this.showModal=!this.showModal}render(){return u`
      ${this.showModal?u`
            <div class="backdrop">
              <div
                class="modal"
                @click="${r=>r.stopPropagation()}"
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
    `}};D.styles=T`
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
  `;$t([A({type:Boolean})],D.prototype,"showModal",2);D=$t([H("popup-element")],D);var Kt=Object.defineProperty,Xt=Object.getOwnPropertyDescriptor,_t=(r,t,e,i)=>{for(var s=i>1?void 0:i?Xt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Kt(t,e,s),s};let L=class extends g{constructor(){super(...arguments),this.label="Action"}render(){return u`<button class="action-button">${this.label}</button>`}};L.styles=T`
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
  `;_t([A({type:String})],L.prototype,"label",2);L=_t([H("action-button")],L);var Jt=Object.defineProperty,Yt=Object.getOwnPropertyDescriptor,yt=(r,t,e,i)=>{for(var s=i>1?void 0:i?Yt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Jt(t,e,s),s};let W=class extends g{constructor(){super(...arguments),this.data={}}connectedCallback(){super.connectedCallback()}openPopup(){if(!this.shadowRoot)return;const r=this.shadowRoot.getElementById("popup");r&&(r.showModal=!0)}render(){return u`
      <hero-section .data=${this.data}></hero-section>
      <carousel-element class="carousel-wrapper"></carousel-element>
      <action-button
        class="open-popup-button"
        @click="${this.openPopup}"
      ></action-button>
    `}};W.styles=T`
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
  `;yt([A({type:Object})],W.prototype,"data",2);W=yt([H("highlights-container")],W);
