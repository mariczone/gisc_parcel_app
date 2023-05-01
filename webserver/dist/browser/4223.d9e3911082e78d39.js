"use strict";(self.webpackChunkparcel_app=self.webpackChunkparcel_app||[]).push([[4223,7351],{64223:(oe,D,n)=>{n.r(D),n.d(D,{default:()=>Xe});var L=n(15861),a=n(17626),E=n(84792),C=n(74333),S=n(26584),I=n(58817),F=n(62208),he=n(99959),fe=n(94113),Y=n(10699),U=n(32917),z=n(21726),u=n(77712),Z=(n(90912),n(68653)),H=n(76898),ge=n(99433),N=n(2004),ve=n(44917),xe=n(28678),Se=n(552),we=n(49286),Me=n(6647),Ce=n(30346),Ie=n(99555),Te=n(12585),Q=n(2584);class Le{constructor(t,r=0,i=t.lods.length-1){this.tileInfo=t,this.minLOD=r,this.maxLOD=i}getAvailability(t,r,i){const s=this.tileInfo?.lodAt(t);return!s||t<this.minLOD||t>this.maxLOD?"unavailable":s.cols&&s.rows?i>=s.cols[0]&&i<=s.cols[1]&&r>=s.rows[0]&&r<=s.rows[1]?"available":"unavailable":"available"}fetchAvailability(t,r,i,s){var o=this;return(0,L.Z)(function*(){return yield(0,Y.Yn)(s),o.getAvailability(t,r,i)})()}fetchAvailabilityUpsample(t,r,i,s,o){var l=this;return(0,L.Z)(function*(){yield(0,Y.Yn)(o),s.level=t,s.row=r,s.col=i;const c=l.tileInfo;for(c.updateTileInfo(s);;){const d=l.getAvailability(s.level,s.row,s.col);if("unavailable"!==d)return d;if(!c.upsampleTile(s))return"unavailable"}})()}}var k,be=n(91309),X=n(86810);n(85931);let B=k=class extends X.wq{constructor(e){super(e),this.fullExtent=null,this.id=null,this.tileInfo=null}clone(){const e=new k;return this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("tileInfo")&&(e.tileInfo=this.tileInfo&&this.tileInfo.clone()),e}};(0,a._)([(0,u.Cb)({type:N.Z,json:{read:{source:"fullExtent"}}})],B.prototype,"fullExtent",void 0),(0,a._)([(0,u.Cb)({type:String,json:{read:{source:"id"}}})],B.prototype,"id",void 0),(0,a._)([(0,u.Cb)({type:Q.Z,json:{read:{source:"tileInfo"}}})],B.prototype,"tileInfo",void 0),B=k=(0,a._)([(0,H.j)("esri.layer.support.TileMatrixSet")],B);const Ee=B;var _;let R=_=class extends X.wq{constructor(e){super(e),this.id=null,this.title=null,this.description=null,this.legendUrl=null}clone(){const e=new _;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("isDefault")&&(e.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(e.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(e.title=this.title),e}};(0,a._)([(0,u.Cb)({json:{read:{source:"id"}}})],R.prototype,"id",void 0),(0,a._)([(0,u.Cb)({json:{read:{source:"title"}}})],R.prototype,"title",void 0),(0,a._)([(0,u.Cb)({json:{read:{source:"abstract"}}})],R.prototype,"description",void 0),(0,a._)([(0,u.Cb)({json:{read:{source:"legendUrl"}}})],R.prototype,"legendUrl",void 0),(0,a._)([(0,u.Cb)({json:{read:{source:"isDefault"}}})],R.prototype,"isDefault",void 0),(0,a._)([(0,u.Cb)({json:{read:{source:"keywords"}}})],R.prototype,"keywords",void 0),R=_=(0,a._)([(0,H.j)("esri.layer.support.WMTSStyle")],R);const Pe=R;var q;let w=q=class extends X.wq{constructor(e){super(e),this.fullExtent=null,this.fullExtents=null,this.imageFormats=null,this.id=null,this.layer=null,this.styles=null,this.tileMatrixSetId=null,this.tileMatrixSets=null}get description(){return this._get("description")}set description(e){this._set("description",e)}readFullExtent(e,t){return(e=t.fullExtent)?N.Z.fromJSON(e):null}readFullExtents(e,t){return t.fullExtents?.length?t.fullExtents.map(r=>N.Z.fromJSON(r)):t.tileMatrixSets?.map(r=>N.Z.fromJSON(r.fullExtent)).filter(r=>r)??[]}get imageFormat(){let e=this._get("imageFormat");return e||(e=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),e}set imageFormat(e){const t=this.imageFormats;e&&(e.includes("image/")||t&&!t.includes(e))&&(e.includes("image/")||(e="image/"+e),t&&!t.includes(e))?console.error("The layer doesn't support the format of "+e):this._set("imageFormat",e)}get styleId(){let e=this._get("styleId");return e||(e=this.styles?.length?this.styles.getItemAt(0).id:""),e}set styleId(e){this._set("styleId",e)}get title(){return this._get("title")}set title(e){this._set("title",e)}get tileMatrixSet(){return this.tileMatrixSets?this.tileMatrixSets.find(e=>e.id===this.tileMatrixSetId):null}clone(){const e=new q;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("imageFormats")&&(e.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(e.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("styleId")&&(e.styleId=this.styleId),this.hasOwnProperty("styles")&&(e.styles=this.styles&&this.styles.clone()),this.hasOwnProperty("tileMatrixSetId")&&(e.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(e.tileMatrixSets=this.tileMatrixSets?.clone()),this.hasOwnProperty("title")&&(e.title=this.title),e}};(0,a._)([(0,u.Cb)()],w.prototype,"description",null),(0,a._)([(0,u.Cb)()],w.prototype,"fullExtent",void 0),(0,a._)([(0,Z.r)("fullExtent",["fullExtent"])],w.prototype,"readFullExtent",null),(0,a._)([(0,u.Cb)({readOnly:!0})],w.prototype,"fullExtents",void 0),(0,a._)([(0,Z.r)("fullExtents",["fullExtents","tileMatrixSets"])],w.prototype,"readFullExtents",null),(0,a._)([(0,u.Cb)()],w.prototype,"imageFormat",null),(0,a._)([(0,u.Cb)({json:{read:{source:"formats"}}})],w.prototype,"imageFormats",void 0),(0,a._)([(0,u.Cb)()],w.prototype,"id",void 0),(0,a._)([(0,u.Cb)()],w.prototype,"layer",void 0),(0,a._)([(0,u.Cb)()],w.prototype,"styleId",null),(0,a._)([(0,u.Cb)({type:C.Z.ofType(Pe),json:{read:{source:"styles"}}})],w.prototype,"styles",void 0),(0,a._)([(0,u.Cb)({value:null,json:{write:{ignoreOrigin:!0}}})],w.prototype,"title",null),(0,a._)([(0,u.Cb)()],w.prototype,"tileMatrixSetId",void 0),(0,a._)([(0,u.Cb)({readOnly:!0})],w.prototype,"tileMatrixSet",null),(0,a._)([(0,u.Cb)({type:C.Z.ofType(Ee),json:{read:{source:"tileMatrixSets"}}})],w.prototype,"tileMatrixSets",void 0),w=q=(0,a._)([(0,H.j)("esri.layers.support.WMTSSublayer")],w);const K=w;var Oe=n(92383),Re=n(72642),ee=n(84029),te=n(22825),ae=n(7255),Fe=n(72258);const ne=90.71428571428571;function ue(e){const t=e.replace(/ows:/gi,"");if(!g("Contents",(new DOMParser).parseFromString(t,"text/xml").documentElement))throw new S.Z("wmtslayer:wmts-capabilities-xml-is-not-valid","the wmts get capabilities response is not compliant",{text:e})}function re(e){return e.nodeType===Node.ELEMENT_NODE}function g(e,t){for(let r=0;r<t.childNodes.length;r++){const i=t.childNodes[r];if(re(i)&&i.nodeName===e)return i}return null}function A(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const s=t.childNodes[i];re(s)&&s.nodeName===e&&r.push(s)}return r}function W(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const s=t.childNodes[i];re(s)&&s.nodeName===e&&r.push(s)}return r.map(i=>i.textContent).filter(F.pC)}function h(e,t){return e.split(">").forEach(r=>{t&&(t=g(r,t))}),t&&t.textContent}function $(e,t,r,i){let s;return Array.prototype.slice.call(i.childNodes).some(o=>{if(o.nodeName.includes(e)){const l=g(t,o),c=l&&l.textContent;if(c===r||r.split(":")&&r.split(":")[1]===c)return s=o,!0}return!1}),s}function ce(e,t){const r=[],i=e.layerMap?.get(t);if(!i)return null;const s=A("ResourceURL",i),o=A("Dimension",i);let l,c,d,y;return o.length&&(l=h("Identifier",o[0]),c=W("Default",o[0])||W("Value",o[0])),o.length>1&&(d=h("Identifier",o[1]),y=W("Default",o[1])||W("Value",o[1])),e.dimensionMap.set(t,{dimensions:c,dimensions2:y}),s.forEach(f=>{let p=f.getAttribute("template");if("tile"===f.getAttribute("resourceType")){if(l&&c.length)if(p.includes("{"+l+"}"))p=p.replace("{"+l+"}","{dimensionValue}");else{const x=p.toLowerCase().indexOf("{"+l.toLowerCase()+"}");x>-1&&(p=p.substring(0,x)+"{dimensionValue}"+p.substring(x+l.length+2))}if(d&&y.length)if(p.includes("{"+d+"}"))p=p.replace("{"+d+"}","{dimensionValue2}");else{const x=p.toLowerCase().indexOf("{"+d.toLowerCase()+"}");x>-1&&(p=p.substring(0,x)+"{dimensionValue2}"+p.substring(x+d.length+2))}r.push({template:p,format:f.getAttribute("format"),resourceType:"tile"})}}),r}function We(e){const t=g("WGS84BoundingBox",e),r=t?h("LowerCorner",t).split(" "):["-180","-90"],i=t?h("UpperCorner",t).split(" "):["180","90"];return{xmin:parseFloat(r[0]),ymin:parseFloat(r[1]),xmax:parseFloat(i[0]),ymax:parseFloat(i[1]),spatialReference:{wkid:4326}}}function De(e){const t=[];return(0,ae.h)(e,{BoundingBox:r=>{if(!r.getAttribute("crs"))return;const i=r.getAttribute("crs").toLowerCase(),s=ie(i),o=i.includes("epsg")&&(0,te.A)(s.wkid);let l,c,d,y;(0,ae.h)(r,{LowerCorner:f=>{[l,c]=f.textContent.split(" ").map(p=>Number.parseFloat(p)),o&&([l,c]=[c,l])},UpperCorner:f=>{[d,y]=f.textContent.split(" ").map(p=>Number.parseFloat(p)),o&&([d,y]=[y,d])}}),t.push({xmin:l,ymin:c,xmax:d,ymax:y,spatialReference:s})}}),t}function Be(e,t){return A("Style",e).map(r=>{const i=g("LegendURL",r),s=g("Keywords",r),o=s?W("Keyword",s):[];let l=i&&i.getAttribute("xlink:href");return t&&(l=l&&l.replace(/^http:/i,"https:")),{abstract:h("Abstract",r),id:h("Identifier",r),isDefault:"true"===r.getAttribute("isDefault"),keywords:o,legendUrl:l,title:h("Title",r)}})}function Ke(e,t,r){return A("TileMatrixSetLink",t).map(i=>function $e(e,t,r){const i=g("TileMatrixSet",t).textContent,s=W("TileMatrix",t),o=r.find(M=>{const P=g("Identifier",M),j=P&&P.textContent;return!!(j===i||i.split(":")&&i.split(":")[1]===j)}),l=g("TileMatrixSetLimits",t),c=l&&A("TileMatrixLimits",l),d=new Map;if(c?.length)for(const M of c){const P=g("TileMatrix",M).textContent,j=+g("MinTileRow",M).textContent,se=+g("MaxTileRow",M).textContent,le=+g("MinTileCol",M).textContent,b=+g("MaxTileCol",M).textContent;d.set(P,{minCol:le,maxCol:b,minRow:j,maxRow:se})}const y=h("SupportedCRS",o).toLowerCase(),f=function Ge(e,t){return de(g("TileMatrix",e),t)}(o,y),p=f.spatialReference,x=g("TileMatrix",o),T=[parseInt(h("TileWidth",x),10),parseInt(h("TileHeight",x),10)],v=[];s.length?s.forEach((M,P)=>{const j=$("TileMatrix","Identifier",M,o);v.push(pe(j,y,P,i,d))}):A("TileMatrix",o).forEach((M,P)=>{v.push(pe(M,y,P,i,d))});const V=function Je(e,t,r,i,s){const o=g("BoundingBox",t);let l,c,d,y,f,p;if(o&&(l=h("LowerCorner",o).split(" "),c=h("UpperCorner",o).split(" ")),l&&l.length>1&&c&&c.length>1)d=parseFloat(l[0]),f=parseFloat(l[1]),y=parseFloat(c[0]),p=parseFloat(c[1]);else{const x=g("TileMatrix",t),T=parseInt(h("MatrixWidth",x),10),v=parseInt(h("MatrixHeight",x),10);d=r.x,p=r.y,y=d+T*i[0]*s.resolution,f=p-v*i[1]*s.resolution}return function Ye(e,t,r){return"1.0.0"===e&&(0,te.A)(t.wkid)&&!(r.spatialReference.isGeographic&&r.x<-90&&r.y>=-90)}(e,r.spatialReference,r)?new N.Z(f,d,p,y,r.spatialReference):new N.Z(d,f,y,p,r.spatialReference)}(e,o,f,T,v[0]).toJSON(),J=new Q.Z({dpi:96,spatialReference:p,size:T,origin:f,lods:v}).toJSON();return{id:i,fullExtent:V,tileInfo:J}}(e,i,r))}function ie(e){e=e.toLowerCase();let t=parseInt(e.split(":").pop(),10);900913!==t&&3857!==t||(t=102100);const r=function He(e){return e.includes("crs84")||e.includes("crs:84")?G.CRS84:e.includes("crs83")||e.includes("crs:83")?G.CRS83:e.includes("crs27")||e.includes("crs:27")?G.CRS27:null}(e);return(0,F.pC)(r)&&(t=r),{wkid:t}}function de(e,t){const r=ie(t),[i,s]=h("TopLeftCorner",e).split(" ").map(l=>parseFloat(l)),o=t.includes("epsg")&&(0,te.A)(r.wkid);return new Re.Z(o?{x:s,y:i,spatialReference:r}:{x:i,y:s,spatialReference:r})}var G,e;function pe(e,t,r,i,s){const o=ie(t),l=h("Identifier",e);let c=parseFloat(h("ScaleDenominator",e));const d=me(o.wkid,c,i);c*=96/ne;const y=+h("MatrixWidth",e),f=+h("MatrixHeight",e),{maxCol:p=y-1,maxRow:x=f-1,minCol:T=0,minRow:v=0}=s.get(l)??{},{x:V,y:J}=de(e,t);return new Fe.Z({cols:[T,p],level:r,levelValue:l,origin:[V,J],scale:c,resolution:d,rows:[v,x]})}function me(e,t,r){let i;return i=ee.Z.hasOwnProperty(""+e)?ee.Z.values[ee.Z[e]]:"default028mm"===r?6370997*Math.PI/180:(0,Oe.e8)(e).metersPerDegree,7*t/25e3/i}(e=G||(G={}))[e.CRS84=4326]="CRS84",e[e.CRS83=4269]="CRS83",e[e.CRS27=4267]="CRS27";const ye={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},ze=new Set(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]);let m=class extends((0,Se.h)((0,Ce.Q)((0,Ie.M)((0,we.q)((0,Me.I)((0,he.R)(ve.Z))))))){constructor(...e){super(...e),this.copyright="",this.customParameters=null,this.customLayerParameters=null,this.fullExtent=null,this.operationalLayerType="WebTiledLayer",this.resourceInfo=null,this.serviceMode="RESTful",this.sublayers=null,this.type="wmts",this.version="1.0.0",this.addHandles([(0,U.YP)(()=>this.activeLayer,(t,r)=>{r&&(r.layer=null),t&&(t.layer=this)},U.Z_),(0,U.on)(()=>this.sublayers,"after-add",({item:t})=>{t.layer=this},U.Z_),(0,U.on)(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=null},U.Z_),(0,U.YP)(()=>this.sublayers,(t,r)=>{if(r)for(const i of r)i.layer=null;if(t)for(const i of t)i.layer=this},U.Z_)])}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){if("KVP"===this.serviceMode||"RESTful"===this.serviceMode)return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).catch(Y.r9).then(()=>this._fetchService(e)).catch(t=>{throw(0,Y.r9)(t),new S.Z("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:t})})),Promise.resolve(this);console.error("WMTS mode could only be 'KVP' or 'RESTful'")}get activeLayer(){return this._get("activeLayer")}set activeLayer(e){this._set("activeLayer",e)}readActiveLayerFromService(e,t,r){this.activeLayer||(this.activeLayer=new K);let i=t.layers.find(s=>s.id===this.activeLayer.id);return i||(i=t.layers[0]),this.activeLayer.read(i,r),this.activeLayer}readActiveLayerFromItemOrWebDoc(e,t){const{templateUrl:r,wmtsInfo:i}=t,s=r?this._getLowerCasedUrlParams(r):null,o=i?.layerIdentifier;let l=null;const c=i?.tileMatrixSet;c&&(Array.isArray(c)?c.length&&(l=c[0]):l=c);const d=s?.format,y=s?.style;return new K({id:o,imageFormat:d,styleId:y,tileMatrixSetId:l})}writeActiveLayer(e,t,r,i){const s=this.activeLayer;t.templateUrl=this.getUrlTemplate(s.id,s.tileMatrixSetId,s.imageFormat,s.styleId);const o=(0,fe.hS)("tileMatrixSet.tileInfo",s);t.tileInfo=o?o.toJSON(i):null,t.wmtsInfo={...t.wmtsInfo,layerIdentifier:s.id,tileMatrixSet:s.tileMatrixSetId}}readCustomParameters(e,t){const r=t.wmtsInfo;return r?this._mergeParams(r.customParameters,r.url):null}get fullExtents(){return this.activeLayer.fullExtents}readServiceMode(e,t){return t.templateUrl.includes("?")?"KVP":"RESTful"}readSublayersFromService(e,t,r){return function Qe(e,t){return e.map(r=>{const i=new K;return i.read(r,t),i})}(t.layers,r)}get supportedSpatialReferences(){return this.activeLayer.tileMatrixSets?.map(e=>e.tileInfo?.spatialReference).toArray().filter(F.pC)??[]}get tilemapCache(){const e=this.activeLayer?.tileMatrixSet?.tileInfo;return e?new Le(e):void 0}get title(){return this.activeLayer?.title??"Layer"}set title(e){this._overrideIfSome("title",e)}get url(){return this._get("url")}set url(e){e&&"/"===e.substr(-1)?this._set("url",e.slice(0,-1)):this._set("url",e)}createWebTileLayer(e){const t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),r=this._getTileMatrixSetById(e.tileMatrixSetId)?.tileInfo,i=e.fullExtent,s=new be.B({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(s.customLayerParameters=this.customLayerParameters),this.customParameters&&(s.customParameters=this.customParameters),new xe.default({fullExtent:i,urlTemplate:t,tileInfo:r,wmtsInfo:s})}fetchTile(e,t,r){var i=this;return(0,L.Z)(function*(){const s=i.getTileUrl(e,t,r),{data:o}=yield(0,E.default)(s,{responseType:"image"});return o})()}fetchImageBitmapTile(e,t,r){var i=this;return(0,L.Z)(function*(){const s=i.getTileUrl(e,t,r),{data:o}=yield(0,E.default)(s,{responseType:"blob"});return(0,Te.g)(o,s)})()}findSublayerById(e){return this.sublayers?.find(t=>t.id===e)}getTileUrl(e,t,r){const i=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId)?.tileInfo?.lods[e],s=i?i.levelValue?i.levelValue:`${i.level}`:`${e}`;let o=this.resourceInfo?"":function je(e,t,r,i,s,o,l,c){const d=function Ze(e,t,r){const i=ce(e,t),s=i?.filter(o=>o.format===r);return(s?.length?s:i)??[]}(e,t,i);if(!(d?.length>0))return"";const{dimensionMap:y}=e,f=y.get(t).dimensions?.[0],p=y.get(t).dimensions2?.[0];return d[l%d.length].template.replace(/\{Style\}/gi,s??"").replace(/\{TileMatrixSet\}/gi,r??"").replace(/\{TileMatrix\}/gi,o).replace(/\{TileRow\}/gi,""+l).replace(/\{TileCol\}/gi,""+c).replace(/\{dimensionValue\}/gi,f).replace(/\{dimensionValue2\}/gi,p)}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,s,t,r);return o||(o=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replace(/\{level\}/gi,s).replace(/\{row\}/gi,`${t}`).replace(/\{col\}/gi,`${r}`)),o=this._appendCustomLayerParameters(o),o}getUrlTemplate(e,t,r,i){if(!this.resourceInfo){const s=function Ne(e,t,r,i){const{dimensionMap:s}=e,o=ce(e,t);let l="";if(o&&o.length>0){const c=s.get(t).dimensions&&s.get(t).dimensions[0],d=s.get(t).dimensions2&&s.get(t).dimensions2[0];l=o[0].template,l.indexOf(".xxx")===l.length-4&&(l=l.slice(0,l.length-4)),l=l.replace(/\{Style\}/gi,i),l=l.replace(/\{TileMatrixSet\}/gi,r),l=l.replace(/\{TileMatrix\}/gi,"{level}"),l=l.replace(/\{TileRow\}/gi,"{row}"),l=l.replace(/\{TileCol\}/gi,"{col}"),l=l.replace(/\{dimensionValue\}/gi,c),l=l.replace(/\{dimensionValue2\}/gi,d)}return l}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,i);if(s)return s}if("KVP"===this.serviceMode)return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+i+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if("RESTful"===this.serviceMode){let s="";return ye[r.toLowerCase()]&&(s=ye[r.toLowerCase()]),this.url+e+"/"+i+"/"+t+"/{level}/{row}/{col}"+s}return""}_fetchService(e){var t=this;return(0,L.Z)(function*(){let r;if(t.resourceInfo)"KVP"===t.resourceInfo.serviceMode&&(t.url+=t.url.includes("?")?"":"?"),r={ssl:!1,data:t.resourceInfo};else try{r=yield t._getCapabilities(t.serviceMode,e),ue(r.data)}catch{const i="KVP"===t.serviceMode?"RESTful":"KVP";try{r=yield t._getCapabilities(i,e),ue(r.data),t.serviceMode=i}catch(s){throw new S.Z("wmtslayer:unsupported-service-data","Services does not support RESTful or KVP service modes.",{error:s})}}r.data=t.resourceInfo?function Ae(e){return e.layers.forEach(t=>{t.tileMatrixSets?.forEach(r=>{const i=r.tileInfo;i&&96!==i.dpi&&(i.lods?.forEach(s=>{s.scale=96*s.scale/i.dpi,s.resolution=me(i.spatialReference?.wkid,s.scale*ne/96,r.id)}),i.dpi=96)})}),e}(r.data):function Ue(e,t){e=e.replace(/ows:/gi,"");const r=(new DOMParser).parseFromString(e,"text/xml").documentElement,i=new Map,s=new Map,o=g("Contents",r);if(!o)throw new S.Z("wmtslayer:wmts-capabilities-xml-is-not-valid");const l=g("OperationsMetadata",r)?.querySelector("[name='GetTile']"),c=l?.getElementsByTagName("Get"),d=c&&Array.prototype.slice.call(c),y=t.url?.indexOf("https"),f=void 0!==y&&y>-1;let p,x,T=t.serviceMode,v=t?.url;d&&d.length&&d.some(b=>{const O=g("Constraint",b);return!O||$("AllowedValues","Value",T,O)?(v=b.attributes[0].nodeValue,!0):(!O||$("AllowedValues","Value","RESTful",O)||$("AllowedValues","Value","REST",O)?x=b.attributes[0].nodeValue:O&&!$("AllowedValues","Value","KVP",O)||(p=b.attributes[0].nodeValue),!1)}),!v&&(x?(v=x,T="RESTful"):p?(v=p,T="KVP"):v=g("ServiceMetadataURL",r)?.getAttribute("xlink:href"));const V=v.indexOf("1.0.0/");-1===V&&"RESTful"===T?v+="/":V>-1&&(v=v.substring(0,V)),"KVP"===T&&(v+=V>-1?"":"?"),f&&(v=v.replace(/^http:/i,"https:"));const J=h("ServiceIdentification>ServiceTypeVersion",r),M=h("ServiceIdentification>AccessConstraints",r),P=M&&/^none$/i.test(M)?null:M,j=A("Layer",o),se=A("TileMatrixSet",o),le=j.map(b=>{const O=h("Identifier",b);return i.set(O,b),function Ve(e,t,r,i,s){const o=h("Abstract",t),l=W("Format",t);return{id:e,fullExtent:We(t),fullExtents:De(t),description:o,formats:l,styles:Be(t,i),title:h("Title",t),tileMatrixSets:Ke(s,t,r)}}(O,b,se,f,J)});return{copyright:P,dimensionMap:s,layerMap:i,layers:le,serviceMode:T,tileUrl:v}}(r.data,{serviceMode:t.serviceMode,url:t.url}),r.data&&t.read(r.data,{origin:"service"})})()}_getCapabilities(e,t){var r=this;return(0,L.Z)(function*(){const i=r._getCapabilitiesUrl(e);return yield(0,E.default)(i,{...t,responseType:"text"})})()}_getTileMatrixSetById(e){return this.findSublayerById(this.activeLayer.id)?.tileMatrixSets?.find(r=>r.id===e)}_appendCustomParameters(e){return this._appendParameters(e,this.customParameters)}_appendCustomLayerParameters(e){return this._appendParameters(e,{...(0,I.d9)(this.customParameters),...this.customLayerParameters})}_appendParameters(e,t){const r=(0,z.mN)(e),i={...r.query,...t},s=(0,z.B7)(i);return""===s?r.path:`${r.path}?${s}`}_getCapabilitiesUrl(e){return this.url=this.url.split("?")[0],this._appendCustomParameters("KVP"===e?`${this.url}?request=GetCapabilities&service=WMTS&version=${this.version}`:`${this.url}/${this.version}/WMTSCapabilities.xml`)}_getLowerCasedUrlParams(e){if(!e)return null;const t=(0,z.mN)(e).query;if(!t)return null;const r={};return Object.keys(t).forEach(i=>{r[i.toLowerCase()]=t[i]}),r}_mergeParams(e,t){const r=this._getLowerCasedUrlParams(t);if(r){const i=Object.keys(r);i.length&&(e=e?(0,I.d9)(e):{},i.forEach(s=>{e.hasOwnProperty(s)||ze.has(s)||(e[s]=r[s])}))}return e}};(0,a._)([(0,u.Cb)()],m.prototype,"dimensionMap",void 0),(0,a._)([(0,u.Cb)()],m.prototype,"layerMap",void 0),(0,a._)([(0,u.Cb)({type:K,json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],m.prototype,"activeLayer",null),(0,a._)([(0,Z.r)("service","activeLayer",["layers"])],m.prototype,"readActiveLayerFromService",null),(0,a._)([(0,Z.r)(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],m.prototype,"readActiveLayerFromItemOrWebDoc",null),(0,a._)([(0,ge.c)(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:Q.Z},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],m.prototype,"writeActiveLayer",null),(0,a._)([(0,u.Cb)({type:String,value:"",json:{write:!0}})],m.prototype,"copyright",void 0),(0,a._)([(0,u.Cb)({type:["show","hide"]})],m.prototype,"listMode",void 0),(0,a._)([(0,u.Cb)({json:{read:!0,write:!0}})],m.prototype,"blendMode",void 0),(0,a._)([(0,u.Cb)({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],m.prototype,"customParameters",void 0),(0,a._)([(0,Z.r)(["portal-item","web-document"],"customParameters")],m.prototype,"readCustomParameters",null),(0,a._)([(0,u.Cb)({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],m.prototype,"customLayerParameters",void 0),(0,a._)([(0,u.Cb)({type:N.Z,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],m.prototype,"fullExtent",void 0),(0,a._)([(0,u.Cb)({readOnly:!0})],m.prototype,"fullExtents",null),(0,a._)([(0,u.Cb)({type:["WebTiledLayer"]})],m.prototype,"operationalLayerType",void 0),(0,a._)([(0,u.Cb)()],m.prototype,"resourceInfo",void 0),(0,a._)([(0,u.Cb)()],m.prototype,"serviceMode",void 0),(0,a._)([(0,Z.r)(["portal-item","web-document"],"serviceMode",["templateUrl"])],m.prototype,"readServiceMode",null),(0,a._)([(0,u.Cb)({type:C.Z.ofType(K)})],m.prototype,"sublayers",void 0),(0,a._)([(0,Z.r)("service","sublayers",["layers"])],m.prototype,"readSublayersFromService",null),(0,a._)([(0,u.Cb)({readOnly:!0})],m.prototype,"supportedSpatialReferences",null),(0,a._)([(0,u.Cb)({readOnly:!0})],m.prototype,"tilemapCache",null),(0,a._)([(0,u.Cb)({json:{read:{source:"title"}}})],m.prototype,"title",null),(0,a._)([(0,u.Cb)({json:{read:!1},readOnly:!0,value:"wmts"})],m.prototype,"type",void 0),(0,a._)([(0,u.Cb)({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],m.prototype,"url",null),(0,a._)([(0,u.Cb)()],m.prototype,"version",void 0),m=(0,a._)([(0,H.j)("esri.layers.WMTSLayer")],m);const Xe=m},7255:(oe,D,n)=>{function L(E,C){if(E&&C)for(const S of E.children)if(S.localName in C){const I=C[S.localName];if("function"==typeof I){const F=I(S);F&&L(S,F)}else L(S,I)}}function*a(E,C){for(const S of E.children)if(S.localName in C){const I=C[S.localName];"function"==typeof I?yield I(S):yield*a(S,I)}}n.d(D,{H:()=>a,h:()=>L})},12585:(oe,D,n)=>{n.d(D,{g:()=>E});var L=n(15861),a=n(26584);function E(S,I){return C.apply(this,arguments)}function C(){return(C=(0,L.Z)(function*(S,I){try{return yield createImageBitmap(S)}catch(F){throw new a.Z("request:server",`Unable to load ${I}`,{url:I,error:F})}})).apply(this,arguments)}}}]);