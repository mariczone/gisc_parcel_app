"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[3529],{63529:(e,a,r)=>{r.r(a),r.d(a,{fromUrl:()=>d});var t=r(20102),n=r(70586),l=r(17452),s=r(66677),i=r(52104),o=r(84230),y=r(87344),u=r(96187);const c={FeatureLayer:!0,SceneLayer:!0};async function d(e){const a=e.properties?.customParameters,d=await async function(e,a){let r=(0,s.Qc)(e);if((0,n.Wi)(r)&&(r=await async function(e,a){const r=await(0,u.T)(e,{customParameters:a});let t=null,i=null;const o=r.type;if("Feature Layer"===o||"Table"===o?(t="FeatureServer",i=r.id??null):"indexedVector"===o?t="VectorTileServer":r.hasOwnProperty("mapName")?t="MapServer":r.hasOwnProperty("bandCount")&&r.hasOwnProperty("pixelSizeX")?t="ImageServer":r.hasOwnProperty("maxRecordCount")&&r.hasOwnProperty("allowGeometryUpdates")?t="FeatureServer":r.hasOwnProperty("streamUrls")?t="StreamServer":m(r)?(t="SceneServer",i=r.id):r.hasOwnProperty("layers")&&m(r.layers?.[0])&&(t="SceneServer"),!t)return null;const y=null!=i?(0,s.DR)(e):null;return{title:(0,n.pC)(y)&&r.name||(0,l.vt)(e),serverType:t,sublayer:i,url:{path:(0,n.pC)(y)?y.serviceUrl:(0,l.mN)(e).path}}}(e,a)),(0,n.Wi)(r))throw new t.Z("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:d,sublayer:f}=r;let b;const w={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(d){case"MapServer":b=null!=f?"FeatureLayer":await async function(e,a){return(await(0,u.T)(e,{customParameters:a})).tileInfo}(e,a)?"TileLayer":"MapImageLayer";break;case"ImageServer":{const r=await(0,u.T)(e,{customParameters:a}),{tileInfo:t,cacheType:n}=r;b=t?"LERC"!==t?.format?.toUpperCase()||n&&"elevation"!==n.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break}case"SceneServer":{const e=await(0,u.T)(r.url.path,{customParameters:a});if(b="SceneLayer",e){const a=e?.layers;if("Voxel"===e?.layerType)b="VoxelLayer";else if(a?.length){const e=a[0]?.layerType;null!=e&&null!=o.fb[e]&&(b=o.fb[e])}}break}default:b=w[d]}const h="FeatureServer"===d,p={parsedUrl:r,Constructor:null,layerOrTableId:h?f:void 0,sublayerIds:null,tableIds:null};if(c[b]&&null==f){const r=await async function(e,a,r){let t,n=!1;if("FeatureServer"===a){const a=await(0,i.V)(e,{customParameters:r});n=!!a.layersJSON,t=a.layersJSON||a.serviceJSON}else t=await(0,u.T)(e,{customParameters:r});const l=t?.layers,s=t?.tables;return{layerIds:l?.map((e=>e.id)).reverse()||[],tableIds:s?.map((e=>e.id)).reverse()||[],layerInfos:n?l:[],tableInfos:n?s:[]}}(e,d,a);h&&(p.sublayerInfos=r.layerInfos,p.tableInfos=r.tableInfos),1!==r.layerIds.length+r.tableIds.length?(p.sublayerIds=r.layerIds,p.tableIds=r.tableIds):h&&(p.layerOrTableId=r.layerIds[0]??r.tableIds[0],p.sourceJSON=r.layerInfos?.[0]??r.tableInfos?.[0])}return p.Constructor=await async function(e){return(0,y.T[e])()}(b),p}(e.url,a),b={...e.properties,url:e.url};if(!d.sublayerIds)return null!=d.layerOrTableId&&(b.layerId=d.layerOrTableId,b.sourceJSON=d.sourceJSON),new d.Constructor(b);const w=new(0,(await Promise.all([r.e(2710),r.e(1612),r.e(7483)]).then(r.bind(r,89348))).default)({title:d.parsedUrl.title});return function(e,a,r){function t(e,t){const l={...r,layerId:e,sublayerTitleMode:"service-name"};return(0,n.pC)(t)&&(l.sourceJSON=t),new a.Constructor(l)}a.sublayerIds.forEach((r=>{const n=t(r,f(a.sublayerInfos,r));e.add(n)})),a.tableIds.forEach((r=>{const n=t(r,f(a.tableInfos,r));e.tables.add(n)}))}(w,d,b),w}function f(e,a){return e?e.find((e=>e.id===a)):null}function m(e){return null!=e&&e.hasOwnProperty("store")&&e.hasOwnProperty("id")&&"number"==typeof e.id}},52104:(e,a,r)=>{r.d(a,{V:()=>n});var t=r(96187);async function n(e,a){const r=await(0,t.T)(e,a);r.layers=r.layers.filter(l);const n={serviceJSON:r};if((r.currentVersion??0)<10.5)return n;const s=await(0,t.T)(e+"/layers",a);return n.layersJSON={layers:s.layers.filter(l),tables:s.tables},n}function l(e){return!e.type||"Feature Layer"===e.type}},87344:(e,a,r)=>{r.d(a,{T:()=>t});const t={BingMapsLayer:async()=>(await Promise.all([r.e(2710),r.e(1612),r.e(8153)]).then(r.bind(r,2723))).default,BuildingSceneLayer:async()=>(await Promise.all([r.e(2710),r.e(1612),r.e(4729),r.e(9790),r.e(8244),r.e(1223),r.e(1423),r.e(4165),r.e(911),r.e(5546),r.e(9942),r.e(9238),r.e(3975),r.e(5590),r.e(8239),r.e(223)]).then(r.bind(r,30223))).default,CSVLayer:async()=>(await Promise.all([r.e(2710),r.e(1612),r.e(4729),r.e(9790),r.e(8244),r.e(1223),r.e(1423),r.e(4165),r.e(911),r.e(5546),r.e(9942),r.e(9238),r.e(9675)]).then(r.bind(r,45425))).default,DimensionLayer:async()=>(await Promise.all([r.e(5103),r.e(81)]).then(r.bind(r,40081))).default,ElevationLayer:async()=>(await Promise.all([r.e(3055),r.e(9230)]).then(r.bind(r,65665))).default,FeatureLayer:async()=>(await Promise.all([r.e(2710),r.e(1612),r.e(4729),r.e(9790),r.e(8244),r.e(1223),r.e(1423),r.e(4165),r.e(911),r.e(5546),r.e(9942),r.e(9238),r.e(5159)]).then(r.bind(r,19238))).default,GeoJSONLayer:async()=>(await Promise.all([r.e(2710),r.e(1612),r.e(4729),r.e(9790),r.e(8244),r.e(1223),r.e(1423),r.e(4165),r.e(911),r.e(5546),r.e(7202)]).then(r.bind(r,23477))).default,GeoRSSLayer:async()=>(await Promise.all([r.e(2710),r.e(1612),r.e(9790),r.e(9538)]).then(r.bind(r,3723))).default,GroupLayer:async()=>(await Promise.all([r.e(2710),r.e(1612),r.e(7483)]).then(r.bind(r,89348))).default,ImageryLayer:async()=>(await Promise.all([r.e(2710),r.e(1612),r.e(4729),r.e(9790),r.e(8244),r.e(1223),r.e(4165),r.e(4599),r.e(6610),r.e(4242),r.e(665)]).then(r.bind(r,45378))).default,ImageryTileLayer:async()=>(await Promise.all([r.e(2710),r.e(1612),r.e(4729),r.e(9790),r.e(8244),r.e(1223),r.e(3055),r.e(6610),r.e(4242),r.e(8104),r.e(8915)]).then(r.bind(r,92045))).default,IntegratedMeshLayer:async()=>(await Promise.all([r.e(2710),r.e(3975),r.e(1537)]).then(r.bind(r,9310))).default,KMLLayer:async()=>(await Promise.all([r.e(2710),r.e(1612),r.e(4729),r.e(9790),r.e(8244),r.e(1223),r.e(1423),r.e(739)]).then(r.bind(r,42756))).default,LineOfSightLayer:async()=>(await Promise.all([r.e(5103),r.e(690)]).then(r.bind(r,30690))).default,MapImageLayer:async()=>(await Promise.all([r.e(2710),r.e(1612),r.e(4729),r.e(9790),r.e(8244),r.e(1223),r.e(1423),r.e(4165),r.e(911),r.e(4599),r.e(6368),r.e(7374)]).then(r.bind(r,27374))).default,MapNotesLayer:async()=>(await Promise.all([r.e(2710),r.e(1612),r.e(4729),r.e(9790),r.e(8244),r.e(1223),r.e(1423),r.e(4165),r.e(911),r.e(5546),r.e(9942),r.e(9238),r.e(1227)]).then(r.bind(r,62128))).default,MediaLayer:async()=>(await Promise.all([r.e(2710),r.e(1612),r.e(1984)]).then(r.bind(r,57765))).default,OGCFeatureLayer:async()=>(await Promise.all([r.e(2710),r.e(1612),r.e(4729),r.e(9790),r.e(8244),r.e(1223),r.e(1423),r.e(4165),r.e(911),r.e(5546),r.e(2855)]).then(r.bind(r,88068))).default,OpenStreetMapLayer:async()=>(await Promise.all([r.e(2710),r.e(1612),r.e(9971),r.e(6237)]).then(r.bind(r,66237))).default,OrientedImageryLayer:async()=>(await Promise.all([r.e(2710),r.e(1612),r.e(4729),r.e(9790),r.e(8244),r.e(1223),r.e(1423),r.e(4165),r.e(911),r.e(5546),r.e(9942),r.e(9238),r.e(5132)]).then(r.bind(r,76604))).default,PointCloudLayer:async()=>(await Promise.all([r.e(2710),r.e(4729),r.e(3975),r.e(8643),r.e(6772)]).then(r.bind(r,10608))).default,RouteLayer:async()=>(await Promise.all([r.e(2710),r.e(1612),r.e(4729),r.e(9790),r.e(8244),r.e(1223),r.e(1423),r.e(4286)]).then(r.bind(r,40153))).default,SceneLayer:async()=>(await Promise.all([r.e(2710),r.e(1612),r.e(4729),r.e(9790),r.e(8244),r.e(1223),r.e(1423),r.e(4165),r.e(911),r.e(5546),r.e(9942),r.e(9238),r.e(3975),r.e(5590),r.e(8239),r.e(7476)]).then(r.bind(r,57476))).default,StreamLayer:async()=>(await Promise.all([r.e(2710),r.e(1612),r.e(4729),r.e(9790),r.e(8244),r.e(1223),r.e(1423),r.e(4165),r.e(911),r.e(5546),r.e(5004)]).then(r.bind(r,88387))).default,SubtypeGroupLayer:async()=>(await Promise.all([r.e(2710),r.e(1612),r.e(4729),r.e(9790),r.e(8244),r.e(1223),r.e(1423),r.e(4165),r.e(911),r.e(9942),r.e(908)]).then(r.bind(r,30359))).default,TileLayer:async()=>(await Promise.all([r.e(2710),r.e(1612),r.e(4729),r.e(9790),r.e(8244),r.e(1223),r.e(1423),r.e(4165),r.e(911),r.e(4599),r.e(3055),r.e(6368),r.e(8636)]).then(r.bind(r,98636))).default,UnknownLayer:async()=>(await r.e(4166).then(r.bind(r,44166))).default,UnsupportedLayer:async()=>(await r.e(9296).then(r.bind(r,39296))).default,VectorTileLayer:async()=>(await Promise.all([r.e(2710),r.e(1612),r.e(3055),r.e(4325),r.e(1785),r.e(719)]).then(r.bind(r,94756))).default,VoxelLayer:async()=>(await Promise.all([r.e(2710),r.e(4729),r.e(3975),r.e(9327)]).then(r.bind(r,28865))).default,WFSLayer:async()=>(await Promise.all([r.e(2710),r.e(1612),r.e(4729),r.e(9790),r.e(8244),r.e(1223),r.e(1423),r.e(4165),r.e(911),r.e(5546),r.e(3974)]).then(r.bind(r,12653))).default,WMSLayer:async()=>(await Promise.all([r.e(2710),r.e(1612),r.e(4729),r.e(9790),r.e(2462)]).then(r.bind(r,25906))).default,WMTSLayer:async()=>(await Promise.all([r.e(2710),r.e(1612),r.e(9971),r.e(5853)]).then(r.bind(r,55853))).default,WebTileLayer:async()=>(await Promise.all([r.e(2710),r.e(1612),r.e(9971)]).then(r.bind(r,16199))).default}},96187:(e,a,r)=>{r.d(a,{T:()=>n});var t=r(3172);async function n(e,a){const{data:r}=await(0,t.default)(e,{responseType:"json",query:{f:"json",...a?.customParameters,token:a?.apiKey}});return r}}}]);