"use strict";(self.webpackChunkparcel_app=self.webpackChunkparcel_app||[]).push([[9628],{58775:(_e,z,c)=>{c.d(z,{O3:()=>X,lG:()=>de,my:()=>pe,q9:()=>f});var O=c(26584),ee=c(66385),F=c(88071),h=c(36630);const H={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function f(e){return H[e]}function*G(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*B(e){if(e)switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const n of t)yield*n}}function Q(e){for(const t of e)if(t.length>2)return!0;return!1}function S(e){let t=0;for(let n=0;n<e.length;n++){const a=e[n],p=e[(n+1)%e.length];t+=a[0]*p[1]-p[0]*a[1]}return t<=0}function K(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function M(e,t,n){switch(t.type){case"LineString":return function k(e,t,n){return C(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function V(e,t,n){for(const a of t.coordinates)C(e,a,n);return e}(e,t,n);case"MultiPoint":return function ae(e,t,n){return C(e,t.coordinates,n),e}(e,t,n);case"MultiPolygon":return function le(e,t,n){for(const a of t.coordinates){N(e,a[0],n);for(let p=1;p<a.length;p++)te(e,a[p],n)}return e}(e,t,n);case"Point":return function q(e,t,n){return Z(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function ue(e,t,n){const a=t.coordinates;N(e,a[0],n);for(let p=1;p<a.length;p++)te(e,a[p],n);return e}(e,t,n)}}function N(e,t,n){const a=K(t);!function g(e){return!S(e)}(a)?C(e,a,n):ne(e,a,n)}function te(e,t,n){const a=K(t);!function I(e){return S(e)}(a)?C(e,a,n):ne(e,a,n)}function C(e,t,n){for(const a of t)Z(e,a,n);e.lengths.push(t.length)}function ne(e,t,n){for(let a=t.length-1;a>=0;a--)Z(e,t[a],n);e.lengths.push(t.length)}function Z(e,t,n){const[a,p,T]=t;e.coords.push(a,p),n.hasZ&&e.coords.push(T||0)}function ce(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function X(e){if(!e)throw new O.Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new O.Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:t}=e;if(!t)return;const n="string"==typeof t?t:"name"===t.type?t.properties.name:"EPSG"===t.type?t.properties.code:null,a=new RegExp(".*(CRS84H?|4326)$","i");if(!n||!a.test(n))throw new O.Z("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}function pe(e,t={}){const n=[],a=new Set,p=new Set;let T,x=!1,E=null,D=!1,{geometryType:b=null}=t,j=!1;for(const o of G(e)){const{geometry:s,properties:i,id:u}=o;if((!s||(b||(b=f(s.type)),f(s.type)===b))&&(x||(x=Q(B(s))),D||(D=null!=u,D&&(T=typeof u,i&&(E=Object.keys(i).filter(y=>i[y]===u)))),i&&E&&D&&null!=u&&(E.length>1?E=E.filter(y=>i[y]===u):1===E.length&&(E=i[E[0]]===u?E:[])),!j&&i)){let y=!0;for(const m in i){if(a.has(m))continue;const d=i[m];if(null==d){y=!1,p.add(m);continue}const w=ce(d);if("unknown"===w){p.add(m);continue}p.delete(m),a.add(m);const A=(0,h.q6)(m);A&&n.push({name:A,alias:m,type:w})}j=y}}const r=(0,h.q6)(1===E?.length&&E[0]||null)??void 0;if(r)for(const o of n)if(o.name===r&&(0,h.H7)(o)){o.type="esriFieldTypeOID";break}return{fields:n,geometryType:b,hasZ:x,objectIdFieldName:r,objectIdFieldType:T,unknownFields:Array.from(p)}}function de(e,t){return Array.from(function*R(e,t={}){const{geometryType:n,objectIdField:a}=t;for(const p of e){const{geometry:T,properties:x,id:E}=p;if(T&&f(T.type)!==n)continue;const D=x||{};let b;a&&(b=D[a],null==E||b||(D[a]=b=E)),yield new ee.u_(T?M(new F.Z,T,t):null,D,null,b??void 0)}}(G(e),t))}},56554:(_e,z,c)=>{c.d(z,{Dm:()=>B,Hq:()=>R,MS:()=>Q,bU:()=>H});var O=c(8314),ee=c(58817),F=c(87757),h=c(24837);function H(g){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===g||"esriGeometryMultipoint"===g?h.I4:"esriGeometryPolyline"===g?h.ET:h.lF}}}const f=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let G=1;function B(g,I){if((0,O.Z)("esri-csp-restrictions"))return()=>({[I]:null,...g});try{let S=`this.${I} = null;`;for(const M in g)S+=`this${f.test(M)?`.${M}`:`["${M}"]`} = ${JSON.stringify(g[M])};`;const K=new Function(`\n      return class AttributesClass$${G++} {\n        constructor() {\n          ${S};\n        }\n      }\n    `)();return()=>new K}catch{return()=>({[I]:null,...g})}}function R(g={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,ee.d9)(g)}}]}function Q(g,I){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:g},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:I,supportsDelete:I,supportsEditing:I,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:I,supportsExceedsLimitStatistics:!0},query:F.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:I,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},89628:(_e,z,c)=>{c.d(z,{$9:()=>ae,G4:()=>te,Lu:()=>V,WW:()=>t,d:()=>pe,eS:()=>ce,gp:()=>ne,j:()=>ue,w9:()=>le,yN:()=>de});var O=c(15861),F=(c(29132),c(84792)),h=c(26584),H=c(63290),f=c(62208),G=c(37053),B=c(46367),R=c(82054),Q=c(95786),g=c(58775),I=c(56554),S=c(60466),K=c(85),M=c(65234);const k=H.Z.getLogger("esri.layers.graphics.sources.ogcfeature"),V="http://www.opengis.net/def/crs/",ae=`${V}OGC/1.3/CRS84`;function le(r,o){return q.apply(this,arguments)}function q(){return(q=(0,O.Z)(function*(r,o,s={},i=5){const{links:u}=r,y=j(u,"items","application/geo+json")||j(u,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if((0,f.Wi)(y))throw new h.Z("ogc-feature-layer:missing-items-page","Missing items url");const{data:m}=yield(0,F.default)(y.href,{signal:s.signal,query:{limit:i,...s.customParameters,token:s.apiKey},headers:{accept:"application/geo+json"}});yield(0,g.O3)(m);const d=(0,g.my)(m,{geometryType:o.geometryType}),w=o.fields||d.fields||[],A=null!=o.hasZ?o.hasZ:d.hasZ,$=d.geometryType,W=o.objectIdField||d.objectIdFieldName||"OBJECTID";let _=o.timeInfo;const Y=w.find(({name:l})=>l===W);if(Y)Y.editable=!1,Y.nullable=!1;else{if(!d.objectIdFieldType)throw new h.Z("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");w.unshift({name:W,alias:W,type:"number"===d.objectIdFieldType?"esriFieldTypeOID":"esriFieldTypeString",editable:!1,nullable:!1})}if(W!==d.objectIdFieldName){const l=w.find(({name:P})=>P===d.objectIdFieldName);l&&(l.type="esriFieldTypeInteger")}w===d.fields&&d.unknownFields.length>0&&k.warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:d.unknownFields}});for(const l of w){if(null==l.name&&(l.name=l.alias),null==l.alias&&(l.alias=l.name),"esriFieldTypeOID"!==l.type&&"esriFieldTypeGlobalID"!==l.type&&(l.editable=null==l.editable||!!l.editable,l.nullable=null==l.nullable||!!l.nullable),!l.name)throw new h.Z("ogc-feature-layer:invalid-field-name","field name is missing",{field:l});if(!K.v.jsonValues.includes(l.type))throw new h.Z("ogc-feature-layer:invalid-field-type",`invalid type for field "${l.name}"`,{field:l})}if(_){const l=new S.Z(w);if(_.startTimeField){const P=l.get(_.startTimeField);P?(_.startTimeField=P.name,P.type="esriFieldTypeDate"):_.startTimeField=null}if(_.endTimeField){const P=l.get(_.endTimeField);P?(_.endTimeField=P.name,P.type="esriFieldTypeDate"):_.endTimeField=null}if(_.trackIdField){const P=l.get(_.trackIdField);P?_.trackIdField=P.name:(_.trackIdField=null,k.warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:_}}))}_.startTimeField||_.endTimeField||(k.warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:_}}),_=null)}return{drawingInfo:$?(0,I.bU)($):null,extent:b(r),geometryType:$,fields:w,hasZ:!!A,objectIdField:W,timeInfo:_}})).apply(this,arguments)}function ue(r){return N.apply(this,arguments)}function N(){return(N=(0,O.Z)(function*(r,o={}){const{links:s}=r,i=j(s,"data","application/json")||j(s,"http://www.opengis.net/def/rel/ogc/1.0/data","application/json");if((0,f.Wi)(i))throw new h.Z("ogc-feature-layer:missing-collections-page","Missing collections url");const{apiKey:u,customParameters:y,signal:m}=o,{data:d}=yield(0,F.default)(i.href,{signal:m,headers:{accept:"application/json"},query:{...y,token:u}});return d})).apply(this,arguments)}function te(r){return C.apply(this,arguments)}function C(){return(C=(0,O.Z)(function*(r,o={}){const{links:s}=r,i=j(s,"conformance","application/json")||j(s,"http://www.opengis.net/def/rel/ogc/1.0/conformance","application/json");if((0,f.Wi)(i))throw new h.Z("ogc-feature-layer:missing-conformance-page","Missing conformance url");const{apiKey:u,customParameters:y,signal:m}=o,{data:d}=yield(0,F.default)(i.href,{signal:m,headers:{accept:"application/json"},query:{...y,token:u}});return d})).apply(this,arguments)}function ne(r){return Z.apply(this,arguments)}function Z(){return(Z=(0,O.Z)(function*(r,o={}){const{apiKey:s,customParameters:i,signal:u}=o,{data:y}=yield(0,F.default)(r,{signal:u,headers:{accept:"application/json"},query:{...i,token:s}});return y})).apply(this,arguments)}function ce(r){return X.apply(this,arguments)}function X(){return(X=(0,O.Z)(function*(r,o={}){const s="application/vnd.oai.openapi+json;version=3.0",i=j(r.links,"service-desc",s);if((0,f.Wi)(i))return k.warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const{apiKey:u,customParameters:y,signal:m}=o,{data:d}=yield(0,F.default)(i.href,{signal:m,headers:{accept:s},query:{...y,token:u}});return d})).apply(this,arguments)}function pe(r){const o=/^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(r)?.groups;if(!o)return null;const{authority:s,code:i}=o;switch(s.toLowerCase()){case"ogc":switch(i.toLowerCase()){case"crs27":return M.Z.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return M.Z.WGS84.wkid;default:return null}case"esri":case"epsg":{const u=Number.parseInt(i,10);return Number.isNaN(u)?null:u}default:return null}}function de(r,o,s){return e.apply(this,arguments)}function e(){return(e=(0,O.Z)(function*(r,o,s){const i=yield t(r,o,s);return(0,R.cn)(i)})).apply(this,arguments)}function t(r,o,s){return n.apply(this,arguments)}function n(){return(n=(0,O.Z)(function*(r,o,s){const{collection:i,layerDefinition:u,maxRecordCount:y,queryParameters:{apiKey:m,customParameters:d},spatialReference:w,supportedCrs:A}=r,{links:$}=i,W=j($,"items","application/geo+json")||j($,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if((0,f.Wi)(W))throw new h.Z("ogc-feature-layer:missing-items-page","Missing items url");const{geometry:_,num:Y,start:l,timeExtent:P,where:ge}=o;if(o.objectIds)throw new h.Z("ogc-feature-layer:query-by-objectids-not-supported","Queries with objectids are not supported");const he=M.Z.fromJSON(w),J=(0,f.Pt)(o.outSpatialReference,he),re=J.isWGS84?null:p(J,A),Ee=D(_,A),Pe=x(P),Oe=E(ge),Ie=Y??(null!=l&&void 0!==l?10:y),{data:L}=yield(0,F.default)(W.href,{...s,query:{...d,...Ee,crs:re,datetime:Pe,query:Oe,limit:Ie,startindex:l,token:m},headers:{accept:"application/geo+json"}});let oe=!1;L.links&&(oe=!!L.links.find(ie=>"next"===ie.rel)),!oe&&Number.isInteger(L.numberMatched)&&Number.isInteger(L.numberReturned)&&(oe=L.numberReturned<L.numberMatched);const{fields:Me,geometryType:se,hasZ:fe,objectIdField:ye}=u,me=(0,g.lG)(L,{geometryType:se,hasZ:fe,objectIdField:ye});if(!re&&J.isWebMercator)for(const U of me)if((0,f.pC)(U.geometry)&&null!=se){const ie=(0,R.di)(U.geometry,se,fe,!1);ie.spatialReference=M.Z.WGS84,U.geometry=(0,R.GH)((0,B.iV)(ie,J))}for(const U of me)U.objectId=U.attributes[ye];const Te=re||!re&&J.isWebMercator?J.toJSON():G.Zn,v=new Q.Z;return v.exceededTransferLimit=oe,v.features=me,v.fields=Me,v.geometryType=se,v.hasZ=fe,v.objectIdFieldName=ye,v.spatialReference=Te,v})).apply(this,arguments)}function p(r,o){const{isWebMercator:s,wkid:i}=r;if(!i)return null;const u=s?o[3857]??o[102100]??o[102113]??o[900913]:o[r.wkid];return u?`${V}${u}`:null}function T(r){if((0,f.Wi)(r))return"";const{xmin:o,ymin:s,xmax:i,ymax:u}=r;return`${o},${s},${i},${u}`}function x(r){if((0,f.Wi)(r))return null;const{start:o,end:s}=r;return`${(0,f.pC)(o)?o.toISOString():".."}/${(0,f.pC)(s)?s.toISOString():".."}`}function E(r){return(0,f.Wi)(r)||!r||"1=1"===r?null:r}function D(r,o){if(!function a(r){return(0,f.pC)(r)&&"extent"===r.type}(r))return null;const{spatialReference:s}=r;if(!s||s.isWGS84)return{bbox:T(r)};const i=p(s,o);return(0,f.pC)(i)?{bbox:T(r),"bbox-crs":i}:s.isWebMercator?{bbox:T((0,B.iV)(r,M.Z.WGS84))}:null}function b(r){const o=r.extent?.spatial;if(!o)return null;const s=o.bbox[0],i=4===s.length;return{xmin:s[0],ymin:s[1],xmax:i?s[2]:s[3],ymax:i?s[3]:s[4],zmin:i?void 0:s[2],zmax:i?void 0:s[5],spatialReference:M.Z.WGS84.toJSON()}}function j(r,o,s){return r.find(i=>i.rel===o&&i.type===s)||r.find(i=>i.rel===o&&!i.type)}}}]);