/******************************************************************************
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
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$3=globalThis,e$2=t$3.ShadowRoot&&(void 0===t$3.ShadyCSS||t$3.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$4=new WeakMap;class n$3{constructor(t,e,o){if(this._$cssResult$=!0,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$2&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$4.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$4.set(s,t));}return t}toString(){return this.cssText}}const r$5=t=>new n$3("string"==typeof t?t:t+"",void 0,s$2),i$3=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,s,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1]),t[0]);return new n$3(o,t,s$2)},S$1=(s,o)=>{if(e$2)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t$3.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$5(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$2,defineProperty:e$1,getOwnPropertyDescriptor:h$1,getOwnPropertyNames:r$4,getOwnPropertySymbols:o$3,getPrototypeOf:n$2}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$2(t,s),b={attribute:!0,type:String,converter:u$1,reflect:!1,useDefault:!1,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;class y$1 extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=b){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),h=this.getPropertyDescriptor(t,i,s);void 0!==h&&e$1(this.prototype,t,h);}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=h$1(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get:e,set(s){const h=e?.call(this);r?.call(this,s),this.requestUpdate(t,h,i);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$2(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...r$4(t),...o$3(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return !1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const h=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e;const r=h.fromAttribute(s,t.type);this[e]=r??this._$Ej?.get(e)??r,this._$Em=null;}}requestUpdate(t,s,i){if(void 0!==t){const e=this.constructor,h=this[t];if(i??=e.getPropertyOptions(t),!((i.hasChanged??f$1)(h,s)||i.useDefault&&i.reflect&&h===this._$Ej?.get(t)&&!this.hasAttribute(e._$Eu(t,i))))return;this.C(t,s,i);}!1===this.isUpdatePending&&(this._$ES=this._$EP());}C(t,s,{useDefault:i,reflect:e,wrapped:h},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??s??this[t]),!0!==h||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),!0===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t));}async _$EP(){this.isUpdatePending=!0;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];!0!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e);}}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$EM();}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EM(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return !0}update(t){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM();}updated(t){}firstUpdated(t){}}y$1.elementStyles=[],y$1.shadowRootOptions={mode:"open"},y$1[d$1("elementProperties")]=new Map,y$1[d$1("finalized")]=new Map,p$1?.({ReactiveElement:y$1}),(a$1.reactiveElementVersions??=[]).push("2.1.1");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=globalThis,i$1=t$2.trustedTypes,s$1=i$1?i$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${Math.random().toFixed(9).slice(2)}$`,o$2="?"+h,n$1=`<${o$2}>`,r$3=document,l=()=>r$3.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),T=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),A=new WeakMap,C=r$3.createTreeWalker(r$3,129);function P(t,i){if(!a(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s$1?s$1.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":3===i?"<math>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n$1:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x);}return [P(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),o]};class N{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=V(t,s);if(this.el=N.createElement(f,n),C.currentNode=this.el.content,2===s||3===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=C.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?H:"?"===e[1]?I:"@"===e[1]?L:k}),r.removeAttribute(t);}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i$1?i$1.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),C.nextNode(),d.push({type:2,index:++c});r.append(t[s],l());}}}else if(8===r.nodeType)if(r.data===o$2)d.push({type:2,index:c});else {let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1;}c++;}}static createElement(t,i){const s=r$3.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){if(i===T)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=S(t,h._$AS(t,i.values),h,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r$3).importNode(i,!0);C.currentNode=e;let h=C.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new R(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new z(h,this,t)),this._$AV.push(i),l=s[++n];}o!==l?.index&&(h=C.nextNode(),o++);}return C.currentNode=r$3,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),c(t)?t===E||null==t||""===t?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==E&&c(this._$AH)?this._$AA.nextSibling.data=t:this.T(r$3.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=N.createElement(P(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new M(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new N(t)),i}k(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new R(this.O(l()),this.O(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=E;}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=S(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==T,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=S(this,e[s+n],i,n),r===T&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===E?t=E:t!==E&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===E?void 0:t;}}class I extends k{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==E);}}class L extends k{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=S(this,t,i,0)??E)===T)return;const s=this._$AH,e=t===E&&s!==E||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==E&&(s===E||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t);}}const j=t$2.litHtmlPolyfillSupport;j?.(N,R),(t$2.litHtmlVersions??=[]).push("3.3.1");const B=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new R(i.insertBefore(l(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=globalThis;class i extends y$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=B(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1);}render(){return T}}i._$litElement$=!0,i["finalized"]=!0,s.litElementHydrateSupport?.({LitElement:i});const o$1=s.litElementPolyfillSupport;o$1?.({LitElement:i});(s.litElementVersions??=[]).push("4.2.1");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=t=>(e,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(t,e);})):customElements.define(t,e);};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o={attribute:!0,type:String,converter:u$1,reflect:!1,hasChanged:f$1},r$2=(t=o,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),"setter"===n&&((t=Object.create(t)).wrapped=!0),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t);},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t);}}throw Error("Unsupported decorator location: "+n)};function n(t){return (e,o)=>"object"==typeof o?r$2(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r$1(r){return n({...r,state:!0,attribute:!1})}

var t,r;!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none";}(t||(t={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24";}(r||(r={}));var ne=function(e,t,r,n){n=n||{},r=null==r?{}:r;var i=new Event(t,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return i.detail=r,e.dispatchEvent(i),i};

// Australian states for dropdown
const AUSTRALIAN_STATES = [
    { value: 'ACT', label: 'Australian Capital Territory' },
    { value: 'NSW', label: 'New South Wales' },
    { value: 'NT', label: 'Northern Territory' },
    { value: 'QLD', label: 'Queensland' },
    { value: 'SA', label: 'South Australia' },
    { value: 'TAS', label: 'Tasmania' },
    { value: 'VIC', label: 'Victoria' },
    { value: 'WA', label: 'Western Australia' },
];
let BomLocalRadarCardEditor = class BomLocalRadarCardEditor extends i {
    constructor() {
        super(...arguments);
        this._config = this._mergeWithDefaults();
        this._metadataExpanded = false;
        this._controlsExpanded = false;
    }
    _mergeWithDefaults(config = {}) {
        const defaults = {
            service_url: 'http://localhost:8082',
            timespan: 'latest',
            frame_interval: 2.0,
            refresh_interval: 30,
            auto_play: true,
            show_card_title: true,
            show_metadata: true,
            show_controls: true,
            image_zoom: 1.0,
            image_fit: 'contain',
        };
        return Object.assign(Object.assign(Object.assign({}, defaults), config), { type: 'custom:bom-local-card' });
    }
    setConfig(config) {
        this._config = this._mergeWithDefaults(config);
        this.requestUpdate();
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        if (!this.hass)
            return x ``;
        return x `
      <div class="editor">
        <div class="section">
          <h3>Location Configuration</h3>
          <ha-textfield
            label="Suburb"
            .value=${this._config.suburb || ''}
            @input=${(e) => this._updateConfig('suburb', e.target.value)}
            required
          ></ha-textfield>
          <div class="select-wrapper">
            <label class="select-label">State *</label>
            <select
              class="native-select"
              .value=${this._config.state || ''}
              @change=${(e) => {
            const select = e.target;
            this._updateConfig('state', select.value);
        }}
              required
            >
              <option value="">Select a state...</option>
              ${AUSTRALIAN_STATES.map(state => x `<option value="${state.value}">${state.label} (${state.value})</option>`)}
            </select>
          </div>
        </div>

        <div class="section">
          <h3>Display</h3>
          <div class="switch-wrapper">
            <label class="switch-label">Show Card Title</label>
            <ha-switch
              .checked=${this._config.show_card_title !== false}
              @change=${(e) => {
            const checked = e.target.checked;
            this._updateConfig('show_card_title', checked);
        }}
            ></ha-switch>
          </div>
          ${this._config.show_card_title !== false ? x `
            <ha-textfield
              label="Card Title"
              .value=${this._config.card_title || ''}
              @input=${(e) => this._updateConfig('card_title', e.target.value)}
              helper="Leave empty to use default"
            ></ha-textfield>
          ` : ''}
          
          <div class="metadata-section">
            <div class="section-header">
              <div class="switch-wrapper">
                <label class="switch-label">Show Metadata</label>
                <ha-switch
                  .checked=${this._getMetadataEnabled()}
                  @change=${(e) => {
            const checked = e.target.checked;
            this._updateMetadataToggle(checked);
        }}
                ></ha-switch>
              </div>
              ${this._getMetadataEnabled() ? x `
                <ha-icon-button
                  .label=${this._metadataExpanded ? 'Collapse' : 'Expand'}
                  @click=${() => { this._metadataExpanded = !this._metadataExpanded; }}
                >
                  <ha-icon .icon=${this._metadataExpanded ? 'mdi:chevron-up' : 'mdi:chevron-down'}></ha-icon>
                </ha-icon-button>
              ` : ''}
            </div>
            ${this._getMetadataEnabled() && this._metadataExpanded ? x `
              <div class="metadata-options">
                <div class="switch-wrapper">
                  <label class="switch-label">Cache Status</label>
                  <ha-switch
                    .checked=${this._getMetadataConfig('show_cache_status')}
                    @change=${(e) => this._updateMetadataConfig('show_cache_status', e.target.checked)}
                  ></ha-switch>
                </div>
                <div class="switch-wrapper">
                  <label class="switch-label">Observation Time</label>
                  <ha-switch
                    .checked=${this._getMetadataConfig('show_observation_time')}
                    @change=${(e) => this._updateMetadataConfig('show_observation_time', e.target.checked)}
                  ></ha-switch>
                </div>
                <div class="switch-wrapper">
                  <label class="switch-label">Forecast Time</label>
                  <ha-switch
                    .checked=${this._getMetadataConfig('show_forecast_time')}
                    @change=${(e) => this._updateMetadataConfig('show_forecast_time', e.target.checked)}
                  ></ha-switch>
                </div>
                <div class="switch-wrapper">
                  <label class="switch-label">Weather Station</label>
                  <ha-switch
                    .checked=${this._getMetadataConfig('show_weather_station')}
                    @change=${(e) => this._updateMetadataConfig('show_weather_station', e.target.checked)}
                  ></ha-switch>
                </div>
                <div class="switch-wrapper">
                  <label class="switch-label">Distance</label>
                  <ha-switch
                    .checked=${this._getMetadataConfig('show_distance')}
                    @change=${(e) => this._updateMetadataConfig('show_distance', e.target.checked)}
                  ></ha-switch>
                </div>
                <div class="switch-wrapper">
                  <label class="switch-label">Next Update</label>
                  <ha-switch
                    .checked=${this._getMetadataConfig('show_next_update')}
                    @change=${(e) => this._updateMetadataConfig('show_next_update', e.target.checked)}
                  ></ha-switch>
                </div>
                <div class="switch-wrapper">
                  <label class="switch-label">Frame Times</label>
                  <ha-switch
                    .checked=${this._getMetadataConfig('show_frame_times')}
                    @change=${(e) => this._updateMetadataConfig('show_frame_times', e.target.checked)}
                  ></ha-switch>
                </div>
                <div class="select-wrapper">
                  <label class="select-label">Metadata Position *</label>
                  <select
                    class="native-select"
                    .value=${String((_a = this._getMetadataConfig('position')) !== null && _a !== void 0 ? _a : 'above')}
                    @change=${(e) => {
            e.preventDefault();
            e.stopPropagation();
            try {
                const select = e.target;
                const value = select.value;
                if (value && value !== '') {
                    this._updateMetadataConfig('position', value);
                }
            }
            catch (err) {
                console.error('Error updating metadata position:', err);
            }
        }}
                  >
                    <option value="above">Above Image (Default)</option>
                    <option value="below">Below Image</option>
                    <option value="overlay">Overlay on Image</option>
                  </select>
                </div>
                ${this._getMetadataConfig('position') === 'overlay' ? x `
                  <div class="select-wrapper">
                    <label class="select-label">Metadata Overlay Position *</label>
                    <select
                      class="native-select"
                      .value=${(_b = this._config.metadata_overlay_position) !== null && _b !== void 0 ? _b : 'top'}
                      @change=${(e) => {
            e.preventDefault();
            e.stopPropagation();
            const select = e.target;
            this._updateConfig('metadata_overlay_position', select.value);
        }}
                    >
                      <option value="top">Top (Default)</option>
                      <option value="bottom">Bottom</option>
                      <option value="left">Left</option>
                      <option value="right">Right</option>
                      <option value="center">Center</option>
                    </select>
                  </div>
                  <ha-textfield
                    label="Metadata Overlay Opacity (0.0 - 1.0)"
                    type="number"
                    step="0.1"
                    min="0"
                    max="1"
                    .value=${String((_c = this._config.metadata_overlay_opacity) !== null && _c !== void 0 ? _c : 0.85)}
                    @input=${(e) => this._updateConfig('metadata_overlay_opacity', parseFloat(e.target.value))}
                  ></ha-textfield>
                ` : ''}
                ${this._getMetadataConfig('position') !== 'overlay' ? x `
                  <div class="select-wrapper">
                    <label class="select-label">Metadata Style *</label>
                    <select
                      class="native-select"
                      .value=${(_d = this._getMetadataConfig('style')) !== null && _d !== void 0 ? _d : 'cards'}
                      @change=${(e) => {
            e.preventDefault();
            e.stopPropagation();
            const select = e.target;
            const value = select.value;
            // Allow empty string to reset to default
            if (value === '') {
                this._updateMetadataConfig('style', undefined);
            }
            else {
                this._updateMetadataConfig('style', value);
            }
        }}
                    >
                      <option value="cards">Cards (Default)</option>
                      <option value="compact">Compact</option>
                      <option value="minimal">Minimal</option>
                    </select>
                  </div>
                ` : x `
                  <div class="info-text" style="padding: 8px; background: var(--info-color, rgba(33, 150, 243, 0.1)); border-radius: 4px; font-size: 0.875em;">
                    <strong>Note:</strong> Overlay position uses a fixed compact style optimized for overlaying on images.
                  </div>
                `}
              </div>
            ` : ''}
          </div>

          <div class="controls-section">
            <div class="section-header">
              <div class="switch-wrapper">
                <label class="switch-label">Show Controls</label>
                <ha-switch
                  .checked=${this._getControlsEnabled()}
                  @change=${(e) => {
            const checked = e.target.checked;
            this._updateControlsToggle(checked);
        }}
                ></ha-switch>
              </div>
              ${this._getControlsEnabled() ? x `
                <ha-icon-button
                  .label=${this._controlsExpanded ? 'Collapse' : 'Expand'}
                  @click=${() => { this._controlsExpanded = !this._controlsExpanded; }}
                >
                  <ha-icon .icon=${this._controlsExpanded ? 'mdi:chevron-up' : 'mdi:chevron-down'}></ha-icon>
                </ha-icon-button>
              ` : ''}
            </div>
            ${this._getControlsEnabled() && this._controlsExpanded ? x `
              <div class="controls-options">
                <div class="switch-wrapper">
                  <label class="switch-label">Play/Pause Button</label>
                  <ha-switch
                    .checked=${this._getControlsConfig('show_play_pause')}
                    @change=${(e) => this._updateControlsConfig('show_play_pause', e.target.checked)}
                  ></ha-switch>
                </div>
                <div class="switch-wrapper">
                  <label class="switch-label">Previous/Next Buttons</label>
                  <ha-switch
                    .checked=${this._getControlsConfig('show_prev_next')}
                    @change=${(e) => this._updateControlsConfig('show_prev_next', e.target.checked)}
                  ></ha-switch>
                </div>
                <div class="switch-wrapper">
                  <label class="switch-label">Frame Slider</label>
                  <ha-switch
                    .checked=${this._getControlsConfig('show_slider')}
                    @change=${(e) => this._updateControlsConfig('show_slider', e.target.checked)}
                  ></ha-switch>
                </div>
                <div class="switch-wrapper">
                  <label class="switch-label">Navigation Buttons (-10, +10, First, Last)</label>
                  <ha-switch
                    .checked=${this._getControlsConfig('show_nav_buttons')}
                    @change=${(e) => this._updateControlsConfig('show_nav_buttons', e.target.checked)}
                  ></ha-switch>
                </div>
                <div class="switch-wrapper">
                  <label class="switch-label">Frame Info</label>
                  <ha-switch
                    .checked=${this._getControlsConfig('show_frame_info')}
                    @change=${(e) => this._updateControlsConfig('show_frame_info', e.target.checked)}
                  ></ha-switch>
                </div>
                <div class="select-wrapper">
                  <label class="select-label">Controls Position *</label>
                  <select
                    class="native-select"
                    .value=${String((_e = this._getControlsConfig('position')) !== null && _e !== void 0 ? _e : 'below')}
                    @change=${(e) => {
            e.preventDefault();
            e.stopPropagation();
            try {
                const select = e.target;
                const value = select.value;
                if (value && value !== '') {
                    this._updateControlsConfig('position', value);
                }
            }
            catch (err) {
                console.error('Error updating controls position:', err);
            }
        }}
                  >
                    <option value="above">Above Image</option>
                    <option value="below">Below Image (Default)</option>
                    <option value="overlay">Overlay on Image</option>
                  </select>
                </div>
                ${this._getControlsConfig('position') === 'overlay' ? x `
                  <div class="select-wrapper">
                    <label class="select-label">Controls Overlay Position *</label>
                    <select
                      class="native-select"
                      .value=${(_f = this._config.controls_overlay_position) !== null && _f !== void 0 ? _f : 'bottom'}
                      @change=${(e) => {
            e.preventDefault();
            e.stopPropagation();
            try {
                const select = e.target;
                this._updateConfig('controls_overlay_position', select.value);
            }
            catch (err) {
                console.error('Error updating controls overlay position:', err);
            }
        }}
                    >
                      <option value="top">Top</option>
                      <option value="bottom">Bottom (Default)</option>
                      <option value="left">Left</option>
                      <option value="right">Right</option>
                      <option value="center">Center</option>
                    </select>
                  </div>
                  <ha-textfield
                    label="Controls Overlay Opacity (0.0 - 1.0)"
                    type="number"
                    step="0.1"
                    min="0"
                    max="1"
                    .value=${String((_g = this._config.controls_overlay_opacity) !== null && _g !== void 0 ? _g : 0.9)}
                    @input=${(e) => this._updateConfig('controls_overlay_opacity', parseFloat(e.target.value))}
                  ></ha-textfield>
                  ${(() => {
            const conflict = this._checkOverlayConflict();
            return conflict.hasConflict ? x `
                      <div class="warning-text" style="padding: 8px; background: var(--warning-color, rgba(255, 152, 0, 0.1)); border-left: 3px solid var(--warning-color, #ff9800); border-radius: 4px; font-size: 0.875em; margin-top: 8px;">
                        ${conflict.message}
                      </div>
                    ` : '';
        })()}
                ` : ''}
              </div>
            ` : ''}
          </div>

          <ha-textfield
            label="Image Zoom (1.0 = 100%)"
            type="number"
            step="0.1"
            min="0.5"
            max="3.0"
            .value=${String(this._config.image_zoom || 1.0)}
            @input=${(e) => this._updateConfig('image_zoom', parseFloat(e.target.value))}
            helper="Zoom level: 0.5 = 50%, 1.0 = 100%, 2.0 = 200%"
          ></ha-textfield>
          <div class="select-wrapper">
            <label class="select-label">Image Fit</label>
            <select
              class="native-select"
              .value=${this._config.image_fit || 'contain'}
              @change=${(e) => {
            const select = e.target;
            this._updateConfig('image_fit', select.value);
        }}
            >
              <option value="contain">Contain (fit entire image)</option>
              <option value="cover">Cover (fill container)</option>
              <option value="fill">Fill (stretch to fit)</option>
            </select>
          </div>
        </div>

        <div class="section">
          <h3>Slideshow</h3>
          <div class="select-wrapper">
            <label class="select-label">Timespan</label>
            <select
              class="native-select"
              .value=${this._config.timespan || 'latest'}
              @change=${(e) => {
            const select = e.target;
            const newTimespan = select.value;
            // Clear custom time fields if switching away from custom
            if (newTimespan !== 'custom' && this._config.timespan === 'custom') {
                const updatedConfig = Object.assign({}, this._config);
                updatedConfig.timespan = newTimespan;
                delete updatedConfig.custom_start_time;
                delete updatedConfig.custom_end_time;
                this._config = updatedConfig;
                ne(this, 'config-changed', { config: updatedConfig });
            }
            else {
                this._updateConfig('timespan', newTimespan);
            }
        }}
            >
              <option value="latest">Latest 7 frames</option>
              ${this._cacheRange && this._cacheRange.totalCacheFolders > 0 ? x `
                <option value="1h">Last 1 hour${this._getRangeWarning('1h') ? ' ⚠️' : ''}</option>
                <option value="3h">Last 3 hours${this._getRangeWarning('3h') ? ' ⚠️' : ''}</option>
                <option value="6h">Last 6 hours${this._getRangeWarning('6h') ? ' ⚠️' : ''}</option>
                <option value="12h">Last 12 hours${this._getRangeWarning('12h') ? ' ⚠️' : ''}</option>
                <option value="24h">Last 24 hours${this._getRangeWarning('24h') ? ' ⚠️' : ''}</option>
              ` : x `
                <option value="1h">Last 1 hour</option>
                <option value="3h">Last 3 hours</option>
                <option value="6h">Last 6 hours</option>
                <option value="12h">Last 12 hours</option>
                <option value="24h">Last 24 hours</option>
              `}
              <option value="custom">Custom time range</option>
            </select>
          </div>
          ${this._cacheRange && this._cacheRange.totalCacheFolders > 0 ? x `
            <div class="cache-range-info">
              <div class="info-text">
                <strong>Available cache:</strong> ${this._formatCacheRange()}
              </div>
            </div>
          ` : this._cacheRangeError ? x `
            <div class="cache-range-warning">
              <div class="warning-text">⚠️ ${this._cacheRangeError}</div>
            </div>
          ` : ''}
          ${this._getRangeWarning(this._config.timespan || 'latest') ? x `
            <div class="range-warning">
              <div class="warning-text">
                ⚠️ Selected timespan may not have enough data. Available: ${this._formatCacheRange()}
              </div>
            </div>
          ` : ''}
          ${this._config.timespan === 'custom' ? x `
            <ha-textfield
              label="Custom Start Time (ISO 8601)"
              .value=${this._config.custom_start_time || ''}
              @input=${(e) => this._updateConfig('custom_start_time', e.target.value)}
              helper="e.g., 2025-01-15T10:00:00Z"
            ></ha-textfield>
            <ha-textfield
              label="Custom End Time (ISO 8601)"
              .value=${this._config.custom_end_time || ''}
              @input=${(e) => this._updateConfig('custom_end_time', e.target.value)}
              helper="e.g., 2025-01-15T18:00:00Z"
            ></ha-textfield>
            ${this._validateCustomRange() ? x `
              <div class="range-warning">
                <div class="warning-text">
                  ⚠️ ${this._validateCustomRange()}
                </div>
              </div>
            ` : ''}
          ` : ''}
          <ha-textfield
            label="Frame Interval (seconds)"
            type="number"
            step="0.5"
            min="0.5"
            max="10"
            .value=${String(this._config.frame_interval || 2.0)}
            @input=${(e) => this._updateConfig('frame_interval', parseFloat(e.target.value))}
          ></ha-textfield>
          <div class="switch-wrapper">
            <label class="switch-label">Auto Play</label>
            <ha-switch
              .checked=${this._config.auto_play !== false}
              @change=${(e) => {
            const checked = e.target.checked;
            this._updateConfig('auto_play', checked);
        }}
            ></ha-switch>
          </div>
        </div>

        <div class="section">
          <h3>Auto Refresh</h3>
          <ha-textfield
            label="Refresh Interval (seconds)"
            type="number"
            min="10"
            max="300"
            step="10"
            .value=${String(this._config.refresh_interval || 30)}
            @input=${(e) => this._updateConfig('refresh_interval', parseInt(e.target.value))}
          ></ha-textfield>
        </div>
      </div>
    `;
    }
    _updateConfig(key, value) {
        const config = Object.assign(Object.assign({}, this._config), { [key]: value });
        this._config = config;
        ne(this, 'config-changed', { config });
    }
    // Metadata configuration helpers
    _getMetadataEnabled() {
        const config = this._config.show_metadata;
        if (config === undefined || config === true)
            return true;
        if (typeof config === 'boolean')
            return config;
        return true; // Object means enabled with custom config
    }
    _updateMetadataToggle(enabled) {
        if (enabled) {
            // If enabling, check if we have existing config or create default
            if (typeof this._config.show_metadata === 'object') {
                // Keep existing config
                return;
            }
            // Create default config object
            this._updateConfig('show_metadata', {});
        }
        else {
            // Disable metadata
            this._updateConfig('show_metadata', false);
        }
    }
    _getMetadataConfig(key) {
        const config = this._config.show_metadata;
        if (typeof config === 'boolean') {
            // For boolean config, return default values for position/style, true for others
            if (key === 'position')
                return 'above';
            if (key === 'style')
                return 'cards';
            return config;
        }
        if (typeof config === 'object') {
            const value = config[key];
            // For position/style, return the value or undefined (default)
            if (key === 'position' || key === 'style') {
                return value;
            }
            // For boolean fields, default to true if not explicitly false
            return value !== false;
        }
        // Default values
        if (key === 'position')
            return 'above';
        if (key === 'style')
            return 'cards';
        return true;
    }
    _updateMetadataConfig(key, value) {
        let config;
        if (typeof this._config.show_metadata === 'object') {
            config = Object.assign({}, this._config.show_metadata);
        }
        else {
            config = {};
        }
        // Handle undefined to remove the key (revert to default)
        if (value === undefined) {
            delete config[key];
        }
        else {
            // Type-safe assignment based on key
            if (key === 'position' || key === 'style') {
                config[key] = value;
            }
            else {
                config[key] = value;
            }
        }
        // If config is empty, set to true (default)
        if (Object.keys(config).length === 0) {
            this._updateConfig('show_metadata', true);
        }
        else {
            this._updateConfig('show_metadata', config);
        }
    }
    // Controls configuration helpers
    _getControlsEnabled() {
        const config = this._config.show_controls;
        if (config === undefined || config === true)
            return true;
        if (typeof config === 'boolean')
            return config;
        return true; // Object means enabled with custom config
    }
    _updateControlsToggle(enabled) {
        if (enabled) {
            // If enabling, check if we have existing config or create default
            if (typeof this._config.show_controls === 'object') {
                // Keep existing config
                return;
            }
            // Create default config object
            this._updateConfig('show_controls', {});
        }
        else {
            // Disable controls
            this._updateConfig('show_controls', false);
        }
    }
    _getControlsConfig(key) {
        const config = this._config.show_controls;
        if (typeof config === 'boolean') {
            // For boolean config, return default values for position, true for others
            if (key === 'position')
                return 'below';
            return config;
        }
        if (typeof config === 'object') {
            const value = config[key];
            // For position, return the value or undefined (default)
            if (key === 'position') {
                return value;
            }
            // For boolean fields, default to true if not explicitly false
            return value !== false;
        }
        // Default values
        if (key === 'position')
            return 'below';
        return true;
    }
    _updateControlsConfig(key, value) {
        let config;
        if (typeof this._config.show_controls === 'object') {
            config = Object.assign({}, this._config.show_controls);
        }
        else {
            config = {};
        }
        // Handle undefined to remove the key (revert to default)
        if (value === undefined) {
            delete config[key];
        }
        else {
            // Type-safe assignment based on key
            if (key === 'position') {
                config[key] = value;
            }
            else {
                config[key] = value;
            }
        }
        // If config is empty, set to true (default)
        if (Object.keys(config).length === 0) {
            this._updateConfig('show_controls', true);
        }
        else {
            this._updateConfig('show_controls', config);
        }
    }
    /**
     * Check if metadata and controls would overlap when both are overlays
     */
    _checkOverlayConflict() {
        var _a, _b, _c;
        const metadataConfig = this._getMetadataConfig('position');
        const controlsConfig = this._getControlsConfig('position');
        // Both must be overlays to have a conflict
        if (metadataConfig !== 'overlay' || controlsConfig !== 'overlay') {
            return { hasConflict: false, message: '' };
        }
        const metadataPos = (_a = this._config.metadata_overlay_position) !== null && _a !== void 0 ? _a : 'top';
        const controlsPos = (_b = this._config.controls_overlay_position) !== null && _b !== void 0 ? _b : 'bottom';
        // Check for conflicts
        if (metadataPos === controlsPos) {
            return {
                hasConflict: true,
                message: `⚠️ Warning: Both metadata and controls are overlayed at the same position (${metadataPos}). They will overlap.`
            };
        }
        // Check for adjacent positions that might conflict
        const conflicts = {
            'top': ['top', 'center'],
            'bottom': ['bottom', 'center'],
            'left': ['left', 'center'],
            'right': ['right', 'center'],
            'center': ['top', 'bottom', 'left', 'right', 'center']
        };
        if ((_c = conflicts[metadataPos]) === null || _c === void 0 ? void 0 : _c.includes(controlsPos)) {
            return {
                hasConflict: true,
                message: `⚠️ Warning: Metadata (${metadataPos}) and controls (${controlsPos}) may overlap. Consider using different positions.`
            };
        }
        return { hasConflict: false, message: '' };
    }
    _getRangeWarning(timespan) {
        if (!this._cacheRange || this._cacheRange.totalCacheFolders === 0 || timespan === 'latest' || timespan === 'custom') {
            return false;
        }
        const hours = parseInt(timespan.replace('h', '')) || 0;
        const requestedMinutes = hours * 60;
        const availableMinutes = this._cacheRange.timeSpanMinutes || 0;
        return requestedMinutes > availableMinutes;
    }
    _formatCacheRange() {
        var _a, _b, _c, _d, _e, _f;
        if (!this._cacheRange || this._cacheRange.totalCacheFolders === 0) {
            return 'No cache available';
        }
        const oldest = (_a = this._cacheRange.oldestCache) === null || _a === void 0 ? void 0 : _a.cacheTimestamp;
        const newest = (_b = this._cacheRange.newestCache) === null || _b === void 0 ? void 0 : _b.cacheTimestamp;
        const timeSpan = this._cacheRange.timeSpanMinutes;
        if (oldest && newest) {
            const oldestDate = new Date(oldest);
            const newestDate = new Date(newest);
            // Use local timezone for display
            const locale = ((_d = (_c = this.hass) === null || _c === void 0 ? void 0 : _c.locale) === null || _d === void 0 ? void 0 : _d.language) || 'en-AU';
            const timeZone = ((_f = (_e = this.hass) === null || _e === void 0 ? void 0 : _e.config) === null || _f === void 0 ? void 0 : _f.time_zone) || Intl.DateTimeFormat().resolvedOptions().timeZone;
            const oldestStr = oldestDate.toLocaleString(locale, {
                timeZone: timeZone,
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
            });
            const newestStr = newestDate.toLocaleString(locale, {
                timeZone: timeZone,
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
            });
            if (timeSpan) {
                const hours = Math.floor(timeSpan / 60);
                const minutes = timeSpan % 60;
                return `${oldestStr} to ${newestStr} (${hours}h ${minutes}m, ${this._cacheRange.totalCacheFolders} folders)`;
            }
            return `${oldestStr} to ${newestStr} (${this._cacheRange.totalCacheFolders} folders)`;
        }
        return `${this._cacheRange.totalCacheFolders} cache folders available`;
    }
    _validateCustomRange() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        // Only validate if timespan is custom
        if (this._config.timespan !== 'custom') {
            return null;
        }
        if (!this._config.custom_start_time || !this._config.custom_end_time) {
            return null; // No validation needed if fields are empty
        }
        try {
            const startTime = new Date(this._config.custom_start_time);
            const endTime = new Date(this._config.custom_end_time);
            if (isNaN(startTime.getTime()) || isNaN(endTime.getTime())) {
                return 'Invalid date format. Use ISO 8601 format (e.g., 2025-01-15T10:00:00Z)';
            }
            if (startTime >= endTime) {
                return 'Start time must be before end time';
            }
            if (this._cacheRange && this._cacheRange.oldestCache && this._cacheRange.newestCache) {
                try {
                    const oldestCache = new Date(this._cacheRange.oldestCache.cacheTimestamp);
                    const newestCache = new Date(this._cacheRange.newestCache.cacheTimestamp);
                    if (isNaN(oldestCache.getTime()) || isNaN(newestCache.getTime())) {
                        return null; // Can't validate if cache dates are invalid
                    }
                    if (startTime < oldestCache) {
                        const locale = ((_b = (_a = this.hass) === null || _a === void 0 ? void 0 : _a.locale) === null || _b === void 0 ? void 0 : _b.language) || 'en-AU';
                        const timeZone = ((_d = (_c = this.hass) === null || _c === void 0 ? void 0 : _c.config) === null || _d === void 0 ? void 0 : _d.time_zone) || Intl.DateTimeFormat().resolvedOptions().timeZone;
                        const oldestStr = oldestCache.toLocaleString(locale, {
                            timeZone: timeZone,
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                        });
                        return `Start time is before available cache (${oldestStr})`;
                    }
                    if (endTime > newestCache) {
                        const locale = ((_f = (_e = this.hass) === null || _e === void 0 ? void 0 : _e.locale) === null || _f === void 0 ? void 0 : _f.language) || 'en-AU';
                        const timeZone = ((_h = (_g = this.hass) === null || _g === void 0 ? void 0 : _g.config) === null || _h === void 0 ? void 0 : _h.time_zone) || Intl.DateTimeFormat().resolvedOptions().timeZone;
                        const newestStr = newestCache.toLocaleString(locale, {
                            timeZone: timeZone,
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                        });
                        return `End time is after available cache (${newestStr})`;
                    }
                }
                catch (err) {
                    // Ignore cache date parsing errors
                    return null;
                }
            }
            return null; // Valid
        }
        catch (err) {
            return 'Invalid date format';
        }
    }
};
BomLocalRadarCardEditor.styles = i$3 `
    .editor { 
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    
    .section { 
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 16px;
      background: var(--card-background-color, #ffffff);
      border-radius: 8px;
      border: 1px solid var(--divider-color, #e0e0e0);
    }
    
    .section h3 { 
      margin: 0;
      font-weight: 600; 
      font-size: 1.1em;
      color: var(--primary-text-color, #212121);
      padding-bottom: 8px;
      border-bottom: 2px solid var(--divider-color, #e0e0e0);
    }
    
    .section-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
      padding: 8px 0;
    }
    
    .metadata-section,
    .controls-section {
      margin-top: 0;
      padding: 12px;
      background: var(--secondary-background-color, #fafafa);
      border-radius: 8px;
      border: 1px solid var(--divider-color, #e0e0e0);
    }
    
    .metadata-options,
    .controls-options {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-top: 12px;
      padding-top: 12px;
      border-top: 1px solid var(--divider-color, #e0e0e0);
    }
    
    ha-textfield {
      display: block;
      width: 100%;
      margin-bottom: 0;
    }
    
    .select-wrapper {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 16px;
    }
    
    .select-label {
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--primary-text-color, #212121);
    }
    
    .native-select {
      width: 100%;
      padding: 12px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 4px;
      background: var(--card-background-color, #ffffff);
      color: var(--primary-text-color, #212121);
      font-size: 1rem;
      font-family: inherit;
      cursor: pointer;
      transition: border-color 0.2s;
    }
    
    .native-select:hover {
      border-color: var(--primary-color, #03a9f4);
    }
    
    .native-select:focus {
      outline: none;
      border-color: var(--primary-color, #03a9f4);
      box-shadow: 0 0 0 2px rgba(3, 169, 244, 0.2);
    }
    
    .switch-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 0;
      margin-bottom: 0;
    }
    
    .switch-label {
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--primary-text-color, #212121);
      flex: 1;
      cursor: pointer;
    }
    
    ha-switch {
      margin-left: 16px;
      flex-shrink: 0;
    }
    
    ha-icon-button {
      --mdc-icon-button-size: 32px;
    }

    .cache-range-info {
      margin-top: 8px;
      padding: 8px 12px;
      background: var(--info-color, rgba(33, 150, 243, 0.1));
      border-left: 3px solid var(--info-color, #2196f3);
      border-radius: 4px;
    }

    .cache-range-info .info-text {
      font-size: 0.875em;
      color: var(--primary-text-color, #212121);
    }

    .range-warning,
    .cache-range-warning {
      margin-top: 8px;
      padding: 8px 12px;
      background: var(--warning-color, rgba(255, 152, 0, 0.1));
      border-left: 3px solid var(--warning-color, #ff9800);
      border-radius: 4px;
    }

    .range-warning .warning-text,
    .cache-range-warning .warning-text {
      font-size: 0.875em;
      color: var(--primary-text-color, #212121);
    }
  `;
__decorate([
    n({ attribute: false })
], BomLocalRadarCardEditor.prototype, "hass", void 0);
__decorate([
    r$1()
], BomLocalRadarCardEditor.prototype, "_config", void 0);
__decorate([
    r$1()
], BomLocalRadarCardEditor.prototype, "_metadataExpanded", void 0);
__decorate([
    r$1()
], BomLocalRadarCardEditor.prototype, "_controlsExpanded", void 0);
__decorate([
    r$1()
], BomLocalRadarCardEditor.prototype, "_cacheRange", void 0);
__decorate([
    r$1()
], BomLocalRadarCardEditor.prototype, "_cacheRangeError", void 0);
BomLocalRadarCardEditor = __decorate([
    t$1('bom-local-card-editor')
], BomLocalRadarCardEditor);

const CARD_VERSION = '0.3.0';
const DEFAULT_FRAME_INTERVAL = 2.0; // seconds
const DEFAULT_RESTART_DELAY = 2000; // ms (pause before looping)
const DEFAULT_REFRESH_INTERVAL = 30; // seconds

/**
 * Parses API error response and creates ErrorState
 * Consolidates duplicated error handling logic from fetchRadarData and fetchHistoricalRadar
 */
function parseApiError(response, errorData, parsedJson, options) {
    // Extract error information (support both camelCase and PascalCase)
    const errorCode = errorData.errorCode || errorData.ErrorCode;
    const message = errorData.message || errorData.Message || response.statusText || 'An error occurred';
    const errorType = errorData.errorType || errorData.ErrorType;
    const details = errorData.details || errorData.Details || {};
    const suggestions = errorData.suggestions || errorData.Suggestions || {};
    // Build enhanced error message
    let enhancedMessage = message;
    // Enhance message for cache not found scenarios
    if (errorCode === 'CACHE_NOT_FOUND' || (response.status === 404 && !errorCode)) {
        if (!enhancedMessage.includes('cache') && !enhancedMessage.includes('Cache')) {
            enhancedMessage = 'No cached data found for this location. Cache update has been triggered in background. Please retry in a few moments.';
        }
    }
    // Handle previous update failure
    if (details.previousUpdateFailed) {
        enhancedMessage = `${enhancedMessage}\n\nPrevious update failed: ${details.previousError || 'Unknown error'}`;
        if (details.previousErrorCode) {
            enhancedMessage += ` (${details.previousErrorCode})`;
        }
    }
    // Handle time range errors with available/requested ranges
    if (errorCode === 'TIME_RANGE_ERROR' && details.availableRange) {
        const available = details.availableRange;
        const requested = details.requestedRange;
        enhancedMessage += `\n\nAvailable data: ${available.oldest || 'N/A'} to ${available.newest || 'N/A'}`;
        if (available.totalCacheFolders) {
            enhancedMessage += ` (${available.totalCacheFolders} cache folders)`;
        }
        if (requested) {
            enhancedMessage += `\nRequested: ${requested.start || 'N/A'} to ${requested.end || 'N/A'}`;
        }
        if (details.requestedHours) {
            enhancedMessage += `\nRequested range: ${details.requestedHours} hours (max: ${details.maxHours || 'N/A'} hours)`;
        }
        // Add service suggestion if available
        if (suggestions.suggestion) {
            enhancedMessage += `\n\n💡 ${suggestions.suggestion}`;
        }
    }
    // Determine retry behavior
    const retryAfter = suggestions.retryAfter ||
        details.retryAfter ||
        options.defaultRetryAfter || 30;
    const action = suggestions.action || 'retry_after_seconds';
    const shouldAutoRetry = action !== 'manual_refresh_recommended' &&
        action !== 'check_network_and_retry' &&
        action !== 'adjust_time_range';
    // Map error type
    const mappedType = mapErrorType(errorType || errorCode || (response.status === 404 ? 'CACHE_NOT_FOUND' : 'unknown'));
    // Determine retryable status - for historical endpoint, also allow 400
    const isHistoricalEndpoint = response.url.includes('/timeseries');
    const retryable = response.status === 404 || (isHistoricalEndpoint && response.status === 400);
    return {
        message: enhancedMessage,
        type: mappedType,
        retryable: retryable,
        retryAction: options.retryAction,
        retryAfter: shouldAutoRetry ? retryAfter : undefined,
        errorCode: errorCode || (response.status === 404 ? 'CACHE_NOT_FOUND' : `HTTP_${response.status}`),
        details: Object.assign(Object.assign({}, details), { action: action, refreshEndpoint: suggestions.refreshEndpoint, statusEndpoint: suggestions.statusEndpoint, suggestedRange: suggestions.suggestedRange }),
    };
}
/**
 * Maps API error type to card error type
 */
function mapErrorType(apiErrorType) {
    if (!apiErrorType)
        return 'unknown';
    const type = apiErrorType.toLowerCase();
    if (type.includes('cache') || type === 'cache_not_found' || type === 'cacheerror')
        return 'cache';
    if (type.includes('validation') || type === 'validation_error' || type === 'validationerror')
        return 'validation';
    if (type.includes('network') || type.includes('fetch'))
        return 'network';
    if (type.includes('notfound') || type === 'not_found' || type === 'notfounderror')
        return 'cache';
    return 'unknown';
}

/**
 * Resolves a URL through the Home Assistant integration proxy if it's a relative path.
 * The integration provides a proxy at /api/bom_local/proxy/
 */
function resolveImageUrl(url, serviceUrl) {
    if (!url)
        return url;
    // If URL is already absolute (starts with http:// or https://), use as-is
    if (url.startsWith('http://') || url.startsWith('https://')) {
        return url;
    }
    // If we are using the HA integration proxy (standard behavior now)
    const proxyPrefix = '/api/bom_local/proxy';
    // Remove leading slash if present to avoid double slashes
    const path = url.startsWith('/') ? url : `/${url}`;
    return `${proxyPrefix}${path}`;
}

class RadarApiService {
    /**
     * Fetches latest radar frames via HA WebSocket API
     */
    async fetchLatestFrames(options) {
        const { hass, suburb, state, onError } = options;
        try {
            const data = await hass.callWS({
                type: 'bom_local/get_radar_data',
                suburb,
                state,
            });
            // Handle service-level errors (e.g. CACHE_NOT_FOUND)
            if (data.errorCode || data.ErrorCode || data.error) {
                const error = parseApiError({ ok: false, status: 404, statusText: 'Not Found', url: '/api/radar' }, data, true, {
                    retryAction: () => this.fetchLatestFrames(options),
                    defaultRetryAfter: 30,
                });
                onError(error);
                return null;
            }
            // Validate response has frames
            if (!data.frames || data.frames.length === 0) {
                throw new Error('No frames available in response');
            }
            // Resolve relative image URLs through HA proxy
            data.frames.forEach((frame) => {
                if (frame.imageUrl) {
                    frame.imageUrl = resolveImageUrl(frame.imageUrl);
                }
            });
            return data;
        }
        catch (err) {
            this.handleFetchError(err, options);
            return null;
        }
    }
    /**
     * Fetches historical radar data via HA WebSocket API
     */
    async fetchHistoricalFrames(options) {
        var _a;
        const { hass, suburb, state, timespan, customStartTime, customEndTime, onError } = options;
        try {
            let startTime = null;
            let endTime = new Date().toISOString();
            if (timespan === 'custom') {
                if (customStartTime)
                    startTime = new Date(customStartTime).toISOString();
                if (customEndTime)
                    endTime = new Date(customEndTime).toISOString();
            }
            else if (timespan) {
                const hours = parseInt(timespan.replace('h', '')) || 1;
                startTime = new Date(Date.now() - (hours * 60 * 60 * 1000)).toISOString();
            }
            if (!startTime) {
                throw new Error('Invalid timespan configuration');
            }
            const data = await hass.callWS({
                type: 'bom_local/get_radar_data',
                suburb,
                state,
                startTime,
                endTime,
            });
            // Handle service-level errors (e.g. TIME_RANGE_ERROR or CACHE_NOT_FOUND)
            if (data.errorCode || data.ErrorCode || data.error) {
                const error = parseApiError({ ok: false, status: 404, statusText: 'Not Found', url: '/timeseries' }, data, true, {
                    retryAction: () => this.fetchHistoricalFrames(options),
                    defaultRetryAfter: 30,
                });
                onError(error);
                return null;
            }
            if (!data.cacheFolders || data.cacheFolders.length === 0) {
                throw new Error('No historical data found for the specified time range.');
            }
            // Flatten all frames from all cache folders
            const allFrames = [];
            data.cacheFolders.forEach(cacheFolder => {
                cacheFolder.frames.forEach(frame => {
                    frame.cacheTimestamp = cacheFolder.cacheTimestamp;
                    frame.observationTime = cacheFolder.observationTime;
                    frame.cacheFolderName = cacheFolder.cacheFolderName;
                    if (frame.imageUrl) {
                        frame.imageUrl = resolveImageUrl(frame.imageUrl);
                    }
                    if (!frame.absoluteObservationTime && frame.observationTime && frame.minutesAgo !== undefined) {
                        const obsTime = new Date(frame.observationTime);
                        frame.absoluteObservationTime = new Date(obsTime.getTime() - (frame.minutesAgo * 60 * 1000)).toISOString();
                    }
                    allFrames.push(frame);
                });
            });
            // Re-index frames sequentially
            allFrames.sort((a, b) => new Date(a.absoluteObservationTime).getTime() - new Date(b.absoluteObservationTime).getTime());
            allFrames.forEach((frame, idx) => {
                frame.sequentialIndex = idx;
            });
            // Fetch latest metadata for display
            let metadata = {};
            try {
                metadata = await hass.callWS({
                    type: 'bom_local/get_radar_data',
                    suburb,
                    state
                });
            }
            catch (err) {
                console.debug('Could not fetch metadata:', err);
            }
            const newestCacheFolder = data.cacheFolders[data.cacheFolders.length - 1];
            const radarResponse = {
                frames: allFrames,
                lastUpdated: endTime,
                observationTime: metadata.observationTime || (newestCacheFolder === null || newestCacheFolder === void 0 ? void 0 : newestCacheFolder.observationTime) || endTime,
                forecastTime: metadata.forecastTime || endTime,
                weatherStation: metadata.weatherStation,
                distance: metadata.distance,
                cacheIsValid: (_a = metadata.cacheIsValid) !== null && _a !== void 0 ? _a : true,
                cacheExpiresAt: metadata.cacheExpiresAt || endTime,
                isUpdating: metadata.isUpdating || false,
                nextUpdateTime: metadata.nextUpdateTime || endTime,
            };
            return radarResponse;
        }
        catch (err) {
            this.handleFetchError(err, options);
            return null;
        }
    }
    /**
     * Handles fetch errors and categorizes them appropriately
     */
    handleFetchError(err, options) {
        const message = (err === null || err === void 0 ? void 0 : err.message) || (typeof err === 'string' ? err : 'Unknown error occurred');
        options.onError({
            message: message,
            type: 'unknown',
            retryable: true,
            retryAction: () => this.fetchLatestFrames(options),
        });
    }
}

/**
 * Base card styles including CSS variables and root layout
 */
const cardStyles = i$3 `
  :host {
    --bom-primary-color: var(--primary-color, #667eea);
    --bom-secondary-color: var(--secondary-text-color, #666);
    --bom-card-background: var(--card-background-color, white);
    --bom-text-color: var(--primary-text-color, #333);
    --bom-border-color: var(--divider-color, #e0e0e0);
  }

  #root {
    width: 100%;
    position: relative;
  }
`;

/**
 * Styles for radar image container and loading states
 */
const imageStyles = i$3 `
  /* Radar Image Container */
  .radar-image-container {
    position: relative;
    width: 100%;
    background: #000;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 15px;
    aspect-ratio: 16/9;
    min-height: 200px; /* Smaller on mobile */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 480px) {
    .radar-image-container {
      min-height: 300px;
    }
  }

  @media (min-width: 768px) {
    .radar-image-container {
      min-height: 400px;
    }
  }

  .radar-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
    image-rendering: crisp-edges;
    transition: transform 0.3s ease;
  }

  .radar-image-contain {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .radar-image-cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .radar-image-fill {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }

  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 1.2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    z-index: 10;
  }

  .loading-icon {
    width: 80px;
    height: 80px;
    animation: pulse 2s ease-in-out infinite;
    opacity: 0.8;
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 0.8;
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(1.05);
    }
  }

  .loading-message {
    font-size: 0.9em;
    opacity: 0.9;
  }
`;

/**
 * Styles for frame slider, navigation buttons, and play controls
 */
const controlsStyles = i$3 `
  .frame-slider-container {
    width: 100%;
    padding: 15px;
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
    border-radius: 12px;
    border: 2px solid #e0e0e0;
    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
    margin-bottom: 15px;
    box-sizing: border-box;
  }

  .frame-slider-wrapper {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
    flex-wrap: wrap;
  }

  .frame-nav-btn {
    padding: 10px 16px;
    border: 2px solid var(--primary-color, #667eea);
    background: white;
    color: var(--primary-color, #667eea);
    border-radius: 10px;
    cursor: pointer;
    font-weight: 700;
    font-size: 0.9em;
    transition: all 0.2s;
    min-width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .frame-nav-btn:hover:not(:disabled) {
    background: var(--primary-color, #667eea);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  }

  .frame-nav-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    background: #f0f0f0;
    border-color: #d0d0d0;
    color: #999;
  }

  .frame-slider {
    flex: 1;
    min-width: 120px;
    height: 10px;
    border-radius: 5px;
    background: #e0e0e0;
    outline: none;
    -webkit-appearance: none;
    cursor: pointer;
    order: 3;
  }

  .frame-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);
    border: 3px solid white;
    transition: all 0.2s;
    margin-top: -7px; /* Center the 24px thumb on the 10px track: (24-10)/2 = 7 */
  }

  .frame-slider::-webkit-slider-thumb:hover {
    transform: scale(1.15);
    box-shadow: 0 4px 16px rgba(102, 126, 234, 0.6);
  }

  .frame-slider::-webkit-slider-runnable-track {
    height: 10px;
    border-radius: 5px;
    background: linear-gradient(to right, #667eea 0%, #764ba2 100%);
  }

  .frame-slider::-moz-range-thumb {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    cursor: pointer;
    border: 3px solid white;
    box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);
  }

  .frame-slider::-moz-range-track {
    height: 10px;
    border-radius: 5px;
    background: #e0e0e0;
  }

  .frame-slider::-moz-range-progress {
    height: 10px;
    border-radius: 5px;
    background: linear-gradient(to right, #667eea 0%, #764ba2 100%);
  }

  .play-controls {
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;
    flex-wrap: wrap;
  }

  .play-btn {
    padding: 10px 16px;
    border: 2px solid var(--primary-color, #667eea);
    background: var(--primary-color, #667eea);
    color: white;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 700;
    font-size: 0.9em;
    transition: all 0.2s;
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .play-btn:hover:not(:disabled) {
    background: var(--primary-color-dark, #5568d3);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  }

  .play-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .frame-info {
    text-align: center;
    color: var(--secondary-text-color, rgba(0, 0, 0, 0.6));
    font-size: 0.85em;
    margin-top: 6px;
    margin-bottom: 4px;
    padding: 6px 12px;
    background: var(--card-background-color, #fff);
    border-radius: 4px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;
    line-height: 1.4;
  }

  .frame-index {
    font-weight: 600;
    color: var(--primary-text-color, rgba(0, 0, 0, 0.87));
    white-space: nowrap;
  }

  .frame-time {
    white-space: nowrap;
    color: var(--secondary-text-color, rgba(0, 0, 0, 0.6));
  }

  .observation-time {
    white-space: nowrap;
    color: var(--secondary-text-color, rgba(0, 0, 0, 0.6));
  }

  .frame-progress {
    white-space: nowrap;
    color: var(--secondary-text-color, rgba(0, 0, 0, 0.6));
    font-size: 0.9em;
  }

  .frame-nav-buttons {
    display: flex;
    gap: 8px;
    justify-content: center;
    margin-bottom: 12px;
    flex-wrap: wrap;
  }

  .controls-section {
    margin-top: 15px;
  }

  /* Responsive adjustments */
  @media (min-width: 480px) {
    .frame-slider-wrapper {
      flex-wrap: nowrap;
    }
    .frame-slider {
      order: 0;
    }
  }
`;

/**
 * Styles for metadata display sections
 */
const metadataStyles = i$3 `
  /* Metadata Section */
  .metadata-section {
    margin-bottom: 15px;
  }

  .metadata-section.metadata-cards {
    display: grid;
    grid-template-columns: 1fr; /* Single column on mobile */
    gap: 12px;
  }

  @media (min-width: 480px) {
    .metadata-section.metadata-cards {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 768px) {
    .metadata-section.metadata-cards {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
    }
  }

  .metadata-section.metadata-cards .metadata-item {
    background: var(--card-background-color, #ffffff);
    border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
    border-radius: 8px;
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    transition: box-shadow 0.2s ease, transform 0.2s ease;
  }

  .metadata-section.metadata-cards .metadata-item:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
    transform: translateY(-1px);
  }

  .metadata-section.metadata-cards .metadata-label {
    font-size: 0.75em;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    opacity: 0.7;
    margin-bottom: 2px;
  }

  .metadata-section.metadata-cards .metadata-value {
    font-size: 1.1em;
    font-weight: 600;
  }

  .metadata-section.metadata-compact {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    font-size: 0.9em;
  }

  .metadata-section.metadata-compact .metadata-item {
    background: var(--secondary-background-color, #f5f5f5);
    border-radius: 6px;
    padding: 8px 12px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .metadata-section.metadata-minimal {
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 0.85em;
  }

  .metadata-section.metadata-minimal .metadata-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 4px 0;
    border-bottom: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
  }

  .metadata-section.metadata-minimal .metadata-item:last-child {
    border-bottom: none;
  }

  .metadata-item {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .metadata-label {
    color: var(--bom-secondary-color);
    font-weight: 600;
    font-size: 0.85em;
  }

  .metadata-value {
    color: var(--bom-text-color);
    font-weight: 600;
  }

  .metadata-relative {
    color: var(--bom-secondary-color);
    font-size: 0.85em;
  }

  .info-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin-bottom: 15px;
  }

  .info-card {
    background: var(--bom-card-background);
    border-radius: 8px;
    padding: 15px;
    border-left: 4px solid var(--bom-primary-color);
  }

  .info-card h3 {
    font-size: 0.8em;
    text-transform: uppercase;
    color: var(--bom-secondary-color);
    margin-bottom: 6px;
    letter-spacing: 0.5px;
  }

  .info-card .value {
    font-size: 1.2em;
    font-weight: 600;
    color: var(--bom-text-color);
  }
`;

/**
 * Styles for overlay controls and metadata overlays
 */
const overlayStyles = i$3 `
  /* Overlay Controls */
  .controls-overlay {
    position: absolute;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(8px);
    border-radius: 8px;
    padding: 12px;
    z-index: 10;
    transition: opacity 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-width: 200px;
  }

  .controls-overlay.overlay-top {
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
  }

  .controls-overlay.overlay-bottom {
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
  }

  .controls-overlay.overlay-left {
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
  }

  .controls-overlay.overlay-right {
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
  }

  .controls-overlay.overlay-center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  /* Metadata Overlay */
  .metadata-overlay {
    position: absolute;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(6px);
    border-radius: 6px;
    padding: 8px 12px;
    z-index: 5;
    font-size: 0.85em;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .metadata-overlay .metadata-item {
    color: white;
  }

  .metadata-overlay .metadata-label {
    color: rgba(255, 255, 255, 0.8);
  }

  .metadata-overlay.overlay-top {
    top: 12px;
    left: 12px;
    right: auto;
  }

  .metadata-overlay.overlay-bottom {
    bottom: 12px;
    left: 12px;
    right: auto;
  }

  .metadata-overlay.overlay-left {
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
  }

  .metadata-overlay.overlay-right {
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
  }

  .metadata-overlay.overlay-center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

/**
 * Styles for error display components
 */
const errorStyles = i$3 `
  /* Error Display */
  .error-container {
    padding: 16px;
  }

  .error-card {
    background: var(--card-background-color, #ffffff);
    border-radius: 12px;
    border-left: 4px solid var(--error-color);
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.1));
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .error-header {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 18px 20px;
    background: var(--secondary-background-color, #fafafa);
    border-bottom: 1px solid var(--divider-color, rgba(0, 0, 0, 0.1));
  }

  .error-icon {
    color: var(--error-color);
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .error-title {
    font-size: 1.1em;
    font-weight: 600;
    color: var(--primary-text-color, #212121);
    flex: 1;
  }

  .error-content {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .error-message {
    font-weight: 500;
    line-height: 1.7;
    display: flex;
    flex-direction: column;
    gap: 6px;
    color: var(--primary-text-color, #212121);
    font-size: 1.05em;
    margin-bottom: 4px;
  }

  .error-line {
    min-height: 1.2em;
  }

  .error-line-spacer {
    height: 0.5em;
  }

  .error-code {
    font-size: 0.85em;
    font-family: monospace;
    color: var(--secondary-text-color, #666);
    background: var(--secondary-background-color, #f5f5f5);
    padding: 6px 12px;
    border-radius: 6px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    width: fit-content;
    border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.1));
  }

  .code-icon {
    width: 16px;
    height: 16px;
    opacity: 0.7;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .error-retry-info {
    font-size: 0.9em;
    color: var(--primary-text-color, #212121);
    padding: 10px 14px;
    background: linear-gradient(135deg, 
      rgba(33, 150, 243, 0.08) 0%, 
      rgba(33, 150, 243, 0.04) 100%);
    border-radius: 8px;
    border-left: 3px solid var(--primary-color, #2196f3);
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 4px;
  }

  .error-retry-info::before {
    content: '⏱';
    font-size: 1.1em;
  }

  .error-details {
    margin-top: 8px;
    padding-top: 16px;
    border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .error-detail-item {
    font-size: 0.9em;
    line-height: 1.6;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 10px 12px;
    background: var(--secondary-background-color, #fafafa);
    border-radius: 8px;
    transition: background 0.2s ease;
  }

  .error-detail-item:hover {
    background: var(--secondary-background-color, #f0f0f0);
  }

  .detail-icon {
    color: var(--error-color);
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 2px;
  }

  .detail-content {
    flex: 1;
    color: var(--primary-text-color, #212121);
  }

  .detail-content strong {
    font-weight: 600;
    color: var(--primary-text-color, #212121);
  }

  .detail-content code {
    font-family: monospace;
    font-size: 0.9em;
    background: var(--secondary-background-color, rgba(0, 0, 0, 0.05));
    padding: 4px 8px;
    border-radius: 4px;
    border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.15));
    color: var(--primary-text-color, #212121);
    display: inline-block;
    word-break: break-all;
  }

  .error-detail-item.suggested-range {
    background: linear-gradient(135deg, 
      rgba(255, 193, 7, 0.1) 0%, 
      rgba(255, 193, 7, 0.05) 100%);
    border-left: 3px solid var(--warning-color, #ffc107);
  }

  .suggestion-hint {
    font-size: 0.85em;
    color: var(--secondary-text-color, #666);
    margin-top: 4px;
    font-style: italic;
  }

  .error-actions {
    margin-top: 16px;
    display: flex;
    gap: 12px;
    justify-content: flex-start;
  }

  .retry-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 24px;
    min-height: 44px;
    background: var(--error-color, #f44336);
    color: white !important;
    border: 2px solid var(--error-color, #f44336);
    border-radius: 8px;
    font-size: 0.95em;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35), 0 2px 6px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2);
    font-family: inherit;
    -webkit-appearance: none;
    appearance: none;
    user-select: none;
    position: relative;
    z-index: 1;
    filter: brightness(1.05);
  }
  
  .retry-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 6px;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
    pointer-events: none;
    z-index: -1;
  }

  .retry-button:hover {
    opacity: 0.9;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    filter: brightness(0.95);
  }

  .retry-button:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .retry-button:focus {
    outline: 2px solid var(--error-color);
    outline-offset: 2px;
  }

  .retry-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  .retry-icon {
    width: 18px;
    height: 18px;
    color: white;
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
  }

  .retry-button span {
    color: white;
  }
`;

/**
 * Formats timestamp for display
 */
function formatTimestamp(isoString, locale = 'en-AU', timeZone) {
    if (!isoString)
        return '-';
    const date = new Date(isoString);
    const tz = timeZone || Intl.DateTimeFormat().resolvedOptions().timeZone;
    return date.toLocaleString(locale, {
        timeZone: tz,
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
}
/**
 * Relative time (e.g., "5 min ago", "2 hours ago")
 */
function formatRelativeTime(isoString) {
    if (!isoString)
        return '-';
    const date = new Date(isoString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);
    if (diffMins < 1)
        return 'Just now';
    if (diffMins < 60)
        return `${diffMins} min ago`;
    if (diffHours < 24)
        return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
}

let BomErrorDisplay = class BomErrorDisplay extends i {
    constructor() {
        super(...arguments);
        this.locale = 'en-AU';
    }
    _getErrorIcon() {
        if (!this.error)
            return 'mdi:alert';
        switch (this.error.type) {
            case 'cache':
                return 'mdi:database-alert';
            case 'validation':
                return 'mdi:alert-circle';
            case 'network':
                return 'mdi:wifi-off';
            default:
                return 'mdi:alert';
        }
    }
    _getErrorColor() {
        if (!this.error)
            return '#f44336';
        switch (this.error.type) {
            case 'cache':
                return '#ff9800';
            case 'validation':
                return '#f44336';
            case 'network':
                return '#2196f3';
            default:
                return '#f44336';
        }
    }
    _getErrorTitle() {
        if (!this.error)
            return 'Error';
        switch (this.error.type) {
            case 'cache':
                return 'Cache Error';
            case 'validation':
                return 'Validation Error';
            case 'network':
                return 'Network Error';
            default:
                return 'Error';
        }
    }
    render() {
        var _a, _b, _c, _d, _e, _f;
        if (!this.error) {
            return x ``;
        }
        const action = (_a = this.error.details) === null || _a === void 0 ? void 0 : _a.action;
        const isManualRefreshRecommended = action === 'manual_refresh_recommended';
        const refreshEndpoint = (_b = this.error.details) === null || _b === void 0 ? void 0 : _b.refreshEndpoint;
        const retryInfo = this.error.retryAfter
            ? x `<div class="error-retry-info">Auto-retrying in ${this.error.retryAfter} seconds...</div>`
            : isManualRefreshRecommended
                ? x `<div class="error-retry-info">Manual refresh recommended. Previous update failed.</div>`
                : '';
        // Format error message with line breaks (preserve empty lines)
        const errorLines = this.error.message.split('\n');
        const errorMessage = errorLines.map((line, index) => line.trim()
            ? x `<div class="error-line">${line}</div>`
            : x `<div class="error-line-spacer"></div>`);
        // Show additional details if available
        const showDetails = this.error.details && (this.error.details.previousUpdateFailed ||
            this.error.details.availableRange ||
            this.error.details.requestedRange ||
            this.error.details.suggestedRange ||
            refreshEndpoint);
        // Determine icon and color based on error type
        const errorIcon = this._getErrorIcon();
        const errorColor = this._getErrorColor();
        return x `
      <div class="error-container">
        <div class="error-card" style="--error-color: ${errorColor}">
          <div class="error-header">
            <ha-icon class="error-icon" .icon=${errorIcon}></ha-icon>
            <div class="error-title">${this._getErrorTitle()}</div>
          </div>
          <div class="error-content">
            <div class="error-message">${errorMessage}</div>
            ${this.error.errorCode ? x `
              <div class="error-code">
                <ha-icon class="code-icon" icon="mdi:code-tags"></ha-icon>
                <span>Error Code: ${this.error.errorCode}</span>
              </div>
            ` : ''}
            ${showDetails ? x `
              <div class="error-details">
                ${((_c = this.error.details) === null || _c === void 0 ? void 0 : _c.previousUpdateFailed) ? x `
                  <div class="error-detail-item">
                    <ha-icon class="detail-icon" icon="mdi:alert-circle"></ha-icon>
                    <div class="detail-content">
                      <strong>Previous Update Failed:</strong> ${this.error.details.previousError || 'Unknown error'}
                      ${this.error.details.previousErrorCode ? x ` (${this.error.details.previousErrorCode})` : ''}
                    </div>
                  </div>
                ` : ''}
                ${((_d = this.error.details) === null || _d === void 0 ? void 0 : _d.availableRange) ? x `
                  <div class="error-detail-item">
                    <ha-icon class="detail-icon" icon="mdi:database-clock"></ha-icon>
                    <div class="detail-content">
                      <strong>Available Data Range:</strong> ${this.error.details.availableRange.oldest ? formatTimestamp(this.error.details.availableRange.oldest, this.locale, this.timeZone) : 'N/A'} to ${this.error.details.availableRange.newest ? formatTimestamp(this.error.details.availableRange.newest, this.locale, this.timeZone) : 'N/A'}
                      ${this.error.details.availableRange.totalCacheFolders ? x ` (${this.error.details.availableRange.totalCacheFolders} folders)` : ''}
                    </div>
                  </div>
                ` : ''}
                ${((_e = this.error.details) === null || _e === void 0 ? void 0 : _e.requestedRange) ? x `
                  <div class="error-detail-item">
                    <ha-icon class="detail-icon" icon="mdi:calendar-range"></ha-icon>
                    <div class="detail-content">
                      <strong>Requested Range:</strong> ${this.error.details.requestedRange.start ? formatTimestamp(this.error.details.requestedRange.start, this.locale, this.timeZone) : 'N/A'} to ${this.error.details.requestedRange.end ? formatTimestamp(this.error.details.requestedRange.end, this.locale, this.timeZone) : 'N/A'}
                    </div>
                  </div>
                ` : ''}
                ${((_f = this.error.details) === null || _f === void 0 ? void 0 : _f.suggestedRange) ? x `
                  <div class="error-detail-item suggested-range">
                    <ha-icon class="detail-icon" icon="mdi:lightbulb-on"></ha-icon>
                    <div class="detail-content">
                      <strong>Suggested Range:</strong> ${this.error.details.suggestedRange.start ? formatTimestamp(this.error.details.suggestedRange.start, this.locale, this.timeZone) : 'N/A'} to ${this.error.details.suggestedRange.end ? formatTimestamp(this.error.details.suggestedRange.end, this.locale, this.timeZone) : 'N/A'}
                      <div class="suggestion-hint">Try using this time range instead</div>
                    </div>
                  </div>
                ` : ''}
                ${refreshEndpoint ? x `
                  <div class="error-detail-item">
                    <ha-icon class="detail-icon" icon="mdi:refresh"></ha-icon>
                    <div class="detail-content">
                      <strong>Refresh Endpoint:</strong> <code>${refreshEndpoint}</code>
                    </div>
                  </div>
                ` : ''}
              </div>
            ` : ''}
            ${retryInfo}
            ${this.error.retryable && this.onRetry ? x `
              <div class="error-actions">
                <button
                  class="retry-button"
                  type="button"
                  style="--error-color: ${errorColor}"
                  @click=${(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (this.onRetry) {
                this.onRetry();
            }
        }}
                >
                  <ha-icon class="retry-icon" icon="mdi:refresh"></ha-icon>
                  <span>${isManualRefreshRecommended ? 'Retry Anyway' : 'Retry Now'}</span>
                </button>
              </div>
            ` : ''}
          </div>
        </div>
      </div>
    `;
    }
};
BomErrorDisplay.styles = [errorStyles];
__decorate([
    n({ attribute: false })
], BomErrorDisplay.prototype, "error", void 0);
__decorate([
    n({ attribute: false })
], BomErrorDisplay.prototype, "locale", void 0);
__decorate([
    n({ attribute: false })
], BomErrorDisplay.prototype, "timeZone", void 0);
__decorate([
    n({ attribute: false })
], BomErrorDisplay.prototype, "onRetry", void 0);
BomErrorDisplay = __decorate([
    t$1('bom-error-display')
], BomErrorDisplay);

let BomMetadataSection = class BomMetadataSection extends i {
    constructor() {
        super(...arguments);
        this.position = 'above';
        this.locale = 'en-AU';
    }
    _getDisplayConfig() {
        if (!this.config || (typeof this.config === 'boolean' && !this.config)) {
            return null;
        }
        return typeof this.config === 'object' ? this.config : {};
    }
    render() {
        var _a, _b;
        const displayConfig = this._getDisplayConfig();
        if (!displayConfig) {
            return x ``;
        }
        const configPosition = (_a = displayConfig.position) !== null && _a !== void 0 ? _a : 'above';
        // Only render if position matches
        if (configPosition !== this.position) {
            return x ``;
        }
        // If overlay, render differently
        if (this.position === 'overlay') {
            return this._renderOverlay();
        }
        // Default style is 'cards' if not specified
        const style = (_b = displayConfig.style) !== null && _b !== void 0 ? _b : 'cards';
        return x `
      <div class="metadata-section metadata-${this.position} metadata-${style}">
        ${displayConfig.show_cache_status !== false ? this._renderCacheStatus() : ''}
        ${displayConfig.show_observation_time !== false ? this._renderObservationTime() : ''}
        ${displayConfig.show_forecast_time !== false ? this._renderForecastTime() : ''}
        ${displayConfig.show_weather_station !== false ? this._renderWeatherStation() : ''}
        ${displayConfig.show_distance !== false ? this._renderDistance() : ''}
        ${displayConfig.show_next_update !== false ? this._renderNextUpdate() : ''}
      </div>
    `;
    }
    _renderOverlay() {
        var _a, _b;
        const displayConfig = this._getDisplayConfig();
        if (!displayConfig) {
            return x ``;
        }
        const opacity = (_a = this.overlayOpacity) !== null && _a !== void 0 ? _a : 0.85;
        const position = (_b = this.overlayPosition) !== null && _b !== void 0 ? _b : 'top';
        return x `
      <div class="metadata-overlay overlay-${position}" style="opacity: ${opacity};">
        ${displayConfig.show_cache_status !== false ? this._renderCacheStatus() : ''}
        ${displayConfig.show_observation_time !== false ? this._renderObservationTime() : ''}
        ${displayConfig.show_forecast_time !== false ? this._renderForecastTime() : ''}
        ${displayConfig.show_weather_station !== false ? this._renderWeatherStation() : ''}
        ${displayConfig.show_distance !== false ? this._renderDistance() : ''}
        ${displayConfig.show_next_update !== false ? this._renderNextUpdate() : ''}
      </div>
    `;
    }
    _renderCacheStatus() {
        if (!this.radarData)
            return x ``;
        return x `
      <div class="metadata-item cache-status">
        <span class="metadata-label">Cache:</span>
        <span class="metadata-value">
          ${this.radarData.isUpdating ? 'Updating' :
            this.radarData.cacheIsValid ? 'Valid' : 'Invalid'}
        </span>
      </div>
    `;
    }
    _renderObservationTime() {
        var _a;
        if (!((_a = this.radarData) === null || _a === void 0 ? void 0 : _a.observationTime))
            return x ``;
        return x `
      <div class="metadata-item observation-time">
        <span class="metadata-label">Observation:</span>
        <span class="metadata-value">
          ${formatTimestamp(this.radarData.observationTime, this.locale, this.timeZone)}
        </span>
        <span class="metadata-relative">
          (${formatRelativeTime(this.radarData.observationTime)})
        </span>
      </div>
    `;
    }
    _renderForecastTime() {
        var _a;
        if (!((_a = this.radarData) === null || _a === void 0 ? void 0 : _a.forecastTime))
            return x ``;
        return x `
      <div class="metadata-item forecast-time">
        <span class="metadata-label">Forecast:</span>
        <span class="metadata-value">${formatTimestamp(this.radarData.forecastTime, this.locale, this.timeZone)}</span>
      </div>
    `;
    }
    _renderWeatherStation() {
        var _a;
        if (!((_a = this.radarData) === null || _a === void 0 ? void 0 : _a.weatherStation))
            return x ``;
        return x `
      <div class="metadata-item weather-station">
        <span class="metadata-label">Station:</span>
        <span class="metadata-value">${this.radarData.weatherStation}</span>
      </div>
    `;
    }
    _renderDistance() {
        var _a;
        if (!((_a = this.radarData) === null || _a === void 0 ? void 0 : _a.distance))
            return x ``;
        return x `
      <div class="metadata-item distance">
        <span class="metadata-label">Distance:</span>
        <span class="metadata-value">${this.radarData.distance}</span>
      </div>
    `;
    }
    _renderNextUpdate() {
        var _a;
        if (!((_a = this.radarData) === null || _a === void 0 ? void 0 : _a.nextUpdateTime))
            return x ``;
        return x `
      <div class="metadata-item next-update">
        <span class="metadata-label">Next Update:</span>
        <span class="metadata-value">${formatTimestamp(this.radarData.nextUpdateTime, this.locale, this.timeZone)}</span>
      </div>
    `;
    }
};
BomMetadataSection.styles = [metadataStyles, overlayStyles];
__decorate([
    n({ attribute: false })
], BomMetadataSection.prototype, "radarData", void 0);
__decorate([
    n({ attribute: false })
], BomMetadataSection.prototype, "config", void 0);
__decorate([
    n({ attribute: false })
], BomMetadataSection.prototype, "position", void 0);
__decorate([
    n({ attribute: false })
], BomMetadataSection.prototype, "locale", void 0);
__decorate([
    n({ attribute: false })
], BomMetadataSection.prototype, "timeZone", void 0);
__decorate([
    n({ attribute: false })
], BomMetadataSection.prototype, "overlayOpacity", void 0);
__decorate([
    n({ attribute: false })
], BomMetadataSection.prototype, "overlayPosition", void 0);
BomMetadataSection = __decorate([
    t$1('bom-metadata-section')
], BomMetadataSection);

let BomControlsSection = class BomControlsSection extends i {
    constructor() {
        super(...arguments);
        this.frames = [];
        this.currentFrameIndex = 0;
        this.isPlaying = false;
        this.isExtendedMode = false;
        this.locale = 'en-AU';
    }
    _getDisplayConfig() {
        if (!this.config || (typeof this.config === 'boolean' && !this.config)) {
            return null;
        }
        return typeof this.config === 'object' ? this.config : {};
    }
    render() {
        var _a;
        const displayConfig = this._getDisplayConfig();
        if (!displayConfig) {
            return x ``;
        }
        const configPosition = (_a = displayConfig.position) !== null && _a !== void 0 ? _a : 'below';
        // Only render if position matches (or if no position filter specified)
        if (this.position !== undefined && configPosition !== this.position) {
            return x ``;
        }
        // If overlay, render differently
        if (configPosition === 'overlay') {
            return this._renderOverlay(displayConfig);
        }
        return x `
      <div class="controls-section controls-${configPosition}">
        ${displayConfig.show_slider !== false ? this._renderFrameSlider() : ''}
        ${displayConfig.show_nav_buttons !== false ? this._renderNavButtons() : ''}
        ${displayConfig.show_play_pause !== false ? this._renderPlayPause() : ''}
        ${displayConfig.show_prev_next !== false ? this._renderPrevNext() : ''}
        ${displayConfig.show_frame_info !== false ? this._renderFrameInfo() : ''}
      </div>
    `;
    }
    _renderOverlay(displayConfig) {
        var _a, _b;
        const opacity = (_a = this.overlayOpacity) !== null && _a !== void 0 ? _a : 0.9;
        const position = (_b = this.overlayPosition) !== null && _b !== void 0 ? _b : 'bottom';
        return x `
      <div class="controls-overlay overlay-${position}" style="opacity: ${opacity};">
        ${displayConfig.show_slider !== false ? this._renderFrameSlider() : ''}
        ${displayConfig.show_play_pause !== false ? this._renderPlayPause() : ''}
        ${displayConfig.show_prev_next !== false ? this._renderPrevNext() : ''}
        ${displayConfig.show_frame_info !== false ? this._renderFrameInfo() : ''}
      </div>
    `;
    }
    _renderFrameSlider() {
        if (this.frames.length === 0)
            return x ``;
        return x `
      <div class="frame-slider-container">
        <div class="frame-slider-wrapper">
          <input 
            type="range" 
            class="frame-slider" 
            min="0" 
            max="${this.frames.length - 1}" 
            .value="${this.currentFrameIndex}"
            @input="${(e) => {
            const index = parseInt(e.target.value);
            if (this.onFrameChange) {
                this.onFrameChange(index);
            }
        }}"
            aria-label="Frame slider"
          />
        </div>
      </div>
    `;
    }
    _renderNavButtons() {
        if (this.frames.length === 0)
            return x ``;
        // Calculate dynamic skip amount based on total frames (1/3 of total, min 1, max 50)
        const skipAmount = this.isExtendedMode
            ? Math.max(1, Math.min(50, Math.round(this.frames.length / 3)))
            : 0;
        return x `
      <div class="frame-nav-buttons">
        ${this.isExtendedMode ? x `
          <button 
            class="frame-nav-btn" 
            @click="${() => this.onFrameChange && this.onFrameChange(0)}"
            ?disabled="${this.currentFrameIndex === 0}"
            title="First frame"
            aria-label="First frame"
          >⏮</button>
          <button 
            class="frame-nav-btn" 
            @click="${() => this.onJumpFrame && this.onJumpFrame(-skipAmount)}"
            ?disabled="${this.currentFrameIndex === 0}"
            title="Go back ${skipAmount} frames"
            aria-label="Go back ${skipAmount} frames"
          >-${skipAmount}</button>
          <button 
            class="frame-nav-btn" 
            @click="${() => this.onJumpFrame && this.onJumpFrame(skipAmount)}"
            ?disabled="${this.currentFrameIndex >= this.frames.length - 1}"
            title="Go forward ${skipAmount} frames"
            aria-label="Go forward ${skipAmount} frames"
          >+${skipAmount}</button>
          <button 
            class="frame-nav-btn" 
            @click="${() => this.onFrameChange && this.onFrameChange(this.frames.length - 1)}"
            ?disabled="${this.currentFrameIndex >= this.frames.length - 1}"
            title="Last frame"
            aria-label="Last frame"
          >⏭</button>
        ` : x `
          <button 
            class="frame-nav-btn" 
            @click="${() => this.onFrameChange && this.onFrameChange(0)}"
            ?disabled="${this.currentFrameIndex === 0}"
            title="First frame"
            aria-label="First frame"
          >⏮</button>
          <button 
            class="frame-nav-btn" 
            @click="${() => this.onFrameChange && this.onFrameChange(this.frames.length - 1)}"
            ?disabled="${this.currentFrameIndex >= this.frames.length - 1}"
            title="Last frame"
            aria-label="Last frame"
          >⏭</button>
        `}
      </div>
    `;
    }
    _renderPlayPause() {
        return x `
      <div class="play-controls">
        <button 
          class="play-btn" 
          @click="${() => this.onToggleAnimation && this.onToggleAnimation()}"
          aria-label="${this.isPlaying ? 'Pause animation' : 'Play animation'}"
          aria-pressed="${this.isPlaying}"
        >
          ${this.isPlaying ? '⏸ Pause' : '▶ Play'}
        </button>
      </div>
    `;
    }
    _renderPrevNext() {
        return x `
      <div class="play-controls">
        <button 
          class="play-btn" 
          @click="${() => this.onPrevious && this.onPrevious()}"
          aria-label="Previous frame"
        >◀ Previous</button>
        <button 
          class="play-btn" 
          @click="${() => this.onNext && this.onNext()}"
          aria-label="Next frame"
        >Next ▶</button>
      </div>
    `;
    }
    _renderFrameInfo() {
        var _a, _b;
        const currentFrame = this.frames[this.currentFrameIndex];
        if (!currentFrame)
            return x ``;
        const showFrameTimes = this.showFrameTimes !== false;
        // Format frame info
        let frameInfoText = '';
        if (this.isExtendedMode && currentFrame.absoluteObservationTime) {
            frameInfoText = `Frame ${((_a = currentFrame.sequentialIndex) !== null && _a !== void 0 ? _a : this.currentFrameIndex) + 1} of ${this.frames.length}`;
        }
        else {
            frameInfoText = `Frame ${currentFrame.frameIndex + 1} of ${this.frames.length}`;
        }
        const progress = this.frames.length > 0
            ? Math.round(((this.currentFrameIndex + 1) / this.frames.length) * 100)
            : 0;
        return x `
      <div class="frame-info">
        <span class="frame-index">${frameInfoText}</span>
        ${showFrameTimes && currentFrame.absoluteObservationTime ? x `
          <span class="frame-time">
            ${formatTimestamp(currentFrame.absoluteObservationTime, this.locale, this.timeZone)}
          </span>
        ` : showFrameTimes && currentFrame.minutesAgo !== undefined ? x `
          <span class="frame-time">
            ${currentFrame.minutesAgo} min ago
          </span>
        ` : ''}
        ${((_b = this.radarData) === null || _b === void 0 ? void 0 : _b.observationTime) && showFrameTimes ? x `
          <span class="observation-time">
            Obs: ${formatTimestamp(this.radarData.observationTime, this.locale, this.timeZone)}
          </span>
        ` : ''}
        <span class="frame-progress">${progress}%</span>
      </div>
    `;
    }
};
BomControlsSection.styles = [controlsStyles, overlayStyles];
__decorate([
    n({ attribute: false })
], BomControlsSection.prototype, "frames", void 0);
__decorate([
    n({ attribute: false })
], BomControlsSection.prototype, "currentFrameIndex", void 0);
__decorate([
    n({ attribute: false })
], BomControlsSection.prototype, "isPlaying", void 0);
__decorate([
    n({ attribute: false })
], BomControlsSection.prototype, "isExtendedMode", void 0);
__decorate([
    n({ attribute: false })
], BomControlsSection.prototype, "radarData", void 0);
__decorate([
    n({ attribute: false })
], BomControlsSection.prototype, "config", void 0);
__decorate([
    n({ attribute: false })
], BomControlsSection.prototype, "position", void 0);
__decorate([
    n({ attribute: false })
], BomControlsSection.prototype, "locale", void 0);
__decorate([
    n({ attribute: false })
], BomControlsSection.prototype, "timeZone", void 0);
__decorate([
    n({ attribute: false })
], BomControlsSection.prototype, "overlayOpacity", void 0);
__decorate([
    n({ attribute: false })
], BomControlsSection.prototype, "overlayPosition", void 0);
__decorate([
    n({ attribute: false })
], BomControlsSection.prototype, "showFrameTimes", void 0);
__decorate([
    n({ attribute: false })
], BomControlsSection.prototype, "onFrameChange", void 0);
__decorate([
    n({ attribute: false })
], BomControlsSection.prototype, "onPrevious", void 0);
__decorate([
    n({ attribute: false })
], BomControlsSection.prototype, "onNext", void 0);
__decorate([
    n({ attribute: false })
], BomControlsSection.prototype, "onJumpFrame", void 0);
__decorate([
    n({ attribute: false })
], BomControlsSection.prototype, "onToggleAnimation", void 0);
BomControlsSection = __decorate([
    t$1('bom-controls-section')
], BomControlsSection);

var _a;
console.info(`%c  BOM-LOCAL-RADAR-CARD  \n%c  Version ${CARD_VERSION}   `, 'color: orange; font-weight: bold; background: black', 'color: white; font-weight: bold; background: dimgray');
window.customCards = (_a = window.customCards) !== null && _a !== void 0 ? _a : [];
window.customCards.push({
    type: 'bom-local-card',
    name: 'BOM Local Card',
    description: 'A rain radar card using the local BOM service',
});
let BomLocalRadarCard = class BomLocalRadarCard extends i {
    constructor() {
        super(...arguments);
        this.currentFrameIndex = 0;
        this.isLoading = false;
        this.isPlaying = false;
        this.frames = [];
        this.isExtendedMode = false;
        this.preloadedImages = [];
        this.apiService = new RadarApiService();
        /**
         * Handle keyboard navigation
         */
        this._handleKeyDown = (e) => {
            var _a;
            // Only handle if card is focused or contains focused element
            if (!((_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.activeElement) && document.activeElement !== this) {
                return;
            }
            switch (e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    this.previousFrame();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    this.nextFrame();
                    break;
                case ' ':
                    e.preventDefault();
                    this.toggleAnimation();
                    break;
                case 'Home':
                    e.preventDefault();
                    this.showFrame(0);
                    break;
                case 'End':
                    e.preventDefault();
                    this.showFrame(this.frames.length - 1);
                    break;
            }
        };
    }
    static async getConfigElement() {
        return document.createElement('bom-local-card-editor');
    }
    static getStubConfig() {
        return {
            type: 'custom:bom-local-card',
            suburb: 'Pomona',
            state: 'QLD',
        };
    }
    setConfig(config) {
        if (!config.suburb || !config.state) {
            throw new Error('suburb and state are required');
        }
        this._config = config;
    }
    /**
     * Dynamic card size based on configuration
     * Returns height in units (1 unit = 50px)
     */
    getCardSize() {
        let size = 4; // Base size for image (200px)
        // Add space for metadata if shown above/below
        const metadataConfig = this._getMetadataConfig();
        if (metadataConfig && typeof metadataConfig !== 'boolean') {
            if (metadataConfig.position !== 'overlay') {
                size += 1; // +50px for metadata section
            }
        }
        else if (metadataConfig === true) {
            size += 1;
        }
        // Add space for controls if shown below (not overlay)
        const controlsConfig = this._getControlsConfig();
        if (controlsConfig && typeof controlsConfig !== 'boolean') {
            if (controlsConfig.position !== 'overlay') {
                size += 2; // +100px for controls
            }
        }
        else if (controlsConfig === true) {
            // Default position is 'below', so add space
            size += 2;
        }
        return size;
    }
    /**
     * Define grid options for HA's sections view
     * This allows the card to integrate with HA's grid system
     */
    getGridOptions() {
        // Calculate based on whether controls are visible
        const hasControls = this._shouldShowControls();
        const hasMetadata = this._shouldShowMetadata();
        // Base size: 6 columns (half width), 2 rows
        // Adjust based on content
        const baseRows = 2;
        const additionalRows = (hasControls ? 1 : 0) + (hasMetadata ? 0.5 : 0);
        return {
            columns: 6, // Default: half width
            rows: baseRows + additionalRows,
            min_columns: 3, // Minimum: quarter width
            min_rows: 2, // Minimum: always show image
            max_columns: 12, // Can span full width
            max_rows: 8, // Can be tall for detailed view
        };
    }
    /**
     * Fetches radar data from the local service via HA integration
     * Supports both latest frames and historical timeseries
     */
    async fetchRadarData() {
        const suburb = encodeURIComponent(this._config.suburb);
        const state = encodeURIComponent(this._config.state);
        const timespan = this._config.timespan || 'latest';
        this.isLoading = true;
        const options = {
            hass: this.hass,
            suburb,
            state,
            timespan: timespan !== 'latest' ? timespan : undefined,
            customStartTime: this._config.custom_start_time,
            customEndTime: this._config.custom_end_time,
            onError: (error) => {
                this.error = error;
                this.isLoading = false;
                // Auto-retry if applicable
                if (error.retryable && error.retryAfter) {
                    if (this.retryTimer) {
                        window.clearTimeout(this.retryTimer);
                    }
                    this.retryTimer = window.setTimeout(() => {
                        this.retryTimer = undefined;
                        this.fetchRadarData();
                    }, error.retryAfter * 1000);
                }
            },
        };
        let data = null;
        if (timespan !== 'latest') {
            data = await this.apiService.fetchHistoricalFrames(options);
        }
        else {
            data = await this.apiService.fetchLatestFrames(options);
        }
        if (data) {
            this.error = undefined;
            this.radarData = data;
            this.frames = data.frames.sort((a, b) => a.frameIndex - b.frameIndex);
            this.isExtendedMode = timespan !== 'latest';
            this.isLoading = false;
            this.preloadImages(this.frames);
            if (this._config.auto_play !== false && !this.isPlaying) {
                this.startAnimation();
            }
        }
        return data;
    }
    /**
     * Gets the current frame image URL
     */
    getCurrentFrameUrl() {
        if (!this.frames || this.frames.length === 0) {
            return null;
        }
        const frame = this.frames[this.currentFrameIndex];
        return (frame === null || frame === void 0 ? void 0 : frame.imageUrl) || null;
    }
    /**
     * Helper to get metadata config
     */
    _getMetadataConfig() {
        const showMetadata = this._config.show_metadata;
        if (showMetadata === undefined) {
            return true; // Default: show all metadata
        }
        return showMetadata;
    }
    /**
     * Helper to get controls config
     */
    _getControlsConfig() {
        const showControls = this._config.show_controls;
        if (showControls === undefined) {
            return true; // Default: show all controls
        }
        return showControls;
    }
    /**
     * Check if metadata should be shown
     */
    _shouldShowMetadata() {
        const config = this._getMetadataConfig();
        return config !== false;
    }
    /**
     * Check if controls should be shown
     */
    _shouldShowControls() {
        const config = this._getControlsConfig();
        return config !== false;
    }
    /**
     * Get locale for formatting
     */
    _getLocale() {
        var _a, _b;
        return this._config.locale || ((_b = (_a = this.hass) === null || _a === void 0 ? void 0 : _a.locale) === null || _b === void 0 ? void 0 : _b.language) || 'en-AU';
    }
    /**
     * Check if frame should be preloaded (only nearby frames)
     */
    _shouldPreloadFrame(index) {
        const currentIndex = this.currentFrameIndex;
        // Preload current, next, and previous frames
        return Math.abs(index - currentIndex) <= 1;
    }
    /**
     * Preloads nearby frame images to prevent jiggle when switching
     * Cleans up old preloaded images to prevent memory leaks
     * Only preloads frames near the current frame for performance
     */
    preloadImages(frames) {
        // Clean up old preloaded images
        this.preloadedImages.forEach(img => {
            img.src = '';
            img.onload = null;
            img.onerror = null;
        });
        this.preloadedImages = [];
        // Only preload nearby frames
        frames.forEach((frame, index) => {
            if (this._shouldPreloadFrame(index)) {
                const img = new Image();
                img.src = frame.imageUrl;
                this.preloadedImages.push(img);
            }
        });
    }
    /**
     * Debounce helper
     */
    _debounce(func, wait) {
        let timeout;
        return (...args) => {
            window.clearTimeout(timeout);
            timeout = window.setTimeout(() => func(...args), wait);
        };
    }
    /**
     * Starts the frame animation loop using requestAnimationFrame
     * Ensures only one animation timer is active at a time
     */
    startAnimation() {
        // Always stop existing animation first to prevent accumulation
        this.stopAnimation();
        if (this.frames.length === 0) {
            return;
        }
        this.isPlaying = true;
        const frameInterval = (this._config.frame_interval || DEFAULT_FRAME_INTERVAL) * 1000;
        const restartDelay = DEFAULT_RESTART_DELAY;
        const maxFrame = this.frames.length - 1;
        let lastFrameTime = performance.now();
        const animate = (currentTime) => {
            // Check if we're still playing (might have been stopped)
            if (!this.isPlaying) {
                return;
            }
            // Check if animation was cleared (component disconnected)
            if (!this.animationTimer) {
                return;
            }
            const elapsed = currentTime - lastFrameTime;
            if (this.currentFrameIndex >= maxFrame) {
                // Check if we've waited long enough before restarting
                if (elapsed >= restartDelay) {
                    this.currentFrameIndex = 0;
                    this.requestUpdate();
                    lastFrameTime = currentTime;
                }
            }
            else {
                // Check if it's time to advance to next frame
                if (elapsed >= frameInterval) {
                    this.currentFrameIndex++;
                    this.requestUpdate();
                    lastFrameTime = currentTime;
                }
            }
            // Continue animation
            this.animationTimer = requestAnimationFrame(animate);
        };
        // Start animation
        this.animationTimer = requestAnimationFrame(animate);
    }
    /**
     * Stops the animation
     */
    stopAnimation() {
        if (this.animationTimer) {
            cancelAnimationFrame(this.animationTimer);
            this.animationTimer = undefined;
        }
        this.isPlaying = false;
    }
    /**
     * Toggles play/pause
     */
    toggleAnimation() {
        if (this.isPlaying) {
            this.stopAnimation();
        }
        else {
            this.startAnimation();
        }
    }
    /**
     * Shows a specific frame
     */
    showFrame(index) {
        if (index < 0 || index >= this.frames.length) {
            return;
        }
        this.currentFrameIndex = index;
        this.requestUpdate();
    }
    /**
     * Navigate to previous frame
     */
    previousFrame() {
        this.stopAnimation();
        const newIndex = this.currentFrameIndex > 0 ? this.currentFrameIndex - 1 : this.frames.length - 1;
        this.showFrame(newIndex);
    }
    /**
     * Navigate to next frame
     */
    nextFrame() {
        this.stopAnimation();
        const newIndex = (this.currentFrameIndex + 1) % this.frames.length;
        this.showFrame(newIndex);
    }
    /**
     * Jump forward/backward by N frames
     */
    jumpFrame(offset) {
        const newIndex = Math.max(0, Math.min(this.frames.length - 1, this.currentFrameIndex + offset));
        this.showFrame(newIndex);
    }
    /**
     * Auto-refresh data
     */
    startAutoRefresh() {
        if (this.refreshTimer) {
            window.clearInterval(this.refreshTimer);
        }
        const refreshInterval = (this._config.refresh_interval || DEFAULT_REFRESH_INTERVAL) * 1000;
        this.refreshTimer = window.setInterval(() => {
            this.fetchRadarData();
        }, refreshInterval);
    }
    /**
     * Stops auto-refresh
     */
    stopAutoRefresh() {
        if (this.refreshTimer) {
            window.clearInterval(this.refreshTimer);
            this.refreshTimer = undefined;
        }
    }
    async firstUpdated() {
        await this.fetchRadarData();
        this.startAutoRefresh();
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('keydown', this._handleKeyDown);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('keydown', this._handleKeyDown);
        this.stopAnimation();
        this.stopAutoRefresh();
        // Clean up retry timer
        if (this.retryTimer) {
            window.clearTimeout(this.retryTimer);
            this.retryTimer = undefined;
        }
        // Clean up preloaded images
        this.preloadedImages.forEach(img => {
            img.src = '';
            img.onload = null;
            img.onerror = null;
        });
        this.preloadedImages = [];
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        // Handle config changes
        if (changedProperties.has('_config')) {
            const oldConfig = changedProperties.get('_config');
            if (oldConfig && this._config) {
                // If location or timespan changed, refetch data
                if (oldConfig.suburb !== this._config.suburb ||
                    oldConfig.state !== this._config.state ||
                    oldConfig.timespan !== this._config.timespan ||
                    oldConfig.custom_start_time !== this._config.custom_start_time ||
                    oldConfig.custom_end_time !== this._config.custom_end_time) {
                    this.fetchRadarData();
                }
                // If refresh interval changed, restart auto-refresh
                if (oldConfig.refresh_interval !== this._config.refresh_interval) {
                    this.startAutoRefresh();
                }
                // If frame interval changed and playing, restart animation
                if (oldConfig.frame_interval !== this._config.frame_interval && this.isPlaying) {
                    this.stopAnimation();
                    this.startAnimation();
                }
            }
        }
    }
    /**
     * Render metadata section
     */
    _renderMetadata(position) {
        var _a, _b, _c;
        const config = this._getMetadataConfig();
        if (!config || (typeof config === 'boolean' && !config)) {
            return '';
        }
        const displayConfig = typeof config === 'object' ? config : {};
        // Default position is 'above' if not specified
        const configPosition = (_a = displayConfig.position) !== null && _a !== void 0 ? _a : 'above';
        // Only render if position matches
        if (configPosition !== position) {
            return '';
        }
        return x `
      <bom-metadata-section
        .radarData=${this.radarData}
        .config=${config}
        .position=${position}
        .locale=${this._getLocale()}
        .timeZone=${(_c = (_b = this.hass) === null || _b === void 0 ? void 0 : _b.config) === null || _c === void 0 ? void 0 : _c.time_zone}
        .overlayOpacity=${this._config.metadata_overlay_opacity}
        .overlayPosition=${this._config.metadata_overlay_position}
      ></bom-metadata-section>
    `;
    }
    /**
     * Render radar image with zoom and overlay support
     */
    _renderRadarImage() {
        const zoom = this._config.image_zoom || 1.0;
        const fit = this._config.image_fit || 'contain';
        const controlsConfig = this._getControlsConfig();
        const controlsPosition = typeof controlsConfig === 'object' && controlsConfig.position === 'overlay';
        const metadataConfig = this._getMetadataConfig();
        const metadataPosition = typeof metadataConfig === 'object' && metadataConfig.position === 'overlay';
        const currentFrameUrl = this.getCurrentFrameUrl();
        return x `
      <div class="radar-image-container" style="--zoom: ${zoom};">
        ${this.isLoading
            ? x `
              <div class="loading">
                <img class="loading-icon" src="/local/community/bom_local/icon.png" alt="BOM Local Radar" />
                <ha-circular-progress indeterminate></ha-circular-progress>
                <div class="loading-message">Loading radar data...</div>
              </div>
            `
            : currentFrameUrl
                ? x `
                <img 
                  class="radar-image radar-image-${fit}"
                  src="${currentFrameUrl}" 
                  alt="Radar frame ${this.currentFrameIndex}"
                  style="transform: scale(${zoom}); transform-origin: center center;"
                  @error="${() => {
                    this.error = {
                        message: 'Failed to load radar image',
                        type: 'unknown',
                        retryable: true,
                        retryAction: () => this.fetchRadarData(),
                    };
                }}"
                />
                ${controlsPosition ? this._renderControls('overlay') : ''}
                ${metadataPosition ? this._renderMetadata('overlay') : ''}
              `
                : ''}
      </div>
    `;
    }
    /**
     * Render controls section
     */
    _renderControls(position) {
        var _a, _b;
        const config = this._getControlsConfig();
        if (!config || (typeof config === 'boolean' && !config)) {
            return x ``;
        }
        const metadataConfig = this._getMetadataConfig();
        const showFrameTimes = metadataConfig && typeof metadataConfig === 'object' && metadataConfig.show_frame_times !== false;
        return x `
      <bom-controls-section
        .frames=${this.frames}
        .currentFrameIndex=${this.currentFrameIndex}
        .isPlaying=${this.isPlaying}
        .isExtendedMode=${this.isExtendedMode}
        .radarData=${this.radarData}
        .config=${config}
        .position=${position}
        .locale=${this._getLocale()}
        .timeZone=${(_b = (_a = this.hass) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.time_zone}
        .overlayOpacity=${this._config.controls_overlay_opacity}
        .overlayPosition=${this._config.controls_overlay_position}
        .showFrameTimes=${showFrameTimes}
        .onFrameChange=${(index) => this.showFrame(index)}
        .onPrevious=${() => this.previousFrame()}
        .onNext=${() => this.nextFrame()}
        .onJumpFrame=${(offset) => this.jumpFrame(offset)}
        .onToggleAnimation=${() => this.toggleAnimation()}
      ></bom-controls-section>
    `;
    }
    render() {
        var _a, _b;
        if (!this._config) {
            return x `<hui-warning>Configuration error</hui-warning>`;
        }
        // Use HA card header if title is configured
        const cardTitle = this._config.show_card_title !== false && this._config.card_title
            ? this._config.card_title
            : undefined;
        // Render error state
        if (this.error) {
            return x `
        <ha-card .header=${cardTitle} tabindex="0" role="region" aria-label="BOM Radar Card">
          <bom-error-display
            .error=${this.error}
            .locale=${this._getLocale()}
            .timeZone=${(_b = (_a = this.hass) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.time_zone}
            .onRetry=${() => {
                var _a;
                if ((_a = this.error) === null || _a === void 0 ? void 0 : _a.retryAction) {
                    this.error.retryAction();
                }
            }}
          ></bom-error-display>
        </ha-card>
      `;
        }
        return x `
      <ha-card 
        .header=${cardTitle} 
        tabindex="0" 
        role="region" 
        aria-label="BOM Radar Card"
        class=${this._getRootClasses()}
      >
        <div id="root">
          ${this._renderMetadata('above')}
          ${this._renderControls('above')}
          ${this._renderRadarImage()}
          ${this._renderMetadata('below')}
          ${this._renderControls('below')}
        </div>
      </ha-card>
    `;
    }
    /**
     * Get CSS classes for root element
     */
    _getRootClasses() {
        const classes = [];
        const controlsConfig = this._getControlsConfig();
        const controlsPosition = typeof controlsConfig === 'object' && controlsConfig.position === 'overlay';
        const metadataConfig = this._getMetadataConfig();
        const metadataPosition = typeof metadataConfig === 'object' && metadataConfig.position === 'overlay';
        if (controlsPosition || metadataPosition) {
            classes.push('overlay-enabled');
        }
        return classes.join(' ');
    }
};
BomLocalRadarCard.styles = [
    cardStyles,
    imageStyles,
    controlsStyles,
    metadataStyles,
    overlayStyles,
    errorStyles,
];
__decorate([
    n({ attribute: false })
], BomLocalRadarCard.prototype, "hass", void 0);
__decorate([
    n({ attribute: false })
], BomLocalRadarCard.prototype, "_config", void 0);
__decorate([
    n({ attribute: false })
], BomLocalRadarCard.prototype, "editMode", void 0);
__decorate([
    r$1()
], BomLocalRadarCard.prototype, "radarData", void 0);
__decorate([
    r$1()
], BomLocalRadarCard.prototype, "currentFrameIndex", void 0);
__decorate([
    r$1()
], BomLocalRadarCard.prototype, "isLoading", void 0);
__decorate([
    r$1()
], BomLocalRadarCard.prototype, "error", void 0);
__decorate([
    r$1()
], BomLocalRadarCard.prototype, "animationTimer", void 0);
__decorate([
    r$1()
], BomLocalRadarCard.prototype, "refreshTimer", void 0);
__decorate([
    r$1()
], BomLocalRadarCard.prototype, "retryTimer", void 0);
__decorate([
    r$1()
], BomLocalRadarCard.prototype, "isPlaying", void 0);
__decorate([
    r$1()
], BomLocalRadarCard.prototype, "frames", void 0);
__decorate([
    r$1()
], BomLocalRadarCard.prototype, "isExtendedMode", void 0);
BomLocalRadarCard = __decorate([
    t$1('bom-local-card')
], BomLocalRadarCard);
if (!customElements.get('bom-local-card')) {
    customElements.define('bom-local-card', BomLocalRadarCard);
}

export { BomLocalRadarCard };
//# sourceMappingURL=bom-local-card.js.map
