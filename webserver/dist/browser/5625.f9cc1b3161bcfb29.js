"use strict";(self.webpackChunkparcel_app=self.webpackChunkparcel_app||[]).push([[5625],{85625:(I,c,o)=>{o.r(c),o.d(c,{default:()=>A});var a=o(15861),s=o(17626),y=(o(29132),o(26584)),v=o(62208),g=o(10699),O=o(21726),i=o(77712),u=(o(90912),o(85931),o(68653)),p=o(76898),f=o(80415),F=o(8314),h=o(47996),x=o(59289),N=o(17253),T=o(2004);let d=class extends h.Z{constructor(e){var t;super(e),t=this,this.type="csv",this.refresh=(0,g.Ds)(function(){var r=(0,a.Z)(function*(l){yield t.load();const{extent:S,timeExtent:m}=yield t._connection.invoke("refresh",l);return S&&(t.sourceJSON.extent=S),m&&(t.sourceJSON.timeInfo.timeExtent=[m.start,m.end]),{dataChanged:!0,updates:{extent:t.sourceJSON.extent,timeInfo:t.sourceJSON.timeInfo}}});return function(l){return r.apply(this,arguments)}}())}load(e){const t=(0,v.pC)(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null}openPorts(){var e=this;return(0,a.Z)(function*(){return yield e.load(),e._connection.openPorts()})()}queryFeatures(e,t={}){var r=this;return(0,a.Z)(function*(){yield r.load(t);const l=yield r._connection.invoke("queryFeatures",e?e.toJSON():null,t);return N.Z.fromJSON(l)})()}queryFeaturesJSON(e,t={}){var r=this;return(0,a.Z)(function*(){return yield r.load(t),r._connection.invoke("queryFeatures",e?e.toJSON():null,t)})()}queryFeatureCount(e,t={}){var r=this;return(0,a.Z)(function*(){return yield r.load(t),r._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)})()}queryObjectIds(e,t={}){var r=this;return(0,a.Z)(function*(){return yield r.load(t),r._connection.invoke("queryObjectIds",e?e.toJSON():null,t)})()}queryExtent(e,t={}){var r=this;return(0,a.Z)(function*(){yield r.load(t);const l=yield r._connection.invoke("queryExtent",e?e.toJSON():null,t);return{count:l.count,extent:T.Z.fromJSON(l.extent)}})()}querySnapping(e,t={}){var r=this;return(0,a.Z)(function*(){return yield r.load(t),r._connection.invoke("querySnapping",e,t)})()}_startWorker(e){var t=this;return(0,a.Z)(function*(){t._connection=yield(0,x.bA)("CSVSourceWorker",{strategy:(0,F.Z)("feature-layers-workers")?"dedicated":"local",signal:e});const{url:r,delimiter:l,fields:S,latitudeField:m,longitudeField:L,spatialReference:J,timeInfo:U}=t.loadOptions,b=yield t._connection.invoke("load",{url:r,customParameters:t.customParameters,parsingOptions:{delimiter:l,fields:S?.map(Q=>Q.toJSON()),latitudeField:m,longitudeField:L,spatialReference:J?.toJSON(),timeInfo:U?.toJSON()}},{signal:e});t.locationInfo=b.locationInfo,t.sourceJSON=b.layerDefinition,t.delimiter=b.delimiter})()}};(0,s._)([(0,i.Cb)()],d.prototype,"type",void 0),(0,s._)([(0,i.Cb)()],d.prototype,"loadOptions",void 0),(0,s._)([(0,i.Cb)()],d.prototype,"customParameters",void 0),(0,s._)([(0,i.Cb)()],d.prototype,"locationInfo",void 0),(0,s._)([(0,i.Cb)()],d.prototype,"sourceJSON",void 0),(0,s._)([(0,i.Cb)()],d.prototype,"delimiter",void 0),d=(0,s._)([(0,p.j)("esri.layers.graphics.sources.CSVSource")],d);var j=o(56554),C=o(96854),Z=o(29840),M=o(65234);function R(e,t){throw new y.Z(t,`CSVLayer (title: ${e.title}, id: ${e.id}) cannot be saved to a portal item`)}let n=class extends f.default{constructor(...e){super(...e),this.geometryType="point",this.capabilities=(0,j.MS)(!1,!1),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.spatialReference=M.Z.WGS84,this.source=null,this.type="csv"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){var t=this;const r=(0,v.pC)(e)?e.signal:null,l=this.loadFromPortal({supportedTypes:["CSV"],supportsData:!1},e).catch(g.r9).then((0,a.Z)(function*(){return t.initLayerProperties(yield t.createGraphicsSource(r))}));return this.addResolvingPromise(l),Promise.resolve(this)}get isTable(){return this.loaded&&null==this.geometryType}readWebMapLabelsVisible(e,t){return null!=t.showLabels?t.showLabels:!!(t.layerDefinition&&t.layerDefinition.drawingInfo&&t.layerDefinition.drawingInfo.labelingInfo)}set url(e){if(!e)return void this._set("url",e);const t=(0,O.mN)(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query})}createGraphicsSource(e){var t=this;return(0,a.Z)(function*(){const r=new d({loadOptions:{delimiter:t.delimiter,fields:t.fields,latitudeField:t.latitudeField??void 0,longitudeField:t.longitudeField??void 0,spatialReference:t.spatialReference??void 0,timeInfo:t.timeInfo??void 0,url:t.url},customParameters:t.customParameters??void 0});return t._set("source",r),yield r.load({signal:e}),t.read({locationInfo:r.locationInfo,columnDelimiter:r.delimiter},{origin:"service",url:t.parsedUrl}),r})()}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(C.Z.from(e)||this.createQuery())).then(r=>{if(r?.features)for(const l of r.features)l.layer=l.sourceLayer=this;return r})}queryObjectIds(e,t){return this.load().then(()=>this.source.queryObjectIds(C.Z.from(e)||this.createQuery()))}queryFeatureCount(e,t){return this.load().then(()=>this.source.queryFeatureCount(C.Z.from(e)||this.createQuery()))}queryExtent(e,t){return this.load().then(()=>this.source.queryExtent(C.Z.from(e)||this.createQuery()))}read(e,t){super.read(e,t),t&&"service"===t.origin&&this.revert(["latitudeField","longitudeField"],"service")}write(e,t){return super.write(e,{...t,writeLayerSchema:!0})}clone(){throw new y.Z("csv-layer:clone",`CSVLayer (title: ${this.title}, id: ${this.id}) cannot be cloned`)}save(e){var t=this;return(0,a.Z)(function*(){return R(t,"csv-layer:save")})()}saveAs(e,t){var r=this;return(0,a.Z)(function*(){return R(r,"csv-layer:save-as")})()}hasDataChanged(){var e=this;return(0,a.Z)(function*(){try{const{dataChanged:t,updates:r}=yield e.source.refresh(e.customParameters);return(0,v.pC)(r)&&e.read(r,{origin:"service",url:e.parsedUrl,ignoreDefaults:!0}),t}catch{}return!1})()}_verifyFields(){}_verifySource(){}_hasMemorySource(){return!1}};(0,s._)([(0,i.Cb)({readOnly:!0,json:{read:!1,write:!1}})],n.prototype,"capabilities",void 0),(0,s._)([(0,i.Cb)({type:[","," ",";","|","\t"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],n.prototype,"delimiter",void 0),(0,s._)([(0,i.Cb)({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],n.prototype,"editingEnabled",void 0),(0,s._)([(0,i.Cb)({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],n.prototype,"fields",void 0),(0,s._)([(0,i.Cb)({type:Boolean,readOnly:!0})],n.prototype,"isTable",null),(0,s._)([(0,u.r)("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],n.prototype,"readWebMapLabelsVisible",null),(0,s._)([(0,i.Cb)({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],n.prototype,"latitudeField",void 0),(0,s._)([(0,i.Cb)({type:["show","hide"]})],n.prototype,"listMode",void 0),(0,s._)([(0,i.Cb)({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],n.prototype,"locationType",void 0),(0,s._)([(0,i.Cb)({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],n.prototype,"longitudeField",void 0),(0,s._)([(0,i.Cb)({type:["CSV"]})],n.prototype,"operationalLayerType",void 0),(0,s._)([(0,i.Cb)()],n.prototype,"outFields",void 0),(0,s._)([(0,i.Cb)({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],n.prototype,"path",void 0),(0,s._)([(0,i.Cb)({json:{read:!1},cast:null,type:d,readOnly:!0})],n.prototype,"source",void 0),(0,s._)([(0,i.Cb)({json:{read:!1},value:"csv",readOnly:!0})],n.prototype,"type",void 0),(0,s._)([(0,i.Cb)({json:{read:Z.r,write:{isRequired:!0,ignoreOrigin:!0,writer:Z.w}}})],n.prototype,"url",null),n=(0,s._)([(0,p.j)("esri.layers.CSVLayer")],n);const A=n},87757:(I,c,o)=>{o.d(c,{g:()=>a});const a={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},56554:(I,c,o)=>{o.d(c,{Dm:()=>i,Hq:()=>D,MS:()=>E,bU:()=>v});var a=o(8314),s=o(58817),P=o(87757),y=o(24837);function v(u){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===u||"esriGeometryMultipoint"===u?y.I4:"esriGeometryPolyline"===u?y.ET:y.lF}}}const g=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let O=1;function i(u,p){if((0,a.Z)("esri-csp-restrictions"))return()=>({[p]:null,...u});try{let f=`this.${p} = null;`;for(const h in u)f+=`this${g.test(h)?`.${h}`:`["${h}"]`} = ${JSON.stringify(u[h])};`;const F=new Function(`\n      return class AttributesClass$${O++} {\n        constructor() {\n          ${f};\n        }\n      }\n    `)();return()=>new F}catch{return()=>({[p]:null,...u})}}function D(u={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,s.d9)(u)}}]}function E(u,p){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:u},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:p,supportsDelete:p,supportsEditing:p,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:p,supportsExceedsLimitStatistics:!0},query:P.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:p,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}}}]);