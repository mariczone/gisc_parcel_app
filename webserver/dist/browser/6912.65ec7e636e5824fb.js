"use strict";(self.webpackChunkparcel_app=self.webpackChunkparcel_app||[]).push([[6912],{52489:(O,c,s)=>{s.d(c,{D:()=>y});var o=s(22558);function y(u){u&&u.writtenProperties&&u.writtenProperties.forEach(({target:d,propName:i,newOrigin:_})=>{(0,o.l)(d)&&_&&d.originOf(i)!==_&&d.updateOrigin(i,_)})}},22558:(O,c,s)=>{function o(y){return y&&"getAtOrigin"in y&&"originOf"in y}s.d(c,{l:()=>o})},36912:(O,c,s)=>{s.r(c),s.d(c,{save:()=>ue,saveAll:()=>pe,saveAs:()=>ye});var o=s(15861),y=s(85931),u=s(26584),d=s(63290),i=s(62208),_=s(10699),E=s(52489),P=s(80415),g=s(38305),v=s(17196),w=s(72469),H=s(84687),X=s(55463),M=s(88755),m=s(37281);const k=d.Z.getLogger("esri.layers.FeatureLayer"),I="Feature Service";function D(e,t){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${t}`}function N(e,t){if(t.type!==I)throw new u.Z("feature-layer:portal-item-wrong-type",D(e,`should have portal item of type "${I}"`))}function J(e){return x.apply(this,arguments)}function x(){return(x=(0,o.Z)(function*(e){if(yield e.load(),(0,w.rQ)(e))throw new u.Z("feature-layer:save",D(e,"using an in-memory source cannot be saved to a portal item"))})).apply(this,arguments)}function q(e,t){let a=(e.messages??[]).filter(({type:r})=>"error"===r).map(({name:r,message:l,details:n})=>new u.Z(r,l,n));if(t?.ignoreUnsupported&&(a=a.filter(({name:r})=>"layer:unsupported"!==r&&"symbol:unsupported"!==r&&"symbol-layer:unsupported"!==r&&"property:unsupported"!==r&&"url:unsupported"!==r)),a.length>0)throw new u.Z("feature-layer:save","Failed to save feature layer due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:a})}function T(e,t,a){return U.apply(this,arguments)}function U(){return(U=(0,o.Z)(function*(e,t,a){"beforeSave"in e&&"function"==typeof e.beforeSave&&(yield e.beforeSave());const r=e.write({},t);return q(t,a),r})).apply(this,arguments)}function $(e){const{layer:t,layerJSON:a}=e;return t.isTable?{layers:[],tables:[a]}:{layers:[a],tables:[]}}function K(e){(0,m.qj)(e,m.Kz.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((t,a,r)=>r.indexOf(t)===a))}function ee(e){const t=e.portalItem;if(!t)throw k.error("save: requires the portalItem property to be set"),new u.Z("feature-layer:portal-item-not-set",D(e,"requires the portalItem property to be set"));if(!t.loaded)throw new u.Z("feature-layer:portal-item-not-loaded",D(e,"cannot be saved to a portal item that does not exist or is inaccessible"));N(e,t)}function z(e,t){return L.apply(this,arguments)}function L(){return(L=(0,o.Z)(function*(e,t){return/\/\d+\/?$/.test(e.url??"")?$(t[0]):te(e,t)})).apply(this,arguments)}function te(e,t){return A.apply(this,arguments)}function A(){return(A=(0,o.Z)(function*(e,t){const{layer:{url:a,customParameters:r,apiKey:l}}=t[0];let n=yield e.fetchData("json");n&&null!=n.layers&&null!=n.tables||(n=yield re(n,{url:a??"",customParameters:r,apiKey:l},t.map(p=>p.layer.layerId)));for(const p of t)Y(p.layer,p.layerJSON,n);return n})).apply(this,arguments)}function re(e,t,a){return j.apply(this,arguments)}function j(){return(j=(0,o.Z)(function*(e,t,a){var r,l;e||(e={}),(r=e).layers||(r.layers=[]),(l=e).tables||(l.tables=[]);const{url:n,customParameters:p,apiKey:f}=t,{serviceJSON:h,layersJSON:W}=yield(0,v.V)(n,{customParameters:p,apiKey:f}),V=F(e.layers,h.layers,a),Q=F(e.tables,h.tables,a);e.layers=V.itemResources,e.tables=Q.itemResources;const ce=[...V.added,...Q.added],fe=W?[...W.layers,...W.tables]:[];return yield ae(e,ce,n,fe),e})).apply(this,arguments)}function F(e,t,a){const r=(0,y.e5)(e,t,(n,p)=>n.id===p.id);e=e.filter(n=>!r.removed.some(p=>p.id===n.id));const l=r.added.map(({id:n})=>({id:n}));return l.forEach(({id:n})=>{e.push({id:n})}),{itemResources:e,added:l.filter(({id:n})=>!a.includes(n))}}function ae(e,t,a,r){return C.apply(this,arguments)}function C(){return(C=(0,o.Z)(function*(e,t,a,r){const l=t.map(({id:n})=>new P.default({url:a,layerId:n,sourceJSON:r.find(({id:p})=>p===n)}));yield(0,_.as)(l.map(n=>n.load())),l.forEach(n=>{const{layerId:p,loaded:f,defaultPopupTemplate:h}=n;!f||(0,i.Wi)(h)||Y(n,{id:p,popupInfo:h.toJSON()},e)})})).apply(this,arguments)}function Y(e,t,a){!function G(e,t){if(!e)return;const a=e.findIndex(({id:r})=>r===t.id);-1===a?e.push(t):e[a]=t}(e.isTable?a.tables:a.layers,t)}function ne(e){const{portalItem:t}=e;return(0,w.y2)(e)&&!e.dynamicDataSource&&!!t?.loaded&&t.type===I}function R(){return(R=(0,o.Z)(function*(e){if(!e?.length)throw new u.Z("feature-layer-utils-saveall:missing-parameters","'layers' array should contain at least one feature layer");yield Promise.all(e.map(r=>r.load()));for(const r of e)if(!ne(r))throw new u.Z("feature-layer-utils-saveall:invalid-parameters",`'layers' array should only contain layers or tables in a feature service loaded from 'Feature Service' item. ${D(r,"does not conform")}`,{layer:r});const t=e.map(r=>r.portalItem.id);if(new Set(t).size>1)throw new u.Z("feature-layer-utils-saveall:invalid-parameters","All layers in the 'layers' array should be loaded from the same portal item");const a=e.map(r=>r.layerId);if(new Set(a).size!==a.length)throw new u.Z("feature-layer-utils-saveall:invalid-parameters","'layers' array should contain only one instance each of layer or table in a feature service")})).apply(this,arguments)}function le(e,t){var a,r;let l=X.default.from(t);return l.id&&(l=l.clone(),l.id=null),(a=l).type??(a.type=I),(r=l).portal??(r.portal=H.Z.getDefault()),N(e,l),l}function oe(e,t){return S.apply(this,arguments)}function S(){return(S=(0,o.Z)(function*(e,t){const{url:a,layerId:r,title:l,fullExtent:n,isTable:p}=e,f=(0,g.Qc)(a),h=(0,i.pC)(f)&&"FeatureServer"===f.serverType;t.url=h?a:`${a}/${r}`,t.title||(t.title=l),t.extent=null,!p&&(0,i.pC)(n)&&(t.extent=yield(0,m.$o)(n)),(0,m.ck)(t,m.Kz.METADATA),(0,m.ck)(t,m.Kz.MULTI_LAYER),(0,m.qj)(t,m.Kz.SINGLE_LAYER),p&&(0,m.qj)(t,m.Kz.TABLE),K(t)})).apply(this,arguments)}function ie(e,t,a){return Z.apply(this,arguments)}function Z(){return(Z=(0,o.Z)(function*(e,t,a){const r=e.portal;yield r?.signIn(),yield r?.user?.addItem({item:e,data:t,folder:a?.folder})})).apply(this,arguments)}const ue=(0,_.Ds)(function _e(e,t){return b.apply(this,arguments)});function b(){return(b=(0,o.Z)(function*(e,t){yield J(e),ee(e);const a=e.portalItem,r=(0,M.Y)(a),l=yield T(e,r,t),n=yield z(a,[{layer:e,layerJSON:l}]);return K(a),yield a.update({data:n}),(0,E.D)(r),a})).apply(this,arguments)}const pe=(0,_.Ds)(function(){var e=(0,o.Z)(function*(t,a){yield function se(e){return R.apply(this,arguments)}(t);const r=t[0].portalItem,l=(0,M.Y)(r),n=yield Promise.all(t.map(f=>T(f,l,a))),p=yield z(r,t.map((f,h)=>({layer:f,layerJSON:n[h]})));return K(r),yield r.update({data:p}),yield Promise.all(t.slice(1).map(f=>f.portalItem.reload())),(0,E.D)(l),r.clone()});return function(t,a){return e.apply(this,arguments)}}()),ye=(0,_.Ds)(function de(e,t,a){return B.apply(this,arguments)});function B(){return(B=(0,o.Z)(function*(e,t,a){yield J(e);const r=le(e,t),l=(0,M.Y)(r),n=$({layer:e,layerJSON:yield T(e,l,a)});return yield oe(e,r),yield ie(r,n,a),e.portalItem=r,(0,E.D)(l),r})).apply(this,arguments)}},17196:(O,c,s)=>{s.d(c,{V:()=>u});var o=s(15861),y=s(45205);function u(_,E){return d.apply(this,arguments)}function d(){return(d=(0,o.Z)(function*(_,E){const P=yield(0,y.T)(_,E);P.layers=P.layers.filter(i);const g={serviceJSON:P};if((P.currentVersion??0)<10.5)return g;const v=yield(0,y.T)(_+"/layers",E);return g.layersJSON={layers:v.layers.filter(i),tables:v.tables},g})).apply(this,arguments)}function i(_){return!_.type||"Feature Layer"===_.type}},88755:(O,c,s)=>{s.d(c,{Y:()=>d,h:()=>u});var o=s(21726),y=s(84687);function u(i){return{origin:"portal-item",url:(0,o.mN)(i.itemUrl),portal:i.portal||y.Z.getDefault(),portalItem:i,readResourcePaths:[]}}function d(i){return{origin:"portal-item",messages:[],writtenProperties:[],url:i.itemUrl?(0,o.mN)(i.itemUrl):null,portal:i.portal||y.Z.getDefault(),portalItem:i}}},45205:(O,c,s)=>{s.d(c,{T:()=>u});var o=s(15861),y=s(84792);function u(i,_){return d.apply(this,arguments)}function d(){return(d=(0,o.Z)(function*(i,_){const{data:E}=yield(0,y.default)(i,{responseType:"json",query:{f:"json",..._?.customParameters,token:_?.apiKey}});return E})).apply(this,arguments)}}}]);