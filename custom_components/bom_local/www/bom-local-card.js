function t(t,e,a,i){var o,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,a,i);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(s=(r<3?o(s):r>3?o(e,a,s):o(e,a))||s);return r>3&&s&&Object.defineProperty(e,a,s),s}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,a=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),o=new WeakMap;let r=class{constructor(t,e,a){if(this._$cssResult$=!0,a!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(a&&void 0===t){const a=void 0!==e&&1===e.length;a&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),a&&o.set(e,t))}return t}toString(){return this.cssText}};const s=(t,...e)=>{const a=1===t.length?t[0]:e.reduce((e,a,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+t[i+1],t[0]);return new r(a,t,i)},n=a?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const a of t.cssRules)e+=a.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:m}=Object,u=globalThis,g=u.trustedTypes,f=g?g.emptyScript:"",v=u.reactiveElementPolyfillSupport,b=(t,e)=>t,_={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let a=t;switch(e){case Boolean:a=null!==t;break;case Number:a=null===t?null:Number(t);break;case Object:case Array:try{a=JSON.parse(t)}catch(t){a=null}}return a}},y=(t,e)=>!l(t,e),x={attribute:!0,type:String,converter:_,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=x){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const a=Symbol(),i=this.getPropertyDescriptor(t,a,e);void 0!==i&&c(this.prototype,t,i)}}static getPropertyDescriptor(t,e,a){const{get:i,set:o}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const r=i?.call(this);o?.call(this,e),this.requestUpdate(t,r,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??x}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=m(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...h(t),...p(t)];for(const a of e)this.createProperty(a,t[a])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,a]of e)this.elementProperties.set(t,a)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const a=this._$Eu(t,e);void 0!==a&&this._$Eh.set(a,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const a=new Set(t.flat(1/0).reverse());for(const t of a)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const a=e.attribute;return!1===a?void 0:"string"==typeof a?a:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const a of e.keys())this.hasOwnProperty(a)&&(t.set(a,this[a]),delete this[a]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(a)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const a of i){const i=document.createElement("style"),o=e.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=a.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,a){this._$AK(t,a)}_$ET(t,e){const a=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,a);if(void 0!==i&&!0===a.reflect){const o=(void 0!==a.converter?.toAttribute?a.converter:_).toAttribute(e,a.type);this._$Em=t,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){const a=this.constructor,i=a._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=a.getPropertyOptions(i),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:_;this._$Em=i;const r=o.fromAttribute(e,t.type);this[i]=r??this._$Ej?.get(i)??r,this._$Em=null}}requestUpdate(t,e,a){if(void 0!==t){const i=this.constructor,o=this[t];if(a??=i.getPropertyOptions(t),!((a.hasChanged??y)(o,e)||a.useDefault&&a.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,a))))return;this.C(t,e,a)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:a,reflect:i,wrapped:o},r){a&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==o||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||a||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,a]of t){const{wrapped:t}=a,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,a,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[b("elementProperties")]=new Map,w[b("finalized")]=new Map,v?.({ReactiveElement:w}),(u.reactiveElementVersions??=[]).push("2.1.1");const $=globalThis,C=$.trustedTypes,A=C?C.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,T="?"+k,S=`<${T}>`,R=document,F=()=>R.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,O=Array.isArray,P="[ \t\n\f\r]",D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,U=/>/g,N=RegExp(`>|${P}(?:([^\\s"'>=/]+)(${P}*=${P}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,j=/"/g,L=/^(?:script|style|textarea|title)$/i,H=(t=>(e,...a)=>({_$litType$:t,strings:e,values:a}))(1),W=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),q=new WeakMap,B=R.createTreeWalker(R,129);function V(t,e){if(!O(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const J=(t,e)=>{const a=t.length-1,i=[];let o,r=2===e?"<svg>":3===e?"<math>":"",s=D;for(let e=0;e<a;e++){const a=t[e];let n,l,c=-1,d=0;for(;d<a.length&&(s.lastIndex=d,l=s.exec(a),null!==l);)d=s.lastIndex,s===D?"!--"===l[1]?s=I:void 0!==l[1]?s=U:void 0!==l[2]?(L.test(l[2])&&(o=RegExp("</"+l[2],"g")),s=N):void 0!==l[3]&&(s=N):s===N?">"===l[0]?(s=o??D,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,n=l[1],s=void 0===l[3]?N:'"'===l[3]?j:z):s===j||s===z?s=N:s===I||s===U?s=D:(s=N,o=void 0);const h=s===N&&t[e+1].startsWith("/>")?" ":"";r+=s===D?a+S:c>=0?(i.push(n),a.slice(0,c)+E+a.slice(c)+k+h):a+k+(-2===c?e:h)}return[V(t,r+(t[a]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class Y{constructor({strings:t,_$litType$:e},a){let i;this.parts=[];let o=0,r=0;const s=t.length-1,n=this.parts,[l,c]=J(t,e);if(this.el=Y.createElement(l,a),B.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=B.nextNode())&&n.length<s;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(E)){const e=c[r++],a=i.getAttribute(t).split(k),s=/([.?@])?(.*)/.exec(e);n.push({type:1,index:o,name:s[2],strings:a,ctor:"."===s[1]?tt:"?"===s[1]?et:"@"===s[1]?at:X}),i.removeAttribute(t)}else t.startsWith(k)&&(n.push({type:6,index:o}),i.removeAttribute(t));if(L.test(i.tagName)){const t=i.textContent.split(k),e=t.length-1;if(e>0){i.textContent=C?C.emptyScript:"";for(let a=0;a<e;a++)i.append(t[a],F()),B.nextNode(),n.push({type:2,index:++o});i.append(t[e],F())}}}else if(8===i.nodeType)if(i.data===T)n.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(k,t+1));)n.push({type:7,index:o}),t+=k.length-1}o++}}static createElement(t,e){const a=R.createElement("template");return a.innerHTML=t,a}}function G(t,e,a=t,i){if(e===W)return e;let o=void 0!==i?a._$Co?.[i]:a._$Cl;const r=M(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(t),o._$AT(t,a,i)),void 0!==i?(a._$Co??=[])[i]=o:a._$Cl=o),void 0!==o&&(e=G(t,o._$AS(t,e.values),o,i)),e}class K{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:a}=this._$AD,i=(t?.creationScope??R).importNode(e,!0);B.currentNode=i;let o=B.nextNode(),r=0,s=0,n=a[0];for(;void 0!==n;){if(r===n.index){let e;2===n.type?e=new Q(o,o.nextSibling,this,t):1===n.type?e=new n.ctor(o,n.name,n.strings,this,t):6===n.type&&(e=new it(o,this,t)),this._$AV.push(e),n=a[++s]}r!==n?.index&&(o=B.nextNode(),r++)}return B.currentNode=R,i}p(t){let e=0;for(const a of this._$AV)void 0!==a&&(void 0!==a.strings?(a._$AI(t,a,e),e+=a.strings.length-2):a._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,a,i){this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=a,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),M(t)?t===Z||null==t||""===t?(this._$AH!==Z&&this._$AR(),this._$AH=Z):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>O(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Z&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(R.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:a}=t,i="number"==typeof a?this._$AC(t):(void 0===a.el&&(a.el=Y.createElement(V(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new K(i,this),a=t.u(this.options);t.p(e),this.T(a),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new Y(t)),e}k(t){O(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let a,i=0;for(const o of t)i===e.length?e.push(a=new Q(this.O(F()),this.O(F()),this,this.options)):a=e[i],a._$AI(o),i++;i<e.length&&(this._$AR(a&&a._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,a,i,o){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,a.length>2||""!==a[0]||""!==a[1]?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=Z}_$AI(t,e=this,a,i){const o=this.strings;let r=!1;if(void 0===o)t=G(this,t,e,0),r=!M(t)||t!==this._$AH&&t!==W,r&&(this._$AH=t);else{const i=t;let s,n;for(t=o[0],s=0;s<o.length-1;s++)n=G(this,i[a+s],e,s),n===W&&(n=this._$AH[s]),r||=!M(n)||n!==this._$AH[s],n===Z?t=Z:t!==Z&&(t+=(n??"")+o[s+1]),this._$AH[s]=n}r&&!i&&this.j(t)}j(t){t===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Z?void 0:t}}class et extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Z)}}class at extends X{constructor(t,e,a,i,o){super(t,e,a,i,o),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??Z)===W)return;const a=this._$AH,i=t===Z&&a!==Z||t.capture!==a.capture||t.once!==a.once||t.passive!==a.passive,o=t!==Z&&(a===Z||i);i&&this.element.removeEventListener(this.name,this,a),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,a){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const ot=$.litHtmlPolyfillSupport;ot?.(Y,Q),($.litHtmlVersions??=[]).push("3.3.1");const rt=globalThis;class st extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,a)=>{const i=a?.renderBefore??e;let o=i._$litPart$;if(void 0===o){const t=a?.renderBefore??null;i._$litPart$=o=new Q(e.insertBefore(F(),t),t,void 0,a??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}st._$litElement$=!0,st.finalized=!0,rt.litElementHydrateSupport?.({LitElement:st});const nt=rt.litElementPolyfillSupport;nt?.({LitElement:st}),(rt.litElementVersions??=[]).push("4.2.1");const lt=t=>(e,a)=>{void 0!==a?a.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ct={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:y},dt=(t=ct,e,a)=>{const{kind:i,metadata:o}=a;let r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),r.set(a.name,t),"accessor"===i){const{name:i}=a;return{set(a){const o=e.get.call(this);e.set.call(this,a),this.requestUpdate(i,o,t)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=a;return function(a){const o=this[i];e.call(this,a),this.requestUpdate(i,o,t)}}throw Error("Unsupported decorator location: "+i)};function ht(t){return(e,a)=>"object"==typeof a?dt(t,e,a):((t,e,a)=>{const i=e.hasOwnProperty(a);return e.constructor.createProperty(a,t),i?Object.getOwnPropertyDescriptor(e,a):void 0})(t,e,a)}function pt(t){return ht({...t,state:!0,attribute:!1})}var mt,ut;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(mt||(mt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(ut||(ut={}));var gt=function(t,e,a,i){i=i||{},a=null==a?{}:a;var o=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return o.detail=a,t.dispatchEvent(o),o};const ft=[{value:"ACT",label:"Australian Capital Territory"},{value:"NSW",label:"New South Wales"},{value:"NT",label:"Northern Territory"},{value:"QLD",label:"Queensland"},{value:"SA",label:"South Australia"},{value:"TAS",label:"Tasmania"},{value:"VIC",label:"Victoria"},{value:"WA",label:"Western Australia"}];let vt=class extends st{constructor(){super(...arguments),this._config=this._mergeWithDefaults(),this._metadataExpanded=!1,this._controlsExpanded=!1}_mergeWithDefaults(t={}){return Object.assign(Object.assign(Object.assign({},{service_url:"http://localhost:8082",timespan:"latest",frame_interval:2,refresh_interval:30,auto_play:!0,show_card_title:!0,show_metadata:!0,show_controls:!0,image_zoom:1,image_fit:"contain"}),t),{type:"custom:bom-local-card"})}setConfig(t){this._config=this._mergeWithDefaults(t),this.requestUpdate()}render(){var t,e,a,i,o,r,s;return this.hass?H`
      <div class="editor">
        <div class="section">
          <h3>Location Configuration</h3>
          <ha-textfield
            label="Suburb"
            .value=${this._config.suburb||""}
            @input=${t=>this._updateConfig("suburb",t.target.value)}
            required
          ></ha-textfield>
          <div class="select-wrapper">
            <label class="select-label">State *</label>
            <select
              class="native-select"
              .value=${this._config.state||""}
              @change=${t=>{const e=t.target;this._updateConfig("state",e.value)}}
              required
            >
              <option value="">Select a state...</option>
              ${ft.map(t=>H`<option value="${t.value}">${t.label} (${t.value})</option>`)}
            </select>
          </div>
        </div>

        <div class="section">
          <h3>Display</h3>
          <div class="switch-wrapper">
            <label class="switch-label">Show Card Title</label>
            <ha-switch
              .checked=${!1!==this._config.show_card_title}
              @change=${t=>{const e=t.target.checked;this._updateConfig("show_card_title",e)}}
            ></ha-switch>
          </div>
          ${!1!==this._config.show_card_title?H`
            <ha-textfield
              label="Card Title"
              .value=${this._config.card_title||""}
              @input=${t=>this._updateConfig("card_title",t.target.value)}
              helper="Leave empty to use default"
            ></ha-textfield>
          `:""}
          
          <div class="metadata-section">
            <div class="section-header">
              <div class="switch-wrapper">
                <label class="switch-label">Show Metadata</label>
                <ha-switch
                  .checked=${this._getMetadataEnabled()}
                  @change=${t=>{const e=t.target.checked;this._updateMetadataToggle(e)}}
                ></ha-switch>
              </div>
              ${this._getMetadataEnabled()?H`
                <ha-icon-button
                  .label=${this._metadataExpanded?"Collapse":"Expand"}
                  @click=${()=>{this._metadataExpanded=!this._metadataExpanded}}
                >
                  <ha-icon .icon=${this._metadataExpanded?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
                </ha-icon-button>
              `:""}
            </div>
            ${this._getMetadataEnabled()&&this._metadataExpanded?H`
              <div class="metadata-options">
                <div class="switch-wrapper">
                  <label class="switch-label">Cache Status</label>
                  <ha-switch
                    .checked=${this._getMetadataConfig("show_cache_status")}
                    @change=${t=>this._updateMetadataConfig("show_cache_status",t.target.checked)}
                  ></ha-switch>
                </div>
                <div class="switch-wrapper">
                  <label class="switch-label">Observation Time</label>
                  <ha-switch
                    .checked=${this._getMetadataConfig("show_observation_time")}
                    @change=${t=>this._updateMetadataConfig("show_observation_time",t.target.checked)}
                  ></ha-switch>
                </div>
                <div class="switch-wrapper">
                  <label class="switch-label">Forecast Time</label>
                  <ha-switch
                    .checked=${this._getMetadataConfig("show_forecast_time")}
                    @change=${t=>this._updateMetadataConfig("show_forecast_time",t.target.checked)}
                  ></ha-switch>
                </div>
                <div class="switch-wrapper">
                  <label class="switch-label">Weather Station</label>
                  <ha-switch
                    .checked=${this._getMetadataConfig("show_weather_station")}
                    @change=${t=>this._updateMetadataConfig("show_weather_station",t.target.checked)}
                  ></ha-switch>
                </div>
                <div class="switch-wrapper">
                  <label class="switch-label">Distance</label>
                  <ha-switch
                    .checked=${this._getMetadataConfig("show_distance")}
                    @change=${t=>this._updateMetadataConfig("show_distance",t.target.checked)}
                  ></ha-switch>
                </div>
                <div class="switch-wrapper">
                  <label class="switch-label">Next Update</label>
                  <ha-switch
                    .checked=${this._getMetadataConfig("show_next_update")}
                    @change=${t=>this._updateMetadataConfig("show_next_update",t.target.checked)}
                  ></ha-switch>
                </div>
                <div class="switch-wrapper">
                  <label class="switch-label">Frame Times</label>
                  <ha-switch
                    .checked=${this._getMetadataConfig("show_frame_times")}
                    @change=${t=>this._updateMetadataConfig("show_frame_times",t.target.checked)}
                  ></ha-switch>
                </div>
                <div class="select-wrapper">
                  <label class="select-label">Metadata Position *</label>
                  <select
                    class="native-select"
                    .value=${String(null!==(t=this._getMetadataConfig("position"))&&void 0!==t?t:"above")}
                    @change=${t=>{t.preventDefault(),t.stopPropagation();try{const e=t.target.value;e&&""!==e&&this._updateMetadataConfig("position",e)}catch(t){console.error("Error updating metadata position:",t)}}}
                  >
                    <option value="above">Above Image (Default)</option>
                    <option value="below">Below Image</option>
                    <option value="overlay">Overlay on Image</option>
                  </select>
                </div>
                ${"overlay"===this._getMetadataConfig("position")?H`
                  <div class="select-wrapper">
                    <label class="select-label">Metadata Overlay Position *</label>
                    <select
                      class="native-select"
                      .value=${null!==(e=this._config.metadata_overlay_position)&&void 0!==e?e:"top"}
                      @change=${t=>{t.preventDefault(),t.stopPropagation();const e=t.target;this._updateConfig("metadata_overlay_position",e.value)}}
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
                    .value=${String(null!==(a=this._config.metadata_overlay_opacity)&&void 0!==a?a:.85)}
                    @input=${t=>this._updateConfig("metadata_overlay_opacity",parseFloat(t.target.value))}
                  ></ha-textfield>
                `:""}
                ${"overlay"!==this._getMetadataConfig("position")?H`
                  <div class="select-wrapper">
                    <label class="select-label">Metadata Style *</label>
                    <select
                      class="native-select"
                      .value=${null!==(i=this._getMetadataConfig("style"))&&void 0!==i?i:"cards"}
                      @change=${t=>{t.preventDefault(),t.stopPropagation();const e=t.target.value;""===e?this._updateMetadataConfig("style",void 0):this._updateMetadataConfig("style",e)}}
                    >
                      <option value="cards">Cards (Default)</option>
                      <option value="compact">Compact</option>
                      <option value="minimal">Minimal</option>
                    </select>
                  </div>
                `:H`
                  <div class="info-text" style="padding: 8px; background: var(--info-color, rgba(33, 150, 243, 0.1)); border-radius: 4px; font-size: 0.875em;">
                    <strong>Note:</strong> Overlay position uses a fixed compact style optimized for overlaying on images.
                  </div>
                `}
              </div>
            `:""}
          </div>

          <div class="controls-section">
            <div class="section-header">
              <div class="switch-wrapper">
                <label class="switch-label">Show Controls</label>
                <ha-switch
                  .checked=${this._getControlsEnabled()}
                  @change=${t=>{const e=t.target.checked;this._updateControlsToggle(e)}}
                ></ha-switch>
              </div>
              ${this._getControlsEnabled()?H`
                <ha-icon-button
                  .label=${this._controlsExpanded?"Collapse":"Expand"}
                  @click=${()=>{this._controlsExpanded=!this._controlsExpanded}}
                >
                  <ha-icon .icon=${this._controlsExpanded?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
                </ha-icon-button>
              `:""}
            </div>
            ${this._getControlsEnabled()&&this._controlsExpanded?H`
              <div class="controls-options">
                <div class="switch-wrapper">
                  <label class="switch-label">Play/Pause Button</label>
                  <ha-switch
                    .checked=${this._getControlsConfig("show_play_pause")}
                    @change=${t=>this._updateControlsConfig("show_play_pause",t.target.checked)}
                  ></ha-switch>
                </div>
                <div class="switch-wrapper">
                  <label class="switch-label">Previous/Next Buttons</label>
                  <ha-switch
                    .checked=${this._getControlsConfig("show_prev_next")}
                    @change=${t=>this._updateControlsConfig("show_prev_next",t.target.checked)}
                  ></ha-switch>
                </div>
                <div class="switch-wrapper">
                  <label class="switch-label">Frame Slider</label>
                  <ha-switch
                    .checked=${this._getControlsConfig("show_slider")}
                    @change=${t=>this._updateControlsConfig("show_slider",t.target.checked)}
                  ></ha-switch>
                </div>
                <div class="switch-wrapper">
                  <label class="switch-label">Navigation Buttons (-10, +10, First, Last)</label>
                  <ha-switch
                    .checked=${this._getControlsConfig("show_nav_buttons")}
                    @change=${t=>this._updateControlsConfig("show_nav_buttons",t.target.checked)}
                  ></ha-switch>
                </div>
                <div class="switch-wrapper">
                  <label class="switch-label">Frame Info</label>
                  <ha-switch
                    .checked=${this._getControlsConfig("show_frame_info")}
                    @change=${t=>this._updateControlsConfig("show_frame_info",t.target.checked)}
                  ></ha-switch>
                </div>
                <div class="select-wrapper">
                  <label class="select-label">Controls Position *</label>
                  <select
                    class="native-select"
                    .value=${String(null!==(o=this._getControlsConfig("position"))&&void 0!==o?o:"below")}
                    @change=${t=>{t.preventDefault(),t.stopPropagation();try{const e=t.target.value;e&&""!==e&&this._updateControlsConfig("position",e)}catch(t){console.error("Error updating controls position:",t)}}}
                  >
                    <option value="above">Above Image</option>
                    <option value="below">Below Image (Default)</option>
                    <option value="overlay">Overlay on Image</option>
                  </select>
                </div>
                ${"overlay"===this._getControlsConfig("position")?H`
                  <div class="select-wrapper">
                    <label class="select-label">Controls Overlay Position *</label>
                    <select
                      class="native-select"
                      .value=${null!==(r=this._config.controls_overlay_position)&&void 0!==r?r:"bottom"}
                      @change=${t=>{t.preventDefault(),t.stopPropagation();try{const e=t.target;this._updateConfig("controls_overlay_position",e.value)}catch(t){console.error("Error updating controls overlay position:",t)}}}
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
                    .value=${String(null!==(s=this._config.controls_overlay_opacity)&&void 0!==s?s:.9)}
                    @input=${t=>this._updateConfig("controls_overlay_opacity",parseFloat(t.target.value))}
                  ></ha-textfield>
                  ${(()=>{const t=this._checkOverlayConflict();return t.hasConflict?H`
                      <div class="warning-text" style="padding: 8px; background: var(--warning-color, rgba(255, 152, 0, 0.1)); border-left: 3px solid var(--warning-color, #ff9800); border-radius: 4px; font-size: 0.875em; margin-top: 8px;">
                        ${t.message}
                      </div>
                    `:""})()}
                `:""}
              </div>
            `:""}
          </div>

          <ha-textfield
            label="Image Zoom (1.0 = 100%)"
            type="number"
            step="0.1"
            min="0.5"
            max="3.0"
            .value=${String(this._config.image_zoom||1)}
            @input=${t=>this._updateConfig("image_zoom",parseFloat(t.target.value))}
            helper="Zoom level: 0.5 = 50%, 1.0 = 100%, 2.0 = 200%"
          ></ha-textfield>
          <div class="select-wrapper">
            <label class="select-label">Image Fit</label>
            <select
              class="native-select"
              .value=${this._config.image_fit||"contain"}
              @change=${t=>{const e=t.target;this._updateConfig("image_fit",e.value)}}
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
              .value=${this._config.timespan||"latest"}
              @change=${t=>{const e=t.target.value;if("custom"!==e&&"custom"===this._config.timespan){const t=Object.assign({},this._config);t.timespan=e,delete t.custom_start_time,delete t.custom_end_time,this._config=t,gt(this,"config-changed",{config:t})}else this._updateConfig("timespan",e)}}
            >
              <option value="latest">Latest 7 frames</option>
              ${this._cacheRange&&this._cacheRange.totalCacheFolders>0?H`
                <option value="1h">Last 1 hour${this._getRangeWarning("1h")?" ⚠️":""}</option>
                <option value="3h">Last 3 hours${this._getRangeWarning("3h")?" ⚠️":""}</option>
                <option value="6h">Last 6 hours${this._getRangeWarning("6h")?" ⚠️":""}</option>
                <option value="12h">Last 12 hours${this._getRangeWarning("12h")?" ⚠️":""}</option>
                <option value="24h">Last 24 hours${this._getRangeWarning("24h")?" ⚠️":""}</option>
              `:H`
                <option value="1h">Last 1 hour</option>
                <option value="3h">Last 3 hours</option>
                <option value="6h">Last 6 hours</option>
                <option value="12h">Last 12 hours</option>
                <option value="24h">Last 24 hours</option>
              `}
              <option value="custom">Custom time range</option>
            </select>
          </div>
          ${this._cacheRange&&this._cacheRange.totalCacheFolders>0?H`
            <div class="cache-range-info">
              <div class="info-text">
                <strong>Available cache:</strong> ${this._formatCacheRange()}
              </div>
            </div>
          `:this._cacheRangeError?H`
            <div class="cache-range-warning">
              <div class="warning-text">⚠️ ${this._cacheRangeError}</div>
            </div>
          `:""}
          ${this._getRangeWarning(this._config.timespan||"latest")?H`
            <div class="range-warning">
              <div class="warning-text">
                ⚠️ Selected timespan may not have enough data. Available: ${this._formatCacheRange()}
              </div>
            </div>
          `:""}
          ${"custom"===this._config.timespan?H`
            <ha-textfield
              label="Custom Start Time (ISO 8601)"
              .value=${this._config.custom_start_time||""}
              @input=${t=>this._updateConfig("custom_start_time",t.target.value)}
              helper="e.g., 2025-01-15T10:00:00Z"
            ></ha-textfield>
            <ha-textfield
              label="Custom End Time (ISO 8601)"
              .value=${this._config.custom_end_time||""}
              @input=${t=>this._updateConfig("custom_end_time",t.target.value)}
              helper="e.g., 2025-01-15T18:00:00Z"
            ></ha-textfield>
            ${this._validateCustomRange()?H`
              <div class="range-warning">
                <div class="warning-text">
                  ⚠️ ${this._validateCustomRange()}
                </div>
              </div>
            `:""}
          `:""}
          <ha-textfield
            label="Frame Interval (seconds)"
            type="number"
            step="0.5"
            min="0.5"
            max="10"
            .value=${String(this._config.frame_interval||2)}
            @input=${t=>this._updateConfig("frame_interval",parseFloat(t.target.value))}
          ></ha-textfield>
          <div class="switch-wrapper">
            <label class="switch-label">Auto Play</label>
            <ha-switch
              .checked=${!1!==this._config.auto_play}
              @change=${t=>{const e=t.target.checked;this._updateConfig("auto_play",e)}}
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
            .value=${String(this._config.refresh_interval||30)}
            @input=${t=>this._updateConfig("refresh_interval",parseInt(t.target.value))}
          ></ha-textfield>
        </div>
      </div>
    `:H``}_updateConfig(t,e){const a=Object.assign(Object.assign({},this._config),{[t]:e});this._config=a,gt(this,"config-changed",{config:a})}_getMetadataEnabled(){const t=this._config.show_metadata;return void 0===t||!0===t||("boolean"!=typeof t||t)}_updateMetadataToggle(t){if(t){if("object"==typeof this._config.show_metadata)return;this._updateConfig("show_metadata",{})}else this._updateConfig("show_metadata",!1)}_getMetadataConfig(t){const e=this._config.show_metadata;if("boolean"==typeof e)return"position"===t?"above":"style"===t?"cards":e;if("object"==typeof e){const a=e[t];return"position"===t||"style"===t?a:!1!==a}return"position"===t?"above":"style"!==t||"cards"}_updateMetadataConfig(t,e){let a;a="object"==typeof this._config.show_metadata?Object.assign({},this._config.show_metadata):{},void 0===e?delete a[t]:a[t]=e,0===Object.keys(a).length?this._updateConfig("show_metadata",!0):this._updateConfig("show_metadata",a)}_getControlsEnabled(){const t=this._config.show_controls;return void 0===t||!0===t||("boolean"!=typeof t||t)}_updateControlsToggle(t){if(t){if("object"==typeof this._config.show_controls)return;this._updateConfig("show_controls",{})}else this._updateConfig("show_controls",!1)}_getControlsConfig(t){const e=this._config.show_controls;if("boolean"==typeof e)return"position"===t?"below":e;if("object"==typeof e){const a=e[t];return"position"===t?a:!1!==a}return"position"!==t||"below"}_updateControlsConfig(t,e){let a;a="object"==typeof this._config.show_controls?Object.assign({},this._config.show_controls):{},void 0===e?delete a[t]:a[t]=e,0===Object.keys(a).length?this._updateConfig("show_controls",!0):this._updateConfig("show_controls",a)}_checkOverlayConflict(){var t,e,a;const i=this._getMetadataConfig("position"),o=this._getControlsConfig("position");if("overlay"!==i||"overlay"!==o)return{hasConflict:!1,message:""};const r=null!==(t=this._config.metadata_overlay_position)&&void 0!==t?t:"top",s=null!==(e=this._config.controls_overlay_position)&&void 0!==e?e:"bottom";if(r===s)return{hasConflict:!0,message:`⚠️ Warning: Both metadata and controls are overlayed at the same position (${r}). They will overlap.`};return(null===(a={top:["top","center"],bottom:["bottom","center"],left:["left","center"],right:["right","center"],center:["top","bottom","left","right","center"]}[r])||void 0===a?void 0:a.includes(s))?{hasConflict:!0,message:`⚠️ Warning: Metadata (${r}) and controls (${s}) may overlap. Consider using different positions.`}:{hasConflict:!1,message:""}}_getRangeWarning(t){if(!this._cacheRange||0===this._cacheRange.totalCacheFolders||"latest"===t||"custom"===t)return!1;return 60*(parseInt(t.replace("h",""))||0)>(this._cacheRange.timeSpanMinutes||0)}_formatCacheRange(){var t,e,a,i,o,r;if(!this._cacheRange||0===this._cacheRange.totalCacheFolders)return"No cache available";const s=null===(t=this._cacheRange.oldestCache)||void 0===t?void 0:t.cacheTimestamp,n=null===(e=this._cacheRange.newestCache)||void 0===e?void 0:e.cacheTimestamp,l=this._cacheRange.timeSpanMinutes;if(s&&n){const t=new Date(s),e=new Date(n),c=(null===(i=null===(a=this.hass)||void 0===a?void 0:a.locale)||void 0===i?void 0:i.language)||"en-AU",d=(null===(r=null===(o=this.hass)||void 0===o?void 0:o.config)||void 0===r?void 0:r.time_zone)||Intl.DateTimeFormat().resolvedOptions().timeZone,h=t.toLocaleString(c,{timeZone:d,year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),p=e.toLocaleString(c,{timeZone:d,year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"});if(l){return`${h} to ${p} (${Math.floor(l/60)}h ${l%60}m, ${this._cacheRange.totalCacheFolders} folders)`}return`${h} to ${p} (${this._cacheRange.totalCacheFolders} folders)`}return`${this._cacheRange.totalCacheFolders} cache folders available`}_validateCustomRange(){var t,e,a,i,o,r,s,n;if("custom"!==this._config.timespan)return null;if(!this._config.custom_start_time||!this._config.custom_end_time)return null;try{const l=new Date(this._config.custom_start_time),c=new Date(this._config.custom_end_time);if(isNaN(l.getTime())||isNaN(c.getTime()))return"Invalid date format. Use ISO 8601 format (e.g., 2025-01-15T10:00:00Z)";if(l>=c)return"Start time must be before end time";if(this._cacheRange&&this._cacheRange.oldestCache&&this._cacheRange.newestCache)try{const d=new Date(this._cacheRange.oldestCache.cacheTimestamp),h=new Date(this._cacheRange.newestCache.cacheTimestamp);if(isNaN(d.getTime())||isNaN(h.getTime()))return null;if(l<d){const o=(null===(e=null===(t=this.hass)||void 0===t?void 0:t.locale)||void 0===e?void 0:e.language)||"en-AU",r=(null===(i=null===(a=this.hass)||void 0===a?void 0:a.config)||void 0===i?void 0:i.time_zone)||Intl.DateTimeFormat().resolvedOptions().timeZone;return`Start time is before available cache (${d.toLocaleString(o,{timeZone:r,year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})})`}if(c>h){const t=(null===(r=null===(o=this.hass)||void 0===o?void 0:o.locale)||void 0===r?void 0:r.language)||"en-AU",e=(null===(n=null===(s=this.hass)||void 0===s?void 0:s.config)||void 0===n?void 0:n.time_zone)||Intl.DateTimeFormat().resolvedOptions().timeZone;return`End time is after available cache (${h.toLocaleString(t,{timeZone:e,year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})})`}}catch(t){return null}return null}catch(t){return"Invalid date format"}}};vt.styles=s`
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
  `,t([ht({attribute:!1})],vt.prototype,"hass",void 0),t([pt()],vt.prototype,"_config",void 0),t([pt()],vt.prototype,"_metadataExpanded",void 0),t([pt()],vt.prototype,"_controlsExpanded",void 0),t([pt()],vt.prototype,"_cacheRange",void 0),t([pt()],vt.prototype,"_cacheRangeError",void 0),vt=t([lt("bom-local-card-editor")],vt);function bt(t,e,a,i){const o=e.errorCode||e.ErrorCode,r=e.message||e.Message||t.statusText||"An error occurred",s=e.errorType||e.ErrorType,n=e.details||e.Details||{},l=e.suggestions||e.Suggestions||{};let c=r;if(("CACHE_NOT_FOUND"===o||404===t.status&&!o)&&(c.includes("cache")||c.includes("Cache")||(c="No cached data found for this location. Cache update has been triggered in background. Please retry in a few moments.")),n.previousUpdateFailed&&(c=`${c}\n\nPrevious update failed: ${n.previousError||"Unknown error"}`,n.previousErrorCode&&(c+=` (${n.previousErrorCode})`)),"TIME_RANGE_ERROR"===o&&n.availableRange){const t=n.availableRange,e=n.requestedRange;c+=`\n\nAvailable data: ${t.oldest||"N/A"} to ${t.newest||"N/A"}`,t.totalCacheFolders&&(c+=` (${t.totalCacheFolders} cache folders)`),e&&(c+=`\nRequested: ${e.start||"N/A"} to ${e.end||"N/A"}`),n.requestedHours&&(c+=`\nRequested range: ${n.requestedHours} hours (max: ${n.maxHours||"N/A"} hours)`),l.suggestion&&(c+=`\n\n💡 ${l.suggestion}`)}const d=l.retryAfter||n.retryAfter||i.defaultRetryAfter||30,h=l.action||"retry_after_seconds",p="manual_refresh_recommended"!==h&&"check_network_and_retry"!==h&&"adjust_time_range"!==h,m=function(t){const e=t.toLowerCase();return e.includes("cache")||"cache_not_found"===e||"cacheerror"===e?"cache":e.includes("validation")||"validation_error"===e||"validationerror"===e?"validation":e.includes("network")||e.includes("fetch")?"network":e.includes("notfound")||"not_found"===e||"notfounderror"===e?"cache":"unknown"}(s||o||(404===t.status?"CACHE_NOT_FOUND":"unknown")),u=t.url.includes("/timeseries");return{message:c,type:m,retryable:404===t.status||u&&400===t.status,retryAction:i.retryAction,retryAfter:p?d:void 0,errorCode:o||(404===t.status?"CACHE_NOT_FOUND":`HTTP_${t.status}`),details:Object.assign(Object.assign({},n),{action:h,refreshEndpoint:l.refreshEndpoint,statusEndpoint:l.statusEndpoint,suggestedRange:l.suggestedRange})}}function _t(t,e){if(!t)return t;if(t.startsWith("http://")||t.startsWith("https://"))return t;return`/api/bom_local/proxy${t.startsWith("/")?t:`/${t}`}`}class yt{async fetchLatestFrames(t){const{hass:e,suburb:a,state:i,onError:o}=t;try{const r=await e.callWS({type:"bom_local/get_radar_data",suburb:a,state:i});if(r.errorCode||r.ErrorCode||r.error){return o(bt({ok:!1,status:404,statusText:"Not Found",url:"/api/radar"},r,0,{retryAction:()=>this.fetchLatestFrames(t),defaultRetryAfter:30})),null}if(!r.frames||0===r.frames.length)throw new Error("No frames available in response");return r.frames.forEach(t=>{t.imageUrl&&(t.imageUrl=_t(t.imageUrl))}),r}catch(e){return this.handleFetchError(e,t),null}}async fetchHistoricalFrames(t){var e;const{hass:a,suburb:i,state:o,timespan:r,customStartTime:s,customEndTime:n,onError:l}=t;try{let c=null,d=(new Date).toISOString();if("custom"===r)s&&(c=new Date(s).toISOString()),n&&(d=new Date(n).toISOString());else if(r){const t=parseInt(r.replace("h",""))||1;c=new Date(Date.now()-60*t*60*1e3).toISOString()}if(!c)throw new Error("Invalid timespan configuration");const h=await a.callWS({type:"bom_local/get_radar_data",suburb:i,state:o,startTime:c,endTime:d});if(h.errorCode||h.ErrorCode||h.error){return l(bt({ok:!1,status:404,statusText:"Not Found",url:"/timeseries"},h,0,{retryAction:()=>this.fetchHistoricalFrames(t),defaultRetryAfter:30})),null}if(!h.cacheFolders||0===h.cacheFolders.length)throw new Error("No historical data found for the specified time range.");const p=[];h.cacheFolders.forEach(t=>{t.frames.forEach(e=>{if(e.cacheTimestamp=t.cacheTimestamp,e.observationTime=t.observationTime,e.cacheFolderName=t.cacheFolderName,e.imageUrl&&(e.imageUrl=_t(e.imageUrl)),!e.absoluteObservationTime&&e.observationTime&&void 0!==e.minutesAgo){const t=new Date(e.observationTime);e.absoluteObservationTime=new Date(t.getTime()-60*e.minutesAgo*1e3).toISOString()}p.push(e)})}),p.sort((t,e)=>new Date(t.absoluteObservationTime).getTime()-new Date(e.absoluteObservationTime).getTime()),p.forEach((t,e)=>{t.sequentialIndex=e});let m={};try{m=await a.callWS({type:"bom_local/get_radar_data",suburb:i,state:o})}catch(t){console.debug("Could not fetch metadata:",t)}const u=h.cacheFolders[h.cacheFolders.length-1];return{frames:p,lastUpdated:d,observationTime:m.observationTime||(null==u?void 0:u.observationTime)||d,forecastTime:m.forecastTime||d,weatherStation:m.weatherStation,distance:m.distance,cacheIsValid:null===(e=m.cacheIsValid)||void 0===e||e,cacheExpiresAt:m.cacheExpiresAt||d,isUpdating:m.isUpdating||!1,nextUpdateTime:m.nextUpdateTime||d}}catch(e){return this.handleFetchError(e,t),null}}handleFetchError(t,e){const a=(null==t?void 0:t.message)||("string"==typeof t?t:"Unknown error occurred");e.onError({message:a,type:"unknown",retryable:!0,retryAction:()=>this.fetchLatestFrames(e)})}}const xt=s`
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
`,wt=s`
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
`,$t=s`
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
`,Ct=s`
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
`,At=s`
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
`,Et=s`
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
`;function kt(t,e="en-AU",a){if(!t)return"-";const i=new Date(t),o=a||Intl.DateTimeFormat().resolvedOptions().timeZone;return i.toLocaleString(e,{timeZone:o,year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}let Tt=class extends st{constructor(){super(...arguments),this.locale="en-AU"}_getErrorIcon(){if(!this.error)return"mdi:alert";switch(this.error.type){case"cache":return"mdi:database-alert";case"validation":return"mdi:alert-circle";case"network":return"mdi:wifi-off";default:return"mdi:alert"}}_getErrorColor(){if(!this.error)return"#f44336";switch(this.error.type){case"cache":return"#ff9800";case"validation":default:return"#f44336";case"network":return"#2196f3"}}_getErrorTitle(){if(!this.error)return"Error";switch(this.error.type){case"cache":return"Cache Error";case"validation":return"Validation Error";case"network":return"Network Error";default:return"Error"}}render(){var t,e,a,i,o,r;if(!this.error)return H``;const s="manual_refresh_recommended"===(null===(t=this.error.details)||void 0===t?void 0:t.action),n=null===(e=this.error.details)||void 0===e?void 0:e.refreshEndpoint,l=this.error.retryAfter?H`<div class="error-retry-info">Auto-retrying in ${this.error.retryAfter} seconds...</div>`:s?H`<div class="error-retry-info">Manual refresh recommended. Previous update failed.</div>`:"",c=this.error.message.split("\n").map((t,e)=>t.trim()?H`<div class="error-line">${t}</div>`:H`<div class="error-line-spacer"></div>`),d=this.error.details&&(this.error.details.previousUpdateFailed||this.error.details.availableRange||this.error.details.requestedRange||this.error.details.suggestedRange||n),h=this._getErrorIcon(),p=this._getErrorColor();return H`
      <div class="error-container">
        <div class="error-card" style="--error-color: ${p}">
          <div class="error-header">
            <ha-icon class="error-icon" .icon=${h}></ha-icon>
            <div class="error-title">${this._getErrorTitle()}</div>
          </div>
          <div class="error-content">
            <div class="error-message">${c}</div>
            ${this.error.errorCode?H`
              <div class="error-code">
                <ha-icon class="code-icon" icon="mdi:code-tags"></ha-icon>
                <span>Error Code: ${this.error.errorCode}</span>
              </div>
            `:""}
            ${d?H`
              <div class="error-details">
                ${(null===(a=this.error.details)||void 0===a?void 0:a.previousUpdateFailed)?H`
                  <div class="error-detail-item">
                    <ha-icon class="detail-icon" icon="mdi:alert-circle"></ha-icon>
                    <div class="detail-content">
                      <strong>Previous Update Failed:</strong> ${this.error.details.previousError||"Unknown error"}
                      ${this.error.details.previousErrorCode?H` (${this.error.details.previousErrorCode})`:""}
                    </div>
                  </div>
                `:""}
                ${(null===(i=this.error.details)||void 0===i?void 0:i.availableRange)?H`
                  <div class="error-detail-item">
                    <ha-icon class="detail-icon" icon="mdi:database-clock"></ha-icon>
                    <div class="detail-content">
                      <strong>Available Data Range:</strong> ${this.error.details.availableRange.oldest?kt(this.error.details.availableRange.oldest,this.locale,this.timeZone):"N/A"} to ${this.error.details.availableRange.newest?kt(this.error.details.availableRange.newest,this.locale,this.timeZone):"N/A"}
                      ${this.error.details.availableRange.totalCacheFolders?H` (${this.error.details.availableRange.totalCacheFolders} folders)`:""}
                    </div>
                  </div>
                `:""}
                ${(null===(o=this.error.details)||void 0===o?void 0:o.requestedRange)?H`
                  <div class="error-detail-item">
                    <ha-icon class="detail-icon" icon="mdi:calendar-range"></ha-icon>
                    <div class="detail-content">
                      <strong>Requested Range:</strong> ${this.error.details.requestedRange.start?kt(this.error.details.requestedRange.start,this.locale,this.timeZone):"N/A"} to ${this.error.details.requestedRange.end?kt(this.error.details.requestedRange.end,this.locale,this.timeZone):"N/A"}
                    </div>
                  </div>
                `:""}
                ${(null===(r=this.error.details)||void 0===r?void 0:r.suggestedRange)?H`
                  <div class="error-detail-item suggested-range">
                    <ha-icon class="detail-icon" icon="mdi:lightbulb-on"></ha-icon>
                    <div class="detail-content">
                      <strong>Suggested Range:</strong> ${this.error.details.suggestedRange.start?kt(this.error.details.suggestedRange.start,this.locale,this.timeZone):"N/A"} to ${this.error.details.suggestedRange.end?kt(this.error.details.suggestedRange.end,this.locale,this.timeZone):"N/A"}
                      <div class="suggestion-hint">Try using this time range instead</div>
                    </div>
                  </div>
                `:""}
                ${n?H`
                  <div class="error-detail-item">
                    <ha-icon class="detail-icon" icon="mdi:refresh"></ha-icon>
                    <div class="detail-content">
                      <strong>Refresh Endpoint:</strong> <code>${n}</code>
                    </div>
                  </div>
                `:""}
              </div>
            `:""}
            ${l}
            ${this.error.retryable&&this.onRetry?H`
              <div class="error-actions">
                <button
                  class="retry-button"
                  type="button"
                  style="--error-color: ${p}"
                  @click=${t=>{t.preventDefault(),t.stopPropagation(),this.onRetry&&this.onRetry()}}
                >
                  <ha-icon class="retry-icon" icon="mdi:refresh"></ha-icon>
                  <span>${s?"Retry Anyway":"Retry Now"}</span>
                </button>
              </div>
            `:""}
          </div>
        </div>
      </div>
    `}};Tt.styles=[Et],t([ht({attribute:!1})],Tt.prototype,"error",void 0),t([ht({attribute:!1})],Tt.prototype,"locale",void 0),t([ht({attribute:!1})],Tt.prototype,"timeZone",void 0),t([ht({attribute:!1})],Tt.prototype,"onRetry",void 0),Tt=t([lt("bom-error-display")],Tt);let St=class extends st{constructor(){super(...arguments),this.position="above",this.locale="en-AU"}_getDisplayConfig(){return!this.config||"boolean"==typeof this.config&&!this.config?null:"object"==typeof this.config?this.config:{}}render(){var t,e;const a=this._getDisplayConfig();if(!a)return H``;if((null!==(t=a.position)&&void 0!==t?t:"above")!==this.position)return H``;if("overlay"===this.position)return this._renderOverlay();const i=null!==(e=a.style)&&void 0!==e?e:"cards";return H`
      <div class="metadata-section metadata-${this.position} metadata-${i}">
        ${!1!==a.show_cache_status?this._renderCacheStatus():""}
        ${!1!==a.show_observation_time?this._renderObservationTime():""}
        ${!1!==a.show_forecast_time?this._renderForecastTime():""}
        ${!1!==a.show_weather_station?this._renderWeatherStation():""}
        ${!1!==a.show_distance?this._renderDistance():""}
        ${!1!==a.show_next_update?this._renderNextUpdate():""}
      </div>
    `}_renderOverlay(){var t,e;const a=this._getDisplayConfig();if(!a)return H``;const i=null!==(t=this.overlayOpacity)&&void 0!==t?t:.85,o=null!==(e=this.overlayPosition)&&void 0!==e?e:"top";return H`
      <div class="metadata-overlay overlay-${o}" style="opacity: ${i};">
        ${!1!==a.show_cache_status?this._renderCacheStatus():""}
        ${!1!==a.show_observation_time?this._renderObservationTime():""}
        ${!1!==a.show_forecast_time?this._renderForecastTime():""}
        ${!1!==a.show_weather_station?this._renderWeatherStation():""}
        ${!1!==a.show_distance?this._renderDistance():""}
        ${!1!==a.show_next_update?this._renderNextUpdate():""}
      </div>
    `}_renderCacheStatus(){return this.radarData?H`
      <div class="metadata-item cache-status">
        <span class="metadata-label">Cache:</span>
        <span class="metadata-value">
          ${this.radarData.isUpdating?"Updating":this.radarData.cacheIsValid?"Valid":"Invalid"}
        </span>
      </div>
    `:H``}_renderObservationTime(){var t;return(null===(t=this.radarData)||void 0===t?void 0:t.observationTime)?H`
      <div class="metadata-item observation-time">
        <span class="metadata-label">Observation:</span>
        <span class="metadata-value">
          ${kt(this.radarData.observationTime,this.locale,this.timeZone)}
        </span>
        <span class="metadata-relative">
          (${function(t){if(!t)return"-";const e=new Date(t),a=(new Date).getTime()-e.getTime(),i=Math.floor(a/6e4),o=Math.floor(i/60),r=Math.floor(o/24);return i<1?"Just now":i<60?`${i} min ago`:o<24?`${o} hour${o>1?"s":""} ago`:`${r} day${r>1?"s":""} ago`}(this.radarData.observationTime)})
        </span>
      </div>
    `:H``}_renderForecastTime(){var t;return(null===(t=this.radarData)||void 0===t?void 0:t.forecastTime)?H`
      <div class="metadata-item forecast-time">
        <span class="metadata-label">Forecast:</span>
        <span class="metadata-value">${kt(this.radarData.forecastTime,this.locale,this.timeZone)}</span>
      </div>
    `:H``}_renderWeatherStation(){var t;return(null===(t=this.radarData)||void 0===t?void 0:t.weatherStation)?H`
      <div class="metadata-item weather-station">
        <span class="metadata-label">Station:</span>
        <span class="metadata-value">${this.radarData.weatherStation}</span>
      </div>
    `:H``}_renderDistance(){var t;return(null===(t=this.radarData)||void 0===t?void 0:t.distance)?H`
      <div class="metadata-item distance">
        <span class="metadata-label">Distance:</span>
        <span class="metadata-value">${this.radarData.distance}</span>
      </div>
    `:H``}_renderNextUpdate(){var t;return(null===(t=this.radarData)||void 0===t?void 0:t.nextUpdateTime)?H`
      <div class="metadata-item next-update">
        <span class="metadata-label">Next Update:</span>
        <span class="metadata-value">${kt(this.radarData.nextUpdateTime,this.locale,this.timeZone)}</span>
      </div>
    `:H``}};St.styles=[Ct,At],t([ht({attribute:!1})],St.prototype,"radarData",void 0),t([ht({attribute:!1})],St.prototype,"config",void 0),t([ht({attribute:!1})],St.prototype,"position",void 0),t([ht({attribute:!1})],St.prototype,"locale",void 0),t([ht({attribute:!1})],St.prototype,"timeZone",void 0),t([ht({attribute:!1})],St.prototype,"overlayOpacity",void 0),t([ht({attribute:!1})],St.prototype,"overlayPosition",void 0),St=t([lt("bom-metadata-section")],St);let Rt=class extends st{constructor(){super(...arguments),this.frames=[],this.currentFrameIndex=0,this.isPlaying=!1,this.isExtendedMode=!1,this.locale="en-AU"}_getDisplayConfig(){return!this.config||"boolean"==typeof this.config&&!this.config?null:"object"==typeof this.config?this.config:{}}render(){var t;const e=this._getDisplayConfig();if(!e)return H``;const a=null!==(t=e.position)&&void 0!==t?t:"below";return void 0!==this.position&&a!==this.position?H``:"overlay"===a?this._renderOverlay(e):H`
      <div class="controls-section controls-${a}">
        ${!1!==e.show_slider?this._renderFrameSlider():""}
        ${!1!==e.show_nav_buttons?this._renderNavButtons():""}
        ${!1!==e.show_play_pause?this._renderPlayPause():""}
        ${!1!==e.show_prev_next?this._renderPrevNext():""}
        ${!1!==e.show_frame_info?this._renderFrameInfo():""}
      </div>
    `}_renderOverlay(t){var e,a;const i=null!==(e=this.overlayOpacity)&&void 0!==e?e:.9,o=null!==(a=this.overlayPosition)&&void 0!==a?a:"bottom";return H`
      <div class="controls-overlay overlay-${o}" style="opacity: ${i};">
        ${!1!==t.show_slider?this._renderFrameSlider():""}
        ${!1!==t.show_play_pause?this._renderPlayPause():""}
        ${!1!==t.show_prev_next?this._renderPrevNext():""}
        ${!1!==t.show_frame_info?this._renderFrameInfo():""}
      </div>
    `}_renderFrameSlider(){return 0===this.frames.length?H``:H`
      <div class="frame-slider-container">
        <div class="frame-slider-wrapper">
          <input 
            type="range" 
            class="frame-slider" 
            min="0" 
            max="${this.frames.length-1}"
            .value="${this.currentFrameIndex}"
            @input="${t=>{const e=parseInt(t.target.value);this.onFrameChange&&this.onFrameChange(e)}}"
            aria-label="Frame slider"
          />
        </div>
      </div>
    `}_renderNavButtons(){if(0===this.frames.length)return H``;const t=this.isExtendedMode?Math.max(1,Math.min(50,Math.round(this.frames.length/3))):0;return H`
      <div class="frame-nav-buttons">
        ${this.isExtendedMode?H`
          <button 
            class="frame-nav-btn" 
            @click="${()=>this.onFrameChange&&this.onFrameChange(0)}"
            ?disabled="${0===this.currentFrameIndex}"
            title="First frame"
            aria-label="First frame"
          >⏮</button>
          <button 
            class="frame-nav-btn" 
            @click="${()=>this.onJumpFrame&&this.onJumpFrame(-t)}"
            ?disabled="${0===this.currentFrameIndex}"
            title="Go back ${t} frames"
            aria-label="Go back ${t} frames"
          >-${t}</button>
          <button 
            class="frame-nav-btn" 
            @click="${()=>this.onJumpFrame&&this.onJumpFrame(t)}"
            ?disabled="${this.currentFrameIndex>=this.frames.length-1}"
            title="Go forward ${t} frames"
            aria-label="Go forward ${t} frames"
          >+${t}</button>
          <button 
            class="frame-nav-btn" 
            @click="${()=>this.onFrameChange&&this.onFrameChange(this.frames.length-1)}"
            ?disabled="${this.currentFrameIndex>=this.frames.length-1}"
            title="Last frame"
            aria-label="Last frame"
          >⏭</button>
        `:H`
          <button 
            class="frame-nav-btn" 
            @click="${()=>this.onFrameChange&&this.onFrameChange(0)}"
            ?disabled="${0===this.currentFrameIndex}"
            title="First frame"
            aria-label="First frame"
          >⏮</button>
          <button 
            class="frame-nav-btn" 
            @click="${()=>this.onFrameChange&&this.onFrameChange(this.frames.length-1)}"
            ?disabled="${this.currentFrameIndex>=this.frames.length-1}"
            title="Last frame"
            aria-label="Last frame"
          >⏭</button>
        `}
      </div>
    `}_renderPlayPause(){return H`
      <div class="play-controls">
        <button 
          class="play-btn" 
          @click="${()=>this.onToggleAnimation&&this.onToggleAnimation()}"
          aria-label="${this.isPlaying?"Pause animation":"Play animation"}"
          aria-pressed="${this.isPlaying}"
        >
          ${this.isPlaying?"⏸ Pause":"▶ Play"}
        </button>
      </div>
    `}_renderPrevNext(){return H`
      <div class="play-controls">
        <button 
          class="play-btn" 
          @click="${()=>this.onPrevious&&this.onPrevious()}"
          aria-label="Previous frame"
        >◀ Previous</button>
        <button 
          class="play-btn" 
          @click="${()=>this.onNext&&this.onNext()}"
          aria-label="Next frame"
        >Next ▶</button>
      </div>
    `}_renderFrameInfo(){var t,e;const a=this.frames[this.currentFrameIndex];if(!a)return H``;const i=!1!==this.showFrameTimes;let o="";o=this.isExtendedMode&&a.absoluteObservationTime?`Frame ${(null!==(t=a.sequentialIndex)&&void 0!==t?t:this.currentFrameIndex)+1} of ${this.frames.length}`:`Frame ${a.frameIndex+1} of ${this.frames.length}`;const r=this.frames.length>0?Math.round((this.currentFrameIndex+1)/this.frames.length*100):0;return H`
      <div class="frame-info">
        <span class="frame-index">${o}</span>
        ${i&&a.absoluteObservationTime?H`
          <span class="frame-time">
            ${kt(a.absoluteObservationTime,this.locale,this.timeZone)}
          </span>
        `:i&&void 0!==a.minutesAgo?H`
          <span class="frame-time">
            ${a.minutesAgo} min ago
          </span>
        `:""}
        ${(null===(e=this.radarData)||void 0===e?void 0:e.observationTime)&&i?H`
          <span class="observation-time">
            Obs: ${kt(this.radarData.observationTime,this.locale,this.timeZone)}
          </span>
        `:""}
        <span class="frame-progress">${r}%</span>
      </div>
    `}};var Ft;Rt.styles=[$t,At],t([ht({attribute:!1})],Rt.prototype,"frames",void 0),t([ht({attribute:!1})],Rt.prototype,"currentFrameIndex",void 0),t([ht({attribute:!1})],Rt.prototype,"isPlaying",void 0),t([ht({attribute:!1})],Rt.prototype,"isExtendedMode",void 0),t([ht({attribute:!1})],Rt.prototype,"radarData",void 0),t([ht({attribute:!1})],Rt.prototype,"config",void 0),t([ht({attribute:!1})],Rt.prototype,"position",void 0),t([ht({attribute:!1})],Rt.prototype,"locale",void 0),t([ht({attribute:!1})],Rt.prototype,"timeZone",void 0),t([ht({attribute:!1})],Rt.prototype,"overlayOpacity",void 0),t([ht({attribute:!1})],Rt.prototype,"overlayPosition",void 0),t([ht({attribute:!1})],Rt.prototype,"showFrameTimes",void 0),t([ht({attribute:!1})],Rt.prototype,"onFrameChange",void 0),t([ht({attribute:!1})],Rt.prototype,"onPrevious",void 0),t([ht({attribute:!1})],Rt.prototype,"onNext",void 0),t([ht({attribute:!1})],Rt.prototype,"onJumpFrame",void 0),t([ht({attribute:!1})],Rt.prototype,"onToggleAnimation",void 0),Rt=t([lt("bom-controls-section")],Rt),console.info("%c  BOM-LOCAL-RADAR-CARD  \n%c  Version 0.3.1   ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=null!==(Ft=window.customCards)&&void 0!==Ft?Ft:[],window.customCards.push({type:"bom-local-card",name:"BOM Local Card",description:"A rain radar card using the local BOM service"});let Mt=class extends st{constructor(){super(...arguments),this.currentFrameIndex=0,this.isLoading=!1,this.isPlaying=!1,this.frames=[],this.isExtendedMode=!1,this.preloadedImages=[],this.apiService=new yt,this._handleKeyDown=t=>{var e;if((null===(e=this.shadowRoot)||void 0===e?void 0:e.activeElement)||document.activeElement===this)switch(t.key){case"ArrowLeft":t.preventDefault(),this.previousFrame();break;case"ArrowRight":t.preventDefault(),this.nextFrame();break;case" ":t.preventDefault(),this.toggleAnimation();break;case"Home":t.preventDefault(),this.showFrame(0);break;case"End":t.preventDefault(),this.showFrame(this.frames.length-1)}}}static async getConfigElement(){return document.createElement("bom-local-card-editor")}static getStubConfig(){return{type:"custom:bom-local-card",suburb:"Pomona",state:"QLD"}}setConfig(t){if(!t.suburb||!t.state)throw new Error("suburb and state are required");this._config=t}getCardSize(){let t=4;const e=this._getMetadataConfig();e&&"boolean"!=typeof e?"overlay"!==e.position&&(t+=1):!0===e&&(t+=1);const a=this._getControlsConfig();return a&&"boolean"!=typeof a?"overlay"!==a.position&&(t+=2):!0===a&&(t+=2),t}getGridOptions(){return{columns:6,min_columns:3,max_columns:12}}async fetchRadarData(){const t=encodeURIComponent(this._config.suburb),e=encodeURIComponent(this._config.state),a=this._config.timespan||"latest";this.isLoading=!0;const i={hass:this.hass,suburb:t,state:e,timespan:"latest"!==a?a:void 0,customStartTime:this._config.custom_start_time,customEndTime:this._config.custom_end_time,onError:t=>{this.error=t,this.isLoading=!1,t.retryable&&t.retryAfter&&(this.retryTimer&&window.clearTimeout(this.retryTimer),this.retryTimer=window.setTimeout(()=>{this.retryTimer=void 0,this.fetchRadarData()},1e3*t.retryAfter))}};let o=null;return o="latest"!==a?await this.apiService.fetchHistoricalFrames(i):await this.apiService.fetchLatestFrames(i),o&&(this.error=void 0,this.radarData=o,this.frames=o.frames.sort((t,e)=>t.frameIndex-e.frameIndex),this.isExtendedMode="latest"!==a,this.isLoading=!1,this.preloadImages(this.frames),!1===this._config.auto_play||this.isPlaying||this.startAnimation()),o}getCurrentFrameUrl(){if(!this.frames||0===this.frames.length)return null;const t=this.frames[this.currentFrameIndex];return(null==t?void 0:t.imageUrl)||null}_getMetadataConfig(){const t=this._config.show_metadata;return void 0===t||t}_getControlsConfig(){const t=this._config.show_controls;return void 0===t||t}_shouldShowMetadata(){return!1!==this._getMetadataConfig()}_shouldShowControls(){return!1!==this._getControlsConfig()}_getLocale(){var t,e;return this._config.locale||(null===(e=null===(t=this.hass)||void 0===t?void 0:t.locale)||void 0===e?void 0:e.language)||"en-AU"}_shouldPreloadFrame(t){const e=this.currentFrameIndex;return Math.abs(t-e)<=1}preloadImages(t){this.preloadedImages.forEach(t=>{t.src="",t.onload=null,t.onerror=null}),this.preloadedImages=[],t.forEach((t,e)=>{if(this._shouldPreloadFrame(e)){const e=new Image;e.src=t.imageUrl,this.preloadedImages.push(e)}})}_debounce(t,e){let a;return(...i)=>{window.clearTimeout(a),a=window.setTimeout(()=>t(...i),e)}}startAnimation(){if(this.stopAnimation(),0===this.frames.length)return;this.isPlaying=!0;const t=1e3*(this._config.frame_interval||2),e=this.frames.length-1;let a=performance.now();const i=o=>{if(!this.isPlaying)return;if(!this.animationTimer)return;const r=o-a;this.currentFrameIndex>=e?r>=2e3&&(this.currentFrameIndex=0,this.requestUpdate(),a=o):r>=t&&(this.currentFrameIndex++,this.requestUpdate(),a=o),this.animationTimer=requestAnimationFrame(i)};this.animationTimer=requestAnimationFrame(i)}stopAnimation(){this.animationTimer&&(cancelAnimationFrame(this.animationTimer),this.animationTimer=void 0),this.isPlaying=!1}toggleAnimation(){this.isPlaying?this.stopAnimation():this.startAnimation()}showFrame(t){t<0||t>=this.frames.length||(this.currentFrameIndex=t,this.requestUpdate())}previousFrame(){this.stopAnimation();const t=this.currentFrameIndex>0?this.currentFrameIndex-1:this.frames.length-1;this.showFrame(t)}nextFrame(){this.stopAnimation();const t=(this.currentFrameIndex+1)%this.frames.length;this.showFrame(t)}jumpFrame(t){const e=Math.max(0,Math.min(this.frames.length-1,this.currentFrameIndex+t));this.showFrame(e)}startAutoRefresh(){this.refreshTimer&&window.clearInterval(this.refreshTimer);const t=1e3*(this._config.refresh_interval||30);this.refreshTimer=window.setInterval(()=>{this.fetchRadarData()},t)}stopAutoRefresh(){this.refreshTimer&&(window.clearInterval(this.refreshTimer),this.refreshTimer=void 0)}async firstUpdated(){await this.fetchRadarData(),this.startAutoRefresh()}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._handleKeyDown),this.stopAnimation(),this.stopAutoRefresh(),this.retryTimer&&(window.clearTimeout(this.retryTimer),this.retryTimer=void 0),this.preloadedImages.forEach(t=>{t.src="",t.onload=null,t.onerror=null}),this.preloadedImages=[]}updated(t){if(super.updated(t),t.has("_config")){const e=t.get("_config");e&&this._config&&(e.suburb===this._config.suburb&&e.state===this._config.state&&e.timespan===this._config.timespan&&e.custom_start_time===this._config.custom_start_time&&e.custom_end_time===this._config.custom_end_time||this.fetchRadarData(),e.refresh_interval!==this._config.refresh_interval&&this.startAutoRefresh(),e.frame_interval!==this._config.frame_interval&&this.isPlaying&&(this.stopAnimation(),this.startAnimation()))}}_renderMetadata(t){var e,a,i;const o=this._getMetadataConfig();if(!o||"boolean"==typeof o&&!o)return"";return(null!==(e=("object"==typeof o?o:{}).position)&&void 0!==e?e:"above")!==t?"":H`
      <bom-metadata-section
        .radarData=${this.radarData}
        .config=${o}
        .position=${t}
        .locale=${this._getLocale()}
        .timeZone=${null===(i=null===(a=this.hass)||void 0===a?void 0:a.config)||void 0===i?void 0:i.time_zone}
        .overlayOpacity=${this._config.metadata_overlay_opacity}
        .overlayPosition=${this._config.metadata_overlay_position}
      ></bom-metadata-section>
    `}_renderRadarImage(){const t=this._config.image_zoom||1,e=this._config.image_fit||"contain",a=this._getControlsConfig(),i="object"==typeof a&&"overlay"===a.position,o=this._getMetadataConfig(),r="object"==typeof o&&"overlay"===o.position,s=this.getCurrentFrameUrl();return H`
      <div class="radar-image-container" style="--zoom: ${t};">
        ${this.isLoading?H`
              <div class="loading">
                <img class="loading-icon" src="/local/community/bom_local/icon.png" alt="BOM Local Radar" />
                <ha-circular-progress indeterminate></ha-circular-progress>
                <div class="loading-message">Loading radar data...</div>
              </div>
            `:s?H`
                <img 
                  class="radar-image radar-image-${e}"
                  src="${s}"
                  alt="Radar frame ${this.currentFrameIndex}"
                  style="transform: scale(${t}); transform-origin: center center;"
                  @error="${()=>{this.error={message:"Failed to load radar image",type:"unknown",retryable:!0,retryAction:()=>this.fetchRadarData()}}}"
                />
                ${i?this._renderControls("overlay"):""}
                ${r?this._renderMetadata("overlay"):""}
              `:""}
      </div>
    `}_renderControls(t){var e,a;const i=this._getControlsConfig();if(!i||"boolean"==typeof i&&!i)return H``;const o=this._getMetadataConfig(),r=o&&"object"==typeof o&&!1!==o.show_frame_times;return H`
      <bom-controls-section
        .frames=${this.frames}
        .currentFrameIndex=${this.currentFrameIndex}
        .isPlaying=${this.isPlaying}
        .isExtendedMode=${this.isExtendedMode}
        .radarData=${this.radarData}
        .config=${i}
        .position=${t}
        .locale=${this._getLocale()}
        .timeZone=${null===(a=null===(e=this.hass)||void 0===e?void 0:e.config)||void 0===a?void 0:a.time_zone}
        .overlayOpacity=${this._config.controls_overlay_opacity}
        .overlayPosition=${this._config.controls_overlay_position}
        .showFrameTimes=${r}
        .onFrameChange=${t=>this.showFrame(t)}
        .onPrevious=${()=>this.previousFrame()}
        .onNext=${()=>this.nextFrame()}
        .onJumpFrame=${t=>this.jumpFrame(t)}
        .onToggleAnimation=${()=>this.toggleAnimation()}
      ></bom-controls-section>
    `}render(){var t,e;if(!this._config)return H`<hui-warning>Configuration error</hui-warning>`;const a=!1!==this._config.show_card_title&&this._config.card_title?this._config.card_title:void 0;return this.error?H`
        <ha-card .header=${a} tabindex="0" role="region" aria-label="BOM Radar Card">
          <bom-error-display
            .error=${this.error}
            .locale=${this._getLocale()}
            .timeZone=${null===(e=null===(t=this.hass)||void 0===t?void 0:t.config)||void 0===e?void 0:e.time_zone}
            .onRetry=${()=>{var t;(null===(t=this.error)||void 0===t?void 0:t.retryAction)&&this.error.retryAction()}}
          ></bom-error-display>
        </ha-card>
      `:H`
      <ha-card 
        .header=${a}
        tabindex="0" 
        role="region" 
        aria-label="BOM Radar Card"
        class=${this._getRootClasses()}
      >
        <div id="root">
          ${this._renderMetadata("above")}
          ${this._renderControls("above")}
          ${this._renderRadarImage()}
          ${this._renderMetadata("below")}
          ${this._renderControls("below")}
        </div>
      </ha-card>
    `}_getRootClasses(){const t=[],e=this._getControlsConfig(),a="object"==typeof e&&"overlay"===e.position,i=this._getMetadataConfig(),o="object"==typeof i&&"overlay"===i.position;return(a||o)&&t.push("overlay-enabled"),t.join(" ")}};Mt.styles=[xt,wt,$t,Ct,At,Et],t([ht({attribute:!1})],Mt.prototype,"hass",void 0),t([ht({attribute:!1})],Mt.prototype,"_config",void 0),t([ht({attribute:!1})],Mt.prototype,"editMode",void 0),t([pt()],Mt.prototype,"radarData",void 0),t([pt()],Mt.prototype,"currentFrameIndex",void 0),t([pt()],Mt.prototype,"isLoading",void 0),t([pt()],Mt.prototype,"error",void 0),t([pt()],Mt.prototype,"animationTimer",void 0),t([pt()],Mt.prototype,"refreshTimer",void 0),t([pt()],Mt.prototype,"retryTimer",void 0),t([pt()],Mt.prototype,"isPlaying",void 0),t([pt()],Mt.prototype,"frames",void 0),t([pt()],Mt.prototype,"isExtendedMode",void 0),Mt=t([lt("bom-local-card")],Mt),customElements.get("bom-local-card")||customElements.define("bom-local-card",Mt);export{Mt as BomLocalRadarCard};
