"use strict";(self.webpackChunkparcel_app=self.webpackChunkparcel_app||[]).push([[3320,7126],{550:(x,I,s)=>{function P(){return[1,0,0,0,1,0,0,0,1]}function d(c,a,L,y,E,T,R,p,U){return[c,a,L,y,E,T,R,p,U]}function D(c,a){return new Float64Array(c,a,9)}s.d(I,{a:()=>D,c:()=>P,f:()=>d}),Object.freeze(Object.defineProperty({__proto__:null,clone:function _(c){return[c[0],c[1],c[2],c[3],c[4],c[5],c[6],c[7],c[8]]},create:P,createView:D,fromValues:d},Symbol.toStringTag,{value:"Module"}))},43703:(x,I,s)=>{function P(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function _(a){return[a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15]]}function d(a,L,y,E,T,R,p,U,C,w,m,f,M,S,H,V){return[a,L,y,E,T,R,p,U,C,w,m,f,M,S,H,V]}function D(a,L){return new Float64Array(a,L,16)}s.d(I,{I:()=>O,a:()=>D,b:()=>_,c:()=>P,f:()=>d});const O=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:O,clone:_,create:P,createView:D,fromValues:d},Symbol.toStringTag,{value:"Module"}))},78451:(x,I,s)=>{function P(){return[0,0,0,1]}function _(a){return[a[0],a[1],a[2],a[3]]}function D(a,L){return new Float64Array(a,L,4)}s.d(I,{I:()=>O,a:()=>P,b:()=>_,c:()=>D});const O=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:O,clone:_,create:P,createView:D,fromValues:function d(a,L,y,E){return[a,L,y,E]}},Symbol.toStringTag,{value:"Module"}))},97126:(x,I,s)=>{s.d(I,{a:()=>S,c:()=>U,f:()=>V,g:()=>H,h:()=>C,j:()=>st,l:()=>f,m:()=>F,w:()=>m}),s(8314);var _=s(63290),d=s(21286),D=s(62208),O=s(28347),c=s(84161),a=s(28093),L=s(993),y=s(4794),E=s(78172),T=s(70562),R=s(34054),p=s(26242);function U(){return(0,y.c)()}function C(n,o=U()){return(0,L.c)(o,n)}function m(n){return n}function f(n){n[0]=n[1]=n[2]=n[3]=0}function S(n){return n[3]}function H(n){return n}function V(n,o,r,l){return(0,y.f)(n,o,r,l)}function G(n,o,r){if((0,D.Wi)(o))return!1;const{origin:l,direction:u}=o,g=Q;g[0]=l[0]-n[0],g[1]=l[1]-n[1],g[2]=l[2]-n[2];const A=u[0]*u[0]+u[1]*u[1]+u[2]*u[2];if(0===A)return!1;const B=2*(u[0]*g[0]+u[1]*g[1]+u[2]*g[2]),K=B*B-4*A*(g[0]*g[0]+g[1]*g[1]+g[2]*g[2]-n[3]*n[3]);if(K<0)return!1;const at=Math.sqrt(K);let j=(-B-at)/(2*A);const X=(-B+at)/(2*A);return(j<0||X<j&&X>0)&&(j=X),!(j<0||(r&&(r[0]=l[0]+u[0]*j,r[1]=l[1]+u[1]*j,r[2]=l[2]+u[2]*j),0))}const Q=(0,a.c)();function st(n,o){return G(n,o,null)}function it(n,o,r){const l=p.WM.get(),u=p.MP.get();(0,c.f)(l,o.origin,o.direction);const g=S(n);(0,c.f)(r,l,o.origin),(0,c.g)(r,r,1/(0,c.l)(r)*g);const A=tt(n,o.origin),B=(0,R.EU)(o.origin,r);return(0,O.d)(u,B+A,l),(0,c.m)(r,r,u),r}function b(n,o,r){const l=(0,c.b)(p.WM.get(),o,n),u=(0,c.g)(p.WM.get(),l,n[3]/(0,c.l)(l));return(0,c.a)(r,u,n)}function tt(n,o){const r=(0,c.b)(p.WM.get(),o,n),l=(0,c.l)(r),u=S(n),g=u+Math.abs(u-l);return(0,d.ZF)(u/g)}const et=(0,a.c)();function nt(n,o,r,l){const u=(0,c.b)(et,o,n);switch(r){case E.R.X:{const g=(0,d.jE)(u,et)[2];return(0,c.s)(l,-Math.sin(g),Math.cos(g),0)}case E.R.Y:{const g=(0,d.jE)(u,et),A=g[1],B=g[2],K=Math.sin(A);return(0,c.s)(l,-K*Math.cos(B),-K*Math.sin(B),Math.cos(A))}case E.R.Z:return(0,c.n)(l,u);default:return}}function rt(n,o){const r=(0,c.b)(ot,o,n);return(0,c.l)(r)-n[3]}function F(n,o){const r=(0,c.d)(n,o),l=S(n);return r<=l*l}const ot=(0,a.c)(),t=U();Object.freeze(Object.defineProperty({__proto__:null,altitudeAt:rt,angleToSilhouette:tt,axisAt:nt,clear:f,closestPoint:function J(n,o,r){return G(n,o,r)?r:((0,T.JI)(o,n,r),b(n,r,r))},closestPointOnSilhouette:it,containsPoint:F,copy:C,create:U,distanceToSilhouette:function ct(n,o){const r=(0,c.b)(p.WM.get(),o,n),l=(0,c.p)(r);return Math.sqrt(Math.abs(l-n[3]*n[3]))},elevate:function ut(n,o,r){return n!==r&&(0,c.c)(r,n),r[3]=n[3]+o,r},fromCenterAndRadius:function w(n,o){return(0,y.f)(n[0],n[1],n[2],o)},fromRadius:function M(n,o){return n[0]=n[1]=n[2]=0,n[3]=o,n},fromValues:V,getCenter:H,getRadius:S,intersectRay:G,intersectRayClosestSilhouette:function q(n,o,r){if(G(n,o,r))return r;const l=it(n,o,p.WM.get());return(0,c.a)(r,o.origin,(0,c.g)(p.WM.get(),o.direction,(0,c.i)(o.origin,l)/(0,c.l)(o.direction))),r},intersectsRay:st,projectPoint:b,setAltitudeAt:function Y(n,o,r,l){const u=rt(n,o),g=nt(n,o,E.R.Z,ot),A=(0,c.g)(ot,g,r-u);return(0,c.a)(l,o,A)},setExtent:function $(n,o,r){return _.Z.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),n===r?r:C(n,r)},tmpSphere:t,wrap:m},Symbol.toStringTag,{value:"Module"}))},97535:(x,I,s)=>{s.d(I,{x:()=>_});var P=s(79682);class _{constructor(O){this._allocator=O,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,P.Y)(()=>this._reset()),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const O=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*d);this._items.length=Math.min(O,this._items.length),this._itemsPtr=0}_grow(){for(let O=0;O<Math.max(8,Math.min(this._items.length,d));O++)this._items.push(this._allocator())}}const d=1024},78172:(x,I,s)=>{var P,_;s.d(I,{R:()=>P}),(_=P||(P={}))[_.X=0]="X",_[_.Y=1]="Y",_[_.Z=2]="Z"},70562:(x,I,s)=>{s.d(I,{JG:()=>E,JI:()=>C,Jk:()=>p,Ue:()=>c,re:()=>y,zk:()=>T}),s(85931);var _=s(97535),d=s(84161),D=s(28093),O=s(26242);function c(m){return m?a((0,D.a)(m.origin),(0,D.a)(m.direction)):a((0,D.c)(),(0,D.c)())}function a(m,f){return{origin:m,direction:f}}function y(m,f){const M=w.get();return M.origin=m,M.direction=f,M}function E(m,f=c()){return function R(m,f,M=c()){return(0,d.c)(M.origin,m),(0,d.c)(M.direction,f),M}(m.origin,m.direction,f)}function T(m,f,M=c()){return(0,d.c)(M.origin,m),(0,d.b)(M.direction,f,m),M}function p(m,f){const M=(0,d.f)(O.WM.get(),(0,d.n)(O.WM.get(),m.direction),(0,d.b)(O.WM.get(),f,m.origin));return(0,d.e)(M,M)}function C(m,f,M){const S=(0,d.e)(m.direction,(0,d.b)(M,f,m.origin));return(0,d.a)(M,m.origin,(0,d.g)(M,m.direction,S)),M}const w=new _.x(()=>c())},34054:(x,I,s)=>{s.d(I,{EU:()=>c,SR:()=>O,cp:()=>a,nF:()=>D});var P=s(21286),_=s(84161),d=s(28093);function D(E,T,R){const p=(0,_.e)(E,T)/(0,_.e)(E,E);return(0,_.g)(R,E,p)}function O(E,T){return(0,_.e)(E,T)/(0,_.l)(E)}function c(E,T){const R=(0,_.e)(E,T)/((0,_.l)(E)*(0,_.l)(T));return-(0,P.ZF)(R)}function a(E,T,R){(0,_.n)(L,E),(0,_.n)(y,T);const p=(0,_.e)(L,y),U=(0,P.ZF)(p),C=(0,_.f)(L,L,y);return(0,_.e)(C,R)<0?2*Math.PI-U:U}const L=(0,d.c)(),y=(0,d.c)()},26242:(x,I,s)=>{s.d(I,{MP:()=>C,vD:()=>w,qW:()=>T,WM:()=>R,o6:()=>p});var P=s(27306),_=s(79682),d=s(550),D=s(43703),O=s(78451),c=s(99770),a=s(28093),L=s(4794);class y{constructor(f,M,S){this._itemByteSize=f,this._itemCreate=M,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(S/this._itemByteSize)}get(){0===this._itemsPtr&&(0,_.Y)(()=>this._reset());const f=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=f;){const M=new ArrayBuffer(this._itemsPerBuffer*this._itemByteSize);for(let S=0;S<this._itemsPerBuffer;++S)this._items.push(this._itemCreate(M,S*this._itemByteSize));this._buffers.push(M)}return this._items[this._itemsPtr++]}_reset(){const f=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>f;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(f=E){return new y(16,c.c,f)}static createVec3f64(f=E){return new y(24,a.b,f)}static createVec4f64(f=E){return new y(32,L.a,f)}static createMat3f64(f=E){return new y(72,d.a,f)}static createMat4f64(f=E){return new y(128,D.a,f)}static createQuatf64(f=E){return new y(32,O.c,f)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this._itemByteSize}}}const E=4*P.Y8.KILOBYTES,T=y.createVec2f64(),R=y.createVec3f64(),p=y.createVec4f64(),C=(y.createMat3f64(),y.createMat4f64()),w=y.createQuatf64()},83320:(x,I,s)=>{s.r(I),s.d(I,{destroyContext:()=>it,dracoDecompressPointCloudData:()=>H,filterObbsForModifications:()=>ut,filterObbsForModificationsSync:()=>nt,initialize:()=>F,interpretObbModificationResults:()=>et,process:()=>M,setLegacySchema:()=>st,setModifications:()=>G,setModificationsSync:()=>ct,test:()=>ot});var d,D,t,P=s(15861),_=s(62208);(t=d||(d={}))[t.None=0]="None",t[t.Int16=1]="Int16",t[t.Int32=2]="Int32",function(t){t[t.Replace=0]="Replace",t[t.Outside=1]="Outside",t[t.Inside=2]="Inside",t[t.Finished=3]="Finished"}(D||(D={}));var O=s(54346);function a(t){return(0,O.V)(`esri/libs/i3s/${t}`)}let L;var R,p,U,C,w;function M(t){return S.apply(this,arguments)}function S(){return S=(0,P.Z)(function*(t){yield F();const h=[t.geometryBuffer];return{result:tt(t,h),transferList:h}}),S.apply(this,arguments)}function H(t){return V.apply(this,arguments)}function V(){return V=(0,P.Z)(function*(t){yield F();const h=[t.geometryBuffer],{geometryBuffer:n}=t,o=n.byteLength,r=b._malloc(o),l=new Uint8Array(b.HEAPU8.buffer,r,o);l.set(new Uint8Array(n));const u=b.dracoDecompressPointCloudData(r,l.byteLength);if(b._free(r),u.error.length>0)throw new Error(`i3s.wasm: ${u.error}`);const g=u.featureIds?.length>0?u.featureIds.slice():null,A=u.positions.slice();return g&&h.push(g.buffer),h.push(A.buffer),{result:{positions:A,featureIds:g},transferList:h}}),V.apply(this,arguments)}function ut(t){return $.apply(this,arguments)}function $(){return $=(0,P.Z)(function*(t){yield F(),nt(t);const h={buffer:t.buffer};return{result:h,transferList:[h.buffer]}}),$.apply(this,arguments)}function G(t){return Q.apply(this,arguments)}function Q(){return Q=(0,P.Z)(function*(t){yield F(),ct(t)}),Q.apply(this,arguments)}function st(t){return q.apply(this,arguments)}function q(){return q=(0,P.Z)(function*(t){yield F(),b.setLegacySchema(t.context,t.jsonSchema)}),q.apply(this,arguments)}function it(t){rt(t)}let J,b;function ct(t){const h=t.modifications,n=b._malloc(8*h.length),o=new Float64Array(b.HEAPU8.buffer,n,h.length);for(let r=0;r<h.length;++r)o[r]=h[r];b.setModifications(t.context,n,h.length,t.isGeodetic),b._free(n)}function tt(t,h){if(!b)return null;const{context:n,localOrigin:o,globalTrafo:r,mbs:l,obb:u,elevationOffset:g,geometryBuffer:A,geometryDescriptor:B,indexToVertexProjector:K,vertexToRenderProjector:at}=t,j=b._malloc(A.byteLength),ft=b._malloc(33*Float64Array.BYTES_PER_ELEMENT),ht=new Uint8Array(b.HEAPU8.buffer,j,A.byteLength);ht.set(new Uint8Array(A));const W=new Float64Array(b.HEAPU8.buffer,ft,33);Y(W,o);let N=W.byteOffset+3*W.BYTES_PER_ELEMENT,k=new Float64Array(W.buffer,N);Y(k,r),N+=16*W.BYTES_PER_ELEMENT,k=new Float64Array(W.buffer,N),Y(k,l),N+=4*W.BYTES_PER_ELEMENT,(0,_.pC)(u)&&(k=new Float64Array(W.buffer,N),Y(k,u.center),N+=3*W.BYTES_PER_ELEMENT,k=new Float64Array(W.buffer,N),Y(k,u.halfSize),N+=3*W.BYTES_PER_ELEMENT,k=new Float64Array(W.buffer,N),Y(k,u.quaternion));const dt=B,Mt={isDraco:!1,isLegacy:!1,color:t.layouts.some(z=>z.some(Z=>"color"===Z.name)),normal:t.needNormals&&t.layouts.some(z=>z.some(Z=>"normalCompressed"===Z.name)),uv0:t.layouts.some(z=>z.some(Z=>"uv0"===Z.name)),uvRegion:t.layouts.some(z=>z.some(Z=>"uvRegion"===Z.name)),featureIndex:dt.featureIndex},v=b.process(n,!!t.obb,j,ht.byteLength,dt,Mt,ft,g,K,at,t.normalReferenceFrame);if(b._free(ft),b._free(j),v.error.length>0)throw new Error(`i3s.wasm: ${v.error}`);if(v.discarded)return null;const lt=v.componentOffsets.length>0?v.componentOffsets.slice():null,_t=v.featureIds.length>0?v.featureIds.slice():null,mt=v.interleavedVertedData.slice().buffer,Et=v.indicesType===d.Int16?new Uint16Array(v.indices.buffer,v.indices.byteOffset,v.indices.byteLength/2).slice():new Uint32Array(v.indices.buffer,v.indices.byteOffset,v.indices.byteLength/4).slice(),gt=v.positions.slice(),yt=v.positionIndicesType===d.Int16?new Uint16Array(v.positionIndices.buffer,v.positionIndices.byteOffset,v.positionIndices.byteLength/2).slice():new Uint32Array(v.positionIndices.buffer,v.positionIndices.byteOffset,v.positionIndices.byteLength/4).slice(),Pt={layout:t.layouts[0],interleavedVertexData:mt,indices:Et,hasColors:v.hasColors,hasModifications:v.hasModifications,positionData:{data:gt,indices:yt}};return _t&&h.push(_t.buffer),lt&&h.push(lt.buffer),h.push(mt),h.push(Et.buffer),h.push(gt.buffer),h.push(yt.buffer),{componentOffsets:lt,featureIds:_t,transformedGeometry:Pt,obb:v.obb}}function et(t){return 0===t?p.Unmodified:1===t?p.PotentiallyModified:2===t?p.Culled:p.Unknown}function nt(t){const{context:h,buffer:n}=t,o=b._malloc(n.byteLength),r=n.byteLength/Float64Array.BYTES_PER_ELEMENT,l=new Float64Array(b.HEAPU8.buffer,o,r),u=new Float64Array(n);l.set(u),b.filterOBBs(h,o,r),u.set(l),b._free(o)}function rt(t){b&&b.destroy(t)}function Y(t,h){for(let n=0;n<h.length;++n)t[n]=h[n]}function F(){return b?Promise.resolve():(J||(J=function c(){return L||(L=new Promise(t=>s.e(5979).then(s.bind(s,85979)).then(h=>h.i).then(({default:h})=>{const n=h({locateFile:a,onRuntimeInitialized:()=>t(n)});delete n.then})).catch(t=>{throw t})),L}().then(t=>{b=t,J=null})),J)}s(97126),function(t){t[t.Unmodified=0]="Unmodified",t[t.Culled=1]="Culled",t[t.NotChecked=2]="NotChecked"}(R||(R={})),function(t){t[t.Unmodified=0]="Unmodified",t[t.PotentiallyModified=1]="PotentiallyModified",t[t.Culled=2]="Culled",t[t.Unknown=3]="Unknown",t[t.NotChecked=4]="NotChecked"}(p||(p={})),function(t){t[t.Unknown=0]="Unknown",t[t.Uncached=1]="Uncached",t[t.Cached=2]="Cached"}(U||(U={})),function(t){t[t.None=0]="None",t[t.MaxScreenThreshold=1]="MaxScreenThreshold",t[t.ScreenSpaceRelative=2]="ScreenSpaceRelative",t[t.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",t[t.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(C||(C={})),function(t){t[t.Hole=0]="Hole",t[t.Leaf=1]="Leaf"}(w||(w={}));const ot={transform:tt,destroy:rt}}}]);