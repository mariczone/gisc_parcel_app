"use strict";(self.webpackChunkparcel_app=self.webpackChunkparcel_app||[]).push([[2248,7351],{72248:(U,f,e)=>{e.r(f),e.d(f,{default:()=>$});var w,M=e(15861),r=e(17626),u=(e(29132),e(84792)),g=e(26584),b=e(2076),c=e(62208),R=e(99959),l=e(77712),S=(e(90912),e(85931),e(76898)),m=e(65234),P=e(2004),L=e(65401),x=e(44917),j=e(552),O=e(30346),I=e(99555),E=e(12585),Z=e(2584);const v=new(e(68511).f)("0/0/0",0,0,0,void 0);let y=w=class extends((0,j.h)((0,I.M)((0,O.Q)(x.Z)))){constructor(){super(...arguments),this.tileInfo=Z.Z.create({spatialReference:m.Z.WebMercator,size:256}),this.type="base-tile",this.fullExtent=new P.Z(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,m.Z.WebMercator),this.spatialReference=m.Z.WebMercator}getTileBounds(t,o,a,d){const i=d||(0,L.Ue)();return v.level=t,v.row=o,v.col=a,v.extent=i,this.tileInfo.updateTileInfo(v),v.extent=void 0,i}fetchTile(t,o,a,d={}){const{signal:i}=d,p=this.getTileUrl(t,o,a),h={responseType:"image",signal:i,query:{...this.refreshParameters}};return(0,u.default)(p??"",h).then(C=>C.data)}fetchImageBitmapTile(t,o,a,d={}){var i=this;return(0,M.Z)(function*(){const{signal:p}=d;if(i.fetchTile!==w.prototype.fetchTile){const Q=yield i.fetchTile(t,o,a,d);try{return createImageBitmap(Q)}catch(G){throw new g.Z("request:server",`Unable to load tile ${t}/${o}/${a}`,{error:G,level:t,row:o,col:a})}}const h=i.getTileUrl(t,o,a)??"",C={responseType:"blob",signal:p,query:{...i.refreshParameters}},{data:N}=yield(0,u.default)(h,C);return(0,E.g)(N,h)})()}getTileUrl(){throw new g.Z("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")}};(0,r._)([(0,l.Cb)({type:Z.Z})],y.prototype,"tileInfo",void 0),(0,r._)([(0,l.Cb)({type:["show","hide"]})],y.prototype,"listMode",void 0),(0,r._)([(0,l.Cb)({readOnly:!0,value:"base-tile"})],y.prototype,"type",void 0),(0,r._)([(0,l.Cb)({nonNullable:!0})],y.prototype,"fullExtent",void 0),(0,r._)([(0,l.Cb)()],y.prototype,"spatialReference",void 0),y=w=(0,r._)([(0,S.j)("esri.layers.BaseTileLayer")],y);const W=y;var A=e(49286),n=e(72258),K=e(72642);const T=new b.X({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"});let s=class extends((0,j.h)((0,A.q)((0,R.R)(W)))){constructor(t){super(t),this.type="bing-maps",this.tileInfo=new Z.Z({size:[256,256],dpi:96,origin:new K.Z({x:-20037508.342787,y:20037508.342787,spatialReference:m.Z.WebMercator}),spatialReference:m.Z.WebMercator,lods:[new n.Z({level:1,resolution:78271.5169639999,scale:295828763.795777}),new n.Z({level:2,resolution:39135.7584820001,scale:147914381.897889}),new n.Z({level:3,resolution:19567.8792409999,scale:73957190.948944}),new n.Z({level:4,resolution:9783.93962049996,scale:36978595.474472}),new n.Z({level:5,resolution:4891.96981024998,scale:18489297.737236}),new n.Z({level:6,resolution:2445.98490512499,scale:9244648.868618}),new n.Z({level:7,resolution:1222.99245256249,scale:4622324.434309}),new n.Z({level:8,resolution:611.49622628138,scale:2311162.217155}),new n.Z({level:9,resolution:305.748113140558,scale:1155581.108577}),new n.Z({level:10,resolution:152.874056570411,scale:577790.554289}),new n.Z({level:11,resolution:76.4370282850732,scale:288895.277144}),new n.Z({level:12,resolution:38.2185141425366,scale:144447.638572}),new n.Z({level:13,resolution:19.1092570712683,scale:72223.819286}),new n.Z({level:14,resolution:9.55462853563415,scale:36111.909643}),new n.Z({level:15,resolution:4.77731426794937,scale:18055.954822}),new n.Z({level:16,resolution:2.38865713397468,scale:9027.977411}),new n.Z({level:17,resolution:1.19432856685505,scale:4513.988705}),new n.Z({level:18,resolution:.597164283559817,scale:2256.994353}),new n.Z({level:19,resolution:.298582141647617,scale:1128.497176}),new n.Z({level:20,resolution:.1492910708238085,scale:564.248588})]}),this.key=null,this.style="road",this.culture="en-US",this.region=null,this.portalUrl=null,this.hasAttributionData=!0}get bingMetadata(){return this._get("bingMetadata")}set bingMetadata(t){this._set("bingMetadata",t)}get copyright(){return(0,c.pC)(this.bingMetadata)?this.bingMetadata.copyright:null}get operationalLayerType(){return T.toJSON(this.style)}get bingLogo(){return(0,c.pC)(this.bingMetadata)?this.bingMetadata.brandLogoUri:null}load(t){return this.addResolvingPromise(this.key?this._getMetadata():this.portalUrl?this._getPortalBingKey().then(()=>this._getMetadata()):Promise.reject(new g.Z("bingmapslayer:load","Bing layer must have bing key."))),Promise.resolve(this)}getTileUrl(t,o,a){if(!this.loaded||(0,c.Wi)(this.bingMetadata))return null;const d=this.bingMetadata.resourceSets[0].resources[0],i=d.imageUrlSubdomains[o%d.imageUrlSubdomains.length],p=this._getQuadKey(t,o,a);return d.imageUrl.replace("{subdomain}",i).replace("{quadkey}",p)}fetchAttributionData(){var t=this;return(0,M.Z)(function*(){return t.load().then(()=>(0,c.Wi)(t.bingMetadata)?null:{contributors:t.bingMetadata.resourceSets[0].resources[0].imageryProviders.map(o=>({attribution:o.attribution,coverageAreas:o.coverageAreas.map(a=>({zoomMin:a.zoomMin,zoomMax:a.zoomMax,score:1,bbox:[a.bbox[0],a.bbox[1],a.bbox[2],a.bbox[3]]}))}))})})()}_getMetadata(){return(0,u.default)(`https://dev.virtualearth.net/REST/v1/Imagery/Metadata/${{road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style]}`,{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then(o=>{const a=o.data;if(200!==a.statusCode)throw new g.Z("bingmapslayer:getmetadata",a.statusDescription);if(this.bingMetadata=a,0===this.bingMetadata.resourceSets.length)throw new g.Z("bingmapslayer:getmetadata","no bing resourcesets");if(0===this.bingMetadata.resourceSets[0].resources.length)throw new g.Z("bingmapslayer:getmetadata","no bing resources")}).catch(o=>{throw new g.Z("bingmapslayer:getmetadata",o.message)})}_getPortalBingKey(){return(0,u.default)(this.portalUrl??"",{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then(t=>{if(!t.data.bingKey)throw new g.Z("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");this.key=t.data.bingKey}).catch(t=>{throw new g.Z("bingmapslayer:getportalbingkey",t.message)})}_getQuadKey(t,o,a){let d="";for(let i=t;i>0;i--){let p=0;const h=1<<i-1;a&h&&(p+=1),o&h&&(p+=2),d+=p.toString()}return d}};(0,r._)([(0,l.Cb)({json:{read:!1,write:!1},value:null})],s.prototype,"bingMetadata",null),(0,r._)([(0,l.Cb)({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],s.prototype,"type",void 0),(0,r._)([(0,l.Cb)({type:Z.Z})],s.prototype,"tileInfo",void 0),(0,r._)([(0,l.Cb)({type:String,readOnly:!0,json:{read:!1,write:!1}})],s.prototype,"copyright",null),(0,r._)([(0,l.Cb)({type:String,json:{write:!1,read:!1}})],s.prototype,"key",void 0),(0,r._)([(0,l.Cb)({type:T.apiValues,nonNullable:!0,json:{read:{source:"layerType",reader:T.read}}})],s.prototype,"style",void 0),(0,r._)([(0,l.Cb)({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"]})],s.prototype,"operationalLayerType",null),(0,r._)([(0,l.Cb)({type:String,json:{write:!1,read:!1}})],s.prototype,"culture",void 0),(0,r._)([(0,l.Cb)({type:String,json:{write:!1,read:!1}})],s.prototype,"region",void 0),(0,r._)([(0,l.Cb)({type:String,json:{write:!0,read:!0}})],s.prototype,"portalUrl",void 0),(0,r._)([(0,l.Cb)({type:Boolean,json:{write:!1,read:!1}})],s.prototype,"hasAttributionData",void 0),(0,r._)([(0,l.Cb)({type:String,readOnly:!0})],s.prototype,"bingLogo",null),s=(0,r._)([(0,S.j)("esri.layers.BingMapsLayer")],s);const $=s},12585:(U,f,e)=>{e.d(f,{g:()=>B});var M=e(15861),r=e(26584);function B(g,b){return u.apply(this,arguments)}function u(){return(u=(0,M.Z)(function*(g,b){try{return yield createImageBitmap(g)}catch(c){throw new r.Z("request:server",`Unable to load ${b}`,{url:b,error:c})}})).apply(this,arguments)}}}]);