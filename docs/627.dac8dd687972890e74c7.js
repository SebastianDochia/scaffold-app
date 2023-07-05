"use strict";(self.webpackChunkscaffold_app=self.webpackChunkscaffold_app||[]).push([[627],{6627:(Q,O,l)=>{l.d(O,{Hw:()=>V,Ps:()=>k});var r=l(7716),p=l(2458),P=l(9490),g=l(8583),f=l(5917),y=l(205),D=l(5758),T=l(5319),E=l(3342),d=l(8002),w=l(5304),N=l(8939),U=l(8819),x=l(5257),S=l(1841),C=l(9075);const B=["*"];function M(o){return Error(`Unable to find icon with the name "${o}"`)}function F(o){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${o}".`)}function R(o){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${o}".`)}class h{constructor(c,t,e){this.url=c,this.svgText=t,this.options=e}}let m=(()=>{class o{constructor(t,e,n,s){this._httpClient=t,this._sanitizer=e,this._errorHandler=s,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._resolvers=[],this._defaultFontSetClass="material-icons",this._document=n}addSvgIcon(t,e,n){return this.addSvgIconInNamespace("",t,e,n)}addSvgIconLiteral(t,e,n){return this.addSvgIconLiteralInNamespace("",t,e,n)}addSvgIconInNamespace(t,e,n,s){return this._addSvgIconConfig(t,e,new h(n,null,s))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,n,s){const i=this._sanitizer.sanitize(r.q3G.HTML,n);if(!i)throw R(n);return this._addSvgIconConfig(t,e,new h("",i,s))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace("",t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}addSvgIconSetInNamespace(t,e,n){return this._addSvgIconSetConfig(t,new h(e,null,n))}addSvgIconSetLiteralInNamespace(t,e,n){const s=this._sanitizer.sanitize(r.q3G.HTML,e);if(!s)throw R(e);return this._addSvgIconSetConfig(t,new h("",s,n))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){const e=this._sanitizer.sanitize(r.q3G.RESOURCE_URL,t);if(!e)throw F(t);const n=this._cachedIconsByUrl.get(e);return n?(0,f.of)(v(n)):this._loadSvgIconFromConfig(new h(t,null)).pipe((0,E.b)(s=>this._cachedIconsByUrl.set(e,s)),(0,d.U)(s=>v(s)))}getNamedSvgIcon(t,e=""){const n=A(e,t);let s=this._svgIconConfigs.get(n);if(s)return this._getSvgFromConfig(s);if(s=this._getIconConfigFromResolvers(e,t),s)return this._svgIconConfigs.set(n,s),this._getSvgFromConfig(s);const i=this._iconSetConfigs.get(e);return i?this._getSvgFromIconSetConfigs(t,i):(0,y._)(M(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?(0,f.of)(v(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe((0,d.U)(e=>v(e)))}_getSvgFromIconSetConfigs(t,e){const n=this._extractIconWithNameFromAnySet(t,e);if(n)return(0,f.of)(n);const s=e.filter(i=>!i.svgText).map(i=>this._loadSvgIconSetFromConfig(i).pipe((0,w.K)(a=>{const _=`Loading icon set URL: ${this._sanitizer.sanitize(r.q3G.RESOURCE_URL,i.url)} failed: ${a.message}`;return this._errorHandler.handleError(new Error(_)),(0,f.of)(null)})));return(0,D.D)(s).pipe((0,d.U)(()=>{const i=this._extractIconWithNameFromAnySet(t,e);if(!i)throw M(t);return i}))}_extractIconWithNameFromAnySet(t,e){for(let n=e.length-1;n>=0;n--){const s=e[n];if(s.svgText&&s.svgText.indexOf(t)>-1){const i=this._svgElementFromConfig(s),a=this._extractSvgIconFromSet(i,t,s.options);if(a)return a}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe((0,E.b)(e=>t.svgText=e),(0,d.U)(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?(0,f.of)(null):this._fetchIcon(t).pipe((0,E.b)(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,n){const s=t.querySelector(`[id="${e}"]`);if(!s)return null;const i=s.cloneNode(!0);if(i.removeAttribute("id"),"svg"===i.nodeName.toLowerCase())return this._setSvgAttributes(i,n);if("symbol"===i.nodeName.toLowerCase())return this._setSvgAttributes(this._toSvgElement(i),n);const a=this._svgElementFromString("<svg></svg>");return a.appendChild(i),this._setSvgAttributes(a,n)}_svgElementFromString(t){const e=this._document.createElement("DIV");e.innerHTML=t;const n=e.querySelector("svg");if(!n)throw Error("<svg> tag not found");return n}_toSvgElement(t){const e=this._svgElementFromString("<svg></svg>"),n=t.attributes;for(let s=0;s<n.length;s++){const{name:i,value:a}=n[s];"id"!==i&&e.setAttribute(i,a)}for(let s=0;s<t.childNodes.length;s++)t.childNodes[s].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[s].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}_fetchIcon(t){var e;const{url:n,options:s}=t,i=null!==(e=null==s?void 0:s.withCredentials)&&void 0!==e&&e;if(!this._httpClient)throw Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.");if(null==n)throw Error(`Cannot fetch icon from URL "${n}".`);const a=this._sanitizer.sanitize(r.q3G.RESOURCE_URL,n);if(!a)throw F(n);const u=this._inProgressUrlFetches.get(a);if(u)return u;const _=this._httpClient.get(a,{responseType:"text",withCredentials:i}).pipe((0,N.x)(()=>this._inProgressUrlFetches.delete(a)),(0,U.B)());return this._inProgressUrlFetches.set(a,_),_}_addSvgIconConfig(t,e,n){return this._svgIconConfigs.set(A(t,e),n),this}_addSvgIconSetConfig(t,e){const n=this._iconSetConfigs.get(t);return n?n.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){const e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let n=0;n<this._resolvers.length;n++){const s=this._resolvers[n](e,t);if(s)return K(s)?new h(s.url,null,s.options):new h(s,null)}}}return o.\u0275fac=function(t){return new(t||o)(r.LFG(S.eN,8),r.LFG(C.H7),r.LFG(g.K0,8),r.LFG(r.qLn))},o.\u0275prov=r.Yz7({factory:function(){return new o(r.LFG(S.eN,8),r.LFG(C.H7),r.LFG(g.K0,8),r.LFG(r.qLn))},token:o,providedIn:"root"}),o})();function v(o){return o.cloneNode(!0)}function A(o,c){return o+":"+c}function K(o){return!(!o.url||!o.options)}const z=(0,p.pj)(class{constructor(o){this._elementRef=o}}),H=new r.OlP("mat-icon-location",{providedIn:"root",factory:function(){const o=(0,r.f3M)(g.K0),c=o?o.location:null;return{getPathname:()=>c?c.pathname+c.search:""}}}),L=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],G=L.map(o=>`[${o}]`).join(", "),Y=/^url\(['"]?#(.*?)['"]?\)$/;let V=(()=>{class o extends z{constructor(t,e,n,s,i){super(t),this._iconRegistry=e,this._location=s,this._errorHandler=i,this._inline=!1,this._currentIconFetch=T.w.EMPTY,n||t.nativeElement.setAttribute("aria-hidden","true")}get inline(){return this._inline}set inline(t){this._inline=(0,P.Ig)(t)}get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}get fontSet(){return this._fontSet}set fontSet(t){const e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}get fontIcon(){return this._fontIcon}set fontIcon(t){const e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}_splitIconName(t){if(!t)return["",""];const e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){const t=this._elementsWithExternalReferences;if(t&&t.size){const e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();const e=t.querySelectorAll("style");for(let s=0;s<e.length;s++)e[s].textContent+=" ";const n=this._location.getPathname();this._previousPath=n,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(n),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){const t=this._elementRef.nativeElement;let e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){const n=t.childNodes[e];(1!==n.nodeType||"svg"===n.nodeName.toLowerCase())&&t.removeChild(n)}}_updateFontIconClasses(){if(!this._usingFontIcon())return;const t=this._elementRef.nativeElement,e=this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet):this._iconRegistry.getDefaultFontSetClass();e!=this._previousFontSetClass&&(this._previousFontSetClass&&t.classList.remove(this._previousFontSetClass),e&&t.classList.add(e),this._previousFontSetClass=e),this.fontIcon!=this._previousFontIconClass&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return"string"==typeof t?t.trim().split(" ")[0]:t}_prependPathToReferences(t){const e=this._elementsWithExternalReferences;e&&e.forEach((n,s)=>{n.forEach(i=>{s.setAttribute(i.name,`url('${t}#${i.value}')`)})})}_cacheChildrenWithExternalReferences(t){const e=t.querySelectorAll(G),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let s=0;s<e.length;s++)L.forEach(i=>{const a=e[s],u=a.getAttribute(i),_=u?u.match(Y):null;if(_){let I=n.get(a);I||(I=[],n.set(a,I)),I.push({name:i,value:_[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){const[e,n]=this._splitIconName(t);e&&(this._svgNamespace=e),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,e).pipe((0,x.q)(1)).subscribe(s=>this._setSvgElement(s),s=>{this._errorHandler.handleError(new Error(`Error retrieving icon ${e}:${n}! ${s.message}`))})}}}return o.\u0275fac=function(t){return new(t||o)(r.Y36(r.SBq),r.Y36(m),r.$8M("aria-hidden"),r.Y36(H),r.Y36(r.qLn))},o.\u0275cmp=r.Xpm({type:o,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:7,hostBindings:function(t,e){2&t&&(r.uIk("data-mat-icon-type",e._usingFontIcon()?"font":"svg")("data-mat-icon-name",e._svgName||e.fontIcon)("data-mat-icon-namespace",e._svgNamespace||e.fontSet),r.ekj("mat-icon-inline",e.inline)("mat-icon-no-color","primary"!==e.color&&"accent"!==e.color&&"warn"!==e.color))},inputs:{color:"color",inline:"inline",svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],features:[r.qOj],ngContentSelectors:B,decls:1,vars:0,template:function(t,e){1&t&&(r.F$t(),r.Hsn(0))},styles:[".mat-icon{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"],encapsulation:2,changeDetection:0}),o})(),k=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=r.oAB({type:o}),o.\u0275inj=r.cJS({imports:[[p.BQ],p.BQ]}),o})()}}]);