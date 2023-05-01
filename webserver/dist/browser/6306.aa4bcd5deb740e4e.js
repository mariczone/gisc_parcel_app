"use strict";(self.webpackChunkparcel_app=self.webpackChunkparcel_app||[]).push([[6306],{96306:(b,y,e)=>{e.r(y),e.d(y,{default:()=>W});var E=e(15861),s=e(17626),p=e(59318),P=e(84792),M=(e(20383),e(62208)),d=e(99959),O=e(10699),m=e(21726),_=e(77712),v=(e(90912),e(85931),e(68653)),C=e(76898),D=e(2004),h=e(37053),u=e(44917),c=e(552),S=e(49286),R=e(6647),L=e(30346),j=e(99555),n=e(13812),a=e(10012),g=e(52068),f=e(13546),T=e(57213),U=e(88493);const A=["atom","xml"],I={base:a.Z,key:"type",typeMap:{"simple-line":g.Z},errorContext:"symbol"},B={base:a.Z,key:"type",typeMap:{"picture-marker":f.Z,"simple-marker":T.Z},errorContext:"symbol"},K={base:a.Z,key:"type",typeMap:{"simple-fill":U.Z},errorContext:"symbol"};let o=class extends((0,c.h)((0,L.Q)((0,S.q)((0,R.I)((0,j.M)((0,d.R)(u.Z))))))){constructor(...t){super(...t),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(t,r){return"string"==typeof t?{url:t,...r}:t}readFeatureCollections(t,r){return r.featureCollection.layers.forEach(l=>{const i=l.layerDefinition.drawingInfo.renderer.symbol;i&&"esriSFS"===i.type&&i.outline?.style.includes("esriSFS")&&(i.outline.style="esriSLSSolid")}),r.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const t=this._get("title");return t&&"defaults"!==this.originOf("title")?t:this.url?(0,m.vt)(this.url,A)||"GeoRSS":t||""}set title(t){this._set("title",t)}load(t){const r=(0,M.pC)(t)?t.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},t).catch(O.r9).then(()=>this._fetchService(r)).then(l=>{this.read(l,{origin:"service"})})),Promise.resolve(this)}hasDataChanged(){var t=this;return(0,E.Z)(function*(){const r=yield t._fetchService();return t.read(r,{origin:"service",ignoreDefaults:!0}),!0})()}_fetchService(t){var r=this;return(0,E.Z)(function*(){const l=r.spatialReference,{data:i}=yield(0,P.default)(p.Z.geoRSSServiceUrl,{query:{url:r.url,refresh:!!r.loaded||void 0,outSR:(0,h.oR)(l)?void 0:l.wkid??JSON.stringify(l)},signal:t});return i})()}_hasGeometry(t){return this.featureCollections?.some(r=>r.featureSet?.geometryType===t&&r.featureSet.features?.length>0)??!1}};(0,s._)([(0,_.Cb)()],o.prototype,"description",void 0),(0,s._)([(0,_.Cb)()],o.prototype,"featureCollections",void 0),(0,s._)([(0,v.r)("service","featureCollections",["featureCollection.layers"])],o.prototype,"readFeatureCollections",null),(0,s._)([(0,_.Cb)({type:D.Z,json:{name:"lookAtExtent"}})],o.prototype,"fullExtent",void 0),(0,s._)([(0,_.Cb)(n.id)],o.prototype,"id",void 0),(0,s._)([(0,_.Cb)(n.rn)],o.prototype,"legendEnabled",void 0),(0,s._)([(0,_.Cb)({types:I,json:{write:!0}})],o.prototype,"lineSymbol",void 0),(0,s._)([(0,_.Cb)({type:["show","hide"]})],o.prototype,"listMode",void 0),(0,s._)([(0,_.Cb)({types:B,json:{write:!0}})],o.prototype,"pointSymbol",void 0),(0,s._)([(0,_.Cb)({types:K,json:{write:!0}})],o.prototype,"polygonSymbol",void 0),(0,s._)([(0,_.Cb)({type:["GeoRSS"]})],o.prototype,"operationalLayerType",void 0),(0,s._)([(0,_.Cb)(n.HQ)],o.prototype,"url",void 0),(0,s._)([(0,_.Cb)({json:{origins:{service:{read:{source:"name",reader:t=>t||void 0}}}}})],o.prototype,"title",null),(0,s._)([(0,_.Cb)({readOnly:!0,json:{read:!1},value:"geo-rss"})],o.prototype,"type",void 0),o=(0,s._)([(0,C.j)("esri.layers.GeoRSSLayer")],o);const W=o}}]);