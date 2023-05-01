"use strict";(self.webpackChunkparcel_app=self.webpackChunkparcel_app||[]).push([[9735],{59735:(F,v,t)=>{t.r(v),t.d(v,{default:()=>H});var D=t(15861),i=t(17626),d=t(84792),h=t(26584),m=t(80542),f=t(47877),O=t(62208),C=t(99959),T=t(10699),u=t(21726),l=t(77712),g=t(66656),R=(t(85931),t(68653)),S=t(76898),L=t(99433),P=t(65234),U=t(44917),A=t(50085),B=t(5143),I=t(19027),W=t(65088),j=t(552),K=t(50107),b=t(49286),x=t(6647),N=t(30346),G=t(99555),Z=t(66120),E=t(38305),J=t(13812),V=t(12585),$=t(39058);const M=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let s=class extends((0,j.h)((0,Z.x)((0,G.M)((0,b.q)((0,x.I)((0,B.Z)((0,I.O)((0,W.Y)((0,C.R)((0,m.p)((0,N.Q)((0,A.V)((0,K.N)(U.Z)))))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(e,r){return"string"==typeof e?{url:e,...r}:e}load(e){const r=(0,O.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(T.r9).then(()=>this._fetchService(r))),Promise.resolve(this)}get attributionDataUrl(){const e=this.parsedUrl?.path.toLowerCase();return e?this._getDefaultAttribution(this._getMapName(e)):null}readSpatialReference(e,r){return(e=e||r.tileInfo&&r.tileInfo.spatialReference)&&P.Z.fromJSON(e)}writeSublayers(e,r,a,o){if(!this.loaded||!e)return;const p=e.slice().reverse().flatten(({sublayers:n})=>n&&n.toArray().reverse()).toArray(),_=[],c={writeSublayerStructure:!1,...o};p.forEach(n=>{const y=n.write({},c);_.push(y)}),_.some(n=>Object.keys(n).length>1)&&(r.layers=_)}get tileServers(){return this._getDefaultTileServers(this.parsedUrl?.path)}castTileServers(e){return Array.isArray(e)?e.map(r=>(0,u.mN)(r).path):null}fetchTile(e,r,a,o={}){const{signal:p}=o,_=this.getTileUrl(e,r,a),c={responseType:"image",signal:p,query:{...this.refreshParameters}};return(0,d.default)(_,c).then(n=>n.data)}fetchImageBitmapTile(e,r,a,o={}){var p=this;return(0,D.Z)(function*(){const{signal:_}=o,c=p.getTileUrl(e,r,a),n={responseType:"blob",signal:_,query:{...p.refreshParameters}},{data:y}=yield(0,d.default)(c,n);return(0,V.g)(y,c)})()}getTileUrl(e,r,a){const p=(0,u.B7)({...this.parsedUrl?.query,blankTile:!(!this.tilemapCache&&this.supportsBlankTile)&&null,...this.customParameters,token:this.apiKey}),_=this.tileServers;return`${_&&_.length?_[r%_.length]:this.parsedUrl?.path}/tile/${e}/${r}/${a}${p?"?"+p:""}`}loadAll(){return(0,f.G)(this,e=>{e(this.allSublayers)})}_fetchService(e){return new Promise((r,a)=>{if(this.sourceJSON){if(null!=this.sourceJSON.bandCount&&null!=this.sourceJSON.pixelSizeX)throw new h.Z("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void r({data:this.sourceJSON})}if(!this.parsedUrl)throw new h.Z("tile-layer:undefined-url","layer's url is not defined");const o=(0,E.Qc)(this.parsedUrl.path);if((0,O.pC)(o)&&"ImageServer"===o.serverType)throw new h.Z("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");(0,d.default)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(r,a)}).then(r=>{let a=this.url;if(r.ssl&&(a=this.url=a.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl}),10.1===this.version&&!(0,E.M8)(a))return this._fetchServerVersion(a,e).then(o=>{this.read({currentVersion:o})}).catch(()=>{})})}_fetchServerVersion(e,r){if(!(0,E.B5)(e))return Promise.reject();const a=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return(0,d.default)(a,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:r}).then(o=>{if(o.data&&o.data.currentVersion)return o.data.currentVersion;throw new h.Z("tile-layer:version-not-available")})}_getMapName(e){const r=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r?r[2]:void 0}_getDefaultAttribution(e){if(null==e)return null;let r;e=e.toLowerCase();for(let a=0,o=M.length;a<o;a++)if(r=M[a],r.toLowerCase().includes(e))return(0,u.hF)("//static.arcgis.com/attribution/"+r);return null}_getDefaultTileServers(e){if(null==e)return[];const r=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),a=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return r||a?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return!this.fetchTile.__isDefault__}};(0,i._)([(0,l.Cb)({readOnly:!0})],s.prototype,"attributionDataUrl",null),(0,i._)([(0,l.Cb)({type:["show","hide","hide-children"]})],s.prototype,"listMode",void 0),(0,i._)([(0,l.Cb)({json:{read:!0,write:!0}})],s.prototype,"blendMode",void 0),(0,i._)([(0,l.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],s.prototype,"isReference",void 0),(0,i._)([(0,l.Cb)({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],s.prototype,"operationalLayerType",void 0),(0,i._)([(0,l.Cb)({type:Boolean})],s.prototype,"resampling",void 0),(0,i._)([(0,l.Cb)()],s.prototype,"sourceJSON",void 0),(0,i._)([(0,l.Cb)({type:P.Z})],s.prototype,"spatialReference",void 0),(0,i._)([(0,R.r)("spatialReference",["spatialReference","tileInfo"])],s.prototype,"readSpatialReference",null),(0,i._)([(0,l.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],s.prototype,"path",void 0),(0,i._)([(0,l.Cb)({readOnly:!0})],s.prototype,"sublayers",void 0),(0,i._)([(0,L.c)("sublayers",{layers:{type:[$.Z]}})],s.prototype,"writeSublayers",null),(0,i._)([(0,l.Cb)({json:{read:!1,write:!1}})],s.prototype,"popupEnabled",void 0),(0,i._)([(0,l.Cb)()],s.prototype,"tileServers",null),(0,i._)([(0,g.p)("tileServers")],s.prototype,"castTileServers",null),(0,i._)([(0,l.Cb)({readOnly:!0,json:{read:!1}})],s.prototype,"type",void 0),(0,i._)([(0,l.Cb)(J.HQ)],s.prototype,"url",void 0),s=(0,i._)([(0,S.j)("esri.layers.TileLayer")],s),s.prototype.fetchTile.__isDefault__=!0;const H=s}}]);