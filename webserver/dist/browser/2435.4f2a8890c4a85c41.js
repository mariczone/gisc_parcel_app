"use strict";(self.webpackChunkparcel_app=self.webpackChunkparcel_app||[]).push([[2435],{13757:(wt,rt,l)=>{l.d(rt,{d:()=>k});var Y=l(21286),f=l(37187);function k(T,s,m){const h=Array.isArray(T),b=h?T.length/s:T.byteLength/(4*s),Z=h?T:new Uint32Array(T,0,b*s),O=m?.minReduction??0,F=m?.originalIndices||null,L=F?F.length:0,p=m?.componentOffsets||null;let U=0;if(p)for(let y=0;y<p.length-1;y++){const X=p[y+1]-p[y];X>U&&(U=X)}else U=b;const C=Math.floor(1.1*U)+1;(null==j||j.length<2*C)&&(j=new Uint32Array((0,Y.Sf)(2*C)));for(let y=0;y<2*C;y++)j[y]=0;let M=0;const R=!!p&&!!F,B=R?L:b;let E=(0,f.$z)(b/3);const I=new Uint32Array(L),D=1.96;let K=0!==O?Math.ceil(4*D*D/(O*O)*O*(1-O)):B,q=1,_=p?p[1]:B;for(let y=0;y<B;y++){if(y===K){const $=1-M/y;if($+D*Math.sqrt($*(1-$)/y)<O)return null;K*=2}if(y===_){for(let $=0;$<2*C;$++)j[$]=0;if(F)for(let $=p[q-1];$<p[q];$++)I[$]=E[F[$]];_=p[++q]}const X=R?F[y]:y,bt=X*s,vt=S(Z,bt,s);let ot=vt%C,At=M;for(;0!==j[2*ot+1];){if(j[2*ot]===vt){const $=j[2*ot+1]-1;if(P(Z,bt,$*s,s)){At=E[$];break}}ot++,ot>=C&&(ot-=C)}At===M&&(j[2*ot]=vt,j[2*ot+1]=X+1,M++),E[X]=At}if(0!==O&&1-M/b<O)return null;if(R){for(let y=p[q-1];y<I.length;y++)I[y]=E[F[y]];E=(0,f.mi)(I)}const W=h?new Array(M):new Uint32Array(M*s);M=0;for(let y=0;y<B;y++)E[y]===M&&(w(Z,(R?F[y]:y)*s,W,M*s,s),M++);if(F&&!R){const y=new Uint32Array(L);for(let X=0;X<y.length;X++)y[X]=E[F[X]];E=(0,f.mi)(y)}return{buffer:Array.isArray(W)?W:W.buffer,indices:E,uniqueCount:M}}function P(T,s,m,h){for(let b=0;b<h;b++)if(T[s+b]!==T[m+b])return!1;return!0}function w(T,s,m,h,b){for(let Z=0;Z<b;Z++)m[h+Z]=T[s+Z]}function S(T,s,m){let h=0;for(let b=0;b<m;b++)h=T[s+b]+h|0,h=h+(h<<11)+(h>>>2)|0;return h>>>0}let j=null},85334:(wt,rt,l)=>{l.d(rt,{Mk:()=>j,ZI:()=>m,bT:()=>w});var m,h,Y=l(11915),f=l(25748),k=l(13757),P=l(6040);function w(h){const b=j(h.rings,h.hasZ,m.CCW_IS_HOLE),Z=new Array;let O=0,F=0;for(const U of b.polygons){const M=U.index,R=(0,P.Rq)(b.position,3*M,3*U.count),B=U.holeIndices.map(I=>I-M),E=new Uint32Array((0,Y.e)(R,B,3));Z.push({position:R,faces:E}),O+=R.length,F+=E.length}const L=function S(h,b,Z){if(1===h.length)return h[0];const O=(0,P.bg)(b),F=new Uint32Array(Z);let L=0,p=0,U=0;for(const C of h){for(let M=0;M<C.position.length;M++)O[L++]=C.position[M];for(let M=0;M<C.faces.length;M++)F[p++]=C.faces[M]+U;U=L/3}return{position:O,faces:F}}(Z,O,F),p=Array.isArray(L.position)?(0,k.d)(L.position,3,{originalIndices:L.faces}):(0,k.d)(L.position.buffer,6,{originalIndices:L.faces});return L.position=new Float64Array(p.buffer),L.faces=p.indices,L}function j(h,b,Z){const O=h.length,F=new Array(O),L=new Array(O),p=new Array(O);let U=0,C=0,M=0,R=0;for(let I=0;I<O;++I)R+=h[I].length;const B=(0,P.bg)(3*R);let E=0;for(let I=O-1;I>=0;I--){const D=h[I],K=Z===m.CCW_IS_HOLE&&s(D);if(K&&1!==O)F[U++]=D;else{let q=D.length;for(let W=0;W<U;++W)q+=F[W].length;const _={index:E,pathLengths:new Array(U+1),count:q,holeIndices:new Array(U)};_.pathLengths[0]=D.length,D.length>0&&(p[M++]={index:E,count:D.length}),E=K?T(D,D.length-1,-1,B,E,D.length,b):T(D,0,1,B,E,D.length,b);for(let W=0;W<U;++W){const y=F[W];_.holeIndices[W]=E,_.pathLengths[W+1]=y.length,y.length>0&&(p[M++]={index:E,count:y.length}),E=T(y,0,1,B,E,y.length,b)}U=0,_.count>0&&(L[C++]=_)}}for(let I=0;I<U;++I){const D=F[I];D.length>0&&(p[M++]={index:E,count:D.length}),E=T(D,0,1,B,E,D.length,b)}return L.length=C,p.length=M,{position:B,polygons:L,outlines:p}}function T(h,b,Z,O,F,L,p){F*=3;for(let U=0;U<L;++U){const C=h[b];O[F++]=C[0],O[F++]=C[1],O[F++]=p?C[2]:0,b+=Z}return F/3}function s(h){return!(0,f.bu)(h,!1,!1)}(h=m||(m={}))[h.NONE=0]="NONE",h[h.CCW_IS_HOLE=1]="CCW_IS_HOLE"},12435:(wt,rt,l)=>{l.r(rt),l.d(rt,{meshFeatureSetFromJSON:()=>Oe});var Y=l(88879),f=l(62208),k=l(2004),P=l(15861),w=l(17626),S=l(26584),j=l(80542),T=l(47996),s=l(63290),m=l(60330),h=l(10699),b=l(32917),Z=l(77712),L=(l(90912),l(85931),l(76898)),p=l(28093),U=l(21674),C=l(72642),M=l(37118),R=l(89586),B=l(61751),E=l(99746),I=l(92529),D=l(85334),K=l(55915),q=l(92545),_=l(60853);const W=s.Z.getLogger("esri.geometry.support.meshUtils.centerAt");const At=(0,p.c)(),$=(0,p.c)();var Dt=l(21726);function Rt(){return(Rt=(0,P.Z)(function*(t,n,e){const{loadGLTFMesh:r}=yield(0,h.Hl)(Promise.all([l.e(8742),l.e(6688)]).then(l.bind(l,29185)),e),o=yield St(n,e),i=r(new C.Z({x:0,y:0,z:0,spatialReference:t.spatialReference}),o.url,{resolveFile:te(o),useTransform:!0,signal:(0,f.pC)(e)?e.signal:null});i.then(()=>o.dispose(),()=>o.dispose());const{vertexAttributes:a,components:c}=yield i;t.vertexAttributes=a,t.components=c})).apply(this,arguments)}function te(t){const n=(0,Dt.Yd)(t.url);return e=>{const r=(0,Dt.PF)(e,n,n),o=r?r.replace(/^ *\.\//,""):null;return(o?t.files.get(o):null)??e}}function St(t,n){return Ft.apply(this,arguments)}function Ft(){return(Ft=(0,P.Z)(function*(t,n){return t instanceof Blob?ft.fromBlob(t):"string"==typeof t?new ft(t):Array.isArray(t)?ee(t,n):ne(t,n)})).apply(this,arguments)}function ee(t,n){return Ot.apply(this,arguments)}function Ot(){return Ot=(0,P.Z)(function*(t,n){const e=new Map;let r=null;const o=yield(0,h.WW)(t.map(function(){var a=(0,P.Z)(function*(c){return{name:c.name,source:yield St(c instanceof Blob?c:c.source,n)}});return function(c){return a.apply(this,arguments)}}())),i=[];for(const a of o)a&&((0,h.Hc)(n)?a.source.dispose():i.push(a));(0,h.k_)(n);for(const{name:a,source:c}of i)((0,f.Wi)(r)||/\.(gltf|glb)/i.test(a))&&(r=c.url),e.set(a,c.url),c.files&&c.files.forEach((u,d)=>e.set(d,u));if((0,f.Wi)(r))throw new S.Z("mesh-load-external:missing-files","Missing files to load external mesh source");return new ft(r,()=>i.forEach(({source:a})=>a.dispose()),e)}),Ot.apply(this,arguments)}function ne(t,n){return Pt.apply(this,arguments)}function Pt(){return Pt=(0,P.Z)(function*(t,n){const{default:e}=yield(0,h.Hl)(Promise.resolve().then(l.bind(l,84792)),n),r="string"==typeof t.multipart[0]?yield Promise.all(t.multipart.map(function(){var o=(0,P.Z)(function*(i){return(yield e(i,{responseType:"array-buffer"})).data});return function(i){return o.apply(this,arguments)}}())):t.multipart;return ft.fromBlob(new Blob(r))}),Pt.apply(this,arguments)}class ft{constructor(n,e=(()=>{}),r=new Map){this.url=n,this.dispose=e,this.files=r}static fromBlob(n){const e=URL.createObjectURL(n);return new ft(e,()=>URL.revokeObjectURL(e))}}var Tt=l(30217),Ut=l(550),jt=l(43703),G=l(84161),Lt=l(81863),N=l(65231);function zt(t,n){if(t)for(let e=0;e<t.length;e+=3)for(let r=0;r<3;r++)t[e+r]+=n[r]}const ae=(0,p.c)(),Bt=(0,jt.c)(),Wt=(0,Ut.c)(),Ct={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[3,1,2],west:[-3,-1,2],north:[-1,3,2],south:[1,-3,2],up:[1,2,3],down:[1,-2,-3]}};function Mt(t,n,e){t.isPlane||function ge(t){for(let n=0;n<t.position.length;n+=3)t.position[n+2]+=.5}(t),function me(t,n){if(null==n)return;const e="number"==typeof n?[n,n,n]:[null!=n.width?n.width:1,null!=n.depth?n.depth:1,null!=n.height?n.height:1];st[0]=e[0],st[4]=e[1],st[8]=e[2];for(let r=0;r<t.position.length;r+=3){for(let o=0;o<3;o++)z[o]=t.position[r+o];(0,G.t)(z,z,st);for(let o=0;o<3;o++)t.position[r+o]=z[o]}if(e[0]!==e[1]||e[1]!==e[2]){st[0]=1/e[0],st[4]=1/e[1],st[8]=1/e[2];for(let r=0;r<t.normal.length;r+=3){for(let o=0;o<3;o++)z[o]=t.normal[r+o];(0,G.t)(z,z,st),(0,G.n)(z,z);for(let o=0;o<3;o++)t.normal[r+o]=z[o]}}}(t,e?.size);const{vertexAttributes:r,transform:o}=(0,_.w1)(t,n,e);return{vertexAttributes:new I.Q({...r,uv:t.uv}),transform:o,components:[new B.Z({faces:t.faces,material:e&&e.material||null})],spatialReference:n.spatialReference}}const de={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},ye={south:0,east:1,north:2,west:3,up:4,down:5},z=(0,p.c)(),st=(0,Ut.c)();var xe=l(28347);const Nt=s.Z.getLogger("esri.geometry.support.meshUtils.rotate");function gt(t,n,e,r=p.Z){if(!(0,f.Wi)(t)){(0,xe.d)(Et,(0,R.WH)(n),(0,R.ZZ)(n));for(let o=0;o<t.length;o+=e){for(let i=0;i<3;i++)mt[i]=t[o+i]-r[i];(0,G.m)(mt,mt,Et);for(let i=0;i<3;i++)t[o+i]=mt[i]+r[i]}}}const mt=(0,p.c)(),$t=(0,p.c)(),Gt=(0,R.Ue)(),Et=(0,jt.c)(),Kt=(0,Ut.c)(),Ht=(0,p.c)(),Yt=s.Z.getLogger("esri.geometry.support.meshUtils.scale");function Vt(t,n,e=p.Z){if(t)for(let r=0;r<t.length;r+=3){for(let o=0;o<3;o++)dt[o]=t[r+o]-e[o];(0,G.g)(dt,dt,n);for(let o=0;o<3;o++)t[r+o]=dt[o]+e[o]}}const dt=(0,p.c)(),Xt=(0,p.c)(),Qt=(0,p.c)();var tt;const ct="esri.geometry.Mesh";let V=tt=class extends((0,j.p)(T.Z.LoadableMixin((0,m.v)(U.Z)))){constructor(t){super(t),this.components=null,this.transform=null,this.external=null,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new I.Q,this.type="mesh"}initialize(){((0,f.Wi)(this.external)||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when(()=>{this.handles.add((0,b.YP)(()=>({vertexAttributes:this.vertexAttributes,components:this.components?.map(t=>t.clone())}),()=>this._set("external",null),{once:!0,sync:!0}))})}get hasExtent(){return!this.loaded&&(0,f.pC)(this.external)&&(0,f.pC)(this.external.extent)||this.loaded&&this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0)}get _boundingInfo(){const t=this.vertexAttributes.position,n=this.spatialReference;if(0===t.length||this.components&&0===this.components.length)return{extent:new k.Z({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0,spatialReference:n}),center:new C.Z({x:0,y:0,z:0,spatialReference:n})};const e=(0,f.pC)(this.transform)?this.transform.project(t,n):t;let r=1/0,o=1/0,i=1/0,a=-1/0,c=-1/0,u=-1/0,d=0,g=0,x=0;const A=e.length,v=1/(A/3);let Q=0;for(;Q<A;){const it=e[Q++],H=e[Q++],et=e[Q++];r=Math.min(r,it),o=Math.min(o,H),i=Math.min(i,et),a=Math.max(a,it),c=Math.max(c,H),u=Math.max(u,et),d+=v*it,g+=v*H,x+=v*et}return{extent:new k.Z({xmin:r,ymin:o,zmin:i,xmax:a,ymax:c,zmax:u,spatialReference:n}),center:new C.Z({x:d,y:g,z:x,spatialReference:n})}}get anchor(){if((0,f.pC)(this.transform))return this.transform.getOriginPoint(this.spatialReference);const t=this._boundingInfo;return new C.Z({x:t.center.x,y:t.center.y,z:t.extent.zmin,spatialReference:this.spatialReference})}get origin(){return(0,f.pC)(this.transform)?this.transform.getOriginPoint(this.spatialReference):this._boundingInfo.center}get extent(){return!this.loaded&&(0,f.pC)(this.external)&&(0,f.pC)(this.external.extent)?this.external.extent.clone():this._boundingInfo.extent}addComponent(t){this.loaded?(this.components||(this.components=[]),this.components.push(B.Z.from(t)),this.notifyChange("components")):s.Z.getLogger(this.declaredClass).error("addComponent()","Mesh must be loaded before applying operations")}removeComponent(t){if(this.loaded){if(this.components){const n=this.components.indexOf(t);if(-1!==n)return this.components.splice(n,1),void this.notifyChange("components")}s.Z.getLogger(this.declaredClass).error("removeComponent()","Provided component is not part of the list of components")}else s.Z.getLogger(this.declaredClass).error("removeComponent()","Mesh must be loaded before applying operations")}rotate(t,n,e,r){return(0,R.uT)(It.x,t,yt),(0,R.uT)(It.y,n,Jt),(0,R.uT)(It.z,e,kt),(0,R.qC)(yt,Jt,yt),(0,R.qC)(yt,kt,yt),function ve(t,n,e){if(!t.vertexAttributes||!t.vertexAttributes.position||0===n[3])return;const r=t.spatialReference;if((0,f.pC)(t.transform)){null!=e?.geographic&&e.geographic!==t.transform.geographic&&Nt.warn(`Specifying the 'geographic' parameter (${e.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`);const o=e?.origin??t.transform.getOriginPoint(r);!function Ae(t,n,e){const r=(0,G.s)(mt,e.x,e.y,e.z),o=(0,G.b)(mt,r,t.origin);t.applyLocalInverse(o,$t),t.rotation=(0,R.qC)(t.rotation,n,(0,R.Ue)()),t.applyLocalInverse(o,o),(0,G.b)(o,o,$t),t.translation=(0,G.a)((0,p.c)(),t.translation,o)}(t.transform,n,o)}else{const o=e?.origin??t.origin;(0,q.h)(t.spatialReference,e)?function Ce(t,n,e){const r=t.spatialReference,o=(0,Lt.rS)(r),i=Ht;(0,K.KC)(e,i,o)||(0,K.KC)(t.origin,i,o);const a=t.vertexAttributes.position,c=t.vertexAttributes.normal,u=t.vertexAttributes.tangent,d=new Float64Array(a.length),g=(0,f.pC)(c)?new Float32Array(c.length):null,x=(0,f.pC)(u)?new Float32Array(u.length):null;(0,K.Bm)(o,i,Et,o),(0,Tt.f)(Kt,Et);const A=Gt;(0,G.t)((0,R.ZZ)(Gt),(0,R.ZZ)(n),Kt),A[3]=n[3],(0,N.XO)(a,r,d),(0,f.pC)(c)&&(0,f.pC)(g)&&(0,N.Iz)(c,a,d,r,g),(0,f.pC)(u)&&(0,f.pC)(x)&&(0,N.wi)(u,a,d,r,x),gt(d,A,3,i),(0,N.To)(d,a,r),(0,f.pC)(c)&&(0,f.pC)(g)&&(gt(g,A,3),(0,N.Yk)(g,a,d,r,c)),(0,f.pC)(u)&&(0,f.pC)(x)&&(gt(x,A,4),(0,N.M2)(x,a,d,r,u)),t.vertexAttributesChanged()}(t,n,o):function we(t,n,e){const r=Ht;if(!(0,K.KC)(e,r,t.spatialReference)){const o=t.origin;r[0]=o.x,r[1]=o.y,r[2]=o.z,Nt.error(`Failed to project specified origin (wkid:${e.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}).`)}gt(t.vertexAttributes.position,n,3,r),gt(t.vertexAttributes.normal,n,3),gt(t.vertexAttributes.tangent,n,4),t.vertexAttributesChanged()}(t,n,o)}}(this,yt,r),this}offset(t,n,e,r){return this.loaded?(Zt[0]=t,Zt[1]=n,Zt[2]=e,function re(t,n,e){t.vertexAttributes&&t.vertexAttributes.position&&((0,f.pC)(t.transform)?(null!=e?.geographic&&e.geographic!==t.transform.geographic&&s.Z.getLogger("esri.geometry.support.meshUtils.offset").warn(`Specifying the 'geographic' parameter (${e.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`),function oe(t,n){const e=t.origin;t.origin=(0,G.a)((0,p.c)(),e,n)}(t.transform,n)):(0,q.h)(t.spatialReference,e)?function ie(t,n){const e=t.spatialReference,r=t.vertexAttributes.position,o=t.vertexAttributes.normal,i=t.vertexAttributes.tangent,a=new Float64Array(r.length),c=(0,f.pC)(o)?new Float32Array(o.length):null,u=(0,f.pC)(i)?new Float32Array(i.length):null,d=t.extent.center,g=ae;(0,K.Bm)(e,[d.x,d.y,d.z],Bt,(0,Lt.rS)(e)),(0,Tt.f)(Wt,Bt),(0,G.t)(g,n,Wt),(0,N.XO)(r,e,a),(0,f.pC)(o)&&(0,f.pC)(c)&&(0,N.Iz)(o,r,a,e,c),(0,f.pC)(i)&&(0,f.pC)(u)&&(0,N.wi)(i,r,a,e,u),zt(a,g),(0,N.To)(a,r,e),(0,f.pC)(o)&&(0,f.pC)(c)&&(0,N.Yk)(c,r,a,e,o),(0,f.pC)(i)&&(0,f.pC)(u)&&(0,N.M2)(u,r,a,e,i),t.vertexAttributesChanged()}(t,n):function se(t,n){zt(t.vertexAttributes.position,n),t.vertexAttributesChanged()}(t,n))}(this,Zt,r),this):(s.Z.getLogger(this.declaredClass).error("offset()","Mesh must be loaded before applying operations"),this)}scale(t,n){return this.loaded?(function be(t,n,e){if(!t.vertexAttributes||!t.vertexAttributes.position)return;const r=t.spatialReference;if((0,f.pC)(t.transform)){null!=e?.geographic&&e.geographic!==t.transform.geographic&&Yt.warn(`Specifying the 'geographic' parameter (${e.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`);const o=e?.origin??t.transform.getOriginPoint(r);!function Me(t,n,e){const r=(0,G.s)(dt,e.x,e.y,e.z),o=(0,G.b)(dt,r,t.origin);t.applyLocalInverse(o,Xt);const i=(0,G.g)((0,p.c)(),t.scale,n);t.scale=i,t.applyLocalInverse(o,o),(0,G.b)(o,o,Xt),t.translation=(0,G.a)((0,p.c)(),t.translation,o)}(t.transform,n,o)}else{const o=(0,q.h)(t.spatialReference,e),i=e&&e.origin||t.origin;o?function Ee(t,n,e){const r=t.spatialReference,o=(0,Lt.rS)(r),i=Qt;(0,K.KC)(e,i,o)||(0,K.KC)(t.origin,i,o);const a=t.vertexAttributes.position,c=t.vertexAttributes.normal,u=t.vertexAttributes.tangent,d=new Float64Array(a.length),g=(0,f.pC)(c)?new Float32Array(c.length):null,x=(0,f.pC)(u)?new Float32Array(u.length):null;(0,N.XO)(a,r,d),(0,f.pC)(c)&&(0,f.pC)(g)&&(0,N.Iz)(c,a,d,r,g),(0,f.pC)(u)&&(0,f.pC)(x)&&(0,N.wi)(u,a,d,r,x),Vt(d,n,i),(0,N.To)(d,a,r),(0,f.pC)(c)&&(0,f.pC)(g)&&(0,N.Yk)(g,a,d,r,c),(0,f.pC)(u)&&(0,f.pC)(x)&&(0,N.M2)(x,a,d,r,u),t.vertexAttributesChanged()}(t,n,i):function Ze(t,n,e){const r=Qt;if(!(0,K.KC)(e,r,t.spatialReference)){const o=t.origin;r[0]=o.x,r[1]=o.y,r[2]=o.z,Yt.error(`Failed to project specified origin (wkid:${e.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}).`)}Vt(t.vertexAttributes.position,n,r),t.vertexAttributesChanged()}(t,n,i)}}(this,t,n),this):(s.Z.getLogger(this.declaredClass).error("scale()","Mesh must be loaded before applying operations"),this)}centerAt(t,n){return this.loaded?(function y(t,n,e){if(!t.vertexAttributes||!t.vertexAttributes.position)return;const r=e?.origin??t.origin;(0,f.pC)(t.transform)?(null!=e?.geographic&&e.geographic!==t.transform.geographic&&W.warn(`Specifying the 'geographic' parameter (${e.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`),function X(t,n,e){const a=t.origin;t.origin=[a[0]+(n.x-e.x),a[1]+(n.y-e.y),a[2]+(n.hasZ&&e.hasZ?n.z-e.z:0)]}(t.transform,n,r)):(0,q.h)(t.spatialReference,e)?function bt(t,n,e){const r=(0,_.FF)(t.vertexAttributes,e,{geographic:!0}),{position:o,normal:i,tangent:a}=(0,_.iv)(r,n,{geographic:!0});t.vertexAttributes.position=o,t.vertexAttributes.normal=i,t.vertexAttributes.tangent=a,t.vertexAttributesChanged()}(t,n,r):function vt(t,n,e){const r=$,o=At;if((0,K.KC)(n,o,t.spatialReference)){if(!(0,K.KC)(e,r,t.spatialReference)){const i=t.origin;r[0]=i.x,r[1]=i.y,r[2]=i.z,W.error(`Failed to project specified origin (wkid:${e.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}).`)}(function ot(t,n,e){if(t)for(let r=0;r<t.length;r+=3)for(let o=0;o<3;o++)t[r+o]+=n[o]-e[o]})(t.vertexAttributes.position,o,r),t.vertexAttributesChanged()}else W.error(`Failed to project centerAt location (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid})`)}(t,n,r)}(this,t,n),this):(s.Z.getLogger(this.declaredClass).error("centerAt()","Mesh must be loaded before applying operations"),this)}load(t){return(0,f.pC)(this.external)&&this.addResolvingPromise(function _t(t,n,e){return Rt.apply(this,arguments)}(this,this.external.source,t)),Promise.resolve(this)}updateExternalSource(t){this._set("external",t)}clone(){let t=null;if(this.components){const e=new Map,r=new Map;t=this.components.map(o=>o.cloneWithDeduplication(e,r))}const n={components:t,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes.clone(),transform:(0,f.pC)(this.transform)?this.transform.clone():null,external:(0,f.pC)(this.external)?{source:this.external.source,extent:(0,f.pC)(this.external.extent)?this.external.extent.clone():null}:null};return new tt(n)}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}toBinaryGLTF(t){var n=this;return(0,P.Z)(function*(){const e=l.e(4367).then(l.bind(l,54367)),r=n.load(),o=yield Promise.all([e,r]),{toBinaryGLTF:i}=o[0];return i(n,t)})()}static createBox(t,n){if(!(t instanceof C.Z))return s.Z.getLogger(ct).error(".createBox()","expected location to be a Point instance"),null;const e=new tt(Mt(function le(){const{faceDescriptions:t,faceVertexOffsets:n,uvScales:e}=de,r=4*t.length,o=new Float64Array(3*r),i=new Float32Array(3*r),a=new Float32Array(2*r),c=new Uint32Array(2*t.length*3);let u=0,d=0,g=0,x=0;for(let A=0;A<t.length;A++){const v=t[A],Q=u/3;for(const H of n)c[x++]=Q+H;const it=v.corners;for(let H=0;H<4;H++){const et=it[H];let J=0;a[g++]=.25*e[H][0]+v.uvOrigin[0],a[g++]=v.uvOrigin[1]-.25*e[H][1];for(let nt=0;nt<3;nt++)0!==v.axis[nt]?(o[u++]=.5*v.axis[nt],i[d++]=v.axis[nt]):(o[u++]=.5*et[J++],i[d++]=0)}}return{position:o,normal:i,uv:a,faces:c}}(),t,n));return n&&n.imageFace&&"all"!==n.imageFace?function ce(t,n){const e=t.components[0],r=e.faces,o=ye[n],i=6*o,a=new Array(6),c=new Array(r.length-6);let u=0,d=0;for(let g=0;g<r.length;g++)g>=i&&g<i+6?a[u++]=r[g]:c[d++]=r[g];if((0,f.pC)(t.vertexAttributes.uv)){const g=new Float32Array(t.vertexAttributes.uv),x=4*o*2,A=[0,1,1,1,1,0,0,0];for(let v=0;v<A.length;v++)g[x+v]=A[v];t.vertexAttributes.uv=g}return t.components=[new B.Z({faces:a,material:e.material}),new B.Z({faces:c})],t}(e,n.imageFace):e}static createSphere(t,n){return t instanceof C.Z?new tt(Mt(function fe(t=0){const n=Math.round(8*2**t),e=2*n,r=(n-1)*(e+1)+2*e,o=new Float64Array(3*r),i=new Float32Array(3*r),a=new Float32Array(2*r),c=new Uint32Array((n-1)*e*2*3);let u=0,d=0,g=0,x=0;for(let A=0;A<=n;A++){const v=A/n*Math.PI+.5*Math.PI,Q=Math.cos(v),it=Math.sin(v);z[2]=it;const H=0===A||A===n,et=H?e-1:e;for(let J=0;J<=et;J++){const nt=J/et*2*Math.PI;z[0]=-Math.sin(nt)*Q,z[1]=Math.cos(nt)*Q;for(let lt=0;lt<3;lt++)o[u]=.5*z[lt],i[u]=z[lt],++u;a[d++]=(J+(H?.5:0))/e,a[d++]=A/n,0!==A&&J!==e&&(A!==n&&(c[g++]=x,c[g++]=x+1,c[g++]=x-e),1!==A&&(c[g++]=x,c[g++]=x-e,c[g++]=x-e-1)),x++}}return{position:o,normal:i,uv:a,faces:c}}(n&&n.densificationFactor||0),t,n)):(s.Z.getLogger(ct).error(".createSphere()","expected location to be a Point instance"),null)}static createCylinder(t,n){return t instanceof C.Z?new tt(Mt(function ue(t=0){const e=Math.round(16*2**t),r=4*(e+1)+2*e,o=new Float64Array(3*r),i=new Float32Array(3*r),a=new Float32Array(2*r),c=new Uint32Array(4*e*3);let u=0,d=0,g=0,x=0,A=0;for(let v=0;v<=5;v++){const Q=0===v||5===v,it=v<=1||v>=4,H=2===v||4===v,et=Q?e-1:e;for(let J=0;J<=et;J++){const nt=J/et*2*Math.PI,lt=Q?0:.5;z[0]=lt*Math.sin(nt),z[1]=lt*-Math.cos(nt),z[2]=v<=2?.5:-.5;for(let xt=0;xt<3;xt++)o[u++]=z[xt],i[d++]=it?2===xt?v<=1?1:-1:0:2===xt?0:z[xt]/lt;a[g++]=(J+(Q?.5:0))/e,a[g++]=v<=1?1*v/3:v<=3?1*(v-2)/3+1/3:1*(v-4)/3+2/3,H||0===v||J===e||(5!==v&&(c[x++]=A,c[x++]=A+1,c[x++]=A-e),1!==v&&(c[x++]=A,c[x++]=A-e,c[x++]=A-e-1)),A++}}return{position:o,normal:i,uv:a,faces:c}}(n&&n.densificationFactor||0),t,n)):(s.Z.getLogger(ct).error(".createCylinder()","expected location to be a Point instance"),null)}static createPlane(t,n){if(!(t instanceof C.Z))return s.Z.getLogger(ct).error(".createPlane()","expected location to be a Point instance"),null;const e=n?.facing??"up",r=function he(t,n){const e="number"==typeof n?n:null!=n?n.width:1,r="number"==typeof n?n:null!=n?n.height:1;switch(t){case"up":case"down":return{width:e,depth:r};case"north":case"south":return{width:e,height:r};case"east":case"west":return{depth:e,height:r}}}(e,n?.size);return new tt(Mt(function pe(t){const n=Ct.facingAxisOrderSwap[t],e=Ct.position,r=Ct.normal,o=new Float64Array(e.length),i=new Float32Array(r.length);let a=0;for(let c=0;c<4;c++){const u=a;for(let d=0;d<3;d++){const g=n[d],x=Math.abs(g)-1,A=g>=0?1:-1;o[a]=e[u+x]*A,i[a]=r[u+x]*A,a++}}return{position:o,normal:i,uv:new Float32Array(Ct.uv),faces:new Uint32Array(Ct.faces),isPlane:!0}}(e),t,{...n,size:r}))}static createFromPolygon(t,n){if(!(t instanceof M.Z))return s.Z.getLogger(ct).error(".createFromPolygon()","expected polygon to be a Polygon instance"),null;const e=(0,D.bT)(t);return new tt({vertexAttributes:new I.Q({position:e.position}),components:[new B.Z({faces:e.faces,shading:"flat",material:n?.material??null})],spatialReference:t.spatialReference})}static createFromGLTF(t,n,e){return(0,P.Z)(function*(){if(!(t instanceof C.Z))throw s.Z.getLogger(ct).error(".createfromGLTF()","expected location to be a Point instance"),new S.Z("invalid-input","Expected location to be a Point instance");const{loadGLTFMesh:r}=yield(0,h.Hl)(Promise.all([l.e(8742),l.e(6688)]).then(l.bind(l,29185)),e);return new tt(yield r(t,n,e))})()}static createWithExternalSource(t,n,e){const r=e?.extent??null,o=e?.transform?.clone()??new E.Z;return o.origin=[t.x,t.y,t.z??0],new tt({external:{source:n,extent:r},transform:o,spatialReference:t.spatialReference})}static createIncomplete(t,n){const e=n?.transform?.clone()??new E.Z;e.origin=[t.x,t.y,t.z??0];const o=new tt({transform:e,spatialReference:t.spatialReference});return o.addResolvingPromise(Promise.reject(new S.Z("mesh-incomplete","Mesh resources are not complete"))),o}};(0,w._)([(0,Z.Cb)({type:[B.Z],json:{write:!0}})],V.prototype,"components",void 0),(0,w._)([(0,Z.Cb)({type:E.Z,json:{write:!0}})],V.prototype,"transform",void 0),(0,w._)([(0,Z.Cb)({constructOnly:!0})],V.prototype,"external",void 0),(0,w._)([(0,Z.Cb)({readOnly:!0})],V.prototype,"hasExtent",null),(0,w._)([(0,Z.Cb)({readOnly:!0})],V.prototype,"_boundingInfo",null),(0,w._)([(0,Z.Cb)({readOnly:!0})],V.prototype,"anchor",null),(0,w._)([(0,Z.Cb)({readOnly:!0})],V.prototype,"origin",null),(0,w._)([(0,Z.Cb)({readOnly:!0,json:{read:!1}})],V.prototype,"extent",null),(0,w._)([(0,Z.Cb)({readOnly:!0,json:{read:!1,write:!0,default:!0}})],V.prototype,"hasZ",void 0),(0,w._)([(0,Z.Cb)({readOnly:!0,json:{read:!1,write:!0,default:!1}})],V.prototype,"hasM",void 0),(0,w._)([(0,Z.Cb)({type:I.Q,nonNullable:!0,json:{write:!0}})],V.prototype,"vertexAttributes",void 0),V=tt=(0,w._)([(0,L.j)(ct)],V);const It={x:(0,p.f)(1,0,0),y:(0,p.f)(0,1,0),z:(0,p.f)(0,0,1)},yt=(0,R.Ue)(),Jt=(0,R.Ue)(),kt=(0,R.Ue)(),Zt=(0,p.c)(),qt=V;var at,t,Re=l(65234),Fe=l(17253);function Oe(t,n,e){const r=e.features;e.features=[],delete e.geometryType;const o=Fe.Z.fromJSON(e);if(o.geometryType="mesh",!e.assetMaps)return o;const i=function De(t,n){const e=new Map;for(const r of n){const o=r.parentGlobalId;if(null==o)continue;const i=r.assetName,a=r.assetURL,c=r.conversionStatus;let u=e.get(o);if(null==u)switch(u={name:i,status:at.FAILED,url:a,projectVertices:Se(r.flags).projectVertices},e.set(o,u),c){case"COMPLETED":case"SUBMITTED":u.status=at.COMPLETED;break;case"INPROGRESS":u.status=at.PENDING;break;default:u.status=at.FAILED}else console.warn(`Multiple asset parts not expected. Ignoring additional parts. conflicting assetname: ${r.assetName}`)}return e}(0,e.assetMaps),a=o.spatialReference??Re.Z.WGS84,c=e.globalIdFieldName,{outFields:u}=t,d=(0,f.pC)(u)&&u.length>0?function Pe(t){return({attributes:n})=>{if(!n)return{};if(!t)return n;for(const e in n)t.has(e)||delete n[e];return n}}(u.includes("*")?null:new Set(u)):()=>({});for(const g of r){const x=Ue(g,c,a,n,i);(0,f.pC)(x)&&o.features.push(new Y.Z({geometry:x,attributes:d(g)}))}return o}function Ue(t,n,e,r,o){const a=o.get(t.attributes[n]);if(null==a||a.status===at.FAILED||null==a.url)return null;const c=function Le({attributes:t},n,{transformFieldRoles:e}){return new C.Z({x:t[e.originX],y:t[e.originY],z:t[e.originZ],spatialReference:n})}(t,e,r),u=k.Z.fromJSON(t.geometry);u.spatialReference=e;const d=function Ie(t,{transformFieldRoles:n},e){return new E.Z({translation:[t[n.translationX],-t[n.translationZ],t[n.translationY]],rotation:(0,R.uT)([t[n.rotationX],t[n.rotationZ],t[n.rotationY]],t[n.rotationDeg]),scale:[t[n.scaleX],t[n.scaleY],t[n.scaleZ]],geographic:e})}(t.attributes,r,a.projectVertices);return a.status===at.PENDING?qt.createIncomplete(c,{extent:u,transform:d}):qt.createWithExternalSource(c,[{name:a.name,source:a.url}],{extent:u,transform:d})}function Se(t){return{projectVertices:t.includes("PROJECT_VERTICES")}}(t=at||(at={}))[t.FAILED=0]="FAILED",t[t.PENDING=1]="PENDING",t[t.COMPLETED=2]="COMPLETED"},6040:(wt,rt,l)=>{l.d(rt,{QZ:()=>k,Rq:()=>P,bg:()=>f});var Y=l(55713);function f(w,S=!1){return w<=Y.DB?S?new Array(w).fill(0):new Array(w):new Float64Array(w)}function k(w){return length<=Y.DB?Array.from(w):new Float64Array(w)}function P(w,S,j){return Array.isArray(w)?w.slice(S,S+j):w.subarray(S,S+j)}},37187:(wt,rt,l)=>{l.d(rt,{$z:()=>k,DX:()=>T,mi:()=>f,p:()=>j});var Y=l(55713);function f(s){if(Array.isArray(s)){if(s.length<Y.DB)return s;for(const m of s)if(m>=65536)return new Uint32Array(s);return new Uint16Array(s)}if(s.length<Y.DB)return Array.from(s);if(s.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return s;for(const m of s)if(m>=65536)return s;return new Uint16Array(s)}function k(s){const m=3*s;return m<=Y.DB?new Array(m):m<=65536?new Uint16Array(m):new Uint32Array(m)}let P=(()=>{const s=new Uint32Array(131072);for(let m=0;m<s.length;++m)s[m]=m;return s})();const w=[0],S=(()=>{const s=new Uint16Array(65536);for(let m=0;m<s.length;++m)s[m]=m;return s})();function j(s){if(1===s)return w;if(s<Y.DB)return Array.from(new Uint16Array(S.buffer,0,s));if(s<S.length)return new Uint16Array(S.buffer,0,s);if(s>P.length){const m=Math.max(2*P.length,s);P=new Uint32Array(m);for(let h=0;h<P.length;h++)P[h]=h}return new Uint32Array(P.buffer,0,s)}function T(s){if(1===s)return w;if(s<Y.DB)return Array.from(new Uint16Array(S.buffer,0,s));if(s<S.length)return new Uint16Array(S.slice(0,s));if(s>P.length){const m=new Uint32Array(s);for(let h=0;h<m.length;h++)m[h]=h;return m}return new Uint32Array(P.slice(0,s))}}}]);