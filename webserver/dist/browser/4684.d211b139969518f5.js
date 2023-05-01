"use strict";(self.webpackChunkparcel_app=self.webpackChunkparcel_app||[]).push([[4684],{14684:(re,V,f)=>{f.r(V),f.d(V,{ElevationQuery:()=>le,GeometryDescriptor:()=>g,getFinestLodIndex:()=>M});var m=f(15861),N=f(59213),x=f(26584),d=f(62208),E=f(10699),Z=f(16730),I=f(72854),C=f(72642),B=f(55214),A=f(55915),w=f(65401),J=(f(29132),f(8314),f(63290)),K=f(46367);const q=J.Z.getLogger("esri.layers.support.ElevationSampler");class S{queryElevation(e){return function Y(c,e){const t=L(c,e.spatialReference);if(!t)return null;switch(c.type){case"point":!function ee(c,e,t){c.z=t.elevationAt(e.x,e.y)}(c,t,e);break;case"polyline":!function te(c,e,t){T.spatialReference=e.spatialReference;const n=c.hasM&&!c.hasZ;for(let i=0;i<c.paths.length;i++){const l=c.paths[i],s=e.paths[i];for(let o=0;o<l.length;o++){const a=l[o],r=s[o];T.x=r[0],T.y=r[1],n&&(a[3]=a[2]),a[2]=t.elevationAt(T.x,T.y)}}c.hasZ=!0}(c,t,e);break;case"multipoint":!function ne(c,e,t){T.spatialReference=e.spatialReference;const n=c.hasM&&!c.hasZ;for(let i=0;i<c.points.length;i++){const l=c.points[i],s=e.points[i];T.x=s[0],T.y=s[1],n&&(l[3]=l[2]),l[2]=t.elevationAt(T.x,T.y)}c.hasZ=!0}(c,t,e)}return c}(e.clone(),this)}on(){return ie}projectIfRequired(e,t){return L(e,t)}}class X extends S{get spatialReference(){return this.extent.spatialReference}constructor(e,t,n){super(),this.tile=e,this.noDataValue=n;const i=e.tile.extent;this.extent=(0,w.HH)(i,t.spatialReference),this.extent.zmin=e.zmin,this.extent.zmax=e.zmax,this._aaExtent=i;const l=(0,Z.c9)(t.spatialReference),s=t.lodAt(e.tile.level).resolution*l;this.demResolution={min:s,max:s}}contains(e){const t=this.projectIfRequired(e,this.spatialReference);return!(0,d.Wi)(t)&&this.containsAt(t.x,t.y)}containsAt(e,t){return(0,w.jE)(this._aaExtent,e,t)}elevationAt(e,t){if(!this.containsAt(e,t)){const n=this.extent;return q.warn("#elevationAt()",`Point used to sample elevation (${e}, ${t}) is outside of the sampler extent (${n.xmin}, ${n.ymin}, ${n.xmax}, ${n.ymax})`),this.noDataValue}return(0,d.Pt)(this.tile.sample(e,t),this.noDataValue)}}class $ extends S{get spatialReference(){return this.extent.spatialReference}constructor(e,t,n){let i;super(),"number"==typeof t?(this.noDataValue=t,i=null):(i=t,this.noDataValue=n),this.samplers=i?e.map(s=>new X(s,i,this.noDataValue)):e;const l=this.samplers[0];if(l){this.extent=l.extent.clone();const{min:s,max:o}=l.demResolution;this.demResolution={min:s,max:o};for(let a=1;a<this.samplers.length;a++){const r=this.samplers[a];this.extent.union(r.extent),this.demResolution.min=Math.min(this.demResolution.min,r.demResolution.min),this.demResolution.max=Math.max(this.demResolution.max,r.demResolution.max)}}else this.extent=(0,w.HH)((0,w.Ue)(),i.spatialReference),this.demResolution={min:0,max:0}}elevationAt(e,t){for(const n of this.samplers)if(n.containsAt(e,t))return n.elevationAt(e,t);return q.warn("#elevationAt()",`Point used to sample elevation (${e}, ${t}) is outside of the sampler`),this.noDataValue}}function L(c,e){if((0,d.Wi)(c))return null;const t=c.spatialReference;if(t.equals(e))return c;const n=(0,K.iV)(c,e);return n||q.error(`Cannot project geometry spatial reference (wkid:${t.wkid}) to elevation sampler spatial reference (wkid:${e.wkid})`),n}const T=new C.Z,ie={remove(){}};class se{constructor(e,t){this.data=e,this.safeWidth=.99999999*(e.width-1),this.dx=(e.width-1)/(t[2]-t[0]),this.dy=(e.width-1)/(t[3]-t[1]),this.x0=t[0],this.y1=t[3]}}class O{constructor(e,t=null){this.tile=e,(0,d.pC)(t)&&(0,d.pC)(e)&&(this._samplerData=new se(t,e.extent))}get zmin(){return(0,d.pC)(this._samplerData)?this._samplerData.data.minValue:0}get zmax(){return(0,d.pC)(this._samplerData)?this._samplerData.data.maxValue:0}sample(e,t){if((0,d.Wi)(this._samplerData))return;const{safeWidth:n,data:i,dx:l,dy:s,y1:o,x0:a}=this._samplerData,{width:r,values:u,noDataValue:p}=i,v=W(s*(o-t),0,n),h=W(l*(e-a),0,n),R=Math.floor(v),j=Math.floor(h),_=R*r+j,G=_+r,F=u[_],z=u[G],H=u[_+1],b=u[G+1];if(F!==p&&z!==p&&H!==p&&b!==p){const Q=h-j,k=F+(H-F)*Q;return k+(z+(b-z)*Q-k)*(v-R)}}}function W(c,e,t){return c<e?e:c>t?t:c}var P=f(68511);class le{queryAll(e,t,n){var i=this;return(0,m.Z)(function*(){if(!(e=n&&n.ignoreInvisibleLayers?e.filter(u=>u.visible):e.slice()).length)throw new x.Z("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");const l=g.fromGeometry(t);let s=!1;n&&n.returnSampleInfo||(s=!0);const o={...D,...n,returnSampleInfo:!0},a=yield i.query(e[e.length-1],l,o),r=yield i._queryAllContinue(e,a,o);return r.geometry=r.geometry.export(),s&&delete r.sampleInfo,r})()}query(e,t,n){var i=this;return(0,m.Z)(function*(){if(!e)throw new x.Z("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||!(t instanceof g)&&"point"!==t.type&&"multipoint"!==t.type&&"polyline"!==t.type)throw new x.Z("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");const l={...D,...n},s=new oe(e,t.spatialReference,l),o=l.signal;return yield e.load({signal:o}),yield i._createGeometryDescriptor(s,t,o),yield i._selectTiles(s,o),yield i._populateElevationTiles(s,o),i._sampleGeometryWithElevation(s),i._createQueryResult(s,o)})()}createSampler(e,t,n){var i=this;return(0,m.Z)(function*(){if(!e)throw new x.Z("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||"extent"!==t.type)throw new x.Z("elevation-query:invalid-extent","Invalid or undefined extent");const l={...D,...n};return i._createSampler(e,t,l)})()}createSamplerAll(e,t,n){var i=this;return(0,m.Z)(function*(){if(!(e=n&&n.ignoreInvisibleLayers?e.filter(o=>o.visible):e.slice()).length)throw new x.Z("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");if(!t||"extent"!==t.type)throw new x.Z("elevation-query:invalid-extent","Invalid or undefined extent");const l={...D,...n,returnSampleInfo:!0},s=yield i._createSampler(e[e.length-1],t,l);return i._createSamplerAllContinue(e,t,s,l)})()}_createSampler(e,t,n,i){var l=this;return(0,m.Z)(function*(){const s=n.signal;yield e.load({signal:s});const o=t.spatialReference,a=e.tileInfo.spatialReference;o.equals(a)||(yield(0,A.iQ)([{source:o,dest:a}],{signal:s}),t=(0,A.iV)(t,a));const r=new ae(e,t,n,i);return yield l._selectTiles(r,s),yield l._populateElevationTiles(r,s),new $(r.elevationTiles,r.layer.tileInfo,r.options.noDataValue)})()}_createSamplerAllContinue(e,t,n,i){var l=this;return(0,m.Z)(function*(){if(e.pop(),!e.length)return n;const s=n.samplers.map(u=>(0,w.oJ)(u.extent)),o=yield l._createSampler(e[e.length-1],t,i,s);if(0===o.samplers.length)return n;const a=n.samplers.concat(o.samplers),r=new $(a,i.noDataValue);return l._createSamplerAllContinue(e,t,r,i)})()}_queryAllContinue(e,t,n){var i=this;return(0,m.Z)(function*(){const l=e.pop(),s=t.geometry.coordinates,o=t.sampleInfo;(0,d.O3)(o);const a=[],r=[];for(let h=0;h<s.length;h++){const R=o[h];R.demResolution>=0?R.source||(R.source=l):e.length&&(a.push(s[h]),r.push(h))}if(!e.length||0===a.length)return t;const u=t.geometry.clone(a),p=yield i.query(e[e.length-1],u,n),v=p.sampleInfo;if(!v)throw new Error("no sampleInfo");return r.forEach((h,R)=>{s[h].z=p.geometry.coordinates[R].z,o[h].demResolution=v[R].demResolution}),i._queryAllContinue(e,t,n)})()}_createQueryResult(e,t){var n=this;return(0,m.Z)(function*(){const i=yield e.geometry.project(e.outSpatialReference,t);(0,d.O3)(i);const l={geometry:i.export(),noDataValue:e.options.noDataValue};return e.options.returnSampleInfo&&(l.sampleInfo=n._extractSampleInfo(e)),e.geometry.coordinates.forEach(s=>{s.tile=null,s.elevationTile=null}),l})()}_createGeometryDescriptor(e,t,n){return(0,m.Z)(function*(){let i;const l=e.layer.tileInfo.spatialReference;if(t instanceof g?i=yield t.project(l,n):(yield(0,A.iQ)([{source:t.spatialReference,dest:l}],{signal:n}),i=(0,A.iV)(t,l)),!i)throw new x.Z("elevation-query:spatial-reference-mismatch",`Cannot query elevation in '${t.spatialReference.wkid}' on an elevation service in '${l.wkid}'`);e.geometry=g.fromGeometry(i)})()}_selectTiles(e,t){var n=this;return(0,m.Z)(function*(){const i=e.options.demResolution;if("geometry"===e.type&&n._preselectOutsideLayerExtent(e),"number"==typeof i)n._selectTilesClosestResolution(e);else if("finest-contiguous"===i)yield n._selectTilesFinestContiguous(e,t);else{if("auto"!==i)throw new x.Z("elevation-query:invalid-dem-resolution",`Invalid dem resolution value '${i}', expected a number, "finest-contiguous" or "auto"`);yield n._selectTilesAuto(e,t)}})()}_preselectOutsideLayerExtent(e){if((0,d.Wi)(e.layer.fullExtent))return;const t=new O(null);t.sample=()=>e.options.noDataValue,e.outsideExtentTile=t;const n=e.layer.fullExtent;e.geometry.coordinates.forEach(i=>{const l=i.x,s=i.y;(l<n.xmin||l>n.xmax||s<n.ymin||s>n.ymax)&&(i.elevationTile=t)})}_selectTilesClosestResolution(e){const n=this._findNearestDemResolutionLODIndex(e.layer.tileInfo,e.options.demResolution);e.selectTilesAtLOD(n)}_findNearestDemResolutionLODIndex(e,t){const n=t/(0,Z.c9)(e.spatialReference);let i=e.lods[0],l=0;for(let s=1;s<e.lods.length;s++){const o=e.lods[s];Math.abs(o.resolution-n)<Math.abs(i.resolution-n)&&(i=o,l=s)}return l}_selectTilesFinestContiguous(e,t){var n=this;return(0,m.Z)(function*(){const i=M(e.layer.tileInfo,e.options.minDemResolution);yield n._selectTilesFinestContiguousAt(e,i,t)})()}_selectTilesFinestContiguousAt(e,t,n){var i=this;return(0,m.Z)(function*(){const l=e.layer;if(e.selectTilesAtLOD(t),t<0)return;const s=l.tilemapCache,o=e.getTilesToFetch();try{if(s)yield(0,E.Hl)(Promise.all(o.map(a=>s.fetchAvailability(a.level,a.row,a.col,{signal:n}))),n);else if(yield i._populateElevationTiles(e,n),!e.allElevationTilesFetched())throw e.clearElevationTiles(),new x.Z("elevation-query:has-unavailable-tiles")}catch(a){(0,E.r9)(a),yield i._selectTilesFinestContiguousAt(e,t-1,n)}})()}_populateElevationTiles(e,t){return(0,m.Z)(function*(){const n=e.getTilesToFetch(),i={},l=e.options.cache,s=e.options.noDataValue,o=n.map(function(){var a=(0,m.Z)(function*(r){if(null==r.id)return;const u=`${e.layer.uid}:${r.id}:${s}`,p=(0,d.pC)(l)?l.get(u):null,v=(0,d.pC)(p)?p:yield e.layer.fetchTile(r.level,r.row,r.col,{noDataValue:s,signal:t});(0,d.pC)(l)&&l.put(u,v),i[r.id]=new O(r,v)});return function(r){return a.apply(this,arguments)}}());yield(0,E.Hl)((0,E.as)(o),t),e.populateElevationTiles(i)})()}_selectTilesAuto(e,t){var n=this;return(0,m.Z)(function*(){n._selectTilesAutoFinest(e),n._reduceTilesForMaximumRequests(e);const i=e.layer.tilemapCache;if(!i)return n._selectTilesAutoPrefetchUpsample(e,t);const l=e.getTilesToFetch(),s={},o=l.map(function(){var a=(0,m.Z)(function*(r){const u=new P.f(null,0,0,0,(0,w.Ue)()),p=yield(0,N.q6)(i.fetchAvailabilityUpsample(r.level,r.row,r.col,u,{signal:t}));!1!==p.ok?null!=r.id&&(s[r.id]=u):(0,E.r9)(p.error)});return function(r){return a.apply(this,arguments)}}());yield(0,E.Hl)(Promise.all(o),t),e.remapTiles(s)})()}_reduceTilesForMaximumRequests(e){const t=e.layer.tileInfo;let n=0;const i={},l=a=>{null!=a.id&&(a.id in i?i[a.id]++:(i[a.id]=1,n++))},s=a=>{if(null==a.id)return;const r=i[a.id];1===r?(delete i[a.id],n--):i[a.id]=r-1};e.forEachTileToFetch(l,s);let o=!0;for(;o&&(o=!1,e.forEachTileToFetch(a=>{n<=e.options.maximumAutoTileRequests||(s(a),t.upsampleTile(a)&&(o=!0),l(a))},s),o););}_selectTilesAutoFinest(e){const t=M(e.layer.tileInfo,e.options.minDemResolution);e.selectTilesAtLOD(t,e.options.maximumAutoTileRequests)}_selectTilesAutoPrefetchUpsample(e,t){var n=this;return(0,m.Z)(function*(){const i=e.layer.tileInfo;yield n._populateElevationTiles(e,t);let l=!1;e.forEachTileToFetch((s,o)=>{i.upsampleTile(s)?l=!0:o()}),l&&(yield n._selectTilesAutoPrefetchUpsample(e,t))})()}_sampleGeometryWithElevation(e){e.geometry.coordinates.forEach(t=>{const n=t.elevationTile;let i=e.options.noDataValue;if(n){const l=n.sample(t.x,t.y);(0,d.pC)(l)?i=l:t.elevationTile=null}t.z=i})}_extractSampleInfo(e){const t=e.layer.tileInfo,n=(0,Z.c9)(t.spatialReference);return e.geometry.coordinates.map(i=>{let l=-1;return i.elevationTile&&i.elevationTile!==e.outsideExtentTile&&(l=t.lodAt(i.elevationTile.tile.level).resolution*n),{demResolution:l}})}}class g{export(){return this._exporter(this.coordinates,this.spatialReference)}clone(e){const t=new g;return t.geometry=this.geometry,t.spatialReference=this.spatialReference,t.coordinates=e||this.coordinates.map(n=>n.clone()),t._exporter=this._exporter,t}project(e,t){var n=this;return(0,m.Z)(function*(){if(n.spatialReference.equals(e))return n.clone();yield(0,A.iQ)([{source:n.spatialReference,dest:e}],{signal:t});const i=new I.Z({spatialReference:n.spatialReference,points:n.coordinates.map(a=>[a.x,a.y])}),l=(0,A.iV)(i,e);if(!l)return null;const s=n.coordinates.map((a,r)=>{const u=a.clone(),p=l.points[r];return u.x=p[0],u.y=p[1],u}),o=n.clone(s);return o.spatialReference=e,o})()}static fromGeometry(e){const t=new g;if(t.geometry=e,t.spatialReference=e.spatialReference,e instanceof g)t.coordinates=e.coordinates.map(n=>n.clone()),t._exporter=(n,i)=>{const l=e.clone(n);return l.spatialReference=i,l};else switch(e.type){case"point":{const n=e,{hasZ:i,hasM:l}=n;t.coordinates=i&&l?[new y(n.x,n.y,n.z,n.m)]:i?[new y(n.x,n.y,n.z)]:l?[new y(n.x,n.y,null,n.m)]:[new y(n.x,n.y)],t._exporter=(s,o)=>e.hasM?new C.Z(s[0].x,s[0].y,s[0].z,s[0].m,o):new C.Z(s[0].x,s[0].y,s[0].z,o);break}case"multipoint":{const n=e,{hasZ:i,hasM:l}=n;t.coordinates=n.points.map(i&&l?s=>new y(s[0],s[1],s[2],s[3]):i?s=>new y(s[0],s[1],s[2]):l?s=>new y(s[0],s[1],null,s[2]):s=>new y(s[0],s[1])),t._exporter=(s,o)=>e.hasM?new I.Z({points:s.map(a=>[a.x,a.y,a.z,a.m]),hasZ:!0,hasM:!0,spatiaReference:o}):new I.Z(s.map(a=>[a.x,a.y,a.z]),o);break}case"polyline":{const n=e,i=[],l=[],{hasZ:s,hasM:o}=e;let a=0;for(const r of n.paths)if(l.push([a,a+r.length]),a+=r.length,s&&o)for(const u of r)i.push(new y(u[0],u[1],u[2],u[3]));else if(s)for(const u of r)i.push(new y(u[0],u[1],u[2]));else if(o)for(const u of r)i.push(new y(u[0],u[1],null,u[2]));else for(const u of r)i.push(new y(u[0],u[1]));t.coordinates=i,t._exporter=(r,u)=>{const p=r.map(e.hasM?h=>[h.x,h.y,h.z,h.m]:h=>[h.x,h.y,h.z]),v=l.map(h=>p.slice(h[0],h[1]));return new B.Z({paths:v,hasM:e.hasM,hasZ:!0,spatialReference:u})};break}}return t}}class y{constructor(e,t,n=null,i=null,l=null,s=null){this.x=e,this.y=t,this.z=n,this.m=i,this.tile=l,this.elevationTile=s}clone(){return new y(this.x,this.y,this.z,this.m)}}class U{constructor(e,t){this.layer=e,this.options=t}}class oe extends U{constructor(e,t,n){super(e,n),this.outSpatialReference=t,this.type="geometry"}selectTilesAtLOD(e){if(e<0)this.geometry.coordinates.forEach(t=>{t.tile=null});else{const t=this.layer.tileInfo,n=t.lods[e].level;this.geometry.coordinates.forEach(i=>{i.tile=t.tileAt(n,i.x,i.y)})}}allElevationTilesFetched(){return!this.geometry.coordinates.some(e=>!e.elevationTile)}clearElevationTiles(){for(const e of this.geometry.coordinates)e.elevationTile!==this.outsideExtentTile&&(e.elevationTile=null)}populateElevationTiles(e){for(const t of this.geometry.coordinates)!t.elevationTile&&t.tile?.id&&(t.elevationTile=e[t.tile.id])}remapTiles(e){for(const t of this.geometry.coordinates){const n=t.tile?.id;t.tile=n?e[n]:null}}getTilesToFetch(){const e={},t=[];for(const n of this.geometry.coordinates){const i=n.tile;if(!i)continue;const l=n.tile?.id;n.elevationTile||!l||e[l]||(e[l]=i,t.push(i))}return t}forEachTileToFetch(e){for(const t of this.geometry.coordinates)t.tile&&!t.elevationTile&&e(t.tile,()=>{t.tile=null})}}class ae extends U{constructor(e,t,n,i){super(e,n),this.type="extent",this.elevationTiles=[],this._candidateTiles=[],this._fetchedCandidates=new Set,this.extent=t.intersection(e.fullExtent),this.maskExtents=i}selectTilesAtLOD(e,t){const n=this._maximumLodForRequests(t),i=Math.min(n,e);i<0?this._candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(i)}_maximumLodForRequests(e){const t=this.layer.tileInfo;if(!e)return t.lods.length-1;const n=this.extent;if((0,d.Wi)(n))return-1;for(let i=t.lods.length-1;i>=0;i--){const l=t.lods[i],o=l.resolution*t.size[1];if(Math.ceil(n.width/(l.resolution*t.size[0]))*Math.ceil(n.height/o)<=e)return i}return-1}allElevationTilesFetched(){return this._candidateTiles.length===this.elevationTiles.length}clearElevationTiles(){this.elevationTiles.length=0,this._fetchedCandidates.clear()}populateElevationTiles(e){for(const t of this._candidateTiles){const n=t.id&&e[t.id];n&&(this._fetchedCandidates.add(t),this.elevationTiles.push(n))}}remapTiles(e){this._candidateTiles=this._uniqueNonOverlappingTiles(this._candidateTiles.map(t=>e[t.id]))}getTilesToFetch(){return this._candidateTiles}forEachTileToFetch(e,t){const n=this._candidateTiles;this._candidateTiles=[],n.forEach(i=>{if(this._fetchedCandidates.has(i))return void(t&&t(i));let l=!1;e(i,()=>l=!0),l?t&&t(i):this._candidateTiles.push(i)}),this._candidateTiles=this._uniqueNonOverlappingTiles(this._candidateTiles,t)}_uniqueNonOverlappingTiles(e,t){const n={},i=[];for(const s of e){const o=s.id;o&&!n[o]?(n[o]=s,i.push(s)):t&&t(s)}const l=i.sort((s,o)=>s.level-o.level);return l.filter((s,o)=>{for(let a=0;a<o;a++){const r=l[a].extent;if(r&&s.extent&&(0,w.r3)(r,s.extent))return t&&t(s),!1}return!0})}_selectCandidateTilesCoveringExtentAt(e){this._candidateTiles.length=0;const t=this.extent;if((0,d.Wi)(t))return;const n=this.layer.tileInfo,i=n.lods[e],l=n.tileAt(i.level,t.xmin,t.ymin),s=l.extent;if((0,d.Wi)(s))return;const a=i.resolution*n.size[1],r=Math.ceil((t.xmax-s[0])/(i.resolution*n.size[0])),u=Math.ceil((t.ymax-s[1])/a);for(let p=0;p<u;p++)for(let v=0;v<r;v++){const h=new P.f(null,l.level,l.row-p,l.col+v);n.updateTileInfo(h),this._tileIsMasked(h)||this._candidateTiles.push(h)}}_tileIsMasked(e){return!!this.maskExtents&&this.maskExtents.some(t=>e.extent&&(0,w.r3)(t,e.extent))}}function M(c,e=0){let t=c.lods.length-1;if(e>0){const n=e/(0,Z.c9)(c.spatialReference),i=c.lods.findIndex(l=>l.resolution<n);0===i?t=0:i>0&&(t=i-1)}return t}const D={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0}}}]);