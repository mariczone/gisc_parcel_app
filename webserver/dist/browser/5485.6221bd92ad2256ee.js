"use strict";(self.webpackChunkparcel_app=self.webpackChunkparcel_app||[]).push([[5485,7351],{10349:(te,V,t)=>{t.d(V,{G:()=>u});var h=t(26584);let u=class{constructor(C,P,x=""){this.major=C,this.minor=P,this._context=x}lessThan(C,P){return this.major<C||C===this.major&&this.minor<P}since(C,P){return!this.lessThan(C,P)}validate(C){if(this.major!==C.major)throw new h.Z((this._context&&this._context+":")+"unsupported-version",`Required major ${this._context&&this._context+" "}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:C})}clone(){return new u(this.major,this.minor,this._context)}static parse(C,P=""){const[x,g]=C.split("."),c=/^\s*\d+\s*$/;if(!x||!x.match||!x.match(c))throw new h.Z((P&&P+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:C});if(!g||!g.match||!g.match(c))throw new h.Z((P&&P+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:C});const R=parseInt(x,10),b=parseInt(g,10);return new u(R,b,P)}}},57092:(te,V,t)=>{t.d(V,{Z:()=>fe});var h=t(15861),u=t(17626),C=t(14517),P=t(26584),x=t(8314),g=t(62208),c=t(10699),R=t(21726),b=t(77712),S=(t(90912),t(85931),t(76898)),ee=t(15283),H=t(2618),se=t(90463),F=(t(29132),t(20477)),W=t(96854),v=t(2004);function A(){return(A=(0,h.Z)(function*(l,r,i){const d=(0,H.en)(l);return(0,F.Vr)(d,W.Z.from(r),{...i}).then(f=>({count:f.data.count,extent:v.Z.fromJSON(f.data.extent)}))})).apply(this,arguments)}var _=t(24865),j=t(2865),E=t(33696),B=t(82054);function Q(l,r){return r}function G(l,r,i,d){switch(i){case 0:return Z(l,r+d,0);case 1:return"lowerLeft"===l.originPosition?Z(l,r+d,1):function re({translate:l,scale:r},i,d){return l[d]-i*r[d]}(l,r+d,1)}}function X(l,r,i,d){return 2===i?Z(l,r,2):G(l,r,i,d)}function m(l,r,i,d){return 2===i?Z(l,r,3):G(l,r,i,d)}function Y(l,r,i,d){return 3===i?Z(l,r,3):X(l,r,i,d)}function Z({translate:l,scale:r},i,d){return l[d]+i*r[d]}class z{constructor(r){this._options=r,this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=Q,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{}}createFeatureResult(){return{fields:[],features:[]}}finishFeatureResult(r){if(this._options.applyTransform&&(r.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!r.hasZ)return;const i=(0,E.k)(r.geometryType,this._options.sourceSpatialReference,r.spatialReference);if(!(0,g.Wi)(i))for(const d of r.features)i(d.geometry)}createSpatialReference(){return{}}addField(r,i){const d=r.fields;(0,g.O3)(d),d.push(i);const f=d.map(K=>K.name);this._attributesConstructor=function(){for(const K of f)this[K]=null}}addFeature(r,i){r.features.push(i)}prepareFeatures(r){switch(this._transform=r.transform,this._options.applyTransform&&r.transform&&(this._applyTransform=this._deriveApplyTransform(r)),this._vertexDimension=2,r.hasZ&&this._vertexDimension++,r.hasM&&this._vertexDimension++,r.geometryType){case"esriGeometryPoint":this.addCoordinate=(i,d,f)=>this.addCoordinatePoint(i,d,f),this.createGeometry=i=>this.createPointGeometry(i);break;case"esriGeometryPolygon":this.addCoordinate=(i,d,f)=>this._addCoordinatePolygon(i,d,f),this.createGeometry=i=>this._createPolygonGeometry(i);break;case"esriGeometryPolyline":this.addCoordinate=(i,d,f)=>this._addCoordinatePolyline(i,d,f),this.createGeometry=i=>this._createPolylineGeometry(i);break;case"esriGeometryMultipoint":this.addCoordinate=(i,d,f)=>this._addCoordinateMultipoint(i,d,f),this.createGeometry=i=>this._createMultipointGeometry(i)}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,{attributes:new this._attributesConstructor}}allocateCoordinates(){}addLength(r,i,d){0===this._lengths.length&&(this._toAddInCurrentPath=i),this._lengths.push(i)}addQueryGeometry(r,i){const{queryGeometry:d,queryGeometryType:f}=i,K=(0,B.$g)(d.clone(),d,!1,!1,this._transform),$=(0,B.di)(K,f,!1,!1);r.queryGeometryType=f,r.queryGeometry={...$}}createPointGeometry(r){const i={x:0,y:0,spatialReference:r.spatialReference};return r.hasZ&&(i.z=0),r.hasM&&(i.m=0),i}addCoordinatePoint(r,i,d){const f=(0,g.s3)(this._transform,"transform");switch(i=this._applyTransform(f,i,d,0),d){case 0:r.x=i;break;case 1:r.y=i;break;case 2:"z"in r?r.z=i:r.m=i;break;case 3:r.m=i}}_transformPathLikeValue(r,i){let d=0;i<=1&&(d=this._previousCoordinate[i],this._previousCoordinate[i]+=r);const f=(0,g.s3)(this._transform,"transform");return this._applyTransform(f,r,i,d)}_addCoordinatePolyline(r,i,d){this._dehydratedAddPointsCoordinate(r.paths,i,d)}_addCoordinatePolygon(r,i,d){this._dehydratedAddPointsCoordinate(r.rings,i,d)}_addCoordinateMultipoint(r,i,d){0===d&&r.points.push([]);const f=this._transformPathLikeValue(i,d);r.points[r.points.length-1].push(f)}_createPolygonGeometry(r){return{rings:[[]],spatialReference:r.spatialReference,hasZ:!!r.hasZ,hasM:!!r.hasM}}_createPolylineGeometry(r){return{paths:[[]],spatialReference:r.spatialReference,hasZ:!!r.hasZ,hasM:!!r.hasM}}_createMultipointGeometry(r){return{points:[],spatialReference:r.spatialReference,hasZ:!!r.hasZ,hasM:!!r.hasM}}_dehydratedAddPointsCoordinate(r,i,d){0===d&&0==this._toAddInCurrentPath--&&(r.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);const f=this._transformPathLikeValue(i,d),K=r[r.length-1];0===d&&(this._coordinateBufferPtr=0,this._coordinateBuffer=new Array(this._vertexDimension),K.push(this._coordinateBuffer)),this._coordinateBuffer[this._coordinateBufferPtr++]=f}_deriveApplyTransform(r){const{hasZ:i,hasM:d}=r;return i&&d?Y:i?X:d?m:G}}var O=t(17253);function de(){return(de=(0,h.Z)(function*(l,r,i){const d=(0,H.en)(l),f={...i},K=W.Z.from(r),$=!K.quantizationParameters,{data:q}=yield(0,F.qp)(d,K,new z({sourceSpatialReference:K.sourceSpatialReference,applyTransform:$}),f);return q})).apply(this,arguments)}let J=class extends C.Z{constructor(l){super(l),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.url=null}get parsedUrl(){return(0,R.mN)(this.url)}execute(l,r){var i=this;return(0,h.Z)(function*(){const d=yield i.executeJSON(l,r);return i.featureSetFromJSON(l,d,r)})()}executeJSON(l,r){var i=this;return(0,h.Z)(function*(){const d=i._normalizeQuery(l),f=null!=l.outStatistics?.[0],K=(0,x.Z)("featurelayer-pbf-statistics"),$=!f||K;let q;if(i.pbfSupported&&$)try{q=yield function oe(l,r,i){return de.apply(this,arguments)}(i.url,d,r)}catch(le){if("query:parsing-pbf"!==le.name)throw le;i.pbfSupported=!1}return i.pbfSupported&&$||(q=yield(0,j.F)(i.url,d,r)),i._normalizeFields(q.fields),q})()}featureSetFromJSON(l,r,i){var d=this;return(0,h.Z)(function*(){if(!d._queryIs3DObjectFormat(l)||(0,g.Wi)(d.infoFor3D)||!r.assetMaps||!r.features||!r.features.length)return O.Z.fromJSON(r);const{meshFeatureSetFromJSON:f}=yield(0,c.Hl)(Promise.all([t.e(479),t.e(9941),t.e(853),t.e(2435)]).then(t.bind(t,12435)),i);return f(l,d.infoFor3D,r)})()}executeForCount(l,r){return(0,se.P)(this.url,this._normalizeQuery(l),r)}executeForExtent(l,r){return function T(l,r,i){return A.apply(this,arguments)}(this.url,this._normalizeQuery(l),r)}executeForIds(l,r){return(0,_.G)(this.url,this._normalizeQuery(l),r)}executeRelationshipQuery(l,r){var i=this;return(0,h.Z)(function*(){const[{default:d},{executeRelationshipQuery:f}]=yield(0,c.Hl)(Promise.all([Promise.resolve().then(t.bind(t,67010)),t.e(8727).then(t.bind(t,78727))]),r);return l=d.from(l),(i.gdbVersion||i.dynamicDataSource)&&((l=l.clone()).gdbVersion=l.gdbVersion||i.gdbVersion,l.dynamicDataSource=l.dynamicDataSource||i.dynamicDataSource),f(i.url,l,r)})()}executeRelationshipQueryForCount(l,r){var i=this;return(0,h.Z)(function*(){const[{default:d},{executeRelationshipQueryForCount:f}]=yield(0,c.Hl)(Promise.all([Promise.resolve().then(t.bind(t,67010)),t.e(8727).then(t.bind(t,78727))]),r);return l=d.from(l),(i.gdbVersion||i.dynamicDataSource)&&((l=l.clone()).gdbVersion=l.gdbVersion||i.gdbVersion,l.dynamicDataSource=l.dynamicDataSource||i.dynamicDataSource),f(i.url,l,r)})()}executeAttachmentQuery(l,r){var i=this;return(0,h.Z)(function*(){const{executeAttachmentQuery:d,fetchAttachments:f,processAttachmentQueryResult:K}=yield(0,c.Hl)(t.e(5531).then(t.bind(t,85531)),r),$=(0,H.en)(i.url);return K($,yield i.queryAttachmentsSupported?d($,l,r):f($,l,r))})()}executeTopFeaturesQuery(l,r){var i=this;return(0,h.Z)(function*(){const{executeTopFeaturesQuery:d}=yield(0,c.Hl)(Promise.all([t.e(8592),t.e(8628)]).then(t.bind(t,28628)),r);return d(i.parsedUrl,l,i.sourceSpatialReference,r)})()}executeForTopIds(l,r){var i=this;return(0,h.Z)(function*(){const{executeForTopIds:d}=yield(0,c.Hl)(Promise.all([t.e(8592),t.e(9931)]).then(t.bind(t,39931)),r);return d(i.parsedUrl,l,r)})()}executeForTopExtents(l,r){var i=this;return(0,h.Z)(function*(){const{executeForTopExtents:d}=yield(0,c.Hl)(Promise.all([t.e(8592),t.e(4080)]).then(t.bind(t,14080)),r);return d(i.parsedUrl,l,r)})()}executeForTopCount(l,r){var i=this;return(0,h.Z)(function*(){const{executeForTopCount:d}=yield(0,c.Hl)(Promise.all([t.e(8592),t.e(1147)]).then(t.bind(t,91147)),r);return d(i.parsedUrl,l,r)})()}_normalizeQuery(l){let r=W.Z.from(l);if(r.sourceSpatialReference=r.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(r=r===l?r.clone():r,r.gdbVersion=l.gdbVersion||this.gdbVersion,r.dynamicDataSource=l.dynamicDataSource?ee.n.from(l.dynamicDataSource):this.dynamicDataSource),(0,g.pC)(this.infoFor3D)&&this._queryIs3DObjectFormat(l)){r=r===l?r.clone():r,r.formatOf3DObjects=null;for(const i of this.infoFor3D.queryFormats){if("3D_glb"===i){r.formatOf3DObjects=i;break}"3D_gltf"!==i||r.formatOf3DObjects||(r.formatOf3DObjects=i)}if(!r.formatOf3DObjects)throw new P.Z("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if((0,g.Wi)(r.outFields)||!r.outFields.includes("*")){r=r===l?r.clone():r,(0,g.Wi)(r.outFields)&&(r.outFields=[]);const{originX:i,originY:d,originZ:f,translationX:K,translationY:$,translationZ:q,scaleX:le,scaleY:me,scaleZ:ye,rotationX:ue,rotationY:pe,rotationZ:ce,rotationDeg:_e}=this.infoFor3D.transformFieldRoles;r.outFields.push(i,d,f,K,$,q,le,me,ye,ue,pe,ce,_e)}}return r}_normalizeFields(l){if((0,g.pC)(this.fieldsIndex)&&(0,g.pC)(l))for(const r of l){const i=this.fieldsIndex.get(r.name);i&&Object.assign(r,i.toJSON())}}_queryIs3DObjectFormat(l){return(0,g.pC)(this.infoFor3D)&&!0===l.returnGeometry&&"xyFootprint"!==l.multipatchOption&&!l.outStatistics}};(0,u._)([(0,b.Cb)({type:ee.n})],J.prototype,"dynamicDataSource",void 0),(0,u._)([(0,b.Cb)()],J.prototype,"fieldsIndex",void 0),(0,u._)([(0,b.Cb)()],J.prototype,"gdbVersion",void 0),(0,u._)([(0,b.Cb)()],J.prototype,"infoFor3D",void 0),(0,u._)([(0,b.Cb)({readOnly:!0})],J.prototype,"parsedUrl",null),(0,u._)([(0,b.Cb)()],J.prototype,"pbfSupported",void 0),(0,u._)([(0,b.Cb)()],J.prototype,"queryAttachmentsSupported",void 0),(0,u._)([(0,b.Cb)()],J.prototype,"sourceSpatialReference",void 0),(0,u._)([(0,b.Cb)({type:String})],J.prototype,"url",void 0),J=(0,u._)([(0,S.j)("esri.tasks.QueryTask")],J);const fe=J},19027:(te,V,t)=>{t.d(V,{O:()=>se});var h=t(15861),u=t(17626),C=t(84792),P=t(10699),x=t(21726),g=t(10349),c=t(77712),U=(t(90912),t(85931),t(68653)),L=t(76898),S=t(2004),ee=t(65234),H=t(13812);const se=ae=>{let F=class extends ae{constructor(){super(...arguments),this.capabilities=void 0,this.copyright=null,this.fullExtent=null,this.legendEnabled=!0,this.spatialReference=null,this.version=void 0,this._allLayersAndTablesPromise=null,this._allLayersAndTablesMap=null}readCapabilities(W,v){const T=v.capabilities&&v.capabilities.split(",").map(O=>O.toLowerCase().trim());if(!T)return{operations:{supportsExportMap:!1,supportsExportTiles:!1,supportsIdentify:!1,supportsQuery:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};const A=this.type,_="tile"!==A&&!!v.supportsDynamicLayers,j=T.includes("query"),E=T.includes("map"),B=!!v.exportTilesAllowed,Q=T.includes("tilemap"),G=T.includes("data"),X="tile"!==A&&(!v.tileInfo||_),m="tile"!==A&&(!v.tileInfo||_),Y="tile"!==A,Z=v.cimVersion&&g.G.parse(v.cimVersion),re=Z?.since(1,4)??!1,z=Z?.since(2,0)??!1;return{operations:{supportsExportMap:E,supportsExportTiles:B,supportsIdentify:j,supportsQuery:G,supportsTileMap:Q},exportMap:E?{supportsArcadeExpressionForLabeling:re,supportsSublayersChanges:Y,supportsDynamicLayers:_,supportsSublayerVisibility:X,supportsSublayerDefinitionExpression:m,supportsCIMSymbols:z}:null,exportTiles:B?{maxExportTilesCount:+v.maxExportTilesCount}:null}}readVersion(W,v){let T=v.currentVersion;return T||(T=v.hasOwnProperty("capabilities")||v.hasOwnProperty("tables")?10:v.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),T}fetchSublayerInfo(W,v){var T=this;return(0,h.Z)(function*(){try{return yield T.fetchAllLayersAndTables(v),T._allLayersAndTablesMap?.get(W)}catch{return}})()}fetchAllLayersAndTables(W){var v=this;return(0,h.Z)(function*(){yield v.load(W),v._allLayersAndTablesPromise||(v._allLayersAndTablesPromise=(0,C.default)((0,x.mN)(v.url).path+"/layers",{responseType:"json",query:{f:"json",...v.customParameters,token:v.apiKey}}).then(A=>{v._allLayersAndTablesMap=new Map;for(const _ of A.data.layers)v._allLayersAndTablesMap.set(_.id,_);return{result:A.data}},A=>({error:A})));const T=yield v._allLayersAndTablesPromise;if((0,P.k_)(W),"result"in T)return T.result;throw T.error})()}};return(0,u._)([(0,c.Cb)({readOnly:!0})],F.prototype,"capabilities",void 0),(0,u._)([(0,U.r)("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],F.prototype,"readCapabilities",null),(0,u._)([(0,c.Cb)({json:{read:{source:"copyrightText"}}})],F.prototype,"copyright",void 0),(0,u._)([(0,c.Cb)({type:S.Z})],F.prototype,"fullExtent",void 0),(0,u._)([(0,c.Cb)(H.id)],F.prototype,"id",void 0),(0,u._)([(0,c.Cb)({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],F.prototype,"legendEnabled",void 0),(0,u._)([(0,c.Cb)(H.C_)],F.prototype,"popupEnabled",void 0),(0,u._)([(0,c.Cb)({type:ee.Z})],F.prototype,"spatialReference",void 0),(0,u._)([(0,c.Cb)({readOnly:!0})],F.prototype,"version",void 0),(0,u._)([(0,U.r)("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],F.prototype,"readVersion",null),F=(0,u._)([(0,L.j)("esri.layers.mixins.ArcGISMapService")],F),F}},66120:(te,V,t)=>{t.d(V,{x:()=>v});var h=t(17626),u=t(74333),C=t(46882),P=t(26584),x=t(63290),g=t(32917),c=t(77712),U=(t(90912),t(85931),t(52323)),L=t(76898),S=t(31283),ee=t(39058),H=t(13410);const se=x.Z.getLogger("esri.layers.TileLayer"),F=u.Z.ofType(ee.Z);function W(T,A){T&&T.forEach(_=>{A(_),_.sublayers&&_.sublayers.length&&W(_.sublayers,A)})}const v=T=>{let A=class extends T{constructor(..._){super(..._),this.allSublayers=new C.Z({getCollections:()=>[this.sublayers],getChildrenFunction:j=>j.sublayers}),this.sublayersSourceJSON={[S.s3.SERVICE]:{},[S.s3.PORTAL_ITEM]:{},[S.s3.WEB_SCENE]:{},[S.s3.WEB_MAP]:{}},this.addHandles((0,g.YP)(()=>this.sublayers,(j,E)=>this._handleSublayersChange(j,E),g.Z_))}readSublayers(_,j){if(!j||!_)return;const{sublayersSourceJSON:E}=this,B=(0,S.M9)(j.origin);if(B<S.s3.SERVICE||(E[B]={context:j,visibleLayers:_.visibleLayers||E[B].visibleLayers,layers:_.layers||E[B].layers},B>S.s3.SERVICE))return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);const{sublayers:Q,origin:G}=this.createSublayersForOrigin("web-document"),X=(0,U.vw)(this);X.setDefaultOrigin(G),this._set("sublayers",new F(Q)),X.setDefaultOrigin("user")}findSublayerById(_){return this.allSublayers.find(j=>j.id===_)}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(_){const j=(0,S.M9)("web-document"===_?"web-map":_);let E=S.s3.SERVICE,B=this.sublayersSourceJSON[S.s3.SERVICE].layers,Q=this.sublayersSourceJSON[S.s3.SERVICE].context,G=null;const X=[S.s3.PORTAL_ITEM,S.s3.WEB_SCENE,S.s3.WEB_MAP].filter(O=>O<=j);for(const O of X){const D=this.sublayersSourceJSON[O];(0,H.ac)(D.layers)&&(E=O,B=D.layers,Q=D.context,D.visibleLayers&&(G={visibleLayers:D.visibleLayers,context:D.context}))}const m=[S.s3.PORTAL_ITEM,S.s3.WEB_SCENE,S.s3.WEB_MAP].filter(O=>O>E&&O<=j);let Y=null;for(const O of m){const{layers:D,visibleLayers:k,context:oe}=this.sublayersSourceJSON[O];D&&(Y={layers:D,context:oe}),k&&(G={visibleLayers:k,context:oe})}const Z=function ae(T,A){const _=[],j={};return T&&T.forEach(E=>{const B=new ee.Z;if(B.read(E,A),j[B.id]=B,null!=E.parentLayerId&&-1!==E.parentLayerId){const Q=j[E.parentLayerId];Q.sublayers||(Q.sublayers=[]),Q.sublayers.unshift(B)}else _.unshift(B)}),_}(B,Q),re=new Map,z=new Set;if(Y)for(const O of Y.layers)re.set(O.id,O);if(G?.visibleLayers)for(const O of G.visibleLayers)z.add(O);return W(Z,O=>{Y&&O.read(re.get(O.id),Y.context),G&&O.read({defaultVisibility:z.has(O.id)},G.context)}),{origin:(0,S.x3)(E),sublayers:new F({items:Z})}}read(_,j){super.read(_,j),this.readSublayers(_,j)}_handleSublayersChange(_,j){j&&(j.forEach(E=>{E.parent=null,E.layer=null}),this.handles.remove("sublayers-owner")),_&&(_.forEach(E=>{E.parent=this,E.layer=this}),this.handles.add([_.on("after-add",({item:E})=>{E.parent=this,E.layer=this}),_.on("after-remove",({item:E})=>{E.parent=null,E.layer=null})],"sublayers-owner"),"tile"===this.type&&this.handles.add(_.on("before-changes",E=>{se.error(new P.Z("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),E.preventDefault()}),"sublayers-owner"))}};return(0,h._)([(0,c.Cb)({readOnly:!0})],A.prototype,"allSublayers",void 0),(0,h._)([(0,c.Cb)({readOnly:!0,type:u.Z.ofType(ee.Z)})],A.prototype,"serviceSublayers",void 0),(0,h._)([(0,c.Cb)({value:null,type:F,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],A.prototype,"sublayers",void 0),(0,h._)([(0,c.Cb)({readOnly:!0})],A.prototype,"sublayersSourceJSON",void 0),A=(0,h._)([(0,L.j)("esri.layers.mixins.SublayersOwner")],A),A}},39058:(te,V,t)=>{t.d(V,{Z:()=>be});var ue,h=t(15861),u=t(17626),P=(t(29132),t(73281)),H=(t(4832),t(49067),t(96794),t(69747),t(40425),t(69357),t(40342),t(73640),t(33474),t(32088)),se=t(84792),ae=t(20383),F=t(74333),W=t(26584),v=t(80542),T=t(8314),A=t(61996),_=t(58817),j=t(47996),E=t(63290),B=t(62208),Q=t(99959),G=t(95737),X=t(21726),m=t(77712),Y=t(66656),Z=t(68653),re=t(76898),z=t(99433),O=t(90912),D=t(31283),k=t(52323),oe=t(57092),de=t(41638),J=t(36255),fe=t(60466),l=t(170),r=t(62667),i=t(2430),d=t(94138),f=t(15283),K=t(48370),$=t(67736),q=t(96854),le=t(49430),me=t(2004),ye=t(71774);function pe(e){return null!=e&&"esriSMS"===e.type}function ce(e,s,n){const y=this.originIdOf(s)>=(0,D.M9)(n.origin);return{ignoreOrigin:!0,allowNull:y,enabled:!!n&&"map-image"===n.layer?.type&&(n.writeSublayerStructure||y)}}function _e(e,s,n){return{enabled:!!n&&"tile"===n.layer?.type&&this._isOverridden(s)}}function w(e,s,n){return{ignoreOrigin:!0,enabled:n&&n.writeSublayerStructure||!1}}function he(e,s,n){return{ignoreOrigin:!0,enabled:!!n&&(n.writeSublayerStructure||this.originIdOf(s)>=(0,D.M9)(n.origin))}}let ge=0;const ie=new Set;ie.add("layer"),ie.add("parent"),ie.add("loaded"),ie.add("loadStatus"),ie.add("loadError"),ie.add("loadWarnings");let p=ue=class extends((0,v.p)((0,Q.R)((0,A.IG)(j.Z)))){constructor(e){super(e),this.capabilities=void 0,this.fields=null,this.fullExtent=null,this.geometryType=null,this.globalIdField=null,this.legendEnabled=!0,this.objectIdField=null,this.popupEnabled=!0,this.popupTemplate=null,this.sourceJSON=null,this.title=null,this.typeIdField=null,this.types=null,this._lastParsedUrl=null}load(e){var s=this;return(0,h.Z)(function*(){return s.addResolvingPromise((0,h.Z)(function*(){const{layer:n,source:y,url:M}=s;if(!n&&!M)throw new W.Z("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:s});let I=null;if(!n||s.originIdOf("url")>D.s3.SERVICE||"data-layer"===y?.type)I=(yield(0,se.default)(M,{responseType:"json",query:{f:"json"},...e})).data;else{let N=s.id;"map-layer"===y?.type&&(N=y.mapLayerId),I=yield n.fetchSublayerInfo(N,e)}I&&(s.sourceJSON=I,s.read({layerDefinition:I},{origin:"service"}))})()),s})()}readCapabilities(e,s){s=s.layerDefinition||s;const{operations:{supportsQuery:n,supportsQueryAttachments:y},query:{supportsFormatPBF:M},data:{supportsAttachment:I}}=(0,d.h)(s,this.url);return{exportMap:{supportsModification:!!s.canModifyLayer},operations:{supportsQuery:n,supportsQueryAttachments:y},data:{supportsAttachment:I},query:{supportsFormatPBF:M}}}get defaultPopupTemplate(){return this.createPopupTemplate()}set definitionExpression(e){this._setAndNotifyLayer("definitionExpression",e)}get fieldsIndex(){return new fe.Z(this.fields||[])}set floorInfo(e){this._setAndNotifyLayer("floorInfo",e)}readGlobalIdFieldFromService(e,s){if((s=s.layerDefinition||s).globalIdField)return s.globalIdField;if(s.fields)for(const n of s.fields)if("esriFieldTypeGlobalID"===n.type)return n.name}get id(){return this._get("id")??ge++}set id(e){this._get("id")!==e&&(!1!==this.layer?.capabilities?.exportMap?.supportsDynamicLayers?this._set("id",e):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"))}set labelingInfo(e){this._setAndNotifyLayer("labelingInfo",e)}writeLabelingInfo(e,s,n,y){e&&e.length&&(s.layerDefinition={drawingInfo:{labelingInfo:e.map(M=>M.write({},y))}})}set labelsVisible(e){this._setAndNotifyLayer("labelsVisible",e)}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(s=>s.layer=e)}set listMode(e){this._set("listMode",e)}set minScale(e){this._setAndNotifyLayer("minScale",e)}readMinScale(e,s){return s.minScale||s.layerDefinition&&s.layerDefinition.minScale||0}set maxScale(e){this._setAndNotifyLayer("maxScale",e)}readMaxScale(e,s){return s.maxScale||s.layerDefinition&&s.layerDefinition.maxScale||0}get effectiveScaleRange(){const{minScale:e,maxScale:s}=this;return{minScale:e,maxScale:s}}readObjectIdFieldFromService(e,s){if((s=s.layerDefinition||s).objectIdField)return s.objectIdField;if(s.fields)for(const n of s.fields)if("esriFieldTypeOID"===n.type)return n.name}set opacity(e){this._setAndNotifyLayer("opacity",e)}readOpacity(e,s){const n=s.layerDefinition;return 1-.01*((null!=n?.transparency?n.transparency:n?.drawingInfo?.transparency)??0)}writeOpacity(e,s,n,y){s.layerDefinition={drawingInfo:{transparency:100-100*e}}}writeParent(e,s){s.parentLayerId=this.parent&&this.parent!==this.layer?(0,O.vU)(this.parent.id):-1}get queryTask(){if(!this.layer)return null;const{spatialReference:e}=this.layer,s="gdbVersion"in this.layer?this.layer.gdbVersion:void 0,{capabilities:n,fieldsIndex:y}=this,M=(0,T.Z)("featurelayer-pbf")&&n?.query.supportsFormatPBF;return new oe.Z({url:this.url,pbfSupported:M,fieldsIndex:y,gdbVersion:s,sourceSpatialReference:e,queryAttachmentsSupported:n?.operations?.supportsQueryAttachments??!1})}set renderer(e){if(e)for(const s of e.getSymbols())if((0,ae.dU)(s)){E.Z.getLogger(this.declaredClass).warn("Sublayer renderer should use 2D symbols");break}this._setAndNotifyLayer("renderer",e)}get source(){return this._get("source")||new K.R({mapLayerId:this.id})}set source(e){this._setAndNotifyLayer("source",e)}set sublayers(e){this._handleSublayersChange(e,this._get("sublayers")),this._set("sublayers",e)}castSublayers(e){return(0,O.se)(F.Z.ofType(ue),e)}writeSublayers(e,s,n){this.sublayers?.length&&(s[n]=this.sublayers.map(y=>y.id).toArray().reverse())}readTypeIdField(e,s){let n=(s=s.layerDefinition||s).typeIdField;if(n&&s.fields){n=n.toLowerCase();const y=s.fields.find(M=>M.name.toLowerCase()===n);y&&(n=y.name)}return n}get url(){const e=this.layer?.parsedUrl??this._lastParsedUrl,s=this.source;if(!e)return null;if(this._lastParsedUrl=e,"map-layer"===s?.type)return`${e.path}/${s.mapLayerId}`;const n={layer:JSON.stringify({source:this.source})};return`${e.path}/dynamicLayer?${(0,X.B7)(n)}`}set url(e){this._overrideIfSome("url",e)}set visible(e){this._setAndNotifyLayer("visible",e)}writeVisible(e,s,n,y){s[n]=this.getAtOrigin("defaultVisibility","service")||e}clone(){const{store:e}=(0,k.vw)(this),s=new ue;return(0,k.vw)(s).store=e.clone(ie),this.commitProperty("url"),s._lastParsedUrl=this._lastParsedUrl,s}createPopupTemplate(e){return(0,le.eZ)(this,e)}createQuery(){return new q.Z({returnGeometry:!0,where:this.definitionExpression||"1=1"})}createFeatureLayer(){var e=this;return(0,h.Z)(function*(){if(e.hasOwnProperty("sublayers"))return null;const{layer:s}=e,n=s?.parsedUrl,y=new((yield Promise.resolve().then(t.bind(t,80415))).default)({url:n?.path});return n&&e.source&&("map-layer"===e.source.type?y.layerId=e.source.mapLayerId:y.dynamicDataSource=e.source),null!=s?.refreshInterval&&(y.refreshInterval=s.refreshInterval),e.definitionExpression&&(y.definitionExpression=e.definitionExpression),e.floorInfo&&(y.floorInfo=(0,_.d9)(e.floorInfo)),e.originIdOf("labelingInfo")>D.s3.SERVICE&&(y.labelingInfo=(0,_.d9)(e.labelingInfo)),e.originIdOf("labelsVisible")>D.s3.DEFAULTS&&(y.labelsVisible=e.labelsVisible),e.originIdOf("legendEnabled")>D.s3.DEFAULTS&&(y.legendEnabled=e.legendEnabled),e.originIdOf("visible")>D.s3.DEFAULTS&&(y.visible=e.visible),e.originIdOf("minScale")>D.s3.DEFAULTS&&(y.minScale=e.minScale),e.originIdOf("maxScale")>D.s3.DEFAULTS&&(y.maxScale=e.maxScale),e.originIdOf("opacity")>D.s3.DEFAULTS&&(y.opacity=e.opacity),e.originIdOf("popupTemplate")>D.s3.DEFAULTS&&(y.popupTemplate=(0,_.d9)(e.popupTemplate)),e.originIdOf("renderer")>D.s3.SERVICE&&(y.renderer=(0,_.d9)(e.renderer)),"data-layer"===e.source?.type&&(y.dynamicDataSource=e.source.clone()),e.originIdOf("title")>D.s3.DEFAULTS&&(y.title=e.title),"map-image"===s?.type&&s.originIdOf("customParameters")>D.s3.DEFAULTS&&(y.customParameters=s.customParameters),"tile"===s?.type&&s.originIdOf("customParameters")>D.s3.DEFAULTS&&(y.customParameters=s.customParameters),y})()}getField(e){return this.fieldsIndex.get(e)}getFeatureType(e){const{typeIdField:s,types:n}=this;if(!s||!e)return null;const y=e.attributes?e.attributes[s]:void 0;if(null==y)return null;let M=null;return n?.some(I=>{const{id:N}=I;return null!=N&&(N.toString()===y.toString()&&(M=I),!!M)}),M}getFieldDomain(e,s){const y=this.getFeatureType(s&&s.feature);if(y){const M=y.domains&&y.domains[e];if(M&&"inherited"!==M.type)return M}return this._getLayerDomain(e)}queryAttachments(e,s){var n=this;return(0,h.Z)(function*(){yield n.load(),e=$.Z.from(e);const y=n.capabilities;if(!y?.data?.supportsAttachment)throw new W.Z("queryAttachments:not-supported","this layer doesn't support attachments");const{attachmentTypes:M,objectIds:I,globalIds:N,num:ne,size:ve,start:Pe,where:Ee}=e;if(!y?.operations?.supportsQueryAttachments&&(M?.length>0||N?.length>0||ve?.length>0||ne||Pe||Ee))throw new W.Z("queryAttachments:option-not-supported","when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported",e);if(!(I?.length||N?.length||Ee))throw new W.Z("queryAttachments:invalid-query","'objectIds', 'globalIds', or 'where' are required to perform attachment query",e);return n.queryTask.executeAttachmentQuery(e,s)})()}queryFeatures(e=this.createQuery(),s){var n=this;return(0,h.Z)(function*(){if(yield n.load(),!n.capabilities.operations.supportsQuery)throw new W.Z("queryFeatures:not-supported","this layer doesn't support queries.");if(!n.url)throw new W.Z("queryFeatures:not-supported","this layer has no url.");const y=yield n.queryTask.execute(e,{...s,query:{...n.layer?.customParameters,token:n.layer?.apiKey}});if(y?.features)for(const M of y.features)M.sourceLayer=n;return y})()}toExportImageJSON(e){const s={id:this.id,source:this.source?.toJSON()||{mapLayerId:this.id,type:"mapLayer"}},n=(0,G._)(e,this.definitionExpression);(0,B.pC)(n)&&(s.definitionExpression=n);const y=["renderer","labelingInfo","opacity","labelsVisible"].reduce((I,N)=>(I[N]=this.originIdOf(N),I),{});if(Object.keys(y).some(I=>y[I]>D.s3.SERVICE)){const I=s.drawingInfo={};if(y.renderer>D.s3.SERVICE&&(I.renderer=this.renderer?this.renderer.toJSON():null),y.labelsVisible>D.s3.SERVICE&&(I.showLabels=this.labelsVisible),this.labelsVisible&&y.labelingInfo>D.s3.SERVICE){!this.loaded&&this.labelingInfo.some(ne=>!ne.labelPlacement)&&E.Z.getLogger(this.declaredClass).warnOnce(`A Sublayer (title: ${this.title}, id: ${this.id}) has an undefined 'labelPlacement' and so labels cannot be displayed. Either define a valid 'labelPlacement' or call Sublayer.load() to use a default value based on geometry type.`,{sublayer:this});let N=this.labelingInfo;(0,B.pC)(this.geometryType)&&(N=(0,r.a)(this.labelingInfo,ye.M.toJSON(this.geometryType))),I.labelingInfo=N.filter(ne=>ne.labelPlacement).map(ne=>ne.toJSON({origin:"service",layer:this.layer})),I.showLabels=!0}y.opacity>D.s3.SERVICE&&(I.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(I.renderer)}return s}_assignDefaultSymbolColors(e){this._forEachSimpleMarkerSymbols(e,s=>{s.color||"esriSMSX"!==s.style&&"esriSMSCross"!==s.style||(s.color=s.outline&&s.outline.color?s.outline.color:[0,0,0,0])})}_forEachSimpleMarkerSymbols(e,s){if(e){const n=("uniqueValueInfos"in e?e.uniqueValueInfos:"classBreakInfos"in e?e.classBreakInfos:null)??[];for(const y of n)pe(y.symbol)&&s(y.symbol);"symbol"in e&&pe(e.symbol)&&s(e.symbol),"defaultSymbol"in e&&pe(e.defaultSymbol)&&s(e.defaultSymbol)}}_setAndNotifyLayer(e,s){const n=this.layer,y=this._get(e);let M,I;switch(e){case"definitionExpression":case"floorInfo":M="supportsSublayerDefinitionExpression";break;case"minScale":case"maxScale":case"visible":M="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":M="supportsDynamicLayers",I="supportsModification"}const N=(0,k.vw)(this).getDefaultOrigin();if("service"!==N){if(M&&!1===this.layer?.capabilities?.exportMap?.[M])return void this._logLockedError(e,`capability not available 'layer.capabilities.exportMap.${M}'`);if(I&&!1===this.capabilities?.exportMap[I])return void this._logLockedError(e,`capability not available 'capabilities.exportMap.${I}'`)}"source"!==e||"not-loaded"===this.loadStatus?(this._set(e,s),"service"!==N&&y!==s&&n&&n.emit&&n.emit("sublayer-update",{propertyName:e,target:this})):this._logLockedError(e,"'source' can't be changed after calling sublayer.load()")}_handleSublayersChange(e,s){s&&(s.forEach(n=>{n.parent=null,n.layer=null}),this.handles.removeAll()),e&&(e.forEach(n=>{n.parent=this,n.layer=this.layer}),this.handles.add([e.on("after-add",({item:n})=>{n.parent=this,n.layer=this.layer}),e.on("after-remove",({item:n})=>{n.parent=null,n.layer=null}),e.on("before-changes",n=>{const y=this.layer?.capabilities?.exportMap?.supportsSublayersChanges;null==y||y||(E.Z.getLogger(this.declaredClass).error(new W.Z("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),n.preventDefault())})]))}_logLockedError(e,s){const{layer:n,declaredClass:y}=this;E.Z.getLogger(y).error(new W.Z("sublayer:locked",`Property '${String(e)}' can't be changed on Sublayer from the layer '${n?.id}'`,{reason:s,sublayer:this,layer:n}))}_getLayerDomain(e){const s=this.fieldsIndex.get(e);return s?s.domain:null}};p.test={isMapImageLayerOverridePolicy:e=>e===w||e===ce,isTileImageLayerOverridePolicy:e=>e===_e},(0,u._)([(0,m.Cb)({readOnly:!0})],p.prototype,"capabilities",void 0),(0,u._)([(0,Z.r)("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],p.prototype,"readCapabilities",null),(0,u._)([(0,m.Cb)()],p.prototype,"defaultPopupTemplate",null),(0,u._)([(0,m.Cb)({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{allowNull:!0,overridePolicy:ce}}})],p.prototype,"definitionExpression",null),(0,u._)([(0,m.Cb)({type:[J.Z],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],p.prototype,"fields",void 0),(0,u._)([(0,m.Cb)({readOnly:!0})],p.prototype,"fieldsIndex",null),(0,u._)([(0,m.Cb)({type:i.Z,value:null,json:{name:"layerDefinition.floorInfo",read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo",overridePolicy:ce},origins:{"web-scene":{read:!1,write:!1}}}})],p.prototype,"floorInfo",null),(0,u._)([(0,m.Cb)({type:me.Z,json:{read:{source:"layerDefinition.extent"}}})],p.prototype,"fullExtent",void 0),(0,u._)([(0,m.Cb)({type:ye.M.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:ye.M.read}}}}})],p.prototype,"geometryType",void 0),(0,u._)([(0,m.Cb)({type:String})],p.prototype,"globalIdField",void 0),(0,u._)([(0,Z.r)("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],p.prototype,"readGlobalIdFieldFromService",null),(0,u._)([(0,m.Cb)({type:O.z8,json:{write:{ignoreOrigin:!0}}})],p.prototype,"id",null),(0,u._)([(0,m.Cb)({value:null,type:[l.Z],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:w}}})],p.prototype,"labelingInfo",null),(0,u._)([(0,z.c)("labelingInfo")],p.prototype,"writeLabelingInfo",null),(0,u._)([(0,m.Cb)({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:w}}})],p.prototype,"labelsVisible",null),(0,u._)([(0,m.Cb)({value:null})],p.prototype,"layer",null),(0,u._)([(0,m.Cb)({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:he}}})],p.prototype,"legendEnabled",void 0),(0,u._)([(0,m.Cb)({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],p.prototype,"listMode",null),(0,u._)([(0,m.Cb)({type:Number,value:0,json:{write:{overridePolicy:w}}})],p.prototype,"minScale",null),(0,u._)([(0,Z.r)("minScale",["minScale","layerDefinition.minScale"])],p.prototype,"readMinScale",null),(0,u._)([(0,m.Cb)({type:Number,value:0,json:{write:{overridePolicy:w}}})],p.prototype,"maxScale",null),(0,u._)([(0,Z.r)("maxScale",["maxScale","layerDefinition.maxScale"])],p.prototype,"readMaxScale",null),(0,u._)([(0,m.Cb)({readOnly:!0})],p.prototype,"effectiveScaleRange",null),(0,u._)([(0,m.Cb)({type:String})],p.prototype,"objectIdField",void 0),(0,u._)([(0,Z.r)("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],p.prototype,"readObjectIdFieldFromService",null),(0,u._)([(0,m.Cb)({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:w}}})],p.prototype,"opacity",null),(0,u._)([(0,Z.r)("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],p.prototype,"readOpacity",null),(0,u._)([(0,z.c)("opacity")],p.prototype,"writeOpacity",null),(0,u._)([(0,m.Cb)({json:{type:O.z8,write:{target:"parentLayerId",writerEnsuresNonNull:!0,overridePolicy:w}}})],p.prototype,"parent",void 0),(0,u._)([(0,z.c)("parent")],p.prototype,"writeParent",null),(0,u._)([(0,m.Cb)({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(e,s)=>!s.disablePopup},write:{target:"disablePopup",overridePolicy:he,writer(e,s,n){s[n]=!e}}}})],p.prototype,"popupEnabled",void 0),(0,u._)([(0,m.Cb)({type:P.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:he}}})],p.prototype,"popupTemplate",void 0),(0,u._)([(0,m.Cb)({readOnly:!0})],p.prototype,"queryTask",null),(0,u._)([(0,m.Cb)({types:H.A,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:w},origins:{"web-scene":{types:H.o,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:w}}}}})],p.prototype,"renderer",null),(0,u._)([(0,m.Cb)({types:{key:"type",base:null,typeMap:{"data-layer":f.n,"map-layer":K.R}},cast(e){if(e){if("mapLayerId"in e)return(0,O.TJ)(K.R,e);if("dataSource"in e)return(0,O.TJ)(f.n,e)}return e},json:{name:"layerDefinition.source",write:{overridePolicy:w}}})],p.prototype,"source",null),(0,u._)([(0,m.Cb)()],p.prototype,"sourceJSON",void 0),(0,u._)([(0,m.Cb)({value:null,json:{type:[O.z8],write:{target:"subLayerIds",allowNull:!0,overridePolicy:w}}})],p.prototype,"sublayers",null),(0,u._)([(0,Y.p)("sublayers")],p.prototype,"castSublayers",null),(0,u._)([(0,z.c)("sublayers")],p.prototype,"writeSublayers",null),(0,u._)([(0,m.Cb)({type:String,json:{name:"name",write:{overridePolicy:he}}})],p.prototype,"title",void 0),(0,u._)([(0,m.Cb)({type:String})],p.prototype,"typeIdField",void 0),(0,u._)([(0,Z.r)("typeIdField",["layerDefinition.typeIdField"])],p.prototype,"readTypeIdField",null),(0,u._)([(0,m.Cb)({type:[de.Z],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],p.prototype,"types",void 0),(0,u._)([(0,m.Cb)({type:String,json:{read:{source:"layerUrl"},write:{target:"layerUrl",overridePolicy:_e}}})],p.prototype,"url",null),(0,u._)([(0,m.Cb)({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:w}}})],p.prototype,"visible",null),(0,u._)([(0,z.c)("visible")],p.prototype,"writeVisible",null),p=ue=(0,u._)([(0,re.j)("esri.layers.support.Sublayer")],p);const be=p},12585:(te,V,t)=>{t.d(V,{g:()=>C});var h=t(15861),u=t(26584);function C(x,g){return P.apply(this,arguments)}function P(){return(P=(0,h.Z)(function*(x,g){try{return yield createImageBitmap(x)}catch(c){throw new u.Z("request:server",`Unable to load ${g}`,{url:g,error:c})}})).apply(this,arguments)}},13410:(te,V,t)=>{t.d(V,{FN:()=>P,QV:()=>C,ac:()=>g});var h=t(62208),u=t(31283);function C(c,R,b){return R.flatten(({sublayers:L})=>L).length!==c.length||!!c.some(L=>L.originIdOf("minScale")>b||L.originIdOf("maxScale")>b||L.originIdOf("renderer")>b||L.originIdOf("labelingInfo")>b||L.originIdOf("opacity")>b||L.originIdOf("labelsVisible")>b||L.originIdOf("source")>b)||!x(c,R)}function P(c,R,b){return!!c.some(U=>{const L=U.source;return!(!L||"map-layer"===L.type&&L.mapLayerId===U.id&&((0,h.Wi)(L.gdbVersion)||L.gdbVersion===b))||U.originIdOf("renderer")>u.s3.SERVICE||U.originIdOf("labelingInfo")>u.s3.SERVICE||U.originIdOf("opacity")>u.s3.SERVICE||U.originIdOf("labelsVisible")>u.s3.SERVICE})||!x(c,R)}function x(c,R){if(!c||!c.length||(0,h.Wi)(R))return!0;const b=R.slice().reverse().flatten(({sublayers:S})=>S&&S.toArray().reverse()).map(S=>S.id).toArray();if(c.length>b.length)return!1;let U=0;const L=b.length;for(const{id:S}of c){for(;U<L&&b[U]!==S;)U++;if(U>=L)return!1}return!0}function g(c){return!!c&&c.some(R=>null!=R.minScale||R.layerDefinition&&null!=R.layerDefinition.minScale)}},90463:(te,V,t)=>{t.d(V,{P:()=>x});var h=t(15861),u=t(2618),C=t(20477),P=t(96854);function x(c,R,b){return g.apply(this,arguments)}function g(){return(g=(0,h.Z)(function*(c,R,b){const U=(0,u.en)(c);return(0,C.hH)(U,P.Z.from(R),{...b}).then(L=>L.data.count)})).apply(this,arguments)}},24865:(te,V,t)=>{t.d(V,{G:()=>x});var h=t(15861),u=t(2618),C=t(20477),P=t(96854);function x(c,R,b){return g.apply(this,arguments)}function g(){return(g=(0,h.Z)(function*(c,R,b){const U=(0,u.en)(c);return(0,C.Ev)(U,P.Z.from(R),{...b}).then(L=>L.data.objectIds)})).apply(this,arguments)}}}]);